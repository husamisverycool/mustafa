# 07 — Type system, name treatments, motion tokens, buttons/cursors and texture (evidence dossier)

Evidence base for the TYPE SYSTEM, BUTTONS and MOTION TOKENS of the "Happy Birthday, Mustafa" site.
Rule served: no token may come from our own taste. Each token must trace to a real, excellent site or studio that used it.

Compiled 2026-10-03. Researcher: Claude (typography and visual-systems subagent).

---

## 0. How to read this file (method, limits, confidence legend)

### Confidence labels

| Label | Meaning |
|---|---|
| **VERIFIED-npm** | I read it myself this session from the published package on `registry.npmjs.org` (tarball source, CSS or README). The command to reproduce it is given. This is the strongest evidence in the file. |
| **VERIFIED-GF** | I confirmed it myself this session. Either `fonts.googleapis.com/css2?family=…` returned HTTP 200, or the `google-font-metadata@6.0.8` npm package lists the family, or `registry.npmjs.org/@fontsource/<slug>` exists (HTTP 200). |
| **REPORTED** | Comes from a WebSearch result summary. Summaries can hallucinate. The number of independent queries is given, with the source URLs the search returned. |
| **REPORTED-LOW** | One summary only, and it looks suspicious or contradicts another source. Do not build on it without re-checking. |
| **NOT FOUND** | Searched for or needed, but no evidence was obtained this session. |
| **[bg]** | My background knowledge. It was NOT verified this session. **It may not be used as provenance under the user's rule.** It is shown only so the orchestrator knows what to re-verify. |

### Session limits (important for interpreting the gaps)

- **WebSearch:** I ran only **16 queries** before the session-wide cap of 200 was hit. Sibling research agents used the rest. Every later query failed with "used its web search budget (200 of 200)". The coordinator confirmed that the cap is exhausted.
- **Firecrawl:** `firecrawl_search` returned HTTP 402 ("low on credits").
- **Direct fetch:** WebFetch and curl to tympanus.net (Codrops), gsap.com, lenis.dev, easings.net, awwwards.com, fontsinuse.com, typewolf.com, pangrampangram.com, api.fontshare.com, codepen.io, web.archive.org and the search engines all return proxy **403**.
- **Reachable:** only `registry.npmjs.org` and `fonts.googleapis.com`.
- **GitHub:** excluded by the lead's rule. I did not use any GitHub tool or fetch any GitHub content. Sibling dossiers 01 and 06 contain site-level font and motion captures that were taken from GitHub-hosted code captures. **Those claims are deliberately NOT imported here.** See §7.
- **Consequence:** the "Codrops tutorial numbers" and "Typewolf / Awwwards font listings" parts of the brief are mostly **NOT FOUND**.
  - To compensate, I went to the primary source for motion, cursor and marquee tokens: the **npm packages that award-winning studios themselves publish**. These are Cuberto (`mouse-follower`, `reeller`), Studio Freight, now darkroom.engineering (`lenis`, `@studio-freight/compono`), Locomotive (`locomotive-scroll`, `@locomotivemtl/*`), Active Theory (`@activetheory/split-text`, `@activetheory/fit-text`), 14islands (`@14islands/lerp`, `@14islands/r3f-scroll-rig`), Unseen (`@unseenco/taxi`) and Dogstudio (`@dogstudio/highway`).
  - Their defaults are what those studios ship on their own sites. That is the most traceable kind of evidence possible.
  - [bg] Cuberto, Studio Freight/darkroom, Locomotive, Active Theory, 14islands, Unseen and Dogstudio are all repeat Awwwards/FWA winners. That status was not re-verified this session.

### How to reproduce any VERIFIED-npm item
```
npm pack <pkg>@<version>         # downloads <pkg>-<version>.tgz from registry.npmjs.org
tar xzf <pkg>-<version>.tgz      # → package/README.md, package/src, package/dist
```
Scoped package files are named with the scope folded into the name. For example, `@studio-freight/compono` gives `studio-freight-compono-0.0.51.tgz`.

---

## 1. Fonts

### 1.1 Typefaces used by celebration / anniversary / birthday identities (Fonts In Use and press)

| Font (foundry) | Where used (celebration reference) | Source | Confidence | Availability |
|---|---|---|---|---|
| **Unbounded** (NaN, open source) | **Project Space Festival 2024, its 10-year anniversary edition.** Duotone identity by Erin Mitchell; "the font used throughout the 2024 edition is NaN's open-source Unbounded". | https://fontsinuse.com/uses/61621/project-space-festival-2024 | REPORTED (1 query) | **VERIFIED-GF.** Google Fonts (css2 200). `@fontsource/unbounded` ✓ and `@fontsource-variable/unbounded` ✓. Variable wght 200–900. OFL-1.1. |
| **Muller Next** (Fontfabric) | Opera Open 2024 by Studio Punkt, marking the **70th anniversary** of the State Opera Plovdiv | https://fontsinuse.com/uses/74447/opera-open-2024 | REPORTED (1) | Commercial. Not on Google Fonts or fontsource (VERIFIED absent). |
| **ES Klarheit Grotesk** + **Suisse Int'l Mono** | **BuzzBrothers 16th birthday** rebrand, 2026 | Fonts In Use (summary; entry URL not returned), https://fontsinuse.com/ | REPORTED (1) | Commercial. Both absent from Google Fonts and fontsource (VERIFIED absent). |
| **Gaya**, **Cigars**, **ABC Diatype** | Monorail Music **20th Birthday Party** poster plus "Staff Favourites!" booklet, 2022 | https://fontsinuse.com/tags/7541/birthday-cards (search hit list) | REPORTED (1) | Commercial (VERIFIED absent from GF and fontsource). |
| **Blenny** + **Aktiv Grotesk** | "Regia's **50th birthday** invitation card", 2019, by Regys Lima | same Fonts In Use tag search | REPORTED (1) | Commercial (VERIFIED absent). |
| **Matrix Script** + **Matrix** (Emigre) | "Invitation for Françoise's birthday party", 2017, by Pierrick Boffy / Anagraph | same; https://fontsinuse.com/foundry/28/emigre | REPORTED (1) | Commercial (VERIFIED absent). |
| **Akzidenz-Grotesk** + **FF Daxline** | "Invitation for Sophie's birthday party", 2017, by Pierrick Boffy | https://fontsinuse.com/typefaces/2421/ff-daxline | REPORTED (1) | Commercial (VERIFIED absent). |
| **Akzidenz-Grotesk** | Fonts In Use marked the typeface's own **125th birthday** with an iconic use | https://fontsinuse.com/blog | REPORTED (1) | Commercial. |
| **Albra Text** (Rellence) | **100 Years of Winnie-the-Pooh**: book edition branding for the centenary | https://fontsinuse.com/uses/78667/100-years-of-winnie-the-pooh | REPORTED (1) | Commercial (VERIFIED absent). |
| **Johnston100** (TfL / Monotype) | TfL redrew Johnston for its **100th year** (original by Edward Johnston, 1916) | https://www.timeout.com/london/blog/tfl-has-very-slightly-changed-its-official-font-after-100-years-061416 | REPORTED (1) | Proprietary to TfL (VERIFIED absent). |
| **Brygada 1918** | Digital revival made to celebrate **100 years of independence of Poland** (2018) | search result pointing to the project's repo (not opened, per the GitHub rule) | REPORTED (1) | **VERIFIED-GF.** Google Fonts. `@fontsource/brygada-1918` ✓ and `@fontsource-variable/brygada-1918` ✓. ital 0–1, wght 400–700. OFL. |
| (stamp numerals) | **Swiss Post 175th anniversary** stamps, with a modified "1" in **Movement** | https://fontsinuse.com/uses/63641/swiss-post-175th-anniversary-stamps | REPORTED (1) | Commercial / unknown. |
| (Pentagram) | NYPL "Celebrating 100 Years" centennial exhibition, 2011 | https://fontsinuse.com/uses/1358/exhibition-100-years-new-york-public-library | REPORTED (1). Family NOT FOUND in the summary. | n/a |
| — | "U at 50. 1974–2024" (50-year anniversary) | https://fontsinuse.com/uses/79009/u-at-50-1974-2024 | Listed only. Family NOT FOUND. | n/a |

Festival identities (celebratory, but not birthdays), all from Fonts In Use 2025, REPORTED (1 query). All are commercial and all are VERIFIED absent from GF and fontsource:
- AGRFT Festival: **Wesna** (Type Salon) + **Zeitung** (Underware).
- Colligo: **Hagrid** (Zetafonts) + Bitterbrush.
- Slow & Low Lowrider: Respira, Cordier Script, Rosalie.
- Jaha Film: Resist Sans.
- Film Festival Cologne: **GT Cinetype** + **GT Alpina**.
- Roma Jazz: **Elastik** (Benoît Bodhuin).
- Kulturtage Thalwil: TT Biersal + TT Interphases Pro.
- Abrupt: AC Visual.

Source list: https://fontsinuse.com/uses/72697/agrft-festival-2025, …/73701/colligo-alta-murgia-festival-2025, …/73612/slow-and-low-chicago-lowrider-festival-2025, …/79656/jaha-film-festival-2025, …/71292/film-festival-cologne-2025, …/77308/roma-jazz-festival-2025, …/70060/kulturtage-thalwil-2025, …/73607/abrupt-festival-2025.

### 1.2 Big-brand anniversaries and celebration platforms

| Brand / product | Typeface | Source | Confidence | Availability |
|---|---|---|---|---|
| **Spotify Wrapped 2024** | **Spotify Mix**, a bespoke variable font with weight, width and slant axes. Made with **Dinamo** (Berlin) and launched May 2024. Wrapped 2024 was its first Wrapped. It replaced **Circular**. | https://newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/ · https://www.itsnicethat.com/features/spotify-wrapped-2024-graphic-design-041224 · https://design.tutsplus.com/articles/what-font-does-spotify-use--cms-107091 | REPORTED (2 queries agree) | **Exclusive to Spotify. Not obtainable.** |
| Spotify Wrapped 2023 / earlier | **Circular** (Spotify's previous brand face) | https://elements.envato.com/learn/spotify-wrapped-2024 | REPORTED (1) | Commercial ([bg] Lineto). Not obtainable free. |
| Spotify Wrapped 2022 | One summary claimed "Amidic Modern San-serif" | https://elements.envato.com/learn/spotify-wrapped-2024 | **REPORTED-LOW** (likely hallucinated) | n/a |
| Spotify Wrapped 2019–2021, 2025 | — | — | NOT FOUND | — |
| **Google** (brand; annual birthday Doodles) | **Google Sans Flex**, "the next generation of Google's brand typeface". Five or more variable axes. Released free to the public in Nov 2025. | https://9to5google.com/2025/11/18/google-sans-flex-font-available/ · https://www.engadget.com/big-tech/the-google-sans-flex-typeface-is-now-available-to-download-214535934.html · https://www.androidauthority.com/google-sans-flex-free-3617034/ | REPORTED (1 query, 4 outlets agree) | **VERIFIED-GF.** Google Fonts css2 200. `@fontsource/google-sans-flex` ✓ and `@fontsource-variable/google-sans-flex` ✓. Axes from the fontsource `metadata.json`: **wght 1–1000, wdth 25–151, opsz 6–144, slnt −10–0, GRAD 0–100, ROND 0–100**. License OFL-1.1, "Copyright 2015 Google LLC". |
| Google (brand) | **Google Sans** | — | Brand use is [bg] | **VERIFIED-GF.** Google Fonts. `@fontsource/google-sans` ✓ and `@fontsource-variable/google-sans` ✓. wght 400–700. OFL. |
| Google 25th birthday (2023) | The Doodle reused the old **Catull**-serif logos. The current logo is Product Sans. | sibling dossier `02-brand-and-platform-birthdays.md` §Google 25 (fandom / Wikipedia sources) | REPORTED (from dossier 02) | Catull: commercial. Product Sans: not distributed (VERIFIED absent). |
| **Disney100** (2023) | No custom Disney100 typeface found. The Disney wordmark is hand-lettered. The best-known recreation is **Waltograph** (fan-made by Justin Callaghan, unofficial). Dossier 02 credits the Disney100 branding to Connor King Design. | https://elements.envato.com/learn/what-font-does-disney-use · https://connorkingdesign.com/disney100 (via dossier 02) | REPORTED (1). The Disney100 type itself is NOT FOUND. | Waltograph: free fan font. Not on GF or fontsource (VERIFIED absent). Using it would imitate Disney branding, so avoid. |
| **Hello Kitty 50th** (2024) | 50th-anniversary logo and key visual "Friend the Future". One summary claimed the lettering is "Janda Happy Day by Kimberly Geswein". | https://www.art-adf.jp/news-en/hello-kitty-celebrates-its-50th-anniversary-en/ · https://pixelframe.design/hello-kitty-font-generator/ | Logo: REPORTED. Font: **REPORTED-LOW** (fan-site claim; contradicts "custom logo"). | n/a |
| Pokémon 25 / YouTube 20 / Apple 50 | — | My planned queries hit the cap. Dossier 02 covers these sites but finds no typeface. | NOT FOUND | — |
| **Apple Invites** app (offered fonts) | — | 1 query returned only generic Apple typography pages | NOT FOUND | — |
| **Partiful** (offered fonts) | — | 1 query returned only wedding-invitation font blogs | NOT FOUND | — |

### 1.3 Awwwards / Typewolf font listings for celebration sites

- **Awwwards birthday/anniversary sites exist.** REPORTED (2 queries). Examples:
  - Zero Studios Birthday Site: SOTD, Mar 8 2019, 7.42.
  - Happy Birthday ELLE: HM, Jan 18 2016.
  - Happy Birthday Jigoro Kano; Happy Birthday, Werner!; The Birthday Party Project.
  - OSI 90th Anniversary; Hg 25th Anniversary; depart inc. 10th Anniversary; 10 Years Digital Present.
  - Sources: https://www.awwwards.com/sites/zero-studios-birthday-site · https://www.awwwards.com/websites/?text=birthday · https://www.awwwards.com/inspiration_search/anniversary/
- **The "Fonts" field of those Awwwards pages was not retrievable** (403, and the search cap was hit). NOT FOUND.
- Pangram Pangram has a "Fonts in use" entry for **Awwwards Annual Awards 2021**: https://pangrampangram.com/blogs/font-in-use/awwwards. Which family it was is NOT FOUND (the summary did not name it).
- Typewolf "Site of the Day" celebration entries: NOT FOUND (no queries left).
- For site-level fonts of award birthday sites, see sibling dossier 01 §2 and §3. Its typography captures come from GitHub-hosted code captures, which the lead has excluded, so they are not imported here (§7).

### 1.4 Free fonts that are invitation-genre conventions (weak provenance)

A 2026 invitation-font guide recommended Cormorant Garamond, Didot, Bodoni, Bickham Script, Copperplate, Playfair Display, Great Vibes, Tangerine, Dancing Script, Inter, Montserrat and Work Sans. It called "Great Vibes + Cormorant Garamond" "the pairing that works most often".
- Sources: https://blissandbone.com/resources/wedding-invitation-fonts, https://paperlust.co/blog/wedding-invitation-fonts/, https://designshack.net/articles/inspiration/best-fonts-for-wedding-invitations/
- Confidence: REPORTED (1 query).
- **These are blog conventions, not award references.** Use them only as a fallback.
- Availability, all VERIFIED-GF: Cormorant Garamond (var wght 300–700, ital), Great Vibes (400), Tangerine (400/700), Dancing Script (var wght 400–700), Playfair Display (var 400–900, ital), Montserrat, Work Sans, Inter (var opsz 14–32, wght 100–900).

### 1.5 Availability matrix (VERIFIED-GF / fontsource; all checks run 2026-10-03)

Method: `google-font-metadata@6.0.8` (`data/google-fonts-v2.json`, `variable.json`, `licenses.json`), plus `curl https://fonts.googleapis.com/css2?family=<Family>` (200 = live), plus `curl https://registry.npmjs.org/@fontsource/<slug>` and `@fontsource-variable/<slug>` (200 = exists).

**On Google Fonts and on fontsource (all OFL-1.1). The variable axis ranges come from GF metadata:**

| Family | fontsource slug | variable pkg | Axes / weights | Category |
|---|---|---|---|---|
| Unbounded | `unbounded` | ✓ | wght 200–900 | sans |
| Google Sans Flex | `google-sans-flex` | ✓ | wght 1–1000, wdth 25–151, opsz 6–144, slnt −10–0, GRAD 0–100, ROND 0–100 | sans |
| Google Sans | `google-sans` | ✓ | 400–700 | sans |
| Google Sans Code | `google-sans-code` | ✓ | ital, wght 300–800 | mono |
| Brygada 1918 | `brygada-1918` | ✓ | ital, wght 400–700 | serif |
| Roboto Flex | `roboto-flex` | ✓ | opsz 8–144, slnt −10–0, wdth 25–151, wght 100–1000, GRAD −200–150 + 7 parametric axes | sans |
| Fraunces | `fraunces` | ✓ | ital, opsz 9–144, wght 100–900, SOFT 0–100, WONK 0–1 | serif |
| Bricolage Grotesque | `bricolage-grotesque` | ✓ | opsz 12–96, wdth 75–100, wght 200–800 | sans |
| Archivo | `archivo` | ✓ | ital, wdth 62–125, wght 100–900 | sans |
| Mona Sans / Hubot Sans | `mona-sans` / `hubot-sans` | ✓ | ital, wdth 75–125, wght 200–900 | sans |
| Climate Crisis | `climate-crisis` | ✓ | **YEAR 1979–2050** (the axis changes the glyphs by year) | display |
| Honk / Nabla | `honk` / `nabla` | ✓ | Honk MORF 0–45, SHLN 0–100 · Nabla EDPT 0–200, EHLT 0–24 (colour fonts) | display |
| Big Shoulders | `big-shoulders` | ✓ | opsz 10–72, wght 100–900 | display |
| Instrument Serif / Instrument Sans | `instrument-serif` / `instrument-sans` | serif ✗ / sans ✓ | Serif 400 + italic · Sans ital, wdth 75–100, wght 400–700 | serif / sans |
| DM Sans / DM Serif Display | `dm-sans` / `dm-serif-display` | ✓ / ✗ | DM Sans ital, opsz 9–40, wght 100–1000 | sans / serif |
| Inter / Inter Tight | `inter` / `inter-tight` | ✓ | Inter: opsz 14–32, wght 100–900 | sans |
| Space Grotesk / Space Mono | `space-grotesk` / `space-mono` | ✓ / ✗ | wght 300–700 / 400, 700 | sans / mono |
| Syne | `syne` | ✓ | wght 400–800 | sans |
| Geist / Geist Mono | `geist` / `geist-mono` | ✓ | wght 100–900 | sans / mono |
| Roboto Mono | `roboto-mono` | ✓ | ital, wght 100–700 | mono |
| Anton, Bebas Neue, Archivo Black, Rubik Mono One, Shrikhand, Pacifico, Lobster, Monoton, Bungee, Bungee Spice, Young Serif, Gloock, Rubik Glitch, Indie Flower | (lowercase-hyphen slugs) | ✗ (static) | single weight | display |
| Oswald, Manrope, Familjen Grotesk, Hanken Grotesk, Schibsted Grotesk, Onest, Figtree, Outfit, Plus Jakarta Sans, Sora, Epilogue, Darker Grotesque, Funnel Display, Host Grotesk, JetBrains Mono, Rubik, Fredoka (wdth 75–125) | ✓ | ✓ | variable wght | sans |
| Poppins, IBM Plex Mono | ✓ | ✗ | static 100–900 / 100–700 | sans / mono |

Two notes:
- **Big Shoulders Display** is no longer a separate family on Google Fonts; it was merged into "Big Shoulders". Fontsource still publishes `@fontsource/big-shoulders-display` (VERIFIED).
- Every family in this table is free. **But availability is not provenance.** Apart from the rows backed by §1.1–1.2, none of these has a verified celebration or award usage in this session.

**Not obtainable free from GF or fontsource.** I checked each; none is on Google Fonts or fontsource. Licence notes are [bg] and unverified:
- Neue Montreal, PP Editorial New, PP Mori, Monument Extended: [bg] Pangram Pangram, free for personal use, and the site would be personal.
- Satoshi, General Sans, Clash Display, Cabinet Grotesk, Switzer: [bg] Fontshare, free.
- Druk, Spotify Mix, Circular, Product Sans, YouTube Sans, Muller Next, ES Klarheit Grotesk, Suisse Int'l Mono, Gaya, Cigars, ABC Diatype, Blenny, Aktiv Grotesk, Matrix Script, Akzidenz-Grotesk, FF Daxline, Albra Text, Johnston100, Waltograph, Hagrid, Elastik, GT Alpina, GT Cinetype, Resist Sans, Wesna, Zeitung, Respira, Rosalie.

The free licences of the Pangram Pangram and Fontshare families could not be verified, because pangrampangram.com and api.fontshare.com return 403.

---

## 2. Display-type treatments for a NAME

### 2.1 Split-letter / split-line reveals: library defaults (VERIFIED-npm)

| Token | Value | Who ships it | Source command | Confidence |
|---|---|---|---|---|
| SplitText default `type` | `"chars,words,lines"` | GreenSock (GSAP 3.15.0) | `npm pack gsap` → `src/SplitText.js` line 204 | VERIFIED-npm |
| SplitText `mask` | `"lines" \| "words" \| "chars"`. Wraps each piece in a clone with `overflow: clip` and class `<name>-mask`. This is the built-in "text rises from behind a mask" reveal. | GSAP | `src/SplitText.js` lines 273–279; `types/split-text.d.ts` line 77 | VERIFIED-npm |
| SplitText `aria` | `"auto"` puts `aria-label` (the full text) on the parent and `aria-hidden` on the pieces | GSAP | `src/SplitText.js` lines 45–49, 204, 213 | VERIFIED-npm |
| SplitText `autoSplit` | `false`. When true it re-splits lines after fonts load ("loadingdone") and on resize. | GSAP | `src/SplitText.js` lines 204, 283–287 | VERIFIED-npm |
| GSAP licence | "GSAP is now **100% FREE** including ALL of the bonus plugins like SplitText … even for commercial use" (thanks to Webflow) | GSAP README | `npm pack gsap` → `README.md` | VERIFIED-npm |
| Active Theory split-text default `type` | `lines`. `minLines` 1, `lineThreshold` **0.2**, `noBalance` false (it balances text by default), `balanceRatio` 1, `handleCJT` false, `.sr-only` a11y copy by default | **Active Theory** | `npm pack @activetheory/split-text@1.1.2` → README | VERIFIED-npm |
| SplitType default `types` | `"lines, words, chars"`, relative position, `display: inline-block`. `absolute: false` | split-type 0.3.4 | `npm pack split-type` → README lines 191, 225–234 | VERIFIED-npm |
| Splitting.js CSS variables | `--char-index`, `--char-total`, `--word-index`, `--word-total`, `--line-index`. Derived: `--char-percent = index/total`, `--char-offset = index − center`, `--distance` (squared distance from the centre). Chars are `display: inline-block`. | splitting 1.1.0 | `npm pack splitting` → `dist/splitting.css` | VERIFIED-npm |

**Stagger / duration values.**
- Codrops tutorials: **NOT FOUND**. The search cap was hit and tympanus.net returns 403.
- The only stagger numbers I could verify are GreenSock's own documentation examples, shipped in the package:

| Value | Context | Source | Confidence |
|---|---|---|---|
| `stagger: 0.1`, `duration: 1` | Flip examples (2×) | `gsap/types/Flip.d.ts` lines 79–81, 177–179 | VERIFIED-npm |
| `stagger: 0.15` | `ScrollTrigger.batch()` onEnter / onEnterBack examples (2×) | `gsap/types/scroll-trigger.d.ts` lines 55, 57 | VERIFIED-npm |
| `stagger: 0.1` | `@gsap/react` README examples (2×) | `npm pack @gsap/react@2.1.2` → README | VERIFIED-npm |
| `duration: 0.8, ease: "power3"` | `gsap.quickTo("#id","x", …)`, GSAP's canonical "follow the pointer" example | `gsap/types/gsap-core.d.ts` line 502 | VERIFIED-npm |

### 2.2 Giant viewport-filling names: sizing conventions

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Design-to-viewport function | `desktop-vw($px) = $px * 100vw / 1440px`; `mobile-vw($px) = $px * 100vw / 375px`; `desktop-vh` base 900; `mobile-vh` base 650; mobile breakpoint 800px. In practice every size is authored in px on a 1440×900 board and emitted as vw. | **Studio Freight** (now darkroom.engineering, authors of Lenis) | `npm pack @studio-freight/compono@0.0.51` → `src/_functions.scss` | VERIFIED-npm |
| Fluid size function | `responsiveValue(min, max, breakpoint) = clamp(min, calc(max/breakpoint * var(--vw,1vw) * 100), max)`. Also `dvh()` / `svh()` helpers via `--dvh` / `--svh`. | **Locomotive** | `npm pack @locomotivemtl/postcss-helpers-functions@1.0.4` → `bundled/postcss-helpers-functions.js` | VERIFIED-npm |
| Fit-to-box | `fitText({el, box, singleLine, clipOnly, boxMultiplier, maxWidth, maxHeight, minFontSize, …})`: fits text to a container or a single line | **Active Theory** | `npm pack @activetheory/fit-text@1.0.2` → README | VERIFIED-npm |
| Fit-to-box (generic) | fitty: `minSize` **16px**, `maxSize` **512px**, `multiLine: true` | fitty 2.4.2 (PQINA) | `npm pack fitty` → README lines 59–61 | VERIFIED-npm |
| Largest utility type step | `--text-9xl: 8rem` with line-height **1**; `--text-8xl: 6rem` / 1; `--tracking-tighter: -0.05em` | Tailwind CSS 4.3.3 | `npm pack tailwindcss` → `theme.css` lines 369–384 | VERIFIED-npm |
| Display Large | 3.5625rem (57px) / 4rem (64px), tracking −0.015625rem (−0.25px), weight regular, opsz 57 | Google **Material 3** (`@material/web` 2.5.0) | `tokens/versions/latest/sass/_md-sys-typescale.scss` lines 101–111, 399 | VERIFIED-npm |
| A literal `font-size: 20vw` (or similar) on an award site | — | — | — | **NOT FOUND** |

### 2.3 Marquees / tickers of a name

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| CSS marquee | `repeat = 2` copies; `duration = 5`s; `animation: marquee var(--duration) linear infinite`; `translate3d(calc(var(--offset)*-1),0,0)` → `translate3d(calc(-100% - var(--offset)),0,0)`; `inverted` reverses direction; plays only while intersecting (IntersectionObserver threshold 0); copies after the first are `aria-hidden` + `data-nosnippet`; **reduced motion → `--duration: 50s`** | **Studio Freight** | `@studio-freight/compono` → `src/marquee/index.js`, `marquee.module.scss` | VERIFIED-npm |
| Scroll-driven marquee | `progress = -((scrollY * 0.1) % 100)` → `--marquee-progress: <progress>%`. Updated from Lenis scroll, only when in view. | **Studio Freight** | `src/marquee-scroll/index.js` | VERIFIED-npm |
| GSAP marquee ("Reeller") | `speed: 10`, `ease: 'none'`, `initialSeek: 10`, `loop: true`, `paused: true`, `autoStop` / `autoUpdate` (IntersectionObserver + ResizeObserver), `clonesOverflow: true` | **Cuberto** | `npm pack reeller@0.1.2` → README | VERIFIED-npm |
| Scroll-reactive marquee | ScrollerPlugin: `speed: 1`, `multiplier: 0.5`, `threshold: 1`, **`ease: 'expo.out'`**, `bothDirection: true`, `reversed: false` | **Cuberto** | same README lines 190–213 | VERIFIED-npm |
| React marquee (generic) | `speed: 50` px/s, `gradientWidth: 200`, `delay: 0` | react-fast-marquee 1.6.5 | `npm pack react-fast-marquee` → README lines 81–86 | VERIFIED-npm |

### 2.4 Scramble / decode text

GSAP ScrambleTextPlugin defaults (`gsap/src/ScrambleTextPlugin.js` lines 44–47 and 88–100; VERIFIED-npm):
- `chars: "upperCase"`; the other presets are `lowerCase` and `upperAndLowerCase`.
- `speed: 1`, which gives a 0.05s re-scramble interval.
- `revealDelay: 0`; `tweenLength: true`; `delimiter: ""`.

### 2.5 Variable-font weight / width animation

- **Capability: VERIFIED-GF.** These free families expose animatable axes (§1.5):
  - Google Sans Flex (wght 1–1000 + wdth 25–151 + ROND + GRAD)
  - Roboto Flex
  - Fraunces (SOFT / WONK)
  - Archivo (wdth 62–125)
  - Bricolage Grotesque
  - Mona / Hubot Sans
  - Climate Crisis (`YEAR` 1979–2050)
- **Usage of a variable-weight animation on an award or celebration site: NOT FOUND.**

### 2.6 Outline / stroke name text

**NOT FOUND.** No verified reference this session.

### 2.7 Kinetic / mouse-reactive type

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Mouse parallax ("Kinesis") | `x = (clientX/width − 0.5) * 2 * speed`, `speed = 100` (px), `gsap.to(…, {duration: 1, ease: 'expo.out'})`, disabled on touch devices | **Studio Freight** | `@studio-freight/compono` → `src/kinesis/index.js` | VERIFIED-npm |
| Scroll parallax | `y = windowWidth * speed * 0.1`, `speed = 1`; ScrollTrigger `scrub: true`, `start: 'top bottom'`, `end: 'bottom top'`, `ease: 'none'`; killed under `prefers-reduced-motion: reduce` via `gsap.matchMedia()` | **Studio Freight** | `src/parallax/index.js` | VERIFIED-npm |

---

## 3. Motion tokens

### 3.1 Smooth scroll

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Lenis `lerp` | **0.1**. Implemented as frame-rate-independent damping: `damp(x, y, λ = lerp*60, dt) = lerp(x, y, 1 − e^(−λ·dt))` | **darkroom.engineering / Studio Freight**, Lenis 1.3.26 | `npm pack lenis@1.3.26` → README line 200; `dist/lenis.mjs` lines 37–38, 86, 434 | VERIFIED-npm |
| Lenis `duration` | README: **1.2** s, "Useless if lerp defined". **Code nuance:** the constructor leaves `duration` undefined, so the out-of-the-box behaviour is lerp 0.1. Passing `duration` alone switches to `defaultEasing` (lines 442–443). | Lenis | README line 195; `dist/lenis.mjs` lines 434, 442 | VERIFIED-npm |
| Lenis `easing` | `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`, which is an exponential ease-out | Lenis | README line 196; `dist/lenis.mjs` line 373 | VERIFIED-npm |
| Lenis other defaults | `smoothWheel: true`; `syncTouch: false`, so touch scrolling stays native; `syncTouchLerp: 0.075`; `touchInertiaExponent: 1.7`; `wheelMultiplier: 1`; `touchMultiplier: 1`; `anchors: false`; `autoRaf: false` | Lenis | README lines 190–213 | VERIFIED-npm |
| Lenis reduced motion | Honours `prefers-reduced-motion: reduce`: `lerp` is forced to 1 and programmatic scrolls jump. `respectReducedMotion = true`. | Lenis | README line 352; constructor line 434 | VERIFIED-npm |
| Lenis + GSAP recipe | `lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t*1000))` | Lenis | README "GSAP ScrollTrigger" | VERIFIED-npm |
| Locomotive Scroll v4 | `lerp: 0.1`, `multiplier: 1`, `firefoxMultiplier: 50`, `touchMultiplier: 2`. `scrollTo` default `duration: 1000` ms with `easing: [0.25, 0.00, 0.35, 1.00]` | **Locomotive** | `npm pack locomotive-scroll@4.1.4` → README lines 136–148, 184 | VERIFIED-npm |
| Locomotive Scroll v5 | "**Built on top of Lenis**". Smoothing defaults are inherited from Lenis. | Locomotive | `npm pack locomotive-scroll@5.0.1` → README | VERIFIED-npm |
| GSAP ScrollSmoother | `smooth` default **0.8** s (`smoothTouch: true` gives 0.8 on touch); its catch-up tween uses ease **`expo`** (`gsap.parseEase("expo")`) | GreenSock | `gsap/src/ScrollSmoother.js` lines 60, 249, 350, 656 | VERIFIED-npm |
| FPS-independent lerp | `lerp(a, b, rate, frameDelta, targetFps = 60)` → `1 − (1 − rate)^(frameDelta / (1/targetFps))` | **14islands** | `npm pack @14islands/lerp@1.0.3` → `index.js` | VERIFIED-npm |
| Usage on birthday award sites | Dossier 01 records that Lenis + GSAP (ScrollTrigger, SplitText) appear on its top-ranked anniversary sites. Those captures are GitHub-derived, so they are not imported here (§7). | — | `01-award-birthday-anniversary-sites.md` §3 | excluded |

### 3.2 GSAP core defaults and named eases (VERIFIED-npm, gsap 3.15.0)

- **Default `duration` = 0.5 s** and **default `ease` = `quad.out` (= `power1.out`).**
  - Source: `src/gsap-core.js` lines 16–20 (`_defaults = {duration: .5, …}`) and line 1092 (`_defaults.ease = _easeMap["quad.out"]`).
- **Power family:**
  - `power1` = Quad, `power2` = Cubic, `power3` = Quart, `power4` = Quint.
  - Easing-out is `1 − (1−p)^(n+1)`. Source: `src/gsap-core.js` lines 1066–1069.
- **Expo:** `expo.in(p) = 2^(10(p−1))·p + p^6·(1−p)` (a blended curve that lands exactly on 1); `expo.out(p) = 1 − expo.in(1−p)`. Source: line 1079.
- **ScrollTrigger default `toggleActions`:** `"play"` (i.e. "play none none none"). Source: `src/ScrollTrigger.js` line 143.
- **Timeline / keyframe default ease:** `"power1.inOut"`. Source: `src/gsap-core.js` line 2274.

### 3.3 Eases that award studios actually ship (VERIFIED-npm)

| Ease | Duration | Use | Studio / package | File |
|---|---|---|---|---|
| `expo.out` | `speed: 0.55` s | Cursor follow | **Cuberto** mouse-follower 1.2.1 | README options; `src/index.js` |
| `expo.out` | (inertia) | Scroll-reactive marquee | **Cuberto** reeller 0.1.2 | README ScrollerPlugin |
| `expo.out` | **0.6 s** (0 on the first move) | Cursor follow | **Studio Freight** compono | `src/cursor/index.js` |
| `var(--ease-out-expo)` | **600 ms** | Cursor scale transition | **Studio Freight** | `src/cursor/cursor.module.scss` |
| `expo.out` | **1 s** | Mouse-parallax "Kinesis" | **Studio Freight** | `src/kinesis/index.js` |
| `cubic-bezier(0.87, 0, 0.13, 1)` (= easings.net easeInOutExpo) | **300 ms** | Accordion slideDown / slideUp | **Studio Freight** | `src/accordion/accordion.module.scss` lines 16–19 |
| `linear` / `'none'` | 5 s / speed 10 | Constant marquee | Studio Freight / Cuberto | §2.3 |
| exponential ease-out `(t)=>min(1,1.001−2^(−10t))` | 1.2 s (when used) | Smooth scroll | Lenis (darkroom) | §3.1 |
| `expo` | 0.8 s | Smooth-scroll catch-up | GSAP ScrollSmoother | §3.1 |
| `[0.25, 0, 0.35, 1]` | 1000 ms | Programmatic scrollTo | Locomotive Scroll v4 | §3.1 |

A grep of the extracted studio packages for `power[0-4]`, `expo.*`, `circ.*`, `sine.*` and `cubic-bezier(` found **only `expo.out` (19 hits across Cuberto and Studio Freight) and one `cubic-bezier(0.87,0,0.13,1)`**.
- **`power4.out` was not found in any studio package** this session.
- Whether `power4.out` or `cubic-bezier(0.76,0,0.24,1)` is a de-facto standard in Codrops tutorials is **NOT FOUND**.

### 3.4 CSS cubic-bezier equivalents (two published conventions, both VERIFIED-npm)

Note that "easeOutExpo" has **two different published curves**. Pick one and cite it.

**(a) easings.net values**, from `postcss-easings@4.0.0`, a PostCSS plugin "to replace easing name from easings.net to cubic-bezier()" (`npm pack postcss-easings` → `index.js`):

| Name | Curve |
|---|---|
| easeOutExpo | `cubic-bezier(0.16, 1, 0.3, 1)` |
| easeInOutExpo | `cubic-bezier(0.87, 0, 0.13, 1)` |
| easeOutQuint | `cubic-bezier(0.22, 1, 0.36, 1)` |
| easeInOutQuint | `cubic-bezier(0.83, 0, 0.17, 1)` |
| easeOutQuart | `cubic-bezier(0.25, 1, 0.5, 1)` |
| easeInOutQuart | `cubic-bezier(0.76, 0, 0.24, 1)` |
| easeOutCubic | `cubic-bezier(0.33, 1, 0.68, 1)` |
| easeInOutCubic | `cubic-bezier(0.65, 0, 0.35, 1)` |
| easeOutCirc | `cubic-bezier(0, 0.55, 0.45, 1)` |
| easeInOutCirc | `cubic-bezier(0.85, 0, 0.15, 1)` |
| easeOutBack | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| easeInOutBack | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` |
| easeOutSine | `cubic-bezier(0.61, 1, 0.88, 1)` |
| easeInOutSine | `cubic-bezier(0.37, 0, 0.63, 1)` |
| easeOutQuad | `cubic-bezier(0.5, 1, 0.89, 1)` |
| easeInOutQuad | `cubic-bezier(0.45, 0, 0.55, 1)` |
| easeInExpo | `cubic-bezier(0.7, 0, 0.84, 0)` |
| easeInQuint | `cubic-bezier(0.64, 0, 0.78, 0)` |

**(b) Classic Penner/Ceaser values**, from `bourbon@7.3.0` by thoughtbot (`core/bourbon/library/_timing-functions.scss`):

| Name | Curve |
|---|---|
| ease-out-expo | `cubic-bezier(0.19, 1, 0.22, 1)` |
| ease-out-quint | `cubic-bezier(0.23, 1, 0.32, 1)` |
| ease-out-quart | `cubic-bezier(0.165, 0.84, 0.44, 1)` |
| ease-out-cubic | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| ease-out-circ | `cubic-bezier(0.075, 0.82, 0.165, 1)` |
| ease-out-back | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| ease-in-out-expo | `cubic-bezier(1, 0, 0, 1)` |
| ease-in-out-quint | `cubic-bezier(0.86, 0, 0.07, 1)` |
| ease-in-out-quart | `cubic-bezier(0.77, 0, 0.175, 1)` |
| ease-in-out-cubic | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| ease-in-out-circ | `cubic-bezier(0.785, 0.135, 0.15, 0.86)` |
| ease-in-out-back | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |

### 3.5 Motion tokens of major design systems (VERIFIED-npm; real tokens from excellent products)

| System | Durations | Easings | Source |
|---|---|---|---|
| **Google Material 3** (`@material/web` 2.5.0) | short1–4: 50/100/150/200 ms · medium1–4: 250/300/350/400 · long1–4: 450/500/550/600 · extra-long1–4: 700/800/900/1000 | standard `cubic-bezier(0.2, 0, 0, 1)` · standard-decelerate `(0, 0, 0, 1)` · standard-accelerate `(0.3, 0, 1, 1)` · emphasized-decelerate `(0.05, 0.7, 0.1, 1)` · emphasized-accelerate `(0.3, 0, 0.8, 0.15)` · legacy `(0.4, 0, 0.2, 1)`. Springs: default spatial stiffness 700 / damping 0.9 · default effects 1600 / 1 · fast spatial 1400 / 0.9 · fast effects 3800 / 1 | `tokens/versions/latest/sass/_md-sys-motion.scss` |
| **IBM Carbon** (`@carbon/motion` 11.53.0) | fast-01 70 ms · fast-02 110 · moderate-01 150 · moderate-02 240 · slow-01 400 · slow-02 700 | standard productive `(0.2, 0, 0.38, 0.9)` / expressive `(0.4, 0.14, 0.3, 1)` · entrance productive `(0, 0, 0.38, 0.9)` / expressive `(0, 0, 0.3, 1)` · exit productive `(0.2, 0, 1, 0.9)` / expressive `(0.4, 0.14, 1, 1)` | `es/index.js` |
| **Tailwind CSS** 4.3.3 | default transition 150 ms | `--ease-out (0, 0, 0.2, 1)` · `--ease-in-out (0.4, 0, 0.2, 1)` · `--ease-in (0.4, 0, 1, 1)` · ping `1s cubic-bezier(0, 0, 0.2, 1)` · pulse `2s cubic-bezier(0.4, 0, 0.6, 1)` | `theme.css` lines 434–493 |
| **Open Props** 1.7.23 (Adam Argyle) | — | `--ease-out-5: cubic-bezier(0, 0, 0, 1)` · `--ease-in-out-4 (.7, 0, .3, 1)` · elastic-out-3 `(.5, 1.25, .75, 1.25)` · `--ease-spring-1..5` and `--ease-bounce-1..5` as CSS `linear()` | `src/props.easing.js` |
| **Motion** (framer-motion) via `motion-dom` 14.0.0 | tween **0.3 s**; keyframes **0.8 s** | default tween ease `[0.25, 0.1, 0.35, 1]`. Transforms default to spring stiffness **500**, damping **25**, restSpeed 10. Scale uses a critically-damped spring (stiffness 550). Raw spring defaults: stiffness 100, damping 10, mass 1, bounce 0.3, visualDuration 0.3. | `dist/es/animation/utils/default-transitions.mjs`; `…/generators/spring.mjs` |
| **anime.js** 4.5.0 | **1000 ms** | `'out(2)'` | `dist/modules/core/globals.js` lines 37–61, `consts.js` line 66 |

### 3.6 Page transitions

- `@unseenco/taxi` 2.0.0 (Unseen Studio, "spiritual successor to Highway.js") and `@dogstudio/highway` 2.2.1 (Dogstudio) were both read.
- **Neither ships timing defaults.** Transitions are user-authored. NOT FOUND for durations.

---

## 4. Buttons and cursors

### 4.1 Custom cursor: Cuberto `mouse-follower` 1.2.1 (VERIFIED-npm; `npm pack mouse-follower` → `README.MD`, `src/scss/index.scss`)

**Geometry and visual states:**

| State | Value |
|---|---|
| Base dot | `:before` circle **48×48 px** (`top/left: -24px`), `border-radius: 50%`, `background: currentColor`, `transform: scale(0.2)`, so the visible dot is **9.6 px** |
| Pointer (`a, button`) | `scale(0.15)` → **7.2 px** (it *shrinks* over links) |
| Text state (label inside the cursor) | `scale(1.7)` → **81.6 px**, `opacity: 0.85`; on active `scale(1.6)` with 0.2 s |
| Text element | 36×36 px, **16 px / 20 px**, white (`$mf-color-text: #fff`), enters from `scale(0) rotate(10deg)` |
| Icon state | `scale(1.5)`; on active `scale(1.4)` |
| Media state (image/video in the cursor) | a **400×400 px** circle shown at `scale(0.696)` (≈278 px), `transition: transform 0.35s, opacity 0.2s 0.2s`; on enter 0.4 s |
| Hidden | `scale(0)` |
| **Blend variant `-exclusion`** | `mix-blend-mode: exclusion` with the dot background inverted (`invert(#000)` = white) |
| Inverse variant `-inverse` | `color: invert(#000)` |

**Transitions, layering and behaviour:**
- Transitions: `transition: opacity 0.3s, color 0.4s`; dot `transform 0.25s ease-in-out, opacity 0.1s`.
- Layering: `position: fixed; z-index: 250; pointer-events: none; contain: layout style size`.
- Movement: `speed: 0.55`, `ease: 'expo.out'`, `overwrite: true`.
- Skew while moving: `skewing: 0` (text/icon/media states use 2), `skewingDelta: 0.001`, `skewingDeltaMax: 0.15`.
- Timing: `showTimeout: 20`; `hideOnLeave: true`; `hideTimeout: 300`; `hideMediaTimeout: 300`.
- `stateDetection: {'-pointer': 'a,button', '-hidden': 'iframe'}`.
- HTML hooks: `data-cursor="-hidden"`, `data-cursor-text`, `data-cursor-stick`, and similar.

### 4.2 Custom cursor: Studio Freight `compono` (VERIFIED-npm; `src/cursor/index.js`, `cursor.module.scss`)

- **Shape:** a **40×40 px** circle, `border-radius: 100%`, `background: var(--black)`, **`opacity: 0.4`**.
- **Pointer state:** `scale(0.5)` over `button, a, input, label, [data-cursor='pointer']`.
- **Transitions:** `transition: transform 600ms var(--ease-out-expo)`. It follows with `gsap.to({x, y, duration: 0.6, ease: 'expo.out'})`.
- **Visibility:** hidden until the first mouse move (opacity 0 → 1). `html.has-custom-cursor` is set while mounted.
- **Touch:** `@media (hover: none) { display: none }`.
- **Layering:** `z-index: 5`.

### 4.3 Magnetic / sticky buttons

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Cursor stick-to-element | `x = stick.x − (stick.x − mouseX) * stickDelta`, **`stickDelta: 0.15`**. The cursor snaps to the element centre and keeps 15% of the pointer offset. Via `data-cursor-stick` or `setStick(el)`. | **Cuberto** | `mouse-follower/src/index.js` lines 98, 192–193, 386–403 | VERIFIED-npm |
| Magnetic attraction (generic library) | `attraction: 0.3`, `distance: 50` px from the edges, `speed: 0.1`, `disableOnTouch: true`, `activeClass: 'magnetizing'` | @phucbm/magnetic-button 1.1.0 (indie library, not an award studio) | `npm pack @phucbm/magnetic-button` → README lines 172–181 | VERIFIED-npm (low provenance) |
| Codrops magnetic-button strength values | — | — | — | **NOT FOUND** (tympanus.net 403, search cap) |

### 4.4 Pill / fill / circular buttons

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Pill radius | `$corner-full: 9999px` | Google Material 3 | `_md-sys-shape.scss` line 51 | VERIFIED-npm |
| Filled button | `container-height: 40px`, `container-shape: corner-full`, icon 18px, label = label-large **14px / 20px, weight 500 (medium), tracking 0.1px** | Google Material 3 | `_md-comp-filled-button.scss` lines 28–60, 144–156; `_md-sys-typescale.scss` lines 245–255, 423 | VERIFIED-npm |
| `rounded-full` | `border-radius: calc(infinity * 1px)` | Tailwind CSS 4.3.3 | `dist/*.js` | VERIFIED-npm |
| "Fill on hover" button values | — | — | — | NOT FOUND |
| Circular "scroll" / "enter" button values | — | — | — | NOT FOUND. Closest verified relative: Cuberto's text-state cursor, an ≈82 px circle holding a 16 px label (§4.1). |
| `mix-blend-mode: difference` cursor | — | — | — | NOT FOUND. Verified relative: Cuberto `mix-blend-mode: exclusion` (§4.1). |

---

## 5. Texture and finishing

| Token | Value | Who | Source | Confidence |
|---|---|---|---|---|
| Animated grain overlay | source defaults: `grainOpacity: 0.1`, `patternWidth/Height: 100`, `grainDensity: 1`, `grainWidth/Height: 1`, `grainChaos: 0.5`, `grainSpeed: 20`, `animate: true`. The README's example uses `grainOpacity: 0.05`. | grained 0.0.2 (Sarath Saleem) | `npm pack grained` → `grained.js` lines 38–46; README lines 45–58 | VERIFIED-npm |
| SVG noise tokens | `--noise-1..5` = `feTurbulence type='fractalNoise'` with `baseFrequency` 0.005 / 0.05 / 0.25 / 0.5 / 0.75 (numOctaves 2 / 1 / 1 / 1 / 1, `stitchTiles='stitch'`). Paired filters `--noise-filter-1..5` = `contrast(300%) brightness(100%)` … `contrast(200%) brightness(1000%)`. | Open Props 1.7.23 | `src/props.gradients.js` lines 65–75 | VERIFIED-npm |
| Film grain (GLSL) | example `grainSize = 2.0` (`grain(texCoord, resolution / grainSize)`), offset coefficient `q` default **2.5**; blend tips recommend soft-light + luma-based reduction | **Matt DesLauriers**, glsl-film-grain 1.0.4 | `npm pack glsl-film-grain` → README | VERIFIED-npm |
| Vignette + grain background | `noiseAlpha: 0.25`, `grainScale: 0.005`, `smooth: [0.0, 1.0]`, `scale: [1, 1]`, `offset: [0, 0]`, `color1: #fff`, `color2: #283844` | Matt DesLauriers, three-vignette-background 1.0.3 | `npm pack three-vignette-background` → `index.js` lines 14–23 | VERIFIED-npm |
| Mesh gradient | Default preset: colors `#e0eaff, #241d9a, #f75092, #9f50d3`; `distortion 0.8`, `swirl 0.1`, `speed 1`, `grainMixer 0`, `grainOverlay 0`. Presets: **Purple** (`#aaa7d7, #3c2b8e`, distortion 1, swirl 1, speed 0.6), **Beach** (`#bcecf6, #00aaff, #00f7ff, #ffd447`, swirl 0.35, speed 0.1), **Ink** (`#fff, #000`, swirl 0.2, rotation 90) | Paper (paper.design), `@paper-design/shaders-react` 0.0.81 | `dist/shaders/mesh-gradient.js` lines 16–68 | VERIFIED-npm |
| Grain gradient | Default: `colorBack #000000`, colors `#7300ff, #eba8ff, #00bfff, #2a00ff`, `softness 0.5`, `intensity 0.5`, **`noise 0.25`**, `shape "corners"` | Paper | `dist/shaders/grain-gradient.js` lines 18–30 | VERIFIED-npm |
| 3D shader gradient | Built-in presets set `grain: "on"` in some and `"off"` in others; `pixelDensity: 1`; `fov: 45` | ShaderGradient (`@shadergradient/react` 2.4.20) | `dist/chunk-*.mjs` | VERIFIED-npm (mixed, low value) |
| `::selection` colours on award sites | — | — | — | **NOT FOUND** |
| Reduced-motion handling (finishing) | Lenis disables smoothing. Studio Freight marquee slows to 50 s. Studio Freight parallax is killed via `gsap.matchMedia('(prefers-reduced-motion: reduce)')`. | Lenis / Studio Freight | §3.1, §2.3, §2.7 | VERIFIED-npm |

---

## 6. Cross-reference patterns

The counts include only evidence in this file. The tallies use VERIFIED-npm plus REPORTED, and every count is labelled.

**Motion**

| Pattern | Count | Supporting |
|---|---|---|
| **`expo.out` / exponential ease-out as the "signature" ease** | **7 verified uses from 4 independent sources** | Cuberto cursor (0.55); Cuberto marquee ScrollerPlugin; Studio Freight cursor JS (0.6 s); Studio Freight cursor CSS (600 ms `--ease-out-expo`); Studio Freight Kinesis (1 s); Lenis default easing (expo-out curve); GSAP ScrollSmoother (`expo`) |
| `easeInOutExpo cubic-bezier(0.87, 0, 0.13, 1)` | 1 verified | Studio Freight accordion (300 ms) |
| `power4.out` | **0 verified** | Not found in any studio package |
| `power3` | 1 verified | GSAP's own quickTo pointer-follow example (0.8 s) |
| `cubic-bezier(0.76, 0, 0.24, 1)` | 1 (definition only) | Exists as easings.net easeInOutQuart; no verified studio use |
| `cubic-bezier(0.16, 1, 0.3, 1)` | 1 (definition only) | easings.net easeOutExpo; the shape matches Lenis' default curve |
| `lerp 0.1` smooth scroll | **2 verified + 1 inherited** | Lenis, Locomotive v4; Locomotive v5 is built on Lenis |
| Smooth-scroll time constant ≈ 0.8–1.2 s | 3 | Lenis 1.2 s (duration mode), ScrollSmoother 0.8 s, Locomotive scrollTo 1.0 s |
| Pointer-follow duration 0.55–0.8 s | 3 | Cuberto 0.55, Studio Freight 0.6, GSAP quickTo example 0.8 |
| Stagger 0.1 s | 4 doc examples | GSAP Flip ×2, @gsap/react ×2 |
| Stagger 0.15 s | 2 doc examples | ScrollTrigger.batch ×2 |
| Constant-speed marquee uses linear / `none` | **2 of 2 studios** | Studio Freight (5 s linear), Cuberto (`ease: 'none'`) |
| Marquee coupled to scroll | 2 studios | Studio Freight `scrollY*0.1`; Cuberto multiplier 0.5 + expo.out |
| Marquee content repeated or cloned, with clones `aria-hidden` | 2 | Studio Freight repeat 2 + aria-hidden; Cuberto clones |
| Explicit `prefers-reduced-motion` handling | 3 | Lenis, Studio Freight marquee, Studio Freight parallax |

**Cursors and buttons**

| Pattern | Count | Supporting |
|---|---|---|
| Custom cursor = filled circle following with expo.out | **2 of 2 studios** | Cuberto (48 px × 0.2), Studio Freight (40 px, opacity 0.4) |
| Cursor changes size over links | 2 of 2 | Both **shrink** (Cuberto 0.15, Studio Freight 0.5). Neither grows. |
| Cursor disabled on touch / no-hover devices | 2 | Studio Freight `(hover: none)`; Studio Freight Kinesis `isTouchDevice` (and @phucbm `disableOnTouch`) |
| Blend-mode cursor | 1 | Cuberto `exclusion` (not `difference`) |
| Pill radius (full) | 2 design systems | Material 3 9999px; Tailwind `calc(infinity*1px)` |

**Type sizing and fonts**

| Pattern | Count | Supporting |
|---|---|---|
| Sizes authored against a 1440 px desktop / 375 px mobile board, emitted in vw | 1 studio | Studio Freight |
| Fluid `clamp()` type | 1 studio | Locomotive |
| Text balancing on split lines | 1 studio | Active Theory (on by default) |
| Celebration typeface obtainable free | 3 families | **Unbounded** (PSF 10-year anniversary), **Brygada 1918** (Polish independence centenary), **Google Sans Flex / Google Sans** (Google brand face) |
| Celebration typeface commercial / exclusive | 20+ | Spotify Mix, Circular, Muller Next, ES Klarheit Grotesk, Suisse Int'l Mono, Gaya, Cigars, ABC Diatype, Blenny, Aktiv Grotesk, Matrix Script, Akzidenz-Grotesk, FF Daxline, Albra Text, Johnston100, etc. |
| A single font recurring across ≥2 independent celebration references | **0** | No font recurred in the evidence gathered this session. Akzidenz-Grotesk appears twice, but both come from Fonts In Use, one of them as the subject being celebrated. |

**Texture**

| Pattern | Count | Supporting |
|---|---|---|
| Grain / noise intensity in the 0.05–0.25 alpha range | 4 | grained 0.1 (README 0.05); three-vignette `noiseAlpha` 0.25; Paper grain-gradient `noise` 0.25; Open Props (contrast-boosted SVG noise, opacity left to the author) |

---

## 7. Excluded evidence and the re-run queue

### Excluded under the lead's GitHub rule

Sibling dossiers 01 and 06 contain site-level typography, motion and button values for award birthday sites and greeting microsites. Examples:
- fonts and stretched full-width titles on a Getty × Resn anniversary site;
- a pill CTA and party copy on Slosh Seltzer;
- Google Fonts and buttons on Google Santa Tracker.

Those values were obtained from GitHub-hosted code captures, so this dossier does not re-import them. The orchestrator can decide whether to accept them from those files directly. If they are accepted, every free family they name is already in the §1.5 availability matrix: Instrument Serif, DM Sans, Roboto Mono, Lobster, Google Sans.

### Re-run queue (if the search cap is raised)

1. `fontsinuse anniversary website typeface` and `site:fontsinuse.com birthday website`.
2. Awwwards site pages "Fonts" field for: Zero Studios Birthday Site, Blind Barber 10—Year, Five Years of -99, Ten Years Away, Xbox Museum, Happy Birthday ELLE.
3. `typewolf site of the day` + anniversary / birthday / celebration.
4. `codrops magnetic button tutorial` (strength / threshold values) and `codrops text reveal splittext stagger expo.out`.
5. `codrops custom cursor mix-blend-mode difference size`.
6. `Spotify Wrapped 2019 / 2020 / 2021 / 2023 / 2025 typeface`.
7. `YouTube 20th anniversary typeface`, `Apple 50 years typeface`, `Pokémon 25 logo typeface`, `Disney100 typeface Connor King`.
8. `Apple Invites fonts title styles`, `Partiful fonts list`.
9. `pangrampangram Awwwards Annual Awards 2021 font` (which family).
10. Pangram Pangram and Fontshare licence pages, to confirm the free-use terms of Neue Montreal, Satoshi and the others.

---

## 8. Obtainable-font shortlist

These fonts are both (a) used by a celebration, anniversary or brand reference found this session and (b) legally obtainable free. Each is VERIFIED on Google Fonts and fontsource.

| # | Font | Reference that used it (confidence) | Obtain | Licence | Notes for a NAME treatment |
|---|---|---|---|---|---|
| 1 | **Unbounded** (NaN) | **Project Space Festival 2024**, its **10-year anniversary** edition; the font used "throughout the 2024 edition" (REPORTED ×1, fontsinuse.com/uses/61621) | Google Fonts `family=Unbounded`; `@fontsource-variable/unbounded` | OFL-1.1 (VERIFIED-GF) | Variable wght 200–900: a weight sweep on "MUSTAFA" is possible (capability only; no verified usage). |
| 2 | **Google Sans Flex** (Google) | Google's brand typeface, "the next generation of Google's brand typeface", released free Nov 2025 (REPORTED, 4 outlets in 1 query). Google celebrates its own birthday every year (dossier 02). The Doodle font itself is NOT FOUND. | Google Fonts; `@fontsource-variable/google-sans-flex` | OFL-1.1 (VERIFIED, fontsource metadata) | The richest free axes: wght 1–1000, wdth 25–151, opsz 6–144, slnt, GRAD, ROND. |
| 3 | **Google Sans** (Google) | Google brand face ([bg]); not tied to a verified birthday use | Google Fonts; `@fontsource-variable/google-sans` | OFL-1.1 | Static-feeling UI companion to #2. |
| 4 | **Brygada 1918** | Revival made to celebrate **100 years of Polish independence** (2018) (REPORTED ×1) | Google Fonts; `@fontsource-variable/brygada-1918` | OFL-1.1 | Serif; ital + wght 400–700. A centenary-celebration serif. |
| — | Cormorant Garamond + Great Vibes (also Playfair Display, Dancing Script, Tangerine) | Invitation-genre blog convention only (REPORTED ×1). **Not an award or brand reference.** | Google Fonts / fontsource | OFL | Fallback only. Weak provenance. |

Not on the shortlist:
- **Spotify Mix** (Wrapped 2024): exclusive.
- **Circular**: commercial.
- **Waltograph** (Disney fan font): free but imitates Disney branding.
- The Fonts In Use birthday-invitation faces (Matrix Script, Blenny, Aktiv Grotesk, Akzidenz-Grotesk, FF Daxline, Gaya, Cigars, ABC Diatype, ES Klarheit, Suisse Int'l Mono, Muller Next): all commercial.
