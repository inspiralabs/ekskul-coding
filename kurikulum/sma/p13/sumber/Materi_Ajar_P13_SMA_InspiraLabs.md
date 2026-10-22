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
