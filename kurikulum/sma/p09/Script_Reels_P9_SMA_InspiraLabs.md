# Script Reels — SMA P9

| Info | Isi |
|---|---|
| Template hook | #3 — Negative Hooks (Psikologi Terbalik) |
| Judul | Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis |
| Durasi | ±60 detik |
| Pembicara | Tutor (close-up board + overlay pinout) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Relay "klik" sendiri saat ESP32 dicolok, kipas berputar sesaat | "Jangan asal pilih pin ESP32 sebelum tonton video ini sampai habis." | Relay nyala SENDIRI?! 😱 |
| 4–12 | Zoom ke deretan pin, overlay merah di GPIO 6–11 | "Pertama, pin 6 sampai 11. Ini nyambung ke memori flash. Pakai buat yang lain? ESP32-mu crash." | ❌ GPIO 6–11 = flash |
| 12–26 | Overlay kuning di 0, 2, 5, 12, 15 + replay relay klik | "Kedua, strapping pin: 0, 2, 5, 12, 15. Pin ini dibaca ESP32 waktu booting. Pasang relay di sini, relaynya bisa nyala sendiri pas dinyalain. Pin 12 lebih parah: kalau HIGH saat boot, tegangan flash-nya salah dan ESP32 nggak mau jalan." | ⚠️ 0, 2, 5, 12, 15 = strapping |
| 26–34 | Overlay biru di 34–39, LED dicolok tapi tidak menyala | "Ketiga, pin 34 sampai 39 itu input-only. Mau nyalain LED di sini? Sampai kiamat juga nggak bakal nyala." | 👂 34–39 = INPUT ONLY |
| 34–44 | Overlay hijau di pin aman | "Yang aman buat pemula: 4, 13, 16 sampai 19, 21 sampai 23, 25 sampai 27, 32, 33. Screenshot ini." | ✅ Pin aman (screenshot!) 📸 |
| 44–55 | B-roll PCB pabrikan | "Di industri, pemilihan pin itu diputuskan di tahap desain, bukan pas ngoding. Salah pin di PCB artinya cetak ulang. Rugi waktu, rugi uang." | Salah pin = cetak ulang PCB 💸 |
| 55–60 | Tutor ke kamera | "Save, biar proyekmu nggak 'kesurupan'. Follow buat part selanjutnya." | Save & follow 👉 |

## Caption

Relay kamu nyala sendiri pas ESP32 dinyalain? Bisa jadi salah pilih pin 👀

❌ GPIO 6–11 → flash, jangan dipakai
⚠️ 0, 2, 5, 12, 15 → strapping pin (bisa glitch saat boot)
👂 34–39 → input only
✅ Aman: 4, 13, 16–19, 21–23, 25–27, 32, 33

Screenshot & simpan buat proyek berikutnya 📸

#InspiraLabs #ESP32 #IoT #Elektronika #EmbeddedSystem #TipsEngineer #EkskulCoding #Arduino

## Yang sengaja tidak dibocorkan
- Wiring relay (COM/NO/NC), eksperimen active-LOW, dan arsitektur proyek akhir.
- Solusi masalah relay 5V + logika 3,3V.
