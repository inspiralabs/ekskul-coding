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
