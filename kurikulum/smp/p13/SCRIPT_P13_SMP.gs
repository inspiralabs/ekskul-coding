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

const PANDUAN = {"judul": "Panduan Pengajar P13 SMP — Sempurnakan Alat & Showcase Proyek Akhir 🏆", "blok": [["h1", "Panduan Pengajar — P13 SMP: Sempurnakan Alat & Showcase Proyek Akhir"], ["p", "Jum'at, 13 November 2026 · 70 menit · 13 Device ID (smp-01–smp-05 individu, smp-06–smp-09 berdua, smp-10–smp-12 berempat, smp-13 bertiga)."], ["p", "Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap, kunci & rubrik: sumber/Materi_Ajar_P13_SMP_InspiraLabs.md."], ["kutip", "Prinsip hari ini: **tidak ada kode baru, tidak ada rakitan baru.** Foto kelompok dipasang, alat dimasukkan ke kardus sederhana (\"rumah alat\"), diuji ulang, dipamerkan, dan folder website diserahkan. Hari ini adalah **perayaan**: buat siswa bangga dengan karyanya. Paling aman: kabel out tetap di **D4**."], ["h2", "1. Tujuan pertemuan (yang bisa dilihat)"], ["p", "Di akhir kelas, setiap kelompok/individu:"], ["p", "1. Menunjukkan dashboard dengan foto-kelompok.jpg tampil dan angka sensor tetap muncul."], ["p", "2. Menunjukkan alat di dalam rumah alat berlabel Device ID, menyala dengan power bank, dan dashboard berubah saat sensor ditiup."], ["p", "3. Presentasi ±1 menit dengan 3 kalimat sakti + demo tiup sensor, lalu menyerahkan smp-XX.zip (≤ 5 MB)."], ["h2", "2. Persiapan"], ["h3", "H-1"], ["li", "☐ Cek semua Device ID pernah mengirim data (dari catatan P12). Selesaikan yang tertinggal sebelum kelas kalau bisa."], ["li", "☐ Perbarui tombol \"Post Test Pertemuan 13\" di Linktree (Google Form P13 dari SCRIPT_P13_SMP.gs)."], ["li", "☐ **Charge semua power bank.** Siapkan 1–2 power bank cadangan."], ["li", "☐ Siapkan **13 kardus kecil** + 2–3 cadangan (kotak sepatu anak, kotak HP bekas, kotak snack). Siswa **tidak** diminta membawa apa-apa."], ["li", "☐ Siapkan bahan bersama: double tape, selotip, spidol, kertas label, 3–4 gunting, **1 cutter (dipegang tutor saja)**."], ["li", "☐ Print **rubrik** (Materi Ajar → Khusus Tutor) 13 lembar, atau siapkan di spreadsheet."], ["li", "☐ Siapkan undian urutan showcase (13 kertas smp-01…smp-13) dan timer yang terlihat (HP di proyektor / jam dinding)."], ["li", "☐ Siapkan flashdisk atau folder Drive \"Zip P13 SMP\" untuk menerima zip."], ["li", "☐ Izin foto/video showcase dari sekolah (untuk konten Reels). Pastikan juga sekolah/orang tua setuju foto siswa tampil di website."], ["h3", "15 menit sebelum kelas"], ["li", "☐ Nyalakan hotspot cadangan 2.4 GHz. Tulis WiFi di papan."], ["li", "☐ Atur \"meja bahan\" di depan: kardus, gunting, tape, label. Cutter tetap di tangan tutor."], ["li", "☐ Siapkan 1 contoh rumah alat jadi (buat sendiri sebelumnya) untuk ditunjukkan."], ["li", "☐ Tulis di papan: \"Cabut USB sebelum memindah kabel\", \"Cutter = tutor\", dan \"Foto: foto-kelompok.jpg\"."], ["h3", "Isi kit per kelompok/individu"], ["p", "Alat P12 + power bank + kabel USB · kardus kecil · laptop dengan folder smp-XX · HP/kamera laptop untuk foto · kertas untuk 3 kalimat sakti."], ["h2", "3. Timeline per menit"], ["tabel", [["Menit", "Slide", "Kegiatan", "Yang tutor lakukan"], ["0–5", "1–6", "Pembuka, cover, pemantik, agenda, peran, poin", "Semua alat dicolok power bank, cek dashboard. Undi urutan showcase. Tampung tebakan (+2)"], ["5–8", "7", "Perjalanan kita", "Ajak siswa menyebut momen paling seru tiap pertemuan"], ["8–16", "8", "Foto kelompok", "Fotografer memotret & mengecilkan. Perakit mulai menyiapkan kardus"], ["16–30", "9–10", "Rumah alat + uji ulang", "Keliling dengan cutter. Cek posisi sensor & lubang USB"], ["30–32", "11–12", "Tips uji ulang + Tanya Jawab", "Jawab pemantik: dirapikan = bisa rusak, maka uji ulang. +2 per penjawab"], ["32–35", "13", "🟢 Easy", "Cek checklist tiap kelompok. +5"], ["35–38", "14", "🔴 Hard", "Hanya untuk yang lulus Easy. Lewati kalau sudah lewat menit 35. +15"], ["38–41", "15–16", "3 kalimat sakti, serah folder", "Tunjukkan cara zip (Send to → Compressed folder)"], ["41–42", "17", "Tanya Jawab", "+2 per penjawab"], ["42–47", "18", "🟡 Medium", "Kelompok berpasangan latihan; individu berpasangan dengan individu. +10"], ["47–60", "19", "Showcase", "±1 menit per Device ID, timer terlihat. Kumpulkan zip sambil showcase. Penanya +2"], ["60–62", "20", "Refleksi", "3–4 siswa berbagi (+2). Catat ide alat IoT mereka"], ["62–70", "21–22", "Post-test + foto bersama", "Sendiri-sendiri, lalu foto kelas dengan alatnya"]]], ["h2", "4. Kalimat kunci (boleh dibacakan)"], ["li", "**Pembuka:** \"Lima minggu lalu kalian belum pernah pegang ESP32. Hari ini alat kalian mengirim suhu ke internet. Hari ini kita rayakan!\""], ["li", "**Rumah alat:** \"Alat sungguhan selalu punya rumah. Router di rumah kalian juga. Kardus pun cukup, asal sensornya bisa bernapas.\""], ["li", "**Sensor:** \"Sensor harus menghirup udara ruangan. Kalau dia berdempetan dengan ESP32 yang hangat, suhunya bohong.\""], ["li", "**Korsleting:** \"Korsleting itu listrik yang mengambil jalan pintas lewat logam atau air. Makanya tidak ada foil atau kaleng.\""], ["li", "**Uji ulang:** \"Engineer tidak bilang 'tadi sudah jalan'. Engineer bilang 'saya sudah uji lagi'.\""], ["li", "**Showcase:** \"Satu menit, tiga kalimat, satu tiupan. Penonton: tepuk tangan dan satu pertanyaan.\""], ["h2", "5. Gaya mengajar: belajar sambil bermain"], ["li", "**Hari terakhir = semangat tinggi, fokus rendah.** Pakai timer besar di proyektor untuk setiap blok. Umumkan \"5 menit lagi\" sebelum blok berakhir."], ["li", "**Fungsi dulu, hias belakangan.** Urutan rumah alat: sensor dekat lubang → lubang USB → label → hiasan (kalau sempat). Tidak ada hiasan yang dibawa pulang sebagai tugas."], ["li", "**Showcase seperti panggung:** sambut tiap kelompok dengan nama alatnya (\"Silakan, Smart Room Monitor Kelompok Elang!\"), tepuk tangan setiap selesai."], ["li", "**Siswa malu presentasi:** boleh membaca dari kertas; boleh berdiri di samping teman. Jangan dipaksa sendirian di depan. Tutor bisa memancing: \"Alat kalian namanya apa?\""], ["li", "**Penonton aktif:** setiap pertanyaan dari penonton +2, supaya mereka tetap memperhatikan."], ["li", "**Peran:** Fotografer (foto & kecilkan), Perakit (memasukkan alat ke rumah), Desainer (hias & label), Presenter (pimpin latihan 3 kalimat). Saat showcase **semua anggota bicara minimal 1 kalimat**: kelompok 4 → 3 kalimat + 1 orang demo tiup; kelompok 2 → satu orang 2 kalimat."], ["li", "**Peserta individu:** pegang semua peran, presentasi sendiri. Latihan Medium berpasangan dengan individu lain. Beri pujian khusus untuk kemandirian."], ["h2", "6. Sistem poin & cara mencatat"], ["tabel", [["Kegiatan", "Poin", "Untuk siapa"], ["Bertanya / menjawab (pemantik, Tanya Jawab), bertanya saat showcase, berbagi saat Refleksi", "+2", "Siswa yang bicara"], ["🟢 Easy", "+5", "Setiap anggota kelompok"], ["🟡 Medium", "+10", "Setiap anggota kelompok"], ["🔴 Hard", "+15", "Setiap anggota kelompok"]]], ["li", "Catat +2 dengan turus saat itu juga. Gilir yang menjawab: utamakan yang belum pernah dapat."], ["li", "Rekap ke gradebook, lalu umumkan **leaderboard akhir** P9–P13 (kalau sudah direkap) di penutup. **Tidak ada PR.**"], ["h2", "7. Titik cek pemahaman"], ["li", "Setelah slide 9: \"Sensor ditaruh di mana?\" (dekat lubang, jauh dari ESP32). \"Boleh pakai kaleng?\" (tidak, korsleting)."], ["li", "Setelah slide 10: **jempol**: \"Jempol atas kalau dashboard masih jalan setelah masuk kotak.\""], ["li", "Setelah slide 16: \"Ukuran folder maksimal berapa?\" (5 MB). \"Foto namanya?\" (foto-kelompok.jpg)."], ["li", "Saat showcase: pertanyaan tutor ke tiap kelompok: \"Tunjuk pin 3V3, GND, dan D4 di alat kalian.\" (masuk rubrik Pemahaman)."], ["h2", "8. Kesalahan yang sering terjadi & cara membantu"], ["tabel", [["Kesalahan", "Pertanyaan pancingan"], ["Foto tidak muncul", "\"Nama filenya persis? Huruf besar? Akhirannya .jpg atau .jpeg? Foto ada di folder yang sama dengan index.html?\""], ["foto-kelompok.jpg.jpg", "Nyalakan View → File name extensions di File Explorer, lalu \"Sekarang namanya apa?\""], ["Sensor ditempel berdempetan dengan ESP32", "\"Pegang ESP32-nya sebentar. Hangat? Apa akibatnya untuk sensor di sebelahnya?\""], ["Lubang USB terlalu sempit, kabel tertekuk", "\"Kalau kabelnya tertekuk terus, lama-lama apa yang terjadi?\""], ["Kabel tercabut saat memasukkan ke kotak", "\"Dashboard masih jalan? Kalau tidak, Serial Monitor bilang apa?\""], ["Kabel out pindah dari D4 saat merapikan", "\"Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?\""], ["Tidak ada label Device ID", "\"Kalau 13 kotak dikumpulkan di meja tutor, bagaimana tahu yang mana punya kalian?\""], ["Video/foto asli HP ikut (zip puluhan–ratusan MB)", "\"Klik kanan folder → Properties. Berapa ukurannya? Batasnya berapa?\""], ["Lupa api.js asli / sudah diubah", "\"Boleh mengubah api.js?\" → salin api.js dari zip asli"]]], ["h2", "9. Troubleshooting cepat"], ["tabel", [["Gejala", "Penyebab paling mungkin", "Tindakan"], ["Dashboard tidak update setelah masuk kotak", "Kabel tercabut", "Buka kotak, colok laptop, baca Serial Monitor (tabel P12)"], ["Gagal baca sensor kadang-kadang", "Kabel tertekan tutup / setengah lepas", "Rapikan jalur kabel, tekan sampai mentok"], ["Suhu 1–3°C lebih tinggi dari kelompok lain", "Sensor dekat ESP32 / kotak tertutup rapat", "Pindah sensor ke dekat lubang, tambah lubang ventilasi"], ["ESP32 sering restart", "Kabel USB tertekuk / power bank lemah", "Perlebar lubang, ganti power bank"], ["Breadboard bergeser", "Tidak ditempel", "Double tape di bawah breadboard"], ["Foto kotaknya hilang dari dashboard", "Nama file salah / foto di luar folder", "Cek nama persis & lokasi (sebelah index.html)"], ["Proyektor tidak menampilkan data", "WiFi laptop tutor / tab lama", "Refresh tab; pakai laptop kelompok itu"], ["Zip > 5 MB", "Foto/video besar", "Hapus video, resize foto ke lebar 800 px, zip ulang"]]], ["h2", "10. Keselamatan"], ["li", "**Cutter hanya dipegang tutor.** Siswa menandai lubang dengan spidol, tutor yang memotong. Gunting boleh dipakai siswa."], ["li", "**Tidak pakai lem tembak** (panas) di dekat board atau sensor. Pakai double tape/selotip."], ["li", "**Tidak ada logam/aluminium foil/kaleng** di dalam kotak: kaki pin bisa korsleting."], ["li", "Cabut USB sebelum memindah kabel atau menempel board."], ["li", "Uji Goyang: goyang **pelan**, jangan dilempar/dibanting."], ["li", "Power bank yang panas atau menggembung jangan dipakai."], ["li", "Foto/video showcase hanya dipakai sesuai izin sekolah. Jangan tulis nomor HP/alamat di website."], ["h2", "11. Diferensiasi"], ["li", "**Siswa cepat:** Challenge Hard (Uji Goyang); rumah alat lebih rapi (jendela sensor, label kabel); bantu kelompok lain **dengan memberi saran**; bonus: isi kotak .kotak-kosong di dashboard dengan kalimat sendiri sebelum zip."], ["li", "**Siswa kesulitan:** target minimum: foto tampil (atau foto alat), alat di kardus sederhana dengan lubang USB + sensor menghadap keluar + label Device ID, menyala dengan power bank. Presentasi boleh membaca dari kertas. Tutor membantu memeriksa folder sebelum zip."], ["h2", "12. Penilaian"], ["li", "**Keaktifan:** +2 per tanya/jawab, pertanyaan saat showcase, berbagi di Refleksi."], ["li", "**Challenge** (leaderboard, per anggota kelompok):"], ["li", "🟢 Easy +5 = 4 checklist Siap Tampil terpenuhi."], ["li", "🔴 Hard +15 = data tetap masuk selama digoyang pelan, tanpa Gagal baca sensor."], ["li", "🟡 Medium +10 = 3 kalimat tertulis + latihan ke kelompok sebelah + menerima 1 pertanyaan."], ["li", "**Rubrik showcase** (skor 1–4, di Materi Ajar): alat berfungsi, rumah alat, pemahaman, presentasi, website, kerja sama (individu: kemandirian)."], ["li", "**Post-test:** 5 soal, individu. Kunci: 1B 2C 3B 4B 5A."], ["li", "**Tidak ada PR / tugas rumah.**"], ["h2", "13. Penutup & tindak lanjut"], ["li", "Foto bersama kelas memegang alat masing-masing."], ["li", "\"Website kalian akan online di smp-XX.inspiralabs.id. Link-nya dibagikan di grup setelah tutor upload.\""], ["li", "Umumkan leaderboard akhir dan beri apresiasi: kelompok poin tertinggi, penanya paling aktif, rumah alat terkreatif."], ["li", "Alat boleh dibawa pulang/disimpan sesuai kebijakan sekolah (putuskan sebelum kelas)."], ["li", "**Setelah kelas (tutor):** cek tiap zip (nama, ukuran, index.html, foto), deploy (deploy/README.md), buka ke-13 alamat untuk memastikan tampil, lalu bagikan link ke grup."]]};

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
