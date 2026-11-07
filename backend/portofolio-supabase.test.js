// Tes integrasi dengan Supabase SUNGGUHAN (tabel portofolio_siswa + bucket foto). Default DILEWATI.
// Jalankan setelah SQL & bucket dibuat (backend/README.md bagian 7):
//   UJI_SUPABASE=1 UJI_ENV=<path .env berisi SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY/SUPABASE_KEY> node --test portofolio-supabase.test.js
// Aman: hanya memakai ID uji SMA-999/SMP-999 (menolak jalan kalau sudah ada), semua baris & foto uji dihapus lagi.
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const { pasangPortofolio, buatStoreSupabase } = require("./portofolio");

const AKTIF = process.env.UJI_SUPABASE === "1";
const ID_UJI = ["SMA-999", "SMP-999"];
const BUCKET = process.env.PORTOFOLIO_BUCKET || "portofolio-foto";

test("integrasi Supabase: impor, isi lengkap, foto, reset kode, impor ulang", { skip: !AKTIF && "set UJI_SUPABASE=1 untuk menjalankan" }, async (t) => {
  require("dotenv").config({ path: process.env.UJI_ENV || path.join(__dirname, ".env") });
  const kunci = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;
  assert.ok(process.env.SUPABASE_URL && kunci, "SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY/SUPABASE_KEY wajib ada di .env");
  const sb = createClient(process.env.SUPABASE_URL, kunci, { db: { schema: "ekskul_coding_asy_syahid" } });

  const cek = await sb.from("portofolio_siswa").select("id_siswa").in("id_siswa", ID_UJI);
  if (cek.error) return t.skip("tabel portofolio_siswa belum bisa diakses: " + cek.error.message);
  assert.equal(cek.data.length, 0, `ID uji ${ID_UJI} sudah ada di tabel -- hapus manual dulu, tes tidak mau menimpa`);
  const ember = await sb.storage.getBucket(BUCKET);
  if (ember.error) return t.skip(`bucket ${BUCKET} belum ada: ${ember.error.message}`);
  assert.equal(ember.data.public, true, `bucket ${BUCKET} harus Public`);

  t.after(async () => {
    await sb.from("portofolio_siswa").delete().in("id_siswa", ID_UJI);
    for (const id of ID_UJI) {
      const { data } = await sb.storage.from(BUCKET).list(id);
      if (data && data.length) await sb.storage.from(BUCKET).remove(data.map((f) => `${id}/${f.name}`));
    }
  });

  const app = express();
  app.use(express.json({ limit: "1mb" }));
  pasangPortofolio(app, { store: buatStoreSupabase(sb, BUCKET), env: { PORTOFOLIO_SECRET: crypto.randomBytes(16).toString("hex"), ADMIN_EMAIL: "uji@x.id", ADMIN_PASSWORD: "uji" } });
  const server = await new Promise((ok) => { const s = app.listen(0, () => ok(s)); });
  t.after(() => server.close());
  const u = `http://127.0.0.1:${server.address().port}/api/portofolio`;
  const minta = async (method, p, body, token, jenis = "application/json") => {
    const r = await fetch(u + p, { method, headers: { "Content-Type": jenis, ...(token ? { Authorization: "Bearer " + token } : {}) },
      body: body === undefined ? undefined : (Buffer.isBuffer(body) ? body : JSON.stringify(body)) });
    return { status: r.status, isi: await r.json() };
  };
  const ok = async (...a) => { const r = await minta(...a); assert.equal(r.status, 200, JSON.stringify(r.isi)); return r.isi; };

  const slug = "uji-otomatis-" + crypto.randomBytes(3).toString("hex");
  const item = (id, extra = {}) => ({ id_siswa: id, jenjang: id.slice(0, 3).toLowerCase(), device_id: "sma-01", slug, nama_lengkap: "Siswa Uji Otomatis",
    poin: 15, lencana: [{ p: 12, judul: "Kontrol Kipas", challenge: [{ level: "hard", nama: "Kipas Lebih Gesit", poin: 15 }] }],
    peringkat: 3, judul_proyek: "Kipas Uji", catatan_pelatih: "Catatan uji", sertifikat_nomor: "EKC-2026-S1-" + id, ...extra });

  const admin = (await ok("POST", "/masuk/staf", { email: "uji@x.id", password: "uji" })).token;
  const r1 = await ok("POST", "/admin/impor", { siswa: [item("SMA-999"), item("SMP-999")] }, admin);
  assert.deepEqual(r1.dibuat.map((d) => d.slug), [slug, slug + "-2"]);       // slug unik dicek ke tabel sungguhan
  const siswa = (await ok("POST", "/masuk/siswa", { id: "SMA-999", kode: r1.dibuat[0].kode })).token;

  const isian = { panggilan: "Uji 🤖", tentang: "Suka robot 🤖 dan café — ".repeat(10).slice(0, 250), cita_cita: "Insinyur",
    cerita_tersulit: "Relay", cerita_terseru: "Kipas", cerita_rencana: "OLED", link_karya: ["https://contoh.id/a", "https://contoh.id/b"] };
  await ok("POST", "/saya", isian, siswa);
  const profil = (await ok("GET", "/profil/" + slug)).profil;
  for (const [k, v] of Object.entries(isian)) assert.deepEqual(profil[k], v, k);  // teks unicode & jsonb utuh
  assert.deepEqual(profil.lencana, item("SMA-999").lencana);
  assert.equal(profil.peringkat, 3);

  const jpeg = (n) => Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), crypto.randomBytes(200 + n)]);
  const f1 = await ok("POST", "/saya/foto", jpeg(1), siswa, "image/jpeg");
  const unduh = await fetch(f1.foto_url);
  assert.equal(unduh.status, 200, "foto harus bisa dibuka publik: " + f1.foto_url);
  const f2 = await ok("POST", "/saya/foto", jpeg(2), siswa, "image/jpeg");
  const { data: isiFolder } = await sb.storage.from(BUCKET).list("SMA-999");
  assert.equal(isiFolder.length, 1, "foto lama harus terhapus dari bucket");
  assert.ok(f2.foto_url.endsWith(isiFolder[0].name));

  await ok("POST", "/staf/siswa/SMA-999", { kelas: "XI-UJI", nama_lengkap: "Siswa Uji Dikoreksi" }, admin);
  const { kode } = await ok("POST", "/staf/siswa/SMA-999/reset-kode", {}, admin);
  assert.equal((await minta("GET", "/saya", undefined, siswa)).status, 401);   // token lama mati
  await ok("POST", "/masuk/siswa", { id: "SMA-999", kode });

  const r2 = await ok("POST", "/admin/impor", { siswa: [item("SMA-999", { poin: 99, nama_lengkap: "Nama Spreadsheet" })] }, admin);
  assert.deepEqual([r2.dibuat.length, r2.diperbarui], [0, 1]);
  const akhir = (await ok("GET", "/profil/" + slug)).profil;
  assert.deepEqual([akhir.poin, akhir.nama_lengkap, akhir.kelas, akhir.tentang], [99, "Siswa Uji Dikoreksi", "XI-UJI", isian.tentang]);
  const daftar = (await ok("GET", "/staf/siswa?jenjang=sma", undefined, admin)).siswa;
  assert.ok(daftar.some((x) => x.id_siswa === "SMA-999"));
  assert.ok(!daftar.some((x) => x.id_siswa === "SMP-999"));
});
