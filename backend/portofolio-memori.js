// Store portofolio di memori: dipakai tes (portofolio.test.js) dan server coba-coba (portofolio-dev.js).
// Kontraknya sama dengan buatStoreSupabase di portofolio.js.
function buatStoreMemori(baris = []) {
  const data = new Map(baris.map((b) => [b.id_siswa, { ...b }]));
  const foto = new Map();
  const salin = (b) => (b ? structuredClone(b) : null);
  return {
    ambil: async (id) => salin(data.get(id)),
    ambilSlug: async (slug) => salin([...data.values()].find((b) => b.slug === slug)),
    daftar: async (jenjang) => [...data.values()]
      .filter((b) => !jenjang || b.jenjang === jenjang)
      .sort((a, b) => a.nama_lengkap.localeCompare(b.nama_lengkap))
      .map(salin),
    tambah: async (b) => {
      data.set(b.id_siswa, { ...b, updated_at: new Date().toISOString() });
      return salin(data.get(b.id_siswa));
    },
    ubah: async (id, patch) => {
      const b = data.get(id);
      if (!b) throw new Error(`siswa ${id} tidak ada`);
      Object.assign(b, patch, { updated_at: new Date().toISOString() });
      return salin(b);
    },
    slugDipakai: async (slug) => [...data.values()].some((b) => b.slug === slug),
    simpanFoto: async (path, buf) => { foto.set(path, Buffer.from(buf)); },
    hapusFoto: async (path) => { foto.delete(path); },
    urlFoto: (path) => "memori://" + path,
    adaFoto: (path) => foto.has(path), // khusus tes
  };
}

module.exports = { buatStoreMemori };
