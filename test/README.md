# Test — Simulasi ESP32

Simulator ini meniru pengiriman data dari ESP32 asli, supaya Anda bisa mengetes backend &
dashboard (Demo/SMA/SMP) TANPA hardware.

## Cara pakai

Simulator ini pakai `SERVER_URL = "http://localhost:3000/api/readings"` (lihat
`simulasi_esp32.js`) — cocok untuk uji backend yang jalan LOKAL di laptop. Kalau backend
sudah di-deploy ke server dan Anda ingin uji langsung ke sana, ganti `SERVER_URL` di file
itu jadi URL server (`https://...`).

Pastikan backend sudah jalan dulu (`npm start` di folder `backend/`, untuk uji lokal), lalu
di terminal baru:

```bash
cd test
node simulasi_esp32.js
```

Ini akan mulai kirim data sensor palsu ke device `sma-1` tiap 4 detik, sama seperti
firmware `.ino` yang asli.

### Ganti device yang diuji

```bash
node simulasi_esp32.js sma-1      # uji dashboard SMA
node simulasi_esp32.js smp-3      # uji dashboard SMP
node simulasi_esp32.js sma-2 25   # device sma-2, interval 2.5 detik (opsional)
```

Device ID yang dipakai harus SAMA dengan `MY_DEVICE_ID` di `api.js` dashboard yang mau
Anda buka & lihat datanya.

## Menguji kontrol fan/relay

Simulator ini hanya mengirim data sensor (satu arah, seperti ESP32 asli). Untuk menguji
tombol kontrol fan di dashboard (Demo/SMA), langsung klik tombolnya di browser — itu akan
memanggil `POST /api/fan-control/:deviceId` ke backend sungguhan. Simulator tidak perlu
tahu-menahu soal ini; backend yang mencatat perintahnya.

Karena `ip` yang dikirim simulator ini palsu (`192.168.1.999`), backend akan mencoba
(dan gagal secara diam-diam) mengirim perintah relay ke IP itu setiap kali Anda klik
tombol fan — ini NORMAL dan tidak mempengaruhi hasil di dashboard, karena backend tetap
menyimpan & membalas state yang benar terlepas dari berhasil/gagalnya push ke ESP32.

## Menjalankan beberapa device sekaligus

Buka beberapa terminal, jalankan simulator dengan device ID berbeda di masing-masing,
untuk mensimulasikan banyak kelompok mengirim data bersamaan:

```bash
node simulasi_esp32.js sma-1
node simulasi_esp32.js sma-2
node simulasi_esp32.js smp-1
```

Buka dashboard dengan `MY_DEVICE_ID` berbeda-beda di tab browser berbeda untuk
memverifikasi data antar device tidak tertukar.
