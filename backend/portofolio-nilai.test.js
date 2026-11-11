// Tes lembar nilai sertifikat dari Gradebook: `cd backend && node --test` (tanpa jaringan).
const test = require("node:test");
const assert = require("node:assert/strict");
const { bacaCsv, nilaiDariCsv, buatSumberNilai } = require("./portofolio-nilai");
const { ENV, siswaAwal, jalankan } = require("./uji-bantu");

// Bentuk yang sama dengan ekspor Google (gviz, tqx=out:csv): semua sel dikutip.
const CSV = [
  '"ID Siswa","Nama Lengkap","Kelas","Total Poin Keseluruhan","Skor Gamifikasi (0-100)","Rata-rata Post-Test (0-100)","Nilai Final Project (0-100)","Bobot Final Project 40%","NILAI AKHIR","Predikat","Ranking"',
  '"SMA-004","Budi ""Si Kipas"", S.Kom","10B","42","55.3","37.5","80.0","32.0","54.9","D","5"',
  '"SMA-007","Kenzo","10A","75","98,7","52,5","","0","45,4","D","1"',
  '"","","","","","","","","","",""',
].join("\n");
const akhir = (n) => Object.fromEntries(n.rincian)["NILAI AKHIR"];

test("baca CSV: kutip, koma di dalam kutip, baris kosong", () => {
  assert.deepEqual(bacaCsv('a,"b,c","d ""e"""\r\n1,,3\n'), [["a", "b,c", 'd "e"'], ["1", "", "3"]]);
  assert.deepEqual(bacaCsv(""), []);
});

test("rincian nilai dari CSV Gradebook: semua kolom, urutan sheet", () => {
  const peta = nilaiDariCsv(CSV);
  assert.deepEqual([...peta.keys()], ["SMA-004", "SMA-007"]);
  // identitas tidak ikut; "Final Project" jadi "Ujian Akhir"; ranking 5 tidak ikut
  assert.deepEqual(peta.get("SMA-004").rincian, [
    ["Total Poin Keseluruhan", 42], ["Skor Gamifikasi (0-100)", 55.3], ["Rata-rata Post-Test (0-100)", 37.5],
    ["Nilai Ujian Akhir (0-100)", 80], ["Bobot Ujian Akhir 40%", 32], ["NILAI AKHIR", 54.9], ["Predikat", "D"],
  ]);
  // koma desimal, sel kosong, ranking 3 besar ikut sebagai "Peringkat"
  assert.deepEqual(peta.get("SMA-007").rincian, [
    ["Total Poin Keseluruhan", 75], ["Skor Gamifikasi (0-100)", 98.7], ["Rata-rata Post-Test (0-100)", 52.5],
    ["Nilai Ujian Akhir (0-100)", null], ["Bobot Ujian Akhir 40%", 0], ["NILAI AKHIR", 45.4], ["Predikat", "D"], ["Peringkat", 1],
  ]);
  // baris keterangan di atas judul kolom tidak mengganggu
  assert.equal(akhir(nilaiDariCsv('"GRADEBOOK","",""\n' + CSV).get("SMA-004")), 54.9);
  // bukan CSV Gradebook (mis. halaman login Google) -> kosong, bukan error
  assert.equal(nilaiDariCsv("<html><body>Sign in</body></html>").size, 0);
});

test("sumber nilai: disimpan 5 menit, gagal ambil tidak melempar error", async () => {
  let kini = 0, panggilan = 0, isi = CSV, rusak = false;
  const ambil = async (url) => {
    panggilan++;
    assert.match(url, /^https:\/\/docs\.google\.com\/spreadsheets\/d\/abcdefghijklmnopqrstuvwxyz\/gviz\/tq\?tqx=out:csv&sheet=Gradebook%20SMA&range=A4:S200&headers=1$/);
    if (rusak) throw new Error("putus");
    return { ok: true, text: async () => isi };
  };
  const nilai = buatSumberNilai({ idSheet: { sma: "abcdefghijklmnopqrstuvwxyz", smp: "" }, ambil, sekarang: () => kini });
  assert.equal(akhir(await nilai("sma", "SMA-004")), 54.9);
  assert.equal(await nilai("sma", "SMA-999"), null);
  assert.equal(panggilan, 1); // permintaan kedua dari simpanan

  isi = CSV.replace('"54.9"', '"88.2"');
  kini = 4 * 60 * 1000;
  assert.equal(akhir(await nilai("sma", "SMA-004")), 54.9); // belum 5 menit
  kini = 6 * 60 * 1000;
  assert.equal(akhir(await nilai("sma", "SMA-004")), 88.2); // spreadsheet berubah -> ikut berubah
  assert.equal(panggilan, 2);

  rusak = true;
  kini = 20 * 60 * 1000;
  assert.equal(akhir(await nilai("sma", "SMA-004")), 88.2); // Google gagal -> nilai terakhir tetap dipakai
  assert.equal(panggilan, 3);
  assert.equal(akhir(await nilai("sma", "SMA-004")), 88.2);
  assert.equal(panggilan, 3); // tidak memanggil Google lagi di tiap permintaan

  assert.equal(await nilai("smp", "SMP-022"), null); // jenjang tanpa ID spreadsheet
  const kosong = buatSumberNilai({ idSheet: { sma: "abcdefghijklmnopqrstuvwxyz" }, ambil: async () => { throw new Error("putus"); } });
  assert.equal(await kosong("sma", "SMA-004"), null);
  const idAneh = buatSumberNilai({ idSheet: { sma: "../../etc" }, ambil: async () => { throw new Error("tidak boleh dipanggil"); } });
  assert.equal(await idAneh("sma", "SMA-004"), null);
});

test("sertifikat: lembar nilai, tanda tangan, stempel hanya untuk siswa pemilik dan admin", async (t) => {
  const baris = siswaAwal().map((b) => ({ ...b, sertifikat_nomor: "EKC-2026-S1-" + b.id_siswa }));
  baris.push({ id_siswa: "SMA-005", jenjang: "sma", slug: "husna", nama_lengkap: "Husna", sertifikat_nomor: "EKC-2026-S1-SMA-005",
    kode_hash: require("./portofolio-inti").hashRahasia("H5SNAA"), kode_versi: 1 });
  const diminta = [];
  const nilaiBudi = { rincian: [["NILAI AKHIR", 54.9], ["Predikat", "D"]] };
  const nilaiSiswa = async (jenjang, id) => {
    diminta.push(jenjang + ":" + id);
    return id === "SMA-004" ? nilaiBudi : null;
  };
  const tanda = { ttd: "https://contoh.id/ttd.png", stempel: "https://contoh.id/stempel.png" };
  const s = await jalankan(t, baris, ENV, (x) => x, { sekarang: () => Date.parse("2026-11-14T08:00:00+07:00"), nilaiSiswa,
    tandaSertifikat: async () => tanda });

  // pengunjung tanpa login: sertifikat ada; nilai & tanda tidak ikut dan spreadsheet tidak dibaca
  const umum = await s.get("/sertifikat/budi");
  assert.equal(umum.sertifikat.nama_lengkap, "Budi");
  assert.ok(!("nilai" in umum.sertifikat) && !("tanda" in umum.sertifikat));
  // siswa lain yang login: sama seperti pengunjung
  const lain = (await s.post("/masuk/siswa", { id: "SMA-005", kode: "H5SNAA" })).token;
  const punyaLain = (await s.get("/sertifikat/budi", lain)).sertifikat;
  assert.ok(!("nilai" in punyaLain) && !("tanda" in punyaLain));
  assert.deepEqual(diminta, []);

  // pemiliknya sendiri dan admin: semuanya ikut
  const budi = (await s.post("/masuk/siswa", { id: "SMA-004", kode: "K7P2QX" })).token;
  assert.deepEqual((await s.get("/sertifikat/budi", budi)).sertifikat.nilai, nilaiBudi);
  const admin = (await s.post("/masuk/staf", { email: ENV.ADMIN_EMAIL, password: ENV.ADMIN_PASSWORD })).token;
  const punyaAdmin = (await s.get("/sertifikat/budi", admin)).sertifikat;
  assert.deepEqual([punyaAdmin.nilai, punyaAdmin.tanda], [nilaiBudi, tanda]);
  assert.equal((await s.get("/sertifikat/husna", admin)).sertifikat.nilai, null); // tidak ada di Gradebook
  assert.deepEqual(diminta, ["sma:SMA-004", "sma:SMA-004", "sma:SMA-005"]);

  // kode direset -> token lama pemilik tidak lagi membuka nilai
  await s.post("/staf/siswa/SMA-004/reset-kode", {}, admin);
  assert.ok(!("nilai" in (await s.get("/sertifikat/budi", budi)).sertifikat));
});
