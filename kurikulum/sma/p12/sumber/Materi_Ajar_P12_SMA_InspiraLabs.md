# SMA — Pertemuan 12: Kontrol Kipas dari Dashboard: Manual & Otomatis

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 7 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengontrol kipas dari dashboard (mode Manual & Otomatis) dan menjelaskan secara sederhana bagaimana perintah dari HP sampai ke alat (proyek akhir tahap 2: kontrol dua arah) |
| Penilaian | Progres proyek akhir: kipas mengikuti tombol dashboard di HP, dan menyala sendiri di mode Otomatis saat sensor digenggam |
| Kaitan dengan proyek akhir | Fitur kontrol kipas **sudah jadi** di folder kelompok (mis. `sma-04`): tombol kipas besar, tombol **Manual/Otomatis**, slider **"Nyala otomatis di atas N°C"** (20–40) di `index.html`. Firmware `firmware/sma_room_monitor/sma_room_monitor.ino` dari P11 **tidak diubah**. Tinkering hanya 2 tempat: **satu kata** `RELAY_ACTIVE_LOW` (kalau kipas kebalikan) dan **satu angka** `SEND_INTERVAL_MS` (Challenge Hard, lalu dikembalikan). |

## Alat & bahan (per kelompok)

- Rakitan P11 (DHT22 di D13, relay IN di D14, kipas DC 5V di NO) dengan firmware proyek yang sudah `kode respons: 200`
- Laptop + **folder kelompok** dari zip tutor (mis. `sma-04`) + **HP** untuk membuka dashboard
- **PIN kelompok** dari tutor (kertas lipat, pribadi)
- Stopwatch HP

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p12/Panduan_Pengajar_P12_SMA.md`.

1. Pastikan setiap kelompok sudah lolos P11 (data masuk dashboard). Yang belum: selesaikan dulu di 10 menit pertama.
2. Siapkan PIN kelompok (dari `FAN_PINS` di `.env` server). Bagikan **hanya** ke kelompok yang bersangkutan.
3. Set semua dashboard ke mode **Manual + kipas mati**, ambang **30°C**, supaya kelas mulai dari kondisi yang sama.
4. Uji 1 rakitan: tombol di HP → kipas berubah dalam ±4 detik; Otomatis + genggam sensor → kipas menyala sendiri.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Demo alat tutor: tekan tombol di HP → kipas berputar. Kelas menghitung detiknya |
| 5–10 | Pembuka materi | Cover + pertanyaan pemantik + cara dapat poin |
| 10–18 | Materi | IoT dua arah, ESP32 yang bertanya, PIN kelompok |
| 18–25 | 🟢 Challenge Easy | Saklar dari HP |
| 25–32 | Materi | Manual vs Otomatis, slider ambang, cetak-cetek |
| 32–42 | 🟡 Challenge Medium | Kipas Otomatis |
| 42–47 | Materi | Kipas nggak nurut, satu kata `RELAY_ACTIVE_LOW` |
| 47–58 | 🔴 Challenge Hard | Kipas Lebih Gesit |
| 58–60 | Peta | Peta Petualangan IoT |
| 60–70 | Post-test | 5 soal pilihan ganda (Google Form) |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Cara Dapat Poin Hari Ini → IoT Dua Arah → Perintah Kipas: ESP32 yang Bertanya → PIN Kelompok → 💬 Tanya Jawab (+2) → 🟢 Easy → Manual vs Otomatis → Slider "Nyala Otomatis di Atas N°C" → 💬 Tanya Jawab (+2) → 🟡 Medium → Kipas Nggak Nurut? Cek Ini → Satu Kata untuk Kipas yang Kebalikan → 💬 Tanya Jawab (+2) → 🔴 Hard → Peta Petualangan IoT → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Cara Dapat Poin Hari Ini 🏅
| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |
- Post-test di Google Form di akhir kelas. **Tidak ada PR.**

> Catatan tutor: +2 untuk yang berani bertanya/menjawab, benar atau salah. Utamakan siswa yang belum dapat poin hari itu.

### Slide 2 — IoT Dua Arah 🔄
- P11: data **naik**: sensor → ESP32 → server → dashboard. ✅
- Hari ini: perintah **turun**: tombol dashboard → server → ESP32 → relay → kipas.
- Rakitan & firmware **tidak diubah**. Fitur kipas **sudah jadi**. Tugas kalian: **mencoba & membuktikan**.

> Catatan tutor: Peran berdua: **Pengendali** (HP + PIN) & **Pengamat** (stopwatch, amati relay & kipas); tukar tiap topik. Peserta individu: HP sebagai stopwatch di tangan kiri.

### Slide 3 — Perintah Kipas: ESP32 yang Bertanya 🙋
```
[Tombol di HP] ──► [Server] mencatat: "kipas sma-04 = NYALA"
                         ▲
                         │ tiap ±4 detik ESP32 lapor suhu,
                         │ server membalas: "fanOn": true
                         ▼
                    [ESP32] → relay klik → kipas berputar
```
- Server **tidak bisa** "mengetuk pintu" ESP32 yang ada di balik router sekolah.
- Jadi ESP32 yang **bertanya** tiap ±4 detik: *"Ada titipan buat aku?"* Mirip anak kos yang bolak-balik nanya ke ibu kos.
- Jeda tombol → kipas **0 sampai ±4 detik**. Normal, bukan rusak.

> Catatan tutor: Firmware juga punya jalur perintah langsung lewat jaringan lokal (route `/fan`), tapi server kita ada di internet sehingga tidak bisa menjangkaunya. Yang bekerja di kelas: relay mengikuti `fanOn` di balasan server. Tidak perlu dibahas ke siswa.

### Slide 4 — PIN Kelompok: Lihat Boleh, Pencet Jangan 🔐
- Dashboard kalian **publik** di `https://sma-04.inspiralabs.id`. Siapa pun bisa **melihat** suhunya.
- **Mengubah kipas** (tombol, mode, slider) butuh **PIN kelompok** dari tutor.
- PIN ditanya **sekali** di browser itu, lalu diingat.
- Jangan tulis PIN di website, foto, atau grup chat. PIN = kunci rumah.

### Slide 5 — Manual vs Otomatis 🤖
| Mode | Siapa yang memutuskan | Contoh di dunia nyata |
|---|---|---|
| **Manual** | **Kamu**, lewat tombol | Saklar lampu, remote TV |
| **Otomatis** | **Aturan**: kalau suhu > ambang → kipas nyala | AC, kulkas, rice cooker |
- Di mode Otomatis, server membandingkan suhu terbaru dengan **ambang**. Di atas ambang → nyala. Di bawah → mati.
- Tekan tombol kipas saat Otomatis = **ambil alih** jadi Manual.

### Slide 6 — Slider "Nyala Otomatis di Atas N°C" 🎚️
- Slider **20–40°C**. Geser, lalu **lepas**: ambang baru dikirim ke server.
- Tips uji cepat: ambang = **suhu ruangan + 1°C**, lalu **genggam** sensor.
- Awas **cetak-cetek**: kalau ambang terlalu dekat suhu ruangan, kipas bisa nyala-mati terus. Geser ambang sedikit menjauh.

### Slide 7 — Kipas Nggak Nurut? Cek Ini 🧰
| Gejala | Cek |
|---|---|
| Muncul "PIN salah" | PIN kelompok sendiri? Tanya tutor |
| Ditekan, > 10 detik tidak ada apa-apa | Serial Monitor: masih `kode respons: 200`? |
| Relay klik, kipas diam | Kabel COM, NO, dan kipas − ke GND |
| Kipas **kebalikan** dari dashboard | Kipas di NC? Kalau sudah di NO → Slide 8 |
| Otomatis, kipas tidak mau nyala | Ambang terlalu tinggi, genggam lebih lama |

### Slide 8 — Satu Kata untuk Kipas yang Kebalikan 🔁
```cpp
// potongan — firmware/sma_room_monitor/sma_room_monitor.ino
// Kalau relaymu ternyata active-HIGH, ganti RELAY_ACTIVE_LOW jadi false.
#define RELAY_ACTIVE_LOW true
```
- Modul relay kita biasanya **active-LOW** → biarkan `true`.
- Dashboard bilang **mati** tapi kipas **berputar** (dan sebaliknya)? Ganti **satu kata** `true` → `false`, upload ulang. Kabel tidak perlu diubah.

> Catatan tutor: Satu kalimat fail-safe saja: kipas dipasang di NO supaya kalau ESP32 mati/dicabut, kipas ikut mati.

### Slide 9 — Peta Petualangan IoT 🗺️
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                           ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok  ✅
[P12] Kontrol kipas dari dashboard: manual & otomatis                                  ← HARI INI
[P13] Kustom dashboard + website online + Demo Day
```
> Catatan tutor: Alat dikumpulkan ke tutor dalam keadaan utuh untuk Demo Day P13. Tidak ada yang perlu disiapkan siswa di rumah.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab, masing-masing **+2**.

- **Topik 1 — Kontrol Manual:** Kipas tidak langsung berubah saat tombol ditekan. Kenapa itu bukan kerusakan?
- **Topik 2 — Mode Otomatis:** Ambang 30°C, suhu kelas 29,9°C dan naik-turun sedikit. Apa yang terjadi pada kipas? Gimana cara mencegahnya?
- **Topik 3 — Kipas Nggak Nurut:** Dashboard bilang kipas MATI, tapi kipasnya berputar. Apa yang kamu cek dulu sebelum mengubah kode?

Poin challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15**.

---

## Challenge

### 🟢 Easy — "Saklar dari HP" (+5) 📱
1. Buka dashboard kelompok di **HP**: `https://sma-0X.inspiralabs.id`.
2. Pilih mode **Manual**, tekan tombol kipas besar, masukkan **PIN kelompok**.
3. Kipas di meja harus **menyala**. Tekan lagi: kipas **mati**.
4. Tunjukkan ke tutor: HP di tangan, kipas di meja ikut nurut.

### 🟡 Medium — "Kipas Otomatis" (+10) 🖐️
1. Pilih mode **Otomatis**. Geser slider ke **suhu ruangan + 1°C**, lepas.
2. **Genggam** sensor DHT22. Catat: berapa detik sampai kipas **menyala sendiri**?
3. Lepas genggaman. Catat: berapa detik sampai kipas **mati sendiri**?
4. Tunjukkan ke tutor: kipas bergerak tanpa tombol disentuh.

### 🔴 Hard — "Kipas Lebih Gesit" (+15) ⚡
1. Mode **Manual**. Ukur jeda tombol → kipas **3 kali** pakai stopwatch, hitung rata-ratanya.
2. Di firmware, ubah satu angka:
```cpp
const unsigned long SEND_INTERVAL_MS = 4000;  // ubah jadi 2000
```
3. Upload, lalu ukur lagi 3 kali. Bandingkan rata-ratanya.
4. Jawab: kenapa angka ini **tidak boleh** di bawah 2000?
5. Kembalikan ke **4000**, upload ulang.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Satu klik di HP, kipas di meja ikut bergerak.
- **Pertanyaan pemantik:** Kamu masih di sekolah, tapi pengin kipas kamar sudah nyala pas kamu pulang. Mungkin nggak? Gimana perintah dari HP bisa sampai ke kipas?
- **Konteks:** Smart lamp dan smart AC sudah bisa begini. Hari ini alat buatan kalian juga.
- Tampung 2–3 tebakan siswa (+2 per siswa), jawabannya dibahas di Topik 1 (slide *Perintah Kipas: ESP32 yang Bertanya*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #6 (Curiosity & Secrets — Rasa Penasaran)**

# "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." ⏳

Isi slide:
- 🏠 Alat di rumah/sekolah ada **di balik router**. Server internet **tidak bisa** menghubunginya langsung.
- 🙋 Solusinya: **alat yang bertanya** ke server secara berkala: "ada perintah buat aku?"
- ⏳ Alat kami bertanya tiap ±4 detik → jeda tombol ke kipas **0–4 detik**. Normal!
- 🔐 Dashboard publik: semua orang bisa **lihat**, hanya pemegang **PIN** yang bisa **mengubah**.
- 🤖 Mode Otomatis: kipas nyala sendiri kalau suhu lewat ambang, persis AC.

🎙️ **Kalimat hook (pembuka rekaman):** "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."

📌 **Teks di layar:**
- Klik… 1… 2… 3… kipas jalan ⏳
- Alat di balik router 🏠
- Server nggak bisa "ngetuk pintu" 🚪
- Alat yang BERTANYA tiap 4 detik 🙋
- Lihat = publik · Ubah = PIN 🔐

🎬 **Penutup:** "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–5 detik] "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device."
> - [5–15 detik] "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung."
> - [15–28 detik] "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik."
> - [28–38 detik] "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu."
> - [38–50 detik] "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pencet jangan."
> - [50–58 detik] "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!"

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
| 0–5 | Jari menekan tombol di HP, hitungan 1-2-3, kipas berputar | "Kenapa kipas pintarku telat 4 detik? Ternyata ini rahasia smart device." | Klik… 1… 2… 3… ⏳ |
| 5–15 | Animasi router sebagai pintu tertutup | "Alat ini ada di WiFi sekolah, di balik router. Server di internet nggak bisa ngetuk pintunya langsung." | Server nggak bisa "ngetuk pintu" 🚪 |
| 15–28 | Animasi ESP32 mengirim pesan berkala, server membalas | "Jadi dibalik: alatnya yang bertanya. Tiap empat detik dia lapor suhu sambil tanya, 'ada perintah buat aku?' Server jawab: kipas nyala. Relay klik." | Alat yang BERTANYA 🙋 |
| 28–38 | Stopwatch di layar 0–4 detik | "Makanya jedanya nol sampai empat detik. Bukan lemot, memang desainnya begitu." | Jeda 0–4 detik = normal ✅ |
| 38–50 | Dashboard publik, pop-up PIN | "Dashboard-nya publik: semua orang bisa lihat suhunya. Tapi buat ngubah kipas, harus pakai PIN kelompok. Lihat boleh, pencet jangan." | Lihat = publik · Ubah = PIN 🔐 |
| 50–58 | Siswa SMA dengan rakitannya (pastikan izin) | "Yang bikin ini siswa SMA, rakit sendiri. Follow buat lihat Demo Day-nya!" | Follow 👉 |

#### Caption

Kipas pintar telat beberapa detik? Itu bukan rusak ⏳

🏠 Alat ada di balik router → server nggak bisa menghubungi langsung
🙋 Alat yang bertanya ke server tiap ±4 detik
✅ Jeda 0–4 detik = sesuai desain
🔐 Dashboard publik: lihat boleh, ubah pakai PIN
🤖 Mode Otomatis: kipas nyala sendiri kalau suhu lewat ambang

#InspiraLabs #IoT #ESP32 #SmartHome #EkskulCoding #STEM #ProyekSiswa

#### Yang sengaja tidak dibocorkan
- Alamat server dan isi firmware.
- PIN kelompok dan detail dashboard.

---

## Post-Test (5 soal, pilihan ganda)

**1. Kamu menekan tombol kipas di dashboard. Bagaimana perintah itu sampai ke ESP32?**
A. Server langsung mengetuk ESP32 lewat WiFi sekolah B. ESP32 lapor suhu tiap ±4 detik, lalu membaca status kipas dari balasan server C. HP mengirim sinyal Bluetooth ke ESP32 D. Relay membuka website sendiri

**2. Teman dari kelas lain membuka dashboard kelompokmu tanpa tahu PIN. Apa yang bisa dia lakukan?**
A. Menyalakan dan mematikan kipas B. Mengubah ambang suhu di slider C. Hanya melihat suhu, kelembapan, dan status kipas D. Mengganti firmware ESP32

**3. Mode Otomatis aktif dengan slider "Nyala otomatis di atas 29°C". Suhu terbaca 31°C. Apa yang terjadi?**
A. Kipas menyala sendiri tanpa tombol ditekan B. Kipas mati C. Dashboard meminta upload ulang D. ESP32 restart

**4. Kipas sudah di terminal NO. Dashboard bilang kipas MATI, tapi kipasnya BERPUTAR (dan sebaliknya). Perbaikan yang tepat di firmware adalah…**
A. Mengganti `DEVICE_ID` B. Mengganti `WIFI_PASSWORD` C. Menghapus `api.js` D. Mengganti `#define RELAY_ACTIVE_LOW true` menjadi `false`, lalu upload ulang

**5. Kenapa `SEND_INTERVAL_MS` di firmware tidak boleh diubah ke angka di bawah 2000?**
A. Supaya kipas berputar lebih pelan B. Sensor DHT22 butuh jeda minimal 2 detik antar pembacaan C. Karena WiFi hanya menyala 2 detik sekali D. Karena dashboard hanya bisa menampilkan 2 angka

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** kipas menyala & mati mengikuti tombol di HP dalam ±0–5 detik. Bukti = demo langsung ke tutor.

**Medium:**
- Kipas menyala setelah suhu yang **diterima server** melewati ambang. Ada 2 jeda: suhu DHT22 naik pelan (±10–40 detik digenggam), lalu laporan tiap ±4 detik.
- Mati sendiri biasanya lebih lama (sensor butuh waktu dingin lagi, bisa 30–90 detik). Angka berapa pun diterima asal kipas nyala & mati sendiri.
- Kipas cetak-cetek di dekat ambang: geser slider naik 1°C.

**Hard:**
- Rata-rata jeda 4000 ms ≈ **2–3 detik** (0–4 detik + waktu internet). Dengan 2000 ms ≈ **1–1,5 detik**, kira-kira separuhnya, karena ESP32 bertanya dua kali lebih sering.
- Tidak boleh di bawah 2000: DHT22 hanya bisa dibaca **maksimal tiap 2 detik** (lebih cepat → `Gagal baca sensor`), dan server melayani semua kelompok sekaligus (makin sering = makin berat).
- Wajib dikembalikan ke **4000** dan di-upload ulang sebelum kelas selesai.

### Catatan tutor
- Firmware masih mendaftarkan route `/fan` (perintah langsung dalam jaringan lokal), tapi server online tidak bisa menjangkau IP lokal ESP32. Yang bekerja di kelas: relay mengikuti `fanOn` di balasan laporan. Jangan ajarkan bahwa server "mendorong" perintah ke ESP32.
- PIN: browser yang pernah benar menyimpan PIN; browser/HP lain akan bertanya lagi. Setelah "PIN salah", PIN tersimpan dihapus, tekan tombol lagi untuk mengetik ulang. Jangan bacakan PIN di depan kelas.
- Kalau ada yang iseng mencoba PIN kelompok lain: bahas sebagai etika keamanan, bukan hukuman.

### Kunci Post-Test
1. B 2. C 3. A 4. D 5. B

### Pembahasan singkat
- No. 1: alat di balik router tidak bisa dihubungi langsung dari internet; alatnya yang bertanya tiap ±4 detik.
- No. 2: dashboard publik untuk dilihat; mengubah kipas/mode/slider butuh PIN.
- No. 4: gejala kebalikan padahal kipas di NO = modul active-HIGH → satu kata `RELAY_ACTIVE_LOW`.
- No. 5: batas kecepatan baca DHT22 = 2 detik.
