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
