// ============================================================
// P10 SMP — Program Jadi 1: Blink LED (tes upload)
// TIDAK PERLU MENULIS KODE. Buka file ini di Arduino IDE, lalu klik Upload (panah ->).
// Rakitan: D2 -> resistor 220 ohm -> kaki PANJANG LED, kaki pendek LED -> GND.
// Kalau berhasil: LED di breadboard DAN lampu biru di board ESP32 berkedip tiap 1 detik.
// Challenge Medium: ubah angka di delay(...)   Challenge Hard: ubah angka LED_PIN.
// ============================================================

#define LED_PIN 2   // LED dicolok ke pin D2 (sama dengan lampu biru bawaan board)

void setup() {
  pinMode(LED_PIN, OUTPUT);     // pin 2 = keluaran
  Serial.begin(115200);         // buka "jalur ngobrol" ke laptop
  Serial.println("ESP32 siap! Upload berhasil.");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // nyala
  Serial.println("LED nyala");
  delay(1000);                  // tunggu 1 detik

  digitalWrite(LED_PIN, LOW);   // mati
  Serial.println("LED mati");
  delay(1000);
}
