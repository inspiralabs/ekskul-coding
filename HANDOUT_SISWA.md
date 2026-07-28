# Handout Siswa — Smart Room Monitor

## Info koneksi (isi oleh pelatih sebelum kelas)

| Info | Nilai |
|---|---|
| Alamat server (SERVER_URL / API_BASE) | `https://___________________` |
| API Key (khusus yang isi firmware ESP32) | `___________________` |
| Nama WiFi kelas | `___________________` |
| Password WiFi kelas | `___________________` |

## Daftar Device ID kelompok (isi oleh pelatih)

Cari nama kelompokmu di tabel ini, lalu pakai ID itu di firmware DAN di `api.js` (kalau
kamu juga mengerjakan bagian dashboard).

| Kelompok | Device ID |
|---|---|
| SMA 1 | `sma-1` |
| SMA 2 | `sma-2` |
| SMA 3 | `sma-3` |
| SMP 1 | `smp-1` |
| SMP 2 | `smp-2` |
| SMP 3 | `smp-3` |

**PENTING:** Jangan mengarang Device ID sendiri! Kalau dua kelompok pakai ID yang sama,
data kalian akan saling menimpa di dashboard.

## Untuk siswa SMP

File kamu: `firmware/smp_room_monitor/smp_room_monitor.ino`

Buka file itu di Arduino IDE, cari 4 baris ini dan isi sesuai tabel di atas:
```cpp
const char* DEVICE_ID     = "smp-3";        // GANTI sesuai ID kelompokmu
const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
#define DHT_PIN 4                            // ganti kalau kabel DHT22 di pin lain
```
Jangan ubah bagian lain yang bertanda `JANGAN UBAH DI BAWAH INI`. Upload ke ESP32, buka
Serial Monitor, dan kamu akan lihat suhu/kelembapan terkirim ke dashboard yang sudah
disiapkan pelatih.

## Untuk siswa SMA

File kamu: `firmware/sma_room_monitor/sma_room_monitor.ino`

**Tahap 1-3 (rangkaian, sensor, kirim data):** sama seperti SMP — isi `DEVICE_ID`, WiFi,
`DHT_PIN`, ditambah `RELAY_PIN` sesuai pemasangan modul relaymu.

**Tahap 4 (TANTANGAN kontrol relay):** cari komentar `TANTANGAN` di file, lalu lengkapi
fungsi `handleFanCommand()` — ada 4 TODO dengan petunjuk di komentarnya. Ingat: modul relay
biasanya **active-LOW** (`LOW` = nyala, `HIGH` = mati) — kebalikan dari LED biasa!

Kalau kamu juga mengerjakan dashboard: file `SMA - Smart Room Monitor.html` punya bagian
TANTANGAN kosong untuk mode Otomatis + slider threshold. Jangan buka/ubah `api.js` —
tinggal panggil fungsi yang sudah ada di sana:
```js
kirimPerintahFan({ fanMode: "auto" });
kirimPerintahFan({ threshold: nilaiSlider });
```
Contoh yang sudah jadi ada di fungsi `toggleFanManual()` — tiru polanya.

## Aturan umum

- File/baris berlabel **"JANGAN UBAH"** adalah "kabel" ke server — mengubahnya bisa
  membuat data kelompok lain ikut error.
- File **`api.js`** di folder dashboard tidak pernah diubah — itu bukan bagian tugasmu.
- Kalau ada error, cek dulu: sudah isi Device ID/WiFi dengan benar? ESP32 sudah berhasil
  connect ke WiFi (cek Serial Monitor)? Alamat server sudah diawali `https://` (bukan `http://`)?
