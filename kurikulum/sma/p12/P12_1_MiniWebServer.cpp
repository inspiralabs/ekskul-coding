// ============================================================
// P12 SMA — Live Coding 1: Mini Web Server
// Isi WiFi. Buka dari HP (WiFi yang sama): http://<IP>/ping dan /led?state=on
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
  server.begin();
}

void loop() {
  server.handleClient();
}
