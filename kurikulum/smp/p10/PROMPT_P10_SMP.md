PROMPT P10 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1pOjrg_pXWrebh4WlrZvBKlOHLp0ZSAbp → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P10 SMP — Upload Program Jadi & Rakit Sensor DHT22

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
- Slide 2 "COVER": cover pertemuan. Label kecil "P10 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi Live Coding": label kecil "forum Diskusi Live Coding", pertanyaan besar di tengah, layout lega.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge "+10", instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P10 SMP | nomor slide" (slide Linktree tanpa nomor).
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

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P10 SMP — Upload Program Jadi & Rakit Sensor DHT22

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

# SMP — Pertemuan 10: Upload Program Jadi & Rakit Sensor DHT22

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 23 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload program jadi ke ESP32 dan merakit sensor DHT22 dengan benar |
| Penilaian | Praktek: Blink jalan + angka suhu muncul. Tugas 3: gambar rakitan (LED + DHT22) dengan tangan sendiri, dikumpulkan di P11 |
| Potongan proyek akhir yang dibedah | Baris `#define DHT_PIN 4` di `smp/firmware/smp_room_monitor.ino` → kaki **out** DHT22 dicolok ke **D4**. Hari ini siswa **merakit** sensornya dan mengecek rakitan dengan program jadi. **Siswa tidak menulis kode** (paling banyak mengubah satu angka di Challenge Medium). |

## Alat & bahan (per kelompok/individu)

- Rangkaian LED dari P9 (LED + resistor **220Ω**). Kabel yang dulu di 3V3 **dipindah ke pin D2**.
- ESP32 DevKit V1 + kabel USB **data** (ESP32 selalu butuh listrik dari USB: laptop atau power bank)
- Modul DHT22 (3 kaki: **+**, **out**, **−**) + 3 kabel jumper (merah, kuning, hitam)
- Laptop dengan **Arduino IDE 2** + board **ESP32** + library **DHT** sudah terpasang (Panduan Instalasi di `kurikulum/panduan-instalasi/`) + folder **Kode** pertemuan ini (Drive): folder `P10_1_Blink` dan `P10_2_CekDHT22` (masing-masing berisi 1 file `.ino`)
- 1 multimeter per kelas (tutor)

## Persiapan tutor sebelum kelas

1. Jalankan `SCRIPT_P10_SMP.gs` supaya folder **Kode** ada di Drive.
2. Di tiap laptop pasang **Arduino IDE**, board **ESP32**, dan library **DHT** (ikuti 3 Panduan Instalasi, versi Windows/Mac). Lalu buka `P10_2_CekDHT22.ino` → **Verify (✓)** sekali. Unduhan board ESP32 ±2 GB (butuh ruang kosong ±9 GB) dan compile pertama 2–5 menit, jangan sampai terjadi di kelas.
3. Cek driver USB (CP210x / CH340). Siapkan 2–3 **kabel USB data cadangan**.
4. Untuk Challenge Hard, siapkan **1 rakitan DHT22 "rusak"** per kelompok cepat (lihat Kunci). Semua kesalahannya **aman** (tidak ada + / − yang ditukar).
5. Panduan lengkap (timeline per menit, kalimat kunci, troubleshooting): `kurikulum/smp/p10/Panduan_Pengajar_P10_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Bagikan kit, tentukan peran kelompok (Slide 1) |
| 5–8 | Pembuka materi | Cover + pertanyaan pemantik + agenda |
| 8–14 | Materi | Slide 2–4: misteri D2, upload, 4 langkah |
| 14–28 | Praktek bersama | Slide 5: upload Blink (upload pertama sering molor) |
| 28–31 | Tips + forum | Slide 6 + Forum Diskusi Topik 1 |
| 31–36 | 🟢 Challenge Easy | Kembar Kedip (wajib) |
| 36–41 | 🟡 Challenge Medium | Pindah Lampu |
| 41–45 | Materi | Slide 7–9: kenalan DHT22, cara rakit, cek 5 detik. Ganti peran. |
| 45–55 | Praktek bersama | Slide 10: rakit DHT22 + upload program cek + tiup sensor |
| 55–57 | Forum | Forum Diskusi Topik 2 |
| 57–62 | 🔴 Challenge Hard | Detektif Sensor (untuk kelompok yang sudah berhasil) |
| 62–63 | Peta proyek + Tugas 3 | Slide 11 + info tugas rumah |
| 63–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Misteri Minggu Lalu → Upload = Memasang Aplikasi ke ESP32 → 4 Langkah Upload → Praktek Bareng: Upload Blink → Tips Engineer: Kalau Upload Gagal → 💬 Forum Diskusi → 🟢 Easy → 🟡 Medium → Kenalan: DHT22 → Cara Rakit DHT22 → Cek 5 Detik Sebelum Colok USB → Praktek Bareng: Cek Rakitan Sensor → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Tugas 3 (dikerjakan di rumah) → Post-test (Linktree) → Penutup.

> Buffer: kalau upload pertama molor (driver/kabel), Challenge Medium dilewati. Yang wajib hari ini: Blink jalan **dan** sensor DHT22 menampilkan angka.

---

## Slide

### Slide 1 — Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Perakit** | Memasang kabel |
| **Pengecek** | Membacakan checklist, cek kabel |
| **Operator** | Klik Upload & Serial Monitor |
| **Pencatat** | Mencatat hasil challenge |

- Ganti peran di Topik 2. Kelompok 2 orang: tiap orang pegang 2 peran.
- Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Slide 2 — Misteri Minggu Lalu 🕵️
- LED di pin **3V3** → menyala.
- LED di pin **D2** → **diam**. Kenapa?
- Pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Programnya **sudah jadi**. Kita tinggal memasukkannya.

> Catatan tutor: Di P9 "tanpa coding" artinya tanpa program, **bukan tanpa listrik**. ESP32 selalu butuh listrik dari kabel USB (laptop atau power bank).

### Slide 3 — Upload = Memasang Aplikasi ke ESP32 📲
- Seperti memasang aplikasi ke HP.
- **Laptop** = toko aplikasi. **Kabel USB** = jalannya. **ESP32** = HP-nya.
- Program **tersimpan** di ESP32. Dicabut dari laptop pun tetap ingat.
- Tapi tetap butuh **listrik**: laptop atau power bank.

### Slide 4 — 4 Langkah Upload (dipakai sampai P13!) 🔁
1. **Buka** program jadi: double-click file `.ino` → terbuka di **Arduino IDE**.
2. **Upload** (tombol panah → di kiri atas) → tunggu tulisan `Done uploading`.
3. **Serial Monitor** (ikon kaca pembesar di kanan atas, pilih **115200 baud**) = kotak chat dari ESP32.
4. **Lihat alatnya**: sesuai harapan?

> Catatan tutor: Langkah ini sama untuk semua pertemuan berikutnya, termasuk firmware proyek akhir. Siswa tidak perlu mengerti isi programnya.

### Slide 5 — Praktek Bareng: Upload Blink 💡
1. **Cabut USB**. Pindahkan kabel dari **3V3** ke **D2**.
2. Colok USB. Buka `P10_1_Blink.ino`. Di kotak **Select Board** pilih **ESP32 Dev Module** + port ESP32 (cukup sekali).
3. **Upload** → tunggu `Done uploading`.
4. **Serial Monitor** → muncul `LED nyala` / `LED mati`.
5. LED **dan** lampu biru di board berkedip bareng!

> Catatan tutor: Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak → program sudah benar, **masalahnya di rakitan** (LED terbalik / dua kaki satu baris / kabel bukan di D2).

### Slide 6 — Tips Engineer: Kalau Upload Gagal 🛠️

| Gejala | Coba ini |
|---|---|
| Port tidak muncul | Ganti ke kabel USB **data** (kabel charger tidak bisa kirim program) |
| `Failed to connect` | Tahan tombol **BOOT** saat muncul `Connecting....` |
| Masih gagal terus | **Tools → Upload Speed → 115200**, lalu Upload lagi |
| Lampu biru kedip, LED diam | Cek rakitan LED |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Masalah lain yang cukup ditangani tutor: driver CP210x/CH340 belum ada → pasang driver; `Access denied` / port sibuk → tutup Serial Monitor, upload lagi; tulisan acak `⸮⸮⸮` → pilih **115200 baud** di Serial Monitor.

### Slide 7 — Kenalan: DHT22 🌡️
- Sensor kecil pengukur **suhu (°C)** dan **kelembapan udara (%)**.
- Punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang di badannya = tempat udara masuk. **Jangan ditutup**.

> Catatan tutor: Sensor ini dibaca paling cepat tiap 2 detik, sudah diatur di program jadi.

### Slide 8 — Cara Rakit DHT22 🔌
| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

- LED di D2 **tetap terpasang**.

> Catatan tutor: Cabut USB dulu sebelum merakit. Kesalahan paling berbahaya: kabel + dan − tertukar → sensor panas. ESP32 punya 2 pin GND, boleh pakai yang mana saja (atau lewat jalur − breadboard).

### Slide 9 — Cek 5 Detik Sebelum Colok USB ✅
- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan di modul: **+**, **out**, **−**.
- [ ] **+** ke 3V3, **out** ke D4, **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak goyang.
- [ ] Pengecek kelompok lain ikut cek.

> Catatan tutor: Urutan kaki tiap modul bisa beda, jadi selalu baca tulisannya. D4 ada di sisi kanan board, di antara RX2 dan D2.

### Slide 10 — Praktek Bareng: Cek Rakitan Sensor 💨
1. Rakit, lalu centang semua checklist.
2. Colok USB. Buka `P10_2_CekDHT22.ino` → **Upload** → **Serial Monitor**.
3. Muncul `Suhu: 28.40 C` → rakitan **benar**!
4. **Tiup** pelan → kelembapan naik. **Genggam** 10 detik → suhu naik.

> Catatan tutor — gejala umum:
> - Muncul terus `Gagal baca sensor! Cek kabel.` → kabel out tidak di D4, kabel longgar, atau + / − tertukar.
> - Sensor terasa panas → **cabut USB segera**, + dan − tertukar.
> - Tidak muncul apa-apa → tekan tombol **EN** (reset) di board.
> - Dengan multimeter (DC volt): ukur kaki + dan − sensor → harus ±3,3V.

### Slide 11 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED        (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22  ← HARI INI
[P11] Upload firmware proyek + jadi "dokter kabel"
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Minta siswa **tidak membongkar** rakitan DHT22. Kalau harus dibongkar, foto dulu rakitannya.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Upload Program Jadi:** Lampu biru di board berkedip, tapi LED di breadboard diam. Salah program atau salah rakitan? Kok tahu?
- **Topik 2 — Rakit DHT22:** Kenapa USB wajib dicabut sebelum memindah kabel sensor?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Kembar Kedip" (wajib)
1. **Cabut USB**, lepas semua kabel LED.
2. Rakit ulang LED di **D2** tanpa melihat slide.
3. Colok USB. Berhasil kalau LED kedip **bareng** lampu biru.

### 🟡 Medium — "Pindah Lampu"
1. **Cabut USB**. Pindahkan kabel LED dari **D2** ke **D18** (sisi kanan, di antara D19 dan D5).
2. Ubah **satu angka**: `#define LED_PIN 2` → `18`. Upload.
3. Lampu biru masih kedip? Tulis kenapa.
4. **Kembalikan** kabel ke D2 dan angka ke `2`.

### 🔴 Hard — "Detektif Sensor" 🔍
Tutor memberi rakitan DHT22 yang menulis `Gagal baca sensor!`. Ada **3 kesalahan**.
1. Temukan ketiganya.
2. Tulis: kabel mana, seharusnya ke mana.
3. Perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Hari ini ESP32 kita mendapat program pertamanya, dan sensor suhunya mulai terpasang.
- **Pertanyaan pemantik:** Lampu ESP32 menyala, tapi laptop sama sekali tidak bisa menemukannya. Kenapa ya?
- **Konteks:** Penyebabnya sering ada di benda yang paling sering kita sepelekan.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Tips Engineer: Kalau Upload Gagal*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #8 (Curiosity & Secrets — Rasa Penasaran)**

# "Aku nyesel banget baru tahu kalau kabel USB itu ada dua jenis." 😩

Isi slide:
- 🔌 Kabel USB **charger** cuma bawa listrik. Kabel USB **data** bawa listrik **dan** data.
- 💡 ESP32 menyala tapi laptop tidak menemukan port? 9 dari 10 kasus: **kabelnya**.
- 🔘 `Failed to connect`? Tahan tombol **BOOT** saat muncul `Connecting....`.
- 🧪 Trik engineer: tes upload pakai **program paling kecil** dulu (Blink). Kalau Blink jalan, kabel, driver, dan board aman.

> Catatan tutor: Kaitkan dengan proyek akhir: "Firmware proyek akhir nanti di-upload dengan cara yang persis sama. Kalau Blink sudah jalan hari ini, minggu depan tinggal ganti file."

🎙️ **Kalimat hook (pembuka rekaman):** "Aku nyesel banget baru tahu kalau kabel USB itu ada dua jenis."

📌 **Teks di layar:**
- ESP32 nyala, laptop nggak nemu??
- Kabel charger ≠ kabel data 🔌
- Failed to connect → tahan BOOT 🔘
- Tes pakai Blink dulu 💡

🎬 **Penutup:** "Satu kabel bisa bikin kamu buang waktu sejam. Mau lihat ESP32 ini baca suhu ruangan? Follow, lanjut minggu depan."

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–3 detik] "Aku nyesel banget baru tahu kalau kabel USB itu ada dua jenis."
> - [3–12 detik] "ESP32-nya nyala, lampunya merah, tapi laptop nggak nemu apa-apa. Driver udah, restart udah. Ternyata…"
> - [12–22 detik] "…kabelnya kabel charger. Kabel charger cuma bawa listrik, nggak bawa data. Bentuknya sama persis, isinya beda."
> - [22–32 detik] "Kalau port udah muncul tapi tulisannya Failed to connect, tahan tombol BOOT pas muncul Connecting titik-titik. Lepas begitu upload jalan."
> - [32–44 detik] "Trik engineer: tes pakai program paling kecil dulu, Blink. Kalau lampunya kedip, kabel, driver, dan board kamu aman. Baru lanjut ke program besar."
> - [44–52 detik] "Satu kabel bisa bikin kamu buang waktu sejam. Mau lihat ESP32 ini baca suhu ruangan? Follow, lanjut minggu depan."

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #8 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Aku nyesel baru tahu kabel USB ada dua jenis |
| Durasi | ±52 detik |
| Pembicara | Tutor (layar laptop + ESP32 di meja) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Wajah frustrasi menatap laptop, ESP32 lampu merah menyala | "Aku nyesel banget baru tahu kalau kabel USB itu ada dua jenis." | Nyesel baru tahu ini 😩 |
| 3–12 | Screen record: daftar port kosong, tombol refresh diklik berkali-kali | "ESP32-nya nyala, lampunya merah, tapi laptop nggak nemu apa-apa. Driver udah, restart udah. Ternyata…" | ESP32 nyala, laptop nggak nemu?? |
| 12–22 | Dua kabel USB berdampingan, satu diberi label "charger", satu "data" | "…kabelnya kabel charger. Kabel charger cuma bawa listrik, nggak bawa data. Bentuknya sama persis, isinya beda." | Kabel charger ≠ kabel data 🔌 |
| 22–32 | Close-up jari menahan tombol BOOT, terminal `Connecting....` lalu `Writing...` | "Kalau port udah muncul tapi tulisannya Failed to connect, tahan tombol BOOT pas muncul Connecting titik-titik. Lepas begitu upload jalan." | Failed to connect → tahan BOOT 🔘 |
| 32–44 | LED breadboard & lampu biru board berkedip bareng | "Trik engineer: tes pakai program paling kecil dulu, Blink. Kalau lampunya kedip, kabel, driver, dan board kamu aman. Baru lanjut ke program besar." | Tes pakai Blink dulu 💡 |
| 44–52 | Tutor menghadap kamera, memegang sensor DHT22 | "Satu kabel bisa bikin kamu buang waktu sejam. Mau lihat ESP32 ini baca suhu ruangan? Follow, lanjut minggu depan." | Follow buat part 3 👉 |

#### Caption

ESP32 udah nyala tapi laptop nggak nemu port? 🤨 Jangan buru-buru nyalahin board-nya.

✅ Pakai kabel USB DATA, bukan kabel charger
✅ Failed to connect? Tahan tombol BOOT
✅ Tes pakai Blink dulu sebelum program besar

Save biar nggak lupa pas praktikum 💾

#InspiraLabs #ESP32 #Arduino #IoT #BelajarCoding #EkskulCoding #Elektronika #TipsMaker

#### Yang sengaja tidak dibocorkan
- Langkah lengkap upload di Arduino IDE & cara merakit DHT22.
- Challenge "Detektif Sensor" dan kaitannya ke proyek akhir.

---

## Post-Test (5 soal, pilihan ganda)

**1. ESP32 menyala, tapi port tidak muncul di laptop. Penyebab paling mungkin adalah…**
A. LED terbalik B. Kabel USB yang dipakai hanya kabel charger (tidak bisa kirim data) C. Sensor DHT22 rusak D. Resistor kurang besar

**2. Saat upload muncul `Failed to connect to ESP32`. Yang sebaiknya dilakukan adalah…**
A. Tahan tombol BOOT saat muncul `Connecting....` B. Mencabut sensor DHT22 C. Mengganti LED D. Menunggu 1 jam

**3. Kaki DHT22 yang membawa data suhu ke ESP32 adalah kaki…**
A. + B. − C. out D. Semua kaki sama saja

**4. Rakitan yang BENAR untuk DHT22 di proyek kita adalah…**
A. + ke GND, out ke D4, − ke 3V3 B. + ke 3V3, out ke D2, − ke GND C. + ke 3V3, out ke D4, − ke GND D. + ke D4, out ke 3V3, − ke GND

**5. Serial Monitor menulis `Gagal baca sensor! Cek kabel.` terus-menerus. Langkah pertama yang tepat adalah…**
A. Menulis ulang programnya B. Cabut USB, lalu cek kabel out di D4 dan kabel + / − tidak tertukar C. Mengganti laptop D. Menambah resistor di kaki sensor

---

## Tugas 3 (dikerjakan di rumah)

Gambar **rakitanmu** di kertas: ESP32, LED di **D2**, dan DHT22 (+ ke 3V3, out ke D4, − ke GND). Warnai kabelnya (merah/kuning/hitam/biru) dan tulis nama pin di ujungnya. Foto, kumpulkan di P11. Gambar ini dipakai untuk merakit ulang kalau rakitanmu terlepas.

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** sama seperti Slide 5: D2 → resistor 220Ω → kaki panjang LED, kaki pendek → GND. Lampu biru board dan LED breadboard berkedip bersamaan karena keduanya dikendalikan GPIO 2.

**Medium:** LED breadboard berkedip lagi di D18. Lampu biru board **diam** karena lampu biru itu tersambung tetap ke pin 2, bukan ke pin 18. Pelajaran: angka di `#define` harus **sama** dengan pin tempat kabel dicolok. Hal yang sama berlaku untuk `DHT_PIN 4` di proyek akhir.

**Hard — siapkan 3 kesalahan aman.** Bisa memakai daftar tetap di bawah, atau ambil acak di `ekskulcoding.inspiralabs.id/sabotase/` (pilih **SMP**, keluar 3 kartu yang aman):
1. Kabel **out** dicolok ke **D5**, bukan D4.
2. Kabel out ditancapkan di breadboard pada **nomor baris yang berbeda** dengan kaki out sensor (tidak tersambung).
3. Kabel **−** sensor ditancapkan **setengah** (tidak masuk penuh), atau pakai kabel jumper yang putus di dalam (bisa dicek dengan multimeter mode bunyi).

**Jangan** menukar kabel + dan − untuk challenge ini: sensor bisa panas dan rusak.

### Kunci Post-Test
1. B 2. A 3. C 4. C 5. B

### Pembahasan singkat
- No. 1: kabel charger hanya punya jalur listrik, tidak punya jalur data. Selalu sediakan kabel data cadangan.
- No. 4: ini rakitan yang sama dengan firmware proyek akhir (`#define DHT_PIN 4`).
- No. 5: program jadi sudah terbukti benar di kelompok lain. Kalau satu kelompok gagal, cek **rakitan** dulu.

---------- SELESAI ISI MATERI AJAR ----------
