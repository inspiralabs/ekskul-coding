# P10 SMP — Upload Program Jadi & Rakit Sensor DHT22

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P10 SMP | nomor slide".
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

**P10 SMP**

# Upload Program Jadi & Rakit Sensor DHT22

Hari ini ESP32 kita mendapat program pertamanya, dan sensor suhunya mulai terpasang.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Lampu ESP32 menyala, tapi laptop sama sekali tidak bisa menemukannya. Kenapa ya?

Penyebabnya sering ada di benda yang paling sering kita sepelekan.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Upload Program Jadi**: Memasukkan program Blink ke ESP32 dan mengatasi upload gagal.
- **02 Rakit Sensor DHT22**: Merakit sensor suhu dengan aman dan mengeceknya lewat Serial Monitor.

---

### Misteri Minggu Lalu
- LED di pin 3V3 → menyala.
- LED di pin D2 → **tidak menyala**. Kenapa?
- Karena pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Kabar baik: programnya **sudah jadi**. Tugas kita: **upload** program dan **merakit sensor**.

---

### Upload: Mengisi "Otak" ESP32
- **Upload** = memindahkan program dari laptop ke ESP32 lewat kabel USB.
- Program **tersimpan** di ESP32. Dicabut dari laptop pun tetap jalan (pakai power bank).

| Barang | Catatan |
|---|---|
| Kabel USB **data** | Kabel charger biasa sering **tidak bisa** kirim data |
| VS Code + PlatformIO | Sudah dipasang di laptop |
| File program jadi | `P10_1_Blink.cpp` di folder **Kode** |

**4 langkah upload (hafalkan!):** Buka → Upload → Serial Monitor → Lihat alatnya.

> 🗣️ SPEAKER NOTES: Tekankan bahwa 4 langkah ini sama untuk semua pertemuan berikutnya, termasuk firmware proyek akhir. Siswa tidak perlu mengerti isi programnya hari ini.

---

### Praktek Bareng: Upload Blink
1. Cabut USB. Pindahkan kabel dari **3V3** ke **D2** (LED + resistor tetap seperti P9).
2. Colok USB. Salin isi `P10_1_Blink.cpp` ke `src/main.cpp`.
3. Klik **Upload** (ikon panah) → tunggu `SUCCESS`.
4. Klik **Serial Monitor** (ikon colokan) → muncul `LED nyala` / `LED mati`.
5. LED di breadboard **dan** lampu biru kecil di board berkedip bersamaan!

```wiring
Judul: LED sekarang dikendalikan program lewat pin D2
Komponen: ESP32 DevKit V1, breadboard, 1 LED merah, 1 resistor 220Ω
Koneksi:
- ESP32 D2 → resistor 220Ω (kabel biru)
- resistor 220Ω → kaki PANJANG LED (+)
- kaki pendek LED (−) → jalur − breadboard (kabel hitam)
- jalur − → ESP32 GND (kabel hitam)
Sorot: kabel yang dulu di 3V3 sekarang pindah ke D2 ; lampu biru bawaan board juga di GPIO 2
```

File program jadi: `P10_1_Blink.cpp` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak, program sudah benar, masalahnya di rakitan (pakai tabel troubleshooting P9).

---

### Tips Engineer: Kalau Upload Gagal

| Pesan / gejala | Penyebab | Solusi |
|---|---|---|
| Port tidak muncul | Kabel USB **charger**, driver belum ada | Ganti kabel **data**, pasang driver CP210x/CH340 |
| `Failed to connect to ESP32` | Belum masuk mode upload | Tahan **BOOT** saat `Connecting....` |
| `Access denied` / port sibuk | Serial Monitor masih terbuka | Tutup Serial Monitor, upload lagi |
| Tulisan acak `⸮⸮⸮` | Kecepatan tidak sama | `monitor_speed = 115200` |
| Lampu biru kedip, LED diam | Rakitan LED salah | Cek LED terbalik / satu baris / bukan di D2 |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi. Tunjukkan dua kabel USB yang mirip: satu kabel data, satu kabel charger. Ingatkan kembali tebakan siswa tadi.

---

### Forum Diskusi Live Coding

**Lampu biru di board berkedip, tapi LED di breadboard diam. Masalahnya di program atau di rakitan? Bagaimana kamu tahu?**

> 🗣️ SPEAKER NOTES: Topik 1 — Upload Program Jadi. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Kembar Kedip" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Cabut semua kabel LED, lalu rakit ulang LED di **D2** **tanpa melihat slide**. Berhasil kalau LED di breadboard berkedip **bersamaan** dengan lampu biru di board.

---

### Challenge 🟡 Medium — "Pindah Lampu" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟡**

1. Cabut USB. Pindahkan kabel LED dari **D2** ke **D18**.
2. Di `src/main.cpp`, ubah **satu angka** saja: `#define LED_PIN 2` → `#define LED_PIN 18`.
3. Upload. Amati: LED breadboard berkedip lagi? Lampu biru di board masih berkedip?
4. Tulis di kertas: kenapa lampu biru sekarang diam?
5. Kembalikan kabel ke **D2** dan angka ke **2**.

Download `P10_1_Blink.cpp` dari linktr.ee/InspiraLabs_SMP

---

### Kenalan: DHT22
- Sensor kecil yang mengukur **2 hal**: **suhu (°C)** dan **kelembapan udara (%)**.
- Modul kita punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang-lubang di badan sensor = tempat udara masuk. **Jangan ditutup** lakban/lem.
- Sensor ini "lambat": dibaca paling cepat **1 kali tiap 2 detik** (sudah diatur di program jadi).

---

### Cara Rakit DHT22

| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

```wiring
Judul: Rakitan lengkap hari ini: LED di D2 + sensor DHT22 di D4
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

> 🗣️ SPEAKER NOTES: Cabut USB dulu sebelum merakit. Error paling berbahaya: kabel + dan − tertukar → sensor panas. Minta siswa saling cek rakitan kelompok sebelah sebelum colok USB.

---

### Checklist Rakit (Sebelum Colok USB)
- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan kecil di modul: **+**, **out**, **−** (urutan tiap modul bisa beda!).
- [ ] **+** ke 3V3 (bukan VIN, bukan GND).
- [ ] **out** ke D4 (sisi kanan, di antara RX2 dan D2).
- [ ] **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak ada yang goyang/lepas.
- [ ] Teman kelompok sebelah sudah ikut mengecek.

---

### Praktek Bareng: Cek Rakitan Sensor
1. Rakit, lalu centang semua checklist.
2. Colok USB. Salin `P10_2_CekDHT22.cpp` ke `src/main.cpp` → **Upload** → **Serial Monitor**.
3. Muncul `Suhu: 28.40 C | Kelembapan: 65.20 %` → rakitan **benar**!
4. **Tiup** sensor pelan-pelan → kelembapan naik. **Genggam** 10 detik → suhu naik.

File program jadi: `P10_2_CekDHT22.cpp` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES — gejala umum: (1) `Gagal baca sensor! Cek kabel.` terus → kabel out tidak di D4, kabel longgar, atau + / − tertukar. (2) Sensor terasa panas → cabut USB segera, + dan − tertukar. (3) Tidak muncul apa-apa → tekan tombol EN (reset) di board. (4) Multimeter mode DC volt di kaki + dan − sensor harus ±3,3V.

---

### Forum Diskusi Live Coding

**Kenapa kita wajib mencabut USB sebelum memindah kabel sensor?**

> 🗣️ SPEAKER NOTES: Topik 2 — Rakit DHT22. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🔴 Hard — "Cari 3 Kabel yang Salah" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

Tutor memberi rakitan DHT22 (atau gambarnya) yang membuat Serial Monitor menulis `Gagal baca sensor!`. Ada **3 kesalahan pemasangan**.
1. Temukan ketiganya.
2. Tulis di kertas: kabel mana, seharusnya ke mana.
3. Perbaiki sampai angka suhu muncul. **Tidak boleh mengubah program.**

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED        (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22  ← HARI INI
[P11] Upload firmware proyek + jadi "dokter kabel"
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```

> 🗣️ SPEAKER NOTES: Minta siswa tidak membongkar rakitan DHT22. Kalau harus dibongkar, foto dulu rakitannya supaya minggu depan bisa dirakit ulang.

---

### Tugas 3 (dikerjakan di rumah)

Gambar **diagram rakitanmu** dengan tangan di kertas: ESP32, breadboard, LED + resistor di **D2**, dan DHT22 (+ ke 3V3, out ke D4, − ke GND). Beri warna kabel dan label nama pin di setiap ujung kabel. Foto, kumpulkan di P11.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 10" di Linktree sudah mengarah ke Google Form P10 SMP.

---

### Terima kasih!

**SAMPAI JUMPA DI P11!**

MINGGU DEPAN (P11): **Pasang Firmware Proyek & Jadi Dokter Kabel**
