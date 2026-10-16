# POST TEST — Pertemuan 10 — SMA

Sumber: SMA — Pertemuan 10: Merakit Smart Room Monitor: DHT22, Relay & Kipas

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Sebelum memindah kabel di rakitan ESP32, langkah pertama yang benar adalah…**
- A. Menekan tombol BOOT
- B. Mencabut kabel USB
- C. Membuka Serial Monitor
- D. Mengencangkan sekrup terminal relay

**Jawaban: B**

---

**2. Kenapa kaki "+" modul DHT22 disambungkan ke 3V3, bukan ke VIN (5V)?**
- A. Supaya sinyal data sensor juga 3,3V, sesuai batas tegangan GPIO ESP32
- B. Karena pin 3V3 memberi arus paling besar
- C. Supaya relay ikut aktif
- D. Karena VIN hanya dipakai untuk WiFi

**Jawaban: A**

---

**3. Serial Monitor menulis "Relay AKTIF", tapi relay tidak klik dan LED relay tidak menyala. Penyebab paling mungkin adalah…**
- A. Sensor DHT22 terbalik
- B. Kipas rusak
- C. Kabel IN atau VCC/GND relay tidak tersambung dengan benar
- D. Baud rate Serial Monitor salah

**Jawaban: C**

---

**4. Relay klik dan LED relay menyala, tetapi kipas tidak berputar. Bagian yang paling perlu dicek adalah…**
- A. Kabel DHT22
- B. Sisi beban: kabel COM, NO, dan kabel kipas ke GND
- C. Kabel USB laptop
- D. Pengaturan WiFi

**Jawaban: B**

---

**5. Modul relay active-LOW sedang AKTIF. Jika pin IN diukur dengan multimeter (terhadap GND), hasilnya sekitar…**
- A. 0 V
- B. 3,3 V
- C. 5 V
- D. 12 V

**Jawaban: A**
