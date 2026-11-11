// Sertifikat siswa: /profil/sertifikat/?s=<slug>. Server yang memutuskan boleh dibuka atau belum (tanggal buka per
// jenjang ada di backend/portofolio-inti.js, SERTIFIKAT_BUKA); jam di HP/laptop siswa tidak berpengaruh.
// Admin/guru yang sedang login di /dashboard/ bisa membukanya kapan saja (token ikut dikirim).
// Lembar nilai (halaman kedua), tanda tangan, dan stempel hanya dikirim server untuk siswa pemilik sertifikat
// (sedang login) dan admin.
var API_BASE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  ? localStorage.getItem("apiBase") || "http://localhost:3335"
  : "https://api-ekskulcoding.inspiralabs.id";
var ALAMAT_PROFIL = "https://ekskulcoding.inspiralabs.id/profil/?s="; // jadi kode QR di sertifikat: selalu alamat asli
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
  if (typeof qrcode !== "function") { $("sertQr").parentNode.hidden = true; return; }
  var qr = qrcode(0, "M");
  qr.addData(alamat);
  qr.make();
  var n = qr.getModuleCount(), jalur = "";
  for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) jalur += "M" + c + " " + r + "h1v1h-1z";
  // Isi SVG hanya angka hasil hitungan QR, bukan teks dari siswa.
  $("sertQr").innerHTML = '<svg viewBox="-2 -2 ' + (n + 4) + " " + (n + 4) + '" shape-rendering="crispEdges"><rect x="-2" y="-2" width="' +
    (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + jalur + '" fill="#2B2320"/></svg>';
}

// Halaman kedua: rincian nilai. Server mengirim seluruh kolom baris siswa di sheet Gradebook sebagai
// [judul kolom, isi], urutannya sama dengan sheet. Kolom poin masuk tabel kiri, sisanya tabel kanan.
// Sel kosong di spreadsheet ditulis "-", bukan 0.
function isiLembarNilai(d, label) {
  var rincian = d.nilai && d.nilai.rincian;
  if (!rincian || !rincian.length) return false;
  rincian.forEach(function (x) {
    var nama = x[0], v = x[1];
    var grup = document.createElement("div");
    if (/^total/i.test(nama)) grup.className = "total";
    if (/^(nilai akhir|predikat)$/i.test(nama)) grup.className = "utama";
    var dt = document.createElement("dt");
    dt.textContent = nama;
    var dd = document.createElement("dd");
    dd.textContent = v == null || v === "" ? "-" : typeof v === "number" ? v.toLocaleString("id-ID", { maximumFractionDigits: 1 }) : v;
    grup.append(dt, dd);
    $(/^(poin|total poin|inisiatif)/i.test(nama) ? "nilaiPoin" : "nilaiAngka").append(grup);
  });
  $("nilaiBagianPoin").hidden = !$("nilaiPoin").children.length;
  $("nilaiSiapa").textContent = d.nama_lengkap + " · Ekskul Coding " + label + " · " + SEMESTER;
  $("nilaiKaki").textContent = "Lampiran sertifikat nomor " + d.sertifikat_nomor + ". Nilai dibaca dari Gradebook pada " +
    new Date().toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) + ".";
  $("lembarNilai").hidden = false;
  return true;
}

function pasangGambar(kelas, alamat, alt) {
  if (!alamat || !/^https?:\/\//.test(alamat)) return;
  var img = document.createElement("img");
  img.className = kelas;
  img.alt = alt;
  img.src = alamat;
  $("sertTtdRuang").append(img);
}

function isiSertifikat(d) {
  var label = JENJANG[d.jenjang] || "";
  var lencana = 0;
  (d.lencana || []).forEach(function (p) { lencana += (p.challenge || []).length; });
  document.title = "Sertifikat " + d.nama_lengkap + " · Ekskul Coding";
  $("kembali").href = "/profil/?s=" + encodeURIComponent(d.slug);
  $("sertJenjang").textContent = label;
  $("sertTahun").textContent = d.tanggal.slice(0, 4);
  $("sertNama").textContent = d.nama_lengkap;
  if (d.nama_lengkap.length > 20) $("sertNama").className += " panjang";
  $("sertIsi").textContent = "telah menyelesaikan Ekstrakurikuler Coding " + label + " " + SEMESTER + ", dengan proyek akhir " +
    (d.judul_proyek ? d.judul_proyek + ": " : "") + (PROYEK[d.jenjang] || "") + ".";
  // Angka nol tidak dicetak.
  var angka = [];
  if (d.poin) angka.push(d.poin + " poin");
  if (lencana) angka.push(lencana + " lencana challenge");
  $("sertAngka").textContent = angka.join(" · ");
  $("sertAngka").hidden = !angka.length;
  $("sertTanggal").textContent = "Tanggal: " + tanggal(d.tanggal);
  $("sertNomor").textContent = "Nomor: " + d.sertifikat_nomor;
  gambarQr(ALAMAT_PROFIL + d.slug);

  var adaNilai = isiLembarNilai(d, label);
  if (d.tanda) {
    pasangGambar("s-stempel", d.tanda.stempel, "Stempel InspiraLabs");
    pasangGambar("s-tanda", d.tanda.ttd, "Tanda tangan Unggul Sulaiman");
  }
  // Server hanya mengirim "nilai" (walau null) untuk pemilik sertifikat dan admin.
  $("catatanNilai").hidden = "nilai" in d;
  // Hanya staf yang bisa sampai sini sebelum tanggal buka: beri tahu bahwa siswa belum bisa melihatnya.
  if (Date.now() < Date.parse(d.tanggal + "T00:00:00+07:00")) {
    $("catatanStaf").textContent = "Kamu melihat ini sebagai admin. Siswa " + label + " baru bisa membukanya mulai " + tanggal(d.tanggal, true) + "." +
      (adaNilai ? "" : " Lembar nilai belum bisa dibaca dari spreadsheet.");
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
