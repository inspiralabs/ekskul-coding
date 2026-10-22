// ============================================================
// SCRIPT P12 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 12 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
//   SMP/Panduan Pengajar P12 SMP         Google Docs (kalau ada Panduan_Pengajar_P12_SMP.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P12) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4";  // link atau ID folder Drive P12
const JENJANG = 'SMP';

const KODE = {
  "P12_1_TesWiFi/P12_1_TesWiFi.ino": "// ============================================================\n// P12 SMP — Program Cadangan: Tes WiFi Saja\n// Buka di Arduino IDE. Isi nama & password WiFi (harus 2.4 GHz).\n// Dipakai saat troubleshooting: kalau titik-titik tidak berhenti di firmware proyek,\n// tes WiFi pakai program kecil ini dulu. Setelah tersambung, upload lagi firmware proyek.\n// ============================================================\n#include <WiFi.h>\n\nconst char* WIFI_SSID     = \"ISI_DI_SINI\";   // nama WiFi\nconst char* WIFI_PASSWORD = \"ISI_DI_SINI\";   // password WiFi\n\nvoid setup() {\n  Serial.begin(115200);\n\n  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);      // mulai menyambung\n  Serial.print(\"Menghubungkan ke WiFi\");\n  while (WiFi.status() != WL_CONNECTED) {    // SELAMA belum tersambung...\n    delay(500);\n    Serial.print(\".\");                       // ...tulis titik\n  }\n  Serial.println();\n  Serial.print(\"Terhubung! IP ESP32 ini: \");\n  Serial.println(WiFi.localIP());            // alamat ESP32 di jaringan\n}\n\nvoid loop() {\n}\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 12 - SMP",
  "soal": [
    {
      "q": "1. Di firmware proyek akhir, baris yang diisi siswa hari ini adalah…",
      "kode": "",
      "opsi": [
        "SERVER_URL dan API_KEY",
        "DEVICE_ID diganti nama sendiri",
        "WIFI_SSID dan WIFI_PASSWORD",
        "Semua baris di bawah tulisan JANGAN UBAH"
      ],
      "kunci": 2
    },
    {
      "q": "2. Serial Monitor menulis Kirim data -> kode respons: 200. Artinya…",
      "kode": "",
      "opsi": [
        "Data diterima server, seperti centang dua di WhatsApp",
        "Ada 200 kesalahan",
        "Suhu ruangan 200 derajat",
        "WiFi belum tersambung"
      ],
      "kunci": 0
    },
    {
      "q": "3. Serial Monitor menampilkan Menghubungkan ke WiFi......... dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Kabel sensor DHT22 longgar",
        "LED terbalik",
        "Warna dashboard salah",
        "Nama atau password WiFi salah"
      ],
      "kunci": 3
    },
    {
      "q": "4. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "Kode warna di :root paling atas style.css",
        "Bagian <script> di bawah index.html",
        "DEVICE_ID di firmware"
      ],
      "kunci": 1
    },
    {
      "q": "5. Laptop dimatikan, ESP32 dicolok ke power bank. Apakah dashboard tetap menampilkan suhu terbaru?",
      "kode": "",
      "opsi": [
        "Tidak, karena program hilang saat laptop mati",
        "Tidak, karena dashboard hanya jalan di laptop yang meng-upload",
        "Ya, karena program tersimpan di ESP32 dan power bank memberi listrik",
        "Ya, tapi hanya kalau sensor dicabut"
      ],
      "kunci": 2
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P12 SMP — Kirim Suhu ke Internet & Dashboard-mu", "blok": [["h1", "Panduan Pengajar — P12 SMP: Kirim Suhu ke Internet & Dashboard-mu"], ["p", "Jum'at, 6 November 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P12_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: **firmware dipakai apa adanya.** Siswa hanya mengganti ISI_DI_SINI dengan nama & password WiFi, lalu mengganti **teks** (nama, anggota, judul) dan **3 kode warna** di dashboard. api.js, zona merah, dan bagian <script> tidak disentuh. Momen \"wow\" hari ini: **angka dari meja mereka muncul di website**."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Meng-upload firmware dari folder smp-XX dan menunjukkan Serial Monitor dengan kode respons: 200."], ["p", "2. Menyalakan alat dengan power bank dan menunjukkan dashboard yang angkanya berubah saat sensor ditiup."], ["p", "3. (Target lanjut) Dashboard berisi nama kelompok, anggota, judul alat, dan 3 warna baru, angka sensor tetap muncul."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Jalankan SCRIPT_P12_SMP.gs → folder **Kode** (P12_1_TesWiFi) + Google Form post-test ada di Drive. Perbarui tombol \"Post Test Pertemuan 12\" di Linktree."], ["li", "☐ py tools/kelompok.py paket → dist/paket/smp-XX.zip."], ["li", "☐ **Di laptop tiap kelompok:** extract smp-XX.zip ke Desktop, double-click smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino → **Verify (✓)** sekali. Tempel stiker smp-XX di laptop. Pastikan **VS Code** terpasang."], ["li", "☐ Pastikan rakitan DHT22 dari P11 masih utuh; bawa DHT22 & jumper cadangan."], ["li", "☐ **Uji WiFi kelas** dengan board cadangan: upload firmware salah satu kelompok, lihat 200. Pastikan WiFi **2.4 GHz**. Siapkan hotspot HP cadangan (2.4 GHz, kuota cukup)."], ["li", "☐ Cek backend: https://api-ekskulcoding.inspiralabs.id/health. Buka index.html kelompok yang tadi: angka contoh 26°C/60% harus berganti jadi data sungguhan dalam ±5 detik."], ["li", "☐ **Charge semua power bank.** Tes satu power bank dengan ESP32 selama 2 menit: kalau mati sendiri (mode hemat), tandai jangan dipakai."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Tulis di papan: **nama WiFi & password** (huruf besar-kecil persis), papan **\"Klub 200\"** (kosong), dan \"Save (Ctrl+S) → Refresh (F5)\"."], ["li", "☐ Di laptop demo tutor: buka VS Code + smp-XX contoh untuk demo kustom di proyektor."], ["li", "☐ Siapkan kertas/spreadsheet pencatat poin."], ["h3", "Isi kit per kelompok/individu"], ["p", "Rakitan P11 (ESP32 + DHT22 di D4) · kabel USB data · laptop dengan folder smp-XX · power bank terisi · kertas untuk Pencatat."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1–6", "Pembuka, cover, pemantik, agenda, peran, poin", "Tampung tebakan pemantik (+2). Tunjuk peran"], ["5–10", "7–9", "Perjalanan data, folder, zona hijau/merah", "Gambar rantai DHT22 → … → Dashboard di papan. Tunjuk persis baris ISI_DI_SINI di proyektor"], ["10–22", "10", "Praktek upload firmware", "Keliling. Pengecek membandingkan nama WiFi huruf demi huruf"], ["22–25", "11–12", "Cerita ESP32 + tips belum 200", "Tunjukkan output satu kelompok di proyektor"], ["25–27", "13", "Tanya Jawab", "+2 per penjawab"], ["27–30", "14", "🟢 Easy", "Tulis Device ID di papan Klub 200. +5"], ["30–36", "15", "Praktek power bank + dashboard", "Tampilkan dashboard satu kelompok di proyektor, ajak semua meniup"], ["36–39", "16", "🟡 Medium", "Cek: tanpa laptop, angka bukan 26/60, berubah saat ditiup. +10"], ["39–45", "17–19", "Boleh & jangan, profil, warna", "Demo langsung di proyektor (±1 menit per langkah). Ganti peran"], ["45–47", "20", "Tanya Jawab", "+2 per penjawab"], ["47–60", "21", "🔴 Hard", "Keliling. Prioritas: nama dulu, judul, lalu warna. +15"], ["60–62", "22", "Peta petualangan", "\"Minggu depan tidak perlu membawa apa-apa\""], ["62–70", "23–24", "Post-test", "Sendiri-sendiri"]]], ["h2", "4. Kalimat kunci (boleh dibacakan)"], ["li", "**Pembuka:** \"Minggu lalu suhu kalian cuma terlihat di laptop sendiri. Hari ini suhu itu terbang ke internet dan bisa dilihat dari HP siapa saja.\""], ["li", "**Perjalanan data:** \"Seperti kirim surat. ESP32 menulis surat berisi suhu, server itu kantor posnya, dashboard yang membaca surat terbaru.\""], ["li", "**Zona hijau/merah:** \"Zona hijau itu kolom formulir: isi nama dan password WiFi. Zona merah itu kunci rumah server. Disentuh, pintunya terkunci.\""], ["li", "**Device ID:** \"smp-07 itu plat nomor alat kalian. Kalau dua motor plat nomornya sama, polisi bingung. Server juga.\""], ["li", "**Kode 200:** \"Angka 200 artinya paketnya diterima, seperti centang dua di WhatsApp.\""], ["li", "**Kustom:** \"Ganti tulisannya saja. Tanda < > itu pagar, jangan dirobohkan. Belum berubah? Sudah Ctrl+S? Sudah F5?\""], ["h2", "5. Gaya mengajar: belajar sambil bermain"], ["li", "**Papan \"Klub 200\"** = progress bar kelas. Setiap kali Device ID ditulis, ajak tepuk tangan kecil."], ["li", "**Momen bersama:** setelah beberapa dashboard jalan, hitung \"1… 2… 3… tiup!\" satu kelas, lalu lihat angka di proyektor naik."], ["li", "**Menunggu upload itu membosankan.** Saat compile/Upload berjalan, Desainer mulai memikirkan nama alat & 3 warna di kertas; Penjaga Alat menekan ulang semua kabel."], ["li", "**Hari kreatif = rawan ribut.** Beri batas waktu: \"5 menit memilih nama alat, setelah itu Operator mulai mengetik.\""], ["li", "**WiFi macet di banyak kelompok sekaligus** → sinyal diam, pindahkan semua ke hotspot cadangan bersama-sama (tulis nama hotspot di papan), daripada membantu satu per satu."], ["li", "**Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 39). Keputusan nama & warna diputuskan **bersama**."], ["li", "**Peserta individu:** pegang semua peran; pasangkan dengan individu sebelah sebagai \"teman cek\" untuk membandingkan nama WiFi & ejaan nama."], ["li", "**Konten pantas:** nama kelompok & judul harus sopan (website akan online dan bisa dilihat orang tua/sekolah). Sampaikan di awal Topik 2."], ["h2", "6. Sistem poin & cara mencatat"], ["tabel", [["Kegiatan", "Poin", "Untuk siapa"], ["Bertanya / menjawab (pemantik, Tanya Jawab)", "+2", "Siswa yang bicara (benar atau salah, yang penting berani)"], ["🟢 Easy", "+5", "Setiap anggota kelompok"], ["🟡 Medium", "+10", "Setiap anggota kelompok"], ["🔴 Hard", "+15", "Setiap anggota kelompok"]]], ["li", "Catat +2 dengan turus saat itu juga. Gilir yang menjawab: utamakan yang belum pernah dapat."], ["li", "Rekap ke gradebook setelah kelas. **Tidak ada PR.**"], ["h2", "7. Titik cek pemahaman"], ["li", "Setelah slide 9: \"Tunjuk dengan jari di layar kalian: baris mana yang boleh diubah?\" (WIFI_SSID, WIFI_PASSWORD)."], ["li", "Setelah slide 11: **jempol**: \"Jempol atas kalau sudah lihat 200.\" Catat yang belum."], ["li", "Setelah slide 12: tutor membacakan gejala, kelas menjawab serentak: \"Titik-titik tidak berhenti?\" (WiFi) · \"Gagal baca sensor?\" (kabel) · \"Minus satu?\" (internet)."], ["li", "Setelah slide 17: \"File mana yang tidak boleh diubah?\" (api.js)."], ["h2", "8. Kesalahan yang sering terjadi & cara membantu"], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Nama WiFi beda huruf besar/kecil atau ada spasi", "\"Bandingkan huruf demi huruf dengan papan. Pengecek, bacakan pelan-pelan.\""], ["Tanda kutip \" ikut terhapus (error merah saat compile)", "\"Lihat baris yang kamu ketik. Bentuknya sama dengan baris di atasnya?\""], ["Lupa Save sebelum Upload", "\"Di judul tab file ada titik bulat? Artinya apa?\""], ["Arduino IDE bertanya *\"needs to be inside a sketch folder\"*", "\"Kamu membuka dari folder mana?\" → buka dari firmware/smp_room_monitor/"], ["Mengubah DEVICE_ID", "\"Device ID itu plat nomor. Boleh diganti?\" → kembalikan sesuai nama folder"], ["Lupa Save / Refresh di VS Code", "\"Lihat tab file di VS Code, ada titik bulat? Sudah tekan F5?\""], ["Menghapus tanda < > atau </h2>", "\"Bandingkan dengan slide 18. Ada pagar yang hilang?\""], ["Angka sensor hilang setelah kustom", "\"Apa yang kamu hapus selain teks?\" → kalau buntu, salin ulang index.html dari zip asli, ulangi kustom"], ["Titik koma ; atau # di warna terhapus", "\"Baris warna lain bentuknya bagaimana? Bandingkan.\""], ["Edit file di dalam zip (bukan folder hasil extract)", "\"Folder ini dari mana? Yang di Desktop atau di dalam zip?\""]]], ["h2", "9. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Titik-titik ...... tidak berhenti", "Nama/password salah, WiFi 5 GHz, sinyal lemah", "Cek huruf; pindah ke hotspot 2.4 GHz; dekatkan ke router"], ["Gagal baca sensor DHT22…", "Out bukan di D4, longgar, + − tertukar", "Cabut USB, checklist P11"], ["kode respons: -1", "WiFi tanpa internet", "Cek kuota hotspot, coba WiFi lain"], ["kode respons: 401", "Zona merah (API_KEY) berubah", "Extract ulang zip asli, isi WiFi lagi, upload"], ["Serial Monitor kosong", "Pesan awal terlewat", "Tekan EN di board"], ["Error merah saat compile setelah mengisi WiFi", "Tanda kutip/titik koma terhapus", "Bandingkan dengan baris di atasnya, atau extract ulang zip"], ["Masih bingung WiFi atau sensor?", "—", "Upload P12_1_TesWiFi.ino (WiFi saja) atau P11_1_BacaDHT22.ino (sensor saja), lalu upload lagi firmware proyek"], ["Dashboard tetap 26°C / 60%", "ESP32 belum mengirim", "Colok ke laptop, Serial Monitor harus 200"], ["Angka tidak berubah saat ditiup", "Data dikirim tiap 4 detik", "Tiup 5 detik, tunggu 10 detik"], ["ESP32 di power bank mati sendiri", "Power bank mode hemat", "Ganti power bank atau colok laptop"], ["Dashboard menampilkan data kelompok lain", "Folder tertukar", "Cek nama folder & Device ID di HANDOUT"], ["Halaman berantakan / putih setelah kustom", "Tag HTML rusak", "Ctrl+Z di VS Code, atau salin ulang index.html asli"], ["Warna tidak berubah", "Salah file / tidak Save", "Warna ada di style.css, bukan index.html"]]], ["h2", "10. Keselamatan"], ["li", "Tegangan kit rendah (USB), aman disentuh. Cabut USB sebelum memindah kabel."], ["li", "Power bank: jangan dipakai kalau menggembung/panas. Jangan ditindih atau dibanting."], ["li", "**Privasi:** nama siswa akan online di smp-XX.inspiralabs.id. Jangan tulis nomor HP, alamat, atau info pribadi lain di website."], ["h2", "11. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Hard; lalu bonus: ganti emoji ikon (🌡️, 💧) atau isi kotak .kotak-kosong (\"TAMBAHKAN ELEMEN KAMU DI SINI\") dengan kalimat sendiri, atau ganti warna lain di :root (--warna-panas, --warna-dingin). Boleh juga jadi \"asisten tutor\" untuk kelompok yang belum 200 (hanya dengan pertanyaan)."], ["li", "**Siswa kesulitan:** fokus satu target: 200 lalu angka di dashboard. Tutor duduk di samping dan membimbing langkah demi langkah (\"Cari tulisan ISI_DI_SINI. Hapus hanya tulisan itu, ketik nama WiFi.\"). Kustom boleh dilanjutkan di awal P13."], ["h2", "12. Penilaian"], ["li", "**Keaktifan:** +2 per tanya/jawab."], ["li", "**Challenge** (leaderboard, per anggota kelompok):"], ["li", "🟢 Easy +5 = kode respons: 200 dari rakitan sendiri."], ["li", "🟡 Medium +10 = alat dengan power bank, angka bukan 26/60 tampil di dashboard dan berubah saat ditiup."], ["li", "🔴 Hard +15 = nama & anggota, judul, 3 warna diganti **dan** angka sensor masih tampil."], ["li", "**Progres proyek akhir:** 200 + data tampil di dashboard."], ["li", "**Post-test:** 5 soal, individu. Kunci: 1C 2A 3D 4B 5C."], ["li", "**Tidak ada PR / tugas rumah.**"], ["h2", "13. Penutup"], ["li", "\"Firmware sudah tersimpan di ESP32. Minggu depan: foto kelompok, rumah untuk alat, lalu kalian tampil di panggung. Tidak perlu membawa apa-apa, semua disiapkan.\""], ["li", "Setelah kelas (tutor): catat Device ID yang belum 200 atau dashboard-nya belum menampilkan data → selesaikan di 10 menit pertama P13. Siapkan kardus kecil untuk P13. Rekap poin ke gradebook."]]};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P12 dulu.');
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
