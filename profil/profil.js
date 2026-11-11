// Profil siswa: /profil/?s=<slug>. Data dari backend; semua teks dipasang lewat textContent
// (isian siswa tidak bisa menyisipkan HTML).
// Dibuka dari localhost = coba-coba dengan backend/portofolio-dev.js (port 3335; bisa diganti lewat
// localStorage.apiBase). Selain localhost selalu server produksi.
var API_BASE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  ? localStorage.getItem("apiBase") || "http://localhost:3335"
  : "https://api-ekskulcoding.inspiralabs.id";
var LEVEL = { easy: "Easy", medium: "Medium", hard: "Hard" };
var JENJANG = { smp: "SMP", sma: "SMA" };
// Warna halaman pilihan siswa. Sama dengan blok [data-tema] di profil.css dan TEMA di backend/portofolio-inti.js.
var TEMA = ["ungu", "biru", "hijau", "jingga", "merah-muda"];
// Sama dengan "ringkasan" di portofolio/kurikulum.json.
var RINGKASAN = {
  smp: "{panggilan} merakit alat pemantau suhu sendiri, mulai dari LED pertama sampai angka suhunya tampil di internet.",
  sma: "{panggilan} merakit alat pemantau suhu yang bisa menyalakan kipas sendiri, dan kipasnya bisa dikendalikan dari dashboard di HP.",
};
// Materi satu semester per jenjang (dari judul pertemuan di kurikulum/). Sama untuk semua siswa di jenjang itu.
var MATERI = {
  smp: [["x=1", "Urutan & variabel"], ["if", "Percabangan"], ["</>", "HTML"], ["{ }", "CSS"], ["ESP", "ESP32"],
    ["LED", "Rangkaian LED"], ["IDE", "Arduino IDE"], ["°C", "Sensor DHT22"], ["WiFi", "Kirim data ke internet"]],
  sma: [["x=1", "Variabel & tipe data"], ["if", "Percabangan"], ["for", "Perulangan & array"], ["</>", "HTML"],
    ["{ }", "CSS"], ["DOM", "DOM & event"], ["ESP", "ESP32"], ["°C", "Sensor DHT22"], ["I/O", "Relay & kipas"],
    ["IDE", "Arduino IDE"]],
};

function $(id) { return document.getElementById(id); }

function el(tag, kelas, teks) {
  var e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks != null) e.textContent = teks;
  return e;
}

// <div><dt>label</dt><dd>isi</dd></div> ke dalam <dl>
function pasangan(dl, label, isi) {
  var grup = el("div");
  grup.append(el("dt", null, label), el("dd", null, String(isi)));
  dl.append(grup);
}

function isiProfil(d) {
  var panggilan = d.panggilan || d.nama_lengkap.split(" ")[0];
  var lencana = d.lencana || [];
  var semuaChallenge = [];
  var tanyaJawab = 0;
  lencana.forEach(function (p) {
    tanyaJawab += Number(p.tanya_jawab) || 0;
    (p.challenge || []).forEach(function (c) { semuaChallenge.push([p.p, c]); });
  });
  document.title = d.nama_lengkap + " · Ekskul Coding";
  document.documentElement.dataset.tema = TEMA.indexOf(d.tema) >= 0 ? d.tema : TEMA[0];

  // HERO
  $("asal").textContent = ["Ekskul Coding " + (JENJANG[d.jenjang] || ""), d.kelas ? "Kelas " + d.kelas : ""].filter(Boolean).join(" · ");
  $("nama").textContent = d.nama_lengkap;
  $("ringkasan").textContent = (RINGKASAN[d.jenjang] || "").replace("{panggilan}", panggilan);
  if (d.foto_url) {
    var img = el("img");
    img.src = d.foto_url;
    img.alt = "Foto " + panggilan;
    img.width = 800;
    img.height = 1000;
    $("potret").append(img);
  } else {
    // Belum ada foto: inisial nama, bukan gambar buatan.
    var inisial = d.nama_lengkap.split(/\s+/).slice(0, 2).map(function (k) { return k.charAt(0).toUpperCase(); }).join("");
    var tanda = el("span", "potret-inisial", inisial);
    tanda.setAttribute("aria-hidden", "true");
    $("potret").append(tanda);
  }

  // KENALAN
  if (d.tentang) $("tentang").textContent = d.tentang;
  else { $("tentang").textContent = panggilan + " belum menulis tentang dirinya."; $("tentang").className += " kosong"; }
  pasangan($("rincian"), "Panggilan", panggilan);
  if (d.kelas) pasangan($("rincian"), "Kelas", d.kelas);
  if (d.device_id) pasangan($("rincian"), "Kelompok", d.device_id);
  if (d.cita_cita) pasangan($("rincian"), "Cita-cita", d.cita_cita);

  if (d.poin != null) pasangan($("angka"), "poin", d.poin);
  // Angka nol tidak ditampilkan: halaman siswa yang poinnya masih sedikit tidak dipenuhi deretan "0".
  if (semuaChallenge.length) pasangan($("angka"), "lencana challenge", semuaChallenge.length);
  if (tanyaJawab) pasangan($("angka"), "kali tanya jawab", tanyaJawab);
  // Peringkat = urutan Nilai Akhir di Gradebook (bukan urutan poin di halaman Leaderboard), jadi labelnya "peringkat".
  if (d.peringkat) pasangan($("angka"), "peringkat " + (JENJANG[d.jenjang] || ""), "#" + d.peringkat);
  else if (lencana.length) pasangan($("angka"), "pertemuan dapat poin", lencana.length);
  $("angka").hidden = !$("angka").children.length;

  // MATERI
  (MATERI[d.jenjang] || []).forEach(function (m) {
    var li = el("li");
    var tandaMateri = el("span", "materi-tanda", m[0]);
    tandaMateri.setAttribute("aria-hidden", "true");
    li.append(tandaMateri, el("span", null, m[1]));
    $("materi").append(li);
  });
  $("bagianMateri").hidden = !$("materi").children.length;

  // PROYEK AKHIR
  if (d.judul_proyek) { $("namaProyek").textContent = d.judul_proyek; $("namaProyek").hidden = false; }
  [["Bagian tersulit", d.cerita_tersulit], ["Bagian paling seru", d.cerita_terseru], ["Rencana pengembangan", d.cerita_rencana]]
    .forEach(function (c) {
      if (!c[1]) return;
      var li = el("li");
      li.append(el("span", null, c[0]), el("p", null, c[1]));
      $("cerita").append(li);
    });
  if (!$("cerita").children.length) $("cerita").replaceWith(el("p", "kosong", panggilan + " belum menulis cerita proyeknya."));
  if (d.device_id) {
    $("linkDashboard").href = "https://" + d.device_id + ".inspiralabs.id/";
    $("linkDashboard").textContent = "Buka dashboard " + d.device_id;
    $("linkDashboard").hidden = false;
    ambilDataAlat(d.device_id);
  } else {
    $("alatStatus").textContent = "Belum terhubung ke alat kelompok.";
  }
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
  $("kotakLink").hidden = !$("link").children.length;

  // LENCANA
  semuaChallenge.forEach(function (x) {
    var c = x[1];
    var li = el("li");
    var tingkat = el("span", "tingkat tingkat-" + c.level);
    tingkat.setAttribute("aria-hidden", "true");
    tingkat.append(el("i"), el("i"), el("i"));
    var ket = [LEVEL[c.level] || c.level, "P" + x[0]];
    if (c.poin) ket.push("+" + c.poin + " poin");
    li.append(tingkat, el("span", "lencana-nama", c.nama), el("span", "lencana-ket", ket.join(" · ")));
    $("lencana").append(li);
  });
  if (!semuaChallenge.length) $("lencana").replaceWith(el("p", "kosong", "Belum ada lencana. Lencana muncul di sini setelah challenge pertama lulus."));

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
      p.challenge.forEach(function (c) { ul.append(el("li", null, (LEVEL[c.level] || c.level) + " · " + c.nama)); });
      isi.append(ul);
    }
    li.append(isi);
    $("linimasa").append(li);
  });
  $("bagianPerjalanan").hidden = !$("linimasa").children.length;

  // CATATAN PELATIH & SERTIFIKAT
  if (d.catatan_pelatih) { $("catatan").textContent = d.catatan_pelatih; $("bagianCatatan").hidden = false; }
  if (d.sertifikat_nomor) {
    $("sertifikatNomor").textContent = "Nomor " + d.sertifikat_nomor;
    $("linkSertifikat").href = "/profil/sertifikat/?s=" + encodeURIComponent(d.slug);
    $("sertifikat").hidden = false;
    $("keSertifikat").hidden = false;
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
