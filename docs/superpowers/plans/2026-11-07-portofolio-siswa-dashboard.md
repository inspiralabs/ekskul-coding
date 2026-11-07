# Portofolio Siswa + Dashboard (Tahap 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Siswa login dengan ID + kode, mengisi bagian halamannya sendiri (termasuk foto), dan halaman publiknya
langsung tampil di `ekskulcoding.inspiralabs.id/profil/?s=<slug>`. Admin bisa mengedit siapa pun, mereset kode, dan
mengimpor data resmi dari spreadsheet penilaian.

**Architecture:** Endpoint baru `/api/portofolio/*` dipasang di backend Express yang sudah ada (`backend/server.js`).
Logika murni (hash, token, validasi, aturan akses, aturan impor) ada di `backend/portofolio-inti.js` dan dites tanpa
jaringan. Akses Supabase (tabel + Storage) diisolasi di satu objek "store", jadi tes route memakai store memori.
Frontend berupa HTML/JS polos di Vercel (`profil/`, `dashboard/`). Impor dijalankan dari laptop tutor lewat
`tools/portofolio.py impor`, memakai parser spreadsheet yang sudah ada.

**Tech Stack:** Node 22 + Express 4 + `@supabase/supabase-js` 2 (sudah terpasang), `node:crypto`, `node:test`;
Python 3 stdlib (`urllib`); HTML/CSS/JS tanpa build step.

**Spec:** `docs/superpowers/specs/2026-11-07-portofolio-siswa-dashboard-design.md` (baca §6, §7, §9).

## Global Constraints

- **Tanpa dependency baru**, di backend maupun frontend. Tidak ada npm di frontend.
- Kerja di branch `feat/portofolio-dashboard`, lalu PR. **Jangan push ke `master`**, karena push ke `master` = deploy produksi.
- Repo publik: jangan commit xlsx penilaian, kode akses, link Drive data siswa, atau foto.
- Endpoint sensor/kipas yang sudah ada tidak boleh berubah perilakunya. Tanpa `PORTOFOLIO_SECRET`, semua
  `/api/portofolio/*` membalas **503** `{"ok":false,"error":"portofolio belum diaktifkan"}`.
- Kode akses: 6 karakter dari `ABCDEFGHJKMNPQRSTUVWXYZ23456789`. Kode dan password disimpan sebagai
  `scrypt$<saltHex>$<hashHex>`.
- Batas login: **10 gagal per kunci per 15 menit** → 429. Kunci = `siswa:<ID>` atau `staf:<email>`.
- Token: HMAC-SHA256, umur **30 hari**, header `Authorization: Bearer <token>`. Token siswa memuat `v` = `kode_versi`.
  Kalau berbeda (kode sudah direset), balas 401.
- Batas panjang (dihitung per karakter Unicode): panggilan 30, tentang 300, cita_cita 100, cerita_tersulit 200,
  cerita_terseru 200, cerita_rencana 200, nama_lengkap 100, kelas 20, judul_proyek 100, catatan_pelatih 500;
  link_karya maks 3 URL `https://`, masing-masing ≤ 200.
- Foto: JPEG (byte awal `FF D8 FF`), ≤ **600 KB** di server. Browser mengecilkannya ke sisi terpanjang ≤ 1600 px lewat `<canvas>`.
- Tidak pernah disimpan atau ditampilkan: nilai akhir, predikat, nilai post-test, absensi, NIS, no. HP, data orang tua,
  "Perlu Ditingkatkan".
- Halaman `profil/` dan `dashboard/`: `<meta name="robots" content="noindex">` + header `X-Robots-Tag: noindex`.
  Semua teks dari data dipasang dengan `textContent`.
- Tampilan untuk HP dulu. Bahasa antarmuka: Indonesia, menyapa siswa dengan "kamu".

## Review Focus

1. Siswa menempel teks panjang atau emoji → batas dihitung per karakter, bukan byte. Pesan error menyebut nama field. (Task 2)
2. Siswa memakai token lama setelah guru mereset kodenya → 401, dashboard kembali ke layar login. (Task 3)
3. Foto dari HP (PNG/HEIC/WebP, atau JPEG 5 MB) → browser mengubahnya ke JPEG kecil. Kalau tetap terkirim, server
   menolak dengan pesan jelas, dan foto lama tidak terhapus. (Task 5, Task 8)
4. Impor diulang setelah guru mengoreksi nama/judul/catatan → koreksi tetap. Poin/lencana ikut spreadsheet. (Task 4)
5. Dua siswa dengan slug sama, atau siswa baru yang slug-nya sudah dipakai → diberi akhiran `-2`, `-3`, dan URL lama
   tidak berubah. (Task 4)

---

### Task 1: Primitif keamanan (kode, hash, token, pembatas login)

**Files:**
- Create: `backend/portofolio-inti.js`
- Test: `backend/portofolio.test.js`
- Modify: `backend/package.json` (script `"test": "node --test"`)

**Interfaces:**
- Produces (dari `portofolio-inti.js`):
  - `buatKode(): string`
  - `hashRahasia(teks: string): string`
  - `cocokRahasia(teks: string, simpanan: string): boolean`. Format rusak atau kosong → `false`, tidak melempar error.
  - `buatToken(isi: object, secret: string, umurDetik = 2592000): string`
  - `bacaToken(token: string, secret: string, sekarangMs = Date.now()): object | null`. Tanda tangan salah, format
    rusak, atau kedaluwarsa → `null`.
  - `buatPembatas({ maks = 10, jendelaMs = 900000, sekarang = Date.now } = {}): { terkunci(kunci): boolean, gagal(kunci): void, berhasil(kunci): void }`

- [ ] **Step 1: Tulis tes yang gagal** di `backend/portofolio.test.js` (`node:test` + `node:assert/strict`):

```js
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
```

- [ ] **Step 2: Jalankan dan pastikan gagal.** `cd backend && node --test` → FAIL (`Cannot find module './portofolio-inti'`).
- [ ] **Step 3: Implementasikan di `backend/portofolio-inti.js`.** `crypto.randomInt` untuk kode;
  `crypto.scryptSync(teks, salt, 32)` + `timingSafeEqual`; token = `base64url(JSON isi + exp)` + `.` + `base64url(HMAC)`;
  pembatas = `Map` kunci → `{jumlah, mulai}`.
- [ ] **Step 4: Jalankan dan pastikan lolos.** `cd backend && node --test` → semua PASS.
- [ ] **Step 5: Commit.** `git add backend/portofolio-inti.js backend/portofolio.test.js backend/package.json && git commit -m "feat(portofolio): kode akses, hash, token, pembatas login"`

### Task 2: Validasi perubahan, aturan akses, data publik, aturan impor

**Files:**
- Modify: `backend/portofolio-inti.js`
- Test: `backend/portofolio.test.js`

**Interfaces:**
- Produces:
  - `saringPerubahan(peran: "siswa"|"admin"|"guru", data: object): { patch: object } | { error: string }`.
    Siswa boleh: `panggilan, tentang, cita_cita, cerita_tersulit, cerita_terseru, cerita_rencana, link_karya`.
    Admin/guru boleh semua itu + `nama_lengkap, kelas, judul_proyek, catatan_pelatih`. Field lain (termasuk `poin`,
    `lencana`, `device_id`, `slug`) → `{error: 'field "<nama>" tidak boleh diubah'}`. String di-trim.
  - `bolehKelola(akun: {peran, jenjang?}, siswa: {jenjang}): boolean`. Admin → true. Guru → jenjang sama. Siswa → false.
  - `dataPublik(baris: object, urlFoto: (path) => string|null): object`. Hanya kunci: `slug, jenjang, device_id,
    nama_lengkap, panggilan, kelas, foto_url, tentang, cita_cita, cerita_tersulit, cerita_terseru, cerita_rencana,
    link_karya, poin, lencana, peringkat, judul_proyek, catatan_pelatih, sertifikat_nomor`.
  - `gabungImpor(lama: object|null, baru: object): object`. Mengembalikan baris/patch yang akan ditulis
    (aturan di spec §7, lihat tes).
  - `cekJpeg(buf: Buffer): string | null`. `null` = lolos; selain itu pesan error.

- [ ] **Step 1: Tulis tes yang gagal:**

```js
test("saring perubahan siswa", () => {
  assert.deepEqual(saringPerubahan("siswa", { tentang: "  Suka robot  " }), { patch: { tentang: "Suka robot" } });
  assert.match(saringPerubahan("siswa", { poin: 999 }).error, /"poin" tidak boleh diubah/);
  assert.match(saringPerubahan("siswa", { kelas: "XI-2" }).error, /"kelas"/);
  assert.ok(saringPerubahan("siswa", { tentang: "😀".repeat(300) }).patch);   // 300 karakter, bukan byte
  assert.match(saringPerubahan("siswa", { tentang: "a".repeat(301) }).error, /tentang/);
  assert.match(saringPerubahan("siswa", { tentang: 5 }).error, /tentang/);
  assert.ok(saringPerubahan("siswa", { link_karya: ["https://a.id", "https://b.id"] }).patch);
  assert.match(saringPerubahan("siswa", { link_karya: ["javascript:alert(1)"] }).error, /link_karya/);
  assert.match(saringPerubahan("siswa", { link_karya: ["https://a", "https://b", "https://c", "https://d"] }).error, /link_karya/);
});
test("saring perubahan admin", () => {
  assert.deepEqual(saringPerubahan("admin", { kelas: "XI-2", tentang: "x" }).patch, { kelas: "XI-2", tentang: "x" });
  assert.match(saringPerubahan("admin", { lencana: [] }).error, /"lencana"/);
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
  for (const k of ["kode_hash", "kode_versi", "updated_by", "foto_path", "id_siswa"]) assert.ok(!(k in d), k);
});
test("aturan impor", () => {
  const baru = { id_siswa: "SMA-004", jenjang: "sma", device_id: "sma-04", slug: "budi", nama_lengkap: "Budi S",
                 poin: 40, lencana: [{ p: 12 }], peringkat: 2, judul_proyek: "Kipas", catatan_pelatih: "Teliti",
                 sertifikat_nomor: "EKC-2026-S1-SMA-004" };
  assert.deepEqual(gabungImpor(null, baru), baru);                     // siswa baru: semua kolom
  const lama = { ...baru, nama_lengkap: "Budi Santoso", judul_proyek: "", catatan_pelatih: "Dikoreksi guru",
                 poin: 10, slug: "budi-lama", tentang: "isian siswa" };
  const g = gabungImpor(lama, { ...baru, slug: "budi" });
  assert.equal(g.poin, 40);                       // selalu ikut spreadsheet
  assert.equal(g.nama_lengkap, undefined);        // tidak ditimpa (lama terisi)
  assert.equal(g.catatan_pelatih, undefined);
  assert.equal(g.judul_proyek, "Kipas");          // lama kosong -> diisi
  assert.equal(g.slug, undefined);                // URL lama tetap
  assert.equal(g.tentang, undefined);             // bagian siswa tidak disentuh
});
test("cek jpeg", () => {
  assert.equal(cekJpeg(Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2])), null);
  assert.match(cekJpeg(Buffer.from("\x89PNG....")), /JPEG/);
  assert.match(cekJpeg(Buffer.alloc(600 * 1024 + 1, 0xff)), /600 KB/);
  assert.match(cekJpeg(Buffer.alloc(0)), /JPEG/);
});
```

- [ ] **Step 2: Jalankan dan pastikan gagal.** `cd backend && node --test` → FAIL (fungsi belum ada).
- [ ] **Step 3: Implementasikan kelima fungsi** di `backend/portofolio-inti.js`, memakai tabel batas panjang dari Global
  Constraints. Panjang dihitung dengan `[...s].length`. `gabungImpor` untuk `lama` yang ada: selalu kirim
  `jenjang, device_id, poin, lencana, peringkat, sertifikat_nomor`; kirim `nama_lengkap, judul_proyek, catatan_pelatih`
  hanya kalau nilai lamanya kosong; jangan pernah kirim `slug` atau bagian siswa.
- [ ] **Step 4: Jalankan dan pastikan lolos.** `cd backend && node --test` → PASS.
- [ ] **Step 5: Commit.** `git commit -am "feat(portofolio): validasi, aturan akses, data publik, aturan impor"`

### Task 3: Store memori + route login, profil publik, "saya", staf (tanpa foto & impor)

**Files:**
- Create: `backend/portofolio.js`, `backend/portofolio-memori.js`
- Modify: `backend/server.js` (pasang route, `express.json({ limit: "1mb" })`, tambah `Authorization` di `Access-Control-Allow-Headers`)
- Test: `backend/portofolio.test.js`

**Interfaces:**
- Consumes: semua fungsi Task 1–2.
- Produces:
  - Kontrak Store (dipenuhi `buatStoreMemori` di sini dan `buatStoreSupabase` di Task 5), semua `async`:
    `ambil(id_siswa) → baris|null`, `ambilSlug(slug) → baris|null`, `daftar(jenjang|null) → baris[]` (urut
    `nama_lengkap`), `tambah(baris) → baris`, `ubah(id_siswa, patch) → baris` (mengisi `updated_at`),
    `slugDipakai(slug) → boolean`, `simpanFoto(id_siswa, buf) → path`, `hapusFoto(path) → void`, `urlFoto(path) → string|null` (sinkron).
  - `buatStoreMemori(baris = []): Store` di `backend/portofolio-memori.js`. Foto disimpan di `Map`; `urlFoto` → `"memori://" + path`.
  - `pasangPortofolio(app, { store, env, pembatas = buatPembatas() })` di `backend/portofolio.js`.
    `env = { PORTOFOLIO_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD }`.
  - Route (semua JSON `{ok:true,...}` / `{ok:false,error}`):
    - `GET  /api/portofolio/profil/:slug` → `{profil}` / 404
    - `POST /api/portofolio/masuk/siswa {id, kode}` → `{token}` / 401 / 429. `id` dan `kode` di-trim dan dijadikan huruf besar.
    - `POST /api/portofolio/masuk/staf {email, password}` → `{token}` / 401 / 429. Phase 1: hanya admin dari env (email tidak peka huruf besar/kecil).
    - `GET  /api/portofolio/saya` (token siswa) → `{siswa}` = `dataPublik` + `id_siswa`
    - `POST /api/portofolio/saya {…}` → `{siswa}` / 400 (pesan dari `saringPerubahan`)
    - `GET  /api/portofolio/staf/siswa?jenjang=smp|sma` (token admin/guru) → `{siswa: [...]}` (dataPublik + `id_siswa`)
    - `POST /api/portofolio/staf/siswa/:id {…}` → `{siswa}` / 403 kalau `!bolehKelola`
    - `POST /api/portofolio/staf/siswa/:id/reset-kode` → `{kode}`. Menyimpan hash baru dan `kode_versi + 1`.
  - Token siswa `{peran:"siswa", id, jenjang, v}`, token admin `{peran:"admin", email}`.

- [ ] **Step 1: Tulis tes yang gagal.** Helper `jalankan(baris, env)` membuat `express()` + `express.json()` +
  `pasangPortofolio(app, {store: buatStoreMemori(baris), env})`, lalu `app.listen(0)`. Hasilnya `{url, store, tutup}`.
  Helper HTTP (path relatif terhadap `/api/portofolio`): `get(path, token)` / `post(path, body, token)` mengembalikan JSON
  dan meng-assert status 200; `getRaw` / `postRaw` mengembalikan `Response`. Tiap `test` memakai server baru, supaya
  pembatas login tidak saling memengaruhi.
  Siswa contoh: `{id_siswa:"SMA-004", jenjang:"sma", slug:"budi", nama_lengkap:"Budi", kode_hash: hashRahasia("K7P2QX"), kode_versi:1}`
  dan `{id_siswa:"SMP-022", jenjang:"smp", slug:"rafif", ...}`. ENV = `{PORTOFOLIO_SECRET:"s", ADMIN_EMAIL:"admin@x.id", ADMIN_PASSWORD:"pw"}`.

```js
test("tanpa secret -> 503", async () => {           // fitur baru tidak boleh menjatuhkan backend
  const s = await jalankan(SISWA, {});
  assert.equal((await fetch(s.url + "/api/portofolio/profil/budi")).status, 503);
  s.tutup();
});
test("profil publik", async () => {
  const r = await (await fetch(url + "/api/portofolio/profil/budi")).json();
  assert.equal(r.profil.nama_lengkap, "Budi"); assert.ok(!("kode_hash" in r.profil));
  assert.equal((await fetch(url + "/api/portofolio/profil/tidak-ada")).status, 404);
});
test("login siswa, ubah diri sendiri, tidak bisa data resmi", async () => {
  const { token } = await post("/masuk/siswa", { id: " sma-004 ", kode: "k7p2qx" });
  assert.ok(token);
  assert.equal((await post("/saya", { tentang: "Suka robot" }, token)).siswa.tentang, "Suka robot");
  assert.equal((await postRaw("/saya", { poin: 999 }, token)).status, 400);
  assert.equal((await postRaw("/staf/siswa/SMP-022", { tentang: "x" }, token)).status, 403);
  assert.equal((await postRaw("/saya", {}, "token-palsu")).status, 401);
});
test("kode salah dibatasi", async () => {
  for (let i = 0; i < 10; i++) assert.equal((await postRaw("/masuk/siswa", { id: "SMA-004", kode: "XXXXXX" })).status, 401);
  assert.equal((await postRaw("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).status, 429); // terkunci walau benar
});
test("admin: daftar, edit kelas, reset kode membatalkan token lama", async () => {
  const siswa = (await post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  const admin = (await post("/masuk/staf", { email: "ADMIN@x.id", password: "pw" })).token;
  assert.equal((await postRaw("/masuk/staf", { email: "admin@x.id", password: "salah" })).status, 401);
  assert.equal((await get("/staf/siswa?jenjang=sma", admin)).siswa.length, 1);
  assert.equal((await post("/staf/siswa/SMA-004", { kelas: "XI-2" }, admin)).siswa.kelas, "XI-2");
  const { kode } = await post("/staf/siswa/SMA-004/reset-kode", {}, admin);
  assert.match(kode, /^[A-Z2-9]{6}$/);
  assert.equal((await getRaw("/saya", siswa)).status, 401);                  // token lama mati
  assert.ok((await post("/masuk/siswa", { id: "SMA-004", kode })).token);    // kode baru jalan
});
```

- [ ] **Step 2: Jalankan dan pastikan gagal.** `cd backend && node --test` → FAIL.
- [ ] **Step 3: Implementasikan `buatStoreMemori` dan `pasangPortofolio`.** Middleware `butuhToken(peranDiizinkan)`
  membaca `Authorization`, memanggil `bacaToken`, dan untuk siswa membandingkan `v` dengan `kode_versi` dari store. Error store
  ditangkap → 500 `{ok:false,error:"server bermasalah"}` + `console.error`. Di `server.js`: `require("./portofolio")`,
  lalu panggil `pasangPortofolio(app, { store: buatStoreSupabase(supabase, process.env.PORTOFOLIO_BUCKET || "portofolio-foto"), env: process.env })`.
  `buatStoreSupabase` boleh berupa stub yang melempar error sampai Task 5.
- [ ] **Step 4: Jalankan dan pastikan lolos.** `cd backend && node --test` → PASS. Lalu `node -e "require('./server.js')"` dengan
  env kosong → server start tanpa crash. `curl localhost:3334/health` → ok.
- [ ] **Step 5: Commit.** `git add backend && git commit -m "feat(portofolio): route login, profil publik, saya, staf"`

### Task 4: Endpoint impor (aturan timpa + slug unik + kode awal)

**Files:**
- Modify: `backend/portofolio.js`
- Test: `backend/portofolio.test.js`

**Interfaces:**
- Consumes: `gabungImpor`, `buatKode`, `hashRahasia`, Store.
- Produces: `POST /api/portofolio/admin/impor {siswa: ItemImpor[]}` (token admin saja) →
  `{dibuat: [{id_siswa, nama_lengkap, jenjang, device_id, slug, kode}], diperbarui: number}`.
  `ItemImpor = {id_siswa, jenjang, device_id, slug, nama_lengkap, poin, lencana, peringkat, judul_proyek, catatan_pelatih, sertifikat_nomor}`.
  Item ditolak seluruhnya (400, tidak ada yang ditulis) kalau ada `id_siswa` yang tidak cocok `/^SM[PA]-\d{3}$/`,
  `jenjang` bukan `smp|sma`, atau `nama_lengkap`/`slug` kosong.

- [ ] **Step 1: Tulis tes yang gagal:**

```js
test("impor: buat baru dengan kode, ulang tidak menimpa koreksi, slug unik", async () => {
  const admin = (await post("/masuk/staf", { email: "admin@x.id", password: "pw" })).token;
  const item = (id, slug, extra = {}) => ({ id_siswa: id, jenjang: "sma", device_id: "sma-05", slug, nama_lengkap: "Nama " + id,
    poin: 10, lencana: [], peringkat: null, judul_proyek: "", catatan_pelatih: "Awal", sertifikat_nomor: "EKC-2026-S1-" + id, ...extra });
  const r1 = await post("/admin/impor", { siswa: [item("SMA-010", "budi"), item("SMA-011", "zaidan")] }, admin);
  // "budi" sudah dipakai SMA-004 -> SMA-010 dapat "budi-2"
  assert.deepEqual(r1.dibuat.map((d) => d.slug), ["budi-2", "zaidan"]);
  assert.ok(r1.dibuat.every((d) => /^[A-Z2-9]{6}$/.test(d.kode)));
  assert.ok((await post("/masuk/siswa", { id: "SMA-010", kode: r1.dibuat[0].kode })).token);
  await post("/staf/siswa/SMA-010", { catatan_pelatih: "Dikoreksi" }, admin);
  const r2 = await post("/admin/impor", { siswa: [item("SMA-010", "budi", { poin: 55 })] }, admin);
  assert.deepEqual([r2.dibuat.length, r2.diperbarui], [0, 1]);
  const p = (await get("/profil/budi-2")).profil;
  assert.deepEqual([p.poin, p.catatan_pelatih], [55, "Dikoreksi"]);
  assert.equal((await postRaw("/admin/impor", { siswa: [item("salah", "x")] }, admin)).status, 400);
  const siswa = (await post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  assert.equal((await postRaw("/admin/impor", { siswa: [] }, siswa)).status, 403);
});
```

- [ ] **Step 2: Jalankan dan pastikan gagal.** `cd backend && node --test` → FAIL (404 route).
- [ ] **Step 3: Implementasikan route.** Validasi semua item dulu, baru tulis. Untuk item baru: slug dicek dengan
  `slugDipakai`. Kalau sudah dipakai, coba `<slug>-2`, `<slug>-3`, dst. Kode = `buatKode()`, simpan `kode_hash`
  dan `kode_versi: 1`. Kode asli hanya ada di balasan, tidak pernah dicatat di log.
- [ ] **Step 4: Jalankan dan pastikan lolos.** `cd backend && node --test` → PASS.
- [ ] **Step 5: Commit.** `git commit -am "feat(portofolio): endpoint impor dari spreadsheet"`

### Task 5: Foto + store Supabase + skema SQL + checklist serah-terima

**Files:**
- Modify: `backend/portofolio.js` (route foto + `buatStoreSupabase`), `backend/supabase_schema.sql`, `backend/README.md`, `backend/.env.example`
- Create: `backend/portofolio-dev.js`
- Test: `backend/portofolio.test.js`

**Interfaces:**
- Produces:
  - `POST /api/portofolio/saya/foto` dan `POST /api/portofolio/staf/siswa/:id/foto`, body mentah
    `Content-Type: image/jpeg` (`express.raw({ type: "image/jpeg", limit: "700kb" })`) → `{foto_url}`. Urutan:
    `cekJpeg` → `simpanFoto` (path `<id_siswa>/<16 hex acak>.jpg`) → `ubah(foto_path)` → baru `hapusFoto(lama)`.
    Kalau gagal, foto lama tetap ada.
  - `buatStoreSupabase(supabase, bucket): Store`. Tabel `portofolio_siswa` (skema klien sudah
    `ekskul_coding_asy_syahid`); foto lewat `supabase.storage.from(bucket)`; `urlFoto` = `getPublicUrl(path).data.publicUrl`.
  - Tabel SQL `ekskul_coding_asy_syahid.portofolio_siswa`: `id_siswa text primary key`,
    `jenjang text not null check (jenjang in ('smp','sma'))`, `slug text unique not null`, `device_id text`,
    `nama_lengkap text not null`, `kelas text not null default ''`, `panggilan`, `tentang`, `cita_cita`,
    `cerita_tersulit`, `cerita_terseru`, `cerita_rencana`, `judul_proyek`, `catatan_pelatih` (semua `text not null default ''`),
    `link_karya jsonb not null default '[]'`, `lencana jsonb not null default '[]'`, `poin integer`, `peringkat integer`,
    `foto_path text`, `sertifikat_nomor text`, `kode_hash text`, `kode_versi integer not null default 1`,
    `updated_at timestamptz not null default now()`, `updated_by text`. RLS dimatikan + GRANT, mengikuti pola file itu.
  - `node backend/portofolio-dev.js` → server lokal port 3335 dengan `buatStoreMemori` berisi 2 siswa FIKTIF
    (`SMA-901` "Siswa Contoh" slug `siswa-contoh`, `SMP-902` "Siswa Contoh Dua" slug `siswa-contoh-dua`). Mencetak
    kode akses keduanya, admin `admin@contoh.id` / `admin`. `PORTOFOLIO_SECRET` diisi nilai acak saat start.
    Dipakai untuk mencoba frontend tanpa Supabase.

- [ ] **Step 1: Tulis tes yang gagal:**

```js
test("foto: tolak non-JPEG, ganti foto menghapus yang lama", async () => {
  const t = (await post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  const kirim = (buf) => fetch(url + "/api/portofolio/saya/foto",
    { method: "POST", headers: { "Content-Type": "image/jpeg", Authorization: "Bearer " + t }, body: buf });
  assert.equal((await kirim(Buffer.from("\x89PNG...."))).status, 400);
  const a = await (await kirim(Buffer.from([0xff, 0xd8, 0xff, 1]))).json();
  const b = await (await kirim(Buffer.from([0xff, 0xd8, 0xff, 2]))).json();
  assert.match(a.foto_url, /^memori:\/\/SMA-004\/[0-9a-f]{16}\.jpg$/);
  assert.notEqual(a.foto_url, b.foto_url);
  assert.equal(store.adaFoto(a.foto_url.slice(9)), false);   // foto lama dihapus
  assert.equal(store.adaFoto(b.foto_url.slice(9)), true);
});
```
  (`buatStoreMemori` menambah helper tes `adaFoto(path): boolean`.)
- [ ] **Step 2: Jalankan dan pastikan gagal.** `cd backend && node --test` → FAIL.
- [ ] **Step 3: Implementasikan route foto + `buatStoreSupabase` + `portofolio-dev.js`.** Tambahkan blok SQL di akhir
  `supabase_schema.sql`. Di `.env.example` tambahkan `PORTOFOLIO_SECRET=`, `ADMIN_EMAIL=`, `ADMIN_PASSWORD=`,
  `PORTOFOLIO_BUCKET=portofolio-foto`. Di `backend/README.md` tambahkan bagian **"Portofolio: serah-terima pemilik"**
  berisi checklist Task 9 Step 1–5, persis urutannya.
- [ ] **Step 4: Jalankan dan pastikan lolos.** `cd backend && node --test` → PASS. `node backend/portofolio-dev.js` →
  mencetak 2 kode, dan `curl localhost:3335/api/portofolio/profil/siswa-contoh` → `ok:true`.
- [ ] **Step 5: Commit.** `git add backend && git commit -m "feat(portofolio): upload foto, store Supabase, skema, checklist"`

### Task 6: Perintah `impor` di `tools/portofolio.py`

**Files:**
- Modify: `tools/portofolio.py` (fungsi baru + CLI + tambahan `cek()` + docstring modul)

**Interfaces:**
- Consumes: `baca_penilaian`, `kelompok_siswa`, `susun`, `buat_slug` (sudah ada); endpoint Task 3–4.
- Produces:
  - `payload_impor(penilaian: dict, peta: dict | None = None) -> list[dict]`. Satu `ItemImpor` per siswa tidak-pindah
    yang ada di `peta`. Slug unik **global** (satu set `terpakai` untuk semua siswa, urut Device ID lalu urutan di
    `kelompok.json`). `lencana` = `susun(...)["pertemuan"]`. `poin`, `peringkat`, `sertifikat_nomor` diambil dari
    `susun(...)`. `jenjang` = 3 huruf awal Device ID. `judul_proyek` = `proyek`, `catatan_pelatih` = `kekuatan`.
  - `impor(berkas: list[str], api: str, email: str, sandi: str) -> list[dict]`. Login `masuk/staf`, POST `admin/impor`
    (urllib), menulis `dist/kode-akses.csv` (kolom: `ID Siswa, Nama, Jenjang, Kelompok, Kode, Alamat profil`, dengan
    alamat `https://ekskulcoding.inspiralabs.id/profil/?s=<slug>`), lalu mencetak tabel ringkas. Mengembalikan `dibuat`.
  - CLI: `py tools/portofolio.py impor penilaian-smp.xlsx penilaian-sma.xlsx [--api URL]`. Default API
    `https://api-ekskulcoding.inspiralabs.id`. Email/sandi dari env `PORTOFOLIO_ADMIN_EMAIL`/`PORTOFOLIO_ADMIN_PASSWORD`;
    kalau kosong, ditanya lewat `input()` / `getpass`.

- [ ] **Step 1: Tulis tes yang gagal** di `cek()`. `penilaian_uji` = hasil `baca_penilaian` dari xlsx sintetis yang sudah
  dibuat di `cek()` (fixture `wb` berisi SMP-022, SMP-017, SMP-099 Pindah). `susun` dipanggil dengan `foto=[]`.

```python
items = payload_impor(penilaian_uji, {"SMP-022": "smp-07", "SMP-017": "smp-07", "SMP-099": "smp-07"})
assert [i["id_siswa"] for i in items] == ["SMP-022", "SMP-017"]          # yang pindah dilewati
assert {i["slug"] for i in items} == {"rafif", "qassim"}
assert items[0]["poin"] == 39 and items[0]["peringkat"] == 2 and items[0]["jenjang"] == "smp"
assert items[0]["sertifikat_nomor"] == "EKC-2026-S1-SMP-022" and items[0]["judul_proyek"] == "Pemantau Suhu Kelas"
assert items[1]["peringkat"] is None                                        # peringkat 9 -> tidak tampil
teks = json.dumps(items)
for rahasia in ("0811111", "Bapak Rahasia", "Kurang fokus", "internal gradebook", "rahasia internal"):
    assert rahasia not in teks, rahasia
dua = payload_impor({**penilaian_uji, "SMP-050": {**penilaian_uji["SMP-022"], "id": "SMP-050"}},
                    {"SMP-022": "smp-07", "SMP-050": "smp-08"})
assert sorted(i["slug"] for i in dua) == ["rafif", "rafif-ahnaf"]           # unik lintas kelompok
```

- [ ] **Step 2: Jalankan dan pastikan gagal.** `py tools/portofolio.py cek` → `NameError: payload_impor`.
- [ ] **Step 3: Implementasikan `payload_impor`, `impor`, dan cabang CLI `impor`.**
- [ ] **Step 4: Jalankan dan pastikan lolos.** `py tools/portofolio.py cek` → `cek OK`. Lalu dengan `node backend/portofolio-dev.js`
  hidup: `PORTOFOLIO_ADMIN_EMAIL=admin@contoh.id PORTOFOLIO_ADMIN_PASSWORD=admin py tools/portofolio.py impor portofolio/contoh/penilaian-contoh.xlsx --api http://localhost:3335`.
  Kalau contoh xlsx tidak ada, cukup uji lewat `cek()`.
- [ ] **Step 5: Commit.** `git commit -am "feat(portofolio): perintah impor ke backend + daftar kode akses"`

### Task 7: Halaman publik `profil/`

**Files:**
- Create: `profil/index.html`, `profil/profil.js`, `profil/profil.css` (salin dan sesuaikan dari `portofolio/templat/portofolio.css`; folder `portofolio/` tidak ikut ke Vercel)
- Modify: `vercel.json` (tambah `headers`: `X-Robots-Tag: noindex` untuk `/profil/(.*)` dan `/dashboard/(.*)`)

**Interfaces:**
- Consumes: `GET /api/portofolio/profil/:slug`.
- Produces: URL publik `https://ekskulcoding.inspiralabs.id/profil/?s=<slug>`. Konstanta
  `API_BASE = localStorage.getItem("apiBase") || "https://api-ekskulcoding.inspiralabs.id"` (sama di Task 8).

- [ ] **Step 1: Bangun halaman** dengan urutan seperti templat lama: sampul (foto, nama lengkap, panggilan, kelas,
  jenjang, poin, jumlah lencana, peringkat kalau ada), "Tentang aku" + cita-cita, proyek akhir (judul + 3 cerita), garis
  waktu pertemuan dari `lencana` (judul, tanggal, challenge yang lulus), catatan pelatih, link karya
  (`rel="noopener nofollow"`), dan tombol ke dashboard kelompok `https://<device_id>.inspiralabs.id/`.
  Bagian yang kosong disembunyikan. Slug tidak ada atau 404 → pesan "Halaman tidak ditemukan".
- [ ] **Step 2: Verifikasi.** `node backend/portofolio-dev.js` + `py -m http.server 8092`, lalu di console browser:
  `localStorage.apiBase="http://localhost:3335"`. Buka `http://localhost:8092/profil/?s=siswa-contoh` → data tampil di lebar 375 px
  dan 1280 px. `?s=tidak-ada` → pesan tidak ditemukan. Isi `tentang` dengan `<img src=x onerror=alert(1)>` lewat dashboard
  atau curl → tampil sebagai teks.
- [ ] **Step 3: Commit.** `git add profil vercel.json && git commit -m "feat(portofolio): halaman profil publik"`

### Task 8: Dashboard `dashboard/`

**Files:**
- Create: `dashboard/index.html`, `dashboard/dashboard.js`, `dashboard/dashboard.css`

**Interfaces:**
- Consumes: semua route Task 3–5. Token disimpan di `localStorage.tokenPortofolio`.
- Produces: `kecilkanFoto(file: File) → Promise<Blob>` (JPEG, sisi terpanjang ≤ 1600 px, kualitas mulai 0.85 dan
  turun 0.1 sampai ≤ 600 KB atau 0.45. Kalau masih terlalu besar, lempar error "Foto terlalu besar, coba foto lain").

- [ ] **Step 1: Layar masuk** dengan dua tab: **Siswa** (ID Siswa + kode) dan **Guru/Admin** (email + password).
  Pesan untuk 401 ("ID atau kode salah"), 429 ("Terlalu banyak percobaan, tunggu 15 menit"), dan 503.
- [ ] **Step 2: Layar siswa**: form isian milik siswa dengan penghitung karakter sesuai batas, 3 kotak link karya, foto
  (pratinjau → `kecilkanFoto` → POST), tombol Simpan (menampilkan pesan error 400 dari server apa adanya), link
  "Lihat halamanku" → `/profil/?s=<slug>`, dan tombol Keluar. Data resmi (nama, kelas, poin) tampil sebagai teks yang tidak bisa diedit.
- [ ] **Step 3: Layar admin**: pilih jenjang SMP/SMA, cari nama, klik siswa → form yang sama + data resmi yang boleh
  diedit + foto + tombol **Reset kode** (konfirmasi, lalu kode baru tampil besar sekali untuk ditulis di kertas).
- [ ] **Step 4: Semua 401** → hapus token, kembali ke layar masuk dengan pesan "Sesi berakhir, masuk lagi".
- [ ] **Step 5: Verifikasi** dengan `portofolio-dev.js` seperti Task 7: masuk sebagai siswa → ubah tentang + unggah foto PNG
  dari HP (berubah jadi JPEG) → halaman profil berubah. Masuk sebagai admin → reset kode siswa itu → tab siswa yang masih
  terbuka kembali ke layar masuk setelah aksi berikutnya. Cek di lebar 375 px.
- [ ] **Step 6: Commit.** `git add dashboard && git commit -m "feat(portofolio): dashboard siswa & admin"`

### Task 9: Setup produksi & go-live (pemilik, dibantu Claude)

**Files:** tidak ada perubahan kode. Langkah ini juga ditulis di `backend/README.md` (Task 5).

- [ ] **Step 1: Cek jenis `SUPABASE_KEY`** di server: role harus `service_role` (atau `sb_secret_...`). Kalau masih
  `anon`: Supabase → Project Settings → API Keys → salin secret/service_role key → ganti `SUPABASE_KEY` di
  `/srv/apps/api-ekskulcoding/.env`.
- [ ] **Step 2: Supabase → SQL Editor** → jalankan blok `portofolio_siswa` dari `backend/supabase_schema.sql`.
- [ ] **Step 3: Supabase → Storage** → New bucket `portofolio-foto`, **Public bucket: ON**.
- [ ] **Step 4: Isi env di server**: `PORTOFOLIO_SECRET` (32+ karakter acak, mis. `openssl rand -hex 32`), `ADMIN_EMAIL`,
  `ADMIN_PASSWORD`, `PORTOFOLIO_BUCKET=portofolio-foto`.
- [ ] **Step 5: Merge PR** `feat/portofolio-dashboard` → deploy otomatis. Cek: `curl https://api-ekskulcoding.inspiralabs.id/health`
  → ok; `curl .../api/portofolio/profil/x` → 404 (bukan 503); sensor kelas tetap masuk (`/api/readings/sma-01?limit=1`).
- [ ] **Step 6: Impor**: unduh spreadsheet penilaian SMP dan SMA sebagai .xlsx →
  `py tools/portofolio.py impor penilaian-smp.xlsx penilaian-sma.xlsx` → cetak `dist/kode-akses.csv` jadi kertas lipat per siswa.
- [ ] **Step 7: Uji ujung ke ujung di produksi** dengan satu siswa: masuk lewat HP → unggah foto → profil publik tampil →
  admin mengisi kelas.
