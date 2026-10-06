# SMP — Pertemuan 12: Terbangkan Datanya ke Internet! (WiFi + Dashboard)

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide.
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Jawaban challenge & post-test hanya ada di materi.md. -->

---

### Slide 1 — Alat Kita Masih "Kesepian" 😢
- Sekarang data suhu cuma muncul di **laptop yang tercolok kabel**.
- Gimana kalau mau lihat suhu kelas dari **HP di rumah**?
- Jawabannya: ESP32 punya **WiFi** bawaan!

---

### Slide 2 — Perjalanan Data 🚀
```
DHT22 → ESP32 → WiFi → Internet → Server InspiraLabs → Dashboard (web kalian)
```
- **Server** = komputer yang selalu menyala di internet, tugasnya **menyimpan** data semua kelompok.
- **Dashboard** = halaman web (yang kalian buat di P5–P8!) yang **menampilkan** data dari server.

---

### Slide 3 — Program Mini: Konek ke WiFi 📶
```cpp
#include <Arduino.h>
#include <WiFi.h>

const char* WIFI_SSID     = "ISI_DI_SINI";   // nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // password WiFi

void setup() {
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);      // mulai menyambung
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {    // SELAMA belum tersambung...
    delay(500);
    Serial.print(".");                       // ...tulis titik
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());            // alamat ESP32 di jaringan
}

void loop() {
}
```

---

### Slide 4 — Kata-Kata Baru 📖
| Kode | Bahasa manusia |
|---|---|
| `const char* WIFI_SSID = "..."` | Kotak berisi **teks** (nama WiFi). `const` = isinya tidak berubah |
| `while (...) { ... }` | **Ulangi terus SELAMA** syaratnya benar |
| `!=` | **tidak sama dengan** |
| `WL_CONNECTED` | Status "sudah tersambung" |
| IP (`192.168.1.23`) | **Alamat rumah** ESP32 di jaringan WiFi |

> 🗣️ SPEAKER NOTES: Titik-titik `.....` itu tanda ESP32 sedang mencoba. Kalau titiknya tidak berhenti lebih dari 20 detik → ada masalah (lihat Hook).

---

### Slide 5 — Data Dikirim Seperti "Surat" ✉️
Proyek akhir mengirim data ke server dalam bentuk **JSON**:
```json
{"deviceId":"smp-1","temp":28.40,"humidity":65.20,"ip":"192.168.1.23"}
```
- `deviceId` = **nama pengirim** (kelompok kalian). Harus **beda** tiap kelompok!
- `temp` = suhu, `humidity` = kelembapan.
- Server membalas dengan **kode**: `200` = surat **diterima** ✅.

---

### Slide 6 — Peta Warna Proyek Akhir 🎨
Buka `smp/firmware/smp_room_monitor.ino`. Warnai bagian-bagiannya:

| Warna | Bagian di file | Dipelajari di |
|---|---|---|
| 🟦 Biru | `#define DHT_PIN 4`, `setup()`, `loop()`, `Serial.begin`, `Serial.print` | **P10** |
| 🟩 Hijau | `DHT dht(...)`, `dht.begin()`, `readTemperature()`, `readHumidity()`, `isnan` | **P11** |
| 🟨 Kuning | `WiFi.begin`, `while (WiFi.status() != WL_CONNECTED)` | **Hari ini (Slide 3)** |
| 🟥 Merah | `SERVER_URL`, `API_KEY`, `HTTPClient`, `http.POST(json)` | **Baru**, "kabel" ke server, **JANGAN UBAH** |

> 🗣️ SPEAKER NOTES: Ini momen "oh ternyata aku sudah paham sebagian besar!". Tunjukkan bahwa yang benar-benar baru hanya bagian merah, dan itu tidak perlu diubah. Satu hal baru di file: `millis()` → anggap saja "jam di dalam ESP32", dipakai supaya kirim data tiap 4 detik tanpa `delay`.

---

### Slide 7 — Praktek: Isi 4 Baris Identitas ✍️
```cpp
const char* DEVICE_ID     = "smp-1";          // dari HANDOUT, sesuai kelompok
const char* WIFI_SSID     = "NamaWiFiKelas";
const char* WIFI_PASSWORD = "PasswordWiFi";
#define DHT_PIN 4
```
1. Buka folder `smp/firmware` lewat PIO Home → Open Project.
2. Isi 4 baris di atas → **Upload** → **Serial Monitor**.
3. Tunggu sampai muncul `Kirim data -> kode respons: 200`.
4. Buka dashboard → angka kelompokmu muncul! 🎉

> 🗣️ SPEAKER NOTES — error umum: > - Titik-titik tidak berhenti → WiFi 5 GHz, password salah, huruf besar/kecil SSID salah.
> - `kode respons: -1` → WiFi tersambung tapi tidak bisa ke internet (cek kuota/hotspot) atau `SERVER_URL` diubah.
> - `kode respons: 401` → `API_KEY` diubah siswa.
> - Dashboard tidak update padahal 200 → `DEVICE_ID` di firmware ≠ `MY_DEVICE_ID` di `api.js`.

---

### Slide 8 — Peta Proyek Akhir 🗺️
```
[P9]  Rakit rangkaian, kenal pin              ✅
[P10] setup/loop, #define, Serial.println     ✅
[P11] Baca DHT22 + cek isnan                  ✅
[P12] WiFi + kirim ke dashboard               ← HARI INI
[P13] Pamerkan proyekmu!
```

---

### Challenge 🟢 Easy — "Data Pertamaku Terbang"
Isi 4 baris identitas, upload, dan buktikan angka suhu kelompokmu **muncul di dashboard**. Tiup sensor → angka di dashboard ikut berubah (tunggu ±4 detik).

---

### Challenge 🟡 Medium — "Dokter Serial Monitor" 🩺
Cocokkan 3 tampilan Serial Monitor ini dengan penyebabnya:

| Tampilan | Penyebab (pilih: A / B / C) |
|---|---|
| 1. `Menghubungkan ke WiFi.......................` (tidak berhenti) | ? |
| 2. `Gagal baca sensor DHT22, coba lagi 4 detik lagi...` | ? |
| 3. `Kirim data -> kode respons: -1` | ? |

- **A.** Kabel sensor longgar / pin salah
- **B.** WiFi tersambung, tapi tidak bisa sampai ke server (internet mati)
- **C.** Nama/password WiFi salah atau WiFi-nya 5 GHz

Bonus: praktikkan nomor 2. Cabut kabel out DHT22 sebentar, lihat pesannya, lalu colok lagi.

---

### Challenge 🔴 Hard — "Pengatur Waktu Kirim" ⏱️
Kerjakan di **program mini Slide 3** (bukan di file proyek akhir):
1. Tambahkan pembacaan DHT22 dari P11 ke `loop()` program mini.
2. Buat variabel `int kiriman = 0;` di atas `setup()`. Setiap kali data berhasil dibaca, tambah 1 dan tampilkan: `Data ke-1: 28.40 C`, `Data ke-2: ...`
3. Buat jedanya **5 detik**.
4. Lihat proyek akhir: cari angka `4000` di `SEND_INTERVAL_MS`. Itu artinya apa?

---

### 🎬 SLIDE HOOK — TIM INSPIRALABS MULAI REKAM

> 🗣️ SPEAKER NOTES: Template hook #10 (Curiosity & Secrets — Rasa Penasaran)

# "POV: Kamu akhirnya nemuin cara bikin ESP32 nggak stuck 'Menghubungkan WiFi…' lagi." 😮‍💨

Isi slide:
- 📶 **ESP32 hanya bisa WiFi 2.4 GHz**, bukan 5 GHz. Hotspot HP? Set ke 2.4 GHz / "Maximize compatibility" (iPhone).
- 🔠 Nama WiFi **peka huruf besar-kecil**: `WiFi_Kelas` ≠ `wifi_kelas`. Spasi di akhir juga dihitung!
- 📍 Jarak: pindahkan ESP32 lebih dekat ke router saat uji coba.
- 🧪 Trik engineer: **uji WiFi pakai program mini dulu** (cuma connect + print IP). Kalau program mini sudah tersambung, baru pasang ke proyek besar. Masalah besar dipecah jadi masalah kecil.

---

### 📝 Post-Test

5 soal pilihan ganda. Kerjakan sendiri, ya!

---

### Post-Test — Soal 1

**1. ESP32 hanya bisa tersambung ke WiFi dengan frekuensi…**
A. 5 GHz  
B. 2.4 GHz  
C. 4G  
D. Semua frekuensi

---

### Post-Test — Soal 2

**2. Arti `while (WiFi.status() != WL_CONNECTED)` adalah…**
A. Jika WiFi tersambung, matikan ESP32  
B. Kirim data sebelum tersambung  
C. Hapus WiFi  
D. Ulangi terus SELAMA WiFi belum tersambung

---

### Post-Test — Soal 3

**3. Dalam data JSON `{"deviceId":"smp-1","temp":28.4,...}`, bagian `deviceId` berfungsi sebagai…**
A. Suhu ruangan  
B. Password WiFi  
C. Nama pengirim (identitas kelompok)  
D. Alamat server

---

### Post-Test — Soal 4

**4. Serial Monitor menampilkan `Kirim data -> kode respons: 200`. Artinya…**
A. Data diterima server dengan sukses  
B. Ada 200 error  
C. Suhu 200 derajat  
D. WiFi terputus

---

### Post-Test — Soal 5

**5. Di file proyek akhir, bagian mana yang BOLEH diubah siswa?**
A. `SERVER_URL` dan `API_KEY`  
B. `DEVICE_ID`, `WIFI_SSID`, `WIFI_PASSWORD`, `DHT_PIN`  
C. Semua baris `http.POST`  
D. Tidak boleh ada yang diubah
