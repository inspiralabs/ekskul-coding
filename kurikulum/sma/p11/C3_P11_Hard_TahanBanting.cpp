// ============================================================
// CHALLENGE HARD — Tahan Banting
// 1. Di loop(): jika WiFi putus -> print "WiFi putus, reconnect...",
//    panggil WiFi.reconnect(), lewati pengiriman putaran ini.
// 2. Hitung gagal kirim berturut-turut. 5x gagal -> ESP.restart().
// 3. Uji: matikan hotspot 30 detik, nyalakan lagi. Data harus masuk lagi.
// ============================================================
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHT_PIN 4

const char* WIFI_SSID     = "ISI_DI_SINI";
const char* WIFI_PASSWORD = "ISI_DI_SINI";
const char* DEVICE_ID     = "sma-1";   // sesuai HANDOUT
const char* SERVER_URL    = "https://api-ekskulcoding.inspiralabs.id/api/readings";
const char* API_KEY       = "ekskul-coding-seru";

DHT dht(DHT_PIN, DHT22);
unsigned long terakhirKirim = 0;
int gagalBeruntun = 0;   // TODO: pakai untuk menghitung gagal berturut-turut

int kirimData(float suhu, float lembap) {
  String json = "{\"deviceId\":\"" + String(DEVICE_ID) + "\","
                "\"temp\":" + String(suhu, 1) + ","
                "\"humidity\":" + String(lembap, 1) + "}";
  Serial.println("Body: " + json);

  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.begin(client, SERVER_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-API-Key", API_KEY);

  int kode = http.POST(json);
  if (kode > 0) Serial.println("Balasan: " + http.getString());
  http.end();
  return kode;
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("IP: " + WiFi.localIP().toString());
}

void loop() {
  if (millis() - terakhirKirim < 5000) return;
  terakhirKirim = millis();

  // TODO: cek WiFi.status() di sini

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();
  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  int kode = kirimData(suhu, lembap);
  Serial.printf("Status: %d\n", kode);

  // TODO: kode == 200 -> gagalBeruntun = 0; selain itu tambah 1; jika >= 5 -> ESP.restart()
}
