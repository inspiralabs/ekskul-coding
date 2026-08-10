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
