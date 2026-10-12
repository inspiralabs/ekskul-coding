// ============================================================
// SCRIPT P11 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 11 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P11) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd";  // link atau ID folder Drive P11
const JENJANG = 'SMA';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 11 - SMA",
  "soal": [
    {
      "q": "1. Di firmware proyek dari tutor, baris yang WAJIB kalian isi sendiri adalah…",
      "kode": "",
      "opsi": [
        "SERVER_URL dan API_KEY",
        "DEVICE_ID",
        "WIFI_SSID dan WIFI_PASSWORD",
        "Isi fungsi loop()"
      ],
      "kunci": 2
    },
    {
      "q": "2. Serial Monitor terus menampilkan Menghubungkan ke WiFi......... tanpa berhenti. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Kabel DHT22 longgar",
        "Nama/password WiFi salah atau WiFi-nya 5 GHz",
        "Kipas terpasang di NC",
        "API key salah"
      ],
      "kunci": 1
    },
    {
      "q": "3. Serial menampilkan Kirim data -> kode respons: 200. Artinya…",
      "kode": "",
      "opsi": [
        "Suhu ruangan 200 derajat",
        "Server menerima data, dashboard seharusnya ikut berubah",
        "WiFi terputus",
        "Sensor gagal dibaca"
      ],
      "kunci": 1
    },
    {
      "q": "4. WiFi sudah Terhubung!, tapi Serial terus menulis Gagal baca sensor DHT22. Yang paling perlu dicek adalah…",
      "kode": "",
      "opsi": [
        "Password WiFi",
        "Kabel DHT22: out ke D4, + ke 3V3, − ke GND",
        "File api.js",
        "Kabel kipas di terminal NO"
      ],
      "kunci": 1
    },
    {
      "q": "5. Setelah firmware ter-upload, ESP32 dicabut dari laptop lalu dicolok ke power bank. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Program hilang, harus upload ulang",
        "ESP32 hanya bisa jalan kalau tersambung laptop",
        "Program tetap tersimpan: ESP32 menyala, masuk WiFi, dan kirim data lagi",
        "Data hanya tampil di Serial Monitor"
      ],
      "kunci": 2
    }
  ]
};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P11 dulu.');
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
