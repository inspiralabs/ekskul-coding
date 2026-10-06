# SMP — Pertemuan 13: Showcase Proyek Akhir 🏆

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 13 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menyelesaikan & mempresentasikan proyek akhir |
| Penilaian | Presentasi proyek akhir & pemahaman konsep |
| Potongan proyek akhir yang dibedah | Seluruh proyek: `smp/firmware/smp_room_monitor.ino` + dashboard `smp/index.html`. Rekap pola **Input → Proses → Output**. |

## Alat & bahan (per kelompok)

- Alat proyek akhir dari P12 (ESP32 + DHT22) + kabel USB / power bank
- Laptop dengan dashboard kelompok terbuka
- Untuk Hard: 1 LED + resistor di **D2** (atau pakai LED bawaan board)
- Proyektor untuk menampilkan dashboard saat presentasi

## Persiapan tutor sebelum kelas

1. Pastikan backend online & semua Device ID kelompok sudah pernah mengirim data (cek di P12).
2. Siapkan **hotspot cadangan** 2.4 GHz.
3. Print **rubrik penilaian** (lihat Khusus Tutor).
4. Siapkan urutan presentasi kelompok (undian).

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Cek semua alat menyala & data masuk dashboard |
| 5–15 | Rekap konsep | Slide 2–4: perjalanan 4 minggu + pola Input → Proses → Output |
| 15–30 | Finishing + Challenge | Easy wajib, Medium (latihan presentasi), Hard (opsional) |
| 30–50 | Showcase | ±5 menit per kelompok (demo + 3 kalimat + 1 pertanyaan) |
| 50–55 | 🎬 Hook | Slide hook |
| 55–63 | Post-test | 5 soal pilihan ganda |
| 63–70 | Refleksi & penutup | Slide refleksi + foto bersama |

---

## Slide

### Slide 1 — Hari Ini Kalian Jadi Engineer! 👷
- 4 minggu lalu: belum pernah pegang ESP32.
- Hari ini: alat kalian **mengirim suhu ruangan ke internet**.
- Agenda: rapikan → pamerkan → refleksi.

### Slide 2 — Perjalanan Kita 🛤️
| Pertemuan | Yang kalian kuasai |
|---|---|
| P9 | Pin, breadboard, LED, resistor |
| P10 | `setup()` / `loop()`, `#define`, `Serial.println` |
| P11 | Membaca DHT22, `isnan()` |
| P12 | WiFi, kirim data ke dashboard |

### Slide 3 — Rahasia Semua Alat IoT: Input → Proses → Output 🔁
```
INPUT              PROSES                 OUTPUT
DHT22 membaca  →   ESP32 mengecek isnan,  →  Data muncul di dashboard
suhu & lembap      menyusun "surat" JSON      (dan Serial Monitor)
```
- Lampu otomatis, smartwatch, AC pintar: **semuanya pola yang sama**.

### Slide 4 — Tunjuk Bagiannya! 👉
Di file proyek akhir, tunjuk baris yang termasuk:
- **INPUT** → `dht.readTemperature()`, `dht.readHumidity()`
- **PROSES** → `if (isnan(...))`, `String json = ...`
- **OUTPUT** → `Serial.print(...)`, `http.POST(json)`

> Catatan tutor: Tanya acak ke tiap kelompok. Ini pemanasan untuk presentasi.

### Slide 5 — Format Presentasi: 3 Kalimat Sakti 🎤
1. "Alat kami bernama **___**, gunanya untuk **___**."
2. "Bagian paling susah adalah **___**, kami mengatasinya dengan **___**."
3. "Kalau dikembangkan, kami ingin menambah **___**."

Lalu **demo**: tiup sensor → semua lihat angka di dashboard berubah.

### Slide 6 — Refleksi ✨
- Satu hal yang paling seru selama belajar hardware?
- Satu error yang paling bikin pusing, dan bagaimana kamu memperbaikinya?
- Kalau bisa bikin alat IoT apa saja, kamu mau bikin apa?

---

## Challenge

### 🟢 Easy — "Siap Tampil" (wajib)
Checklist sebelum showcase:
- [ ] Serial Monitor menampilkan `kode respons: 200`
- [ ] Dashboard menampilkan data kelompokmu
- [ ] Kabel rapi, tidak ada yang longgar
- [ ] Alat bisa menyala pakai power bank (tanpa laptop)

### 🟡 Medium — "Latihan 3 Kalimat"
Isi 3 kalimat sakti (Slide 5) di kertas, lalu latihan presentasi ke kelompok sebelah. Kelompok sebelah wajib memberi **1 pertanyaan**.

### 🔴 Hard — "Lampu Tanda Terkirim" 💡 (opsional)
Buat **salinan** file proyek akhir (jangan ubah aslinya!). Tambahkan LED di **D2** yang **berkedip sekali setiap data berhasil terkirim** (kode respons 200).
Petunjuk:
1. Tambahkan `#define LED_PIN 2` dan `pinMode(LED_PIN, OUTPUT);`.
2. Cari baris `int responseCode = http.POST(json);`.
3. Di bawahnya, pakai `if (responseCode == 200) { ... }` untuk menyalakan LED sebentar.

---

## 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

**Template hook #18 (Social Proof & Authority — Bukti & Otoritas)**

# "Belajar IoT dari nol sampai bisa bikin alat pemantau suhu sendiri pakai cara ini." 🚀

Isi slide:
- 🪜 **Roadmap 4 anak tangga** yang dipakai kelas kami:
  1. **Output dulu** → bikin LED nyala (paling cepat terlihat hasilnya = semangat naik).
  2. **Input** → baca 1 sensor saja sampai lancar.
  3. **Koneksi** → WiFi, uji pakai program mini.
  4. **Tampilkan** → kirim ke dashboard.
- 🔁 Kuncinya pola **Input → Proses → Output**, berlaku untuk hampir semua alat pintar.
- ⏱️ Satu anak tangga per minggu. **Jangan loncat** langsung ke proyek besar.
- 🧑‍🎓 Bukti: anak SMP usia 12–15 tahun bisa menyelesaikannya dalam **5 pertemuan**.

---

## Post-Test (5 soal, pilihan ganda)

**1. Pada proyek akhir, sensor DHT22 termasuk bagian…**
A. Output B. Server C. Dashboard D. Input

**2. Baris yang berfungsi mengirim data ke server adalah…**
A. `dht.begin();` B. `pinMode(LED_PIN, OUTPUT);` C. `http.POST(json);` D. `delay(500);`

**3. Urutan perjalanan data yang benar adalah…**
A. Dashboard → Server → ESP32 → DHT22
B. DHT22 → ESP32 → WiFi/Internet → Server → Dashboard
C. ESP32 → DHT22 → Dashboard → Server
D. Server → DHT22 → ESP32 → Dashboard

**4. Dashboard tidak menampilkan data kelompokmu, padahal Serial Monitor menulis kode 200. Penyebab paling mungkin adalah…**
A. Sensor rusak B. `DEVICE_ID` di firmware berbeda dengan `MY_DEVICE_ID` di dashboard C. Resistor terbalik D. LED tidak menyala

**5. Perhatikan kode:**
```cpp
if (responseCode == 200) {
  digitalWrite(LED_PIN, HIGH);
}
```
**Kapan LED menyala?**
A. Saat data berhasil diterima server B. Saat suhu 200 derajat C. Saat WiFi terputus D. Setiap 200 detik

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge Hard
Tambahan pada salinan `smp_room_monitor.ino` (bagian lain tetap sama):
```cpp
// potongan — tambahkan di atas, dekat #define DHT_PIN
#define LED_PIN 2

// potongan — di dalam setup()
pinMode(LED_PIN, OUTPUT);

// potongan — tepat setelah: int responseCode = http.POST(json);
if (responseCode == 200) {
  digitalWrite(LED_PIN, HIGH);
  delay(200);
  digitalWrite(LED_PIN, LOW);
}
```
Catatan: `delay(200)` di sini aman karena hanya 0,2 detik dan hanya sekali tiap 4 detik.

### Rubrik penilaian showcase (skor 1–4)
| Aspek | 1 | 4 |
|---|---|---|
| Alat berfungsi | Tidak menyala | Data tampil di dashboard & berubah saat sensor ditiup |
| Pemahaman konsep | Tidak bisa menunjuk bagian kode | Bisa menunjuk Input/Proses/Output di kode |
| Presentasi | Tidak menyampaikan 3 kalimat | 3 kalimat lengkap + menjawab pertanyaan |
| Kerja sama | 1 orang mengerjakan semua | Semua anggota berperan |

### Kunci Post-Test
1. D 2. C 3. B 4. B 5. A

### Pembahasan singkat
- No. 4: kode 200 = server menerima. Kalau dashboard kosong, berarti dashboard sedang "melihat" kelompok lain (Device ID tidak cocok).
- No. 5: `==` membandingkan; 200 adalah kode "sukses" dari server.
