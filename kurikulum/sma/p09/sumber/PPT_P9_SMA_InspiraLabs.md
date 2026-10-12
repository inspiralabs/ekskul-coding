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
