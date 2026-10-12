# P12 SMA — Kontrol Kipas dari Dashboard: Manual & Otomatis

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMA | nomor slide".
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

**P12 SMA**

# Kontrol Kipas dari Dashboard: Manual & Otomatis

Satu klik di website, kipas di meja ikut bergerak.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kalau kamu menyalakan lampu pintar dari luar kota, bagaimana perintah dari HP-mu bisa sampai ke lampu yang ada di balik router rumah?

Server di internet tidak bisa "mengetuk pintu" alat di balik router. Hari ini kita lihat cara alat kita tetap bisa menerima perintah.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Kontrol Manual**: Perjalanan perintah kipas, jeda ±4 detik, PIN kelompok.
- **02 Mode Otomatis**: Manual vs Otomatis, slider ambang suhu.
- **03 Fail-Safe**: Perilaku kipas saat ada yang putus, relay active-HIGH, troubleshooting.

---

### Kontrol Dua Arah
- P11: data **naik**: sensor → ESP32 → server → dashboard.
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Semua fitur **sudah jadi**. Tugas kalian: **menguji** apakah rakitan benar-benar menurut, dan **membuktikan** perilakunya dengan mata, stopwatch, dan multimeter.

```wiring
Judul: Jalur perintah turun: ESP32 → relay → kipas
Komponen: ESP32 DevKit V1, breadboard, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D18 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: kabel biru D18 → IN ("LOW = kipas ON") ; terminal NO ("fail-safe")
```

---

### Perjalanan Perintah Kipas
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

---

### Kenapa Sampai ±4 Detik?
- ESP32 melapor **tiap ±4 detik**. Perintah dari dashboard baru "terbawa" pada laporan **berikutnya**.
- Jeda tombol → kipas: **0 sampai ±4 detik** (plus waktu internet). Normal, bukan rusak.
- ESP32 ada **di balik router** sekolah. Server di internet **tidak bisa** menghubunginya langsung. Yang bisa: alat yang **menghubungi** server.
- Banyak smart device sungguhan memakai pola "alat yang bertanya/terhubung ke server" seperti ini.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: lampu pintar di balik router tidak "didatangi" server; lampunya yang terus terhubung/bertanya ke server. Bandingkan dengan tebakan siswa tadi.

---

### PIN Kelompok: Publik Hanya Melihat
- Dashboard nanti tayang **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhu.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok 4 digit** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat. PIN salah → "PIN salah", kipas tidak berubah.
- **Jangan** tulis PIN di `index.html`, foto, atau slide presentasi. PIN = kunci rumah.

> 🗣️ SPEAKER NOTES: Bagikan PIN ke masing-masing kelompok secara pribadi (kertas/DM), jangan dibacakan di depan kelas.

---

### Forum Diskusi Live Coding

**Kenapa kipas tidak langsung berubah saat tombol diklik, dan kenapa itu bukan kerusakan?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kontrol Manual. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Saklar dari Dashboard" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Buka `index.html` kelompok, mode **Manual**. Klik tombol kipas besar, masukkan **PIN kelompok**.
2. Pakai stopwatch: ukur waktu dari klik sampai relay **klik**. Ulangi 5 kali (ON dan OFF), tulis rata-ratanya.
3. Jelaskan: kenapa hasilnya tidak selalu sama?

Simpan hasil sebagai `P12_NamaSiswa_C1` (tabel 5 pengukuran)

---

### Mode Manual vs Otomatis
| Mode | Siapa yang memutuskan kipas | Cara pakai |
|---|---|---|
| **Manual** | **Kalian**, lewat tombol kipas besar | Klik tombol kipas: ON ↔ OFF |
| **Otomatis** | **Server**, membandingkan suhu terbaru dengan ambang | Klik **Otomatis**, atur slider |
- Mode Otomatis: kipas menyala kalau suhu **di atas** ambang, mati kalau di bawah.
- Klik tombol kipas besar saat Otomatis = **ambil alih** ke Manual.

---

### Slider "Nyala Otomatis di Atas N°C"
- Slider **20–40°C**. Geser lalu **lepas**: nilai dikirim ke server (minta PIN kalau belum).
- Tips: atur ambang = **suhu ruangan + 1°C**, supaya bisa diuji dengan **genggaman tangan**.
- Ide yang sama dengan **Termostat Tangan** (P10), bedanya sekarang ambang diatur dari **website**, tanpa upload ulang.

---

### Forum Diskusi Live Coding

**Kalau ambang diatur 20°C di kelas yang suhunya 28°C, apa yang terjadi? Kalau 40°C?**

> 🗣️ SPEAKER NOTES: Topik 2 — Mode Otomatis. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Uji Otomatis dengan Tangan" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Klik **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor. Catat suhu di dashboard saat kipas mulai berputar, dan berapa detik sejak digenggam.
3. Lepas genggaman, tunggu kipas mati sendiri. Catat suhunya.
4. Geser slider ke **40°C**. Apa yang terjadi pada kipas? Kenapa?

Simpan hasil sebagai `P12_NamaSiswa_C2` (catatan suhu & waktu)

---

### Fail-Safe: Kalau Ada yang Putus
| Kejadian | Kipas | Kenapa |
|---|---|---|
| ESP32 dicabut / mati | **Mati** | Relay tidak aktif → COM–NO terputus (kipas di **NO**) |
| ESP32 baru menyala | **Mati** dulu | Firmware mematikan relay saat start, lalu ikut balasan server |
| WiFi/internet putus | **Tetap** di status terakhir | Tidak ada balasan baru, relay tidak diubah |
| Sensor DHT22 lepas | **Tetap** di status terakhir | Data tidak terkirim, balasan baru tidak datang |
- Kipas di **NO** = aman saat listrik ESP32 hilang. Saat **jaringan** putus, kipas bisa **terus menyala**.

---

### Satu Kata untuk Relay Active-HIGH
```cpp
// potongan — firmware/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul kita **active-LOW** (dibuktikan di P9 & P10) → biarkan `true`.
- Tanda modul **active-HIGH**: dashboard bilang kipas **mati**, tapi kipas **berputar** (dan sebaliknya).
- Perbaikannya **satu kata**: `true` → `false`, lalu upload ulang. Kabel tidak diubah.

---

### Troubleshooting Kontrol Kipas
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Klik tombol, tidak ada apa-apa > 10 detik | Serial: masih `kode respons: 200`? Lapisan WiFi/sensor (P11) |
| Relay klik, kipas diam | Sisi beban: COM, NO, kipas − ke GND (P10) |
| Kipas **terbalik** dari dashboard | Kipas di NC? Kalau sudah di NO → `RELAY_ACTIVE_LOW` |
| Otomatis, kipas tidak mau menyala | Ambang terlalu tinggi; genggam lebih lama |
| Kipas menyala-mati cepat di Otomatis | Suhu tepat di ambang. Geser ambang 1°C |

---

### Forum Diskusi Live Coding

**Saat WiFi putus, kipas bisa terus menyala. Untuk alat apa hal ini berbahaya?**

> 🗣️ SPEAKER NOTES: Topik 3 — Fail-Safe. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Arahkan ke contoh pemanas, pompa air, kompor listrik.

---

### Challenge 🔴 Hard — "Uji Fail-Safe" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Kipas ON dari dashboard, lalu **cabut USB** ESP32. Apa yang terjadi? Colok lagi: berapa detik sampai kipas kembali menyala?
2. Saat kipas ON, **matikan WiFi/hotspot** 30 detik. Klik OFF di dashboard (HP data seluler): kipas menurut? Nyalakan WiFi lagi, amati.
3. Ubah **satu kata** `RELAY_ACTIVE_LOW true` → `false`, upload. Bandingkan dashboard vs kipas, ukur pin IN. **Kembalikan ke `true`**, upload ulang.
4. Tulis tabel hasil + 1 kalimat: kapan alat kita **aman**, kapan **tidak**?

Simpan hasil sebagai `P12_NamaSiswa_C3` (tabel hasil)

---

### Peta Proyek Akhir
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ✅
[P12] Kontrol kipas dari dashboard: manual & mode otomatis    ← HARI INI
[P13] Rapikan rakitan + kustom dashboard + showcase
```

> 🗣️ SPEAKER NOTES: Tugas ringan untuk P13: siapkan foto kelompok (landscape, ukuran wajar) dan ide warna tema. Bawa kotak kecil/kardus untuk casing kalau ada.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Rapikan, Kustom, Serahkan: Showcase Smart Room Monitor**

Bawa foto kelompok dan kotak/kardus kecil untuk casing.
