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

> 🗣️ SPEAKER NOTES: Rakitan tidak diubah sama sekali dari P10. Kalau ada kelompok yang memindah kabel di Challenge Easy P10, pastikan sudah dikembalikan ke D18, atau RELAY_PIN disesuaikan.

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
