// Challenge Hard P10 - Pesan Rahasia: LED biru mengirim pesan dalam sandi Morse.
// Titik = kedip pendek, garis = kedip panjang.

#define LED_PIN 2

// ===== BOLEH DIUBAH =====
const char* PESAN = "SOS";   // huruf A-Z, angka 0-9, dan spasi
int TITIK = 250;             // lama 1 titik (milidetik). Garis = 3x titik
// ========================

const char* HURUF[] = {".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
                       "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
                       "..-", "...-", ".--", "-..-", "-.--", "--.."};
const char* ANGKA[] = {"-----", ".----", "..---", "...--", "....-",
                       ".....", "-....", "--...", "---..", "----."};

void kedip(int lama) {
  digitalWrite(LED_PIN, HIGH);
  delay(lama);
  digitalWrite(LED_PIN, LOW);
  delay(TITIK);                       // jeda antar kedip = 1 titik
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  Serial.println();
  Serial.printf("Mengirim pesan: %s\n", PESAN);

  for (int i = 0; PESAN[i] != '\0'; i++) {
    char c = toupper(PESAN[i]);
    const char* kode = nullptr;
    if (c >= 'A' && c <= 'Z') kode = HURUF[c - 'A'];
    if (c >= '0' && c <= '9') kode = ANGKA[c - '0'];

    if (kode == nullptr) {            // spasi / tanda baca = jeda antar kata
      Serial.println("(spasi)");
      delay(TITIK * 4);
      continue;
    }

    Serial.printf("%c = %s\n", c, kode);
    for (int j = 0; kode[j] != '\0'; j++) {
      kedip(kode[j] == '.' ? TITIK : TITIK * 3);
    }
    delay(TITIK * 2);                 // jeda antar huruf (total 3 titik)
  }

  delay(TITIK * 10);                  // istirahat sebelum pesan diulang
}
