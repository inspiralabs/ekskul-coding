// ============================================================
// SCRIPT P11 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 11 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
//   SMP/Panduan Pengajar P11 SMP         Google Docs (kalau ada Panduan_Pengajar_P11_SMP.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P11) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
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

const PANDUAN = {"judul": "Panduan Pengajar P11 SMP — Pasang Firmware Proyek & Jadi Dokter Kabel", "blok": [["h1", "Panduan Pengajar — P11 SMP: Pasang Firmware Proyek & Jadi Dokter Kabel"], ["p", "Jum'at, 30 Oktober 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P11_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: firmware proyek dipakai **apa adanya**. Siswa hanya mengganti ISI_DI_SINI dengan nama & password WiFi. Angka DHT_PIN hanya diubah di Challenge Hard, lalu dikembalikan."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Meng-upload firmware proyek dari folder smp-XX dan menunjukkan Serial Monitor dengan Terhubung!, angka suhu, dan kode respons: 200."], ["p", "2. Memasangkan 3 gejala Serial Monitor dengan penyebabnya (WiFi, kabel sensor, internet)."], ["p", "3. Memakai multimeter mode bunyi untuk membedakan kabel jumper bagus dan putus."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ py tools/kelompok.py paket → dist/paket/smp-XX.zip."], ["li", "☐ **Di laptop tiap kelompok:** extract smp-XX.zip ke Desktop, PIO Home → Open Project → smp-XX/firmware → **Build sekali** (library WiFi/HTTP/DHT ikut ter-download). Catat laptop mana untuk Device ID mana (tempel stiker smp-XX di laptop)."], ["li", "☐ Pastikan rakitan P10 (DHT22 di D4) masih utuh; bawa DHT22 & jumper cadangan."], ["li", "☐ **Uji WiFi kelas** dengan board cadangan: upload firmware salah satu kelompok, lihat 200. Pastikan WiFi **2.4 GHz**. Siapkan hotspot HP cadangan (2.4 GHz, kuota cukup)."], ["li", "☐ Buat 2–3 kabel jumper **sengaja putus** (potong kawat di dalam isolasi, luar tetap mulus) untuk demo multimeter."], ["li", "☐ Cek backend: https://api-ekskulcoding.inspiralabs.id/health."], ["li", "☐ Siapkan proyek PlatformIO latihan (dari P10) di tiap laptop untuk program cadangan P11_1_BacaDHT22.cpp / P11_2_TesWiFi.cpp."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Tulis di papan: **nama WiFi & password** (huruf besar-kecil persis), plus \"Cabut USB sebelum memindah kabel!\"."], ["li", "☐ Multimeter: set ke **mode bunyi** (simbol gelombang suara/dioda). Tes: tempelkan kedua ujungnya → bunyi."], ["li", "☐ Siapkan kertas \"Kartu Gejala\" untuk Challenge Medium (atau cukup di slide 17)."], ["h3", "Isi kit per kelompok/individu"], ["p", "Rakitan P10 (ESP32 + DHT22 di D4) · kabel USB data · laptop dengan folder smp-XX · kertas untuk Pencatat. Per kelas: 1 multimeter, 3–4 jumper cadangan, jumper putus untuk demo."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1", "Pembuka + cek Tugas 3", "2–3 siswa tunjukkan gambar rakitannya. Nyalakan laptop"], ["5–8", "2–5", "Cover, pemantik, agenda, peran", "Tampung tebakan pemantik. Tunjuk peran"], ["8–14", "6–8", "Firmware, folder, zona hijau/merah", "Buka file di proyektor, tunjuk persis baris ISI_DI_SINI"], ["14–28", "9", "Praktek upload firmware", "Keliling. Pengecek membandingkan nama WiFi huruf demi huruf"], ["28–31", "10–11", "Membaca cerita ESP32 + forum", "Tunjukkan output satu kelompok di proyektor"], ["31–36", "12", "🟢 Easy (wajib)", "Cek catatan Pencatat, beri +10"], ["36–44", "13–15", "Dokter kabel, multimeter, program cadangan", "Demo jumper putus. Ganti peran"], ["44–46", "16", "Forum", ""], ["46–52", "17", "🟡 Medium", "Cek jawaban kertas"], ["52–60", "18", "🔴 Hard", "Untuk yang sudah 200. Yang belum: tutor bantu dokter kabel"], ["60–62", "19", "Peta proyek", "Ingatkan bawa foto kelompok ke P12"], ["62–70", "20–21", "Post-test", "Sendiri-sendiri"]]], ["h2", "4. Kalimat kunci"], ["li", "**Firmware:** \"Ini program resmi alat kalian. Kita tidak menulis, kita memasang. Seperti teknisi memasang aplikasi resmi ke mesin.\""], ["li", "**Zona hijau/merah:** \"Zona hijau itu kolom formulir: isi nama dan password WiFi. Zona merah itu kunci rumah server. Disentuh, pintunya terkunci.\""], ["li", "**Device ID:** \"smp-07 itu plat nomor alat kalian. Kalau dua motor plat nomornya sama, polisi bingung. Server juga.\""], ["li", "**Kode 200:** \"Angka 200 artinya paketnya diterima, seperti centang dua di WhatsApp.\""], ["li", "**Dokter kabel:** \"Dokter tidak langsung operasi. Dia tanya gejala dulu. Kita juga: baca Serial Monitor dulu, baru pegang kabel.\""], ["li", "**Urutan cek:** \"Listrik → kabel → pin → program. Program paling akhir, karena program yang sama sudah jalan di kelompok lain.\""], ["h2", "5. Mengelola kelas 12–15 tahun"], ["li", "**Menunggu upload itu membosankan.** Saat Build/Upload berjalan, beri tugas kecil: Pencatat menyiapkan tabel \"sebelum/sesudah tiup\" untuk Easy; Perakit menekan ulang semua kabel."], ["li", "**Peran berputar** (slide 5): Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 36). Pencatat menulis angka, bukan hanya menonton."], ["li", "**Peserta individu:** pegang semua peran. Pasangkan dengan individu sebelah sebagai \"teman cek\" untuk membandingkan nama WiFi dan membaca checklist."], ["li", "**WiFi macet di banyak kelompok sekaligus** → hentikan kelas 1 menit dengan sinyal diam, pindahkan semua ke hotspot cadangan bersama-sama (tulis nama hotspot di papan), daripada membantu satu per satu."], ["li", "**Gamifikasi:** papan \"Klub 200\": tulis Device ID di papan begitu kelompok itu mendapat 200 pertama."], ["h2", "6. Titik cek pemahaman"], ["li", "Setelah slide 8: \"Tunjuk dengan jari di layar kalian: baris mana yang boleh diubah?\" (WIFI_SSID, WIFI_PASSWORD)."], ["li", "Setelah slide 10: **jempol**: \"Jempol atas kalau sudah lihat 200.\" Catat yang belum."], ["li", "Setelah slide 13: tutor membacakan gejala, kelas menjawab serentak: \"Titik-titik tidak berhenti?\" (WiFi) · \"Gagal baca sensor?\" (kabel) · \"Minus satu?\" (internet)."], ["li", "Setelah slide 14: \"Multimeter diam, artinya?\" (kabel putus)."], ["h2", "7. Kesalahan yang sering terjadi & cara membantu"], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Nama WiFi beda huruf besar/kecil atau ada spasi", "\"Bandingkan huruf demi huruf dengan papan. Pengecek, bacakan pelan-pelan.\""], ["Tanda kutip \" ikut terhapus (Build error)", "\"Lihat baris yang kamu ketik. Bentuknya sama dengan baris di atasnya? Ada yang hilang?\""], ["Lupa Save sebelum Upload", "\"Di judul tab file ada titik bulat? Artinya apa?\""], ["Membuka folder smp-XX (bukan smp-XX/firmware) → Upload tidak ada", "\"Folder program ESP32 namanya apa di slide 7?\""], ["Mengubah DEVICE_ID", "\"Device ID itu plat nomor. Boleh diganti?\" → kembalikan sesuai nama folder"], ["Langsung menyalahkan program", "\"Program yang sama jalan di kelompok sebelah? Berarti yang beda apa?\""], ["Gagal baca sensor", "\"Serial Monitor bilang masalahnya di mana? Kabel mana yang ke sensor?\""]]], ["h2", "8. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Titik-titik ...... tidak berhenti", "Nama/password salah, WiFi 5 GHz, sinyal lemah", "Cek huruf; pindah ke hotspot 2.4 GHz; dekatkan ke router"], ["Gagal baca sensor DHT22…", "Out bukan di D4, longgar, + − tertukar", "Cabut USB, checklist P10"], ["Suhu kadang muncul, kadang gagal", "Kabel goyang / jumper hampir putus", "Ganti jumper, tes multimeter mode bunyi"], ["kode respons: -1", "WiFi tanpa internet", "Cek kuota hotspot, coba WiFi lain"], ["kode respons: 401", "Zona merah (API_KEY) berubah", "Extract ulang zip asli, isi WiFi lagi, upload"], ["Serial Monitor kosong", "Pesan awal terlewat", "Tekan EN di board"], ["Tulisan acak ⸮⸮⸮", "Kecepatan berbeda", "monitor_speed = 115200 di firmware/platformio.ini"], ["Build error merah setelah mengisi WiFi", "Tanda kutip/titik koma terhapus", "Bandingkan dengan baris di atasnya, atau extract ulang zip"], ["Ada baris {...} setelah kode respons", "Balasan server", "Normal, abaikan"], ["Masih bingung WiFi atau sensor?", "—", "Upload P11_2_TesWiFi.cpp (WiFi saja) atau P11_1_BacaDHT22.cpp (sensor saja) di proyek latihan, lalu upload lagi firmware proyek"]]], ["h2", "9. Keselamatan"], ["li", "Tegangan kit rendah (USB), aman disentuh. Multimeter di mode bunyi dipakai pada kabel yang **tidak tersambung** ke board (USB dicabut)."], ["li", "Mode DC volt hanya didemokan tutor pada 3V3–GND board, bukan ke stopkontak. **Jangan pernah** mengukur stopkontak di depan siswa."], ["li", "Cabut USB sebelum memindah kabel, termasuk di Challenge Hard (D4 → D27 → D4)."], ["li", "Sensor hangat = + − tertukar → cabut segera."], ["h2", "10. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Hard; bonus Medium (cabut kabel out, lihat gejalanya); atau minta mereka menjadi \"dokter jaga\" yang membantu kelompok lain hanya dengan pertanyaan. Tantangan ekstra: \"Hitung berapa kali data terkirim dalam 1 menit.\" (±15 kali, tiap 4 detik)."], ["li", "**Siswa kesulitan:** fokus satu target saja: 200. Tutor duduk di samping dan membimbing langkah demi langkah (\"Klik Open Project. Pilih folder firmware. Sekarang cari tulisan ISI_DI_SINI.\"). Medium cukup dikerjakan lisan bersama tutor."], ["h2", "11. Penilaian"], ["li", "**Challenge:** +10 per challenge (leaderboard). Easy wajib."], ["li", "Easy lulus = angka sebelum/sesudah ditiup tercatat + kode 200 tercatat."], ["li", "Medium lulus = 1C, 2A, 3B."], ["li", "Hard lulus = bisa menjelaskan kenapa DHT_PIN harus sama dengan pin kabel, **dan** sudah kembali ke D4 / angka 4 / upload ulang."], ["li", "**Penilaian praktek pertemuan ini:** Serial Monitor menampilkan suhu + 200 dari rakitan sendiri."], ["li", "**Post-test:** 5 soal, individu. Kunci: 1B 2B 3B 4A 5B."], ["li", "**Tugas 3** (dari P10): tandai yang sudah mengumpulkan."], ["h2", "12. Penutup & PR"], ["li", "Firmware sudah tersimpan di ESP32. \"Minggu depan cukup colok ke power bank.\""], ["li", "PR: bawa **foto kelompok** (atau foto diri untuk individu) di HP untuk dashboard P12. Charge power bank kalau punya."], ["li", "Setelah kelas: catat Device ID yang belum 200 (lihat papan \"Klub 200\") → selesaikan di 10 menit pertama P12. Pastikan semua kabel out kembali ke **D4**."]]};

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
  if (PANDUAN.blok.length) tulisPanduan(folderJenjang);
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

function tulisPanduan(folder) {
  const ada = folder.getFilesByName(PANDUAN.judul);
  let doc;
  if (ada.hasNext()) {
    doc = DocumentApp.openById(ada.next().getId());
    doc.getBody().clear();
  } else {
    doc = DocumentApp.create(PANDUAN.judul);
    DriveApp.getFileById(doc.getId()).moveTo(folder);
  }
  const body = doc.getBody();
  const H = {h1: DocumentApp.ParagraphHeading.HEADING1, h2: DocumentApp.ParagraphHeading.HEADING2,
             h3: DocumentApp.ParagraphHeading.HEADING3};
  PANDUAN.blok.forEach(function (b) {
    const jenis = b[0], isi = b[1];
    if (jenis === 'tabel') {
      const t = body.appendTable(isi);
      t.getRow(0).editAsText().setBold(true);
      return;
    }
    const polos = jenis === 'kode' ? isi : isi.split('**').join('');
    const el = jenis === 'li' ? body.appendListItem(polos).setGlyphType(DocumentApp.GlyphType.BULLET)
                              : body.appendParagraph(polos);
    if (H[jenis]) el.setHeading(H[jenis]);
    if (jenis === 'kode') el.editAsText().setFontFamily('Courier New');
    if (jenis === 'kutip') el.editAsText().setItalic(true);
    if (jenis !== 'kode') {  // **tebal** -> bold
      const teks = el.editAsText();
      let pos = 0;
      isi.split('**').forEach(function (bagian, i) {
        if (i % 2 === 1 && bagian) teks.setBold(pos, pos + bagian.length - 1, true);
        pos += bagian.length;
      });
    }
  });
  doc.saveAndClose();
  Logger.log('PANDUAN    %s', doc.getUrl());
}

function ambilAtauBuatFolder(induk, nama) {
  const it = induk.getFoldersByName(nama);
  return it.hasNext() ? it.next() : induk.createFolder(nama);
}
