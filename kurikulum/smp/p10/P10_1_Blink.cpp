// ============================================================
// P10 SMP — Live Coding 1: Blink LED
// Salin seluruh isi file ini ke src/main.cpp, lalu Upload.
// LED dicolok ke pin D4 (lewat resistor 220 ohm).
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
  delay(1000);                  // tunggu 1 detik

  digitalWrite(LED_PIN, LOW);   // mati
  Serial.println("LED mati");
  delay(1000);
}
