# SMP — Pertemuan 10: Kode Pertamaku di ESP32 (Blink LED)

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Misteri Minggu Lalu 🕵️
- LED di pin 3V3 → menyala.
- LED di pin D4 → **tidak menyala**. Kenapa?
- Karena pin D4 menunggu **perintah**. Perintah = **kode**.

---

### Slide 2 — Resep Program ESP32 🍳
Setiap program ESP32 punya **2 bagian wajib**:

| Bagian | Jalan berapa kali? | Analogi |
|---|---|---|
| `void setup()` | **1 kali**, saat ESP32 baru menyala | Persiapan sebelum masak |
| `void loop()` | **Terus-menerus**, berulang selamanya | Mengaduk masakan terus |

> 🗣️ SPEAKER NOTES: Tunjukkan file proyek akhir sekilas. "Lihat, proyek akhir kalian juga punya setup dan loop. Hari ini kalian belajar resepnya."

---

### Slide 3 — Kasih Nama ke Pin: `#define` 🏷️
```cpp
#define LED_PIN 4
```
- Artinya: "Mulai sekarang, **LED_PIN** = angka **4**."
- Kalau kabel dipindah ke pin lain, cukup ganti **satu angka** ini.
- Di proyek akhir: `#define DHT_PIN 4` → sama persis caranya!

---

### Slide 4 — 3 Perintah Ajaib ✨
| Perintah | Arti |
|---|---|
| `pinMode(LED_PIN, OUTPUT);` | "Pin 4, kamu tugasnya **mengeluarkan** listrik." |
| `digitalWrite(LED_PIN, HIGH);` | Nyalakan (listrik **keluar**) |
| `digitalWrite(LED_PIN, LOW);` | Matikan (listrik **berhenti**) |
| `delay(1000);` | Tunggu **1000 milidetik** = 1 detik |

---

### Slide 5 — Kode Blink Lengkap 💡
```cpp
#include <Arduino.h>

#define LED_PIN 4   // LED dicolok ke pin D4

void setup() {
  pinMode(LED_PIN, OUTPUT);     // pin 4 = keluaran
  Serial.begin(115200);         // buka "jalur ngobrol" ke laptop
  Serial.println("ESP32 siap!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // nyala
  Serial.println("LED nyala");
  delay(1000);                  // tunggu 1 detik

  digitalWrite(LED_PIN, LOW);   // mati
  Serial.println("LED mati");
  delay(1000);
}
```
> 🗣️ SPEAKER NOTES: Bacakan baris per baris dengan bahasa manusia. Tekankan titik koma `;` di akhir perintah, ibarat titik di akhir kalimat.

---

### Slide 6 — Serial Monitor: ESP32 Bisa "Ngomong" 💬
- `Serial.begin(115200)` = buka jalur ngobrol, kecepatannya **115200**.
- `Serial.println("...")` = ESP32 **mengirim pesan** ke laptop.
- Lihat pesannya: klik ikon 🔌 **Serial Monitor** di bawah VS Code.
- Kecepatan di kode harus **sama** dengan `monitor_speed = 115200` di `platformio.ini`.

---

### Slide 7 — Praktek Bareng: Upload! 🚀
1. Pindahkan kabel kaki + LED dari **3V3** ke **D4**.
2. Buka folder `platformio-starter`, salin isi `P10_1_Blink.cpp` ke `src/main.cpp`.
3. Klik **✓ Build** (bawah) → tunggu `SUCCESS`.
4. Klik **→ Upload** → tunggu `SUCCESS`.
5. Klik **🔌 Serial Monitor** → muncul "LED nyala / LED mati".

> 🗣️ SPEAKER NOTES — error umum: > - `Failed to connect to ESP32` → tahan tombol **BOOT** di board saat muncul `Connecting....`, lepas setelah upload mulai jalan.
> - Port tidak ditemukan → ganti kabel USB (kabel data), cek driver.
> - Serial Monitor tulisannya acak (`⸮⸮⸮`) → `monitor_speed` tidak sama dengan `Serial.begin`.
> - LED tidak nyala tapi Serial jalan → cek rangkaian (cara cek dari P9: colok ke 3V3).

---

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Rakit rangkaian, kenal pin              ✅
[P10] setup/loop, #define, Serial.println     ← HARI INI
[P11] Baca sensor suhu DHT22
[P12] Kirim data ke dashboard lewat WiFi
[P13] Pamerkan proyekmu!
```

---

### Challenge 🟢 Easy — "Atur Kecepatan"
Ubah kode supaya LED berkedip **cepat** (nyala 200 ms, mati 200 ms). Lalu coba **lambat** (nyala 3 detik, mati 1 detik).

---

### Challenge 🟡 Medium — "Bug Hunter" 🐛
Kode di bawah punya **3 bug**. LED tersambung di **D4**. Temukan & perbaiki sampai LED berkedip.
```cpp
// KODE BERBUG — jangan dicompile sebelum diperbaiki
#include <Arduino.h>

#define LED_PIN 5

void setup() {
  Serial.begin(115200);
}

void loop() {
  digitalWrite(LED_PIN, HIGH)
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```
Petunjuk: 1 bug bikin **error merah** saat Build, 2 bug lainnya **tidak error** tapi LED tetap tidak menyala.

---

### Challenge 🔴 Hard — "Lampu Lalu Lintas Mini" 🚦
Pasang 3 LED: merah di **D4**, kuning di **D18**, hijau di **D19** (masing-masing dengan resistor). Buat pola:
- Hijau nyala 3 detik → Kuning nyala 1 detik → Merah nyala 3 detik → ulang.
- Setiap ganti lampu, tulis di Serial Monitor: `JALAN`, `HATI-HATI`, `BERHENTI`.

---

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #8 (Curiosity & Secrets — Rasa Penasaran)

# "Aku nyesel banget baru tahu `Serial.println` ini sekarang." 😩

Isi slide:
- 🤔 Kode jalan tapi alat diam saja? Kamu **tidak bisa lihat** isi otak ESP32… kecuali dia **ngomong**.
- 💬 `Serial.println("sampai sini");` = pasang "CCTV" di kode.
- 🧭 Trik engineer: taruh pesan di **setiap langkah penting**. Pesan terakhir yang muncul = di situlah kodenya macet.
- ⚠️ Tulisan aneh `⸮⸮⸮`? Kecepatan Serial Monitor beda dengan `Serial.begin`. Samakan → 115200.

> 🗣️ SPEAKER NOTES: Kaitkan dengan proyek akhir: "Nanti di proyek akhir, ESP32 akan ngomong 'Menghubungkan ke WiFi...' dan 'Suhu: 28 C'. Itu semua pakai Serial.println."

---

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. Bagian `void setup()` dijalankan…**
A. Terus-menerus selamanya  
B. Satu kali saat ESP32 baru menyala  
C. Hanya saat LED menyala  
D. Setiap 1 detik

---

### Post-Test — Soal 2

**2. Perintah untuk MENYALAKAN LED adalah…**
A. `digitalWrite(LED_PIN, LOW);`  
B. `pinMode(LED_PIN, INPUT);`  
C. `digitalWrite(LED_PIN, HIGH);`  
D. `delay(LED_PIN);`

---

### Post-Test — Soal 3

**3. `delay(2000);` artinya ESP32 menunggu…**
A. 2 detik  
B. 20 detik  
C. 2000 detik  
D. 0,2 detik

---

### Post-Test — Soal 4

**4. Perhatikan kode di `loop()`:**
```cpp
Serial.println("A");
delay(1000);
Serial.println("B");
delay(1000);
```
**Yang muncul di Serial Monitor adalah…**
A. A saja, sekali  
B. B, A, B, A, …  
C. A, B, A, B, … berulang terus  
D. AB sekali lalu berhenti

---

### Post-Test — Soal 5

**5. LED dicolok di pin D18. Baris yang harus diubah adalah…**
A. `Serial.begin(115200);`  
B. `#define LED_PIN 4` diganti `#define LED_PIN 18`  
C. `delay(1000);`  
D. Tidak perlu ubah apa pun

---

### Tugas 3 (dikerjakan di rumah)

Buat **pola kedip baru** milikmu sendiri (contoh: kode SOS · · · — — — · · ·, detak jantung, atau kedip makin lama makin cepat). Tidak punya ESP32 di rumah? Pakai simulator gratis **wokwi.com** → New Project → ESP32. Kumpulkan screenshot kode + video/rekaman layar di P11.
