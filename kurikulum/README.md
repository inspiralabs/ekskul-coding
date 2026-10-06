# Kurikulum Ekskul Coding — Semester 1 TP 2026/2027

Bahan ajar per jenjang & pertemuan. Silabus: `docs/SILABUS EKSTRAKURIKULER SEM 1 TP.2026_2027 - Google Sheets.pdf`.
Folder ini **tidak di-deploy** (lihat `.vercelignore`).

```
kurikulum/
├── platformio-starter/          proyek PlatformIO bersama (P10–P13): salin isi .cpp ke src/main.cpp
├── smp/p09..p13/
└── sma/
    ├── p06..p08/                web (HTML/CSS/JS), file .html live coding
    └── p09..p13/
```

Isi tiap folder pertemuan IoT (pola sama dengan folder Drive P8):

| File | Untuk | Dibagikan ke siswa? |
|---|---|---|
| `P{n}_{k}_<Topik>.cpp` | Kode live coding (urut sesuai slide) | ✅ |
| `C{1,2,3}_P{n}_<Easy/Medium/Hard>_<Judul>.cpp` | Starter challenge (TODO / kode berbug) | ✅ |
| `PPT_P{n}_<SMP/SMA>_InspiraLabs.md` | Bahan PPT (1 blok `---` = 1 slide) | ✅ (sebagai PPT) |
| `Materi_Ajar_P{n}_<SMP/SMA>_InspiraLabs.md` | Pegangan tutor lengkap + kunci jawaban → docx | ❌ |
| `POST_TEST_P{n}_<SMP/SMA>_InspiraLabs.md` | Soal + kunci → Google Form (quiz) | ❌ (lewat Form) |
| `Script_Reels_P{n}_<SMP/SMA>_InspiraLabs.md` | Script konten Reels → docx | ❌ |

P9 tanpa coding dan P13 memakai file proyek akhir (`smp/`, `sma/`), jadi keduanya tidak punya file `.cpp`.

| P | SMP (Jum'at) | SMA (Sabtu) |
|---|---|---|
| 9 | ESP32, breadboard, LED, resistor (tanpa coding) | Pinout, DHT22, relay, active-LOW (tanpa coding) |
| 10 | Blink LED: setup/loop, `#define`, Serial | Digital I/O + DHT22 + relay, termostat, `millis()` |
| 11 | Baca DHT22 + `isnan` | WiFi + HTTP POST JSON (monitoring) |
| 12 | WiFi + kirim ke dashboard (proyek akhir) | ESP32 web server (route, handler) |
| 13 | Showcase + refleksi | `handleFanCommand` + mode otomatis + showcase |

Konvensi `Materi_Ajar_*.md`: bagian **"🎬 SLIDE HOOK"** = penanda tim InspiraLabs mulai merekam;
bagian **"KHUSUS TUTOR"** berisi kunci jawaban (jangan ditampilkan ke siswa).
Blok kode berawalan `// KODE BERBUG` sengaja salah; `// potongan` = cuplikan, bukan program utuh.

`PPT_*.md`, `POST_TEST_*.md`, dan file `.cpp` diturunkan dari `Materi_Ajar_*.md`. Kalau materi ajar diubah, file turunannya ikut disesuaikan.
