# Runbook SMP P10–P13 — Smart Room Monitor Junior

**Goal akhir:** setiap Device ID (`smp-01` … `smp-13`) punya alat ESP32 + DHT22 yang mengirim suhu &amp; kelembapan
ke **dashboard-nya sendiri**, online di `https://smp-XX.inspiralabs.id`.

**Pola mengajar:** belajar sambil bermain. Semua kode **diberikan jadi**; siswa tidak menulis program dari nol.
Tiap pertemuan: 3 challenge (Easy **+5**, Medium **+10**, Hard **+15**), Tanya Jawab **+2** keaktifan,
post-test 5 soal (Google Form), **tanpa PR**.


| Dokumen                           | Isi                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| `pNN/Panduan_Pengajar_PNN_SMP.md` | Timeline per menit, kalimat kunci, troubleshooting (dibaca tutor sebelum tiap kelas) |
| `pNN/sumber/`                     | Bahan baku: isi slide, Materi Ajar + kunci, post-test                                |
| `prompt/RUNBOOK.md`               | Cara detail menjalankan Apps Script &amp; Gemini                                     |
| `deploy/README.md`                | Deploy website kelompok ke `smp-XX.inspiralabs.id`                                   |
| `docs/HANDOUT_SISWA.md`           | Daftar Device ID &amp; nama anggota                                                  |


---

## 1. Peta 4 pertemuan


| P      | Tanggal             | Topik                                                   | Kode yang dibagikan                                                           | Yang diketik/diubah siswa                                                             | **Wajib tercapai**                                              |
| ------ | ------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **10** | Jum'at, 23 Okt 2026 | Pasang Arduino IDE (3 level) + kenalan komponen + Blink | `P10_1_Blink`, `P10_2_CekDHT22` (Drive Kode P10)                              | Tidak ada (challenge: angka `delay`, `LED_PIN`)                                       | Arduino IDE + board ESP32 + library DHT terpasang, LED berkedip |
| **11** | Jum'at, 30 Okt 2026 | Kenalan sensor DHT22 + Serial Plotter                   | `P11_1_BacaDHT22` (Drive Kode P11)                                            | Tidak ada; merakit 3 kabel (+ 3V3, out D4, − GND)                                     | Angka suhu muncul di Serial Monitor                             |
| **12** | Jum'at, 6 Nov 2026  | Firmware WiFi → dashboard + kustom                      | Zip `smp-XX` per kelompok (firmware + dashboard) + `P12_1_TesWiFi` (cadangan) | `WIFI_SSID`, `WIFI_PASSWORD`; teks nama/judul di `index.html`; 3 warna di `style.css` | `kode respons: 200` **dan** angka alat tampil di dashboard      |
| **13** | Jum'at, 13 Nov 2026 | Foto + rumah alat (kardus) + showcase                   | —                                                                             | `foto-kelompok.jpg`, lalu zip folder                                                  | Zip `smp-XX.zip` terkumpul, website online                      |


**Titik kritis:** goal tercapai di **P12**. P13 sekaligus jadi buffer untuk kelompok yang belum dapat `200`.

---

## 2. Persiapan sekali di awal (sebelum P10)

- [ ] Link folder Drive P10–P13 sudah ada di `tools/drive_folders.json`.
- [ ] Kalau bahan di `pNN/sumber/` atau `pNN/kode/` diubah, bangun ulang:
  ```
  py tools/build_bahan_ajar.py smp 10 11 12 13
  ```

  `PROMPT_*.md` dan `SCRIPT_*.gs` jangan diedit manual (tertimpa saat build).
- [ ] **Post-test P10, P11, P12 berubah pada revisi 22 Okt 2026.** Kalau form-nya sudah pernah dibuat sebelum itu:

  hapus form + spreadsheet *Responses* lama di Drive, lalu Run ulang `SCRIPT_PNN_SMP.gs` (link form berubah → perbarui Linktree).
  Post-test P13 tidak berubah.
- [ ] Hapus file lama `P11/SMP/Kode/P11_2_TesWiFi` di Drive (sudah dipindah ke P12 sebagai `P12_1_TesWiFi`).
- [ ] Siapkan gradebook poin (kolom per siswa: +2, Easy, Medium, Hard, post-test). Leaderboard membaca gradebook ini.
- [ ] Installer **Arduino IDE 2.3.10** (Windows `.exe`, Mac Apple Silicon &amp; Intel `.dmg`): untuk siswa Windows bagikan lewat

  **server kelas lokal** (bagian 4, setelah P10); flashdisk 2–3 buah tetap disiapkan sebagai cadangan dan untuk siswa Mac.
- [ ] Belanja/pinjam: power bank untuk 13 alat (dipakai P12–P13), 13 kardus kecil (P13), kabel USB **data** cadangan.

---

## 3. Siklus tiap pertemuan

### H-3 s.d. H-1

1. **Apps Script:** salin isi `pNN/SCRIPT_PNN_SMP.gs` → script.google.com → Run `jalankan`.
 Hasil di Drive `PNN/SMP/`: folder **Kode**, **Google Form** post-test, **Google Docs Panduan Pengajar**.
2. **Linktree** (`linktr.ee/InspiraLabs_SMP`): tombol "Post Test Pertemuan NN" → link form; link folder Kode.
3. **Gemini** (chat baru, Canvas): tempel seluruh `pNN/PROMPT_PNN_SMP.md` → Export Google Slides → ketik `LANJUT B` →
 Export Google Docs (Materi Ajar). Pindahkan keduanya ke `PNN/SMP/`. Cek checklist slide di `prompt/RUNBOOK.md`.
4. **Baca Panduan Pengajar** pertemuan itu (bagian Persiapan H-1 berbeda tiap pertemuan, lihat bagian 4 di bawah).

### Hari H (15 menit sebelum kelas)

- Proyektor + slide, tulis di papan sesuai Panduan Pengajar, siapkan kertas pencatat poin.

### Setelah kelas

- Rekap poin ke gradebook.
- Catat Device ID yang belum mencapai target "wajib" → datangi duluan di awal pertemuan berikutnya.

---

## 4. Persiapan khusus per pertemuan

### P10 — Pasang Arduino IDE &amp; Kedipkan LED Pertamamu

- [ ] Tes kecepatan WiFi kelas. Lambat → semua kelompok pilih board **esp32 versi 2.0.17** (±0,8 GB, bukan ±2 GB).
- [ ] Siapkan **2–3 laptop cadangan** yang sudah lulus semua level + pernah upload Blink.
- [ ] Laptop sekolah butuh password Administrator? Siapkan orangnya, atau pakai opsi *Only for me*.
- [ ] Meja "Tebak Komponen": ESP32, breadboard, LED, resistor, jumper, DHT22, kabel USB data + charger, power bank.

- **Rencana B:** unduhan board belum selesai di menit 40 → kelompok itu upload Blink di laptop cadangan.
Sisa instalasi diselesaikan **tutor setelah kelas** (bukan PR siswa), sebelum P11.

### Server kelas lokal (opsional, siswa Windows)

Laptop pengajar membagikan installer Arduino IDE, **board ESP32**, dan zip proyek lewat WiFi kelas, jadi bagian
yang besar (±2 GB per laptop) tidak lewat internet. Internet tetap dibutuhkan untuk beberapa unduhan kecil (lihat Batasan).
Board diambil dari Arduino IDE laptop pengajar sendiri (`%LOCALAPPDATA%\Arduino15`, versi yang sudah terpasang, mis. 3.3.12).

**H-1**

- [ ] Laptop pengajar sudah terpasang board **esp32 3.3.12** (Panduan Instalasi 2).
- [ ] Taruh `arduino-ide_2.3.10_Windows_64bit.exe` (dan file lain yang mau dibagikan) di `dist/kelas/`.
- [ ] Coba dari **1 laptop Windows lain** di WiFi kelas: buka halaman server, INSTALL board dari alamat lokal,

  pastikan **ESP32 Dev Module** muncul dan Blink bisa di-upload. Jangan dipakai di kelas sebelum tes ini lulus.

**Di kelas**

```
py tools/server_kelas.py            # atau --port 8080 kalau port 8000 dipakai
py tools/server_kelas.py cek        # self-check (opsional)
```

- WiFi sekolah biasanya dianggap **Public** oleh Windows 11. Ubah dulu: *Settings → Network &amp; internet → Wi-Fi →
(nama WiFi) → Network profile type → **Private***. Lalu saat jendela **Windows Firewall** muncul → centang
*Private networks* → **Allow**. Kalau profil dibiarkan Public, siswa tidak bisa membuka halamannya.
- Sambungkan laptop pengajar ke router/access point dengan **kabel LAN** kalau bisa (lebih dari 2× lebih cepat).
- Proyeksikan alamat bertanda `<- utama (WiFi)`, mis. `http://192.168.1.10:8000`. Halaman itu berisi 3 bagian:
installer, alamat board ESP32, dan folder proyek `smp-01`…`sma-06` (zip dibangun ulang otomatis saat server start).
- Siswa: *File → Preferences → Additional boards manager URLs* → **hapus alamat Espressif, isi hanya alamat lokal** →
Boards Manager → `esp32` → INSTALL. Mulai di awal kelas, lalu isi waktu menunggu dengan game Tebak Komponen.
- Setelah kelas boleh dikembalikan ke alamat Espressif. Kalau server pengajar mati, Arduino IDE menampilkan error unduh
index saat dibuka, tapi board yang sudah terpasang tetap jalan.

**Batasan**

- Hanya **Windows 64-bit**. Siswa Mac pakai flashdisk/internet seperti biasa.
- **Tetap butuh internet** (kecil): tool `dfu-util` (wajib untuk board esp32 3.3.12; kalau gagal, INSTALL board gagal),
index utama Arduino, alat bawaan Arduino IDE saat pertama dibuka, dan library DHT.
- Kecepatan = WiFi kelas dibagi semua laptop: 13 × ±2 GB ≈ 26 GB. Lewat WiFi 50–100 Mbps itu ±35–70 menit untuk
satu kelas penuh, jadi mulai di awal kelas, gilir per 4–5 laptop, atau pakai kabel LAN di laptop pengajar.
Versi 2.0.17 tidak tersedia di server ini (hanya versi di cache).
- Banyak WiFi sekolah memblokir antar-laptop. Kalau halaman tidak bisa dibuka dari laptop siswa, pakai router sendiri
yang **tetap tersambung internet** (mis. lewat tethering HP), karena unduhan kecil di atas tetap butuh internet.
Hotspot bawaan Windows maksimal 8 perangkat.

### P11 — Kenalan Sensor DHT22

- [ ] Semua laptop sudah lulus Level 2 &amp; 3 dari P10. Verify `P11_1_BacaDHT22.ino` sekali di tiap laptop.
- [ ] Rakit 1 DHT22 sendiri, coba **Serial Plotter** + tiup sensornya (untuk demo di proyektor).
- [ ] Buka `ekskulcoding.inspiralabs.id/sabotase/` di HP (Challenge Hard "Detektif Sensor").

### P12 — Kirim Suhu ke Internet &amp; Dashboard-mu

- [ ] Buat paket per kelompok (Device ID &amp; nama anggota sudah terisi otomatis):
  ```
  py tools/kelompok.py paket          → dist/paket/smp-01.zip … smp-13.zip
  ```
- [ ] Extract `smp-XX.zip` di laptop kelompok itu (mis. Desktop), tempel stiker `smp-XX` di laptop.

  Buka `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` → **Verify** sekali. Pastikan **VS Code** terpasang.
  Jangan pakai salinan umum `smp/`: Device ID-nya generik, data kelompok bisa saling menimpa.
- [ ] WiFi kelas **2.4 GHz** + hotspot HP cadangan. Uji dengan 1 board: harus dapat `200`.
- [ ] Backend hidup: `https://api-ekskulcoding.inspiralabs.id/health`.
- [ ] Charge semua power bank.

### P13 — Sempurnakan Alat &amp; Showcase

- [ ] 13 kardus kecil + double tape, selotip, spidol, label, gunting; **cutter dipegang tutor**.
- [ ] Undian urutan showcase, timer, rubrik (Materi Ajar P13 → Khusus Tutor).
- [ ] Flashdisk / folder Drive "Zip P13 SMP" untuk menerima `smp-XX.zip`.
- [ ] Izin sekolah untuk foto siswa di website &amp; konten Reels.

---

## 5. Setelah P13: website kelompok online

Per kiriman `smp-XX.zip` dari siswa:

```
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip --dry-run   # cek dulu
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip             # salin ke kelompok/smp-07/
```

Lalu sekali untuk semua kelompok:

```
git add kelompok/
git commit -m "deploy: website kelompok SMP P13"
git push                                   # master → server auto-deploy
```

Tool otomatis membuang `firmware/`, mengganti `api.js` dengan versi tutor, dan menolak kiriman tanpa `index.html`
atau &gt; 10 MB (ke siswa disampaikan batas 5 MB). Buka ke-13 alamat `https://smp-XX.inspiralabs.id`, cek foto &amp; angka
sensor tampil, lalu bagikan link ke grup. Detail server: `deploy/README.md`.

---

## 6. Kalau ada yang tertinggal


| Kondisi                              | Kapan dikejar                          | Caranya                                                                |
| ------------------------------------ | -------------------------------------- | ---------------------------------------------------------------------- |
| Laptop belum lulus Level 2/3 (P10)   | Setelah kelas P10, sebelum P11         | Tutor menyelesaikan instalasi (Panduan Instalasi 2 &amp; 3)            |
| Sensor belum terbaca (P11)           | 10 menit pertama P12                   | Checklist rakit P11: + 3V3, out D4, − GND                              |
| Belum `200` (P12)                    | 10 menit pertama P13                   | Tabel "Kalau Belum 200" (P12); `P12_1_TesWiFi.ino` untuk cek WiFi saja |
| Kustom dashboard belum selesai (P12) | P13, sambil Perakit membuat rumah alat | Minimal nama kelompok benar; warna boleh tetap default                 |
| Zip belum terkumpul (P13)            | Saat post-test / setelah kelas         | Tutor zip langsung dari laptop kelompok                                |


**Batas minimum yang tetap memenuhi goal:** angka DHT22 dari alat kelompok tampil di dashboard `smp-XX`,
nama kelompok benar. Warna, foto, rumah alat, dan challenge adalah bonus.

---

## 7. Peta file

```
kurikulum/smp/
├── README.md                      ← file ini
├── p10/  Panduan_Pengajar_P10_SMP.md · PROMPT_P10_SMP.md · SCRIPT_P10_SMP.gs
│         sumber/ (PPT, Materi_Ajar, POST_TEST) · kode/P10_1_Blink, P10_2_CekDHT22
├── p11/  … · kode/P11_1_BacaDHT22
├── p12/  … · kode/P12_1_TesWiFi
└── p13/  … (tanpa kode)

smp/                               sumber firmware + dashboard (dipaketkan oleh tools/kelompok.py)
tools/kelompok.json                daftar Device ID & nama anggota
kurikulum/panduan-instalasi/       Panduan 1–3 instalasi Arduino IDE, board ESP32, library (Windows & Mac)
sabotase/                          halaman Kartu Sabotase (Challenge Hard P11)
```

