# Smart Room Monitor — SMA

Dashboard IoT untuk memantau suhu & kelembapan ruangan pakai sensor DHT22,
plus kontrol kipas (manual, otomatis, ambang batas). Program ESP32 dan
dashboard **sudah jadi** — fokusmu merakit rangkaian dengan benar, lalu
mengkustom tampilan dashboard.

## Isi folder ini

| File | Boleh diubah? | Fungsi |
|---|---|---|
| `index.html` | ✅ Ya (profil, teks, bonus) | Tampilan dashboard — HTML, CSS, dan JS ada di sini |
| `api.js` | ❌ Jangan diubah | "Kabel" penghubung ke backend, sudah disiapkan tutor |
| `firmware/sma_room_monitor.ino` | Sebagian — lihat catatan di file | Program untuk ESP32 |
| `firmware/platformio.ini` | ❌ Jangan diubah (kecuali `board`) | Pengaturan PlatformIO |

## Cara mulai

1. Rakit rangkaian: DHT22 data → GPIO 4, relay IN → GPIO 18 (lihat materi pertemuan).
2. Di VS Code buka PlatformIO: PIO Home → Open Project → pilih folder `firmware`.
   Buka `sma_room_monitor.ino`, isi `WIFI_SSID` dan `WIFI_PASSWORD` (Device ID sudah
   diisi tutor). Ubah `DHT_PIN`/`RELAY_PIN` hanya kalau kabelmu di pin lain.
3. Klik Upload (→) lalu Serial Monitor (🔌), pastikan berhasil connect WiFi dan
   mengirim data (kode respons 200).
4. Buka `index.html` di browser: angka sensor muncul, tombol fan bisa dipakai
   (minta PIN kelompok ke tutor).
5. Kustom dashboard: isi **Profil Kelompok** (nama, anggota, `foto-kelompok.jpg`),
   ganti warna di `:root` (`style.css`). Bonus: grafik, mode gelap, panel edukasi
   di kotak kosong.

## Kalau ada error

- Dashboard tidak update? Cek `MY_DEVICE_ID` di `api.js` — harus sama
  persis dengan `DEVICE_ID` di firmware.
- ESP32 tidak connect WiFi? Cek Serial Monitor, pastikan `WIFI_SSID`/
  `WIFI_PASSWORD` benar.
- Info lengkap koneksi (URL server, API key, Device ID kelompok) ada di
  `docs/HANDOUT_SISWA.md`.
- Relay kebalikan (kipas nyala saat dashboard bilang mati)? Ganti
  `RELAY_ACTIVE_LOW` jadi `false` di firmware.

## Menyerahkan website ke tutor

Website-mu akan online di `https://<device-id>.inspiralabs.id` (mis. `sma-04.inspiralabs.id`).
Sebelum dikirim, pastikan:

1. Halaman utama tetap bernama **`index.html`**.
2. Semua file (gambar, CSS) ada **di dalam folder ini**. Foto kelompok diberi nama **`foto-kelompok.jpg`**.
3. Tidak pakai `npm`/instalasi. Butuh library (mis. Chart.js)? Pakai link CDN.
4. `api.js` tidak diubah (saat deploy selalu diganti versi asli tutor).
5. Ukuran folder maksimal **5 MB** — kecilkan foto dari HP dulu.
6. Zip seluruh folder, beri nama sesuai Device ID (mis. `sma-04.zip`), kirim ke tutor.
