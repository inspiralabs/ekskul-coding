// ============================================================
// Tampilan dashboard -- BOLEH DIUBAH bebas (materi web dev/UI).
// Data sensor & kontrol fan diambil dari api.js (JANGAN diubah).
// ============================================================

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }

document.getElementById("deviceIdLabel").textContent = MY_DEVICE_ID;

const state = {
  temp: 26, humidity: 55, prevTemp: 26, prevHumidity: 55,
  displayTemp: 26, displayHumidity: 55,
  history: [], fanMode: "auto", manualFanOn: false, fanOn: false,
  threshold: 30, chartView: "both", darkMode: false, online: false,
};

const themes = {
  light: { bg: "#F2F8F7", card: "#FFFFFF", text: "#1F2937", muted: "#6B7785", border: "rgba(15,30,30,0.07)", shadow: "rgba(20,40,40,0.08)" },
  dark: { bg: "#121A1F", card: "#1C262C", text: "#EAF2F1", muted: "#93A6AF", border: "rgba(255,255,255,0.08)", shadow: "rgba(0,0,0,0.35)" },
};
const accent = { primary: "#FF9F43", secondary: "#2ED9A6" };

function theme() { return state.darkMode ? themes.dark : themes.light; }

function applyTheme() {
  const t = theme();
  const app = document.getElementById("app");
  app.style.background = t.bg;
  app.style.color = t.text;
  document.querySelectorAll(".card, #thresholdPanel").forEach((el) => {
    el.style.background = t.card;
    el.style.border = `1px solid ${t.border}`;
    el.style.boxShadow = `0 4px 20px ${t.shadow}`;
  });
  document.querySelectorAll(".cardTitle").forEach((el) => (el.style.color = t.text));
  document.querySelectorAll(".muted").forEach((el) => (el.style.color = t.muted));
  document.querySelectorAll(".gridLine").forEach((el) => el.setAttribute("stroke", t.border));
  document.querySelectorAll(".ringTrack").forEach((el) => el.setAttribute("stroke", t.border));
  document.getElementById("logoTile").style.background = `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})`;
  ["connectionPill", "clockPill", "darkModeBtn"].forEach((id) => {
    const el = document.getElementById(id);
    el.style.background = t.card;
    el.style.borderColor = t.border;
    el.style.boxShadow = `0 2px 10px ${t.shadow}`;
  });
  document.getElementById("clockPill").style.color = t.text;
  document.getElementById("connectionLabel").style.color = t.text;
  document.getElementById("thresholdPanel").style.background = t.bg;
  const modeIdle = { bg: t.bg, color: t.muted };
  const modeActive = { bg: t.text, color: t.card };
  document.getElementById("modeManualBtn").style.background = state.fanMode === "manual" ? modeActive.bg : modeIdle.bg;
  document.getElementById("modeManualBtn").style.color = state.fanMode === "manual" ? modeActive.color : modeIdle.color;
  document.getElementById("modeAutoBtn").style.background = state.fanMode === "auto" ? modeActive.bg : modeIdle.bg;
  document.getElementById("modeAutoBtn").style.color = state.fanMode === "auto" ? modeActive.color : modeIdle.color;
}

function render() {
  const s = state;
  const t = theme();

  document.getElementById("connectionDot").style.background = s.online ? "#2ED9A6" : "#FF6B6B";
  document.getElementById("connectionDot").style.color = s.online ? "#2ED9A6" : "#FF6B6B";
  document.getElementById("connectionLabel").textContent = s.online ? "Online" : "Offline";
  document.getElementById("clockPill").textContent = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const isTempAlert = s.displayTemp > 33 || s.displayTemp < 16;
  const isHumidityAlert = s.displayHumidity > 85 || s.displayHumidity < 25;
  const banner = document.getElementById("alertBanner");
  if (isTempAlert || isHumidityAlert) {
    banner.style.display = "flex";
    banner.style.background = s.darkMode ? "#4A2E12" : "#FFE9CC";
    let msg = "";
    if (isTempAlert && isHumidityAlert) msg = "Suhu dan kelembapan di luar batas normal — periksa ruangan!";
    else if (isTempAlert) msg = s.displayTemp > 33 ? "Suhu terlalu tinggi! Pertimbangkan menyalakan kipas." : "Suhu terlalu rendah untuk kenyamanan ruangan.";
    else msg = s.displayHumidity > 85 ? "Kelembapan sangat tinggi — risiko lembap/jamur." : "Udara terlalu kering.";
    document.getElementById("alertMessage").textContent = msg;
  } else {
    banner.style.display = "none";
  }

  const tempColor = s.displayTemp < 20 ? "#4FB6E8" : s.displayTemp <= 30 ? "#2ED9A6" : "#FF6B6B";
  const tempStatusLabel = s.displayTemp < 20 ? "Dingin" : s.displayTemp <= 30 ? "Normal" : "Panas";
  const humColor = s.displayHumidity < 35 ? "#FFC94D" : s.displayHumidity <= 70 ? "#4FB6E8" : "#B08CFF";
  const humStatusLabel = s.displayHumidity < 35 ? "Kering" : s.displayHumidity <= 70 ? "Normal" : "Lembap";

  const circumference = 439.8;
  const tempPct = clamp((s.displayTemp - 10) / 30, 0, 1);
  const humPct = clamp((s.displayHumidity - 20) / 70, 0, 1);

  document.getElementById("tempRing").setAttribute("stroke", tempColor);
  document.getElementById("tempRing").setAttribute("stroke-dashoffset", circumference - tempPct * circumference);
  document.getElementById("tempValue").textContent = (Math.round(s.displayTemp * 10) / 10).toFixed(1) + "°";
  document.getElementById("tempStatusLabel").textContent = tempStatusLabel;
  document.getElementById("tempStatusLabel").style.color = tempColor;
  document.getElementById("tempIcon").querySelectorAll("path,circle").forEach((el) => el.setAttribute("stroke", tempColor));
  document.getElementById("tempIcon").querySelector("circle").setAttribute("fill", tempColor);

  document.getElementById("humRing").setAttribute("stroke", humColor);
  document.getElementById("humRing").setAttribute("stroke-dashoffset", circumference - humPct * circumference);
  document.getElementById("humValue").textContent = Math.round(s.displayHumidity) + "%";
  document.getElementById("humStatusLabel").textContent = humStatusLabel;
  document.getElementById("humStatusLabel").style.color = humColor;
  document.getElementById("humIcon").setAttribute("fill", humColor);

  const tDiff = s.temp - s.prevTemp;
  const hDiff = s.humidity - s.prevHumidity;
  const tempTrendIcon = tDiff > 0.3 ? "▲" : tDiff < -0.3 ? "▼" : "—";
  const humTrendIcon = hDiff > 0.5 ? "▲" : hDiff < -0.5 ? "▼" : "—";
  document.getElementById("tempTrend").textContent = `${tempTrendIcon} ${Math.abs(tDiff).toFixed(1)}°`;
  document.getElementById("tempTrend").style.color = tDiff > 0.3 ? "#FF6B6B" : tDiff < -0.3 ? "#4FB6E8" : t.muted;
  document.getElementById("humTrend").textContent = `${humTrendIcon} ${Math.round(Math.abs(hDiff))}%`;
  document.getElementById("humTrend").style.color = hDiff > 0.5 ? "#B08CFF" : hDiff < -0.5 ? "#FFC94D" : t.muted;

  // Dua pita terpisah (suhu di atas, kelembapan di bawah, gridline y=95 sebagai
  // batas) -- bukan berbagi rentang Y penuh -- supaya kedua garis tidak pernah
  // menempel/tumpang tindih walau nilainya kebetulan proporsional serupa.
  const hist = s.history.length ? s.history : [{ temp: s.temp, humidity: s.humidity, time: null }];
  const n = hist.length;
  const xStep = n > 1 ? 600 / (n - 1) : 0;
  const chartPoints = hist.map((p, i) => ({
    x: i * xStep,
    yTemp: 90 - clamp((p.temp - 10) / 30, 0, 1) * 76,
    yHum: 104 + (1 - clamp((p.humidity - 20) / 70, 0, 1)) * 76,
    temp: p.temp, humidity: p.humidity, time: p.time,
  }));
  document.getElementById("tempPolyline").setAttribute("points", chartPoints.map((p) => `${p.x},${p.yTemp}`).join(" "));
  document.getElementById("humPolyline").setAttribute("points", chartPoints.map((p) => `${p.x},${p.yHum}`).join(" "));
  document.getElementById("tempPolyline").style.opacity = s.chartView === "humidity" ? 0 : 1;
  document.getElementById("humPolyline").style.opacity = s.chartView === "temp" ? 0 : 1;
  renderChartHoverPoints(chartPoints);

  document.getElementById("fanStatusLabel").textContent = s.fanOn ? "Fan Menyala" : "Fan Mati";
  document.getElementById("fanHintLabel").textContent = s.fanMode === "auto" ? `Mode otomatis · ambang ${s.threshold}°C` : "Mode manual · tekan untuk ubah";
  document.getElementById("fanToggleBtn").style.background = s.fanOn ? `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})` : (s.darkMode ? "#2A343A" : "#B9C4C8");
  document.getElementById("fanIcon").style.animation = s.fanOn ? "fanspin 1.1s linear infinite" : "none";

  document.getElementById("thresholdPanel").style.display = s.fanMode === "auto" ? "block" : "none";
  document.getElementById("thresholdValue").textContent = s.threshold + "°C";
  // Jangan paksa .value slider selagi user sedang menggesernya -- render() ini
  // dipanggil 20x/detik oleh animasi lerp, dan tanpa guard ini slider akan
  // "ditarik balik" ke posisi lama setiap 50ms, membuatnya terasa macet.
  if (!isDraggingThreshold) {
    document.getElementById("thresholdSlider").value = s.threshold;
  }
  document.getElementById("thresholdHint").textContent = `Kipas menyala otomatis jika suhu > ${s.threshold}°C`;

  applyTheme();
}

// --- Tooltip grafik: satu target hover tak-terlihat per titik data ---
const SVG_NS = "http://www.w3.org/2000/svg";
function formatWaktu(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
function renderChartHoverPoints(chartPoints) {
  const g = document.getElementById("chartHoverPoints");
  const tooltip = document.getElementById("chartTooltip");
  const svg = document.getElementById("chartSvg");

  // Bangun ulang titik hover hanya kalau jumlah data berubah, supaya tidak
  // membuat elemen SVG baru terus-menerus tiap render() (dipanggil 20x/detik).
  if (g.childElementCount !== chartPoints.length) {
    g.innerHTML = "";
    chartPoints.forEach(() => {
      const c = document.createElementNS(SVG_NS, "circle");
      c.setAttribute("r", "14");
      c.setAttribute("fill", "transparent");
      c.style.cursor = "pointer";
      g.appendChild(c);
    });
  }

  Array.from(g.children).forEach((circle, i) => {
    const p = chartPoints[i];
    const yTengah = (p.yTemp + p.yHum) / 2;
    circle.setAttribute("cx", p.x);
    circle.setAttribute("cy", yTengah);
    circle.onmousemove = (e) => {
      const rect = svg.getBoundingClientRect();
      const scale = rect.width / 600; // viewBox 600 lebar, discale ke lebar sungguhan
      tooltip.style.left = `${p.x * scale}px`;
      tooltip.style.top = `${Math.min(p.yTemp, p.yHum) * (rect.height / 190)}px`;
      tooltip.style.display = "block";
      const t = theme();
      tooltip.style.background = t.text;
      tooltip.style.color = t.card;
      tooltip.innerHTML = `${formatWaktu(p.time) ? formatWaktu(p.time) + "<br>" : ""}🌡️ ${p.temp.toFixed(1)}°C &nbsp; 💧 ${Math.round(p.humidity)}%`;
    };
    circle.onmouseleave = () => { tooltip.style.display = "none"; };
  });
}

// --- Tombol chart view ---
document.querySelectorAll(".chartBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.chartView = btn.dataset.view;
    document.querySelectorAll(".chartBtn").forEach((b) => {
      const active = b.dataset.view === state.chartView;
      b.style.background = active ? accent.primary : "transparent";
      b.style.color = active ? "#fff" : theme().muted;
    });
    render();
  });
});

// --- Dark mode ---
document.getElementById("darkModeBtn").addEventListener("click", () => {
  state.darkMode = !state.darkMode;
  render();
});

// --- Kontrol fan: kirim perintah ke backend, bukan ubah state lokal langsung ---
async function kirimPerintahFanAman(perubahan) {
  try {
    const hasil = await kirimPerintahFan(perubahan);
    applyFanControlResult(hasil);
  } catch (err) {
    console.error("Gagal kirim perintah fan ke backend:", err);
    alert("Tidak bisa menghubungi server. Cek: backend sudah jalan? API_BASE di api.js sudah diisi IP yang benar?");
  }
}

document.getElementById("fanToggleBtn").addEventListener("click", () => {
  if (state.fanMode !== "manual") return;
  kirimPerintahFanAman({ manualFanOn: !state.manualFanOn });
});
document.getElementById("modeManualBtn").addEventListener("click", () => {
  kirimPerintahFanAman({ fanMode: "manual" });
});
document.getElementById("modeAutoBtn").addEventListener("click", () => {
  kirimPerintahFanAman({ fanMode: "auto" });
});
// Slider threshold: tampilkan angka terkini SAAT digeser (input), baru kirim
// ke backend SETELAH dilepas (change) -- supaya gesernya terasa mulus dan
// tidak spam request tiap pixel gerakan.
let isDraggingThreshold = false;
const thresholdSliderEl = document.getElementById("thresholdSlider");
thresholdSliderEl.addEventListener("pointerdown", () => { isDraggingThreshold = true; });
thresholdSliderEl.addEventListener("input", (e) => {
  document.getElementById("thresholdValue").textContent = e.target.value + "°C";
  document.getElementById("thresholdHint").textContent = `Kipas menyala otomatis jika suhu > ${e.target.value}°C`;
});
thresholdSliderEl.addEventListener("change", (e) => {
  isDraggingThreshold = false;
  kirimPerintahFanAman({ threshold: Number(e.target.value) });
});

function applyFanControlResult(hasil) {
  state.fanMode = hasil.fanMode;
  state.manualFanOn = hasil.manualFanOn;
  state.threshold = hasil.threshold;
  state.fanOn = hasil.fanOn;
  render();
}

function pushHistory(temp, humidity, time) {
  state.history = [...state.history, { temp, humidity, time }].slice(-20);
}

function applyReadingData(data, time) {
  state.prevTemp = state.temp;
  state.prevHumidity = state.humidity;
  state.temp = data.temp;
  state.humidity = data.humidity;
  state.fanMode = data.fanMode;
  state.manualFanOn = data.manualFanOn;
  state.threshold = data.threshold;
  state.fanOn = data.fanOn;
  pushHistory(data.temp, data.humidity, time);
  state.online = true;
}

// --- Animasi lerp menuju nilai terbaru, seperti versi desain asli ---
// Dilewati selagi slider threshold sedang digeser: render() penuh (gauge,
// chart, tema) tiap 50ms itu berat dan bikin drag terasa tersendat kalau
// dipaksa jalan bersamaan dengan browser sedang melacak gerakan slider.
setInterval(() => {
  if (isDraggingThreshold) return;
  state.displayTemp = lerp(state.displayTemp, state.temp, 0.15);
  state.displayHumidity = lerp(state.displayHumidity, state.humidity, 0.15);
  render();
}, 50);

setInterval(render, 1000); // jam tetap jalan tiap detik

// --- Ambil riwayat awal, lalu buka koneksi realtime ---
(async function init() {
  try {
    const riwayat = await ambilRiwayat(20);
    state.history = riwayat.map((r) => ({ temp: r.payload.temp, humidity: r.payload.humidity, time: r.createdAt }));
    if (riwayat.length) {
      const last = riwayat[riwayat.length - 1].payload;
      state.temp = state.displayTemp = last.temp;
      state.humidity = state.displayHumidity = last.humidity;
      state.fanOn = last.fanOn;
    }
    const fan = await ambilStatusFan();
    state.fanMode = fan.fanMode;
    state.manualFanOn = fan.manualFanOn;
    state.threshold = fan.threshold;
    state.fanOn = fan.fanOn;
    state.online = true;
  } catch (err) {
    console.error("Gagal ambil data awal dari backend:", err);
    state.online = false;
  }
  render();

  try {
    bukaKoneksiRealtime((pesan) => {
      applyReadingData(pesan.data, pesan.timestamp);
      render();
    });
  } catch (err) {
    console.error("Gagal buka koneksi WebSocket:", err);
  }
})();
