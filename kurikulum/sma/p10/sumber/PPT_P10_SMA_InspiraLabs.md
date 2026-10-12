# P10 SMA — Merakit Smart Room Monitor: DHT22, Relay & Kipas

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P10 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P10 SMA**

# Merakit Smart Room Monitor: DHT22, Relay & Kipas

Dari komponen berserakan jadi satu alat utuh yang lolos uji.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kalau alat elektronik tidak jalan, bagaimana teknisi tahu bagian mana yang rusak tanpa membongkar semuanya?

Teknisi profesional tidak menebak. Mereka punya urutan merakit, program tes, dan alat ukur. Hari ini kita memakai ketiganya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 3.

---

### Apa yang kita capai hari ini?

- **01 Rakit & Tes Relay + Kipas**: Peta rakitan, urutan merakit aman, active-LOW dilihat langsung.
- **02 Rakit & Tes DHT22**: Sensor terbaca, membaca laporan Serial Monitor.
- **03 Troubleshooting**: Tabel gejala–penyebab dan 3 pengukuran multimeter.

---

### Dari Rakitan Lepas ke Rakitan Utuh
- P9: DHT22 dan relay dirakit **terpisah**, relay dinyalakan dengan **jumper tangan** (IN → GND).
- Hari ini: semua komponen dirakit jadi **satu alat utuh**, lalu diuji dengan **2 program tes jadi**.
- Program tes = **alat ukur**, bukan tugas coding. Kalian cukup **buka file → Upload → amati**.
- Rakitan hari ini = rakitan **final** proyek akhir. Rawat baik-baik, jangan dibongkar setelah kelas.

---

### Peta Rakitan Lengkap
| Dari (ESP32) | Ke | Warna kabel |
|---|---|---|
| 3V3 | DHT22 **+** | Merah |
| D4 (GPIO 4) | DHT22 **out** | Kuning |
| GND | DHT22 **−** | Hitam |
| VIN (5V) | jalur **+** → relay **VCC** dan relay **COM** | Merah / Oranye |
| GND | jalur **−** → relay **GND** dan kipas **−** | Hitam |
| D18 (GPIO 18) | relay **IN** | Biru |
| relay **NO** | kipas **+** | Oranye |

```wiring
Judul: Rakitan lengkap Smart Room Monitor
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 3V3 → DHT22 "+" (kabel merah)
- ESP32 D4 → DHT22 "out" (kabel kuning)
- ESP32 GND → DHT22 "−" (kabel hitam)
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D18 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: D4 = DHT_PIN 4 dan D18 = RELAY_PIN 18 ; label "kipas di NO = fail-safe"
```

> 🗣️ SPEAKER NOTES: DHT22 di 3V3 karena logika ESP32 3,3V. Relay & kipas di VIN 5V. Kipas di NO supaya kalau ESP32 mati, kipas ikut mati (fail-safe, P9).

---

### Urutan Merakit yang Aman
1. **Cabut USB.** Merakit & memindah kabel selalu dalam keadaan **mati**.
2. Pasang ESP32 di breadboard, sambungkan **VIN → jalur +** dan **GND → jalur −**.
3. Rakit **DHT22** (3 kabel).
4. Rakit **sisi kontrol relay**: VCC, GND, IN.
5. Rakit **sisi beban relay**: jalur + → COM, NO → kipas +, kipas − → jalur −. Kencangkan sekrup, tarik pelan: tidak boleh lepas.
6. **Cek ulang** dengan tabel Peta Rakitan, centang satu per satu bersama teman.
7. Baru colok USB. Ada bau/panas? **Cabut segera.**

> 🗣️ SPEAKER NOTES: Keselamatan: HANYA kipas DC 5V. Tidak ada kabel PLN/stopkontak di meja praktik. Jangan sambungkan kipas langsung ke pin GPIO (arus kipas jauh di atas ±12 mA yang aman untuk GPIO).

---

### Cara Upload Program Tes Jadi
1. VS Code → PlatformIO → **New Project** (board: *Espressif ESP32 Dev Module*, framework: *Arduino*).
2. Ganti isi `platformio.ini` dengan file `platformio.ini` dari folder **Kode**.
3. Buka file tes, **salin semua** isinya ke `src/main.cpp`.
4. Klik **Upload (→)**, lalu **Serial Monitor (🔌)**. Baud rate **115200**.
- `Connecting.....` lama? Tahan tombol **BOOT** sampai upload mulai.
- Port tidak terdeteksi? Kemungkinan kabel USB **khusus charger**. Ganti kabel.

---

### Tes 1: Relay Berdetak
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
- **Tidak perlu diubah.** Cek: tiap 2 detik relay **klik**, LED relay menyala, kipas berputar lalu berhenti.

File live coding: `P10_1_TesRelay.cpp` (ada di linktr.ee/InspiraLabs_SMA)

> 🗣️ SPEAKER NOTES: Tidak perlu membedah kode baris per baris. Tunjukkan 3 hal saja: angka 18 = pin kabel biru, LOW = aktif (active-LOW dari P9), dan teks Serial Monitor sebagai "laporan" alat. Teks di Serial harus cocok dengan yang terjadi di meja.

---

### Active-LOW: Lihat dengan Mata & Multimeter
| Serial Monitor | Tegangan pin IN (ke GND) | LED relay | Kipas |
|---|---|---|---|
| `Relay AKTIF` | ±0 V (LOW) | Menyala | Berputar |
| `Relay MATI` | ±3,3 V (HIGH) | Mati | Berhenti |
- Ini **bukti fisik** eksperimen P9: modul kita aktif saat IN = **LOW**.
- Firmware proyek akhir memakai aturan yang sama, jadi kalian **tidak perlu mengubah apa pun**.

> 🗣️ SPEAKER NOTES: Demo dengan multimeter di proyektor/kamera: probe hitam ke GND, probe merah ke pin IN relay. Angka melompat 0 V ↔ 3,3 V mengikuti bunyi klik.

---

### Forum Diskusi Live Coding

**Kenapa kita harus mencabut USB dulu setiap kali memindah kabel?**

> 🗣️ SPEAKER NOTES: Topik 1 — Rakit & Tes Relay. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Pindah Pin Relay" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. **Cabut USB.** Pindahkan kabel biru relay IN dari **D18** ke **D19**.
2. Ubah **satu angka**: `#define RELAY_PIN 18` → `19`.
3. Upload. Relay harus kembali klik tiap 2 detik, Serial menulis `GPIO 19`.
4. Jawab: kalau kabel sudah dipindah tapi angkanya **lupa** diubah, apa yang terjadi?
5. Kembalikan kabel ke D18 dan angka ke 18.

Download `C1_P10_Easy_PindahPinRelay.cpp` dari linktr.ee/InspiraLabs_SMA
Simpan hasil sebagai `P10_NamaSiswa_C1.cpp`

---

### Tes 2: Baca DHT22
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

File live coding: `P10_2_TesDHT22.cpp` (ada di linktr.ee/InspiraLabs_SMA)

---

### Membaca Serial Monitor
| Muncul di Serial Monitor | Artinya | Tindakan |
|---|---|---|
| `Suhu: 28.4 C \| Lembap: 65.0 %` | Sensor & kabel **beres** | Lanjut |
| `Gagal baca DHT22 ...` terus-menerus | ESP32 hidup, sensor tidak menjawab | Cek 3 kabel DHT22, terutama **out → D4** |
| Huruf acak seperti `⸮⸮x⸮` | Baud rate salah | Set ke **115200** |
| Tidak muncul apa pun | Program belum ter-upload / port salah | Upload ulang, tekan tombol **EN** |

---

### Forum Diskusi Live Coding

**Serial Monitor terus menulis "Gagal baca DHT22". Kabel mana yang kalian cek pertama, dan kenapa?**

> 🗣️ SPEAKER NOTES: Topik 2 — Rakit & Tes DHT22. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Termostat Tangan" (+10)

**TOPIK 2 DARI 3 — CHALLENGE 🟡**

1. Upload file challenge apa adanya, catat suhu ruangan dari Serial Monitor.
2. Ubah **satu angka**: `#define AMBANG` = suhu ruangan + 1 (misal `29.5`). Upload lagi.
3. **Genggam** sensor DHT22 sampai kipas menyala sendiri. Lepas, tunggu sampai kipas mati sendiri.
4. Catat: berapa detik sampai kipas menyala? Berapa detik sampai mati lagi?

Download `C2_P10_Medium_TermostatTangan.cpp` dari linktr.ee/InspiraLabs_SMA
Simpan hasil sebagai `P10_NamaSiswa_C2.cpp`

---

### Troubleshooting Rakitan
| Gejala | Penyebab paling sering | Cek |
|---|---|---|
| Relay tidak klik, LED relay mati | VCC/GND relay lepas, IN bukan di D18 | Kabel merah/hitam/biru relay |
| Relay klik, kipas **tidak** berputar | COM/NO longgar, kipas − tidak ke GND | Sekrup terminal, kabel oranye |
| Kipas berputar saat Serial "MATI" | Kipas di **NC**, bukan NO | Pindah ke **NO** |
| Kipas menyala sesaat saat ESP32 dicolok | Relay di **strapping pin** (0, 2, 5, 12, 15) | Pindah ke D18 |
| Relay **tidak mau mati** | Modul 5V kurang cocok dengan logika 3,3V | Panggil tutor |
| ESP32 restart saat kipas mulai berputar | Daya USB tidak kuat | Port lain / power bank, kabel pendek |

---

### Tips Engineer: 3 Pengukuran Multimeter
1. **Tegangan** (DC V): 3V3 ke GND ≈ **3,3 V**; VIN ke GND ≈ **4,7–5 V**.
2. **Tegangan pin IN** ke GND: ±0 V saat aktif, ±3,3 V saat mati.
3. **Continuity** ("tiit") dengan **USB dicabut**: COM–NC bunyi, COM–NO diam.
- Engineer tidak menebak. **Ukur dulu, baru bongkar.**

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi: urutan merakit + program tes + alat ukur = cara teknisi menemukan kerusakan tanpa membongkar semuanya. Bandingkan dengan tebakan siswa tadi.

---

### Forum Diskusi Live Coding

**Relay klik tapi kipas diam. Apa yang sudah PASTI benar, dan apa yang mungkin salah?**

> 🗣️ SPEAKER NOTES: Topik 3 — Troubleshooting. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🔴 Hard — "Detektif Kabel" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

Tutor menukar **2 kabel** di rakitan kalian tanpa memberi tahu.
1. Upload `P10_1_TesRelay.cpp` dan `P10_2_TesDHT22.cpp`, catat **gejalanya**.
2. Pakai tabel **Troubleshooting** dan **multimeter** untuk menemukan kedua kabel yang salah, **tanpa** membongkar semua kabel.
3. Tulis laporan 3 baris per kabel: **gejala → pengukuran → perbaikan**.

Simpan hasil sebagai `P10_NamaSiswa_C3` (foto laporan)

---

### Peta Proyek Akhir
```
[P9]  Pinout, DHT22, relay, active-LOW (tanpa coding)        ✅
[P10] Rakit DHT22 + relay + kipas, upload program tes jadi    ← HARI INI
[P11] Upload firmware proyek, data suhu tampil di dashboard
[P12] Kontrol kipas dari dashboard: manual & mode otomatis
[P13] Rapikan rakitan + kustom dashboard + showcase
```

> 🗣️ SPEAKER NOTES: Minta tiap kelompok memotret rakitan yang lolos 2 tes. Foto ini dipakai lagi di P13 sebagai foto "sebelum dirapikan". Rakitan jangan dibongkar.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 10" di Linktree sudah mengarah ke Google Form P10 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P11!**

MINGGU DEPAN (P11): **Firmware Jadi, Data Online: Monitoring Suhu di Dashboard**
