// ============================================================
// JANGAN UBAH FILE INI — ini "kabel" penghubung ke backend.
// Kalau mau mengubah TAMPILAN, edit index.html saja.
// ============================================================
// URL backend -- diisi PELATIH. Backend di-deploy ke server online, jadi
// isi dengan URL server itu (https://...)
// Untuk uji coba di laptop sebelum deploy, boleh sementara "http://localhost:3000".
const API_BASE = "https://api-ekskulcoding.inspiralabs.id";
// const API_BASE = "https://<url-backend-anda>";
const MY_DEVICE_ID = "demo-1"; // ganti sesuai device yang mau ditampilkan di dashboard ini

async function ambilRiwayat(limit = 20) {
  const res = await fetch(`${API_BASE}/api/readings/${MY_DEVICE_ID}?limit=${limit}`);
  const json = await res.json();
  return json.readings; // [{ payload: {temp,humidity,fanOn}, createdAt }, ...]
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

function bukaKoneksiRealtime(onPesanBaru) {
  const wsUrl = API_BASE.replace("http", "ws");
  const ws = new WebSocket(wsUrl);
  ws.onmessage = (e) => {
    const pesan = JSON.parse(e.data);
    if (pesan.deviceId !== MY_DEVICE_ID) return; // abaikan broadcast device lain
    onPesanBaru(pesan);
  };
  return ws;
}
