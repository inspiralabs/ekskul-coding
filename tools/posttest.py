"""Post-test di server kelas: soal dari kurikulum/<jenjang>/pNN/sumber/POST_TEST_*.md, jawaban -> .xlsx.

  py tools/posttest.py cek     -> self-check

Dipakai oleh tools/server_kelas.py. Jawaban disimpan di dist/posttest/<id>.jsonl (sumber kebenaran)
dan disalin ke dist/posttest/<id>.xlsx setiap ada jawaban baru, siap di-upload ke Google Sheets.
"""
import json, os, re, sys, tempfile, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from build_bahan_ajar import post_test  # parser yang sama dengan Google Form
from datetime import datetime
from xml.sax.saxutils import escape

HURUF = "ABCD"


def daftar_tes(root=ROOT):
    """{"smp-10": {id, jenjang, n, judul, soal}} untuk semua POST_TEST di kurikulum."""
    tes = {}
    for f in sorted(Path(root, "kurikulum").glob("*/p*/sumber/POST_TEST_P*_*_InspiraLabs.md")):
        m = re.match(r"POST_TEST_P(\d+)_(SMP|SMA)_", f.name)
        n, jenjang = int(m.group(1)), m.group(2)
        materi = f.with_name(f"Materi_Ajar_P{n}_{jenjang}_InspiraLabs.md")
        judul = (materi.read_text(encoding="utf-8").splitlines()[0].split(": ", 1)[-1].strip()
                 if materi.is_file() else f"Pertemuan {n}")
        tid = f"{jenjang.lower()}-{n:02d}"
        tes[tid] = {"id": tid, "jenjang": jenjang, "n": n, "judul": judul.rstrip(" 🏆"), "soal": post_test(f)}
    return tes


def nilai(tes, jawaban):
    """(jumlah benar, nilai 0-100). Jawaban = indeks opsi (0-3) atau None."""
    benar = sum(j == s["kunci"] for j, s in zip(jawaban, tes["soal"]))
    return benar, round(100 * benar / len(tes["soal"]))


def simpan(folder, tes, identitas, jawaban):
    """Tambah satu jawaban ke <id>.jsonl, lalu tulis ulang <id>.xlsx. Return record yang disimpan."""
    folder = Path(folder)
    folder.mkdir(parents=True, exist_ok=True)
    benar, skor = nilai(tes, jawaban)
    rec = {"waktu": datetime.now().strftime("%Y-%m-%d %H:%M:%S"), **identitas,
           "jawaban": [HURUF[j] if j is not None else "" for j in jawaban], "benar": benar, "nilai": skor}
    with open(folder / f"{tes['id']}.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(rec, ensure_ascii=False) + "\n")
    try:
        (folder / f"{tes['id']}.xlsx").write_bytes(rekap_xlsx(tes, baca(folder, tes["id"])))
    except OSError:
        pass  # xlsx sedang dibuka di Excel: jsonl tetap lengkap, unduh lagi dari halaman /guru
    return rec


def baca(folder, tes_id):
    f = Path(folder) / f"{tes_id}.jsonl"
    if not f.is_file():
        return []
    return [json.loads(b) for b in f.read_text(encoding="utf-8").splitlines() if b.strip()]


def rekap_xlsx(tes, rows):
    kepala = ["Waktu", "Nama", "Kelas", "Kelompok"] + [f"Soal {i + 1}" for i in range(len(tes["soal"]))] + ["Benar", "Nilai"]
    isi = [[r["waktu"], r["nama"], r["kelas"], r["kelompok"], *r["jawaban"], r["benar"], r["nilai"]] for r in rows]
    return xlsx_bytes(f"P{tes['n']} {tes['jenjang']}", [kepala] + isi)


def _kolom(i):
    s = ""
    i += 1
    while i:
        i, r = divmod(i - 1, 26)
        s = chr(65 + r) + s
    return s


def xlsx_bytes(nama_sheet, baris):
    """File .xlsx minimal (1 sheet, teks inline, angka numerik, baris pertama tebal)."""
    xml = []
    for r, row in enumerate(baris, 1):
        sel = []
        for c, v in enumerate(row):
            ref = f"{_kolom(c)}{r}"
            gaya = ' s="1"' if r == 1 else ""
            if isinstance(v, (int, float)) and not isinstance(v, bool):
                sel.append(f'<c r="{ref}"{gaya}><v>{v}</v></c>')
            else:
                sel.append(f'<c r="{ref}"{gaya} t="inlineStr"><is><t xml:space="preserve">{escape(str(v))}</t></is></c>')
        xml.append(f'<row r="{r}">{"".join(sel)}</row>')
    sheet = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
             '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
             '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" state="frozen"/></sheetView></sheetViews>'
             '<cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="30" customWidth="1"/></cols>'
             f'<sheetData>{"".join(xml)}</sheetData></worksheet>')
    ns = "http://schemas.openxmlformats.org"
    files = {
        "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<Types xmlns="{ns}/package/2006/content-types">'
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
            '<Default Extension="xml" ContentType="application/xml"/>'
            '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
            '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
            '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
            '</Types>',
        "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<Relationships xmlns="{ns}/package/2006/relationships">'
            f'<Relationship Id="rId1" Type="{ns}/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
            '</Relationships>',
        "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<workbook xmlns="{ns}/spreadsheetml/2006/main" xmlns:r="{ns}/officeDocument/2006/relationships">'
            f'<sheets><sheet name="{escape(nama_sheet[:31])}" sheetId="1" r:id="rId1"/></sheets></workbook>',
        "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<Relationships xmlns="{ns}/package/2006/relationships">'
            f'<Relationship Id="rId1" Type="{ns}/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>'
            f'<Relationship Id="rId2" Type="{ns}/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
            '</Relationships>',
        "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            f'<styleSheet xmlns="{ns}/spreadsheetml/2006/main">'
            '<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts>'
            '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'
            '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'
            '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
            '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'
            '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs>'
            '</styleSheet>',
        "xl/worksheets/sheet1.xml": sheet,
    }
    import io
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        for nama, isi in files.items():
            z.writestr(nama, isi)
    return buf.getvalue()


def baca_xlsx(data):
    """Kebalikan xlsx_bytes (untuk self-check): list baris, angka sebagai int."""
    import io
    import xml.etree.ElementTree as ET
    ns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    root = ET.fromstring(zipfile.ZipFile(io.BytesIO(data)).read("xl/worksheets/sheet1.xml"))
    out = []
    for row in root.find("m:sheetData", ns):
        vals = []
        for c in row:
            if c.get("t") == "inlineStr":
                vals.append(c.find("m:is/m:t", ns).text or "")
            else:
                v = c.find("m:v", ns).text
                vals.append(int(v) if v.lstrip("-").isdigit() else float(v))
        out.append(vals)
    return out


def cek():
    tes = daftar_tes()
    assert "smp-10" in tes and "sma-13" in tes, sorted(tes)
    t = tes["smp-10"]
    assert t["jenjang"] == "SMP" and t["n"] == 10
    assert t["judul"] == "Pasang Arduino IDE & Kedipkan LED Pertamamu", t["judul"]
    assert len(t["soal"]) == 5 and all(len(s["opsi"]) == 4 for s in t["soal"])
    assert [s["kunci"] for s in t["soal"]] == [1, 0, 2, 3, 1]  # kunci P10 SMP: B A C D B

    assert nilai(t, [1, 0, 2, 3, 1]) == (5, 100)
    assert nilai(t, [1, 0, 0, 0, None]) == (2, 40)

    with tempfile.TemporaryDirectory() as d:
        folder = Path(d)
        r = simpan(folder, t, {"nama": "Siswa Uji", "kelas": "8A", "kelompok": "smp-07"}, [1, 0, 2, 3, 0])
        assert r["benar"] == 4 and r["nilai"] == 80 and r["jawaban"] == ["B", "A", "C", "D", "A"]
        simpan(folder, t, {"nama": "Siswa <Dua> & \"Tiga\"", "kelas": "8B", "kelompok": "smp-01"}, [0, 0, 0, 0, 0])
        rows = baca(folder, "smp-10")
        assert [x["nama"] for x in rows] == ["Siswa Uji", 'Siswa <Dua> & "Tiga"']

        xlsx = folder / "smp-10.xlsx"
        assert xlsx.is_file()
        sel = baca_xlsx(xlsx.read_bytes())
        assert sel[0][:4] == ["Waktu", "Nama", "Kelas", "Kelompok"] and sel[0][-2:] == ["Benar", "Nilai"]
        assert sel[1][1:4] == ["Siswa Uji", "8A", "smp-07"] and sel[1][-2:] == [4, 80]
        assert sel[2][1] == 'Siswa <Dua> & "Tiga"' and sel[2][-1] == 20
        with zipfile.ZipFile(xlsx) as z:  # bagian wajib file Excel
            assert {"[Content_Types].xml", "_rels/.rels", "xl/workbook.xml",
                    "xl/_rels/workbook.xml.rels", "xl/worksheets/sheet1.xml"} <= set(z.namelist())

        # file xlsx sedang dibuka di Excel (terkunci) -> jawaban tetap tersimpan di jsonl
        os.chmod(xlsx, 0o444)
        try:
            simpan(folder, t, {"nama": "Saat Terkunci", "kelas": "8C", "kelompok": "smp-02"}, [1, 0, 2, 3, 1])
        finally:
            os.chmod(xlsx, 0o666)
        assert baca(folder, "smp-10")[-1]["nama"] == "Saat Terkunci"
        assert baca(folder, "sma-10") == []
    print("cek OK")


if __name__ == "__main__":
    if sys.argv[1:] == ["cek"]:
        cek()
    else:
        sys.exit(__doc__)
