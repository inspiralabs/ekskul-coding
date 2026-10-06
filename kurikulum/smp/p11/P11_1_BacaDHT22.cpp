// ============================================================
// P11 SMP — Live Coding 1: Membaca Sensor DHT22
// Salin ke src/main.cpp. Kabel DHT22: + ke 3V3, out ke D4, - ke GND.
// platformio.ini harus punya: lib_deps = adafruit/DHT sensor library
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4               // kaki "out" DHT22 di pin D4

DHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22

void setup() {
  Serial.begin(115200);
  dht.begin();                  // nyalakan sensor
  Serial.println("Sensor siap!");
}

void loop() {
  delay(2000);                  // DHT22 butuh jeda minimal 2 detik

  float suhu = dht.readTemperature();   // baca suhu (°C)
  float lembap = dht.readHumidity();    // baca kelembapan (%)

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca sensor! Cek kabel.");
    return;                     // batalkan putaran ini, ulang dari awal loop
  }

  Serial.print("Suhu: ");
  Serial.print(suhu);
  Serial.print(" C | Kelembapan: ");
  Serial.print(lembap);
  Serial.println(" %");
}
