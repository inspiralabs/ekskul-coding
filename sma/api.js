// ============================================================
// JANGAN UBAH FILE INI — sudah disiapkan tutor, ini koneksi ke backend.
// Kerjakan TANTANGAN kamu di index.html saja:
// panggil kirimPerintahFan(...) dari tombol yang kamu buat.
// ============================================================
// URL backend -- diisi TUTOR. Backend di-deploy ke server online, jadi
// isi dengan URL server itu (https://...)
const API_BASE = "https://api-ekskulcoding.inspiralabs.id";
const MY_DEVICE_ID = "sma-1"; // ganti sesuai ID kelompokmu (SAMA dengan DEVICE_ID di firmware!)

async function ambilDataSensorTerbaru() {
  const res = await fetch(`${API_BASE}/api/readings/${MY_DEVICE_ID}?limit=1`);
  const json = await res.json();
  return json.readings.length ? json.readings[0].payload : null; // {temp,humidity,fanOn} atau null
}

async function ambilStatusFan() {
  const res = await fetch(`${API_BASE}/api/fan-control/${MY_DEVICE_ID}`);
  return res.json(); // { fanMode, manualFanOn, threshold, fanOn }
}

async function kirimPerintahFan(perubahan) {
  const res = await fetch(`${API_BASE}/api/fan-control/${MY_DEVICE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perubahan),
  });
  return res.json(); // { fanMode, manualFanOn, threshold, fanOn }
}
