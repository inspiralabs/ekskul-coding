# Deploy Website Kelompok IoT — `<id>.inspiralabs.id`

19 website statis (13 SMP + 6 SMA), mis. `smp-07.inspiralabs.id`, di server yang sama dengan
backend `api-ekskulcoding`. Daftar ID & nama: `tools/kelompok.json`.

## 1. Cloudflare — tidak ada yang perlu diubah

Server memakai Cloudflare Tunnel dengan route `*.inspiralabs.id → http://127.0.0.1:80`, dan
sertifikat Cloudflare sudah menutup `*.inspiralabs.id`. Jadi `smp-01.inspiralabs.id` dst
otomatis masuk ke nginx di server. **Jangan** tambah record A / certbot.

Syarat: tidak ada record DNS/route lain bernama `smp-NN` / `sma-NN` yang mendahului wildcard.

## 2. Server — nginx (sekali)

Dari laptop (PowerShell, di folder repo):
```powershell
scp deploy/ekskul-kelompok.nginx.conf USER@SERVER:~
```
Di server:
```bash
sudo mkdir -p /var/www/ekskul
sudo cp ~/ekskul-kelompok.nginx.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/ekskul-kelompok.nginx.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```
Tes di server: `curl -I -H "Host: smp-01.inspiralabs.id" http://127.0.0.1/` → `404` dari nginx
(normal, belum di-deploy). Setelah deploy → `200`.

## 3. Backend: PIN kontrol kipas SMA

Tambahkan baris `FAN_PINS=...` dari `backend/.env` lokal ke `.env` di server, lalu
`pm2 restart api-ekskul-coding`. PIN dibagikan tutor ke masing-masing kelompok SMA
secara pribadi (jangan ditulis di handout).

## 4. Alur per kelompok

Dari laptop tutor (PowerShell, di folder repo). Sebaiknya `ssh USER@SERVER` sudah bisa login
pakai SSH key — kalau belum, scp/ssh akan meminta password tiap deploy. User itu harus punya
izin tulis ke `/var/www/ekskul` (`sudo chown -R USER /var/www/ekskul`).

```powershell
py tools/kelompok.py paket                                         # awal semester: dist/paket/<id>.zip, bagikan
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip --dry-run  # cek kiriman siswa
$env:DEPLOY_HOST = "USER@SERVER"
py tools/kelompok.py deploy smp-07 D:\kiriman\smp-07.zip            # upload -> https://smp-07.inspiralabs.id
```

Saat deploy, `firmware/` dan file tersembunyi dibuang, `api.js` selalu diganti versi tutor,
dan kiriman ditolak kalau tidak ada `index.html` atau ukurannya > 10 MB. Deploy ulang aman
(menimpa versi lama).
