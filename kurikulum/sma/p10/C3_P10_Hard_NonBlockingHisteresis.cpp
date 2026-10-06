// ============================================================
// CHALLENGE HARD — Non-Blocking + Histeresis
// 1. Kipas ON jika suhu > 30.0, OFF jika < 29.0, di antaranya PERTAHANKAN status.
// 2. Tanpa delay(): pakai millis().
// 3. LED GPIO 2 berkedip tiap 250 ms BERSAMAAN dengan sensor tiap 2 detik.
// ============================================================
#include <Arduino.h>
#include <DHT.h>

#define DHT_PIN 4
#define RELAY_PIN 18
#define LED_PIN 2
#define RELAY_ON  LOW
#define RELAY_OFF HIGH
#define BATAS_ON  30.0
#define BATAS_OFF 29.0

DHT dht(DHT_PIN, DHT22);

bool kipasNyala = false;
bool ledNyala = false;
unsigned long terakhirSensor = 0;
unsigned long terakhirLed = 0;

void setup() {
  Serial.begin(115200);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
  dht.begin();
}

void loop() {
  // TODO Tugas 1: tiap 250 ms, balik status LED (pola: millis() - terakhirLed >= 250)

  // TODO Tugas 2: tiap 2000 ms, baca suhu (cek isnan), lalu:
  //   suhu > BATAS_ON  -> kipasNyala = true
  //   suhu < BATAS_OFF -> kipasNyala = false
  //   di antaranya     -> jangan diubah
  //   tulis ke relay + Serial
}
