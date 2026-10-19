// ============================================================
// SCRIPT P11 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 11 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
//   SMA/Panduan Pengajar P11 SMA         Google Docs (kalau ada Panduan_Pengajar_P11_SMA.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P11) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd";  // link atau ID folder Drive P11
const JENJANG = 'SMA';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 11 - SMA",
  "soal": [
    {
      "q": "1. Di firmware proyek dari tutor, baris yang WAJIB kalian isi sendiri adalah…",
      "kode": "",
      "opsi": [
        "SERVER_URL dan API_KEY",
        "DEVICE_ID",
        "WIFI_SSID dan WIFI_PASSWORD",
        "Isi fungsi loop()"
      ],
      "kunci": 2
    },
    {
      "q": "2. Serial Monitor terus menampilkan Menghubungkan ke WiFi......... tanpa berhenti. Penyebab paling mungkin adalah…",
      "kode": "",
      "opsi": [
        "Kabel DHT22 longgar",
        "Nama/password WiFi salah atau WiFi-nya 5 GHz",
        "Kipas terpasang di NC",
        "API key salah"
      ],
      "kunci": 1
    },
    {
      "q": "3. Serial menampilkan Kirim data -> kode respons: 200. Artinya…",
      "kode": "",
      "opsi": [
        "Suhu ruangan 200 derajat",
        "Server menerima data, dashboard seharusnya ikut berubah",
        "WiFi terputus",
        "Sensor gagal dibaca"
      ],
      "kunci": 1
    },
    {
      "q": "4. WiFi sudah Terhubung!, tapi Serial terus menulis Gagal baca sensor DHT22. Yang paling perlu dicek adalah…",
      "kode": "",
      "opsi": [
        "Password WiFi",
        "Kabel DHT22: out ke D13, + ke 3V3, − ke GND",
        "File api.js",
        "Kabel kipas di terminal NO"
      ],
      "kunci": 1
    },
    {
      "q": "5. Setelah firmware ter-upload, ESP32 dicabut dari laptop lalu dicolok ke power bank. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Program hilang, harus upload ulang",
        "ESP32 hanya bisa jalan kalau tersambung laptop",
        "Program tetap tersimpan: ESP32 menyala, masuk WiFi, dan kirim data lagi",
        "Data hanya tampil di Serial Monitor"
      ],
      "kunci": 2
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P11 SMA — Firmware Jadi, Data Online: Monitoring Suhu di Dashboard", "blok": [["h1", "Panduan Pengajar — P11 SMA: Firmware Jadi, Data Online"], ["p", "Sabtu, 31 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P11, sumber/Materi_Ajar_P11_SMA_InspiraLabs.md (kunci di KHUSUS TUTOR), zip dist/paket/sma-XX.zip, docs/HANDOUT_SISWA.md."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Setiap kelompok menunjukkan Serial Monitor dengan Terhubung! dan kode respons: 200."], ["p", "2. Angka suhu di dashboard kelompok **naik saat sensor digenggam** (bukti data hidup, bukan angka lama)."], ["p", "3. Siswa bisa menyebut **lapisan mana** yang bermasalah dari satu baris Serial (daya → program → WiFi → sensor → server → dashboard)."], ["h2", "Persiapan H-1"], ["li", "☐ Backend hidup: buka https://api-ekskulcoding.inspiralabs.id/health."], ["li", "☐ py tools/kelompok.py paket → 6 zip. Simpan di flashdisk/Drive, **nama file = Device ID**. Zip yang tertukar = data dua kelompok saling menimpa."], ["li", "☐ Isi WiFi kelas di docs/HANDOUT_SISWA.md. Pastikan **2.4 GHz** dan ada **internet** (bukan hanya WiFi). Hotspot HP cadangan, mode 2.4 GHz / \"kompatibilitas\"."], ["li", "☐ Di tiap laptop buka firmware/sma_room_monitor/sma_room_monitor.ino dari satu zip → **Verify (✓)** sekali. Laptop yang belum punya board ESP32/library DHT: pasang dulu (Panduan Instalasi, unduhan ±2 GB, jangan di kelas)."], ["li", "☐ Status awal server tiap Device ID = **Otomatis, ambang 30°C**. Kalau kelas biasanya > 30°C, set tiap dashboard ke **Manual + OFF** (PIN dari FAN_PINS di backend/.env) supaya kipas tidak menyala sendiri dan membingungkan. Atau biarkan dan jelaskan \"bocoran P12\"."], ["li", "☐ Power bank / charger HP 5V + kabel data untuk Hard (minimal 2 untuk bergantian)."], ["li", "☐ Kit yang rusak di P10 sudah diganti dan lolos Tes 1 & Tes 2."], ["h2", "15 menit sebelum kelas"], ["li", "Rakitan P10 dikeluarkan utuh. Cek cepat: relay IN di **D14**, DHT out di **D13**, **D12 kosong** (Easy P10 sering lupa dikembalikan)."], ["li", "Tulis nama & password WiFi di papan (atau tampilkan handout). **Jangan** tulis PIN kelompok."], ["li", "Satu alat tutor sudah online sebagai pembanding (\"begini seharusnya\")."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–5", "—", "Bagikan zip sesuai Device ID, ekstrak", "Cek nama folder = Device ID di zip"], ["5–10", "2–4", "Cover, pemantik (\"404\"), agenda", "Tampung tebakan"], ["10–15", "5–8", "Offline → online, perjalanan data, isi zip, BOLEH/JANGAN UBAH", "Tekankan: isi 2 baris WiFi saja"], ["15–25", "9–10", "Isi WiFi → Upload → Serial, forum Topik 1", "Operator & Pengamat"], ["25–30", "11", "Easy: Online!", "Screenshot Serial + dashboard"], ["30–36", "12–14", "Membaca Serial, kode respons, forum Topik 2", "Jawab pertanyaan pemantik di slide 13"], ["36–43", "15", "Medium: Uji Sensor Hidup", "Cabut USB sebelum lepas kabel kuning"], ["43–48", "16–18", "Alat mandiri, troubleshooting berlapis, forum Topik 3", ""], ["48–57", "19", "Hard: Lepas dari Laptop", "Power bank bergantian; D27 harus dikembalikan ke D13"], ["57–60", "20", "Peta proyek", "Simpan folder kelompok"], ["60–70", "21–22", "Post-test + penutup", ""]]], ["p", "Waktu molor? Hard langkah 2 (pindah D27) boleh dilewati. **Jangan** lewati Easy: itu syarat P12."], ["h2", "Kalimat kunci"], ["li", "\"Hari ini **tidak ada coding**. Yang kalian isi hanya 2 baris WiFi. Bagian JANGAN UBAH itu 'kabel' ke server.\""], ["li", "\"ESP32 dan dashboard tidak saling bicara. Keduanya lewat server, dengan Device ID sebagai alamat rumah.\""], ["li", "\"Jangan panik, **baca angkanya**. 200 beres, 401 kunci salah, 404 alamat salah, negatif = tidak sampai.\""], ["li", "\"Cek dari lapisan paling bawah. Jangan bongkar kabel kalau ternyata password WiFi salah ketik.\""], ["h2", "Manajemen kelas"], ["li", "**Berdua:** **Operator** (laptop, isi WiFi, upload) & **Pengamat** (baca Serial, cocokkan dengan tabel slide 12, catat waktu di Medium). Tukar di Topik 2."], ["li", "**Individu:** tetangga (01↔02, 03↔04, 05↔06) saling cek ejaan SSID/password sebelum upload: 1 huruf salah = titik-titik selamanya."], ["li", "Pantau yang mengubah bagian JANGAN UBAH \"karena penasaran\": tidak dimarahi, tapi minta ganti file dengan salinan zip asli. Rasa ingin tahu boleh, di salinan terpisah."], ["li", "Data publik: ingatkan dashboard bisa dilihat orang lain; nama & foto pribadi baru dipasang di P13."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya", "Jawaban yang dicari"], ["Setelah upload", "\"Baris mana yang membuktikan WiFi beres? Server beres?\"", "Terhubung! · kode respons: 200"], ["Medium", "\"Dashboard Online tapi angka tidak berubah. Lapisan apa?\"", "Sensor (ESP32 tidak kirim data baru)"], ["Hard", "\"Kenapa ganti pin butuh laptop, colok power bank tidak?\"", "Program tersimpan; mengubah = upload program baru"]]], ["h2", "Kesalahan umum & cara membimbing"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Menghubungkan ke WiFi..... tanpa henti", "\"Bandingkan huruf per huruf SSID kalian dengan papan. WiFi ini 2.4 atau 5 GHz?\""], ["kode respons: -1", "\"WiFi-nya tersambung. Bisakah laptop membuka google.com lewat WiFi yang sama?\""], ["401 / 404", "\"Tabel kode respons bilang apa? Bagian mana yang mungkin tersentuh?\" → ganti .ino dari zip asli"], ["Data dua kelompok tertukar", "\"Device ID di firmware kalian apa? Di Serial? Di nama folder?\""], ["Gagal baca sensor DHT22", "\"Lapisan WiFi sudah beres. Lapisan berikutnya apa? Ingat Tes 2 P10.\""], ["Dashboard kosong", "\"File index.html yang kalian buka dari folder siapa?\""], ["Kipas menyala sendiri", "\"Lihat dashboard: mode apa? Ambang berapa? Suhu berapa?\" (status awal Otomatis 30°C)"]]], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Tindakan"], ["Semua kelompok −1", "Internet WiFi kelas mati → pindah semua ke hotspot cadangan (isi ulang 2 baris WiFi)"], ["Satu kelompok 401/404", "Ganti sma_room_monitor.ino dengan salinan zip asli, isi WiFi lagi"], ["Arduino IDE minta memindah file ke folder baru", "File .ino dibuka dari luar foldernya / nama folder diganti. Pakai firmware/sma_room_monitor/sma_room_monitor.ino dari zip asli"], ["DHT.h: No such file or directory", "Library Manager → DHT sensor library → INSTALL ALL"], ["Upload gagal Failed to connect", "Tahan BOOT saat Connecting...; Tools → Upload Speed → 115200; cek D12 kosong"], ["Restart berulang saat kirim data", "Daya USB lemah → port lain / power bank"], ["Backend /health mati", "Lapor admin server; sementara kerjakan Medium bagian Serial saja"]]], ["h2", "Keselamatan"], ["li", "Cabut USB sebelum melepas/memasang kabel (Medium langkah 3, Hard langkah 2)."], ["li", "Power bank/charger: hanya 5V USB. Kipas tetap DC 5V."], ["li", "WiFi password kelas jangan diunggah/difoto ke media sosial."], ["h2", "Diferensiasi"], ["li", "**Cepat:** buka dashboard di HP pakai data seluler (bukti \"dari mana saja\"); jelaskan ke tetangga arti tiap baris Serial; ukur berapa detik dari genggam sampai dashboard berubah, lalu jelaskan dua sumber jeda (sensor lambat + kirim tiap 4 detik)."], ["li", "**Kesulitan:** cukup Easy + Medium langkah 1. Tutor duduk bersama membaca Serial baris per baris memakai tabel berlapis."], ["h2", "Penilaian"], ["li", "**Wajib (syarat P12):** screenshot Serial kode respons: 200 + dashboard menampilkan angka yang berubah. Catat per Device ID."], ["li", "Challenge Easy/Medium/Hard **+10** masing-masing."], ["li", "Post-test: kunci C, B, B, B, C."], ["h2", "Penutup & PR"], ["li", "Folder kelompok disimpan baik-baik (dipakai lagi P12 & P13). Jangan tertukar."], ["li", "Semua pin kembali ke D13/D14 (cek Hard)."], ["li", "Pengumuman P12: kontrol kipas dari dashboard. Tutor menyiapkan PIN per kelompok (dibagikan pribadi)."]]};

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
