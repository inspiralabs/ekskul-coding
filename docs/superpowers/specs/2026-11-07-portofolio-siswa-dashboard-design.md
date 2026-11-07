# Desain: Portofolio Siswa + Dashboard Pengisian (ekskulcoding.inspiralabs.id)

Tanggal: 7 November 2026 · Status: draft, menunggu persetujuan pemilik

## 1. Maksud dan alasan

Setiap siswa ekskul coding (SMP dan SMA, ±37 anak, semester 1 TP 2026/2027) punya halaman portofolio publik.
Yang baru dibanding portofolio lama (`tools/portofolio.py`, halaman statis dari spreadsheet penilaian):
**siswa ikut mengisi halamannya sendiri** lewat dashboard pribadi. Alasan pemilik: supaya siswa terlibat, bukan
sekadar objek halaman yang dibuat tutor, dan siswa bisa membuka dashboard miliknya sendiri.

Guru dan admin tetap bisa mengisi atau membetulkan data siapa pun. Data resmi (poin, lencana, catatan pelatih)
tetap berasal dari spreadsheet penilaian supaya tutor tidak mengetik ulang.

Umur website **pendek** (kira-kira sampai akhir semester). Jadi pilih yang paling sederhana dan cepat jadi, bukan
yang paling tahan lama.

## 2. Tujuan, bukan tujuan, anti-tujuan

**Tujuan**
- Halaman publik per siswa di `ekskulcoding.inspiralabs.id`.
- Dashboard dengan login untuk 3 peran: siswa, guru, admin.
- Perubahan dari siswa **langsung tampil** tanpa persetujuan guru (keputusan pemilik).
- Data resmi bisa diimpor dari spreadsheet penilaian (.xlsx) tanpa mengetik ulang.

**Bukan tujuan**
- Moderasi atau persetujuan konten.
- Login Google, link via email, lupa password via email.
- Muncul di Google (SEO). Halaman justru `noindex`.
- Aplikasi HP, notifikasi, analitik.

**Anti-tujuan** (gagal walau secara teknis jalan)
- Foto atau data anak masuk ke repo git. **Repo `inspiralabs/ekskul-coding` publik.**
- Siswa bisa mengubah data resmi (poin, lencana, catatan pelatih, nama lengkap, kelas, nomor sertifikat) atau data siswa lain.
- Nilai akhir, predikat, nilai post-test, absensi, NIS, nomor HP, atau "Perlu Ditingkatkan" tampil di halaman publik.
- Frontend memakai build step atau npm. Semua frontend repo ini HTML/CSS/JS polos.

## 3. Batasan dari yang sudah ada

- **Backend:** Express + `@supabase/supabase-js` di `backend/server.js`, skema Supabase `ekskul_coding_asy_syahid`
  (lihat `backend/supabase_schema.sql`: RLS dimatikan, otorisasi dicek di Express). Deploy otomatis: push `master`
  → `/srv/bin/deploy.sh` → `https://api-ekskulcoding.inspiralabs.id`. **Push ke `master` = langsung produksi**, jadi
  kerja di branch lalu PR.
- **Situs `ekskulcoding.inspiralabs.id`** = situs statis di Vercel dari root repo ini (`vercel.json`: `cleanUrls`).
  `.vercelignore` sudah mengecualikan folder `portofolio/` (folder generator lama), jadi frontend baru **tidak boleh**
  ditaruh di folder bernama `portofolio/`.
- **Pemetaan siswa ↔ kelompok** ada di `tools/kelompok.json` (`id` = Device ID kelompok, `id_siswa` = daftar ID Siswa).
  ID Siswa (`SMA-004`) ≠ Device ID (`sma-04`).
- **Parser spreadsheet** sudah ada: `baca_penilaian()` di `tools/portofolio.py` (Master Data, Log Poin Sesi, Gradebook,
  Catatan Tutor), dan sudah menolak kolom sensitif. Logika slug (`buat_slug`), nomor sertifikat `EKC-2026-S1-<ID Siswa>`,
  dan aturan "peringkat hanya 3 besar" juga ada di sana. Pakai ulang, jangan ditulis ulang.
- **Tampilan lama** (`portofolio/templat/index.html`, `portofolio.css`, `portofolio.js`, `sertifikat.html`) sudah
  dirancang untuk HP dan diisi lewat `textContent` (aman dari sisipan HTML). Pakai ulang sebagai dasar halaman publik.

## 4. Keputusan pemilik

| Hal | Keputusan |
|---|---|
| Login siswa | **Kode akses per siswa**: ID Siswa + kode 6 karakter yang dibagikan guru di kertas |
| Login guru/admin | Email + password |
| Persetujuan konten | Tidak ada, perubahan siswa langsung tampil |
| Database | **Supabase** (proyek yang sama dengan backend) |
| Backend | "Kurang lebih sama seperti backend yang ada": Express + supabase-js |
| Domain | `ekskulcoding.inspiralabs.id` |

## 5. Peran dan hak akses

| Aksi | Siswa | Guru | Admin |
|---|---|---|---|
| Lihat halaman publik siapa pun | ✔ | ✔ | ✔ |
| Edit **bagian milik siswa**, hanya halamannya sendiri | ✔ | — | — |
| Edit bagian milik siswa untuk siswa mana pun di jenjangnya | — | ✔ | ✔ (semua jenjang) |
| Edit **data resmi** (nama lengkap, kelas, catatan pelatih, judul proyek; kelompok dan poin/lencana tidak, lihat aturan impor di §7) | — | ✔ jenjangnya | ✔ |
| Reset kode akses siswa | — | ✔ jenjangnya | ✔ |
| Impor spreadsheet penilaian | — | — | ✔ |
| Tambah/hapus akun guru | — | — | ✔ |

Guru terikat ke satu jenjang (`smp` atau `sma`). Admin tidak terikat jenjang.

## 6. Data per siswa

**Bagian milik siswa** (diisi siswa, juga bisa diedit guru/admin)
- Nama panggilan
- Foto profil (1 foto)
- Tentang aku (maks ±300 karakter)
- Cita-cita / minat (maks ±100 karakter)
- Cerita proyek: bagian tersulit, bagian paling seru, rencana pengembangan alat (3 isian pendek; untuk SMP ini "3 Kalimat Sakti" P13)
- Link karya (opsional, maks 3 URL `https://`)

**Data resmi** (hanya guru/admin; sebagian besar dari impor spreadsheet)
- ID Siswa, nama lengkap, jenjang, **kelas** (mis. "XI-2", diketik guru, tidak ada di spreadsheet)
- Kelompok / Device ID (dari `tools/kelompok.json`)
- Poin total, lencana per pertemuan, jumlah tanya jawab, peringkat (tampil hanya kalau 3 besar)
- Judul proyek, catatan pelatih (kolom Kekuatan)
- Nomor sertifikat `EKC-2026-S1-<ID Siswa>`, slug URL

**Tidak pernah disimpan atau ditampilkan:** nilai akhir, predikat, nilai post-test, absensi, NIS, nomor HP, nama
orang tua, "Perlu Ditingkatkan", saran orang tua.

Panjang maksimum dan format divalidasi **di server**, bukan cuma di browser.

## 7. Bentuk sistem (pilihan desainer, boleh diubah builder kalau ada alasan kuat)

```
Browser (siswa/guru/admin)
  ├─ ekskulcoding.inspiralabs.id/<halaman publik>/<slug>   statis di Vercel, ambil data via fetch
  └─ ekskulcoding.inspiralabs.id/dashboard                  statis di Vercel, login + form
          │  fetch (Authorization: Bearer <token>)
          ▼
api-ekskulcoding.inspiralabs.id  (backend Express yang sama, endpoint baru /api/portofolio/...)
          │  supabase-js (key server, tidak pernah ke browser)
          ▼
Supabase: tabel baru di skema ekskul_coding_asy_syahid + Storage bucket foto
```

- **Tabel** (tambahkan ke `backend/supabase_schema.sql` dengan pola yang sama: RLS mati, otorisasi di Express):
  satu tabel siswa (data resmi + bagian milik siswa + hash kode akses + `updated_at`/`updated_by`), dan satu tabel akun
  guru/admin (email, hash password, peran, jenjang).
- **Kode akses dan password** disimpan sebagai hash (`crypto.scrypt` bawaan Node, tanpa dependency baru).
  Kode 6 karakter dari alfabet tanpa huruf/angka yang mirip (tanpa 0/O, 1/I/l).
- **Sesi:** token bertanda tangan HMAC (`crypto`, secret di `.env`), berisi peran, ID, jenjang, dan kedaluwarsa
  (±30 hari). Disimpan di `localStorage` dashboard, dikirim sebagai header `Authorization`. Polanya sama dengan PIN
  kipas di `sma/api.js`. Reset kode siswa membuat token lama siswa itu tidak berlaku.
- **Batas percobaan login:** wajib, karena kode 6 karakter bisa ditebak. Contohnya maks 10 percobaan gagal per ID
  per 15 menit (cukup di memori proses).
- **Foto:** di browser dikecilkan (maks 1600 px) dan di-encode ulang jadi JPEG lewat `<canvas>`. Cara ini otomatis
  membuang EXIF/GPS. Server memeriksa memang JPEG dan ≤ 600 KB, lalu menyimpannya ke Supabase Storage (bucket
  baca-publik, nama file acak per unggahan). Foto lama dihapus saat diganti.
- **Halaman publik:** `<meta name="robots" content="noindex">` + header `X-Robots-Tag: noindex` (lewat `vercel.json`).
  Semua teks dipasang dengan `textContent`. Link karya hanya `https://`, dengan `rel="noopener nofollow"`.
- **Impor spreadsheet:** perintah baru di `tools/portofolio.py` (mis. `impor`) yang memakai `baca_penilaian()` +
  `kelompok.json`, lalu mengirim data resmi ke endpoint admin. Impor **tidak pernah menimpa bagian milik siswa**.
  Aturan saat impor diulang *(keputusan desainer)*:
  - **Selalu ditimpa impor** dan hanya-baca di dashboard: poin, lencana per pertemuan, tanya jawab, peringkat.
    Sumber kebenarannya spreadsheet.
  - **Kelompok / Device ID** selalu dari `kelompok.json` dan tidak bisa diubah di dashboard. File itu juga dipakai
    website kelompok dan skrip folder Drive. Pindah kelompok = ubah `kelompok.json`, lalu impor ulang.
  - **Nama lengkap, judul proyek, catatan pelatih:** impor hanya mengisi kalau kolomnya masih kosong. Koreksi guru di
    dashboard tidak hilang saat impor diulang.
  - **Kelas:** hanya diisi di dashboard, karena tidak ada di spreadsheet.
  Saat siswa baru pertama kali dibuat, impor menghasilkan kode aksesnya dan mencetak daftar `ID · nama · kode` untuk
  dibuat kertas lipat. Kode tidak disimpan dalam bentuk asli di mana pun.
- **Akun admin pertama:** dibuat dari env (mis. `ADMIN_EMAIL` + `ADMIN_PASSWORD` di `.env` server) saat server start.
  Akun guru dibuat admin dari dashboard.
- **Env baru** di `/srv/apps/api-ekskulcoding/.env`: secret token, kredensial admin awal, nama bucket. Upload Storage
  butuh `SUPABASE_KEY` berjenis `service_role`. Cek dulu jenis key yang sekarang terpasang.
- **Aman saat env belum diisi** *(keputusan desainer)*: kalau env portofolio belum ada, endpoint `/api/portofolio/*`
  membalas 503, sementara endpoint sensor dan kipas tetap jalan normal. Push ke `master` langsung ke produksi, jadi
  fitur baru tidak boleh bisa menjatuhkan backend yang sedang dipakai kelas.
- **Serah-terima ke pemilik** *(keputusan desainer)*: langkah yang butuh akses pemilik (jalankan SQL di Supabase,
  buat bucket, isi env di VPS, ganti key) ditulis sebagai checklist berurutan di README backend sebagai bagian dari
  pekerjaan ini.

## 8. Hubungan dengan portofolio lama

Sistem baru **menggantikan** halaman statis lama `sma-0X.inspiralabs.id/siswa/<slug>/` sebagai halaman portofolio
resmi. Generator lama tidak dihapus di pekerjaan ini. Tampilannya dipakai ulang, dan halaman cetak sertifikat
(`sertifikat.html`, A4 lanskap, nomor `EKC-2026-S1-<ID>`, QR ke halaman portofolio) ikut dipindahkan ke sistem baru
dengan QR mengarah ke alamat baru. Foto kegiatan dari Google Drive (galeri di portofolio lama) **tidak** masuk lingkup
ini. Yang ada hanya satu foto profil yang diunggah siswa.

## 9. Urutan kerja dan tenggat (keputusan pemilik: harus bisa dipakai sekarang / minggu depan)

P13 SMP Jumat 13 November 2026, P13 SMA Sabtu 14 November 2026. Siswa mengisi halamannya di kelas P13.

**Tahap 1, wajib jalan paling lambat Kamis 12 November** (kertas kode akses harus sudah dicetak):
1. Tabel + checklist serah-terima pemilik (SQL, bucket, env). Pemilik menjalankannya dibantu Claude.
2. Login siswa (ID + kode), edit bagian milik siswa, **termasuk upload foto ke Supabase Storage** (pemilik menyebut
   foto secara khusus).
3. Halaman publik per siswa.
4. Login admin dengan kemampuan edit data siswa mana pun (termasuk kelas) dan reset kode siswa. Ini dibutuhkan di
   kelas kalau ada siswa yang lupa atau kehilangan kode.
5. Perintah `impor` yang membuat data siswa + mencetak daftar kode akses.

**Tahap 2, setelah P13:** kelola akun guru dari dashboard (peran guru per jenjang), halaman sertifikat pindah ke
sistem baru, dan perapian tampilan. Selama tahap 1, pekerjaan guru dikerjakan akun admin.

## 10. Yang diserahkan ke builder

- Nama folder frontend dan pola URL publik (selain `portofolio/`; mis. `/siswa/<slug>` lewat `rewrites` di `vercel.json`).
- Nama tabel, kolom, dan endpoint.
- Tata letak dashboard. Prioritaskan HP, karena siswa kemungkinan mengisi lewat HP.
- Cara memecah `server.js` kalau terlalu panjang (boleh satu file baru `backend/portofolio.js`).
- Self-check: satu cek yang bisa dijalankan untuk aturan akses (siswa tidak bisa edit data resmi atau siswa lain,
  guru tidak bisa lintas jenjang, login dibatasi), mengikuti pola `cek()` yang sudah ada di tools.
