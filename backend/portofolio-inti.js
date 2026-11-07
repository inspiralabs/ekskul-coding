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

module.exports = { buatKode, hashRahasia, cocokRahasia, buatToken, bacaToken, buatPembatas };
