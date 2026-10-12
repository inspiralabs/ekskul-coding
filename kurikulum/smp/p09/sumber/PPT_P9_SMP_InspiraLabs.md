# P9 SMP — Kenalan dengan ESP32 & Rangkaian LED Pertama

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P9 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P9 SMP**

# Kenalan dengan ESP32 & Rangkaian LED Pertama

Dari dunia layar ke dunia nyata: hari ini kita menyalakan lampu pertama dengan ESP32.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kenapa LED bisa langsung rusak kalau dicolok tanpa satu komponen kecil?

Lampu indikator di charger, TV, dan router semuanya memakai "pengaman" yang sama.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 2.

---

### Apa yang kita capai hari ini?

- **01 Kenalan ESP32 & Pin**: Mengenal ESP32 sebagai "otak" alat dan pin-pin pentingnya.
- **02 Breadboard, LED & Resistor**: Merakit rangkaian LED pertama tanpa coding.

---

### Selamat Datang di Dunia Hardware!
- 8 pertemuan kemarin: kita bikin **website** (dunia layar).
- Mulai hari ini: kita bikin **alat** (dunia nyata).
- Tujuan akhir: alat pemantau suhu ruangan + dashboard web buatan kalian sendiri.

> 🗣️ SPEAKER NOTES: Tunjukkan alat proyek akhir + dashboard live. Biarkan siswa meniup sensor dan melihat angka suhu naik di layar. Ini pemancing semangat.

---

### Kenalan: ESP32 = "Otak" Alat Kita
- ESP32 adalah komputer **super kecil** (mikrokontroler).
- Bisa: menyalakan lampu, membaca sensor, dan **konek WiFi**.
- Analogi: kalau alat kita itu robot, ESP32 adalah **otaknya**, pin adalah **tangan & kakinya**.

---

### Pin: Kaki-Kaki ESP32
- Kaki-kaki besi di pinggir board = **pin**.
- Tiap pin punya **nomor** (tulisan kecil: D4, D2, 3V3, GND…).
- 3 pin yang wajib kenal hari ini:

| Pin | Fungsi | Analogi |
|---|---|---|
| **3V3** | Sumber listrik (+) 3,3 volt | Keran air |
| **GND** | Jalur pulang listrik (−) | Saluran pembuangan |
| **D4 (GPIO 4)** | Pin yang nanti dipakai sensor suhu | "Telinga" ESP32 |
| **D2 (GPIO 2)** | Pin untuk LED berkedip di P10 (ada lampu biru bawaan di board) | "Mulut" ESP32 |

```wiring
Judul: Kenalan pin penting ESP32
Komponen: ESP32 DevKit V1 saja (tanpa kabel)
Koneksi: (tidak ada kabel)
Sorot: pin 3V3 (lingkaran merah, label "Keran listrik +"), pin GND (lingkaran hitam, label "Saluran pulang −"), pin D4 (lingkaran kuning, label "Nanti untuk sensor suhu"), pin D2 (lingkaran biru, label "Nanti untuk LED berkedip")
```

> 🗣️ SPEAKER NOTES: Minta tiap kelompok menunjuk 3V3, GND, dan D4 di board-nya sendiri. Sambungkan ke proyek akhir: "Di kode proyek akhir nanti ada tulisan `DHT_PIN 4`. Angka 4 itu kaki yang barusan kalian tunjuk."

---

### Forum Diskusi Live Coding

**Kalau ESP32 itu otak, kenapa dia butuh pin? Sebutkan 3 pin yang kita kenal hari ini dan gunanya!**

> 🗣️ SPEAKER NOTES: Topik 1 — Kenalan ESP32 & Pin. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Breadboard: Papan Colok Tanpa Solder
- Lubang-lubang di breadboard **tersambung di dalam**.
- **Baris pendek** (a–e, f–j) tersambung **mendatar per nomor**.
- **Jalur panjang** di pinggir (+ dan −) tersambung **memanjang**.
- Parit di tengah = pemisah, kiri dan kanan **tidak** tersambung.

```wiring
Judul: Jalur tersembunyi di dalam breadboard
Komponen: breadboard saja (tanpa ESP32, tanpa komponen)
Koneksi: (tidak ada kabel) — gambar garis warna transparan di atas lubang yang tersambung:
- tiap nomor baris kolom a–e tersambung MENDATAR (garis hijau), begitu juga f–j
- jalur + (garis merah) dan − (garis biru) di pinggir tersambung MEMANJANG
- parit tengah = pemisah, tidak ada garis yang menyeberang
Sorot: "a–e tersambung", "parit = putus", "jalur + dan − memanjang"
```

> 🗣️ SPEAKER NOTES: Gambar breadboard dengan garis warna yang menunjukkan jalur tersambung. Error umum: siswa menancapkan dua kaki LED di nomor baris yang sama → LED korsleting, tidak menyala.

---

### LED: Lampu yang Punya Arah
- LED hanya menyala kalau dipasang **searah**.
- **Kaki panjang = + (anoda)**, **kaki pendek = − (katoda)**.
- Kebalik? Tidak rusak, tapi **tidak menyala**.

---

### Resistor: "Rem" untuk Listrik
- Resistor **membatasi arus** supaya LED tidak kepanasan & cepat rusak.
- Pakai **220Ω** (gelang merah-merah-coklat).
- Resistor **tidak punya arah**, boleh dibalik.

---

### Rumus Rangkaian Hari Ini
```
3V3 (+) → resistor 220Ω → kaki PANJANG LED → kaki PENDEK LED → GND (−)
```
- Listrik harus jalan **memutar penuh** (dari + kembali ke −). Itulah "rangkaian tertutup".

---

### Praktek Bareng: LED Pertamaku
1. Cabut ESP32 dari USB dulu (rakit dalam keadaan **mati**).
2. Tancapkan LED di breadboard: kaki panjang di baris 10, kaki pendek di baris 11.
3. Resistor: dari baris 10 ke jalur **+** pinggir.
4. Kabel jumper: jalur **+** → pin **3V3** ESP32.
5. Kabel jumper: baris 11 → pin **GND** ESP32.
6. Cek ulang → colok USB → LED menyala!

```wiring
Judul: LED pertama, listrik langsung dari pin 3V3 (tanpa kode)
Komponen: ESP32 DevKit V1, breadboard, 1 LED merah, 1 resistor 220Ω
Koneksi:
- ESP32 3V3 → jalur + breadboard (kabel merah)
- jalur + → resistor 220Ω → baris 10 (kaki PANJANG LED / +)
- baris 11 (kaki pendek LED / −) → jalur − breadboard (kabel hitam)
- jalur − → ESP32 GND (kabel hitam)
Sorot: kaki panjang LED = "+" ; resistor 220Ω sebagai "rem" arus
```

> 🗣️ SPEAKER NOTES: Tunggu semua kelompok menyala sebelum lanjut. Kalau tidak menyala, cek urutan ini: (1) LED terbalik? (2) dua kaki LED satu baris? (3) kabel di 3V3/GND yang benar? (4) USB sudah tercolok & lampu merah ESP32 menyala?

---

### Tips Engineer: Aturan Aman Merangkai LED

- LED langsung ke sumber listrik → arus terlalu besar → LED panas, redup, lalu mati permanen.
- Selalu: **sumber → resistor → LED → GND**.
- Untuk ESP32 (3,3V): resistor **220Ω–330Ω** aman untuk hampir semua LED.
- **Tes hardware dulu tanpa kode.** Kalau LED menyala dari pin 3V3, rangkaian benar. Kalau nanti tidak menyala saat diprogram, berarti masalahnya di **kode**, bukan di kabel.
- **Cek 4 hal sebelum colok USB:** kaki panjang LED di sisi +, dua kaki LED beda baris, ada resistor di jalurnya, kabel benar-benar di pin 3V3 & GND.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi. Ingatkan kembali tebakan siswa tadi, lalu bandingkan dengan jawabannya.

---

### Forum Diskusi Live Coding

**LED tidak menyala padahal semua kabel sudah tercolok. Apa saja kemungkinan penyebabnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Breadboard, LED & Resistor. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Nyalakan Lagi" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟢**

Lepas semua, lalu rakit ulang **LED warna lain** tanpa melihat slide 8. Berhasil menyala = lulus.

---

### Challenge 🟡 Medium — "Detektif Rangkaian" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

Tutor memberi rangkaian yang **LED-nya tidak menyala**. Ada **3 kesalahan** di rangkaian itu. Temukan, tulis di kertas, lalu perbaiki sampai menyala.

---

### Challenge 🔴 Hard — "Dua Lampu Sekaligus" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Buat **2 LED menyala bersamaan** dari 3V3 (masing-masing LED pakai resistornya sendiri).
2. Di kertas, gambar letak pin **3V3, GND, dan D4** pada board kalian.
3. Bonus: tebak, kalau LED dicabut dari 3V3 dan dicolok ke D2, apakah langsung menyala? Kenapa? (Jawabannya dibahas di P10.)

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED        ← HARI INI
[P10] Upload program jadi (Blink) + rakit DHT22
[P11] Upload firmware proyek + jadi "dokter kabel"
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 9" di Linktree sudah mengarah ke Google Form P9 SMP.

---

### Terima kasih!

**SAMPAI JUMPA DI P10!**

MINGGU DEPAN (P10): **Upload Program Jadi & Rakit Sensor DHT22**
