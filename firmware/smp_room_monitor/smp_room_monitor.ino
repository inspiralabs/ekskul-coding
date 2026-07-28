// ============================================================
// Smart Room Monitor -- Template SMP
// Baca sensor DHT22, kirim data ke dashboard tiap 4 detik.
// Tidak ada kontrol fan/relay di versi ini.
// ============================================================
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <DHT.h>

// ============ JANGAN UBAH DI BAWAH INI (koneksi ke backend) ============
// Ini sudah disiapkan pelatih -- jangan diganti, kecuali diminta pelatih.
// Backend di-deploy ke server online (HTTPS) -- SERVER_URL diisi PELATIH
// dengan URL server itu, contoh: "https://backend-ekskul.onrender.com/api/readings"
const char* SERVER_URL = "https://<url-backend-anda>/api/readings";
const char* API_KEY    = "<shared-secret>";

// ============ BOLEH DIUBAH: identitas device, WiFi & pin sensor ============
const char* DEVICE_ID     = "smp-3";        // GANTI sesuai ID kelompokmu dari daftar pelatih!
const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
#define DHT_PIN 4                            // ganti sesuai pemasangan kabel DHT22

DHT dht(DHT_PIN, DHT22);

unsigned long lastSendTime = 0;
const unsigned long SEND_INTERVAL_MS = 4000;  // DHT22 butuh jeda >=2 detik antar baca

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Pakai millis() (bukan delay()) supaya loop tetap ringan dan mudah
  // dikembangkan -- kebiasaan baik meski di sini belum ada tugas lain di loop.
  if (millis() - lastSendTime < SEND_INTERVAL_MS) return;
  lastSendTime = millis();

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
  // setInsecure() melewati verifikasi sertifikat -- cukup untuk demo kelas,
  // BUKAN cara aman untuk aplikasi production sungguhan.
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
    Serial.println(http.getString());
  }
  http.end();
}
