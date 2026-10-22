PROMPT P11 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P11 SMP — Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

BRAND SYSTEM — WAJIB KONSISTEN DI SEMUA SLIDE:
- Warna Maroon: #7A1F2B (background utama/aksen dominan)
- Warna Maroon Gelap: #5A1620 (aksen dekoratif/kartu gelap)
- Warna Gold: #C9A24B (highlight, badge, border aksen)
- Warna Gold Muda: #E8D9B5 (background lembut/badge terang)
- Warna Off-White: #FAF8F5 (background slide terang)
- Warna teks gelap: #2B2320
- Warna teks abu: #6B5F58
- Font judul: serif elegan dan tegas
- Font body: sans-serif bersih dan mudah dibaca
- Gaya visual: rounded corners di semua card/badge, soft drop shadow pada card putih, lingkaran dekoratif semi-transparan di pojok slide cover/penutup
- JANGAN pakai garis/stripe aksen horizontal di bawah judul (dianggap kurang premium)
- Ukuran slide: widescreen 16:9

CARA MEMBACA ISI SLIDE (di antara penanda MULAI/SELESAI ISI SLIDE):
- Baris paling atas (# Judul) BUKAN slide, hanya nama pertemuan (dipakai di footer).
- Setiap bagian yang dipisah garis --- = 1 slide, urutan PERSIS seperti di isi. Jangan memindah, menggabung, atau menghapus slide.
- Komentar <!-- ... --> adalah catatan untukmu, jangan ditampilkan.
- Baris berawalan "> 🗣️ SPEAKER NOTES" masuk ke SPEAKER NOTES slide itu, JANGAN tampil di slide.
- Layout tiap slide kamu tentukan sendiri sesuai isi (card, tabel, kode, diagram), tetap dalam brand system.

POLA SLIDE (gaya deck P7 SMA InspiraLabs):
- Slide 1 "LINK & QR CODE": label kecil "LINK & QR CODE", judul "Akses Materi, Challenge, & Post Test", paragraf penjelasan, link Linktree besar, QR code dari link itu di sisi kanan. Background maroon, lingkaran dekoratif semi-transparan.
- Slide 2 "COVER": cover pertemuan. Label kecil "P11 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi" / "Tanya Jawab": label kecil sesuai judul slide, pertanyaan besar di tengah, layout lega. Kalau judulnya memuat poin (mis. "+2"), tampilkan sebagai badge gold.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge poin sesuai angka di judul (mis. "+5", "+10", "+15"), instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P11 SMP | nomor slide" (slide Linktree tanpa nomor).
- Teks tidak boleh keluar dari slide. Kalau isi terlalu panjang, kecilkan font atau pecah jadi 2 slide berurutan dengan judul + "(lanjutan)".

GAMBAR RANGKAIAN (bagian berlabel "wiring" di isi slide):
1. Setiap bagian berlabel "wiring" adalah PERMINTAAN GAMBAR, bukan teks slide. Ganti dengan 1 gambar diagram rangkaian di slide yang sama.
2. Gaya diagram: flat, tampak atas, garis kabel tebal, label jelas, mirip diagram Fritzing. Latar & bingkai mengikuti brand (off-white, aksen maroon/gold).
3. Gambar HANYA sambungan yang tertulis. Jangan menambah atau mengarang kabel/pin.
4. Setiap ujung kabel diberi label nama pin ("3V3", "GND", "D4", "VIN", ...).
5. Warna kabel: Merah = 3V3/VIN · Hitam = GND · Kuning = data sensor · Biru = sinyal kontrol (LED/relay IN) · Oranye = jalur beban relay (COM/NO).
6. Komponen: LED kaki PANJANG (+) lebih panjang & berlabel "+"; resistor 220Ω gelang merah-merah-coklat; DHT22 modul 3-pin ("+", "out", "−"); relay 1-channel modul biru ("VCC, GND, IN" dan "NO, COM, NC"); breadboard dengan jalur + (merah) dan − (biru).
7. ESP32 DevKit V1 30-pin, antena di atas, USB di bawah. Urutan pin dari atas ke bawah:
   KIRI : EN, VP(36), VN(39), D34, D35, D32, D33, D25, D26, D27, D14, D12, D13, GND, VIN
   KANAN: D23, D22, TX0, RX0, D21, D19, D18, D5, TX2, RX2, D4, D2, D15, GND, 3V3
   Beri warna hanya pada pin yang dipakai.
8. "Sorot" = beri panah/callout. "Judul" = caption kecil di bawah gambar.
9. Kalau tidak bisa menggambar diagram yang akurat, JANGAN pakai gambar AI. Buat tabel sambungan rapi (Dari → Ke, warna kabel) dan tulis "[GANTI DENGAN SCREENSHOT WOKWI]" di slide itu.

---------- MULAI ISI SLIDE ----------

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

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P11 SMP — Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

BRAND SYSTEM — WAJIB DIIKUTI KONSISTEN:
- Warna Maroon: #7A1F2B (untuk heading utama, judul besar)
- Warna Maroon Gelap: #5A1620 (untuk aksen/subjudul)
- Warna Gold: #C9A24B (untuk garis pembatas, highlight, badge)
- Warna Gold Muda: #E8D9B5 (untuk background callout box)
- Warna Off-White: #FAF8F5 (background box info)
- Warna teks utama: #2B2320 (hampir hitam, bukan pure black)
- Warna teks sekunder: #6B5F58 (abu kecoklatan untuk caption/italic)
- Font judul: gaya serif elegan (Cambria/Georgia)
- Font body: sans-serif bersih (Calibri)

STRUKTUR DOKUMEN:
- Cover halaman pertama: nama InspiraLabs, judul materi besar, tabel info (jenjang/pertemuan/durasi/dll) dengan header row warna gold muda
- Setiap heading besar (##) pakai warna maroon dengan garis bawah tipis gold
- Callout box / kotak info penting: background off-white atau gold muda, border kiri tebal warna maroon atau gold, sesuai konteks (info = gold, penting/warning = maroon)
- Tabel: header row background maroon dengan teks putih, baris isi bergantian putih/gold muda
- Blok kode/pseudocode: font monospace, background abu muda, ditampilkan utuh
- Section Post-Test: setiap soal pilihan ganda diberi jarak jelas, jawaban ditandai bold+italic
- Section "Pembuka Materi": callout gold berisi tagline & pertanyaan pemantik
- Section "Konten Reels": callout khusus bertuliskan "Khusus tim InspiraLabs, tidak ditampilkan di slide", karena ini dibaca instruktur untuk rekaman konten
- Section "KHUSUS TUTOR": beri callout maroon "Jangan ditampilkan ke siswa"
- Footer tiap halaman: nama pertemuan + nomor halaman
- Gunakan heading hierarchy Google Docs yang proper (Heading 1, Heading 2, dst) sesuai struktur # ## ### di isi. Spacing antar section konsisten, rapi seperti materi training profesional, bukan dokumen polos.

---------- MULAI ISI MATERI AJAR ----------

# SMP — Pertemuan 11: Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 30 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu membaca data dari sensor DHT22 (suhu & kelembapan via Serial Monitor) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Potongan proyek akhir yang dibedah | Baris `#define DHT_PIN 4` di `smp/firmware/smp_room_monitor/smp_room_monitor.ino` → kaki **out** DHT22 dicolok ke **D4**. Hari ini siswa **merakit** sensornya (3 kabel) dan membaca angkanya dengan program jadi `P11_1_BacaDHT22.ino`, lalu bermain dengan grafiknya di **Serial Plotter**. Rakitan ini dipakai utuh untuk firmware proyek di P12. **Siswa tidak menulis kode.** |

## Alat & bahan (per kelompok/individu)

- Rakitan LED dari P10 (ESP32 + LED di D2) di breadboard. LED boleh tetap terpasang.
- Modul DHT22 (3 kaki: **+**, **out**, **−**) + 3 kabel jumper (merah, kuning, hitam)
- Kabel USB **data** + laptop yang sudah lulus 3 level di P10 (Arduino IDE + board ESP32 + library DHT)
- Folder **Kode** pertemuan ini (Drive): `P11_1_BacaDHT22` (berisi 1 file `.ino`)
- Untuk Challenge Hard: halaman Kartu Sabotase `ekskulcoding.inspiralabs.id/sabotase/` di HP tutor

## Persiapan tutor sebelum kelas

1. Jalankan `SCRIPT_P11_SMP.gs` supaya folder **Kode** dan Google Form post-test ada di Drive. Pasang link-nya di Linktree.
2. Pastikan semua laptop sudah lulus Level 2 & 3 dari P10 (catatan papan P10). Di tiap laptop buka `P11_1_BacaDHT22.ino` → **Verify (✓)** sekali.
3. Siapkan 2–3 DHT22 & jumper cadangan, 2–3 kabel USB data cadangan.
4. Coba sendiri Serial Plotter dengan 1 rakitan: tiup sensor, pastikan garis kelembapan melonjak.
5. Panduan lengkap (timeline per menit, kalimat kunci, troubleshooting): `kurikulum/smp/p11/Panduan_Pengajar_P11_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Bagikan kit, peran, cara dapat poin |
| 5–11 | Pembuka materi | Cover + pemantik + sensor = indera + kenalan DHT22 |
| 11–22 | Praktek rakit | Cara rakit 3 kabel + cek 5 detik |
| 22–30 | Praktek bersama | Upload `P11_1_BacaDHT22.ino`, Serial Monitor, tips kalau sensor diam |
| 30–32 | Tanya Jawab | Topik 1 |
| 32–36 | 🟢 Challenge Easy | Halo Sensor! |
| 36–40 | Materi | Serial Plotter = grafik ajaib. **Ganti peran.** |
| 40–48 | Praktek bersama | Tiup & genggam, lihat grafiknya |
| 48–50 | Tanya Jawab | Topik 2 |
| 50–55 | 🟡 Challenge Medium | Gunung Tertinggi |
| 55–62 | 🔴 Challenge Hard | Detektif Sensor (untuk yang sudah lulus Easy) |
| 62–63 | Peta petualangan | |
| 63–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Cara Dapat Poin → Sensor = Indera Benda Pintar → Kenalan: DHT22 → Cara Rakit DHT22 → Cek 5 Detik Sebelum Colok USB → Praktek Bareng: Halo, Sensor! → Tips Engineer: Kalau Sensor Diam → 💬 Tanya Jawab → 🟢 Easy → Serial Plotter = Grafik Ajaib → Praktek Bareng: Tiup & Genggam → 💬 Tanya Jawab → 🟡 Medium → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: kalau merakit molor, Challenge Hard dilewati. Yang wajib hari ini: angka suhu muncul **dan** semua kelompok sempat meniup sensor sambil melihat grafiknya.

---

## Slide

### Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Perakit** | Memasang 3 kabel sensor |
| **Pengecek** | Membacakan checklist, cek kabel |
| **Operator** | Klik Upload, Serial Monitor & Plotter |
| **Pencatat** | Mencatat angka & poin |

- Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Cara Dapat Poin Hari Ini 🏅

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

### Sensor = Indera Benda Pintar 👀

| Benda | Sensornya | Merasakan |
|---|---|---|
| HP | Sensor gerak | Miring atau tegak |
| HP | Sensor cahaya | Terang atau gelap (layar otomatis redup) |
| Pintu mall | Sensor gerak | Ada orang datang |
| **Alat kita** | **DHT22** | **Suhu & kelembapan udara** |

- ESP32 = **otak**. Sensor = **indera**.

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Minta siswa menyebut sensor lain di HP (sidik jari, kamera, mikrofon, GPS), +2 tiap jawaban baru.

### Kenalan: DHT22 🌡️
- Sensor kecil pengukur **suhu (°C)** dan **kelembapan udara (%)**.
- **Kelembapan** = banyaknya uap air di udara. Napas kita lembap!
- Punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang di badannya = tempat udara masuk. **Jangan ditutup**.

> Catatan tutor: Sensor ini dibaca paling cepat tiap 2 detik, sudah diatur di program jadi.

### Cara Rakit DHT22: Cuma 3 Kabel! 🔌

| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

- LED di D2 dari P10 **boleh tetap terpasang**.

> Catatan tutor: Cabut USB dulu sebelum merakit. Kesalahan paling berbahaya: kabel + dan − tertukar → sensor panas. ESP32 punya 2 pin GND, boleh pakai yang mana saja (atau lewat jalur − breadboard). D4 ada di sisi kanan board, di antara RX2 dan D2.

### Cek 5 Detik Sebelum Colok USB ✅
- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan di modul: **+**, **out**, **−**.
- [ ] **+** ke 3V3, **out** ke D4, **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak goyang.
- [ ] Pengecek kelompok lain ikut cek.

> Catatan tutor: Urutan kaki tiap modul bisa beda, jadi selalu baca tulisannya.

### Praktek Bareng: Halo, Sensor! 👋
1. Rakit, lalu centang semua checklist.
2. Colok USB. Buka `P11_1_BacaDHT22.ino` → **Upload**.
3. Buka **Serial Monitor** (115200).
4. Muncul `Suhu:28.40,Kelembapan:65.20` → rakitan **benar**!

```cpp
// potongan P11_1_BacaDHT22.ino
#define DHT_PIN 4               // kaki "out" DHT22 di pin D4

  // Bentuk "Nama:angka,Nama:angka" bisa dibaca Serial Monitor DAN Serial Plotter
  Serial.print("Suhu:");
  Serial.print(suhu);
  Serial.print(",Kelembapan:");
  Serial.println(lembap);
```

> Catatan tutor: Cara upload sama persis seperti Blink di P10. Rayakan angka suhu pertama tiap kelompok.

### Tips Engineer: Kalau Sensor Diam 🛠️

| Gejala | Coba ini |
|---|---|
| `Gagal baca sensor! Cek kabel.` terus | Cabut USB. Kabel **out** di **D4**? Ada kabel longgar? |
| Sensor terasa **panas** | **Cabut USB segera**. + dan − tertukar |
| Serial Monitor kosong | Tekan tombol **EN** (reset) di board |

> Catatan tutor: Masalah lain: tulisan acak `⸮⸮⸮` → pilih **115200 baud**; `DHT.h: No such file` → library DHT belum terpasang (Level 3 P10); port tidak muncul → kabel data / driver.

### Serial Plotter = Grafik Ajaib 📈
- Klik ikon **gelombang** di kanan atas (sebelah kaca pembesar), atau **Tools → Serial Plotter**.
- Pilih **115200 baud**.
- Muncul **2 garis**: Suhu dan Kelembapan.
- Mirip layar detak jantung di rumah sakit!

> Catatan tutor: Program yang sama, tidak perlu upload ulang. Grafik kosong? Cek baud 115200, tutup lalu buka lagi Serial Plotter.

### Praktek Bareng: Tiup & Genggam 💨✊
1. **Tiup** pelan 5 detik dari jarak ±5 cm → garis **kelembapan** naik seperti gunung!
2. Diamkan → garisnya turun lagi pelan-pelan.
3. **Genggam** sensor 20 detik → garis **suhu** naik pelan.
4. Lepas → suhunya kembali turun.

> Catatan tutor: Jangan meniup terlalu dekat sampai sensor basah. Ajak seluruh kelas meniup bersamaan setelah hitungan 3.

### Peta Petualangan IoT 🗺️
```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              ← HARI INI
[P12] Kirim suhu ke internet + dashboard kelompok
[P13] Foto, rumah alat & showcase
```
> Catatan tutor: Minta siswa **tidak membongkar** rakitan DHT22: dipakai lagi di P12. Kalau terpaksa dibongkar, foto dulu rakitannya.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** Layar HP kamu bisa berputar sendiri saat HP dimiringkan. Siapa yang memberi tahu HP-nya?
- **Topik 1 — Kenalan & Rakit DHT22:** Kenapa USB wajib dicabut sebelum memindah kabel sensor?
- **Topik 2 — Main dengan Grafik Suhu:** Saat sensor ditiup, kenapa garis kelembapan naik jauh lebih cepat daripada garis suhu?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Halo Sensor!" (+5)
1. Angka suhu & kelembapan muncul di Serial Monitor.
2. Pencatat menulis: suhu kelas = **___ °C**, kelembapan = **___ %**.
3. Tunjukkan ke tutor!

### 🟡 Medium — "Gunung Tertinggi" (+10) ⛰️
1. Catat kelembapan **sebelum** ditiup.
2. Buat gunung kelembapan **setinggi mungkin** (tiup maksimal 10 detik, sensor jangan sampai basah).
3. Catat angka **puncaknya**. Foto grafiknya, tunjukkan ke tutor.

### 🔴 Hard — "Detektif Sensor" (+15) 🔍
Tutor menyabotase rakitanmu. Serial Monitor menulis `Gagal baca sensor!`. Ada **3 kesalahan**.
1. Temukan ketiganya.
2. Tulis: kabel mana, seharusnya ke mana.
3. Perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Hari ini ESP32 kita punya "indera" pertama, dan napasmu bisa menggambar grafik.
- **Pertanyaan pemantik:** Layar HP kamu bisa berputar sendiri saat HP dimiringkan. Siapa yang memberi tahu HP-nya?
- **Konteks:** Di dalam HP ada "indera" kecil yang tidak pernah kita lihat.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di slide *Sensor = Indera Benda Pintar*.

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #2 (Negative Hooks — Psikologi Terbalik)**

# "Alasan kenapa sensor kamu selalu ngasih angka NaN." 🤯

Isi slide:
- ❓ **NaN** = *Not a Number*, artinya sensor **gagal** memberi data.
- 🔎 4 tersangka utama (semuanya di **kabel**, bukan di kode):
  1. **Kabel longgar**: terlihat tercolok, padahal kakinya cuma setengah masuk.
  2. **Pin salah**: kabel di D5, padahal program menunggu di D4. Angka pin di program harus sama dengan tempat kabel.
  3. **+ dan − tertukar**: sensor tidak dapat listrik yang benar, bahkan bisa panas.
  4. **Kabel jumper putus di dalam**: dari luar mulus, di dalam putus. Tes pakai multimeter mode bunyi.
- 🛡️ Rahasia engineer: cek **berurutan**: listrik → kabel → pin → program. Jangan langsung menyalahkan kode.

🎙️ **Kalimat hook (pembuka rekaman):** "Alasan kenapa sensor kamu selalu ngasih angka NaN."

📌 **Teks di layar:**
- NaN = Not a Number
- 1️⃣ Kabel setengah masuk
- 2️⃣ Pin beda dengan program
- 3️⃣ + dan − tertukar
- 4️⃣ Jumper putus di dalam ✂️
- Listrik → kabel → pin → program 🛡️

🎬 **Penutup:** "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–3 detik] "Alasan kenapa sensor kamu selalu ngasih angka NaN."
> - [3–8 detik] "NaN artinya Not a Number. Sensornya gagal ngasih data. Dan sembilan dari sepuluh kasus, pelakunya kabel."
> - [8–16 detik] "Satu: kabel setengah masuk. Kelihatannya nancep, padahal kakinya cuma nyangkut. Tekan sampai mentok."
> - [16–24 detik] "Dua: pinnya beda. Kabelnya di D5, programnya nunggu di D4. Angka pin di program harus sama dengan tempat kabel."
> - [24–31 detik] "Tiga: plus minus ketuker. Sensornya nggak dapat listrik yang bener. Kalau panas, cabut sekarang."
> - [31–40 detik] "Empat: kabel jumper putus di dalam. Dari luar mulus. Tes pakai multimeter mode bunyi. Nggak bunyi? Buang."
> - [40–50 detik] "Rahasia engineer: cek berurutan. Listrik, kabel, pin, baru program. Jangan langsung nyalahin kode."
> - [50–55 detik] "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!"

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #2 — Negative Hooks (Psikologi Terbalik) |
| Judul | Alasan kenapa sensor kamu selalu ngasih angka NaN |
| Durasi | ±55 detik |
| Pembicara | Tutor + 1 siswa (talent reaksi) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Serial Monitor penuh tulisan `Gagal baca sensor` | "Alasan kenapa sensor kamu selalu ngasih angka NaN." | Sensor kamu NaN terus? 😵 |
| 3–8 | Close-up DHT22 dengan 3 kabel | "NaN artinya Not a Number. Sensornya gagal ngasih data. Dan sembilan dari sepuluh kasus, pelakunya kabel." | NaN = Not a Number |
| 8–16 | Jari menekan kabel yang setengah masuk breadboard | "Satu: kabel setengah masuk. Kelihatannya nancep, padahal kakinya cuma nyangkut. Tekan sampai mentok." | 1️⃣ Kabel setengah masuk |
| 16–24 | Kabel kuning dipindah dari D5 ke D4, zoom ke `#define DHT_PIN 4` | "Dua: pinnya beda. Kabelnya di D5, programnya nunggu di D4. Angka pin di program harus sama dengan tempat kabel." | 2️⃣ Pin beda dengan program |
| 24–31 | Kabel merah & hitam ditukar, tangan menyentuh sensor lalu cepat ditarik | "Tiga: plus minus ketuker. Sensornya nggak dapat listrik yang bener. Kalau panas, cabut sekarang." | 3️⃣ + dan − tertukar |
| 31–40 | Multimeter mode bunyi: kabel bagus berbunyi, kabel putus diam | "Empat: kabel jumper putus di dalam. Dari luar mulus. Tes pakai multimeter mode bunyi. Nggak bunyi? Buang." | 4️⃣ Jumper putus di dalam ✂️ |
| 40–50 | Grafik Serial Plotter melonjak saat siswa meniup sensor | "Rahasia engineer: cek berurutan. Listrik, kabel, pin, baru program. Jangan langsung nyalahin kode." | Listrik → kabel → pin → program 🛡️ |
| 50–55 | Tutor ke kamera, siswa meniup sensor & angka naik | "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!" | Next: dashboard 🌐 |

#### Caption

Sensor suhu kamu cuma ngasih "nan"? 😤 Sebelum nyalahin kode, cek 4 tersangka ini:
1️⃣ Kabel setengah masuk
2️⃣ Pin beda dengan program
3️⃣ + dan − tertukar
4️⃣ Kabel jumper putus di dalam

Urutan cek ala engineer: listrik → kabel → pin → program 🛡️

#InspiraLabs #ESP32 #DHT22 #SensorSuhu #IoT #Elektronika #EkskulCoding #Troubleshooting

#### Yang sengaja tidak dibocorkan
- Cara membuka Serial Plotter dan game "Gunung Tertinggi".
- Challenge "Detektif Sensor" (Kartu Sabotase).

---

## Post-Test (5 soal, pilihan ganda)

**1. Sensor DHT22 mengukur…**
A. Cahaya dan suara B. Suhu dan kelembapan udara C. Jarak dan kecepatan D. Kekuatan sinyal WiFi

**2. Kaki DHT22 yang membawa data suhu ke ESP32 adalah kaki…**
A. + B. − C. out D. Semua kaki sama saja

**3. Rakitan yang BENAR untuk DHT22 di proyek kita adalah…**
A. + ke GND, out ke D4, − ke 3V3 B. + ke 3V3, out ke D2, − ke GND C. + ke D4, out ke 3V3, − ke GND D. + ke 3V3, out ke D4, − ke GND

**4. Serial Monitor menulis `Gagal baca sensor! Cek kabel.` terus-menerus. Langkah pertama yang tepat adalah…**
A. Cabut USB, lalu cek kabel out di D4, kabel tidak longgar, dan + / − tidak tertukar B. Menulis ulang programnya C. Mengganti laptop D. Menambah resistor di kaki sensor

**5. Saat sensor ditiup, garis di Serial Plotter yang paling cepat naik adalah…**
A. Suhu B. Kelembapan C. Tidak ada yang berubah D. Grafiknya hilang

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** angka suhu & kelembapan muncul di Serial Monitor (bukan `Gagal baca sensor!`), dan Pencatat menulis dua angka itu. Suhu kelas biasanya 26–32 °C, kelembapan 55–80 %.

**Medium:** kelembapan biasanya naik dari ±60–70 % menjadi 85–99 % saat ditiup (napas itu lembap). Lulus = angka awal & puncak tercatat + grafik "gunung" ditunjukkan (foto/layar). Sensor tidak boleh disentuh basah atau ditetesi air.

**Hard — siapkan 3 kesalahan aman.** Ambil acak di `ekskulcoding.inspiralabs.id/sabotase/` (pilih **SMP**, keluar 3 kartu: 1 untuk kabel out, 1 untuk kabel −, 1 untuk kabel +), atau pakai daftar tetap:
1. Kabel **out** dicolok ke **D5**, bukan D4.
2. Kabel **−** sensor dilepas dari jalur −.
3. Kabel **+** sensor ditancapkan **setengah** (tidak masuk penuh).

**Jangan** menukar kabel + dan − untuk challenge ini: sensor bisa panas dan rusak.

### Kunci Post-Test
1. B 2. C 3. D 4. A 5. B

### Pembahasan singkat
- No. 3: ini rakitan yang sama dengan firmware proyek akhir (`#define DHT_PIN 4`), dipakai di P12.
- No. 4: program jadi sudah terbukti benar di kelompok lain. Kalau satu kelompok gagal, cek **rakitan** dulu.
- No. 5: napas mengandung banyak uap air, jadi kelembapan langsung melonjak; suhu naik pelan karena sensor butuh waktu untuk ikut hangat.

---------- SELESAI ISI MATERI AJAR ----------
