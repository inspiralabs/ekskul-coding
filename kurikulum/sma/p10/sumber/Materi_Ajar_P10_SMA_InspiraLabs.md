# SMA — Pertemuan 10: Merakit Smart Room Monitor: DHT22, Relay & Kipas

| Info | Isi |
|---|---|
| Tanggal | Sabtu, 17 Oktober 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu merakit sensor DHT22 + relay + kipas ke ESP32 dengan benar dan mengujinya memakai program tes jadi |
| Penilaian | Hasil praktek: rakitan lengkap lolos 2 program tes (relay berdetak & DHT22 terbaca) |
| Kaitan dengan proyek akhir | Rakitan hari ini **sama persis** dengan yang dipakai firmware `sma/firmware/sma_room_monitor.ino`: `#define DHT_PIN 4` dan `#define RELAY_PIN 18`, relay **active-LOW**. Kalau rakitan lolos tes hari ini, firmware proyek di P11 tinggal di-upload. |

## Alat & bahan (per kelompok)

- ESP32 DevKit V1 30-pin + kabel USB **data** (bukan kabel yang hanya untuk charger)
- Breadboard + kabel jumper male-male & male-female (merah, hitam, kuning, biru, oranye)
- Modul DHT22 3-pin (+, out, −)
- Modul relay 1-channel 5V active-LOW (VCC, GND, IN | COM, NO, NC) + obeng kecil
- **Kipas mini DC 5V** (bukan kipas listrik PLN 220V)
- Laptop dengan VS Code + PlatformIO, folder **Kode** pertemuan ini: `P10_1_TesRelay.cpp`, `P10_2_TesDHT22.cpp`, `C1_P10_*.cpp`, `C2_P10_*.cpp`
- Multimeter (minimal 1 per kelas)

## Persiapan tutor sebelum kelas

Detail lengkap (H-1, 15 menit sebelum, timeline, troubleshooting): `kurikulum/sma/p10/Panduan_Pengajar_P10_SMA.md`.

1. Jalankan `SCRIPT_P10_SMA.gs` supaya folder **Kode** (berisi `platformio.ini` + semua file `.cpp`) ada di Drive.
2. **Build sekali** di tiap laptop sebelum kelas (PlatformIO mengunduh platform ESP32 & library DHT, bisa 5–10 menit).
3. Uji **setiap** modul relay dengan Tes 1. Pastikan relay **benar-benar mati** saat IN = HIGH (lihat "relay 5V + logika 3,3V" di Khusus Tutor P9).
4. Siapkan simulasi Wokwi `kurikulum/sma/p10/wokwi/P10_PetaRakitan/` (simpan di akun Wokwi, salin link-nya): untuk screenshot slide Peta Rakitan dan cadangan kalau ada kit rusak.
5. Cetak/tulis **Kartu Sabotase** untuk Challenge Hard (lihat Khusus Tutor).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–3 | Pembuka | Kumpulkan Tugas 3, bagi peran (Perakit & Penguji) |
| 3–7 | Pembuka materi | Cover + pertanyaan pemantik |
| 7–12 | Materi | Peta rakitan lengkap + urutan merakit aman |
| 12–27 | Praktek | Rakit daya + relay + kipas, upload **Tes 1: Relay Berdetak** |
| 27–31 | Materi | Active-LOW dilihat dengan mata & multimeter, forum |
| 31–35 | 🟢 Challenge Easy | Pindah Pin Relay |
| 35–44 | Praktek | Rakit DHT22, upload **Tes 2: Baca DHT22**, membaca Serial Monitor, forum |
| 44–50 | 🟡 Challenge Medium | Termostat Tangan |
| 50–53 | Materi | Tabel troubleshooting + 3 pengukuran multimeter, forum |
| 53–61 | 🔴 Challenge Hard | Detektif Kabel |
| 61–63 | Peta proyek | Slide peta proyek akhir + foto rakitan |
| 63–70 | Post-test | 5 soal pilihan ganda (Google Form) |

**Peran.** Berdua: **Perakit** (pegang kabel) & **Penguji** (baca tabel Peta Rakitan, centang, pegang multimeter & Serial Monitor); **tukar peran** di Topik 2. Sendiri: baca checklist **keras-keras** saat mencentang, minta tetangga/tutor ikut cek sebelum colok USB.

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Dari Rakitan Lepas ke Rakitan Utuh → Peta Rakitan Lengkap → Urutan Merakit yang Aman → Cara Upload Program Tes Jadi → Tes 1: Relay Berdetak → Active-LOW: Lihat dengan Mata & Multimeter → 💬 Forum Diskusi → 🟢 Easy → Tes 2: Baca DHT22 → Membaca Serial Monitor → 💬 Forum Diskusi → 🟡 Medium → Troubleshooting Rakitan → Tips Engineer: 3 Pengukuran Multimeter → 💬 Forum Diskusi → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

---

## Slide

### Slide 1 — Dari Rakitan Lepas ke Rakitan Utuh 🔧
- P9: DHT22 dan relay dirakit **terpisah**, relay dinyalakan dengan **jumper tangan** (IN → GND).
- Hari ini: semua komponen dirakit jadi **satu alat utuh**, lalu diuji dengan **2 program tes jadi**.
- Program tes = **alat ukur**, seperti *factory test* di pabrik sebelum produk dikirim. Cukup **buka file → Upload → amati**.
- Berdua: **Perakit** & **Penguji**, tukar di Topik 2. Sendiri: baca checklist keras-keras.
- Rakitan ini = rakitan **final** proyek akhir. Jangan dibongkar setelah kelas.

### Slide 2 — Peta Rakitan Lengkap 🗺️
| Dari (ESP32) | Ke | Warna kabel |
|---|---|---|
| 3V3 | DHT22 **+** | Merah |
| D4 (GPIO 4) | DHT22 **out** | Kuning |
| GND | DHT22 **−** | Hitam |
| VIN (5V) | jalur **+** breadboard → relay **VCC** dan relay **COM** | Merah / Oranye |
| GND | jalur **−** breadboard → relay **GND** dan kipas **−** | Hitam |
| D18 (GPIO 18) | relay **IN** | Biru |
| relay **NO** | kipas **+** | Oranye |

- **Kenapa DHT22 di 3V3?** Sinyal data sensor setinggi tegangan dayanya. GPIO ESP32 hanya tahan **3,3V**.
- **Kenapa relay di VIN 5V?** Kumparan relay butuh 5V untuk menarik saklarnya.
- Kipas di **NO** → ESP32 mati, kipas ikut mati (*fail-safe*, P9).

> Catatan tutor: Kalau diagram dari Gemini tidak akurat, ganti dengan screenshot simulasi Wokwi `wokwi/P10_PetaRakitan` (LED biru = pengganti kipas, Wokwi tidak punya kipas DC).

### Slide 3 — Urutan Merakit yang Aman ✅
1. **Cabut USB.** Merakit & memindah kabel selalu dalam keadaan **mati**.
2. Pasang ESP32 di breadboard: **VIN → jalur +**, **GND → jalur −**.
3. **Sisi kontrol relay**: VCC, GND, IN.
4. **Sisi beban**: jalur + → COM, NO → kipas +, kipas − → jalur −. Sekrup kencang, tarik pelan: tidak lepas.
5. Penguji **mencentang** tabel Peta Rakitan satu per satu.
6. Colok USB. Bau/panas? **Cabut segera.**
- DHT22 menyusul di Topik 2, dengan aturan yang sama.

> Catatan tutor: Keselamatan: **hanya kipas DC 5V**. Tidak ada kabel PLN/stopkontak di meja praktik. Jangan sambungkan kipas langsung ke pin GPIO (arus kipas jauh di atas ±12 mA yang aman untuk GPIO). Jaga jari & rambut dari baling-baling.

### Slide 4 — Cara Upload Program Tes Jadi ⬆️
1. VS Code → PlatformIO → **New Project** (board: *Espressif ESP32 Dev Module*, framework: *Arduino*).
2. Ganti isi `platformio.ini` dengan file `platformio.ini` dari folder **Kode**.
3. Buka file tes (misal `P10_1_TesRelay.cpp`), **salin semua** isinya ke `src/main.cpp`.
4. Klik **Upload (→)**, lalu **Serial Monitor (🔌)** di status bar. Baud rate **115200**.
- Cukup **1 project** untuk semua file hari ini: ganti isi `main.cpp`, Upload lagi.
- Muncul `Connecting.....` lama? Tahan tombol **BOOT** di ESP32 sampai upload mulai.
- Port tidak terdeteksi? Kemungkinan besar kabel USB **khusus charger** (tanpa jalur data). Ganti kabel.

### Slide 5 — Tes 1: Relay Berdetak ⏱️
```cpp
#include <Arduino.h>

#define RELAY_PIN 18     // ubah HANYA kalau kabel IN kamu pasang di pin lain
#define RELAY_ON  LOW    // modul relay active-LOW: IN = LOW -> relay aktif
#define RELAY_OFF HIGH

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);  // set OFF dulu supaya relay tidak klik saat boot
  pinMode(RELAY_PIN, OUTPUT);
  Serial.println();
  Serial.printf("Tes relay di GPIO %d dimulai\n", RELAY_PIN);
}

void loop() {
  digitalWrite(RELAY_PIN, RELAY_ON);
  Serial.println("Relay AKTIF (IN = LOW, sekitar 0 V)    -> kipas harus BERPUTAR");
  delay(2000);

  digitalWrite(RELAY_PIN, RELAY_OFF);
  Serial.println("Relay MATI  (IN = HIGH, sekitar 3,3 V) -> kipas harus BERHENTI");
  delay(2000);
}
```
- **Tidak perlu diubah.** Yang dicek: tiap 2 detik relay **klik**, LED relay menyala, kipas berputar lalu berhenti.
- Tulisan di Serial Monitor harus **cocok** dengan yang terjadi di meja.

> Catatan tutor: Tidak perlu membedah kode baris per baris. Cukup tunjukkan 3 hal: angka `18` = pin kabel biru, `LOW` = aktif (active-LOW dari P9), dan teks di Serial Monitor sebagai "laporan" alat.

### Slide 6 — Active-LOW: Lihat dengan Mata & Multimeter 🔍
| Serial Monitor | Tegangan pin IN (multimeter, ke GND) | LED relay | Kipas |
|---|---|---|---|
| `Relay AKTIF` | ±0 V (LOW) | Menyala | Berputar |
| `Relay MATI` | ±3,3 V (HIGH) | Mati | Berhenti |
- **Bukti fisik** eksperimen P9: modul aktif saat IN = **LOW**.
- **Kenapa?** Di dalam modul, arus mengalir dari VCC **keluar lewat pin IN**. IN = LOW membuka "jalan keluar" arus → relay menarik. IN = HIGH menutupnya.
- Firmware proyek akhir memakai aturan yang sama.

> Catatan tutor: Analogi: pin IN seperti **keran di ujung bawah** selang. Keran dibuka ke bawah (LOW) → air (arus) mengalir → relay bekerja. Untuk yang penasaran: di jalur itu ada LED optocoupler/transistor modul. Jangan masuk lebih dalam dari ini.

### Slide 7 — Tes 2: Baca DHT22 🌡️
```cpp
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4        // ubah HANYA kalau kabel "out" kamu pasang di pin lain

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  dht.begin();
  Serial.println();
  Serial.printf("Tes DHT22 di GPIO %d dimulai\n", DHT_PIN);
}

void loop() {
  delay(2000);  // DHT22: maksimal 1 bacaan tiap 2 detik

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22 -> cek: out ke GPIO 4? + ke 3V3? - ke GND? kabel longgar?");
    return;
  }

  Serial.printf("Suhu: %.1f C | Lembap: %.1f %%\n", suhu, lembap);
}
```
- Genggam sensor → suhu naik pelan. Tiup sensor → kelembapan naik cepat.

### Slide 8 — Membaca Serial Monitor 📟
| Muncul di Serial Monitor | Artinya | Tindakan |
|---|---|---|
| `Suhu: 28.4 C \| Lembap: 65.0 %` | Sensor & kabel **beres** | Lanjut |
| `Gagal baca DHT22 ...` terus-menerus | ESP32 hidup, tapi sensor tidak menjawab | Cek 3 kabel DHT22, terutama **out → D4** |
| Huruf acak seperti `⸮⸮x⸮` | Baud rate salah | Set Serial Monitor ke **115200** |
| Tidak muncul apa pun | Program belum ter-upload / port salah | Upload ulang, tekan tombol **EN** (reset) |

### Slide 9 — Troubleshooting Rakitan 🧰
| Gejala | Penyebab paling sering | Cek |
|---|---|---|
| Relay tidak klik, LED relay mati | VCC/GND relay lepas, IN bukan di D18 | Kabel merah/hitam/biru relay |
| Relay klik, kipas **tidak** berputar | Sisi beban: COM/NO longgar, kipas − tidak ke GND | Sekrup terminal, kabel oranye |
| Kipas berputar saat Serial menulis "MATI" (terbalik) | Kipas di **NC**, bukan NO | Pindah kabel ke **NO** |
| Kipas menyala sesaat saat ESP32 baru dicolok | Relay di **strapping pin** (0, 2, 5, 12, 15) | Pindah ke D18 |
| Relay **tidak mau mati** | Modul relay 5V kurang cocok dengan logika 3,3V | Panggil tutor |
| ESP32 restart saat kipas mulai berputar | Daya USB laptop tidak kuat | Port USB lain / power bank, kabel pendek |

### Slide 10 — Tips Engineer: 3 Pengukuran Multimeter 📏
1. **Tegangan** (DC V): 3V3 ke GND ≈ **3,3 V**; VIN ke GND ≈ **4,7–5 V**. Kurang? Masalah daya/kabel USB.
2. **Tegangan pin IN** ke GND: ±0 V saat aktif, ±3,3 V saat mati (Slide 6).
3. **Continuity** (bunyi "tiit") dengan **USB dicabut**: COM–NC bunyi, COM–NO diam. Artinya relay dalam posisi normal (tidak aktif).
- Engineer tidak menebak. **Ukur dulu, baru bongkar.**

### Slide 11 — Peta Proyek Akhir 🗺️
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ← HARI INI
[P11] Upload firmware proyek, data suhu tampil di dashboard
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```
> Catatan tutor: Minta tiap kelompok memotret rakitan yang lolos 2 tes. Foto ini dipakai lagi di P13 sebagai foto "sebelum dirapikan".

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Rakit & Tes Relay:** Kenapa kita harus mencabut USB dulu setiap kali memindah kabel? Apa yang terjadi kalau ujung kabel VIN tidak sengaja menyentuh jalur GND?
- **Topik 2 — Rakit & Tes DHT22:** Serial Monitor terus menulis "Gagal baca DHT22". Kabel mana yang kalian cek pertama, dan kenapa?
- **Topik 3 — Troubleshooting:** Relay klik tapi kipas diam. Apa yang sudah PASTI benar, dan apa yang mungkin salah?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Pindah Pin Relay"
1. **Cabut USB.** Pindahkan kabel biru relay IN dari **D18** ke **D19**.
2. Buka `C1_P10_Easy_PindahPinRelay.cpp`, ubah **satu angka**: `#define RELAY_PIN 18` → `19`.
3. Upload. Relay harus kembali klik tiap 2 detik, Serial menulis `GPIO 19`.
4. Jawab: kalau kabel sudah dipindah tapi angkanya **lupa** diubah, apa yang terjadi?
5. Kembalikan kabel ke D18 dan angka ke 18.

### 🟡 Medium — "Termostat Tangan" 🌡️➡️🌀
1. Upload `C2_P10_Medium_TermostatTangan.cpp` apa adanya, catat suhu ruangan dari Serial Monitor.
2. Ubah **satu angka**: `#define AMBANG` = suhu ruangan + 1 (misal `29.5`). Upload lagi.
3. **Genggam** sensor DHT22 sampai kipas menyala sendiri. Lepas, tunggu sampai kipas mati sendiri.
4. Catat: berapa detik sampai kipas menyala? Berapa detik sampai mati lagi?
5. Jawab: kenapa kipas baru mati setelah suhu turun **0,5°C di bawah** AMBANG, bukan tepat di AMBANG? (Petunjuk: bayangkan suhu naik-turun 29,9 ↔ 30,1.)

### 🔴 Hard — "Detektif Kabel" 🕵️
Kelompok lain (atau tutor) menukar **2 kabel** di rakitan kalian memakai **Kartu Sabotase** dari tutor, tanpa memberi tahu.
1. Upload `P10_1_TesRelay.cpp` dan `P10_2_TesDHT22.cpp`, catat **gejalanya**.
2. Pakai tabel **Troubleshooting** dan **multimeter** untuk menemukan kedua kabel yang salah, **tanpa** membongkar semua kabel.
3. Tulis laporan 3 baris per kabel: **gejala → pengukuran → perbaikan**.
- Penyabot **hanya** boleh memakai sabotase di kartu. Kabel daya (3V3, VIN, GND) tidak boleh disilangkan. USB dicabut saat menukar.

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Dari komponen berserakan jadi satu alat utuh yang lolos uji.
- **Pertanyaan pemantik:** Kalau alat elektronik tidak jalan, bagaimana teknisi tahu bagian mana yang rusak tanpa membongkar semuanya?
- **Konteks:** Teknisi profesional tidak menebak. Mereka punya urutan merakit, program tes, dan alat ukur. Hari ini kita memakai ketiganya.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 3 (slide *Tips Engineer: 3 Pengukuran Multimeter*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop nyolok kipas langsung ke pin ESP32 kalau nggak mau board-mu gosong." 🛑

Isi slide:
- 🔥 Pin GPIO ESP32 cuma kuat **±12 mA**. Kipas mini butuh **ratusan mA**. Colok langsung = pin rusak.
- 🔀 Pakai **relay**: pin ESP32 cuma "menekan saklar", arus kipas lewat jalur lain (COM–NO).
- 🧯 Pasang kipas di **NO**, bukan NC: ESP32 mati → kipas ikut mati (*fail-safe*).
- 🙃 Kebanyakan modul relay murah **active-LOW**: aktif saat IN = LOW. Jangan kaget kalau logikanya kebalik.
- 📏 Cek pakai multimeter: pin IN ±0 V saat aktif, ±3,3 V saat mati.

🎙️ **Kalimat hook (pembuka rekaman):** "Stop nyolok kipas langsung ke pin ESP32 kalau nggak mau board-mu gosong."

📌 **Teks di layar:**
- GPIO cuma ±12 mA 🔥
- Kipas = ratusan mA ❌
- Pakai relay 🔀
- Kipas di NO = fail-safe 🧯
- Active-LOW: LOW = NYALA 🙃

🎬 **Penutup:** "Rakit dulu dengan benar, baru pintar. Save dan follow buat part selanjutnya."

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–4 detik] "Stop nyolok kipas langsung ke pin ESP32 kalau nggak mau board-mu gosong."
> - [4–14 detik] "Pin ESP32 itu cuma kuat sekitar dua belas miliampere. Kipas mini butuh ratusan. Dicolok langsung? Pinnya yang jadi korban."
> - [14–26 detik] "Caranya pakai relay. Pin ESP32 cuma 'menekan saklar' kecil. Arus kipas lewat jalur sendiri, dari COM ke NO."
> - [26–36 detik] "Pasang kipas di NO, bukan NC. Kalau ESP32 mati atau restart, kipas ikut mati. Namanya fail-safe."
> - [36–48 detik] "Satu lagi yang sering bikin bingung: relay murah biasanya active-LOW. Dia nyala waktu pinnya LOW. Ukur pakai multimeter: nol volt, relay nyala."
> - [48–60 detik] "Rakit dulu dengan benar, baru pintar. Save dan follow buat part selanjutnya."

### 🎥 Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop nyolok kipas langsung ke pin ESP32 |
| Durasi | ±60 detik |
| Pembicara | Tutor (close-up rakitan + multimeter) |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–4 | Kabel kipas didekatkan ke pin GPIO, tanda silang merah besar | "Stop nyolok kipas langsung ke pin ESP32 kalau nggak mau board-mu gosong." | JANGAN! 🛑 |
| 4–14 | Close-up pin GPIO, angka 12 mA vs 200 mA | "Pin ESP32 itu cuma kuat sekitar dua belas miliampere. Kipas mini butuh ratusan. Dicolok langsung? Pinnya yang jadi korban." | GPIO ±12 mA 🔥 Kipas ratusan mA ❌ |
| 14–26 | Relay klik, kipas berputar | "Caranya pakai relay. Pin ESP32 cuma 'menekan saklar' kecil. Arus kipas lewat jalur sendiri, dari COM ke NO." | Pakai relay 🔀 |
| 26–36 | USB dicabut, kipas langsung berhenti | "Pasang kipas di NO, bukan NC. Kalau ESP32 mati atau restart, kipas ikut mati. Namanya fail-safe." | Kipas di NO = fail-safe 🧯 |
| 36–48 | Multimeter di pin IN: 0,0 V → relay nyala | "Satu lagi yang sering bikin bingung: relay murah biasanya active-LOW. Dia nyala waktu pinnya LOW. Ukur pakai multimeter: nol volt, relay nyala." | Active-LOW: LOW = NYALA 🙃 |
| 48–60 | Tutor ke kamera dengan rakitan lengkap | "Rakit dulu dengan benar, baru pintar. Save dan follow buat part selanjutnya." | Save & follow 👉 |

#### Caption

Kipas langsung ke pin ESP32? Jangan! 🛑

🔥 GPIO cuma ±12 mA, kipas butuh ratusan mA
🔀 Pakai relay: ESP32 cuma "menekan saklar"
🧯 Kipas di NO → ESP32 mati, kipas ikut mati
🙃 Relay murah biasanya active-LOW (LOW = nyala)
📏 Ragu? Ukur pakai multimeter

#InspiraLabs #ESP32 #IoT #Elektronika #Relay #EkskulCoding #Arduino #BelajarElektronika

#### Yang sengaja tidak dibocorkan
- Peta rakitan lengkap proyek akhir (pin, warna kabel).
- Program tes dan tabel troubleshooting kelas.

---

## Post-Test (5 soal, pilihan ganda)

**1. Sebelum memindah kabel di rakitan ESP32, langkah pertama yang benar adalah…**
A. Menekan tombol BOOT B. Mencabut kabel USB C. Membuka Serial Monitor D. Mengencangkan sekrup terminal relay

**2. Kenapa kaki "+" modul DHT22 disambungkan ke 3V3, bukan ke VIN (5V)?**
A. Supaya sinyal data sensor juga 3,3V, sesuai batas tegangan GPIO ESP32 B. Karena pin 3V3 memberi arus paling besar C. Supaya relay ikut aktif D. Karena VIN hanya dipakai untuk WiFi

**3. Serial Monitor menulis "Relay AKTIF", tapi relay tidak klik dan LED relay tidak menyala. Penyebab paling mungkin adalah…**
A. Sensor DHT22 terbalik B. Kipas rusak C. Kabel IN atau VCC/GND relay tidak tersambung dengan benar D. Baud rate Serial Monitor salah

**4. Relay klik dan LED relay menyala, tetapi kipas tidak berputar. Bagian yang paling perlu dicek adalah…**
A. Kabel DHT22 B. Sisi beban: kabel COM, NO, dan kabel kipas ke GND C. Kabel USB laptop D. Pengaturan WiFi

**5. Modul relay active-LOW sedang AKTIF. Jika pin IN diukur dengan multimeter (terhadap GND), hasilnya sekitar…**
A. 0 V B. 3,3 V C. 5 V D. 12 V

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** relay kembali berdetak dari GPIO 19. Jawaban no. 4: kalau angka lupa diubah, program tetap "menekan" GPIO 18 yang sudah kosong → relay **diam**, padahal Serial tetap menulis AKTIF/MATI. Pelajaran: **angka di kode harus cocok dengan kabel di meja**.

**Medium:** kipas menyala ±5–20 detik setelah digenggam (suhu naik pelan; DHT22 dibaca tiap 2 detik). Mati lagi setelah suhu turun **0,5°C di bawah AMBANG**, biasanya lebih lama (30–90 detik). Jawaban no. 5: tanpa jeda, suhu yang naik-turun 29,9 ↔ 30,1 membuat relay "cetak-cetek" ON-OFF tiap 2 detik (relay cepat aus, kipas tersendat). Jeda 0,5°C ini disebut **histeresis**; AC dan kulkas sungguhan juga memakainya. Mode Otomatis di dashboard P12 memakai ide ambang yang sama.

**Hard — Kartu Sabotase (tulis 1 sabotase per kartu, tiap kelompok mendapat 2 kartu berbeda):**

| Sabotase | Gejala | Cara menemukan |
|---|---|---|
| DHT22 out pindah ke D5 | `Gagal baca DHT22` terus | Ikuti kabel kuning: tidak di D4 |
| Kipas pindah dari NO ke NC | Kipas berputar saat Serial "MATI" | Continuity COM–NC bunyi saat USB dicabut, kabel kipas ada di NC |
| Relay IN pindah ke D34 | Relay diam, Serial tetap AKTIF/MATI | Tegangan IN tidak berubah; D34 input-only |
| Kipas − dilepas dari GND | Relay klik, kipas diam | Tegangan kipas + ke GND ±5 V saat aktif, tapi kipas − tidak tersambung |

Aturan: sabotase dilakukan dengan **USB dicabut**, hanya dari kartu. **Jangan pernah** menyilangkan 3V3/VIN/GND (bisa korsleting). Pemilik rakitan menghadap belakang selama sabotase. Kelompok yang selesai cepat boleh menyabotase kelompok lain; kalau waktu mepet, tutor yang menyabotase saat Challenge Medium.

### Cadangan kalau kit rusak
Rakitan tidak bisa diperbaiki di kelas (ESP32/relay rusak)? Kelompok itu memakai **simulasi Wokwi** `wokwi/P10_PetaRakitan` dari link tutor: cocokkan kabel di layar dengan tabel Peta Rakitan, lalu kerjakan Medium dengan klik DHT22 → geser suhu. Rakitan fisik diganti kit cadangan di P11.

### Catatan keselamatan & daya
- Kipas mini 5V menarik ±100–250 mA dari VIN (USB). Kalau ESP32 restart saat kipas mulai berputar (*brownout*), pindah ke port USB lain/power bank dan pendekkan kabel.
- Jangan izinkan kipas/lampu 220V walau relay mendukung. Tidak ada pengecualian.

### Kunci Post-Test
1. B 2. A 3. C 4. B 5. A

### Pembahasan singkat
- No. 2: modul DHT22 punya resistor pull-up ke kaki "+", jadi sinyal data setinggi tegangan dayanya. Diberi 5V → sinyal 5V masuk GPIO yang hanya tahan 3,3V.
- No. 3: Serial menulis AKTIF berarti program jalan. Masalahnya di jalur sinyal/daya relay, bukan di sensor atau Serial.
- No. 4: relay klik = sisi kontrol beres. Yang tersisa sisi beban.
- No. 5: active-LOW → aktif saat IN = LOW = ±0 V.
