// ============================================================
// JANGAN UBAH FILE INI — sudah disiapkan tutor, ini koneksi ke backend.
// Tampilan boleh diedit di index.html & style.css.
// ============================================================
// URL backend -- diisi TUTOR. Backend di-deploy ke server online, jadi
// isi dengan URL server itu (https://...)
const API_BASE = "https://api-ekskulcoding.inspiralabs.id";
const MY_DEVICE_ID = "sma-06"; // sudah diisi tutor (SAMA dengan DEVICE_ID di firmware)

async function ambilDataSensorTerbaru() {
  const res = await fetch(`${API_BASE}/api/readings/${MY_DEVICE_ID}?limit=1`);
  const json = await res.json();
  return json.readings.length ? json.readings[0].payload : null; // {temp,humidity,fanOn} atau null
}

async function ambilStatusFan() {
  const res = await fetch(`${API_BASE}/api/fan-control/${MY_DEVICE_ID}`);
  return res.json(); // { fanMode, manualFanOn, threshold, fanOn }
}

// Mengubah fan butuh PIN kelompok (dari tutor). PIN ditanya sekali lalu
// disimpan di browser ini; pengunjung lain hanya bisa melihat.
async function kirimPerintahFan(perubahan) {
  const kirim = () => fetch(`${API_BASE}/api/fan-control/${MY_DEVICE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-PIN": localStorage.getItem("pinFan") || "" },
    body: JSON.stringify(perubahan),
  });
  let res = await kirim();
  if (res.status === 403) {
    const pin = prompt("Masukkan PIN kelompok untuk mengontrol fan:");
    if (!pin) throw new Error("PIN dibutuhkan");
    localStorage.setItem("pinFan", pin.trim());
    res = await kirim();
    if (res.status === 403) { localStorage.removeItem("pinFan"); alert("PIN salah."); throw new Error("PIN salah"); }
  }
  return res.json(); // { fanMode, manualFanOn, threshold, fanOn }
}
