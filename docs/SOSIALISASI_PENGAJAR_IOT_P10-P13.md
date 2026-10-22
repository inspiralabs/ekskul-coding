# Sosialisasi ke Pengajar — Materi IoT P10–P13 (SMP & SMA)

Dokumen ini untuk **menjelaskan perubahan materi IoT P10–P13 ke sesama pengajar ekskul**.
Isinya: pesan singkat untuk grup WhatsApp, naskah briefing ±20 menit, penjelasan isi file zip, dan FAQ.

---

## A. Pesan singkat untuk grup pengajar (siap tempel)

> Assalamu'alaikum, rekan-rekan pengajar ekskul coding 🙏
>
> Ada perubahan untuk materi **IoT P10–P13 (SMP & SMA)**. Intinya:
>
> 1. **Goal ekskul tetap sama:** alat ESP32 + sensor DHT22 tiap kelompok mengirim suhu ke **dashboard kelompoknya sendiri** (SMA plus kontrol kipas lewat relay), lalu website-nya online di `smp-XX.inspiralabs.id` / `sma-XX.inspiralabs.id`.
> 2. **Caranya dibuat lebih ringan:** kode Arduino dan web dashboard **sudah jadi** dan dibagikan per kelompok dalam bentuk **zip**. Siswa tidak menulis program dari nol, cukup merakit, upload, isi WiFi, dan mengutak-atik bagian kecil (angka, teks, warna).
> 3. **Format kelas sama untuk semua pertemuan:** 3 challenge (Easy +5, Medium +10, Hard +15), Tanya Jawab +2 keaktifan, post-test Google Form, **tanpa PR**.
> 4. Tools pakai **Arduino IDE** (bukan PlatformIO lagi). P10 = belajar instalasi Arduino IDE bareng siswa.
>
> Detail per pertemuan ada di **Panduan Pengajar** (Google Docs di folder Drive tiap pertemuan). Insya Allah kita briefing singkat ±20 menit sebelum P10 untuk menyamakan cara mengajar. Jazakumullah khairan.

---

## B. Naskah briefing (±20 menit)

### 1. Kenapa berubah? (3 menit)

> "Materi P10–P13 sebelumnya terlalu berat untuk waktu yang tersisa: siswa diharapkan menulis C++ dan merakit cukup banyak, padahal cuma ada 4 pertemuan dan sebagian besar siswa masih awam hardware. Risikonya: satu error compile atau satu kabel salah bisa menghabiskan satu pertemuan, dan goal proyek akhir tidak tercapai.
>
> Jadi kita balik prioritasnya: **yang penting goal tercapai dan siswa penasaran**. Kode kita siapkan jadi, siswa jadi 'engineer' yang merakit, meng-upload, membaca pesan alat, dan mengutak-atik."

### 2. Prinsip mengajar yang sama untuk SMP & SMA (4 menit)

| Prinsip | Artinya di kelas |
|---|---|
| **Kode diberikan jadi** | Siswa tidak menulis program dari nol. Yang diubah hanya "zona hijau" (WiFi, pin) dan bagian tampilan (teks, warna). |
| **Belajar sambil bermain** | Instalasi dibuat seperti level game, waktu menunggu unduhan diisi game, sensor ditiup sambil melihat grafik. |
| **Materi singkat, langsung praktek** | Jangan ceramah > 5–6 menit tanpa kegiatan. Satu ide per slide. |
| **Bantu dengan pertanyaan** | Jangan ambil alih mouse/kabel. Tanya: "Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?" |
| **Poin seragam** | Tanya Jawab **+2** (bertanya/menjawab, benar atau salah), Easy **+5**, Medium **+10**, Hard **+15**. Poin challenge untuk setiap anggota kelompok. |
| **Tanpa PR** | Yang belum selesai dikejar di awal pertemuan berikutnya atau diselesaikan pengajar, bukan dibawa pulang siswa. Bahan (kardus, power bank) disiapkan pengajar. |
| **Post-test** | 5 soal pilihan ganda di Google Form, dikerjakan sendiri-sendiri di akhir kelas. Link lewat Linktree. |

### 3. Alur 4 pertemuan (5 menit)

**SMP (Jum'at)** — fokus: ESP32 + DHT22 → dashboard

| P | Tanggal | Topik | Target wajib |
|---|---|---|---|
| 10 | 23 Okt 2026 | Pasang Arduino IDE (3 level: aplikasi, board ESP32, library DHT) + kenalan komponen + upload Blink | Arduino IDE siap, LED berkedip |
| 11 | 30 Okt 2026 | Kenalan sensor DHT22 (3 kabel) + Serial Monitor & Serial Plotter (tiup sensor → grafik) | Angka suhu muncul |
| 12 | 6 Nov 2026 | Isi WiFi di firmware → `kode respons: 200` → angka tampil di dashboard; kustom nama/judul/warna | **Data tampil di dashboard kelompok** |
| 13 | 13 Nov 2026 | Foto kelompok + "rumah alat" dari kardus + showcase + serah zip | Website online |

**SMA (Sabtu)** — fokus: ESP32 + DHT22 + relay + kipas → dashboard dua arah

| P | Topik | Target wajib |
|---|---|---|
| 10 | Kenalan ESP32 + pasang Arduino IDE (IDE, board, library) + upload Kedip LED (Hard: pesan Morse) | Arduino IDE siap, LED berkedip |
| 11 | Rakit DHT22 + relay + kipas, upload firmware proyek (isi WiFi), data tampil di dashboard | **Data tampil di dashboard kelompok** |
| 12 | Kontrol kipas dari dashboard: manual (pakai PIN kelompok) & otomatis (slider ambang suhu) | Kipas bisa dikontrol dari website |
| 13 | Kustom dashboard + website online + Demo Day | Website online, presentasi |

Tanggal SMA mengikuti kolom *Tanggal* di Materi Ajar tiap pertemuan.

> Tekankan: **titik kritis SMP ada di P12, SMA di P11.** Setelah itu goal sudah tercapai; pertemuan sisanya untuk memperkaya dan jadi buffer bagi yang tertinggal.

### 4. Isi file zip per kelompok (5 menit) — bagian paling penting

Zip dibuat oleh admin/koordinator dengan satu perintah:

```
py tools/kelompok.py paket      → dist/paket/smp-01.zip … smp-13.zip, sma-01.zip … sma-06.zip
```

Setiap kelompok/individu punya **zip sendiri** (19 zip: 13 SMP, 6 SMA). Isinya:

```
smp-07/                                   (SMA: sma-04/, isinya sejenis)
├── firmware/smp_room_monitor/smp_room_monitor.ino   ← program ESP32 (dibuka di Arduino IDE)
├── index.html                            ← website dashboard (edit di VS Code)
├── style.css                             ← warna & tampilan dashboard
├── api.js                                ← "kabel" dashboard ke server — JANGAN DIUBAH
├── icon.webp
└── README.md
```

**Yang sudah otomatis terisi di zip:**
- `DEVICE_ID` di firmware dan `MY_DEVICE_ID` di `api.js` = ID kelompok itu (mis. `smp-07`). Ini "plat nomor" alat; kalau dua kelompok memakai ID yang sama, datanya saling menimpa.
- Nama kelompok/anggota di dashboard (`index.html`), sesuai daftar di `docs/HANDOUT_SISWA.md`.

**Yang diisi/diubah siswa:**

| Bagian | SMP | SMA |
|---|---|---|
| Firmware `ISI_DI_SINI` → nama & password WiFi | ✅ | ✅ |
| Pin sensor/relay | Tetap `DHT_PIN 4` | Cek `DHT_PIN 13`, `RELAY_PIN 14` sesuai rakitan |
| Teks nama/judul di `index.html` | ✅ | ✅ |
| Warna di `:root` paling atas `style.css` | ✅ | ✅ (+ aturan/ambang, panel tips di P13) |
| `foto-kelompok.jpg` | ✅ (P13) | sesuai materi SMA |
| Zona merah firmware (`SERVER_URL`, `API_KEY`) & `api.js` | ❌ jangan disentuh | ❌ jangan disentuh |

**Cara pakai zip di laptop siswa:**
1. Pengajar meng-extract zip di laptop kelompok itu (mis. ke Desktop) **sebelum kelas**, tempel stiker `smp-XX`/`sma-XX` di laptop.
2. Buka `firmware/…/….ino` di Arduino IDE → **Verify (✓)** sekali (compile pertama 2–5 menit, jangan terjadi di kelas).
3. **Jangan** memakai salinan umum folder `smp/` atau `sma/` dari repo/Drive: Device ID-nya generik dan data kelompok bisa tercampur.

**Program latihan kecil** (Blink, tes sensor, tes WiFi, tes relay) **bukan** di zip, tapi di folder **Kode** di Drive tiap pertemuan, juga diberikan jadi.

**Setelah pertemuan terakhir**, siswa menyerahkan kembali folder websitenya sebagai `smp-XX.zip`/`sma-XX.zip`. Admin men-deploy dengan `py tools/kelompok.py deploy <id> <zip>` (cek dulu pakai `--dry-run`), lalu push. Tool otomatis membuang `firmware/` dan mengganti `api.js` dengan versi asli, jadi aman walau siswa tidak sengaja mengubahnya.

### 5. Yang dilakukan pengajar tiap minggu (3 menit)

1. **H-1:** baca *Panduan Pengajar* pertemuan itu (timeline per menit, kalimat kunci, troubleshooting, kunci challenge).
2. **H-1:** cek checklist Persiapan di panduan (laptop, kabel USB **data**, WiFi 2.4 GHz, power bank, dll).
3. **Di kelas:** ikuti slide; catat poin +2 langsung dengan turus; challenge dinilai pakai kunci di Materi Ajar → *Khusus Tutor*.
4. **Setelah kelas:** rekap poin ke gradebook (leaderboard membaca dari sana), catat kelompok yang belum mencapai target wajib.

Slide, Materi Ajar, Panduan Pengajar, folder Kode, dan Google Form post-test semuanya ada di **folder Drive pertemuan** (`PNN/SMP` atau `PNN/SMA`).

---

## C. FAQ untuk pengajar

**Kalau kodenya jadi, siswa belajar ngoding di mana?**
Siswa belajar *membaca dan mengubah* kode: mengganti angka (`delay`, nomor pin), mengisi WiFi, membaca pesan Serial Monitor, dan mengedit HTML/CSS dashboard (melanjutkan materi HTML/CSS P5–P8). Untuk 4 pertemuan terakhir, ini lebih realistis daripada menulis C++ dari nol.

**Silabus menulis "live coding / C++". Apakah bertentangan?**
Kontennya tetap sama (blink, DHT22, WiFi, dashboard), hanya bentuknya "baca & ubah", bukan "tulis dari nol". Kalau perlu demonstrasi live coding untuk laporan, pengajar bisa mengetik ulang program Blink di proyektor sementara siswa menonton.

**Laptop siswa belum terpasang Arduino IDE?**
Justru itu materi P10. Panduan Instalasi 1–3 ada di `kurikulum/panduan-instalasi/` (Windows & Mac). Unduhan board ESP32 besar (±2 GB), jadi siapkan installer di flashdisk dan 2–3 laptop cadangan. Internet lambat → pilih board ESP32 versi 2.0.17 (±0,8 GB).

**Bagaimana kalau kelompok tertinggal?**
Kejar di 10 menit pertama pertemuan berikutnya. Batas minimum yang tetap memenuhi goal: angka sensor dari alat kelompok tampil di dashboard-nya sendiri. Warna, foto, casing, dan challenge adalah bonus.

**Masalah paling sering di kelas?**
1. Kabel USB charger (bukan kabel data) → port tidak muncul.
2. Nama/password WiFi salah ketik atau WiFi 5 GHz → titik-titik tidak berhenti.
3. Kabel out sensor bukan di pin yang tertulis di program → "Gagal baca sensor".
Semua ada di tabel troubleshooting Panduan Pengajar.

**Boleh mengubah materi?**
Boleh. Edit bahan di `kurikulum/<smp|sma>/pNN/sumber/`, lalu admin menjalankan `py tools/build_bahan_ajar.py <smp|sma> NN` dan menjalankan ulang Apps Script-nya. Jangan edit file `PROMPT_*`/`SCRIPT_*` langsung.

---

## D. Rujukan cepat

| Butuh | Lihat |
|---|---|
| Cara menjalankan SMP P10–P13 dari awal sampai deploy | `kurikulum/smp/README.md` |
| Detail tiap kelas | `kurikulum/smp/pNN/` atau `kurikulum/sma/pNN/` → `Panduan_Pengajar_*.md` (juga di Drive) |
| Apps Script & Gemini (slide, form) | `prompt/RUNBOOK.md` |
| Daftar Device ID & anggota | `docs/HANDOUT_SISWA.md` |
| Deploy website kelompok | `deploy/README.md` |
| Instalasi Arduino IDE / board / library | `kurikulum/panduan-instalasi/` |
