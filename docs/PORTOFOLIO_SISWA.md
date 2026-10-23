# Portofolio Siswa Ekskul Coding: usulan dan prototipe

Ide awal: tiap anak punya website sendiri di domain inspiralabs.id berisi apa yang dipelajari P1 sampai P13,
praktik yang dikerjakan, hasil tiap pertemuan, proyek akhir P13, foto selama ekskul, dan sertifikat.
Dokumen ini menjawab "apa yang bisa diperbaiki", lalu menjelaskan cara membuatnya dengan kerja tutor sesedikit mungkin.
Prototipe sudah ada di branch `feat/portofolio-siswa` (folder `portofolio/`, generator `tools/portofolio.py`).

## Ringkasan: 8 perbaikan, urut dari yang paling penting

1. **Beres-beres privasi sebelum ada foto.** Repo `inspiralabs/ekskul-coding` saat ini publik. Foto anak yang
   di-commit ke sana akan tersimpan di riwayat git selamanya, walaupun nanti dihapus. Jadikan repo private, atau simpan
   data portofolio di luar repo ini (lihat bagian Privasi). Ditambah: formulir izin orang tua, halaman `noindex`
   (tidak muncul di Google), dan foto wajib dibersihkan dari data lokasi GPS.
2. **Satu halaman dan satu sertifikat per siswa, bukan per kelompok.** Device ID itu kelompok (2 sampai 4 anak di
   smp-06 sampai smp-13, sma-04 sampai sma-06). Alamatnya: `https://smp-07.inspiralabs.id/siswa/rafif/`.
   Dashboard kelompok tetap di `https://smp-07.inspiralabs.id/`.
3. **Isi dari data, bukan dari HTML.** Tutor tidak pernah mengedit HTML. Tiap siswa punya satu `siswa.json` dan satu
   folder `foto/`. Materi P1 sampai P13 ditulis sekali di `portofolio/kurikulum.json` dan dipakai semua siswa. Poin
   dan catatan tutor bisa ditarik dari gradebook Google Sheets yang sudah ada.
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

## Alur kerja tutor

```powershell
py tools/portofolio.py kerangka          # sekali: buat portofolio/siswa/<id>/<slug>/siswa.json untuk 37 siswa
# isi siswa.json, taruh foto di portofolio/siswa/<id>/<slug>/foto/
py tools/portofolio.py bangun --gradebook "<URL CSV gradebook SMP>"   # cek semua, lalu tulis dist/portofolio/
py -m http.server 8091 -d dist/portofolio   # lihat: http://localhost:8091/smp-07/siswa/rafif/
py tools/portofolio.py cek               # self-check generator
```

- `kerangka` mengisi nama, urutan, anggota kelompok, dan 13 pertemuan kosong dari `tools/kelompok.json`. File yang
  sudah ada tidak ditimpa. `izin_foto` mulai dari `false`.
- Yang diisi tutor per siswa: `id_siswa` (ID di gradebook, mis. `SMP-005`), `peran`, `nama_kelompok`, challenge yang
  lulus per pertemuan (`["easy", "medium"]`), jumlah tanya jawab, hasil satu kalimat (boleh kosong), daftar foto,
  judul alat dan 3 kalimat P13, `izin_foto`, `tampil_nama_lengkap`. Contoh lengkap: `portofolio/contoh/smp-00/fulan/siswa.json`.
- `bangun` menolak semuanya kalau ada satu kesalahan (ID tidak dikenal, level salah atau dobel, tanya jawab bukan angka
  0-20, foto hilang, foto > 500 KB, foto bukan JPEG asli, foto masih ber-EXIF/XMP, nama file foto aneh, `id_siswa` tidak
  ada di gradebook), dengan pesan per siswa. Tidak ada portofolio setengah jadi yang ikut terbit.
- `bangun` selalu membangun ulang dari nol: folder `<id>/siswa/` di hasil dibersihkan dulu, jadi siswa yang datanya
  dihapus ikut hilang dari hasil.
- Dengan `--gradebook`, total poin diambil dari kolom "Total Poin Keseluruhan" (sumber resmi, sama dengan leaderboard).
- Perkiraan kerja: 5 sampai 10 menit per siswa kalau poin per pertemuan disalin dari Log Poin Sesi, sekitar 4 sampai 6 jam
  untuk 37 siswa, bisa dibagi antar tutor. Ini perkiraan, belum diukur.

Langkah berikut yang paling menghemat waktu: tab **Log Poin Sesi** di spreadsheet gradebook belum di-publish (yang
publik hanya tab "Gradebook SMP"). Kalau tab itu di-publish sebagai CSV, generator bisa mengisi challenge per pertemuan
otomatis, dan tutor tinggal menulis hasil, 3 kalimat, dan foto. Perlu melihat kolomnya dulu.

## Foto dan privasi

**Repo publik.** `gh repo view` menunjukkan `inspiralabs/ekskul-coding` publik. Isinya sudah memuat nama lengkap 37
anak dan nama sekolah (`tools/kelompok.json`, `docs/HANDOUT_SISWA.md`). Untuk foto, dua jalan:

- **A (disarankan): jadikan repo private.** Alur push ke master, webhook, dan `deploy.sh` tetap sama (server perlu deploy
  key kalau saat ini menarik lewat HTTPS tanpa login). Vercel juga mendukung repo private.
- B: repo tetap publik, data portofolio di repo private terpisah atau langsung disalin ke server (`scp`) di luar git.

Sampai keputusan ini diambil, `.gitignore` di branch ini mengabaikan `portofolio/siswa/` supaya data asli tidak
ter-commit tidak sengaja.

**Izin orang tua.** Satu lembar (kertas atau Google Form) per anak, isinya:
- nama lengkap boleh tampil (ya/tidak, kalau tidak: pakai nama panggilan saja),
- foto kegiatan boleh tampil (ya/tidak), wajah boleh terlihat (ya/tidak),
- halaman online sampai tanggal tertentu (usul: 30 Juni 2027), lalu diarsipkan,
- orang tua bisa minta halaman dihapus kapan saja lewat tutor.

Tanpa formulir kembali, `izin_foto` dan `tampil_nama_lengkap` tetap `false`: halaman terbit dengan nama panggilan,
tanpa foto. Nama teman sekelompok di halaman anak lain juga mengikuti izin teman itu masing-masing. Hapus atas
permintaan: hapus folder siswa, `bangun`, unggah ulang ke server (lihat di bawah). Kalau data itu pernah masuk git,
riwayat git tetap menyimpannya, karena itu data portofolio sejak awal tidak di-commit.

**Aturan foto.**
- Foto anak tanpa wajah jadi pilihan bawaan: tangan merakit, alat, layar dashboard, foto dari belakang.
- Tidak ada data kontak, alamat rumah, seragam dengan nama, atau papan nama sekolah yang jelas di foto.
- Semua foto lewat `portofolio/kecilkan-foto.html` dulu. Alat ini jalan di browser tutor (foto tidak di-upload ke
  mana pun), mengecilkan ke 1600 px dan di bawah 500 KB, membetulkan arah foto, dan membuang EXIF termasuk lokasi GPS.
  Generator hanya menerima `.jpg` yang isinya benar-benar JPEG, dan menolak yang masih punya EXIF atau XMP. PNG, WebP,
  dan SVG ditolak untuk siswa asli (SVG bisa berisi script; SVG hanya dipakai di data contoh).
- Batas 500 KB per foto. Dengan 5 sampai 8 foto per anak, satu halaman di bawah 4 MB, cukup ringan untuk kuota HP.

**Tidak terindeks.** Halaman memakai `<meta name="robots" content="noindex, nofollow">`; di server ditambah header
`X-Robots-Tag` (lihat di bawah). Halaman bisa dibuka siapa pun yang punya link, tapi tidak muncul di Google.
`noindex` tidak membuat halaman rahasia: alamatnya mudah ditebak (`smp-07.inspiralabs.id/siswa/<nama-depan>/`).
Karena itu yang tampil hanya yang sudah diizinkan orang tua, dan nama lengkap bawaannya tidak tampil.

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
- Putuskan repo private atau data terpisah, dan siapa penanda tangan sertifikat.
- Bagikan formulir izin orang tua minggu ini, kumpulkan sebelum P13.
- Tutor mulai memotret per pertemuan (P10 sampai P13 tersisa), tanpa wajah sebagai bawaan. Peran Fotografer di P13 sudah ada.
- Publish tab Log Poin Sesi sebagai CSV supaya challenge per pertemuan bisa diisi otomatis.
- Koreksi `portofolio/kurikulum.json` untuk P1 sampai P8 (diringkas dari silabus, isi kelas mungkin berbeda).
- Jalankan `kerangka`, isi P1 sampai P12 yang sudah lewat.

**Di P13**
- Pencatat menulis 3 Kalimat Sakti kelompok di kertas atau Google Form, tutor memotret alat di rumah kardus.
- Pastikan alat menyala saat showcase supaya kiriman terakhir yang terekam adalah data hari showcase.

**Setelah P13 (target terbit 27 November)**
- Isi P13, catatan pelatih, foto; `bangun`; cek di laptop; terapkan perubahan nginx dan compose; push.
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
| `portofolio/contoh/smp-00/fulan/` | Satu siswa SMP karangan ("Fulan bin Fulan", Device ID `smp-00` yang tidak ada) dengan ilustrasi SVG, bukan foto. Halaman menampilkan pita "Halaman contoh". |
| `portofolio/kecilkan-foto.html` | Alat tutor untuk mengecilkan foto dan membuang EXIF, jalan di browser. |
| `tools/portofolio.py` | `kerangka`, `bangun`, `cek` (Python standar, self-check dengan `assert`). |

Cara melihat:

```powershell
py tools/portofolio.py bangun portofolio/contoh
py -m http.server 8091 -d dist/portofolio
# buka http://localhost:8091/smp-00/siswa/fulan/ dan .../sertifikat.html
```

`portofolio/` ditambahkan ke `.vercelignore` supaya templat tidak ikut terbit di situs ekskul.

## Risiko

- **Waktu tutor.** 37 halaman setelah P13 bersamaan dengan akhir semester. Kalau Log Poin Sesi tidak bisa diekspor,
  jalankan versi minimum: poin dari gradebook, 3 kalimat, 1 sampai 2 foto, tanpa hasil per pertemuan.
- **Formulir izin tidak kembali.** Halaman tetap terbit tanpa foto; tidak menunggu semua formulir.
- **P1 sampai P8 tanpa nama challenge.** Kalau challenge di P1 sampai P8 tercatat di Log Poin Sesi, nama lencananya
  generik ("Challenge P6") sampai namanya ditambahkan ke `kurikulum.json`.
- **Backend atau Supabase mati.** Kartu alat menampilkan pesan gagal muat, sisa halaman tetap tampil karena statis.
- **CDN QR atau Google Fonts diblokir di jaringan sekolah.** Sertifikat tetap tercetak dengan alamat teks dan font sistem.

## Pertanyaan untuk pemilik

1. Repo dijadikan private, atau data portofolio dipisah dari repo ini?
2. Siapa yang menandatangani sertifikat: pelatih saja (Unggul Sulaiman, S.Kom, dari silabus), atau juga kepala sekolah atau
   pimpinan InspiraLabs? Perlu logo sekolah?
3. Nama lengkap boleh tampil di halaman publik, atau nama panggilan saja dengan nama lengkap hanya di sertifikat cetak?
4. Peringkat 3 besar ditampilkan, atau tidak sama sekali?
5. Berapa lama halaman online (usul: sampai 30 Juni 2027)?
6. Format nomor sertifikat `EKC-2026-SMP-07-02` sudah cocok, atau ada format resmi InspiraLabs?
7. Siapa yang mengisi data per siswa, dan apakah tab Log Poin Sesi boleh di-publish sebagai CSV?
