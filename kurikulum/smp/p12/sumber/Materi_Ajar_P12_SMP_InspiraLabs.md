# SMP — Pertemuan 12: Data Muncul di Dashboard & Kustom Website-mu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 6 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menampilkan data sensor DHT22 di dashboard yang telah disediakan (proyek akhir) dan mengkustom tampilannya |
| Penilaian | Progres proyek akhir: data kelompok tampil di dashboard + profil kelompok terisi |
| Potongan proyek akhir yang dibedah | Dashboard `index.html` + `style.css` dari zip proyek (`smp-XX.zip`). Bagian yang dikustom: **BAGIAN: PROFIL KELOMPOK** di `index.html` (nama kelompok, anggota, `foto-kelompok.jpg`), judul di **BAGIAN: HEADER**, dan warna di `:root` paling atas `style.css`. `api.js` **tidak disentuh**. Firmware sudah terpasang sejak P11. |

## Alat & bahan (per kelompok/individu)

- Alat dari P11 (ESP32 + DHT22, firmware proyek sudah ter-upload)
- **Power bank** + kabel USB (supaya alat jalan tanpa laptop)
- Laptop + folder proyek hasil extract `smp-XX.zip` (dari P11)
- **Foto kelompok** (atau foto diri untuk peserta individu) di HP/laptop
- WiFi kelas **2.4 GHz** (sama seperti P11)

## Persiapan tutor sebelum kelas

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`.
2. Siapkan zip cadangan (`py tools/kelompok.py paket`) untuk siswa yang foldernya hilang/rusak. Kalau zip diganti, siswa harus mengisi WiFi & upload firmware lagi.
3. Siapkan cara memindahkan foto dari HP ke laptop (kabel/Drive/WA Web). Tunjukkan cara mengecilkan foto: buka di **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
4. Siapkan contoh "folder bermasalah" untuk Challenge Hard (lihat Kunci), cukup ditulis di papan/slide.
5. Hotspot cadangan 2.4 GHz.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Nyalakan semua alat pakai power bank, cek Serial Monitor satu laptop: `kode respons: 200` |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–17 | Materi | Slide 1–2: perjalanan data, alat tanpa laptop |
| 17–25 | Praktek bersama | Slide 3: buka dashboard, data kelompok muncul |
| 25–30 | 🟢 Challenge Easy | Data Pertamaku Muncul |
| 30–38 | Materi | Slide 5–7: peta dashboard, profil, warna, foto |
| 38–50 | 🟡 Challenge Medium | Dashboard Punya Kami |
| 50–55 | Materi | Slide 8: aturan serah folder & alamat website |
| 55–58 | 🔴 Challenge Hard | Inspektur Folder |
| 58–60 | Peta proyek | Slide 9 |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Alat Kita Masih "Kesepian" → Perjalanan Data → Praktek Bareng: Buka Dashboard-mu → Tips Engineer: Kalau Dashboard Diam → 💬 Forum Diskusi → 🟢 Easy → Peta Dashboard: Boleh & Jangan → Kustom 1: Profil & Judul → Kustom 2: Warna di :root → Kustom 3: Foto Kelompok → 💬 Forum Diskusi → 🟡 Medium → Aturan Serah Folder → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

> Buffer: kalau pemindahan foto lama, foto boleh menyusul di P13. Yang wajib hari ini: data tampil + nama kelompok/anggota + warna sudah diganti.

---

## Slide

### Slide 1 — Alat Kita Masih "Kesepian" 😢
- P11: data suhu muncul di **Serial Monitor**, cuma di laptop yang tercolok kabel.
- Firmware sebenarnya **sudah mengirim** data ke internet (`kode respons: 200`).
- Hari ini: kita **melihat** data itu di **website kalian sendiri**, lalu membuat website itu jadi milik kelompok.

### Slide 2 — Perjalanan Data 🚀
```
DHT22 → ESP32 → WiFi → Internet → Server InspiraLabs → Dashboard (website kalian)
```
- **Server** = komputer yang selalu menyala di internet, **menyimpan** data semua alat.
- **Dashboard** = halaman web yang **menampilkan** data alat dengan Device ID kalian (tiap ±4 detik).
- Firmware **tersimpan** di ESP32. Colok ke **power bank** → alat jalan sendiri, **tanpa laptop**.

### Slide 3 — Praktek Bareng: Buka Dashboard-mu 🖥️
1. Colok ESP32 ke **power bank**. Tunggu ±10 detik (ESP32 menyambung WiFi).
2. Di laptop, buka folder `smp-XX` → **double-click** `index.html` (terbuka di browser).
3. Tunggu ±5 detik: angka suhu & kelembapan berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah (tunggu ±5 detik).

> Catatan tutor: Sebelum ada data, dashboard menampilkan **angka contoh** (26°C, 60%). Angka itu baru berubah kalau server sudah menerima data dari Device ID kelompok itu.

### Slide 4 — Tips Engineer: Kalau Dashboard Diam 🛠️

| Gejala | Penyebab | Solusi |
|---|---|---|
| Angka tetap 26°C / 60% | ESP32 belum mengirim data | Colok ke laptop, buka Serial Monitor: harus ada `kode respons: 200` |
| Serial Monitor macet di titik-titik | WiFi salah / 5 GHz / sinyal lemah | Cek zona hijau, dekatkan ke router (lihat tabel P11) |
| Data muncul tapi tidak berubah saat ditiup | Sensor baru dibaca tiap 4 detik | Tiup lebih lama, tunggu 5–10 detik |
| ESP32 di power bank mati sendiri | Power bank mode hemat (arus kecil dianggap kosong) | Pakai power bank lain atau colok ke laptop |
| Dashboard menampilkan data aneh (bukan alat kita) | Folder tertukar dengan kelompok lain | Cek nama folder & Device ID di `README.md`/HANDOUT |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik: dashboard hanya **menampilkan** apa yang sudah sampai di server. Kalau alat tidak mengirim, website tidak punya data baru.

### Slide 5 — Peta Dashboard: Boleh & Jangan 🗺️

| File | Boleh diubah? | Yang diubah |
|---|---|---|
| `index.html` | ✅ Boleh (teks) | Nama kelompok, anggota, judul, kalimat |
| `style.css` | ✅ Boleh (warna) | Warna di `:root` paling atas |
| `foto-kelompok.jpg` | ✅ Kalian tambahkan | Foto kelompok |
| `icon.webp` | Biarkan | Ikon tab browser |
| `api.js` | ❌ **Jangan** | "Kabel" ke server (saat deploy selalu diganti versi asli tutor) |
| Bagian `<script>` di bawah `index.html` | ❌ **Jangan** | Pengambil data sensor |

- Edit pakai **VS Code** (klik kanan file → Open With Code). **Save** (Ctrl+S), lalu **refresh** browser (F5).

### Slide 6 — Kustom 1: Profil & Judul ✍️
Cari komentar **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<div class="kartu-profil">
  <img src="foto-kelompok.jpg" alt="Foto kelompok" onerror="this.remove()">
  <div>
    <h2>Nama Kelompok Kami</h2>
    <p>Anggota: Nama 1, Nama 2</p>
  </div>
</div>
```
- Ganti **teks** di antara `<h2>…</h2>` dan `<p>…</p>`. **Jangan** hapus tanda `< >`.
- Nama anggota sudah diisi tutor, cek ejaannya. Peserta individu: tulis nama sendiri.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER** dengan nama alat kalian.

### Slide 7 — Kustom 2 & 3: Warna dan Foto 🎨
**Warna** → buka `style.css`, bagian `:root` paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Ganti kode warna setelah `#` (6 huruf/angka). Cari kode warna di Google: "color picker".
- Titik koma `;` di akhir baris jangan terhapus.

**Foto** →
- Kecilkan dulu: Paint → Resize → lebar 800 piksel → Save as JPEG.
- Nama file **persis**: `foto-kelompok.jpg` (huruf kecil, tanda minus, akhiran `.jpg`).
- Simpan **di dalam folder** `smp-XX`, sejajar dengan `index.html`.

> Catatan tutor: Kesalahan paling sering: `Foto-Kelompok.JPG`, `foto kelompok.jpg` (spasi), `foto-kelompok.jpeg`, `foto-kelompok.jpg.jpg` (ekstensi tersembunyi di Windows), atau foto disimpan di Downloads. Kalau nama salah, foto tidak tampil (kotaknya hilang).

### Slide 8 — Aturan Serah Folder 📦
Website kalian akan **online** di: **`https://<device-id>.inspiralabs.id`**
(contoh: `https://smp-07.inspiralabs.id`)

1. Halaman utama tetap bernama **`index.html`**.
2. **Semua** file (foto, CSS) ada **di dalam folder** `smp-XX`. Jangan menunjuk file di Downloads/Desktop.
3. Foto bernama **`foto-kelompok.jpg`**.
4. **Tidak** pakai `npm`/instalasi. Butuh library (mis. Chart.js)? Pakai **link CDN**.
5. **Jangan** ubah `api.js` (saat deploy selalu diganti versi asli).
6. Ukuran folder maksimal **5 MB**. Hapus folder **`firmware/.pio`** (hasil Build, ukurannya besar) sebelum di-zip.
7. Zip seluruh folder, beri nama sesuai Device ID (mis. `smp-07.zip`), serahkan ke tutor di **P13**.

> Catatan tutor: Cek ukuran: klik kanan folder → Properties → Size. Folder `firmware/.pio` dibuat otomatis oleh PlatformIO dan bisa ratusan MB; aman dihapus (dibuat ulang saat Build berikutnya).

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED           ✅
[P10] Upload program jadi (Blink) + rakit DHT22     ✅
[P11] Upload firmware proyek + jadi "dokter kabel"  ✅
[P12] Data muncul di dashboard + kustom dashboard   ← HARI INI
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Minggu depan siswa membawa **kotak bekas** (kardus kecil, kotak plastik, kotak pensil bekas) untuk casing alat, plus selotip/double tape.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Data ke Dashboard:** Kalau laptop dimatikan, apakah data suhu tetap muncul di dashboard? Kenapa?
- **Topik 2 — Kustom Dashboard:** Foto sudah dimasukkan, tapi tidak muncul di dashboard. Apa saja kemungkinan penyebabnya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Data Pertamaku Muncul"
Nyalakan alat pakai **power bank** (tanpa laptop). Buka dashboard dan buktikan angka suhu kelompokmu **muncul**. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor.

### 🟡 Medium — "Dashboard Punya Kami" 🎨
Ubah dashboard kalian:
1. Nama kelompok & anggota di **Profil Kelompok** (cek ejaan).
2. Judul di **header** jadi nama alat kalian.
3. **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-biru`).
4. `foto-kelompok.jpg` tampil di kartu profil.

Data sensor harus **tetap muncul** setelah diubah.

### 🔴 Hard — "Inspektur Folder" 🔍
Tutor menampilkan isi folder kelompok khayalan `smp-99`. Temukan **semua pelanggaran** aturan serah folder (minimal 4), tulis di kertas beserta cara memperbaikinya. Lalu cek folder kalian sendiri: ukurannya berapa MB?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Data suhu kelasmu muncul di website kalian sendiri, lengkap dengan nama dan wajah kalian.
- **Pertanyaan pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Konteks:** Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Tips Engineer: Kalau Dashboard Diam*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop masukin foto 10 MB ke website kamu." 🛑

Isi slide:
- 📸 Foto langsung dari HP bisa **5–10 MB**. Website jadi lambat dibuka, apalagi di HP dengan kuota pas-pasan.
- 📐 Kecilkan dulu: lebar **800 piksel** sudah cukup tajam untuk website. Ukurannya turun jadi ±**150 KB**.
- 🏷️ Nama file itu **penting**: `foto-kelompok.jpg` ≠ `Foto Kelompok.JPG`. Satu huruf beda, foto hilang.
- 📁 Simpan **di dalam folder website**, jangan di Downloads. Website yang online tidak bisa membuka laptopmu.

🎙️ **Kalimat hook (pembuka rekaman):** "Stop masukin foto sepuluh mega ke website kamu."

📌 **Teks di layar:**
- 10 MB = website lemot 🐢
- Lebar 800 px cukup 📐
- Nama file harus PERSIS 🏷️
- Simpan di folder website 📁

🎬 **Penutup:** "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–3 detik] "Stop masukin foto sepuluh mega ke website kamu."
> - [3–12 detik] "Foto dari HP itu gede banget. Taruh di website, yang buka harus nunggu, kuota kebuang."
> - [12–22 detik] "Kecilin dulu. Buka di Paint, resize lebar delapan ratus piksel, save JPEG. Dari sepuluh mega jadi seratus lima puluh kilo. Tetap tajam."
> - [22–32 detik] "Kedua, nama file. Huruf besar, spasi, titik JPEG atau JPG, semuanya dihitung. Satu beda, fotonya hilang dari website."
> - [32–42 detik] "Ketiga, simpan di dalam folder website. Kalau fotonya di Downloads, pas websitenya online, fotonya nggak ikut."
> - [42–50 detik] "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!"

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop masukin foto 10 MB ke website kamu |
| Durasi | ±50 detik |
| Pembicara | Tutor (layar laptop) + siswa memegang alat |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Website loading lama, gambar muncul sepotong-sepotong | "Stop masukin foto sepuluh mega ke website kamu." | STOP foto 10 MB 🛑 |
| 3–12 | Properties file foto HP: 9,8 MB | "Foto dari HP itu gede banget. Taruh di website, yang buka harus nunggu, kuota kebuang." | 10 MB = website lemot 🐢 |
| 12–22 | Screen record Paint → Resize → 800 px → Save JPEG, ukuran jadi 150 KB | "Kecilin dulu. Buka di Paint, resize lebar delapan ratus piksel, save JPEG. Dari sepuluh mega jadi seratus lima puluh kilo. Tetap tajam." | Lebar 800 px cukup 📐 |
| 22–32 | Nama file `Foto Kelompok.JPG` dicoret, diganti `foto-kelompok.jpg` | "Kedua, nama file. Huruf besar, spasi, titik JPEG atau JPG, semuanya dihitung. Satu beda, fotonya hilang dari website." | Nama file harus PERSIS 🏷️ |
| 32–42 | File foto di-drag dari Downloads ke folder `smp-07` | "Ketiga, simpan di dalam folder website. Kalau fotonya di Downloads, pas websitenya online, fotonya nggak ikut." | Simpan di folder website 📁 |
| 42–50 | Dashboard dengan foto kelompok, siswa meniup sensor, angka naik | "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!" | Next: website online 🌐 |

#### Caption

Foto di website kamu nggak muncul, atau websitenya lemot banget? 🐢 Cek 3 hal ini:
📐 Kecilkan foto (lebar 800 px cukup)
🏷️ Nama file harus persis sama
📁 Simpan di dalam folder website

Save buat contekan sebelum upload website! 💾

#InspiraLabs #WebDev #BelajarCoding #IoT #EkskulCoding #TipsWebsite #HTML #CSS

#### Yang sengaja tidak dibocorkan
- Cara data sensor sampai ke dashboard (server, Device ID).
- Aturan lengkap serah folder & alamat website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Firmware sudah ter-upload di P11. Agar alat tetap mengirim data tanpa laptop, yang dilakukan adalah…**
A. Menulis ulang firmware B. Mencolokkan ESP32 ke power bank (program tetap tersimpan di ESP32) C. Menghapus `api.js` D. Mencabut sensor DHT22

**2. Foto kelompok agar tampil di dashboard harus…**
A. Bernama `foto-kelompok.jpg` dan disimpan di dalam folder website B. Bernama bebas dan disimpan di Downloads C. Berukuran minimal 10 MB D. Ditempel di `api.js`

**3. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…**
A. `api.js` B. Bagian `<script>` di bawah `index.html` C. Kode warna di `:root` paling atas `style.css` D. `DEVICE_ID` di firmware

**4. Manakah yang MELANGGAR aturan serah folder?**
A. Halaman utama bernama `index.html` B. Memakai library lewat link CDN C. Ukuran folder 3 MB D. Memasang library dengan `npm install` dan mengubah `api.js`

**5. Website kelompok dengan Device ID `smp-07` akan bisa dibuka di alamat…**
A. `https://smp-07.inspiralabs.id` B. `https://ekskul.inspiralabs.id/kelompok7` C. `http://192.168.1.23` D. `https://smp-07.com`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** bukti = dashboard menampilkan angka selain angka contoh (26°C / 60%) dan berubah saat sensor ditiup, alat tidak tersambung ke laptop.

**Medium:** cek 4 poin. Kalau data hilang setelah dikustom, biasanya siswa tidak sengaja menghapus `<span id="angkaSuhu">` / `id="angkaLembap"` atau bagian `<script>`. Perbaiki dengan menyalin ulang `index.html` dari zip asli lalu ulangi kustom.

**Hard — contoh isi folder `smp-99` (tampilkan di papan/slide):**
```
smp-99/
├── home.html                 ← pelanggaran 1: halaman utama harus index.html
├── style.css
├── api.js                    (diubah: MY_DEVICE_ID = "smp-01")   ← pelanggaran 2: api.js tidak boleh diubah
├── Foto Kelompok.JPG         (8,7 MB)   ← pelanggaran 3: nama salah; pelanggaran 4: terlalu besar
├── package.json + node_modules/          ← pelanggaran 5: pakai npm (pakai CDN)
├── firmware/.pio/            (310 MB)   ← pelanggaran 6: folder hasil Build ikut di-zip
└── (di index.html) <img src="C:\Users\Budi\Downloads\logo.png">   ← pelanggaran 7: file di luar folder
```
Minimal 4 benar = lulus. Perbaikan: rename ke `index.html`, ambil `api.js` asli, rename & kecilkan foto, hapus `node_modules`/`package.json` dan pakai CDN, hapus `firmware/.pio`, pindahkan `logo.png` ke dalam folder dan tulis `src="logo.png"`.

### Kunci Post-Test
1. B 2. A 3. C 4. D 5. A

### Pembahasan singkat
- No. 1: firmware tersimpan di memori ESP32; power bank hanya memberi listrik.
- No. 4: `api.js` selalu diganti versi asli saat deploy, dan `npm` tidak dijalankan di server, jadi website yang bergantung pada keduanya akan rusak.
- No. 5: setiap Device ID mendapat alamat sendiri: `<device-id>.inspiralabs.id`.
