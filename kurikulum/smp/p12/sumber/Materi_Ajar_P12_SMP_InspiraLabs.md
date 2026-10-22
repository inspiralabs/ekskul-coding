# SMP — Pertemuan 12: Kirim Suhu ke Internet & Dashboard-mu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 6 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengirim data sensor DHT22 ke dashboard yang telah disediakan (proyek akhir) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). Progres proyek akhir: `kode respons: 200` + data tampil di dashboard. **Tidak ada PR.** |
| Potongan proyek akhir yang dibedah | `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` dipakai **utuh**, kecuali zona "BOLEH DIUBAH": `WIFI_SSID` dan `WIFI_PASSWORD`. `DEVICE_ID` **sudah diisi tutor**, `DHT_PIN 4` sama dengan rakitan P11. Lalu dashboard `index.html` + `style.css` dari folder yang sama: **BAGIAN: PROFIL KELOMPOK**, judul di **BAGIAN: HEADER**, dan warna di `:root`. `api.js` **tidak disentuh**. Foto kelompok dipasang di P13. |

## Alat & bahan (per kelompok/individu)

- Rakitan dari P11: ESP32 + DHT22 (+ ke 3V3, out ke **D4**, − ke GND). LED di D2 boleh dilepas.
- Kabel USB data + laptop dengan Arduino IDE + board ESP32 + library DHT (dari P10) + **VS Code**
- **Folder proyek per kelompok** `smp-XX` (dari zip `smp-XX.zip`, `smp-01` … `smp-13`), berisi `firmware/`, `index.html`, `style.css`, `api.js`, `icon.webp`, `README.md`. Device ID & nama anggota **sudah diisi**. Daftar Device ID: `docs/HANDOUT_SISWA.md`.
- **Power bank** terisi + kabel USB (disiapkan tutor; tanpa power bank tetap bisa dicolok ke laptop)
- Folder **Kode** pertemuan ini (Drive): `P12_1_TesWiFi` (program cadangan untuk mengecek WiFi saja)
- WiFi kelas **2.4 GHz** + hotspot HP cadangan

## Persiapan tutor sebelum kelas

1. Buat zip per Device ID dengan `py tools/kelompok.py paket`. **Extract `smp-XX.zip` di laptop kelompok itu** (mis. di Desktop), buka `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` di Arduino IDE, lalu **Verify (✓)** sekali. Jangan pakai salinan umum `smp/` atau `Kode/proyek-akhir`: Device ID-nya generik dan data kelompok bisa saling menimpa.
2. Tulis nama & password WiFi kelas di papan (huruf besar-kecil persis). Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz). Siapkan 1 hotspot HP cadangan.
3. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`. Buka satu `index.html`: angka contoh harus berganti jadi data sungguhan setelah ada alat yang mengirim.
4. Charge semua power bank. Pastikan VS Code terpasang di tiap laptop.
5. Panduan lengkap: `kurikulum/smp/p12/Panduan_Pengajar_P12_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Bagikan kit, peran, cara dapat poin |
| 5–10 | Pembuka materi | Cover + pemantik + perjalanan data + folder proyek + zona hijau/merah |
| 10–22 | Praktek bersama | Isi WiFi, upload firmware |
| 22–25 | Materi | Membaca cerita ESP32 + tips kalau belum 200 |
| 25–27 | Tanya Jawab | Topik 1 |
| 27–30 | 🟢 Challenge Easy | Klub 200 |
| 30–36 | Praktek bersama | Power bank + buka dashboard |
| 36–39 | 🟡 Challenge Medium | Data Pertamaku Online |
| 39–45 | Materi + demo | Boleh & jangan, profil & judul, warna (tutor demo di layar). **Ganti peran.** |
| 45–47 | Tanya Jawab | Topik 2 |
| 47–60 | 🔴 Challenge Hard | Dashboard Punya Kami |
| 60–62 | Peta petualangan | |
| 62–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Cara Dapat Poin → Perjalanan Data → Folder Proyekmu → Zona Hijau & Zona Merah → Praktek Bareng: Upload Firmware → Membaca "Cerita" ESP32 → Tips Engineer: Kalau Belum 200 → 💬 Tanya Jawab → 🟢 Easy → Praktek Bareng: Buka Dashboard-mu → 🟡 Medium → Peta Dashboard: Boleh & Jangan → Kustom 1: Profil & Judul → Kustom 2: Warna di :root → 💬 Tanya Jawab → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah WiFi. Kalau banyak yang macet di WiFi, pindahkan semua ke hotspot cadangan bersama-sama. Yang wajib hari ini: `kode respons: 200` **dan** angka alat tampil di dashboard. Kustom yang belum selesai dilanjutkan di awal P13.

---

## Slide

### Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik WiFi, Upload, edit di VS Code |
| **Pengecek** | Cek ejaan WiFi & nama |
| **Penjaga Alat** | Mengurus kabel, sensor & power bank |
| **Desainer** | Memimpin pilihan nama alat & warna |

- Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Cara Dapat Poin Hari Ini 🏅

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

### Perjalanan Data 🚀
```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```
- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk alat kalian.

> Catatan tutor: Slide ini menjawab pertanyaan pemantik: website hanya **menampilkan** data yang dikirim alat pengukur ke server. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

### Folder Proyekmu 📁
Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Isinya |
|---|---|
| `firmware/` | Program resmi ESP32 (**firmware**) |
| `index.html`, `style.css` | Website dashboard kalian |

- **smp-XX = Device ID** = plat nomor alat kalian di internet.

> Catatan tutor: Device ID sudah diisi tutor, tidak boleh diganti, dan tidak boleh sama dengan kelompok lain. File lain: `api.js` (jangan diubah), `icon.webp`, `README.md`. Kalau folder belum ada: klik kanan `smp-XX.zip` → **Extract All**.

### Zona Hijau & Zona Merah 🚦
Buka `firmware/smp_room_monitor/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> Catatan tutor: Zona hijau seperti kolom isian formulir. Zona merah berisi `SERVER_URL` dan `API_KEY`; kalau diubah, data ditolak. Hanya ganti tulisan `ISI_DI_SINI`; tanda kutip `" "` jangan terhapus.

### Praktek Bareng: Upload Firmware 🔧
1. Cek rakitan P11: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

> Catatan tutor: Nama WiFi harus persis: huruf besar-kecil dan spasi dihitung. Pengecek membandingkan huruf demi huruf dengan papan. Serial Monitor kosong → tekan tombol **EN** (reset) di board.

### Membaca "Cerita" ESP32 📖
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
- Titik-titik = sedang mencari WiFi.
- **200** = data **diterima** server, seperti centang dua di WhatsApp!

> Catatan tutor: Baris suhu dan kode respons berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal `{ }`, abaikan saja.

### Tips Engineer: Kalau Belum 200 🩺

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> Catatan tutor: Gejala lain yang ditangani tutor:
> - Titik-titik tak berhenti padahal password benar → WiFi 5 GHz, pindah ke hotspot 2.4 GHz.
> - `kode respons: 401` → zona merah (`API_KEY`) berubah. Extract ulang zip asli, isi WiFi lagi.
> - Tulisan acak `⸮⸮⸮` → pilih **115200 baud** di Serial Monitor.
> - Masih bingung WiFi atau sensor? Upload `P12_1_TesWiFi.ino` (WiFi saja) atau `P11_1_BacaDHT22.ino` (sensor saja), lalu upload lagi firmware proyek.

### Praktek Bareng: Buka Dashboard-mu 🖥️
1. Cabut ESP32 dari laptop, colok ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah!

> Catatan tutor: "Tanpa laptop" bukan berarti tanpa listrik: power bank yang memberi listrik. Tidak ada power bank? Tetap colok ke laptop. Sebelum ada data, dashboard menampilkan **angka contoh** (26°C, 60%).

### Peta Dashboard: Boleh & Jangan 🗺️

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `api.js` | ❌ **Jangan** |

- Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> Catatan tutor: `api.js` = "kabel" dashboard ke server; saat online selalu diganti versi asli tutor. Bagian `<script>` di bawah `index.html` juga jangan diubah (pengambil data sensor). `icon.webp` biarkan. Foto kelompok dipasang di P13.

### Kustom 1: Profil & Judul ✍️
Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```
- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> Catatan tutor: Nama anggota sudah diisi tutor, cek ejaannya. Peserta individu: tulis nama sendiri. Tips cari: Ctrl+F lalu ketik "PROFIL". Nama & judul harus sopan karena website akan online.

### Kustom 2: Warna di :root 🎨
Buka `style.css`, paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Klik **kotak warna kecil** di depan kode → pilih warna.
- Titik koma `;` jangan terhapus.

> Catatan tutor: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS; klik untuk membuka pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah `#`.

### Peta Petualangan IoT 🗺️
```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              (selesai)
[P12] Kirim suhu ke internet + dashboard kelompok     ← HARI INI
[P13] Foto, rumah alat & showcase
```
> Catatan tutor: Minggu depan foto kelompok diambil di kelas dan kardus untuk "rumah alat" disiapkan tutor. Siswa **tidak perlu membawa apa-apa**.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Topik 1 — Kirim Suhu ke Internet:** Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?
- **Topik 2 — Kustom Dashboard:** Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Klub 200" (+5)
1. Serial Monitor menulis `Kirim data -> kode respons: 200`.
2. Tunjukkan ke tutor.
3. Device ID kalian ditulis di papan **Klub 200**!

### 🟡 Medium — "Data Pertamaku Online" (+10) 🌐
1. Alat menyala pakai **power bank** (tanpa laptop).
2. Dashboard menampilkan angka **alat kalian** (bukan 26°C / 60%).
3. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor!

### 🔴 Hard — "Dashboard Punya Kami" (+15) 🎨
1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-biru`).

Angka sensor harus **tetap muncul** setelah diubah!

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Angka suhu dari mejamu terbang ke internet dan tampil di website kalian sendiri.
- **Pertanyaan pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Konteks:** Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di slide *Perjalanan Data*.

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
- Cara data sensor sampai ke dashboard (firmware, server, Device ID).
- Aturan lengkap serah folder & alamat website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di firmware proyek akhir, baris yang diisi siswa hari ini adalah…**
A. `SERVER_URL` dan `API_KEY` B. `DEVICE_ID` diganti nama sendiri C. `WIFI_SSID` dan `WIFI_PASSWORD` D. Semua baris di bawah tulisan `JANGAN UBAH`

**2. Serial Monitor menulis `Kirim data -> kode respons: 200`. Artinya…**
A. Data diterima server, seperti centang dua di WhatsApp B. Ada 200 kesalahan C. Suhu ruangan 200 derajat D. WiFi belum tersambung

**3. Serial Monitor menampilkan `Menghubungkan ke WiFi.........` dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…**
A. Kabel sensor DHT22 longgar B. LED terbalik C. Warna dashboard salah D. Nama atau password WiFi salah

**4. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…**
A. `api.js` B. Kode warna di `:root` paling atas `style.css` C. Bagian `<script>` di bawah `index.html` D. `DEVICE_ID` di firmware

**5. Laptop dimatikan, ESP32 dicolok ke power bank. Apakah dashboard tetap menampilkan suhu terbaru?**
A. Tidak, karena program hilang saat laptop mati B. Tidak, karena dashboard hanya jalan di laptop yang meng-upload C. Ya, karena program tersimpan di ESP32 dan power bank memberi listrik D. Ya, tapi hanya kalau sensor dicabut

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** baris `Kirim data -> kode respons: 200` terlihat di Serial Monitor dari rakitan kelompok sendiri.

**Medium:** bukti = dashboard menampilkan angka selain angka contoh (26°C / 60%) dan berubah saat sensor ditiup, alat tidak tersambung ke laptop. Kelompok tanpa power bank: boleh tetap tersambung ke laptop, asalkan angka di dashboard berubah saat ditiup.

**Hard:** cek 3 poin. Kalau data hilang setelah dikustom, biasanya siswa tidak sengaja menghapus `<span id="angkaSuhu">` / `id="angkaLembap"` atau bagian `<script>`. Perbaiki dengan menyalin ulang `index.html` dari zip asli lalu ulangi kustom (lebih cepat daripada mencari tanda yang hilang).

### Kunci Post-Test
1. C 2. A 3. D 4. B 5. C

### Pembahasan singkat
- No. 1: `DEVICE_ID` sudah diisi tutor dan tidak boleh diganti. Zona merah tidak pernah diubah.
- No. 3: firmware menunggu WiFi dulu sebelum membaca sensor, jadi masalah kabel sensor tidak membuat titik-titik macet.
- No. 5: firmware tersimpan di memori ESP32; power bank hanya memberi listrik. Dashboard bisa dibuka dari perangkat lain.
