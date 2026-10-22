PROMPT P12 SMP — tempel SELURUH isi file ini ke Gemini (chat baru, aktifkan Canvas).

Kamu akan membuat 2 hasil secara BERURUTAN di chat ini:
  A. Presentasi GOOGLE SLIDES → kerjakan SEKARANG.
  B. Dokumen GOOGLE DOCS (Materi Ajar) → kerjakan SETELAH saya mengetik "LANJUT B".

Untuk keduanya: buat langsung (di Canvas) sehingga bisa di-Export ke Google Slides / Google Docs.
JANGAN menulis script/kode program (Python, Apps Script, JavaScript, dll.) untuk membuatnya.
Blok kode yang ADA DI DALAM isi materi adalah bagian dari materi: tampilkan apa adanya.

Folder Drive tujuan: https://drive.google.com/drive/folders/1JFQO4IsjnntTctCGp7sPZaheMpOqgCt4 → subfolder SMP (file hasil export akan saya pindahkan sendiri).


==================== BAGIAN A — GOOGLE SLIDES (kerjakan sekarang) ====================

Judul presentasi: P12 SMP — Kirim Suhu ke Internet & Dashboard-mu

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
- Slide "Forum Diskusi" / "Tanya Jawab": label kecil sesuai judul slide, pertanyaan besar di tengah, layout lega. Kalau judulnya memuat poin (mis. "+2"), tampilkan sebagai badge gold.
- Slide Challenge: label "TOPIK X DARI N — CHALLENGE" di atas judul, badge EASY (hijau) / MEDIUM (kuning) / HARD (merah) dan badge poin sesuai angka di judul (mis. "+5", "+10", "+15"), instruksi bernomor dalam card; baris "Download" / "Simpan hasil sebagai" jadi kotak info di bawah.
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

# P12 SMP — Kirim Suhu ke Internet & Dashboard-mu

<!-- File ini khusus untuk PPT. 1 blok di antara garis --- = 1 slide, urutan PERSIS seperti di file.
     Footer tiap slide: "InspiraLabs • Ekskul Coding • Sekolah Qur'an Asy Syahid P12 SMP | nomor slide".
     Baris "> 🗣️ SPEAKER NOTES" masuk ke speaker notes, JANGAN tampil di slide.
     Blok wiring = perintah gambar diagram rangkaian (aturan di prompt/GENERATE-PPT.md).
     Jawaban challenge & post-test hanya ada di Materi Ajar.
     Siswa SMP (12–15 tahun): teks slide singkat, satu ide per slide, nuansa main game (level, poin). -->

---

### LINK & QR CODE
**Akses Materi, Challenge, & Post Test**

Pindai QR code di samping menggunakan smartphone Anda, atau kunjungi tautan di bawah ini untuk mengakses seluruh materi belajar, tantangan praktis, dan evaluasi sesi.

**https://linktr.ee/InspiraLabs_SMP**

> 🗣️ SPEAKER NOTES: Buat QR code dari link Linktree di atas dan taruh di sisi kanan slide.

---

### COVER

**P12 SMP**

# Kirim Suhu ke Internet & Dashboard-mu

Angka suhu dari mejamu terbang ke internet dan tampil di website kalian sendiri.

> 🗣️ SPEAKER NOTES: Slide pembuka materi. Bacakan judul dan tagline, lalu lanjut ke pertanyaan pemantik.

---

### PERTANYAAN PEMANTIK

# Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?

Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.

Penasaran jawabannya? Yuk kita bongkar.

> 🗣️ SPEAKER NOTES: Tampung 2–3 tebakan siswa (+2 per penebak) tanpa langsung dijawab. Jawabannya dibahas di slide "Perjalanan Data".

---

### Apa yang kita capai hari ini?

- **01 Kirim Suhu ke Internet**: Upload firmware, angka suhu tampil di dashboard.
- **02 Kustom Dashboard**: Nama kelompok, judul, dan warna kalian sendiri.

---

### Peran di Kelompok

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik WiFi, Upload, edit di VS Code |
| **Pengecek** | Cek ejaan WiFi & nama |
| **Penjaga Alat** | Mengurus kabel, sensor & power bank |
| **Desainer** | Memimpin pilihan nama alat & warna |

Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

> 🗣️ SPEAKER NOTES: Kelompok 2 orang: tiap orang pegang 2 peran. Semua keputusan desain (nama alat, warna) diputuskan bersama, Operator hanya mengetik. Operator Topik 1 dan Topik 2 harus orang yang berbeda.

---

### Cara Dapat Poin Hari Ini

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri.

> 🗣️ SPEAKER NOTES: Sama seperti P10–P11. +2 untuk yang berani bertanya/menjawab, utamakan yang belum dapat. Poin challenge untuk setiap anggota kelompok yang ikut mengerjakan. Tidak ada PR.

---

### Perjalanan Data

```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```

- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk alat kalian.

> 🗣️ SPEAKER NOTES: Slide ini menjawab pertanyaan pemantik: website cuaca hanya menampilkan data yang dikirim alat pengukur (stasiun cuaca) ke server. Website kita juga begitu: dashboard hanya menampilkan apa yang sudah sampai di server. Ingatkan kembali tebakan siswa tadi. Server = komputer yang selalu menyala di internet. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

---

### Folder Proyekmu

Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Isinya |
|---|---|
| `firmware/` | Program resmi ESP32 (**firmware**) |
| `index.html`, `style.css` | Website dashboard kalian |

**smp-XX = Device ID** = plat nomor alat kalian di internet.

> 🗣️ SPEAKER NOTES: Firmware = program resmi alat kita. Sama seperti program P10–P11, tinggal upload. Device ID sudah diisi tutor, tidak boleh diganti dan tidak boleh sama dengan kelompok lain (seperti plat nomor motor). File lain di folder: api.js (jangan diubah), icon.webp, README.md. Kalau folder belum ada: klik kanan smp-XX.zip → Extract All. Jangan pakai salinan umum dari Drive.

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

**Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> 🗣️ SPEAKER NOTES: Zona hijau itu seperti kolom isian formulir: isi di tempat yang disediakan saja. Zona merah berisi SERVER_URL dan API_KEY (alamat & kunci server); kalau diubah, data ditolak. Hanya ganti tulisan ISI_DI_SINI, tanda kutip " " jangan terhapus. Angka DHT_PIN 4 sama dengan rakitan P11.

---

### Praktek Bareng: Upload Firmware

1. Cek rakitan P11: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

```wiring
Judul: Rakitan standar proyek akhir SMP (sama dengan P11)
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
- **200** = data **diterima** server, seperti centang dua di WhatsApp!

> 🗣️ SPEAKER NOTES: IP = alamat ESP32 di WiFi (seperti nomor rumah). Baris suhu, kirim data, dan 200 berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal { }, abaikan saja. Tulis Device ID di papan "Klub 200" begitu kelompok itu mendapat 200 pertama.

---

### Tips Engineer: Kalau Belum 200

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> 🗣️ SPEAKER NOTES: Gejala lain (urusan tutor): titik-titik tak berhenti padahal password benar → WiFi 5 GHz (ESP32 hanya bisa 2.4 GHz) → pindah ke hotspot 2.4 GHz; kode respons 401 → zona merah (API_KEY) berubah → extract ulang zip asli, isi WiFi lagi; tulisan acak ⸮⸮⸮ → pilih 115200 baud. Masih bingung WiFi atau sensor? Upload P12_1_TesWiFi.ino (tes WiFi saja), lalu upload lagi firmware proyek.

---

### Tanya Jawab (+2)

**Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?**

> 🗣️ SPEAKER NOTES: Topik 1 — Kirim Suhu ke Internet. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: data dua alat tercampur di dashboard yang sama, seperti dua motor dengan plat nomor sama.

---

### Challenge 🟢 Easy — "Klub 200" (+5)

**TOPIK 1 DARI 2 — CHALLENGE 🟢**

1. Serial Monitor menulis `Kirim data -> kode respons: 200`.
2. Tunjukkan ke tutor.
3. Device ID kalian ditulis di papan **Klub 200**!

---

### Praktek Bareng: Buka Dashboard-mu

1. Cabut ESP32 dari laptop, colok ke **power bank**. Tunggu ±10 detik.
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

> 🗣️ SPEAKER NOTES: Firmware tetap tersimpan di ESP32, power bank hanya memberi listrik. Tidak ada power bank? Tetap colok ke laptop, dashboard tetap jalan. Sebelum ada data, dashboard menampilkan angka contoh (26°C, 60%). Angka itu berubah kalau server sudah menerima data dari Device ID kelompok itu. Angka tetap 26/60? Colok laptop, cek Serial Monitor harus 200. Rayakan angka pertama di layar (quick win).

---

### Challenge 🟡 Medium — "Data Pertamaku Online" (+10)

**TOPIK 1 DARI 2 — CHALLENGE 🟡**

1. Alat menyala pakai **power bank** (tanpa laptop).
2. Dashboard menampilkan angka **alat kalian** (bukan 26°C / 60%).
3. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor!

---

### Peta Dashboard: Boleh & Jangan

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `api.js` | ❌ **Jangan** |

Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> 🗣️ SPEAKER NOTES: api.js = "kabel" dashboard ke server; saat website online selalu diganti versi asli tutor. Bagian <script> di bawah index.html juga jangan diubah (pengambil data sensor). icon.webp biarkan. Cara membuka di VS Code: klik kanan file → Open With Code, atau File → Open Folder → smp-XX. Foto kelompok dipasang minggu depan (P13).

---

### Kustom 1: Profil & Judul

Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:

```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```

- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> 🗣️ SPEAKER NOTES: Nama anggota sudah diisi tutor, minta Pengecek mengecek ejaannya. Peserta individu: tulis nama sendiri dan nama alat. Tips cari: Ctrl+F lalu ketik "PROFIL". Nama kelompok & judul harus sopan, karena website akan online.

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

> 🗣️ SPEAKER NOTES: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS. Klik kotaknya → muncul pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah #. Ajak Desainer memilih 3 warna yang cocok dan tetap mudah dibaca dari belakang kelas.

---

### Tanya Jawab (+2)

**Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?**

> 🗣️ SPEAKER NOTES: Topik 2 — Kustom Dashboard. Lempar pertanyaan ke kelas, minta 2–3 siswa menjawab (+2 per siswa) sebelum lanjut ke challenge. Jawaban: ya, selama ESP32 dapat listrik (power bank) dan WiFi. Program tersimpan di ESP32, dan website bisa dibuka dari perangkat lain.

---

### Challenge 🔴 Hard — "Dashboard Punya Kami" (+15)

**TOPIK 2 DARI 2 — CHALLENGE 🔴**

1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root`.

Angka sensor harus **tetap muncul** setelah diubah!

---

### Peta Petualangan IoT

```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              (selesai)
[P12] Kirim suhu ke internet + dashboard kelompok     ← HARI INI
[P13] Foto, rumah alat & showcase
```

> 🗣️ SPEAKER NOTES: Firmware tetap tersimpan di ESP32. Minggu depan: foto kelompok dipasang di dashboard (difoto di kelas, tidak perlu membawa apa-apa), alat dapat "rumah" dari kardus yang disiapkan tutor, lalu showcase.

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

MINGGU DEPAN (P13): **Sempurnakan Alat & Showcase Proyek Akhir**

---------- SELESAI ISI SLIDE ----------

Buat presentasi Google Slides BAGIAN A sekarang. Setelah selesai, tunggu saya mengetik "LANJUT B".


==================== BAGIAN B — GOOGLE DOCS MATERI AJAR (kerjakan setelah "LANJUT B") ====================

Judul dokumen: Materi Ajar P12 SMP — Kirim Suhu ke Internet & Dashboard-mu

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

# SMP — Pertemuan 12: Kirim Suhu ke Internet & Dashboard-mu

| Info | Isi |
|---|---|
| Tanggal | Jum'at, 6 November 2026 |
| Durasi | 70 menit |
| Target silabus | Siswa mampu mengirim data sensor DHT22 ke dashboard yang telah disediakan (proyek akhir) |
| Penilaian | Keaktifan Tanya Jawab (+2), Challenge (Easy +5, Medium +10, Hard +15), Post-test 5 soal (Google Form). Progres proyek akhir: `kode respons: 200` + data tampil di dashboard. **Tidak ada PR.** |
| Potongan proyek akhir yang dibedah | `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` dipakai **utuh**, kecuali zona "BOLEH DIUBAH": `WIFI_SSID` dan `WIFI_PASSWORD`. `DEVICE_ID` **sudah diisi tutor**, `DHT_PIN 4` sama dengan rakitan P11. Lalu dashboard `index.html` + `style.css` dari folder yang sama: **BAGIAN: PROFIL KELOMPOK**, judul di **BAGIAN: HEADER**, dan warna di `:root`. `api.js` **tidak disentuh**. Foto kelompok dipasang di P13. |

## Alat & bahan (per kelompok/individu)

- Rakitan dari P11: ESP32 + DHT22 (+ ke 3V3, out ke **D4**, − ke GND). LED di D2 boleh dilepas.
- Kabel USB data + laptop dengan Arduino IDE + board ESP32 + library DHT (dari P10) + **VS Code**
- **Folder proyek per kelompok** `smp-XX` (dari zip `smp-XX.zip`, `smp-01` … `smp-13`), berisi `firmware/`, `index.html`, `style.css`, `api.js`, `icon.webp`, `README.md`. Device ID & nama anggota **sudah diisi**. Daftar Device ID: `docs/HANDOUT_SISWA.md`.
- **Power bank** terisi + kabel USB (disiapkan tutor; tanpa power bank tetap bisa dicolok ke laptop)
- Folder **Kode** pertemuan ini (Drive): `P12_1_TesWiFi` (program cadangan untuk mengecek WiFi saja)
- WiFi kelas **2.4 GHz** + hotspot HP cadangan

## Persiapan tutor sebelum kelas

1. Buat zip per Device ID dengan `py tools/kelompok.py paket`. **Extract `smp-XX.zip` di laptop kelompok itu** (mis. di Desktop), buka `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` di Arduino IDE, lalu **Verify (✓)** sekali. Jangan pakai salinan umum `smp/` atau `Kode/proyek-akhir`: Device ID-nya generik dan data kelompok bisa saling menimpa.
2. Tulis nama & password WiFi kelas di papan (huruf besar-kecil persis). Pastikan WiFi **2.4 GHz** (ESP32 tidak bisa 5 GHz). Siapkan 1 hotspot HP cadangan.
3. Cek backend online: `https://api-ekskulcoding.inspiralabs.id/health`. Buka satu `index.html`: angka contoh harus berganti jadi data sungguhan setelah ada alat yang mengirim.
4. Charge semua power bank. Pastikan VS Code terpasang di tiap laptop.
5. Panduan lengkap: `kurikulum/smp/p12/Panduan_Pengajar_P12_SMP.md`.

## Alur 70 menit

| Menit | Kegiatan | Keterangan |
|---|---|---|
| 0–5 | Pembuka | Bagikan kit, peran, cara dapat poin |
| 5–10 | Pembuka materi | Cover + pemantik + perjalanan data + folder proyek + zona hijau/merah |
| 10–22 | Praktek bersama | Isi WiFi, upload firmware |
| 22–25 | Materi | Membaca cerita ESP32 + tips kalau belum 200 |
| 25–27 | Tanya Jawab | Topik 1 |
| 27–30 | 🟢 Challenge Easy | Klub 200 |
| 30–36 | Praktek bersama | Power bank + buka dashboard |
| 36–39 | 🟡 Challenge Medium | Data Pertamaku Online |
| 39–45 | Materi + demo | Boleh & jangan, profil & judul, warna (tutor demo di layar). **Ganti peran.** |
| 45–47 | Tanya Jawab | Topik 2 |
| 47–60 | 🔴 Challenge Hard | Dashboard Punya Kami |
| 60–62 | Peta petualangan | |
| 62–70 | Post-test | 5 soal pilihan ganda (Google Form), dikerjakan sendiri-sendiri |

Urutan di PPT: Linktree & QR → Cover → Pertanyaan Pemantik → Agenda → Peran di Kelompok → Cara Dapat Poin → Perjalanan Data → Folder Proyekmu → Zona Hijau & Zona Merah → Praktek Bareng: Upload Firmware → Membaca "Cerita" ESP32 → Tips Engineer: Kalau Belum 200 → 💬 Tanya Jawab → 🟢 Easy → Praktek Bareng: Buka Dashboard-mu → 🟡 Medium → Peta Dashboard: Boleh & Jangan → Kustom 1: Profil & Judul → Kustom 2: Warna di :root → 💬 Tanya Jawab → 🔴 Hard → Peta Petualangan → Post-test (Linktree) → Penutup.

> Buffer: bagian paling rawan adalah WiFi. Kalau banyak yang macet di WiFi, pindahkan semua ke hotspot cadangan bersama-sama. Yang wajib hari ini: `kode respons: 200` **dan** angka alat tampil di dashboard. Kustom yang belum selesai dilanjutkan di awal P13.

---

## Slide

### Peran di Kelompok 👥

| Peran | Tugas |
|---|---|
| **Operator** | Mengetik WiFi, Upload, edit di VS Code |
| **Pengecek** | Cek ejaan WiFi & nama |
| **Penjaga Alat** | Mengurus kabel, sensor & power bank |
| **Desainer** | Memimpin pilihan nama alat & warna |

- Ganti peran di Topik 2. Kerja sendiri? Pegang semua peran, minta teman sebelah jadi Pengecek.

### Cara Dapat Poin Hari Ini 🏅

| Kegiatan | Poin |
|---|---|
| Bertanya / menjawab saat **Tanya Jawab** | **+2** |
| Challenge 🟢 **Easy** | **+5** |
| Challenge 🟡 **Medium** | **+10** |
| Challenge 🔴 **Hard** | **+15** |

- Di akhir kelas: **Post-Test** di Google Form, dikerjakan sendiri-sendiri. Tidak ada PR.

### Perjalanan Data 🚀
```
DHT22 → ESP32 → WiFi → Internet → Server → Dashboard
```
- Seperti kirim surat: ESP32 = pengirim, **server** = kantor pos yang menyimpan surat.
- **Dashboard** = website yang membaca surat terbaru untuk alat kalian.

> Catatan tutor: Slide ini menjawab pertanyaan pemantik: website hanya **menampilkan** data yang dikirim alat pengukur ke server. Dashboard mengambil data terbaru kira-kira tiap 4 detik.

### Folder Proyekmu 📁
Folder **`smp-XX`** (XX = nomor kalian) sudah disiapkan tutor di laptop.

| Folder / file | Isinya |
|---|---|
| `firmware/` | Program resmi ESP32 (**firmware**) |
| `index.html`, `style.css` | Website dashboard kalian |

- **smp-XX = Device ID** = plat nomor alat kalian di internet.

> Catatan tutor: Device ID sudah diisi tutor, tidak boleh diganti, dan tidak boleh sama dengan kelompok lain. File lain: `api.js` (jangan diubah), `icon.webp`, `README.md`. Kalau folder belum ada: klik kanan `smp-XX.zip` → **Extract All**.

### Zona Hijau & Zona Merah 🚦
Buka `firmware/smp_room_monitor/smp_room_monitor.ino`. Cuma **zona hijau** yang boleh disentuh:
```cpp
// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-07";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";   // <- isi nama WiFi kelas
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // <- isi password WiFi kelas
#define DHT_PIN 4                            // kabel out DHT22 di D4
```
- **Zona merah** (`JANGAN UBAH`) = kunci rumah server. Jangan disentuh.

> Catatan tutor: Zona hijau seperti kolom isian formulir. Zona merah berisi `SERVER_URL` dan `API_KEY`; kalau diubah, data ditolak. Hanya ganti tulisan `ISI_DI_SINI`; tanda kutip `" "` jangan terhapus.

### Praktek Bareng: Upload Firmware 🔧
1. Cek rakitan P11: DHT22 + ke 3V3, out ke **D4**, − ke GND.
2. Buka `smp-XX` → `firmware` → `smp_room_monitor` → **double-click** `smp_room_monitor.ino`.
3. Ganti `ISI_DI_SINI` dengan nama & password WiFi di papan. **Save** (Ctrl+S).
4. **Upload** → `Done uploading` → **Serial Monitor** (115200).

> Catatan tutor: Nama WiFi harus persis: huruf besar-kecil dan spasi dihitung. Pengecek membandingkan huruf demi huruf dengan papan. Serial Monitor kosong → tekan tombol **EN** (reset) di board.

### Membaca "Cerita" ESP32 📖
```
Menghubungkan ke WiFi.....
Terhubung! IP ESP32 ini: 192.168.1.23
Suhu: 28.40 C, Kelembapan: 65.20 %
Kirim data -> kode respons: 200
```
- Titik-titik = sedang mencari WiFi.
- **200** = data **diterima** server, seperti centang dua di WhatsApp!

> Catatan tutor: Baris suhu dan kode respons berulang tiap 4 detik. Setelah baris kode respons ada satu baris balasan server berkurung kurawal `{ }`, abaikan saja.

### Tips Engineer: Kalau Belum 200 🩺

| Gejala | Cek ini |
|---|---|
| Titik-titik tidak berhenti | Nama/password WiFi |
| `Gagal baca sensor DHT22…` | Kabel DHT22 (out di D4?) |
| `kode respons: -1` | Internet WiFi-nya |

> Catatan tutor: Gejala lain yang ditangani tutor:
> - Titik-titik tak berhenti padahal password benar → WiFi 5 GHz, pindah ke hotspot 2.4 GHz.
> - `kode respons: 401` → zona merah (`API_KEY`) berubah. Extract ulang zip asli, isi WiFi lagi.
> - Tulisan acak `⸮⸮⸮` → pilih **115200 baud** di Serial Monitor.
> - Masih bingung WiFi atau sensor? Upload `P12_1_TesWiFi.ino` (WiFi saja) atau `P11_1_BacaDHT22.ino` (sensor saja), lalu upload lagi firmware proyek.

### Praktek Bareng: Buka Dashboard-mu 🖥️
1. Cabut ESP32 dari laptop, colok ke **power bank**. Tunggu ±10 detik.
2. Buka folder `smp-XX` → **double-click** `index.html`.
3. Tunggu ±5 detik: angka berganti jadi data alat kalian.
4. **Tiup** sensor → angka di dashboard ikut berubah!

> Catatan tutor: "Tanpa laptop" bukan berarti tanpa listrik: power bank yang memberi listrik. Tidak ada power bank? Tetap colok ke laptop. Sebelum ada data, dashboard menampilkan **angka contoh** (26°C, 60%).

### Peta Dashboard: Boleh & Jangan 🗺️

| File | Boleh? |
|---|---|
| `index.html` | ✅ Ganti **teks** |
| `style.css` | ✅ Ganti **warna** |
| `api.js` | ❌ **Jangan** |

- Edit di **VS Code** → **Save** (Ctrl+S) → **refresh** browser (F5).

> Catatan tutor: `api.js` = "kabel" dashboard ke server; saat online selalu diganti versi asli tutor. Bagian `<script>` di bawah `index.html` juga jangan diubah (pengambil data sensor). `icon.webp` biarkan. Foto kelompok dipasang di P13.

### Kustom 1: Profil & Judul ✍️
Cari **BAGIAN: PROFIL KELOMPOK** di `index.html`:
```html
<h2>Nama Kelompok Kami</h2>
<p>Anggota: Nama 1, Nama 2</p>
```
- Ganti **teks** di antara tanda `< >`. Tandanya jangan dihapus.
- Ganti juga judul `Smart Room Monitor Junior` di **BAGIAN: HEADER**.

> Catatan tutor: Nama anggota sudah diisi tutor, cek ejaannya. Peserta individu: tulis nama sendiri. Tips cari: Ctrl+F lalu ketik "PROFIL". Nama & judul harus sopan karena website akan online.

### Kustom 2: Warna di :root 🎨
Buka `style.css`, paling atas:
```css
--warna-primer: #ff8a3d;        /* oranye ceria untuk aksen utama */
--warna-sekunder: #3ddc97;      /* hijau mint */
--warna-biru: #4d9de0;          /* biru muda */
```
- Klik **kotak warna kecil** di depan kode → pilih warna.
- Titik koma `;` jangan terhapus.

> Catatan tutor: VS Code menampilkan kotak warna kecil di depan tiap kode warna di file CSS; klik untuk membuka pemilih warna. Cara lain: Google "color picker", salin 6 huruf/angka setelah `#`.

### Peta Petualangan IoT 🗺️
```
[P9]  Kenalan ESP32 & breadboard, rakit LED           (selesai)
[P10] Pasang Arduino IDE + upload Blink               (selesai)
[P11] Kenalan sensor DHT22 + grafik suhu              (selesai)
[P12] Kirim suhu ke internet + dashboard kelompok     ← HARI INI
[P13] Foto, rumah alat & showcase
```
> Catatan tutor: Minggu depan foto kelompok diambil di kelas dan kardus untuk "rumah alat" disiapkan tutor. Siswa **tidak perlu membawa apa-apa**.

---

## Tanya Jawab (+2 keaktifan)

Ditampilkan di akhir tiap topik, sebelum challenge. Minta 2–3 siswa menjawab; setiap siswa yang bertanya/menjawab mendapat **+2**.

- **Pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Topik 1 — Kirim Suhu ke Internet:** Kenapa Device ID tiap kelompok harus beda? Apa jadinya kalau dua alat pakai ID yang sama?
- **Topik 2 — Kustom Dashboard:** Kalau laptop dimatikan, apakah suhu tetap muncul di dashboard? Kenapa?

Challenge: 🟢 Easy **+5**, 🟡 Medium **+10**, 🔴 Hard **+15** (leaderboard).

---

## Challenge

### 🟢 Easy — "Klub 200" (+5)
1. Serial Monitor menulis `Kirim data -> kode respons: 200`.
2. Tunjukkan ke tutor.
3. Device ID kalian ditulis di papan **Klub 200**!

### 🟡 Medium — "Data Pertamaku Online" (+10) 🌐
1. Alat menyala pakai **power bank** (tanpa laptop).
2. Dashboard menampilkan angka **alat kalian** (bukan 26°C / 60%).
3. Tiup sensor → angka di dashboard ikut berubah. Tunjukkan ke tutor!

### 🔴 Hard — "Dashboard Punya Kami" (+15) 🎨
1. Nama kelompok & anggota di **Profil Kelompok**.
2. Judul **header** = nama alat kalian.
3. Ganti **3 warna** di `:root` (`--warna-primer`, `--warna-sekunder`, `--warna-biru`).

Angka sensor harus **tetap muncul** setelah diubah!

---

## Pembuka Materi: Cover & Pertanyaan Pemantik

- **Tagline cover:** Angka suhu dari mejamu terbang ke internet dan tampil di website kalian sendiri.
- **Pertanyaan pemantik:** Website cuaca selalu menampilkan suhu terbaru. Dari mana website itu tahu angkanya, padahal tidak punya termometer?
- **Konteks:** Website tidak mengukur apa-apa. Ada alat lain yang bekerja diam-diam di belakangnya.
- Tampung 2–3 tebakan siswa (+2 per penebak), jawabannya dibahas di slide *Perjalanan Data*.

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
- Cara data sensor sampai ke dashboard (firmware, server, Device ID).
- Aturan lengkap serah folder & alamat website kelompok.

---

## Post-Test (5 soal, pilihan ganda)

**1. Di firmware proyek akhir, baris yang diisi siswa hari ini adalah…**
A. `SERVER_URL` dan `API_KEY` B. `DEVICE_ID` diganti nama sendiri C. `WIFI_SSID` dan `WIFI_PASSWORD` D. Semua baris di bawah tulisan `JANGAN UBAH`

**2. Serial Monitor menulis `Kirim data -> kode respons: 200`. Artinya…**
A. Data diterima server, seperti centang dua di WhatsApp B. Ada 200 kesalahan C. Suhu ruangan 200 derajat D. WiFi belum tersambung

**3. Serial Monitor menampilkan `Menghubungkan ke WiFi.........` dan titiknya tidak pernah berhenti. Penyebab paling mungkin adalah…**
A. Kabel sensor DHT22 longgar B. LED terbalik C. Warna dashboard salah D. Nama atau password WiFi salah

**4. Untuk mengganti warna tema dashboard, bagian yang diubah adalah…**
A. `api.js` B. Kode warna di `:root` paling atas `style.css` C. Bagian `<script>` di bawah `index.html` D. `DEVICE_ID` di firmware

**5. Laptop dimatikan, ESP32 dicolok ke power bank. Apakah dashboard tetap menampilkan suhu terbaru?**
A. Tidak, karena program hilang saat laptop mati B. Tidak, karena dashboard hanya jalan di laptop yang meng-upload C. Ya, karena program tersimpan di ESP32 dan power bank memberi listrik D. Ya, tapi hanya kalau sensor dicabut

---

## KHUSUS TUTOR (jangan ditampilkan)

### Kunci Challenge

**Easy:** baris `Kirim data -> kode respons: 200` terlihat di Serial Monitor dari rakitan kelompok sendiri.

**Medium:** bukti = dashboard menampilkan angka selain angka contoh (26°C / 60%) dan berubah saat sensor ditiup, alat tidak tersambung ke laptop. Kelompok tanpa power bank: boleh tetap tersambung ke laptop, asalkan angka di dashboard berubah saat ditiup.

**Hard:** cek 3 poin. Kalau data hilang setelah dikustom, biasanya siswa tidak sengaja menghapus `<span id="angkaSuhu">` / `id="angkaLembap"` atau bagian `<script>`. Perbaiki dengan menyalin ulang `index.html` dari zip asli lalu ulangi kustom (lebih cepat daripada mencari tanda yang hilang).

### Kunci Post-Test
1. C 2. A 3. D 4. B 5. C

### Pembahasan singkat
- No. 1: `DEVICE_ID` sudah diisi tutor dan tidak boleh diganti. Zona merah tidak pernah diubah.
- No. 3: firmware menunggu WiFi dulu sebelum membaca sensor, jadi masalah kabel sensor tidak membuat titik-titik macet.
- No. 5: firmware tersimpan di memori ESP32; power bank hanya memberi listrik. Dashboard bisa dibuka dari perangkat lain.

---------- SELESAI ISI MATERI AJAR ----------
