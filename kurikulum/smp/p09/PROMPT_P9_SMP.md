PROMPT P9 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/15uP4gF23AchbNzAjkRrJekrTt18mdH4W → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P9 SMP — Kenalan dengan ESP32 & Rangkaian LED Pertama

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
- Slide 2 "COVER": cover pertemuan. Label kecil "P9 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
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
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P9 SMP | nomor slide" (slide Linktree tanpa nomor).
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

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P9 SMP — Kenalan dengan ESP32 & Rangkaian LED Pertama

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

# SMP — Pertemuan 9: Kenalan dengan ESP32 & Rangkaian LED Pertama

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 16 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mengenal komponen dasar elektronika & ESP32 (tanpa coding dulu) |
| Penilaian | Praktek rangkaian LED sederhana |
| Potongan proyek akhir yang dibedah | Baris `#define DHT_PIN 4` di `smp/firmware/smp_room_monitor.ino` — angka **4** itu adalah nomor kaki (pin) ESP32. Hari ini siswa mencari kaki itu di board-nya. |

## Alat & bahan (per kelompok)

- 1 ESP32 DevKit V1 (30 pin) + kabel USB data
- 1 breadboard
- 3 LED (merah, kuning, hijau) + 3 resistor 220Ω (gelang: merah-merah-coklat)
- 6 kabel jumper male-male
- 1 modul DHT22 (cuma ditunjukkan, belum dirakit)
- 1 multimeter per kelas (dipegang tutor, dipinjam bergiliran)

## Persiapan tutor sebelum kelas

1. Siapkan **1 rangkaian "rusak"** per kelompok untuk challenge Medium (lihat Kunci).
2. Print/tayangkan **gambar pinout ESP32 DevKit V1** besar-besar.
3. Pastikan semua kabel USB adalah kabel **data**, bukan kabel charger saja (dipakai mulai P10).
4. ESP32 cukup dicolok ke laptop/power bank sebagai sumber listrik — **belum ada upload kode hari ini**.
5. Multimeter: set ke mode **DC volt (20V)** untuk mengukur 3V3–GND (harus ±3,3V), dan mode **bunyi (continuity)** untuk mengecek kabel jumper putus.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Tunjukkan alat proyek akhir yang sudah jadi (dashboard suhu jalan) |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–25 | Materi | Slide 1–7: ESP32, pin, breadboard, LED, resistor, multimeter |
| 25–37 | Praktek bersama | Slide 8: rakit LED dari 3V3 |
| 37–45 | 🟢 Challenge Easy | Nyalakan Lagi |
| 45–53 | 🟡 Challenge Medium | Detektif Rangkaian |
| 53–58 | 🔴 Challenge Hard | Dua Lampu Sekaligus (boleh jadi PR kalau waktu habis) |
| 58–60 | Peta proyek | Slide 9 |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Selamat Datang di Dunia Hardware! → Kenalan: ESP32  "Otak" Alat Kita → Pin: Kaki-Kaki ESP32 → 💬 Forum Diskusi → Breadboard: Papan Colok Tanpa Solder → LED: Lampu yang Punya Arah → Resistor: "Rem" untuk Listrik → Rumus Rangkaian Hari Ini → Praktek Bareng: LED Pertamaku → Tips Engineer: Aturan Aman Merangkai LED → 💬 Forum Diskusi → 🟢 Easy → 🟡 Medium → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

> Buffer: kalau praktek bersama molor, Challenge Hard dijadikan PR/opsional. Yang penting semua kelompok LED-nya menyala.

---

## Slide

### Slide 1 — Selamat Datang di Dunia Hardware! 🔌
- 8 pertemuan kemarin: kita bikin **website** (dunia layar).
- Mulai hari ini: kita bikin **alat** (dunia nyata).
- Tujuan akhir: alat pemantau suhu ruangan + dashboard web buatan kalian sendiri.

> Catatan tutor: Tunjukkan alat proyek akhir + dashboard live. Biarkan siswa meniup sensor dan melihat angka suhu naik di layar. Ini pemancing semangat.

### Slide 2 — Kenalan: ESP32 = "Otak" Alat Kita 🧠
- ESP32 adalah komputer **super kecil** (mikrokontroler).
- Bisa: menyalakan lampu, membaca sensor, dan **konek WiFi**.
- Analogi: kalau alat kita itu robot, ESP32 adalah **otaknya**, pin adalah **tangan & kakinya**.

### Slide 3 — Pin: Kaki-Kaki ESP32 🦶
- Kaki-kaki besi di pinggir board = **pin**.
- Tiap pin punya **nomor** (tulisan kecil: D4, D2, 3V3, GND…).
- 3 pin yang wajib kenal hari ini:

| Pin | Fungsi | Analogi |
|---|---|---|
| **3V3** | Sumber listrik (+) 3,3 volt | Keran air |
| **GND** | Jalur pulang listrik (−) | Saluran pembuangan |
| **D4 (GPIO 4)** | Pin yang nanti dipakai sensor suhu | "Telinga" ESP32 |
| **D2 (GPIO 2)** | Pin untuk LED berkedip di P10 (ada lampu biru bawaan di board) | "Mulut" ESP32 |

> Catatan tutor: Minta tiap kelompok menunjuk 3V3, GND, dan D4 di board-nya sendiri. Sambungkan ke proyek akhir: "Di kode proyek akhir nanti ada tulisan `DHT_PIN 4`. Angka 4 itu kaki yang barusan kalian tunjuk."

### Slide 4 — Breadboard: Papan Colok Tanpa Solder 🧩
- Lubang-lubang di breadboard **tersambung di dalam**.
- **Baris pendek** (a–e, f–j) tersambung **mendatar per nomor**.
- **Jalur panjang** di pinggir (+ dan −) tersambung **memanjang**.
- Parit di tengah = pemisah, kiri dan kanan **tidak** tersambung.

> Catatan tutor: Gambar breadboard dengan garis warna yang menunjukkan jalur tersambung. Error umum: siswa menancapkan dua kaki LED di nomor baris yang sama → LED korsleting, tidak menyala.

### Slide 5 — LED: Lampu yang Punya Arah ➕➖
- LED hanya menyala kalau dipasang **searah**.
- **Kaki panjang = + (anoda)**, **kaki pendek = − (katoda)**.
- Kebalik? Tidak rusak, tapi **tidak menyala**.

### Slide 6 — Resistor: "Rem" untuk Listrik 🛑
- Resistor **membatasi arus** supaya LED tidak kepanasan & cepat rusak.
- Pakai **220Ω** (gelang merah-merah-coklat).
- Resistor **tidak punya arah**, boleh dibalik.

### Slide 7 — Rumus Rangkaian Hari Ini 🔁
```
3V3 (+) → resistor 220Ω → kaki PANJANG LED → kaki PENDEK LED → GND (−)
```
- Listrik harus jalan **memutar penuh** (dari + kembali ke −). Itulah "rangkaian tertutup".

### Slide 8 — Praktek Bareng: LED Pertamaku 💡
1. Cabut ESP32 dari USB dulu (rakit dalam keadaan **mati**).
2. Tancapkan LED di breadboard: kaki panjang di baris 10, kaki pendek di baris 11.
3. Resistor: dari baris 10 ke jalur **+** pinggir.
4. Kabel jumper: jalur **+** → pin **3V3** ESP32.
5. Kabel jumper: baris 11 → pin **GND** ESP32.
6. Cek ulang → colok USB → LED menyala! 🎉

> Catatan tutor: Tunggu semua kelompok menyala sebelum lanjut. Kalau tidak menyala, pakai tabel di bawah dari atas ke bawah.

| Gejala | Kemungkinan penyebab | Cara cek / perbaiki |
|---|---|---|
| Lampu merah kecil di ESP32 mati | USB tidak tercolok / kabel rusak | Ganti kabel atau port USB |
| LED mati, ESP32 menyala | LED terbalik | Putar LED: kaki panjang ke sisi resistor/+ |
| LED mati, LED sudah benar | Dua kaki LED satu baris | Geser satu kaki ke baris sebelah |
| Masih mati | Kabel tidak di 3V3/GND, atau kabel jumper putus | Cek tulisan pin; tes kabel pakai multimeter mode bunyi |
| LED sangat terang lalu panas | Tidak ada resistor | Cabut USB, pasang resistor 220Ω |

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED        ← HARI INI
[P10] Upload program jadi (Blink) + rakit DHT22
[P11] Upload firmware proyek + jadi "dokter kabel"
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```

### Slide 10 — Challenge Time! 🏆
Lihat bagian Challenge di bawah.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Kenalan ESP32 & Pin:** Kalau ESP32 itu otak, kenapa dia butuh pin? Sebutkan 3 pin yang kita kenal hari ini dan gunanya!
- **Topik 2 — Breadboard, LED & Resistor:** LED tidak menyala padahal semua kabel sudah tercolok. Apa saja kemungkinan penyebabnya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Nyalakan Lagi"
Lepas semua, lalu rakit ulang **LED warna lain** tanpa melihat slide 8. Berhasil menyala = lulus.

### 🟡 Medium — "Detektif Rangkaian" 🔍
Tutor memberi rangkaian yang **LED-nya tidak menyala**. Ada **3 kesalahan** di rangkaian itu. Temukan, tulis di kertas, lalu perbaiki sampai menyala.

### 🔴 Hard — "Dua Lampu Sekaligus"
1. Buat **2 LED menyala bersamaan** dari 3V3 (masing-masing LED pakai resistornya sendiri).
2. Di kertas, gambar letak pin **3V3, GND, dan D4** pada board kalian.
3. Bonus: tebak, kalau LED dicabut dari 3V3 dan dicolok ke D2, apakah langsung menyala? Kenapa? (Jawabannya dibahas di P10.)

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Dari dunia layar ke dunia nyata: hari ini kita menyalakan lampu pertama dengan ESP32.
- **Pertanyaan pemantik:** Kenapa LED bisa langsung rusak kalau dicolok tanpa satu komponen kecil?
- **Konteks:** Lampu indikator di charger, TV, dan router semuanya memakai "pengaman" yang sama.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 2 (slide *Tips Engineer: Aturan Aman Merangkai LED*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong." 🔥

Isi slide:
- ❌ LED langsung ke sumber listrik → arus kebablasan → LED panas, redup, lalu mati permanen.
- ✅ Selalu: **sumber → resistor → LED → GND**.
- 🧮 Cara cepat pilih resistor untuk ESP32 (3,3V): **220Ω–330Ω** aman untuk hampir semua LED.
- 🔍 Tips engineer: **tes hardware dulu tanpa kode.** Kalau LED menyala dari 3V3, rangkaian benar. Kalau nanti tidak menyala saat diprogram, berarti masalahnya di **kode**, bukan di kabel. Ini menghemat waktu debugging berjam-jam!

> Catatan tutor: Ucapkan dengan gaya "rahasia". Tutup dengan teaser: "Hari ini kalian akan praktekkan sendiri trik tes-tanpa-kode ini. Kalau nanti LED-nya nggak nyala, ingat slide ini!"

🎙️ **Kalimat hook (pembuka rekaman):** "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong."

📌 **Teks di layar:**
- Kaki panjang = ➕
- 3,3V → 220–330Ω ✅
- 🔴🔴🟤 = 220Ω
- Tes hardware DULU, baru kode 🧠

🎬 **Penutup:** "Trik kecil ini bisa hemat waktu debugging berjam-jam. Mau tahu cara bikin lampu ini nyala-mati pakai kode? Follow, minggu depan kita lanjut."

> Catatan tutor: Narasi lengkap saat rekam (sumber: `Script_Reels_P9_SMP_InspiraLabs.md`):
> - [0–3 detik] "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong."
> - [3–10 detik] "Pertama, LED itu punya arah. Kaki panjang plus, kaki pendek minus. Kebalik? Nggak rusak, cuma nggak nyala. Jadi jangan panik dulu."
> - [10–20 detik] "Kedua, LED itu rakus arus. Dicolok langsung, dia makan arus sebanyak-banyaknya sampai panas. Resistor ini remnya. Buat board 3,3 volt kayak ESP32, pakai 220 sampai 330 ohm. Hampir semua LED aman."
> - [20–30 detik] "Cara cepat kenal 220 ohm tanpa multimeter: gelangnya merah, merah, coklat. Simpan video ini biar nggak lupa."
> - [30–42 detik] "Ketiga, ini trik yang dipakai engineer: tes hardware dulu tanpa kode. Colok ke pin tiga koma tiga volt. Nyala? Berarti rangkaianmu bener. Kalau nanti pas diprogram nggak nyala, kamu langsung tahu yang salah itu kodenya, bukan kabelnya."
> - [42–50 detik] "Trik kecil ini bisa hemat waktu debugging berjam-jam. Mau tahu cara bikin lampu ini nyala-mati pakai kode? Follow, minggu depan kita lanjut."

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop colok LED tanpa resistor! |
| Durasi | ±50 detik |
| Pembicara | Tutor (dibantu 1–2 siswa sebagai talent tangan/reaksi) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Close-up LED menyala sangat terang lalu padam | "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong." | **STOP colok LED tanpa ini!** |
| 3–10 | Tangan memegang LED, zoom ke dua kakinya | "Pertama, LED itu punya arah. Kaki panjang plus, kaki pendek minus. Kebalik? Nggak rusak, cuma nggak nyala. Jadi jangan panik dulu." | Kaki panjang = ➕ |
| 10–20 | Resistor 220Ω di jari, lalu dipasang di breadboard | "Kedua, LED itu rakus arus. Dicolok langsung, dia makan arus sebanyak-banyaknya sampai panas. Resistor ini remnya. Buat board 3,3 volt kayak ESP32, pakai 220 sampai 330 ohm. Hampir semua LED aman." | 3,3V → 220–330Ω ✅ |
| 20–30 | Gelang warna resistor di-zoom, overlay tabel warna | "Cara cepat kenal 220 ohm tanpa multimeter: gelangnya merah, merah, coklat. Simpan video ini biar nggak lupa." | 🔴🔴🟤 = 220Ω |
| 30–42 | Siswa colok LED ke pin 3V3, LED menyala; lalu pindah ke pin lain, tidak menyala | "Ketiga, ini trik yang dipakai engineer: tes hardware dulu tanpa kode. Colok ke pin tiga koma tiga volt. Nyala? Berarti rangkaianmu bener. Kalau nanti pas diprogram nggak nyala, kamu langsung tahu yang salah itu kodenya, bukan kabelnya." | Tes hardware DULU, baru kode 🧠 |
| 42–50 | Tutor menghadap kamera, LED tiga warna menyala di belakang | "Trik kecil ini bisa hemat waktu debugging berjam-jam. Mau tahu cara bikin lampu ini nyala-mati pakai kode? Follow, minggu depan kita lanjut." | Follow buat part 2 👉 |

#### Caption

LED kamu redup, panas, atau tiba-tiba mati? Bisa jadi gara-gara satu komponen kecil ini 👀

3 aturan wajib sebelum colok LED:
1️⃣ Kaki panjang = plus
2️⃣ Selalu pakai resistor (220–330Ω buat 3,3V)
3️⃣ Tes hardware dulu, baru coding

Save buat contekan praktikum! 💾

#InspiraLabs #BelajarCoding #IoT #ESP32 #Elektronika #CodingAnakSekolah #EkskulCoding #STEM

#### Yang sengaja tidak dibocorkan
- Langkah rakit lengkap di breadboard & aturan jalur breadboard (eksklusif di kelas).
- Challenge "Detektif Rangkaian" dan kaitannya ke proyek akhir (pin D4 untuk sensor).

---

## Post-Test (5 soal, pilihan ganda)

**1. Di alat kita, ESP32 berperan sebagai…**
A. Baterai B. Otak yang mengatur alat C. Kabel penghubung D. Layar

**2. Kaki LED yang PANJANG adalah…**
A. Kaki negatif (−) B. Kaki GND C. Kaki positif (+) D. Tidak ada bedanya

**3. Fungsi resistor pada rangkaian LED adalah…**
A. Membuat LED berkedip B. Membatasi arus supaya LED tidak rusak C. Menambah terang LED tanpa batas D. Menyimpan listrik

**4. Perhatikan rangkaian: `3V3 → resistor → kaki PENDEK LED → kaki PANJANG LED → GND`. Apa yang terjadi?**
A. LED menyala terang B. LED meledak C. LED tidak menyala karena terbalik D. ESP32 langsung mati

**5. Di kode proyek akhir ada tulisan `#define DHT_PIN 4`. Angka 4 artinya…**
A. Ada 4 sensor B. Suhu dibaca 4 kali C. Sensor dicolok ke pin nomor 4 di ESP32 D. Kirim data tiap 4 menit

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge
- **Easy:** rangkaian sama seperti slide 8.
- **Medium — siapkan 3 kesalahan ini:**
  1. LED dipasang **terbalik** (kaki panjang ke GND).
  2. Dua kaki LED tertancap di **nomor baris yang sama** (korsleting).
  3. Kabel GND dicolok ke pin **selain GND** (misal D2) → rangkaian tidak tertutup.
- **Hard:** 2 LED dirangkai **paralel**: masing-masing `jalur + → resistor → LED → jalur −`. Jalur + ke 3V3, jalur − ke GND.
  Bonus: **tidak menyala**, karena pin D2 belum "disuruh" mengeluarkan listrik. Untuk itu butuh **program** → P10 (programnya sudah jadi, kalian tinggal upload).

### Kunci Post-Test
1. B 2. C 3. B 4. C 5. C

### Pembahasan singkat
- No. 4: arus listrik hanya bisa lewat LED dari + (panjang) ke − (pendek).
- No. 5: menyambungkan materi hari ini ke proyek akhir, ini inti pertemuan.

---------- SELESAI ISI MATERI AJAR ----------
