// ============================================================
// CHALLENGE EASY P10 SMA — Pindah Pin Relay (PROGRAM JADI)
// 1. CABUT USB. Pindahkan kabel biru relay IN dari D14 ke D26.
// 2. Ubah SATU angka di bawah: RELAY_PIN 14 -> 26.
// 3. Upload, buka Serial Monitor. Relay harus klik lagi tiap 2 detik.
// 4. Kembalikan kabel ke D14 dan angka ke 14 setelah selesai.
// Pin aman lain: 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33.
// JANGAN pakai 0, 2, 5, 12, 15 (strapping) atau 34-39 (input-only).
// ============================================================

#define RELAY_PIN 14     // <-- UBAH ANGKA INI SAJA
#define RELAY_ON  LOW
#define RELAY_OFF HIGH

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  Serial.println();
  Serial.printf("Relay sekarang dikendalikan dari GPIO %d\n", RELAY_PIN);
}

void loop() {
  digitalWrite(RELAY_PIN, RELAY_ON);
  Serial.printf("GPIO %d = LOW  -> relay AKTIF, kipas berputar\n", RELAY_PIN);
  delay(2000);

  digitalWrite(RELAY_PIN, RELAY_OFF);
  Serial.printf("GPIO %d = HIGH -> relay MATI, kipas berhenti\n", RELAY_PIN);
  delay(2000);
}
