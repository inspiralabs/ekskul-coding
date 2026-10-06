// ============================================================
// CHALLENGE HARD — Kenapa Gagal Terus?
// Kode ini SELALU menulis "Gagal baca sensor!".
// Sensor terpasang di D4 dan jenisnya DHT22. Ada 3 BUG. Perbaiki!
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 5

DHT dht(DHT_PIN, DHT11);

void setup() {
  Serial.begin(115200);
}

void loop() {
  delay(2000);
  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca sensor!");
    return;
  }

  Serial.print("Suhu: ");
  Serial.println(suhu);
}
