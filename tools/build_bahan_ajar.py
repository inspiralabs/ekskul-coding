"""Bangun file siap-pakai per pertemuan dari kurikulum/<jenjang>/pNN/sumber + kode.

Hasil (di kurikulum/<jenjang>/pNN/):
  PROMPT_P{n}_{JENJANG}.md  -> tempel ke Gemini: Google Slides (A) + Google Docs Materi Ajar (B)
  SCRIPT_P{n}_{JENJANG}.gs  -> jalankan di Apps Script: folder Drive + file kode + Google Form post-test

Pakai:  python tools/build_bahan_ajar.py sma          (semua pertemuan SMA)
        python tools/build_bahan_ajar.py sma 10 11    (pertemuan tertentu)
Link folder Drive per pertemuan diisi di tools/drive_folders.json.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE = os.path.join(ROOT, 'prompt', 'TEMPLATE_PROMPT_PERTEMUAN.md')

# Pertemuan yang juga membagikan file proyek akhir ke folder Kode/proyek-akhir.
# Kosong: proyek akhir dibagikan per kelompok (Device ID terisi) lewat `py tools/kelompok.py paket`.
PROYEK_AKHIR = {}

BACA_DULU = '''CARA PAKAI FILE KODE (Arduino IDE)

Setiap program ESP32 ada di foldernya sendiri, misalnya:
  P10_1_TesRelay/P10_1_TesRelay.ino
Nama folder HARUS sama dengan nama file .ino (aturan Arduino IDE), jadi jangan diganti.

1. Download folder Kode ini (klik kanan -> Download), lalu Extract zip-nya.
2. Buka folder program, double-click file .ino -> terbuka di Arduino IDE.
3. Pilih board "ESP32 Dev Module" dan port ESP32-mu, lalu klik Upload (panah ->).
4. Buka Serial Monitor (ikon kaca pembesar kanan atas), pilih 115200 baud.

Belum punya Arduino IDE / board ESP32 / library DHT? Ikuti Panduan Instalasi dari tutor.
File .html (web): buka langsung di browser (double-click), edit pakai VS Code.
'''


def read(p):
    return open(p, encoding='utf-8').read()


def proyek_akhir_files(jenjang, bagian):
    src = os.path.join(ROOT, jenjang)
    files = {}
    if 'firmware' in bagian:
        nama = f'{jenjang}_room_monitor'
        files[f'proyek-akhir/{nama}/{nama}.ino'] = read(os.path.join(src, 'firmware', nama, nama + '.ino'))
    if 'web' in bagian:
        for f in ('index.html', 'api.js', 'style.css'):
            files[f'proyek-akhir/{f}'] = read(os.path.join(src, f))
    return files


def post_test(path):
    clean = lambda t: re.sub(r'\*\*|`', '', t).strip()
    s = read(path)
    soal = []
    for blk in s.split('\n---\n')[1:]:
        blk = blk.strip()
        m = re.search(r'\*\*Jawaban: ([A-D])\*\*', blk)
        body = blk[:m.start()].strip()
        opsi = re.findall(r'(?m)^- [A-D]\. (.*)$', body)
        assert len(opsi) == 4, (path, body[:80])
        body = re.sub(r'(?m)^- [A-D]\. .*$', '', body).strip()
        kode = re.findall(r'```\w*\n(.*?)```', body, re.S)
        teks = re.sub(r'```\w*\n.*?```', ' ', body, flags=re.S)
        soal.append({'q': ' '.join(clean(l) for l in teks.splitlines() if l.strip()),
                     'kode': kode[0].rstrip() if kode else '',
                     'opsi': [clean(o) for o in opsi], 'kunci': 'ABCD'.index(m.group(1))})
    assert len(soal) == 5, path
    return soal


def md_blok(md):
    """Markdown panduan -> daftar blok [jenis, teks] untuk dirender DocumentApp (GS)."""
    blok, tabel, kode = [], None, None
    for baris in md.splitlines():
        if kode is not None:
            if baris.startswith('```'):
                blok.append(['kode', '\n'.join(kode)]); kode = None
            else:
                kode.append(baris)
            continue
        if baris.startswith('```'):
            kode = []; continue
        if baris.lstrip().startswith('|'):
            sel = [c.strip() for c in baris.strip().strip('|').split('|')]
            if not all(re.fullmatch(r':?-+:?', c) for c in sel):
                tabel = tabel if tabel is not None else []
                tabel.append([re.sub(r'\*\*|`', '', c) for c in sel])
            continue
        if tabel is not None:
            blok.append(['tabel', rata(tabel)]); tabel = None
        t = baris.strip()
        if not t or t == '---':
            continue
        t = t.replace('`', '')
        m = re.match(r'(#{1,3}) (.*)', t)
        if m:
            blok.append(['h%d' % len(m.group(1)), m.group(2).replace('**', '')])
        elif re.match(r'[-*] ', t):
            blok.append(['li', re.sub(r'^[-*] (\[ \] )?', lambda x: '☐ ' if x.group(1) else '', t)])
        elif t.startswith('> '):
            blok.append(['kutip', t[2:]])
        else:
            blok.append(['p', t])
    if tabel is not None:
        blok.append(['tabel', rata(tabel)])
    return blok


def rata(tabel):  # DocumentApp butuh jumlah sel sama per baris
    n = max(len(r) for r in tabel)
    return [r + [''] * (n - len(r)) for r in tabel]


GS = '''// ============================================================
// SCRIPT {P} {J} — bahan ajar ke Google Drive (sekali Run)
// Membuat di folder Drive pertemuan:
//   {J}/Kode/...                        file kode materi & challenge (+ proyek akhir)
//   {J}/POST TEST - Pertemuan {N} - {J}  Google Form mode Quiz (+ spreadsheet Responses)
//   {J}/Panduan Pengajar {P} {J}         Google Docs (kalau ada Panduan_Pengajar_{P}_{J}.md)
// Cara pakai:
//   1. https://script.google.com -> New project -> hapus isi Code.gs -> tempel file ini -> Save.
//   2. Isi FOLDER_PERTEMUAN di bawah (link folder Drive {P}) kalau masih kosong.
//   3. Pilih fungsi "jalankan" -> Run -> izinkan akses.
//   4. Execution log menampilkan link folder & link form (pasang link form di Linktree).
// Aman dijalankan ulang: file kode & Panduan Pengajar diperbarui, folder/form tidak dobel.
// File ini DIBUAT OTOMATIS oleh tools/build_bahan_ajar.py -- jangan edit isinya di sini.
// ============================================================

const FOLDER_PERTEMUAN = {FOLDER};  // link atau ID folder Drive {P}
const JENJANG = '{J}';

const KODE = {KODE};

const POST_TEST = {POST};

const PANDUAN = {PANDUAN};

function jalankan() {{
  const id = (FOLDER_PERTEMUAN.match(/folders\\/([\\w-]+)/) || [null, FOLDER_PERTEMUAN])[1];
  if (!id || id.indexOf('TEMPEL') === 0) throw new Error('Isi FOLDER_PERTEMUAN dengan link folder Drive {P} dulu.');
  const folderJenjang = ambilAtauBuatFolder(DriveApp.getFolderById(id), JENJANG);

  const namaFile = Object.keys(KODE);
  if (namaFile.length) {{
    const folderKode = ambilAtauBuatFolder(folderJenjang, 'Kode');
    namaFile.forEach(function (path) {{ tulisFile(folderKode, path, KODE[path]); }});
    Logger.log('KODE       %s file -> %s', namaFile.length, folderKode.getUrl());
  }}

  buatPostTest(folderJenjang);
  if (PANDUAN.blok.length) tulisPanduan(folderJenjang);
  Logger.log('FOLDER     %s', folderJenjang.getUrl());
}}

function tulisFile(folder, path, isi) {{
  const bagian = path.split('/');
  const nama = bagian.pop();
  bagian.forEach(function (b) {{ folder = ambilAtauBuatFolder(folder, b); }});
  const ada = folder.getFilesByName(nama);
  if (ada.hasNext()) ada.next().setContent(isi);
  else folder.createFile(nama, isi, MimeType.PLAIN_TEXT);
}}

function buatPostTest(folder) {{
  const ada = folder.getFilesByName(POST_TEST.judul);
  if (ada.hasNext()) {{
    Logger.log('POST TEST  sudah ada -> %s', FormApp.openById(ada.next().getId()).getPublishedUrl());
    return;
  }}
  const form = FormApp.create(POST_TEST.judul);
  form.setIsQuiz(true).setDescription('5 soal pilihan ganda. Kerjakan sendiri ya!');
  form.addTextItem().setTitle('Nama lengkap').setRequired(true);
  form.addTextItem().setTitle('Kelas').setRequired(true);
  form.addTextItem().setTitle('Kelompok').setRequired(true);
  POST_TEST.soal.forEach(function (s) {{
    const item = form.addMultipleChoiceItem();
    item.setTitle(s.q).setPoints(1).setRequired(true)
        .setChoices(s.opsi.map(function (o, j) {{ return item.createChoice(o, j === s.kunci); }}));
    if (s.kode) item.setHelpText(s.kode);
  }});
  const sheet = SpreadsheetApp.create(POST_TEST.judul + ' (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  DriveApp.getFileById(form.getId()).moveTo(folder);
  DriveApp.getFileById(sheet.getId()).moveTo(folder);
  Logger.log('POST TEST  dibuat -> %s', form.getPublishedUrl());
}}

function tulisPanduan(folder) {{
  const ada = folder.getFilesByName(PANDUAN.judul);
  let doc;
  if (ada.hasNext()) {{
    doc = DocumentApp.openById(ada.next().getId());
    doc.getBody().clear();
  }} else {{
    doc = DocumentApp.create(PANDUAN.judul);
    DriveApp.getFileById(doc.getId()).moveTo(folder);
  }}
  const body = doc.getBody();
  const H = {{h1: DocumentApp.ParagraphHeading.HEADING1, h2: DocumentApp.ParagraphHeading.HEADING2,
             h3: DocumentApp.ParagraphHeading.HEADING3}};
  PANDUAN.blok.forEach(function (b) {{
    const jenis = b[0], isi = b[1];
    if (jenis === 'tabel') {{
      const t = body.appendTable(isi);
      t.getRow(0).editAsText().setBold(true);
      return;
    }}
    const polos = jenis === 'kode' ? isi : isi.split('**').join('');
    const el = jenis === 'li' ? body.appendListItem(polos).setGlyphType(DocumentApp.GlyphType.BULLET)
                              : body.appendParagraph(polos);
    if (H[jenis]) el.setHeading(H[jenis]);
    if (jenis === 'kode') el.editAsText().setFontFamily('Courier New');
    if (jenis === 'kutip') el.editAsText().setItalic(true);
    if (jenis !== 'kode') {{  // **tebal** -> bold
      const teks = el.editAsText();
      let pos = 0;
      isi.split('**').forEach(function (bagian, i) {{
        if (i % 2 === 1 && bagian) teks.setBold(pos, pos + bagian.length - 1, true);
        pos += bagian.length;
      }});
    }}
  }});
  doc.saveAndClose();
  Logger.log('PANDUAN    %s', doc.getUrl());
}}

function ambilAtauBuatFolder(induk, nama) {{
  const it = induk.getFoldersByName(nama);
  return it.hasNext() ? it.next() : induk.createFolder(nama);
}}
'''


def build(jenjang, n, folders):
    J = jenjang.upper()
    d = os.path.join(ROOT, 'kurikulum', jenjang, f'p{n:02d}')
    sumber = os.path.join(d, 'sumber')
    materi = read(os.path.join(sumber, f'Materi_Ajar_P{n}_{J}_InspiraLabs.md'))
    slide = read(os.path.join(sumber, f'PPT_P{n}_{J}_InspiraLabs.md'))
    judul = materi.splitlines()[0].split(': ', 1)[1].strip()
    folder = folders.get(f'P{n}', '')

    prompt = read(TEMPLATE)
    for k, v in {'PERTEMUAN': f'P{n}', 'JENJANG': J, 'FOLDER': folder or '[link folder Drive P%d]' % n,
                 'JUDUL_SLIDES': f'P{n} {J} — {judul}', 'JUDUL_DOCS': f'Materi Ajar P{n} {J} — {judul}',
                 'ISI_SLIDE': slide.strip(), 'ISI_MATERI': materi.strip()}.items():
        prompt = prompt.replace('{{%s}}' % k, v)
    open(os.path.join(d, f'PROMPT_P{n}_{J}.md'), 'w', encoding='utf-8').write(prompt)

    kode = {}
    kdir = os.path.join(d, 'kode')
    if os.path.isdir(kdir):  # sketch Arduino: kode/<nama>/<nama>.ino, path relatif dipertahankan
        for akar, _, files in sorted(os.walk(kdir)):
            for f in sorted(files):
                p = os.path.join(akar, f)
                kode[os.path.relpath(p, kdir).replace(os.sep, '/')] = read(p)
    kode.update(proyek_akhir_files(jenjang, PROYEK_AKHIR.get(jenjang, {}).get(n, [])))
    if kode:
        kode['BACA_DULU.txt'] = BACA_DULU

    pp = os.path.join(d, f'Panduan_Pengajar_P{n}_{J}.md')
    panduan = {'judul': f'Panduan Pengajar P{n} {J} — {judul}',
               'blok': md_blok(read(pp)) if os.path.exists(pp) else []}

    post = {'judul': f'POST TEST - Pertemuan {n} - {J}',
            'soal': post_test(os.path.join(sumber, f'POST_TEST_P{n}_{J}_InspiraLabs.md'))}
    gs = GS.format(P=f'P{n}', J=J, N=n,
                   FOLDER=json.dumps(folder or f'TEMPEL_LINK_FOLDER_P{n}_DI_SINI'),
                   KODE=json.dumps(kode, indent=2, ensure_ascii=False),
                   POST=json.dumps(post, indent=2, ensure_ascii=False),
                   PANDUAN=json.dumps(panduan, ensure_ascii=False))
    open(os.path.join(d, f'SCRIPT_P{n}_{J}.gs'), 'w', encoding='utf-8').write(gs)
    print(f'P{n} {J}: PROMPT ({len(prompt) // 1000} KB), SCRIPT ({len(kode)} file kode, 5 soal'
          + (', panduan pengajar' if panduan['blok'] else '') + ')'
          + ('' if folder else '  [link folder Drive belum diisi]'))


if __name__ == '__main__':
    jenjang = sys.argv[1]
    folders = json.load(open(os.path.join(ROOT, 'tools', 'drive_folders.json'), encoding='utf-8'))
    nums = [int(x) for x in sys.argv[2:]] or sorted(
        int(p[1:]) for p in os.listdir(os.path.join(ROOT, 'kurikulum', jenjang))
        if re.fullmatch(r'p\d+', p) and os.path.isdir(os.path.join(ROOT, 'kurikulum', jenjang, p, 'sumber')))
    for n in nums:
        build(jenjang, n, folders)
