// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" ke data gradebook Google Sheets.
// ============================================================
// Satu baris yang PERLU diubah manual: GRADEBOOK_URL di bawah, kalau
// tutor membuat spreadsheet gradebook baru. Cara dapatkan URL:
// Google Sheets -> File -> Share -> Publish to web -> pilih tab
// gradebook -> format CSV -> salin link.
//
// GRADEBOOK_HEADER_ROW = 3 karena sheet gradebook tutor punya baris
// judul + baris catatan rumus + satu baris kosong (yang di CSV tetap
// berupa deretan koma, jadi TIDAK dibuang oleh parser) sebelum baris
// header asli (ID Siswa, Nama Lengkap, dst). Kalau tutor mengubah
// struktur sheet (tambah/kurang baris di atas header), angka ini yang
// perlu disesuaikan.

const GRADEBOOK_HEADER_ROW = 3;

const GRADEBOOK_URL = {
  sma: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-iiOjf3kuAFVaaCg1rOENELJVBjrjTNO2uuiqC1q1mWPNRsSIMEMG04fY6Vi9ZQ/pub?gid=412408676&single=true&output=csv',
  smp: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSkLb2YTqOH1gwn0sYziedXfCNbWD1TdHceKGTWgzEfTYTl9g-En_X8LdLOLAP1Rw/pub?gid=563350833&single=true&output=csv',
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
      const rows = await fetchCsv(GRADEBOOK_URL[kelas], GRADEBOOK_HEADER_ROW);
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
