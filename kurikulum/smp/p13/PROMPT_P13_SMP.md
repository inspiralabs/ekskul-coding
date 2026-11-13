PROMPT P13 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P13 SMP — Mengirim Data Suhu ke Dashboard

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
- Slide 1 "LINK & QR CODE": label kecil "LINK & QR CODE", judul "Akses Materi, Challenge, & Post Test", paragraf penjelasan, link besar PERSIS seperti yang tertulis di isi slide (Linktree atau alamat situs ekskul), QR code dari link itu di sisi kanan. Background maroon, lingkaran dekoratif semi-transparan.
- Slide 2 "COVER": cover pertemuan. Label kecil "P13 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
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
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P13 SMP | nomor slide" (slide Linktree tanpa nomor).
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

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P13 SMP — Mengirim Data Suhu ke Dashboard

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

# SMP — Pertemuan 13: Mengirim Data Suhu ke Dashboard

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 13 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menyelesaikan & mempresentasikan proyek akhir |
| Penilaian | Keaktifan Tanya Jawab & showcase (+2), Challenge (Easy +5, Medium +10, Hard +15), presentasi proyek akhir (rubrik di Khusus Tutor), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Potongan proyek akhir yang dibedah | Seluruh proyek: alat (ESP32 + DHT22 di D4, firmware `smp_room_monitor/smp_room_monitor.ino`) + website dari folder `smp-XX`. Hari ini `foto-kelompok.jpg` dipasang di **BAGIAN: PROFIL KELOMPOK**, alat dimasukkan ke **rumah alat** (kardus sederhana), dipamerkan, dan folder website **diserahkan** ke tutor untuk online di `https://<device-id>.inspiralabs.id`. |

## Alat & bahan (per kelompok/individu)

- Alat proyek akhir dari P12 (ESP32 + DHT22, firmware terpasang) + **power bank terisi** + kabel USB (alat tetap butuh listrik di dalam kotak)
- **Kardus kecil** untuk rumah alat (disiapkan tutor). **Bukan** kaleng/kotak logam.
- Double tape, selotip, spidol, kertas label, gunting (bahan bersama di meja tutor)
- Laptop dengan folder website `smp-XX` (sudah dikustom di P12) + HP/kamera laptop untuk foto kelompok
- Kelas: proyektor untuk menampilkan dashboard, 1 cutter (dipegang tutor), timer

## Persiapan tutor sebelum kelas

1. Pastikan backend online & semua Device ID (`smp-01` … `smp-13`) sudah pernah mengirim data (cek catatan P12).
2. Siapkan **13 kardus kecil** + 2–3 cadangan, hotspot cadangan 2.4 GHz.
3. Siapkan flashdisk / folder Drive untuk menerima zip `smp-XX.zip`.
4. Print **rubrik penilaian** (lihat Khusus Tutor).
5. Siapkan urutan showcase (undian). Ada 13 Device ID → **±1 menit per Device ID**.
6. Pegang cutter sendiri: siswa menandai lubang dengan spidol, tutor yang memotong. Tidak ada lem tembak.
7. Panduan lengkap: `kurikulum/smp/p13/Panduan_Pengajar_P13_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Nyalakan semua alat pakai power bank, cek dashboard, peran, poin |
| 5–8 | Pembuka materi | Cover + pemantik + agenda + perjalanan kita |
| 8–16 | Praktek | Foto kelompok → `foto-kelompok.jpg` |
| 16–30 | Praktek | Rumah alat + uji ulang |
| 30–32 | Tips + Tanya Jawab | Topik 1 |
| 32–35 | 🟢 Challenge Easy | Siap Tampil |
| 35–38 | 🔴 Challenge Hard | Uji Goyang (untuk yang sudah lulus Siap Tampil) |
| 38–41 | Materi | 3 kalimat sakti, serah folder |
| 41–42 | Tanya Jawab | Topik 2 |
| 42–47 | 🟡 Challenge Medium | Latihan 3 Kalimat |
| 47–60 | Showcase | ±1 menit per Device ID. Tutor mengumpulkan zip selama showcase. |
| 60–62 | Refleksi | 3–4 siswa berbagi |
| 62–70 | Post-test & penutup | 5 soal pilihan ganda (Google Form) + foto bersama |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Cara Dapat Poin → Hari Ini Kalian Jadi Engineer! → Kustom 3: Foto Kelompok → Rumah untuk Alat → Praktek: Masukkan ke Rumah Alat → Tips Engineer: Uji Ulang Setelah Dirapikan → 💬 Tanya Jawab → 🟢 Easy → 🔴 Hard → Format Presentasi: 3 Kalimat Sakti → Serahkan Folder Website → 💬 Tanya Jawab → 🟡 Medium → Showcase: Panggung Engineer! → Refleksi → Post-test (Linktree) → Penutup.

> Buffer: rumah alat paling sering molor. Kalau lewat menit 30, Challenge Hard dilewati dan zip dikumpulkan saat post-test. Rumah alat boleh sangat sederhana (kardus + 1 lubang sensor + 1 lubang USB + label). Kustom dashboard dari P12 yang belum selesai dikerjakan Operator sambil Perakit membuat rumah alat.

---

## Slide

### Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Fotografer** | Foto kelompok & kecilkan ukurannya |
| **Perakit** | Memasukkan alat ke rumahnya |
| **Desainer** | Menghias rumah alat & label |
| **Presenter** | Memimpin latihan presentasi |

- Saat showcase, **semua anggota** bicara minimal 1 kalimat. Kerja sendiri? Pegang semua peran.

### Cara Dapat Poin Hari Ini 🏅

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** & showcase | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

### Hari Ini Kalian Jadi Engineer! 👷

| Pertemuan | Yang sudah kalian kuasai |
|---|---|
| P9 | ESP32, breadboard, LED |
| P10 | Pasang Arduino IDE, upload Blink |
| P11 | Sensor DHT22, grafik suhu |
| P12 | Firmware, dashboard, warna |

- Agenda hari ini: **sempurnakan** → **pamerkan** → **serahkan**.

### Kustom 3: Foto Kelompok 📸
1. Foto bersama pakai HP atau kamera laptop.
2. Kecilkan: **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
3. Beri nama **persis**: `foto-kelompok.jpg`.
4. Simpan di folder `smp-XX`, sebelah `index.html` → refresh browser.

> Catatan tutor: Kesalahan paling sering: `Foto-Kelompok.JPG`, `foto kelompok.jpg` (spasi), `foto-kelompok.jpeg`, `foto-kelompok.jpg.jpg` (akhiran tersembunyi di Windows: nyalakan View → File name extensions), atau foto disimpan di Downloads. Kalau nama salah, kotak foto hilang. Siswa yang tidak mau wajahnya tampil boleh memotret alatnya.

### Rumah untuk Alat 📦
- Alat sungguhan (router, CCTV) selalu punya **casing**. Kardus kecil dari tutor sudah cukup!
- **DHT22** di dekat lubang, ±5 cm dari ESP32.
- Ada **lubang** untuk kabel USB.
- **Tidak** ada logam, aluminium foil, atau air di dalam.
- **Label**: nama alat + Device ID.

> Catatan tutor: Casing melindungi kabel dari lepas dan mencegah korsleting (listrik "ambil jalan pintas" lewat logam atau air). Sensor harus kena udara ruangan. ESP32 hangat saat WiFi aktif, jadi sensor yang terlalu dekat membaca suhu lebih tinggi.

### Praktek: Masukkan ke Rumah Alat 🔧
1. **Cabut USB**. Tandai lubang dengan spidol. **Tutor** yang memotong.
2. Tempel breadboard + ESP32 di dasar kotak (double tape).
3. DHT22 di dekat lubang, jauh dari ESP32.
4. Tempel label nama alat + Device ID.
5. Colok **power bank** → data masih masuk dashboard?

> Catatan tutor: Cutter hanya dipegang tutor; gunting boleh dipakai siswa. Tidak pakai lem tembak (panas) di dekat board. Kabel out tetap di **D4**.

### Tips Engineer: Uji Ulang Setelah Dirapikan 🔁

| Gejala | Coba ini |
|---|---|
| Dashboard tidak update | Buka kotak, colok laptop, baca Serial Monitor |
| `Gagal baca sensor` kadang-kadang | Kabel tertekan tutup: rapikan, tekan sampai mentok |
| Suhu naik 1–3°C | Jauhkan sensor dari ESP32 |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Gejala lain: ESP32 sering restart → kabel USB tertekuk di lubang sempit / power bank lemah → perlebar lubang, ganti power bank.

### Format Presentasi: 3 Kalimat Sakti 🎤
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling seru/susah adalah **___**, kami atasi dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

- Lalu **demo**: tiup sensor, semua lihat angkanya naik!

### Serahkan Folder Website 📮
- [ ] Halaman utama tetap `index.html`
- [ ] `foto-kelompok.jpg` **di dalam** folder, sudah dikecilkan
- [ ] `api.js` tidak diubah
- [ ] Total ukuran folder ≤ **5 MB** (tanpa video)
- [ ] Zip bernama Device ID: **`smp-07.zip`**

Setelah tutor upload: **`smp-07.inspiralabs.id`**. Bisa dibuka dari HP siapa saja!

> Catatan tutor: Zip: klik kanan folder `smp-XX` → Send to → Compressed (zipped) folder. Kumpulkan di flashdisk/folder Drive. Cek cepat ukuran & nama file sebelum siswa pulang.

### Showcase: Panggung Engineer! 🌟
- Urutan diundi. Tiap Device ID ±**1 menit**.
- 3 kalimat sakti → **demo tiup sensor** di layar.
- Penonton: tepuk tangan + 1 pertanyaan (**+2**).

### Refleksi ✨
- Apa yang paling seru selama ekskul IoT ini?
- Masalah apa yang paling bikin pusing? Bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**. Hari ini penanya saat showcase dan siswa yang berbagi di Refleksi juga mendapat **+2**.

- **Pemantik:** Alat kita sudah jalan di meja. Kenapa engineer sungguhan tetap menguji ulang setelah alatnya dimasukkan ke kotak?
- **Topik 1 — Sempurnakan Alat:** Kenapa sensor suhu tidak boleh berdempetan dengan ESP32 di dalam kotak tertutup?
- **Topik 2 — Showcase & Serah Folder:** Apa yang terjadi kalau foto kelompok disimpan di Downloads, bukan di dalam folder website?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Siap Tampil" (+5)
- [ ] Alat di dalam rumahnya, ada label Device ID
- [ ] Menyala pakai **power bank**
- [ ] Dashboard berubah saat sensor ditiup
- [ ] Kotak diangkat, tidak ada kabel lepas

### 🟡 Medium — "Latihan 3 Kalimat" (+10)
1. Isi 3 kalimat sakti di kertas.
2. Latihan presentasi ke kelompok sebelah.
3. Kelompok sebelah memberi **1 pertanyaan** tentang alat kalian.

### 🔴 Hard — "Uji Goyang" (+15) 📳
1. Tutup kotak, nyalakan dengan power bank.
2. Goyangkan **pelan** 10 detik (atau bawa keliling kelas).
3. Data di dashboard harus **tetap masuk**.
4. Gagal? Cari kabel yang goyang, perbaiki, ulangi. Sebutkan kabel mana yang jadi masalah.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Pasang foto kelompokmu, beri alatmu rumah, lalu pamerkan karyamu.
- **Pertanyaan pemantik:** Alat kita sudah jalan di meja. Kenapa engineer sungguhan tetap menguji ulang setelah alatnya dimasukkan ke kotak?
- **Konteks:** Banyak alat yang lulus uji di meja, lalu gagal setelah dirapikan atau dipindahkan.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di Topik 1 (slide *Tips Engineer: Uji Ulang Setelah Dirapikan*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #18 (Social Proof & Authority — Bukti & Otoritas)**

# "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam 5 pertemuan." 🚀

Isi slide:
- 🪜 **Roadmap 4 anak tangga** yang dipakai kelas kami:
  1. **Rakit dulu** → LED menyala tanpa kode (paling cepat terlihat hasilnya).
  2. **Pasang Arduino IDE & upload Blink** → instalasi dibuat seperti game 3 level.
  3. **Kenalan sensor** → tiup sensor, grafik kelembapan melonjak seperti gunung.
  4. **Tampilkan** → data di dashboard, website online pakai alamat sendiri.
- 🎮 Fokus ke **bermain dan merakit**, bukan menghafal kode. Programnya disiapkan, anak-anak jadi engineer-nya.
- 📦 Langkah terakhir yang sering dilupakan: **casing & uji ulang**.

🎙️ **Kalimat hook (pembuka rekaman):** "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan."

📌 **Teks di layar:**
- 5 pertemuan. Anak SMP.
- 1️⃣ Rakit dulu 💡
- 2️⃣ Pasang Arduino IDE & upload ⬆️
- 3️⃣ Tiup sensor, lihat grafiknya 📈
- 4️⃣ Website online 🌐

🎬 **Penutup:** "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs."

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan."
> - [4–10 detik] "Lima minggu lalu mereka belum pernah pegang mikrokontroler. Rahasianya: urutan belajarnya."
> - [10–20 detik] "Anak tangga satu: rakit dulu. Nyalakan lampu tanpa kode. Hasilnya langsung kelihatan, semangat langsung naik."
> - [20–30 detik] "Dua: pasang Arduino IDE, upload program jadi. Instalasinya dibikin kayak game tiga level, hadiahnya lampu kedip."
> - [30–40 detik] "Tiga: kenalan sensor. Tiup sensornya, grafik kelembapan melonjak kayak gunung. Di sini mereka mulai penasaran."
> - [40–50 detik] "Empat: tampilkan. Data muncul di website mereka sendiri, dengan alamat sendiri, bisa dibuka dari HP siapa aja."
> - [50–56 detik] "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs."

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #18 — Social Proof & Authority (Bukti & Otoritas) |
| Judul | Anak SMP bikin alat pemantau suhu + website online dalam 5 pertemuan |
| Durasi | ±56 detik |
| Pembicara | Tutor + cuplikan showcase siswa (pastikan izin wajah/sekolah) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Siswa meniup alat dalam kotak, angka di website naik di proyektor | "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan." | Dari NOL → alat IoT + website 🚀 |
| 4–10 | Montase cepat P9 → P13 (LED, instalasi, grafik, dashboard, kotak) | "Lima minggu lalu mereka belum pernah pegang mikrokontroler. Rahasianya: urutan belajarnya." | 5 pertemuan. Anak SMP. |
| 10–20 | LED menyala pertama kali | "Anak tangga satu: rakit dulu. Nyalakan lampu tanpa kode. Hasilnya langsung kelihatan, semangat langsung naik." | 1️⃣ Rakit dulu 💡 |
| 20–30 | Papan "Level 1–3 + BOS" dicentang, LED kedip bareng lampu biru | "Dua: pasang Arduino IDE, upload program jadi. Instalasinya dibikin kayak game tiga level, hadiahnya lampu kedip." | 2️⃣ Pasang Arduino IDE & upload ⬆️ |
| 30–40 | Siswa meniup sensor, Serial Plotter melonjak | "Tiga: kenalan sensor. Tiup sensornya, grafik kelembapan melonjak kayak gunung. Di sini mereka mulai penasaran." | 3️⃣ Tiup sensor, lihat grafiknya 📈 |
| 40–50 | HP membuka `smp-07.inspiralabs.id` dengan foto kelompok | "Empat: tampilkan. Data muncul di website mereka sendiri, dengan alamat sendiri, bisa dibuka dari HP siapa aja." | 4️⃣ Website online 🌐 |
| 50–56 | Foto bersama kelas memegang alat | "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs." | Follow @inspiralabs 👉 |

#### Caption

5 minggu lalu mereka belum pernah pegang ESP32. Hari ini alatnya kirim suhu ruangan ke internet, dan website-nya online pakai alamat sendiri 🌡️🌐

Roadmap 4 anak tangga yang kami pakai:
1️⃣ Rakit dulu (LED)
2️⃣ Pasang Arduino IDE & upload
3️⃣ Tiup sensor, lihat grafiknya
4️⃣ Tampilkan di website

Bangga sama kalian! 👏

#InspiraLabs #EkskulCoding #IoT #ESP32 #STEM #Elektronika #ProyekSiswa #SMP

#### Yang sengaja tidak dibocorkan
- Firmware proyek akhir, backend, dan isi dashboard.
- Detail rakitan, rubrik, dan challenge tiap pertemuan.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di dalam casing, sensor DHT22 sebaiknya diletakkan…**
A. Menempel di atas ESP32 supaya hemat tempat B. Di dekat lubang kotak, agak jauh dari ESP32 C. Dibungkus lakban supaya aman D. Di bawah breadboard

**2. Benda yang TIDAK boleh menempel langsung di bawah ESP32 adalah…**
A. Double tape B. Kardus C. Aluminium foil atau logam D. Kotak plastik

**3. Setelah alat dimasukkan ke casing, dashboard berhenti update. Langkah pertama yang tepat adalah…**
A. Menulis ulang firmware B. Membuka kotak, colok ke laptop, dan membaca Serial Monitor C. Mengganti warna dashboard D. Mengganti Device ID

**4. Urutan perjalanan data yang benar adalah…**
A. Dashboard → Server → ESP32 → DHT22
B. DHT22 → ESP32 → WiFi/Internet → Server → Dashboard
C. ESP32 → DHT22 → Dashboard → Server
D. Server → DHT22 → ESP32 → Dashboard

**5. Folder website yang diserahkan ke tutor sudah BENAR jika…**
A. Zip bernama `smp-07.zip`, berisi `index.html`, ukurannya tidak lebih dari 5 MB
B. Halaman utama bernama `rumah.html` dan foto ada di Downloads
C. Ukurannya 300 MB karena video rakitan ikut di dalamnya
D. `api.js` sudah diganti dengan Device ID kelompok lain

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge Hard
Penyebab yang paling sering ditemukan saat "Uji Goyang":
- Kabel jumper di pin ESP32 hanya menempel di ujung (pin header tidak masuk penuh).
- Kabel out DHT22 tertarik karena kabel terlalu pendek saat tutup ditutup.
- Breadboard bergeser karena tidak ditempel, sehingga kaki modul DHT22 terangkat.
- ESP32 restart karena kabel USB tertekuk di lubang yang terlalu sempit.

Lulus = data tetap masuk selama digoyang/dibawa keliling, tanpa `Gagal baca sensor`.

### Rubrik penilaian showcase (skor 1–4)
| Aspek | 1 | 4 |
|---|---|---|
| Alat berfungsi | Tidak menyala | Jalan dengan power bank, data tampil & berubah saat sensor ditiup |
| Rumah alat | Kabel berantakan, tanpa rumah | Rumah rapi, sensor dekat lubang, label lengkap, lolos uji goyang |
| Pemahaman | Tidak bisa menjelaskan rakitan | Bisa menunjuk 3V3/GND/D4 dan menjelaskan 1 masalah yang pernah diperbaiki |
| Presentasi | Tidak menyampaikan 3 kalimat | 3 kalimat lengkap + menjawab pertanyaan |
| Website | Belum dikustom / aturan dilanggar | Profil, warna, foto lengkap, zip sesuai aturan |
| Kerja sama | 1 orang mengerjakan semua | Semua anggota berperan & bicara (peserta individu: nilai kemandirian) |

### Kunci Post-Test
1. B 2. C 3. B 4. B 5. A

### Pembahasan singkat
- No. 1: ESP32 menghasilkan panas saat WiFi aktif; sensor yang terlalu dekat membaca suhu lebih tinggi dari suhu ruangan.
- No. 3: baca gejala dulu (Serial Monitor), baru cek kabel, seperti tips di P11–P12.
- No. 5: aturan serah folder; video/foto asli HP bisa ratusan MB dan membuat website lambat.

---------- SELESAI ISI MATERI AJAR ----------
