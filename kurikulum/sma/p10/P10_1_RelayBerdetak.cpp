// ============================================================
// P10 SMA — Live Coding 1: Relay Berdetak
// Relay IN -> GPIO 18, VCC -> VIN, GND -> GND. Modul active-LOW.
// ============================================================
#include <Arduino.h>

#define RELAY_PIN 18
#define RELAY_ON  LOW
#define RELAY_OFF HIGH

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);  // set level dulu supaya relay tidak klik saat boot
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  digitalWrite(RELAY_PIN, RELAY_ON);
  Serial.println("Relay ON");
  delay(2000);

  digitalWrite(RELAY_PIN, RELAY_OFF);
  Serial.println("Relay OFF");
  delay(2000);
}
