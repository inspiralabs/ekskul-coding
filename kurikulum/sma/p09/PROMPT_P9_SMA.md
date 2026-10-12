PROMPT P9 SMA — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/15uP4gF23AchbNzAjkRrJekrTt18mdH4W → subfolder SMA (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P9 SMA — Anatomi Sistem IoT — ESP32, Sensor, dan Relay

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
- Slide 2 "COVER": cover pertemuan. Label kecil "P9 SMA", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi Live Coding": label kecil "forum Diskusi Live Coding", pertanyaan besar di tengah, layout lega.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge "+10", instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P9 SMA | nomor slide" (slide Linktree tanpa nomor).
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

# P9 SMA — Anatomi Sistem IoT — ESP32, Sensor, dan Relay

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P9 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P9 SMA**

# Anatomi Sistem IoT — ESP32, Sensor, dan Relay

Membedah anatomi sistem IoT: otak, indra, dan tangan sebuah alat pintar.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Bagaimana kipas atau AC pintar tahu ruangan sedang panas, lalu menyala sendiri tanpa disentuh?

Setiap alat pintar punya "indra", "otak", dan "tangan". Hari ini kita membedah ketiganya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Arsitektur IoT, Pinout & DHT22**: Peran tiap komponen, memilih pin aman, sensor DHT22.
- **02 Relay & Active-LOW**: Saklar listrik untuk beban, COM/NO/NC, logika active-LOW.

---

### Dari Web ke Dunia Fisik
- P1–P8: kalian bikin **dashboard** (HTML, CSS, JS, DOM).
- P9–P13: kalian **merakit perangkat** yang mengisi dashboard dengan data asli, **dan bisa dikontrol balik**.
- Fokus kita = **perakitan hardware**. Program ESP32 dan dashboard sudah disiapkan **jadi** oleh tutor: kalian cukup isi nama & password WiFi lalu upload.
- Target akhir: *Smart Room Monitor*: monitoring suhu + kontrol kipas **dua arah**, tayang di `sma-0X.inspiralabs.id`.

---

### Arsitektur Sistem IoT
```
[Sensor DHT22] → [ESP32] ⇄ WiFi ⇄ [Backend/Server] ⇄ [Dashboard Web]
                    ↓
               [Relay] → [Kipas]
```
- **Sensor** = input dunia fisik. **Aktuator** (relay → kipas) = output dunia fisik.
- **ESP32** = mikrokontroler: CPU dual-core 240 MHz, WiFi + Bluetooth, ±30 GPIO.
- Pola industri: *edge device* (ESP32) ↔ *cloud* (backend) ↔ *client* (dashboard).

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: sensor DHT22 = indra (merasakan panas), ESP32 = otak (memutuskan), relay + kipas = tangan (bertindak). Bandingkan dengan tebakan siswa tadi.

---

### Pinout ESP32: Tidak Semua Pin Sama
| Kelompok pin | Contoh | Catatan |
|---|---|---|
| **Daya** | 3V3, VIN (5V dari USB), GND | 3V3 untuk sensor; VIN untuk modul 5V |
| **GPIO aman** | 4, 13, 16–19, 21–23, 25–27, 32, 33 | Pilihan utama input/output |
| **Input-only** | 34, 35, 36 (VP), 39 (VN) | **Tidak bisa** jadi OUTPUT |
| **Strapping pin** | 0, 2, 5, 12, 15 | Dibaca ESP32 saat **booting**, bisa bikin gagal boot / glitch |
| **Jangan dipakai** | 6–11 | Terhubung ke flash internal |

```wiring
Judul: Peta pin ESP32 DevKit V1 30-pin
Komponen: ESP32 DevKit V1 saja (tanpa kabel), gambar besar
Koneksi: (tidak ada kabel) — warnai label pin per kelompok:
- Daya: 3V3, VIN (merah), GND (hitam)
- GPIO aman (hijau): D4, D13, D16 (RX2), D17 (TX2), D18, D19, D21, D22, D23, D25, D26, D27, D32, D33
- Input-only (biru): D34, D35, VP (36), VN (39)
- Strapping pin (kuning): D2, D5, D12, D15 (+ GPIO0 = tombol BOOT)
- Hindari (abu-abu): TX0, RX0 (dipakai USB/Serial)
Sorot: legenda warna di samping board ; catatan kecil "GPIO 6–11 = flash, tidak keluar di board 30-pin"
```

> 🗣️ SPEAKER NOTES: Logika GPIO ESP32 = **3,3V**, bukan 5V. Memberi 5V langsung ke GPIO bisa merusak chip.

---

### Kuis Kilat: Relay Dipasang di Pin Mana?
Proyek akhir butuh **1 pin** untuk mengendalikan relay kipas. Pakai tabel slide *Pinout ESP32: Tidak Semua Pin Sama*, pilih yang **paling aman**!

| | Pin |
|---|---|
| A | GPIO 34 |
| B | GPIO 5 |
| C | GPIO 18 |
| D | GPIO 7 |

> 🗣️ SPEAKER NOTES: Minta tiap kelompok menjawab serentak (angkat jari 1–4 / kartu A–D), baru dibahas satu per satu:
> - **A. GPIO 34** input-only, relay tidak akan pernah bergerak.
> - **B. GPIO 5** strapping pin: saat booting pin ini sempat mengeluarkan sinyal sebelum kode jalan → relay bisa **"klik" sendiri** dan kipas menyala sesaat. Di perangkat nyata (pompa, pintu, pemanas) ini **berbahaya**.
> - **C. GPIO 18** GPIO aman.
> - **D. GPIO 7** terhubung ke flash internal → ESP32 crash.
>
> Tutup dengan: "Nanti di proyek akhir kalian akan lihat `#define RELAY_PIN 18`. Sekarang kalian tahu alasannya."

---

### DHT22: Sensor Digital 1-Wire
- Mengukur **suhu** (−40 s/d 80°C, ±0,5°C) dan **kelembapan** (0–100%, ±2–5%).
- Komunikasi lewat **1 kabel data** dengan protokol timing khusus → butuh **library**.
- Sampling rate maksimal **0,5 Hz** (1 bacaan / 2 detik).
- Modul 3-pin sudah ada **resistor pull-up** bawaan.
- Wiring: **+ → 3V3**, **out → GPIO 4**, **− → GND**.

```wiring
Judul: Rangkaian sensor DHT22
Komponen: ESP32 DevKit V1, modul DHT22 3-pin
Koneksi:
- ESP32 3V3 → DHT22 "+" (kabel merah)
- ESP32 D4 → DHT22 "out" (kabel kuning)
- ESP32 GND → DHT22 "−" (kabel hitam)
Sorot: pin D4 = DHT_PIN 4 di kode
```

---

### Tips Engineer: Memilih Pin ESP32 yang Aman

- **GPIO 6–11** terhubung ke memori flash. Dipakai untuk hal lain = ESP32 crash.
- **Strapping pin 0, 2, 5, 12, 15** dibaca saat booting. Relay di pin ini bisa **menyala sendiri saat boot**, atau ESP32 **gagal upload** (GPIO 12 HIGH saat boot = tegangan flash salah).
- **GPIO 34–39** hanya **input**, tidak bisa menyalakan apa pun.
- **Pin aman** untuk pemula: **4, 13, 16–19, 21–23, 25–27, 32, 33**.
- Di industri, pemilihan pin diputuskan di tahap **desain**. Salah pin di PCB = cetak ulang PCB = rugi waktu dan biaya.

> 🗣️ SPEAKER NOTES: Rangkuman pemilihan pin sebelum challenge. Kaitkan dengan kuis pin relay tadi.

---

### Forum Diskusi Live Coding

**Kenapa ESP32 dan dashboard tidak saling bicara langsung, tapi lewat backend?**

> 🗣️ SPEAKER NOTES: Topik 1 — Arsitektur IoT, Pinout & DHT22. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Rakit Input & Output Dasar" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. LED + resistor dari **3V3** → GND, harus menyala.
2. Rakit DHT22: + → 3V3, out → **GPIO 4**, − → GND (belum dibaca, cek LED power modul menyala kalau ada).

```wiring
Judul: Rakit LED dari 3V3 + DHT22
Komponen: ESP32 DevKit V1, breadboard, 1 LED merah, 1 resistor 220Ω, modul DHT22 3-pin
Koneksi:
- ESP32 3V3 → jalur + breadboard (kabel merah)
- jalur + → resistor 220Ω → kaki PANJANG LED
- kaki pendek LED → jalur − breadboard (kabel hitam)
- jalur − → ESP32 GND (kabel hitam)
- jalur + → DHT22 "+" (kabel merah)
- ESP32 D4 → DHT22 "out" (kabel kuning)
- jalur − → DHT22 "−" (kabel hitam)
Sorot: DHT22 "out" ke D4
```

---

### Relay: Saklar yang Dikendalikan Listrik
- ESP32 tidak sanggup menyalakan kipas/lampu besar langsung (arus GPIO kecil, ±12 mA aman).
- **Relay** = saklar mekanis. Sinyal kecil dari ESP32 → kumparan → kontak besar menutup.
- Sisi kontrol: **VCC** (→ VIN 5V), **GND**, **IN** (→ GPIO).
- Sisi beban:
  - **COM** = common (titik tengah)
  - **NO** = *Normally Open*, tersambung ke COM **hanya saat relay aktif**
  - **NC** = *Normally Closed*, tersambung ke COM **saat relay tidak aktif**
- **Keselamatan:** relay ini sanggup 220V, tapi di ekskul **HANYA kipas DC 5V** dari VIN. **Dilarang** menyambung listrik PLN/stopkontak.

---

### Rangkaian Beban via Relay
```
VIN (5V) ──► COM  [relay]  NO ──► (+) Kipas (−) ──► GND
```
- Kipas hanya menyala saat relay **aktif** (COM–NO tersambung).
- Pakai **NO** supaya kalau ESP32 mati/restart, kipas ikut **mati** (*fail-safe*).

```wiring
Judul: Kipas dikendalikan relay (IN masih kabel bebas untuk eksperimen)
Komponen: ESP32 DevKit V1, breadboard, modul relay 1-channel 5V, kipas mini 5V
Koneksi:
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
- relay IN → kabel jumper biru dengan UJUNG BEBAS (belum dicolok, beri label "colok manual ke GND / 3V3")
Sorot: terminal NO dipakai (bukan NC) ; label "relay aktif → COM–NO tersambung → kipas menyala"
```

---

### Active-LOW vs Active-HIGH
| Tipe | Aktif saat IN = | Contoh |
|---|---|---|
| Active-HIGH | HIGH (3,3V) | LED biasa |
| **Active-LOW** | **LOW (0V / GND)** | Kebanyakan modul relay murah |
- Program jadi proyek akhir sudah menulisnya untuk kalian:
  ```cpp
  digitalWrite(RELAY_PIN, LOW); // relay ON
  digitalWrite(RELAY_PIN, HIGH); // relay OFF
  ```
- Hari ini kalian **membuktikannya sendiri tanpa kode** (Challenge Medium).

---

### Forum Diskusi Live Coding

**Kenapa beban dipasang di NO, bukan NC? Apa yang terjadi kalau ESP32 tiba-tiba mati?**

> 🗣️ SPEAKER NOTES: Topik 2 — Relay & Active-LOW. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Temukan Sendiri Active-LOW" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Rakit relay: VCC → **VIN**, GND → **GND**. **IN belum dicolok.**
2. Rakit beban (kipas atau LED) lewat **COM–NO** (slide *Rangkaian Beban via Relay*).
3. Eksperimen, catat hasilnya di tabel:

| Kabel IN dicolok ke… | Relay klik? | Beban menyala? |
|---|---|---|
| Tidak dicolok | | |
| **GND** | | |
| **3V3** | | |

4. Simpulkan: modul relay kalian **active-LOW** atau **active-HIGH**?
5. Pindahkan beban dari **NO** ke **NC**, ulangi. Apa yang berubah?

---

### Challenge 🔴 Hard — "Arsitek Proyek" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

Gambar **diagram pengkabelan lengkap** proyek akhir (DHT22 + relay + kipas + ESP32), di kertas atau di **wokwi.com**. Untuk setiap pin yang dipakai, tulis **alasan** memilihnya. Jawab juga:
- Kenapa DHT22 tidak boleh di GPIO 34 untuk OUTPUT? (jebakan: DHT22 itu input atau output?)
- Kenapa relay tidak di GPIO 2/5/12/15?
- Kenapa beban di NO, bukan NC?

---

### Peta Proyek Akhir
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)      ← HARI INI
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi
[P11] Upload firmware proyek, data suhu tampil di dashboard
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```

---

### Tugas 3 (dikumpulkan P10)

Dokumen 1 halaman berisi:
1. **Foto rangkaian** kelompok (DHT22 + relay + beban).
2. **Tabel pin**: komponen → pin ESP32 → alasan.
3. **Rencana proyek akhir**: kipas menyala otomatis pada suhu berapa? Kenapa angka itu?
4. Hasil eksperimen active-LOW (tabel Challenge Medium).

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 9" di Linktree sudah mengarah ke Google Form P9 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P10!**

MINGGU DEPAN (P10): **Merakit Smart Room Monitor: DHT22, Relay & Kipas**

Bawa rangkaian & catatan Tugas 3 kalian. Minggu depan kita upload program tes pertama!

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P9 SMA — Anatomi Sistem IoT — ESP32, Sensor, dan Relay

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

# SMA — Pertemuan 9: Anatomi Sistem IoT — ESP32, Sensor, dan Relay

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 10 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mengenal komponen dasar elektronika & ESP32 (tanpa coding dulu) |
| Penilaian | Tugas 3: dokumentasi rangkaian & rencana proyek akhir |
| Potongan proyek akhir yang dibedah | Blok identitas pin di `sma/firmware/sma_room_monitor.ino`: `#define DHT_PIN 4` dan `#define RELAY_PIN 18`, plus `#define RELAY_ACTIVE_LOW true` (relay **active-LOW**). Hari ini siswa paham **kenapa** angka-angka itu dipilih. |

## Alat & bahan (per kelompok)

- ESP32 DevKit V1 30-pin + kabel USB data
- Breadboard + kabel jumper (male-male & male-female)
- 1 LED + resistor 220Ω
- Modul DHT22 3-pin (+, out, −)
- Modul relay 1-channel 5V (active-LOW), terminal COM / NO / NC
- Beban: **kipas mini DC 5V** atau LED + resistor (**bukan** perangkat listrik PLN 220V)
- Obeng kecil (terminal relay)
- Multimeter (1 per kelas cukup, untuk demo tutor)

## Persiapan tutor sebelum kelas

1. Tayangkan **pinout ESP32 DevKit V1** resolusi tinggi.
2. Uji 1 modul relay: pastikan relay **benar-benar mati** saat IN diberi 3,3V (lihat catatan "masalah relay 5V + logika 3,3V" di Khusus Tutor).
3. Siapkan template **Tugas 3** (dokumen diagram + rencana) di Google Docs/kertas.
4. Ingatkan: **tidak ada upload kode hari ini**. ESP32 hanya sebagai sumber listrik 3V3/VIN.
5. Tegaskan aturan keselamatan sejak hari pertama: **hanya kipas DC 5V**, tidak ada kabel PLN/stopkontak di meja praktik. Cabut USB sebelum memindah kabel.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo proyek akhir: suhu tampil + kipas dikontrol dari dashboard |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–20 | Materi | Slide 1–4: arsitektur IoT, pinout, kuis pin relay |
| 20–27 | Materi | Slide 5: DHT22 |
| 27–35 | 🟢 Challenge Easy | Rakit Input & Output Dasar |
| 35–45 | Materi | Slide 6–8: relay, rangkaian beban, active-LOW |
| 45–53 | 🟡 Challenge Medium | Temukan Sendiri Active-LOW |
| 53–58 | 🔴 Challenge Hard | Arsitek Proyek (dilanjutkan jadi Tugas 3) |
| 58–60 | Peta proyek + Tugas 3 | Slide 9 + brief tugas |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Dari Web ke Dunia Fisik → Arsitektur Sistem IoT → Pinout ESP32: Tidak Semua Pin Sama → Kuis Kilat: Relay Dipasang di Pin Mana? → DHT22: Sensor Digital 1-Wire → Tips Engineer: Memilih Pin ESP32 yang Aman → 💬 Forum Diskusi → 🟢 Easy → Relay: Saklar yang Dikendalikan Listrik → Rangkaian Beban via Relay → Active-LOW vs Active-HIGH → 💬 Forum Diskusi → 🟡 Medium → 🔴 Hard → Peta Proyek Akhir → Tugas 3 (dikumpulkan P10) → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Dari Web ke Dunia Fisik 🌐➡️🔌
- P1–P8: kalian bikin **dashboard** (HTML, CSS, JS, DOM).
- P9–P13: kalian **merakit perangkat** yang mengisi dashboard dengan data asli, **dan bisa dikontrol balik**.
- Fokus kita = **perakitan hardware**. Program ESP32 dan dashboard sudah disiapkan **jadi** oleh tutor: kalian cukup isi nama & password WiFi lalu upload.
- Target akhir: *Smart Room Monitor*: monitoring suhu + kontrol kipas **dua arah**, tayang di `sma-0X.inspiralabs.id`.

### Slide 2 — Arsitektur Sistem IoT 🏗️
```
[Sensor DHT22] → [ESP32] ⇄ WiFi ⇄ [Backend/Server] ⇄ [Dashboard Web]
                    ↓
               [Relay] → [Kipas]
```
- **Sensor** = input dunia fisik. **Aktuator** (relay → kipas) = output dunia fisik.
- **ESP32** = mikrokontroler: CPU dual-core 240 MHz, WiFi + Bluetooth, ±30 GPIO.
- Pola industri: *edge device* (ESP32) ↔ *cloud* (backend) ↔ *client* (dashboard).

### Slide 3 — Pinout ESP32: Tidak Semua Pin Sama ⚠️
| Kelompok pin | Contoh | Catatan |
|---|---|---|
| **Daya** | 3V3, VIN (5V dari USB), GND | 3V3 untuk sensor; VIN untuk modul 5V |
| **GPIO aman** | 4, 13, 16–19, 21–23, 25–27, 32, 33 | Pilihan utama input/output |
| **Input-only** | 34, 35, 36 (VP), 39 (VN) | **Tidak bisa** jadi OUTPUT |
| **Strapping pin** | 0, 2, 5, 12, 15 | Dibaca ESP32 saat **booting**, bisa bikin gagal boot / glitch |
| **Jangan dipakai** | 6–11 | Terhubung ke flash internal |

> Catatan tutor: Logika GPIO ESP32 = **3,3V**, bukan 5V. Memberi 5V langsung ke GPIO bisa merusak chip.

### Slide 4 — Kuis Kilat: Relay Dipasang di Pin Mana? 🗳️
Proyek akhir butuh **1 pin** untuk mengendalikan relay kipas. Pakai tabel Slide 3, pilih yang **paling aman**!

| | Pin |
|---|---|
| A | GPIO 34 |
| B | GPIO 5 |
| C | GPIO 18 |
| D | GPIO 7 |

> Catatan tutor: Minta tiap kelompok menjawab serentak (angkat jari 1–4 / kartu A–D), baru dibahas satu per satu:
> - **A. GPIO 34** ❌ input-only, relay tidak akan pernah bergerak.
> - **B. GPIO 5** ❌ strapping pin: saat booting pin ini sempat mengeluarkan sinyal sebelum kode jalan → relay bisa **"klik" sendiri** dan kipas menyala sesaat. Di perangkat nyata (pompa, pintu, pemanas) ini **berbahaya**.
> - **C. GPIO 18** ✅ GPIO aman.
> - **D. GPIO 7** ❌ terhubung ke flash internal → ESP32 crash.
>
> Tutup dengan: "Nanti di proyek akhir kalian akan lihat `#define RELAY_PIN 18`. Sekarang kalian tahu alasannya."

### Slide 5 — DHT22: Sensor Digital 1-Wire 🌡️
- Mengukur **suhu** (−40 s/d 80°C, ±0,5°C) dan **kelembapan** (0–100%, ±2–5%).
- Komunikasi lewat **1 kabel data** dengan protokol timing khusus → butuh **library**.
- Sampling rate maksimal **0,5 Hz** (1 bacaan / 2 detik).
- Modul 3-pin sudah ada **resistor pull-up** bawaan.
- Wiring: **+ → 3V3**, **out → GPIO 4**, **− → GND**.

### Slide 6 — Relay: Saklar yang Dikendalikan Listrik 🔀
- ESP32 tidak sanggup menyalakan kipas/lampu besar langsung (arus GPIO kecil, ±12 mA aman).
- **Relay** = saklar mekanis. Sinyal kecil dari ESP32 → kumparan → kontak besar menutup.
- Sisi kontrol: **VCC** (→ VIN 5V), **GND**, **IN** (→ GPIO).
- Sisi beban:
  - **COM** = common (titik tengah)
  - **NO** = *Normally Open*, tersambung ke COM **hanya saat relay aktif**
  - **NC** = *Normally Closed*, tersambung ke COM **saat relay tidak aktif**
- **Keselamatan:** relay ini sanggup 220V, tapi di ekskul **HANYA kipas DC 5V** dari VIN. **Dilarang** menyambung listrik PLN/stopkontak.

### Slide 7 — Rangkaian Beban via Relay ⚡
```
VIN (5V) ──► COM  [relay]  NO ──► (+) Kipas (−) ──► GND
```
- Kipas hanya menyala saat relay **aktif** (COM–NO tersambung).
- Pakai **NO** supaya kalau ESP32 mati/restart, kipas ikut **mati** (*fail-safe*).

### Slide 8 — Active-LOW vs Active-HIGH 🔄
| Tipe | Aktif saat IN = | Contoh |
|---|---|---|
| Active-HIGH | HIGH (3,3V) | LED biasa |
| **Active-LOW** | **LOW (0V / GND)** | Kebanyakan modul relay murah |
- Program jadi proyek akhir sudah menulisnya untuk kalian:
  ```cpp
  digitalWrite(RELAY_PIN, LOW);   // relay ON
  digitalWrite(RELAY_PIN, HIGH);  // relay OFF
  ```
- Hari ini kalian **membuktikannya sendiri tanpa kode** (Challenge Medium).

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)      ← HARI INI
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi
[P11] Upload firmware proyek, data suhu tampil di dashboard
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Arsitektur IoT, Pinout & DHT22:** Kenapa ESP32 dan dashboard tidak saling bicara langsung, tapi lewat backend?
- **Topik 2 — Relay & Active-LOW:** Kenapa beban dipasang di NO, bukan NC? Apa yang terjadi kalau ESP32 tiba-tiba mati?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Rakit Input & Output Dasar"
1. LED + resistor dari **3V3** → GND, harus menyala.
2. Rakit DHT22: + → 3V3, out → **GPIO 4**, − → GND (belum dibaca, cek LED power modul menyala kalau ada).

### 🟡 Medium — "Temukan Sendiri Active-LOW" 🔍
1. Rakit relay: VCC → **VIN**, GND → **GND**. **IN belum dicolok.**
2. Rakit beban (kipas atau LED) lewat **COM–NO** (Slide 7).
3. Eksperimen, catat hasilnya di tabel:

| Kabel IN dicolok ke… | Relay klik? | Beban menyala? |
|---|---|---|
| Tidak dicolok | | |
| **GND** | | |
| **3V3** | | |

4. Simpulkan: modul relay kalian **active-LOW** atau **active-HIGH**?
5. Pindahkan beban dari **NO** ke **NC**, ulangi. Apa yang berubah?

### 🔴 Hard — "Arsitek Proyek" 📐
Gambar **diagram pengkabelan lengkap** proyek akhir (DHT22 + relay + kipas + ESP32), di kertas atau di **wokwi.com**. Untuk setiap pin yang dipakai, tulis **alasan** memilihnya. Jawab juga:
- Kenapa DHT22 tidak boleh di GPIO 34 untuk OUTPUT? (jebakan: DHT22 itu input atau output?)
- Kenapa relay tidak di GPIO 2/5/12/15?
- Kenapa beban di NO, bukan NC?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Membedah anatomi sistem IoT: otak, indra, dan tangan sebuah alat pintar.
- **Pertanyaan pemantik:** Bagaimana kipas atau AC pintar tahu ruangan sedang panas, lalu menyala sendiri tanpa disentuh?
- **Konteks:** Setiap alat pintar punya "indra", "otak", dan "tangan". Hari ini kita membedah ketiganya.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Arsitektur Sistem IoT*: sensor = indra, ESP32 = otak, relay + kipas = tangan).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #3 (Negative Hooks — Psikologi Terbalik)**

# "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis." ⚠️

Isi slide:
- 🚫 **GPIO 6–11** → terhubung ke flash. Dipakai = ESP32 crash.
- 🥾 **Strapping pin 0, 2, 5, 12, 15** → dibaca saat booting. Relay/beban di sini bisa **nyala sendiri saat boot** atau ESP32 **gagal upload**. (GPIO12 HIGH saat boot = tegangan flash salah!)
- 👂 **GPIO 34–39** → **input-only**, tidak bisa menyalakan apa pun.
- ✅ **Pin aman** untuk pemula: **4, 13, 16–19, 21–23, 25–27, 32, 33**.
- 🏭 Di industri, pemilihan pin ditentukan di tahap **desain**, bukan saat coding. Salah pin di PCB = cetak ulang PCB = rugi waktu & uang.

🎙️ **Kalimat hook (pembuka rekaman):** "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis."

📌 **Teks di layar:**
- ❌ GPIO 6–11 = flash
- ⚠️ 0, 2, 5, 12, 15 = strapping
- 👂 34–39 = INPUT ONLY
- ✅ Pin aman (screenshot!) 📸
- Salah pin = cetak ulang PCB 💸

🎬 **Penutup:** "Save, biar proyekmu nggak 'kesurupan'. Follow buat part selanjutnya."

> Catatan tutor: Narasi lengkap saat rekam (sumber: `Script_Reels_P9_SMA_InspiraLabs.md`):
> - [0–4 detik] "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis."
> - [4–12 detik] "Pertama, pin 6 sampai 11. Ini nyambung ke memori flash. Pakai buat yang lain? ESP32-mu crash."
> - [12–26 detik] "Kedua, strapping pin: 0, 2, 5, 12, 15. Pin ini dibaca ESP32 waktu booting. Pasang relay di sini, relaynya bisa nyala sendiri pas dinyalain. Pin 12 lebih parah: kalau HIGH saat boot, tegangan flash-nya salah dan ESP32 nggak mau jalan."
> - [26–34 detik] "Ketiga, pin 34 sampai 39 itu input-only. Mau nyalain LED di sini? Sampai kiamat juga nggak bakal nyala."
> - [34–44 detik] "Yang aman buat pemula: 4, 13, 16 sampai 19, 21 sampai 23, 25 sampai 27, 32, 33. Screenshot ini."
> - [44–55 detik] "Di industri, pemilihan pin itu diputuskan di tahap desain, bukan pas ngoding. Salah pin di PCB artinya cetak ulang. Rugi waktu, rugi uang."
> - [55–60 detik] "Save, biar proyekmu nggak 'kesurupan'. Follow buat part selanjutnya."

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #3 — Negative Hooks (Psikologi Terbalik) |
| Judul | Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis |
| Durasi | ±60 detik |
| Pembicara | Tutor (close-up board + overlay pinout) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Relay "klik" sendiri saat ESP32 dicolok, kipas berputar sesaat | "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis." | Relay nyala SENDIRI?! 😱 |
| 4–12 | Zoom ke deretan pin, overlay merah di GPIO 6–11 | "Pertama, pin 6 sampai 11. Ini nyambung ke memori flash. Pakai buat yang lain? ESP32-mu crash." | ❌ GPIO 6–11 = flash |
| 12–26 | Overlay kuning di 0, 2, 5, 12, 15 + replay relay klik | "Kedua, strapping pin: 0, 2, 5, 12, 15. Pin ini dibaca ESP32 waktu booting. Pasang relay di sini, relaynya bisa nyala sendiri pas dinyalain. Pin 12 lebih parah: kalau HIGH saat boot, tegangan flash-nya salah dan ESP32 nggak mau jalan." | ⚠️ 0, 2, 5, 12, 15 = strapping |
| 26–34 | Overlay biru di 34–39, LED dicolok tapi tidak menyala | "Ketiga, pin 34 sampai 39 itu input-only. Mau nyalain LED di sini? Sampai kiamat juga nggak bakal nyala." | 👂 34–39 = INPUT ONLY |
| 34–44 | Overlay hijau di pin aman | "Yang aman buat pemula: 4, 13, 16 sampai 19, 21 sampai 23, 25 sampai 27, 32, 33. Screenshot ini." | ✅ Pin aman (screenshot!) 📸 |
| 44–55 | B-roll PCB pabrikan | "Di industri, pemilihan pin itu diputuskan di tahap desain, bukan pas ngoding. Salah pin di PCB artinya cetak ulang. Rugi waktu, rugi uang." | Salah pin = cetak ulang PCB 💸 |
| 55–60 | Tutor ke kamera | "Save, biar proyekmu nggak 'kesurupan'. Follow buat part selanjutnya." | Save & follow 👉 |

#### Caption

Relay kamu nyala sendiri pas ESP32 dinyalain? Bisa jadi salah pilih pin 👀

❌ GPIO 6–11 → flash, jangan dipakai
⚠️ 0, 2, 5, 12, 15 → strapping pin (bisa glitch saat boot)
👂 34–39 → input only
✅ Aman: 4, 13, 16–19, 21–23, 25–27, 32, 33

Screenshot & simpan buat proyek berikutnya 📸

#InspiraLabs #ESP32 #IoT #Elektronika #EmbeddedSystem #TipsEngineer #EkskulCoding #Arduino

#### Yang sengaja tidak dibocorkan
- Wiring relay (COM/NO/NC), eksperimen active-LOW, dan arsitektur proyek akhir.
- Solusi masalah relay 5V + logika 3,3V.

---

## Post-Test (5 soal, pilihan ganda)

**1. Pin ESP32 yang hanya bisa dipakai sebagai INPUT adalah…**
A. GPIO 4 B. GPIO 18 C. GPIO 34 D. GPIO 23

**2. Kamu mau memasang relay kipas. Pin mana yang PALING aman?**
A. GPIO 5 B. GPIO 18 C. GPIO 34 D. GPIO 0

**3. Pada relay, terminal yang tersambung ke COM HANYA saat relay aktif adalah…**
A. NO B. NC C. VCC D. IN

**4. Modul relay active-LOW, kipas di COM–NO. Kabel IN disentuhkan ke GND. Apa yang terjadi?**
A. Relay diam, kipas mati B. Relay klik, kipas menyala C. ESP32 langsung rusak D. Kipas berputar terbalik

**5. Pasangkan dengan benar: (1) DHT22, (2) Relay, (3) ESP32 ↔ (a) Aktuator/saklar beban, (b) Mikrokontroler pemroses, (c) Sensor input**
A. 1-a, 2-b, 3-c B. 1-c, 2-b, 3-a C. 1-b, 2-c, 3-a D. 1-c, 2-a, 3-b

---

## Tugas 3 (dikumpulkan P10)

Dokumen 1 halaman berisi:
1. **Foto rangkaian** kelompok (DHT22 + relay + beban).
2. **Tabel pin**: komponen → pin ESP32 → alasan.
3. **Rencana proyek akhir**: kipas menyala otomatis pada suhu berapa? Kenapa angka itu?
4. Hasil eksperimen active-LOW (tabel Challenge Medium).

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge
- **Medium:** tidak dicolok → relay mati (umumnya; ada modul yang "ngambang") · GND → relay **klik, beban menyala** · 3V3 → relay mati → **active-LOW**. Pindah ke NC → **terbalik**: beban menyala saat relay tidak aktif.
- **Hard:**
  - DHT22 adalah sensor yang **komunikasinya dua arah** di satu kabel (ESP32 mengirim sinyal start lalu membaca data), jadi butuh pin yang bisa OUTPUT **dan** INPUT → GPIO 34–39 tidak bisa.
  - Strapping pin bisa glitch/gagal boot (Slide 3–4).
  - NO = fail-safe: ESP32 mati → beban mati.

### ⚠️ Masalah umum: relay 5V + logika 3,3V
Modul relay 5V dengan optocoupler kadang **tidak mau mati** saat IN = 3,3V (karena selisih 5V − 3,3V masih cukup menyalakan LED optocoupler). Solusi saat kelas:
1. Pakai modul relay yang ada **jumper JD-VCC** (pisahkan VCC logika ke 3V3), atau
2. Pakai modul relay **3,3V**, atau
3. Coba VCC modul ke **3V3** (sebagian modul tetap bisa klik).
Ini juga bahan diskusi bagus: **level tegangan logika** harus cocok antar komponen.

### Kunci Post-Test
1. C 2. B 3. A 4. B 5. D

### Pembahasan singkat
- No. 1: GPIO 34–39 tidak punya driver output.
- No. 2: GPIO 5 & 0 = strapping pin (relay bisa klik sendiri saat boot / gagal boot), GPIO 34 = input-only.
- No. 4: IN ke GND = LOW → modul active-LOW aktif → COM–NO tersambung → kipas menyala. Ini kebalikan dari LED biasa, dan akan kalian lihat lagi di P10 saat program tes jadi membuat relay berdetak.

---------- SELESAI ISI MATERI AJAR ----------
