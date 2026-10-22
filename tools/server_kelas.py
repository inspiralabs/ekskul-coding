"""Server kelas lokal: siswa (Windows) mengunduh installer, board ESP32, & proyek dari laptop pengajar.

  py tools/server_kelas.py [--port 8000]   -> jalankan server, siswa buka http://<IP-laptop-ini>:8000
  py tools/server_kelas.py cek             -> self-check

Board ESP32 diambil dari Arduino IDE laptop ini: %LOCALAPPDATA%\\Arduino15 (index + cache staging).
Installer & file lain: taruh di dist/kelas/. Proyek: dist/paket/<id>.zip (dibangun ulang saat start).
Cara pakai di kelas: kurikulum/smp/README.md.
"""
import html as htmllib, json, os, shutil, socket, sys, tempfile, threading, time
import http.client
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent.parent
INDEX = "package_esp32_index.json"
PUTUS = (ConnectionResetError, BrokenPipeError, ConnectionAbortedError)


def arduino15_dir():
    return Path(os.environ.get("LOCALAPPDATA", "")) / "Arduino15"


def daftar(folder):
    """Nama file di folder (kosong kalau folder tidak ada)."""
    folder = Path(folder)
    return sorted(f.name for f in folder.iterdir() if f.is_file()) if folder.is_dir() else []


def index_lokal(arduino15, base_url):
    """Index board ESP32 milik laptop ini, URL arsip yang ada di cache diarahkan ke server ini."""
    path = Path(arduino15) / INDEX
    if not path.is_file():
        return None
    index = json.loads(path.read_text(encoding="utf-8"))
    staged = set(daftar(Path(arduino15) / "staging" / "packages"))
    lokal = lambda nama: f"{base_url}/board/{nama}"
    for pkg in index.get("packages", []):
        # hanya versi yang core-nya ada di cache: versi lain akan diunduh dari internet
        pkg["platforms"] = [p for p in pkg.get("platforms", []) if p.get("archiveFileName") in staged]
        for p in pkg["platforms"]:
            p["url"] = lokal(p["archiveFileName"])
        for tool in pkg.get("tools", []):
            for s in tool.get("systems", []):
                if s.get("archiveFileName") in staged:
                    s["url"] = lokal(s["archiveFileName"])
    return index


def ip_lan():
    """IPv4 laptop ini; adapter yang dipakai ke luar (biasanya WiFi) di urutan pertama."""
    utama = None
    try:  # tidak mengirim paket; hanya menanyakan adapter mana yang dipakai ke luar
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            utama = s.getsockname()[0]
    except OSError:
        pass
    try:
        lain = {a[4][0] for a in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET)}
    except OSError:
        lain = set()
    ips = ([utama] if utama else []) + sorted(lain - {utama})
    return [ip for ip in ips if not ip.startswith("127.")]


def halaman(base, index_ada, kelas_dir, paket_dir):
    e = htmllib.escape
    unduhan = "".join(
        f'<li><a href="/unduh/{e(n)}">{e(n)}</a> <small>{(Path(kelas_dir) / n).stat().st_size / 1e6:.0f} MB</small></li>'
        for n in daftar(kelas_dir)) or "<li>Belum ada file. Pengajar: taruh installer di <code>dist/kelas/</code>.</li>"
    if index_ada:
        board = f"""<div class="kode">{e(base)}/board/{INDEX}</div>
<ol><li>Arduino IDE → <b>File → Preferences</b>.</li>
<li>Di <b>Additional boards manager URLs</b>: <b>hapus alamat lama</b>, tempel alamat di atas → <b>OK</b>.</li>
<li>Buka <b>Boards Manager</b> (ikon papan di kiri), ketik <code>esp32</code>.</li>
<li>Pilih <b>esp32 by Espressif Systems</b> → <b>INSTALL</b>. Unduhannya dari laptop pengajar.</li></ol>"""
    else:
        board = "<p>Maaf, board ESP32 belum terpasang di laptop pengajar.</p>"
    proyek = "".join(f'<a class="proyek" href="/proyek/{e(n)}">{e(n[:-4])}</a>'
                     for n in daftar(paket_dir) if n.endswith(".zip")) or "<p>Belum ada folder proyek.</p>"
    return f"""<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Server Kelas</title>
<style>
body{{font-family:system-ui,sans-serif;max-width:760px;margin:0 auto;padding:16px;background:#faf8f5;color:#2b2320}}
h1{{color:#7a1f2b;margin-bottom:4px}} .alamat{{font-size:2rem;font-weight:800;color:#7a1f2b}}
section{{background:#fff;border-radius:12px;padding:16px;margin:16px 0;box-shadow:0 1px 4px #0002}}
h2{{margin-top:0}} .kode{{font-family:monospace;background:#2b2320;color:#e8d9b5;padding:12px;border-radius:8px;word-break:break-all;user-select:all}}
.proyek{{display:inline-block;margin:4px;padding:8px 12px;border-radius:8px;background:#e8d9b5;color:#5a1620;text-decoration:none;font-weight:700}}
</style></head><body>
<h1>Server Kelas Ekskul Coding</h1><div class="alamat">{e(base)}</div>
<section><h2>1. Unduhan (installer Arduino IDE)</h2><ul>{unduhan}</ul></section>
<section><h2>2. Board ESP32</h2>{board}</section>
<section><h2>3. Folder proyek kelompok</h2><p>Klik milikmu → buka file zip-nya → <b>Extract All</b>.</p>{proyek}</section>
</body></html>"""


def buat_server(port, arduino15, kelas_dir, paket_dir):
    folder = {"board": Path(arduino15) / "staging" / "packages", "unduh": Path(kelas_dir), "proyek": Path(paket_dir)}

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            base = f"http://{self.headers.get('Host') or self.server.server_address[0]}"
            path = self.path.split("?", 1)[0]
            try:
                if path == "/":
                    idx = index_lokal(arduino15, base)  # siap = ada minimal 1 versi board di cache
                    ada = bool(idx) and any(pkg["platforms"] for pkg in idx.get("packages", []))
                    return self.kirim(halaman(base, ada, kelas_dir, paket_dir).encode(), "text/html; charset=utf-8")
                if path == f"/board/{INDEX}":
                    idx = index_lokal(arduino15, base)
                    return self.kirim(json.dumps(idx).encode(), "application/json") if idx else self.send_error(404)
                bagian, _, nama = path.lstrip("/").partition("/")
                nama = unquote(nama)
                # satu-satunya pengaman: nama harus persis salah satu file di folder itu
                if bagian not in folder or nama not in daftar(folder[bagian]):
                    return self.send_error(404)
                f = folder[bagian] / nama
                self.send_response(200)
                self.send_header("Content-Type", "application/octet-stream")
                self.send_header("Content-Length", str(f.stat().st_size))
                if bagian != "board":
                    self.send_header("Content-Disposition", f'attachment; filename="{nama}"')
                self.end_headers()
                with open(f, "rb") as src:
                    shutil.copyfileobj(src, self.wfile, 1024 * 1024)
            except PUTUS:
                pass  # siswa memutus unduhan: abaikan

        def kirim(self, isi, tipe):
            self.send_response(200)
            self.send_header("Content-Type", tipe)
            self.send_header("Content-Length", str(len(isi)))
            self.end_headers()
            self.wfile.write(isi)

        def log_message(self, fmt, *args):
            if self.path != "/" and not self.path.startswith("/favicon"):
                print(f"  {self.client_address[0]:15} {unquote(self.path)}")

    class Server(ThreadingHTTPServer):
        allow_reuse_address = False  # di Windows, reuse membuat 2 server bisa memakai port yang sama diam-diam
        daemon_threads = True

    return Server(("0.0.0.0", port), Handler)


def main(port):
    sys.path.insert(0, str(ROOT / "tools"))
    import kelompok
    kelompok.paket()
    kelas = ROOT / "dist" / "kelas"
    kelas.mkdir(parents=True, exist_ok=True)
    a15 = arduino15_dir()
    try:
        srv = buat_server(port, a15, kelas, ROOT / "dist" / "paket")
    except OSError:
        sys.exit(f"Port {port} dipakai, coba --port 8080")
    print("Server kelas jalan. Siswa buka alamat ini di browser:")
    for i, ip in enumerate(ip_lan() or ["<IP laptop ini>"]):
        print(f"  http://{ip}:{port}" + ("   <- utama (WiFi)" if i == 0 else "   (adapter lain, kalau yang utama tidak bisa)"))
    idx = index_lokal(a15, "")
    if idx:
        versi = ", ".join(p["version"] for pkg in idx["packages"] for p in pkg["platforms"]) or "tidak ada di cache"
        cache = sum((a15 / "staging/packages" / n).stat().st_size for n in daftar(a15 / "staging/packages"))
        print(f"Board ESP32 di cache: {versi} ({cache / 1e9:.1f} GB)")
    else:
        print(f"PERINGATAN: board ESP32 belum terpasang di laptop ini ({a15 / INDEX} tidak ada).")
    print(f"Installer: {len(daftar(kelas))} file di {kelas}")
    print("Ctrl+C untuk berhenti.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("Server berhenti.")


def cek():
    """Self-check dengan Arduino15 palsu di folder sementara."""
    with tempfile.TemporaryDirectory() as d:
        tmp = Path(d)
        a15, kelas, pak = tmp / "A15", tmp / "kelas", tmp / "paket"
        (a15 / "staging/packages").mkdir(parents=True)
        kelas.mkdir()
        pak.mkdir()
        gh = "https://github.com/x/"
        index = {"packages": [{"name": "esp32", "platforms": [
            {"version": "3.3.12", "url": gh + "esp32-core-3.3.12.zip", "archiveFileName": "esp32-core-3.3.12.zip",
             "checksum": "SHA-256:aa", "size": "4",
             "toolsDependencies": [{"packager": "esp32", "name": "esp-x32", "version": "2601"}]},
            {"version": "3.0.0", "url": gh + "esp32-core-3.0.0.zip", "archiveFileName": "esp32-core-3.0.0.zip",
             "checksum": "SHA-256:bb", "size": "4", "toolsDependencies": []}],
            "tools": [{"name": "esp-x32", "version": "2601", "systems": [
                {"host": "x86_64-mingw32", "url": gh + "x32-win.zip", "archiveFileName": "x32-win.zip"},
                {"host": "x86_64-apple-darwin", "url": gh + "x32-mac.tar.gz", "archiveFileName": "x32-mac.tar.gz"}]}]}]}
        (a15 / "package_esp32_index.json").write_text(json.dumps(index), encoding="utf-8")
        (a15 / "staging/packages/esp32-core-3.3.12.zip").write_bytes(b"core")
        (a15 / "staging/packages/x32-win.zip").write_bytes(b"x" * 3_000_000)
        (kelas / "arduino-ide_2.3.10_Windows_64bit.exe").write_bytes(b"exe")
        (pak / "smp-07.zip").write_bytes(b"zip")

        def jalan(srv):
            threading.Thread(target=srv.serve_forever, daemon=True).start()
            return srv.server_address[1]

        def minta(port, path, host=None):
            c = http.client.HTTPConnection("127.0.0.1", port, timeout=5)
            c.request("GET", path, headers={"Host": host or f"127.0.0.1:{port}"})
            r = c.getresponse()
            isi = r.read()
            c.close()
            return r.status, isi

        srv = buat_server(0, a15, kelas, pak)
        port = jalan(srv)
        get = lambda p: minta(port, p)[1]
        status = lambda p: minta(port, p)[0]

        st, isi = minta(port, "/board/package_esp32_index.json", host="10.0.0.5:8000")
        assert st == 200
        idx = json.loads(isi)
        pl = idx["packages"][0]["platforms"]
        assert [p["version"] for p in pl] == ["3.3.12"]
        assert pl[0]["url"] == "http://10.0.0.5:8000/board/esp32-core-3.3.12.zip"
        assert pl[0]["checksum"] == "SHA-256:aa"
        sys_ = {s["host"]: s["url"] for s in idx["packages"][0]["tools"][0]["systems"]}
        assert sys_["x86_64-mingw32"] == "http://10.0.0.5:8000/board/x32-win.zip"
        assert sys_["x86_64-apple-darwin"] == gh + "x32-mac.tar.gz"

        assert get("/board/x32-win.zip") == b"x" * 3_000_000
        assert get("/unduh/arduino-ide_2.3.10_Windows_64bit.exe") == b"exe"
        assert get("/proyek/smp-07.zip") == b"zip"
        html = get("/").decode()
        assert html.startswith("<!doctype html>")
        assert "arduino-ide_2.3.10_Windows_64bit.exe" in html and "smp-07" in html
        assert "/board/package_esp32_index.json" in html

        # nama aneh / traversal -> 404
        for p in ["/board/..%5Cpackage_esp32_index.json", "/unduh/../../x", "/board/tidak-ada.zip",
                  "/proyek/smp-99.zip", "/proyek/..%2Fsmp-07.zip", "/board/", "/lain"]:
            assert status(p) == 404, p

        # siswa memutus unduhan di tengah jalan -> server tetap hidup
        s = socket.create_connection(("127.0.0.1", port))
        s.sendall(b"GET /board/x32-win.zip HTTP/1.1\r\nHost: x\r\n\r\n")
        s.recv(1000)
        s.close()
        assert get("/board/esp32-core-3.3.12.zip") == b"core"

        # unduhan lambat (tidak dibaca) tidak memblokir siswa lain
        lambat = socket.create_connection(("127.0.0.1", port))
        lambat.sendall(b"GET /board/x32-win.zip HTTP/1.1\r\nHost: x\r\n\r\n")
        t0 = time.time()
        assert get("/").startswith(b"<!doctype html>")
        assert time.time() - t0 < 2
        lambat.close()
        srv.shutdown()

        # laptop pengajar belum punya board ESP32 & dist/kelas tidak ada -> tetap jalan
        srv2 = buat_server(0, tmp / "kosong", tmp / "tidak-ada", pak)
        port2 = jalan(srv2)
        st, isi = minta(port2, "/")
        assert st == 200 and "board ESP32 belum terpasang" in isi.decode()
        assert minta(port2, "/board/package_esp32_index.json")[0] == 404

        # port sudah dipakai server lain -> OSError (Windows mengizinkan bind ganda kalau reuse aktif)
        try:
            buat_server(port2, tmp / "kosong", tmp / "tidak-ada", pak).server_close()
            raise AssertionError("port ganda tidak terdeteksi")
        except OSError:
            pass
        srv2.shutdown()

        # index ada tapi cache kosong (URL Espressif ditambah, board belum di-INSTALL) -> jangan tampilkan langkah
        a15b = tmp / "A15b"
        a15b.mkdir()
        (a15b / "package_esp32_index.json").write_text(json.dumps(index), encoding="utf-8")
        srv3 = buat_server(0, a15b, kelas, pak)
        port3 = jalan(srv3)
        isi = minta(port3, "/")[1].decode()
        assert "board ESP32 belum terpasang" in isi and "Boards Manager" not in isi
        srv3.shutdown()
    print("cek OK")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a == ["cek"]:
        cek()
    elif not a:
        main(8000)
    elif a[0] == "--port" and len(a) == 2 and a[1].isdigit():
        main(int(a[1]))
    else:
        sys.exit(__doc__)
