# Panduan Tutor: Server Kelas (Post-test, Paket Proyek, Dashboard)

Untuk tutor/pengajar ekskul coding yang belum pernah memakai repo ini. Tidak perlu bisa coding.

**Server kelas** adalah halaman web kecil yang jalan di **laptop pengajar** selama kelas. Siswa membukanya lewat
WiFi kelas untuk:
- mengerjakan **post-test** (nilainya otomatis jadi file Excel di laptop pengajar),
- mengunduh **paket proyek** kelompoknya (zip berisi program ESP32 + website),
- membuka **dashboard** kelompoknya (`smp-07.inspiralabs.id`, dst).

---

## A. Persiapan sekali (± 15 menit)

### 1. Pasang Python
- **Windows:** buka https://www.python.org/downloads/ → unduh Python 3 terbaru → jalankan installer →
  **centang "Add python.exe to PATH"** → *Install Now*.
- **Mac:** unduh dari alamat yang sama → jalankan installer `.pkg`.
- Cek: buka **Command Prompt** / **PowerShell** (Windows) atau **Terminal** (Mac), ketik:
  ```
  py --version        (Windows)
  python3 --version   (Mac)
  ```
  Harus muncul `Python 3.x`. Tidak perlu memasang pustaka lain untuk server kelas.

### 2. Ambil repo
Simpan repo di folder **Documents**. **Jangan** di `C:\Windows\System32`: itu folder sistem yang tidak boleh ditulis,
dan server tidak bisa menyimpan nilai post-test di sana. Folder itu jadi tempat awal kalau PowerShell dibuka dengan
*Run as administrator*, jadi **buka PowerShell biasa** (tidak perlu administrator).

Pilih salah satu:
- **Tanpa Git (paling mudah):** buka https://github.com/inspiralabs/ekskul-coding → tombol hijau **Code** →
  **Download ZIP** → klik kanan zip → **Extract All**, misalnya ke `Documents\ekskul-coding`.
- **Dengan Git:** buka PowerShell biasa, lalu:
  ```
  cd $HOME\Documents
  git clone https://github.com/inspiralabs/ekskul-coding.git
  ```

Kalau materi diperbarui, unduh ZIP lagi (atau `git pull`). Folder `dist/` berisi nilai post-test: **jangan ikut
terhapus** saat mengganti folder repo, salin dulu ke tempat lain.

### 3. Buka terminal di folder repo
- **Windows:** buka folder repo di File Explorer → klik address bar → ketik `powershell` → Enter.
- **Mac:** Terminal → ketik `cd ` (dengan spasi) → seret folder repo ke jendela Terminal → Enter.

Semua perintah di bawah diketik di jendela ini. Di Mac, ganti `py` dengan `python3`.

### 4. Cek alatnya jalan
```
py tools/server_kelas.py cek
```
Harus muncul **`cek OK`**.

---

## B. H-1 sebelum kelas: coba dulu (± 10 menit)

1. Sambungkan laptop ke **WiFi yang sama** dengan yang dipakai siswa.
2. **Windows: ubah profil WiFi jadi Private.** WiFi sekolah biasanya dianggap *Public*, dan siswa tidak bisa
   membuka halaman server. Buka Settings → Network & internet → Wi-Fi → (nama WiFi) → Network profile
   type → pilih **Private**.
3. Jalankan server dengan post-test yang **sudah lewat** (supaya data coba tidak tercampur nilai asli):
   ```
   py tools/server_kelas.py --tes smp-09
   ```
4. Kalau muncul jendela **Windows Firewall**: centang *Private networks* → **Allow**.
5. Dari HP/laptop lain di WiFi yang sama, buka alamat bertanda `<- utama (WiFi)` yang tertulis di terminal,
   misalnya `http://192.168.1.10:8000`. Kerjakan post-test sampai muncul **"Terima kasih"**.
6. Di laptop pengajar buka **`http://127.0.0.1:8000/guru`** → terlihat "1 jawaban" → **Unduh .xlsx** → buka di
   Excel, cek isinya.
7. Hentikan server: klik jendela terminal → **Ctrl+C**.
8. **Hapus data coba:** hapus file `dist/posttest/smp-09.jsonl` dan `dist/posttest/smp-09.xlsx`.

Kalau langkah 5 gagal (halaman tidak terbuka), lihat bagian **E. Kalau ada masalah**.

---

## C. Di kelas

### Sebelum siswa datang
```
py tools/server_kelas.py --tes smp-10
```
- Ganti `smp-10` dengan pertemuan hari itu: `smp-09` … `smp-13` atau `sma-09` … `sma-13`.
- Boleh juga tanpa `--tes` (post-test belum dibuka), lalu buka dari halaman pengajar saat waktunya tiba.
- Terminal menampilkan alamat untuk siswa. **Tulis di papan atau proyeksikan** alamat bertanda `<- utama (WiFi)`.
  Alamat ini bisa berubah tiap pertemuan (tergantung WiFi), jadi selalu ambil dari terminal hari itu.
- **Jangan menutup jendela terminal** selama kelas. Menutupnya = server mati.
- **Jangan mengklik di dalam jendela terminal** saat kelas berjalan (Windows bisa "membekukan" tulisannya).
  Kalau terlanjur, tekan **Esc**. Halaman siswa tetap jalan.

### Halaman pengajar: `http://127.0.0.1:8000/guru`
Hanya bisa dibuka dari laptop pengajar.
- **Buka** / **Tutup** post-test per pertemuan.
- Jumlah jawaban yang sudah masuk.
- **Unduh .xlsx** nilai.

### Yang dilihat siswa
1. Buka alamat server → beranda berisi kartu **Post-test** (kalau sedang dibuka) dan **Paket proyek & dashboard**.
2. **Mulai post-test** → isi Nama lengkap, Kelas, pilih Kelompok → jawab 5 soal → **Kirim jawaban**.
3. Muncul **"Terima kasih"**. Nilai **tidak** ditampilkan ke siswa.
   - Isian yang belum lengkap ditolak dengan pesan, jawaban lain tetap terisi.
   - Menekan refresh di halaman "Terima kasih" tidak mengirim ulang.
4. Di bagian paket proyek, siswa mencari namanya → **Unduh paket** (zip, lalu *Extract All*) atau
   **Buka dashboard**.

### Selesai post-test
- Di halaman pengajar klik **Tutup**, supaya tidak ada kiriman susulan.
- Hentikan server: **Ctrl+C** di terminal.

---

## D. Setelah kelas: nilai ke gradebook

1. Nilai tersimpan otomatis di laptop pengajar, folder repo:
   - `dist/posttest/smp-10.xlsx`: siap dibuka di Excel atau diunggah ke Google Drive,
   - `dist/posttest/smp-10.jsonl`: cadangan (jangan dihapus).
2. Kolom file xlsx: **Waktu, Nama, Kelas, Kelompok, Soal 1–5 (jawaban siswa), Benar, Nilai (0–100),
   Poin Log Poin Sesi**.
3. Salin kolom **Poin Log Poin Sesi** (2 poin per jawaban benar, maks 10) ke kolom **Post - Test** di sheet
   **Log Poin Sesi** spreadsheet penilaian, pada baris pertemuan dan siswa yang sesuai. Jangan menyalin kolom
   *Nilai* (0–100): gradebook menghitung sendiri rata-rata post-test dari kolom Post - Test.
4. Siswa yang mengerjakan dua kali: kedua baris tercatat dengan waktunya; pakai yang **terakhir**.
5. Simpan salinan `dist/posttest/` ke Google Drive (folder pertemuan) supaya tidak hilang kalau laptop bermasalah.

Server bisa dijalankan ulang kapan saja; nilai lama tidak hilang (jawaban baru ditambahkan ke file yang sama).

---

## E. Kalau ada masalah

| Gejala | Penyebab paling mungkin | Coba ini |
|---|---|---|
| `Repo tersimpan di folder sistem Windows` / `Access is denied ... System32` | Repo ada di `C:\Windows\System32` (PowerShell dibuka sebagai administrator) | Pindahkan repo ke Documents (bagian A langkah 2), buka PowerShell biasa |
| `py` tidak dikenal | Python belum terpasang / tidak masuk PATH | Pasang ulang Python, centang "Add python.exe to PATH". Coba `python` sebagai ganti `py` |
| `Port 8000 dipakai` | Server lain masih jalan | Tutup terminal server lama, atau jalankan dengan `--port 8080` |
| Halaman tidak terbuka dari HP/laptop siswa | Profil WiFi masih *Public* / firewall | Ubah ke *Private* (bagian B langkah 2), izinkan Python di Windows Firewall |
| Masih tidak terbuka | WiFi sekolah memblokir antar-perangkat | Pakai hotspot HP atau router sendiri; semua perangkat di jaringan itu |
| Alamat di terminal lebih dari satu | Laptop punya beberapa adaptor jaringan | Pakai yang bertanda `<- utama (WiFi)`; kalau gagal, coba yang lain |
| Halaman pengajar `/guru` "Khusus pengajar" | Dibuka dari perangkat lain | Buka di laptop pengajar: `http://127.0.0.1:8000/guru` |
| Siswa melihat "Belum dibuka" | Post-test belum dibuka | Halaman pengajar → **Buka**, lalu siswa muat ulang halaman |
| `smp-10.xlsx` tidak bisa disimpan/diperbarui | File sedang dibuka di Excel | Jawaban tetap aman di `.jsonl`. Tutup Excel, lalu **Unduh .xlsx** dari halaman pengajar |
| Server/WiFi bermasalah total | | Pakai Google Form post-test di Linktree sebagai cadangan |

---

## F. Untuk pengelola repo

- File yang dipakai: `tools/server_kelas.py` (server & halaman), `tools/posttest.py` (memuat soal, menilai,
  menyimpan `.jsonl` + `.xlsx`; dipakai server, tidak dijalankan langsung), `tools/kelompok.py` (paket zip per
  kelompok, dibangun ulang tiap server start).
- Soal diambil dari `kurikulum/<smp|sma>/pNN/sumber/POST_TEST_P<N>_<JENJANG>_InspiraLabs.md` (file yang sama dengan
  sumber Google Form). Mengubah soal = edit file itu; server memakai versi terbaru saat dijalankan.
- Daftar kelompok & nama siswa: `tools/kelompok.json`.
- Self-check: `py tools/server_kelas.py cek` dan `py tools/posttest.py cek`.
