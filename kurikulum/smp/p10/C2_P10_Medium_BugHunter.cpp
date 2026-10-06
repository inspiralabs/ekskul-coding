// ============================================================
// CHALLENGE MEDIUM — Bug Hunter
// Kode ini punya 3 BUG. LED tersambung di pin D4.
// 1 bug bikin ERROR MERAH saat Build,
// 2 bug lainnya TIDAK error tapi LED tetap tidak menyala.
// Temukan & perbaiki sampai LED berkedip!
// ============================================================
#include <Arduino.h>

#define LED_PIN 5

void setup() {
  Serial.begin(115200);
}

void loop() {
  digitalWrite(LED_PIN, HIGH)
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
