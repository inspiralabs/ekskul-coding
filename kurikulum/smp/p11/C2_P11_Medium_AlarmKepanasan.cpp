// ============================================================
// CHALLENGE MEDIUM — Alarm Kepanasan
// Jika suhu > 30 -> tulis "PANAS!" di Serial DAN LED di D2 menyala.
// Jika tidak -> LED mati.
// Uji dengan menggenggam sensor. Ganti angka 30 kalau kelas sudah panas.
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4               // kaki "out" DHT22 di pin D4
#define LED_PIN 2               // LED alarm

DHT dht(DHT_PIN, DHT22);        // kenalkan sensor: di pin 4, jenisnya DHT22

void setup() {
  Serial.begin(115200);
  dht.begin();                  // nyalakan sensor
  // TODO: jadikan LED_PIN sebagai OUTPUT
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

  // TODO: jika suhu > 30 -> Serial.println("PANAS!") dan nyalakan LED
  //       jika tidak   -> matikan LED
}
