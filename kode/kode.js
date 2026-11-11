// Halaman /kode/: menampilkan firmware SMA terbaru dengan Device ID kelompok yang dipilih, lalu menyalinnya.
var SUMBER = "/sma/firmware/sma_room_monitor/sma_room_monitor.ino";

// Sama dengan isi_id() di tools/kelompok.py: hanya nilai di dalam tanda kutip yang diganti.
function isiDeviceId(teks, deviceId) {
  return teks.replace(/(const char\* DEVICE_ID\s*=\s*")[^"]*"/, "$1" + deviceId + '"');
}

if (typeof module !== "undefined") module.exports = { isiDeviceId };

if (typeof document !== "undefined") {
  var asli = "";
  var kotak = document.getElementById("kode");
  var pilih = document.getElementById("kelompok");
  var tombol = document.getElementById("salin");
  var ket = document.getElementById("keterangan");

  function kabar(teks, gagal) {
    ket.textContent = teks;
    ket.className = "keterangan" + (gagal ? " gagal" : "");
  }

  function tampilkan() {
    kotak.value = isiDeviceId(asli, pilih.value);
    kabar("Device ID di kode ini: " + pilih.value);
  }

  pilih.addEventListener("change", tampilkan);

  tombol.addEventListener("click", function () {
    var selesai = function () { kabar("Kode " + pilih.value + " tersalin. Tempel di Arduino IDE dengan Ctrl+V."); };
    // Cadangan untuk browser tanpa izin clipboard: pilih isi kotak, lalu salin cara lama.
    var caraLama = function () {
      kotak.focus();
      kotak.select();
      if (document.execCommand("copy")) selesai();
      else kabar("Tidak bisa menyalin otomatis. Klik kotak kode, tekan Ctrl+A lalu Ctrl+C.", true);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(kotak.value).then(selesai, caraLama);
    else caraLama();
  });

  fetch(SUMBER)
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (teks) {
      asli = teks;
      tombol.disabled = false;
      tampilkan();
    })
    .catch(function () { kabar("Kode belum bisa dimuat. Muat ulang halaman, atau minta filenya ke tutor.", true); });
}
