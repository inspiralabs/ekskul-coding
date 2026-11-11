// Server coba-coba portofolio TANPA Supabase (data FIKTIF di memori, hilang saat dimatikan).
// Pakai untuk mencoba profil/ & dashboard/ di laptop:
//   node backend/portofolio-dev.js
//   py -m http.server 8092            (dari root repo)
//   (halaman dari localhost otomatis memakai server ini)
//   buka http://localhost:8092/dashboard/  dan  http://localhost:8092/profil/?s=siswa-contoh
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const { pasangPortofolio } = require("./portofolio");
const { buatStoreMemori } = require("./portofolio-memori");
const { buatKode, hashRahasia } = require("./portofolio-inti");

const kode = { "SMA-901": buatKode(), "SMP-902": buatKode() };
const lencana = [
  { p: 11, tanggal: "2026-10-31", judul: "Rakit Lengkap & Upload Firmware", dipelajari: "Merakit DHT22, relay, dan kipas.", hasil: "", tanya_jawab: 1,
    challenge: [{ level: "easy", nama: "Data Pertama", poin: 5 }, { level: "medium", nama: "Uji Goyang", poin: 10 }] },
  { p: 12, tanggal: "2026-11-07", judul: "Kontrol Kipas Manual & Otomatis", dipelajari: "Mengontrol kipas dari dashboard.", hasil: "", tanya_jawab: 0,
    challenge: [{ level: "hard", nama: "Kipas Lebih Gesit", poin: 15 }] },
];
const store = buatStoreMemori([
  { id_siswa: "SMA-901", jenjang: "sma", slug: "siswa-contoh", device_id: "sma-01", nama_lengkap: "Siswa Contoh", kelas: "XI-2",
    poin: 32, lencana, peringkat: 2, judul_proyek: "Kipas Pintar Kelas", catatan_pelatih: "Teliti saat merakit dan rajin bertanya.",
    sertifikat_nomor: "EKC-2026-S1-SMA-901", link_karya: [], kode_hash: hashRahasia(kode["SMA-901"]), kode_versi: 1 },
  { id_siswa: "SMP-902", jenjang: "smp", slug: "siswa-contoh-dua", device_id: "smp-01", nama_lengkap: "Siswa Contoh Dua", kelas: "8A",
    poin: 5, lencana: [], peringkat: null, judul_proyek: "", catatan_pelatih: "", sertifikat_nomor: "EKC-2026-S1-SMP-902",
    link_karya: [], kode_hash: hashRahasia(kode["SMP-902"]), kode_versi: 1 },
]);

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});
// Foto di mode coba-coba: urlFoto memori:// tidak bisa dibuka browser, jadi sajikan lewat /foto/<path>.
const port = Number(process.env.PORT) || 3335;
app.get("/foto/*", (req, res) => {
  const isi = store.ambilFoto(req.params[0]);
  if (!isi) return res.status(404).end();
  res.type("image/jpeg").send(isi);
});
// Tanda tangan & stempel di mode coba-coba: file di dist/sertifikat-contoh/ (tidak ikut repo). Tidak ada = garis kosong.
const ASET = { "ttd.png": "aset-asli/ttd-unggul.png", "stempel.png": "stempel.png" };
app.get("/aset/:nama", (req, res) => {
  const f = ASET[req.params.nama] && path.join(__dirname, "..", "dist", "sertifikat-contoh", ASET[req.params.nama]);
  if (!f || !fs.existsSync(f)) return res.status(404).end();
  res.sendFile(f);
});
pasangPortofolio(app, {
  store: { ...store, urlFoto: (p) => `http://localhost:${port}/foto/${p}` },
  env: { PORTOFOLIO_SECRET: crypto.randomBytes(16).toString("hex"), ADMIN_EMAIL: "admin@contoh.id", ADMIN_PASSWORD: "admin" },
  // Nilai fiktif (server sungguhan membacanya dari Google Sheets, lihat portofolio-nilai.js).
  tandaSertifikat: async () => ({ ttd: `http://localhost:${port}/aset/ttd.png`, stempel: `http://localhost:${port}/aset/stempel.png` }),
  nilaiSiswa: async (jenjang, id) => (id === "SMA-901" ? { rincian: [
    ["Poin Keaktifan Umum", 6], ["Poin Challenge Easy", 5], ["Poin Challenge Medium", 10], ["Poin Challenge Hard", 15],
    ["Total Poin Challenge", 30], ["Inisiatif Eksplorasi", 0], ["Total Poin Keseluruhan", 36],
    ["Skor Gamifikasi (0-100)", 90], ["Rata-rata Post-Test (0-100)", 72.5], ["Nilai Ujian Akhir (0-100)", 90],
    ["Bobot Post-Test 30%", 21.8], ["Bobot Gamifikasi 30%", 27], ["Bobot Ujian Akhir 40%", 36],
    ["NILAI AKHIR", 84.8], ["Predikat", "B"], ["Peringkat", 2],
  ] } : null),
});
app.listen(port, () => {
  console.log(`Portofolio coba-coba: http://localhost:${port}/api/portofolio`);
  console.log(`Siswa: SMA-901 kode ${kode["SMA-901"]} · SMP-902 kode ${kode["SMP-902"]} · Admin: admin@contoh.id / admin`);
});
