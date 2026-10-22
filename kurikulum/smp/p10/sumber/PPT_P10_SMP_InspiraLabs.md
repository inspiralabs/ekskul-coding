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
