# 09 — Mobile excellence: citable phone rules (evidence dossier)

Evidence base for how the "Happy Birthday, Mustafa" site behaves **on phones**.
Trigger: the user's complaint that some areas look awkward on phones (text leaking out of boxes, overlaps, cramped type).
Rule served: no layout, size, spacing, breakpoint, button size, type size or interaction may come from our own taste. Each must trace to a real, excellent site, product or design system.

Compiled 2026-10-03. Researcher: Claude (mobile-excellence research subagent).

---

## 0. Method, limits, confidence legend

### Confidence labels

| Label | Meaning |
|---|---|
| **VERIFIED-src** | I read it myself this session from the publisher's own server. Two servers qualified: Apple's HIG data endpoint (`developer.apple.com/tutorials/data/design/human-interface-guidelines/<page>.json`) and `developer.android.com`. The text is quoted or tabulated exactly. |
| **VERIFIED-npm** | I read it myself this session from a package on `registry.npmjs.org` (source, CSS, README or data). The `npm pack` command is given so it can be reproduced. |
| **VERIFIED-mirror** | The official W3C `wcag.json` (`https://www.w3.org/WAI/WCAG22/wcag.json`), plus its Understanding and Techniques data. I read it from a byte-identical npm mirror (`@rawwee/wcag-cli@0.5.0`). Its `data/meta.json` gives the source as that URL, `lastModified: Thu, 03 Sep 2026`, fetched 2026-09-04. w3.org itself is egress-blocked here. |
| **REPORTED** | From a WebSearch result summary. Summaries can be wrong. The URLs the search returned are listed. |
| **PRIOR** | Already established in this repo (`INSPIRATION.md`, dossiers 01–07, or the lead's brief). Not re-verified this session. |
| **NOT FOUND** | Searched for, but no evidence was obtained this session. |
| **[inference]** | My own deduction from verified facts. Not provenance on its own. It is shown so the reasoning can be checked. |
| **[bg]** | My background knowledge. It was NOT verified this session and **may not be used as provenance**. |

### Reachability this session

- **Reachable:**
  - `developer.apple.com`, which serves the HIG JSON.
  - `developer.android.com`.
  - `registry.npmjs.org`.
  - `pub.dev`.
- **Blocked (proxy 403 or connect failure):** awwwards.com, w3.org, m3.material.io, gsap.com, developer.mozilla.org, web.dev, developer.chrome.com, webkit.org, caniuse.com, docs.google.com, dl.google.com, help.instagram.com and dennissnellenberg.com.
- **Firecrawl:** HTTP 402 (out of credits).
- **WebFetch:** awwwards.com returned `EGRESS_BLOCKED`.
- **WebSearch:** I used **35 of the 40** queries budgeted.
- **GitHub:** I used no GitHub tool and did no GitHub fetch or clone, per the lead's rule.

### Reproduce the npm evidence
```
npm pack <pkg>@<version> && tar xzf <file>.tgz      # → package/…
```
Packages read: `lighthouse@11.7.1`, `lighthouse@13.5.0`, `@material/web@2.5.0`, `@material/touch-target@14.0.0`, `@material/layout-grid@14.0.0`, `gsap@3.15.0`, `lenis@1.3.26`, `locomotive-scroll@5.0.1`, `locomotive-scroll@4.1.4`, `axe-core@4.13.0`, `@rawwee/wcag-cli@0.5.0` (WCAG mirror), `utopia-core@1.6.0`, `@activetheory/fit-text` (latest), `react-insta-stories@2.8.0`, `@mdn/browser-compat-data@8.1.4` and `chrome-devtools-frontend@1.0.1708524`.

### Units
- [bg] On iPhone Safari, 1 CSS px equals 1 iOS point. On Android Chrome, 1 CSS px equals 1 dp. So the "pt" and "dp" figures below are read as CSS px.
- This is consistent with card D1: DevTools emulates the iPhone 14 at 390 × 844 CSS px with DPR 3.

---

## 1. Source cards

### A — Awwwards Mobile Excellence (the award our reference set holds)

#### A1. The Mobile Excellence programme: criteria and thresholds

- **Scored criteria (four):** Mobile Friendliness, Performance, Best Practices / PWA, and Usability. Each gets a score, and the scores combine into a total. REPORTED (3 queries).
- **Pass mark:** originally **75/100**. "Version 2" (2018) lowered it to **70/100** and allows re-tests. REPORTED (2 queries).
- **Method:** a mobile expert evaluates the homepage or landing page **plus 2 other pages chosen at random**. The tools are WebPageTest, Lighthouse and PageSpeed Insights, plus manual checks. REPORTED.
- **Items in the guideline PDF (`awwwards.com/mobile-excellence-guidelines.pdf`), as returned by search:**
  - "Configures the viewport".
  - "Content is sized correctly for the viewport".
  - "Size tap targets appropriately".
  - "Uses legible font sizes": "Font sizes less than 12px are too small to be legible … Strive to have >60% of page text ≥12px".
  - "Color contrast is satisfactory".
  - **"`[user-scalable="no"]` is not present … and `[maximum-scale]` is not less than 2"**.
  - "Uses passive listeners to improve scrolling performance".
  - The input-type keyboard items.
  - REPORTED (3 queries). The PDF is "based on Google's criteria", which are the Lighthouse audits in card L1.
- **Sources:**
  - https://www.awwwards.com/google-and-awwwards-present-the-mobile-excellence-award.html
  - https://www.awwwards.com/update-version-2-of-the-google-awwwards-mobile-excellence-award.html
  - https://www.awwwards.com/how-to-win-the-mobile-excellence-award-checklist.html
  - https://www.awwwards.com/mobile-excellence-guidelines.pdf
  - https://developers.googleblog.com/en/introducing-the-mobile-excellence-award-to-celebrate-great-work-on-mobile-web/
- **Not obtainable:** the PDF's full text. awwwards.com and docs.google.com are blocked, including the "Google Mobile Excellence – Guidelines" Google Doc.

#### A2. "Your 2018 Wrapped" (Spotify / Active Theory) — Mobile Excellence report

| Metric | Value | Confidence |
|---|---|---|
| Mobile Friendliness | **100/100** | REPORTED (2 queries) |
| Performance | **70/100** | REPORTED (2) |
| Usability | **83/100** | REPORTED (1) |
| Speed Index | **3317.39 ms** (report target **< 4500 ms**) | REPORTED (1) |
| Fully loaded | **19.6 s**, **168 requests**, **1.3 MB** | REPORTED (1) |
| Best Practices / PWA | NOT FOUND | — |

- Source: https://www.awwwards.com/sites/your-2018-wrapped/mobile-excellence-report
- **Lesson:** Wrapped still won with **Performance at exactly 70**, the pass mark. Mobile Friendliness was perfect. It is the friendliness items (viewport, tap targets, legible fonts) that carry the score.

#### A3. "150 years of the Bijenkorf" — Mobile Excellence report

| Metric | Value | Confidence |
|---|---|---|
| Performance | **68/100** | REPORTED (1) |
| Usability | **71/100** | REPORTED (1) |
| PWA / Best Practices | **82/100** | REPORTED (1) |
| Mobile Friendliness | NOT FOUND | — |

- Source: https://www.awwwards.com/sites/150-years-of-the-bijenkorf/mobile-excellence-report

#### A4. 14islands "Sneaky Santa" — Mobile Excellence report (dated 18 Dec 2018)

| Metric | Value | Confidence |
|---|---|---|
| Mobile Friendliness | **100/100** | REPORTED (1) |
| Performance | **70/100** | REPORTED (1) |
| Estimated input latency | **12 ms** (target **< 50 ms**) | REPORTED (1) |
| Fully loaded | **28.4 s**, **59 requests**, **2.6 MB** | REPORTED (1) |

- Sources: https://www.awwwards.com/sites/sneaky-santa/mobile-excellence-report and https://medium.com/14islands/sneaky-santa-behind-the-scenes-8d4ea106043e (not opened).
- **Pattern across A2–A4:** two celebration microsites passed at **Performance 70** with **Mobile Friendliness 100**.
  - Heavy WebGL or video payloads are tolerated.
  - Unreadable text or small tap targets are not.
  - [inference] from the scores.

### L — Lighthouse: the Google criteria behind the Awwwards checklist

#### L1. Lighthouse 11.7.1 mobile-friendly audits — VERIFIED-npm (`npm pack lighthouse@11.7.1`)

| Audit | Exact source value | File |
|---|---|---|
| Tap targets | `const FINGER_SIZE_PX = 48;` and `MAX_ACCEPTABLE_OVERLAP_SCORE_RATIO = 0.25`. Description: *"Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements."* | `core/audits/seo/tap-targets.js` L25–48 |
| Legible font sizes | `const MINIMAL_LEGIBLE_FONT_SIZE_PX = 12;` and `MINIMAL_PERCENTAGE_OF_LEGIBLE_TEXT = 60`. Description: *"Font sizes less than 12px are too small to be legible and require mobile visitors to 'pinch to zoom' in order to read. Strive to have >60% of page text ≥12px."* | `core/gather/gatherers/seo/font-size.js` L21; `core/audits/seo/font-size.js` L13, L21 |
| Viewport | Requires a `<meta name="viewport">` with `width` or `initial-scale`. It also "prevents a 300 millisecond delay to user input". | `core/audits/viewport.js` L15–20 |

- **Version note:** in `lighthouse@13.5.0` the `seo/` folder no longer contains `tap-targets.js` or `font-size.js`. VERIFIED-npm (directory listing).
- These numbers are therefore the ones in force when the A2–A4 reports were scored (2018–2023). They are not current Lighthouse behaviour.

### H — Apple Human Interface Guidelines (VERIFIED-src, HIG JSON read 2026-10-03)

#### H1. HIG › Typography (page change log: 16 Dec 2025)

- **Default and minimum text sizes:**

  | Platform | Default size | Minimum size |
  |---|---|---|
  | iOS, iPadOS | **17 pt** | **11 pt** |
  | visionOS | 17 pt | 12 pt |
  | watchOS | 16 pt | 12 pt |
  | macOS | 13 pt | 10 pt |

- *"If you use a custom font with a thin weight, aim for larger than the recommended sizes."*
- **iOS Dynamic Type, Large (default) size:**

  | Style | Size / leading (pt) | Weight |
  |---|---|---|
  | Large Title | **34 / 41** | Regular |
  | Title 1 | **28 / 34** | Regular |
  | Title 2 | **22 / 28** | Regular |
  | Title 3 | **20 / 25** | Regular |
  | Headline | **17 / 22** | Semibold |
  | Body | **17 / 22** | Regular |
  | Callout | 16 / 21 | Regular |
  | Subhead | 15 / 20 | Regular |
  | Footnote | 13 / 18 | Regular |
  | Caption 1 | 12 / 16 | Regular |
  | Caption 2 | **11 / 13** | Regular |

  [inference] Body leading 22/17 ≈ 1.29. Large Title 41/34 ≈ 1.21.
- *"Consider adjusting your layout at large font sizes. When font size increases in a horizontally constrained context, inline items … and container boundaries can crowd text and cause truncation or overlapping. To improve readability, consider using a **stacked layout where text appears above secondary items**. … Reduce the number of columns when the font size increases."*
- *"Keep text truncation to a minimum as font size increases."*
- *"If you need to display three or more lines of text, avoid tight leading even in areas where height is limited."*
- **SF Pro tracking table (iOS):**

  | Size (pt) | Tracking (pt) |
  |---|---|
  | 17 | −0.43 |
  | 20 | −0.45 |
  | 22 | −0.26 |
  | 28 | +0.38 |
  | 34 | +0.40 |
  | 48 | +0.35 |
  | 64 | +0.22 |
  | 72 | +0.14 |
  | 80 and up | **0** |

  This is SF-specific and given only as context: at display sizes Apple does **not** tighten tracking further.

#### H2. HIG › Accessibility (change log: 9 Jun 2025)

- **Control sizes:**

  | Platform | Default control size | Minimum control size |
  |---|---|---|
  | iOS, iPadOS | **44×44 pt** | **28×28 pt** |
  | watchOS | 44×44 pt | 28×28 pt |
  | visionOS | 60×60 pt | 28×28 pt |

- *"Consider spacing between controls as important as size. … In general, it works well to add **about 12 points of padding around elements that include a bezel**. For elements **without a bezel, about 24 points** of padding works well around the element's visible edges."*
- **Contrast (Accessibility Inspector, WCAG AA):**

  | Text | Minimum contrast |
  |---|---|
  | Up to 17 pt | **4.5:1** |
  | 18 pt and up | **3:1** |
  | Bold, any size | **3:1** |

- *"Ideally, give people the option to enlarge text by at least **200 percent**."*
- **Reduce Motion:** *"ensure your app … responds by reducing automatic and repetitive animations, including zooming, scaling, and peripheral motion."*

#### H3. HIG › Buttons (change log: 16 Dec 2025)

- *"As a general rule, a button needs a **hit region of at least 44x44 pt** … whether they use a fingertip, a pointer, their eyes, or a remote."*
- *"Keep the number of prominent buttons to **one or two per view**."*
- *"Use **style — not size —** to visually distinguish the preferred choice among multiple options."*
- *"Always include a press state for a custom button."*
- visionOS sizes, for context: Mini 28 / Small 32 / Regular 44 / Large 52 / XL 64 pt.
- *"Prefer buttons that span the width of the screen for primary actions"* is in the **watchOS** section, not iOS. Do not cite it as iOS guidance.

#### H4. HIG › Layout (change log: **9 Sep 2026**, "Updated guidance to reflect current best practices")

- **Dynamic Type adaptation:** *"horizontally adjacent views may need to **stack vertically** to provide more space for text; table rows or other **containers may need to grow in height so that text isn't cropped or doesn't overlap other content**."*
- **Size classes:** *"Keep functionality the same as size classes change … However, **you can change the amount of functionality that's visible onscreen** as the amount of space changes."*
- **Safe areas:** *"A safe area defines the area within a window that isn't covered … by a hardware feature or another view … Respecting the safe area is essential to make sure system UI and hardware features like the Dynamic Island don't obstruct content and controls."*
- **Background art:** *"don't change the aspect ratio of the artwork; instead, scale it so that it fills the screen completely … background artwork may often need to extend beyond what is typically visible."*
- **Gap:** the per-iPhone point table (and the old "16/20 pt layout margins") is **no longer on this page** after the 2026-09-09 update. Earlier change-log rows mention it. **NOT FOUND** this session. Use card D1 for device sizes.

### G — Google: Material Design 3 and Android

#### G1. Android "Use window size classes" — VERIFIED-src (`developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes`)

| Size class | Breakpoint | Device representation (verbatim) |
|---|---|---|
| Compact width | **width < 600dp** | "99.96% of phones in portrait" |
| Medium width | 600dp ≤ width < 840dp | "93.73% of tablets in portrait …" |
| Expanded width | 840dp ≤ width < 1200dp | "97.22% of tablets in landscape …" |
| Large / Extra-large | 1200–1599 / ≥ 1600dp | large tablets / desktop |
| **Compact height** | **height < 480dp** | "**99.78% of phones in landscape**" |
| Medium height | 480dp ≤ height < 900dp | "… 97.59% of phones in portrait" |

- The page also says: phones in landscape are "medium" width but "**compact**" height, "in which case two pane layouts are not practical."

#### G2. Android accessibility — VERIFIED-src (`developer.android.com/guide/topics/ui/accessibility/apps`)

- *"For touch interfaces, we recommend that each interactive UI element have a focusable area, or touch target size, of at least **48dp×48dp**. Larger is even better."*

#### G3. Android design › Grids and units — VERIFIED-src (`developer.android.com/design/ui/mobile/guides/layout-and-content/grids-and-units`)

- *"If using a baseline grid, stick to measurements of 4 and 8."*
- *"Android UI utilizes an **8 dp grid** for layout, components, and spacing."*
- *"Smaller elements such as icons, type … are best aligned to a **4 dp grid**."*
- *"Always specify font sizes in sp."*

#### G4. Material 3 type scale — VERIFIED-npm (`@material/web@2.5.0`, `tokens/versions/latest/sass/_md-sys-typescale.scss`)

| Role | Size / line-height (px) | Tracking | Weight |
|---|---|---|---|
| display-large | **57 / 64** | −0.25px | 400 |
| display-medium | 45 / 52 | 0 | 400 |
| display-small | **36 / 44** | 0 | 400 |
| headline-large | **32 / 40** | 0 | 400 |
| headline-medium | 28 / 36 | 0 | 400 |
| headline-small | 24 / 32 | 0 | 400 |
| title-large | 22 / 28 | 0 | 400 |
| title-medium | 16 / 24 | 0.15px | 500 |
| title-small | 14 / 20 | 0.1px | 500 |
| **body-large** | **16 / 24** | 0.5px | 400 |
| body-medium | 14 / 20 | 0.25px | 400 |
| body-small | 12 / 16 | 0.4px | 400 |
| label-large | 14 / 20 | 0.1px | 500 |
| label-medium | 12 / 16 | 0.5px | 500 |
| **label-small** | **11 / 16** | 0.5px | 500 |

Tokens are stored in rem: for example 3.5625rem = 57px and 0.6875rem = 11px.

#### G5. Material touch target — VERIFIED-npm

- `@material/touch-target@14.0.0`: `$height: 48px !default; $width: $height`.
- `@material/web@2.5.0` `button/internal/_touch-target.scss` sets `.touch { position:absolute; top:50%; height: max(48px, 100%); left:0; right:0; transform: translateY(-50%) }`.
  - The **visual** button container is **40px** (`$container-height: 40px`).
  - An invisible hit area stretches to **48px**.
- Icon buttons do the same: `height: max(48px, 100%); width: max(48px, 100%)`.

#### G6. Material (MDC) layout grid — VERIFIED-npm (`@material/layout-grid@14.0.0`, `_variables.scss`)

| Device | Breakpoint | Columns | Margin | Gutter |
|---|---|---|---|---|
| **Phone** | 0px | **4** | **16px** | **16px** |
| Tablet | 600px | 8 | 16px | 16px |
| Desktop | 840px | 12 | 24px | 24px |

The breakpoints match G1.

#### G7. M3 window-class margins — REPORTED (1 query)

| Window class | Margin |
|---|---|
| Compact | **16dp** |
| Medium | 24dp |
| Expanded | 24dp |

- Source: https://m3.material.io/foundations/layout/applying-layout (blocked; search summary only).
- It agrees with G6 for phones.

### W — WCAG 2.2 (VERIFIED-mirror) and axe-core (VERIFIED-npm)

#### W1. Success criteria, verbatim from `wcag.json`

- **2.5.8 Target Size (Minimum), AA:** *"at least **24 by 24 CSS pixels**, except when:"*
  - **Spacing:** *"undersized targets … are positioned so that if a 24 CSS pixel diameter circle is centered on the bounding box of each, the circles do not intersect another target or the circle for another undersized target"*.
  - **Equivalent.**
  - **Inline:** *"the target is in a sentence or its size is otherwise constrained by the line-height of non-target text"*.
  - **User agent control.**
  - **Essential.**
- **2.5.5 Target Size (Enhanced), AAA:** *"at least **44 by 44 CSS pixels**"*, with exceptions for equivalent, inline, user-agent and essential targets.
- **1.4.10 Reflow, AA:** *"without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to **320 CSS pixels**; Horizontal scrolling content at a height equivalent to **256 CSS pixels**."* Note 1: 320 CSS px is a 1280px-wide viewport at 400% zoom.
- **1.4.12 Text Spacing, AA:** no loss of content or function when the user sets:
  - line height to **≥ 1.5×** font size;
  - spacing after paragraphs to **≥ 2×**;
  - letter spacing to **≥ 0.12×**;
  - word spacing to **≥ 0.16×**.
- **1.4.4 Resize Text, AA:** text resizable to **200 percent** without loss of content or functionality.
- **1.4.8 Visual Presentation, AAA:**
  - *"Width is no more than **80 characters**"*.
  - Not justified.
  - *"Line spacing … at least space-and-a-half"*.
  - Paragraph spacing ≥ 1.5× line spacing.
- **1.3.4 Orientation, AA:** *"Content does not restrict its view and operation to a single display orientation … unless … essential."*
- **2.2.2 Pause, Stop, Hide, A:** *"For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than **five seconds**, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it"*.
  - This applies directly to an endless name marquee.

#### W2. Techniques and failures (VERIFIED-mirror, `techniques.json`)

- **F104:** a failure where content *"clips and is unreadable when the user overrides the spacing"*.
  - *"In general, this failure occurs when text is presented in a **size-constrained block which does not expand** … Setting the **overflow property of the enclosing element to hidden**; Using **absolutely positioned content**; Creating borders that are not large enough"*.
  - This describes our "text leaking out of boxes" symptom exactly.
- **F94:** *"failure of text to re-scale when **viewport units are used on text** … they cannot be resized by zooming or adjusting text-size."*
- **F102:** a failure *"when a change of the viewport width to 320px makes content **disappear** that was available at wider viewport widths."*
  - Content may move *"in a single column view, or through some interaction … in a disclosure area, a dialog, or via a link."*
- **C28:** size text containers *"in em units"*, so they grow with text and avoid *"text cropping because it falls outside the container boundaries"*.
- **Understanding 1.4.12:** truncating with an **ellipsis** is acceptable only if the full text stays available, for example on focus or activation.

#### W3. axe-core 4.13.0 — VERIFIED-npm (`axe.min.js`)

- **`target-size` rule:** tags `wcag22aa`, `wcag258`. Checks: `target-size {minSize: 24}` OR `target-offset {minOffset: 24}`.
- **`meta-viewport` check:** `{scaleMinimum: 2}`. A `maximum-scale` below 2, or `user-scalable=no`, fails.
- **`meta-viewport-large` check:** `{scaleMinimum: 5, lowerBound: 2}`.
- This matches the Awwwards checklist item in A1.

### T — Giant and fluid display type on phones

#### T1. Fluid type and WCAG 1.4.4 — Maxwell Barvian (Smashing Magazine, Nov 2023) and Utopia

- **REPORTED** (https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/):
  - *"if the max font size is less than or equal to **2.5 times the min font size**"*, a `clamp()` passes 1.4.4 in modern browsers.
  - Use a rem-based, non-viewport component in the preferred value.
- **VERIFIED-npm** (`utopia-core@1.6.0`, `src/index.ts`, `checkWCAG()`, comment *"Many thanks to Maxwell Barvian … for this calculation"*):
  - The model is the font at 500% zoom versus 2× the font at 100% zoom.
  - The code flags a failure when `5 * min < 2 * max`, i.e. when **max > 2.5 × min**.
- **Utopia's README example:** `minWidth 320`, `maxWidth 1240`, base `18→20px`, ratio `1.2→1.25`.

#### T2. Active Theory `fit-text` — VERIFIED-npm (`@activetheory/fit-text`, `src/index.js`)

Active Theory built Spotify Wrapped 2018 (card A2/T3).

- The CSS `font-size` is treated as the **maximum**.
- The script then lowers `font-size` by **1px per step** while `el.scrollWidth > box.offsetWidth` or `el.offsetHeight > box.offsetHeight`.
- It stops at `minFontSize = 10` (default).
- If the text still does not fit, it **clips the string and appends `'...'`**.
- Options: `singleLine` (fit to one line at the computed line-height) and `boxMultiplier = [1, 1]`.
- **Lesson:** the studio's own rule is that display text is measured against its box and **never** allowed to overflow it.

#### T3. Spotify Wrapped 2018 text fitting — REPORTED (Active Theory case study)

- The case study is https://medium.com/active-theory/spotify-wrapped-2018-technical-case-study-5b7cfb7e9d3a; search summary only.
- *"to anchor the text to match the design and **always appear to fill the screen**, they created a frustum that filled the screen at the layer's Z-position and then **calculated an amount to scale the text, fitting it to the desired size**."*
- Wrapped was *"localized to 21 different languages"*, with per-language line-break rules.

#### T4. Codrops, "Techniques for Responsive Typography" (2013) — REPORTED

- For big headlines it recommends FitText, BigText or slabText ("fill the width of their parent element"), or viewport units.
- https://tympanus.net/codrops/2013/11/19/techniques-for-responsive-typography/
- No newer Codrops article with phone-specific giant-type numbers was found: **NOT FOUND**.

#### T5. `text-wrap: balance` — REPORTED plus VERIFIED-npm support data

- **REPORTED** (https://developer.chrome.com/docs/css-ui/css-text-wrap-balance, Adam Argyle):
  - Chromium balances only blocks of **six wrapped lines or fewer**.
  - The article recommends it for headings.
- **VERIFIED-npm** (BCD 8.1.4) support:

  | Feature | iOS Safari | Chrome Android | Firefox Android |
  |---|---|---|---|
  | `text-wrap: balance` | 17.5 | 114 | 121 |
  | `overflow-wrap: anywhere` | 15.4 | 80 | 65 |
  | unprefixed `hyphens` | 17 (`-webkit-` since 4.2) | — | — |
  | `clamp()` | 13.4 | — | — |

### R — Mobile behaviour of the site's own reference set

#### R1. dennissnellenberg.com (PRIOR)

- **Hero name:** `font-size: max(9em, 15vw)`, `bottom: 15vh`, line-height 1, endless GSAP marquee.
- **Spacing tokens:** `--gap-padding: clamp(1.5em, 4vw, 2.5em)`, `--container-padding: clamp(2.5em, 8vw, 8em)`.
- [inference] With `em` = 16px, `max(9em, 15vw)` = **144px on every phone**. The 15vw term only wins above **960px** wide (9 × 16 / 0.15). So Snellenberg keeps the name at a fixed, very large size on phones, and lets the marquee's horizontal scroll absorb the overflow.
- **His phone behaviour is NOT FOUND:**
  - Does the "Located in the Netherlands" hanger or the right-side text hide?
  - Does the name size change?
  - The site is blocked, and two searches returned nothing.

#### R2. GitHub Unwrapped (PRIOR)

- The title steps from **44px / 900 at ≥ 40em** to **32px / 700 on mobile**: a smaller size and a lighter weight.

#### R3. Google Santa Tracker (PRIOR, dossier 06)

- It hides the smallest countdown unit progressively at **max-width 458 / 422 / 386px**.
- Countdown boxes are **40px** wide (44px from 768px up). Digits are **22px** (26px on desktop).
- `viewport-fit=cover` plus safe-area insets.
- A rotate hint, "Lock rotation for best experience."
- Pinch zoom is disabled via `touch-action: pan-x pan-y`. This is a **game**; see rule M30 for why we do not copy it.

#### R4. Bruno Simon folio-2025 (PRIOR)

- Root font **20px**, **18px at ≤ 520px** and **16px at ≤ 440px**.

#### R5. Studio Freight / darkroom (PRIOR, dossier 07, VERIFIED-npm there)

- Mobile design board **375px**.
- `mobile-vw($px) = $px * 100vw / 375px`. `mobile-vh` base 650.
- Mobile breakpoint **800px**.

#### R6. Apple Invites, phone UI (PRIOR)

- **16pt** side gutters, about **8pt** gaps.
- **49pt** pill buttons hugging their labels.
- A full-width **51pt** "Send Reply" button.

#### R7. Getty × Resn "Sculpting Harmony"

- It ships a **separate mobile scroll-scrub video**: `intro-scrub.mp4` / `intro-scrub-mobile.mp4`. PRIOR (dossier 01).
- Its type *"spills over the screen, edge-to-edge, and with a nudge of the mouse, it's quickly squished into a corner to make space for the story to flow"*. The typeface is Sharp Grotesk. REPORTED (the-brandidentity.com, creativereview.co.uk, via search).
- Its specific phone layout: **NOT FOUND**.

#### R8. Locomotive Scroll (Locomotive is an Awwwards studio) — VERIFIED-npm

- **v4.1.4 `src/scripts/options.js`:**
  - `tablet: { smooth: false, direction: 'vertical', gestureDirection: 'vertical', breakpoint: 1024 }`.
  - `smartphone: { smooth: false, direction: 'vertical', gestureDirection: 'vertical' }`.
  - `touchMultiplier: 2`.
  - Phones are detected by UA, by iPadOS (`MacIntel` with `maxTouchPoints > 1`), or by `innerWidth < 1024`.
  - **Horizontal sections become vertical, and smoothing turns off, on phones and tablets.**
- **v5.0.1:** the README says *"Smart Touch Detection — Parallax auto-disabled on mobile"*. The dist sets `isTouchDevice = "ontouchstart" in window …` and passes `smooth: !this.isTouchDevice`.

### S — Story format (Spotify Wrapped and Instagram Stories)

#### S1. Meta / Instagram Stories safe zones — REPORTED (2 queries; the sources disagree)

| Edge | Reported value | Notes |
|---|---|---|
| Top | **14% ≈ 250px** of 1080×1920 | Clear of the progress bar, profile picture, name, timestamp and controls |
| Bottom (newer guidance) | **20% ≈ 340px** | Clear of the CTA and reply field |
| Bottom (older / Facebook & Messenger) | **14% ≈ 250px** | "top and bottom" |
| Sides | ~6% (≈ 65px) | Third-party summary |

- **The figures are internally inconsistent:** 250/1920 = 13.0% and 340/1920 = 17.7%. Some summaries quote 269px and 384px for the percentages.
- Sources:
  - https://blog.adnabu.com/meta-ads/meta-safe-zones/
  - https://www.muzecmo.com/tools/safe-zones/facebook-stories/
  - https://blog.hootsuite.com/social-media-image-sizes-guide/
- **The official Meta Business Help Center page could not be opened.**

#### S2. Instagram Stories gestures — REPORTED (third-party documentation of the official behaviour)

- Tap the **right side** for next. Tap the **left side** to replay the previous story.
- **Press and hold** to pause.
- Swipe left or right to change account. Swipe down to close.
- **The exact left/right split proportion: NOT FOUND.**
- https://www.scrumball.com/blog/story-navigation-instagram and https://poprey.com/blog/instagram-navigation

#### S3. `react-insta-stories@2.8.0` (popular open-source Stories clone) — VERIFIED-npm (`dist/index.js`)

- Two tap zones, **each `width: "50%"`**.
- `mouseUp("previous")` is on the left zone and `mouseUp("next")` on the right.
- Pointer-down starts a **200ms** timer, then pauses. A release before 200ms navigates.
- Default slide `defaultInterval: 4000` ms.
- Progress bars:
  - row `width: "98%"`, `padding: 5`, `paddingTop: 7`;
  - each segment `height: 2`, `margin: 2`, `borderRadius: 2`, track `#555`, fill `#fff`.
- Header avatar 40×40.
- This is a community library, not Instagram's own code. It is a verified implementation of the S2 behaviour.

### V — Viewport units and safe areas

#### V1. Browser support for viewport units and `env()` — VERIFIED-npm (`@mdn/browser-compat-data@8.1.4`)

| Feature | iOS Safari | Chrome Android | Firefox Android | Samsung Internet |
|---|---|---|---|---|
| `svh` / `lvh` / `dvh` (small / large / dynamic) | **15.4** | 108 | 101 | 21 |
| `env(safe-area-inset-*)` | **11** | 69 | 65 | — |
| `env(keyboard-inset-*)` | ✗ | 94 | — | — |

- **Definitions** (REPORTED; spec: https://drafts.csswg.org/css-values/#viewport-relative-units):
  - **small** = all collapsible browser bars shown;
  - **large** = all bars hidden;
  - **dynamic** = flips between the two as the bars slide;
  - classic **`vh` = the large viewport**.
  - Sources: dev.to and 12daysofweb.dev summaries.

#### V2. WebKit, "Designing Websites for iPhone X" (2017) — REPORTED

- https://webkit.org/blog/7929/designing-websites-for-iphone-x/
- By default Safari insets content inside the safe area.
- `viewport-fit=cover` makes the page lay out to the full screen. The author must then pad with `env(safe-area-inset-*)`, combined with `max()`.

#### V3. Measured inset values — REPORTED

- About **59px top / 34px bottom** on Dynamic Island iPhones (portrait).
- https://1440px.com/safe-area/ and Apple Developer Forums threads 715417 and 715451.

#### V4. GSAP measures `100vh`, not `innerHeight` — VERIFIED-npm (`gsap@3.15.0`, `src/ScrollTrigger.js` L1349)

- Code comment: *"to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a `<div>` with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's **not affected by address bar showing/hiding**."*
- This independently confirms that `vh` is the stable, large viewport.

### X — Scroll engines on touch (VERIFIED-npm)

#### X1. GSAP ScrollTrigger 3.15.0

- **`ignoreMobileResize`** (L1358, L211):
  - It defaults on for touch-only devices: `_ignoreMobileResize = Observer.isTouch === 1`. Per the L1355 comment, `isTouch` is 0 for no touch, **1 for touch only**, and 2 for touch plus mouse.
  - A resize triggers `refresh()` only if `_baseScreenWidth !== innerWidth || Math.abs(innerHeight - _baseScreenHeight) > innerHeight * 0.25`.
  - So an address-bar height change under **25%** is ignored.
  - Base dimensions are re-taken on orientation change via `gsap.matchMedia().add("(orientation: portrait)")`.
  - Refresh is debounced with `gsap.delayedCall(0.2, _refreshAll)`.
- **`ScrollTrigger.normalizeScroll(vars)`** (L1754):
  - It is opt-in. It builds an Observer with `type: "wheel,touch"`, `preventDefault`, `allowClicks`, `momentum` (default duration `2.8`) and `normalizeScrollX`.
  - It contains iOS work-arounds: the L1357 `_fixIOSBug` comment cites WebKit bug 181954, and L1693 handles address-bar overshoot.
  - **REPORTED** from gsap.com docs: it forces scrolling onto the JS thread and stops the address bar showing or hiding "on most mobile devices", with **iOS phones in portrait as the exception**. It also fixes pinned-element jitter.
- **`pin`** uses `position: fixed` when the scroller is the viewport, unless `pinType` is set (L619).
- `anticipatePin` is in units of ×45 (L639).
- **`gsap.matchMedia()`** exists in core (`gsap-core.js` L2844). The README pitches it for "responsive, accessibility-friendly animations".
- **REPORTED** (GSAP forums): wrapping pinned or horizontal ScrollTriggers in `gsap.matchMedia()` is the documented way to unpin or go vertical on mobile.

#### X2. GSAP SplitText 3.15.0 (`src/SplitText.ts`)

- `autoSplit` **defaults to `false`**.
- When true, it re-splits on width change: a `ResizeObserver` debounced with `setTimeout(checkWidths, 200)`. It also re-splits on `document.fonts` `"loadingdone"`.
- `mask` wraps each line, word or char in a clone with **`overflow: clip`** (L450–456).
- [inference] A line mask clips anything that falls outside the line box. On giant type with `line-height < 1` (descenders, accents, `font-stretch` changes) this crops glyphs. It is the same mechanism as WCAG F104.

#### X3. Lenis 1.3.26 (darkroom, ex-Studio Freight)

- **README option table:**
  - `syncTouch` **`false`** (*"Mimic touch device scroll while allowing scroll sync (can be unstable on iOS<16)"*);
  - `syncTouchLerp 0.075`, `touchInertiaExponent 1.7`, `touchMultiplier 1`;
  - `smoothWheel` defaults to `true`.
- **Source (`dist/lenis.mjs`):** `if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {…}`. With defaults, **touch scrolling is left native**.
- The README "Limitations" list includes *"capped to 60fps on Safari … and 30fps on low power mode"* and *"no support for CSS scroll-snap"*.
- It honours `prefers-reduced-motion`: `lerp` is forced to `1` and programmatic scrolls jump.
- **Recommended CSS** (`dist/lenis.css`): `html.lenis, html.lenis body { height: auto }`, `.lenis-stopped { overflow: clip }`, `[data-lenis-prevent] { overscroll-behavior: contain }`.

### P — Reading and touch research (non-platform)

#### P1. Butterick's *Practical Typography* — REPORTED

- Body text **15–25px** on the web.
- Line spacing **120–145%** of the point size.
- Line length **45–90 characters**.
- https://practicaltypography.com/summary-of-key-rules.html and https://practicaltypography.com/line-length.html

#### P2. LearnUI (Erik Kennedy), "Font Size Guidelines for Responsive Websites" (2024) — REPORTED

- Mobile body **16–20px** for text-heavy pages, **16–18px** for interaction-heavy pages.
- Mobile **page titles 28–40px**.
- Secondary text is **2px smaller** than body.
- "Start with 17."
- https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html

#### P3. Nielsen Norman Group, "Touch Targets on Touchscreens" — REPORTED

- Minimum **1cm × 1cm** (0.4in), with larger targets for primary CTAs and for use while moving.
- https://www.nngroup.com/articles/touch-target-size/

#### P4. Steven Hoober, *Touch Design for Mobile Interfaces* — REPORTED

- Accuracy varies by screen position: about **7mm at the centre**, **11mm at the top** and **12mm at the bottom and corners**.
- People view and touch the centre most often, fastest and most accurately.
- https://www.uxmatters.com/mt/archives/2017/07/design-for-fingers-touch-and-people-part-3.php and https://www.smashingmagazine.com/2023/04/accessible-tap-target-sizes-rage-taps-clicks/

#### P5. web.dev, "Accessible tap targets" — REPORTED

- **48 device-independent px** (≈ 9mm, a finger pad).
- Targets spaced about **8px apart**.
- Base font **16px** and line-height at least **1.2**.
- https://web.dev/articles/accessible-tap-targets

### D — Real phone viewports

#### D1. Chrome DevTools emulated devices — VERIFIED-npm (`chrome-devtools-frontend@1.0.1708524`, `front_end/models/emulation/EmulatedDevices.ts`)

All sizes are portrait CSS px.

| Width × height | Devices |
|---|---|
| **344 × 882** | Galaxy Z Fold 5 cover screen (narrowest listed) |
| **360 × 640 / 740 / 800** | Moto G4 / Galaxy S8+ / Galaxy A55 |
| **375 × 667** | **iPhone SE** (shortest listed modern phone) |
| **390 × 844** | iPhone 12 Pro / 14 / 16e |
| **393 × 852** | iPhone 14 Pro / 15 / 15 Pro / 16 |
| **402 × 874** | iPhone 16 Pro |
| **412 × 915–924** | Pixel 7 / 8 / 9 / 10, Galaxy S20 Ultra |
| **430 × 932** | iPhone 14 Pro Max / 15 Plus / 15 Pro Max / 16 Plus |
| **440 × 956** | iPhone 16 Pro Max |
| 448 × 997 | Pixel 8 Pro / 9 Pro XL (widest phone listed) |

- WCAG reflow (W1) adds **320** as the minimum width to support.

---

## 2. Cross-reference patterns

| # | Pattern | Sources that agree | Count |
|---|---|---|---|
| X1 | **Phones are < 600 CSS px wide.** Android compact width < 600dp covers 99.96% of portrait phones. MDC "phone" is 0–599. Every DevTools phone is 344–448 px. | G1, G6, D1 | 3 |
| X2 | **16px side margin on phones** | Apple Invites 16pt (R6), MDC phone margin 16px (G6), M3 compact 16dp (G7, REPORTED) | 3 |
| X3 | **Spacing on an 8 grid, 4 for small items** | Android grids 8dp/4dp (G3), Apple Invites ~8pt gaps (R6), web.dev 8px between targets (P5) | 3 |
| X4 | **Tap target 44–48 px.** 24px is only the legal floor. | Apple 44pt (H2, H3), WCAG AAA 44 (W1), Android/Material 48dp (G2, G5), Lighthouse 48px (L1), web.dev 48 (P5), NN/g 1cm ≈ 38px [bg conversion] (P3). Floor: WCAG AA 24 (W1), axe 24 (W3). | 7 |
| X5 | **The visual control may be smaller than its hit area.** | Material web: 40px visual, 48px `.touch` (G5); WCAG 2.5.8 spacing exception (W1); Lighthouse "large enough … or have enough space around them" (L1) | 3 |
| X6 | **Body text 16–17px on phones** | Apple body 17pt (H1), Material body-large 16 (G4), web.dev 16 (P5), LearnUI 16–20 (P2), Butterick 15–25 (P1) | 5 |
| X7 | **Absolute floor for real text: 11–12px** | Apple minimum 11pt (H1), Material label-small 11 (G4), Lighthouse 12px with 60% of text ≥12 (L1), Awwwards checklist 12px (A1) | 4 |
| X8 | **Phone page titles about 28–34px**, and display sizes from 36px | Apple Title 1 28 / Large Title 34 (H1), Material headline-large 32 / display-small 36 / display-large 57 (G4), GitHub Unwrapped 32px on mobile (R2), LearnUI 28–40 (P2) | 4 |
| X9 | **Giant type is either measured to fit its box or is a deliberate marquee. It never silently overflows.** | Active Theory fit-text (T2), Spotify Wrapped 2018 scale-to-fill (T3), Codrops FitText/BigText (T4), Snellenberg marquee (R1), WCAG reflow and F104 (W1, W2) | 5 |
| X10 | **Narrow screens shed or stack secondary items. Information is never lost.** | Santa Tracker hides units (R3), HIG "stack vertically" and "change the amount of functionality visible" (H1, H4), WCAG F102 (W2) | 3 |
| X11 | **Type steps down at breakpoints by size AND weight, or by root size** | GitHub Unwrapped 44/900 → 32/700 (R2), Bruno Simon 20 → 18 → 16 (R4) | 2 |
| X12 | **Containers grow with their text and are never fixed-height around text** | HIG Layout (H4), WCAG F104 and C28 (W2), Apple "avoid tight leading for ≥3 lines" (H1) | 3 |
| X13 | **Touch scrolling stays native and pinned or horizontal tricks are simplified on phones** | Lenis `syncTouch: false` (X3), Locomotive v4 smartphone `smooth: false` and `direction: 'vertical'` (R8), Locomotive v5 parallax off on touch (R8), Getty's separate mobile scrub asset (R7), GSAP forum `matchMedia` unpinning (X1) | 5 |
| X14 | **Address-bar resizes are ignored, and the large viewport (`vh`) is the stable measure** | GSAP 100vh probe div (V4), GSAP `ignoreMobileResize` 25% rule (X1), CSS large viewport = `vh` (V1) | 3 |
| X15 | **Respect safe areas when going edge-to-edge** | HIG safe areas (H4), WebKit `viewport-fit=cover` + `env()` (V2), Santa Tracker (R3), BCD support from iOS 11 (V1) | 4 |
| X16 | **Do not block zoom** | Awwwards checklist: no `user-scalable=no`, `maximum-scale` ≥ 2 (A1); axe `scaleMinimum: 2` (W3); WCAG 1.4.4 200% (W1); Apple 200% (H2). Counter-example: Santa Tracker is a game (R3). | 4 vs 1 |
| X17 | **Story chrome: progress bar at the top, tap left = back / right = next, hold = pause, nothing important in the top/bottom bands** | Meta safe zones (S1), Instagram gestures (S2), react-insta-stories 50/50 + 200ms (S3), Spotify Wrapped 9:16 (PRIOR) | 4 |
| X18 | **Award-level mobile performance is about 70/100, not 100** | Wrapped 2018 Perf 70 (A2), Sneaky Santa 70 (A4), Bijenkorf 68 (A3), Awwwards v2 pass mark 70 (A1) | 4 |

---

## 3. Mobile rulebook, every value cited

**Scope:** "phone" means viewport width < 600px (X1). Every rule names its sources by card ID.
Where sources give a range, the rule names the value it takes and why. That choice is either "strictest of the cited" or "matches the reference that owns that component". Neither is taste.

### A. Test matrix and breakpoints

- **M1. Test widths.** **320** (WCAG 1.4.10 floor), **344**, **360**, **375 × 667**, **390/393**, **402**, **412**, **430/440**.
  - Also test landscape **667 × 375**: compact height (< 480dp, 99.78% of phones in landscape).
  - [W1, D1, G1] VERIFIED.
- **M2. Pass condition at 320px.**
  - No horizontal page scroll and no clipped text. The one exception is an intentional marquee inside an `overflow: clip` band.
  - Nothing that exists at wider widths disappears without an alternative route.
  - [W1 1.4.10; W2 F102, F104] VERIFIED.
- **M3. Breakpoint ladder.** Each step has a source; nothing new is invented.

  | Width | What changes | Source |
  |---|---|---|
  | **800px** | Layout switches to the single-column phone layout | Studio Freight [R5] |
  | **< 600px** | "Phone" class: 4 columns, 16px margins | [G1, G6] |
  | **< 40em (640px)** | Display titles step down in size and weight | GitHub Unwrapped [R2] |
  | **≤ 520 / ≤ 440px** | Root font size 18px / 16px, if the root is scaled up on desktop | Bruno Simon [R4] |
  | **458 / 422 / 386px** | Last-resort hiding of redundant secondary items | Santa Tracker [R3] |

  PRIOR plus VERIFIED.

### B. Margins and spacing

- **M4. Side gutter on phones: 16px minimum.**
  - Three sources give 16 [X2: R6, G6, G7]. The existing Snellenberg token `--gap-padding: clamp(1.5em, 4vw, 2.5em)` resolves to **24px** on phones [R1] and is also cited. Keep 24px where that token is used.
  - **Never go below 16px.**
  - `--container-padding: clamp(2.5em, 8vw, 8em)` resolves to **40px** on phones, which is 2.5× the platform margin. At 320px it leaves 240px of text width. [inference] Use the gap token, not the container token, for phone text columns.
- **M5. Gaps snap to 8, or 4 for small items.** [G3 VERIFIED; R6 PRIOR]
- **M6. Space between adjacent tappables.**
  - At least **8px** [P5 REPORTED].
  - With visible bezels, Apple suggests **~12pt** of padding around each control. Without a bezel (text links, icons), **~24pt** [H2 VERIFIED].
  - Undersized targets must pass the **24px-circle** test [W1 VERIFIED].

### C. Type sizes on phones

- **M7. Body / reading text: 16px minimum, 17px where the text is the content** (letter, messages).
  - Sources: Material body-large 16/24 [G4]; Apple body 17/22 [H1]; web.dev 16 [P5]; LearnUI 16–20 [P2].
- **M8. Hard floor for any real text: 12px.**
  - Lighthouse and Awwwards flag text under 12px and want ≥ 60% of text at ≥ 12 [L1, A1].
  - Apple's absolute minimum is 11pt [H1]. Material label-small is 11 [G4].
  - **Take 12px**, the strictest, because it is the number the Awwwards Mobile Excellence audit counts.
  - Thin weights must go larger: *"aim for larger than the recommended sizes"* [H1].
  - Purely decorative SVG text (a postmark ring) is not "text the user must read". [inference] Still keep it ≥ 11px or mark it `aria-hidden`.
- **M9. Line length: no more than 80 characters**, and 45–90 is the comfortable band.
  - Set `max-width` in `em`/`ch` so it scales with text [W1 1.4.8; P1; W2 C28].
- **M10. Leading.**
  - Body: Apple 22/17 ≈ **1.29** [H1], Material 24/16 = **1.5** [G4], Butterick 1.2–1.45 [P1].
  - Display: Apple Large Title 41/34 ≈ 1.21 [H1].
  - Avoid tight leading on blocks of **three or more lines** [H1].
  - Any line-height below 1 (e.g. `.8`) is allowed only on single-line display words whose box is not a clipping mask (see M15).
- **M11. Phone heading scale: take the sizes from cited systems, not new numbers.**

  | Level | Size / leading (px) | Weight | Source |
  |---|---|---|---|
  | Page / chapter title | **28/34** to **34/41** | — | Apple Title 1 / Large Title [H1] |
  | Phone title (the GitHub Unwrapped value) | **32px** | 700 | [R2], = Material headline-large 32/40 [G4] |
  | Display | **36/44** min to **57/64** | — | Material display-small to display-large [G4] |

  Body-level asides should not drop under the 16px of M7.
- **M12. Fluid sizes use `clamp()`, and max ≤ 2.5 × min.**
  - The preferred value must include a rem (non-viewport) term, e.g. `clamp(2rem, 1.5rem + 3vw, 4rem)`.
  - [T1 VERIFIED-npm (utopia `5*min < 2*max` = failure); W2 F94 VERIFIED (pure viewport units on text fail resize)]
- **M13. Don't tighten tracking further at display sizes on phones.**
  - The project's −0.03em display tracking is cited [PRIOR, Slosh/Partiful].
  - Apple's SF table goes back to **0 at ≥ 80pt** and never below −0.45pt [H1]. [inference] Do not add more negative tracking to rescue width on phones; use the M14 strategies instead.

### D. Giant display type (the hero name, chapter titles, finale)

- **M14. Each giant word must be exactly one of these three, and must declare which.** [X9]
  - **(a) Marquee.** It may be wider than the screen only because it scrolls endlessly.
    - It sits in a full-width band with `overflow: clip`.
    - Snellenberg's `max(9em, 15vw)` gives **144px on phones** [R1].
    - **It must have a pause/stop mechanism**, because it moves for more than 5s alongside other content [W1 2.2.2].
    - It must stop under Reduce Motion [H2; X3].
  - **(b) Fit-to-box.**
    - The CSS size is the maximum.
    - Shrink in 1px steps until `scrollWidth ≤ box width` and the height fits.
    - Minimum 10px. If it still doesn't fit, ellipsis with the full text available.
    - Active Theory `fit-text` [T2 VERIFIED-npm]; Spotify Wrapped 2018 scale-to-fill [T3]; W2 1.4.12 note on ellipses.
    - Use this for static single words such as "MUSTAFA" or "HAPPY BIRTHDAY" set with `white-space: nowrap`.
  - **(c) Step down.** Below 40em, drop both size and weight, e.g. 44/900 → 32/700 [R2].
- **M15. No clipping masks around multi-line or descender-bearing giant text unless the mask's box includes the full glyph.**
  - SplitText masks are `overflow: clip` [X2 VERIFIED]. F104 names `overflow: hidden` and absolute positioning as the failure mechanism [W2].
  - [inference] Give masked giant lines `line-height ≥ 1`, or pad the mask, and check accents and descenders at 320px.
- **M16. Re-measure after fonts load and on width change.**
  - SplitText `autoSplit: true` re-splits after `fonts loadingdone` and on ResizeObserver (200ms debounce) [X2 VERIFIED].
  - Any fit-text pass (M14b) must run at the same moments [inference from T2, which measures `scrollWidth` once per call].
- **M17. Headline wrapping.**
  - `text-wrap: balance` only on headings of ≤ 6 lines, where Chromium balances [T5].
  - For long single words, allow `overflow-wrap: anywhere` / `hyphens: auto` (iOS 15.4 / 17) [T5 BCD]. [inference] This is a capability, not a design precedent. Prefer M14b for names.

### E. Touch targets and buttons

- **M18. Every tappable: hit area ≥ 44 × 44px; 48 × 48 preferred.**
  - The visual can stay smaller (e.g. a 40px pill) if an invisible hit area extends it to 48, as `@material/web` does with `.touch { height: max(48px, 100%) }`.
  - [H3, H2, W1 2.5.5, G2, G5, L1 VERIFIED; P3, P5 REPORTED]
  - **24px** is the legal floor only (WCAG AA, axe) [W1, W3].
- **M19. Primary CTA height.**
  - Apple Invites' phone pills are **49pt** (label-hugging), and the full-width primary is **51pt** [R6 PRIOR]. Both exceed M18.
  - **One or two prominent buttons per view.** Differentiate by style, not size [H3 VERIFIED].
  - Three equal pills in a row on a phone should therefore become one prominent pill plus secondary text links, or a vertical stack.
  - Stacking is also endorsed by HIG Layout [H4].
- **M20. Edge and corner controls get the largest targets.**
  - Thumb accuracy is ~7mm at the centre and 11–12mm at the top and bottom edges [P4 REPORTED].
  - A close (×) button in a top corner should be ≥ 44–48px, never icon-sized.
- **M21. Pills must not overflow at 320px.**
  - `white-space: nowrap` plus `padding: 0 2em` on a long uppercase label can exceed the 288px content width at 320 − 2×16.
  - Apply M14b (fit) or allow a two-line label in a taller pill. [W1 1.4.10, W2 F104]

### F. Secondary elements and stacking

- **M22. Narrow screens stack before they hide.**
  - Side-by-side items stack vertically, text goes above secondary items, and the column count drops [H1, H4 VERIFIED].
  - Containers grow in height around their text [H4; W2 C28].
- **M23. Hiding is allowed only for redundant or decorative items, in the order of least importance.**
  - Santa Tracker drops its smallest unit at 458/422/386px [R3]. HIG: "change the amount of functionality that's visible" [H4].
  - The information must still exist elsewhere on the page [W2 F102].
  - Example: a hero aside that repeats the intro line may hide on phones, and that is cited.
- **M24. No absolutely positioned text that can collide.**
  - On phones, absolutely positioned badges (hanger, labels) must be laid out relative to something that reserves their space, or move into flow.
  - F104 names "absolutely positioned content" as a clipping mechanism [W2]. HIG asks that text never "overlap other content" [H4].

### G. Viewport units and safe areas

- **M25. Full-screen sections: `height: 100svh` with a `100vh` fallback.**
  - `svh` is the viewport with bars shown, so nothing sits under the toolbar. Supported from iOS 15.4 [V1].
- **M26. Don't drive layout or pin distances from `dvh` or `innerHeight`.**
  - GSAP measures a `100vh` element for scroll math, because it "is not affected by address bar showing/hiding" [V4 VERIFIED-npm].
  - [inference] `dvh` changes while the bars slide, which re-lays-out pinned scenes mid-scroll.
- **M27. With `viewport-fit=cover`, pad every edge-anchored element with `env(safe-area-inset-*)`.**
  - Applies to the progress bar, close button, sound toggle, any bottom CTA, and the landscape left/right edges.
  - Use the form `max(<token>, env(safe-area-inset-top))`.
  - [V2 REPORTED; H4 VERIFIED; R3 PRIOR; V1 iOS 11+ VERIFIED]
  - Typical insets on Dynamic Island iPhones are about 59 top / 34 bottom [V3 REPORTED].
- **M28. Story frame (9:16) safe bands.**
  - Keep text and buttons out of the top **~13–14%** (250/1920) and the bottom **~13–18%** (250–340/1920) of the frame.
  - That is where the progress bar and close sit at the top, and the CTA and reply sit at the bottom [S1 REPORTED, with the noted inconsistency].
  - For an end-of-story CTA inside the frame, place it above the bottom band.
- **M29. Story interaction.**
  - Progress segments at the very top. Tap the left 50% for back, the right 50% for next. Press-and-hold **≥ 200ms** to pause.
  - Default slide **4s** if no per-slide timing is cited elsewhere.
  - Segment **2px** high, 2px margin, 2px radius.
  - [S2 REPORTED; S3 VERIFIED-npm]
  - Exclude the top control band from tap zones.

### H. Zoom and orientation

- **M30. Never block zoom.**
  - The viewport is `width=device-width, initial-scale=1, viewport-fit=cover`.
  - No `user-scalable=no`, no `maximum-scale` below 2, no page-wide `touch-action: pan-x pan-y`.
  - [A1 REPORTED; W3, W1 1.4.4, H2 VERIFIED]
  - Santa Tracker disables pinch only because it is a game [R3]. 4 sources outweigh 1.
- **M31. Never lock orientation.**
  - A "best in portrait" hint is fine, as in Santa Tracker's "Lock rotation for best experience." [W1 1.3.4; R3]
  - Landscape phone is the **compact-height** case (< 480dp) [G1]. A full-height 9:16 frame must fit `100svh` there, and single-pane layouts apply.

### I. Scroll engines and pinned or scrubbed sections on touch

- **M32. Leave touch scrolling native.**
  - Lenis defaults `syncTouch: false` and `smoothWheel: true`, so touch is not smoothed [X3].
  - Do not turn `syncTouch` on: "can be unstable on iOS<16" [X3].
  - Locomotive also disables smoothing on phones and tablets [R8].
- **M33. Keep ScrollTrigger's `ignoreMobileResize`.**
  - It is the default on touch-only devices. Refresh happens only when width changes or height changes by > 25% [X1].
  - Don't add your own resize → `refresh()` listeners.
- **M34. Simplify pinned and horizontal scenes on phones with `gsap.matchMedia()`.**
  - Horizontal becomes vertical, as in Locomotive's `smartphone: { direction: 'vertical' }` [R8 VERIFIED].
  - Parallax is off on touch [R8 VERIFIED].
  - Ship phone-specific scrub assets where a scene scrubs video, as Getty does with `intro-scrub-mobile.mp4` [R7 PRIOR].
  - [X1 VERIFIED + REPORTED forum]
- **M35. `ScrollTrigger.normalizeScroll(true)` is a last resort.**
  - Use it only if a pinned section visibly jitters or jumps on iOS.
  - It moves scrolling to the JS thread [X1 VERIFIED code; REPORTED docs]. The address bar still shows and hides on iOS phones in portrait.
- **M36. Reduced motion.**
  - Stop marquees and auto-animations [H2].
  - Lenis already forces `lerp: 1` under `prefers-reduced-motion` [X3].

### J. Performance (what the award actually measures)

- **M37. Target the Awwwards pass mark, not 100.**
  - Total ≥ **70/100** [A1].
  - Speed Index **< 4500ms**, input latency **< 50ms** [A2, A4 REPORTED].
  - Passive touch and wheel listeners [A1 REPORTED].
  - Reference points: Wrapped 2018 (Perf 70, Friendliness 100) and Sneaky Santa (Perf 70, Friendliness 100) [A2, A4].
  - Friendliness (rules M7–M8, M18, M30) is where full marks are expected.

---

## 4. Snapshot: the current build against the rulebook at 375 × 667

These values are computed from `src/styles/tokens.css` and `src/styles/main.css` as read during this session.
The files were being edited concurrently, so **re-check before acting**. All values are [inference] arithmetic, not new evidence.

| Item | Computed at 375 × 667 | Rule | Status |
|---|---|---|---|
| `--fs-text`, `--fs-aside` | `max(16px, …)` → **16px** | M7 | OK |
| `--fs-title` | **20px** (floor) | M11 (28–34 titles) | Check where it is used as a title |
| `--fs-statement` | **31.25px** | M11 | OK |
| `--fs-label` | **12px**, mono uppercase | M8 | At the floor |
| `.slide__label` | `max(11px, …)` → **11px** | M8 (12px floor) | Below |
| `.slide__aside` | 36 × 375 / 1080 = **12.5px** | M7 (16 body) | Below body size |
| `.envelope__label` | `max(9px, …)` → **9px** | M8 | Below |
| `.postmark__ring` / `.postmark__date` | 8.5px / 11px SVG text | M8 | Decorative: mark `aria-hidden` or raise |
| `.pill` | `min-height: clamp(40px, 5.35vw, 77px)` → **40px** | M18 | 40 visual is the Material value, but the 48px hit-area extension of G5 is absent. Below Apple 44, Invites 49 and Lighthouse 48. |
| `.slide .pill` | `min-height: 40px` | M18 | Same as above |
| `.pill` | `white-space: nowrap` + `padding: 0 2em` | M21 | Check at 320 |
| `.finale__title > span` | `white-space: nowrap` with no fit step | M14 / M2 | Needs M14(b) at 320 |
| `.textlink` | `padding: .5em` on 12–16px text → ≈ 26–35px tall | M18 | Check the hit area |
| `.story__close` | **44 × 44**, `top: 22px` | M18 OK; M27 | No `env(safe-area-inset-top)` |
| `.story__progress` | `padding: 12px 12px 0` | M27 | No safe-area padding |
| `env(safe-area-inset-*)` | Used **nowhere**, while `index.html` sets `viewport-fit=cover` | M27 | **Violation** |
| `--container-padding` | **40px** on phones | M4 | Wider than the 16–24 platform/reference margins |
| Hero marquee | `max(9em, 15vw)` → 144px; endless | M14(a) | Needs a pause/stop control (WCAG 2.2.2) |
| Hero aside | Hidden ≤ 800px, comment cites Santa Tracker and says the line repeats in the intro | M23 | OK: hidden content is available elsewhere (F102) |
| `h1, h2, h3, p { text-wrap: balance }` | — | M17 | Chromium balances ≤ 6 lines only; harmless on long `p` |

---

## 5. NOT FOUND and the re-run queue

1. **dennissnellenberg.com on phones.** Whether the hanger or right-side text hides, and whether the name size changes.
   - The site is blocked, and two WebSearches found nothing.
   - Next step: a screenshot capture at 390 × 844 from an unblocked environment.
2. **Awwwards Mobile Excellence guideline PDF, full text**, and the per-item sub-scores in the A2–A4 reports. awwwards.com and docs.google.com are blocked. The three Awwwards reports were seen only as search snippets.
3. **Apple HIG iPhone layout-margin and device table.** It was removed from HIG › Layout on 2026-09-09. The old "16/20 pt layout margins" claim could not be re-verified.
4. **Material 3 compact margin of 16dp** on m3.material.io. That site is blocked, so this is REPORTED only. MDC's 16px phone margin is verified instead.
5. **Instagram's exact tap-zone proportion.** Only the left/right halves are verified, and only in a clone library.
6. **Official Meta Stories safe-zone page.** The figures conflict across summaries (250 vs 269px; 340 vs 384px).
7. **Getty "Sculpting Harmony" phone layout** (type behaviour and breakpoints). Only the separate mobile scrub video is known (PRIOR).
8. **Codrops article with phone-specific numbers for giant type.** Only the 2013 survey was found.
