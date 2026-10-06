// ============================================================
// P10 SMA — Live Coding 2: Baca DHT22
// DHT22 out -> GPIO 4. platformio.ini: lib_deps = adafruit/DHT sensor library
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  delay(2000);  // DHT22: maksimal 1 bacaan / 2 detik

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22");
    return;   // guard clause: keluar lebih awal kalau data tidak valid
  }

  Serial.printf("Suhu: %.1f C | Lembap: %.1f %%\n", suhu, lembap);
}
