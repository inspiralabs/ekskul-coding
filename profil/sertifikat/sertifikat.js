// Sertifikat siswa: /profil/sertifikat/?s=<slug>. Server yang memutuskan boleh dibuka atau belum (tanggal buka per
// jenjang ada di backend/portofolio-inti.js, SERTIFIKAT_BUKA); jam di HP/laptop siswa tidak berpengaruh.
// Admin/guru yang sedang login di /dashboard/ bisa membukanya kapan saja (token ikut dikirim).
var API_BASE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  ? localStorage.getItem("apiBase") || "http://localhost:3335"
  : "https://api-ekskulcoding.inspiralabs.id";
var ALAMAT_PROFIL = "https://ekskulcoding.inspiralabs.id/profil/?s="; // tercetak di sertifikat: selalu alamat asli
var JENJANG = { smp: "SMP", sma: "SMA" };
var SEMESTER = "Semester 1, TP 2026/2027";
// Sama dengan "proyek" di portofolio/kurikulum.json.
var PROYEK = {
  smp: "alat pemantau suhu dan kelembapan berbasis ESP32 yang datanya tampil di internet",
  sma: "alat pemantau suhu berbasis ESP32 yang menyalakan kipas otomatis dan bisa dikendalikan dari dashboard",
};

function $(id) { return document.getElementById(id); }

function tanggal(iso, denganHari) {
  var opsi = { day: "numeric", month: "long", year: "numeric" };
  if (denganHari) opsi.weekday = "long";
  return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", opsi);
}

function gambarQr(alamat) {
  if (typeof qrcode !== "function") { $("sertQr").hidden = true; return; }
  var qr = qrcode(0, "M");
  qr.addData(alamat);
  qr.make();
  var n = qr.getModuleCount(), jalur = "";
  for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) jalur += "M" + c + " " + r + "h1v1h-1z";
  // Isi SVG hanya angka hasil hitungan QR, bukan teks dari siswa.
  $("sertQr").innerHTML = '<svg viewBox="-2 -2 ' + (n + 4) + " " + (n + 4) + '" shape-rendering="crispEdges"><rect x="-2" y="-2" width="' +
    (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + jalur + '" fill="#1c1f2b"/></svg>';
}

function isiSertifikat(d) {
  var label = JENJANG[d.jenjang] || "";
  var lencana = 0;
  (d.lencana || []).forEach(function (p) { lencana += (p.challenge || []).length; });
  document.title = "Sertifikat " + d.nama_lengkap + " · Ekskul Coding";
  document.documentElement.dataset.tema = d.tema || "ungu"; // tema tak dikenal -> profil.css jatuh ke ungu
  $("kembali").href = "/profil/?s=" + encodeURIComponent(d.slug);
  $("sertNama").textContent = d.nama_lengkap;
  $("sertIsi").textContent = "telah menyelesaikan Ekstrakurikuler Coding " + label + " " + SEMESTER + ", dengan proyek akhir " +
    (d.judul_proyek ? d.judul_proyek + ": " : "") + (PROYEK[d.jenjang] || "") + ".";
  // Angka nol tidak dicetak.
  var angka = [];
  if (d.poin) angka.push(d.poin + " poin");
  if (lencana) angka.push(lencana + " lencana challenge");
  $("sertAngka").textContent = angka.join(" · ");
  $("sertAngka").hidden = !angka.length;
  $("sertNomor").textContent = d.sertifikat_nomor;
  $("sertUrl").textContent = (ALAMAT_PROFIL + d.slug).replace("https://", "");
  $("sertTanggal").textContent = tanggal(d.tanggal);
  gambarQr(ALAMAT_PROFIL + d.slug);
  // Hanya staf yang bisa sampai sini sebelum tanggal buka: beri tahu bahwa siswa belum bisa melihatnya.
  if (Date.now() < Date.parse(d.tanggal + "T00:00:00+07:00")) {
    $("catatanStaf").textContent = "Kamu melihat ini sebagai admin. Siswa " + label + " baru bisa membukanya mulai " + tanggal(d.tanggal, true) + ".";
    $("catatanStaf").hidden = false;
  }
}

function gagal(teks, slug) {
  $("statusTeks").textContent = teks;
  if (slug) {
    $("statusKembali").href = "/profil/?s=" + encodeURIComponent(slug);
    $("statusKembali").hidden = false;
  }
}

$("cetak").addEventListener("click", function () { window.print(); });

var slug = new URLSearchParams(location.search).get("s");
if (!slug) {
  gagal("Sertifikat tidak ditemukan. Periksa lagi alamatnya.");
} else {
  var kepala = {};
  var token = localStorage.getItem("tokenPortofolio"); // sama dengan KUNCI_TOKEN di dashboard/dashboard.js
  if (token) kepala.Authorization = "Bearer " + token;
  fetch(API_BASE + "/api/portofolio/sertifikat/" + encodeURIComponent(slug), { headers: kepala })
    .then(function (r) { return r.json().catch(function () { return {}; }).then(function (isi) { return { status: r.status, isi: isi }; }); })
    .then(function (h) {
      if (h.status === 403 && h.isi.buka) {
        return gagal("Sertifikat " + (JENJANG[h.isi.jenjang] || "") + " baru bisa dibuka mulai " + tanggal(h.isi.buka, true) + ".", slug);
      }
      if (h.status === 404) return gagal("Sertifikat tidak ditemukan. Periksa lagi alamatnya.");
      if (h.status !== 200 || !h.isi.sertifikat) throw new Error(h.status);
      isiSertifikat(h.isi.sertifikat);
      $("status").remove();
      $("konten").hidden = false;
    })
    .catch(function () { gagal("Sertifikat belum bisa dimuat. Muat ulang halaman. Kalau tetap gagal, hubungi pelatih Ekskul Coding.", slug); });
}
