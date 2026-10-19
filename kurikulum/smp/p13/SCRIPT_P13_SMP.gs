// ============================================================
// SCRIPT P13 SMP — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMP/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMP/POST TEST - Pertemuan 13 - SMP  Google Form mode Quiz (+ spreadsheet Responses)
//   SMP/Panduan Pengajar P13 SMP         Google Docs (kalau ada Panduan_Pengajar_P13_SMP.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P13) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz";  // link atau ID folder Drive P13
const JENJANG = 'SMP';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 13 - SMP",
  "soal": [
    {
      "q": "1. Di dalam casing, sensor DHT22 sebaiknya diletakkan…",
      "kode": "",
      "opsi": [
        "Menempel di atas ESP32 supaya hemat tempat",
        "Di dekat lubang kotak, agak jauh dari ESP32",
        "Dibungkus lakban supaya aman",
        "Di bawah breadboard"
      ],
      "kunci": 1
    },
    {
      "q": "2. Benda yang TIDAK boleh menempel langsung di bawah ESP32 adalah…",
      "kode": "",
      "opsi": [
        "Double tape",
        "Kardus",
        "Aluminium foil atau logam",
        "Kotak plastik"
      ],
      "kunci": 2
    },
    {
      "q": "3. Setelah alat dimasukkan ke casing, dashboard berhenti update. Langkah pertama yang tepat adalah…",
      "kode": "",
      "opsi": [
        "Menulis ulang firmware",
        "Membuka kotak, colok ke laptop, dan membaca Serial Monitor",
        "Mengganti warna dashboard",
        "Mengganti Device ID"
      ],
      "kunci": 1
    },
    {
      "q": "4. Urutan perjalanan data yang benar adalah…",
      "kode": "",
      "opsi": [
        "Dashboard → Server → ESP32 → DHT22",
        "DHT22 → ESP32 → WiFi/Internet → Server → Dashboard",
        "ESP32 → DHT22 → Dashboard → Server",
        "Server → DHT22 → ESP32 → Dashboard"
      ],
      "kunci": 1
    },
    {
      "q": "5. Folder website yang diserahkan ke tutor sudah BENAR jika…",
      "kode": "",
      "opsi": [
        "Zip bernama smp-07.zip, berisi index.html, ukurannya tidak lebih dari 5 MB",
        "Halaman utama bernama rumah.html dan foto ada di Downloads",
        "Ukurannya 300 MB karena video rakitan ikut di dalamnya",
        "api.js sudah diganti dengan Device ID kelompok lain"
      ],
      "kunci": 0
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P13 SMP — Rapikan Alat & Showcase Proyek Akhir 🏆", "blok": [["h1", "Panduan Pengajar — P13 SMP: Rapikan Alat & Showcase Proyek Akhir"], ["p", "Jum'at, 13 November 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap, kunci & rubrik: sumber/Materi_Ajar_P13_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: **tidak ada kode baru.** Alat dimasukkan ke casing, diuji ulang, dipamerkan, dan folder website diserahkan. Paling aman: kabel out tetap di **D4**."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Menunjukkan alat di dalam casing berlabel Device ID, menyala dengan power bank, dan dashboard tetap berubah saat sensor ditiup."], ["p", "2. Presentasi ±1 menit dengan 3 kalimat sakti + demo tiup sensor (di kelompok, setiap anggota bicara minimal 1 kalimat)."], ["p", "3. Menyerahkan smp-XX.zip (ada index.html, foto di dalam folder, api.js asli, ≤ 5 MB)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Cek semua Device ID pernah mengirim data (dari catatan P12). Selesaikan yang tertinggal sebelum kelas kalau bisa."], ["li", "☐ **Charge semua power bank.** Siapkan 1–2 power bank cadangan."], ["li", "☐ Siapkan bahan bersama: double tape, selotip, karet gelang, spidol, kertas label, 3–4 gunting, **1 cutter (dipegang tutor saja)**, 3–4 kotak kardus cadangan."], ["li", "☐ Print **rubrik** (Materi Ajar → Khusus Tutor) 13 lembar, atau siapkan di spreadsheet."], ["li", "☐ Siapkan undian urutan showcase (13 kertas smp-01…smp-13) dan timer yang terlihat (HP di proyektor / jam dinding)."], ["li", "☐ Siapkan flashdisk atau folder Drive \"Zip P13 SMP\" untuk menerima zip."], ["li", "☐ Siapkan proyektor + laptop tutor dengan 13 tab dashboard (index.html tiap kelompok, atau minta kelompok memproyeksikan dari laptopnya sendiri)."], ["li", "☐ Izin foto/video showcase dari sekolah (untuk konten Reels)."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Nyalakan hotspot cadangan 2.4 GHz. Tulis WiFi di papan."], ["li", "☐ Atur \"meja bahan\" di depan: tempat gunting, tape, label. Cutter tetap di tangan tutor."], ["li", "☐ Tulis di papan: \"Cabut USB sebelum memindah kabel\" dan \"Cutter = tutor\"."], ["h3", "Isi kit per kelompok/individu"], ["p", "Alat P12 + power bank + kabel USB · kotak bekas · laptop dengan folder smp-XX · kertas untuk 3 kalimat sakti."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1", "Pembuka", "Semua alat dicolok power bank, cek dashboard. Undi urutan showcase"], ["5–8", "2–5", "Cover, pemantik, agenda, peran", "Tampung tebakan pemantik. Tunjuk peran"], ["8–13", "6–10", "Engineer, perjalanan, casing, aturan, kabel", "Tunjukkan contoh casing jadi (siapkan 1 contoh)"], ["13–30", "11", "Praktek casing", "Keliling dengan cutter. Cek posisi sensor & lubang USB"], ["30–32", "12–13", "Tips uji ulang + forum", "Jawab pemantik: dirapikan = bisa rusak, maka uji ulang"], ["32–35", "14", "🟢 Easy (wajib)", "Cek checklist tiap kelompok. +10"], ["35–38", "15", "🔴 Hard", "Hanya untuk yang lulus Easy. Lewati kalau sudah lewat menit 35"], ["38–41", "16–17", "3 kalimat sakti, serah folder", "Tunjukkan cara zip (Send to → Compressed folder)"], ["41–42", "18", "Forum", ""], ["42–47", "19", "🟡 Medium", "Kelompok berpasangan latihan; individu berpasangan dengan individu"], ["47–60", "20", "Showcase", "±1 menit per Device ID, timer terlihat. Kumpulkan zip sambil showcase"], ["60–62", "21", "Refleksi", "2–3 siswa menjawab"], ["62–70", "22–23", "Post-test + foto bersama", "Sendiri-sendiri, lalu foto kelas dengan alatnya"]]], ["h2", "4. Kalimat kunci"], ["li", "**Pembuka:** \"Lima minggu lalu kalian belum pernah pegang ESP32. Hari ini alat kalian mengirim suhu ke internet. Hari ini kita kasih alat kalian 'rumah', lalu pamerkan.\""], ["li", "**Casing:** \"Alat sungguhan selalu punya casing. Router di rumah kalian juga.\""], ["li", "**Sensor:** \"Sensor harus bernapas udara ruangan. Kalau dia berdempetan dengan ESP32 yang hangat, suhunya bohong.\""], ["li", "**Korsleting:** \"Korsleting itu listrik yang mengambil jalan pintas lewat logam atau air. Makanya tidak ada foil atau kaleng.\""], ["li", "**Uji ulang:** \"Engineer tidak bilang 'tadi sudah jalan'. Engineer bilang 'saya sudah uji lagi'.\""], ["li", "**Showcase:** \"Satu menit, tiga kalimat, satu tiupan. Penonton: tepuk tangan dan satu pertanyaan.\""], ["h2", "5. Mengelola kelas 12–15 tahun"], ["li", "**Hari terakhir = semangat tinggi, fokus rendah.** Pakai timer besar di proyektor untuk setiap blok. Umumkan \"5 menit lagi\" sebelum blok berakhir."], ["li", "**Peran** (slide 5): Perakit (menempel & merapikan), Pengecek (uji ulang & checklist Siap Tampil), Desainer (menghias casing & label), Presenter (memimpin latihan 3 kalimat). Saat showcase, **semua anggota bicara minimal 1 kalimat**: kelompok 4 → 3 kalimat + 1 orang demo tiup; kelompok 2 → satu orang 2 kalimat."], ["li", "**Peserta individu:** pegang semua peran, presentasi sendiri. Latihan Medium berpasangan dengan individu lain. Beri pujian khusus untuk kemandirian."], ["li", "**Siswa malu presentasi:** boleh membaca dari kertas; boleh berdiri di samping teman. Jangan dipaksa sendirian di depan. Tutor bisa memancing: \"Alat kalian namanya apa?\""], ["li", "**Menghias casing bisa menyita waktu.** Aturan: fungsi dulu (sensor, lubang USB, label), hias belakangan. Hiasan lanjut di rumah."], ["li", "**Penonton showcase:** beri tugas: setiap kelompok menyiapkan 1 pertanyaan untuk kelompok lain (diundi), supaya tetap memperhatikan."], ["h2", "6. Titik cek pemahaman"], ["li", "Setelah slide 9: \"Sensor ditaruh di mana?\" (dekat lubang, jauh dari ESP32). \"Boleh pakai kaleng?\" (tidak, korsleting)."], ["li", "Setelah slide 12: **jempol**: \"Jempol atas kalau dashboard masih jalan setelah masuk casing.\""], ["li", "Setelah slide 17: \"Ukuran folder maksimal berapa?\" (5 MB). \"Foto namanya?\" (foto-kelompok.jpg)."], ["li", "Saat showcase: pertanyaan tutor ke tiap kelompok: \"Tunjuk pin 3V3, GND, dan D4 di alat kalian.\" (masuk rubrik Pemahaman)."], ["h2", "7. Kesalahan yang sering terjadi & cara membantu"], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Sensor ditempel berdempetan dengan ESP32", "\"Pegang ESP32-nya sebentar. Hangat? Apa akibatnya untuk sensor di sebelahnya?\""], ["Lubang USB terlalu sempit, kabel tertekuk", "\"Kalau kabelnya tertekuk terus, lama-lama apa yang terjadi?\""], ["Kabel tercabut saat memasukkan ke kotak", "\"Dashboard masih jalan? Kalau tidak, Serial Monitor bilang apa?\""], ["Kabel out pindah dari D4 saat merapikan", "\"Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?\""], ["Tidak ada label Device ID", "\"Kalau 13 kotak dikumpulkan di meja tutor, bagaimana tahu yang mana punya kalian?\""], ["Foto/logo di luar folder", "\"Kalau folder ini dikirim ke tutor, foto di Downloads ikut tidak?\""], ["Video/foto asli HP ikut (zip puluhan–ratusan MB)", "\"Klik kanan folder → Properties. Berapa ukurannya? Batasnya berapa?\""], ["Lupa api.js asli / sudah diubah", "\"Ingat aturan nomor 4?\" → salin api.js dari zip asli"]]], ["h2", "8. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Dashboard tidak update setelah masuk casing", "Kabel tercabut", "Buka kotak, colok laptop, baca Serial Monitor (tabel P11)"], ["Gagal baca sensor kadang-kadang", "Kabel tertekan tutup / setengah lepas", "Rapikan jalur kabel, tekan sampai mentok"], ["Suhu 1–3°C lebih tinggi dari kelompok lain", "Sensor dekat ESP32 / kotak tertutup rapat", "Pindah sensor ke dekat lubang, tambah lubang ventilasi"], ["ESP32 sering restart", "Kabel USB tertekuk / power bank lemah", "Perlebar lubang, ganti power bank"], ["Breadboard bergeser", "Tidak ditempel", "Double tape di bawah breadboard"], ["Proyektor tidak menampilkan data", "WiFi laptop tutor / tab lama", "Refresh tab; pakai laptop kelompok itu"], ["Zip > 5 MB", "Foto/video besar", "Hapus video, resize foto, zip ulang"], ["Siswa lupa membawa kotak", "—", "Pakai kardus cadangan tutor"]]], ["h2", "9. Keselamatan"], ["li", "**Cutter hanya dipegang tutor.** Siswa menandai lubang dengan spidol, tutor yang memotong. Gunting boleh dipakai siswa."], ["li", "**Tidak pakai lem tembak** (panas) di dekat board atau sensor. Pakai double tape/selotip."], ["li", "**Tidak ada logam/aluminium foil/kaleng** di dalam casing: kaki pin bisa korsleting."], ["li", "Cabut USB sebelum memindah kabel atau menempel board."], ["li", "Uji Goyang: goyang **pelan**, jangan dilempar/dibanting."], ["li", "Power bank yang panas atau menggembung jangan dipakai."], ["li", "Foto/video showcase hanya dipakai sesuai izin sekolah."], ["h2", "10. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Hard (Uji Goyang); casing lebih rapi (jendela sensor, label kabel lengkap); bantu kelompok lain merapikan **dengan memberi saran**; bonus: tambah satu elemen di dashboard (kotak .kotak-kosong) sebelum zip."], ["li", "**Siswa kesulitan:** target minimum: alat di kotak sederhana dengan lubang USB + sensor menghadap keluar + label Device ID, menyala dengan power bank. Presentasi boleh membaca dari kertas. Tutor membantu memeriksa folder sebelum zip."], ["h2", "11. Penilaian"], ["li", "**Challenge:** +10 per challenge (leaderboard). Easy wajib."], ["li", "Easy lulus = 4 checklist Siap Tampil terpenuhi."], ["li", "Hard lulus = data tetap masuk selama digoyang pelan, tanpa Gagal baca sensor."], ["li", "Medium lulus = 3 kalimat tertulis + latihan ke kelompok sebelah + menerima 1 pertanyaan."], ["li", "**Rubrik showcase** (skor 1–4, di Materi Ajar): alat berfungsi, kerapian, pemahaman, presentasi, website, kerja sama (individu: kemandirian)."], ["li", "**Post-test:** 5 soal, individu. Kunci: 1B 2C 3B 4B 5A."], ["li", "Umumkan **leaderboard akhir** P9–P13 di penutup (kalau sudah direkap)."], ["h2", "12. Penutup & tindak lanjut"], ["li", "Foto bersama kelas memegang alat masing-masing."], ["li", "\"Website kalian akan online di smp-XX.inspiralabs.id. Link-nya dibagikan di grup setelah tutor upload.\""], ["li", "Alat boleh dibawa pulang/disimpan sesuai kebijakan sekolah (putuskan sebelum kelas)."], ["li", "**Setelah kelas (tutor):** cek tiap zip (nama, ukuran, index.html, foto), deploy (deploy/README.md), buka ke-13 alamat untuk memastikan tampil, lalu bagikan link ke grup."]]};

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
