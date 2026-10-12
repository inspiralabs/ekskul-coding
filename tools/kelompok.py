"""Paket & deploy website kelompok IoT (<id>.inspiralabs.id).

  py tools/kelompok.py paket                     -> dist/paket/<id>.zip untuk dibagikan (ID sudah terisi)
  py tools/kelompok.py deploy <id> <zip|folder>  -> cek hasil kerja siswa lalu salin ke kelompok/<id>/
  py tools/kelompok.py deploy <id> <zip|folder> --dry-run   -> cek saja, tidak menyalin

Setelah deploy: commit & push kelompok/<id> ke master -> server auto-deploy (docker-compose.yml, service kelompok).
Daftar kelompok: tools/kelompok.json. Setup server: deploy/README.md.
"""
import json, re, shutil, sys, tempfile, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KELOMPOK = {k["id"]: k["nama"] for k in json.loads((ROOT / "tools/kelompok.json").read_text(encoding="utf-8"))}
BATAS_MB = 10
ABAIKAN = {"firmware", ".pio", "node_modules", ".git", ".vscode", "__MACOSX"}


def isi_id(teks, device_id):
    teks = re.sub(r'(MY_DEVICE_ID\s*=\s*")[^"]*"', rf'\g<1>{device_id}"', teks)
    return re.sub(r'(const char\* DEVICE_ID\s*=\s*")[^"]*"', rf'\g<1>{device_id}"', teks)


def api_js(device_id):
    return isi_id((ROOT / device_id[:3] / "api.js").read_text(encoding="utf-8"), device_id)


def paket():
    out = ROOT / "dist/paket"
    shutil.rmtree(out, ignore_errors=True)
    out.mkdir(parents=True)
    for device_id, nama in KELOMPOK.items():
        src = ROOT / device_id[:3]
        with zipfile.ZipFile(out / f"{device_id}.zip", "w", zipfile.ZIP_DEFLATED) as z:
            for f in sorted(src.rglob("*")):
                rel = f.relative_to(src)
                if f.is_dir() or ".pio" in rel.parts or f.suffix == ".cpp":
                    continue
                arc = f"{device_id}/{rel.as_posix()}"
                if f.suffix in (".js", ".ino", ".html", ".md"):
                    teks = isi_id(f.read_text(encoding="utf-8"), device_id)
                    if "&" in nama or "," in nama:
                        teks = teks.replace("Anggota: Nama 1, Nama 2", f"Anggota: {nama}")
                    else:  # individu
                        teks = teks.replace("<h2>Nama Kelompok Kami</h2>", f"<h2>{nama}</h2>")
                        teks = teks.replace("Anggota: Nama 1, Nama 2", "Proyek IoT Smart Room Monitor")
                    z.writestr(arc, teks)
                else:
                    z.write(f, arc)
    print(f"{len(KELOMPOK)} paket dibuat di {out}")


def siapkan(device_id, sumber, tujuan):
    """Salin hasil kerja siswa ke folder tujuan, tanpa firmware & sampah. Return list masalah."""
    sumber = Path(sumber)
    tmp = None
    if sumber.suffix.lower() == ".zip":
        tmp = tempfile.mkdtemp()
        zipfile.ZipFile(sumber).extractall(tmp)
        sumber = Path(tmp)
    kandidat = sorted(sumber.rglob("index.html"), key=lambda p: len(p.parts))
    kandidat = [p for p in kandidat if not ABAIKAN & set(p.relative_to(sumber).parts)]
    if not kandidat:
        return ["index.html tidak ditemukan"]
    web = kandidat[0].parent
    shutil.copytree(web, tujuan, ignore=lambda d, names: [n for n in names if n in ABAIKAN or n.startswith(".")])
    (Path(tujuan) / "api.js").write_text(api_js(device_id), encoding="utf-8")  # selalu pakai versi tutor
    if tmp:
        shutil.rmtree(tmp, ignore_errors=True)
    ukuran = sum(f.stat().st_size for f in Path(tujuan).rglob("*") if f.is_file()) / 1e6
    return [f"ukuran {ukuran:.1f} MB > {BATAS_MB} MB, kecilkan foto dulu"] if ukuran > BATAS_MB else []


def deploy(device_id, sumber, dry_run):
    if device_id not in KELOMPOK:
        sys.exit(f"ID {device_id} tidak ada di tools/kelompok.json")
    staging = Path(tempfile.mkdtemp()) / device_id
    masalah = siapkan(device_id, sumber, staging)
    if masalah:
        sys.exit("DITOLAK: " + "; ".join(masalah))
    print("Isi yang akan di-deploy:", ", ".join(sorted(p.relative_to(staging).as_posix() for p in staging.rglob("*") if p.is_file())))
    if dry_run:
        print("dry-run: folder siap di", staging)
        return
    tujuan = ROOT / "kelompok" / device_id
    shutil.rmtree(tujuan, ignore_errors=True)
    shutil.copytree(staging, tujuan)
    print(f"Tersalin ke kelompok/{device_id}/. Online setelah di-push ke master (webhook server auto-deploy):")
    print(f'  git add kelompok/{device_id} && git commit -m "deploy: website {device_id}" && git push')

def cek():
    """Self-check: paket berisi ID benar, deploy menolak/menerima dengan benar."""
    paket()
    with zipfile.ZipFile(ROOT / "dist/paket/sma-04.zip") as z:
        assert 'MY_DEVICE_ID = "sma-04"' in z.read("sma-04/api.js").decode()
        assert '"sma-04"' in z.read("sma-04/firmware/sma_room_monitor.ino").decode()
        assert "Qowiyyyl" in z.read("sma-04/index.html").decode()
        assert not any(".pio" in n for n in z.namelist())
    with tempfile.TemporaryDirectory() as d:
        z = zipfile.ZipFile(ROOT / "dist/paket/smp-07.zip")
        z.extractall(d)
        siswa = Path(d) / "smp-07"
        (siswa / "api.js").write_text("// dirusak siswa", encoding="utf-8")
        assert siapkan("smp-07", siswa, Path(d) / "out") == []
        out = Path(d) / "out"
        assert not (out / "firmware").exists()
        assert 'MY_DEVICE_ID = "smp-07"' in (out / "api.js").read_text(encoding="utf-8")
        (siswa / "index.html").unlink()
        assert siapkan("smp-07", siswa, Path(d) / "out2") == ["index.html tidak ditemukan"]
    print("cek OK")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["paket"]:
        paket()
    elif a[:1] == ["deploy"] and len(a) >= 3:
        deploy(a[1], a[2], "--dry-run" in a)
    elif a[:1] == ["cek"]:
        cek()
    else:
        sys.exit(__doc__)
