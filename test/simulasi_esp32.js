// ============================================================
// Simulator ESP32 -- untuk mengetes backend & dashboard TANPA hardware asli.
// Meniru persis apa yang dilakukan firmware .ino: POST data sensor tiap
// beberapa detik, sertakan deviceId & ip palsu.
//
// Pakai ini untuk mengetes dashboard Demo, SMA, ATAU SMP -- tinggal ganti
// DEVICE_ID di bawah supaya sama dengan MY_DEVICE_ID di api.js dashboard
// yang mau dites.
//
// Cara pakai:
//   node simulasi_esp32.js                  (device default: sma-1)
//   node simulasi_esp32.js smp-3             (device custom)
//   node simulasi_esp32.js sma-1 25          (device + interval 25 = 2.5 detik)
// ============================================================

const SERVER_URL = "https://api-ekskulcoding.inspiralabs.id/api/readings";
const API_KEY = "ekskul-coding-seru"; // samakan dengan backend/.env

const DEVICE_ID = process.argv[2] || "sma-1";
const INTERVAL_MS = process.argv[3] ? Number(process.argv[3]) * 100 : 4000;

let temp = 26;
let humidity = 55;

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

async function kirimData() {
  // Variasi diperbesar (dari ±1/±2 ke ±3/±6) supaya garis di grafik
  // "Riwayat Sensor" dashboard terlihat naik-turun jelas saat demo,
  // bukan rata seperti garis lurus.
  temp = clamp(temp + (Math.random() - 0.5) * 6, 15, 38);
  humidity = clamp(humidity + (Math.random() - 0.5) * 12, 20, 90);

  const body = {
    deviceId: DEVICE_ID,
    temp: Math.round(temp * 10) / 10,
    humidity: Math.round(humidity),
    ip: "192.168.1.999", // IP palsu -- backend akan gagal push ke ESP32 asli, itu wajar & aman
  };

  try {
    const res = await fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": API_KEY },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    console.log(`[${new Date().toLocaleTimeString("id-ID")}] deviceId=${DEVICE_ID} temp=${body.temp} humidity=${body.humidity} -> respons:`, json);
  } catch (err) {
    console.error("Gagal kirim ke backend:", err.message, "-- pastikan backend sudah jalan (npm start di folder backend/)");
  }
}

console.log(`Simulasi ESP32 untuk device "${DEVICE_ID}", kirim data tiap ${INTERVAL_MS / 1000} detik.`);
console.log("Buka dashboard (Demo/SMA/SMP) dengan MY_DEVICE_ID yang sama di api.js untuk melihat datanya masuk.");
console.log("Tekan Ctrl+C untuk berhenti.\n");

kirimData();
setInterval(kirimData, INTERVAL_MS);
