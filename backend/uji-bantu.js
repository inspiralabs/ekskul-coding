// Helper tes portofolio (dipakai *.test.js): server Express sungguhan di port acak + store memori.
const assert = require("node:assert/strict");
const { hashRahasia } = require("./portofolio-inti");
const express = require("express");
const { pasangPortofolio } = require("./portofolio");
const { buatStoreMemori } = require("./portofolio-memori");

const ENV = { PORTOFOLIO_SECRET: "s", ADMIN_EMAIL: "admin@x.id", ADMIN_PASSWORD: "pw" };
const siswaAwal = () => [
  { id_siswa: "SMA-004", jenjang: "sma", slug: "budi", nama_lengkap: "Budi", kode_hash: hashRahasia("K7P2QX"), kode_versi: 1 },
  { id_siswa: "SMP-022", jenjang: "smp", slug: "rafif", nama_lengkap: "Rafif", kode_hash: hashRahasia("R4F1F2"), kode_versi: 1 },
];

async function jalankan(t, baris = siswaAwal(), env = ENV, bungkus = (s) => s, opsi = {}) {
  const app = express();
  app.use(express.json({ limit: "1mb" }));
  const store = bungkus(buatStoreMemori(baris));
  pasangPortofolio(app, { store, env, ...opsi });
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

module.exports = { ENV, siswaAwal, jalankan };
