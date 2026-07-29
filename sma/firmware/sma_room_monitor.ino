// ============================================================
// Smart Room Monitor -- Template SMA (versi TANTANGAN)
// Baca sensor DHT22 + kirim data (sudah jadi), kontrol relay
// lewat mini web server ESP32 (TANTANGAN, kamu isi sendiri).
//
// Cari kata "TANTANGAN" di file ini untuk tahu bagian yang
// perlu kamu lengkapi. Bagian berlabel "JANGAN UBAH" adalah
// koneksi ke backend yang sudah disiapkan tutor.
// ============================================================
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <DHT.h>
#include <WebServer.h>

// ============ JANGAN UBAH: koneksi ke backend, sudah disiapkan tutor ============
// Ini sudah disiapkan tutor -- jangan diganti, kecuali diminta tutor.
// SERVER_URL dan API_KEY jangan diubah
const char* SERVER_URL = "https://api-ekskulcoding.inspiralabs.id/api/readings";
const char* API_KEY    = "ekskul-coding-seru";

// ============ BOLEH DIUBAH: identitas device, WiFi & pin ============
const char* DEVICE_ID     = "sma-1";        // GANTI sesuai ID kelompokmu dari daftar tutor!
const char* WIFI_SSID     = "ISI_DI_SINI";  // Di isi sesuai dengan nama WiFi
const char* WIFI_PASSWORD = "ISI_DI_SINI";  // Di isi sesuai dengan password WiFi

#define DHT_PIN 4                            // ganti sesuai pemasangan kabel DHT22
#define RELAY_PIN 5                          // ganti sesuai pemasangan modul relay

DHT dht(DHT_PIN, DHT22);
WebServer fanServer(80);

bool fanOn = false;  // status relay/fan terkini

// ============ TANTANGAN: lengkapi fungsi ini (Pertemuan 4) ============
// Fungsi ini dipanggil otomatis saat backend mengirim POST ke http://<ip-esp32-ini>/fan
// dengan body JSON: {"fanOn": true}  atau  {"fanOn": false}
void handleFanCommand() {
  // TODO 1: baca body request.
  //         hint: fanServer.arg("plain") berisi teks body-nya, contoh: {"fanOn":true}

  // TODO 2: cari tahu apakah body itu mengandung "true" atau "false",
  //         simpan hasilnya (true/false) ke variabel fanOn di atas.
  //         hint paling sederhana: body.indexOf("true") >= 0

  // TODO 3: nyalakan/matikan relay sesuai fanOn.
  //         PENTING: modul relay umumnya ACTIVE-LOW, artinya:
  //           digitalWrite(RELAY_PIN, LOW)  => relay ON  (menyala)
  //           digitalWrite(RELAY_PIN, HIGH) => relay OFF (mati)
  //         ini KEBALIKAN dari LED biasa -- cek datasheet modul relaymu
  //         kalau ternyata active-HIGH, balik logikanya.

  // TODO 4: balas ke backend supaya tahu perintah diterima:
  //         fanServer.send(200, "application/json", "{\"ok\":true}");
}

void setup() {
  // ==== JANGAN UBAH ====
  Serial.begin(115200);
  dht.begin();
  pinMode(RELAY_PIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Menghubungkan ke WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Terhubung! IP ESP32 ini: ");
  Serial.println(WiFi.localIP());
  // ==== akhir bagian JANGAN UBAH ====

  // ============ TANTANGAN: daftarkan route /fan ke handleFanCommand ============
  // hint: fanServer.on("/fan", HTTP_POST, handleFanCommand);
  //       fanServer.begin();
}

unsigned long lastSendTime = 0;
const unsigned long SEND_INTERVAL_MS = 4000;  // DHT22 butuh jeda >=2 detik antar baca

void loop() {
  // ==== JANGAN UBAH ====
  // WAJIB dipanggil tiap iterasi supaya ESP32 tetap bisa menerima
  // perintah fan dari backend kapan saja -- INILAH SEBABNYA kita pakai
  // millis() di bawah, bukan delay(): delay() akan membuat baris ini
  // berhenti jalan dan dashboard jadi telat mengontrol fan.
  fanServer.handleClient();

  if (millis() - lastSendTime < SEND_INTERVAL_MS) return;
  lastSendTime = millis();

  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temp) || isnan(humidity)) {
    Serial.println("Gagal baca sensor DHT22, coba lagi 4 detik lagi...");
    return;
  }

  Serial.print("Suhu: "); Serial.print(temp); Serial.print(" C, ");
  Serial.print("Kelembapan: "); Serial.print(humidity); Serial.println(" %");

  String json = "{";
  json += "\"deviceId\":\"" + String(DEVICE_ID) + "\",";
  json += "\"temp\":" + String(temp) + ",";
  json += "\"humidity\":" + String(humidity) + ",";
  json += "\"ip\":\"" + WiFi.localIP().toString() + "\"";
  json += "}";

  // SERVER_URL diawali "https://" (server online), jadi butuh WiFiClientSecure.
  // setInsecure() melewati verifikasi sertifikat -- cukup untuk demo kelas,
  // BUKAN cara aman untuk aplikasi production sungguhan.
  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.begin(client, SERVER_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-API-Key", API_KEY);

  int responseCode = http.POST(json);
  Serial.print("Kirim data -> kode respons: ");
  Serial.println(responseCode);
  if (responseCode > 0) {
    String body = http.getString();
    Serial.println(body);
    // fallback: kalau perintah langsung dari backend sempat gagal,
    // status fanOn dari response POST ini dipakai sebagai cadangan.
    bool fallbackFanOn = body.indexOf("\"fanOn\":true") >= 0;
    fanOn = fallbackFanOn;
    digitalWrite(RELAY_PIN, fanOn ? LOW : HIGH);  // active-LOW
  }
  http.end();
  // ==== akhir bagian JANGAN UBAH ====
}
