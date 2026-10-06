// ============================================================
// CHALLENGE HARD — Pengatur Waktu Kirim
// 1. Tambahkan pembacaan DHT22 (dari P11) ke loop().
// 2. Hitung data ke berapa: "Data ke-1: 28.40 C", "Data ke-2: ..."
// 3. Jedanya 5 detik.
// 4. Di proyek akhir, SEND_INTERVAL_MS = 4000 artinya apa?
// ============================================================
#include <Arduino.h>
#include <WiFi.h>
#include <DHT.h>

#define DHT_PIN 4

const char* WIFI_SSID     = "ISI_DI_SINI";   // nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // password WiFi

DHT dht(DHT_PIN, DHT22);
int kiriman = 0;   // penghitung data

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);      // mulai menyambung
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {    // SELAMA belum tersambung...
    delay(500);
    Serial.print(".");                       // ...tulis titik
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());            // alamat ESP32 di jaringan
}

void loop() {
  // TODO: tunggu 5 detik
  // TODO: baca suhu, cek isnan
  // TODO: tambah kiriman, lalu tampilkan "Data ke-<kiriman>: <suhu> C"
}
