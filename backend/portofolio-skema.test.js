// Tes yang menangkap bug "baru ketahuan di produksi": kolom SQL vs kode, izin tabel, pemakaian supabase-js,
// dan server.js tetap jalan untuk kelas IoT. `cd backend && node --test`
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { FIELD_SISWA, FIELD_RESMI, KOLOM_IMPOR } = require("./portofolio-inti");
const { buatStoreSupabase } = require("./portofolio");

const SQL = fs.readFileSync(path.join(__dirname, "supabase_schema.sql"), "utf8");

function kolomTabel() {
  const m = SQL.match(/create table if not exists ekskul_coding_asy_syahid\.portofolio_siswa \(([\s\S]*?)\n\);/);
  assert.ok(m, "blok create table portofolio_siswa tidak ditemukan");
  return m[1].split("\n").map((l) => l.trim().split(/\s+/)[0]).filter((k) => /^[a-z_]+$/.test(k));
}

test("skema: semua kolom yang ditulis/dibaca kode ada di tabel portofolio_siswa", () => {
  const kolom = new Set(kolomTabel());
  const dipakai = [...KOLOM_IMPOR, ...Object.keys(FIELD_SISWA), ...Object.keys(FIELD_RESMI), "link_karya",
    "kode_hash", "kode_versi", "updated_by", "updated_at", "foto_path"];
  for (const k of dipakai) assert.ok(kolom.has(k), `kolom "${k}" dipakai kode tapi tidak ada di supabase_schema.sql`);
});

test("skema: tabel data anak hanya untuk service_role (anon/authenticated dicabut)", () => {
  assert.match(SQL, /revoke all on ekskul_coding_asy_syahid\.portofolio_siswa from anon, authenticated;/);
  const grant = SQL.match(/grant [^;]* on ekskul_coding_asy_syahid\.portofolio_siswa to ([^;]+);/g) || [];
  assert.ok(grant.length);
  for (const g of grant) assert.doesNotMatch(g, /anon|authenticated/, g);
  // revoke harus SETELAH "alter default privileges" (yang memberi anon akses ke tabel baru)
  assert.ok(SQL.indexOf("revoke all on ekskul_coding_asy_syahid.portofolio_siswa") > SQL.lastIndexOf("alter default privileges"));
});

// Klien supabase-js tiruan: mencatat rangkaian pemanggilan, membalas { data, error } yang diatur tes.
function klienTiruan(balas = () => ({ data: null, error: null })) {
  const log = [];
  const from = (tabel) => {
    const langkah = [["from", tabel]];
    log.push(langkah);
    const p = new Proxy({}, {
      get: (_, k) => k === "then"
        ? (ok, ng) => Promise.resolve(balas(langkah)).then(ok, ng)
        : (...a) => { langkah.push([k, ...a]); return p; },
    });
    return p;
  };
  const storage = {
    from: (bucket) => ({
      upload: async (...a) => { log.push([["upload", bucket, ...a]]); return balas([["upload"]]); },
      remove: async (...a) => { log.push([["remove", bucket, ...a]]); return balas([["remove"]]); },
      getPublicUrl: (p) => ({ data: { publicUrl: `https://cdn.example/${bucket}/${p}` } }),
    }),
  };
  return { log, from, storage };
}
const nama = (langkah) => langkah.map((l) => l[0]).join(".");

test("store Supabase: ambil, cari slug, daftar, tambah, ubah memakai query yang benar", async () => {
  const k = klienTiruan(() => ({ data: { id_siswa: "SMA-004" }, error: null }));
  const s = buatStoreSupabase(k, "portofolio-foto");
  await s.ambil("SMA-004");
  await s.ambilSlug("budi");
  await s.daftar("sma");
  await s.daftar(null);
  await s.tambah({ id_siswa: "SMA-010" });
  await s.ubah("SMA-004", { kelas: "XI" });
  assert.equal(await s.slugDipakai("budi"), true);
  const [ambil, slug, daftarSma, daftarSemua, tambah, ubah, dipakai] = k.log;
  assert.equal(nama(ambil), "from.select.eq.maybeSingle");
  assert.deepEqual(ambil[2], ["eq", "id_siswa", "SMA-004"]);
  assert.deepEqual(slug[2], ["eq", "slug", "budi"]);
  assert.equal(nama(daftarSma), "from.select.eq.order");
  assert.deepEqual(daftarSma[2], ["eq", "jenjang", "sma"]);
  assert.deepEqual(daftarSma[3], ["order", "nama_lengkap"]);
  assert.equal(nama(daftarSemua), "from.select.order"); // tanpa filter jenjang
  assert.equal(nama(tambah), "from.insert.select.single");
  assert.equal(nama(ubah), "from.update.eq.select.single");
  assert.equal(ubah[1][1].kelas, "XI");
  assert.ok(!Number.isNaN(Date.parse(ubah[1][1].updated_at)), "ubah harus mengisi updated_at");
  assert.deepEqual(ubah[2], ["eq", "id_siswa", "SMA-004"]);
  assert.equal(nama(dipakai), "from.select.eq.maybeSingle");
  for (const l of k.log) assert.equal(l[0][1], "portofolio_siswa");
});

test("store Supabase: slug belum dipakai, error Supabase dilempar (bukan diam-diam kosong)", async () => {
  const kosong = buatStoreSupabase(klienTiruan(() => ({ data: null, error: null })), "b");
  assert.equal(await kosong.slugDipakai("x"), false);
  assert.equal(await kosong.ambil("SMA-001"), null);
  const rusak = buatStoreSupabase(klienTiruan(() => ({ data: null, error: { message: "permission denied" } })), "b");
  await assert.rejects(rusak.ambil("SMA-001"), /permission denied/);
  await assert.rejects(rusak.ubah("SMA-001", {}), /permission denied/);
  await assert.rejects(rusak.simpanFoto("a.jpg", Buffer.from("x")), /permission denied/);
});

test("store Supabase: foto diunggah sebagai JPEG tanpa menimpa, dihapus per path, URL publik", async () => {
  const k = klienTiruan();
  const s = buatStoreSupabase(k, "portofolio-foto");
  await s.simpanFoto("SMA-004/abc.jpg", Buffer.from([0xff, 0xd8]));
  await s.hapusFoto("SMA-004/lama.jpg");
  const [[upload], [remove]] = k.log;
  assert.deepEqual(upload.slice(0, 3), ["upload", "portofolio-foto", "SMA-004/abc.jpg"]);
  assert.deepEqual(upload[4], { contentType: "image/jpeg", upsert: false });
  assert.deepEqual(remove, ["remove", "portofolio-foto", ["SMA-004/lama.jpg"]]);
  assert.equal(s.urlFoto("SMA-004/abc.jpg"), "https://cdn.example/portofolio-foto/SMA-004/abc.jpg");
});

// server.js sungguhan sebagai proses anak (Supabase palsu, port acak): fitur baru tidak boleh mengganggu kelas IoT.
async function jalankanServer(t, envTambahan) {
  const port = 30000 + Math.floor(Math.random() * 20000);
  const env = { ...process.env, PORT: String(port), SUPABASE_URL: "http://127.0.0.1:9", SUPABASE_KEY: "x", API_KEY: "kunci-uji", ...envTambahan };
  for (const k of ["PORTOFOLIO_SECRET", "ADMIN_EMAIL", "ADMIN_PASSWORD"]) if (!(k in envTambahan)) delete env[k];
  const anak = spawn(process.execPath, ["server.js"], { cwd: __dirname, env, stdio: ["ignore", "pipe", "pipe"] });
  t.after(() => anak.kill());
  await new Promise((ok, ng) => {
    const tunda = setTimeout(() => ng(new Error("server.js tidak start dalam 10 detik")), 10000);
    anak.stdout.on("data", (d) => { if (String(d).includes("Server jalan")) { clearTimeout(tunda); ok(); } });
    anak.on("exit", (c) => ng(new Error("server.js berhenti, kode " + c)));
  });
  return `http://127.0.0.1:${port}`;
}

test("server.js: tanpa env portofolio tetap start, endpoint lama tidak berubah", async (t) => {
  const u = await jalankanServer(t, {});
  assert.equal((await fetch(u + "/health")).status, 200);
  assert.equal((await fetch(u + "/api/portofolio/profil/x")).status, 503);
  const tanpaKunci = await fetch(u + "/api/readings", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
  assert.equal(tanpaKunci.status, 401);                               // ESP32 tanpa API key tetap ditolak
  const cors = await fetch(u + "/api/portofolio/saya", { method: "OPTIONS" });
  assert.equal(cors.status, 204);
  assert.match(cors.headers.get("access-control-allow-headers"), /X-API-Key/);
  assert.match(cors.headers.get("access-control-allow-headers"), /X-PIN/);
  assert.match(cors.headers.get("access-control-allow-headers"), /Authorization/);
});

test("server.js: dengan env portofolio, login admin jalan & error Supabase jadi 500 rapi", async (t) => {
  const u = await jalankanServer(t, { PORTOFOLIO_SECRET: "s", ADMIN_EMAIL: "a@x.id", ADMIN_PASSWORD: "pw" });
  const masuk = await fetch(u + "/api/portofolio/masuk/staf", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "a@x.id", password: "pw" }) });
  assert.equal(masuk.status, 200);
  const r = await fetch(u + "/api/portofolio/profil/budi");            // Supabase palsu tidak bisa dihubungi
  assert.equal(r.status, 500);
  assert.deepEqual(await r.json(), { ok: false, error: "server bermasalah" });
  assert.equal((await fetch(u + "/health")).status, 200);               // proses tidak mati
});
