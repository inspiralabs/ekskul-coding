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
  "P10_1_Blink/P10_1_Blink.ino": "// ============================================================\n// P10 SMP — Program Jadi 1: Blink LED (tes upload)\n// TIDAK PERLU MENULIS KODE. Buka file ini di Arduino IDE, lalu klik Upload (panah ->).\n// Rakitan: D2 -> resistor 220 ohm -> kaki PANJANG LED, kaki pendek LED -> GND.\n// Kalau berhasil: LED di breadboard DAN lampu biru di board ESP32 berkedip tiap 1 detik.\n// ============================================================\n\n#define LED_PIN 2   // LED dicolok ke pin D2 (sama dengan lampu biru bawaan board)\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);     // pin 2 = keluaran\n  Serial.begin(115200);         // buka \"jalur ngobrol\" ke laptop\n  Serial.println(\"ESP32 siap! Upload berhasil.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);  // nyala\n  Serial.println(\"LED nyala\");\n  delay(1000);                  // tunggu 1 detik\n\n  digitalWrite(LED_PIN, LOW);   // mati\n  Serial.println(\"LED mati\");\n  delay(1000);\n}\n",
  "P10_2_CekDHT22/P10_2_CekDHT22.ino": "// ============================================================\n// P10 SMP — Program Jadi 2: Cek Rakitan DHT22\n// TIDAK PERLU MENULIS KODE. Buka di Arduino IDE, Upload, buka Serial Monitor.\n// Kabel DHT22: + ke 3V3, out ke D4, - ke GND. Muncul angka suhu = rakitan benar.\n// Butuh library \"DHT sensor library\" by Adafruit (lihat Panduan Instalasi Library).\n// ============================================================\n#include <DHT.h>\n\n#define DHT_PIN 4               // kaki \"out\" DHT22 di pin D4\n\nDHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();                  // nyalakan sensor\n  Serial.println(\"Sensor siap!\");\n}\n\nvoid loop() {\n  delay(2000);                  // DHT22 butuh jeda minimal 2 detik\n\n  float suhu = dht.readTemperature();   // baca suhu (°C)\n  float lembap = dht.readHumidity();    // baca kelembapan (%)\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca sensor! Cek kabel.\");\n    return;                     // batalkan putaran ini, ulang dari awal loop\n  }\n\n  Serial.print(\"Suhu: \");\n  Serial.print(suhu);\n  Serial.print(\" C | Kelembapan: \");\n  Serial.print(lembap);\n  Serial.println(\" %\");\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
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
      "q": "5. Serial Monitor menulis Gagal baca sensor! Cek kabel. terus-menerus. Langkah pertama yang tepat adalah…",
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

const PANDUAN = {"judul": "Panduan Pengajar P10 SMP — Upload Program Jadi & Rakit Sensor DHT22", "blok": [["h1", "Panduan Pengajar — P10 SMP: Upload Program Jadi & Rakit Sensor DHT22"], ["p", "Jum'at, 23 Oktober 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P10_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: siswa **tidak menulis kode**. Mereka menyalin program jadi, menekan Upload, dan merakit. Satu-satunya perubahan kode adalah **satu angka** di Challenge Medium."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Meng-upload P10_1_Blink.ino sendiri dan menunjukkan LED breadboard berkedip **bareng** lampu biru board."], ["p", "2. Merakit DHT22 (+ → 3V3, out → D4, − → GND) dan menunjukkan angka suhu di Serial Monitor yang **naik saat ditiup/digenggam**."], ["p", "3. Bisa menjawab: \"Kalau lampu biru kedip tapi LED diam, salahnya di mana?\" (jawaban: rakitan)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Jalankan SCRIPT_P10_SMP.gs → folder **Kode** ada di Drive, link di Linktree."], ["li", "☐ Di **setiap laptop**: pasang **Arduino IDE 2**, board **esp32 by Espressif Systems**, library **DHT sensor library** (3 Panduan Instalasi di kurikulum/panduan-instalasi/, versi Windows & Mac). Buka P10_1_Blink.ino → pilih **ESP32 Dev Module** → **Verify (✓)** sekali. Unduhan board ±2 GB (ruang kosong ±9 GB) + compile pertama 2–5 menit: jangan sampai terjadi di kelas."], ["li", "☐ **Upload tes** Blink ke satu board cadangan → pastikan driver CP210x/CH340 terpasang di tiap laptop (port muncul)."], ["li", "☐ Siapkan 2–3 **kabel USB data cadangan**. Tandai kabel data dengan selotip warna supaya tidak tertukar dengan kabel charger."], ["li", "☐ Siapkan rakitan \"rusak\" untuk Challenge Hard (3 kesalahan **aman**: out di D5, out di baris breadboard yang beda, kabel − setengah masuk/jumper putus). **Jangan** menukar + dan −. Bisa juga ambil acak dari ekskulcoding.inspiralabs.id/sabotase/ (lihat *Cara main Kartu Sabotase*)."], ["li", "☐ Charge power bank (dipakai mulai P12, tapi bagus untuk demo \"program tetap tersimpan\")."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Nyalakan proyektor, buka slide."], ["li", "☐ Bagikan kit per meja (lihat daftar di bawah) dan hitung isinya."], ["li", "☐ Siapkan multimeter: mode DC volt 20V."], ["li", "☐ Tulis di papan: \"Cabut USB sebelum memindah kabel!\""], ["h3", "Isi kit per kelompok/individu"], ["p", "ESP32 + kabel USB data · breadboard dengan rakitan LED P9 (LED + resistor **220Ω**) · DHT22 · 3 jumper (merah, kuning, hitam) + 2 cadangan · kertas & pensil untuk Pencatat."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1", "Pembuka", "Bagikan kit, minta siswa menyalakan laptop & membuka Arduino IDE"], ["5–8", "2–5", "Cover, pemantik, agenda, peran", "Tampung 2–3 tebakan pemantik. Tunjuk peran per kelompok"], ["8–14", "6–8", "Misteri D2, upload, 4 langkah", "Tunjukkan tombol Upload (→) kiri atas & ikon Serial Monitor (kaca pembesar) kanan atas"], ["14–28", "9", "Praktek Upload Blink", "Keliling. Kelompok berhasil → tepuk tangan kecil"], ["28–31", "10–11", "Tips upload gagal + forum", "Bahas jawaban pemantik (kabel data vs charger)"], ["31–36", "12", "🟢 Easy (wajib)", "Cek tiap kelompok, beri +10"], ["36–41", "13", "🟡 Medium", "Lewati kalau sudah molor. Pastikan kembali ke D2 & angka 2"], ["41–45", "14–16", "DHT22, cara rakit, cek 5 detik", "Ganti peran di sini"], ["45–55", "17", "Praktek rakit & cek sensor", "Pengecek wajib membacakan checklist sebelum colok USB"], ["55–57", "18", "Forum", ""], ["57–62", "19", "🔴 Hard", "Untuk yang sudah berhasil. Yang belum: selesaikan rakitan"], ["62–63", "20–21", "Peta + Tugas 3", "Ingatkan: jangan bongkar rakitan, foto dulu kalau terpaksa"], ["63–70", "22–23", "Post-test", "Sendiri-sendiri, HP/laptop. Tutup dengan info P11"]]], ["h2", "4. Kalimat kunci (boleh dibacakan)"], ["li", "**Pembuka:** \"Minggu lalu LED kita nyala dari 3V3, tapi mati di D2. Hari ini kita kasih ESP32 'aplikasi' pertamanya, dan dia yang menyalakan lampunya.\""], ["li", "**Listrik vs program:** \"Tanpa coding itu artinya tanpa program, bukan tanpa listrik. ESP32 selalu butuh kabel USB, dari laptop atau power bank.\""], ["li", "**Upload:** \"Upload itu seperti memasang aplikasi ke HP. Laptop tokonya, kabel USB jalannya.\""], ["li", "**Serial Monitor:** \"Ini kotak chat ESP32. Dia akan bilang 'LED nyala', 'LED mati'.\""], ["li", "**Sebelum merakit:** \"Tangan siapa yang pegang kabel? Perakit. Siapa yang bilang boleh colok USB? Pengecek, setelah checklist selesai.\""], ["li", "**Saat berhasil:** \"Lampu biru dan LED kedip bareng? Itu bukti programmu jalan. Kalian baru saja memprogram mikrokontroler!\""], ["h2", "5. Mengelola kelas 12–15 tahun"], ["li", "**Perhatian pendek (±10 menit):** jangan bicara lebih dari 5–6 menit tanpa praktek. Timeline sudah dipecah: materi singkat → langsung praktek."], ["li", "**Sinyal diam:** sepakati satu sinyal (mis. tutor angkat tangan → semua angkat tangan & lepas kabel/mouse). Pakai sebelum memberi instruksi baru."], ["li", "**Peran berputar** (slide 5): Perakit, Pengecek, Operator, Pencatat. Ganti di menit 41. Kelompok berdua: tiap orang 2 peran. Kelompok berempat: awasi supaya tidak ada yang hanya menonton; beri tugas ke yang menganggur (\"kamu Pengecek, bacakan checklist ke Perakit\")."], ["li", "**Peserta individu** (smp-01–smp-05): mereka pegang semua peran. Pasangkan dua individu yang duduk berdekatan sebagai **\"teman cek\"**: saling membacakan checklist sebelum colok USB. Alat & nilai tetap milik masing-masing."], ["li", "**Anak yang memonopoli laptop:** \"Operator sekarang si A. Kamu jadi Pengecek dulu, nanti gantian di Topik 2.\""], ["li", "**Quick win** tiap ±10 menit: LED kedip pertama, Easy lulus, angka suhu pertama, tiup sensor. Rayakan dengan menyebut nama kelompok keras-keras."], ["h2", "6. Titik cek pemahaman"], ["li", "Setelah slide 8: \"Sebutkan 4 langkah upload, mulai dari kelompok paling belakang.\" (salin → upload → serial monitor → lihat alat)"], ["li", "Setelah slide 10: **jempol**: \"Jempol atas kalau lampu biru dan LED kalian kedip bareng.\" Yang jempol bawah → datangi duluan."], ["li", "Setelah slide 16: \"Kaki out ke mana?\" (semua menjawab bersama: D4). \"+ ke mana?\" (3V3)."], ["li", "Sebelum post-test: \"Lampu biru kedip, LED diam. Salah program atau rakitan?\" (rakitan)."], ["h2", "7. Kesalahan yang sering terjadi & cara membantu"], ["p", "Bantu dengan **pertanyaan**, bukan langsung memperbaiki. Biarkan Perakit yang memegang kabel."], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Lupa cabut USB saat memindah kabel", "\"Apa yang ada di papan tulis? Sudah dilakukan?\""], ["LED terbalik / dua kaki LED satu baris", "\"Kaki panjang LED harus ke mana? Coba ikuti jalan listriknya dari D2 sampai GND.\""], ["Kabel di D2 tertukar dengan pin sebelah (D15/D4)", "\"Baca tulisan kecil di sebelah pinnya. Apa tulisannya?\""], ["Menyalin program tidak utuh (sebagian kode hilang)", "\"Baris paling atas dan paling bawah programmu sama dengan file aslinya?\""], ["Membuka Serial Monitor saat upload → gagal", "\"Lihat pesan merahnya. Ada kata 'busy' atau 'denied'? Apa yang sedang terbuka?\""], ["DHT22 dipasang sesuai urutan modul lain", "\"Tulisan di modul kalian urutannya apa? Baca dari kiri.\""], ["Gagal baca sensor", "\"Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?\""]]], ["h2", "8. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Port tidak muncul", "Kabel charger / driver", "Ganti kabel data bertanda. Masih tidak? Cek driver di Device Manager"], ["Failed to connect to ESP32", "Board belum masuk mode upload", "Tahan BOOT saat Connecting...., lepas saat persen muncul"], ["Access denied / port sibuk", "Serial Monitor masih terbuka", "Tutup tab Serial Monitor (tanda ×), upload lagi"], ["Tulisan acak ⸮⸮⸮", "Kecepatan berbeda", "Pilih 115200 baud di pojok kanan Serial Monitor"], ["Serial Monitor kosong", "Pesan awal terlewat", "Tekan tombol EN di board"], ["Compile lama (2–5 menit)", "Compile pertama di laptop itu", "Biarkan jalan; kelompok itu ikut lihat layar kelompok sebelah dulu"], ["DHT.h: No such file or directory", "Library DHT belum dipasang", "Library Manager → DHT sensor library → INSTALL ALL"], ["Upload gagal terus walau BOOT ditahan", "Kecepatan upload terlalu tinggi untuk kabel/board", "Tools → Upload Speed → 115200"], ["Lampu biru kedip, LED diam", "Rakitan LED", "LED terbalik / satu baris / kabel bukan di D2"], ["Gagal baca sensor! Cek kabel.", "Kabel out / longgar / + − tertukar", "Cabut USB, cek dengan checklist slide 16"], ["Sensor terasa hangat/panas", "+ dan − tertukar", "Cabut USB segera, tukar kabelnya, tunggu dingin"], ["Angka tidak berubah saat ditiup", "Normal, sensor lambat", "Tiup lebih lama (5 detik), tunggu 2–4 detik"]]], ["h2", "Cara main Kartu Sabotase (Challenge Hard \"Detektif Sensor\")"], ["p", "Halaman: ekskulcoding.inspiralabs.id/sabotase/ (juga ada di halaman utama ekskul, kartu \"🎴 Kartu Sabotase\"). Di SMP **tutor** yang menyabotase, bukan siswa."], ["p", "1. **Sebelum kelas atau saat siswa mengerjakan Medium:** buka halaman di HP → pilih **SMP** → **🎴 Ambil Kartu**. Keluar 3 kartu aman (1 untuk kabel out, 1 untuk kabel −, 1 untuk kabel +)."], ["p", "2. **Pasang ketiganya** pada satu rakitan DHT22 dengan **USB dicabut**, lalu tekan **🙈 Tutup kartu**. Rakitan ini diberikan ke kelompok yang sudah menyelesaikan Easy/Medium."], ["p", "3. **Siswa jadi detektif:** colok USB, lihat Serial Monitor menulis Gagal baca sensor!, cari 3 kabel yang salah, tulis *kabel mana → seharusnya ke mana*, perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**"], ["p", "4. **Cocokkan:** **catat 3 kartu tadi** (foto layar/kertas) sebelum menutupnya, karena Ambil Kartu berikutnya memberi kartu lain. Gejala tiap kartu ada di bagian \"Untuk tutor: semua kartu & gejalanya\" di halaman."], ["p", "5. **Nilai:** +10 kalau 3 kesalahan ditulis benar dan angka suhu muncul."], ["p", "**Jangan pernah menukar kabel + dan −** DHT22 (sensor bisa panas). Kartu di halaman sudah dipilih yang aman."], ["h2", "9. Keselamatan"], ["li", "Semua tegangan di kit ini rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja."], ["li", "Aturan nomor satu: **cabut USB sebelum memindah kabel**."], ["li", "+ dan − DHT22 tertukar → sensor panas. Ajarkan: \"Kalau terasa hangat, cabut dulu, tanya kemudian.\""], ["li", "Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng): bisa korsleting."], ["li", "Minuman jauh dari meja rakitan."], ["h2", "10. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Medium dan Hard; lalu tantangan bonus: \"Tanpa melihat slide, jelaskan ke kelompok sebelah kenapa lampu biru ikut kedip.\" atau jadi \"asisten tutor\" yang membantu kelompok lain **dengan pertanyaan**, bukan mengambil alih."], ["li", "**Siswa kesulitan:** pecah jadi langkah satu per satu. Tunjuk satu kabel: \"Pasang yang merah dulu. Sudah? Sekarang kuning.\" Boleh melihat rakitan kelompok yang sudah berhasil. Target minimum: Blink jalan + angka suhu muncul; Medium/Hard boleh dilewati."], ["h2", "11. Penilaian"], ["li", "**Challenge:** +10 per challenge yang lulus (per kelompok/individu) di leaderboard. Easy wajib; Medium & Hard opsional."], ["li", "Easy lulus = LED kedip bareng lampu biru tanpa melihat slide."], ["li", "Medium lulus = LED kedip di D18, bisa menjelaskan kenapa lampu biru diam, **sudah dikembalikan** ke D2/angka 2."], ["li", "Hard lulus = 3 kesalahan ditulis benar + angka suhu muncul tanpa mengubah program."], ["li", "**Post-test:** 5 soal, individu (Google Form otomatis menilai). Kunci: 1B 2A 3C 4C 5B."], ["li", "**Tugas 3:** gambar rakitan, dikumpulkan di P11."], ["h2", "12. Penutup & PR"], ["li", "\"Rakitan jangan dibongkar. Kalau harus, **foto dulu**.\""], ["li", "PR: **Tugas 3** — gambar rakitan (LED di D2 + DHT22) dengan tangan, beri warna kabel & nama pin, foto, kumpulkan di P11."], ["li", "Teaser P11: \"Minggu depan alat kalian mengirim suhu ke internet. Kalian jadi dokter kabel.\""], ["li", "Setelah kelas: catat kelompok yang belum berhasil (Blink atau sensor) → datangi duluan di awal P11."]]};

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
