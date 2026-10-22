// ============================================================
// P11 SMA — Program Tes 1: Relay Berdetak (PROGRAM JADI, tidak perlu diubah)
// Rakitan: relay IN -> GPIO 14, VCC -> VIN, GND -> GND.
//          VIN -> COM, NO -> kipas (+), kipas (-) -> GND.
// Yang harus terlihat: tiap 2 detik relay "klik", LED relay menyala,
// kipas berputar 2 detik lalu berhenti 2 detik.
// ============================================================

#define RELAY_PIN 14     // ubah HANYA kalau kabel IN kamu pasang di pin lain
#define RELAY_ON  LOW    // modul relay active-LOW: IN = LOW -> relay aktif
#define RELAY_OFF HIGH

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);  // set OFF dulu supaya relay tidak klik saat boot
  pinMode(RELAY_PIN, OUTPUT);
  Serial.println();
  Serial.printf("Tes relay di GPIO %d dimulai\n", RELAY_PIN);
}

void loop() {
  digitalWrite(RELAY_PIN, RELAY_ON);
  Serial.println("Relay AKTIF (IN = LOW, sekitar 0 V)    -> kipas harus BERPUTAR");
  delay(2000);

  digitalWrite(RELAY_PIN, RELAY_OFF);
  Serial.println("Relay MATI  (IN = HIGH, sekitar 3,3 V) -> kipas harus BERHENTI");
  delay(2000);
}
