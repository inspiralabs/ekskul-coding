# POST TEST — Pertemuan 13 — SMP

Sumber: SMP — Pertemuan 13: Showcase Proyek Akhir 🏆

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Pada proyek akhir, sensor DHT22 termasuk bagian…**
- A. Output
- B. Server
- C. Dashboard
- D. Input

**Jawaban: D**

---

**2. Baris yang berfungsi mengirim data ke server adalah…**
- A. `dht.begin();`
- B. `pinMode(LED_PIN, OUTPUT);`
- C. `http.POST(json);`
- D. `delay(500);`

**Jawaban: C**

---

**3. Urutan perjalanan data yang benar adalah…**
- A. Dashboard → Server → ESP32 → DHT22
- B. DHT22 → ESP32 → WiFi/Internet → Server → Dashboard
- C. ESP32 → DHT22 → Dashboard → Server
- D. Server → DHT22 → ESP32 → Dashboard

**Jawaban: B**

---

**4. Dashboard tidak menampilkan data kelompokmu, padahal Serial Monitor menulis kode 200. Penyebab paling mungkin adalah…**
- A. Sensor rusak
- B. `DEVICE_ID` di firmware berbeda dengan `MY_DEVICE_ID` di dashboard
- C. Resistor terbalik
- D. LED tidak menyala

**Jawaban: B**

---

**5. Perhatikan kode:**
```cpp
if (responseCode == 200) {
  digitalWrite(LED_PIN, HIGH);
}
```
**Kapan LED menyala?**
- A. Saat data berhasil diterima server
- B. Saat suhu 200 derajat
- C. Saat WiFi terputus
- D. Setiap 200 detik

**Jawaban: A**
