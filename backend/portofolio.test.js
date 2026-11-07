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

// ---------------------------------------------------------------- route (store memori, server sungguhan di port acak)
const express = require("express");
const { pasangPortofolio } = require("./portofolio");
const { buatStoreMemori } = require("./portofolio-memori");

const ENV = { PORTOFOLIO_SECRET: "s", ADMIN_EMAIL: "admin@x.id", ADMIN_PASSWORD: "pw" };
const siswaAwal = () => [
  { id_siswa: "SMA-004", jenjang: "sma", slug: "budi", nama_lengkap: "Budi", kode_hash: hashRahasia("K7P2QX"), kode_versi: 1 },
  { id_siswa: "SMP-022", jenjang: "smp", slug: "rafif", nama_lengkap: "Rafif", kode_hash: hashRahasia("R4F1F2"), kode_versi: 1 },
];

async function jalankan(t, baris = siswaAwal(), env = ENV) {
  const app = express();
  app.use(express.json({ limit: "1mb" }));
  const store = buatStoreMemori(baris);
  pasangPortofolio(app, { store, env });
  const server = await new Promise((ok) => { const s = app.listen(0, () => ok(s)); });
  t.after(() => server.close());
  const url = `http://127.0.0.1:${server.address().port}`;
  const minta = (method, path, body, token) => fetch(url + "/api/portofolio" + path, {
    method,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: "Bearer " + token } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const json = async (res) => {
    const isi = await res.json();
    assert.equal(res.status, 200, JSON.stringify(isi));
    return isi;
  };
  return {
    url, store,
    getRaw: (p, tk) => minta("GET", p, undefined, tk),
    postRaw: (p, b, tk) => minta("POST", p, b, tk),
    get: async (p, tk) => json(await minta("GET", p, undefined, tk)),
    post: async (p, b, tk) => json(await minta("POST", p, b, tk)),
  };
}

test("tanpa secret -> 503", async (t) => { // fitur baru tidak boleh menjatuhkan backend
  const s = await jalankan(t, siswaAwal(), {});
  const r = await s.getRaw("/profil/budi");
  assert.equal(r.status, 503);
  assert.match((await r.json()).error, /belum diaktifkan/);
});

test("profil publik", async (t) => {
  const s = await jalankan(t);
  const r = await s.get("/profil/budi");
  assert.equal(r.profil.nama_lengkap, "Budi");
  assert.ok(!("kode_hash" in r.profil));
  assert.equal((await s.getRaw("/profil/tidak-ada")).status, 404);
});

test("login siswa, ubah diri sendiri, tidak bisa data resmi", async (t) => {
  const s = await jalankan(t);
  const { token } = await s.post("/masuk/siswa", { id: " sma-004 ", kode: "k7p2qx" });
  assert.ok(token);
  assert.equal((await s.get("/saya", token)).siswa.id_siswa, "SMA-004");
  assert.equal((await s.post("/saya", { tentang: "Suka robot" }, token)).siswa.tentang, "Suka robot");
  assert.equal((await s.get("/profil/budi")).profil.tentang, "Suka robot"); // langsung tampil
  assert.equal((await s.postRaw("/saya", { poin: 999 }, token)).status, 400);
  assert.equal((await s.postRaw("/staf/siswa/SMP-022", { tentang: "x" }, token)).status, 403);
  assert.equal((await s.postRaw("/saya", {}, "token-palsu")).status, 401);
  assert.equal((await s.getRaw("/saya")).status, 401);
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-004", kode: "SALAH1" })).status, 401);
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-999", kode: "K7P2QX" })).status, 401);
});

test("kode salah dibatasi", async (t) => {
  const s = await jalankan(t);
  for (let i = 0; i < 10; i++) assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-004", kode: "XXXXXX" })).status, 401);
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).status, 429); // terkunci walau benar
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMP-022", kode: "R4F1F2" })).status, 200); // siswa lain tidak ikut terkunci
});

test("admin: daftar, edit kelas, reset kode membatalkan token lama", async (t) => {
  const s = await jalankan(t);
  const siswa = (await s.post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  const admin = (await s.post("/masuk/staf", { email: "ADMIN@x.id", password: "pw" })).token;
  assert.equal((await s.postRaw("/masuk/staf", { email: "admin@x.id", password: "salah" })).status, 401);
  const daftar = (await s.get("/staf/siswa?jenjang=sma", admin)).siswa;
  assert.deepEqual(daftar.map((x) => x.id_siswa), ["SMA-004"]);
  assert.ok(!("kode_hash" in daftar[0]));
  assert.equal((await s.get("/staf/siswa", admin)).siswa.length, 2);
  assert.equal((await s.post("/staf/siswa/SMA-004", { kelas: "XI-2" }, admin)).siswa.kelas, "XI-2");
  assert.equal((await s.postRaw("/staf/siswa/SMA-004", { poin: 1 }, admin)).status, 400);
  assert.equal((await s.postRaw("/staf/siswa/SMA-777", { kelas: "X" }, admin)).status, 404);
  assert.equal((await s.getRaw("/staf/siswa", siswa)).status, 403);
  const { kode } = await s.post("/staf/siswa/SMA-004/reset-kode", {}, admin);
  assert.match(kode, /^[A-Z2-9]{6}$/);
  assert.equal((await s.getRaw("/saya", siswa)).status, 401);                 // token lama mati
  assert.ok((await s.post("/masuk/siswa", { id: "SMA-004", kode })).token);   // kode baru jalan
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).status, 401); // kode lama mati
});
