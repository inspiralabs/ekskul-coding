# Panduan Pengajar — P12 SMA: Kontrol Kipas dari Dashboard (Manual & Otomatis)

Sabtu, 7 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P12, `sumber/Materi_Ajar_P12_SMA_InspiraLabs.md` (kunci di KHUSUS TUTOR), folder kelompok dari P11.

## Tujuan (yang bisa dilihat di akhir kelas)
1. Kipas di meja **nyala & mati dari HP** lewat dashboard kelompok (mode Manual + PIN).
2. Di mode **Otomatis**, kipas menyala sendiri saat sensor digenggam dan mati sendiri setelah dilepas.
3. Siswa bisa menjelaskan dengan bahasanya sendiri **kenapa ada jeda ±4 detik** (ESP32 yang bertanya ke server, seperti anak kos yang nanya "ada titipan?").

## Persiapan H-1
- [ ] Semua kelompok lolos P11 (`kode respons: 200`, angka muncul di dashboard). Catat yang belum: mereka mulai 10 menit pertama dengan tutor.
- [ ] **PIN kelompok**: ambil dari `FAN_PINS` di `.env` server. Tulis di **kertas lipat per Device ID**. Jangan dibacakan, jangan di slide.
- [ ] Set semua dashboard: **Manual + kipas mati**, ambang **30°C** (pakai PIN tiap kelompok).
- [ ] Uji 1 alat: tombol di HP → kipas berubah ≤ ±4 detik; Otomatis + genggam → kipas menyala.
- [ ] Alat tutor + dashboard tutor siap untuk demo pembuka di proyektor.
- [ ] Linktree: tombol "Post Test Pertemuan 12" mengarah ke Google Form P12 SMA.

## 15 menit sebelum kelas
- Semua alat dinyalakan, cek dashboard tiap kelompok menampilkan angka hidup.
- Alat tutor di meja depan, kipas terlihat kelas, dashboard tutor di proyektor.
- Kertas PIN siap dibagikan saat slide PIN Kelompok.

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–5 | — | Demo alat tutor: tekan tombol di HP → kipas | Minta kelas menghitung detiknya keras-keras |
| 5–10 | 2–5 | Cover, pemantik, agenda, cara dapat poin | Tampung tebakan (+2) |
| 10–18 | 6–9 | Dua arah, ESP32 yang bertanya, PIN, Tanya Jawab Topik 1 | Bagikan PIN pribadi di slide 8 |
| 18–25 | 10 | Easy: Saklar dari HP | Pengendali & Pengamat |
| 25–32 | 11–13 | Manual vs Otomatis, slider, Tanya Jawab Topik 2 | Contoh rice cooker / AC |
| 32–42 | 14 | Medium: Kipas Otomatis | Genggam cukup lama, lihat angka di dashboard |
| 42–47 | 15–17 | Kipas nggak nurut, `RELAY_ACTIVE_LOW`, Tanya Jawab Topik 3 | Cek kabel NO dulu, baru kode |
| 47–58 | 18 | Hard: Kipas Lebih Gesit | Pastikan semua kembali ke 4000 |
| 58–60 | 19 | Peta Petualangan IoT | Alat dikumpulkan utuh |
| 60–70 | 20–21 | Post-test + penutup | |

Waktu molor? Hard boleh dijadikan demo tutor di proyektor (ubah 4000 → 2000 di alat tutor, kelas mengukur bersama). **Jangan** lewati Easy & Medium: itu yang didemokan di Demo Day P13.

## Kalimat kunci
- "Server **tidak bisa** mengetuk pintu alat di balik router. Jadi alatnya yang bertanya tiap ±4 detik: 'ada titipan buat aku?'"
- "Jeda 0–4 detik itu **desain**, bukan rusak."
- "Publik boleh **melihat**, hanya pemegang PIN yang boleh **mengubah**. PIN = kunci rumah."
- "Mode Otomatis itu cuma satu aturan: **kalau suhu lebih dari ambang, kipas nyala.** AC dan kulkas di rumah kalian kerjanya begitu juga."

## Gaya mengajar: ringan & penasaran
- Mulai dari **rasa**, bukan teori: biarkan siswa menekan tombol di HP dan melihat kipasnya bergerak sebelum menjelaskan kenapa.
- Satu analogi per konsep: anak kos (jeda), kunci rumah (PIN), rice cooker (otomatis). Tidak perlu membahas HTTP, polling, atau router lebih dalam.
- Kelompok yang selesai duluan langsung lanjut challenge berikutnya, jangan ditahan.

## Sistem poin & cara mencatat
- **+2**: bertanya/menjawab (pemantik & Tanya Jawab), benar atau salah. Utamakan yang belum dapat poin.
- Challenge: Easy **+5**, Medium **+10**, Hard **+15**. Pasangan: poin untuk kedua anggota.
- Bukti: demo langsung ke tutor (Easy, Medium), catatan stopwatch + jawaban (Hard).
- Rekap ke gradebook setelah kelas. **Tidak ada PR.**

## Titik cek pemahaman
| Kapan | Tanya | Jawaban yang dicari |
|---|---|---|
| Setelah Easy | "Kenapa jedanya kadang cepat, kadang lama?" | Tergantung kapan tombol ditekan terhadap laporan ESP32 berikutnya |
| Setelah Medium | "Siapa yang memutuskan kipas nyala barusan?" | Aturan di server: suhu > ambang |
| Setelah Hard | "Kenapa 2000 lebih gesit, dan kenapa tidak 500?" | ESP32 bertanya lebih sering; DHT22 butuh ≥ 2 detik |

## Kesalahan umum & cara membimbing
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| Menekan tombol berkali-kali karena "tidak jalan" | "Berapa detik kalian tunggu? Slide bilang paling lama berapa?" |
| "PIN salah" | "PIN siapa yang kalian ketik? Device ID dashboard ini apa?" |
| Tidak terjadi apa-apa > 10 detik | "Lihat Serial Monitor: masih `kode respons: 200`?" |
| Kipas kebalikan dari dashboard | "Kabel kipas di NO atau NC? Kalau sudah NO, satu kata apa yang bisa diganti?" |
| Otomatis, kipas tidak menyala | "Ambang berapa, suhu dashboard berapa? Mana yang lebih besar?" |
| Kipas nyala-mati cepat di Otomatis | "Suhu kalian berapa jauh dari ambang? Coba geser 1°C." |
| Lupa mengembalikan `SEND_INTERVAL_MS` | "Angka di firmware sekarang berapa? Kalau semua kelompok 2000, server makin capek." |

Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasi**-nya, bukan perbaikannya.

## Troubleshooting cepat (tutor)
| Gejala | Tindakan |
|---|---|
| Semua kelompok lambat > 10 detik | Internet lambat/putus → cek `https://api-ekskulcoding.inspiralabs.id/health`, pindah ke hotspot cadangan |
| PIN benar tapi tetap "PIN salah" | Setelah "PIN salah", PIN tersimpan dihapus; tekan lagi & ketik ulang. Masih salah → cocokkan dengan `FAN_PINS` di `.env` server |
| Slider berubah tapi kipas tidak | Mode masih Manual → tekan **Otomatis** |
| Kipas berputar terus walau mati | Kipas di NC, atau modul active-HIGH → `RELAY_ACTIVE_LOW false` |
| Relay klik, kipas diam | Sisi beban: COM, NO, kipas − ke GND, sekrup terminal |
| `Gagal baca sensor` setelah Hard | `SEND_INTERVAL_MS` < 2000 → kembalikan ke 4000 |

Catatan: firmware masih punya route `/fan` lokal, tapi yang bekerja di kelas adalah relay mengikuti `fanOn` di balasan server. **Jangan ajarkan** server "mendorong" perintah ke ESP32.

## Keselamatan
- **Hanya kipas DC 5V.** Tidak ada perangkat listrik PLN di meja praktik.
- Cabut USB sebelum memindah kabel apa pun.
- Jari & rambut jauh dari baling-baling saat menguji mode Otomatis.

## Diferensiasi
- **Cepat selesai:** buka dashboard pakai data seluler (bukan WiFi kelas) dan nyalakan kipas "dari luar sekolah"; jelaskan ke tetangga kenapa smart lamp di rumah juga punya jeda.
- **Kesulitan:** fokus Easy + Medium. Tutor/tetangga jadi Pengamat.

## Penilaian
- **Wajib (syarat Demo Day P13):** kipas mengikuti tombol di HP + mode Otomatis menyala saat sensor digenggam.
- Challenge Easy **+5**, Medium **+10**, Hard **+15**.
- Post-test: 5 soal, kunci B, C, A, D, B.

## Penutup
- Pastikan semua firmware kembali `SEND_INTERVAL_MS = 4000` dan `RELAY_ACTIVE_LOW` sesuai modulnya.
- Alat dikumpulkan ke tutor dalam keadaan utuh (kabel tetap tertancap) untuk Demo Day P13. **Tidak ada PR.**
- Pengumuman P13: kustom tampilan dashboard, website online di `sma-0X.inspiralabs.id`, lalu Demo Day.
- Tutor setelah kelas: simpan kertas PIN, siapkan zip kelompok (`py tools/kelompok.py paket`) untuk P13.
