# Panduan Pengajar — P13 SMA: Rapikan, Kustom, Serahkan + Showcase

Sabtu, 14 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P13, `sumber/Materi_Ajar_P13_SMA_InspiraLabs.md` (rubrik & kunci di KHUSUS TUTOR), folder kelompok, foto P10 ("sebelum").

## Tujuan (yang bisa dilihat di akhir kelas)
1. Rakitan **rapi & berlabel** dan **tetap lolos** kontrol Manual + Otomatis setelah dirapikan.
2. Dashboard kelompok punya **profil, foto, dan ≥ 2 warna tema** sendiri; folder lolos checklist Siap Tayang dan diserahkan.
3. Setiap penampil melakukan **showcase ±2,5 menit**: masalah → demo → bedah rakitan → 1 masalah terberat → rencana.

## Persiapan H-1
- [ ] Alat tutor berjalan (demo pembuka & cadangan kalau alat kelompok gagal saat showcase).
- [ ] Bahan rapikan: jumper pendek, cable tie/selotip, label/spidol, gunting (cutter **hanya** dipegang tutor).
- [ ] Tempat pengumpulan folder (flashdisk / folder Drive per Device ID) + daftar centang sma-01…sma-06.
- [ ] Print **rubrik showcase** (Khusus Tutor), 1 lembar per penampil.
- [ ] Siapkan foto P10 tiap kelompok untuk dibandingkan.
- [ ] Hotspot cadangan 2.4 GHz, 2 power bank untuk demo.
- [ ] Tentukan **batas waktu** kirim folder untuk yang belum selesai (mis. Senin 16 November) dan umumkan.

## 15 menit sebelum kelas
- Urutan showcase ditulis di papan (acak atau sukarela). Penampil berikutnya bersiap selama penampil sekarang.
- Proyektor menampilkan dashboard penampil (laptop siswa atau `https://sma-XX.inspiralabs.id` kalau sudah tayang).
- Timer 2,5 menit siap (HP).

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–3 | — | Foto P10 vs alat tutor | "Mana yang siap dibawa ke pameran?" |
| 3–7 | 2–4 | Cover, pemantik (demo gagal), agenda | Tampung tebakan |
| 7–11 | 5–8 | Prototipe → alat, prinsip rapi, posisi sensor, forum Topik 1 | |
| 11–22 | 9 | Easy: Rakitan Rapi | **Cabut USB**, satu kabel per waktu |
| 22–25 | 10–12 | Kustom dashboard, foto, forum Topik 2 | Aktifkan *File name extensions* |
| 25–33 | 13 | Medium: Dashboard Kelompok | Berdua: paralel dengan Easy |
| 33–36 | 14–17 | Serah terima, website tayang, checklist demo, forum Topik 3 | Jawab pemantik di slide 16 |
| 36–42 | 18 | Hard: Siap Tayang | Kumpulkan folder yang lolos |
| 42–58 | 19 | Showcase 6 × ±2,5 menit | Isi rubrik sambil menonton |
| 58–61 | 20 | Refleksi semester | 1 kalimat per siswa: "skill yang paling berguna" |
| 61–70 | 21–22 | Post-test + penutup | |

Waktu molor? Hard boleh selesai di rumah (folder dikirim sebelum batas waktu). **Showcase tidak dipotong**: itu penilaian utama.

## Kalimat kunci
- "Merapikan = memindah kabel. Aturan P10 berlaku: **cabut USB, satu kabel per waktu, tes ulang**."
- "Sensor di sebelah ESP32 dalam kotak tertutup ikut kepanasan: angkanya bohong."
- "Website yang jalan di laptopmu bisa rusak online kalau memanggil file dari `C:\Users\...`. Semua file harus di dalam folder."
- "Mulai cerita dari **masalah** ('kelas kami panas'), bukan dari 'ini ESP32'."

## Manajemen kelas
- **Berdua:** satu merapikan rakitan (Easy), satu mengkustom dashboard (Medium), lalu sama-sama latihan showcase. **Keduanya wajib bicara** saat showcase (mis. satu cerita masalah & demo, satu bedah rakitan & troubleshooting).
- **Individu:** Easy dulu (rakitan harus jalan untuk showcase). Medium minimal profil + 1 warna; sisanya boleh di rumah.
- Remaja sering grogi tampil. Beri struktur 5 langkah slide 19 sebagai "naskah", izinkan membaca catatan. Tepuk tangan setelah tiap penampil.
- Pertanyaan audiens: maksimal 1 per penampil, dari siswa lain dulu, baru tutor.

## Titik cek pemahaman
| Kapan | Tanya | Jawaban yang dicari |
|---|---|---|
| Setelah Easy | "Tes apa yang membuktikan merapikan tidak merusak apa pun?" | Manual + Otomatis dari dashboard jalan lagi |
| Setelah Medium | "Foto tidak muncul: 3 kemungkinan?" | Nama file, lokasi folder, ekstensi tersembunyi |
| Showcase | "Kenapa D18, bukan D5? Kenapa NO?" | Strapping pin; fail-safe |

## Kesalahan umum & cara membimbing
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| Setelah dirapikan kipas tidak jalan | "Apa yang berubah sejak terakhir jalan? Cek tabel troubleshooting P10 baris mana?" |
| Kabel kipas pindah ke NC | "Saat relay tidak aktif, COM tersambung ke mana?" |
| Kabel IN bergeser satu lubang | "Ikuti kabel biru dengan jari: berhenti di pin berapa?" |
| Foto tidak tampil | "Nyalakan *File name extensions*. Nama lengkap filenya apa?" |
| `class`/`id` ikut diganti → tampilan rusak | "Yang boleh diganti teks atau tag? Bandingkan dengan zip asli." |
| Folder > 5 MB | "Folder mana yang paling besar? (`.pio`, foto asli HP)" |
| Tidak diminta PIN di incognito | Wajar kalau Device ID tidak terdaftar di server → lapor tutor, cek `FAN_PINS` |

## Troubleshooting cepat (tutor)
| Gejala | Tindakan |
|---|---|
| Alat gagal online saat showcase | Cek Serial (lapisan P11). > 1 menit → demo pakai alat tutor + video cadangan; nilai pemahaman tetap penuh |
| WiFi kelas putus | Semua pindah ke hotspot cadangan (isi 2 baris WiFi + upload) atau showcase dari video + penjelasan |
| `api.js` diubah | Ganti dengan salinan zip asli (saat deploy juga selalu diganti) |
| Deploy setelah kelas | `py tools/kelompok.py deploy sma-XX sma-XX.zip --dry-run`, lalu tanpa `--dry-run`; cek `https://sma-XX.inspiralabs.id` |

## Keselamatan
- Cabut USB saat merapikan. Cutter hanya dipakai tutor; gunting dipakai di meja, bukan di atas rakitan menyala.
- Hanya kipas DC 5V; terminal logam relay tidak boleh menonjol keluar casing.
- Saat showcase: PIN tidak ditampilkan di layar; foto anggota hanya dengan persetujuan anggota (dan wali, bila sekolah mewajibkan).

## Diferensiasi
- **Cepat:** Bonus dashboard (grafik riwayat via CDN, mode gelap, panel edukasi DHT22) atau casing kardus dengan lubang ventilasi untuk sensor; bantu cek checklist Siap Tayang kelompok lain.
- **Kesulitan:** prioritas = rakitan jalan + profil nama anggota. Warna & foto boleh dikirim menyusul sebelum batas waktu.

## Penilaian
- **Showcase (rubrik 1–4, 5 aspek):** Fungsi · Kerapian & keselamatan · Pemahaman · Troubleshooting · Presentasi & kerja sama. Peserta individu dinilai kejelasan & demo pada aspek kerja sama.
- **Serah terima:** folder lolos 5 poin Siap Tayang (dicek tutor saat deploy).
- Challenge Easy/Medium/Hard **+10** masing-masing. Post-test: kunci B, A, B, B, C.

## Penutup
- Refleksi: apa yang dulu terasa sulit (pinout? active-LOW? WiFi?) dan sekarang bisa dijelaskan. Kaitkan ke profesi: IoT engineer, teknisi elektronika, embedded engineer.
- Umumkan kapan website tayang di `https://sma-XX.inspiralabs.id` dan bahwa alat harus **menyala & online** supaya angkanya hidup.
- Tutor setelah kelas: deploy semua folder, kirim link ke tiap kelompok, arsipkan rubrik & nilai.
