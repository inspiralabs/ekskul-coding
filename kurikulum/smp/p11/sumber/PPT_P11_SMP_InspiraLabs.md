# P11 SMP — Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P11 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide, nuansa main game (level, poin). -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P11 SMP**

# Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

Hari ini ESP32 kita punya "indera" pertama, dan napasmu bisa menggambar grafik.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Layar HP kamu bisa berputar sendiri saat HP dimiringkan. Siapa yang memberi tahu HP-nya?

Di dalam HP ada "indera" kecil yang tidak pernah kita lihat.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Peragakan dengan HP: miringkan, layar ikut berputar. Tampung 2–3 tebakan siswa (+2 per penebak) tanpa langsung dijawab. Jawabannya dibahas di slide "Sensor = Indera Benda Pintar".

---

### Apa yang kita capai hari ini?

- **01 Kenalan & Rakit DHT22**: Angka suhu muncul di laptop.
- **02 Main dengan Grafik Suhu**: Tiup sensornya, lihat grafiknya melonjak.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Perakit** | Memasang 3 kabel sensor |
| **Pengecek** | Membacakan checklist, cek kabel |
| **Operator** | Klik Upload, Serial Monitor & Plotter |
| **Pencatat** | Mencatat angka & poin |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Operator Topik 1 dan Topik 2 harus orang yang berbeda. Di Topik 2, siapa saja boleh meniup sensor.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Sama seperti P10. +2 untuk yang berani bertanya/menjawab, utamakan yang belum dapat. Poin challenge untuk setiap anggota kelompok yang ikut mengerjakan. Tidak ada PR.

---

### Sensor = Indera Benda Pintar

| Benda | Sensornya | Merasakan |
|---|---|---|
| HP | Sensor gerak | Miring atau tegak |
| HP | Sensor cahaya | Terang atau gelap (layar otomatis redup) |
| Pintu mall | Sensor gerak | Ada orang datang |
| **Alat kita** | **DHT22** | **Suhu & kelembapan udara** |

ESP32 = **otak**. Sensor = **indera**.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: HP tahu dimiringkan karena ada sensor gerak di dalamnya. Ingatkan kembali tebakan siswa tadi. Tanya: "Sensor apa lagi yang ada di HP kalian?" (sidik jari, kamera, mikrofon, GPS) +2 tiap jawaban baru.

---

### Kenalan: DHT22

- Sensor kecil pengukur **suhu (°C)** dan **kelembapan udara (%)**.
- **Kelembapan** = banyaknya uap air di udara. Napas kita lembap!
- Punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang di badannya = tempat udara masuk. **Jangan ditutup**.

> 🗣️ SPEAKER NOTES: Edarkan satu sensor supaya siswa bisa melihat tulisan +, out, − di modulnya. Sensor ini "lambat": dibaca paling cepat tiap 2 detik, sudah diatur di program jadi.

---

### Cara Rakit DHT22: Cuma 3 Kabel!

| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

LED di D2 dari P10 **boleh tetap terpasang**.

```wiring
Judul: Rakitan hari ini: sensor DHT22 di D4 (LED di D2 tetap terpasang)
Komponen: ESP32 DevKit V1, breadboard, 1 LED merah, 1 resistor 220Ω, modul DHT22 3-pin
Koneksi:
- ESP32 3V3 → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- DHT22 "+" → jalur + (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → jalur − (kabel hitam)
- ESP32 D2 → resistor 220Ω → kaki PANJANG LED (kabel biru)
- kaki pendek LED → jalur − (kabel hitam)
Sorot: kabel kuning out ke D4 ; jangan tertukar + dan −
```

> 🗣️ SPEAKER NOTES: Cabut USB dulu sebelum merakit. Kesalahan paling berbahaya: kabel + dan − tertukar → sensor panas. ESP32 punya 2 pin GND, boleh pakai yang mana saja (atau lewat jalur − breadboard). D4 ada di sisi kanan, di antara RX2 dan D2.

---

### Cek 5 Detik Sebelum Colok USB

- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan di modul: **+**, **out**, **−**.
- [ ] **+** ke 3V3, **out** ke D4, **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak goyang.
- [ ] Pengecek kelompok lain ikut cek.

> 🗣️ SPEAKER NOTES: Pengecek membacakan checklist keras-keras, Perakit menunjuk kabelnya. Urutan kaki tiap modul bisa beda, jadi selalu baca tulisannya.

---

### Praktek Bareng: Halo, Sensor!

1. Rakit, lalu centang semua checklist.
2. Colok USB. Buka `P11_1_BacaDHT22.ino` → **Upload**.
3. Buka **Serial Monitor** (115200).
4. Muncul `Suhu:28.40,Kelembapan:65.20` → rakitan **benar**!

File program jadi: `P11_1_BacaDHT22.ino` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: Cara upload sama persis seperti Blink di P10. Angka baru muncul tiap 2 detik. Rayakan angka suhu pertama tiap kelompok (quick win). Tanyakan: "Suhu kelas kita berapa? Cocok dengan yang kalian rasakan?"

---

### Tips Engineer: Kalau Sensor Diam

| Gejala | Coba ini |
|---|---|
| `Gagal baca sensor! Cek kabel.` terus | Cabut USB. Kabel **out** di **D4**? Ada kabel longgar? |
| Sensor terasa **panas** | **Cabut USB segera**. + dan − tertukar |
| Serial Monitor kosong | Tekan tombol **EN** (reset) di board |

> 🗣️ SPEAKER NOTES: Masalah lain (urusan tutor): tulisan acak ⸮⸮⸮ → pilih 115200 baud; error "DHT.h: No such file" saat Upload → library DHT belum terpasang (Level 3 P10); port tidak muncul → kabel USB data / driver. Bantu dengan pertanyaan: "Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?"

---

### Tanya Jawab (+2)

**Kenapa USB wajib dicabut sebelum memindah kabel sensor?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kenalan & Rakit DHT22. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: supaya kabel tidak sempat menyentuh pin yang salah saat listrik menyala (bisa korsleting atau sensor panas).

---

### Challenge 🟢 Easy — "Halo Sensor!" (+5)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. Angka suhu & kelembapan muncul di Serial Monitor.
2. Pencatat menulis: suhu kelas = **___ °C**, kelembapan = **___ %**.
3. Tunjukkan ke tutor!

---

### Serial Plotter = Grafik Ajaib

- Klik ikon **gelombang** di kanan atas (sebelah kaca pembesar), atau **Tools → Serial Plotter**.
- Pilih **115200 baud**.
- Muncul **2 garis**: Suhu dan Kelembapan.
- Mirip layar detak jantung di rumah sakit!

> 🗣️ SPEAKER NOTES: Program yang sama, tidak perlu upload ulang. Tulisan "Suhu:...,Kelembapan:..." itulah yang dibaca Serial Plotter dan diubah jadi garis. Grafik kosong? Cek baud 115200, lalu tutup dan buka lagi Serial Plotter. Grafik terlihat seperti tangga karena sensor dibaca tiap 2 detik.

---

### Praktek Bareng: Tiup & Genggam

1. **Tiup** pelan 5 detik dari jarak ±5 cm → garis **kelembapan** naik seperti gunung!
2. Diamkan → garisnya turun lagi pelan-pelan.
3. **Genggam** sensor 20 detik → garis **suhu** naik pelan.
4. Lepas → suhunya kembali turun.

> 🗣️ SPEAKER NOTES: Jangan meniup terlalu dekat sampai sensor basah, dan jangan dicelup air. Ajak seluruh kelas meniup bersamaan setelah hitungan 3, lalu lihat siapa yang gunungnya paling tinggi (quick win kedua). Kelompok yang belum berhasil di Topik 1 ikut melihat layar kelompok sebelah sambil tutor membantu.

---

### Tanya Jawab (+2)

**Saat sensor ditiup, kenapa garis kelembapan naik jauh lebih cepat daripada garis suhu?**

> 🗣️ SPEAKER NOTES: Topik 2 — Main dengan Grafik Suhu. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: napas kita mengandung banyak uap air, jadi kelembapan langsung melonjak. Suhu naik pelan karena badan sensor perlu waktu untuk ikut hangat.

---

### Challenge 🟡 Medium — "Gunung Tertinggi" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Catat kelembapan **sebelum** ditiup.
2. Buat gunung kelembapan **setinggi mungkin** (tiup maksimal 10 detik, sensor jangan sampai basah).
3. Catat angka **puncaknya**. Foto grafiknya, tunjukkan ke tutor.

---

### Challenge 🔴 Hard — "Detektif Sensor" (+15)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

Tutor menyabotase rakitanmu. Serial Monitor menulis `Gagal baca sensor!`. Ada **3 kesalahan**.
1. Temukan ketiganya.
2. Tulis: kabel mana, seharusnya ke mana.
3. Perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**

> 🗣️ SPEAKER NOTES: Sabotase pakai Kartu Sabotase (ekskulcoding.inspiralabs.id/sabotase/, pilih SMP) dengan USB dicabut, saat pemilik rakitan menunggu di luar meja. Catat 3 kartunya sebelum ditutup. Challenge ini untuk kelompok yang sudah lulus Easy.

---

### Peta Petualangan IoT

```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              ← HARI INI
[P12] Kirim suhu ke internet + dashboard kelompok
[P13] Foto, rumah alat & showcase
```

> 🗣️ SPEAKER NOTES: Minta siswa tidak membongkar rakitan DHT22: minggu depan rakitan yang sama dipakai untuk mengirim suhu ke internet. Kalau terpaksa dibongkar, foto dulu rakitannya.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 11" di Linktree sudah mengarah ke Google Form P11 SMP. Post-test dikerjakan sendiri-sendiri.

---

### Terima kasih!

**SAMPAI JUMPA DI P12!**

MINGGU DEPAN (P12): **Kirim Suhu ke Internet & Dashboard-mu**
