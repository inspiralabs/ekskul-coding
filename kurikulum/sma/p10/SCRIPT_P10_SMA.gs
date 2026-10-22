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
  "C3_P10_Hard_PesanMorse/C3_P10_Hard_PesanMorse.ino": "// Challenge Hard P10 - Pesan Rahasia: LED biru mengirim pesan dalam sandi Morse.\n// Titik = kedip pendek, garis = kedip panjang.\n\n#define LED_PIN 2\n\n// ===== BOLEH DIUBAH =====\nconst char* PESAN = \"SOS\";   // huruf A-Z, angka 0-9, dan spasi\nint TITIK = 250;             // lama 1 titik (milidetik). Garis = 3x titik\n// ========================\n\nconst char* HURUF[] = {\".-\", \"-...\", \"-.-.\", \"-..\", \".\", \"..-.\", \"--.\", \"....\", \"..\", \".---\",\n                       \"-.-\", \".-..\", \"--\", \"-.\", \"---\", \".--.\", \"--.-\", \".-.\", \"...\", \"-\",\n                       \"..-\", \"...-\", \".--\", \"-..-\", \"-.--\", \"--..\"};\nconst char* ANGKA[] = {\"-----\", \".----\", \"..---\", \"...--\", \"....-\",\n                       \".....\", \"-....\", \"--...\", \"---..\", \"----.\"};\n\nvoid kedip(int lama) {\n  digitalWrite(LED_PIN, HIGH);\n  delay(lama);\n  digitalWrite(LED_PIN, LOW);\n  delay(TITIK);                       // jeda antar kedip = 1 titik\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  Serial.println();\n  Serial.printf(\"Mengirim pesan: %s\\n\", PESAN);\n\n  for (int i = 0; PESAN[i] != '\\0'; i++) {\n    char c = toupper(PESAN[i]);\n    const char* kode = nullptr;\n    if (c >= 'A' && c <= 'Z') kode = HURUF[c - 'A'];\n    if (c >= '0' && c <= '9') kode = ANGKA[c - '0'];\n\n    if (kode == nullptr) {            // spasi / tanda baca = jeda antar kata\n      Serial.println(\"(spasi)\");\n      delay(TITIK * 4);\n      continue;\n    }\n\n    Serial.printf(\"%c = %s\\n\", c, kode);\n    for (int j = 0; kode[j] != '\\0'; j++) {\n      kedip(kode[j] == '.' ? TITIK : TITIK * 3);\n    }\n    delay(TITIK * 2);                 // jeda antar huruf (total 3 titik)\n  }\n\n  delay(TITIK * 10);                  // istirahat sebelum pesan diulang\n}\n",
  "P10_1_KedipPertama/P10_1_KedipPertama.ino": "// P10 - Kedip Pertama: LED biru bawaan ESP32 berkedip.\n// Tidak perlu merakit apa pun. Cukup colok USB -> Upload.\n\n#define LED_PIN 2        // LED biru bawaan ESP32 DevKit V1 ada di GPIO 2\n\n// ===== BOLEH DIUBAH =====\nint lamaNyala = 500;     // berapa milidetik LED menyala (1000 = 1 detik)\nint lamaMati  = 500;     // berapa milidetik LED mati\n// ========================\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  Serial.println();\n  Serial.println(\"Halo! ESP32 siap berkedip.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  Serial.println(\"Nyala\");\n  delay(lamaNyala);\n\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Mati\");\n  delay(lamaMati);\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 10 - SMA",
  "soal": [
    {
      "q": "1. Bagian ESP32 yang berfungsi sebagai \"otak\" yang menjalankan program adalah…",
      "kode": "",
      "opsi": [
        "Port USB",
        "Chip ESP32 (kotak logam)",
        "Tombol EN",
        "LED merah"
      ],
      "kunci": 1
    },
    {
      "q": "2. LED merah ESP32 menyala, tapi port tidak muncul di Arduino IDE. Penyebab paling sering adalah…",
      "kode": "",
      "opsi": [
        "Library DHT belum dipasang",
        "Baud rate Serial Monitor salah",
        "Kabel USB yang dipakai hanya kabel charger",
        "WiFi sedang mati"
      ],
      "kunci": 2
    },
    {
      "q": "3. Di kode Kedip Pertama kamu menulis lamaNyala = 2000;. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "LED berkedip 2000 kali lalu berhenti",
        "LED mati selamanya",
        "ESP32 restart setiap 2 detik",
        "LED menyala 2 detik setiap kali berkedip"
      ],
      "kunci": 3
    },
    {
      "q": "4. Supaya Arduino IDE bisa memprogram ESP32, yang dipasang di Boards Manager adalah…",
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
      "q": "5. Upload macet di tulisan Connecting..... lalu gagal. Yang sebaiknya dilakukan adalah…",
      "kode": "",
      "opsi": [
        "Mengganti baud rate Serial Monitor ke 9600",
        "Menahan tombol BOOT di ESP32 sampai muncul Writing at…",
        "Memasang library WiFi dari Library Manager",
        "Mengganti nama folder program"
      ],
      "kunci": 1
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P10 SMA — Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop", "blok": [["h1", "Panduan Pengajar — P10 SMA: Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop"], ["p", "Sabtu, 17 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan & kunci: sumber/Materi_Ajar_P10_SMA_InspiraLabs.md (KHUSUS TUTOR). Langkah instalasi detail: kurikulum/panduan-instalasi/ (Panduan 1–3)."], ["kutip", "Prinsip hari ini: **penasaran dulu, teori belakangan.** Tidak ada rakitan. Siswa mengenal ESP32, memasang \"bengkel\" di laptop, lalu meng-upload program jadi dan mengutak-atik angkanya. Target utama: **laptop siap untuk P11** dan siswa **ingin lanjut**. Tidak ada PR."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Siswa menyebut 3 contoh IoT di sekitarnya dan menunjuk 5 bagian ESP32 (chip, antena WiFi, port USB, tombol BOOT/EN, LED biru)."], ["p", "2. Laptop lulus 3 level: Arduino IDE terbuka, **ESP32 Dev Module** ada di daftar board, **DHT sensor library** *installed*, port ESP32 muncul."], ["p", "3. Siswa meng-upload P10_1_KedipPertama.ino sendiri dan mengubah kecepatan kedip LED biru lewat 2 angka."], ["h2", "Persiapan H-1"], ["li", "☐ Jalankan SCRIPT_P10_SMA.gs; cek folder **Kode** di Drive berisi P10_1_KedipPertama, C3_P10_Hard_PesanMorse (masing-masing 1 file .ino) + BACA_DULU.txt. Link Linktree \"Kode P10\" & \"Post Test Pertemuan 10\" aktif."], ["li", "☐ **Flashdisk \"Bengkel IoT\"** (2–3 buah): installer Arduino IDE 2.3.10 (Windows .exe, Mac arm64.dmg & 64bit.dmg), driver CP210x & CH340 (Windows & Mac), 3 PDF Panduan Instalasi."], ["li", "☐ **Hindari unduhan ±2 GB di kelas** (cara cepat, opsional): setelah Arduino IDE terpasang di laptop siswa, salin folder Arduino15 dari laptop cadangan yang sudah lulus 3 level (Windows C:\\Users\\<nama>\\AppData\\Local\\Arduino15, Mac ~/Library/Arduino15, **sesama OS**). Board ESP32 langsung terpasang (library DHT tetap lewat Level 3, ukurannya kecil; library ada di Documents/Arduino/libraries, bukan di Arduino15). **Uji dulu di 1 laptop H-1.** Tidak sempat? Putuskan sejak awal semua memilih board versi **2.0.17** (±0,8 GB)."], ["li", "☐ 1–2 **laptop cadangan** yang sudah lulus 3 level dan pernah upload P10_1_KedipPertama."], ["li", "☐ Data laptop siswa: OS, 64-bit?, sisa disk ≥ 9 GB, password admin/Mac. Laptop 32-bit/Chromebook → berpasangan dengan teman atau pakai laptop cadangan."], ["li", "☐ Tiap ESP32: tempel **stiker Device ID** (sma-01 … sma-06, dipakai mulai P11). Upload P10_1_KedipPertama → LED biru GPIO 2 harus kedip (klon tanpa LED biru → ganti papan)."], ["li", "☐ Kabel USB **data** per siswa, diberi selotip \"DATA\". 1 power bank untuk demo slide 19."], ["li", "☐ **Alat demo jadi**: rakitan DHT22 + relay + kipas dengan firmware proyek, dashboard tutor siap di proyektor, PIN fan siap. Ini \"wow moment\" slide 8."], ["li", "☐ 6 foto benda untuk game slide 13 (rice cooker biasa, smart TV, palang parkir otomatis, kalkulator, timbangan Bluetooth, pompa air otomatis). Sticky note hijau & merah."], ["h2", "15 menit sebelum kelas"], ["li", "Minta siswa menyalakan laptop dulu (booting & update Windows bisa lama)."], ["li", "Tulis di papan: alamat board https://espressif.github.io/arduino-esp32/package_esp32_index.json dan tabel **Level 1 · Level 2 · Level 3 · Kedip** per Device ID untuk dicentang."], ["li", "Proyektor menampilkan slide P10; Arduino IDE terbuka di laptop tutor untuk diperagakan."], ["li", "Siapkan lembar/spreadsheet poin (nama, +2, Easy, Medium, Hard)."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–5", "1–5", "Cover, pemantik, agenda, cara dapat poin", "Tampung 2–3 tebakan (+2), jangan dijawab dulu"], ["5–15", "6–9", "IoT, kenalan ESP32, demo alat jadi, Tanya Jawab", "Edarkan ESP32; minta siswa menunjuk antena & tombol BOOT"], ["15–25", "10–12", "Level 1 Arduino IDE, Level 2 mulai unduh board", "Peragakan di proyektor, tunggu ±80% hijau baru lanjut"], ["25–35", "13", "Game Tebak Benda IoT", "Selama unduhan berjalan. +2 tiap jawaban"], ["35–45", "14–16", "Level 3 library DHT, cek port, Tanya Jawab", "Port tidak muncul → kabel DATA dulu, baru driver"], ["45–52", "17–20", "Upload Kedip Pertama, utak-atik angka, demo power bank, Tanya Jawab", "Tukar peran Operator ↔ Pengecek"], ["52–62", "21–23", "🟢 Easy, 🟡 Medium, 🔴 Hard", "Yang selesai duluan langsung lanjut, jangan ditahan"], ["62–64", "24", "Peta petualangan", "Teaser P11: rakit alat + data ke dashboard"], ["64–70", "25–26", "Post-test + penutup", "Catat laptop yang belum lulus 3 level"]]], ["p", "Waktu molor? Urutan yang boleh dipangkas: (1) Hard, (2) Medium, (3) game dipersingkat. **Jangan** pangkas Level 1–3: itu syarat P11. Laptop yang belum lulus dikerjakan di 15 menit awal P11, **bukan PR**."], ["h2", "Kalimat kunci"], ["li", "\"ESP32 itu otak. Sensor itu indra. Internet itu mulutnya buat ngobrol.\""], ["li", "\"Arduino IDE dari pabrik cuma kenal papan Arduino. ESP32 buatan Espressif, jadi kita pasang 'kamus'-nya dulu.\""], ["li", "\"Kalian nggak disuruh nulis kode dari nol. Engineer beneran juga mulai dari kode jadi, lalu diutak-atik.\""], ["li", "\"Upload itu memindahkan program ke otak ESP32. Laptop dicabut pun, programnya tetap jalan.\""], ["h2", "Cara memandu instalasi"], ["li", "**Sistem lampu**: sticky note **hijau** = level selesai, **merah** = butuh bantuan. Tutor hanya mendatangi yang merah; tidak perlu siswa berteriak."], ["li", "**Satu langkah, satu layar**: tutor klik di proyektor, tunggu mayoritas hijau, baru lanjut. Jangan menjelaskan 3 langkah sekaligus."], ["li", "**Asisten muda**: siswa yang hijau duluan membantu teman dengan **bertanya**, bukan mengambil alih mouse. Bantuan yang berhasil boleh dihitung +2."], ["li", "**Error = materi**: error menarik (port tidak muncul, Failed to connect) tampilkan di proyektor, tanya kelas \"Menurut kalian kenapa?\" (+2)."], ["li", "**Waktu menunggu = waktu main**: jangan biarkan siswa menatap progress bar; jalankan game slide 13."], ["h2", "Manajemen kelas (usia 15–18)"], ["li", "**Berdua (sma-04/05/06):** Operator memegang mouse, Pengecek membacakan langkah dari slide & memasang sticky note. Tukar di Topik 3. Yang diam ditanya langsung: \"Coba kamu yang tunjuk tombol Upload.\""], ["li", "**Individu (sma-01/02/03):** baca langkah pelan-pelan; tetangga boleh jadi Pengecek."], ["li", "Remaja cepat bosan menunggu. Yang sudah hijau langsung lanjut ke level berikut atau challenge."], ["li", "HP boleh untuk foto/stopwatch, bukan media sosial selama praktik."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya / minta tunjukkan", "Jawaban yang dicari"], ["Setelah slide 7", "\"Tunjukkan antena WiFi dan tombol BOOT.\"", "Garis zig-zag; tombol bertulisan BOOT"], ["Setelah Level 2", "\"Kenapa harus pasang board ESP32 dulu?\"", "Arduino IDE belum kenal ESP32 (kamus)"], ["Setelah upload", "\"Angka berapa yang membuat LED nyala 1 detik?\"", "1000"], ["Slide 20", "\"Kenapa LED kelihatan nyala terus?\"", "Kedipnya terlalu cepat untuk mata"]]], ["h2", "Kesalahan umum & cara membimbing (jangan langsung beri jawaban)"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Memilih \"Arduino ESP32 Boards\"", "\"Di slide, board-nya buatan siapa? Espressif atau Arduino?\""], ["Port tidak muncul", "\"LED merah nyala berarti listrik masuk. Data lewat apa?\""], ["Upload ke port Bluetooth (COM3/COM4)", "\"Cabut ESP32. Port mana yang hilang dari daftar?\""], ["lamaNyala = 2.000 / tanda kutip terhapus", "\"Bandingkan barismu dengan baris di slide. Ada tanda yang beda?\""], ["Pesan Serial (Medium) tidak terlihat", "\"Pesan itu ditulis kapan? Tombol apa yang membuat ESP32 mulai dari awal?\" (EN)"], ["Morse terlalu cepat ditebak", "\"Angka mana yang mengatur lama satu titik?\""]]], ["p", "Kalau setelah **2 pertanyaan** siswa masih buntu, tunjukkan **lokasinya** (\"cek baris ke-7\"), bukan perbaikannya."], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Penyebab", "Tindakan"], ["Installer Windows diblokir \"Windows protected your PC\"", "SmartScreen", "More info → Run anyway (hanya file dari arduino.cc/flashdisk tutor)"], ["Mac: \"cannot be opened… developer cannot be verified\"", "Gatekeeper", "System Settings → Privacy & Security → Open Anyway"], ["Aplikasi Mac tidak mau terbuka", "Salah file Apple Silicon/Intel", "Hapus, pasang file yang cocok"], ["Unduhan board putus / Error downloading", "Internet", "Klik INSTALL lagi (tidak mulai dari nol) atau pilih versi 2.0.17"], ["\"ESP32 Dev Module\" tidak ada", "Board belum terpasang", "Ulangi Level 2"], ["Port tidak muncul", "Kabel charger / driver CP210x/CH340", "Kabel DATA → port USB lain → driver dari flashdisk"], ["Connecting...... → Failed to connect", "ESP32 tidak masuk mode upload", "Tahan BOOT saat Connecting, lepas saat Writing at"], ["Gagal di tengah upload / timed out", "Kecepatan upload", "Tools → Upload Speed → 115200"], ["Multiple libraries were found for \"WiFi.h\"", "Library \"WiFi\" terpasang", "Library Manager → WiFi → REMOVE"], ["Huruf acak ⸮⸮⸮ di Serial Monitor", "Baud salah", "Pilih 115200"], ["Upload sukses, LED biru diam", "Papan tanpa LED GPIO 2", "Ganti papan; sementara cek tulisan Nyala/Mati di Serial Monitor"], ["Laptop tetap gagal > 10 menit", "Disk penuh / 32-bit / izin admin", "Pindah ke laptop cadangan atau berpasangan; catat untuk P11"]]], ["h2", "Diferensiasi"], ["li", "**Cepat selesai:** jadi asisten muda; coba lamaNyala = 5, lamaMati = 45 dan jelaskan kenapa LED terlihat lebih redup; kerjakan Hard dengan kata lebih panjang."], ["li", "**Kesulitan:** fokus lulus 3 level + Kedip Pertama (syarat P11). Medium & Hard boleh dilewati."], ["li", "**Sangat tertarik teori:** ceritakan bahwa lampu LED diredupkan dengan kedip super cepat (PWM), dan bahwa ESP32 punya 2 inti prosesor."], ["h2", "Penilaian"], ["li", "**Wajib (syarat P11):** lulus Level 1–3 + Kedip Pertama ter-upload. Catat per Device ID di tabel papan."], ["li", "**Keaktifan:** +2 setiap bertanya/menjawab (pemantik, Tanya Jawab, game)."], ["li", "**Challenge:** Easy **+5**, Medium **+10**, Hard **+15** (pasangan: untuk kedua anggota). Kunci di KHUSUS TUTOR Materi Ajar."], ["li", "**Post-test:** 5 soal Google Form, kunci **B, C, D, A, B**."], ["h2", "Penutup"], ["li", "Tidak ada PR. Laptop yang belum lulus 3 level dicatat tutor dan diselesaikan di 15 menit awal P11."], ["li", "Pengumuman P11: rakit DHT22 + relay + kipas dan kirim datanya ke dashboard kelompok. Bawa laptop yang sama."], ["li", "Setelah kelas (tutor): kumpulkan ESP32 ber-stiker; jalankan py tools/kelompok.py paket untuk zip P11; siapkan kit rakitan (DHT22, relay, kipas DC 5V, breadboard, jumper) per Device ID."]]};

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
