# Runbook SMA P10–P13 — Smart Room Monitor

**Goal akhir:** setiap Device ID (`sma-01` … `sma-06`) punya alat ESP32 + DHT22 + relay + kipas yang mengirim suhu &
kelembapan ke **dashboard-nya sendiri**, kipasnya bisa dikontrol dari dashboard, dan website-nya online di
`https://sma-0X.inspiralabs.id`.

**Pola mengajar:** ringan, memantik penasaran. Firmware & dashboard **diberikan jadi**; siswa tidak menulis program dari nol,
hanya *tinkering* (isi WiFi, ubah angka/teks/warna, tempel snippet). Tiap pertemuan: 3 challenge (Easy **+5**, Medium **+10**,
Hard **+15**), Tanya Jawab **+2** keaktifan, post-test 5 soal (Google Form), **tanpa PR**.

Peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan** (nama: `docs/HANDOUT_SISWA.md`).

| Dokumen | Isi |
|---|---|
| `pNN/Panduan_Pengajar_PNN_SMA.md` | Persiapan H-1, timeline per menit & slide, kalimat kunci, troubleshooting (dibaca tutor sebelum tiap kelas) |
| `pNN/sumber/` | Bahan baku: isi slide (`PPT_*`), Materi Ajar + kunci (`Materi_Ajar_*`), post-test (`POST_TEST_*`) |
| `prompt/RUNBOOK.md` | Cara detail menjalankan Apps Script & Gemini + checklist slide |
| `deploy/README.md` | Deploy website kelompok ke `sma-0X.inspiralabs.id` |
| `kurikulum/panduan-instalasi/` | Panduan 1–3: Arduino IDE, board ESP32, library DHT (Windows & Mac) |

---

## 1. Peta 4 pertemuan

| P | Tanggal | Topik | Kode yang dibagikan | Yang diubah siswa | **Wajib tercapai** |
|---|---|---|---|---|---|
| **10** | Sabtu, 17 Okt 2026 ⚠️ | Kenalan ESP32 + pasang Arduino IDE (3 level) + Kedip LED | Drive Kode P10: `P10_1_KedipPertama`, `C3_P10_Hard_PesanMorse` | Angka `lamaNyala`/`lamaMati`, teks pesan, `PESAN` Morse | IDE + board ESP32 + library DHT terpasang, LED biru berkedip |
| **11** | Sabtu, 31 Okt 2026 | Rakit DHT22 + relay + kipas, upload firmware proyek | Zip `sma-0X` per kelompok (firmware + dashboard); Drive Kode P11: `P11_1_TesRelay`, `P11_2_TesDHT22` (cek cepat) | `WIFI_SSID`, `WIFI_PASSWORD` (cek `DHT_PIN 13`, `RELAY_PIN 14`) | `kode respons: 200` **dan** angka alat tampil di dashboard kelompok |
| **12** | Sabtu, 7 Nov 2026 | Kontrol kipas dari dashboard: manual & otomatis | — (pakai folder kelompok dari P11) | Tombol & slider di dashboard (pakai PIN); Hard: `SEND_INTERVAL_MS` | Kipas nyala/mati dari HP **dan** menyala sendiri di mode Otomatis |
| **13** | Sabtu, 14 Nov 2026 | Kustom dashboard + website online + Demo Day | Drive Kode P13: `C3_P13_Hard_PanelTips/panel_tips.txt` | Warna `:root` di `style.css`, profil, `AMBANG_BATAS_SUHU_TINGGI` & teks peringatan, snippet panel tips | Zip `sma-0X.zip` terkumpul, website online, demo 2 menit |

⚠️ Tanggal P10 masih tanggal lama (sudah lewat). Ganti di `p10/sumber/Materi_Ajar_P10_SMA_InspiraLabs.md` dan
`p10/Panduan_Pengajar_P10_SMA.md` kalau P10 dijalankan ulang, lalu build ulang (bagian 2).

**Titik kritis:** data online di **P11**. P12 sekaligus jadi buffer untuk kelompok yang belum dapat `200`.

**Rakitan (P11, dipakai sampai P13):**

| Dari ESP32 | Ke |
|---|---|
| 3V3 / D13 / GND | DHT22 **+** / **out** / **−** |
| VIN (5V) | jalur **+** breadboard → relay **VCC** dan relay **COM** |
| GND | jalur **−** → relay **GND** dan kipas **−** |
| D14 | relay **IN** |
| relay **NO** | kipas **+** |

D12 (di antara D13 dan D14) **dikosongkan** (strapping pin, bikin upload gagal). Hanya kipas **DC 5V**.

---

## 2. Persiapan sekali di awal (sebelum P10)

- [ ] Link folder Drive P10–P13 ada di `tools/drive_folders.json`.
- [ ] Kalau bahan di `pNN/sumber/` atau `pNN/kode/` diubah, bangun ulang:
  ```
  py tools/build_bahan_ajar.py sma 10 11 12 13
  ```
  `PROMPT_*.md` dan `SCRIPT_*.gs` jangan diedit manual (tertimpa saat build).
- [ ] **Semua post-test P10–P13 berubah pada revisi 22 Okt 2026.** Form yang sudah pernah dibuat: hapus form +
  spreadsheet *Responses* lama di Drive, lalu Run ulang `SCRIPT_PNN_SMA.gs` (link form berubah → perbarui Linktree).
- [ ] **Bersihkan Drive Kode lama** (Apps Script tidak menghapus file): di `P10/SMA/Kode` hapus `P10_1_TesRelay`,
  `P10_2_TesDHT22`, `C1_P10_Easy_PindahPinRelay`, `C2_P10_Medium_TermostatTangan` (sudah diganti / dipindah ke P11).
- [ ] Ambil **PIN kelompok** dari `FAN_PINS` di `.env` server (`deploy/README.md`), tulis di kertas lipat per Device ID.
  Dipakai mulai P11 (tutor) dan P12 (siswa). Jangan dibacakan, jangan ditaruh di slide.
- [ ] Gradebook poin (kolom per siswa: +2, Easy, Medium, Hard, post-test). Pasangan: poin challenge untuk kedua anggota.
- [ ] Kit 6 set: ESP32 (stiker Device ID) + kabel USB **data**, breadboard, DHT22 3-pin, relay 1-channel 5V, kipas DC 5V,
  jumper merah/hitam/kuning/biru/oranye, obeng kecil. Cadangan: 1 DHT22, 1 relay, 2 kabel USB, 2 power bank.
- [ ] Satu **alat tutor** yang sudah jadi (rakitan + firmware + dashboard), dipakai untuk demo di P10–P12.

---

## 3. Siklus tiap pertemuan

### H-3 s.d. H-1
1. **Apps Script:** salin isi `pNN/SCRIPT_PNN_SMA.gs` → script.google.com → Run `jalankan`.
   Hasil di Drive `PNN/SMA/`: folder **Kode**, **Google Form** post-test, **Google Docs Panduan Pengajar**.
2. **Linktree** (`linktr.ee/InspiraLabs_SMA`): tombol "Post Test Pertemuan NN" → link form; link folder Kode.
3. **Gemini** (chat baru, Canvas): tempel seluruh `pNN/PROMPT_PNN_SMA.md` → Export Google Slides → ketik `LANJUT B` →
   Export Google Docs (Materi Ajar). Pindahkan ke `PNN/SMA/`. Cek checklist slide di `prompt/RUNBOOK.md`, plus:
   - [ ] Blok kode tampil di card **terang** (light mode, garis kiri gold), bukan card gelap.
   - [ ] Slide challenge berbadge **+5 / +10 / +15**, slide "Tanya Jawab (+2)" berbadge gold.
4. **Baca Panduan Pengajar** pertemuan itu; bagian *Persiapan H-1* berbeda tiap pertemuan (ringkasan di bagian 4).

### Hari H (15 menit sebelum kelas)
- Proyektor + slide, alat & dashboard tutor terbuka, tulis di papan sesuai Panduan Pengajar (WiFi kelas, aturan kabel).
- Duduk berdekatan: **sma-01 ↔ sma-02**, **sma-03 ↔ sma-04**, **sma-05 ↔ sma-06** (tetangga saling cek).

### Setelah kelas
- Rekap poin ke gradebook.
- Catat Device ID yang belum mencapai target "wajib" → kejar di awal pertemuan berikutnya (bagian 6).
- Alat dikumpulkan ke tutor **utuh** (kabel tetap tertancap), tidak dibawa pulang.

---

## 4. Persiapan khusus per pertemuan

### P10 — Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop
- [ ] **Flashdisk "Bengkel IoT"** (2–3 buah): installer Arduino IDE 2.3.10 (Windows `.exe`, Mac `arm64.dmg` & `64bit.dmg`),
  driver CP210x & CH340, 3 PDF Panduan Instalasi.
- [ ] Hindari unduhan board ±2 GB di kelas (pilih salah satu, **uji di 1 laptop H-1**):
  - salin folder `Arduino15` dari laptop yang sudah lulus 3 level (sesama OS; library DHT tetap via Level 3), atau
  - server kelas lokal untuk siswa Windows: `py tools/server_kelas.py` (cara pakai & batasan: `kurikulum/smp/README.md`
    bagian *Server kelas lokal*), atau
  - semua memilih board **esp32 2.0.17** (±0,8 GB); semua kode P10–P13 jalan di versi ini.
- [ ] Data laptop siswa: OS, 64-bit?, sisa disk ≥ 9 GB, password admin/Mac. 1–2 laptop cadangan yang sudah lulus 3 level.
- [ ] Tiap ESP32: stiker Device ID, upload `P10_1_KedipPertama` → LED biru (GPIO 2) harus kedip.
- [ ] 6 foto benda untuk game "Tebak Benda IoT", sticky note hijau & merah, 1 power bank.
- **Rencana B:** instalasi belum selesai → lanjut di 15 menit awal P11 (bukan PR).

### P11 — Rakit & Online: Smart Room Monitor Tampil di Dashboard
- [ ] Backend hidup: `https://api-ekskulcoding.inspiralabs.id/health` → `ok`; `sma-01` … `sma-06.inspiralabs.id` bisa dibuka.
- [ ] Paket per kelompok (Device ID & nama anggota sudah terisi):
  ```
  py tools/kelompok.py paket          → dist/paket/sma-01.zip … sma-06.zip
  ```
  Nama zip **= stiker Device ID**. Zip tertukar → data dua kelompok saling menimpa.
- [ ] **Set semua dashboard ke Manual + kipas OFF** (pakai PIN). Status awal server = Otomatis ambang 30°C, kipas bisa
  menyala sendiri dan membingungkan.
- [ ] WiFi kelas **2,4 GHz**, ada internet, **tanpa halaman login** + hotspot HP cadangan. Uji 1 alat → `200`.
- [ ] Di tiap laptop: buka `firmware/sma_room_monitor/sma_room_monitor.ino` dari zip → **Verify (✓)** sekali.
- [ ] Uji tiap relay & DHT22 dengan `P11_1_TesRelay` / `P11_2_TesDHT22`, tempel stiker "OK".
- [ ] Wokwi cadangan kit rusak: tempel isi `p11/wokwi/P11_PetaRakitan/` di wokwi.com (ESP32), simpan link.

### P12 — Kontrol Kipas dari Dashboard (Manual & Otomatis)
- [ ] Semua kelompok sudah `200` di P11 (yang belum → 10 menit pertama bersama tutor).
- [ ] Kertas PIN per Device ID siap dibagikan tertutup.
- [ ] Set semua dashboard: **Manual + OFF, ambang 30°C**.
- [ ] Uji 1 alat: tombol di HP → kipas berubah ≤ ±4 detik; Otomatis + genggam sensor → kipas menyala.

### P13 — Dashboard Punya Kita + Demo Day
- [ ] Semua alat masih mengirim data (buka `sma-01` … `sma-06`). Zip cadangan dari `py tools/kelompok.py paket` untuk
  kelompok yang folder P11-nya hilang.
- [ ] Coba sendiri snippet `panel_tips.txt` di satu folder kelompok (tips berubah saat sensor digenggam/ditiup).
- [ ] Laptop tutor siap deploy (repo ter-update, akses push `master`), tempat pengumpulan zip + daftar centang.
- [ ] Print rubrik Demo Day (Materi Ajar P13 → Khusus Tutor), WiFi kelas + 2 power bank.

---

## 5. Website kelompok online (P13, saat kelas berlangsung)

Per kiriman `sma-0X.zip` dari siswa:

```
py tools/kelompok.py deploy sma-04 D:\kiriman\sma-04.zip --dry-run   # cek dulu
py tools/kelompok.py deploy sma-04 D:\kiriman\sma-04.zip             # salin ke kelompok/sma-04/
```

Lalu sekali untuk semua kelompok yang sudah masuk:

```
git add kelompok/
git commit -m "deploy: website kelompok SMA P13"
git push                                   # master → server auto-deploy
```

Tool otomatis membuang `firmware/`, mengganti `api.js` dengan versi tutor, dan menolak kiriman tanpa `index.html`
atau > 10 MB (ke siswa disampaikan batas 5 MB). Buka `https://sma-0X.inspiralabs.id` di proyektor saat Demo Day.
Yang belum sempat di-deploy: tutor deploy setelah kelas, link dibagikan di grup (siswa tidak mengerjakan apa pun lagi).
Detail server: `deploy/README.md`.

---

## 6. Kalau ada yang tertinggal

| Kondisi | Kapan dikejar | Caranya |
|---|---|---|
| Laptop belum lulus Level 1–3 (P10) | 15 menit awal P11 (atau tutor setelah kelas) | Panduan Instalasi 1–3; laptop cadangan |
| Rakitan belum lolos / belum `200` (P11) | 10 menit pertama P12 | `P11_1_TesRelay` / `P11_2_TesDHT22` untuk memisahkan masalah relay vs sensor; tabel kode respons di Panduan P11 |
| Kipas belum nurut dashboard (P12) | Awal P13 | Mode Manual? PIN benar? Kipas kebalikan → `RELAY_ACTIVE_LOW` (Panduan P12) |
| Kustom dashboard belum selesai (P13) | Tidak dikejar | Minimal nama kelompok benar; zip dikumpulkan apa adanya |
| Kit rusak | Di kelas | Wokwi `P11_PetaRakitan`, ganti kit sebelum pertemuan berikutnya |

**Batas minimum yang tetap memenuhi goal:** angka DHT22 dari alat kelompok tampil di dashboard `sma-0X` dan kipas bisa
dinyalakan dari dashboard. Warna, panel tips, dan challenge adalah bonus.

---

## 7. Peta file

```
kurikulum/sma/
├── README.md                      ← file ini
├── p10/  Panduan_Pengajar_P10_SMA.md · PROMPT_P10_SMA.md · SCRIPT_P10_SMA.gs
│         sumber/ (PPT, Materi_Ajar, POST_TEST) · kode/P10_1_KedipPertama, C3_P10_Hard_PesanMorse
├── p11/  … · kode/P11_1_TesRelay, P11_2_TesDHT22 · wokwi/P11_PetaRakitan
├── p12/  … (tanpa kode, pakai firmware proyek)
└── p13/  … · kode/C3_P13_Hard_PanelTips/panel_tips.txt

sma/                               sumber firmware + dashboard (dipaketkan oleh tools/kelompok.py)
tools/kelompok.json                daftar Device ID & nama anggota
kelompok/sma-0X/                   website yang online di sma-0X.inspiralabs.id
backend/server.js                  API: data sensor, kontrol kipas, PIN (FAN_PINS)
```
