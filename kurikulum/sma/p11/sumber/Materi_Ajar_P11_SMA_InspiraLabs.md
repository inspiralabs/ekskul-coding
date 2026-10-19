# SMA — Pertemuan 11: Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 31 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload firmware proyek ke rakitan dan memastikan data sensor tampil real-time di dashboard (proyek akhir tahap 1: monitoring) |
| Penilaian | Progres proyek akhir: Serial `kode respons: 200` + angka suhu di dashboard kelompok berubah saat sensor digenggam |
| Kaitan dengan proyek akhir | Firmware `firmware/sma_room_monitor/sma_room_monitor.ino` di **zip proyek dari tutor** (mis. `sma-04.zip`). Program sudah **lengkap**: Device ID kelompok sudah terisi. Siswa hanya mengisi `WIFI_SSID` dan `WIFI_PASSWORD` (serta `DHT_PIN`/`RELAY_PIN` kalau kabelnya beda dari D4/D18). Dashboard `index.html` di zip yang sama sudah tersambung ke Device ID kelompok. |

## Alat & bahan (per kelompok)

- Rakitan lengkap P10 (DHT22 di D13, relay di D14, kipas di NO) yang sudah lolos 2 program tes
- Laptop dengan **Arduino IDE 2** + board **ESP32** + library **DHT sensor library** (sudah dipasang di P10; lihat `kurikulum/panduan-instalasi/`)
- **Zip proyek dari tutor** (`sma-01.zip` … `sma-06.zip`, satu per kelompok/peserta)
- WiFi kelas **2.4 GHz** + hotspot cadangan
- Power bank / charger HP 5V + kabel USB data (untuk Challenge Hard)
- `docs/HANDOUT_SISWA.md` (nama & password WiFi kelas, daftar Device ID)

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p11/Panduan_Pengajar_P11_SMA.md`.

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`.
2. Jalankan `py tools/kelompok.py paket`, bagikan `dist/paket/sma-XX.zip` ke **masing-masing** kelompok/peserta (jangan tertukar: Device ID sudah tertanam di dalamnya).
3. Isi `docs/HANDOUT_SISWA.md` (WiFi kelas). Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz).
4. Di tiap laptop, buka `firmware/sma_room_monitor/sma_room_monitor.ino` dari salah satu zip → **Verify (✓)** sekali. Kalau muncul error `DHT.h` atau board ESP32 tidak ada, pasang dulu lewat Panduan Instalasi.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | "Rakitan kalian sudah lolos tes. Hari ini kita online-kan." |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–15 | Materi | Perjalanan data, isi zip proyek, aturan "BOLEH/JANGAN UBAH" |
| 15–25 | Praktek | Isi WiFi → Upload → Serial Monitor |
| 25–30 | 🟢 Challenge Easy | Online! |
| 30–36 | Materi | Membaca Serial Monitor firmware + kode respons |
| 36–43 | 🟡 Challenge Medium | Uji Sensor Hidup |
| 43–48 | Materi | Alat mandiri: daya, WiFi, troubleshooting berlapis |
| 48–57 | 🔴 Challenge Hard | Lepas dari Laptop |
| 57–60 | Peta proyek | Slide peta proyek akhir |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Dari Alat Offline ke Alat Online → Perjalanan Data: Sensor sampai Dashboard → Isi Zip Proyek Kelompok → Yang Boleh & Jangan Diubah → Upload Firmware Proyek → 💬 Forum Diskusi → 🟢 Easy → Membaca Serial Monitor Firmware → Tips Engineer: Kode Respons Server → 💬 Forum Diskusi → 🟡 Medium → Alat Mandiri: Daya & WiFi → Troubleshooting Berlapis → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Dari Alat Offline ke Alat Online ☁️
- P10: rakitan lolos tes, tapi datanya hanya terlihat di **laptop sendiri** (Serial Monitor).
- Hari ini: upload **firmware proyek jadi** → ESP32 melapor ke server **tiap ±4 detik** → suhu tampil di **dashboard** yang bisa dibuka dari mana saja.
- Tidak ada kode yang ditulis. Tugas kalian: **isi WiFi, upload, buktikan datanya sampai**.

### Slide 2 — Perjalanan Data: Sensor sampai Dashboard 🔄
```
[DHT22] → [ESP32] ──WiFi sekolah──► [Server InspiraLabs] ◄── [Dashboard kelompok]
           tiap ±4 detik kirim:                              ambil data terbaru
           Device ID + suhu + kelembapan                     lalu tampilkan angka
```
- ESP32 dan dashboard **tidak bicara langsung**. Keduanya lewat server (jawaban forum P9).
- **Device ID** (mis. `sma-04`) = "alamat rumah" data kelompok kalian di server. Sudah diisi tutor di firmware **dan** dashboard, jadi pasti cocok.
- **Kenapa tiap ±4 detik?** DHT22 hanya boleh dibaca tiap ≥2 detik, dan server melayani semua kelompok sekaligus.

### Slide 3 — Isi Zip Proyek Kelompok 📦
| File / folder | Untuk apa | Hari ini |
|---|---|---|
| `firmware/` | Program ESP32 (sketch Arduino IDE) | **Dipakai**: isi WiFi, upload |
| `index.html` | Dashboard kelompok | **Dibuka** di browser |
| `style.css` | Tampilan dashboard (warna di `:root`) | Belum (P13) |
| `api.js` | Penghubung ke server | **Jangan diubah** |
| `icon.webp`, `README.md` | Ikon & petunjuk | Dibaca saja |
- Ekstrak zip ke folder yang mudah dicari (mis. `Documents/sma-04`). **Jangan** dibuka langsung dari dalam zip.

### Slide 4 — Yang Boleh & Jangan Diubah 🚦
```cpp
// potongan — bagian atas firmware/sma_room_monitor/sma_room_monitor.ino
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // <- isi password WiFi kelas

#define DHT_PIN 13     // ubah hanya kalau kabel DHT22 tidak di D13
#define RELAY_PIN 14   // ubah hanya kalau kabel relay IN tidak di D14
```
- Yang kalian isi: **2 baris WiFi**. `DHT_PIN`/`RELAY_PIN` hanya kalau kabel kalian beda.
- Bagian `JANGAN UBAH` (alamat server, API key, logika kirim) = "kabel" ke server. Diubah → data kelompok kalian (dan kelompok lain) bisa kacau.

### Slide 5 — Upload Firmware Proyek ⬆️
1. Di folder kelompok, buka `firmware` → `sma_room_monitor` → **double-click** `sma_room_monitor.ino` (terbuka di **Arduino IDE**).
2. Isi `WIFI_SSID` dan `WIFI_PASSWORD` (huruf besar/kecil & spasi harus **persis**).
3. Pilih port + board **ESP32 Dev Module**, klik **Upload (→)** (otomatis tersimpan), lalu buka **Serial Monitor** (115200 baud).
4. Buka `index.html` (double-click). Tunggu beberapa detik: angka suhu & kelembapan muncul.

> Catatan tutor: Rakitan tidak diubah sama sekali dari P10. Kalau ada kelompok yang memindah kabel di P10 (Challenge Easy), pastikan sudah dikembalikan ke D14, atau `RELAY_PIN` disesuaikan. Peran berdua: **Operator** (laptop, isi WiFi, upload) & **Pengamat** (baca Serial Monitor, cocokkan dengan tabel); tukar di Topik 2.

### Slide 6 — Membaca Serial Monitor Firmware 📟
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
{ ... "fanOn":false ... }        <- balasan server (berisi status kipas)
```
| Baris | Artinya |
|---|---|
| `Menghubungkan ke WiFi.....` | ESP32 sedang mencoba masuk WiFi |
| `Terhubung! IP ...` | WiFi **beres** |
| `Suhu: ... Kelembapan: ...` | Sensor **beres** |
| `kode respons: 200` | Server **menerima** data. Cek dashboard! |
| `Gagal baca sensor DHT22 ...` | WiFi beres, tapi sensor tidak menjawab → cek kabel DHT22 |

### Slide 7 — Tips Engineer: Kode Respons Server 🔢
| Kode | Arti | Di proyek kita biasanya karena… |
|---|---|---|
| **200** | OK | Sukses 🎉 |
| **400** | Bad Request | Data rusak (bagian JANGAN UBAH tersentuh?) |
| **401** | Unauthorized | `API_KEY` terubah. Kembalikan dari zip asli |
| **404** | Not Found | `SERVER_URL` salah ketik |
| **5xx** | Server Error | Masalah di server, lapor tutor |
| **−1** | Tidak sampai | Ada WiFi tapi tidak ada internet / host salah |
- Satu angka langsung menunjuk **di mana** masalahnya. Baca angkanya dulu sebelum panik.

### Slide 8 — Alat Mandiri: Daya & WiFi 🔋
- Laptop hanya dibutuhkan untuk **upload**. Setelah itu ESP32 cukup diberi listrik **5V USB**: charger HP atau power bank.
- Program **tersimpan** di ESP32. Dicabut lalu dicolok lagi → otomatis jalan, masuk WiFi, kirim data.
- WiFi harus **2.4 GHz**. Hotspot HP: aktifkan opsi "2.4 GHz"/"kompatibilitas".
- Pindah tempat dengan WiFi lain? Nama & password WiFi harus diganti di firmware lalu **upload ulang**.

### Slide 9 — Troubleshooting Berlapis 🧅
Cek dari lapisan paling bawah, **jangan loncat**:

| Lapisan | Bukti beres | Kalau gagal, cek |
|---|---|---|
| 1. Daya | LED power ESP32 menyala | Kabel USB, charger |
| 2. Program | Serial Monitor menampilkan tulisan | Upload ulang, baud 115200 |
| 3. WiFi | `Terhubung! IP ...` | SSID/password, 2.4 GHz, jarak router |
| 4. Sensor | `Suhu: ...` | Kabel DHT22 (D13, 3V3, GND) |
| 5. Server | `kode respons: 200` | Tabel kode respons |
| 6. Dashboard | Angka berubah di `index.html` | Buka `index.html` dari folder kelompok sendiri, refresh |

### Slide 10 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ← HARI INI
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```
> Catatan tutor: Ingatkan: simpan folder kelompok baik-baik (jangan sampai tertukar dengan kelompok lain). Folder yang sama dipakai di P12 dan diserahkan ke tutor di P13.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Upload Firmware Proyek:** Kenapa Device ID sudah diisi tutor, dan apa jadinya kalau dua kelompok memakai Device ID yang sama?
- **Topik 2 — Membaca Serial Monitor:** Serial menulis `Terhubung!` tapi lalu `kode respons: -1`. Lapisan mana yang sudah beres, lapisan mana yang bermasalah?
- **Topik 3 — Alat Mandiri:** Kalau alat dibawa ke rumah, apa saja yang harus diubah supaya tetap online?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Online!"
1. Isi `WIFI_SSID` dan `WIFI_PASSWORD`, upload firmware proyek.
2. Buktikan di Serial Monitor: `Terhubung!` dan `kode respons: 200`.
3. Buka `index.html` kelompok: angka suhu & kelembapan muncul. Screenshot Serial + dashboard berdampingan.

### 🟡 Medium — "Uji Sensor Hidup" 🌡️
1. **Genggam** sensor 20 detik. Catat: berapa detik sampai angka suhu di dashboard mulai naik?
2. **Tiup** pelan sensor. Mana yang lebih cepat berubah: suhu atau kelembapan?
3. **Cabut USB**, lepas kabel kuning (out DHT22), colok USB lagi. Apa yang tertulis di Serial? Apa yang terjadi pada angka di dashboard? Cabut USB, pasang kembali kabelnya, buktikan data normal lagi.

### 🔴 Hard — "Lepas dari Laptop" 🔋
1. Cabut ESP32 dari laptop, colok ke **power bank/charger HP**. Buktikan dashboard tetap berubah saat sensor digenggam (buka dashboard di laptop/HP).
2. **Cabut USB**, pindahkan kabel kuning DHT22 dari **D13** ke **D27**. Ubah **satu angka** `#define DHT_PIN 13` → `27`, upload, buktikan data tetap masuk. Kembalikan ke D13 dan angka 13 setelah selesai.
3. Jawab: kenapa langkah 2 butuh laptop lagi, padahal langkah 1 tidak?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Firmware jadi, rakitan siap: saatnya data suhu kelas tampil online.
- **Pertanyaan pemantik:** Saat membuka website lalu muncul tulisan "404 Not Found", sebenarnya siapa yang sedang berbicara dengan siapa?
- **Konteks:** Setiap kali browser atau alat meminta sesuatu, server selalu menjawab dengan sebuah angka. Hari ini alat kita ikut "mengobrol" dengan server.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 2 (slide *Tips Engineer: Kode Respons Server*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #7 (Curiosity & Secrets — Rasa Penasaran)**

# "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik." 🔢

Isi slide:
- 🧭 Kode respons = **GPS debugging**. Satu angka langsung menunjuk **di mana** masalahnya:
  - **2xx** → beres. **4xx** → salah di request. **5xx** → salah server. **Negatif** → koneksi tidak sampai.
- 🧅 Troubleshooting **berlapis**: daya → program → WiFi → sensor → server → dashboard. Jangan loncat.
- 📟 Serial Monitor = "kotak hitam" alatmu. Selalu buka saat ada masalah.
- 📶 ESP32 cuma bisa WiFi **2.4 GHz**. WiFi 5 GHz = titik-titik selamanya.

🎙️ **Kalimat hook (pembuka rekaman):** "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik."

📌 **Teks di layar:**
- Kode respons = GPS debugging 🧭
- 4xx = cek request-mu
- 5xx = server · negatif = nggak nyampe
- Cek berlapis, jangan loncat 🧅
- ESP32 = WiFi 2.4 GHz saja 📶

🎬 **Penutup:** "Simpan tabel ini. Kamu bakal butuh tiap kali bikin alat yang online. Follow buat part selanjutnya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik."
> - [4–12 detik] "Setiap kali alatmu kirim data ke server, server jawab pakai angka. Angka ini kayak GPS: langsung nunjuk di mana masalahnya."
> - [12–22 detik] "Dua ratusan: beres. Empat ratusan: request-nya yang salah. 401 kunci API-mu salah, 404 alamatnya salah ketik."
> - [22–30 detik] "Lima ratusan: salah server, bukan kamu. Dan kalau angkanya negatif, request-mu bahkan nggak sampai: cek internetnya."
> - [30–42 detik] "Trik kedua: cek berlapis. Daya, program, WiFi, sensor, server, baru dashboard. Jangan langsung bongkar kabel kalau ternyata cuma salah password WiFi."
> - [42–52 detik] "Bonus: ESP32 cuma bisa WiFi 2.4 giga. Hotspot 5 giga? Dia bakal muter titik-titik selamanya."
> - [52–60 detik] "Simpan tabel ini. Kamu bakal butuh tiap kali bikin alat yang online. Follow buat part selanjutnya!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #7 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Rahasia engineer IoT: baca angka ini dulu sebelum panik |
| Durasi | ±60 detik |
| Pembicara | Tutor (screen record Serial Monitor + rakitan) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Serial Monitor: `kode respons: 401`, siswa garuk kepala | "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik." | Jangan panik, baca ANGKANYA 🔢 |
| 4–12 | Tulisan besar 2xx / 4xx / 5xx / negatif | "Setiap kali alatmu kirim data ke server, server jawab pakai angka. Angka ini kayak GPS: langsung nunjuk di mana masalahnya." | Kode respons = GPS debugging 🧭 |
| 12–22 | 200 hijau, 401 & 404 kuning | "Dua ratusan: beres. Empat ratusan: request-nya yang salah. 401 kunci API-mu salah, 404 alamatnya salah ketik." | 4xx = cek request-mu |
| 22–30 | 500 merah, −1 abu-abu | "Lima ratusan: salah server, bukan kamu. Dan kalau angkanya negatif, request-mu bahkan nggak sampai: cek internetnya." | 5xx = server · negatif = nggak nyampe |
| 30–42 | Animasi 6 lapisan bertumpuk | "Trik kedua: cek berlapis. Daya, program, WiFi, sensor, server, baru dashboard. Jangan langsung bongkar kabel kalau ternyata cuma salah password WiFi." | Cek berlapis, jangan loncat 🧅 |
| 42–52 | Serial: `Menghubungkan ke WiFi.........` tanpa henti | "Bonus: ESP32 cuma bisa WiFi 2.4 giga. Hotspot 5 giga? Dia bakal muter titik-titik selamanya." | ESP32 = WiFi 2.4 GHz saja 📶 |
| 52–60 | Tutor ke kamera, dashboard angka berubah | "Simpan tabel ini. Kamu bakal butuh tiap kali bikin alat yang online. Follow buat part selanjutnya!" | Save tabelnya 💾 Follow 👉 |

#### Caption

Alat IoT kamu gagal kirim data? Baca kode respons-nya dulu 🔢

✅ 2xx → beres
🔑 401 → API key salah
🔍 404 → URL salah
🔥 5xx → masalah server
📡 negatif → request nggak nyampe (cek internet)
📶 Bonus: ESP32 cuma bisa WiFi 2.4 GHz

#InspiraLabs #IoT #ESP32 #Debugging #EkskulCoding #Elektronika #SmartHome

#### Yang sengaja tidak dibocorkan
- Isi firmware dan alamat server proyek.
- Dashboard kelompok dan alur kontrol kipas.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di firmware proyek dari tutor, baris yang WAJIB kalian isi sendiri adalah…**
A. `SERVER_URL` dan `API_KEY` B. `DEVICE_ID` C. `WIFI_SSID` dan `WIFI_PASSWORD` D. Isi fungsi `loop()`

**2. Serial Monitor terus menampilkan `Menghubungkan ke WiFi.........` tanpa berhenti. Penyebab paling mungkin adalah…**
A. Kabel DHT22 longgar B. Nama/password WiFi salah atau WiFi-nya 5 GHz C. Kipas terpasang di NC D. API key salah

**3. Serial menampilkan `Kirim data -> kode respons: 200`. Artinya…**
A. Suhu ruangan 200 derajat B. Server menerima data, dashboard seharusnya ikut berubah C. WiFi terputus D. Sensor gagal dibaca

**4. WiFi sudah `Terhubung!`, tapi Serial terus menulis `Gagal baca sensor DHT22`. Yang paling perlu dicek adalah…**
A. Password WiFi B. Kabel DHT22: out ke D13, + ke 3V3, − ke GND C. File `api.js` D. Kabel kipas di terminal NO

**5. Setelah firmware ter-upload, ESP32 dicabut dari laptop lalu dicolok ke power bank. Apa yang terjadi?**
A. Program hilang, harus upload ulang B. ESP32 hanya bisa jalan kalau tersambung laptop C. Program tetap tersimpan: ESP32 menyala, masuk WiFi, dan kirim data lagi D. Data hanya tampil di Serial Monitor

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** bukti = Serial `kode respons: 200` + dashboard kelompok menampilkan angka.

**Medium:**
1. Dashboard mulai berubah ±4–10 detik (firmware kirim tiap 4 detik + dashboard mengambil data berkala; suhu DHT22 sendiri naik pelan).
2. **Kelembapan** berubah jauh lebih cepat saat ditiup (uap napas).
3. Serial: `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` berulang. Dashboard **berhenti berubah** (tetap menampilkan angka terakhir, karena ESP32 tidak mengirim data baru). Bahas: dashboard "Online" berarti **server** bisa dihubungi, belum tentu sensornya sehat.

**Hard:**
1. Dashboard tetap berubah → alat sudah **mandiri**.
2. Data tetap masuk dari D27.
3. Program tersimpan di flash ESP32 dan jalan sendiri saat diberi listrik. Tapi **mengubah** program (angka pin) berarti membuat program baru → harus di-upload lewat laptop.

### Catatan tutor
- Kalau ada kelompok mendapat **401/404**: hampir pasti bagian `JANGAN UBAH` tersentuh. Ganti file `.ino` dengan salinan dari zip asli, isi WiFi lagi.
- Kalau ada dua kelompok yang angka dashboard-nya "saling menimpa": cek zip tertukar (Device ID sama).
- Relay & kipas belum dibahas hari ini, tapi relay **sudah mengikuti server**: status awal tiap Device ID di server = mode **Otomatis, ambang 30°C**. Jadi kalau kelas di atas 30°C (atau sensor digenggam di Medium), kipas **boleh menyala sendiri**: itu normal, bukan rusak. Supaya tidak membingungkan, set tiap dashboard ke **Manual + OFF** (pakai PIN) sebelum kelas, atau jelaskan singkat "ini bocoran P12".
- Kipas menyala terus padahal suhu < 30°C / dashboard menunjukkan kipas OFF → kemungkinan modul relay **active-HIGH** → dibahas di P12 (ubah satu kata `RELAY_ACTIVE_LOW`).

### Kunci Post-Test
1. C 2. B 3. B 4. B 5. C

### Pembahasan singkat
- No. 1: Device ID sudah diisi tutor; `SERVER_URL` & `API_KEY` = bagian JANGAN UBAH.
- No. 2: ESP32 hanya mendukung WiFi 2.4 GHz, dan SSID/password peka huruf besar-kecil.
- No. 4: lapisan WiFi beres, lapisan sensor yang gagal (troubleshooting berlapis).
