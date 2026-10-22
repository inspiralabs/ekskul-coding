// ============================================================
// P11 SMP — Program Jadi: Baca Sensor DHT22 + Grafik Suhu
// TIDAK PERLU MENULIS KODE. Buka di Arduino IDE, Upload, lalu buka:
//   - Serial Monitor (kaca pembesar, kanan atas)   -> lihat angkanya
//   - Serial Plotter (ikon gelombang, kanan atas)  -> lihat grafiknya, lalu tiup sensornya!
// Kabel DHT22: + ke 3V3, out ke D4, - ke GND.
// Butuh library "DHT sensor library" by Adafruit (sudah dipasang di P10, Level 3).
// ============================================================
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

  // Bentuk "Nama:angka,Nama:angka" bisa dibaca Serial Monitor DAN Serial Plotter
  Serial.print("Suhu:");
  Serial.print(suhu);
  Serial.print(",Kelembapan:");
  Serial.println(lembap);
}
