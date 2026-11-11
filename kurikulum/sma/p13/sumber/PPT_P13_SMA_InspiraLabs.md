# P13 SMA — Perbaikan Alat + Ujian Akhir

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B, angka/string #8A6516;
     baris yang boleh diubah diberi latar #F3E6C4. Abaikan aturan "kode di card gelap".

     KHUSUS P13 (pertemuan penutup), berbeda dari pola deck biasanya:
     - TIDAK ADA slide Pertanyaan Pemantik, Cara Dapat Poin, Tanya Jawab, atau Challenge. Jangan ditambahkan.
     - Slide 1 memakai alamat situs ekskul (bukan Linktree). QR code dibuat dari alamat itu.
     - Slide "UJIAN AKHIR" memakai gaya slide Evaluasi Mandiri, tetapi judul dan isinya PERSIS seperti di file ini.
     - Baris "[RUANG GAMBAR: ...]" = sisakan kotak kosong besar bergaris putus-putus dengan tulisan itu di tengahnya.
       Kotak itu akan diisi tutor dengan gambar asli. JANGAN diisi gambar buatan AI, ikon, atau ilustrasi. -->

---

### LINK & QR CODE
**Akses Materi, Kode, & Ujian Akhir**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi alamat di bawah ini. Materi, kode terbaru, ujian akhir, dan portofolio ada di sana.

**https://ekskulcoding.inspiralabs.id**

> 🗣️ SPEAKER NOTES: Buat QR code dari alamat situs di atas dan taruh di sisi kanan slide. Linktree tidak dipakai lagi.

---

### COVER

**P13 SMA**

# Perbaikan Alat + Ujian Akhir

Pertemuan terakhir: alatnya kita rapikan, lalu semester ini kita tutup bersama.

> 🗣️ SPEAKER NOTES: Slide pembuka. Bacakan judul dan tagline, lalu langsung ke kilas balik.

---

### Kilas Balik: Datamu Sudah Sampai di Dashboard

[RUANG GAMBAR: screenshot dashboard kelompok yang menampilkan suhu dan kelembapan]

- **DHT22** membaca suhu dan kelembapan ruangan.
- **ESP32** mengirimnya lewat WiFi tiap 4 detik.
- Angkanya tampil di dashboard kelompok: `https://sma-0X.inspiralabs.id`.

> 🗣️ SPEAKER NOTES: Ini hasil P11. Tempel screenshot dashboard salah satu kelompok di kotak gambar. Tanyakan: siapa yang datanya sudah pernah tampil? Yang belum tidak apa-apa, hari ini dikejar bersama.

---

### Hari Ini Pertemuan Terakhir

- **01 Rangkaian diperbaiki**: ada kabel yang pindah pin.
- **02 Kode diperbarui**: salin kode terbaru dari situs.
- **03 Rakit & uji bareng**: sampai data tampil dan kipas menurut.
- **04 Ujian akhir & penutup**: 10 soal, lalu kita pamit.

> 🗣️ SPEAKER NOTES: Sampaikan bahwa ini pertemuan terakhir Ekskul Coding semester ini. Hari ini tidak ada materi baru: yang dikerjakan adalah perbaikan alat (rangkaian dan kode), lalu ujian akhir sebagai pengganti post-test.

---

### Rangkaian yang Baru

[RUANG GAMBAR: diagram rangkaian dari Fritzing]

Yang berubah dari P11:

| Kabel | Dulu | Sekarang |
|---|---|---|
| Relay **IN** | D14 | **RX2** (GPIO 16) |
| DHT22 **out** | D13 | tetap **D13** |

- Di board, pin GPIO 16 bertuliskan **RX2**.
- **Cabut USB dulu** sebelum memindahkan kabel.

> 🗣️ SPEAKER NOTES: Tempel diagram Fritzing di kotak gambar; diagram itu yang jadi pegangan siswa. Tabel hanya menyorot kabel yang pindah: hanya kabel IN relay, dari D14 ke RX2 (GPIO 16). Kenapa pindah dan kodenya diubah: modul relay 5V kadang tetap menyala walau diperintah mati dari pin ESP32 yang 3,3V, jadi kipas tidak mau berhenti. Kalau ada perubahan lain di rangkaian (misalnya jalur daya kipas), tambahkan barisnya di tabel.

---

### Ambil Kode yang Baru

1. Buka **ekskulcoding.inspiralabs.id/kode**
2. Pilih **kelompokmu**. Device ID langsung terisi di kodenya.
3. Tekan **Salin kode**.
4. Di Arduino IDE, buka `sma_room_monitor` → **Ctrl+A** (pilih semua) → **Ctrl+V** (tempel).
5. Isi nama dan password WiFi di `WIFI_SSID` dan `WIFI_PASSWORD`.

> 🗣️ SPEAKER NOTES: Kode lama punya kesalahan, jadi seluruh isinya ditimpa dengan yang baru, bukan ditambal. Peragakan di proyektor sekali. Mac: ⌘+A dan ⌘+V. Cek tiap kelompok: Device ID harus sesuai kelompoknya (sma-01 sampai sma-06), bukan milik kelompok lain.

---

### Bedah Kode: Bagian yang Kamu Isi
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // alamat dashboard kelompokmu
const char* WIFI_SSID     = "ISI_DI_SINI";  // nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // password WiFi

#define DHT_PIN 13     // kabel "out" DHT22
#define RELAY_PIN 16   // kabel "IN" relay (di board: RX2)
```
- `DEVICE_ID` menentukan data masuk ke dashboard siapa.
- Angka pin di kode **harus sama** dengan lubang tempat kabel dicolok.
- Baru: kipas **benar-benar mati** saat diperintah mati, dan WiFi yang putus **tersambung lagi sendiri**.
- Bagian **JANGAN UBAH** (alamat server) dibiarkan.

> 🗣️ SPEAKER NOTES: Buka kode di Arduino IDE dan tunjukkan bagian ini. Kaitkan dengan slide rangkaian: DHT_PIN 13 = kabel out di D13, RELAY_PIN 16 = kabel IN di RX2. Dua perbaikan lain cukup disebut, tidak perlu dibahas barisnya: fungsi setRelay() sekarang mematikan relay dengan mode INPUT, dan fungsi loop() memanggil WiFi.reconnect() kalau WiFi putus. Serial Monitor sekarang juga menulis "[Relay] Kipas NYALA" atau "[Relay] Kipas MATI".

---

### Rakit & Uji Bareng

1. **Cabut USB**, pindahkan kabel sesuai diagram.
2. Colok USB → pilih **board** dan **port** → **Upload**.
3. Buka **Serial Monitor** (115200). Tunggu tulisan `Kirim data -> kode respons: 200`.
4. Buka dashboard kelompok: suhu dan kelembapan **berubah**.
5. Tekan tombol kipas di dashboard (pakai PIN kelompok): kipas **menyala dan mati**.

Sudah sampai langkah 5? Panggil tutor untuk dicek.

> 🗣️ SPEAKER NOTES: Jangan disebut di slide: kelompok yang berhasil upload dan datanya tampil dapat +15. Kelompok yang belum selesai sampai waktu habis diberi tanya jawab oleh tutor seputar rangkaian dan proyeknya (cara mereka mencari kesalahan ikut dinilai). Keaktifan tetap +2. PJ mencatat nilainya. Siswa yang sendirian boleh digabung ke kelompok lain.

---

### Kalau Macet, Cek Berurutan

| Yang terlihat | Yang dicek |
|---|---|
| Port tidak muncul | Kabel USB (harus kabel data), pindah lubang USB |
| `Menghubungkan ke WiFi......` terus | Nama dan password WiFi di kode |
| `Gagal baca sensor DHT22` | Kabel **out** di **D13**, kabel + dan − tidak tertukar |
| Respons bukan `200` | Bagian JANGAN UBAH (alamat server) tidak boleh berubah |
| Respons `200` tapi dashboard kosong | Device ID harus milik kelompokmu |
| Kipas diam | Kabel **IN** di **RX2**, kipas di terminal **NO** dan **COM** |

> 🗣️ SPEAKER NOTES: Biarkan slide ini tampil selama siswa merakit. Minta mereka mengecek dari baris paling atas dulu sebelum memanggil tutor. Kipas tetap diam padahal kabel benar: lihat Serial Monitor, harus muncul "[Relay] Kipas NYALA" saat tombol ditekan; kalau muncul tapi kipas diam, cek daya kipas.

---

### UJIAN AKHIR
**10 Soal Pilihan Ganda**

**ekskulcoding.inspiralabs.id** → **Materi** → **Pertemuan 13**

- **01** Buka menu **Materi**, pilih **SMA**, lalu klik **Isi Post-Test** di Pertemuan 13.
- **02** Kerjakan **sendiri**. Boleh buka catatan.
- **03** Waktu di kelas **15 menit**. Belum selesai? Kumpulkan paling lambat **Senin, 16 November 2026 pukul 17.00**.

> 🗣️ SPEAKER NOTES: Ujian akhir menggantikan post-test P13. Soalnya rangkuman P2–P12, tidak ada materi baru. Sebelum kelas: pasang link Google Form ujian di sheet Materi kolom "Link Post-Test" baris Pertemuan 13.

---

### Perjalanan Kita Satu Semester
```
[P2–P5]   Tools coding, variabel, percabangan, perulangan & array        ✅
[P6–P8]   Halaman web: HTML, CSS, DOM & event                            ✅
[P9–P10]  Kenalan IoT: anatomi sistem, ESP32, Arduino IDE                ✅
[P11–P12] Rakit DHT22 + relay + kipas, kipas dikontrol dari dashboard    ✅
[P13]     Perbaikan alat + ujian akhir                                   ← HARI INI
```
- Dari baris kode pertama sampai alat yang datanya tampil di internet.

> 🗣️ SPEAKER NOTES: Minta 2–3 siswa menyebut satu hal yang dulu terasa susah dan sekarang bisa (+2).

---

### Sebelum Pulang

- **01 Portofolio & sertifikat**: buka menu **Portofolio** di situs, masuk dengan ID Siswa dan kode dari tutor. Sertifikatmu sudah bisa dibuka hari ini; transkrip nilai terbit paling lambat **Sabtu, 21 November 2026**.
- **02 Form evaluasi**: nilai materi, challenge, post-test, dan kakak pengajarmu. Tanpa nama. Linknya ada di **Materi** → **Pertemuan 13** → **Kritik & Saran**. Sudah selesai? Tunjukkan layar **"Jawaban terkirim"** ke Kak Haikal.

> 🗣️ SPEAKER NOTES: Bagikan kertas kode portofolio sebelum slide ini. Form evaluasi tidak menanyakan nama. Kak Haikal mencentang daftar hadir untuk tiap siswa yang sudah menunjukkan layar terkirim. Transkrip nilai menyusul setelah nilai ujian direkap. Sebelum kelas: pasang link form evaluasi di sheet Materi kolom "Link Kritik & Saran" baris Pertemuan 13.

---

### Terima kasih!

**TERIMA KASIH SUDAH BELAJAR BERSAMA SATU SEMESTER INI**

Website kelompok kalian tetap online di **`https://sma-0X.inspiralabs.id`**. Selama alatnya menyala, angkanya tetap hidup.
