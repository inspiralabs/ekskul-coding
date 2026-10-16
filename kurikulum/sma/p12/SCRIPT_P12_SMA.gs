// ============================================================
// SCRIPT P12 SMA — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   SMA/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   SMA/POST TEST - Pertemuan 12 - SMA  Google Form mode Quiz (+ spreadsheet Responses)
//   SMA/Panduan Pengajar P12 SMA         Google Docs (kalau ada Panduan_Pengajar_P12_SMA.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive P12) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = "https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4";  // link atau ID folder Drive P12
const JENJANG = 'SMA';

const KODE = {};

const POST_TEST = {
  "judul": "POST TEST - Pertemuan 12 - SMA",
  "soal": [
    {
      "q": "1. Kamu klik \"kipas ON\" di dashboard. Bagaimana perintah itu sampai ke ESP32?",
      "kode": "",
      "opsi": [
        "Server langsung mengirim perintah ke IP ESP32 di WiFi sekolah",
        "ESP32 melapor data tiap ±4 detik dan membaca status kipas dari balasan server",
        "Dashboard mengirim sinyal Bluetooth ke ESP32",
        "Relay membaca website sendiri"
      ],
      "kunci": 1
    },
    {
      "q": "2. Jeda dari klik tombol sampai kipas berputar paling lama sekitar…",
      "kode": "",
      "opsi": [
        "0,01 detik",
        "±4 detik (ditambah waktu internet)",
        "1 menit",
        "Sampai ESP32 di-restart"
      ],
      "kunci": 1
    },
    {
      "q": "3. Mode Otomatis aktif, slider \"Nyala otomatis di atas 29°C\", suhu terbaca 31°C. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Kipas menyala",
        "Kipas mati",
        "Dashboard meminta upload ulang",
        "Relay rusak"
      ],
      "kunci": 0
    },
    {
      "q": "4. Kipas terpasang di terminal NO. ESP32 tiba-tiba dicabut saat kipas menyala. Apa yang terjadi pada kipas?",
      "kode": "",
      "opsi": [
        "Tetap menyala selamanya",
        "Menyala lebih kencang",
        "Mati, karena relay tidak aktif dan COM–NO terputus",
        "Berputar terbalik"
      ],
      "kunci": 2
    },
    {
      "q": "5. Kipas di NO. Dashboard menunjukkan kipas MATI, tetapi kipas sungguhan BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…",
      "kode": "",
      "opsi": [
        "Mengganti API_KEY",
        "Mengganti #define RELAY_ACTIVE_LOW true menjadi false lalu upload ulang",
        "Mengganti DEVICE_ID",
        "Menghapus api.js"
      ],
      "kunci": 1
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis", "blok": [["h1", "Panduan Pengajar — P12 SMA: Kontrol Kipas dari Dashboard (Manual & Otomatis)"], ["p", "Sabtu, 7 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P12, sumber/Materi_Ajar_P12_SMA_InspiraLabs.md (kunci di KHUSUS TUTOR), folder kelompok dari P11."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Kipas mengikuti tombol dashboard dalam **≤ ±4 detik**, diukur dengan stopwatch (5 kali)."], ["p", "2. Di mode **Otomatis**, kipas menyala sendiri saat sensor digenggam dan mati sendiri setelah dilepas."], ["p", "3. Siswa bisa menjelaskan **kenapa ada jeda** (ESP32 yang bertanya ke server, bukan server yang mendorong) dan **kapan alat aman/tidak aman** (listrik putus vs jaringan putus)."], ["h2", "Persiapan H-1"], ["li", "☐ Semua kelompok lolos P11 (kode respons: 200). Catat yang belum: mereka mulai 10 menit pertama dengan troubleshooting berlapis P11."], ["li", "☐ **PIN kelompok**: ambil dari FAN_PINS di backend/.env. Tulis di **kertas lipat per Device ID**. Jangan dibacakan, jangan di slide."], ["li", "☐ Uji 1 alat: klik dashboard → kipas berubah ≤ ±4 detik; Otomatis + genggam → kipas menyala."], ["li", "☐ **Alat tutor tersambung ke hotspot HP tutor** (bukan WiFi kelas), untuk demo \"jaringan putus\" di Hard langkah 2. Upload ulang alat tutor dengan SSID hotspot."], ["li", "☐ Multimeter, stopwatch (HP siswa cukup)."], ["li", "☐ Kalau di P11 tutor men-set dashboard ke Manual OFF: biarkan; siswa sendiri yang memindah ke Otomatis hari ini."], ["h2", "15 menit sebelum kelas"], ["li", "Semua alat dinyalakan, cek dashboard tiap kelompok menampilkan angka hidup."], ["li", "Alat tutor di meja depan, kipas terlihat kelas, dashboard tutor di proyektor."], ["li", "Kertas PIN siap dibagikan saat slide 8."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–5", "—", "Demo alat tutor: klik → kipas", "Minta kelas menghitung detiknya keras-keras"], ["5–10", "2–4", "Cover, pemantik (lampu pintar di balik router), agenda", "Tampung tebakan"], ["10–17", "5–9", "Dua arah, perjalanan perintah, kenapa ±4 detik, PIN, forum Topik 1", "Bagikan PIN pribadi di slide 8"], ["17–25", "10", "Easy: Saklar dari Dashboard", "Pengendali & Pengamat"], ["25–31", "11–13", "Manual vs Otomatis, slider, forum Topik 2", "Status awal = Otomatis 30°C"], ["31–41", "14", "Medium: Uji Otomatis dengan Tangan", ""], ["41–47", "15–18", "Fail-safe, satu kata RELAY_ACTIVE_LOW, troubleshooting, forum Topik 3", "Arahkan ke pemanas, pompa"], ["47–57", "19", "Hard: Uji Fail-Safe", "Langkah 2 pakai alat tutor; WiFi kelas tidak dimatikan"], ["57–60", "20", "Peta proyek + PR foto", ""], ["60–70", "21–22", "Post-test + penutup", ""]]], ["p", "Waktu molor? Hard langkah 3 (ubah RELAY_ACTIVE_LOW) boleh dijadikan demo tutor. **Jangan** lewati Easy & Medium: itu yang didemokan di showcase P13."], ["h2", "Kalimat kunci"], ["li", "\"Server **tidak bisa** mengetuk pintu alat di balik router. Jadi alatnya yang bertanya tiap ±4 detik: 'ada perintah untukku?'\""], ["li", "\"Jeda 0–4 detik itu **desain**, bukan rusak. Kalian akan mengukurnya sendiri.\""], ["li", "\"Publik boleh **melihat**, hanya pemegang PIN yang boleh **mengubah**. PIN = kunci rumah.\""], ["li", "\"Kipas di NO melindungi saat **listrik** hilang. Tapi saat **jaringan** hilang, kipas diam di status terakhir. Engineer harus tahu dua-duanya.\""], ["h2", "Manajemen kelas"], ["li", "**Berdua:** **Pengendali** (klik dashboard, pegang PIN) & **Pengamat** (stopwatch, amati relay/kipas, multimeter). Tukar tiap topik."], ["li", "**Individu:** HP di tangan kiri sebagai stopwatch, laptop di kanan. Untuk Hard, minta tetangga menjadi pengamat 2 menit."], ["li", "PIN: kalau ada yang iseng mencoba PIN kelompok lain, bahas sebagai **etika keamanan** (bukan hukuman): \"Di dunia nyata, mencoba PIN orang lain itu pelanggaran.\""], ["li", "Medium butuh suhu naik: tangan harus menggenggam 20–60 detik. Siswa sering berhenti terlalu cepat; minta mereka melihat angka di dashboard, bukan menebak."], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya", "Jawaban yang dicari"], ["Setelah Easy", "\"Kenapa 5 pengukuran kalian beda-beda?\"", "Tergantung kapan klik terjadi terhadap laporan berikutnya"], ["Setelah Medium", "\"Ambang 40°C, kipas mati. Kenapa?\"", "Suhu tidak akan mencapai 40°C"], ["Setelah Hard", "\"Kapan alat kita aman, kapan tidak?\"", "Aman saat listrik putus (NO); tidak saat jaringan putus (status terakhir)"]]], ["h2", "Kesalahan umum & cara membimbing"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Klik berkali-kali karena \"tidak jalan\"", "\"Berapa detik kalian tunggu? Slide 7 bilang paling lama berapa?\""], ["\"PIN salah\"", "\"PIN siapa yang kalian ketik? Device ID dashboard ini apa?\""], ["Tidak terjadi apa-apa > 10 detik", "\"Lihat Serial: masih kode respons: 200? Lapisan P11 mana yang gagal?\""], ["Kipas terbalik dari dashboard", "\"Kabel kipas di NO atau NC? Kalau sudah NO, apa satu kata di slide 16?\""], ["Otomatis, kipas tidak menyala", "\"Ambang berapa, suhu dashboard berapa? Mana yang lebih besar?\""], ["Kipas ON-OFF cepat di Otomatis", "\"Suhu kalian berapa jauh dari ambang? Ingat Termostat Tangan P10: apa yang mencegah cetak-cetek?\""], ["Lupa mengembalikan RELAY_ACTIVE_LOW", "\"Modul kita active apa? Dashboard OFF, kipas berputar: itu benar?\""]]], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Tindakan"], ["Semua kelompok lambat > 10 detik", "Internet lambat/putus → cek /health, pindah ke hotspot cadangan"], ["PIN benar tapi tetap \"PIN salah\"", "Setelah \"PIN salah\", dashboard otomatis menghapus PIN tersimpan; klik lagi & ketik ulang. Masih salah → cocokkan dengan FAN_PINS di backend/.env"], ["Slider berubah tapi kipas tidak", "Mode masih Manual → klik Otomatis"], ["Kipas berputar terus walau OFF", "Kipas di NC, atau modul active-HIGH → RELAY_ACTIVE_LOW false"], ["Relay klik, kipas diam", "Sisi beban (P10): COM, NO, kipas − ke GND"]]], ["p", "Catatan: firmware masih punya route /fan lokal, tapi yang bekerja di kelas adalah relay mengikuti fanOn di balasan server. **Jangan ajarkan** server \"mendorong\" perintah ke ESP32."], ["h2", "Keselamatan"], ["li", "**WiFi kelas tidak boleh dimatikan** untuk eksperimen; pakai hotspot alat tutor."], ["li", "Cabut USB (Hard langkah 1) dengan menarik konektor, bukan kabelnya."], ["li", "Diskusi Topik 3 menghubungkan ke dunia nyata: pemanas/pompa/kompor yang menyala terus saat jaringan putus berbahaya → produk sungguhan butuh **timeout** atau saklar pengaman. Cukup dibahas, tidak dibuat."], ["h2", "Diferensiasi"], ["li", "**Cepat:** buka dashboard di HP pakai data seluler, kontrol kipas dari \"luar sekolah\"; buat tabel 3 kejadian fail-safe tambahan (mis. server mati) dan prediksi hasilnya; jelaskan ke tetangga kenapa smart lamp di rumah juga punya jeda."], ["li", "**Kesulitan:** fokus Easy + Medium. Hard cukup langkah 1 (cabut USB) yang paling mudah diamati."], ["h2", "Penilaian"], ["li", "**Wajib (syarat P13):** kipas mengikuti tombol (tabel 5 pengukuran) + Otomatis menyala saat digenggam."], ["li", "Challenge Easy/Medium/Hard **+10** masing-masing; Hard dinilai dari tabel hasil + 1 kalimat kesimpulan."], ["li", "Post-test: kunci B, B, A, C, B."], ["h2", "Penutup & PR"], ["li", "PR untuk P13: **foto kelompok** (landscape, siap dikecilkan ≤ ±500 KB), ide **2 warna tema**, kotak kecil/kardus untuk casing (opsional)."], ["li", "Pastikan RELAY_ACTIVE_LOW kembali true dan pin D4/D18."], ["li", "Tutor: simpan kertas PIN, siapkan rubrik showcase P13."]]};

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
