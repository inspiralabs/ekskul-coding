# SMA — Pertemuan 13: Integrasi Kontrol Dua Arah + Showcase 🏆

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Potongan Terakhir 🧩
- P11: data **naik** (ESP32 → backend → dashboard). ✅
- P12: ESP32 bisa **menerima** perintah (web server). ✅
- Hari ini: sambungkan → **perintah turun** (dashboard → backend → ESP32 → kipas).

---

### Slide 2 — Alur Perintah Kipas 🔄
```
[Tombol dashboard] → kirimPerintahFan({manualFanOn:true})
     → POST /api/fan-control/sma-1 → [Backend] simpan status
         → (1) PUSH: POST http://<ip-esp32>/fan {"fanOn":true} → handleFanCommand()
         → (2) PULL: balasan POST /api/readings berikutnya berisi "fanOn":true
                     → ESP32 menyalakan relay (≤ 4 detik)
```

---

### Slide 3 — Push vs Pull: Kenapa Ada Dua Jalur? 🛤️
| | **Push** (`/fan`) | **Pull/fallback** (balasan `/api/readings`) |
|---|---|---|
| Kecepatan | Instan | Hingga 1 interval (4 detik) |
| Syarat | Backend bisa menjangkau **IP lokal** ESP32 (satu jaringan) | Cukup ESP32 bisa ke internet |
| Kalau gagal | Diam-diam diabaikan backend | Tetap jalan |
- Backend kita **online di internet**, sedangkan ESP32 di **jaringan lokal sekolah** → push biasanya **tidak sampai**, dan **pull yang menyelamatkan**.
- Pelajaran industri: perangkat di balik router/NAT **tidak bisa dihubungi langsung dari internet**. Solusi pro: perangkat yang **menarik** perintah (polling), atau koneksi persisten (MQTT/WebSocket).

---

### Slide 4 — Kontrak Data `/fan` 📜
- Request dari backend: `POST /fan`, body `{"fanOn":true}` atau `{"fanOn":false}`.
- ESP32 wajib membalas `200` + `{"ok":true}`.
- Relay **active-LOW**: `fanOn` true → `LOW`.

---

### Slide 5 — Format Showcase 🎤
1. **Demo langsung**: genggam sensor → suhu naik di dashboard → mode Otomatis menyalakan kipas.
2. **Bedah 1 bagian kode** yang paling kalian banggakan (firmware atau dashboard).
3. **1 bug terberat** dan cara kalian memperbaikinya.
4. **Rencana pengembangan**: kalau ada waktu 1 bulan lagi, apa yang ditambah?

---

### Slide 6 — Refleksi Semester ✨
- Dari HTML statis → dashboard interaktif → perangkat IoT dua arah.
- Skill yang kalian pegang sekarang: **C++ embedded, HTTP/REST, JSON, client-server, debugging hardware**. Ini fondasi profesi IoT engineer, backend engineer, dan embedded engineer.

---

### Challenge 🟢 Easy — "Selesaikan TANTANGAN Firmware" (wajib)
Buka `sma/firmware/sma_room_monitor.ino`, kerjakan:
1. 4 TODO di `handleFanCommand()` (polanya sama dengan Challenge Hard P12!).
2. Daftarkan route di `setup()`: `fanServer.on("/fan", HTTP_POST, handleFanCommand);` lalu `fanServer.begin();`.
3. Upload. Klik kartu **Kontrol Fan** di dashboard → kipas menyala/mati (maksimal ±4 detik).

---

### Challenge 🟡 Medium — "Tombol Mode Otomatis" (dashboard)
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

---

### Challenge 🔴 Hard — "Slider Ambang + Uji Ketahanan"
1. Tambahkan `<input type="range">` (20–40°C) yang mengirim `kirimPerintahFan({ threshold: nilai })` saat dilepas (event `change`), dan tampilkan nilainya.
2. **Uji fallback**: matikan route push sementara (komentari `fanServer.on(...)`), upload, lalu klik tombol kipas. Masih bisa? Berapa detik delay-nya? Jelaskan dengan Slide 3.

---

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #12 (Actionable Lists — Daftar & Solusi)

# "Checklist wajib sebelum demo proyek IoT di depan orang." ✅

Isi slide:
- 🔋 **Daya**: tes pakai power bank, jangan bergantung pada laptop. Bawa kabel cadangan (kabel **data**!).
- 📶 **Jaringan**: siapkan **hotspot cadangan 2.4 GHz** & simpan SSID-nya di firmware sebelum demo.
- 🧾 **Log**: buka Serial Monitor di layar kedua. Kalau gagal, kamu langsung tahu kenapa.
- 🎥 **Plan B**: rekam video demo yang berhasil H-1. Kalau semuanya gagal, tetap ada bukti.
- 🧯 **Fail-safe**: beban di terminal **NO**. Kalau ESP32 hang/restart, kipas mati, bukan menyala terus.
- 🗣️ **Cerita**: mulai dari **masalah** ("kelas panas"), bukan dari komponen.

---

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. Pada `handleFanCommand()`, isi body request dibaca dengan…**
A. `fanServer.arg("fanOn")`  
B. `http.getString()`  
C. `fanServer.arg("plain")`  
D. `WiFi.localIP()`

---

### Post-Test — Soal 2

**2. Perhatikan kode:**
```cpp
fanOn = body.indexOf("true") >= 0;
digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
```
**Body yang diterima `{"fanOn":false}`. Apa yang terjadi pada relay active-LOW?**
A. Relay menyala  
B. Relay mati  
C. ESP32 restart  
D. Error compile

---

### Post-Test — Soal 3

**3. Mengapa perintah push `POST /fan` dari backend online biasanya tidak sampai ke ESP32 di sekolah?**
A. ESP32 tidak mendukung POST  
B. Relay active-LOW  
C. API key salah  
D. IP ESP32 adalah IP lokal di balik router, tidak bisa dijangkau langsung dari internet

---

### Post-Test — Soal 4

**4. Untuk menyalakan mode Otomatis dari dashboard, kode yang tepat adalah…**
A. `kirimPerintahFan({ fanMode: "auto" });`  
B. `ambilDataSensorTerbaru("auto");`  
C. `digitalWrite(RELAY_PIN, "auto");`  
D. `fanServer.send(200, "auto");`

---

### Post-Test — Soal 5

**5. Pasangkan dengan benar: (1) `fanServer.handleClient()`, (2) `http.POST(json)`, (3) `kirimPerintahFan()` ↔ (a) Dashboard mengirim perintah ke backend, (b) ESP32 melayani request masuk, (c) ESP32 mengirim data sensor**
A. 1-a, 2-b, 3-c  
B. 1-c, 2-a, 3-b  
C. 1-b, 2-c, 3-a  
D. 1-b, 2-a, 3-c
