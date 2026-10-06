# POST TEST — Pertemuan 10 — SMP

Sumber: SMP — Pertemuan 10: Kode Pertamaku di ESP32 (Blink LED)

> Untuk tutor: buat Google Form → Settings → **Make this a quiz**. Tiap soal = Multiple choice, 1 poin, isi kunci sesuai baris **Jawaban**. Aktifkan "Shuffle option order" kalau mau.

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Bagian `void setup()` dijalankan…**
- A. Terus-menerus selamanya
- B. Satu kali saat ESP32 baru menyala
- C. Hanya saat LED menyala
- D. Setiap 1 detik

**Jawaban: B**

---

**2. Perintah untuk MENYALAKAN LED adalah…**
- A. `digitalWrite(LED_PIN, LOW);`
- B. `pinMode(LED_PIN, INPUT);`
- C. `digitalWrite(LED_PIN, HIGH);`
- D. `delay(LED_PIN);`

**Jawaban: C**

---

**3. `delay(2000);` artinya ESP32 menunggu…**
- A. 2 detik
- B. 20 detik
- C. 2000 detik
- D. 0,2 detik

**Jawaban: A**

---

**4. Perhatikan kode di `loop()`:**
```cpp
Serial.println("A");
delay(1000);
Serial.println("B");
delay(1000);
```
**Yang muncul di Serial Monitor adalah…**
- A. A saja, sekali
- B. B, A, B, A, …
- C. A, B, A, B, … berulang terus
- D. AB sekali lalu berhenti

**Jawaban: C**

---

**5. LED dicolok di pin D18. Baris yang harus diubah adalah…**
- A. `Serial.begin(115200);`
- B. `#define LED_PIN 4` diganti `#define LED_PIN 18`
- C. `delay(1000);`
- D. Tidak perlu ubah apa pun

**Jawaban: B**
