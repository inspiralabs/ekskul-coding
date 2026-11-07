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

const { saringPerubahan, bolehKelola, dataPublik, gabungImpor, cekJpeg } = require("./portofolio-inti");

test("saring perubahan siswa", () => {
  assert.deepEqual(saringPerubahan("siswa", { tentang: "  Suka robot  " }), { patch: { tentang: "Suka robot" } });
  assert.match(saringPerubahan("siswa", { poin: 999 }).error, /"poin" tidak boleh diubah/);
  assert.match(saringPerubahan("siswa", { kelas: "XI-2" }).error, /"kelas"/);
  assert.ok(saringPerubahan("siswa", { tentang: "😀".repeat(300) }).patch); // 300 karakter, bukan byte
  assert.match(saringPerubahan("siswa", { tentang: "a".repeat(301) }).error, /tentang/);
  assert.match(saringPerubahan("siswa", { tentang: 5 }).error, /tentang/);
  assert.ok(saringPerubahan("siswa", { link_karya: ["https://a.id", "https://b.id"] }).patch);
  assert.match(saringPerubahan("siswa", { link_karya: ["javascript:alert(1)"] }).error, /link_karya/);
  assert.match(saringPerubahan("siswa", { link_karya: ["https://a", "https://b", "https://c", "https://d"] }).error, /link_karya/);
  assert.match(saringPerubahan("siswa", { link_karya: "https://a.id" }).error, /link_karya/);
});

test("saring perubahan admin", () => {
  assert.deepEqual(saringPerubahan("admin", { kelas: "XI-2", tentang: "x" }).patch, { kelas: "XI-2", tentang: "x" });
  assert.match(saringPerubahan("admin", { lencana: [] }).error, /"lencana"/);
  assert.match(saringPerubahan("admin", null).error, /data/);
});

test("boleh kelola", () => {
  assert.equal(bolehKelola({ peran: "admin" }, { jenjang: "smp" }), true);
  assert.equal(bolehKelola({ peran: "guru", jenjang: "sma" }, { jenjang: "sma" }), true);
  assert.equal(bolehKelola({ peran: "guru", jenjang: "sma" }, { jenjang: "smp" }), false);
  assert.equal(bolehKelola({ peran: "siswa" }, { jenjang: "sma" }), false);
});

test("data publik tanpa rahasia", () => {
  const d = dataPublik({ id_siswa: "SMA-004", slug: "budi", kode_hash: "scrypt$..", kode_versi: 2, updated_by: "x",
                         foto_path: "SMA-004/a.jpg", nama_lengkap: "Budi" }, (p) => "https://cdn/" + p);
  assert.equal(d.foto_url, "https://cdn/SMA-004/a.jpg");
  assert.equal(d.nama_lengkap, "Budi");
  for (const k of ["kode_hash", "kode_versi", "updated_by", "foto_path", "id_siswa"]) assert.ok(!(k in d), k);
  assert.equal(dataPublik({ slug: "x" }, () => "tidak dipanggil").foto_url, null);
});

test("aturan impor", () => {
  const baru = { id_siswa: "SMA-004", jenjang: "sma", device_id: "sma-04", slug: "budi", nama_lengkap: "Budi S",
                 poin: 40, lencana: [{ p: 12 }], peringkat: 2, judul_proyek: "Kipas", catatan_pelatih: "Teliti",
                 sertifikat_nomor: "EKC-2026-S1-SMA-004" };
  assert.deepEqual(gabungImpor(null, baru), baru); // siswa baru: semua kolom
  const lama = { ...baru, nama_lengkap: "Budi Santoso", judul_proyek: "", catatan_pelatih: "Dikoreksi guru",
                 poin: 10, slug: "budi-lama", tentang: "isian siswa" };
  const g = gabungImpor(lama, { ...baru, slug: "budi" });
  assert.equal(g.poin, 40);                // selalu ikut spreadsheet
  assert.equal(g.nama_lengkap, undefined); // tidak ditimpa (lama terisi)
  assert.equal(g.catatan_pelatih, undefined);
  assert.equal(g.judul_proyek, "Kipas");   // lama kosong -> diisi
  assert.equal(g.slug, undefined);         // URL lama tetap
  assert.equal(g.tentang, undefined);      // bagian siswa tidak disentuh
});

test("cek jpeg", () => {
  assert.equal(cekJpeg(Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2])), null);
  assert.match(cekJpeg(Buffer.from("\x89PNG....")), /JPEG/);
  assert.match(cekJpeg(Buffer.alloc(600 * 1024 + 1, 0xff)), /600 KB/);
  assert.match(cekJpeg(Buffer.alloc(0)), /JPEG/);
  assert.match(cekJpeg(undefined), /JPEG/);
});
