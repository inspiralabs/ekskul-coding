PROMPT P12 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4 → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P12 SMP — Data Muncul di Dashboard & Kustom Website-mu

BRAND SYSTEM — WAJIB KONSISTEN DI SEMUA SLIDE:
- Warna Maroon: #7A1F2B (background utama/aksen dominan)
- Warna Maroon Gelap: #5A1620 (aksen dekoratif/kartu gelap)
- Warna Gold: #C9A24B (highlight, badge, border aksen)
- Warna Gold Muda: #E8D9B5 (background lembut/badge terang)
- Warna Off-White: #FAF8F5 (background slide terang)
- Warna teks gelap: #2B2320
- Warna teks abu: #6B5F58
- Font judul: serif elegan dan tegas
- Font body: sans-serif bersih dan mudah dibaca
- Gaya visual: rounded corners di semua card/badge, soft drop shadow pada card putih, lingkaran dekoratif semi-transparan di pojok slide cover/penutup
- JANGAN pakai garis/stripe aksen horizontal di bawah judul (dianggap kurang premium)
- Ukuran slide: widescreen 16:9

CARA MEMBACA ISI SLIDE (di antara penanda MULAI/SELESAI ISI SLIDE):
- Baris paling atas (# Judul) BUKAN slide, hanya nama pertemuan (dipakai di footer).
- Setiap bagian yang dipisah garis --- = 1 slide, urutan PERSIS seperti di isi. Jangan memindah, menggabung, atau menghapus slide.
- Komentar <!-- ... --> adalah catatan untukmu, jangan ditampilkan.
- Baris berawalan "> 🗣️ SPEAKER NOTES" masuk ke SPEAKER NOTES slide itu, JANGAN tampil di slide.
- Layout tiap slide kamu tentukan sendiri sesuai isi (card, tabel, kode, diagram), tetap dalam brand system.

POLA SLIDE (gaya deck P7 SMA InspiraLabs):
- Slide 1 "LINK & QR CODE": label kecil "LINK & QR CODE", judul "Akses Materi, Challenge, & Post Test", paragraf penjelasan, link Linktree besar, QR code dari link itu di sisi kanan. Background maroon, lingkaran dekoratif semi-transparan.
- Slide 2 "COVER": cover pertemuan. Label kecil "P12 SMP", judul materi besar, tagline satu kalimat di bawahnya. Nuansa cover (maroon, lingkaran dekoratif semi-transparan).
- Slide 3 "PERTANYAAN PEMANTIK": pertanyaan besar di tengah sebagai judul, satu kalimat konteks lebih kecil, lalu ajakan "Penasaran jawabannya? Yuk kita bongkar." Tema terang, layout lega. Ini pembuka materi untuk siswa, BUKAN konten media sosial.
- Slide "Apa yang kita capai hari ini?": card bernomor 01, 02, 03 (satu card per topik).
- Slide materi & live coding: kode di card gelap dengan font monospace, ditampilkan utuh; baris "File live coding" jadi badge kecil.
- Slide "Forum Diskusi Live Coding": label kecil "forum Diskusi Live Coding", pertanyaan besar di tengah, layout lega.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge "+10", instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
- Slide "EVALUASI MANDIRI": label "EVALUASI MANDIRI", judul "Post-Test: 5 Soal Pilihan Ganda", link Linktree, 3 langkah bernomor 01–03 dalam card.
- Slide "Terima kasih!": nuansa cover, info pertemuan berikutnya di card.

ATURAN TAMPILAN:
- Judul slide besar dan bold, subjudul lebih kecil dan warna lebih soft.
- Emoji seminimal mungkin. JANGAN menambahkan emoji sendiri; pakai ikon/shape sederhana bila perlu visual. Penanda warna challenge (hijau/kuning/merah) cukup lewat badge.
- Card/kotak info selalu punya border atau shadow supaya terlihat mengambang.
- Diagram alur: oval untuk Mulai/Selesai, rounded rectangle untuk proses, panah dengan ujung panah yang jelas (bukan karakter panah teks).
- Footer kecil di setiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid" + "P12 SMP | nomor slide" (slide Linktree tanpa nomor).
- Teks tidak boleh keluar dari slide. Kalau isi terlalu panjang, kecilkan font atau pecah jadi 2 slide berurutan dengan judul + "(lanjutan)".

GAMBAR RANGKAIAN (bagian berlabel "wiring" di isi slide):
1. Setiap bagian berlabel "wiring" adalah PERMINTAAN GAMBAR, bukan teks slide. Ganti dengan 1 gambar diagram rangkaian di slide yang sama.
2. Gaya diagram: flat, tampak atas, garis kabel tebal, label jelas, mirip diagram Fritzing. Latar & bingkai mengikuti brand (off-white, aksen maroon/gold).
3. Gambar HANYA sambungan yang tertulis. Jangan menambah atau mengarang kabel/pin.
4. Setiap ujung kabel diberi label nama pin ("3V3", "GND", "D4", "VIN", ...).
5. Warna kabel: Merah = 3V3/VIN · Hitam = GND · Kuning = data sensor · Biru = sinyal kontrol (LED/relay IN) · Oranye = jalur beban relay (COM/NO).
6. Komponen: LED kaki PANJANG (+) lebih panjang & berlabel "+"; resistor 220Ω gelang merah-merah-coklat; DHT22 modul 3-pin ("+", "out", "−"); relay 1-channel modul biru ("VCC, GND, IN" dan "NO, COM, NC"); breadboard dengan jalur + (merah) dan − (biru).
7. ESP32 DevKit V1 30-pin, antena di atas, USB di bawah. Urutan pin dari atas ke bawah:
   KIRI : EN, VP(36), VN(39), D34, D35, D32, D33, D25, D26, D27, D14, D12, D13, GND, VIN
   KANAN: D23, D22, TX0, RX0, D21, D19, D18, D5, TX2, RX2, D4, D2, D15, GND, 3V3
   Beri warna hanya pada pin yang dipakai.
8. "Sorot" = beri panah/callout. "Judul" = caption kecil di bawah gambar.
9. Kalau tidak bisa menggambar diagram yang akurat, JANGAN pakai gambar AI. Buat tabel sambungan rapi (Dari → Ke, warna kabel) dan tulis "[GANTI DENGAN SCREENSHOT WOKWI]" di slide itu.

---------- MULAI ISI SLIDE ----------

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

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P12 SMP — Data Muncul di Dashboard & Kustom Website-mu

BRAND SYSTEM — WAJIB DIIKUTI KONSISTEN:
- Warna Maroon: #7A1F2B (untuk heading utama, judul besar)
- Warna Maroon Gelap: #5A1620 (untuk aksen/subjudul)
- Warna Gold: #C9A24B (untuk garis pembatas, highlight, badge)
- Warna Gold Muda: #E8D9B5 (untuk background callout box)
- Warna Off-White: #FAF8F5 (background box info)
- Warna teks utama: #2B2320 (hampir hitam, bukan pure black)
- Warna teks sekunder: #6B5F58 (abu kecoklatan untuk caption/italic)
- Font judul: gaya serif elegan (Cambria/Georgia)
- Font body: sans-serif bersih (Calibri)

STRUKTUR DOKUMEN:
- Cover halaman pertama: nama InspiraLabs, judul materi besar, tabel info (jenjang/pertemuan/durasi/dll) dengan header row warna gold muda
- Setiap heading besar (##) pakai warna maroon dengan garis bawah tipis gold
- Callout box / kotak info penting: background off-white atau gold muda, border kiri tebal warna maroon atau gold, sesuai konteks (info = gold, penting/warning = maroon)
- Tabel: header row background maroon dengan teks putih, baris isi bergantian putih/gold muda
- Blok kode/pseudocode: font monospace, background abu muda, ditampilkan utuh
- Section Post-Test: setiap soal pilihan ganda diberi jarak jelas, jawaban ditandai bold+italic
- Section "Pembuka Materi": callout gold berisi tagline & pertanyaan pemantik
- Section "Konten Reels": callout khusus bertuliskan "Khusus tim InspiraLabs, tidak ditampilkan di slide", karena ini dibaca instruktur untuk rekaman konten
- Section "KHUSUS TUTOR": beri callout maroon "Jangan ditampilkan ke siswa"
- Footer tiap halaman: nama pertemuan + nomor halaman
- Gunakan heading hierarchy Google Docs yang proper (Heading 1, Heading 2, dst) sesuai struktur # ## ### di isi. Spacing antar section konsisten, rapi seperti materi training profesional, bukan dokumen polos.

---------- MULAI ISI MATERI AJAR ----------

# SMP — Pertemuan 12: Data Muncul di Dashboard & Kustom Website-mu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 6 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu menampilkan data sensor DHT22 di dashboard yang telah disediakan (proyek akhir) dan mengkustom tampilannya |
| Penilaian | Progres proyek akhir: data kelompok tampil di dashboard + profil kelompok terisi + 3 warna diganti |
| Potongan proyek akhir yang dibedah | Dashboard `index.html` + `style.css` dari folder `smp-XX`. Bagian yang dikustom: **BAGIAN: PROFIL KELOMPOK** di `index.html` (nama kelompok, anggota, `foto-kelompok.jpg`), judul di **BAGIAN: HEADER**, dan warna di `:root` paling atas `style.css`. `api.js` **tidak disentuh**. Firmware sudah terpasang sejak P11. |

## Alat & bahan (per kelompok/individu)

- Alat dari P11 (ESP32 + DHT22, firmware proyek sudah ter-upload)
- **Power bank** (terisi penuh) + kabel USB: ESP32 tetap butuh listrik walau tanpa laptop
- Laptop + folder proyek `smp-XX` (dari P11)
- **Foto kelompok** (atau foto diri untuk peserta individu) di HP/laptop
- WiFi kelas **2.4 GHz** (sama seperti P11)

## Persiapan tutor sebelum kelas

1. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`. Coba buka satu `index.html` dari laptop kelas: angka contoh harus berganti jadi data sungguhan.
2. Siapkan zip cadangan (`py tools/kelompok.py paket`) untuk siswa yang foldernya hilang/rusak. Kalau zip diganti, siswa harus mengisi WiFi & upload firmware lagi.
3. Siapkan cara memindahkan foto dari HP ke laptop (kabel/Drive/WA Web). Kalau siswa tidak membawa foto: foto bersama di kelas pakai HP tutor.
4. Tulis contoh folder `smp-99` untuk Challenge Hard (lihat Kunci) di papan/slide.
5. Hotspot cadangan 2.4 GHz.
6. Panduan lengkap: `kurikulum/smp/p12/Panduan_Pengajar_P12_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Nyalakan semua alat pakai power bank, tentukan peran (Slide 1) |
| 5–8 | Pembuka materi | Cover + pertanyaan pemantik + agenda |
| 8–12 | Materi | Slide 2–3: alat "kesepian", perjalanan data |
| 12–20 | Praktek bersama | Slide 4: buka dashboard, data kelompok muncul |
| 20–23 | Tips + forum | Slide 5 + Forum Diskusi Topik 1 |
| 23–27 | 🟢 Challenge Easy | Data Pertamaku Muncul (wajib) |
| 27–35 | Materi + demo | Slide 6–9: boleh & jangan, profil, warna, foto (tutor demo langsung di layar). Ganti peran. |
| 35–37 | Forum | Forum Diskusi Topik 2 |
| 37–52 | 🟡 Challenge Medium | Dashboard Punya Kami |
| 52–55 | Materi | Slide 10: aturan serah folder & alamat website |
| 55–60 | 🔴 Challenge Hard | Inspektur Folder |
| 60–62 | Peta proyek | Slide 11 + ingatkan bawa kotak bekas |
| 62–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Alat Kita Masih "Kesepian" → Perjalanan Data → Praktek Bareng: Buka Dashboard-mu → Tips Engineer: Kalau Dashboard Diam → 💬 Forum Diskusi → 🟢 Easy → Peta Dashboard: Boleh & Jangan → Kustom 1: Profil & Judul → Kustom 2: Warna di :root → Kustom 3: Foto Kelompok → 💬 Forum Diskusi → 🟡 Medium → Aturan Serah Folder → 🔴 Hard → Peta Proyek Akhir → Post-test (Linktree) → Penutup.

> Buffer: kalau pemindahan foto lama, foto boleh menyusul di P13. Yang wajib hari ini: data tampil + nama kelompok/anggota + warna sudah diganti.

---

## Slide

### Slide 1 — Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik di VS Code |
| **Desainer** | Memilih 3 warna |
| **Fotografer** | Foto kelompok + kecilkan ukurannya |
| **Pengecek** | Cek ejaan nama & aturan folder |

- Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Slide 2 — Alat Kita Masih "Kesepian" 😢
- P11: angka suhu cuma terlihat di **Serial Monitor** laptop.
- Padahal firmware **sudah mengirim** angkanya ke internet (`200`).
- Hari ini: angka itu tampil di **website kalian sendiri**.

### Slide 3 — Perjalanan Data 🚀
```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```
- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk Device ID kalian.

> Catatan tutor: Server = komputer yang selalu menyala di internet, menyimpan data semua alat. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

### Slide 4 — Praktek Bareng: Buka Dashboard-mu 🖥️
1. Colok ESP32 ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah!

> Catatan tutor: "Tanpa laptop" bukan berarti tanpa listrik: power bank yang memberi listrik. Sebelum ada data, dashboard menampilkan **angka contoh** (26°C, 60%).

### Slide 5 — Tips Engineer: Kalau Dashboard Diam 🛠️

| Gejala | Coba ini |
|---|---|
| Angka tetap 26°C / 60% | Colok ke laptop, cek Serial Monitor: harus `200` |
| Tidak berubah saat ditiup | Tiup lebih lama, tunggu 10 detik |
| ESP32 di power bank mati sendiri | Ganti power bank / colok laptop |

> Catatan tutor: Slide ini menjawab pertanyaan pemantik: website hanya **menampilkan** apa yang sudah sampai di server. Gejala lain: Serial Monitor macet di titik-titik → WiFi salah / 5 GHz / sinyal lemah (tabel P11); data bukan milik alat kita → folder tertukar, cek nama folder & Device ID; power bank mati sendiri → mode hemat daya (arus ESP32 kecil, dianggap sudah penuh).

### Slide 6 — Peta Dashboard: Boleh & Jangan 🗺️

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `foto-kelompok.jpg` | ✅ Tambahkan |
| `api.js` | ❌ **Jangan** |

- Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> Catatan tutor: `api.js` = "kabel" dashboard ke server; saat online selalu diganti versi asli tutor. Bagian `<script>` di bawah `index.html` juga jangan diubah (pengambil data sensor). `icon.webp` biarkan.

### Slide 7 — Kustom 1: Profil & Judul ✍️
Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```
- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> Catatan tutor: Nama anggota sudah diisi tutor, cek ejaannya. Peserta individu: tulis nama sendiri. Tips cari: Ctrl+F lalu ketik "PROFIL".

### Slide 8 — Kustom 2: Warna di :root 🎨
Buka `style.css`, paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Klik **kotak warna kecil** di depan kode → pilih warna.
- Titik koma `;` jangan terhapus.

> Catatan tutor: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS; klik untuk membuka pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah `#`.

### Slide 9 — Kustom 3: Foto Kelompok 📸
1. Kecilkan: **Paint** → **Resize** → lebar **800 piksel** → Save as **JPEG**.
2. Beri nama **persis**: `foto-kelompok.jpg`.
3. Simpan di folder `smp-XX`, sebelah `index.html`.
4. Refresh browser → foto muncul!

> Catatan tutor: Kesalahan paling sering: `Foto-Kelompok.JPG`, `foto kelompok.jpg` (spasi), `foto-kelompok.jpeg`, `foto-kelompok.jpg.jpg` (akhiran tersembunyi di Windows: nyalakan View → File name extensions), atau foto disimpan di Downloads. Kalau nama salah, kotak foto hilang.

### Slide 10 — Aturan Serah Folder 📦
Website kalian akan **online** di **`smp-XX.inspiralabs.id`**!

1. Halaman utama tetap **`index.html`**.
2. **Semua** file ada di dalam folder `smp-XX`.
3. Foto bernama **`foto-kelompok.jpg`**, sudah dikecilkan.
4. `api.js` **tidak** diubah.
5. Hapus folder **`firmware/.pio`**. Total maksimal **5 MB**.

> Catatan tutor: Contoh alamat: `https://smp-07.inspiralabs.id`. Cek ukuran: klik kanan folder → Properties → Size. `firmware/.pio` dibuat otomatis oleh PlatformIO, bisa ratusan MB, aman dihapus. Zip diserahkan di **P13**. Untuk siswa mahir: tidak boleh pakai `npm`/instalasi; butuh library → link CDN.

### Slide 11 — Peta Proyek Akhir 🗺️
```
[P9]  Kenal ESP32 & breadboard, rakit LED           (selesai)
[P10] Upload program jadi (Blink) + rakit DHT22     (selesai)
[P11] Upload firmware proyek + jadi "dokter kabel"  (selesai)
[P12] Data muncul di dashboard + kustom dashboard   ← HARI INI
[P13] Rapikan alat (casing) + showcase
```
> Catatan tutor: Minggu depan siswa membawa **kotak bekas** (kardus kecil, kotak plastik, kotak pensil bekas) untuk casing alat, plus selotip/double tape. Kotak logam/kaleng tidak boleh.

---

## Forum Diskusi Live Coding

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab.

- **Topik 1 — Data ke Dashboard:** Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?
- **Topik 2 — Kustom Dashboard:** Foto sudah dimasukkan, tapi tidak muncul. Apa saja kemungkinan penyebabnya?

Setiap challenge bernilai **+10** poin (leaderboard).

---

## Challenge

### 🟢 Easy — "Data Pertamaku Muncul" (wajib)
1. Nyalakan alat pakai **power bank** (tanpa laptop).
2. Buka dashboard: angka suhu kalian **muncul**.
3. Tiup sensor → angka ikut berubah. Tunjukkan ke tutor!

### 🟡 Medium — "Dashboard Punya Kami" 🎨
1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-biru`).
4. `foto-kelompok.jpg` tampil.

Angka sensor harus **tetap muncul** setelah diubah!

### 🔴 Hard — "Inspektur Folder" 🔍
1. Tutor menampilkan isi folder khayalan `smp-99`.
2. Temukan **minimal 4** pelanggaran aturan.
3. Tulis cara memperbaikinya.
4. Cek folder kalian sendiri: berapa MB?

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Data suhu kelasmu muncul di website kalian sendiri, lengkap dengan nama dan wajah kalian.
- **Pertanyaan pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Konteks:** Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.
- Tampung 2–3 tebakan siswa, jawabannya dibahas di Topik 1 (slide *Tips Engineer: Kalau Dashboard Diam*).

---

## Konten Reels (khusus tim InspiraLabs, tidak ditampilkan di slide)

**Template hook #1 (Negative Hooks — Psikologi Terbalik)**

# "Stop masukin foto 10 MB ke website kamu." 🛑

Isi slide:
- 📸 Foto langsung dari HP bisa **5–10 MB**. Website jadi lambat dibuka, apalagi di HP dengan kuota pas-pasan.
- 📐 Kecilkan dulu: lebar **800 piksel** sudah cukup tajam untuk website. Ukurannya turun jadi ±**150 KB**.
- 🏷️ Nama file itu **penting**: `foto-kelompok.jpg` ≠ `Foto Kelompok.JPG`. Satu huruf beda, foto hilang.
- 📁 Simpan **di dalam folder website**, jangan di Downloads. Website yang online tidak bisa membuka laptopmu.

🎙️ **Kalimat hook (pembuka rekaman):** "Stop masukin foto sepuluh mega ke website kamu."

📌 **Teks di layar:**
- 10 MB = website lemot 🐢
- Lebar 800 px cukup 📐
- Nama file harus PERSIS 🏷️
- Simpan di folder website 📁

🎬 **Penutup:** "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!"

> Catatan tutor: Narasi lengkap saat rekam:
> - [0–3 detik] "Stop masukin foto sepuluh mega ke website kamu."
> - [3–12 detik] "Foto dari HP itu gede banget. Taruh di website, yang buka harus nunggu, kuota kebuang."
> - [12–22 detik] "Kecilin dulu. Buka di Paint, resize lebar delapan ratus piksel, save JPEG. Dari sepuluh mega jadi seratus lima puluh kilo. Tetap tajam."
> - [22–32 detik] "Kedua, nama file. Huruf besar, spasi, titik JPEG atau JPG, semuanya dihitung. Satu beda, fotonya hilang dari website."
> - [32–42 detik] "Ketiga, simpan di dalam folder website. Kalau fotonya di Downloads, pas websitenya online, fotonya nggak ikut."
> - [42–50 detik] "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!"

### Script Reels Lengkap (untuk rekaman konten)

| Info | Isi |
|---|---|
| Template hook | #1 — Negative Hooks (Psikologi Terbalik) |
| Judul | Stop masukin foto 10 MB ke website kamu |
| Durasi | ±50 detik |
| Pembicara | Tutor (layar laptop) + siswa memegang alat |

#### Script

| Detik | Visual / B-roll | Narasi | Teks di layar |
|---|---|---|---|
| 0–3 | Website loading lama, gambar muncul sepotong-sepotong | "Stop masukin foto sepuluh mega ke website kamu." | STOP foto 10 MB 🛑 |
| 3–12 | Properties file foto HP: 9,8 MB | "Foto dari HP itu gede banget. Taruh di website, yang buka harus nunggu, kuota kebuang." | 10 MB = website lemot 🐢 |
| 12–22 | Screen record Paint → Resize → 800 px → Save JPEG, ukuran jadi 150 KB | "Kecilin dulu. Buka di Paint, resize lebar delapan ratus piksel, save JPEG. Dari sepuluh mega jadi seratus lima puluh kilo. Tetap tajam." | Lebar 800 px cukup 📐 |
| 22–32 | Nama file `Foto Kelompok.JPG` dicoret, diganti `foto-kelompok.jpg` | "Kedua, nama file. Huruf besar, spasi, titik JPEG atau JPG, semuanya dihitung. Satu beda, fotonya hilang dari website." | Nama file harus PERSIS 🏷️ |
| 32–42 | File foto di-drag dari Downloads ke folder `smp-07` | "Ketiga, simpan di dalam folder website. Kalau fotonya di Downloads, pas websitenya online, fotonya nggak ikut." | Simpan di folder website 📁 |
| 42–50 | Dashboard dengan foto kelompok, siswa meniup sensor, angka naik | "Minggu depan website ini online pakai alamat sendiri. Follow buat lihat hasilnya!" | Next: website online 🌐 |

#### Caption

Foto di website kamu nggak muncul, atau websitenya lemot banget? 🐢 Cek 3 hal ini:
📐 Kecilkan foto (lebar 800 px cukup)
🏷️ Nama file harus persis sama
📁 Simpan di dalam folder website

Save buat contekan sebelum upload website! 💾

#InspiraLabs #WebDev #BelajarCoding #IoT #EkskulCoding #TipsWebsite #HTML #CSS

#### Yang sengaja tidak dibocorkan
- Cara data sensor sampai ke dashboard (server, Device ID).
- Aturan lengkap serah folder & alamat website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Firmware sudah ter-upload di P11. Agar alat tetap mengirim data tanpa laptop, yang dilakukan adalah…**
A. Menulis ulang firmware B. Mencolokkan ESP32 ke power bank (program tetap tersimpan di ESP32) C. Menghapus `api.js` D. Mencabut sensor DHT22

**2. Foto kelompok agar tampil di dashboard harus…**
A. Bernama `foto-kelompok.jpg` dan disimpan di dalam folder website B. Bernama bebas dan disimpan di Downloads C. Berukuran minimal 10 MB D. Ditempel di `api.js`

**3. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…**
A. `api.js` B. Bagian `<script>` di bawah `index.html` C. Kode warna di `:root` paling atas `style.css` D. `DEVICE_ID` di firmware

**4. Manakah yang MELANGGAR aturan serah folder?**
A. Halaman utama bernama `index.html` B. Foto bernama `foto-kelompok.jpg` di dalam folder `smp-XX` C. Ukuran folder 3 MB D. Mengubah isi `api.js`

**5. Website kelompok dengan Device ID `smp-07` akan bisa dibuka di alamat…**
A. `https://smp-07.inspiralabs.id` B. `https://ekskul.inspiralabs.id/kelompok7` C. `http://192.168.1.23` D. `https://smp-07.com`

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** bukti = dashboard menampilkan angka selain angka contoh (26°C / 60%) dan berubah saat sensor ditiup, alat tidak tersambung ke laptop.

**Medium:** cek 4 poin. Kalau data hilang setelah dikustom, biasanya siswa tidak sengaja menghapus `<span id="angkaSuhu">` / `id="angkaLembap"` atau bagian `<script>`. Perbaiki dengan menyalin ulang `index.html` dari zip asli lalu ulangi kustom (lebih cepat daripada mencari tanda yang hilang).

**Hard — contoh isi folder `smp-99` (tampilkan di papan/slide):**
```
smp-99/
├── home.html                 ← pelanggaran 1: halaman utama harus index.html
├── style.css
├── api.js                    (diubah: MY_DEVICE_ID = "smp-01")   ← pelanggaran 2: api.js tidak boleh diubah
├── Foto Kelompok.JPG         (8,7 MB)   ← pelanggaran 3: nama salah; pelanggaran 4: terlalu besar
├── firmware/.pio/            (310 MB)   ← pelanggaran 5: folder hasil Build ikut di-zip
└── (di home.html) <img src="C:\Users\Budi\Downloads\logo.png">   ← pelanggaran 6: file di luar folder
```
Minimal 4 benar = lulus. Perbaikan: rename ke `index.html`, ambil `api.js` asli, rename jadi `foto-kelompok.jpg` & kecilkan, hapus `firmware/.pio`, pindahkan `logo.png` ke dalam folder dan tulis `src="logo.png"`.

### Kunci Post-Test
1. B 2. A 3. C 4. D 5. A

### Pembahasan singkat
- No. 1: firmware tersimpan di memori ESP32; power bank hanya memberi listrik.
- No. 4: `api.js` selalu diganti versi asli saat website online, jadi perubahan di sana hilang dan bisa merusak dashboard.
- No. 5: setiap Device ID mendapat alamat sendiri: `<device-id>.inspiralabs.id`.

---------- SELESAI ISI MATERI AJAR ----------
