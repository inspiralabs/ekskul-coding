// Tes halaman /kode/: `node --test kode/kode.test.js`
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { isiDeviceId } = require('./kode.js');

test('Device ID kelompok terisi di firmware SMA, bagian lain tidak berubah', () => {
  const asli = fs.readFileSync(path.join(__dirname, '..', 'sma', 'firmware', 'sma_room_monitor', 'sma_room_monitor.ino'), 'utf8');
  const hasil = isiDeviceId(asli, 'sma-05');
  assert.match(hasil, /const char\* DEVICE_ID\s*=\s*"sma-05";/);
  assert.equal(hasil.split('\n').length, asli.split('\n').length);
  const beda = hasil.split('\n').filter((b, i) => b !== asli.split('\n')[i]);
  assert.ok(beda.length <= 1 && beda.every((b) => b.includes('DEVICE_ID')), beda.join('\n'));
});
