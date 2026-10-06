# POST TEST — Pertemuan 13 — SMA

Sumber: SMA — Pertemuan 13: Integrasi Kontrol Dua Arah + Showcase 🏆

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Pada `handleFanCommand()`, isi body request dibaca dengan…**
- A. `fanServer.arg("fanOn")`
- B. `http.getString()`
- C. `fanServer.arg("plain")`
- D. `WiFi.localIP()`

**Jawaban: C**

---

**2. Perhatikan kode:**
```cpp
fanOn = body.indexOf("true") >= 0;
digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
```
**Body yang diterima `{"fanOn":false}`. Apa yang terjadi pada relay active-LOW?**
- A. Relay menyala
- B. Relay mati
- C. ESP32 restart
- D. Error compile

**Jawaban: B**

---

**3. Mengapa perintah push `POST /fan` dari backend online biasanya tidak sampai ke ESP32 di sekolah?**
- A. ESP32 tidak mendukung POST
- B. Relay active-LOW
- C. API key salah
- D. IP ESP32 adalah IP lokal di balik router, tidak bisa dijangkau langsung dari internet

**Jawaban: D**

---

**4. Untuk menyalakan mode Otomatis dari dashboard, kode yang tepat adalah…**
- A. `kirimPerintahFan({ fanMode: "auto" });`
- B. `ambilDataSensorTerbaru("auto");`
- C. `digitalWrite(RELAY_PIN, "auto");`
- D. `fanServer.send(200, "auto");`

**Jawaban: A**

---

**5. Pasangkan dengan benar: (1) `fanServer.handleClient()`, (2) `http.POST(json)`, (3) `kirimPerintahFan()` ↔ (a) Dashboard mengirim perintah ke backend, (b) ESP32 melayani request masuk, (c) ESP32 mengirim data sensor**
- A. 1-a, 2-b, 3-c
- B. 1-c, 2-a, 3-b
- C. 1-b, 2-c, 3-a
- D. 1-b, 2-a, 3-c

**Jawaban: C**
