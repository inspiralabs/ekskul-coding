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
