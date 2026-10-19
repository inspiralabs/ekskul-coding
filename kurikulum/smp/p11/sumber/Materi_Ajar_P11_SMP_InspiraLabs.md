# SMP — Pertemuan 11: Pasang Firmware Proyek & Jadi Dokter Kabel

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 30 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload firmware proyek akhir, membaca Serial Monitor, dan memperbaiki kesalahan rakitan |
| Penilaian | Hasil praktek: Serial Monitor menampilkan suhu, kelembapan, dan `kode respons: 200` dari rakitan sendiri |
| Potongan proyek akhir yang dibedah | `smp/firmware/smp_room_monitor/smp_room_monitor.ino` dipakai **utuh, tanpa diubah**, kecuali zona "BOLEH DIUBAH": `WIFI_SSID`, `WIFI_PASSWORD` (dan `DHT_PIN` di Challenge Hard). `DEVICE_ID` **sudah diisi tutor**. Hari ini siswa belajar membaca pesan Serial Monitor dari firmware ini. |

## Alat & bahan (per kelompok/individu)

- Rakitan dari P10: ESP32 + DHT22 (+ ke 3V3, out ke **D4**, − ke GND). LED di D2 boleh dilepas.
- Kabel USB data + laptop dengan **Arduino IDE** + board ESP32 + library DHT (sudah dipasang di P10; ESP32 dapat listrik dari laptop)
- **Folder proyek per kelompok** `smp-XX` (dari zip `smp-XX.zip`, `smp-01` … `smp-13`), berisi `firmware/`, `index.html`, `style.css`, `api.js`, `icon.webp`, `README.md`. Device ID & nama anggota **sudah diisi**. Daftar Device ID: `docs/HANDOUT_SISWA.md`.
- Folder **Kode** pertemuan ini (Drive): folder `P11_1_BacaDHT22` (cek sensor tanpa WiFi), folder `P11_2_TesWiFi` (tes WiFi saja)
- Multimeter (tutor), 3–4 kabel jumper cadangan

## Persiapan tutor sebelum kelas

1. Buat zip per Device ID dengan `py tools/kelompok.py paket`. **Extract `smp-XX.zip` di laptop kelompok itu** (mis. di Desktop), buka `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` di Arduino IDE, lalu **Verify (✓)** sekali. Jangan pakai salinan umum `smp/` atau `Kode/proyek-akhir`: Device ID-nya generik dan data kelompok bisa saling menimpa.
2. Tulis nama & password WiFi kelas di papan (huruf besar-kecil persis). Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz). Siapkan 1 hotspot HP cadangan.
3. Cek backend online: buka `https://api-ekskulcoding.inspiralabs.id/health`.
4. Siapkan 2–3 kabel jumper yang **sengaja putus** (potong di dalam isolasi) untuk demo multimeter.
5. Panduan lengkap: `kurikulum/smp/p11/Panduan_Pengajar_P11_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Cek Tugas 3 (2–3 siswa tunjukkan gambarnya), tentukan peran (Slide 1) |
| 5–8 | Pembuka materi | Cover + pertanyaan pemantik + agenda |
| 8–14 | Materi | Slide 2–4: firmware, folder proyek, zona hijau & merah |
| 14–28 | Praktek bersama | Slide 5: isi WiFi, upload firmware proyek |
| 28–31 | Materi + forum | Slide 6: membaca cerita ESP32 + Forum Diskusi Topik 1 |
| 31–36 | 🟢 Challenge Easy | Tiup & Catat (wajib) |
| 36–44 | Materi | Slide 7–9: dokter kabel, multimeter (demo), program cadangan. Ganti peran. |
| 44–46 | Forum | Forum Diskusi Topik 2 |
| 46–52 | 🟡 Challenge Medium | Kartu Gejala |
| 52–60 | 🔴 Challenge Hard | Pindah Kaki Sensor (untuk kelompok yang sudah 200) |
| 60–62 | Peta proyek | Slide 10 + ingatkan bawa foto |
| 62–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Dari Program Latihan ke Program Proyek → Folder Proyekmu → Zona Hijau & Zona Merah → Praktek Bareng: Upload Firmware Proyek → Membaca "Cerita" ESP32 → 💬 Forum Diskusi → 🟢 Easy → Tips Engineer: Jadi Dokter Kabel → Alat Dokter: Multimeter → Alat Dokter: Program Cadangan → 💬 Forum Diskusi → 🟡 Medium → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah WiFi. Kalau banyak yang macet di WiFi, pindahkan semua ke hotspot cadangan, lalu jadikan Challenge Hard opsional. Yang wajib hari ini: `kode respons: 200`.

---

## Slide

### Slide 1 — Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Perakit** | Mengurus kabel & sensor |
| **Pengecek** | Membacakan checklist |
| **Operator** | Mengetik WiFi, Upload, Serial Monitor |
| **Pencatat** | Mencatat angka & hasil challenge |

- Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Slide 2 — Dari Program Latihan ke Program Proyek 🚀
- P10: program latihan → ESP32 "ngobrol" dengan **laptop**.
- Hari ini: **firmware** = program resmi alat kita.
- Firmware membaca sensor **dan** mengirim angkanya ke **internet**.
- Kita **tidak menulis** kodenya. Kita memasang dan merawatnya.

### Slide 3 — Folder Proyekmu 📁
Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Dipakai |
|---|---|
| `firmware/` (program ESP32) | **Hari ini** |
| `index.html`, `style.css` (website) | P12 |

- **smp-XX = Device ID** = nama alat kalian di internet.

> Catatan tutor: Device ID seperti plat nomor motor: sudah diisi tutor, tidak boleh diganti, dan tidak boleh sama dengan kelompok lain. File lain: `api.js` (jangan diubah), `icon.webp`, `README.md`. Kalau folder belum ada: klik kanan `smp-XX.zip` → **Extract All**.

### Slide 4 — Zona Hijau & Zona Merah 🚦
Buka `firmware/smp_room_monitor/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> Catatan tutor: Zona hijau seperti kolom isian formulir. Zona merah berisi `SERVER_URL` dan `API_KEY` (alamat & kunci server); kalau diubah, data ditolak. Hanya ganti tulisan `ISI_DI_SINI`; tanda kutip `" "` jangan terhapus.

### Slide 5 — Praktek Bareng: Upload Firmware Proyek 🔧
1. Cek rakitan: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka folder `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

> Catatan tutor: Nama WiFi harus persis: huruf besar-kecil dan spasi dihitung. Pengecek membandingkan huruf demi huruf dengan papan. Kalau Serial Monitor kosong, tekan tombol **EN** (reset) di board.

### Slide 6 — Membaca "Cerita" ESP32 📖
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
- Titik-titik = sedang mencari WiFi.
- **IP** = alamat ESP32 di WiFi (seperti nomor rumah).
- **200** = data **diterima** server, seperti centang dua di WhatsApp.

> Catatan tutor: Baris suhu dan kode respons berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal `{ }`, abaikan saja.

### Slide 7 — Tips Engineer: Jadi Dokter Kabel 🩺
Dokter tidak menebak. Baca **gejala**, lalu cek **satu per satu**: listrik → kabel → pin → program.

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik. Gejala lain yang ditangani tutor:
> - Titik-titik tak berhenti padahal password benar → WiFi 5 GHz, pindah ke hotspot 2.4 GHz.
> - `kode respons: 401` → zona merah (`API_KEY`) berubah. Extract ulang zip asli, isi WiFi lagi.
> - Suhu kadang muncul kadang gagal → kabel goyang / jumper hampir putus. Ganti jumper, tes multimeter.
> - Tulisan acak `⸮⸮⸮` → pilih **115200 baud** di Serial Monitor.

### Slide 8 — Alat Dokter: Multimeter 🔬
Mode **bunyi** (minta tutor menyetel):
- Tempel ujung merah & hitam ke **dua ujung** satu kabel jumper.
- **Bunyi "tiit"** = kabel bagus.
- **Diam** = kabel putus di dalam. Buang!

> Catatan tutor: Tes kabel dilakukan dengan USB dicabut. Mode **DC volt (20V)** cukup didemokan tutor: merah di 3V3, hitam di GND → harus ±3,3V.

### Slide 9 — Alat Dokter: Program Cadangan 🧰
Program kecil untuk mencari masalah (tinggal upload):
- `P11_1_BacaDHT22.ino` → cek **sensor** saja.
- `P11_2_TesWiFi.ino` → cek **WiFi** saja.
- Masalah ketemu → **upload lagi firmware proyek**.

> Catatan tutor: `P11_2_TesWiFi.ino` juga perlu diisi nama & password WiFi. Cara pakai sama seperti P10: double-click file `.ino`-nya, Upload. Setelah masalah ketemu, buka lagi `smp_room_monitor.ino` dan Upload.

### Slide 10 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  ← HARI INI
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Firmware proyek **tetap tersimpan** di ESP32. Minggu depan cukup colok ke power bank (tetap butuh listrik!). Minta siswa membawa **foto kelompok** (atau foto diri untuk peserta individu) untuk dashboard di P12.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Upload Firmware Proyek:** Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?
- **Topik 2 — Dokter Kabel:** Serial Monitor macet di titik-titik WiFi. Mungkinkah kabel sensor penyebabnya? Bagaimana membuktikannya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Tiup & Catat" (wajib)
1. Catat suhu & kelembapan **sebelum** ditiup.
2. **Tiup** sensor 5 detik, catat lagi.
3. Mana yang naik lebih banyak? Kode responsnya berapa?

### 🟡 Medium — "Kartu Gejala" 🩺
Pasangkan gejala dengan penyebabnya:

| Gejala | Penyebab |
|---|---|
| 1. Titik-titik WiFi tidak berhenti | ? |
| 2. `Gagal baca sensor DHT22…` | ? |
| 3. `kode respons: -1` | ? |

- **A.** Kabel sensor longgar
- **B.** WiFi tersambung, tapi internetnya mati
- **C.** Password WiFi salah

Bonus: **cabut USB**, lepas kabel out, colok USB. Gejala nomor berapa yang muncul? Pasang lagi.

### 🔴 Hard — "Pindah Kaki Sensor" 🔀
1. **Cabut USB**. Pindahkan kabel **out** dari **D4** ke **D27** (sisi kiri, di bawah D26).
2. Colok USB. Apa pesan di Serial Monitor?
3. Ubah **satu angka**: `#define DHT_PIN 4` → `27`. Upload. Suhu muncul lagi?
4. **Kembalikan** kabel ke D4 dan angka ke `4` (rakitan standar proyek), lalu upload lagi.

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
A. Kabel sensor DHT22 longgar B. Nama atau password WiFi salah C. LED terbalik D. Suhu ruangan terlalu panas

**3. Serial Monitor menampilkan `Gagal baca sensor DHT22, coba lagi 4 detik lagi...`. Yang paling tepat dicek pertama adalah…**
A. Password WiFi B. Kabel DHT22: out di D4, kabel tidak longgar, + / − tidak tertukar C. Warna dashboard D. Mengganti `SERVER_URL`

**4. Kabel out DHT22 dipindah ke D27. Agar sensor terbaca lagi, yang harus diubah adalah…**
A. `#define DHT_PIN 4` menjadi `#define DHT_PIN 27` B. `DEVICE_ID` C. `API_KEY` D. Tidak perlu mengubah apa pun

**5. Multimeter mode bunyi ditempel ke dua ujung kabel jumper dan TIDAK berbunyi. Artinya…**
A. Kabel itu bagus B. Kabel itu putus di dalam, harus diganti C. ESP32 rusak D. Sensor sedang membaca suhu

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** kelembapan biasanya naik jauh lebih banyak saat ditiup (napas itu lembap); suhu hanya naik sedikit. Kode respons yang benar: `200`.

**Medium:** 1 → C, 2 → A, 3 → B. Bonus: muncul gejala nomor 2.

**Hard:**
- Langkah 2: muncul `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` karena program masih menunggu data di pin 4, sedangkan kabel sudah di pin 27.
- Langkah 3: setelah `DHT_PIN 27` dan upload, angka muncul lagi.
- Pelajaran: program hanya "mendengarkan" pin yang ditulis di `DHT_PIN`. Kabel dan angka harus selalu sama.
- Kenapa D27: aman untuk sensor (bukan pin khusus saat menyala seperti 0/2/5/12/15, dan bukan pin input-saja 34–39). Kalau siswa memilih pin sendiri, arahkan ke D25, D26, D27, D32, atau D33.
- Pastikan semua kembali ke **D4 / `DHT_PIN 4`** dan sudah di-upload ulang sebelum pulang.

### Kunci Post-Test
1. B 2. B 3. B 4. A 5. B

### Pembahasan singkat
- No. 1: `DEVICE_ID` sudah diisi tutor dan tidak boleh diganti. Zona merah tidak pernah diubah.
- No. 2: firmware menunggu WiFi dulu sebelum membaca sensor, jadi masalah kabel sensor tidak membuat titik-titik macet.
- No. 4: satu angka di zona hijau, sama seperti latihan "Pindah Lampu" di P10.
