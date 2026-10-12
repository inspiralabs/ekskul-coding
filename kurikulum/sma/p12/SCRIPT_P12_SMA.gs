// ============================================================
// SCRIPT P12 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 12 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P12) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4";  // link atau ID folder Drive P12
const JENJANG = 'SMA';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 12 - SMA",
  "soal": [
    {
      "q": "1. Kamu klik \"kipas ON\" di dashboard. Bagaimana perintah itu sampai ke ESP32?",
      "kode": "",
      "opsi": [
        "Server langsung mengirim perintah ke IP ESP32 di WiFi sekolah",
        "ESP32 melapor data tiap ±4 detik dan membaca status kipas dari balasan server",
        "Dashboard mengirim sinyal Bluetooth ke ESP32",
        "Relay membaca website sendiri"
      ],
      "kunci": 1
    },
    {
      "q": "2. Jeda dari klik tombol sampai kipas berputar paling lama sekitar…",
      "kode": "",
      "opsi": [
        "0,01 detik",
        "±4 detik (ditambah waktu internet)",
        "1 menit",
        "Sampai ESP32 di-restart"
      ],
      "kunci": 1
    },
    {
      "q": "3. Mode Otomatis aktif, slider \"Nyala otomatis di atas 29°C\", suhu terbaca 31°C. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Kipas menyala",
        "Kipas mati",
        "Dashboard meminta upload ulang",
        "Relay rusak"
      ],
      "kunci": 0
    },
    {
      "q": "4. Kipas terpasang di terminal NO. ESP32 tiba-tiba dicabut saat kipas menyala. Apa yang terjadi pada kipas?",
      "kode": "",
      "opsi": [
        "Tetap menyala selamanya",
        "Menyala lebih kencang",
        "Mati, karena relay tidak aktif dan COM–NO terputus",
        "Berputar terbalik"
      ],
      "kunci": 2
    },
    {
      "q": "5. Kipas di NO. Dashboard menunjukkan kipas MATI, tetapi kipas sungguhan BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…",
      "kode": "",
      "opsi": [
        "Mengganti API_KEY",
        "Mengganti #define RELAY_ACTIVE_LOW true menjadi false lalu upload ulang",
        "Mengganti DEVICE_ID",
        "Menghapus api.js"
      ],
      "kunci": 1
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
