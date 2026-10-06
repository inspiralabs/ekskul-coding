// ============================================================
// P12 SMP — Live Coding 1: Program Mini Konek WiFi
// Salin ke src/main.cpp. Isi nama & password WiFi (harus 2.4 GHz).
// Setelah ini, buka proyek akhir: folder smp/firmware.
// ============================================================
#include <Arduino.h>
#include <WiFi.h>

const char* WIFI_SSID     = "ISI_DI_SINI";   // nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";   // password WiFi

void setup() {
  Serial.begin(115200);

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
}
