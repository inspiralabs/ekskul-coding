// ============================================================
// CHALLENGE EASY — Balik Logika
// 1. Upload, pastikan relay klik tiap 2 detik.
// 2. Bayangkan modul diganti ACTIVE-HIGH: ubah HANYA baris #define
//    supaya kode benar untuk modul itu.
// 3. Diskusikan: apa yang terjadi pada relay active-LOW kalian?
// ============================================================
#include <Arduino.h>

#define RELAY_PIN 18
#define RELAY_ON  LOW    // TODO
#define RELAY_OFF HIGH   // TODO

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
