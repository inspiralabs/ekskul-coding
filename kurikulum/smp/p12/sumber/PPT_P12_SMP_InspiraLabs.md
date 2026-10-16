# P12 SMP — Data Muncul di Dashboard & Kustom Website-mu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMP | nomor slide".
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

**P12 SMP**

# Data Muncul di Dashboard & Kustom Website-mu

Data suhu kelasmu muncul di website kalian sendiri, lengkap dengan nama dan wajah kalian.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?

Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1 (slide Tips Engineer).

---

### Apa yang kita capai hari ini?

- **01 Data ke Dashboard**: Alat jalan pakai power bank, angkanya tampil di website.
- **02 Kustom Dashboard**: Nama, warna, dan foto kelompok kalian.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik di VS Code |
| **Desainer** | Memilih 3 warna |
| **Fotografer** | Foto kelompok + kecilkan ukurannya |
| **Pengecek** | Cek ejaan nama & aturan folder |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Semua keputusan desain (nama alat, warna) diputuskan bersama, Operator hanya mengetik.

---

### Alat Kita Masih "Kesepian"
- P11: angka suhu cuma terlihat di **Serial Monitor** laptop.
- Padahal firmware **sudah mengirim** angkanya ke internet (`200`).
- Hari ini: angka itu tampil di **website kalian sendiri**.

---

### Perjalanan Data
```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```
- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk Device ID kalian.

> 🗣️ SPEAKER NOTES: Server = komputer yang selalu menyala di internet, menyimpan data semua alat. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

---

### Praktek Bareng: Buka Dashboard-mu
1. Colok ESP32 ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah!

```wiring
Judul: Alat jalan sendiri dengan power bank
Komponen: ESP32 DevKit V1, modul DHT22 3-pin, power bank + kabel USB
Koneksi:
- DHT22 "+" → ESP32 3V3 (kabel merah)
- DHT22 "out" → ESP32 D4 (kabel kuning)
- DHT22 "−" → ESP32 GND (kabel hitam)
- port USB ESP32 → power bank (kabel USB)
Sorot: tidak ada laptop ; ikon WiFi kecil menuju awan "Server" lalu ke layar dashboard
```

> 🗣️ SPEAKER NOTES: "Tanpa laptop" bukan berarti tanpa listrik: power bank yang memberi listrik. Sebelum ada data, dashboard menampilkan angka contoh (26°C, 60%). Angka itu berubah kalau server sudah menerima data dari Device ID kelompok itu. Rayakan angka pertama di layar (quick win).

---

### Tips Engineer: Kalau Dashboard Diam

| Gejala | Coba ini |
|---|---|
| Angka tetap 26°C / 60% | Colok ke laptop, cek Serial Monitor: harus `200` |
| Tidak berubah saat ditiup | Tiup lebih lama, tunggu 10 detik |
| ESP32 di power bank mati sendiri | Ganti power bank / colok laptop |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: website hanya menampilkan apa yang sudah sampai di server, seperti website cuaca yang mengambil data dari stasiun cuaca. Ingatkan kembali tebakan siswa tadi. Lainnya: Serial Monitor macet di titik-titik → WiFi salah / 5 GHz / sinyal lemah (tabel P11); data bukan milik alat kita → folder tertukar, cek nama folder & Device ID; power bank mati sendiri karena mode hemat (arus kecil dianggap sudah penuh).

---

### Forum Diskusi Live Coding

**Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 1 — Data ke Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge. Jawaban: ya, selama ESP32 dapat listrik (power bank) dan WiFi. Program tersimpan di ESP32. Website bisa dibuka dari perangkat lain.

---

### Challenge 🟢 Easy — "Data Pertamaku Muncul" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. Nyalakan alat pakai **power bank** (tanpa laptop).
2. Buka dashboard: angka suhu kalian **muncul**.
3. Tiup sensor → angka ikut berubah. Tunjukkan ke tutor!

---

### Peta Dashboard: Boleh & Jangan

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `foto-kelompok.jpg` | ✅ Tambahkan |
| `api.js` | ❌ **Jangan** |

Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> 🗣️ SPEAKER NOTES: api.js = "kabel" dashboard ke server; saat website online selalu diganti versi asli tutor. Bagian <script> di bawah index.html juga jangan diubah (pengambil data sensor). icon.webp biarkan. Cara membuka di VS Code: klik kanan file → Open With Code, atau File → Open Folder → smp-XX.

---

### Kustom 1: Profil & Judul
Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```
- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> 🗣️ SPEAKER NOTES: Nama anggota sudah diisi tutor, minta Pengecek mengecek ejaannya. Peserta individu: tulis nama sendiri dan nama alat. Tips cari: Ctrl+F lalu ketik "PROFIL". Contoh tag lengkap ada di file (div class="kartu-profil" berisi img, h2, p).

---

### Kustom 2: Warna di :root
Buka `style.css`, paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Klik **kotak warna kecil** di depan kode → pilih warna.
- Titik koma `;` jangan terhapus.

> 🗣️ SPEAKER NOTES: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS. Klik kotaknya → muncul pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah #. Ajak Desainer memilih 3 warna yang cocok dan tetap mudah dibaca.

---

### Kustom 3: Foto Kelompok
1. Kecilkan: **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
2. Beri nama **persis**: `foto-kelompok.jpg`.
3. Simpan di folder `smp-XX`, sebelah `index.html`.
4. Refresh browser → foto muncul!

> 🗣️ SPEAKER NOTES: Kesalahan paling sering: Foto-Kelompok.JPG (huruf besar), "foto kelompok.jpg" (spasi), foto-kelompok.jpeg, foto-kelompok.jpg.jpg (akhiran tersembunyi di Windows: nyalakan View → File name extensions), atau foto masih di Downloads. Kalau nama salah, kotak foto hilang. Foto belum ada? Boleh menyusul di P13.

---

### Forum Diskusi Live Coding

**Foto sudah dimasukkan, tapi tidak muncul. Apa saja kemungkinan penyebabnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kustom Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Dashboard Punya Kami" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root`.
4. `foto-kelompok.jpg` tampil.

Angka sensor harus **tetap muncul** setelah diubah!

---

### Aturan Serah Folder
Website kalian akan **online** di **`smp-XX.inspiralabs.id`**!

1. Halaman utama tetap **`index.html`**.
2. **Semua** file ada di dalam folder `smp-XX`.
3. Foto bernama **`foto-kelompok.jpg`**, sudah dikecilkan.
4. `api.js` **tidak** diubah.
5. Hapus folder **`firmware/.pio`**. Total maksimal **5 MB**.

> 🗣️ SPEAKER NOTES: Contoh alamat: https://smp-07.inspiralabs.id. Cek ukuran: klik kanan folder → Properties → Size. Folder firmware/.pio dibuat otomatis oleh PlatformIO saat Build, bisa ratusan MB, aman dihapus (dibuat ulang saat Build berikutnya). Zip diserahkan di P13. Untuk siswa yang sudah mahir: tidak boleh pakai npm/instalasi; kalau butuh library, pakai link CDN.

---

### Challenge 🔴 Hard — "Inspektur Folder" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Tutor menampilkan isi folder khayalan `smp-99`.
2. Temukan **minimal 4** pelanggaran aturan.
3. Tulis cara memperbaikinya.
4. Cek folder kalian sendiri: berapa MB?

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  (selesai)
[P12] Data muncul di dashboard + kustom dashboard   ← HARI INI
[P13] Rapikan alat (casing) + showcase
```

> 🗣️ SPEAKER NOTES: Minggu depan siswa membawa kotak bekas (kardus kecil, kotak plastik, kotak pensil bekas) untuk casing alat, plus selotip/double tape. Kotak logam atau kaleng tidak boleh.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMP. Post-test dikerjakan sendiri-sendiri.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Rapikan Alat & Showcase Proyek Akhir** (bawa kotak bekas untuk casing!)
