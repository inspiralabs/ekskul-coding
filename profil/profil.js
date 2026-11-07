// Profil siswa: /profil/?s=<slug>. Data dari backend; semua teks dipasang lewat textContent
// (isian siswa tidak bisa menyisipkan HTML).
// localStorage.apiBase hanya berlaku di localhost (coba-coba dengan backend/portofolio-dev.js).
var API_BASE = (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && localStorage.getItem("apiBase")) ||
  "https://api-ekskulcoding.inspiralabs.id";
var LEVEL = { easy: "Easy", medium: "Medium", hard: "Hard" };
var JENJANG = { smp: "SMP", sma: "SMA" };
// Sama dengan "ringkasan" di portofolio/kurikulum.json.
var RINGKASAN = {
  smp: "{panggilan} merakit alat pemantau suhu sendiri, mulai dari LED pertama sampai angka suhunya tampil di internet.",
  sma: "{panggilan} merakit alat pemantau suhu yang bisa menyalakan kipas sendiri, dan kipasnya bisa dikendalikan dari dashboard di HP.",
};

function $(id) { return document.getElementById(id); }

function el(tag, kelas, teks) {
  var e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks != null) e.textContent = teks;
  return e;
}

function tampilkan(id, isi) {
  if (!isi) return false;
  $(id).textContent = isi;
  $(id).hidden = false;
  return true;
}

function isiProfil(d) {
  var panggilan = d.panggilan || d.nama_lengkap.split(" ")[0];
  var lencana = d.lencana || [];
  var semuaChallenge = [];
  lencana.forEach(function (p) { (p.challenge || []).forEach(function (c) { semuaChallenge.push([p.p, c]); }); });
  document.title = d.nama_lengkap + " · Ekskul Coding";

  // SAMPUL
  $("asal").textContent = ["Ekskul Coding " + (JENJANG[d.jenjang] || ""), d.kelas ? "Kelas " + d.kelas : ""].filter(Boolean).join(" · ");
  $("nama").textContent = d.nama_lengkap;
  $("ringkasan").textContent = (RINGKASAN[d.jenjang] || "").replace("{panggilan}", panggilan);
  var fakta = [];
  if (d.poin != null) fakta.push([d.poin, "poin"]);
  fakta.push([semuaChallenge.length, "lencana challenge"]);
  if (d.peringkat) fakta.push(["#" + d.peringkat, "leaderboard " + (JENJANG[d.jenjang] || "")]);
  fakta.forEach(function (f) {
    var grup = el("div");
    grup.append(el("dt", null, f[1]), el("dd", null, String(f[0])));
    $("fakta").append(grup);
  });
  if (d.foto_url) {
    var img = el("img");
    img.src = d.foto_url;
    img.alt = "Foto " + panggilan;
    img.width = 800;
    img.height = 1000;
    $("sampulFoto").append(img);
    $("sampulFoto").hidden = false;
  }

  // TENTANG AKU
  var adaTentang = tampilkan("tentang", d.tentang);
  if (d.cita_cita) { $("citaCita").textContent = d.cita_cita; $("kotakCita").hidden = false; adaTentang = true; }
  (d.link_karya || []).forEach(function (u) {
    if (!/^https:\/\//.test(u)) return;
    var a = el("a", null, u.replace(/^https:\/\//, ""));
    a.href = u;
    a.rel = "noopener nofollow";
    a.target = "_blank";
    var li = el("li");
    li.append(a);
    $("link").append(li);
  });
  if ($("link").children.length) { $("kotakLink").hidden = false; adaTentang = true; }
  $("bagianTentang").hidden = !adaTentang;

  // PROYEK AKHIR
  $("judulProyek").textContent = "Proyek akhir" + (d.judul_proyek ? ": " + d.judul_proyek : "");
  [["Bagian tersulit", d.cerita_tersulit], ["Bagian paling seru", d.cerita_terseru], ["Rencana pengembangan", d.cerita_rencana]]
    .forEach(function (c) {
      if (!c[1]) return;
      var li = el("li");
      li.append(el("span", "label-kecil", c[0]), el("p", null, c[1]));
      $("cerita").append(li);
    });
  if (!$("cerita").children.length) $("cerita").replaceWith(el("p", null, panggilan + " belum menulis cerita proyeknya."));
  if (d.device_id) {
    $("linkDashboard").href = "https://" + d.device_id + ".inspiralabs.id/";
    $("linkDashboard").textContent = "Buka dashboard " + d.device_id;
    $("linkDashboard").hidden = false;
    ambilDataAlat(d.device_id);
  } else {
    $("alatStatus").textContent = "Belum terhubung ke alat kelompok.";
  }

  // PERJALANAN (hanya pertemuan yang ada lencana atau tanya jawab, supaya ringkas)
  lencana.filter(function (p) { return (p.challenge || []).length || p.tanya_jawab; }).forEach(function (p) {
    var li = el("li", "titik" + ((p.challenge || []).length ? " ada-lencana" : ""));
    li.append(el("p", "titik-no", "P" + p.p));
    var isi = el("div", "titik-isi");
    var kepala = el("div", "titik-kepala");
    kepala.append(el("h3", null, p.judul || "Pertemuan " + p.p));
    if (p.tanggal) {
      var t = el("time", null, new Date(p.tanggal + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "short" }));
      t.dateTime = p.tanggal;
      kepala.append(t);
    }
    isi.append(kepala);
    if (p.dipelajari) isi.append(el("p", null, p.dipelajari));
    if ((p.challenge || []).length) {
      var ul = el("ul", "titik-lencana");
      ul.setAttribute("aria-label", "Challenge yang lulus");
      p.challenge.forEach(function (c) { ul.append(el("li", "cap-" + c.level, (LEVEL[c.level] || c.level) + " · " + c.nama)); });
      isi.append(ul);
    }
    li.append(isi);
    $("linimasa").append(li);
  });
  $("bagianPerjalanan").hidden = !$("linimasa").children.length;

  // LENCANA
  semuaChallenge.forEach(function (x) {
    var li = el("li", "stempel stempel-" + x[1].level);
    li.append(el("span", "stempel-nama", x[1].nama), el("span", "stempel-level", (LEVEL[x[1].level] || x[1].level) + " · P" + x[0]));
    $("lencana").append(li);
  });
  if (!semuaChallenge.length) $("lencana").replaceWith(el("p", null, "Lencana muncul di sini setelah challenge pertama lulus."));

  // CATATAN PELATIH & SERTIFIKAT
  if (tampilkan("catatan", d.catatan_pelatih)) $("bagianCatatan").hidden = false;
  if (d.sertifikat_nomor) {
    $("sertifikatInfo").textContent = "Nomor " + d.sertifikat_nomor + ". Sertifikat cetak menyusul setelah pertemuan terakhir.";
    $("bagianSertifikat").hidden = false;
  }
}

function ambilDataAlat(deviceId) {
  var status = $("alatStatus");
  fetch(API_BASE + "/api/readings/" + encodeURIComponent(deviceId) + "?limit=1")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (json) {
      var r = json.readings && json.readings[0];
      if (!r) { status.textContent = "Alat ini belum mengirim data."; return; }
      $("alatSuhu").textContent = Number(r.payload.temp).toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      $("alatLembap").textContent = Math.round(r.payload.humidity);
      $("alatAngka").hidden = false;
      var waktu = new Date(r.createdAt || r.created_at);
      status.textContent = Math.abs((Date.now() - waktu) / 60000) < 2 ? "Alat sedang menyala."
        : "Dikirim " + waktu.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) + ". Alat sedang tidak menyala.";
    })
    .catch(function () { status.textContent = "Data alat belum bisa dimuat."; });
}

var slug = new URLSearchParams(location.search).get("s");
if (!slug) {
  $("status").textContent = "Halaman tidak ditemukan. Periksa lagi alamat profilnya.";
} else {
  fetch(API_BASE + "/api/portofolio/profil/" + encodeURIComponent(slug))
    .then(function (r) {
      if (r.status === 404) throw new Error("404");
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then(function (json) {
      isiProfil(json.profil);
      $("status").remove();
      $("konten").hidden = false;
    })
    .catch(function (e) {
      $("status").textContent = e.message === "404" ? "Halaman tidak ditemukan. Periksa lagi alamat profilnya."
        : "Profil belum bisa dimuat. Muat ulang halaman. Kalau tetap gagal, hubungi pelatih Ekskul Coding.";
    });
}
