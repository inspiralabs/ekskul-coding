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
- Laptop dengan VS Code + PlatformIO + folder **Kode** pertemuan ini (Drive): `P10_1_Blink.cpp`, `P10_2_CekDHT22.cpp`, `platformio.ini`
- 1 multimeter per kelas (tutor)

## Persiapan tutor sebelum kelas

1. Jalankan `SCRIPT_P10_SMP.gs` supaya folder **Kode** ada di Drive.
2. Di tiap laptop, buat **1 proyek PlatformIO** (board: ESP32 Dev Module, framework: Arduino), ganti isi `platformio.ini` dengan file dari folder Kode, lalu **Build sekali** (download pertama lama dan library DHT ikut terunduh, jangan sampai makan waktu kelas).
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
1. **Salin** program jadi ke `src/main.cpp`.
2. **Upload** (ikon panah →) → tunggu `SUCCESS`.
3. **Serial Monitor** (ikon colokan) = kotak chat dari ESP32.
4. **Lihat alatnya**: sesuai harapan?

> Catatan tutor: Langkah ini sama untuk semua pertemuan berikutnya, termasuk firmware proyek akhir. Siswa tidak perlu mengerti isi programnya.

### Slide 5 — Praktek Bareng: Upload Blink 💡
1. **Cabut USB**. Pindahkan kabel dari **3V3** ke **D2**.
2. Colok USB. Salin `P10_1_Blink.cpp` ke `src/main.cpp`.
3. **Upload** → tunggu `SUCCESS`.
4. **Serial Monitor** → muncul `LED nyala` / `LED mati`.
5. LED **dan** lampu biru di board berkedip bareng!

> Catatan tutor: Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak → program sudah benar, **masalahnya di rakitan** (LED terbalik / dua kaki satu baris / kabel bukan di D2).

### Slide 6 — Tips Engineer: Kalau Upload Gagal 🛠️

| Gejala | Coba ini |
|---|---|
| Port tidak muncul | Ganti ke kabel USB **data** (kabel charger tidak bisa kirim program) |
| `Failed to connect` | Tahan tombol **BOOT** saat muncul `Connecting....` |
| Lampu biru kedip, LED diam | Cek rakitan LED |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Masalah lain yang cukup ditangani tutor: driver CP210x/CH340 belum ada → pasang driver; `Access denied` / port sibuk → tutup Serial Monitor, upload lagi; tulisan acak `⸮⸮⸮` → `monitor_speed = 115200` di `platformio.ini`.

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
2. Colok USB. Upload `P10_2_CekDHT22.cpp` → **Serial Monitor**.
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
- Langkah lengkap upload di PlatformIO & cara merakit DHT22.
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
