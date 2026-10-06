# POST TEST — Pertemuan 11 — SMP

Sumber: SMP — Pertemuan 11: ESP32 Bisa Merasakan Suhu! (Sensor DHT22)

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Sensor DHT22 bisa mengukur…**
- A. Suhu dan kelembapan udara
- B. Cahaya dan suara
- C. Jarak dan gerakan
- D. Kecepatan angin

**Jawaban: A**

---

**2. Jeda minimal antar pembacaan DHT22 adalah…**
- A. 0,1 detik
- B. 0,5 detik
- C. 2 detik
- D. 1 menit

**Jawaban: C**

---

**3. Fungsi `isnan(suhu)` adalah…**
- A. Menaikkan suhu
- B. Mengecek apakah data suhu BUKAN angka (gagal dibaca)
- C. Menyalakan sensor
- D. Mengirim suhu ke laptop

**Jawaban: B**

---

**4. Perhatikan kode:**
```cpp
Serial.print("Suhu: ");
Serial.print(29.5);
Serial.println(" C");
```
**Yang muncul di Serial Monitor adalah…**
- A. `Suhu:` (baris 1), `29.5` (baris 2), `C` (baris 3)
- B. `Suhu: 29.50 C` dalam satu baris
- C. `29.5 Suhu C`
- D. Tidak muncul apa-apa

**Jawaban: B**

---

**5. Kode mana yang BENAR untuk "jika suhu lebih dari 30, tulis PANAS!"?**
- A. `if (suhu < 30) { Serial.println("PANAS!"); }`
- B. `if (suhu = 30) { Serial.println("PANAS!"); }`
- C. `if (PANAS > 30) { Serial.println(suhu); }`
- D. `if (suhu > 30) { Serial.println("PANAS!"); }`

**Jawaban: D**
