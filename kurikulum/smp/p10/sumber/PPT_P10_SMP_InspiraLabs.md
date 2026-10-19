# P10 SMP — Upload Program Jadi & Rakit Sensor DHT22

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P10 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide. -->

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

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1 (slide Tips Engineer).

---

### Apa yang kita capai hari ini?

- **01 Upload Program Jadi**: LED kedip pakai program Blink.
- **02 Rakit Sensor DHT22**: Angka suhu muncul di laptop.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Perakit** | Memasang kabel |
| **Pengecek** | Membacakan checklist, cek kabel |
| **Operator** | Klik Upload & Serial Monitor |
| **Pencatat** | Mencatat hasil challenge |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Kelompok 4 orang: 1 peran per orang. Tunjuk peran sekarang, jangan biarkan satu anak memegang laptop terus. Di Topik 2 semua bergeser satu peran.

---

### Misteri Minggu Lalu
- LED di pin **3V3** → menyala.
- LED di pin **D2** → **diam**. Kenapa?
- Pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Programnya **sudah jadi**. Kita tinggal memasukkannya.

> 🗣️ SPEAKER NOTES: Tanyakan dulu ke kelas sebelum membuka jawabannya. Ingatkan: di P9 "tanpa coding" artinya tanpa program, bukan tanpa listrik. ESP32 selalu butuh listrik dari kabel USB (laptop atau power bank).

---

### Upload = Memasang Aplikasi ke ESP32
- Seperti memasang aplikasi ke HP.
- **Laptop** = toko aplikasi. **Kabel USB** = jalannya. **ESP32** = HP-nya.
- Program **tersimpan** di ESP32. Dicabut dari laptop pun tetap ingat.
- Tapi tetap butuh **listrik**: laptop atau power bank.

---

### 4 Langkah Upload (dipakai sampai P13!)
1. **Buka** program jadi: double-click file `.ino` → terbuka di **Arduino IDE**.
2. **Upload** (tombol panah → di kiri atas) → tunggu tulisan `Done uploading`.
3. **Serial Monitor** (ikon kaca pembesar di kanan atas, pilih **115200 baud**) = kotak chat dari ESP32.
4. **Lihat alatnya**: sesuai harapan?

> 🗣️ SPEAKER NOTES: Tekankan bahwa 4 langkah ini sama untuk semua pertemuan berikutnya, termasuk firmware proyek akhir. Siswa tidak perlu mengerti isi programnya. Tunjukkan letak tombol Upload (→) di kiri atas dan ikon Serial Monitor (kaca pembesar) di kanan atas Arduino IDE.

---

### Praktek Bareng: Upload Blink
1. **Cabut USB**. Pindahkan kabel dari **3V3** ke **D2**.
2. Colok USB. Buka `P10_1_Blink.ino`. Di kotak **Select Board** pilih **ESP32 Dev Module** + port ESP32 (cukup sekali).
3. **Upload** → tunggu `Done uploading`.
4. **Serial Monitor** → muncul `LED nyala` / `LED mati`.
5. LED **dan** lampu biru di board berkedip bareng!

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

File program jadi: `P10_1_Blink.ino` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: Tunggu semua kelompok berkedip, lalu ajak tepuk tangan (quick win pertama). Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak, program sudah benar, masalahnya di rakitan (LED terbalik / dua kaki satu baris / kabel bukan di D2).

---

### Tips Engineer: Kalau Upload Gagal

| Gejala | Coba ini |
|---|---|
| Port tidak muncul | Ganti ke kabel USB **data** (kabel charger tidak bisa kirim program) |
| `Failed to connect` | Tahan tombol **BOOT** saat muncul `Connecting....` |
| Masih gagal terus | **Tools → Upload Speed → 115200**, lalu Upload lagi |
| Lampu biru kedip, LED diam | Cek rakitan LED |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik. Tunjukkan dua kabel USB yang mirip: satu kabel data, satu kabel charger. Ingatkan kembali tebakan siswa tadi. Masalah lain (urusan tutor): driver CP210x/CH340 belum terpasang → pasang driver; "Access denied/port sibuk" → tutup Serial Monitor lalu upload lagi; tulisan acak ⸮⸮⸮ → pilih 115200 baud di Serial Monitor. Upload gagal terus → Tools → Upload Speed → 115200.

---

### Forum Diskusi Live Coding

**Lampu biru di board berkedip, tapi LED di breadboard diam. Salah program atau salah rakitan? Kok tahu?**

> 🗣️ SPEAKER NOTES: Topik 1 — Upload Program Jadi. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: rakitan, karena lampu biru membuktikan programnya jalan.

---

### Challenge 🟢 Easy — "Kembar Kedip" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. **Cabut USB**, lepas semua kabel LED.
2. Rakit ulang LED di **D2** tanpa melihat slide.
3. Colok USB. Berhasil kalau LED kedip **bareng** lampu biru.

---

### Challenge 🟡 Medium — "Pindah Lampu" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟡**

1. **Cabut USB**. Pindahkan kabel LED dari **D2** ke **D18**.
2. Ubah **satu angka**: `#define LED_PIN 2` → `18`. Upload.
3. Lampu biru masih kedip? Tulis kenapa.
4. **Kembalikan** kabel ke D2 dan angka ke `2`.

Download folder `P10_1_Blink` dari linktr.ee/InspiraLabs_SMP

> 🗣️ SPEAKER NOTES: D18 ada di sisi kanan board, di antara D19 dan D5. Pastikan semua kelompok mengembalikan ke D2 dan angka 2 sebelum lanjut.

---

### Kenalan: DHT22
- Sensor kecil pengukur **suhu (°C)** dan **kelembapan udara (%)**.
- Punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang di badannya = tempat udara masuk. **Jangan ditutup**.

> 🗣️ SPEAKER NOTES: Edarkan satu sensor supaya siswa bisa melihat tulisan +, out, − di modulnya. Sensor ini "lambat": dibaca paling cepat tiap 2 detik, sudah diatur di program jadi.

---

### Cara Rakit DHT22

| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

LED di D2 **tetap terpasang**.

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

> 🗣️ SPEAKER NOTES: Cabut USB dulu sebelum merakit. Kesalahan paling berbahaya: kabel + dan − tertukar → sensor panas. ESP32 punya 2 pin GND, boleh pakai yang mana saja (atau lewat jalur − breadboard).

---

### Cek 5 Detik Sebelum Colok USB
- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan di modul: **+**, **out**, **−**.
- [ ] **+** ke 3V3, **out** ke D4, **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak goyang.
- [ ] Pengecek kelompok lain ikut cek.

> 🗣️ SPEAKER NOTES: Pengecek membacakan checklist keras-keras, Perakit menunjuk kabelnya. Urutan kaki tiap modul bisa beda, jadi selalu baca tulisannya. D4 ada di sisi kanan, di antara RX2 dan D2.

---

### Praktek Bareng: Cek Rakitan Sensor
1. Rakit, lalu centang semua checklist.
2. Colok USB. Buka `P10_2_CekDHT22.ino` → **Upload** → **Serial Monitor**.
3. Muncul `Suhu: 28.40 C` → rakitan **benar**!
4. **Tiup** pelan → kelembapan naik. **Genggam** 10 detik → suhu naik.

File program jadi: `P10_2_CekDHT22.ino` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES — gejala umum: (1) `Gagal baca sensor! Cek kabel.` terus → kabel out tidak di D4, kabel longgar, atau + / − tertukar. (2) Sensor terasa panas → cabut USB segera, + dan − tertukar. (3) Tidak muncul apa-apa → tekan tombol EN (reset) di board. (4) Multimeter mode DC volt di kaki + dan − sensor harus ±3,3V. Rayakan angka suhu pertama (quick win kedua).

---

### Forum Diskusi Live Coding

**Kenapa USB wajib dicabut sebelum memindah kabel sensor?**

> 🗣️ SPEAKER NOTES: Topik 2 — Rakit DHT22. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: supaya kabel tidak sempat menyentuh pin yang salah saat listrik menyala (bisa korsleting atau sensor panas).

---

### Challenge 🔴 Hard — "Detektif Sensor" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

Tutor memberi rakitan DHT22 yang menulis `Gagal baca sensor!`. Ada **3 kesalahan**.
1. Temukan ketiganya.
2. Tulis: kabel mana, seharusnya ke mana.
3. Perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**

> 🗣️ SPEAKER NOTES: Kelompok yang belum selesai Praktek Bareng boleh menyelesaikan rakitannya dulu. Challenge ini untuk kelompok yang sudah berhasil.

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

Gambar **rakitanmu** di kertas: ESP32, LED di **D2**, dan DHT22 (+ ke 3V3, out ke D4, − ke GND). Warnai kabelnya dan tulis nama pin di ujungnya. Foto, kumpulkan di P11.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 10" di Linktree sudah mengarah ke Google Form P10 SMP. Post-test dikerjakan sendiri-sendiri, bukan per kelompok.

---

### Terima kasih!

**SAMPAI JUMPA DI P11!**

MINGGU DEPAN (P11): **Pasang Firmware Proyek & Jadi Dokter Kabel**
