# Panduan Pengajar — P11 SMA: Firmware Jadi, Data Online

Sabtu, 31 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P11, `sumber/Materi_Ajar_P11_SMA_InspiraLabs.md` (kunci di KHUSUS TUTOR), zip `dist/paket/sma-XX.zip`, `docs/HANDOUT_SISWA.md`.

## Tujuan (yang bisa dilihat di akhir kelas)
1. Setiap kelompok menunjukkan Serial Monitor dengan `Terhubung!` dan `kode respons: 200`.
2. Angka suhu di dashboard kelompok **naik saat sensor digenggam** (bukti data hidup, bukan angka lama).
3. Siswa bisa menyebut **lapisan mana** yang bermasalah dari satu baris Serial (daya → program → WiFi → sensor → server → dashboard).

## Persiapan H-1
- [ ] Backend hidup: buka `https://api-ekskulcoding.inspiralabs.id/health`.
- [ ] `py tools/kelompok.py paket` → 6 zip. Simpan di flashdisk/Drive, **nama file = Device ID**. Zip yang tertukar = data dua kelompok saling menimpa.
- [ ] Isi WiFi kelas di `docs/HANDOUT_SISWA.md`. Pastikan **2.4 GHz** dan ada **internet** (bukan hanya WiFi). Hotspot HP cadangan, mode 2.4 GHz / "kompatibilitas".
- [ ] Di tiap laptop buka `firmware/sma_room_monitor/sma_room_monitor.ino` dari satu zip → **Verify (✓)** sekali. Laptop yang belum punya board ESP32/library DHT: pasang dulu (Panduan Instalasi, unduhan ±2 GB, jangan di kelas).
- [ ] Status awal server tiap Device ID = **Otomatis, ambang 30°C**. Kalau kelas biasanya > 30°C, set tiap dashboard ke **Manual + OFF** (PIN dari `FAN_PINS` di `backend/.env`) supaya kipas tidak menyala sendiri dan membingungkan. Atau biarkan dan jelaskan "bocoran P12".
- [ ] Power bank / charger HP 5V + kabel data untuk Hard (minimal 2 untuk bergantian).
- [ ] Kit yang rusak di P10 sudah diganti dan lolos Tes 1 & Tes 2.

## 15 menit sebelum kelas
- Rakitan P10 dikeluarkan utuh. Cek cepat: relay IN di **D14**, DHT out di **D13**, **D12 kosong** (Easy P10 sering lupa dikembalikan).
- Tulis nama & password WiFi di papan (atau tampilkan handout). **Jangan** tulis PIN kelompok.
- Satu alat tutor sudah online sebagai pembanding ("begini seharusnya").

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–5 | — | Bagikan zip sesuai Device ID, ekstrak | Cek nama folder = Device ID di zip |
| 5–10 | 2–4 | Cover, pemantik ("404"), agenda | Tampung tebakan |
| 10–15 | 5–8 | Offline → online, perjalanan data, isi zip, BOLEH/JANGAN UBAH | Tekankan: isi **2 baris** WiFi saja |
| 15–25 | 9–10 | Isi WiFi → Upload → Serial, forum Topik 1 | Operator & Pengamat |
| 25–30 | 11 | Easy: Online! | Screenshot Serial + dashboard |
| 30–36 | 12–14 | Membaca Serial, kode respons, forum Topik 2 | Jawab pertanyaan pemantik di slide 13 |
| 36–43 | 15 | Medium: Uji Sensor Hidup | Cabut USB sebelum lepas kabel kuning |
| 43–48 | 16–18 | Alat mandiri, troubleshooting berlapis, forum Topik 3 | |
| 48–57 | 19 | Hard: Lepas dari Laptop | Power bank bergantian; D27 harus dikembalikan ke D13 |
| 57–60 | 20 | Peta proyek | Simpan folder kelompok |
| 60–70 | 21–22 | Post-test + penutup | |

Waktu molor? Hard langkah 2 (pindah D27) boleh dilewati. **Jangan** lewati Easy: itu syarat P12.

## Kalimat kunci
- "Hari ini **tidak ada coding**. Yang kalian isi hanya 2 baris WiFi. Bagian JANGAN UBAH itu 'kabel' ke server."
- "ESP32 dan dashboard tidak saling bicara. Keduanya lewat server, dengan Device ID sebagai alamat rumah."
- "Jangan panik, **baca angkanya**. 200 beres, 401 kunci salah, 404 alamat salah, negatif = tidak sampai."
- "Cek dari lapisan paling bawah. Jangan bongkar kabel kalau ternyata password WiFi salah ketik."

## Manajemen kelas
- **Berdua:** **Operator** (laptop, isi WiFi, upload) & **Pengamat** (baca Serial, cocokkan dengan tabel slide 12, catat waktu di Medium). Tukar di Topik 2.
- **Individu:** tetangga (01↔02, 03↔04, 05↔06) saling cek ejaan SSID/password sebelum upload: 1 huruf salah = titik-titik selamanya.
- Pantau yang mengubah bagian JANGAN UBAH "karena penasaran": tidak dimarahi, tapi minta ganti file dengan salinan zip asli. Rasa ingin tahu boleh, di salinan terpisah.
- Data publik: ingatkan dashboard bisa dilihat orang lain; nama & foto pribadi baru dipasang di P13.

## Titik cek pemahaman
| Kapan | Tanya | Jawaban yang dicari |
|---|---|---|
| Setelah upload | "Baris mana yang membuktikan WiFi beres? Server beres?" | `Terhubung!` · `kode respons: 200` |
| Medium | "Dashboard Online tapi angka tidak berubah. Lapisan apa?" | Sensor (ESP32 tidak kirim data baru) |
| Hard | "Kenapa ganti pin butuh laptop, colok power bank tidak?" | Program tersimpan; mengubah = upload program baru |

## Kesalahan umum & cara membimbing
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| `Menghubungkan ke WiFi.....` tanpa henti | "Bandingkan huruf per huruf SSID kalian dengan papan. WiFi ini 2.4 atau 5 GHz?" |
| `kode respons: -1` | "WiFi-nya tersambung. Bisakah laptop membuka google.com lewat WiFi yang sama?" |
| 401 / 404 | "Tabel kode respons bilang apa? Bagian mana yang mungkin tersentuh?" → ganti `.ino` dari zip asli |
| Data dua kelompok tertukar | "Device ID di firmware kalian apa? Di Serial? Di nama folder?" |
| `Gagal baca sensor DHT22` | "Lapisan WiFi sudah beres. Lapisan berikutnya apa? Ingat Tes 2 P10." |
| Dashboard kosong | "File `index.html` yang kalian buka dari folder siapa?" |
| Kipas menyala sendiri | "Lihat dashboard: mode apa? Ambang berapa? Suhu berapa?" (status awal Otomatis 30°C) |

## Troubleshooting cepat (tutor)
| Gejala | Tindakan |
|---|---|
| Semua kelompok −1 | Internet WiFi kelas mati → pindah semua ke hotspot cadangan (isi ulang 2 baris WiFi) |
| Satu kelompok 401/404 | Ganti `sma_room_monitor.ino` dengan salinan zip asli, isi WiFi lagi |
| Arduino IDE minta memindah file ke folder baru | File `.ino` dibuka dari luar foldernya / nama folder diganti. Pakai `firmware/sma_room_monitor/sma_room_monitor.ino` dari zip asli |
| `DHT.h: No such file or directory` | Library Manager → `DHT sensor library` → INSTALL ALL |
| Upload gagal `Failed to connect` | Tahan BOOT saat `Connecting...`; **Tools → Upload Speed → 115200**; cek D12 kosong |
| Restart berulang saat kirim data | Daya USB lemah → port lain / power bank |
| Backend `/health` mati | Lapor admin server; sementara kerjakan Medium bagian Serial saja |

## Keselamatan
- Cabut USB sebelum melepas/memasang kabel (Medium langkah 3, Hard langkah 2).
- Power bank/charger: hanya 5V USB. Kipas tetap DC 5V.
- WiFi password kelas jangan diunggah/difoto ke media sosial.

## Diferensiasi
- **Cepat:** buka dashboard di HP pakai data seluler (bukti "dari mana saja"); jelaskan ke tetangga arti tiap baris Serial; ukur berapa detik dari genggam sampai dashboard berubah, lalu jelaskan dua sumber jeda (sensor lambat + kirim tiap 4 detik).
- **Kesulitan:** cukup Easy + Medium langkah 1. Tutor duduk bersama membaca Serial baris per baris memakai tabel berlapis.

## Penilaian
- **Wajib (syarat P12):** screenshot Serial `kode respons: 200` + dashboard menampilkan angka yang berubah. Catat per Device ID.
- Challenge Easy/Medium/Hard **+10** masing-masing.
- Post-test: kunci C, B, B, B, C.

## Penutup & PR
- Folder kelompok disimpan baik-baik (dipakai lagi P12 & P13). Jangan tertukar.
- Semua pin kembali ke D13/D14 (cek Hard).
- Pengumuman P12: kontrol kipas dari dashboard. Tutor menyiapkan PIN per kelompok (dibagikan pribadi).
