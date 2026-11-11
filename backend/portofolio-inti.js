// ============================================================
// Portofolio siswa -- logika murni (tanpa jaringan/Supabase), dites di portofolio.test.js.
// Kode akses & password disimpan sebagai hash scrypt; sesi = token HMAC.
// ============================================================
const crypto = require("crypto");

// Tanpa huruf/angka yang mirip (0/O, 1/I/L) supaya kode di kertas tidak salah baca.
const ALFABET_KODE = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function buatKode() {
  let k = "";
  for (let i = 0; i < 6; i++) k += ALFABET_KODE[crypto.randomInt(ALFABET_KODE.length)];
  return k;
}

function hashRahasia(teks) {
  const salt = crypto.randomBytes(16);
  return `scrypt$${salt.toString("hex")}$${crypto.scryptSync(String(teks), salt, 32).toString("hex")}`;
}

function cocokRahasia(teks, simpanan) {
  const [jenis, salt, hash] = String(simpanan || "").split("$");
  if (jenis !== "scrypt" || !salt || !hash) return false;
  const harap = Buffer.from(hash, "hex");
  const dapat = crypto.scryptSync(String(teks), Buffer.from(salt, "hex"), harap.length || 32);
  return harap.length === dapat.length && crypto.timingSafeEqual(harap, dapat);
}

const tandaTangan = (data, secret) => crypto.createHmac("sha256", secret).update(data).digest("base64url");

function buatToken(isi, secret, umurDetik = 30 * 24 * 3600) {
  const data = Buffer.from(JSON.stringify({ ...isi, exp: Date.now() + umurDetik * 1000 })).toString("base64url");
  return `${data}.${tandaTangan(data, secret)}`;
}

function bacaToken(token, secret, sekarangMs = Date.now()) {
  const [data, ttd, sisa] = String(token || "").split(".");
  if (!data || !ttd || sisa !== undefined) return null;
  const harap = Buffer.from(tandaTangan(data, secret));
  const dapat = Buffer.from(ttd);
  if (harap.length !== dapat.length || !crypto.timingSafeEqual(harap, dapat)) return null;
  try {
    const isi = JSON.parse(Buffer.from(data, "base64url").toString());
    return typeof isi.exp === "number" && isi.exp > sekarangMs ? isi : null;
  } catch {
    return null;
  }
}

// ponytail: hitungan di memori proses -- hilang saat restart & tidak dibagi antar instance; cukup untuk 1 container.
function buatPembatas({ maks = 10, jendelaMs = 15 * 60 * 1000, sekarang = Date.now } = {}) {
  const catatan = new Map(); // kunci -> { jumlah, mulai }
  const aktif = (kunci) => {
    const c = catatan.get(kunci);
    if (c && sekarang() - c.mulai >= jendelaMs) catatan.delete(kunci);
    return catatan.get(kunci);
  };
  return {
    terkunci: (kunci) => (aktif(kunci)?.jumlah || 0) >= maks,
    gagal(kunci) {
      const c = aktif(kunci);
      if (c) c.jumlah++;
      else catatan.set(kunci, { jumlah: 1, mulai: sekarang() });
    },
    berhasil: (kunci) => catatan.delete(kunci),
  };
}

// ---------------------------------------------------------------- isian & hak akses

// Batas panjang per karakter (bukan byte). Bagian milik siswa vs data resmi (spec §6).
const FIELD_SISWA = { panggilan: 30, tentang: 300, cita_cita: 100, cerita_tersulit: 200, cerita_terseru: 200, cerita_rencana: 200 };
const FIELD_RESMI = { nama_lengkap: 100, kelas: 20, judul_proyek: 100, catatan_pelatih: 500 };
const MAKS_LINK = 3;
// Warna halaman profil pilihan siswa. Sama dengan blok [data-tema] di profil/profil.css (dijaga tes "tema").
const TEMA = ["ungu", "biru", "hijau", "jingga", "merah-muda"];

function saringPerubahan(peran, data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return { error: "data perubahan tidak valid" };
  const batas = peran === "siswa" ? FIELD_SISWA : { ...FIELD_SISWA, ...FIELD_RESMI };
  if (!Object.keys(data).length) return { error: "tidak ada isian yang dikirim" };
  const patch = {};
  for (const [k, v] of Object.entries(data)) {
    if (k === "link_karya") {
      const ok = Array.isArray(v) && v.length <= MAKS_LINK &&
        v.every((u) => typeof u === "string" && /^https:\/\/\S+$/.test(u.trim()) && [...u.trim()].length <= 200);
      if (!ok) return { error: `link_karya: maksimal ${MAKS_LINK} alamat yang diawali https:// (maks 200 karakter)` };
      patch.link_karya = v.map((u) => u.trim());
    } else if (k === "tema") {
      if (!TEMA.includes(v)) return { error: `tema: pilih salah satu dari ${TEMA.join(", ")}` };
      patch.tema = v;
    } else if (Object.hasOwn(batas, k)) {   // bukan `in`: "constructor"/"__proto__" ikut lolos
      if (typeof v !== "string") return { error: `${k}: harus berupa teks` };
      const t = v.trim();
      if ([...t].length > batas[k]) return { error: `${k}: maksimal ${batas[k]} karakter` };
      if (k === "nama_lengkap" && !t) return { error: "nama_lengkap: wajib diisi" };
      patch[k] = t;
    } else {
      return { error: `field "${k}" tidak boleh diubah` };
    }
  }
  return { patch };
}

function bolehKelola(akun, siswa) {
  if (akun.peran === "admin") return true;
  return akun.peran === "guru" && akun.jenjang === siswa.jenjang;
}

const KOLOM_PUBLIK = ["slug", "jenjang", "device_id", "nama_lengkap", "panggilan", "kelas", "tentang", "cita_cita",
  "cerita_tersulit", "cerita_terseru", "cerita_rencana", "link_karya", "poin", "lencana", "peringkat", "judul_proyek",
  "catatan_pelatih", "sertifikat_nomor", "tema"];

function dataPublik(baris, urlFoto) {
  const d = {};
  for (const k of KOLOM_PUBLIK) if (k in baris) d[k] = baris[k];
  d.foto_url = baris.foto_path ? urlFoto(baris.foto_path) : null;
  return d;
}

// ---------------------------------------------------------------- impor dari spreadsheet

const KOLOM_IMPOR = ["id_siswa", "jenjang", "device_id", "slug", "nama_lengkap", "poin", "lencana", "peringkat",
  "judul_proyek", "catatan_pelatih", "sertifikat_nomor"];
const IMPOR_SELALU = ["jenjang", "device_id", "poin", "lencana", "peringkat", "sertifikat_nomor"]; // spreadsheet = sumber kebenaran
const IMPOR_KALAU_KOSONG = ["nama_lengkap", "judul_proyek", "catatan_pelatih"];               // koreksi guru tidak ditimpa

function gabungImpor(lama, baru) {
  const hasil = {};
  if (!lama) {
    for (const k of KOLOM_IMPOR) if (k in baru) hasil[k] = baru[k];
    return hasil;
  }
  for (const k of IMPOR_SELALU) if (k in baru) hasil[k] = baru[k];
  for (const k of IMPOR_KALAU_KOSONG) if (!lama[k] && baru[k]) hasil[k] = baru[k];
  return hasil;
}

const MAKS_FOTO = 600 * 1024;

function cekJpeg(buf) {
  if (!Buffer.isBuffer(buf) || !buf.length) return "Foto harus berformat JPEG";
  if (buf.length > MAKS_FOTO) return "Foto terlalu besar (maks 600 KB)";
  if (buf[0] !== 0xff || buf[1] !== 0xd8 || buf[2] !== 0xff) return "Foto harus berformat JPEG";
  return null;
}

// Sertifikat baru bisa dibuka siswa (dan siapa pun yang punya link) mulai hari pertemuan terakhir jenjangnya,
// pukul 00.00 WIB. Admin/guru bisa membukanya kapan saja. Tanggal ini juga tercetak di sertifikat.
const SERTIFIKAT_BUKA = { smp: "2026-11-13", sma: "2026-11-14" };

function sertifikatTerbuka(jenjang, sekarangMs = Date.now()) {
  const t = SERTIFIKAT_BUKA[jenjang];
  return !!t && sekarangMs >= Date.parse(t + "T00:00:00+07:00");
}

const FORMAT_ID = /^SM[PA]-\d{3}$/;
const FORMAT_SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

module.exports = {
  FIELD_SISWA, FIELD_RESMI, FORMAT_ID, FORMAT_SLUG, TEMA,
  buatKode, hashRahasia, cocokRahasia, buatToken, bacaToken, buatPembatas,
  saringPerubahan, bolehKelola, dataPublik, gabungImpor, cekJpeg, KOLOM_IMPOR,
  SERTIFIKAT_BUKA, sertifikatTerbuka,
};
