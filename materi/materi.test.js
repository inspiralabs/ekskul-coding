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
