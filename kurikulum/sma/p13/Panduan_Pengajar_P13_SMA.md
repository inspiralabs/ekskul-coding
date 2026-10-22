# Panduan Pengajar — P13 SMA: Dashboard Punya Kita + Demo Day

Sabtu, 14 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P13, `sumber/Materi_Ajar_P13_SMA_InspiraLabs.md` (rubrik & kunci di KHUSUS TUTOR), folder kelompok dari zip P11, folder Kode P13 (`C3_P13_Hard_PanelTips/panel_tips.txt`).

## Tujuan (yang bisa dilihat di akhir kelas)
1. Dashboard tiap kelompok punya **nama, warna, dan (bila ada) foto sendiri**, dan siswa bisa menunjuk di mana mengubahnya (`:root`, PROFIL KELOMPOK).
2. Siswa bisa **mengubah aturan** dashboard (ambang & teks peringatan) dan membuktikannya dengan banner yang muncul.
3. Website kelompok **tayang** di `https://sma-0X.inspiralabs.id` dan tiap kelompok **mendemokan** alat + website ±2 menit.

## Persiapan H-1
- [ ] Backend online: `https://api-ekskulcoding.inspiralabs.id/health` → `ok`. Semua alat kelompok masih mengirim data (buka `sma-01` … `sma-06`).
- [ ] `py tools/kelompok.py paket` → simpan `dist/paket/sma-0X.zip` di flashdisk, untuk kelompok yang folder P11-nya hilang.
- [ ] Jalankan `SCRIPT_P13_SMA.gs`: folder Kode berisi `C3_P13_Hard_PanelTips/panel_tips.txt`; link "Kode P13" & "Post Test Pertemuan 13" di Linktree aktif.
- [ ] Coba sendiri snippet panel tips di satu folder kelompok: panel muncul, tips berubah saat sensor digenggam/ditiup.
- [ ] Laptop tutor siap deploy: repo ter-update, `py tools/kelompok.py deploy` jalan (`--dry-run` dulu), akses push ke `master`.
- [ ] Tempat pengumpulan zip (flashdisk / folder Drive) + daftar centang `sma-01` … `sma-06`.
- [ ] Print **rubrik Demo Day** (Khusus Tutor). Kertas PIN kelompok (dari P12) dibawa untuk yang lupa.
- [ ] WiFi kelas 2.4 GHz + hotspot cadangan, 2 power bank.

## 15 menit sebelum kelas
- Nyalakan semua alat, pastikan angka di tiap dashboard hidup.
- Urutan Demo Day ditulis di papan (sukarela dulu, sisanya undian).
- Proyektor + HDMI siap; timer HP 2,5 menit.

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–5 | 1–5 | Cover, pemantik, agenda, cara dapat poin | Tampung 2–3 jawaban (+2), jangan dijawab dulu |
| 5–12 | 6–9 | Folder website, `:root`, profil & foto, Tanya Jawab | Jawab pemantik di slide 6. Demo live: ganti 1 warna di proyektor |
| 12–17 | 10 | Easy: Ganti Baju Dashboard | Pastikan semua bisa membuka `index.html` di Chrome |
| 17–21 | 11–12 | Otak dashboard, Tanya Jawab | Ctrl+F `AMBANG_BATAS_SUHU_TINGGI` |
| 21–28 | 13 | Medium: Aturan Kita Sendiri | Ingatkan: kembalikan ambang ke angka masuk akal |
| 28–31 | 14–15 | Panggung bonus, Tanya Jawab | Kode **disalin**, bukan diketik |
| 31–39 | 16 | Hard: Panel Tips Pintar | Mulai terima zip & deploy yang sudah siap |
| 39–42 | 17–18 | Serahkan website, website online | Kumpulkan semua zip apa adanya |
| 42–58 | 19 | Demo Day 6 × ±2,5 menit | Isi rubrik sambil menonton; penanya +2 |
| 58–62 | 20–21 | Tanya Jawab pengembangan + peta | 2–3 siswa berbagi (+2) |
| 62–70 | 22–23 | Post-test + penutup + foto bersama | |

Waktu molor? Urutan yang boleh dipangkas: (1) Hard jadi demo tutor (tempel snippet di proyektor), (2) Medium cukup ganti teks peringatan. **Demo Day tidak dipotong.** Yang belum selesai **tidak** jadi PR: zip dikumpulkan apa adanya.

## Kalimat kunci
- "Fitur dashboard kalian semua sama. Yang bikin beda: tampilannya dan cara dia 'ngomong' ke pengunjung."
- "`:root` itu remote tema. Ganti di satu tempat, seluruh website ikut."
- "`if` artinya 'kalau'. Kalian yang menentukan kapan website menganggap ruangan panas."
- "Edit → Save → Refresh. Tiga langkah itu siklus kerja web developer."
- "Website-nya online, tapi tombol kipas tetap dikunci PIN. Lihat boleh, pencet jangan."

## Manajemen kelas
- **Berdua (sma-04/05/06):** satu pegang laptop (edit kode), satu pegang alat & foto (cek alat online, latihan demo). Tukar di Topik 2. Saat Demo Day **keduanya bicara**.
- **Individu (sma-01/02/03):** Easy dulu, lalu Medium. Hard kalau waktu cukup. Saat Demo Day boleh minta tetangga memegang alat.
- Siswa yang cepat selesai Easy: tunjukkan dashboard-nya di proyektor 10 detik ("siapa yang berani warna paling nyeleneh?"). Ini memancing yang lain.
- Remaja grogi tampil: format 4 langkah di slide 19 adalah "naskah"; boleh membaca catatan. Tepuk tangan setelah tiap penampil.
- Pertanyaan penonton: maksimal 1 per penampil, utamakan siswa yang belum dapat +2.

## Titik cek pemahaman
| Kapan | Tanya | Jawaban yang dicari |
|---|---|---|
| Setelah Easy | "Kalau mau ganti warna tombol & judul sekaligus, ubah di mana?" | Variabel di `:root` |
| Setelah Medium | "Ambang 31, suhu 30. Banner muncul?" | Tidak, 30 tidak lebih besar dari 31 |
| Setelah Hard | "Kenapa aturan kelembapan harus sebelum `else` terakhir?" | Aturan dicek dari atas; `else` = sisanya |
| Demo Day | "Angka di website ini datang dari mana?" | Sensor → ESP32 → WiFi → server → website |

## Kesalahan umum & cara membimbing (jangan langsung beri jawaban)
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| Perubahan tidak terlihat | "Sudah Save? Sudah Refresh? Yang kamu buka di Chrome file dari folder mana?" |
| Seluruh tampilan berantakan setelah edit CSS | "Bandingkan baris yang kamu ubah dengan aslinya: ada `;` atau `}` yang hilang?" |
| Warna kembali default | "Nama variabelnya masih persis `--warna-primer`?" |
| Banner tidak muncul padahal ambang sudah diturunkan | "Tanda kutip & tanda `+` masih lengkap? Buka Console (F12), ada tulisan merah?" |
| Panel tetap "Menunggu data..." | "`id` di `<p>` dan di `getElementById` sama persis?" |
| Foto tidak tampil | "Nyalakan *File name extensions*. Nama lengkap filenya apa?" |
| `class`/`id` ikut diganti → tampilan rusak | "Yang boleh diganti teks atau tag? Bandingkan dengan zip asli." |

Kalau setelah **2 pertanyaan** masih buntu, tunjukkan **lokasi**-nya ("cek baris yang kamu ubah terakhir"), bukan perbaikannya.

## Troubleshooting cepat (tutor)
| Gejala | Penyebab | Tindakan |
|---|---|---|
| Angka dashboard `--` terus | Alat mati/tidak online, atau folder kelompok lain | Cek Serial Monitor alat (kode respons 200?), cek Device ID di `api.js` |
| Folder kelompok hilang | Belum disimpan dari P11 | Pakai `dist/paket/sma-0X.zip` dari flashdisk |
| Kotak PIN muncul terus saat demo kipas | PIN salah tersimpan di browser | Masukkan ulang PIN dari kertas P12 |
| Deploy ditolak | Tidak ada `index.html` / zip > 10 MB | Kecilkan foto, cek nama file, zip ulang |
| `api.js` diubah siswa | — | Tidak masalah: saat deploy selalu diganti versi tutor |
| Alat gagal online saat Demo Day | WiFi/daya | > 1 menit → demo dari website kelompok lain/alat tutor + penjelasan; nilai penjelasan tetap penuh |
| WiFi kelas putus | — | Pindah hotspot cadangan (isi 2 baris WiFi firmware + upload), atau Demo Day dari website + cerita |

## Serah terima & deploy (selama kelas)
1. Terima `sma-0X.zip`, centang di daftar.
2. `py tools/kelompok.py deploy sma-0X D:\kiriman\sma-0X.zip --dry-run` → kalau aman, ulangi tanpa `--dry-run`.
3. `git add kelompok/sma-0X` → commit → push (bisa beberapa kelompok sekaligus). Deploy otomatis berjalan di server.
4. Buka `https://sma-0X.inspiralabs.id` di proyektor saat Demo Day kelompok itu: momen "website kita online!".
- Yang belum sempat: tutor deploy setelah kelas dan membagikan link di grup. Siswa **tidak** perlu mengerjakan apa pun lagi.

## Keselamatan
- Alat tidak dibongkar hari ini. Hanya kipas DC 5V; cabut USB kalau ada kabel yang harus dibetulkan.
- PIN kelompok **tidak** ditampilkan di proyektor.
- Foto anggota di website hanya dengan persetujuan anggota (dan wali, bila sekolah mewajibkan). Boleh pakai foto alat saja.

## Diferensiasi
- **Cepat selesai:** isi kotak kosong `bagianGrafik` (grafik riwayat via CDN) atau ubah aturan status suhu (22/29) di kartu suhu; bantu tetangga dengan **bertanya**, bukan mengambil alih keyboard.
- **Kesulitan:** fokus Easy (nama + 1 warna) + siap Demo Day. Medium cukup ganti teks peringatan.

## Penilaian
- **Keaktifan:** +2 per bertanya/menjawab, termasuk penonton Demo Day.
- **Challenge:** Easy **+5**, Medium **+10**, Hard **+15** (leaderboard), untuk kedua anggota pasangan.
- **Demo Day:** rubrik 1–4 (Fungsi · Dashboard · Penjelasan · Presentasi), lihat Khusus Tutor.
- **Post-test:** 5 soal, kunci B, C, A, B, D.

## Penutup
- Refleksi: 1 hal yang dulu terasa susah (instal Arduino IDE? WiFi? kabel relay?) dan sekarang bisa dijelaskan. Kaitkan ke profesi: IoT engineer, web developer, teknisi elektronika.
- Umumkan: website tetap online di `https://sma-0X.inspiralabs.id`; angkanya hidup selama alat menyala & tersambung WiFi.
- **Tidak ada PR.** Tutor setelah kelas: deploy sisa zip, kirim link ke tiap kelompok, arsipkan rubrik & nilai.
