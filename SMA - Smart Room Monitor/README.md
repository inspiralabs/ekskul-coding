# Handoff: Smart Room Monitor (SMA/SMK Starter Template)

## Overview
Single-page IoT dashboard starter template for high-school (SMA/SMK) students learning HTML/CSS/JS, monitoring a DHT22 sensor (temperature + humidity) with manual fan control. It is **deliberately incomplete** — several sections are left as empty "TANTANGAN" (challenge) placeholders for students to build themselves.

## About the Design Files
The bundled file (`SMA - Smart Room Monitor.html`) is a **design reference built in HTML** — a working prototype of the base state (before student customization), not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, native, etc.) using its established patterns, keeping the same educational "starter + empty extension points" structure.

## Fidelity
**High-fidelity** for the implemented sections (header, sensor cards, alert, manual fan). The unimplemented sections (chart, auto fan mode, dark mode, education panel) are intentionally absent — see "Empty Placeholder Sections" below; don't invent finished designs for them unless asked.

## Screens / Views
Single screen, vertical stack, max-width 1000px centered container, 20px outer padding.

### 1. Header
White rounded-24px card, 18×24px padding, soft shadow. Left: 36px emoji logo + title "Smart Room Monitor" (Baloo 2, 800, 22px) + subtitle "Dashboard IoT sensor DHT22 - Proyek Sekolah" (13px, muted). Right (wraps on mobile): connection status pill (12px dot + label, dot pulses via `denyut` keyframe — green `#3ddc97` online / red `#ff5c5c` offline, scale 1→2.6 + fade over 1.6s), live clock pill (HH:MM:SS, tabular-nums, 15px 700, pill bg `--warna-bg` bordered), and an empty `<span id="bagianModeGelap">` placeholder marked for students to add a dark-mode toggle button (TANTANGAN 5).

### 2. Alert banner
Full-width bar, hidden by default (`display:none`, shown via `.tampil` class), 16px radius, amber bg `#fff1e6` / border `#ffd0a8` / text `#a3450a`, ⚠️ emoji + bold 14px message. Triggered when temp > 32°C (`AMBANG_BATAS_SUHU_TINGGI`).

### 3. Data cards (grid 2 cols desktop / 1 col ≤760px, 20px gap)
Two white rounded-24px cards (suhu/kelembapan), 24px padding, flex row, hover lift (`translateY(-4px)` + deeper shadow). Each shows only a label, a big number (44px/800 + 22px unit), and a colored status pill (12px/700, white text) — **no icon, gauge, or trend indicator**; a comment marks this as TANTANGAN 1 for students to add those themselves.
- Suhu: <22°C blue "Dingin" (`--warna-dingin`), 22–29°C green "Normal" (`--warna-normal`), >29°C red "Panas" (`--warna-panas`).
- Kelembapan: <40% yellow "Kering" (`--warna-kering`), 40–70% blue "Normal" (`--warna-lembap-normal`), >70% purple "Lembap" (`--warna-lembap-tinggi`).

### 4. Empty: History chart (TANTANGAN 4)
A dashed-border placeholder card (`.kartu-kosong`, id `bagianGrafik`) with a comment instructing students to add a `<canvas>`-based chart of temp/humidity history. No chart is implemented in this file.

### 5. Fan control
White rounded-24px card, "🌀 Kontrol Fan" heading. Contains an empty dashed placeholder (id `bagianModeFan`, TANTANGAN 3) for students to add Manual/Otomatis mode buttons + a threshold slider, followed by the **working manual toggle**: a large clickable row (icon + status text "Fan Menyala"/"Fan Mati" + hint + an iOS-style switch). Background turns to an orange gradient (`#fff1e6 → #ffe4cf`, border `--warna-fan-aktif`) and the fan emoji spins (`putarFan`, 0.9s linear infinite) when ON. Only manual toggling works — clicking anywhere on the row flips `fanMenyala`.

### 6. Empty: Education panel (TANTANGAN 6)
Another dashed placeholder card (id `bagianEdukasi`) with a comment asking students to build a collapsible card explaining the DHT22 sensor.

### 7. Footer
Centered 12px muted caption: "Dibuat sebagai proyek belajar IoT - data pada dashboard ini adalah simulasi dummy."

## Empty Placeholder Sections
Four sections are intentionally left as `.kartu-kosong` (dashed 2px border, 24px radius, muted text, min-height 40px) or bare marker elements — these are NOT bugs, they are the pedagogical point of the template:
1. Dark-mode toggle button (in header)
2. History chart (`<canvas>`)
3. Fan Manual/Otomatis mode switch + threshold slider
4. Collapsible DHT22 education panel

When recreating in a real codebase, either keep these as empty extension points (if rebuilding the same teaching template) or implement them fully (if this is meant to become a finished product) — confirm which with the requester.

## Interactions & Behavior
- **Sensor simulation**: every 4s, `generateDataSensor()` randomly walks temp (18–40°C) and humidity (20–95%) by small deltas — replace with a real fetch()/WebSocket read from the DHT22 in production.
- **Status pill coloring**: recalculated on every update, using the thresholds above.
- **Alert**: shown/hidden based on the temperature threshold only (humidity alert not implemented at this stage).
- **Clock**: updates every second via `setInterval`.
- **Connection status flicker**: every 8s, 95% chance "Online", 5% chance "Offline" (cosmetic demo realism).
- **Fan toggle**: plain boolean flip on click, no auto-logic (auto mode is a student exercise).
- No CSS transitions beyond hover-lift and the two keyframe animations (`denyut` pulse, `putarFan` spin).

## State Management
Plain global vars (no framework): `suhuSaatIni`, `lembapSaatIni`, `fanMenyala` (booleans/numbers), `AMBANG_BATAS_SUHU_TINGGI` (constant, 32). All DOM updates are direct `getElementById` + `textContent`/`classList` calls — no virtual DOM or state library. When recreating in React/Vue/etc., these map to simple component state (temp, humidity, fanOn) plus a derived status/color per value.

## Design Tokens
**Colors** (all defined as CSS custom properties in `:root` — copy these into the target design-token file):
- `--warna-primer: #ff8a3d` (accent/orange), `--warna-sekunder: #3ddc97` (mint), `--warna-biru: #4d9de0`
- `--warna-bg: #f4f7fb`, gradient bg `linear-gradient(135deg, #eef5ff 0%, #f4fff9 100%)`
- `--warna-card: #ffffff`, `--warna-teks: #24313f`, `--warna-teks-lemah: #7b8a99`, `--warna-border: #e5ecf3`
- Temp status: dingin `#4d9de0`, normal `#3ddc97`, panas `#ff5c5c`
- Humidity status: kering `#f4c542`, normal `#4d9de0`, lembap `#a367e0`
- Connection: online `#3ddc97`, offline `#ff5c5c`
- Fan: aktif `#ff8a3d`, mati `#b7c3cf`

**Typography**: `'Baloo 2', 'Quicksand', system-ui, sans-serif` throughout; headings/numbers weight 800, body/labels 700 for emphasis.

**Radius**: `--radius-besar: 24px` (cards), `--radius-sedang: 16px` (inner elements/alert), pills fully round (999px).

**Shadow**: `--shadow-card: 0 8px 24px rgba(36, 49, 63, 0.08)`; hover state deepens to `0 14px 32px rgba(36, 49, 63, 0.14)`.

## Assets
No external images — emoji used as icons (🌡️, 💧, 🌀, ⚠️). No font/icon library beyond Google Fonts (Baloo 2 / Quicksand, load these in the target project).

## Files
- `SMA - Smart Room Monitor.html` — the starter-template prototype (copied into this folder), plain HTML/CSS/vanilla JS.
