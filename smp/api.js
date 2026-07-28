// ============================================================
// JANGAN UBAH FILE INI. Tampilan boleh diedit di index.html.
// ============================================================
// URL backend -- diisi PELATIH. Backend di-deploy ke server online, jadi
// isi dengan URL server itu (https://...)
const API_BASE = "https://api-ekskulcoding.inspiralabs.id";
// const API_BASE = "https://<url-backend-anda>";
const MY_DEVICE_ID = "smp-3"; // ganti sesuai ID kelompokmu (SAMA dengan DEVICE_ID di firmware!)

async function ambilDataSensorTerbaru() {
  const res = await fetch(`${API_BASE}/api/readings/${MY_DEVICE_ID}?limit=1`);
  const json = await res.json();
  return json.readings.length ? json.readings[0].payload : null; // {temp,humidity,fanOn} atau null
}
