# POST TEST — Pertemuan 12 — SMA

Sumber: SMA — Pertemuan 12: ESP32 Jadi Server: Kontrol Perangkat dari Browser

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Saat menerima perintah dari browser/backend, ESP32 berperan sebagai…**
- A. Client
- B. Server
- C. Database
- D. Sensor

**Jawaban: B**

---

**2. Fungsi `server.handleClient()` di `loop()` adalah…**
- A. Menyambungkan WiFi
- B. Memeriksa & melayani permintaan HTTP yang masuk
- C. Membaca sensor DHT22
- D. Mengirim data ke backend

**Jawaban: B**

---

**3. URL `http://192.168.1.23/led?state=on` dibaca di ESP32 dengan…**
- A. `server.arg("plain")`
- B. `server.arg("led")`
- C. `server.arg("state")`
- D. `WiFi.localIP()`

**Jawaban: C**

---

**4. Perhatikan kode:**
```cpp
void loop() {
  server.handleClient();
  delay(5000);
}
```
**Apa akibatnya?**
- A. Server lebih hemat daya tanpa efek samping
- B. Permintaan bisa tertunda hingga ±5 detik (lag/timeout)
- C. Server tidak bisa dicompile
- D. LED otomatis berkedip

**Jawaban: B**

---

**5. Route di proyek akhir yang dipanggil backend untuk mengontrol kipas adalah…**
- A. `GET /ping`
- B. `POST /api/readings`
- C. `POST /fan`
- D. `GET /led`

**Jawaban: C**
