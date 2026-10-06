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
   `smp/firmware`. Buka `smp_room_monitor.ino`, isi 4 baris
   identitas di bagian atas (`DEVICE_ID`, `WIFI_SSID`, `WIFI_PASSWORD`,
   `DHT_PIN`) sesuai data kelompokmu di `docs/HANDOUT_SISWA.md`. Bagian berlabel `JANGAN UBAH` jangan disentuh — itu
   koneksi ke server.
3. Klik Upload (→) lalu Serial Monitor (🔌) di status bar PlatformIO, pastikan berhasil
   connect WiFi dan mengirim data.
4. Eksplor bebas: cari kotak kosong bertanda `.kotak-kosong` di
   `index.html` — isi dengan idemu sendiri (contoh: kartu cuaca, foto
   ruangan kelas, tombol like), atau hapus kalau tidak dipakai.

## Kalau ada error

- Dashboard tidak update? Cek `MY_DEVICE_ID` di `api.js` — harus sama
  persis dengan `DEVICE_ID` di firmware.
- ESP32 tidak connect WiFi? Cek Serial Monitor, pastikan `WIFI_SSID`/
  `WIFI_PASSWORD` benar.
- Info lengkap koneksi (URL server, API key, Device ID kelompok) ada di
  `docs/HANDOUT_SISWA.md`.
