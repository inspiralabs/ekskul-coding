// ============================================================
// SCRIPT P13 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 13 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P13) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz";  // link atau ID folder Drive P13
const JENJANG = 'SMA';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 13 - SMA",
  "soal": [
    {
      "q": "1. Foto sudah ada di folder kelompok, tapi tidak tampil di kartu Profil Kelompok. Nama filenya Foto Kelompok.JPG. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Fotonya terlalu kecil",
        "Nama file tidak persis foto-kelompok.jpg yang dipanggil index.html",
        "api.js belum diubah",
        "ESP32 belum terhubung WiFi"
      ],
      "kunci": 1
    },
    {
      "q": "2. File di folder kelompok yang TIDAK boleh diubah sebelum diserahkan ke tutor adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "style.css",
        "foto-kelompok.jpg",
        "Teks nama anggota di index.html"
      ],
      "kunci": 0
    },
    {
      "q": "3. Kelompokmu ingin menambah grafik memakai library JavaScript. Cara yang sesuai aturan serah terima adalah…",
      "kode": "",
      "opsi": [
        "npm install lalu serahkan folder node_modules",
        "Memanggil library lewat CDN: <script src=\"https://...\">",
        "Menyalin library dari C:\\Users\\...",
        "Mengubah api.js"
      ],
      "kunci": 1
    },
    {
      "q": "4. Kenapa sensor DHT22 sebaiknya tidak ditaruh menempel di sebelah ESP32 di dalam kotak tertutup?",
      "kode": "",
      "opsi": [
        "Sinyal WiFi terganggu",
        "Panas dari ESP32 membuat suhu terbaca lebih tinggi dari suhu ruangan",
        "Relay jadi active-HIGH",
        "Kipas berputar terbalik"
      ],
      "kunci": 1
    },
    {
      "q": "5. Seorang pengunjung membuka https://sma-04.inspiralabs.id lalu menekan tombol kipas. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Kipas langsung berubah tanpa syarat",
        "Website rusak",
        "Website meminta PIN kelompok; tanpa PIN yang benar, pengunjung hanya bisa melihat",
        "Data suhu terhapus"
      ],
      "kunci": 2
    }
  ]
};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P13 dulu.');
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
