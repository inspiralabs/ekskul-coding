// ============================================================
// CHALLENGE HARD — Lampu Lalu Lintas Mini
// Pasang 3 LED: merah D4, kuning D18, hijau D19 (pakai resistor).
// Pola: Hijau 3 detik -> Kuning 1 detik -> Merah 3 detik -> ulang.
// Setiap ganti lampu, tulis di Serial: JALAN / HATI-HATI / BERHENTI.
// ============================================================
#include <Arduino.h>

#define MERAH 4
#define KUNING 18
#define HIJAU 19

void setup() {
  Serial.begin(115200);
  // TODO: jadikan ketiga pin sebagai OUTPUT
}

void loop() {
  // TODO: hijau nyala 3 detik, tulis "JALAN"

  // TODO: kuning nyala 1 detik, tulis "HATI-HATI"

  // TODO: merah nyala 3 detik, tulis "BERHENTI"
}
