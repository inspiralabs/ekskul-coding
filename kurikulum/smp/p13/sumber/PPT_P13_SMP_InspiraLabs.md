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
