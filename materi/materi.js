// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" ke data sheet Materi Google Sheets.
// ============================================================
// Satu baris yang PERLU diubah manual: MATERI_URL di bawah, kalau
// tutor membuat spreadsheet Materi baru. Cara dapatkan URL: Google
// Sheets -> File -> Share -> Publish to web -> format CSV -> salin link.

const MATERI_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyYQU4xkx4Hz8dz_QCvoDO_uqUevWqCP6Yu8IozDo6_imtUT1FjPgDyASufZaxPm9Y3cREdBVokwEE/pub?gid=0&single=true&output=csv';

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

  function buildLinkButton(href, label, className) {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = className;
    link.textContent = label;
    return link;
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
          body.appendChild(buildLinkButton(row['Link Drive'], '📂 Buka Materi (Drive)', 'drive-btn'));
        }
        if (row['Link Post-Test']) {
          body.appendChild(buildLinkButton(row['Link Post-Test'], '📝 Isi Post-Test', 'form-btn'));
        }
        if (row['Link Kritik & Saran']) {
          body.appendChild(buildLinkButton(row['Link Kritik & Saran'], '💬 Kritik & Saran', 'form-btn'));
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

  function init() {
    const kelas = currentKelas();
    document.getElementById('kelas-label').textContent = kelas === 'smp' ? 'SMP' : 'SMA';
    loadMateri(kelas);
  }

  document.addEventListener('DOMContentLoaded', init);
}
