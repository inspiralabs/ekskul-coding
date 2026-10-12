# POST TEST — Pertemuan 11 — SMP

Sumber: SMP — Pertemuan 11: Pasang Firmware Proyek & Jadi Dokter Kabel

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Di firmware proyek akhir, baris yang perlu diisi siswa hari ini adalah…**
- A. `SERVER_URL` dan `API_KEY`
- B. `WIFI_SSID` dan `WIFI_PASSWORD`
- C. Semua baris di bawah tulisan `JANGAN UBAH`
- D. `DEVICE_ID` diganti nama sendiri

**Jawaban: B**

---

**2. Serial Monitor menampilkan `Menghubungkan ke WiFi.........` dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…**
- A. Kabel sensor DHT22 longgar
- B. Nama/password WiFi salah atau WiFi-nya 5 GHz
- C. LED terbalik
- D. Suhu ruangan terlalu panas

**Jawaban: B**

---

**3. Serial Monitor menampilkan `Gagal baca sensor DHT22, coba lagi 4 detik lagi...`. Yang paling tepat dicek pertama adalah…**
- A. Password WiFi
- B. Kabel DHT22: out di D4, kabel tidak longgar, + / − tidak tertukar
- C. Warna dashboard
- D. Mengganti `SERVER_URL`

**Jawaban: B**

---

**4. Kabel out DHT22 dipindah ke D27. Agar sensor terbaca lagi, yang harus diubah adalah…**
- A. `#define DHT_PIN 4` menjadi `#define DHT_PIN 27`
- B. `DEVICE_ID`
- C. `API_KEY`
- D. Tidak perlu mengubah apa pun

**Jawaban: A**

---

**5. Multimeter mode bunyi (continuity) ditempel ke dua ujung kabel jumper dan TIDAK berbunyi. Artinya…**
- A. Kabel itu bagus
- B. Kabel itu putus di dalam, harus diganti
- C. ESP32 rusak
- D. Sensor sedang membaca suhu

**Jawaban: B**
