# SMA — Pertemuan 12: ESP32 Jadi Server: Kontrol Perangkat dari Browser

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 7 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengontrol relay (fan/LED) dari dashboard (proyek akhir tahap 2: kontrol dua arah) |
| Penilaian | Progres proyek akhir |
| Potongan proyek akhir yang dibedah | Di `sma/firmware/sma_room_monitor.ino`: `#include <WebServer.h>`, `WebServer fanServer(80);`, `fanServer.on("/fan", HTTP_POST, handleFanCommand);`, `fanServer.begin();`, `fanServer.handleClient();`, `fanServer.arg("plain")`, `body.indexOf("true")`, `fanServer.send(200, ...)`. Latihan hari ini memakai **LED & route sendiri**. TODO asli dikerjakan di P13. |

## Alat & bahan (per kelompok)

- Rangkaian P10–P11 (DHT22, relay di GPIO 18) + LED di **GPIO 2** (atau LED bawaan board)
- Laptop + **HP** (untuk membuka browser)
- WiFi kelas 2.4 GHz. **ESP32, laptop, dan HP harus di WiFi yang sama.**
- Folder **`platformio-starter`** + file `P12_1_MiniWebServer.cpp`, `C2/C3_P12_*.cpp`

## Persiapan tutor sebelum kelas

1. Pastikan WiFi kelas **tidak** mengaktifkan *client/AP isolation* (perangkat dalam satu WiFi harus bisa saling akses). Uji: ping ESP32 dari laptop. Kalau WiFi sekolah memblokir, pakai **hotspot HP tutor**.
2. Build `platformio-starter` (isi `P12_1_MiniWebServer.cpp`) di tiap laptop.
3. Siapkan perintah `curl` untuk Hard (Windows 10/11 sudah punya `curl` di cmd).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | "Selama ini ESP32 yang menelepon server. Hari ini ESP32 yang ditelepon." |
| 5–18 | Konsep | Slide 2–6: client vs server, route, handler, handleClient |
| 18–32 | Praktek bersama | Upload Slide 7 → buka `/ping` dan `/led` dari HP |
| 32–55 | Challenge | Easy → Medium → Hard (POST body JSON) |
| 55–60 | 🎬 Hook | Slide hook |
| 60–70 | Post-test | 5 soal pilihan ganda |

---

## Slide

### Slide 1 — Pertanyaan Kunci 🤔
- P11: ESP32 **mengirim** data ke backend (ESP32 = client).
- Proyek akhir: dashboard menekan tombol "Kipas ON" → **bagaimana perintah sampai ke ESP32?**
- Jawabannya: ESP32 juga bisa jadi **server**.

### Slide 2 — Satu Perangkat, Dua Peran 🎭
```
Peran CLIENT (P11):  ESP32 ──POST /api/readings──► Backend
Peran SERVER (P12):  Backend/Browser ──POST /fan──► ESP32
```
- Server = **menunggu** permintaan, lalu **menjawab**.
- Alamatnya = **IP lokal ESP32** (contoh `192.168.1.23`). Ingat baris `Terhubung! IP ESP32 ini:` di Serial.

### Slide 3 — Route & Handler 🛣️
```cpp
// potongan
server.on("/ping", HTTP_GET, handlePing);
```
- **Route** = alamat (`/ping`) + method (`GET`).
- **Handler** = fungsi yang dijalankan saat route itu dipanggil.
- Proyek akhir: `fanServer.on("/fan", HTTP_POST, handleFanCommand);`

### Slide 4 — Membaca Permintaan 📥
| Cara kirim | Contoh | Cara baca di ESP32 |
|---|---|---|
| Query string (GET) | `/led?state=on` | `server.arg("state")` → `"on"` |
| Body (POST) | `{"lampuOn":true}` | `server.arg("plain")` → seluruh body |

### Slide 5 — Menjawab Permintaan 📤
```cpp
// potongan
server.send(200, "text/plain", "pong");
server.send(200, "application/json", "{\"ok\":true}");
server.send(400, "text/plain", "state harus on/off");
```
- `send(statusCode, contentType, isi)`: status code yang sama dengan P11, sekarang **ESP32 yang mengirimnya**.

### Slide 6 — `handleClient()`: Jantung Web Server ❤️
```cpp
// potongan
void loop() {
  server.handleClient();   // cek: ada permintaan masuk? layani!
}
```
- Harus dipanggil **sesering mungkin**.
- Ada `delay(5000)` di loop? Permintaan menunggu sampai 5 detik → terasa **lag/timeout**.
- Inilah alasan P10 kita belajar **`millis()`**. 🔗

### Slide 7 — Kode Latihan: Mini Web Server 💡
```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>

#define LED_PIN 2

const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";

WebServer server(80);
bool ledOn = false;

void handlePing() {
  server.send(200, "text/plain", "pong");
}

void handleLed() {
  String state = server.arg("state");
  if (state == "on") {
    ledOn = true;
  } else if (state == "off") {
    ledOn = false;
  } else {
    server.send(400, "text/plain", "state harus on/off");
    return;
  }
  digitalWrite(LED_PIN, ledOn ? HIGH : LOW);
  server.send(200, "text/plain", ledOn ? "LED ON" : "LED OFF");
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Buka di browser: http://");
  Serial.println(WiFi.localIP());

  server.on("/ping", HTTP_GET, handlePing);
  server.on("/led", HTTP_GET, handleLed);
  server.begin();
}

void loop() {
  server.handleClient();
}
```
> Catatan tutor — error umum:
> - Browser "tidak bisa dijangkau" → HP pakai data seluler / beda WiFi / WiFi isolation aktif.
> - Browser memaksa `https://` → ketik lengkap `http://192.168.x.x/ping`.
> - Lupa `server.begin()` → semua route tidak merespons.

### Slide 8 — ⚠️ Keamanan
- Web server ini **tanpa password**. Siapa pun di WiFi yang sama bisa menyalakan relaymu.
- **Jangan pernah** membuka port ESP32 ke internet (port forwarding).
- Cara aman di proyek akhir: dashboard → **backend** (punya kontrol akses) → ESP32.

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW                     ✅
[P10] Digital I/O + DHT22 + relay + millis                 ✅
[P11] WiFi + HTTP POST JSON (monitoring)                   ✅
[P12] ESP32 sebagai web server                             ← HARI INI
[P13] Isi handleFanCommand() + integrasi dashboard + showcase
```
> Catatan tutor: Buka `sma/firmware/sma_room_monitor.ino`, tunjukkan `handleFanCommand()` dengan 4 TODO. "Minggu depan kalian isi ini. Kalau Challenge Hard hari ini selesai, minggu depan tinggal 5 menit."

---

## Challenge

### 🟢 Easy — "Ping-Pong" 🏓
Upload Slide 7. Dari **HP**, buka `http://<IP-ESP32>/ping` → harus tampil `pong`. Screenshot!

### 🟡 Medium — "Saklar dari HP" 📱
1. Nyalakan/matikan LED dari HP: `/led?state=on` dan `/led?state=off`.
2. Coba `/led?state=kedip`. Status code apa yang dikembalikan? (Cek di laptop: buka DevTools → Network.)
3. Ubah kode: tambahkan route **`/relay`** (GET, `?state=on/off`) yang mengontrol **relay di GPIO 18**. Ingat: **active-LOW**!

### 🔴 Hard — "Terima Perintah JSON" 🧩
Tambahkan route **POST `/lampu`** yang menerima body JSON `{"lampuOn":true}` atau `{"lampuOn":false}`:
1. Baca body dengan `server.arg("plain")`.
2. Tentukan nilai `ledOn` dari body (petunjuk: `body.indexOf("true") >= 0`).
3. Nyalakan/matikan LED.
4. Balas `{"ok":true}` dengan content type `application/json`.

Uji dari **cmd** di laptop:
```
curl -X POST http://192.168.1.23/lampu -d "{\"lampuOn\":true}"
```

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #6 (Curiosity & Secrets — Rasa Penasaran)**

# "Gimana cara aku kontrol lampu dari HP cuma dalam 15 baris kode." 📱💡

Isi slide:
- 🧠 Kuncinya: ESP32 bisa jadi **web server** sendiri, tanpa aplikasi, tanpa cloud.
- 🧩 Resepnya cuma 4 bagian: `WebServer server(80)` → `server.on(route, handler)` → `server.begin()` → `server.handleClient()` di loop.
- 📶 Syarat: HP & ESP32 di **WiFi yang sama**, buka `http://<IP-ESP32>`.
- ⚠️ Pro tip: **jangan expose ke internet**. Untuk kontrol dari luar rumah, lewatkan backend yang punya autentikasi (seperti proyek akhir kita).
- 🏭 Pola ini dipakai di halaman setting router, printer WiFi, dan smart plug.

---

## Post-Test (5 soal, pilihan ganda)

**1. Saat menerima perintah dari browser/backend, ESP32 berperan sebagai…**
A. Client B. Server C. Database D. Sensor

**2. Fungsi `server.handleClient()` di `loop()` adalah…**
A. Menyambungkan WiFi B. Memeriksa & melayani permintaan HTTP yang masuk C. Membaca sensor DHT22 D. Mengirim data ke backend

**3. URL `http://192.168.1.23/led?state=on` dibaca di ESP32 dengan…**
A. `server.arg("plain")` B. `server.arg("led")` C. `server.arg("state")` D. `WiFi.localIP()`

**4. Perhatikan kode:**
```cpp
void loop() {
  server.handleClient();
  delay(5000);
}
```
**Apa akibatnya?**
A. Server lebih hemat daya tanpa efek samping B. Permintaan bisa tertunda hingga ±5 detik (lag/timeout) C. Server tidak bisa dicompile D. LED otomatis berkedip

**5. Route di proyek akhir yang dipanggil backend untuk mengontrol kipas adalah…**
A. `GET /ping` B. `POST /api/readings` C. `POST /fan` D. `GET /led`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** `pong` tampil di HP.

**Medium:** `kedip` → **400**. Route relay:
```cpp
// potongan — tambahkan di atas setup(): #define RELAY_PIN 18
void handleRelay() {
  String state = server.arg("state");
  if (state != "on" && state != "off") {
    server.send(400, "text/plain", "state harus on/off");
    return;
  }
  bool relayOn = (state == "on");
  digitalWrite(RELAY_PIN, relayOn ? LOW : HIGH);  // active-LOW
  server.send(200, "text/plain", relayOn ? "RELAY ON" : "RELAY OFF");
}
// di setup(): digitalWrite(RELAY_PIN, HIGH); pinMode(RELAY_PIN, OUTPUT);
//             server.on("/relay", HTTP_GET, handleRelay);
```

**Hard:**
```cpp
// potongan
void handleLampu() {
  String body = server.arg("plain");
  Serial.println("Body: " + body);
  ledOn = body.indexOf("true") >= 0;
  digitalWrite(LED_PIN, ledOn ? HIGH : LOW);
  server.send(200, "application/json", "{\"ok\":true}");
}
// di setup(): server.on("/lampu", HTTP_POST, handleLampu);
```
Diskusi: `indexOf("true")` sederhana tapi rapuh (body `{"note":"true","lampuOn":false}` akan salah baca). Di produk nyata pakai parser JSON (ArduinoJson).

### Kunci Post-Test
1. B 2. B 3. C 4. B 5. C
