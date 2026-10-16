# SMP — Pertemuan 13: Rapikan Alat & Showcase Proyek Akhir 🏆

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 13 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menyelesaikan & mempresentasikan proyek akhir |
| Penilaian | Presentasi proyek akhir, kerapian rakitan, dan folder website yang diserahkan (rubrik di Khusus Tutor) |
| Potongan proyek akhir yang dibedah | Seluruh proyek: alat (ESP32 + DHT22 di D4, firmware `smp_room_monitor.ino`) + website dari folder `smp-XX`. Hari ini alat dimasukkan ke **casing**, dipamerkan, dan folder website **diserahkan** ke tutor untuk online di `https://<device-id>.inspiralabs.id`. |

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
- [ ] Folder `firmware/.pio` dihapus, total ≤ **5 MB**
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
C. Ukurannya 300 MB karena folder `firmware/.pio` ikut
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
- No. 5: aturan serah folder dari P12; `firmware/.pio` bisa ratusan MB dan tidak dibutuhkan website.
