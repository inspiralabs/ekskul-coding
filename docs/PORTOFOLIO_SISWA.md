# Portofolio Siswa Ekskul Coding: usulan dan prototipe

Ide awal: tiap anak punya website sendiri di domain inspiralabs.id berisi apa yang dipelajari P1 sampai P13,
praktik yang dikerjakan, hasil tiap pertemuan, proyek akhir P13, foto selama ekskul, dan sertifikat.
Dokumen ini menjawab "apa yang bisa diperbaiki", lalu menjelaskan cara membuatnya dengan kerja tutor sesedikit mungkin.
Prototipe sudah ada di branch `feat/portofolio-siswa` (folder `portofolio/`, generator `tools/portofolio.py`).

## Ringkasan: 8 perbaikan, urut dari yang paling penting

1. **Beres-beres privasi sebelum ada foto.** Repo `inspiralabs/ekskul-coding` saat ini publik. Foto anak yang
   di-commit ke sana akan tersimpan di riwayat git selamanya, walaupun nanti dihapus. Jadikan repo private, atau simpan
   data portofolio di luar repo ini (lihat bagian Privasi). Ditambah: halaman `noindex` (tidak muncul di Google), dan
   foto wajib dibersihkan dari data lokasi GPS.
2. **Satu halaman dan satu sertifikat per siswa, bukan per kelompok.** Device ID itu kelompok (2 sampai 4 anak di
   smp-06 sampai smp-13, sma-04 sampai sma-06). Alamatnya: `https://smp-07.inspiralabs.id/siswa/rafif/`.
   Dashboard kelompok tetap di `https://smp-07.inspiralabs.id/`.
3. **Isi langsung dari spreadsheet penilaian.** Tutor tidak mengedit HTML maupun JSON. Nama, lencana per pertemuan,
   poin, judul proyek, dan catatan pelatih dibaca dari spreadsheet penilaian InspiraLabs yang sudah diisi selama
   semester; foto dari satu folder per siswa. Materi P1 sampai P13 ditulis sekali di `portofolio/kurikulum.json`.
4. **Perjalanan berisi bukti pribadi, bukan salinan silabus.** Tiap pertemuan menampilkan materi (sama untuk semua)
   plus satu kalimat hasil anak itu sendiri, dan challenge yang dia lulus dengan nama aslinya ("Klub 200",
   "Detektif Sensor", "Uji Goyang"). Nama-nama challenge itu yang membuat halaman terasa milik dia.
5. **Kata-kata anak sendiri di proyek akhir.** P13 SMP sudah punya "3 Kalimat Sakti" (nama alat, bagian tersusah,
   rencana pengembangan). Pencatat kelompok menuliskannya, lalu kalimat itu tampil di portofolio. Lebih jujur dan
   lebih membanggakan daripada deskripsi buatan tutor.
6. **Proyek akhir tersambung ke alat sungguhan, dengan jujur.** Halaman membaca kiriman terakhir alat dari backend
   (`/api/readings/<id>`). Setelah semester selesai alat dibawa pulang dan mati, jadi halaman menulis "Dikirim 13 November
   2026 pukul 10.12. Alat sedang tidak menyala", bukan berpura-pura live.
7. **Tampilkan poin dan lencana, jangan nilai.** Gradebook berisi Nilai Akhir dan Predikat (saat ini banyak yang D
   karena Final Project belum dinilai). Itu urusan rapor, bukan halaman publik. Peringkat hanya tampil untuk 3 besar;
   anak di peringkat 13 tidak perlu melihat angka itu di halaman yang dibagikan ke keluarganya.
8. **Sertifikat dicetak sendiri dari halaman yang sama.** A4 lanskap lewat CSS cetak, dengan nomor unik dan QR ke
   halaman portofolio. Siapa pun yang memindai QR melihat nomor yang sama di domain inspiralabs.id, dan itu cukup
   sebagai bukti keaslian. Tidak perlu server atau database tambahan.

## Per siswa atau per kelompok

| Pilihan | Alamat | Kelebihan | Kekurangan |
|---|---|---|---|
| **A. Di bawah subdomain kelompok (dipilih)** | `smp-07.inspiralabs.id/siswa/rafif/` | Tidak perlu DNS, Cloudflare, atau aturan Traefik baru (pola `smp-NN`/`sma-NN` sudah tertangkap). Anak dan kelompoknya satu alamat, dashboard tinggal satu klik. | Alamat sedikit lebih panjang. |
| B. Subdomain per anak | `rafif.inspiralabs.id` | Paling pendek. | Nama bisa bentrok (dua "Zaidan" di smp-12), perlu aturan Traefik per nama, dan nama anak jadi subdomain publik yang mudah ditebak. |
| C. Di situs ekskul (Vercel) | `ekskulcoding.inspiralabs.id/portofolio/...` | Tanpa server. | Vercel men-deploy dari repo publik ini, jadi foto ikut publik di GitHub. |

Kenapa `/siswa/<slug>/` dan bukan langsung `/<slug>/`: folder dashboard kelompok berisi file buatan siswa (`style.css`,
`foto-kelompok.jpg`, folder bebas). Awalan `/siswa/` menjamin nama anak tidak pernah bentrok dengan file dashboard.

Slug = nama panggilan huruf kecil tanpa "M."/"Muhammad" (`M. Abizan Syahdan` jadi `abizan`). Kalau bentrok di satu
kelompok, ditambah kata kedua (`zaidan-altamis`). Untuk ID individu (smp-01 sampai smp-05, sma-01 sampai sma-03) polanya sama:
`smp-01.inspiralabs.id/siswa/athalla/`.

## Isi halaman

Urutan di prototipe (`portofolio/templat/index.html`), dirancang untuk HP dulu:

1. **Sampul.** Nama lengkap, satu kalimat tentang apa yang dia rakit, angka singkat (13 pertemuan, total poin, jumlah
   lencana, peringkat kalau 3 besar), dan foto proyek akhir bergaya polaroid.
2. **Proyek akhir.** Nama alat, 3 kalimat presentasi P13, peran di kelompok (Operator, Pengecek, Perakit, Pencatat,
   Fotografer) dan nama teman sekelompok, kartu "Kiriman terakhir dari alat" (suhu, kelembapan, waktu), tombol ke
   dashboard kelompok.
3. **Perjalanan 13 pertemuan.** Garis waktu P1 sampai P13: tanggal, judul, yang dipelajari, "Hasil <nama>" (opsional,
   satu kalimat), dan challenge yang lulus. Pertemuan dengan lencana diberi tanda oranye.
4. **Lencana challenge.** Satu stempel untuk tiap challenge yang lulus, warna menurut level (Easy, Medium, Hard).
5. **Foto selama ekskul.** Hanya muncul kalau orang tua mengizinkan.
6. **Catatan dari pelatih.** 2 sampai 3 kalimat spesifik tentang anak itu, ditulis khusus untuk halaman publik di
   `catatan_tutor`. Kolom "Catatan Kualitatif Tutor" di gradebook adalah catatan internal dan **tidak pernah** ikut tampil.
7. **Sertifikat.** Nomor, tanggal, tombol ke halaman cetak.

Sengaja tidak ada: kehadiran (absen publik tidak perlu), nilai akhir, predikat, nilai post-test, kontak, nama kelas.

## Alur kerja tutor: data dari spreadsheet penilaian

Semua data siswa diambil langsung dari spreadsheet penilaian InspiraLabs yang sudah dipakai tutor (satu file SMP, satu
SMA). **Tidak ada data yang diketik ulang**: lencana bertambah sendiri setiap kali tutor mencatat poin di Log Poin Sesi.

```powershell
# 1. Google Drive -> buka spreadsheet penilaian -> File -> Download -> Microsoft Excel (.xlsx), untuk SMP dan SMA
# 2. bangun semua halaman (foto opsional)
py tools/portofolio.py bangun penilaian-smp.xlsx penilaian-sma.xlsx --foto <folder-foto>
py -m http.server 8091 -d dist/portofolio   # lihat: http://localhost:8091/smp-07/siswa/rafif/
```

| Bagian halaman | Sheet | Kolom |
|---|---|---|
| Nama lengkap, panggilan | Master Data Siswa | Nama Lengkap, Nickname (siswa berstatus "Pindah" dilewati) |
| Lencana per pertemuan | Log Poin Sesi | Pertemuan Ke-, Challenge Easy / Medium / Hard (terisi = lencana) |
| Aktif tanya jawab | Log Poin Sesi | Keaktifan Umum (2 poin = 1 kali) |
| Total poin, 3 besar | Gradebook | Total Poin Keseluruhan, Ranking |
| Judul proyek | Catatan Tutor | Proyek / Karya |
| Catatan pelatih | Catatan Tutor | Kekuatan (timpa draft), kalau kosong Draft Kekuatan (otomatis) |
| Topik & tanggal pertemuan | `portofolio/kurikulum.json` | |

Kolom lain **tidak pernah dibaca**: No. HP siswa dan orang tua, nama orang tua, NIS, presensi, nilai post-test,
nilai akhir, predikat, "Perlu Ditingkatkan", saran untuk orang tua, catatan per sesi. Self-check memastikannya.

**Siswa ke kelompok.** ID Siswa (`SMP-022`) itu per orang, Device ID (`smp-07`) per kelompok/website. Pasangannya ada di
`tools/kelompok.json`, kolom `id_siswa` (urutan sama dengan urutan nama). Sudah diisi untuk ke-37 siswa dengan
mencocokkan nama di spreadsheet. Kalau anggota kelompok berubah, cukup ubah baris itu.

**Foto di Google Drive.** Satu folder bersama, misalnya **"Foto Portofolio Ekskul"**, dengan satu subfolder per siswa
yang dinamai ID Siswa: `Foto Portofolio Ekskul/SMP-022/`, `.../SMA-002/`. Tutor upload **foto mentah langsung dari HP**
(aplikasi Google Drive → folder siswa → Upload), tidak perlu dikecilkan dulu. Foto boleh foto alat, rangkaian, atau
suasana kelas.

- **Nama file = keterangan.** `P11 Merakit Sensor.jpg` tampil sebagai "P11 · Merakit Sensor"; tanpa awalan `P11` juga
  boleh (`Suasana kelas.jpg`). Foto yang namanya diawali `Proyek` jadi foto proyek akhir. Ganti nama bisa langsung di
  aplikasi Drive (titik tiga → Rename).
- **Saat membangun:** di Drive klik kanan folder "Foto Portofolio Ekskul" → **Download** (Drive membuat file zip), lalu
  `bangun ... --foto drive-download.zip`. Kalau Drive memecah unduhan jadi beberapa zip, tulis `--foto` untuk tiap zip.
  Pengguna Google Drive for Desktop boleh langsung `--foto "G:\My Drive\Foto Portofolio Ekskul"`.
- **Otomatis oleh generator** (butuh `py -m pip install pillow` sekali): dikecilkan maks 1600 px dan ≤ 500 KB,
  diputar sesuai arah HP, EXIF termasuk lokasi GPS dibuang, nama file dirapikan. Foto HEIC (iPhone) dan file rusak
  ditolak dengan pesan; di iPhone pilih Settings → Camera → Formats → **Most Compatible** supaya foto tersimpan JPG.
- **Akses folder Drive:** cukup dibagikan ke akun tutor (jangan "anyone with the link"); generator tidak butuh link.

- `bangun` menolak semuanya kalau ada satu masalah (ID di `kelompok.json` tidak ada di spreadsheet, foto > 500 KB, foto
  bukan JPEG asli, foto masih ber-EXIF/XMP, nama file foto aneh), dengan pesan per siswa. Hasil lama tetap utuh.
- `bangun` selalu membangun ulang dari nol: folder `<id>/siswa/` di hasil dibersihkan dulu, jadi siswa yang keluar
  ikut hilang dari hasil.
- Halaman contoh fiktif: `py tools/portofolio.py contoh` (data `portofolio/contoh/penilaian-contoh.json`).
- Waktu kerja tutor: mengunduh 2 file + menaruh foto. Poin dan lencana sudah tercatat selama semester.

## Foto dan privasi

**Repo publik.** `gh repo view` menunjukkan `inspiralabs/ekskul-coding` publik. Isinya sudah memuat nama lengkap 37
anak dan nama sekolah (`tools/kelompok.json`, `docs/HANDOUT_SISWA.md`). Untuk foto, dua jalan:

- **A (disarankan): jadikan repo private.** Alur push ke master, webhook, dan `deploy.sh` tetap sama (server perlu deploy
  key kalau saat ini menarik lewat HTTPS tanpa login). Vercel juga mendukung repo private.
- B: repo tetap publik, data portofolio di repo private terpisah atau langsung disalin ke server (`scp`) di luar git.

Sampai keputusan ini diambil, `.gitignore` di branch ini mengabaikan `portofolio/siswa/` supaya data asli tidak
ter-commit tidak sengaja.

**Nama dan foto.** Keputusan pemilik: nama lengkap ditampilkan, foto ditampilkan (foto bisa berupa alat, rangkaian,
atau suasana kelas, tidak harus wajah siswa). Hapus atas permintaan orang tua: keluarkan ID siswa dari
`tools/kelompok.json` (atau hapus foldernya), `bangun`, unggah ulang ke server. Data portofolio tidak di-commit, jadi
tidak tertinggal di riwayat git.

**Aturan foto.**
- Tidak ada data kontak, alamat rumah, seragam dengan nama, atau papan nama sekolah yang jelas di foto.
- Generator selalu menulis ulang setiap foto sebagai JPEG baru tanpa metadata, jadi lokasi GPS dari HP tidak pernah ikut
  terbit. SVG ditolak untuk siswa asli (bisa berisi script; SVG hanya dipakai di data contoh).
- Batas 500 KB per foto. Dengan 5 sampai 8 foto per anak, satu halaman di bawah 4 MB, cukup ringan untuk kuota HP.

**Tidak terindeks.** Halaman memakai `<meta name="robots" content="noindex, nofollow">`; di server ditambah header
`X-Robots-Tag` (lihat di bawah). Halaman bisa dibuka siapa pun yang punya link, tapi tidak muncul di Google.
`noindex` tidak membuat halaman rahasia: alamatnya mudah ditebak (`smp-07.inspiralabs.id/siswa/<nama-depan>/`).
Jangan menaruh data kontak atau alamat di foto maupun nama file.

## Sertifikat

- `sertifikat.html` di folder yang sama, membaca `data.json` yang sama. Tidak ada data yang diketik dua kali.
- A4 lanskap lewat `@page { size: A4 landscape; margin: 0 }`. Ukuran teks memakai satuan `cqw` (persen lebar
  sertifikat), sehingga pratinjau di HP dan hasil cetak 297 mm punya tata letak yang sama. Sudah dicek: hasil PDF
  tepat 1 halaman A4 lanskap.
- Isi: penerbit (InspiraLabs dan sekolah), nama, kalimat penyelesaian (jenjang, semester, 13 pertemuan, nama proyek),
  poin dan lencana, tanggal P13, garis tanda tangan pelatih, nomor, QR, dan alamat halaman sebagai teks.
- Nomor: `EKC-2026-SMP-07-02` (tahun, Device ID, urutan anggota). Unik dan bisa dibaca manusia.
- QR dibuat di browser oleh `qrcode-generator` dari CDN jsDelivr. Kalau CDN gagal dimuat, QR disembunyikan dan alamat
  tetap tercetak sebagai teks.
- Cetak: tutor buka halaman, klik "Cetak atau simpan PDF", pilih A4, lanskap, margin "Tidak ada", centang
  "Grafik latar". Tanda tangan basah di atas garis, atau nanti diganti gambar tanda tangan.

## Sambungan ke deploy yang sudah ada

`tools/kelompok.py deploy` menghapus seluruh `kelompok/<id>/` sebelum menyalin kiriman baru (`shutil.rmtree`).
Kalau portofolio ditaruh di `kelompok/<id>/siswa/`, setiap deploy ulang dashboard akan menghapusnya. Jadi portofolio
punya folder sendiri, dilayani oleh container nginx yang sama:

```yaml
# docker-compose.yml, service kelompok: tambah satu volume
      - /srv/data/ekskul-portofolio:/usr/share/nginx/portofolio:ro   # di luar repo, tidak ikut git
```

```nginx
# deploy/kelompok.nginx.conf, di dalam server { }: tambah satu location
    location ^~ /siswa/ {
        root /usr/share/nginx/portofolio/$kelompok;
        add_header X-Robots-Tag "noindex, nofollow" always;
        try_files $uri $uri/ =404;
    }
```

Lalu bangun dan **unggah langsung ke server, tidak lewat git**:

```powershell
py tools/portofolio.py bangun portofolio/siswa dist/portofolio
scp -r dist/portofolio/* <user>@<vps>:/srv/data/ekskul-portofolio/   # atau rsync --delete supaya yang dihapus ikut hilang
```

Hasil bangun **tidak pernah di-commit**: kalau di-commit, Vercel (yang men-deploy root repo ini) ikut menerbitkannya
di `ekskulcoding.inspiralabs.id` tanpa `X-Robots-Tag`, dan foto anak tersimpan selamanya di riwayat git.
`.gitignore` dan `.vercelignore` di branch ini sudah mengabaikan `portofolio/siswa/` dan `portofolio-terbit/` sebagai
pengaman. Belum diterapkan di branch ini: folder `deploy/` dan `docker-compose.yml` tidak diubah, perlu persetujuan. Satu baris cek di `deploy/smoke.sh` bisa
ditambahkan: `curl -s -H "Host: smp-07.inspiralabs.id" http://127.0.0.1/siswa/<slug>/ | grep -q portofolio.js`.

Dashboard kelompok bisa menautkan ke portofolio anggotanya. Itu cukup satu baris `<a href="/siswa/rafif/">` di
kartu Profil Kelompok, bisa dijadikan challenge kecil di P13 atau ditambahkan tutor saat deploy.

## Rencana bertahap

Hari ini 23 Oktober 2026. P13 SMP 13 November, P13 SMA 14 November.

**Sebelum P13 (sekarang sampai 12 November)**
- Putuskan tempat menyimpan foto dan siapa penanda tangan sertifikat.
- Tutor memotret per pertemuan (P10 sampai P13 tersisa): alat, rangkaian, suasana kelas. Peran Fotografer di P13 sudah ada.
- Catat poin challenge di Log Poin Sesi seperti biasa: itulah sumber lencana.
- Isi kolom "Proyek / Karya" dan "Kekuatan" di sheet Catatan Tutor.
- Koreksi `portofolio/kurikulum.json` untuk P1 sampai P8 (diringkas dari silabus, isi kelas mungkin berbeda).

**Di P13**
- Tutor memotret alat di rumah kardus (nama file diawali `proyek`, mis. `proyek-akhir.jpg`).
- Pastikan alat menyala saat showcase supaya kiriman terakhir yang terekam adalah data hari showcase.

**Setelah P13 (target terbit 27 November)**
- Unduh xlsx penilaian SMP & SMA, `bangun --foto <folder>`, cek di laptop, terapkan perubahan nginx dan compose,
  unggah hasil ke server.
- Cetak sertifikat untuk dibagikan, dan kirim link portofolio ke orang tua lewat grup kelas.

**Nanti (semester 2 atau kalau ada waktu)**
- Isi challenge per pertemuan otomatis dari Log Poin Sesi.
- Halaman `/siswa/` per kelompok yang mendaftar anggotanya.
- Semester 2 menambah pertemuan ke halaman yang sama (data.json per semester), jadi portofolio tumbuh sepanjang tahun.
- Tanda tangan digital (gambar) di sertifikat.

## Prototipe di branch ini

| File | Isi |
|---|---|
| `portofolio/templat/index.html`, `sertifikat.html`, `portofolio.css`, `portofolio.js` | Templat, sama untuk semua siswa, membaca `data.json`. HTML/CSS/JS biasa, tanpa build. |
| `portofolio/kurikulum.json` | P1 sampai P13 SMP dan SMA: tanggal, judul, yang dipelajari, nama challenge P9 sampai P13. |
| `portofolio/contoh/` | Data fiktif ("Fulan bin Fulan", Device ID `smp-00`) dengan ilustrasi SVG. Halaman menampilkan pita "Halaman contoh". |
| `tools/portofolio.py` | `bangun` (dari xlsx penilaian), `contoh`, `cek` (Python standar, self-check dengan `assert`). |
| `tools/kelompok.json` | Kolom baru `id_siswa` per kelompok. |

Sudah diuji dengan spreadsheet penilaian asli SMP dan SMA (22 Okt 2026): 37 halaman, 118 lencana dari Log Poin Sesi,
tidak ada nomor HP yang ikut. Hasil uji tidak disimpan di repo.

`portofolio/` ditambahkan ke `.vercelignore` supaya templat tidak ikut terbit di situs ekskul.

## Risiko

- **Log Poin Sesi tidak lengkap.** Lencana hanya muncul untuk pertemuan yang dicatat. Catat poin di kelas seperti biasa.
- **Nama sheet berubah.** Generator mencari sheet dari awal namanya ("Master Data", "Log Poin Sesi", "Gradebook",
  "Catatan Tutor") dan kolom dari judulnya, jadi menambah kolom aman, tapi mengganti judul kolom di atas tidak.
- **P1 sampai P8 tanpa nama challenge.** Kalau challenge di P1 sampai P8 tercatat di Log Poin Sesi, nama lencananya
  generik ("Challenge P6") sampai namanya ditambahkan ke `kurikulum.json`.
- **Backend atau Supabase mati.** Kartu alat menampilkan pesan gagal muat, sisa halaman tetap tampil karena statis.
- **CDN QR atau Google Fonts diblokir di jaringan sekolah.** Sertifikat tetap tercetak dengan alamat teks dan font sistem.

## Pertanyaan yang masih terbuka

1. Siapa yang menandatangani sertifikat: pelatih saja (Unggul Sulaiman, S.Kom), atau juga kepala sekolah atau pimpinan
   InspiraLabs? Perlu logo sekolah?
2. Peringkat 3 besar ditampilkan, atau tidak sama sekali?
3. Berapa lama halaman online (usul: sampai 30 Juni 2027)?
4. Format nomor sertifikat `EKC-2026-SMP-07-02` sudah cocok, atau ada format resmi InspiraLabs?
5. Link spreadsheet penilaian saat ini bisa dibuka siapa saja yang punya link, padahal berisi No. HP siswa dan orang
   tua. Disarankan diubah ke "Restricted"; generator tidak butuh link publik.
