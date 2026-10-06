# Script Reels — SMP P12

| Info | Isi |
|---|---|
| Template hook | #10 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | POV: ESP32 kamu nggak stuck "Menghubungkan WiFi…" lagi |
| Durasi | ±55 detik |
| Pembicara | Tutor (format POV, siswa jadi "aktor" yang frustrasi) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Siswa menatap Serial Monitor penuh titik `..........` | (voice over) "POV: kamu akhirnya nemuin cara bikin ESP32 nggak stuck 'Menghubungkan WiFi' lagi." | POV: titik-titiknya nggak berhenti 😩 |
| 4–14 | Setting hotspot HP: pilihan 2.4 GHz / 5 GHz | "Penyebab nomor satu: ESP32 cuma bisa WiFi 2.4 gigahertz. Router atau hotspot kamu 5 giga? Dia nggak bakal pernah lihat. Di iPhone, nyalakan 'Maximize Compatibility'." | ESP32 = 2.4 GHz ONLY ⚠️ |
| 14–24 | Kode `"WiFi_Kelas"` vs `"wifi_kelas "` (spasi di-highlight) | "Kedua: nama WiFi itu peka huruf besar-kecil. Bahkan spasi di belakang juga dihitung. Satu huruf beda, gagal." | Huruf & spasi DIHITUNG 🔠 |
| 24–30 | ESP32 dipindah mendekat ke router | "Ketiga: saat uji coba, dekatkan ke router. Antena ESP32 itu kecil." | Dekatkan saat testing 📍 |
| 30–45 | Split screen: file proyek besar vs program mini 15 baris yang langsung print IP | "Dan ini trik engineer: jangan langsung tes di proyek besar. Bikin program mini yang cuma connect WiFi dan print IP. Kalau ini jalan, WiFi aman, tinggal cari masalah di tempat lain. Pecah masalah besar jadi kecil." | Uji di program MINI dulu 🧪 |
| 45–55 | Serial Monitor: `Terhubung! IP ESP32 ini: 192.168.1.23` → dashboard menampilkan suhu | "Begitu tersambung, data suhu kelas langsung muncul di dashboard. Follow buat lihat hasil akhirnya minggu depan!" | Tersambung ✅ Follow 👉 |

## Caption

ESP32 kamu "Menghubungkan ke WiFi......" selamanya? 😤 Cek ini dulu:
📶 Harus 2.4 GHz (bukan 5 GHz)
🔠 Nama WiFi peka huruf besar-kecil & spasi
📍 Dekatkan ke router saat testing
🧪 Uji pakai program mini dulu, baru proyek besar

Share ke temen yang lagi stuck! 🙌

#InspiraLabs #ESP32 #WiFi #IoT #BelajarCoding #EkskulCoding #Troubleshooting #Arduino

## Yang sengaja tidak dibocorkan
- Cara mengirim data ke server/dashboard (format JSON, API key, kode respons).
- File proyek akhir dan peta warna kode.
