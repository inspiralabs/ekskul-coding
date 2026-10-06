# SMP — Pertemuan 13: Showcase Proyek Akhir 🏆

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Hari Ini Kalian Jadi Engineer! 👷
- 4 minggu lalu: belum pernah pegang ESP32.
- Hari ini: alat kalian **mengirim suhu ruangan ke internet**.
- Agenda: rapikan → pamerkan → refleksi.

---

### Slide 2 — Perjalanan Kita 🛤️
| Pertemuan | Yang kalian kuasai |
|---|---|
| P9 | Pin, breadboard, LED, resistor |
| P10 | `setup()` / `loop()`, `#define`, `Serial.println` |
| P11 | Membaca DHT22, `isnan()` |
| P12 | WiFi, kirim data ke dashboard |

---

### Slide 3 — Rahasia Semua Alat IoT: Input → Proses → Output 🔁
```
INPUT              PROSES                 OUTPUT
DHT22 membaca  →   ESP32 mengecek isnan,  →  Data muncul di dashboard
suhu & lembap      menyusun "surat" JSON      (dan Serial Monitor)
```
- Lampu otomatis, smartwatch, AC pintar: **semuanya pola yang sama**.

---

### Slide 4 — Tunjuk Bagiannya! 👉
Di file proyek akhir, tunjuk baris yang termasuk:
- **INPUT** → `dht.readTemperature()`, `dht.readHumidity()`
- **PROSES** → `if (isnan(...))`, `String json = ...`
- **OUTPUT** → `Serial.print(...)`, `http.POST(json)`

> 🗣️ SPEAKER NOTES: Tanya acak ke tiap kelompok. Ini pemanasan untuk presentasi.

---

### Slide 5 — Format Presentasi: 3 Kalimat Sakti 🎤
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling susah adalah **___**, kami mengatasinya dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

Lalu **demo**: tiup sensor → semua lihat angka di dashboard berubah.

---

### Slide 6 — Refleksi ✨
- Satu hal yang paling seru selama belajar hardware?
- Satu error yang paling bikin pusing, dan bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

### Challenge 🟢 Easy — "Siap Tampil" (wajib)
Checklist sebelum showcase:
- [ ] Serial Monitor menampilkan `kode respons: 200`
- [ ] Dashboard menampilkan data kelompokmu
- [ ] Kabel rapi, tidak ada yang longgar
- [ ] Alat bisa menyala pakai power bank (tanpa laptop)

---

### Challenge 🟡 Medium — "Latihan 3 Kalimat"
Isi 3 kalimat sakti (Slide 5) di kertas, lalu latihan presentasi ke kelompok sebelah. Kelompok sebelah wajib memberi **1 pertanyaan**.

---

### Challenge 🔴 Hard — "Lampu Tanda Terkirim" 💡 (opsional)
Buat **salinan** file proyek akhir (jangan ubah aslinya!). Tambahkan LED di **D2** yang **berkedip sekali setiap data berhasil terkirim** (kode respons 200).
Petunjuk:
1. Tambahkan `#define LED_PIN 2` dan `pinMode(LED_PIN, OUTPUT);`.
2. Cari baris `int responseCode = http.POST(json);`.
3. Di bawahnya, pakai `if (responseCode == 200) { ... }` untuk menyalakan LED sebentar.

---

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #18 (Social Proof & Authority — Bukti & Otoritas)

# "Belajar IoT dari nol sampai bisa bikin alat pemantau suhu sendiri pakai cara ini." 🚀

Isi slide:
- 🪜 **Roadmap 4 anak tangga** yang dipakai kelas kami:
  1. **Output dulu** → bikin LED nyala (paling cepat terlihat hasilnya = semangat naik).
  2. **Input** → baca 1 sensor saja sampai lancar.
  3. **Koneksi** → WiFi, uji pakai program mini.
  4. **Tampilkan** → kirim ke dashboard.
- 🔁 Kuncinya pola **Input → Proses → Output**, berlaku untuk hampir semua alat pintar.
- ⏱️ Satu anak tangga per minggu. **Jangan loncat** langsung ke proyek besar.
- 🧑‍🎓 Bukti: anak SMP usia 12–15 tahun bisa menyelesaikannya dalam **5 pertemuan**.

---

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. Pada proyek akhir, sensor DHT22 termasuk bagian…**
A. Output  
B. Server  
C. Dashboard  
D. Input

---

### Post-Test — Soal 2

**2. Baris yang berfungsi mengirim data ke server adalah…**
A. `dht.begin();`  
B. `pinMode(LED_PIN, OUTPUT);`  
C. `http.POST(json);`  
D. `delay(500);`

---

### Post-Test — Soal 3

**3. Urutan perjalanan data yang benar adalah…**
A. Dashboard → Server → ESP32 → DHT22
B. DHT22 → ESP32 → WiFi/Internet → Server → Dashboard
C. ESP32 → DHT22 → Dashboard → Server
D. Server → DHT22 → ESP32 → Dashboard

---

### Post-Test — Soal 4

**4. Dashboard tidak menampilkan data kelompokmu, padahal Serial Monitor menulis kode 200. Penyebab paling mungkin adalah…**
A. Sensor rusak  
B. `DEVICE_ID` di firmware berbeda dengan `MY_DEVICE_ID` di dashboard  
C. Resistor terbalik  
D. LED tidak menyala

---

### Post-Test — Soal 5

**5. Perhatikan kode:**
```cpp
if (responseCode == 200) {
  digitalWrite(LED_PIN, HIGH);
}
```
**Kapan LED menyala?**
A. Saat data berhasil diterima server  
B. Saat suhu 200 derajat  
C. Saat WiFi terputus  
D. Setiap 200 detik
