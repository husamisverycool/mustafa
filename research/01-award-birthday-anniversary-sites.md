# 01 — Award-winning Birthday / Anniversary / Celebration websites

Evidence base for the "Happy Birthday, Mustafa" site. Category: sites that won or were listed by Awwwards, FWA, CSS Design Awards (CSSDA), CSS Winner, Webby, Codrops or Muzli and that are explicitly about a birthday, an anniversary ("turns 2", "10 years", "150 years") or a party.

Compiled 2026-10-03.

---

## 0. Method, tool limits and confidence legend

**What worked and what did not**
- **WebSearch:** 38 targeted queries ran. Then the session-wide WebSearch budget ran out ("200 of 200 WebSearch calls"; the cap is shared with other agents in this session). No more web searches were possible.
- **Firecrawl:** returned HTTP 402 (account out of credits).
- **WebFetch:** blocked by the egress proxy (`tympanus.net` refused, and `awwwards.com` and `codepen.io` are in the proxy's denial log).
- **GitHub code search (`mcp__github__search_code`):** I used this to fill the gaps, and it turned out to be the richest source. It returns verbatim text fragments from public repos that mirror or capture the sites:
  - a full Markdown mirror of the Codrops "Ten Years Away" case study;
  - third-party "teardown" files that read the live sites' own HTML, CSS and JS bundles (for Getty "Sculpting Harmony" and "Slosh Seltzer");
  - a captured CSS census of nk.studio's anniversary site;
  - library READMEs that list sites built with them.

  Each GitHub URL below is pinned to the commit SHA that was read.

**Confidence labels used in every card**
- **VERIFIED**: a source page states it. This means an Awwwards, FWA, CSSDA or agency page as surfaced by a search summary, or a verbatim text fragment I read myself. "x2" means two independent queries or sources agree.
- **REPORTED**: a secondary source says it, for example:
  - a press article;
  - a third-party teardown or capture of the live site. I mark these "(code capture)" when the capture names the file it read, such as `entry.css :root`. Those are strong, but they are still not my own reading of the site.
  - a single search summary that I could not cross-check.
- **NOT FOUND**: unknown. Nothing has been guessed.
- **[bg]**: background knowledge that does not come from a cited source (used only for type-foundry and licence notes). Treat it as unverified.

Search summaries can hallucinate. Where a summary contradicted the page title, for example "Nominee" in the title but "Honorable Mention" in the summary, I flag the conflict and do not resolve it silently.

---

## 1. Master list: every reference found (34)

Tiers: **A** = Site/Website of the Month or Year, or Webby winner. **B** = Site of the Day with a published score. **C** = Site of the Day without a score, or FWA of the Day. **D** = Honorable Mention, or FWA/Commarts feature only. **E** = Nominee or listing only.

| # | Name | Occasion | Best recognition (tier) | Date | Live URL | Deep card? |
|---|---|---|---|---|---|---|
| 1 | 20 Years of Xbox Museum (Active Theory for Microsoft) | Xbox 20th anniversary | Awwwards SOTM Dec 2021 + SOTD 7.93; FWA SOTM 2021; Webby Winner 2022; CSSDA WOTY 2021 nominee (A) | Nov–Dec 2021 | museum.xbox.com | Yes §2.1 |
| 2 | Sculpting Harmony (Resn for Getty) | museum online exhibition "marking an anniversary" (Walt Disney Concert Hall) | Awwwards SOTD 7.89 + DEV 7.78; SOTM Nov 2023 (medium) (A/B) | 17 Nov 2023 | gehry.getty.edu | Yes §2.2 |
| 3 | Slosh Seltzer (Active Theory / Buttermax) | party ("THE LIFE OF THE PARTY IN SELTZER FORM") | Awwwards SOTD 7.69 + DEV score 7.45 (B) | 5 Jun 2024 | NOT FOUND (URL not captured) | Yes §2.3 |
| 4 | Blind Barber 10—Year | brand 10-year anniversary | Awwwards SOTD 7.56 + DEV 7.1; CSS Winner (B) | NOT FOUND | NOT FOUND | Yes §2.4 |
| 5 | Five Years of -99 (-99 design studio) | studio 5th anniversary | Awwwards SOTD 7.46; FWA case (B) | 20 Dec 2020 | fiveyears.minus99.com | Yes §2.5 |
| 6 | Zero Studios Birthday Site, "Zero Turns Two" | studio 2nd birthday | Awwwards SOTD 7.42; CSSDA WOTD (B) | SOTD 8 Mar 2019; CSSDA 26 Feb 2019 | two.zero.nyc | Yes §2.6 |
| 7 | Ten Years Away (Studio375) | studio 10th anniversary | Awwwards SOTD 7.32 + Developer Award 7.11; CSSDA; Codrops case study; Muzli (B) | 26 Jun 2026 | ten.375.studio/en | Yes §2.7 |
| 8 | 20 Years Inspired by People (/nk.studio) | studio 20th anniversary | Awwwards SOTD + Developer Award, score NOT FOUND (C) | 7 Aug 2026 (REPORTED) | inspiring.nk.studio | Yes §2.8 |
| 9 | Happy Birthday ELLE | ELLE magazine 70th birthday | Awwwards HM; FWA of the Day (C) | FWA 5 Feb 2016 | NOT FOUND | Yes §2.9 |
| 10 | Fifty Years of The Martin Agency | agency 50th anniversary | FWA Site of the Day (C) | 10 Feb 2016 | fifty.martinagency.com | Yes §2.10 |
| 11 | 150 Years of the Bijenkorf (DEPT®) | department store 150th anniversary | FWA case; Awwwards HM or Nominee (conflict); Commarts Webpick (D) | 2020 | NOT FOUND | Yes §2.11 |
| 12 | Happy Birthday Game Boy (Petr Tichy) | Game Boy 25th anniversary | Awwwards HM or Nominee (conflict); CSSDA listing (D) | 2014 | NOT FOUND | Yes §2.12 |
| 13 | 10 Years Digital Present (Digital Present) | agency 10th anniversary | Awwwards HM; judge scores ranged 6.90–8.60 (D) | 26 Mar 2026 | NOT FOUND | No |
| 14 | DEVELUP — 10 Years Anniversary | company 10th anniversary, "interactive WebGL experience" | Awwwards HM (D) | 11 Apr 2023 | NOT FOUND | No |
| 15 | 10 Years of Impact (The DataFace) | 10-year impact report | Awwwards HM; Awwwards "Navigation Timeline" inspiration element (D) | 10 Dec 2024 | NOT FOUND | No |
| 16 | CNJ 10 Years! (CNJ Digital, Ljubljana) | agency 10th anniversary | Awwwards HM, "15 votes out of 56" (D) | 27 Jul 2022 | NOT FOUND | No |
| 17 | GetResponse 15th Birthday | SaaS brand 15th birthday | Awwwards HM (D) | 22 Nov 2013 | NOT FOUND | No |
| 18 | Walt Disney Concert Hall 10th Anniversary | venue 10th anniversary; "interactive 360° video and the Concert Master, an engaging concert selector tool" | Awwwards HM (D) | NOT FOUND | NOT FOUND | No |
| 19 | NESCAFÉ Dolce Gusto 5th Birthday (Peppermint) | brand 5th birthday | Awwwards listing (E) | NOT FOUND | NOT FOUND | No |
| 20 | Happy Birthday Jigoro Kano | birthday tribute (judo founder, b. 10 Dec 1860) | Awwwards listing (E) | NOT FOUND | NOT FOUND | No |
| 21 | Happy Birthday, Werner! (Virtual Identity) | birthday | Awwwards listing (E) | NOT FOUND | NOT FOUND | No |
| 22 | The Birthday Party Project (Tegan Digital) | charity that throws birthday parties for children experiencing homelessness | Awwwards Nominee (26 Aug 2021); Gold at DotComm, Daveys, Horizon Interactive (E) | 2021 | thebirthdaypartyproject.org | No |
| 23 | OSI 90th Anniversary | 90th anniversary | Awwwards anniversary search listing (E) | NOT FOUND | NOT FOUND | No |
| 24 | Hg 25th Anniversary | 25th anniversary | Awwwards anniversary search listing (E) | NOT FOUND | NOT FOUND | No |
| 25 | depart inc. 10th Anniversary | 10th anniversary | Awwwards anniversary search listing (E) | NOT FOUND | NOT FOUND | No |
| 26 | Nasdaq 50th anniversary | 50th: "timeline-based experience combining employee content, material from the Museum of American Finance, and news archives" | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 27 | KPP 10th Anniversary Special Website | 10th | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 28 | FENDI Baguette 25th Anniversary | 25th: "A Virtual Experience to celebrate 25 years of Italian design" | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 29 | Adobe Flash 10th Anniversary | 10th | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 30 | Bonhomme 10th anniversary | agency 10th | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 31 | 20th FWA | FWA's own anniversary: "One Digital Experiment in One Day" | FWA case (D) | 15 Apr 2015 | NOT FOUND | No |
| 32 | Dior 70 years | 70th: VR exhibition of 7 art directors × 4 haute-couture dresses, 3D-scanned with Digitage, on the "DiorEyes" headset. **Not a website.** | FWA case (D) | 2017 | n/a | No |
| 33 | World Baking Day | baking/cake campaign (celebration-adjacent) | FWA case (D) | NOT FOUND | NOT FOUND | No |
| 34 | Theremix (theremin 100th anniversary) | centenary | Awwwards SOTD + Dev Award; FWA; CSSDA; Webby nominee (B/C) | ~2020–21 | theremin.app | No (found late; see note) |

Sources for the table rows not covered by a deep card:
- **Awwwards anniversary search** (rows 13–18, 23–25): https://www.awwwards.com/inspiration_search/anniversary/, https://www.awwwards.com/sites/10-years-digital-present, https://www.awwwards.com/sites/develup-10-years-anniversary, https://www.awwwards.com/inspiration/technologies-develup-10-years-anniversary, https://www.awwwards.com/sites/10-years-of-impact, https://www.awwwards.com/inspiration/navigation-timeline-10-years-of-impact, https://www.awwwards.com/sites/cnj-10-years, https://www.awwwards.com/sites/walt-disney-concert-hall-10th-anniversary
- **Awwwards "birthday" search** (rows 17, 19–22): https://www.awwwards.com/websites/?text=birthday, https://www.awwwards.com/getresponse/, https://www.awwwards.com/sites/the-birthday-party-project, https://tegan.io/work/the-birthday-party-project/
- **FWA anniversary cases** (rows 26–33): https://thefwa.com/cases/nasdaq-50th-anniversary, https://thefwa.com/cases/kpp-10th-anniversary-special-website-p2, https://thefwa.com/cases/fendi-baguette-25th-anniversary, https://thefwa.com/cases/adobe-flash-10th-anniversary, https://thefwa.com/cases/bonhomme-10th-anniversary-p2, https://thefwa.com/cases/20th-fwa, https://thefwa.com/cases/dior-70-years, https://thefwa.com/cases/world-baking-day
- **Theremix** (row 34): from a portfolio file found through GitHub code search (https://github.com/Exusai/Portfolio/blob/e84dc87f92fd8d281d2083cb72138defb830705c/example.json): "celebrates the 100th anniversary of the theremin … Site of the Day and Dev Award from Awwwards, The FWA, CSS Design Awards … nominated for best music website at the Webby Awards". REPORTED (creator's own portfolio). Found too late for a deep card.
- **Possible extra lead:** the DEVELUP search also surfaced "Websites using Bon font" (https://www.awwwards.com/websites/Bon/). That suggests DEVELUP uses a font named "Bon". REPORTED, low confidence.

---

## 2. Deep reference cards

### 2.1 20 Years of Xbox Museum — https://museum.xbox.com/

- **Source pages:**
  - https://www.awwwards.com/sites/20-years-of-xbox-museum
  - https://www.awwwards.com/20-years-of-xbox-museum-by-active-theory-wins-site-of-the-month-december-2021.html
  - https://thefwa.com/cases/20-years-of-xbox-museum
  - https://www.webbyawards.com/crafted-with-code/20-years-of-xbox-museum/
  - https://www.cssdesignawards.com/woty2021/sites/20-years-of-xbox-museum
  - https://www.cssdesignawards.com/sites/20-years-of-xbox-museum/40236/
  - https://www.csswinner.com/details/20-years-of-xbox-museum/15898
  - https://lbbonline.com/news/explore-20-years-of-xbox-history-across-six-3d-environments-from-active-theory
  - https://activetheory.net/work/xbox-museum
  - https://aaronkim.co/Xbox-Museum
  - https://www.lukehall.media/project/xbox-20th-anniversary-museum
  - https://www.commarts.com/webpicks/20-years-of-xbox-museum
  - https://vimeo.com/649461338
  - GitHub: https://github.com/bizarro/bizar.ro/blob/061cfc632d32feac29d90de4e82164b717defe56/partials/case.pug (the lead developer's portfolio: live URL and technologies)
- **Recognition:**
  - Awwwards SOTD **7.93**: Design 7.85 · Usability 7.5 · Creativity 8.55 · Content 8.29. VERIFIED.
  - Awwwards **Site of the Month, December 2021**. VERIFIED x2.
  - FWA of the Day and FWA Site of the Month 2021. VERIFIED.
  - **Webby Winner, Entertainment (2022)**. VERIFIED.
  - CSSDA Website of the Day and Website of the Year 2021 nominee. VERIFIED.
  - Votes: NOT FOUND.
- **Concept:** "an immersive microverse featuring six custom 3D environments". Visitors "explore together with realtime avatars, learn about the history of Xbox and generate their own personal museum using Xbox account data". VERIFIED x2. The brief had two goals: "showcase the history of Xbox as a franchise through an honest, nostalgic lens" and "give users individual data stories to relive their Xbox journey". REPORTED (Awwwards SOTM article summary).
- **Experience sequence:** REPORTED (LBB Online summary).
  1. "Users are greeted with a nostalgic living room shot".
  2. They "dive into any generation of Xbox console".
  3. That transitions "into the 3D museum environment".
  4. Fans explore the museum "with their friends in real-time with each user represented by a customisable avatar".
  5. A generative personal museum is built from account data.

  The finale and the exact preloader are NOT FOUND.
- **Signature interactions:** real-time multiplayer avatars, a customisable avatar, and a personal data-driven museum. VERIFIED. Active Theory used the same data-story approach as its Spotify Wrapped work. REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** built on Active Theory's "Dreamwave" immersive events platform. REPORTED (LBB). The lead developer's portfolio lists "WebGL · GLSL · JavaScript". VERIFIED (bizar.ro case.pug). Easing and durations: NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** Dreamwave (Active Theory), WebGL, GLSL, JavaScript. REPORTED/VERIFIED as above.
- **Copy & microcopy:** NOT FOUND verbatim.
- **Credits:** Active Theory. Aaron Kim (research / UX / design). 3D: Mo E., Luke H., Thieb, Michael K. Development: Luis B. (Luis Bizarro, "Lead Developer" per bizar.ro). Strategist: Eddie Benson. REPORTED.

### 2.2 Sculpting Harmony (Getty × Resn) — https://gehry.getty.edu/

- **Source pages:**
  - Awwwards entry https://www.awwwards.com/sites/sculpting-harmony. I could not reach it directly; it is cited by the capture below.
  - GitHub capture of the live site's index.html, `entry.f152f914.js` and `entry.d6ab82be.css`, plus 14 screenshots, dated 2026-09-23: https://github.com/BurgiSimon/awards/blob/6f04b7fa6a11fdb8a06c0e154c11d4375f453a9b/plugins/awards/references/sites/gehry-getty.md
- **Recognition:**
  - Awwwards **SOTD, 17 Nov 2023, 7.89**: Design 7.97 · Usability 7.52 · Creativity 8.19 · Content 8.04.
  - **DEV AWARD 7.78**: Semantics/SEO 7.80 · Animations/Transitions 8.60 · Accessibility 7.60 · WPO 8.00 · Responsive Design 7.60 · Markup/Meta-data 7.00. REPORTED (code capture; the capturer read the Awwwards entry HTML).
  - Site of the Month, November 2023: REPORTED, medium confidence (the capturer only saw an article title).
- **Concept:** "a museum's online exhibition marking an anniversary. It tells the story of one building from the archive of the architect who designed it". The meta description reads "A new online exhibition from Getty". It is "an archive told in the architect's own voice, with one piece of music per chapter … The medium follows the same order: a line sketch, then a model, then film of the finished steel." REPORTED (code capture). Which anniversary number it marks is NOT FOUND in the sources.
- **Experience sequence:** REPORTED (code capture, "beat by beat").
  1. **Preloader.** On a flat orange ground (#ffa441), a loose ink line draws itself. A sponsor wordmark sits left and "INITIALIZING..." sits right. A pill invites a **click anywhere to enable sound**. Below it, a serif note explains that the story has narration and a score.
  2. **Intro.** A top-down view of a cardboard hall model on black, with a segmented progress bar, a pause control and "[EXPLORE THE MODEL]". The intro film is scroll-scrubbed (`intro-scrub.mp4` / `intro-scrub-mobile.mp4`).
  3. **Three numbered, titled chapters.** Each has a full-bleed film, a single oversized drop-cap letter in the black grotesque, an essay column, archival stills, grey mono captions, "[READ MORE]" expanders and a "model beat". The chapter title floods the screen in a chapter hue.
  4. **Close.** A scrubbed outro film, a per-chapter music-credits list, a photo-credits list, a stretched title, back-to-top and copyright.
- **Signature interactions:**
  - Click-anywhere sound opt-in.
  - Scroll-scrubbed films.
  - "Stretched titles": five `titleStretch` blocks that set chapter titles edge to edge at full viewport height.
  - An explorable 3D model with hotspots, orbit and a spring-damped camera.
  - Menu items that each carry a drawn line image (`menuNavItem__line`).
  - An accessible-version link (`aria-label="Click to open accessible version"`).

  All REPORTED (code capture).
- **Typography:** REPORTED (code capture, from `@font-face` and `font-family`).
  - **Reckless 200/400**: light editorial serif for text.
  - **Sharp Grotesk Black, widths 15 and 20**: compressed black grotesque, stretched across the full width for titles.
  - **Roboto Mono**: uppercase labels.
  - Fonts are self-hosted woff/woff2.
  - [bg] Reckless is from Displaay (commercial). Sharp Grotesk is from Sharp Type (commercial). Roboto Mono is on Google Fonts (free).
- **Color palette:** REPORTED (code capture, `entry.d6ab82be.css :root`).
  - `#ffa441` yellow-orange (`--getty-yellow`): preloader and close ground.
  - `#ff6359` red (`--getty-red`): chapter title flood.
  - `#4596ff` blue (`--getty-blue`): chapter II flood.
  - `#16a147` green (`--getty-green`).
  - `#000` ink and `#fff` caption ground.
  - Strategy: "four flat institutional hues flood entire chapters, alternating with black and white grounds".
- **Motion:** REPORTED (code capture).
  - **GSAP 3.12.1** with ScrollTrigger, SplitText and Observer. ScrollTrigger is created through one composable whose `scrub` defaults to `true`.
  - **Lenis 1.0.19** smooth scroll. Its lerp and duration were not read: NOT FOUND.
  - **Three.js r153** with glTF loader and orbit.
  - The rest of the page is video and DOM (11 `<video>` elements).
  - Easing curves: NOT FOUND.
- **Sound/music:** "Music performed by and courtesy of the LA Phil, with narration by the architect". Played through **Howler**. REPORTED (code capture).
- **Tech stack:** Nuxt 3.6.5 on Vue 3.3.4, Storyblok CMS, GSAP 3.12.1, Lenis 1.0.19, Three.js r153, Howler, Nuxt Image (WebP), CloudFront. REPORTED (code capture).
- **Copy & microcopy:** "INITIALIZING...", "[EXPLORE THE MODEL]", "[READ MORE]", "A new online exhibition from Getty" (meta description), "Click to open accessible version" (aria-label). REPORTED (code capture).

### 2.3 Slosh Seltzer (Active Theory, published as Buttermax) — the "party" reference

- **Source pages:**
  - Awwwards entry, cited by the captures below.
  - https://github.com/BurgiSimon/awards/blob/6f04b7fa6a11fdb8a06c0e154c11d4375f453a9b/plugins/awards/references/sites/slosh-seltzer.md (Awwwards entry read 2026-09-18, plus `index.html`, `app.js` and `style.css`)
  - https://github.com/owenisas/awwwards-web-design/blob/454614764cab3dac18e6165a5eb3ef067659c2cd/skills/awwwards-web-design/data/teardowns/slosh-seltzer.json (screen-by-screen measurements)
  - Live URL: NOT FOUND.
- **Recognition:** Awwwards **SOTD, 5 Jun 2024, 7.69**: Design 7.60 · Usability 7.34 · Creativity 8.30 · Content 7.87. **DEV score 7.45**: Semantics/SEO 6.80 · Animations/Transitions 8.60 · Accessibility 6.80 · WPO 7.60 · Responsive 7.60 · Markup 7.20. No SOTM. REPORTED (code capture of the entry). A CSSDA WOTY-2024 nomination is unproven.
- **Concept:** "Buttermax's newest brainchild Slosh Seltzer, an in-house maximalist design exploration" (og:description). It is a fake hard-seltzer brand. "The product's physics is the navigation: a real-time PBR can pops its ring-pull, tips, and pours pink seltzer that floods the viewport as the section transition, while a mouse-driven Navier-Stokes fluid sim sloshes every piece of WebGL-rendered type like liquid." REPORTED (code capture).
- **Experience sequence:**
  1. **Preloader.** A flat `#FFC1FF` pink field. A ~200px **ring of condensed green type "PREPARING YOUR GOOD TIMES"**, with a 4-point star spacer, rotates around a **"100%" counter** (steelfish-eb 38px, #00A165, letter-spacing 2px) set dead center. A 12px mono top bar reads "THE LIFE OF THE PARTY IN SELTZER FORM", with green sparkle glyphs at both edges. A 4-bar audio toggle sits top-right.
  2. **Age gate.** "SLOSH" logotype at 40px, top-center. A two-line centered headline, **"THIS IS THE / BIG KIDS TABLE"**, at 207px in #FF0837; the visual line pitch is about 0.94. A 16px mono subline. A solid red **pill CTA "I'M READY TO PARTY"** (~324×77px, radius 45px). An 11px mono disclaimer. Five hand-drawn red stickers sit asymmetrically near the edges (three lightning bolts, a starburst asterisk and a tongue-out smiley).
  3. **After the gate.** A drag carousel of drinks. Then, inferred by the teardown author: a beer-pong mini game and a **"cheers/confetti finale"**. The finale is REPORTED as an inference only.
- **Signature interactions:**
  - Ring-pull/pour can physics used as the page transition.
  - A mouse-driven fluid sim on the type.
  - A drag carousel.
  - An audio toggle.
  - The flavour switcher swaps the whole colourfield.

  All REPORTED (code capture).
- **Typography:** REPORTED (code capture).
  - **steelfish-eb** (condensed display) at 85 in GL layout units.
  - **FKGroteskMono Regular / Medium** for the subtitle, at 17.
  - `lineHeight: 1`, `letterSpacing: -.03`.
  - Steelfish also ships as an MSDF atlas for type drawn in WebGL.
  - [bg] Steelfish is from Typodermic (Ray Larabie). FK Grotesk Mono is from Florian Karsten (commercial).
- **Color palette:** `#FFC1FF` pink · `#00A165` green · `#FF0837` red · `#0069D8` blue · `#FF5F00` orange · `#FFC800` yellow. Awwwards lists only `#ffc1ff`. Strategy: "flavour-swap colourfield — saturated, unmodulated hues, one on screen at a time". REPORTED (code capture).
- **Motion:** Active Theory's **Hydra** framework, the **Theatre.js** sequencer and **Oimo.js** rigid-body physics on a virtual scroll ("no document scroll exists"). Explicitly **no GSAP and no Lenis**. REPORTED (code capture).
- **Sound/music:** a 4-bar audio toggle in the top-right of the preloader. Tracks: NOT FOUND.
- **Tech stack:** Hydra, Theatre.js, Oimo.js, Firebase, Draco and KTX2/Basis, Firebase Hosting behind Fastly. REPORTED (code capture).
- **Copy & microcopy:** "PREPARING YOUR GOOD TIMES" · "100%" · "THE LIFE OF THE PARTY IN SELTZER FORM" · "THIS IS THE / BIG KIDS TABLE" · "I'M READY TO PARTY". REPORTED (code capture, verbatim).

### 2.4 Blind Barber 10—Year — live URL NOT FOUND

- **Source pages:** https://www.awwwards.com/sites/blind-barber-10-year, https://www.csswinner.com/details/blind-barber-10year/14834
- **Recognition:** Awwwards **SOTD 7.56**: Design 7.74 · Usability 7.52 · Creativity 7.25 · Content 7.61. **DEV AWARD 7.1**: WPO 7.50 · Responsive 7.25 · Semantics/SEO 6.75 · Markup 7.00 · Animations/Transitions 7.50 · Accessibility 6.25. Also listed on CSS Winner. VERIFIED. Date: NOT FOUND.
- **Concept:** "Anniversary microsite highlighting the last decade by digitally experiencing love, openings, celebrations and everything in between." VERIFIED.
- **Experience sequence:** NOT FOUND.
- **Signature interactions:** NOT FOUND.
- **Typography:** NOT FOUND.
- **Color palette:** `#000`, `#9C9C9C`, `#ffffff`. VERIFIED.
- **Motion:** NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** NOT FOUND.
- **Copy & microcopy:** title "Blind Barber 10—Year" (the em dash is part of the name). VERIFIED.

### 2.5 Five Years of -99 — https://fiveyears.minus99.com/

- **Source pages:**
  - https://www.awwwards.com/sites/five-years-of-99
  - https://www.awwwards.com/inspiration/webgl-fullscreen-horizontal-scroll-navigation-five-years-of-99
  - https://www.awwwards.com/99-design-studio.html (Awwwards case study)
  - https://www.minus99.com/projects/five-years-of-99/
  - https://orpetron.com/sites/five-years-of-99
  - https://thefwa.com/cases/five-years-of-99
  - GitHub mention of the live URL: https://github.com/gatewaynode/flashbrain/blob/bf90a2a886f7fec649dbd6632d594d074f167c9b/USER-STORIES.md
- **Recognition:** Awwwards **SOTD, 20 Dec 2020, 7.46**: Design 7.7 · Usability 6.91 · Creativity 7.85 · Content 7.35. VERIFIED x2. An FWA case exists; its award level is NOT FOUND.
- **Concept:** "An experimental website celebrating five years of -99 design studio by shedding light on some of the achievements and highlights of the studio." VERIFIED x2.
- **Experience sequence:** "a structure made up of six levels stacked on each other to form a tower. The experience begins with a small blob emerging from the light and traveling upwards within the tower, with the user following the blob along the six levels looking around and interacting with the information displayed on the screen." VERIFIED x2 (Awwwards case study). The preloader and finale are NOT FOUND.
- **Signature interactions:** "simple scroll-based navigation". The page is tagged with the Awwwards inspiration element "WebGL fullscreen horizontal scroll navigation". Also tagged "unusual navigation". VERIFIED.
- **Typography:** one search summary named "**Terminal 27**" and "**BSMNT Foundry**". These may be foundry tags rather than family names. REPORTED (low, 1 query). Family names: NOT FOUND.
- **Color palette:** `#000`, `#ffffff`, `#ECD06F` (golden yellow). VERIFIED.
- **Motion:** WebGL, **GSAP**, **Three.js**. VERIFIED. Easing: NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** WebGL, GSAP Animation, Three.js. VERIFIED.
- **Copy & microcopy:** NOT FOUND.

### 2.6 Zero Studios Birthday Site ("Zero Turns Two") — https://two.zero.nyc/

- **Source pages:**
  - https://www.awwwards.com/sites/zero-studios-birthday-site
  - https://www.cssdesignawards.com/sites/zero-studios-birthday-site/34664
  - https://two.zero.nyc/ (search summary)
  - https://two.zero.nyc/offices/
  - https://www.pinterest.com/pin/69805862960262401/
  - GitHub: https://github.com/robin-dela/hover-effect/blob/1938cbff22a0379c5c5f17355550961374e7754c/readme.md
  - GitHub: https://github.com/RefletDigital/highway/blob/b6d045ae4fabdfeeb9658da044c2c60f63d27afb/docs/demos.html
- **Recognition:**
  - Awwwards **SOTD, 8 Mar 2019, 7.42**: Design 7.55 · Usability 7.16 · Creativity 7.67 · Content 7.19. VERIFIED x2.
  - **CSSDA Website of the Day, 26 Feb 2019**: UI 8.23 · UX 8.05 · Innovation 8.17. Judges: Gleb Kuznetsov 9.2, Nana Zhvania 9.17, Daniele Brusca 9, Matteo Baratin 9, Diego Tramontin 8.87, Sergey Dubovenko 8.83. VERIFIED.
- **Concept:** "Zero Studios' digital birthday party" (Awwwards and CSSDA). It "celebrates two years of Zero, a creative studio in New York and Milwaukee", founded 2017. VERIFIED.
  - One summary also gave the line "a digital party built to feel live, playful, and shareable from the first tap". It appeared only once and reads like generated text: unconfirmed, do not quote.
- **Experience sequence:** NOT FOUND. A secondary page `/offices/` exists.
- **Signature interactions:**
  - CSSDA tags: **infinite scroll, parallax, storytelling, gestures/interaction, microinteractions**. VERIFIED.
  - The site is listed in the README of `hover-effect`, a Three.js + GSAP WebGL image-displacement hover library. This suggests a displacement hover between images. REPORTED (low–medium; the header of that README section was not visible).
- **Typography:** NOT FOUND.
- **Color palette:** `#000`, `#D14836` (red), `#ffffff`. VERIFIED x2.
- **Motion:**
  - **GSAP**, **Three.js**. VERIFIED (CSSDA).
  - The site is listed on the Highway page-transition library's demos page (with the image `zero-is-two.jpg`), so it likely used **Highway.js** for page transitions. REPORTED.
  - Easing: NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** WordPress, HTML5, CSS, GSAP, Three.js (VERIFIED, CSSDA). Highway.js REPORTED.
- **Copy & microcopy:** page title **"Zero Turns Two"**. VERIFIED.

### 2.7 Ten Years Away (Studio375) — https://ten.375.studio/en

- **Source pages:**
  - https://www.awwwards.com/sites/ten-years-away
  - https://www.awwwards.com/Studio375/
  - https://www.cssdesignawards.com/sites/ten-years-away/49441
  - https://tympanus.net/codrops/2026/07/08/ten-years-away-designing-an-interactive-comic-for-studio375s-tenth-anniversary/, read through its verbatim mirror: https://github.com/uto-usui/magazine/blob/a93c521a19b7c968c4983e911f68762d1cb2fb7d/articles/2026-07-09/ten-years-away-designing-an-interactive-comic-for-studio375s-tenth-anniversary.md
  - https://daily.dev/posts/ten-years-away-designing-an-interactive-comic-for-studio375-s-tenth-anniversary-v8jbuypwe
  - https://me.muz.li/danny/ten-years-away
  - https://ten.375.studio/en (search summary title)
  - Awwwards data scrape: https://github.com/Gitbub0816/nspyr/blob/e0c2087512f845065d22944095f2cbd60cb0f377/sources/sites.raw.json and .../sources/sites.json
  - Third-party notes from the live site:
    - https://github.com/SakethKanchi/SakethKanchi/blob/060b634c1a6f5852e129484e269e552eee8e2366/inspiration/more-inspiration.md
    - https://github.com/Builder106/jesus-house/blob/8deca9dbb25ce58686d7eb73249c89b190379843/design-research/FINDINGS.md
    - https://github.com/KooshaPari/KooshaPari/blob/8c1d80cd736d6e2d1513aa1a841fffab0b6829fd/docs/sessions/20260919-site-overhaul/references/motion/REFERENCES.md
    - https://github.com/PavanCodesNY/UI_News/blob/b0351650c9b6b51a536e87306b2ecaa5e79ff4af/ui-scout-2026-06-27.md
- **Recognition:**
  - Awwwards **SOTD, 26 Jun 2026, 7.32**: Design 7.14 · Usability 7.19 · Creativity 7.77 · Content 7.55. VERIFIED x2. (One third-party note dates it 2026-06-27.)
  - **Developer Award 7.11**. VERIFIED.
  - CSSDA listing, level NOT FOUND.
  - Codrops case study (8 Jul 2026, by Daniel Bassan). Muzli feature.
- **Concept:** "an interactive comic that chronicles ten years of Studio375. Real characters. Real stories." The site title is "A graphic novel, of a true story". "Ten chapters, one per year, illustrated by Davide Grazi … The tone is funny and a little hyperbolic." A printed version was "designed, laid out, and actually printed on paper" before any WebGL. VERIFIED (Codrops verbatim).
- **Experience sequence:**
  1. A big intro screen offering "**enter with sound / enter without sound**". REPORTED (third-party note from the live site).
  2. A "**Narrative loader** (a counter that's part of the story)". REPORTED (third-party note).
  3. "The site is a scroll-driven horizontal comic. As you scroll, the camera drifts through the panels of each chapter, following your progress through the year." Captions and chapter titles sit in a DOM layer above the canvas. VERIFIED (Codrops).
  4. **Book navigation:** "a 3D flipbook, rendered entirely in Three.js … Drag left, and the page turns forward; drag right, and it turns back … Page turns are accompanied by sound. The book slides in from off-screen on entry, rotates into place, and exits the same way when you navigate to a different year." VERIFIED (Codrops).
  5. Moving between years is a page transition. Next-chapter textures preload during it. VERIFIED.
  6. A "**bookend timeline framing**". REPORTED (third-party note).
- **Signature interactions:** VERIFIED (Codrops).
  - **Halftone mouse trail:** "a two-pass WebGL effect: the first pass accumulates the movement into a render texture that slowly fades, and the second converts it into a halftone dot pattern". It references the benday dot. The dots "shrink quietly when you hover over something clickable".
  - **Scroll-velocity background:** "a GLSL shader plane that responds to scroll velocity … fBm noise … At rest … loose clusters, like smoke. Scroll faster, and they stretch into thin, directional, elongated streaks".
  - **Drag-to-flip flipbook.**
- **Typography:** NOT FOUND. Awwwards tags the site "Web Fonts" only (VERIFIED, scrape).
- **Color palette:** `#0d1429` (deep navy), `#cce8eb` (pale cyan). VERIFIED x2 (Awwwards summary and the Awwwards scrape).
- **Motion:** VERIFIED (Codrops).
  - **React Three Fiber** / Three.js with a fixed WebGL canvas.
  - **Lenis** "handles the smooth scroll, feeding real-time position data into the scene".
  - **GSAP** "drives the animations" and the DOM text layer, plus the flip animations.
  - `@use-gesture/react` for drag.
  - Frame positions and camera targets are hard-coded per year.
  - Easing and durations: NOT FOUND.
- **Sound/music:** VERIFIED (Codrops).
  - **Howler.js**. "Each year has its own audio track, chosen to match the mood of that chapter's narrative … Tracks crossfade as you move between years. On desktop, scroll velocity nudges the playback rate slightly: scroll faster, and the music accelerates with you."
  - Audio is skipped on saveData, 2G or 3G connections (Network Information API).
  - Page-turn sounds.
- **Tech stack:** R3F, Three.js, drei `useKTX2` (KTX2 textures), GSAP, Lenis, Howler.js, `@use-gesture/react`, and a headless WordPress backend with a custom post type per year. Performance: DPR capped at **1.5**, AdaptiveDpr, one shared PlaneGeometry, stencil buffer and shadow maps disabled. VERIFIED (Codrops).
- **Copy & microcopy:**
  - "A graphic novel, of a true story" (title, VERIFIED)
  - "Real characters. Real stories." (description, REPORTED)
  - "enter with sound" / "enter without sound" (REPORTED)
  - "a true story, ours" (REPORTED)
- **Awwwards tags:** "Art & Illustration", "Animation", "Scrolling", "Clean", "Web Fonts". VERIFIED (scrape).

### 2.8 20 Years Inspired by People (/nk.studio) — https://inspiring.nk.studio/ (Spanish: /es)

- **Source pages:**
  - https://www.awwwards.com/sites/20-years-inspired-by-people
  - https://www.awwwards.com/inspiration_search/anniversary/
  - CSS capture (desktop 1440×900, mobile 390×844): https://github.com/brunodesouzabfr-hash/FRANCOROMEU-APP/blob/d59b36d489262b22d76d4ba550a13ee8e5d8113f/docs/fr-etapa16/references/inspiring-side-scroll/evidence.md
  - Analysis notes from the same repo: https://github.com/brunodesouzabfr-hash/FRANCOROMEU-APP/blob/d59b36d489262b22d76d4ba550a13ee8e5d8113f/docs/fr-etapa16/references/inspiring-side-scroll/analysis-brief.md and .../docs/fr-etapa16/REFERENCE-MAP.md
  - Cursor reverse-engineered from the site's code: https://github.com/naseemx/desirephaseone/blob/217ab952bfb80f83a52cf6dd7be26cc83da4e1b7/src/components/ui/custom-cursor.tsx
  - Developer Award note: https://github.com/owenisas/awwwards-web-design/blob/454614764cab3dac18e6165a5eb3ef067659c2cd/skills/awwwards-web-design/data/research/usability-a11y-perf.md
- **Recognition:**
  - Awwwards **SOTD**. VERIFIED.
  - Date 7 Aug 2026. REPORTED (1 summary).
  - **Developer Award**: "one with the award (`20-years-inspired-by-people`) has it". REPORTED (cached-HTML note).
  - Score: NOT FOUND.
- **Concept:** "An archive of stories, people and moments that inspired /nk.studio throughout 20 years. Before inspiring, we were inspired." VERIFIED. Awwwards collections: Storytelling Websites, WebGL Inspiration, Web Technology. VERIFIED.
- **Experience sequence:** REPORTED (third-party analysis, translated from Portuguese).
  - An entry screen, then "a deliberate transition into an explorable archive".
  - "Lateral/horizontal navigation" with "a gravitational feel", "a counter", "gesture orientation" and "focus on one item at a time".
  - Elsewhere: "side-scrolling gravitational", "cards along a path", "futuristic feel".
  - Finale: NOT FOUND.
- **Signature interactions:** a custom canvas cursor whose canvas buffer is synced to devicePixelRatio and window size. REPORTED (reverse-engineered from the site's module 19033). Horizontal side-scroll rail with cards. REPORTED.
- **Typography:** REPORTED (CSS capture: computed-style counts).
  - `"Instrument Serif", "Instrument Serif Fallback", Arial, Helvetica, sans-serif`: **696 computed occurrences**.
  - `"DM Sans", "DM Sans Fallback"`: **224 computed occurrences**.
  - So a serif-led pairing: Instrument Serif dominant, DM Sans secondary.
  - [bg] Both are free on Google Fonts.
- **Color palette:** `#20E5B5` (bright turquoise), `#142929` (dark teal). VERIFIED. The third-party brief also notes "neon colours".
- **Motion:** WebGL (Awwwards collection). Particles and canvas. REPORTED. Libraries: NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** WebGL. Other: NOT FOUND.
- **Copy & microcopy:**
  - "Before inspiring, we were inspired." VERIFIED.
  - Spanish page title: "20 Años Inspirados por Personas /nk.studio". REPORTED (capture).

### 2.9 Happy Birthday ELLE — live URL NOT FOUND

- **Source pages:** https://www.awwwards.com/sites/happy-birthday-elle, https://thefwa.com/cases/happy-birthday-elle
- **Recognition:**
  - Awwwards **Honorable Mention**. VERIFIED x2. The page summary also says "15 votes out of 64"; what the numbers mean is unclear. REPORTED.
  - **FWA of the Day, 5 Feb 2016**. REPORTED (1 summary).
  - FWA credits: "anonymous" and **La Chose**. VERIFIED. Awwwards submitter: **Berenice Roussel**. VERIFIED x2.
- **Concept:** "For the 70th birthday of ELLE magazine, an interactive WebGL experience … allows users to **blow candles with their computer's microphone** or by **using the gyro of their smartphone**." VERIFIED x3 (Awwwards and FWA).
- **Experience sequence:** NOT FOUND beyond the candle-blowing mechanic.
- **Signature interactions:** blowing out the candles through the microphone (desktop) or the gyroscope (mobile). VERIFIED.
- **Typography:** NOT FOUND.
- **Color palette:** `#FF9398` (pink). VERIFIED x2.
- **Motion:** WebGL. VERIFIED. Libraries: NOT FOUND.
- **Sound/music:** microphone *input* is the core interaction. Audio output: NOT FOUND.
- **Tech stack:** WebGL plus microphone input plus device gyroscope. VERIFIED. Specific libraries: NOT FOUND.
- **Copy & microcopy:** title "Happy Birthday ELLE": no comma, brand name in caps. VERIFIED.

### 2.10 Fifty Years of The Martin Agency — https://fifty.martinagency.com/

- **Source pages:**
  - https://thefwa.com/cases/fifty-years-of-the-martin-agency
  - https://www.martinagency.com/news/news/fwa-site-of-the-day
  - https://www.martinagency.com/news/news/fifty-years-of-martin
  - https://adage.com/creativity/work/50th-anniversary-website/45051
  - https://richmondbizsense.com/2015/07/05/creative-qa-50-years-of-the-martin-agency/
  - GitHub inspiration post (title "Martin Agency – 50 ans", dated 2016-01-19, UI components "timeline" and "modal box"): https://github.com/MagazineduWebdesign/MagazineduWebdesign.github.io/blob/bc8de4d8d166fe03782e1bc1f42a3220f8ff28f6/src/inspirations/inspirations-ui-sites-web/inspirations-sites-web-themes-conseil/_posts/2016-01-19-fifty-years-martinagency-1.md
- **Recognition:** **FWA Site of the Day, 10 Feb 2016**. VERIFIED (FWA and the agency's news page).
- **Concept:** "An experiential timeline that celebrates The Martin Agency's 50th Anniversary and highlights pivotal moments throughout the agency's history using **canvas & physics**." The design idea: "a thread runs through everything the agency has done". VERIFIED (FWA) / REPORTED (Ad Age).
- **Experience sequence:** "a responsive timeline that expands when you click on a key period". Four periods: **Declaring Independence 1965–1977 · Growing Reputation 1978–1985 · National Splash 1986–2008 · Global Expansion 2009–2015**. A modal box is listed among the UI elements. REPORTED (Ad Age; Magazine du Webdesign).
- **Signature interactions:** a physics-driven thread in canvas; click-to-expand periods. REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** canvas and physics. VERIFIED. Library: NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** HTML canvas with physics. VERIFIED.
- **Copy & microcopy:** the four period names above (REPORTED, verbatim from Ad Age's summary). Title "Fifty Years of The Martin Agency" (spelled-out number). VERIFIED.

### 2.11 150 Years of the Bijenkorf (DEPT®) — live URL NOT FOUND

- **Source pages:**
  - https://www.awwwards.com/sites/150-years-of-the-bijenkorf
  - https://www.awwwards.com/sites/150-years-of-the-bijenkorf/mobile-excellence-report
  - https://thefwa.com/cases/150-years-of-the-bijenkorf
  - https://www.commarts.com/webpicks/150-jaar-de-bijenkorf
  - https://www.deptagency.com/case/back-in-time-with-bijenkorf/
  - https://www.linkedin.com/posts/matt-van-voorst-b73b542b_awwwards-fwa-cssdesign-activity-6879342793496571904-zY5c
- **Recognition:**
  - FWA case. VERIFIED.
  - Commarts Webpick. VERIFIED.
  - Awwwards: the page title says "Nominee", but one summary says "Honor Mention". **Conflict, unresolved.**
  - A LinkedIn post tags #awwwards #fwa #cssdesign.
- **Concept:** "To celebrate Bijenkorf's 150 anniversary … presents the various decades through **illustrations, motion and sound clips**." The store turned 150 in 2020. Built "for a month". VERIFIED (FWA) / REPORTED.
- **Experience sequence:** "The timeline is divided into sections (periods) where you can scroll through. Each period has unique content: videos, radio clips, text." REPORTED (DEPT case).
- **Signature interactions:** a scroll-through decade timeline with radio and sound clips. REPORTED.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** illustrations by **Timo Kuilder** (Amsterdam). They were made in After Effects, exported with **Bodymovin** and rendered with **Lottie** (JSON). REPORTED (DEPT case).
- **Sound/music:** sound clips and radio clips per period. VERIFIED (FWA) / REPORTED.
- **Tech stack:** Lottie / Bodymovin. Other: NOT FOUND.
- **Copy & microcopy:** NOT FOUND.

### 2.12 Happy Birthday Game Boy (Petr Tichy / ihatetomatoes) — live URL NOT FOUND

- **Source pages:**
  - https://www.awwwards.com/sites/happy-birthday-game-boy
  - https://www.cssdesignawards.com/sites/happy-birthday-gameboy/24605
  - https://ihatetomatoes.net/happy-25th-birthday-game-boy/
  - https://www.awwwards.com/websites/single-page/?page=113
  - GitHub (the author's own GreenSock Workshop files reference the project card): https://github.com/mthines/gsap/blob/74e1577e0c32b7de9780fc6bcebc5b985dfb6ac3/GreenSock%20Workshop/01-HTML-CSS/end/index.html
- **Recognition:**
  - Awwwards: the page title says "Nominee", but one summary says "Honorable Mention". **Conflict.**
  - Featured in the Awwwards single-page and parallax collections. VERIFIED.
  - CSSDA listing. VERIFIED.
- **Concept:** a tribute for the **Game Boy's 25th anniversary**, described as "the ultimate Game Boy Tetris experience for scrolling enthusiasts". VERIFIED.
- **Experience sequence:** a scroll-driven Tetris animation. Detailed beats: NOT FOUND.
- **Signature interactions:** scroll-scrubbed parallax and a Tetris sequence. VERIFIED.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** **Superscrollorama.js**. VERIFIED. [bg] Superscrollorama is a jQuery scroll plugin built on GSAP TweenMax.
- **Sound/music:** NOT FOUND.
- **Tech stack:** jQuery and Superscrollorama. VERIFIED (Superscrollorama) / [bg] (jQuery).
- **Copy & microcopy:** "Happy 25th Birthday Game Boy" (image alt text in the author's project card). VERIFIED.

---

## 3. Cross-reference patterns

Counts use the 12 deep references unless marked "ALL" (all 34). The denominator is "of N where the data exists". Letters: **X** Xbox Museum, **G** Getty Sculpting Harmony, **S** Slosh Seltzer, **B** Blind Barber 10—Year, **N** Five Years of -99, **Z** Zero Turns Two, **T** Ten Years Away, **K** nk.studio 20 Years, **E** Happy Birthday ELLE, **M** Martin Agency 50, **J** Bijenkorf 150, **Y** Happy Birthday Game Boy.

### Concept and structure
| Pattern | Count | Supporting |
|---|---|---|
| Story told in chapters, eras or levels, one unit per period | **7 of 12** | G (3 chapters), T (10 chapters, one per year), M (4 periods), J (decades), N (6 levels), X (console generations / 6 environments), K (20-year archive) |
| Years or date ranges used as navigation or labels | 4 of 12 | T (years), M ("1965–1977" etc.), J (decades), X (generations). Plus ALL: "10 Years of Impact" uses an Awwwards "Navigation Timeline" |
| A celebration ritual as the core interaction | 3 of 12 | E (blow out candles via mic/gyro), S (ring-pull/pour + "I'M READY TO PARTY"), Y (play Tetris by scrolling) |
| Blowing out candles specifically | 1 of 12 (and 1 of 34) | E only |
| Personal or data-driven content for the visitor | 1 of 12 | X |
| Real-time multiplayer presence | 1 of 12 | X |
| People-centred storytelling (real people as the content) | 3 of 12 | T ("Real characters. Real stories."), K ("stories, people and moments"), X (the visitor's own history) |
| Commissioned illustration as the identity | 3 of 12 | T (Davide Grazi), J (Timo Kuilder), S (hand-drawn stickers) |
| A physical companion artefact | 1 of 12 | T (printed comic) |
| Agency self-celebration vs brand anniversary | 5 agency vs 7 brand/institution | Agency: Z, N, T, K, M. Brand: X, G, S, B, E, J, Y. ALL adds agency HMs: Digital Present, DEVELUP, CNJ, Bonhomme |

### Entry, preloader, sound gate
| Pattern | Count | Supporting |
|---|---|---|
| Branded or narrative preloader (not a plain spinner) | 3 of 4 with data | G (ink line draws itself + "INITIALIZING..."), S (rotating type ring + "100%"), T (narrative counter loader, REPORTED) |
| Preloader with a numeric counter / percentage | 2 of 4 with data | S ("100%" counter), T (counter, REPORTED). A third-party reflex list (BurgiSimon reflex-lists.md) flags "a scripted 'loading' percentage" as an effect to avoid unless the concept earns it |
| Entry gate before the experience (CTA or sound choice) | 3 of 12 | G ("click anywhere to enable sound"), T ("enter with sound / enter without sound"), S (age gate "I'M READY TO PARTY") |
| Sound is opt-in, never autoplay | 3 of 3 with data | G, T, S (toggle) |

### Sound
| Pattern | Count | Supporting |
|---|---|---|
| Designed audio layer (music, narration or clips) | 4 of 12 | G (LA Phil score + narration), T (a track per year with crossfade), J (radio/sound clips), S (audio toggle) |
| Audio input as interaction | 1 of 12 | E (microphone) |
| Howler.js | 2 of 2 where the audio library is known | G, T |
| Music reacts to scroll speed | 1 | T |
| Per-chapter music tracks | 2 | G ("one piece of music per chapter"), T ("Each year has its own audio track") |
| Audio skipped on slow networks | 1 | T |

### Motion and technology
| Pattern | Count | Supporting |
|---|---|---|
| WebGL / Three.js as the core visual | **8 of 11** with data | X, G, S, N, Z, T, K, E (not M: canvas 2D physics; not J: Lottie; not Y: Superscrollorama) |
| Three.js specifically | 4 | G (r153), N, Z, T (via R3F). S uses Active Theory's own renderer, with Three.js only optional |
| GSAP | **4 of 6** where the animation library is known (5 if Superscrollorama-on-TweenMax counts [bg]) | G (3.12.1 + ScrollTrigger + SplitText), N, Z, T. S explicitly does not use GSAP (Hydra + Theatre.js). Y uses Superscrollorama |
| Lenis smooth scroll | 2 | G (1.0.19), T. Both are the newest entries (2023 and 2026). S explicitly uses no Lenis |
| Scroll-scrubbed media or camera | 5 of 12 | G (scrubbed intro/outro films), T (camera drifts with scroll), N (scroll follows the blob up the tower), Y (scroll-driven Tetris), Z (infinite scroll/parallax) |
| Horizontal scrolling | 3 of 12 | T (horizontal comic), N ("WebGL fullscreen horizontal scroll navigation"), K (side-scroll rail) |
| A custom cursor or cursor-driven shader | 4 of 12 | T (halftone trail that shrinks over clickables), K (custom canvas cursor), S (mouse-driven fluid sim), Z (WebGL displacement hover, REPORTED) |
| Shader noise or fluid background reacting to input | 2 | T (fBm noise stretching with scroll velocity), S (Navier-Stokes fluid) |
| Physics | 2 | M (canvas physics), S (Oimo.js) |
| Drag gestures | 2 | T (flipbook drag via @use-gesture), S (drag carousel) |
| Device sensors (gyro or mic) | 1 | E |
| Lottie | 1 | J |
| Page-transition library | 1 (REPORTED) | Z (Highway.js) |
| Next-chapter preloading during transitions; DPR capped at 1.5 | 1 | T |

### Color
| Pattern | Count | Supporting |
|---|---|---|
| Awwwards-declared palette of only 1–3 colours | **7 of 7** with Awwwards palette data | T (2), K (2), B (3), N (3), Z (3), E (1 listed), S (1 listed) |
| Dark base (black or near-black navy/teal) | **5 of 8** with palette data (G, S, B, N, Z, T, K, E) (6 if G's alternating black chapters count) | B (#000), N (#000), Z (#000), T (#0d1429), K (#142929); G alternates black and white grounds |
| `#000` listed in the palette | 4 of 8 | B, N, Z, G |
| One saturated accent on a dark/white base | 4 | Z (#D14836 red), N (#ECD06F gold), K (#20E5B5 turquoise), T (#cce8eb pale cyan) |
| Pink as the celebration hue | 2 of 8 | E (#FF9398), S (#FFC1FF) |
| Several flat saturated hues, each flooding a whole section | 2 | G (4 chapter hues: #ffa441, #ff6359, #4596ff, #16a147), S (6 flavour hues, "one on screen at a time") |
| Warm yellow-orange or gold used | 3 | G (#ffa441 preloader/close), N (#ECD06F), S (#FFC800) |
| Red accent | 3 | Z (#D14836), G (#ff6359), S (#FF0837) |
| Grey as a third tone | 1 | B (#9C9C9C) |

### Typography (only 3 of 12 have verified families, so these counts are thin)
| Pattern | Count | Supporting |
|---|---|---|
| Serif plus sans/grotesk pairing | **2 of 3** | G (Reckless serif text + Sharp Grotesk Black titles), K (Instrument Serif dominant + DM Sans) |
| Serif is the dominant or text face | 2 of 3 | G (Reckless for essays), K (Instrument Serif: 696 vs 224 occurrences) |
| Condensed or compressed display face for titles | 2 of 3 | G (Sharp Grotesk Black, compressed widths 15/20, stretched full width), S (Steelfish condensed) |
| Monospace for labels or UI | 2 of 3 | G (Roboto Mono uppercase labels), S (FK Grotesk Mono for all small copy) |
| All-caps display or labels | 2 of 3 | S ("THIS IS THE / BIG KIDS TABLE", "I'M READY TO PARTY"), G (uppercase mono labels; "INITIALIZING...", "[EXPLORE THE MODEL]") |
| Oversized, viewport-filling titles | 2 of 3 | G (stretched titles at full viewport height; giant drop cap), S (207px headline at 1440, line pitch ~0.94) |
| Free Google Fonts | 2 sites | K (Instrument Serif, DM Sans), G (Roboto Mono only) |
| Self-hosted commercial fonts | 2 sites | G (Reckless, Sharp Grotesk), S (Steelfish, FK Grotesk Mono) |

### Copy and naming (ALL 34)
| Pattern | Count | Supporting |
|---|---|---|
| "Happy Birthday + Name" title formula | **4** | Happy Birthday ELLE (HM + FWA), Happy Birthday Game Boy (HM/Nominee + CSSDA), Happy Birthday Jigoro Kano, Happy Birthday, Werner! |
| …of which no comma between "Birthday" and the name | 3 of 4 | ELLE, Game Boy, Jigoro Kano. Only "Happy Birthday, Werner!" uses a comma (with "!") |
| "<N> Years of <X>" | 5 | 20 Years of Xbox Museum, Five years of -99, Fifty Years of The Martin Agency, 150 years of the Bijenkorf, 10 Years of Impact |
| "<X> <N>th Anniversary / Birthday" | 12 | GetResponse 15th Birthday, NESCAFÉ Dolce Gusto 5th Birthday, WDCH 10th Anniversary, DEVELUP 10 Years Anniversary, OSI 90th, Hg 25th, depart 10th, Nasdaq 50th, KPP 10th, FENDI Baguette 25th, Adobe Flash 10th, Bonhomme 10th |
| "<Name> Turns <N>" | 1 | Zero Turns Two (SOTD) |
| Number spelled out as a word in the title | 4 | Ten Years Away, Five years of -99, Fifty Years of The Martin Agency, Zero Turns Two |
| Bracketed uppercase UI labels, e.g. "[READ MORE]" | 1 | G |
| Playful party copy on the CTA | 1 | S ("I'M READY TO PARTY", "PREPARING YOUR GOOD TIMES") |
| Intimate first-person voice | 2 | T ("a true story, ours"), K ("Before inspiring, we were inspired.") |

### Finale / ending
| Pattern | Count | Supporting |
|---|---|---|
| Credits or acknowledgements as the close | 1 verified | G (music credits, photo credits, stretched title, back-to-top) |
| Confetti finale | 1 (inferred only) | S ("cheers/confetti finale", inferred by the teardown author). No reference *verifiably* ends on confetti. A third-party reflex list flags generic confetti as an effect to avoid unless the concept earns it |
| Closing on the same colour as the preloader (bookend) | 1–2 | G (#ffa441 for both preloader and close), T ("bookend timeline framing", REPORTED) |

---

## 4. Ranking by recognition (use it to break ties)

1. **20 Years of Xbox Museum**: Awwwards SOTM + SOTD 7.93 + FWA SOTM + Webby Winner + CSSDA WOTY nominee. Tier A.
2. **Sculpting Harmony (Getty × Resn)**: SOTD 7.89 + DEV 7.78 (+ SOTM Nov 2023, medium). Tier A/B.
3. **Slosh Seltzer**: SOTD 7.69 + DEV score 7.45. Tier B.
4. **Blind Barber 10—Year**: SOTD 7.56 + DEV 7.1. Tier B.
5. **Five Years of -99**: SOTD 7.46 + FWA. Tier B.
6. **Zero Studios Birthday Site / Zero Turns Two**: SOTD 7.42 + CSSDA WOTD. Tier B.
7. **Ten Years Away**: SOTD 7.32 + Developer Award 7.11 + CSSDA + Codrops case study. Tier B.
8. **20 Years Inspired by People**: SOTD + Developer Award, score NOT FOUND. Tier C.
9. **Happy Birthday ELLE**: Awwwards HM + FWA of the Day. Tier C.
10. **Fifty Years of The Martin Agency**: FWA Site of the Day. Tier C.
11. **150 Years of the Bijenkorf**: FWA + Commarts + Awwwards HM or Nominee (conflict). Tier D.
12. **Happy Birthday Game Boy**: Awwwards HM or Nominee (conflict) + CSSDA. Tier D.
13. 10 Years Digital Present (HM 2026) → 10 Years of Impact (HM 2024) → DEVELUP 10 Years (HM 2023) → CNJ 10 Years (HM 2022) → Walt Disney Concert Hall 10th (HM) → GetResponse 15th Birthday (HM 2013). Tier D.
14. FWA anniversary cases (Nasdaq 50th, KPP 10th, FENDI Baguette 25th, Adobe Flash 10th, Bonhomme 10th, 20th FWA, World Baking Day). Tier D.
15. Nominees and listings: The Birthday Party Project, NESCAFÉ Dolce Gusto 5th Birthday, Happy Birthday Jigoro Kano, Happy Birthday Werner, OSI 90th, Hg 25th, depart 10th. Tier E.

**Tie-break hints from the evidence**
- **Typography:** the highest-ranked reference with verified fonts is **#2 Sculpting Harmony**: light serif text (Reckless) + compressed black grotesk titles stretched full width (Sharp Grotesk Black) + mono uppercase labels (Roboto Mono). #3 Slosh (condensed display + mono) and #8 nk.studio (Instrument Serif + DM Sans, both free) agree on "serif or condensed display + a contrasting second family".
- **Libraries:** #2 (GSAP + ScrollTrigger + SplitText + Lenis + Three.js + Howler) and #7 (GSAP + Lenis + R3F/Three.js + Howler) use the same stack. #3 uses a proprietary stack, so it cannot be followed literally.
- **Sound:** #2 and #7 both make sound opt-in at the entry and use Howler. #7 adds per-chapter tracks that crossfade.
- **Celebration mechanic:** the only verified "birthday ritual" interaction is **#9 Happy Birthday ELLE** (blowing out candles by microphone, or by gyroscope on phones). #3 Slosh supplies the verified party-voice CTA and preloader.
- **Palette:** the highest-ranked palettes with hexes are #2 (orange preloader/close #ffa441 + red #ff6359 + blue #4596ff + green #16a147 + black/white) and #3 (six saturated hues, one at a time, pink #FFC1FF base). Among the "minimal" palettes, #4–#6 all use black + white + one accent (#9C9C9C / #ECD06F / #D14836).

---

## 5. Gaps worth closing if the search budget is raised

- **Fonts are NOT FOUND for:** Xbox Museum, Blind Barber 10—Year, Five Years of -99 (only "Terminal 27 / BSMNT" hints), Zero Turns Two, Ten Years Away, ELLE, Martin Agency, Bijenkorf and Game Boy. The best next queries:
  - `"two.zero.nyc" font`
  - `"ten.375.studio" font-family`
  - `"Blind Barber 10—Year" awwwards fonts`
  - `"Five years of -99" awwwards fonts Terminal`
- **Live URLs NOT FOUND for:** Blind Barber 10—Year, Happy Birthday ELLE, Bijenkorf 150, Happy Birthday Game Boy, Slosh Seltzer.
- **HM vs Nominee conflicts** for Game Boy and Bijenkorf need a direct read of the Awwwards page.
- **Theremix** (theremin centenary, SOTD + Dev Award + FWA + CSSDA + Webby nominee) deserves a deep card. It was found too late.
