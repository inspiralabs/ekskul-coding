// ============================================================
// Nilai siswa untuk sertifikat, dibaca LANGSUNG dari sheet "Gradebook" di Google Sheets (ekspor CSV).
// Tidak ada impor: begitu tutor mengubah spreadsheet, nilai di sertifikat ikut berubah (paling lambat 5 menit,
// selama itu hasil terakhir disimpan di memori supaya Google tidak dipanggil tiap halaman dibuka).
//
// ID spreadsheet per jenjang ada di env NILAI_SHEET_SMP / NILAI_SHEET_SMA (bagian di antara /d/ dan /edit pada link).
// JANGAN menulis ID itu di repo: siapa pun yang memilikinya bisa mengunduh seluruh file, termasuk nomor HP orang tua.
// Spreadsheet harus dibagikan "siapa saja yang memiliki link" (sudah begitu sejak awal).
// ============================================================

// kunci di balasan API -> judul kolom di sheet Gradebook. Kolom "Nilai Final Project" diisi nilai ujian akhir.
const KOLOM = {
  post_test: "Rata-rata Post-Test (0-100)",
  gamifikasi: "Skor Gamifikasi (0-100)",
  ujian_akhir: "Nilai Final Project (0-100)",
  nilai_akhir: "NILAI AKHIR",
  predikat: "Predikat",
};
// Sheet Gradebook bernama "Gradebook SMA" di file SMP maupun SMA; judul kolom ada di baris 4.
const alamatCsv = (id) =>
  `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent("Gradebook SMA")}&range=A4:S200&headers=1`;
const FORMAT_ID_SHEET = /^[\w-]{20,}$/;

// CSV -> daftar baris (tiap baris = daftar sel). Mengerti tanda kutip, koma di dalam kutip, dan "" = kutip.
function bacaCsv(teks) {
  const baris = [];
  let sel = "", daftar = [], dalamKutip = false;
  for (let i = 0; i < teks.length; i++) {
    const c = teks[i];
    if (dalamKutip) {
      if (c === '"' && teks[i + 1] === '"') { sel += '"'; i++; }
      else if (c === '"') dalamKutip = false;
      else sel += c;
    } else if (c === '"') dalamKutip = true;
    else if (c === ",") { daftar.push(sel); sel = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && teks[i + 1] === "\n") i++;
      daftar.push(sel); baris.push(daftar); sel = ""; daftar = [];
    } else sel += c;
  }
  if (sel || daftar.length) { daftar.push(sel); baris.push(daftar); }
  return baris;
}

// Angka dari sheet: "41.7" atau "41,7" (tergantung bahasa spreadsheet). Bukan angka -> null.
function angka(teks) {
  const t = String(teks ?? "").trim().replace(",", ".");
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

// CSV Gradebook -> Map("SMA-004" -> { post_test, gamifikasi, ujian_akhir, nilai_akhir, predikat }).
// Baris judul dicari lewat sel "ID Siswa", jadi baris keterangan di atasnya tidak mengganggu.
function nilaiDariCsv(teks) {
  const baris = bacaCsv(teks);
  const iJudul = baris.findIndex((b) => b.some((s) => s.trim() === "ID Siswa"));
  const peta = new Map();
  if (iJudul < 0) return peta; // mis. Google membalas halaman login karena spreadsheet tidak lagi dibagikan
  const judul = baris[iJudul].map((s) => s.trim());
  const kolom = (nama) => judul.indexOf(nama);
  const iId = kolom("ID Siswa");
  for (const b of baris.slice(iJudul + 1)) {
    const id = (b[iId] || "").trim().toUpperCase();
    if (!id) continue;
    const n = {};
    for (const [kunci, nama] of Object.entries(KOLOM)) {
      const isi = kolom(nama) >= 0 ? b[kolom(nama)] : "";
      n[kunci] = kunci === "predikat" ? String(isi ?? "").trim() || null : angka(isi);
    }
    peta.set(id, n);
  }
  return peta;
}

// -> async nilaiSiswa(jenjang, idSiswa): objek nilai, atau null kalau tidak ada / tidak bisa dibaca.
// Gagal mengambil (internet, Google) tidak pernah melempar error: sertifikat tetap tampil tanpa nilai,
// atau dengan nilai terakhir yang masih tersimpan.
function buatSumberNilai({ idSheet, ambil = fetch, umurMs = 5 * 60 * 1000, sekarang = Date.now }) {
  const simpanan = {}; // jenjang -> { waktu, peta }
  return async function nilaiSiswa(jenjang, idSiswa) {
    const id = idSheet[jenjang];
    if (!id || !FORMAT_ID_SHEET.test(id)) return null;
    let s = simpanan[jenjang];
    if (!s || sekarang() - s.waktu > umurMs) {
      try {
        const r = await ambil(alamatCsv(id), { signal: AbortSignal.timeout(8000) });
        if (!r.ok) throw new Error("HTTP " + r.status);
        s = simpanan[jenjang] = { waktu: sekarang(), peta: nilaiDariCsv(await r.text()) };
      } catch (e) {
        console.error("[portofolio] nilai", jenjang, "tidak bisa dibaca:", e.message);
        if (!s) return null;
        s.waktu = sekarang(); // coba lagi setelah umurMs, jangan memanggil Google di tiap permintaan
      }
    }
    return s.peta.get(idSiswa) || null;
  };
}

module.exports = { bacaCsv, nilaiDariCsv, buatSumberNilai, KOLOM };
