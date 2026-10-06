# POST TEST — Pertemuan 12 — SMP

Sumber: SMP — Pertemuan 12: Terbangkan Datanya ke Internet! (WiFi + Dashboard)

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. ESP32 hanya bisa tersambung ke WiFi dengan frekuensi…**
- A. 5 GHz
- B. 2.4 GHz
- C. 4G
- D. Semua frekuensi

**Jawaban: B**

---

**2. Arti `while (WiFi.status() != WL_CONNECTED)` adalah…**
- A. Jika WiFi tersambung, matikan ESP32
- B. Kirim data sebelum tersambung
- C. Hapus WiFi
- D. Ulangi terus SELAMA WiFi belum tersambung

**Jawaban: D**

---

**3. Dalam data JSON `{"deviceId":"smp-1","temp":28.4,...}`, bagian `deviceId` berfungsi sebagai…**
- A. Suhu ruangan
- B. Password WiFi
- C. Nama pengirim (identitas kelompok)
- D. Alamat server

**Jawaban: C**

---

**4. Serial Monitor menampilkan `Kirim data -> kode respons: 200`. Artinya…**
- A. Data diterima server dengan sukses
- B. Ada 200 error
- C. Suhu 200 derajat
- D. WiFi terputus

**Jawaban: A**

---

**5. Di file proyek akhir, bagian mana yang BOLEH diubah siswa?**
- A. `SERVER_URL` dan `API_KEY`
- B. `DEVICE_ID`, `WIFI_SSID`, `WIFI_PASSWORD`, `DHT_PIN`
- C. Semua baris `http.POST`
- D. Tidak boleh ada yang diubah

**Jawaban: B**
