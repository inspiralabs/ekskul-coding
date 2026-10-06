# SMA — Pertemuan 9: Anatomi Sistem IoT — ESP32, Sensor, dan Relay

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Dari Web ke Dunia Fisik 🌐➡️🔌
- P1–P8: kalian bikin **dashboard** (HTML, CSS, JS, DOM).
- P9–P13: kalian bikin **perangkat** yang mengisi dashboard itu dengan data asli, **dan bisa dikontrol balik**.
- Target akhir: *Smart Room Monitor*: monitoring suhu + kontrol kipas **dua arah**.

---

### Slide 2 — Arsitektur Sistem IoT 🏗️
```
[Sensor DHT22] → [ESP32] ⇄ WiFi ⇄ [Backend/Server] ⇄ [Dashboard Web]
                    ↓
               [Relay] → [Kipas]
```
- **Sensor** = input dunia fisik. **Aktuator** (relay → kipas) = output dunia fisik.
- **ESP32** = mikrokontroler: CPU dual-core 240 MHz, WiFi + Bluetooth, ±30 GPIO.
- Pola industri: *edge device* (ESP32) ↔ *cloud* (backend) ↔ *client* (dashboard).

---

### Slide 3 — Pinout ESP32: Tidak Semua Pin Sama ⚠️
| Kelompok pin | Contoh | Catatan |
|---|---|---|
| **Daya** | 3V3, VIN (5V dari USB), GND | 3V3 untuk sensor; VIN untuk modul 5V |
| **GPIO aman** | 4, 13, 16–19, 21–23, 25–27, 32, 33 | Pilihan utama input/output |
| **Input-only** | 34, 35, 36 (VP), 39 (VN) | **Tidak bisa** jadi OUTPUT |
| **Strapping pin** | 0, 2, 5, 12, 15 | Dibaca ESP32 saat **booting**, bisa bikin gagal boot / glitch |
| **Jangan dipakai** | 6–11 | Terhubung ke flash internal |

> 🗣️ SPEAKER NOTES: Logika GPIO ESP32 = **3,3V**, bukan 5V. Memberi 5V langsung ke GPIO bisa merusak chip.

---

### Slide 4 — Kenapa `RELAY_PIN 18`, Bukan 5? 🤔
- Template awal proyek memakai pin **5**, padahal GPIO5 = **strapping pin**.
- Saat booting, GPIO5 sempat **mengeluarkan sinyal** sebelum kode jalan → relay bisa **"klik" sendiri** dan kipas menyala sesaat.
- Di perangkat nyata (pompa, pintu, pemanas) glitch ini **berbahaya**.
- Solusi: pakai **GPIO aman** seperti **18**.

---

### Slide 5 — DHT22: Sensor Digital 1-Wire 🌡️
- Mengukur **suhu** (−40 s/d 80°C, ±0,5°C) dan **kelembapan** (0–100%, ±2–5%).
- Komunikasi lewat **1 kabel data** dengan protokol timing khusus → butuh **library**.
- Sampling rate maksimal **0,5 Hz** (1 bacaan / 2 detik).
- Modul 3-pin sudah ada **resistor pull-up** bawaan.
- Wiring: **+ → 3V3**, **out → GPIO 4**, **− → GND**.

---

### Slide 6 — Relay: Saklar yang Dikendalikan Listrik 🔀
- ESP32 tidak sanggup menyalakan kipas/lampu besar langsung (arus GPIO kecil, ±12 mA aman).
- **Relay** = saklar mekanis. Sinyal kecil dari ESP32 → kumparan → kontak besar menutup.
- Sisi kontrol: **VCC** (→ VIN 5V), **GND**, **IN** (→ GPIO).
- Sisi beban:
  - **COM** = common (titik tengah)
  - **NO** = *Normally Open*, tersambung ke COM **hanya saat relay aktif**
  - **NC** = *Normally Closed*, tersambung ke COM **saat relay tidak aktif**

---

### Slide 7 — Rangkaian Beban via Relay ⚡
```
VIN (5V) ──► COM  [relay]  NO ──► (+) Kipas (−) ──► GND
```
- Kipas hanya menyala saat relay **aktif** (COM–NO tersambung).
- Pakai **NO** supaya kalau ESP32 mati/restart, kipas ikut **mati** (*fail-safe*).

---

### Slide 8 — Active-LOW vs Active-HIGH 🔄
| Tipe | Aktif saat IN = | Contoh |
|---|---|---|
| Active-HIGH | HIGH (3,3V) | LED biasa |
| **Active-LOW** | **LOW (0V / GND)** | Kebanyakan modul relay murah |
- Di proyek akhir:
  ```cpp
  digitalWrite(RELAY_PIN, LOW);   // relay ON
  digitalWrite(RELAY_PIN, HIGH);  // relay OFF
  ```
- Hari ini kalian **membuktikannya sendiri tanpa kode** (Challenge Medium).

---

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW      ← HARI INI
[P10] Digital I/O + baca DHT22 + kontrol relay (termostat lokal)
[P11] WiFi + HTTP POST JSON ke backend (monitoring)
[P12] ESP32 sebagai web server (kontrol dari browser)
[P13] Integrasi kontrol dua arah + showcase
```

---

### Challenge 🟢 Easy — "Rakit Input & Output Dasar"
1. LED + resistor dari **3V3** → GND, harus menyala.
2. Rakit DHT22: + → 3V3, out → **GPIO 4**, − → GND (belum dibaca, cek LED power modul menyala kalau ada).

---

### Challenge 🟡 Medium — "Temukan Sendiri Active-LOW" 🔍
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

---

### Challenge 🔴 Hard — "Arsitek Proyek" 📐
Gambar **diagram pengkabelan lengkap** proyek akhir (DHT22 + relay + kipas + ESP32), di kertas atau di **wokwi.com**. Untuk setiap pin yang dipakai, tulis **alasan** memilihnya. Jawab juga:
- Kenapa DHT22 tidak boleh di GPIO 34 untuk OUTPUT? (jebakan: DHT22 itu input atau output?)
- Kenapa relay tidak di GPIO 2/5/12/15?
- Kenapa beban di NO, bukan NC?

---

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #3 (Negative Hooks — Psikologi Terbalik)

# "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis." ⚠️

Isi slide:
- 🚫 **GPIO 6–11** → terhubung ke flash. Dipakai = ESP32 crash.
- 🥾 **Strapping pin 0, 2, 5, 12, 15** → dibaca saat booting. Relay/beban di sini bisa **nyala sendiri saat boot** atau ESP32 **gagal upload**. (GPIO12 HIGH saat boot = tegangan flash salah!)
- 👂 **GPIO 34–39** → **input-only**, tidak bisa menyalakan apa pun.
- ✅ **Pin aman** untuk pemula: **4, 13, 16–19, 21–23, 25–27, 32, 33**.
- 🏭 Di industri, pemilihan pin ditentukan di tahap **desain**, bukan saat coding. Salah pin di PCB = cetak ulang PCB = rugi waktu & uang.

---

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. Pin ESP32 yang hanya bisa dipakai sebagai INPUT adalah…**
A. GPIO 4  
B. GPIO 18  
C. GPIO 34  
D. GPIO 23

---

### Post-Test — Soal 2

**2. Mengapa template proyek mengganti `RELAY_PIN` dari 5 ke 18?**
A. GPIO 5 tidak bisa OUTPUT  
B. GPIO 5 adalah strapping pin yang bisa glitch saat booting  
C. GPIO 18 lebih cepat  
D. GPIO 5 khusus untuk WiFi

---

### Post-Test — Soal 3

**3. Pada relay, terminal yang tersambung ke COM HANYA saat relay aktif adalah…**
A. NO  
B. NC  
C. VCC  
D. IN

---

### Post-Test — Soal 4

**4. Modul relay active-LOW. Kode mana yang MENYALAKAN kipas?**
A. `digitalWrite(RELAY_PIN, HIGH);`  
B. `digitalWrite(RELAY_PIN, LOW);`  
C. `pinMode(RELAY_PIN, INPUT);`  
D. `analogRead(RELAY_PIN);`

---

### Post-Test — Soal 5

**5. Pasangkan dengan benar: (1) DHT22, (2) Relay, (3) ESP32 ↔ (a) Aktuator/saklar beban, (b) Mikrokontroler pemroses, (c) Sensor input**
A. 1-a, 2-b, 3-c  
B. 1-c, 2-b, 3-a  
C. 1-b, 2-c, 3-a  
D. 1-c, 2-a, 3-b

---

### Tugas 3 (dikumpulkan P10)

Dokumen 1 halaman berisi:
1. **Foto rangkaian** kelompok (DHT22 + relay + beban).
2. **Tabel pin**: komponen → pin ESP32 → alasan.
3. **Rencana proyek akhir**: kipas menyala otomatis pada suhu berapa? Kenapa angka itu?
4. Hasil eksperimen active-LOW (tabel Challenge Medium).
