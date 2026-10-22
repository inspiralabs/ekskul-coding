# P10 SMA — Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P10 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B, angka/string #8A6516;
     baris yang boleh diubah (di antara "BOLEH DIUBAH" dan garis penutupnya) diberi latar #F3E6C4.
     Abaikan aturan "kode di card gelap". -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P10 SMA**

# Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop

Hari ini benda mati mulai nurut sama kodemu.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Lampu jalan nyala sendiri pas maghrib. Pintu mal kebuka sendiri. Siapa sebenarnya yang "nyuruh" mereka?

Nggak ada orang yang mencet tombolnya. Ada "otak" kecil yang kerja diam-diam.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Tampung 2–3 tebakan (+2 per penebak, benar atau salah). Jangan dijawab dulu; jawabannya di slide "IoT Itu Apa Sih?" dan "Kenalan: Ini ESP32".

---

### Apa yang kita capai hari ini?

- **01 Kenalan ESP32**: otak kecil yang bisa WiFi.
- **02 Pasang Bengkel**: Arduino IDE, board ESP32, library.
- **03 Kedip Pertama**: upload program, lalu utak-atik angkanya.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Salah jawab tetap +2. Yang dihitung beraninya. Di akhir kelas: **Post-Test** di Google Form. **Tidak ada PR.**

> 🗣️ SPEAKER NOTES: Utamakan siswa yang belum dapat poin. Pasangan (sma-04/05/06): poin challenge untuk kedua anggota. Tutor mencatat di leaderboard.

---

### IoT Itu Apa Sih?

- **Internet of Things** = benda sehari-hari yang bisa **merasa**, **mikir**, dan **ngobrol lewat internet**.
- Rumusnya: **Sensor** (indra) → **Mikrokontroler** (otak) → **Aksi / Internet** (tangan & mulut).
- Contoh: smartwatch menghitung langkah, CCTV yang bisa dilihat dari HP, lampu kandang ayam otomatis, dan… **Smart Room Monitor** buatan kita.

> 🗣️ SPEAKER NOTES: Jawab pemantik di sini: lampu jalan punya sensor cahaya + mikrokontroler, pintu mal punya sensor gerak. Tidak ada yang "nyuruh"; mereka mengikuti program.

---

### Kenalan: Ini ESP32

- **Chip ESP32** (kotak logam): otaknya. 240 MHz, 2 inti, ribuan kali lebih cepat dari komputer misi Apollo ke bulan.
- **Antena WiFi** (garis zig-zag): bisa WiFi & Bluetooth tanpa tambahan apa pun.
- **Port USB**: jalur listrik + jalur kirim program.
- **Tombol BOOT & EN**: EN = restart, BOOT = "mode terima program".
- **LED merah** = ada listrik. **LED biru** = bisa kita program (GPIO 2).
- **Pin di pinggir**: "tangan & telinga" untuk sensor dan relay (dipakai mulai P11).

> 🗣️ SPEAKER NOTES: Tampilkan foto ESP32 DevKit V1 dengan 6 label panah. Edarkan ESP32 asli ke tiap meja, minta siswa menunjuk antena dan tombol BOOT. Harganya kira-kira seharga dua porsi bakso.

---

### Demo: Akhir P12, Alatmu Bisa Begini

- Genggam sensor → angka suhu di dashboard naik.
- Tekan tombol di HP → kipas menyala.
- Kodenya **sudah jadi**. Misi kalian di kelas: bikin alat ini hidup dan bikin dashboard-nya jadi milik kalian.

> 🗣️ SPEAKER NOTES: Demo live pakai alat jadi tutor (DHT22 + relay + kipas + firmware proyek) dan dashboard tutor di proyektor. Ini "wow moment" sesi ini, jangan dilewati. Maksimal 2 menit.

---

### Tanya Jawab (+2)

**Sebutkan 1 benda di rumah atau sekolahmu yang menurutmu punya "otak" kecil. Sensornya apa?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kenalan ESP32. Minta 2–3 siswa menjawab (+2 per siswa). Contoh jawaban: rice cooker (sensor suhu), AC (sensor suhu), dispenser, palang parkir (sensor kendaraan), HP (banyak sensor).

---

### Bengkel Kita: 3 Alat

- **Arduino IDE** = dapur: tempat menulis & mengirim program ke ESP32.
- **Board ESP32** = kompor yang cocok: supaya Arduino IDE kenal ESP32 (buatan Espressif, bukan Arduino).
- **Library DHT** = bumbu instan: kode jadi untuk membaca sensor suhu (dipakai mulai P11).
- Pasangnya berurutan: **Level 1 → Level 2 → Level 3**. Tiap level selesai: tempel **sticky note hijau** di laptop. Butuh bantuan: **sticky note merah**.

---

### Level 1: Pasang Arduino IDE

- **Windows**: cek *About your PC* → harus **64-bit** → jalankan installer dari flashdisk tutor (atau arduino.cc/en/software) → **Yes** → **I Agree** → **Install** → **Finish**. Muncul izin driver? **Install**.
- **Mac**: logo Apple → *About This Mac* → **Apple M1/M2/M3/M4** atau **Intel**? Pilih file `.dmg` yang cocok → seret ke **Applications** → buka → **Open**.

> 🗣️ SPEAKER NOTES: Langkah detail: Panduan Instalasi 1. Edarkan flashdisk supaya tidak semua mengunduh lewat WiFi sekolah. Mac yang menolak membuka aplikasi: System Settings → Privacy & Security → Open Anyway.

---

### Level 2: Pasang Board ESP32

- **File → Preferences** (Mac: **Arduino IDE → Settings**) → kotak *Additional boards manager URLs* → tempel:
  `https://espressif.github.io/arduino-esp32/package_esp32_index.json` → **OK**.
- **Boards Manager** (ikon papan di kiri) → ketik `esp32` → pilih **esp32 by Espressif Systems** → **INSTALL**.
- Bukan "Arduino ESP32 Boards". Ukurannya besar (±2 GB): ikuti arahan tutor.

> 🗣️ SPEAKER NOTES: Langkah detail: Panduan Instalasi 2. Internet lambat → pilih versi 2.0.17 (±0,8 GB), semua program P10–P13 tetap jalan. Selama unduhan berjalan, lanjut ke game slide berikutnya.

---

### Sambil Menunggu: Tebak Benda IoT!

Tutor menampilkan 6 foto benda. Tebak: **IoT atau bukan?** Kalau IoT, sensornya apa?

- Rice cooker biasa · Smart TV · Palang parkir otomatis
- Kalkulator · Timbangan digital Bluetooth · Pompa air otomatis

Tiap jawaban yang berani: **+2**.

> 🗣️ SPEAKER NOTES: Kunci longgar: smart TV & timbangan Bluetooth = terhubung (IoT); palang parkir & pompa air otomatis = punya sensor + otak, jadi IoT kalau datanya dikirim ke jaringan; kalkulator & rice cooker biasa = punya otak tapi tidak "ngobrol" ke internet. Yang penting siswa menyebut sensornya.

---

### Level 3: Pasang Library DHT

- **Library Manager** (ikon buku di kiri) → ketik `DHT sensor library` → pilih **by Adafruit** → **INSTALL** → **INSTALL ALL**.
- Jangan pasang library bernama **"WiFi"**. ESP32 sudah punya WiFi bawaan.

> 🗣️ SPEAKER NOTES: Langkah detail: Panduan Instalasi 3. Jangan pilih INSTALL WITHOUT DEPENDENCIES (nanti error Adafruit_Sensor.h).

---

### Colok ESP32: Port Muncul?

- Pakai **kabel USB DATA**, bukan kabel charger.
- **Windows**: Device Manager → *Ports (COM & LPT)* → ada **COMx**.
- **Mac**: Terminal → `ls /dev/cu.*` → ada `/dev/cu.usbserial-…`.
- Tidak muncul? Ganti kabel → pindah port USB → pasang driver CP210x/CH340 dari flashdisk tutor.

---

### Tanya Jawab (+2)

**LED merah ESP32 menyala, tapi port tidak muncul di laptop. Siapa tersangka nomor 1?**

> 🗣️ SPEAKER NOTES: Topik 2 — Pasang Bengkel. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: kabel USB khusus charger. Kabel itu hanya membawa listrik (LED merah nyala), tidak membawa data.

---

### Kedip Pertama: Cara Upload

1. Folder **Kode** → `P10_1_KedipPertama` → double-click `P10_1_KedipPertama.ino`.
2. **Select Board** → **ESP32 Dev Module** + port ESP32.
3. Klik **Upload (→)** → tunggu **Done uploading**. Compile pertama 2–5 menit, wajar.
4. **Serial Monitor** (`Ctrl+Shift+M` / Mac `⌘+Shift+M`) → **115200 baud**.
- Macet di `Connecting.....`? **Tahan tombol BOOT** sampai muncul `Writing at …`.

> 🗣️ SPEAKER NOTES: Upload gagal di tengah (timed out)? Tools → Upload Speed → 115200. Huruf acak di Serial Monitor = baud belum 115200.

---

### Kode: Bagian yang Kamu Utak-atik

```cpp
#define LED_PIN 2        // LED biru bawaan ESP32 DevKit V1 ada di GPIO 2

// ===== BOLEH DIUBAH =====
int lamaNyala = 500;     // berapa milidetik LED menyala (1000 = 1 detik)
int lamaMati  = 500;     // berapa milidetik LED mati
// ========================
```

- **Tinkering** = ubah angka → Upload → amati. Begitu cara engineer belajar alat baru.
- Kalian **tidak** menulis kode dari nol. Cukup ubah baris di kotak `BOLEH DIUBAH`.

File live coding: `P10_1_KedipPertama.ino` (ada di linktr.ee/InspiraLabs_SMA)

> 🗣️ SPEAKER NOTES: Tidak perlu membedah kode baris per baris. Tunjukkan 3 hal: angka 2 = pin LED biru, 500 = setengah detik, Serial Monitor menulis "Nyala"/"Mati" sesuai LED.

---

### Program Tinggal di ESP32

- Cabut USB dari laptop, colok ke power bank: LED **tetap kedip**.
- Upload = memindahkan program dari laptop ke "otak" ESP32. Laptop hanya untuk menulis & mengirim.

> 🗣️ SPEAKER NOTES: Demo singkat dengan power bank tutor. Ini bekal Challenge "Lepas dari Laptop" di P11.

---

### Tanya Jawab (+2)

**Kalau lamaNyala = 5 dan lamaMati = 5, LED-nya kelihatan seperti apa? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 3 — Kedip Pertama. Tampung tebakan dulu (+2), lalu biarkan siswa mencoba sendiri. Jawaban: LED kedip 100 kali per detik, terlalu cepat untuk mata, jadi terlihat menyala terus tapi lebih redup. Ini dasar lampu yang bisa diredupkan.

---

### Challenge 🟢 Easy — "Kedip Gaya Kamu" (+5)

**TOPIK 3 DARI 3 — CHALLENGE 🟢**

1. Di `P10_1_KedipPertama.ino`, ubah `lamaNyala` dan `lamaMati` jadi **100** → Upload.
2. Ubah lagi keduanya jadi **2000** → Upload.
3. Tunjukkan kedua versi ke tutor.

Download folder `P10_1_KedipPertama` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save As…** → `P10_NamaSiswa_C1`

---

### Challenge 🟡 Medium — "Tiru Lampu Asli" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🟡**

1. Pilih 1 lampu dunia nyata: **lampu sein motor**, **lampu menara/suar** (kedip singkat, gelap lama), atau **lampu hazard**.
2. Tiru dengan mengubah `lamaNyala` dan `lamaMati` → Upload.
3. Ganti juga teks `"Halo! ESP32 siap berkedip."` (di bagian `setup`) jadi pesanmu sendiri, misal `"Lampu sein punya Raka siap!"`. Cek di Serial Monitor.
4. Teman sebelah menebak lampu apa yang kamu tiru. Tebakan benar = lolos.

Download folder `P10_1_KedipPertama` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save As…** → `P10_NamaSiswa_C2`

---

### Challenge 🔴 Hard — "Pesan Rahasia Morse" (+15)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Buka `C3_P10_Hard_PesanMorse.ino` → ubah `PESAN` jadi kata 3–4 huruf (misal inisialmu) → Upload.
2. Teman menerjemahkan kedipan LED pakai **tabel Morse** di bawah, **tanpa** melihat Serial Monitor.
3. Terjemahan benar = lolos. Terlalu cepat? Perbesar angka `TITIK`.

| A `.-` | B `-...` | C `-.-.` | D `-..` | E `.` | F `..-.` | G `--.` | H `....` | I `..` |
|---|---|---|---|---|---|---|---|---|
| **J** `.---` | **K** `-.-` | **L** `.-..` | **M** `--` | **N** `-.` | **O** `---` | **P** `.--.` | **Q** `--.-` | **R** `.-.` |
| **S** `...` | **T** `-` | **U** `..-` | **V** `...-` | **W** `.--` | **X** `-..-` | **Y** `-.--` | **Z** `--..` | |

Titik = kedip pendek, garis = kedip panjang.

Download folder `C3_P10_Hard_PesanMorse` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save As…** → `P10_NamaSiswa_C3`

---

### Peta Petualangan IoT
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama          ← HARI INI
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok
[P12] Kontrol kipas dari dashboard: manual & otomatis
[P13] Kustom dashboard + website online + Demo Day
```

> 🗣️ SPEAKER NOTES: Laptop yang belum lulus 3 level dicatat tutor dan diselesaikan di 15 menit awal P11, bukan PR.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 10" di Linktree sudah mengarah ke Google Form P10 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P11!**

MINGGU DEPAN (P11): **Rakit Smart Room Monitor & Kirim Datanya ke Dashboard Kelompok**. Bawa laptop yang sama.
