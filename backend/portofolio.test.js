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
  assert.deepEqual(saringPerubahan("siswa", { tema: "hijau" }), { patch: { tema: "hijau" } });
  assert.match(saringPerubahan("siswa", { tema: "emas" }).error, /tema: pilih salah satu/);
  assert.match(saringPerubahan("siswa", { tema: ["hijau"] }).error, /tema: pilih salah satu/);
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
const { ENV, siswaAwal, jalankan } = require("./uji-bantu");

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

test("impor: buat baru dengan kode, ulang tidak menimpa koreksi, slug unik", async (t) => {
  const s = await jalankan(t);
  const admin = (await s.post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
  const item = (id, slug, extra = {}) => ({ id_siswa: id, jenjang: "sma", device_id: "sma-05", slug, nama_lengkap: "Nama " + id,
    poin: 10, lencana: [], peringkat: null, judul_proyek: "", catatan_pelatih: "Awal", sertifikat_nomor: "EKC-2026-S1-" + id, ...extra });
  const r1 = await s.post("/admin/impor", { siswa: [item("SMA-010", "budi"), item("SMA-011", "zaidan"), item("SMA-012", "zaidan")] }, admin);
  // "budi" sudah dipakai SMA-004 -> "budi-2"; dua "zaidan" dalam satu impor -> "zaidan", "zaidan-2"
  assert.deepEqual(r1.dibuat.map((d) => d.slug), ["budi-2", "zaidan", "zaidan-2"]);
  assert.ok(r1.dibuat.every((d) => /^[A-Z2-9]{6}$/.test(d.kode)));
  assert.equal(r1.diperbarui, 0);
  assert.ok((await s.post("/masuk/siswa", { id: "SMA-010", kode: r1.dibuat[0].kode })).token);
  await s.post("/staf/siswa/SMA-010", { catatan_pelatih: "Dikoreksi" }, admin);
  const r2 = await s.post("/admin/impor", { siswa: [item("SMA-010", "budi", { poin: 55 })] }, admin);
  assert.deepEqual([r2.dibuat.length, r2.diperbarui], [0, 1]);
  const p = (await s.get("/profil/budi-2")).profil;
  assert.deepEqual([p.poin, p.catatan_pelatih], [55, "Dikoreksi"]);
  assert.ok((await s.post("/masuk/siswa", { id: "SMA-010", kode: r1.dibuat[0].kode })).token); // impor ulang tidak mengganti kode
  assert.equal((await s.postRaw("/admin/impor", { siswa: [item("salah", "x")] }, admin)).status, 400);
  assert.equal((await s.postRaw("/admin/impor", { siswa: [item("SMA-013", "y", { jenjang: "sd" })] }, admin)).status, 400);
  assert.equal((await s.postRaw("/admin/impor", { siswa: [item("SMA-013", "")] }, admin)).status, 400);
  assert.equal((await s.postRaw("/admin/impor", { siswa: "bukan daftar" }, admin)).status, 400);
  assert.equal((await s.getRaw("/profil/y")).status, 404); // impor yang ditolak tidak menulis apa pun
  const siswa = (await s.post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  assert.equal((await s.postRaw("/admin/impor", { siswa: [] }, siswa)).status, 403);
});

test("foto: tolak non-JPEG, ganti foto menghapus yang lama, admin bisa unggah", async (t) => {
  const s = await jalankan(t);
  const tSiswa = (await s.post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  const kirim = (path, buf, token) => fetch(s.url + "/api/portofolio" + path,
    { method: "POST", headers: { "Content-Type": "image/jpeg", Authorization: "Bearer " + token }, body: buf });
  const png = await kirim("/saya/foto", Buffer.from("\x89PNG...."), tSiswa);
  assert.equal(png.status, 400);
  assert.match((await png.json()).error, /JPEG/);
  const a = await (await kirim("/saya/foto", Buffer.from([0xff, 0xd8, 0xff, 1]), tSiswa)).json();
  const b = await (await kirim("/saya/foto", Buffer.from([0xff, 0xd8, 0xff, 2]), tSiswa)).json();
  assert.match(a.foto_url, /^memori:\/\/SMA-004\/[0-9a-f]{16}\.jpg$/);
  assert.notEqual(a.foto_url, b.foto_url);
  assert.equal(s.store.adaFoto(a.foto_url.slice(9)), false); // foto lama dihapus
  assert.equal(s.store.adaFoto(b.foto_url.slice(9)), true);
  assert.equal((await s.get("/profil/budi")).profil.foto_url, b.foto_url);
  assert.equal((await kirim("/saya/foto", Buffer.from("\x89PNG"), tSiswa)).status, 400);
  assert.equal(s.store.adaFoto(b.foto_url.slice(9)), true); // gagal unggah -> foto lama tetap
  const admin = (await s.post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
  const c = await (await kirim("/staf/siswa/SMP-022/foto", Buffer.from([0xff, 0xd8, 0xff, 3]), admin)).json();
  assert.match(c.foto_url, /^memori:\/\/SMP-022\//);
  assert.equal((await kirim("/staf/siswa/SMP-022/foto", Buffer.from([0xff, 0xd8, 0xff]), tSiswa)).status, 403);
});

test("impor gagal di tengah tetap mengembalikan kode siswa yang sudah dibuat", async (t) => {
  let tambahKe = 0;
  const s = await jalankan(t, siswaAwal(), ENV, (store) => ({
    ...store,
    tambah: async (b) => { if (++tambahKe === 2) throw new Error("supabase putus"); return store.tambah(b); },
  }));
  const admin = (await s.post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
  const item = (id, slug) => ({ id_siswa: id, jenjang: "sma", device_id: "sma-05", slug, nama_lengkap: "Nama " + id,
    poin: 0, lencana: [], peringkat: null, judul_proyek: "", catatan_pelatih: "", sertifikat_nomor: "EKC-2026-S1-" + id });
  const r = await s.postRaw("/admin/impor", { siswa: [item("SMA-020", "satu"), item("SMA-021", "dua"), item("SMA-022", "tiga")] }, admin);
  assert.equal(r.status, 500);
  const isi = await r.json();
  assert.equal(isi.ok, false);
  assert.deepEqual(isi.dibuat.map((d) => d.id_siswa), ["SMA-020"]);       // kode yang sudah dibuat tidak hilang
  assert.ok((await s.post("/masuk/siswa", { id: "SMA-020", kode: isi.dibuat[0].kode })).token);
});

test("token admin berumur pendek (12 jam)", async (t) => {
  const s = await jalankan(t);
  const admin = (await s.post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
  const sisa = JSON.parse(Buffer.from(admin.split(".")[0], "base64url").toString()).exp - Date.now();
  assert.ok(sisa > 11 * 3600 * 1000 && sisa <= 12 * 3600 * 1000, String(sisa));
});
