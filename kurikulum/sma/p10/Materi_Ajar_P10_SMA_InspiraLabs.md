# SMA — Pertemuan 10: Digital I/O, Sensor DHT22 & Relay: Termostat Pertamamu

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 17 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu memprogram ESP32: kontrol output (relay) & pembacaan sensor (DHT22) |
| Penilaian | Hasil praktek kontrol & pembacaan sensor |
| Potongan proyek akhir yang dibedah | Di `sma/firmware/sma_room_monitor.ino`: `pinMode(RELAY_PIN, OUTPUT)`, `digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH)` (active-LOW), `bool fanOn`, pembacaan DHT22 + `isnan`, dan pola **non-blocking** `if (millis() - lastSendTime < SEND_INTERVAL_MS) return;`. |

## Alat & bahan (per kelompok)

- Rangkaian P9: ESP32 + DHT22 (out → GPIO 4) + relay (IN → **GPIO 18**, VCC → VIN, GND) + beban kipas/LED via COM–NO
- 1 LED + resistor di **GPIO 2** (atau LED bawaan board) untuk challenge Hard
- Laptop + folder **`platformio-starter`** + file `P10_1_*.cpp`, `P10_2_*.cpp`, `C1..C3_P10_*.cpp`

## Persiapan tutor sebelum kelas

1. Bagikan folder `kurikulum/platformio-starter/` + file `.cpp` pertemuan ini. Siswa menyalin isi file `.cpp` ke `src/main.cpp`.
2. **Build sekali** di tiap laptop sebelum kelas (download platform & library).
3. Kumpulkan Tugas 3 (dokumentasi rangkaian) di awal kelas.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Review Tugas 3: 1 kelompok presentasi tabel pin |
| 5–20 | Konsep | Slide 2–6: digital I/O, active-LOW di kode, DHT22, `bool`, ternary |
| 20–33 | Praktek bersama | Upload Slide 4 (relay blink) → Slide 5 (baca DHT22) |
| 33–55 | Challenge | Easy → Medium (termostat) → Hard (millis + histeresis) |
| 55–60 | 🎬 Hook | Slide hook |
| 60–70 | Post-test | 5 soal pilihan ganda |

---

## Slide

### Slide 1 — Dari Saklar Manual ke Saklar Pintar 🧠
- P9: relay dinyalakan dengan **jumper tangan** (IN → GND).
- Hari ini: relay dinyalakan oleh **kode**, lalu oleh **suhu**.
- Inilah inti mode **Otomatis** di proyek akhir.

### Slide 2 — Digital I/O di ESP32 🔌
| Fungsi | Arti |
|---|---|
| `pinMode(pin, OUTPUT)` | Pin jadi keluaran (driver aktif) |
| `pinMode(pin, INPUT)` | Pin jadi masukan (high-impedance) |
| `digitalWrite(pin, HIGH/LOW)` | Keluarkan 3,3V / 0V |
| `digitalRead(pin)` | Baca HIGH/LOW dari pin |

### Slide 3 — Active-LOW di Kode: Beri Nama, Jangan Hafalkan 🏷️
```cpp
#define RELAY_ON  LOW    // modul active-LOW
#define RELAY_OFF HIGH
```
- Kode jadi **terbaca**: `digitalWrite(RELAY_PIN, RELAY_ON);`
- Ganti modul ke active-HIGH? Cukup tukar **2 baris** ini.
- Proyek akhir memakai versi ringkas: `digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);`

### Slide 4 — Kode 1: Relay Berdetak ⏱️
```cpp
#include <Arduino.h>

#define RELAY_PIN 18
#define RELAY_ON  LOW
#define RELAY_OFF HIGH

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);  // set level dulu supaya relay tidak klik saat boot
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  digitalWrite(RELAY_PIN, RELAY_ON);
  Serial.println("Relay ON");
  delay(2000);

  digitalWrite(RELAY_PIN, RELAY_OFF);
  Serial.println("Relay OFF");
  delay(2000);
}
```
> Catatan tutor: Sorot trik `digitalWrite` **sebelum** `pinMode`: level pin sudah OFF saat pin mulai jadi output, jadi tidak ada "klik" sesaat. Ini kebiasaan engineer untuk aktuator.

### Slide 5 — Kode 2: Baca DHT22 🌡️
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  delay(2000);  // DHT22: maksimal 1 bacaan / 2 detik

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;   // guard clause: keluar lebih awal kalau data tidak valid
  }

  Serial.printf("Suhu: %.1f C | Lembap: %.1f %%\n", suhu, lembap);
}
```
- `Serial.printf` = format seperti C: `%.1f` → 1 angka di belakang koma, `%%` → tanda persen.
- **Guard clause** `return`: pola yang sama dipakai proyek akhir.

### Slide 6 — `bool` & Operator Ternary ❓
```cpp
bool kipasNyala = suhu > 30;                          // true / false
digitalWrite(RELAY_PIN, kipasNyala ? RELAY_ON : RELAY_OFF);
```
- `kondisi ? A : B` → kalau kondisi benar pakai **A**, kalau salah pakai **B**.
- Persis pola proyek akhir: `fanOn ? LOW : HIGH`.

### Slide 7 — Masalah `delay()`: ESP32 "Tidur" 😴
- Selama `delay(2000)`, ESP32 **tidak melakukan apa pun**: tidak baca tombol, tidak terima perintah.
- Di proyek akhir, ESP32 harus **selalu siap** menerima perintah kipas dari dashboard.
- Solusinya: **`millis()`**, "jam" internal ESP32 (milidetik sejak menyala).
```cpp
// potongan — pola non-blocking
unsigned long terakhir = 0;
if (millis() - terakhir >= 2000) {
  terakhir = millis();
  // kerjakan tugas tiap 2 detik
}
```

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW                     ✅
[P10] Digital I/O + DHT22 + relay + millis                 ← HARI INI
[P11] WiFi + HTTP POST JSON ke backend (monitoring)
[P12] ESP32 sebagai web server (kontrol dari browser)
[P13] Integrasi kontrol dua arah + showcase
```
> Catatan tutor: Tunjukkan `loop()` proyek akhir: `fanServer.handleClient()` di baris pertama, lalu `millis()`. "Kenapa bukan delay? Karena handleClient harus dipanggil terus. Jawabannya kalian kerjakan di Challenge Hard."

---

## Challenge

### 🟢 Easy — "Balik Logika"
1. Upload Kode 1. Pastikan relay klik tiap 2 detik.
2. Bayangkan modul diganti active-HIGH: ubah **hanya** baris `#define` supaya kodenya benar untuk modul itu. Diskusikan: apa yang terjadi pada relay active-LOW kalian?

### 🟡 Medium — "Termostat Lokal" 🌡️➡️🌀
Gabungkan Kode 1 + Kode 2: kipas (relay) **menyala otomatis** jika suhu > **AMBANG**, mati jika tidak.
- Buat `#define AMBANG 30.0` (sesuaikan suhu kelas, misal suhu sekarang + 1).
- Tampilkan di Serial: `Suhu: 30.4 C -> KIPAS ON`.
- Uji dengan menggenggam sensor.

### 🔴 Hard — "Non-Blocking + Histeresis" 🧠
Masalah termostat Medium: saat suhu di sekitar ambang (29,9 → 30,1 → 29,9…), relay **cetak-cetek** terus → relay cepat aus.
1. Pakai **histeresis**: kipas ON jika suhu > **30.0**, OFF jika suhu < **29.0**, di antaranya **pertahankan status**.
2. Ganti semua `delay()` dengan `millis()`.
3. Bukti non-blocking: LED di GPIO 2 harus **berkedip tiap 250 ms** dengan mulus **bersamaan** dengan pembacaan sensor tiap 2 detik.

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop pakai `delay()` kalau kamu nggak mau alatmu nge-hang." 🛑

Isi slide:
- 😴 `delay()` = **blocking**: CPU berhenti total. Tombol tidak terbaca, perintah WiFi terlewat.
- ⏱️ Ganti dengan pola **`millis()`**:
  ```cpp
  // potongan
  if (millis() - terakhir >= INTERVAL) { terakhir = millis(); /* tugas */ }
  ```
- ✅ Hasilnya: **banyak tugas jalan "bersamaan"** (multitasking sederhana) tanpa RTOS.
- 🔢 Pakai `unsigned long` dan **pengurangan** (`millis() - terakhir`), bukan `millis() > target`, supaya tetap benar saat `millis()` **overflow** setelah ±49 hari.
- 🏭 Firmware industri hampir tidak pernah memakai `delay()` panjang di loop utama.

---

## Post-Test (5 soal, pilihan ganda)

**1. Modul relay active-LOW. Agar kipas MATI, kode yang benar adalah…**
A. `digitalWrite(RELAY_PIN, HIGH);` B. `digitalWrite(RELAY_PIN, LOW);` C. `pinMode(RELAY_PIN, INPUT);` D. `delay(RELAY_PIN);`

**2. Mengapa proyek akhir memakai `millis()` dan bukan `delay()` di `loop()`?**
A. `millis()` membuat sensor lebih akurat B. `delay()` tidak ada di ESP32 C. `delay()` memblokir CPU sehingga perintah dari dashboard bisa terlambat D. `millis()` menghemat baterai

**3. Hasil dari `bool kipas = suhu > 30;` jika `suhu = 28.5` adalah…**
A. `true` B. `false` C. `28.5` D. Error

**4. Perhatikan kode:**
```cpp
bool fanOn = true;
digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
```
**Untuk relay active-LOW, apa yang terjadi?**
A. Relay mati B. Error compile C. Relay berkedip D. Relay menyala

**5. Fungsi histeresis (ON > 30, OFF < 29) pada termostat adalah…**
A. Mencegah relay cetak-cetek saat suhu di sekitar ambang B. Membuat suhu turun lebih cepat C. Membaca sensor lebih cepat D. Mengganti fungsi `isnan`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** tukar `#define RELAY_ON HIGH` dan `#define RELAY_OFF LOW`. Pada modul active-LOW, logika jadi **terbalik**: saat Serial menulis "Relay ON", relay justru mati.

**Medium:**
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4
#define RELAY_PIN 18
#define RELAY_ON  LOW
#define RELAY_OFF HIGH
#define AMBANG 30.0

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  delay(2000);
  float suhu = dht.readTemperature();
  if (isnan(suhu)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  bool kipasNyala = suhu > AMBANG;
  digitalWrite(RELAY_PIN, kipasNyala ? RELAY_ON : RELAY_OFF);
  Serial.printf("Suhu: %.1f C -> KIPAS %s\n", suhu, kipasNyala ? "ON" : "OFF");
}
```

**Hard:**
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4
#define RELAY_PIN 18
#define LED_PIN 2
#define RELAY_ON  LOW
#define RELAY_OFF HIGH
#define BATAS_ON  30.0
#define BATAS_OFF 29.0

DHT dht(DHT_PIN, DHT22);

bool kipasNyala = false;
bool ledNyala = false;
unsigned long terakhirSensor = 0;
unsigned long terakhirLed = 0;

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  // Tugas 1: heartbeat LED tiap 250 ms
  if (millis() - terakhirLed >= 250) {
    terakhirLed = millis();
    ledNyala = !ledNyala;
    digitalWrite(LED_PIN, ledNyala ? HIGH : LOW);
  }

  // Tugas 2: sensor + termostat tiap 2 detik
  if (millis() - terakhirSensor >= 2000) {
    terakhirSensor = millis();
    float suhu = dht.readTemperature();
    if (isnan(suhu)) {
      Serial.println("Gagal baca DHT22");
      return;
    }

    if (suhu > BATAS_ON) kipasNyala = true;
    else if (suhu < BATAS_OFF) kipasNyala = false;
    // di antara 29 dan 30: status dipertahankan (histeresis)

    digitalWrite(RELAY_PIN, kipasNyala ? RELAY_ON : RELAY_OFF);
    Serial.printf("Suhu: %.1f C -> KIPAS %s\n", suhu, kipasNyala ? "ON" : "OFF");
  }
}
```

### Kunci Post-Test
1. A 2. C 3. B 4. D 5. A

### Pembahasan singkat
- No. 2: `fanServer.handleClient()` harus dipanggil terus-menerus; `delay()` membuatnya tertunda.
- No. 4: `fanOn` true → ternary memilih `LOW` → active-LOW menyala.
