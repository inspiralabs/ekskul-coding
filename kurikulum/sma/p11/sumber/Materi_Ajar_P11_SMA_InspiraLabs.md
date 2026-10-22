# SMA — Pertemuan 11: Rakit & Online: Smart Room Monitor Tampil di Dashboard

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 31 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu merakit DHT22 + relay + kipas, meng-upload firmware proyek, dan memastikan data sensor tampil real-time di dashboard kelompok (proyek akhir tahap 1: monitoring) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). **Tidak ada PR.** |
| Kaitan dengan proyek akhir | Rakitan hari ini = rakitan **final** proyek akhir. Firmware `firmware/sma_room_monitor/sma_room_monitor.ino` ada di **zip proyek dari tutor** (mis. `sma-04.zip`): program sudah **lengkap** dan Device ID kelompok sudah terisi. Siswa hanya mengisi `WIFI_SSID` dan `WIFI_PASSWORD`, lalu mengecek `DHT_PIN 13` / `RELAY_PIN 14`. Dashboard `index.html` di zip yang sama sudah tersambung ke Device ID kelompok. **Siswa tidak menulis kode.** |

## Alat & bahan (per kelompok/individu)

- ESP32 DevKit V1 + kabel USB **data**, breadboard
- Modul DHT22 3-pin, modul relay 1-channel 5V, kipas mini **DC 5V**
- Jumper merah/hitam/kuning/biru/oranye (male-male & male-female), obeng kecil untuk terminal relay
- Laptop dengan **Arduino IDE 2** + board **ESP32** + library **DHT sensor library** (dari P10; lihat `kurikulum/panduan-instalasi/`)
- **Zip proyek dari tutor** (`sma-01.zip` … `sma-06.zip`, satu per kelompok/peserta)
- WiFi kelas **2,4 GHz tanpa halaman login** + hotspot cadangan
- Power bank / charger HP 5V (untuk Challenge Hard)
- Folder **Kode** pertemuan ini (Drive), hanya untuk cek cepat: `P11_1_TesRelay`, `P11_2_TesDHT22`

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p11/Panduan_Pengajar_P11_SMA.md`.

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`.
2. Jalankan `py tools/kelompok.py paket`, bagikan `dist/paket/sma-XX.zip` ke **masing-masing** kelompok/peserta (jangan tertukar: Device ID sudah tertanam di dalamnya).
3. Set semua dashboard ke **Manual + OFF** (pakai PIN kelompok). Status awal server = **Otomatis, ambang 30°C**, jadi tanpa ini kipas bisa menyala sendiri dan membingungkan.
4. Di tiap laptop, buka `firmware/sma_room_monitor/sma_room_monitor.ino` dari salah satu zip → **Verify (✓)** sekali.
5. Jalankan `SCRIPT_P11_SMA.gs` supaya folder **Kode** dan Google Form post-test ada di Drive. Pasang link-nya di Linktree.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Bagikan kit & zip, peran, cara dapat poin |
| 5–8 | Pembuka materi | Cover + pertanyaan pemantik + agenda |
| 8–25 | Topik 1: Rakit lengkap | Kenalan 3 komponen, Peta Rakitan, urutan aman. Pengecek mencentang sebelum USB dicolok |
| 25–27 | Tanya Jawab | Topik 1 |
| 27–40 | Topik 2: Upload firmware | Isi zip, isi WiFi, upload, baca Serial Monitor. **Tukar peran** |
| 40–42 | Tanya Jawab | Topik 2 |
| 42–46 | 🟢 Challenge Easy | Online! |
| 46–52 | Topik 3: Dashboard online | Perjalanan data, dashboard kelompok, bocoran P12 |
| 52–54 | Tanya Jawab | Topik 3 |
| 54–58 | 🟡 Challenge Medium | Uji Sensor Hidup |
| 58–63 | 🔴 Challenge Hard | Lepas dari Laptop (untuk yang sudah lulus Easy) |
| 63–64 | Peta petualangan | Rakitan dikumpulkan utuh |
| 64–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Cara Dapat Poin → Kerja Berdua → Kenalan 3 Komponen → Peta Rakitan Lengkap → Urutan Merakit yang Aman → 💬 Tanya Jawab → Isi Zip Proyek Kelompok → Yang Kamu Isi Cuma Ini → Upload Firmware Proyek → Membaca Laporan ESP32 → Cek Cepat: Relay atau Sensor → 💬 Tanya Jawab → 🟢 Easy → Perjalanan Data → Dashboard Kelompok Online → 💬 Tanya Jawab → 🟡 Medium → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: kalau merakit molor, Challenge Hard dilewati. Yang wajib hari ini: rakitan sesuai Peta Rakitan **dan** angka suhu tampil di dashboard kelompok (syarat P12).

---

## Slide

### Kerja Berdua: Perakit & Pengecek 👥
| Peran | Topik 1 (rakit) | Topik 2–3 (upload & dashboard) |
|---|---|---|
| **Perakit** | Memasang kabel | Jadi **Operator**: isi WiFi, klik Upload |
| **Pengecek** | Membacakan Peta Rakitan, mencentang | Jadi **Pengamat**: baca Serial Monitor & dashboard |
- Tukar peran di Topik 2. Kerja sendiri? Minta teman sebelah jadi Pengecek **sebelum** USB dicolok.

### Cara Dapat Poin Hari Ini 🏅
| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |
- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

### Kenalan 3 Komponen Hari Ini 🧩
| Komponen | Perannya | Gampangnya |
|---|---|---|
| **DHT22** | Mengukur suhu & kelembapan | "Indera perasa" alat |
| **Relay** | Saklar yang dipencet oleh ESP32 | "Jari" yang menekan tombol kipas |
| **Kipas DC 5V** | Beban yang dinyalakan | Yang bikin ruangan adem |
- Otaknya tetap **ESP32**, yang sudah kalian program di P10.

### Peta Rakitan Lengkap 🗺️
| Dari (ESP32) | Ke | Warna kabel |
|---|---|---|
| 3V3 | DHT22 **+** | Merah |
| D13 (GPIO 13) | DHT22 **out** | Kuning |
| GND | DHT22 **−** | Hitam |
| VIN (5V) | jalur **+** → relay **VCC** dan relay **COM** | Merah / Oranye |
| GND | jalur **−** → relay **GND** dan kipas **−** | Hitam |
| D14 (GPIO 14) | relay **IN** | Biru |
| relay **NO** | kipas **+** | Oranye |
- **D12** (di antara D14 dan D13) dibiarkan **kosong**.
- Kipas di **NO** supaya kalau ESP32 mati, kipas ikut mati.

> Catatan tutor: DHT22 di 3V3 karena pin ESP32 hanya tahan 3,3V; relay di VIN karena relay butuh 5V. Cadangan diagram: screenshot simulasi Wokwi `p11/wokwi/P11_PetaRakitan/` (LED biru = pengganti kipas).

### Urutan Merakit yang Aman 🔌
1. **Cabut USB.** Memasang & memindah kabel selalu dalam keadaan **mati**.
2. Pasang ESP32 di breadboard: **VIN → jalur +**, **GND → jalur −**.
3. **DHT22**: 3 kabel (merah, kuning, hitam).
4. **Relay**: VCC, GND, IN (biru ke D14).
5. **Kipas**: jalur + → COM, NO → kipas +, kipas − → jalur −. Sekrup terminal kencang, tarik pelan: tidak lepas.
6. Pengecek **mencentang** Peta Rakitan satu per satu, baru colok USB. Bau/panas? **Cabut segera.**

> Catatan tutor: HANYA kipas DC 5V, tidak ada kabel PLN/stopkontak di meja. Jangan sambungkan kipas langsung ke pin GPIO.

### Isi Zip Proyek Kelompok 📦
| File / folder | Untuk apa | Hari ini |
|---|---|---|
| `firmware/` | Program ESP32 (buka di Arduino IDE) | **Dipakai**: isi WiFi, upload |
| `index.html` | Dashboard kelompok | **Dibuka** di browser |
| `style.css` | Warna & tampilan dashboard | Nanti di P13 |
| `api.js` | "Kabel" ke server | **Jangan diubah** |
- Zip sudah berisi **Device ID** kelompok kalian. Ekstrak dulu, **jangan** dibuka dari dalam zip.

### Yang Kamu Isi Cuma Ini ✏️
```cpp
// potongan — bagian atas firmware/sma_room_monitor/sma_room_monitor.ino
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // Di isi sesuai dengan nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // Di isi sesuai dengan password WiFi

#define DHT_PIN 13                           // ganti sesuai pemasangan kabel DHT22
#define RELAY_PIN 14                         // ganti sesuai pemasangan modul relay
```
- Isi **2 baris WiFi** (huruf besar/kecil & spasi harus **persis**). `DHT_PIN` & `RELAY_PIN` cukup **dicek**.
- Bagian `JANGAN UBAH` (alamat server, kunci API) sudah diurus tutor. ESP32 hanya bisa WiFi **2,4 GHz**.

### Upload Firmware Proyek ⬆️
1. Buka folder kelompok → `firmware` → `sma_room_monitor` → **double-click** `sma_room_monitor.ino`.
2. Isi `WIFI_SSID` dan `WIFI_PASSWORD` sesuai papan tulis.
3. **Select Board** → **ESP32 Dev Module** + port ESP32 → klik **Upload (→)**.
4. Buka **Serial Monitor** (`Ctrl+Shift+M` / Mac `⌘+Shift+M`) → **115200 baud**.
- Macet di `Connecting.....`? Tahan tombol **BOOT** sampai muncul `Writing at ...`.

### Membaca Laporan ESP32 📟
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
| Muncul | Artinya | Tindakan |
|---|---|---|
| Titik-titik `.....` terus | Belum masuk WiFi | Cek ejaan SSID/password, WiFi harus 2,4 GHz |
| `kode respons: 200` | Server **menerima** data | Buka dashboard! |
| `kode respons: 401` | Kunci server salah | Bagian JANGAN UBAH tersentuh → ambil file asli dari zip |
| `kode respons: -1` (angka minus) | Data tidak sampai server | WiFi ada, tapi internetnya tidak jalan |
| `Gagal baca sensor DHT22` | WiFi beres, sensor diam | Cek 3 kabel DHT22, terutama **out → D13** |

### Cek Cepat: Relay atau Sensor yang Bermasalah? 🔍
- Firmware jalan tapi ada bagian yang aneh? Upload **program tes jadi** dulu, tidak perlu diubah:
  - `P11_1_TesRelay.ino`: relay harus **klik** tiap 2 detik, kipas ikut berputar–berhenti.
  - `P11_2_TesDHT22.ino`: Serial menampilkan suhu & kelembapan tiap 2 detik.
- Tes lolos → rakitan beres. Upload lagi firmware proyek.

> Catatan tutor: hanya untuk kelompok yang bermasalah. Tes relay lolos tapi kipas diam saat firmware jalan = wajar, karena dashboard sudah di-set **Manual + OFF** (kontrol kipas dibahas P12).

### Perjalanan Data: Sensor sampai Dashboard 🔄
```
[DHT22] → [ESP32] ──WiFi──► [Server InspiraLabs] ◄── [Dashboard kelompok]
           tiap ±4 detik lapor:                       ambil data terbaru,
           Device ID + suhu + kelembapan              tampilkan di layar
```
- ESP32 dan dashboard **tidak bicara langsung**. Keduanya lewat **server**.
- **Device ID** (mis. `sma-04`) = "alamat rumah" data kelompokmu di server.
- Persis seperti ojol: HP driver lapor posisi ke server, aplikasi kamu mengambilnya dari server.

### Dashboard Kelompok Online 🌐
- Buka `index.html` di folder kelompok, atau dari HP: **`sma-0X.inspiralabs.id`** (X = nomor Device ID).
- Kartu suhu otomatis berwarna: **Dingin** di bawah 22°C, **Normal** sampai 29°C, **Panas** di atasnya. Di atas 32°C muncul **banner peringatan**.
- Titik **Online** = dashboard tersambung ke server (bukan tanda ESP32 hidup).
- Tombol **Kontrol Fan** sudah ada, tapi butuh **PIN kelompok**. Bocoran P12: kipasnya bakal kalian kendalikan dari HP!

### Peta Petualangan IoT 🗺️
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                     ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok   ← HARI INI
[P12] Kontrol kipas dari dashboard: manual & otomatis
[P13] Kustom dashboard + website online + Demo Day
```
> Catatan tutor: rakitan jangan dibongkar, dikumpulkan ke tutor dalam kotak. Folder kelompok yang sama dipakai lagi di P12 dan P13.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** Di aplikasi ojol, kamu bisa lihat motor driver bergerak di peta. Siapa yang terus-terusan "lapor", dan lapornya ke mana?
- **Topik 1 — Rakit Lengkap:** Kalau ESP32 tiba-tiba mati, kipasnya ikut mati atau tetap berputar? Kenapa kita sengaja pasang kipas di NO?
- **Topik 2 — Upload Firmware Proyek:** Serial Monitor cuma menulis titik-titik terus, tidak pernah muncul "Terhubung!". Sebutkan 2 kemungkinan penyebabnya.
- **Topik 3 — Dashboard Online:** Dashboard menulis "Online", tapi angka suhu tidak berubah sama sekali walau sensor digenggam lama. Bagian mana yang mungkin bermasalah?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Online!" (+5)
1. Isi `WIFI_SSID` dan `WIFI_PASSWORD`, upload firmware proyek.
2. Buktikan di Serial Monitor: `Terhubung!` dan `kode respons: 200`.
3. Buka `index.html` kelompok: angka suhu & kelembapan muncul.
4. Tunjukkan ke tutor (atau screenshot Serial + dashboard berdampingan).

### 🟡 Medium — "Uji Sensor Hidup" (+10) 🌡️
1. **Genggam** sensor DHT22 selama 20 detik. Catat: berapa detik sampai angka suhu di dashboard mulai naik?
2. **Tiup** pelan sensornya. Mana yang berubah lebih cepat: suhu atau kelembapan?
3. Jawab: kenapa angka di dashboard tidak langsung berubah saat sensor digenggam?
4. Tunjukkan catatanmu ke tutor.

### 🔴 Hard — "Lepas dari Laptop" (+15) 🔋
1. Cabut ESP32 dari laptop, colok ke **power bank** atau charger HP 5V.
2. Buka **`sma-0X.inspiralabs.id`** di **HP** kalian.
3. Genggam sensor: buktikan angka di HP tetap naik.
4. Jawab: kenapa alat tetap jalan padahal laptop sudah dicabut? Kalau alat ini dibawa ke rumah, apa yang harus diubah supaya tetap online?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Sensor, relay, dan kipas dirakit hari ini. Datanya online hari ini juga.
- **Pertanyaan pemantik:** Di aplikasi ojol, kamu bisa lihat motor driver bergerak di peta. Siapa yang terus-terusan "lapor", dan lapornya ke mana?
- **Konteks:** Alat yang kita rakit hari ini bekerja dengan cara yang sama persis.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di Topik 3 (slide *Perjalanan Data*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #12 (Actionable Lists — Daftar & Solusi)**

# "3 hal yang bikin alat IoT pertamamu langsung online, bukan titik-titik selamanya." 📶

Isi slide:
- 🔌 **Kabel USB data**, bukan kabel charger. Kabel charger cuma bawa listrik: ESP32 nyala, tapi laptop nggak bisa ngobrol sama dia.
- 📶 **WiFi 2,4 GHz**. ESP32 nggak kenal WiFi 5 GHz, dan nggak bisa login di WiFi yang minta halaman login.
- 🔢 **Baca angkanya**: `200` = data sampai server. `-1` = WiFi ada tapi internet nggak jalan.
- Bonus: cek kabel sebelum colok USB. Teman jadi "pengecek", kamu yang merakit.

🎙️ **Kalimat hook (pembuka rekaman):** "3 hal yang bikin alat IoT pertamamu langsung online, bukan titik-titik selamanya."

📌 **Teks di layar:**
- Kabel DATA, bukan kabel charger 🔌
- WiFi 2,4 GHz, tanpa halaman login 📶
- 200 = sampai · -1 = internet mati 🔢
- Cek kabel dulu, baru colok USB ✅

🎬 **Penutup:** "Simpan video ini sebelum bikin alat IoT pertamamu. Follow buat part selanjutnya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "3 hal yang bikin alat IoT pertamamu langsung online, bukan titik-titik selamanya."
> - [4–16 detik] "Satu: kabel USB. Banyak kabel cuma buat ngecas. ESP32-nya nyala, tapi laptop nggak bisa kirim program. Pakai kabel data."
> - [16–30 detik] "Dua: WiFi. ESP32 cuma kenal WiFi 2,4 giga. WiFi 5 giga atau WiFi yang minta login di browser? Dia bakal muter titik-titik selamanya."
> - [30–44 detik] "Tiga: baca angka di Serial Monitor. Dua ratus artinya data sudah sampai server. Minus satu artinya WiFi-nya ada, tapi internetnya nggak jalan."
> - [44–54 detik] "Bonus: sebelum colok USB, minta teman ngecek kabelmu satu per satu. Satu kabel nyasar bisa bikin alat nggak mau di-upload."
> - [54–60 detik] "Simpan video ini sebelum bikin alat IoT pertamamu. Follow buat part selanjutnya!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #12 — Actionable Lists (Daftar & Solusi) |
| Judul | 3 hal yang bikin alat IoT pertamamu langsung online |
| Durasi | ±60 detik |
| Pembicara | Tutor (rakitan di meja + screen record Serial Monitor & dashboard) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Serial Monitor: `Menghubungkan ke WiFi..........` tanpa henti | "3 hal yang bikin alat IoT pertamamu langsung online, bukan titik-titik selamanya." | 3 hal biar langsung ONLINE 📶 |
| 4–16 | Dua kabel USB berdampingan, satu diberi label "DATA" | "Satu: kabel USB. Banyak kabel cuma buat ngecas. ESP32-nya nyala, tapi laptop nggak bisa kirim program. Pakai kabel data." | Kabel DATA, bukan kabel charger 🔌 |
| 16–30 | Pengaturan hotspot HP, pilih 2,4 GHz | "Dua: WiFi. ESP32 cuma kenal WiFi 2,4 giga. WiFi 5 giga atau WiFi yang minta login di browser? Dia bakal muter titik-titik selamanya." | WiFi 2,4 GHz, tanpa login 📶 |
| 30–44 | Serial: `kode respons: 200`, lalu angka dashboard berubah | "Tiga: baca angka di Serial Monitor. Dua ratus artinya data sudah sampai server. Minus satu artinya WiFi-nya ada, tapi internetnya nggak jalan." | 200 = sampai · -1 = internet mati 🔢 |
| 44–54 | Dua siswa: satu merakit, satu menunjuk tabel kabel | "Bonus: sebelum colok USB, minta teman ngecek kabelmu satu per satu. Satu kabel nyasar bisa bikin alat nggak mau di-upload." | Cek kabel dulu ✅ |
| 54–60 | Tutor ke kamera, sensor digenggam, angka di HP naik | "Simpan video ini sebelum bikin alat IoT pertamamu. Follow buat part selanjutnya!" | Save dulu 💾 Follow 👉 |

#### Caption

Alat IoT pertamamu nggak mau online? Cek 3 hal ini dulu 📶

🔌 Kabel USB DATA, bukan kabel charger
📶 WiFi 2,4 GHz, tanpa halaman login
🔢 Baca kode di Serial Monitor: 200 = sampai, -1 = internet mati
✅ Bonus: minta teman cek kabelmu sebelum colok USB

#InspiraLabs #IoT #ESP32 #ArduinoIDE #EkskulCoding #Elektronika #SmartHome

#### Yang sengaja tidak dibocorkan
- Isi firmware, alamat server, dan kunci API proyek.
- Dashboard kelompok dan cara mengendalikan kipas (P12).

---

## Post-Test (5 soal, pilihan ganda)

**1. Di firmware proyek dari tutor, baris yang WAJIB kalian isi sendiri adalah…**
A. `SERVER_URL` dan `API_KEY` B. `DEVICE_ID` C. `WIFI_SSID` dan `WIFI_PASSWORD` D. Isi fungsi `loop()`

**2. Menurut Peta Rakitan, kabel "out" sensor DHT22 dicolok ke pin…**
A. D12 B. D13 C. D14 D. VIN

**3. Serial Monitor terus menampilkan `Menghubungkan ke WiFi.........` tanpa berhenti. Penyebab paling mungkin adalah…**
A. Kabel DHT22 longgar B. Nama/password WiFi salah ketik atau WiFi-nya 5 GHz C. Kipas terpasang terbalik D. Dashboard belum dibuka

**4. Serial menampilkan `Kirim data -> kode respons: 200`. Artinya…**
A. Suhu ruangan 200 derajat B. Server menerima data, dashboard kelompok seharusnya ikut berubah C. WiFi terputus D. Sensor gagal dibaca

**5. Setelah firmware ter-upload, ESP32 dicabut dari laptop lalu dicolok ke power bank. Apa yang terjadi?**
A. Program hilang, harus upload ulang B. ESP32 hanya bisa jalan kalau tersambung laptop C. Program tetap tersimpan: ESP32 menyala, masuk WiFi, dan kirim data lagi D. Data hanya tampil di Serial Monitor

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Tanya Jawab
- **Pemantik:** HP driver yang terus lapor posisi ke **server** aplikasi; aplikasi kita mengambil posisi itu dari server. Alat kita: ESP32 lapor suhu ke server tiap ±4 detik, dashboard mengambilnya dari server.
- **Topik 1:** kipas **ikut mati**. NO = normalnya terbuka; tanpa perintah dari ESP32 saklar terbuka, kipas tidak dapat listrik.
- **Topik 2:** nama/password WiFi salah ketik (huruf besar/kecil, spasi), WiFi 5 GHz, WiFi minta login lewat browser, atau terlalu jauh dari router.
- **Topik 3:** "Online" hanya berarti dashboard bisa menghubungi server. ESP32 tidak mengirim data baru (WiFi putus / `Gagal baca sensor`), atau dashboard yang dibuka milik Device ID lain.

### Kunci Challenge

**Easy:** bukti = Serial `kode respons: 200` + dashboard kelompok menampilkan angka.

**Medium:**
1. Dashboard mulai berubah **±4–10 detik** setelah digenggam (firmware kirim tiap 4 detik + dashboard mengambil data berkala; suhu DHT22 sendiri naik pelan).
2. **Kelembapan** berubah jauh lebih cepat saat ditiup (uap air dari napas).
3. Ada dua jeda: sensor butuh waktu ikut hangat, dan ESP32 hanya lapor tiap ±4 detik. Jawaban yang menyebut salah satunya dianggap benar.

**Hard:**
1. Angka di HP tetap naik → alat sudah **mandiri**.
2. Program tersimpan di memori ESP32 dan jalan sendiri begitu diberi listrik; laptop hanya dipakai untuk upload.
3. Dibawa ke rumah: ganti `WIFI_SSID` & `WIFI_PASSWORD` ke WiFi rumah (2,4 GHz), lalu **upload ulang** lewat laptop.

### Catatan tutor
- Kelompok mendapat **401**: hampir pasti bagian `JANGAN UBAH` tersentuh. Ganti file `.ino` dengan salinan dari zip asli, isi WiFi lagi.
- Angka dua kelompok "saling menimpa": zip tertukar (Device ID sama).
- Kipas menyala sendiri: dashboard masih mode **Otomatis** (status awal server, ambang 30°C) → set ke Manual + OFF pakai PIN. Kipas menyala terus walau dashboard OFF → kemungkinan relay active-HIGH, dibahas di P12 (`RELAY_ACTIVE_LOW`).

### Kunci Post-Test
1. C 2. B 3. B 4. B 5. C

### Pembahasan singkat
- No. 1: Device ID sudah diisi tutor; `SERVER_URL` & `API_KEY` = bagian JANGAN UBAH.
- No. 2: D13 = `DHT_PIN 13`. D12 sengaja dikosongkan karena bikin upload gagal; D14 untuk relay.
- No. 3: ESP32 hanya mendukung WiFi 2,4 GHz, dan SSID/password peka huruf besar-kecil.
- No. 5: program tersimpan di memori ESP32, cukup diberi listrik 5V.
