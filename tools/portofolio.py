"""Portofolio siswa: <device-id>.inspiralabs.id/siswa/<slug>/ (usulan lengkap: docs/PORTOFOLIO_SISWA.md).

Data diambil langsung dari spreadsheet penilaian InspiraLabs (Google Drive -> File -> Download -> .xlsx),
satu file per jenjang. Tidak ada data yang diketik ulang.

  py tools/portofolio.py bangun penilaian-smp.xlsx penilaian-sma.xlsx [--foto <zip|folder> ...] [--keluar <folder>]
      -> <keluar>/<device-id>/siswa/<slug>/ (index.html, sertifikat.html, data.json, foto/)
         default --keluar dist/portofolio. --foto boleh diulang (lihat FOTO di bawah). Butuh: py -m pip install pillow
  py tools/portofolio.py contoh   -> bangun halaman contoh fiktif (smp-00) ke dist/portofolio
  py tools/portofolio.py cek      -> self-check

Yang dibaca dari spreadsheet (kolom lain, mis. No. HP, nama orang tua, NIS, nilai akhir, tidak pernah dibaca):
  Master Data Siswa  : ID Siswa, Nama Lengkap, Nickname, Status Aktif ("Pindah" dilewati)
  Log Poin Sesi      : Pertemuan Ke-, ID Siswa, Keaktifan Umum, Challenge Easy/Medium/Hard (terisi = lencana)
  Gradebook          : ID Siswa, Total Poin Keseluruhan, Ranking (hanya 3 besar yang tampil)
  Catatan Tutor      : ID Siswa, Proyek / Karya, Kekuatan (timpa draft) / Draft Kekuatan (otomatis)
Siswa <-> kelompok (Device ID): tools/kelompok.json, kolom "id_siswa".

FOTO: Google Drive, satu folder per siswa bernama ID Siswa ("Foto Portofolio/SMP-022/"), isi foto mentah dari HP
  (JPG/PNG/WebP; HEIC iPhone belum didukung). Ambil lewat Drive -> klik kanan folder -> Download (zip), atau folder
  Google Drive for Desktop. Generator mengecilkan (maks 1600 px, <= 500 KB), memutar sesuai arah HP, membuang EXIF/GPS.
  Nama file = keterangan: "P11 Merakit Sensor.jpg" -> P11, "Merakit Sensor". File berawalan "proyek" jadi foto proyek akhir.
"""
import json, re, shutil, sys, tempfile, zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
P = ROOT / "portofolio"
KURIKULUM = json.loads((P / "kurikulum.json").read_text(encoding="utf-8"))
POIN = {"easy": 5, "medium": 10, "hard": 15}
POIN_TANYA_JAWAB = 2
TEMPLAT = ["index.html", "sertifikat.html", "portofolio.css", "portofolio.js"]
FOTO_EXT = {".jpg", ".jpeg"}  # foto asli: JPEG saja (bisa dicek bersih dari EXIF & XMP); SVG hanya untuk contoh
NAMA_FOTO = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$")
BATAS_FOTO_KB = 500
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
      "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}


def kelompok_siswa():
    """{ID Siswa: device_id} dari tools/kelompok.json."""
    out = {}
    for k in json.loads((ROOT / "tools/kelompok.json").read_text(encoding="utf-8")):
        for sid in k.get("id_siswa", []):
            out[sid] = k["id"]
    return out


# ---------------------------------------------------------------- baca spreadsheet

def baca_xlsx(path):
    """{nama sheet: [baris {judul kolom: teks}]}; judul kolom = baris yang sel pertamanya "ID Siswa" / "Jenjang"."""
    z = zipfile.ZipFile(path)
    ss = []
    if "xl/sharedStrings.xml" in z.namelist():
        ss = ["".join(t.text or "" for t in si.iter(f"{{{NS['m']}}}t"))
              for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall("m:si", NS)]
    rels = {r.get("Id"): r.get("Target") for r in ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))}
    hasil = {}
    for sh in ET.fromstring(z.read("xl/workbook.xml")).find("m:sheets", NS):
        target = rels[sh.get(f"{{{NS['r']}}}id")].lstrip("/")
        root = ET.fromstring(z.read(target if target.startswith("xl/") else "xl/" + target))
        kepala, baris = None, []
        for r in root.find("m:sheetData", NS):
            sel = {}
            for c in r:
                v, t = c.find("m:v", NS), c.get("t")
                if t == "s" and v is not None:
                    x = ss[int(v.text)]
                elif t == "inlineStr":
                    x = "".join(e.text or "" for e in c.iter(f"{{{NS['m']}}}t"))
                else:
                    x = v.text if v is not None else ""
                if x:
                    sel[re.match(r"[A-Z]+", c.get("r")).group()] = x.strip()
            if kepala is None:
                if sel.get("A") in ("ID Siswa", "Jenjang", "Pertemuan"):
                    kepala = sel
                continue
            baris.append({kepala[k]: v for k, v in sel.items() if k in kepala})
        hasil[sh.get("name")] = baris
    return hasil


def _sheet(wb, awalan):
    for nama, baris in wb.items():
        if nama.lower().startswith(awalan.lower()):
            return baris
    raise ValueError(f'sheet "{awalan}..." tidak ditemukan')


def _angka(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return 0.0


def baca_penilaian(path):
    """Spreadsheet penilaian -> {ID Siswa: {...}} hanya dengan kolom yang dibutuhkan halaman publik."""
    wb = baca_xlsx(path)
    siswa = {}
    for r in _sheet(wb, "Master Data"):
        sid = r.get("ID Siswa", "")
        if not sid or not r.get("Nama Lengkap"):
            continue
        nick = r.get("Nickname", "")
        siswa[sid] = {"id": sid, "nama": r["Nama Lengkap"], "panggilan": "" if nick in ("", "-") else nick,
                      "pindah": r.get("Status Aktif", "").lower() == "pindah",
                      "pertemuan": {}, "poin": None, "ranking": None, "proyek": "", "kekuatan": ""}
    for r in _sheet(wb, "Log Poin Sesi"):
        s = siswa.get(r.get("ID Siswa", ""))
        m = re.match(r"P(\d+)$", r.get("Pertemuan Ke-", "").strip(), re.I)
        if not s or not m:
            continue
        p = s["pertemuan"].setdefault(int(m.group(1)), {"challenge": [], "tanya_jawab": 0})
        for lv in POIN:
            if _angka(r.get(f"Challenge {lv.title()}")) > 0 and lv not in p["challenge"]:
                p["challenge"].append(lv)
        p["tanya_jawab"] += round(_angka(r.get("Keaktifan Umum")) / POIN_TANYA_JAWAB)
    for r in _sheet(wb, "Gradebook"):
        s = siswa.get(r.get("ID Siswa", ""))
        if s:
            s["poin"] = int(_angka(r.get("Total Poin Keseluruhan")))
            s["ranking"] = int(_angka(r.get("Ranking"))) or None
    for r in _sheet(wb, "Catatan Tutor"):
        s = siswa.get(r.get("ID Siswa", ""))
        if s:
            s["proyek"] = r.get("Proyek / Karya", "")
            # hanya "Kekuatan" (positif) yang tampil; "Perlu Ditingkatkan" & saran orang tua tetap internal
            k = r.get("Kekuatan (timpa draft)") or r.get("Draft Kekuatan (otomatis)", "")
            s["kekuatan"] = "" if k.startswith("=") else k
    return siswa


# ---------------------------------------------------------------- foto

def masalah_foto(path, contoh=False):
    """Foto harus <= BATAS_FOTO_KB dan benar-benar JPEG tanpa EXIF maupun XMP (bisa berisi lokasi GPS).
    SVG hanya untuk data contoh: SVG bisa berisi script yang ikut jalan di domain siswa."""
    ext = path.suffix.lower()
    if ext == ".svg" and contoh:
        return None
    if not NAMA_FOTO.match(path.name):
        return f"{path.name}: nama file hanya boleh huruf, angka, titik, minus, garis bawah"
    if ext not in FOTO_EXT:
        return f"{path.name}: hanya .jpg yang diterima"
    if path.stat().st_size > BATAS_FOTO_KB * 1024:
        return f"{path.name}: {path.stat().st_size // 1024} KB > {BATAS_FOTO_KB} KB, kecilkan dulu"
    data = path.read_bytes()
    if data[:3] != b"\xff\xd8\xff":
        return f"{path.name}: isinya bukan JPEG (mungkin hanya diganti namanya)"
    if b"http://ns.adobe.com/xap/1.0/" in data or b"<x:xmpmeta" in data:
        return f"{path.name}: masih ada XMP/lokasi"
    i = 2
    while i + 4 <= len(data) and data[i] == 0xFF and data[i + 1] != 0xDA:
        if data[i + 1] == 0xE1 and data[i + 4:i + 8] == b"Exif":
            return f"{path.name}: masih ada EXIF/lokasi"
        i += 2 + int.from_bytes(data[i + 2:i + 4], "big")
    return None


GAMBAR = {".jpg", ".jpeg", ".png", ".webp"}
ID_SISWA = re.compile(r"^(SMP|SMA)-\d{3}$", re.I)
MAKS_SISI = 1600


def kumpulkan_foto(sumber):
    """Foto dari folder (Google Drive for Desktop) dan/atau zip (Drive -> Download):
    {ID Siswa: [(nama file asli, isi bytes)]}. ID diambil dari nama folder di path, mis. "Foto/SMP-022/x.jpg"."""
    hasil = {}
    def tambah(bagian, baca):
        sid = next((x.upper() for x in bagian[:-1] if ID_SISWA.match(x)), None)
        nama = bagian[-1]
        ext = Path(nama).suffix.lower()
        if sid and not nama.startswith(".") and ext in GAMBAR | {".heic", ".heif", ".svg"}:
            hasil.setdefault(sid, []).append((nama, baca()))
    for src in sumber or []:
        src = Path(src)
        if src.is_dir():
            for f in sorted(src.rglob("*")):
                if f.is_file():
                    tambah(f.relative_to(src).parts, f.read_bytes)
        elif src.suffix.lower() == ".zip":
            with zipfile.ZipFile(src) as z:
                for n in sorted(z.namelist()):
                    if not n.endswith("/"):
                        tambah(Path(n).parts, lambda n=n: z.read(n))
        else:
            raise ValueError(f"{src}: harus folder atau file .zip hasil unduhan Google Drive")
    return hasil


def olah_foto(nama, data, contoh=False):
    """Foto mentah HP -> (nama file baru, bytes JPEG <= BATAS_FOTO_KB, lebar/tinggi <= MAKS_SISI, tanpa EXIF/GPS,
    arah sudah benar). Gagal -> ValueError berisi pesan untuk tutor."""
    stem, ext = Path(nama).stem, Path(nama).suffix.lower()
    rapi = re.sub(r"[^a-z0-9]+", "-", stem.lower()).strip("-") or "foto"
    if ext == ".svg":
        if not contoh:
            raise ValueError(f"{nama}: SVG tidak diterima (bisa berisi script), pakai JPG/PNG")
        return rapi + ".svg", data
    if ext in (".heic", ".heif"):
        raise ValueError(f"{nama}: format HEIC (iPhone) belum didukung. Di iPhone: Settings > Camera > Formats > "
                         "Most Compatible, atau ubah ke JPG dulu")
    import io
    from PIL import Image, ImageOps, UnidentifiedImageError
    try:
        with Image.open(io.BytesIO(data)) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
    except (UnidentifiedImageError, OSError, SyntaxError) as err:
        raise ValueError(f"{nama}: bukan gambar yang bisa dibaca ({err.__class__.__name__})")
    im.thumbnail((MAKS_SISI, MAKS_SISI))
    for kualitas in (85, 78, 70, 62, 55):
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=kualitas, optimize=True)  # tanpa exif=... -> EXIF/GPS tidak ikut
        if buf.tell() <= BATAS_FOTO_KB * 1024:
            return rapi + ".jpg", buf.getvalue()
    raise ValueError(f"{nama}: tetap lebih dari {BATAS_FOTO_KB} KB setelah dikecilkan")


def info_foto(nama_asli, nama_baru):
    """Keterangan dari nama file asli: "P11 Merakit Sensor.jpg" -> P11, "Merakit Sensor"."""
    m = re.match(r"(?:p(\d+)[-_ ]+)?(.*)$", Path(nama_asli).stem, re.I)
    teks = re.sub(r"[-_]+", " ", m.group(2)).strip()
    return {"file": nama_baru, "p": int(m.group(1)) if m.group(1) else None, "keterangan": teks[:1].upper() + teks[1:]}


# ---------------------------------------------------------------- susun & bangun

def buat_slug(nama, terpakai):
    kata = [k for k in re.sub(r"[^a-z ]", " ", nama.lower()).split() if k not in ("m", "muhammad", "mohammad", "muhamad")]
    kata = kata or ["siswa"]
    slug = kata[0]
    i = 1
    while slug in terpakai:
        i += 1
        slug = "-".join(kata[:i]) if i <= len(kata) else f"{kata[0]}-{i}"
    terpakai.add(slug)
    return slug


def susun(s, device_id, slug, anggota, urut, foto, contoh=False):
    """Data satu siswa (dari baca_penilaian) + kurikulum -> data.json yang dibaca templat."""
    jenjang = device_id[:3]
    kur = KURIKULUM[jenjang]
    pertemuan = []
    for k in kur["pertemuan"]:
        isi = s["pertemuan"].get(k["p"], {})
        nama_ch = k.get("challenge", {})
        pertemuan.append({
            "p": k["p"], "tanggal": k["tanggal"], "judul": k["judul"], "dipelajari": k["dipelajari"], "hasil": "",
            "tanya_jawab": isi.get("tanya_jawab", 0),
            "challenge": [{"level": lv, "nama": nama_ch.get(lv, f"Challenge {lv.title()} P{k['p']}"), "poin": POIN[lv]}
                          for lv in ("easy", "medium", "hard") if lv in isi.get("challenge", [])],
        })
    hitung = sum(c["poin"] for p in pertemuan for c in p["challenge"]) + POIN_TANYA_JAWAB * sum(p["tanya_jawab"] for p in pertemuan)
    panggilan = s["panggilan"] or next((k for k in s["nama"].split() if k.lower().strip(".") not in ("m", "muhammad")), s["nama"])
    proyek_foto = next((x for x in foto if x["file"].lower().startswith("proyek")), None)
    rank = s.get("ranking")
    return {
        "contoh": contoh,
        "jenjang": jenjang, "jenjang_label": kur["label"], "semester": KURIKULUM["semester"],
        "sekolah": KURIKULUM["sekolah"], "pelatih": KURIKULUM["pelatih"], "api_base": KURIKULUM["api_base"],
        "device_id": device_id, "slug": slug,
        "url": f"https://{device_id}.inspiralabs.id/siswa/{slug}/",
        "dashboard_url": f"https://{device_id}.inspiralabs.id/",
        "nama": s["nama"], "panggilan": panggilan,
        "ringkasan": kur["ringkasan"].replace("{panggilan}", panggilan), "proyek_umum": kur["proyek"],
        "peran": "", "nama_kelompok": "", "anggota": anggota,
        "pertemuan": pertemuan,
        "poin": s["poin"] if s.get("poin") is not None else hitung,
        "lencana": sum(len(p["challenge"]) for p in pertemuan),
        "foto": [x for x in foto if x is not proyek_foto],
        "proyek_akhir": {"judul": s.get("proyek", ""), "foto": proyek_foto["file"] if proyek_foto else "",
                         "keterangan_foto": proyek_foto["keterangan"] if proyek_foto else "", "tiga_kalimat": []},
        "catatan_tutor": s.get("kekuatan", ""),
        "peringkat": rank if rank and 1 <= rank <= 3 and (s.get("poin") or 0) > 0 else None,  # hanya 3 besar
        "sertifikat": {"nomor": f"EKC-2026-{device_id.upper()}-{urut:02d}", "tanggal": kur["pertemuan"][-1]["tanggal"]},
    }


def bangun(penilaian, keluar=ROOT / "dist/portofolio", foto=None, peta=None, contoh=False):
    """penilaian = {ID Siswa: data} dari baca_penilaian (semua jenjang digabung); foto = daftar folder/zip.
    Return dict masalah; kalau ada masalah, tidak ada yang ditulis."""
    peta = kelompok_siswa() if peta is None else peta
    masalah, rencana = {}, []
    semua_foto = kumpulkan_foto(foto)
    per_kelompok = {}
    for sid, dev in peta.items():
        per_kelompok.setdefault(dev, []).append(sid)
    for dev, ids in sorted(per_kelompok.items()):
        terpakai = set()
        for urut, sid in enumerate(ids, 1):
            s = penilaian.get(sid)
            if not s:
                masalah[sid] = [f"ID Siswa {sid} (kelompok {dev}) tidak ada di Master Data spreadsheet"]
                continue
            if s["pindah"]:
                continue
            if sid[:3].lower() != dev[:3]:
                masalah[sid] = [f"{sid} bukan jenjang {dev[:3].upper()}"]
                continue
            olahan, m, dipakai = [], [], set()
            for nama, isi in semua_foto.get(sid, []):
                try:
                    baru, data = olah_foto(nama, isi, contoh)
                except ValueError as err:
                    m.append(str(err))
                    continue
                dasar, ext, i = baru[:-4], baru[-4:], 1
                while baru in dipakai:  # dua foto dengan nama sama setelah dirapikan
                    i += 1
                    baru = f"{dasar}-{i}{ext}"
                dipakai.add(baru)
                olahan.append((data, info_foto(nama, baru)))
            if m:
                masalah[sid] = m
                continue
            anggota = [penilaian[t]["nama"] for t in ids if t != sid and t in penilaian and not penilaian[t]["pindah"]]
            data = susun(s, dev, buat_slug(s["nama"], terpakai), anggota, urut, [x for _, x in olahan], contoh)
            rencana.append((data, olahan))
    if masalah:
        return masalah
    # bangun ulang dari nol: siswa yang keluar/dihapus ikut hilang (hanya folder <id>/siswa/ yang dibersihkan)
    for lama in Path(keluar).glob("*/siswa"):
        shutil.rmtree(lama)
    for data, foto in rencana:
        out = Path(keluar) / data["device_id"] / "siswa" / data["slug"]
        (out / "foto").mkdir(parents=True)
        for t in TEMPLAT:
            shutil.copy(P / "templat" / t, out / t)
        (out / "data.json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
        for isi, info in foto:
            (out / "foto" / info["file"]).write_bytes(isi)
    print(f"{len(rencana)} portofolio dibangun di {keluar}")
    return {}


def bangun_contoh(keluar=ROOT / "dist/portofolio"):
    data = json.loads((P / "contoh/penilaian-contoh.json").read_text(encoding="utf-8"))
    penilaian = {sid: {**s, "pertemuan": {int(p): v for p, v in s["pertemuan"].items()}} for sid, s in data["siswa"].items()}
    return bangun(penilaian, keluar, [P / "contoh/foto"], data["kelompok"], contoh=True)


# ---------------------------------------------------------------- self-check

def _xlsx_uji(sheets):
    """Tulis xlsx kecil (teks inline) untuk self-check: {nama sheet: [baris list]}."""
    import io
    def kol(i):
        s = ""
        i += 1
        while i:
            i, r = divmod(i - 1, 26)
            s = chr(65 + r) + s
        return s
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as z:
        z.writestr("xl/workbook.xml", '<workbook xmlns="%s" xmlns:r="%s"><sheets>%s</sheets></workbook>' % (
            NS["m"], NS["r"], "".join(f'<sheet name="{n}" sheetId="{i+1}" r:id="r{i}"/>' for i, n in enumerate(sheets))))
        z.writestr("xl/_rels/workbook.xml.rels", '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">%s</Relationships>' % (
            "".join(f'<Relationship Id="r{i}" Type="x" Target="worksheets/s{i}.xml"/>' for i in range(len(sheets)))))
        from xml.sax.saxutils import escape
        for i, rows in enumerate(sheets.values()):
            xml = "".join(f'<row r="{r+1}">' + "".join(
                f'<c r="{kol(c)}{r+1}" t="inlineStr"><is><t>{escape(str(v))}</t></is></c>' for c, v in enumerate(row) if v != "")
                + "</row>" for r, row in enumerate(rows))
            z.writestr(f"xl/worksheets/s{i}.xml", f'<worksheet xmlns="{NS["m"]}"><sheetData>{xml}</sheetData></worksheet>')
    return buf.getvalue()


def cek():
    kepala = [["JUDUL"], ["catatan"], []]
    wb = {
        "Master Data Siswa SMA": kepala + [
            ["ID Siswa", "Nama Lengkap", "Nickname", "Kelas", "JK", "NIS", "No. HP/WA Siswa", "Nama Orang Tua/Wali",
             "No. HP/WA Orang Tua", "Tgl Bergabung", "Status Aktif"],
            ["SMP-022", "Rafif Ahnaf Rabbani", "Rafif", "8A", "L", "123", "0811111", "Bapak Rahasia", "0822222", "", "Aktif"],
            ["SMP-017", "Muhammad Qassim", "-", "8A", "L", "124", "-", "", "", "", ""],
            ["SMP-099", "Sudah Pindah", "", "8B", "L", "", "", "", "", "", "Pindah"]],
        "Log Poin Sesi": kepala + [
            ["Jenjang", "Pertemuan Ke-", "Tanggal", "ID Siswa", "Nama Siswa", "Keaktifan Umum", "Challenge Easy",
             "Challenge Medium", "Challenge Hard", "Post - Test ", "Inisiatif Eksplorasi", "Poin Diperoleh", "Nama Pencatat", "Catatan"],
            ["SMP", "P10", "", "SMP-022", "Rafif", "4", "5", "10", "", "8", "", "", "Tutor", "rahasia internal"],
            ["SMP", "P11", "", "SMP-022", "Rafif", "", "5", "", "15", "", "", "", "Tutor", ""],
            ["SMP", "P11", "", "SMP-017", "Qassim", "2", "", "", "", "", "", "", "Tutor", ""]],
        "Gradebook SMA": kepala + [
            ["ID Siswa", "Nama Lengkap", "Kelas", "Total Poin Keseluruhan", "Ranking", "Catatan Kualitatif Tutor"],
            ["SMP-022", "Rafif Ahnaf Rabbani", "8A", "39", "2", "internal gradebook"],
            ["SMP-017", "Muhammad Qassim", "8A", "2", "9", ""]],
        "Catatan Tutor": kepala + [
            ["ID Siswa", "Nama Lengkap", "Proyek / Karya", "Kekuatan (timpa draft)", "Perlu Ditingkatkan (timpa draft)",
             "Saran untuk Orang Tua / Santri", "Draft Kekuatan (otomatis)", "Draft Perlu Ditingkatkan (otomatis)"],
            ["SMP-022", "Rafif", "Pemantau Suhu Kelas", "", "Kurang fokus", "Latihan di rumah", "Menonjol pada praktik.", "x"],
            ["SMP-017", "Qassim", "", "Teliti merakit.", "", "", "Draft lain", ""]],
    }
    with tempfile.TemporaryDirectory() as d:
        d = Path(d)
        (d / "smp.xlsx").write_bytes(_xlsx_uji(wb))
        pen = baca_penilaian(d / "smp.xlsx")
        r = pen["SMP-022"]
        assert r["nama"] == "Rafif Ahnaf Rabbani" and r["panggilan"] == "Rafif"
        assert r["pertemuan"][10] == {"challenge": ["easy", "medium"], "tanya_jawab": 2}
        assert r["pertemuan"][11] == {"challenge": ["easy", "hard"], "tanya_jawab": 0}
        assert r["poin"] == 39 and r["ranking"] == 2
        assert r["proyek"] == "Pemantau Suhu Kelas" and r["kekuatan"] == "Menonjol pada praktik."  # kosong -> draft
        assert pen["SMP-017"]["kekuatan"] == "Teliti merakit." and pen["SMP-017"]["panggilan"] == ""
        assert pen["SMP-099"]["pindah"]

        # foto mentah dari HP di Google Drive: diunduh sebagai zip (folder "Foto Portofolio/<ID Siswa>/...")
        # -> dikecilkan, arah diperbaiki, EXIF/GPS dibuang, nama file dirapikan, keterangan dari nama file
        from PIL import Image
        def foto_hp(w=4000, h=3000, gps=True, fmt="JPEG"):
            import io
            import random
            acak = random.Random(w * h).randbytes(80 * 60 * 3)  # gradasi + bintik, mirip foto asli
            img = Image.blend(Image.frombytes("RGB", (80, 60), acak).resize((w, h), Image.BICUBIC),
                              Image.effect_noise((w, h), 12).convert("RGB"), 0.15)
            exif = Image.Exif()
            if gps:
                exif[0x8825] = {1: "S", 2: (6.0, 12.0, 30.0)}  # GPSInfo
            exif[0x0112] = 6  # Orientation: HP diputar 90 derajat
            buf = io.BytesIO()
            img.save(buf, fmt, quality=95, exif=exif.tobytes()) if fmt == "JPEG" else img.save(buf, fmt)
            return buf.getvalue()

        mentah = foto_hp()
        assert len(mentah) > BATAS_FOTO_KB * 1024 and b"Exif" in mentah[:200]
        zp = d / "drive-download.zip"
        with zipfile.ZipFile(zp, "w") as z:
            z.writestr("Foto Portofolio/SMP-022/P11 Merakit Sensor.JPG", mentah)
            z.writestr("Foto Portofolio/SMP-022/proyek akhir.jpeg", foto_hp(1200, 900, gps=False))
            z.writestr("Foto Portofolio/SMP-022/desktop.ini", b"x")  # file sampah Drive/Windows dilewati
        lokal = d / "drive-sinkron"  # Google Drive for Desktop: folder biasa
        (lokal / "SMP-022").mkdir(parents=True)
        (lokal / "SMP-022/suasana_kelas.png").write_bytes(foto_hp(800, 600, gps=False, fmt="PNG"))

        peta = {"SMP-022": "smp-07", "SMP-017": "smp-07", "SMP-099": "smp-07"}
        out = d / "out"
        assert bangun(pen, out, [zp, lokal], peta) == {}
        data = json.loads((out / "smp-07/siswa/rafif/data.json").read_text(encoding="utf-8"))
        teks = json.dumps(data, ensure_ascii=False)
        assert data["nama"] == "Rafif Ahnaf Rabbani" and data["anggota"] == ["Muhammad Qassim"]
        assert data["poin"] == 39 and data["lencana"] == 4 and data["peringkat"] == 2
        p10 = data["pertemuan"][9]
        assert [c["nama"] for c in p10["challenge"]] == ["Laptop Siap Tempur", "Lampu Disko"] and p10["tanya_jawab"] == 2
        assert data["proyek_akhir"]["judul"] == "Pemantau Suhu Kelas" and data["proyek_akhir"]["foto"] == "proyek-akhir.jpg"
        assert sorted((f["file"], f["p"], f["keterangan"]) for f in data["foto"]) == [
            ("p11-merakit-sensor.jpg", 11, "Merakit Sensor"), ("suasana-kelas.jpg", None, "Suasana kelas")], data["foto"]
        assert data["catatan_tutor"] == "Menonjol pada praktik."
        for rahasia in ["0811111", "0822222", "Bapak Rahasia", "123", "Kurang fokus", "Latihan di rumah",
                        "rahasia internal", "internal gradebook"]:
            assert rahasia not in teks, rahasia
        hasil_foto = out / "smp-07/siswa/rafif/foto/p11-merakit-sensor.jpg"
        assert masalah_foto(hasil_foto) is None  # JPEG asli, <= 500 KB, tanpa EXIF/XMP
        with Image.open(hasil_foto) as im:
            assert max(im.size) <= 1600 and im.size[0] < im.size[1]  # diputar sesuai Orientation (potret)
            assert not im.getexif()
        assert not (out / "smp-07/siswa/rafif/foto/desktop.ini").exists()
        q = json.loads((out / "smp-07/siswa/qassim/data.json").read_text(encoding="utf-8"))
        assert q["panggilan"] == "Qassim" and q["peringkat"] is None and q["foto"] == []
        assert not (out / "smp-07/siswa/sudah").exists()  # status Pindah tidak dibangun

        # foto yang tidak bisa dibaca (HEIC iPhone, file rusak) -> semua ditolak dengan pesan, hasil lama tetap utuh
        (lokal / "SMP-022/IMG_0001.HEIC").write_bytes(b"\x00\x00\x00\x18ftypheic")
        (lokal / "SMP-022/rusak.jpg").write_bytes(b"bukan gambar")
        m = bangun(pen, out, [zp, lokal], peta)["SMP-022"]
        assert any("HEIC" in x for x in m) and any("rusak.jpg" in x for x in m), m
        assert (out / "smp-07/siswa/rafif/data.json").exists()
        (lokal / "SMP-022/IMG_0001.HEIC").unlink()
        (lokal / "SMP-022/rusak.jpg").unlink()
        foto = [zp, lokal]

        # ID di kelompok.json yang tidak ada di spreadsheet -> ditolak dengan pesan
        assert "SMP-404" in bangun(pen, out, foto, {**peta, "SMP-404": "smp-07"})

        # siswa yang dikeluarkan dari kelompok ikut hilang dari hasil
        assert bangun(pen, out, foto, {"SMP-022": "smp-07"}) == {}
        assert not (out / "smp-07/siswa/qassim").exists() and (out / "smp-07/siswa/rafif").exists()

        assert buat_slug("M. Zaidan Altamis", t := set()) == "zaidan" and buat_slug("Zaidan Riqki", t) == "zaidan-riqki"

        assert bangun_contoh(d / "contoh") == {}
        assert (d / "contoh/smp-00/siswa/fulan/index.html").exists()

    # setiap ID di tools/kelompok.json unik dan sesuai jenjang kelompoknya
    peta = kelompok_siswa()
    assert peta and all(sid[:3].lower() == dev[:3] for sid, dev in peta.items())
    print("cek OK")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["bangun"] and len(a) > 1:
        foto = [a[i + 1] for i, x in enumerate(a) if x == "--foto" and i + 1 < len(a)]
        keluar = a[a.index("--keluar") + 1] if "--keluar" in a else ROOT / "dist/portofolio"
        berkas = [x for i, x in enumerate(a[1:], 1) if not x.startswith("--") and a[i - 1] not in ("--foto", "--keluar")]
        penilaian = {}
        for b in berkas:
            penilaian.update(baca_penilaian(b))
        masalah = bangun(penilaian, keluar, foto)
        if masalah:
            sys.exit("DITOLAK, tidak ada yang dibangun:\n" + "\n".join(f"  {k}: {'; '.join(v)}" for k, v in masalah.items()))
    elif a == ["contoh"]:
        bangun_contoh()
    elif a == ["cek"]:
        cek()
    else:
        sys.exit(__doc__)
