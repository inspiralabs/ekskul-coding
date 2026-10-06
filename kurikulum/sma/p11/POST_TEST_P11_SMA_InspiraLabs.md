# POST TEST — Pertemuan 11 — SMA

Sumber: SMA — Pertemuan 11: WiFi + HTTP POST: Kirim Data Sensor ke Cloud (Monitoring)

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Dalam proyek ini, ESP32 berperan sebagai… saat mengirim data sensor.**
- A. Server
- B. Database
- C. Client
- D. Router

**Jawaban: C**

---

**2. Server membalas status `401`. Penyebab paling mungkin adalah…**
- A. JSON rusak
- B. `X-API-Key` salah
- C. Server mati
- D. Sensor gagal dibaca

**Jawaban: B**

---

**3. JSON mana yang VALID?**
- A. `{"temp":28.4,"humidity":65.2}`
- B. `{"temp":28.4 "humidity":65.2}`
- C. `{temp:28.4,humidity:65.2}`
- D. `{"temp":28.4,"humidity":65.2,}`

**Jawaban: A**

---

**4. Perhatikan kode:**
```cpp
int kode = http.POST(json);
Serial.printf("Status: %d\n", kode);
```
**Serial menampilkan `Status: -1`. Artinya…**
- A. Data diterima server
- B. Request tidak sampai ke server (masalah koneksi/host)
- C. Suhu −1 derajat
- D. API key salah

**Jawaban: B**

---

**5. Fungsi `client.setInsecure()` pada `WiFiClientSecure` adalah…**
- A. Mematikan enkripsi HTTPS
- B. Melewati verifikasi sertifikat server (enkripsi tetap jalan)
- C. Mengganti HTTPS jadi HTTP
- D. Mempercepat WiFi

**Jawaban: B**
