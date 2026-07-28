// ============================================================
// Backend Smart Room Monitor -- INFRASTRUKTUR, BUKAN MATERI AJAR.
// File ini dijalankan oleh PELATIH/PANITIA sebelum sesi kelas.
// Siswa maupun pengajar web dev TIDAK perlu membuka/mengedit file ini.
// ============================================================

require("dotenv").config();
const express = require("express");
const { WebSocketServer } = require("ws");
const { createClient } = require("@supabase/supabase-js");

// db.schema: tabel readings & fan_control ada di skema "ekskul_coding_asy_syahid",
// bukan "public" -- lihat backend/supabase_schema.sql. Skema ini juga harus
// ditambahkan ke "Exposed schemas" di Project Settings > API pada dashboard Supabase.
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
  db: { schema: "ekskul_coding_asy_syahid" },
});
const app = express();
app.use(express.json());

// Izinkan dashboard dibuka dari origin mana pun (Live Server, file lokal, dll)
// memanggil backend ini -- demo kelas LAN, bukan API publik production.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-API-Key");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server jalan di port", process.env.PORT || 3000);
});

// --- WebSocket (dipakai dashboard Demo saja) ---
const wss = new WebSocketServer({ server });
const clients = new Set();
wss.on("connection", (ws) => {
  clients.add(ws);
  ws.on("close", () => clients.delete(ws));
});
function broadcast(msg) {
  const s = JSON.stringify(msg);
  for (const c of clients) if (c.readyState === 1) c.send(s);
}

// --- Cek API key (hanya untuk endpoint yang dipanggil ESP32) ---
function checkApiKey(req, res, next) {
  if (req.header("X-API-Key") !== process.env.API_KEY) {
    return res.status(401).json({ ok: false, error: "invalid api key" });
  }
  next();
}

// --- Ambil state kontrol fan untuk satu device (default kalau belum ada baris) ---
async function getFanControl(deviceId) {
  const { data, error } = await supabase
    .from("fan_control")
    .select("*")
    .eq("device_id", deviceId)
    .maybeSingle();
  if (error) console.error("[getFanControl] error Supabase:", error);
  return data || { device_id: deviceId, fan_mode: "auto", manual_fan_on: false, threshold: 30, esp32_ip: null };
}

function computeFanOn(fc, temp) {
  return fc.fan_mode === "manual" ? fc.manual_fan_on : temp > fc.threshold;
}

// --- Kirim perintah relay langsung ke ESP32, diam-diam kalau gagal ---
async function pushToEsp32(ip, fanOn) {
  if (!ip) return;
  try {
    await fetch(`http://${ip}/fan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fanOn }),
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // ESP32 mungkin off/pindah jaringan -- tidak boleh bikin request dashboard gagal
  }
}

// ============================================================
// ESP32 -> backend: kirim data sensor tiap beberapa detik
// ============================================================
app.post("/api/readings", checkApiKey, async (req, res) => {
  const { deviceId, temp, humidity, ip } = req.body;
  if (!deviceId || typeof temp !== "number" || typeof humidity !== "number") {
    return res.status(400).json({ ok: false, error: "missing deviceId, temp, or humidity" });
  }

  const fc = await getFanControl(deviceId);
  const fanOn = computeFanOn(fc, temp);

  await supabase.from("readings").insert({ device_id: deviceId, payload: { temp, humidity, fanOn } });
  await supabase.from("fan_control").upsert({
    device_id: deviceId,
    fan_mode: fc.fan_mode,
    manual_fan_on: fc.manual_fan_on,
    threshold: fc.threshold,
    esp32_ip: ip || fc.esp32_ip,
    updated_at: new Date().toISOString(),
  });

  broadcast({
    type: "reading",
    deviceId,
    data: { temp, humidity, fanMode: fc.fan_mode, manualFanOn: fc.manual_fan_on, threshold: fc.threshold, fanOn },
    timestamp: new Date().toISOString(),
  });

  res.json({ ok: true, fanOn });
});

// ============================================================
// Dashboard -> backend: riwayat data sensor
// ============================================================
app.get("/api/readings/:deviceId", async (req, res) => {
  const limit = Number(req.query.limit) || 20;
  const { data } = await supabase
    .from("readings")
    .select("payload, created_at")
    .eq("device_id", req.params.deviceId)
    .order("created_at", { ascending: false })
    .limit(limit);

  const readings = (data || []).reverse().map((r) => ({ payload: r.payload, createdAt: r.created_at }));
  res.json({ ok: true, readings });
});

// ============================================================
// Dashboard -> backend: baca status kontrol fan
// ============================================================
app.get("/api/fan-control/:deviceId", async (req, res) => {
  const fc = await getFanControl(req.params.deviceId);
  const { data: last } = await supabase
    .from("readings")
    .select("payload")
    .eq("device_id", req.params.deviceId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  const lastTemp = last ? last.payload.temp : 0;

  res.json({
    ok: true,
    fanMode: fc.fan_mode,
    manualFanOn: fc.manual_fan_on,
    threshold: fc.threshold,
    fanOn: computeFanOn(fc, lastTemp),
  });
});

// ============================================================
// Dashboard -> backend: ubah kontrol fan (mode/manual/threshold)
// ============================================================
app.post("/api/fan-control/:deviceId", async (req, res) => {
  const deviceId = req.params.deviceId;
  const current = await getFanControl(deviceId);

  const merged = {
    device_id: deviceId,
    fan_mode: req.body.fanMode ?? current.fan_mode,
    manual_fan_on: req.body.manualFanOn ?? current.manual_fan_on,
    threshold: req.body.threshold ?? current.threshold,
    esp32_ip: current.esp32_ip,
    updated_at: new Date().toISOString(),
  };

  const { data: last } = await supabase
    .from("readings")
    .select("payload")
    .eq("device_id", deviceId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  const lastTemp = last ? last.payload.temp : 0;
  const fanOn = computeFanOn(merged, lastTemp);

  const { error: upsertError } = await supabase.from("fan_control").upsert(merged);
  if (upsertError) console.error("[POST fan-control] error upsert Supabase:", upsertError);
  await pushToEsp32(merged.esp32_ip, fanOn);

  broadcast({
    type: "reading",
    deviceId,
    data: { temp: lastTemp, humidity: last ? last.payload.humidity : 0, fanMode: merged.fan_mode, manualFanOn: merged.manual_fan_on, threshold: merged.threshold, fanOn },
    timestamp: new Date().toISOString(),
  });

  res.json({ ok: true, fanMode: merged.fan_mode, manualFanOn: merged.manual_fan_on, threshold: merged.threshold, fanOn });
});
