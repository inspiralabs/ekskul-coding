// ============================================================
// Portofolio siswa -- endpoint /api/portofolio/* + store Supabase.
// Spec: docs/superpowers/specs/2026-11-07-portofolio-siswa-dashboard-design.md
// Tanpa PORTOFOLIO_SECRET semua endpoint di sini membalas 503; endpoint sensor/kipas tidak terpengaruh.
// ============================================================
const express = require("express");
const crypto = require("crypto");
const {
  buatKode, hashRahasia, cocokRahasia, buatToken, bacaToken, buatPembatas,
  saringPerubahan, bolehKelola, dataPublik, gabungImpor, cekJpeg,
} = require("./portofolio-inti");

function pasangPortofolio(app, { store, env, pembatas = buatPembatas() }) {
  const r = express.Router();
  const secret = env.PORTOFOLIO_SECRET;
  const gagal = (res, status, error) => res.status(status).json({ ok: false, error });
  const untukStaf = (b) => ({ ...dataPublik(b, store.urlFoto), id_siswa: b.id_siswa });

  r.use((req, res, next) => (secret ? next() : gagal(res, 503, "portofolio belum diaktifkan")));

  // Error dari store (Supabase) jangan sampai menjatuhkan proses.
  const aman = (fn) => (req, res, next) => fn(req, res, next).catch((e) => {
    console.error("[portofolio]", e);
    gagal(res, 500, "server bermasalah");
  });

  // Token -> req.akun. Token siswa ditolak kalau kodenya sudah direset (kode_versi berubah).
  const butuh = (...peran) => aman(async (req, res, next) => {
    const isi = bacaToken((req.header("Authorization") || "").replace(/^Bearer /, ""), secret);
    if (!isi) return gagal(res, 401, "sesi berakhir, masuk lagi");
    if (isi.peran === "siswa") {
      const b = await store.ambil(isi.id);
      if (!b || b.kode_versi !== isi.v) return gagal(res, 401, "sesi berakhir, masuk lagi");
      req.siswaSaya = b;
    }
    if (!peran.includes(isi.peran)) return gagal(res, 403, "tidak punya akses");
    req.akun = isi;
    next();
  });

  // ---------------------------------------------------------------- publik
  r.get("/profil/:slug", aman(async (req, res) => {
    const b = await store.ambilSlug(req.params.slug);
    if (!b) return gagal(res, 404, "halaman tidak ditemukan");
    res.json({ ok: true, profil: dataPublik(b, store.urlFoto) });
  }));

  // ---------------------------------------------------------------- masuk
  r.post("/masuk/siswa", aman(async (req, res) => {
    const id = String(req.body?.id || "").trim().toUpperCase();
    const kode = String(req.body?.kode || "").trim().toUpperCase();
    const kunci = "siswa:" + id;
    if (pembatas.terkunci(kunci)) return gagal(res, 429, "terlalu banyak percobaan, tunggu 15 menit");
    const b = id && (await store.ambil(id));
    if (!b || !cocokRahasia(kode, b.kode_hash)) {
      pembatas.gagal(kunci);
      return gagal(res, 401, "ID atau kode salah");
    }
    pembatas.berhasil(kunci);
    res.json({ ok: true, token: buatToken({ peran: "siswa", id: b.id_siswa, jenjang: b.jenjang, v: b.kode_versi }, secret) });
  }));

  // Tahap 1: hanya admin dari env. Akun guru menyusul di Tahap 2.
  r.post("/masuk/staf", aman(async (req, res) => {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const kunci = "staf:" + email;
    if (pembatas.terkunci(kunci)) return gagal(res, 429, "terlalu banyak percobaan, tunggu 15 menit");
    const adminEmail = String(env.ADMIN_EMAIL || "").trim().toLowerCase();
    const sama = (a, b) => {
      const x = crypto.createHash("sha256").update(String(a)).digest();
      const y = crypto.createHash("sha256").update(String(b)).digest();
      return crypto.timingSafeEqual(x, y);
    };
    if (!adminEmail || !env.ADMIN_PASSWORD || email !== adminEmail || !sama(req.body?.password ?? "", env.ADMIN_PASSWORD)) {
      pembatas.gagal(kunci);
      return gagal(res, 401, "email atau password salah");
    }
    pembatas.berhasil(kunci);
    // 12 jam: login admin yang lupa keluar di komputer sekolah tidak berlaku sebulan.
    res.json({ ok: true, token: buatToken({ peran: "admin", email }, secret, 12 * 3600) });
  }));

  // ---------------------------------------------------------------- siswa: halaman sendiri
  r.get("/saya", butuh("siswa"), (req, res) => res.json({ ok: true, siswa: untukStaf(req.siswaSaya) }));

  r.post("/saya", butuh("siswa"), aman(async (req, res) => {
    const s = saringPerubahan("siswa", req.body);
    if (s.error) return gagal(res, 400, s.error);
    const b = await store.ubah(req.siswaSaya.id_siswa, { ...s.patch, updated_by: "siswa:" + req.siswaSaya.id_siswa });
    res.json({ ok: true, siswa: untukStaf(b) });
  }));

  // ---------------------------------------------------------------- staf (admin; guru di Tahap 2)
  const siswaKelolaan = aman(async (req, res, next) => {
    const b = await store.ambil(String(req.params.id).toUpperCase());
    if (!b) return gagal(res, 404, "siswa tidak ditemukan");
    if (!bolehKelola(req.akun, b)) return gagal(res, 403, "tidak punya akses ke siswa ini");
    req.siswa = b;
    next();
  });

  r.get("/staf/siswa", butuh("admin", "guru"), aman(async (req, res) => {
    const jenjang = req.akun.peran === "guru" ? req.akun.jenjang : (["smp", "sma"].includes(req.query.jenjang) ? req.query.jenjang : null);
    res.json({ ok: true, siswa: (await store.daftar(jenjang)).map(untukStaf) });
  }));

  r.post("/staf/siswa/:id", butuh("admin", "guru"), siswaKelolaan, aman(async (req, res) => {
    const s = saringPerubahan(req.akun.peran, req.body);
    if (s.error) return gagal(res, 400, s.error);
    const b = await store.ubah(req.siswa.id_siswa, { ...s.patch, updated_by: req.akun.email });
    res.json({ ok: true, siswa: untukStaf(b) });
  }));

  r.post("/staf/siswa/:id/reset-kode", butuh("admin", "guru"), siswaKelolaan, aman(async (req, res) => {
    const kode = buatKode();
    await store.ubah(req.siswa.id_siswa, { kode_hash: hashRahasia(kode), kode_versi: (req.siswa.kode_versi || 1) + 1, updated_by: req.akun.email });
    res.json({ ok: true, kode });
  }));

  // ---------------------------------------------------------------- admin: impor dari spreadsheet (tools/portofolio.py impor)
  // Semua item divalidasi dulu; kalau ada satu yang salah, tidak ada yang ditulis.
  r.post("/admin/impor", butuh("admin"), aman(async (req, res) => {
    const daftar = req.body?.siswa;
    if (!Array.isArray(daftar)) return gagal(res, 400, "siswa harus berupa daftar");
    for (const it of daftar) {
      if (!/^SM[PA]-\d{3}$/.test(it?.id_siswa || "")) return gagal(res, 400, `id_siswa tidak valid: ${it?.id_siswa}`);
      if (!["smp", "sma"].includes(it.jenjang)) return gagal(res, 400, `${it.id_siswa}: jenjang harus smp/sma`);
      if (!String(it.nama_lengkap || "").trim() || !String(it.slug || "").trim()) return gagal(res, 400, `${it.id_siswa}: nama_lengkap/slug kosong`);
    }
    const dibuat = [];
    let diperbarui = 0;
    try {
      for (const it of daftar) {
        const lama = await store.ambil(it.id_siswa);
        if (lama) {
          await store.ubah(it.id_siswa, { ...gabungImpor(lama, it), updated_by: "impor" });
          diperbarui++;
          continue;
        }
        let slug = it.slug;
        for (let i = 2; await store.slugDipakai(slug); i++) slug = `${it.slug}-${i}`;
        const kode = buatKode();
        const b = await store.tambah({ ...gabungImpor(null, it), slug, kode_hash: hashRahasia(kode), kode_versi: 1, updated_by: "impor" });
        dibuat.push({ id_siswa: b.id_siswa, nama_lengkap: b.nama_lengkap, jenjang: b.jenjang, device_id: b.device_id, slug, kode });
      }
    } catch (e) {
      // Tidak ada transaksi: siswa yang sudah dibuat tetap ada. Kodenya hanya ada di balasan ini, jadi tetap dikirim.
      console.error("[portofolio] impor terhenti", e);
      return res.status(500).json({ ok: false, error: "impor terhenti di tengah, jalankan ulang", dibuat, diperbarui });
    }
    res.json({ ok: true, dibuat, diperbarui });
  }));

  // ---------------------------------------------------------------- foto (body mentah image/jpeg; dikecilkan di browser)
  // Urutan: cek -> simpan baru -> catat di tabel -> baru hapus yang lama. Gagal di tengah = foto lama tetap.
  const fotoMentah = express.raw({ type: "image/jpeg", limit: "700kb" });
  async function gantiFoto(res, siswa, buf, oleh) {
    const salah = cekJpeg(buf);
    if (salah) return gagal(res, 400, salah);
    const path = `${siswa.id_siswa}/${crypto.randomBytes(8).toString("hex")}.jpg`;
    await store.simpanFoto(path, buf);
    await store.ubah(siswa.id_siswa, { foto_path: path, updated_by: oleh });
    if (siswa.foto_path) await store.hapusFoto(siswa.foto_path).catch((e) => console.error("[portofolio] hapus foto lama", e));
    res.json({ ok: true, foto_url: store.urlFoto(path) });
  }
  r.post("/saya/foto", butuh("siswa"), fotoMentah,
    aman((req, res) => gantiFoto(res, req.siswaSaya, req.body, "siswa:" + req.siswaSaya.id_siswa)));
  r.post("/staf/siswa/:id/foto", butuh("admin", "guru"), siswaKelolaan, fotoMentah,
    aman((req, res) => gantiFoto(res, req.siswa, req.body, req.akun.email)));

  app.use("/api/portofolio", r);
}

// Store produksi: tabel portofolio_siswa (skema klien = ekskul_coding_asy_syahid) + Supabase Storage.
// Upload Storage butuh SUPABASE_KEY berjenis service_role (lihat backend/README.md).
function buatStoreSupabase(supabase, bucket) {
  const tabel = () => supabase.from("portofolio_siswa");
  const hasil = async (q) => {
    const { data, error } = await q;
    if (error) throw error;
    return data;
  };
  const foto = () => supabase.storage.from(bucket);
  return {
    ambil: (id) => hasil(tabel().select("*").eq("id_siswa", id).maybeSingle()),
    ambilSlug: (slug) => hasil(tabel().select("*").eq("slug", slug).maybeSingle()),
    daftar: (jenjang) => {
      let q = tabel().select("*");
      if (jenjang) q = q.eq("jenjang", jenjang);
      return hasil(q.order("nama_lengkap"));
    },
    tambah: (b) => hasil(tabel().insert(b).select().single()),
    ubah: (id, patch) => hasil(tabel().update({ ...patch, updated_at: new Date().toISOString() }).eq("id_siswa", id).select().single()),
    slugDipakai: async (slug) => !!(await hasil(tabel().select("id_siswa").eq("slug", slug).maybeSingle())),
    simpanFoto: async (path, buf) => {
      const { error } = await foto().upload(path, buf, { contentType: "image/jpeg", upsert: false });
      if (error) throw error;
    },
    hapusFoto: async (path) => {
      const { error } = await foto().remove([path]);
      if (error) throw error;
    },
    urlFoto: (path) => foto().getPublicUrl(path).data.publicUrl,
  };
}

module.exports = { pasangPortofolio, buatStoreSupabase };
