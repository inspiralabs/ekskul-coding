// ============================================================
// SCRIPT P13 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 13 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P13) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz";  // link atau ID folder Drive P13
const JENJANG = 'SMP';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 13 - SMP",
  "soal": [
    {
      "q": "1. Di dalam casing, sensor DHT22 sebaiknya diletakkan…",
      "kode": "",
      "opsi": [
        "Menempel di atas ESP32 supaya hemat tempat",
        "Di dekat lubang kotak, agak jauh dari ESP32",
        "Dibungkus lakban supaya aman",
        "Di bawah breadboard"
      ],
      "kunci": 1
    },
    {
      "q": "2. Benda yang TIDAK boleh menempel langsung di bawah ESP32 adalah…",
      "kode": "",
      "opsi": [
        "Double tape",
        "Kardus",
        "Aluminium foil atau logam",
        "Kotak plastik"
      ],
      "kunci": 2
    },
    {
      "q": "3. Setelah alat dimasukkan ke casing, dashboard berhenti update. Langkah pertama yang tepat adalah…",
      "kode": "",
      "opsi": [
        "Menulis ulang firmware",
        "Membuka kotak, colok ke laptop, dan membaca Serial Monitor",
        "Mengganti warna dashboard",
        "Mengganti Device ID"
      ],
      "kunci": 1
    },
    {
      "q": "4. Urutan perjalanan data yang benar adalah…",
      "kode": "",
      "opsi": [
        "Dashboard → Server → ESP32 → DHT22",
        "DHT22 → ESP32 → WiFi/Internet → Server → Dashboard",
        "ESP32 → DHT22 → Dashboard → Server",
        "Server → DHT22 → ESP32 → Dashboard"
      ],
      "kunci": 1
    },
    {
      "q": "5. Folder website yang diserahkan ke tutor sudah BENAR jika…",
      "kode": "",
      "opsi": [
        "Zip bernama smp-07.zip, berisi index.html, ukurannya tidak lebih dari 5 MB",
        "Halaman utama bernama rumah.html dan foto ada di Downloads",
        "Ukurannya 300 MB karena folder firmware/.pio ikut",
        "api.js sudah diganti dengan Device ID kelompok lain"
      ],
      "kunci": 0
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
