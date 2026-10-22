# RUNBOOK — Bahan Ajar per Pertemuan

Per pertemuan per jenjang (SMP & SMA) cukup **2 file** di `kurikulum/<jenjang>/pNN/`:

| File | Dijalankan di | Menghasilkan |
|---|---|---|
| `PROMPT_Pn_<JENJANG>.md` | **Gemini** (chat baru, Canvas aktif) | **A.** Google Slides · **B.** Google Docs Materi Ajar (berisi script Reels, post-test, kunci) |
| `SCRIPT_Pn_<JENJANG>.gs` | **Apps Script** (1× Run) | Folder Drive `Pn/<JENJANG>` + subfolder **Kode** (folder sketch Arduino `.ino`, file .html) + **Google Form** post-test + **Google Docs Panduan Pengajar** |

```
Drive: Pn/
└── SMP/ dan SMA/   (isi sama per jenjang)
    ├── Pn <JENJANG> — <judul>                     ← Google Slides (dari PROMPT, bagian A)
    ├── Materi Ajar Pn <JENJANG> — <judul>         ← Google Docs   (dari PROMPT, bagian B)
    ├── POST TEST - Pertemuan n - <JENJANG>        ← Google Form   (dari SCRIPT)
    ├── POST TEST - Pertemuan n - <JENJANG> (Responses)
    ├── Panduan Pengajar Pn <JENJANG> — <judul>   ← Google Docs (dari SCRIPT, sumber: pNN/Panduan_Pengajar_Pn_<JENJANG>.md)
    └── Kode/                                ← dari SCRIPT
        ├── BACA_DULU.txt
        ├── Pn_1_.../Pn_1_....ino / .html    ← live coding (1 folder per sketch Arduino)
        └── C1/C2/C3_Pn_.../....ino / .html  ← challenge
```

## Langkah 1 — Apps Script (folder, kode, post-test)

1. Buka `kurikulum/<smp|sma>/pNN/SCRIPT_Pn_<JENJANG>.gs`, salin seluruh isinya.
2. https://script.google.com → **New project** → hapus isi `Code.gs` → tempel → **💾 Save**.
3. Kalau baris `const FOLDER_PERTEMUAN = "TEMPEL_LINK_FOLDER_..."`, ganti dengan link folder Drive pertemuan itu.
   (Lebih rapi: isi linknya di `tools/drive_folders.json`, lalu minta saya/jalankan build ulang.)
4. Pilih fungsi **`jalankan`** → **▶ Run** → pertama kali: *Review permissions* → pilih akun → *Advanced → Go to (unsafe)* → **Allow**.
5. Execution log menampilkan link folder & link form. **Pasang link form di Linktree** sebagai tombol "Post Test Pertemuan n".
6. Pasang juga link folder **Kode** di Linktree (slide challenge menyuruh siswa mengunduh dari sana).

Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder & form tidak dobel.
**Post-test yang soalnya berubah:** form lama tidak ikut diperbarui. Hapus form + spreadsheet Responses lama di Drive, lalu Run lagi (link form berubah, perbarui Linktree).

## Langkah 2 — Gemini (Slides + Docs)

1. Gemini → **chat baru** → aktifkan **Canvas**.
2. Salin **seluruh** isi `kurikulum/<smp|sma>/pNN/PROMPT_Pn_<JENJANG>.md` → kirim. Gemini membuat **Google Slides**.
3. Cek slide (lihat checklist), lalu **Export → Google Slides**.
4. Ketik **`LANJUT B`** → Gemini membuat **Google Docs Materi Ajar** → **Export → Google Docs**.
5. Hasil export masuk ke **My Drive** → klik kanan → **Organize / Move** ke `Pn/SMP` atau `Pn/SMA`.

Checklist Slides:
- [ ] Slide 1 Linktree + QR, slide 2 Cover (judul + tagline), slide 3 Pertanyaan Pemantik
- [ ] Emoji minim (tidak ada emoji tambahan dari Gemini)
- [ ] Agenda → per topik: materi → Forum Diskusi / Tanya Jawab → Challenge (TOPIK X DARI N, badge EASY/MEDIUM/HARD, badge poin sesuai judul)
- [ ] Evaluasi Mandiri (post-test via Linktree) → Terima kasih
- [ ] Diagram wiring cocok dengan bagian `wiring` di prompt (pin, warna kabel, kaki LED). Salah → minta perbaikan / pakai screenshot wokwi.com
- [ ] Speaker notes terisi, tidak ada teks "🗣️ SPEAKER NOTES" di slide

## Mengubah materi

Edit bahan baku di `kurikulum/<smp|sma>/pNN/sumber/` (Materi Ajar, isi slide, post-test) atau `kode/`, lalu bangun ulang:

```
python tools/build_bahan_ajar.py sma        # semua pertemuan SMA
python tools/build_bahan_ajar.py smp        # semua pertemuan SMP
python tools/build_bahan_ajar.py smp 10     # P10 SMP saja
```

`PROMPT_*.md` dan `SCRIPT_*.gs` jangan diedit manual (akan tertimpa saat build).

## Proyek akhir per kelompok

Folder proyek (dashboard + firmware) **tidak** lewat Drive `Kode/` — tiap kelompok dapat zip sendiri
dengan Device ID & nama anggota sudah terisi: `py tools/kelompok.py paket` → `dist/paket/<id>.zip`.
Deploy website kelompok: `deploy/README.md`.
