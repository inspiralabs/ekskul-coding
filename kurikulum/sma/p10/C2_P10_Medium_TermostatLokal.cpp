// ============================================================
// CHALLENGE MEDIUM — Termostat Lokal
// Kipas (relay) menyala otomatis jika suhu > AMBANG, mati jika tidak.
// Tampilkan: "Suhu: 30.4 C -> KIPAS ON". Uji dengan menggenggam sensor.
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4
#define RELAY_PIN 18
#define RELAY_ON  LOW
#define RELAY_OFF HIGH
#define AMBANG 30.0   // sesuaikan: suhu kelas sekarang + 1

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  delay(2000);
  float suhu = dht.readTemperature();
  if (isnan(suhu)) {
    Serial.println("Gagal baca DHT22");
    return;
  }

  // TODO: bool kipasNyala = ... (bandingkan suhu dengan AMBANG)
  // TODO: digitalWrite relay pakai ternary: kipasNyala ? RELAY_ON : RELAY_OFF
  // TODO: Serial.printf("Suhu: %.1f C -> KIPAS %s\n", ...)
}
