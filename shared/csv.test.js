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
