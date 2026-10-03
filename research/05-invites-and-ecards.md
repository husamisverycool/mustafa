# 05 — Digital Invitations & Greeting Cards: Evidence Dossier

Category: the best-designed digital invitation and greeting-card products (the products that turned "birthday on the web" into a product).
Purpose: evidence base for the "Happy Birthday, Mustafa" site. Every design decision has to trace back to a real product, so each claim below has a source and a confidence label.

Compiled: 2026-10-03.

---

## 0. Method, tooling limits and confidence legend (read first)

**What actually ran in this session**
- **WebSearch:** about 38 queries ran, then the session-wide cap was hit ("200 of 200 WebSearch calls"; the budget is shared with other agents). Every result from those queries is a search-engine summary of the page, not the page itself.
- **Firecrawl:** HTTP 402 (out of credits).
- **WebFetch:** egress blocked (support.apple.com, en.wikipedia.org).
- **GitHub code search (MCP):** worked. This turned out to be a strong source, for three reasons:
  - Reverse-engineered API clients and scrapers of Partiful and Luma expose real field values: theme, effect and font identifiers.
  - Open-source iMessage bridges (BlueBubbles, AirMessage, Beeper, imessage-exporter) expose Apple's real effect identifiers.
  - Third-party research documents cite Mobbin screenshots, and some repos hold verbatim page scrapes (evite.com, jacquielawson.com, apple.com iCloud+, the MacRumors RSS feed).
- **Not done:** no page was opened in a browser and no font file was inspected.
- **Google Fonts check (fonts.googleapis.com/css2):** Manrope returned HTTP 200, so it is VERIFIED as a free Google Font. Cabinet Grotesk, Satoshi, Ivy Mode and Roc Grotesk returned HTTP 400, so they are not on Google Fonts (they are commercial or come from other foundries).

**Rule change during this session (provenance flag).** After this dossier was compiled, the lead ruled that GitHub search of repos other than `husamisverycool/mustafa` is out of scope. No more GitHub searches were made after that.
- Every claim whose source line names a GitHub repo (e.g. `Porkbutts/...`, `KalebCole/...`, `drshailesh88/...`, `Achref23illi/...`, `theswerd/...`, `R74nCom/...`, `Ericolink/...`) was gathered **before** the rule.
- The lead may decide to keep or strip those claims.
- Claims backed only by WebSearch (official help centres, App Store, newsroom, press) do not depend on GitHub.

**Confidence labels**

| Label | Meaning |
|---|---|
| **VERIFIED** | Seen verbatim in a primary or near-primary artifact: the official help centre, App Store, newsroom or marketing text, a scraped official page, real API data or source code. Or confirmed by 2+ independent sources. |
| **REPORTED** | One secondary source: a search-engine summary, a third-party research note, a clone, or a press summary. Plausible, but verify before relying on it. |
| **REPORTED (measured)** | A third party measured it frame by frame from screen recordings and documented the method. Stronger than REPORTED, but still not official. |
| **NOT FOUND** | Searched for and not found in this session. |
| **PRIOR (unverified)** | From the researcher's background knowledge. **Not evidence.** Listed only as a lead to verify. Do not cite it as a source for a design decision. |

Where sources contradict each other, the contradiction is stated in the entry.

---

## 1. Partiful — https://partiful.com

### Source pages
**Official**
- https://partiful.com/birthday-party-invitations
- https://partiful.com/birthday-cards
- https://partiful.com/cards
- https://partiful.com/blog/post/introducing-cards-on-partiful
- https://partiful.com/birthday (Partiful Birthday Fund; content NOT FOUND)

**Help centre**
- https://help.partiful.com/hc/en-us/articles/26559398129435-Creating-your-first-Partiful-event
- https://help.partiful.com/hc/en-us/articles/28890168265115-Can-I-change-the-RSVP-buttons-I-don-t-like-the-emojis
- https://help.partiful.com/en-us/articles/15525358-how-can-i-pick-a-custom-color-for-the-theme-of-my-event
- https://help.partiful.com/hc/en-us/articles/29937502247195-How-do-I-turn-off-the-option-to-RSVP-Maybe-on-my-event

**App stores**
- https://apps.apple.com/us/app/partiful-party-invite-maker/id1662982304
- https://play.google.com/store/apps/details?id=com.partiful.partiful

**Press and awards**
- https://www.cnbc.com/2025/04/19/meet-partiful-the-gen-z-party-planning-staple-thats-taking-on-apple.html
- https://blog.google/products-and-platforms/platforms/google-play/google-play-best-apps-games-2024/
- https://9to5google.com/2024/11/18/best-android-apps-2024/
- https://x.com/ccheever/status/1858697505707618706 (Expo CEO tweet)
- https://www.vice.com/en/article/invites-is-apples-new-party-planning-app/ (via a scrape in GitHub `StradSlater1/rationtalk`)
- https://www.pocket-lint.com/partiful-app/
- https://nogood.io/blog/partiful-marketing-strategy/

**Critique and reviews**
- https://ixd.prattsi.org/2025/02/design-critique-partiful/
- https://avirn.medium.com/partiful-friction-log-a4ff841902f2
- https://worldspiritsockpuppet.com/2024/05/09/things-i-hate-about-partiful.html

**Design system**
- https://styles.refero.design/style/6db1057d-3457-4173-9184-df160415f060 ("Partiful design system")

**Code and data evidence on GitHub**
- `Porkbutts/jetaasc-events` `clis/partiful.py`: full THEMES and EFFECTS lists used against Partiful's API.
- `KalebCole/partiful-cli`: reverse-engineered create-event defaults. See `docs/research/2026-08-12-event-write-mapping-public-assets.md`, `internal/app/events_write_test.go` and `spec/partiful.openapi.json`.
- `mrh-is/partiful-mcp` `docs/poc/partiful-api-notes.md` and `src/schemas.ts`.
- `ddhar1/partiful-py` `Partiful_Types.py`.
- `prateek200445/try_scraping_events` `check/data/*.json`: real scraped events with `displaySettings`.
- `nzoschke/jukelab` `src/lib/animations.ts`, `src/lib/themes.ts` and `src/routes/spotify/*/+page.svelte`: third-party code rendering Partiful's own theme and animation assets.
- `drshailesh88/build_playbook` `research/ux-patterns/...`: Mobbin-screenshot transcriptions of Partiful flows.
- `Ericolink/PasesLink` `INVITATION_COMPETITIVE_ANALYSIS.md`: cites https://swmansion.com/case-studies/partiful.

### Recognition and scale
- **Google Play "Best App" of 2024** (Best Overall). VERIFIED: blog.google, 9to5Google, the Charlie Cheever tweet, LatestLY.
- **About 500,000 monthly active users** averaged in Q1 2025, up 400% year over year; 9 in 10 users are in the US. REPORTED (CNBC, via search summary).
- **"over 2 million users by 2025"** with "virtually nothing on paid advertising". REPORTED (nogood.io summary).
- **Founded 2020** by Shreya Murthy and Joy Tao, both ex-Palantir. VERIFIED (2+ summaries).
- **$20M Series A1** led by a16z. REPORTED.
- **Guest cap of 1,000** per event. REPORTED (Vice).
- **Apps:** iOS launched 2023, Android 2024. REPORTED (CNBC summary).

### Concept
- A "digital party flyer" for Gen Z. The invite **is** a living event page: an animated background (Theme), an animation overlay (Effect), a poster, a title font, emoji RSVP, and a social feed. VERIFIED (nogood, Pocket-lint, App Store).
- The designs are humorous and casual, and some are made by in-house designers. Examples from CNBC (REPORTED):
  - a lime-green parody cover of Charli XCX's "brat";
  - Shrek in sunglasses;
  - RSVP tracking "under a portrait of Martha Stewart and Snoop Dogg".

### Experience sequence (recipient)
1. **Gets a link** by SMS or another channel. The page opens in any browser; no app is needed. VERIFIED (birthday page: "guests can RSVP from any browser without needing to download an app").
2. **Lands on a full-page event**:
   - the animated theme background (a looping video) fills the page;
   - the effect layer (falling or drifting objects) plays over it;
   - the event content shows the poster or flyer image, title in the chosen title font, date and time, "Hosted by", location, and spots left (for example "10/10 spots left");
   - three big emoji RSVP buttons.
   - REPORTED (Mobbin transcriptions in build_playbook). Theme and effect layers VERIFIED by API data.
3. **Taps an RSVP button.** The choices are 👍 **"I'm Going"**, 🤔 **"Maybe"**, 😢 **"Can't Go"**. REPORTED (Mobbin transcription, two files).
   - The Pratt IxD critique confirms the left-to-right order Going, Maybe, Can't Go (VERIFIED).
   - A host-side check-in screen shows the set "🤙 Going · 🤔 Maybe · 😢 Can't Go". So the "Going" glyph varies by emoji set (REPORTED).
4. **A modal opens** with the chosen emoji ringed; the guest can switch in place. It asks for:
   - "YOUR NAME";
   - "PHONE NUMBER" with a country-flag prefix and the reassurance "**Just for event updates. No spam.**";
   - an "ATTENDEE COUNT" dropdown ("1 attendee / 2 attendees");
   - an optional "**+Post a comment**" field with a GIF picker;
   - CANCEL / CONTINUE buttons.
   - REPORTED (Mobbin transcription; consistent across three files).
5. **SMS code verification.** Phone verification only, with no username or password. VERIFIED (Pratt critique: "it only affords a phone number for logging into the app"; Ericolink).
6. **After the RSVP**, a social feed appears: comments, reactions, GIFs, photos, and who else is going. Some information (address, guest list) is gated until the guest RSVPs. VERIFIED (worldspiritsockpuppet complaint + Ericolink).
7. **Ongoing:**
   - Text Blasts from the host (VERIFIED, App Store copy);
   - a shared Photo Album (VERIFIED, App Store);
   - automatic reminders;
   - a "boop" feature that sends random emojis to friends (REPORTED, CNBC/nogood).

### Signature interactions and mechanics
- **Theme vs Effect are separate axes.** The editor docks THEME / EFFECT / SETTINGS (on iOS: "Theme (NEW) / Effect / Settings" round buttons; on web: a right rail "BACKGROUND / ANIMATION / SETTINGS / PREVIEW"). VERIFIED (help centre: "use the Theme and Effects sidebars to change the Theme (background) and Effect (animations)") plus REPORTED Mobbin detail.
- **Effect tray:** a horizontal row of circular swatches over the still-visible page. The selected swatch gets a ring, and changes apply live behind the tray. There is also an upload tile for a custom effect. REPORTED (Mobbin, build_playbook `by-pattern.md` §3b).
- **Custom colour theme:** "open the theme toolbar on your event page and use the slider to select a color". VERIFIED (help centre).
  - In the API this is `customThemeConfig`, for example `{ "pattern": "static_horizontal_gradient", "config": { "primaryHue": 333.33… } }`. VERIFIED (scraped event JSON).
- **Title-font "personalities":** a segmented control directly under the live title reading **"Classic / Eclectic / Fancy / Simple"**, each label set in its own typeface. REPORTED (Mobbin, three files).
- **Default create values** (web bundle module 79372, non-international fallback):
  - theme `cloudflow`, effect `fireflies`, titleFont `display`;
  - the "Let's Party" poster;
  - `rsvpButtonGlyphType: "emojis"`.
  - The date, locale and **reduced-motion preference** change which poster, theme and "reduced-motion effect" are selected.
  - VERIFIED (KalebCole/partiful-cli research doc + test fixtures).
- **Poster assets** are 2:3 portrait. Example: `{"id":"birthdaycake.png","name":"Birthday Cake","url":"https://assets.getpartiful.com/posters/birthdaycake.png","height":1200,"width":800,"tags":["birthday"],"categories":["birthday"],"blurHash":"LKO2?U%2Tw=w]~RBVZRi};RPxuwH"}`. VERIFIED (test fixture). BlurHash is used for placeholder blur-up loading.
- **Asset delivery** (REPORTED, from third-party code that consumes the assets):
  - themes are looping videos at `https://assets.getpartiful.com/backgrounds/{theme}/web.mp4`, with a `thumbnail.png`;
  - effects are either **Lottie JSON** (`https://assets.getpartiful.com/animations/{name}/web.json`) or mp4;
  - effect metadata fields include `fullScreen: true`, `flyerLayer: 1`, `pinToBottom: true`, `hasMultipleSizes`, `hasAndroidRgbGrayscale`, and a category such as `"🐒 Fun"` or `"⚽️ Sports"`.
- **On iOS**, effects render as **video with a transparent alpha channel, GPU-rendered**. REPORTED (Ericolink, citing the Software Mansion case study).
- **Host-side extras:**
  - "Can't decide when? Poll your guests →" (a "Find a Time" poll; RSVPs auto-update when the host picks a time);
  - "Chip In" cost-splitting on the honour system;
  - Questionnaire;
  - "Open Invite" toggle;
  - "Require Guest Approval".
  - REPORTED (Mobbin, friction log).
- **"Party Genie"** AI inspiration: "Need inspo? Ask the Party Genie", "What's your party vibe?" chips (🔥 trending, 🎂 birthday, 🍪 chaos, 🍳 chill, 👯 besties), "Randomize", "Or create from scratch". REPORTED (Mobbin) and VERIFIED by name (Google Play award coverage).
- **Partiful Cards** (group e-card, launched late 2025):
  - pick from "thousands of designs" or upload your own;
  - "make it pop with confetti, balloons, and other effects";
  - invite friends as **cosigners** who leave comments together, then "send to the recipient once everyone's signed";
  - the link "works everywhere: text, email, or DMs";
  - use cases: "shared birthday wishes, get well notes, and group roasts".
  - VERIFIED (blog post and /cards pages, via search summaries; consistent across 2 queries).

### Typography
**Title fonts offered to hosts** (API `titleFont` identifiers seen in real event data):
- `display` (the default), `manrope`, `goodman`, `nokja`, `engravers`, and `null`.
- VERIFIED: values observed in scraped JSON and in two independent API clients.
- Manrope is a free Google Font (VERIFIED: fonts.googleapis.com returns 200).
- "Goodman", "Nokja" and "Engravers" are presumably the families of the same names (Engravers is a classic engraved-caps face). The mapping from identifier to commercial family and licence is NOT FOUND.
- The UI groups the fonts as **Classic / Eclectic / Fancy / Simple** (REPORTED). The exact mapping from those labels to the identifiers is NOT FOUND.

**Partiful's own brand and marketing type** (REPORTED, single source: Refero):
- **"Partiful Display Medium"**, a custom display face:
  - weights 400/500;
  - sizes 26 / 40 / 42 / 48 px, and up to 112 px for hero headlines;
  - line-height 1.00–1.20;
  - letter-spacing −0.02em to −0.03em;
  - fallbacks Cabinet Grotesk and Satoshi;
  - "slightly rounded geometric letterforms at weight 500 reading as celebratory without being childish".
- **TWK Lausanne Pan** (Weltkern, commercial) for UI text.

### Colour palette and themes
**Full THEMES list** (API identifiers; VERIFIED from `clis/partiful.py`, with real values corroborated in scraped events: `midnight`, `grass`, `lavaRave`, `starburst`, `aquamarine`, `daybreak`, `karaoke`, `cloudflow`):

> aquamarine, aquatica, aurora, beach, beer, blacklight, bokeh, bubblegum, candy, champagne, cloudflow, crystal, customColor, darkSky, daybreak, forest, galaxy, girlyMac, golden, grass, ice, ink, kaleidoscope, karaoke, komorebi, lavaRave, lofiGrass, meadows, midday, midnight, oxblood, parchment, phantom, pool, rainbowGlitter, rush, shroomset, ski, slate, snowPaws, starburst, storybloom, sunrise, sunset, toile, twilight, watercolor, whisky, winterWonderland

That is 49 entries, including `customColor`.

- Theme hex values: NOT FOUND. They are video and texture backgrounds, not flat colours.
- **Marketing site** (REPORTED, Refero):
  - "Midnight Ink" `#000000` and "Pure Canvas" `#ffffff`;
  - "full-bleed photographic heroes washed in purple-to-pink gradients";
  - "soft periwinkle-to-white gradient backgrounds";
  - "black is the primary action colour: filled black buttons … no blue accent".

### Motion / effects
**Full EFFECTS list** (API identifiers, VERIFIED, `clis/partiful.py`; 55 entries including "none"; real values seen in scraped events include `confettiExplosion`, `fireflies`, `dandelions`, `lights`):

> none, balloons, basketball, beachballs, beerPong, bows, bubbles, bunnies, cascade, cash, christmasLights, confetti, **confettiExplosion**, crayons, dandelions, disco, doge, fireCannons, fireflies, fireworks, foils, football, gelt, ghosts, gingerbread, ginkgo, glowbugs, graduation, handprints, hearts, kisses, lasers, leaves, lightning, lights, magnolias, pizzaToppings, presents, sakura, shadowBats, shamrock, smoke, snowflakes, snowman, spaceInvaders, sparkles, spiders, spiderwebs, starrySky, stars, sunbeams, tennis, thanksgivingFood, winterCreatures

- Birthday-relevant effects: `balloons`, `confetti`, `confettiExplosion`, `fireworks`, `fireCannons`, `sparkles`, `presents`, `disco`, `lights`, `stars`, `bubbles`.
- Help centre wording: "add effects like bubbles, fireworks, confetti, and more". VERIFIED.
- Timings: NOT FOUND. The effects loop; Lottie and video files loop by default (REPORTED from jukelab `<video autoplay playsinline loop muted>`).
- Reduced motion: a separate "reduced-motion effect" is chosen when the guest prefers reduced motion. REPORTED (reverse-engineering note).

### Sound / music
- No autoplay sound found.
- Hosts can add a playlist ("+ Playlist" chip; "upload a collaborative playlist"). REPORTED (Mobbin + Pocket-lint).

### Tech
- React Native + **Expo** (VERIFIED: Expo CEO tweet "It's built with Expo" + Ericolink), with Reanimated and Gesture Handler, and native SwiftUI/Kotlin layers.
- iOS App Clip (<50 MB) and iOS Live Activities. REPORTED.
- Backend is Firebase (project ID `getpartiful`) and assets are served from `assets.getpartiful.com`. VERIFIED (API clients).

### Copy and microcopy (verbatim where marked)
- **App Store** (VERIFIED):
  - "Make it aesthetic with page themes, effects, and event posters—or upload your own"
  - "Create free event invite pages that stand out, track who's going, share a Photo Album, and keep guests updated with Text Blasts."
- **RSVP buttons:** "I'm Going" / "Maybe" / "Can't Go" (REPORTED, Mobbin). The help centre uses "Going" / "Can't Go" / "Maybe" (VERIFIED).
- **Phone microcopy:** "Just for event updates. No spam." (REPORTED, Mobbin ×3)
- **Composer placeholder:** "Write something fun!" (VERIFIED, quoted by a critic)
- **Editor and empty states** (REPORTED, Mobbin):
  - "Welcome to Partiful, Sam!", "+ New event", "Browse Templates"
  - "Set a date...", "Hosted by (optional) host nickname", "Unlimited spots", "+ Cost per person"
  - "Add a description of your event", "More to say? + New section"
  - chips "+ Link · + Playlist · + Registry · + Food situation"
  - "Quick actions for hosts", "Collect Info", "Reminders", "Require Guest Approval"
  - the home card badge "👑 HOSTING" and an undated "TBD" chip.
- **Default birthday wording:**
  - title placeholder **"Birthday Bash"** (REPORTED, Mobbin);
  - the default poster is named **"Birthday Cake"** (VERIFIED);
  - birthday template names "29 Club", "Raise a glass", "End of an era" (REPORTED, search summary of partiful.com/birthday-party-invitations).
- **Cards** (search summary; REPORTED): "for moments when a text won't cut it"; designs "that don't look like they came from your grandmother".

### Confidence summary
| Area | Confidence |
|---|---|
| Effects list and themes list | VERIFIED |
| Title font identifiers | VERIFIED |
| RSVP button wording | VERIFIED |
| Emoji glyphs | REPORTED (Mobbin, two variants) |
| Brand fonts | REPORTED (Refero only) |
| Effect timings | NOT FOUND |
| Mapping from "Classic/Eclectic/Fancy/Simple" to fonts | NOT FOUND |

---

## 2. Apple Invites — https://www.icloud.com/invites (web) and the App Store app `id6472498645`

### Source pages
**Apple**
- Newsroom: https://www.apple.com/newsroom/2025/02/introducing-apple-invites-a-new-app-that-brings-people-together/ (title and quotes, via search summary and a StockTitan copy)
- iCloud+ marketing tile: verbatim HTML scrape in GitHub `AdyaTech/...Apple-Clone-` (`iCloud+ - Apple (IN).html`)
- https://learn.icloud.apple/invites
- Support:
  - https://support.apple.com/guide/apple-invites/create-an-event-dev1d1c7cb6b/ios
  - https://support.apple.com/guide/apple-invites/rsvp-to-an-event-devc9d9cdbd5/ios
  - https://support.apple.com/guide/apple-invites/approve-or-deny-rsvp-requests-dev48e9e39e0/ios
- iCloud Terms of Service §5 "Apple Invites" (verbatim in GitHub `mnov88/dsacontracts` and `LORDLYAMIGO/eudia-hackathon-eula-handler`)

**Press**
- MacRumors:
  - https://www.macrumors.com/2025/02/04/apple-invites-app-hands-on/
  - https://www.macrumors.com/2025/06/24/apple-invites-background-update/
  - https://www.macrumors.com/2026/07/21/apple-invites-app-two-new-features/ (verbatim RSS in GitHub `rlridenour/elfeed-db`)
  - https://www.macrumors.com/2026/09/30/apple-invites-app-three-new-features/ (verbatim RSS in `IT-Guy007/BigTechNews`)
- Fast Company: https://www.fastcompany.com/91272502/apple-launches-invites-its-event-invitation-app-that-takes-on-partiful
- Vice, TechSpot, ZDNet and Bloomberg: verbatim scrape in GitHub `StradSlater1/rationtalk` `Scraped_news/020225/33.csv`
- Product Hunt: https://www.producthunt.com/posts/apple-invites-2 (verbatim in `Larkspur-Wang/Daily_Hot_Website`)

**UI measurements**
- GitHub `Achref23illi/ui-craft` `refs/notes.md`, `refs/recipes.md` and `refs/patterns.md` (measured from Mobbin screenshots)
- `drshailesh88/build_playbook` (Mobbin URLs, e.g. https://mobbin.com/screens/5a5a0fdb-b99a-4352-bd57-80680ca6862d)

### Recognition and scale
- Apple first-party, **launched February 4, 2025**. VERIFIED (newsroom, MacRumors, Bloomberg).
- Creating events requires iCloud+ ("at least 50GB of storage", $0.99/month); anyone can RSVP free on any device, even without an Apple Account. VERIFIED.
- Capped at **100 guests** per event. VERIFIED (Vice + TechSpot).
- Internal codename "**Confetti**". REPORTED (Gurman/Bloomberg via ZDNet).
- Minimum hosting age 13. VERIFIED (iCloud ToS).

### Concept
- One event equals one tall, photo-led card. A full-bleed background image sets the mood (and reportedly the colour scheme).
- Apple services are stitched in: Maps, Weather, a Photos **Shared Album** and an Apple Music **Shared Playlist**.
- Marketing copy (VERIFIED, verbatim from the apple.com iCloud+ page):
  > "**Apple Invites** is a new way to create unique invitations for your biggest moments. Pick a background or use Apple Intelligence to generate an image and design your invitation. Use Apple Music, Photos, Maps and more to bring your event to life. Then send it to all your guests and track their RSVPs. It's everything you need to get the party started, and it's included in your iCloud+ subscription."
- Secondary marketing line: "Create unique party invitations for life's most exciting moments with Apple Invites." VERIFIED.
- Product Hunt tagline: "**Bring people together for life's special moments**". VERIFIED.
- Newsroom title: "Introducing Apple Invites, a new app that brings people together for life's special moments". VERIFIED.
- Brent Chiu-Watson quote: "With Apple Invites, an event comes to life from the moment the invitation is created, and users can share lasting memories even after they get together." VERIFIED (newsroom via search summary and StockTitan).

### Experience sequence (recipient)
1. **Receives a link** by Messages, Mail, Share Link or Copy Link. The host chooses "Invite with Public Link" or "Invite Individuals". REPORTED (ui-craft).
2. **Opens** in the app or at icloud.com/invites. **The invitation is a portrait card with full-bleed background art**:
   - the title is in a wide display face, about 34 pt, heavy (≈800), white, with date and place (14 pt) under it;
   - card size about 337 × 575 pt, corners about 28 pt;
   - a "Hosting" chip with a crown in the top-left for hosts.
   - REPORTED (ui-craft, measured).
3. **Scrolls the event page.** Every section is a **translucent card tinted from the background** (16 pt gutters, about 8 pt gaps) with a small icon and a 13/600 label in the event's accent colour: Weather, Directions, Shared Album, Playlist. REPORTED (ui-craft). Maps directions and weather forecast VERIFIED (Wikipedia/TechSpot summaries).
4. **RSVPs** with "**Going**", "**Not Going**" or "**Maybe**", then "**Send Reply**". An optional note is "visible to the host and other guests". On iCloud.com the guest also enters a name in the Guest List tile. VERIFIED (Apple Support, two locales).
   - UI: a 3-segment capsule about 72 pt tall (icon 16 + label 13/600); **the chosen segment turns white**.
   - The reply sheet shows "✓ Going" (22/700) with a close ×, a name row with Edit, a message field, a full-width white "Send Reply" button (51 pt), and a 12 pt grey privacy note.
   - REPORTED (ui-craft, measured).
5. **Celebration (since v1.10, 21 Jul 2026):** "**a confetti animation now appears when guests reply**", and "hosts and guests can now react with emoji when someone replies". VERIFIED (MacRumors text).
6. **Contributes** photos and videos to the Shared Album and songs to the Apple Music playlist. An Apple Account is required for these; a Music subscription is needed for the playlist. VERIFIED (Support + ToS).
   - Since v1.12 (30 Sep 2026), full-resolution album sharing is open to anyone, "including users without an Apple device". VERIFIED.
7. If the host turned on "Approve Guests", the guest taps "Open Invitation" → "Done" and waits for approval. VERIFIED (Support).

### Signature interactions and mechanics
- **Background picker:**
  - **Photos** and **Camera** (two white 52 pt discs);
  - **Playground** (Image Playground / Apple Intelligence);
  - curated sections **Emoji / Photographic / Colors**, as portrait tiles about 88 × 120 pt with ≈10 pt corners, three visible plus a peek.
  - VERIFIED (Apple Support names) + REPORTED (ui-craft sizes).
- **Create screen = the invitation itself:** a gradient ground, an "Add Background" pill, stacked translucent cards (title placeholder ≈30/700 grey; Date and Time; Location), "×" top-left and a "Preview" pill top-right. REPORTED (ui-craft).
  - Preview banner: "Invitation Preview — This is what guests will see. You'll publish and invite guests in the next step." REPORTED (build_playbook).
- **Onboarding:** a carousel of tilted portrait event cards, a title ≈30/700 centred, and a **white "Create an Event" pill about 49 pt tall that hugs its label** (it does not span the width). REPORTED.
- **Background additions (June 2025, "Photographic" section):** clouds, a lime slice in soda water, lemon slices in punch, a frosty beer, watermelon slices, a pool inner tube, **a disco ball**, orchid flowers, bamboo shoots. VERIFIED (MacRumors summary).
- **Later updates:**
  - links in invitations (May 2025);
  - Home Screen widget (Aug 2025);
  - co-hosting (REPORTED);
  - v1.10 emoji reactions and confetti on RSVP;
  - v1.12 photorealistic Image Playground backgrounds and email magic-link verification.

### Typography
- "Tap Event Title, **choose a font style**, enter the name for your event". VERIFIED (Apple Support).
- **Four** title fonts. REPORTED (MacRumors hands-on, via search summary).
- **Font names: NOT FOUND.** A measured note calls the title "a wide display face ≈34/800 white" (REPORTED).
- UI chrome is the system font (SF Pro). PRIOR (unverified).

### Colour palette / themes
- Dark, photo-led UI ("dark event invitations, photo-led"). REPORTED.
- Section cards are tinted from the background image. REPORTED (ui-craft; Ericolink: "colour scheme automático desde la imagen").
- Hex codes: NOT FOUND.

### Motion / effects
- Confetti on RSVP reply (v1.10). VERIFIED. Its timing is NOT FOUND.
- Tilted carousel cards in onboarding. REPORTED.
- Developers have recreated an "Apple invite text animation" in SwiftUI (YouTube titles in `chanhi2000/devlog`), so the intro text animation is distinctive enough to copy. REPORTED.

### Sound / music
- An Apple Music Shared Playlist is attached to the event. VERIFIED.
- Autoplay: NOT FOUND (none reported).

### Tech
- Native iOS app (iOS 18+) plus a web app at icloud.com/invites. Image Playground and Writing Tools (Apple Intelligence). VERIFIED.

### Copy and microcopy (verbatim)
- **RSVP:** "Going" / "Not Going" / "Maybe" / "Send Reply" (VERIFIED)
- **Approval flow:** "Open Invitation", "Done" (VERIFIED)
- **Labels** (REPORTED):
  - "Add Background", "Edit Background", "Create an Event", "Preview";
  - "Hosting", "1 Access Request ›";
  - "Invite with Public Link", "Invite Individuals", "Choose a Guest", "Approve Guests";
  - group labels "HOST", "GOING (1)", "REQUESTING TO JOIN";
  - "Create Album", "Add Playlist".
- **Default birthday wording:** NOT FOUND.

---

## 3. Paperless Post (Cards) and Flyer by Paperless Post — https://www.paperlesspost.com

### Source pages
- **Help centre:**
  - https://paperlesspost.zendesk.com/hc/en-us/articles/4407067180187-Editing-Removing-or-Adding-a-Envelope-and-Liner (cited in GitHub `Gurjoban0004/letters/docs/design-research.md`)
  - https://paperlesspost.zendesk.com/hc/en-us/articles/4408189210779-Send-a-RSVP-Reminder-or-Follow-Up-Email-or-to-Guests-or-Recipients
  - https://paperlesspost.zendesk.com/hc/en-us/articles/38992736702363-Opt-in-event-reminders-for-guests (both cited in `Aldo140/vow-motion/docs/REFINEMENT-REVIEW.md`)
- **Group cards:** https://www.paperlesspost.com/cards/group/greeting-cards (cited in `SikeGottem/SUEDE-Designathon-2026`)
- **Secondary write-ups on GitHub:**
  - `Ericolink/PasesLink/INVITATION_COMPETITIVE_ANALYSIS.md`
  - `ChrisBrooksbank/letshang/specs/community-platforms-landscape.md`
  - `dylinmat/invitation/docs/EIOS_Design_Brief.md`
  - `rymo4/portfolio/views/_paperless.haml`
  - `FIGBERT/figbert.com/content/projects/cordially/index.md`
  - `ivortwilliams/theweddingseal/README.md`
  - `jwinar/carpet_gato/docs/research/design-audit.md`
- **Homage implementation:** `Theodore-Roosevelt-Presidential-Library/DigitalInvite` ("Paperless Post–style envelope animation") and `mbriney/Homepage/toolkit/digital-invite`.

### Recognition and scale
- Launched **2009**. REPORTED (letshang).
- Designer collaborations with **Oscar de la Renta** and **Rifle Paper Co.** VERIFIED (2 independent sources).
- Also Kate Spade and Martha Stewart. REPORTED.
- Investor Tim Draper. REPORTED.
- Absolute user numbers: NOT FOUND.

### Concept
- **Two products:**
  - **Cards**: formal, with the signature envelope animation.
  - **Flyer**: casual, mobile-first, **no envelope**.
  - VERIFIED: Ericolink + EIOS "Split choice: 'Cards vs Flyers'".
- Ericolink's assessment (REPORTED): splitting Cards from Flyer "recognises that the same ceremonial ritual that works for a wedding is friction at a birthday among friends".
- Positioning: "Elegant envelope animations that mimic physical stationery. … When you receive a Paperless Post, you know the host cares about aesthetics." REPORTED (letshang).
- Older description (REPORTED, rymo4): "3D rendering, animated envelopes, photo effects, and a ridiculous amount of customization".
- Tagline: "Online invitations for all the moments that matter". REPORTED (EIOS).
- Visual style: "typography-focused, minimal imagery". REPORTED (EIOS).

### Experience sequence (recipient)
1. **Email:** a static card image with an open button. The animation lives on the landing page "which is exactly what Paperless Post and Greenvelope do", because email clients strip JS and CSS animation. REPORTED (theweddingseal).
2. **Landing page, envelope stage:** "a skeuomorphic envelope … a fancy letter-opening animation" (REPORTED, figbert), "with name written" (REPORTED, Ericolink: "animación insignia de apertura de sobre con nombre escrito").
   - Envelope and **liner** are customisable by the host. VERIFIED (the help article title "Editing, Removing or Adding an Envelope and Liner").
3. **Exact open sequence.** The only step-by-step description found is a **third-party homage** that calls itself "Paperless Post–style" (REPORTED, TRPL README):
   > "a standard A7 envelope rises, addressed to the guest by name, turns over in 3D to reveal the [brand] seal, the flap opens, the invitation slides out and settles, and an RSVP button appears."
   - The same homage puts "the recipient's name, stamp and postmark" on the envelope face.
   - Its liner option is described as "the Paperless Post patterned-liner look".
   - PRIOR (unverified): the real Paperless Post stage shows the envelope front with the guest's name, a postage stamp and a postmark; it flips to the back, the flap opens to show the liner, and the card slides up and out, then comes forward. The card can have a designed back. Verify the exact order and timing before citing.
4. **Card and RSVP:** after the card settles, the details and RSVP ("Reply") appear. Reminders and follow-ups are documented, and the help centre recognises "guests may open an invitation before they are ready to answer". VERIFIED (help-article titles).
5. **Measured cost of the ritual:** about **9 s load**; it blocks simultaneous access to RSVP and details; it degrades on mobile (55% of traffic). REPORTED (Ericolink; methodology not given).

### Signature interactions and mechanics
- Envelope, liner, stamp and postmark customisation; the card's front and back. The help article is VERIFIED; the rest is REPORTED or PRIOR.
- "**Magic Art**" generative AI illustrations (2025). REPORTED.
- "preview with my photo" personalisation CTA on template cards, plus a filter sidebar (style, theme, colour, photo count, season). REPORTED (carpet_gato audit).

### Typography / colours / effect timing
- Exact font names: NOT FOUND. "Typography-focused" (REPORTED).
- Colours: NOT FOUND (designs are per-card).
- Timings: NOT FOUND beyond the "~9 s" claim.

### Sound
- NOT FOUND.

### Business / tech
- "Coins" pricing per send. VERIFIED (2 sources: letshang "coin-based pricing system"; Ericolink "sistema de 'Coins'").
- Pro subscription about $250/year. REPORTED.
- Per-guest cost of $0.13–0.48. REPORTED (`ephemeral-social/events` spec).

### Copy
- Email "You've received an invitation to …" pattern. REPORTED (test fixture imitation).
- Exact button labels: NOT FOUND.

---

## 4. Greenvelope — https://www.greenvelope.com

### Source pages
- GitHub `wtthornton/SaveTheDate/LESSONS_LEARNED.md` and `IMPLEMENTATION_PLAN.md` (a developer's close reading of Greenvelope's animated save-the-dates)
- `Ericolink/PasesLink/INVITATION_COMPETITIVE_ANALYSIS.md` §3.3
- `DMKALALA/wedding-site/README.md` ("Greenvelope-style envelope animation")
- `BentoAR/invitly-web/ESTRATEGIA_CONTENIDO_MARKETING.md`
- `jwinar/carpet_gato/docs/research/design-audit.md`
- Greenvelope blog: https://www.greenvelope.com/blog/twenty-twenty-five-wedding-invitation-trends

### Recognition and scale
- "+5,000 5-star reviews", with press logos from Martha Stewart Weddings and Brides. REPORTED.
- 1,691 designs in its catalogue (at the time of one audit). REPORTED.

### Concept
- The most literal physical-envelope simulation. Materials: felt, metallic, foil, **wax seals**, die-cut edges. REPORTED (Ericolink).

### Experience sequence (recipient)
1. "**a closed envelope with the names and a stamp on the front**"
2. "**a flap that opens to show a lined interior**"
3. "**the card drawn up out of it**"

Steps 1–3 are REPORTED (wtthornton; three things, in that order). That developer calls the liner "**the detail that makes an envelope look chosen rather than generated**". Their fourth option, "The Lift", is "the Greenvelope gesture, faithfully".

4. **Music plays when the envelope opens.** REPORTED (Ericolink: "música que suena al abrir el sobre"; "apertura animada con audio").
5. **A "details panel"** gathers map, registry, hotels, parking and dress code without cluttering the design. REPORTED.
6. Homage variant: "click or tap to break the seal and reveal the invitation", then home with "a countdown, a photo gallery, FAQ, and an RSVP form". REPORTED (DMKALALA homage; **not** Greenvelope itself).

### Other
- Multichannel send (email, SMS, WhatsApp, Messenger, link) and QR check-in. REPORTED.
- Fonts, colours and timings: NOT FOUND.

---

## 5. Evite — https://www.evite.com

### Source pages
- Scraped evite.com homepage HTML: GitHub `seclab-ucr/A4` and `anonymous-reviewer2/A4`, `rendering_stream/html/evite.com.html`
- `ChrisBrooksbank/letshang` spec
- `Ericolink/PasesLink` table
- `dylinmat/invitation` EIOS brief
- `BentoAR/invitly-web`

### Recognition and scale
- Founded **1998**. REPORTED.
- "100M+ invitations sent". REPORTED.
- Free tier with about 750 guests. REPORTED.

### Concept
- Mass-market casual invites ("birthday parties, barbecues, book clubs"). REPORTED.
- **Premium Invitations** add an envelope. VERIFIED (verbatim HTML):
  > "**Premium Invitations** — Packaged with an animated envelope and digital stamps, Premium Invitations offer a fully customizable, ad-free experience for your guests. Choose packages based on guest list size." — link text "Browse Premium Invitations".

### Experience (recipient)
- Premium: animated envelope with digital stamps, then the card (VERIFIED, existence only).
- RSVP with your own message; add to Maps or calendar; "**Photo Share**", a collaborative album before, during and after the event, gated by RSVP. REPORTED (Ericolink).
- Free version shows ads in the guest experience. REPORTED (2 sources).
- RSVP labels: NOT FOUND. PRIOR: "Yes / No / Maybe".

### Design
- Licensed characters (e.g. Spider-Man) and seasonal promotions ("Set the table for the season"). REPORTED.
- Perceived as dated next to Paperless Post and Punchbowl. REPORTED.
- Fonts and colours: NOT FOUND.

---

## 6. Luma — https://lu.ma (luma.com)

### Source pages
- **Mobbin transcriptions:** GitHub `drshailesh88/build_playbook/research/ux-patterns/excellence/events-creation-landing/live-theming-knobs.md`, `_raw/by-flow.md` §2a and `_raw/by-app.md`, citing https://mobbin.com/flows/05561321-93a6-4d22-afb4-6b93137dac47
- **Real API event JSON:**
  - `echennells/luma-skill/SKILL.md`
  - `QuentinN42/gratusmaximus/assets/evt-*.json`
  - `jashchauhan06/CODE-HUNT/src/index.tsx`
  - `fractal-nyc/luma-to-everything`
  - `it-is-known/known-types/python/src/known_types/luma/event.py`
  - `crouton-labs/capture`

### Recognition and scale
- Widely used for tech, AI and community events. Numbers NOT FOUND.
- A Luma discovery category "cat-ai" lists 1,363 events in one scrape (REPORTED). This is a minor data point.

### Concept
- The event page is themeable live. A tray of theme thumbnails restyles **the entire page instantly** behind the tray.

### Theme mechanics
- **Theme families:** **Minimal / Quantum / Warp / Emoji / Confetti / Pattern / Seasonal (NEW)**. REPORTED (Mobbin, two files).
  - The API corroborates `theme_meta.theme` values `"legacy"`, `"warp"` and a shader theme `{"name":"Lavender","type":"shader","theme":"shader-light","color1":"#ebd9ff","color2":"#d4a1f9","color3":"#eeb8ff"}`. VERIFIED. That suggests Quantum and similar themes are WebGL shader gradients (inference).
- **Four orthogonal knobs:** "**Color / Style / Font / Display (Dark·Light)**". REPORTED.
- **Seasonal "Style" options:** Halloween, Autumn, Snow, Matrix (NEW), Polaroid, Champagne, Foliage, Lantern.
  - "Polaroid" restyles the cover into a stacked polaroid with a paperclip.
  - Halloween gives a "dark orange textured background, monospace title font".
  - REPORTED.
- **Accent:** per-event `tint_color`, e.g. `#4ab2ea`, `#146AEB`, `#f8f4f0`. VERIFIED (API).

### Typography (`font_title` API values, VERIFIED)
- `ivy-mode`, `new-spirit`, `roc-grotesk`, `factoria`, and `null` (the default).
- UI names seen in screenshots: "**Pearl**", "**Ivy Mode**". REPORTED.
- These families are commercial: Ivy Mode (Ivy Foundry), New Spirit (Newlyn), Roc Grotesk (Kostic). Foundry attributions are PRIOR (unverified).

### Experience (recipient)
- Event page in the chosen theme. The registration modal has the header "Your Info", an identity block (avatar, name, email, prefilled if known), an optional custom question, and a **single full-width dark "Register" button**. REPORTED (Mobbin).
- Calendar, reminders and countdown: NOT FOUND this session.

### Motion
- Theme "Confetti" and "Emoji" families exist. REPORTED. Their behaviour and timing are NOT FOUND.

---

## 7. Posh — https://posh.vip

- **Sources:** `drshailesh88/build_playbook` `_raw/by-pattern.md` §3c and `_raw/by-flow.md` §1a (Mobbin https://mobbin.com/screens/750bfd6e-a317-4830-a40c-dc37ef81f3d1, https://mobbin.com/flows/ac5551d6-eec4-4cd0-81f8-57bcc3d7d0d9) and `cover-image-system.md`.
- **Concept:** nightlife and party ticketing with a **dark flyer page**. REPORTED.
- **Builder knobs:**
  - "**Aa Title Font — Default ▾**";
  - "**Accent Color — #dc9c5c**", a hex swatch with its value (sample event);
  - "**Add song from Spotify**", so an event can carry a song;
  - "Create Event".
  - REPORTED.
- **Flyer format:** "…upload a **4:5 flyer** — Other sizes will be cropped." Images and GIFs tabs. REPORTED.
- **First decision** is a segmented toggle "Sell Tickets / RSVP". REPORTED.
- Fonts, colours and effects beyond this: NOT FOUND.

---

## 8. Punchbowl — https://www.punchbowl.com

- **Sources:**
  - GitHub `santnayak/Twitter_Analysis/csv_rest/stream_mattdouglas.csv` (tweets retweeted by Punchbowl's CEO Matt Douglas);
  - `Ericolink/PasesLink` table;
  - `bwilburn6202/teksure` (consumer guide).
- **Envelope:** a 2014 user tweet amplified by the CEO during Punchbowl's "**#AdiosEvite**" campaign: "love the interactive invite and the feeling of receiving a mailed invite **with an envelope**". VERIFIED (tweet text). Another: "@punchbowl is like 1000x easier to use than Paperless Post." VERIFIED.
- Licensed characters; **one-click RSVP without an account**; persistent ads even on the paid plan. REPORTED.
- "free animated cards". REPORTED.
- Exact envelope sequence, fonts and colours: NOT FOUND.

---

## 9. Jacquie Lawson (animated e-cards) — https://www.jacquielawson.com

### Source pages
- Verbatim homepage text scrape: GitHub `Hope304/projectPython/data/Normal/text/normal_jacquielawson.com.txt`
- HTML `<title>` in `sam-muldrow/algophish/capture_data/real_out/17005802333`
- PR Newswire release (Oct 28 2025) mirrored in `api-evangelist/american-greetings/blogs/2025-10-28-jacquie-lawson-announces-new-2025-animated-advent-calendar.md`
- Brand portfolio note in `api-evangelist/american-greetings/apis.yml`

### Recognition and scale
- "one of the largest international ecard brands, **renowned for the quality of its art, animation and music**". VERIFIED (press release).
- 16th annual Digital Advent Calendar in 2025. VERIFIED.
- © Microcourt, Ltd.; listed in American Greetings' brand portfolio alongside Blue Mountain. REPORTED.

### Concept
- Hand-crafted animated story cards with music, sold by **membership** ("Prices & Membership", "Gift Membership"). The site's own claim: "Welcome to jacquielawson.com – **the classiest ecards on the web!**" VERIFIED.
- Page title: "Greeting Cards & Animated Ecards | Jacquie Lawson Cards". VERIFIED (two scrapes).

### Birthday cards and copy
- Card titles on the homepage: "**A Tailor-Made Birthday**", "**Birthday Blast**", "**A Birthday Opera**", "**Turning the Stake**". VERIFIED.
- "Explore our new **customisable birthday card**!" VERIFIED.
- Navigation items "Write Your Own Message", "Pick up card", "Reminders", "Upcoming Birthdays". VERIFIED.
- Add-on: "Add a special something to your ecard with a digital gift card or digital gift!" VERIFIED.

### Experience sequence (recipient)
- Recipient "Pick up card" exists as a destination (VERIFIED). The card plays an animated story with a music score, followed by the sender's message. The animation-and-music part is VERIFIED in general terms by the press release; the per-card sequence and timings are NOT FOUND.
- PRIOR (unverified): cards open with a short animated sequence and then show the personal message at the end, with a replay option.

### Typography, colours, tech
- NOT FOUND.
- Images are served from `www.imgag.com` (the American Greetings image CDN) with slick.js carousels. REPORTED (HTML).

---

## 10. Hallmark eCards — https://www.hallmark.com/ecards/

- **Sources:** `bwilburn6202/teksure` ("Hallmark eCards — animated, personalized"); `SikeGottem/SUEDE-Designathon-2026` (listed as a "polished ordinary-day digital card"); Zazzle alt text ("Hallmark ecards has greeting cards for every occasion, mood and recipient").
- Animated and personalised e-cards. REPORTED. A guide (service not named) uses the buttons "Send this eCard" / "Personalize" (REPORTED, ambiguous source).
- Everything else: NOT FOUND.

---

## 11. Moonpig — https://www.moonpig.com

- NOT FOUND in this session.
- PRIOR (unverified) leads: personalised printed cards with optional video or audio messages attached via QR, plus digital gift cards. Do not cite without verification.

---

## 12. Kudoboard — https://www.kudoboard.com

### Source pages
- Product Hunt metadata in GitHub `trolex213/scraper/product_hunt_metadata/kudoboard.json`
- `SikeGottem/SUEDE-Designathon-2026/WIKI/RESEARCH/FRIENDSHIP_APPRECIATION/report-source.md`
- `Day-One-Foundry/toy/.planning/research/FEATURES.md`
- `microsoft/pxt/docs/blog/10th-anniversary.md`
- `yangshun/tech-interview-handbook` (blog post)

### Recognition and scale
- Used by Microsoft MakeCode to collect "**birthday wishes**" for its 10th anniversary. VERIFIED (`kudoboard.com/boards/KxJ5V6Cp`).
- Meta engineers built an internal "Boards" replacement for Kudoboard during a hackathon, which reached over 2,000 boards and 20,000 messages. VERIFIED (author's blog).

### Concept
- Product Hunt description (VERIFIED):
  > "Online group card for birthdays, work anniversaries, and other special occasions. **Add a message, photo, GIF, or video; invite others to post; then deliver!**"

### Experience (recipient)
- A **message wall**: a board of posts (text, photos, GIFs, video) from many people.
- **Scheduled delivery**, **slideshow** playback, and **print**. REPORTED.
- Free tier limited per board ("X of 20 posts used"). REPORTED.
- Fonts, colours and effects: NOT FOUND.

---

## 13. GroupGreeting — https://www.groupgreeting.com

- **Sources:** Product Hunt metadata in `trolex213/scraper/product_hunt_metadata/groupgreeting.json`; `yihui/yihui.org/content/en/2021-04-27-john-retirement.md`; `igormartins4/parabuains/.planning/research/FEATURES.md`.
- Description (VERIFIED, Product Hunt):
  > "Create group cards for the office that multiple people can sign. Office birthday cards. **Create a group card in 60 seconds, add photos, and invite others to sign**"
- The signing URL pattern is `groupgreeting.com/sign/{id}`. VERIFIED. Used, for example, by publisher Chapman & Hall for a farewell card.
- Price about $4.99 per card. REPORTED.
- PRIOR (unverified): the card is a multi-page "flip" book that opens with an envelope and confetti.

---

## 14. Tribute — https://www.tribute.co (group video montage)

- **Sources:** GitHub `admrbsn/personal-2023/src/content/case-studies/tribute.md`, `tribute-v3.mdx`, `greetings.md` and `recording-flow.md` (written by Tribute's Director, later Head, of Product Design); `Day-One-Foundry/toy/.planning/research/FEATURES.md`.
- **Concept:** "Tribute lets people organize **group video montages** for birthdays, retirements, farewells — occasions where showing up matters." VERIFIED.
- **Scale** (VERIFIED, from that designer's own case study):
  - crossed **one million videos created** by 2020;
  - revenue went from about $250K (2019) to $700K by May 2020;
  - by the V3 case study the product was about 10 years old.
- **Model:** "free to create, pay to publish". REPORTED.
- **Spin-off:** "Tribute Greetings makes it easy to send meaningful 1-to-1 greeting cards & gifts." VERIFIED.
- **Experience (recipient):** watches one stitched montage of many contributors' clips. The video-wall-as-gift pattern is VERIFIED. Intro and outro, music and themes: NOT FOUND.

---

## 15. Cameo and Bonjoro (personal birthday videos)

- **Cameo** (https://www.cameo.com):
  - A clone of Cameo's booking UI (GitHub `coder-artisan0719/earnfluence`) lists occasions "🎂 Birthday", "🏈 Fantasy football", "🤗 Pep Talk", "🔥 Roast" and the home picks "🎂 **Say happy birthday**" / "🤗 Send a pep talk". REPORTED; a clone, not Cameo itself.
  - The concept (a personalised celebrity video message requested for an occasion) is general knowledge. PRIOR.
- **Bonjoro:** NOT FOUND beyond the domain bonjoro.com. PRIOR: personal video messages for customer onboarding, not a birthday product.

---

## 16. iMessage screen and bubble effects (Apple Messages)

### Source pages
**Apple's internal effect identifiers in open-source iMessage bridges**
- `ReagentX/imessage-exporter` `imessage-database/src/message_types/expressives.rs` and `tables/messages/message.rs`
- `BlueBubblesApp/bluebubbles-app` `lib/helpers/types/constants.dart`
- `airmessage/airmessage-web` `src/data/appleConstants.ts`
- `airmessage/airmessage-android` `SendStyleHelper.kt`
- `beeper/platform-imessage` `MessageMapperTypes.swift`
- `ZekeSnider/Jared` `Configuration.plist`

**Effect descriptions and triggers**
- `R74nCom/Social-Media-Lists` `imessage/effects.txt` and `imessage/effect-triggers.txt`
- `BlueBubblesApp/bluebubbles-app` `conversation_text_field.dart` (auto-trigger code)

**Frame-by-frame measurements from iOS screen recordings**
- `theswerd/imessage-ui`: `references/SPEC.md`, `references/ios/motion/effects.md`, `harness/scenarios.ts`, `registry/imessage/screen-effects.tsx`

**Pattern notes**
- `Meliwat/awesome-ios-design-md`; `SensLiao/Claude-code-setting` (reference anchors)

### Recognition
- Built into every iPhone's Messages app. Usage numbers: NOT FOUND this session.
- Apple's own internal identifier for the Balloons effect is `com.apple.messages.effect.**CKHappyBirthdayEffect**`, so birthday is the canonical use case. VERIFIED (6+ repos).

### Mechanics
- Long-press the send arrow to open the "**Send with effect**" sheet, which has two tabs, **Bubble** and **Screen**. The preview animates in place. VERIFIED (multiple).
- **Bubble effects** (VERIFIED IDs):

| Effect | Identifier | Measured duration (REPORTED (measured), theswerd) |
|---|---|---|
| Slam | `com.apple.MobileSMS.expressivesend.impact` | 640 ms |
| Loud | `…expressivesend.loud` | 1230 ms |
| Gentle | `…expressivesend.gentle` | 3000 ms |
| Invisible Ink | `…expressivesend.invisibleink` | — |

- **Screen effects:** iOS 26 has **eight**, in this order: **Echo, Spotlight, Balloons, Confetti, Love, Lasers, Fireworks, Celebration**. "Shooting Star, which earlier releases had, is gone." VERIFIED (theswerd measured the page dots; R74n marks Shooting Star "[Removed]").

| Effect | Identifier | Behaviour (REPORTED, R74n) |
|---|---|---|
| Echo | `CKEchoEffect` | "Clones of the message float around the screen" |
| Spotlight | `CKSpotlightEffect` | "A spotlight is shown over the message while the rest of the screen is darkened" |
| **Balloons** | `CKHappyBirthdayEffect` | "**Balloons rise from the bottom of the screen upwards**" |
| **Confetti** | `CKConfettiEffect` | "**Confetti falls from the top of the screen**" |
| Love | `CKHeartEffect` | "A heart-shaped balloon is blown up and released from the message bubble" |
| Lasers | `CKLasersEffect` | "Lasers shoot out in all directions from the message bubble" |
| **Fireworks** | `CKFireworksEffect` | "Fireworks explode in the distance" (the screen dims under it; REPORTED, theswerd) |
| **Celebration** | `CKSparklesEffect` | "Sparkles fly in from the top right of the screen". The Lunar New Year variant turns the bubble red with yellow text. |
| Shooting Star (removed) | `CKShootingStarEffect` | "A shooting star shoots across the screen" |

- **Auto-trigger phrases** (VERIFIED by 2+ sources: R74n list + BlueBubbles client code + Zat4 code):
  - "**happy birthday**" → **Balloons**. Also localised: "feliz cumpleaños", "عيد ميلاد سعيد", and others.
  - "congratulations" / "congrats" → **Confetti**
  - "happy new year" (also "Happy Diwali", "Happy Deepavali") → **Fireworks**
  - "pew pew" → **Lasers**
  - "Happy Chinese New Year" / "Happy Lunar New Year" → **Celebration** (red variant)
  - Conflict note: a few third-party bots map "happy birthday" to confetti (e.g. `sethdford/h-uman`). Those are their own heuristics and contradict Apple's behaviour, so ignore them.
- **Screen-effect timings:** **NOT FOUND (not measured).** The theswerd reimplementation uses Echo 2400, Spotlight 2600, Balloons 4200, Confetti 4200, Love 2600, Lasers 3000, Fireworks 3600 and Celebration 3600 ms, but labels them "**UNVERIFIED**… none of the eight animations themselves is measured yet". Treat these as approximations, not Apple values.
- **Reduce Motion:** the effects settle and do not loop, and they degrade under the system Reduce Motion setting. REPORTED.
- **Colours:** Apple's values are NOT FOUND. The approximation uses iOS system colours `#ff3b30`, `#ff9500`, `#ffcc00`, `#34c759`, `#0088ff`, `#af52de`, `#ff2d55` and a heart in `#ff2d55` (REPORTED; the clone's choice).

### Sound
- None. PRIOR: the effects are silent; haptics accompany some bubble effects.

---

## 17. Telegram and WhatsApp birthday animations

- **Telegram** (https://github.com/TelegramMessenger/Telegram-iOS):
  - The profile has a **birthday overlay** (`PeerInfoBirthdayOverlay.swift`) that imports `ConfettiEffect` and `AnimatedStickerNode` and is set up with the user's `TelegramBirthday`. So a contact's profile plays confetti plus an animated sticker on their birthday. VERIFIED (existence, from the source code).
  - Colours, timing and sticker identity: NOT FOUND.
  - A chat-level `playConfettiAnimation()` exists. VERIFIED.
  - PRIOR: Telegram added user birthdays in 2024 with gift prompts; full-screen interactive emoji effects (🎉 and others).
- **WhatsApp:** NOT FOUND this session.

---

## Cross-reference patterns

Counts use only **VERIFIED or REPORTED** evidence. PRIOR and homage items are excluded; the "Supporting references" column shows each item's confidence. Out of 19 references, some are thin (Moonpig, Bonjoro, WhatsApp).

| Pattern | Count | Supporting references |
|---|---|---|
| **Confetti effect** | **6** | Partiful (`confetti`, `confettiExplosion`; VERIFIED); Partiful Cards ("confetti, balloons"; VERIFIED); Luma ("Confetti" theme; REPORTED); iMessage (Confetti screen effect; VERIFIED); Apple Invites (confetti on RSVP reply, v1.10; VERIFIED); Telegram (birthday overlay ConfettiEffect; VERIFIED) |
| **Group message wall / co-signed card / guestbook** | **6** | Kudoboard (VERIFIED); GroupGreeting (VERIFIED); Partiful Cards cosigners (VERIFIED); Partiful event feed with comments, GIFs and photos (VERIFIED); Paperless Post group greeting cards (REPORTED); Tribute video montage (VERIFIED) |
| **Music attached to the experience** | **5** | Apple Invites (Apple Music Shared Playlist; VERIFIED); Partiful ("+ Playlist"; REPORTED); Posh ("Add song from Spotify"; REPORTED); Greenvelope (music plays on envelope open; REPORTED); Jacquie Lawson (animation + music; VERIFIED) |
| **Envelope-open intro** | **4** | Paperless Post Cards (VERIFIED as a feature; sequence REPORTED); Greenvelope (REPORTED, detailed); Evite Premium ("animated envelope and digital stamps"; VERIFIED); Punchbowl ("feeling of receiving a mailed invite with an envelope"; VERIFIED tweet) |
| **Custom title-font picker** | **4** | Partiful (Classic/Eclectic/Fancy/Simple; `display`, `manrope`, `goodman`, `nokja`, `engravers`; VERIFIED); Apple Invites ("choose a font style", four fonts; VERIFIED/REPORTED); Luma (Font knob; `ivy-mode`, `new-spirit`, `roc-grotesk`, `factoria`; VERIFIED); Posh ("Title Font"; REPORTED) |
| **Full-bleed image or animated background under the content** | **4** | Apple Invites (full-bleed background art; VERIFIED + REPORTED measurements); Partiful (looping video themes; VERIFIED); Luma (theme restyles the whole page, shader backgrounds; VERIFIED/REPORTED); Posh (dark flyer page; REPORTED) |
| ↳ with **blur or translucent tinted cards** over the image | **1** | Apple Invites (translucent section cards tinted from the background; REPORTED) |
| **Tri-state RSVP (Going / Maybe / Can't)** | **2** | Partiful ("I'm Going / Maybe / Can't Go"; VERIFIED); Apple Invites ("Going / Not Going / Maybe"; VERIFIED). Evite is PRIOR only. |
| **Emoji RSVP buttons** | **1** | Partiful (👍/🤔/😢 default emoji set; REPORTED; glyph style switchable "Emojis, Icons, seasonal"; VERIFIED) |
| **RSVP with a note or comment** | **3** | Partiful ("+Post a comment"; REPORTED); Apple Invites (optional note visible to the host and others; VERIFIED); Evite (RSVP with your own message; REPORTED) |
| **Celebration animation triggered by the guest's action** | **2** | Apple Invites (confetti on reply; VERIFIED); iMessage (typing "happy birthday" auto-plays Balloons; VERIFIED) |
| **Balloons effect** | **3** | Partiful (`balloons`; VERIFIED); Partiful Cards (VERIFIED); iMessage (Balloons = `CKHappyBirthdayEffect`; VERIFIED) |
| **Fireworks effect** | **2** | Partiful (`fireworks`, `fireCannons`; VERIFIED); iMessage (VERIFIED) |
| **Sparkles / "celebration" effect** | **2** | Partiful (`sparkles`; VERIFIED); iMessage (Celebration = `CKSparklesEffect`; VERIFIED) |
| **Theme and effect as separate axes** (background vs overlay motion) | **2** | Partiful (VERIFIED); Luma (Color/Style/Font/Display + theme families; REPORTED) |
| **Shared photo album** | **3** | Apple Invites (VERIFIED); Partiful (VERIFIED); Evite Photo Share (REPORTED) |
| **Maps / directions / weather on the invite** | **3** | Apple Invites (VERIFIED); Evite (REPORTED); Greenvelope details panel (REPORTED) |
| **Add to calendar** | **2** | Evite (REPORTED); Partiful ("calendar integration", REPORTED via Google Play award summary) |
| **Countdown** | **0** | None found in these products. Partiful has "no countdown" (REPORTED, Ericolink). Mobbin research lists "big-numeral pre-registration countdown" as an unobserved gap (REPORTED). Only a Greenvelope-style homage wedding site has one, and it is not counted. |
| **Portrait poster or card as the hero** (2:3 / 4:5) | **3** | Partiful (800×1200 posters; VERIFIED); Posh (4:5 flyer; REPORTED); Apple Invites (portrait card ≈337×575; REPORTED) |
| **Stamp / postmark on the envelope** | **2** | Evite ("digital stamps"; VERIFIED); Greenvelope ("a stamp on the front"; REPORTED). Paperless Post is PRIOR + homage only. |
| **Envelope liner revealed when the flap opens** | **2** | Paperless Post (liner customisation; VERIFIED help article); Greenvelope ("lined interior"; REPORTED) |
| **Recipient's name on the envelope** | **2** | Paperless Post ("nombre escrito"; REPORTED); Greenvelope ("names … on the front"; REPORTED) |
| **Wax seal** | **1** | Greenvelope (REPORTED) |
| **Host badge with a crown ("Hosting")** | **2** | Apple Invites ("Hosting" chip with crown; REPORTED); Partiful ("👑 HOSTING"; REPORTED) |
| **AI-generated art** | **3** | Apple Invites (Image Playground; VERIFIED); Partiful (Party Genie; VERIFIED); Paperless Post (Magic Art; REPORTED) |
| **Guest RSVPs without an account or app** | **3** | Apple Invites (VERIFIED); Partiful (SMS code only, any browser; VERIFIED); Punchbowl (one-click RSVP; REPORTED) |
| **Group text updates from the host** | **2** | Partiful Text Blasts (VERIFIED); Apple Invites (hosts and attendees can text the group; REPORTED, Vice) |
| **Personal / celebrity video message** | **2** | Tribute (VERIFIED); Cameo (REPORTED via clone) |
| **Animated story e-card with music** | **1** | Jacquie Lawson (VERIFIED) |
| **Licensed characters** | **2** | Evite (REPORTED); Punchbowl (REPORTED) |
| **Reduced-motion fallback for effects** | **2** | Partiful (separate reduced-motion effect; REPORTED); iMessage (REPORTED) |
| **Dark / light display toggle** | **1** | Luma (REPORTED) |
| **Low-res blur-up placeholder** (BlurHash) | **1** | Partiful posters (VERIFIED) |

---

## Ranking (by scale and recognition, best-evidenced first)

The ranking is approximate. Absolute user numbers are mostly NOT FOUND; the evidence behind each position is listed.

1. **iMessage effects (Apple Messages).** Ships on every iPhone, and Apple's own Balloons identifier is literally `CKHappyBirthdayEffect`. Usage figures NOT FOUND.
2. **Apple Invites.** Apple first-party, launched Feb 2025 and actively updated (v1.10 confetti on RSVP, v1.12 in Sep 2026); covered by Bloomberg, Fast Company, MacRumors, Vice and TechSpot.
3. **Partiful.** Google Play Best App of 2024; about 500k MAU in Q1 2025 (+400% YoY); reportedly over 2M users; the Gen-Z default and the explicit target of Apple Invites.
4. **Evite.** Founded 1998, "100M+ invitations sent" (REPORTED), the mass-market incumbent.
5. **Paperless Post.** Since 2009; collaborations with Oscar de la Renta and Rifle Paper Co.; the reference for the luxury envelope ritual.
6. **Tribute.** Over 1M group videos by 2020 (VERIFIED by its design lead).
7. **Jacquie Lawson.** "One of the largest international ecard brands"; American Greetings portfolio; 16 years of advent calendars.
8. **Kudoboard.** The default group card for workplaces (used by Microsoft MakeCode; replaced internally at Meta).
9. **Luma.** Dominant in tech and community events; the richest live theming (shader themes, premium fonts).
10. **Greenvelope.** Over 5,000 five-star reviews (REPORTED); the deepest physical-envelope simulation.
11. **Cameo.** Celebrity birthday videos (thin evidence this session).
12. **GroupGreeting.** Office group cards ("in 60 seconds").
13. **Punchbowl.** Envelope invites, the #AdiosEvite campaign, licensed characters.
14. **Posh.** Nightlife flyers with an accent colour and a Spotify song.
15. **Hallmark eCards.** Thin evidence.
16. **Telegram.** Birthday overlay with confetti (feature verified, scale not covered).
17. **Moonpig, Bonjoro, WhatsApp.** NOT FOUND this session.

---

## Highest-confidence, directly traceable building blocks for the Mustafa site

This is evidence only, not taste. Each line states the source.

- **Envelope stage, if used:** the order **closed envelope with name and stamp → flap opens to a lined interior → card drawn up out of it** (Greenvelope, REPORTED in detail; Paperless Post, Evite Premium and Punchbowl corroborate that an envelope stage exists). The liner is "the detail that makes an envelope look chosen".
- **Hero:** a full-bleed photo or animated background under a portrait card, with a big heavy white display title (Apple Invites; Partiful), plus translucent cards tinted from the photo (Apple Invites).
- **Celebration triggers:**
  - Balloons rising from the bottom on "happy birthday" (iMessage `CKHappyBirthdayEffect`, VERIFIED trigger);
  - confetti on the guest's action (Apple Invites v1.10, VERIFIED);
  - a selectable overlay effect layer separate from the background (Partiful: `balloons`, `confetti`, `confettiExplosion`, `fireworks`, `sparkles`), with a reduced-motion variant.
- **Message wall from many people:** Kudoboard ("Add a message, photo, GIF, or video; invite others to post; then deliver!") and Partiful Cards cosigners, with the option of a video montage (Tribute).
- **Music:** an attached playlist or song (Apple Invites Apple Music; Posh "Add song from Spotify"; Greenvelope music on open; Jacquie Lawson animated cards with music).
- **Countdown:** **not backed by evidence in this category.** It would need a source from another category's research.
