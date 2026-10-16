# Panduan Pengajar — P11 SMP: Pasang Firmware Proyek & Jadi Dokter Kabel

Jum'at, 30 Oktober 2026 · 70 menit · 13 Device ID (`smp-01`–`smp-05` individu, `smp-06`–`smp-09` berdua, `smp-10`–`smp-12` berempat, `smp-13` bertiga).
Nomor slide = nomor di PPT (slide 1 = Linktree). Bahan lengkap & kunci: `sumber/Materi_Ajar_P11_SMP_InspiraLabs.md`.

> Prinsip hari ini: firmware proyek dipakai **apa adanya**. Siswa hanya mengganti `ISI_DI_SINI` dengan nama & password WiFi. Angka `DHT_PIN` hanya diubah di Challenge Hard, lalu dikembalikan.

## 1. Tujuan pertemuan (yang bisa dilihat)

Di akhir kelas, setiap kelompok/individu:
1. Meng-upload firmware proyek dari folder `smp-XX` dan menunjukkan Serial Monitor dengan `Terhubung!`, angka suhu, dan `kode respons: 200`.
2. Memasangkan 3 gejala Serial Monitor dengan penyebabnya (WiFi, kabel sensor, internet).
3. Memakai multimeter mode bunyi untuk membedakan kabel jumper bagus dan putus.

## 2. Persiapan

### H-1
- [ ] `py tools/kelompok.py paket` → `dist/paket/smp-XX.zip`.
- [ ] **Di laptop tiap kelompok:** extract `smp-XX.zip` ke Desktop, PIO Home → Open Project → `smp-XX/firmware` → **Build sekali** (library WiFi/HTTP/DHT ikut ter-download). Catat laptop mana untuk Device ID mana (tempel stiker `smp-XX` di laptop).
- [ ] Pastikan rakitan P10 (DHT22 di D4) masih utuh; bawa DHT22 & jumper cadangan.
- [ ] **Uji WiFi kelas** dengan board cadangan: upload firmware salah satu kelompok, lihat `200`. Pastikan WiFi **2.4 GHz**. Siapkan hotspot HP cadangan (2.4 GHz, kuota cukup).
- [ ] Buat 2–3 kabel jumper **sengaja putus** (potong kawat di dalam isolasi, luar tetap mulus) untuk demo multimeter.
- [ ] Cek backend: `https://api-ekskulcoding.inspiralabs.id/health`.
- [ ] Siapkan proyek PlatformIO latihan (dari P10) di tiap laptop untuk program cadangan `P11_1_BacaDHT22.cpp` / `P11_2_TesWiFi.cpp`.

### 15 menit sebelum kelas
- [ ] Tulis di papan: **nama WiFi & password** (huruf besar-kecil persis), plus "Cabut USB sebelum memindah kabel!".
- [ ] Multimeter: set ke **mode bunyi** (simbol gelombang suara/dioda). Tes: tempelkan kedua ujungnya → bunyi.
- [ ] Siapkan kertas "Kartu Gejala" untuk Challenge Medium (atau cukup di slide 17).

### Isi kit per kelompok/individu
Rakitan P10 (ESP32 + DHT22 di D4) · kabel USB data · laptop dengan folder `smp-XX` · kertas untuk Pencatat. Per kelas: 1 multimeter, 3–4 jumper cadangan, jumper putus untuk demo.

## 3. Timeline per menit

| Menit | Slide | Kegiatan | Yang tutor lakukan |
|---|---|---|---|
| 0–5 | 1 | Pembuka + cek Tugas 3 | 2–3 siswa tunjukkan gambar rakitannya. Nyalakan laptop |
| 5–8 | 2–5 | Cover, pemantik, agenda, peran | Tampung tebakan pemantik. Tunjuk peran |
| 8–14 | 6–8 | Firmware, folder, zona hijau/merah | Buka file di proyektor, tunjuk persis baris `ISI_DI_SINI` |
| 14–28 | 9 | Praktek upload firmware | Keliling. Pengecek membandingkan nama WiFi huruf demi huruf |
| 28–31 | 10–11 | Membaca cerita ESP32 + forum | Tunjukkan output satu kelompok di proyektor |
| 31–36 | 12 | 🟢 Easy (wajib) | Cek catatan Pencatat, beri +10 |
| 36–44 | 13–15 | Dokter kabel, multimeter, program cadangan | **Demo** jumper putus. **Ganti peran** |
| 44–46 | 16 | Forum | |
| 46–52 | 17 | 🟡 Medium | Cek jawaban kertas |
| 52–60 | 18 | 🔴 Hard | Untuk yang sudah `200`. Yang belum: tutor bantu dokter kabel |
| 60–62 | 19 | Peta proyek | Ingatkan bawa foto kelompok ke P12 |
| 62–70 | 20–21 | Post-test | Sendiri-sendiri |

## 4. Kalimat kunci

- **Firmware:** "Ini program resmi alat kalian. Kita tidak menulis, kita memasang. Seperti teknisi memasang aplikasi resmi ke mesin."
- **Zona hijau/merah:** "Zona hijau itu kolom formulir: isi nama dan password WiFi. Zona merah itu kunci rumah server. Disentuh, pintunya terkunci."
- **Device ID:** "smp-07 itu plat nomor alat kalian. Kalau dua motor plat nomornya sama, polisi bingung. Server juga."
- **Kode 200:** "Angka 200 artinya paketnya diterima, seperti centang dua di WhatsApp."
- **Dokter kabel:** "Dokter tidak langsung operasi. Dia tanya gejala dulu. Kita juga: baca Serial Monitor dulu, baru pegang kabel."
- **Urutan cek:** "Listrik → kabel → pin → program. Program paling akhir, karena program yang sama sudah jalan di kelompok lain."

## 5. Mengelola kelas 12–15 tahun

- **Menunggu upload itu membosankan.** Saat Build/Upload berjalan, beri tugas kecil: Pencatat menyiapkan tabel "sebelum/sesudah tiup" untuk Easy; Perakit menekan ulang semua kabel.
- **Peran berputar** (slide 5): Operator Topik 1 ≠ Operator Topik 2 (ganti di menit 36). Pencatat menulis angka, bukan hanya menonton.
- **Peserta individu:** pegang semua peran. Pasangkan dengan individu sebelah sebagai "teman cek" untuk membandingkan nama WiFi dan membaca checklist.
- **WiFi macet di banyak kelompok sekaligus** → hentikan kelas 1 menit dengan sinyal diam, pindahkan semua ke hotspot cadangan bersama-sama (tulis nama hotspot di papan), daripada membantu satu per satu.
- **Gamifikasi:** papan "Klub 200": tulis Device ID di papan begitu kelompok itu mendapat `200` pertama.

## 6. Titik cek pemahaman

- Setelah slide 8: "Tunjuk dengan jari di layar kalian: baris mana yang boleh diubah?" (`WIFI_SSID`, `WIFI_PASSWORD`).
- Setelah slide 10: **jempol**: "Jempol atas kalau sudah lihat 200." Catat yang belum.
- Setelah slide 13: tutor membacakan gejala, kelas menjawab serentak: "Titik-titik tidak berhenti?" (WiFi) · "Gagal baca sensor?" (kabel) · "Minus satu?" (internet).
- Setelah slide 14: "Multimeter diam, artinya?" (kabel putus).

## 7. Kesalahan yang sering terjadi & cara membantu

| Kesalahan | Pertanyaan pancingan |
|---|---|
| Nama WiFi beda huruf besar/kecil atau ada spasi | "Bandingkan huruf demi huruf dengan papan. Pengecek, bacakan pelan-pelan." |
| Tanda kutip `"` ikut terhapus (Build error) | "Lihat baris yang kamu ketik. Bentuknya sama dengan baris di atasnya? Ada yang hilang?" |
| Lupa Save sebelum Upload | "Di judul tab file ada titik bulat? Artinya apa?" |
| Membuka folder `smp-XX` (bukan `smp-XX/firmware`) → Upload tidak ada | "Folder program ESP32 namanya apa di slide 7?" |
| Mengubah `DEVICE_ID` | "Device ID itu plat nomor. Boleh diganti?" → kembalikan sesuai nama folder |
| Langsung menyalahkan program | "Program yang sama jalan di kelompok sebelah? Berarti yang beda apa?" |
| `Gagal baca sensor` | "Serial Monitor bilang masalahnya di mana? Kabel mana yang ke sensor?" |

## 8. Troubleshooting cepat

| Gejala | Penyebab paling mungkin | Tindakan |
|---|---|---|
| Titik-titik `......` tidak berhenti | Nama/password salah, WiFi 5 GHz, sinyal lemah | Cek huruf; pindah ke hotspot 2.4 GHz; dekatkan ke router |
| `Gagal baca sensor DHT22…` | Out bukan di D4, longgar, + − tertukar | Cabut USB, checklist P10 |
| Suhu kadang muncul, kadang gagal | Kabel goyang / jumper hampir putus | Ganti jumper, tes multimeter mode bunyi |
| `kode respons: -1` | WiFi tanpa internet | Cek kuota hotspot, coba WiFi lain |
| `kode respons: 401` | Zona merah (`API_KEY`) berubah | Extract ulang zip asli, isi WiFi lagi, upload |
| Serial Monitor kosong | Pesan awal terlewat | Tekan **EN** di board |
| Tulisan acak `⸮⸮⸮` | Kecepatan berbeda | `monitor_speed = 115200` di `firmware/platformio.ini` |
| Build error merah setelah mengisi WiFi | Tanda kutip/titik koma terhapus | Bandingkan dengan baris di atasnya, atau extract ulang zip |
| Ada baris `{...}` setelah kode respons | Balasan server | Normal, abaikan |
| Masih bingung WiFi atau sensor? | — | Upload `P11_2_TesWiFi.cpp` (WiFi saja) atau `P11_1_BacaDHT22.cpp` (sensor saja) di proyek latihan, lalu upload lagi firmware proyek |

## 9. Keselamatan

- Tegangan kit rendah (USB), aman disentuh. Multimeter di mode bunyi dipakai pada kabel yang **tidak tersambung** ke board (USB dicabut).
- Mode DC volt hanya didemokan tutor pada 3V3–GND board, bukan ke stopkontak. **Jangan pernah** mengukur stopkontak di depan siswa.
- Cabut USB sebelum memindah kabel, termasuk di Challenge Hard (D4 → D27 → D4).
- Sensor hangat = + − tertukar → cabut segera.

## 10. Diferensiasi

- **Siswa cepat:** Challenge Hard; bonus Medium (cabut kabel out, lihat gejalanya); atau minta mereka menjadi "dokter jaga" yang membantu kelompok lain hanya dengan pertanyaan. Tantangan ekstra: "Hitung berapa kali data terkirim dalam 1 menit." (±15 kali, tiap 4 detik).
- **Siswa kesulitan:** fokus satu target saja: `200`. Tutor duduk di samping dan membimbing langkah demi langkah ("Klik Open Project. Pilih folder firmware. Sekarang cari tulisan ISI_DI_SINI."). Medium cukup dikerjakan lisan bersama tutor.

## 11. Penilaian

- **Challenge:** +10 per challenge (leaderboard). Easy wajib.
  - Easy lulus = angka sebelum/sesudah ditiup tercatat + kode `200` tercatat.
  - Medium lulus = 1C, 2A, 3B.
  - Hard lulus = bisa menjelaskan kenapa `DHT_PIN` harus sama dengan pin kabel, **dan** sudah kembali ke D4 / angka 4 / upload ulang.
- **Penilaian praktek pertemuan ini:** Serial Monitor menampilkan suhu + `200` dari rakitan sendiri.
- **Post-test:** 5 soal, individu. Kunci: 1B 2B 3B 4A 5B.
- **Tugas 3** (dari P10): tandai yang sudah mengumpulkan.

## 12. Penutup & PR

- Firmware sudah tersimpan di ESP32. "Minggu depan cukup colok ke power bank."
- PR: bawa **foto kelompok** (atau foto diri untuk individu) di HP untuk dashboard P12. Charge power bank kalau punya.
- Setelah kelas: catat Device ID yang belum `200` (lihat papan "Klub 200") → selesaikan di 10 menit pertama P12. Pastikan semua kabel out kembali ke **D4**.
