# POST TEST — Pertemuan 11 — SMA

Sumber: SMA — Pertemuan 11: Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Di firmware proyek dari tutor, baris yang WAJIB kalian isi sendiri adalah…**
- A. `SERVER_URL` dan `API_KEY`
- B. `DEVICE_ID`
- C. `WIFI_SSID` dan `WIFI_PASSWORD`
- D. Isi fungsi `loop()`

**Jawaban: C**

---

**2. Serial Monitor terus menampilkan `Menghubungkan ke WiFi.........` tanpa berhenti. Penyebab paling mungkin adalah…**
- A. Kabel DHT22 longgar
- B. Nama/password WiFi salah atau WiFi-nya 5 GHz
- C. Kipas terpasang di NC
- D. API key salah

**Jawaban: B**

---

**3. Serial menampilkan `Kirim data -> kode respons: 200`. Artinya…**
- A. Suhu ruangan 200 derajat
- B. Server menerima data, dashboard seharusnya ikut berubah
- C. WiFi terputus
- D. Sensor gagal dibaca

**Jawaban: B**

---

**4. WiFi sudah `Terhubung!`, tapi Serial terus menulis `Gagal baca sensor DHT22`. Yang paling perlu dicek adalah…**
- A. Password WiFi
- B. Kabel DHT22: out ke D13, + ke 3V3, − ke GND
- C. File `api.js`
- D. Kabel kipas di terminal NO

**Jawaban: B**

---

**5. Setelah firmware ter-upload, ESP32 dicabut dari laptop lalu dicolok ke power bank. Apa yang terjadi?**
- A. Program hilang, harus upload ulang
- B. ESP32 hanya bisa jalan kalau tersambung laptop
- C. Program tetap tersimpan: ESP32 menyala, masuk WiFi, dan kirim data lagi
- D. Data hanya tampil di Serial Monitor

**Jawaban: C**
