# Panduan Pengajar — P12 SMP: Kirim Suhu ke Internet & Dashboard-mu

Jum'at, 6 November 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P12_SMP_InspiraLabs.md`.

> Prinsip hari ini: **firmware dipakai apa adanya.** Siswa hanya mengganti `ISI_DI_SINI` dengan nama & password WiFi, lalu mengganti **teks** (nama, anggota, judul) dan **3 kode warna** di dashboard. `api.js`, zona merah, dan bagian `<script>` tidak disentuh. Momen "wow" hari ini: **angka dari meja mereka muncul di website**.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Meng-upload firmware dari folder `smp-XX` dan menunjukkan Serial Monitor dengan `kode respons: 200`.
2. Menyalakan alat dengan power bank dan menunjukkan dashboard yang angkanya berubah saat sensor ditiup.
3. (Target lanjut) Dashboard berisi nama kelompok, anggota, judul alat, dan 3 warna baru, angka sensor tetap muncul.

## 2. Persiapan

### H-1
- [ ] Jalankan `SCRIPT_P12_SMP.gs` → folder **Kode** (`P12_1_TesWiFi`) + Google Form post-test ada di Drive. Perbarui tombol "Post Test Pertemuan 12" di Linktree.
- [ ] `py tools/kelompok.py paket` → `dist/paket/smp-XX.zip`.
- [ ] **Di laptop tiap kelompok:** extract `smp-XX.zip` ke Desktop, double-click `smp-XX/firmware/smp_room_monitor/smp_room_monitor.ino` → **Verify (✓)** sekali. Tempel stiker `smp-XX` di laptop. Pastikan **VS Code** terpasang.
- [ ] Pastikan rakitan DHT22 dari P11 masih utuh; bawa DHT22 & jumper cadangan.
- [ ] **Uji WiFi kelas** dengan board cadangan: upload firmware salah satu kelompok, lihat `200`. Pastikan WiFi **2.4 GHz**. Siapkan hotspot HP cadangan (2.4 GHz, kuota cukup).
- [ ] Cek backend: `https://api-ekskulcoding.inspiralabs.id/health`. Buka `index.html` kelompok yang tadi: angka contoh 26°C/60% harus berganti jadi data sungguhan dalam ±5 detik.
- [ ] **Charge semua power bank.** Tes satu power bank dengan ESP32 selama 2 menit: kalau mati sendiri (mode hemat), tandai jangan dipakai.

### 15 menit sebelum kelas
- [ ] Tulis di papan: **nama WiFi & password** (huruf besar-kecil persis), papan **"Klub 200"** (kosong), dan "Save (Ctrl+S) → Refresh (F5)".
- [ ] Di laptop demo tutor: buka VS Code + `smp-XX` contoh untuk demo kustom di proyektor.
- [ ] Siapkan kertas/spreadsheet pencatat poin.

### Isi kit per kelompok/individu
Rakitan P11 (ESP32 + DHT22 di D4) · kabel USB data · laptop dengan folder `smp-XX` · power bank terisi · kertas untuk Pencatat.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1–6 | Pembuka, cover, pemantik, agenda, peran, poin | Tampung tebakan pemantik (+2). Tunjuk peran |
| 5–10 | 7–9 | Perjalanan data, folder, zona hijau/merah | Gambar rantai DHT22 → … → Dashboard di papan. Tunjuk persis baris `ISI_DI_SINI` di proyektor |
| 10–22 | 10 | Praktek upload firmware | Keliling. Pengecek membandingkan nama WiFi huruf demi huruf |
| 22–25 | 11–12 | Cerita ESP32 + tips belum 200 | Tunjukkan output satu kelompok di proyektor |
| 25–27 | 13 | Tanya Jawab | +2 per penjawab |
| 27–30 | 14 | 🟢 Easy | Tulis Device ID di papan Klub 200. +5 |
| 30–36 | 15 | Praktek power bank + dashboard | Tampilkan dashboard satu kelompok di proyektor, ajak semua meniup |
| 36–39 | 16 | 🟡 Medium | Cek: tanpa laptop, angka bukan 26/60, berubah saat ditiup. +10 |
| 39–45 | 17–19 | Boleh & jangan, profil, warna | **Demo langsung** di proyektor (±1 menit per langkah). **Ganti peran** |
| 45–47 | 20 | Tanya Jawab | +2 per penjawab |
| 47–60 | 21 | 🔴 Hard | Keliling. Prioritas: nama dulu, judul, lalu warna. +15 |
| 60–62 | 22 | Peta petualangan | "Minggu depan tidak perlu membawa apa-apa" |
| 62–70 | 23–24 | Post-test | Sendiri-sendiri |

## 4. Kalimat kunci (boleh dibacakan)

- **Pembuka:** "Minggu lalu suhu kalian cuma terlihat di laptop sendiri. Hari ini suhu itu terbang ke internet dan bisa dilihat dari HP siapa saja."
- **Perjalanan data:** "Seperti kirim surat. ESP32 menulis surat berisi suhu, server itu kantor posnya, dashboard yang membaca surat terbaru."
- **Zona hijau/merah:** "Zona hijau itu kolom formulir: isi nama dan password WiFi. Zona merah itu kunci rumah server. Disentuh, pintunya terkunci."
- **Device ID:** "smp-07 itu plat nomor alat kalian. Kalau dua motor plat nomornya sama, polisi bingung. Server juga."
- **Kode 200:** "Angka 200 artinya paketnya diterima, seperti centang dua di WhatsApp."
- **Kustom:** "Ganti tulisannya saja. Tanda `< >` itu pagar, jangan dirobohkan. Belum berubah? Sudah Ctrl+S? Sudah F5?"

## 5. Gaya mengajar: belajar sambil bermain

- **Papan "Klub 200"** = progress bar kelas. Setiap kali Device ID ditulis, ajak tepuk tangan kecil.
- **Momen bersama:** setelah beberapa dashboard jalan, hitung "1… 2… 3… tiup!" satu kelas, lalu lihat angka di proyektor naik.
- **Menunggu upload itu membosankan.** Saat compile/Upload berjalan, Desainer mulai memikirkan nama alat & 3 warna di kertas; Penjaga Alat menekan ulang semua kabel.
- **Hari kreatif = rawan ribut.** Beri batas waktu: "5 menit memilih nama alat, setelah itu Operator mulai mengetik."
- **WiFi macet di banyak kelompok sekaligus** → sinyal diam, pindahkan semua ke hotspot cadangan bersama-sama (tulis nama hotspot di papan), daripada membantu satu per satu.
- **Peran berputar:** Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 39). Keputusan nama & warna diputuskan **bersama**.
- **Peserta individu:** pegang semua peran; pasangkan dengan individu sebelah sebagai "teman cek" untuk membandingkan nama WiFi & ejaan nama.
- **Konten pantas:** nama kelompok & judul harus sopan (website akan online dan bisa dilihat orang tua/sekolah). Sampaikan di awal Topik 2.

## 6. Sistem poin & cara mencatat

| Kegiatan | Poin | Untuk siapa |
|---|---|---|
| Bertanya / menjawab (pemantik, Tanya Jawab) | **+2** | Siswa yang bicara (benar atau salah, yang penting berani) |
| 🟢 Easy | **+5** | Setiap anggota kelompok |
| 🟡 Medium | **+10** | Setiap anggota kelompok |
| 🔴 Hard | **+15** | Setiap anggota kelompok |

- Catat +2 dengan turus saat itu juga. Gilir yang menjawab: utamakan yang belum pernah dapat.
- Rekap ke gradebook setelah kelas. **Tidak ada PR.**

## 7. Titik cek pemahaman

- Setelah slide 9: "Tunjuk dengan jari di layar kalian: baris mana yang boleh diubah?" (`WIFI_SSID`, `WIFI_PASSWORD`).
- Setelah slide 11: **jempol**: "Jempol atas kalau sudah lihat 200." Catat yang belum.
- Setelah slide 12: tutor membacakan gejala, kelas menjawab serentak: "Titik-titik tidak berhenti?" (WiFi) · "Gagal baca sensor?" (kabel) · "Minus satu?" (internet).
- Setelah slide 17: "File mana yang tidak boleh diubah?" (api.js).

## 8. Kesalahan yang sering terjadi & cara membantu

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Nama WiFi beda huruf besar/kecil atau ada spasi | "Bandingkan huruf demi huruf dengan papan. Pengecek, bacakan pelan-pelan." |
| Tanda kutip `"` ikut terhapus (error merah saat compile) | "Lihat baris yang kamu ketik. Bentuknya sama dengan baris di atasnya?" |
| Lupa Save sebelum Upload | "Di judul tab file ada titik bulat? Artinya apa?" |
| Arduino IDE bertanya *"needs to be inside a sketch folder"* | "Kamu membuka dari folder mana?" → buka dari `firmware/smp_room_monitor/` |
| Mengubah `DEVICE_ID` | "Device ID itu plat nomor. Boleh diganti?" → kembalikan sesuai nama folder |
| Lupa Save / Refresh di VS Code | "Lihat tab file di VS Code, ada titik bulat? Sudah tekan F5?" |
| Menghapus tanda `<` `>` atau `</h2>` | "Bandingkan dengan slide 18. Ada pagar yang hilang?" |
| Angka sensor hilang setelah kustom | "Apa yang kamu hapus selain teks?" → kalau buntu, salin ulang `index.html` dari zip asli, ulangi kustom |
| Titik koma `;` atau `#` di warna terhapus | "Baris warna lain bentuknya bagaimana? Bandingkan." |
| Edit file di dalam zip (bukan folder hasil extract) | "Folder ini dari mana? Yang di Desktop atau di dalam zip?" |

## 9. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| Titik-titik `......` tidak berhenti | Nama/password salah, WiFi 5 GHz, sinyal lemah | Cek huruf; pindah ke hotspot 2.4 GHz; dekatkan ke router |
| `Gagal baca sensor DHT22…` | Out bukan di D4, longgar, + − tertukar | Cabut USB, checklist P11 |
| `kode respons: -1` | WiFi tanpa internet | Cek kuota hotspot, coba WiFi lain |
| `kode respons: 401` | Zona merah (`API_KEY`) berubah | Extract ulang zip asli, isi WiFi lagi, upload |
| Serial Monitor kosong | Pesan awal terlewat | Tekan **EN** di board |
| Error merah saat compile setelah mengisi WiFi | Tanda kutip/titik koma terhapus | Bandingkan dengan baris di atasnya, atau extract ulang zip |
| Masih bingung WiFi atau sensor? | — | Upload `P12_1_TesWiFi.ino` (WiFi saja) atau `P11_1_BacaDHT22.ino` (sensor saja), lalu upload lagi firmware proyek |
| Dashboard tetap 26°C / 60% | ESP32 belum mengirim | Colok ke laptop, Serial Monitor harus `200` |
| Angka tidak berubah saat ditiup | Data dikirim tiap 4 detik | Tiup 5 detik, tunggu 10 detik |
| ESP32 di power bank mati sendiri | Power bank mode hemat | Ganti power bank atau colok laptop |
| Dashboard menampilkan data kelompok lain | Folder tertukar | Cek nama folder & Device ID di HANDOUT |
| Halaman berantakan / putih setelah kustom | Tag HTML rusak | Ctrl+Z di VS Code, atau salin ulang `index.html` asli |
| Warna tidak berubah | Salah file / tidak Save | Warna ada di `style.css`, bukan `index.html` |

## 10. Keselamatan

- Tegangan kit rendah (USB), aman disentuh. Cabut USB sebelum memindah kabel.
- Power bank: jangan dipakai kalau menggembung/panas. Jangan ditindih atau dibanting.
- **Privasi:** nama siswa akan online di `smp-XX.inspiralabs.id`. Jangan tulis nomor HP, alamat, atau info pribadi lain di website.

## 11. Diferensiasi

- **Siswa cepat:** Challenge Hard; lalu bonus: ganti emoji ikon (🌡️, 💧) atau isi kotak `.kotak-kosong` ("TAMBAHKAN ELEMEN KAMU DI SINI") dengan kalimat sendiri, atau ganti warna lain di `:root` (`--warna-panas`, `--warna-dingin`). Boleh juga jadi "asisten tutor" untuk kelompok yang belum 200 (hanya dengan pertanyaan).
- **Siswa kesulitan:** fokus satu target: `200` lalu angka di dashboard. Tutor duduk di samping dan membimbing langkah demi langkah ("Cari tulisan ISI_DI_SINI. Hapus hanya tulisan itu, ketik nama WiFi."). Kustom boleh dilanjutkan di awal P13.

## 12. Penilaian

- **Keaktifan:** +2 per tanya/jawab.
- **Challenge** (leaderboard, per anggota kelompok):
  - 🟢 Easy +5 = `kode respons: 200` dari rakitan sendiri.
  - 🟡 Medium +10 = alat dengan power bank, angka bukan 26/60 tampil di dashboard dan berubah saat ditiup.
  - 🔴 Hard +15 = nama & anggota, judul, 3 warna diganti **dan** angka sensor masih tampil.
- **Progres proyek akhir:** `200` + data tampil di dashboard.
- **Post-test:** 5 soal, individu. Kunci: 1C 2A 3D 4B 5C.
- **Tidak ada PR / tugas rumah.**

## 13. Penutup

- "Firmware sudah tersimpan di ESP32. Minggu depan: foto kelompok, rumah untuk alat, lalu kalian tampil di panggung. Tidak perlu membawa apa-apa, semua disiapkan."
- Setelah kelas (tutor): catat Device ID yang belum `200` atau dashboard-nya belum menampilkan data → selesaikan di 10 menit pertama P13. Siapkan kardus kecil untuk P13. Rekap poin ke gradebook.
