// ============================================================
// SCRIPT P12 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 12 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P12) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4";  // link atau ID folder Drive P12
const JENJANG = 'SMP';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 12 - SMP",
  "soal": [
    {
      "q": "1. Firmware sudah ter-upload di P11. Agar alat tetap mengirim data tanpa laptop, yang dilakukan adalah…",
      "kode": "",
      "opsi": [
        "Menulis ulang firmware",
        "Mencolokkan ESP32 ke power bank (program tetap tersimpan di ESP32)",
        "Menghapus api.js",
        "Mencabut sensor DHT22"
      ],
      "kunci": 1
    },
    {
      "q": "2. Foto kelompok agar tampil di dashboard harus…",
      "kode": "",
      "opsi": [
        "Bernama foto-kelompok.jpg dan disimpan di dalam folder website",
        "Bernama bebas dan disimpan di Downloads",
        "Berukuran minimal 10 MB",
        "Ditempel di api.js"
      ],
      "kunci": 0
    },
    {
      "q": "3. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "Bagian <script> di bawah index.html",
        "Kode warna di :root paling atas style.css",
        "DEVICE_ID di firmware"
      ],
      "kunci": 2
    },
    {
      "q": "4. Manakah yang MELANGGAR aturan serah folder?",
      "kode": "",
      "opsi": [
        "Halaman utama bernama index.html",
        "Memakai library lewat link CDN",
        "Ukuran folder 3 MB",
        "Memasang library dengan npm install dan mengubah api.js"
      ],
      "kunci": 3
    },
    {
      "q": "5. Website kelompok dengan Device ID smp-07 akan bisa dibuka di alamat…",
      "kode": "",
      "opsi": [
        "https://smp-07.inspiralabs.id",
        "https://ekskul.inspiralabs.id/kelompok7",
        "http://192.168.1.23",
        "https://smp-07.com"
      ],
      "kunci": 0
    }
  ]
};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P12 dulu.');
  const folderJenjang = ambilAtauBuatFolder(DriveApp.getFolderById(id), JENJANG);

  const namaFile = Object.keys(KODE);
  if (namaFile.length) {
    const folderKode = ambilAtauBuatFolder(folderJenjang, 'Kode');
    namaFile.forEach(function (path) { tulisFile(folderKode, path, KODE[path]); });
    Logger.log('KODE       %s file -> %s', namaFile.length, folderKode.getUrl());
  }

  buatPostTest(folderJenjang);
  Logger.log('FOLDER     %s', folderJenjang.getUrl());
}

function tulisFile(folder, path, isi) {
  const bagian = path.split('/');
  const nama = bagian.pop();
  bagian.forEach(function (b) { folder = ambilAtauBuatFolder(folder, b); });
  const ada = folder.getFilesByName(nama);
  if (ada.hasNext()) ada.next().setContent(isi);
  else folder.createFile(nama, isi, MimeType.PLAIN_TEXT);
}

function buatPostTest(folder) {
  const ada = folder.getFilesByName(POST_TEST.judul);
  if (ada.hasNext()) {
    Logger.log('POST TEST  sudah ada -> %s', FormApp.openById(ada.next().getId()).getPublishedUrl());
    return;
  }
  const form = FormApp.create(POST_TEST.judul);
  form.setIsQuiz(true).setDescription('5 soal pilihan ganda. Kerjakan sendiri ya!');
  form.addTextItem().setTitle('Nama lengkap').setRequired(true);
  form.addTextItem().setTitle('Kelas').setRequired(true);
  form.addTextItem().setTitle('Kelompok').setRequired(true);
  POST_TEST.soal.forEach(function (s) {
    const item = form.addMultipleChoiceItem();
    item.setTitle(s.q).setPoints(1).setRequired(true)
        .setChoices(s.opsi.map(function (o, j) { return item.createChoice(o, j === s.kunci); }));
    if (s.kode) item.setHelpText(s.kode);
  });
  const sheet = SpreadsheetApp.create(POST_TEST.judul + ' (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  DriveApp.getFileById(form.getId()).moveTo(folder);
  DriveApp.getFileById(sheet.getId()).moveTo(folder);
  Logger.log('POST TEST  dibuat -> %s', form.getPublishedUrl());
}

function ambilAtauBuatFolder(induk, nama) {
  const it = induk.getFoldersByName(nama);
  return it.hasNext() ? it.next() : induk.createFolder(nama);
}
