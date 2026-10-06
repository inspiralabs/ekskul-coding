# SMA — Pertemuan 11: WiFi + HTTP POST: Kirim Data Sensor ke Cloud (Monitoring)

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 31 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengirim data sensor ke dashboard secara real-time (proyek akhir tahap 1: monitoring) |
| Penilaian | Progres proyek akhir |
| Potongan proyek akhir yang dibedah | Di `sma/firmware/sma_room_monitor.ino`: `WiFi.begin` + loop tunggu koneksi, penyusunan `String json`, `WiFiClientSecure` + `setInsecure()`, `HTTPClient` → `addHeader("Content-Type", ...)`, `addHeader("X-API-Key", ...)`, `http.POST(json)`, `responseCode`, `http.getString()`. |

## Alat & bahan (per kelompok)

- Rangkaian P10 (DHT22 di GPIO 4, relay di GPIO 18)
- Laptop + folder **`platformio-starter`** + file `P11_1_KirimData.cpp`, `C2/C3_P11_*.cpp`
- WiFi kelas **2.4 GHz** + hotspot cadangan
- `docs/HANDOUT_SISWA.md` terisi (WiFi, Device ID `sma-1..3`)

## Persiapan tutor sebelum kelas

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`.
2. Isi `docs/HANDOUT_SISWA.md` (WiFi, Device ID per kelompok).
3. Buka dashboard `sma/` di proyektor dengan `MY_DEVICE_ID` kelompok demo.
4. Build `platformio-starter` (isi `P11_1_KirimData.cpp`) dan `sma/firmware` sekali di tiap laptop.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | "Termostat kalian masih offline. Hari ini kita online-kan." |
| 5–20 | Konsep | Slide 2–6: client-server, HTTP, JSON, header, status code |
| 20–35 | Praktek bersama | Upload kode Slide 7 → data muncul di dashboard |
| 35–55 | Challenge | Easy → Medium (JSON rusak) → Hard (auto-reconnect) |
| 55–60 | 🎬 Hook | Slide hook |
| 60–70 | Post-test | 5 soal pilihan ganda |

---

## Slide

### Slide 1 — Dari Offline ke Online ☁️
- P10: ESP32 mengambil keputusan **sendiri** (termostat lokal).
- Hari ini: ESP32 **melapor** ke server tiap 4 detik → dashboard menampilkan data **real-time** dari mana saja.

### Slide 2 — Model Client-Server 🧑‍💻↔️🖥️
```
ESP32 (client)  ──HTTP POST──►  Backend (server)  ──►  Database
                ◄──response───                         ▲
Dashboard (client) ──HTTP GET──────────────────────────┘
```
- **Client** memulai permintaan, **server** menjawab.
- ESP32 dan dashboard **tidak bicara langsung**. Keduanya lewat backend.

### Slide 3 — Anatomi HTTP Request ✉️
```
POST /api/readings HTTP/1.1                     ← method + path
Host: api-ekskulcoding.inspiralabs.id
Content-Type: application/json                  ← header: format body
X-API-Key: ekskul-coding-seru                   ← header: "kunci" akses

{"deviceId":"sma-1","temp":28.4,"humidity":65.2,"ip":"192.168.1.23"}   ← body
```
- **GET** = minta data, **POST** = kirim data.
- **API key** = bukti bahwa pengirim adalah perangkat resmi.

### Slide 4 — JSON: Bahasa Universal Data 📦
```json
{"deviceId":"sma-1","temp":28.4,"humidity":65.2,"ip":"192.168.1.23"}
```
- Pasangan **"kunci": nilai**, dipisah koma, dibungkus `{ }`.
- Teks pakai tanda kutip, angka **tanpa** kutip.
- Di C++, tanda kutip di dalam string harus di-*escape*: `\"`.
- Backend proyek hanya menyimpan **`temp`, `humidity`** (+ status kipas). Field lain diabaikan.

### Slide 5 — Status Code: Server Menjawab dengan Angka 🔢
| Kode | Arti | Di proyek kita biasanya karena… |
|---|---|---|
| **200** | OK | Sukses 🎉 |
| **400** | Bad Request | JSON rusak / field wajib kurang |
| **401** | Unauthorized | `X-API-Key` salah |
| **404** | Not Found | URL/path salah ketik |
| **500** | Server Error | Masalah di backend (lapor tutor) |
| **−1** | (HTTPClient) gagal konek | Tidak ada internet / host salah |

### Slide 6 — HTTPS & `setInsecure()` 🔐
- Server kita pakai **HTTPS** (terenkripsi) → butuh `WiFiClientSecure`.
- `client.setInsecure()` = enkripsi jalan, tapi **identitas server tidak diverifikasi**.
- Cukup untuk kelas. Di produk nyata: pasang **root CA certificate** supaya tidak bisa disadap/dipalsukan (*man-in-the-middle*).

### Slide 7 — Kode Latihan: Fungsi `kirimData()` 🚀
```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHT_PIN 4

const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
const char* DEVICE_ID     = "sma-1";   // sesuai HANDOUT
const char* SERVER_URL    = "https://api-ekskulcoding.inspiralabs.id/api/readings";
const char* API_KEY       = "ekskul-coding-seru";

DHT dht(DHT_PIN, DHT22);
unsigned long terakhirKirim = 0;

int kirimData(float suhu, float lembap) {
  String json = "{\"deviceId\":\"" + String(DEVICE_ID) + "\","
                "\"temp\":" + String(suhu, 1) + ","
                "\"humidity\":" + String(lembap, 1) + "}";
  Serial.println("Body: " + json);

  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.begin(client, SERVER_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-API-Key", API_KEY);

  int kode = http.POST(json);
  if (kode > 0) Serial.println("Balasan: " + http.getString());
  http.end();
  return kode;
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("IP: " + WiFi.localIP().toString());
}

void loop() {
  if (millis() - terakhirKirim < 5000) return;
  terakhirKirim = millis();

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();
  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  int kode = kirimData(suhu, lembap);
  Serial.printf("Status: %d\n", kode);
}
```
> Catatan tutor: Bedah 3 bagian: (1) koneksi WiFi di `setup()`, (2) fungsi `kirimData()` mengembalikan status code, (3) `loop()` non-blocking dari P10. Lalu buka `sma/firmware/sma_room_monitor.ino` dan tunjukkan **blok yang sama**. Bedanya, proyek akhir mengirim juga `ip` dan membaca `fanOn` dari balasan (dipakai di P13).

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW                     ✅
[P10] Digital I/O + DHT22 + relay + millis                 ✅
[P11] WiFi + HTTP POST JSON (monitoring)                   ← HARI INI
[P12] ESP32 sebagai web server (kontrol dari browser)
[P13] Integrasi kontrol dua arah + showcase
```

---

## Challenge

### 🟢 Easy — "Online!"
Isi WiFi & `DEVICE_ID`, upload, buktikan `Status: 200` dan data muncul di **dashboard `sma/`** kelompokmu. Lalu upload **firmware proyek akhir** (`sma/firmware`) dengan identitas yang sama. Data harus tetap masuk.

### 🟡 Medium — "JSON Doctor" 🩺
Fungsi ini menghasilkan **status 400**. Temukan **2 kesalahan** di JSON-nya, perbaiki sampai 200. Tulis juga isi body yang **salah** dan yang **benar**.
```cpp
// KODE BERBUG — potongan pengganti kirimData() di kode Slide 7
String json = "{\"deviceId\":\"" + String(DEVICE_ID) + "\""
              "\"temp\":\"" + String(suhu, 1) + "\","
              "\"humidity\":" + String(lembap, 1) + "}";
```
Bonus: ubah `API_KEY` jadi salah satu huruf. Status berapa? Kembalikan lagi.

### 🔴 Hard — "Tahan Banting" 💪
Di dunia nyata WiFi bisa putus (router restart, sinyal lemah). Kode Slide 7 akan terus mencoba POST dan gagal (−1) selamanya.
1. Di `loop()`, sebelum membaca sensor, cek `WiFi.status()`. Jika **tidak tersambung**: print `WiFi putus, reconnect...`, panggil `WiFi.reconnect()`, dan **lewati** pengiriman putaran ini.
2. Hitung **berapa kali gagal kirim berturut-turut**. Jika gagal **5 kali** berturut-turut, `ESP.restart()`.
3. Uji: matikan hotspot 30 detik, nyalakan lagi. Data harus masuk kembali **tanpa** menekan tombol reset.

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #7 (Curiosity & Secrets — Rasa Penasaran)**

# "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik." 🔢

Isi slide:
- 🧭 Status code = **GPS debugging**. Satu angka langsung menunjuk **di mana** masalahnya:
  - **2xx** → beres. **4xx** → salahmu (request). **5xx** → salah server. **Negatif** → koneksi tidak sampai.
- 🧪 Selalu **print body request & balasan server** (`http.getString()`); pesan error backend biasanya menyebut field yang kurang.
- 🔁 Perangkat profesional **tidak menyerah**: reconnect otomatis + restart setelah N kali gagal (*watchdog mindset*).
- 🔐 `setInsecure()` = OK untuk prototipe, **bukan** untuk produk: pakai sertifikat CA.

---

## Post-Test (5 soal, pilihan ganda)

**1. Dalam proyek ini, ESP32 berperan sebagai… saat mengirim data sensor.**
A. Server B. Database C. Client D. Router

**2. Server membalas status `401`. Penyebab paling mungkin adalah…**
A. JSON rusak B. `X-API-Key` salah C. Server mati D. Sensor gagal dibaca

**3. JSON mana yang VALID?**
A. `{"temp":28.4,"humidity":65.2}`
B. `{"temp":28.4 "humidity":65.2}`
C. `{temp:28.4,humidity:65.2}`
D. `{"temp":28.4,"humidity":65.2,}`

**4. Perhatikan kode:**
```cpp
int kode = http.POST(json);
Serial.printf("Status: %d\n", kode);
```
**Serial menampilkan `Status: -1`. Artinya…**
A. Data diterima server B. Request tidak sampai ke server (masalah koneksi/host) C. Suhu −1 derajat D. API key salah

**5. Fungsi `client.setInsecure()` pada `WiFiClientSecure` adalah…**
A. Mematikan enkripsi HTTPS B. Melewati verifikasi sertifikat server (enkripsi tetap jalan) C. Mengganti HTTPS jadi HTTP D. Mempercepat WiFi

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** bukti = Serial `Status: 200` + screenshot dashboard.

**Medium — 2 kesalahan:**
1. Setelah `deviceId` **kurang koma** (`"\""` → `"\","`).
2. `temp` dibungkus **kutip** (jadi string, backend menolak karena `typeof temp !== "number"`).
```cpp
// potongan — versi benar
String json = "{\"deviceId\":\"" + String(DEVICE_ID) + "\","
              "\"temp\":" + String(suhu, 1) + ","
              "\"humidity\":" + String(lembap, 1) + "}";
```
Body salah: `{"deviceId":"sma-1""temp":"28.4","humidity":65.2}` → benar: `{"deviceId":"sma-1","temp":28.4,"humidity":65.2}`.
Bonus: API key salah → **401**.

**Hard:** ganti `loop()` pada kode Slide 7 dengan:
```cpp
// potongan — tambahkan variabel global: int gagalBeruntun = 0;
void loop() {
  if (millis() - terakhirKirim < 5000) return;
  terakhirKirim = millis();

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi putus, reconnect...");
    WiFi.reconnect();
    return;
  }

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();
  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  int kode = kirimData(suhu, lembap);
  Serial.printf("Status: %d\n", kode);

  if (kode == 200) {
    gagalBeruntun = 0;
  } else {
    gagalBeruntun++;
    if (gagalBeruntun >= 5) {
      Serial.println("Gagal 5x berturut-turut, restart...");
      ESP.restart();
    }
  }
}
```

### Kunci Post-Test
1. C 2. B 3. A 4. B 5. B

### Pembahasan singkat
- No. 3: B kurang koma, C kunci tanpa kutip, D koma di akhir (trailing comma), semuanya tidak valid di JSON.
- No. 4: kode negatif berasal dari library HTTPClient (koneksi gagal), bukan dari server.
