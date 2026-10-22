// ============================================================
// SCRIPT P11 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 11 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
//   SMA/Panduan Pengajar P11 SMA         Google Docs (kalau ada Panduan_Pengajar_P11_SMA.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P11) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd";  // link atau ID folder Drive P11
const JENJANG = 'SMA';

const KODE = {
  "P11_1_TesRelay/P11_1_TesRelay.ino": "// ============================================================\n// P11 SMA — Program Tes 1: Relay Berdetak (PROGRAM JADI, tidak perlu diubah)\n// Rakitan: relay IN -> GPIO 14, VCC -> VIN, GND -> GND.\n//          VIN -> COM, NO -> kipas (+), kipas (-) -> GND.\n// Yang harus terlihat: tiap 2 detik relay \"klik\", LED relay menyala,\n// kipas berputar 2 detik lalu berhenti 2 detik.\n// ============================================================\n\n#define RELAY_PIN 14     // ubah HANYA kalau kabel IN kamu pasang di pin lain\n#define RELAY_ON  LOW    // modul relay active-LOW: IN = LOW -> relay aktif\n#define RELAY_OFF HIGH\n\nvoid setup() {\n  Serial.begin(115200);\n  digitalWrite(RELAY_PIN, RELAY_OFF);  // set OFF dulu supaya relay tidak klik saat boot\n  pinMode(RELAY_PIN, OUTPUT);\n  Serial.println();\n  Serial.printf(\"Tes relay di GPIO %d dimulai\\n\", RELAY_PIN);\n}\n\nvoid loop() {\n  digitalWrite(RELAY_PIN, RELAY_ON);\n  Serial.println(\"Relay AKTIF (IN = LOW, sekitar 0 V)    -> kipas harus BERPUTAR\");\n  delay(2000);\n\n  digitalWrite(RELAY_PIN, RELAY_OFF);\n  Serial.println(\"Relay MATI  (IN = HIGH, sekitar 3,3 V) -> kipas harus BERHENTI\");\n  delay(2000);\n}\n",
  "P11_2_TesDHT22/P11_2_TesDHT22.ino": "// ============================================================\n// P11 SMA — Program Tes 2: Baca DHT22 (PROGRAM JADI, tidak perlu diubah)\n// Rakitan: DHT22 \"+\" -> 3V3, \"out\" -> GPIO 13, \"-\" -> GND.\n// Yang harus terlihat: tiap 2 detik muncul suhu & kelembapan di Serial Monitor.\n// Genggam / tiup sensor: angkanya harus berubah.\n// Butuh library \"DHT sensor library\" by Adafruit (lihat Panduan Instalasi Library).\n// ============================================================\n#include <DHT.h>\n\n#define DHT_PIN 13       // ubah HANYA kalau kabel \"out\" kamu pasang di pin lain\n\nDHT dht(DHT_PIN, DHT22);\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();\n  Serial.println();\n  Serial.printf(\"Tes DHT22 di GPIO %d dimulai\\n\", DHT_PIN);\n}\n\nvoid loop() {\n  delay(2000);  // DHT22: maksimal 1 bacaan tiap 2 detik\n\n  float suhu = dht.readTemperature();\n  float lembap = dht.readHumidity();\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca DHT22 -> cek: out ke GPIO 13? + ke 3V3? - ke GND? kabel longgar?\");\n    return;\n  }\n\n  Serial.printf(\"Suhu: %.1f C | Lembap: %.1f %%\\n\", suhu, lembap);\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

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
      "q": "2. Menurut Peta Rakitan, kabel \"out\" sensor DHT22 dicolok ke pin…",
      "kode": "",
      "opsi": [
        "D12",
        "D13",
        "D14",
        "VIN"
      ],
      "kunci": 1
    },
    {
      "q": "3. Serial Monitor terus menampilkan Menghubungkan ke WiFi......... tanpa berhenti. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Kabel DHT22 longgar",
        "Nama/password WiFi salah ketik atau WiFi-nya 5 GHz",
        "Kipas terpasang terbalik",
        "Dashboard belum dibuka"
      ],
      "kunci": 1
    },
    {
      "q": "4. Serial menampilkan Kirim data -> kode respons: 200. Artinya…",
      "kode": "",
      "opsi": [
        "Suhu ruangan 200 derajat",
        "Server menerima data, dashboard kelompok seharusnya ikut berubah",
        "WiFi terputus",
        "Sensor gagal dibaca"
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

const PANDUAN = {"judul": "Panduan Pengajar P11 SMA — Rakit & Online: Smart Room Monitor Tampil di Dashboard", "blok": [["h1", "Panduan Pengajar — P11 SMA: Rakit & Online: Smart Room Monitor Tampil di Dashboard"], ["p", "Sabtu, 31 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P11_SMA_InspiraLabs.md. Zip dist/paket/sma-XX.zip."], ["kutip", "Prinsip hari ini: **rakit, upload, lihat angkanya online.** Firmware dan dashboard sudah jadi. Siswa hanya merakit sesuai Peta Rakitan, mengisi 2 baris WiFi, lalu membuktikan datanya sampai. **Tidak ada coding dari nol, tidak ada multimeter, tidak ada PR.**"], ["h2", "1. Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Setiap kelompok punya **satu rakitan utuh** sesuai Peta Rakitan (DHT22 out di D13, relay IN di D14, kipas di NO, D12 kosong)."], ["p", "2. Serial Monitor menampilkan Terhubung! dan kode respons: 200."], ["p", "3. Angka suhu di dashboard kelompok **naik saat sensor digenggam** (bukti data hidup)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Backend hidup: buka https://api-ekskulcoding.inspiralabs.id/health → ok. Dashboard sma-01.inspiralabs.id … sma-06.inspiralabs.id bisa dibuka."], ["li", "☐ py tools/kelompok.py paket → 6 zip. Simpan di flashdisk/Drive, **nama file = Device ID**. Zip tertukar = data dua kelompok saling menimpa."], ["li", "☐ **Set semua dashboard ke Manual + OFF** (PIN dari FAN_PINS di .env server). Status awal server = **Otomatis, ambang 30°C**; tanpa ini kipas bisa menyala sendiri dan membingungkan. Kontrol kipas baru dibahas di P12."], ["li", "☐ WiFi kelas: **2,4 GHz**, ada internet, **tanpa halaman login**. Tulis nama & password-nya di kertas untuk papan. Hotspot HP cadangan (mode 2,4 GHz / \"kompatibilitas\")."], ["li", "☐ Di tiap laptop: buka firmware/sma_room_monitor/sma_room_monitor.ino dari salah satu zip → **Verify (✓)** sekali. Laptop yang belum lulus instalasi P10: selesaikan sekarang."], ["li", "☐ Jalankan SCRIPT_P11_SMA.gs → folder **Kode** (P11_1_TesRelay, P11_2_TesDHT22) + Google Form post-test ada di Drive. Perbarui tombol \"Post Test Pertemuan 11\" di Linktree."], ["li", "☐ Per kelompok (6 set): ESP32 + kabel USB **data**, breadboard, DHT22 3-pin, relay 1-channel 5V, kipas DC 5V, jumper merah/hitam/kuning/biru/oranye, obeng kecil. Uji tiap relay & DHT22 dengan program tes; tempel stiker \"OK\"."], ["li", "☐ Cadangan: 1 DHT22, 1 relay, 2 kabel USB data, 2 power bank (untuk Hard, bergantian)."], ["li", "☐ **Wokwi** (cadangan kit rusak & gambar Peta Rakitan): wokwi.com → New Project → ESP32, tempel sketch.ino, diagram.json, libraries.txt dari p11/wokwi/P11_PetaRakitan/, Save, salin link."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Tulis di papan: nama & password WiFi kelas, \"Cabut USB sebelum memindah kabel!\", \"DHT out → D13 · relay IN → D14 · D12 kosong\". **Jangan** tulis PIN kelompok."], ["li", "☐ Satu rakitan tutor sudah online, dashboard tutor terbuka di proyektor sebagai pembanding (\"begini seharusnya\")."], ["li", "☐ Duduk berdekatan: **sma-01 ↔ sma-02**, **sma-03 ↔ sma-04**, **sma-05 ↔ sma-06** (tetangga saling cek kabel & ejaan WiFi)."], ["li", "☐ Kertas/spreadsheet pencatat poin (nama siswa, +2, Easy, Medium, Hard)."], ["h2", "3. Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1, 5–6", "Bagikan kit & zip sesuai Device ID, peran, aturan poin", "Cek nama zip = stiker Device ID"], ["5–8", "2–4", "Cover, pemantik (ojol), agenda", "Tampung tebakan (+2), jangan dijawab dulu"], ["8–25", "7–9", "Kenalan 3 komponen, Peta Rakitan, urutan aman, rakit", "Keliling. Tidak boleh colok USB sebelum Pengecek selesai mencentang"], ["25–27", "10", "Tanya Jawab Topik 1", "+2 per penjawab"], ["27–40", "11–15", "Isi zip, isi WiFi, upload, baca Serial Monitor", "Tukar peran. Kelompok bermasalah → slide 15 (cek cepat)"], ["40–42", "16", "Tanya Jawab Topik 2", ""], ["42–46", "17", "🟢 Easy: Online!", "+5. Rayakan tiap dashboard yang pertama kali menampilkan angka"], ["46–52", "18–19", "Perjalanan data, dashboard kelompok", "Jawab pemantik di slide 18. Demo genggam sensor di proyektor"], ["52–54", "20", "Tanya Jawab Topik 3", ""], ["54–58", "21", "🟡 Medium: Uji Sensor Hidup", "+10"], ["58–63", "22", "🔴 Hard: Lepas dari Laptop", "+15. Power bank bergantian"], ["63–64", "23", "Peta petualangan", "Rakitan dikumpulkan utuh dalam kotak"], ["64–70", "24–25", "Post-test + penutup", "Sendiri-sendiri. Teaser P12"]]], ["p", "Waktu molor? Urutan yang boleh dipangkas: (1) Hard, (2) Medium jadi demo tutor. **Jangan** pangkas rakit + Easy: itu syarat P12."], ["h2", "4. Kalimat kunci"], ["li", "**Pembuka:** \"Di P10 ESP32 kita baru bisa kedip. Hari ini dia dapat indera, dapat tangan, dan bisa lapor ke internet.\""], ["li", "**Relay:** \"Relay itu jari yang menekan saklar kipas. Yang menyuruh menekan: ESP32.\""], ["li", "**Sebelum colok USB:** \"Siapa yang bilang boleh colok? Pengecek, setelah semua baris Peta Rakitan dicentang.\""], ["li", "**Firmware:** \"Programnya sudah jadi. Yang kalian isi cuma 2 baris WiFi. Bagian JANGAN UBAH itu 'kabel' ke server.\""], ["li", "**Serial Monitor:** \"Jangan panik, baca angkanya. 200 sampai, minus berarti internetnya yang macet.\""], ["li", "**Dashboard:** \"ESP32 dan dashboard nggak ngobrol langsung. Mereka ketemu di server, alamatnya Device ID.\""], ["h2", "5. Gaya mengajar & memancing interaksi"], ["li", "Momen paling penting: saat dashboard pertama berubah angka. Hentikan kelas 10 detik, sebut nama kelompoknya, minta mereka menggenggam sensor di depan teman."], ["li", "Error = materi. Kalau ada Serial yang menarik (titik-titik terus, -1), tampilkan di proyektor dan tanya kelas: \"Menurut kalian kenapa?\" (+2)."], ["li", "**Berdua (sma-04/05/06):** Perakit/Operator & Pengecek/Pengamat, tukar di Topik 2. Kalau satu orang mendominasi, tanya langsung ke yang diam: \"Coba kamu yang jelaskan kenapa kipas di NO.\""], ["li", "**Individu (sma-01/02/03):** tetangga jadi Pengecek sebelum colok USB, dan saling cek ejaan SSID/password sebelum upload."], ["li", "Yang penasaran mengubah bagian JANGAN UBAH: tidak dimarahi, minta ganti file dengan salinan zip asli."], ["h2", "6. Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya / minta tunjukkan", "Jawaban yang dicari"], ["Sebelum colok USB", "\"Tunjukkan kabel yang membuat kipas mati kalau ESP32 mati.\"", "Kabel kipas + di NO"], ["Setelah upload", "\"Baris mana yang membuktikan WiFi beres? Server beres?\"", "Terhubung! · kode respons: 200"], ["Medium", "\"Kenapa angka di dashboard tidak langsung berubah?\"", "Sensor butuh waktu hangat + ESP32 lapor tiap ±4 detik"], ["Hard", "\"Kenapa alat tetap jalan tanpa laptop?\"", "Program tersimpan di ESP32"]]], ["h2", "7. Kesalahan umum & cara membimbing (jangan langsung beri jawaban)"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["USB masih tercolok saat memindah kabel", "\"Aturan nomor 1 di slide Urutan Aman apa?\""], ["Menghubungkan ke WiFi..... tanpa henti", "\"Bandingkan huruf per huruf SSID kalian dengan papan. WiFi ini 2,4 atau 5 GHz?\""], ["kode respons: -1", "\"WiFi-nya tersambung. Bisakah laptop membuka google.com lewat WiFi yang sama?\""], ["kode respons: 401", "\"Tabel bilang apa? Bagian mana yang mungkin tersentuh?\" → ganti .ino dari zip asli"], ["Gagal baca sensor DHT22", "\"Pesan errornya menyebut sensor. Ikuti kabel kuning: ujungnya di pin berapa?\""], ["Dashboard kosong / angka diam", "\"File index.html yang kalian buka dari folder siapa? Device ID-nya apa?\""], ["Kipas menyala sendiri", "\"Lihat dashboard: mode apa? Ambang berapa?\" → set Manual + OFF"]]], ["p", "Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasinya** (\"cek baris ke-2 Peta Rakitan\"), bukan perbaikannya."], ["h2", "8. Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Tindakan"], ["Semua kelompok -1", "Internet WiFi kelas mati → pindah semua ke hotspot cadangan (isi ulang 2 baris WiFi)"], ["Port tidak muncul", "Kabel USB data, port lain, driver CP210x/CH340 (Panduan Instalasi 2)"], ["Upload gagal Failed to connect", "Tahan BOOT saat Connecting...; Tools → Upload Speed → 115200; cek D12 kosong"], ["Arduino IDE minta memindah file ke folder baru", ".ino dibuka dari dalam zip / nama folder diganti. Ekstrak ulang zip asli"], ["DHT.h: No such file or directory", "Library Manager → DHT sensor library → INSTALL ALL"], ["Relay tidak klik / kipas diam", "Upload P11_1_TesRelay.ino. Tes lolos → rakitan beres (dashboard memang Manual + OFF). Tes gagal → cek VCC/GND/IN relay, COM/NO, kipas −"], ["Sensor tidak terbaca", "Upload P11_2_TesDHT22.ino, cek 3 kabel DHT22"], ["Kipas berputar terus walau dashboard OFF", "Relay kebalikan (active-HIGH) → tukar modul ber-stiker \"OK\" (perbaikan lewat kode dibahas P12)"], ["ESP32 restart saat kipas mulai / saat kirim data", "Daya USB lemah → port lain / power bank / kabel pendek"], ["Kit tetap gagal > 5 menit", "Kelompok pakai link Wokwi untuk memahami rakitan; catat kit rusak, ganti sebelum P12"]]], ["h2", "9. Keselamatan (tidak bisa ditawar)"], ["li", "**Hanya kipas DC 5V.** Tidak ada perangkat 220V/PLN, walaupun relay tertulis 250VAC."], ["li", "**Cabut USB** setiap memindah kabel."], ["li", "Jari & rambut jauh dari baling-baling. Bau/panas → cabut USB, panggil tutor."], ["li", "Password WiFi kelas jangan difoto/diunggah ke media sosial."], ["h2", "10. Diferensiasi"], ["li", "**Cepat selesai:** jadi \"asisten\" tetangga (bertanya, bukan membetulkan); buka dashboard di HP pakai data seluler (bukti \"dari mana saja\")."], ["li", "**Kesulitan:** fokus rakit + Easy (syarat P12). Tutor duduk bersama membaca Serial Monitor baris per baris memakai tabel slide 14."], ["h2", "11. Penilaian"], ["li", "**Wajib (syarat P12):** rakitan sesuai Peta Rakitan + Serial kode respons: 200 + dashboard menampilkan angka yang berubah. Catat per Device ID."], ["li", "**Keaktifan:** +2 per bertanya/menjawab."], ["li", "**Challenge:** Easy **+5**, Medium **+10**, Hard **+15**."], ["li", "**Post-test:** 5 soal, kunci C, B, B, B, C."], ["h2", "12. Penutup"], ["li", "Rakitan **jangan dibongkar**: dikumpulkan ke tutor dalam kotak, kabel tetap tertancap. Siswa tidak membawa apa pun pulang dan **tidak ada PR**."], ["li", "Pengumuman P12: kipas dikendalikan dari dashboard (manual & otomatis). Tutor menyiapkan PIN per kelompok (dibagikan pribadi)."], ["li", "Setelah kelas (tutor): catat kit rusak, cek semua rakitan masih DHT22 di D13 dan relay di D14, simpan folder kelompok di laptop masing-masing atau Drive."]]};

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
