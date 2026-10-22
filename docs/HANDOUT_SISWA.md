# Handout Siswa — Smart Room Monitor

## Info koneksi (isi oleh tutor sebelum kelas)

| Info | Nilai |
|---|---|
| Alamat server (SERVER_URL / API_BASE) | `https://___________________` |
| API Key (khusus yang isi firmware ESP32) | `___________________` |
| Nama WiFi kelas | `___________________` |
| Password WiFi kelas | `___________________` |

## Daftar Device ID & alamat website

Folder yang dibagikan tutor sudah berisi Device ID kelompokmu (di firmware dan `api.js`).
Cukup pastikan cocok dengan tabel ini.

| Jenjang | Kelompok / Individu | Device ID | Website (setelah di-deploy tutor) |
|---|---|---|---|
| SMP | Athalla Daffa Habibullah | `smp-01` | `smp-01.inspiralabs.id` |
| SMP | Sultan Raziq Salasa | `smp-02` | `smp-02.inspiralabs.id` |
| SMP | M. Abizan Syahdan | `smp-03` | `smp-03.inspiralabs.id` |
| SMP | M. Ghaizan Amsar S | `smp-04` | `smp-04.inspiralabs.id` |
| SMP | Bima Saguna Shiddiq | `smp-05` | `smp-05.inspiralabs.id` |
| SMP | Akmal Nafis & M. Adlan Al Fadyl | `smp-06` | `smp-06.inspiralabs.id` |
| SMP | Rafif Ahnaf Rabbani & M. Qassim | `smp-07` | `smp-07.inspiralabs.id` |
| SMP | Abdul Hasiib & Zhaffir Arkana Kurniaputra | `smp-08` | `smp-08.inspiralabs.id` |
| SMP | Zahidan Akmal Wafa & M. Alfatih | `smp-09` | `smp-09.inspiralabs.id` |
| SMP | Bintang Habibi Satriawan, Muzaffar Rakhsan Abqary, Yahya Zakiy Elmoursy, Mozhaffar Adam Kanz | `smp-10` | `smp-10.inspiralabs.id` |
| SMP | Tubagus Razan, Dzahwan Raditya Arraka, Essa Rizqi Wijaya, M. Fathir Abqary Arief | `smp-11` | `smp-11.inspiralabs.id` |
| SMP | M. Faiq Ghaisan Sutisna, M. Tsabbit Al Hanif, Zaidan Riqki Alfarizi, M. Zaidan Altamis | `smp-12` | `smp-12.inspiralabs.id` |
| SMP | Muzhaffar Pratama Nur Ikhwan, Bariq Taufiqurrahman, M. Naufal Khairy | `smp-13` | `smp-13.inspiralabs.id` |
| SMA | Nabil Abdillah | `sma-01` | `sma-01.inspiralabs.id` |
| SMA | M Lyu Marioka | `sma-02` | `sma-02.inspiralabs.id` |
| SMA | M Syafiy | `sma-03` | `sma-03.inspiralabs.id` |
| SMA | Qowiyyyl Luthfi Pradana & M Kenzo Bagas | `sma-04` | `sma-04.inspiralabs.id` |
| SMA | Husna Mahira Taqiyya & Aliya Nasifa Putri Kencoro | `sma-05` | `sma-05.inspiralabs.id` |
| SMA | M Dzaki & M Fakhri | `sma-06` | `sma-06.inspiralabs.id` |

**PENTING:** Jangan mengganti Device ID! Kalau dua kelompok pakai ID yang sama,
data kalian akan saling menimpa di dashboard.

## Untuk siswa SMP

File kamu: `smp/firmware/smp_room_monitor/smp_room_monitor.ino`

Buka file itu di **Arduino IDE** (double-click). Cari baris ini, isi WiFi saja (Device ID sudah diisi tutor):
```cpp
const char* DEVICE_ID     = "smp-01";        // sudah diisi tutor
const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
#define DHT_PIN 4                            // ganti kalau kabel DHT22 di pin lain
```
Jangan ubah bagian lain yang bertanda `JANGAN UBAH DI BAWAH INI`. Pilih board **ESP32 Dev Module** + port, klik Upload (→), lalu buka
Serial Monitor (115200 baud), dan kamu akan lihat suhu/kelembapan terkirim ke dashboard yang sudah
disiapkan tutor.

## Untuk siswa SMA

File kamu: `sma/firmware/sma_room_monitor/sma_room_monitor.ino` — program sudah **jadi**, tidak ada yang perlu
dilengkapi. Sama seperti SMP: isi WiFi, cek `DHT_PIN` dan `RELAY_PIN` sesuai pemasangan
kabelmu, lalu Upload. Modul relay biasanya **active-LOW** (`LOW` = nyala) — sudah diatur
di program; kalau relaymu kebalikannya, ganti `RELAY_ACTIVE_LOW` jadi `false`.

Dashboard (`index.html`) sudah punya tombol fan, mode Manual/Otomatis, dan slider ambang
batas. Mengubah fan dari website meminta **PIN kelompok** sekali — PIN diberikan tutor
langsung ke kelompokmu, jangan disebar. Perubahan sampai ke kipas paling lama ~4 detik.

## Aturan umum

- File/baris berlabel **"JANGAN UBAH"** adalah "kabel" ke server — mengubahnya bisa
  membuat data kelompok lain ikut error.
- File **`api.js`** tidak pernah diubah (saat deploy, tutor selalu memakai versi aslinya).
- Kalau ada error, cek dulu: sudah isi WiFi dengan benar? ESP32 sudah berhasil connect ke
  WiFi (cek Serial Monitor)? Kabel sensor di pin yang sama dengan `DHT_PIN`?

## Aturan menyerahkan website ke tutor

1. Halaman utama tetap bernama **`index.html`**.
2. Semua file (gambar, CSS) ada **di dalam folder** kelompokmu. Foto kelompok diberi nama
   **`foto-kelompok.jpg`**.
3. Tidak pakai `npm`/instalasi. Kalau butuh library (mis. Chart.js), pakai link CDN.
4. Ukuran folder maksimal **5 MB** — kecilkan foto dari HP sebelum dimasukkan.
5. Zip seluruh folder, beri nama sesuai Device ID (mis. `smp-07.zip`), kirim ke tutor.
