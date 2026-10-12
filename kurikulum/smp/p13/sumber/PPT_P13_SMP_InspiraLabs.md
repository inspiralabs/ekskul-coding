# P13 SMP — Rapikan Alat & Showcase Proyek Akhir

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

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

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Rapikan Alat**: Memasukkan rakitan ke casing, merapikan kabel, dan menguji ulang.
- **02 Showcase & Serah Folder**: Presentasi 3 kalimat, demo, dan menyerahkan zip website ke tutor.

---

### Hari Ini Kalian Jadi Engineer!
- 5 minggu lalu: belum pernah pegang ESP32.
- Hari ini: alat kalian **mengirim suhu ruangan ke internet**, dan website kalian siap **online**.
- Agenda: **rapikan** → **pamerkan** → **serahkan**.

---

### Perjalanan Kita
| Pertemuan | Yang kalian kuasai |
|---|---|
| P9 | ESP32, pin, breadboard, LED, resistor |
| P10 | Upload program jadi, rakit DHT22 |
| P11 | Firmware proyek, Serial Monitor, dokter kabel |
| P12 | Dashboard, kustom profil, warna, foto |

---

### Kenapa Alat Butuh Casing?
- Alat sungguhan (router, termostat, CCTV) selalu punya **casing**.
- Casing melindungi dari **kabel lepas**, **tersenggol**, dan **korsleting**.
- Alat yang rapi lebih mudah dipindah, dipamerkan, dan **diperbaiki**.

---

### Aturan Casing yang Baik

| Aturan | Kenapa |
|---|---|
| **DHT22 dekat lubang / sedikit keluar** | Harus kena udara ruangan |
| **DHT22 jauh dari ESP32** (±5 cm) | ESP32 hangat saat WiFi aktif |
| **Lubang untuk kabel USB** | Colok power bank tanpa buka kotak |
| **Tidak** menempel logam/aluminium foil | Kaki pin bisa korsleting |
| Breadboard pakai **double tape** | Tidak bergeser saat dibawa |
| Kotak bisa **dibuka** lagi | Untuk perbaikan |
| **Label**: nama alat + Device ID | Tidak tertukar |

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

---

### Rapikan Kabel
- Kabel **sependek mungkin**, warna sesuai aturan (merah = +, hitam = −, kuning = data).
- Ikat kabel panjang dengan **karet/cable tie**.
- Tekan semua kabel **sampai mentok**. Tarik pelan: tidak boleh lepas.
- Label kecil di kabel kuning: **"out → D4"**.

> 🗣️ SPEAKER NOTES: Semua pemindahan kabel dilakukan dengan USB dicabut. Kalau kabel out pindah dari D4, angka DHT_PIN di firmware harus ikut diganti dan firmware di-upload ulang (latihan P11). Paling aman: jangan pindah dari D4.

---

### Praktek: Masukkan ke Casing
1. Cabut USB. Tandai lubang dengan spidol (USB + jendela sensor). Tutor yang memotong.
2. Tempel breadboard + ESP32 di dasar kotak (double tape).
3. DHT22 di dekat lubang, jauh dari ESP32.
4. Rapikan kabel, beri label.
5. Colok **power bank** → cek dashboard: data masih masuk?

> 🗣️ SPEAKER NOTES: Cutter hanya dipegang tutor. Keliling cek posisi sensor dan lubang USB.

---

### Tips Engineer: Uji Ulang Setelah Dirapikan

| Gejala setelah masuk casing | Penyebab | Solusi |
|---|---|---|
| Dashboard tidak update | Kabel tercabut saat dimasukkan | Buka, colok laptop, baca Serial Monitor |
| `Gagal baca sensor` kadang-kadang | Kabel tertekan tutup / setengah lepas | Rapikan jalur, tekan sampai mentok |
| Suhu naik 1–3°C | Sensor dekat ESP32 / kotak tertutup rapat | Pindah sensor ke dekat lubang |
| ESP32 sering restart | Kabel USB tertekuk / power bank lemah | Perlebar lubang, ganti power bank |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi. Alat yang sudah jalan pun bisa rusak saat dirapikan, makanya selalu uji ulang. Ingatkan kembali tebakan siswa tadi.

---

### Forum Diskusi Live Coding

**Kenapa sensor suhu sebaiknya tidak ditaruh berdempetan dengan ESP32 di dalam kotak tertutup?**

> 🗣️ SPEAKER NOTES: Topik 1 — Rapikan Alat. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Siap Tampil" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Wajib sebelum showcase:
- [ ] Alat di dalam casing, ada label nama alat + Device ID
- [ ] Menyala pakai **power bank** (tanpa laptop)
- [ ] Dashboard menampilkan data alat kalian dan berubah saat sensor ditiup
- [ ] Tidak ada kabel longgar saat kotak diangkat

---

### Challenge 🔴 Hard — "Uji Goyang" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🔴**

1. Tutup casing, nyalakan dengan power bank.
2. Bawa alat keliling kelas (atau goyangkan pelan 10 detik).
3. Data di dashboard harus **tetap masuk**.
4. Gagal? Cari kabel yang goyang, perbaiki, ulangi. Tulis: kabel mana yang jadi masalah.

---

### Format Presentasi: 3 Kalimat Sakti
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling susah saat merakit adalah **___**, kami mengatasinya dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

Lalu **demo**: tiup sensor → semua lihat angka di dashboard berubah.

> 🗣️ SPEAKER NOTES: 13 Device ID, ±1 menit per Device ID. Tampilkan dashboard tiap kelompok di proyektor saat mereka presentasi.

---

### Serahkan Folder Website
- [ ] `index.html` terbuka dan data sensor tampil
- [ ] Profil: nama kelompok, anggota, `foto-kelompok.jpg` tampil
- [ ] Semua file di dalam folder `smp-XX`, tanpa `npm`, library hanya lewat CDN
- [ ] `api.js` tidak diubah
- [ ] Folder `firmware/.pio` dihapus, ukuran ≤ **5 MB**
- [ ] Zip bernama Device ID (mis. **`smp-07.zip`**) → serahkan ke tutor

Setelah tutor deploy: **`https://smp-07.inspiralabs.id`** (ganti dengan Device ID kalian). Bisa dibuka dari HP siapa saja!

> 🗣️ SPEAKER NOTES: Kumpulkan zip di flashdisk/folder Drive. Cek cepat ukuran & nama file sebelum siswa pulang. Bagikan link website ke grup setelah deploy.

---

### Forum Diskusi Live Coding

**Apa yang terjadi kalau foto kelompok disimpan di Downloads, bukan di dalam folder website?**

> 🗣️ SPEAKER NOTES: Topik 2 — Showcase & Serah Folder. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Latihan 3 Kalimat" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

Isi 3 kalimat sakti di kertas, lalu latihan presentasi ke kelompok sebelah. Kelompok sebelah wajib memberi **1 pertanyaan** tentang rakitan kalian.

---

### Refleksi
- Satu hal yang paling seru selama merakit alat?
- Satu masalah kabel yang paling bikin pusing, dan bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 13" di Linktree sudah mengarah ke Google Form P13 SMP.

---

### Terima kasih!

**SELAMAT, KALIAN SUDAH JADI ENGINEER IoT!**

Pantau website kalian di **`<device-id>.inspiralabs.id`** setelah dideploy tutor.
