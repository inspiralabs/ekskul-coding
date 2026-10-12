// ============================================================
// SCRIPT P10 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 10 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P10) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "TEMPEL_LINK_FOLDER_P10_DI_SINI";  // link atau ID folder Drive P10
const JENJANG = 'SMP';

const KODE = {
  "P10_1_Blink.cpp": "// ============================================================\n// P10 SMP — Program Jadi 1: Blink LED (tes upload)\n// TIDAK PERLU MENULIS KODE. Salin seluruh isi file ini ke src/main.cpp, lalu Upload.\n// Rakitan: D2 -> resistor 220 ohm -> kaki PANJANG LED, kaki pendek LED -> GND.\n// Kalau berhasil: LED di breadboard DAN lampu biru di board ESP32 berkedip tiap 1 detik.\n// ============================================================\n#include <Arduino.h>\n\n#define LED_PIN 2   // LED dicolok ke pin D2 (sama dengan lampu biru bawaan board)\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);     // pin 2 = keluaran\n  Serial.begin(115200);         // buka \"jalur ngobrol\" ke laptop\n  Serial.println(\"ESP32 siap! Upload berhasil.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);  // nyala\n  Serial.println(\"LED nyala\");\n  delay(1000);                  // tunggu 1 detik\n\n  digitalWrite(LED_PIN, LOW);   // mati\n  Serial.println(\"LED mati\");\n  delay(1000);\n}\n",
  "P10_2_CekDHT22.cpp": "// ============================================================\n// P10 SMP — Program Jadi 2: Cek Rakitan DHT22\n// TIDAK PERLU MENULIS KODE. Salin ke src/main.cpp, Upload, buka Serial Monitor.\n// Kabel DHT22: + ke 3V3, out ke D4, - ke GND. Muncul angka suhu = rakitan benar.\n// platformio.ini harus punya: lib_deps = adafruit/DHT sensor library\n// ============================================================\n#include <Arduino.h>\n#include <DHT.h>\n\n#define DHT_PIN 4               // kaki \"out\" DHT22 di pin D4\n\nDHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();                  // nyalakan sensor\n  Serial.println(\"Sensor siap!\");\n}\n\nvoid loop() {\n  delay(2000);                  // DHT22 butuh jeda minimal 2 detik\n\n  float suhu = dht.readTemperature();   // baca suhu (°C)\n  float lembap = dht.readHumidity();    // baca kelembapan (%)\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca sensor! Cek kabel.\");\n    return;                     // batalkan putaran ini, ulang dari awal loop\n  }\n\n  Serial.print(\"Suhu: \");\n  Serial.print(suhu);\n  Serial.print(\" C | Kelembapan: \");\n  Serial.print(lembap);\n  Serial.println(\" %\");\n}\n",
  "platformio.ini": "; Proyek starter ESP32 untuk semua pertemuan P10–P13.\n; Cara pakai: PIO Home -> Open Project -> pilih folder ini,\n; lalu salin isi file P{n}_x_....cpp / C{n}_....cpp ke src/main.cpp.\n[env:esp32dev]\nplatform = https://github.com/pioarduino/platform-espressif32/releases/download/stable/platform-espressif32.zip\nboard = esp32dev            ; ganti kalau board kelompokmu berbeda\nframework = arduino\nmonitor_speed = 115200      ; harus sama dengan Serial.begin(115200)\nlib_deps = adafruit/DHT sensor library\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (VS Code + PlatformIO)\n\nFile .cpp (kode ESP32):\n1. VS Code -> PlatformIO -> New Project (board: Espressif ESP32 Dev Module, framework: Arduino).\n2. Ganti isi platformio.ini proyekmu dengan file platformio.ini di folder ini.\n3. Salin isi file .cpp yang mau dipakai ke src/main.cpp, lalu Build & Upload.\n\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n\nFolder proyek-akhir (kalau ada): buka folder itu langsung lewat PlatformIO (Open Project).\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 10 - SMP",
  "soal": [
    {
      "q": "1. ESP32 menyala, tapi port tidak muncul di laptop. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "LED terbalik",
        "Kabel USB yang dipakai hanya kabel charger (tidak bisa kirim data)",
        "Sensor DHT22 rusak",
        "Resistor kurang besar"
      ],
      "kunci": 1
    },
    {
      "q": "2. Saat upload muncul Failed to connect to ESP32. Yang sebaiknya dilakukan adalah…",
      "kode": "",
      "opsi": [
        "Tahan tombol BOOT saat muncul Connecting....",
        "Mencabut sensor DHT22",
        "Mengganti LED",
        "Menunggu 1 jam"
      ],
      "kunci": 0
    },
    {
      "q": "3. Kaki DHT22 yang membawa data suhu ke ESP32 adalah kaki…",
      "kode": "",
      "opsi": [
        "+",
        "−",
        "out",
        "Semua kaki sama saja"
      ],
      "kunci": 2
    },
    {
      "q": "4. Rakitan yang BENAR untuk DHT22 di proyek kita adalah…",
      "kode": "",
      "opsi": [
        "+ ke GND, out ke D4, − ke 3V3",
        "+ ke 3V3, out ke D2, − ke GND",
        "+ ke 3V3, out ke D4, − ke GND",
        "+ ke D4, out ke 3V3, − ke GND"
      ],
      "kunci": 2
    },
    {
      "q": "5. Program jadi menulis Gagal baca sensor! Cek kabel. terus-menerus. Langkah pertama yang tepat adalah…",
      "kode": "",
      "opsi": [
        "Menulis ulang programnya",
        "Cabut USB, lalu cek kabel out di D4 dan kabel + / − tidak tertukar",
        "Mengganti laptop",
        "Menambah resistor di kaki sensor"
      ],
      "kunci": 1
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
