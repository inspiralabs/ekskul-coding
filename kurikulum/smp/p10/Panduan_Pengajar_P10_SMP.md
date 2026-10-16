# Panduan Pengajar — P10 SMP: Upload Program Jadi & Rakit Sensor DHT22

Jum'at, 23 Oktober 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide di panduan ini = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P10_SMP_InspiraLabs.md`.

> Prinsip hari ini: siswa **tidak menulis kode**. Mereka menyalin program jadi, menekan Upload, dan merakit. Satu-satunya perubahan kode adalah **satu angka** di Challenge Medium.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Meng-upload `P10_1_Blink.cpp` sendiri dan menunjukkan LED breadboard berkedip **bareng** lampu biru board.
2. Merakit DHT22 (+ → 3V3, out → D4, − → GND) dan menunjukkan angka suhu di Serial Monitor yang **naik saat ditiup/digenggam**.
3. Bisa menjawab: "Kalau lampu biru kedip tapi LED diam, salahnya di mana?" (jawaban: rakitan).

## 2. Persiapan

### H-1
- [ ] Jalankan `SCRIPT_P10_SMP.gs` → folder **Kode** ada di Drive, link di Linktree.
- [ ] Di **setiap laptop**: buat proyek PlatformIO (ESP32 Dev Module, Arduino), tempel `platformio.ini` dari folder Kode, salin Blink ke `src/main.cpp`, lalu **Build sekali**. Build pertama bisa 5–15 menit (download), jangan sampai terjadi di kelas.
- [ ] **Upload tes** Blink ke satu board cadangan → pastikan driver CP210x/CH340 terpasang di tiap laptop (port muncul).
- [ ] Siapkan 2–3 **kabel USB data cadangan**. Tandai kabel data dengan selotip warna supaya tidak tertukar dengan kabel charger.
- [ ] Siapkan rakitan "rusak" untuk Challenge Hard (3 kesalahan **aman**: out di D5, out di baris breadboard yang beda, kabel − setengah masuk/jumper putus). **Jangan** menukar + dan −.
- [ ] Charge power bank (dipakai mulai P12, tapi bagus untuk demo "program tetap tersimpan").

### 15 menit sebelum kelas
- [ ] Nyalakan proyektor, buka slide.
- [ ] Bagikan kit per meja (lihat daftar di bawah) dan hitung isinya.
- [ ] Siapkan multimeter: mode DC volt 20V.
- [ ] Tulis di papan: "Cabut USB sebelum memindah kabel!"

### Isi kit per kelompok/individu
ESP32 + kabel USB data · breadboard dengan rakitan LED P9 (LED + resistor **220Ω**) · DHT22 · 3 jumper (merah, kuning, hitam) + 2 cadangan · kertas & pensil untuk Pencatat.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1 | Pembuka | Bagikan kit, minta siswa menyalakan laptop & membuka VS Code |
| 5–8 | 2–5 | Cover, pemantik, agenda, peran | Tampung 2–3 tebakan pemantik. Tunjuk peran per kelompok |
| 8–14 | 6–8 | Misteri D2, upload, 4 langkah | Tunjukkan ikon Upload (→) & Serial Monitor (colokan) di layar |
| 14–28 | 9 | Praktek Upload Blink | Keliling. Kelompok berhasil → tepuk tangan kecil |
| 28–31 | 10–11 | Tips upload gagal + forum | Bahas jawaban pemantik (kabel data vs charger) |
| 31–36 | 12 | 🟢 Easy (wajib) | Cek tiap kelompok, beri +10 |
| 36–41 | 13 | 🟡 Medium | Lewati kalau sudah molor. Pastikan kembali ke D2 & angka 2 |
| 41–45 | 14–16 | DHT22, cara rakit, cek 5 detik | **Ganti peran** di sini |
| 45–55 | 17 | Praktek rakit & cek sensor | Pengecek wajib membacakan checklist sebelum colok USB |
| 55–57 | 18 | Forum | |
| 57–62 | 19 | 🔴 Hard | Untuk yang sudah berhasil. Yang belum: selesaikan rakitan |
| 62–63 | 20–21 | Peta + Tugas 3 | Ingatkan: jangan bongkar rakitan, foto dulu kalau terpaksa |
| 63–70 | 22–23 | Post-test | Sendiri-sendiri, HP/laptop. Tutup dengan info P11 |

## 4. Kalimat kunci (boleh dibacakan)

- **Pembuka:** "Minggu lalu LED kita nyala dari 3V3, tapi mati di D2. Hari ini kita kasih ESP32 'aplikasi' pertamanya, dan dia yang menyalakan lampunya."
- **Listrik vs program:** "Tanpa coding itu artinya tanpa program, bukan tanpa listrik. ESP32 selalu butuh kabel USB, dari laptop atau power bank."
- **Upload:** "Upload itu seperti memasang aplikasi ke HP. Laptop tokonya, kabel USB jalannya."
- **Serial Monitor:** "Ini kotak chat ESP32. Dia akan bilang 'LED nyala', 'LED mati'."
- **Sebelum merakit:** "Tangan siapa yang pegang kabel? Perakit. Siapa yang bilang boleh colok USB? Pengecek, setelah checklist selesai."
- **Saat berhasil:** "Lampu biru dan LED kedip bareng? Itu bukti programmu jalan. Kalian baru saja memprogram mikrokontroler!"

## 5. Mengelola kelas 12–15 tahun

- **Perhatian pendek (±10 menit):** jangan bicara lebih dari 5–6 menit tanpa praktek. Timeline sudah dipecah: materi singkat → langsung praktek.
- **Sinyal diam:** sepakati satu sinyal (mis. tutor angkat tangan → semua angkat tangan & lepas kabel/mouse). Pakai sebelum memberi instruksi baru.
- **Peran berputar** (slide 5): Perakit, Pengecek, Operator, Pencatat. Ganti di menit 41. Kelompok berdua: tiap orang 2 peran. Kelompok berempat: awasi supaya tidak ada yang hanya menonton; beri tugas ke yang menganggur ("kamu Pengecek, bacakan checklist ke Perakit").
- **Peserta individu** (`smp-01`–`smp-05`): mereka pegang semua peran. Pasangkan dua individu yang duduk berdekatan sebagai **"teman cek"**: saling membacakan checklist sebelum colok USB. Alat & nilai tetap milik masing-masing.
- **Anak yang memonopoli laptop:** "Operator sekarang si A. Kamu jadi Pengecek dulu, nanti gantian di Topik 2."
- **Quick win** tiap ±10 menit: LED kedip pertama, Easy lulus, angka suhu pertama, tiup sensor. Rayakan dengan menyebut nama kelompok keras-keras.

## 6. Titik cek pemahaman

- Setelah slide 8: "Sebutkan 4 langkah upload, mulai dari kelompok paling belakang." (salin → upload → serial monitor → lihat alat)
- Setelah slide 10: **jempol**: "Jempol atas kalau lampu biru dan LED kalian kedip bareng." Yang jempol bawah → datangi duluan.
- Setelah slide 16: "Kaki out ke mana?" (semua menjawab bersama: D4). "+ ke mana?" (3V3).
- Sebelum post-test: "Lampu biru kedip, LED diam. Salah program atau rakitan?" (rakitan).

## 7. Kesalahan yang sering terjadi & cara membantu

Bantu dengan **pertanyaan**, bukan langsung memperbaiki. Biarkan Perakit yang memegang kabel.

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Lupa cabut USB saat memindah kabel | "Apa yang ada di papan tulis? Sudah dilakukan?" |
| LED terbalik / dua kaki LED satu baris | "Kaki panjang LED harus ke mana? Coba ikuti jalan listriknya dari D2 sampai GND." |
| Kabel di D2 tertukar dengan pin sebelah (D15/D4) | "Baca tulisan kecil di sebelah pinnya. Apa tulisannya?" |
| Menyalin program tidak utuh (sebagian kode hilang) | "Baris paling atas dan paling bawah programmu sama dengan file aslinya?" |
| Membuka Serial Monitor saat upload → gagal | "Lihat pesan merahnya. Ada kata 'busy' atau 'denied'? Apa yang sedang terbuka?" |
| DHT22 dipasang sesuai urutan modul lain | "Tulisan di modul kalian urutannya apa? Baca dari kiri." |
| `Gagal baca sensor` | "Kabel kuning sekarang di pin apa? Program menunggu di pin berapa?" |

## 8. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| Port tidak muncul | Kabel charger / driver | Ganti kabel data bertanda. Masih tidak? Cek driver di Device Manager |
| `Failed to connect to ESP32` | Board belum masuk mode upload | Tahan **BOOT** saat `Connecting....`, lepas saat persen muncul |
| `Access denied` / port sibuk | Serial Monitor masih terbuka | Tutup Serial Monitor (ikon tempat sampah di terminal), upload lagi |
| Tulisan acak `⸮⸮⸮` | Kecepatan berbeda | Cek `monitor_speed = 115200` di `platformio.ini` |
| Serial Monitor kosong | Pesan awal terlewat | Tekan tombol **EN** di board |
| Build lama sekali | Build pertama di laptop itu | Biarkan jalan; kelompok itu ikut lihat layar kelompok sebelah dulu |
| Lampu biru kedip, LED diam | Rakitan LED | LED terbalik / satu baris / kabel bukan di D2 |
| `Gagal baca sensor! Cek kabel.` | Kabel out / longgar / + − tertukar | Cabut USB, cek dengan checklist slide 16 |
| Sensor terasa hangat/panas | + dan − tertukar | **Cabut USB segera**, tukar kabelnya, tunggu dingin |
| Angka tidak berubah saat ditiup | Normal, sensor lambat | Tiup lebih lama (5 detik), tunggu 2–4 detik |

## 9. Keselamatan

- Semua tegangan di kit ini rendah (3,3V–5V dari USB): **aman disentuh**. Tidak ada listrik PLN di meja.
- Aturan nomor satu: **cabut USB sebelum memindah kabel**.
- + dan − DHT22 tertukar → sensor panas. Ajarkan: "Kalau terasa hangat, cabut dulu, tanya kemudian."
- Jangan taruh board di atas benda logam (gunting, penggaris besi, kaleng): bisa korsleting.
- Minuman jauh dari meja rakitan.

## 10. Diferensiasi

- **Siswa cepat:** Challenge Medium dan Hard; lalu tantangan bonus: "Tanpa melihat slide, jelaskan ke kelompok sebelah kenapa lampu biru ikut kedip." atau jadi "asisten tutor" yang membantu kelompok lain **dengan pertanyaan**, bukan mengambil alih.
- **Siswa kesulitan:** pecah jadi langkah satu per satu. Tunjuk satu kabel: "Pasang yang merah dulu. Sudah? Sekarang kuning." Boleh melihat rakitan kelompok yang sudah berhasil. Target minimum: Blink jalan + angka suhu muncul; Medium/Hard boleh dilewati.

## 11. Penilaian

- **Challenge:** +10 per challenge yang lulus (per kelompok/individu) di leaderboard. Easy wajib; Medium & Hard opsional.
  - Easy lulus = LED kedip bareng lampu biru tanpa melihat slide.
  - Medium lulus = LED kedip di D18, bisa menjelaskan kenapa lampu biru diam, **sudah dikembalikan** ke D2/angka 2.
  - Hard lulus = 3 kesalahan ditulis benar + angka suhu muncul tanpa mengubah program.
- **Post-test:** 5 soal, individu (Google Form otomatis menilai). Kunci: 1B 2A 3C 4C 5B.
- **Tugas 3:** gambar rakitan, dikumpulkan di P11.

## 12. Penutup & PR

- "Rakitan jangan dibongkar. Kalau harus, **foto dulu**."
- PR: **Tugas 3** — gambar rakitan (LED di D2 + DHT22) dengan tangan, beri warna kabel & nama pin, foto, kumpulkan di P11.
- Teaser P11: "Minggu depan alat kalian mengirim suhu ke internet. Kalian jadi dokter kabel."
- Setelah kelas: catat kelompok yang belum berhasil (Blink atau sensor) → datangi duluan di awal P11.
