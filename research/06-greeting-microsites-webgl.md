# 06 — Celebratory greeting microsites & WebGL holiday cards (evidence dossier)

Category: one-off celebratory greeting microsites by top digital studios (holiday cards, New-Year "wishes", advent calendars, Santa Tracker, interactive WebGL portfolio-toys). These are the closest real-world analogue to a "Happy Birthday, Mustafa" site.

Compiled: 2026-10-03. Researcher: Claude (design-research subagent).

---

## 0. Method, limits and how to read the confidence tags

**Read this before using any number in this file.**

1. **WebSearch budget ran out early.** 27 WebSearch queries succeeded. After that, every query returned "this session has used its web search budget (200 of 200 WebSearch calls)". Parallel research agents share that budget. I could not reach the 50–100 queries the brief asked for. Firecrawl returned HTTP 402 (no credits). Direct fetches through the proxy (awwwards.com, thefwa.com, medium.com, behance.net, web.archive.org and the live sites) returned CONNECT 403.
2. **Workaround: primary source code.** `git clone` of public GitHub repositories worked through the git proxy. I cloned and read the source code of the open-source celebratory sites I could identify:
   - `google/santa-tracker-web` @ f6209a4 (2026-08-31)
   - `brunosimon/folio-2019` @ 540f135
   - `brunosimon/folio-2025` @ 41046b5 (branches include `2025-easter`)
   - `catdad/canvas-confetti` @ 20eebad (v1.9.4)
   - `darkroomengineering/lenis` @ bc152f9 (v1.3.26)
   - `locomotivemtl/locomotive-scroll` @ b6bcc56 (v5.0.0-rc.1)
   - `poshaughnessy/peter.christmas` @ fac6aef
   - `luruke/awesome-casestudy` @ 974977e (a curated index of WebGL making-of articles, used for discovery)

   Details tagged VERIFIED come from those files. I give the file path so anyone can re-check them.
3. **Confidence tags**
   - **VERIFIED**: read directly in the site's own source code or assets, with the file path given, or (for copy) seen in a rendered asset image from the repo.
   - **REPORTED**: stated in a WebSearch result summary of an Awwwards, FWA, CSSDA, Medium or Behance page. The URL is listed, but I could not open the page myself. Search summaries can hallucinate. **REPORTED (2×)** means two independent queries agreed.
   - **REPORTED-LOW**: only one summary, and something looks off. Example: the same hex code appears on two unrelated sites, so it may be Awwwards' own UI color rather than the site's palette.
   - **NOT FOUND**: no evidence gathered. Do not fill these gaps with assumptions.
4. **No guessing.** Where I have outside knowledge that I could not confirm, I either left it out or marked it "unconfirmed, do not cite".

---

## 1. Long list (27 references found)

| # | Reference | Studio | Year | Recognition (confidence) | Depth here |
|---|---|---|---|---|---|
| R1 | Make Me Pulse 2016 Wishes | makemepulse (Paris) | 2016 | Awwwards SOTD 5 Feb 2016 + **SOTM February 2016** (REPORTED 2×) | Deep |
| R2 | Make Me Pulse Wishes 2017 (2017.makemepulse.com) | makemepulse | 2017 | Awwwards SOTD 20 Feb 2017, 7.9/10 (REPORTED 2×); FWA case; CSSDA listing | Deep |
| R3 | makemepulse 2018 Wishes (2018.makemepulse.com) | makemepulse | 2018 | Awwwards SOTD 9 Feb 2018; FWA FOTD Feb 2018; FWA **FOTM March 2018** (REPORTED 2×); CSSDA WOTY-2018 listing | Deep |
| R4 | Resn's Little Helper (littlehelper.resn.global) | Resn (NZ) | 2017 | Awwwards SOTD 22 Dec 2017, 7.76/10 (REPORTED 2×); FWA case | Deep |
| R5 | Resn's Little HelpAR | Resn | 2018 | Awwwards Honorable Mention; FWA case (REPORTED) | Deep |
| R6 | Christmas Island (14islands Xmas card) | 14islands (Stockholm) | 2017 | Awwwards Honorable Mention (REPORTED) | Deep |
| R7 | Sneaky Santa | 14islands | 2018 | FWA of the Day 26 Dec 2018; CSSDA WOTD + Best UI / UX / Innovation; Awwwards HM + Mobile Excellence; One Page Love (REPORTED) | Deep |
| R8 | Google Santa Tracker (santatracker.google.com) | Google (14islands among contributors) | annual | Awards NOT FOUND (no search budget left) | Deep (**code-verified**) |
| R9 | Bruno Simon — Folio 2019 | Bruno Simon | 2019 | Case study 13 Nov 2019 (REPORTED via curated list); awards NOT FOUND | Deep (**code-verified**) |
| R10 | Bruno Simon — Folio 2025 (seasonal "Easter" event branch) | Bruno Simon | 2025 | Awards NOT FOUND | Deep (**code-verified**) |
| R11 | My Little Storybook | Lusion (UK) | 2021 | Awwwards SOTD + Developer Award 24 Nov 2021; Awwwards Site of the Year 2021 nominee; Webby 2022 Best Visual Design – Aesthetic (REPORTED) | Deep (thin data) |
| R12 | Christmas Experiments (christmasexperiments.com) | curated by David Ronai | 2012– | Awwwards SOTD 16 Dec 2014; FWA (2017 edition, 82 FWA points) (REPORTED) | Deep (thin data) |
| S1 | Friendly Christmas Card | The Friendly Agency (Sydney) | ? | Listed in Awwwards Sites of the Day results (REPORTED-LOW, URL says "Nominee") | Shallow |
| S2 | Interactive Christmas Card | vismedia_agency | ? | Awwwards Nominee (REPORTED) | Shallow |
| S3 | The Vienna Christmas Tree ("Xmas Tree WebGL") | WILD (Vienna) | ? | Awwwards inspiration entry (REPORTED) | Shallow |
| S4 | Rock'n'Roll Wishes Machine | NOT FOUND | ? | Awwwards Honorable Mention (REPORTED) | Shallow |
| S5 | Resn 100 FWAs (fwa100.resn.co.nz) | Resn | 2017 | Milestone-celebration microsite (REPORTED) | Shallow |
| S6 | "How We Built a Playful WebGL Experience for 100 FWA Wins" | Jam3 | 2020 | Making-of dated 15 Apr 2020 (curated list) | Shallow |
| S7 | MaxMara "Bearing Gifts" | Lusion | 2020 | Case study 6 Jan 2020 (curated list) | Shallow |
| S8 | "My First Christmas Experiment" | Edan Kwan (Lusion co-founder) | 2015 | Making-of 1 Dec 2015 (curated list) | Shallow |
| S9 | "Finding Love" | Active Theory | 2017 | Making-of 15 Jan 2017 (curated list) | Shallow |
| S10 | "Billie Deer" | Bruno Imbrizi | 2016 | Making-of 21 Dec 2016 (curated list) | Shallow |
| S11 | "The Legend of IceCoon" | Samsy | 2016 | Making-of 26 Dec 2016 (curated list) | Shallow |
| S12 | peter.christmas (annual cards 2010–2018) | Peter O'Shaughnessy | 2010–18 | No award (VERIFIED README) | Shallow |
| S13 | Elf Yourself | OfficeMax / JibJab | 2006– | Only a Wikipedia hit; not researched | Mention only |
| S14 | Awwwards inspiration clips with unknown owners: "2018 Greetings – interactive microsite", "New Year Wishes – smooth transition", "Interactive Microsite Game", "Drag & Drop Pastel microsite" | NOT FOUND (likely makemepulse) | — | Awwwards Inspiration entries (REPORTED) | Mention only |
| T1–T3 | canvas-confetti · Lenis · Locomotive Scroll | libraries | — | Tooling evidence (VERIFIED code defaults) | Tool cards |

Not found despite trying (no award-winning greeting microsite surfaced for these in the queries I could run): Active Theory, Locomotive, Hello Monday, Dogstudio, Immersive Garden, Merci-Michel, Unseen, Build in Amsterdam, Exo Ape, Obys and Studio Freight holiday sites. Repo guesses for Christmas Experiments, 14islands Sneaky Santa, Resn, makemepulse wishes, Hello Monday and Active Theory all failed (no such public repos). **Treat this as a gap, not a finding.**

---

## 2. Deep reference cards

### R1 — Make Me Pulse 2016 Wishes — 2016.makemepulse.com (live URL NOT VERIFIED)
- **Source pages:**
  - https://www.awwwards.com/sites/make-me-pulse-2016-wishes
  - https://www.awwwards.com/make-me-pulse-wins-sotm-for-february-with-make-me-pulse-2016-wishes.html
  - https://thefwa.com/interviews/nicolas-rajabaly-and-antoine-ughetto-make-me-pulse
  - https://www.awwwards.com/du-haihang/collections/webgl-animations/
- **Recognition:** Awwwards SOTD 5 Feb 2016; Awwwards **Site of the Month, February 2016** (the article title says so). One summary said "October 2016", which conflicts with that title, so ignore it. SOTD score **7.77**: Design 8.02 · Usability 7.10 · Creativity 8.30 · Content 7.76. REPORTED (2× for SOTD/SOTM, 1× for the scores).
- **Concept:** A "dark intriguing online greeting card": the studio's New-Year wish to clients, built as a showcase of creativity with "no client pressure—only fun". The main goal was "an easy and intuitive way to navigate through the experience, a kind of 'gameplay'". REPORTED.
- **Process principle (useful as a build rule):** six keywords: IMAGINE (break the rules), DREAM BIG (be a child at heart), THINK (inspire and offer best UX), WORK HARD (pay attention to every detail and animation), STRIVE (struggle to reach perfection), and never let technology slow creativity down. REPORTED.
- **Experience sequence:** a series of separate "experiments", each built in WebGL. Step-by-step order NOT FOUND.
- **Signature interactions:** gameplay-style navigation between experiments; Awwwards tags "unusual navigation", "typography", "animation", "graphic design". REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** `#000000`, `#FFFFFF` (black and white only). REPORTED; consistent with "dark" in the description.
- **Motion:** NOT FOUND.
- **Sound:** NOT FOUND.
- **Tech stack:** "Each experiment was built using WebGL (with or without ThreeJS)." REPORTED.
- **Reach:** started on Twitter, spread to Reddit, **460,000+ visitors**. The founders' FWA interview calls it the project they were most proud of. REPORTED.
- **Copy & microcopy:** NOT FOUND.

### R2 — Make Me Pulse Wishes 2017 — https://2017.makemepulse.com/
- **Source pages:**
  - https://www.awwwards.com/sites/make-me-pulse-wishes-2017
  - https://thefwa.com/cases/make-me-pulse-wishes-2017
  - https://www.cssdesignawards.com/sites/make-me-pulse-wishes-2017/30067
  - https://twitter.com/makemepulse/status/847742376609054721 (FWA Insights article announcement)
  - https://www.facebook.com/makemepulse/videos/make-me-pulse-2017-wishes/1321093847933762/
- **Recognition:** Awwwards SOTD 20 Feb 2017, **7.90**: Design 8.21 · Usability 7.51 · Creativity 8.07 · Content 7.51. REPORTED (2× for SOTD and 7.9). FWA case plus an FWA "Insights" making-of article (REPORTED). CSS Design Awards listing (URL exists).
- **Concept:** "Great ideas are made to be experienced": visitors play with "some of the world's great ideas in interactive 3D". REPORTED.
- **Experience sequence:** NOT FOUND beyond: an interactive 3D vignette per "great idea", then the wish message.
- **Signature interactions:** Awwwards tags: one-page layout, clean, interactive experience, animation, **gesture interaction**, illustration, colorful. REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** `#49C5B6` (turquoise), `#FF9398` (coral pink), `#FFFFFF`. **REPORTED-LOW.** `#49C5B6` also came back for R3 and `#FF9398` for R4, so these may be Awwwards UI swatches and not the site's palette. Do not build on them without a second source.
- **Motion:** NOT FOUND.
- **Sound:** NOT FOUND (a Facebook video exists).
- **Tech stack:** WebGL. REPORTED.
- **Copy (verbatim, REPORTED 2×):** "**We wish you a Happy New Year and hope all your ideas come true!**" · "**Great ideas are made to be experienced**" · FWA description: "Make Me Pulse wish you all the best for 2017".

### R3 — makemepulse 2018 Wishes — 2018.makemepulse.com
- **Source pages:**
  - https://www.awwwards.com/sites/makemepulse-2018-wishes
  - https://www.behance.net/gallery/77581445/Wishes-2018
  - https://chrsmsln.com/project/makemepulse-wishes-2018 (developer Christophe Massolin's portfolio)
  - https://www.awwwards.com/inspiration/minigame-new-year-wishes
  - https://www.cssdesignawards.com/sites/makemepulse-2018-wishes/32280/
  - https://www.cssdesignawards.com/woty2018/websites/makemepulse-2018-wishes
- **Recognition:** Awwwards SOTD 9 Feb 2018; FWA Favourite of the Day Feb 2018; **FWA Favourite of the Month March 2018**; listed in CSSDA Website of the Year 2018. Awwwards developer score 7.08/10, and **"animations and transitions" 9.63/10**. REPORTED (2× for the awards, 1× for the scores).
- **Concept:** tagline "**Have an oddly satisfying New Year!**" A set of playful interactions and "fun games with various difficulties". The team "improved their rendering workflow, created mini-games and interactions, and included music composition". REPORTED 2×.
- **Experience sequence:** a chain of oddly-satisfying mini-games/interactions set to an original score. Exact order NOT FOUND.
- **Signature interactions:** physics-based "oddly satisfying" toys; Awwwards Inspiration clip titled "Minigame – New Year Wishes" (tags: webgl, unusual navigation, **audio design**, 3D, experimental, user interaction, microsite). REPORTED.
- **Stated challenges (from the developer's page):** "music composition and synchronization with visuals", "keeping physics simple for complex objects", "organizing scenes by team members to achieve uniform results". REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** `#49C5B6`, `#FFFFFF`. **REPORTED-LOW** (see R2 warning).
- **Motion:** GSAP. REPORTED.
- **Sound:** original music composition synced to visuals; WebAudio. REPORTED 2×.
- **Tech stack:** WebGL, physics simulation, Blender, WebAudio, GSAP. REPORTED 2×.
- **Copy:** "Have an oddly satisfying New Year!" REPORTED.
- **Series note:** R1–R3 are an **annual tradition**. Each year's New-Year card launches in January and wins awards in February.

### R4 — Resn's Little Helper — https://littlehelper.resn.global/
- **Source pages:**
  - https://www.awwwards.com/sites/resns-little-helper
  - https://www.awwwards.com/inspiration/a-webgl-christmas-card-microsite
  - https://thefwa.com/cases/resns-little-helper
  - https://reeoo.com/website/resns-little-helper/
  - https://orpetron.com/sites/resns-little-helper/
  - https://insidehtml5.tumblr.com/post/169085125269/resns-little-helper
- **Recognition:** Awwwards SOTD 22 Dec 2017, **7.76**: Design 7.84 · Usability 7.26 · Creativity 8.41 · Content 7.60. FWA case. REPORTED (2× for SOTD and score).
- **Concept:** a mock-myth "origin story of Christmas" starring an elf (later named Jethro) "playing music very badly on a flute". REPORTED.
- **Experience sequence:** WebGL Christmas-card microsite; the user drives the story with **click-and-hold**. Step order NOT FOUND.
- **Signature interactions:** Awwwards Inspiration clip tags: webgl, microsite, animation, colorful, **click and hold**, experimental, unusual navigation. Categories: Art & Illustration, **Music & Sound**, Experimental, Colorful, 360, 3D. REPORTED.
- **Typography:** "Google Font API" is listed, so a Google Font was used, but the family is NOT FOUND.
- **Color palette:** `#000000`, `#FF9398`, `#FFFFFF`. **REPORTED-LOW** (see R2 warning).
- **Motion:** GSAP + Lottie (2D vector animation over WebGL). REPORTED.
- **Sound:** the elf's flute is central. Mute and gate details NOT FOUND.
- **Tech stack:** CSS, Google Font API, **GSAP**, HTML, JavaScript, **Lottie**, **Three.js**, Webpack. REPORTED (1×, Awwwards technology list).
- **Copy (verbatim, REPORTED 2×):** "A long time ago, before St. Nick, Father Christmas, Kris Kringle, Santa or whatever you wanna call him, there was an elf, some 'shrooms and a flute. The real first Christmas."

### R5 — Resn's Little HelpAR (2018 sequel to R4)
- **Source pages:**
  - https://medium.com/resn/resns-little-helpar-48618976c336 (dated 21 Dec 2018)
  - https://www.awwwards.com/sites/resns-little-helpar
  - https://thefwa.com/cases/resns-little-helpar
- **Recognition:** Awwwards Honorable Mention; FWA case. REPORTED.
- **Concept:** "an update of a very Resn yuletide tradition": their "Christmas **cARd** to the world". The same visual style and absurd elements, taken "from 2D to 3D". REPORTED.
- **Signature mechanic:** "**Faux Augmented Reality (FAR)**". To keep it "accessible for a broad, festive audience" instead of depending on WebXR, they used the gyroscope for orientation: "3 out of the 6 degrees needed for a full AR experience, with the other 3 handled through creativity". Works in mobile Safari and Chrome. REPORTED.
- **Character:** Jethro the elf with a flute made from bone. REPORTED.
- **Typography, palette, sound, copy:** NOT FOUND.
- **Build-rule takeaway:** a celebratory sequel reuses the previous year's character and art direction. Mobile is enhanced with device orientation and does not depend on new APIs.

### R6 — Christmas Island (14islands' 2017 Xmas card)
- **Source pages:**
  - https://medium.com/14islands/how-we-crafted-a-playful-digital-christmas-card-in-3d-on-the-web-47fb6bfdfc21
  - https://www.awwwards.com/sites/merry-christmas
  - https://dribbble.com/shots/4040899-Interactive-christmas-card
- **Recognition:** Awwwards Honorable Mention. The listing date was reported as 29 Nov 2018, which is odd for a 2017 card, so the date is low confidence. REPORTED.
- **Concept:** "an island (being 14islands) to bring the Christmas spirit". The card was sent to friends and clients. It began as a Hack Day prototype. REPORTED.
- **Production:** the 3D models were sculpted **by hand in VR (HTC Vive + Google Blocks)** and exported as OBJ. The team collaborated on code in **Glitch**, which also hosted the card. Built with **A-Frame**, the WebVR framework. REPORTED 2×.
- **Typography, palette, sound, copy:** NOT FOUND.

### R7 — Sneaky Santa (14islands, 2018)
- **Source pages:**
  - https://medium.com/14islands/sneaky-santa-behind-the-scenes-8d4ea106043e
  - https://onepagelove.com/sneaky-santa
  - https://theanimatedweb.com/inspiration/sneaky-santa/
  - https://www.awwwards.com/14islands/awards
  - https://medium.com/@Zadvorsky/fuzzy-meshes-4c7fd3910d6f (technique source)
- **Recognition:** FWA of the Day 26 Dec 2018; CSS Design Awards WOTD + Best UI, Best UX and Best Innovation; Awwwards Honorable Mention + **Mobile Excellence**; featured on One Page Love. REPORTED.
- **Concept:** "a fun little 3D toy": a one-page Christmas eCard with "a (sneaky gift-stealing) Santa you **shake** to retrieve your presents". 14islands' interactive card "for the second year in a row". REPORTED 2×.
- **Experience sequence:**
  1. Santa appears holding the presents.
  2. The user grabs and shakes him (physics ragdoll).
  3. The presents fall out.
  4. A **final screen with light snowfall**.

  Screens 1–3 are REPORTED. The finale snowfall is REPORTED. Intro and loader NOT FOUND.
- **Signature mechanics:** Santa's model is split into one mesh per body part, mapped onto a **cannon.js** physics skeleton (a ragdoll). The solid beard is replaced by a "**fuzzy mesh**" (hair-like shader geometry adapted from Szenia Zadvornykh's "Fuzzy Meshes"). The making-of includes "color theme explorations". REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND (color explorations exist in the making-of).
- **Motion:** "Most transitions and the light snowfall on the final screen were done using **GSAP and CSS animations**." REPORTED.
- **Sound:** NOT FOUND.
- **Tech stack:** Three.js, cannon.js, GSAP, CSS animations. REPORTED.
- **Copy:** NOT FOUND.

### R8 — Google Santa Tracker — https://santatracker.google.com (code-verified)
- **Source pages and files:** repo `google/santa-tracker-web` @ f6209a4:
  - `prod/index.html`, `prod/loader.js`
  - `static/styles/santa.scss`, `static/styles/_shared.scss`
  - `static/src/elements/{santa-interlude,santa-countdown,santa-chrome,santa-button,santa-overlay}.{js,scss}`
  - `static/src/soundcontroller.js`, `static/entrypoint.js`
  - `en_src_messages.json`, `static/third_party/lib/klang/LICENSE`
  - 14islands case-study URLs (titles only): https://v2.14islands.com/work/google-santa-tracker/ · https://www.14islands.com/work/santa-tracker
- **Recognition:** NOT FOUND (search budget exhausted). 14islands lists it as client work (REPORTED, link titles only).
- **Concept:** "an educational and entertaining tradition for the December holiday period" (README, VERIFIED). A village hub of mini-games ("scenes") plus a countdown to Santa's departure. Tagline: "**Explore, play and learn with Santa's elves all December long**" (VERIFIED, `village_explore`).
- **Experience sequence (VERIFIED from code):**
  1. **First paint is inline-CSS only.** The body is green `#1A844B` with four 16 px bouncing dots ("loader") at `top: 80%`. Each dot animates `translateY(-100%)` at 50% over **1.6 s** with `cubic-bezier(0.50, 0.1, 0.50, 1)`. The dots are offset by −0.8, −0.6, −0.4 and −0.2 s and colored `#9FCEFF`, `#FFB1B1`, `#FFF173`, `#A8E9A2`. There is **no % counter**.
  2. A `<noscript>` fallback redirects to `upgrade.html`. Old browsers get a "fallback mode" with a few historic games.
  3. On later loads the loader appears only after **3.5 s** (`$loader-appear-delay: 3.5s`), so fast loads never flash it (`santa.scss`).
  4. **Scene changes use the `santa-interlude` wipe.** Four full-screen layers slide up from `translateY(100%)`:
     - colors `#6BB4FD` (blue), `#FF3333` (red), `#1A844B` (green), then a layer holding a looping **Lottie** loader (`img/interlude/loader.json`);
     - 0.75 s each, staggered in steps of 0.5 s ÷ 3 ≈ 0.167 s;
     - in-easing `cubic-bezier(0.215, 0.610, 0.355, 1.000)` (easeOutCubic);
     - once covered, the direction flips and the layers exit upward to `translateY(-100%)` with `cubic-bezier(0.645, 0.000, 0.785, 0.390)`;
     - UI sounds `menu_transition_game_in` and `menu_transition_game_out` fire on these transitions.
  5. **The game ends in an overlay** "Game Over!" with round buttons: Play, **Play again**, Home ("Santa's Village"). If the scene produced a shareable creation, a **short-link field** labelled "**Copy link to share**" appears. Clicking selects the text and copies it to the clipboard, with a one-frame `.copy` flash. Links are shortened through Firebase Dynamic Links (`santatracker.page.link`).
- **Signature interactions:**
  - **Countdown widget** (top-right of the header): red bar `var(--color-bar,#FF3333)` with SVG "flourish" ends and drop-shadow `3px 8px 0 rgba(0,0,0,.1)`. Days, Hrs, Min and Sec boxes are 40 px wide (44 px from 768 px up). Digits use **Lobster 22 px** (26 px desktop) in white with `letter-spacing:-1px`. Each tick takes **0.6 s**: the new digit enters from `translateY(50%)`+opacity 0 and the old one leaves to `-50%`. Labels are 8 px / 600 / uppercase / `letter-spacing:1px` / opacity .8. Narrow screens progressively hide the smallest unit (`max-width` 458 / 422 / 386 px).
  - **Creation and personalisation scenes:**
    - **Elf Maker**: "Build your own elf from head to toe".
    - **Code a Snowflake**: "Create your own holiday card by programming your own snowflake… and share it with your friends".
    - **Santa Selfie**, **Postcards**, Santa's Canvas.

    The recipient view says "**Someone sent you a snowflake!**" and "**This was made with code. Try it yourself!**" (VERIFIED strings).
- **Typography (VERIFIED, `prod/index.html`):** Google Fonts `Roboto:300,400,500,600 | Lobster | Google Sans:400,500,700`, plus Material Icons ligatures for buttons. Lobster (Impallari, free/Google Fonts) carries the festive display role: countdown numerals. Roboto/Google Sans handle the UI.
- **Color palette (VERIFIED):**
  - Background `#1A844B`
  - Primary bar and buttons `#FF3333` (Android mode `#32A658`)
  - Bar variable in `_shared.scss`: `$color-bar: #FF0160`
  - Button themes: yellow `#FFC100`, pink `#FF0060`, red `#FF3F00`, purple `#AD00AD` (also the "muted" state), green `#32A658`, orange `#FF9802`
  - Interlude: `#6BB4FD`, `#FF3333`, `#1A844B`
  - Loader dots: `#9FCEFF`, `#FFB1B1`, `#FFF173`, `#A8E9A2`
  - Focus outline: `#3EC4F0`
- **Buttons (VERIFIED, `santa-button.scss`):** 55×55 px circles (`border-radius:20000px`), white icons. They are **"lifted" with a hard offset shadow**: the button sits at `translate(-3px,-5px)` with shadows `3px 5px 0 rgba(0,0,0,.3)`, `3px 5px 0 <color>` and `8px 7px 0 2px rgba(0,0,0,.24)`. On `:active` it snaps to `translate(0,0)` in **0.05 s** and releases in 0.25 s ease-in. A tactile "press".
- **Motion:** CSS transitions and keyframes, Lottie for vector loops, Lit-element web components. Library list VERIFIED.
- **Sound (VERIFIED):**
  - The audio engine is **Klang by Plan8** ("Copyright (c) 2013 Plan8 Production", MIT), driven through a `kplay` wrapper.
  - **No sound gate.** If the browser keeps the AudioContext suspended, the site **starts in the muted state**. A gesture listener resumes audio on any of `mousedown`, `touchend`, `touchstart`, `scroll`, `wheel`, `keydown`.
  - **Mute toggle placement:** top-left header, second button (after Menu, before the scene action button). Labels "Mute"/"Unmute"; the button turns purple `#AD00AD` while muted.
  - Audio **auto-mutes when the tab is hidden** (`muted = state.hidden || state.muted`).
  - UI sounds play for nav open/close, pause/unpause and the interlude transitions. 1,284 audio files ship as mp3 + ogg pairs.
- **Mobile (VERIFIED):** `viewport-fit=cover` with safe-area insets; the rotate hint says "**Lock rotation for best experience.**"; pinch zoom disabled via `touch-action: pan-x pan-y`; PWA manifest and install prompt.
- **Copy & microcopy (verbatim, VERIFIED `en_src_messages.json`):**
  - "Get Ready!" · "Ready?" · "Play" · "Play again" · "Game Over!" · "Mute" · "Unmute" · "Share" · "Send"
  - "Copy link to share" · "Copy this link to share your message"
  - "I created this postcard for you in the Google Santa Tracker. Happy holidays!"
  - "Share your moves and challenge your friends"
  - Countdown labels: "Santa Takes Off In" / "Until Santa Departs"; units "Days / Hrs / Min / Sec"
  - "Welcome to the Google Maps Santa Tracker!"

### R9 — Bruno Simon Folio 2019 — bruno-simon.com (2019 edition; code-verified)
- **Source pages and files:** repo `brunosimon/folio-2019` @ 540f135:
  - `package.json`, `src/index.html`, `src/style/main.css`
  - `src/javascript/World/index.js`, `src/javascript/World/Sounds.js`, `src/javascript/World/EasterEggs.js`
  - Making-of: https://medium.com/@bruno_simon/bruno-simon-portfolio-case-study-960402cc259b (13 Nov 2019, listed in `luruke/awesome-casestudy`)
- **Recognition:** NOT FOUND (no budget left). The case study's existence is REPORTED via the curated list.
- **Concept:** you drive a toy car around a 3D playground world. It is the reference "interactive piece" in the brief's list.
- **Experience sequence (VERIFIED):**
  1. A start area appears. Its **floor border fills with load progress** (shader uniform `uLoadProgress`), which makes it a diegetic progress ring with no number. A white label reads "**LOADING...**".
  2. When assets are ready, the area activates: the label fades out (0.3 s) and "**START**" fades in (0.3 s, delay 0.3 s).
  3. Interacting with the area makes "START" fade out (0.3 s, delay 0.4 s) and plays the reveal sound. The world reveal starts after 600 ms: matcaps fade over 3 s, floor shadows over 3 s with a 0.5 s delay.
- **Typography (VERIFIED):** Google Fonts **Comic Neue 700** (`main.css`). The in-world labels are condensed bold uppercase sans PNG textures (rendered images, family NOT FOUND).
- **Sound (VERIFIED):** Howler, master volume 0.5. Every collision sound is randomized within `volumeMin/Max` and `rateMin/Max` so repeated hits never sound identical (the brick sound picks from six samples). Press the **M key** to mute (`_event.key === 'm'`).
- **Tech (VERIFIED):** three ^0.164, **cannon** ^0.6.2 (physics), **gsap** ^3.12.5, howler ^2.2.4, dat.gui.
- **Cursor (VERIFIED):** native `grab` / `grabbing` / `pointer` classes on the canvas. **No custom cursor.**
- **Easter egg (VERIFIED):** Konami code (`EasterEggs.js`).

### R10 — Bruno Simon Folio 2025 (with seasonal events) — https://bruno-simon.com (code-verified)
- **Source pages and files:** repo `brunosimon/folio-2025` @ 41046b5 (branches `main`, `2025-easter`, …):
  - `package.json`, `sources/index.html`, `sources/style/{fonts,general,menu,notifications}.styl`
  - `sources/Game/{Reveal,Audio,Title,KonamiCode,Easter}.js`, `sources/Game/World/{Intro,Confetti,Snow}.js`
  - `static/intro/*.png`, `static/sounds/*`
- **Recognition:** NOT FOUND.
- **Concept:** a 3D driveable world portfolio with achievements, a racing circuit, bowling, weather (snow, rain), day cycles, and seasonal events (Easter area, Black Friday). The folders `static/sounds/jingleBells` ("Mountain Audio – Christmas Bells.mp3") and `World/Snow.js` exist.
- **Experience sequence (VERIFIED):**
  1. A fonts-loader div forces Nunito, Amatic SC and Pally to load before the canvas draws text.
  2. An intro **circle** shows load progress as a radial wipe (`circle.smoothedProgress` shader discard). No number.
  3. The circle hides; the grid shows; the reveal ring expands (`gsap` `back.out(1.7)`, 2 s); the camera zooms 0.6→0.3 (`power1.inOut`, 1.25 s).
  4. After 1 s an in-world label appears with a hand-drawn arrow: "**CLICK TO START**". On touch devices it reads "**TAP TO START**"; gamepad users get Xbox or PlayStation variants. Next to it is a **speaker on/off icon** (the sound toggle offered at the gate).
  5. Click, Enter, an arrow key, W/D or gamepad ✕ calls `audio.init()`, the reveal sound plays at volume 0.5, the ring collapses (`back.in(1.3)`, 2 s) and the zoom goes to 0 (`back.in(1.5)`, 1.75 s). Then the world is live and the menu pre-opens.
  6. Hovering the start zone raises glow intensity ×1.22 over 0.2 s.
  7. Dev shortcut: the `#skip` hash plays everything 4× faster.
- **Confetti (VERIFIED, `World/Confetti.js`):**
  - Instanced 0.1×0.2 planes, **500 per burst**, a pool of 4 bursts.
  - **3 colors `#FFBDE7`, `#EEFF95`, `#84FFB5`**.
  - Radial burst (radius 2, elevation 6), cubic ease-out progress, **5 s** gsap tween; the confetti casts shadows.
  - Triggered by achievements: Konami code (3 bursts), bowling strike (3 bursts), circuit checkpoints and podium, social area.
- **Typography (VERIFIED):** Google Fonts **Amatic SC 700** (titles, 2.5 rem, and the hand-lettered intro labels) and **Nunito 400/700/900** (body). The self-hosted **Pally** family (Regular / Medium / Bold / Variable) is the third family; its foundry is not stated in the repo. Root font size is 20 px, dropping to 18 px at ≤520 px and 16 px at ≤440 px. One uppercase label style: 25 px, letter-spacing 8–14 px.
- **Color palette (VERIFIED, UI layer):**
  - Page background: radial gradient `#251F2B` → `#1D1721`
  - Menu gradient `#C21515` → `#46123B`
  - Accents: `#FFCECA` (pale pink), `#D5FF95` (lime), `#FFC67B` (amber), `#FF6A7C` (coral)
  - Tooltip `#141414`
  - Reveal ring `#E88EFF`
- **Sound (VERIFIED):** Howler. Mute persists in `localStorage('soundToggle')` and adds `html.is-audio-muted`. Ambient music tracks (`musics/`). Weather-driven ambience (rain, wind and snow volumes follow the weather values). The night ambience fades over 15 s. One-shots get randomized volume.
- **Micro-detail (VERIFIED, `Title.js`):** the **browser tab title is animated**. It reads `Bruno` followed by a 🚗 emoji that drives past 🌳 trees at the car's speed.
- **Tech (VERIFIED):** three ^0.183 (WebGPU + TSL node materials), Rapier 3D physics (WASM), gsap ^3.12.5, howler, camera-controls, Vite.
- **Cursor:** native `grab` / `grabbing` during intro and wandering. **No custom cursor** (VERIFIED).

### R11 — My Little Storybook — https://lusion.co/projects/my_little_story_book/
- **Source pages:**
  - https://www.awwwards.com/inspiration/my-little-storybook-experimental-and-immersive-children-storybook
  - https://annual.awwwards.com/siteoftheyear-nominees/my-little-storybook
  - https://v2.lusion.co/work/my-little-storybook/
  - https://www.csswinner.com/details/my-little-storybook/15813
  - https://tympanus.net/codrops/2026/04/13/lusion-where-digital-craft-meets-ambitious-experimentation/
- **Recognition:** Awwwards **SOTD + Developer Award, 24 Nov 2021**; Awwwards **Site of the Year 2021 nominee**; **Webby 2022, Best Visual Design – Aesthetic**. REPORTED.
- **Concept:** a free interactive digital book. It tells "the story of a bird family crossing the river", inspired by Japanese anime. A passion project from Lusion's monthly experiment series with "no brands or money behind it". REPORTED.
- **Experience, typography, palette, motion, sound, copy:** NOT FOUND.
- **Relevance:** the most decorated self-initiated "storybook" microsite in this category. A model for telling a birthday story in chapters.

### R12 — Christmas Experiments — https://christmasexperiments.com
- **Source pages:**
  - https://thefwa.com/cases/christmas-experiments-2017
  - https://thefwa.com/cases/christmas-experiments-p2
  - https://www.itsnicethat.com/articles/christmas-experiments
  - https://www.noupe.com/development/christmas-experiments-webgl.html
  - https://christmasexperiments.com/2018/08/reflect/
  - https://christmasexperiments.com/2018/23/legends/
  - http://blog.edankwan.com/post/my-first-christmas-experiment (via awesome-casestudy)
- **Recognition:** Awwwards SOTD 16 Dec 2014; FWA (2017 edition; "82 FWA award points" as reported). REPORTED.
- **Concept:** "an international WebGL advent calendar". Since 2012, curator David Ronai has published one experiment per day by digital artists and creative coders: "One day, one experiment". REPORTED.
- **Experience sequence:** a 24-door calendar grid. Each door opens a standalone WebGL experiment at `/<year>/<day>/<slug>/` (URL pattern seen in result URLs). REPORTED.
- **Mobile:** experiments "work on mobile devices, with some of them perfectly adapting to gesture controls". REPORTED.
- **Typography, palette, sound, copy:** NOT FOUND.
- **Relevance:** proves the **day-by-day unlock / advent** structure works for a celebration. Lusion's co-founder Edan Kwan published his 2015 entry's making-of.

---

## 3. Shallow references (one-liners, all REPORTED unless noted)

- **S1 Friendly Christmas Card**: "cheeky Christmas greeting from Sydney-based digital agency, The Friendly Agency". https://www.awwwards.com/sites/friendly-christmas-card
- **S2 Interactive Christmas Card (vismedia_agency)**: lets users "**modify a 3D Christmas card and share it online**". This is the only REPORTED customize-then-share card besides Santa Tracker. https://www.awwwards.com/sites/interactive-christmas-card
- **S3 The Vienna Christmas Tree by WILD**: Awwwards Inspiration "Xmas Tree WebGL" (animation, WebGL, interaction). https://www.awwwards.com/inspiration/xmas-tree-webgl
- **S4 Rock'n'Roll Wishes Machine**: Awwwards Honorable Mention. https://www.awwwards.com/sites/rock-n-roll-wishes-machine
- **S5 Resn 100 FWAs**: microsite celebrating Resn's 100th FWA (first in Australasia, seventh studio worldwide). https://fwa100.resn.co.nz/ · https://www.scoop.co.nz/stories/BU1711/S00550/resn-celebrates-its-100th-favourite-website-award.htm
- **S6 Jam3's 100-FWA celebration**: "How We Built a Playful WebGL Experience for 100 FWA Wins" (15 Apr 2020). https://medium.com/@Jam3/how-we-built-a-playful-webgl-experience-for-100-fwa-wins-12262265548d
- **S7 Lusion × MaxMara "Bearing Gifts"**: holiday-gift campaign case (6 Jan 2020). https://lusion.co/work/maxmara-bearing-gifts
- **S8 Edan Kwan, "My First Christmas Experiment"** (1 Dec 2015): http://blog.edankwan.com/post/my-first-christmas-experiment
- **S9 Active Theory, "Finding Love"** (15 Jan 2017): https://medium.com/@activetheory/finding-love-b4cf6727721b. Theme assumed from the title; content NOT FOUND.
- **S10 Bruno Imbrizi, "Billie Deer"** (21 Dec 2016): http://brunoimbrizi.com/unbox/2016/12/billie-deer/
- **S11 Samsy, "The Legend of IceCoon"** (26 Dec 2016): https://medium.com/@Samsy/the-legend-of-icecoon-case-study-advanced-webgl-first-part-185742e82429
- **S12 peter.christmas** (VERIFIED README): one personal card per year, 2010–2018. CSS3 card (2010–11) → Three.js (2012) → Goo (2013) → Pixi.js game (2014, 2016) → mo.js (2015) → web AR (2017–18). Shows the "annual tradition" pattern outside agencies. No award.
- **S14 Unattributed Awwwards Inspiration clips:** "2018 Greetings – interactive microsite", "New Year Wishes – smooth transition", "Interactive Microsite Game", "Drag & Drop Pastel microsite" (https://www.awwwards.com/inspiration/…). Owners NOT FOUND; they surfaced alongside makemepulse results.

## 4. Tooling cards (VERIFIED from library source; these are not sites)

- **T1 canvas-confetti v1.9.4** (`src/confetti.js`). Defaults:
  - `particleCount 50`, `angle 90`, `spread 45`, `startVelocity 45`, `decay 0.9`, `gravity 1`, `drift 0`, `ticks 200`, origin `x .5 / y .5`
  - shapes `square`, `circle`; `zIndex 100`; `scalar 1`
  - colors `#26CCFF #A25AFD #FF5E7E #88FF5A #FCFF42 #FFA62D #FF36FF`
  - Supports `disableForReducedMotion` (checks `matchMedia('(prefers-reduced-motion)')`, default false), `shapeFromPath` and `shapeFromText` (emoji confetti).
- **T2 Lenis v1.3.26** (`packages/core/src/lenis.ts`). Defaults:
  - `lerp 0.1`, `smoothWheel true`, `syncTouch false`, `syncTouchLerp 0.075`, `touchMultiplier 1`, `wheelMultiplier 1`, `autoRaf false`, **`respectReducedMotion true`**
  - Default easing when only `duration` is set: `t => Math.min(1, 1.001 - 2 ** (-10 * t))` (expo-out)
  - README shows the GSAP ScrollTrigger sync recipe (`lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t*1000))`)
- **T3 Locomotive Scroll v5.0.0-rc.1**: "Built on top of Lenis", 9.4 kB gzipped, `data-scroll data-scroll-speed="0.5"` parallax, "Parallax auto-disabled on mobile", native scrollbar.

---

## Cross-reference patterns

Counted across all 27 references. Only patterns with evidence are counted (V = VERIFIED, R = REPORTED). "NF elsewhere" means the remaining references had no evidence, not that they lacked the pattern.

| Pattern | Count | Supporting references |
|---|---|---|
| Uses WebGL / real-time 3D | **12** | R1 R2 R3 R4 R5 R6 R7 R9(V) R10(V) R12, S2 S3 (R) |
| Three.js (or a three-based framework) | **6** | R1 ("with or without ThreeJS"), R4, R6 (A-Frame), R7, R9(V), R10(V) |
| GSAP | **5** | R3, R4, R7, R9(V), R10(V) |
| Lottie (vector animation layer) | **2** | R4 (R), R8 (V, interlude loader) |
| Physics engine as the core toy | **4** | R3 ("physics simulation"), R7 (cannon.js ragdoll), R9 (cannon, V), R10 (Rapier, V) |
| Sound as a designed feature (music/SFX) | **6** | R3 (composed score + WebAudio), R4 (Music & Sound category, flute), R8 (Plan8 Klang, V), R9 (Howler, V), R10 (Howler, V), S14 "audio design" tag |
| Persistent mute toggle | **3** | R8 (top-left header, V), R9 ("M" key, V), R10 (menu + localStorage, V); NF elsewhere |
| **Sound-on gate / sound choice at start** | **1** | R10 (speaker icon beside "CLICK TO START", V). R8 has **no gate**: it starts muted when the browser blocks audio and resumes on first gesture (V) |
| Click/Tap-to-start gate | **2** | R9 "START" (V), R10 "CLICK TO START" / "TAP TO START" (V) |
| Preloader with **numeric % counter** | **0** | None found. Verified loaders are non-numeric: R8 bouncing dots, R9 progress-filled floor ring + "LOADING...", R10 radial wipe circle |
| Delayed loader (only shows if slow) | **1** | R8 (3.5 s delay on repeat loads, V) |
| Full-screen colored wipe transition | **1** | R8 (4 layers, 0.75 s, staggered, V); S14 "New Year Wishes – smooth transition" (R, unattributed) |
| Transitions rated as the standout | **1** | R3 (animations & transitions 9.63/10) |
| Custom cursor | **0** | None found; R9 and R10 use native grab/grabbing/pointer (V) |
| Scroll engine (Lenis / Locomotive) | **0** | None of the greeting sites showed one; they are single-screen canvases. Lenis/Locomotive verified only as libraries |
| Click-and-hold / shake / gesture mechanic | **4** | R2 (gesture), R4 (click and hold), R7 (shake Santa), R5 (gyroscope) |
| Mobile-specific enhancement | **5** | R5 (gyro "Faux AR"), R7 (Mobile Excellence), R8 (rotate hint, safe areas, V), R10 ("TAP TO START", touch buttons, V), R12 (gesture controls) |
| Confetti burst | **1 site + 1 lib** | R10 (500 instanced, 3 pastels, 5 s, V); T1 canvas-confetti |
| Snow / weather finale | **3** | R7 (snowfall final screen), R10 (Snow.js + jingle bells asset, V), S12 (snowflake effect) |
| Countdown widget | **1** | R8 (Lobster digits, 0.6 s tick, V) |
| Personalize-with-a-name | **0** | Not found in any reference |
| Make-it-yourself creation → shareable link | **2** | R8 (Elf Maker, Code a Snowflake, Postcards → short link, V), S2 ("modify a 3D card and share it online", R) |
| Recipient-view copy ("someone sent you…") | **1** | R8 "Someone sent you a snowflake!" + "This was made with code. Try it yourself!" (V) |
| Share CTA at the end | **2** | R8 ("Copy link to share" in the end overlay, V), S2 (R) |
| Replay CTA at the end | **1** | R8 "Play again" (V) |
| Annual tradition / sequel by the same studio | **6 studios** | makemepulse (R1→R2→R3), Resn (R4→R5 "yuletide tradition"), 14islands (R6→R7 "second year in a row"), Christmas Experiments (yearly), Google (R8 yearly), S12 (yearly) |
| Self-initiated "no client" passion piece | **5** | R1 ("no client pressure—only fun"), R4/R5, R6/R7 (studio cards), R11 ("no brands or money behind it") |
| Dark background | **3** | R1 (#000/#FFF, "dark intriguing"), R4 (#000 in palette, R-LOW), R10 (#251F2B→#1D1721 page bg, V) |
| Bright saturated festive background | **1** | R8 (#1A844B green + #FF3333 red, V) |
| Playful / hand-lettered display face | **3** | R8 Lobster (V), R9 Comic Neue (V), R10 Amatic SC (V) |
| Google Fonts | **4** | R4 ("Google Font API", R), R8 (V), R9 (V), R10 (V) |
| "Pressable" button with hard offset shadow | **1** | R8 (translate −3/−5 px, 0.05 s press, V) |
| Animated browser-tab title | **1** | R10 (🚗 passing 🌳, V) |
| Konami-code / easter egg | **2** | R9, R10 (V; R10 fires triple confetti) |
| First-person studio "wish" copy | **4** | R2 "We wish you a Happy New Year and hope all your ideas come true!", R3 "Have an oddly satisfying New Year!", R4 mock-myth origin story, R8 "I created this postcard for you… Happy holidays!" |
| Awarded in the Dec–Feb window | **7** | R1 (Feb), R2 (Feb), R3 (Feb/Mar), R4 (22 Dec), R7 (26 Dec), R12 (16 Dec), R6/R5 (holiday HMs) |

**Key takeaways for the build rules (evidence only):**
1. The verified gates say "**CLICK TO START**" / "**TAP TO START**" (R10) or "**START**" after "**LOADING...**" (R9). No verified reference shows a numeric 0→100% counter. If the birthday site wants one, it must be sourced from a different research file.
2. Verified sound handling: start audio on the start click (R10, R9), offer the speaker toggle right at the gate (R10), keep a persistent mute in the corner (R8, top-left) remembered in localStorage (R10), auto-mute when the tab is hidden (R8), vary SFX volume and rate randomly (R9, R10).
3. The award-winning greeting cards are **single-screen, toy-like WebGL scenes with one physical verb**: shake (R7), click-and-hold (R4), oddly-satisfying minigames (R3), drive (R9/R10). They are not scroll narratives.
4. Finales: snowfall (R7), confetti bursts on achievements (R10), and an end overlay with Play again + Copy link to share (R8).

---

## Ranking (by award level, then score)

1. **makemepulse 2016 Wishes (R1)**: Awwwards **Site of the Month** (Feb 2016) + SOTD 7.77.
2. **makemepulse 2018 Wishes (R3)**: Awwwards SOTD + **FWA Favourite of the Month** (Mar 2018) + FWA FOTD + CSSDA WOTY-2018 listing; transitions 9.63.
3. **Lusion, My Little Storybook (R11)**: Awwwards SOTD + Developer Award + **SOTY 2021 nominee** + **Webby 2022**.
4. **makemepulse Wishes 2017 (R2)**: Awwwards SOTD **7.90** + FWA case.
5. **Resn's Little Helper (R4)**: Awwwards SOTD **7.76** (Creativity 8.41) + FWA case.
6. **Christmas Experiments (R12)**: Awwwards SOTD (2014) + FWA.
7. **14islands Sneaky Santa (R7)**: FWA FOTD + CSSDA WOTD (+ Best UI/UX/Innovation) + Awwwards HM + Mobile Excellence.
8. **Resn's Little HelpAR (R5)**: Awwwards HM + FWA case.
9. **14islands Christmas Island (R6)**: Awwwards HM.
10. **Friendly Christmas Card (S1)**: Awwwards listing (level unclear).
11. **Interactive Christmas Card, vismedia (S2)**: Awwwards Nominee.
12. **Rock'n'Roll Wishes Machine (S4)**: Awwwards HM.
13. Unranked for awards (NOT FOUND, no search budget left): **Google Santa Tracker (R8)**, **Bruno Simon Folio 2019 (R9)**, **Bruno Simon Folio 2025 (R10)**. They carry the most **code-verified craft detail** in this file. Their awards need confirming in a later pass before anyone cites them as "award-winning".

## Open items for a follow-up pass (needs search budget)
- Fonts and real palettes for R1–R7 (Awwwards detail pages list "Fonts"; none were retrievable).
- Check the suspect hexes `#49C5B6` and `#FF9398` against a second source.
- Loader copy, start-button wording and sound-gate wording for R1–R7 and R11.
- Awards for Santa Tracker and Bruno Simon's portfolios.
- Agency holiday sites not reached: Active Theory, Hello Monday, Locomotive, Dogstudio, Immersive Garden, Merci-Michel, Unseen, Build in Amsterdam, Exo Ape, Obys, Studio Freight; Google Doodle birthday games; New-Year countdown and Valentine/Mother's Day award sites; **name-personalized greeting sites (none found yet)**.
