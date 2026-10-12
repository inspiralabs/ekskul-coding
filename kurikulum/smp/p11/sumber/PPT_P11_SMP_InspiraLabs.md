# P11 SMP — Pasang Firmware Proyek & Jadi Dokter Kabel

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P11 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P11 SMP**

# Pasang Firmware Proyek & Jadi Dokter Kabel

Saatnya memasang program proyek akhir, dan belajar memperbaiki alat seperti engineer.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kalau alat tiba-tiba berhenti bekerja, bagaimana teknisi tahu bagian mana yang rusak tanpa membongkar semuanya?

Alat kita bisa "bercerita" tentang masalahnya. Kita tinggal belajar membacanya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 2.

---

### Apa yang kita capai hari ini?

- **01 Upload Firmware Proyek**: Memasang program proyek akhir dan membaca "cerita" ESP32 di Serial Monitor.
- **02 Jadi Dokter Kabel**: Menemukan dan memperbaiki kesalahan rakitan dengan gejala, multimeter, dan program cadangan.

---

### Dari Program Latihan ke Program Proyek
- P10: program latihan (Blink, cek DHT22) → ESP32 bicara ke **laptop**.
- Hari ini: **firmware proyek akhir** → ESP32 membaca sensor **dan** mengirim data ke **internet**.
- Firmware = program jadi untuk alat kita. **Kita tidak menulis kodenya**, kita memasang dan merawatnya.

---

### Isi Folder Proyekmu
Zip dari tutor bernama sesuai **Device ID** kalian (contoh: `smp-07.zip`). **Extract** dulu → folder `smp-07`.

| Isi | Untuk apa | Dipakai di |
|---|---|---|
| `firmware/` | Program ESP32 + `platformio.ini` | **Hari ini** |
| `index.html`, `style.css`, `icon.webp` | Website dashboard (nama anggota sudah terisi) | P12 |
| `api.js` | "Kabel" dashboard ke server | Jangan diubah |
| `README.md` | Petunjuk + aturan serah folder | Dibaca |

> 🗣️ SPEAKER NOTES: Tunjukkan tabel Device ID di docs/HANDOUT_SISWA.md. Device ID = nama alat di internet, sudah diisi tutor, tidak boleh diganti dan tidak boleh sama dengan kelompok lain. Jangan pakai salinan umum dari Drive.

---

### Zona Hijau & Zona Merah
Buka `firmware/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`: `SERVER_URL`, `API_KEY`, dan baris di bawahnya) = sambungan ke server.
- Nama WiFi ditulis **persis**: huruf besar-kecil dan spasi dihitung. Tanda kutip `" "` jangan terhapus.

---

### Praktek Bareng: Upload Firmware Proyek
1. Cek rakitan: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Extract `smp-XX.zip`. PIO Home → **Open Project** → pilih folder `smp-XX/firmware`.
3. Buka `smp_room_monitor.ino`, isi `WIFI_SSID` dan `WIFI_PASSWORD` saja. **Save** (Ctrl+S).
4. **Upload** → tunggu `SUCCESS` → **Serial Monitor**.

```wiring
Judul: Rakitan standar proyek akhir SMP
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
Sorot: D4 = angka 4 di "#define DHT_PIN 4"
```

> 🗣️ SPEAKER NOTES: Kalau Serial Monitor kosong, tekan tombol EN (reset) di board supaya ESP32 mengulang dari awal dan pesan WiFi terlihat.

---

### Membaca "Cerita" ESP32
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```

| Baris | Artinya | Kalau tidak muncul, cek… |
|---|---|---|
| `Menghubungkan ke WiFi…` | Sedang mencoba WiFi | Sudah ter-upload? Tekan EN |
| `Terhubung! IP …` | WiFi **berhasil** | Nama/password, WiFi 2.4 GHz |
| `Suhu: … Kelembapan: …` | Sensor **terbaca** | Kabel DHT22 |
| `kode respons: 200` | Data **diterima server** | Internet, zona merah utuh |

---

### Forum Diskusi Live Coding

**Kenapa `DEVICE_ID` tiap kelompok harus berbeda? Apa yang terjadi kalau dua alat memakai ID yang sama?**

> 🗣️ SPEAKER NOTES: Topik 1 — Upload Firmware Proyek. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Tiup & Catat" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Dari Serial Monitor firmware proyek, catat angka suhu & kelembapan **sebelum** dan **sesudah** sensor ditiup (atau digenggam 10 detik). Catat juga **kode respons**-nya. Tulis di kertas: mana yang naik lebih banyak?

---

### Tips Engineer: Jadi Dokter Kabel
Engineer tidak menebak. Mereka **membaca gejala**, lalu cek **satu per satu**: listrik → kabel → pin → program.

| Gejala | Penyebab paling sering | Obatnya |
|---|---|---|
| Titik `......` tidak berhenti | Nama/password WiFi salah, WiFi 5 GHz | Cek huruf & spasi, hotspot 2.4 GHz |
| `Gagal baca sensor DHT22…` | Out tidak di D4, kabel longgar, + / − tertukar | Cabut USB, checklist rakit P10 |
| Suhu kadang muncul, kadang gagal | Kabel goyang / jumper hampir putus | Ganti jumper, tes multimeter |
| `kode respons: -1` | WiFi tanpa internet | Cek kuota, coba WiFi lain |
| `kode respons: 401` | `API_KEY` berubah | Extract ulang zip asli, isi WiFi lagi |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi. Ingatkan kembali tebakan siswa tadi. Tekankan urutan cek: listrik → kabel → pin → program.

---

### Alat Dokter: Multimeter & Program Cadangan
**Multimeter** (pinjam ke tutor):
- Mode **DC volt (20V)**: merah di 3V3, hitam di GND → harus ±**3,3V**.
- Mode **bunyi**: tempel ke dua ujung kabel jumper → **bunyi = bagus**, diam = putus.

**Program cadangan** (folder Kode, tinggal upload):
- `P11_1_BacaDHT22.cpp` → cek sensor **tanpa WiFi**.
- `P11_2_TesWiFi.cpp` → cek WiFi **tanpa sensor** (isi nama & password WiFi).
- Masalah ketemu → **upload lagi firmware proyek**.

File program cadangan: `P11_1_BacaDHT22.cpp`, `P11_2_TesWiFi.cpp` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: Demo kabel jumper yang sengaja diputus: terlihat normal, tapi multimeter diam. Ini penyebab "misterius" yang sering terjadi.

---

### Forum Diskusi Live Coding

**Serial Monitor macet di titik-titik WiFi. Apakah kabel sensor mungkin penyebabnya? Bagaimana cara membuktikannya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Dokter Kabel. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Dokter Serial Monitor" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

Cocokkan tampilan Serial Monitor dengan penyebabnya:

| Tampilan | Penyebab |
|---|---|
| 1. `Menghubungkan ke WiFi..................` (tidak berhenti) | ? |
| 2. `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` | ? |
| 3. `Kirim data -> kode respons: -1` | ? |
| 4. `Kirim data -> kode respons: 401` | ? |

**A.** Kabel sensor longgar / pin salah · **B.** WiFi tersambung, internet mati · **C.** Nama/password WiFi salah atau 5 GHz · **D.** `API_KEY` di zona merah diubah

Bonus: cabut USB, lepas kabel out DHT22, colok USB, lihat pesannya. Lalu pasang lagi.

---

### Challenge 🔴 Hard — "Pindah Kaki Sensor" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Cabut USB. Pindahkan kabel **out** DHT22 dari **D4** ke **D27**.
2. Colok USB **tanpa** mengubah program. Apa pesan di Serial Monitor?
3. Ubah **satu angka**: `#define DHT_PIN 4` → `#define DHT_PIN 27`. Upload. Angka suhu muncul lagi?
4. Tulis: kenapa angka `DHT_PIN` harus sama dengan pin kabelnya?
5. **Kembalikan** kabel ke D4 dan angka ke `4`.

```wiring
Judul: Kabel out DHT22 dipindah ke D27 (sementara)
Komponen: ESP32 DevKit V1, modul DHT22 3-pin
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D27 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
Sorot: D27 ada di sisi kiri, di bawah D26 ; angka di program harus ikut jadi 27
```

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  ← HARI INI
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```

> 🗣️ SPEAKER NOTES: Firmware proyek tetap tersimpan di ESP32. Minggu depan cukup colok ke USB/power bank. Minta siswa membawa foto kelompok (atau foto diri untuk peserta individu) untuk dashboard di P12.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 11" di Linktree sudah mengarah ke Google Form P11 SMP.

---

### Terima kasih!

**SAMPAI JUMPA DI P12!**

MINGGU DEPAN (P12): **Data Muncul di Dashboard & Kustom Website-mu** (bawa foto kelompok!)
