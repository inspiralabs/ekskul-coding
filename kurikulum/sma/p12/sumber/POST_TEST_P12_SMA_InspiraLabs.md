# POST TEST — Pertemuan 12 — SMA

Sumber: SMA — Pertemuan 12: Kontrol Kipas dari Dashboard: Manual & Otomatis

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Kamu menekan tombol kipas di dashboard. Bagaimana perintah itu sampai ke ESP32?**
- A. Server langsung mengetuk ESP32 lewat WiFi sekolah
- B. ESP32 lapor suhu tiap ±4 detik, lalu membaca status kipas dari balasan server
- C. HP mengirim sinyal Bluetooth ke ESP32
- D. Relay membuka website sendiri

**Jawaban: B**

---

**2. Teman dari kelas lain membuka dashboard kelompokmu tanpa tahu PIN. Apa yang bisa dia lakukan?**
- A. Menyalakan dan mematikan kipas
- B. Mengubah ambang suhu di slider
- C. Hanya melihat suhu, kelembapan, dan status kipas
- D. Mengganti firmware ESP32

**Jawaban: C**

---

**3. Mode Otomatis aktif dengan slider "Nyala otomatis di atas 29°C". Suhu terbaca 31°C. Apa yang terjadi?**
- A. Kipas menyala sendiri tanpa tombol ditekan
- B. Kipas mati
- C. Dashboard meminta upload ulang
- D. ESP32 restart

**Jawaban: A**

---

**4. Kipas sudah di terminal NO. Dashboard bilang kipas MATI, tapi kipasnya BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
- A. Mengganti `DEVICE_ID`
- B. Mengganti `WIFI_PASSWORD`
- C. Menghapus `api.js`
- D. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false`, lalu upload ulang

**Jawaban: D**

---

**5. Kenapa `SEND_INTERVAL_MS` di firmware tidak boleh diubah ke angka di bawah 2000?**
- A. Supaya kipas berputar lebih pelan
- B. Sensor DHT22 butuh jeda minimal 2 detik antar pembacaan
- C. Karena WiFi hanya menyala 2 detik sekali
- D. Karena dashboard hanya bisa menampilkan 2 angka

**Jawaban: B**
