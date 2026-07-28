# Siapa Boleh Ubah Apa — Panduan Proyek Smart Room Monitor

Dokumen ini merangkum pembagian tanggung jawab di seluruh proyek: apa yang jadi urusan
**pelatih/panitia**, apa yang jadi **materi IoT** (Anda ajarkan), dan apa yang jadi
**materi web dev/UI** (rekan Anda ajarkan) — plus bagian mana yang boleh diubah siswa dan
mana yang tidak.

## Peta folder

```
asy-syahid-ekskul/
├── backend/                              <- PELATIH SAJA, tidak diajarkan
├── firmware/
│   ├── smp_room_monitor/                 <- materi IoT SMP (Anda)
│   ├── sma_room_monitor/                 <- materi IoT SMA (Anda) -- ada TANTANGAN
│   └── sma_room_monitor_REFERENSI_PELATIH/  <- kunci jawaban, JANGAN dibagikan ke siswa
├── demo/                                  <- dashboard referensi Anda (pelatih)
├── sma/                                   <- materi web dev SMA (rekan Anda) -- ada TANTANGAN
├── smp/                                   <- materi web dev SMP (rekan Anda)
├── vercel.json                            <- routing /demo /sma /smp untuk deploy Vercel
└── SIAPA_BOLEH_UBAH_APA.md               <- file ini
```

## 1. Backend (`backend/`)

**Milik:** Anda/panitia sepenuhnya.
**Siapa boleh ubah:** Hanya Anda, dan hanya `.env` (isi kredensial) — bukan `server.js`.
**Tidak pernah diajarkan ke siapa pun.** Siswa dan rekan pengajar web dev tidak perlu tahu
isinya sama sekali, cukup diberi:
- Base URL (`http://<ip-laptop-anda>:3000`)
- `API_KEY` (hanya untuk yang menulis firmware ESP32)

Lihat `backend/README.md` untuk cara setup & menjalankan.

## 2. Firmware ESP32 (`firmware/`)

### `smp_room_monitor/smp_room_monitor.ino`
**Materi:** IoT SMP (Anda ajarkan).
**Siswa boleh ubah:** 4 baris saja — `DEVICE_ID`, `WIFI_SSID`, `WIFI_PASSWORD`, `DHT_PIN`.
**Siswa TIDAK boleh ubah:** Baris berlabel `JANGAN UBAH` (URL server, API key, logika kirim
data). Tidak ada kontrol relay di file ini sama sekali.

### `sma_room_monitor/sma_room_monitor.ino`
**Materi:** IoT SMA (Anda ajarkan).
**Siswa boleh/harus ubah:**
- 5 baris identitas (`DEVICE_ID`, WiFi, `DHT_PIN`, `RELAY_PIN`)
- Bagian **TANTANGAN** (ditandai `// ============ TANTANGAN`): isi fungsi
  `handleFanCommand()` (4 TODO) dan daftarkan route `/fan` di `setup()`. Ini dikerjakan di
  Pertemuan 4 sesuai silabus.

**Siswa TIDAK boleh ubah:** Baris berlabel `JANGAN UBAH` (koneksi ke backend, loop kirim
sensor, `fanServer.handleClient()`).

### `sma_room_monitor_REFERENSI_PELATIH/`
**JANGAN dibagikan ke siswa.** Ini kunci jawaban lengkap TANTANGAN, untuk Anda verifikasi
sebelum kelas dan sebagai panduan diskusi setelah siswa mengerjakan TANTANGAN mereka.

## 3. Dashboard (`demo/`, `sma/`, `smp/`)

Tiap folder punya file `api.js` — **"kabel" ke backend, berlabel besar "JANGAN UBAH FILE
INI"** di baris paling atas. Ini yang memisahkan tegas kode backend dari kode tampilan.
HTML utama di tiap folder bernama `index.html` (bukan nama panjang berspasi lagi) supaya
URL di Vercel bersih: `ekskulcoding.inspiralabs.id/demo`, `/sma`, `/smp`.

| Folder | Materi | Siapa ajar | File tampilan (bebas diubah) | `api.js` (jangan ubah) |
|---|---|---|---|---|
| `demo/` | Referensi lengkap | Anda (demo di kelas) | `index.html`, `app.js` | `api.js` |
| `sma/` | Web dev SMA | Rekan Anda | `index.html` | `api.js` |
| `smp/` | Web dev SMP | Rekan Anda | `index.html` | `api.js` |

**Satu baris yang PERLU diubah manual di tiap `api.js`:** `MY_DEVICE_ID` — sesuaikan dengan
device/kelompok mana yang mau ditampilkan di dashboard itu. Ini satu-satunya pengecualian
"jangan ubah" karena bukan logika koneksi, hanya nilai konfigurasi.

### Dashboard Demo
File asli (`Smart Room Monitor.dc.html` dari tool desain) tersimpan di `demo/` sebagai
`Smart Room Monitor.ORIGINAL_REFERENSI_DESAIN.html` — bukan file yang dipakai lagi, hanya
referensi visual. File yang aktif dipakai (`demo/index.html` + `demo/app.js`) adalah
tulisan ulang vanilla JS yang bisa langsung dibuka di browser mana pun.

### Dashboard SMA — bagian TANTANGAN (materi rekan Anda)
Ditandai komentar `TANTANGAN` di HTML: mode Otomatis + slider threshold, grafik riwayat,
dark mode, panel edukasi. Untuk TANTANGAN 3 (mode Otomatis), siswa memanggil fungsi yang
SUDAH ADA dari `api.js`:
```js
kirimPerintahFan({ fanMode: "auto" });
kirimPerintahFan({ threshold: nilaiSlider });
```
Contoh polanya sudah ada di `toggleFanManual()` (baris ~605) yang sudah bekerja — siswa
tinggal meniru pola yang sama untuk TANTANGAN lain.

### Dashboard SMP
Tidak ada bagian kontrol/TANTANGAN terkait backend — hanya satu kotak kosong untuk
eksplorasi bebas (`.kotak-kosong`) yang tidak berhubungan dengan data sensor.

## 4. Ringkasan aturan "JANGAN UBAH" di semua file

Setiap file yang tidak boleh diubah siswa/rekan pengajar punya komentar eksplisit di
baris paling atas, contoh:
```
// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" penghubung ke backend.
// ============================================================
```
atau di dalam firmware:
```cpp
// ============ JANGAN UBAH DI BAWAH INI (koneksi ke backend) ============
```
Kalau siswa bingung kenapa ada bagian yang tidak boleh diubah, alasannya sama di semua
tempat: bagian itu adalah "kabel" yang menyambungkan ke backend/device lain — mengubahnya
bisa membuat perangkat teman sekelompok lain ikut error atau data tertukar antar kelompok.

## 5. Checklist sebelum kelas (untuk Anda/panitia)

1. Deploy backend ke server (`backend/README.md`) dan catat URL server-nya.
2. Ganti semua `<url-backend-anda>` dan `<shared-secret>` di:
   - `firmware/smp_room_monitor/smp_room_monitor.ino`
   - `firmware/sma_room_monitor/sma_room_monitor.ino`
   - `firmware/sma_room_monitor_REFERENSI_PELATIH/*.ino`
   - `demo/api.js`, `sma/api.js`, `smp/api.js`
3. Tentukan daftar `DEVICE_ID` final per kelompok (lihat `backend/README.md` bagian 4),
   masukkan ke `HANDOUT_SISWA.md`.
4. Compile & flash `sma_room_monitor_REFERENSI_PELATIH` ke satu ESP32 uji untuk verifikasi
   relay & alur kontrol bekerja sebelum kelas.
5. Baru bagikan `firmware/smp_room_monitor/` dan `firmware/sma_room_monitor/` (versi
   TANTANGAN, BUKAN referensi) ke siswa sesuai `HANDOUT_SISWA.md`.
