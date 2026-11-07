// Dashboard portofolio: login siswa (ID + kode) atau admin (email + password).
// Token disimpan di localStorage.tokenPortofolio; semua teks dipasang lewat textContent.
// localStorage.apiBase hanya berlaku di localhost (coba-coba dengan backend/portofolio-dev.js).
var API_BASE = (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && localStorage.getItem("apiBase")) ||
  "https://api-ekskulcoding.inspiralabs.id";
var KUNCI_TOKEN = "tokenPortofolio";

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

function $(id) { return document.getElementById(id); }
function el(tag, kelas, teks) {
  var e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks != null) e.textContent = teks;
  return e;
}
function panjang(s) { return Array.from(s).length; }   // per karakter, sama seperti server
// "tentang: maksimal 300 karakter" -> "Tentang aku: maksimal 300 karakter"
function rapikan(teks) {
  var label = { link_karya: "Link karya" };
  ISIAN_SISWA.concat(ISIAN_RESMI).forEach(function (d) { label[d[0]] = d[1]; });
  return teks.replace(/^(\w+):/, function (s, k) { return (label[k] || k) + ":"; });
}
function pesan(id, teks, jenis) { $(id).textContent = teks || ""; $(id).className = "pesan" + (jenis ? " " + jenis : ""); }

function token() { return localStorage.getItem(KUNCI_TOKEN); }
function isiToken() {
  try {
    var bagian = token().split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(bagian));
  } catch (e) { return null; }
}

// fetch ke backend. Error dilempar dengan pesan dari server; 401 = sesi habis -> kembali ke layar masuk.
async function api(path, opsi) {
  opsi = opsi || {};
  var kepala = {};
  if (token()) kepala.Authorization = "Bearer " + token();
  var body;
  if (opsi.foto) { kepala["Content-Type"] = "image/jpeg"; body = opsi.foto; }
  else if (opsi.body !== undefined) { kepala["Content-Type"] = "application/json"; body = JSON.stringify(opsi.body); }
  var res;
  try {
    res = await fetch(API_BASE + "/api/portofolio" + path, { method: opsi.method || (body ? "POST" : "GET"), headers: kepala, body: body });
  } catch (e) {
    throw new Error("Tidak tersambung ke server. Periksa internet, lalu coba lagi.");
  }
  var isi = await res.json().catch(function () { return {}; });
  if (res.status === 401 && token() && !opsi.masuk) { keluar("Sesi berakhir, masuk lagi."); throw new Error("Sesi berakhir"); }
  if (res.status === 429) throw new Error("Terlalu banyak percobaan. Tunggu 15 menit, lalu coba lagi.");
  if (res.status === 503) throw new Error("Portofolio belum dibuka. Tanya tutor.");
  if (res.status === 413) throw new Error("Foto terlalu besar, coba foto lain.");
  if (!res.ok) throw new Error(isi.error || "Terjadi kesalahan (" + res.status + ").");
  return isi;
}

// ---------------------------------------------------------------- foto: kecilkan & jadikan JPEG di browser
// Encode ulang lewat canvas otomatis membuang EXIF (termasuk lokasi GPS).
async function kecilkanFoto(file) {
  var gambar;
  try {
    gambar = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch (e) {
    try {
      gambar = await createImageBitmap(file);   // browser lama yang belum kenal opsi imageOrientation
    } catch (e2) {
      throw new Error("Format foto tidak bisa dibaca. Pilih foto JPG atau PNG.");
    }
  }
  var skala = Math.min(1, 1600 / Math.max(gambar.width, gambar.height));
  var kanvas = document.createElement("canvas");
  kanvas.width = Math.round(gambar.width * skala);
  kanvas.height = Math.round(gambar.height * skala);
  kanvas.getContext("2d").drawImage(gambar, 0, 0, kanvas.width, kanvas.height);
  for (var q = 0.85; q >= 0.45; q -= 0.1) {
    var blob = await new Promise(function (ok) { kanvas.toBlob(ok, "image/jpeg", q); });
    if (blob && blob.size <= 600 * 1024) return blob;
  }
  throw new Error("Foto terlalu besar, coba foto lain.");
}

// ---------------------------------------------------------------- editor (dipakai siswa & admin)
// simpanKe: path endpoint simpan; fotoKe: path endpoint foto.
function buatEditor(wadah, siswa, opsi) {
  wadah.textContent = "";
  var form = el("form", "kartu");
  form.noValidate = true;

  // foto
  var fotoBaris = el("div", "foto-baris");
  var pratinjau = el("img", "foto-pratinjau");
  pratinjau.alt = "Foto profil";
  if (siswa.foto_url) pratinjau.src = siswa.foto_url; else pratinjau.hidden = true;
  var labelFoto = el("label", null, "Foto profil");
  var inputFoto = el("input");
  inputFoto.type = "file";
  inputFoto.accept = "image/*";
  labelFoto.append(inputFoto);
  var pesanFoto = el("p", "pesan");
  pesanFoto.setAttribute("role", "status");
  fotoBaris.append(pratinjau, labelFoto);
  form.append(fotoBaris, pesanFoto);
  inputFoto.addEventListener("change", async function () {
    var file = inputFoto.files[0];
    if (!file) return;
    pesanFoto.className = "pesan";
    pesanFoto.textContent = "Mengunggah foto...";
    try {
      var hasil = await api(opsi.fotoKe, { foto: await kecilkanFoto(file) });
      pratinjau.src = hasil.foto_url;
      pratinjau.hidden = false;
      pesanFoto.className = "pesan ok";
      pesanFoto.textContent = "Foto tersimpan ✓";
    } catch (e) {
      pesanFoto.className = "pesan salah";
      pesanFoto.textContent = e.message;
    }
    inputFoto.value = "";
  });

  // isian teks
  function kelompok(judul, daftar) {
    var fs = el("fieldset", "kelompok-isian");
    fs.append(el("legend", null, judul));
    daftar.forEach(function (d) {
      var label = el("label", null, d[1]);
      var input = el(d[3]);
      input.name = d[0];
      input.maxLength = d[2];
      input.value = siswa[d[0]] || "";
      var hitung = el("span", "hitung");
      var perbarui = function () { hitung.textContent = panjang(input.value) + "/" + d[2]; };
      input.addEventListener("input", perbarui);
      perbarui();
      label.append(input, hitung);
      fs.append(label);
    });
    form.append(fs);
  }
  if (opsi.resmi) kelompok("Data resmi (hanya guru/admin)", ISIAN_RESMI);
  kelompok(opsi.resmi ? "Isian siswa" : "Ceritakan tentang dirimu", ISIAN_SISWA);

  // link karya
  var fsLink = el("fieldset", "kelompok-isian");
  fsLink.append(el("legend", null, "Link karya (opsional, diawali https://)"));
  var linkInput = [0, 1, 2].map(function (i) {
    var input = el("input");
    input.type = "url";
    input.placeholder = "https://...";
    input.value = (siswa.link_karya || [])[i] || "";
    input.setAttribute("aria-label", "Link karya " + (i + 1));
    fsLink.append(input);
    return input;
  });
  form.append(fsLink);

  // simpan
  var aksi = el("div", "aksi");
  var tombol = el("button", "tombol", "Simpan");
  tombol.type = "submit";
  aksi.append(tombol);
  if (siswa.slug) {
    var lihat = el("a", null, "Lihat halaman publik ↗");
    lihat.href = "/profil/?s=" + encodeURIComponent(siswa.slug);
    lihat.target = "_blank";
    lihat.rel = "noopener";
    aksi.append(lihat);
  }
  var pesanSimpan = el("p", "pesan");
  pesanSimpan.setAttribute("role", "status");
  form.append(aksi, pesanSimpan);

  form.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    // Kirim HANYA yang diubah di form ini. Form bisa sudah lama terbuka (admin membuka daftar sebelum siswa
    // mengisi dari HP); mengirim semua isian akan menimpa tulisan siswa yang lebih baru dengan nilai lama.
    var data = {};
    (opsi.resmi ? ISIAN_RESMI : []).concat(ISIAN_SISWA).forEach(function (d) {
      var nilai = form.elements[d[0]].value;
      if (nilai.trim() !== String(siswa[d[0]] || "").trim()) data[d[0]] = nilai;
    });
    var link = linkInput.map(function (i) { return i.value.trim(); }).filter(Boolean);
    if (JSON.stringify(link) !== JSON.stringify(siswa.link_karya || [])) data.link_karya = link;
    if (!Object.keys(data).length) {
      pesanSimpan.className = "pesan";
      pesanSimpan.textContent = "Tidak ada perubahan.";
      return;
    }
    tombol.disabled = true;
    pesanSimpan.className = "pesan";
    pesanSimpan.textContent = "Menyimpan...";
    try {
      var hasil = await api(opsi.simpanKe, { body: data });
      pesanSimpan.className = "pesan ok";
      pesanSimpan.textContent = opsi.resmi ? "Tersimpan ✓ Halaman publik siswa sudah berubah." : "Tersimpan ✓ Halaman publikmu sudah berubah.";
      // Pembanding & isi form ikut isi terbaru dari server (termasuk tulisan siswa yang masuk setelah form dibuka),
      // supaya simpanan berikutnya tidak mengirim nilai lama sebagai "perubahan".
      Object.assign(siswa, hasil.siswa);
      (opsi.resmi ? ISIAN_RESMI : []).concat(ISIAN_SISWA).forEach(function (d) {
        form.elements[d[0]].value = siswa[d[0]] || "";
        form.elements[d[0]].dispatchEvent(new Event("input"));
      });
      linkInput.forEach(function (input, i) { input.value = (siswa.link_karya || [])[i] || ""; });
      if (opsi.sesudahSimpan) opsi.sesudahSimpan(hasil.siswa);
    } catch (e) {
      pesanSimpan.className = "pesan salah";
      pesanSimpan.textContent = rapikan(e.message);
    }
    tombol.disabled = false;
  });
  wadah.append(form);
}

// ---------------------------------------------------------------- layar
function tampil(id) {
  ["layarMasuk", "layarSiswa", "layarAdmin"].forEach(function (x) { $(x).hidden = x !== id; });
  window.scrollTo(0, 0);
}

function keluar(alasan) {
  localStorage.removeItem(KUNCI_TOKEN);
  tampil("layarMasuk");
  pesan("pesanMasuk", alasan || "", alasan ? "salah" : "");
}

function infoResmi(s) {
  return [s.nama_lengkap, s.kelas ? "Kelas " + s.kelas : "", s.id_siswa, s.poin != null ? s.poin + " poin" : ""].filter(Boolean).join(" · ");
}

async function bukaSiswa() {
  tampil("layarSiswa");
  try {
    var s = (await api("/saya")).siswa;
    $("infoSiswa").textContent = infoResmi(s) + ". Nama lengkap, kelas, dan poin diisi tutor.";
    buatEditor($("editorSiswa"), s, { simpanKe: "/saya", fotoKe: "/saya/foto" });
  } catch (e) {
    $("infoSiswa").textContent = e.message;
  }
}

var semuaSiswa = [];
var siswaDipilih = null;

function gambarDaftar() {
  var cari = $("cariNama").value.trim().toLowerCase();
  var ul = $("daftarSiswa");
  ul.textContent = "";
  semuaSiswa.filter(function (s) { return !cari || s.nama_lengkap.toLowerCase().indexOf(cari) >= 0; }).forEach(function (s) {
    var b = el("button");
    b.type = "button";
    b.append(el("strong", null, s.nama_lengkap), document.createTextNode(" "),
      el("small", null, [s.id_siswa, s.kelas ? "Kelas " + s.kelas : "kelas belum diisi"].join(" · ")));
    b.addEventListener("click", function () { bukaEditorAdmin(s); });
    var li = el("li");
    li.append(b);
    ul.append(li);
  });
  pesan("pesanDaftar", ul.children.length ? "" : "Tidak ada siswa. Sudah menjalankan impor?");
}

async function muatDaftar() {
  pesan("pesanDaftar", "Memuat...");
  try {
    var j = $("pilihJenjang").value;
    semuaSiswa = (await api("/staf/siswa" + (j ? "?jenjang=" + j : ""))).siswa;
    gambarDaftar();
  } catch (e) {
    pesan("pesanDaftar", e.message, "salah");
  }
}

function bukaEditorAdmin(s) {
  siswaDipilih = s;
  $("daftarAdmin").hidden = true;
  $("editorAdmin").hidden = false;
  $("kodeBaru").hidden = true;
  $("judulEditor").textContent = s.nama_lengkap;
  var id = encodeURIComponent(s.id_siswa);
  buatEditor($("editorAdminIsi"), s, {
    resmi: true, simpanKe: "/staf/siswa/" + id, fotoKe: "/staf/siswa/" + id + "/foto",
    sesudahSimpan: function (baru) { Object.assign(s, baru); $("judulEditor").textContent = baru.nama_lengkap; },
  });
  window.scrollTo(0, 0);
}

function bukaAdmin() {
  tampil("layarAdmin");
  $("daftarAdmin").hidden = false;
  $("editorAdmin").hidden = true;
  muatDaftar();
}

// ---------------------------------------------------------------- event
function pilihTab(siswa) {
  $("tabSiswa").setAttribute("aria-selected", String(siswa));
  $("tabStaf").setAttribute("aria-selected", String(!siswa));
  $("formSiswa").hidden = !siswa;
  $("formStaf").hidden = siswa;
  pesan("pesanMasuk", "");
}
$("tabSiswa").addEventListener("click", function () { pilihTab(true); });
$("tabStaf").addEventListener("click", function () { pilihTab(false); });

async function masuk(form, path, data) {
  var tombol = form.querySelector("button");
  tombol.disabled = true;
  pesan("pesanMasuk", "Memeriksa...");
  try {
    var hasil = await api(path, { body: data, masuk: true });
    localStorage.setItem(KUNCI_TOKEN, hasil.token);
    form.reset();
    pesan("pesanMasuk", "");
    mulai();
  } catch (e) {
    pesan("pesanMasuk", e.message, "salah");
  }
  tombol.disabled = false;
}
$("formSiswa").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var f = ev.target;
  masuk(f, "/masuk/siswa", { id: f.elements.id.value, kode: f.elements.kode.value });
});
$("formStaf").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var f = ev.target;
  masuk(f, "/masuk/staf", { email: f.elements.email.value, password: f.elements.password.value });
});

document.querySelectorAll("[data-keluar]").forEach(function (b) { b.addEventListener("click", function () { keluar(); }); });
$("pilihJenjang").addEventListener("change", muatDaftar);
$("cariNama").addEventListener("input", gambarDaftar);
$("kembali").addEventListener("click", function () { bukaAdmin(); });
$("tombolReset").addEventListener("click", async function () {
  if (!siswaDipilih || !confirm("Buat kode baru untuk " + siswaDipilih.nama_lengkap + "? Kode lama langsung tidak berlaku.")) return;
  try {
    var hasil = await api("/staf/siswa/" + encodeURIComponent(siswaDipilih.id_siswa) + "/reset-kode", { body: {} });
    $("kodeBaru").textContent = hasil.kode;
    $("kodeBaru").append(el("small", null, "Tulis di kertas untuk " + siswaDipilih.nama_lengkap + ". Kode ini hanya tampil sekali."));
    $("kodeBaru").hidden = false;
  } catch (e) {
    alert(e.message);
  }
});

function mulai() {
  var isi = isiToken();
  if (!isi || isi.exp < Date.now()) return keluar(token() ? "Sesi berakhir, masuk lagi." : "");
  if (isi.peran === "siswa") bukaSiswa(); else bukaAdmin();
}
mulai();
