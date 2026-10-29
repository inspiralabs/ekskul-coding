# POST TEST — Pertemuan 7 — SMA

Sumber: SMA — Pertemuan 7: CSS Dasar-Menengah (Box Model & Flexbox)

> Form P7 SMA tidak bisa dibuka publik, jadi soal ini disusun dari materi kurikulum/sma/p07 (Box Model, Flexbox, Media Query). Dipakai server kelas (`tools/server_kelas.py`).

**Bagian identitas (wajib):** Nama lengkap · Kelas · Kelompok

---

**1. Urutan lapisan Box Model dari dalam ke luar yang benar adalah...**
- A. margin → border → padding → content
- B. content → padding → border → margin
- C. content → margin → border → padding
- D. padding → content → margin → border

**Jawaban: B**

---

**2. Apa yang terjadi pada anak-anak elemen setelah container diberi CSS berikut?**
```
.container {
  display: flex;
}
```
- A. Semua anak disembunyikan
- B. Anak-anaknya tersusun ke bawah satu per satu
- C. Anak-anaknya tersusun berjajar dalam satu baris
- D. Ukuran container menjadi 0

**Jawaban: C**

---

**3. Properti untuk memberi jarak antar item di dalam flex container adalah...**
- A. gap
- B. border
- C. font-size
- D. color

**Jawaban: A**

---

**4. Fungsi flex-wrap: wrap; pada flex container adalah...**
- A. Mengubah warna item
- B. Menghapus item yang tidak muat
- C. Membuat item makin kecil terus
- D. Item yang tidak muat pindah ke baris berikutnya

**Jawaban: D**

---

**5. Apa arti kode CSS berikut?**
```
@media (max-width: 600px) {
  .container { flex-direction: column; }
}
```
- A. Container disembunyikan di layar kecil
- B. Di layar selebar 600px atau kurang, item disusun ke bawah (kolom)
- C. Lebar container selalu 600px
- D. Item disusun berjajar hanya di layar besar

**Jawaban: B**
