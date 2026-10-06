# Script Reels — SMP P10

| Info | Isi |
|---|---|
| Template hook | #8 — Curiosity & Secrets (Rasa Penasaran) |
| Judul | Aku nyesel baru tahu Serial.println ini sekarang |
| Durasi | ±55 detik |
| Pembicara | Tutor (layar laptop + ESP32 di meja) |

## Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Wajah frustrasi menatap ESP32 yang diam | "Aku nyesel banget baru tahu satu baris kode ini sekarang." | Nyesel baru tahu ini 😩 |
| 3–10 | Screen record: kode jalan, alat diam | "Pernah nggak, kodenya ke-upload, nggak ada error, tapi alatnya diam aja? Masalahnya, kamu nggak bisa lihat isi otak mikrokontroler…" | Upload sukses, alat diam?? |
| 10–18 | Zoom ke baris `Serial.println("sampai sini");` | "…kecuali kamu suruh dia ngomong. Serial print. Ini CCTV-nya programmer hardware." | `Serial.println()` = CCTV 📹 |
| 18–32 | Kode dengan 3 pesan: "mulai", "langkah 1", "langkah 2"; Serial Monitor cuma tampil "mulai", "langkah 1" | "Triknya: taruh pesan di setiap langkah penting. Pesan terakhir yang muncul? Di situlah kodemu macet. Langsung ketemu, nggak usah nebak-nebak satu file." | Pesan terakhir = lokasi macet 🎯 |
| 32–44 | Serial Monitor isinya `⸮⸮⸮`, lalu angka 115200 di kode & di setting di-highlight | "Bonus: kalau tulisannya jadi karakter aneh begini, bukan rusak. Kecepatannya beda. Angka di Serial begin harus sama dengan setting monitor. Biasanya 115200." | ⸮⸮⸮ → samakan baud rate |
| 44–55 | Tutor menghadap kamera, LED berkedip di belakang | "Engineer IoT beneran pakai trik ini tiap hari. Mau lihat ESP32 ini nanti baca suhu ruangan? Follow, lanjut minggu depan." | Follow buat part 3 👉 |

## Caption

Kode udah ke-upload tapi alat diem aja? 🤨 Jangan tebak-tebakan, suruh ESP32-mu "ngomong" pakai Serial.println 📹

✅ Taruh pesan di tiap langkah penting
✅ Pesan terakhir yang muncul = lokasi bug
✅ Tulisan ⸮⸮⸮? Samakan baud rate (115200)

Save biar nggak lupa pas debugging 💾

#InspiraLabs #ESP32 #Arduino #Debugging #BelajarCoding #IoT #EkskulCoding #TipsProgrammer

## Yang sengaja tidak dibocorkan
- Langkah upload di PlatformIO & solusi error upload (tombol BOOT, driver).
- Challenge Bug Hunter & lampu lalu lintas.
