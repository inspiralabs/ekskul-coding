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
