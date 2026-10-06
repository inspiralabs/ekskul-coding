# Script Reels — SMA P12

| Info | Isi |
|---|---|
| Template hook | #6 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Gimana cara aku kontrol lampu dari HP cuma dalam 15 baris kode |
| Durasi | ±55 detik |
| Pembicara | Tutor (tangan memegang HP, lampu/kipas di meja) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Jari mengetuk link di HP → lampu di meja menyala | "Gimana cara aku kontrol lampu dari HP cuma dalam 15 baris kode." | 15 baris kode → lampu nyala dari HP 📱💡 |
| 4–12 | ESP32 close-up | "Nggak pakai aplikasi, nggak pakai cloud. Mikrokontroler kecil ini bisa jadi web server sendiri." | ESP32 = web server mini 🖥️ |
| 12–30 | Kode 4 bagian di-highlight satu per satu | "Resepnya cuma empat. Satu: bikin server di port 80. Dua: daftarkan alamat, misal slash lampu, ke sebuah fungsi. Tiga: server begin. Empat: panggil handle client terus di loop. Selesai." | 1️⃣ server(80) 2️⃣ on() 3️⃣ begin() 4️⃣ handleClient() |
| 30–38 | Serial Monitor menampilkan IP → diketik di browser HP | "Syaratnya, HP dan ESP32 di WiFi yang sama. Buka IP-nya di browser, kayak buka website." | Satu WiFi ✅ buka http://IP |
| 38–50 | Ikon gembok merah + teks "port forwarding ❌" | "Tapi ini penting: server ini nggak pakai password. Jangan pernah dibuka ke internet. Mau kontrol dari luar rumah? Lewat backend yang punya autentikasi. Itu yang kami ajarkan di kelas." | ⚠️ JANGAN expose ke internet |
| 50–55 | Router, printer, smart plug | "Pola yang sama dipakai di router, printer WiFi, sampai smart plug. Follow buat part terakhir!" | Follow 👉 |

## Caption

Kontrol lampu dari HP tanpa aplikasi & tanpa cloud? Bisa banget pakai ESP32 📱💡

Resep 4 langkah:
1️⃣ `WebServer server(80)`
2️⃣ `server.on("/lampu", handler)`
3️⃣ `server.begin()`
4️⃣ `server.handleClient()` di loop

⚠️ Jangan expose ke internet: pakai backend + autentikasi

#InspiraLabs #ESP32 #SmartHome #IoT #WebServer #BelajarCoding #EkskulCoding #DIY

## Yang sengaja tidak dibocorkan
- Kode lengkap handler (query string, body JSON, relay active-LOW).
- Arsitektur kontrol dua arah dashboard → backend → ESP32 di proyek akhir.
