// Sertifikat siswa: /profil/sertifikat/?s=<slug>. Server yang memutuskan boleh dibuka atau belum (tanggal buka per
// jenjang ada di backend/portofolio-inti.js, SERTIFIKAT_BUKA); jam di HP/laptop siswa tidak berpengaruh.
// Admin/guru yang sedang login di /dashboard/ bisa membukanya kapan saja (token ikut dikirim).
// Tanda tangan, stempel, dan transkrip nilai (halaman kedua) hanya dikirim server untuk siswa pemilik sertifikat
// (sedang login) dan admin. Transkrip baru dikirim ke siswa setelah tanggal terbitnya (nilai_terbit).
var API_BASE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  ? localStorage.getItem("apiBase") || "http://localhost:3335"
  : "https://api-ekskulcoding.inspiralabs.id";
var ALAMAT_PROFIL = "https://ekskulcoding.inspiralabs.id/profil/?s="; // jadi kode QR di sertifikat: selalu alamat asli
var JENJANG = { smp: "SMP", sma: "SMA" };
var SEMESTER = "Semester 1, TP 2026/2027";
// Sama dengan "proyek" di portofolio/kurikulum.json.
var PROYEK = {
  smp: "alat pemantau suhu dan kelembapan berbasis ESP32 yang datanya ditampilkan pada dashboard monitoring",
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
    (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + jalur + '" fill="#2B2320"/></svg>';
}

// Keterangan tiap baris transkrip, dicocokkan dari judul kolom di sheet Gradebook. Kolom yang tidak dikenal tetap
// tampil, hanya tanpa keterangan. Bobot dicek lebih dulu karena judulnya memuat kata yang sama dengan kolom skornya.
var KETERANGAN = [
  [/^bobot post-test/i, "30% dari rata-rata post-test"],
  [/^bobot gamifikasi/i, "30% dari skor gamifikasi"],
  [/^bobot ujian akhir/i, "40% dari nilai ujian akhir"],
  [/keaktifan/i, "Bertanya atau menjawab saat Tanya Jawab, +2 tiap kali"],
  [/challenge easy/i, "Challenge Easy yang lulus, +5 tiap challenge"],
  [/challenge medium/i, "Challenge Medium yang lulus, +10 tiap challenge"],
  [/challenge hard/i, "Challenge Hard yang lulus, +15 tiap challenge"],
  [/^total poin challenge/i, "Jumlah poin Easy, Medium, dan Hard"],
  [/inisiatif/i, "Poin tambahan untuk eksplorasi di luar tugas"],
  [/^total poin keseluruhan/i, "Keaktifan, challenge, dan eksplorasi"],
  [/gamifikasi/i, "Total poin diubah ke skala 0 sampai 100"],
  [/post-test/i, "Rata-rata post-test semua pertemuan"],
  [/ujian akhir/i, "Ujian akhir 10 soal pilihan ganda"],
];

function tulis(v) {
  return v == null || v === "" ? "-" : typeof v === "number" ? v.toLocaleString("id-ID", { maximumFractionDigits: 1 }) : String(v);
}

function sel(tag, teks) {
  var e = document.createElement(tag);
  e.textContent = teks;
  return e;
}

// Halaman kedua: transkrip nilai. Server mengirim seluruh kolom baris siswa di sheet Gradebook sebagai
// [judul kolom, isi], urutannya sama dengan sheet. Kolom poin masuk tabel kiri, sisanya tabel kanan;
// Nilai Akhir dan Predikat jadi baris penutup tabel kanan. Sel kosong di spreadsheet ditulis "-", bukan 0.
function isiTranskrip(d, label) {
  var rincian = d.nilai && d.nilai.rincian;
  if (!rincian || !rincian.length) return false;
  var no = { tabelPoin: 0, tabelNilai: 0 };
  rincian.forEach(function (x) {
    var nama = x[0];
    var tr = document.createElement("tr");
    if (/^(nilai akhir|predikat)$/i.test(nama)) {
      var th = sel("th", nama.toUpperCase());
      th.colSpan = 3;
      th.scope = "row";
      tr.append(th, sel("td", tulis(x[1])));
      $("tabelNilai").tFoot.append(tr);
      return;
    }
    var tabel = /^(poin|total poin|inisiatif)/i.test(nama) ? "tabelPoin" : "tabelNilai";
    var ket = "";
    KETERANGAN.some(function (k) { return k[0].test(nama) && (ket = k[1]); });
    if (/^total/i.test(nama)) tr.className = "total";
    tr.append(sel("td", ++no[tabel]), sel("td", nama), sel("td", ket), sel("td", tulis(x[1])));
    $(tabel).tBodies[0].append(tr);
  });
  $("tabelPoin").hidden = !no.tabelPoin;
  [["Nama", d.nama_lengkap], ["Kelas", d.kelas], ["Nomor sertifikat", d.sertifikat_nomor],
    ["Program", "Ekstrakurikuler Coding " + label], ["Periode", SEMESTER], ["Proyek akhir", d.judul_proyek]]
    .forEach(function (b) {
      if (!b[1]) return;
      var grup = document.createElement("div");
      grup.append(sel("dt", b[0]), sel("dd", b[1]));
      $("nilaiIdentitas").append(grup);
    });
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

  var adaNilai = isiTranskrip(d, label);
  if (d.tanda) {
    pasangGambar("s-stempel", d.tanda.stempel, "Stempel InspiraLabs");
    pasangGambar("s-tanda", d.tanda.ttd, "Tanda tangan Unggul Sulaiman");
  }
  // Server hanya mengirim "nilai_terbit" untuk pemilik sertifikat dan admin.
  var pemilikAtauStaf = "nilai_terbit" in d;
  $("catatanNilai").hidden = pemilikAtauStaf;
  var belumTerbit = d.nilai_terbit && Date.now() < Date.parse(d.nilai_terbit + "T00:00:00+07:00");
  var terbit = "";
  if (belumTerbit && adaNilai) terbit = "Siswa " + label + " baru bisa melihat transkrip nilai mulai " + tanggal(d.nilai_terbit, true) + ".";
  else if (belumTerbit) terbit = "Transkrip nilai terbit paling lambat " + tanggal(d.nilai_terbit, true) + ". Sampai saat itu halaman ini hanya berisi sertifikat.";
  else if (pemilikAtauStaf && !adaNilai) terbit = "Transkrip nilai belum bisa dibaca dari spreadsheet. Coba muat ulang beberapa menit lagi.";
  $("catatanTerbit").textContent = terbit;
  $("catatanTerbit").hidden = !terbit;
  // Hanya staf yang bisa sampai sini sebelum tanggal buka: beri tahu bahwa siswa belum bisa melihatnya.
  if (Date.now() < Date.parse(d.tanggal + "T00:00:00+07:00")) {
    $("catatanStaf").textContent = "Kamu melihat ini sebagai admin. Siswa " + label + " baru bisa membuka sertifikat ini mulai " + tanggal(d.tanggal, true) + ".";
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
