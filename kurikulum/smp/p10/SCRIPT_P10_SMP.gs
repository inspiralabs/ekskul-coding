// ============================================================
// SCRIPT P10 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 10 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
//   SMP/Panduan Pengajar P10 SMP         Google Docs (kalau ada Panduan_Pengajar_P10_SMP.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P10) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1pOjrg_pXWrebh4WlrZvBKlOHLp0ZSAbp";  // link atau ID folder Drive P10
const JENJANG = 'SMP';

const KODE = {
  "P10_1_Blink/P10_1_Blink.ino": "// ============================================================\n// P10 SMP — Program Jadi 1: Blink LED (tes upload)\n// TIDAK PERLU MENULIS KODE. Buka file ini di Arduino IDE, lalu klik Upload (panah ->).\n// Rakitan: D2 -> resistor 220 ohm -> kaki PANJANG LED, kaki pendek LED -> GND.\n// Kalau berhasil: LED di breadboard DAN lampu biru di board ESP32 berkedip tiap 1 detik.\n// Challenge Medium: ubah angka di delay(...)   Challenge Hard: ubah angka LED_PIN.\n// ============================================================\n\n#define LED_PIN 2   // LED dicolok ke pin D2 (sama dengan lampu biru bawaan board)\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);     // pin 2 = keluaran\n  Serial.begin(115200);         // buka \"jalur ngobrol\" ke laptop\n  Serial.println(\"ESP32 siap! Upload berhasil.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);  // nyala\n  Serial.println(\"LED nyala\");\n  delay(1000);                  // tunggu 1 detik\n\n  digitalWrite(LED_PIN, LOW);   // mati\n  Serial.println(\"LED mati\");\n  delay(1000);\n}\n",
  "P10_2_CekDHT22/P10_2_CekDHT22.ino": "// ============================================================\n// P10 SMP — Program Jadi 2: Cek Library DHT (Level 3 instalasi)\n// TIDAK PERLU MENULIS KODE. Di P10 cukup klik Verify (✓): \"Done compiling\" = library DHT siap.\n// Sensornya baru dirakit di P11 (+ ke 3V3, out ke D4, - ke GND).\n// Butuh library \"DHT sensor library\" by Adafruit (lihat Panduan Instalasi Library).\n// ============================================================\n#include <DHT.h>\n\n#define DHT_PIN 4               // kaki \"out\" DHT22 di pin D4\n\nDHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();                  // nyalakan sensor\n  Serial.println(\"Sensor siap!\");\n}\n\nvoid loop() {\n  delay(2000);                  // DHT22 butuh jeda minimal 2 detik\n\n  float suhu = dht.readTemperature();   // baca suhu (°C)\n  float lembap = dht.readHumidity();    // baca kelembapan (%)\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca sensor! Cek kabel.\");\n    return;                     // batalkan putaran ini, ulang dari awal loop\n  }\n\n  Serial.print(\"Suhu: \");\n  Serial.print(suhu);\n  Serial.print(\" C | Kelembapan: \");\n  Serial.print(lembap);\n  Serial.println(\" %\");\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 10 - SMP",
  "soal": [
    {
      "q": "1. Arduino IDE adalah…",
      "kode": "",
      "opsi": [
        "Game online untuk belajar",
        "Aplikasi untuk menulis program dan mengirimnya (upload) ke ESP32",
        "Driver untuk printer",
        "Browser internet"
      ],
      "kunci": 1
    },
    {
      "q": "2. Supaya Arduino IDE bisa memprogram ESP32, yang dipasang di Boards Manager adalah…",
      "kode": "",
      "opsi": [
        "esp32 by Espressif Systems",
        "Arduino ESP32 Boards by Arduino",
        "Library WiFi by Arduino",
        "DHT sensor library"
      ],
      "kunci": 0
    },
    {
      "q": "3. Tombol untuk mengirim program dari laptop ke ESP32 adalah…",
      "kode": "",
      "opsi": [
        "Verify (✓)",
        "Serial Monitor (kaca pembesar)",
        "Upload (→)",
        "Library Manager (buku-buku)"
      ],
      "kunci": 2
    },
    {
      "q": "4. ESP32 menyala, tapi port tidak muncul di laptop. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "LED terbalik",
        "Library DHT belum dipasang",
        "Resistor kurang besar",
        "Kabel USB yang dipakai hanya kabel charger (tidak bisa kirim data)"
      ],
      "kunci": 3
    },
    {
      "q": "5. Lampu biru di board berkedip, tapi LED di breadboard diam. Masalahnya ada di…",
      "kode": "",
      "opsi": [
        "Program Blink rusak",
        "Rakitan LED (terbalik, dua kaki satu baris, atau kabel bukan di D2)",
        "Arduino IDE belum terpasang",
        "Internet sekolah lambat"
      ],
      "kunci": 1
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P10 SMP — Pasang Arduino IDE & Kedipkan LED Pertamamu", "blok": [["h1", "Panduan Pengajar — P10 SMP: Pasang Arduino IDE & Kedipkan LED Pertamamu"], ["p", "Jum'at, 23 Oktober 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P10_SMP_InspiraLabs.md. Langkah instalasi detail: kurikulum/panduan-instalasi/ (Panduan 1–3)."], ["kutip", "Prinsip hari ini: **belajar sambil bermain.** Instalasi dibuat seperti game 3 level + BOS. Waktu menunggu unduhan diisi game Tebak Komponen. Siswa **tidak menulis kode**: mereka memasang aplikasi, menekan Upload, dan paling banyak mengganti angka di challenge. Target utamanya bukan \"paham semua\", tapi **penasaran dan ingin lanjut**."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Punya laptop yang lulus 3 level: Arduino IDE terbuka, **ESP32 Dev Module** ada di daftar board, library DHT *installed*."], ["p", "2. Meng-upload P10_1_Blink.ino sendiri dan menunjukkan LED breadboard berkedip **bareng** lampu biru board."], ["p", "3. Bisa menjawab: \"Arduino IDE itu gunanya apa?\" (menerjemahkan & mengirim program ke ESP32)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Jalankan SCRIPT_P10_SMP.gs → folder **Kode** + Google Form post-test ada di Drive. Pasang link folder Kode & tombol \"Post Test Pertemuan 10\" di Linktree."], ["li", "☐ Unduh installer **Arduino IDE 2.3.10** dari arduino.cc: Windows (.exe), Mac Apple Silicon (arm64.dmg), Mac Intel (64bit.dmg). Salin ke 2–3 flashdisk."], ["li", "☐ Siapkan **2–3 laptop cadangan** yang sudah lulus semua level + sudah pernah upload Blink. Ini penyelamat kalau unduhan board ESP32 di kelas lambat."], ["li", "☐ Tes kecepatan WiFi kelas. Lambat (unduh 100 MB > 3 menit)? Putuskan dari sekarang: semua kelompok memilih board ESP32 versi **2.0.17** (±0,8 GB) di Level 2."], ["li", "☐ Tanyakan ke sekolah: laptop sekolah butuh password Administrator untuk instal? Kalau ya, siapkan orang yang memegang password atau pakai opsi **Only for me**."], ["li", "☐ Cek driver USB di laptop cadangan (port ESP32 muncul). Siapkan 2–3 **kabel USB data cadangan**, tandai dengan selotip warna supaya tidak tertukar dengan kabel charger."], ["li", "☐ Siapkan \"meja Tebak Komponen\": ESP32, breadboard, LED, resistor, kabel jumper, DHT22, kabel USB data + kabel charger, power bank."], ["li", "☐ (Opsional, cara cepat) Kalau banyak laptop Windows dan internet buruk: setelah Arduino IDE terpasang di laptop siswa, salin folder C:\\Users\\<nama>\\AppData\\Local\\Arduino15 dari laptop cadangan ke laptop siswa (Mac: ~/Library/Arduino15, sesama Mac). Board ESP32 langsung terpasang tanpa unduh. **Tes dulu di 1 laptop H-1.**"], ["li", "☐ **Server kelas** untuk post-test: py tools/server_kelas.py --tes smp-10, coba kirim 1 jawaban dari HP/laptop lain (langkah lengkap: kurikulum/smp/README.md, bagian \"Server kelas\")."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Nyalakan proyektor, buka slide. Buka Arduino IDE di laptop tutor untuk demo."], ["li", "☐ Tulis di papan:"], ["li", "Alamat board: https://espressif.github.io/arduino-esp32/package_esp32_index.json"], ["li", "Tabel **Level 1 · Level 2 · Level 3 · BOS** dengan kolom per Device ID (untuk dicentang)"], ["li", "\"Cabut USB sebelum memindah kabel!\""], ["li", "☐ Siapkan kertas/spreadsheet pencatat poin (kolom: nama siswa, +2, Easy, Medium, Hard)."], ["h3", "Isi kit per kelompok/individu"], ["p", "Laptop · ESP32 + kabel USB data · breadboard dengan rakitan LED P9 (LED + resistor **220Ω**) · kertas & pensil untuk Pencatat."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–4", "1–6", "Pembuka, cover, pemantik, agenda, peran, poin", "Minta laptop dinyalakan dulu (booting lama). Tampung tebakan pemantik (+2 per penebak). Tunjuk peran"], ["4–10", "7–9", "IoT di sekitar kita, kenalan tim, Arduino IDE = penerjemah", "Angkat komponen satu per satu. Jawab pemantik di slide 9"], ["10–20", "10–11", "Level 1 pasang Arduino IDE", "Edarkan flashdisk. Keliling: tombol Yes/Install/Finish. Centang Level 1 di papan"], ["20–24", "12", "Level 2 mulai unduh board ESP32", "Demo di proyektor: Preferences → tempel alamat → Boards Manager → INSTALL"], ["24–34", "13–14", "Game Tebak Komponen + Tur Arduino IDE", "Main sambil unduhan berjalan. +2 tiap jawaban benar"], ["34–42", "15–17", "Level 3 library DHT + Verify, Tanya Jawab, 🟢 Easy", "Verify pertama 2–5 menit: isi dengan Tanya Jawab. Cek 3 bukti Easy (+5)"], ["42–54", "18–20", "Misteri D2, BOS upload Blink, tips upload gagal", "Ganti peran. Level 2 belum selesai? Kelompok itu pakai laptop cadangan"], ["54–56", "21", "Tanya Jawab", "+2 per penjawab"], ["56–62", "22–23", "🟡 Medium + 🔴 Hard", "Medium dulu. Hard untuk yang cepat. Pastikan Hard dikembalikan ke D2"], ["62–63", "24", "Peta petualangan", "Teaser P11"], ["63–70", "25–26", "Post-test", "Sendiri-sendiri, HP/laptop. Tutup dengan info P11"]]], ["h2", "4. Kalimat kunci (boleh dibacakan)"], ["li", "**Pembuka:** \"Hari ini kita main game 3 level. Hadiahnya: ESP32 kalian menjalankan program pertamanya.\""], ["li", "**IoT:** \"IoT itu benda biasa yang dikasih otak kecil dan internet. Lampu parkir mall, smartwatch, CCTV. Sebentar lagi kalian bikin sendiri.\""], ["li", "**Penerjemah:** \"ESP32 cuma ngerti 0 dan 1. Arduino IDE itu penerjemahnya. Verify = terjemahkan dan periksa. Upload = terjemahkan dan kirim.\""], ["li", "**Kamus board:** \"Arduino IDE dari pabriknya cuma kenal papan buatan Arduino. ESP32 buatan perusahaan lain, jadi kita pasang kamusnya dulu.\""], ["li", "**Sambil menunggu:** \"Unduhannya besar, kayak download game. Sambil nunggu, kita main tebak-tebakan.\""], ["li", "**Saat berhasil:** \"Lampu biru dan LED kedip bareng? Selamat, kalian baru saja memprogram mikrokontroler!\""], ["h2", "5. Gaya mengajar: belajar sambil bermain"], ["li", "**Rayakan setiap level.** Centang besar di papan + sebut nama kelompok keras-keras. Anak SMP sangat termotivasi oleh \"progress bar\" yang terlihat."], ["li", "**Jangan ceramah lebih dari 5–6 menit** tanpa kegiatan. Slide 7–9 cukup ±6 menit, lalu langsung tangan di laptop."], ["li", "**Waktu menunggu = waktu main.** Saat unduhan berjalan, jangan biarkan siswa menatap progress bar: jalankan Tebak Komponen dan Tur Arduino IDE."], ["li", "**Kesalahan itu bagian dari game.** Kalau upload gagal, katakan: \"Bagus, kita dapat misi tambahan. Baca tulisan merahnya, cocokkan dengan slide Tips Engineer.\""], ["li", "**Sinyal diam:** sepakati satu sinyal (tutor angkat tangan → semua angkat tangan & lepas mouse) sebelum memberi instruksi baru."], ["li", "**Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 42). Kelompok berempat: beri tugas ke yang menganggur (\"kamu Pengecek, bacakan langkah Level 2 keras-keras\")."], ["li", "**Peserta individu** (smp-01–smp-05): pegang semua peran. Pasangkan dua individu sebagai **\"teman cek\"** yang saling membacakan langkah."], ["li", "**Kelompok yang selesai duluan** jadi \"asisten instalasi\": membantu kelompok lain **dengan menunjuk dan bertanya**, bukan mengambil alih mouse."], ["h2", "6. Sistem poin & cara mencatat"], ["tabel", [["Kegiatan", "Poin", "Untuk siapa"], ["Bertanya / menjawab Tanya Jawab, pemantik, Tebak Komponen, Tur Arduino IDE", "+2", "Siswa yang bicara (benar atau salah, yang penting berani; Tebak Komponen & Tur: yang benar)"], ["🟢 Easy", "+5", "Setiap anggota kelompok"], ["🟡 Medium", "+10", "Setiap anggota kelompok"], ["🔴 Hard", "+15", "Setiap anggota kelompok"]]], ["li", "Catat +2 dengan turus di kertas absen saat itu juga (jangan menunda sampai akhir kelas). Pencatat kelompok boleh membantu mencatat poin kelompoknya."], ["li", "Gilir yang menjawab: \"Yang sudah dapat dua kali, gantian dulu ya.\" Tujuannya semua anak berani bicara minimal sekali."], ["li", "Rekap ke gradebook setelah kelas supaya leaderboard ter-update."], ["li", "**Tidak ada PR.** Instalasi yang belum selesai diselesaikan tutor, bukan dibawa pulang siswa."], ["h2", "7. Titik cek pemahaman"], ["li", "Setelah slide 9: \"Verify atau Upload yang mengirim program ke ESP32?\" (Upload)."], ["li", "Setelah slide 10: \"Level 2 itu pasang apa?\" (board ESP32 / kamus ESP32)."], ["li", "Setelah slide 19: **jempol**: \"Jempol atas kalau lampu biru dan LED kalian kedip bareng.\" Yang jempol bawah → datangi duluan."], ["li", "Sebelum post-test: \"Lampu biru kedip, LED diam. Salah program atau rakitan?\" (rakitan)."], ["h2", "8. Kesalahan yang sering terjadi & cara membantu"], ["p", "Bantu dengan **pertanyaan**, bukan langsung mengambil mouse/kabel."], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Mac: salah pilih file .dmg (Apple Silicon vs Intel), aplikasi tidak mau dibuka", "\"Di About This Mac tertulis Chip Apple atau Intel? File yang kamu pakai yang mana?\""], ["Memilih \"Arduino ESP32 Boards by Arduino\"", "\"Baca tulisan kecil di bawah judulnya: by siapa?\""], ["Alamat board salah ketik / ada spasi", "\"Bandingkan huruf demi huruf dengan papan. Lebih aman salin-tempel.\""], ["INSTALL WITHOUT DEPENDENCIES di Level 3", "\"Tombol mana yang kamu klik tadi? Coba cari Adafruit Unified Sensor.\""], ["Lupa memilih board/port sebelum Upload", "\"Kotak Select Board di atas tulisannya apa?\""], ["Lupa cabut USB saat memindah kabel", "\"Apa yang tertulis di papan? Sudah dilakukan?\""], ["LED terbalik / dua kaki LED satu baris", "\"Kaki panjang LED harus ke mana? Ikuti jalan listriknya dari D2 sampai GND.\""], ["Medium: titik koma atau kurung ikut terhapus (error merah)", "\"Bandingkan baris yang kamu ubah dengan baris lain. Ada yang hilang?\""]]], ["h2", "9. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Installer Windows tidak mau jalan", "SmartScreen", "More info → Run anyway (file dari arduino.cc)"], ["Mac: \"cannot be opened because the developer cannot be verified\"", "Gatekeeper", "System Settings → Privacy & Security → Open Anyway"], ["Unduhan board ESP32 sangat lambat", "WiFi kelas", "Ganti ke versi 2.0.17; atau pindah kelompok ke laptop cadangan untuk BOS"], ["*Error downloading* di tengah unduhan", "Internet putus", "Klik INSTALL lagi (unduhan dilanjutkan)"], ["\"ESP32 Dev Module\" tidak ada di daftar", "Level 2 belum selesai", "Cek Boards Manager: harus tertulis *installed*"], ["DHT.h: No such file or directory", "Library DHT belum terpasang", "Library Manager → DHT sensor library by Adafruit → INSTALL ALL"], ["Adafruit_Sensor.h: No such file", "Dependency tidak ikut", "Library Manager → Adafruit Unified Sensor → INSTALL"], ["Verify pertama 2–5 menit", "Compile pertama ESP32", "Normal. Isi dengan Tanya Jawab"], ["Port tidak muncul", "Kabel charger / driver", "Ganti kabel data bertanda. Masih tidak? Driver CP210x/CH340 (Panduan 2 bagian E)"], ["Failed to connect to ESP32", "Board belum masuk mode upload", "Tahan BOOT saat Connecting...., lepas saat persen muncul"], ["Upload gagal terus walau BOOT ditahan", "Kecepatan upload", "Tools → Upload Speed → 115200"], ["Access denied / port sibuk", "Serial Monitor masih terbuka", "Tutup Serial Monitor, upload lagi"], ["Tulisan acak ⸮⸮⸮", "Baud beda", "Pilih 115200 baud di Serial Monitor"], ["Lampu biru kedip, LED diam", "Rakitan LED", "LED terbalik / satu baris / kabel bukan di D2"], ["Halaman server kelas tidak terbuka dari laptop siswa", "Profil WiFi masih Public / WiFi memblokir antar-perangkat", "Ubah profil WiFi laptop pengajar jadi Private, izinkan Python di Firewall; atau router sendiri yang tetap tersambung internet"]]], ["h2", "10. Keselamatan"], ["li", "Tegangan kit rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja."], ["li", "Aturan nomor satu: **cabut USB sebelum memindah kabel**."], ["li", "Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng): bisa korsleting."], ["li", "Unduh aplikasi hanya dari **arduino.cc** atau flashdisk tutor. Ajarkan: \"Jangan instal dari link pendek yang tidak jelas.\""], ["li", "Minuman jauh dari meja laptop dan rakitan."], ["h2", "11. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Medium & Hard; lalu jadi \"asisten instalasi\" untuk kelompok lain (hanya menunjuk & bertanya). Bonus: \"Coba buat LED kedip dengan pola detak jantung: cepat-cepat-lambat. Angka mana yang harus diubah?\""], ["li", "**Siswa kesulitan:** pecah jadi satu langkah per instruksi (\"Klik File. Sudah? Sekarang Preferences.\"). Target minimum: Arduino IDE terpasang + LED berkedip (boleh di laptop cadangan). Medium/Hard boleh dilewati."], ["h2", "12. Penilaian"], ["li", "**Keaktifan:** +2 per tanya/jawab (pemantik, Tanya Jawab, Tebak Komponen, Tur Arduino IDE)."], ["li", "**Challenge** (leaderboard, per anggota kelompok):"], ["li", "🟢 Easy +5 = 3 bukti: ESP32 Dev Module ada, library DHT *installed*, Done compiling."], ["li", "🟡 Medium +10 = LED kedip cepat (delay(100)) **dan** lambat (delay(3000)) ditunjukkan ke tutor."], ["li", "🔴 Hard +15 = LED kedip di D18, bisa menjelaskan kenapa lampu biru diam, **sudah dikembalikan** ke D2/angka 2."], ["li", "**Post-test:** 5 soal, individu, lewat **server kelas** (--tes smp-10, nilai otomatis jadi dist/posttest/smp-10.xlsx; Google Form di Linktree sebagai cadangan). Kunci: 1B 2A 3C 4D 5B."], ["li", "**Tidak ada PR / tugas rumah.**"], ["h2", "13. Penutup"], ["li", "\"Rakitan LED jangan dibongkar. Minggu depan ESP32 kita dapat 'indera' pertamanya: sensor suhu, plus grafik yang bisa kalian tiup!\""], ["li", "Setelah kelas (tutor): selesaikan instalasi laptop yang belum lulus Level 2/3 (catat dari tabel di papan), supaya P11 bisa langsung praktek. Rekap poin ke gradebook."]]};

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
