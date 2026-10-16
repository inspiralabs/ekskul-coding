# Panduan Pengajar — P12 SMP: Data Muncul di Dashboard & Kustom Website-mu

Jum'at, 6 November 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P12_SMP_InspiraLabs.md`.

> Prinsip hari ini: siswa hanya mengganti **teks** (nama, anggota, judul), **3 kode warna**, dan menambahkan **satu foto**. `api.js` dan bagian `<script>` tidak disentuh.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Menyalakan alat dengan power bank (tanpa laptop) dan menunjukkan dashboard yang angkanya berubah saat sensor ditiup.
2. Menunjukkan dashboard dengan nama kelompok, anggota, judul alat, dan 3 warna baru, dan angka sensor masih muncul.
3. Menyebutkan minimal 3 aturan serah folder (index.html, foto di dalam folder, api.js tidak diubah, ≤ 5 MB).

## 2. Persiapan

### H-1
- [ ] Cek backend: `https://api-ekskulcoding.inspiralabs.id/health`.
- [ ] Buka `index.html` salah satu kelompok di laptop kelas (double-click). Angka contoh 26°C/60% harus berganti jadi data sungguhan dalam ±5 detik. Kalau tidak berganti padahal Serial Monitor `200`: catat dan laporkan ke admin backend sebelum kelas.
- [ ] Pastikan semua Device ID sudah pernah `200` di P11. Yang belum → jadwalkan 10 menit pertama.
- [ ] **Charge semua power bank** (13 buah, atau pinjam). Tes satu power bank dengan ESP32 selama 2 menit: kalau mati sendiri (mode hemat), tandai jangan dipakai.
- [ ] Siapkan zip cadangan `smp-XX.zip` (kalau folder siswa rusak: extract ulang, isi WiFi, upload lagi).
- [ ] Siapkan cara memindahkan foto dari HP ke laptop (kabel, Google Drive, atau WhatsApp Web). Siapkan HP tutor untuk memotret kelompok yang lupa membawa foto.
- [ ] Siapkan contoh folder `smp-99` untuk Challenge Hard (ada di Kunci Materi Ajar) di slide/papan.

### 15 menit sebelum kelas
- [ ] Tulis WiFi kelas di papan (sama seperti P11). Nyalakan hotspot cadangan.
- [ ] Di laptop demo tutor: buka VS Code + `smp-XX` contoh untuk demo kustom di proyektor.
- [ ] Tampilkan di papan: "Save (Ctrl+S) → Refresh (F5)".

### Isi kit per kelompok/individu
Alat P11 (firmware sudah terpasang) · power bank terisi + kabel USB · laptop dengan folder `smp-XX` · foto kelompok di HP.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1 | Pembuka | Semua alat dicolok ke power bank. Tunjuk peran |
| 5–8 | 2–5 | Cover, pemantik, agenda, peran | Tampung tebakan pemantik |
| 8–12 | 6–7 | Alat "kesepian", perjalanan data | Gambar rantai DHT22 → … → Dashboard di papan |
| 12–20 | 8 | Praktek buka dashboard | Tampilkan dashboard satu kelompok di proyektor, ajak semua meniup |
| 20–23 | 9–10 | Tips dashboard diam + forum | Jawab pemantik: website hanya menampilkan data dari server |
| 23–27 | 11 | 🟢 Easy (wajib) | Cek: alat tanpa laptop, angka berubah. +10 |
| 27–35 | 12–15 | Boleh & jangan, profil, warna, foto | **Demo langsung** tiap kustom di proyektor (30 detik per langkah). **Ganti peran** |
| 35–37 | 16 | Forum | |
| 37–52 | 17 | 🟡 Medium | Keliling. Prioritas: nama & warna dulu, foto terakhir |
| 52–55 | 18 | Aturan serah folder | Tunjukkan cara cek ukuran folder |
| 55–60 | 19 | 🔴 Hard | Tampilkan folder `smp-99` |
| 60–62 | 20 | Peta proyek | Ingatkan bawa kotak bekas ke P13 |
| 62–70 | 21–22 | Post-test | Sendiri-sendiri |

## 4. Kalimat kunci

- **Pembuka:** "Minggu lalu suhu kalian cuma terlihat di laptop. Hari ini terlihat di website kalian sendiri, dan bisa dibuka siapa saja."
- **Perjalanan data:** "Seperti kirim surat. ESP32 menulis surat berisi suhu, server itu kantor posnya, dashboard yang membaca surat terbaru."
- **Tanpa laptop:** "Laptop boleh mati, tapi ESP32 tetap butuh listrik. Itu tugas power bank."
- **Kustom:** "Ganti tulisannya saja. Tanda kurung siku `< >` itu pagar, jangan dirobohkan."
- **Save → Refresh:** "Belum berubah? Sudah Ctrl+S? Sudah F5?"
- **Foto:** "Nama foto harus persis `foto-kelompok.jpg`. Satu huruf beda, fotonya menghilang."

## 5. Mengelola kelas 12–15 tahun

- **Hari kreatif = rawan ribut.** Beri batas waktu yang jelas: "Kalian punya 5 menit untuk memilih nama alat. Setelah itu Operator mulai mengetik."
- **Peran** (slide 5): Operator (mengetik), Desainer (warna), Fotografer (foto & kecilkan), Pengecek (ejaan & aturan). Keputusan nama & warna diputuskan **bersama**, Operator tidak boleh memutuskan sendiri. Ganti peran di menit 27.
- **Kelompok berempat:** Fotografer dan Desainer bisa bekerja paralel di HP (cari kode warna di Google "color picker", resize foto) sementara Operator mengetik nama.
- **Peserta individu:** pegang semua peran; minta teman sebelah jadi Pengecek ejaan & aturan folder. Foto diri boleh, atau foto alatnya.
- **Konten pantas:** nama kelompok & judul harus sopan (website akan online dan bisa dilihat orang tua/sekolah). Sampaikan di awal.
- **Quick win:** angka pertama di dashboard (menit ±15), tiup sensor bersama, warna pertama berubah.

## 6. Titik cek pemahaman

- Setelah slide 7: "Urutkan bersama: DHT22, ESP32, …" (kelas melanjutkan: WiFi, internet, server, dashboard).
- Setelah slide 10: **jempol**: "Laptop dimatikan, dashboard tetap jalan? Jempol atas = ya." (ya, selama power bank & WiFi ada).
- Setelah slide 12: "File mana yang tidak boleh diubah?" (api.js).
- Setelah slide 18: "Sebutkan satu aturan serah folder", tunjuk 3 siswa berbeda.

## 7. Kesalahan yang sering terjadi & cara membantu

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Lupa Save / lupa Refresh | "Lihat tab file di VS Code, ada titik bulat? Sudah tekan F5?" |
| Menghapus tanda `<` `>` atau `</h2>` | "Bandingkan dengan slide 13. Ada pagar yang hilang?" |
| Angka sensor hilang setelah kustom | "Apa yang kamu hapus selain teks?" → kalau buntu, salin ulang `index.html` dari zip asli, ulangi kustom |
| Titik koma `;` atau `#` di warna terhapus | "Baris warna lain bentuknya bagaimana? Bandingkan." |
| Foto tidak muncul | "Nama filenya persis? Huruf besar? Akhirannya `.jpg` atau `.jpeg`? Foto ada di folder yang sama dengan `index.html`?" |
| `foto-kelompok.jpg.jpg` | Nyalakan View → **File name extensions** di File Explorer, lalu "Sekarang namanya apa?" |
| Edit file di dalam zip (bukan folder hasil extract) | "Folder ini dari mana? Yang di Desktop atau di dalam zip?" |
| Warna teks tidak terbaca | "Coba baca dari belakang kelas. Terbaca?" |

## 8. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| Angka tetap 26°C / 60% | ESP32 belum mengirim | Colok ke laptop, Serial Monitor harus `200` (pakai tabel P11) |
| Serial Monitor macet di titik-titik | WiFi salah / 5 GHz / sinyal lemah | Cek zona hijau, dekatkan ke router, hotspot 2.4 GHz |
| Angka tidak berubah saat ditiup | Sensor dibaca tiap 4 detik | Tiup 5 detik, tunggu 10 detik |
| ESP32 di power bank mati sendiri | Power bank mode hemat | Ganti power bank atau colok laptop |
| Dashboard menampilkan data kelompok lain | Folder tertukar | Cek nama folder & Device ID di HANDOUT |
| Halaman berantakan / putih setelah kustom | Tag HTML rusak | Ctrl+Z di VS Code, atau salin ulang `index.html` asli |
| Warna tidak berubah | Salah file / tidak Save | Warna ada di `style.css`, bukan `index.html` |
| Folder > 5 MB | `firmware/.pio` atau foto besar | Hapus `firmware/.pio`; resize foto ke lebar 800 px |

## 9. Keselamatan

- Power bank: jangan dipakai kalau menggembung/panas. Jangan ditindih atau dibanting.
- ESP32 + DHT22 tetap rendah tegangan; tidak ada listrik PLN di meja.
- **Privasi:** foto & nama siswa akan online di `smp-XX.inspiralabs.id`. Pastikan sekolah/orang tua sudah setuju. Siswa yang tidak mau wajahnya tampil boleh memakai foto alat atau gambar lain. Jangan tulis nomor HP, alamat, atau info pribadi lain di website.

## 10. Diferensiasi

- **Siswa cepat:** Challenge Hard; lalu bonus: ganti emoji ikon (🌡️, 💧) atau isi kotak `.kotak-kosong` ("TAMBAHKAN ELEMEN KAMU DI SINI") dengan kalimat/ide sendiri, atau ganti warna lain di `:root` (`--warna-panas`, `--warna-dingin`).
- **Siswa kesulitan:** target minimum: data tampil + nama kelompok & anggota benar. Tutor mendampingi langkah demi langkah ("Tekan Ctrl+F. Ketik PROFIL. Sekarang ganti tulisan 'Nama Kelompok Kami' saja."). Warna dan foto boleh menyusul di P13.

## 11. Penilaian

- **Challenge:** +10 per challenge (leaderboard). Easy wajib.
  - Easy lulus = alat tanpa laptop, angka selain 26/60 tampil dan berubah saat ditiup.
  - Medium lulus = 4 poin (nama & anggota, judul, 3 warna, foto) **dan** angka sensor masih tampil.
  - Hard lulus = minimal 4 pelanggaran `smp-99` ditemukan + cara memperbaikinya + ukuran folder sendiri dicek.
- **Progres proyek akhir:** data tampil + profil terisi + warna diganti.
- **Post-test:** 5 soal, individu. Kunci: 1B 2A 3C 4D 5A.

## 12. Penutup & PR

- PR: bawa **kotak bekas** (kardus kecil, kotak plastik, kotak pensil) untuk casing, plus double tape/selotip. **Bukan** kaleng/kotak logam.
- Yang belum memasang foto: siapkan `foto-kelompok.jpg` (sudah dikecilkan) untuk P13.
- Teaser P13: "Minggu depan alat kalian dapat 'rumah', kalian presentasi, dan website kalian online."
- Setelah kelas: catat kelompok yang dashboard-nya belum menampilkan data atau kustomnya belum selesai.
