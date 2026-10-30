"""Server kelas lokal: post-test, paket proyek kelompok, dan tautan dashboard, dari laptop pengajar.

  py tools/server_kelas.py [--port 8000] [--tes p2-10]
      -> siswa buka http://<IP-laptop-ini>:8000 ; --tes membuka post-test sejak awal
         contoh --tes: p2-10 (SMP & SMA P2-P10), sma-p3-5, p11, smp-10,sma-10
  py tools/server_kelas.py cek   -> self-check

Pengajar membuka http://127.0.0.1:8000/guru di laptop ini untuk buka/tutup post-test dan unduh nilai (.xlsx).
Soal: kurikulum/<jenjang>/pNN/sumber/POST_TEST_*.md. Jawaban: dist/posttest/<id>.jsonl + <id>.xlsx.
Proyek: dist/paket/<id>.zip (dibangun ulang saat start). Cara pakai di kelas: kurikulum/smp/README.md.
"""
import html as htmllib, json, re, shutil, socket, sys, tempfile, threading
import http.client
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlencode

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
import posttest  # noqa: E402

PUTUS = (ConnectionResetError, BrokenPipeError, ConnectionAbortedError)
MAKS_BODY = 64 * 1024
KONTROL = re.compile(r"[\x00-\x1f\x7f\u2028\u2029\x85]")  # karakter tak terlihat dari salin-tempel
e = htmllib.escape


def daftar(folder):
    """Nama file di folder (kosong kalau folder tidak ada)."""
    folder = Path(folder)
    return sorted(f.name for f in folder.iterdir() if f.is_file()) if folder.is_dir() else []


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


def boleh_guru_dari(ip, ip_laptop):
    """Halaman pengajar hanya untuk laptop ini sendiri (localhost atau IP-nya sendiri)."""
    return ip in ("127.0.0.1", "::1") or ip in ip_laptop


def nama_kelompok():
    """{device_id: [nama anggota]} dari tools/kelompok.json (kosong kalau tidak ada)."""
    try:
        data = json.loads((ROOT / "tools" / "kelompok.json").read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}
    return {k["id"]: [n.strip() for n in k["nama"].replace("&", ",").split(",") if n.strip()] for k in data}


# ---------------------------------------------------------------- tampilan

CSS = """
:root{--maroon:#7a1f2b;--maroon-tua:#5a1620;--emas:#c9a24b;--emas-muda:#f3e8cf;--latar:#faf8f5;
--teks:#2b2320;--abu:#6b5f58;--garis:#e8dfd2;--hijau:#22684a;--merah:#b3261e;--r:14px}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--latar);color:var(--teks);font:17px/1.55 "Segoe UI",system-ui,-apple-system,Roboto,sans-serif}
a{color:var(--maroon)}
.bungkus{max-width:880px;margin:0 auto;padding:20px 16px 96px}
.atas{background:var(--maroon);color:#fff}
.atas .bungkus{padding-top:28px;padding-bottom:28px}
.merek{margin:0;font-size:.85rem;font-weight:700;color:var(--emas-muda)}
.atas h1{margin:6px 0 6px;font-size:clamp(1.7rem,6vw,2.4rem);line-height:1.15}
.atas p.sub{margin:0;max-width:52ch;color:#f6ecee}
.kembali{display:inline-block;margin-bottom:10px;color:var(--emas-muda);font-weight:700;text-decoration:none}
.kembali:hover{text-decoration:underline}
h2{font-size:1.35rem;margin:36px 0 12px}
.tab-jenjang{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:6px;margin:0 0 4px;background:#fff;
border:1px solid var(--garis);border-radius:var(--r)}
.tab-jenjang a{display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;border-radius:10px;
font-weight:800;text-decoration:none;color:var(--maroon-tua)}
.tab-jenjang a:hover{background:var(--emas-muda)}
.tab-jenjang a[aria-current]{background:var(--maroon);color:#fff}
.tab-jenjang small{font-weight:600;opacity:.8}
.catatan{margin:0 0 12px;color:var(--abu)}
.daftar-tes{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:10px}
.tes-baris{display:flex;align-items:center;gap:12px;min-height:64px;padding:10px 14px;background:#fff;
border:2px solid var(--garis);border-radius:var(--r);color:var(--teks);text-decoration:none}
.tes-baris:hover{border-color:var(--emas)}
.tes-baris:focus-visible{outline:3px solid var(--emas);outline-offset:2px}
.tes-baris .no{flex:none;display:grid;place-items:center;width:46px;height:40px;border-radius:10px;
background:var(--emas-muda);color:var(--maroon-tua);font-weight:800}
.tes-baris .judul{flex:1;font-weight:700;line-height:1.3}
.tes-baris .mulai{flex:none;font-weight:800;color:var(--maroon);font-size:.95rem}
.pilih-awal{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px}
.pilih-awal a{display:flex;flex-direction:column;gap:4px;padding:28px 20px;background:#fff;border:2px solid var(--garis);
border-radius:var(--r);text-decoration:none;color:var(--abu)}
.pilih-awal a:hover{border-color:var(--maroon)}
.pilih-awal a:focus-visible{outline:3px solid var(--emas);outline-offset:2px}
.pilih-awal b{font-size:2.6rem;line-height:1;color:var(--maroon)}
.tombol{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border:0;
border-radius:10px;background:var(--maroon);color:#fff;font:inherit;font-weight:800;text-decoration:none;cursor:pointer;white-space:nowrap}
.tombol:hover{background:var(--maroon-tua)}
.tombol.kedua{background:var(--emas-muda);color:var(--maroon-tua)}
.tombol.kedua:hover{background:var(--emas)}
.tombol:focus-visible,input:focus-visible,select:focus-visible,.opsi:focus-within{outline:3px solid var(--emas);outline-offset:2px}
.kosong-kartu{background:#fff;border:2px dashed var(--garis);border-radius:var(--r);padding:20px;color:var(--abu)}
.kosong-kartu p{margin:0 0 12px}
.cari{width:100%;min-height:48px;padding:10px 14px;font:inherit;border:2px solid var(--garis);border-radius:10px;background:#fff;margin-bottom:6px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.kartu{display:flex;flex-direction:column;background:#fff;border:1px solid var(--garis);border-radius:var(--r);padding:16px}
.kartu-atas{display:flex;justify-content:space-between;align-items:center;gap:8px}
.id{font-family:Consolas,ui-monospace,monospace;font-weight:800;font-size:1.15rem;color:var(--maroon)}
.jumlah{font-size:.8rem;font-weight:700;color:var(--maroon-tua);background:var(--emas-muda);border-radius:6px;padding:2px 8px}
.anggota{list-style:none;padding:0;margin:10px 0 14px;font-size:.95rem;line-height:1.5;flex:1}
.aksi{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.aksi .tombol{min-height:44px;padding:0 10px;font-size:.92rem}
.kosong{color:var(--abu);font-style:italic}
form .blok{background:#fff;border:1px solid var(--garis);border-radius:var(--r);padding:20px;margin-bottom:14px}
fieldset{border:0;margin:0;padding:0;min-width:0}
legend{padding:0;font-weight:800;font-size:1.1rem;margin-bottom:12px}
label.isian{display:block;font-weight:700;margin:12px 0 6px}
input[type=text],select{width:100%;min-height:48px;padding:10px 12px;font:inherit;border:2px solid var(--garis);border-radius:10px;background:#fff;color:var(--teks)}
legend{float:left;width:100%}
fieldset>legend+*{clear:both}
.nomor{display:block;font-size:.85rem;font-weight:800;color:var(--maroon)}
.tanya{display:block;margin:4px 0 6px;font-weight:700;font-size:1.05rem}
pre.kode{background:var(--teks);color:#f3e8cf;padding:12px;border-radius:10px;overflow-x:auto;font-size:.9rem}
.opsi{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;margin-top:8px;border:2px solid var(--garis);border-radius:10px;cursor:pointer;background:#fff}
.opsi:hover{border-color:var(--emas)}
.opsi input{position:absolute;opacity:0;width:1px;height:1px}
.huruf{flex:none;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;border:2px solid var(--maroon);color:var(--maroon);font-weight:800;font-size:.9rem}
.opsi:has(input:checked){border-color:var(--maroon);background:#fbf3f4}
.opsi:has(input:checked) .huruf,.opsi input:checked+.huruf{background:var(--maroon);color:#fff}
.galat{background:#fdecea;border:2px solid var(--merah);color:#5c1410;border-radius:var(--r);padding:14px 18px;margin-bottom:14px}
.galat ul{margin:6px 0 0;padding-left:20px}
.blok.salah{border-color:var(--merah)}
.bawah{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid var(--garis)}
.bawah .isi{max-width:880px;margin:0 auto;padding:10px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between}
.progres{font-weight:700;color:var(--abu)}
.selesai{text-align:center;padding-top:40px}
.selesai svg{width:84px;height:84px}
.selesai h1{font-size:clamp(1.6rem,6vw,2.2rem);margin:14px 0 8px;color:var(--maroon)}
.selesai p{max-width:46ch;margin:0 auto 20px;color:var(--abu)}
table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--garis);border-radius:var(--r);overflow:hidden}
th,td{text-align:left;padding:12px;border-bottom:1px solid var(--garis);vertical-align:middle}
th{font-size:.85rem;color:var(--abu)}
td.angka{white-space:nowrap}
.status-buka{color:var(--hijau);font-weight:800}.status-tutup{color:var(--abu)}
td form{display:inline}
.alamat{font-family:Consolas,ui-monospace,monospace;font-weight:800;font-size:1.3rem;color:var(--maroon)}
[hidden]{display:none!important}
@media (max-width:560px){body{font-size:16px}.grid,.daftar-tes{grid-template-columns:1fr}.pilih-awal a{padding:20px 16px}
.tabel-guru thead{display:none}.tabel-guru tr{display:block;border-bottom:1px solid var(--garis);padding:8px 0}
.tabel-guru td{display:block;border:0;padding:4px 12px}}
"""


def dokumen(judul, isi, script=""):
    return f"""<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(judul)}</title><style>{CSS}</style></head><body>{isi}{script}</body></html>"""


def kepala(judul, sub="", kembali=False):
    """kembali=True -> ke "/", atau string href (mis. "/?j=smp")."""
    href = kembali if isinstance(kembali, str) else "/"
    tautan = f'<a class="kembali" href="{e(href)}">&larr; Kembali ke beranda</a>' if kembali else ""
    return (f'<header class="atas"><div class="bungkus">{tautan}<p class="merek">Ekskul Coding &middot; InspiraLabs</p>'
            f'<h1>{judul}</h1>{f"<p class=sub>{sub}</p>" if sub else ""}</div></header>')


def kartu_proyek(paket_dir, jenjang):
    """Kartu per kelompok satu jenjang ("smp"/"sma"): unduh paket zip + buka dashboard online."""
    nama = nama_kelompok()
    kartu = ""
    for n in daftar(paket_dir):
        if n.endswith(".zip") and n.startswith(jenjang + "-"):
            dev, anggota = n[:-4], nama.get(n[:-4], [])
            label = "individu" if len(anggota) == 1 else f"{len(anggota)} orang" if anggota else ""
            cari = e(" ".join([dev] + anggota).lower())
            kartu += f"""<article class="kartu" data-cari="{cari}">
<div class="kartu-atas"><span class="id">{e(dev)}</span>{f'<span class="jumlah">{label}</span>' if label else ""}</div>
<ul class="anggota">{"".join(f"<li>{e(a)}</li>" for a in anggota)}</ul>
<div class="aksi"><a class="tombol kedua" href="/proyek/{e(n)}" download>Unduh paket</a>
<a class="tombol" href="https://{e(dev)}.inspiralabs.id" target="_blank" rel="noopener">Buka dashboard</a></div></article>"""
    return f'<div class="grid">{kartu}</div>' if kartu else ""


JS_CARI = """<script>
var c=document.getElementById("cari");
if(c)c.addEventListener("input",function(){var q=this.value.trim().toLowerCase(),n=0;
document.querySelectorAll(".kartu").forEach(function(k){var ok=k.dataset.cari.indexOf(q)!==-1;k.hidden=!ok;n+=ok;});
document.getElementById("kosong").hidden=n>0;});
</script>"""

JENJANG = ("smp", "sma")


def jumlah_buka(tes, buka, jenjang):
    return sum(1 for t in buka if t in tes and tes[t]["jenjang"].lower() == jenjang)


def halaman_pilih(tes, buka):
    """Beranda sebelum jenjang dipilih: dua pilihan besar SMP / SMA."""
    tile = "".join(
        f'<a href="/?j={j}"><b>{j.upper()}</b><span>{f"{n} post-test dibuka" if n else "Belum ada post-test dibuka"}</span></a>'
        for j in JENJANG for n in [jumlah_buka(tes, buka, j)])
    isi = f"""{kepala("Ruang Kelas IoT", "Kamu siswa SMP atau SMA? Pilih dulu, nanti yang tampil hanya post-test dan kelompok jenjangmu.")}
<main class="bungkus"><nav class="pilih-awal" aria-label="Pilih jenjang">{tile}</nav></main>"""
    return dokumen("Ruang Kelas IoT", isi)


def halaman_beranda(tes, buka, paket_dir, jenjang):
    J = jenjang.upper()
    tab = "".join(f'<a href="/?j={j}"{" aria-current=page" if j == jenjang else ""}>{j.upper()}'
                  f'{f"<small>{n} dibuka</small>" if n else ""}</a>'
                  for j in JENJANG for n in [jumlah_buka(tes, buka, j)])
    aktif = sorted((tes[t] for t in buka if t in tes and tes[t]["jenjang"] == J), key=lambda t: t["n"])
    if aktif:
        baris = "".join(f"""<a class="tes-baris" href="/tes/{t['id']}"><span class="no">P{t['n']}</span>
<span class="judul">{e(t['judul'])}</span><span class="mulai">Mulai</span></a>""" for t in aktif)
        bagian_tes = (f'<p class="catatan">Kerjakan post-test pertemuan yang diminta pengajar. '
                      f'Tiap post-test berisi 5 soal pilihan ganda, dikerjakan sendiri.</p><div class="daftar-tes">{baris}</div>')
    else:
        bagian_tes = f"""<div class="kosong-kartu"><p>Belum ada post-test {J} yang dibuka. Tunggu aba-aba pengajar, lalu muat ulang halaman ini.</p>
<button class="tombol kedua" type="button" onclick="location.reload()">Muat ulang</button></div>"""
    proyek = kartu_proyek(paket_dir, jenjang)
    if proyek:
        proyek = f"""<p class="catatan"><b>Unduh paket</b> berisi program ESP32 dan website kelompokmu (buka zip-nya, pilih <b>Extract All</b>).
<b>Buka dashboard</b> menampilkan data sensor kelompokmu yang sudah online.</p>
<input class="cari" id="cari" type="search" placeholder="Ketik namamu atau {jenjang}-07" aria-label="Cari nama atau kode kelompok">
<p class="kosong" id="kosong" hidden>Nama tidak ditemukan. Tanya pengajar kode kelompokmu.</p>{proyek}"""
    else:
        proyek = '<p class="kosong">Paket proyek belum disiapkan pengajar.</p>'
    isi = f"""{kepala(f"Ruang Kelas {J}", "Kerjakan post-test, unduh paket proyek kelompokmu, dan buka dashboard-nya.")}
<main class="bungkus"><nav class="tab-jenjang" aria-label="Jenjang">{tab}</nav>
<h2>Post-test {J}</h2>{bagian_tes}
<h2>Paket proyek &amp; dashboard {J}</h2>{proyek}</main>"""
    return dokumen(f"Ruang Kelas {J}", isi, JS_CARI)


JS_TES = """<script>
var f=document.getElementById("form-tes"),p=document.getElementById("progres"),n=+f.dataset.jumlah;
function hitung(){var t=0;for(var i=1;i<=n;i++)if(f.querySelector('input[name="s'+i+'"]:checked'))t++;
p.textContent=t+" dari "+n+" soal terjawab";}
f.addEventListener("change",hitung);hitung();
f.addEventListener("submit",function(){var b=document.getElementById("kirim");setTimeout(function(){b.disabled=true;b.textContent="Mengirim...";},0);});
</script>"""


def halaman_tes(t, kelompok, nilai_lama=None, galat=()):
    lama = nilai_lama or {}
    nama = nama_kelompok()
    pilihan = "".join(
        f'<option value="{e(k)}"{" selected" if lama.get("kelompok") == k else ""}>{e(k)}'
        f'{" &ndash; " + e(", ".join(nama.get(k, []))) if nama.get(k) else ""}</option>' for k in kelompok)
    soal = ""
    for i, s in enumerate(t["soal"], 1):
        kode = f'<pre class="kode">{e(s["kode"])}</pre>' if s.get("kode") else ""
        opsi = "".join(
            f'<label class="opsi"><input type="radio" name="s{i}" value="{h}" required'
            f'{" checked" if lama.get(f"s{i}") == h else ""}><span class="huruf">{h}</span><span>{e(o)}</span></label>'
            for h, o in zip(posttest.HURUF, s["opsi"]))
        salah = " salah" if any(g.startswith(f"Soal {i} ") for g in galat) else ""
        tanya = re.sub(r"^\d+\.\s*", "", s["q"])  # nomor sudah ada di "Soal i dari n"
        soal += (f'<fieldset class="blok{salah}" id="soal-{i}"><legend><span class="nomor">Soal {i} dari {len(t["soal"])}</span>'
                 f'<span class="tanya">{e(tanya)}</span></legend>{kode}{opsi}</fieldset>')
    kotak_galat = (f'<div class="galat" role="alert"><b>Periksa lagi isianmu:</b><ul>{"".join(f"<li>{e(g)}</li>" for g in galat)}</ul></div>'
                   if galat else "")
    isi = f"""{kepala(f"Post-test P{t['n']} {t['jenjang']}", e(t['judul']), kembali=f"/?j={t['jenjang'].lower()}")}
<main class="bungkus">{kotak_galat}
<form id="form-tes" method="post" action="/tes/{t['id']}" data-jumlah="{len(t['soal'])}">
<fieldset class="blok"><legend>Identitas</legend>
<label class="isian" for="nama">Nama lengkap</label>
<input type="text" id="nama" name="nama" required maxlength="80" autocomplete="name" value="{e(lama.get('nama', ''))}">
<label class="isian" for="kelas">Kelas</label>
<input type="text" id="kelas" name="kelas" required maxlength="20" placeholder="Contoh: 8A" value="{e(lama.get('kelas', ''))}">
<label class="isian" for="kelompok">Kelompok</label>
<select id="kelompok" name="kelompok" required><option value="">Pilih kelompokmu</option>{pilihan}</select>
</fieldset>{soal}
<div class="bawah"><div class="isi"><span class="progres" id="progres" aria-live="polite"></span>
<button class="tombol" id="kirim" type="submit">Kirim jawaban</button></div></div>
</form></main>"""
    return dokumen(f"Post-test P{t['n']} {t['jenjang']}", isi, JS_TES)


def halaman_selesai(t, nama):
    centang = ('<svg viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="40" fill="#22684a"/>'
               '<path d="M24 43l12 12 24-26" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    isi = f"""<main class="bungkus selesai">{centang}<h1>Terima kasih{", " + e(nama) if nama else ""}!</h1>
<p>Jawabanmu untuk post-test P{t['n']} {t['jenjang']} sudah tersimpan. Kamu boleh menutup halaman ini.</p>
<a class="tombol kedua" href="/?j={t['jenjang'].lower()}">Kembali ke beranda</a></main>"""
    return dokumen("Terima kasih", isi)


def halaman_info(judul, pesan):
    isi = f'{kepala(e(judul), kembali=True)}<main class="bungkus"><div class="kosong-kartu"><p>{e(pesan)}</p></div></main>'
    return dokumen(judul, isi)


def halaman_guru(tes, buka, hasil_dir, port):
    baris = ""
    for t in sorted(tes.values(), key=lambda t: (t["jenjang"] != "SMP", t["jenjang"], t["n"])):
        jml = len(posttest.baca(hasil_dir, t["id"]))
        terbuka = t["id"] in buka
        aksi = "tutup" if terbuka else "buka"
        unduh = (f'<a class="tombol kedua" href="/guru/hasil/{t["id"]}.xlsx">Unduh .xlsx</a>' if jml
                 else '<span class="kosong">belum ada</span>')
        baris += f"""<tr><td><b>P{t['n']} {t['jenjang']}</b><br><span class="kosong">{e(t['judul'])}</span></td>
<td class="{"status-buka" if terbuka else "status-tutup"}">{"Dibuka" if terbuka else "Ditutup"}</td>
<td class="angka">{jml} jawaban</td>
<td><form method="post" action="/guru/{aksi}"><input type="hidden" name="tes" value="{t['id']}">
<button class="tombol{"" if aksi == "buka" else " kedua"}" type="submit">{"Buka" if aksi == "buka" else "Tutup"}</button></form></td>
<td>{unduh}</td></tr>"""
    alamat = "".join(f'<div class="alamat">http://{ip}:{port}</div>' for ip in ip_lan()[:1]) or ""
    isi = f"""{kepala("Halaman Pengajar", "Buka post-test saat siswa siap, tutup setelah selesai, lalu unduh nilainya.", kembali=True)}
<main class="bungkus"><h2>Alamat untuk siswa</h2>{alamat}
<p class="kosong">Halaman ini hanya bisa dibuka dari laptop pengajar. File nilai juga tersimpan otomatis di <code>{e(str(hasil_dir))}</code>.</p>
<h2>Post-test</h2><table class="tabel-guru"><thead><tr><th>Pertemuan</th><th>Status</th><th>Jawaban</th><th>Akses siswa</th><th>Nilai</th></tr></thead>
<tbody>{baris}</tbody></table></main>"""
    return dokumen("Halaman Pengajar", isi)


# ---------------------------------------------------------------- server

def periksa_jawaban(t, form, kelompok_sah):
    """(identitas, jawaban, daftar galat) dari isian form."""
    ambil = lambda k: (form.get(k) or [""])[0].strip()
    galat = []
    nama, kelas, kel = ambil("nama"), ambil("kelas"), ambil("kelompok")
    if KONTROL.search(nama) or KONTROL.search(kelas):
        galat.append("Nama atau kelas berisi karakter yang tidak dikenali. Ketik ulang tanpa menyalin-tempel.")
    if not nama:
        galat.append("Nama lengkap belum diisi.")
    elif len(nama) > 80:
        galat.append("Nama terlalu panjang (maksimal 80 huruf).")
    if not kelas:
        galat.append("Kelas belum diisi.")
    elif len(kelas) > 20:
        galat.append("Kelas terlalu panjang.")
    if kel not in kelompok_sah:
        galat.append("Pilih kelompokmu dari daftar.")
    jawaban = []
    for i in range(1, len(t["soal"]) + 1):
        h = ambil(f"s{i}").upper()
        if h not in tuple(posttest.HURUF[:len(t["soal"][i - 1]["opsi"])]):  # bukan cek substring: "" in "ABCD" bernilai True
            galat.append(f"Soal {i} belum dijawab.")
            jawaban.append(None)
        else:
            jawaban.append(posttest.HURUF.index(h))
    return {"nama": nama, "kelas": kelas, "kelompok": kel}, jawaban, galat


_log = __import__("queue").Queue()


def _cetak_log():
    while True:
        print(_log.get(), flush=True)


def catat(pesan):
    """Log ke konsol lewat thread sendiri: kalau pengajar mengklik jendela konsol (QuickEdit Windows),
    print() membeku, tapi siswa tetap langsung mendapat halaman "Terima kasih"."""
    if not getattr(catat, "jalan", False):
        catat.jalan = True
        threading.Thread(target=_cetak_log, daemon=True).start()
    _log.put(KONTROL.sub("", pesan))


def buat_server(port, paket_dir, hasil_dir, tes=None, buka=(), boleh_guru=None):
    tes = posttest.daftar_tes() if tes is None else tes
    buka = {b for b in buka if b in tes}
    kunci = threading.Lock()
    # IP laptop dicek ulang tiap permintaan: kalau WiFi berganti di tengah kelas, /guru tetap bisa dibuka
    boleh_guru = boleh_guru or (lambda ip: boleh_guru_dari(ip, ip_lan()))
    semua_kelompok = sorted(nama_kelompok()) or sorted(n[:-4] for n in daftar(paket_dir) if n.endswith(".zip"))

    class Handler(BaseHTTPRequestHandler):
        timeout = 120  # laptop yang ditutup di tengah unduhan tidak menahan thread selamanya

        def do_GET(self):
            path = unquote(self.path.split("?", 1)[0])
            try:
                if path == "/":
                    q = parse_qs(self.path.split("?", 1)[1] if "?" in self.path else "")
                    j = (q.get("j") or [""])[0].lower()
                    if j in JENJANG:  # pilihan diingat cookie sesi, jadi buka "/" lagi langsung ke jenjangnya
                        return self.html(halaman_beranda(tes, buka, paket_dir, j), cookie=f"jenjang={j}; Path=/; SameSite=Lax")
                    j = re.search(r"(?:^|;\s*)jenjang=(smp|sma)\b", self.headers.get("Cookie") or "")
                    if j:
                        return self.html(halaman_beranda(tes, buka, paket_dir, j.group(1)))
                    return self.html(halaman_pilih(tes, buka))
                if path.startswith("/proyek/"):
                    return self.berkas(Path(paket_dir), path[len("/proyek/"):])
                if path.startswith("/tes/") and path.endswith("/terima-kasih"):
                    t = tes.get(path[len("/tes/"):-len("/terima-kasih")])
                    if t:
                        q = parse_qs(self.path.split("?", 1)[1] if "?" in self.path else "")
                        nama = KONTROL.sub("", (q.get("nama") or [""])[0])[:80]
                        return self.html(halaman_selesai(t, nama))
                if path.startswith("/tes/"):
                    t = tes.get(path[len("/tes/"):])
                    if not t:
                        return self.html(halaman_info("Tidak ditemukan", "Post-test ini tidak ada."), 404)
                    if t["id"] not in buka:
                        return self.html(halaman_info("Belum dibuka", "Post-test ini belum dibuka pengajar. Tunggu aba-aba, lalu muat ulang."), 403)
                    return self.html(halaman_tes(t, self.kelompok_untuk(t)))
                if path == "/guru" or path.startswith("/guru/"):
                    if not boleh_guru(self.client_address[0]):
                        return self.html(halaman_info("Khusus pengajar", "Halaman ini hanya bisa dibuka dari laptop pengajar."), 403)
                    if path == "/guru":
                        return self.html(halaman_guru(tes, buka, hasil_dir, self.server.server_address[1]))
                    if path.startswith("/guru/hasil/") and path.endswith(".xlsx"):
                        tid = path[len("/guru/hasil/"):-5]
                        if tid in tes:
                            data = posttest.rekap_xlsx(tes[tid], posttest.baca(hasil_dir, tid))
                            return self.kirim(data, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                              f"posttest-{tid}.xlsx")
                self.html(halaman_info("Tidak ditemukan", "Halaman ini tidak ada."), 404)
            except PUTUS:
                pass

        def do_POST(self):
            path = unquote(self.path.split("?", 1)[0])
            try:
                n = int(self.headers.get("Content-Length") or 0)
            except ValueError:
                n = -1
            if n < 0 or n > MAKS_BODY:
                return self.html(halaman_info("Terlalu besar", "Isian terlalu panjang."), 413)
            form = parse_qs(self.rfile.read(n).decode("utf-8", "replace"), keep_blank_values=True)
            try:
                if path.startswith("/tes/"):
                    t = tes.get(path[len("/tes/"):])
                    if not t:
                        return self.html(halaman_info("Tidak ditemukan", "Post-test ini tidak ada."), 404)
                    if t["id"] not in buka:
                        return self.html(halaman_info("Sudah ditutup", "Post-test ini sedang ditutup pengajar. Jawabanmu belum tersimpan, tanya pengajar."), 403)
                    kel = self.kelompok_untuk(t)
                    identitas, jawaban, galat = periksa_jawaban(t, form, kel)
                    if galat:
                        lama = {k: (v or [""])[0] for k, v in form.items()}
                        return self.html(halaman_tes(t, kel, lama, galat), 400)
                    with kunci:
                        posttest.simpan(hasil_dir, t, identitas, jawaban)
                    catat(f"  post-test {t['id']}: {identitas['nama']} ({identitas['kelompok']})")
                    # POST-redirect-GET: refresh di halaman terima kasih tidak mengirim jawaban dua kali
                    self.send_response(303)
                    self.send_header("Location", f"/tes/{t['id']}/terima-kasih?" + urlencode({"nama": identitas["nama"]}))
                    self.send_header("Content-Length", "0")
                    return self.end_headers()
                if path in ("/guru/buka", "/guru/tutup"):
                    if not boleh_guru(self.client_address[0]):
                        return self.html(halaman_info("Khusus pengajar", "Halaman ini hanya bisa dibuka dari laptop pengajar."), 403)
                    tid = (form.get("tes") or [""])[0]
                    if tid in tes:
                        (buka.add if path.endswith("buka") else buka.discard)(tid)
                        catat(f"  post-test {tid} {'DIBUKA' if tid in buka else 'ditutup'}")
                    self.send_response(303)
                    self.send_header("Location", "/guru")
                    self.send_header("Content-Length", "0")
                    return self.end_headers()
                self.html(halaman_info("Tidak ditemukan", "Halaman ini tidak ada."), 404)
            except PUTUS:
                pass

        def kelompok_untuk(self, t):
            return [k for k in semua_kelompok if k.startswith(t["jenjang"].lower() + "-")]

        def html(self, teks, status=200, cookie=None):
            data = teks.encode("utf-8")
            self.send_response(status)
            if cookie:
                self.send_header("Set-Cookie", cookie)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)

        def kirim(self, data, tipe, nama):
            self.send_response(200)
            self.send_header("Content-Type", tipe)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Content-Disposition", f'attachment; filename="{nama}"')
            self.end_headers()
            self.wfile.write(data)

        def berkas(self, folder, nama):
            # satu-satunya pengaman path: nama harus persis salah satu file di folder itu
            if nama not in daftar(folder):
                return self.html(halaman_info("Tidak ditemukan", "File ini tidak ada."), 404)
            f = folder / nama
            self.send_response(200)
            self.send_header("Content-Type", "application/zip")
            self.send_header("Content-Length", str(f.stat().st_size))
            self.send_header("Content-Disposition", f'attachment; filename="{nama}"')
            self.end_headers()
            with open(f, "rb") as src:
                shutil.copyfileobj(src, self.wfile, 1024 * 1024)

        def log_message(self, fmt, *args):
            pass  # konsol hanya mencatat post-test & buka/tutup, supaya mudah dibaca pengajar

    class Server(ThreadingHTTPServer):
        allow_reuse_address = False  # di Windows, reuse membuat 2 server bisa memakai port yang sama diam-diam
        daemon_threads = True

        def handle_error(self, request, client_address):
            # siswa menutup halaman/membatalkan unduhan: hal biasa, jangan cetak traceback ke konsol pengajar
            if isinstance(sys.exc_info()[1], PUTUS):
                return
            super().handle_error(request, client_address)

    return Server(("0.0.0.0", port), Handler)


def masalah_folder_repo(root, folder_windows=None):
    """Pesan untuk tutor kalau repo ada di folder yang tidak boleh ditulis (mis. C:\\Windows\\System32,
    tempat PowerShell "Run as administrator" dimulai); None kalau aman."""
    import os
    folder_windows = folder_windows or os.environ.get("SystemRoot", r"C:\Windows")
    saran = (f"\nFolder repo sekarang: {root}\n"
             "Pindahkan repo ke folder Documents, lalu jalankan lagi dari sana:\n"
             "  1. Buka PowerShell biasa (bukan 'Run as administrator')\n"
             "  2. cd $HOME\\Documents\n"
             "  3. git clone https://github.com/inspiralabs/ekskul-coding.git   (atau extract ZIP ke Documents)\n"
             "  4. cd ekskul-coding ; py tools/server_kelas.py --tes smp-10")
    if str(root).lower().startswith(str(folder_windows).lower().rstrip("\\") + "\\"):
        return "Repo tersimpan di folder sistem Windows, yang tidak boleh ditulis." + saran
    try:
        (Path(root) / "dist").mkdir(exist_ok=True)
        uji = Path(root) / "dist" / ".uji-tulis"
        uji.write_text("ok")
        uji.unlink()
    except OSError:
        return "Folder repo tidak bisa ditulis (nilai post-test tidak akan bisa disimpan)." + saran
    return None


def kode_tes(teks):
    """"p2-10" -> smp-02..smp-10 + sma-02..sma-10; "smp-10" tetap; bisa digabung dengan koma."""
    hasil = set()
    for x in teks.lower().replace(" ", "").split(","):
        m = re.fullmatch(r"(?:(smp|sma)-?)?p(\d+)(?:-p?(\d+))?", x)
        if m:
            jenjang = [m.group(1)] if m.group(1) else ["smp", "sma"]
            awal = int(m.group(2))
            hasil |= {f"{j}-{n:02d}" for j in jenjang for n in range(awal, int(m.group(3) or awal) + 1)}
        elif x:
            hasil.add(x)
    return hasil


def main(port, buka):
    masalah = masalah_folder_repo(ROOT)
    if masalah:
        sys.exit(masalah)
    import kelompok
    kelompok.paket()
    tes = posttest.daftar_tes()
    tidak_ada = sorted(set(buka) - set(tes))
    if tidak_ada:
        sys.exit(f"Post-test tidak dikenal: {', '.join(tidak_ada)}. Pilihan: {', '.join(sorted(tes))}")
    hasil = ROOT / "dist" / "posttest"
    try:
        srv = buat_server(port, ROOT / "dist" / "paket", hasil, tes, buka)
    except OSError:
        sys.exit(f"Port {port} dipakai, coba --port 8080")
    print("Server kelas jalan. Siswa buka alamat ini di browser:")
    for i, ip in enumerate(ip_lan() or ["<IP laptop ini>"]):
        print(f"  http://{ip}:{port}" + ("   <- utama (WiFi)" if i == 0 else "   (adapter lain, kalau yang utama tidak bisa)"))
    print(f"Halaman pengajar (buka/tutup post-test, unduh nilai): http://127.0.0.1:{port}/guru")
    print(f"Post-test dibuka: {', '.join(sorted(buka)) or 'belum ada (buka dari halaman pengajar)'}")
    print(f"Nilai tersimpan di: {hasil}")
    print("Ctrl+C untuk berhenti.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("Server berhenti.")


def cek():
    """Self-check: post-test, halaman pengajar, paket proyek, keamanan path."""
    import posttest
    import urllib.parse

    def jalan(srv):
        threading.Thread(target=srv.serve_forever, daemon=True).start()
        return srv.server_address[1]

    def minta(port, path, data=None, host=None):
        c = http.client.HTTPConnection("127.0.0.1", port, timeout=10)
        body = urllib.parse.urlencode(data, doseq=True).encode() if isinstance(data, dict) else data
        hdr = {"Host": host or f"127.0.0.1:{port}"}
        if body is not None:
            hdr["Content-Type"] = "application/x-www-form-urlencoded"
        c.request("POST" if body is not None else "GET", path, body=body, headers=hdr)
        r = c.getresponse()
        isi = r.read()
        c.close()
        return r.status, isi

    benar10 = {"nama": "Siswa Uji", "kelas": "8A", "kelompok": "smp-07",
               "s1": "B", "s2": "A", "s3": "C", "s4": "D", "s5": "B"}

    # opsi E hanya sah di soal 5 opsi (P3-P8), bukan di soal 4 opsi (P9 ke atas)
    semua = posttest.daftar_tes()
    assert kode_tes("p2-4") == {"smp-02", "smp-03", "smp-04", "sma-02", "sma-03", "sma-04"}
    assert kode_tes("sma-p9-10, P11,smp-10") == {"sma-09", "sma-10", "smp-11", "sma-11", "smp-10"}
    isian = lambda h: {k: [v] for k, v in {**benar10, "s1": h}.items()}
    assert periksa_jawaban(semua["smp-10"], isian("E"), ["smp-07"])[2] == ["Soal 1 belum dijawab."]
    assert periksa_jawaban(semua["smp-03"], isian("E"), ["smp-07"])[1][0] == 4

    with tempfile.TemporaryDirectory() as d:
        tmp = Path(d)
        pak, hasil = tmp / "paket", tmp / "hasil"
        pak.mkdir()
        (pak / "smp-07.zip").write_bytes(b"zip")
        (pak / "sma-04.zip").write_bytes(b"zip")

        srv = buat_server(0, pak, hasil, buka={"smp-10"}, boleh_guru=lambda ip: True)
        port = jalan(srv)
        get = lambda p: minta(port, p)

        # beranda tanpa jenjang: pilih SMP / SMA dulu, belum ada daftar tes
        st, isi = get("/")
        html = isi.decode()
        assert st == 200 and html.startswith("<!doctype html>")
        assert 'href="/?j=smp"' in html and 'href="/?j=sma"' in html and "/tes/" not in html
        assert "1 post-test dibuka" in html and "Belum ada post-test dibuka" in html

        # beranda SMP: post-test & kelompok SMP saja, kartu proyek dengan unduh + dashboard
        st, isi = get("/?j=smp")
        html = isi.decode()
        assert st == 200 and 'href="/tes/smp-10"' in html and "Pasang Arduino IDE &amp; Kedipkan LED Pertamamu" in html
        assert 'href="/tes/sma-10"' not in html and "sma-04" not in html
        assert 'href="/proyek/smp-07.zip"' in html and 'href="https://smp-07.inspiralabs.id"' in html
        assert "Rafif Ahnaf Rabbani" in html and '<a href="/?j=smp" aria-current=page>' in html
        st, isi = get("/?j=sma")
        assert 'href="/proyek/sma-04.zip"' in isi.decode() and "smp-07" not in isi.decode()
        assert "Belum ada post-test SMA yang dibuka" in isi.decode()

        # pilihan jenjang diingat: "/" dengan cookie langsung ke beranda jenjang itu
        c = http.client.HTTPConnection("127.0.0.1", port, timeout=10)
        c.request("GET", "/?j=sma")
        r = c.getresponse(); r.read()
        assert r.getheader("Set-Cookie", "").startswith("jenjang=sma;")
        c.request("GET", "/", headers={"Cookie": "lain=1; jenjang=sma"})
        assert "Ruang Kelas SMA" in c.getresponse().read().decode()
        c.close()
        assert "package_esp32_index" not in html and "Boards Manager" not in html and "/unduh/" not in html  # board & installer dihapus
        for p in ["/board/package_esp32_index.json", "/unduh/x.exe", "/proyek/..%2Fsmp-07.zip",
                  "/proyek/smp-99.zip", "/tes/smp-99", "/lain"]:
            assert get(p)[0] == 404, p
        assert get("/proyek/smp-07.zip") == (200, b"zip")

        # halaman soal: 5 soal, pilihan kelompok hanya jenjang SMP
        st, isi = get("/tes/smp-10")
        html = isi.decode()
        assert st == 200 and html.count('type="radio"') == 20
        assert 'name="nama"' in html and 'name="kelas"' in html and 'value="smp-07"' in html
        # pilihan tetap terlihat di browser lama tanpa :has() (Firefox ESR 115, WebView lama)
        assert ".opsi input:checked+.huruf" in html
        assert 'value="sma-04"' not in html
        assert get("/tes/sma-10")[0] == 403  # belum dibuka pengajar

        def kirim_ikuti(data):
            """POST jawaban; harus dialihkan (303) ke halaman terima kasih supaya refresh tidak mengirim ulang."""
            c = http.client.HTTPConnection("127.0.0.1", port, timeout=10)
            c.request("POST", "/tes/smp-10", urllib.parse.urlencode(data),
                      {"Content-Type": "application/x-www-form-urlencoded"})
            r = c.getresponse()
            r.read()
            lokasi = r.getheader("Location") or ""
            assert r.status == 303 and lokasi.startswith("/tes/smp-10/terima-kasih"), (r.status, lokasi)
            return get(lokasi)

        # kirim jawaban benar -> dialihkan ke terima kasih, nilai TIDAK ditampilkan, tersimpan
        st, isi = kirim_ikuti(benar10)
        html = isi.decode()
        assert st == 200 and "Terima kasih" in html and "Siswa Uji" in html
        assert len(posttest.baca(hasil, "smp-10")) == 1  # membuka halaman terima kasih tidak menyimpan apa pun
        st, isi = get("/tes/smp-10/terima-kasih")  # tanpa nama pun tetap tampil rapi
        assert st == 200 and "Terima kasih!" in isi.decode()
        terlihat = html.split("</style>", 1)[1]
        assert "nilai" not in terlihat.lower() and "100" not in terlihat
        r = posttest.baca(hasil, "smp-10")[-1]
        assert (r["nama"], r["kelompok"], r["benar"], r["nilai"]) == ("Siswa Uji", "smp-07", 5, 100)
        assert (hasil / "smp-10.xlsx").is_file()

        # isian tidak lengkap / tidak sah -> 400, isian lama tetap terisi, tidak tersimpan
        kurang = dict(benar10, s3="")
        st, isi = minta(port, "/tes/smp-10", kurang)
        assert st == 400 and "Soal 3 belum dijawab" in isi.decode() and 'value="Siswa Uji"' in isi.decode()
        for salah in [dict(benar10, nama="  "), dict(benar10, kelompok="sma-04"), dict(benar10, s1="E"),
                      dict(benar10, nama="x" * 81), dict(benar10, nama="Ali\x0bBaba"),
                      dict(benar10, nama="\x1b[2Jpalsu"), dict(benar10, kelas="8\x07A")]:
            assert minta(port, "/tes/smp-10", salah)[0] == 400
        assert minta(port, "/tes/sma-10", benar10)[0] == 403
        assert minta(port, "/tes/smp-10", b"nama=" + b"x" * 70000)[0] == 413
        assert len(posttest.baca(hasil, "smp-10")) == 1

        # nama berisi HTML ditampilkan aman
        st, isi = kirim_ikuti(dict(benar10, nama="<b>Budi</b>"))
        assert st == 200 and "&lt;b&gt;Budi&lt;/b&gt;" in isi.decode() and "<b>Budi</b>" not in isi.decode()
        st, isi = get("/tes/smp-10/terima-kasih?nama=%3Cscript%3Ex%3C/script%3E")
        assert "<script>x" not in isi.decode()

        # koneksi yang diputus siswa (unduhan dibatalkan, isian ditolak) tidak mencetak traceback di konsol pengajar
        import contextlib, io
        for err in (ConnectionAbortedError(10053, "diputus"), ConnectionResetError(), BrokenPipeError()):
            buf = io.StringIO()
            with contextlib.redirect_stderr(buf):
                try:
                    raise err
                except OSError:
                    srv.handle_error(None, ("192.168.1.50", 50000))
            assert buf.getvalue() == "", buf.getvalue()

        # 15 siswa mengirim bersamaan -> semua tersimpan
        ts = [threading.Thread(target=minta, args=(port, "/tes/smp-10", dict(benar10, nama=f"Paralel {i}")))
              for i in range(15)]
        [t.start() for t in ts]
        [t.join() for t in ts]
        assert len(posttest.baca(hasil, "smp-10")) == 17

        # halaman pengajar: buka/tutup tes, unduh xlsx
        st, isi = get("/guru")
        assert st == 200 and "smp-10" in isi.decode() and "17" in isi.decode()
        assert minta(port, "/guru/buka", {"tes": "sma-10"})[0] in (200, 303)
        assert get("/tes/sma-10")[0] == 200
        assert minta(port, "/guru/tutup", {"tes": "sma-10"})[0] in (200, 303)
        assert get("/tes/sma-10")[0] == 403
        st, isi = get("/guru/hasil/smp-10.xlsx")
        assert st == 200 and posttest.baca_xlsx(isi)[1][1] == "Siswa Uji"
        assert get("/guru/hasil/..%2Fx.xlsx")[0] == 404
        srv.shutdown()

        # halaman pengajar ditolak dari laptop siswa
        srv2 = buat_server(0, pak, hasil, boleh_guru=lambda ip: False)
        port2 = jalan(srv2)
        assert minta(port2, "/guru")[0] == 403
        assert minta(port2, "/guru/buka", {"tes": "smp-10"})[0] == 403
        assert minta(port2, "/guru/hasil/smp-10.xlsx")[0] == 403
        st, isi = minta(port2, "/?j=smp")
        assert "Belum ada post-test SMP yang dibuka" in isi.decode()

        # port sudah dipakai -> OSError
        try:
            buat_server(port2, pak, hasil).server_close()
            raise AssertionError("port ganda tidak terdeteksi")
        except OSError:
            pass
        srv2.shutdown()

    # repo di folder sistem Windows (PowerShell "Run as administrator" mulai di System32) -> pesan jelas
    m = masalah_folder_repo(Path(r"C:\Windows\System32\ekskul-coding"), r"C:\Windows")
    assert m and "Documents" in m and "System32" in m, m
    with tempfile.TemporaryDirectory() as d:
        assert masalah_folder_repo(Path(d), r"C:\Windows") is None

    assert boleh_guru_dari("127.0.0.1", []) and boleh_guru_dari("192.168.1.229", ["192.168.1.229"])
    assert not boleh_guru_dari("192.168.1.178", ["192.168.1.229"])
    print("cek OK")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a == ["cek"]:
        cek()
    else:
        port, buka = 8000, set()
        while a:
            if a[0] == "--port" and len(a) > 1 and a[1].isdigit():
                port, a = int(a[1]), a[2:]
            elif a[0] == "--tes" and len(a) > 1:
                buka |= kode_tes(a[1])
                a = a[2:]
            else:
                sys.exit(__doc__)
        main(port, buka)
