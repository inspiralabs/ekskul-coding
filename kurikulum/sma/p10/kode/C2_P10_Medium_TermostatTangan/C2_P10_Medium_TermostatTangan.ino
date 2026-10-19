// ============================================================
// CHALLENGE MEDIUM P10 SMA — Termostat Tangan (PROGRAM JADI)
// Kipas menyala sendiri kalau suhu > AMBANG, mati lagi kalau suhu
// turun 0,5 C di bawah AMBANG.
// 1. Upload apa adanya, lihat suhu ruangan di Serial Monitor.
// 2. Ubah SATU angka: AMBANG = suhu ruangan sekarang + 1 (misal 29.5).
// 3. Upload lagi. Genggam sensor DHT22 -> kipas harus menyala sendiri.
//    Lepas genggaman, tunggu -> kipas mati sendiri.
// Butuh library "DHT sensor library" by Adafruit (lihat Panduan Instalasi Library).
// ============================================================
#include <DHT.h>

#define AMBANG    30.0   // <-- UBAH ANGKA INI SAJA (derajat Celsius)

#define DHT_PIN   13
#define RELAY_PIN 14
#define RELAY_ON  LOW
#define RELAY_OFF HIGH

DHT dht(DHT_PIN, DHT22);
bool kipasNyala = false;

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  dht.begin();
  Serial.println();
  Serial.printf("Termostat siap. Kipas ON di atas %.1f C\n", AMBANG);
}

void loop() {
  delay(2000);

  float suhu = dht.readTemperature();
  if (isnan(suhu)) {
    Serial.println("Gagal baca DHT22 -> cek kabel out ke GPIO 13, + ke 3V3, - ke GND");
    return;
  }

  if (suhu > AMBANG) kipasNyala = true;
  else if (suhu < AMBANG - 0.5) kipasNyala = false;   // jeda 0,5 C supaya relay tidak cetak-cetek

  digitalWrite(RELAY_PIN, kipasNyala ? RELAY_ON : RELAY_OFF);
  Serial.printf("Suhu: %.1f C | ambang %.1f C -> KIPAS %s\n", suhu, AMBANG, kipasNyala ? "ON" : "OFF");
}
