# POST TEST — Pertemuan 9 — SMA

Sumber: SMA — Pertemuan 9: Anatomi Sistem IoT — ESP32, Sensor, dan Relay

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Pin ESP32 yang hanya bisa dipakai sebagai INPUT adalah…**
- A. GPIO 4
- B. GPIO 18
- C. GPIO 34
- D. GPIO 23

**Jawaban: C**

---

**2. Mengapa template proyek mengganti `RELAY_PIN` dari 5 ke 18?**
- A. GPIO 5 tidak bisa OUTPUT
- B. GPIO 5 adalah strapping pin yang bisa glitch saat booting
- C. GPIO 18 lebih cepat
- D. GPIO 5 khusus untuk WiFi

**Jawaban: B**

---

**3. Pada relay, terminal yang tersambung ke COM HANYA saat relay aktif adalah…**
- A. NO
- B. NC
- C. VCC
- D. IN

**Jawaban: A**

---

**4. Modul relay active-LOW. Kode mana yang MENYALAKAN kipas?**
- A. `digitalWrite(RELAY_PIN, HIGH);`
- B. `digitalWrite(RELAY_PIN, LOW);`
- C. `pinMode(RELAY_PIN, INPUT);`
- D. `analogRead(RELAY_PIN);`

**Jawaban: B**

---

**5. Pasangkan dengan benar: (1) DHT22, (2) Relay, (3) ESP32 ↔ (a) Aktuator/saklar beban, (b) Mikrokontroler pemroses, (c) Sensor input**
- A. 1-a, 2-b, 3-c
- B. 1-c, 2-b, 3-a
- C. 1-b, 2-c, 3-a
- D. 1-c, 2-a, 3-b

**Jawaban: D**
