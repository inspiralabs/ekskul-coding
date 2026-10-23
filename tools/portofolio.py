"""Portofolio siswa: <id>.inspiralabs.id/siswa/<slug>/ (usulan lengkap: docs/PORTOFOLIO_SISWA.md).

  py tools/portofolio.py kerangka                    -> portofolio/siswa/<id>/<slug>/siswa.json untuk semua siswa
                                                        di tools/kelompok.json (file yang sudah ada tidak ditimpa)
  py tools/portofolio.py bangun [sumber] [keluar] [--gradebook <csv|url>]
                                                     -> keluar/<id>/siswa/<slug>/ (index.html, sertifikat.html, data.json, foto/)
                                                        default: sumber=portofolio/siswa, keluar=dist/portofolio
  py tools/portofolio.py cek                         -> self-check

Contoh: py tools/portofolio.py bangun portofolio/contoh
        py -m http.server 8091 -d dist/portofolio  ->  http://localhost:8091/smp-00/siswa/fulan/
Foto dari HP: kecilkan dulu dengan portofolio/kecilkan-foto.html (buang lokasi GPS & EXIF, maks 1600 px).
"""
import csv, io, json, re, shutil, sys, tempfile, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
P = ROOT / "portofolio"
KURIKULUM = json.loads((P / "kurikulum.json").read_text(encoding="utf-8"))
KELOMPOK = {k["id"]: k["nama"] for k in json.loads((ROOT / "tools/kelompok.json").read_text(encoding="utf-8"))}
POIN = {"easy": 5, "medium": 10, "hard": 15}
POIN_TANYA_JAWAB = 2
TEMPLAT = ["index.html", "sertifikat.html", "portofolio.css", "portofolio.js"]
FOTO_EXT = {".jpg", ".jpeg"}  # foto siswa asli: JPEG saja (bisa dicek bersih dari EXIF & XMP); SVG hanya untuk contoh
NAMA_FOTO = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$")
MAKS_TANYA_JAWAB = 20
BATAS_FOTO_KB = 500
GRADEBOOK_HEADER_ROW = 3  # sama dengan leaderboard/leaderboard.js


def pecah_anggota(nama):
    return [n.strip() for n in re.split(r"[,&]", nama) if n.strip()]


def buat_slug(nama, terpakai):
    kata = [k for k in re.sub(r"[^a-z ]", " ", nama.lower()).split() if k not in ("m", "muhammad", "mohammad")]
    slug = kata[0]
    if slug in terpakai:
        slug = "-".join(kata[:2])
    terpakai.add(slug)
    return slug


def kerangka(tujuan=P / "siswa"):
    dibuat = 0
    for device_id, nama in KELOMPOK.items():
        anggota, terpakai = pecah_anggota(nama), set()
        for i, orang in enumerate(anggota, 1):
            slug = buat_slug(orang, terpakai)
            f = Path(tujuan) / device_id / slug / "siswa.json"
            if f.exists():
                continue
            f.parent.mkdir(parents=True, exist_ok=True)
            isi = {
                "id_siswa": "", "urut": i, "nama": orang, "panggilan": slug.split("-")[0].title(),
                "peran": "", "nama_kelompok": "", "anggota": anggota,
                "izin_foto": False,  # baru true setelah formulir izin orang tua kembali
                "tampil_nama_lengkap": False,  # false: halaman online memakai nama panggilan
                "pertemuan": {str(p): {"challenge": [], "tanya_jawab": 0, "hasil": ""} for p in range(1, 14)},
                "foto": [], "proyek_akhir": {"judul": "", "foto": "", "keterangan_foto": "", "tiga_kalimat": []},
                "catatan_tutor": "", "peringkat": None,
            }
            f.write_text(json.dumps(isi, ensure_ascii=False, indent=2), encoding="utf-8")
            dibuat += 1
    print(f"{dibuat} kerangka dibuat di {tujuan}")


def masalah_foto(path, contoh=False):
    """Foto harus ada, <= BATAS_FOTO_KB, dan benar-benar JPEG tanpa EXIF maupun XMP (bisa berisi lokasi GPS).
    SVG hanya boleh untuk data contoh: SVG bisa berisi script yang ikut jalan di domain siswa."""
    if not path.is_file():
        return f"{path.name}: tidak ditemukan"
    ext = path.suffix.lower()
    if ext == ".svg" and contoh:
        return None
    if ext not in FOTO_EXT:
        return f"{path.name}: hanya .jpg yang diterima (lewatkan kecilkan-foto.html)"
    if path.stat().st_size > BATAS_FOTO_KB * 1024:
        return f"{path.name}: {path.stat().st_size // 1024} KB > {BATAS_FOTO_KB} KB, kecilkan dulu"
    data = path.read_bytes()
    if data[:3] != b"\xff\xd8\xff":
        return f"{path.name}: isinya bukan JPEG (mungkin hanya diganti namanya), lewatkan kecilkan-foto.html"
    if b"http://ns.adobe.com/xap/1.0/" in data or b"<x:xmpmeta" in data:
        return f"{path.name}: masih ada XMP/lokasi, lewatkan kecilkan-foto.html dulu"
    i = 2
    while i + 4 <= len(data) and data[i] == 0xFF and data[i + 1] != 0xDA:
        if data[i + 1] == 0xE1 and data[i + 4:i + 8] == b"Exif":
            return f"{path.name}: masih ada EXIF/lokasi, lewatkan kecilkan-foto.html dulu"
        i += 2 + int.from_bytes(data[i + 2:i + 4], "big")
    return None


def periksa(s, device_id, folder):
    m = []
    contoh = s.get("contoh") is True
    if contoh and device_id not in ("smp-00", "sma-00"):
        m.append('"contoh": true hanya untuk data contoh smp-00/sma-00')
    if device_id[:3] not in ("smp", "sma"):
        m.append(f"ID {device_id} harus diawali smp- atau sma-")
    elif not contoh and device_id not in KELOMPOK:
        m.append(f"ID {device_id} tidak ada di tools/kelompok.json")
    if not isinstance(s.get("nama"), str) or not s.get("nama").strip():
        m.append("nama kosong")
    for k in ("izin_foto", "tampil_nama_lengkap"):
        if k in s and not isinstance(s[k], bool):
            m.append(f"{k} harus true/false")
    if not isinstance(s.get("izin_foto"), bool):
        m.append("izin_foto harus true/false")
    pertemuan = s.get("pertemuan", {})
    if not isinstance(pertemuan, dict):
        m.append("pertemuan harus berupa objek {nomor: isi}")
        pertemuan = {}
    for p, isi in pertemuan.items():
        if not p.isdigit() or not 1 <= int(p) <= 13:
            m.append(f"pertemuan {p} tidak dikenal")
        if not isinstance(isi, dict):
            m.append(f"P{p}: isi harus objek")
            continue
        ch = isi.get("challenge", [])
        if not isinstance(ch, list):
            m.append(f"P{p}: challenge harus daftar")
            ch = []
        m += [f"P{p}: level {lv} bukan easy/medium/hard" for lv in ch if lv not in POIN]
        if len(ch) != len(set(ch)):
            m.append(f"P{p}: tiap level challenge hanya sekali per pertemuan")
        tj = isi.get("tanya_jawab", 0)
        if not isinstance(tj, int) or isinstance(tj, bool) or not 0 <= tj <= MAKS_TANYA_JAWAB:
            m.append(f"P{p}: tanya_jawab harus angka 0-{MAKS_TANYA_JAWAB}")
        if not isinstance(isi.get("hasil", ""), str):
            m.append(f"P{p}: hasil harus teks")
    proyek = s.get("proyek_akhir", {})
    kalimat = proyek.get("tiga_kalimat", []) if isinstance(proyek, dict) else None
    if not isinstance(kalimat, list) or not all(isinstance(k, str) for k in kalimat):
        m.append("tiga_kalimat harus daftar teks")
    elif len(kalimat) > 3:
        m.append("tiga_kalimat lebih dari 3")
    if not isinstance(s.get("catatan_tutor", ""), str):
        m.append("catatan_tutor harus teks")
    if s.get("izin_foto") is True:
        foto = s.get("foto", [])
        if not isinstance(foto, list) or not all(isinstance(f, dict) and isinstance(f.get("file"), str) for f in foto):
            m.append('foto harus daftar {"file": "nama.jpg", ...}')
            foto = []
        nama_foto = [f["file"] for f in foto] + [proyek.get("foto") if isinstance(proyek, dict) else None]
        for f in nama_foto:
            if not f:
                continue
            if not isinstance(f, str) or not NAMA_FOTO.match(f) or ".." in f:
                m.append(f"nama foto tidak sah: {f!r} (huruf, angka, titik, minus, garis bawah saja)")
                continue
            x = masalah_foto(folder / "foto" / f, contoh)
            if x:
                m.append(x)
    return m


def susun(s, device_id, slug, gb=None, tampil=None):
    """siswa.json (+ baris gradebook) + kurikulum -> data.json yang dibaca templat.
    tampil = {nama lengkap teman: nama yang boleh tampil} dari siswa.json teman sekelompok."""
    jenjang = device_id[:3]
    kur = KURIKULUM[jenjang]
    pertemuan = []
    for k in kur["pertemuan"]:
        isi = s.get("pertemuan", {}).get(str(k["p"]), {})
        nama_ch = k.get("challenge", {})
        pertemuan.append({
            "p": k["p"], "tanggal": k["tanggal"], "judul": k["judul"], "dipelajari": k["dipelajari"],
            "hasil": isi.get("hasil", ""), "tanya_jawab": isi.get("tanya_jawab", 0),
            "challenge": [{"level": lv, "nama": nama_ch.get(lv, f"Challenge P{k['p']}"), "poin": POIN[lv]}
                          for lv in isi.get("challenge", [])],
        })
    poin = sum(c["poin"] for p in pertemuan for c in p["challenge"]) + POIN_TANYA_JAWAB * sum(p["tanya_jawab"] for p in pertemuan)
    # catatan tutor HANYA dari siswa.json (ditulis khusus untuk publik);
    # "Catatan Kualitatif Tutor" di gradebook itu catatan internal, tidak pernah ikut tampil
    catatan = s.get("catatan_tutor", "")
    if gb:  # gradebook = sumber resmi poin
        try:
            poin = int(float(gb.get("Total Poin Keseluruhan", "")))
        except ValueError:
            pass
    izin = s.get("izin_foto") is True
    proyek = dict(s.get("proyek_akhir", {}))
    if not izin:
        proyek["foto"] = ""
    peringkat = s.get("peringkat")
    panggilan = s.get("panggilan") or s["nama"].split()[0]
    nama_tampil = s["nama"] if s.get("tampil_nama_lengkap") is True else panggilan
    tampil = tampil or {}
    if s.get("contoh"):
        anggota = [a for a in s.get("anggota", []) if a != s["nama"]]
    else:  # teman sekelompok: nama sesuai izin mereka sendiri; tanpa data izin -> nama depan saja
        anggota = [tampil.get(a) or a.split()[0] for a in s.get("anggota", []) if a != s["nama"]]
    return {
        "contoh": bool(s.get("contoh")),
        "jenjang": jenjang, "jenjang_label": kur["label"], "semester": KURIKULUM["semester"],
        "sekolah": KURIKULUM["sekolah"], "pelatih": KURIKULUM["pelatih"], "api_base": KURIKULUM["api_base"],
        "device_id": device_id, "slug": slug,
        "url": f"https://{device_id}.inspiralabs.id/siswa/{slug}/",
        "dashboard_url": f"https://{device_id}.inspiralabs.id/",
        "nama": nama_tampil, "panggilan": panggilan,
        "ringkasan": kur["ringkasan"].replace("{panggilan}", panggilan), "proyek_umum": kur["proyek"],
        "peran": s.get("peran", ""), "nama_kelompok": s.get("nama_kelompok", ""),
        "anggota": anggota,
        "pertemuan": pertemuan, "poin": poin,
        "lencana": sum(len(p["challenge"]) for p in pertemuan),
        "foto": s.get("foto", []) if izin else [],
        "proyek_akhir": proyek,
        "catatan_tutor": catatan,
        "peringkat": peringkat if isinstance(peringkat, int) and 1 <= peringkat <= 3 else None,  # hanya 3 besar yang tampil
        "sertifikat": {
            "nomor": f"EKC-2026-{device_id.upper()}-{int(s.get('urut', 1)):02d}",
            "tanggal": kur["pertemuan"][-1]["tanggal"],
        },
    }


def baca_gradebook(sumber):
    teks = urllib.request.urlopen(sumber).read().decode("utf-8") if sumber.startswith("http") else Path(sumber).read_text(encoding="utf-8")
    baris = list(csv.reader(io.StringIO(teks)))
    header = baris[GRADEBOOK_HEADER_ROW]
    return {r[0].strip(): dict(zip(header, r)) for r in baris[GRADEBOOK_HEADER_ROW + 1:] if r and r[0].strip()}


def bangun(sumber=P / "siswa", keluar=ROOT / "dist/portofolio", gradebook=None):
    """Return dict masalah per siswa. Kalau ada masalah, tidak ada yang ditulis ke keluar."""
    gb = baca_gradebook(gradebook) if gradebook else {}
    semua, masalah = [], {}
    for f in sorted(Path(sumber).glob("*/*/siswa.json")):
        folder, slug, device_id = f.parent, f.parent.name, f.parent.parent.name
        try:
            s = json.loads(f.read_text(encoding="utf-8"))
        except ValueError as err:
            masalah[f"{device_id}/{slug}"] = [f"siswa.json bukan JSON yang sah: {err}"]
            continue
        m = periksa(s, device_id, folder) if isinstance(s, dict) else ["siswa.json harus berupa objek"]
        if gradebook and not m and s.get("id_siswa", "") not in gb:
            m.append(f"id_siswa {s.get('id_siswa')!r} tidak ada di gradebook")
        if m:
            masalah[f"{device_id}/{slug}"] = m
        else:
            semua.append((folder, device_id, slug, s))
    if masalah:
        return masalah
    tampil = {(dev, s["nama"]): (s["nama"] if s.get("tampil_nama_lengkap") is True
                                 else s.get("panggilan") or s["nama"].split()[0]) for _, dev, _, s in semua}
    hasil = [(folder, susun(s, dev, slug, gb.get(s.get("id_siswa", "")),
                            {n: t for (d, n), t in tampil.items() if d == dev})) for folder, dev, slug, s in semua]
    # bangun ulang dari nol: siswa yang dihapus dari sumber ikut hilang (hanya folder <id>/siswa/ yang dibersihkan)
    for lama in Path(keluar).glob("*/siswa"):
        shutil.rmtree(lama)
    for folder, data in hasil:
        out = Path(keluar) / data["device_id"] / "siswa" / data["slug"]
        shutil.rmtree(out, ignore_errors=True)
        (out / "foto").mkdir(parents=True)
        for t in TEMPLAT:
            shutil.copy(P / "templat" / t, out / t)
        (out / "data.json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
        for nama in [x["file"] for x in data["foto"]] + [data["proyek_akhir"].get("foto")]:
            if nama:
                shutil.copy(folder / "foto" / nama, out / "foto" / nama)
    print(f"{len(hasil)} portofolio dibangun di {keluar}")
    return {}


def cek():
    """Self-check: kerangka, slug, poin, izin foto, tolak foto EXIF/besar, gradebook."""
    assert pecah_anggota("A, B & C") == ["A", "B", "C"]
    t = set()
    assert [buat_slug(n, t) for n in ["M. Zaidan Altamis", "Zaidan Riqki Alfarizi", "M Dzaki"]] == ["zaidan", "zaidan-riqki", "dzaki"]
    with tempfile.TemporaryDirectory() as d:
        d = Path(d)
        kerangka(d / "siswa")
        assert len(list((d / "siswa").glob("*/*/siswa.json"))) == sum(len(pecah_anggota(n)) for n in KELOMPOK.values())
        assert json.loads((d / "siswa/smp-12/zaidan-altamis/siswa.json").read_text(encoding="utf-8"))["izin_foto"] is False

        src = d / "contoh"
        shutil.copytree(P / "contoh", src)
        assert bangun(src, d / "out") == {}
        data = json.loads((d / "out/smp-00/siswa/fulan/data.json").read_text(encoding="utf-8"))
        assert data["poin"] == 125 and data["lencana"] == 12, (data["poin"], data["lencana"])
        assert data["pertemuan"][11]["challenge"][0]["nama"] == "Klub 200"
        assert data["anggota"] == ["Anggota Kedua", "Anggota Ketiga"]
        assert data["sertifikat"]["nomor"] == "EKC-2026-SMP-00-01"
        assert (d / "out/smp-00/siswa/fulan/foto/proyek-akhir.svg").exists()

        siswa = src / "smp-00/fulan/siswa.json"
        s = json.loads(siswa.read_text(encoding="utf-8"))
        assert susun({**s, "peringkat": 7}, "smp-00", "fulan")["peringkat"] is None
        gb = susun(s, "smp-00", "fulan", {"Total Poin Keseluruhan": "130", "Catatan Kualitatif Tutor": "x"})
        assert gb["poin"] == 130 and gb["catatan_tutor"] == s["catatan_tutor"]

        s["izin_foto"] = False
        siswa.write_text(json.dumps(s), encoding="utf-8")
        assert bangun(src, d / "out2") == {}
        data = json.loads((d / "out2/smp-00/siswa/fulan/data.json").read_text(encoding="utf-8"))
        assert data["foto"] == [] and data["proyek_akhir"]["foto"] == ""
        assert not any((d / "out2/smp-00/siswa/fulan/foto").iterdir())

        s["izin_foto"] = True
        s["foto"] = [{"file": "hp.jpg", "p": 9, "keterangan": ""}, {"file": "besar.jpg", "p": 9, "keterangan": ""}]
        siswa.write_text(json.dumps(s), encoding="utf-8")
        (src / "smp-00/fulan/foto/hp.jpg").write_bytes(b"\xff\xd8\xff\xe1\x00\x10Exif\x00\x00MM\x00\x2a\x00\x00\x00\x08\xff\xd9")
        (src / "smp-00/fulan/foto/besar.jpg").write_bytes(b"\xff\xd8" + b"\x00" * (BATAS_FOTO_KB * 1024 + 1))
        m = bangun(src, d / "out3")["smp-00/fulan"]
        assert any("EXIF" in x for x in m) and any("kecilkan dulu" in x for x in m), m
        assert not (d / "out3").exists()

        (d / "gb.csv").write_text("judul\ncatatan\n\nID Siswa,Nama Lengkap,Total Poin Keseluruhan\nSMP-000,Fulan,99\n", encoding="utf-8")
        assert baca_gradebook(str(d / "gb.csv"))["SMP-000"]["Total Poin Keseluruhan"] == "99"

        # --- temuan review ---
        s = json.loads((P / "contoh/smp-00/fulan/siswa.json").read_text(encoding="utf-8"))

        # catatan tutor dari gradebook (internal) TIDAK pernah ikut ke halaman publik
        assert susun({**s, "catatan_tutor": ""}, "smp-00", "fulan", {"Catatan Kualitatif Tutor": "kurang aktif"})["catatan_tutor"] == ""

        # nama lengkap hanya tampil kalau orang tua mengizinkan; default nama panggilan
        tanpa = susun({**s, "tampil_nama_lengkap": False}, "smp-00", "fulan")
        assert tanpa["nama"] == s["panggilan"] and s["nama"] not in json.dumps(tanpa)
        assert susun({**s, "tampil_nama_lengkap": True}, "smp-00", "fulan")["nama"] == s["nama"]
        teman = susun({**s, "contoh": False, "tampil_nama_lengkap": True}, "smp-00", "fulan", tampil={"Anggota Kedua": "Kedua"})
        assert teman["anggota"] == ["Kedua", "Anggota"]  # teman tanpa data izin -> nama depan saja

        # isian siswa.json yang salah ditolak dengan pesan, bukan crash
        def ditolak(ubah):
            return periksa({**s, **ubah}, "smp-00", src / "smp-00/fulan")
        assert ditolak({"pertemuan": {"9": {"challenge": [], "tanya_jawab": "2"}}})
        assert ditolak({"pertemuan": {"9": {"challenge": [], "tanya_jawab": -1}}})
        assert ditolak({"pertemuan": {"9": {"challenge": ["hard"] * 4, "tanya_jawab": 0}}})
        assert ditolak({"proyek_akhir": {**s["proyek_akhir"], "tiga_kalimat": "abc"}})
        assert ditolak({"izin_foto": True, "foto": [{"p": 9}]})
        assert ditolak({"izin_foto": True, "foto": [{"file": "../../x.jpg", "p": 9}]})
        assert periksa({**s, "contoh": True}, "smp-07", src / "smp-00/fulan")  # contoh hanya untuk smp-00/sma-00
        assert not periksa(s, "smp-00", src / "smp-00/fulan")

        # foto siswa asli: hanya JPEG asli (cek isi file), tanpa EXIF maupun XMP; SVG hanya untuk contoh
        foto = d / "f"
        foto.mkdir()
        (foto / "ok.jpg").write_bytes(b"\xff\xd8\xff\xdb\x00\x04\x00\x00\xff\xd9")
        (foto / "xmp.jpg").write_bytes(b"\xff\xd8\xff\xe1\x00\x30http://ns.adobe.com/xap/1.0/\x00<x:xmpmeta GPS/>\xff\xd9")
        (foto / "nyamar.png").write_bytes(b"\xff\xd8\xff\xdb\x00\x04\x00\x00\xff\xd9")
        (foto / "palsu.jpg").write_bytes(b"\x89PNG\r\n\x1a\n")
        (foto / "x.svg").write_text("<svg><script>alert(1)</script></svg>", encoding="utf-8")
        assert masalah_foto(foto / "ok.jpg") is None
        assert masalah_foto(foto / "xmp.jpg") and masalah_foto(foto / "nyamar.png") and masalah_foto(foto / "palsu.jpg")
        assert masalah_foto(foto / "x.svg") and masalah_foto(foto / "x.svg", contoh=True) is None

        # siswa yang dihapus dari sumber ikut hilang dari hasil bangun
        src2 = d / "src2"
        shutil.copytree(P / "contoh", src2)
        shutil.copytree(src2 / "smp-00/fulan", src2 / "smp-00/budi")
        assert bangun(src2, d / "out4") == {} and (d / "out4/smp-00/siswa/budi/index.html").exists()
        shutil.rmtree(src2 / "smp-00/budi")
        (d / "out4/catatan-pengajar.txt").write_text("jangan dihapus", encoding="utf-8")
        assert bangun(src2, d / "out4") == {}
        assert not (d / "out4/smp-00/siswa/budi").exists() and (d / "out4/smp-00/siswa/fulan/index.html").exists()
        assert (d / "out4/catatan-pengajar.txt").exists()  # hanya folder <id>/siswa/ yang dibersihkan
    print("cek OK")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["kerangka"]:
        kerangka()
    elif a[:1] == ["bangun"]:
        gbi = a.index("--gradebook") if "--gradebook" in a else None
        gradebook = a[gbi + 1] if gbi is not None else None
        pos = [x for i, x in enumerate(a[1:], 1) if gbi is None or i not in (gbi, gbi + 1)]
        masalah = bangun(*[Path(x) for x in pos[:2]], gradebook=gradebook)
        if masalah:
            sys.exit("DITOLAK, tidak ada yang dibangun:\n" + "\n".join(f"  {k}: {'; '.join(v)}" for k, v in masalah.items()))
    elif a[:1] == ["cek"]:
        cek()
    else:
        sys.exit(__doc__)
