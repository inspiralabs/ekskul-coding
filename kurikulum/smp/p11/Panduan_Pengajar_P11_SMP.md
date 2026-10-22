# Panduan Pengajar — P11 SMP: Kenalan Sensor DHT22: ESP32 Bisa Merasakan Suhu

Jum'at, 30 Oktober 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P11_SMP_InspiraLabs.md`.

> Prinsip hari ini: **sensor itu mainan.** Rakitannya hanya 3 kabel, programnya sudah jadi. Bagian serunya adalah **meniup dan menggenggam** sensor sambil melihat grafik melonjak di Serial Plotter. Siswa **tidak menulis kode** dan **tidak mengubah program**.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Merakit DHT22 (+ → 3V3, out → D4, − → GND) dan menunjukkan angka suhu & kelembapan di Serial Monitor.
2. Membuka Serial Plotter dan menunjukkan garis kelembapan yang **naik saat sensor ditiup**.
3. Bisa menjawab: "Sensor itu apa?" (indera benda pintar) dan "Kaki out ke mana?" (D4).

## 2. Persiapan

### H-1
- [ ] Jalankan `SCRIPT_P11_SMP.gs` → folder **Kode** + Google Form post-test ada di Drive. Perbarui tombol "Post Test Pertemuan 11" di Linktree.
- [ ] Cek catatan P10: laptop mana yang belum lulus Level 2/3? Selesaikan instalasinya sekarang.
- [ ] Di tiap laptop: buka `P11_1_BacaDHT22.ino` → pilih **ESP32 Dev Module** → **Verify (✓)** sekali.
- [ ] Rakit 1 DHT22 sendiri, upload, buka **Serial Plotter**, tiup sensornya. Kenali bentuk grafiknya supaya bisa menjelaskan.
- [ ] Siapkan 2–3 DHT22, 6 jumper, dan 2–3 kabel USB data cadangan.
- [ ] Buka `ekskulcoding.inspiralabs.id/sabotase/` di HP (untuk Challenge Hard).

### 15 menit sebelum kelas
- [ ] Nyalakan proyektor, buka slide. Siapkan 1 rakitan DHT22 jadi di meja tutor untuk demo Serial Plotter di proyektor.
- [ ] Tulis di papan: "Cabut USB sebelum memindah kabel!" dan "+ → 3V3 · out → D4 · − → GND".
- [ ] Siapkan kertas/spreadsheet pencatat poin (nama siswa, +2, Easy, Medium, Hard).

### Isi kit per kelompok/individu
ESP32 + rakitan LED P10 di breadboard · kabel USB data · DHT22 · 3 jumper (merah, kuning, hitam) + 2 cadangan · kertas & pensil untuk Pencatat.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1–6 | Pembuka, cover, pemantik, agenda, peran, poin | Peragakan HP dimiringkan. Tampung tebakan (+2). Tunjuk peran |
| 5–11 | 7–8 | Sensor = indera, kenalan DHT22 | Edarkan 1 sensor. Jawab pemantik di slide 7 |
| 11–22 | 9–10 | Rakit 3 kabel + cek 5 detik | Pengecek wajib membacakan checklist sebelum colok USB |
| 22–30 | 11–12 | Upload & Serial Monitor, tips sensor diam | Keliling. Rayakan angka suhu pertama tiap kelompok |
| 30–32 | 13 | Tanya Jawab | +2 per penjawab |
| 32–36 | 14 | 🟢 Easy | Cek angka & catatan Pencatat. +5 |
| 36–40 | 15 | Serial Plotter | **Demo di proyektor** dengan rakitan tutor. **Ganti peran** |
| 40–48 | 16 | Tiup & genggam | Hitung "1… 2… 3… tiup!" bersama satu kelas |
| 48–50 | 17 | Tanya Jawab | +2 per penjawab |
| 50–55 | 18 | 🟡 Medium | Cek angka awal & puncak + grafik. +10 |
| 55–62 | 19 | 🔴 Hard | Sabotase rakitan kelompok yang sudah lulus Easy. +15 |
| 62–63 | 20 | Peta petualangan | "Jangan bongkar rakitan, dipakai P12" |
| 63–70 | 21–22 | Post-test | Sendiri-sendiri. Tutup dengan teaser P12 |

## 4. Kalimat kunci (boleh dibacakan)

- **Pembuka:** "Minggu lalu ESP32 kita bisa 'bicara' lewat lampu. Hari ini dia dapat indera: dia bisa merasakan panas dan lembap."
- **Sensor:** "ESP32 itu otak. Sensor itu indera. Otak tanpa indera tidak tahu apa-apa tentang dunia luar."
- **Kelembapan:** "Kelembapan itu banyaknya uap air di udara. Coba hembuskan napas ke kaca: berembun kan? Napas kita lembap."
- **Sebelum merakit:** "Tangan siapa yang pegang kabel? Perakit. Siapa yang bilang boleh colok USB? Pengecek, setelah checklist selesai."
- **Serial Plotter:** "Angka yang tadi lewat cepat di Serial Monitor, sekarang jadi garis. Seperti layar detak jantung di rumah sakit."
- **Saat grafik melonjak:** "Lihat gunungnya! Napas kalian baru saja tercatat oleh sensor."

## 5. Gaya mengajar: belajar sambil bermain

- **Grafik = pusat perhatian.** Tampilkan Serial Plotter tutor di proyektor sepanjang Topik 2. Ajak satu kelas meniup bersamaan, lalu bandingkan "gunung" tiap kelompok.
- **Lomba kecil yang aman:** "Gunung Tertinggi" (Medium) boleh diumumkan pemenangnya, tapi semua kelompok yang menyelesaikan langkahnya tetap dapat +10.
- **Jangan ceramah lebih dari 5–6 menit.** Slide 7–8 cukup ±6 menit, langsung rakit.
- **Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 36). Di Topik 2 siapa saja boleh meniup sensor.
- **Peserta individu:** pegang semua peran; pasangkan dua individu sebagai "teman cek" untuk membacakan checklist.
- **Kesalahan = misi tambahan.** `Gagal baca sensor!` itu petunjuk, bukan kegagalan: "Serial Monitor sedang memberi tahu kita: periksa kabel!"
- **Sinyal diam:** tutor angkat tangan → semua angkat tangan & lepas kabel/mouse, sebelum instruksi baru.

## 6. Sistem poin & cara mencatat

| Kegiatan | Poin | Untuk siapa |
|---|---|---|
| Bertanya / menjawab (pemantik, Tanya Jawab, contoh sensor di HP) | **+2** | Siswa yang bicara (benar atau salah, yang penting berani) |
| 🟢 Easy | **+5** | Setiap anggota kelompok |
| 🟡 Medium | **+10** | Setiap anggota kelompok |
| 🔴 Hard | **+15** | Setiap anggota kelompok |

- Catat +2 dengan turus saat itu juga. Gilir yang menjawab: utamakan yang belum pernah dapat.
- Rekap ke gradebook setelah kelas. **Tidak ada PR.**

## 7. Titik cek pemahaman

- Setelah slide 8: "Kaki DHT22 ada berapa? Sebutkan!" (+, out, −).
- Setelah slide 9: "Kaki out ke mana?" (semua menjawab bersama: D4). "+ ke mana?" (3V3).
- Setelah slide 11: **jempol**: "Jempol atas kalau angka suhu sudah muncul." Yang jempol bawah → datangi duluan.
- Setelah slide 16: "Ditiup, garis mana yang naik duluan?" (kelembapan).

## 8. Kesalahan yang sering terjadi & cara membantu

Bantu dengan **pertanyaan**, bukan langsung memperbaiki. Biarkan Perakit yang memegang kabel.

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Lupa cabut USB saat memindah kabel | "Apa yang ada di papan tulis? Sudah dilakukan?" |
| DHT22 dipasang sesuai urutan modul lain | "Tulisan di modul kalian urutannya apa? Baca dari kiri." |
| Kabel out di D2/D15 (pin sebelah D4) | "Baca tulisan kecil di sebelah pinnya. Apa tulisannya?" |
| `Gagal baca sensor` | "Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?" |
| Membuka file P10 bukan P11 | "Nama file yang kamu buka apa? Angkanya P berapa?" |
| Serial Plotter kosong | "Baud di pojok kanan berapa? Harus sama dengan Serial Monitor." |
| Meniup terlalu dekat sampai sensor berembun | "Kalau sensornya basah, angkanya bisa dipercaya?" → keringkan, tunggu 1 menit |

## 9. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| `Gagal baca sensor! Cek kabel.` terus | Out bukan di D4, longgar, + − tertukar | Cabut USB, cek dengan checklist slide 10 |
| Sensor terasa hangat/panas | + dan − tertukar | **Cabut USB segera**, tukar kabelnya, tunggu dingin |
| Kadang terbaca, kadang gagal | Kabel setengah masuk / jumper hampir putus | Tekan kabel sampai mentok, ganti jumper |
| Serial Monitor kosong | Pesan awal terlewat | Tekan **EN** di board |
| Tulisan acak `⸮⸮⸮` | Baud beda | Pilih **115200 baud** |
| `DHT.h: No such file or directory` | Library DHT belum terpasang | Library Manager → DHT sensor library by Adafruit → INSTALL ALL |
| Serial Plotter kosong / garis aneh | Baud beda / jendela lama | Pilih 115200, tutup lalu buka lagi Serial Plotter |
| Angka tidak berubah saat ditiup | Normal, sensor lambat | Tiup lebih lama (5 detik), tunggu 2–4 detik |
| Port tidak muncul / `Failed to connect` | Kabel charger / mode upload | Kabel data bertanda; tahan BOOT saat `Connecting....` |

## Cara main Kartu Sabotase (Challenge Hard "Detektif Sensor")
Halaman: `ekskulcoding.inspiralabs.id/sabotase/` (juga ada di halaman utama ekskul, kartu "Kartu Sabotase"). Di SMP **tutor** yang menyabotase, bukan siswa.

1. **Saat kelompok lain mengerjakan Medium:** buka halaman di HP → pilih **SMP** → **Ambil Kartu**. Keluar 3 kartu aman (1 untuk kabel out, 1 untuk kabel −, 1 untuk kabel +).
2. Minta pemilik rakitan menunggu di luar meja. **Cabut USB**, pasang ketiga sabotase, lalu tekan **Tutup kartu**.
3. **Siswa jadi detektif:** colok USB, lihat Serial Monitor menulis `Gagal baca sensor!`, cari 3 kabel yang salah, tulis *kabel mana → seharusnya ke mana*, perbaiki sampai angka suhu muncul. **Program tidak boleh diubah.**
4. **Cocokkan:** **catat 3 kartu tadi** (foto layar/kertas) sebelum menutupnya, karena Ambil Kartu berikutnya memberi kartu lain. Gejala tiap kartu ada di bagian "Untuk tutor: semua kartu & gejalanya".
5. **Nilai:** +15 kalau 3 kesalahan ditulis benar dan angka suhu muncul lagi.

**Jangan pernah menukar kabel + dan −** DHT22 (sensor bisa panas). Kartu di halaman sudah dipilih yang aman.

## 10. Keselamatan

- Semua tegangan di kit ini rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja.
- Aturan nomor satu: **cabut USB sebelum memindah kabel**.
- + dan − DHT22 tertukar → sensor panas. Ajarkan: "Kalau terasa hangat, cabut dulu, tanya kemudian."
- Meniup boleh, membasahi sensor tidak. Minuman jauh dari meja rakitan.
- Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng).

## 11. Diferensiasi

- **Siswa cepat:** Challenge Medium & Hard; lalu bonus: "Bisakah kalian membuat garis **suhu** naik 2 °C tanpa meniup?" (genggam lebih lama). Atau jadi "asisten tutor" yang membantu kelompok lain **dengan pertanyaan**.
- **Siswa kesulitan:** pasang satu kabel per instruksi ("Merah dulu ke 3V3. Sudah? Sekarang kuning ke D4."). Boleh melihat rakitan kelompok yang sudah berhasil. Target minimum: angka suhu muncul + ikut meniup sensor sambil melihat grafik.

## 12. Penilaian

- **Keaktifan:** +2 per tanya/jawab.
- **Challenge** (leaderboard, per anggota kelompok):
  - 🟢 Easy +5 = angka suhu & kelembapan muncul + dicatat Pencatat.
  - 🟡 Medium +10 = angka awal & puncak kelembapan tercatat + grafik gunung ditunjukkan.
  - 🔴 Hard +15 = 3 kesalahan sabotase ditulis benar + angka suhu muncul lagi tanpa mengubah program.
- **Post-test:** 5 soal, individu (Google Form otomatis menilai). Kunci: 1B 2C 3D 4A 5B.
- **Tidak ada PR / tugas rumah.**

## 13. Penutup

- "Rakitan DHT22 jangan dibongkar. Minggu depan suhu dari meja kalian terbang ke internet dan muncul di website kalian sendiri!"
- Setelah kelas (tutor): catat kelompok yang belum berhasil membaca sensor → datangi duluan di awal P12. Rekap poin ke gradebook.
