# Script Reels — SMP P11

| Info | Isi |
|---|---|
| Template hook | #2 — Negative Hooks (Psikologi Terbalik) |
| Judul | Alasan kenapa sensor kamu selalu ngasih angka NaN |
| Durasi | ±55 detik |
| Pembicara | Tutor + 1 siswa (talent reaksi) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Serial Monitor penuh tulisan `nan nan nan` | "Alasan kenapa sensor kamu selalu ngasih angka NaN." | Sensor kamu NaN terus? 😵 |
| 3–8 | Close-up DHT22 | "NaN artinya Not a Number. Sensornya gagal ngasih data. Biasanya pelakunya salah satu dari empat ini." | NaN = Not a Number |
| 8–16 | Tangan menggoyang kabel, lalu zoom ke `#define DHT_PIN` | "Satu: kabel longgar atau pinnya salah. Cek angka pin di kode, harus sama dengan kaki tempat kabel dicolok." | 1️⃣ Kabel & nomor pin |
| 16–24 | Kode `DHT11` dicoret jadi `DHT22` | "Dua: jenis sensornya salah tulis. DHT11 sama DHT22 itu beda bahasa. Salah satu huruf, datanya kacau." | 2️⃣ DHT11 ≠ DHT22 |
| 24–31 | Baris `dht.begin()` muncul dengan efek glow | "Tiga: lupa dht begin. Sensornya belum dibangunin, ya nggak bakal jawab." | 3️⃣ Lupa `begin()` |
| 31–39 | Stopwatch 2 detik | "Empat: kamu terlalu buru-buru. DHT22 cuma bisa dibaca tiap dua detik. Lebih cepat dari itu, datanya nggak baru." | 4️⃣ Jeda ≥ 2 detik ⏱️ |
| 39–50 | Grafik suhu dengan satu titik nyungsep ke 0 / error | "Dan ini rahasia yang dipakai di industri: jangan pernah percaya data sensor mentah-mentah. Selalu cek dulu, baru pakai. Satu data jelek yang lolos bisa bikin grafik dan alarm satu sistem jadi kacau." | Cek dulu, baru pakai 🛡️ |
| 50–55 | Tutor ke kamera, siswa meniup sensor & angka naik | "Sensor udah kebaca? Minggu depan datanya kita terbangin ke internet. Follow!" | Next: kirim ke dashboard 🌐 |

## Caption

Sensor suhu kamu cuma ngasih "nan"? 😤 Cek 4 tersangka ini:
1️⃣ Kabel / nomor pin
2️⃣ Jenis sensor salah tulis
3️⃣ Lupa begin()
4️⃣ Baca terlalu cepat (< 2 detik)

Bonus pro tip: jangan pernah percaya data sensor mentah-mentah 🛡️

#InspiraLabs #ESP32 #DHT22 #SensorSuhu #IoT #BelajarCoding #EkskulCoding #Arduino

## Yang sengaja tidak dibocorkan
- Kode lengkap membaca DHT22 & cara pasang library di PlatformIO.
- Challenge alarm kepanasan dan cara menggabungkannya ke proyek akhir.
