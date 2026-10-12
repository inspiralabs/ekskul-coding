// ============================================================
// SCRIPT P9 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 9 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P9) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/15uP4gF23AchbNzAjkRrJekrTt18mdH4W";  // link atau ID folder Drive P9
const JENJANG = 'SMP';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 9 - SMP",
  "soal": [
    {
      "q": "1. Di alat kita, ESP32 berperan sebagai…",
      "kode": "",
      "opsi": [
        "Baterai",
        "Otak yang mengatur alat",
        "Kabel penghubung",
        "Layar"
      ],
      "kunci": 1
    },
    {
      "q": "2. Kaki LED yang PANJANG adalah…",
      "kode": "",
      "opsi": [
        "Kaki negatif (−)",
        "Kaki GND",
        "Kaki positif (+)",
        "Tidak ada bedanya"
      ],
      "kunci": 2
    },
    {
      "q": "3. Fungsi resistor pada rangkaian LED adalah…",
      "kode": "",
      "opsi": [
        "Membuat LED berkedip",
        "Membatasi arus supaya LED tidak rusak",
        "Menambah terang LED tanpa batas",
        "Menyimpan listrik"
      ],
      "kunci": 1
    },
    {
      "q": "4. Perhatikan rangkaian: 3V3 → resistor → kaki PENDEK LED → kaki PANJANG LED → GND. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "LED menyala terang",
        "LED meledak",
        "LED tidak menyala karena terbalik",
        "ESP32 langsung mati"
      ],
      "kunci": 2
    },
    {
      "q": "5. Di kode proyek akhir ada tulisan #define DHT_PIN 4. Angka 4 artinya…",
      "kode": "",
      "opsi": [
        "Ada 4 sensor",
        "Suhu dibaca 4 kali",
        "Sensor dicolok ke pin nomor 4 di ESP32",
        "Kirim data tiap 4 menit"
      ],
      "kunci": 2
    }
  ]
};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P9 dulu.');
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
