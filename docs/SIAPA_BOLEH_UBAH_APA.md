# Siapa Boleh Ubah Apa — Panduan Proyek Smart Room Monitor

Dokumen ini merangkum pembagian tanggung jawab di seluruh proyek: apa yang jadi urusan
**tutor/panitia**, apa yang jadi **materi IoT** (Anda ajarkan), dan apa yang jadi
**materi web dev/UI** (rekan Anda ajarkan) — plus bagian mana yang boleh diubah siswa dan
mana yang tidak.

## Peta folder

```
ekskul-coding/
├── backend/                              <- TUTOR SAJA, tidak diajarkan
├── demo/                                  <- dashboard referensi Anda (tutor)
├── sma/                                   <- dashboard SMA (fitur jadi, siswa kustom tampilan)
│   └── firmware/                         <- firmware SMA (program jadi)
├── smp/                                   <- materi web dev SMP (rekan Anda)
│   └── firmware/                         <- materi IoT SMP (Anda), sketch Arduino IDE
├── index.html, leaderboard/, materi/,
│   tentang/, shared/                      <- website ekskul (deploy Vercel, tetap di root)
├── kelompok/<id>/                         <- website kelompok yang sudah di-deploy (<id>.inspiralabs.id)
├── kurikulum/                             <- bahan ajar per jenjang & pertemuan (tidak di-deploy)
│   ├── panduan-instalasi/                <- Arduino IDE, board ESP32, library (Windows & Mac)
│   ├── smp/p09..p13/                     <- IoT SMP; cara menjalankan: smp/README.md
│   └── sma/p06..p13/                     <- p06-p08 web (HTML), p09-p13 IoT
├── tools/                                 <- build bahan ajar, paket/deploy kelompok, server kelas (post-test & paket)
├── deploy/                                <- deploy website kelompok ke VPS
├── docs/                                  <- silabus, HANDOUT_SISWA.md, sosialisasi pengajar, file ini
├── prompt/                                <- template prompt Gemini (slide & materi) + RUNBOOK
└── vercel.json                            <- routing /demo /sma /smp untuk deploy Vercel
```

## 1. Backend (`backend/`)

**Milik:** Anda/panitia sepenuhnya.
**Siapa boleh ubah:** Hanya Anda, dan hanya `.env` (isi kredensial) — bukan `server.js`.
**Tidak pernah diajarkan ke siapa pun.** Siswa dan rekan pengajar web dev tidak perlu tahu
isinya sama sekali, cukup diberi:
- Base URL (`http://<ip-laptop-anda>:3000`)
- `API_KEY` (hanya untuk yang menulis firmware ESP32)

Lihat `backend/README.md` untuk cara setup & menjalankan.

## 2. Firmware ESP32 (`sma/firmware/`, `smp/firmware/`)

### `smp/firmware/smp_room_monitor/smp_room_monitor.ino`
**Materi:** IoT SMP (Anda ajarkan).
**Siswa boleh ubah:** `WIFI_SSID`, `WIFI_PASSWORD`, dan `DHT_PIN` kalau kabel di pin lain.
`DEVICE_ID` sudah diisi tutor lewat `py tools/kelompok.py paket`.
**Siswa TIDAK boleh ubah:** Baris berlabel `JANGAN UBAH` (URL server, API key, logika kirim
data). Tidak ada kontrol relay di file ini sama sekali.

### `sma/firmware/sma_room_monitor/sma_room_monitor.ino`
**Materi:** IoT SMA (Anda ajarkan).
**Program sudah jadi** (P9–P13 fokus perakitan). Siswa hanya mengisi WiFi, `DHT_PIN`/`RELAY_PIN`
kalau kabel di pin lain (hindari strapping pin 0/2/5/12/15), dan `RELAY_ACTIVE_LOW` = `false` kalau
modul relaynya active-HIGH. `DEVICE_ID` sudah diisi tutor.

**Siswa TIDAK boleh ubah:** Baris berlabel `JANGAN UBAH` (koneksi ke backend, loop kirim
sensor, `fanServer.handleClient()`).

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
| `leaderboard/` | Ranking siswa (baca dari gradebook) | Rekan Anda | `index.html` | `leaderboard.js` |
| `materi/` | Materi & form per pertemuan | Rekan Anda | `index.html` | `materi.js` |

**`MY_DEVICE_ID` di `api.js`** diisi otomatis per kelompok oleh `py tools/kelompok.py paket`,
dan saat deploy `api.js` selalu diganti versi tutor. Kontrol fan SMA dilindungi PIN per
kelompok (`FAN_PINS` di `backend/.env`).

**Sama halnya untuk `leaderboard.js` dan `materi.js`:** satu baris yang PERLU
diubah manual adalah konstanta URL sumber data di puncak file
(`GRADEBOOK_URL` di `leaderboard.js`, `MATERI_URL` di `materi.js`). Kalau
tutor membuat spreadsheet gradebook atau Materi yang baru, cukup ganti URL
ini — tidak perlu mengubah logika kode. Cara mendapatkan URL: Google Sheets
-> File -> Share -> Publish to web -> pilih tab -> format CSV -> salin link.
`shared/csv.js` juga berlabel "JANGAN UBAH FILE INI" — util bersama yang
dipakai kedua file di atas untuk membaca CSV.

### Dashboard Demo
File asli (`Smart Room Monitor.dc.html` dari tool desain) tersimpan di `demo/` sebagai
`Smart Room Monitor.ORIGINAL_REFERENSI_DESAIN.html` — bukan file yang dipakai lagi, hanya
referensi visual. File yang aktif dipakai (`demo/index.html` + `demo/app.js`) adalah
tulisan ulang vanilla JS yang bisa langsung dibuka di browser mana pun.

### Dashboard SMA
Kontrol fan manual, mode Manual/Otomatis, dan slider ambang batas sudah jadi. Siswa mengkustom
kartu Profil Kelompok, warna `:root`, foto; grafik/dark mode/panel edukasi jadi bonus opsional.

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

1. Backend online + `FAN_PINS` sudah di `.env` server (`backend/README.md`).
2. `py tools/kelompok.py paket` → bagikan `dist/paket/<id>.zip` ke tiap kelompok, PIN SMA secara pribadi.
   Di kelas lebih mudah lewat server kelas: `py tools/server_kelas.py` (paket, dashboard, post-test; lihat `kurikulum/smp/README.md`).
3. Flash satu ESP32 uji dengan firmware SMA untuk cek relay & alur kontrol.
4. Akhir semester: deploy tiap kiriman siswa (`deploy/README.md`).
