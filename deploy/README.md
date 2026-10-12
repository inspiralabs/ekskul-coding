# Deploy — VPS Inspiralabs

Repo ini di-deploy sebagai app **`api-ekskulcoding`** (`/srv/apps/api-ekskulcoding`, branch `master`).
Push ke `master` → webhook GitHub → `/srv/bin/deploy.sh` (build, cek sehat, `smoke.sh`, rollback otomatis).
Situs utama di root tetap di Vercel.

| Service (`docker-compose.yml`) | Alamat |
|---|---|
| `api` (backend) | `https://api-ekskulcoding.inspiralabs.id` |
| `kelompok` (nginx, isi folder `kelompok/`) | `https://<id>.inspiralabs.id`, mis. `smp-07.inspiralabs.id` |

Cloudflare tidak perlu diubah: tunnel `*.inspiralabs.id → 127.0.0.1:80` (Traefik), dan Traefik
mengarahkan `smp-NN`/`sma-NN` ke service `kelompok` (`deploy/kelompok.nginx.conf`).

## Website kelompok (19 ID di `tools/kelompok.json`)

```powershell
py tools/kelompok.py paket                                          # awal: dist/paket/<id>.zip, bagikan ke kelompok
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip --dry-run   # cek kiriman siswa
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip             # salin ke kelompok/smp-07/
git add kelompok/smp-07; git commit -m "deploy: website smp-07"; git push
```

Saat `deploy`, `firmware/` dan file tersembunyi dibuang, `api.js` diganti versi tutor, dan kiriman
ditolak kalau tidak ada `index.html` atau > 10 MB. Bisa deploy beberapa kelompok lalu push sekali.

## Env backend di server

`/srv/apps/api-ekskulcoding/.env` (edit: `sudo -u deploy nano /srv/apps/api-ekskulcoding/.env`):
`SUPABASE_URL`, `SUPABASE_KEY`, `API_KEY`, `PORT`, `FAN_PINS` (PIN kontrol fan SMA, JSON
`{"sma-01":"1234",...}`; PIN dibagikan ke tiap kelompok SMA secara pribadi). Setelah mengubah `.env`:
`sudo -u deploy /srv/bin/deploy.sh api-ekskulcoding`.

## Cek

```bash
curl -s -H "Host: smp-07.inspiralabs.id" http://127.0.0.1/health   # di server -> ok
tail /srv/logs/deploy.log                                            # (sudo) hasil deploy terakhir
```
