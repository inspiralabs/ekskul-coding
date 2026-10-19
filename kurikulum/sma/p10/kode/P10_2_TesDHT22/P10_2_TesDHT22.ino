// ============================================================
// P10 SMA — Program Tes 2: Baca DHT22 (PROGRAM JADI, tidak perlu diubah)
// Rakitan: DHT22 "+" -> 3V3, "out" -> GPIO 13, "-" -> GND.
// Yang harus terlihat: tiap 2 detik muncul suhu & kelembapan di Serial Monitor.
// Genggam / tiup sensor: angkanya harus berubah.
// Butuh library "DHT sensor library" by Adafruit (lihat Panduan Instalasi Library).
// ============================================================
#include <DHT.h>

#define DHT_PIN 13       // ubah HANYA kalau kabel "out" kamu pasang di pin lain

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(115200);
  dht.begin();
  Serial.println();
  Serial.printf("Tes DHT22 di GPIO %d dimulai\n", DHT_PIN);
}

void loop() {
  delay(2000);  // DHT22: maksimal 1 bacaan tiap 2 detik

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();

  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22 -> cek: out ke GPIO 13? + ke 3V3? - ke GND? kabel longgar?");
    return;
  }

  Serial.printf("Suhu: %.1f C | Lembap: %.1f %%\n", suhu, lembap);
}
