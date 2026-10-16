# Panduan Pengajar — P12 SMA: Kontrol Kipas dari Dashboard (Manual & Otomatis)

Sabtu, 7 November 2026 · 70 menit · 6 peserta: **sma-01, sma-02, sma-03 individu**, **sma-04, sma-05, sma-06 berpasangan**.
Bahan: slide P12, `sumber/Materi_Ajar_P12_SMA_InspiraLabs.md` (kunci di KHUSUS TUTOR), folder kelompok dari P11.

## Tujuan (yang bisa dilihat di akhir kelas)
1. Kipas mengikuti tombol dashboard dalam **≤ ±4 detik**, diukur dengan stopwatch (5 kali).
2. Di mode **Otomatis**, kipas menyala sendiri saat sensor digenggam dan mati sendiri setelah dilepas.
3. Siswa bisa menjelaskan **kenapa ada jeda** (ESP32 yang bertanya ke server, bukan server yang mendorong) dan **kapan alat aman/tidak aman** (listrik putus vs jaringan putus).

## Persiapan H-1
- [ ] Semua kelompok lolos P11 (`kode respons: 200`). Catat yang belum: mereka mulai 10 menit pertama dengan troubleshooting berlapis P11.
- [ ] **PIN kelompok**: ambil dari `FAN_PINS` di `backend/.env`. Tulis di **kertas lipat per Device ID**. Jangan dibacakan, jangan di slide.
- [ ] Uji 1 alat: klik dashboard → kipas berubah ≤ ±4 detik; Otomatis + genggam → kipas menyala.
- [ ] **Alat tutor tersambung ke hotspot HP tutor** (bukan WiFi kelas), untuk demo "jaringan putus" di Hard langkah 2. Upload ulang alat tutor dengan SSID hotspot.
- [ ] Multimeter, stopwatch (HP siswa cukup).
- [ ] Kalau di P11 tutor men-set dashboard ke Manual OFF: biarkan; siswa sendiri yang memindah ke Otomatis hari ini.

## 15 menit sebelum kelas
- Semua alat dinyalakan, cek dashboard tiap kelompok menampilkan angka hidup.
- Alat tutor di meja depan, kipas terlihat kelas, dashboard tutor di proyektor.
- Kertas PIN siap dibagikan saat slide 8.

## Timeline (menit → slide)
| Menit | Slide | Kegiatan | Catatan tutor |
|---|---|---|---|
| 0–5 | — | Demo alat tutor: klik → kipas | Minta kelas menghitung detiknya keras-keras |
| 5–10 | 2–4 | Cover, pemantik (lampu pintar di balik router), agenda | Tampung tebakan |
| 10–17 | 5–9 | Dua arah, perjalanan perintah, kenapa ±4 detik, PIN, forum Topik 1 | Bagikan PIN pribadi di slide 8 |
| 17–25 | 10 | Easy: Saklar dari Dashboard | Pengendali & Pengamat |
| 25–31 | 11–13 | Manual vs Otomatis, slider, forum Topik 2 | Status awal = Otomatis 30°C |
| 31–41 | 14 | Medium: Uji Otomatis dengan Tangan | |
| 41–47 | 15–18 | Fail-safe, satu kata `RELAY_ACTIVE_LOW`, troubleshooting, forum Topik 3 | Arahkan ke pemanas, pompa |
| 47–57 | 19 | Hard: Uji Fail-Safe | Langkah 2 pakai alat tutor; **WiFi kelas tidak dimatikan** |
| 57–60 | 20 | Peta proyek + PR foto | |
| 60–70 | 21–22 | Post-test + penutup | |

Waktu molor? Hard langkah 3 (ubah `RELAY_ACTIVE_LOW`) boleh dijadikan demo tutor. **Jangan** lewati Easy & Medium: itu yang didemokan di showcase P13.

## Kalimat kunci
- "Server **tidak bisa** mengetuk pintu alat di balik router. Jadi alatnya yang bertanya tiap ±4 detik: 'ada perintah untukku?'"
- "Jeda 0–4 detik itu **desain**, bukan rusak. Kalian akan mengukurnya sendiri."
- "Publik boleh **melihat**, hanya pemegang PIN yang boleh **mengubah**. PIN = kunci rumah."
- "Kipas di NO melindungi saat **listrik** hilang. Tapi saat **jaringan** hilang, kipas diam di status terakhir. Engineer harus tahu dua-duanya."

## Manajemen kelas
- **Berdua:** **Pengendali** (klik dashboard, pegang PIN) & **Pengamat** (stopwatch, amati relay/kipas, multimeter). Tukar tiap topik.
- **Individu:** HP di tangan kiri sebagai stopwatch, laptop di kanan. Untuk Hard, minta tetangga menjadi pengamat 2 menit.
- PIN: kalau ada yang iseng mencoba PIN kelompok lain, bahas sebagai **etika keamanan** (bukan hukuman): "Di dunia nyata, mencoba PIN orang lain itu pelanggaran."
- Medium butuh suhu naik: tangan harus menggenggam 20–60 detik. Siswa sering berhenti terlalu cepat; minta mereka melihat angka di dashboard, bukan menebak.

## Titik cek pemahaman
| Kapan | Tanya | Jawaban yang dicari |
|---|---|---|
| Setelah Easy | "Kenapa 5 pengukuran kalian beda-beda?" | Tergantung kapan klik terjadi terhadap laporan berikutnya |
| Setelah Medium | "Ambang 40°C, kipas mati. Kenapa?" | Suhu tidak akan mencapai 40°C |
| Setelah Hard | "Kapan alat kita aman, kapan tidak?" | Aman saat listrik putus (NO); tidak saat jaringan putus (status terakhir) |

## Kesalahan umum & cara membimbing
| Yang terlihat | Pertanyaan pancingan |
|---|---|
| Klik berkali-kali karena "tidak jalan" | "Berapa detik kalian tunggu? Slide 7 bilang paling lama berapa?" |
| "PIN salah" | "PIN siapa yang kalian ketik? Device ID dashboard ini apa?" |
| Tidak terjadi apa-apa > 10 detik | "Lihat Serial: masih `kode respons: 200`? Lapisan P11 mana yang gagal?" |
| Kipas terbalik dari dashboard | "Kabel kipas di NO atau NC? Kalau sudah NO, apa satu kata di slide 16?" |
| Otomatis, kipas tidak menyala | "Ambang berapa, suhu dashboard berapa? Mana yang lebih besar?" |
| Kipas ON-OFF cepat di Otomatis | "Suhu kalian berapa jauh dari ambang? Ingat Termostat Tangan P10: apa yang mencegah cetak-cetek?" |
| Lupa mengembalikan `RELAY_ACTIVE_LOW` | "Modul kita active apa? Dashboard OFF, kipas berputar: itu benar?" |

## Troubleshooting cepat (tutor)
| Gejala | Tindakan |
|---|---|
| Semua kelompok lambat > 10 detik | Internet lambat/putus → cek `/health`, pindah ke hotspot cadangan |
| PIN benar tapi tetap "PIN salah" | Setelah "PIN salah", dashboard otomatis menghapus PIN tersimpan; klik lagi & ketik ulang. Masih salah → cocokkan dengan `FAN_PINS` di `backend/.env` |
| Slider berubah tapi kipas tidak | Mode masih Manual → klik **Otomatis** |
| Kipas berputar terus walau OFF | Kipas di NC, atau modul active-HIGH → `RELAY_ACTIVE_LOW false` |
| Relay klik, kipas diam | Sisi beban (P10): COM, NO, kipas − ke GND |

Catatan: firmware masih punya route `/fan` lokal, tapi yang bekerja di kelas adalah relay mengikuti `fanOn` di balasan server. **Jangan ajarkan** server "mendorong" perintah ke ESP32.

## Keselamatan
- **WiFi kelas tidak boleh dimatikan** untuk eksperimen; pakai hotspot alat tutor.
- Cabut USB (Hard langkah 1) dengan menarik konektor, bukan kabelnya.
- Diskusi Topik 3 menghubungkan ke dunia nyata: pemanas/pompa/kompor yang menyala terus saat jaringan putus berbahaya → produk sungguhan butuh **timeout** atau saklar pengaman. Cukup dibahas, tidak dibuat.

## Diferensiasi
- **Cepat:** buka dashboard di HP pakai data seluler, kontrol kipas dari "luar sekolah"; buat tabel 3 kejadian fail-safe tambahan (mis. server mati) dan prediksi hasilnya; jelaskan ke tetangga kenapa smart lamp di rumah juga punya jeda.
- **Kesulitan:** fokus Easy + Medium. Hard cukup langkah 1 (cabut USB) yang paling mudah diamati.

## Penilaian
- **Wajib (syarat P13):** kipas mengikuti tombol (tabel 5 pengukuran) + Otomatis menyala saat digenggam.
- Challenge Easy/Medium/Hard **+10** masing-masing; Hard dinilai dari tabel hasil + 1 kalimat kesimpulan.
- Post-test: kunci B, B, A, C, B.

## Penutup & PR
- PR untuk P13: **foto kelompok** (landscape, siap dikecilkan ≤ ±500 KB), ide **2 warna tema**, kotak kecil/kardus untuk casing (opsional).
- Pastikan `RELAY_ACTIVE_LOW` kembali `true` dan pin D4/D18.
- Tutor: simpan kertas PIN, siapkan rubrik showcase P13.
