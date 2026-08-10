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

// headerRow: index (setelah baris kosong dibuang) dari baris yang berisi
// nama kolom. Default 0 (baris pertama). Beberapa sheet tutor punya baris
// judul/catatan di atas header asli (mis. gradebook: judul + rumus di
// baris 1-2) — pemanggil kirim headerRow sesuai posisi header sebenarnya.
function parseCsv(text, headerRow) {
  const skip = headerRow || 0;
  const lines = text.split(/\r\n|\n/).filter((line) => line.trim() !== '');
  if (lines.length <= skip) return [];
  const header = parseCsvLine(lines[skip]).map((h) => h.trim());
  const rows = [];
  for (let i = skip + 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i]);
    const row = {};
    header.forEach((key, idx) => {
      row[key] = (cells[idx] !== undefined ? cells[idx] : '').trim();
    });
    rows.push(row);
  }
  return rows;
}

async function fetchCsv(url, headerRow) {
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
  return parseCsv(text, headerRow);
}

if (typeof window !== 'undefined') {
  window.fetchCsv = fetchCsv;
  window.parseCsv = parseCsv;
}
if (typeof module !== 'undefined') {
  module.exports = { fetchCsv, parseCsv };
}
