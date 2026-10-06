// ============================================================
// CHALLENGE EASY — Atur Kecepatan
// 1. Buat LED berkedip CEPAT: nyala 200 ms, mati 200 ms.
// 2. Lalu buat LAMBAT: nyala 3 detik, mati 1 detik.
// Petunjuk: cukup ubah angka di dalam delay(...).
// ============================================================
#include <Arduino.h>

#define LED_PIN 4   // LED dicolok ke pin D4

void setup() {
  pinMode(LED_PIN, OUTPUT);     // pin 4 = keluaran
  Serial.begin(115200);         // buka "jalur ngobrol" ke laptop
  Serial.println("ESP32 siap!");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // nyala
  Serial.println("LED nyala");
  delay(1000);                  // TODO: ubah angka ini (nyala)

  digitalWrite(LED_PIN, LOW);   // mati
  Serial.println("LED mati");
  delay(1000);                  // TODO: ubah angka ini (mati)
}
