PROMPT P12 SMA — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4 → subfolder SMA (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis

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
- Slide 2 "COVER": cover pertemuan. Label kecil "P12 SMA", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
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
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P12 SMA | nomor slide" (slide Linktree tanpa nomor).
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

# P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMA awam: teks slide singkat, satu ide per slide, bahasa santai.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B,
     angka/string #8A6516; baris yang boleh diubah diberi latar #F3E6C4. Abaikan aturan "kode di card gelap". -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P12 SMA**

# Kontrol Kipas dari Dashboard: Manual & Otomatis

Satu klik di HP, kipas di meja ikut bergerak.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kamu masih di sekolah, tapi pengin kipas kamar sudah nyala pas kamu pulang. Mungkin nggak? Gimana perintah dari HP bisa sampai ke kipas?

Smart lamp dan smart AC sudah bisa begini. Hari ini alat buatan kalian juga.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab (+2 per siswa yang berani menjawab). Jawabannya dibahas di Topik 1 (slide Perintah Kipas: ESP32 yang Bertanya).

---

### Apa yang kita capai hari ini?

- **01 Kontrol Manual**: Nyalakan kipas dari HP, kenalan dengan PIN kelompok.
- **02 Mode Otomatis**: Kipas yang mikir sendiri pakai aturan suhu.
- **03 Kipas Nggak Nurut?**: Cara cepat membetulkan, plus bikin kipas lebih gesit.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Poin +2 untuk siswa yang bertanya atau menjawab (benar atau salah, yang penting berani). Utamakan yang belum pernah dapat. Pasangan: poin challenge untuk kedua anggota. Tutor mencatat di gradebook. Tidak ada PR hari ini.

---

### IoT Dua Arah
- P11: data **naik**: sensor → ESP32 → server → dashboard.
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Rakitan & firmware **tidak diubah**. Fitur kipas **sudah jadi** di dashboard kalian. Tugas kalian: **mencoba & membuktikan**.

```wiring
Judul: Jalur perintah turun: ESP32 → relay → kipas (rakitan P11, tidak diubah)
Komponen: ESP32 DevKit V1, breadboard, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D14 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: kabel biru D14 → relay IN ; kipas di terminal NO
```

> 🗣️ SPEAKER NOTES: Peran berdua: Pengendali (pegang HP/dashboard + PIN) & Pengamat (stopwatch, amati relay & kipas); tukar tiap topik. Peserta individu: HP sebagai stopwatch di tangan kiri.

---

### Perintah Kipas: ESP32 yang Bertanya
```
[Tombol di HP] ──► [Server] mencatat: "kipas sma-04 = NYALA"
                         ▲
                         │ tiap ±4 detik ESP32 lapor suhu,
                         │ server membalas: "fanOn": true
                         ▼
                    [ESP32] → relay klik → kipas berputar
```
- Server **tidak bisa** "mengetuk pintu" ESP32 yang ada di balik router sekolah.
- Jadi ESP32 yang **bertanya** tiap ±4 detik: *"Ada titipan buat aku?"* Mirip anak kos yang bolak-balik nanya ke ibu kos.
- Makanya jeda tombol → kipas **0 sampai ±4 detik**. Normal, bukan rusak.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: smart device di rumah juga "bertanya" atau terus terhubung ke server, bukan didatangi server. Firmware sebenarnya juga bisa menerima perintah langsung lewat jaringan lokal (route /fan), tapi server kita ada di internet, jadi yang bekerja di kelas adalah balasan tiap ±4 detik. Tidak perlu dibahas lebih dalam.

---

### PIN Kelompok: Lihat Boleh, Pencet Jangan
- Dashboard kalian **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhunya.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat.
- Jangan tulis PIN di website, foto, atau grup chat. PIN = kunci rumah.

> 🗣️ SPEAKER NOTES: Bagikan PIN ke masing-masing kelompok secara pribadi (kertas lipat), jangan dibacakan. Tanya kelas: "Bayangkan teman iseng matiin kipas kamarmu dari rumahnya. Makanya ada PIN."

---

### Tanya Jawab (+2)

**Kipas tidak langsung berubah saat tombol ditekan. Kenapa itu bukan kerusakan?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kontrol Manual. Minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: ESP32 baru tahu ada perintah saat lapor berikutnya ke server (tiap ±4 detik).

---

### Challenge 🟢 Easy — "Saklar dari HP" (+5)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Buka dashboard kelompok di **HP**: `https://sma-0X.inspiralabs.id`.
2. Pilih mode **Manual**, tekan tombol kipas besar, masukkan **PIN kelompok**.
3. Kipas di meja harus **menyala**. Tekan lagi: kipas **mati**.
4. Tunjukkan ke tutor: HP di tangan, kipas di meja ikut nurut.

---

### Manual vs Otomatis
| Mode | Siapa yang memutuskan | Contoh di dunia nyata |
|---|---|---|
| **Manual** | **Kamu**, lewat tombol | Saklar lampu, remote TV |
| **Otomatis** | **Aturan**: kalau suhu > ambang → kipas nyala | AC, kulkas, rice cooker |
- Di mode Otomatis, server membandingkan suhu terbaru dengan **ambang**. Di atas ambang → nyala. Di bawah → mati.
- Tekan tombol kipas saat Otomatis = **ambil alih** jadi Manual.

> 🗣️ SPEAKER NOTES: Tanya kelas: "Rice cooker tahu nasinya matang dari mana?" (sensor suhu + aturan). Hubungkan: alat kita sekarang juga punya "aturan" yang sama.

---

### Slider "Nyala Otomatis di Atas N°C"
- Slider **20–40°C**. Geser, lalu **lepas**: ambang baru dikirim ke server.
- Tips uji cepat: ambang = **suhu ruangan + 1°C**, lalu **genggam** sensor.
- Awas **cetak-cetek**: kalau ambang terlalu dekat suhu ruangan, kipas bisa nyala-mati terus. Geser ambang sedikit menjauh.

---

### Tanya Jawab (+2)

**Ambang 30°C, suhu kelas 29,9°C dan naik-turun sedikit. Apa yang terjadi pada kipas? Gimana cara mencegahnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Mode Otomatis. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: kipas nyala-mati bergantian (cetak-cetek), bikin relay cepat aus. Cegah dengan ambang yang tidak terlalu dekat suhu ruangan. Alat sungguhan memakai "zona aman": nyala di 30, baru mati di 29.

---

### Challenge 🟡 Medium — "Kipas Otomatis" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Pilih mode **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor DHT22. Catat: berapa detik sampai kipas **menyala sendiri**?
3. Lepas genggaman. Catat: berapa detik sampai kipas **mati sendiri**?
4. Tunjukkan ke tutor: kipas bergerak tanpa tombol disentuh.

---

### Kipas Nggak Nurut? Cek Ini
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Ditekan, > 10 detik tidak ada apa-apa | Serial Monitor: masih `kode respons: 200`? |
| Relay klik, kipas diam | Kabel COM, NO, dan kipas − ke GND |
| Kipas **kebalikan** dari dashboard | Kipas di NC? Kalau sudah di NO → slide berikut |
| Otomatis, kipas tidak mau nyala | Ambang terlalu tinggi, genggam lebih lama |

---

### Satu Kata untuk Kipas yang Kebalikan
```cpp
// potongan — firmware/sma_room_monitor/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul relay kita biasanya **active-LOW** → biarkan `true`.
- Dashboard bilang **mati** tapi kipas **berputar** (dan sebaliknya)? Ganti **satu kata** `true` → `false`, upload ulang. Kabel tidak perlu diubah.

> 🗣️ SPEAKER NOTES: Cukup praktisnya saja. Satu kalimat fail-safe: kipas dipasang di NO supaya kalau ESP32 mati/dicabut, kipas ikut mati. Tidak perlu dibahas lebih jauh.

---

### Tanya Jawab (+2)

**Dashboard bilang kipas MATI, tapi kipasnya berputar. Apa yang kamu cek dulu sebelum mengubah kode?**

> 🗣️ SPEAKER NOTES: Topik 3 — Kipas Nggak Nurut. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: cek dulu kabel kipas di NO (bukan NC). Kalau sudah di NO, baru ganti RELAY_ACTIVE_LOW.

---

### Challenge 🔴 Hard — "Kipas Lebih Gesit" (+15)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Mode **Manual**. Ukur jeda tombol → kipas **3 kali** pakai stopwatch, hitung rata-ratanya.
2. Di firmware, ubah satu angka:
```cpp
const unsigned long SEND_INTERVAL_MS = 4000;  // ubah jadi 2000
```
3. Upload, lalu ukur lagi 3 kali. Bandingkan rata-ratanya.
4. Jawab: kenapa angka ini **tidak boleh** di bawah 2000?
5. Kembalikan ke **4000**, upload ulang.

---

### Peta Petualangan IoT
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                           ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok  ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                                  ← HARI INI
[P13] Kustom dashboard + website online + Demo Day
```

> 🗣️ SPEAKER NOTES: Alat dikumpulkan ke tutor dalam keadaan utuh, dipakai lagi di Demo Day P13. Tidak ada yang perlu disiapkan siswa di rumah.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Dashboard Punya Kita + Demo Day** — ubah tampilan website, online di `sma-0X.inspiralabs.id`, lalu pamerkan alatnya.

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis

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

# SMA — Pertemuan 12: Kontrol Kipas dari Dashboard: Manual & Otomatis

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 7 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengontrol kipas dari dashboard (mode Manual & Otomatis) dan menjelaskan secara sederhana bagaimana perintah dari HP sampai ke alat (proyek akhir tahap 2: kontrol dua arah) |
| Penilaian | Progres proyek akhir: kipas mengikuti tombol dashboard di HP, dan menyala sendiri di mode Otomatis saat sensor digenggam |
| Kaitan dengan proyek akhir | Fitur kontrol kipas **sudah jadi** di folder kelompok (mis. `sma-04`): tombol kipas besar, tombol **Manual/Otomatis**, slider **"Nyala otomatis di atas N°C"** (20–40) di `index.html`. Firmware `firmware/sma_room_monitor/sma_room_monitor.ino` dari P11 **tidak diubah**. Tinkering hanya 2 tempat: **satu kata** `RELAY_ACTIVE_LOW` (kalau kipas kebalikan) dan **satu angka** `SEND_INTERVAL_MS` (Challenge Hard, lalu dikembalikan). |

## Alat & bahan (per kelompok)

- Rakitan P11 (DHT22 di D13, relay IN di D14, kipas DC 5V di NO) dengan firmware proyek yang sudah `kode respons: 200`
- Laptop + **folder kelompok** dari zip tutor (mis. `sma-04`) + **HP** untuk membuka dashboard
- **PIN kelompok** dari tutor (kertas lipat, pribadi)
- Stopwatch HP

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p12/Panduan_Pengajar_P12_SMA.md`.

1. Pastikan setiap kelompok sudah lolos P11 (data masuk dashboard). Yang belum: selesaikan dulu di 10 menit pertama.
2. Siapkan PIN kelompok (dari `FAN_PINS` di `.env` server). Bagikan **hanya** ke kelompok yang bersangkutan.
3. Set semua dashboard ke mode **Manual + kipas mati**, ambang **30°C**, supaya kelas mulai dari kondisi yang sama.
4. Uji 1 rakitan: tombol di HP → kipas berubah dalam ±4 detik; Otomatis + genggam sensor → kipas menyala sendiri.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo alat tutor: tekan tombol di HP → kipas berputar. Kelas menghitung detiknya |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik + cara dapat poin |
| 10–18 | Materi | IoT dua arah, ESP32 yang bertanya, PIN kelompok |
| 18–25 | 🟢 Challenge Easy | Saklar dari HP |
| 25–32 | Materi | Manual vs Otomatis, slider ambang, cetak-cetek |
| 32–42 | 🟡 Challenge Medium | Kipas Otomatis |
| 42–47 | Materi | Kipas nggak nurut, satu kata `RELAY_ACTIVE_LOW` |
| 47–58 | 🔴 Challenge Hard | Kipas Lebih Gesit |
| 58–60 | Peta | Peta Petualangan IoT |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Cara Dapat Poin Hari Ini → IoT Dua Arah → Perintah Kipas: ESP32 yang Bertanya → PIN Kelompok → 💬 Tanya Jawab (+2) → 🟢 Easy → Manual vs Otomatis → Slider "Nyala Otomatis di Atas N°C" → 💬 Tanya Jawab (+2) → 🟡 Medium → Kipas Nggak Nurut? Cek Ini → Satu Kata untuk Kipas yang Kebalikan → 💬 Tanya Jawab (+2) → 🔴 Hard → Peta Petualangan IoT → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Cara Dapat Poin Hari Ini 🏅
| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |
- Post-test di Google Form di akhir kelas. **Tidak ada PR.**

> Catatan tutor: +2 untuk yang berani bertanya/menjawab, benar atau salah. Utamakan siswa yang belum dapat poin hari itu.

### Slide 2 — IoT Dua Arah 🔄
- P11: data **naik**: sensor → ESP32 → server → dashboard. ✅
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Rakitan & firmware **tidak diubah**. Fitur kipas **sudah jadi**. Tugas kalian: **mencoba & membuktikan**.

> Catatan tutor: Peran berdua: **Pengendali** (HP + PIN) & **Pengamat** (stopwatch, amati relay & kipas); tukar tiap topik. Peserta individu: HP sebagai stopwatch di tangan kiri.

### Slide 3 — Perintah Kipas: ESP32 yang Bertanya 🙋
```
[Tombol di HP] ──► [Server] mencatat: "kipas sma-04 = NYALA"
                         ▲
                         │ tiap ±4 detik ESP32 lapor suhu,
                         │ server membalas: "fanOn": true
                         ▼
                    [ESP32] → relay klik → kipas berputar
```
- Server **tidak bisa** "mengetuk pintu" ESP32 yang ada di balik router sekolah.
- Jadi ESP32 yang **bertanya** tiap ±4 detik: *"Ada titipan buat aku?"* Mirip anak kos yang bolak-balik nanya ke ibu kos.
- Jeda tombol → kipas **0 sampai ±4 detik**. Normal, bukan rusak.

> Catatan tutor: Firmware juga punya jalur perintah langsung lewat jaringan lokal (route `/fan`), tapi server kita ada di internet sehingga tidak bisa menjangkaunya. Yang bekerja di kelas: relay mengikuti `fanOn` di balasan server. Tidak perlu dibahas ke siswa.

### Slide 4 — PIN Kelompok: Lihat Boleh, Pencet Jangan 🔐
- Dashboard kalian **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhunya.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat.
- Jangan tulis PIN di website, foto, atau grup chat. PIN = kunci rumah.

### Slide 5 — Manual vs Otomatis 🤖
| Mode | Siapa yang memutuskan | Contoh di dunia nyata |
|---|---|---|
| **Manual** | **Kamu**, lewat tombol | Saklar lampu, remote TV |
| **Otomatis** | **Aturan**: kalau suhu > ambang → kipas nyala | AC, kulkas, rice cooker |
- Di mode Otomatis, server membandingkan suhu terbaru dengan **ambang**. Di atas ambang → nyala. Di bawah → mati.
- Tekan tombol kipas saat Otomatis = **ambil alih** jadi Manual.

### Slide 6 — Slider "Nyala Otomatis di Atas N°C" 🎚️
- Slider **20–40°C**. Geser, lalu **lepas**: ambang baru dikirim ke server.
- Tips uji cepat: ambang = **suhu ruangan + 1°C**, lalu **genggam** sensor.
- Awas **cetak-cetek**: kalau ambang terlalu dekat suhu ruangan, kipas bisa nyala-mati terus. Geser ambang sedikit menjauh.

### Slide 7 — Kipas Nggak Nurut? Cek Ini 🧰
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Ditekan, > 10 detik tidak ada apa-apa | Serial Monitor: masih `kode respons: 200`? |
| Relay klik, kipas diam | Kabel COM, NO, dan kipas − ke GND |
| Kipas **kebalikan** dari dashboard | Kipas di NC? Kalau sudah di NO → Slide 8 |
| Otomatis, kipas tidak mau nyala | Ambang terlalu tinggi, genggam lebih lama |

### Slide 8 — Satu Kata untuk Kipas yang Kebalikan 🔁
```cpp
// potongan — firmware/sma_room_monitor/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul relay kita biasanya **active-LOW** → biarkan `true`.
- Dashboard bilang **mati** tapi kipas **berputar** (dan sebaliknya)? Ganti **satu kata** `true` → `false`, upload ulang. Kabel tidak perlu diubah.

> Catatan tutor: Satu kalimat fail-safe saja: kipas dipasang di NO supaya kalau ESP32 mati/dicabut, kipas ikut mati.

### Slide 9 — Peta Petualangan IoT 🗺️
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                           ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok  ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                                  ← HARI INI
[P13] Kustom dashboard + website online + Demo Day
```
> Catatan tutor: Alat dikumpulkan ke tutor dalam keadaan utuh untuk Demo Day P13. Tidak ada yang perlu disiapkan siswa di rumah.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab, masing-masing **+2**.

- **Topik 1 — Kontrol Manual:** Kipas tidak langsung berubah saat tombol ditekan. Kenapa itu bukan kerusakan?
- **Topik 2 — Mode Otomatis:** Ambang 30°C, suhu kelas 29,9°C dan naik-turun sedikit. Apa yang terjadi pada kipas? Gimana cara mencegahnya?
- **Topik 3 — Kipas Nggak Nurut:** Dashboard bilang kipas MATI, tapi kipasnya berputar. Apa yang kamu cek dulu sebelum mengubah kode?

Poin challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15**.

---

## Challenge

### 🟢 Easy — "Saklar dari HP" (+5) 📱
1. Buka dashboard kelompok di **HP**: `https://sma-0X.inspiralabs.id`.
2. Pilih mode **Manual**, tekan tombol kipas besar, masukkan **PIN kelompok**.
3. Kipas di meja harus **menyala**. Tekan lagi: kipas **mati**.
4. Tunjukkan ke tutor: HP di tangan, kipas di meja ikut nurut.

### 🟡 Medium — "Kipas Otomatis" (+10) 🖐️
1. Pilih mode **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor DHT22. Catat: berapa detik sampai kipas **menyala sendiri**?
3. Lepas genggaman. Catat: berapa detik sampai kipas **mati sendiri**?
4. Tunjukkan ke tutor: kipas bergerak tanpa tombol disentuh.

### 🔴 Hard — "Kipas Lebih Gesit" (+15) ⚡
1. Mode **Manual**. Ukur jeda tombol → kipas **3 kali** pakai stopwatch, hitung rata-ratanya.
2. Di firmware, ubah satu angka:
```cpp
const unsigned long SEND_INTERVAL_MS = 4000;  // ubah jadi 2000
```
3. Upload, lalu ukur lagi 3 kali. Bandingkan rata-ratanya.
4. Jawab: kenapa angka ini **tidak boleh** di bawah 2000?
5. Kembalikan ke **4000**, upload ulang.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Satu klik di HP, kipas di meja ikut bergerak.
- **Pertanyaan pemantik:** Kamu masih di sekolah, tapi pengin kipas kamar sudah nyala pas kamu pulang. Mungkin nggak? Gimana perintah dari HP bisa sampai ke kipas?
- **Konteks:** Smart lamp dan smart AC sudah bisa begini. Hari ini alat buatan kalian juga.
- Tampung 2–3 tebakan siswa (+2 per siswa), jawabannya dibahas di Topik 1 (slide *Perintah Kipas: ESP32 yang Bertanya*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #6 (Curiosity & Secrets — Rasa Penasaran)**

# "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." ⏳

Isi slide:
- 🏠 Alat di rumah/sekolah ada **di balik router**. Server internet **tidak bisa** menghubunginya langsung.
- 🙋 Solusinya: **alat yang bertanya** ke server secara berkala: "ada perintah buat aku?"
- ⏳ Alat kami bertanya tiap ±4 detik → jeda tombol ke kipas **0–4 detik**. Normal!
- 🔐 Dashboard publik: semua orang bisa **lihat**, hanya pemegang **PIN** yang bisa **mengubah**.
- 🤖 Mode Otomatis: kipas nyala sendiri kalau suhu lewat ambang, persis AC.

🎙️ **Kalimat hook (pembuka rekaman):** "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."

📌 **Teks di layar:**
- Klik… 1… 2… 3… kipas jalan ⏳
- Alat di balik router 🏠
- Server nggak bisa "ngetuk pintu" 🚪
- Alat yang BERTANYA tiap 4 detik 🙋
- Lihat = publik · Ubah = PIN 🔐

🎬 **Penutup:** "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–5 detik] "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."
> - [5–15 detik] "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung."
> - [15–28 detik] "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik."
> - [28–38 detik] "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu."
> - [38–50 detik] "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pencet jangan."
> - [50–58 detik] "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #6 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Kenapa kipas pintarku telat 4 detik? |
| Durasi | ±58 detik |
| Pembicara | Tutor (HP di tangan, rakitan + kipas di meja) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–5 | Jari menekan tombol di HP, hitungan 1-2-3, kipas berputar | "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." | Klik… 1… 2… 3… ⏳ |
| 5–15 | Animasi router sebagai pintu tertutup | "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung." | Server nggak bisa "ngetuk pintu" 🚪 |
| 15–28 | Animasi ESP32 mengirim pesan berkala, server membalas | "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik." | Alat yang BERTANYA 🙋 |
| 28–38 | Stopwatch di layar 0–4 detik | "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu." | Jeda 0–4 detik = normal ✅ |
| 38–50 | Dashboard publik, pop-up PIN | "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pencet jangan." | Lihat = publik · Ubah = PIN 🔐 |
| 50–58 | Siswa SMA dengan rakitannya (pastikan izin) | "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!" | Follow 👉 |

#### Caption

Kipas pintar telat beberapa detik? Itu bukan rusak ⏳

🏠 Alat ada di balik router → server nggak bisa menghubungi langsung
🙋 Alat yang bertanya ke server tiap ±4 detik
✅ Jeda 0–4 detik = sesuai desain
🔐 Dashboard publik: lihat boleh, ubah pakai PIN
🤖 Mode Otomatis: kipas nyala sendiri kalau suhu lewat ambang

#InspiraLabs #IoT #ESP32 #SmartHome #EkskulCoding #STEM #ProyekSiswa

#### Yang sengaja tidak dibocorkan
- Alamat server dan isi firmware.
- PIN kelompok dan detail dashboard.

---

## Post-Test (5 soal, pilihan ganda)

**1. Kamu menekan tombol kipas di dashboard. Bagaimana perintah itu sampai ke ESP32?**
A. Server langsung mengetuk ESP32 lewat WiFi sekolah B. ESP32 lapor suhu tiap ±4 detik, lalu membaca status kipas dari balasan server C. HP mengirim sinyal Bluetooth ke ESP32 D. Relay membuka website sendiri

**2. Teman dari kelas lain membuka dashboard kelompokmu tanpa tahu PIN. Apa yang bisa dia lakukan?**
A. Menyalakan dan mematikan kipas B. Mengubah ambang suhu di slider C. Hanya melihat suhu, kelembapan, dan status kipas D. Mengganti firmware ESP32

**3. Mode Otomatis aktif dengan slider "Nyala otomatis di atas 29°C". Suhu terbaca 31°C. Apa yang terjadi?**
A. Kipas menyala sendiri tanpa tombol ditekan B. Kipas mati C. Dashboard meminta upload ulang D. ESP32 restart

**4. Kipas sudah di terminal NO. Dashboard bilang kipas MATI, tapi kipasnya BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
A. Mengganti `DEVICE_ID` B. Mengganti `WIFI_PASSWORD` C. Menghapus `api.js` D. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false`, lalu upload ulang

**5. Kenapa `SEND_INTERVAL_MS` di firmware tidak boleh diubah ke angka di bawah 2000?**
A. Supaya kipas berputar lebih pelan B. Sensor DHT22 butuh jeda minimal 2 detik antar pembacaan C. Karena WiFi hanya menyala 2 detik sekali D. Karena dashboard hanya bisa menampilkan 2 angka

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** kipas menyala & mati mengikuti tombol di HP dalam ±0–5 detik. Bukti = demo langsung ke tutor.

**Medium:**
- Kipas menyala setelah suhu yang **diterima server** melewati ambang. Ada 2 jeda: suhu DHT22 naik pelan (±10–40 detik digenggam), lalu laporan tiap ±4 detik.
- Mati sendiri biasanya lebih lama (sensor butuh waktu dingin lagi, bisa 30–90 detik). Angka berapa pun diterima asal kipas nyala & mati sendiri.
- Kipas cetak-cetek di dekat ambang: geser slider naik 1°C.

**Hard:**
- Rata-rata jeda 4000 ms ≈ **2–3 detik** (0–4 detik + waktu internet). Dengan 2000 ms ≈ **1–1,5 detik**, kira-kira separuhnya, karena ESP32 bertanya dua kali lebih sering.
- Tidak boleh di bawah 2000: DHT22 hanya bisa dibaca **maksimal tiap 2 detik** (lebih cepat → `Gagal baca sensor`), dan server melayani semua kelompok sekaligus (makin sering = makin berat).
- Wajib dikembalikan ke **4000** dan di-upload ulang sebelum kelas selesai.

### Catatan tutor
- Firmware masih mendaftarkan route `/fan` (perintah langsung dalam jaringan lokal), tapi server online tidak bisa menjangkau IP lokal ESP32. Yang bekerja di kelas: relay mengikuti `fanOn` di balasan laporan. Jangan ajarkan bahwa server "mendorong" perintah ke ESP32.
- PIN: browser yang pernah benar menyimpan PIN; browser/HP lain akan bertanya lagi. Setelah "PIN salah", PIN tersimpan dihapus, tekan tombol lagi untuk mengetik ulang. Jangan bacakan PIN di depan kelas.
- Kalau ada yang iseng mencoba PIN kelompok lain: bahas sebagai etika keamanan, bukan hukuman.

### Kunci Post-Test
1. B 2. C 3. A 4. D 5. B

### Pembahasan singkat
- No. 1: alat di balik router tidak bisa dihubungi langsung dari internet; alatnya yang bertanya tiap ±4 detik.
- No. 2: dashboard publik untuk dilihat; mengubah kipas/mode/slider butuh PIN.
- No. 4: gejala kebalikan padahal kipas di NO = modul active-HIGH → satu kata `RELAY_ACTIVE_LOW`.
- No. 5: batas kecepatan baca DHT22 = 2 detik.

---------- SELESAI ISI MATERI AJAR ----------
