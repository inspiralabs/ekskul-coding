# Handoff: Smart Room Monitor (IoT Dashboard)

## Overview
Single-page dashboard for a school project monitoring a DHT22 sensor (temperature + humidity), with manual/auto fan control. Playful, student-friendly UI, fully responsive (mobile/tablet/desktop), light/dark mode.

## About the Design Files
The bundled file (`Smart Room Monitor.dc.html`) is a **design reference built in HTML** — a working interactive prototype showing intended look, layout and behavior, not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, native, etc., or whichever framework fits the actual hardware/backend integration) using its established patterns — reusing the real sensor/data layer instead of the simulated data used here.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are as intended. Recreate pixel-close using the target codebase's own component/styling system.

## Screens / Views
Single screen, vertical stack, all sections always visible (no routing).

### 1. Header
- Left: 52×52px rounded-16px icon tile (gradient `accent.primary → accent.secondary`, a small droplet/leaf glyph in white), title "Smart Room Monitor" (Baloo 2, 800, ~22–30px clamp), subtitle "Monitoring Suhu & Kelembapan — Sensor DHT22" (Nunito, 600, 13px, muted color).
- Right, wraps on narrow screens: connection pill (9px dot + "Online"/"Offline" label, dot pulses via `pulseDot` keyframe, green `#2ED9A6` online / red `#FF6B6B` offline), live clock pill (HH:MM:SS, Baloo 2 800), circular dark-mode toggle button (sun/moon SVG swap).

### 2. Alert banner (conditional)
Shown only when temp > 33°C or < 16°C, or humidity > 85% or < 25%. Rounded-18px full-width bar, soft amber background (`#FFE9CC` light / `#4A2E12` dark), ⚠️ emoji + bold message text. No left-border-stripe treatment.

### 3. Data cards (grid, `auto-fit minmax(280px,1fr)`, gap 20px — 2 cols desktop, stacks on mobile)
Each card: white/dark card bg, 24px radius, 22px padding, soft shadow, hover lift (`translateY(-3px)`).
- **Suhu (temperature) card**: thermometer icon (colored by status), title, trend badge (▲/▼/— + delta°, colored red/blue/muted). Circular gauge: 170×170 SVG, r=70, stroke-width 14, rotated -90°, `stroke-dasharray 439.8`, animated `stroke-dashoffset` (0.6s ease). Center overlay: big number (Baloo 2 800, clamp 36–44px) + "Celsius" label. Ring/number color: blue `#4FB6E8` (<20°C, "Dingin"), green `#2ED9A6` (20–30°C, "Normal"), red `#FF6B6B` (>30°C, "Panas"). Status label centered below.
- **Kelembapan (humidity) card**: same structure, water-drop icon. Colors: yellow `#FFC94D` (<35%, "Kering"), blue `#4FB6E8` (35–70%, "Normal"), purple `#B08CFF` (>70%, "Lembap").

### 4. History chart card
Full width, 24px radius card. Header: "Riwayat Sensor" title + segmented control (pill buttons: "Keduanya" / "Suhu" / "Kelembapan", active = filled `accent.primary` bg + white text, inactive = transparent + muted text). SVG line chart, viewBox `0 0 600 190`, 2 dashed gridlines + solid baseline, two polylines (temp `#FF7A45`, humidity `#4FB6E8`, stroke-width 3, rounded caps/joins), opacity toggled 0/1 (0.3s transition) by the selected view. Legend row below (color swatch + label) plus "2 jam terakhir" on the right.

### 5. Fan control card
Title "Kontrol Kipas". Large tappable card-button (20px radius, full width, 22px padding): 64px circle icon tile with a 3-blade fan SVG (white), spinning via `fanspin` keyframe (1.1s linear infinite) only when fan is ON; status text "Fan Menyala"/"Fan Mati" (Baloo 2 800 20px) + hint line (mode + threshold or "tekan untuk ubah"). Background: gradient `accent.primary → accent.secondary` when ON, neutral gray when OFF. Tapping toggles fan **only in Manual mode**.
Below: 2-segment Manual/Otomatis toggle (dark-filled pill = active).
When mode = Otomatis: reveal a sub-panel with a range slider (20–40°C) labeled "Ambang batas suhu", live value, and helper text "Kipas menyala otomatis jika suhu > X°C".

### 6. Educational panel
Card with 📘 emoji + "Kenapa ini penting?" heading, always-expanded body (no longer collapsible per user feedback) with 3 short paragraphs explaining what DHT22 is, why monitoring matters, and the auto-fan as a simple closed-loop control example.

### 7. Footer
Centered small caption: "Proyek Sekolah • Sensor DHT22 • Data simulasi untuk demo".

## Interactions & Behavior
- **Sensor simulation**: every `updateIntervalSec` (tweak, default 3s) a new random temp/humidity sample is generated (small random walk, clamped 15–38°C / 20–90% RH), pushed into a rolling history (last 20 points) that feeds the chart.
- **Count-up animation**: displayed numbers/gauges lerp toward the latest sample at 20fps (factor 0.15/tick) instead of jumping, for a "live" feel.
- **Trend arrows**: compare current vs previous sample; up/down/flat with a ±0.3 (temp) / ±0.5 (humidity) dead zone.
- **Fan logic**: Auto mode sets fan ON when temp > threshold, recalculated on every sample and on threshold change. Manual mode: user-controlled via the tap toggle, ignored by the auto rule.
- **Offline flicker**: ~6% chance per sample to flip Online→Offline for 2.2s, for demo realism.
- **Dark mode**: toggles a full theme object (bg/card/text/muted/border/shadow); all colors derive from it.
- All transitions use CSS `transition` (colors, dashoffset, opacity, transform) — no JS animation libraries needed.

## State Management
- `temp`, `humidity`, `prevTemp`, `prevHumidity`, `displayTemp`, `displayHumidity` (numbers)
- `history: {temp, humidity}[]` (max 20)
- `fanMode: 'manual' | 'auto'`, `manualFanOn: boolean`, `fanOn: boolean` (derived)
- `threshold: number` (20–40)
- `chartView: 'both' | 'temp' | 'humidity'`
- `darkMode: boolean`, `online: boolean`, `now: Date`
- In production: replace the simulation timer with a real data source (MQTT/WebSocket/HTTP poll from the ESP32/Arduino + DHT22), and the fan toggle with an actual relay/GPIO command call.

## Design Tokens
**Colors**
- Background: `#F2F8F7` light / `#121A1F` dark
- Card: `#FFFFFF` light / `#1C262C` dark
- Text: `#1F2937` light / `#EAF2F1` dark
- Muted text: `#6B7785` light / `#93A6AF` dark
- Border: `rgba(15,30,30,0.07)` light / `rgba(255,255,255,0.08)` dark
- Accent palettes (tweakable): Playful `#FF9F43 → #2ED9A6`, Ocean `#2FA9D6 → #37D6C0`, Sunset `#FF6B81 → #FFB86B`
- Status: cold/dry-neutral blue `#4FB6E8`, normal green `#2ED9A6`, hot/alert red `#FF6B6B`, dry yellow `#FFC94D`, humid purple `#B08CFF`, chart temp line `#FF7A45`

**Typography**: Baloo 2 (600/700/800) for headings, numbers, buttons; Nunito (400/600/700/800) for body/labels.

**Radius**: cards 24px, buttons/pills 14–20px, fully round pills 999px.

**Shadows**: `0 4px 20px <theme.shadow>` on cards; `0 2px 10px` on header pills.

## Assets
No external image assets — all icons are hand-drawn inline SVG (thermometer, droplet, fan blades, sun/moon, chevron). Fonts loaded from Google Fonts (Baloo 2, Nunito).

## Files
- `Smart Room Monitor.dc.html` — full interactive prototype (copied into this folder).
