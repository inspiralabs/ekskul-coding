# P12 SMP — Data Muncul di Dashboard & Kustom Website-mu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar. -->

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

> 🗣️ SPEAKER NOTES: Lempar pertanyaan ke kelas dan tampung 2–3 tebakan siswa tanpa langsung dijawab. Jawabannya dibahas di Topik 1.

---

### Apa yang kita capai hari ini?

- **01 Data ke Dashboard**: Alat jalan pakai power bank, data kelompok tampil di website.
- **02 Kustom Dashboard**: Nama kelompok, anggota, warna, foto, dan aturan serah folder.

---

### Alat Kita Masih "Kesepian"
- P11: data suhu muncul di **Serial Monitor**, cuma di laptop yang tercolok kabel.
- Firmware sebenarnya **sudah mengirim** data ke internet (`kode respons: 200`).
- Hari ini: kita **melihat** data itu di **website kalian sendiri**, lalu membuatnya jadi milik kelompok.

---

### Perjalanan Data
```
DHT22 → ESP32 → WiFi → Internet → Server InspiraLabs → Dashboard (website kalian)
```
- **Server** = komputer yang selalu menyala di internet, **menyimpan** data semua alat.
- **Dashboard** = halaman web yang **menampilkan** data Device ID kalian (tiap ±4 detik).
- Firmware **tersimpan** di ESP32. Colok ke **power bank** → alat jalan sendiri, **tanpa laptop**.

---

### Praktek Bareng: Buka Dashboard-mu
1. Colok ESP32 ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah.

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

> 🗣️ SPEAKER NOTES: Sebelum ada data, dashboard menampilkan angka contoh (26°C, 60%). Angka itu baru berubah kalau server sudah menerima data dari Device ID kelompok itu.

---

### Tips Engineer: Kalau Dashboard Diam

| Gejala | Penyebab | Solusi |
|---|---|---|
| Angka tetap 26°C / 60% | ESP32 belum mengirim | Colok laptop, Serial Monitor harus `kode respons: 200` |
| Serial macet di titik-titik | WiFi salah / 5 GHz / sinyal lemah | Cek zona hijau, dekatkan ke router |
| Tidak berubah saat ditiup | Sensor dibaca tiap 4 detik | Tiup lebih lama, tunggu 5–10 detik |
| ESP32 di power bank mati sendiri | Power bank mode hemat | Ganti power bank / colok laptop |
| Data bukan milik alat kita | Folder tertukar | Cek nama folder & Device ID |

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik di awal sesi: dashboard hanya menampilkan apa yang sudah sampai di server. Ingatkan kembali tebakan siswa tadi.

---

### Forum Diskusi Live Coding

**Kalau laptop dimatikan, apakah data suhu tetap muncul di dashboard? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 1 — Data ke Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟢 Easy — "Data Pertamaku Muncul" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

Nyalakan alat pakai **power bank** (tanpa laptop). Buka dashboard dan buktikan angka suhu kelompokmu **muncul**. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor.

---

### Peta Dashboard: Boleh & Jangan

| File | Boleh diubah? | Yang diubah |
|---|---|---|
| `index.html` | ✅ Boleh (teks) | Nama kelompok, anggota, judul |
| `style.css` | ✅ Boleh (warna) | Warna di `:root` paling atas |
| `foto-kelompok.jpg` | ✅ Ditambahkan | Foto kelompok |
| `icon.webp` | Biarkan | Ikon tab browser |
| `api.js` | ❌ **Jangan** | "Kabel" ke server |
| `<script>` di bawah `index.html` | ❌ **Jangan** | Pengambil data sensor |

Edit pakai **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

---

### Kustom 1: Profil & Judul
Cari komentar **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<div class="kartu-profil">
  <img src="foto-kelompok.jpg" alt="Foto kelompok" onerror="this.remove()">
  <div>
    <h2>Nama Kelompok Kami</h2>
    <p>Anggota: Nama 1, Nama 2</p>
  </div>
</div>
```
- Ganti **teks** di antara `<h2>…</h2>` dan `<p>…</p>`. **Jangan** hapus tanda `< >`.
- Nama anggota sudah diisi tutor, cek ejaannya.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

---

### Kustom 2: Warna di :root
Buka `style.css`, bagian `:root` paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Ganti 6 huruf/angka setelah `#`. Cari kode warna di Google: "color picker".
- Titik koma `;` di akhir baris jangan terhapus.

---

### Kustom 3: Foto Kelompok
1. Kecilkan dulu: **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
2. Nama file **persis**: `foto-kelompok.jpg` (huruf kecil, tanda minus, akhiran `.jpg`).
3. Simpan **di dalam folder** `smp-XX`, sejajar dengan `index.html`.
4. Refresh browser → foto muncul di kartu profil.

> 🗣️ SPEAKER NOTES: Kesalahan paling sering: Foto-Kelompok.JPG, "foto kelompok.jpg" (spasi), foto-kelompok.jpeg, foto-kelompok.jpg.jpg (ekstensi tersembunyi di Windows), atau foto masih di Downloads. Kalau nama salah, kotak foto hilang.

---

### Forum Diskusi Live Coding

**Foto sudah dimasukkan, tapi tidak muncul di dashboard. Apa saja kemungkinan penyebabnya?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kustom Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab sebelum lanjut ke challenge.

---

### Challenge 🟡 Medium — "Dashboard Punya Kami" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🟡**

1. Nama kelompok & anggota di **Profil Kelompok** (cek ejaan).
2. Judul di **header** jadi nama alat kalian.
3. **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-biru`).
4. `foto-kelompok.jpg` tampil di kartu profil.

Data sensor harus **tetap muncul** setelah diubah.

---

### Aturan Serah Folder
Website kalian akan **online** di **`https://<device-id>.inspiralabs.id`** (contoh: `smp-07.inspiralabs.id`)

1. Halaman utama tetap **`index.html`**.
2. **Semua** file ada **di dalam folder** `smp-XX`.
3. Foto bernama **`foto-kelompok.jpg`**.
4. **Tidak** pakai `npm`. Butuh library? Pakai **link CDN**.
5. **Jangan** ubah `api.js`.
6. Maksimal **5 MB**. Hapus folder **`firmware/.pio`** sebelum di-zip.
7. Zip, beri nama Device ID (mis. `smp-07.zip`), serahkan ke tutor di **P13**.

> 🗣️ SPEAKER NOTES: Cek ukuran: klik kanan folder → Properties → Size. Folder firmware/.pio dibuat otomatis oleh PlatformIO, bisa ratusan MB, aman dihapus. api.js selalu diganti versi asli tutor saat deploy.

---

### Challenge 🔴 Hard — "Inspektur Folder" (+10)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Tutor menampilkan isi folder kelompok khayalan `smp-99`.
2. Temukan **semua pelanggaran** aturan serah folder (minimal 4).
3. Tulis di kertas beserta cara memperbaikinya.
4. Cek folder kalian sendiri: ukurannya berapa MB?

---

### Peta Proyek Akhir
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  (selesai)
[P12] Data muncul di dashboard + kustom dashboard   ← HARI INI
[P13] Rapikan alat (casing) + showcase
```

> 🗣️ SPEAKER NOTES: Minggu depan siswa membawa kotak bekas (kardus kecil, kotak plastik, kotak pensil bekas) untuk casing alat, plus selotip/double tape.

---

### EVALUASI MANDIRI
**Post-Test: 5 Soal Pilihan Ganda**

**linktr.ee/InspiraLabs_SMP**

- **01** Buka tautan Linktree yang telah dibagikan.
- **02** Temukan dan klik tombol bertuliskan **"Post Test"**.
- **03** Kerjakan 5 soal pilihan ganda tersebut dengan teliti dan jujur!

> 🗣️ SPEAKER NOTES: Pastikan tombol "Post Test Pertemuan 12" di Linktree sudah mengarah ke Google Form P12 SMP.

---

### Terima kasih!

**SAMPAI JUMPA DI P13!**

MINGGU DEPAN (P13): **Rapikan Alat & Showcase Proyek Akhir** (bawa kotak bekas untuk casing!)
