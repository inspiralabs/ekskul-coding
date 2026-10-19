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
- Program tes = **alat ukur**, seperti *factory test* di pabrik sebelum produk dikirim. Cukup **buka file → Upload → amati**.
- Berdua: **Perakit** & **Penguji**, tukar di Topik 2. Sendiri: baca checklist keras-keras.
- Rakitan ini = rakitan **final** proyek akhir. Jangan dibongkar setelah kelas.

> 🗣️ SPEAKER NOTES: Perakit memegang kabel. Penguji membaca tabel Peta Rakitan, mencentang, memegang multimeter & Serial Monitor. Peserta individu: minta tetangga atau tutor ikut mengecek sebelum colok USB.

---

### Peta Rakitan Lengkap
| Dari (ESP32) | Ke | Warna kabel |
|---|---|---|
| 3V3 | DHT22 **+** | Merah |
| D13 (GPIO 13) | DHT22 **out** | Kuning |
| GND | DHT22 **−** | Hitam |
| VIN (5V) | jalur **+** → relay **VCC** dan relay **COM** | Merah / Oranye |
| GND | jalur **−** → relay **GND** dan kipas **−** | Hitam |
| D14 (GPIO 14) | relay **IN** | Biru |
| relay **NO** | kipas **+** | Oranye |

```wiring
Judul: Rakitan lengkap Smart Room Monitor
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin, modul relay 1-channel 5V, kipas mini DC 5V
Koneksi:
- ESP32 3V3 → DHT22 "+" (kabel merah)
- ESP32 D13 → DHT22 "out" (kabel kuning)
- ESP32 GND → DHT22 "−" (kabel hitam)
- ESP32 VIN → jalur + breadboard (kabel merah)
- ESP32 GND → jalur − breadboard (kabel hitam)
- jalur + → relay VCC (kabel merah)
- jalur − → relay GND (kabel hitam)
- ESP32 D14 → relay IN (kabel biru)
- jalur + → relay COM (kabel oranye)
- relay NO → kipas mini "+" (kabel oranye)
- kipas mini "−" → jalur − (kabel hitam)
Sorot: D13 = DHT_PIN 13 dan D14 = RELAY_PIN 14 ; D12 (di antara keduanya) dibiarkan kosong ; label "kipas di NO = fail-safe"
```

> 🗣️ SPEAKER NOTES: Kenapa DHT22 di 3V3: modul DHT22 punya pull-up ke kaki "+", jadi sinyal datanya setinggi tegangan daya. GPIO ESP32 hanya tahan 3,3V. Kenapa relay di VIN 5V: kumparan relay butuh 5V. Kipas di NO supaya kalau ESP32 mati, kipas ikut mati (fail-safe, P9). Kalau diagram di slide ini tidak akurat, ganti dengan screenshot simulasi Wokwi P10_PetaRakitan (LED biru = pengganti kipas).

---

### Urutan Merakit yang Aman
1. **Cabut USB.** Merakit & memindah kabel selalu dalam keadaan **mati**.
2. Pasang ESP32 di breadboard: **VIN → jalur +**, **GND → jalur −**.
3. **Sisi kontrol relay**: VCC, GND, IN.
4. **Sisi beban**: jalur + → COM, NO → kipas +, kipas − → jalur −. Sekrup kencang, tarik pelan: tidak lepas.
5. Penguji **mencentang** tabel Peta Rakitan satu per satu.
6. Colok USB. Bau/panas? **Cabut segera.**
- DHT22 menyusul di Topik 2, dengan aturan yang sama.

> 🗣️ SPEAKER NOTES: Keselamatan: HANYA kipas DC 5V. Tidak ada kabel PLN/stopkontak di meja praktik. Jangan sambungkan kipas langsung ke pin GPIO (arus kipas jauh di atas ±12 mA yang aman untuk GPIO). Jaga jari & rambut dari baling-baling.

---

### Cara Upload Program Tes Jadi
1. Buka folder **Kode** → folder program (misal `P10_1_TesRelay`) → **double-click** file `.ino` → terbuka di **Arduino IDE**.
2. Klik kotak **Select Board** → pilih port ESP32 (Windows: `COM…`, Mac: `/dev/cu.usbserial-…`) → board **ESP32 Dev Module**.
3. Klik **Upload (→)**, tunggu sampai muncul **Done uploading**.
4. Buka **Serial Monitor** (ikon kanan atas, atau `Ctrl+Shift+M` / Mac `⌘+Shift+M`), pilih **115200 baud**.
- `Connecting.....` lama / gagal? Tahan tombol **BOOT** di ESP32 sampai muncul `Writing at ...`.
- Port tidak muncul? Kemungkinan kabel USB **khusus charger** atau driver belum ada. Ganti kabel, lihat *Panduan Instalasi*.
- Masih gagal upload? **Tools → Upload Speed → 115200**, lalu Upload lagi.
- Ganti program = buka file `.ino` lain, Upload lagi. Tidak perlu membuat project baru.

---

### Tes 1: Relay Berdetak
```cpp
#define RELAY_PIN 14     // ubah HANYA kalau kabel IN kamu pasang di pin lain
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

File live coding: `P10_1_TesRelay.ino` (ada di linktr.ee/InspiraLabs_SMA)

> 🗣️ SPEAKER NOTES: Tidak perlu membedah kode baris per baris. Tunjukkan 3 hal saja: angka 14 = pin kabel biru, LOW = aktif (active-LOW dari P9), dan teks Serial Monitor sebagai "laporan" alat. Teks di Serial harus cocok dengan yang terjadi di meja.

---

### Active-LOW: Lihat dengan Mata & Multimeter
| Serial Monitor | Tegangan pin IN (ke GND) | LED relay | Kipas |
|---|---|---|---|
| `Relay AKTIF` | ±0 V (LOW) | Menyala | Berputar |
| `Relay MATI` | ±3,3 V (HIGH) | Mati | Berhenti |
- **Bukti fisik** eksperimen P9: modul aktif saat IN = **LOW**.
- **Kenapa?** Di dalam modul, arus mengalir dari VCC **keluar lewat pin IN**. IN = LOW membuka "jalan keluar" arus → relay menarik. IN = HIGH menutupnya.
- Firmware proyek akhir memakai aturan yang sama.

> 🗣️ SPEAKER NOTES: Demo dengan multimeter di proyektor/kamera: probe hitam ke GND, probe merah ke pin IN relay. Angka melompat 0 V ↔ 3,3 V mengikuti bunyi klik. Analogi: pin IN seperti keran di ujung bawah selang; dibuka ke bawah (LOW) → arus mengalir → relay bekerja. Yang penasaran: di jalur itu ada LED optocoupler/transistor modul. Cukup sampai situ.

---

### Forum Diskusi Live Coding

**Kenapa kita harus mencabut USB dulu setiap kali memindah kabel? Apa yang terjadi kalau ujung kabel VIN tidak sengaja menyentuh jalur GND?**

> 🗣️ SPEAKER NOTES: Topik 1 — Rakit & Tes Relay. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Arahkan ke istilah korsleting (short circuit): arus besar langsung dari VIN ke GND, bisa merusak ESP32 atau port USB laptop.

---

### Challenge 🟢 Easy — "Pindah Pin Relay" (+10)

**TOPIK 1 DARI 3 — CHALLENGE 🟢**

1. **Cabut USB.** Pindahkan kabel biru relay IN dari **D14** ke **D26**.
2. Ubah **satu angka**: `#define RELAY_PIN 14` → `26`.
3. Upload. Relay harus kembali klik tiap 2 detik, Serial menulis `GPIO 26`.
4. Jawab: kalau kabel sudah dipindah tapi angkanya **lupa** diubah, apa yang terjadi?
5. Kembalikan kabel ke D14 dan angka ke 14.

Download folder `C1_P10_Easy_PindahPinRelay` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save As…** → `P10_NamaSiswa_C1`

---

### Tes 2: Baca DHT22
```cpp
#include <DHT.h>

#define DHT_PIN 13       // ubah HANYA kalau kabel "out" kamu pasang di pin lain

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
    Serial.println("Gagal baca DHT22 -> cek: out ke GPIO 13? + ke 3V3? - ke GND? kabel longgar?");
    return;
  }

  Serial.printf("Suhu: %.1f C | Lembap: %.1f %%\n", suhu, lembap);
}
```
- Genggam sensor → suhu naik pelan. Tiup sensor → kelembapan naik cepat.

File live coding: `P10_2_TesDHT22.ino` (ada di linktr.ee/InspiraLabs_SMA)

---

### Membaca Serial Monitor
| Muncul di Serial Monitor | Artinya | Tindakan |
|---|---|---|
| `Suhu: 28.4 C \| Lembap: 65.0 %` | Sensor & kabel **beres** | Lanjut |
| `Gagal baca DHT22 ...` terus-menerus | ESP32 hidup, sensor tidak menjawab | Cek 3 kabel DHT22, terutama **out → D13** |
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
5. Jawab: kenapa kipas baru mati setelah suhu turun **0,5°C di bawah** AMBANG?

Download folder `C2_P10_Medium_TermostatTangan` dari linktr.ee/InspiraLabs_SMA
Simpan hasil: **File → Save As…** → `P10_NamaSiswa_C2`

---

### Troubleshooting Rakitan
| Gejala | Penyebab paling sering | Cek |
|---|---|---|
| Relay tidak klik, LED relay mati | VCC/GND relay lepas, IN bukan di D14 | Kabel merah/hitam/biru relay |
| Relay klik, kipas **tidak** berputar | COM/NO longgar, kipas − tidak ke GND | Sekrup terminal, kabel oranye |
| Kipas berputar saat Serial "MATI" | Kipas di **NC**, bukan NO | Pindah ke **NO** |
| Kipas menyala sesaat saat ESP32 dicolok | Relay di **strapping pin** (0, 2, 5, 12, 15) | Kembalikan ke D14 |
| Relay **tidak mau mati** | Modul 5V kurang cocok dengan logika 3,3V | Panggil tutor |
| ESP32 restart saat kipas mulai berputar | Daya USB tidak kuat | Port lain / power bank, kabel pendek |
| Upload gagal / ESP32 tidak mau jalan setelah dirakit | Ada kabel nyasar ke **D12** (strapping pin, di antara D14 dan D13) | Cabut kabel dari D12 |

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

Kelompok lain (atau tutor) menukar **2 kabel** di rakitan kalian memakai **Kartu Sabotase**, tanpa memberi tahu.
1. Upload `P10_1_TesRelay.ino` dan `P10_2_TesDHT22.ino`, catat **gejalanya**.
2. Pakai tabel **Troubleshooting** dan **multimeter** untuk menemukan kedua kabel yang salah, **tanpa** membongkar semua kabel.
3. Tulis laporan 3 baris per kabel: **gejala → pengukuran → perbaikan**.

Simpan hasil sebagai `P10_NamaSiswa_C3` (foto laporan)

> 🗣️ SPEAKER NOTES: Sabotase hanya dari kartu, USB dicabut saat menukar. Kabel daya (3V3, VIN, GND) tidak boleh disilangkan. Pemilik rakitan menghadap belakang selama sabotase.

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
