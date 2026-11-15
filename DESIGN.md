# Design System: Tử Vi Đẩu Số Thiên Kỷ (Imperial Esoteric Astrolabe)

> Synthesized using **`obra/superpowers`** (`brainstorming` → `frontend-design` → `verification-before-completion`) and **`taste-design`** (Anti-Slop Semantic UI Architecture).

---

## 1. Visual Theme & Atmosphere
- **Archetype**: *Khâm Thiên Giám Tinh Bàn* — Imperial Oriental Astrolabe & Classical Woodblock Horoscope Scroll (*Cổ Bản Mệnh Thư*).
- **Mood**: Sacred, scholarly, restrained, and deeply esoteric. Feels like an antique black-lacquer and brass astrolabe (*La Kinh Đồng Cổ*) resting on warm aged Xuan parchment (*Giấy Tuyên Thành*), illuminated by warm candlelight.
- **Density**: `8.5 / 10` (Cockpit/Astrolabe High-Density — 108 stars across 12 palaces + Central Heaven Plate + Live Interpretation Scroll within `100dvh`).
- **Variance**: `6 / 10` (Asymmetric 64/36 Split-Screen with a symmetric 4×4 traditional Lạc Thư astrolabe grid).
- **Motion**: `4 / 10` (Restrained, ceremonial micro-motion: 180s perpetual rotation of the central Bagua astrolabe ring, smooth SVG ray transitions when switching palaces).

---

## 2. Color Calibration & Tokens (Strict Anti-Neon Esoteric Palette)
No cold tech blues (`slate-900`), no neon greens, no bright orange SaaS buttons, and no pure `#000000`.

| Semantic Token | Hex | Functional Role |
| :--- | :--- | :--- |
| **Obsidian Ink (`--bg-canvas`)** | `#0B0806` | Primary viewport canvas (warm charcoal-ebony, never cold blue) |
| **Agarwood Lacquer (`--bg-surface`)** | `#130E0A` | Palace cell surface with subtle radial warm-bronze vignette |
| **Imperial Parchment (`--text-primary`)** | `#EFE4CE` | Primary star names, titles, and classical reading prose |
| **Aged Bronze (`--text-secondary`)** | `#A89472` | Secondary metadata, branch labels, and commentary |
| **Dim Brass (`--border-hairline`)** | `#3D2E1A` | 1px structural palace dividers and inner frames |
| **Imperial Gold (`--accent-gold`)** | `#D4AF37` | Active palace frame, Emperor stars (`Tử Vi`, `Thiên Phủ`), primary highlights |
| **Cinnabar Seal (`--accent-cinnabar`)** | `#A82822` | Traditional carved stamps (`Ấn Triện`), `Xung Chiếu` ray, `Hóa Kỵ` & `Triệt` seals |
| **Celadon Jade (`--accent-jade`)** | `#4E9A7F` | `Tam Hợp` triad rays and Auspicious Minor Stars (`Cát Tinh` — muted jade, never neon) |

### Five Elements (`Ngũ Hành`) Star Color Calibration
- **Kim (Metal)**: `#F4F1EA` (Warm Silver-Ivory)
- **Mộc (Wood)**: `#68B694` (Celadon Bamboo Jade)
- **Thủy (Water)**: `#73A9C9` (Mineral Azurite Blue)
- **Hỏa (Fire)**: `#D96B59` (Mineral Cinnabar Coral)
- **Thổ (Earth)**: `#E2B458` (Imperial Ochre Gold)

---

## 3. Typography Architecture
- **Display & Classical Titles**: `'Cinzel'` & `'Cormorant Garamond'` / `'Noto Serif'` — high-contrast classical serifs evoking carved woodblock print (*Mộc Bản*).
- **Reading Body**: `'Noto Serif'` — relaxed leading (`1.65`), warm parchment color (`#EFE4CE`), max `65ch` width in reading panels.
- **High-Density Numerals**: `'JetBrains Mono'` (`font-variant-numeric: tabular-nums`) — mandatory for all ages (`Đại Vận 5, 15, 25...`), lunar months (`T.1–T.12`), solar/lunar dates, and True Solar Time coordinates (`105.68°E`).

---

## 4. Spatial Budget & Zero-Overlap Mathematics (`obra/superpowers` Verification)
On a standard laptop viewport (`1366×768` or `1920×1080` at `125%–150%` DPI scaling, effective height `~640px–720px`):
1. **Top Command Bar**: Fixed `40px` height (`h-10`), single line (`whitespace-nowrap`), zero wrapping.
2. **Astrolabe 4×4 Grid**: `(100dvh - 48px) / 4` ≈ `145px–175px` per palace cell.
3. **Internal Palace Cell 4-Zone Allocation**:
   - **Zone 1 — Palace Header (`20px`)**: Left: `Stem.Branch` (`M.Thân`) | Center: `PALACE NAME` + `[身]` seal | Right: Role Seal + `Đại Hạn` age.
   - **Zone 2 — Major Stars (`22px`)**: Single horizontal centered row (`flex-wrap justify-center gap-x-2`). Attached `[Lộc/Quyền/Khoa/Kỵ]` seal directly on the transforming star.
   - **Zone 3 — Minor Stars (`flex-1`, `~80px`)**:
     - Deduplicated Tứ Hóa (no duplicate `Hóa Khoa`/`Hóa Kỵ` line if already badged on a star).
     - Adaptive 12-column CSS Grid: Left = Auspicious (`Cát Tinh`), Right = Malefic (`Hung/Sát Tinh`). If one side is empty or sparse while the other has `> 5` stars, the dense side automatically flows into a 2-subcolumn grid so no column ever exceeds 4–5 lines.
   - **Zone 4 — Palace Footer (`18px`)**: Left: `Tiểu Hạn` | Center: `[TUẦN]` / `[TRIỆT]` seal + `Vòng Tràng Sinh` stage | Right: Lunar Month (`T.1–T.12`).

---

## 5. Strict Anti-Patterns (BANNED)
1. **NO EMOJIS ANYWHERE**: Windows/macOS colorful cartoon emojis (`🔍`, `📜`, `🎴`, `🖨️`, `⚡`, `☯️`) are strictly forbidden. Use only custom 1px inline SVG esoteric sigils or classical Han-Nom seal characters (`【命】`, `【印】`, `【身】`).
2. **No Flex-Shrink Text Squishing**: Never put `overflow: hidden` (`truncate`) on direct flex children in a `flex-col` container without `shrink-0`.
3. **No Cold Tech Slate/Blue Backgrounds**: Never use `#04060b` or Tailwind `slate-900`.
4. **No Bright Orange/Blue Bootstrap Buttons**: All interactive controls must use carved bronze/lacquer borders or Cinnabar seal styling.
