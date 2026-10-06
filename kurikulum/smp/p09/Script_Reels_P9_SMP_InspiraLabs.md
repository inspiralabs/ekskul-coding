# Script Reels — SMP P9

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop colok LED tanpa resistor! |
| Durasi | ±50 detik |
| Pembicara | Tutor (dibantu 1–2 siswa sebagai talent tangan/reaksi) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Close-up LED menyala sangat terang lalu padam | "Stop colok LED tanpa resistor, kalau kamu nggak mau komponenmu gosong." | **STOP colok LED tanpa ini!** |
| 3–10 | Tangan memegang LED, zoom ke dua kakinya | "Pertama, LED itu punya arah. Kaki panjang plus, kaki pendek minus. Kebalik? Nggak rusak, cuma nggak nyala. Jadi jangan panik dulu." | Kaki panjang = ➕ |
| 10–20 | Resistor 220Ω di jari, lalu dipasang di breadboard | "Kedua, LED itu rakus arus. Dicolok langsung, dia makan arus sebanyak-banyaknya sampai panas. Resistor ini remnya. Buat board 3,3 volt kayak ESP32, pakai 220 sampai 330 ohm. Hampir semua LED aman." | 3,3V → 220–330Ω ✅ |
| 20–30 | Gelang warna resistor di-zoom, overlay tabel warna | "Cara cepat kenal 220 ohm tanpa multimeter: gelangnya merah, merah, coklat. Simpan video ini biar nggak lupa." | 🔴🔴🟤 = 220Ω |
| 30–42 | Siswa colok LED ke pin 3V3, LED menyala; lalu pindah ke pin lain, tidak menyala | "Ketiga, ini trik yang dipakai engineer: tes hardware dulu tanpa kode. Colok ke pin tiga koma tiga volt. Nyala? Berarti rangkaianmu bener. Kalau nanti pas diprogram nggak nyala, kamu langsung tahu yang salah itu kodenya, bukan kabelnya." | Tes hardware DULU, baru kode 🧠 |
| 42–50 | Tutor menghadap kamera, LED tiga warna menyala di belakang | "Trik kecil ini bisa hemat waktu debugging berjam-jam. Mau tahu cara bikin lampu ini nyala-mati pakai kode? Follow, minggu depan kita lanjut." | Follow buat part 2 👉 |

## Caption

LED kamu redup, panas, atau tiba-tiba mati? Bisa jadi gara-gara satu komponen kecil ini 👀

3 aturan wajib sebelum colok LED:
1️⃣ Kaki panjang = plus
2️⃣ Selalu pakai resistor (220–330Ω buat 3,3V)
3️⃣ Tes hardware dulu, baru coding

Save buat contekan praktikum! 💾

#InspiraLabs #BelajarCoding #IoT #ESP32 #Elektronika #CodingAnakSekolah #EkskulCoding #STEM

## Yang sengaja tidak dibocorkan
- Langkah rakit lengkap di breadboard & aturan jalur breadboard (eksklusif di kelas).
- Challenge "Detektif Rangkaian" dan kaitannya ke proyek akhir (pin D4 untuk sensor).
