# Leaderboard & Materi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a public Leaderboard page and a Materi (per-meeting materials) page, both reading live data from Google Sheets published as CSV, so the tutor can update rankings and meeting content without any code change or redeploy.

**Architecture:** Two new static page folders (`leaderboard/`, `materi/`) following the existing `demo/`/`sma/`/`smp/` pattern — an `index.html` (markup/styling, freely editable) plus a data-layer `.js` file (fetch + render, locked like `api.js`). Both share one small CSV-fetch utility (`shared/csv.js`). No build step, no framework, no new dependencies — plain `fetch()` + DOM manipulation, matching `demo/app.js`.

**Tech Stack:** Vanilla HTML/CSS/JS, static hosting on Vercel (`cleanUrls: true`), Google Sheets "Publish to web → CSV" as the data source.

## Global Constraints

- No build step, no npm package, no frontend framework — pure static HTML/CSS/JS (per spec "Constraint utama").
- Website performs **no score calculation** — all ranking/scoring stays in Google Sheets formulas; the site only reads, filters, sorts by an already-computed `Ranking` column, and renders (spec: Data Sources §1).
- Data-layer JS files (`leaderboard.js`, `materi.js`, `shared/csv.js`) get a "JANGAN UBAH FILE INI" header comment, matching the existing `api.js` convention (spec: Governance).
- Sheet CSV URLs are the one hardcoded constant per data-layer file, positioned at the top for easy manual editing — mirrors `MY_DEVICE_ID` in existing `api.js` files (spec: Governance).
- Design tokens must match `demo/README.md`: fonts Baloo 2 (headings) / Nunito (body), accent gradient `#FF9F43 → #2ED9A6`, card radius 24px, shadow `0 4px 20px rgba(15,30,30,.07)` (spec: leaderboard styling).
- CSV parser handles quoted fields with embedded commas but not embedded newlines — documented scope limit, not a bug (spec: `shared/csv.js` contract).
- Every fetch failure, empty CSV, and missing-field row must degrade gracefully with a visible message — never a blank page or silent console error (spec: Error Handling).

---

## Task 1: `shared/csv.js` — CSV fetch + parse utility

**Files:**
- Create: `shared/csv.js`
- Test: `shared/csv.test.js` (standalone Node script, no framework — run directly with `node`)

**Interfaces:**
- Produces: `async function fetchCsv(url)` → `Promise<Array<Object>>`. Resolves to an array of row-objects keyed by the CSV's header row. Throws `Error` (with a human-readable `.message`) if the network request fails (non-OK response) or the body is empty/has no header row. Exported via `window.fetchCsv` (no module system — script loaded via `<script src>`, same as `api.js`) AND via `module.exports` guarded by `typeof module !== 'undefined'` so the same file runs under plain Node for the test script.
- Also produces (internal, but exported for the test): `function parseCsv(text)` → `Array<Object>`, the pure synchronous parsing half of `fetchCsv` (fetch wraps this). Later tasks only call `fetchCsv`; the test calls `parseCsv` directly to avoid needing a network mock.

This is the foundation every other task depends on — nothing else can be built without it.

- [ ] **Step 1: Write the failing test**

Create `shared/csv.test.js`:

```js
const assert = require('assert');
const { parseCsv } = require('./csv.js');

// Basic header + rows
{
  const csv = 'Nama,Nilai\nBudi,90\nSiti,85';
  const rows = parseCsv(csv);
  assert.deepStrictEqual(rows, [
    { Nama: 'Budi', Nilai: '90' },
    { Nama: 'Siti', Nilai: '85' },
  ]);
}

// Quoted field with embedded comma
{
  const csv = 'Judul,Link\n"Intro, Dasar",http://example.com';
  const rows = parseCsv(csv);
  assert.deepStrictEqual(rows, [
    { Judul: 'Intro, Dasar', Link: 'http://example.com' },
  ]);
}

// Blank lines are skipped
{
  const csv = 'A,B\n1,2\n\n3,4\n';
  const rows = parseCsv(csv);
  assert.deepStrictEqual(rows, [
    { A: '1', B: '2' },
    { A: '3', B: '4' },
  ]);
}

// Header only, no data rows -> empty array, not an error
{
  const csv = 'A,B\n';
  const rows = parseCsv(csv);
  assert.deepStrictEqual(rows, []);
}

// Empty string -> empty array
{
  const rows = parseCsv('');
  assert.deepStrictEqual(rows, []);
}

console.log('All csv.js tests passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node shared/csv.test.js`
Expected: FAIL — `Cannot find module './csv.js'` (file doesn't exist yet).

- [ ] **Step 3: Write minimal implementation**

Create `shared/csv.js`:

```js
// ============================================================
// JANGAN UBAH FILE INI — util pembaca data CSV dari Google Sheets.
// ============================================================
// Dipakai oleh leaderboard.js dan materi.js untuk mengambil data
// yang di-publish tutor lewat Google Sheets (Publish to web -> CSV).
// Parser ini menangani field berkutip dengan koma di dalamnya, TAPI
// TIDAK menangani newline di dalam field berkutip (tidak dibutuhkan
// untuk data tabular sederhana ini).

function parseCsvLine(line) {
  const cells = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      cells.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  cells.push(cur);
  return cells;
}

function parseCsv(text) {
  const lines = text.split(/\r\n|\n/).filter((line) => line.trim() !== '');
  if (lines.length === 0) return [];
  const header = parseCsvLine(lines[0]).map((h) => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const row = {};
    header.forEach((key, idx) => {
      row[key] = (cells[idx] !== undefined ? cells[idx] : '').trim();
    });
    rows.push(row);
  }
  return rows;
}

async function fetchCsv(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new Error('Gagal mengambil data (jaringan bermasalah).');
  }
  if (!response.ok) {
    throw new Error('Gagal mengambil data (server merespons error).');
  }
  const text = await response.text();
  return parseCsv(text);
}

if (typeof window !== 'undefined') {
  window.fetchCsv = fetchCsv;
  window.parseCsv = parseCsv;
}
if (typeof module !== 'undefined') {
  module.exports = { fetchCsv, parseCsv };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node shared/csv.test.js`
Expected: `All csv.js tests passed.` printed, exit code 0.

- [ ] **Step 5: Commit**

```bash
rtk git add shared/csv.js shared/csv.test.js
rtk git commit -m "feat: add shared CSV fetch/parse utility for Sheets-backed pages"
```

---

## Task 2: Leaderboard page

**Files:**
- Create: `leaderboard/index.html`
- Create: `leaderboard/leaderboard.js`
- Test: `leaderboard/leaderboard.test.js` (standalone Node script)

**Interfaces:**
- Consumes: `parseCsv(text)` from `shared/csv.js` (via `require` in the test, via `<script src="/shared/csv.js">` global `window.parseCsv`/`window.fetchCsv` in the browser).
- Produces: `function rankRows(rows)` → `Array<Object>`, pure function that filters out rows with missing/non-numeric `NILAI AKHIR` and sorts ascending by numeric `Ranking`. Exported the same dual way as Task 1 (`window.rankRows` + `module.exports`) so the test can call it without a DOM or network.

- [ ] **Step 1: Write the failing test**

Create `leaderboard/leaderboard.test.js`:

```js
const assert = require('assert');
const { rankRows } = require('./leaderboard.js');

// Sorts by Ranking ascending, keeps only rows with a valid NILAI AKHIR
{
  const rows = [
    { 'Nama Lengkap': 'C', Ranking: '3', 'NILAI AKHIR': '70.0', Predikat: 'C' },
    { 'Nama Lengkap': 'A', Ranking: '1', 'NILAI AKHIR': '95.0', Predikat: 'A' },
    { 'Nama Lengkap': 'Empty', Ranking: '', 'NILAI AKHIR': '', Predikat: '' },
    { 'Nama Lengkap': 'B', Ranking: '2', 'NILAI AKHIR': '85.0', Predikat: 'B' },
  ];
  const result = rankRows(rows);
  assert.deepStrictEqual(
    result.map((r) => r['Nama Lengkap']),
    ['A', 'B', 'C']
  );
}

// Empty input -> empty output, no throw
{
  assert.deepStrictEqual(rankRows([]), []);
}

console.log('All leaderboard.js tests passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node leaderboard/leaderboard.test.js`
Expected: FAIL — `Cannot find module './leaderboard.js'`.

- [ ] **Step 3: Write minimal implementation**

Create `leaderboard/leaderboard.js`:

```js
// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" ke data gradebook Google Sheets.
// ============================================================
// Satu baris yang PERLU diubah manual: GRADEBOOK_URL di bawah, kalau
// tutor membuat spreadsheet gradebook baru. Cara dapatkan URL:
// Google Sheets -> File -> Share -> Publish to web -> pilih tab
// gradebook -> format CSV -> salin link.

const GRADEBOOK_URL = {
  sma: 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_SMA/pub?output=csv',
  smp: 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_SMP/pub?output=csv',
};

function rankRows(rows) {
  return rows
    .filter((row) => {
      const nilai = parseFloat(row['NILAI AKHIR']);
      const ranking = parseInt(row['Ranking'], 10);
      return !isNaN(nilai) && !isNaN(ranking) && row['Nama Lengkap'];
    })
    .sort((a, b) => parseInt(a['Ranking'], 10) - parseInt(b['Ranking'], 10));
}

if (typeof window !== 'undefined') {
  window.rankRows = rankRows;
}
if (typeof module !== 'undefined') {
  module.exports = { rankRows };
}

// ---- Browser-only rendering below this line ----
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const BADGES = ['🥇', '🥈', '🥉'];

  function currentKelas() {
    const params = new URLSearchParams(window.location.search);
    const kelas = params.get('kelas');
    return kelas === 'smp' ? 'smp' : 'sma';
  }

  function setKelasInUrl(kelas) {
    const url = new URL(window.location.href);
    url.searchParams.set('kelas', kelas);
    window.history.replaceState({}, '', url);
  }

  function renderLoading(container) {
    container.innerHTML = '<p class="status-msg">Memuat data leaderboard...</p>';
  }

  function renderError(container, message, onRetry) {
    container.innerHTML = '';
    const p = document.createElement('p');
    p.className = 'status-msg status-error';
    p.textContent = message;
    const btn = document.createElement('button');
    btn.className = 'retry-btn';
    btn.textContent = 'Coba lagi';
    btn.addEventListener('click', onRetry);
    container.appendChild(p);
    container.appendChild(btn);
  }

  function renderEmpty(container) {
    container.innerHTML = '<p class="status-msg">Belum ada data nilai untuk ditampilkan.</p>';
  }

  function renderTable(container, ranked) {
    container.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'leaderboard-table';
    table.innerHTML = '<thead><tr><th>#</th><th>Nama</th><th>Nilai Akhir</th><th>Predikat</th></tr></thead>';
    const tbody = document.createElement('tbody');
    ranked.forEach((row, idx) => {
      const tr = document.createElement('tr');
      const badge = BADGES[idx] ? BADGES[idx] + ' ' : '';
      tr.innerHTML = `
        <td>${badge}${row['Ranking']}</td>
        <td>${row['Nama Lengkap']}</td>
        <td>${parseFloat(row['NILAI AKHIR']).toFixed(1)}</td>
        <td>${row['Predikat'] || '-'}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
  }

  async function loadLeaderboard(kelas) {
    const container = document.getElementById('leaderboard-container');
    renderLoading(container);
    try {
      const rows = await fetchCsv(GRADEBOOK_URL[kelas]);
      const ranked = rankRows(rows);
      if (ranked.length === 0) {
        renderEmpty(container);
      } else {
        renderTable(container, ranked);
      }
    } catch (err) {
      renderError(container, 'Data belum bisa dimuat. Coba beberapa saat lagi atau hubungi tutor.', () => loadLeaderboard(kelas));
    }
  }

  function initToggle() {
    const kelas = currentKelas();
    document.querySelectorAll('.kelas-toggle button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.kelas === kelas);
      btn.addEventListener('click', () => {
        setKelasInUrl(btn.dataset.kelas);
        document.querySelectorAll('.kelas-toggle button').forEach((b) => b.classList.toggle('active', b === btn));
        loadLeaderboard(btn.dataset.kelas);
      });
    });
    loadLeaderboard(kelas);
  }

  document.addEventListener('DOMContentLoaded', initToggle);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node leaderboard/leaderboard.test.js`
Expected: `All leaderboard.js tests passed.` printed, exit code 0.

- [ ] **Step 5: Write `leaderboard/index.html`**

```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Leaderboard - Ekskul Coding Asy Syahid</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  body{
    margin:0;min-height:100vh;font-family:'Nunito',sans-serif;
    background:radial-gradient(circle at 15% 15%,#fff1de 0%,transparent 45%),
               radial-gradient(circle at 85% 85%,#e4fbf3 0%,transparent 45%),
               linear-gradient(135deg,#eef5ff 0%,#f4fff9 100%);
    padding:32px 20px;
  }
  .kontainer{max-width:640px;margin:0 auto}
  h1{font:800 clamp(26px,5vw,34px)/1.15 'Baloo 2',sans-serif;margin:0 0 6px;color:#FF9F43}
  .subjudul{color:#6b7785;font:600 14px/1.5 'Nunito',sans-serif;margin:0 0 20px}
  a.kembali{display:inline-block;margin-bottom:16px;color:#2ED9A6;font:700 13px 'Nunito',sans-serif;text-decoration:none}

  .kelas-toggle{display:flex;gap:8px;margin-bottom:20px}
  .kelas-toggle button{
    flex:1;padding:10px 16px;border-radius:999px;border:1px solid rgba(15,30,30,.08);
    background:#fff;font:700 14px 'Nunito',sans-serif;color:#1f2937;cursor:pointer;transition:.2s ease;
  }
  .kelas-toggle button.active{background:linear-gradient(135deg,#FF9F43,#2ED9A6);color:#fff;border-color:transparent}

  .card{background:#fff;border-radius:24px;padding:20px;box-shadow:0 4px 20px rgba(15,30,30,.07);border:1px solid rgba(15,30,30,.04)}

  .leaderboard-table{width:100%;border-collapse:collapse;font:600 14px 'Nunito',sans-serif}
  .leaderboard-table th{text-align:left;padding:10px 8px;color:#6b7785;font:700 12px 'Nunito',sans-serif;border-bottom:2px solid rgba(15,30,30,.06)}
  .leaderboard-table td{padding:10px 8px;border-bottom:1px solid rgba(15,30,30,.05)}
  .leaderboard-table tr:last-child td{border-bottom:none}

  .status-msg{text-align:center;color:#6b7785;font:600 14px 'Nunito',sans-serif;padding:20px 0}
  .status-error{color:#FF6B6B}
  .retry-btn{
    display:block;margin:0 auto;padding:8px 20px;border-radius:999px;border:none;
    background:linear-gradient(135deg,#FF9F43,#2ED9A6);color:#fff;font:700 13px 'Nunito',sans-serif;cursor:pointer;
  }
</style>
</head>
<body>
<div class="kontainer">
  <a class="kembali" href="/">&larr; Kembali</a>
  <h1>Leaderboard &#127942;</h1>
  <p class="subjudul">Ranking siswa berdasarkan nilai akhir gradebook.</p>

  <div class="kelas-toggle">
    <button data-kelas="sma">SMA</button>
    <button data-kelas="smp">SMP</button>
  </div>

  <div class="card">
    <div id="leaderboard-container"></div>
  </div>
</div>

<script src="/shared/csv.js"></script>
<script src="/leaderboard.js"></script>
</body>
</html>
```

Note: `leaderboard.js` is loaded from `/leaderboard.js` here, but the file lives at `leaderboard/leaderboard.js` — since `leaderboard/index.html` is served at the clean URL `/leaderboard/`, a relative `leaderboard.js` resolves to `/leaderboard/leaderboard.js` correctly. Use `<script src="leaderboard.js"></script>` (relative, no leading slash) to avoid ambiguity — apply this fix before testing.

- [ ] **Step 6: Fix the script src to relative path**

In `leaderboard/index.html`, change:
```html
<script src="/shared/csv.js"></script>
<script src="/leaderboard.js"></script>
```
to:
```html
<script src="/shared/csv.js"></script>
<script src="leaderboard.js"></script>
```
(`shared/csv.js` uses an absolute path since it's shared from root; `leaderboard.js` is relative since it lives alongside `index.html` in the same folder.)

- [ ] **Step 7: Manual browser check**

Serve the repo root with any static file server (e.g. `npx serve .` or `python -m http.server`) and open `http://localhost:PORT/leaderboard/?kelas=sma`. Expected: page loads, shows "Memuat data leaderboard..." briefly, then either an error card (since `GRADEBOOK_URL` still has placeholder `REPLACE_ME_SMA`, so this is expected to fail gracefully) — confirm the error message and "Coba lagi" button render correctly, proving the error path works. This will be replaced with real data in Task 5.

- [ ] **Step 8: Commit**

```bash
rtk git add leaderboard/
rtk git commit -m "feat: add leaderboard page reading ranked data from gradebook CSV"
```

---

## Task 3: Materi page

**Files:**
- Create: `materi/index.html`
- Create: `materi/materi.js`
- Test: `materi/materi.test.js` (standalone Node script)

**Interfaces:**
- Consumes: `parseCsv(text)` / `fetchCsv(url)` from `shared/csv.js` (same loading pattern as Task 2).
- Produces: `function filterMateri(rows, kelas)` → `Array<Object>`, pure function that keeps rows where `Status === 'published'` and (`Target === 'Keduanya'` or `Target.toLowerCase() === kelas`), sorted ascending by numeric `No Pertemuan`. Exported the same dual way (`window.filterMateri` + `module.exports`).

- [ ] **Step 1: Write the failing test**

Create `materi/materi.test.js`:

```js
const assert = require('assert');
const { filterMateri } = require('./materi.js');

const rows = [
  { 'No Pertemuan': '2', 'Judul Materi': 'Kedua', Target: 'SMA', Status: 'published' },
  { 'No Pertemuan': '1', 'Judul Materi': 'Pertama', Target: 'Keduanya', Status: 'published' },
  { 'No Pertemuan': '3', 'Judul Materi': 'Draft', Target: 'SMA', Status: 'draft' },
  { 'No Pertemuan': '4', 'Judul Materi': 'Punya SMP', Target: 'SMP', Status: 'published' },
];

// SMA sees "Pertama" (Keduanya) and "Kedua" (SMA), sorted by No Pertemuan,
// excludes draft and SMP-only rows
{
  const result = filterMateri(rows, 'sma');
  assert.deepStrictEqual(
    result.map((r) => r['Judul Materi']),
    ['Pertama', 'Kedua']
  );
}

// SMP sees "Pertama" (Keduanya) and "Punya SMP"
{
  const result = filterMateri(rows, 'smp');
  assert.deepStrictEqual(
    result.map((r) => r['Judul Materi']),
    ['Pertama', 'Punya SMP']
  );
}

// Empty input -> empty output
{
  assert.deepStrictEqual(filterMateri([], 'sma'), []);
}

console.log('All materi.js tests passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node materi/materi.test.js`
Expected: FAIL — `Cannot find module './materi.js'`.

- [ ] **Step 3: Write minimal implementation**

Create `materi/materi.js`:

```js
// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" ke data sheet Materi Google Sheets.
// ============================================================
// Satu baris yang PERLU diubah manual: MATERI_URL di bawah, kalau
// tutor membuat spreadsheet Materi baru. Cara dapatkan URL: Google
// Sheets -> File -> Share -> Publish to web -> format CSV -> salin link.

const MATERI_URL = 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_MATERI/pub?output=csv';

function filterMateri(rows, kelas) {
  return rows
    .filter((row) => {
      const status = (row['Status'] || '').toLowerCase();
      const target = (row['Target'] || '').toLowerCase();
      return status === 'published' && (target === 'keduanya' || target === kelas);
    })
    .sort((a, b) => parseInt(a['No Pertemuan'], 10) - parseInt(b['No Pertemuan'], 10));
}

if (typeof window !== 'undefined') {
  window.filterMateri = filterMateri;
}
if (typeof module !== 'undefined') {
  module.exports = { filterMateri };
}

// ---- Browser-only rendering below this line ----
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  function currentKelas() {
    const params = new URLSearchParams(window.location.search);
    const kelas = params.get('kelas');
    return kelas === 'smp' ? 'smp' : 'sma';
  }

  function setKelasInUrl(kelas) {
    const url = new URL(window.location.href);
    url.searchParams.set('kelas', kelas);
    window.history.replaceState({}, '', url);
  }

  function toEmbedUrl(formUrl) {
    if (!formUrl) return '';
    if (formUrl.includes('embedded=true')) return formUrl;
    const sep = formUrl.includes('?') ? '&' : '?';
    return formUrl + sep + 'embedded=true';
  }

  function buildCard(row) {
    const card = document.createElement('div');
    card.className = 'materi-card';

    const header = document.createElement('button');
    header.className = 'materi-toggle';
    header.setAttribute('aria-expanded', 'false');
    header.innerHTML = `
      <div class="materi-head">
        <strong>Pertemuan ${row['No Pertemuan']}: ${row['Judul Materi']}</strong>
        <span class="materi-tanggal">${row['Tanggal'] || ''}</span>
      </div>
      <span class="panah">&rarr;</span>
    `;

    const body = document.createElement('div');
    body.className = 'materi-body';
    let injected = false;

    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      body.classList.toggle('open', !expanded);

      if (!expanded && !injected) {
        injected = true;
        if (row['Link Drive']) {
          const driveLink = document.createElement('a');
          driveLink.href = row['Link Drive'];
          driveLink.target = '_blank';
          driveLink.rel = 'noopener';
          driveLink.className = 'drive-btn';
          driveLink.textContent = '📂 Buka Materi (Drive)';
          body.appendChild(driveLink);
        }
        if (row['Link Form Post-Test']) {
          const label1 = document.createElement('p');
          label1.className = 'form-label';
          label1.textContent = 'Post-Test';
          const iframe1 = document.createElement('iframe');
          iframe1.src = toEmbedUrl(row['Link Form Post-Test']);
          iframe1.loading = 'lazy';
          iframe1.className = 'form-embed';
          body.appendChild(label1);
          body.appendChild(iframe1);
        }
        if (row['Link Form Kritik & Saran']) {
          const label2 = document.createElement('p');
          label2.className = 'form-label';
          label2.textContent = 'Kritik & Saran';
          const iframe2 = document.createElement('iframe');
          iframe2.src = toEmbedUrl(row['Link Form Kritik & Saran']);
          iframe2.loading = 'lazy';
          iframe2.className = 'form-embed';
          body.appendChild(label2);
          body.appendChild(iframe2);
        }
      }
    });

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function renderLoading(container) {
    container.innerHTML = '<p class="status-msg">Memuat daftar materi...</p>';
  }

  function renderError(container, message, onRetry) {
    container.innerHTML = '';
    const p = document.createElement('p');
    p.className = 'status-msg status-error';
    p.textContent = message;
    const btn = document.createElement('button');
    btn.className = 'retry-btn';
    btn.textContent = 'Coba lagi';
    btn.addEventListener('click', onRetry);
    container.appendChild(p);
    container.appendChild(btn);
  }

  function renderEmpty(container) {
    container.innerHTML = '<p class="status-msg">Belum ada materi yang dipublikasikan.</p>';
  }

  async function loadMateri(kelas) {
    const container = document.getElementById('materi-container');
    renderLoading(container);
    try {
      const rows = await fetchCsv(MATERI_URL);
      const filtered = filterMateri(rows, kelas);
      if (filtered.length === 0) {
        renderEmpty(container);
      } else {
        container.innerHTML = '';
        filtered.forEach((row) => container.appendChild(buildCard(row)));
      }
    } catch (err) {
      renderError(container, 'Data belum bisa dimuat. Coba beberapa saat lagi atau hubungi tutor.', () => loadMateri(kelas));
    }
  }

  function initToggle() {
    const kelas = currentKelas();
    document.querySelectorAll('.kelas-toggle button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.kelas === kelas);
      btn.addEventListener('click', () => {
        setKelasInUrl(btn.dataset.kelas);
        document.querySelectorAll('.kelas-toggle button').forEach((b) => b.classList.toggle('active', b === btn));
        loadMateri(btn.dataset.kelas);
      });
    });
    loadMateri(kelas);
  }

  document.addEventListener('DOMContentLoaded', initToggle);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node materi/materi.test.js`
Expected: `All materi.js tests passed.` printed, exit code 0.

- [ ] **Step 5: Write `materi/index.html`**

```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Materi - Ekskul Coding Asy Syahid</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  body{
    margin:0;min-height:100vh;font-family:'Nunito',sans-serif;
    background:radial-gradient(circle at 15% 15%,#fff1de 0%,transparent 45%),
               radial-gradient(circle at 85% 85%,#e4fbf3 0%,transparent 45%),
               linear-gradient(135deg,#eef5ff 0%,#f4fff9 100%);
    padding:32px 20px;
  }
  .kontainer{max-width:640px;margin:0 auto}
  h1{font:800 clamp(26px,5vw,34px)/1.15 'Baloo 2',sans-serif;margin:0 0 6px;color:#FF9F43}
  .subjudul{color:#6b7785;font:600 14px/1.5 'Nunito',sans-serif;margin:0 0 20px}
  a.kembali{display:inline-block;margin-bottom:16px;color:#2ED9A6;font:700 13px 'Nunito',sans-serif;text-decoration:none}

  .kelas-toggle{display:flex;gap:8px;margin-bottom:20px}
  .kelas-toggle button{
    flex:1;padding:10px 16px;border-radius:999px;border:1px solid rgba(15,30,30,.08);
    background:#fff;font:700 14px 'Nunito',sans-serif;color:#1f2937;cursor:pointer;transition:.2s ease;
  }
  .kelas-toggle button.active{background:linear-gradient(135deg,#FF9F43,#2ED9A6);color:#fff;border-color:transparent}

  .materi-card{background:#fff;border-radius:20px;box-shadow:0 4px 20px rgba(15,30,30,.07);border:1px solid rgba(15,30,30,.04);overflow:hidden;margin-bottom:14px}
  .materi-toggle{width:100%;border:none;background:none;cursor:pointer;font-family:inherit;text-align:left;display:flex;align-items:center;gap:12px;padding:16px 18px}
  .materi-head{flex:1;display:flex;flex-direction:column;gap:2px}
  .materi-head strong{font:800 15px 'Baloo 2',sans-serif;color:#1f2937}
  .materi-tanggal{font:600 12px 'Nunito',sans-serif;color:#6b7785}
  .panah{color:#c2cbd3;font-size:18px;transition:transform .25s ease}
  .materi-toggle[aria-expanded="true"] .panah{transform:rotate(90deg);color:#2ED9A6}

  .materi-body{display:none;flex-direction:column;gap:10px;padding:0 18px 18px}
  .materi-body.open{display:flex}

  .drive-btn{
    display:inline-block;padding:10px 16px;border-radius:12px;background:linear-gradient(135deg,#FF9F43,#2ED9A6);
    color:#fff;text-decoration:none;font:700 13px 'Nunito',sans-serif;width:fit-content;
  }
  .form-label{margin:6px 0 0;font:700 13px 'Nunito',sans-serif;color:#6b7785}
  .form-embed{width:100%;height:600px;border:1px solid rgba(15,30,30,.08);border-radius:12px}

  .status-msg{text-align:center;color:#6b7785;font:600 14px 'Nunito',sans-serif;padding:20px 0}
  .status-error{color:#FF6B6B}
  .retry-btn{
    display:block;margin:0 auto;padding:8px 20px;border-radius:999px;border:none;
    background:linear-gradient(135deg,#FF9F43,#2ED9A6);color:#fff;font:700 13px 'Nunito',sans-serif;cursor:pointer;
  }
</style>
</head>
<body>
<div class="kontainer">
  <a class="kembali" href="/">&larr; Kembali</a>
  <h1>Materi &#128218;</h1>
  <p class="subjudul">Materi, post-test, dan kritik &amp; saran tiap pertemuan.</p>

  <div class="kelas-toggle">
    <button data-kelas="sma">SMA</button>
    <button data-kelas="smp">SMP</button>
  </div>

  <div id="materi-container"></div>
</div>

<script src="/shared/csv.js"></script>
<script src="materi.js"></script>
</body>
</html>
```

- [ ] **Step 6: Manual browser check**

Serve the repo root and open `http://localhost:PORT/materi/?kelas=sma`. Expected: page loads, shows loading text, then the error card (since `MATERI_URL` still has placeholder `REPLACE_ME_MATERI`) with a working "Coba lagi" button — confirms the error path. Verified against real data in Task 5.

- [ ] **Step 7: Commit**

```bash
rtk git add materi/
rtk git commit -m "feat: add materi page with per-meeting Drive links and embedded Google Forms"
```

---

## Task 4: Landing page navigation links

**Files:**
- Modify: `index.html:103-107` (SMA `.pilihan` block)
- Modify: `index.html:121-125` (SMP `.pilihan` block)

**Interfaces:**
- Consumes: URL paths `/leaderboard/?kelas=sma`, `/leaderboard/?kelas=smp`, `/materi/?kelas=sma`, `/materi/?kelas=smp` — produced by Task 2 and Task 3's page routing (`currentKelas()` reads this exact query param).

No test framework applies to a two-line markup addition in a static HTML file; verification is a manual click-through (Step 2 below), consistent with ponytail's "trivial one-liners need no test."

- [ ] **Step 1: Add the links**

In `index.html`, locate the SMA `.pilihan` div (around line 103-107):

```html
      <div class="akordeon-isi"><div>
        <div class="pilihan">
          <a href="/sma/"><span class="emoji">🖥️</span> Lihat website</a>
          <a href="https://drive.google.com/file/d/14tHnrs4urDLxjvf9sHT63yIkOpbmEuG4/view?usp=drive_link" target="_blank"><span class="emoji">⬇️</span> Unduh template &amp; firmware</a>
        </div>
      </div></div>
```

Replace with:

```html
      <div class="akordeon-isi"><div>
        <div class="pilihan">
          <a href="/sma/"><span class="emoji">🖥️</span> Lihat website</a>
          <a href="/leaderboard/?kelas=sma"><span class="emoji">🏆</span> Leaderboard</a>
          <a href="/materi/?kelas=sma"><span class="emoji">📚</span> Materi &amp; Post-Test</a>
          <a href="https://drive.google.com/file/d/14tHnrs4urDLxjvf9sHT63yIkOpbmEuG4/view?usp=drive_link" target="_blank"><span class="emoji">⬇️</span> Unduh template &amp; firmware</a>
        </div>
      </div></div>
```

Then locate the SMP `.pilihan` div (around line 121-125):

```html
      <div class="akordeon-isi"><div>
        <div class="pilihan">
          <a href="/smp/"><span class="emoji">🖥️</span> Lihat website</a>
          <a href="https://drive.google.com/file/d/12j2b3eK8423zYa8F-1uTewoOYeNC0yrh/view?usp=drive_link" target="_blank"><span class="emoji">⬇️</span> Unduh template &amp; firmware</a>
        </div>
      </div></div>
```

Replace with:

```html
      <div class="akordeon-isi"><div>
        <div class="pilihan">
          <a href="/smp/"><span class="emoji">🖥️</span> Lihat website</a>
          <a href="/leaderboard/?kelas=smp"><span class="emoji">🏆</span> Leaderboard</a>
          <a href="/materi/?kelas=smp"><span class="emoji">📚</span> Materi &amp; Post-Test</a>
          <a href="https://drive.google.com/file/d/12j2b3eK8423zYa8F-1uTewoOYeNC0yrh/view?usp=drive_link" target="_blank"><span class="emoji">⬇️</span> Unduh template &amp; firmware</a>
        </div>
      </div></div>
```

- [ ] **Step 2: Manual verification**

Serve the repo root, open `http://localhost:PORT/`, expand the SMA accordion, click "Leaderboard" — confirm it navigates to `/leaderboard/?kelas=sma` with the SMA toggle pre-selected. Repeat for "Materi & Post-Test" and for the SMP accordion (`kelas=smp`).

- [ ] **Step 3: Commit**

```bash
rtk git add index.html
rtk git commit -m "feat: link leaderboard and materi pages from SMA/SMP accordion on landing page"
```

---

## Task 5: Governance doc update + real Sheet URLs wiring

**Files:**
- Modify: `SIAPA_BOLEH_UBAH_APA.md`
- Modify: `leaderboard/leaderboard.js:11-14` (`GRADEBOOK_URL` constant)
- Modify: `materi/materi.js:10` (`MATERI_URL` constant)

**Interfaces:**
- Consumes: nothing new — this task replaces the `REPLACE_ME_*` placeholders from Task 2/3 with real published-CSV URLs, and documents the new folders in the project's governance doc.

This task requires the tutor (user) to actually publish the three sheets first — it cannot be completed by code alone. Document the exact steps as part of the task so whoever runs it (tutor or assistant sitting with the tutor) has a runbook.

- [ ] **Step 1: Publish the three Google Sheets tabs to web as CSV**

For each of the 3 sheets — SMA gradebook, SMP gradebook, and the new Materi sheet (create it first using the columns from the spec: `No Pertemuan`, `Tanggal`, `Judul Materi`, `Link Drive`, `Link Form Post-Test`, `Link Form Kritik & Saran`, `Target`, `Status`):

1. Open the sheet in Google Sheets.
2. File → Share → Publish to web.
3. Under "Link", select the specific tab (not "Entire Document") and set format to "Comma-separated values (.csv)".
4. Click Publish, confirm the dialog.
5. Copy the generated URL — it looks like `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv`.

- [ ] **Step 2: Update `leaderboard/leaderboard.js`**

Replace the placeholder constant:

```js
const GRADEBOOK_URL = {
  sma: 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_SMA/pub?output=csv',
  smp: 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_SMP/pub?output=csv',
};
```

with the two real published URLs from Step 1.

- [ ] **Step 3: Update `materi/materi.js`**

Replace the placeholder constant:

```js
const MATERI_URL = 'https://docs.google.com/spreadsheets/d/e/REPLACE_ME_MATERI/pub?output=csv';
```

with the real published URL from Step 1.

- [ ] **Step 4: Add governance rows to `SIAPA_BOLEH_UBAH_APA.md`**

In the table at the "## 3. Dashboard" section (around line 65-69), add two rows following the existing pattern:

```markdown
| `leaderboard/` | Ranking siswa (baca dari gradebook) | Rekan Anda | `index.html` | `leaderboard.js` |
| `materi/` | Materi & form per pertemuan | Rekan Anda | `index.html` | `materi.js` |
```

Then add a new subsection after the existing "Satu baris yang PERLU diubah manual di tiap `api.js`" paragraph (around line 71-73):

```markdown
**Sama halnya untuk `leaderboard.js` dan `materi.js`:** satu baris yang PERLU
diubah manual adalah konstanta URL sumber data di puncak file
(`GRADEBOOK_URL` di `leaderboard.js`, `MATERI_URL` di `materi.js`). Kalau
tutor membuat spreadsheet gradebook atau Materi yang baru, cukup ganti URL
ini — tidak perlu mengubah logika kode. Cara mendapatkan URL: Google Sheets
-> File -> Share -> Publish to web -> pilih tab -> format CSV -> salin link.
```

- [ ] **Step 5: End-to-end manual verification**

Serve the repo root, open `/leaderboard/?kelas=sma` — confirm real student names/rankings from the gradebook now render (not the error card). Open `/materi/?kelas=sma` — add one test row to the Materi sheet with `Status=published`, `Target=SMA`, refresh the page without any redeploy, confirm the new row appears. Expand a materi card, confirm the Drive link opens in a new tab and both Google Form iframes load and are fillable.

- [ ] **Step 6: Commit**

```bash
rtk git add SIAPA_BOLEH_UBAH_APA.md leaderboard/leaderboard.js materi/materi.js
rtk git commit -m "docs: document leaderboard/materi ownership and wire real Sheet CSV URLs"
```

---

## Self-Review Notes

- **Spec coverage:** Data Sources §1/§2 → Task 2/3 constants + Task 5 wiring. Pages & Files → Task 1 (`shared/csv.js`), Task 2 (`leaderboard/`), Task 3 (`materi/`). Navigation → Task 4. Governance → Task 5. Error Handling → built into `renderError`/`renderEmpty` in Task 2 and 3. Verification Plan items 1-7 from the spec map onto Task 5 Step 1 (item 1), Task 2/3 Step 7/6 and Task 5 Step 5 (items 2-5), Task 4 Step 2 (item 6), Task 5 Step 4 (item 7).
- **Placeholder scan:** `REPLACE_ME_SMA`/`REPLACE_ME_SMP`/`REPLACE_ME_MATERI` are intentional runtime placeholders replaced by Task 5 with real values obtained from the tutor's own Google account — not a plan placeholder, since the exact steps to obtain and insert them are fully specified.
- **Type consistency:** `parseCsv`/`fetchCsv` signatures from Task 1 are used identically in Task 2 and Task 3. `rankRows(rows)` and `filterMateri(rows, kelas)` signatures declared in each task's Interfaces block match their Step 3 implementations exactly.
