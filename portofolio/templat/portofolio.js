// Mengisi index.html dan sertifikat.html dari data.json (dibuat oleh tools/portofolio.py).
// Semua teks dari data dipasang lewat textContent, jadi isi data tidak bisa menyisipkan HTML.

var LEVEL = { easy: "Easy", medium: "Medium", hard: "Hard" };

function $(id) { return document.getElementById(id); }

function el(tag, kelas, teks) {
  var e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks != null) e.textContent = teks;
  return e;
}

function tanggal(iso, opsi) {
  return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", opsi || { day: "numeric", month: "long", year: "numeric" });
}

function gambar(file, alt) {
  var img = el("img");
  img.src = "foto/" + file;
  img.alt = alt;
  img.loading = "lazy";
  img.width = 800;
  img.height = 600;
  return img;
}

function isiPortofolio(d) {
  var proyek = d.proyek_akhir || {};
  document.title = d.nama + " · Portofolio Ekskul Coding";

  // SAMPUL
  $("asal").textContent = "Ekskul Coding " + d.jenjang_label + " · " + d.sekolah + " · " + d.semester;
  $("nama").textContent = d.nama;
  $("ringkasan").textContent = d.ringkasan;
  var fakta = [[d.pertemuan.length, "pertemuan"], [d.poin, "poin"], [d.lencana, "lencana challenge"]];
  if (d.peringkat) fakta.push(["#" + d.peringkat, "leaderboard " + d.jenjang_label]);
  fakta.forEach(function (f) {
    var grup = el("div");
    grup.append(el("dt", null, f[1]), el("dd", null, String(f[0])));
    $("fakta").append(grup);
  });
  if (proyek.foto) {
    $("sampulFoto").append(gambar(proyek.foto, proyek.keterangan_foto || "Foto proyek akhir " + proyek.judul),
      el("figcaption", null, proyek.keterangan_foto));
    $("sampulFoto").hidden = false;
  }

  // PROYEK AKHIR
  $("judulProyek").textContent = "Proyek akhir" + (proyek.judul ? ": " + proyek.judul : "");
  (proyek.tiga_kalimat || []).forEach(function (k) { $("tigaKalimat").append(el("li", null, k)); });
  if (!(proyek.tiga_kalimat || []).length) $("tigaKalimat").replaceWith(el("p", null, "Presentasi proyek akhir berlangsung di pertemuan 13."));
  var kelompok = [];
  if (d.nama_kelompok) kelompok.push("Kelompok " + d.nama_kelompok);
  if (d.peran) kelompok.push(d.panggilan + " berperan sebagai " + d.peran);
  if (d.anggota.length) kelompok.push("bersama " + d.anggota.join(", "));
  $("kelompok").textContent = kelompok.length ? kelompok.join(", ") + "." : "";
  $("linkDashboard").href = d.dashboard_url;
  $("linkDashboard").textContent = "Buka dashboard " + d.device_id;
  ambilDataAlat(d);

  // PERJALANAN
  d.pertemuan.forEach(function (p) {
    var li = el("li", "titik" + (p.challenge.length ? " ada-lencana" : ""));
    li.append(el("p", "titik-no", "P" + p.p));
    var isi = el("div", "titik-isi");
    var kepala = el("div", "titik-kepala");
    kepala.append(el("h3", null, p.judul), el("time", null, tanggal(p.tanggal, { day: "numeric", month: "short" })));
    kepala.lastChild.dateTime = p.tanggal;
    isi.append(kepala, el("p", null, p.dipelajari));
    if (p.hasil) {
      var hasil = el("p", "titik-hasil");
      hasil.append(el("strong", null, "Hasil " + d.panggilan + ": "), p.hasil);
      isi.append(hasil);
    }
    if (p.challenge.length) {
      var ul = el("ul", "titik-lencana");
      ul.setAttribute("aria-label", "Challenge yang lulus");
      p.challenge.forEach(function (c) { ul.append(el("li", "cap-" + c.level, LEVEL[c.level] + " · " + c.nama)); });
      isi.append(ul);
    }
    li.append(isi);
    $("linimasa").append(li);
  });

  // LENCANA
  var semua = [];
  d.pertemuan.forEach(function (p) { p.challenge.forEach(function (c) { semua.push([p.p, c]); }); });
  semua.forEach(function (x) {
    var li = el("li", "stempel stempel-" + x[1].level);
    li.append(el("span", "stempel-nama", x[1].nama), el("span", "stempel-level", LEVEL[x[1].level] + " · P" + x[0]));
    $("lencana").append(li);
  });
  if (!semua.length) $("lencana").replaceWith(el("p", null, "Lencana muncul di sini setelah challenge pertama lulus."));

  // GALERI (hanya kalau orang tua mengizinkan; kalau tidak, generator mengosongkan d.foto)
  d.foto.forEach(function (f) {
    var fig = el("figure");
    var a = el("a");
    a.href = "foto/" + f.file;
    a.append(gambar(f.file, f.keterangan));
    fig.append(a, el("figcaption", null, "P" + f.p + " · " + f.keterangan));
    var li = el("li");
    li.append(fig);
    $("galeri").append(li);
  });
  $("bagianGaleri").hidden = !d.foto.length;

  // CATATAN PELATIH
  if (d.catatan_tutor) {
    $("catatan").textContent = d.catatan_tutor;
    $("catatanOleh").textContent = d.pelatih + ", pelatih Ekskul Coding";
    $("bagianCatatan").hidden = false;
  }

  // SERTIFIKAT
  $("sertifikatInfo").textContent = "Nomor " + d.sertifikat.nomor + ", diterbitkan " + tanggal(d.sertifikat.tanggal) +
    ". Siap dicetak di kertas A4.";
}

function ambilDataAlat(d) {
  var status = $("alatStatus");
  fetch(d.api_base + "/api/readings/" + d.device_id + "?limit=1")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (json) {
      var r = json.readings && json.readings[0];
      if (!r) {
        status.textContent = "Alat ini belum mengirim data. Angka suhu muncul di sini setelah alat menyala dan tersambung WiFi.";
        return;
      }
      $("alatSuhu").textContent = Number(r.payload.temp).toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
      $("alatLembap").textContent = Math.round(r.payload.humidity);
      $("alatAngka").hidden = false;
      var waktu = new Date(r.createdAt);
      var menit = (Date.now() - waktu) / 60000;
      status.textContent = Math.abs(menit) < 2 ? "Alat sedang menyala. Angka diperbarui tiap beberapa detik di dashboard."
        : "Dikirim " + waktu.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) +
          ". Alat sedang tidak menyala.";
    })
    .catch(function () {
      status.textContent = "Data alat belum bisa dimuat. Periksa internet, lalu muat ulang halaman.";
    });
}

function isiSertifikat(d) {
  document.title = "Sertifikat " + d.nama;
  $("sertSekolah").textContent = d.sekolah;
  $("sertNama").textContent = d.nama;
  var judul = d.proyek_akhir && d.proyek_akhir.judul ? d.proyek_akhir.judul + ", " : "";
  $("sertIsi").textContent = "telah menyelesaikan Ekstrakurikuler Coding " + d.jenjang_label + " " + d.semester +
    " sebanyak " + d.pertemuan.length + " pertemuan, dengan proyek akhir " + judul + d.proyek_umum + ".";
  $("sertAngka").textContent = d.poin + " poin · " + d.lencana + " lencana challenge";
  $("sertNomor").textContent = d.sertifikat.nomor;
  $("sertUrl").textContent = d.url.replace("https://", "");
  $("sertTanggal").textContent = tanggal(d.sertifikat.tanggal);
  $("sertPelatih").textContent = d.pelatih;
  if (typeof qrcode === "function") {
    var qr = qrcode(0, "M");
    qr.addData(d.url);
    qr.make();
    var n = qr.getModuleCount(), jalur = "";
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) jalur += "M" + c + " " + r + "h1v1h-1z";
    $("sertQr").innerHTML = '<svg viewBox="-2 -2 ' + (n + 4) + " " + (n + 4) + '" shape-rendering="crispEdges"><rect x="-2" y="-2" width="' +
      (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + jalur + '" fill="#1f2937"/></svg>';
  } else {
    $("sertQr").hidden = true;
  }
}

fetch("data.json")
  .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(function (d) {
    $("pitaContoh").hidden = !d.contoh;
    (document.body.dataset.halaman === "sertifikat" ? isiSertifikat : isiPortofolio)(d);
    $("status").remove();
    $("konten").hidden = false;
  })
  .catch(function () {
    $("status").textContent = "Portofolio belum bisa dimuat. Muat ulang halaman. Kalau tetap gagal, hubungi pelatih Ekskul Coding.";
  });
