// P10 - Kedip Pertama: LED biru bawaan ESP32 berkedip.
// Tidak perlu merakit apa pun. Cukup colok USB -> Upload.

#define LED_PIN 2        // LED biru bawaan ESP32 DevKit V1 ada di GPIO 2

// ===== BOLEH DIUBAH =====
int lamaNyala = 500;     // berapa milidetik LED menyala (1000 = 1 detik)
int lamaMati  = 500;     // berapa milidetik LED mati
// ========================

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println();
  Serial.println("Halo! ESP32 siap berkedip.");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println("Nyala");
  delay(lamaNyala);

  digitalWrite(LED_PIN, LOW);
  Serial.println("Mati");
  delay(lamaMati);
}
