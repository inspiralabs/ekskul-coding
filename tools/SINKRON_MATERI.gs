// ============================================================
// SINKRON MATERI — isi halaman Materi di website ekskul dari folder Drive "2. Materi"
// Jalankan di https://script.google.com (New project -> tempel file ini -> Save -> Run "jalankan").
//
// Yang dilakukan:
//   1. Menyusuri folder materi: subfolder P1 ... P13 (dan semua subfolder di dalamnya, mis. SMP/SMA).
//   2. HANYA mengambil slide (Google Slides atau PowerPoint .pptx) dan Google Form, termasuk lewat shortcut.
//      File lain dilewati berdasarkan TIPE-nya, jadi spreadsheet Responses, Panduan Pengajar (Docs), PDF, dll.
//      tidak pernah ikut (hanya namanya disebut di log untuk pertemuan yang tidak punya slide).
//   3. Mencari sendiri Google Sheet "Materi" yang dibaca website (berkolom "Judul Materi" dan memuat
//      link slide P1), lalu menambah/melengkapi baris per pertemuan & jenjang:
//        Link Drive      = link Google Slides
//        Link Post-Test  = link Google Form (versi untuk diisi siswa)
//   4. Baris & sel yang sudah terisi TIDAK ditimpa (kecuali judul cadangan "Pertemuan N" & Status Draft buatan
//      script ini, yang diperbarui begitu slide-nya ditemukan dan sudah di-share). Baris baru: Status "Published" kalau slide-nya bisa
//      dibuka siapa saja yang punya link, selain itu "Draft" (tidak tampil di website) + dilaporkan di log.
//   5. Pengaturan share file tidak diubah.
// Aman dijalankan ulang setiap ada materi baru.
//
// Isi 2 baris di bawah (JANGAN commit ke repo: folder materi berisi Responses post-test yang rahasia).
// ============================================================

const FOLDER_MATERI = "https://drive.google.com/drive/folders/1UUQRRmEzJh1lv-ejCoAIMG8bzs91MCCy?usp=sharing";
const LINK_SLIDE_P1 = "https://docs.google.com/presentation/d/1FadnL5qyzup4ko4ddniYbowdkFIKlnkXy5Za-MZBdBk/edit?usp=sharing";  // dipakai untuk menemukan sheet Materi yang benar

const KOLOM = ["No Pertemuan", "Tanggal", "Judul Materi", "Link Drive", "Link Post-Test", "Link Kritik & Saran", "Target", "Status"];

function jalankan() {
  const folder = DriveApp.getFolderById(ambilId_(FOLDER_MATERI));
  const sheet = cariSheetMateri_();
  Logger.log("Sheet Materi: %s", sheet.getParent().getUrl());

  const temuan = kumpulkan_(folder);            // {"10|SMP": {slides: [...], forms: [...]}}
  const data = sheet.getDataRange().getValues();
  const kepala = data[0].map(String);
  const k = {};
  KOLOM.forEach(function (n) {
    k[n] = kepala.indexOf(n);
    if (k[n] < 0) throw new Error('Kolom "' + n + '" tidak ada di baris 1 sheet Materi.');
  });

  const baris = {};                              // "10|smp" -> nomor baris (1-based)
  for (let r = 1; r < data.length; r++) {
    const no = String(data[r][k["No Pertemuan"]]).trim();
    if (no) baris[no + "|" + String(data[r][k["Target"]]).trim().toLowerCase()] = r + 1;
  }

  let baru = 0, dilengkapi = 0;
  const belumDibagikan = [];
  const tanpaSlide = [];
  Object.keys(temuan).sort(urutan_).forEach(function (kunci) {
    const t = temuan[kunci];
    if (!t.slides.length && !t.forms.length) return;
    const no = kunci.split("|")[0], target = kunci.split("|")[1];
    const slide = t.slides[0], form = t.forms[0];
    const linkSlide = slide ? slide.getUrl() : "";
    const linkForm = form ? linkFormSiswa_(form) : "";
    const terbagi = slide ? bolehDibuka_(slide) : false;
    if (slide && !terbagi) belumDibagikan.push("P" + no + " " + target + ": " + slide.getName());
    if (!slide) tanpaSlide.push("P" + no + " " + target + " -> file lain: " + (t.lain.join(", ") || "(tidak ada)"));

    const r = baris[no + "|" + target.toLowerCase()];
    if (r) {                                     // baris sudah ada: hanya isi sel yang kosong
      dilengkapi += isiKalauKosong_(sheet, r, k["Link Drive"] + 1, linkSlide);
      dilengkapi += isiKalauKosong_(sheet, r, k["Link Post-Test"] + 1, linkForm);
      // baris buatan script sebelumnya (judul cadangan / Draft) diperbarui kalau slide sudah ada
      const selJudul = sheet.getRange(r, k["Judul Materi"] + 1);
      if (slide && String(selJudul.getValue()).trim() === "Pertemuan " + no) {
        selJudul.setValue(judul_(slide.getName()));
        dilengkapi++;
      }
      const selStatus = sheet.getRange(r, k["Status"] + 1);
      if (slide && terbagi && String(selStatus.getValue()).trim().toLowerCase() === "draft") {
        selStatus.setValue("Published");
        dilengkapi++;
      }
      return;
    }
    const isi = new Array(kepala.length).fill("");
    isi[k["No Pertemuan"]] = Number(no);
    isi[k["Judul Materi"]] = slide ? judul_(slide.getName()) : "Pertemuan " + no;
    isi[k["Link Drive"]] = linkSlide;
    isi[k["Link Post-Test"]] = linkForm;
    isi[k["Target"]] = target;
    isi[k["Status"]] = slide && terbagi ? "Published" : "Draft";
    sheet.appendRow(isi);
    baru++;
  });

  Logger.log("%s baris baru, %s sel dilengkapi.", baru, dilengkapi);
  if (tanpaSlide.length) {
    Logger.log("Pertemuan tanpa Google Slides / PowerPoint (hanya form). Isi folder lainnya:\n  " + tanpaSlide.join("\n  "));
  }
  if (belumDibagikan.length) {
    Logger.log("Slide berikut BELUM bisa dibuka siswa (Share -> General access -> Anyone with the link -> Viewer),");
    Logger.log("barisnya diberi Status Draft. Setelah di-share, ubah Status jadi Published:\n  " + belumDibagikan.join("\n  "));
  }
}

// ---------------------------------------------------------------- bantu

function kumpulkan_(induk) {
  const hasil = {};
  const sub = induk.getFolders();
  while (sub.hasNext()) {
    const f = sub.next();
    const m = f.getName().match(/^P\s*(\d{1,2})\b/i);
    if (m) telusuri_(f, String(Number(m[1])), "", hasil);
  }
  return hasil;
}

const PPTX = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.ms-powerpoint"];

function jenisFile_(mime) {
  if (mime === MimeType.GOOGLE_SLIDES || PPTX.indexOf(mime) >= 0) return "slides";
  if (mime === MimeType.GOOGLE_FORMS) return "forms";
  return "";
}

function telusuri_(folder, no, jenjangInduk, hasil) {
  const jenjang = jenjangDari_(folder.getName()) || jenjangInduk;
  const it = folder.getFiles();
  while (it.hasNext()) {
    let file = it.next();
    let mime = file.getMimeType();
    if (mime === MimeType.SHORTCUT) {            // shortcut ke slide/form di folder lain
      mime = file.getTargetMimeType();
      if (jenisFile_(mime)) {
        try { file = DriveApp.getFileById(file.getTargetId()); } catch (e) { mime = "shortcut tanpa akses"; }
      }
    }
    const j = jenjang || jenjangDari_(file.getName()) || "Keduanya";
    const kunci = no + "|" + j;
    hasil[kunci] = hasil[kunci] || { slides: [], forms: [], lain: [] };
    const jenis = jenisFile_(mime);
    if (jenis) hasil[kunci][jenis].push(file);
    else hasil[kunci].lain.push(file.getName() + " [" + mime + "]");
  }
  const sub = folder.getFolders();
  while (sub.hasNext()) telusuri_(sub.next(), no, jenjang, hasil);
}

function jenjangDari_(nama) {
  const m = String(nama).toUpperCase().match(/\b(SMP|SMA)\b/);
  return m ? m[1] : "";
}

function cariSheetMateri_() {
  const idP1 = ambilId_(LINK_SLIDE_P1);
  const it = DriveApp.searchFiles('mimeType = "application/vnd.google-apps.spreadsheet" and fullText contains "Judul Materi" and trashed = false');
  const calon = [];
  while (it.hasNext()) {
    const f = it.next();
    const ss = SpreadsheetApp.openById(f.getId());
    const sh = ss.getSheets()[0];
    if (sh.getLastRow() < 1) continue;
    const kepala = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
    if (kepala.indexOf("Judul Materi") < 0 || kepala.indexOf("Link Drive") < 0) continue;
    const isi = JSON.stringify(sh.getDataRange().getValues());
    calon.push({ sheet: sh, adaP1: isi.indexOf(idP1) >= 0, nama: f.getName() });
  }
  const cocok = calon.filter(function (c) { return c.adaP1; });
  if (cocok.length === 1) return cocok[0].sheet;
  if (!calon.length) throw new Error("Sheet Materi tidak ditemukan di Drive akun ini. Jalankan dengan akun yang membuat sheet itu.");
  throw new Error("Sheet Materi tidak bisa dipastikan (" + cocok.length + " cocok dengan slide P1). Calon: " +
                  calon.map(function (c) { return c.nama; }).join(", "));
}

function linkFormSiswa_(file) {
  try {
    return FormApp.openById(file.getId()).getPublishedUrl();
  } catch (e) {
    return file.getUrl();
  }
}

function bolehDibuka_(file) {
  const a = file.getSharingAccess();
  return a === DriveApp.Access.ANYONE_WITH_LINK || a === DriveApp.Access.ANYONE;
}

function isiKalauKosong_(sheet, r, c, nilai) {
  if (!nilai) return 0;
  const sel = sheet.getRange(r, c);
  if (String(sel.getValue()).trim()) return 0;
  sel.setValue(nilai);
  return 1;
}

function judul_(nama) {
  // "P10 SMP — Pasang Arduino IDE" -> "Pasang Arduino IDE"
  return String(nama).replace(/^\s*P\s*\d+\s*(SMP|SMA)?\s*[—–:-]\s*/i, "").trim() || nama;
}

function ambilId_(link) {
  const m = String(link).match(/\/(?:folders|d)\/([\w-]{10,})/) || String(link).match(/^([\w-]{10,})$/);
  if (!m || /TEMPEL/.test(link)) throw new Error("Isi FOLDER_MATERI dan LINK_SLIDE_P1 di bagian atas script dulu.");
  return m[1];
}

function urutan_(a, b) {
  return Number(a.split("|")[0]) - Number(b.split("|")[0]) || a.localeCompare(b);
}
