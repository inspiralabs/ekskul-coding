# Leaderboard & Materi Interaktif — Design Spec

> Status: Approved. This is Phase 1 (foundation) of a larger roadmap;
> mini-games are an explicitly separate follow-up spec.

## Context

Ekskul Coding Asy Syahid saat ini adalah situs statis (HTML/CSS/vanilla JS,
deploy ke Vercel tanpa build step) berisi: landing page, dashboard IoT demo
untuk tutor, dan template dashboard belajar untuk SMA/SMP. Progres siswa
sudah direkap tutor secara manual di 2 Google Sheets gradebook (SMA & SMP)
dengan rumus nilai akhir & ranking yang sudah dihitung otomatis oleh Sheets.

Tutor ingin:
1. **Leaderboard** — memotivasi siswa dengan menampilkan ranking dari
   gradebook yang sudah ada, tanpa perlu bikin sistem skor baru.
2. **Materi per pertemuan** — halaman yang menaungi link materi (Google
   Drive), embed Google Form post-test, dan embed Google Form kritik&saran,
   supaya tutor bisa tambah pertemuan baru tanpa minta bantuan developer.

Constraint utama: situs harus **tetap zero-build-step, zero-framework**
(konsisten dengan seluruh codebase, dan file `demo/`/`sma/`/`smp/` sengaja
dipakai sebagai bahan ajar vanilla JS — lihat `SIAPA_BOLEH_UBAH_APA.md`).
Konten (nilai siswa, daftar pertemuan) harus bisa diupdate tutor **tanpa
redeploy**, jadi sumber data adalah Google Sheets yang di-publish sebagai
CSV dan di-fetch client-side saat halaman dibuka — persis pola yang sudah
dipakai `demo/api.js` untuk fetch data sensor, hanya sumbernya beda.

## Data Sources

### 1. Gradebook SMA & SMP (sudah ada, dipakai ulang)
- SMA: `https://docs.google.com/spreadsheets/d/1BzrS76sheefolTzTNESaNwRT_f-_fgDE/...`
- SMP: `https://docs.google.com/spreadsheets/d/1fx9CUUfvuj6lgx-s8rXLL3lmLUGVkBen/...`
- Sheet "GRADEBOOK & EVALUASI" sudah punya kolom terhitung otomatis:
  `Nama Lengkap`, `Kelas`, breakdown poin, `NILAI AKHIR`, `Predikat`,
  `Ranking`. **Website tidak menghitung apa-apa** — hanya baca, urutkan
  by `Ranking`, dan render.
- Tutor perlu **Publish to web** tab gradebook ini sebagai CSV
  (File → Share → Publish to web → pilih sheet tab → CSV). Hasilnya URL
  publik read-only berbentuk
  `https://docs.google.com/spreadsheets/d/e/<id>/pub?gid=<tabid>&single=true&output=csv`.
  URL ini yang di-hardcode di kode (bukan URL edit yang sekarang ada di
  `notes.txt`).

### 2. Sheet Materi (baru, perlu dibuat tutor)
- Satu spreadsheet baru, gabungan SMA+SMP dengan kolom `Target`.
- Kolom: `No Pertemuan`, `Tanggal`, `Judul Materi`, `Link Drive`,
  `Link Form Post-Test`, `Link Form Kritik & Saran`, `Target`
  (`SMA` / `SMP` / `Keduanya`), `Status` (`published` / `draft`).
- Sama seperti gradebook: Publish to web sebagai CSV, dipakai read-only.
- Baris dengan `Status` != `published` di-skip saat render (tutor bisa
  siapkan pertemuan minggu depan tanpa langsung tampil).

## Pages & Files

Mengikuti pola folder yang sudah ada (`demo/`, `sma/`, `smp/`: tiap fitur
= folder sendiri dengan `index.html` + JS terpisah untuk data layer).

```
leaderboard/
  index.html      <- markup + styling (bebas diubah co-teacher, sama seperti sma/index.html)
  leaderboard.js   <- fetch + parse CSV + render (data layer, dokumentasi "JANGAN UBAH" di atas)
materi/
  index.html
  materi.js
shared/
  csv.js          <- util kecil: fetch CSV → array of objects. Dipakai leaderboard.js & materi.js.
```

`shared/csv.js` bukan abstraksi baru yang dipaksakan — kedua fitur butuh
"fetch CSV, split baris, split koma, map ke header" persis sama, jadi satu
util dipakai ulang dua kali lebih murah daripada disalin dua kali (DRY,
tapi minimal: satu fungsi, tidak ada class atau config yang tak perlu).

### `shared/csv.js` — kontrak
```js
// fetchCsv(url) -> Promise<Array<Object>>
// Baris pertama = header (dipakai sebagai key). Baris kosong di-skip.
// Melempar Error kalau fetch gagal atau response bukan CSV valid,
// supaya pemanggil bisa render pesan error yang jelas.
async function fetchCsv(url) { ... }
```
Parsing CSV: split by newline lalu by comma tanpa regex library —
Google Sheets CSV export tidak menghasilkan koma di dalam field kecuali
dibungkus tanda kutip; util ini menangani kasus tanda kutip dasar (field
yang diapit `"..."` boleh mengandung koma) karena nama materi/judul bisa
saja mengandung koma. Tidak menangani newline di dalam field berkutip
(tidak dibutuhkan untuk data tabular sederhana ini — ponytail: cakupan
kutip dasar saja, upgrade ke parser CSV penuh kalau ada baris data yang
ternyata butuh newline di dalam sel).

### `leaderboard/index.html` + `leaderboard.js`
- Toggle SMA/SMP (dua tombol pill, mirip pola tab yang sudah ada di style
  demo). Baca `?kelas=sma` atau `?kelas=smp` dari query string untuk
  pre-select toggle (dipakai link dari landing page); default SMA.
- Saat toggle berubah: `fetchCsv(GRADEBOOK_URL[kelas])`, filter baris
  yang tidak punya `NILAI AKHIR` (baris kosong/belum dinilai), sort by
  `Ranking` (numeric ascending), render ke tabel/list.
- Kolom ditampilkan: Ranking, Nama Lengkap, Nilai Akhir, Predikat.
  Top 3 dapat badge 🥇🥈🥉 di depan nama.
- Loading state (skeleton/teks "Memuat...") saat fetch, error state
  (pesan jelas + tombol "Coba lagi") kalau fetch gagal.
- Styling: reuse design tokens dari `demo/README.md` (font Baloo 2 +
  Nunito, warna aksen `#FF9F43 → #2ED9A6`, radius 20-24px, shadow
  `0 4px 20px rgba(15,30,30,.07)`) supaya konsisten dengan landing page
  dan dashboard yang sudah ada.

### `materi/index.html` + `materi.js`
- Toggle SMA/SMP sama seperti leaderboard (query param `?kelas=`).
- `fetchCsv(MATERI_URL)` sekali (satu sheet gabungan) → filter
  `Status === 'published'` dan (`Target === 'Keduanya'` atau
  `Target === kelasAktif`) → sort by `No Pertemuan` ascending.
- Render accordion card per pertemuan (pola akordeon sudah ada persis di
  `index.html` root — dipakai ulang, bukan dibuat baru): judul + tanggal
  di header card, klik untuk expand.
- Isi card saat expand:
  - Tombol "📂 Buka Materi (Drive)" → `<a target="_blank" href="{Link Drive}">`.
  - Dua iframe embed Google Form, **lazy-injected ke DOM saat expand**
    (bukan saat page load) via `<iframe>` dibuat oleh JS dan
    di-`appendChild` ke container saat pertama kali dibuka, supaya
    halaman tidak memuat N×2 iframe sekaligus kalau pertemuan sudah
    banyak:
    ```js
    iframe.src = linkFormPostTest.replace('/viewform', '/viewform?embedded=true');
    ```
    (Google Form URL mentah dari sheet diasumsikan format standar
    `.../viewform?...`; kode menambah/menegakkan `embedded=true` query
    param, tidak mengasumsikan tutor sudah menambahkannya manual.)
  - Iframe punya `loading="lazy"` dan tinggi tetap yang cukup umum untuk
    Google Form pendek (600px, scrollable jika form lebih panjang) —
    bukan auto-resize (Google Form tidak expose API resize ke iframe
    cross-origin; auto-resize butuh trik postMessage yang tidak
    disediakan Google, jadi tinggi tetap + scroll adalah solusi standar
    dan cukup).

## Navigation

`index.html` (landing page) — tambah 2 baris link baru di **dalam**
accordion SMA yang sudah ada (`.pilihan` div, baris ~103-106) dan accordion
SMP (baris ~121-124), sejajar dengan link "Lihat website" dan "Unduh
template" yang sudah ada:

```html
<a href="/leaderboard/?kelas=sma"><span class="emoji">🏆</span> Leaderboard</a>
<a href="/materi/?kelas=sma"><span class="emoji">📚</span> Materi & Post-Test</a>
```
(dan versi `kelas=smp` di accordion SMP). Tidak perlu ubah struktur
accordion/CSS yang ada — murni tambah `<a>` baru mengikuti pola yang
sudah ada persis di file yang sama.

## Governance (`SIAPA_BOLEH_UBAH_APA.md`)

Tambahkan baris baru di tabel folder dashboard untuk `leaderboard/` dan
`materi/`, mengikuti pola existing: `index.html` bebas diubah (styling/UX),
`leaderboard.js`/`materi.js`/`shared/csv.js` berlabel "JANGAN UBAH FILE
INI" di baris atas (ini kabel ke sumber data, sama seperti `api.js`).
Juga tambah instruksi: URL CSV sumber data (gradebook + materi) disimpan
sebagai konstanta di puncak masing-masing `.js` file, satu-satunya baris
yang tutor/panitia boleh ubah manual (sama seperti `MY_DEVICE_ID` di
`api.js` yang sudah ada) — supaya kalau tutor bikin spreadsheet Materi
baru atau ganti gradebook, tidak perlu request perubahan kode ke
developer, cukup ganti 1 baris URL.

## Error Handling

- Fetch CSV gagal (network error, atau sheet belum di-publish/private):
  tampilkan card pesan "Data belum bisa dimuat. Coba beberapa saat lagi
  atau hubungi tutor." + tombol retry — bukan halaman kosong/console
  error diam-diam.
- CSV kosong (header ada tapi 0 baris data): tampilkan pesan "Belum ada
  data pertemuan/nilai" alih-alih tabel kosong membingungkan.
- Baris dengan field wajib kosong (mis. `Nama Lengkap` kosong di
  gradebook, atau `Link Form Post-Test` kosong di materi): baris/field
  itu di-skip dengan aman, tidak melempar error yang menghentikan
  render baris lain.

## What's explicitly out of scope for this plan

- Mini-games (spec terpisah menyusul).
- Kritik & saran sebagai fitur berdiri sendiri di luar konteks
  per-pertemuan (sudah tercakup sebagai salah satu embed form di materi).
- Auth/login siswa — leaderboard & materi tetap publik untuk siapa saja
  yang tahu URL (konsisten dengan sifat situs sekarang yang seluruhnya
  publik, tidak ada auth di manapun).
- Migrasi ke React/Next.js — diputuskan tetap vanilla JS (lihat diskusi
  di percakapan; skala fitur tidak membutuhkan framework, dan konsistensi
  dengan bahan ajar vanilla JS lebih penting).
- Menghitung ulang nilai/skor di JS — semua kalkulasi tetap di Google
  Sheets formula, website murni display layer.

## Verification Plan

1. Tutor publish gradebook SMA/SMP + sheet Materi baru sebagai CSV,
   isi URL-nya ke konstanta di `leaderboard.js`/`materi.js`.
2. Buka `/leaderboard/?kelas=sma` dan `?kelas=smp` di browser lokal
   (buka file langsung atau `vercel dev`) — cek data tampil sesuai
   urutan ranking, badge top-3 benar, toggle SMA/SMP bekerja.
3. Matikan koneksi internet / ganti URL ke yang salah sengaja → cek
   pesan error muncul dengan benar, bukan halaman blank.
4. Buka `/materi/?kelas=sma` — cek hanya baris `Status=published` dan
   `Target` sesuai yang tampil; expand card → cek 2 iframe form muncul
   dan bisa diisi; klik link Drive → buka tab baru dengan benar.
5. Tambah 1 baris baru di sheet Materi (tutor), refresh halaman tanpa
   redeploy apapun → baris baru muncul, membuktikan alur zero-deploy.
6. Cek landing page (`index.html`) — link baru di accordion SMA & SMP
   mengarah ke halaman yang benar dengan query param yang benar.
7. Update `SIAPA_BOLEH_UBAH_APA.md` — review tabel baru sudah akurat.
