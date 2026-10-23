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
  "P11_1_BacaDHT22/P11_1_BacaDHT22.ino": "// ============================================================\n// P11 SMP — Program Jadi: Baca Sensor DHT22 + Grafik Suhu\n// TIDAK PERLU MENULIS KODE. Buka di Arduino IDE, Upload, lalu buka:\n//   - Serial Monitor (kaca pembesar, kanan atas)   -> lihat angkanya\n//   - Serial Plotter (ikon gelombang, kanan atas)  -> lihat grafiknya, lalu tiup sensornya!\n// Kabel DHT22: + ke 3V3, out ke D4, - ke GND.\n// Butuh library \"DHT sensor library\" by Adafruit (sudah dipasang di P10, Level 3).\n// ============================================================\n#include <DHT.h>\n\n#define DHT_PIN 4               // kaki \"out\" DHT22 di pin D4\n\nDHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22\n\nvoid setup() {\n  Serial.begin(115200);\n  dht.begin();                  // nyalakan sensor\n  Serial.println(\"Sensor siap!\");\n}\n\nvoid loop() {\n  delay(2000);                  // DHT22 butuh jeda minimal 2 detik\n\n  float suhu = dht.readTemperature();   // baca suhu (°C)\n  float lembap = dht.readHumidity();    // baca kelembapan (%)\n\n  if (isnan(suhu) || isnan(lembap)) {\n    Serial.println(\"Gagal baca sensor! Cek kabel.\");\n    return;                     // batalkan putaran ini, ulang dari awal loop\n  }\n\n  // Bentuk \"Nama:angka,Nama:angka\" bisa dibaca Serial Monitor DAN Serial Plotter\n  Serial.print(\"Suhu:\");\n  Serial.print(suhu);\n  Serial.print(\",Kelembapan:\");\n  Serial.println(lembap);\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 11 - SMP",
  "soal": [
    {
      "q": "1. Sensor DHT22 mengukur…",
      "kode": "",
      "opsi": [
        "Cahaya dan suara",
        "Suhu dan kelembapan udara",
        "Jarak dan kecepatan",
        "Kekuatan sinyal WiFi"
      ],
      "kunci": 1
    },
    {
      "q": "2. Kaki DHT22 yang membawa data suhu ke ESP32 adalah kaki…",
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
      "q": "3. Rakitan yang BENAR untuk DHT22 di proyek kita adalah…",
      "kode": "",
      "opsi": [
        "+ ke GND, out ke D4, − ke 3V3",
        "+ ke 3V3, out ke D2, − ke GND",
        "+ ke D4, out ke 3V3, − ke GND",
        "+ ke 3V3, out ke D4, − ke GND"
      ],
      "kunci": 3
    },
    {
      "q": "4. Serial Monitor menulis Gagal baca sensor! Cek kabel. terus-menerus. Langkah pertama yang tepat adalah…",
      "kode": "",
      "opsi": [
        "Cabut USB, lalu cek kabel out di D4, kabel tidak longgar, dan + / − tidak tertukar",
        "Menulis ulang programnya",
        "Mengganti laptop",
        "Menambah resistor di kaki sensor"
      ],
      "kunci": 0
    },
    {
      "q": "5. Saat sensor ditiup, garis di Serial Plotter yang paling cepat naik adalah…",
      "kode": "",
      "opsi": [
        "Suhu",
        "Kelembapan",
        "Tidak ada yang berubah",
        "Grafiknya hilang"
      ],
      "kunci": 1
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P11 SMP — Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu", "blok": [["h1", "Panduan Pengajar — P11 SMP: Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu"], ["p", "Jum'at, 30 Oktober 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P11_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: **sensor itu mainan.** Rakitannya hanya 3 kabel, programnya sudah jadi. Bagian serunya adalah **meniup dan menggenggam** sensor sambil melihat grafik melonjak di Serial Plotter. Siswa **tidak menulis kode** dan **tidak mengubah program**."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Merakit DHT22 (+ → 3V3, out → D4, − → GND) dan menunjukkan angka suhu & kelembapan di Serial Monitor."], ["p", "2. Membuka Serial Plotter dan menunjukkan garis kelembapan yang **naik saat sensor ditiup**."], ["p", "3. Bisa menjawab: \"Sensor itu apa?\" (indera benda pintar) dan \"Kaki out ke mana?\" (D4)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Jalankan SCRIPT_P11_SMP.gs → folder **Kode** + Google Form post-test ada di Drive. Perbarui tombol \"Post Test Pertemuan 11\" di Linktree."], ["li", "☐ Cek catatan P10: laptop mana yang belum lulus Level 2/3? Selesaikan instalasinya sekarang."], ["li", "☐ Di tiap laptop: buka P11_1_BacaDHT22.ino → pilih **ESP32 Dev Module** → **Verify (✓)** sekali."], ["li", "☐ Rakit 1 DHT22 sendiri, upload, buka **Serial Plotter**, tiup sensornya. Kenali bentuk grafiknya supaya bisa menjelaskan."], ["li", "☐ Siapkan 2–3 DHT22, 6 jumper, dan 2–3 kabel USB data cadangan."], ["li", "☐ Buka ekskulcoding.inspiralabs.id/sabotase/ di HP (untuk Challenge Hard)."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Nyalakan proyektor, buka slide. Siapkan 1 rakitan DHT22 jadi di meja tutor untuk demo Serial Plotter di proyektor."], ["li", "☐ Tulis di papan: \"Cabut USB sebelum memindah kabel!\" dan \"+ → 3V3 · out → D4 · − → GND\"."], ["li", "☐ Siapkan kertas/spreadsheet pencatat poin (nama siswa, +2, Easy, Medium, Hard)."], ["h3", "Isi kit per kelompok/individu"], ["p", "ESP32 + rakitan LED P10 di breadboard · kabel USB data · DHT22 · 3 jumper (merah, kuning, hitam) + 2 cadangan · kertas & pensil untuk Pencatat."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1–6", "Pembuka, cover, pemantik, agenda, peran, poin", "Peragakan HP dimiringkan. Tampung tebakan (+2). Tunjuk peran"], ["5–11", "7–8", "Sensor = indera, kenalan DHT22", "Edarkan 1 sensor. Jawab pemantik di slide 7"], ["11–22", "9–10", "Rakit 3 kabel + cek 5 detik", "Pengecek wajib membacakan checklist sebelum colok USB"], ["22–30", "11–12", "Upload & Serial Monitor, tips sensor diam", "Keliling. Rayakan angka suhu pertama tiap kelompok"], ["30–32", "13", "Tanya Jawab", "+2 per penjawab"], ["32–36", "14", "🟢 Easy", "Cek angka & catatan Pencatat. +5"], ["36–40", "15", "Serial Plotter", "Demo di proyektor dengan rakitan tutor. Ganti peran"], ["40–48", "16", "Tiup & genggam", "Hitung \"1… 2… 3… tiup!\" bersama satu kelas"], ["48–50", "17", "Tanya Jawab", "+2 per penjawab"], ["50–55", "18", "🟡 Medium", "Cek angka awal & puncak + grafik. +10"], ["55–62", "19", "🔴 Hard", "Sabotase rakitan kelompok yang sudah lulus Easy. +15"], ["62–63", "20", "Peta petualangan", "\"Jangan bongkar rakitan, dipakai P12\""], ["63–70", "21–22", "Post-test", "Sendiri-sendiri. Tutup dengan teaser P12"]]], ["h2", "4. Kalimat kunci (boleh dibacakan)"], ["li", "**Pembuka:** \"Minggu lalu ESP32 kita bisa 'bicara' lewat lampu. Hari ini dia dapat indera: dia bisa merasakan panas dan lembap.\""], ["li", "**Sensor:** \"ESP32 itu otak. Sensor itu indera. Otak tanpa indera tidak tahu apa-apa tentang dunia luar.\""], ["li", "**Kelembapan:** \"Kelembapan itu banyaknya uap air di udara. Coba hembuskan napas ke kaca: berembun kan? Napas kita lembap.\""], ["li", "**Sebelum merakit:** \"Tangan siapa yang pegang kabel? Perakit. Siapa yang bilang boleh colok USB? Pengecek, setelah checklist selesai.\""], ["li", "**Serial Plotter:** \"Angka yang tadi lewat cepat di Serial Monitor, sekarang jadi garis. Seperti layar detak jantung di rumah sakit.\""], ["li", "**Saat grafik melonjak:** \"Lihat gunungnya! Napas kalian baru saja tercatat oleh sensor.\""], ["h2", "5. Gaya mengajar: belajar sambil bermain"], ["li", "**Grafik = pusat perhatian.** Tampilkan Serial Plotter tutor di proyektor sepanjang Topik 2. Ajak satu kelas meniup bersamaan, lalu bandingkan \"gunung\" tiap kelompok."], ["li", "**Lomba kecil yang aman:** \"Gunung Tertinggi\" (Medium) boleh diumumkan pemenangnya, tapi semua kelompok yang menyelesaikan langkahnya tetap dapat +10."], ["li", "**Jangan ceramah lebih dari 5–6 menit.** Slide 7–8 cukup ±6 menit, langsung rakit."], ["li", "**Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 36). Di Topik 2 siapa saja boleh meniup sensor."], ["li", "**Peserta individu:** pegang semua peran; pasangkan dua individu sebagai \"teman cek\" untuk membacakan checklist."], ["li", "**Kesalahan = misi tambahan.** Gagal baca sensor! itu petunjuk, bukan kegagalan: \"Serial Monitor sedang memberi tahu kita: periksa kabel!\""], ["li", "**Sinyal diam:** tutor angkat tangan → semua angkat tangan & lepas kabel/mouse, sebelum instruksi baru."], ["h2", "6. Sistem poin & cara mencatat"], ["tabel", [["Kegiatan", "Poin", "Untuk siapa"], ["Bertanya / menjawab (pemantik, Tanya Jawab, contoh sensor di HP)", "+2", "Siswa yang bicara (benar atau salah, yang penting berani)"], ["🟢 Easy", "+5", "Setiap anggota kelompok"], ["🟡 Medium", "+10", "Setiap anggota kelompok"], ["🔴 Hard", "+15", "Setiap anggota kelompok"]]], ["li", "Catat +2 dengan turus saat itu juga. Gilir yang menjawab: utamakan yang belum pernah dapat."], ["li", "Rekap ke gradebook setelah kelas. **Tidak ada PR.**"], ["h2", "7. Titik cek pemahaman"], ["li", "Setelah slide 8: \"Kaki DHT22 ada berapa? Sebutkan!\" (+, out, −)."], ["li", "Setelah slide 9: \"Kaki out ke mana?\" (semua menjawab bersama: D4). \"+ ke mana?\" (3V3)."], ["li", "Setelah slide 11: **jempol**: \"Jempol atas kalau angka suhu sudah muncul.\" Yang jempol bawah → datangi duluan."], ["li", "Setelah slide 16: \"Ditiup, garis mana yang naik duluan?\" (kelembapan)."], ["h2", "8. Kesalahan yang sering terjadi & cara membantu"], ["p", "Bantu dengan **pertanyaan**, bukan langsung memperbaiki. Biarkan Perakit yang memegang kabel."], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Lupa cabut USB saat memindah kabel", "\"Apa yang ada di papan tulis? Sudah dilakukan?\""], ["DHT22 dipasang sesuai urutan modul lain", "\"Tulisan di modul kalian urutannya apa? Baca dari kiri.\""], ["Kabel out di D2/D15 (pin sebelah D4)", "\"Baca tulisan kecil di sebelah pinnya. Apa tulisannya?\""], ["Gagal baca sensor", "\"Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?\""], ["Membuka file P10 bukan P11", "\"Nama file yang kamu buka apa? Angkanya P berapa?\""], ["Serial Plotter kosong", "\"Baud di pojok kanan berapa? Harus sama dengan Serial Monitor.\""], ["Meniup terlalu dekat sampai sensor berembun", "\"Kalau sensornya basah, angkanya bisa dipercaya?\" → keringkan, tunggu 1 menit"]]], ["h2", "9. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Gagal baca sensor! Cek kabel. terus", "Out bukan di D4, longgar, + − tertukar", "Cabut USB, cek dengan checklist slide 10"], ["Sensor terasa hangat/panas", "+ dan − tertukar", "Cabut USB segera, tukar kabelnya, tunggu dingin"], ["Kadang terbaca, kadang gagal", "Kabel setengah masuk / jumper hampir putus", "Tekan kabel sampai mentok, ganti jumper"], ["Serial Monitor kosong", "Pesan awal terlewat", "Tekan EN di board"], ["Tulisan acak ⸮⸮⸮", "Baud beda", "Pilih 115200 baud"], ["DHT.h: No such file or directory", "Library DHT belum terpasang", "Library Manager → DHT sensor library by Adafruit → INSTALL ALL"], ["Serial Plotter kosong / garis aneh", "Baud beda / jendela lama", "Pilih 115200, tutup lalu buka lagi Serial Plotter"], ["Angka tidak berubah saat ditiup", "Normal, sensor lambat", "Tiup lebih lama (5 detik), tunggu 2–4 detik"], ["Port tidak muncul / Failed to connect", "Kabel charger / mode upload", "Kabel data bertanda; tahan BOOT saat Connecting...."]]], ["h2", "Cara main Kartu Sabotase (Challenge Hard \"Detektif Sensor\")"], ["p", "Halaman: ekskulcoding.inspiralabs.id/sabotase/ (juga ada di halaman utama ekskul, kartu \"Kartu Sabotase\"). Di SMP **tutor** yang menyabotase, bukan siswa."], ["p", "1. **Saat kelompok lain mengerjakan Medium:** buka halaman di HP → pilih **SMP** → **Ambil Kartu**. Keluar 3 kartu aman (1 untuk kabel out, 1 untuk kabel −, 1 untuk kabel +)."], ["p", "2. Minta pemilik rakitan menunggu di luar meja. **Cabut USB**, pasang ketiga sabotase, lalu tekan **Tutup kartu**."], ["p", "3. **Siswa jadi detektif:** colok USB, lihat Serial Monitor menulis Gagal baca sensor!, cari 3 kabel yang salah, tulis *kabel mana → seharusnya ke mana*, perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**"], ["p", "4. **Cocokkan:** **catat 3 kartu tadi** (foto layar/kertas) sebelum menutupnya, karena Ambil Kartu berikutnya memberi kartu lain. Gejala tiap kartu ada di bagian \"Untuk tutor: semua kartu & gejalanya\"."], ["p", "5. **Nilai:** +15 kalau 3 kesalahan ditulis benar dan angka suhu muncul lagi."], ["p", "**Jangan pernah menukar kabel + dan −** DHT22 (sensor bisa panas). Kartu di halaman sudah dipilih yang aman."], ["h2", "10. Keselamatan"], ["li", "Semua tegangan di kit ini rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja."], ["li", "Aturan nomor satu: **cabut USB sebelum memindah kabel**."], ["li", "+ dan − DHT22 tertukar → sensor panas. Ajarkan: \"Kalau terasa hangat, cabut dulu, tanya kemudian.\""], ["li", "Meniup boleh, membasahi sensor tidak. Minuman jauh dari meja rakitan."], ["li", "Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng)."], ["h2", "11. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Medium & Hard; lalu bonus: \"Bisakah kalian membuat garis **suhu** naik 2 °C tanpa meniup?\" (genggam lebih lama). Atau jadi \"asisten tutor\" yang membantu kelompok lain **dengan pertanyaan**."], ["li", "**Siswa kesulitan:** pasang satu kabel per instruksi (\"Merah dulu ke 3V3. Sudah? Sekarang kuning ke D4.\"). Boleh melihat rakitan kelompok yang sudah berhasil. Target minimum: angka suhu muncul + ikut meniup sensor sambil melihat grafik."], ["h2", "12. Penilaian"], ["li", "**Keaktifan:** +2 per tanya/jawab."], ["li", "**Challenge** (leaderboard, per anggota kelompok):"], ["li", "🟢 Easy +5 = angka suhu & kelembapan muncul + dicatat Pencatat."], ["li", "🟡 Medium +10 = angka awal & puncak kelembapan tercatat + grafik gunung ditunjukkan."], ["li", "🔴 Hard +15 = 3 kesalahan sabotase ditulis benar + angka suhu muncul lagi tanpa mengubah program."], ["li", "**Post-test:** 5 soal, individu, lewat **server kelas** (--tes smp-11, nilai otomatis jadi dist/posttest/smp-11.xlsx; Google Form di Linktree sebagai cadangan). Kunci: 1B 2C 3D 4A 5B."], ["li", "**Tidak ada PR / tugas rumah.**"], ["h2", "13. Penutup"], ["li", "\"Rakitan DHT22 jangan dibongkar. Minggu depan suhu dari meja kalian terbang ke internet dan muncul di website kalian sendiri!\""], ["li", "Setelah kelas (tutor): catat kelompok yang belum berhasil membaca sensor → datangi duluan di awal P12. Rekap poin ke gradebook."]]};

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
