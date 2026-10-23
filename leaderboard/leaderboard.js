// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" ke data gradebook Google Sheets.
// ============================================================
// Sumber: spreadsheet penilaian InspiraLabs (file .xlsx di Google Drive, satu per jenjang),
// tab "Gradebook SMA" (nama tab di file SMP juga "...SMA"). Dibaca langsung lewat endpoint
// gviz setiap halaman dibuka, jadi leaderboard ikut berubah begitu file diisi tutor.
// Hanya tab Gradebook yang diambil (parameter sheet=); tab Master Data (No. HP, orang tua)
// tidak pernah dibaca.
//
// Kalau tutor memakai file baru: ganti ID file di GRADEBOOK_URL (bagian /d/<ID>/).
// range=A4:T200 mulai dari baris header asli (ID Siswa, Nama Lengkap, dst), jadi
// GRADEBOOK_HEADER_ROW = 0. Kalau baris di atas header bertambah/berkurang, ubah A4.

const GRADEBOOK_HEADER_ROW = 0;

const gradebook = (id) =>
  `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=Gradebook%20SMA&range=A4:T200&headers=1`;

const GRADEBOOK_URL = {
  sma: gradebook('170i4eQA744WocxupwJA-ZHEX_3esMmUK'),
  smp: gradebook('1GTRpJ2i8Vp0P4K0KmptnWR8nVgJMnwlJ'),
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
