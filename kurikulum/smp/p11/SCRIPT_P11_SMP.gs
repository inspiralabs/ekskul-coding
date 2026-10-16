// ============================================================
// SCRIPT P11 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 11 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P11) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd";  // link atau ID folder Drive P11
const JENJANG = 'SMP';

const KODE = {
  "P11_1_BacaDHT22.cpp": "// ============================================================\n// P11 SMP — Program Cadangan: Cek Sensor TANPA WiFi\n// Dipakai saat troubleshooting: kalau firmware proyek macet di WiFi, upload ini\n// untuk memastikan kabel sensor benar. Kabel DHT22: + ke 3V3, out ke D4, - ke GND.\n// platformio.ini harus punya: lib_deps = adafruit/DHT sensor library\n// ============================================================\n#include <Arduino.h>\n#include <DHT.h>\n\n#define DHT_PIN 4               // kaki \"out\" DHT22 di pin D4\n\nDHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();                  // nyalakan sensor\n  Serial.println(\"Sensor siap!\");\n}\n\nvoid loop() {\n  delay(2000);                  // DHT22 butuh jeda minimal 2 detik\n\n  float suhu = dht.readTemperature();   // baca suhu (°C)\n  float lembap = dht.readHumidity();    // baca kelembapan (%)\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca sensor! Cek kabel.\");\n    return;                     // batalkan putaran ini, ulang dari awal loop\n  }\n\n  Serial.print(\"Suhu: \");\n  Serial.print(suhu);\n  Serial.print(\" C | Kelembapan: \");\n  Serial.print(lembap);\n  Serial.println(\" %\");\n}\n",
  "P11_2_TesWiFi.cpp": "// ============================================================\n// P11 SMP — Program Cadangan: Tes WiFi Saja\n// Salin ke src/main.cpp. Isi nama & password WiFi (harus 2.4 GHz).\n// Dipakai saat troubleshooting: kalau titik-titik tidak berhenti di firmware proyek,\n// tes WiFi pakai program kecil ini dulu. Setelah tersambung, upload lagi firmware proyek.\n// ============================================================\n#include <Arduino.h>\n#include <WiFi.h>\n\nconst char* WIFI_SSID     = \"ISI_DI_SINI\";   // nama WiFi\nconst char* WIFI_PASSWORD = \"ISI_DI_SINI\";   // password WiFi\n\nvoid setup() {\n  Serial.begin(115200);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);      // mulai menyambung\n  Serial.print(\"Menghubungkan ke WiFi\");\n  while (WiFi.status() != WL_CONNECTED) {    // SELAMA belum tersambung...\n    delay(500);\n    Serial.print(\".\");                       // ...tulis titik\n  }\n  Serial.println();\n  Serial.print(\"Terhubung! IP ESP32 ini: \");\n  Serial.println(WiFi.localIP());            // alamat ESP32 di jaringan\n}\n\nvoid loop() {\n}\n",
  "platformio.ini": "; Proyek starter ESP32 untuk semua pertemuan P10–P13.\n; Cara pakai: PIO Home -> Open Project -> pilih folder ini,\n; lalu salin isi file P{n}_x_....cpp / C{n}_....cpp ke src/main.cpp.\n[env:esp32dev]\nplatform = https://github.com/pioarduino/platform-espressif32/releases/download/stable/platform-espressif32.zip\nboard = esp32dev            ; ganti kalau board kelompokmu berbeda\nframework = arduino\nmonitor_speed = 115200      ; harus sama dengan Serial.begin(115200)\nlib_deps = adafruit/DHT sensor library\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (VS Code + PlatformIO)\n\nFile .cpp (kode ESP32):\n1. VS Code -> PlatformIO -> New Project (board: Espressif ESP32 Dev Module, framework: Arduino).\n2. Ganti isi platformio.ini proyekmu dengan file platformio.ini di folder ini.\n3. Salin isi file .cpp yang mau dipakai ke src/main.cpp, lalu Build & Upload.\n\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n\nFolder proyek-akhir (kalau ada): buka folder itu langsung lewat PlatformIO (Open Project).\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 11 - SMP",
  "soal": [
    {
      "q": "1. Di firmware proyek akhir, baris yang perlu diisi siswa hari ini adalah…",
      "kode": "",
      "opsi": [
        "SERVER_URL dan API_KEY",
        "WIFI_SSID dan WIFI_PASSWORD",
        "Semua baris di bawah tulisan JANGAN UBAH",
        "DEVICE_ID diganti nama sendiri"
      ],
      "kunci": 1
    },
    {
      "q": "2. Serial Monitor menampilkan Menghubungkan ke WiFi......... dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Kabel sensor DHT22 longgar",
        "Nama atau password WiFi salah",
        "LED terbalik",
        "Suhu ruangan terlalu panas"
      ],
      "kunci": 1
    },
    {
      "q": "3. Serial Monitor menampilkan Gagal baca sensor DHT22, coba lagi 4 detik lagi.... Yang paling tepat dicek pertama adalah…",
      "kode": "",
      "opsi": [
        "Password WiFi",
        "Kabel DHT22: out di D4, kabel tidak longgar, + / − tidak tertukar",
        "Warna dashboard",
        "Mengganti SERVER_URL"
      ],
      "kunci": 1
    },
    {
      "q": "4. Kabel out DHT22 dipindah ke D27. Agar sensor terbaca lagi, yang harus diubah adalah…",
      "kode": "",
      "opsi": [
        "#define DHT_PIN 4 menjadi #define DHT_PIN 27",
        "DEVICE_ID",
        "API_KEY",
        "Tidak perlu mengubah apa pun"
      ],
      "kunci": 0
    },
    {
      "q": "5. Multimeter mode bunyi ditempel ke dua ujung kabel jumper dan TIDAK berbunyi. Artinya…",
      "kode": "",
      "opsi": [
        "Kabel itu bagus",
        "Kabel itu putus di dalam, harus diganti",
        "ESP32 rusak",
        "Sensor sedang membaca suhu"
      ],
      "kunci": 1
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
