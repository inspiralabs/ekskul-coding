# POST TEST — Pertemuan 12 — SMA

Sumber: SMA — Pertemuan 12: Kontrol Kipas dari Dashboard: Manual & Otomatis

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Kamu klik "kipas ON" di dashboard. Bagaimana perintah itu sampai ke ESP32?**
- A. Server langsung mengirim perintah ke IP ESP32 di WiFi sekolah
- B. ESP32 melapor data tiap ±4 detik dan membaca status kipas dari balasan server
- C. Dashboard mengirim sinyal Bluetooth ke ESP32
- D. Relay membaca website sendiri

**Jawaban: B**

---

**2. Jeda dari klik tombol sampai kipas berputar paling lama sekitar…**
- A. 0,01 detik
- B. ±4 detik (ditambah waktu internet)
- C. 1 menit
- D. Sampai ESP32 di-restart

**Jawaban: B**

---

**3. Mode Otomatis aktif, slider "Nyala otomatis di atas 29°C", suhu terbaca 31°C. Apa yang terjadi?**
- A. Kipas menyala
- B. Kipas mati
- C. Dashboard meminta upload ulang
- D. Relay rusak

**Jawaban: A**

---

**4. Kipas terpasang di terminal NO. ESP32 tiba-tiba dicabut saat kipas menyala. Apa yang terjadi pada kipas?**
- A. Tetap menyala selamanya
- B. Menyala lebih kencang
- C. Mati, karena relay tidak aktif dan COM–NO terputus
- D. Berputar terbalik

**Jawaban: C**

---

**5. Kipas di NO. Dashboard menunjukkan kipas MATI, tetapi kipas sungguhan BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
- A. Mengganti `API_KEY`
- B. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false` lalu upload ulang
- C. Mengganti `DEVICE_ID`
- D. Menghapus `api.js`

**Jawaban: B**
