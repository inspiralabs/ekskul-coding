PROMPT P13 SMA — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz → subfolder SMA (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P13 SMA — Dashboard Punya Kita + Demo Day

BRAND SYSTEM — WAJIB KONSISTEN DI SEMUA SLIDE:
- Warna Maroon: #7A1F2B (background utama/aksen dominan)
- Warna Maroon Gelap: #5A1620 (aksen dekoratif/kartu gelap)
- Warna Gold: #C9A24B (highlight, badge, border aksen)
- Warna Gold Muda: #E8D9B5 (background lembut/badge terang)
- Warna Off-White: #FAF8F5 (background slide terang)
- Warna teks gelap: #2B2320
- Warna teks abu: #6B5F58
- Font judul: serif elegan dan tegas
- Font body: sans-serif bersih dan mudah dibaca
- Gaya visual: rounded corners di semua card/badge, soft drop shadow pada card putih, lingkaran dekoratif semi-transparan di pojok slide cover/penutup
- JANGAN pakai garis/stripe aksen horizontal di bawah judul (dianggap kurang premium)
- Ukuran slide: widescreen 16:9

CARA MEMBACA ISI SLIDE (di antara penanda MULAI/SELESAI ISI SLIDE):
- Baris paling atas (# Judul) BUKAN slide, hanya nama pertemuan (dipakai di footer).
- Setiap bagian yang dipisah garis --- = 1 slide, urutan PERSIS seperti di isi. Jangan memindah, menggabung, atau menghapus slide.
- Komentar <!-- ... --> adalah catatan untukmu, jangan ditampilkan.
- Baris berawalan "> 🗣️ SPEAKER NOTES" masuk ke SPEAKER NOTES slide itu, JANGAN tampil di slide.
- Layout tiap slide kamu tentukan sendiri sesuai isi (card, tabel, kode, diagram), tetap dalam brand system.

POLA SLIDE (gaya deck P7 SMA InspiraLabs):
- Slide 1 "LINK & QR CODE": label kecil "LINK & QR CODE", judul "Akses Materi, Challenge, & Post Test", paragraf penjelasan, link Linktree besar, QR code dari link itu di sisi kanan. Background maroon, lingkaran dekoratif semi-transparan.
- Slide 2 "COVER": cover pertemuan. Label kecil "P13 SMA", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi" / "Tanya Jawab": label kecil sesuai judul slide, pertanyaan besar di tengah, layout lega. Kalau judulnya memuat poin (mis. "+2"), tampilkan sebagai badge gold.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge poin sesuai angka di judul (mis. "+5", "+10", "+15"), instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P13 SMA | nomor slide" (slide Linktree tanpa nomor).
- Teks tidak boleh keluar dari slide. Kalau isi terlalu panjang, kecilkan font atau pecah jadi 2 slide berurutan dengan judul + "(lanjutan)".

GAMBAR RANGKAIAN (bagian berlabel "wiring" di isi slide):
1. Setiap bagian berlabel "wiring" adalah PERMINTAAN GAMBAR, bukan teks slide. Ganti dengan 1 gambar diagram rangkaian di slide yang sama.
2. Gaya diagram: flat, tampak atas, garis kabel tebal, label jelas, mirip diagram Fritzing. Latar & bingkai mengikuti brand (off-white, aksen maroon/gold).
3. Gambar HANYA sambungan yang tertulis. Jangan menambah atau mengarang kabel/pin.
4. Setiap ujung kabel diberi label nama pin ("3V3", "GND", "D4", "VIN", ...).
5. Warna kabel: Merah = 3V3/VIN · Hitam = GND · Kuning = data sensor · Biru = sinyal kontrol (LED/relay IN) · Oranye = jalur beban relay (COM/NO).
6. Komponen: LED kaki PANJANG (+) lebih panjang & berlabel "+"; resistor 220Ω gelang merah-merah-coklat; DHT22 modul 3-pin ("+", "out", "−"); relay 1-channel modul biru ("VCC, GND, IN" dan "NO, COM, NC"); breadboard dengan jalur + (merah) dan − (biru).
7. ESP32 DevKit V1 30-pin, antena di atas, USB di bawah. Urutan pin dari atas ke bawah:
   KIRI : EN, VP(36), VN(39), D34, D35, D32, D33, D25, D26, D27, D14, D12, D13, GND, VIN
   KANAN: D23, D22, TX0, RX0, D21, D19, D18, D5, TX2, RX2, D4, D2, D15, GND, 3V3
   Beri warna hanya pada pin yang dipakai.
8. "Sorot" = beri panah/callout. "Judul" = caption kecil di bawah gambar.
9. Kalau tidak bisa menggambar diagram yang akurat, JANGAN pakai gambar AI. Buat tabel sambungan rapi (Dari → Ke, warna kabel) dan tulis "[GANTI DENGAN SCREENSHOT WOKWI]" di slide itu.

---------- MULAI ISI SLIDE ----------

# P13 SMA — Dashboard Punya Kita + Demo Day

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B, angka/string #8A6516;
     baris yang boleh diubah diberi latar #F3E6C4. Abaikan aturan "kode di card gelap". -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P13 SMA**

# Dashboard Punya Kita + Demo Day

Alatnya sudah hidup. Sekarang bikin jadi milikmu, lalu pamerkan.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Dua aplikasi fiturnya sama persis. Kenapa kamu lebih suka yang satu?

Semua dashboard kelompok di kelas ini fiturnya sama. Hari ini kita bikin dashboard kalian beda sendiri.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Tampung 2–3 jawaban siswa (+2 per penjawab) tanpa langsung dijawab. Jawabannya dibahas di Topik 1 (slide Isi Folder Website-mu): yang membedakan adalah tampilan dan cara aplikasi "ngomong" ke penggunanya.

---

### Apa yang kita capai hari ini?

- **01 Ganti Baju Dashboard**: Warna, nama kelompok, foto.
- **02 Ubah Otak Dashboard**: Aturan kapan peringatan muncul.
- **03 Panel Pintar, Online & Demo Day**: Tambah panel tips, website online, pamerkan alatmu.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** & Demo Day | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Penonton Demo Day yang bertanya juga dapat +2. Salah jawab tetap +2, yang dihitung beraninya. Utamakan siswa yang belum dapat poin. Poin challenge untuk kedua anggota pasangan. Tidak ada PR: website yang belum sempat online di kelas di-deploy tutor setelah kelas.

---

### Isi Folder Website-mu
| File | Boleh diubah? | Isinya |
|---|---|---|
| `index.html` | ✅ Ya | Isi halaman: teks, profil, aturan |
| `style.css` | ✅ Ya | "Baju" dashboard: warna, ukuran |
| `api.js` | ❌ Jangan | Kabel ke server, sudah diurus tutor |
| `foto-kelompok.jpg` | ✅ Ya | Foto kalian (kecilkan dulu, ±500 KB) |
- Buka folder kelompok (mis. `sma-04`) di **VS Code** (atau Notepad/TextEdit).
- Lihat hasil: **double-click `index.html`** → terbuka di Chrome, angkanya tetap angka asli dari alat kalian.
- Edit → **Save** (Ctrl+S / ⌘+S) → **Refresh** (F5 / ⌘+R).

> 🗣️ SPEAKER NOTES: Jawab pemantik di sini: fitur semua dashboard sama (data asli, peringatan, kontrol kipas). Yang bikin orang suka adalah tampilan dan cara dashboard "ngomong" ke pengunjung. Itu yang diubah hari ini. Folder kelompok = folder dari zip P11 (sma-0X). Kalau ada yang hilang, tutor punya salinan di dist/paket/.

---

### Ganti Warna di Satu Tempat
```css
/* style.css, paling atas */
:root {
  --warna-primer: #ff8a3d;     /* aksen utama */
  --warna-sekunder: #3ddc97;   /* aksen kedua */
  --warna-bg: #f4f7fb;         /* latar halaman */
}
```
- Warna ditulis kode **hex**: `#` + 6 huruf/angka. Cari "color picker" di Google, salin kodenya.
- Contoh tema InspiraLabs: `#7A1F2B` (maroon) + `#C9A24B` (gold).
- Yang diganti **angka warnanya** saja. Nama `--warna-...` jangan diubah.

---

### Profil & Foto Kelompok
```html
<!-- index.html, BAGIAN: PROFIL KELOMPOK -->
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```
- Ganti **teks** di antara tag. `class` dan `id` jangan diubah.
- Foto: simpan di folder yang sama dengan nama **persis** `foto-kelompok.jpg` (huruf kecil, bukan `.JPG`/`.png`).

> 🗣️ SPEAKER NOTES: Nama anggota biasanya sudah terisi dari paket tutor. Foto HP asli 3–8 MB: kecilkan dulu (kirim lewat chat ke diri sendiri lalu simpan). Windows: aktifkan View → File name extensions supaya tidak jadi foto-kelompok.jpg.jpg.

---

### Tanya Jawab (+2)

**Kenapa cukup ganti warna di `:root` saja, tapi seluruh dashboard ikut berubah?**

> 🗣️ SPEAKER NOTES: Topik 1 — Ganti Baju Dashboard. Minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: --warna-primer itu variabel, satu sumber yang dipakai di banyak tempat. Seperti ganti tema HP sekali, semua aplikasi ikut.

---

### Challenge 🟢 Easy — "Ganti Baju Dashboard" (+5)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Isi nama kelompok dan nama anggota di **PROFIL KELOMPOK**.
2. Ganti **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-bg`) sesuai tema kelompok.
3. (Boleh) Tambah `foto-kelompok.jpg`.
4. Save → Refresh. Screenshot **sebelum** dan **sesudah**.

Simpan hasil: **File → Save** di folder kelompok (`sma-0X`)

---

### Otak Dashboard: Aturan "Kalau…"
```js
// index.html, bagian <script>
var AMBANG_BATAS_SUHU_TINGGI = 32;   // di atas ini, banner peringatan muncul

if (suhuSaatIni > AMBANG_BATAS_SUHU_TINGGI) {
  teks.textContent = "⚠️ Suhu terlalu tinggi (" + suhuSaatIni.toFixed(1) +
                     "°C)! Pastikan ventilasi ruangan baik.";
}
```
- `if` = **"kalau"**. Begini cara website mengambil keputusan.
- Kartu suhu juga pakai aturan: di bawah **22** = Dingin, sampai **29** = Normal, di atasnya = Panas.
- Yang boleh diubah: **angka** ambang dan **teks di dalam tanda kutip**. Tanda `+` dan `suhuSaatIni.toFixed(1)` biarkan.

> 🗣️ SPEAKER NOTES: Tunjukkan di VS Code: Ctrl+F cari AMBANG_BATAS_SUHU_TINGGI dan "Suhu terlalu tinggi". Jangan bahas sintaks JavaScript lebih dalam; cukup "kalau kondisi ini benar, lakukan ini".

---

### Tanya Jawab (+2)

**Kalau batas "Panas" diubah dari 29 jadi 25, apa yang dilihat pengunjung saat ruangan 27°C? Apakah ruangannya jadi lebih panas?**

> 🗣️ SPEAKER NOTES: Topik 2 — Ubah Otak Dashboard. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: status jadi Panas, padahal ruangannya tetap 27°C. Website hanya menafsirkan angka; aturan yang kita tulis menentukan apa yang dilihat orang.

---

### Challenge 🟡 Medium — "Aturan Kita Sendiri" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Ubah teks peringatan dengan gaya kalian, misal `"°C)! Gerah banget, nyalain kipas dulu, bestie."`.
2. Buktikan banner muncul: ubah `AMBANG_BATAS_SUHU_TINGGI` jadi **di bawah suhu ruangan sekarang** → Save → Refresh.
3. Setelah terbukti, pilih angka ambang yang masuk akal untuk kelas kalian (misal `31`), Save lagi.
4. Screenshot banner dengan teks baru.

Simpan hasil: **File → Save** di folder kelompok (`sma-0X`)

---

### Kotak Kosong = Panggung Bonus
```html
<!-- tempel di dalam <div class="kartu-kosong" id="bagianEdukasi"> -->
<h2>Tips Ruangan</h2>
<p id="teksTips">Menunggu data...</p>
<script>
setInterval(function () {
  var tips;
  if (suhuSaatIni > 30) tips = "Panas! Buka jendela atau nyalakan kipas.";
  else if (suhuSaatIni < 22) tips = "Dingin, pakai jaket ya.";
  else tips = "Suhu nyaman, pas buat ngoding!";
  document.getElementById("teksTips").textContent = tips;
}, 2000);
</script>
```
- Tiap 2 detik panel ini membaca suhu terbaru, lalu memilih 1 tips.
- `else if` = "kalau tidak, kalau…". Aturan dicek dari atas ke bawah; yang pertama benar yang dipakai.

File: `C3_P13_Hard_PanelTips/panel_tips.txt` (ada di linktr.ee/InspiraLabs_SMA)

> 🗣️ SPEAKER NOTES: Kode ini tidak perlu diketik: salin dari file di folder Kode. Cari bagian <div class="kartu-kosong" id="bagianEdukasi"> di index.html, ganti komentar "TULIS KODEMU DI SINI" dengan isi file.

---

### Tanya Jawab (+2)

**Suhu 35°C dan kelembapan 80%. Kalau aturan kelembapan ditaruh di paling bawah, tips mana yang muncul? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 3 — Panel Pintar. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: tips "Panas!" yang muncul, karena aturan dicek dari atas; aturan pertama yang benar (suhu > 30) langsung dipakai, sisanya dilewati.

---

### Challenge 🔴 Hard — "Panel Tips Pintar" (+15)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Tempel kode panel tips ke kotak `bagianEdukasi` di `index.html`. Save → Refresh: panel muncul.
2. Ubah **3 teks tips** dengan gaya kalian.
3. Tambah **1 aturan baru** untuk kelembapan: kalau `lembapSaatIni > 70` → tips soal ruangan lembap. (Contek pola baris `else if` yang sudah ada.)
4. Buktikan: **tiup** sensor DHT22 sampai tips kelembapanmu muncul. Rekam/screenshot.

Download file `C3_P13_Hard_PanelTips` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save** di folder kelompok (`sma-0X`)

---

### Serahkan Website-mu
- ☐ Halaman utama tetap bernama **`index.html`**
- ☐ Foto bernama **`foto-kelompok.jpg`**, semua file ada **di dalam folder**
- ☐ **`api.js` tidak diubah**, tanpa npm (library hanya lewat link `https://` CDN)
- ☐ Ukuran folder **≤ 5 MB**
- ☐ Zip seluruh folder → beri nama sesuai Device ID (**`sma-04.zip`**) → kirim ke tutor

> 🗣️ SPEAKER NOTES: Folder firmware boleh ikut di zip; saat deploy otomatis dibuang. api.js juga selalu diganti versi tutor saat deploy. Zip tanpa index.html atau lebih dari 10 MB ditolak. Tutor mulai deploy zip yang sudah masuk selagi kelompok lain mengerjakan challenge.

---

### Website Kelompok Online
- Tutor memeriksa zip lalu menayangkannya di **`https://sma-0X.inspiralabs.id`**, contoh `https://sma-04.inspiralabs.id`.
- Siapa pun bisa **melihat** suhu & kelembapan dari alat kalian, dari HP mana pun.
- **Menekan tombol kipas** tetap butuh **PIN kelompok**. Pengunjung tanpa PIN hanya bisa melihat.
- Alat harus **menyala & tersambung WiFi** supaya angkanya hidup.

---

### Demo Day: Format 2 Menit
1. **Kenalkan** kelompok & masalahnya: "Kelas kami panas…" (15 detik)
2. **Tunjukkan** website kalian di proyektor/HP (30 detik)
3. **Demo live** 1 hal: genggam sensor → angka naik → kipas Otomatis menyala, atau tekan tombol Manual dari HP (45 detik)
4. **Cerita** 1 hal paling seru atau paling bikin pusing (30 detik)
- Penonton: 1 pertanyaan = **+2**.

> 🗣️ SPEAKER NOTES: Tutor jadi MC + pegang timer. Mulai dari kelompok yang paling siap. Sebelum tampil, ambang Otomatis diatur = suhu ruangan + 1°C supaya demo genggam cepat terlihat. Berdua: keduanya bicara. Demo gagal? Apresiasi cara mereka menjelaskan masalahnya, itu juga skill engineer.

---

### Tanya Jawab (+2)

**Kalau alat ini kamu kembangkan, mau dipasang di mana dan buat apa?**

> 🗣️ SPEAKER NOTES: Dipakai setelah Demo Day sebagai jembatan ke refleksi. Setiap jawaban +2. Contoh ide: kandang ayam, ruang server, kamar tidur, gudang sembako, green house.

---

### Peta Petualangan IoT
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                    ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                           ✅
[P13] Kustom dashboard + website online + Demo Day                              ← HARI INI
```
- Dari colok ESP32 pertama kali → alat yang dikontrol dari HP → website sendiri yang online.
- Ide lanjutan: penyiram tanaman otomatis, alarm pintu kelas, pemantau suhu kandang, lampu kamar dari HP.

> 🗣️ SPEAKER NOTES: Refleksi singkat: minta 2–3 siswa menyebut 1 hal yang dulu terasa susah dan sekarang bisa (+2). Kaitkan ke profesi: IoT engineer, web developer, teknisi elektronika.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 13" di Linktree sudah mengarah ke Google Form P13 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI SEMESTER DEPAN!**

Website kalian tetap online di **`https://sma-0X.inspiralabs.id`**. Selama alatnya menyala, angkanya tetap hidup.

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P13 SMA — Dashboard Punya Kita + Demo Day

BRAND SYSTEM — WAJIB DIIKUTI KONSISTEN:
- Warna Maroon: #7A1F2B (untuk heading utama, judul besar)
- Warna Maroon Gelap: #5A1620 (untuk aksen/subjudul)
- Warna Gold: #C9A24B (untuk garis pembatas, highlight, badge)
- Warna Gold Muda: #E8D9B5 (untuk background callout box)
- Warna Off-White: #FAF8F5 (background box info)
- Warna teks utama: #2B2320 (hampir hitam, bukan pure black)
- Warna teks sekunder: #6B5F58 (abu kecoklatan untuk caption/italic)
- Font judul: gaya serif elegan (Cambria/Georgia)
- Font body: sans-serif bersih (Calibri)

STRUKTUR DOKUMEN:
- Cover halaman pertama: nama InspiraLabs, judul materi besar, tabel info (jenjang/pertemuan/durasi/dll) dengan header row warna gold muda
- Setiap heading besar (##) pakai warna maroon dengan garis bawah tipis gold
- Callout box / kotak info penting: background off-white atau gold muda, border kiri tebal warna maroon atau gold, sesuai konteks (info = gold, penting/warning = maroon)
- Tabel: header row background maroon dengan teks putih, baris isi bergantian putih/gold muda
- Blok kode/pseudocode: font monospace, background abu muda, ditampilkan utuh
- Section Post-Test: setiap soal pilihan ganda diberi jarak jelas, jawaban ditandai bold+italic
- Section "Pembuka Materi": callout gold berisi tagline & pertanyaan pemantik
- Section "Konten Reels": callout khusus bertuliskan "Khusus tim InspiraLabs, tidak ditampilkan di slide", karena ini dibaca instruktur untuk rekaman konten
- Section "KHUSUS TUTOR": beri callout maroon "Jangan ditampilkan ke siswa"
- Footer tiap halaman: nama pertemuan + nomor halaman
- Gunakan heading hierarchy Google Docs yang proper (Heading 1, Heading 2, dst) sesuai struktur # ## ### di isi. Spacing antar section konsisten, rapi seperti materi training profesional, bukan dokumen polos.

---------- MULAI ISI MATERI AJAR ----------

# SMA — Pertemuan 13: Dashboard Punya Kita + Demo Day

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 14 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengkustom dashboard proyek akhir (tampilan & aturan), menayangkannya online, dan mempresentasikan proyek akhir IoT |
| Penilaian | Keaktifan Tanya Jawab & Demo Day (+2), Challenge (Easy +5, Medium +10, Hard +15), Demo Day (rubrik di Khusus Tutor), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Kaitan dengan proyek akhir | Alat dari P12 (DHT22 di D13, relay di D14, kipas di NO, firmware `sma_room_monitor`) tidak diubah. Yang diutak-atik hari ini hanya **folder website kelompok** (mis. `sma-04`): warna di `:root` paling atas `style.css`, kartu **PROFIL KELOMPOK** + `foto-kelompok.jpg`, aturan `AMBANG_BATAS_SUHU_TINGGI` + teks peringatan, dan panel tips di kotak kosong `bagianEdukasi` (`index.html`). Folder lalu di-zip, diserahkan ke tutor, dan tayang di `https://<device-id>.inspiralabs.id`. |

## Alat & bahan (per kelompok)

- Alat proyek akhir dari P12 (ESP32 + DHT22 + relay + kipas, firmware terpasang) + kabel USB / power bank
- Laptop dengan **folder kelompok** dari zip P11 (`sma-0X`) + **VS Code** (cadangan: Notepad / TextEdit) + Chrome
- HP untuk foto kelompok dan membuka website saat Demo Day
- WiFi kelas **2.4 GHz** (sama seperti P11–P12), proyektor, timer

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p13/Panduan_Pengajar_P13_SMA.md`.

1. Cek backend online (`https://api-ekskulcoding.inspiralabs.id/health`) dan semua alat kelompok masih mengirim data.
2. Siapkan salinan `dist/paket/sma-0X.zip` (`py tools/kelompok.py paket`) untuk kelompok yang folder P11-nya hilang.
3. Siapkan tempat pengumpulan zip (flashdisk / folder Drive) + daftar centang `sma-01` … `sma-06`.
4. Laptop tutor siap deploy selama kelas: `py tools/kelompok.py deploy sma-0X <zip> --dry-run`, lalu tanpa `--dry-run`, commit, push (lihat `deploy/README.md`).
5. Folder **Kode** P13 berisi `C3_P13_Hard_PanelTips/panel_tips.txt` (snippet Challenge Hard).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Cover, pemantik, agenda, cara dapat poin |
| 5–12 | Materi | Isi folder website, warna `:root`, profil & foto, Tanya Jawab |
| 12–17 | 🟢 Challenge Easy | Ganti Baju Dashboard |
| 17–21 | Materi | Otak dashboard: aturan "kalau…", Tanya Jawab |
| 21–28 | 🟡 Challenge Medium | Aturan Kita Sendiri |
| 28–31 | Materi | Kotak kosong = panggung bonus, Tanya Jawab |
| 31–39 | 🔴 Challenge Hard | Panel Tips Pintar (tutor mulai deploy zip yang masuk) |
| 39–42 | Materi | Serahkan website, website kelompok online |
| 42–58 | Demo Day | 6 penampil × ±2,5 menit |
| 58–62 | Refleksi | Tanya Jawab + Peta Petualangan IoT |
| 62–70 | Post-test & penutup | 5 soal pilihan ganda (Google Form) + foto bersama |

**Peran.** Berdua: satu memegang **laptop** (edit `index.html`/`style.css`), satu menyiapkan **foto & alat** (cek alat online, latihan demo), tukar di Topik 2; keduanya bicara saat Demo Day. Sendiri: kerjakan Easy dulu, Medium & Hard sejauh waktu cukup. Yang belum selesai **tidak dibawa pulang**: zip dikumpulkan apa adanya.

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Cara Dapat Poin → Isi Folder Website-mu → Ganti Warna di Satu Tempat → Profil & Foto Kelompok → 💬 Tanya Jawab → 🟢 Easy → Otak Dashboard: Aturan "Kalau…" → 💬 Tanya Jawab → 🟡 Medium → Kotak Kosong = Panggung Bonus → 💬 Tanya Jawab → 🔴 Hard → Serahkan Website-mu → Website Kelompok Online → Demo Day: Format 2 Menit → 💬 Tanya Jawab → Peta Petualangan IoT → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Isi Folder Website-mu 📁
| File | Boleh diubah? | Isinya |
|---|---|---|
| `index.html` | ✅ Ya | Isi halaman: teks, profil, aturan |
| `style.css` | ✅ Ya | "Baju" dashboard: warna, ukuran |
| `api.js` | ❌ Jangan | Kabel ke server, sudah diurus tutor (Device ID terisi) |
| `foto-kelompok.jpg` | ✅ Ya | Foto kalian (±500 KB) |
- Buka folder kelompok di **VS Code**. Lihat hasil: **double-click `index.html`** → Chrome. Angka yang tampil tetap angka asli dari alat kalian.
- Siklus kerja: **Edit → Save → Refresh**.

### Slide 2 — Ganti Warna di Satu Tempat 🎨
```css
/* potongan — style.css, paling atas */
:root {
  --warna-primer: #ff8a3d;     /* aksen utama */
  --warna-sekunder: #3ddc97;   /* aksen kedua */
  --warna-bg: #f4f7fb;         /* latar halaman */
}
```
- **Hex color** = `#` + 6 huruf/angka. Cari "color picker" di Google, salin kodenya.
- `--warna-primer` itu **variabel**: ditulis sekali, dipakai di banyak tempat. Ganti di sini → seluruh dashboard ikut.
- Masih ada variabel warna lain di `:root` (status suhu, fan). Boleh dicoba, nama variabelnya jangan diubah.

### Slide 3 — Profil & Foto Kelompok 📸
```html
<!-- potongan — index.html, BAGIAN: PROFIL KELOMPOK -->
<div class="kartu-profil">
  <img src="foto-kelompok.jpg" alt="Foto kelompok" onerror="this.remove()">
  <div>
    <h2>Nama Kelompok Kami</h2>
    <p>Anggota: Nama 1, Nama 2</p>
  </div>
</div>
```
- Ganti **teks**-nya saja. `class` dan `id` dipakai tampilan & program, jangan diubah.
- Foto: nama **persis** `foto-kelompok.jpg` di folder yang sama dengan `index.html`. Foto HP asli (3–8 MB) dikecilkan dulu.
- Foto tidak muncul? `onerror="this.remove()"` menyembunyikan gambar yang gagal dimuat. Cek nama & lokasi file.

### Slide 4 — Otak Dashboard: Aturan "Kalau…" 🧠
```js
// potongan — index.html, bagian <script>
var AMBANG_BATAS_SUHU_TINGGI = 32;   // di atas ini, banner peringatan muncul

if (suhuSaatIni > AMBANG_BATAS_SUHU_TINGGI) {
  teks.textContent = "⚠️ Suhu terlalu tinggi (" + suhuSaatIni.toFixed(1) + "°C)! Pastikan ventilasi ruangan baik.";
}
```
- `if` = **"kalau"**. Kalau kondisinya benar, perintah di dalam `{ }` dijalankan.
- Kartu suhu juga memakai aturan: **< 22** Dingin, **≤ 29** Normal, di atasnya Panas. Kelembapan: **< 40** Kering, **≤ 70** Normal, di atasnya Lembap.
- Yang boleh diubah: **angka** dan **teks di dalam tanda kutip**. Tanda `+` dan `suhuSaatIni.toFixed(1)` (angka suhu dengan 1 desimal) biarkan.

### Slide 5 — Kotak Kosong = Panggung Bonus 🎁
- Dashboard punya kotak kosong `<div class="kartu-kosong" id="bagianEdukasi">` berisi komentar `TULIS KODEMU DI SINI`.
- Hari ini kotak itu diisi **panel tips** yang berubah sendiri sesuai suhu (kode jadi di `C3_P13_Hard_PanelTips/panel_tips.txt`, lihat Challenge Hard).
- `setInterval(…, 2000)` = "jalankan ini tiap 2 detik". `else if` = "kalau tidak, kalau…". Aturan dicek dari atas; yang pertama benar langsung dipakai.

### Slide 6 — Serahkan Website-mu 📦
| Aturan | Kenapa |
|---|---|
| Halaman utama tetap `index.html` | Server membuka `index.html` saat alamat website dikunjungi |
| Semua file (foto, CSS) **di dalam folder** | Alamat `C:\Users\...` hanya ada di laptopmu |
| `api.js` **tidak diubah**, tanpa npm | Saat deploy `api.js` selalu diganti versi tutor; server tidak menjalankan `npm install` (library hanya lewat link `https://` CDN) |
| Ukuran folder **≤ 5 MB** | Zip > 10 MB ditolak saat deploy |
| Zip bernama Device ID: `sma-04.zip` | Supaya tidak tertukar antar-kelompok |
- Folder `firmware/` boleh ikut di zip; saat deploy otomatis dibuang.

### Slide 7 — Website Kelompok Online 🌐
- Tutor memeriksa zip lalu menayangkannya di **`https://sma-0X.inspiralabs.id`**.
- Siapa pun bisa **melihat** data alat kalian dari HP mana pun. **Menekan tombol kipas** tetap butuh **PIN kelompok** (P12).
- Alat harus **menyala & tersambung WiFi** supaya angkanya hidup. Status "Online" di pojok dashboard = dashboard tersambung ke **server**, belum tentu alatnya menyala.

### Slide 8 — Demo Day: Format 2 Menit 🎤
1. **Kenalkan** kelompok & masalahnya ("Kelas kami panas…") — 15 detik.
2. **Tunjukkan** website di proyektor/HP — 30 detik.
3. **Demo live** 1 hal: genggam sensor → angka naik → kipas Otomatis menyala, atau tombol Manual dari HP — 45 detik.
4. **Cerita** 1 hal paling seru / paling bikin pusing — 30 detik.
- Penonton yang bertanya: **+2**.

### Slide 9 — Peta Petualangan IoT 🗺️
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                    ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                           ✅
[P13] Kustom dashboard + website online + Demo Day                              ← HARI INI
```
- Ide lanjutan: penyiram tanaman otomatis, alarm pintu kelas, pemantau suhu kandang, lampu kamar dari HP.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**. Hari ini penonton yang bertanya saat Demo Day juga mendapat **+2**.

- **Pemantik:** Dua aplikasi fiturnya sama persis. Kenapa kamu lebih suka yang satu?
- **Topik 1 — Ganti Baju Dashboard:** Kenapa cukup ganti warna di `:root` saja, tapi seluruh dashboard ikut berubah?
- **Topik 2 — Ubah Otak Dashboard:** Kalau batas "Panas" diubah dari 29 jadi 25, apa yang dilihat pengunjung saat ruangan 27°C? Apakah ruangannya jadi lebih panas?
- **Topik 3 — Panel Pintar:** Suhu 35°C dan kelembapan 80%. Kalau aturan kelembapan ditaruh di paling bawah, tips mana yang muncul? Kenapa?
- **Setelah Demo Day:** Kalau alat ini kamu kembangkan, mau dipasang di mana dan buat apa?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Ganti Baju Dashboard" (+5)
1. Isi nama kelompok dan nama anggota di **PROFIL KELOMPOK** (`index.html`).
2. Ganti **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-bg`) di `style.css`.
3. (Boleh) Tambah `foto-kelompok.jpg`.
4. Save → Refresh. Screenshot **sebelum** dan **sesudah**.

### 🟡 Medium — "Aturan Kita Sendiri" (+10)
1. Ubah teks peringatan di dalam tanda kutip dengan gaya kalian, misal `"°C)! Gerah banget, nyalain kipas dulu, bestie."`.
2. Buktikan banner muncul: ubah `AMBANG_BATAS_SUHU_TINGGI` jadi **di bawah suhu ruangan sekarang** → Save → Refresh.
3. Setelah terbukti, pilih angka ambang yang masuk akal untuk kelas kalian (misal `31`), Save lagi.
4. Screenshot banner dengan teks baru.

### 🔴 Hard — "Panel Tips Pintar" (+15)
1. Buka `C3_P13_Hard_PanelTips/panel_tips.txt`, salin kode dari `<h2>` sampai `</script>`.
2. Di `index.html`, cari `<div class="kartu-kosong" id="bagianEdukasi">`, ganti komentar `TULIS KODEMU DI SINI` dengan kode tadi. Save → Refresh: panel **Tips Ruangan** muncul.
3. Ubah **3 teks tips** dengan gaya kalian.
4. Tambah **1 aturan baru**: kalau `lembapSaatIni > 70` → tips soal ruangan lembap (contek pola baris `else if` yang sudah ada).
5. Buktikan: **tiup** sensor DHT22 sampai tips kelembapanmu muncul. Rekam/screenshot.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Alatnya sudah hidup. Sekarang bikin jadi milikmu, lalu pamerkan.
- **Pertanyaan pemantik:** Dua aplikasi fiturnya sama persis. Kenapa kamu lebih suka yang satu?
- **Konteks:** Semua dashboard kelompok di kelas ini fiturnya sama. Hari ini kita bikin dashboard kalian beda sendiri.
- Tampung 2–3 jawaban siswa (+2 per penjawab), jawabannya dibahas di Topik 1 (slide *Isi Folder Website-mu*): yang membedakan adalah tampilan dan cara aplikasi "ngomong" ke penggunanya.

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #3 (Transformation — Before & After)**

# "Anak SMA ini bikin alat IoT, dan sekarang websitenya online." 🌐

Isi slide:
- 🎨 Satu baris `:root` di CSS = **ganti tema seluruh website** sekaligus.
- 🧠 `if (suhu > 32)` = website bisa **ambil keputusan** sendiri: kapan peringatan muncul.
- 💡 Panel tips yang **berubah sendiri** tiap 2 detik sesuai suhu ruangan.
- 🌐 Dari laptop ke **`sma-0X.inspiralabs.id`**: bisa dibuka siapa pun, kipasnya tetap dikunci PIN.

🎙️ **Kalimat hook (pembuka rekaman):** "Anak SMA ini bikin alat IoT, dan sekarang websitenya online."

📌 **Teks di layar:**
- 1 baris CSS = ganti tema 🎨
- if = website bisa mikir 🧠
- Tips berubah sendiri 💡
- Online, tapi kipas dikunci PIN 🔐

🎬 **Penutup:** "Empat pertemuan, dari colok ESP32 sampai website online. Follow InspiraLabs!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Anak SMA ini bikin alat IoT, dan sekarang websitenya online."
> - [4–14 detik] "Rahasia pertama: satu baris di bagian root CSS. Ganti warnanya di satu tempat, seluruh website ikut berubah."
> - [14–26 detik] "Rahasia kedua: if. Kalau suhu di atas angka tertentu, muncul peringatan. Angka dan kalimatnya mereka tentukan sendiri."
> - [26–38 detik] "Rahasia ketiga: panel tips yang berubah sendiri tiap dua detik. Ditiup, sensornya lembap, tipsnya ganti."
> - [38–50 detik] "Terakhir, websitenya online. Siapa pun bisa lihat suhu kelasnya, tapi tombol kipasnya dikunci PIN."
> - [50–60 detik] "Empat pertemuan, dari colok ESP32 sampai website online. Follow InspiraLabs!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #3 — Transformation (Before & After) |
| Judul | Anak SMA bikin alat IoT, websitenya online |
| Durasi | ±60 detik |
| Pembicara | Tutor + cuplikan Demo Day siswa SMA (pastikan izin) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Split screen: dashboard polos vs dashboard warna kelompok | "Anak SMA ini bikin alat IoT, dan sekarang websitenya online." | Before → After 🌐 |
| 4–14 | Screen record: ubah `--warna-primer`, refresh, seluruh warna berubah | "Rahasia pertama: satu baris di bagian root CSS. Ganti warnanya di satu tempat, seluruh website ikut berubah." | 1 baris CSS = ganti tema 🎨 |
| 14–26 | Ubah `AMBANG_BATAS_SUHU_TINGGI`, banner peringatan muncul dengan kalimat kocak siswa | "Rahasia kedua: if. Kalau suhu di atas angka tertentu, muncul peringatan. Angka dan kalimatnya mereka tentukan sendiri." | if = website bisa mikir 🧠 |
| 26–38 | Siswa meniup sensor, panel tips berganti | "Rahasia ketiga: panel tips yang berubah sendiri tiap dua detik. Ditiup, sensornya lembap, tipsnya ganti." | Tips berubah sendiri 💡 |
| 38–50 | `sma-0X.inspiralabs.id` dibuka di HP, tombol kipas minta PIN | "Terakhir, websitenya online. Siapa pun bisa lihat suhu kelasnya, tapi tombol kipasnya dikunci PIN." | Online, kipas dikunci PIN 🔐 |
| 50–60 | Demo Day: kipas menyala, kelas tepuk tangan | "Empat pertemuan, dari colok ESP32 sampai website online. Follow InspiraLabs!" | Follow @inspiralabs 👉 |

#### Caption

Dari colok ESP32 sampai website online, cuma 4 pertemuan 🌐

🎨 1 baris `:root` = ganti tema seluruh website
🧠 `if` = website bisa ambil keputusan
💡 Panel tips berubah sendiri sesuai suhu
🔐 Online, tapi kontrol kipas dikunci PIN

#InspiraLabs #IoT #ESP32 #WebDev #ProyekSiswa #EkskulCoding #STEM #SMA

#### Yang sengaja tidak dibocorkan
- Isi firmware, alamat server, API key, dan PIN kelompok.
- Proses deploy website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Untuk mengubah warna utama seluruh dashboard sekaligus, bagian yang paling tepat diubah adalah…**
A. `api.js` B. Variabel di `:root` dalam `style.css` C. Firmware ESP32 D. Nama file `index.html`

**2. File di folder kelompok yang TIDAK boleh diubah karena berisi koneksi ke server adalah…**
A. `index.html` B. `style.css` C. `api.js` D. `foto-kelompok.jpg`

**3. Di dashboard ada aturan `if (suhuSaatIni > 32) { tampilkan peringatan }`. Sensor membaca 30°C. Apa yang terjadi?**
A. Peringatan tidak muncul B. Peringatan muncul C. Dashboard error D. Kipas mati

**4. Foto sudah ada di folder kelompok, tapi tidak tampil di kartu Profil Kelompok. Nama filenya `Foto Kelompok.JPG`. Penyebab paling mungkin adalah…**
A. Fotonya terlalu kecil B. Nama file tidak persis `foto-kelompok.jpg` yang dipanggil `index.html` C. `api.js` belum diubah D. ESP32 belum terhubung WiFi

**5. Batas status "Panas" di dashboard diubah dari 29 jadi 25. Suhu ruangan 27°C. Apa yang terjadi?**
A. Suhu ruangan turun jadi 25°C B. Dashboard menampilkan status Dingin C. Kipas langsung rusak D. Dashboard menampilkan status Panas, padahal suhu ruangan tetap 27°C

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** nama kelompok/anggota terisi + 3 variabel `:root` berubah (terlihat jelas di screenshot sebelum/sesudah). Kesalahan paling sering: titik koma `;` atau kurung `}` ikut terhapus → seluruh tampilan berantakan; nama `--warna-...` ikut diganti → warna kembali default. Bandingkan dengan file asli di zip.

**Medium:** banner muncul dengan teks baru saat ambang di bawah suhu ruangan, lalu ambang dikembalikan ke angka masuk akal. Kalau banner tidak muncul: tanda kutip ikut terhapus (cek Console F12, ada error merah), atau lupa Save/Refresh. Teks baru harus tetap diapit tanda kutip dan disambung dengan `+`.

**Hard:** panel **Tips Ruangan** muncul, 3 teks berubah, dan aturan kelembapan bekerja saat sensor ditiup. Contoh jawaban (diletakkan **sebelum** baris `else tips = …`):
```js
else if (lembapSaatIni > 70) tips = "Lembap banget, buka jendela biar udara ganti.";
```
Kalau aturan kelembapan tidak pernah muncul: diletakkan setelah `else` terakhir (error), atau suhu sedang > 30 sehingga aturan pertama yang menang (jawaban Tanya Jawab Topik 3). Panel tetap "Menunggu data..." → `id="teksTips"` salah ketik atau tag `<script>` tidak lengkap.

### Serah terima & deploy (tutor)
- Terima `sma-0X.zip` per Device ID. `py tools/kelompok.py deploy sma-04 sma-04.zip --dry-run` untuk cek, lalu tanpa `--dry-run`, kemudian `git add kelompok/sma-04` → commit → push (deploy otomatis di server).
- Saat deploy: `firmware/` dan file tersembunyi dibuang, `api.js` diganti versi tutor; zip tanpa `index.html` atau > 10 MB ditolak.
- Deploy dikerjakan tutor selama challenge/Demo Day. Yang belum sempat di-deploy saat kelas dikerjakan tutor setelah kelas; siswa tidak perlu mengirim ulang apa pun.

### Rubrik Demo Day (skor 1–4, untuk apresiasi & catatan nilai)
| Aspek | 1 | 4 |
|---|---|---|
| Fungsi | Data tidak tampil | Data hidup + kipas jalan (Manual atau Otomatis) saat demo |
| Dashboard | Tampilan default | Profil, warna, aturan/teks sendiri (+ panel tips) |
| Penjelasan | Tidak bisa menjelaskan | Menjelaskan alur alat → server → dashboard dan 1 masalah yang dihadapi |
| Presentasi | 1 orang bicara, tanpa demo | Mulai dari masalah, demo lancar, semua anggota bicara (individu: kejelasan & demo) |

### Kunci Post-Test
1. B 2. C 3. A 4. B 5. D

### Pembahasan singkat
- No. 1: `--warna-primer` dkk. adalah variabel; ditulis sekali di `:root`, dipakai di seluruh `style.css`.
- No. 2: `api.js` berisi alamat server & Device ID; saat deploy selalu diganti versi tutor.
- No. 3: 30 tidak lebih besar dari 32, jadi kondisi `if` salah dan peringatan tidak muncul.
- No. 4: `index.html` memanggil persis `foto-kelompok.jpg`; nama file di server peka huruf besar-kecil.
- No. 5: website hanya menafsirkan angka; aturan yang ditulis menentukan label, bukan suhu ruangannya.

---------- SELESAI ISI MATERI AJAR ----------
