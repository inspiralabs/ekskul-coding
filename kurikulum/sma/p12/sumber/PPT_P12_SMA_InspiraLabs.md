# P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMA awam: teks slide singkat, satu ide per slide, bahasa santai.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B,
     angka/string #8A6516; baris yang boleh diubah diberi latar #F3E6C4. Abaikan aturan "kode di card gelap". -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P12 SMA**

# Kontrol Kipas dari Dashboard: Manual & Otomatis

Satu klik di HP, kipas di meja ikut bergerak.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kamu masih di sekolah, tapi pengin kipas kamar sudah nyala pas kamu pulang. Mungkin nggak? Gimana perintah dari HP bisa sampai ke kipas?

Smart lamp dan smart AC sudah bisa begini. Hari ini alat buatan kalian juga.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab (+2 per siswa yang berani menjawab). Jawabannya dibahas di Topik 1 (slide Perintah Kipas: ESP32 yang Bertanya).

---

### Apa yang kita capai hari ini?

- **01 Kontrol Manual**: Nyalakan kipas dari HP, kenalan dengan PIN kelompok.
- **02 Mode Otomatis**: Kipas yang mikir sendiri pakai aturan suhu.
- **03 Kipas Nggak Nurut?**: Cara cepat membetulkan, plus bikin kipas lebih gesit.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Poin +2 untuk siswa yang bertanya atau menjawab (benar atau salah, yang penting berani). Utamakan yang belum pernah dapat. Pasangan: poin challenge untuk kedua anggota. Tutor mencatat di gradebook. Tidak ada PR hari ini.

---

### IoT Dua Arah
- P11: data **naik**: sensor → ESP32 → server → dashboard.
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Rakitan & firmware **tidak diubah**. Fitur kipas **sudah jadi** di dashboard kalian. Tugas kalian: **mencoba & membuktikan**.

```wiring
Judul: Jalur perintah turun: ESP32 → relay → kipas (rakitan P11, tidak diubah)
Komponen: ESP32 DevKit V1, breadboard, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D14 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: kabel biru D14 → relay IN ; kipas di terminal NO
```

> 🗣️ SPEAKER NOTES: Peran berdua: Pengendali (pegang HP/dashboard + PIN) & Pengamat (stopwatch, amati relay & kipas); tukar tiap topik. Peserta individu: HP sebagai stopwatch di tangan kiri.

---

### Perintah Kipas: ESP32 yang Bertanya
```
[Tombol di HP] ──► [Server] mencatat: "kipas sma-04 = NYALA"
                         ▲
                         │ tiap ±4 detik ESP32 lapor suhu,
                         │ server membalas: "fanOn": true
                         ▼
                    [ESP32] → relay klik → kipas berputar
```
- Server **tidak bisa** "mengetuk pintu" ESP32 yang ada di balik router sekolah.
- Jadi ESP32 yang **bertanya** tiap ±4 detik: *"Ada titipan buat aku?"* Mirip anak kos yang bolak-balik nanya ke ibu kos.
- Makanya jeda tombol → kipas **0 sampai ±4 detik**. Normal, bukan rusak.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: smart device di rumah juga "bertanya" atau terus terhubung ke server, bukan didatangi server. Firmware sebenarnya juga bisa menerima perintah langsung lewat jaringan lokal (route /fan), tapi server kita ada di internet, jadi yang bekerja di kelas adalah balasan tiap ±4 detik. Tidak perlu dibahas lebih dalam.

---

### PIN Kelompok: Lihat Boleh, Pencet Jangan
- Dashboard kalian **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhunya.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat.
- Jangan tulis PIN di website, foto, atau grup chat. PIN = kunci rumah.

> 🗣️ SPEAKER NOTES: Bagikan PIN ke masing-masing kelompok secara pribadi (kertas lipat), jangan dibacakan. Tanya kelas: "Bayangkan teman iseng matiin kipas kamarmu dari rumahnya. Makanya ada PIN."

---

### Tanya Jawab (+2)

**Kipas tidak langsung berubah saat tombol ditekan. Kenapa itu bukan kerusakan?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kontrol Manual. Minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: ESP32 baru tahu ada perintah saat lapor berikutnya ke server (tiap ±4 detik).

---

### Challenge 🟢 Easy — "Saklar dari HP" (+5)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Buka dashboard kelompok di **HP**: `https://sma-0X.inspiralabs.id`.
2. Pilih mode **Manual**, tekan tombol kipas besar, masukkan **PIN kelompok**.
3. Kipas di meja harus **menyala**. Tekan lagi: kipas **mati**.
4. Tunjukkan ke tutor: HP di tangan, kipas di meja ikut nurut.

---

### Manual vs Otomatis
| Mode | Siapa yang memutuskan | Contoh di dunia nyata |
|---|---|---|
| **Manual** | **Kamu**, lewat tombol | Saklar lampu, remote TV |
| **Otomatis** | **Aturan**: kalau suhu > ambang → kipas nyala | AC, kulkas, rice cooker |
- Di mode Otomatis, server membandingkan suhu terbaru dengan **ambang**. Di atas ambang → nyala. Di bawah → mati.
- Tekan tombol kipas saat Otomatis = **ambil alih** jadi Manual.

> 🗣️ SPEAKER NOTES: Tanya kelas: "Rice cooker tahu nasinya matang dari mana?" (sensor suhu + aturan). Hubungkan: alat kita sekarang juga punya "aturan" yang sama.

---

### Slider "Nyala Otomatis di Atas N°C"
- Slider **20–40°C**. Geser, lalu **lepas**: ambang baru dikirim ke server.
- Tips uji cepat: ambang = **suhu ruangan + 1°C**, lalu **genggam** sensor.
- Awas **cetak-cetek**: kalau ambang terlalu dekat suhu ruangan, kipas bisa nyala-mati terus. Geser ambang sedikit menjauh.

---

### Tanya Jawab (+2)

**Ambang 30°C, suhu kelas 29,9°C dan naik-turun sedikit. Apa yang terjadi pada kipas? Gimana cara mencegahnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Mode Otomatis. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: kipas nyala-mati bergantian (cetak-cetek), bikin relay cepat aus. Cegah dengan ambang yang tidak terlalu dekat suhu ruangan. Alat sungguhan memakai "zona aman": nyala di 30, baru mati di 29.

---

### Challenge 🟡 Medium — "Kipas Otomatis" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Pilih mode **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor DHT22. Catat: berapa detik sampai kipas **menyala sendiri**?
3. Lepas genggaman. Catat: berapa detik sampai kipas **mati sendiri**?
4. Tunjukkan ke tutor: kipas bergerak tanpa tombol disentuh.

---

### Kipas Nggak Nurut? Cek Ini
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Ditekan, > 10 detik tidak ada apa-apa | Serial Monitor: masih `kode respons: 200`? |
| Relay klik, kipas diam | Kabel COM, NO, dan kipas − ke GND |
| Kipas **kebalikan** dari dashboard | Kipas di NC? Kalau sudah di NO → slide berikut |
| Otomatis, kipas tidak mau nyala | Ambang terlalu tinggi, genggam lebih lama |

---

### Satu Kata untuk Kipas yang Kebalikan
```cpp
// potongan — firmware/sma_room_monitor/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul relay kita biasanya **active-LOW** → biarkan `true`.
- Dashboard bilang **mati** tapi kipas **berputar** (dan sebaliknya)? Ganti **satu kata** `true` → `false`, upload ulang. Kabel tidak perlu diubah.

> 🗣️ SPEAKER NOTES: Cukup praktisnya saja. Satu kalimat fail-safe: kipas dipasang di NO supaya kalau ESP32 mati/dicabut, kipas ikut mati. Tidak perlu dibahas lebih jauh.

---

### Tanya Jawab (+2)

**Dashboard bilang kipas MATI, tapi kipasnya berputar. Apa yang kamu cek dulu sebelum mengubah kode?**

> 🗣️ SPEAKER NOTES: Topik 3 — Kipas Nggak Nurut. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: cek dulu kabel kipas di NO (bukan NC). Kalau sudah di NO, baru ganti RELAY_ACTIVE_LOW.

---

### Challenge 🔴 Hard — "Kipas Lebih Gesit" (+15)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Mode **Manual**. Ukur jeda tombol → kipas **3 kali** pakai stopwatch, hitung rata-ratanya.
2. Di firmware, ubah satu angka:
```cpp
const unsigned long SEND_INTERVAL_MS = 4000;  // ubah jadi 2000
```
3. Upload, lalu ukur lagi 3 kali. Bandingkan rata-ratanya.
4. Jawab: kenapa angka ini **tidak boleh** di bawah 2000?
5. Kembalikan ke **4000**, upload ulang.

---

### Peta Petualangan IoT
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                           ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok  ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                                  ← HARI INI
[P13] Kustom dashboard + website online + Demo Day
```

> 🗣️ SPEAKER NOTES: Alat dikumpulkan ke tutor dalam keadaan utuh, dipakai lagi di Demo Day P13. Tidak ada yang perlu disiapkan siswa di rumah.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Dashboard Punya Kita + Demo Day** — ubah tampilan website, online di `sma-0X.inspiralabs.id`, lalu pamerkan alatnya.
