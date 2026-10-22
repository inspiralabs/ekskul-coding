# P12 SMP — Kirim Suhu ke Internet & Dashboard-mu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide, nuansa main game (level, poin). -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P12 SMP**

# Kirim Suhu ke Internet & Dashboard-mu

Angka suhu dari mejamu terbang ke internet dan tampil di website kalian sendiri.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?

Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Tampung 2–3 tebakan siswa (+2 per penebak) tanpa langsung dijawab. Jawabannya dibahas di slide "Perjalanan Data".

---

### Apa yang kita capai hari ini?

- **01 Kirim Suhu ke Internet**: Upload firmware, angka suhu tampil di dashboard.
- **02 Kustom Dashboard**: Nama kelompok, judul, dan warna kalian sendiri.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik WiFi, Upload, edit di VS Code |
| **Pengecek** | Cek ejaan WiFi & nama |
| **Penjaga Alat** | Mengurus kabel, sensor & power bank |
| **Desainer** | Memimpin pilihan nama alat & warna |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Semua keputusan desain (nama alat, warna) diputuskan bersama, Operator hanya mengetik. Operator Topik 1 dan Topik 2 harus orang yang berbeda.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Sama seperti P10–P11. +2 untuk yang berani bertanya/menjawab, utamakan yang belum dapat. Poin challenge untuk setiap anggota kelompok yang ikut mengerjakan. Tidak ada PR.

---

### Perjalanan Data

```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```

- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk alat kalian.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: website cuaca hanya menampilkan data yang dikirim alat pengukur (stasiun cuaca) ke server. Website kita juga begitu: dashboard hanya menampilkan apa yang sudah sampai di server. Ingatkan kembali tebakan siswa tadi. Server = komputer yang selalu menyala di internet. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

---

### Folder Proyekmu

Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Isinya |
|---|---|
| `firmware/` | Program resmi ESP32 (**firmware**) |
| `index.html`, `style.css` | Website dashboard kalian |

**smp-XX = Device ID** = plat nomor alat kalian di internet.

> 🗣️ SPEAKER NOTES: Firmware = program resmi alat kita. Sama seperti program P10–P11, tinggal upload. Device ID sudah diisi tutor, tidak boleh diganti dan tidak boleh sama dengan kelompok lain (seperti plat nomor motor). File lain di folder: api.js (jangan diubah), icon.webp, README.md. Kalau folder belum ada: klik kanan smp-XX.zip → Extract All. Jangan pakai salinan umum dari Drive.

---

### Zona Hijau & Zona Merah

Buka `firmware/smp_room_monitor/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:

```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```

**Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> 🗣️ SPEAKER NOTES: Zona hijau itu seperti kolom isian formulir: isi di tempat yang disediakan saja. Zona merah berisi SERVER_URL dan API_KEY (alamat & kunci server); kalau diubah, data ditolak. Hanya ganti tulisan ISI_DI_SINI, tanda kutip " " jangan terhapus. Angka DHT_PIN 4 sama dengan rakitan P11.

---

### Praktek Bareng: Upload Firmware

1. Cek rakitan P11: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

```wiring
Judul: Rakitan standar proyek akhir SMP (sama dengan P11)
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
Sorot: D4 = angka 4 di "#define DHT_PIN 4"
```

> 🗣️ SPEAKER NOTES: Nama WiFi harus persis: huruf besar-kecil dan spasi dihitung. Pengecek membandingkan huruf demi huruf dengan papan. LED di D2 boleh dilepas. Kalau Serial Monitor kosong, tekan tombol EN (reset) di board supaya pesan WiFi terlihat dari awal.

---

### Membaca "Cerita" ESP32

```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```

- Titik-titik = sedang mencari WiFi.
- **200** = data **diterima** server, seperti centang dua di WhatsApp!

> 🗣️ SPEAKER NOTES: IP = alamat ESP32 di WiFi (seperti nomor rumah). Baris suhu, kirim data, dan 200 berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal { }, abaikan saja. Tulis Device ID di papan "Klub 200" begitu kelompok itu mendapat 200 pertama.

---

### Tips Engineer: Kalau Belum 200

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> 🗣️ SPEAKER NOTES: Gejala lain (urusan tutor): titik-titik tak berhenti padahal password benar → WiFi 5 GHz (ESP32 hanya bisa 2.4 GHz) → pindah ke hotspot 2.4 GHz; kode respons 401 → zona merah (API_KEY) berubah → extract ulang zip asli, isi WiFi lagi; tulisan acak ⸮⸮⸮ → pilih 115200 baud. Masih bingung WiFi atau sensor? Upload P12_1_TesWiFi.ino (tes WiFi saja), lalu upload lagi firmware proyek.

---

### Tanya Jawab (+2)

**Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kirim Suhu ke Internet. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: data dua alat tercampur di dashboard yang sama, seperti dua motor dengan plat nomor sama.

---

### Challenge 🟢 Easy — "Klub 200" (+5)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. Serial Monitor menulis `Kirim data -> kode respons: 200`.
2. Tunjukkan ke tutor.
3. Device ID kalian ditulis di papan **Klub 200**!

---

### Praktek Bareng: Buka Dashboard-mu

1. Cabut ESP32 dari laptop, colok ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah!

```wiring
Judul: Alat jalan sendiri dengan power bank
Komponen: ESP32 DevKit V1, modul DHT22 3-pin, power bank + kabel USB
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
- port USB ESP32 → power bank (kabel USB)
Sorot: tidak ada laptop ; ikon WiFi kecil menuju awan "Server" lalu ke layar dashboard
```

> 🗣️ SPEAKER NOTES: Firmware tetap tersimpan di ESP32, power bank hanya memberi listrik. Tidak ada power bank? Tetap colok ke laptop, dashboard tetap jalan. Sebelum ada data, dashboard menampilkan angka contoh (26°C, 60%). Angka itu berubah kalau server sudah menerima data dari Device ID kelompok itu. Angka tetap 26/60? Colok laptop, cek Serial Monitor harus 200. Rayakan angka pertama di layar (quick win).

---

### Challenge 🟡 Medium — "Data Pertamaku Online" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟡**

1. Alat menyala pakai **power bank** (tanpa laptop).
2. Dashboard menampilkan angka **alat kalian** (bukan 26°C / 60%).
3. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor!

---

### Peta Dashboard: Boleh & Jangan

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `api.js` | ❌ **Jangan** |

Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> 🗣️ SPEAKER NOTES: api.js = "kabel" dashboard ke server; saat website online selalu diganti versi asli tutor. Bagian <script> di bawah index.html juga jangan diubah (pengambil data sensor). icon.webp biarkan. Cara membuka di VS Code: klik kanan file → Open With Code, atau File → Open Folder → smp-XX. Foto kelompok dipasang minggu depan (P13).

---

### Kustom 1: Profil & Judul

Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:

```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```

- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> 🗣️ SPEAKER NOTES: Nama anggota sudah diisi tutor, minta Pengecek mengecek ejaannya. Peserta individu: tulis nama sendiri dan nama alat. Tips cari: Ctrl+F lalu ketik "PROFIL". Nama kelompok & judul harus sopan, karena website akan online.

---

### Kustom 2: Warna di :root

Buka `style.css`, paling atas:

```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```

- Klik **kotak warna kecil** di depan kode → pilih warna.
- Titik koma `;` jangan terhapus.

> 🗣️ SPEAKER NOTES: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS. Klik kotaknya → muncul pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah #. Ajak Desainer memilih 3 warna yang cocok dan tetap mudah dibaca dari belakang kelas.

---

### Tanya Jawab (+2)

**Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kustom Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: ya, selama ESP32 dapat listrik (power bank) dan WiFi. Program tersimpan di ESP32, dan website bisa dibuka dari perangkat lain.

---

### Challenge 🔴 Hard — "Dashboard Punya Kami" (+15)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root`.

Angka sensor harus **tetap muncul** setelah diubah!

---

### Peta Petualangan IoT

```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              (selesai)
[P12] Kirim suhu ke internet + dashboard kelompok     ← HARI INI
[P13] Foto, rumah alat & showcase
```

> 🗣️ SPEAKER NOTES: Firmware tetap tersimpan di ESP32. Minggu depan: foto kelompok dipasang di dashboard (difoto di kelas, tidak perlu membawa apa-apa), alat dapat "rumah" dari kardus yang disiapkan tutor, lalu showcase.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMP. Post-test dikerjakan sendiri-sendiri.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Sempurnakan Alat & Showcase Proyek Akhir**
