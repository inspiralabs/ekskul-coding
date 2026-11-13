# P13 SMP — Mengirim Data Suhu ke Dashboard

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Siswa SMP (12–15 tahun), awam teknologi: teks slide singkat, satu ide per slide, kalimat sehari-hari.

     KHUSUS P13 SMP (pertemuan penutup), berbeda dari pola deck biasanya:
     - Deck ini DITUNTUN: satu slide = satu langkah yang dikerjakan semua siswa bersama-sama. Jangan menggabung
       dua langkah dalam satu slide, dan jangan menambah slide.
     - TIDAK ADA slide Pertanyaan Pemantik, Cara Dapat Poin, Tanya Jawab terpisah, atau Challenge terpisah.
     - Slide 1 memakai alamat situs ekskul (bukan Linktree). QR code dibuat dari alamat itu.
     - Slide berjudul "Langkah X: ..." diberi label kecil "LANGKAH X DARI 5" di atas judul, dan nomor langkahnya besar.
     - Baris "Pos poin: ..." ditampilkan sebagai badge: Easy hijau, Medium kuning, Hard merah, dengan angka poinnya.
     - Slide "UJIAN AKHIR" memakai gaya slide Evaluasi Mandiri, tetapi judul dan isinya PERSIS seperti di file ini.
     - Baris "[RUANG GAMBAR: ...]" = sisakan kotak kosong besar bergaris putus-putus dengan tulisan itu di tengahnya.
       Kotak itu akan diisi tutor dengan foto asli. JANGAN diisi gambar buatan AI, ikon, atau ilustrasi. -->

---

### LINK & QR CODE
**Akses Materi dan Ujian Akhir**

Pindai QR code di samping dengan HP, atau buka alamat di bawah ini. Materi, ujian akhir, dan portofolio ada di sana.

**https://ekskulcoding.inspiralabs.id**

> 🗣️ SPEAKER NOTES: Buat QR code dari alamat situs di atas dan taruh di sisi kanan slide. Linktree tidak dipakai lagi. (1 menit)

---

### COVER

**P13 SMP**

# Mengirim Data Suhu ke Dashboard

Pertemuan terakhir: angka suhu dari alatmu tampil di internet.

> 🗣️ SPEAKER NOTES: Slide pembuka. Sampaikan bahwa ini pertemuan terakhir Ekskul Coding semester ini. (1 menit)

---

### Pertemuan Lalu: Sensor Sudah Membaca Suhu

[RUANG GAMBAR: foto rakitan ESP32 dan DHT22, serta tulisan suhu di Serial Monitor]

- Sensor **DHT22** sudah bisa mengukur suhu dan kelembapan.
- Angkanya baru terlihat di **laptop kita sendiri**.

**Pertanyaan pembuka:** bagaimana caranya supaya angka itu bisa dilihat dari HP siapa saja?

> 🗣️ SPEAKER NOTES: Tampung 2 sampai 3 jawaban tanpa dibenarkan dulu; jawabannya ada di slide berikut. Slide ini mengandaikan rakitan DHT22 dari pertemuan lalu masih terpasang. Kalau rakitan sudah dilepas, tuntun dulu tiga kabelnya SATU PER SATU, tunggu semua selesai sebelum kabel berikutnya: (1) kabel merah dari kaki "+" sensor ke pin 3V3, (2) kabel kuning dari kaki "out" ke pin D4, (3) kabel hitam dari kaki "−" ke pin GND. (1 menit, atau 8 menit kalau merakit ulang)

---

### Perjalanan Data Suhu

```
Sensor DHT22  →  ESP32  →  WiFi  →  Server  →  Dashboard
 (pengukur)     (kurir)   (jalan)   (gudang)    (papan)
```

- Sensor mengukur suhu, lalu memberi tahu ESP32.
- ESP32 membawa angkanya lewat WiFi, seperti kurir mengantar paket.
- Server menyimpan angkanya, seperti gudang.
- Dashboard menampilkan angka terbaru dari gudang, seperti papan pengumuman.

> 🗣️ SPEAKER NOTES: Tampilkan sebagai SATU diagram alur dengan lima kotak dan panah. Ceritakan pelan-pelan, satu kotak satu kalimat. Hindari kata "request", "HTTP", atau "protokol". ESP32 mengirim angka baru tiap 4 detik. (4 menit)

---

### Tugas Setiap Bagian

| Bagian | Tugasnya |
|---|---|
| **Sensor DHT22** | Mengukur suhu dan kelembapan |
| **ESP32** | Mengirim angkanya lewat WiFi |
| **Server** | Menyimpan angka yang dikirim |
| **Dashboard** | Menampilkan angka terbaru |

**Tanya Jawab (+2):** kalau WiFi mati, data berhenti di bagian mana?

> 🗣️ SPEAKER NOTES: Tampilkan sebagai empat kartu. Minta 2 sampai 3 siswa menjawab, +2 per siswa. Jawaban: berhenti di ESP32, karena kurirnya tidak punya jalan. Dashboard tetap menampilkan angka terakhir yang sudah tersimpan di server. (3 menit)

---

### Langkah 1: Mengisi Nama dan Password WiFi

```cpp
const char* WIFI_SSID     = "ISI_DI_SINI";   // nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // password WiFi
```

1. Buka folder kelompok `smp-XX` → `firmware` → `smp_room_monitor`.
2. Klik dua kali file `smp_room_monitor.ino`.
3. Ganti kedua tulisan `ISI_DI_SINI` dengan nama dan password WiFi di papan tulis.
4. Simpan dengan **Ctrl+S**.

Tanda kutip `" "` jangan sampai terhapus.

> 🗣️ SPEAKER NOTES: Tulis nama dan password WiFi besar-besar di papan tulis sebelum slide ini. Peragakan di proyektor, lalu berkeliling. Kesalahan paling sering: tanda kutip terhapus, atau huruf besar dan kecil tertukar. Baris lain di kode tidak perlu disentuh. Tunggu semua kelompok selesai sebelum lanjut. (6 menit)

---

### Langkah 2: Mengunggah Program ke ESP32

[RUANG GAMBAR: tangkapan layar Arduino IDE dengan tombol Upload (panah ke kanan) dilingkari]

1. Sambungkan ESP32 ke laptop dengan kabel USB.
2. Pastikan board **ESP32 Dev Module** dan **port** sudah terpilih.
3. Klik tombol **Upload** (panah ke kanan).
4. Tunggu sampai muncul tulisan `Done uploading`.

> 🗣️ SPEAKER NOTES: Unggahan pertama bisa memakan 2 sampai 5 menit; minta siswa menunggu dan tidak mengklik berulang-ulang. Port tidak muncul: ganti kabel USB (harus kabel data) atau pindah lubang USB. (6 menit)

---

### Langkah 3: Memeriksa Kode Respons 200

```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```

1. Buka **Serial Monitor** (ikon kaca pembesar di kanan atas).
2. Pilih angka **115200**.
3. Cari tulisan `kode respons: 200`.

**200** berarti datamu sudah diterima server, seperti centang dua di WhatsApp.

Pos poin: Easy +5, tunjukkan angka 200 ke Kak Tyo.

> 🗣️ SPEAKER NOTES: Kalau belum 200, cek berurutan. Titik-titik tidak berhenti: nama atau password WiFi salah (kembali ke Langkah 1). "Gagal baca sensor DHT22": kabel out tidak di D4, atau kabel + dan − tertukar. Kode respons -1: internet WiFi bermasalah. Titik-titik tidak berhenti padahal password benar: WiFi-nya 5 GHz, pindah ke hotspot 2,4 GHz. (6 menit)

---

### Langkah 4: Membuka Dashboard Kelompok

**https://smp-XX.inspiralabs.id**

1. Buka Chrome di laptop atau HP.
2. Ketik alamat di atas. Ganti **XX** dengan nomor kelompokmu, misalnya `smp-07`.
3. Lihat angka suhu dan kelembapan dari alatmu.

> 🗣️ SPEAKER NOTES: Nomor kelompok sama dengan nama folder kelompok (smp-01 sampai smp-13). Angka di dashboard harus sama dengan angka di Serial Monitor. Dashboard kosong padahal sudah 200: siswa membuka alamat kelompok lain. (6 menit)

---

### Langkah 5: Mencocokkan Angka di Dashboard

1. Taruh Serial Monitor dan dashboard berdampingan di layar.
2. Bandingkan angka **suhu** dan **kelembapan** di keduanya.
3. Tunggu beberapa detik. Angka di dashboard ikut berubah.

Angkanya sama dan terus diperbarui. Itu tandanya dashboard menampilkan data terbaru dari alatmu.

Pos poin: Medium +10, tunjukkan angka yang sama di Serial Monitor dan dashboard ke Kak Tyo.

> 🗣️ SPEAKER NOTES: ESP32 mengirim angka baru tiap 4 detik, jadi angka di dashboard berubah beberapa detik setelah Serial Monitor, tidak seketika. Kalau angkanya tidak pernah berubah: muat ulang halaman dashboard, lalu pastikan alamatnya alamat kelompok sendiri. (6 menit)

---

### Di Mana Peran Arduino IDE?

```
Arduino IDE  ──(sekali, saat Upload)──▶  ESP32

Sensor DHT22  →  ESP32  →  WiFi  →  Server  →  Dashboard
```

- **Arduino IDE** adalah tempat kita menulis perintah untuk ESP32.
- Perintah itu dikirim ke ESP32 saat kita menekan **Upload**.
- Setelah itu perintahnya tersimpan di dalam ESP32.
- Arduino IDE tidak ikut mengantar data ke dashboard.

> 🗣️ SPEAKER NOTES: Tampilkan diagram alur dari slide "Perjalanan Data Suhu", dengan Arduino IDE digambar DI LUAR jalur dan satu panah ke ESP32. Analogi: Arduino IDE seperti menulis surat tugas untuk kurir. Suratnya diberikan sekali, lalu kurir bekerja sendiri. Tanyakan: "Kalau begitu, apakah laptop masih dibutuhkan?" Jawabannya dibuktikan di slide berikut. (4 menit)

---

### Alat Tetap Bekerja Tanpa Laptop

[RUANG GAMBAR: foto ESP32 tersambung ke power bank, dengan dashboard terbuka di HP]

1. Lepaskan kabel USB dari laptop.
2. Sambungkan kabel USB itu ke **power bank**.
3. Tunggu sekitar 10 detik.
4. Buka dashboard di HP. Angkanya tetap berubah.

Pos poin: Hard +15, tunjukkan dashboard yang tetap berjalan ke Kak Tyo.

> 🗣️ SPEAKER NOTES: Ini bukti bahwa program tersimpan di ESP32 dan power bank hanya memberi listrik. Sebagian power bank mati sendiri kalau arus yang ditarik kecil; siapkan adaptor charger HP sebagai cadangan. Kalau power bank terbatas, lakukan bergiliran atau cukup satu kelompok di depan kelas. (4 menit)

---

### Mencoba Sendiri di Rumah

Yang perlu disiapkan:

- ☐ ESP32, sensor DHT22, dan tiga kabel
- ☐ Kabel USB yang bisa mengirim data, bukan kabel khusus mengecas
- ☐ Laptop dengan Arduino IDE, board ESP32, dan library DHT
- ☐ WiFi rumah atau hotspot HP dengan sinyal **2,4 GHz**
- ☐ Ganti nama dan password WiFi di kode, lalu **Upload** lagi

Tulisan `DEVICE_ID` jangan diganti, supaya datanya tetap masuk ke dashboard kelompokmu.

> 🗣️ SPEAKER NOTES: ESP32 tidak bisa tersambung ke WiFi 5 GHz. Panduan memasang Arduino IDE, board ESP32, dan library DHT ada pada tutor. Kalau alat tidak dibawa pulang, sebutkan komponen yang perlu dibeli sendiri. Pertanyaan yang mungkin muncul: "Kalau tidak pakai breadboard?" Bisa, kaki sensor disambung langsung ke pin ESP32 dengan kabel yang kedua ujungnya berlubang; breadboard hanya tempat mencolok supaya kabel tidak lepas. (4 menit, sisa 8 menit sebagai cadangan)

---

### Mengisi Form Evaluasi

**ekskulcoding.inspiralabs.id** → **Materi** → **SMP** → **Pertemuan 13** → **Kritik & Saran**

- Form ini tanpa nama, jadi jawab dengan jujur.
- Ada penilaian untuk materi, challenge, post-test, Kak Unggul, dan Kak Tyo.
- Sudah selesai? Tunjukkan layar **"Jawaban terkirim"** ke Kak Tyo.

> 🗣️ SPEAKER NOTES: Mulai 20 menit sebelum kelas berakhir. Form diisi dulu karena harus selesai di kelas; ujian masih bisa dikumpulkan sampai Senin. Kak Tyo mencentang daftar hadir untuk tiap siswa yang sudah menunjukkan layar terkirim. Sebelum kelas: pasang link form di sheet Materi kolom "Link Kritik & Saran" baris Pertemuan 13.

---

### UJIAN AKHIR
**10 Soal Pilihan Ganda**

**ekskulcoding.inspiralabs.id** → **Materi** → **SMP** → **Pertemuan 13**

- **01** Klik **Isi Post-Test** di Pertemuan 13.
- **02** Kerjakan **sendiri**. Boleh membuka catatan.
- **03** Belum selesai di kelas? Kumpulkan paling lambat **Senin, 16 November 2026 pukul 17.00**.

> 🗣️ SPEAKER NOTES: Ujian akhir menggantikan post-test P13. Soalnya rangkuman P3 sampai P12 ditambah materi hari ini, tidak ada hal baru. Sebelum kelas: pasang link Google Form ujian di sheet Materi kolom "Link Post-Test" baris Pertemuan 13.

---

### Terima kasih!

**TERIMA KASIH SUDAH BELAJAR BERSAMA SATU SEMESTER INI**

Buka menu **Portofolio** di situs untuk melihat halaman dan sertifikatmu. Masuk dengan ID Siswa dan kode dari tutor. Transkrip nilai terbit paling lambat **Jumat, 20 November 2026**.

> 🗣️ SPEAKER NOTES: Bagikan kertas kode portofolio sebelum slide ini. Sertifikat SMP sudah bisa dibuka hari ini; transkrip nilainya menyusul setelah nilai ujian direkap.
