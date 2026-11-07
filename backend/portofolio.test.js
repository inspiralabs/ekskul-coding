// Tes portofolio: `cd backend && node --test` (tanpa jaringan, tanpa Supabase).
const test = require("node:test");
const assert = require("node:assert/strict");
const { buatKode, hashRahasia, cocokRahasia, buatToken, bacaToken, buatPembatas } = require("./portofolio-inti");

test("kode akses", () => {
  const k = buatKode();
  assert.match(k, /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/);
});

test("hash rahasia", () => {
  const h = hashRahasia("K7P2QX");
  assert.match(h, /^scrypt\$[0-9a-f]+\$[0-9a-f]+$/);
  assert.equal(cocokRahasia("K7P2QX", h), true);
  assert.equal(cocokRahasia("K7P2QY", h), false);
  assert.equal(cocokRahasia("K7P2QX", "rusak"), false);
  assert.equal(cocokRahasia("K7P2QX", null), false);
  assert.notEqual(hashRahasia("A"), hashRahasia("A")); // salt acak
});

test("token", () => {
  const t = buatToken({ peran: "siswa", id: "SMA-004", v: 1 }, "rahasia", 60);
  assert.equal(bacaToken(t, "rahasia").id, "SMA-004");
  assert.equal(bacaToken(t, "salah"), null);
  assert.equal(bacaToken(t + "x", "rahasia"), null);
  assert.equal(bacaToken(t, "rahasia", Date.now() + 61000), null); // kedaluwarsa
  assert.equal(bacaToken("bukan.token", "rahasia"), null);
  assert.equal(bacaToken(undefined, "rahasia"), null);
});

test("pembatas login", () => {
  let jam = 0;
  const p = buatPembatas({ maks: 3, jendelaMs: 1000, sekarang: () => jam });
  for (let i = 0; i < 3; i++) p.gagal("siswa:SMA-004");
  assert.equal(p.terkunci("siswa:SMA-004"), true);
  assert.equal(p.terkunci("siswa:SMA-005"), false);
  jam = 1001;
  assert.equal(p.terkunci("siswa:SMA-004"), false);
  p.gagal("x"); p.gagal("x"); p.berhasil("x"); p.gagal("x");
  assert.equal(p.terkunci("x"), false); // berhasil mereset hitungan
});
