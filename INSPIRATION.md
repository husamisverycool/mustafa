# Inspiration ledger: Happy Birthday Mustafa

The brief had one rule: **nothing on this site may come from our own taste.** Every font, size, colour, button, animation, interaction, section and line of copy had to come from a real, excellent website.

This file is the audit trail. Each decision names its source. The raw evidence is in [`research/`](research/), seven dossiers totalling about 3,900 lines and covering more than 120 references.

| Dossier | Category |
|---|---|
| [01](research/01-award-birthday-anniversary-sites.md) | Award-winning birthday / anniversary sites (Awwwards, FWA, CSSDA) |
| [02](research/02-brand-and-platform-birthdays.md) | Brand anniversaries and how platforms celebrate *your* birthday |
| [03](research/03-personal-sites-codepens-libraries.md) | Personal birthday sites, CodePens, celebration libraries |
| [04](research/04-celebrating-a-person-storytelling.md) | "Celebrate one person": Spotify Wrapped, GitHub Unwrapped, portrait heroes |
| [05](research/05-invites-and-ecards.md) | Invitations and e-cards: Partiful, Apple Invites, Paperless Post, iMessage |
| [06](research/06-greeting-microsites-webgl.md) | Studio greeting microsites: makemepulse, Resn, 14islands, Santa Tracker, Bruno Simon |
| [07](research/07-type-motion-buttons-tokens.md) | Type, motion, button and texture tokens |

---

## 1. How decisions were made

1. **Cite or cut.** Every visible element maps to at least one reference below. If nothing could be cited, the element was left out (see §10). Where a reference gave the *what* but no number, the number is listed in §9 as a gap-fill.
2. **Recurrence beats one-offs.** Each dossier counts how often a pattern recurs across its references. Patterns seen in many references were preferred.
3. **When references conflict, the higher-ranked one wins.** Ranking is by award level and score, or by scale. Example: Getty × Resn (Awwwards SOTD 7.89 + Developer Award) outranks Zero Studios (SOTD 7.42), so Getty's palette was used.
4. **One palette for everything.** All 7 of the Awwwards-listed anniversary palettes in dossier 01 use only 1–3 colours, so one tight system was adopted: the highest-ranked palette with full tokens, Getty's. Component references supply *mechanics and timings*; the palette supplies *colour*. The only exceptions are things depicting physical materials: the photo, the candle flame (uday's verified fire gradient) and the balloons-js balloon shading.
5. **Unobtainable fonts were swapped for fonts that references actually used in the same role.** No look-alikes were picked by eye (see §3.2).
6. **Content vs. design.** Mustafa's name, photo, age and the letter are content. The *shape* of every line of copy comes from a reference (see §7).

---

## 2. The experience, start to finish

| # | Moment | What happens | Source(s) |
|---|---|---|---|
| 1 | Preloader | An orange ground. Wordmark top-left, "INITIALIZING..." top-right. | Getty × Resn *Sculpting Harmony* (SOTD 7.89 + DEV 7.78) |
| | | A ~200 px ring of condensed type, "PREPARING YOUR GOOD TIMES ✦", turns around a "%" counter (38 px, letter-spacing 2 px). | *Slosh Seltzer*, Active Theory (SOTD 7.69) |
| | | "Happy birthday" flashes in 11 languages at a .15 s stagger. Then the curtain exits upward (.8 s Power4.easeInOut) and its rounded bottom edge collapses (1 s). The cursor shows "wait" while loading. | dennissnellenberg.com (Awwwards SOTD). Languages: Snellenberg's nine preloader languages, plus the two localised iMessage "happy birthday" triggers (Spanish, Arabic). |
| | | A serif note under the counter about sound. | Getty: "a serif note explains that the story has narration and a score" |
| 2 | The gate | An A7 envelope rises, addressed "To Mustafa", with a stamp and a postmark. | Greenvelope: "closed envelope with the names and a stamp on the front". Evite Premium: "animated envelope and digital stamps". Paperless-Post-style homage: "a standard A7 envelope rises, addressed to the guest by name" |
| | | Two choices: **Open with sound** / **[ Open without sound ]**. | *Ten Years Away* (SOTD + Dev Award): "enter with sound / enter without sound". Sound is opt-in on 3 of 3 award sites that have audio. |
| | | Click: the envelope turns over in 3D to a wax seal, the flap opens to a patterned liner, and the card is drawn up out of it. | Paperless-Post-style homage: "turns over in 3D to reveal the seal, the flap opens, the invitation slides out". Greenvelope: wax seals, "a flap that opens to show a lined interior", "the card drawn up out of it". Liner: Paperless Post's customisable liner, "the detail that makes an envelope look chosen". |
| | | The music-box "Happy Birthday" starts as the envelope opens. | Greenvelope: "music plays when the envelope opens". halo-maya starts its song on the envelope tap, which is the browser's required user gesture. |
| | | The card is a full-bleed photo with a heavy, wide white title and a date line. | Apple Invites: "full-bleed background art", "a wide display face ≈34/800 white, with date and place (14 pt) under it", ≈28 pt corners |
| | | The card expands to fill the screen and becomes the hero. | Columbia Pictures 100 (Exo Ape): "seamless page transitions". Spotify 2018: elements lined up exactly across scenes. |
| 3 | Hero | A full-height portrait with scroll parallax. | dennissnellenberg.com |
| | | The name, enormous, across the bottom: `bottom: 15vh`, `font-size: max(9em, 15vw)`, line-height 1. It is an endless marquee: GSAP xPercent −100, 18 s, ease none, repeat −1, reversing direction when you scroll up. | dennissnellenberg.com |
| | | A left "hanger" badge reads "Birthday today / 🎂 October 3 (20 years old)". | Badge: Snellenberg's "Located in the Netherlands" hanger. Wording: Telegram swaps "Date of birth" for "Birthday today", with the format "{emoji} {date} ({count} years old)". |
| | | Before the birthday, the badge counts down instead: "Days / Hrs / Min / Sec". | Google Santa Tracker countdown units |
| | | Right side: "↘ Today is for you." | Arrow + line: Snellenberg. Words: Wikipedia's 20th-birthday post, "today is for you". |
| | | Balloons rise once per page load. | Twitter's 2015 profile birthday balloons ("fly up from the bottom of the screen", once per load), drawn with balloons-js (Artur Bień) |
| | | Clicking the name or photo fires a confetti shower. | Google's 25th-birthday Doodle: click → confetti |
| 4 | Intro | "IT IS YOUR 20TH BIRTHDAY! 🎂 … today is for you." in two columns, with a magnetic **Join the celebration** pill. | Wikipedia 20: "IT IS OUR 20TH BIRTHDAY! 🎂 … Over 20 years… today is for you. Join the celebration". Layout and magnetic button: dennissnellenberg.com |
| 5 | Chapter I · *Wrapped* | A red flood. The title is stretched edge to edge at full viewport height in a compressed black grotesque, under mono "CHAPTER I" labels. | Getty: numbered chapters; "the chapter title floods the screen in a chapter hue"; `titleStretch` |
| | | Mustafa's cut-out portrait stands in front of the giant type. | Spotify *Your 2018 Wrapped* (Active Theory; Awwwards SOTD + FWA, 20M visitors on day 1): "gigantic text with overlapping … headshots in both solid and cutout form" |
| 6 | The numbers | "YOU ARE / **20** / years old": the age as the hero graphic, counted up. | Age as hero graphic is the most-recurring brand pattern (9 of 14 references: Google 25 "G25gle", YouTube "20", Telegram's age digits…). Size = GitHub Unwrapped's 2-digit counter (800 px on its 1080 canvas). Count-up = GitHub Unwrapped 2021. |
| | | "631,152,000 seconds young today.", ticking live. Each changed digit rolls in 0.6 s, entering from +50 % and leaving to −50 %. | Google's personalised birthday Doodle: "819,984,950 seconds young today". Digit roll: Santa Tracker countdown. |
| | | A red card: "#BirthdayWrapped / Your Birthday Wrapped is here / **Unwrap**", which shows "Unwrapping..." on click. | Spotify Home card: "Your 2024 Wrapped is here". GitHub Unwrapped: "Unwrap" / "Unwrapping..." |
| 7 | The colour wipe | Four full-screen layers slide up (0.75 s each, staggered 0.5 s ÷ 3, easeOutCubic), then exit upward. A whoosh plays in and out. | Google Santa Tracker `santa-interlude`, exact values |
| 8 | *Birthday Wrapped* story | 9:16 cards; segmented progress bar; tap right = next, left = back, hold = pause; music underneath; ends with **Share This Story** / **Start over**. | Spotify Wrapped |
| | | Progress segments are .25 em tall, with an rgba(0,0,0,.3) track. | SweetAlert2 timer bar, as used by halo-maya's auto-advancing cards |
| | | Each new card's content springs up from the bottom while the old text slides up and fades. | Spotify Wrapped 2025 (60fps.design recording); spring ease `back.out(1.7)` from Bruno Simon folio-2025 |
| | | Slide lengths: 130 f / 120 f / 260 f / 220 f at 30 fps. | GitHub Unwrapped 2021 scene lengths |
| | | Slide 1: a photo medallion with a "2026" band that flips at frame 60 to read "This is your #BirthdayWrapped". | GitHub Unwrapped 2021: 450 px medallion, 24 px white ring, 0 0 40px shadow, 80 px band, flip at frame 60, "This is my #GitHubUnwrapped" |
| | | "Out of all the brothers out there..." → "#1. That's you, Mustafa." | GitHub Unwrapped: "Out of all the languages out there..." → top language |
| | | "You've lived tons of days! 7,305 … to be exact!" | GitHub Unwrapped: "I made tons of contributions!" … "to be exact!" |
| | | "You are … seconds young today." | Google birthday Doodle |
| | | "[Weekday] was the day it all started." | GitHub Unwrapped: "[Weekday] was my most productive day." |
| | | "You were in the top 0.005% of brothers globally." | Spotify Wrapped: "You were in the top 0.005% of listeners globally." |
| | | End card buttons, including **Download story (image)**. | Spotify end options; GitHub Unwrapped "Download story (image)" |
| 9 | Chapter II · *Wish* | A blue flood (Getty's chapter II hue). | Getty |
| 10 | The cake | Blow out the candles with the microphone. On phones, shake. Or click the cake / press Space. | *Happy Birthday ELLE* (Awwwards HM + FWA of the Day): "blow candles with their computer's microphone or by using the gyro of their smartphone". Click / Space: uday-birthday-wishes. |
| | | Mic detection: fftSize 512, smoothing 0.1, poll every 50 ms, max of frequency bins from bin 4, threshold −50 dB, fire when 2 of the last 3 polls are above it. | `hark` (143k weekly npm downloads), read from its source |
| | | Tiers 140×44 / 180×52 / 220×60, scaled up to ×2 (largest that fits the screen); flame, 0.15 s flicker, smoke rising over 1.2 s. | uday-birthday-wishes (exact CSS) |
| | | The candles are the age digits, striped. | Telegram animates the age as digits; Google 25 puts the number in the wordmark. Stripe CSS: uday. |
| | | After blowing: a blow sound, a chime 400 ms later, two confetti bursts, and "🎉 Yay! Mustafa made a wish! 🎂✨". | uday-birthday-wishes (sound synthesis values, confetti values, copy) |
| | | **[ Play again ]** relights the candles. | Santa Tracker "Play again" |
| 11 | Chapter III · *Send* | A green flood. | Getty |
| 12 | Chat fake-out | A chat box types "Happy birthday to you!! Yeee! Many many happy blah...", then: "That's what I was going to do." → "But then I stopped." → "I realised, I wanted to do something special." → "Because," → "You are Special :)". | faahim/happy-birthday, the most-starred birthday site on GitHub (~1.5k ★, forked and re-sent everywhere). One line at a time: fajarghifar/happybirthday "ideas". |
| | | The sequence is pinned and scrubbed by scroll. | Getty: its ScrollTrigger composable defaults `scrub: true` |
| 13 | The letter | A white ground with a serif essay column and one oversized drop cap in the black grotesque. | Getty ("#fff caption ground", "a single oversized drop-cap letter in the black grotesque, an essay column") |
| | | The letter types itself as you scroll; the caret blinks at .7 s. | Typing: halo-maya (TypeIt). Blink: typed.js `typedjsBlink 0.7s`. |
| 14 | Sent with Balloons | A message bubble, "Happy Birthday, Mustafa 🎂", slides in; balloons fill the screen; "(Sent with Balloons)" appears under it. | iMessage: typing "happy birthday" triggers `CKHappyBirthdayEffect` (Balloons), with the fallback label "(Sent with Balloons)". Greeting wording: Google's personal Doodle tooltip "Happy Birthday, [first name]". |
| 15 | Group card *(optional)* | A wall of messages from family and friends, shown when `config.messages` is filled in. | Kudoboard: "Add a message, photo, GIF, or video; invite others to post; then deliver!". Partiful Cards: cosigners. |
| 16 | The close | Back to the preloader's orange, with "HAPPY / BIRTHDAY / MUSTAFA" stretched across the width, plus credits, back-to-top and ©. | Getty: the close reuses the preloader's #ffa441 and has a stretched title, credits list, back-to-top and copyright |
| | | Letter balloons spell HAPPY BIRTHDAY / MUSTAFA (1000 ms between lines, 100 ms between letters, foil SVG filter). | balloons-js `textBalloons` |
| | | 30 s of side-cannon confetti. | canvas-confetti README: "continuous side cannons for 30 seconds" |
| | | The song plays again. | Getty: "one piece of music per chapter"; Ten Years Away gives each chapter its own track |
| | | Click anywhere for fireworks: 30 dots, 50–180 px, 1200–1800 ms easeOutExpo, plus a white ring (80–160 px, 6 → 0 px line, 600–800 ms). | Julian Garnier's CodePen "Fireworks" (gmOwJX), values via a port that credits it |
| | | Buttons: **Play again**, **Copy link to share** ("Copied" for 1500 ms), **Download story (image)**, **💌 Reply** (opens WhatsApp with a prefilled reply). | Santa Tracker end overlay; GitHub Unwrapped ("Copied" 1500 ms; story image); halo-maya (WhatsApp reply) |

---

## 3. Visual system

### 3.1 Colour: Getty × Resn *Sculpting Harmony*

| Token | Hex | Getty role | Our role |
|---|---|---|---|
| `--c-orange` | `#ffa441` | preloader + close ground (bookend) | preloader, close, liner, story end card |
| `--c-red` | `#ff6359` | chapter title flood | Chapter I, Unwrap card, wax seal, share images |
| `--c-blue` | `#4596ff` | chapter II flood | Chapter II, message bubble, focus ring |
| `--c-green` | `#16a147` | chapter hue | Chapter III |
| `--c-ink` | `#000` | ink / black grounds | base ground, all type on hues |
| `--c-paper` | `#fff` | caption ground | envelope, letter, text on black |

- **Strategy:** "four flat institutional hues flood entire chapters, alternating with black and white grounds" (Getty).
- **One hue on screen at a time** in the story: Slosh Seltzer's "flavour-swap colourfield".
- **Confetti, fireworks, cake tiers, candle stripes and wall cards** all use this palette (rule 4 in §1).
- **Text on a hue is black** (Getty: ink on ground).
- **Rejected:** `#FF9398`. Dossiers 01 and 06 both found it, but on several unrelated sites, so it is probably an Awwwards UI swatch rather than a site's own colour.

### 3.2 Type

Getty uses three families in three roles. We kept the roles and filled each with a free font that a reference used.

| Role | Getty used (commercial) | We use | Why this font |
|---|---|---|---|
| Display: names, titles, numbers | Sharp Grotesk Black, compressed widths, "stretched across the full width" | **Mona Sans** (variable, wdth 75–125, wght 200–900; OFL, on Google Fonts) | GitHub Unwrapped's typeface, used for the *person's name* at the largest size. Its 75 % width at weight 900 gives the compressed black role; its 125 % width gives Apple Invites' "wide display face". |
| Text | Reckless (light serif) | **Instrument Serif** (OFL) | *20 Years Inspired by People* (/nk.studio, Awwwards SOTD + Developer Award), where it is the dominant face (696 vs 224 computed uses) |
| Labels | Roboto Mono, uppercase | **Roboto Mono** (OFL) | Getty's own label font, unchanged |

Sizes:

- **Type scale.** GitHub Unwrapped authors every size on a 1080 × 1080 canvas. We kept its numbers and mapped the canvas to the viewport's short side (`1u = 100vmin / 1080`):
  - 800 (giant 2-digit counter)
  - 200 (count-up)
  - 90 (statements)
  - 80 (name)
  - 55 (titles)
  - 40 (body)
  - 36 (asides)

  Inside the 9:16 story, the canvas maps to the card width instead.
- **Minimum sizes:** 16 px for body (halo-maya body size) and 12 px for labels.
- **Labels and sublines:** 12 px mono uppercase labels and 16 px mono sublines (Slosh Seltzer). Labels have 1 px tracking and .8 opacity (Santa Tracker).
- **Display tracking:** −0.03em (Slosh Seltzer letterSpacing −.03; Partiful display −0.02 to −0.03em).
- **Line heights:** 1 for the name (Snellenberg); 1.4 for body (halo-maya).
- **Line balancing:** headings use `text-wrap: balance`, because Active Theory's split-text balances lines by default.
- **Hero name weight:** 450, Snellenberg's base weight.

### 3.3 Spacing

dennissnellenberg.com's verified tokens:

```css
--gap-padding: clamp(1.5em, 4vw, 2.5em);
--container-padding: clamp(2.5em, 8vw, 8em);
--section-padding: clamp(5em, 21vh, 12em);
```

The mobile breakpoint is 800 px (Studio Freight compono's mobile breakpoint).

### 3.4 Motion

| Token | Value | Source |
|---|---|---|
| CSS ease | `cubic-bezier(.7,0,.3,1)` at .3 / .5 / .7 / .9 s | dennissnellenberg.com |
| Entrances | 1.5 s, stagger .07, `expo.out` | Snellenberg `.once-in`. `expo.out` is also the most common studio ease (7 verified uses: Cuberto, Studio Freight, Lenis, ScrollSmoother). |
| Curtain | .8 s `power4.inOut`; edge collapse 1 s | Snellenberg |
| Loops | 18 s linear (marquee, preloader ring) | Snellenberg marquee |
| Reduced-motion loops | 50 s | Studio Freight marquee |
| Springy | `back.out(1.7)` | Bruno Simon folio-2025 reveal |
| Text reveals | GSAP SplitText `mask` (lines / chars) | GSAP's built-in "rise from behind a mask" |
| Smooth scroll | Lenis defaults (lerp 0.1), wired with the README's GSAP ScrollTrigger recipe | Getty and Ten Years Away both ship GSAP + Lenis |
| Programmatic scroll | 1000 ms, `[0.25, 0, 0.35, 1]` | Locomotive Scroll v4 `scrollTo` default |
| Parallax | `y = windowWidth × speed × 0.1`, speed 3 | Studio Freight compono formula; speed magnitude from Snellenberg's `data-scroll-speed="-3"` |
| Wipe eases | `(0.215,0.61,0.355,1)` in, `(0.645,0,0.785,0.39)` out | Santa Tracker |

### 3.5 Buttons, cursor, texture

- **Pill buttons.** Slosh Seltzer's "I'M READY TO PARTY" pill (~324×77 px, radius 45). Height is `clamp(40px, 5.35vw, 77px)`: 40 px is Material 3's filled-button height, 5.35vw is 77 px on a 1440 board (Studio Freight's px→vw method). Radius 9999 px (Material corner-full). Ink fill with the ground colour knocked out (Getty ink-on-ground).
- **Secondary actions.** Bracketed mono labels, "[ Open without sound ]" (Getty's "[EXPLORE THE MODEL]", "[READ MORE]").
- **Magnetic buttons.** Strength 100, text 50 (Snellenberg `data-strength` / `data-strength-text`). They follow with Cuberto mouse-follower's 0.55 s `expo.out`.
- **Cursor.** Native, as on Bruno Simon's sites; custom cursors were found on 0 of the 27 greeting microsites. The trail is the *Ten Years Away* halftone mouse trail: movement is accumulated, fades, and is drawn as benday dots that "shrink quietly when you hover over something clickable". Its numbers:
  - 15 px dot grid, dots ≤ 6 px, opacity 0.6–1.05 (GitHub Unwrapped Noise.tsx);
  - 81.6 px brush (Cuberto text-state circle);
  - lerp 0.1 fade (Lenis);
  - ×0.75 shrink over links (Cuberto .2 → .15);
  - `mix-blend-mode: exclusion` (Cuberto "-exclusion");
  - hidden on touch devices (Studio Freight).
- **Top bar.** A 12 px mono strip with ✦ spacers (Slosh Seltzer). A 4-bar audio toggle sits top-right (Slosh), drawn with the same exclusion blend.
- **Background.** The *Ten Years Away* scroll-velocity fBm shader: "loose clusters, like smoke … scroll faster, and they stretch into thin, directional, elongated streaks". It is built with Three.js (Getty, Ten Years Away). Peak alpha is 0.25 (three-vignette-background `noiseAlpha`; Paper grain-gradient `noise`) and the pixel ratio is capped at 1.5 (Ten Years Away).

---

## 4. Sound

- Opt-in at the gate (Ten Years Away). The music starts on the envelope click (Greenvelope, halo-maya).
- Master volume 0.5 (Bruno Simon folio-2019, Howler).
- Mute is remembered in `localStorage('soundToggle')` and sets `html.is-audio-muted` (Bruno Simon folio-2025). The **M** key toggles it (folio-2019).
- Audio mutes automatically while the tab is hidden (Santa Tracker `soundcontroller.js`).
- No audio on Save-Data, 2G or 3G connections (Ten Years Away).
- Blow: 0.8 s white noise → lowpass 600 → 100 Hz → gain 0.3 → 0.01. Chime: C5–E5–G5–C6, sine, 0.3 s, gain 0.2, 80 ms apart. (uday-birthday-wishes, exact.)
- Every sound is synthesised, so there are no audio files. "Happy Birthday to You" is in the public domain; it is voiced with the same sine synthesis as uday's chime. Set `config.music` to use your own mp3 instead (Posh "Add song from Spotify", Apple Invites' Apple Music playlist).
- Pops and whooshes vary their volume and rate on every play (Bruno Simon folio-2019 `Sounds.js`).

---

## 5. Hidden surprises

7 of the 14 brand and platform references hide surprises.

- **Konami code** (↑↑↓↓←→←→BA) → three confetti bursts. *Bruno Simon folio-2025 `KonamiCode.js`.*
- **Type "happy birthday" anywhere** → balloons. *iMessage auto-trigger.*
- **Click Mustafa's name or photo** → confetti. *Google 25.*
- **The browser tab title is animated**: a 🎈 travels toward a 🎂. *Bruno Simon folio-2025 `Title.js`, where a 🚗 drives past 🌳.*
- **Click anywhere in the close** → fireworks. *Julian Garnier.*

---

## 6. Accessibility and resilience, also borrowed

- **Reduced motion** (`prefers-reduced-motion: reduce`):
  - Lenis drops smoothing (built in).
  - The marquee slows to 50 s (Studio Freight).
  - Confetti is disabled (canvas-confetti `disableForReducedMotion`, "please confetti responsibly").
  - Balloons are skipped (the NotTwitter balloon rebuild hides them).
  - Letters and reveals appear instantly.
  - Wikipedia 25 swaps its animations for stills in the same situation.
- **SplitText** puts `aria-label` on the parent and `aria-hidden` on the pieces (GSAP `aria: "auto"`). The marquee clone is `aria-hidden` + `data-nosnippet` (Studio Freight).
- **Story keyboard:** ← → to move, Space to pause, Esc to close; focus returns to where it was.
- **Mobile:** `viewport-fit=cover` (Santa Tracker), touch tap zones (Spotify), and a motion fallback for the candles (ELLE).

---

## 7. Copy ledger

| On the site | Pattern source |
|---|---|
| Page title "Happy Birthday Mustafa" (no comma) | 3 of 4 award-listed "Happy Birthday + Name" titles have no comma (ELLE, Game Boy, Jigoro Kano) |
| "INITIALIZING..." | Getty |
| "PREPARING YOUR GOOD TIMES" | Slosh Seltzer (verbatim) |
| Open with / without sound | Ten Years Away ("enter with sound / enter without sound") |
| "Birthday today", "🎂 October 3 (20 years old)" | Telegram |
| "Today is for you.", "Join the celebration", "IT IS YOUR 20TH BIRTHDAY! 🎂" | Wikipedia 20 |
| "Your Birthday Wrapped is here", "Share This Story", "Start over" | Spotify Wrapped |
| "#BirthdayWrapped", "Unwrap", "Unwrapping...", "This is your #BirthdayWrapped", "Out of all the … out there...", "tons of …", "to be exact!", "[Weekday] was …", "Download story (image)", "Copied" | GitHub Unwrapped |
| "You were in the top 0.005% of … globally." | Spotify Wrapped |
| "… seconds young today." | Google personal birthday Doodle |
| "✨ … to blow the candles out!", "🎉 Yay! Mustafa made a wish! 🎂✨" | uday-birthday-wishes |
| The chat-box lines | faahim/happy-birthday (verbatim) |
| "Happy Birthday, Mustafa 🎂", "(Sent with Balloons)" | Google Doodle tooltip; iMessage |
| "Play again", "Copy link to share" | Google Santa Tracker |
| "💌 Reply" | halo-maya ("💌 Balas") |
| Chapter names *Wrapped*, *Wish*, *Send* | Spotify Wrapped; uday's "made a wish"; the chat box's "Send" button |

---

## 8. Libraries: chosen because the references ship them

| Library | Used by |
|---|---|
| GSAP 3.15 (ScrollTrigger, SplitText, CustomEase) | Getty, Ten Years Away, Zero Turns Two, Five Years of -99, Bruno Simon, makemepulse, Resn, 14islands |
| Lenis | Getty, Ten Years Away |
| Three.js | Getty, Ten Years Away, Zero Turns Two, -99, Bruno Simon, Resn |
| canvas-confetti | ~9.6M weekly downloads; uday-birthday-wishes |
| balloons-js | Twitter-style balloons and foil letter balloons |
| Vite | Bruno Simon folio-2025, GitHub Unwrapped |

---

## 9. Gap-fills: numbers no reference supplied

These are the places where a reference supplied the *idea* but not the value. Each was set to the nearest verified constant, or the smallest value that works, so you can see exactly where judgment crept in.

- **Preloader:** the rounded curtain edge starts at 10vh (Snellenberg's starting height wasn't captured).
- **Hero:**
  - The photo's soft radial fade into black (Snellenberg's photo sits on a matching flat background; ours needed blending).
  - Hanger and aside vertical position (46vh) and hanger padding.
- **Chapters:**
  - Cut-out height `min(82svh, 100vw)`.
  - Title insets from the top and bottom edges.
  - `scaleY` capped at 6.
- **Envelope:**
  - Stamp size and perforation (9 px holes, 7 px margin).
  - Postmark size.
  - Wax-seal shading.
  - Liner dot density.
  - Card slide distance (−58 %).
  - 3D perspective 1500 px (balloons-js's value, reused).
- **Buttons and layout:**
  - Pill side padding (2em).
  - Chat-box width (22em).
  - How long the chat is pinned (450 % of the viewport).
  - Where reveals trigger (60–85 % down the screen).
- **Story:**
  - Tap vs. hold threshold (250 ms).
  - Slide-out distance (60 px).
  - Count-up durations (1.5 s / 2.5 s).
- **Cake:**
  - Scale factor (up to ×2 uday's size).
  - Digit-candle size.
  - Shake threshold for phones (15 m/s²).
  - The mic threshold is hark's *speech* setting; no blow-specific value was found anywhere.
- **Sound:**
  - Music-box tempo (beat 0.5 s) and octave partial.
  - Pop and whoosh filter settings.
- **Hidden surprises:**
  - Spacing between the Konami bursts (250 ms).
  - Tab-title tick (400 ms).
  - Letter-balloon font size (fitted to the screen width).
- **Smoke shader:** internal noise scale and thresholds.
- **Halftone trail:** stamp strength.

---

## 10. Researched but deliberately *not* used

- **A custom cursor dot or ring** (Cuberto / Studio Freight style). Greeting microsites use none (0 of 27) and Bruno Simon keeps the native cursor. The halftone trail from an award-winning anniversary site took its place.
- **Film grain, duotone or halftone treatment of the portrait.** 0 verified uses across the celebrate-a-person references.
- **A gold tier gradient** (GitHub Unwrapped tiers). It breaks the one-palette rule.
- **Party RSVP buttons** (Partiful, Apple Invites). Not relevant to a birthday wish.
- **Multiplayer, AI podcasts, quizzes.** Xbox Museum, Spotify 2024 and Columbia 100 have them, but they need content or a backend this site doesn't have.

---

## 11. Evidence caveats

- **Network limits.** This build environment could not open most websites directly. Firecrawl was out of credits, and WebSearch was capped at 200 calls shared by seven research agents. Most "REPORTED" facts come from search-engine summaries of the source pages and are labelled as such in the dossiers.
- **GitHub-derived evidence.** Several of the most precise values came from public GitHub repositories, read by research agents before they were told that reading repositories outside this project was out of scope. Each dossier flags these items. They are:
  - Getty and Slosh Seltzer: code-capture teardowns (palette, fonts, preloader, pill).
  - Santa Tracker, Bruno Simon folio-2019/2025 and peter.christmas: source clones.
  - dennissnellenberg.com: copies of its CSS and JS (hero, marquee, spacing and motion tokens).
  - GitHub Unwrapped: source (type scale, scene lengths, medallion, noise).
  - Partiful and Luma: API identifiers.
  - iMessage: effect IDs.
  - Wikipedia 25: Birthday mode source.

  Dossier 04's researcher removed its GitHub-derived detail. That fuller version is preserved in this repo's history at commit `767ea54`, and the hero tokens above cite it.
