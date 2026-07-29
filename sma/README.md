# Smart Room Monitor — SMA

Dashboard IoT untuk memantau suhu & kelembapan ruangan pakai sensor DHT22,
plus kontrol kipas. Template ini **sengaja belum lengkap** — bagian dasar
sudah jalan, sisanya jadi tantanganmu.

## Isi folder ini

| File | Boleh diubah? | Fungsi |
|---|---|---|
| `index.html` | ✅ Ya, ini tugasmu | Tampilan dashboard — HTML, CSS, dan JS ada di sini |
| `api.js` | ❌ Jangan diubah | "Kabel" penghubung ke backend, sudah disiapkan tutor |
| `firmware/sma_room_monitor.ino` | Sebagian — lihat catatan di file | Program untuk ESP32 |

## Cara mulai

1. Buka `index.html` langsung di browser untuk lihat tampilan dashboard saat ini.
2. Buka `firmware/sma_room_monitor.ino` di Arduino IDE. Isi 5 baris identitas
   di bagian atas (`DEVICE_ID`, `WIFI_SSID`, `WIFI_PASSWORD`, `DHT_PIN`,
   `RELAY_PIN`) sesuai data kelompokmu di `HANDOUT_SISWA.md` (di folder utama
   repo). Bagian berlabel `JANGAN UBAH` jangan disentuh — itu koneksi ke server.
3. Upload firmware ke ESP32, buka Serial Monitor, pastikan berhasil connect
   WiFi dan mengirim data.
4. Kerjakan TANTANGAN di `index.html` dan firmware (lihat daftar di bawah).

## Daftar TANTANGAN

Cari komentar `TANTANGAN` di `index.html` untuk detail dan hint tiap poin:

1. **Ganti warna tema** — variabel warna di bagian `:root` (CSS paling atas).
2. **Ganti ambang batas suhu** — cari `AMBANG_BATAS_SUHU_TINGGI` di JS, lihat efeknya ke alert.
3. **Mode Otomatis fan** — tambah tombol "Otomatis" + fan menyala sendiri kalau suhu lewat ambang batas. Panggil `kirimPerintahFan({ fanMode: "auto" })` dan `kirimPerintahFan({ threshold: nilai })` dari `api.js` (fungsi ini sudah ada, tinggal dipakai). Contoh polanya sudah jadi di fungsi `toggleFanManual()`.
4. **Grafik riwayat** — tambah `<canvas>` untuk grafik suhu & kelembapan.
5. **Mode Gelap** — tombol dark mode di header, pakai variabel warna yang sudah disiapkan di `:root`.
6. **Panel edukasi** — kotak collapsible berisi penjelasan singkat tentang sensor DHT22.

Firmware (`firmware/sma_room_monitor.ino`) juga punya satu TANTANGAN:
lengkapi fungsi `handleFanCommand()` supaya relay bisa dikontrol dari
dashboard. Petunjuk ada di komentar TODO di dalam file itu.

## Kalau ada error

- Dashboard tidak update? Cek `MY_DEVICE_ID` di `api.js` — harus sama
  persis dengan `DEVICE_ID` di firmware.
- ESP32 tidak connect WiFi? Cek Serial Monitor, pastikan `WIFI_SSID`/
  `WIFI_PASSWORD` benar.
- Info lengkap koneksi (URL server, API key, Device ID kelompok) ada di
  `HANDOUT_SISWA.md`.
