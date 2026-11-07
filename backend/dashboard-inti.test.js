// Tes logika form dashboard (dashboard/inti.js) tanpa browser. `cd backend && node --test`
const test = require("node:test");
const assert = require("node:assert/strict");
const { ISIAN_SISWA, ISIAN_RESMI, panjang, rapikan, perubahan } = require("../dashboard/inti");
const { FIELD_SISWA, FIELD_RESMI } = require("./portofolio-inti");

const siswa = { tentang: "Tulisan siswa terbaru", kelas: "XI-1", nama_lengkap: "Andi", link_karya: ["https://a.id"] };
const nilaiForm = (ubah = {}) => ({ ...Object.fromEntries(ISIAN_SISWA.concat(ISIAN_RESMI).map((d) => [d[0], siswa[d[0]] || ""])), ...ubah });

test("dashboard: batas & daftar isian sama persis dengan server", () => {
  assert.deepEqual(Object.fromEntries(ISIAN_SISWA.map((d) => [d[0], d[2]])), FIELD_SISWA);
  assert.deepEqual(Object.fromEntries(ISIAN_RESMI.map((d) => [d[0], d[2]])), FIELD_RESMI);
});

test("dashboard: form tanpa perubahan tidak mengirim apa pun", () => {
  assert.deepEqual(perubahan(siswa, nilaiForm(), ["https://a.id", "", ""], true), {});
  assert.deepEqual(perubahan(siswa, nilaiForm({ tentang: "  Tulisan siswa terbaru  " }), ["https://a.id"], false), {}); // spasi saja
});

test("dashboard: hanya isian yang diubah yang dikirim (tulisan siswa lain tidak tertimpa)", () => {
  const lama = { ...siswa, tentang: "" };                // form admin dibuka sebelum siswa menulis
  const d = perubahan(siswa, nilaiForm({ kelas: "XI-2", tentang: lama.tentang || siswa.tentang }), ["https://a.id"], true);
  assert.deepEqual(d, { kelas: "XI-2" });
});

test("dashboard: form siswa tidak pernah mengirim data resmi", () => {
  const d = perubahan(siswa, nilaiForm({ kelas: "XII", nama_lengkap: "Ganti", tentang: "Baru" }), ["https://a.id"], false);
  assert.deepEqual(d, { tentang: "Baru" });
});

test("dashboard: link karya dibersihkan, urutan & pengosongan terdeteksi", () => {
  assert.deepEqual(perubahan(siswa, nilaiForm(), ["", " https://a.id ", ""], false), {});
  assert.deepEqual(perubahan(siswa, nilaiForm(), ["https://b.id", "https://a.id", ""], false).link_karya, ["https://b.id", "https://a.id"]);
  assert.deepEqual(perubahan(siswa, nilaiForm(), ["", "", ""], false).link_karya, []);
  assert.deepEqual(perubahan({ tentang: "" }, { tentang: "" }, ["", "", ""], false), {}); // belum pernah ada link
});

test("dashboard: mengosongkan isian ikut terkirim", () => {
  assert.deepEqual(perubahan(siswa, nilaiForm({ tentang: "" }), ["https://a.id"], false), { tentang: "" });
});

test("dashboard: pesan error server memakai label yang dikenal siswa", () => {
  assert.equal(rapikan("tentang: maksimal 300 karakter"), "Tentang aku: maksimal 300 karakter");
  assert.equal(rapikan("link_karya: maksimal 3 alamat"), "Link karya: maksimal 3 alamat");
  assert.equal(rapikan("nama_lengkap: wajib diisi"), "Nama lengkap: wajib diisi");
  assert.equal(rapikan("ID atau kode salah"), "ID atau kode salah");
  assert.equal(panjang("🤖🤖a"), 3);
});
