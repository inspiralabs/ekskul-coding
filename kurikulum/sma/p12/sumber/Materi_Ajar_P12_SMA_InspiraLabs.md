# SMA — Pertemuan 12: Kontrol Kipas dari Dashboard: Manual & Otomatis

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 7 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengontrol relay/kipas dari dashboard (manual & mode otomatis) dan menguji perilaku rakitan secara fisik (proyek akhir tahap 2: kontrol dua arah) |
| Penilaian | Progres proyek akhir: kipas mengikuti tombol dashboard (≤ ±4 detik) dan menyala sendiri di mode Otomatis saat sensor digenggam |
| Kaitan dengan proyek akhir | Fitur kontrol kipas **sudah jadi** di folder kelompok (mis. `sma-04`): tombol kipas besar, tombol **Manual/Otomatis**, slider **"Nyala otomatis di atas N°C"** (20–40) di `index.html`, dan `setRelay()` + `#define RELAY_ACTIVE_LOW true` di `firmware/sma_room_monitor.ino`. Tidak ada kode yang ditulis; satu-satunya kemungkinan edit = **satu kata** `RELAY_ACTIVE_LOW` kalau modul relay ternyata active-HIGH. |

## Alat & bahan (per kelompok)

- Rakitan lengkap (DHT22 di D4, relay di D18, kipas DC 5V di NO) dengan firmware proyek P11 yang sudah `kode respons: 200`
- Laptop + **folder kelompok** dari zip tutor (mis. `sma-04`) dan HP (opsional, untuk membuka dashboard)
- **PIN kelompok** 4 digit dari tutor (lihat `docs/HANDOUT_SISWA.md`)
- Stopwatch HP, multimeter (1 per kelas)

## Persiapan tutor sebelum kelas

1. Pastikan setiap kelompok sudah lolos P11 (data masuk dashboard). Yang belum: selesaikan dulu di 10 menit pertama.
2. Siapkan PIN kelompok (`docs/HANDOUT_SISWA.md`). Bagikan **hanya** ke kelompok yang bersangkutan.
3. Uji 1 rakitan: klik tombol kipas di dashboard → kipas berubah dalam ±4 detik; mode Otomatis + genggam sensor → kipas menyala sendiri.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo alat tutor: klik dashboard → kipas berputar |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik |
| 10–17 | Materi | Perjalanan perintah kipas, kenapa ±4 detik, PIN kelompok |
| 17–25 | 🟢 Challenge Easy | Saklar dari Dashboard |
| 25–31 | Materi | Mode Manual vs Otomatis, slider ambang |
| 31–41 | 🟡 Challenge Medium | Uji Otomatis dengan Tangan |
| 41–47 | Materi | Fail-safe, `RELAY_ACTIVE_LOW`, troubleshooting kipas |
| 47–57 | 🔴 Challenge Hard | Uji Fail-Safe |
| 57–60 | Peta proyek | Slide peta proyek akhir |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Kontrol Dua Arah → Perjalanan Perintah Kipas → Kenapa Sampai ±4 Detik? → PIN Kelompok: Publik Hanya Melihat → 💬 Forum Diskusi → 🟢 Easy → Mode Manual vs Otomatis → Slider "Nyala Otomatis di Atas N°C" → 💬 Forum Diskusi → 🟡 Medium → Fail-Safe: Kalau Ada yang Putus → Satu Kata untuk Relay Active-HIGH → Troubleshooting Kontrol Kipas → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Kontrol Dua Arah 🔄
- P11: data **naik**: sensor → ESP32 → server → dashboard. ✅
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Semua fitur **sudah jadi**. Tugas kalian: **menguji** apakah rakitan benar-benar menurut, dan **membuktikan** perilakunya dengan mata, stopwatch, dan multimeter.

### Slide 2 — Perjalanan Perintah Kipas 🛤️
```
[Tombol dashboard] ──► [Server] simpan: "kipas sma-04 = ON"
                              ▲
                              │ tiap ±4 detik ESP32 kirim data suhu,
                              │ server MEMBALAS dengan status kipas terbaru
                              ▼
                         [ESP32] → relay IN = LOW → relay klik → kipas berputar
```
- Server **tidak** mengirim perintah langsung ke ESP32. ESP32 yang **bertanya** setiap kali melapor suhu.
- Balasan server berisi `"fanOn":true` atau `"fanOn":false`. Relay mengikuti balasan itu.

### Slide 3 — Kenapa Sampai ±4 Detik? ⏳
- ESP32 melapor **tiap ±4 detik**. Perintah dari dashboard baru "terbawa" pada laporan **berikutnya**.
- Jadi jeda tombol → kipas: **0 sampai ±4 detik** (plus waktu internet). Normal, bukan rusak.
- Kenapa tidak langsung? ESP32 ada di WiFi sekolah, **di balik router**. Server di internet **tidak bisa** menghubungi alat di balik router secara langsung. Yang bisa: alat yang **menghubungi** server.
- Banyak smart device sungguhan memakai pola "alat yang bertanya/terhubung ke server" seperti ini.

### Slide 4 — PIN Kelompok: Publik Hanya Melihat 🔐
- Nanti dashboard kalian tayang **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhu.
- Tapi **mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok 4 digit** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat. PIN salah → muncul "PIN salah", kipas tidak berubah.
- **Jangan** tulis PIN di `index.html`, foto, atau slide presentasi. PIN = kunci rumah.

### Slide 5 — Mode Manual vs Otomatis 🤖
| Mode | Siapa yang memutuskan kipas | Cara pakai |
|---|---|---|
| **Manual** | **Kalian**, lewat tombol kipas besar | Klik tombol kipas: ON ↔ OFF |
| **Otomatis** | **Server**, membandingkan suhu terbaru dengan ambang | Klik **Otomatis**, atur slider |
- Di mode Otomatis, kipas menyala kalau suhu **di atas** ambang, mati kalau di bawah.
- Klik tombol kipas besar saat Otomatis = **ambil alih** ke Manual.

### Slide 6 — Slider "Nyala Otomatis di Atas N°C" 🎚️
- Slider **20–40°C**. Geser lalu **lepas**: nilai dikirim ke server (minta PIN kalau belum).
- Tips: atur ambang = **suhu ruangan + 1°C**, supaya bisa diuji dengan **genggaman tangan**.
- Ide yang sama dengan **Termostat Tangan** (Challenge Medium P10), bedanya sekarang ambang diatur dari **website**, tanpa upload ulang.

### Slide 7 — Fail-Safe: Kalau Ada yang Putus 🧯
| Kejadian | Yang terjadi pada kipas | Kenapa |
|---|---|---|
| ESP32 dicabut / mati | **Mati** | Relay tidak aktif → COM–NO terputus (kipas di **NO**) |
| ESP32 baru menyala | **Mati** dulu | Firmware mematikan relay saat start, lalu ikut balasan server |
| WiFi/internet putus | **Tetap** di status terakhir | ESP32 tidak dapat balasan baru, relay tidak diubah |
| Sensor DHT22 lepas | **Tetap** di status terakhir | Data tidak terkirim, balasan baru tidak datang |
- Kesimpulan: kipas di **NO** membuat alat aman saat listrik ESP32 hilang. Tapi saat **jaringan** putus, kipas bisa **terus menyala**. Di produk sungguhan (pemanas, pompa) ini perlu pengaman tambahan.

### Slide 8 — Satu Kata untuk Relay Active-HIGH 🔁
```cpp
// potongan — firmware/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul kita **active-LOW** (sudah dibuktikan di P9 & P10) → biarkan `true`.
- Tanda modul **active-HIGH**: dashboard bilang kipas **mati**, tapi kipas **berputar** (dan sebaliknya).
- Perbaikannya **satu kata**: `true` → `false`, lalu upload ulang. Kabel tidak perlu diubah.

### Slide 9 — Troubleshooting Kontrol Kipas 🧰
| Gejala | Cek |
|---|---|
| Klik tombol, muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Klik tombol, tidak terjadi apa-apa > 10 detik | Serial Monitor: masih `kode respons: 200`? Lapisan WiFi/sensor (P11) |
| Relay klik, kipas diam | Sisi beban: COM, NO, kipas − ke GND (P10) |
| Kipas **terbalik** dari dashboard | Kipas di NC? Kalau sudah di NO → modul active-HIGH (`RELAY_ACTIVE_LOW`) |
| Mode Otomatis, kipas tidak mau menyala | Ambang terlalu tinggi; genggam lebih lama; cek suhu di dashboard benar-benar di atas ambang |
| Kipas menyala-mati cepat di mode Otomatis | Suhu tepat di sekitar ambang. Naikkan/turunkan ambang 1°C |

### Slide 10 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ✅
[P12] Kontrol kipas dari dashboard: manual & mode otomatis    ← HARI INI
[P13] Rapikan rakitan + kustom dashboard + showcase
```
> Catatan tutor: Tugas rumah ringan untuk P13: siapkan **foto kelompok** (landscape, ukuran wajar) dan ide **warna tema**. Bawa kotak kecil/kardus untuk casing kalau ada.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Kontrol Manual:** Kenapa kipas tidak langsung berubah saat tombol diklik, dan kenapa itu bukan kerusakan?
- **Topik 2 — Mode Otomatis:** Kalau ambang diatur 20°C di kelas yang suhunya 28°C, apa yang terjadi? Kalau 40°C?
- **Topik 3 — Fail-Safe:** Saat WiFi putus, kipas bisa terus menyala. Untuk alat apa hal ini berbahaya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Saklar dari Dashboard"
1. Buka `index.html` kelompok, mode **Manual**. Klik tombol kipas besar, masukkan **PIN kelompok** saat diminta.
2. Pakai stopwatch: ukur waktu dari klik sampai relay **klik**. Ulangi 5 kali (ON dan OFF), tulis rata-ratanya.
3. Jelaskan dengan slide *Kenapa Sampai ±4 Detik?*: kenapa hasilnya tidak selalu sama?

### 🟡 Medium — "Uji Otomatis dengan Tangan" 🖐️
1. Klik **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor. Catat: suhu di dashboard saat kipas mulai berputar, dan berapa detik sejak digenggam.
3. Lepas genggaman, tunggu kipas mati sendiri. Catat suhunya.
4. Geser slider ke **40°C**. Apa yang terjadi pada kipas? Kenapa?

### 🔴 Hard — "Uji Fail-Safe" 🧯
1. Nyalakan kipas dari dashboard (Manual ON). **Cabut USB** ESP32. Apa yang terjadi pada kipas? Colok lagi: berapa detik sampai kipas kembali menyala?
2. Saat kipas ON, **matikan hotspot/WiFi** 30 detik. Apa yang terjadi pada kipas? Klik OFF di dashboard (pakai HP data seluler): apakah kipas menurut? Nyalakan WiFi lagi, amati.
3. Eksperimen satu kata: ubah `#define RELAY_ACTIVE_LOW true` → `false`, upload. Bandingkan status kipas di dashboard dengan kipas sungguhan, ukur tegangan pin IN. **Kembalikan ke `true`** dan upload ulang.
4. Tulis tabel hasil 3 percobaan + 1 kalimat: kapan alat kita **aman**, kapan **tidak**?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Satu klik di website, kipas di meja ikut bergerak.
- **Pertanyaan pemantik:** Kalau kamu menyalakan lampu pintar dari luar kota, bagaimana perintah dari HP-mu bisa sampai ke lampu yang ada di balik router rumah?
- **Konteks:** Server di internet tidak bisa "mengetuk pintu" alat di balik router. Hari ini kita lihat cara alat kita tetap bisa menerima perintah.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Kenapa Sampai ±4 Detik?*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #6 (Curiosity & Secrets — Rasa Penasaran)**

# "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." ⏳

Isi slide:
- 🏠 Alat di rumah/sekolah ada **di balik router**. Server internet **tidak bisa** menghubunginya langsung.
- 🙋 Solusinya: **alat yang bertanya** ke server secara berkala: "ada perintah buat aku?"
- ⏳ Alat kami bertanya tiap ±4 detik → jeda tombol ke kipas **0–4 detik**. Normal!
- 🔐 Dashboard publik: semua orang bisa **lihat**, hanya pemegang **PIN** yang bisa **mengubah**.
- 🧯 Fail-safe: kipas di terminal **NO** → alat mati, kipas ikut mati.

🎙️ **Kalimat hook (pembuka rekaman):** "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."

📌 **Teks di layar:**
- Klik… 1… 2… 3… kipas jalan ⏳
- Alat di balik router 🏠
- Server nggak bisa "ngetuk pintu" 🚪
- Alat yang BERTANYA tiap 4 detik 🙋
- Lihat = publik · Ubah = PIN 🔐

🎬 **Penutup:** "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–5 detik] "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."
> - [5–15 detik] "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung. Router nggak bakal ngizinin."
> - [15–28 detik] "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik."
> - [28–38 detik] "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu. Banyak smart device pakai pola alat-yang-terhubung-ke-server kayak gini."
> - [38–50 detik] "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pegang jangan."
> - [50–58 detik] "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!"

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #6 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Kenapa kipas pintarku telat 4 detik? |
| Durasi | ±58 detik |
| Pembicara | Tutor (HP di tangan, rakitan + kipas di meja) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–5 | Jari klik tombol di HP, hitungan 1-2-3, kipas berputar | "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." | Klik… 1… 2… 3… ⏳ |
| 5–15 | Animasi router sebagai pintu tertutup | "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung. Router nggak bakal ngizinin." | Server nggak bisa "ngetuk pintu" 🚪 |
| 15–28 | Animasi ESP32 mengirim pesan berkala, server membalas | "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik." | Alat yang BERTANYA 🙋 |
| 28–38 | Stopwatch di layar 0–4 detik | "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu. Banyak smart device pakai pola alat-yang-terhubung-ke-server kayak gini." | Jeda 0–4 detik = normal ✅ |
| 38–50 | Dashboard publik, pop-up PIN | "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pegang jangan." | Lihat = publik · Ubah = PIN 🔐 |
| 50–58 | Siswa SMA dengan rakitannya (pastikan izin) | "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat showcase-nya!" | Follow 👉 |

#### Caption

Kipas pintar telat beberapa detik? Itu bukan rusak ⏳

🏠 Alat ada di balik router → server nggak bisa menghubungi langsung
🙋 Alat yang bertanya ke server tiap ±4 detik
✅ Jeda 0–4 detik = sesuai desain
🔐 Dashboard publik: lihat boleh, ubah pakai PIN
🧯 Kipas di NO → alat mati, kipas ikut mati

#InspiraLabs #IoT #ESP32 #SmartHome #EkskulCoding #STEM #ProyekSiswa

#### Yang sengaja tidak dibocorkan
- Alamat server dan isi firmware.
- PIN kelompok dan detail dashboard.

---

## Post-Test (5 soal, pilihan ganda)

**1. Kamu klik "kipas ON" di dashboard. Bagaimana perintah itu sampai ke ESP32?**
A. Server langsung mengirim perintah ke IP ESP32 di WiFi sekolah B. ESP32 melapor data tiap ±4 detik dan membaca status kipas dari balasan server C. Dashboard mengirim sinyal Bluetooth ke ESP32 D. Relay membaca website sendiri

**2. Jeda dari klik tombol sampai kipas berputar paling lama sekitar…**
A. 0,01 detik B. ±4 detik (ditambah waktu internet) C. 1 menit D. Sampai ESP32 di-restart

**3. Mode Otomatis aktif, slider "Nyala otomatis di atas 29°C", suhu terbaca 31°C. Apa yang terjadi?**
A. Kipas menyala B. Kipas mati C. Dashboard meminta upload ulang D. Relay rusak

**4. Kipas terpasang di terminal NO. ESP32 tiba-tiba dicabut saat kipas menyala. Apa yang terjadi pada kipas?**
A. Tetap menyala selamanya B. Menyala lebih kencang C. Mati, karena relay tidak aktif dan COM–NO terputus D. Berputar terbalik

**5. Kipas di NO. Dashboard menunjukkan kipas MATI, tetapi kipas sungguhan BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
A. Mengganti `API_KEY` B. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false` lalu upload ulang C. Mengganti `DEVICE_ID` D. Menghapus `api.js`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** jeda bervariasi **±0,5–5 detik**, rata-rata ±2–3 detik. Tidak selalu sama karena bergantung pada **kapan** klik terjadi relatif terhadap laporan ESP32 berikutnya (tiap ±4 detik), plus waktu internet.

**Medium:**
- Kipas menyala setelah suhu yang **diterima server** melewati ambang. Ingat ada 2 jeda: suhu sensor naik pelan, lalu laporan tiap ±4 detik.
- Ambang 40°C → kipas **mati** (suhu ruangan + genggaman tidak akan mencapai 40°C). Ini cara cepat "mematikan" mode otomatis tanpa pindah ke Manual.
- Kalau kipas menyala-mati bergantian di dekat ambang: bahas lagi jeda 0,5°C (histeresis) di Termostat Tangan P10. Server di proyek ini cukup membandingkan suhu dengan ambang, jadi atur ambang agak jauh dari suhu ruangan.

**Hard:**
1. Cabut USB → kipas **langsung mati** (fail-safe NO). Colok lagi → kipas mati dulu (firmware memanggil `setRelay(false)` saat start), lalu menyala lagi setelah WiFi tersambung + laporan pertama (±5–15 detik).
2. WiFi mati → kipas **tetap menyala** (status terakhir). Perintah OFF dari HP tersimpan di server tapi **tidak sampai**; begitu WiFi kembali, laporan berikutnya membawa `fanOn:false` → kipas mati. Pelajaran: fail-safe NO hanya melindungi dari **hilang listrik**, bukan dari **hilang jaringan**.
3. `RELAY_ACTIVE_LOW false` pada modul active-LOW → semua **terbalik**: dashboard OFF, kipas berputar; IN ±0 V saat dashboard OFF. Kembalikan ke `true`.

### Catatan tutor
- Firmware masih mendaftarkan route `/fan` (perintah langsung dalam jaringan lokal), tapi server online tidak bisa menjangkau IP lokal ESP32. Yang benar-benar bekerja di kelas: relay mengikuti `fanOn` di balasan laporan tiap ±4 detik. Jangan ajarkan bahwa server "mendorong" perintah langsung ke ESP32.
- PIN: kalau kelompok lupa PIN, browser yang pernah benar menyimpan PIN; browser lain akan bertanya lagi. Jangan bacakan PIN di depan kelas.

### Kunci Post-Test
1. B 2. B 3. A 4. C 5. B

### Pembahasan singkat
- No. 1: alat di balik router tidak bisa dihubungi langsung dari internet; alatnya yang bertanya.
- No. 4: NO = fail-safe terhadap hilangnya listrik ESP32.
- No. 5: gejala terbalik padahal kipas di NO = modul active-HIGH → satu kata `RELAY_ACTIVE_LOW`.
