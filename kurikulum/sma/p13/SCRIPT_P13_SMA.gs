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

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 13 - SMA",
  "soal": [
    {
      "q": "1. Foto sudah ada di folder kelompok, tapi tidak tampil di kartu Profil Kelompok. Nama filenya Foto Kelompok.JPG. Penyebab paling mungkin adalah…",
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
      "q": "2. File di folder kelompok yang TIDAK boleh diubah sebelum diserahkan ke tutor adalah…",
      "kode": "",
      "opsi": [
        "api.js",
        "style.css",
        "foto-kelompok.jpg",
        "Teks nama anggota di index.html"
      ],
      "kunci": 0
    },
    {
      "q": "3. Kelompokmu ingin menambah grafik memakai library JavaScript. Cara yang sesuai aturan serah terima adalah…",
      "kode": "",
      "opsi": [
        "npm install lalu serahkan folder node_modules",
        "Memanggil library lewat CDN: <script src=\"https://...\">",
        "Menyalin library dari C:\\Users\\...",
        "Mengubah api.js"
      ],
      "kunci": 1
    },
    {
      "q": "4. Kenapa sensor DHT22 sebaiknya tidak ditaruh menempel di sebelah ESP32 di dalam kotak tertutup?",
      "kode": "",
      "opsi": [
        "Sinyal WiFi terganggu",
        "Panas dari ESP32 membuat suhu terbaca lebih tinggi dari suhu ruangan",
        "Relay jadi active-HIGH",
        "Kipas berputar terbalik"
      ],
      "kunci": 1
    },
    {
      "q": "5. Seorang pengunjung membuka https://sma-04.inspiralabs.id lalu menekan tombol kipas. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Kipas langsung berubah tanpa syarat",
        "Website rusak",
        "Website meminta PIN kelompok; tanpa PIN yang benar, pengunjung hanya bisa melihat",
        "Data suhu terhapus"
      ],
      "kunci": 2
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P13 SMA — Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor", "blok": [["h1", "Panduan Pengajar — P13 SMA: Rapikan, Kustom, Serahkan + Showcase"], ["p", "Sabtu, 14 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P13, sumber/Materi_Ajar_P13_SMA_InspiraLabs.md (rubrik & kunci di KHUSUS TUTOR), folder kelompok, foto P10 (\"sebelum\")."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Rakitan **rapi & berlabel** dan **tetap lolos** kontrol Manual + Otomatis setelah dirapikan."], ["p", "2. Dashboard kelompok punya **profil, foto, dan ≥ 2 warna tema** sendiri; folder lolos checklist Siap Tayang dan diserahkan."], ["p", "3. Setiap penampil melakukan **showcase ±2,5 menit**: masalah → demo → bedah rakitan → 1 masalah terberat → rencana."], ["h2", "Persiapan H-1"], ["li", "☐ Alat tutor berjalan (demo pembuka & cadangan kalau alat kelompok gagal saat showcase)."], ["li", "☐ Bahan rapikan: jumper pendek, cable tie/selotip, label/spidol, gunting (cutter **hanya** dipegang tutor)."], ["li", "☐ Tempat pengumpulan folder (flashdisk / folder Drive per Device ID) + daftar centang sma-01…sma-06."], ["li", "☐ Print **rubrik showcase** (Khusus Tutor), 1 lembar per penampil."], ["li", "☐ Siapkan foto P10 tiap kelompok untuk dibandingkan."], ["li", "☐ Hotspot cadangan 2.4 GHz, 2 power bank untuk demo."], ["li", "☐ Tentukan **batas waktu** kirim folder untuk yang belum selesai (mis. Senin 16 November) dan umumkan."], ["h2", "15 menit sebelum kelas"], ["li", "Urutan showcase ditulis di papan (acak atau sukarela). Penampil berikutnya bersiap selama penampil sekarang."], ["li", "Proyektor menampilkan dashboard penampil (laptop siswa atau https://sma-XX.inspiralabs.id kalau sudah tayang)."], ["li", "Timer 2,5 menit siap (HP)."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–3", "—", "Foto P10 vs alat tutor", "\"Mana yang siap dibawa ke pameran?\""], ["3–7", "2–4", "Cover, pemantik (demo gagal), agenda", "Tampung tebakan"], ["7–11", "5–8", "Prototipe → alat, prinsip rapi, posisi sensor, forum Topik 1", ""], ["11–22", "9", "Easy: Rakitan Rapi", "Cabut USB, satu kabel per waktu"], ["22–25", "10–12", "Kustom dashboard, foto, forum Topik 2", "Aktifkan *File name extensions*"], ["25–33", "13", "Medium: Dashboard Kelompok", "Berdua: paralel dengan Easy"], ["33–36", "14–17", "Serah terima, website tayang, checklist demo, forum Topik 3", "Jawab pemantik di slide 16"], ["36–42", "18", "Hard: Siap Tayang", "Kumpulkan folder yang lolos"], ["42–58", "19", "Showcase 6 × ±2,5 menit", "Isi rubrik sambil menonton"], ["58–61", "20", "Refleksi semester", "1 kalimat per siswa: \"skill yang paling berguna\""], ["61–70", "21–22", "Post-test + penutup", ""]]], ["p", "Waktu molor? Hard boleh selesai di rumah (folder dikirim sebelum batas waktu). **Showcase tidak dipotong**: itu penilaian utama."], ["h2", "Kalimat kunci"], ["li", "\"Merapikan = memindah kabel. Aturan P10 berlaku: **cabut USB, satu kabel per waktu, tes ulang**.\""], ["li", "\"Sensor di sebelah ESP32 dalam kotak tertutup ikut kepanasan: angkanya bohong.\""], ["li", "\"Website yang jalan di laptopmu bisa rusak online kalau memanggil file dari C:\\Users\\.... Semua file harus di dalam folder.\""], ["li", "\"Mulai cerita dari **masalah** ('kelas kami panas'), bukan dari 'ini ESP32'.\""], ["h2", "Manajemen kelas"], ["li", "**Berdua:** satu merapikan rakitan (Easy), satu mengkustom dashboard (Medium), lalu sama-sama latihan showcase. **Keduanya wajib bicara** saat showcase (mis. satu cerita masalah & demo, satu bedah rakitan & troubleshooting)."], ["li", "**Individu:** Easy dulu (rakitan harus jalan untuk showcase). Medium minimal profil + 1 warna; sisanya boleh di rumah."], ["li", "Remaja sering grogi tampil. Beri struktur 5 langkah slide 19 sebagai \"naskah\", izinkan membaca catatan. Tepuk tangan setelah tiap penampil."], ["li", "Pertanyaan audiens: maksimal 1 per penampil, dari siswa lain dulu, baru tutor."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya", "Jawaban yang dicari"], ["Setelah Easy", "\"Tes apa yang membuktikan merapikan tidak merusak apa pun?\"", "Manual + Otomatis dari dashboard jalan lagi"], ["Setelah Medium", "\"Foto tidak muncul: 3 kemungkinan?\"", "Nama file, lokasi folder, ekstensi tersembunyi"], ["Showcase", "\"Kenapa D14, bukan D12? Kenapa NO?\"", "D12 strapping pin; fail-safe"]]], ["h2", "Kesalahan umum & cara membimbing"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Setelah dirapikan kipas tidak jalan", "\"Apa yang berubah sejak terakhir jalan? Cek tabel troubleshooting P10 baris mana?\""], ["Kabel kipas pindah ke NC", "\"Saat relay tidak aktif, COM tersambung ke mana?\""], ["Kabel IN bergeser satu lubang", "\"Ikuti kabel biru dengan jari: berhenti di pin berapa?\""], ["Foto tidak tampil", "\"Nyalakan *File name extensions*. Nama lengkap filenya apa?\""], ["class/id ikut diganti → tampilan rusak", "\"Yang boleh diganti teks atau tag? Bandingkan dengan zip asli.\""], ["Folder > 5 MB", "\"Folder mana yang paling besar? (foto asli HP)\""], ["Tidak diminta PIN di incognito", "Wajar kalau Device ID tidak terdaftar di server → lapor tutor, cek FAN_PINS"]]], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Tindakan"], ["Alat gagal online saat showcase", "Cek Serial (lapisan P11). > 1 menit → demo pakai alat tutor + video cadangan; nilai pemahaman tetap penuh"], ["WiFi kelas putus", "Semua pindah ke hotspot cadangan (isi 2 baris WiFi + upload) atau showcase dari video + penjelasan"], ["api.js diubah", "Ganti dengan salinan zip asli (saat deploy juga selalu diganti)"], ["Deploy setelah kelas", "py tools/kelompok.py deploy sma-XX sma-XX.zip --dry-run, lalu tanpa --dry-run; cek https://sma-XX.inspiralabs.id"]]], ["h2", "Keselamatan"], ["li", "Cabut USB saat merapikan. Cutter hanya dipakai tutor; gunting dipakai di meja, bukan di atas rakitan menyala."], ["li", "Hanya kipas DC 5V; terminal logam relay tidak boleh menonjol keluar casing."], ["li", "Saat showcase: PIN tidak ditampilkan di layar; foto anggota hanya dengan persetujuan anggota (dan wali, bila sekolah mewajibkan)."], ["h2", "Diferensiasi"], ["li", "**Cepat:** Bonus dashboard (grafik riwayat via CDN, mode gelap, panel edukasi DHT22) atau casing kardus dengan lubang ventilasi untuk sensor; bantu cek checklist Siap Tayang kelompok lain."], ["li", "**Kesulitan:** prioritas = rakitan jalan + profil nama anggota. Warna & foto boleh dikirim menyusul sebelum batas waktu."], ["h2", "Penilaian"], ["li", "**Showcase (rubrik 1–4, 5 aspek):** Fungsi · Kerapian & keselamatan · Pemahaman · Troubleshooting · Presentasi & kerja sama. Peserta individu dinilai kejelasan & demo pada aspek kerja sama."], ["li", "**Serah terima:** folder lolos 5 poin Siap Tayang (dicek tutor saat deploy)."], ["li", "Challenge Easy/Medium/Hard **+10** masing-masing. Post-test: kunci B, A, B, B, C."], ["h2", "Penutup"], ["li", "Refleksi: apa yang dulu terasa sulit (pinout? active-LOW? WiFi?) dan sekarang bisa dijelaskan. Kaitkan ke profesi: IoT engineer, teknisi elektronika, embedded engineer."], ["li", "Umumkan kapan website tayang di https://sma-XX.inspiralabs.id dan bahwa alat harus **menyala & online** supaya angkanya hidup."], ["li", "Tutor setelah kelas: deploy semua folder, kirim link ke tiap kelompok, arsipkan rubrik & nilai."]]};

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
