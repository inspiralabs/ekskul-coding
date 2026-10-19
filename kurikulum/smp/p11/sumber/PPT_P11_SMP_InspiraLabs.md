# P11 SMP — Pasang Firmware Proyek & Jadi Dokter Kabel

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P11 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide. -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P11 SMP**

# Pasang Firmware Proyek & Jadi Dokter Kabel

Saatnya memasang program proyek akhir, dan belajar memperbaiki alat seperti engineer.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Kalau alat tiba-tiba berhenti bekerja, bagaimana teknisi tahu bagian mana yang rusak tanpa membongkar semuanya?

Alat kita bisa "bercerita" tentang masalahnya. Kita tinggal belajar membacanya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 2 (slide Tips Engineer).

---

### Apa yang kita capai hari ini?

- **01 Upload Firmware Proyek**: Alat membaca suhu dan mengirimnya ke internet.
- **02 Jadi Dokter Kabel**: Membaca gejala, lalu memperbaiki rakitan.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Perakit** | Mengurus kabel & sensor |
| **Pengecek** | Membacakan checklist |
| **Operator** | Mengetik WiFi, Upload, Serial Monitor |
| **Pencatat** | Mencatat angka & hasil challenge |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Pastikan Operator Topik 1 dan Topik 2 orangnya berbeda.

---

### Dari Program Latihan ke Program Proyek
- P10: program latihan → ESP32 "ngobrol" dengan **laptop**.
- Hari ini: **firmware** = program resmi alat kita.
- Firmware membaca sensor **dan** mengirim angkanya ke **internet**.
- Kita **tidak menulis** kodenya. Kita memasang dan merawatnya.

---

### Folder Proyekmu
Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Dipakai |
|---|---|
| `firmware/` (program ESP32) | **Hari ini** |
| `index.html`, `style.css` (website) | P12 |

**smp-XX = Device ID** = nama alat kalian di internet.

> 🗣️ SPEAKER NOTES: Tunjukkan tabel Device ID di docs/HANDOUT_SISWA.md. Device ID sudah diisi tutor, tidak boleh diganti dan tidak boleh sama dengan kelompok lain (seperti plat nomor motor). File lain di folder: api.js (jangan diubah), icon.webp, README.md. Kalau folder belum ada: zip smp-XX.zip → klik kanan → Extract All. Jangan pakai salinan umum dari Drive.

---

### Zona Hijau & Zona Merah
Buka `firmware/smp_room_monitor/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> 🗣️ SPEAKER NOTES: Zona hijau itu seperti kolom isian formulir: isi di tempat yang disediakan saja. Zona merah berisi SERVER_URL dan API_KEY (alamat & kunci server). Kalau diubah, data ditolak. Tunjukkan: hanya ganti tulisan ISI_DI_SINI, tanda kutip " " jangan terhapus.

---

### Praktek Bareng: Upload Firmware Proyek
1. Cek rakitan: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka folder `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

```wiring
Judul: Rakitan standar proyek akhir SMP
Komponen: ESP32 DevKit V1, breadboard, modul DHT22 3-pin
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
Sorot: D4 = angka 4 di "#define DHT_PIN 4"
```

> 🗣️ SPEAKER NOTES: Nama WiFi harus persis: huruf besar-kecil dan spasi dihitung. Pengecek membandingkan huruf demi huruf dengan papan. LED di D2 boleh dilepas. Kalau Serial Monitor kosong, tekan tombol EN (reset) di board supaya pesan WiFi terlihat dari awal.

---

### Membaca "Cerita" ESP32
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
- Titik-titik = sedang mencari WiFi.
- **IP** = alamat ESP32 di WiFi (seperti nomor rumah).
- **200** = data **diterima** server, seperti centang dua di WhatsApp.

> 🗣️ SPEAKER NOTES: Baris suhu, kirim data, dan 200 berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal { }, abaikan saja. Rayakan angka 200 pertama tiap kelompok (quick win).

---

### Forum Diskusi Live Coding

**Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?**

> 🗣️ SPEAKER NOTES: Topik 1 — Upload Firmware Proyek. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: data dua alat tercampur di dashboard yang sama, seperti dua motor dengan plat nomor sama.

---

### Challenge 🟢 Easy — "Tiup & Catat" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. Catat suhu & kelembapan **sebelum** ditiup.
2. **Tiup** sensor 5 detik, catat lagi.
3. Mana yang naik lebih banyak? Kode responsnya berapa?

---

### Tips Engineer: Jadi Dokter Kabel
Dokter tidak menebak. Baca **gejala**, lalu cek **satu per satu**: listrik → kabel → pin → program.

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik. Ingatkan kembali tebakan siswa tadi. Gejala lain (urusan tutor): titik-titik tak berhenti juga terjadi kalau WiFi 5 GHz (ESP32 hanya bisa 2.4 GHz) → pindah ke hotspot 2.4 GHz; `kode respons: 401` → zona merah (API_KEY) berubah → extract ulang zip asli, isi WiFi lagi; suhu kadang muncul kadang gagal → kabel goyang/jumper hampir putus; tulisan acak ⸮⸮⸮ → pilih 115200 baud di Serial Monitor.

---

### Alat Dokter: Multimeter
Mode **bunyi** (minta tutor menyetel):
- Tempel ujung merah & hitam ke **dua ujung** satu kabel jumper.
- **Bunyi "tiit"** = kabel bagus.
- **Diam** = kabel putus di dalam. Buang!

> 🗣️ SPEAKER NOTES: Demo kabel jumper yang sengaja diputus: terlihat normal, tapi multimeter diam. Tes ini dilakukan dengan USB dicabut. Mode DC volt (20V) cukup didemokan tutor: merah di 3V3, hitam di GND → harus ±3,3V. Tegangan 3,3V aman disentuh.

---

### Alat Dokter: Program Cadangan
Program kecil untuk mencari masalah (tinggal upload):
- `P11_1_BacaDHT22.ino` → cek **sensor** saja.
- `P11_2_TesWiFi.ino` → cek **WiFi** saja.
- Masalah ketemu → **upload lagi firmware proyek**.

File program cadangan: folder `P11_1_BacaDHT22`, `P11_2_TesWiFi` (ada di linktr.ee/InspiraLabs_SMP)

> 🗣️ SPEAKER NOTES: P11_2_TesWiFi.ino juga perlu diisi nama & password WiFi. Cara pakai sama seperti P10: double-click file .ino-nya lalu Upload. Setelah masalah ketemu, buka lagi smp_room_monitor.ino dan Upload.

---

### Forum Diskusi Live Coding

**Serial Monitor macet di titik-titik WiFi. Mungkinkah kabel sensor penyebabnya? Bagaimana membuktikannya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Dokter Kabel. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: bukan, firmware menyambung WiFi dulu sebelum membaca sensor. Bukti: upload P11_2_TesWiFi.ino.

---

### Challenge 🟡 Medium — "Kartu Gejala" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

Pasangkan gejala dengan penyebabnya:

| Gejala | Penyebab |
|---|---|
| 1. Titik-titik WiFi tidak berhenti | ? |
| 2. `Gagal baca sensor DHT22…` | ? |
| 3. `kode respons: -1` | ? |

**A.** Kabel sensor longgar · **B.** WiFi tersambung, tapi internetnya mati · **C.** Password WiFi salah

Bonus: **cabut USB**, lepas kabel out, colok USB. Gejala nomor berapa yang muncul? Pasang lagi.

---

### Challenge 🔴 Hard — "Pindah Kaki Sensor" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. **Cabut USB**. Pindahkan kabel **out** dari **D4** ke **D27**.
2. Colok USB. Apa pesan di Serial Monitor?
3. Ubah **satu angka**: `#define DHT_PIN 4` → `27`. Upload. Suhu muncul lagi?
4. **Kembalikan** kabel ke D4 dan angka ke `4`.

```wiring
Judul: Kabel out DHT22 dipindah ke D27 (sementara)
Komponen: ESP32 DevKit V1, modul DHT22 3-pin
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D27 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
Sorot: D27 ada di sisi kiri, di bawah D26 ; angka di program harus ikut jadi 27
```

> 🗣️ SPEAKER NOTES: Tanyakan: kenapa angka DHT_PIN harus sama dengan pin kabelnya? Pastikan semua kembali ke D4 dan angka 4, lalu upload ulang, sebelum pulang.

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  ← HARI INI
[P12] Data muncul di dashboard + kustom dashboard
[P13] Rapikan alat (casing) + showcase
```

> 🗣️ SPEAKER NOTES: Firmware tetap tersimpan di ESP32. Minggu depan cukup colok ke power bank (tetap butuh listrik!). Minta siswa membawa foto kelompok (atau foto diri untuk peserta individu) untuk dashboard di P12.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 11" di Linktree sudah mengarah ke Google Form P11 SMP. Post-test dikerjakan sendiri-sendiri.

---

### Terima kasih!

**SAMPAI JUMPA DI P12!**

MINGGU DEPAN (P12): **Data Muncul di Dashboard & Kustom Website-mu** (bawa foto kelompok!)
