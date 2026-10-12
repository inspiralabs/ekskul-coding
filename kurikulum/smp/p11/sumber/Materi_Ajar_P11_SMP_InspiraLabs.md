# SMP — Pertemuan 11: Pasang Firmware Proyek & Jadi Dokter Kabel

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 30 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload firmware proyek akhir, membaca Serial Monitor, dan memperbaiki kesalahan rakitan |
| Penilaian | Hasil praktek: Serial Monitor menampilkan suhu & kelembapan dari rakitan sendiri |
| Potongan proyek akhir yang dibedah | `smp/firmware/smp_room_monitor.ino` dipakai **utuh, tanpa diubah**, kecuali zona "BOLEH DIUBAH": `WIFI_SSID`, `WIFI_PASSWORD` (dan `DHT_PIN` kalau kabel dipindah). `DEVICE_ID` **sudah diisi tutor**. Hari ini siswa belajar membaca pesan Serial Monitor dari firmware ini. |

## Alat & bahan (per kelompok/individu)

- Rakitan dari P10: ESP32 + DHT22 (+ ke 3V3, out ke **D4**, − ke GND). LED di D2 boleh dilepas.
- Kabel USB data + laptop dengan VS Code + PlatformIO
- **Zip proyek dari tutor** bernama sesuai Device ID (mis. `smp-07.zip`, dari `smp-01` … `smp-13`), berisi `firmware/`, `index.html`, `style.css`, `api.js`, `icon.webp`, `README.md`. Device ID & nama anggota **sudah diisi**. Daftar Device ID: `docs/HANDOUT_SISWA.md`.
- Folder **Kode** pertemuan ini (Drive): `P11_1_BacaDHT22.cpp` (cek sensor tanpa WiFi), `P11_2_TesWiFi.cpp` (tes WiFi saja)
- Multimeter (tutor), 3–4 kabel jumper cadangan

## Persiapan tutor sebelum kelas

1. Buat zip per Device ID dengan `py tools/kelompok.py paket`, lalu bagikan `smp-XX.zip` ke tiap kelompok/individu (flashdisk/Drive/WA). **Jangan** pakai salinan umum `smp/` atau `Kode/proyek-akhir`: Device ID-nya generik dan data kelompok bisa saling menimpa.
2. Tulis nama & password WiFi kelas di papan. Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz). Siapkan 1 hotspot HP cadangan.
3. Cek backend online: buka `https://api-ekskulcoding.inspiralabs.id/health`.
4. Buka folder `firmware` tiap laptop lewat PIO Home → Open Project, lalu **Build sekali** sebelum kelas.
5. Siapkan 2–3 kabel jumper yang **sengaja putus** (potong di dalam isolasi) untuk demo multimeter.
6. Cek Tugas 3 (diagram rakitan) di awal kelas, maksimal 5 menit.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Cek Tugas 3: 2–3 siswa menunjukkan diagram rakitannya |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–17 | Materi | Slide 1–3: folder proyek, zona hijau vs zona merah |
| 17–30 | Praktek bersama | Slide 4–5: upload firmware proyek, baca Serial Monitor |
| 30–35 | 🟢 Challenge Easy | Tiup & Catat |
| 35–45 | Materi | Slide 6–7: dokter kabel, multimeter, program cadangan |
| 45–51 | 🟡 Challenge Medium | Dokter Serial Monitor |
| 51–58 | 🔴 Challenge Hard | Pindah Kaki Sensor |
| 58–60 | Peta proyek | Slide 8 |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Dari Program Latihan ke Program Proyek → Isi Folder Proyekmu → Zona Hijau & Zona Merah → Praktek Bareng: Upload Firmware Proyek → Membaca "Cerita" ESP32 → 💬 Forum Diskusi → 🟢 Easy → Tips Engineer: Jadi Dokter Kabel → Alat Dokter: Multimeter & Program Cadangan → 💬 Forum Diskusi → 🟡 Medium → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah WiFi. Kalau banyak yang macet di WiFi, pindahkan semua ke hotspot cadangan, lalu jadikan Challenge Hard opsional.

---

## Slide

### Slide 1 — Dari Program Latihan ke Program Proyek 🚀
- P10: program latihan (Blink, cek DHT22) → ESP32 bicara ke **laptop**.
- Hari ini: **firmware proyek akhir** → ESP32 membaca sensor **dan** mengirim data ke **internet**.
- Firmware = program jadi untuk alat kita. **Kita tidak menulis kodenya**, kita memasang dan merawatnya.

### Slide 2 — Isi Folder Proyekmu 📁
Zip dari tutor bernama sesuai **Device ID** kalian (contoh: `smp-07.zip`). **Extract** dulu (klik kanan → Extract All) jadi folder `smp-07`.

| Isi | Untuk apa | Dipakai di |
|---|---|---|
| `firmware/` | Program ESP32 (`smp_room_monitor.ino` + `platformio.ini`) | **Hari ini** |
| `index.html`, `style.css`, `icon.webp` | Website dashboard (nama anggota sudah terisi) | P12 |
| `README.md` | Petunjuk singkat + aturan serah folder | Dibaca |
| `api.js` | "Kabel" dashboard ke server | Jangan diubah |

> Catatan tutor: Tunjukkan tabel Device ID di `docs/HANDOUT_SISWA.md`. Device ID = **nama alat** di internet. Tidak boleh diganti, dan tidak boleh sama dengan kelompok lain.

### Slide 3 — Zona Hijau & Zona Merah 🚦
Buka `firmware/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`: `SERVER_URL`, `API_KEY`, dan semua baris di bawahnya) = sambungan ke server. Diubah → data ditolak atau tidak sampai.
- Tulis nama WiFi **persis**: huruf besar-kecil dan spasi dihitung. Tanda kutip `" "` jangan terhapus.

### Slide 4 — Praktek Bareng: Upload Firmware Proyek 🔧
1. Cek rakitan: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Extract `smp-XX.zip`. PIO Home → **Open Project** → pilih folder `smp-XX/firmware` (jangan buka folder di dalam zip tanpa di-extract).
3. Buka `smp_room_monitor.ino`, isi `WIFI_SSID` dan `WIFI_PASSWORD` saja. `DEVICE_ID` sudah diisi tutor (cukup pastikan sama dengan nama zip). **Save** (Ctrl+S).
4. **Upload** → tunggu `SUCCESS` → **Serial Monitor**.

> Catatan tutor: Kalau Serial Monitor kosong, tekan tombol **EN** (reset) di board supaya ESP32 mengulang dari awal dan pesan WiFi terlihat.

### Slide 5 — Membaca "Cerita" ESP32 📖
Kalau semua benar, Serial Monitor bercerita seperti ini (berulang tiap 4 detik):
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```

| Baris | Artinya | Kalau tidak muncul, cek… |
|---|---|---|
| `Menghubungkan ke WiFi.....` | Sedang mencoba WiFi | Program belum ter-upload / tekan EN |
| `Terhubung! IP …` | WiFi **berhasil** | Nama/password WiFi, WiFi 2.4 GHz |
| `Suhu: … Kelembapan: …` | Sensor **terbaca** | Kabel DHT22 |
| `kode respons: 200` | Data **diterima server** | Internet WiFi, zona merah tidak diubah |

### Slide 6 — Tips Engineer: Jadi Dokter Kabel 🩺
Engineer tidak menebak. Mereka **membaca gejala**, lalu cek **satu per satu**.

| Gejala di Serial Monitor | Penyebab paling sering | Obatnya |
|---|---|---|
| Titik-titik `......` tidak berhenti | Nama/password WiFi salah, WiFi 5 GHz | Cek huruf & spasi, pindah ke hotspot 2.4 GHz |
| `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` | Kabel out tidak di D4, kabel longgar, + / − tertukar | Cabut USB, cek rakitan pakai checklist P10 |
| Angka suhu muncul lalu kadang gagal | Kabel goyang / jumper hampir putus | Tekan kabel, ganti jumper, tes multimeter |
| `kode respons: -1` | WiFi tersambung tapi tidak ada internet | Cek kuota hotspot, coba WiFi lain |
| `kode respons: 401` | Zona merah (`API_KEY`) berubah | Extract ulang zip asli dari tutor, isi WiFi lagi |
| Tulisan acak `⸮⸮⸮` | Kecepatan Serial Monitor beda | `monitor_speed = 115200` |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Tekankan urutan cek: **listrik → kabel → pin → program**.

### Slide 7 — Alat Dokter: Multimeter & Program Cadangan 🔬
**Multimeter** (pinjam ke tutor):
- Mode **DC volt (20V)**: ujung merah di 3V3, ujung hitam di GND → harus ±**3,3V**. Ukur juga di kaki + dan − sensor.
- Mode **bunyi (continuity)**: tempel ke dua ujung satu kabel jumper → **bunyi = bagus**, diam = kabel putus.

**Program cadangan** (folder Kode, tinggal upload):
- `P11_1_BacaDHT22.cpp` → cek sensor **tanpa WiFi**. Angka muncul = rakitan sensor benar.
- `P11_2_TesWiFi.cpp` → cek WiFi **tanpa sensor**. `Terhubung!` = nama/password benar.
- Setelah ketemu masalahnya, **upload lagi firmware proyek**.

> Catatan tutor: Demo kabel jumper yang sengaja diputus: terlihat normal, tapi multimeter diam. Ini penyebab "misterius" yang sering terjadi.

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED        ✅
[P10] Upload program jadi (Blink) + rakit DHT22  ✅
[P11] Upload firmware proyek + jadi "dokter kabel"  ← HARI INI
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Firmware proyek **tetap tersimpan** di ESP32. Minggu depan cukup colok ke USB/power bank, data langsung terkirim lagi. Minta siswa membawa **foto kelompok** (atau foto diri untuk peserta individu) untuk dashboard di P12.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Upload Firmware Proyek:** Kenapa `DEVICE_ID` tiap kelompok harus berbeda? Apa yang terjadi kalau dua alat memakai ID yang sama?
- **Topik 2 — Dokter Kabel:** Serial Monitor macet di titik-titik WiFi. Apakah kabel sensor mungkin penyebabnya? Bagaimana cara membuktikannya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Tiup & Catat"
Dari Serial Monitor firmware proyek, catat angka suhu & kelembapan **sebelum** dan **sesudah** sensor ditiup (atau digenggam 10 detik). Catat juga **kode respons**-nya. Tulis di kertas: mana yang naik lebih banyak?

### 🟡 Medium — "Dokter Serial Monitor" 🩺
Cocokkan 4 tampilan Serial Monitor ini dengan penyebabnya:

| Tampilan | Penyebab (pilih: A / B / C / D) |
|---|---|
| 1. `Menghubungkan ke WiFi.......................` (tidak berhenti) | ? |
| 2. `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` | ? |
| 3. `Kirim data -> kode respons: -1` | ? |
| 4. `Kirim data -> kode respons: 401` | ? |

- **A.** Kabel sensor longgar / pin salah
- **B.** WiFi tersambung, tapi tidak bisa sampai ke server (internet mati)
- **C.** Nama/password WiFi salah atau WiFi-nya 5 GHz
- **D.** Baris `API_KEY` di zona merah diubah

Bonus: praktikkan nomor 2. Cabut USB, lepas kabel out DHT22, colok USB, lihat pesannya. Lalu pasang lagi.

### 🔴 Hard — "Pindah Kaki Sensor" 🔀
1. Cabut USB. Pindahkan kabel **out** DHT22 dari **D4** ke **D27** (sisi kiri, di bawah D26).
2. Colok USB **tanpa** mengubah program. Apa pesan di Serial Monitor?
3. Ubah **satu angka** di zona hijau: `#define DHT_PIN 4` → `#define DHT_PIN 27`. Upload. Angka suhu muncul lagi?
4. Tulis di kertas: kenapa angka di `DHT_PIN` harus sama dengan pin tempat kabel dicolok?
5. **Kembalikan** kabel ke D4 dan angka ke `4` (rakitan standar proyek).

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Saatnya memasang program proyek akhir, dan belajar memperbaiki alat seperti engineer.
- **Pertanyaan pemantik:** Kalau alat tiba-tiba berhenti bekerja, bagaimana teknisi tahu bagian mana yang rusak tanpa membongkar semuanya?
- **Konteks:** Alat kita bisa "bercerita" tentang masalahnya. Kita tinggal belajar membacanya.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 2 (slide *Tips Engineer: Jadi Dokter Kabel*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #2 (Negative Hooks — Psikologi Terbalik)**

# "Alasan kenapa sensor kamu selalu ngasih angka NaN." 🤯

Isi slide:
- ❓ **NaN** = *Not a Number*, artinya sensor **gagal** memberi data.
- 🔎 4 tersangka utama (semuanya di **kabel**, bukan di kode):
  1. **Kabel longgar**: terlihat tercolok, padahal kakinya cuma setengah masuk.
  2. **Pin salah**: kabel di D5, padahal program menunggu di D4. Angka pin di program harus sama dengan tempat kabel.
  3. **+ dan − tertukar**: sensor tidak dapat listrik yang benar, bahkan bisa panas.
  4. **Kabel jumper putus di dalam**: dari luar mulus, di dalam putus. Tes pakai multimeter mode bunyi.
- 🛡️ Rahasia engineer: cek **berurutan**: listrik → kabel → pin → program. Jangan langsung menyalahkan kode.

🎙️ **Kalimat hook (pembuka rekaman):** "Alasan kenapa sensor kamu selalu ngasih angka NaN."

📌 **Teks di layar:**
- NaN = Not a Number
- 1️⃣ Kabel setengah masuk
- 2️⃣ Pin beda dengan program
- 3️⃣ + dan − tertukar
- 4️⃣ Jumper putus di dalam ✂️
- Listrik → kabel → pin → program 🛡️

🎬 **Penutup:** "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–3 detik] "Alasan kenapa sensor kamu selalu ngasih angka NaN."
> - [3–8 detik] "NaN artinya Not a Number. Sensornya gagal ngasih data. Dan sembilan dari sepuluh kasus, pelakunya kabel."
> - [8–16 detik] "Satu: kabel setengah masuk. Kelihatannya nancep, padahal kakinya cuma nyangkut. Tekan sampai mentok."
> - [16–24 detik] "Dua: pinnya beda. Kabelnya di D5, programnya nunggu di D4. Angka pin di program harus sama dengan tempat kabel."
> - [24–31 detik] "Tiga: plus minus ketuker. Sensornya nggak dapat listrik yang bener. Kalau panas, cabut sekarang."
> - [31–40 detik] "Empat: kabel jumper putus di dalam. Dari luar mulus. Tes pakai multimeter mode bunyi. Nggak bunyi? Buang."
> - [40–50 detik] "Rahasia engineer: cek berurutan. Listrik, kabel, pin, baru program. Jangan langsung nyalahin kode."
> - [50–55 detik] "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!"

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #2 — Negative Hooks (Psikologi Terbalik) |
| Judul | Alasan kenapa sensor kamu selalu ngasih angka NaN |
| Durasi | ±55 detik |
| Pembicara | Tutor + 1 siswa (talent reaksi) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Serial Monitor penuh tulisan `Gagal baca sensor` | "Alasan kenapa sensor kamu selalu ngasih angka NaN." | Sensor kamu NaN terus? 😵 |
| 3–8 | Close-up DHT22 dengan 3 kabel | "NaN artinya Not a Number. Sensornya gagal ngasih data. Dan sembilan dari sepuluh kasus, pelakunya kabel." | NaN = Not a Number |
| 8–16 | Jari menekan kabel yang setengah masuk breadboard | "Satu: kabel setengah masuk. Kelihatannya nancep, padahal kakinya cuma nyangkut. Tekan sampai mentok." | 1️⃣ Kabel setengah masuk |
| 16–24 | Kabel kuning dipindah dari D5 ke D4, zoom ke `#define DHT_PIN 4` | "Dua: pinnya beda. Kabelnya di D5, programnya nunggu di D4. Angka pin di program harus sama dengan tempat kabel." | 2️⃣ Pin beda dengan program |
| 24–31 | Kabel merah & hitam ditukar, tangan menyentuh sensor lalu cepat ditarik | "Tiga: plus minus ketuker. Sensornya nggak dapat listrik yang bener. Kalau panas, cabut sekarang." | 3️⃣ + dan − tertukar |
| 31–40 | Multimeter mode bunyi: kabel bagus berbunyi, kabel putus diam | "Empat: kabel jumper putus di dalam. Dari luar mulus. Tes pakai multimeter mode bunyi. Nggak bunyi? Buang." | 4️⃣ Jumper putus di dalam ✂️ |
| 40–50 | Grafis 4 kotak: Listrik → Kabel → Pin → Program | "Rahasia engineer: cek berurutan. Listrik, kabel, pin, baru program. Jangan langsung nyalahin kode." | Listrik → kabel → pin → program 🛡️ |
| 50–55 | Tutor ke kamera, siswa meniup sensor & angka naik | "Sensor udah kebaca? Minggu depan datanya muncul di website kita sendiri. Follow!" | Next: dashboard 🌐 |

#### Caption

Sensor suhu kamu cuma ngasih "nan"? 😤 Sebelum nyalahin kode, cek 4 tersangka ini:
1️⃣ Kabel setengah masuk
2️⃣ Pin beda dengan program
3️⃣ + dan − tertukar
4️⃣ Kabel jumper putus di dalam

Urutan cek ala engineer: listrik → kabel → pin → program 🛡️

#InspiraLabs #ESP32 #DHT22 #SensorSuhu #IoT #Elektronika #EkskulCoding #Troubleshooting

#### Yang sengaja tidak dibocorkan
- Firmware proyek akhir, zona hijau/merah, dan cara membaca Serial Monitor-nya.
- Challenge "Pindah Kaki Sensor" dan program cadangan.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di firmware proyek akhir, baris yang perlu diisi siswa hari ini adalah…**
A. `SERVER_URL` dan `API_KEY` B. `WIFI_SSID` dan `WIFI_PASSWORD` C. Semua baris di bawah tulisan `JANGAN UBAH` D. `DEVICE_ID` diganti nama sendiri

**2. Serial Monitor menampilkan `Menghubungkan ke WiFi.........` dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…**
A. Kabel sensor DHT22 longgar B. Nama/password WiFi salah atau WiFi-nya 5 GHz C. LED terbalik D. Suhu ruangan terlalu panas

**3. Serial Monitor menampilkan `Gagal baca sensor DHT22, coba lagi 4 detik lagi...`. Yang paling tepat dicek pertama adalah…**
A. Password WiFi B. Kabel DHT22: out di D4, kabel tidak longgar, + / − tidak tertukar C. Warna dashboard D. Mengganti `SERVER_URL`

**4. Kabel out DHT22 dipindah ke D27. Agar sensor terbaca lagi, yang harus diubah adalah…**
A. `#define DHT_PIN 4` menjadi `#define DHT_PIN 27` B. `DEVICE_ID` C. `API_KEY` D. Tidak perlu mengubah apa pun

**5. Multimeter mode bunyi (continuity) ditempel ke dua ujung kabel jumper dan TIDAK berbunyi. Artinya…**
A. Kabel itu bagus B. Kabel itu putus di dalam, harus diganti C. ESP32 rusak D. Sensor sedang membaca suhu

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** kelembapan biasanya naik jauh lebih banyak saat ditiup (napas itu lembap); suhu naik lebih banyak saat digenggam. Kode respons yang benar: `200`.

**Medium:** 1 → C, 2 → A, 3 → B, 4 → D.

**Hard:**
- Langkah 2: muncul `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` karena program masih menunggu data di pin 4, sedangkan kabel sudah di pin 27.
- Langkah 3: setelah `DHT_PIN 27` dan upload, angka muncul lagi.
- Jawaban langkah 4: program hanya "mendengarkan" pin yang ditulis di `DHT_PIN`. Kabel dan angka harus selalu sama.
- Kenapa D27: aman untuk sensor (bukan pin khusus saat menyala seperti 0/2/5/12/15, dan bukan pin input-saja 34–39). Kalau siswa memilih pin sendiri, arahkan ke D25, D26, D27, D32, atau D33.
- Pastikan semua kembali ke **D4 / `DHT_PIN 4`** sebelum pulang.

### Kunci Post-Test
1. B 2. B 3. B 4. A 5. B

### Pembahasan singkat
- No. 1: `DEVICE_ID` sudah diisi tutor dan tidak boleh diganti. Zona merah tidak pernah diubah.
- No. 2: firmware menunggu WiFi dulu sebelum membaca sensor, jadi masalah kabel sensor tidak membuat titik-titik macet.
- No. 4: satu angka di zona hijau, sama seperti latihan "Pindah Lampu" di P10.
