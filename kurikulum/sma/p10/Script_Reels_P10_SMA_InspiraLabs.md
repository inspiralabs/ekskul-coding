# Script Reels — SMA P10

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop pakai delay() kalau kamu nggak mau alatmu nge-hang |
| Durasi | ±60 detik |
| Pembicara | Tutor (split screen: board + kode) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Siswa menekan tombol berkali-kali, LED tidak merespons | "Stop pakai delay kalau kamu nggak mau alatmu nge-hang." | Alatmu "budek"? 🙉 |
| 4–14 | Kode `delay(5000)` di-highlight merah | "Delay itu blocking. Selama lima detik, otak mikrokontrolermu tidur total. Tombol nggak kebaca, perintah dari WiFi kelewat, sensor nggak dicek." | `delay()` = CPU TIDUR 😴 |
| 14–28 | Animasi jam + kode pola millis | "Engineer pakai millis. Ini jam internal sejak alat nyala. Polanya: kalau sekarang dikurangi waktu terakhir sudah lewat interval, kerjakan tugasnya, catat waktunya. Selain itu, loop jalan terus." | `if (millis() - terakhir >= INTERVAL)` |
| 28–40 | LED kedip cepat + relay klik tiap 2 detik + serial print, semuanya bersamaan | "Hasilnya? Banyak tugas jalan barengan. LED kedip, sensor kebaca, relay jalan, nggak ada yang nunggu siapa-siapa. Multitasking tanpa sistem operasi." | Multitasking tanpa RTOS 🤹 |
| 40–52 | Kode `millis() > target` dicoret, diganti `millis() - terakhir` | "Pro tip yang jarang dibahas: selalu pakai unsigned long dan pengurangan, jangan 'millis lebih besar dari target'. Setelah 49 hari, millis balik ke nol. Cara pengurangan tetap benar, cara lain bikin alatmu error diam-diam." | Overflow 49 hari ⚠️ pakai pengurangan |
| 52–60 | Tutor ke kamera | "Firmware industri hampir nggak pernah delay panjang di loop utama. Save dan follow buat trik berikutnya." | Save & follow 👉 |

## Caption

Tombol nggak respons? Perintah WiFi telat? Mungkin gara-gara `delay()` 😴

✅ Ganti dengan pola millis():
`if (millis() - terakhir >= INTERVAL) { terakhir = millis(); ... }`
✅ Pakai `unsigned long` + pengurangan → aman dari overflow 49 hari

Multitasking sederhana tanpa RTOS 🤹

#InspiraLabs #ESP32 #Arduino #EmbeddedSystem #Firmware #IoT #EkskulCoding #TipsProgrammer

## Yang sengaja tidak dibocorkan
- Kode termostat + histeresis lengkap.
- Kaitan millis dengan web server & kontrol dua arah di proyek akhir.
