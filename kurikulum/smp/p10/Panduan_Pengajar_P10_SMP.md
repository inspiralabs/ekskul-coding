# Panduan Pengajar — P10 SMP: Pasang Arduino IDE & Kedipkan LED Pertamamu

Jum'at, 23 Oktober 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P10_SMP_InspiraLabs.md`. Langkah instalasi detail: `kurikulum/panduan-instalasi/` (Panduan 1–3).

> Prinsip hari ini: **belajar sambil bermain.** Instalasi dibuat seperti game 3 level + BOS. Waktu menunggu unduhan diisi game Tebak Komponen. Siswa **tidak menulis kode**: mereka memasang aplikasi, menekan Upload, dan paling banyak mengganti angka di challenge. Target utamanya bukan "paham semua", tapi **penasaran dan ingin lanjut**.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Punya laptop yang lulus 3 level: Arduino IDE terbuka, **ESP32 Dev Module** ada di daftar board, library DHT *installed*.
2. Meng-upload `P10_1_Blink.ino` sendiri dan menunjukkan LED breadboard berkedip **bareng** lampu biru board.
3. Bisa menjawab: "Arduino IDE itu gunanya apa?" (menerjemahkan & mengirim program ke ESP32).

## 2. Persiapan

### H-1
- [ ] Jalankan `SCRIPT_P10_SMP.gs` → folder **Kode** + Google Form post-test ada di Drive. Pasang link folder Kode & tombol "Post Test Pertemuan 10" di Linktree.
- [ ] Unduh installer **Arduino IDE 2.3.10** dari arduino.cc: Windows (`.exe`), Mac Apple Silicon (`arm64.dmg`), Mac Intel (`64bit.dmg`). Salin ke 2–3 flashdisk.
- [ ] Siapkan **2–3 laptop cadangan** yang sudah lulus semua level + sudah pernah upload Blink. Ini penyelamat kalau unduhan board ESP32 di kelas lambat.
- [ ] Tes kecepatan WiFi kelas. Lambat (unduh 100 MB > 3 menit)? Putuskan dari sekarang: semua kelompok memilih board ESP32 versi **2.0.17** (±0,8 GB) di Level 2.
- [ ] Tanyakan ke sekolah: laptop sekolah butuh password Administrator untuk instal? Kalau ya, siapkan orang yang memegang password atau pakai opsi **Only for me**.
- [ ] Cek driver USB di laptop cadangan (port ESP32 muncul). Siapkan 2–3 **kabel USB data cadangan**, tandai dengan selotip warna supaya tidak tertukar dengan kabel charger.
- [ ] Siapkan "meja Tebak Komponen": ESP32, breadboard, LED, resistor, kabel jumper, DHT22, kabel USB data + kabel charger, power bank.
- [ ] (Opsional, cara cepat) Kalau banyak laptop Windows dan internet buruk: setelah Arduino IDE terpasang di laptop siswa, salin folder `C:\Users\<nama>\AppData\Local\Arduino15` dari laptop cadangan ke laptop siswa (Mac: `~/Library/Arduino15`, sesama Mac). Board ESP32 langsung terpasang tanpa unduh. **Tes dulu di 1 laptop H-1.**
- [ ] (Opsional, siswa Windows) **Server kelas lokal**: `py tools/server_kelas.py`, lalu tes dari 1 laptop siswa: buka halamannya, INSTALL board dari alamat lokal, upload Blink (langkah lengkap di `kurikulum/smp/README.md`, bagian "Server kelas lokal").

### 15 menit sebelum kelas
- [ ] Nyalakan proyektor, buka slide. Buka Arduino IDE di laptop tutor untuk demo.
- [ ] Tulis di papan:
  - Alamat board: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
  - Tabel **Level 1 · Level 2 · Level 3 · BOS** dengan kolom per Device ID (untuk dicentang)
  - "Cabut USB sebelum memindah kabel!"
- [ ] Siapkan kertas/spreadsheet pencatat poin (kolom: nama siswa, +2, Easy, Medium, Hard).

### Isi kit per kelompok/individu
Laptop · ESP32 + kabel USB data · breadboard dengan rakitan LED P9 (LED + resistor **220Ω**) · kertas & pensil untuk Pencatat.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–4 | 1–6 | Pembuka, cover, pemantik, agenda, peran, poin | Minta laptop dinyalakan dulu (booting lama). Tampung tebakan pemantik (+2 per penebak). Tunjuk peran |
| 4–10 | 7–9 | IoT di sekitar kita, kenalan tim, Arduino IDE = penerjemah | Angkat komponen satu per satu. Jawab pemantik di slide 9 |
| 10–20 | 10–11 | **Level 1** pasang Arduino IDE | Edarkan flashdisk. Keliling: tombol Yes/Install/Finish. Centang Level 1 di papan |
| 20–24 | 12 | **Level 2** mulai unduh board ESP32 | Demo di proyektor: Preferences → tempel alamat → Boards Manager → INSTALL |
| 24–34 | 13–14 | Game Tebak Komponen + Tur Arduino IDE | Main sambil unduhan berjalan. +2 tiap jawaban benar |
| 34–42 | 15–17 | **Level 3** library DHT + Verify, Tanya Jawab, 🟢 Easy | Verify pertama 2–5 menit: isi dengan Tanya Jawab. Cek 3 bukti Easy (+5) |
| 42–54 | 18–20 | Misteri D2, **BOS** upload Blink, tips upload gagal | **Ganti peran.** Level 2 belum selesai? Kelompok itu pakai laptop cadangan |
| 54–56 | 21 | Tanya Jawab | +2 per penjawab |
| 56–62 | 22–23 | 🟡 Medium + 🔴 Hard | Medium dulu. Hard untuk yang cepat. Pastikan Hard dikembalikan ke D2 |
| 62–63 | 24 | Peta petualangan | Teaser P11 |
| 63–70 | 25–26 | Post-test | Sendiri-sendiri, HP/laptop. Tutup dengan info P11 |

## 4. Kalimat kunci (boleh dibacakan)

- **Pembuka:** "Hari ini kita main game 3 level. Hadiahnya: ESP32 kalian menjalankan program pertamanya."
- **IoT:** "IoT itu benda biasa yang dikasih otak kecil dan internet. Lampu parkir mall, smartwatch, CCTV. Sebentar lagi kalian bikin sendiri."
- **Penerjemah:** "ESP32 cuma ngerti 0 dan 1. Arduino IDE itu penerjemahnya. Verify = terjemahkan dan periksa. Upload = terjemahkan dan kirim."
- **Kamus board:** "Arduino IDE dari pabriknya cuma kenal papan buatan Arduino. ESP32 buatan perusahaan lain, jadi kita pasang kamusnya dulu."
- **Sambil menunggu:** "Unduhannya besar, kayak download game. Sambil nunggu, kita main tebak-tebakan."
- **Saat berhasil:** "Lampu biru dan LED kedip bareng? Selamat, kalian baru saja memprogram mikrokontroler!"

## 5. Gaya mengajar: belajar sambil bermain

- **Rayakan setiap level.** Centang besar di papan + sebut nama kelompok keras-keras. Anak SMP sangat termotivasi oleh "progress bar" yang terlihat.
- **Jangan ceramah lebih dari 5–6 menit** tanpa kegiatan. Slide 7–9 cukup ±6 menit, lalu langsung tangan di laptop.
- **Waktu menunggu = waktu main.** Saat unduhan berjalan, jangan biarkan siswa menatap progress bar: jalankan Tebak Komponen dan Tur Arduino IDE.
- **Kesalahan itu bagian dari game.** Kalau upload gagal, katakan: "Bagus, kita dapat misi tambahan. Baca tulisan merahnya, cocokkan dengan slide Tips Engineer."
- **Sinyal diam:** sepakati satu sinyal (tutor angkat tangan → semua angkat tangan & lepas mouse) sebelum memberi instruksi baru.
- **Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 42). Kelompok berempat: beri tugas ke yang menganggur ("kamu Pengecek, bacakan langkah Level 2 keras-keras").
- **Peserta individu** (`smp-01`–`smp-05`): pegang semua peran. Pasangkan dua individu sebagai **"teman cek"** yang saling membacakan langkah.
- **Kelompok yang selesai duluan** jadi "asisten instalasi": membantu kelompok lain **dengan menunjuk dan bertanya**, bukan mengambil alih mouse.

## 6. Sistem poin & cara mencatat

| Kegiatan | Poin | Untuk siapa |
|---|---|---|
| Bertanya / menjawab Tanya Jawab, pemantik, Tebak Komponen, Tur Arduino IDE | **+2** | Siswa yang bicara (benar atau salah, yang penting berani; Tebak Komponen & Tur: yang benar) |
| 🟢 Easy | **+5** | Setiap anggota kelompok |
| 🟡 Medium | **+10** | Setiap anggota kelompok |
| 🔴 Hard | **+15** | Setiap anggota kelompok |

- Catat +2 dengan turus di kertas absen saat itu juga (jangan menunda sampai akhir kelas). Pencatat kelompok boleh membantu mencatat poin kelompoknya.
- Gilir yang menjawab: "Yang sudah dapat dua kali, gantian dulu ya." Tujuannya semua anak berani bicara minimal sekali.
- Rekap ke gradebook setelah kelas supaya leaderboard ter-update.
- **Tidak ada PR.** Instalasi yang belum selesai diselesaikan tutor, bukan dibawa pulang siswa.

## 7. Titik cek pemahaman

- Setelah slide 9: "Verify atau Upload yang mengirim program ke ESP32?" (Upload).
- Setelah slide 10: "Level 2 itu pasang apa?" (board ESP32 / kamus ESP32).
- Setelah slide 19: **jempol**: "Jempol atas kalau lampu biru dan LED kalian kedip bareng." Yang jempol bawah → datangi duluan.
- Sebelum post-test: "Lampu biru kedip, LED diam. Salah program atau rakitan?" (rakitan).

## 8. Kesalahan yang sering terjadi & cara membantu

Bantu dengan **pertanyaan**, bukan langsung mengambil mouse/kabel.

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Mac: salah pilih file `.dmg` (Apple Silicon vs Intel), aplikasi tidak mau dibuka | "Di About This Mac tertulis Chip Apple atau Intel? File yang kamu pakai yang mana?" |
| Memilih "Arduino ESP32 Boards by Arduino" | "Baca tulisan kecil di bawah judulnya: by siapa?" |
| Alamat board salah ketik / ada spasi | "Bandingkan huruf demi huruf dengan papan. Lebih aman salin-tempel." |
| INSTALL WITHOUT DEPENDENCIES di Level 3 | "Tombol mana yang kamu klik tadi? Coba cari Adafruit Unified Sensor." |
| Lupa memilih board/port sebelum Upload | "Kotak Select Board di atas tulisannya apa?" |
| Lupa cabut USB saat memindah kabel | "Apa yang tertulis di papan? Sudah dilakukan?" |
| LED terbalik / dua kaki LED satu baris | "Kaki panjang LED harus ke mana? Ikuti jalan listriknya dari D2 sampai GND." |
| Medium: titik koma atau kurung ikut terhapus (error merah) | "Bandingkan baris yang kamu ubah dengan baris lain. Ada yang hilang?" |

## 9. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| Installer Windows tidak mau jalan | SmartScreen | More info → Run anyway (file dari arduino.cc) |
| Mac: "cannot be opened because the developer cannot be verified" | Gatekeeper | System Settings → Privacy & Security → Open Anyway |
| Unduhan board ESP32 sangat lambat | WiFi kelas | Ganti ke versi **2.0.17**; atau pindah kelompok ke laptop cadangan untuk BOS |
| *Error downloading* di tengah unduhan | Internet putus | Klik INSTALL lagi (unduhan dilanjutkan) |
| "ESP32 Dev Module" tidak ada di daftar | Level 2 belum selesai | Cek Boards Manager: harus tertulis *installed* |
| `DHT.h: No such file or directory` | Library DHT belum terpasang | Library Manager → DHT sensor library by Adafruit → INSTALL ALL |
| `Adafruit_Sensor.h: No such file` | Dependency tidak ikut | Library Manager → Adafruit Unified Sensor → INSTALL |
| Verify pertama 2–5 menit | Compile pertama ESP32 | Normal. Isi dengan Tanya Jawab |
| Port tidak muncul | Kabel charger / driver | Ganti kabel data bertanda. Masih tidak? Driver CP210x/CH340 (Panduan 2 bagian E) |
| `Failed to connect to ESP32` | Board belum masuk mode upload | Tahan **BOOT** saat `Connecting....`, lepas saat persen muncul |
| Upload gagal terus walau BOOT ditahan | Kecepatan upload | **Tools → Upload Speed → 115200** |
| `Access denied` / port sibuk | Serial Monitor masih terbuka | Tutup Serial Monitor, upload lagi |
| Tulisan acak `⸮⸮⸮` | Baud beda | Pilih **115200 baud** di Serial Monitor |
| Lampu biru kedip, LED diam | Rakitan LED | LED terbalik / satu baris / kabel bukan di D2 |
| Halaman server kelas tidak terbuka dari laptop siswa | Profil WiFi masih Public / WiFi memblokir antar-perangkat | Ubah profil WiFi laptop pengajar jadi Private, izinkan Python di Firewall; atau router sendiri yang tetap tersambung internet |
| Boards Manager tetap mengunduh lama padahal pakai server kelas | Alamat Espressif masih ada di Preferences | Hapus, sisakan alamat lokal saja |

## 10. Keselamatan

- Tegangan kit rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja.
- Aturan nomor satu: **cabut USB sebelum memindah kabel**.
- Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng): bisa korsleting.
- Unduh aplikasi hanya dari **arduino.cc** atau flashdisk tutor. Ajarkan: "Jangan instal dari link pendek yang tidak jelas."
- Minuman jauh dari meja laptop dan rakitan.

## 11. Diferensiasi

- **Siswa cepat:** Challenge Medium & Hard; lalu jadi "asisten instalasi" untuk kelompok lain (hanya menunjuk & bertanya). Bonus: "Coba buat LED kedip dengan pola detak jantung: cepat-cepat-lambat. Angka mana yang harus diubah?"
- **Siswa kesulitan:** pecah jadi satu langkah per instruksi ("Klik File. Sudah? Sekarang Preferences."). Target minimum: Arduino IDE terpasang + LED berkedip (boleh di laptop cadangan). Medium/Hard boleh dilewati.

## 12. Penilaian

- **Keaktifan:** +2 per tanya/jawab (pemantik, Tanya Jawab, Tebak Komponen, Tur Arduino IDE).
- **Challenge** (leaderboard, per anggota kelompok):
  - 🟢 Easy +5 = 3 bukti: ESP32 Dev Module ada, library DHT *installed*, `Done compiling`.
  - 🟡 Medium +10 = LED kedip cepat (`delay(100)`) **dan** lambat (`delay(3000)`) ditunjukkan ke tutor.
  - 🔴 Hard +15 = LED kedip di D18, bisa menjelaskan kenapa lampu biru diam, **sudah dikembalikan** ke D2/angka 2.
- **Post-test:** 5 soal, individu (Google Form otomatis menilai). Kunci: 1B 2A 3C 4D 5B.
- **Tidak ada PR / tugas rumah.**

## 13. Penutup

- "Rakitan LED jangan dibongkar. Minggu depan ESP32 kita dapat 'indera' pertamanya: sensor suhu, plus grafik yang bisa kalian tiup!"
- Setelah kelas (tutor): selesaikan instalasi laptop yang belum lulus Level 2/3 (catat dari tabel di papan), supaya P11 bisa langsung praktek. Rekap poin ke gradebook.
