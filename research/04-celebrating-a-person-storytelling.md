# 04 — Celebrating ONE person: personal-recap storytelling & hero-portrait design

Research category: websites and experiences whose whole job is to make **one person the hero**: year-in-review "Wrapped" recaps, tributes, single-portrait editorial heroes.
Compiled 2026-10-03 as evidence for the "Happy Birthday, Mustafa" site. Every design decision made later must cite a line in this file or another research file.

---

## 0. Method, limits and confidence legend (read first)

**Channels and what each one gave**

| Channel | Status | Used for |
|---|---|---|
| WebSearch (search-result summaries) | Ran 38 queries, then the session-wide cap was reached ("200 of 200 WebSearch calls"; other agents share the budget). | All Spotify Wrapped material (2015-2025), the Spotify 2018 microsite, GitHub Unwrapped background, Vucko, Rive, awards, scale. |
| Firecrawl | Failed with "Insufficient credits". | Nothing. |
| Direct HTTP fetch | Blocked for every site tested (itsnicethat, newsroom.spotify, wikipedia, awwwards, medium, rive.app, vucko.co, archive.org, archive.ph, remotion.dev, githubunwrapped.com and others). | Nothing. |
| GitHub repo content and GitHub search | **Withdrawn.** The lead ruled this out of scope because the session is authorised only for `husamisverycool/mustafa`. A code-level pass was done before that rule arrived. **None of its findings appear in this file.** | Nothing in this file. |
| Google Fonts CSS API (fonts.googleapis.com) | Worked (allowed). | Checking whether fonts are on Google Fonts. |
| npm registry (allowed) | Worked. | Licence metadata for Mona Sans. |

**Confidence labels used on every field**

- **VERIFIED**: appeared consistently in at least 2 independent search results, at least one of them first-party (Spotify Newsroom / Spotify Engineering / Spotify Design / the agency), or read directly from an allowed primary API (Google Fonts, npm).
- **REPORTED**: one search-result summary or one secondary source. Search summaries can hallucinate, so treat these as "probably true" and cite them with care.
- **NOT FOUND**: searched, or could not search, and found nothing reliable. **Do not fill these in from taste.**
- **MEMORY (unverified)**: the researcher's prior knowledge only, not confirmed by any source this session. Listed only as leads for a later verification pass. **Under the "no taste" rule, these must not be used as evidence until a source confirms them.**

**Coverage, given the limits:**
- **Deep card A, Spotify Wrapped:** every year from 2015 to 2025, from search evidence.
- **Card B, GitHub Unwrapped:** search-level evidence only.
- **Everything else in the brief is in §D as flagged leads**, each with the exact searches still needed. This covers Apple Music Replay, YouTube Music Recap, Duolingo, Strava, Reddit Recap, Letterboxd, the Kobe and Federer tributes, TIME Person of the Year, GQ Men of the Year, Shot on iPhone, and Awwwards single-portrait portfolio heroes.

**Biggest gap for this project.** No permitted source in this file shows a site presenting **the celebrated person's own photo** as the hero. Spotify never shows the user's photo. The closest verified-adjacent evidence is Spotify 2018's "gigantic text with overlapping artist headshots in solid and cutout form" (REPORTED). The portrait-hero leads are D13 (Apple's Steve Jobs homepage), D14 (Google birthday Doodles), D16 (the Dennis Snellenberg portfolio) and D17 (the GitHub Unwrapped opening). Verifying these should be the next priority.

---

## A. SPOTIFY WRAPPED (franchise card)

### Spotify Wrapped — https://www.spotify.com/wrapped/ (in-app story experience; 2015-2018 also as web microsites)

- **Source pages** (all via search summaries)
  - https://en.wikipedia.org/wiki/Spotify_Wrapped
  - https://newsroom.spotify.com/2024-12-04/10-years-spotify-wrapped/
  - https://newsroom.spotify.com/2024-12-04/wrapped-user-experience-2024/
  - https://newsroom.spotify.com/2024-12-04/everything-you-need-to-know-about-your-music-evolution/
  - https://newsroom.spotify.com/2025-12-03/2025-wrapped-user-experience/
  - https://newsroom.spotify.com/2025-12-03/wrapped-marketing-campaign/
  - https://newsroom.spotify.com/media-kit/2025-wrapped-media-kit/
  - https://www.musicbusinessworldwide.com/spotify-wrapped-campaign-hit-200m-engaged-users-in-24-hours-a-19-yoy-increase/
  - https://techcrunch.com/2025/12/04/spotify-says-wrapped-2025-is-its-biggest-yet-with-200m-users-in-its-first-day
  - https://www.mi-3.com.au/07-12-2025/spotify-wrapped-2025-reaches-record-200-million-engaged-users-24-hours
  - https://routenote.com/blog/spotify-wrapped-2025-record-breaking-launch/
  - https://variety.com/2025/music/news/spotify-wrapped-breaks-own-record-250-million-engagements-1236603493/
  - https://www.pr-newsroom-wp.appspot.com/2023-06-22/spotify-wins-trio-of-awards-at-2023-cannes-lions/ (mirror of a Spotify Newsroom post)
  - https://www.linkedin.com/posts/marie-ronn-bb71581a_gold-lion-for-spotify-wrapped-huge-activity-7077659579211292673-eS-T
  - https://newsroom.spotify.com/2024-06-21/thats-a-wrap-on-cannes-lions-2024-inside-the-awards-spotify-beach-action-and-more/
  - https://www.androidpolice.com/how-to-find-new-old-spotify-wrapped/ and its syndication https://tech.yahoo.com/streaming/articles/see-spotify-wrapped-playlists-2024-172357433.html
  - https://screenrant.com/spotify-wrapped-2022-rewatch-stories-slideshow-how/
  - https://www.howtogeek.com/how-to-find-spotify-wrapped-2024/
  - https://www.rickyspears.com/gaming/share-spotify-wrapped-instagram-story/
  - https://www.sportskeeda.com/us/music/spotify-2024-wrapped-new-features-everything-else-explored
  - https://trophy.so/blog/how-to-build-wrapped-feature (secondary description of the pattern)
  - Year-specific sources are listed in each sub-card below.
- **Recognition and scale**
  - 2025 Wrapped had **200 million+ engaged users in its first 24 hours**, up 19% year on year. In 2024 it took 62 hours to reach 200M. — VERIFIED (MBW, TechCrunch, mi-3, RouteNote and TechTimes agree).
  - 2025 Wrapped had **500 million+ shares in 24 hours**, up 41% year on year. — VERIFIED (same sources).
  - "Engaged" means the user viewed at least one story. — VERIFIED (same sources).
  - 2025 reached 250 million engagements in under 3 days. — REPORTED (Variety headline).
  - Cannes Lions 2023: **Gold Lion** for the "2022 Spotify Wrapped On-Platform Experience". The category was reported as personalised storytelling/experience. — REPORTED (Spotify newsroom mirror, plus a LinkedIn post: "Gold Lion for Spotify Wrapped").
  - Cannes Lions 2023: **Bronze Digital Craft Lion** (Cross-Channel Storytelling) for the 2022 Wrapped design. — REPORTED.
  - Cannes Lions 2024: **Bronze Lion, Creative Effectiveness**, for the 2023 Wrapped on-platform experience. — REPORTED.
  - "Spotify Wrapped and Spotify Island took home three Webby Awards and two Webby People's Voice Awards" (year not stated). — REPORTED.
  - The 2018 microsite was Awwwards and FWA Site of the Day, with 20M visitors on day one; see card A2.
- **Concept**: the user's own year of listening, told back to them as a sequence of full-screen data "stories", ending in shareable cards. Each year gets a brand-new visual identity. The format stays constant: story, then stat, then superlative, then share. — VERIFIED.
- **Experience sequence (generic in-app version, 2019-2025)**
  1. **Entry card.** "A big card on the Home tab that says 'Your 2024 Wrapped is here,'" starts "an Instagram Story-like carousel of cards with music playing". — REPORTED (HowToGeek).
  2. **Story slides, in the typical 2024 order.** — REPORTED (AndroidPolice/Yahoo and Sportskeeda).
     - Minutes listened, plus the "biggest listening day".
     - Number of songs, plus the #1 song.
     - Top 5 songs.
     - Number of artists, plus the #1 artist, with the listening streak in days and minutes.
     - 2024 only: "Your Music Evolution" phases, and an AI podcast.
     - Summary.
  3. **End screen.** "Options to share your 2024 Wrapped, start it over from the beginning, or open your personalized Your Top Songs playlist." — REPORTED (AndroidPolice).
  4. **New in 2025** ("nearly a dozen new personalized stories"). — VERIFIED (Spotify Newsroom 2025 UX post, TechCrunch, SoundGuys, techlusive).
     - Listening Age.
     - Top Albums.
     - Fan Leaderboard.
     - Wrapped Clubs, which "match you to one of six unique listening styles".
     - Top Song Quiz: you guess your #1 song before the reveal.
     - Wrapped Party: a live multiplayer comparison with friends.
     - The Top Songs playlist now shows exact play counts for the top 100.
- **Signature interactions and mechanics**
  - Tap the **right side to go to the next slide**, the **left side to go back**, and **tap and hold to pause**. — REPORTED (AndroidPolice/Yahoo). ScreenRant also calls 2022 a rewatchable "stories slideshow".
  - A segmented progress bar runs along the top, one segment per slide: earlier slides are filled, the current one is filling, later ones are empty. — REPORTED (a secondary description of the "Spotify-style" pattern; no first-party spec found).
  - Auto-advance duration per slide: **NOT FOUND**.
  - A "left third goes back" tap rule appeared in search results. It comes from an unrelated project, **not Spotify**, so do not attribute it to Spotify.
  - A "**Share This Story**" button sits at the bottom of each card. It shares a **static image** of the current card, not the video. Instagram Stories is the first share target and posts directly. — REPORTED (HowToGeek and the rickyspears guide agree).
  - Cards are **9:16 vertical**, "perfectly sized for Instagram Stories and TikTok". — REPORTED (secondary).
  - Interactive quizzes appeared in 2020 and again in 2025 (Top Song Quiz); badges appeared in 2020. — VERIFIED (Spotify Design's 2020 article summary and the 2025 newsroom post).
  - 2025 turned data into interaction, for example the "**Top Artist Sprint**", which shows how your top artists shifted month by month. — REPORTED (Rive blog).
- **How the PERSON is featured**: Spotify never shows the user's photo (NOT FOUND in any year). The person becomes the hero in five other ways:
  - Second-person copy ("Your…", "You were…").
  - Big personal numbers (minutes).
  - Percentile superlatives ("top 0.5%").
  - Archetypes and identities: the 2021 Audio Aura colours, and the 2025 Clubs and Listening Age.
  - Their own music as the soundtrack.
- **Typography (franchise)**
  - Circular (Lineto) was used through 2023. For 2022, "Circular AP Title Bold" is named. — REPORTED (single source).
  - **Spotify Mix** is a bespoke Dinamo typeface launched in May 2024. It was used in Wrapped 2024 and 2025. — VERIFIED (Spotify Newsroom font launch, Dinamo, It's Nice That, Spotify's 2025 design substack).
  - Spotify Mix is proprietary and "exclusive", so it **cannot be licensed**. Details are in the 2024 sub-card.
- **Colour palette (franchise)**
  - Spotify's core brand colours are **#1ED760** (green), **#191414** (black) and **#FFFFFF**. — REPORTED (brand-colour aggregator sites; not specific to Wrapped).
  - Wrapped-specific hex codes for 2019-2025: NOT FOUND. Only named colours are available; see the sub-cards. The 2018 microsite hex codes are in A2.
- **Motion (franchise)**: VERIFIED (Spotify Engineering's January 2024 article, the Rive blog, Vucko's project pages, Creative Review).
  - Before 2022: native iOS/Android animation (view and layer transforms, path manipulation, gradients, blurs).
  - 2022: Lottie introduced.
  - 2023: "Lottie-first", with Lottie for brand visuals and high-keyframe animation and native code for data visualisation.
  - 2025: **Rive** for the whole motion layer, using data binding.
  - The motion identity, system and toolkit for 2024 and 2025 was by **Vucko**.
- **Sound and music**: the slides play the user's own top tracks: "a slide-by-slide presentation of the user's listening habits to the tune of familiar tracks from their 2024 listening experience". — REPORTED (AndroidPolice).
- **Tech stack**
  - In-app: native code plus Lottie and Rive (see Motion above).
  - Back end, from secondary blogs (low confidence): Kafka, Google Cloud Dataflow, BigQuery. — REPORTED (non-Spotify blog).
  - The 2025 "Wrapped Archive" pre-generated about 1.4 billion personalised reports for about 350 million users, using LLM-written narratives. — REPORTED (summaries of Spotify Engineering's March 2026 "Inside the Archive" post, InfoQ and ZenML).
- **Copy and microcopy (verbatim)**
  - "Your 2024 Wrapped is here" (the Home entry card). — REPORTED.
  - "You were in the top 0.005% of listeners globally." — REPORTED (single source: a Yahoo explainer; year not stated).
  - A tier ladder of "Top 1%", "Top 0.5%" and "Top 0.1%" of an artist's listeners existed by 2020-2021. — VERIFIED (Republic World 2020 and Capital FM 2021).
  - 2024, Your Music Evolution: "Your tastes and moods change throughout the year—and so does the music you listen to. This new data story reveals the musical phases that uniquely defined your year." — VERIFIED (Spotify Newsroom).
  - 2021 Audio Aura: "The first one will be who you are, and the second one is what you reach for." — REPORTED (Esquire PH).
  - Share button: "Share This Story". — REPORTED.

---

### A1. Spotify "Year in Music" (2015) and Wrapped 2016-2017 (web era)
- **Sources**: https://en.wikipedia.org/wiki/Spotify_Wrapped ; https://econsultancy.com/spotify-2018-wrapped-personalised-data/ ; https://www.lurestudio.com.au/blog/the-rise-of-spotify-wrapped ; https://vocal.media/fyi/spotify-wrapped-through-the-years-a-retrospective
- **History**: REPORTED (Wikipedia and two blogs agree).
  - 2015: a "Year in Music" microsite showing top songs and genres.
  - 2016: the first "Wrapped", available only in the browser and announced by email.
  - 2017: visitors were "greeted with a colourful personalised quiz which walked them through their listening habits".
  - By 2017 there were **shareable graphics** for social media.
- **Typography, colour and motion**: NOT FOUND.

### A2. Spotify "Your 2018 Wrapped" web microsite — http://spotifywrapped.com (2018)
- **Source pages**: https://www.awwwards.com/sites/your-2018-wrapped ; https://www.awwwards.com/sites/your-2018-wrapped/mobile-excellence-report ; https://medium.com/active-theory/spotify-wrapped-2018-technical-case-study-5b7cfb7e9d3a ; https://workingnotworking.com/projects/155125-spotify-your-2018-wrapped ; https://www.behance.net/gallery/75636503/Spotify-2018-Wrapped ; https://www.oneclub.org/awards/theoneshow/-award/32814/your-2018-wrapped/ ; https://abduzeedo.com/color-inspiration-spotify-2018-wrapped ; https://fernandogr.net/fgrblog/spotify-wrapped-2018%E2%80%8A-%E2%80%8Atechnical-case-study-active-theory-medium/
- **Recognition**
  - Awwwards **Site of the Day** (score 7.66) and FWA **Site of the Day**. — VERIFIED (Awwwards listing and workingnotworking).
  - Award lists differ by source. — REPORTED.
    - workingnotworking: ADC 2 Gold, 3 Bronze, 2 Finalist; D&AD 2 Wood Pencils, 1 Finalist; Clio 4 Silver, 1 Bronze.
    - Behance: Cannes Lions 2 Bronze and 9 Finalist; One Show 3 Gold, 1 Silver, 1 Bronze, 1 Finalist.
  - The Behance case study has 9,092 appreciations and 100,180 views. — REPORTED.
  - **20 million+ visitors on day one**, and Twitter's #1 global trending topic on launch day. — VERIFIED (workingnotworking and Behance summaries agree).
- **Built by**: Active Theory (WebGL), with Spotify. — VERIFIED.
- **Concept**: "centered around two things — color and typography" (Active Theory). Colour carries the personalisation, driven by listening data. Typography carries the cinema: "animations giving the experience a **movie title sequence** feel". — VERIFIED (Active Theory and Behance).
- **Experience**: a journey through "how they listened in 2018": stats, top artist, personalised playlists and "unexpected insights". — REPORTED.
- **How the person or hero is featured**
  - "Artist names and important stats appeared in **gigantic text** with **overlapping artist headshots in both solid and cutout form**." — REPORTED (Behance summary).
  - "Large text that **fit perfectly to screen dimensions**." — VERIFIED (Active Theory case study, two summaries).
  - This is the best evidence in this file for a **huge name lockup layered with a cut-out portrait**. Note that the portraits are of artists, not of the user.
- **Typography**: family NOT FOUND. MEMORY says Spotify used Circular in this period.
- **Colour palette (from the Awwwards listing)**: **#2779A7, #FF9398, #ECD06F**. — REPORTED (Awwwards via a search summary; single source).
  - "Dynamic color schemes" per user, and "350 unique posters" from live image-data analysis. — REPORTED.
- **Motion and tech**
  - WebGL front end with 3D animations. — VERIFIED.
  - Text was rendered as WebGL geometry ("the largest technical challenge was … text"). — VERIFIED.
  - Layout and transitions were each rendered "in their own scenes to their own render targets". A clone of the text mesh was brought into the transition scene so it lined up exactly. — VERIFIED.
  - Localisation: 21 languages according to Active Theory, 23 localised versions according to workingnotworking. The counts disagree. — REPORTED.
  - Awwwards tags: Music & Sound, Animation, Colorful, Transitions, Data Visualization, Interaction Design, WebGL. — REPORTED.
- **Sound**: the Awwwards tag "Music & Sound". — REPORTED. Specifics NOT FOUND.

### A3. Spotify Wrapped 2019 ("A decade wrapped")
- **Sources**: https://medium.com/throughdesign/spotify-2019-wrapped-a-design-masterstroke-1d06b27b0aec ; https://elements.envato.com/learn/spotify-wrapped-design-aesthetic
- **Content**: personal stories covering a whole decade, plus new stats such as the "speed of your sound" and the number of countries your artists come from. — REPORTED.
- **Colour**: "a green and a pink … uncommon **neon** shades" dominate, chosen so shared screenshots grab attention. — REPORTED. Hex NOT FOUND.
- **Platforms**: available in the mobile app and on desktop, "with gorgeous animations and succinct data visualisation". — REPORTED.

### A4. Spotify Wrapped 2020
- **Sources**: https://medium.com/spotify-design/how-we-brought-2020-wrapped-to-life-in-the-mobile-app-4ed1b839ed23 (first-party) ; https://elements.envato.com/learn/spotify-wrapped-2024 ; https://www.republicworld.com/tech/apps/spotify-wrapped-2020-what-does-top-0-dot-5-and-top-0-dot-1-of-listeners-mean
- **Gradient and blur**: the visual centre is a **multi-colour brand gradient** with a **blur overlay** sized to the gradient: "larger gradients have an **80% blur**, smaller gradients have a **40% blur**", so colours stay bright on small screens. — VERIFIED (Spotify Design article, two summaries).
- **Design system**: product design reused **text styles and animation curves from Spotify's "Encore" mobile design system**. — VERIFIED (same article). The exact curves: NOT FOUND.
- **Other additions**: quizzes, badges, stories, "reflected imagery, and animated color", and artist headshots. — REPORTED.
- **Superlatives**: top 0.5% and top 0.1% of an artist's listeners. — REPORTED.

### A5. Spotify Wrapped 2021 (Audio Aura)
- **Sources**: https://engineering.atspotify.com/2021/12/the-audio-aura-story-mystical-to-mathematical (first-party) ; https://www.esquiremag.ph/culture/music/spotify-wrapped-2021-audio-aura-a00304-20211202 ; https://screenrant.com/spotify-wrapped-audio-aura-meaning/ ; https://medium.com/designright/spotify-wrapped-2021-design-review-f735281494ba ; https://www.capitalfm.com/news/music/spotify-wrapped-top-05-percent/
- **Audio Aura**: two personal colours, computed from the mood tags of your songs, created with aura reader Mystic Michaela. — VERIFIED (first-party engineering post title plus two explainers).
  - Green = calm/analytical.
  - Pink = optimistic.
  - Orange = rebellious/bold.
  - Yellow = focused/motivated.
  - Blue = wistful.
- **Layout**: a colourful **ribbon** carrying custom text "threaded through square-cropped images", with "typography chaos, word-art colour combos". — REPORTED.
- **Copy**: "The first one will be who you are, and the second one is what you reach for." — REPORTED.

### A6. Spotify Wrapped 2022 ("Self-expression and play": monograms)
- **Sources**: https://www.itsnicethat.com/features/spotify-wrapped-campaign-identity-2022-graphic-design-301122 ; https://logos.fandom.com/wiki/Spotify_Wrapped ; https://kentortiz.com/Spotify-2022-Wrapped (designer portfolio, a lead) ; https://lbbonline.com/work/108460 ; the Cannes sources above.
- **Monograms**, "the heart of the campaign": VERIFIED (It's Nice That summary, seen twice).
  - Overlapping, interlocking shapes built on a **16 × 16 grid**.
  - **48 design possibilities**.
  - Each one combines square, spiky and soft round shapes, standing for the diversity of listening.
- **Visual language**: "jarring colors and shapes, **color-vibrating gradients**, **walls of text**, and playful interactivity". — REPORTED. The type is **Circular AP Title Bold**. — REPORTED (single source for the font).
- **Motion**: the first year with **Lottie** animations. — VERIFIED (Spotify Engineering).
- **Recognition**: Cannes Gold Lion and Bronze Digital Craft Lion (see the franchise card). — REPORTED.

### A7. Spotify Wrapped 2023 ("No grid, no rules")
- **Sources**: https://www.itsnicethat.com/features/spotify-wrapped-campaign-identity-2023-graphic-design-301123 ; https://the-brandidentity.com/interview/raw-playful-and-laced-with-a-chaotic-energy-we-dive-into-the-making-of-spotify-wrapped-2023 ; https://www.thedrum.com/news/2023/11/29/spotify-wrapped-2023-team-behind-much-anticipated-music-moment-share-their-story ; https://engineering.atspotify.com/2024/01/exploring-the-animation-landscape-of-2023-wrapped ; https://lbbonline.com/work/108461 ; https://newsroom.spotify.com/tag/me-in-2023
- **Identity**: chaotic, fluid, lo-fi, with early-internet nostalgia: **pixelated artworks, warped shapes, an "almost Word Art-esque"** feel, and no symmetry. It was still packaged as a layered toolkit whose elements can be "dialled up and down". — VERIFIED (It's Nice That and The Brand Identity).
- **Team**: REPORTED.
  - Rasmus Wängelin, global head of brand design.
  - Design directors Mariola Bruszewska and Bruno Borges.
  - Designers Erin Safreno, Melissa Miyamoto-Mills, Chris Cyran and Will Oswin.
- **Quote** (Wängelin): "there's something about this year that felt especially chaotic in terms of how people consumed culture." — REPORTED.
- **Animation tech**: VERIFIED (Spotify Engineering, two summaries).
  - **Lottie-first**, used for brand visuals and high-keyframe animations.
  - Native builds for data visualisations and interactions: view and layer transforms, path manipulation, textures and variables.
- **Features**: a personal "Me in 2023" feature, plus "listening characters" and "Sound Town". — REPORTED (a newsroom tag and one Kapwing URL slug only).

### A8. Spotify Wrapped 2024 ("Reinvention and evolution": 10th anniversary)
- **Sources**: https://www.itsnicethat.com/features/spotify-wrapped-2024-graphic-design-041224 ; https://newsroom.spotify.com/2024-12-04/10-years-spotify-wrapped/ ; https://elements.envato.com/learn/spotify-wrapped-2024 ; https://www.fastcompany.com/91239913/spotify-wrapped-2024-music-evolution ; https://vucko.co/project/wrapped-2024 ; https://fontsinuse.com/uses/63891/spotify-2024-redesign ; https://newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/ ; https://abcdinamo.com/news/spotify ; https://www.creativeboom.com/news/dinamo-unveils-a-new-custom-typeface-for-spotify/ ; https://www.creativebloq.com/news/spotify-font-design ; https://alexjimenezdesign.substack.com/p/three-design-elements-that-made-spotify
- **Concept**: pop culture "thrives in a beautiful cycle of reinvention", so the art direction "**loops, transforms**". — VERIFIED (newsroom and It's Nice That).
- **Typography as the main graphic element**: VERIFIED (newsroom, It's Nice That, Envato).
  - Spotify Mix was used in Wrapped for the first time, giving "a bolder, dynamic and more unique typographic presence".
  - It ranges "from **ultra-bold** line weights to **condensed, skinny** lettering".
  - The type is looped and transformed across the canvas.
  - Giant looping "**hyperloops**" of the numerals **2** and **4** "propel us forward in vivid technicolor".
- **Spotify Mix facts**: VERIFIED (Dinamo, Creative Boom, Spotify newsroom, It's Nice That's TikTok).
  - Made by **Dinamo** (Berlin) with Spotify's in-house creative team, over about 18 months.
  - Launched May 2024. It replaces Circular, including in the wordmark.
  - **Variable**, with a large weight and width range; weight, slant, width and height are adjustable.
  - Has alternate characters and **three sets of numerals**.
  - Has **almond-shaped counters** in p, d and g, alluding to sound waves.
  - Combines "sharp flicks of humanist strokes" with "smoother curves found in grotesque letters".
  - Licence: exclusive and bespoke, so it is not available to us.
- **Colour**: "**blood red, neon pink, and canary yellow**", "distinctly more dramatic", mixing vibrant gradients with solid colours. — VERIFIED (Envato and It's Nice That summaries). Hex NOT FOUND.
- **Motion**: "bold, looping animations". The motion identity, system, guidance and toolkit were by **Vucko**. — VERIFIED.
- **Features**: Your Music Evolution (phases) and a personal AI podcast. — VERIFIED.
- **Scale**: it took 62 hours to reach 200M engaged users. — VERIFIED (MBW).

### A9. Spotify Wrapped 2025 ("visual mixtape")
- **Sources**: https://spotifynews.substack.com/p/designing-2025-wrapped-turning-a ; https://www.fastcompany.com/91451332/spotify-wrapped-2025-goes-analog-in-the-age-of-ai ; https://elements.envato.com/learn/spotify-wrapped-design-aesthetic ; https://newsroom.spotify.com/media-kit/2025-wrapped-media-kit/ ; https://rive.app/blog/spotify-used-rive-for-spotify-wrapped-2025 ; https://vucko.co/project/wrapped-2025/ ; https://www.creativereview.co.uk/vucko-motion-design-brand-identity-etsy-spotify-wrapped/ ; https://60fps.design/shots/spotify-2025-wrapped-highlights-transition-text-animation ; https://60fps.design/shots/spotify-2025-wrapped-top-album-podcast-transition ; https://60fps.design/shots/spotify-2025-wrapped-badge-reveal-animation ; https://newsroom.spotify.com/2025-12-03/2025-wrapped-user-experience/ ; https://techcrunch.com/2025/12/03/spotifys-2025-wrapped-becomes-a-multiplayer-experience
- **Concept**: VERIFIED (Spotify substack, Fast Company, Envato).
  - Inspired by 1980s-90s audio culture: **mixtapes, doodled cassette inserts, club flyers and zines**.
  - Built as "a collage, with every element feeling like it's forming in real time … type dancing like sound waves"; "bold, layered, textured".
  - Led by Jeremy Wirth (Global Executive Creative Director) and Rasmus Wängelin (Head of Brand Design).
  - Described as the "most expressive Wrapped yet", with "tension between chaos and clarity".
- **Colour**: "the black-and-white world of mixtape culture, with **selective pops of colour used only for key moments**", so artist imagery stands out. The palette is named as **black, white, green and red**. — VERIFIED (Spotify substack and Envato). Hex NOT FOUND.
- **Texture and type**: REPORTED (Envato).
  - **Grunge textures**.
  - "Condensed italic fonts with a retro-style outline".
  - Wrapped logos rendered in "popping 3D textures".
- **Motion**: VERIFIED (Rive blog and Vucko).
  - All animations were made in **Rive**, following Vucko's motion guidelines.
  - **Data binding** generates millions of personalised versions with **no pre-rendered video**.
  - Designers prototype with dummy data; engineers then bind the real data.
  - The system copes with varying text length, localisation and device constraints.
- **Observed animation details** (60fps.design recordings by Hemesh Singh): REPORTED.
  - Advancing: "the current text **slides upward and fades out**, while the next screen's content … **slides up from the bottom with a pronounced springy bounce**". Background illustrations (geometric dots, abstract lines) "animate in with **subtle offsets**".
  - Highlights: "High-contrast text **scaling up and filling**, **staggered grid reveals** of artist cards, **rotating geometric transition masks**, horizontal carousels with **springy snapping** physics, and **hand-drawn vector illustrations** that animate into place."
  - Badge reveal: "a hand-drawn **white spiral draws itself** on a dark background … morphs into a colorful, circular character badge that **scales up with a springy overshoot**."
- **Scale**: 200M engaged users and 500M shares in 24 hours. — VERIFIED.

---

## B. GITHUB UNWRAPPED (Remotion × For One Red): search-level evidence only

### GitHub Unwrapped — https://www.githubunwrapped.com
- **Source pages** (via search summaries): https://githubunwrapped.com/about ; https://github.com/remotion-dev/github-unwrapped ; https://github.com/remotion-dev/github-unwrapped-2022 ; https://github.com/remotion-dev/github-unwrapped-2021 ; https://www.linkedin.com/posts/jonny-burger-4115109b_in-2021-github-unwrapped-was-a-fun-project-activity-7113500971887902720-xhXJ ; https://x.com/JNYBGR/status/1752771652490846607 ; https://decibel.vc/content/oss-spotlight-remotion-jonny-burger ; https://www.remotion.dev/docs/lambda ; plus fonts.googleapis.com and registry.npmjs.org (allowed APIs, read directly).
- **Recognition and scale**
  - The 2021 edition began as Jonny Burger's weekend project and served "more than 10,000 GitHub users". — REPORTED (LinkedIn summary).
  - There is a "mini-documentary about GitHub Unwrapped". — REPORTED (Jonny Burger's X post).
  - It is described as a yearly release associated with GitHub. — REPORTED (weak).
- **Credits**: Remotion implemented it "in collaboration with For One Red, who also designed the entirety of this project". Music is by **SmartSound**; the font is **Mona Sans by GitHub**. — REPORTED (About page via search; two summaries agree on For One Red). The 2023 team names listed were Luke Zirngibl, Isabell Fink, Maria Pavlou, Matteo Gamba, Chiara Turel, Mehmet Ademi and Patric Salvisberg. — REPORTED.
- **Concept**: a personalised year-in-review **video** for each GitHub user. Tagline: "**Your coding year in review**", with the hashtag **#GitHubUnwrapped**. — VERIFIED (the site title and three repository descriptions in search results).
- **Experience sequence**: NOT FOUND in detail via permitted channels. Known pieces: — REPORTED (About page via search).
  - Statistics come from GitHub's GraphQL API, with a data cutoff "approximately 24 hours before you generated the video".
  - The video is created with Remotion.
  - A 2024 summary said "2024 version being mostly the same as 2023".
  - A space theme (rocket, planets): REPORTED, weak, because the summary only echoed the query.
- **Mechanics, stats shown**: top languages are "estimated" with a formula: each contributed repository's top 3 languages get 3, 2 and 1 points, multiplied by the contribution count and the lines of that language. — REPORTED (About page).
- **How the PERSON is featured**: NOT FOUND via permitted channels (see lead D17).
- **Typography**
  - Mona Sans (GitHub). — REPORTED (credits).
  - **On Google Fonts** as a variable font with `wdth 75..125` and `wght 200..900`. — VERIFIED (fonts.googleapis.com returned `font-family: 'Mona Sans'` with condensed-to-expanded faces).
  - Licence: **OFL-1.1**. — REPORTED (npm `mona-sans` package metadata: "Mona Sans, a variable font from GitHub", licence OFL-1.1; Google Fonts hosting is consistent with an open licence).
- **Colour palette**: NOT FOUND.
- **Motion**: React-based programmatic video (Remotion). — VERIFIED (multiple results). Specifics NOT FOUND.
- **Sound**: licensed SmartSound music. — REPORTED.
- **Tech stack**: VERIFIED for the stack, REPORTED for the scaling strategy (README via search).
  - Built with "Vite 5, Remotion and AWS Lambda".
  - Scaling: renders are cached, with **MongoDB locks** so the same user is never rendered twice, and spread across **multiple AWS regions and accounts** to stay under Lambda concurrency limits.
- **Copy**: "Your coding year in review" and "#GitHubUnwrapped". — VERIFIED.

---

## D. Leads NOT verified this session: MEMORY only

**Do not treat any line here as evidence until a search confirms it.** Each lead lists what to confirm.

| # | Reference | What the researcher believes (MEMORY) | Searches still needed |
|---|---|---|---|
| D1 | Apple Music Replay (replay.music.apple.com and in-app Replay) | A web dashboard (since 2019) of top songs, artists, albums and minutes; later an in-app, story-like "highlight reel" with milestones. | "Apple Music Replay 2024 highlight reel design story", "Apple Music Replay milestones copy". |
| D2 | YouTube Music Recap | A story-card recap of top artists and songs, with shareable images. | "YouTube Music Recap 2024 design story cards". |
| D3 | Duolingo Year in Review | An in-app story recap with Duo mascot animations, "top X% of learners", and shareable cards. Duolingo is a known heavy Rive user. | "Duolingo Year in Review 2024 design Rive top percent copy". |
| D4 | Strava Year in Sport | A personalised recap (video or story) of the athlete's year, with totals and shareable cards. | "Strava Year in Sport 2024 recap design". |
| D5 | Reddit Recap | A story recap from 2022; 2023 added a personal "ability card" in trading-card style that users can share. | "Reddit Recap 2023 ability card design". |
| D6 | Letterboxd Year in Review | A per-member stats page (films, hours, top-film posters) plus an editorial annual review. | "Letterboxd year in review member stats page design". |
| D7 | Nike × Kobe Bryant tributes ("Mamba Forever") | Nike tribute communications after January 2020, and later "Mamba Forever" creative. | "Nike Mamba Forever Kobe tribute website", "Nike Kobe tribute ad 2020". |
| D8 | Roger Federer retirement tributes (2022): Rolex, Uniqlo, Wilson, ATP | Brand tributes in the style of "Thank you, Roger". It is unclear which ones had microsites. | "Thank you Roger Federer tribute website Rolex Uniqlo 2022". |
| D9 | Rafael Nadal, Messi, Serena Williams, Tom Brady and LeBron James tribute pages | Farewell pages by brands or leagues. | One query per athlete plus "tribute microsite". |
| D10 | TIME Person of the Year digital package | A red-border portrait cover, with a long-form digital feature built on large portrait photography. | "TIME Person of the Year 2023 digital cover design web package". |
| D11 | GQ / Esquire Men of the Year digital covers | Portrait-led covers, with motion or video covers online. | "GQ Men of the Year digital cover motion". |
| D12 | Apple "Shot on iPhone" portrait features | Portrait-mode photo campaigns shown full-bleed with minimal type. | "Apple Shot on iPhone portrait campaign website". |
| D13 | Apple homepage tribute to Steve Jobs (5 October 2011) | The homepage was replaced by a single full-bleed **black-and-white portrait** with "Steve Jobs 1955–2011". If confirmed, this is the strongest single-portrait tribute precedent. | "apple.com homepage October 2011 Steve Jobs tribute portrait". |
| D14 | Google Doodles for a person's birthday | "Today's Doodle celebrates [Name]'s [N]th birthday", with an illustrated portrait worked into the Google logo. A direct birthday precedent if confirmed. | "Google Doodle celebrates birthday portrait illustration". |
| D15 | Spotify duotone brand imagery (Collins, 2015) | Spotify's duotone photo treatment came from its 2015 brand refresh. This is the only lead for **duotone portraits**. | "Spotify duotone brand identity Collins 2015". |
| D16 | Dennis Snellenberg portfolio (dennissnellenberg.com) | An Awwwards Site of the Day. Its hero is a full-bleed portrait of the designer on a grey background, with **his full name in enormous white type running as an endless horizontal marquee** across the lower part of the photo. Also a multilingual "Hello / Bonjour / …" preloader. If confirmed, this is the canonical "one portrait + giant name" web hero. | "dennissnellenberg.com awwwards site of the day", "Dennis Snellenberg portfolio hero name marquee", "Dennis Snellenberg portfolio typeface". |
| D17 | GitHub Unwrapped video visuals | How the user's avatar and username are presented in the opening, the tier or badge logic, the scene list, colours, and the share-image formats. None of this was confirmable through permitted channels. | View githubunwrapped.com and its About page, or search "GitHub Unwrapped 2024 video scenes avatar". |

---

## E. Editorial single-portrait patterns: evidence check

| Pattern requested | Instance with permitted evidence | Status |
|---|---|---|
| Huge name lockup over or behind the portrait | Spotify 2018: "gigantic text with overlapping artist headshots in solid and cutout form" (REPORTED); text sized to "fit perfectly to screen dimensions" (VERIFIED). Leads: D16 and D17. | FOUND (1, reported) |
| The person's own photo as the hero | None. Spotify never shows the user (NOT FOUND). Leads: D13, D14, D16, D17. | NOT FOUND |
| Portrait reveal (flip, mask, wipe) | None. Spotify 2025's "rotating geometric transition masks" are for transitions, not a portrait (REPORTED). | NOT FOUND |
| Camera zoom ("Ken Burns" style) | None. | NOT FOUND |
| Scroll parallax or scroll-scrubbed portrait reveal | None (lead D16). | NOT FOUND |
| Duotone portrait | None (lead D15). | NOT FOUND |
| Halftone portrait | None. The closest is Spotify 2023's "pixelated artworks" (VERIFIED). | NOT FOUND |
| Grain, noise or texture overlay | Spotify 2025 "grunge textures" (REPORTED); Spotify 2023 lo-fi pixel texture (VERIFIED); Spotify 2020 blurred gradient at 80%/40% (VERIFIED). True film grain: NOT FOUND. | PARTIAL |
| Magazine-cover layout | None (leads D10 and D11). | NOT FOUND |

---

## F. Verbatim copy bank (lines that make the person the hero)

| Line | Source | Confidence |
|---|---|---|
| "Your 2024 Wrapped is here" | Spotify Home entry card | REPORTED |
| "You were in the top 0.005% of listeners globally." | Spotify Wrapped (year not stated) | REPORTED |
| "Top 1%" / "Top 0.5%" / "Top 0.1%" (of an artist's listeners) | Spotify Wrapped 2020-21 | VERIFIED |
| "Your tastes and moods change throughout the year—and so does the music you listen to. This new data story reveals the musical phases that uniquely defined your year." | Spotify 2024, Your Music Evolution | VERIFIED |
| "The first one will be who you are, and the second one is what you reach for." | Spotify 2021, Audio Aura | REPORTED |
| "Share This Story" | Spotify share button | REPORTED |
| "Listening Age", "Top Song Quiz", "Wrapped Party", "Wrapped Clubs", "Fan Leaderboard", "Top Artist Sprint" (feature names) | Spotify 2025 | VERIFIED (first four) / REPORTED (last two) |
| "A decade wrapped" | Spotify 2019 theme | REPORTED |
| "Your coding year in review" | GitHub Unwrapped tagline | VERIFIED |
| "#GitHubUnwrapped" | GitHub Unwrapped hashtag | VERIFIED |

---

## G. Exact numbers bank

| Item | Value | Source | Confidence |
|---|---|---|---|
| Spotify gradient blur | 80% on large gradients, 40% on small ones | Spotify Design, 2020 | VERIFIED |
| Spotify 2022 monogram grid | 16 × 16 grid, 48 variations | It's Nice That | VERIFIED |
| Spotify story card format | 9:16 (1080 × 1920 is the standard Instagram Story size) | secondary | REPORTED |
| Spotify slide auto-advance duration | — | — | NOT FOUND |
| Spotify 2018 palette | #2779A7, #FF9398, #ECD06F | Awwwards | REPORTED |
| Spotify core brand colours | #1ED760, #191414, #FFFFFF | brand-colour sites | REPORTED |
| Mona Sans axes on Google Fonts | wdth 75–125, wght 200–900 | fonts.googleapis.com | VERIFIED |
| Wrapped 2025 scale | 200M engaged users and 500M shares in 24 h | MBW, TechCrunch | VERIFIED |
| Wrapped 2018 microsite | 20M visitors on day one; Awwwards score 7.66 | workingnotworking, Awwwards | VERIFIED / REPORTED |

---

## Cross-reference patterns

**What is counted.** Only entries with VERIFIED or REPORTED evidence, 10 in total:
- Spotify Wrapped, 9 entries: 2015-17 web, the 2018 microsite, 2019, 2020, 2021, 2022, 2023, 2024 and 2025.
- GitHub Unwrapped, 1 entry: all editions together, since only search-level evidence is allowed.

**What the counts can and cannot tell you.**
- These are **only 2 independent franchises**. Counts inside Spotify show a pattern's persistence across years, not independent confirmation.
- Leads in §D are not counted. For a recurring-pattern argument, verify the §D leads first.

| Pattern | Count | Supporting references | Independent franchises |
|---|---|---|---|
| A sequence of full-screen "story" scenes, one idea per screen | 7 | Spotify 2017 (quiz walk-through), 2018 ("journey"), 2020 ("stories"), 2022 ("stories slideshow"), 2024, 2025; GitHub Unwrapped (personalised video) | 2 |
| Second-person "your / you were" copy | 4 | Spotify 2021, 2024 (×2 lines), 2025 feature names, plus franchise-level "Your … Wrapped" | 1 |
| Shareable card or share CTA | 4 | Spotify 2017 (shareable graphics), 2018 (personal posters), 2024 ("Share This Story"), 2025 (500M shares; share cards) | 1 |
| Typography as the main graphic element ("title sequence" type) | 4 | Spotify 2018, 2022 ("walls of text"), 2024 (looping type, numeral hyperloops), 2025 ("type dancing like sound waves") | 1 |
| Gradients | 4 | Spotify 2020, 2022 ("color-vibrating gradients"), 2024, 2025 | 1 |
| Superlative, percentile or ranking | 4 | Spotify 2020 (top 0.5/0.1%), 2021 (top 0.5%), unspecified year (top 0.005%), 2025 (Fan Leaderboard) | 1 |
| Archetype or identity label ("you are…") | 3 | Spotify 2021 (Audio Aura), 2023 ("Me in 2023", weak), 2025 (Clubs, Listening Age) | 1 |
| Quiz or guess-before-reveal | 3 | Spotify 2017, 2020, 2025 (Top Song Quiz) | 1 |
| Soundtrack under the story | 3 | Spotify 2018 (Music & Sound tag), 2024 (the user's own songs); GitHub Unwrapped (SmartSound) | 2 |
| Personalised colour | 2 | Spotify 2018 (colour from data), 2021 (two aura colours) | 1 |
| Texture or lo-fi overlay | 2 (+1 blur) | Spotify 2023 (pixelated), 2025 (grunge); 2020 blurred gradient | 1 |
| Tap right = next / left = back / hold = pause | 2 | Spotify 2022, 2024 | 1 |
| Giant text sized to the screen (names and stats) | 1 | Spotify 2018 | 1 |
| Giant numerals used as graphics | 1 | Spotify 2024 (looping "2" and "4") | 1 |
| Spring or bouncy transitions with overshoot | 1 | Spotify 2025 ("springy bounce", "springy overshoot", "springy snapping") | 1 |
| Staggered grid reveal | 1 | Spotify 2025 | 1 |
| Hand-drawn line that draws itself, then morphs into a badge | 1 | Spotify 2025 | 1 |
| Segmented progress bar | 1 | Spotify (secondary pattern description) | 1 |
| 9:16 vertical share format | 1 | Spotify (secondary) | 1 |
| Name set huge with a cut-out portrait | 1 | Spotify 2018 (artists, REPORTED) | 1 |
| Person's own photo as hero | 0 | — (leads D13, D14, D16, D17) | 0 |
| Duotone portrait | 0 | — (lead D15) | 0 |
| Halftone portrait | 0 | — | 0 |
| Scroll-scrubbed or parallax portrait | 0 | — (lead D16) | 0 |
| Camera zoom ("Ken Burns" style) | 0 | — | 0 |
| Film grain | 0 | — | 0 |

---

## Ranking

By recognition and scale (permitted evidence only):

1. **Spotify Wrapped (in-app, 2019-2025).** 200M+ engaged users and 500M+ shares in 24 hours (2025). Cannes Gold Lion (2023, for 2022 Wrapped), Bronze Digital Craft Lion (2023), Bronze Creative Effectiveness (2024), and Webbys. It is the origin and benchmark of the category.
2. **Spotify "Your 2018 Wrapped" web microsite (Active Theory).** Awwwards Site of the Day (7.66) and FWA Site of the Day, 20M visitors on day one, and ADC, D&AD, Clio, One Show and Cannes honours. It is the best **web** precedent (not app), and the only one with the "gigantic text + cut-out portrait" layout.
3. **GitHub Unwrapped (Remotion × For One Red, 2021-2025).** Much smaller: 10,000+ users reported in 2021. It is open source and offers a personalised video plus a share flow.

**Unranked** (no permitted evidence this session): everything in §D.

---

## H. Gaps and next verification pass (when a search budget is available)

1. **Portrait-hero precedents first**, because this is the core need for a one-photo birthday site: D16 (Dennis Snellenberg), D13 (Apple's Steve Jobs homepage), D14 (Google birthday Doodles), D17 (the GitHub Unwrapped opening).
2. **Spotify Wrapped story timing**: the auto-advance duration per slide and the progress-bar styling, from an official source or an analysis of a screen recording.
3. **Spotify Wrapped hex codes for 2022-2025**: Spotify Newsroom media kits, and Behance pages by the in-house designers (e.g. kentortiz.com for 2022).
4. **The remaining §D recaps**: Duolingo, Reddit, Apple Music Replay, YouTube Music, Strava and Letterboxd, for share-card mechanics and superlative copy.
5. **Duotone, halftone and scroll-scrubbed portrait reveals**: Awwwards searches such as "awwwards site of the day portrait duotone hero" and "awwwards scroll scrub portrait reveal".
6. **Licences**: confirm Mona Sans OFL-1.1 on Google Fonts' family page; confirm the licence of whatever typeface D16 turns out to use.
