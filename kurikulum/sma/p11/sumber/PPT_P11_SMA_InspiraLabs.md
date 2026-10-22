# P11 SMA — Rakit & Online: Smart Room Monitor Tampil di Dashboard

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P11 SMA | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Khusus deck SMA ini, blok kode tampil di card TERANG (light mode): latar #FAF7F0, border 1px #E6DCC6,
     garis kiri 6px gold #C9A24B, teks #2B2320, komentar abu miring, kata kunci maroon #7A1F2B,
     angka/string #8A6516; baris yang boleh diubah diberi latar #F3E6C4. Abaikan aturan "kode di card gelap".
     Siswa SMA (16–18 tahun): bahasa santai, satu ide per slide, kode sudah jadi (siswa hanya mengisi bagian BOLEH DIUBAH). -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMA**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P11 SMA**

# Rakit & Online: Smart Room Monitor Tampil di Dashboard

Sensor, relay, dan kipas dirakit hari ini. Datanya online hari ini juga.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Di aplikasi ojol, kamu bisa lihat motor driver bergerak di peta. Siapa yang terus-terusan "lapor", dan lapornya ke mana?

Alat yang kita rakit hari ini bekerja dengan cara yang sama persis.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa (+2 per penebak) tanpa langsung dijawab. Jawabannya dibahas di Topik 3 (slide Perjalanan Data).

---

### Apa yang kita capai hari ini?

- **01 Rakit Lengkap**: DHT22, relay, dan kipas jadi satu alat.
- **02 Upload Firmware Proyek**: isi WiFi, upload, baca laporan ESP32.
- **03 Dashboard Online**: angka suhu kelas tampil di website kelompok.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

> 🗣️ SPEAKER NOTES: Poin +2 untuk siswa yang bertanya atau menjawab (benar atau salah, yang penting berani). Utamakan yang belum pernah dapat. Poin challenge diberikan ke setiap anggota kelompok yang ikut mengerjakan.

---

### Kerja Berdua: Perakit & Pengecek
| Peran | Topik 1 (rakit) | Topik 2–3 (upload & dashboard) |
|---|---|---|
| **Perakit** | Memasang kabel | Jadi **Operator**: isi WiFi, klik Upload |
| **Pengecek** | Membacakan Peta Rakitan, mencentang | Jadi **Pengamat**: baca Serial Monitor & dashboard |
- Tukar peran di Topik 2.
- Kerja sendiri? Minta teman sebelah jadi Pengecek **sebelum** USB dicolok.

---

### Kenalan 3 Komponen Hari Ini
| Komponen | Perannya | Gampangnya |
|---|---|---|
| **DHT22** | Mengukur suhu & kelembapan | "Indera perasa" alat |
| **Relay** | Saklar yang dipencet oleh ESP32 | "Jari" yang menekan tombol kipas |
| **Kipas DC 5V** | Beban yang dinyalakan | Yang bikin ruangan adem |
- Otaknya tetap **ESP32**, yang sudah kalian program di P10.

> 🗣️ SPEAKER NOTES: Edarkan 1 relay. Minta siswa menekan relay dekat telinga saat dinyalakan tutor: bunyi "klik" = saklar di dalamnya berpindah. Cukup sampai situ, tidak perlu teori kumparan.

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
Sorot: D13 = DHT_PIN 13 dan D14 = RELAY_PIN 14 ; D12 (di antara keduanya) dibiarkan kosong ; label "kipas di NO"
```

> 🗣️ SPEAKER NOTES: Kipas di NO (Normally Open) supaya kalau ESP32 mati, kipas ikut mati. DHT22 di 3V3 karena pin ESP32 hanya tahan 3,3V; relay di VIN karena relay butuh 5V. Kalau diagram tidak akurat, ganti dengan screenshot simulasi Wokwi P11_PetaRakitan (LED biru = pengganti kipas).

---

### Urutan Merakit yang Aman
1. **Cabut USB.** Memasang & memindah kabel selalu dalam keadaan **mati**.
2. Pasang ESP32 di breadboard: **VIN → jalur +**, **GND → jalur −**.
3. **DHT22**: 3 kabel (merah, kuning, hitam).
4. **Relay**: VCC, GND, IN (biru ke D14).
5. **Kipas**: jalur + → COM, NO → kipas +, kipas − → jalur −. Sekrup terminal kencang, tarik pelan: tidak lepas.
6. Pengecek **mencentang** Peta Rakitan satu per satu, baru colok USB. Bau/panas? **Cabut segera.**

> 🗣️ SPEAKER NOTES: Keselamatan: HANYA kipas DC 5V, tidak ada kabel PLN/stopkontak di meja. Jangan sambungkan kipas langsung ke pin GPIO. Pin D12 ada di antara D14 dan D13: kabel nyasar ke D12 bikin upload gagal. Jaga jari & rambut dari baling-baling.

---

### Tanya Jawab (+2)

**Kalau ESP32 tiba-tiba mati, kipasnya ikut mati atau tetap berputar? Kenapa kita sengaja pasang kipas di NO?**

> 🗣️ SPEAKER NOTES: Topik 1 — Rakit Lengkap. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa). Jawaban: ikut mati. NO = "normalnya terbuka": tanpa perintah dari ESP32, saklar terbuka dan kipas tidak dapat listrik. Alat yang aman: kalau otaknya mati, mesinnya ikut berhenti.

---

### Isi Zip Proyek Kelompok
| File / folder | Untuk apa | Hari ini |
|---|---|---|
| `firmware/` | Program ESP32 (buka di Arduino IDE) | **Dipakai**: isi WiFi, upload |
| `index.html` | Dashboard kelompok | **Dibuka** di browser |
| `style.css` | Warna & tampilan dashboard | Nanti di P13 |
| `api.js` | "Kabel" ke server | **Jangan diubah** |
- Zip dari tutor sudah berisi **Device ID** kelompok kalian (mis. `sma-04`). Ekstrak dulu, **jangan** dibuka dari dalam zip.

---

### Yang Kamu Isi Cuma Ini
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-04";       // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // Di isi sesuai dengan nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // Di isi sesuai dengan password WiFi

#define DHT_PIN 13                           // ganti sesuai pemasangan kabel DHT22
#define RELAY_PIN 14                         // ganti sesuai pemasangan modul relay
```
- Isi **2 baris WiFi**. Huruf besar/kecil & spasi harus **persis**.
- `DHT_PIN` & `RELAY_PIN` cukup **dicek**: 13 dan 14 = sesuai Peta Rakitan.
- Bagian `JANGAN UBAH` (alamat server, kunci API) sudah diurus tutor.

> 🗣️ SPEAKER NOTES: Ini potongan dari firmware proyek. Program lengkapnya sudah jadi; siswa tidak menulis kode. ESP32 hanya bisa WiFi 2,4 GHz: pakai WiFi kelas yang ditulis di papan.

---

### Upload Firmware Proyek
1. Buka folder kelompok → `firmware` → `sma_room_monitor` → **double-click** `sma_room_monitor.ino`.
2. Isi `WIFI_SSID` dan `WIFI_PASSWORD` sesuai papan tulis.
3. **Select Board** → **ESP32 Dev Module** + port ESP32 → klik **Upload (→)**.
4. Buka **Serial Monitor** (`Ctrl+Shift+M` / Mac `⌘+Shift+M`) → **115200 baud**.
- Macet di `Connecting.....`? Tahan tombol **BOOT** sampai muncul `Writing at ...`.

---

### Membaca Laporan ESP32
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
| Muncul | Artinya | Tindakan |
|---|---|---|
| Titik-titik `.....` terus | Belum masuk WiFi | Cek ejaan SSID/password, WiFi harus 2,4 GHz |
| `kode respons: 200` | Server **menerima** data | Buka dashboard! |
| `kode respons: 401` | Kunci server salah | Bagian JANGAN UBAH tersentuh → ambil file asli dari zip |
| `kode respons: -1` (angka minus) | Data tidak sampai server | WiFi ada, tapi internetnya tidak jalan |
| `Gagal baca sensor DHT22` | WiFi beres, sensor diam | Cek 3 kabel DHT22, terutama **out → D13** |

---

### Cek Cepat: Relay atau Sensor yang Bermasalah?
- Firmware jalan tapi ada bagian yang aneh? Upload **program tes jadi** dulu, tidak perlu diubah:
  - `P11_1_TesRelay.ino`: relay harus **klik** tiap 2 detik, kipas ikut berputar–berhenti.
  - `P11_2_TesDHT22.ino`: Serial menampilkan suhu & kelembapan tiap 2 detik.
- Tes lolos → rakitan beres. Upload lagi firmware proyek.

File cek cepat: `P11_1_TesRelay.ino`, `P11_2_TesDHT22.ino` (ada di linktr.ee/InspiraLabs_SMA)

> 🗣️ SPEAKER NOTES: Slide ini dipakai hanya untuk kelompok yang bermasalah, tidak perlu dikerjakan semua. Program tes = alat ukur seperti factory test di pabrik: kalau tes relay lolos tapi kipas di firmware tidak jalan, berarti rakitan beres dan yang perlu dicek pengaturan dashboard (dibahas P12).

---

### Tanya Jawab (+2)

**Serial Monitor cuma menulis titik-titik terus, tidak pernah muncul "Terhubung!". Sebutkan 2 kemungkinan penyebabnya.**

> 🗣️ SPEAKER NOTES: Topik 2 — Upload Firmware Proyek. Minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: nama/password WiFi salah ketik (huruf besar/kecil, spasi), WiFi-nya 5 GHz, terlalu jauh dari router, atau WiFi minta login lewat browser.

---

### Challenge 🟢 Easy — "Online!" (+5)

**TOPIK 2 DARI 3 — CHALLENGE 🟢**

1. Isi `WIFI_SSID` dan `WIFI_PASSWORD`, upload firmware proyek.
2. Buktikan di Serial Monitor: `Terhubung!` dan `kode respons: 200`.
3. Buka `index.html` kelompok: angka suhu & kelembapan muncul.
4. Tunjukkan ke tutor (atau screenshot Serial + dashboard berdampingan).

---

### Perjalanan Data: Sensor sampai Dashboard
```
[DHT22] → [ESP32] ──WiFi──► [Server InspiraLabs] ◄── [Dashboard kelompok]
           tiap ±4 detik lapor:                       ambil data terbaru,
           Device ID + suhu + kelembapan              tampilkan di layar
```
- ESP32 dan dashboard **tidak bicara langsung**. Keduanya lewat **server**.
- **Device ID** (mis. `sma-04`) = "alamat rumah" data kelompokmu di server.
- Persis seperti ojol: HP driver lapor posisi ke server, aplikasi kamu mengambilnya dari server.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik. Bandingkan dengan tebakan siswa di awal sesi. Kenapa tiap ±4 detik: DHT22 hanya boleh dibaca tiap ≥2 detik, dan server melayani semua kelompok sekaligus.

---

### Dashboard Kelompok Online
- Buka `index.html` di folder kelompok, atau dari HP: **`sma-0X.inspiralabs.id`** (X = nomor Device ID).
- Kartu suhu otomatis berwarna: **Dingin** di bawah 22°C, **Normal** sampai 29°C, **Panas** di atasnya. Di atas 32°C muncul **banner peringatan**.
- Titik **Online** = dashboard tersambung ke server (bukan tanda ESP32 hidup).
- Tombol **Kontrol Fan** sudah ada, tapi butuh **PIN kelompok**. Bocoran P12: kipasnya bakal kalian kendalikan dari HP!

> 🗣️ SPEAKER NOTES: Tampilkan dashboard tutor di proyektor, lalu genggam sensor tutor supaya kelas melihat angkanya naik. Rayakan setiap kelompok yang dashboard-nya pertama kali menampilkan angka.

---

### Tanya Jawab (+2)

**Dashboard menulis "Online", tapi angka suhu tidak berubah sama sekali walau sensor digenggam lama. Bagian mana yang mungkin bermasalah?**

> 🗣️ SPEAKER NOTES: Topik 3 — Dashboard Online. Minta 2–3 siswa menjawab (+2 per siswa). Jawaban: "Online" hanya berarti dashboard bisa menghubungi server. Kalau angka diam, ESP32 tidak mengirim data baru: cek Serial Monitor (WiFi putus? Gagal baca sensor?) atau dashboard yang dibuka milik Device ID lain.

---

### Challenge 🟡 Medium — "Uji Sensor Hidup" (+10)

**TOPIK 3 DARI 3 — CHALLENGE 🟡**

1. **Genggam** sensor DHT22 selama 20 detik. Catat: berapa detik sampai angka suhu di dashboard mulai naik?
2. **Tiup** pelan sensornya. Mana yang berubah lebih cepat: suhu atau kelembapan?
3. Jawab: kenapa angka di dashboard tidak langsung berubah saat sensor digenggam?
4. Tunjukkan catatanmu ke tutor.

---

### Challenge 🔴 Hard — "Lepas dari Laptop" (+15)

**TOPIK 3 DARI 3 — CHALLENGE 🔴**

1. Cabut ESP32 dari laptop, colok ke **power bank** atau charger HP 5V.
2. Buka **`sma-0X.inspiralabs.id`** di **HP** kalian.
3. Genggam sensor: buktikan angka di HP tetap naik.
4. Jawab: kenapa alat tetap jalan padahal laptop sudah dicabut? Kalau alat ini dibawa ke rumah, apa yang harus diubah supaya tetap online?

Simpan hasil sebagai `P11_NamaSiswa_C3` (video pendek: alat + power bank + dashboard di HP)

---

### Peta Petualangan IoT
```
[P10] Kenalan ESP32 + instal Arduino IDE + kedip LED pertama                     ✅
[P11] Rakit DHT22 + relay + kipas, upload firmware, data tampil di dashboard kelompok   ← HARI INI
[P12] Kontrol kipas dari dashboard: manual & otomatis
[P13] Kustom dashboard + website online + Demo Day
```

> 🗣️ SPEAKER NOTES: Rakitan jangan dibongkar: dikumpulkan ke tutor dalam kotak, kabel tetap tertancap. Folder kelompok yang sama dipakai lagi di P12 dan P13.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMA**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 11" di Linktree sudah mengarah ke Google Form P11 SMA.

---

### Terima kasih!

**SAMPAI JUMPA DI P12!**

MINGGU DEPAN (P12): **Kontrol Kipas dari Dashboard: Manual & Otomatis**
