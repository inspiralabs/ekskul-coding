// ============================================================
// P11 SMA — Live Coding 1: Kirim Data Sensor ke Backend
// Isi WIFI_SSID, WIFI_PASSWORD, DEVICE_ID (lihat docs/HANDOUT_SISWA.md).
// Target: Serial menampilkan "Status: 200" dan data muncul di dashboard.
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

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();
  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  int kode = kirimData(suhu, lembap);
  Serial.printf("Status: %d\n", kode);
}
