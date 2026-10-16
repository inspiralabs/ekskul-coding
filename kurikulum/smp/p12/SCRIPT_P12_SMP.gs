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

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 12 - SMP",
  "soal": [
    {
      "q": "1. Firmware sudah ter-upload di P11. Agar alat tetap mengirim data tanpa laptop, yang dilakukan adalah…",
      "kode": "",
      "opsi": [
        "Menulis ulang firmware",
        "Mencolokkan ESP32 ke power bank (program tetap tersimpan di ESP32)",
        "Menghapus api.js",
        "Mencabut sensor DHT22"
      ],
      "kunci": 1
    },
    {
      "q": "2. Foto kelompok agar tampil di dashboard harus…",
      "kode": "",
      "opsi": [
        "Bernama foto-kelompok.jpg dan disimpan di dalam folder website",
        "Bernama bebas dan disimpan di Downloads",
        "Berukuran minimal 10 MB",
        "Ditempel di api.js"
      ],
      "kunci": 0
    },
    {
      "q": "3. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "Bagian <script> di bawah index.html",
        "Kode warna di :root paling atas style.css",
        "DEVICE_ID di firmware"
      ],
      "kunci": 2
    },
    {
      "q": "4. Manakah yang MELANGGAR aturan serah folder?",
      "kode": "",
      "opsi": [
        "Halaman utama bernama index.html",
        "Foto bernama foto-kelompok.jpg di dalam folder smp-XX",
        "Ukuran folder 3 MB",
        "Mengubah isi api.js"
      ],
      "kunci": 3
    },
    {
      "q": "5. Website kelompok dengan Device ID smp-07 akan bisa dibuka di alamat…",
      "kode": "",
      "opsi": [
        "https://smp-07.inspiralabs.id",
        "https://ekskul.inspiralabs.id/kelompok7",
        "http://192.168.1.23",
        "https://smp-07.com"
      ],
      "kunci": 0
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P12 SMP — Data Muncul di Dashboard & Kustom Website-mu", "blok": [["h1", "Panduan Pengajar — P12 SMP: Data Muncul di Dashboard & Kustom Website-mu"], ["p", "Jum'at, 6 November 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: sumber/Materi_Ajar_P12_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: siswa hanya mengganti **teks** (nama, anggota, judul), **3 kode warna**, dan menambahkan **satu foto**. api.js dan bagian <script> tidak disentuh."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Menyalakan alat dengan power bank (tanpa laptop) dan menunjukkan dashboard yang angkanya berubah saat sensor ditiup."], ["p", "2. Menunjukkan dashboard dengan nama kelompok, anggota, judul alat, dan 3 warna baru, dan angka sensor masih muncul."], ["p", "3. Menyebutkan minimal 3 aturan serah folder (index.html, foto di dalam folder, api.js tidak diubah, ≤ 5 MB)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Cek backend: https://api-ekskulcoding.inspiralabs.id/health."], ["li", "☐ Buka index.html salah satu kelompok di laptop kelas (double-click). Angka contoh 26°C/60% harus berganti jadi data sungguhan dalam ±5 detik. Kalau tidak berganti padahal Serial Monitor 200: catat dan laporkan ke admin backend sebelum kelas."], ["li", "☐ Pastikan semua Device ID sudah pernah 200 di P11. Yang belum → jadwalkan 10 menit pertama."], ["li", "☐ **Charge semua power bank** (13 buah, atau pinjam). Tes satu power bank dengan ESP32 selama 2 menit: kalau mati sendiri (mode hemat), tandai jangan dipakai."], ["li", "☐ Siapkan zip cadangan smp-XX.zip (kalau folder siswa rusak: extract ulang, isi WiFi, upload lagi)."], ["li", "☐ Siapkan cara memindahkan foto dari HP ke laptop (kabel, Google Drive, atau WhatsApp Web). Siapkan HP tutor untuk memotret kelompok yang lupa membawa foto."], ["li", "☐ Siapkan contoh folder smp-99 untuk Challenge Hard (ada di Kunci Materi Ajar) di slide/papan."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Tulis WiFi kelas di papan (sama seperti P11). Nyalakan hotspot cadangan."], ["li", "☐ Di laptop demo tutor: buka VS Code + smp-XX contoh untuk demo kustom di proyektor."], ["li", "☐ Tampilkan di papan: \"Save (Ctrl+S) → Refresh (F5)\"."], ["h3", "Isi kit per kelompok/individu"], ["p", "Alat P11 (firmware sudah terpasang) · power bank terisi + kabel USB · laptop dengan folder smp-XX · foto kelompok di HP."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1", "Pembuka", "Semua alat dicolok ke power bank. Tunjuk peran"], ["5–8", "2–5", "Cover, pemantik, agenda, peran", "Tampung tebakan pemantik"], ["8–12", "6–7", "Alat \"kesepian\", perjalanan data", "Gambar rantai DHT22 → … → Dashboard di papan"], ["12–20", "8", "Praktek buka dashboard", "Tampilkan dashboard satu kelompok di proyektor, ajak semua meniup"], ["20–23", "9–10", "Tips dashboard diam + forum", "Jawab pemantik: website hanya menampilkan data dari server"], ["23–27", "11", "🟢 Easy (wajib)", "Cek: alat tanpa laptop, angka berubah. +10"], ["27–35", "12–15", "Boleh & jangan, profil, warna, foto", "Demo langsung tiap kustom di proyektor (30 detik per langkah). Ganti peran"], ["35–37", "16", "Forum", ""], ["37–52", "17", "🟡 Medium", "Keliling. Prioritas: nama & warna dulu, foto terakhir"], ["52–55", "18", "Aturan serah folder", "Tunjukkan cara cek ukuran folder"], ["55–60", "19", "🔴 Hard", "Tampilkan folder smp-99"], ["60–62", "20", "Peta proyek", "Ingatkan bawa kotak bekas ke P13"], ["62–70", "21–22", "Post-test", "Sendiri-sendiri"]]], ["h2", "4. Kalimat kunci"], ["li", "**Pembuka:** \"Minggu lalu suhu kalian cuma terlihat di laptop. Hari ini terlihat di website kalian sendiri, dan bisa dibuka siapa saja.\""], ["li", "**Perjalanan data:** \"Seperti kirim surat. ESP32 menulis surat berisi suhu, server itu kantor posnya, dashboard yang membaca surat terbaru.\""], ["li", "**Tanpa laptop:** \"Laptop boleh mati, tapi ESP32 tetap butuh listrik. Itu tugas power bank.\""], ["li", "**Kustom:** \"Ganti tulisannya saja. Tanda kurung siku < > itu pagar, jangan dirobohkan.\""], ["li", "**Save → Refresh:** \"Belum berubah? Sudah Ctrl+S? Sudah F5?\""], ["li", "**Foto:** \"Nama foto harus persis foto-kelompok.jpg. Satu huruf beda, fotonya menghilang.\""], ["h2", "5. Mengelola kelas 12–15 tahun"], ["li", "**Hari kreatif = rawan ribut.** Beri batas waktu yang jelas: \"Kalian punya 5 menit untuk memilih nama alat. Setelah itu Operator mulai mengetik.\""], ["li", "**Peran** (slide 5): Operator (mengetik), Desainer (warna), Fotografer (foto & kecilkan), Pengecek (ejaan & aturan). Keputusan nama & warna diputuskan **bersama**, Operator tidak boleh memutuskan sendiri. Ganti peran di menit 27."], ["li", "**Kelompok berempat:** Fotografer dan Desainer bisa bekerja paralel di HP (cari kode warna di Google \"color picker\", resize foto) sementara Operator mengetik nama."], ["li", "**Peserta individu:** pegang semua peran; minta teman sebelah jadi Pengecek ejaan & aturan folder. Foto diri boleh, atau foto alatnya."], ["li", "**Konten pantas:** nama kelompok & judul harus sopan (website akan online dan bisa dilihat orang tua/sekolah). Sampaikan di awal."], ["li", "**Quick win:** angka pertama di dashboard (menit ±15), tiup sensor bersama, warna pertama berubah."], ["h2", "6. Titik cek pemahaman"], ["li", "Setelah slide 7: \"Urutkan bersama: DHT22, ESP32, …\" (kelas melanjutkan: WiFi, internet, server, dashboard)."], ["li", "Setelah slide 10: **jempol**: \"Laptop dimatikan, dashboard tetap jalan? Jempol atas = ya.\" (ya, selama power bank & WiFi ada)."], ["li", "Setelah slide 12: \"File mana yang tidak boleh diubah?\" (api.js)."], ["li", "Setelah slide 18: \"Sebutkan satu aturan serah folder\", tunjuk 3 siswa berbeda."], ["h2", "7. Kesalahan yang sering terjadi & cara membantu"], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Lupa Save / lupa Refresh", "\"Lihat tab file di VS Code, ada titik bulat? Sudah tekan F5?\""], ["Menghapus tanda < > atau </h2>", "\"Bandingkan dengan slide 13. Ada pagar yang hilang?\""], ["Angka sensor hilang setelah kustom", "\"Apa yang kamu hapus selain teks?\" → kalau buntu, salin ulang index.html dari zip asli, ulangi kustom"], ["Titik koma ; atau # di warna terhapus", "\"Baris warna lain bentuknya bagaimana? Bandingkan.\""], ["Foto tidak muncul", "\"Nama filenya persis? Huruf besar? Akhirannya .jpg atau .jpeg? Foto ada di folder yang sama dengan index.html?\""], ["foto-kelompok.jpg.jpg", "Nyalakan View → File name extensions di File Explorer, lalu \"Sekarang namanya apa?\""], ["Edit file di dalam zip (bukan folder hasil extract)", "\"Folder ini dari mana? Yang di Desktop atau di dalam zip?\""], ["Warna teks tidak terbaca", "\"Coba baca dari belakang kelas. Terbaca?\""]]], ["h2", "8. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Angka tetap 26°C / 60%", "ESP32 belum mengirim", "Colok ke laptop, Serial Monitor harus 200 (pakai tabel P11)"], ["Serial Monitor macet di titik-titik", "WiFi salah / 5 GHz / sinyal lemah", "Cek zona hijau, dekatkan ke router, hotspot 2.4 GHz"], ["Angka tidak berubah saat ditiup", "Sensor dibaca tiap 4 detik", "Tiup 5 detik, tunggu 10 detik"], ["ESP32 di power bank mati sendiri", "Power bank mode hemat", "Ganti power bank atau colok laptop"], ["Dashboard menampilkan data kelompok lain", "Folder tertukar", "Cek nama folder & Device ID di HANDOUT"], ["Halaman berantakan / putih setelah kustom", "Tag HTML rusak", "Ctrl+Z di VS Code, atau salin ulang index.html asli"], ["Warna tidak berubah", "Salah file / tidak Save", "Warna ada di style.css, bukan index.html"], ["Folder > 5 MB", "firmware/.pio atau foto besar", "Hapus firmware/.pio; resize foto ke lebar 800 px"]]], ["h2", "9. Keselamatan"], ["li", "Power bank: jangan dipakai kalau menggembung/panas. Jangan ditindih atau dibanting."], ["li", "ESP32 + DHT22 tetap rendah tegangan; tidak ada listrik PLN di meja."], ["li", "**Privasi:** foto & nama siswa akan online di smp-XX.inspiralabs.id. Pastikan sekolah/orang tua sudah setuju. Siswa yang tidak mau wajahnya tampil boleh memakai foto alat atau gambar lain. Jangan tulis nomor HP, alamat, atau info pribadi lain di website."], ["h2", "10. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Hard; lalu bonus: ganti emoji ikon (🌡️, 💧) atau isi kotak .kotak-kosong (\"TAMBAHKAN ELEMEN KAMU DI SINI\") dengan kalimat/ide sendiri, atau ganti warna lain di :root (--warna-panas, --warna-dingin)."], ["li", "**Siswa kesulitan:** target minimum: data tampil + nama kelompok & anggota benar. Tutor mendampingi langkah demi langkah (\"Tekan Ctrl+F. Ketik PROFIL. Sekarang ganti tulisan 'Nama Kelompok Kami' saja.\"). Warna dan foto boleh menyusul di P13."], ["h2", "11. Penilaian"], ["li", "**Challenge:** +10 per challenge (leaderboard). Easy wajib."], ["li", "Easy lulus = alat tanpa laptop, angka selain 26/60 tampil dan berubah saat ditiup."], ["li", "Medium lulus = 4 poin (nama & anggota, judul, 3 warna, foto) **dan** angka sensor masih tampil."], ["li", "Hard lulus = minimal 4 pelanggaran smp-99 ditemukan + cara memperbaikinya + ukuran folder sendiri dicek."], ["li", "**Progres proyek akhir:** data tampil + profil terisi + warna diganti."], ["li", "**Post-test:** 5 soal, individu. Kunci: 1B 2A 3C 4D 5A."], ["h2", "12. Penutup & PR"], ["li", "PR: bawa **kotak bekas** (kardus kecil, kotak plastik, kotak pensil) untuk casing, plus double tape/selotip. **Bukan** kaleng/kotak logam."], ["li", "Yang belum memasang foto: siapkan foto-kelompok.jpg (sudah dikecilkan) untuk P13."], ["li", "Teaser P13: \"Minggu depan alat kalian dapat 'rumah', kalian presentasi, dan website kalian online.\""], ["li", "Setelah kelas: catat kelompok yang dashboard-nya belum menampilkan data atau kustomnya belum selesai."]]};

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
