# Kurikulum Ekskul Coding — Semester 1 TP 2026/2027

Bahan ajar per jenjang & pertemuan. Silabus: `docs/SILABUS EKSTRAKURIKULER SEM 1 TP.2026_2027 - Google Sheets.pdf`.
Folder ini **tidak di-deploy** (lihat `.vercelignore`). Cara pakai: `prompt/RUNBOOK.md`.

```
kurikulum/
├── panduan-instalasi/           Arduino IDE, board ESP32/ESP8266, library (Windows & Mac, .docx + .pdf)
├── sma/
│   ├── p06..p08/                web (HTML/CSS/JS), file .html live coding
│   └── p09..p13/
│       ├── PROMPT_Pn_SMA.md     ← tempel ke Gemini: Google Slides + Google Docs   (DIBUAT OTOMATIS)
│       ├── SCRIPT_Pn_SMA.gs     ← jalankan di Apps Script: folder, kode, post-test (DIBUAT OTOMATIS)
│       ├── sumber/              bahan baku yang diedit: Materi_Ajar, PPT (isi slide), POST_TEST
│       └── kode/                Pn_k_*/Pn_k_*.ino atau .html (live coding), C1..C3_*/…ino atau .html (challenge)
└── smp/p09..p13/                pola sama: PROMPT_Pn_SMP.md, SCRIPT_Pn_SMP.gs, sumber/, kode/
```

`PROMPT_*` dan `SCRIPT_*` dibangun oleh `python tools/build_bahan_ajar.py sma` / `smp` dari `sumber/`, `kode/`,
`prompt/TEMPLATE_PROMPT_PERTEMUAN.md`, dan link Drive di `tools/drive_folders.json`.

| P | SMP (Jum'at) | SMA (Sabtu) |
|---|---|---|
| 9 | Kenal ESP32, breadboard, rakit LED (tanpa coding) | Pinout, DHT22, relay, active-LOW (tanpa coding) |
| 10 | Upload program jadi (Blink) + rakit DHT22 | Rakit DHT22 + relay + kipas, upload program tes jadi |
| 11 | Upload firmware proyek, Serial Monitor, troubleshooting kabel | Upload firmware proyek, data ke dashboard |
| 12 | WiFi → dashboard, kustom dashboard (nama, warna, foto) | Kontrol kipas dari dashboard, mode otomatis |
| 13 | Rapikan rakitan + showcase, serahkan folder | Rapikan rakitan + kustom dashboard + showcase, serahkan folder |

P9–P13 fokus **perakitan hardware**: firmware & dashboard sudah jadi, siswa hanya isi WiFi dan kustom tampilan.
Proyek per kelompok: `py tools/kelompok.py paket`; deploy ke `<id>.inspiralabs.id`: `deploy/README.md`.

Konvensi `Materi_Ajar_*.md`: **"Pembuka Materi"** = cover + pertanyaan pemantik di slide; **"Konten Reels"** = khusus tim InspiraLabs (tidak tampil di slide);
bagian **"KHUSUS TUTOR"** berisi kunci jawaban. Blok kode berawalan `// KODE BERBUG` sengaja salah; `// potongan` = cuplikan.
Isi slide (`sumber/PPT_*.md`) diturunkan dari Materi Ajar — kalau satu diubah, sesuaikan yang lain.
