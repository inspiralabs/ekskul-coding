// ============================================================
// SCRIPT P10 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 10 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
//   SMA/Panduan Pengajar P10 SMA         Google Docs (kalau ada Panduan_Pengajar_P10_SMA.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P10) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
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

const PANDUAN = {"judul": "Panduan Pengajar P10 SMA — Merakit Smart Room Monitor: DHT22, Relay & Kipas", "blok": [["h1", "Panduan Pengajar — P10 SMA: Merakit Smart Room Monitor (DHT22, Relay & Kipas)"], ["p", "Sabtu, 17 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P10, sumber/Materi_Ajar_P10_SMA_InspiraLabs.md (kunci di bagian KHUSUS TUTOR), folder Kode di Drive, simulasi wokwi/P10_PetaRakitan/."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Setiap kelompok punya **satu rakitan utuh** (DHT22 di D4, relay IN di D18, kipas di NO) yang lolos Tes 1 (relay klik tiap 2 detik, kipas ikut) dan Tes 2 (suhu & kelembapan tampil di Serial Monitor)."], ["p", "2. Siswa bisa **menunjukkan dengan multimeter** bahwa pin IN ±0 V saat relay aktif dan ±3,3 V saat mati (active-LOW)."], ["p", "3. Siswa bisa **menebak bagian yang rusak dari gejala** memakai tabel troubleshooting, sebelum membongkar kabel."], ["h2", "Persiapan H-1"], ["li", "☐ Jalankan SCRIPT_P10_SMA.gs; cek folder **Kode** di Drive berisi platformio.ini, P10_1_TesRelay.cpp, P10_2_TesDHT22.cpp, C1_..., C2_.... Link Linktree \"Kode P10\" & \"Post Test Pertemuan 10\" aktif."], ["li", "☐ **Build sekali** di tiap laptop (unduh platform ESP32 + library DHT, 5–10 menit). Ini paling sering memakan waktu kalau dilakukan di kelas."], ["li", "☐ Per kelompok (6 set): ESP32 + kabel USB **data**, breadboard, DHT22 3-pin, relay 1-channel 5V, kipas DC 5V, jumper merah/hitam/kuning/biru/oranye (male-male & male-female), obeng kecil."], ["li", "☐ **Uji setiap relay** dengan Tes 1: klik tiap 2 detik dan **benar-benar mati** saat IN = HIGH. Relay yang tidak mau mati: ganti modul (lihat Khusus Tutor P9 \"relay 5V + logika 3,3V\"). Tempel stiker \"OK\" di modul yang lolos."], ["li", "☐ Cek polaritas kipas (kabel merah = +). Kipas yang berputar terbalik/lemah → ganti."], ["li", "☐ Cadangan: 1 ESP32 yang sudah berisi Tes 1 (board penguji), 1 relay, 1 DHT22, 2 kabel USB data, 1 power bank."], ["li", "☐ Multimeter minimal 1 (ideal 2–3), baterai dicek, mode DC V & continuity (bunyi) berfungsi."], ["li", "☐ **Wokwi**: buka wokwi.com → New Project → ESP32, tempel sketch.ino, diagram.json, libraries.txt dari wokwi/P10_PetaRakitan/, Save, salin link. Ambil screenshot untuk slide Peta Rakitan kalau diagram Gemini tidak akurat. Link dipakai juga sebagai cadangan kit rusak."], ["li", "☐ Cek halaman **Kartu Sabotase** ekskulcoding.inspiralabs.id/sabotase/ bisa dibuka di HP (cara main: lihat bagian *Cara main Kartu Sabotase* di bawah)."], ["h2", "15 menit sebelum kelas"], ["li", "Kit dibagi per meja. Duduk berdekatan: **sma-01 ↔ sma-02**, **sma-03 ↔ sma-04**, **sma-05 ↔ sma-06** (jadi \"tetangga\" untuk cek silang & pasangan sabotase)."], ["li", "Proyektor + kamera HP/document camera untuk demo multimeter."], ["li", "Slide P10 terbuka, link Wokwi siap di tab browser."], ["li", "Tidak ada stopkontak/kabel PLN di meja praktik selain charger laptop."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–3", "—", "Kumpulkan Tugas 3, umumkan peran", "Berdua: Perakit & Penguji. Individu: tetangga jadi penguji"], ["3–7", "2–4", "Cover, pemantik, agenda", "Tampung 2–3 tebakan, jangan dijawab"], ["7–12", "5–8", "Rakitan utuh, Peta Rakitan, Urutan Aman, Cara Upload", "Tekankan kenapa 3V3 vs 5V dan NO"], ["12–27", "7–9", "Rakit daya + relay + kipas, upload Tes 1", "Keliling. Jangan colok USB sebelum Penguji selesai mencentang"], ["27–31", "10–11", "Active-LOW + multimeter (demo), forum Topik 1", "Demo di kamera: probe hitam GND, merah IN"], ["31–35", "12", "Easy: Pindah Pin Relay", "Pastikan semua kembali ke D18"], ["35–44", "13–15", "Rakit DHT22, Tes 2, Membaca Serial, forum Topik 2", "Tukar peran Perakit ↔ Penguji"], ["44–50", "16", "Medium: Termostat Tangan", "Sambil siswa mengerjakan, buka halaman Kartu Sabotase"], ["50–53", "17–19", "Troubleshooting, 3 pengukuran, forum Topik 3", "Hubungkan ke pertanyaan pemantik"], ["53–61", "20", "Hard: Detektif Kabel", "Pasangan sabotase = tetangga"], ["61–63", "21", "Peta proyek + foto rakitan", "Foto dipakai lagi di P13"], ["63–70", "22–23", "Post-test + penutup", "Rakitan tidak dibongkar"]]], ["p", "Waktu molor? Urutan yang boleh dipangkas: (1) Hard jadi 1 kartu saja, (2) Easy dijadikan demo tutor. **Jangan** pangkas Tes 1 & Tes 2: itu syarat P11."], ["h2", "Kalimat kunci"], ["li", "\"Program tes ini **alat ukur**, bukan PR coding. Kalian cukup upload dan **membandingkan** laporan Serial dengan yang terjadi di meja.\""], ["li", "\"DHT22 di 3V3 karena sinyal datanya ikut tegangan dayanya. GPIO ESP32 hanya tahan 3,3V.\""], ["li", "\"Kipas di NO: kalau ESP32 mati, kipas ikut mati. Itu namanya fail-safe; di industri, mesin harus berhenti saat pengendalinya mati.\""], ["li", "\"Active-LOW: relay aktif saat IN = **LOW**. Jangan percaya kata saya, **ukur**.\""], ["li", "\"Engineer tidak menebak. **Ukur dulu, baru bongkar.**\""], ["h2", "Manajemen kelas (usia 15–18)"], ["li", "**Berdua (sma-04/05/06):** Perakit memegang kabel; Penguji membaca tabel Peta Rakitan keras-keras, mencentang, memegang multimeter & Serial Monitor. **Tukar di Topik 2.** Kalau satu orang mendominasi, tanya langsung ke yang diam: \"Coba kamu yang jelaskan kenapa kabel ini di NO.\""], ["li", "**Individu (sma-01/02/03):** baca checklist keras-keras. Tetangga menjadi Penguji 1 menit sebelum colok USB, lalu gantian."], ["li", "Remaja cepat bosan kalau menunggu. Kelompok yang sudah lolos Tes 1 langsung ke Easy; jangan ditahan menunggu yang lain."], ["li", "Hargai \"gagal yang terukur\": kelompok yang menemukan kesalahan sendiri lewat tabel/multimeter dipuji di depan kelas, bukan hanya yang paling cepat."], ["li", "HP boleh dipakai untuk stopwatch & foto, bukan media sosial selama praktik."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya / minta tunjukkan", "Jawaban yang dicari"], ["Sebelum colok USB pertama", "\"Tunjukkan kabel yang membuat kipas mati kalau ESP32 mati.\"", "Kabel kipas + di NO"], ["Setelah Tes 1", "\"Kalau Serial menulis AKTIF, berapa volt pin IN?\"", "±0 V"], ["Setelah Tes 2", "\"Kenapa sensornya tidak di VIN?\"", "Sinyal 5V merusak GPIO 3,3V"], ["Medium", "\"Kenapa ada jeda 0,5°C?\"", "Mencegah relay cetak-cetek (histeresis)"], ["Hard", "\"Apa yang sudah PASTI benar?\"", "Siswa memisahkan sisi kontrol vs sisi beban"]]], ["h2", "Kesalahan umum & cara membimbing (jangan langsung beri jawaban)"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["USB masih tercolok saat memindah kabel", "\"Aturan nomor 1 di slide Urutan Aman apa?\""], ["Relay diam, Serial tetap AKTIF/MATI", "\"Serial jalan berarti apa yang sudah beres? Lalu ikuti kabel biru: ujungnya di pin berapa?\""], ["Relay klik, kipas diam", "\"Relay klik membuktikan sisi mana yang beres? Tinggal sisi mana? Ukur tegangan di kipas +.\""], ["Kipas terbalik (berputar saat MATI)", "\"Saat relay tidak aktif, COM tersambung ke terminal mana? Kabel kipasmu di mana?\""], ["Gagal baca DHT22", "\"Pesan errornya menyebut 3 hal. Centang satu per satu.\""], ["Lupa mengembalikan D19 → D18", "\"Peta Rakitan bilang IN di pin berapa? Firmware P11 akan memakai pin berapa?\""], ["Huruf acak di Serial", "\"Angka di pojok Serial Monitor berapa? Program kita bicara di 115200.\""]]], ["p", "Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasi**-nya (\"cek baris ke-3 tabel\"), bukan perbaikannya."], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Penyebab", "Tindakan"], ["Port tidak muncul", "Kabel USB khusus charger / driver CH340/CP210x belum ada", "Ganti kabel data; pasang driver"], ["Connecting..... lama", "ESP32 tidak masuk mode upload", "Tahan BOOT saat \"Connecting\""], ["Build sangat lama", "Platform/library belum diunduh", "Pakai laptop yang sudah build; hotspot cadangan"], ["Relay tidak mau mati", "Modul 5V vs logika 3,3V", "Tukar dengan modul ber-stiker \"OK\". Darurat (opsi P9: VCC relay ke 3V3) hanya dilakukan tutor dan dicatat"], ["ESP32 restart saat kipas mulai", "Brownout USB", "Port USB lain / power bank / kabel pendek"], ["Kipas berdetak sesaat saat ESP32 dicolok", "Relay di strapping pin", "Kembalikan ke D18"], ["Rakitan tetap gagal > 5 menit", "Komponen rusak", "Uji dengan board penguji cadangan; masih gagal → kelompok pakai Wokwi (lihat di bawah)"]]], ["p", "**Cadangan kit rusak:** kelompok membuka link Wokwi, mencocokkan kabel di layar dengan tabel Peta Rakitan, lalu mengerjakan Medium dengan klik DHT22 → geser suhu di atas 30°C → relay klik, LED biru (= kipas) menyala. Catat kit yang rusak, ganti sebelum P11."], ["h2", "Cara main Kartu Sabotase (Challenge Hard \"Detektif Kabel\")"], ["p", "Halaman: ekskulcoding.inspiralabs.id/sabotase/ (juga ada di halaman utama ekskul, kartu \"🎴 Kartu Sabotase\"). Tidak perlu menulis kartu."], ["p", "1. **Pasangan:** sma-01 ↔ sma-02, sma-03 ↔ sma-04, sma-05 ↔ sma-06. Tiap kelompok menyabotase rakitan tetangganya."], ["p", "2. **Ambil kartu:** penyabot membuka halaman di HP sendiri → pilih **SMA** → **🎴 Ambil Kartu**. Keluar 2 kartu yang mengubah 2 kabel berbeda."], ["p", "3. **Pasang sabotase:** pemilik rakitan menghadap belakang. Penyabot **mencabut USB**, melakukan persis isi kedua kartu, lalu menekan **🙈 Tutup kartu**."], ["p", "4. **Jadi detektif:** pemilik menyalakan alat, upload Tes 1 & Tes 2, mencatat gejala, mengukur dengan multimeter, lalu memperbaiki **tanpa membongkar semua kabel**."], ["p", "5. **Laporan:** 3 baris per kabel: *gejala → pengukuran → perbaikan* (foto). Penyabot membuka kartunya lagi (atau tutor membuka bagian \"Untuk tutor\" di halaman) untuk mencocokkan."], ["p", "6. **Nilai:** +10 kalau kedua kabel ditemukan dan laporannya benar. Yang dinilai cara berpikirnya, bukan kecepatan."], ["p", "Kartu itu **rahasia hanya bagi pemilik rakitan**. Penyabot boleh tahu karena merekalah yang memasang."], ["p", "Waktu mepet? Cukup 1 kartu, atau tutor yang menyabot saat Challenge Medium."], ["p", "Aturan selalu tampil di halaman: cabut USB, jangan pindahkan kabel 3V3/VIN/GND, hanya lakukan isi kartu."], ["h2", "Keselamatan (tidak bisa ditawar)"], ["li", "**Hanya kipas DC 5V.** Tidak ada perangkat 220V/PLN, walaupun relay tertulis 250VAC."], ["li", "**Cabut USB** setiap memindah kabel, termasuk saat sabotase."], ["li", "Sabotase **hanya dari kartu**; 3V3/VIN/GND tidak boleh disilangkan (korsleting)."], ["li", "Jari & rambut jauh dari baling-baling. Bau/panas → cabut USB, panggil tutor."], ["li", "Jangan menaruh ESP32 di atas benda logam (kaki pin bisa terhubung)."], ["h2", "Diferensiasi"], ["li", "**Cepat selesai:** jadi \"asisten\" untuk tetangga (bertanya, bukan membetulkan); ukur VIN dan 3V3 dan jelaskan kenapa VIN ±4,7 V, bukan 5,0 V; kerjakan Hard 2 kartu tambahan."], ["li", "**Kesulitan:** fokus Tes 1 + Tes 2 saja (syarat P11). Easy boleh dilewati. Duduk dekat tutor, tutor menjadi Penguji."], ["li", "**Sangat tertarik teori:** tunjukkan optocoupler/transistor di modul relay, ajak menebak kenapa relay perlu dioda."], ["h2", "Penilaian"], ["li", "**Wajib (syarat P11):** Tes 1 lolos + Tes 2 lolos + rakitan sesuai Peta Rakitan (cek dengan foto). Catat per Device ID."], ["li", "**Challenge:** Easy/Medium/Hard masing-masing **+10** leaderboard. Hard dinilai dari laporan *gejala → pengukuran → perbaikan* (foto), bukan kecepatan."], ["li", "**Post-test:** 5 soal, kunci di Khusus Tutor (B, A, C, B, A)."], ["h2", "Penutup & PR"], ["li", "Foto rakitan yang lolos 2 tes (dipakai lagi di P13 sebagai foto \"sebelum\")."], ["li", "**Rakitan jangan dibongkar**; simpan dalam kotak, kabel tetap tertancap."], ["li", "Pengumuman P11: firmware proyek + data tampil di dashboard. Minta peserta membawa laptop yang sama (sudah ada PlatformIO)."], ["li", "Setelah kelas (tutor): catat kit rusak, cek semua relay kembali di D18, jalankan py tools/kelompok.py paket untuk zip P11."]]};

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
