# Script Reels — SMA P11

| Info | Isi |
|---|---|
| Template hook | #7 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Rahasia engineer IoT: baca angka ini dulu sebelum panik |
| Durasi | ±60 detik |
| Pembicara | Tutor (screen record Serial Monitor + whiteboard) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Serial Monitor: `Status: 401`, siswa garuk kepala | "Rahasia engineer IoT yang nggak pernah dibocorin: baca angka ini dulu sebelum panik." | Jangan panik, baca ANGKANYA 🔢 |
| 4–12 | Tulisan besar 2xx / 4xx / 5xx / negatif | "Setiap kali alatmu kirim data ke server, server jawab pakai angka. Angka ini kayak GPS: langsung nunjuk di mana masalahnya." | Status code = GPS debugging 🧭 |
| 12–22 | 200 hijau, 400 & 401 kuning | "Dua ratusan: beres. Empat ratusan: salahmu, request-nya. 400 biasanya format data rusak, 401 kunci API-mu salah, 404 alamatnya salah ketik." | 4xx = cek request-mu |
| 22–30 | 500 merah, −1 abu-abu | "Lima ratusan: salah server, bukan kamu. Dan kalau angkanya negatif, request-mu bahkan nggak sampai: cek internet atau alamat host." | 5xx = server · negatif = nggak nyampe |
| 30–40 | Kode `Serial.println(http.getString())` | "Trik kedua: selalu print balasan server. Backend yang baik bakal bilang field mana yang kurang. Tinggal baca." | Print balasan server 📩 |
| 40–52 | Hotspot dimatikan → `WiFi putus, reconnect...` → nyala → `Status: 200` | "Trik ketiga, ini beda amatir dan pro: alat pro nggak nyerah. WiFi putus? Reconnect sendiri. Gagal terus? Restart sendiri. Nggak ada yang perlu pencet reset." | Reconnect + auto restart 🔁 |
| 52–60 | Tutor ke kamera | "Simpan tabel ini. Kamu bakal butuh tiap kali bikin alat yang online. Follow buat part selanjutnya!" | Save tabelnya 💾 Follow 👉 |

## Caption

Alat IoT kamu gagal kirim data? Baca status code-nya dulu 🔢

✅ 2xx → beres
⚠️ 400 → format data rusak
🔑 401 → API key salah
🔍 404 → URL salah
🔥 5xx → masalah server
📡 negatif → request nggak nyampe (cek internet)

Pro tip: print balasan server + reconnect otomatis 🔁

#InspiraLabs #IoT #ESP32 #HTTP #RESTAPI #Debugging #EkskulCoding #BackendDeveloper

## Yang sengaja tidak dibocorkan
- Kode kirim data lengkap (JSON, header, endpoint backend kita).
- Challenge JSON Doctor dan alur proyek akhir.
