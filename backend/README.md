# Backend Smart Room Monitor — Panduan Panitia/Pelatih

> Dokumen ini untuk PANITIA/PELATIH. Siswa dan pengajar web dev tidak perlu membaca atau
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
   - `anon public key` (cukup, tidak perlu service_role) → jadi `SUPABASE_KEY`

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

Harus muncul log: `Server jalan di port 3000`.

## 3. Deploy backend & catat URL server

Backend di-deploy ke server online (bukan dijalankan di laptop saat kelas). Setelah deploy
(mis. `https://api-ekskulcoding.inspiralabs.id`), catat URL itu — dipakai untuk mengganti
`<url-backend-anda>` di:
- `SERVER_URL` pada SEMUA firmware ESP32 (`firmware/*/*.ino`)
- `API_BASE` pada SEMUA `api.js` dashboard (`Demo/SMA/SMP - Smart Room Monitor/api.js`)

**Penting — ESP32 dan HTTPS:** karena backend HTTPS, firmware ESP32 sudah disiapkan pakai
`WiFiClientSecure` dengan `client.setInsecure()` (lewati verifikasi sertifikat — cukup untuk
demo kelas, bukan pola aman untuk production). Tidak perlu setup tambahan di sisi ESP32
selain mengisi `SERVER_URL` dengan URL HTTPS server.

**Penting — kontrol fan/relay ke ESP32:** backend mengirim perintah relay dengan menghubungi
balik `http://<ip-esp32>/fan`. Ini HANYA berfungsi kalau IP ESP32 di jaringan sekolah bisa
diakses dari internet (mis. lewat port forwarding router atau IP publik). Pastikan ini sudah
dikonfirmasi berfungsi sebelum kelas — kalau tidak, kontrol fan tetap "jalan" lewat fallback
di respons `POST /api/readings` (jeda hingga ~4 detik), tapi tidak akan terasa instan.

## 4. Tentukan daftar Device ID

Sebelum kelas, tentukan daftar ID tetap per kelompok, contoh:

| Kelompok | Device ID |
|---|---|
| SMA 1 | `sma-1` |
| SMA 2 | `sma-2` |
| ... | ... |
| SMP 1 | `smp-1` |
| SMP 2 | `smp-2` |
| ... | ... |

Bagikan daftar ini di handout siswa (lihat `HANDOUT_SISWA.md` di root proyek). Setiap kelompok
WAJIB memakai ID dari daftar ini — dua kelompok dengan ID sama akan saling menimpa data.

## 5. Cek server jalan dengan benar (`curl`)

Uji lokal dulu sebelum deploy (`npm start` di laptop, target `localhost`):
```bash
curl -X POST http://localhost:3000/api/readings ^
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

## Yang TIDAK boleh diubah siswa/pengajar web dev di folder ini

Seluruh isi folder `backend/` (termasuk `server.js`, `.env`, skema Supabase) adalah infrastruktur
siap pakai. Tidak ada bagian di sini yang menjadi materi ajar atau tugas siswa.
