// ============================================================
// Nilai siswa untuk LEMBAR NILAI di belakang sertifikat, dibaca LANGSUNG dari sheet "Gradebook" di Google Sheets (ekspor CSV).
// Tidak ada impor: begitu tutor mengubah spreadsheet, nilai di sertifikat ikut berubah (paling lambat 5 menit,
// selama itu hasil terakhir disimpan di memori supaya Google tidak dipanggil tiap halaman dibuka).
//
// ID spreadsheet per jenjang ada di env NILAI_SHEET_SMP / NILAI_SHEET_SMA (bagian di antara /d/ dan /edit pada link).
// JANGAN menulis ID itu di repo: siapa pun yang memilikinya bisa mengunduh seluruh file, termasuk nomor HP orang tua.
// Spreadsheet harus dibagikan "siapa saja yang memiliki link" (sudah begitu sejak awal).
// ============================================================

// Kolom yang tidak ikut ke transkrip: identitas (sudah ada di kepala transkrip) dan Ranking (lihat di bawah).
const BUKAN_NILAI = ["ID Siswa", "Nama Lengkap", "Kelas", "Ranking"];
// Sheet Gradebook bernama "Gradebook SMA" di file SMP maupun SMA; judul kolom ada di baris 4.
// Sheet "Catatan Tutor" (sama di kedua file) juga dibaca langsung: judul proyek dan catatan pelatih di portofolio.
const alamatCsv = (id, sheet = "Gradebook SMA", range = "A4:S200") =>
  `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}&range=${range}&headers=1`;
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

// CSV Gradebook -> Map("SMA-004" -> { rincian: [[judul kolom, isi], ...] }), urutan kolom sama dengan sheet.
// Judul kolom dipakai apa adanya sebagai label di lembar nilai, jadi kalau tutor menambah/mengganti kolom di sheet,
// lembar nilai ikut. Dua penyesuaian:
// - "Final Project" ditulis "Ujian Akhir": kolom itu diisi nilai ujian akhir (keputusan pemilik, Nov 2026).
// - "Ranking" tidak ikut: peringkat tidak dicetak di transkrip (keputusan tim, Nov 2026), supaya siswa di luar
//   papan atas tidak dirugikan. Yang berperingkat diapresiasi dengan cara lain.
// Baris judul dicari lewat sel "ID Siswa", jadi baris keterangan di atasnya tidak mengganggu.
function nilaiDariCsv(teks) {
  const baris = bacaCsv(teks);
  const iJudul = baris.findIndex((b) => b.some((s) => s.trim() === "ID Siswa"));
  const peta = new Map();
  if (iJudul < 0) return peta; // mis. Google membalas halaman login karena spreadsheet tidak lagi dibagikan
  const judul = baris[iJudul].map((s) => s.trim());
  const iId = judul.indexOf("ID Siswa");
  for (const b of baris.slice(iJudul + 1)) {
    const id = (b[iId] || "").trim().toUpperCase();
    if (!id) continue;
    const rincian = [];
    judul.forEach((nama, k) => {
      if (!nama || BUKAN_NILAI.includes(nama)) return;
      const mentah = String(b[k] ?? "").trim();
      const n = angka(mentah);
      rincian.push([nama.replace("Final Project", "Ujian Akhir"), n ?? (mentah || null)]);
    });
    peta.set(id, { rincian });
  }
  return peta;
}

// Catatan Tutor -> Map("SMA-004" -> { proyek, catatan }).
// Catatan = "Kekuatan (timpa draft)" yang diketik tutor, atau kalimat otomatis dari skor Penilaian Aspek.
// Kalimat otomatis berbentuk "Menonjol pada aspek X (skor 4 dari 4)."; angka skornya dibuang supaya halaman publik
// tidak menampilkan skor. "Perlu Ditingkatkan" dan saran untuk orang tua tidak pernah dibaca (tetap internal).
function catatanDariCsv(teks) {
  const baris = bacaCsv(teks);
  const iJudul = baris.findIndex((b) => b.some((s) => s.trim() === "ID Siswa"));
  const peta = new Map();
  if (iJudul < 0) return peta;
  const judul = baris[iJudul].map((s) => s.trim());
  const sel = (b, nama) => {
    const v = judul.indexOf(nama) >= 0 ? String(b[judul.indexOf(nama)] ?? "").trim() : "";
    return /^(=|#)/.test(v) ? "" : v; // rumus mentah atau error sheet (#N/A, #REF!) tidak ditampilkan
  };
  for (const b of baris.slice(iJudul + 1)) {
    const id = sel(b, "ID Siswa").toUpperCase();
    if (!id) continue;
    const catatan = (sel(b, "Kekuatan (timpa draft)") || sel(b, "Draft Kekuatan (otomatis)"))
      .replace(/\s*\(skor \d+(?:[.,]\d+)? dari \d+\)/gi, "");
    peta.set(id, { proyek: sel(b, "Proyek / Karya"), catatan });
  }
  return peta;
}

// -> async nilaiSiswa(jenjang, idSiswa): { rincian }, atau null kalau tidak ada / tidak bisa dibaca.
// Gagal mengambil (internet, Google) tidak pernah melempar error: sertifikat tetap tampil tanpa nilai,
// atau dengan nilai terakhir yang masih tersimpan.
function buatSumberNilai(opsi) {
  return buatSumberSheet({ ...opsi, sheet: "Gradebook SMA", range: "A4:S200", urai: nilaiDariCsv, label: "nilai" });
}

// -> async catatanSiswa(jenjang, idSiswa): { proyek, catatan }, atau null.
function buatSumberCatatan(opsi) {
  return buatSumberSheet({ ...opsi, sheet: "Catatan Tutor", range: "A4:H200", urai: catatanDariCsv, label: "catatan" });
}

function buatSumberSheet({ idSheet, ambil = fetch, umurMs = 5 * 60 * 1000, sekarang = Date.now, sheet, range, urai, label }) {
  const simpanan = {}; // jenjang -> { waktu, peta }
  return async function baca(jenjang, idSiswa) {
    const id = idSheet[jenjang];
    if (!id || !FORMAT_ID_SHEET.test(id)) return null;
    let s = simpanan[jenjang];
    if (!s || sekarang() - s.waktu > umurMs) {
      try {
        const r = await ambil(alamatCsv(id, sheet, range), { signal: AbortSignal.timeout(8000) });
        if (!r.ok) throw new Error("HTTP " + r.status);
        s = simpanan[jenjang] = { waktu: sekarang(), peta: urai(await r.text()) };
      } catch (e) {
        console.error("[portofolio]", label, jenjang, "tidak bisa dibaca:", e.message);
        if (!s) return null;
        s.waktu = sekarang(); // coba lagi setelah umurMs, jangan memanggil Google di tiap permintaan
      }
    }
    return s.peta.get(idSiswa) || null;
  };
}

module.exports = { bacaCsv, nilaiDariCsv, catatanDariCsv, buatSumberNilai, buatSumberCatatan };
