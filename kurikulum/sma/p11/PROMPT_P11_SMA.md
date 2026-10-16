PROMPT P11 SMA — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1mfjMURkXw5rTnvrlF2KDZ-vLUTbs1UMd → subfolder SMA (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P11 SMA — Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

BRAND SYSTEM — WAJIB KONSISTEN DI SEMUA SLIDE:
- Warna Maroon: #7A1F2B (background utama/aksen dominan)
- Warna Maroon Gelap: #5A1620 (aksen dekoratif/kartu gelap)
- Warna Gold: #C9A24B (highlight, badge, border aksen)
- Warna Gold Muda: #E8D9B5 (background lembut/badge terang)
- Warna Off-White: #FAF8F5 (background slide terang)
- Warna teks gelap: #2B2320
- Warna teks abu: #6B5F58
- Font judul: serif elegan dan tegas
- Font body: sans-serif bersih dan mudah dibaca
- Gaya visual: rounded corners di semua card/badge, soft drop shadow pada card putih, lingkaran dekoratif semi-transparan di pojok slide cover/penutup
- JANGAN pakai garis/stripe aksen horizontal di bawah judul (dianggap kurang premium)
- Ukuran slide: widescreen 16:9

CARA MEMBACA ISI SLIDE (di antara penanda MULAI/SELESAI ISI SLIDE):
- Baris paling atas (# Judul) BUKAN slide, hanya nama pertemuan (dipakai di footer).
- Setiap bagian yang dipisah garis --- = 1 slide, urutan PERSIS seperti di isi. Jangan memindah, menggabung, atau menghapus slide.
- Komentar <!-- ... --> adalah catatan untukmu, jangan ditampilkan.
- Baris berawalan "> 🗣️ SPEAKER NOTES" masuk ke SPEAKER NOTES slide itu, JANGAN tampil di slide.
- Layout tiap slide kamu tentukan sendiri sesuai isi (card, tabel, kode, diagram), tetap dalam brand system.

POLA SLIDE (gaya deck P7 SMA InspiraLabs):
- Slide 1 "LINK & QR CODE": label kecil "LINK & QR CODE", judul "Akses Materi, Challenge, & Post Test", paragraf penjelasan, link Linktree besar, QR code dari link itu di sisi kanan. Background maroon, lingkaran dekoratif semi-transparan.
- Slide 2 "COVER": cover pertemuan. Label kecil "P11 SMA", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi Live Coding": label kecil "forum Diskusi Live Coding", pertanyaan besar di tengah, layout lega.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge "+10", instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P11 SMA | nomor slide" (slide Linktree tanpa nomor).
- Teks tidak boleh keluar dari slide. Kalau isi terlalu panjang, kecilkan font atau pecah jadi 2 slide berurutan dengan judul + "(lanjutan)".

GAMBAR RANGKAIAN (bagian berlabel "wiring" di isi slide):
1. Setiap bagian berlabel "wiring" adalah PERMINTAAN GAMBAR, bukan teks slide. Ganti dengan 1 gambar diagram rangkaian di slide yang sama.
2. Gaya diagram: flat, tampak atas, garis kabel tebal, label jelas, mirip diagram Fritzing. Latar & bingkai mengikuti brand (off-white, aksen maroon/gold).
3. Gambar HANYA sambungan yang tertulis. Jangan menambah atau mengarang kabel/pin.
4. Setiap ujung kabel diberi label nama pin ("3V3", "GND", "D4", "VIN", ...).
5. Warna kabel: Merah = 3V3/VIN · Hitam = GND · Kuning = data sensor · Biru = sinyal kontrol (LED/relay IN) · Oranye = jalur beban relay (COM/NO).
6. Komponen: LED kaki PANJANG (+) lebih panjang & berlabel "+"; resistor 220Ω gelang merah-merah-coklat; DHT22 modul 3-pin ("+", "out", "−"); relay 1-channel modul biru ("VCC, GND, IN" dan "NO, COM, NC"); breadboard dengan jalur + (merah) dan − (biru).
7. ESP32 DevKit V1 30-pin, antena di atas, USB di bawah. Urutan pin dari atas ke bawah:
   KIRI : EN, VP(36), VN(39), D34, D35, D32, D33, D25, D26, D27, D14, D12, D13, GND, VIN
   KANAN: D23, D22, TX0, RX0, D21, D19, D18, D5, TX2, RX2, D4, D2, D15, GND, 3V3
   Beri warna hanya pada pin yang dipakai.
8. "Sorot" = beri panah/callout. "Judul" = caption kecil di bawah gambar.
9. Kalau tidak bisa menggambar diagram yang akurat, JANGAN pakai gambar AI. Buat tabel sambungan rapi (Dari → Ke, warna kabel) dan tulis "[GANTI DENGAN SCREENSHOT WOKWI]" di slide itu.

---------- MULAI ISI SLIDE ----------

# P11 SMA — Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P11 SMA | nomor slide".
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

**P11 SMA**

# Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

Firmware jadi, rakitan siap: saatnya data suhu kelas tampil online.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Saat membuka website lalu muncul tulisan "404 Not Found", sebenarnya siapa yang sedang berbicara dengan siapa?

Setiap kali browser atau alat meminta sesuatu, server selalu menjawab dengan sebuah angka. Hari ini alat kita ikut "mengobrol" dengan server.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 2.

---

### Apa yang kita capai hari ini?

- **01 Upload Firmware Proyek**: Isi zip kelompok, isi WiFi, upload, data online.
- **02 Membaca Serial Monitor**: Laporan firmware dan kode respons server.
- **03 Alat Mandiri**: Jalan tanpa laptop, troubleshooting berlapis.

---

### Dari Alat Offline ke Alat Online
- P10: rakitan lolos tes, tapi datanya hanya terlihat di **laptop sendiri** (Serial Monitor).
- Hari ini: upload **firmware proyek jadi** → ESP32 melapor ke server **tiap ±4 detik** → suhu tampil di **dashboard** yang bisa dibuka dari mana saja.
- Tidak ada kode yang ditulis. Tugas kalian: **isi WiFi, upload, buktikan datanya sampai**.

```wiring
Judul: Rakitan yang dipakai hari ini (sama dengan P10, tidak diubah)
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
Sorot: ikon WiFi di atas ESP32 dengan panah "data tiap ±4 detik → server"
```

---

### Perjalanan Data: Sensor sampai Dashboard
```
[DHT22] → [ESP32] ──WiFi sekolah──► [Server InspiraLabs] ◄── [Dashboard kelompok]
           tiap ±4 detik kirim:                              ambil data terbaru
           Device ID + suhu + kelembapan                     lalu tampilkan angka
```
- ESP32 dan dashboard **tidak bicara langsung**. Keduanya lewat server.
- **Device ID** (mis. `sma-04`) = "alamat rumah" data kelompok kalian di server. Sudah diisi tutor di firmware **dan** dashboard.
- **Kenapa tiap ±4 detik?** DHT22 hanya boleh dibaca tiap ≥2 detik, dan server melayani semua kelompok sekaligus.

> 🗣️ SPEAKER NOTES: Kaitkan dengan forum diskusi P9: "Kenapa ESP32 dan dashboard tidak saling bicara langsung?" Hari ini jawabannya terlihat nyata.

---

### Isi Zip Proyek Kelompok
| File / folder | Untuk apa | Hari ini |
|---|---|---|
| `firmware/` | Program ESP32 (proyek PlatformIO) | **Dipakai**: isi WiFi, upload |
| `index.html` | Dashboard kelompok | **Dibuka** di browser |
| `style.css` | Tampilan dashboard (warna di `:root`) | Belum (P13) |
| `api.js` | Penghubung ke server | **Jangan diubah** |
| `icon.webp`, `README.md` | Ikon & petunjuk | Dibaca saja |
- Ekstrak zip (mis. `sma-04.zip`) ke folder yang mudah dicari. **Jangan** dibuka langsung dari dalam zip.

> 🗣️ SPEAKER NOTES: Setiap kelompok/peserta menerima zip sendiri dari tutor (sma-01.zip sampai sma-06.zip). Pastikan tidak tertukar: Device ID sudah tertanam di dalamnya.

---

### Yang Boleh & Jangan Diubah
```cpp
// potongan — bagian atas firmware/sma_room_monitor.ino
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // <- isi password WiFi kelas

#define DHT_PIN 4      // ubah hanya kalau kabel DHT22 tidak di D4
#define RELAY_PIN 18   // ubah hanya kalau kabel relay IN tidak di D18
```
- Yang kalian isi: **2 baris WiFi**. `DHT_PIN`/`RELAY_PIN` hanya kalau kabel kalian beda.
- Bagian `JANGAN UBAH` (alamat server, API key, logika kirim) = "kabel" ke server. Jangan disentuh.

---

### Upload Firmware Proyek
1. VS Code → PlatformIO → **PIO Home → Open Project** → pilih folder `firmware` di folder kelompok.
2. Buka `sma_room_monitor.ino`, isi `WIFI_SSID` dan `WIFI_PASSWORD` (huruf besar/kecil & spasi harus **persis**).
3. **Save**, klik **Upload (→)**, lalu **Serial Monitor (🔌)**.
4. Buka `index.html` (double-click). Tunggu beberapa detik: angka suhu & kelembapan muncul.

> 🗣️ SPEAKER NOTES: Rakitan tidak diubah sama sekali dari P10. Kalau ada kelompok yang memindah kabel di Challenge Easy P10, pastikan sudah dikembalikan ke D18, atau RELAY_PIN disesuaikan. Peran berdua: Operator (laptop, isi WiFi, upload) & Pengamat (baca Serial Monitor, cocokkan dengan tabel); tukar di Topik 2. Kipas boleh menyala sendiri kalau kelas di atas 30°C: status awal server = mode Otomatis 30°C (dibahas di P12).

---

### Forum Diskusi Live Coding

**Kenapa Device ID sudah diisi tutor, dan apa jadinya kalau dua kelompok memakai Device ID yang sama?**

> 🗣️ SPEAKER NOTES: Topik 1 — Upload Firmware Proyek. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Online!" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. Isi `WIFI_SSID` dan `WIFI_PASSWORD`, upload firmware proyek.
2. Buktikan di Serial Monitor: `Terhubung!` dan `kode respons: 200`.
3. Buka `index.html` kelompok: angka suhu & kelembapan muncul.

Simpan hasil sebagai `P11_NamaSiswa_C1` (screenshot Serial + dashboard berdampingan)

---

### Membaca Serial Monitor Firmware
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
| Baris | Artinya |
|---|---|
| `Menghubungkan ke WiFi.....` | ESP32 sedang mencoba masuk WiFi |
| `Terhubung! IP ...` | WiFi **beres** |
| `Suhu: ... Kelembapan: ...` | Sensor **beres** |
| `kode respons: 200` | Server **menerima** data. Cek dashboard! |
| `Gagal baca sensor DHT22 ...` | WiFi beres, sensor tidak menjawab → cek kabel DHT22 |

---

### Tips Engineer: Kode Respons Server
| Kode | Arti | Di proyek kita biasanya karena… |
|---|---|---|
| **200** | OK | Sukses |
| **400** | Bad Request | Data rusak (bagian JANGAN UBAH tersentuh?) |
| **401** | Unauthorized | `API_KEY` terubah. Kembalikan dari zip asli |
| **404** | Not Found | `SERVER_URL` salah ketik |
| **5xx** | Server Error | Masalah di server, lapor tutor |
| **−1** | Tidak sampai | Ada WiFi tapi tidak ada internet / host salah |
- Satu angka langsung menunjuk **di mana** masalahnya. Baca angkanya dulu sebelum panik.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: "404 Not Found" adalah server yang menjawab browser dengan angka. Alat kita juga mendapat angka seperti ini setiap kirim data. Bandingkan dengan tebakan siswa tadi.

---

### Forum Diskusi Live Coding

**Serial menulis `Terhubung!` tapi lalu `kode respons: -1`. Lapisan mana yang sudah beres, lapisan mana yang bermasalah?**

> 🗣️ SPEAKER NOTES: Topik 2 — Membaca Serial Monitor. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Uji Sensor Hidup" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. **Genggam** sensor 20 detik. Berapa detik sampai angka suhu di dashboard mulai naik?
2. **Tiup** pelan sensor. Mana yang lebih cepat berubah: suhu atau kelembapan?
3. **Cabut USB**, lepas kabel kuning (out DHT22), colok USB lagi. Apa tulisan di Serial? Apa yang terjadi pada angka di dashboard? Cabut USB, pasang kembali kabelnya, buktikan data normal lagi.

Simpan hasil sebagai `P11_NamaSiswa_C2` (catatan waktu + screenshot)

---

### Alat Mandiri: Daya & WiFi
- Laptop hanya dibutuhkan untuk **upload**. Setelah itu ESP32 cukup diberi listrik **5V USB**: charger HP atau power bank.
- Program **tersimpan** di ESP32. Dicabut lalu dicolok lagi → otomatis jalan, masuk WiFi, kirim data.
- WiFi harus **2.4 GHz**. Hotspot HP: aktifkan opsi "2.4 GHz"/"kompatibilitas".
- Pindah tempat dengan WiFi lain? Ganti nama & password WiFi di firmware lalu **upload ulang**.

---

### Troubleshooting Berlapis
Cek dari lapisan paling bawah, **jangan loncat**:

| Lapisan | Bukti beres | Kalau gagal, cek |
|---|---|---|
| 1. Daya | LED power ESP32 menyala | Kabel USB, charger |
| 2. Program | Serial Monitor menampilkan tulisan | Upload ulang, baud 115200 |
| 3. WiFi | `Terhubung! IP ...` | SSID/password, 2.4 GHz, jarak router |
| 4. Sensor | `Suhu: ...` | Kabel DHT22 (D4, 3V3, GND) |
| 5. Server | `kode respons: 200` | Tabel kode respons |
| 6. Dashboard | Angka berubah di `index.html` | Buka `index.html` dari folder kelompok sendiri, refresh |

---

### Forum Diskusi Live Coding

**Kalau alat dibawa ke rumah, apa saja yang harus diubah supaya tetap online?**

> 🗣️ SPEAKER NOTES: Topik 3 — Alat Mandiri. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🔴 Hard — "Lepas dari Laptop" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Cabut ESP32 dari laptop, colok ke **power bank/charger HP**. Buktikan dashboard tetap berubah saat sensor digenggam.
2. **Cabut USB**, pindahkan kabel kuning DHT22 dari **D4** ke **D27**. Ubah **satu angka** `#define DHT_PIN 4` → `27`, upload, buktikan data tetap masuk. Kembalikan ke D4 dan angka 4 setelahnya.
3. Jawab: kenapa langkah 2 butuh laptop lagi, padahal langkah 1 tidak?

Simpan hasil sebagai `P11_NamaSiswa_C3` (video pendek / screenshot)

---

### Peta Proyek Akhir
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ✅
[P11] Upload firmware proyek, data suhu tampil di dashboard   ← HARI INI
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```

> 🗣️ SPEAKER NOTES: Ingatkan: simpan folder kelompok baik-baik, jangan tertukar dengan kelompok lain. Folder yang sama dipakai di P12 dan diserahkan ke tutor di P13.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 11" di Linktree sudah mengarah ke Google Form P11 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P12!**

MINGGU DEPAN (P12): **Kontrol Kipas dari Dashboard: Manual & Otomatis**

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P11 SMA — Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

BRAND SYSTEM — WAJIB DIIKUTI KONSISTEN:
- Warna Maroon: #7A1F2B (untuk heading utama, judul besar)
- Warna Maroon Gelap: #5A1620 (untuk aksen/subjudul)
- Warna Gold: #C9A24B (untuk garis pembatas, highlight, badge)
- Warna Gold Muda: #E8D9B5 (untuk background callout box)
- Warna Off-White: #FAF8F5 (background box info)
- Warna teks utama: #2B2320 (hampir hitam, bukan pure black)
- Warna teks sekunder: #6B5F58 (abu kecoklatan untuk caption/italic)
- Font judul: gaya serif elegan (Cambria/Georgia)
- Font body: sans-serif bersih (Calibri)

STRUKTUR DOKUMEN:
- Cover halaman pertama: nama InspiraLabs, judul materi besar, tabel info (jenjang/pertemuan/durasi/dll) dengan header row warna gold muda
- Setiap heading besar (##) pakai warna maroon dengan garis bawah tipis gold
- Callout box / kotak info penting: background off-white atau gold muda, border kiri tebal warna maroon atau gold, sesuai konteks (info = gold, penting/warning = maroon)
- Tabel: header row background maroon dengan teks putih, baris isi bergantian putih/gold muda
- Blok kode/pseudocode: font monospace, background abu muda, ditampilkan utuh
- Section Post-Test: setiap soal pilihan ganda diberi jarak jelas, jawaban ditandai bold+italic
- Section "Pembuka Materi": callout gold berisi tagline & pertanyaan pemantik
- Section "Konten Reels": callout khusus bertuliskan "Khusus tim InspiraLabs, tidak ditampilkan di slide", karena ini dibaca instruktur untuk rekaman konten
- Section "KHUSUS TUTOR": beri callout maroon "Jangan ditampilkan ke siswa"
- Footer tiap halaman: nama pertemuan + nomor halaman
- Gunakan heading hierarchy Google Docs yang proper (Heading 1, Heading 2, dst) sesuai struktur # ## ### di isi. Spacing antar section konsisten, rapi seperti materi training profesional, bukan dokumen polos.

---------- MULAI ISI MATERI AJAR ----------

# SMA — Pertemuan 11: Firmware Jadi, Data Online: Monitoring Suhu di Dashboard

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 31 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu meng-upload firmware proyek ke rakitan dan memastikan data sensor tampil real-time di dashboard (proyek akhir tahap 1: monitoring) |
| Penilaian | Progres proyek akhir: Serial `kode respons: 200` + angka suhu di dashboard kelompok berubah saat sensor digenggam |
| Kaitan dengan proyek akhir | Firmware `firmware/sma_room_monitor.ino` di **zip proyek dari tutor** (mis. `sma-04.zip`). Program sudah **lengkap**: Device ID kelompok sudah terisi. Siswa hanya mengisi `WIFI_SSID` dan `WIFI_PASSWORD` (serta `DHT_PIN`/`RELAY_PIN` kalau kabelnya beda dari D4/D18). Dashboard `index.html` di zip yang sama sudah tersambung ke Device ID kelompok. |

## Alat & bahan (per kelompok)

- Rakitan lengkap P10 (DHT22 di D4, relay di D18, kipas di NO) yang sudah lolos 2 program tes
- Laptop dengan VS Code + PlatformIO
- **Zip proyek dari tutor** (`sma-01.zip` … `sma-06.zip`, satu per kelompok/peserta)
- WiFi kelas **2.4 GHz** + hotspot cadangan
- Power bank / charger HP 5V + kabel USB data (untuk Challenge Hard)
- `docs/HANDOUT_SISWA.md` (nama & password WiFi kelas, daftar Device ID)

## Persiapan tutor sebelum kelas

Detail lengkap: `kurikulum/sma/p11/Panduan_Pengajar_P11_SMA.md`.

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`.
2. Jalankan `py tools/kelompok.py paket`, bagikan `dist/paket/sma-XX.zip` ke **masing-masing** kelompok/peserta (jangan tertukar: Device ID sudah tertanam di dalamnya).
3. Isi `docs/HANDOUT_SISWA.md` (WiFi kelas). Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz).
4. Buka sekali folder `firmware` dari salah satu zip lewat PlatformIO dan **Build** di tiap laptop (unduh library).

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
| `firmware/` | Program ESP32 (proyek PlatformIO) | **Dipakai**: isi WiFi, upload |
| `index.html` | Dashboard kelompok | **Dibuka** di browser |
| `style.css` | Tampilan dashboard (warna di `:root`) | Belum (P13) |
| `api.js` | Penghubung ke server | **Jangan diubah** |
| `icon.webp`, `README.md` | Ikon & petunjuk | Dibaca saja |
- Ekstrak zip ke folder yang mudah dicari (mis. `Documents/sma-04`). **Jangan** dibuka langsung dari dalam zip.

### Slide 4 — Yang Boleh & Jangan Diubah 🚦
```cpp
// potongan — bagian atas firmware/sma_room_monitor.ino
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // <- isi password WiFi kelas

#define DHT_PIN 4      // ubah hanya kalau kabel DHT22 tidak di D4
#define RELAY_PIN 18   // ubah hanya kalau kabel relay IN tidak di D18
```
- Yang kalian isi: **2 baris WiFi**. `DHT_PIN`/`RELAY_PIN` hanya kalau kabel kalian beda.
- Bagian `JANGAN UBAH` (alamat server, API key, logika kirim) = "kabel" ke server. Diubah → data kelompok kalian (dan kelompok lain) bisa kacau.

### Slide 5 — Upload Firmware Proyek ⬆️
1. VS Code → PlatformIO → **PIO Home → Open Project** → pilih folder `firmware` di dalam folder kelompok.
2. Buka `sma_room_monitor.ino`, isi `WIFI_SSID` dan `WIFI_PASSWORD` (huruf besar/kecil & spasi harus **persis**).
3. **Save**, klik **Upload (→)**, lalu **Serial Monitor (🔌)**.
4. Buka `index.html` (double-click). Tunggu beberapa detik: angka suhu & kelembapan muncul.

> Catatan tutor: Rakitan tidak diubah sama sekali dari P10. Kalau ada kelompok yang memindah kabel di P10 (Challenge Easy), pastikan sudah dikembalikan ke D18, atau `RELAY_PIN` disesuaikan. Peran berdua: **Operator** (laptop, isi WiFi, upload) & **Pengamat** (baca Serial Monitor, cocokkan dengan tabel); tukar di Topik 2.

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
| 4. Sensor | `Suhu: ...` | Kabel DHT22 (D4, 3V3, GND) |
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
2. **Cabut USB**, pindahkan kabel kuning DHT22 dari **D4** ke **D27**. Ubah **satu angka** `#define DHT_PIN 4` → `27`, upload, buktikan data tetap masuk. Kembalikan ke D4 dan angka 4 setelah selesai.
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
A. Password WiFi B. Kabel DHT22: out ke D4, + ke 3V3, − ke GND C. File `api.js` D. Kabel kipas di terminal NO

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

---------- SELESAI ISI MATERI AJAR ----------
