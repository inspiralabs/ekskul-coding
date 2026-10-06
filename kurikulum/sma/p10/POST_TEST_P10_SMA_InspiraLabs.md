# POST TEST — Pertemuan 10 — SMA

Sumber: SMA — Pertemuan 10: Digital I/O, Sensor DHT22 & Relay: Termostat Pertamamu

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Modul relay active-LOW. Agar kipas MATI, kode yang benar adalah…**
- A. `digitalWrite(RELAY_PIN, HIGH);`
- B. `digitalWrite(RELAY_PIN, LOW);`
- C. `pinMode(RELAY_PIN, INPUT);`
- D. `delay(RELAY_PIN);`

**Jawaban: A**

---

**2. Mengapa proyek akhir memakai `millis()` dan bukan `delay()` di `loop()`?**
- A. `millis()` membuat sensor lebih akurat
- B. `delay()` tidak ada di ESP32
- C. `delay()` memblokir CPU sehingga perintah dari dashboard bisa terlambat
- D. `millis()` menghemat baterai

**Jawaban: C**

---

**3. Hasil dari `bool kipas = suhu > 30;` jika `suhu = 28.5` adalah…**
- A. `true`
- B. `false`
- C. `28.5`
- D. Error

**Jawaban: B**

---

**4. Perhatikan kode:**
```cpp
bool fanOn = true;
digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
```
**Untuk relay active-LOW, apa yang terjadi?**
- A. Relay mati
- B. Error compile
- C. Relay berkedip
- D. Relay menyala

**Jawaban: D**

---

**5. Fungsi histeresis (ON > 30, OFF < 29) pada termostat adalah…**
- A. Mencegah relay cetak-cetek saat suhu di sekitar ambang
- B. Membuat suhu turun lebih cepat
- C. Membaca sensor lebih cepat
- D. Mengganti fungsi `isnan`

**Jawaban: A**
