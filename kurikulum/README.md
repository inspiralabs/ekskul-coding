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
| 10 | Pasang Arduino IDE (3 level: IDE, board ESP32, library DHT) + kenalan komponen + upload Blink | Kenalan ESP32 + pasang Arduino IDE (IDE, board, library) + upload Kedip LED, challenge Morse |
| 11 | Kenalan sensor DHT22 (rakit 3 kabel), Serial Monitor + Serial Plotter, Detektif Sensor | Rakit DHT22 + relay + kipas, upload firmware proyek (isi WiFi), data tampil di dashboard kelompok |
| 12 | Firmware WiFi → `200` → dashboard, kustom dashboard (nama, judul, warna) | Kontrol kipas dari dashboard: manual (PIN) & otomatis (slider ambang) |
| 13 | Foto kelompok + rumah alat (kardus) + showcase, serahkan folder | Kustom dashboard (warna, aturan, panel tips) + website online + Demo Day |

P9–P13 fokus **perakitan hardware**: firmware & dashboard sudah jadi, siswa hanya isi WiFi dan kustom tampilan.
SMP & SMA P10–P13 dibuat **ringan, belajar sambil bermain**: tiap pertemuan 3 challenge (Easy +5, Medium +10, Hard +15),
Tanya Jawab +2 keaktifan, post-test Google Form, **tanpa PR/tugas rumah**. Cara menjalankan dari awal sampai deploy: `smp/README.md` dan `sma/README.md`.
Proyek per kelompok: `py tools/kelompok.py paket`; deploy ke `<id>.inspiralabs.id`: `deploy/README.md`.

Konvensi `Materi_Ajar_*.md`: **"Pembuka Materi"** = cover + pertanyaan pemantik di slide; **"Konten Reels"** = khusus tim InspiraLabs (tidak tampil di slide);
bagian **"KHUSUS TUTOR"** berisi kunci jawaban. Blok kode berawalan `// KODE BERBUG` sengaja salah; `// potongan` = cuplikan.
Isi slide (`sumber/PPT_*.md`) diturunkan dari Materi Ajar — kalau satu diubah, sesuaikan yang lain.
