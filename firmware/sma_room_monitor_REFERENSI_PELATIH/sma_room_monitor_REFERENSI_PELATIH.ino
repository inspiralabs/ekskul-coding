// ============================================================
// Smart Room Monitor -- Versi REFERENSI PELATIH (JAWABAN LENGKAP)
// JANGAN dibagikan ke siswa -- ini untuk verifikasi Anda sendiri
// sebelum kelas, dan sebagai kunci jawaban TANTANGAN di
// sma_room_monitor.ino.
// ============================================================
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <DHT.h>
#include <WebServer.h>

const char* SERVER_URL = "https://<url-backend-anda>/api/readings";
const char* API_KEY    = "<shared-secret>";

const char* DEVICE_ID     = "sma-1";
const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
#define DHT_PIN 4
#define RELAY_PIN 5

DHT dht(DHT_PIN, DHT22);
WebServer fanServer(80);

bool fanOn = false;

void handleFanCommand() {
  String body = fanServer.arg("plain");
  fanOn = body.indexOf("true") >= 0;
  digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);  // relay active-LOW
  fanServer.send(200, "application/json", "{\"ok\":true}");
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(RELAY_PIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());

  fanServer.on("/fan", HTTP_POST, handleFanCommand);
  fanServer.begin();
}

unsigned long lastSendTime = 0;
const unsigned long SEND_INTERVAL_MS = 4000;

void loop() {
  fanServer.handleClient();

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
    String resBody = http.getString();
    Serial.println(resBody);
    bool fallbackFanOn = resBody.indexOf("\"fanOn\":true") >= 0;
    fanOn = fallbackFanOn;
    digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);
  }
  http.end();
}
