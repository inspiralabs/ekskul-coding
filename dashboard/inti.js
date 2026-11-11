// Logika murni dashboard (tanpa DOM): dipakai dashboard.js di browser dan dites di backend/dashboard-inti.test.js.

// [kolom, label, batas karakter, jenis]. Batas sama dengan backend/portofolio-inti.js.
var ISIAN_SISWA = [
  ["panggilan", "Nama panggilan", 30, "input"],
  ["tentang", "Tentang aku", 300, "textarea"],
  ["cita_cita", "Cita-cita / minat", 100, "input"],
  ["cerita_tersulit", "Bagian tersulit di proyek", 200, "textarea"],
  ["cerita_terseru", "Bagian paling seru", 200, "textarea"],
  ["cerita_rencana", "Rencana pengembangan alatmu", 200, "textarea"],
];
var ISIAN_RESMI = [
  ["nama_lengkap", "Nama lengkap", 100, "input"],
  ["kelas", "Kelas", 20, "input"],
  ["judul_proyek", "Judul proyek", 100, "input"],
  ["catatan_pelatih", "Catatan pelatih (tampil di halaman publik)", 500, "textarea"],
];

// [id, label, warna contoh]. id sama dengan TEMA di backend/portofolio-inti.js; warna = --aksen di profil/profil.css.
var TEMA = [
  ["ungu", "Ungu", "#6a35e8"],
  ["biru", "Biru", "#1a62d6"],
  ["hijau", "Hijau", "#0b7a57"],
  ["jingga", "Jingga", "#b8430c"],
  ["merah-muda", "Merah muda", "#b81d73"],
];

function panjang(s) { return Array.from(s).length; }   // per karakter, sama seperti server

// "tentang: maksimal 300 karakter" -> "Tentang aku: maksimal 300 karakter"
function rapikan(teks) {
  var label = { link_karya: "Link karya" };
  ISIAN_SISWA.concat(ISIAN_RESMI).forEach(function (d) { label[d[0]] = d[1]; });
  return teks.replace(/^(\w+):/, function (s, k) { return (label[k] || k) + ":"; });
}

// Isian yang BENAR-BENAR diubah dibanding `siswa` (isi terakhir dari server). Form bisa sudah lama terbuka
// (admin membuka daftar sebelum siswa mengisi dari HP); mengirim semua isian akan menimpa tulisan yang lebih baru.
//   nilai: { kolom: teks di form }, link: isi 3 kotak link, resmi: true kalau form admin (data resmi ikut).
function perubahan(siswa, nilai, link, resmi) {
  var data = {};
  (resmi ? ISIAN_RESMI : []).concat(ISIAN_SISWA).forEach(function (d) {
    var v = nilai[d[0]];
    if (v == null) return;
    if (v.trim() !== String(siswa[d[0]] || "").trim()) data[d[0]] = v;
  });
  var bersih = link.map(function (u) { return u.trim(); }).filter(Boolean);
  if (JSON.stringify(bersih) !== JSON.stringify(siswa.link_karya || [])) data.link_karya = bersih;
  return data;
}

if (typeof module !== "undefined") module.exports = { ISIAN_SISWA, ISIAN_RESMI, TEMA, panjang, rapikan, perubahan };
