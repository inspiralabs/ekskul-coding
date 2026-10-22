# Panduan Pengajar — P10 SMA: Kenalan dengan ESP32 & Siapkan Bengkel IoT di Laptop

Sabtu, 17 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan & kunci: `sumber/Materi_Ajar_P10_SMA_InspiraLabs.md` (KHUSUS TUTOR). Langkah instalasi detail: `kurikulum/panduan-instalasi/` (Panduan 1–3).

> Prinsip hari ini: **penasaran dulu, teori belakangan.** Tidak ada rakitan. Siswa mengenal ESP32, memasang "bengkel" di laptop, lalu meng-upload program jadi dan mengutak-atik angkanya. Target utama: **laptop siap untuk P11** dan siswa **ingin lanjut**. Tidak ada PR.

## Tujuan (yang bisa dilihat di akhir kelas)
1. Siswa menyebut 3 contoh IoT di sekitarnya dan menunjuk 5 bagian ESP32 (chip, antena WiFi, port USB, tombol BOOT/EN, LED biru).
2. Laptop lulus 3 level: Arduino IDE terbuka, **ESP32 Dev Module** ada di daftar board, **DHT sensor library** *installed*, port ESP32 muncul.
3. Siswa meng-upload `P10_1_KedipPertama.ino` sendiri dan mengubah kecepatan kedip LED biru lewat 2 angka.

## Persiapan H-1
- [ ] Jalankan `SCRIPT_P10_SMA.gs`; cek folder **Kode** di Drive berisi `P10_1_KedipPertama`, `C3_P10_Hard_PesanMorse` (masing-masing 1 file `.ino`) + `BACA_DULU.txt`. Link Linktree "Kode P10" & "Post Test Pertemuan 10" aktif.
- [ ] **Flashdisk "Bengkel IoT"** (2–3 buah): installer Arduino IDE 2.3.10 (Windows `.exe`, Mac `arm64.dmg` & `64bit.dmg`), driver CP210x & CH340 (Windows & Mac), 3 PDF Panduan Instalasi.
- [ ] **Hindari unduhan ±2 GB di kelas** (cara cepat, opsional): setelah Arduino IDE terpasang di laptop siswa, salin folder `Arduino15` dari laptop cadangan yang sudah lulus 3 level (Windows `C:\Users\<nama>\AppData\Local\Arduino15`, Mac `~/Library/Arduino15`, **sesama OS**). Board ESP32 langsung terpasang (library DHT tetap lewat Level 3, ukurannya kecil; library ada di `Documents/Arduino/libraries`, bukan di `Arduino15`). **Uji dulu di 1 laptop H-1.** Tidak sempat? Putuskan sejak awal semua memilih board versi **2.0.17** (±0,8 GB).
- [ ] 1–2 **laptop cadangan** yang sudah lulus 3 level dan pernah upload `P10_1_KedipPertama`.
- [ ] Data laptop siswa: OS, 64-bit?, sisa disk ≥ 9 GB, password admin/Mac. Laptop 32-bit/Chromebook → berpasangan dengan teman atau pakai laptop cadangan.
- [ ] Tiap ESP32: tempel **stiker Device ID** (`sma-01` … `sma-06`, dipakai mulai P11). Upload `P10_1_KedipPertama` → LED biru GPIO 2 harus kedip (klon tanpa LED biru → ganti papan).
- [ ] Kabel USB **data** per siswa, diberi selotip "DATA". 1 power bank untuk demo slide 19.
- [ ] **Alat demo jadi**: rakitan DHT22 + relay + kipas dengan firmware proyek, dashboard tutor siap di proyektor, PIN fan siap. Ini "wow moment" slide 8.
- [ ] 6 foto benda untuk game slide 13 (rice cooker biasa, smart TV, palang parkir otomatis, kalkulator, timbangan Bluetooth, pompa air otomatis). Sticky note hijau & merah.

## 15 menit sebelum kelas
- Minta siswa menyalakan laptop dulu (booting & update Windows bisa lama).
- Tulis di papan: alamat board `https://espressif.github.io/arduino-esp32/package_esp32_index.json` dan tabel **Level 1 · Level 2 · Level 3 · Kedip** per Device ID untuk dicentang.
- Proyektor menampilkan slide P10; Arduino IDE terbuka di laptop tutor untuk diperagakan.
- Siapkan lembar/spreadsheet poin (nama, +2, Easy, Medium, Hard).

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–5 | 1–5 | Cover, pemantik, agenda, cara dapat poin | Tampung 2–3 tebakan (+2), jangan dijawab dulu |
| 5–15 | 6–9 | IoT, kenalan ESP32, **demo alat jadi**, Tanya Jawab | Edarkan ESP32; minta siswa menunjuk antena & tombol BOOT |
| 15–25 | 10–12 | **Level 1** Arduino IDE, **Level 2** mulai unduh board | Peragakan di proyektor, tunggu ±80% hijau baru lanjut |
| 25–35 | 13 | Game Tebak Benda IoT | Selama unduhan berjalan. +2 tiap jawaban |
| 35–45 | 14–16 | **Level 3** library DHT, cek port, Tanya Jawab | Port tidak muncul → kabel DATA dulu, baru driver |
| 45–52 | 17–20 | Upload Kedip Pertama, utak-atik angka, demo power bank, Tanya Jawab | **Tukar peran** Operator ↔ Pengecek |
| 52–62 | 21–23 | 🟢 Easy, 🟡 Medium, 🔴 Hard | Yang selesai duluan langsung lanjut, jangan ditahan |
| 62–64 | 24 | Peta petualangan | Teaser P11: rakit alat + data ke dashboard |
| 64–70 | 25–26 | Post-test + penutup | Catat laptop yang belum lulus 3 level |

Waktu molor? Urutan yang boleh dipangkas: (1) Hard, (2) Medium, (3) game dipersingkat. **Jangan** pangkas Level 1–3: itu syarat P11. Laptop yang belum lulus dikerjakan di 15 menit awal P11, **bukan PR**.

## Kalimat kunci
- "ESP32 itu otak. Sensor itu indra. Internet itu mulutnya buat ngobrol."
- "Arduino IDE dari pabrik cuma kenal papan Arduino. ESP32 buatan Espressif, jadi kita pasang 'kamus'-nya dulu."
- "Kalian nggak disuruh nulis kode dari nol. Engineer beneran juga mulai dari kode jadi, lalu diutak-atik."
- "Upload itu memindahkan program ke otak ESP32. Laptop dicabut pun, programnya tetap jalan."

## Cara memandu instalasi
- **Sistem lampu**: sticky note **hijau** = level selesai, **merah** = butuh bantuan. Tutor hanya mendatangi yang merah; tidak perlu siswa berteriak.
- **Satu langkah, satu layar**: tutor klik di proyektor, tunggu mayoritas hijau, baru lanjut. Jangan menjelaskan 3 langkah sekaligus.
- **Asisten muda**: siswa yang hijau duluan membantu teman dengan **bertanya**, bukan mengambil alih mouse. Bantuan yang berhasil boleh dihitung +2.
- **Error = materi**: error menarik (port tidak muncul, `Failed to connect`) tampilkan di proyektor, tanya kelas "Menurut kalian kenapa?" (+2).
- **Waktu menunggu = waktu main**: jangan biarkan siswa menatap progress bar; jalankan game slide 13.

## Manajemen kelas (usia 15–18)
- **Berdua (sma-04/05/06):** Operator memegang mouse, Pengecek membacakan langkah dari slide & memasang sticky note. Tukar di Topik 3. Yang diam ditanya langsung: "Coba kamu yang tunjuk tombol Upload."
- **Individu (sma-01/02/03):** baca langkah pelan-pelan; tetangga boleh jadi Pengecek.
- Remaja cepat bosan menunggu. Yang sudah hijau langsung lanjut ke level berikut atau challenge.
- HP boleh untuk foto/stopwatch, bukan media sosial selama praktik.

## Titik cek pemahaman
| Kapan | Tanya / minta tunjukkan | Jawaban yang dicari |
|---|---|---|
| Setelah slide 7 | "Tunjukkan antena WiFi dan tombol BOOT." | Garis zig-zag; tombol bertulisan BOOT |
| Setelah Level 2 | "Kenapa harus pasang board ESP32 dulu?" | Arduino IDE belum kenal ESP32 (kamus) |
| Setelah upload | "Angka berapa yang membuat LED nyala 1 detik?" | 1000 |
| Slide 20 | "Kenapa LED kelihatan nyala terus?" | Kedipnya terlalu cepat untuk mata |

## Kesalahan umum & cara membimbing (jangan langsung beri jawaban)
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| Memilih "Arduino ESP32 Boards" | "Di slide, board-nya buatan siapa? Espressif atau Arduino?" |
| Port tidak muncul | "LED merah nyala berarti listrik masuk. Data lewat apa?" |
| Upload ke port Bluetooth (COM3/COM4) | "Cabut ESP32. Port mana yang hilang dari daftar?" |
| `lamaNyala = 2.000` / tanda kutip terhapus | "Bandingkan barismu dengan baris di slide. Ada tanda yang beda?" |
| Pesan Serial (Medium) tidak terlihat | "Pesan itu ditulis kapan? Tombol apa yang membuat ESP32 mulai dari awal?" (EN) |
| Morse terlalu cepat ditebak | "Angka mana yang mengatur lama satu titik?" |

Kalau setelah **2 pertanyaan** siswa masih buntu, tunjukkan **lokasinya** ("cek baris ke-7"), bukan perbaikannya.

## Troubleshooting cepat (tutor)
| Gejala | Penyebab | Tindakan |
|---|---|---|
| Installer Windows diblokir "Windows protected your PC" | SmartScreen | More info → Run anyway (hanya file dari arduino.cc/flashdisk tutor) |
| Mac: "cannot be opened… developer cannot be verified" | Gatekeeper | System Settings → Privacy & Security → Open Anyway |
| Aplikasi Mac tidak mau terbuka | Salah file Apple Silicon/Intel | Hapus, pasang file yang cocok |
| Unduhan board putus / `Error downloading` | Internet | Klik INSTALL lagi (tidak mulai dari nol) atau pilih versi 2.0.17 |
| "ESP32 Dev Module" tidak ada | Board belum terpasang | Ulangi Level 2 |
| Port tidak muncul | Kabel charger / driver CP210x/CH340 | Kabel DATA → port USB lain → driver dari flashdisk |
| `Connecting......` → `Failed to connect` | ESP32 tidak masuk mode upload | Tahan BOOT saat Connecting, lepas saat `Writing at` |
| Gagal di tengah upload / timed out | Kecepatan upload | Tools → Upload Speed → **115200** |
| `Multiple libraries were found for "WiFi.h"` | Library "WiFi" terpasang | Library Manager → WiFi → REMOVE |
| Huruf acak `⸮⸮⸮` di Serial Monitor | Baud salah | Pilih 115200 |
| Upload sukses, LED biru diam | Papan tanpa LED GPIO 2 | Ganti papan; sementara cek tulisan Nyala/Mati di Serial Monitor |
| Laptop tetap gagal > 10 menit | Disk penuh / 32-bit / izin admin | Pindah ke laptop cadangan atau berpasangan; catat untuk P11 |

## Diferensiasi
- **Cepat selesai:** jadi asisten muda; coba `lamaNyala = 5`, `lamaMati = 45` dan jelaskan kenapa LED terlihat lebih redup; kerjakan Hard dengan kata lebih panjang.
- **Kesulitan:** fokus lulus 3 level + Kedip Pertama (syarat P11). Medium & Hard boleh dilewati.
- **Sangat tertarik teori:** ceritakan bahwa lampu LED diredupkan dengan kedip super cepat (PWM), dan bahwa ESP32 punya 2 inti prosesor.

## Penilaian
- **Wajib (syarat P11):** lulus Level 1–3 + Kedip Pertama ter-upload. Catat per Device ID di tabel papan.
- **Keaktifan:** +2 setiap bertanya/menjawab (pemantik, Tanya Jawab, game).
- **Challenge:** Easy **+5**, Medium **+10**, Hard **+15** (pasangan: untuk kedua anggota). Kunci di KHUSUS TUTOR Materi Ajar.
- **Post-test:** 5 soal Google Form, kunci **B, C, D, A, B**.

## Penutup
- Tidak ada PR. Laptop yang belum lulus 3 level dicatat tutor dan diselesaikan di 15 menit awal P11.
- Pengumuman P11: rakit DHT22 + relay + kipas dan kirim datanya ke dashboard kelompok. Bawa laptop yang sama.
- Setelah kelas (tutor): kumpulkan ESP32 ber-stiker; jalankan `py tools/kelompok.py paket` untuk zip P11; siapkan kit rakitan (DHT22, relay, kipas DC 5V, breadboard, jumper) per Device ID.
