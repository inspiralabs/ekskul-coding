# Panduan Pengajar — P11 SMA: Rakit & Online: Smart Room Monitor Tampil di Dashboard

Sabtu, 31 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P11_SMA_InspiraLabs.md`. Zip `dist/paket/sma-XX.zip`.

> Prinsip hari ini: **rakit, upload, lihat angkanya online.** Firmware dan dashboard sudah jadi. Siswa hanya merakit sesuai Peta Rakitan, mengisi 2 baris WiFi, lalu membuktikan datanya sampai. **Tidak ada coding dari nol, tidak ada multimeter, tidak ada PR.**

## 1. Tujuan (yang bisa dilihat di akhir kelas)
1. Setiap kelompok punya **satu rakitan utuh** sesuai Peta Rakitan (DHT22 out di D13, relay IN di D14, kipas di NO, D12 kosong).
2. Serial Monitor menampilkan `Terhubung!` dan `kode respons: 200`.
3. Angka suhu di dashboard kelompok **naik saat sensor digenggam** (bukti data hidup).

## 2. Persiapan

### H-1
- [ ] Backend hidup: buka `https://api-ekskulcoding.inspiralabs.id/health` → `ok`. Dashboard `sma-01.inspiralabs.id` … `sma-06.inspiralabs.id` bisa dibuka.
- [ ] `py tools/kelompok.py paket` → 6 zip. Simpan di flashdisk/Drive, **nama file = Device ID**. Zip tertukar = data dua kelompok saling menimpa.
- [ ] **Set semua dashboard ke Manual + OFF** (PIN dari `FAN_PINS` di `.env` server). Status awal server = **Otomatis, ambang 30°C**; tanpa ini kipas bisa menyala sendiri dan membingungkan. Kontrol kipas baru dibahas di P12.
- [ ] WiFi kelas: **2,4 GHz**, ada internet, **tanpa halaman login**. Tulis nama & password-nya di kertas untuk papan. Hotspot HP cadangan (mode 2,4 GHz / "kompatibilitas").
- [ ] Di tiap laptop: buka `firmware/sma_room_monitor/sma_room_monitor.ino` dari salah satu zip → **Verify (✓)** sekali. Laptop yang belum lulus instalasi P10: selesaikan sekarang.
- [ ] Jalankan `SCRIPT_P11_SMA.gs` → folder **Kode** (`P11_1_TesRelay`, `P11_2_TesDHT22`) + Google Form post-test ada di Drive. Perbarui tombol "Post Test Pertemuan 11" di Linktree.
- [ ] Per kelompok (6 set): ESP32 + kabel USB **data**, breadboard, DHT22 3-pin, relay 1-channel 5V, kipas DC 5V, jumper merah/hitam/kuning/biru/oranye, obeng kecil. Uji tiap relay & DHT22 dengan program tes; tempel stiker "OK".
- [ ] Cadangan: 1 DHT22, 1 relay, 2 kabel USB data, 2 power bank (untuk Hard, bergantian).
- [ ] **Wokwi** (cadangan kit rusak & gambar Peta Rakitan): wokwi.com → New Project → ESP32, tempel `sketch.ino`, `diagram.json`, `libraries.txt` dari `p11/wokwi/P11_PetaRakitan/`, Save, salin link.

### 15 menit sebelum kelas
- [ ] Tulis di papan: nama & password WiFi kelas, "Cabut USB sebelum memindah kabel!", "DHT out → D13 · relay IN → D14 · D12 kosong". **Jangan** tulis PIN kelompok.
- [ ] Satu rakitan tutor sudah online, dashboard tutor terbuka di proyektor sebagai pembanding ("begini seharusnya").
- [ ] Duduk berdekatan: **sma-01 ↔ sma-02**, **sma-03 ↔ sma-04**, **sma-05 ↔ sma-06** (tetangga saling cek kabel & ejaan WiFi).
- [ ] Kertas/spreadsheet pencatat poin (nama siswa, +2, Easy, Medium, Hard).

## 3. Timeline (menit → slide)
| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1, 5–6 | Bagikan kit & zip sesuai Device ID, peran, aturan poin | Cek nama zip = stiker Device ID |
| 5–8 | 2–4 | Cover, pemantik (ojol), agenda | Tampung tebakan (+2), jangan dijawab dulu |
| 8–25 | 7–9 | Kenalan 3 komponen, Peta Rakitan, urutan aman, **rakit** | Keliling. Tidak boleh colok USB sebelum Pengecek selesai mencentang |
| 25–27 | 10 | Tanya Jawab Topik 1 | +2 per penjawab |
| 27–40 | 11–15 | Isi zip, isi WiFi, upload, baca Serial Monitor | **Tukar peran.** Kelompok bermasalah → slide 15 (cek cepat) |
| 40–42 | 16 | Tanya Jawab Topik 2 | |
| 42–46 | 17 | 🟢 Easy: Online! | +5. Rayakan tiap dashboard yang pertama kali menampilkan angka |
| 46–52 | 18–19 | Perjalanan data, dashboard kelompok | Jawab pemantik di slide 18. Demo genggam sensor di proyektor |
| 52–54 | 20 | Tanya Jawab Topik 3 | |
| 54–58 | 21 | 🟡 Medium: Uji Sensor Hidup | +10 |
| 58–63 | 22 | 🔴 Hard: Lepas dari Laptop | +15. Power bank bergantian |
| 63–64 | 23 | Peta petualangan | Rakitan dikumpulkan utuh dalam kotak |
| 64–70 | 24–25 | Post-test + penutup | Sendiri-sendiri. Teaser P12 |

Waktu molor? Urutan yang boleh dipangkas: (1) Hard, (2) Medium jadi demo tutor. **Jangan** pangkas rakit + Easy: itu syarat P12.

## 4. Kalimat kunci
- **Pembuka:** "Di P10 ESP32 kita baru bisa kedip. Hari ini dia dapat indera, dapat tangan, dan bisa lapor ke internet."
- **Relay:** "Relay itu jari yang menekan saklar kipas. Yang menyuruh menekan: ESP32."
- **Sebelum colok USB:** "Siapa yang bilang boleh colok? Pengecek, setelah semua baris Peta Rakitan dicentang."
- **Firmware:** "Programnya sudah jadi. Yang kalian isi cuma 2 baris WiFi. Bagian JANGAN UBAH itu 'kabel' ke server."
- **Serial Monitor:** "Jangan panik, baca angkanya. 200 sampai, minus berarti internetnya yang macet."
- **Dashboard:** "ESP32 dan dashboard nggak ngobrol langsung. Mereka ketemu di server, alamatnya Device ID."

## 5. Gaya mengajar & memancing interaksi
- Momen paling penting: saat dashboard pertama berubah angka. Hentikan kelas 10 detik, sebut nama kelompoknya, minta mereka menggenggam sensor di depan teman.
- Error = materi. Kalau ada Serial yang menarik (titik-titik terus, `-1`), tampilkan di proyektor dan tanya kelas: "Menurut kalian kenapa?" (+2).
- **Berdua (sma-04/05/06):** Perakit/Operator & Pengecek/Pengamat, tukar di Topik 2. Kalau satu orang mendominasi, tanya langsung ke yang diam: "Coba kamu yang jelaskan kenapa kipas di NO."
- **Individu (sma-01/02/03):** tetangga jadi Pengecek sebelum colok USB, dan saling cek ejaan SSID/password sebelum upload.
- Yang penasaran mengubah bagian JANGAN UBAH: tidak dimarahi, minta ganti file dengan salinan zip asli.

## 6. Titik cek pemahaman
| Kapan | Tanya / minta tunjukkan | Jawaban yang dicari |
|---|---|---|
| Sebelum colok USB | "Tunjukkan kabel yang membuat kipas mati kalau ESP32 mati." | Kabel kipas + di **NO** |
| Setelah upload | "Baris mana yang membuktikan WiFi beres? Server beres?" | `Terhubung!` · `kode respons: 200` |
| Medium | "Kenapa angka di dashboard tidak langsung berubah?" | Sensor butuh waktu hangat + ESP32 lapor tiap ±4 detik |
| Hard | "Kenapa alat tetap jalan tanpa laptop?" | Program tersimpan di ESP32 |

## 7. Kesalahan umum & cara membimbing (jangan langsung beri jawaban)
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| USB masih tercolok saat memindah kabel | "Aturan nomor 1 di slide Urutan Aman apa?" |
| `Menghubungkan ke WiFi.....` tanpa henti | "Bandingkan huruf per huruf SSID kalian dengan papan. WiFi ini 2,4 atau 5 GHz?" |
| `kode respons: -1` | "WiFi-nya tersambung. Bisakah laptop membuka google.com lewat WiFi yang sama?" |
| `kode respons: 401` | "Tabel bilang apa? Bagian mana yang mungkin tersentuh?" → ganti `.ino` dari zip asli |
| `Gagal baca sensor DHT22` | "Pesan errornya menyebut sensor. Ikuti kabel kuning: ujungnya di pin berapa?" |
| Dashboard kosong / angka diam | "File `index.html` yang kalian buka dari folder siapa? Device ID-nya apa?" |
| Kipas menyala sendiri | "Lihat dashboard: mode apa? Ambang berapa?" → set Manual + OFF |

Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasinya** ("cek baris ke-2 Peta Rakitan"), bukan perbaikannya.

## 8. Troubleshooting cepat (tutor)
| Gejala | Tindakan |
|---|---|
| Semua kelompok `-1` | Internet WiFi kelas mati → pindah semua ke hotspot cadangan (isi ulang 2 baris WiFi) |
| Port tidak muncul | Kabel USB data, port lain, driver CP210x/CH340 (Panduan Instalasi 2) |
| Upload gagal `Failed to connect` | Tahan BOOT saat `Connecting...`; **Tools → Upload Speed → 115200**; cek D12 kosong |
| Arduino IDE minta memindah file ke folder baru | `.ino` dibuka dari dalam zip / nama folder diganti. Ekstrak ulang zip asli |
| `DHT.h: No such file or directory` | Library Manager → `DHT sensor library` → INSTALL ALL |
| Relay tidak klik / kipas diam | Upload `P11_1_TesRelay.ino`. Tes lolos → rakitan beres (dashboard memang Manual + OFF). Tes gagal → cek VCC/GND/IN relay, COM/NO, kipas − |
| Sensor tidak terbaca | Upload `P11_2_TesDHT22.ino`, cek 3 kabel DHT22 |
| Kipas berputar terus walau dashboard OFF | Relay kebalikan (active-HIGH) → tukar modul ber-stiker "OK" (perbaikan lewat kode dibahas P12) |
| ESP32 restart saat kipas mulai / saat kirim data | Daya USB lemah → port lain / power bank / kabel pendek |
| Kit tetap gagal > 5 menit | Kelompok pakai link **Wokwi** untuk memahami rakitan; catat kit rusak, ganti sebelum P12 |

## 9. Keselamatan (tidak bisa ditawar)
- **Hanya kipas DC 5V.** Tidak ada perangkat 220V/PLN, walaupun relay tertulis 250VAC.
- **Cabut USB** setiap memindah kabel.
- Jari & rambut jauh dari baling-baling. Bau/panas → cabut USB, panggil tutor.
- Password WiFi kelas jangan difoto/diunggah ke media sosial.

## 10. Diferensiasi
- **Cepat selesai:** jadi "asisten" tetangga (bertanya, bukan membetulkan); buka dashboard di HP pakai data seluler (bukti "dari mana saja").
- **Kesulitan:** fokus rakit + Easy (syarat P12). Tutor duduk bersama membaca Serial Monitor baris per baris memakai tabel slide 14.

## 11. Penilaian
- **Wajib (syarat P12):** rakitan sesuai Peta Rakitan + Serial `kode respons: 200` + dashboard menampilkan angka yang berubah. Catat per Device ID.
- **Keaktifan:** +2 per bertanya/menjawab.
- **Challenge:** Easy **+5**, Medium **+10**, Hard **+15**.
- **Post-test:** 5 soal, kunci C, B, B, B, C.

## 12. Penutup
- Rakitan **jangan dibongkar**: dikumpulkan ke tutor dalam kotak, kabel tetap tertancap. Siswa tidak membawa apa pun pulang dan **tidak ada PR**.
- Pengumuman P12: kipas dikendalikan dari dashboard (manual & otomatis). Tutor menyiapkan PIN per kelompok (dibagikan pribadi).
- Setelah kelas (tutor): catat kit rusak, cek semua rakitan masih DHT22 di D13 dan relay di D14, simpan folder kelompok di laptop masing-masing atau Drive.
