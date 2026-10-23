# Ekskul Coding Asy Syahid — InspiraLabs

Repo ekstrakurikuler coding SMP & SMA Sekolah Qur'an Asy Syahid (Semester 1, TP 2026/2027): website ekskul, bahan
ajar per pertemuan, proyek IoT Smart Room Monitor (ESP32 + DHT22), dan alat bantu tutor.

## Saya tutor, mau…

| Mau apa | Baca |
|---|---|
| Menjalankan **post-test**, membagikan paket proyek & dashboard di kelas | [`docs/PANDUAN_SERVER_KELAS.md`](docs/PANDUAN_SERVER_KELAS.md) |
| Mengajar SMP P10–P13 (persiapan, slide, deploy) | [`kurikulum/smp/README.md`](kurikulum/smp/README.md) |
| Mengajar SMA P10–P13 | [`kurikulum/sma/README.md`](kurikulum/sma/README.md) |
| Memahami perubahan materi IoT P10–P13 | [`docs/SOSIALISASI_PENGAJAR_IOT_P10-P13.md`](docs/SOSIALISASI_PENGAJAR_IOT_P10-P13.md) (juga `.docx`) |
| Membuat slide & Google Form dari bahan ajar | [`prompt/RUNBOOK.md`](prompt/RUNBOOK.md) |
| Memasang Arduino IDE, board ESP32, library | `kurikulum/panduan-instalasi/` |
| Daftar kelompok, Device ID, website siswa | [`docs/HANDOUT_SISWA.md`](docs/HANDOUT_SISWA.md) |
| Membuat portofolio & sertifikat siswa | [`docs/PORTOFOLIO_SISWA.md`](docs/PORTOFOLIO_SISWA.md) |
| Tahu file mana yang boleh diubah siapa | [`docs/SIAPA_BOLEH_UBAH_APA.md`](docs/SIAPA_BOLEH_UBAH_APA.md) |

## Alat (folder `tools/`, Python)

| Perintah | Gunanya |
|---|---|
| `py tools/server_kelas.py --tes smp-10` | Server kelas: post-test (nilai ke `.xlsx`), paket proyek, dashboard |
| `py tools/kelompok.py paket` | Zip proyek per kelompok (Device ID & nama sudah terisi) |
| `py tools/kelompok.py deploy <id> <zip>` | Terbitkan website kelompok ke `<id>.inspiralabs.id` (lihat `deploy/README.md`) |
| `py tools/build_bahan_ajar.py smp 10` | Bangun prompt slide (Gemini) & Apps Script post-test dari `kurikulum/` |
| `py tools/portofolio.py bangun …` | Halaman portofolio & sertifikat per siswa dari spreadsheet penilaian |

Setiap alat punya self-check: `py tools/<nama>.py cek`. Di Mac, ganti `py` dengan `python3`.

## Isi repo

| Folder | Isi |
|---|---|
| `index.html`, `leaderboard/`, `materi/`, `tentang/`, `sabotase/`, `shared/`, `demo/` | Website ekskul (Vercel, `ekskulcoding.inspiralabs.id`) |
| `smp/`, `sma/` | Templat proyek akhir: firmware ESP32 + dashboard |
| `kelompok/` | Website kelompok yang sudah diterbitkan |
| `kurikulum/` | Bahan ajar per jenjang & pertemuan |
| `backend/`, `deploy/` | Server data sensor & deploy ke VPS (khusus pengelola) |
| `tools/` | Alat bantu tutor (tabel di atas) |
| `docs/`, `prompt/` | Panduan, silabus, template prompt |
