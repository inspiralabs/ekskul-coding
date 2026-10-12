# SMP — Pertemuan 10: Upload Program Jadi & Rakit Sensor DHT22

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 23 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload program jadi ke ESP32 dan merakit sensor DHT22 dengan benar |
| Penilaian | Tugas 3: gambar diagram rakitan (LED + DHT22) dengan tangan sendiri, dikumpulkan di P11 |
| Potongan proyek akhir yang dibedah | Baris `#define DHT_PIN 4` di `smp/firmware/smp_room_monitor.ino` → kaki **out** DHT22 dicolok ke **D4**. Hari ini siswa **merakit** sensornya dan mengecek rakitan dengan program jadi. **Siswa tidak menulis kode.** |

## Alat & bahan (per kelompok)

- Rangkaian LED dari P9 (LED + resistor 220Ω), kabel + LED **dipindah dari 3V3 ke pin D2**
- ESP32 DevKit V1 + kabel USB **data**
- Modul DHT22 (3 kaki: **+**, **out**, **−**) + 3 kabel jumper (merah, kuning, hitam)
- Laptop dengan VS Code + PlatformIO + folder **Kode** pertemuan ini (Drive): `P10_1_Blink.cpp`, `P10_2_CekDHT22.cpp`, `platformio.ini`
- 1 multimeter per kelas (tutor)

## Persiapan tutor sebelum kelas

1. Jalankan `SCRIPT_P10_SMP.gs` supaya folder **Kode** ada di Drive.
2. Di tiap laptop, buat **1 proyek PlatformIO** (board: ESP32 Dev Module, framework: Arduino), ganti isi `platformio.ini` dengan file dari folder Kode, lalu **Build sekali** (download pertama lama, jangan sampai makan waktu kelas; library DHT juga ikut terunduh).
3. Cek driver USB (CP210x / CH340). Siapkan 2–3 **kabel USB data cadangan**.
4. Untuk Challenge Hard, siapkan **1 rakitan DHT22 "rusak"** per kelompok (lihat Kunci) atau gambarnya di kertas.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Review P9: "Kenapa LED di D2 belum menyala?" |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–17 | Materi | Slide 1–3: upload, kabel data, langkah upload |
| 17–27 | Praktek bersama | Slide 4: upload Blink |
| 27–31 | 🟢 Challenge Easy | Kembar Kedip |
| 31–36 | 🟡 Challenge Medium | Pindah Lampu |
| 36–44 | Materi | Slide 6–8: kenalan DHT22, cara rakit, checklist |
| 44–52 | Praktek bersama | Slide 9: rakit DHT22 + upload program cek + tiup sensor |
| 52–58 | 🔴 Challenge Hard | Cari 3 Kabel yang Salah |
| 58–60 | Peta proyek + Tugas 3 | Slide 10 + info tugas rumah |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Misteri Minggu Lalu → Upload: Mengisi "Otak" ESP32 → Praktek Bareng: Upload Blink → Tips Engineer: Kalau Upload Gagal → 💬 Forum Diskusi → 🟢 Easy → 🟡 Medium → Kenalan: DHT22 → Cara Rakit DHT22 → Checklist Rakit (Sebelum Colok USB) → Praktek Bareng: Cek Rakitan Sensor → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Tugas 3 (dikerjakan di rumah) → Post-test (Linktree) → Penutup.

> Buffer: kalau upload pertama molor (driver/kabel), Challenge Medium dijadikan opsional. Yang wajib hari ini: Blink jalan **dan** sensor DHT22 menampilkan angka.

---

## Slide

### Slide 1 — Misteri Minggu Lalu 🕵️
- LED di pin 3V3 → menyala.
- LED di pin D2 → **tidak menyala**. Kenapa?
- Karena pin D2 menunggu **perintah**. Perintahnya ada di **program**.
- Kabar baik: programnya **sudah jadi**. Tugas kita hari ini: **memasukkan** program ke ESP32 (upload) dan **merakit sensor**.

### Slide 2 — Upload: Mengisi "Otak" ESP32 🧠
- **Upload** = memindahkan program dari laptop ke ESP32 lewat kabel USB.
- Setelah di-upload, program **tersimpan** di ESP32. Dicabut dari laptop pun tetap jalan (pakai power bank).
- Yang dibutuhkan:

| Barang | Catatan |
|---|---|
| Kabel USB **data** | Kabel charger biasa sering **tidak bisa** kirim data |
| VS Code + PlatformIO | Sudah dipasang di laptop |
| File program jadi | `P10_1_Blink.cpp` di folder **Kode** |

### Slide 3 — 4 Langkah Upload (hafalkan!) 🔁
1. **Buka** proyek PlatformIO → salin isi file program jadi ke `src/main.cpp`.
2. **Upload** (ikon panah → di bawah VS Code) → tunggu `SUCCESS`.
3. **Serial Monitor** (ikon colokan) → baca pesan dari ESP32.
4. **Lihat alatnya** → apakah sesuai harapan?

> Catatan tutor: Tekankan bahwa langkah ini sama untuk semua pertemuan berikutnya, termasuk firmware proyek akhir. Siswa tidak perlu mengerti isi programnya hari ini.

### Slide 4 — Praktek Bareng: Upload Blink 💡
1. Cabut USB. Pindahkan kabel dari **3V3** ke **D2** (LED + resistor tetap seperti P9).
2. Colok USB. Salin isi `P10_1_Blink.cpp` ke `src/main.cpp`.
3. Klik **Upload** → tunggu `SUCCESS`.
4. Klik **Serial Monitor** → muncul `LED nyala` / `LED mati`.
5. LED di breadboard **dan** lampu biru kecil di board ESP32 berkedip bersamaan!

> Catatan tutor: Lampu biru bawaan board juga tersambung ke GPIO 2. Kalau lampu biru berkedip tapi LED breadboard tidak → program sudah benar, **masalahnya di rakitan** (pakai tabel troubleshooting P9).

### Slide 5 — Tips Engineer: Kalau Upload Gagal 🛠️

| Pesan / gejala | Penyebab | Solusi |
|---|---|---|
| Port tidak muncul / `No serial port` | Kabel USB **charger** (bukan data), driver belum ada | Ganti kabel data, pasang driver CP210x/CH340 |
| `Failed to connect to ESP32` | ESP32 belum masuk mode upload | Tahan tombol **BOOT** saat muncul `Connecting....`, lepas saat upload jalan |
| `Access denied` / port sibuk | Serial Monitor masih terbuka | Tutup Serial Monitor, upload lagi |
| Serial Monitor tulisan acak `⸮⸮⸮` | Kecepatan tidak sama | Pastikan `monitor_speed = 115200` di `platformio.ini` |
| Upload sukses, LED diam, lampu biru kedip | Rakitan LED salah | Cek LED terbalik / satu baris / kabel bukan di D2 |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Tunjukkan dua kabel USB yang mirip: satu kabel data, satu kabel charger.

### Slide 6 — Kenalan: DHT22 🌡️
- Sensor kecil yang mengukur **2 hal**: **suhu (°C)** dan **kelembapan udara (%)**.
- Modul kita punya **3 kaki**: **+** (listrik), **out** (data), **−** (GND).
- Lubang-lubang di badan sensor = tempat udara masuk. **Jangan ditutup** lakban/lem.
- Sensor ini "lambat": dibaca paling cepat **1 kali tiap 2 detik** (sudah diatur di program jadi).

### Slide 7 — Cara Rakit DHT22 🔌
| Kaki DHT22 | Ke pin ESP32 | Warna kabel |
|---|---|---|
| **+** | **3V3** | Merah |
| **out** | **D4** | Kuning |
| **−** | **GND** | Hitam |

- LED di D2 **tetap terpasang**. ESP32 punya 2 pin GND, boleh pakai yang mana saja (atau lewat jalur − breadboard).

> Catatan tutor: Cabut USB dulu sebelum merakit. Error paling berbahaya: kabel + dan − tertukar → sensor panas. Minta siswa saling cek rakitan kelompok sebelah sebelum colok USB.

### Slide 8 — Checklist Rakit (Sebelum Colok USB) ✅
- [ ] USB **dicabut** saat merakit.
- [ ] Baca tulisan kecil di modul: **+**, **out**, **−** (urutan tiap modul bisa beda!).
- [ ] **+** ke 3V3 (bukan VIN, bukan GND).
- [ ] **out** ke D4 (hitung pinnya: D4 ada di sisi kanan, di antara RX2 dan D2).
- [ ] **−** ke GND.
- [ ] Tarik pelan tiap kabel: tidak ada yang goyang/lepas.
- [ ] Teman kelompok sebelah sudah ikut mengecek.

### Slide 9 — Praktek Bareng: Cek Rakitan Sensor 💨
1. Rakit sesuai Slide 7, centang checklist Slide 8.
2. Colok USB. Salin `P10_2_CekDHT22.cpp` ke `src/main.cpp` → **Upload** → **Serial Monitor**.
3. Muncul `Suhu: 28.40 C | Kelembapan: 65.20 %` → rakitan **benar**!
4. **Tiup** sensor pelan-pelan → angka kelembapan naik. **Genggam** 10 detik → suhu naik.

> Catatan tutor — gejala umum:
> - Muncul terus `Gagal baca sensor! Cek kabel.` → kabel out tidak di D4, kabel longgar, atau + / − tertukar.
> - Sensor terasa panas → **cabut USB segera**, + dan − tertukar.
> - Tidak muncul apa-apa → Serial Monitor dibuka sebelum upload selesai; tekan tombol **EN** (reset) di board.
> - Dengan multimeter (DC volt): ukur kaki + dan − sensor → harus ±3,3V.

### Slide 10 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED        ✅
[P10] Upload program jadi (Blink) + rakit DHT22  ← HARI INI
[P11] Upload firmware proyek + jadi "dokter kabel"
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Minta siswa **tidak membongkar** rakitan DHT22. Kalau harus dibongkar, foto dulu rakitannya supaya minggu depan bisa dirakit ulang.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Upload Program Jadi:** Lampu biru di board berkedip, tapi LED di breadboard diam. Masalahnya di program atau di rakitan? Bagaimana kamu tahu?
- **Topik 2 — Rakit DHT22:** Kenapa kita wajib mencabut USB sebelum memindah kabel sensor?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Kembar Kedip"
Cabut semua kabel LED, lalu rakit ulang LED di **D2** **tanpa melihat slide**. Berhasil kalau LED di breadboard berkedip **bersamaan** dengan lampu biru di board.

### 🟡 Medium — "Pindah Lampu"
1. Cabut USB. Pindahkan kabel LED dari **D2** ke **D18**.
2. Di `src/main.cpp`, ubah **satu angka** saja: `#define LED_PIN 2` → `#define LED_PIN 18`.
3. Upload. Amati: LED breadboard berkedip lagi? Lampu biru di board masih berkedip?
4. Tulis di kertas: kenapa lampu biru sekarang diam?
5. Kembalikan kabel ke **D2** dan angka ke **2**.

### 🔴 Hard — "Cari 3 Kabel yang Salah" 🔍
Tutor memberi rakitan DHT22 (atau gambarnya) yang membuat Serial Monitor menulis `Gagal baca sensor!`. Ada **3 kesalahan pemasangan**. Temukan, tulis di kertas (kabel mana, seharusnya ke mana), lalu perbaiki sampai angka suhu muncul. **Tidak boleh mengubah program.**

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
- Challenge "Cari 3 Kabel yang Salah" dan kaitannya ke proyek akhir.

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

**5. Program jadi menulis `Gagal baca sensor! Cek kabel.` terus-menerus. Langkah pertama yang tepat adalah…**
A. Menulis ulang programnya B. Cabut USB, lalu cek kabel out di D4 dan kabel + / − tidak tertukar C. Mengganti laptop D. Menambah resistor di kaki sensor

---

## Tugas 3 (dikerjakan di rumah)

Gambar **diagram rakitanmu** dengan tangan di kertas: ESP32, breadboard, LED + resistor di **D2**, dan DHT22 (+ ke 3V3, out ke D4, − ke GND). Beri warna kabel (merah/kuning/hitam/biru) dan label nama pin di setiap ujung kabel. Foto, kumpulkan di P11. Diagram ini dipakai untuk merakit ulang kalau rakitanmu terlepas.

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** sama seperti Slide 4: D2 → resistor 220Ω → kaki panjang LED, kaki pendek → GND. Lampu biru board dan LED breadboard berkedip bersamaan karena keduanya dikendalikan GPIO 2.

**Medium:** LED breadboard berkedip lagi di D18. Lampu biru board **diam** karena lampu biru itu tersambung permanen ke GPIO 2, bukan ke GPIO 18. Pelajaran: angka di `#define` harus **sama** dengan pin tempat kabel dicolok. Hal yang sama berlaku untuk `DHT_PIN 4` di proyek akhir.

**Hard — siapkan 3 kesalahan ini:**
1. Kabel **+** dan **−** DHT22 **tertukar** (+ ke GND, − ke 3V3). *Uji sebentar saja, cabut USB kalau sensor hangat.*
2. Kabel **out** dicolok ke **D5**, bukan D4.
3. Kabel out ditancapkan di breadboard pada **nomor baris yang berbeda** dengan kaki out sensor (tidak tersambung).

Variasi lain kalau mau diganti: kabel jumper yang putus di dalam (tes dengan multimeter mode bunyi), kaki sensor hanya setengah masuk.

### Kunci Post-Test
1. B 2. A 3. C 4. C 5. B

### Pembahasan singkat
- No. 1: kabel charger hanya punya jalur listrik, tidak punya jalur data. Selalu sediakan kabel data cadangan.
- No. 4: ini rakitan yang sama dengan firmware proyek akhir (`#define DHT_PIN 4`).
- No. 5: program jadi sudah terbukti benar di kelompok lain. Kalau satu kelompok gagal, cek **rakitan** dulu.
