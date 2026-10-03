# 04 — Celebrating ONE person: personal-recap storytelling & hero-portrait design

Research category: websites/experiences whose whole job is to make **one person the hero** (year-in-review "Wrapped" recaps, tributes, single-portrait editorial heroes).
Compiled: 2026-10-03. Purpose: evidence base for the "Happy Birthday, Mustafa" site. Every design decision downstream must cite a line in this file (or another research file).

---

## 0. Method, limits and confidence legend (read first)

**What was possible in this session**

| Channel | Status | Used for |
|---|---|---|
| WebSearch (search-result summaries) | Worked for 38 queries, then hit the session-wide cap ("200 of 200 WebSearch calls" — budget is shared with other agents in this session). | Spotify Wrapped (all years), Spotify 2018 microsite, GitHub Unwrapped background, Vucko, Rive, awards, scale. |
| Firecrawl | Failed: "Insufficient credits". | — |
| Direct HTTP fetch (curl) | Blocked for every non-GitHub site tested (itsnicethat, newsroom.spotify, wikipedia, awwwards, medium, rive.app, vucko.co, archive.org, archive.ph, remotion.dev, githubunwrapped.com …). | — |
| `git clone` of public GitHub repos + raw.githubusercontent.com | **Worked.** | **Primary-source reading of the actual production source code** of GitHub Unwrapped 2021, 2022 and 2023-2025; Mona Sans licence; a saved HTML snapshot + 3 independent copies of the original CSS/JS of dennissnellenberg.com. |
| Google Fonts CSS API | Worked. | Verifying which fonts are free on Google Fonts. |

**Confidence labels used on every field**

- **VERIFIED** — I read it myself in a primary source this session (production source code, licence file, an original-markup snapshot cross-checked against ≥2 independent copies), **or** it appeared consistently in ≥2 independent search results, at least one of them first-party (Spotify Newsroom / Spotify Engineering / Spotify Design / the agency).
- **REPORTED** — one search-result summary or one secondary source. Search summaries can hallucinate; treat as "probably true, cite with care".
- **NOT FOUND** — searched (or could not search) and found nothing reliable. Do NOT fill these in from taste.
- **MEMORY (unverified)** — the researcher's prior knowledge only; *not* confirmed by any source this session. Listed only as leads for a later verification pass. **Must not be used as evidence under the "no taste" rule until upgraded.**

Because of the search cap, the deep cards are: (A) Spotify Wrapped, every year 2015-2025; (B) GitHub Unwrapped 2021/2022/2023-25 (code-verified, the most precise data in this file); (C) Dennis Snellenberg's Awwwards portfolio as the canonical "single portrait + giant name" hero (markup/CSS/JS verified via snapshot + copies). Everything else in the brief (Apple Music Replay, YouTube Music Recap, Duolingo, Strava, Reddit Recap, Letterboxd, Kobe/Federer tributes, TIME POY, GQ MOTY, Shot on iPhone) is in §D as clearly-flagged leads with the exact searches still needed.

---

## A. SPOTIFY WRAPPED (franchise card)

### Spotify Wrapped — https://www.spotify.com/wrapped/ (in-app story experience; 2015-2018 also as web microsites)

- **Source pages** (all via search summaries unless noted):
  - https://en.wikipedia.org/wiki/Spotify_Wrapped
  - https://newsroom.spotify.com/2024-12-04/10-years-spotify-wrapped/
  - https://newsroom.spotify.com/2024-12-04/wrapped-user-experience-2024/
  - https://newsroom.spotify.com/2024-12-04/everything-you-need-to-know-about-your-music-evolution/
  - https://newsroom.spotify.com/2025-12-03/2025-wrapped-user-experience/
  - https://newsroom.spotify.com/2025-12-03/wrapped-marketing-campaign/
  - https://newsroom.spotify.com/media-kit/2025-wrapped-media-kit/
  - https://www.musicbusinessworldwide.com/spotify-wrapped-campaign-hit-200m-engaged-users-in-24-hours-a-19-yoy-increase/
  - https://techcrunch.com/2025/12/04/spotify-says-wrapped-2025-is-its-biggest-yet-with-200m-users-in-its-first-day
  - https://variety.com/2025/music/news/spotify-wrapped-breaks-own-record-250-million-engagements-1236603493/
  - https://www.pr-newsroom-wp.appspot.com/2023-06-22/spotify-wins-trio-of-awards-at-2023-cannes-lions/ (mirror of Spotify Newsroom)
  - https://newsroom.spotify.com/2024-06-21/thats-a-wrap-on-cannes-lions-2024-inside-the-awards-spotify-beach-action-and-more/
  - https://www.androidpolice.com/how-to-find-new-old-spotify-wrapped/ and its syndication https://tech.yahoo.com/streaming/articles/see-spotify-wrapped-playlists-2024-172357433.html
  - https://screenrant.com/spotify-wrapped-2022-rewatch-stories-slideshow-how/
  - https://www.howtogeek.com/how-to-find-spotify-wrapped-2024/
  - https://www.sportskeeda.com/us/music/spotify-2024-wrapped-new-features-everything-else-explored
  - https://trophy.so/blog/how-to-build-wrapped-feature (secondary, pattern description)
  - Year-specific sources are listed in each sub-card below.
- **Recognition / scale**
  - 2025 Wrapped: **200 million+ engaged users in the first 24 hours** (+19% YoY; 2024 needed 62 hours to reach 200M); **500 million+ shares in 24 hours** (+41% YoY). "Engaged" = viewed at least one story. — VERIFIED (MBW + TechCrunch + mi-3 + RouteNote + TechTimes all consistent).
  - 250 million engagements in < 3 days (2025). — REPORTED (Variety headline).
  - Cannes Lions 2023: **Gold Lion** for "2022 Spotify Wrapped On-Platform Experience" (category reported as personalised storytelling/experience) + **Bronze Digital Craft Lion** (Cross-Channel Storytelling) for 2022 Wrapped design. — REPORTED (Spotify newsroom mirror + LinkedIn "Gold Lion for Spotify Wrapped" post by Marie Ronn).
  - Cannes Lions 2024: **Bronze Lion, Creative Effectiveness**, for 2023 Wrapped On-Platform experience. — REPORTED.
  - "Spotify Wrapped and Spotify Island took home three Webby Awards and two Webby People's Voice Awards" (year not stated). — REPORTED.
  - 2018 microsite: Awwwards SOTD + FWA SOTD, 20M visitors day one — see 2018 sub-card.
- **Concept**: the user's own year of listening, told back to them as a sequence of full-screen data "stories", ending in shareable cards. Each year gets a brand-new visual identity; the format (story → stat → superlative → share) is constant. — VERIFIED.
- **Experience sequence (generic, in-app, 2019-2025)**
  1. Entry: "a big card on the Home tab that says 'Your 2024 Wrapped is here,'" which starts "an Instagram Story-like carousel of cards with music playing". — REPORTED (HowToGeek).
  2. Story slides, typical order (2024): minutes listened + "biggest listening day" → number of songs + #1 song → top 5 songs → number of artists + #1 artist (with listening streak in days and minutes) → (2024: "Your Music Evolution" phases; AI podcast) → summary. — REPORTED (AndroidPolice/Yahoo + Sportskeeda).
  3. End: "options to share your 2024 Wrapped, start it over from the beginning, or open your personalized Your Top Songs playlist." — REPORTED (AndroidPolice).
  4. 2025 adds: Listening Age; Top Albums; Fan Leaderboard; Wrapped Clubs ("match you to one of six unique listening styles"); Top Song Quiz (guess your #1 song before the reveal); Wrapped Party (live multiplayer comparison with friends); Top Songs playlist now shows exact play counts for top 100. "Nearly a dozen new personalized stories." — VERIFIED (Spotify Newsroom 2025 UX post + TechCrunch + SoundGuys + techlusive).
- **Signature interactions & mechanics**
  - Tap **right side = next**, tap **left side = back**, **tap-and-hold = pause**. — REPORTED (AndroidPolice/Yahoo; ScreenRant describes 2022 as a rewatchable "stories slideshow").
  - Segmented progress bar at top: one segment per slide; previous filled, current filling, next empty. — REPORTED (secondary description of the "Spotify-style" pattern; no first-party spec found). Exact auto-advance duration per slide: **NOT FOUND**.
  - (Note: a "left third = back, otherwise advance" rule surfaced in search, but it comes from an unrelated third-party GitHub PR, **not** Spotify. Do not attribute to Spotify.)
  - "**Share This Story**" button at the bottom of each card; shares a **static image** of the current card (not the video); Instagram Stories is the first share target and posts directly. — REPORTED (HowToGeek + rickyspears guide, consistent).
  - Format is **9:16 vertical** "perfectly sized for Instagram Stories and TikTok". — REPORTED (secondary).
  - Interactive quizzes (2020, 2025 Top Song Quiz), badges (2020). — VERIFIED (Spotify Design 2020 article summary + 2025 newsroom).
  - 2025: "data-as-interaction", e.g. "**Top Artist Sprint**", which visualises how your top artists shifted month by month. — REPORTED (Rive blog).
- **How the PERSON is featured**: Spotify never shows the user's photo (NOT FOUND in any year). The person is the hero through (a) second-person copy ("Your…", "You were…"), (b) giant personal numbers (minutes), (c) percentile superlatives ("top 0.5%"), (d) archetypes/identities (2021 Audio Aura colours, 2022 Listening Personality [MEMORY], 2025 Clubs, Listening Age), (e) their own music as the soundtrack.
- **Typography (franchise)**: Circular (Lineto) through 2023; "Circular AP Title Bold" named for 2022 (REPORTED, single source); **Spotify Mix** (bespoke, Dinamo, launched May 2024) used in Wrapped 2024 and 2025 (VERIFIED: Spotify Newsroom font launch + Dinamo + It's Nice That + Spotify 2025 design substack). Spotify Mix is proprietary/"exclusive" — **not licensable**. Details in 2024 sub-card.
- **Color palette (franchise)**: Spotify core brand **#1ED760** (green), **#191414** (black), **#FFFFFF** — REPORTED (brand-colour aggregator sites; not Wrapped-specific). Wrapped-specific hex codes: NOT FOUND for 2019-2025 (only named colours, see sub-cards). 2018 microsite hex: see below.
- **Motion (franchise)**: native iOS/Android animation (view/layer transforms, path manipulation, gradients, blurs) → Lottie introduced 2022 → "Lottie-first" 2023 (Lottie for brand visuals/high-keyframe; native for data-viz) → **Rive** for the whole motion layer in 2025 with data binding. Motion identity/system/toolkit by **Vucko** for 2024 and 2025. — VERIFIED (Spotify Engineering 2024-01 article + Rive blog + Vucko project pages + Creative Review).
- **Sound/music**: slides play the user's own top tracks ("a slide-by-slide presentation of the user's listening habits to the tune of familiar tracks from their 2024 listening experience"). — REPORTED (AndroidPolice).
- **Tech stack**: in-app native + Lottie/Rive (above). Back end (secondary blogs, low confidence): Kafka, Google Cloud Dataflow, BigQuery — REPORTED (non-Spotify blog). 2025 "Wrapped Archive" pre-generated ~1.4 billion personalised reports for ~350 million users using LLM narratives — REPORTED (Spotify Engineering 2026-03 "Inside the Archive" + InfoQ + ZenML summaries).
- **Copy & microcopy (verbatim)**
  - "Your 2024 Wrapped is here" (Home entry card). — REPORTED.
  - "You were in the top 0.005% of listeners globally." — REPORTED (single source: Yahoo explainer). Tier ladder "Top 1%" → "Top 0.5%" → "Top 0.1%" of an artist's listeners existed by 2020-2021. — VERIFIED (Republic World 2020 + Capital FM 2021).
  - "Your tastes and moods change throughout the year—and so does the music you listen to. This new data story reveals the musical phases that uniquely defined your year." (2024, Your Music Evolution). — VERIFIED (Spotify Newsroom).
  - 2021 Audio Aura: "The first one will be who you are, and the second one is what you reach for." — REPORTED (Esquire PH).
  - Button: "Share This Story". — REPORTED.

---

### A1. Spotify "Year in Music" (2015) and Wrapped 2016-2017 (web era)
- Source: https://en.wikipedia.org/wiki/Spotify_Wrapped ; https://econsultancy.com/spotify-2018-wrapped-personalised-data/ ; https://www.lurestudio.com.au/blog/the-rise-of-spotify-wrapped
- 2015 "Year in Music" microsite (top songs and genres); 2016 first "Wrapped", browser-only, announced by email; 2017 microsite "greeted with a colourful personalised quiz which walked them through their listening habits"; by 2017 **shareable graphics** for social. — REPORTED (Wikipedia + 2 blogs, consistent).
- Typography / colour / motion: NOT FOUND.

### A2. Spotify "Your 2018 Wrapped" web microsite — http://spotifywrapped.com (2018)
- **Source pages**: https://www.awwwards.com/sites/your-2018-wrapped ; https://www.awwwards.com/sites/your-2018-wrapped/mobile-excellence-report ; https://medium.com/active-theory/spotify-wrapped-2018-technical-case-study-5b7cfb7e9d3a ; https://workingnotworking.com/projects/155125-spotify-your-2018-wrapped ; https://www.behance.net/gallery/75636503/Spotify-2018-Wrapped ; https://www.oneclub.org/awards/theoneshow/-award/32814/your-2018-wrapped/ ; https://abduzeedo.com/color-inspiration-spotify-2018-wrapped ; https://fernandogr.net/fgrblog/spotify-wrapped-2018%E2%80%8A-%E2%80%8Atechnical-case-study-active-theory-medium/
- **Recognition**: Awwwards **Site of the Day** (score 7.66) and FWA **Site of the Day** — VERIFIED (Awwwards listing + workingnotworking). Awards lists differ by source: workingnotworking — ADC 2 Gold, 3 Bronze, 2 Finalist; D&AD 2 Wood Pencils, 1 Finalist; Clio 4 Silver, 1 Bronze. Behance — Cannes Lions 2 Bronze + 9 Finalist; One Show 3 Gold, 1 Silver, 1 Bronze, 1 Finalist. — REPORTED. Behance case: 9,092 appreciations / 100,180 views — REPORTED. **20 million+ visitors on day one**; Twitter's #1 global trending topic on launch day — VERIFIED (workingnotworking + Behance summaries agree).
- **Built by**: Active Theory (WebGL) with Spotify. — VERIFIED.
- **Concept**: "centered around two things — color and typography" (Active Theory). Colour = personalisation from listening data; typography = cinema ("animations giving the experience a **movie title sequence** feel"). — VERIFIED (Active Theory + Behance).
- **Experience**: a journey through "how they listened in 2018": stats, top artist, personalised playlists, "unexpected insights". — REPORTED.
- **How the person/hero is featured**: "Artist names and important stats appeared in **gigantic text** with **overlapping artist headshots in both solid and cutout form**." — REPORTED (Behance summary). "Large text that **fit perfectly to screen dimensions**" — VERIFIED (Active Theory case study, two summaries). This is the clearest verified precedent in this category for **"huge name lockup + cut-out portrait layered with it"**.
- **Typography**: family NOT FOUND (Spotify used Circular in this period — MEMORY).
- **Colour palette (Awwwards listing)**: **#2779A7, #FF9398, #ECD06F** — REPORTED (Awwwards via search summary, single source). "Dynamic color schemes" per user; "350 unique posters" from live image data analysis — REPORTED.
- **Motion / tech**: WebGL front end with 3D animations; text rendered as WebGL geometry ("the largest technical challenge was … text"); layout and transitions rendered "in their own scenes to their own render targets", a clone of the text mesh brought into the transition scene to line up exactly; localised to 21 languages (Active Theory) / 23 localised versions (workingnotworking) — discrepancy noted. Awwwards tags: Music & Sound, Animation, Colorful, Transitions, Data Visualization, Interaction Design, WebGL. — VERIFIED for WebGL/text approach; REPORTED for counts.
- **Sound**: Awwwards tag "Music & Sound" — REPORTED; specifics NOT FOUND.

### A3. Spotify Wrapped 2019 ("A decade wrapped")
- Sources: https://medium.com/throughdesign/spotify-2019-wrapped-a-design-masterstroke-1d06b27b0aec ; https://elements.envato.com/learn/spotify-wrapped-design-aesthetic
- Decade-long personal stories; new stats e.g. "speed of your sound", number of countries your artists come from. — REPORTED.
- Colour: "a green and a pink … uncommon **neon** shades" dominate, chosen so shared screenshots grab attention. — REPORTED. Hex NOT FOUND.
- Available on mobile app and desktop "with gorgeous animations and succinct data visualisation". — REPORTED.

### A4. Spotify Wrapped 2020
- Sources: https://medium.com/spotify-design/how-we-brought-2020-wrapped-to-life-in-the-mobile-app-4ed1b839ed23 (first-party) ; https://elements.envato.com/learn/spotify-wrapped-2024 ; https://www.republicworld.com/tech/apps/spotify-wrapped-2020-what-does-top-0-dot-5-and-top-0-dot-1-of-listeners-mean
- Visual centre: a **multi-colour brand gradient** with a **blur overlay** sized to the gradient — "larger gradients have an **80% blur**, smaller gradients have a **40% blur**" so colours stay bright on small screens. — VERIFIED (Spotify Design article, 2 summaries).
- Product design reused **text styles and animation curves from Spotify's "Encore" mobile design system**. — VERIFIED (same article). Exact curves NOT FOUND.
- Added quizzes, badges, stories; "reflected imagery, and animated color"; artist headshots. — REPORTED.
- Superlatives: top 0.5% / top 0.1% of an artist's listeners. — REPORTED.

### A5. Spotify Wrapped 2021 (Audio Aura)
- Sources: https://engineering.atspotify.com/2021/12/the-audio-aura-story-mystical-to-mathematical (first-party) ; https://www.esquiremag.ph/culture/music/spotify-wrapped-2021-audio-aura-a00304-20211202 ; https://screenrant.com/spotify-wrapped-audio-aura-meaning/ ; https://medium.com/designright/spotify-wrapped-2021-design-review-f735281494ba ; https://www.capitalfm.com/news/music/spotify-wrapped-top-05-percent/
- **Audio Aura**: two personal colours computed from mood tags of your songs, with aura reader Mystic Michaela; e.g. green = calm/analytical, pink = optimistic, orange = rebellious/bold, yellow = focused/motivated, blue = wistful. — VERIFIED (first-party engineering post title + 2 explainers).
- Layout: colourful **ribbon** carrying custom text "threaded through square-cropped images"; "typography chaos, word-art colour combos". — REPORTED.
- Copy: "The first one will be who you are, and the second one is what you reach for." — REPORTED.

### A6. Spotify Wrapped 2022 ("Self-expression and play" — monograms)
- Sources: https://www.itsnicethat.com/features/spotify-wrapped-campaign-identity-2022-graphic-design-301122 ; https://logos.fandom.com/wiki/Spotify_Wrapped ; https://kentortiz.com/Spotify-2022-Wrapped (designer portfolio, lead) ; https://lbbonline.com/work/108460 ; Cannes sources above.
- Monograms "the heart of the campaign": overlapping, interlocking shapes built on a **16 × 16 grid**, **48 design possibilities**, each combining square, spiky and soft round shapes (= diversity of listening). — VERIFIED (It's Nice That summary twice).
- "Jarring colors and shapes, **color-vibrating gradients**, **walls of text**, and playful interactivity." Type: **Circular AP Title Bold**. — REPORTED (single source for the font).
- First year with **Lottie** animations. — VERIFIED (Spotify Engineering).
- Recognition: Cannes Gold Lion + Bronze Digital Craft (above). — REPORTED.

### A7. Spotify Wrapped 2023 ("No grid, no rules")
- Sources: https://www.itsnicethat.com/features/spotify-wrapped-campaign-identity-2023-graphic-design-301123 ; https://the-brandidentity.com/interview/raw-playful-and-laced-with-a-chaotic-energy-we-dive-into-the-making-of-spotify-wrapped-2023 ; https://www.thedrum.com/news/2023/11/29/spotify-wrapped-2023-team-behind-much-anticipated-music-moment-share-their-story ; https://engineering.atspotify.com/2024/01/exploring-the-animation-landscape-of-2023-wrapped ; https://lbbonline.com/work/108461 ; https://newsroom.spotify.com/tag/me-in-2023
- Identity: chaotic, fluid, lo-fi, early-internet nostalgia — **pixelated artworks, warped shapes, "almost Word Art-esque"** feel; no symmetry; yet packaged as a layered toolkit where elements can be "dialled up and down". — VERIFIED (It's Nice That + The Brand Identity).
- Team: Rasmus Wängelin (global head of brand design); design directors Mariola Bruszewska and Bruno Borges; designers Erin Safreno, Melissa Miyamoto-Mills, Chris Cyran, Will Oswin. — REPORTED.
- Quote (Wängelin): "there's something about this year that felt especially chaotic in terms of how people consumed culture." — REPORTED.
- Animation tech: **Lottie-first**, plus native builds for data visualisations and interactions (view/layer transforms, path manipulation, textures, variables); Lottie for brand visuals and high-keyframe animations. — VERIFIED (Spotify Engineering, 2 summaries).
- "Me in 2023" personal feature; "listening characters"/"Sound Town" — REPORTED (newsroom tag + a Kapwing URL slug only).

### A8. Spotify Wrapped 2024 ("Reinvention and evolution" — 10th anniversary)
- Sources: https://www.itsnicethat.com/features/spotify-wrapped-2024-graphic-design-041224 ; https://newsroom.spotify.com/2024-12-04/10-years-spotify-wrapped/ ; https://elements.envato.com/learn/spotify-wrapped-2024 ; https://www.fastcompany.com/91239913/spotify-wrapped-2024-music-evolution ; https://vucko.co/project/wrapped-2024 ; https://fontsinuse.com/uses/63891/spotify-2024-redesign ; https://newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/ ; https://abcdinamo.com/news/spotify ; https://www.creativeboom.com/news/dinamo-unveils-a-new-custom-typeface-for-spotify/ ; https://www.creativebloq.com/news/spotify-font-design ; https://alexjimenezdesign.substack.com/p/three-design-elements-that-made-spotify
- Concept: pop culture "thrives in a beautiful cycle of reinvention"; art direction that "**loops, transforms**". — VERIFIED (newsroom + It's Nice That).
- **Typography as the main graphic element**: Spotify Mix used in Wrapped for the first time — "a bolder, dynamic and more unique typographic presence", ranging "from **ultra-bold** line weights to **condensed, skinny** lettering"; the type is looped and transformed across the canvas; giant looping "**hyperloops**" of the numerals **2** and **4** "propel us forward in vivid technicolor". — VERIFIED (newsroom + It's Nice That + Envato).
- **Spotify Mix** facts: by **Dinamo** (Berlin) with Spotify In-House Creative; ~18 months' work; launched May 2024; replaces Circular (incl. in the wordmark); **variable** (large weight and width range; weight/slant/width/height adjustable), alternates, **three sets of numerals**, **almond-shaped counters** in p/d/g alluding to sound waves; "sharp flicks of humanist strokes" + "smoother curves found in grotesque letters". Licence: exclusive/bespoke — not available. — VERIFIED (Dinamo + Creative Boom + Spotify newsroom + It's Nice That TikTok).
- Colour: "**blood red, neon pink, and canary yellow**", "distinctly more dramatic", mix of vibrant gradients and solid colours. — VERIFIED (Envato + It's Nice That summaries). Hex NOT FOUND.
- Motion: "bold, looping animations"; motion identity, system, guidance and toolkit by **Vucko**. — VERIFIED.
- Features: Your Music Evolution (phases), personal AI podcast. — VERIFIED.
- Scale: 200M engaged users took 62 hours. — VERIFIED (MBW).

### A9. Spotify Wrapped 2025 ("visual mixtape")
- Sources: https://spotifynews.substack.com/p/designing-2025-wrapped-turning-a ; https://www.fastcompany.com/91451332/spotify-wrapped-2025-goes-analog-in-the-age-of-ai ; https://elements.envato.com/learn/spotify-wrapped-design-aesthetic ; https://newsroom.spotify.com/media-kit/2025-wrapped-media-kit/ ; https://rive.app/blog/spotify-used-rive-for-spotify-wrapped-2025 ; https://vucko.co/project/wrapped-2025/ ; https://www.creativereview.co.uk/vucko-motion-design-brand-identity-etsy-spotify-wrapped/ ; https://60fps.design/shots/spotify-2025-wrapped-highlights-transition-text-animation ; https://60fps.design/shots/spotify-2025-wrapped-top-album-podcast-transition ; https://60fps.design/shots/spotify-2025-wrapped-badge-reveal-animation ; https://newsroom.spotify.com/2025-12-03/2025-wrapped-user-experience/ ; https://techcrunch.com/2025/12/03/spotifys-2025-wrapped-becomes-a-multiplayer-experience
- Concept: 1980s-90s audio culture — **mixtapes, doodled cassette inserts, club flyers, zines**; "a collage, with every element feeling like it's forming in real time … type dancing like sound waves"; "bold, layered, textured". Leads: Jeremy Wirth (Global Executive Creative Director), Rasmus Wängelin (Head of Brand Design). "Most expressive Wrapped yet"; "tension between chaos and clarity". — VERIFIED (Spotify substack + Fast Company + Envato).
- Colour: "black-and-white world of mixtape culture, with **selective pops of colour used only for key moments**" so artist imagery stands out; palette named **black, white, green, red**. — VERIFIED (Spotify substack + Envato). Hex NOT FOUND.
- Texture/type: **grunge textures**; "condensed italic fonts with a retro-style outline"; Wrapped logos rendered in "popping 3D textures". — REPORTED (Envato).
- Motion: all animations made in **Rive** following Vucko's motion guidelines; **data binding** generates millions of personalised versions with **no pre-rendered video**; designers prototype with dummy data, engineers bind real data; system survives text-length variation, localisation, device constraints. — VERIFIED (Rive blog + Vucko).
- Observed animation details (60fps.design recordings by Hemesh Singh) — REPORTED:
  - Advancing: "the current text **slides upward and fades out**, while the next screen's content … **slides up from the bottom with a pronounced springy bounce**"; background illustrations (geometric dots, abstract lines) "animate in with **subtle offsets**".
  - "High-contrast text **scaling up and filling**, **staggered grid reveals** of artist cards, **rotating geometric transition masks**, horizontal carousels with **springy snapping** physics, and **hand-drawn vector illustrations** that animate into place."
  - Badge reveal: "a hand-drawn **white spiral draws itself** on a dark background … morphs into a colorful, circular character badge that **scales up with a springy overshoot**."
- Scale: 200M engaged users / 24 h; 500M shares / 24 h. — VERIFIED.

---

## B. GITHUB UNWRAPPED (Remotion × For One Red) — code-verified

### GitHub Unwrapped 2023 → 2025 edition — https://www.githubunwrapped.com
- **Source pages**
  - PRIMARY (read directly): `git clone https://github.com/remotion-dev/github-unwrapped` (branch `main`, commit `ece8397`, 2026-04-06; `YEAR_TO_REVIEW = 2025`; README: "2024: main branch, 2023: 2023 branch"). Files cited: `remotion/Main.tsx`, `remotion/Opening/*.tsx`, `remotion/Noise.tsx`, `remotion/font.ts`, `remotion/planets.ts`, `remotion/EndScene/*.tsx`, `remotion/StarsGiven/AmountOfStarsDisplay.tsx`, `remotion/Contributions/*.tsx`, `remotion/Gradients/available-gradients.ts`, `remotion/TopLanguages/Pane.tsx`, `remotion/Root.tsx`, `types/constants.ts`, `src/config.ts`, `vite/**`.
  - PRIMARY: Remotion docs source (`remotion-dev/remotion/packages/docs/src/data/showcase-videos.tsx`, `docs/resources.mdx`).
  - PRIMARY: `github/mona-sans` LICENSE + README; Google Fonts CSS API.
  - Search: https://githubunwrapped.com/about ; https://github.com/remotion-dev/github-unwrapped-2022 ; LinkedIn posts by Jonny Burger.
- **Recognition**: listed in Remotion's official showcase ("A year-in-review video campaign for GitHub, where each user gets a personalized video") — VERIFIED. README: "We thank GitHub and For One Red for their support in realization and promoting of this project." — VERIFIED. 2021 edition served "more than 10,000 GitHub users" — REPORTED (Jonny Burger LinkedIn summary). Scale strategy: MongoDB render locks + renders spread across multiple AWS regions/accounts "to allow thousands of people to render their video at the same time" — VERIFIED (README).
- **Credits**: Design — For One Red; Music — SmartSound (licensed); Font — Mona Sans by GitHub. — VERIFIED (README) / REPORTED (About page credits list via search).
- **Concept**: your coding year as a **space voyage**: you pick a rocket, fly past "planets" that are your top languages, and land on a planet whose type is your tier. The video speaks in **first person** ("This is my #GitHubUnwrapped") so the user can post it as their own.
- **Experience sequence — website** (VERIFIED from `vite/`):
  1. Landing box: label "#GitHubUnwrapped" (18 px, gradient text); title "**Your coding year in review**" (32 px / 700 mobile; 44 px / 900 at ≥ 40em; gradient text `linear-gradient(90.02deg, var(--pane-text) 80.63%, #000 99.87%)`); description "Get a personalized video of your GitHub activity in 2025. Type your username to get started!"; button "**Unwrap**"; link "Want to include private activity?" → "Sign in with GitHub". Links: "Source Code", "About this project".
  2. Loading state: "**Unwrapping...**". Error: "Incorrect user name".
  3. Video page: in-browser Remotion Player of the personalised video + sidebar. Modal "**Choose your rocket**" (3 colour themes: blue / orange(red) / yellow(gold)).
  4. Render: "Initializing Render..." → "Generating Video... (N%)" → "Download".
  5. Share actions: "**Post #GitHubUnwrapped**" (X), "Share on LinkedIn", "**Download story (image)**", "Copy Example Description" → copies "**This is my #GitHubUnwrapped! Get your own: https://githubunwrapped.com**" (button flips to "Copied" for 1500 ms), "Unwrap another user", "Unlock private metrics".
- **Experience sequence — the video** (VERIFIED from `remotion/Main.tsx`; canvas **1080 × 1080, 30 fps**; scenes overlap by a few frames):
  1. **Opening** — 130 frames (4.3 s), 10-frame overlap out. Camera **zoom-out**: scale 2.5 → 1 driven by `spring({damping: 200, durationInFrames: 60, delay: 10})` plus a slow linear drift. Background gradient `blueRadial = linear-gradient(180deg, #060842 0%, #474280 50%, #396A91 100%)` + dot-noise texture. A frosted "pane" title card rises from the bottom (`spring` delay 50, 60 frames, damping 200) and swings `rotateY` −10° → +10° over frames 60-120. Inside: the **user's avatar** (160 × 160, radius 30, 2 px border rgba(255,255,255,.1)) **flips in** with `rotateY(π → 0)` (default spring, delay 50, backface hidden); text "This is my **#GitHubUnwrapped**" (40 px) over the **username at 80 px bold, gradient-clipped** `linear-gradient(270.02deg, black 10.63%, #01064A 50.87%)`; username scaled to 0.75 if longer than 18 chars. Pane background `#E6E1FC` at 80% opacity; a pink highlight fades in (delay 70). Rocket takes off with `rocket-launch.mp3`; exit = pane flies at the camera (`scale(1/distance)`) while mountains drop 500 px.
  2. **Top languages** — 1-3 planets; title "My Top Languages" (55 px); landscape caption "Explore your planets"; numbers 50-74 px.
  3. **Issues** — "Opened issues" / "Closed issues".
  4. **Stars & productivity** — giant **seven-segment counter** of repos starred, **font-size 900 / 800 / 600 / 500 px** for 1 / 2 / 3 / 4+ digits on `#0A111B`, white, counting up; label "Repos starred"; tablet scene with "**Most productive day**" and "**Most productive time**" (wheel numerals 65 px); pull-request merge number 80 px.
  5. **Contributions** — 7.5 s on black: contribution-grid animation; "Contributions" total and "**Longest streak**"; numbers 40 px / 500 with `font-variant-numeric: tabular-nums`, labels 20 px / 500.
  6. **End scene** — 7.5 s: rocket lands on the user's **tier planet**; CTA pill (Octocat icon 120 px, radius pill-left/20 px-right, 2 px border rgba(255,255,255,.2)) with "**Get your Year in Review**" (30 px / 500) + "**GitHubUnwrapped.com**" (50 px bold), gradient-clipped per planet; CTA scales in from distance 10 → 1 and out to 0.1.
- **Superlative/tier logic** (VERIFIED, `src/config.ts`): total contributions > 5000 → **Gold** planet; > 2400 → **Silver**; > 500 → **Fire**; > 25 → **Leafy**; else **Ice**. Tier colours (CTA gradient / text / background):
  - Gold `linear-gradient(270.02deg, #AD8C52 20.63%, #F7E99A 99.87%)` / `#F7E99A` / `#291C0B` (+ `gold-gradient-bg.png`)
  - Silver `#bbb → #fff` / `#fff` / `#262626`
  - Fire `#ad5d52 → #f7a69a` / `#f7a69a` / `#290700`
  - Leafy `#54ad52 → #9af7bf` / `#9af7bf` / `#002101`
  - Ice `#91AAD4 → #9ac4f7` / `#9ac4f7` / `#1C2056`
- **How the PERSON is featured**: avatar photo as a small rounded-square "portrait" next to the name, revealed by a **3D card flip**; the **name (login) is the largest text in the opening (80 px on a 1080 canvas ≈ 7.4% of width)**; first-person ownership; tier planet as personal badge; giant personal numbers (stars counter up to 900 px).
- **Typography** (VERIFIED): **Mona Sans** variable (`weight 200 900`, `stretch 75% 125%`) loaded from woff2 — free, **SIL OFL 1.1**, "designed together with Degarism … inspired by industrial-era grotesques", axes wdth/wght/opsz/ital; **available on Google Fonts** (`Mona Sans:wdth,wght@75..125,200..900` returns 200). Display numerals: **"Seven Segment"** TTF. Inter used in the Tips UI.
- **Colour palette** (VERIFIED): video base `#060842`; opening gradient `#060842 / #474280 / #396A91`; pane `#E6E1FC` (+ `d8` alpha on web), pane text `#01064A`, web input `#2980DC`, separator `#BFBAEC`; landing label gradient `#645278 → #82B6C6`; star scene `#0A111B`; other gradients: `glow radial-gradient(circle, #e0ff5e 0, #3b6dd1 30%, #0086d4 50%, #021d57 65%, #01194a 100%)`, `purpleRadial #381945`, `pink #484C7A`; noise dot palette `#15466C #808080 #615955 #726455 #7CA2C3 #A1C2C0 #AAA8A8 #1C394A #3B6773 #465B79`.
- **Texture** (VERIFIED, `Noise.tsx`): a procedural "noise" layer of **sparse round dots** on a 15 px grid wherever `noise2D > 0.9`; dot size ≤ 6 px, opacity 0.6-1.05, colour from the 10-colour palette. (This is a starfield-like dot noise, *not* film grain.)
- **Motion** (VERIFIED): Remotion `spring()` almost everywhere with `damping: 200` (critically damped, no overshoot) and explicit `durationInFrames` 20-60; default-config spring (with overshoot) only for the avatar flip; `interpolate` for linear drifts; camera "fly-through" via `scale(1/distance)`. Landing page: planet floats on a 15 s linear infinite loop with cosine y-offset (radius-y = 20 px) using CSS `@property --progress`; stars blink 3 s alternate; button shine `opacity .5s` transition.
- **Sound** (VERIFIED): soundtrack chosen by rocket theme (blue / red / gold folders); file length picked to match the video, **24 s to 56 s in 2-second steps**; launch SFX in opening; extra `landing.mp3` sting over the last 230 frames (desktop only). SmartSound licence.
- **Tech stack** (VERIFIED): Vite 5 + React web app; Remotion for video; Remotion Lambda on AWS (multi-region, multi-account); MongoDB cache/locks; GitHub GraphQL API; Sentry; Discord monitoring; deployed on Render. Share images: Remotion `<Still>` compositions — **IG story 1036 × 1973**, story content 600 × 900, OG image.

### GitHub Unwrapped 2022 edition (festive) — https://github.com/remotion-dev/github-unwrapped-2022
- PRIMARY: cloned repo (`remotion/theme.tsx`, `remotion/font.ts`, scene files). VERIFIED unless stated.
- Canvas 1080 × 1080, 30 fps. Christmas/gift metaphor: gift box opens on "This is my #GitHubUnwrapped"; Santa hat, snow, socks, tree, sun/moon, rough (hand-drawn, rough.js) circles/ellipses.
- **User-chosen colour theme** (each with its own music track):
  - "Candy Dream": main `#e74b3c`, accent `#900`, background `#FFE3CA` (default)
  - "Funky Gold": `#DAA520`, `#C97723`, `#f7f1de`
  - "Icy Winter": `#4185de`, `#233DC9`, `#e0f2fc`
- Type: Mona Sans Medium (500), Bold, ExtraBold (OTF).
- Verbatim copy: "I crafted N commits and M pull requests." / "Here are some sweet ones." · "My top languages of 2022" · "[Weekday] is my most productive day." · "N … to be exact!" · "Issues opened this year." / "I've got no complaints!" · loading "Wrapping..." · end card "Get your #GitHubUnwrapped" / "Want to know your own stats?" + "GitHubUnwrapped.com" · promo "A personalized video just for you", "Your coding highlights", "3 festive themes".

### GitHub Unwrapped 2021 edition (Jonny Burger, "built in a weekend") — https://github.com/remotion-dev/github-unwrapped-2021
- PRIMARY: cloned repo (`remotion/Main.tsx`, `TitleCard.tsx`, `src/palette.ts`, scenes). VERIFIED.
- Canvas 1080 × 1080, 30 fps; single soundtrack `the-librarian.mp3`; font "**Jelle**" (Jellee Bold woff2; licence NOT FOUND).
- Palette: base `#124F01` (deep green); background = `lighten(0.75)` of base (pale green); line `lighten(0.82)`; accents ORANGE `#EA2027` (actually red), BLUE `#1B1464`, PINK `#D980FA`; contribution bg `#DAFED0`, `#2da44e`, `#986ee2`.
- **Portrait-as-medallion title**: user's avatar 450 × 450 circle inside a white ring (24 px padding, 10 px border in background colour, `0 0 40px` soft shadow), with a white band across the bottom reading "**2021**" (80 px bold) — it scales 0 → 1 (`spring` mass 2, damping 200); at frame 60 the whole card **flips vertically** (scaleY 1 → −1) and its back reads "**This is my #GitHubUnwrapped**" (80 px bold).
- Scene list (frames @30 fps, each overlapping −25 frames via a Transition wrapper): Title 130 → "**Out of all the languages out there...**" 120 (90 px) → top language 120 → contributions 260 (headline by thresholds: < 10 "2021 was chill! Just look at my commits:", < 100 "I made a few contributions...", < 1000 "I made lots of contributions!", else "**I made tons of contributions!**"; then the total as a **200 px count-up** with "**to be exact!**" 36 px) → issues 220 ("N issues opened", "M are still open") → top weekday 120 ("**Wednesday was my most productive day.**"; zero case "I'm rather outside than in front of the screen.") → end card 85 ("**Wonder how you'll compare?**"; zero-commit joke "Actually, everything is on GitLab.") → end card 2: 150 ("Get yours at" + "githubunwrapped" **letter-by-letter, 4-frame stagger** + ".com").

---

## C. SINGLE-PORTRAIT + GIANT-NAME HERO (Awwwards portfolio)

### Dennis Snellenberg — Freelance Designer & Developer — https://dennissnellenberg.com
- **Source pages**
  - Saved snapshot of the original homepage HTML (keeps the original's comment "This site was created by Dennis Snellenberg (Code by Dennis)", canonical `https://dennissnellenberg.com`, asset URLs on dennissnellenberg.com): https://github.com/kostpant/WEBSITE-PORTOFOLIO-MINE (`index.html`, `*_original.html`).
  - Original stylesheets as copied into third-party repos (values cross-checked; identical in ≥ 2 copies): `style-new.css` and `styleguide.css` from https://github.com/prashantzzz/Portfolio , https://github.com/zdawan/dharshan.github.io , https://github.com/MattiaIppoliti/mattia.app (modified copy, used only where it agrees).
  - Original JS (`index-new.js`) as copied in https://github.com/prashantzzz/Portfolio and https://github.com/Soyvor/Freelance-port (identical marquee code).
  - Recognition claims: README of https://github.com/Sachinmehar21/Dennis-snellenberg-site-React ("an Awwwards Site of the Day") and https://github.com/SyeddHassan/Glint ("award-winning … Awwwards-winning").
- **Recognition**: Awwwards Site of the Day — REPORTED (two third-party READMEs; Awwwards page itself not reachable). Widely cloned (GitHub code search: 79 files match its hero CSS selectors; 75 match its marquee JS) — VERIFIED (count from search).
- **Concept**: the person IS the hero: a full-bleed portrait photo with the person's **full name set enormous across the bottom, scrolling as an endless marquee** over the photo.
- **Experience sequence** (VERIFIED from snapshot + copied JS)
  1. Preloader: dark curtain shows greetings flashing one after another — "Hello · Bonjour · स्वागत हे · Ciao · Olá · おい · Hallå · Guten tag · Hallo" (each shown for ~0.15 s via GSAP `stagger: .15`, `duration: .01`); words container fades/rises in (`duration .8, y: -50, Power4.easeOut, delay .5`). Curtain exits upward (`top: -100%`, `.8 s Power4.easeInOut`) while a **rounded bottom edge** collapses (`height 0vh`, 1 s Power4.easeInOut). Cursor set to `wait` during load.
  2. Hero content rises in: `main .once-in` from below to `y: 0vh`, `duration 1.5, stagger .07, Expo.easeOut`.
  3. Hero layout: section `home-header theme-dark`, `min-height: 115vh`, background `var(--color-gray)` = **#999D9E**; portrait `img` full height, centred (`left 50%, translateX(-50%)`, `object-fit: cover`) inside `.personal-image` (top −10%, height 110%) with **Locomotive Scroll parallax `data-scroll-speed="-3"`**.
  4. Left: "hanger" badge "Located / in the / Netherlands" with an animated wire-frame **globe** (CSS circles). Right: arrow icon + h4 "Freelance / Designer & Developer".
  5. **Big name**: `<h1>Dennis Snellenberg <span class="spacer">—</span></h1>` in `.big-name` positioned `bottom: 15vh`, colour `var(--color-white)` (#FFFFFF), `line-height: 1`, **`font-size: max(9em, 15vw)`** (fallback 17.5vw), `white-space: nowrap`, `pointer-events: none`; spacer `padding: 0 3vw`.
  6. Marquee: GSAP timeline clones the name and animates `xPercent: -100` in a seamless loop, **`duration: 18` s, `ease: "none"`, `repeat: -1`**; a ScrollTrigger flips `timeScale` to −1/+1 when the **scroll direction changes** (name runs the other way when you scroll up). Plus Locomotive `data-scroll-direction="horizontal" data-scroll-speed="4"` on the name row.
  7. Below: intro "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge." + round **magnetic** button "About me" (`data-strength="100" data-strength-text="50"`); nav links are magnetic too (`data-strength="20" data-strength-text="10"`).
- **Typography** (VERIFIED via copies): **Neue Montreal** (Pangram Pangram; commercial/free-for-personal licence — MEMORY) declared as family "Dennis Sans" in weights **300, 450, 800** (+ italics); base `font-weight: 450` for headings/text; the original preloads `NeueMontreal-Regular.otf`.
- **Colour tokens** (VERIFIED, identical in 2 copies): `--color-dark #1C1D20`, `--color-dark-dark #141517`, `--color-light #FFFFFF`, `--color-blue #455CE9`, `--color-blue-dark #334BD3`, `--color-gray #999D9E`, `--color-lightgray #E9EAEB`, `--color-border rgba(28,29,32,.175)`, `--color-border-solid #D2D2D2`, `--color-border-light rgba(255,255,255,.2)`, `--color-text #1C1D20`.
- **Motion tokens** (VERIFIED): `cubic-bezier(.7, 0, .3, 1)` at **.3 s (fast) / .5 s (primary) / .7 s (smooth) / .9 s (slow)**; spacing `--gap-padding: clamp(1.5em, 4vw, 2.5em)`, `--container-padding: clamp(2.5em, 8vw, 8em)`, `--section-padding: clamp(5em, 21vh, 12em)`.
- **Tech stack** (VERIFIED from markup/JS): GSAP + ScrollTrigger, Locomotive Scroll (`data-scroll-container`), Barba.js page transitions (`data-barba`), magnetic buttons.
- **Copy**: title "Dennis Snellenberg • Freelance Designer & Developer"; meta "Helping brands thrive in the digital world. Located in The Netherlands." — VERIFIED (snapshot).

---

## D. Leads NOT verified this session (search budget exhausted) — MEMORY only

Do **not** treat any line here as evidence until a search confirms it. Each lead lists what to confirm.

| # | Reference | What the researcher believes (MEMORY) | Searches still needed |
|---|---|---|---|
| D1 | Apple Music Replay — replay.music.apple.com and in-app Replay | Web dashboard (since 2019) of top songs/artists/albums and minutes; later in-app story-like "highlight reel" with milestones. | "Apple Music Replay 2024 highlight reel design story", "Apple Music Replay milestones copy". |
| D2 | YouTube Music Recap | Story-card recap with top artists/songs, later "music personality"-style cards and shareable images. | "YouTube Music Recap 2024 design story cards". |
| D3 | Duolingo Year in Review | In-app story recap with Duo mascot animations, "top X% of learners", shareable cards; Duolingo is a heavy Rive user. | "Duolingo Year in Review 2024 design Rive top percent copy". |
| D4 | Strava Year in Sport | Personalised recap (video/story) of the athlete's year with totals and shareable cards. | "Strava Year in Sport 2024 recap design". |
| D5 | Reddit Recap | Story recap from 2022; 2023 added a personal "ability card" (trading-card style, shareable). | "Reddit Recap 2023 ability card design". |
| D6 | Letterboxd Year in Review | Per-member stats page (films, hours, top films posters) + editorial annual review. | "Letterboxd year in review member stats page design". |
| D7 | Nike × Kobe Bryant tributes ("Mamba Forever") | Nike tribute communications after Jan 2020; a later "Mamba Forever" film/creative. | "Nike Mamba Forever Kobe tribute website", "Nike Kobe tribute ad 2020". |
| D8 | Roger Federer retirement tributes (2022) — Rolex, Uniqlo, Wilson, ATP | Brand "Thank you, Roger" style tributes. Unclear which had microsites. | "Thank you Roger Federer tribute website Rolex Uniqlo 2022". |
| D9 | Rafael Nadal / Messi / Serena / Brady / LeBron tribute pages | Brand/league farewell pages (e.g. Nike "Thank you" tributes). | One query per athlete + "tribute microsite". |
| D10 | TIME Person of the Year digital package | Red-border portrait cover; long-form digital feature with large portrait photography. | "TIME Person of the Year 2023 digital cover design web package". |
| D11 | GQ / Esquire Men of the Year digital covers | Portrait-led covers, motion/video covers online. | "GQ Men of the Year digital cover motion". |
| D12 | Apple "Shot on iPhone" portrait features | Portrait-mode photo campaigns presented full-bleed with minimal type. | "Apple Shot on iPhone portrait campaign website". |
| D13 | Apple homepage tribute to Steve Jobs (5 Oct 2011) | Homepage replaced by a single full-bleed **black-and-white portrait** with "Steve Jobs 1955–2011". The strongest single-portrait tribute precedent if confirmed. | "apple.com homepage October 2011 Steve Jobs tribute portrait". |
| D14 | Google Doodles for a person's birthday | "Today's Doodle celebrates [Name]'s [N]th birthday" — illustrated portrait integrated with the Google logo. Direct birthday precedent if confirmed. | "Google Doodle celebrates birthday portrait illustration". |
| D15 | Spotify brand duotone imagery (Collins, 2015) | Spotify's duotone photo treatment came from the 2015 brand refresh. Only lead for **duotone portraits**. | "Spotify duotone brand identity Collins 2015". |

---

## E. Editorial single-portrait patterns: evidence check

| Pattern requested | Verified/reported instance in this research | Status |
|---|---|---|
| Huge name lockup over/behind the portrait | Dennis Snellenberg: white name at `max(9em,15vw)` across the bottom of a full-bleed portrait, endless 18 s marquee (VERIFIED). Spotify 2018: "gigantic text with overlapping artist headshots in solid and cutout form" (REPORTED). GitHub Unwrapped: username 80 px next to the avatar (VERIFIED). | FOUND (3) |
| Portrait reveal by 3D flip | GitHub Unwrapped 2023+ avatar `rotateY(π→0)`; 2021 medallion flips (scaleY 1→−1) to the title. | FOUND (2, VERIFIED) |
| Camera zoom ("Ken Burns"-like) | GitHub Unwrapped opening zoom-out 2.5→1 (spring 60 frames); CTA fly-in from distance 10. | FOUND (1 franchise, VERIFIED) |
| Scroll parallax on the portrait | Dennis Snellenberg portrait `data-scroll-speed="-3"`, image box 110% tall. | FOUND (1, VERIFIED) |
| Scroll-**scrubbed** portrait reveal | none | NOT FOUND |
| Duotone portrait | none verified (lead D15) | NOT FOUND |
| Halftone portrait | none (closest: Spotify 2023 "pixelated artworks", REPORTED) | NOT FOUND |
| Grain / noise / texture overlay | GitHub Unwrapped dot-noise layer (VERIFIED); Spotify 2025 "grunge textures" (REPORTED); Spotify 2020 blurred gradient 80%/40% (VERIFIED). True film grain: NOT FOUND. | PARTIAL |
| Magazine-cover layout | none verified (leads D10, D11) | NOT FOUND |
| Portrait as a medallion/badge | GitHub Unwrapped 2021 avatar in white ring with "2021" band (VERIFIED). | FOUND (1) |

---

## F. Verbatim copy bank (person-as-hero lines)

| Line | Source | Confidence |
|---|---|---|
| "This is my #GitHubUnwrapped" | GitHub Unwrapped 2021, 2022, 2023+ opening | VERIFIED |
| "This is my #GitHubUnwrapped! Get your own: https://githubunwrapped.com" | GitHub Unwrapped share text | VERIFIED |
| "Your coding year in review" / "Get a personalized video of your GitHub activity in 2025." / "Type your username to get started!" | GitHub Unwrapped landing | VERIFIED |
| "Unwrap" / "Unwrapping..." / "Wrapping..." | GitHub Unwrapped 2023+ / 2022 | VERIFIED |
| "Choose your rocket" | GitHub Unwrapped 2023+ | VERIFIED |
| "Out of all the languages out there..." | GitHub Unwrapped 2021 | VERIFIED |
| "I made tons of contributions!" … "to be exact!" | GitHub Unwrapped 2021 | VERIFIED |
| "Wednesday was my most productive day." | GitHub Unwrapped 2021 (template "[Weekday] was my most productive day.") | VERIFIED |
| "I crafted N commits … Here are some sweet ones." | GitHub Unwrapped 2022 | VERIFIED |
| "I've got no complaints!" | GitHub Unwrapped 2022 (zero issues) | VERIFIED |
| "Wonder how you'll compare?" / "Want to know your own stats?" | GitHub Unwrapped 2021 / 2022 end cards | VERIFIED |
| "Get your Year in Review" + "GitHubUnwrapped.com" | GitHub Unwrapped 2023+ end CTA | VERIFIED |
| "Most productive day" / "Most productive time" / "Longest streak" / "Repos starred" | GitHub Unwrapped 2023+ stat labels | VERIFIED |
| "Download story (image)" / "Post #GitHubUnwrapped" / "Unwrap another user" | GitHub Unwrapped share UI | VERIFIED |
| "Your 2024 Wrapped is here" | Spotify Home entry card | REPORTED |
| "You were in the top 0.005% of listeners globally." | Spotify Wrapped | REPORTED |
| "Top 1%" / "Top 0.5%" / "Top 0.1%" of an artist's listeners | Spotify Wrapped 2020-21 | VERIFIED |
| "Your tastes and moods change throughout the year—and so does the music you listen to. This new data story reveals the musical phases that uniquely defined your year." | Spotify 2024 Your Music Evolution | VERIFIED |
| "The first one will be who you are, and the second one is what you reach for." | Spotify 2021 Audio Aura | REPORTED |
| "Share This Story" | Spotify share button | REPORTED |
| "Hello · Bonjour · स्वागत हे · Ciao · Olá · おい · Hallå · Guten tag · Hallo" (preloader) | dennissnellenberg.com | VERIFIED (snapshot) |
| "Located in the Netherlands" / "Freelance Designer & Developer" | dennissnellenberg.com hero | VERIFIED (snapshot) |

---

## G. Exact numbers bank (for traceable implementation)

| Item | Value | Source | Conf. |
|---|---|---|---|
| Video canvas / fps | 1080 × 1080 @ 30 fps (all 3 editions) | GitHub Unwrapped code | VERIFIED |
| Opening scene length | 130 frames (4.33 s) | GitHub Unwrapped 2021 & 2023+ | VERIFIED |
| Contribution & end scenes | 7.5 s each | GitHub Unwrapped 2023+ | VERIFIED |
| Scene overlap | −25 frames (2021); 3-30 frames (2023+) | code | VERIFIED |
| Default spring | `damping: 200`, `durationInFrames` 20-60, delays 10-110 frames | code | VERIFIED |
| Letter-by-letter stagger | 4 frames per letter | GitHub Unwrapped 2021 end card | VERIFIED |
| Giant stat sizes on 1080 px canvas | 900/800/600/500 px (seven-segment), 200 px (2021 total), 80 px (name, PR number) | code | VERIFIED |
| Soundtrack length | 24-56 s, 2 s steps, matched to video | code | VERIFIED |
| Share story image | 1036 × 1973 (IG story) | code | VERIFIED |
| "Copied" feedback | 1500 ms | code | VERIFIED |
| Spotify gradient blur | 80% (large gradients) / 40% (small) | Spotify Design 2020 | VERIFIED |
| Spotify story format | 9:16 | secondary | REPORTED |
| Spotify slide auto-advance duration | — | — | NOT FOUND |
| Name marquee | `font-size: max(9em, 15vw)`, `line-height: 1`, `bottom: 15vh`, spacer `0 3vw`, loop 18 s linear, reverses with scroll direction | dennissnellenberg.com | VERIFIED |
| Hero height | `min-height: 115vh` | dennissnellenberg.com | VERIFIED |
| Portrait parallax | `data-scroll-speed="-3"`, image box top −10% height 110% | dennissnellenberg.com | VERIFIED |
| Easing tokens | `cubic-bezier(.7,0,.3,1)` × .3/.5/.7/.9 s | dennissnellenberg.com | VERIFIED |
| Preloader | words stagger .15 s; curtain .8 s Power4.easeInOut; content in 1.5 s Expo.easeOut stagger .07 | dennissnellenberg.com | VERIFIED |
| Spotify 2018 palette | #2779A7, #FF9398, #ECD06F | Awwwards | REPORTED |

---

## Cross-reference patterns

Counted across the references with VERIFIED/REPORTED evidence: Spotify Wrapped editions (2015-17 web, 2018 microsite, 2019, 2020, 2021, 2022, 2023, 2024, 2025 = 9 entries), GitHub Unwrapped editions (2021, 2022, 2023-25 = 3), Dennis Snellenberg (1). Total = 13 entries from **3 independent sources**. A pattern seen in both Spotify and GitHub Unwrapped is backed by two independent franchises; one seen only inside Spotify is one franchise (several years). Leads in §D are not counted.

| Pattern | Count (entries) | Supporting references | Independent franchises |
|---|---|---|---|
| Sequenced full-screen "story"/scene structure (one stat per screen) | 12 | Spotify 2017 (quiz walk-through), 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025; GitHub Unwrapped 2021, 2022, 2023+ | 2 |
| Second-/first-person "you/my" ownership copy | 11 | Spotify 2018-2025 ("Your…", "You were…"); GitHub Unwrapped ×3 ("This is my…") | 2 |
| Giant personal stat numbers | 6 | Spotify 2018 ("gigantic text" stats), 2024 (minutes listened), 2025; GitHub Unwrapped 2021 (200 px), 2022, 2023+ (500-900 px) | 2 |
| Shareable card / share CTA at the end or on every card | 11 | Spotify 2017-2025 (shareable graphics from 2017; "Share This Story"); GitHub Unwrapped ×3 (end-card URL CTA; 2023+ "Download story (image)") | 2 |
| Soundtrack under the story | 6 | Spotify 2018 (Music & Sound tag), 2024 (user's own songs), 2025; GitHub Unwrapped ×3 | 2 |
| Superlative / percentile / tier ("top 0.5%", tier planet) | 6 | Spotify 2020, 2021, 2024 (top 0.005%), 2025 (Fan Leaderboard, Clubs, Listening Age); GitHub Unwrapped 2023+ (Ice→Gold tiers); 2021 (threshold headlines) | 2 |
| Personalised colour / user-chosen theme | 5 | Spotify 2018 (colour from data), 2021 (Audio Aura); GitHub Unwrapped 2022 (3 themes), 2023+ (rocket colour + tier colour) | 2 |
| Count-up number animation | 2 | GitHub Unwrapped 2021, 2023+ (Spotify: NOT FOUND) | 1 |
| Spring/bouncy motion | 3 | Spotify 2025 ("springy bounce", "springy overshoot"); GitHub Unwrapped 2021, 2023+ (`spring()`) | 2 |
| Typography as the main graphic element / title-sequence type | 4 | Spotify 2018, 2022 ("walls of text"), 2024 (type loops, hyperloops "2" "4"), 2025 ("type dancing like sound waves") | 1 |
| Gradients (multi-colour or gradient-clipped text) | 6 | Spotify 2020, 2022, 2024, 2025; GitHub Unwrapped 2023+ (gradient bg + gradient text); Dennis Snellenberg: no | 2 |
| Person's own photo shown as hero | 4 | GitHub Unwrapped 2021 (450 px medallion), 2022 (avatar frame), 2023+ (160 px flip); Dennis Snellenberg (full-bleed portrait). Spotify: never (NOT FOUND) | 2 |
| Name set huge with/over/behind the portrait | 2 (+1 reported) | Dennis Snellenberg (VERIFIED); GitHub Unwrapped 2023+ (name beside avatar, VERIFIED); Spotify 2018 artist names gigantic with cut-out headshots (REPORTED) | 3 |
| Portrait reveal by 3D flip | 2 | GitHub Unwrapped 2021, 2023+ | 1 |
| Interactive quiz / guess-before-reveal | 3 | Spotify 2017 (quiz), 2020 (quizzes), 2025 (Top Song Quiz) | 1 |
| Archetype / identity label ("you are…") | 4 | Spotify 2021 (Audio Aura), 2023 ("Me in 2023"), 2025 (Clubs, Listening Age); GitHub Unwrapped tier planet | 2 |
| Tap right = next / left = back / hold = pause | 2 | Spotify 2022 (rewatchable stories), 2024 | 1 |
| Segmented progress bar | 1 | Spotify (pattern description, REPORTED) | 1 |
| 9:16 vertical share format | 2 | Spotify (REPORTED); GitHub Unwrapped IG story still 1036×1973 (VERIFIED) | 2 |
| Texture / noise overlay | 3 | GitHub Unwrapped 2023+ (dot noise); Spotify 2025 (grunge); Spotify 2023 (pixelated/lo-fi) | 2 |
| Camera zoom ("Ken Burns"-like) | 1 | GitHub Unwrapped 2023+ | 1 |
| Scroll parallax on portrait | 1 | Dennis Snellenberg | 1 |
| Infinite name marquee | 1 | Dennis Snellenberg | 1 |
| Preloader before the hero | 2 | Dennis Snellenberg (multilingual greetings); GitHub Unwrapped ("Unwrapping...") | 2 |
| Magnetic buttons | 1 | Dennis Snellenberg | 1 |
| Duotone portrait | 0 | — (lead D15) | 0 |
| Halftone portrait | 0 | — | 0 |
| Scroll-scrubbed portrait reveal | 0 | — | 0 |
| Film grain | 0 | — | 0 |

---

## Ranking

By recognition and scale (verified/reported evidence only):

1. **Spotify Wrapped** (2015-2025): 200M+ engaged users and 500M+ shares in 24 h (2025); Cannes Gold Lion (2023, for 2022 Wrapped), Bronze Digital Craft Lion (2023), Bronze Creative Effectiveness (2024); Webbys; the category's origin and benchmark.
2. **Spotify "Your 2018 Wrapped" web microsite** (Active Theory): Awwwards SOTD 7.66 + FWA SOTD, 20M visitors on day one, ADC/D&AD/Clio/One Show/Cannes honours. The best **web** (not app) precedent, and the one with the "gigantic text + cut-out portrait" layout.
3. **Dennis Snellenberg portfolio**: Awwwards SOTD (reported); one of the most-cloned portfolio heroes on GitHub (75-79 code matches). The best precedent for **one portrait + huge name**.
4. **GitHub Unwrapped** (Remotion × For One Red, 2021-2025): smaller scale (10,000+ users reported in 2021; "thousands" rendering at once), promoted by GitHub, featured in Remotion's showcase. Ranked last on scale but **first on evidence quality**: every number above was read from production source code.

Unranked (no evidence this session): Apple Music Replay, YouTube Music Recap, Duolingo, Strava, Reddit Recap, Letterboxd, athlete tributes, TIME, GQ, Shot on iPhone, the Apple Steve Jobs homepage, Google Doodles (§D).

---

## H. Gaps and next verification pass (when search budget is available)

1. Spotify Wrapped auto-advance duration per slide and progress-bar styling (official or screen-recording analysis, e.g. 60fps.design "Spotify Wrapped story progress").
2. Spotify Wrapped Wrapped-specific hex codes (2022-2025): Spotify Newsroom media kits, Behance pages by the in-house designers (e.g. kentortiz.com 2022).
3. Everything in §D, starting with D13 (Apple Steve Jobs tribute) and D14 (Google birthday Doodles), which are the closest precedents for a birthday tribute to one person, then D3/D5 (Duolingo, Reddit) for share-card mechanics.
4. Duotone / halftone / scroll-scrubbed portrait reveals: Awwwards searches such as "awwwards site of the day portrait duotone hero", "awwwards scroll scrub portrait reveal".
5. Licences: Jellee (GitHub Unwrapped 2021 font) and Neue Montreal (Pangram Pangram) commercial terms.
