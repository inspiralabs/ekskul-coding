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
