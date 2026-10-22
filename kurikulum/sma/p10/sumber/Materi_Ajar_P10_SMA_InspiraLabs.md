# SMA — Pertemuan 10: Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 17 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mengenal ESP32 sebagai otak alat IoT, memasang Arduino IDE + board ESP32 + library DHT, dan meng-upload program pertamanya (kedip LED) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Kaitan dengan proyek akhir | Hari ini belum merakit. Laptop disiapkan untuk P11–P13: di P11 firmware proyek `sma_room_monitor.ino` (DHT22 + relay + kipas → dashboard kelompok) di-upload dengan cara **persis sama** seperti `P10_1_KedipPertama.ino` hari ini. **Siswa tidak menulis kode**: hanya mengubah baris di kotak `BOLEH DIUBAH` (tinkering). |

## Alat & bahan (per kelompok/individu)

- Laptop **Windows 10/11 64-bit** atau **Mac (macOS 12+)**, ruang kosong **±9 GB**
- ESP32 DevKit V1 30-pin (ber-stiker Device ID `sma-01` … `sma-06`) + kabel USB **data**
- Flashdisk tutor: installer **Arduino IDE 2.3.10** (Windows `.exe`, Mac Apple Silicon & Intel `.dmg`), driver CP210x & CH340, 3 PDF Panduan Instalasi (`kurikulum/panduan-instalasi/`)
- Folder **Kode** pertemuan ini (Drive): `P10_1_KedipPertama` dan `C3_P10_Hard_PesanMorse` (masing-masing berisi 1 file `.ino`)
- Sticky note hijau & merah
- Dipegang tutor: alat demo jadi (DHT22 + relay + kipas + firmware proyek) + dashboard tutor, power bank, 6 foto benda untuk game "Tebak Benda IoT"
- **Tidak perlu** breadboard, sensor, atau kabel jumper hari ini

## Persiapan tutor sebelum kelas

Detail lengkap (H-1, timeline, troubleshooting): `kurikulum/sma/p10/Panduan_Pengajar_P10_SMA.md`.

1. Jalankan `SCRIPT_P10_SMA.gs` supaya folder **Kode** dan Google Form post-test ada di Drive. Pasang link-nya di Linktree.
2. Salin installer Arduino IDE + driver ke 2–3 flashdisk. 6 laptop mengunduh bersamaan lewat WiFi sekolah = lambat.
3. Siapkan 1–2 **laptop cadangan** yang sudah lulus 3 level dan pernah upload `P10_1_KedipPertama`.
4. Tes WiFi kelas. Lambat → semua memilih board ESP32 versi **2.0.17** (±0,8 GB) di Level 2.
5. Siapkan alat demo jadi + dashboard tutor (PIN fan siap) untuk slide Demo.
6. Uji tiap ESP32 dengan `P10_1_KedipPertama`: LED biru (GPIO 2) harus berkedip. Klon tanpa LED biru → ganti papan.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka & pembuka materi | Laptop dinyalakan, cover, pemantik, agenda, cara dapat poin |
| 5–15 | Materi Topik 1 | IoT, kenalan ESP32 (diedarkan), **demo alat jadi**, Tanya Jawab |
| 15–25 | Praktek Level 1 + Level 2 | Pasang Arduino IDE, tempel alamat board, mulai INSTALL board ESP32 |
| 25–35 | Game (sambil mengunduh) | Tebak Benda IoT (+2 tiap jawaban) |
| 35–45 | Praktek Level 3 + cek port | Library DHT, colok ESP32, Tanya Jawab |
| 45–52 | Praktek Topik 3 | Upload Kedip Pertama, utak-atik angka, demo power bank, Tanya Jawab |
| 52–62 | 🟢 Easy + 🟡 Medium + 🔴 Hard | Kedip Gaya Kamu, Tiru Lampu Asli, Pesan Rahasia Morse |
| 62–64 | Peta petualangan | |
| 64–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

**Peran.** Berdua (sma-04/05/06): **Operator** (klik di laptop) & **Pengecek** (bacakan langkah dari slide, pasang sticky note); tukar di Topik 3. Sendiri (sma-01/02/03): bacakan langkah pelan-pelan, tetangga boleh jadi Pengecek.

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Cara Dapat Poin → IoT Itu Apa Sih? → Kenalan: Ini ESP32 → Demo: Akhir P12 → 💬 Tanya Jawab → Bengkel Kita: 3 Alat → Level 1 → Level 2 → Sambil Menunggu: Tebak Benda IoT → Level 3 → Colok ESP32: Port Muncul? → 💬 Tanya Jawab → Kedip Pertama: Cara Upload → Kode: Bagian yang Kamu Utak-atik → Program Tinggal di ESP32 → 💬 Tanya Jawab → 🟢 Easy → 🟡 Medium → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah unduhan board ESP32 (Level 2). Kalau sampai menit 45 belum selesai, siswa itu upload Kedip Pertama di **laptop cadangan** sementara laptopnya tetap mengunduh. Sisa instalasi diselesaikan di 15 menit awal P11, **bukan PR siswa**.

---

## Slide

### IoT Itu Apa Sih? 🌐
- **Internet of Things** = benda sehari-hari yang bisa **merasa**, **mikir**, dan **ngobrol lewat internet**.
- Rumusnya: **Sensor** (indra) → **Mikrokontroler** (otak) → **Aksi / Internet** (tangan & mulut).
- Contoh: smartwatch menghitung langkah, CCTV yang dilihat dari HP, lampu kandang ayam otomatis, dan **Smart Room Monitor** yang kita bangun sampai P13.

### Kenalan: Ini ESP32 🧠
| Bagian | Gunanya |
|---|---|
| **Chip ESP32** (kotak logam) | Otak: 240 MHz, 2 inti |
| **Antena WiFi** (garis zig-zag) | WiFi & Bluetooth bawaan |
| **Port USB** | Listrik + jalur kirim program |
| **Tombol EN / BOOT** | EN = restart, BOOT = mode terima program |
| **LED merah / LED biru** | Merah = ada listrik, biru = bisa diprogram (GPIO 2) |
| **Pin di pinggir** | "Tangan & telinga" untuk sensor dan relay (mulai P11) |

### Demo: Akhir P12, Alatmu Bisa Begini 🎬
- Genggam sensor → angka di dashboard naik. Tekan tombol di HP → kipas menyala.
- Kode alat ini **sudah jadi**. Misi kalian sampai P13: merakit, meng-upload, dan menjadikan dashboard-nya milik kalian.

### Bengkel Kita: 3 Alat 🧰
| Alat | Analogi | Gunanya |
|---|---|---|
| **Arduino IDE** | Dapur | Menulis & mengirim (upload) program ke ESP32 |
| **Board ESP32** | Kompor yang cocok | Supaya Arduino IDE kenal ESP32 (buatan Espressif, bukan Arduino) |
| **Library DHT** | Bumbu instan | Kode jadi untuk membaca sensor suhu (P11) |

Dipasang berurutan **Level 1 → 2 → 3**. Selesai satu level → sticky note **hijau**. Butuh bantuan → **merah**.

### Level 1: Pasang Arduino IDE 💻
- **Windows**: cek *About your PC* → **64-bit** → jalankan installer → **Yes** → **I Agree** → **Install** → **Finish**. Izin driver muncul → **Install**.
- **Mac**: *About This Mac* → **Apple M1/M2/M3/M4** atau **Intel** → file `.dmg` yang cocok → seret ke **Applications** → buka → **Open**.

### Level 2: Pasang Board ESP32 📦
1. **File → Preferences** (Mac: **Arduino IDE → Settings**) → *Additional boards manager URLs* → tempel `https://espressif.github.io/arduino-esp32/package_esp32_index.json` → **OK**.
2. **Boards Manager** → ketik `esp32` → **esp32 by Espressif Systems** → **INSTALL** (bukan "Arduino ESP32 Boards").
3. Tunggu sampai tertulis *installed*. Ukurannya ±2 GB; versi **2.0.17** (±0,8 GB) juga boleh.

### Sambil Menunggu: Tebak Benda IoT! 🎯
Tutor menampilkan 6 foto: rice cooker biasa, smart TV, palang parkir otomatis, kalkulator, timbangan digital Bluetooth, pompa air otomatis. Tebak: **IoT atau bukan?** Sensornya apa? (+2 tiap jawaban)

### Level 3: Pasang Library DHT 📚
- **Library Manager** → `DHT sensor library` → **by Adafruit** → **INSTALL** → **INSTALL ALL**.
- Jangan pasang library bernama **"WiFi"**: bentrok dengan WiFi bawaan ESP32.

### Colok ESP32: Port Muncul? 🔌
- Pakai **kabel USB DATA**, bukan kabel charger.
- Windows: Device Manager → *Ports (COM & LPT)* → **COMx**. Mac: Terminal → `ls /dev/cu.*` → `/dev/cu.usbserial-…`.
- Tidak muncul → ganti kabel → port USB lain → driver CP210x/CH340.

### Kedip Pertama: Cara Upload ⬆️
1. Folder **Kode** → `P10_1_KedipPertama` → double-click `P10_1_KedipPertama.ino`.
2. **Select Board** → **ESP32 Dev Module** + port ESP32.
3. **Upload (→)** → tunggu **Done uploading** (compile pertama 2–5 menit).
4. **Serial Monitor** → **115200 baud** → muncul `Halo! ESP32 siap berkedip.` lalu `Nyala` / `Mati` bergantian.
- `Connecting.....` lalu gagal → tahan **BOOT** sampai muncul `Writing at …`.

### Kode: Bagian yang Kamu Utak-atik 🔧
```cpp
// potongan — P10_1_KedipPertama.ino
#define LED_PIN 2        // LED biru bawaan ESP32 DevKit V1 ada di GPIO 2

// ===== BOLEH DIUBAH =====
int lamaNyala = 500;     // berapa milidetik LED menyala (1000 = 1 detik)
int lamaMati  = 500;     // berapa milidetik LED mati
// ========================
```
- **Tinkering** = ubah angka → Upload → amati. Kode tidak ditulis dari nol.
- Satuan waktu = **milidetik**: 1000 = 1 detik, 500 = setengah detik.

### Program Tinggal di ESP32 🔋
- Cabut USB dari laptop, colok ke power bank: LED **tetap kedip**.
- Upload memindahkan program ke memori ESP32. Laptop hanya untuk menulis & mengirim.

### Peta Petualangan IoT 🗺️
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama          ← HARI INI
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok
[P12] Kontrol kipas dari dashboard: manual & otomatis
[P13] Kustom dashboard + website online + Demo Day
```

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum lanjut. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** Lampu jalan nyala sendiri pas maghrib. Pintu mal kebuka sendiri. Siapa sebenarnya yang "nyuruh" mereka?
- **Topik 1 — Kenalan ESP32:** Sebutkan 1 benda di rumah atau sekolahmu yang menurutmu punya "otak" kecil. Sensornya apa?
- **Topik 2 — Pasang Bengkel:** LED merah ESP32 menyala, tapi port tidak muncul di laptop. Siapa tersangka nomor 1?
- **Topik 3 — Kedip Pertama:** Kalau `lamaNyala = 5` dan `lamaMati = 5`, LED-nya kelihatan seperti apa? Kenapa?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard). Pasangan: poin untuk kedua anggota.

---

## Challenge

### 🟢 Easy — "Kedip Gaya Kamu" (+5)
1. Di `P10_1_KedipPertama.ino`, ubah `lamaNyala` dan `lamaMati` jadi **100** → Upload.
2. Ubah lagi keduanya jadi **2000** → Upload.
3. Tunjukkan kedua versi ke tutor.

### 🟡 Medium — "Tiru Lampu Asli" (+10) 🚦
1. Pilih 1 lampu dunia nyata: **lampu sein motor**, **lampu menara/suar** (kedip singkat, gelap lama), atau **lampu hazard**.
2. Tiru dengan mengubah `lamaNyala` dan `lamaMati` → Upload.
3. Ganti teks `"Halo! ESP32 siap berkedip."` (di bagian `setup`) jadi pesanmu sendiri. Cek di Serial Monitor (tekan tombol **EN** kalau pesannya terlewat).
4. Teman sebelah menebak lampu apa yang kamu tiru. Benar = lolos.

### 🔴 Hard — "Pesan Rahasia Morse" (+15) 🔦
1. Buka `C3_P10_Hard_PesanMorse.ino` → ubah `PESAN` jadi kata 3–4 huruf (misal inisialmu) → Upload.
2. Teman menerjemahkan kedipan LED pakai **tabel Morse** di slide, **tanpa** melihat Serial Monitor.
3. Terjemahan benar = lolos. Terlalu cepat? Perbesar angka `TITIK`.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Hari ini benda mati mulai nurut sama kodemu.
- **Pertanyaan pemantik:** Lampu jalan nyala sendiri pas maghrib. Pintu mal kebuka sendiri. Siapa sebenarnya yang "nyuruh" mereka?
- **Konteks:** Nggak ada orang yang mencet tombolnya. Ada "otak" kecil yang kerja diam-diam.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di slide *IoT Itu Apa Sih?* dan *Kenalan: Ini ESP32*.

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #7 (Curiosity & Secrets — Rasa Penasaran)**

# "Lampu ini sebenarnya kedip 100 kali per detik. Kamu nggak sadar, kan?" 👀

Isi slide:
- 💡 Mata manusia tidak bisa melihat kedipan yang sangat cepat. Kedip 100× per detik = kelihatan **menyala terus**.
- 🔅 Makin lama "mati"-nya dibanding "nyala"-nya, lampu kelihatan makin **redup**. Begitulah banyak lampu LED diredupkan.
- 🧠 Yang mengatur kedipan secepat itu: mikrokontroler kecil seperti **ESP32**, cukup dengan mengubah **2 angka**.
- 📱 Coba rekam lampu LED pakai mode slow-motion HP: kedipannya kelihatan!

> Catatan tutor: Kaitkan dengan kelas: "Di P10 siswa membuktikan sendiri: `lamaNyala = 5`, `lamaMati = 5` → LED terlihat menyala redup."

🎙️ **Kalimat hook (pembuka rekaman):** "Lampu ini sebenarnya kedip 100 kali per detik. Kamu nggak sadar, kan?"

📌 **Teks di layar:**
- Lampu ini KEDIP terus lho 👀
- 100× per detik = kelihatan nyala
- Mati lebih lama = makin redup 🔅
- Diatur ESP32 cuma pakai 2 angka 🧠
- Cek pakai slow-mo HP 📱

🎬 **Penutup:** "Minggu depan ESP32 ini kita sambungin ke sensor suhu dan internet. Follow biar nggak ketinggalan!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Lampu ini sebenarnya kedip 100 kali per detik. Kamu nggak sadar, kan?"
> - [4–14 detik] "Mata kita lambat. Kalau lampu nyala-mati lebih cepat dari kira-kira 50 kali per detik, otak kita nganggepnya nyala terus."
> - [14–26 detik] "Triknya: kalau waktu matinya dibikin lebih lama dari nyalanya, lampu kelihatan lebih redup. Banyak lampu LED diredupkan dengan cara ini."
> - [26–38 detik] "Yang ngatur kedipan secepat itu cuma papan kecil ini, ESP32. Kita cuma ganti dua angka: lama nyala, lama mati."
> - [38–48 detik] "Mau bukti? Rekam lampu LED pakai slow motion HP. Kedipannya langsung kelihatan."
> - [48–55 detik] "Minggu depan ESP32 ini kita sambungin ke sensor suhu dan internet. Follow biar nggak ketinggalan!"

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #7 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Lampu ini kedip 100 kali per detik |
| Durasi | ±55 detik |
| Pembicara | Tutor (close-up ESP32 + layar Arduino IDE) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Close-up LED biru ESP32 tampak menyala diam | "Lampu ini sebenarnya kedip 100 kali per detik. Kamu nggak sadar, kan?" | Lampu ini KEDIP terus lho 👀 |
| 4–14 | Animasi mata + garis nyala-mati yang makin rapat | "Mata kita lambat. Kalau lampu nyala-mati lebih cepat dari kira-kira 50 kali per detik, otak kita nganggepnya nyala terus." | 100× per detik = kelihatan nyala |
| 14–26 | Dua LED berdampingan: satu terang, satu redup | "Triknya: kalau waktu matinya dibikin lebih lama dari nyalanya, lampu kelihatan lebih redup. Banyak lampu LED diredupkan dengan cara ini." | Mati lebih lama = makin redup 🔅 |
| 26–38 | Screen record Arduino IDE: angka `lamaNyala`/`lamaMati` diganti, klik Upload | "Yang ngatur kedipan secepat itu cuma papan kecil ini, ESP32. Kita cuma ganti dua angka: lama nyala, lama mati." | Diatur ESP32 cuma pakai 2 angka 🧠 |
| 38–48 | Rekaman slow-motion HP: LED berkedip jelas | "Mau bukti? Rekam lampu LED pakai slow motion HP. Kedipannya langsung kelihatan." | Cek pakai slow-mo HP 📱 |
| 48–55 | Tutor ke kamera memegang sensor DHT22 | "Minggu depan ESP32 ini kita sambungin ke sensor suhu dan internet. Follow biar nggak ketinggalan!" | Follow buat part selanjutnya 👉 |

#### Caption

Lampu LED di sekitarmu mungkin lagi kedip ratusan kali per detik dan kamu nggak sadar 👀

💡 Kedip super cepat = kelihatan nyala terus
🔅 Waktu mati lebih lama = lampu makin redup
🧠 Semua diatur mikrokontroler kecil seperti ESP32
📱 Buktikan sendiri pakai slow-mo HP

#InspiraLabs #ESP32 #Arduino #IoT #EkskulCoding #Elektronika #BelajarCoding #FaktaUnik

#### Yang sengaja tidak dibocorkan
- Langkah instalasi Arduino IDE, board ESP32, dan library DHT.
- Isi program Kedip Pertama dan challenge Pesan Rahasia Morse.

---

## Post-Test (5 soal, pilihan ganda)

**1. Bagian ESP32 yang berfungsi sebagai "otak" yang menjalankan program adalah…**
A. Port USB B. Chip ESP32 (kotak logam) C. Tombol EN D. LED merah

**2. LED merah ESP32 menyala, tapi port tidak muncul di Arduino IDE. Penyebab paling sering adalah…**
A. Library DHT belum dipasang B. Baud rate Serial Monitor salah C. Kabel USB yang dipakai hanya kabel charger D. WiFi sedang mati

**3. Di kode Kedip Pertama kamu menulis `lamaNyala = 2000;`. Apa yang terjadi?**
A. LED berkedip 2000 kali lalu berhenti B. LED mati selamanya C. ESP32 restart setiap 2 detik D. LED menyala 2 detik setiap kali berkedip

**4. Supaya Arduino IDE bisa memprogram ESP32, yang dipasang di Boards Manager adalah…**
A. esp32 by Espressif Systems B. Arduino ESP32 Boards by Arduino C. Library WiFi by Arduino D. DHT sensor library

**5. Upload macet di tulisan `Connecting.....` lalu gagal. Yang sebaiknya dilakukan adalah…**
A. Mengganti baud rate Serial Monitor ke 9600 B. Menahan tombol BOOT di ESP32 sampai muncul `Writing at…` C. Memasang library WiFi dari Library Manager D. Mengganti nama folder program

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** `100` → LED kedip cepat (5× nyala-mati per detik), tulisan Serial mengalir cepat. `2000` → nyala 2 detik, mati 2 detik. Pelajaran: angka = lama menunggu dalam **milidetik**.

**Medium:** patokan (bebas asal mirip): sein ±400/400, menara/suar ±100/1900, hazard ±500/500. Pesan Serial berubah sesuai teks siswa. Pesan hanya tercetak sekali saat ESP32 mulai, jadi kalau terlewat tekan tombol **EN**. Pelajaran: teks di dalam tanda kutip boleh diganti bebas; tanda kutip dan titik koma jangan dihapus.

**Hard:** lolos jika teman menerjemahkan dengan benar tanpa melihat Serial Monitor. Pemula: sarankan `TITIK = 400`. Huruf di luar A–Z/0–9 dianggap spasi (jeda panjang). Pelajaran: satu program yang sama bisa "berbicara" apa saja hanya dengan mengganti teks.

### Kunci Post-Test
1. B 2. C 3. D 4. A 5. B

### Pembahasan singkat
- No. 2: kabel charger hanya punya jalur listrik (LED merah nyala), tidak punya jalur data.
- No. 3: `lamaNyala` = berapa milidetik LED menyala; 2000 ms = 2 detik.
- No. 4: "Arduino ESP32 Boards by Arduino" hanya untuk papan Arduino Nano ESP32, bukan ESP32 DevKit kita.
- No. 5: tombol BOOT memaksa ESP32 masuk mode terima program; lepas setelah muncul `Writing at…`.
