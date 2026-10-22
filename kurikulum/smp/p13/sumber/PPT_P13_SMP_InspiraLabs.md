# P13 SMP — Sempurnakan Alat & Showcase Proyek Akhir

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMP | nomor slide".
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

**P13 SMP**

# Sempurnakan Alat & Showcase Proyek Akhir

Pasang foto kelompokmu, beri alatmu rumah, lalu pamerkan karyamu.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Alat kita sudah jalan di meja. Kenapa engineer sungguhan tetap menguji ulang setelah alatnya dimasukkan ke kotak?

Banyak alat yang lulus uji di meja, lalu gagal setelah dirapikan atau dipindahkan.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Tampung 2–3 tebakan siswa (+2 per penebak) tanpa langsung dijawab. Jawabannya dibahas di Topik 1 (slide Tips Engineer).

---

### Apa yang kita capai hari ini?

- **01 Sempurnakan Alat**: Foto kelompok di dashboard, alat masuk ke "rumahnya".
- **02 Showcase & Serah Folder**: Pamerkan alat, serahkan website ke tutor.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Fotografer** | Foto kelompok & kecilkan ukurannya |
| **Perakit** | Memasukkan alat ke rumahnya |
| **Desainer** | Menghias rumah alat & label |
| **Presenter** | Memimpin latihan presentasi |

Saat showcase, **semua anggota** bicara minimal 1 kalimat. Kerja sendiri? Pegang semua peran.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Peserta individu presentasi sendiri; boleh minta teman sebelah membantu memegang alat saat demo.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** & showcase | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Hari ini penonton showcase yang bertanya juga dapat +2. Poin challenge untuk setiap anggota kelompok yang ikut mengerjakan. Tidak ada PR.

---

### Hari Ini Kalian Jadi Engineer!

| Pertemuan | Yang sudah kalian kuasai |
|---|---|
| P9 | ESP32, breadboard, LED |
| P10 | Pasang Arduino IDE, upload Blink |
| P11 | Sensor DHT22, grafik suhu |
| P12 | Firmware, dashboard, warna |

Agenda hari ini: **sempurnakan** → **pamerkan** → **serahkan**.

> 🗣️ SPEAKER NOTES: Ajak siswa mengingat momen paling seru tiap pertemuan (LED pertama berkedip, gunung kelembapan, angka 200 pertama). 5 minggu lalu mereka belum pernah pegang ESP32; hari ini alatnya mengirim suhu ke internet.

---

### Kustom 3: Foto Kelompok

1. Foto bersama pakai HP atau kamera laptop.
2. Kecilkan: **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
3. Beri nama **persis**: `foto-kelompok.jpg`.
4. Simpan di folder `smp-XX`, sebelah `index.html` → refresh browser.

> 🗣️ SPEAKER NOTES: Kamera laptop: buka aplikasi Camera (Windows) / Photo Booth (Mac). Foto dari HP: pindahkan lewat kabel, Google Drive, atau WhatsApp Web. Kesalahan paling sering: Foto-Kelompok.JPG (huruf besar), "foto kelompok.jpg" (spasi), foto-kelompok.jpeg, foto-kelompok.jpg.jpg (akhiran tersembunyi di Windows: nyalakan View → File name extensions), atau foto masih di Downloads. Siswa yang tidak mau wajahnya tampil boleh memotret alatnya.

---

### Rumah untuk Alat

Alat sungguhan (router, CCTV) selalu punya **casing**. Kardus kecil dari tutor sudah cukup!

- **DHT22** di dekat lubang, ±5 cm dari ESP32.
- Ada **lubang** untuk kabel USB.
- **Tidak** ada logam, aluminium foil, atau air di dalam.
- **Label**: nama alat + Device ID.

```wiring
Judul: Tata letak di dalam rumah alat (tampak atas)
Komponen: kotak kardus, ESP32 DevKit V1 di breadboard, modul DHT22 3-pin, kabel USB ke power bank
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
- port USB ESP32 → lubang di dinding kotak → power bank (kabel USB)
Sorot: DHT22 di dekat lubang ventilasi, ±5 cm dari ESP32 ; lubang USB ; label "smp-XX" di tutup kotak
```

> 🗣️ SPEAKER NOTES: Casing melindungi kabel dari lepas dan tersenggol, dan mencegah korsleting (listrik "ambil jalan pintas" lewat logam atau air). Sensor harus kena udara ruangan, bukan udara di dalam kotak. ESP32 hangat saat WiFi aktif, jadi sensor yang terlalu dekat membaca suhu lebih tinggi. Kotak sebaiknya bisa dibuka lagi untuk perbaikan.

---

### Praktek: Masukkan ke Rumah Alat

1. **Cabut USB**. Tandai lubang dengan spidol. **Tutor** yang memotong.
2. Tempel breadboard + ESP32 di dasar kotak (double tape).
3. DHT22 di dekat lubang, jauh dari ESP32.
4. Tempel label nama alat + Device ID.
5. Colok **power bank** → data masih masuk dashboard?

> 🗣️ SPEAKER NOTES: Cutter hanya dipegang tutor. Gunting boleh dipakai siswa. Tidak pakai lem tembak (panas) di dekat board. Fungsi dulu (sensor, lubang USB, label), hias belakangan kalau sempat. Semua pemindahan kabel dilakukan dengan USB dicabut; kabel out tetap di D4.

---

### Tips Engineer: Uji Ulang Setelah Dirapikan

| Gejala | Coba ini |
|---|---|
| Dashboard tidak update | Buka kotak, colok laptop, baca Serial Monitor |
| `Gagal baca sensor` kadang-kadang | Kabel tertekan tutup: rapikan, tekan sampai mentok |
| Suhu naik 1–3°C | Jauhkan sensor dari ESP32 |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: alat yang sudah jalan pun bisa rusak saat dirapikan, makanya selalu uji ulang. Ingatkan kembali tebakan siswa tadi. Lainnya: ESP32 sering restart → kabel USB tertekuk di lubang sempit / power bank lemah → perlebar lubang, ganti power bank.

---

### Tanya Jawab (+2)

**Kenapa sensor suhu tidak boleh berdempetan dengan ESP32 di dalam kotak tertutup?**

> 🗣️ SPEAKER NOTES: Topik 1 — Sempurnakan Alat. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: ESP32 hangat saat WiFi aktif, jadi sensor yang menempel membaca suhu lebih tinggi dari suhu ruangan.

---

### Challenge 🟢 Easy — "Siap Tampil" (+5)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Wajib sebelum showcase:
- [ ] Alat di dalam rumahnya, ada label Device ID
- [ ] Menyala pakai **power bank**
- [ ] Dashboard berubah saat sensor ditiup
- [ ] Kotak diangkat, tidak ada kabel lepas

---

### Challenge 🔴 Hard — "Uji Goyang" (+15)

**TOPIK 1 DARI 2 — CHALLENGE 🔴**

1. Tutup kotak, nyalakan dengan power bank.
2. Goyangkan **pelan** 10 detik (atau bawa keliling kelas).
3. Data di dashboard harus **tetap masuk**.
4. Gagal? Cari kabel yang goyang, perbaiki, ulangi.

> 🗣️ SPEAKER NOTES: Challenge ini untuk kelompok yang sudah lulus Siap Tampil. Goyang pelan, jangan dibanting. Minta siswa menyebut kabel mana yang jadi masalah.

---

### Format Presentasi: 3 Kalimat Sakti

1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling seru/susah adalah **___**, kami atasi dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

Lalu **demo**: tiup sensor, semua lihat angkanya naik!

> 🗣️ SPEAKER NOTES: Kelompok 3–4 orang: bagi kalimat ke anggota berbeda, anggota ke-4 memegang alat saat demo. Kelompok 2 orang: satu orang 2 kalimat.

---

### Serahkan Folder Website

- [ ] Halaman utama tetap `index.html`
- [ ] `foto-kelompok.jpg` **di dalam** folder, sudah dikecilkan
- [ ] `api.js` tidak diubah
- [ ] Total ukuran folder ≤ **5 MB** (tanpa video)
- [ ] Zip bernama Device ID: **`smp-07.zip`**

Setelah tutor upload: **`smp-07.inspiralabs.id`**. Bisa dibuka dari HP siapa saja!

> 🗣️ SPEAKER NOTES: Ganti smp-07 dengan Device ID tiap kelompok. Cek ukuran: klik kanan folder → Properties → Size. Zip: klik kanan folder smp-XX → Send to → Compressed (zipped) folder (Mac: klik kanan → Compress). Kumpulkan di flashdisk/folder Drive selama showcase. Bagikan link website ke grup setelah deploy.

---

### Tanya Jawab (+2)

**Apa yang terjadi kalau foto kelompok disimpan di Downloads, bukan di dalam folder website?**

> 🗣️ SPEAKER NOTES: Topik 2 — Showcase & Serah Folder. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: foto tidak ikut ter-zip, jadi di website online fotonya hilang.

---

### Challenge 🟡 Medium — "Latihan 3 Kalimat" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Isi 3 kalimat sakti di kertas.
2. Latihan presentasi ke kelompok sebelah.
3. Kelompok sebelah memberi **1 pertanyaan** tentang alat kalian.

---

### Showcase: Panggung Engineer!

- Urutan diundi. Tiap Device ID ±**1 menit**.
- 3 kalimat sakti → **demo tiup sensor** di layar.
- Penonton: tepuk tangan + 1 pertanyaan (**+2**).

> 🗣️ SPEAKER NOTES: 13 Device ID, ±1 menit per Device ID. Tampilkan dashboard tiap kelompok di proyektor saat mereka presentasi. Pakai timer yang terlihat semua siswa. Kelompok berikutnya bersiap di samping. Penanya dari penonton dapat +2.

---

### Refleksi

- Apa yang paling seru selama ekskul IoT ini?
- Masalah apa yang paling bikin pusing? Bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

> 🗣️ SPEAKER NOTES: Minta 3–4 siswa berbagi (+2 per siswa). Pertanyaan ketiga paling penting: catat ide-ide alat IoT mereka, ini bahan untuk semester berikutnya.

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
