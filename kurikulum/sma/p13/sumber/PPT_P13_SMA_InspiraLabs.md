# P13 SMA — Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P13 SMA | nomor slide".
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

**P13 SMA**

# Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor

Rapikan alatnya, beri identitas, lalu pamerkan ke dunia.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kenapa demo alat IoT sering gagal tepat saat ditonton orang?

Hari ini kita membuat alat yang bukan hanya jalan di meja sendiri, tapi juga siap dibawa, dipamerkan, dan dibuka siapa pun lewat internet.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 3.

---

### Apa yang kita capai hari ini?

- **01 Rapikan Rakitan**: Kabel rapi & berlabel, posisi sensor, casing aman.
- **02 Kustom Dashboard**: Profil kelompok, warna tema, foto kelompok.
- **03 Serahkan & Showcase**: Aturan serah terima folder, website tayang online, demo.

---

### Dari Prototipe ke Alat Siap Pamer
- P10–P12: rakitan **jalan**: data naik ke dashboard, perintah kipas turun dari dashboard.
- Tapi kabel panjang semrawut = mudah **lepas** saat dibawa, sulit dicek, terlihat seperti eksperimen.
- Hari ini: **rapikan rakitan**, **kustom dashboard**, **serahkan folder** ke tutor, lalu **showcase**.

```wiring
Judul: Rakitan final Smart Room Monitor (versi rapi)
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 3V3 → DHT22 "+" (kabel merah)
- ESP32 D4 → DHT22 "out" (kabel kuning)
- ESP32 GND → DHT22 "−" (kabel hitam)
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D18 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: kabel pendek & rapi ; label kecil "DHT22 → D4" dan "RELAY → D18" ; DHT22 diletakkan menjauh dari ESP32
```

---

### Prinsip Merapikan Rakitan
1. **Cabut USB** dulu. Rapikan satu kabel per waktu, lalu tes lagi.
2. **Kabel pendek**: ganti jumper panjang dengan yang pas. Kabel berlebih digulung & diikat.
3. **Warna konsisten**: merah daya, hitam GND, kuning data sensor, biru relay IN, oranye jalur kipas.
4. **Terminal relay terkunci**: sekrup kencang, tidak ada serabut kabel keluar.
5. **Label**: "DHT22 → D4", "RELAY → D18", nama kelompok & Device ID (mis. `sma-04`).
6. Setelah rapi: **tes ulang** kontrol manual & otomatis dari dashboard.

---

### Posisi Sensor & Casing
- **DHT22 di luar casing** atau dekat lubang ventilasi, **jauh** dari ESP32. ESP32 ikut hangat → sensor terlalu dekat membaca suhu **lebih tinggi**.
- **Kipas** menghadap keluar, baling-baling tidak tersentuh kabel.
- **USB** mudah dicolok dari luar casing (power bank & upload ulang).
- **Lampu relay** terlihat (indikator kipas aktif).
- Keselamatan tetap: **hanya kipas DC 5V**, tidak ada kabel PLN, logam terminal tidak terbuka keluar casing.

---

### Forum Diskusi Live Coding

**Kenapa sensor DHT22 tidak boleh ditaruh menempel di sebelah ESP32 di dalam kotak tertutup?**

> 🗣️ SPEAKER NOTES: Topik 1 — Merapikan Rakitan. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Rakitan Rapi" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Rapikan rakitan memakai 6 prinsip merapikan (cabut USB dulu!).
2. Tempel label pin dan label Device ID kelompok.
3. Tes ulang: kontrol Manual dari dashboard + mode Otomatis dengan genggaman tangan.
4. Foto **sebelum** (foto P10) dan **sesudah** dirapikan.

Simpan hasil sebagai `P13_NamaKelompok_C1` (foto sebelum & sesudah)

---

### Kustom Dashboard Kelompok
| Yang diubah | Di mana |
|---|---|
| Nama kelompok & anggota | `index.html`, bagian **PROFIL KELOMPOK** (`.kartu-profil`) |
| Warna tema | `style.css`, bagian `:root` paling atas |
| Foto kelompok | `foto-kelompok.jpg` di folder yang sama dengan `index.html` |
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
- Ganti **teks**-nya saja. Nama `class` dan `id` jangan diubah.

---

### Foto Kelompok & Bonus
- Nama file **persis** `foto-kelompok.jpg` (huruf kecil, tanda minus, `.jpg`).
- Ukuran wajar: lebar ±1000–1200 px, **di bawah ±500 KB**. Foto HP asli (5–10 MB) dikecilkan dulu.
- Foto tidak muncul? Cek **nama file** dan **lokasinya**.
- **Bonus (opsional):** grafik riwayat, mode gelap, atau panel edukasi DHT22. Library hanya lewat **CDN** (`<script src="https://...">`), tanpa npm.

---

### Forum Diskusi Live Coding

**Foto kelompok tidak muncul di dashboard. Apa saja 3 kemungkinan penyebabnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kustom Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Tips: aktifkan View → File name extensions di File Explorer.

---

### Challenge 🟡 Medium — "Dashboard Kelompok" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Isi kartu **Profil Kelompok**: nama kelompok + nama anggota.
2. Ganti minimal **2 warna** di `:root` (`style.css`) sesuai tema kelompok.
3. Tambahkan `foto-kelompok.jpg` (≤ ±500 KB) di folder yang sama dengan `index.html`. Refresh: foto harus tampil.
4. **Bonus (opsional):** isi satu kotak kosong (grafik / mode gelap / edukasi). Library hanya via CDN.

Simpan hasil di folder kelompok (mis. `sma-04`)

---

### Aturan Serah Terima Folder
| Aturan | Kenapa |
|---|---|
| `index.html` tetap halaman utama | Server membuka `index.html` saat website dikunjungi |
| Semua file **di dalam folder** | Alamat `C:\Users\...` hanya ada di laptopmu |
| **Tanpa npm**, library via **CDN** | Server hanya menyajikan file |
| `api.js` **tidak diubah** | Penghubung ke server, Device ID sudah diisi tutor |
| Folder **≤ ±5 MB**, tanpa `firmware/.pio` | Folder `.pio` (hasil build) bisa ratusan MB |
| Foto bernama `foto-kelompok.jpg` | Sudah dipanggil oleh `index.html` |
- Serahkan **seluruh folder kelompok** (boleh di-zip, mis. `sma-04.zip`) ke tutor.

---

### Website Kelompok Tayang Online
- Tutor memeriksa folder lalu menayangkannya di **`https://<device-id>.inspiralabs.id`**, contoh `https://sma-04.inspiralabs.id`.
- Siapa pun bisa **melihat** suhu & kelembapan kelas kalian secara real-time.
- **Mengubah kipas** dari website publik butuh **PIN kelompok**. Tanpa PIN hanya melihat.
- Alat harus **menyala & terhubung WiFi** supaya angkanya hidup.

---

### Checklist Sebelum Demo Alat IoT
- **Daya**: uji pakai power bank, bawa kabel **data** cadangan.
- **Jaringan**: hotspot cadangan **2.4 GHz**. Ganti WiFi = isi ulang 2 baris WiFi + upload ulang.
- **Log**: Serial Monitor di layar kedua. Gagal? Lihat lapisan mana yang bermasalah.
- **Rencana cadangan**: rekam video demo yang berhasil sebelum tampil.
- **Fail-safe**: kipas di terminal **NO**. ESP32 mati → kipas ikut mati.
- **Cerita**: mulai dari **masalah** ("kelas panas"), bukan dari komponen.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi. Ingatkan kembali tebakan siswa tadi, lalu bandingkan dengan jawabannya.

---

### Forum Diskusi Live Coding

**Kenapa website yang jalan di laptopmu bisa rusak saat ditayangkan online kalau fotonya dipanggil dari `C:\Users\...`?**

> 🗣️ SPEAKER NOTES: Topik 3 — Serah Terima & Demo. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🔴 Hard — "Siap Tayang" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Buka `index.html` dari folder kelompok: profil, foto, warna, angka suhu & tombol kipas tampil/jalan.
2. Tidak ada `C:\...` atau `file://` di `index.html`/`style.css`. Library (kalau ada) hanya `https://` CDN.
3. `api.js` sama persis dengan dari zip tutor.
4. Ukuran folder ≤ ±5 MB, `firmware/.pio` sudah dihapus.
5. Buka dashboard di **browser lain/incognito**, klik tombol kipas → harus diminta PIN.

Serahkan folder kelompok ke tutor (mis. `sma-04.zip`)

---

### Format Showcase
1. **Masalah**: kenapa ruangan perlu dipantau & kipas dikontrol? (1 kalimat)
2. **Demo langsung**: genggam sensor → suhu naik di dashboard → mode **Otomatis** menyalakan kipas. Lalu kontrol **Manual**.
3. **Bedah rakitan**: alasan **D4** dan **D18**, kenapa kipas di **NO**, apa itu **active-LOW**.
4. **1 masalah terberat** dan cara menemukannya (Serial Monitor? multimeter?).
5. **Rencana pengembangan**: kalau ada waktu 1 bulan lagi, apa yang ditambah?

> 🗣️ SPEAKER NOTES: ±2,5 menit per kelompok/peserta, pakai timer. Sebelum tampil, minta penampil mengatur ambang = suhu ruangan + 1°C supaya demo genggam cepat terlihat. Berdua: keduanya wajib bicara. Nilai dengan rubrik showcase di Materi Ajar (Khusus Tutor). Ingatkan: jangan tampilkan PIN di layar.

---

### Refleksi Semester
- Dari HTML statis → dashboard interaktif → **alat IoT rakitan sendiri**, tayang online dan bisa dikontrol dua arah.
- Skill kalian sekarang: **membaca pinout, merakit sensor & aktuator, logika active-LOW, keselamatan listrik, troubleshooting berlapis, alur client-server**. Fondasi profesi IoT engineer, teknisi elektronika, dan embedded engineer.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 13" di Linktree sudah mengarah ke Google Form P13 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI SEMESTER DEPAN!**

Kalian sudah resmi merakit alat IoT sendiri, dan sekarang tayang online. Bangga!
