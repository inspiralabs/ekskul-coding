// ============================================================
// CHALLENGE HARD — Terima Perintah JSON
// Route POST /lampu, body {"lampuOn":true} atau {"lampuOn":false}.
// 1. Baca body: server.arg("plain")   2. Tentukan ledOn (petunjuk: indexOf("true"))
// 3. Nyalakan/matikan LED             4. Balas {"ok":true} (application/json)
// Uji dari cmd: curl -X POST http://<IP>/lampu -d "{\"lampuOn\":true}"
// ============================================================
#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>

#define LED_PIN 2

const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";

WebServer server(80);
bool ledOn = false;

void handlePing() {
  server.send(200, "text/plain", "pong");
}

void handleLed() {
  String state = server.arg("state");
  if (state == "on") {
    ledOn = true;
  } else if (state == "off") {
    ledOn = false;
  } else {
    server.send(400, "text/plain", "state harus on/off");
    return;
  }
  digitalWrite(LED_PIN, ledOn ? HIGH : LOW);
  server.send(200, "text/plain", ledOn ? "LED ON" : "LED OFF");
}

// TODO: buat fungsi handleLampu() di sini

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Buka di browser: http://");
  Serial.println(WiFi.localIP());

  server.on("/ping", HTTP_GET, handlePing);
  server.on("/led", HTTP_GET, handleLed);
  // TODO: daftarkan route POST /lampu
  server.begin();
}

void loop() {
  server.handleClient();
}
