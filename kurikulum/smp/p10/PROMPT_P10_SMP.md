PROMPT P10 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1pOjrg_pXWrebh4WlrZvBKlOHLp0ZSAbp → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P10 SMP — Pasang Arduino IDE & Kedipkan LED Pertamamu

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
- Slide "Forum Diskusi" / "Tanya Jawab": label kecil sesuai judul slide, pertanyaan besar di tengah, layout lega. Kalau judulnya memuat poin (mis. "+2"), tampilkan sebagai badge gold.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge poin sesuai angka di judul (mis. "+5", "+10", "+15"), instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
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

# P10 SMP — Pasang Arduino IDE & Kedipkan LED Pertamamu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P10 SMP | nomor slide".
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

**P10 SMP**

# Pasang Arduino IDE & Kedipkan LED Pertamamu

Hari ini laptopmu jadi "bengkel program", dan ESP32 menjalankan program pertamanya.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline dengan semangat, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# ESP32 sekecil ini bisa menyalakan lampu, membaca suhu, sampai mengirim data ke internet. Tapi bagaimana cara kita "menyuruh" dia?

Dia tidak punya layar, tidak punya keyboard, dan tidak mengerti bahasa kita.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Angkat satu ESP32 tinggi-tinggi. Tampung 2–3 tebakan siswa tanpa langsung dijawab. Setiap siswa yang berani menebak dapat +2 keaktifan, benar atau salah. Jawabannya dibahas di slide "Arduino IDE = Penerjemah".

---

### Apa yang kita capai hari ini?

- **01 Pasang Arduino IDE**: Selesaikan 3 level instalasi di laptop.
- **02 Kedipkan LED Pertamamu**: ESP32 menjalankan program pertamanya.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Operator** | Klik-klik di laptop (instal & Upload) |
| **Pengecek** | Membacakan langkah & checklist |
| **Perakit** | Mengurus kabel & LED |
| **Pencatat** | Mencatat poin & hasil challenge |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Kelompok 4 orang: 1 peran per orang. Jangan biarkan satu anak memegang laptop terus; Operator Topik 1 dan Topik 2 harus orang yang berbeda.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Poin +2 untuk siswa yang bertanya atau menjawab (benar atau salah, yang penting berani). Utamakan yang belum pernah dapat. Poin challenge diberikan ke setiap anggota kelompok yang ikut mengerjakan. Pencatat kelompok menulis poin kelompoknya, tutor mencatat di gradebook. Tidak ada PR hari ini.

---

### IoT di Sekitar Kita

- **Lampu parkir mall**: hijau kalau kosong, merah kalau ada mobil.
- **Smartwatch**: menghitung langkah, lalu angkanya muncul di HP.
- **CCTV rumah**: diintip dari HP, di mana saja.

**IoT** (*Internet of Things*) = benda biasa + **otak kecil** + **internet**.

> 🗣️ SPEAKER NOTES: Tanya ke kelas: "Siapa yang pernah lihat lampu parkir hijau-merah di mall?" Ajak siswa menyebut 1 contoh IoT lain di rumah/sekolah (+2 tiap contoh baru). Contoh lain: lampu pintar yang dinyalakan dari HP, timbangan digital yang tersambung aplikasi, ojol yang posisinya terlihat di peta.

---

### Kenalan dengan Tim Kita

| Komponen | Ibarat | Tugasnya |
|---|---|---|
| **ESP32** | Otak | Berpikir & menjalankan program |
| **LED** | Mulut | Memberi tanda (nyala/mati) |
| **Sensor DHT22** | Kulit | Merasakan suhu (dipakai P11) |
| **Kabel jumper** | Urat saraf | Menyambungkan semuanya |
| **Kabel USB** | Jalan | Membawa listrik **dan** program |

> 🗣️ SPEAKER NOTES: Angkat satu per satu komponennya saat membacakan baris tabel. Komponen ini nanti dipakai lagi di game "Tebak Komponen". DHT22 cukup ditunjukkan, dirakit minggu depan.

---

### Arduino IDE = Penerjemah

- Kita menulis program dengan kata-kata yang mirip bahasa Inggris.
- ESP32 hanya mengerti angka **0** dan **1**.
- **Arduino IDE** menerjemahkan program kita (**Verify ✓**), lalu mengirimnya ke ESP32 lewat kabel USB (**Upload →**).

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: kita "menyuruh" ESP32 lewat program yang dikirim dari Arduino IDE. Ingatkan kembali tebakan siswa tadi dan puji yang mendekati. Kata kunci: Verify = terjemahkan & periksa, Upload = terjemahkan & kirim.

---

### 3 Level Instalasi

| Level | Pasang apa | Ibarat |
|---|---|---|
| **1** | Aplikasi **Arduino IDE** | Bengkelnya |
| **2** | Board **ESP32** | Kamus bahasa ESP32 |
| **3** | Library **DHT** | Alat bantu sensor suhu |
| **BOS** | **Upload Blink** | LED berkedip! |

Pengecek: centang tiap level yang selesai.

> 🗣️ SPEAKER NOTES: Buat suasana seperti game. Tulis 3 level + BOS di papan dan beri centang besar tiap kali ada kelompok yang menyelesaikan satu level. Kelompok yang laptopnya sudah terpasang Arduino IDE: cek tiap level (sudah ada = langsung centang), lalu bantu kelompok sebelah dengan menunjuk, bukan mengambil alih mouse.

---

### Level 1: Pasang Arduino IDE

| Windows | Mac |
|---|---|
| Jalankan file **.exe** dari tutor (atau dari **arduino.cc/en/software**) | Buka file **.dmg** sesuai Mac-mu (Apple Silicon / Intel) |
| Klik **Yes** → **I Agree** → **Next** → **Install** | Seret ikon Arduino IDE ke folder **Applications** |
| Klik **Finish**. Muncul izin driver? Klik **Install** | Buka dari Launchpad → klik **Open** |

Unduh hanya dari **arduino.cc** atau dari tutor.

> 🗣️ SPEAKER NOTES: Langkah lengkap ada di Panduan 1 (Instalasi Arduino IDE). Bagikan installer dari flashdisk supaya 13 laptop tidak mengunduh bersamaan. Laptop sekolah tanpa akses Administrator: pilih "Only for me" saat Installation Options. Layar biru "Windows protected your PC" → More info → Run anyway (hanya untuk file dari arduino.cc). Pembukaan pertama butuh internet ±1–2 menit.

---

### Level 2: Pasang Board ESP32

1. **File → Preferences** (Mac: **Arduino IDE → Settings**).
2. Di kotak **Additional boards manager URLs**, tempel alamat dari tutor → **OK**.
3. Buka **Boards Manager** (ikon papan di kiri), ketik `esp32`.
4. Pilih **esp32 by Espressif Systems** → **INSTALL**.

Unduhannya besar. Sambil menunggu, kita main game!

> 🗣️ SPEAKER NOTES: Alamat yang ditempel: https://espressif.github.io/arduino-esp32/package_esp32_index.json (tulis di papan atau bagikan lewat grup). Bukan "Arduino ESP32 Boards by Arduino". Internet sekolah lambat? Pilih versi 2.0.17 di kotak versi (±0,8 GB, semua program kelas tetap jalan). Gagal di tengah jalan? Klik INSTALL lagi, unduhan dilanjutkan. Panduan lengkap: Panduan 2.

---

### Sambil Menunggu: Tebak Komponen!

Tutor mengangkat satu benda. Kamu jawab:
1. **Namanya** apa?
2. **Gunanya** untuk apa?

Jawab benar = **+2**!

> 🗣️ SPEAKER NOTES: Angkat satu per satu: ESP32, breadboard, LED (tanya juga: kaki mana yang +?), resistor (gelang merah-merah-coklat = 220Ω), kabel jumper, sensor DHT22, kabel USB data vs kabel charger (bentuknya sama, isinya beda), power bank. Pertanyaan bonus: "LED kakinya ada dua, kenapa panjangnya beda?" Gilir kelompok yang menjawab supaya semua kebagian. Sambil main, Operator tetap melirik progres unduhan.

---

### Tur Arduino IDE: Tunjuk Tombolnya!

| Tombol | Gunanya |
|---|---|
| **Verify ✓** | Menerjemahkan & memeriksa program |
| **Upload →** | Menerjemahkan & mengirim ke ESP32 |
| **Select Board** | Memilih ESP32 & colokan USB-nya |
| **Serial Monitor** (kaca pembesar) | Kotak chat dari ESP32 |
| **Output** (kotak hitam bawah) | Laporan proses. Tulisan merah = ada masalah |

> 🗣️ SPEAKER NOTES: Game cepat: tutor sebut nama tombol, siswa pertama yang menunjuk tombol yang benar di layar laptopnya dapat +2. Ulangi acak 5–6 kali. Tunjukkan juga ikon Boards Manager (papan) dan Library Manager (buku-buku) di sisi kiri.

---

### Level 3: Pasang Library DHT

1. Buka **Library Manager** (ikon buku-buku di kiri).
2. Ketik `DHT sensor library` → pilih **by Adafruit** → **INSTALL**.
3. Muncul jendela baru? Klik **INSTALL ALL**.
4. Buka `P10_2_CekDHT22.ino` → pilih **ESP32 Dev Module** → klik **Verify ✓**.
5. Muncul `Done compiling` → semua level lulus!

File program jadi: `P10_2_CekDHT22.ino` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: Jangan pilih INSTALL WITHOUT DEPENDENCIES. Verify pertama kali bisa 2–5 menit (ESP32 menyiapkan banyak file), sabar saja; isi waktunya dengan Tanya Jawab. Error "DHT.h: No such file" → library belum terpasang. Error "Adafruit_Sensor.h: No such file" → cari "Adafruit Unified Sensor" lalu INSTALL. Panduan lengkap: Panduan 3.

---

### Tanya Jawab (+2)

**Kenapa Arduino IDE harus dipasang "kamus" board ESP32 dulu sebelum bisa memprogram ESP32?**

> 🗣️ SPEAKER NOTES: Topik 1 — Pasang Arduino IDE. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: dari pabriknya Arduino IDE hanya kenal papan buatan Arduino. ESP32 buatan Espressif, jadi Arduino IDE perlu "kamus" supaya bisa menerjemahkan program untuk ESP32.

---

### Challenge 🟢 Easy — "Laptop Siap Tempur" (+5)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Tunjukkan ke tutor:
1. **ESP32 Dev Module** ada di daftar board.
2. **DHT sensor library** tertulis *installed*.
3. `P10_2_CekDHT22.ino` → Verify → `Done compiling`.

---

### Misteri Minggu Lalu

- LED di pin **3V3** → menyala.
- LED di pin **D2** → **diam**. Kenapa?
- Pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Programnya sudah jadi. Hari ini kita **upload**!

> 🗣️ SPEAKER NOTES: Tanyakan dulu ke kelas sebelum membuka jawabannya (+2 untuk yang menjawab). Ingatkan: di P9 "tanpa coding" artinya tanpa program, bukan tanpa listrik. ESP32 selalu butuh listrik dari kabel USB (laptop atau power bank).

---

### BOS Terakhir: Upload Blink

1. **Cabut USB**. Pindahkan kabel dari **3V3** ke **D2**.
2. Colok USB. Buka `P10_1_Blink.ino`.
3. **Select Board** → **ESP32 Dev Module** + port ESP32.
4. **Upload →** → tunggu `Done uploading`.
5. **Serial Monitor** (115200) → muncul `LED nyala` / `LED mati`.

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

> 🗣️ SPEAKER NOTES: Port ESP32 = port yang muncul saat ESP32 dicolok (Windows: COMx, Mac: /dev/cu.usbserial-…); cabut-colok untuk menebaknya. Tunggu semua kelompok berkedip, lalu ajak tepuk tangan (quick win terbesar hari ini). Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak, program sudah benar, masalahnya di rakitan (LED terbalik / dua kaki satu baris / kabel bukan di D2).

---

### Tips Engineer: Kalau Upload Gagal

| Gejala | Coba ini |
|---|---|
| Port tidak muncul | Ganti ke kabel USB **data** (kabel charger tidak bisa kirim program) |
| `Failed to connect` | Tahan tombol **BOOT** saat muncul `Connecting....` |
| Masih gagal terus | **Tools → Upload Speed → 115200**, lalu Upload lagi |
| Lampu biru kedip, LED diam | Cek rakitan LED |

> 🗣️ SPEAKER NOTES: Tunjukkan dua kabel USB yang mirip: satu kabel data, satu kabel charger. Masalah lain (urusan tutor): driver CP210x/CH340 belum terpasang → pasang driver (Panduan 2 bagian E); "Access denied"/port sibuk → tutup Serial Monitor lalu Upload lagi; tulisan acak ⸮⸮⸮ → pilih 115200 baud di Serial Monitor; "ESP32 Dev Module" tidak ada → Level 2 belum selesai.

---

### Tanya Jawab (+2)

**Lampu biru di board berkedip, tapi LED di breadboard diam. Salah program atau salah rakitan? Kok tahu?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kedipkan LED. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: rakitan, karena lampu biru membuktikan programnya sudah jalan.

---

### Challenge 🟡 Medium — "Lampu Disko" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

Di `P10_1_Blink.ino`, ada **dua** baris `delay(1000);` (1000 = 1 detik).
1. Ganti keduanya jadi `delay(100);` → Upload. LED jadi **lampu disko**!
2. Ganti jadi `delay(3000);` → Upload. LED jadi **lampu tidur**.
3. Tunjukkan dua-duanya ke tutor.

> 🗣️ SPEAKER NOTES: Siswa hanya mengganti angka, titik koma dan tanda kurung jangan terhapus. Kalau Upload error merah, minta mereka membandingkan barisnya dengan baris lain yang belum diubah.

---

### Challenge 🔴 Hard — "Pindah Lampu" (+15)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. **Cabut USB**. Pindahkan kabel LED dari **D2** ke **D18**.
2. Ubah **satu angka**: `#define LED_PIN 2` → `18`. Upload.
3. Lampu biru di board masih kedip? Jelaskan ke tutor **kenapa**.
4. **Kembalikan** kabel ke D2 dan angka ke `2`.

> 🗣️ SPEAKER NOTES: D18 ada di sisi kanan board, di antara D19 dan D5. Pastikan semua kelompok mengembalikan ke D2 dan angka 2 sebelum pulang.

---

### Peta Petualangan IoT

```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               ← HARI INI
[P11] Kenalan sensor DHT22 + grafik suhu
[P12] Kirim suhu ke internet + dashboard kelompok
[P13] Foto, rumah alat & showcase
```

> 🗣️ SPEAKER NOTES: Minta siswa tidak membongkar rakitan LED. Program Blink tetap tersimpan di ESP32: colok ke power bank pun LED tetap berkedip (coba demokan kalau sempat).

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

MINGGU DEPAN (P11): **Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu**

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P10 SMP — Pasang Arduino IDE & Kedipkan LED Pertamamu

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

# SMP — Pertemuan 10: Pasang Arduino IDE & Kedipkan LED Pertamamu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 23 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu memprogram ESP32 untuk kontrol output sederhana (blink LED) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Potongan proyek akhir yang dibedah | Belum menyentuh firmware proyek. Hari ini laptop disiapkan untuk semua pertemuan berikutnya (Arduino IDE + board ESP32 + library DHT), lalu siswa meng-upload program jadi pertamanya (`P10_1_Blink.ino`). Baris `#define LED_PIN 2` adalah kakak dari `#define DHT_PIN 4` yang dipakai di P11–P12. **Siswa tidak menulis kode** (paling banyak mengganti angka di challenge). |

## Alat & bahan (per kelompok/individu)

- Laptop **Windows 10/11 64-bit** atau **Mac (macOS 12+)**, ruang kosong **±9 GB**, internet
- Installer **Arduino IDE 2.3.10** (Windows `.exe` / Mac `.dmg` Apple Silicon & Intel) di flashdisk tutor
- Rangkaian LED dari P9 (LED + resistor **220Ω** di breadboard). Kabel yang dulu di 3V3 nanti **dipindah ke pin D2**.
- ESP32 DevKit V1 + kabel USB **data**
- Folder **Kode** pertemuan ini (Drive): `P10_1_Blink` dan `P10_2_CekDHT22` (masing-masing berisi 1 file `.ino`)
- Untuk game Tebak Komponen (dipegang tutor): ESP32, breadboard, LED, resistor, kabel jumper, sensor DHT22, kabel USB data + kabel charger, power bank
- Panduan Instalasi 1–3 (`kurikulum/panduan-instalasi/`) untuk tutor

## Persiapan tutor sebelum kelas

1. Jalankan `SCRIPT_P10_SMP.gs` supaya folder **Kode** dan Google Form post-test ada di Drive. Pasang link-nya di Linktree.
2. Salin installer Arduino IDE (Windows + Mac Apple Silicon + Mac Intel) ke 2–3 flashdisk. 13 laptop mengunduh bersamaan lewat WiFi sekolah = lambat.
3. Siapkan **2–3 laptop cadangan** yang sudah lulus semua level (Arduino IDE + board ESP32 + library DHT + Blink sudah pernah di-upload). Dipakai kalau unduhan board ESP32 di laptop siswa belum selesai.
4. Tes WiFi kelas: unduhan board ESP32 versi 3.x ±2 GB, versi **2.0.17** ±0,8 GB. Internet lambat → semua kelompok pilih **2.0.17**.
5. Tulis di papan: alamat board ESP32 `https://espressif.github.io/arduino-esp32/package_esp32_index.json`, tabel **3 Level + BOS**, dan "Cabut USB sebelum memindah kabel!".
6. Panduan lengkap (timeline per menit, kalimat kunci, troubleshooting): `kurikulum/smp/p10/Panduan_Pengajar_P10_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–4 | Pembuka | Laptop dinyalakan, bagikan kit, peran kelompok, cara dapat poin |
| 4–10 | Pembuka materi | Cover + pemantik + IoT di sekitar kita + kenalan tim + Arduino IDE = penerjemah |
| 10–20 | Praktek Level 1 | Pasang Arduino IDE |
| 20–24 | Praktek Level 2 | Tempel alamat board, mulai INSTALL board ESP32 |
| 24–34 | Game (sambil mengunduh) | Tebak Komponen + Tur Arduino IDE (+2 tiap jawaban benar) |
| 34–42 | Praktek Level 3 + Tanya Jawab + 🟢 Easy | Library DHT, Verify, Laptop Siap Tempur |
| 42–54 | Praktek BOS | Misteri D2, upload Blink, tips upload gagal. **Ganti peran.** |
| 54–56 | Tanya Jawab | Topik 2 |
| 56–62 | 🟡 Medium + 🔴 Hard | Lampu Disko, Pindah Lampu |
| 62–63 | Peta petualangan | |
| 63–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Cara Dapat Poin → IoT di Sekitar Kita → Kenalan dengan Tim Kita → Arduino IDE = Penerjemah → 3 Level Instalasi → Level 1 → Level 2 → Tebak Komponen → Tur Arduino IDE → Level 3 → 💬 Tanya Jawab → 🟢 Easy → Misteri Minggu Lalu → BOS Terakhir: Upload Blink → Tips Engineer: Kalau Upload Gagal → 💬 Tanya Jawab → 🟡 Medium → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah unduhan board ESP32 (Level 2). Kalau sampai menit 40 belum selesai, kelompok itu pindah ke **laptop cadangan** untuk BOS (upload Blink) sementara laptopnya tetap mengunduh. Sisa instalasi diselesaikan tutor setelah kelas, **bukan PR siswa**. Yang wajib hari ini: Arduino IDE terpasang **dan** LED berkedip.

---

## Slide

### Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Operator** | Klik-klik di laptop (instal & Upload) |
| **Pengecek** | Membacakan langkah & checklist |
| **Perakit** | Mengurus kabel & LED |
| **Pencatat** | Mencatat poin & hasil challenge |

- Ganti peran di Topik 2. Kelompok 2 orang: tiap orang pegang 2 peran.
- Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Cara Dapat Poin Hari Ini 🏅

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> Catatan tutor: +2 untuk keberanian bertanya/menjawab, benar atau salah. Utamakan siswa yang belum dapat. Poin challenge untuk setiap anggota kelompok yang ikut mengerjakan. Tidak ada PR.

### IoT di Sekitar Kita 🌐
- **Lampu parkir mall**: hijau kalau kosong, merah kalau ada mobil.
- **Smartwatch**: menghitung langkah, lalu angkanya muncul di HP.
- **CCTV rumah**: diintip dari HP, di mana saja.
- **IoT** (*Internet of Things*) = benda biasa + **otak kecil** + **internet**.

> Catatan tutor: Minta siswa menyebut contoh IoT lain di rumah/sekolah (+2 tiap contoh baru): lampu pintar dari HP, timbangan yang tersambung aplikasi, posisi ojol di peta.

### Kenalan dengan Tim Kita 🤝

| Komponen | Ibarat | Tugasnya |
|---|---|---|
| **ESP32** | Otak | Berpikir & menjalankan program |
| **LED** | Mulut | Memberi tanda (nyala/mati) |
| **Sensor DHT22** | Kulit | Merasakan suhu (dipakai P11) |
| **Kabel jumper** | Urat saraf | Menyambungkan semuanya |
| **Kabel USB** | Jalan | Membawa listrik **dan** program |

### Arduino IDE = Penerjemah 🗣️
- Kita menulis program dengan kata-kata yang mirip bahasa Inggris.
- ESP32 hanya mengerti angka **0** dan **1**.
- **Arduino IDE** menerjemahkan program kita (**Verify ✓**), lalu mengirimnya ke ESP32 lewat kabel USB (**Upload →**).

> Catatan tutor: Slide ini menjawab pertanyaan pemantik.

### 3 Level Instalasi 🎮

| Level | Pasang apa | Ibarat |
|---|---|---|
| **1** | Aplikasi **Arduino IDE** | Bengkelnya |
| **2** | Board **ESP32** | Kamus bahasa ESP32 |
| **3** | Library **DHT** | Alat bantu sensor suhu |
| **BOS** | **Upload Blink** | LED berkedip! |

### Level 1: Pasang Arduino IDE 💻

| Windows | Mac |
|---|---|
| Jalankan file **.exe** dari tutor (atau dari **arduino.cc/en/software**) | Buka file **.dmg** sesuai Mac-mu (Apple Silicon / Intel) |
| Klik **Yes** → **I Agree** → **Next** → **Install** | Seret ikon Arduino IDE ke folder **Applications** |
| Klik **Finish**. Muncul izin driver? Klik **Install** | Buka dari Launchpad → klik **Open** |

> Catatan tutor: Langkah lengkap di Panduan 1. Laptop tanpa akses Administrator: pilih **Only for me**. "Windows protected your PC" → More info → Run anyway (hanya untuk file dari arduino.cc). Mac: cek dulu Apple Silicon (Chip Apple M1–M4) atau Intel di logo Apple → About This Mac.

### Level 2: Pasang Board ESP32 📖
1. **File → Preferences** (Mac: **Arduino IDE → Settings**).
2. Di kotak **Additional boards manager URLs**, tempel alamat dari tutor → **OK**.
3. Buka **Boards Manager** (ikon papan di kiri), ketik `esp32`.
4. Pilih **esp32 by Espressif Systems** → **INSTALL**.

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

> Catatan tutor: Bukan "Arduino ESP32 Boards by Arduino". Internet lambat → pilih versi **2.0.17** (±0,8 GB). Putus di tengah → klik INSTALL lagi. Langkah lengkap di Panduan 2.

### Sambil Menunggu: Tebak Komponen! 🎲
Tutor mengangkat satu benda. Siswa menjawab **nama** dan **gunanya**. Benar = **+2**.

| Benda | Jawaban yang dicari |
|---|---|
| ESP32 | Otak alat, menjalankan program, punya WiFi |
| Breadboard | Papan colok tanpa solder; lubang satu baris tersambung |
| LED | Lampu kecil; kaki **panjang = +** |
| Resistor 220Ω | Penahan arus supaya LED tidak putus (gelang merah-merah-coklat) |
| Kabel jumper | Penyambung antar komponen |
| Sensor DHT22 | Pengukur suhu & kelembapan (dirakit di P11) |
| Kabel USB data vs charger | Bentuk sama; hanya kabel **data** yang bisa mengirim program |
| Power bank | Sumber listrik tanpa laptop (dipakai mulai P12) |

### Tur Arduino IDE: Tunjuk Tombolnya! 🔍

| Tombol | Gunanya |
|---|---|
| **Verify ✓** | Menerjemahkan & memeriksa program |
| **Upload →** | Menerjemahkan & mengirim ke ESP32 |
| **Select Board** | Memilih ESP32 & colokan USB-nya |
| **Serial Monitor** (kaca pembesar) | Kotak chat dari ESP32 |
| **Output** (kotak hitam bawah) | Laporan proses. Tulisan merah = ada masalah |

> Catatan tutor: Tutor menyebut nama tombol, siswa pertama yang menunjuk dengan benar dapat +2. Tunjukkan juga Boards Manager (papan) & Library Manager (buku-buku) di kiri.

### Level 3: Pasang Library DHT 🧰
1. Buka **Library Manager** (ikon buku-buku di kiri).
2. Ketik `DHT sensor library` → pilih **by Adafruit** → **INSTALL**.
3. Muncul jendela baru? Klik **INSTALL ALL**.
4. Buka `P10_2_CekDHT22.ino` → pilih **ESP32 Dev Module** → klik **Verify ✓**.
5. Muncul `Done compiling` → semua level lulus!

> Catatan tutor: Verify pertama kali 2–5 menit. Jangan pilih INSTALL WITHOUT DEPENDENCIES. Langkah lengkap di Panduan 3.

### Misteri Minggu Lalu 🕵️
- LED di pin **3V3** → menyala.
- LED di pin **D2** → **diam**. Kenapa?
- Pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Programnya sudah jadi. Hari ini kita **upload**!

> Catatan tutor: Di P9 "tanpa coding" artinya tanpa program, **bukan tanpa listrik**. ESP32 selalu butuh listrik dari kabel USB (laptop atau power bank).

### BOS Terakhir: Upload Blink 💡
1. **Cabut USB**. Pindahkan kabel dari **3V3** ke **D2**.
2. Colok USB. Buka `P10_1_Blink.ino`.
3. **Select Board** → **ESP32 Dev Module** + port ESP32.
4. **Upload →** → tunggu `Done uploading`.
5. **Serial Monitor** (115200) → muncul `LED nyala` / `LED mati`.

Rakitan: D2 → resistor 220Ω → kaki **panjang** LED; kaki pendek LED → GND.

```cpp
// potongan P10_1_Blink.ino
#define LED_PIN 2   // LED dicolok ke pin D2 (sama dengan lampu biru bawaan board)

void loop() {
  digitalWrite(LED_PIN, HIGH);  // nyala
  Serial.println("LED nyala");
  delay(1000);                  // tunggu 1 detik

  digitalWrite(LED_PIN, LOW);   // mati
  Serial.println("LED mati");
  delay(1000);
}
```

> Catatan tutor: Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak → program sudah benar, **masalahnya di rakitan** (LED terbalik / dua kaki satu baris / kabel bukan di D2).

### Tips Engineer: Kalau Upload Gagal 🛠️

| Gejala | Coba ini |
|---|---|
| Port tidak muncul | Ganti ke kabel USB **data** (kabel charger tidak bisa kirim program) |
| `Failed to connect` | Tahan tombol **BOOT** saat muncul `Connecting....` |
| Masih gagal terus | **Tools → Upload Speed → 115200**, lalu Upload lagi |
| Lampu biru kedip, LED diam | Cek rakitan LED |

> Catatan tutor: Masalah lain: driver CP210x/CH340 belum ada → pasang driver (Panduan 2 bagian E); `Access denied` / port sibuk → tutup Serial Monitor, upload lagi; tulisan acak `⸮⸮⸮` → pilih **115200 baud**; "ESP32 Dev Module" tidak ada di daftar → Level 2 belum selesai.

### Peta Petualangan IoT 🗺️
```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               ← HARI INI
[P11] Kenalan sensor DHT22 + grafik suhu
[P12] Kirim suhu ke internet + dashboard kelompok
[P13] Foto, rumah alat & showcase
```
> Catatan tutor: Minta siswa **tidak membongkar** rakitan LED.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** ESP32 sekecil ini bisa menyalakan lampu, membaca suhu, sampai mengirim data ke internet. Tapi bagaimana cara kita "menyuruh" dia?
- **Topik 1 — Pasang Arduino IDE:** Kenapa Arduino IDE harus dipasang "kamus" board ESP32 dulu sebelum bisa memprogram ESP32?
- **Topik 2 — Kedipkan LED:** Lampu biru di board berkedip, tapi LED di breadboard diam. Salah program atau salah rakitan? Kok tahu?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Laptop Siap Tempur" (+5)
Tunjukkan ke tutor:
1. **ESP32 Dev Module** ada di daftar board.
2. **DHT sensor library** tertulis *installed*.
3. `P10_2_CekDHT22.ino` → Verify → `Done compiling`.

### 🟡 Medium — "Lampu Disko" (+10) 🪩
Di `P10_1_Blink.ino`, ada **dua** baris `delay(1000);` (1000 = 1 detik).
1. Ganti keduanya jadi `delay(100);` → Upload. LED jadi **lampu disko**!
2. Ganti jadi `delay(3000);` → Upload. LED jadi **lampu tidur**.
3. Tunjukkan dua-duanya ke tutor.

### 🔴 Hard — "Pindah Lampu" (+15) 🔀
1. **Cabut USB**. Pindahkan kabel LED dari **D2** ke **D18** (sisi kanan, di antara D19 dan D5).
2. Ubah **satu angka**: `#define LED_PIN 2` → `18`. Upload.
3. Lampu biru di board masih kedip? Jelaskan ke tutor **kenapa**.
4. **Kembalikan** kabel ke D2 dan angka ke `2`.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Hari ini laptopmu jadi "bengkel program", dan ESP32 menjalankan program pertamanya.
- **Pertanyaan pemantik:** ESP32 sekecil ini bisa menyalakan lampu, membaca suhu, sampai mengirim data ke internet. Tapi bagaimana cara kita "menyuruh" dia?
- **Konteks:** Dia tidak punya layar, tidak punya keyboard, dan tidak mengerti bahasa kita.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di slide *Arduino IDE = Penerjemah*.

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #8 (Curiosity & Secrets — Rasa Penasaran)**

# "Aku nyesel banget baru tahu kalau kabel USB itu ada dua jenis." 😩

Isi slide:
- 🔌 Kabel USB **charger** cuma bawa listrik. Kabel USB **data** bawa listrik **dan** data.
- 💡 ESP32 menyala tapi laptop tidak menemukan port? 9 dari 10 kasus: **kabelnya**.
- 🔘 `Failed to connect`? Tahan tombol **BOOT** saat muncul `Connecting....`.
- 🧪 Trik engineer: tes upload pakai **program paling kecil** dulu (Blink). Kalau Blink jalan, kabel, driver, dan board aman.

> Catatan tutor: Kaitkan dengan proyek akhir: "Firmware proyek akhir nanti di-upload dengan cara yang persis sama. Kalau Blink sudah jalan hari ini, nanti tinggal ganti file."

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
- Langkah lengkap instalasi Arduino IDE, board ESP32, dan library DHT.
- Challenge "Lampu Disko" & "Pindah Lampu" dan kaitannya ke proyek akhir.

---

## Post-Test (5 soal, pilihan ganda)

**1. Arduino IDE adalah…**
A. Game online untuk belajar B. Aplikasi untuk menulis program dan mengirimnya (upload) ke ESP32 C. Driver untuk printer D. Browser internet

**2. Supaya Arduino IDE bisa memprogram ESP32, yang dipasang di Boards Manager adalah…**
A. esp32 by Espressif Systems B. Arduino ESP32 Boards by Arduino C. Library WiFi by Arduino D. DHT sensor library

**3. Tombol untuk mengirim program dari laptop ke ESP32 adalah…**
A. Verify (✓) B. Serial Monitor (kaca pembesar) C. Upload (→) D. Library Manager (buku-buku)

**4. ESP32 menyala, tapi port tidak muncul di laptop. Penyebab paling mungkin adalah…**
A. LED terbalik B. Library DHT belum dipasang C. Resistor kurang besar D. Kabel USB yang dipakai hanya kabel charger (tidak bisa kirim data)

**5. Lampu biru di board berkedip, tapi LED di breadboard diam. Masalahnya ada di…**
A. Program Blink rusak B. Rakitan LED (terbalik, dua kaki satu baris, atau kabel bukan di D2) C. Arduino IDE belum terpasang D. Internet sekolah lambat

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** tiga bukti terlihat di layar: `ESP32 Dev Module` bisa dipilih di Select Board, Library Manager menulis `DHT sensor library … installed`, dan Output menulis `Done compiling` untuk `P10_2_CekDHT22.ino`.

**Medium:** `delay(100)` → LED kedip sangat cepat (5 kali nyala-mati per detik), tulisan di Serial Monitor juga mengalir cepat. `delay(3000)` → 3 detik nyala, 3 detik mati. Pelajaran: angka di `delay` = lama menunggu dalam **milidetik** (1000 = 1 detik). Program sebaiknya dikembalikan ke `1000` sebelum pulang (tidak wajib).

**Hard:** LED breadboard berkedip lagi di D18. Lampu biru board **diam** karena lampu biru itu tersambung tetap ke pin 2, bukan ke pin 18. Pelajaran: angka di `#define` harus **sama** dengan pin tempat kabel dicolok. Hal yang sama berlaku untuk `#define DHT_PIN 4` di P11–P12. Pastikan kabel kembali ke D2 dan angka ke `2`.

### Kunci Post-Test
1. B 2. A 3. C 4. D 5. B

### Pembahasan singkat
- No. 2: "Arduino ESP32 Boards by Arduino" hanya untuk papan Arduino Nano ESP32, bukan ESP32 DevKit kita.
- No. 3: Verify hanya menerjemahkan & memeriksa, belum mengirim. Upload = terjemahkan + kirim.
- No. 4: kabel charger hanya punya jalur listrik, tidak punya jalur data. Selalu sediakan kabel data cadangan.
- No. 5: lampu biru membuktikan program sudah jalan, jadi cek **rakitan** dulu.

---------- SELESAI ISI MATERI AJAR ----------
