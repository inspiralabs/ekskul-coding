// ============================================================
// Smart Room Monitor -- Template SMA (program JADI)
// Baca sensor DHT22, kirim data ke dashboard tiap 4 detik, dan
// nyalakan/matikan kipas lewat relay sesuai perintah dashboard.
//
// Yang perlu kamu isi HANYA bagian "BOLEH DIUBAH" (Device ID, WiFi,
// pin). Bagian "JANGAN UBAH" adalah koneksi ke backend.
// ============================================================
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <DHT.h>
#include <WebServer.h>

// ============ JANGAN UBAH: koneksi ke backend, sudah disiapkan tutor ============
// Ini sudah disiapkan tutor -- jangan diganti, kecuali diminta tutor.
// SERVER_URL dan API_KEY jangan diubah
const char* SERVER_URL = "https://api-ekskulcoding.inspiralabs.id/api/readings";
const char* API_KEY    = "ekskul-coding-seru";

// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-01";        // sudah diisi tutor, JANGAN diganti
const char* WIFI_SSID     = "ISI_DI_SINI";  // Di isi sesuai dengan nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // Di isi sesuai dengan password WiFi

#define DHT_PIN 13                          // ganti sesuai pemasangan kabel DHT22
#define RELAY_PIN 16                        // ganti sesuai pemasangan modul relay (misal GPIO 14 / GPIO 16)

DHT dht(DHT_PIN, DHT22);
WebServer fanServer(80);

bool fanOn = false;  // status relay/fan terkini

// Modul relay 5V Active-LOW sering bocor tegangan jika dipicu 3.3V HIGH.
// Solusi: Gunakan mode INPUT (Hi-Z) untuk mematikan relay total,
// dan mode OUTPUT LOW untuk mengaktifkan relay.
void setRelay(bool on) {
  fanOn = on;
  if (on) {
    pinMode(RELAY_PIN, OUTPUT);
    digitalWrite(RELAY_PIN, LOW); // Relay ON (Kipas Nyala)
    Serial.println("[Relay] Kipas NYALA");
  } else {
    pinMode(RELAY_PIN, INPUT);    // High-Impedance -> Optocoupler OFF (Kipas Mati)
    Serial.println("[Relay] Kipas MATI");
  }
}

// Dipanggil saat ada POST ke http://<ip-esp32-ini>/fan dengan body
// {"fanOn": true} / {"fanOn": false} (perintah langsung dari jaringan lokal).
void handleFanCommand() {
  String body = fanServer.arg("plain");
  setRelay(body.indexOf("true") >= 0);
  fanServer.send(200, "application/json", "{\"ok\":true}");
}

void setup() {
  // ==== JANGAN UBAH ====
  Serial.begin(115200);
  dht.begin();

  // Pastikan kipas langsung dalam kondisi MATI saat boot
  setRelay(false);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());
  // ==== akhir bagian JANGAN UBAH ====

  fanServer.on("/fan", HTTP_POST, handleFanCommand);
  fanServer.begin();
}

unsigned long lastSendTime = 0;
const unsigned long SEND_INTERVAL_MS = 4000;  // DHT22 butuh jeda >=2 detik antar baca

void loop() {
  // ==== JANGAN UBAH ====
  // WAJIB dipanggil tiap iterasi supaya ESP32 tetap bisa menerima
  // perintah fan dari backend kapan saja -- INILAH SEBABNYA kita pakai
  // millis() di bawah, bukan delay(): delay() akan membuat baris ini
  // berhenti jalan dan dashboard jadi telat mengontrol fan.
  fanServer.handleClient();

  if (millis() - lastSendTime < SEND_INTERVAL_MS) return;
  lastSendTime = millis();

  // WiFi sempat putus? Sambungkan lagi, coba kirim di putaran berikutnya.
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi putus, coba reconnect...");
    WiFi.reconnect();
    return;
  }

  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temp) || isnan(humidity)) {
    Serial.println("Gagal baca sensor DHT22, coba lagi 4 detik lagi...");
    return;
  }

  Serial.print("Suhu: "); Serial.print(temp); Serial.print(" C, ");
  Serial.print("Kelembapan: "); Serial.print(humidity); Serial.println(" %");

  String json = "{";
  json += "\"deviceId\":\"" + String(DEVICE_ID) + "\",";
  json += "\"temp\":" + String(temp) + ",";
  json += "\"humidity\":" + String(humidity) + ",";
  json += "\"ip\":\"" + WiFi.localIP().toString() + "\"";
  json += "}";

  // SERVER_URL diawali "https://" (server online), jadi butuh WiFiClientSecure.
  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.begin(client, SERVER_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-API-Key", API_KEY);

  int responseCode = http.POST(json);
  Serial.print("Kirim data -> kode respons: ");
  Serial.println(responseCode);
  if (responseCode > 0) {
    String body = http.getString();
    Serial.println(body);
    // Backend membalas status fan ({"ok":true,"fanOn":...}),
    // relay mengikuti instruksi ini.
    setRelay(body.indexOf("\"fanOn\":true") >= 0);
  }
  http.end();
  // ==== akhir bagian JANGAN UBAH ====
}
