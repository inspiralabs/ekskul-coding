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
- Slide "Forum Diskusi Live Coding": label kecil "forum Diskusi Live Coding", pertanyaan besar di tengah, layout lega.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge "+10", instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
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
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

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

Satu klik di website, kipas di meja ikut bergerak.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kalau kamu menyalakan lampu pintar dari luar kota, bagaimana perintah dari HP-mu bisa sampai ke lampu yang ada di balik router rumah?

Server di internet tidak bisa "mengetuk pintu" alat di balik router. Hari ini kita lihat cara alat kita tetap bisa menerima perintah.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Kontrol Manual**: Perjalanan perintah kipas, jeda ±4 detik, PIN kelompok.
- **02 Mode Otomatis**: Manual vs Otomatis, slider ambang suhu.
- **03 Fail-Safe**: Perilaku kipas saat ada yang putus, relay active-HIGH, troubleshooting.

---

### Kontrol Dua Arah
- P11: data **naik**: sensor → ESP32 → server → dashboard.
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Semua fitur **sudah jadi**. Tugas kalian: **menguji** apakah rakitan benar-benar menurut, dan **membuktikan** perilakunya dengan mata, stopwatch, dan multimeter.

```wiring
Judul: Jalur perintah turun: ESP32 → relay → kipas
Komponen: ESP32 DevKit V1, breadboard, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D18 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: kabel biru D18 → IN ("LOW = kipas ON") ; terminal NO ("fail-safe")
```

> 🗣️ SPEAKER NOTES: Peran berdua: Pengendali (klik dashboard, pegang PIN) & Pengamat (stopwatch, amati relay/kipas, multimeter); tukar tiap topik. Peserta individu: pegang HP sebagai stopwatch di tangan kiri.

---

### Perjalanan Perintah Kipas
```
[Tombol dashboard] ──► [Server] simpan: "kipas sma-04 = ON"
                              ▲
                              │ tiap ±4 detik ESP32 kirim data suhu,
                              │ server MEMBALAS dengan status kipas terbaru
                              ▼
                         [ESP32] → relay IN = LOW → relay klik → kipas berputar
```
- Server **tidak** mengirim perintah langsung ke ESP32. ESP32 yang **bertanya** setiap kali melapor suhu.
- Balasan server berisi `"fanOn":true` atau `"fanOn":false`. Relay mengikuti balasan itu.

---

### Kenapa Sampai ±4 Detik?
- ESP32 melapor **tiap ±4 detik** sambil bertanya "ada perintah untukku?". Perintah dashboard terbawa di balasan **berikutnya**.
- Jeda tombol → kipas: **0 sampai ±4 detik**. Normal, bukan rusak.
- Kenapa tidak langsung? ESP32 ada **di balik router** sekolah: server di internet tidak bisa "mengetuk pintunya". Banyak smart device memakai pola ini.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: lampu pintar di balik router tidak "didatangi" server; lampunya yang terus terhubung/bertanya ke server. Analogi: siswa yang tiap 4 detik mampir ke meja piket bertanya "ada titipan untukku?". Titipan datang tepat setelah ia pergi → ia baru tahu ±4 detik kemudian. Bandingkan dengan tebakan siswa tadi.

---

### PIN Kelompok: Publik Hanya Melihat
- Dashboard nanti tayang **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhu.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok 4 digit** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat. PIN salah → "PIN salah", kipas tidak berubah.
- **Jangan** tulis PIN di `index.html`, foto, atau slide presentasi. PIN = kunci rumah.

> 🗣️ SPEAKER NOTES: Bagikan PIN ke masing-masing kelompok secara pribadi (kertas/DM), jangan dibacakan di depan kelas.

---

### Forum Diskusi Live Coding

**Kenapa kipas tidak langsung berubah saat tombol diklik, dan kenapa itu bukan kerusakan?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kontrol Manual. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Saklar dari Dashboard" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Buka `index.html` kelompok, mode **Manual**. Klik tombol kipas besar, masukkan **PIN kelompok**.
2. Pakai stopwatch: ukur waktu dari klik sampai relay **klik**. Ulangi 5 kali (ON dan OFF), tulis rata-ratanya.
3. Jelaskan: kenapa hasilnya tidak selalu sama?

Simpan hasil sebagai `P12_NamaSiswa_C1` (tabel 5 pengukuran)

---

### Mode Manual vs Otomatis
| Mode | Siapa yang memutuskan kipas | Cara pakai |
|---|---|---|
| **Manual** | **Kalian**, lewat tombol kipas besar | Klik tombol kipas: ON ↔ OFF |
| **Otomatis** | **Server**, membandingkan suhu terbaru dengan ambang | Klik **Otomatis**, atur slider |
- Mode Otomatis: kipas menyala kalau suhu **di atas** ambang, mati kalau di bawah.
- Klik tombol kipas besar saat Otomatis = **ambil alih** ke Manual.
- Belum pernah diubah? Mode awal = **Otomatis, ambang 30°C**.

---

### Slider "Nyala Otomatis di Atas N°C"
- Slider **20–40°C**. Geser lalu **lepas**: nilai dikirim ke server (minta PIN kalau belum).
- Tips: atur ambang = **suhu ruangan + 1°C**, supaya bisa diuji dengan **genggaman tangan**.
- Ide yang sama dengan **Termostat Tangan** (P10), bedanya sekarang ambang diatur dari **website**, tanpa upload ulang.

---

### Forum Diskusi Live Coding

**Kalau ambang diatur 20°C di kelas yang suhunya 28°C, apa yang terjadi? Kalau 40°C?**

> 🗣️ SPEAKER NOTES: Topik 2 — Mode Otomatis. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Uji Otomatis dengan Tangan" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Klik **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor. Catat suhu di dashboard saat kipas mulai berputar, dan berapa detik sejak digenggam.
3. Lepas genggaman, tunggu kipas mati sendiri. Catat suhunya.
4. Geser slider ke **40°C**. Apa yang terjadi pada kipas? Kenapa?

Simpan hasil sebagai `P12_NamaSiswa_C2` (catatan suhu & waktu)

---

### Fail-Safe: Kalau Ada yang Putus
| Kejadian | Kipas | Kenapa |
|---|---|---|
| ESP32 dicabut / mati | **Mati** | Relay tidak aktif → COM–NO terputus (kipas di **NO**) |
| ESP32 baru menyala | **Mati** dulu | Firmware mematikan relay saat start, lalu ikut balasan server |
| WiFi/internet putus | **Tetap** di status terakhir | Tidak ada balasan baru, relay tidak diubah |
| Sensor DHT22 lepas | **Tetap** di status terakhir | Data tidak terkirim, balasan baru tidak datang |
- Kipas di **NO** = aman saat listrik ESP32 hilang. Saat **jaringan** putus, kipas bisa **terus menyala**.

---

### Satu Kata untuk Relay Active-HIGH
```cpp
// potongan — firmware/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul kita **active-LOW** (dibuktikan di P9 & P10) → biarkan `true`.
- Tanda modul **active-HIGH**: dashboard bilang kipas **mati**, tapi kipas **berputar** (dan sebaliknya).
- Perbaikannya **satu kata**: `true` → `false`, lalu upload ulang. Kabel tidak diubah.

---

### Troubleshooting Kontrol Kipas
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Klik tombol, tidak ada apa-apa > 10 detik | Serial: masih `kode respons: 200`? Lapisan WiFi/sensor (P11) |
| Relay klik, kipas diam | Sisi beban: COM, NO, kipas − ke GND (P10) |
| Kipas **terbalik** dari dashboard | Kipas di NC? Kalau sudah di NO → `RELAY_ACTIVE_LOW` |
| Otomatis, kipas tidak mau menyala | Ambang terlalu tinggi; genggam lebih lama |
| Kipas menyala-mati cepat di Otomatis | Suhu tepat di ambang. Geser ambang 1°C |

---

### Forum Diskusi Live Coding

**Saat WiFi putus, kipas bisa terus menyala. Untuk alat apa hal ini berbahaya?**

> 🗣️ SPEAKER NOTES: Topik 3 — Fail-Safe. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Arahkan ke contoh pemanas, pompa air, kompor listrik.

---

### Challenge 🔴 Hard — "Uji Fail-Safe" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Kipas ON dari dashboard, lalu **cabut USB** ESP32. Apa yang terjadi? Colok lagi: berapa detik sampai kipas kembali menyala?
2. Jaringan putus: saat kipas ON, **matikan hotspot** yang dipakai alat 30 detik (alat tutor atau hotspot HP sendiri, **bukan WiFi kelas**). Klik OFF di dashboard: kipas menurut? Nyalakan hotspot lagi, amati.
3. Ubah **satu kata** `RELAY_ACTIVE_LOW true` → `false`, upload. Bandingkan dashboard vs kipas, ukur pin IN. **Kembalikan ke `true`**, upload ulang.
4. Tulis tabel hasil + 1 kalimat: kapan alat kita **aman**, kapan **tidak**?

Simpan hasil sebagai `P12_NamaSiswa_C3` (tabel hasil)

---

### Peta Proyek Akhir
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ✅
[P12] Kontrol kipas dari dashboard: manual & mode otomatis    ← HARI INI
[P13] Rapikan rakitan + kustom dashboard + showcase
```

> 🗣️ SPEAKER NOTES: Tugas ringan untuk P13: siapkan foto kelompok (landscape, ukuran wajar) dan ide warna tema. Bawa kotak kecil/kardus untuk casing kalau ada.

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

MINGGU DEPAN (P13): **Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor**

Bawa foto kelompok dan kotak/kardus kecil untuk casing.

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
| Target silabus | Siswa mampu mengontrol relay/kipas dari dashboard (manual & mode otomatis) dan menguji perilaku rakitan secara fisik (proyek akhir tahap 2: kontrol dua arah) |
| Penilaian | Progres proyek akhir: kipas mengikuti tombol dashboard (≤ ±4 detik) dan menyala sendiri di mode Otomatis saat sensor digenggam |
| Kaitan dengan proyek akhir | Fitur kontrol kipas **sudah jadi** di folder kelompok (mis. `sma-04`): tombol kipas besar, tombol **Manual/Otomatis**, slider **"Nyala otomatis di atas N°C"** (20–40) di `index.html`, dan `setRelay()` + `#define RELAY_ACTIVE_LOW true` di `firmware/sma_room_monitor.ino`. Tidak ada kode yang ditulis; satu-satunya kemungkinan edit = **satu kata** `RELAY_ACTIVE_LOW` kalau modul relay ternyata active-HIGH. |

## Alat & bahan (per kelompok)

- Rakitan lengkap (DHT22 di D4, relay di D18, kipas DC 5V di NO) dengan firmware proyek P11 yang sudah `kode respons: 200`
- Laptop + **folder kelompok** dari zip tutor (mis. `sma-04`) dan HP (opsional, untuk membuka dashboard)
- **PIN kelompok** 4 digit dari tutor (lihat `docs/HANDOUT_SISWA.md`)
- Stopwatch HP, multimeter (1 per kelas)

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p12/Panduan_Pengajar_P12_SMA.md`.

1. Pastikan setiap kelompok sudah lolos P11 (data masuk dashboard). Yang belum: selesaikan dulu di 10 menit pertama.
2. Siapkan PIN kelompok (`docs/HANDOUT_SISWA.md`). Bagikan **hanya** ke kelompok yang bersangkutan.
3. Uji 1 rakitan: klik tombol kipas di dashboard → kipas berubah dalam ±4 detik; mode Otomatis + genggam sensor → kipas menyala sendiri.
4. Siapkan **alat tutor tersambung ke hotspot HP tutor** untuk Challenge Hard langkah 2 (WiFi kelas tidak boleh dimatikan).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo alat tutor: klik dashboard → kipas berputar |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–17 | Materi | Perjalanan perintah kipas, kenapa ±4 detik, PIN kelompok |
| 17–25 | 🟢 Challenge Easy | Saklar dari Dashboard |
| 25–31 | Materi | Mode Manual vs Otomatis, slider ambang |
| 31–41 | 🟡 Challenge Medium | Uji Otomatis dengan Tangan |
| 41–47 | Materi | Fail-safe, `RELAY_ACTIVE_LOW`, troubleshooting kipas |
| 47–57 | 🔴 Challenge Hard | Uji Fail-Safe |
| 57–60 | Peta proyek | Slide peta proyek akhir |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Kontrol Dua Arah → Perjalanan Perintah Kipas → Kenapa Sampai ±4 Detik? → PIN Kelompok: Publik Hanya Melihat → 💬 Forum Diskusi → 🟢 Easy → Mode Manual vs Otomatis → Slider "Nyala Otomatis di Atas N°C" → 💬 Forum Diskusi → 🟡 Medium → Fail-Safe: Kalau Ada yang Putus → Satu Kata untuk Relay Active-HIGH → Troubleshooting Kontrol Kipas → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Kontrol Dua Arah 🔄
- P11: data **naik**: sensor → ESP32 → server → dashboard. ✅
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Semua fitur **sudah jadi**. Tugas kalian: **menguji** apakah rakitan benar-benar menurut, dan **membuktikan** perilakunya dengan mata, stopwatch, dan multimeter.

> Catatan tutor: Peran berdua: **Pengendali** (klik dashboard, pegang PIN) & **Pengamat** (stopwatch, amati relay/kipas, multimeter); tukar tiap topik. Peserta individu: pegang HP sebagai stopwatch di tangan kiri.

### Slide 2 — Perjalanan Perintah Kipas 🛤️
```
[Tombol dashboard] ──► [Server] simpan: "kipas sma-04 = ON"
                              ▲
                              │ tiap ±4 detik ESP32 kirim data suhu,
                              │ server MEMBALAS dengan status kipas terbaru
                              ▼
                         [ESP32] → relay IN = LOW → relay klik → kipas berputar
```
- Server **tidak** mengirim perintah langsung ke ESP32. ESP32 yang **bertanya** setiap kali melapor suhu.
- Balasan server berisi `"fanOn":true` atau `"fanOn":false`. Relay mengikuti balasan itu.

### Slide 3 — Kenapa Sampai ±4 Detik? ⏳
- ESP32 melapor **tiap ±4 detik** sambil bertanya "ada perintah untukku?". Perintah dashboard terbawa di balasan **berikutnya**.
- Jeda tombol → kipas: **0 sampai ±4 detik**. Normal, bukan rusak.
- Kenapa tidak langsung? ESP32 ada **di balik router** sekolah: server di internet tidak bisa "mengetuk pintunya". Banyak smart device memakai pola ini.

> Catatan tutor: Analogi: siswa yang tiap 4 detik mampir ke meja piket bertanya "ada titipan untukku?". Titipan datang tepat setelah ia pergi → ia baru tahu ±4 detik kemudian.

### Slide 4 — PIN Kelompok: Publik Hanya Melihat 🔐
- Nanti dashboard kalian tayang **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhu.
- Tapi **mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok 4 digit** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat. PIN salah → muncul "PIN salah", kipas tidak berubah.
- **Jangan** tulis PIN di `index.html`, foto, atau slide presentasi. PIN = kunci rumah.

### Slide 5 — Mode Manual vs Otomatis 🤖
| Mode | Siapa yang memutuskan kipas | Cara pakai |
|---|---|---|
| **Manual** | **Kalian**, lewat tombol kipas besar | Klik tombol kipas: ON ↔ OFF |
| **Otomatis** | **Server**, membandingkan suhu terbaru dengan ambang | Klik **Otomatis**, atur slider |
- Di mode Otomatis, kipas menyala kalau suhu **di atas** ambang, mati kalau di bawah.
- Klik tombol kipas besar saat Otomatis = **ambil alih** ke Manual.
- Belum pernah diubah? Mode awal = **Otomatis, ambang 30°C**.

### Slide 6 — Slider "Nyala Otomatis di Atas N°C" 🎚️
- Slider **20–40°C**. Geser lalu **lepas**: nilai dikirim ke server (minta PIN kalau belum).
- Tips: atur ambang = **suhu ruangan + 1°C**, supaya bisa diuji dengan **genggaman tangan**.
- Ide yang sama dengan **Termostat Tangan** (Challenge Medium P10), bedanya sekarang ambang diatur dari **website**, tanpa upload ulang.

### Slide 7 — Fail-Safe: Kalau Ada yang Putus 🧯
| Kejadian | Yang terjadi pada kipas | Kenapa |
|---|---|---|
| ESP32 dicabut / mati | **Mati** | Relay tidak aktif → COM–NO terputus (kipas di **NO**) |
| ESP32 baru menyala | **Mati** dulu | Firmware mematikan relay saat start, lalu ikut balasan server |
| WiFi/internet putus | **Tetap** di status terakhir | ESP32 tidak dapat balasan baru, relay tidak diubah |
| Sensor DHT22 lepas | **Tetap** di status terakhir | Data tidak terkirim, balasan baru tidak datang |
- Kesimpulan: kipas di **NO** membuat alat aman saat listrik ESP32 hilang. Tapi saat **jaringan** putus, kipas bisa **terus menyala**. Di produk sungguhan (pemanas, pompa) ini perlu pengaman tambahan.

### Slide 8 — Satu Kata untuk Relay Active-HIGH 🔁
```cpp
// potongan — firmware/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul kita **active-LOW** (sudah dibuktikan di P9 & P10) → biarkan `true`.
- Tanda modul **active-HIGH**: dashboard bilang kipas **mati**, tapi kipas **berputar** (dan sebaliknya).
- Perbaikannya **satu kata**: `true` → `false`, lalu upload ulang. Kabel tidak perlu diubah.

### Slide 9 — Troubleshooting Kontrol Kipas 🧰
| Gejala | Cek |
|---|---|
| Klik tombol, muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Klik tombol, tidak terjadi apa-apa > 10 detik | Serial Monitor: masih `kode respons: 200`? Lapisan WiFi/sensor (P11) |
| Relay klik, kipas diam | Sisi beban: COM, NO, kipas − ke GND (P10) |
| Kipas **terbalik** dari dashboard | Kipas di NC? Kalau sudah di NO → modul active-HIGH (`RELAY_ACTIVE_LOW`) |
| Mode Otomatis, kipas tidak mau menyala | Ambang terlalu tinggi; genggam lebih lama; cek suhu di dashboard benar-benar di atas ambang |
| Kipas menyala-mati cepat di mode Otomatis | Suhu tepat di sekitar ambang. Naikkan/turunkan ambang 1°C |

### Slide 10 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ✅
[P12] Kontrol kipas dari dashboard: manual & mode otomatis    ← HARI INI
[P13] Rapikan rakitan + kustom dashboard + showcase
```
> Catatan tutor: Tugas rumah ringan untuk P13: siapkan **foto kelompok** (landscape, ukuran wajar) dan ide **warna tema**. Bawa kotak kecil/kardus untuk casing kalau ada.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Kontrol Manual:** Kenapa kipas tidak langsung berubah saat tombol diklik, dan kenapa itu bukan kerusakan?
- **Topik 2 — Mode Otomatis:** Kalau ambang diatur 20°C di kelas yang suhunya 28°C, apa yang terjadi? Kalau 40°C?
- **Topik 3 — Fail-Safe:** Saat WiFi putus, kipas bisa terus menyala. Untuk alat apa hal ini berbahaya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Saklar dari Dashboard"
1. Buka `index.html` kelompok, mode **Manual**. Klik tombol kipas besar, masukkan **PIN kelompok** saat diminta.
2. Pakai stopwatch: ukur waktu dari klik sampai relay **klik**. Ulangi 5 kali (ON dan OFF), tulis rata-ratanya.
3. Jelaskan dengan slide *Kenapa Sampai ±4 Detik?*: kenapa hasilnya tidak selalu sama?

### 🟡 Medium — "Uji Otomatis dengan Tangan" 🖐️
1. Klik **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor. Catat: suhu di dashboard saat kipas mulai berputar, dan berapa detik sejak digenggam.
3. Lepas genggaman, tunggu kipas mati sendiri. Catat suhunya.
4. Geser slider ke **40°C**. Apa yang terjadi pada kipas? Kenapa?

### 🔴 Hard — "Uji Fail-Safe" 🧯
1. Nyalakan kipas dari dashboard (Manual ON). **Cabut USB** ESP32. Apa yang terjadi pada kipas? Colok lagi: berapa detik sampai kipas kembali menyala?
2. Jaringan putus: saat kipas ON, **matikan hotspot** yang dipakai alat selama 30 detik (alat tutor, atau alat kalian kalau tersambung ke hotspot HP sendiri; **jangan matikan WiFi kelas**). Apa yang terjadi pada kipas? Klik OFF di dashboard: apakah kipas menurut? Nyalakan hotspot lagi, amati.
3. Eksperimen satu kata: ubah `#define RELAY_ACTIVE_LOW true` → `false`, upload. Bandingkan status kipas di dashboard dengan kipas sungguhan, ukur tegangan pin IN. **Kembalikan ke `true`** dan upload ulang.
4. Tulis tabel hasil 3 percobaan + 1 kalimat: kapan alat kita **aman**, kapan **tidak**?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Satu klik di website, kipas di meja ikut bergerak.
- **Pertanyaan pemantik:** Kalau kamu menyalakan lampu pintar dari luar kota, bagaimana perintah dari HP-mu bisa sampai ke lampu yang ada di balik router rumah?
- **Konteks:** Server di internet tidak bisa "mengetuk pintu" alat di balik router. Hari ini kita lihat cara alat kita tetap bisa menerima perintah.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Kenapa Sampai ±4 Detik?*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #6 (Curiosity & Secrets — Rasa Penasaran)**

# "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." ⏳

Isi slide:
- 🏠 Alat di rumah/sekolah ada **di balik router**. Server internet **tidak bisa** menghubunginya langsung.
- 🙋 Solusinya: **alat yang bertanya** ke server secara berkala: "ada perintah buat aku?"
- ⏳ Alat kami bertanya tiap ±4 detik → jeda tombol ke kipas **0–4 detik**. Normal!
- 🔐 Dashboard publik: semua orang bisa **lihat**, hanya pemegang **PIN** yang bisa **mengubah**.
- 🧯 Fail-safe: kipas di terminal **NO** → alat mati, kipas ikut mati.

🎙️ **Kalimat hook (pembuka rekaman):** "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."

📌 **Teks di layar:**
- Klik… 1… 2… 3… kipas jalan ⏳
- Alat di balik router 🏠
- Server nggak bisa "ngetuk pintu" 🚪
- Alat yang BERTANYA tiap 4 detik 🙋
- Lihat = publik · Ubah = PIN 🔐

🎬 **Penutup:** "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–5 detik] "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."
> - [5–15 detik] "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung. Router nggak bakal ngizinin."
> - [15–28 detik] "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik."
> - [28–38 detik] "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu. Banyak smart device pakai pola alat-yang-terhubung-ke-server kayak gini."
> - [38–50 detik] "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pegang jangan."
> - [50–58 detik] "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!"

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
| 0–5 | Jari klik tombol di HP, hitungan 1-2-3, kipas berputar | "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." | Klik… 1… 2… 3… ⏳ |
| 5–15 | Animasi router sebagai pintu tertutup | "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung. Router nggak bakal ngizinin." | Server nggak bisa "ngetuk pintu" 🚪 |
| 15–28 | Animasi ESP32 mengirim pesan berkala, server membalas | "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik." | Alat yang BERTANYA 🙋 |
| 28–38 | Stopwatch di layar 0–4 detik | "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu. Banyak smart device pakai pola alat-yang-terhubung-ke-server kayak gini." | Jeda 0–4 detik = normal ✅ |
| 38–50 | Dashboard publik, pop-up PIN | "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pegang jangan." | Lihat = publik · Ubah = PIN 🔐 |
| 50–58 | Siswa SMA dengan rakitannya (pastikan izin) | "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!" | Follow 👉 |

#### Caption

Kipas pintar telat beberapa detik? Itu bukan rusak ⏳

🏠 Alat ada di balik router → server nggak bisa menghubungi langsung
🙋 Alat yang bertanya ke server tiap ±4 detik
✅ Jeda 0–4 detik = sesuai desain
🔐 Dashboard publik: lihat boleh, ubah pakai PIN
🧯 Kipas di NO → alat mati, kipas ikut mati

#InspiraLabs #IoT #ESP32 #SmartHome #EkskulCoding #STEM #ProyekSiswa

#### Yang sengaja tidak dibocorkan
- Alamat server dan isi firmware.
- PIN kelompok dan detail dashboard.

---

## Post-Test (5 soal, pilihan ganda)

**1. Kamu klik "kipas ON" di dashboard. Bagaimana perintah itu sampai ke ESP32?**
A. Server langsung mengirim perintah ke IP ESP32 di WiFi sekolah B. ESP32 melapor data tiap ±4 detik dan membaca status kipas dari balasan server C. Dashboard mengirim sinyal Bluetooth ke ESP32 D. Relay membaca website sendiri

**2. Jeda dari klik tombol sampai kipas berputar paling lama sekitar…**
A. 0,01 detik B. ±4 detik (ditambah waktu internet) C. 1 menit D. Sampai ESP32 di-restart

**3. Mode Otomatis aktif, slider "Nyala otomatis di atas 29°C", suhu terbaca 31°C. Apa yang terjadi?**
A. Kipas menyala B. Kipas mati C. Dashboard meminta upload ulang D. Relay rusak

**4. Kipas terpasang di terminal NO. ESP32 tiba-tiba dicabut saat kipas menyala. Apa yang terjadi pada kipas?**
A. Tetap menyala selamanya B. Menyala lebih kencang C. Mati, karena relay tidak aktif dan COM–NO terputus D. Berputar terbalik

**5. Kipas di NO. Dashboard menunjukkan kipas MATI, tetapi kipas sungguhan BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
A. Mengganti `API_KEY` B. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false` lalu upload ulang C. Mengganti `DEVICE_ID` D. Menghapus `api.js`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** jeda bervariasi **±0,5–5 detik**, rata-rata ±2–3 detik. Tidak selalu sama karena bergantung pada **kapan** klik terjadi relatif terhadap laporan ESP32 berikutnya (tiap ±4 detik), plus waktu internet.

**Medium:**
- Kipas menyala setelah suhu yang **diterima server** melewati ambang. Ingat ada 2 jeda: suhu sensor naik pelan, lalu laporan tiap ±4 detik.
- Ambang 40°C → kipas **mati** (suhu ruangan + genggaman tidak akan mencapai 40°C). Ini cara cepat "mematikan" mode otomatis tanpa pindah ke Manual.
- Kalau kipas menyala-mati bergantian di dekat ambang: bahas lagi jeda 0,5°C (histeresis) di Termostat Tangan P10. Server di proyek ini cukup membandingkan suhu dengan ambang, jadi atur ambang agak jauh dari suhu ruangan.

**Hard:**
1. Cabut USB → kipas **langsung mati** (fail-safe NO). Colok lagi → kipas mati dulu (firmware memanggil `setRelay(false)` saat start), lalu menyala lagi setelah WiFi tersambung + laporan pertama (±5–15 detik).
2. WiFi mati → kipas **tetap menyala** (status terakhir). Perintah OFF dari HP tersimpan di server tapi **tidak sampai**; begitu WiFi kembali, laporan berikutnya membawa `fanOn:false` → kipas mati. Pelajaran: fail-safe NO hanya melindungi dari **hilang listrik**, bukan dari **hilang jaringan**.
3. `RELAY_ACTIVE_LOW false` pada modul active-LOW → semua **terbalik**: dashboard OFF, kipas berputar; IN ±0 V saat dashboard OFF. Kembalikan ke `true`.

### Catatan tutor
- Firmware masih mendaftarkan route `/fan` (perintah langsung dalam jaringan lokal), tapi server online tidak bisa menjangkau IP lokal ESP32. Yang benar-benar bekerja di kelas: relay mengikuti `fanOn` di balasan laporan tiap ±4 detik. Jangan ajarkan bahwa server "mendorong" perintah langsung ke ESP32.
- Hard langkah 2: WiFi kelas dipakai semua kelompok, jadi **jangan** dimatikan. Siapkan alat tutor di hotspot HP tutor untuk demo bersama, atau izinkan kelompok yang cepat mengganti 2 baris WiFi ke hotspot HP sendiri lalu upload (kembalikan ke WiFi kelas setelahnya).
- PIN: kalau kelompok lupa PIN, browser yang pernah benar menyimpan PIN; browser lain akan bertanya lagi. Jangan bacakan PIN di depan kelas.

### Kunci Post-Test
1. B 2. B 3. A 4. C 5. B

### Pembahasan singkat
- No. 1: alat di balik router tidak bisa dihubungi langsung dari internet; alatnya yang bertanya.
- No. 4: NO = fail-safe terhadap hilangnya listrik ESP32.
- No. 5: gejala terbalik padahal kipas di NO = modul active-HIGH → satu kata `RELAY_ACTIVE_LOW`.

---------- SELESAI ISI MATERI AJAR ----------
