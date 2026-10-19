# Panduan Pengajar — P10 SMA: Merakit Smart Room Monitor (DHT22, Relay & Kipas)

Sabtu, 17 Oktober 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P10, `sumber/Materi_Ajar_P10_SMA_InspiraLabs.md` (kunci di bagian KHUSUS TUTOR), folder Kode di Drive, simulasi `wokwi/P10_PetaRakitan/`.

## Tujuan (yang bisa dilihat di akhir kelas)
1. Setiap kelompok punya **satu rakitan utuh** (DHT22 di D13, relay IN di D14, kipas di NO) yang lolos Tes 1 (relay klik tiap 2 detik, kipas ikut) dan Tes 2 (suhu & kelembapan tampil di Serial Monitor).
2. Siswa bisa **menunjukkan dengan multimeter** bahwa pin IN ±0 V saat relay aktif dan ±3,3 V saat mati (active-LOW).
3. Siswa bisa **menebak bagian yang rusak dari gejala** memakai tabel troubleshooting, sebelum membongkar kabel.

## Persiapan H-1
- [ ] Jalankan `SCRIPT_P10_SMA.gs`; cek folder **Kode** di Drive berisi folder `P10_1_TesRelay`, `P10_2_TesDHT22`, `C1_...`, `C2_...` (masing-masing 1 file `.ino`) + `BACA_DULU.txt`. Link Linktree "Kode P10" & "Post Test Pertemuan 10" aktif.
- [ ] Di **tiap laptop**: pasang **Arduino IDE 2**, board **esp32 by Espressif Systems**, library **DHT sensor library** (ikuti 3 Panduan Instalasi di `kurikulum/panduan-instalasi/`, ada versi Windows & Mac). Lalu buka `P10_2_TesDHT22.ino` → **Verify (✓)** sekali (compile pertama 2–5 menit). Unduhan board ESP32 ±2 GB (butuh ruang kosong ±9 GB): **jangan dilakukan di kelas**.
- [ ] Per kelompok (6 set): ESP32 + kabel USB **data**, breadboard, DHT22 3-pin, relay 1-channel 5V, kipas DC 5V, jumper merah/hitam/kuning/biru/oranye (male-male & male-female), obeng kecil.
- [ ] **Uji setiap relay** dengan Tes 1: klik tiap 2 detik dan **benar-benar mati** saat IN = HIGH. Relay yang tidak mau mati: ganti modul (lihat Khusus Tutor P9 "relay 5V + logika 3,3V"). Tempel stiker "OK" di modul yang lolos.
- [ ] Cek polaritas kipas (kabel merah = +). Kipas yang berputar terbalik/lemah → ganti.
- [ ] Cadangan: 1 ESP32 yang sudah berisi Tes 1 (board penguji), 1 relay, 1 DHT22, 2 kabel USB data, 1 power bank.
- [ ] Multimeter minimal 1 (ideal 2–3), baterai dicek, mode DC V & continuity (bunyi) berfungsi.
- [ ] **Wokwi**: buka wokwi.com → New Project → ESP32, tempel `sketch.ino`, `diagram.json`, `libraries.txt` dari `wokwi/P10_PetaRakitan/`, Save, salin link. Ambil screenshot untuk slide Peta Rakitan kalau diagram Gemini tidak akurat. Link dipakai juga sebagai cadangan kit rusak.
- [ ] Cek halaman **Kartu Sabotase** `ekskulcoding.inspiralabs.id/sabotase/` bisa dibuka di HP (cara main: lihat bagian *Cara main Kartu Sabotase* di bawah).

## 15 menit sebelum kelas
- Kit dibagi per meja. Duduk berdekatan: **sma-01 ↔ sma-02**, **sma-03 ↔ sma-04**, **sma-05 ↔ sma-06** (jadi "tetangga" untuk cek silang & pasangan sabotase).
- Proyektor + kamera HP/document camera untuk demo multimeter.
- Slide P10 terbuka, link Wokwi siap di tab browser.
- Tidak ada stopkontak/kabel PLN di meja praktik selain charger laptop.

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–3 | — | Kumpulkan Tugas 3, umumkan peran | Berdua: Perakit & Penguji. Individu: tetangga jadi penguji |
| 3–7 | 2–4 | Cover, pemantik, agenda | Tampung 2–3 tebakan, jangan dijawab |
| 7–12 | 5–8 | Rakitan utuh, Peta Rakitan, Urutan Aman, Cara Upload | Tekankan **kenapa** 3V3 vs 5V dan NO |
| 12–27 | 7–9 | Rakit daya + relay + kipas, upload Tes 1 | Keliling. Jangan colok USB sebelum Penguji selesai mencentang |
| 27–31 | 10–11 | Active-LOW + multimeter (demo), forum Topik 1 | Demo di kamera: probe hitam GND, merah IN |
| 31–35 | 12 | Easy: Pindah Pin Relay | Pastikan semua **kembali ke D14** |
| 35–44 | 13–15 | Rakit DHT22, Tes 2, Membaca Serial, forum Topik 2 | Tukar peran Perakit ↔ Penguji |
| 44–50 | 16 | Medium: Termostat Tangan | Sambil siswa mengerjakan, buka halaman Kartu Sabotase |
| 50–53 | 17–19 | Troubleshooting, 3 pengukuran, forum Topik 3 | Hubungkan ke pertanyaan pemantik |
| 53–61 | 20 | Hard: Detektif Kabel | Pasangan sabotase = tetangga |
| 61–63 | 21 | Peta proyek + foto rakitan | Foto dipakai lagi di P13 |
| 63–70 | 22–23 | Post-test + penutup | Rakitan **tidak** dibongkar |

Waktu molor? Urutan yang boleh dipangkas: (1) Hard jadi 1 kartu saja, (2) Easy dijadikan demo tutor. **Jangan** pangkas Tes 1 & Tes 2: itu syarat P11.

## Kalimat kunci
- "Program tes ini **alat ukur**, bukan PR coding. Kalian cukup upload dan **membandingkan** laporan Serial dengan yang terjadi di meja."
- "DHT22 di 3V3 karena sinyal datanya ikut tegangan dayanya. GPIO ESP32 hanya tahan 3,3V."
- "Kipas di NO: kalau ESP32 mati, kipas ikut mati. Itu namanya fail-safe; di industri, mesin harus berhenti saat pengendalinya mati."
- "Active-LOW: relay aktif saat IN = **LOW**. Jangan percaya kata saya, **ukur**."
- "Engineer tidak menebak. **Ukur dulu, baru bongkar.**"

## Manajemen kelas (usia 15–18)
- **Berdua (sma-04/05/06):** Perakit memegang kabel; Penguji membaca tabel Peta Rakitan keras-keras, mencentang, memegang multimeter & Serial Monitor. **Tukar di Topik 2.** Kalau satu orang mendominasi, tanya langsung ke yang diam: "Coba kamu yang jelaskan kenapa kabel ini di NO."
- **Individu (sma-01/02/03):** baca checklist keras-keras. Tetangga menjadi Penguji 1 menit sebelum colok USB, lalu gantian.
- Remaja cepat bosan kalau menunggu. Kelompok yang sudah lolos Tes 1 langsung ke Easy; jangan ditahan menunggu yang lain.
- Hargai "gagal yang terukur": kelompok yang menemukan kesalahan sendiri lewat tabel/multimeter dipuji di depan kelas, bukan hanya yang paling cepat.
- HP boleh dipakai untuk stopwatch & foto, bukan media sosial selama praktik.

## Titik cek pemahaman
| Kapan | Tanya / minta tunjukkan | Jawaban yang dicari |
|---|---|---|
| Sebelum colok USB pertama | "Tunjukkan kabel yang membuat kipas mati kalau ESP32 mati." | Kabel kipas + di **NO** |
| Setelah Tes 1 | "Kalau Serial menulis AKTIF, berapa volt pin IN?" | ±0 V |
| Setelah Tes 2 | "Kenapa sensornya tidak di VIN?" | Sinyal 5V merusak GPIO 3,3V |
| Medium | "Kenapa ada jeda 0,5°C?" | Mencegah relay cetak-cetek (histeresis) |
| Hard | "Apa yang sudah PASTI benar?" | Siswa memisahkan sisi kontrol vs sisi beban |

## Kesalahan umum & cara membimbing (jangan langsung beri jawaban)
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| USB masih tercolok saat memindah kabel | "Aturan nomor 1 di slide Urutan Aman apa?" |
| Relay diam, Serial tetap AKTIF/MATI | "Serial jalan berarti apa yang sudah beres? Lalu ikuti kabel biru: ujungnya di pin berapa?" |
| Relay klik, kipas diam | "Relay klik membuktikan sisi mana yang beres? Tinggal sisi mana? Ukur tegangan di kipas +." |
| Kipas terbalik (berputar saat MATI) | "Saat relay tidak aktif, COM tersambung ke terminal mana? Kabel kipasmu di mana?" |
| `Gagal baca DHT22` | "Pesan errornya menyebut 3 hal. Centang satu per satu." |
| Lupa mengembalikan D26 → D14 | "Peta Rakitan bilang IN di pin berapa? Firmware P11 akan memakai pin berapa?" |
| Huruf acak di Serial | "Angka di pojok Serial Monitor berapa? Program kita bicara di 115200." |

Kalau setelah **2 pertanyaan** kelompok masih buntu, tunjukkan **lokasi**-nya ("cek baris ke-3 tabel"), bukan perbaikannya.

## Troubleshooting cepat (tutor)
| Gejala | Penyebab | Tindakan |
|---|---|---|
| Port tidak muncul | Kabel USB khusus charger / driver CH340/CP210x belum ada | Ganti kabel data; pasang driver (Panduan Instalasi Board ESP32) |
| `Connecting.....` lama | ESP32 tidak masuk mode upload | Tahan BOOT saat "Connecting" |
| `DHT.h: No such file or directory` | Library DHT belum dipasang | Library Manager → `DHT sensor library` → INSTALL ALL |
| Compile pertama lama (2–5 menit) | Wajar untuk ESP32 di Arduino IDE | Tunggu; compile berikutnya cepat. Board ESP32 belum terpasang → pakai laptop cadangan |
| Upload gagal `Failed to connect` / `Wrong boot mode` | ESP32 tidak masuk mode upload, atau kabel nyasar ke D12 | Tahan BOOT saat `Connecting...`; cek D12 kosong; **Tools → Upload Speed → 115200** |
| Relay tidak mau mati | Modul 5V vs logika 3,3V | Tukar dengan modul ber-stiker "OK". Darurat (opsi P9: VCC relay ke 3V3) hanya dilakukan tutor dan dicatat |
| ESP32 restart saat kipas mulai | Brownout USB | Port USB lain / power bank / kabel pendek |
| Kipas berdetak berulang saat ESP32 dicolok | Relay di strapping pin | Kembalikan ke D14 (klik **sekali** saat boot masih wajar) |
| Rakitan tetap gagal > 5 menit | Komponen rusak | Uji dengan **board penguji** cadangan; masih gagal → kelompok pakai **Wokwi** (lihat di bawah) |

**Cadangan kit rusak:** kelompok membuka link Wokwi, mencocokkan kabel di layar dengan tabel Peta Rakitan, lalu mengerjakan Medium dengan klik DHT22 → geser suhu di atas 30°C → relay klik, LED biru (= kipas) menyala. Catat kit yang rusak, ganti sebelum P11.

## Cara main Kartu Sabotase (Challenge Hard "Detektif Kabel")
Halaman: `ekskulcoding.inspiralabs.id/sabotase/` (juga ada di halaman utama ekskul, kartu "🎴 Kartu Sabotase"). Tidak perlu menulis kartu.

1. **Pasangan:** sma-01 ↔ sma-02, sma-03 ↔ sma-04, sma-05 ↔ sma-06. Tiap kelompok menyabotase rakitan tetangganya.
2. **Ambil kartu:** penyabot membuka halaman di HP sendiri → pilih **SMA** → **🎴 Ambil Kartu**. Keluar 2 kartu yang mengubah 2 kabel berbeda.
3. **Pasang sabotase:** pemilik rakitan menghadap belakang. Penyabot **mencabut USB**, melakukan persis isi kedua kartu, lalu menekan **🙈 Tutup kartu**.
4. **Jadi detektif:** pemilik menyalakan alat, upload Tes 1 & Tes 2, mencatat gejala, mengukur dengan multimeter, lalu memperbaiki **tanpa membongkar semua kabel**.
5. **Laporan:** 3 baris per kabel: *gejala → pengukuran → perbaikan* (foto). Penyabot membuka kartunya lagi (atau tutor membuka bagian "Untuk tutor" di halaman) untuk mencocokkan.
6. **Nilai:** +10 kalau kedua kabel ditemukan dan laporannya benar. Yang dinilai cara berpikirnya, bukan kecepatan.

Kartu itu **rahasia hanya bagi pemilik rakitan**. Penyabot boleh tahu karena merekalah yang memasang.
Waktu mepet? Cukup 1 kartu, atau tutor yang menyabot saat Challenge Medium.
Aturan selalu tampil di halaman: cabut USB, jangan pindahkan kabel 3V3/VIN/GND, hanya lakukan isi kartu.

## Keselamatan (tidak bisa ditawar)
- **Hanya kipas DC 5V.** Tidak ada perangkat 220V/PLN, walaupun relay tertulis 250VAC.
- **Cabut USB** setiap memindah kabel, termasuk saat sabotase.
- Sabotase **hanya dari kartu**; 3V3/VIN/GND tidak boleh disilangkan (korsleting).
- Jari & rambut jauh dari baling-baling. Bau/panas → cabut USB, panggil tutor.
- Jangan menaruh ESP32 di atas benda logam (kaki pin bisa terhubung).

## Diferensiasi
- **Cepat selesai:** jadi "asisten" untuk tetangga (bertanya, bukan membetulkan); ukur VIN dan 3V3 dan jelaskan kenapa VIN ±4,7 V, bukan 5,0 V; kerjakan Hard 2 kartu tambahan.
- **Kesulitan:** fokus Tes 1 + Tes 2 saja (syarat P11). Easy boleh dilewati. Duduk dekat tutor, tutor menjadi Penguji.
- **Sangat tertarik teori:** tunjukkan optocoupler/transistor di modul relay, ajak menebak kenapa relay perlu dioda.

## Penilaian
- **Wajib (syarat P11):** Tes 1 lolos + Tes 2 lolos + rakitan sesuai Peta Rakitan (cek dengan foto). Catat per Device ID.
- **Challenge:** Easy/Medium/Hard masing-masing **+10** leaderboard. Hard dinilai dari laporan *gejala → pengukuran → perbaikan* (foto), bukan kecepatan.
- **Post-test:** 5 soal, kunci di Khusus Tutor (B, A, C, B, A).

## Penutup & PR
- Foto rakitan yang lolos 2 tes (dipakai lagi di P13 sebagai foto "sebelum").
- **Rakitan jangan dibongkar**; simpan dalam kotak, kabel tetap tertancap.
- Pengumuman P11: firmware proyek + data tampil di dashboard. Minta peserta membawa laptop yang sama (sudah ada Arduino IDE + board ESP32 + library DHT).
- Setelah kelas (tutor): catat kit rusak, cek semua relay kembali di D14 dan DHT22 di D13, jalankan `py tools/kelompok.py paket` untuk zip P11.
