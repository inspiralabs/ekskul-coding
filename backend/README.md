# Backend Smart Room Monitor — Panduan Panitia/Tutor

> Dokumen ini untuk PANITIA/TUTOR. Siswa dan pengajar web dev tidak perlu membaca atau
> menjalankan apa pun di folder ini — mereka hanya menerima URL server + API key.

## 1. Setup Supabase (sekali saja)

1. Buat project baru di [supabase.com](https://supabase.com).
2. Buka **SQL Editor** → New query → tempel isi `supabase_schema.sql` di folder ini → Run.
   File ini membuat tabel di skema **`ekskul_coding_asy_syahid`**, bukan `public`.
3. **WAJIB**: buka **Project Settings → API → Exposed schemas**, tambahkan
   `ekskul_coding_asy_syahid` ke daftar (secara default hanya `public` yang terlihat oleh
   backend). Tanpa langkah ini, server akan error "schema must be one of the following"
   saat startup atau saat query pertama.
4. Buka **Project Settings → API** → catat:
   - `Project URL` → jadi `SUPABASE_URL`
   - `service_role` / secret key → jadi `SUPABASE_KEY` (wajib sejak ada upload foto portofolio;
     key `anon` cukup untuk sensor & kipas, tapi upload foto ke Storage akan ditolak)

## 2. Setup & jalankan server

```bash
cd backend
npm install
copy .env.example .env      # Windows (PowerShell: Copy-Item .env.example .env)
```

Edit `.env`, isi `SUPABASE_URL` dan `SUPABASE_KEY` dari langkah 1, dan tentukan `API_KEY` bebas
(contoh: `demo-kelas-2026`) — nilai ini yang akan dipatri di SEMUA firmware ESP32.

```bash
npm start
```

Harus muncul log: `Server jalan di port 3334`.

## 3. Deploy backend & catat URL server

Backend jalan di **VPS Inspiralabs** sebagai app `api-ekskulcoding` (Docker, lewat `docker-compose.yml` +
`backend/Dockerfile` di repo ini). Push ke `master` otomatis men-deploy ulang (±1 menit). `.env` server:
`sudo -u deploy nano /srv/apps/api-ekskulcoding/.env` (kunci: lihat `.env.example` di root). `PORT` diatur compose (3000).

Backend di-deploy ke server online (bukan dijalankan di laptop saat kelas). Setelah deploy
(mis. `https://api-ekskulcoding.inspiralabs.id`), catat URL itu — dipakai untuk mengganti
`<url-backend-anda>` di:
- `SERVER_URL` pada SEMUA firmware ESP32 (`firmware/*/*.ino`)
- `API_BASE` pada SEMUA `api.js` dashboard (`demo/api.js`, `sma/api.js`, `smp/api.js`)

**Penting — ESP32 dan HTTPS:** karena backend HTTPS, firmware ESP32 sudah disiapkan pakai
`WiFiClientSecure` dengan `client.setInsecure()` (lewati verifikasi sertifikat — cukup untuk
demo kelas, bukan pola aman untuk production). Tidak perlu setup tambahan di sisi ESP32
selain mengisi `SERVER_URL` dengan URL HTTPS server.

**Penting — kontrol fan/relay ke ESP32:** backend mengirim perintah relay dengan menghubungi
balik `http://<ip-esp32>/fan`. Ini HANYA berfungsi kalau IP ESP32 di jaringan sekolah bisa
diakses dari internet (mis. lewat port forwarding router atau IP publik). Pastikan ini sudah
dikonfirmasi berfungsi sebelum kelas — kalau tidak, kontrol fan tetap "jalan" lewat fallback
di respons `POST /api/readings` (jeda hingga ~4 detik), tapi tidak akan terasa instan.

## 4. Daftar Device ID

Daftar tetap ada di `tools/kelompok.json` (smp-01..smp-13, sma-01..sma-06) dan
`docs/HANDOUT_SISWA.md`. PIN kontrol fan SMA ada di env `FAN_PINS` (lihat `.env.example`);
device yang tidak terdaftar di `FAN_PINS` (mis. Demo) tidak dicek PIN-nya.

## 5. Cek server jalan dengan benar (`curl`)

Uji lokal dulu sebelum deploy (`npm start` di laptop, target `localhost`):
```bash
curl -X POST http://localhost:3334/api/readings ^
  -H "Content-Type: application/json" -H "X-API-Key: ISI_API_KEY_ANDA" ^
  -d "{\"deviceId\":\"sma-1\",\"temp\":28,\"humidity\":60,\"ip\":\"192.168.1.99\"}"
```
Setelah deploy, ulangi dengan URL server (`https://api-ekskulcoding.inspiralabs.id` dst).

Harus balas `{"ok":true,"fanOn":false}` dan baris baru muncul di tabel `readings` Supabase
(Table Editor). Detail verifikasi lengkap ada di plan implementasi
(`docs/plans/2026-07-28-smart-room-monitor.md` kalau disalin ke situ, atau lihat riwayat plan).

## 6. Saat sesi kelas

- Pastikan backend sudah jalan di server (bukan laptop) SEBELUM siswa mulai — cek dengan
  `curl` ke URL server seperti langkah 5.
- Kalau server di-restart/redeploy, data lama tetap aman di Supabase (tidak hilang).
- Kalau URL backend berubah (pindah hosting, ganti domain), update ulang `SERVER_URL` di
  semua firmware dan `API_BASE` di semua `api.js` sebelum kelas dimulai.

## 7. Portofolio siswa: serah-terima pemilik

Endpoint `/api/portofolio/*` (dashboard `ekskulcoding.inspiralabs.id/dashboard/`, profil
`/profil/?s=<slug>`). Selama `PORTOFOLIO_SECRET` kosong, semua endpoint ini membalas 503 dan
sensor/kipas tetap jalan normal. Urutan go-live (jangan dibalik):

1. **Cek jenis `SUPABASE_KEY`** di server. Harus `service_role` (atau `sb_secret_...`):
   ```bash
   K=$(sudo grep '^SUPABASE_KEY=' /srv/apps/api-ekskulcoding/.env | cut -d= -f2- | tr -d '"'); case "$K" in sb_secret_*) echo service_role;; sb_publishable_*) echo anon;; *) echo "$K" | cut -d. -f2 | base64 -d 2>/dev/null; echo;; esac
   ```
   Masih `anon`? Supabase → Project Settings → API Keys → salin secret/service_role key → ganti di `.env`.
2. **Supabase → SQL Editor** → jalankan blok `PORTOFOLIO SISWA` di akhir `supabase_schema.sql`.
3. **Supabase → Storage** → New bucket `portofolio-foto`, **Public bucket: ON**.
4. **Isi `.env` server**: `PORTOFOLIO_SECRET` (hasil `openssl rand -hex 32`), `ADMIN_EMAIL`,
   `ADMIN_PASSWORD`, `PORTOFOLIO_BUCKET=portofolio-foto`. Lalu `sudo -u deploy /srv/bin/deploy.sh api-ekskulcoding`.
5. **Merge PR** portofolio → deploy otomatis. Cek: `/health` → ok; `/api/portofolio/profil/x` → **404**
   (bukan 503); sensor kelas tetap masuk (`/api/readings/sma-01?limit=1`).
6. **Impor**: unduh spreadsheet penilaian SMP & SMA sebagai .xlsx →
   `py tools/portofolio.py impor penilaian-smp.xlsx penilaian-sma.xlsx` → cetak `dist/kode-akses-<tanggal-jam>.csv`
   jadi kertas lipat per siswa. Impor boleh diulang: kode & isian siswa tidak berubah.
7. **Uji ujung ke ujung** dengan satu siswa: masuk lewat HP → unggah foto → profil tampil → admin isi kelas.

Coba di laptop tanpa Supabase: `node backend/portofolio-dev.js` (data fiktif, petunjuk di kepala file).

**Tes sebelum push/merge** (tanpa jaringan, tanpa Supabase):

```bash
cd backend && npm test              # 50 tes: siswa, guru/admin, impor, foto, skema SQL, server.js
py tools/portofolio.py cek          # parser spreadsheet + perintah impor (server tiruan)
```

Setelah langkah 2–3 di atas (tabel & bucket sudah ada), jalankan sekali tes Supabase sungguhan. Tes ini hanya
memakai ID uji `SMA-999`/`SMP-999` dan menghapusnya lagi:

```bash
cd backend && UJI_SUPABASE=1 UJI_ENV=/path/ke/.env node --test portofolio-supabase.test.js
```

## Yang TIDAK boleh diubah siswa/pengajar web dev di folder ini

Seluruh isi folder `backend/` (termasuk `server.js`, `.env`, skema Supabase) adalah infrastruktur
siap pakai. Tidak ada bagian di sini yang menjadi materi ajar atau tugas siswa.

### Lembar nilai di belakang sertifikat (opsional)

Sertifikat (`/profil/sertifikat/?s=<slug>`) punya lembar kedua berisi rincian nilai dari sheet **Gradebook** (seluruh
kolom baris siswa itu) untuk siswa pemiliknya (sedang login) dan admin. Nilai dibaca langsung dari Google Sheets, bukan diimpor, dan disimpan di memori 5 menit.
Isi di `.env` server (ID = bagian di antara `/d/` dan `/edit` pada link spreadsheet), lalu redeploy:

```
NILAI_SHEET_SMP=<id spreadsheet penilaian SMP>
NILAI_SHEET_SMA=<id spreadsheet penilaian SMA>
```

Kalau kosong, sertifikat tampil tanpa nilai. ID ini jangan ditulis di repo (siapa pun yang punya ID bisa mengunduh
seluruh spreadsheet). Logikanya di `portofolio-nilai.js`.

### Tanda tangan dan stempel di sertifikat (opsional)

Simpan `ttd.png` (tanda tangan, latar transparan) dan `stempel.png` di bucket Storage **privat** `portofolio-aset`
(nama lain: env `PORTOFOLIO_BUCKET_ASET`). Keduanya hanya dikirim ke siswa pemilik sertifikat yang sedang login dan
admin, lewat alamat sementara 10 menit. Jangan menaruh file ini di repo atau di bucket foto yang publik.
