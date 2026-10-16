# SMA — Pertemuan 13: Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 14 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menyelesaikan, merapikan, dan mempresentasikan proyek akhir IoT |
| Penilaian | Presentasi proyek akhir (rubrik showcase) + folder kelompok lolos checklist serah terima |
| Kaitan dengan proyek akhir | Rakitan dirapikan jadi alat yang siap dipamerkan. Di folder kelompok (mis. `sma-04`): kartu **Profil Kelompok** (`.kartu-profil` di `index.html`: nama kelompok, anggota, `foto-kelompok.jpg`) dan warna tema di `:root` paling atas `style.css`. Folder lalu **diserahkan ke tutor** dan tayang di `https://<device-id>.inspiralabs.id`. |

## Alat & bahan (per kelompok)

- Rakitan lengkap yang sudah lolos P12 (kontrol manual & otomatis jalan)
- Kabel jumper pendek, cable tie / selotip, label/spidol, kotak kecil/kardus untuk casing (opsional), gunting/cutter (dipakai dengan pengawasan)
- Laptop dengan **folder kelompok** (dari zip tutor) + **foto kelompok**
- Power bank / charger HP 5V, WiFi kelas 2.4 GHz + hotspot cadangan
- Proyektor untuk showcase

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p13/Panduan_Pengajar_P13_SMA.md`.

1. Siapkan alat tutor yang berjalan sebagai demo & cadangan.
2. Siapkan tempat pengumpulan folder (flashdisk/Drive), daftar `sma-01`…`sma-06`, dan PIN kelompok (`docs/HANDOUT_SISWA.md`).
3. Setelah kelas: cek & deploy tiap folder dengan `py tools/kelompok.py deploy <id> <zip|folder>` (pakai `--dry-run` dulu).
4. Print rubrik showcase (Khusus Tutor).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–3 | Pembuka | Foto rakitan P10 vs alat jadi tutor: "mana yang siap dipamerkan?" |
| 3–7 | Pembuka materi | Cover + pertanyaan pemantik |
| 7–11 | Materi | Prinsip merapikan rakitan + posisi sensor, forum |
| 11–22 | 🟢 Challenge Easy | Rakitan Rapi |
| 22–25 | Materi | Kustom dashboard: profil, warna, foto, forum |
| 25–33 | 🟡 Challenge Medium | Dashboard Kelompok |
| 33–36 | Materi | Aturan serah terima folder + checklist demo, forum |
| 36–42 | 🔴 Challenge Hard | Siap Tayang |
| 42–58 | Showcase | 6 penampil × ±2,5 menit (pakai timer) |
| 58–61 | Refleksi | Refleksi semester |
| 61–70 | Post-test | 5 soal pilihan ganda (Google Form) |

**Peran.** Berdua: satu **merapikan rakitan**, satu **mengkustom dashboard** (Easy & Medium bisa paralel), lalu sama-sama menyiapkan showcase; keduanya wajib bicara saat showcase. Sendiri: kerjakan Easy dulu, Medium boleh selesai di rumah sebelum folder dikirim (batas waktu dari tutor).

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Dari Prototipe ke Alat Siap Pamer → Prinsip Merapikan Rakitan → Posisi Sensor & Casing → 💬 Forum Diskusi → 🟢 Easy → Kustom Dashboard Kelompok → Foto Kelompok & Bonus → 💬 Forum Diskusi → 🟡 Medium → Aturan Serah Terima Folder → Website Kelompok Tayang Online → Checklist Sebelum Demo Alat IoT → 💬 Forum Diskusi → 🔴 Hard → Format Showcase → Refleksi Semester → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Dari Prototipe ke Alat Siap Pamer 🧩
- P10–P12: rakitan **jalan**: data naik ke dashboard, perintah kipas turun dari dashboard. ✅
- Tapi kabel panjang semrawut = mudah **lepas** saat dibawa, sulit dicek, dan terlihat seperti eksperimen.
- Hari ini 3 hal: **rapikan rakitan**, **kustom dashboard**, **serahkan folder** ke tutor, lalu **showcase**.

### Slide 2 — Prinsip Merapikan Rakitan 🧹
1. **Cabut USB** dulu. Rapikan satu kabel per waktu, lalu tes lagi.
2. **Kabel pendek**: ganti jumper panjang dengan yang pas. Kabel berlebih → digulung dan diikat, bukan dibiarkan menjuntai.
3. **Warna konsisten**: merah = daya, hitam = GND, kuning = data sensor, biru = relay IN, oranye = jalur kipas.
4. **Terminal relay terkunci**: sekrup kencang, tidak ada serabut kabel keluar. Tarik pelan: tidak lepas.
5. **Label**: tempel label kecil "DHT22 → D4", "RELAY → D18", nama kelompok & Device ID (mis. `sma-04`).
6. Setelah rapi: **tes ulang** kontrol manual & otomatis dari dashboard.

### Slide 3 — Posisi Sensor & Casing 📦
- **DHT22 di luar casing** atau di dekat lubang ventilasi, **jauh** dari ESP32 & regulator. ESP32 ikut hangat → sensor yang terlalu dekat membaca suhu **lebih tinggi** dari ruangan.
- **Kipas** menghadap keluar, baling-baling tidak tersentuh kabel.
- **USB** mudah dicolok dari luar casing (untuk power bank & upload ulang).
- **Lampu relay** sebaiknya terlihat (indikator kipas aktif).
- Keselamatan tetap sama: **hanya kipas DC 5V**, tidak ada kabel PLN. Bagian logam terminal tidak terbuka keluar casing.

### Slide 4 — Kustom Dashboard Kelompok 🎨
| Yang diubah | Di mana | Contoh |
|---|---|---|
| Nama kelompok & anggota | `index.html`, bagian **PROFIL KELOMPOK** (`.kartu-profil`) | `<h2>Tim Angin Sejuk</h2>` |
| Warna tema | `style.css`, bagian `:root` paling atas | `--warna-primer: #7A1F2B;` |
| Foto kelompok | File `foto-kelompok.jpg` di folder yang sama dengan `index.html` | Foto bersama alat |
```html
<!-- potongan — index.html, BAGIAN: PROFIL KELOMPOK -->
<div class="kartu-profil">
  <img src="foto-kelompok.jpg" alt="Foto kelompok" onerror="this.remove()">
  <div>
    <h2>Nama Kelompok Kami</h2>
    <p>Anggota: Nama 1, Nama 2</p>
  </div>
</div>
```
- Ganti **teks**-nya saja. Nama `class` dan `id` jangan diubah: dipakai tampilan & program.
- Simpan, lalu **refresh** browser untuk melihat hasilnya.

### Slide 5 — Foto Kelompok & Bonus 📸
- Nama file **persis** `foto-kelompok.jpg` (huruf kecil, tanda minus, `.jpg`). Bukan `Foto Kelompok.JPG`, bukan `.png`/`.jpeg`.
- Ukuran wajar: lebar ±1000–1200 px, **di bawah ±500 KB**. Foto HP asli (5–10 MB) → kecilkan dulu (fitur *resize*/kirim lewat chat lalu simpan).
- Foto tidak muncul? `onerror` membuat gambar disembunyikan. Cek **nama file** dan **lokasinya**.
- **Bonus (opsional):** isi kotak kosong **grafik riwayat**, **mode gelap**, atau **panel edukasi** DHT22. Library hanya lewat **CDN** (`<script src="https://...">`), tanpa npm.

### Slide 6 — Aturan Serah Terima Folder 📋
| Aturan | Kenapa |
|---|---|
| `index.html` tetap jadi halaman utama | Server membuka `index.html` saat alamat website dikunjungi |
| Semua file (foto, CSS, ikon) **di dalam folder** | Alamat seperti `C:\Users\...` hanya ada di laptopmu |
| **Tanpa npm**, library hanya via **CDN** | Server hanya menyajikan file, tidak menjalankan `npm install` |
| `api.js` **tidak diubah** | Penghubung ke server; Device ID sudah diisi tutor |
| Ukuran folder **≤ ±5 MB**, tanpa `firmware/.pio` | Folder `.pio` (hasil build) bisa ratusan MB |
| Foto bernama `foto-kelompok.jpg` | Sudah dipanggil oleh `index.html` |
- Serahkan **seluruh folder kelompok** (mis. `sma-04`, boleh di-zip jadi `sma-04.zip`) ke tutor.

### Slide 7 — Website Kelompok Tayang Online 🌐
- Tutor memeriksa folder lalu menayangkannya di **`https://<device-id>.inspiralabs.id`**, contoh `https://sma-04.inspiralabs.id`.
- Siapa pun bisa membuka dan **melihat** suhu & kelembapan kelas kalian secara real-time.
- **Mengubah kipas** dari website publik tetap butuh **PIN kelompok** (P12). Pengunjung tanpa PIN hanya melihat.
- Alat harus **menyala & terhubung WiFi** supaya angkanya hidup. Alat mati → angka berhenti di data terakhir.

### Slide 8 — Checklist Sebelum Demo Alat IoT ✅
- **Daya**: uji pakai power bank, jangan bergantung pada laptop. Bawa kabel **data** cadangan.
- **Jaringan**: siapkan hotspot cadangan **2.4 GHz**. Ganti WiFi = isi ulang 2 baris WiFi + upload ulang.
- **Log**: buka Serial Monitor di layar kedua. Kalau gagal, langsung terlihat lapisan mana yang bermasalah (P11).
- **Rencana cadangan**: rekam video demo yang berhasil sebelum tampil.
- **Fail-safe**: kipas di terminal **NO**. Kalau ESP32 mati/restart, kipas ikut mati.
- **Cerita**: mulai presentasi dari **masalah** ("kelas panas"), bukan dari komponen.

### Slide 9 — Format Showcase 🎤
1. **Masalah**: kenapa ruangan perlu dipantau & kipas dikontrol? (1 kalimat)
2. **Demo langsung**: genggam sensor → suhu naik di dashboard → mode **Otomatis** menyalakan kipas. Lalu kontrol **Manual** dari dashboard.
3. **Bedah rakitan**: tunjukkan jalur kabel & alasan memilih **D4** dan **D18**, kenapa kipas di **NO**, apa itu **active-LOW**.
4. **1 masalah terberat** dan cara kalian menemukannya (Serial Monitor? multimeter? tabel troubleshooting?).
5. **Rencana pengembangan**: kalau ada waktu 1 bulan lagi, apa yang ditambah?

> Catatan tutor: ±2,5 menit per penampil, pakai timer. Sebelum tampil, ambang diatur = suhu ruangan + 1°C supaya demo genggam cepat terlihat. Berdua: keduanya wajib bicara.

### Slide 10 — Refleksi Semester ✨
- Dari HTML statis → dashboard interaktif → **alat IoT yang kalian rakit sendiri**, tayang online dan bisa dikontrol dua arah.
- Skill yang kalian pegang sekarang: **membaca pinout, merakit sensor & aktuator, logika active-LOW, keselamatan listrik, troubleshooting berlapis, alur client-server**. Ini fondasi profesi IoT engineer, teknisi elektronika, dan embedded engineer.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Merapikan Rakitan:** Kenapa sensor DHT22 tidak boleh ditaruh menempel di sebelah ESP32 di dalam kotak tertutup?
- **Topik 2 — Kustom Dashboard:** Foto kelompok tidak muncul di dashboard. Apa saja 3 kemungkinan penyebabnya?
- **Topik 3 — Serah Terima & Demo:** Kenapa website yang jalan di laptopmu bisa rusak saat ditayangkan online kalau fotonya dipanggil dari `C:\Users\...`?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Rakitan Rapi"
1. Rapikan rakitan memakai 6 prinsip di slide *Prinsip Merapikan Rakitan* (cabut USB dulu!).
2. Tempel label pin dan label Device ID kelompok.
3. Tes ulang: kontrol Manual dari dashboard + mode Otomatis dengan genggaman tangan. Dua-duanya harus tetap jalan.
4. Foto **sebelum** (foto P10) dan **sesudah** dirapikan.

### 🟡 Medium — "Dashboard Kelompok"
1. Isi kartu **Profil Kelompok**: nama kelompok + nama anggota.
2. Ganti minimal **2 warna** di `:root` (`style.css`) sesuai tema kelompok.
3. Tambahkan foto bernama `foto-kelompok.jpg` (≤ ±500 KB) di folder yang sama dengan `index.html`. Refresh: foto harus tampil.
4. **Bonus (opsional):** isi salah satu kotak kosong (grafik riwayat / mode gelap / panel edukasi). Library hanya via CDN.

### 🔴 Hard — "Siap Tayang"
Periksa folder kelompok sendiri dengan checklist ini, perbaiki yang belum lolos, lalu serahkan ke tutor:
1. Buka `index.html` dari folder kelompok: profil, foto, warna, angka suhu & tombol kipas semua tampil/jalan.
2. Tidak ada alamat file `C:\...` atau `file://` di `index.html`/`style.css`. Library (kalau ada) hanya `https://` CDN.
3. `api.js` sama persis dengan dari zip tutor.
4. Ukuran folder ≤ ±5 MB (klik kanan → Properties), folder `firmware/.pio` sudah dihapus.
5. Uji PIN: buka dashboard di **browser lain/mode incognito**, klik tombol kipas → harus diminta PIN.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Rapikan alatnya, beri identitas, lalu pamerkan ke dunia.
- **Pertanyaan pemantik:** Kenapa demo alat IoT sering gagal tepat saat ditonton orang?
- **Konteks:** Hari ini kita membuat alat yang bukan hanya jalan di meja sendiri, tapi juga siap dibawa, dipamerkan, dan dibuka siapa pun lewat internet.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 3 (slide *Checklist Sebelum Demo Alat IoT*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #12 (Actionable Lists — Daftar & Solusi)**

# "Checklist wajib sebelum demo proyek IoT di depan orang." ✅

Isi slide:
- 🔋 **Daya**: tes pakai power bank, jangan bergantung pada laptop. Bawa kabel cadangan (kabel **data**!).
- 📶 **Jaringan**: siapkan **hotspot cadangan 2.4 GHz** & simpan SSID-nya di firmware sebelum demo.
- 🧹 **Rakitan rapi**: kabel pendek, terminal terkunci, sensor jauh dari panas ESP32.
- 🎥 **Plan B**: rekam video demo yang berhasil H-1. Kalau semuanya gagal, tetap ada bukti.
- 🧯 **Fail-safe**: beban di terminal **NO**. Kalau ESP32 hang/restart, kipas mati, bukan menyala terus.
- 🗣️ **Cerita**: mulai dari **masalah** ("kelas panas"), bukan dari komponen.

🎙️ **Kalimat hook (pembuka rekaman):** "Checklist wajib sebelum demo proyek IoT di depan orang."

📌 **Teks di layar:**
- 6 checklist anti-gagal ✅
- 1️⃣ Daya + kabel cadangan 🔋
- 2️⃣ Hotspot cadangan 📶
- 3️⃣ Rakitan rapi 🧹
- 4️⃣ Video backup 🎥
- 5️⃣ Fail-safe: pakai NO 🧯
- 6️⃣ Mulai dari MASALAH 🗣️

🎬 **Penutup:** "Mereka siswa SMA, rakit sendiri, dan alatnya tayang online. Follow InspiraLabs!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Checklist wajib sebelum demo proyek IoT di depan orang."
> - [4–8 detik] "Hukum demo: yang bisa gagal, pasti gagal pas ditonton. Jadi siapkan enam ini."
> - [8–15 detik] "Satu, daya. Tes pakai power bank, bawa kabel cadangan. Kabel data, bukan kabel charger."
> - [15–23 detik] "Dua, jaringan. WiFi tempat demo bisa beda. Siapkan hotspot cadangan 2.4 giga, dan simpan namanya di firmware sebelum berangkat."
> - [23–30 detik] "Tiga, rakitan rapi. Kabel pendek, terminal dikunci, sensor jauh dari panas mikrokontroler. Kabel menjuntai itu musuh demo."
> - [30–37 detik] "Empat, plan B. Rekam demo yang berhasil sehari sebelumnya. Seburuk-buruknya, tetap ada bukti alatmu jalan."
> - [37–46 detik] "Lima, fail-safe. Beban di terminal NO. Kalau mikrokontrolernya mati, kipas ikut mati, bukan nyala terus. Ini standar keselamatan di industri."
> - [46–54 detik] "Enam, cerita. Mulai dari masalah: 'kelas kami panas', bukan dari 'ini ESP32'. Orang ingat masalah yang diselesaikan, bukan komponennya."
> - [54–60 detik] "Mereka siswa SMA, rakit sendiri, dan alatnya tayang online. Follow InspiraLabs!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #12 — Actionable Lists (Daftar & Solusi) |
| Judul | Checklist wajib sebelum demo proyek IoT di depan orang |
| Durasi | ±60 detik |
| Pembicara | Tutor + cuplikan showcase siswa SMA (pastikan izin) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Momen tegang: siswa demo di depan kelas, angka dashboard tidak berubah | "Checklist wajib sebelum demo proyek IoT di depan orang." | Demo gagal di depan juri? 😰 |
| 4–8 | Cut ke demo berhasil, kipas berputar, kelas tepuk tangan | "Hukum demo: yang bisa gagal, pasti gagal pas ditonton. Jadi siapkan enam ini." | 6 checklist anti-gagal ✅ |
| 8–15 | Power bank dicolok ke ESP32 | "Satu, daya. Tes pakai power bank, bawa kabel cadangan. Kabel data, bukan kabel charger." | 1️⃣ Daya + kabel cadangan 🔋 |
| 15–23 | Hotspot HP 2.4 GHz | "Dua, jaringan. WiFi tempat demo bisa beda. Siapkan hotspot cadangan 2.4 giga, dan simpan namanya di firmware sebelum berangkat." | 2️⃣ Hotspot cadangan 📶 |
| 23–30 | Before-after rakitan: semrawut → rapi berlabel | "Tiga, rakitan rapi. Kabel pendek, terminal dikunci, sensor jauh dari panas mikrokontroler. Kabel menjuntai itu musuh demo." | 3️⃣ Rakitan rapi 🧹 |
| 30–37 | Video demo di HP | "Empat, plan B. Rekam demo yang berhasil sehari sebelumnya. Seburuk-buruknya, tetap ada bukti alatmu jalan." | 4️⃣ Video backup 🎥 |
| 37–46 | Close-up terminal relay NO | "Lima, fail-safe. Beban di terminal NO. Kalau mikrokontrolernya mati, kipas ikut mati, bukan nyala terus. Ini standar keselamatan di industri." | 5️⃣ Fail-safe: pakai NO 🧯 |
| 46–54 | Siswa presentasi: "Kelas kami panas…" | "Enam, cerita. Mulai dari masalah: 'kelas kami panas', bukan dari 'ini ESP32'. Orang ingat masalah yang diselesaikan, bukan komponennya." | 6️⃣ Mulai dari MASALAH 🗣️ |
| 54–60 | Website `sma-0X.inspiralabs.id` di HP + foto bersama alat | "Mereka siswa SMA, rakit sendiri, dan alatnya tayang online. Follow InspiraLabs!" | Follow @inspiralabs 👉 |

#### Caption

Demo proyek IoT gagal pas ditonton? Pakai checklist ini dulu ✅

1️⃣ Daya: power bank + kabel data cadangan
2️⃣ Hotspot cadangan 2.4 GHz
3️⃣ Rakitan rapi: kabel pendek, terminal terkunci
4️⃣ Video backup H-1
5️⃣ Fail-safe: beban di terminal NO
6️⃣ Cerita dimulai dari masalah

Save sebelum lomba / sidang / pameran berikutnya 💾

#InspiraLabs #IoT #ESP32 #ProyekSiswa #TipsPresentasi #EkskulCoding #STEM #SMA

#### Yang sengaja tidak dibocorkan
- Isi firmware, alamat server, dan PIN kelompok.
- Aturan serah terima & proses deploy website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Foto sudah ada di folder kelompok, tapi tidak tampil di kartu Profil Kelompok. Nama filenya `Foto Kelompok.JPG`. Penyebab paling mungkin adalah…**
A. Fotonya terlalu kecil B. Nama file tidak persis `foto-kelompok.jpg` yang dipanggil `index.html` C. `api.js` belum diubah D. ESP32 belum terhubung WiFi

**2. File di folder kelompok yang TIDAK boleh diubah sebelum diserahkan ke tutor adalah…**
A. `api.js` B. `style.css` C. `foto-kelompok.jpg` D. Teks nama anggota di `index.html`

**3. Kelompokmu ingin menambah grafik memakai library JavaScript. Cara yang sesuai aturan serah terima adalah…**
A. `npm install` lalu serahkan folder `node_modules` B. Memanggil library lewat CDN: `<script src="https://...">` C. Menyalin library dari `C:\Users\...` D. Mengubah `api.js`

**4. Kenapa sensor DHT22 sebaiknya tidak ditaruh menempel di sebelah ESP32 di dalam kotak tertutup?**
A. Sinyal WiFi terganggu B. Panas dari ESP32 membuat suhu terbaca lebih tinggi dari suhu ruangan C. Relay jadi active-HIGH D. Kipas berputar terbalik

**5. Seorang pengunjung membuka `https://sma-04.inspiralabs.id` lalu menekan tombol kipas. Apa yang terjadi?**
A. Kipas langsung berubah tanpa syarat B. Website rusak C. Website meminta PIN kelompok; tanpa PIN yang benar, pengunjung hanya bisa melihat D. Data suhu terhapus

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** rakitan rapi + label + kontrol manual & otomatis tetap jalan. Kesalahan paling sering setelah merapikan: kabel kipas pindah ke NC, kabel IN tergeser satu lubang dari D18, terminal relay longgar. Arahkan siswa ke tabel troubleshooting P10/P12, bukan langsung membetulkan.

**Medium:** foto tidak tampil biasanya karena: (1) nama file salah (`.JPG`, `.jpeg`, `.png`, spasi), (2) foto di subfolder lain, (3) ekstensi tersembunyi Windows (`foto-kelompok.jpg.jpg`). Aktifkan *View → File name extensions* di File Explorer.

**Hard:** semua 5 poin lolos. Poin 5: browser baru tidak menyimpan PIN, jadi harus muncul permintaan PIN.

### Serah terima & deploy (tutor)
- Terima folder/zip per Device ID (`sma-01`…`sma-06`). Jalankan `py tools/kelompok.py deploy sma-04 sma-04.zip --dry-run` untuk cek, lalu tanpa `--dry-run` untuk upload.
- Folder `firmware/` tidak ikut tayang. Pastikan `firmware/.pio` tidak ikut di zip (ukuran).
- Kalau `api.js` berubah: ganti dengan salinan dari paket asli.

### Rubrik showcase (skor 1–4)
| Aspek | 1 | 4 |
|---|---|---|
| Fungsi | Data tidak tampil di dashboard | Monitoring + kontrol manual + mode otomatis jalan saat demo |
| Kerapian & keselamatan rakitan | Kabel semrawut, terminal longgar | Kabel rapi & berlabel, sensor di posisi tepat, hanya beban DC 5V |
| Pemahaman | Tidak bisa menjelaskan rakitan | Menjelaskan pin D4/D18, kipas di NO, active-LOW, dan alur data/perintah (jeda ±4 detik) |
| Troubleshooting | Tidak bisa menceritakan masalah | Menceritakan masalah, cara menemukannya (Serial/multimeter), dan solusinya |
| Presentasi & kerja sama | 1 orang bicara, tanpa demo | Semua anggota berperan (peserta individu: dinilai dari kejelasan & demo), dimulai dari masalah, demo lancar |

### Kunci Post-Test
1. B 2. A 3. B 4. B 5. C

### Pembahasan singkat
- No. 1: `index.html` memanggil persis `foto-kelompok.jpg`; nama file di server peka huruf besar-kecil.
- No. 3: server hanya menyajikan file statis; npm tidak dijalankan.
- No. 5: PIN kelompok melindungi kontrol kipas di website publik.
