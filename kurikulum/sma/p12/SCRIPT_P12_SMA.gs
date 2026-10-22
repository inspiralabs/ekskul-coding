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
      "q": "1. Kamu menekan tombol kipas di dashboard. Bagaimana perintah itu sampai ke ESP32?",
      "kode": "",
      "opsi": [
        "Server langsung mengetuk ESP32 lewat WiFi sekolah",
        "ESP32 lapor suhu tiap ±4 detik, lalu membaca status kipas dari balasan server",
        "HP mengirim sinyal Bluetooth ke ESP32",
        "Relay membuka website sendiri"
      ],
      "kunci": 1
    },
    {
      "q": "2. Teman dari kelas lain membuka dashboard kelompokmu tanpa tahu PIN. Apa yang bisa dia lakukan?",
      "kode": "",
      "opsi": [
        "Menyalakan dan mematikan kipas",
        "Mengubah ambang suhu di slider",
        "Hanya melihat suhu, kelembapan, dan status kipas",
        "Mengganti firmware ESP32"
      ],
      "kunci": 2
    },
    {
      "q": "3. Mode Otomatis aktif dengan slider \"Nyala otomatis di atas 29°C\". Suhu terbaca 31°C. Apa yang terjadi?",
      "kode": "",
      "opsi": [
        "Kipas menyala sendiri tanpa tombol ditekan",
        "Kipas mati",
        "Dashboard meminta upload ulang",
        "ESP32 restart"
      ],
      "kunci": 0
    },
    {
      "q": "4. Kipas sudah di terminal NO. Dashboard bilang kipas MATI, tapi kipasnya BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…",
      "kode": "",
      "opsi": [
        "Mengganti DEVICE_ID",
        "Mengganti WIFI_PASSWORD",
        "Menghapus api.js",
        "Mengganti #define RELAY_ACTIVE_LOW true menjadi false, lalu upload ulang"
      ],
      "kunci": 3
    },
    {
      "q": "5. Kenapa SEND_INTERVAL_MS di firmware tidak boleh diubah ke angka di bawah 2000?",
      "kode": "",
      "opsi": [
        "Supaya kipas berputar lebih pelan",
        "Sensor DHT22 butuh jeda minimal 2 detik antar pembacaan",
        "Karena WiFi hanya menyala 2 detik sekali",
        "Karena dashboard hanya bisa menampilkan 2 angka"
      ],
      "kunci": 1
    }
  ]
};

const PANDUAN = {"judul": "Panduan Pengajar P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis", "blok": [["h1", "Panduan Pengajar — P12 SMA: Kontrol Kipas dari Dashboard (Manual & Otomatis)"], ["p", "Sabtu, 7 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**."], ["p", "Bahan: slide P12, sumber/Materi_Ajar_P12_SMA_InspiraLabs.md (kunci di KHUSUS TUTOR), folder kelompok dari P11."], ["h2", "Tujuan (yang bisa dilihat di akhir kelas)"], ["p", "1. Kipas di meja **nyala & mati dari HP** lewat dashboard kelompok (mode Manual + PIN)."], ["p", "2. Di mode **Otomatis**, kipas menyala sendiri saat sensor digenggam dan mati sendiri setelah dilepas."], ["p", "3. Siswa bisa menjelaskan dengan bahasanya sendiri **kenapa ada jeda ±4 detik** (ESP32 yang bertanya ke server, seperti anak kos yang nanya \"ada titipan?\")."], ["h2", "Persiapan H-1"], ["li", "☐ Semua kelompok lolos P11 (kode respons: 200, angka muncul di dashboard). Catat yang belum: mereka mulai 10 menit pertama dengan tutor."], ["li", "☐ **PIN kelompok**: ambil dari FAN_PINS di .env server. Tulis di **kertas lipat per Device ID**. Jangan dibacakan, jangan di slide."], ["li", "☐ Set semua dashboard: **Manual + kipas mati**, ambang **30°C** (pakai PIN tiap kelompok)."], ["li", "☐ Uji 1 alat: tombol di HP → kipas berubah ≤ ±4 detik; Otomatis + genggam → kipas menyala."], ["li", "☐ Alat tutor + dashboard tutor siap untuk demo pembuka di proyektor."], ["li", "☐ Linktree: tombol \"Post Test Pertemuan 12\" mengarah ke Google Form P12 SMA."], ["h2", "15 menit sebelum kelas"], ["li", "Semua alat dinyalakan, cek dashboard tiap kelompok menampilkan angka hidup."], ["li", "Alat tutor di meja depan, kipas terlihat kelas, dashboard tutor di proyektor."], ["li", "Kertas PIN siap dibagikan saat slide PIN Kelompok."], ["h2", "Timeline (menit → slide)"], ["tabel", [["Menit", "Slide", "Kegiatan", "Catatan tutor"], ["0–5", "—", "Demo alat tutor: tekan tombol di HP → kipas", "Minta kelas menghitung detiknya keras-keras"], ["5–10", "2–5", "Cover, pemantik, agenda, cara dapat poin", "Tampung tebakan (+2)"], ["10–18", "6–9", "Dua arah, ESP32 yang bertanya, PIN, Tanya Jawab Topik 1", "Bagikan PIN pribadi di slide 8"], ["18–25", "10", "Easy: Saklar dari HP", "Pengendali & Pengamat"], ["25–32", "11–13", "Manual vs Otomatis, slider, Tanya Jawab Topik 2", "Contoh rice cooker / AC"], ["32–42", "14", "Medium: Kipas Otomatis", "Genggam cukup lama, lihat angka di dashboard"], ["42–47", "15–17", "Kipas nggak nurut, RELAY_ACTIVE_LOW, Tanya Jawab Topik 3", "Cek kabel NO dulu, baru kode"], ["47–58", "18", "Hard: Kipas Lebih Gesit", "Pastikan semua kembali ke 4000"], ["58–60", "19", "Peta Petualangan IoT", "Alat dikumpulkan utuh"], ["60–70", "20–21", "Post-test + penutup", ""]]], ["p", "Waktu molor? Hard boleh dijadikan demo tutor di proyektor (ubah 4000 → 2000 di alat tutor, kelas mengukur bersama). **Jangan** lewati Easy & Medium: itu yang didemokan di Demo Day P13."], ["h2", "Kalimat kunci"], ["li", "\"Server **tidak bisa** mengetuk pintu alat di balik router. Jadi alatnya yang bertanya tiap ±4 detik: 'ada titipan buat aku?'\""], ["li", "\"Jeda 0–4 detik itu **desain**, bukan rusak.\""], ["li", "\"Publik boleh **melihat**, hanya pemegang PIN yang boleh **mengubah**. PIN = kunci rumah.\""], ["li", "\"Mode Otomatis itu cuma satu aturan: **kalau suhu lebih dari ambang, kipas nyala.** AC dan kulkas di rumah kalian kerjanya begitu juga.\""], ["h2", "Gaya mengajar: ringan & penasaran"], ["li", "Mulai dari **rasa**, bukan teori: biarkan siswa menekan tombol di HP dan melihat kipasnya bergerak sebelum menjelaskan kenapa."], ["li", "Satu analogi per konsep: anak kos (jeda), kunci rumah (PIN), rice cooker (otomatis). Tidak perlu membahas HTTP, polling, atau router lebih dalam."], ["li", "Kelompok yang selesai duluan langsung lanjut challenge berikutnya, jangan ditahan."], ["h2", "Sistem poin & cara mencatat"], ["li", "**+2**: bertanya/menjawab (pemantik & Tanya Jawab), benar atau salah. Utamakan yang belum dapat poin."], ["li", "Challenge: Easy **+5**, Medium **+10**, Hard **+15**. Pasangan: poin untuk kedua anggota."], ["li", "Bukti: demo langsung ke tutor (Easy, Medium), catatan stopwatch + jawaban (Hard)."], ["li", "Rekap ke gradebook setelah kelas. **Tidak ada PR.**"], ["h2", "Titik cek pemahaman"], ["tabel", [["Kapan", "Tanya", "Jawaban yang dicari"], ["Setelah Easy", "\"Kenapa jedanya kadang cepat, kadang lama?\"", "Tergantung kapan tombol ditekan terhadap laporan ESP32 berikutnya"], ["Setelah Medium", "\"Siapa yang memutuskan kipas nyala barusan?\"", "Aturan di server: suhu > ambang"], ["Setelah Hard", "\"Kenapa 2000 lebih gesit, dan kenapa tidak 500?\"", "ESP32 bertanya lebih sering; DHT22 butuh ≥ 2 detik"]]], ["h2", "Kesalahan umum & cara membimbing"], ["tabel", [["Yang terlihat", "Pertanyaan pancingan"], ["Menekan tombol berkali-kali karena \"tidak jalan\"", "\"Berapa detik kalian tunggu? Slide bilang paling lama berapa?\""], ["\"PIN salah\"", "\"PIN siapa yang kalian ketik? Device ID dashboard ini apa?\""], ["Tidak terjadi apa-apa > 10 detik", "\"Lihat Serial Monitor: masih kode respons: 200?\""], ["Kipas kebalikan dari dashboard", "\"Kabel kipas di NO atau NC? Kalau sudah NO, satu kata apa yang bisa diganti?\""], ["Otomatis, kipas tidak menyala", "\"Ambang berapa, suhu dashboard berapa? Mana yang lebih besar?\""], ["Kipas nyala-mati cepat di Otomatis", "\"Suhu kalian berapa jauh dari ambang? Coba geser 1°C.\""], ["Lupa mengembalikan SEND_INTERVAL_MS", "\"Angka di firmware sekarang berapa? Kalau semua kelompok 2000, server makin capek.\""]]], ["p", "Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasi**-nya, bukan perbaikannya."], ["h2", "Troubleshooting cepat (tutor)"], ["tabel", [["Gejala", "Tindakan"], ["Semua kelompok lambat > 10 detik", "Internet lambat/putus → cek https://api-ekskulcoding.inspiralabs.id/health, pindah ke hotspot cadangan"], ["PIN benar tapi tetap \"PIN salah\"", "Setelah \"PIN salah\", PIN tersimpan dihapus; tekan lagi & ketik ulang. Masih salah → cocokkan dengan FAN_PINS di .env server"], ["Slider berubah tapi kipas tidak", "Mode masih Manual → tekan Otomatis"], ["Kipas berputar terus walau mati", "Kipas di NC, atau modul active-HIGH → RELAY_ACTIVE_LOW false"], ["Relay klik, kipas diam", "Sisi beban: COM, NO, kipas − ke GND, sekrup terminal"], ["Gagal baca sensor setelah Hard", "SEND_INTERVAL_MS < 2000 → kembalikan ke 4000"]]], ["p", "Catatan: firmware masih punya route /fan lokal, tapi yang bekerja di kelas adalah relay mengikuti fanOn di balasan server. **Jangan ajarkan** server \"mendorong\" perintah ke ESP32."], ["h2", "Keselamatan"], ["li", "**Hanya kipas DC 5V.** Tidak ada perangkat listrik PLN di meja praktik."], ["li", "Cabut USB sebelum memindah kabel apa pun."], ["li", "Jari & rambut jauh dari baling-baling saat menguji mode Otomatis."], ["h2", "Diferensiasi"], ["li", "**Cepat selesai:** buka dashboard pakai data seluler (bukan WiFi kelas) dan nyalakan kipas \"dari luar sekolah\"; jelaskan ke tetangga kenapa smart lamp di rumah juga punya jeda."], ["li", "**Kesulitan:** fokus Easy + Medium. Tutor/tetangga jadi Pengamat."], ["h2", "Penilaian"], ["li", "**Wajib (syarat Demo Day P13):** kipas mengikuti tombol di HP + mode Otomatis menyala saat sensor digenggam."], ["li", "Challenge Easy **+5**, Medium **+10**, Hard **+15**."], ["li", "Post-test: 5 soal, kunci B, C, A, D, B."], ["h2", "Penutup"], ["li", "Pastikan semua firmware kembali SEND_INTERVAL_MS = 4000 dan RELAY_ACTIVE_LOW sesuai modulnya."], ["li", "Alat dikumpulkan ke tutor dalam keadaan utuh (kabel tetap tertancap) untuk Demo Day P13. **Tidak ada PR.**"], ["li", "Pengumuman P13: kustom tampilan dashboard, website online di sma-0X.inspiralabs.id, lalu Demo Day."], ["li", "Tutor setelah kelas: simpan kertas PIN, siapkan zip kelompok (py tools/kelompok.py paket) untuk P13."]]};

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
