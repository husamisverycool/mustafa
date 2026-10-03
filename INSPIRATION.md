# Inspiration ledger: Happy Birthday Mustafa

The brief had one rule: **nothing on this site may come from our own taste.** Every font, size, colour, button, animation, interaction, section and line of copy had to come from a real, excellent website.

This file is the audit trail. Each decision names its source. The raw evidence is in [`research/`](research/), nine dossiers totalling about 5,300 lines and covering more than 150 references.

| Dossier | Category |
|---|---|
| [01](research/01-award-birthday-anniversary-sites.md) | Award-winning birthday / anniversary sites (Awwwards, FWA, CSSDA) |
| [02](research/02-brand-and-platform-birthdays.md) | Brand anniversaries and how platforms celebrate *your* birthday |
| [03](research/03-personal-sites-codepens-libraries.md) | Personal birthday sites, CodePens, celebration libraries |
| [04](research/04-celebrating-a-person-storytelling.md) | "Celebrate one person": Spotify Wrapped, GitHub Unwrapped, portrait heroes |
| [05](research/05-invites-and-ecards.md) | Invitations and e-cards: Partiful, Apple Invites, Paperless Post, iMessage |
| [06](research/06-greeting-microsites-webgl.md) | Studio greeting microsites: makemepulse, Resn, 14islands, Santa Tracker, Bruno Simon |
| [07](research/07-type-motion-buttons-tokens.md) | Type, motion, button and texture tokens |
| [08](research/08-photo-memories-galleries.md) | Photo memories: Apple / Google Photos Memories, Instagram Frames, Instax and Polaroid prints, Material 3 carousel, award-winning galleries |
| [09](research/09-mobile-excellence.md) | Phones: Awwwards Mobile Excellence, Apple HIG, Material / Android, WCAG 2.2, Lighthouse, the scroll engines' touch defaults. Ends in a 37-rule cited rulebook (M1–M37). |

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
| | | **[ Pause ]** / **[ Play ]** under the name stops the marquee. | WCAG 2.2.2 "Pause, Stop, Hide": moving content over 5 s beside other content needs a pause (rulebook M14a). Label style: Getty's bracketed mono labels. |
| 4 | Intro | "IT IS YOUR 20TH BIRTHDAY! 🎂 … today is for you." in two columns, with a magnetic **Join the celebration** pill. | Wikipedia 20: "IT IS OUR 20TH BIRTHDAY! 🎂 … Over 20 years… today is for you. Join the celebration". Layout and magnetic button: dennissnellenberg.com |
| 5 | Chapter I · *Wrapped* | A red flood. The title is stretched edge to edge at full viewport height in a compressed black grotesque, under mono "CHAPTER I" labels. | Getty: numbered chapters; "the chapter title floods the screen in a chapter hue"; `titleStretch` |
| | | Mustafa's cut-out portrait stands in front of the giant type. | Spotify *Your 2018 Wrapped* (Active Theory; Awwwards SOTD + FWA, 20M visitors on day 1): "gigantic text with overlapping … headshots in both solid and cutout form" |
| 6 | The numbers | "YOU ARE / **20** / years old": the age as the hero graphic, counted up. | Age as hero graphic is the most-recurring brand pattern (9 of 14 references: Google 25 "G25gle", YouTube "20", Telegram's age digits…). Size = GitHub Unwrapped's 2-digit counter (800 px on its 1080 canvas). Count-up = GitHub Unwrapped 2021. |
| | | "631,152,000 seconds young today.", ticking live. Each changed digit rolls in 0.6 s, entering from +50 % and leaving to −50 %. | Google's personalised birthday Doodle: "819,984,950 seconds young today". Digit roll: Santa Tracker countdown. |
| 6b | Memories | The five photos, under the mono label "Memories" and the title "A look back." | "Memories" is the name Apple, Google, Facebook, Snapchat and Instagram all use (dossier 08 P1). "Look back": Wikipedia 20, "look back at the past 20 years". |
| | | Each photo is an Instax Mini print: frame 54 × 86 mm, image 46 × 62 mm (aspect 54/86, borders 4/54 and a 20/54 bottom strip). The 4:3 photos are turned sideways; nothing is cropped. | Fujifilm Instax Mini film dimensions (08 C2); the 3:4 window fits all five photos within 1 % |
| | | The prints sit "behind the fog" until you **Shake to reveal** (or tap the button, or tap one print); they then "develop", staggered .07 s. | Instagram Frames (May 2024): "Shake to reveal", "develops" like a Polaroid, with a button for viewers who don't shake (08 C3). Stagger: Snellenberg. |
| | | Captions: "01 / 05" in grey mono on the print's strip. | Getty grey mono captions; nk.studio counter. Real capture dates would be Instagram's "date and timestamp", but the files carry none. |
| | | Phones: a swipe track with 16 px outer padding, 8 px gaps, each print the width of the screen less a 48 px peek of the next one, snapping. | Material 3 Carousel (hero layout; 16 \| L \| 8 \| S \| 16, small item 40–56 dp); NN/g "half images … signal more content", "support swipe" |
| | | Desktop: the section pins and the prints travel sideways as you scroll. | *Ten Years Away* and *20 Years Inspired by People* scroll-driven horizontal tracks |
| | | Once developed the button reads **Play memory movie**; it, or tapping a print, opens a full-screen player: one print per card on a flat chapter hue, **5 s per photo**, tap the right/left half for next/previous, touch and hold to pause, one progress segment per photo, music under it, and it closes after the last photo. | Google Photos Memories (5 s per image; tap halves; "touch and hold to pause"); Instagram segments; Apple Photos "memory movie" with music; Instagram / Google close after the last item |
| | | The first ("key") photo carries the title and subtitle over the image. | Apple Photos Memories: "title + subtitle" shown with the "key photo" (08 A1) |
| | | A red card: "#BirthdayWrapped / Your Birthday Wrapped is here / **Unwrap**", which shows "Unwrapping..." on click. | Spotify Home card: "Your 2024 Wrapped is here". GitHub Unwrapped: "Unwrap" / "Unwrapping..." |
| 7 | The colour wipe | Four full-screen layers slide up (0.75 s each, staggered 0.5 s ÷ 3, easeOutCubic), then exit upward. A whoosh plays in and out. | Google Santa Tracker `santa-interlude`, exact values |
| 8 | *Birthday Wrapped* story | 9:16 cards; segmented progress bar; tap right = next, left = back, hold = pause; music underneath; ends with **Share This Story** / **Start over**. | Spotify Wrapped |
| | | Progress segments are 2 px tall with 2 px margins and a 2 px radius, on an rgba(0,0,0,.3) track. Hold ≥ 200 ms pauses; shorter is a tap. | react-insta-stories 2.8 (read from its source; rulebook M29). Track colour: SweetAlert2 timer bar, as used by halo-maya. |
| | | Nothing sits in the top 14 % or the bottom 18 % of a card. | Meta Stories safe zones, 250–340 px of 1920 (rulebook M28; the strictest figure) |
| | | Each new card's content springs up from the bottom while the old text slides up and fades. | Spotify Wrapped 2025 (60fps.design recording); spring ease `back.out(1.7)` from Bruno Simon folio-2025 |
| | | Slide lengths: 130 f / 120 f / 260 f / 220 f at 30 fps. | GitHub Unwrapped 2021 scene lengths |
| | | Slide 1: a photo medallion with a "2026" band that flips at frame 60 to read "This is your #BirthdayWrapped". | GitHub Unwrapped 2021: 450 px medallion, 24 px white ring, 0 0 40px shadow, 80 px band, flip at frame 60, "This is my #GitHubUnwrapped" |
| | | "Out of all the brothers out there..." → "#1. That's you, Mustafa." | GitHub Unwrapped: "Out of all the languages out there..." → top language |
| | | "You've lived tons of days! 7,305 … to be exact!" | GitHub Unwrapped: "I made tons of contributions!" … "to be exact!" |
| | | "You are … seconds young today." | Google birthday Doodle |
| | | "[Weekday] was the day it all started." | GitHub Unwrapped: "[Weekday] was my most productive day." |
| | | "You were in the top 0.005% of brothers globally." | Spotify Wrapped: "You were in the top 0.005% of listeners globally." |
| | | "Here are some sweet ones." with three prints springing in one after another. | GitHub Unwrapped 2022 copy; Spotify 2025 "staggered grid reveals" |
| | | End card: **Share This Story** (ink), **Start over** (white), **[ Download story (image) ]** (text link). | Spotify end options; GitHub Unwrapped "Download story (image)". One or two prominent buttons per view, differed by style (Apple HIG Buttons, rulebook M19). |
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
| | | Buttons: **Play again** (ink), **Copy link to share** (white; "Copied" for 1500 ms), **[ Download story (image) ]** (text link), **💌 Reply** (opens WhatsApp with a prefilled reply). | Santa Tracker end overlay; GitHub Unwrapped ("Copied" 1500 ms; story image); halo-maya (WhatsApp reply). Two prominent buttons, the rest as text links (Apple HIG, rulebook M19). |

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
  - The marquee slows to 50 s (Studio Freight), and **[ Pause ]** stops it for anyone (WCAG 2.2.2).
  - Confetti is disabled (canvas-confetti `disableForReducedMotion`, "please confetti responsibly").
  - Balloons are skipped (the NotTwitter balloon rebuild hides them).
  - Letters and reveals appear instantly.
  - Wikipedia 25 swaps its animations for stills in the same situation.
- **SplitText** puts `aria-label` on the parent and `aria-hidden` on the pieces (GSAP `aria: "auto"`). The marquee clone is `aria-hidden` + `data-nosnippet` (Studio Freight).
- **Story keyboard:** ← → to move, Space to pause, Esc to close; focus returns to where it was.
- **Mobile:** `viewport-fit=cover` (Santa Tracker), touch tap zones (Spotify), and a motion fallback for the candles (ELLE). Everything else about phones is in §12.

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
| "Memories" | Apple, Google, Facebook, Snapchat, Instagram |
| "A look back." | Wikipedia 20 ("look back at the past 20 years") |
| "Shake to reveal" | Instagram Frames (verbatim) |
| "Play memory movie" | Apple Photos ("memory movie") |
| "Here are some sweet ones." | GitHub Unwrapped 2022 |
| "[ Pause ]" / "[ Play ]" | WCAG 2.2.2 names the mechanism "pause"; Getty's bracket style |

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
- **Memories:**
  - The develop animation (1.5 s, blur 10 px → 0, greyscale → colour, fog at 88 % white). Instagram's develop duration and look were NOT FOUND; 1.5 s expo.out is the site's Snellenberg entrance timing.
  - Prints are 60svh tall on desktop (no source gave a size), shrinking to fit a short screen.
  - The shake reuses the cake's motion test (15 m/s²); Instagram's shake threshold was NOT FOUND.
  - The player opens at the print you tapped (Google Photos opens a memory at its start; there is only one memory here).
  - The player's card colours follow the chapter order red, blue, green, orange.
- **Phones (§12):**
  - Where the **[ Pause ]** link sits (under the name, right-aligned). WCAG requires the control but no reference placed one.
  - The 220 px that the cake (and the pinned Memories head) subtract from the screen height so everything fits one short landscape screen.
  - On a short landscape phone the envelope and its two buttons sit side by side instead of stacked.
  - The landscape-phone name size, 24svh, is derived from Snellenberg's own ratio (15vw on a 16:10 screen is 24 % of its height).
  - The story medallion never shrinks below 150 px, so its 9cqw back text stays at the 12 px floor.
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
- **Dossiers 08 and 09.** They were researched in a later round under the same limits. Most numbers in 09 were read directly from primary sources: Apple's HIG data, developer.android.com, and npm packages (Lighthouse, @material/web, axe-core, GSAP, Lenis, Locomotive, react-insta-stories, @mdn/browser-compat-data). Dossier 08's Awwwards gallery mechanics, Instagram's develop duration and the print rotation angle are NOT FOUND, so none of them were invented.

---

## 12. Phones: the rulebook in `research/09`, applied

Dossier 09 turns Apple's HIG, Material / Android, WCAG 2.2, Lighthouse (the "Google criteria" behind Awwwards' Mobile Excellence award) and the scroll engines' own touch defaults into 37 cited rules. These are the ones that changed the site:

| Rule | What it says | What changed |
|---|---|---|
| M1, M31 | Test 320 → 430 px wide, and landscape (compact height < 480 dp, Android window size classes) | Every screen is checked at 320 × 568, 360 × 780, 375 × 667, 390 × 844, 414 × 896, 430 × 932, 667 × 375 and 844 × 390 |
| M2 | No sideways scroll, no clipped text at 320 px (WCAG 1.4.10, F104) | Automated check on every screen: page width, text off-screen, text leaking or clipped by its box, overlapping text |
| M4 | Phone side margin 16 px minimum; use the 24 px gap token, not the 40 px container token | Below 600 px the container padding equals Snellenberg's gap token (24 px) |
| M6 | ≥ 8 px between tappables | Gate, cake, finale and story buttons |
| M7 | Body 16 px; 17 px where the text is the content (Apple body 17/22) | The letter and messages are 17 px minimum; story asides 16 px minimum |
| M8 | Nothing a reader must read under 12 px (Lighthouse / Awwwards) | Story labels, envelope labels and card date line raised to 12 px; the decorative stamp and postmark are `aria-hidden` |
| M11 | Phone titles 28/34 (Apple Title 1) | "Your Birthday Wrapped is here" |
| M14 | Giant type is either fitted to its box or a marquee with a pause | Marquee pause control; the finale lines are fitted (Active Theory fit-text); landscape name steps down |
| M16, M33 | Re-fit only on width change; leave ScrollTrigger's `ignoreMobileResize` alone | The stretched titles no longer re-fit (or refresh ScrollTrigger) when the address bar shows or hides |
| M18, M20 | Every tappable ≥ 44 px, 48 preferred; corner controls largest | Pills keep their 40 px look with an invisible 48 px touch area (`@material/web` `.touch`); text links, the sound toggle, story close and footer links are 48 px |
| M19 | One or two prominent buttons per view (Apple HIG Buttons) | Story end card and finale: two pills, the rest as bracketed text links |
| M21 | Pills and labels never overflow at 320 px | Text links balance when a narrow frame wraps them |
| M25, M26 | Full-screen sections use `svh`; pins don't follow `dvh` | Already the case; kept |
| M27 | With `viewport-fit=cover`, pad edge-anchored things with `env(safe-area-inset-*)` | Top bar, sound toggle, loader, gate, story progress bar and close, finale, and every section's sides in landscape |
| M28, M29 | Story safe bands; tap halves, hold ≥ 200 ms, 2 px segments | Story and Memories player |
| M32, M34 | Native touch scrolling; simplify pinned / horizontal scenes on phones | Lenis keeps `syncTouch: false`; the Memories track pins only above 800 px and is a native swipe on phones (Locomotive's `smartphone: { direction: 'vertical' }` idea) |

**A real phone bug the rulebook's browser data caught:** the cake sized itself with `calc(86vw / 220px)`, a length divided by a length. MDN's browser-compat-data (dossier 09 V1) lists that only from **iOS Safari 26 and Chrome 140**, so on older iPhones the cake tiers would have had no size. The scale is now a plain length (`calc(86vw / 220)`), which every browser supports.

**Kept on purpose:** the 50 s reduced-motion marquee (Studio Freight) rather than a full stop (rulebook M36). A stopped marquee would leave "HAPPY BIRTHD" cut off at the screen edge, which is WCAG F104's failure. The pause control gives anyone the stop.

