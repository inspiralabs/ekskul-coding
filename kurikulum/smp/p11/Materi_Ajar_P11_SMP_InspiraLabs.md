# SMP — Pertemuan 11: ESP32 Bisa Merasakan Suhu! (Sensor DHT22)

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 30 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu membaca data dari sensor DHT22 |
| Penilaian | Hasil praktek pembacaan data sensor |
| Potongan proyek akhir yang dibedah | `#include <DHT.h>`, `DHT dht(DHT_PIN, DHT22);`, `dht.begin();`, `dht.readTemperature()`, `dht.readHumidity()`, dan blok `if (isnan(temp) \|\| isnan(humidity)) { ... return; }` di `smp/firmware/smp_room_monitor.ino`. |

## Alat & bahan (per kelompok)

- ESP32 DevKit V1 + kabel USB data
- Modul DHT22 (3 kaki: **+**, **out**, **−**) + 3 kabel jumper
- 1 LED + resistor 220Ω (untuk Medium), dicolok ke **D2**
- Laptop dengan folder **`platformio-starter`** + file `P11_1_BacaDHT22.cpp`, `C2/C3_P11_*.cpp`

## Persiapan tutor sebelum kelas

1. `platformio-starter/platformio.ini` sudah berisi baris library:
   ```ini
   [env:esp32dev]
   platform = https://github.com/pioarduino/platform-espressif32/releases/download/stable/platform-espressif32.zip
   board = esp32dev
   framework = arduino
   monitor_speed = 115200
   lib_deps = adafruit/DHT sensor library
   ```
2. **Build sekali sebelum kelas** di tiap laptop supaya library sudah terunduh.
3. Bagikan `C3_P11_Hard_KenapaGagalTerus.cpp` (kode berbug) di flashdisk/Drive.
4. Cek Tugas 3 (pola kedip) di awal kelas, maksimal 5 menit.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | 2–3 siswa demo Tugas 3 (pola kedip) |
| 5–20 | Konsep | Slide 2–6: sensor, library, variabel float, isnan |
| 20–35 | Praktek bersama | Rakit DHT22 + upload + tiup sensor |
| 35–55 | Challenge | Easy → Medium → Hard |
| 55–60 | 🎬 Hook | Slide hook |
| 60–70 | Post-test | 5 soal pilihan ganda |

---

## Slide

### Slide 1 — Dari "Ngomong" ke "Merasakan" 🌡️
- P10: ESP32 **mengeluarkan** sesuatu (nyalakan LED) = **OUTPUT**.
- Hari ini: ESP32 **menerima** sesuatu (suhu ruangan) = **INPUT**.
- Alatnya: sensor **DHT22**.

### Slide 2 — Kenalan: DHT22 👋
- Sensor kecil yang bisa mengukur **2 hal**: **suhu (°C)** dan **kelembapan udara (%)**.
- 3 kaki: **+** (listrik), **out** (data), **−** (GND).
- Agak "lambat": hanya bisa dibaca **1 kali tiap 2 detik**. Kalau dipaksa lebih cepat, datanya tidak baru.

### Slide 3 — Cara Rakit 🔌
| Kaki DHT22 | Ke pin ESP32 |
|---|---|
| **+** | **3V3** |
| **out** | **D4** |
| **−** | **GND** |

> Catatan tutor: Cabut USB dulu sebelum merakit. Error paling umum: kabel + dan − tertukar (sensor panas!) → minta siswa cek ulang sebelum colok USB.

### Slide 4 — Library: "Aplikasi Siap Pakai" 📦
- Membaca DHT22 dari nol itu rumit. Untungnya, orang lain sudah membuatkan **library**.
- Ibarat **aplikasi di HP**: tinggal install, langsung pakai.
- Di PlatformIO: tulis `lib_deps = adafruit/DHT sensor library` di `platformio.ini`.
- Di kode: `#include <DHT.h>` = "pakai aplikasi DHT".

### Slide 5 — Kode Membaca Sensor 📟
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4               // kaki "out" DHT22 di pin D4

DHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22

void setup() {
  Serial.begin(115200);
  dht.begin();                  // nyalakan sensor
  Serial.println("Sensor siap!");
}

void loop() {
  delay(2000);                  // DHT22 butuh jeda minimal 2 detik

  float suhu = dht.readTemperature();   // baca suhu (°C)
  float lembap = dht.readHumidity();    // baca kelembapan (%)

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca sensor! Cek kabel.");
    return;                     // batalkan putaran ini, ulang dari awal loop
  }

  Serial.print("Suhu: ");
  Serial.print(suhu);
  Serial.print(" C | Kelembapan: ");
  Serial.print(lembap);
  Serial.println(" %");
}
```

### Slide 6 — Kata-Kata Baru 📖
| Kode | Bahasa manusia |
|---|---|
| `float suhu` | Kotak bernama **suhu** untuk menyimpan **angka berkoma** (contoh 28.5) |
| `dht.readTemperature()` | "Sensor, suhunya berapa?" |
| `dht.readHumidity()` | "Sensor, kelembapannya berapa?" |
| `isnan(...)` | "Ini **bukan angka** ya?" (NaN = *Not a Number*, tanda sensor gagal dibaca) |
| `\|\|` | **atau** |
| `return;` | "Batal, ulang dari awal `loop()`." |
| `Serial.print` vs `Serial.println` | `print` = tanpa pindah baris, `println` = lalu **pindah baris** |

> Catatan tutor: Ingatkan materi P3 (variabel) dan P4 (if) waktu block-coding: "Ini sama, cuma sekarang ditulis pakai teks."

### Slide 7 — Praktek Bareng: Tiup Sensornya! 💨
1. Rakit sesuai Slide 3.
2. Salin `P11_1_BacaDHT22.cpp` ke `src/main.cpp`, **Upload**, buka **Serial Monitor**.
3. Muncul `Suhu: 28.40 C | Kelembapan: 65.20 %`.
4. **Tiup** sensor pelan-pelan, lalu lihat angka kelembapan & suhu **naik**!

> Catatan tutor — error umum:
> - Muncul terus `Gagal baca sensor!` → kabel out tidak di D4, kabel longgar, atau + / − tertukar.
> - Error Build `DHT.h: No such file` → `lib_deps` belum ditulis/belum tersimpan.
> - Angka tidak pernah berubah → baca terlalu cepat (jeda < 2 detik) atau sensor rusak.

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Rakit rangkaian, kenal pin              ✅
[P10] setup/loop, #define, Serial.println     ✅
[P11] Baca DHT22 + cek isnan                  ← HARI INI
[P12] Kirim data ke dashboard lewat WiFi
[P13] Pamerkan proyekmu!
```
> Catatan tutor: Tunjukkan bagian proyek akhir yang **hampir sama** dengan kode hari ini (baca suhu, cek isnan, print). "Minggu depan kalian tinggal pakai file ini."

---

## Challenge

### 🟢 Easy — "Tiup & Catat"
Catat angka suhu & kelembapan **sebelum** dan **sesudah** ditiup (atau digenggam tangan 10 detik). Tulis di kertas: mana yang naik lebih banyak?

### 🟡 Medium — "Alarm Kepanasan" 🚨
Tambahkan kode supaya:
- Jika **suhu > 30** → Serial Monitor menulis `PANAS!` **dan** LED di **D2** menyala.
- Jika tidak → LED mati.

Uji dengan menggenggam sensor. Kalau suhu kelas sudah di atas 30, ganti angka batasnya.
Petunjuk: pakai `if (...) { ... } else { ... }`, `pinMode`, dan `digitalWrite` dari P10.

### 🔴 Hard — "Kenapa Gagal Terus?" 🐛
Kode ini selalu menulis `Gagal baca sensor!`. Sensor terpasang di **D4** dan jenisnya **DHT22**. Ada **3 bug**. Cari dan perbaiki!
```cpp
// KODE BERBUG — jangan dicompile sebelum diperbaiki
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 5

DHT dht(DHT_PIN, DHT11);

void setup() {
  Serial.begin(115200);
}

void loop() {
  delay(2000);
  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca sensor!");
    return;
  }

  Serial.print("Suhu: ");
  Serial.println(suhu);
}
```

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #2 (Negative Hooks — Psikologi Terbalik)**

# "Alasan kenapa sensor kamu selalu ngasih angka NaN." 🤯

Isi slide:
- ❓ **NaN** = *Not a Number*, artinya sensor **gagal** memberi data.
- 🔎 4 tersangka utama:
  1. **Kabel** longgar / pin salah (cek angka di `#define`).
  2. **Jenis sensor** salah tulis (DHT11 ≠ DHT22).
  3. **Lupa `dht.begin()`**, sensor belum "dibangunkan".
  4. **Terlalu cepat**: DHT22 butuh jeda ≥ 2 detik.
- 🛡️ Rahasia engineer: **jangan pernah percaya data sensor mentah-mentah.** Selalu cek dulu pakai `isnan()` sebelum dipakai atau dikirim. Data jelek yang lolos bisa bikin grafik & alarm jadi kacau.

---

## Post-Test (5 soal, pilihan ganda)

**1. Sensor DHT22 bisa mengukur…**
A. Suhu dan kelembapan udara B. Cahaya dan suara C. Jarak dan gerakan D. Kecepatan angin

**2. Jeda minimal antar pembacaan DHT22 adalah…**
A. 0,1 detik B. 0,5 detik C. 2 detik D. 1 menit

**3. Fungsi `isnan(suhu)` adalah…**
A. Menaikkan suhu B. Mengecek apakah data suhu BUKAN angka (gagal dibaca) C. Menyalakan sensor D. Mengirim suhu ke laptop

**4. Perhatikan kode:**
```cpp
Serial.print("Suhu: ");
Serial.print(29.5);
Serial.println(" C");
```
**Yang muncul di Serial Monitor adalah…**
A. `Suhu:` (baris 1), `29.5` (baris 2), `C` (baris 3) B. `Suhu: 29.50 C` dalam satu baris C. `29.5 Suhu C` D. Tidak muncul apa-apa

**5. Kode mana yang BENAR untuk "jika suhu lebih dari 30, tulis PANAS!"?**
A. `if (suhu < 30) { Serial.println("PANAS!"); }`
B. `if (suhu = 30) { Serial.println("PANAS!"); }`
C. `if (PANAS > 30) { Serial.println(suhu); }`
D. `if (suhu > 30) { Serial.println("PANAS!"); }`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** kelembapan biasanya naik jauh lebih banyak saat ditiup (napas itu lembap); suhu naik lebih banyak saat digenggam.

**Medium:**
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4
#define LED_PIN 2

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  delay(2000);
  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca sensor! Cek kabel.");
    return;
  }

  Serial.print("Suhu: ");
  Serial.print(suhu);
  Serial.println(" C");

  if (suhu > 30) {
    Serial.println("PANAS!");
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
}
```
Catatan: LED bawaan board (biru) di GPIO 2 ikut menyala, jadi tidak masalah kalau siswa belum memasang LED.

**Hard — 3 bug:**
1. `#define DHT_PIN 5` → `4`.
2. `DHT11` → `DHT22`.
3. `dht.begin();` hilang di `setup()`.

### Kunci Post-Test
1. A 2. C 3. B 4. B 5. D

### Pembahasan singkat
- No. 4: `print` tidak pindah baris, `println` pindah baris di akhir. Angka float ditampilkan 2 angka di belakang koma (`29.50`).
- No. 5: `>` = lebih dari; `=` (satu) itu mengisi nilai, bukan membandingkan.
