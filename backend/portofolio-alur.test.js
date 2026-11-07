// Tes alur lengkap portofolio: siswa mengisi halamannya, guru/admin mengelola. `cd backend && node --test`
const test = require("node:test");
const assert = require("node:assert/strict");
const { buatToken } = require("./portofolio-inti");
const { ENV, siswaAwal, jalankan } = require("./uji-bantu");

// teks sepanjang n karakter (bukan byte), berisi emoji & huruf beraksen supaya batas per karakter benar-benar diuji
// tanpa spasi: server memangkas spasi di awal/akhir, jadi spasi di ujung akan mengubah panjang
const teks = (n, awal = "Akusukarobot🤖dancafé-") => Array.from(awal.repeat(Math.ceil(n / Array.from(awal).length))).slice(0, n).join("");
const link = (n) => "https://contoh.id/" + "a".repeat(n - "https://contoh.id/".length);
const BATAS_SISWA = { panggilan: 30, tentang: 300, cita_cita: 100, cerita_tersulit: 200, cerita_terseru: 200, cerita_rencana: 200 };
const BATAS_RESMI = { nama_lengkap: 100, kelas: 20, judul_proyek: 100, catatan_pelatih: 500 };
const isianPenuh = (batas) => Object.fromEntries(Object.entries(batas).map(([k, n]) => [k, teks(n)]));
const JPEG = (n) => Buffer.from([0xff, 0xd8, 0xff, 0xe0, n]);

async function masukSiswa(s, id = "SMA-004", kode = "K7P2QX") {
  return (await s.post("/masuk/siswa", { id, kode })).token;
}
async function masukAdmin(s) {
  return (await s.post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
}
const kirimFoto = (s, path, buf, token) => fetch(s.url + "/api/portofolio" + path,
  { method: "POST", headers: { "Content-Type": "image/jpeg", Authorization: "Bearer " + token }, body: buf });

// ================================================================ SISWA

test("siswa: semua isian terisi sampai batas maksimal, tampil utuh di profil publik", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  const isian = { ...isianPenuh(BATAS_SISWA), link_karya: [link(200), "https://github.com/budi", "https://scratch.mit.edu/x"] };
  const simpan = (await s.post("/saya", isian, tk)).siswa;
  for (const [k, v] of Object.entries(isian)) assert.deepEqual(simpan[k], v, k);
  const foto = await (await kirimFoto(s, "/saya/foto", JPEG(1), tk)).json();
  const profil = (await s.get("/profil/budi")).profil;
  for (const [k, v] of Object.entries(isian)) assert.deepEqual(profil[k], v, k);
  assert.equal(profil.foto_url, foto.foto_url);
  const saya = (await s.get("/saya", tk)).siswa;  // dashboard membaca ulang: sama dengan yang disimpan
  for (const [k, v] of Object.entries(isian)) assert.deepEqual(saya[k], v, k);
});

test("siswa: satu karakter lebih dari batas ditolak, menyebut nama field, tidak ada yang tersimpan", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  await s.post("/saya", { tentang: "awal" }, tk);
  for (const [k, n] of Object.entries(BATAS_SISWA)) {
    const r = await s.postRaw("/saya", { tentang: "baru", [k]: teks(n + 1) }, tk);
    assert.equal(r.status, 400, k);
    assert.match((await r.json()).error, new RegExp(k), k);
  }
  const r = await s.postRaw("/saya", { tentang: "baru", link_karya: [link(201)] }, tk);
  assert.equal(r.status, 400);
  assert.equal((await s.get("/saya", tk)).siswa.tentang, "awal"); // satu isian salah = semua batal
});

test("siswa: boleh mengosongkan isian dan link", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  await s.post("/saya", { tentang: "isi", cita_cita: "isi", link_karya: ["https://a.id"] }, tk);
  await s.post("/saya", { tentang: "", cita_cita: "   ", link_karya: [] }, tk);
  const p = (await s.get("/profil/budi")).profil;
  assert.deepEqual([p.tentang, p.cita_cita, p.link_karya], ["", "", []]);
});

test("siswa: tidak bisa mengubah data resmi, kolom sistem, atau kunci aneh", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  const sebelum = (await s.get("/saya", tk)).siswa;
  const terlarang = ["nama_lengkap", "kelas", "judul_proyek", "catatan_pelatih", "poin", "lencana", "peringkat", "slug",
    "device_id", "jenjang", "id_siswa", "sertifikat_nomor", "kode_hash", "kode_versi", "foto_path", "updated_by",
    "updated_at", "constructor", "toString", "hasOwnProperty"];
  for (const k of terlarang) {
    const r = await s.postRaw("/saya", { [k]: "x" }, tk);
    assert.equal(r.status, 400, k);
  }
  // "__proto__" lewat JSON mentah (JSON.parse membuatnya jadi properti sendiri)
  const proto = await fetch(s.url + "/api/portofolio/saya", { method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + tk }, body: '{"__proto__":"x"}' });
  assert.equal(proto.status, 400);
  assert.deepEqual((await s.get("/saya", tk)).siswa, sebelum);
});

test("siswa: isian bukan teks atau body rusak ditolak", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  for (const body of [{ tentang: null }, { tentang: 123 }, { tentang: {} }, { tentang: ["a"] }, ["tentang"],
    { link_karya: null }, { link_karya: [123] }, { link_karya: ["https://a b.id"] }, { link_karya: ["ftp://a.id"] }]) {
    assert.equal((await s.postRaw("/saya", body, tk)).status, 400, JSON.stringify(body));
  }
  const teksPolos = await fetch(s.url + "/api/portofolio/saya", { method: "POST",
    headers: { "Content-Type": "text/plain", Authorization: "Bearer " + tk }, body: "halo" });
  assert.equal(teksPolos.status, 400);
});

test("siswa: tidak bisa masuk ke area guru/admin, termasuk untuk dirinya sendiri", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  assert.equal((await s.getRaw("/staf/siswa", tk)).status, 403);
  assert.equal((await s.postRaw("/staf/siswa/SMA-004", { kelas: "XII" }, tk)).status, 403);
  assert.equal((await s.postRaw("/staf/siswa/SMA-004/reset-kode", {}, tk)).status, 403);
  assert.equal((await kirimFoto(s, "/staf/siswa/SMA-004/foto", JPEG(1), tk)).status, 403);
  assert.equal((await s.postRaw("/admin/impor", { siswa: [] }, tk)).status, 403);
});

test("siswa: token dipalsukan atau milik siswa lain tidak bisa mengubah halaman orang lain", async (t) => {
  const s = await jalankan(t);
  const tk = await masukSiswa(s);
  const [isi, ttd] = tk.split(".");
  const palsu = Buffer.from(JSON.stringify({ ...JSON.parse(Buffer.from(isi, "base64url")), id: "SMP-022" })).toString("base64url");
  assert.equal((await s.postRaw("/saya", { tentang: "x" }, palsu + "." + ttd)).status, 401);       // isi diubah
  const lain = buatToken({ peran: "siswa", id: "SMP-022", jenjang: "smp", v: 1 }, "secret-lain");
  assert.equal((await s.postRaw("/saya", { tentang: "x" }, lain)).status, 401);                    // secret salah
  const rafif = await masukSiswa(s, "SMP-022", "R4F1F2");
  await s.post("/saya", { tentang: "punya Rafif" }, rafif);
  assert.equal((await s.get("/profil/budi")).profil.tentang, undefined);                         // Budi tidak tersentuh
  assert.equal((await s.get("/profil/rafif")).profil.tentang, "punya Rafif");
});

test("siswa: ID berformat aneh langsung ditolak tanpa menyentuh database", async (t) => {
  let ambil = 0;
  const s = await jalankan(t, siswaAwal(), ENV, (store) => ({ ...store, ambil: (id) => { ambil++; return store.ambil(id); } }));
  for (const id of ["", "x", "'; drop table--", "SMA-04", "SMA-0044", "../SMA-004", "a".repeat(5000)]) {
    assert.equal((await s.postRaw("/masuk/siswa", { id, kode: "K7P2QX" })).status, 401, id.slice(0, 20));
  }
  assert.equal(ambil, 0);
  assert.ok(await masukSiswa(s, " sma-004 ", " k7p2qx ")); // spasi & huruf kecil tetap diterima
});

// ================================================================ ADMIN

test("admin: mengisi data resmi + isian siswa sampai batas, tampil di profil", async (t) => {
  const s = await jalankan(t);
  const adm = await masukAdmin(s);
  const isian = { ...isianPenuh(BATAS_RESMI), ...isianPenuh(BATAS_SISWA), link_karya: ["https://a.id"] };
  await s.post("/staf/siswa/sma-004", isian, adm); // ID huruf kecil diterima
  const p = (await s.get("/profil/budi")).profil;
  for (const [k, v] of Object.entries(isian)) assert.deepEqual(p[k], v, k);
});

test("admin: batas data resmi, nama lengkap wajib, kolom sistem ditolak", async (t) => {
  const s = await jalankan(t);
  const adm = await masukAdmin(s);
  for (const [k, n] of Object.entries(BATAS_RESMI)) {
    const r = await s.postRaw("/staf/siswa/SMA-004", { [k]: teks(n + 1) }, adm);
    assert.equal(r.status, 400, k);
    assert.match((await r.json()).error, new RegExp(k));
  }
  assert.equal((await s.postRaw("/staf/siswa/SMA-004", { nama_lengkap: "   " }, adm)).status, 400);
  for (const k of ["poin", "lencana", "peringkat", "slug", "device_id", "jenjang", "kode_hash", "kode_versi", "sertifikat_nomor", "foto_path"]) {
    assert.equal((await s.postRaw("/staf/siswa/SMA-004", { [k]: "x" }, adm)).status, 400, k);
  }
  assert.equal((await s.get("/profil/budi")).profil.nama_lengkap, "Budi");
});

test("admin: daftar per jenjang tanpa data rahasia", async (t) => {
  const s = await jalankan(t);
  const adm = await masukAdmin(s);
  assert.deepEqual((await s.get("/staf/siswa?jenjang=smp", adm)).siswa.map((x) => x.id_siswa), ["SMP-022"]);
  assert.deepEqual((await s.get("/staf/siswa?jenjang=sma", adm)).siswa.map((x) => x.id_siswa), ["SMA-004"]);
  const semua = (await s.get("/staf/siswa?jenjang=xyz", adm)).siswa;
  assert.deepEqual(semua.map((x) => x.nama_lengkap), ["Budi", "Rafif"]); // urut nama
  for (const x of semua) for (const k of ["kode_hash", "kode_versi", "updated_by", "foto_path"]) assert.ok(!(k in x), k);
  assert.equal((await s.postRaw("/staf/siswa/SMA-999", { kelas: "X" }, adm)).status, 404);
  assert.equal((await s.postRaw("/staf/siswa/SMA-999/reset-kode", {}, adm)).status, 404);
});

test("admin: login ketat (salah email/password, env kosong, terkunci setelah 10x)", async (t) => {
  const s = await jalankan(t);
  for (const [email, password] of [["admin@x.id", "PW"], ["lain@x.id", "pw"], ["", ""], ["admin@x.id", ""]]) {
    assert.equal((await s.postRaw("/masuk/staf", { email, password })).status, 401, email + "/" + password);
  }
  assert.ok((await s.post("/masuk/staf", { email: "  ADMIN@X.ID ", password: "pw" })).token);
  for (let i = 0; i < 10; i++) await s.postRaw("/masuk/staf", { email: "admin@x.id", password: "salah" });
  assert.equal((await s.postRaw("/masuk/staf", { email: "admin@x.id", password: "pw" })).status, 429);

  const tanpaAdmin = await jalankan(t, siswaAwal(), { PORTOFOLIO_SECRET: "s" });
  assert.equal((await tanpaAdmin.postRaw("/masuk/staf", { email: "", password: "" })).status, 401);
  assert.equal((await tanpaAdmin.postRaw("/masuk/staf", { email: "undefined", password: "undefined" })).status, 401);
});

test("admin: reset kode berkali-kali, hanya kode terakhir yang berlaku", async (t) => {
  const s = await jalankan(t);
  const adm = await masukAdmin(s);
  const k1 = (await s.post("/staf/siswa/SMA-004/reset-kode", {}, adm)).kode;
  const k2 = (await s.post("/staf/siswa/SMA-004/reset-kode", {}, adm)).kode;
  assert.equal((await s.postRaw("/masuk/siswa", { id: "SMA-004", kode: k1 })).status, 401);
  assert.ok(await masukSiswa(s, "SMA-004", k2));
});

test("admin: unggah & ganti foto siswa, foto lama terhapus", async (t) => {
  const s = await jalankan(t);
  const adm = await masukAdmin(s);
  const a = await (await kirimFoto(s, "/staf/siswa/SMA-004/foto", JPEG(1), adm)).json();
  const b = await (await kirimFoto(s, "/staf/siswa/SMA-004/foto", JPEG(2), adm)).json();
  assert.equal(s.store.adaFoto(a.foto_url.slice(9)), false);
  assert.equal((await s.get("/profil/budi")).profil.foto_url, b.foto_url);
  assert.equal((await kirimFoto(s, "/staf/siswa/SMA-999/foto", JPEG(1), adm)).status, 404);
});

test("admin: impor -> siswa mengisi -> guru koreksi -> impor ulang tidak merusak apa pun", async (t) => {
  const s = await jalankan(t, []);
  const adm = await masukAdmin(s);
  const item = (poin, nama) => ({ id_siswa: "SMA-010", jenjang: "sma", device_id: "sma-05", slug: "andi", nama_lengkap: nama,
    poin, lencana: [{ p: 12, challenge: [{ level: "easy", nama: "Saklar dari HP", poin: 5 }] }], peringkat: 1,
    judul_proyek: "Kipas", catatan_pelatih: "Teliti", sertifikat_nomor: "EKC-2026-S1-SMA-010" });
  const { dibuat } = await s.post("/admin/impor", { siswa: [item(5, "Andi")] }, adm);
  const tk = await masukSiswa(s, "SMA-010", dibuat[0].kode);
  await s.post("/saya", { tentang: "Tulisan Andi", link_karya: ["https://andi.id"] }, tk);
  await s.post("/staf/siswa/SMA-010", { nama_lengkap: "Andi Pratama", kelas: "XI-1" }, adm);
  const r2 = await s.post("/admin/impor", { siswa: [item(20, "ANDI SALAH KETIK")] }, adm);
  assert.deepEqual([r2.dibuat.length, r2.diperbarui], [0, 1]);
  const p = (await s.get("/profil/andi")).profil;
  assert.deepEqual([p.nama_lengkap, p.kelas, p.tentang, p.link_karya, p.poin], ["Andi Pratama", "XI-1", "Tulisan Andi", ["https://andi.id"], 20]);
  assert.ok(await masukSiswa(s, "SMA-010", dibuat[0].kode)); // kode lama tetap berlaku
  assert.ok((await s.get("/saya", tk)).siswa);                // sesi siswa tidak putus
});

test("admin: impor menolak slug yang bukan huruf kecil/angka/strip", async (t) => {
  const s = await jalankan(t, []);
  const adm = await masukAdmin(s);
  const item = (slug) => ({ id_siswa: "SMA-011", jenjang: "sma", device_id: "sma-05", slug, nama_lengkap: "X",
    poin: 0, lencana: [], peringkat: null, judul_proyek: "", catatan_pelatih: "", sertifikat_nomor: "EKC-2026-S1-SMA-011" });
  for (const slug of ["Budi", "budi santoso", "../admin", "budi/2", "<b>"]) {
    assert.equal((await s.postRaw("/admin/impor", { siswa: [item(slug)] }, adm)).status, 400, slug);
  }
  assert.equal((await s.post("/admin/impor", { siswa: [item("zaidan-altamis-2")] }, adm)).dibuat.length, 1);
});

// ================================================================ GURU (peran per jenjang, akun dibuat di Tahap 2)

test("guru SMA: hanya melihat & mengubah siswa SMA, tidak bisa impor", async (t) => {
  const s = await jalankan(t);
  const guru = buatToken({ peran: "guru", email: "guru.sma@x.id", jenjang: "sma" }, ENV.PORTOFOLIO_SECRET, 3600);
  assert.deepEqual((await s.get("/staf/siswa?jenjang=smp", guru)).siswa.map((x) => x.id_siswa), ["SMA-004"]); // dipaksa SMA
  assert.equal((await s.post("/staf/siswa/SMA-004", { kelas: "XI-3", catatan_pelatih: "Rajin" }, guru)).siswa.kelas, "XI-3");
  assert.equal((await s.postRaw("/staf/siswa/SMP-022", { kelas: "8A" }, guru)).status, 403);
  assert.equal((await s.postRaw("/staf/siswa/SMP-022/reset-kode", {}, guru)).status, 403);
  assert.equal((await kirimFoto(s, "/staf/siswa/SMP-022/foto", JPEG(1), guru)).status, 403);
  assert.ok((await s.post("/staf/siswa/SMA-004/reset-kode", {}, guru)).kode);
  assert.equal((await s.postRaw("/admin/impor", { siswa: [] }, guru)).status, 403);
});
