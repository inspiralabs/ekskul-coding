// ============================================================
// SIMULASI WOKWI P11 SMA — Peta Rakitan Lengkap (DHT22 + relay + kipas)
// Cara pakai: wokwi.com -> New Project -> ESP32. Ganti isi tab
// sketch.ino, diagram.json, dan libraries.txt dengan file di folder ini,
// lalu tekan Play (hijau).
//
// Coba: klik sensor DHT22 saat simulasi jalan, geser suhu di atas 30 C
//   -> relay bunyi "klik", LED biru (= kipas) menyala.
//   Turunkan suhu di bawah 29,5 C -> kipas mati lagi.
//
// LED biru + resistor menggantikan kipas (Wokwi tidak punya kipas DC).
// Kabel sama persis dengan tabel "Peta Rakitan Lengkap":
//   3V3 -> DHT22 +, D13 -> DHT22 out, GND -> DHT22 -
//   VIN -> relay VCC & COM, GND -> relay GND & kipas -, D14 -> relay IN,
//   relay NO -> kipas +
// ============================================================
#include <DHT.h>

#define AMBANG    30.0   // suhu (C) kipas mulai menyala

#define DHT_PIN   13
#define RELAY_PIN 14

// Modul relay di diagram ini diatur ACTIVE-LOW (LOW = nyala), sama
// seperti modul relay di kit kita. Relaymu active-HIGH? Ganti jadi false.
#define RELAY_ACTIVE_LOW true

DHT dht(DHT_PIN, DHT22);
bool kipasNyala = false;

void setRelay(bool on) {
  digitalWrite(RELAY_PIN, (on == RELAY_ACTIVE_LOW) ? LOW : HIGH);
}

void setup() {
  Serial.begin(115200);
  setRelay(false);              // kipas mati saat baru menyala
  pinMode(RELAY_PIN, OUTPUT);
  dht.begin();
  Serial.printf("Simulasi siap. Kipas ON di atas %.1f C\n", AMBANG);
}

void loop() {
  delay(2000);                  // DHT22 butuh jeda >= 2 detik

  float suhu = dht.readTemperature();
  float lembap = dht.readHumidity();
  if (isnan(suhu) || isnan(lembap)) {
    Serial.println("Gagal baca DHT22 -> cek kabel out ke D13, + ke 3V3, - ke GND");
    return;
  }

  if (suhu > AMBANG) kipasNyala = true;
  else if (suhu < AMBANG - 0.5) kipasNyala = false;   // jeda 0,5 C supaya relay tidak cetak-cetek

  setRelay(kipasNyala);
  Serial.printf("Suhu: %.1f C | Lembap: %.0f %% -> KIPAS %s\n", suhu, lembap, kipasNyala ? "ON" : "OFF");
}
