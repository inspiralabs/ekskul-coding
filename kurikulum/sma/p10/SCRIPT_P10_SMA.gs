// ============================================================
// SCRIPT P10 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 10 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P10) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1pOjrg_pXWrebh4WlrZvBKlOHLp0ZSAbp";  // link atau ID folder Drive P10
const JENJANG = 'SMA';

const KODE = {
  "C1_P10_Easy_PindahPinRelay.cpp": "// ============================================================\n// CHALLENGE EASY P10 SMA — Pindah Pin Relay (PROGRAM JADI)\n// 1. CABUT USB. Pindahkan kabel biru relay IN dari D18 ke D19.\n// 2. Ubah SATU angka di bawah: RELAY_PIN 18 -> 19.\n// 3. Upload, buka Serial Monitor. Relay harus klik lagi tiap 2 detik.\n// 4. Kembalikan kabel ke D18 dan angka ke 18 setelah selesai.\n// Pin aman lain: 13, 16, 17, 19, 21, 22, 23, 25, 26, 27, 32, 33.\n// JANGAN pakai 0, 2, 5, 12, 15 (strapping) atau 34-39 (input-only).\n// ============================================================\n#include <Arduino.h>\n\n#define RELAY_PIN 18     // <-- UBAH ANGKA INI SAJA\n#define RELAY_ON  LOW\n#define RELAY_OFF HIGH\n\nvoid setup() {\n  Serial.begin(115200);\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  pinMode(RELAY_PIN, OUTPUT);\n  Serial.println();\n  Serial.printf(\"Relay sekarang dikendalikan dari GPIO %d\\n\", RELAY_PIN);\n}\n\nvoid loop() {\n  digitalWrite(RELAY_PIN, RELAY_ON);\n  Serial.printf(\"GPIO %d = LOW  -> relay AKTIF, kipas berputar\\n\", RELAY_PIN);\n  delay(2000);\n\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  Serial.printf(\"GPIO %d = HIGH -> relay MATI, kipas berhenti\\n\", RELAY_PIN);\n  delay(2000);\n}\n",
  "C2_P10_Medium_TermostatTangan.cpp": "// ============================================================\n// CHALLENGE MEDIUM P10 SMA — Termostat Tangan (PROGRAM JADI)\n// Kipas menyala sendiri kalau suhu > AMBANG, mati lagi kalau suhu\n// turun 0,5 C di bawah AMBANG.\n// 1. Upload apa adanya, lihat suhu ruangan di Serial Monitor.\n// 2. Ubah SATU angka: AMBANG = suhu ruangan sekarang + 1 (misal 29.5).\n// 3. Upload lagi. Genggam sensor DHT22 -> kipas harus menyala sendiri.\n//    Lepas genggaman, tunggu -> kipas mati sendiri.\n// ============================================================\n#include <Arduino.h>\n#include <DHT.h>\n\n#define AMBANG    30.0   // <-- UBAH ANGKA INI SAJA (derajat Celsius)\n\n#define DHT_PIN   4\n#define RELAY_PIN 18\n#define RELAY_ON  LOW\n#define RELAY_OFF HIGH\n\nDHT dht(DHT_PIN, DHT22);\nbool kipasNyala = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  pinMode(RELAY_PIN, OUTPUT);\n  dht.begin();\n  Serial.println();\n  Serial.printf(\"Termostat siap. Kipas ON di atas %.1f C\\n\", AMBANG);\n}\n\nvoid loop() {\n  delay(2000);\n\n  float suhu = dht.readTemperature();\n  if (isnan(suhu)) {\n    Serial.println(\"Gagal baca DHT22 -> cek kabel out ke GPIO 4, + ke 3V3, - ke GND\");\n    return;\n  }\n\n  if (suhu > AMBANG) kipasNyala = true;\n  else if (suhu < AMBANG - 0.5) kipasNyala = false;   // jeda 0,5 C supaya relay tidak cetak-cetek\n\n  digitalWrite(RELAY_PIN, kipasNyala ? RELAY_ON : RELAY_OFF);\n  Serial.printf(\"Suhu: %.1f C | ambang %.1f C -> KIPAS %s\\n\", suhu, AMBANG, kipasNyala ? \"ON\" : \"OFF\");\n}\n",
  "P10_1_TesRelay.cpp": "// ============================================================\n// P10 SMA — Program Tes 1: Relay Berdetak (PROGRAM JADI, tidak perlu diubah)\n// Rakitan: relay IN -> GPIO 18, VCC -> VIN, GND -> GND.\n//          VIN -> COM, NO -> kipas (+), kipas (-) -> GND.\n// Yang harus terlihat: tiap 2 detik relay \"klik\", LED relay menyala,\n// kipas berputar 2 detik lalu berhenti 2 detik.\n// ============================================================\n#include <Arduino.h>\n\n#define RELAY_PIN 18     // ubah HANYA kalau kabel IN kamu pasang di pin lain\n#define RELAY_ON  LOW    // modul relay active-LOW: IN = LOW -> relay aktif\n#define RELAY_OFF HIGH\n\nvoid setup() {\n  Serial.begin(115200);\n  digitalWrite(RELAY_PIN, RELAY_OFF);  // set OFF dulu supaya relay tidak klik saat boot\n  pinMode(RELAY_PIN, OUTPUT);\n  Serial.println();\n  Serial.printf(\"Tes relay di GPIO %d dimulai\\n\", RELAY_PIN);\n}\n\nvoid loop() {\n  digitalWrite(RELAY_PIN, RELAY_ON);\n  Serial.println(\"Relay AKTIF (IN = LOW, sekitar 0 V)    -> kipas harus BERPUTAR\");\n  delay(2000);\n\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  Serial.println(\"Relay MATI  (IN = HIGH, sekitar 3,3 V) -> kipas harus BERHENTI\");\n  delay(2000);\n}\n",
  "P10_2_TesDHT22.cpp": "// ============================================================\n// P10 SMA — Program Tes 2: Baca DHT22 (PROGRAM JADI, tidak perlu diubah)\n// Rakitan: DHT22 \"+\" -> 3V3, \"out\" -> GPIO 4, \"-\" -> GND.\n// Yang harus terlihat: tiap 2 detik muncul suhu & kelembapan di Serial Monitor.\n// Genggam / tiup sensor: angkanya harus berubah.\n// ============================================================\n#include <Arduino.h>\n#include <DHT.h>\n\n#define DHT_PIN 4        // ubah HANYA kalau kabel \"out\" kamu pasang di pin lain\n\nDHT dht(DHT_PIN, DHT22);\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  Serial.println();\n  Serial.printf(\"Tes DHT22 di GPIO %d dimulai\\n\", DHT_PIN);\n}\n\nvoid loop() {\n  delay(2000);  // DHT22: maksimal 1 bacaan tiap 2 detik\n\n  float suhu = dht.readTemperature();\n  float lembap = dht.readHumidity();\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca DHT22 -> cek: out ke GPIO 4? + ke 3V3? - ke GND? kabel longgar?\");\n    return;\n  }\n\n  Serial.printf(\"Suhu: %.1f C | Lembap: %.1f %%\\n\", suhu, lembap);\n}\n",
  "platformio.ini": "; Proyek starter ESP32 untuk semua pertemuan P10–P13.\n; Cara pakai: PIO Home -> Open Project -> pilih folder ini,\n; lalu salin isi file P{n}_x_....cpp / C{n}_....cpp ke src/main.cpp.\n[env:esp32dev]\nplatform = https://github.com/pioarduino/platform-espressif32/releases/download/stable/platform-espressif32.zip\nboard = esp32dev            ; ganti kalau board kelompokmu berbeda\nframework = arduino\nmonitor_speed = 115200      ; harus sama dengan Serial.begin(115200)\nlib_deps = adafruit/DHT sensor library\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (VS Code + PlatformIO)\n\nFile .cpp (kode ESP32):\n1. VS Code -> PlatformIO -> New Project (board: Espressif ESP32 Dev Module, framework: Arduino).\n2. Ganti isi platformio.ini proyekmu dengan file platformio.ini di folder ini.\n3. Salin isi file .cpp yang mau dipakai ke src/main.cpp, lalu Build & Upload.\n\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n\nFolder proyek-akhir (kalau ada): buka folder itu langsung lewat PlatformIO (Open Project).\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 10 - SMA",
  "soal": [
    {
      "q": "1. Sebelum memindah kabel di rakitan ESP32, langkah pertama yang benar adalah…",
      "kode": "",
      "opsi": [
        "Menekan tombol BOOT",
        "Mencabut kabel USB",
        "Membuka Serial Monitor",
        "Mengencangkan sekrup terminal relay"
      ],
      "kunci": 1
    },
    {
      "q": "2. Kenapa kaki \"+\" modul DHT22 disambungkan ke 3V3, bukan ke VIN (5V)?",
      "kode": "",
      "opsi": [
        "Supaya sinyal data sensor juga 3,3V, sesuai batas tegangan GPIO ESP32",
        "Karena pin 3V3 memberi arus paling besar",
        "Supaya relay ikut aktif",
        "Karena VIN hanya dipakai untuk WiFi"
      ],
      "kunci": 0
    },
    {
      "q": "3. Serial Monitor menulis \"Relay AKTIF\", tapi relay tidak klik dan LED relay tidak menyala. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Sensor DHT22 terbalik",
        "Kipas rusak",
        "Kabel IN atau VCC/GND relay tidak tersambung dengan benar",
        "Baud rate Serial Monitor salah"
      ],
      "kunci": 2
    },
    {
      "q": "4. Relay klik dan LED relay menyala, tetapi kipas tidak berputar. Bagian yang paling perlu dicek adalah…",
      "kode": "",
      "opsi": [
        "Kabel DHT22",
        "Sisi beban: kabel COM, NO, dan kabel kipas ke GND",
        "Kabel USB laptop",
        "Pengaturan WiFi"
      ],
      "kunci": 1
    },
    {
      "q": "5. Modul relay active-LOW sedang AKTIF. Jika pin IN diukur dengan multimeter (terhadap GND), hasilnya sekitar…",
      "kode": "",
      "opsi": [
        "0 V",
        "3,3 V",
        "5 V",
        "12 V"
      ],
      "kunci": 0
    }
  ]
};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P10 dulu.');
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
