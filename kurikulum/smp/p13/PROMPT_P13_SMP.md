PROMPT P13 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1cyCZCwob46KBKH6sKKiPQvYf5c5fkAtz → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P13 SMP — Rapikan Alat & Showcase Proyek Akhir 🏆

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
- Slide 2 "COVER": cover pertemuan. Label kecil "P13 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
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
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P13 SMP | nomor slide" (slide Linktree tanpa nomor).
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

# P13 SMP — Rapikan Alat & Showcase Proyek Akhir

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P13 SMP**

# Rapikan Alat & Showcase Proyek Akhir

Rapikan alatmu, pamerkan karyamu, dan bawa website-mu online.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Alat kita sudah jalan di meja. Kenapa engineer sungguhan tetap menguji ulang setelah alatnya dimasukkan ke kotak?

Banyak alat yang lulus uji di meja, lalu gagal setelah dirapikan atau dipindahkan.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1 (slide Tips Engineer).

---

### Apa yang kita capai hari ini?

- **01 Rapikan Alat**: Masukkan rakitan ke casing, lalu uji ulang.
- **02 Showcase & Serah Folder**: Pamerkan alat, serahkan website ke tutor.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Perakit** | Menempel & merapikan isi casing |
| **Pengecek** | Menguji ulang alat & dashboard |
| **Desainer** | Menghias casing & label |
| **Presenter** | Memimpin latihan presentasi |

Saat showcase, **semua anggota** bicara minimal 1 kalimat. Kerja sendiri? Pegang semua peran.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Peserta individu presentasi sendiri; boleh minta teman sebelah membantu memegang alat saat demo.

---

### Hari Ini Kalian Jadi Engineer!
- 5 minggu lalu: belum pernah pegang ESP32.
- Hari ini: alat kalian **mengirim suhu ke internet**.
- Agenda: **rapikan** → **pamerkan** → **serahkan**.

---

### Perjalanan Kita
| Pertemuan | Yang kalian kuasai |
|---|---|
| P9 | ESP32, breadboard, LED |
| P10 | Upload program, rakit DHT22 |
| P11 | Firmware, Serial Monitor, dokter kabel |
| P12 | Dashboard, warna, foto |

---

### Kenapa Alat Butuh Casing?
- Alat sungguhan (router, CCTV) selalu punya **casing**.
- Casing melindungi kabel dari **lepas** dan **tersenggol**.
- Juga mencegah **korsleting**: listrik "ambil jalan pintas" lewat logam atau air.

---

### Aturan Casing yang Baik
- **DHT22** di dekat lubang, ±5 cm dari ESP32.
- Ada **lubang** untuk kabel USB.
- **Tidak** ada logam, aluminium foil, atau air di dalam.
- Breadboard ditempel **double tape**.
- **Label**: nama alat + Device ID.

```wiring
Judul: Tata letak di dalam casing (tampak atas)
Komponen: kotak casing, ESP32 DevKit V1 di breadboard, modul DHT22 3-pin, kabel USB ke power bank
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
- port USB ESP32 → lubang di dinding kotak → power bank (kabel USB)
Sorot: DHT22 di dekat lubang ventilasi, ±5 cm dari ESP32 ; lubang USB ; label "smp-XX" di tutup kotak
```

> 🗣️ SPEAKER NOTES: Sensor harus kena udara ruangan, bukan udara di dalam kotak. ESP32 hangat saat WiFi aktif, jadi sensor yang terlalu dekat membaca suhu lebih tinggi. Kotak sebaiknya bisa dibuka lagi untuk perbaikan.

---

### Rapikan Kabel
- Kabel **sependek mungkin**: merah = +, hitam = −, kuning = data.
- Ikat kabel panjang dengan **karet**.
- Tekan semua kabel **sampai mentok**, lalu tarik pelan.
- Label kecil di kabel kuning: **"out → D4"**.

> 🗣️ SPEAKER NOTES: Semua pemindahan kabel dilakukan dengan USB dicabut. Kalau kabel out pindah dari D4, angka DHT_PIN di firmware harus ikut diganti dan di-upload ulang (latihan P11). Paling aman: jangan pindah dari D4.

---

### Praktek: Masukkan ke Casing
1. **Cabut USB**. Tandai lubang dengan spidol. **Tutor** yang memotong.
2. Tempel breadboard + ESP32 di dasar kotak.
3. DHT22 di dekat lubang, jauh dari ESP32.
4. Rapikan kabel, beri label.
5. Colok **power bank** → data masih masuk dashboard?

> 🗣️ SPEAKER NOTES: Cutter hanya dipegang tutor. Gunting boleh dipakai siswa. Tidak pakai lem tembak (panas) di dekat board. Keliling cek posisi sensor dan lubang USB. Alat tetap butuh listrik dari power bank setelah masuk casing.

---

### Tips Engineer: Uji Ulang Setelah Dirapikan

| Gejala | Coba ini |
|---|---|
| Dashboard tidak update | Buka kotak, colok laptop, baca Serial Monitor |
| `Gagal baca sensor` kadang-kadang | Kabel tertekan tutup: rapikan, tekan sampai mentok |
| Suhu naik 1–3°C | Jauhkan sensor dari ESP32 |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: alat yang sudah jalan pun bisa rusak saat dirapikan, makanya selalu uji ulang. Ingatkan kembali tebakan siswa tadi. Lainnya: ESP32 sering restart → kabel USB tertekuk di lubang sempit / power bank lemah → perlebar lubang, ganti power bank.

---

### Forum Diskusi Live Coding

**Kenapa sensor suhu tidak boleh berdempetan dengan ESP32 di dalam kotak tertutup?**

> 🗣️ SPEAKER NOTES: Topik 1 — Rapikan Alat. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Siap Tampil" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Wajib sebelum showcase:
- [ ] Alat di dalam casing, ada label Device ID
- [ ] Menyala pakai **power bank**
- [ ] Dashboard berubah saat sensor ditiup
- [ ] Kotak diangkat, tidak ada kabel lepas

---

### Challenge 🔴 Hard — "Uji Goyang" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🔴**

1. Tutup casing, nyalakan dengan power bank.
2. Goyangkan **pelan** 10 detik (atau bawa keliling kelas).
3. Data di dashboard harus **tetap masuk**.
4. Gagal? Cari kabel yang goyang, perbaiki, ulangi.

> 🗣️ SPEAKER NOTES: Challenge ini untuk kelompok yang sudah lulus Siap Tampil. Goyang pelan, jangan dibanting. Minta siswa menulis kabel mana yang jadi masalah.

---

### Format Presentasi: 3 Kalimat Sakti
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling susah adalah **___**, kami atasi dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

Lalu **demo**: tiup sensor, semua lihat angkanya naik!

> 🗣️ SPEAKER NOTES: Kelompok 3–4 orang: bagi kalimat ke anggota berbeda, anggota ke-4 memegang alat saat demo. Kelompok 2 orang: satu orang 2 kalimat.

---

### Serahkan Folder Website
- [ ] Data sensor & foto tampil di `index.html`
- [ ] `api.js` tidak diubah
- [ ] Total ukuran folder ≤ **5 MB** (foto sudah dikecilkan, tanpa video)
- [ ] Zip bernama Device ID: **`smp-07.zip`**

Setelah tutor upload: **`smp-07.inspiralabs.id`**. Bisa dibuka dari HP siapa saja!

> 🗣️ SPEAKER NOTES: Ganti smp-07 dengan Device ID tiap kelompok. Zip: klik kanan folder smp-XX → Send to → Compressed (zipped) folder. Kumpulkan di flashdisk/folder Drive. Cek cepat ukuran & nama file sebelum siswa pulang. Bagikan link website ke grup setelah deploy.

---

### Forum Diskusi Live Coding

**Apa yang terjadi kalau foto kelompok disimpan di Downloads, bukan di dalam folder website?**

> 🗣️ SPEAKER NOTES: Topik 2 — Showcase & Serah Folder. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: foto tidak ikut ter-zip, jadi di website online foto hilang.

---

### Challenge 🟡 Medium — "Latihan 3 Kalimat" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Isi 3 kalimat sakti di kertas.
2. Latihan presentasi ke kelompok sebelah.
3. Kelompok sebelah memberi **1 pertanyaan** tentang rakitan kalian.

---

### Showcase: Panggung Engineer!
- Urutan diundi. Tiap Device ID ±**1 menit**.
- 3 kalimat sakti → **demo tiup sensor** di layar.
- Penonton: tepuk tangan + 1 pertanyaan.

> 🗣️ SPEAKER NOTES: 13 Device ID, ±1 menit per Device ID. Tampilkan dashboard tiap kelompok di proyektor saat mereka presentasi. Pakai timer yang terlihat semua siswa. Kelompok berikutnya bersiap di samping.

---

### Refleksi
- Apa yang paling seru selama merakit alat?
- Masalah kabel apa yang paling bikin pusing? Bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 13" di Linktree sudah mengarah ke Google Form P13 SMP. Post-test dikerjakan sendiri-sendiri.

---

### Terima kasih!

**SELAMAT, KALIAN SUDAH JADI ENGINEER IoT!**

Pantau website kalian di **`<device-id>.inspiralabs.id`** setelah dideploy tutor.

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P13 SMP — Rapikan Alat & Showcase Proyek Akhir 🏆

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

# SMP — Pertemuan 13: Rapikan Alat & Showcase Proyek Akhir 🏆

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 13 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menyelesaikan & mempresentasikan proyek akhir |
| Penilaian | Presentasi proyek akhir, kerapian rakitan, dan folder website yang diserahkan (rubrik di Khusus Tutor) |
| Potongan proyek akhir yang dibedah | Seluruh proyek: alat (ESP32 + DHT22 di D4, firmware `smp_room_monitor/smp_room_monitor.ino`) + website dari folder `smp-XX`. Hari ini alat dimasukkan ke **casing**, dipamerkan, dan folder website **diserahkan** ke tutor untuk online di `https://<device-id>.inspiralabs.id`. |

## Alat & bahan (per kelompok/individu)

- Alat proyek akhir dari P12 (ESP32 + DHT22, firmware terpasang) + **power bank terisi** + kabel USB (alat tetap butuh listrik di dalam casing)
- **Kotak bekas** untuk casing (kardus kecil, kotak plastik, kotak pensil bekas). **Bukan** kaleng/kotak logam.
- Double tape, selotip, karet gelang, gunting, spidol, kertas label
- Kabel jumper pendek (10 cm) kalau ada
- Laptop dengan folder website `smp-XX` (sudah dikustom di P12)
- Kelas: proyektor untuk menampilkan dashboard, 1 cutter (dipegang tutor), timer

## Persiapan tutor sebelum kelas

1. Pastikan backend online & semua Device ID (`smp-01` … `smp-13`) sudah pernah mengirim data (cek di P12).
2. Siapkan **hotspot cadangan** 2.4 GHz dan 3–4 kotak kardus cadangan untuk yang lupa membawa.
3. Siapkan flashdisk / folder Drive untuk menerima zip `smp-XX.zip`.
4. Print **rubrik penilaian** (lihat Khusus Tutor).
5. Siapkan urutan showcase (undian). Ada 13 Device ID → **±1 menit per Device ID**.
6. Pegang cutter sendiri: siswa menandai lubang dengan spidol, tutor yang memotong. Tidak ada lem tembak.
7. Panduan lengkap: `kurikulum/smp/p13/Panduan_Pengajar_P13_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Nyalakan semua alat pakai power bank, cek data masuk dashboard, tentukan peran (Slide 1) |
| 5–8 | Pembuka materi | Cover + pertanyaan pemantik + agenda |
| 8–13 | Materi | Slide 2–6: engineer, perjalanan, kenapa casing, aturan casing, rapikan kabel |
| 13–30 | Praktek | Slide 7: rakit casing + uji ulang |
| 30–32 | Tips + forum | Slide 8 + Forum Diskusi Topik 1 |
| 32–35 | 🟢 Challenge Easy | Siap Tampil (wajib) |
| 35–38 | 🔴 Challenge Hard | Uji Goyang (untuk yang sudah lulus Siap Tampil) |
| 38–41 | Materi | Slide 9–10: 3 kalimat sakti, serah folder |
| 41–42 | Forum | Forum Diskusi Topik 2 |
| 42–47 | 🟡 Challenge Medium | Latihan 3 Kalimat |
| 47–60 | Showcase | Slide 11: ±1 menit per Device ID. Tutor mengumpulkan zip selama showcase. |
| 60–62 | Refleksi | Slide 12 |
| 62–70 | Post-test & penutup | 5 soal pilihan ganda (Google Form) + foto bersama |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Hari Ini Kalian Jadi Engineer! → Perjalanan Kita → Kenapa Alat Butuh Casing? → Aturan Casing yang Baik → Rapikan Kabel → Praktek: Masukkan ke Casing → Tips Engineer: Uji Ulang Setelah Dirapikan → 💬 Forum Diskusi → 🟢 Easy → 🔴 Hard → Format Presentasi: 3 Kalimat Sakti → Serahkan Folder Website → 💬 Forum Diskusi → 🟡 Medium → Showcase: Panggung Engineer! → Refleksi → Post-test (Linktree) → Penutup.

> Buffer: membuat casing paling sering molor. Kalau lewat menit 30, Challenge Hard dilewati dan zip dikumpulkan saat post-test.

---

## Slide

### Slide 1 — Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Perakit** | Menempel & merapikan isi casing |
| **Pengecek** | Menguji ulang alat & dashboard |
| **Desainer** | Menghias casing & label |
| **Presenter** | Memimpin latihan presentasi |

- Saat showcase, **semua anggota** bicara minimal 1 kalimat. Kerja sendiri? Pegang semua peran.

### Slide 2 — Hari Ini Kalian Jadi Engineer! 👷
- 5 minggu lalu: belum pernah pegang ESP32.
- Hari ini: alat kalian **mengirim suhu ke internet**.
- Agenda: **rapikan** → **pamerkan** → **serahkan**.

### Slide 3 — Perjalanan Kita 🛤️
| Pertemuan | Yang kalian kuasai |
|---|---|
| P9 | ESP32, breadboard, LED |
| P10 | Upload program, rakit DHT22 |
| P11 | Firmware, Serial Monitor, dokter kabel |
| P12 | Dashboard, warna, foto |

### Slide 4 — Kenapa Alat Butuh Casing? 📦
- Alat sungguhan (router, CCTV) selalu punya **casing**.
- Casing melindungi kabel dari **lepas** dan **tersenggol**.
- Juga mencegah **korsleting**: listrik "ambil jalan pintas" lewat logam atau air.

### Slide 5 — Aturan Casing yang Baik ✅
- **DHT22** di dekat lubang, ±5 cm dari ESP32.
- Ada **lubang** untuk kabel USB.
- **Tidak** ada logam, aluminium foil, atau air di dalam.
- Breadboard ditempel **double tape**.
- **Label**: nama alat + Device ID.

> Catatan tutor: Sensor harus kena udara ruangan, bukan udara di dalam kotak. ESP32 hangat saat WiFi aktif, jadi sensor yang terlalu dekat membaca suhu lebih tinggi. Kotak sebaiknya bisa dibuka lagi untuk perbaikan.

### Slide 6 — Rapikan Kabel 🧵
- Kabel **sependek mungkin**: merah = +, hitam = −, kuning = data.
- Ikat kabel panjang dengan **karet**.
- Tekan semua kabel **sampai mentok**, lalu tarik pelan.
- Label kecil di kabel kuning: **"out → D4"**.

> Catatan tutor: Semua pemindahan kabel dilakukan dengan USB **dicabut**. Kalau kabel out pindah dari D4, angka `DHT_PIN` di firmware harus ikut diganti dan di-upload ulang (latihan P11). Paling aman: **jangan pindah dari D4**.

### Slide 7 — Praktek: Masukkan ke Casing 🔧
1. **Cabut USB**. Tandai lubang dengan spidol. **Tutor** yang memotong.
2. Tempel breadboard + ESP32 di dasar kotak.
3. DHT22 di dekat lubang, jauh dari ESP32.
4. Rapikan kabel, beri label.
5. Colok **power bank** → data masih masuk dashboard?

> Catatan tutor: Cutter hanya dipegang tutor; gunting boleh dipakai siswa. Tidak pakai lem tembak (panas) di dekat board.

### Slide 8 — Tips Engineer: Uji Ulang Setelah Dirapikan 🔁

| Gejala | Coba ini |
|---|---|
| Dashboard tidak update | Buka kotak, colok laptop, baca Serial Monitor |
| `Gagal baca sensor` kadang-kadang | Kabel tertekan tutup: rapikan, tekan sampai mentok |
| Suhu naik 1–3°C | Jauhkan sensor dari ESP32 |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Gejala lain: ESP32 sering restart → kabel USB tertekuk di lubang sempit / power bank lemah → perlebar lubang, ganti power bank.

### Slide 9 — Format Presentasi: 3 Kalimat Sakti 🎤
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling susah adalah **___**, kami atasi dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

- Lalu **demo**: tiup sensor, semua lihat angkanya naik!

### Slide 10 — Serahkan Folder Website 📮
- [ ] Data sensor & foto tampil di `index.html`
- [ ] `api.js` tidak diubah
- [ ] Total ukuran folder ≤ **5 MB** (foto sudah dikecilkan, tanpa video)
- [ ] Zip bernama Device ID: **`smp-07.zip`**

Setelah tutor upload: **`smp-07.inspiralabs.id`**. Bisa dibuka dari HP siapa saja!

> Catatan tutor: Zip: klik kanan folder `smp-XX` → Send to → Compressed (zipped) folder. Kumpulkan di flashdisk/folder Drive. Cek cepat ukuran & nama file sebelum siswa pulang.

### Slide 11 — Showcase: Panggung Engineer! 🌟
- Urutan diundi. Tiap Device ID ±**1 menit**.
- 3 kalimat sakti → **demo tiup sensor** di layar.
- Penonton: tepuk tangan + 1 pertanyaan.

### Slide 12 — Refleksi ✨
- Apa yang paling seru selama merakit alat?
- Masalah kabel apa yang paling bikin pusing? Bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Rapikan Alat:** Kenapa sensor suhu tidak boleh berdempetan dengan ESP32 di dalam kotak tertutup?
- **Topik 2 — Showcase & Serah Folder:** Apa yang terjadi kalau foto kelompok disimpan di Downloads, bukan di dalam folder website?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Siap Tampil" (wajib)
- [ ] Alat di dalam casing, ada label Device ID
- [ ] Menyala pakai **power bank**
- [ ] Dashboard berubah saat sensor ditiup
- [ ] Kotak diangkat, tidak ada kabel lepas

### 🟡 Medium — "Latihan 3 Kalimat"
1. Isi 3 kalimat sakti di kertas.
2. Latihan presentasi ke kelompok sebelah.
3. Kelompok sebelah memberi **1 pertanyaan** tentang rakitan kalian.

### 🔴 Hard — "Uji Goyang" 📳
1. Tutup casing, nyalakan dengan power bank.
2. Goyangkan **pelan** 10 detik (atau bawa keliling kelas).
3. Data di dashboard harus **tetap masuk**.
4. Gagal? Cari kabel yang goyang, perbaiki, ulangi. Tulis kabel mana yang jadi masalah.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Rapikan alatmu, pamerkan karyamu, dan bawa website-mu online.
- **Pertanyaan pemantik:** Alat kita sudah jalan di meja. Kenapa engineer sungguhan tetap menguji ulang setelah alatnya dimasukkan ke kotak?
- **Konteks:** Banyak alat yang lulus uji di meja, lalu gagal setelah dirapikan atau dipindahkan.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Tips Engineer: Uji Ulang Setelah Dirapikan*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #18 (Social Proof & Authority — Bukti & Otoritas)**

# "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam 5 pertemuan." 🚀

Isi slide:
- 🪜 **Roadmap 4 anak tangga** yang dipakai kelas kami:
  1. **Rakit dulu** → LED menyala tanpa kode (paling cepat terlihat hasilnya).
  2. **Upload program jadi** → Blink, lalu sensor DHT22.
  3. **Jadi dokter kabel** → baca Serial Monitor, cari kabel yang salah.
  4. **Tampilkan** → data di dashboard, website online pakai alamat sendiri.
- 🔧 Fokus ke **merakit & merawat alat**, bukan menghafal kode. Programnya disiapkan, anak-anak jadi engineer-nya.
- 📦 Langkah terakhir yang sering dilupakan: **casing & uji ulang**.

🎙️ **Kalimat hook (pembuka rekaman):** "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan."

📌 **Teks di layar:**
- 5 pertemuan. Anak SMP.
- 1️⃣ Rakit dulu 💡
- 2️⃣ Upload program jadi ⬆️
- 3️⃣ Dokter kabel 🩺
- 4️⃣ Website online 🌐

🎬 **Penutup:** "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs."

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan."
> - [4–10 detik] "Lima minggu lalu mereka belum pernah pegang mikrokontroler. Rahasianya: urutan belajarnya."
> - [10–20 detik] "Anak tangga satu: rakit dulu. Nyalakan lampu tanpa kode. Hasilnya langsung kelihatan, semangat langsung naik."
> - [20–30 detik] "Dua: upload program jadi. Lampu kedip, sensor suhu kebaca. Fokusnya ke alat, bukan ke ngetik kode."
> - [30–40 detik] "Tiga: jadi dokter kabel. Baca pesan dari alat, cari kabel yang salah, pakai multimeter. Ini skill engineer beneran."
> - [40–50 detik] "Empat: tampilkan. Data muncul di website mereka sendiri, dengan alamat sendiri, bisa dibuka dari HP siapa aja."
> - [50–56 detik] "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs."

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #18 — Social Proof & Authority (Bukti & Otoritas) |
| Judul | Anak SMP bikin alat pemantau suhu + website online dalam 5 pertemuan |
| Durasi | ±56 detik |
| Pembicara | Tutor + cuplikan showcase siswa (pastikan izin wajah/sekolah) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Siswa meniup alat dalam casing, angka di website naik di proyektor | "Anak SMP bikin alat pemantau suhu sendiri, lengkap dengan website online, dalam lima pertemuan." | Dari NOL → alat IoT + website 🚀 |
| 4–10 | Montase cepat P9 → P13 (LED, upload, sensor, dashboard, casing) | "Lima minggu lalu mereka belum pernah pegang mikrokontroler. Rahasianya: urutan belajarnya." | 5 pertemuan. Anak SMP. |
| 10–20 | LED menyala pertama kali | "Anak tangga satu: rakit dulu. Nyalakan lampu tanpa kode. Hasilnya langsung kelihatan, semangat langsung naik." | 1️⃣ Rakit dulu 💡 |
| 20–30 | Tombol Upload, LED kedip, Serial Monitor angka suhu | "Dua: upload program jadi. Lampu kedip, sensor suhu kebaca. Fokusnya ke alat, bukan ke ngetik kode." | 2️⃣ Upload program jadi ⬆️ |
| 30–40 | Siswa memegang multimeter di kabel jumper | "Tiga: jadi dokter kabel. Baca pesan dari alat, cari kabel yang salah, pakai multimeter. Ini skill engineer beneran." | 3️⃣ Dokter kabel 🩺 |
| 40–50 | HP membuka `smp-07.inspiralabs.id` dengan foto kelompok | "Empat: tampilkan. Data muncul di website mereka sendiri, dengan alamat sendiri, bisa dibuka dari HP siapa aja." | 4️⃣ Website online 🌐 |
| 50–56 | Foto bersama kelas memegang alat | "Mau anakmu atau sekolahmu bisa begini juga? Follow InspiraLabs." | Follow @inspiralabs 👉 |

#### Caption

5 minggu lalu mereka belum pernah pegang ESP32. Hari ini alatnya kirim suhu ruangan ke internet, dan website-nya online pakai alamat sendiri 🌡️🌐

Roadmap 4 anak tangga yang kami pakai:
1️⃣ Rakit dulu (LED)
2️⃣ Upload program jadi
3️⃣ Jadi dokter kabel
4️⃣ Tampilkan di website

Bangga sama kalian! 👏

#InspiraLabs #EkskulCoding #IoT #ESP32 #STEM #Elektronika #ProyekSiswa #SMP

#### Yang sengaja tidak dibocorkan
- Firmware proyek akhir, backend, dan isi dashboard.
- Detail rakitan, rubrik, dan challenge tiap pertemuan.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di dalam casing, sensor DHT22 sebaiknya diletakkan…**
A. Menempel di atas ESP32 supaya hemat tempat B. Di dekat lubang kotak, agak jauh dari ESP32 C. Dibungkus lakban supaya aman D. Di bawah breadboard

**2. Benda yang TIDAK boleh menempel langsung di bawah ESP32 adalah…**
A. Double tape B. Kardus C. Aluminium foil atau logam D. Kotak plastik

**3. Setelah alat dimasukkan ke casing, dashboard berhenti update. Langkah pertama yang tepat adalah…**
A. Menulis ulang firmware B. Membuka kotak, colok ke laptop, dan membaca Serial Monitor C. Mengganti warna dashboard D. Mengganti Device ID

**4. Urutan perjalanan data yang benar adalah…**
A. Dashboard → Server → ESP32 → DHT22
B. DHT22 → ESP32 → WiFi/Internet → Server → Dashboard
C. ESP32 → DHT22 → Dashboard → Server
D. Server → DHT22 → ESP32 → Dashboard

**5. Folder website yang diserahkan ke tutor sudah BENAR jika…**
A. Zip bernama `smp-07.zip`, berisi `index.html`, ukurannya tidak lebih dari 5 MB
B. Halaman utama bernama `rumah.html` dan foto ada di Downloads
C. Ukurannya 300 MB karena video rakitan ikut di dalamnya
D. `api.js` sudah diganti dengan Device ID kelompok lain

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge Hard
Penyebab yang paling sering ditemukan saat "Uji Goyang":
- Kabel jumper di pin ESP32 hanya menempel di ujung (pin header tidak masuk penuh).
- Kabel out DHT22 tertarik karena kabel terlalu pendek saat tutup ditutup.
- Breadboard bergeser karena tidak ditempel, sehingga kaki modul DHT22 terangkat.
- ESP32 restart karena kabel USB tertekuk di lubang yang terlalu sempit.

Lulus = data tetap masuk selama digoyang/dibawa keliling, tanpa `Gagal baca sensor`.

### Rubrik penilaian showcase (skor 1–4)
| Aspek | 1 | 4 |
|---|---|---|
| Alat berfungsi | Tidak menyala | Jalan dengan power bank, data tampil & berubah saat sensor ditiup |
| Kerapian rakitan | Kabel berantakan, tanpa casing | Casing rapi, sensor dekat lubang, label lengkap, lolos uji goyang |
| Pemahaman | Tidak bisa menjelaskan rakitan | Bisa menunjuk 3V3/GND/D4 dan menjelaskan 1 masalah yang pernah diperbaiki |
| Presentasi | Tidak menyampaikan 3 kalimat | 3 kalimat lengkap + menjawab pertanyaan |
| Website | Belum dikustom / aturan dilanggar | Profil, warna, foto lengkap, zip sesuai aturan |
| Kerja sama | 1 orang mengerjakan semua | Semua anggota berperan & bicara (peserta individu: nilai kemandirian) |

### Kunci Post-Test
1. B 2. C 3. B 4. B 5. A

### Pembahasan singkat
- No. 1: ESP32 menghasilkan panas saat WiFi aktif; sensor yang terlalu dekat membaca suhu lebih tinggi dari suhu ruangan.
- No. 3: urutan dokter kabel dari P11: baca gejala dulu (Serial Monitor), baru cek kabel.
- No. 5: aturan serah folder dari P12; video/foto asli HP bisa ratusan MB dan membuat website lambat.

---------- SELESAI ISI MATERI AJAR ----------
