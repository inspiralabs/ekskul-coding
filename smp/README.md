# Smart Room Monitor Junior — SMP

Dashboard IoT sederhana untuk memantau suhu & kelembapan ruangan pakai
sensor DHT22. Versi ini tidak ada kontrol perangkat (fan/relay) — fokus
belajar HTML & CSS dulu.

## Isi folder ini

| File | Boleh diubah? | Fungsi |
|---|---|---|
| `index.html` | ✅ Ya, ini tugasmu | Tampilan dashboard — HTML, CSS, dan JS ada di sini |
| `api.js` | ❌ Jangan diubah | "Kabel" penghubung ke backend, sudah disiapkan tutor |
| `firmware/smp_room_monitor.ino` | Sebagian — lihat catatan di file | Program untuk ESP32 |
| `firmware/platformio.ini` | ❌ Jangan diubah (kecuali `board`) | Pengaturan PlatformIO |

## Cara mulai

1. Buka `index.html` langsung di browser untuk lihat tampilan dashboard.
2. Di VS Code buka PlatformIO: PIO Home → Open Project → pilih folder
   `firmware`. Buka `smp_room_monitor.ino`, isi `WIFI_SSID` dan
   `WIFI_PASSWORD` (Device ID sudah diisi tutor). Ubah `DHT_PIN` hanya kalau
   kabel DHT22 di pin lain. Bagian berlabel `JANGAN UBAH` jangan disentuh — itu
   koneksi ke server.
3. Klik Upload (→) lalu Serial Monitor (🔌) di status bar PlatformIO, pastikan berhasil
   connect WiFi dan mengirim data.
4. Kustom dashboard: isi **Profil Kelompok** (nama, anggota, `foto-kelompok.jpg`),
   ganti warna di `:root` (`style.css`). Bonus: isi kotak kosong `.kotak-kosong`
   dengan idemu sendiri, atau hapus kalau tidak dipakai.

## Kalau ada error

- Dashboard tidak update? Cek `MY_DEVICE_ID` di `api.js` — harus sama
  persis dengan `DEVICE_ID` di firmware.
- ESP32 tidak connect WiFi? Cek Serial Monitor, pastikan `WIFI_SSID`/
  `WIFI_PASSWORD` benar.
- Info lengkap koneksi (URL server, API key, Device ID kelompok) ada di
  `docs/HANDOUT_SISWA.md`.

## Menyerahkan website ke tutor

Website-mu akan online di `https://<device-id>.inspiralabs.id` (mis. `smp-07.inspiralabs.id`).
Sebelum dikirim, pastikan:

1. Halaman utama tetap bernama **`index.html`**.
2. Semua file (gambar, CSS) ada **di dalam folder ini**. Foto kelompok diberi nama **`foto-kelompok.jpg`**.
3. Tidak pakai `npm`/instalasi. Butuh library (mis. Chart.js)? Pakai link CDN.
4. `api.js` tidak diubah (saat deploy selalu diganti versi asli tutor).
5. Ukuran folder maksimal **5 MB** — kecilkan foto dari HP dulu.
6. Zip seluruh folder, beri nama sesuai Device ID (mis. `smp-07.zip`), kirim ke tutor.
