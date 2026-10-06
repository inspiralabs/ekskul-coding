# SMA — Pertemuan 13: Integrasi Kontrol Dua Arah + Showcase 🏆

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 14 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengintegrasikan & mempresentasikan proyek akhir |
| Penilaian | Presentasi proyek akhir & pemahaman konsep |
| Potongan proyek akhir yang dibedah | **TANTANGAN asli** di `sma/firmware/sma_room_monitor.ino`: 4 TODO `handleFanCommand()` + daftarkan route `/fan`. Di `sma/index.html`: TANTANGAN 3 (mode Otomatis + slider threshold) memakai `kirimPerintahFan()` dari `sma/api.js`, meniru pola `toggleFanManual()`. |

## Alat & bahan (per kelompok)

- Alat lengkap: ESP32 + DHT22 (GPIO 4) + relay (GPIO 18) + kipas/LED beban
- Laptop dengan `sma/firmware` (PlatformIO) & `sma/index.html` terbuka
- WiFi kelas 2.4 GHz + hotspot cadangan
- Proyektor untuk showcase

## Persiapan tutor sebelum kelas

1. Flash `firmware/sma_room_monitor_REFERENSI_TUTOR` ke 1 ESP32 uji. Pastikan kontrol dari dashboard bekerja. **Kembalikan `SERVER_URL` ke URL online** (jangan `localhost`; bagi ESP32, localhost adalah dirinya sendiri).
2. Pastikan `MY_DEVICE_ID` di `sma/api.js` tiap laptop sesuai kelompok.
3. Print rubrik showcase (Khusus Tutor).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo alat tutor: klik tombol dashboard → kipas berputar |
| 5–13 | Konsep | Slide 2–4: alur perintah dua arah, push vs pull |
| 13–25 | Praktek | Isi 4 TODO + route `/fan` (Challenge Easy) |
| 25–35 | Challenge | Medium (tombol Otomatis) / Hard (slider + uji fallback) |
| 35–55 | Showcase | ±5 menit per kelompok |
| 55–60 | 🎬 Hook | Slide hook |
| 60–67 | Post-test | 5 soal pilihan ganda |
| 67–70 | Refleksi & penutup | |

---

## Slide

### Slide 1 — Potongan Terakhir 🧩
- P11: data **naik** (ESP32 → backend → dashboard). ✅
- P12: ESP32 bisa **menerima** perintah (web server). ✅
- Hari ini: sambungkan → **perintah turun** (dashboard → backend → ESP32 → kipas).

### Slide 2 — Alur Perintah Kipas 🔄
```
[Tombol dashboard] → kirimPerintahFan({manualFanOn:true})
     → POST /api/fan-control/sma-1 → [Backend] simpan status
         → (1) PUSH: POST http://<ip-esp32>/fan {"fanOn":true} → handleFanCommand()
         → (2) PULL: balasan POST /api/readings berikutnya berisi "fanOn":true
                     → ESP32 menyalakan relay (≤ 4 detik)
```

### Slide 3 — Push vs Pull: Kenapa Ada Dua Jalur? 🛤️
| | **Push** (`/fan`) | **Pull/fallback** (balasan `/api/readings`) |
|---|---|---|
| Kecepatan | Instan | Hingga 1 interval (4 detik) |
| Syarat | Backend bisa menjangkau **IP lokal** ESP32 (satu jaringan) | Cukup ESP32 bisa ke internet |
| Kalau gagal | Diam-diam diabaikan backend | Tetap jalan |
- Backend kita **online di internet**, sedangkan ESP32 di **jaringan lokal sekolah** → push biasanya **tidak sampai**, dan **pull yang menyelamatkan**.
- Pelajaran industri: perangkat di balik router/NAT **tidak bisa dihubungi langsung dari internet**. Solusi pro: perangkat yang **menarik** perintah (polling), atau koneksi persisten (MQTT/WebSocket).

### Slide 4 — Kontrak Data `/fan` 📜
- Request dari backend: `POST /fan`, body `{"fanOn":true}` atau `{"fanOn":false}`.
- ESP32 wajib membalas `200` + `{"ok":true}`.
- Relay **active-LOW**: `fanOn` true → `LOW`.

### Slide 5 — Format Showcase 🎤
1. **Demo langsung**: genggam sensor → suhu naik di dashboard → mode Otomatis menyalakan kipas.
2. **Bedah 1 bagian kode** yang paling kalian banggakan (firmware atau dashboard).
3. **1 bug terberat** dan cara kalian memperbaikinya.
4. **Rencana pengembangan**: kalau ada waktu 1 bulan lagi, apa yang ditambah?

### Slide 6 — Refleksi Semester ✨
- Dari HTML statis → dashboard interaktif → perangkat IoT dua arah.
- Skill yang kalian pegang sekarang: **C++ embedded, HTTP/REST, JSON, client-server, debugging hardware**. Ini fondasi profesi IoT engineer, backend engineer, dan embedded engineer.

---

## Challenge

### 🟢 Easy — "Selesaikan TANTANGAN Firmware" (wajib)
Buka `sma/firmware/sma_room_monitor.ino`, kerjakan:
1. 4 TODO di `handleFanCommand()` (polanya sama dengan Challenge Hard P12!).
2. Daftarkan route di `setup()`: `fanServer.on("/fan", HTTP_POST, handleFanCommand);` lalu `fanServer.begin();`.
3. Upload. Klik kartu **Kontrol Fan** di dashboard → kipas menyala/mati (maksimal ±4 detik).

### 🟡 Medium — "Tombol Mode Otomatis" (dashboard)
Di `sma/index.html`, bagian `bagianModeFan` (TANTANGAN 3): tambahkan 2 tombol **Manual** dan **Otomatis**. Tiru pola `toggleFanManual()`:
```js
// potongan — pola yang sudah ada
async function toggleFanManual() {
  var hasil = await kirimPerintahFan({ manualFanOn: !fanMenyala });
  fanMenyala = hasil.fanOn;
  perbaruiTampilanFan();
}
```
Uji: mode Otomatis + genggam sensor sampai lewat ambang → kipas menyala sendiri.

### 🔴 Hard — "Slider Ambang + Uji Ketahanan"
1. Tambahkan `<input type="range">` (20–40°C) yang mengirim `kirimPerintahFan({ threshold: nilai })` saat dilepas (event `change`), dan tampilkan nilainya.
2. **Uji fallback**: matikan route push sementara (komentari `fanServer.on(...)`), upload, lalu klik tombol kipas. Masih bisa? Berapa detik delay-nya? Jelaskan dengan Slide 3.

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #12 (Actionable Lists — Daftar & Solusi)**

# "Checklist wajib sebelum demo proyek IoT di depan orang." ✅

Isi slide:
- 🔋 **Daya**: tes pakai power bank, jangan bergantung pada laptop. Bawa kabel cadangan (kabel **data**!).
- 📶 **Jaringan**: siapkan **hotspot cadangan 2.4 GHz** & simpan SSID-nya di firmware sebelum demo.
- 🧾 **Log**: buka Serial Monitor di layar kedua. Kalau gagal, kamu langsung tahu kenapa.
- 🎥 **Plan B**: rekam video demo yang berhasil H-1. Kalau semuanya gagal, tetap ada bukti.
- 🧯 **Fail-safe**: beban di terminal **NO**. Kalau ESP32 hang/restart, kipas mati, bukan menyala terus.
- 🗣️ **Cerita**: mulai dari **masalah** ("kelas panas"), bukan dari komponen.

---

## Post-Test (5 soal, pilihan ganda)

**1. Pada `handleFanCommand()`, isi body request dibaca dengan…**
A. `fanServer.arg("fanOn")` B. `http.getString()` C. `fanServer.arg("plain")` D. `WiFi.localIP()`

**2. Perhatikan kode:**
```cpp
fanOn = body.indexOf("true") >= 0;
digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
```
**Body yang diterima `{"fanOn":false}`. Apa yang terjadi pada relay active-LOW?**
A. Relay menyala B. Relay mati C. ESP32 restart D. Error compile

**3. Mengapa perintah push `POST /fan` dari backend online biasanya tidak sampai ke ESP32 di sekolah?**
A. ESP32 tidak mendukung POST B. Relay active-LOW C. API key salah D. IP ESP32 adalah IP lokal di balik router, tidak bisa dijangkau langsung dari internet

**4. Untuk menyalakan mode Otomatis dari dashboard, kode yang tepat adalah…**
A. `kirimPerintahFan({ fanMode: "auto" });` B. `ambilDataSensorTerbaru("auto");` C. `digitalWrite(RELAY_PIN, "auto");` D. `fanServer.send(200, "auto");`

**5. Pasangkan dengan benar: (1) `fanServer.handleClient()`, (2) `http.POST(json)`, (3) `kirimPerintahFan()` ↔ (a) Dashboard mengirim perintah ke backend, (b) ESP32 melayani request masuk, (c) ESP32 mengirim data sensor**
A. 1-a, 2-b, 3-c B. 1-c, 2-a, 3-b C. 1-b, 2-c, 3-a D. 1-b, 2-a, 3-c

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge Easy (sama dengan file REFERENSI_TUTOR)
```cpp
// potongan
void handleFanCommand() {
  String body = fanServer.arg("plain");                 // TODO 1
  fanOn = body.indexOf("true") >= 0;                    // TODO 2
  digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);          // TODO 3 (active-LOW)
  fanServer.send(200, "application/json", "{\"ok\":true}");  // TODO 4
}

// di setup(), setelah WiFi tersambung:
fanServer.on("/fan", HTTP_POST, handleFanCommand);
fanServer.begin();
```

### Kunci Challenge Medium
```html
<!-- potongan — di dalam <div class="kartu-kosong" id="bagianModeFan"> -->
<button onclick="ubahMode('manual')">Manual</button>
<button onclick="ubahMode('auto')">Otomatis</button>
<span id="labelMode"></span>
```
```js
// potongan — di <script>, dekat toggleFanManual()
async function ubahMode(mode) {
  var hasil = await kirimPerintahFan({ fanMode: mode });
  fanMenyala = hasil.fanOn;
  document.getElementById("labelMode").textContent = "Mode: " + hasil.fanMode;
  perbaruiTampilanFan();
}
```
Catatan: dalam mode `auto`, klik kartu Kontrol Fan (manual) **tidak berpengaruh** karena backend menghitung `fanOn` dari suhu vs threshold. Ini bahan diskusi bagus.

### Kunci Challenge Hard
```html
<!-- potongan -->
<input type="range" id="sliderAmbang" min="20" max="40" value="30">
<span id="nilaiAmbang">30</span>°C
```
```js
// potongan
var slider = document.getElementById("sliderAmbang");
slider.addEventListener("input", function () {
  document.getElementById("nilaiAmbang").textContent = slider.value;
});
slider.addEventListener("change", async function () {
  var hasil = await kirimPerintahFan({ threshold: Number(slider.value) });
  fanMenyala = hasil.fanOn;
  perbaruiTampilanFan();
});
```
Uji fallback: tetap bisa, delay ≤ ±4 detik (`SEND_INTERVAL_MS`), karena relay diatur dari `"fanOn"` di balasan `/api/readings`.

### Rubrik showcase (skor 1–4)
| Aspek | 1 | 4 |
|---|---|---|
| Fungsi | Monitoring saja tidak jalan | Monitoring + kontrol manual + mode otomatis jalan |
| Pemahaman kode | Tidak bisa menjelaskan | Bisa menjelaskan alur dua arah (push & pull) |
| Debugging | Tidak bisa menceritakan bug | Menjelaskan bug, penyebab, dan solusinya |
| Presentasi & kerja sama | 1 orang bicara, tanpa demo | Semua anggota berperan, demo lancar |

### Kunci Post-Test
1. C 2. B 3. D 4. A 5. C

### Pembahasan singkat
- No. 2: `indexOf("true")` = −1 → `fanOn` false → `HIGH` → relay mati.
- No. 3: inilah alasan desain fallback pull di firmware.
