// ============================================================
// SCRIPT P13 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 13 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
//   SMA/Panduan Pengajar P13 SMA         Google Docs (kalau ada Panduan_Pengajar_P13_SMA.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P13) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz";  // link atau ID folder Drive P13
const JENJANG = 'SMA';

const KODE = {
  "C3_P13_Hard_PanelTips/panel_tips.txt": "<!-- ============================================================\n     Challenge Hard P13 SMA - \"Panel Tips Pintar\"\n     CARA PAKAI:\n     1. Buka index.html di folder kelompokmu (VS Code / Notepad).\n     2. Cari baris:  <div class=\"kartu-kosong\" id=\"bagianEdukasi\">\n     3. Ganti baris komentar \"TULIS KODEMU DI SINI\" di bawahnya\n        dengan kode di bawah ini (dari baris <h2> sampai </script>).\n     4. Simpan, refresh browser. Lalu ubah 3 teks tips dengan gaya\n        kalian dan tambah 1 aturan baru untuk kelembapan.\n     ============================================================ -->\n<h2>Tips Ruangan</h2>\n<p id=\"teksTips\">Menunggu data...</p>\n<script>\nsetInterval(function () {\n  var tips;\n  if (suhuSaatIni > 30) tips = \"Panas! Buka jendela atau nyalakan kipas.\";\n  else if (suhuSaatIni < 22) tips = \"Dingin, pakai jaket ya.\";\n  else tips = \"Suhu nyaman, pas buat ngoding!\";\n  document.getElementById(\"teksTips\").textContent = tips;\n}, 2000);\n</script>\n",
  "BACA_DULU.txt": "CARA PAKAI FILE KODE (Arduino IDE)\n\nSetiap program ESP32 ada di foldernya sendiri, misalnya:\n  P10_1_TesRelay/P10_1_TesRelay.ino\nNama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.\n\n1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.\n2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.\n3. Pilih board \"ESP32 Dev Module\" dan port ESP32-mu, lalu klik Upload (panah ->).\n4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.\n\nBelum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.\nFile .html (web): buka langsung di browser (double-click), edit pakai VS Code.\n"
};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 13 - SMA",
  "soal": [
    {
      "q": "1. Untuk mengubah warna utama seluruh dashboard sekaligus, bagian yang paling tepat diubah adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "Variabel di :root dalam style.css",
        "Firmware ESP32",
        "Nama file index.html"
      ],
      "kunci": 1
    },
    {
      "q": "2. File di folder kelompok yang TIDAK boleh diubah karena berisi koneksi ke server adalah…",
      "kode": "",
      "opsi": [
        "index.html",
        "style.css",
        "api.js",
        "foto-kelompok.jpg"
      ],
      "kunci": 2
    },
    {
      "q": "3. Di dashboard ada aturan if (suhuSaatIni > 32) { tampilkan peringatan }. Sensor membaca 30°C. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Peringatan tidak muncul",
        "Peringatan muncul",
        "Dashboard error",
        "Kipas mati"
      ],
      "kunci": 0
    },
    {
      "q": "4. Foto sudah ada di folder kelompok, tapi tidak tampil di kartu Profil Kelompok. Nama filenya Foto Kelompok.JPG. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Fotonya terlalu kecil",
        "Nama file tidak persis foto-kelompok.jpg yang dipanggil index.html",
        "api.js belum diubah",
        "ESP32 belum terhubung WiFi"
      ],
      "kunci": 1
    },
    {
      "q": "5. Batas status \"Panas\" di dashboard diubah dari 29 jadi 25. Suhu ruangan 27°C. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Suhu ruangan turun jadi 25°C",
        "Dashboard menampilkan status Dingin",
        "Kipas langsung rusak",
        "Dashboard menampilkan status Panas, padahal suhu ruangan tetap 27°C"
      ],
      "kunci": 3
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P13 SMA — Dashboard Punya Kita + Demo Day", "blok": [["h1", "Panduan Pengajar — P13 SMA: Dashboard Punya Kita + Demo Day"], ["p", "Sabtu, 14 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P13, sumber/Materi_Ajar_P13_SMA_InspiraLabs.md (rubrik & kunci di KHUSUS TUTOR), folder kelompok dari zip P11, folder Kode P13 (C3_P13_Hard_PanelTips/panel_tips.txt)."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Dashboard tiap kelompok punya **nama, warna, dan (bila ada) foto sendiri**, dan siswa bisa menunjuk di mana mengubahnya (:root, PROFIL KELOMPOK)."], ["p", "2. Siswa bisa **mengubah aturan** dashboard (ambang & teks peringatan) dan membuktikannya dengan banner yang muncul."], ["p", "3. Website kelompok **tayang** di https://sma-0X.inspiralabs.id dan tiap kelompok **mendemokan** alat + website ±2 menit."], ["h2", "Persiapan H-1"], ["li", "☐ Backend online: https://api-ekskulcoding.inspiralabs.id/health → ok. Semua alat kelompok masih mengirim data (buka sma-01 … sma-06)."], ["li", "☐ py tools/kelompok.py paket → simpan dist/paket/sma-0X.zip di flashdisk, untuk kelompok yang folder P11-nya hilang."], ["li", "☐ Jalankan SCRIPT_P13_SMA.gs: folder Kode berisi C3_P13_Hard_PanelTips/panel_tips.txt; link \"Kode P13\" & \"Post Test Pertemuan 13\" di Linktree aktif."], ["li", "☐ Coba sendiri snippet panel tips di satu folder kelompok: panel muncul, tips berubah saat sensor digenggam/ditiup."], ["li", "☐ Laptop tutor siap deploy: repo ter-update, py tools/kelompok.py deploy jalan (--dry-run dulu), akses push ke master."], ["li", "☐ Tempat pengumpulan zip (flashdisk / folder Drive) + daftar centang sma-01 … sma-06."], ["li", "☐ Print **rubrik Demo Day** (Khusus Tutor). Kertas PIN kelompok (dari P12) dibawa untuk yang lupa."], ["li", "☐ WiFi kelas 2.4 GHz + hotspot cadangan, 2 power bank."], ["h2", "15 menit sebelum kelas"], ["li", "Nyalakan semua alat, pastikan angka di tiap dashboard hidup."], ["li", "Urutan Demo Day ditulis di papan (sukarela dulu, sisanya undian)."], ["li", "Proyektor + HDMI siap; timer HP 2,5 menit."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–5", "1–5", "Cover, pemantik, agenda, cara dapat poin", "Tampung 2–3 jawaban (+2), jangan dijawab dulu"], ["5–12", "6–9", "Folder website, :root, profil & foto, Tanya Jawab", "Jawab pemantik di slide 6. Demo live: ganti 1 warna di proyektor"], ["12–17", "10", "Easy: Ganti Baju Dashboard", "Pastikan semua bisa membuka index.html di Chrome"], ["17–21", "11–12", "Otak dashboard, Tanya Jawab", "Ctrl+F AMBANG_BATAS_SUHU_TINGGI"], ["21–28", "13", "Medium: Aturan Kita Sendiri", "Ingatkan: kembalikan ambang ke angka masuk akal"], ["28–31", "14–15", "Panggung bonus, Tanya Jawab", "Kode disalin, bukan diketik"], ["31–39", "16", "Hard: Panel Tips Pintar", "Mulai terima zip & deploy yang sudah siap"], ["39–42", "17–18", "Serahkan website, website online", "Kumpulkan semua zip apa adanya"], ["42–58", "19", "Demo Day 6 × ±2,5 menit", "Isi rubrik sambil menonton; penanya +2"], ["58–62", "20–21", "Tanya Jawab pengembangan + peta", "2–3 siswa berbagi (+2)"], ["62–70", "22–23", "Post-test + penutup + foto bersama", ""]]], ["p", "Waktu molor? Urutan yang boleh dipangkas: (1) Hard jadi demo tutor (tempel snippet di proyektor), (2) Medium cukup ganti teks peringatan. **Demo Day tidak dipotong.** Yang belum selesai **tidak** jadi PR: zip dikumpulkan apa adanya."], ["h2", "Kalimat kunci"], ["li", "\"Fitur dashboard kalian semua sama. Yang bikin beda: tampilannya dan cara dia 'ngomong' ke pengunjung.\""], ["li", "\":root itu remote tema. Ganti di satu tempat, seluruh website ikut.\""], ["li", "\"if artinya 'kalau'. Kalian yang menentukan kapan website menganggap ruangan panas.\""], ["li", "\"Edit → Save → Refresh. Tiga langkah itu siklus kerja web developer.\""], ["li", "\"Website-nya online, tapi tombol kipas tetap dikunci PIN. Lihat boleh, pencet jangan.\""], ["h2", "Manajemen kelas"], ["li", "**Berdua (sma-04/05/06):** satu pegang laptop (edit kode), satu pegang alat & foto (cek alat online, latihan demo). Tukar di Topik 2. Saat Demo Day **keduanya bicara**."], ["li", "**Individu (sma-01/02/03):** Easy dulu, lalu Medium. Hard kalau waktu cukup. Saat Demo Day boleh minta tetangga memegang alat."], ["li", "Siswa yang cepat selesai Easy: tunjukkan dashboard-nya di proyektor 10 detik (\"siapa yang berani warna paling nyeleneh?\"). Ini memancing yang lain."], ["li", "Remaja grogi tampil: format 4 langkah di slide 19 adalah \"naskah\"; boleh membaca catatan. Tepuk tangan setelah tiap penampil."], ["li", "Pertanyaan penonton: maksimal 1 per penampil, utamakan siswa yang belum dapat +2."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya", "Jawaban yang dicari"], ["Setelah Easy", "\"Kalau mau ganti warna tombol & judul sekaligus, ubah di mana?\"", "Variabel di :root"], ["Setelah Medium", "\"Ambang 31, suhu 30. Banner muncul?\"", "Tidak, 30 tidak lebih besar dari 31"], ["Setelah Hard", "\"Kenapa aturan kelembapan harus sebelum else terakhir?\"", "Aturan dicek dari atas; else = sisanya"], ["Demo Day", "\"Angka di website ini datang dari mana?\"", "Sensor → ESP32 → WiFi → server → website"]]], ["h2", "Kesalahan umum & cara membimbing (jangan langsung beri jawaban)"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Perubahan tidak terlihat", "\"Sudah Save? Sudah Refresh? Yang kamu buka di Chrome file dari folder mana?\""], ["Seluruh tampilan berantakan setelah edit CSS", "\"Bandingkan baris yang kamu ubah dengan aslinya: ada ; atau } yang hilang?\""], ["Warna kembali default", "\"Nama variabelnya masih persis --warna-primer?\""], ["Banner tidak muncul padahal ambang sudah diturunkan", "\"Tanda kutip & tanda + masih lengkap? Buka Console (F12), ada tulisan merah?\""], ["Panel tetap \"Menunggu data...\"", "\"id di <p> dan di getElementById sama persis?\""], ["Foto tidak tampil", "\"Nyalakan *File name extensions*. Nama lengkap filenya apa?\""], ["class/id ikut diganti → tampilan rusak", "\"Yang boleh diganti teks atau tag? Bandingkan dengan zip asli.\""]]], ["p", "Kalau setelah **2 pertanyaan** masih buntu, tunjukkan **lokasi**-nya (\"cek baris yang kamu ubah terakhir\"), bukan perbaikannya."], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Penyebab", "Tindakan"], ["Angka dashboard -- terus", "Alat mati/tidak online, atau folder kelompok lain", "Cek Serial Monitor alat (kode respons 200?), cek Device ID di api.js"], ["Folder kelompok hilang", "Belum disimpan dari P11", "Pakai dist/paket/sma-0X.zip dari flashdisk"], ["Kotak PIN muncul terus saat demo kipas", "PIN salah tersimpan di browser", "Masukkan ulang PIN dari kertas P12"], ["Deploy ditolak", "Tidak ada index.html / zip > 10 MB", "Kecilkan foto, cek nama file, zip ulang"], ["api.js diubah siswa", "—", "Tidak masalah: saat deploy selalu diganti versi tutor"], ["Alat gagal online saat Demo Day", "WiFi/daya", "> 1 menit → demo dari website kelompok lain/alat tutor + penjelasan; nilai penjelasan tetap penuh"], ["WiFi kelas putus", "—", "Pindah hotspot cadangan (isi 2 baris WiFi firmware + upload), atau Demo Day dari website + cerita"]]], ["h2", "Serah terima & deploy (selama kelas)"], ["p", "1. Terima sma-0X.zip, centang di daftar."], ["p", "2. py tools/kelompok.py deploy sma-0X D:\\kiriman\\sma-0X.zip --dry-run → kalau aman, ulangi tanpa --dry-run."], ["p", "3. git add kelompok/sma-0X → commit → push (bisa beberapa kelompok sekaligus). Deploy otomatis berjalan di server."], ["p", "4. Buka https://sma-0X.inspiralabs.id di proyektor saat Demo Day kelompok itu: momen \"website kita online!\"."], ["li", "Yang belum sempat: tutor deploy setelah kelas dan membagikan link di grup. Siswa **tidak** perlu mengerjakan apa pun lagi."], ["h2", "Keselamatan"], ["li", "Alat tidak dibongkar hari ini. Hanya kipas DC 5V; cabut USB kalau ada kabel yang harus dibetulkan."], ["li", "PIN kelompok **tidak** ditampilkan di proyektor."], ["li", "Foto anggota di website hanya dengan persetujuan anggota (dan wali, bila sekolah mewajibkan). Boleh pakai foto alat saja."], ["h2", "Diferensiasi"], ["li", "**Cepat selesai:** isi kotak kosong bagianGrafik (grafik riwayat via CDN) atau ubah aturan status suhu (22/29) di kartu suhu; bantu tetangga dengan **bertanya**, bukan mengambil alih keyboard."], ["li", "**Kesulitan:** fokus Easy (nama + 1 warna) + siap Demo Day. Medium cukup ganti teks peringatan."], ["h2", "Penilaian"], ["li", "**Keaktifan:** +2 per bertanya/menjawab, termasuk penonton Demo Day."], ["li", "**Challenge:** Easy **+5**, Medium **+10**, Hard **+15** (leaderboard), untuk kedua anggota pasangan."], ["li", "**Demo Day:** rubrik 1–4 (Fungsi · Dashboard · Penjelasan · Presentasi), lihat Khusus Tutor."], ["li", "**Post-test:** 5 soal, kunci B, C, A, B, D."], ["h2", "Penutup"], ["li", "Refleksi: 1 hal yang dulu terasa susah (instal Arduino IDE? WiFi? kabel relay?) dan sekarang bisa dijelaskan. Kaitkan ke profesi: IoT engineer, web developer, teknisi elektronika."], ["li", "Umumkan: website tetap online di https://sma-0X.inspiralabs.id; angkanya hidup selama alat menyala & tersambung WiFi."], ["li", "**Tidak ada PR.** Tutor setelah kelas: deploy sisa zip, kirim link ke tiap kelompok, arsipkan rubrik & nilai."]]};

function jalankan() {
  const id = (FOLDER_PERTEMUAN.match(/folders\/([\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive P13 dulu.');
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
