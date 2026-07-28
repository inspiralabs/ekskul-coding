# Handoff: Smart Room Monitor Junior (SMP Template)

## Overview
Single-page IoT dashboard for junior-high (SMP) students learning HTML/CSS for the first time — read-only monitoring of a DHT22 sensor (temperature + humidity), no device controls. Same visual theme as the SMA/SMK "Smart Room Monitor" template, but fully implemented with static demo data (no simulation loop) and minimal JavaScript (clock only).

## About the Design Files
The bundled file (`SMP - Smart Room Monitor Junior.html`) is a **design reference built in HTML** — a finished-looking static prototype, not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, native, etc.) using its established patterns, wiring the static numbers up to a real DHT22 data source.

## Fidelity
**High-fidelity.** All sections are fully designed and visible (unlike the SMA/SMK version, nothing is left as an empty exercise except one clearly-labeled free-exploration box at the bottom).

## Screens / Views
Single screen, vertical stack, max-width 1000px centered container, 20px padding. All top-level cards fade+slide in on load (`muncul` keyframe, 0.6s ease).

### 1. Header
White rounded-24px card, 20×26px padding, shadow. Left: 40px emoji logo + "Smart Room Monitor Junior" title (Baloo 2, 800, 24px) + subtitle "Dashboard pemantau suhu & kelembapan ruangan" (14px muted). Right: connection pill (13px pulsing green dot + "Online" label, `denyut` keyframe scale 1→2.6 fade 1.6s) and a static clock pill (HH:MM:SS, tabular-nums, updates live via JS).

### 2. Alert banner
Always-visible bar (no show/hide logic — static demo), 16px radius, amber bg `#fff1e6`/border `#ffd0a8`/text `#a3450a`, ⚠️ emoji + message "Suhu ruangan cukup tinggi hari ini, pastikan ventilasi terbuka!" (15px bold).

### 3. Sensor cards (grid 2 cols desktop / 1 col ≤760px, 20px gap)
Two white rounded-24px cards, 26px padding, flex row (gauge + info), hover lift (`translateY(-4px)` + deeper shadow).
- **Circular gauge**: 140×140 SVG, r=58, stroke-width 13, rotated -90°, track color `--warna-border`, colored value ring (`stroke-dasharray 364`, fixed `stroke-dashoffset` per current static value — no animation/JS binding). Emoji centered inside (🌡️ / 💧, 30px).
- **Suhu card**: label "Suhu Ruangan", big number "26°C" (48px/800 + 24px unit), green "Normal" pill (`--warna-normal`).
- **Kelembapan card**: label "Kelembapan Udara", big number "60%", blue "Normal" pill (`--warna-lembap-normal`).
- No trend indicators (intentionally omitted for simplicity).

### 4. Room status card (replaces fan control — no device control in this version)
White rounded-24px card, 26px padding, flex row: 56px emoji (😊) + bold title "Ruangan Nyaman" (20px/800) + description "Suhu dan kelembapan dalam kondisi baik untuk belajar." (14px muted). Meant to be swapped for other emoji/text combos based on sensor thresholds (e.g. 🥵 "Ruangan Terlalu Panas").

### 5. Education panel
Native `<details><summary>` element (no JS needed) styled as a white rounded-24px card. Summary: "📚 Kenapa Ini Penting? (klik untuk buka)" (18px/800) with a ▾ chevron that rotates 180° on `[open]`. Body: 3-column responsive grid (`auto-fit minmax(220px,1fr)`) of light-gray rounded info boxes explaining what DHT22 is, and why temperature/humidity matter, in simple SMP-level language.

### 6. Free-exploration box
Dashed-border placeholder card (`.kotak-kosong`) with visible instructional text: "✏️ Ini area kosong untuk kamu isi sendiri - contoh ide: kartu cuaca hari ini, foto ruangan kelas, atau tombol like. Hapus kotak ini kalau tidak dipakai." This is the only intentionally-incomplete element in the file.

### 7. Footer
Centered caption row with a top border separator (1px `--warna-border`, 20px top padding): three bold 13px muted labels separated by small 4px round dots — "SMP Asy Syahid • Ekskul Coding • InspiraLabs".

## Note on the History Chart
An earlier iteration of this template included a chart card (SVG line chart matching the SMA/SMK "Demo" dashboard's dashed-gridline + smooth-polyline style, two lines for temp/humidity, no dots, no toggle). It was removed at the requester's request in this file — mention this to the user if they want it re-added; the SMA/SMK sibling handoff package's "Demo" reference has the matching visual spec if needed.

## Interactions & Behavior
- **Clock**: only live JS behavior — `perbaruiJam()` updates `#jamRealtime` every second via `setInterval`.
- Everything else (gauge fill amounts, status pill colors/text, alert message, room-status emoji/text) is **static markup** — no simulation loop, matching the "keep JS minimal" brief for first-time students.
- Education panel expand/collapse uses native `<details>` — zero JavaScript.
- Hover lift on sensor cards is pure CSS `transition`.

## State Management
None — no JS state beyond the clock. When recreating in a component framework, the temp/humidity values, status colors, and room-status text should become props/state driven by a real (or mocked) DHT22 reading; the gauge ring's `stroke-dashoffset` should be computed as `364 * (1 - percent)`.

## Design Tokens
Same palette as the SMA/SMK sibling template — CSS custom properties in `:root`:
- `--warna-primer: #ff8a3d`, `--warna-sekunder: #3ddc97`, `--warna-biru: #4d9de0`
- Background gradient: `linear-gradient(135deg, #eef5ff 0%, #f4fff9 100%)`
- `--warna-card: #ffffff`, `--warna-teks: #24313f`, `--warna-teks-lemah: #7b8a99`, `--warna-border: #e5ecf3`
- Temp status: dingin `#4d9de0`, normal `#3ddc97`, panas `#ff5c5c`
- Humidity status: kering `#f4c542`, normal `#4d9de0`, lembap tinggi `#a367e0`
- Connection: online `#3ddc97`, offline `#ff5c5c`

**Typography**: `'Baloo 2', 'Quicksand', system-ui, sans-serif`; numbers/headings 800 weight, labels 700, body copy 400/normal at 14–16px (slightly larger than the SMA/SMK version, per the "friendlier for beginners" brief).

**Radius**: `--radius-besar: 24px` (all cards), `--radius-sedang: 16px` (alert/inner boxes), pills fully round.

**Shadow**: `--shadow-card: 0 8px 24px rgba(36, 49, 63, 0.08)`, hover deepens to `0 14px 32px rgba(36, 49, 63, 0.14)`.

## Assets
No external images — emoji used as all icons (🌡️, 💧, 😊, 📚, ⚠️, ✏️). Load Google Fonts Baloo 2 / Quicksand in the target project.

## Files
- `SMP - Smart Room Monitor Junior.html` — the full static prototype (copied into this folder), plain HTML/CSS + minimal vanilla JS (clock only).
