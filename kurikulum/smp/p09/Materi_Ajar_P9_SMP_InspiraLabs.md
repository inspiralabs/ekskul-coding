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

## Persiapan tutor sebelum kelas

1. Siapkan **1 rangkaian "rusak"** per kelompok untuk challenge Medium (lihat Kunci).
2. Print/tayangkan **gambar pinout ESP32 DevKit V1** besar-besar.
3. Pastikan semua kabel USB adalah kabel **data**, bukan kabel charger saja (dipakai mulai P10).
4. ESP32 cukup dicolok ke laptop/power bank sebagai sumber listrik — **belum ada upload kode hari ini**.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Tunjukkan alat proyek akhir yang sudah jadi (dashboard suhu jalan). "Akhir semester kalian bikin ini." |
| 5–20 | Konsep | Slide 2–7: ESP32, pin, breadboard, LED, resistor |
| 20–35 | Praktek bersama | Slide 8: rakit 1 LED menyala dari pin 3V3, step by step bareng tutor |
| 35–55 | Challenge | Easy → Medium → Hard |
| 55–60 | 🎬 Hook | Slide hook (direkam tim InspiraLabs) |
| 60–70 | Post-test | 5 soal pilihan ganda |

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

> Catatan tutor: Tunggu semua kelompok menyala sebelum lanjut. Kalau tidak menyala, cek urutan ini: (1) LED terbalik? (2) dua kaki LED satu baris? (3) kabel di 3V3/GND yang benar? (4) USB sudah tercolok & lampu merah ESP32 menyala?

### Slide 9 — Peta Proyek Akhir 🗺️
```
[P9]  Rakit rangkaian, kenal pin        ← HARI INI
[P10] Program LED nyala-mati (kode pertama)
[P11] Baca sensor suhu DHT22
[P12] Kirim data ke dashboard lewat WiFi
[P13] Pamerkan proyekmu!
```

### Slide 10 — Challenge Time! 🏆
Lihat bagian Challenge di bawah.

---

## Challenge

### 🟢 Easy — "Nyalakan Lagi"
Lepas semua, lalu rakit ulang **LED warna lain** tanpa melihat slide 8. Berhasil menyala = lulus.

### 🟡 Medium — "Detektif Rangkaian" 🔍
Tutor memberi rangkaian yang **LED-nya tidak menyala**. Ada **3 kesalahan** di rangkaian itu. Temukan, tulis di kertas, lalu perbaiki sampai menyala.

### 🔴 Hard — "Dua Lampu Sekaligus"
1. Buat **2 LED menyala bersamaan** dari 3V3 (masing-masing LED pakai resistornya sendiri).
2. Di kertas, gambar letak pin **3V3, GND, dan D4** pada board kalian.
3. Bonus: tebak, kalau LED dicabut dari 3V3 dan dicolok ke D4, apakah langsung menyala? Kenapa? (Jawabannya dibahas di P10.)

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong." 🔥

Isi slide:
- ❌ LED langsung ke sumber listrik → arus kebablasan → LED panas, redup, lalu mati permanen.
- ✅ Selalu: **sumber → resistor → LED → GND**.
- 🧮 Cara cepat pilih resistor untuk ESP32 (3,3V): **220Ω–330Ω** aman untuk hampir semua LED.
- 🔍 Tips engineer: **tes hardware dulu tanpa kode.** Kalau LED menyala dari 3V3, rangkaian benar. Kalau nanti tidak menyala saat diprogram, berarti masalahnya di **kode**, bukan di kabel. Ini menghemat waktu debugging berjam-jam!

> Catatan tutor: Ucapkan dengan gaya "rahasia". Tanya ke siswa: "Siapa yang tadi LED-nya sempat nggak nyala? Nah, cara cek tadi itu yang dipakai engineer beneran."

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
  Bonus: **tidak menyala**, karena pin D4 belum "disuruh" mengeluarkan listrik. Untuk itu butuh **kode** → P10.

### Kunci Post-Test
1. B 2. C 3. B 4. C 5. C

### Pembahasan singkat
- No. 4: arus listrik hanya bisa lewat LED dari + (panjang) ke − (pendek).
- No. 5: menyambungkan materi hari ini ke proyek akhir, ini inti pertemuan.
