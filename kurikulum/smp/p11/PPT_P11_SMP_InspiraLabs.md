# SMP — Pertemuan 11: ESP32 Bisa Merasakan Suhu! (Sensor DHT22)

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Dari "Ngomong" ke "Merasakan" 🌡️
- P10: ESP32 **mengeluarkan** sesuatu (nyalakan LED) = **OUTPUT**.
- Hari ini: ESP32 **menerima** sesuatu (suhu ruangan) = **INPUT**.
- Alatnya: sensor **DHT22**.

---

### Slide 2 — Kenalan: DHT22 👋
- Sensor kecil yang bisa mengukur **2 hal**: **suhu (°C)** dan **kelembapan udara (%)**.
- 3 kaki: **+** (listrik), **out** (data), **−** (GND).
- Agak "lambat": hanya bisa dibaca **1 kali tiap 2 detik**. Kalau dipaksa lebih cepat, datanya tidak baru.

---

### Slide 3 — Cara Rakit 🔌
| Kaki DHT22 | Ke pin ESP32 |
|---|---|
| **+** | **3V3** |
| **out** | **D4** |
| **−** | **GND** |

> 🗣️ SPEAKER NOTES: Cabut USB dulu sebelum merakit. Error paling umum: kabel + dan − tertukar (sensor panas!) → minta siswa cek ulang sebelum colok USB.

---

### Slide 4 — Library: "Aplikasi Siap Pakai" 📦
- Membaca DHT22 dari nol itu rumit. Untungnya, orang lain sudah membuatkan **library**.
- Ibarat **aplikasi di HP**: tinggal install, langsung pakai.
- Di PlatformIO: tulis `lib_deps = adafruit/DHT sensor library` di `platformio.ini`.
- Di kode: `#include <DHT.h>` = "pakai aplikasi DHT".

---

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

---

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

> 🗣️ SPEAKER NOTES: Ingatkan materi P3 (variabel) dan P4 (if) waktu block-coding: "Ini sama, cuma sekarang ditulis pakai teks."

---

### Slide 7 — Praktek Bareng: Tiup Sensornya! 💨
1. Rakit sesuai Slide 3.
2. Salin `P11_1_BacaDHT22.cpp` ke `src/main.cpp`, **Upload**, buka **Serial Monitor**.
3. Muncul `Suhu: 28.40 C | Kelembapan: 65.20 %`.
4. **Tiup** sensor pelan-pelan, lalu lihat angka kelembapan & suhu **naik**!

> 🗣️ SPEAKER NOTES — error umum: > - Muncul terus `Gagal baca sensor!` → kabel out tidak di D4, kabel longgar, atau + / − tertukar.
> - Error Build `DHT.h: No such file` → `lib_deps` belum ditulis/belum tersimpan.
> - Angka tidak pernah berubah → baca terlalu cepat (jeda < 2 detik) atau sensor rusak.

---

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Rakit rangkaian, kenal pin              ✅
[P10] setup/loop, #define, Serial.println     ✅
[P11] Baca DHT22 + cek isnan                  ← HARI INI
[P12] Kirim data ke dashboard lewat WiFi
[P13] Pamerkan proyekmu!
```
> 🗣️ SPEAKER NOTES: Tunjukkan bagian proyek akhir yang **hampir sama** dengan kode hari ini (baca suhu, cek isnan, print). "Minggu depan kalian tinggal pakai file ini."

---

### Challenge 🟢 Easy — "Tiup & Catat"
Catat angka suhu & kelembapan **sebelum** dan **sesudah** ditiup (atau digenggam tangan 10 detik). Tulis di kertas: mana yang naik lebih banyak?

---

### Challenge 🟡 Medium — "Alarm Kepanasan" 🚨
Tambahkan kode supaya:
- Jika **suhu > 30** → Serial Monitor menulis `PANAS!` **dan** LED di **D2** menyala.
- Jika tidak → LED mati.

Uji dengan menggenggam sensor. Kalau suhu kelas sudah di atas 30, ganti angka batasnya.
Petunjuk: pakai `if (...) { ... } else { ... }`, `pinMode`, dan `digitalWrite` dari P10.

---

### Challenge 🔴 Hard — "Kenapa Gagal Terus?" 🐛
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

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #2 (Negative Hooks — Psikologi Terbalik)

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

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. Sensor DHT22 bisa mengukur…**
A. Suhu dan kelembapan udara  
B. Cahaya dan suara  
C. Jarak dan gerakan  
D. Kecepatan angin

---

### Post-Test — Soal 2

**2. Jeda minimal antar pembacaan DHT22 adalah…**
A. 0,1 detik  
B. 0,5 detik  
C. 2 detik  
D. 1 menit

---

### Post-Test — Soal 3

**3. Fungsi `isnan(suhu)` adalah…**
A. Menaikkan suhu  
B. Mengecek apakah data suhu BUKAN angka (gagal dibaca)  
C. Menyalakan sensor  
D. Mengirim suhu ke laptop

---

### Post-Test — Soal 4

**4. Perhatikan kode:**
```cpp
Serial.print("Suhu: ");
Serial.print(29.5);
Serial.println(" C");
```
**Yang muncul di Serial Monitor adalah…**
A. `Suhu:` (baris 1), `29.5` (baris 2), `C` (baris 3)  
B. `Suhu: 29.50 C` dalam satu baris  
C. `29.5 Suhu C`  
D. Tidak muncul apa-apa

---

### Post-Test — Soal 5

**5. Kode mana yang BENAR untuk "jika suhu lebih dari 30, tulis PANAS!"?**
A. `if (suhu < 30) { Serial.println("PANAS!"); }`
B. `if (suhu = 30) { Serial.println("PANAS!"); }`
C. `if (PANAS > 30) { Serial.println(suhu); }`
D. `if (suhu > 30) { Serial.println("PANAS!"); }`
