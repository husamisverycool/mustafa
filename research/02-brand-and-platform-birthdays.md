# 02 — Brand & Platform Birthdays: evidence dossier

Category: (A) big-brand / cultural birthday & anniversary web experiences, and (B) how major platforms celebrate a *user's* birthday.
Compiled 2026-10-03. Purpose: every design decision on the "Happy Birthday, Mustafa" site must trace to a real reference. This file is the evidence base for that category.

---

## 0. Method, tooling limits and how to read confidence

**What was possible in this session (read this before trusting any gap):**

- `WebSearch` worked for 33 queries and then hit the session-wide cap ("200 of 200 WebSearch calls"; other agents in the session had used the rest). No further web searches were possible.
- Firecrawl returned HTTP 402 (account out of credits). `WebFetch` and `curl` were blocked by the egress proxy (403 / EGRESS_BLOCKED for 9to5mac.com, awwwards.com, duckduckgo, wikipedia.org).
- To keep going, I used **GitHub code search** (via the GitHub MCP). It searches public repositories and returns verbatim excerpts. That turned out to be a strong primary source in several cases:
  - the **actual production source code** of Wikipedia's 25th-birthday "Birthday mode" (wikimedia/mediawiki-extensions-WP25EasterEggs);
  - the **actual Telegram Desktop source** for its user-birthday features (telegramdesktop/tdesktop);
  - a mirror of **Exo Ape's own CMS content** for the Columbia Pictures 100 case study (verbatim agency copy);
  - Apple's private iMessage effect identifiers, taken from firmware diffs and open-source iMessage clients;
  - archived copies of Google's 2010 PAC-MAN doodle page;
  - Remy Sharp's own blog source describing the CERN WorldWideWeb rebuild.
- Because of the cap, several brands named in the brief (LEGO 90, Pokémon 25/30, Barbie 65, Mickey 90, Coca-Cola, Nike Air Max Day, Firefox/Mozilla, Linux 30, Netflix, Spotify, Snapchat, Instagram, LinkedIn, Apple Watch, Game Boy, Figma/Webflow/Dribbble/Awwwards anniversaries) are **NOT RESEARCHED**. They are not "found to be bad". See §3.

**Confidence labels:**

- **VERIFIED**: confirmed by a primary artifact (production source code, the brand's own CMS or press text, an archived page), or by 2+ independent secondary sources that agree.
- **REPORTED**: one secondary source, or a search-engine summary of a page I could not open. Treat as likely but not certain.
- **NOT FOUND**: searched for and not found. Do not fill these gaps with guesses.

Search-engine summaries can hallucinate. Wherever a summary was the only source, the field is marked REPORTED.

---

## 1. Deep reference cards

### 1. Google — personalized birthday Doodle (signed-in user's birthday) — https://www.google.com (shown only to the signed-in user on their birthday)

- **Source pages:**
  - https://www.launchdigitalmarketing.com/personal-birthday-google-doodles/
  - https://www.skipser.com/p/2/p/dont-forget-to-check-the-google-home-page-on-your-birthday.html
  - https://www.suhelbanerjee.com/2011/02/google-birthday-doodle-for-you.html
  - https://techdows.com/2010/10/do-you-want-google-to-wish-you-happy-birthday-with-a-special-doodle-nowhere-is-the-way.html
  - http://googlesystem.blogspot.com/2010/10/googles-first-personalized-doodle.html
  - https://searchenginewatch.com/2010/10/18/google-login-make-a-profile-get-a-happy-birthday-doodle/
  - https://www.seroundtable.com/google-birthday-doodle-age-seconds-19013.html
  - https://medium.com/@shrutipbihani/uxing-the-users-birthday-19aea42d46fe
  - GitHub: addyosmani/lxjs-slides `elements/cards-element.html` (https://github.com/addyosmani/lxjs-slides/blob/759a2bc01367970559d96af1f930cb301b7f410f/elements/cards-element.html)
  - GitHub: ruy1su/DataMining-Project `data-set/tweets/GOOG/GOOG-2013-11-10.csv` (user tweet)
- **Recognition:** Google's first personalized Doodle. Launched October 2010 for every signed-in user who has a birth date in their profile. Scale: Google's whole signed-in user base. Covered by Search Engine Watch, Search Engine Roundtable and Google Operating System (2010). REPORTED/VERIFIED (2+ sources agree on the 2010 launch).
- **Concept:** On your birthday, the Google homepage logo is swapped for a birthday Doodle that only you see. It greets you by first name and leads to a further birthday surprise.
- **Experience sequence:**
  1. The signed-in user opens google.com on their birthday.
  2. The normal logo is replaced by a birthday Doodle: a cake with candles. One source says "cakes and bakes with dancing candles". REPORTED.
  3. Hovering the Doodle shows a tooltip greeting with the user's first name. VERIFIED (2+ sources).
  4. Clicking the Doodle gives "another birthday surprise". In the 2010 version it linked to the user's Google Profile, which showed "colorful confetti and a Happy Birthday message". REPORTED (2 summaries, 2010–2012 era).
  5. Later versions added a line showing the user's age in seconds, e.g. "819,984,950 seconds young today". VERIFIED (Search Engine Roundtable; corroborated below).
- **Signature interactions & mechanics:**
  - Cake with candles. REPORTED.
  - Name-personalized hover greeting. VERIFIED.
  - Click leads to a second surprise (confetti on the profile page). REPORTED.
  - Age expressed as a huge number of seconds ("N seconds young today"). VERIFIED.
  - Google originally promised never to show your age; the seconds line reversed that. REPORTED (SER summary).
  - Related Google pattern: a Googler's 2014 Polymer demo that recreates Google-Now-style cards contains a birthday card reading `<h1>Happy Birthday!</h1>` … `<h2>You are 590,805,235 seconds young today!</h2>`. VERIFIED as an artifact. That this copies the official Google Now card is my inference, not confirmed.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** "dancing candles". REPORTED (one source). No timings found.
- **Sound/music:** NOT FOUND (none reported).
- **Tech stack:** NOT FOUND.
- **Copy & microcopy (verbatim):**
  - Tooltip: "Happy Birthday [firstname]" / "Happy Birthday, [Your First Name]". VERIFIED wording; the comma and "!" punctuation is uncertain because sources differ.
  - Age line: "819,984,950 seconds young today". VERIFIED (SER).
  - Pattern "You are 590,805,235 seconds young today!". VERIFIED artifact (Addy Osmani demo).
  - A real user's tweet: "Just went to Google and the search logo is wishing me a Happy Birthday! Thx google !" VERIFIED (tweet dataset, 2013).

### 2. Google's 25th Birthday Doodle (Sept 27, 2023) — https://www.google.com/doodles/googles-25th-birthday

- **Source pages:**
  - https://doodles.google/doodle/googles-25th-birthday/
  - https://google-doodles.fandom.com/wiki/Google's_25th_Birthday!
  - https://www.thequint.com/tech-and-auto/tech-news/google-25th-birthday-search-engine-celebrates-its-birthday-with-a-fun-doodle
  - https://www.pcworld.com/article/2083701/google-celebrates-its-25th-birthday-with-a-special-doodle.html
  - https://www.latestly.com/socially/technology/google-birthday-2023-technology-giant-turns-25-celebrates-day-with-doodle-down-memory-lane-5443417.html
  - https://www.newsbytesapp.com/news/lifestyle/google-doodle-celebrates-search-giant-s-25th-birthday/story
  - https://www.seroundtable.com/googles-25th-birthday-doodle-36107.html
  - https://blog.google/company-news/inside-google/company-announcements/google-25th-birthday/
  - https://en.wikipedia.org/wiki/Google_logo
  - GitHub (asset URL): sitapuruniversal/MildStone_Repo `Assignment PW/CSS Part-3 (Flexbox)/6.html`
  - GitHub (asset URL): Aravind-tanneri/google-bday-wall `client/src/App.jsx`
  - GitHub (HN archive): kherrick/hacker-news `archives/2023/2023-09-27/index.md`
- **Recognition:** Shown globally across 180 countries on Sept 27, 2023. REPORTED. Reached the Hacker News front page as "25 Years of Google". VERIFIED (HN archive). Google also published "Google at 25: By the numbers", 25 fun facts. VERIFIED (link in zenany/weekly).
- **Concept:** The company's birthday told as its own visual history. The logo morphs through 25 years of past logos and lands on "G25gle", where the two o's become the number 25.
- **Experience sequence:**
  1. The homepage shows an animated GIF that steps through Google's past logos.
  2. It ends on "G25gle". VERIFIED (3+ sources).
  3. The message "Thank you for searching with us throughout the years." appears. REPORTED (The Quint).
  4. Clicking the Doodle sets off a shower of confetti on the homepage. VERIFIED (The Quint + PCWorld summaries agree).
  5. The click leads to search results or the Doodle info page, as usual for Doodles. REPORTED.
- **Signature interactions & mechanics:**
  - Logo-evolution animation (a timeline compressed into one logo).
  - The age number replaces letters inside the wordmark.
  - Click-triggered confetti burst.
  - It was the first Doodle since 2015 to show the old Catull-serif Google logo. REPORTED (fandom).
- **Typography:** Catull is the serif used in the 1999–2015 Google logos. The current logo is Product Sans. Which logos appear in the GIF is REPORTED; exact frames NOT FOUND.
- **Color palette:** Google brand colors. Hex values not stated by any source: NOT FOUND.
- **Motion:** Animated GIF. Asset: `https://www.google.com/logos/doodles/2023/googles-25th-birthday-6753651837110114.2-law.gif`. VERIFIED (found in code). A `-2xa.gif` variant also exists. Timings NOT FOUND.
- **Sound/music:** NOT FOUND (none reported).
- **Tech stack:** Animated GIF plus a click-to-confetti effect. Confetti implementation NOT FOUND.
- **Copy & microcopy:** "G25gle" (VERIFIED). "Thank you for searching with us throughout the years." (REPORTED, one source).

### 3. Google's 15th Birthday — playable piñata Doodle (Sept 27, 2013) — https://www.google.com/doodles/googles-15th-birthday

- **Source pages:**
  - https://google-doodles.fandom.com/wiki/Google's_15th_Birthday
  - https://www.searchenginewatch.com/2013/09/26/google-celebrates-birthday-with-playable-pinata-doodle-game/
  - https://jaypeeonline.net/internet/google-15th-birthday/
  - http://googlesystem.blogspot.com/2013/09/googles-15th-birthday-doodle.html
  - https://www.forbes.com/sites/erikkain/2013/09/27/google-celebrates-its-15th-birthday-with-a-doodle-game/
  - https://www.nbcnews.com/technolog/how-waste-1-000-hours-today-googles-birthday-doodle-8c11272068
  - GitHub: hashey1000-coder/gamepixy `.backup/trivia.ts.bak` (describes it as "a spinning piñata game")
  - GitHub: angakbari/Dawnicta (asset `https://www.google.com/logos/doodles/2013/googles-15th-birthday-2036005.3-hp.gif`)
- **Recognition:** Global homepage Doodle, shown everywhere except Kenya. Covered by Forbes, NBC News ("How to waste 1,000 hours today") and Search Engine Watch. VERIFIED (multiple outlets).
- **Concept:** A backyard birthday party. You play the little "g" and whack a piñata.
- **Experience sequence:**
  1. Click the Doodle to start the game.
  2. Swing at the piñata with the mouse or space bar, 10 swings in total.
  3. Every hit except the first knocks out candies in Google-colored wrappers, which pile up in the backyard scene.
  4. After the last swing the game shows your score, with options to share it on Google+, go to search, or play again.
  - All steps REPORTED in detail by one summary; the game itself is VERIFIED by 4+ outlets.
- **Signature interactions & mechanics:** Piñata whacking; a fixed number of attempts (10); a candy pile as visible progress; score, then share or replay.
- **Typography:** NOT FOUND.
- **Color palette:** Candy wrappers in Google brand colors. REPORTED. Hex NOT FOUND.
- **Motion:** NOT FOUND (no timings).
- **Sound/music:** NOT FOUND.
- **Tech stack:** HTML5; playable on smartphones and tablets. REPORTED.
- **Copy & microcopy:** CTA set at the end: share score / go to search / play again. REPORTED. Exact labels NOT FOUND.

### 4. Google's 19th (2017) and 28th (2026) birthday Doodles — https://www.google.com/doodles/googles-19th-birthday · https://doodles.google/doodle/googles-birthday-2026/

- **Source pages:**
  - https://google-doodles.fandom.com/wiki/Google's_19th_Birthday
  - GitHub: saveweb/laod `article_index/page-27.html` (Chinese headline "谷歌用生日幸运转盘庆祝其19岁生日", meaning "Google celebrates 19th birthday with a birthday lucky spinner")
  - GitHub: angakbari/Dawnicta posts quoting image captions ("Celebrate google's 19th birthday by spinning the wheel to play games from the past"; "Spin the wheel to play interactive browser games from the past 19 years")
  - https://doodles.google/doodle/googles-birthday-2026/
  - https://uk.news.yahoo.com/google-celebrates-28th-birthday-interactive-065212980.html
  - https://ground.news/article/googles-birthday-2026-doodle-search-engine-giant-celebrates-28th-birthday-with-nostalgic-1st-logo-latestly
  - https://www.bbntimes.com/technology/google-celebrates-its-28th-birthday-with-a-nostalgic-doodle
  - https://newskarnataka.com/technology/google-turns-28-with-nostalgic-birthday-doodle/27092026/
- **Recognition:** Global homepage Doodles.
- **Concept:**
  - **19th, "Google Birthday Surprise Spinner":** spin a wheel to land on one of 19 past interactive Doodles and play it. VERIFIED (3 independent captions or headlines).
  - **28th:** brings back Google's first-ever 1998 logo, with a personalized twist (see sequence). VERIFIED (4 outlets).
- **Experience sequence:**
  - 19th: click the spinner → it lands on a past game (examples given: PAC-MAN, Snake, a Beethoven musical puzzle) → play it. REPORTED.
  - 28th: the Doodle shows the 1998 logo → click through to a page where you can explore past Doodles from **your own birthday**; there is also a birthday trivia quiz on Google history. REPORTED (Yahoo/ground.news summaries).
- **Signature interactions & mechanics:** Spin-the-wheel random surprise (19th); nostalgia via the original logo; date-of-birth personalization ("Doodles from your birthday"); trivia quiz (28th).
- **Typography / Color / Motion / Tech:** NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Copy & microcopy:** 28th: Google remembered its "humble beginnings as a research project in a garage" and invited users to "let this vintage logo transport you back to the '90s and teleport into the future by checking out Google's newest AI innovation." REPORTED (one summary).

### 5. PAC-MAN's 30th Birthday Doodle (May 21–23, 2010) — http://www.google.com/pacman/

- **Source pages:**
  - Wikipedia "Google Doodle" snapshot archived in GitHub maximz/Photon (`wikipedia/1396144344/Google_Doodle#Google_Doodle.html`)
  - Archived doodle markup: GitHub macek/google_pacman `index.html` (https://github.com/macek/google_pacman/blob/335b170653afb55f05c65f8c0b97f64cea337215/index.html)
  - GitHub suraj-mohapatra/pac-man `logos/2010/pacman10-hp.html`
  - GitHub xlluminate/Illuminate-with-local-games `projects/google-pacman/index.html`
- **Recognition:** Google's **first interactive logo**, made with Namco and shown worldwide. Kept as a permanent page (google.com/pacman) "due to the popular user demand". VERIFIED (Wikipedia via archive).
- **Concept:** For PAC-MAN's 30th birthday, the Google logo itself became a playable PAC-MAN maze spelling "Google".
- **Experience sequence:**
  1. The homepage logo is a PAC-MAN maze whose walls spell the letters of "Google".
  2. The "I'm Feeling Lucky" button is replaced by "Insert Coin".
  3. One press starts the game. A second press adds a second player, Ms. PAC-MAN, controlled with W/A/S/D while player 1 uses the arrow keys. A third press performs an "I'm Feeling Lucky" search.
  4. It plays the original arcade sounds.
  - VERIFIED (Wikipedia + archived markup).
- **Signature interactions & mechanics:** A playable logo; repurposing a familiar button ("I'm Feeling Lucky" → "Insert Coin"); local two-player mode.
- **Typography:** The logo letters are built from maze walls. Font NOT FOUND.
- **Color palette:** NOT FOUND (no hex values in sources).
- **Motion:** Sprite game loop. Timings NOT FOUND.
- **Sound/music:** Yes. "The logo also mimicked the sounds the original arcade game made." VERIFIED.
- **Tech stack:** JavaScript `pacman10-hp.12.js` loaded into the homepage (VERIFIED, archived markup). Sprites and sound mechanism NOT FOUND.
- **Copy & microcopy (verbatim, VERIFIED from archived markup):**
  - Logo title / tooltip: "PAC-MAN's 30th Birthday! Doodle with PAC-MAN™ & ©1980 NAMCO BANDAI Games Inc."
  - Button: "Insert Coin".

### 6. Twitter — birthday balloons on the user's profile (launched July 6, 2015) — https://twitter.com (now x.com), profile page on the user's birthday

- **Source pages:**
  - https://techcrunch.com/2015/07/06/what-advertising-demographic-are-you/
  - https://thenextweb.com/news/twitter-wants-to-know-your-birthday-so-it-can-give-you-e-balloons-and-show-you-more-relevant-content
  - https://www.digitaltrends.com/social-media/twitter-users-birthdays/
  - https://www.washingtoninformer.com/twitter-to-celebrate-users-birthday-with-animated-balloons/
  - https://martech.org/twitter-sets-birthday-balloons-as-bait-to-reel-in-more-personal-data/
  - https://grahamcluley.com/twitter-birthday-balloons/
  - https://wearebrazenpr.com/blog/twitter-just-showered-balloons/
  - GitHub indieweb/wiki `data/b/birthday.txt` and `data/T/Twitter.txt` (https://github.com/indieweb/wiki/blob/cb0e55dc447571d86042125a92dea73fd57fe69c/data/b/birthday.txt)
  - Official post URL recorded there: https://blog.twitter.com/2015/hbd-celebrate-your-birthday-on-twitter (hero image `Kevin_Hart_Bday_.png`)
- **Recognition:** Global platform feature, covered at launch by TechCrunch, The Next Web, Digital Trends and MarTech. The launch demo used Kevin Hart's profile. VERIFIED (multiple outlets).
- **Concept:** On your birthday, animated balloons float up across your profile page. It was also a data-collection device: the birth date was used for "relevant content, including ads".
- **Experience sequence:**
  1. The user adds a birth date in Edit Profile.
  2. On the birthday, anyone who visits the profile (web) sees balloons drift upward, on the first visit or on a page refresh.
  3. The birth date shows in the profile header just below the "joined" date.
  - VERIFIED (TechCrunch + TNW summaries + IndieWeb wiki).
- **Signature interactions & mechanics:**
  - Balloons rise from the bottom of the screen ("balloons fly up from the bottom of the screen", IndieWeb). Not clickable or poppable in any source: NOT FOUND.
  - Plays once per load; not looping.
  - Web only at launch. REPORTED (one summary).
- **Typography:** N/A (balloon graphics). NOT FOUND.
- **Color palette:** NOT FOUND (no source gives balloon colors).
- **Motion:** Upward drift. Speed, sway and count: NOT FOUND. A later open-source Twitter clone (NotTwitterApp, a derivative, not Twitter's code) uses one balloon SVG tinted with `hue-rotate(...)`, a randomized `animationDelay`/`animationDuration`, a CSS variable `--birthday-balloon-sway`, `@keyframes birthday-balloon-float`, a fixed full-screen overlay with `pointer-events-none`, and `display:none` under `prefers-reduced-motion: reduce`. DERIVATIVE: only evidence of how the effect is commonly rebuilt.
- **Sound/music:** None reported. NOT FOUND.
- **Tech stack:** NOT FOUND.
- **Copy & microcopy:** The official announcement slug is "hbd-celebrate-your-birthday-on-twitter" (VERIFIED URL; exact headline NOT FOUND). Birthday visibility options: day and month, plus optional year, each visible to "Public, followers, people you follow, follow each other, or only yourself". VERIFIED (IndieWeb wiki).

### 7. Apple iMessage — "Balloons" screen effect, auto-triggered by "Happy birthday" (iOS 10, 2016 onward) — Messages app on iPhone/iPad/Mac

- **Source pages:**
  - https://www.iphonefaq.org/archives/975515
  - https://www.technerdiness.com/iphone/imessage-screen-effect-words-iphone/
  - https://rottenwifi.com/what-words-trigger-imessage-effects-list-of-imessage-screen-effect-keywords-for-iphone-ipad/
  - https://allthings.how/how-to-add-balloons-to-an-imessage-on-iphone/
  - https://www.whistleout.ca/CellPhones/Guides/how-to-send-imessage-effects-on-iphone
  - https://www.buymobiles.net/blog/lasers-fireworks-and-confetti-the-best-secret-imessage-effects/
  - GitHub blacktop/ipsw-diffs (firmware paths, e.g. `iOS/26_5_23F77_vs_27_0_24A5355q/.../CKHappyBirthdayEffect.md`)
  - GitHub BlueBubblesApp/bluebubbles-app `lib/helpers/types/constants.dart`
  - GitHub ZekeSnider/Jared `JaredFramework/Configuration.plist`
  - GitHub ReagentX/imessage-exporter `imessage-database/src/message_types/expressives.rs`
  - GitHub ClaritasEDU/desmond `imessage_exporter.py`
  - GitHub brightdigit/SyndiKit `Data/JSON/radar.json` (Under the Radar ep. 100 notes "(Sent with Balloons)")
- **Recognition:** Built into Apple Messages on every iPhone since iOS 10. Still shipping: the bundle is present in iOS 26 → 27 beta firmware diffs (VERIFIED). A culturally ubiquitous birthday ritual.
- **Concept:** Typing the words "Happy birthday" makes the message arrive with a full-screen Balloons effect over the conversation. The user can also choose the effect manually.
- **Experience sequence:**
  1. The sender types a message containing just "Happy Birthday". Exclamation marks and emoji are OK; extra words are not. REPORTED (one summary).
  2. On send, a full-screen Balloons effect plays on the sender's and the recipient's screens.
  3. Devices without effect support receive the text plus the label "(Sent with Balloons)". VERIFIED (exporter source + real podcast notes).
- **Signature interactions & mechanics:**
  - Phrase-triggered celebration (the user does not need to find a button).
  - Sibling auto-triggers: "Congratulations" → Confetti; "Happy New Year" → Fireworks. REPORTED; Apple's documentation of exactly these three is per one summary.
  - Other reported triggers: Happy Lunar/Chinese New Year → Firecrackers; Happy Eid → Shooting Star; Happy Deepawali → Fireworks; "Pew pew" → Lasers (unofficial). REPORTED.
- **Typography:** System font (SF). Not stated by sources: NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** Full-screen Balloons animation; direction, speed and physics NOT FOUND in sources. Internally it is a dedicated effect bundle: `/System/Library/Messages/iMessageEffects/CKHappyBirthdayEffect.bundle`. VERIFIED.
- **Sound/music:** NOT FOUND.
- **Tech stack (VERIFIED):**
  - Effect identifier `com.apple.messages.effect.CKHappyBirthdayEffect` = "balloons" (BlueBubbles, Jared, desmond exporter agree).
  - "Celebration" (sparkles) is a different identifier, `com.apple.messages.effect.CKSparklesEffect`.
  - Note: one repo (photon-hq/spectrum-ts) maps CKHappyBirthdayEffect to "celebration". It is outvoted by four others, so treat it as an error.
- **Copy & microcopy (verbatim):** Trigger phrase "Happy birthday" (REPORTED as official). Fallback label "(Sent with Balloons)" (VERIFIED). The other effect labels follow the same pattern: "Sent with Confetti", "Sent with Fireworks", "Sent with Lasers", "Sent with Shooting Star", "Sent with Heart" (VERIFIED, exporter source).

### 8. YouTube's 20th birthday (Apr 23, 2025) — https://www.youtube.com (site-wide easter eggs; first video "Me at the zoo")

- **Source pages:**
  - https://variety.com/2025/digital/news/youtube-20-billion-videos-new-features-20th-birthday-1236375132/
  - https://www.dexerto.com/youtube/youtube-adds-easter-egg-to-iconic-videos-for-20th-anniversary-3184450/
  - https://x.com/howfxr/status/1915373392280129855
  - https://blog.google/feed/youtube-20-birthday-latest-features/
  - https://www.tvtechnology.com/news/youtube-turns-20-celebrates-20-billion-uploaded-videos
  - https://ottverse.com/youtube-celebrates-20-years-with-new-features-and-big-numbers/
  - https://www.fonearena.com/blog/452149/youtube-20th-anniversary-new-features-milestones-hidden-gems.html
  - https://www.tubefilter.com/2025/03/17/youtube-20th-birthday-us-cities-creator-collectives/
  - GitHub rumca-js/RSS-Link-Database-2025 (Reddit r/youtube post: "I was watching 'Me at the zoo' after it's 20th anniversary and I saw this progress bar.")
- **Recognition:** Platform-wide celebration covered by Variety, NPR, WBUR, TV Technology and Tubefilter. YouTube announced 20+ billion uploaded videos. VERIFIED.
- **Concept:** The birthday is hidden inside the product's own controls (player, like button, logo) as easter eggs, rather than on a separate page.
- **Experience sequence:**
  1. The homepage shows a celebratory "Yoodle" logo. Clicking it plays a custom mash-up of Rick Astley's "Never Gonna Give You Up" (a "rick-roll"). REPORTED (one summary).
  2. On select historic videos (e.g. "Me at the zoo"), the progress-bar scrubber handle becomes a birthday cake with a birthday-themed bar. VERIFIED (X post + Dexerto + Reddit).
  3. Liking one of those videos pops a "20" animation over the like button. VERIFIED (X post + Variety summary).
  4. On desktop, typing "bday" anywhere on a watch page switches the player controls back to an old-school design. VERIFIED (X post + Variety).
- **Signature interactions & mechanics:** Cake as the scrubber handle; the age number "20" bursting from the like button; a typed keyword ("bday") unlocks a retro UI; a logo click triggers a music surprise.
- **Typography / Color palette:** NOT FOUND.
- **Motion:** "20" pop animation over the like button. Timings NOT FOUND.
- **Sound/music:** The Yoodle click plays a custom Rick Astley mash-up. REPORTED.
- **Tech stack:** NOT FOUND.
- **Copy & microcopy (verbatim, VERIFIED via the X post):** "1) A birthday themed progress bar 2) A special animation when you like a video 3) On desktop, type "bday" anywhere on a video watch page to activate the old video player".

### 9. Apple at 50 — homepage takeover + "50 Years of Thinking Different" (Apr 1, 2026) — https://www.apple.com · https://www.apple.com/50-years-of-thinking-different/

- **Source pages:**
  - https://9to5mac.com/2026/04/01/apple-50-birthday-homepage-celebration/
  - https://www.macrumors.com/2026/04/01/apple-50th-anniversary-homepage-tribute/
  - https://www.macrumors.com/2026/04/01/apple-celebrates-50th-anniversary/
  - https://www.cultofmac.com/news/apple-homepage-marks-50-years
  - https://www.macobserver.com/news/apple-celebrates-50th-anniversary-with-homepage-animation-featuring-iconic-products/
  - https://www.theapplepost.com/2026/04/01/70308/apple-marks-50th-anniversary-with-animated-homepage-tribute/
  - https://www.neowin.net/news/heres-how-apple-is-celebrating-its-50th-birthday-apple50/
  - https://www.apple.com/newsroom/2026/03/apple-hosts-50th-anniversary-celebrations-around-the-world/
  - https://www.techradar.com/news/live/apple-50th-anniversary-celebration
  - GitHub Turi-Labs/Newsletter-Editor-Agents `knowledgebase/2026-03-12/hn_posts.md` (letter URL + newsroom URL)
  - GitHub CommandPost/FCPCafe `docs/news/20260315-03.md` (newsroom quote)
  - GitHub the-machine-herald/machineherald.io (events article)
  - GitHub stefangrund/eay.cc-static-archive (blog post with an iPad screenshot of the homepage)
- **Recognition:** Apple's own homepage. Global press: 9to5Mac, MacRumors, Cult of Mac, TechRadar live blog; Daring Fireball linked the letter. "50 Years of Thinking Different" reached the HN front page (Mar 12, 2026). VERIFIED.
- **Concept:** A restrained homepage animation. The six-stripe rainbow Apple logo (used 1977–1998) rises and gives way to a sketch-style animation of iconic products, paired with a CEO letter.
- **Experience sequence:**
  1. The homepage loads against a black or white background, depending on time of day.
  2. A solid-colored rainbow logo fades and floats upward.
  3. It reveals a sketch-art animation of products: the original Mac, iMac, iPod, App Store, Watch, iPhone 17 Pro, Vision Pro and more.
  4. The headline "50 Years of Thinking Different" links to Tim Cook's letter.
  5. The rest of the homepage stays characteristically minimal.
  - VERIFIED (9to5Mac + MacRumors summaries agree).
- **Signature interactions & mechanics:** Upward-floating logo reveal; chronological product montage drawn as sketches; theme follows the time of day.
- **Typography:** NOT FOUND (presumably SF Pro, but no source states it).
- **Color palette:** Six-stripe rainbow-logo colors over black or white. Hex NOT FOUND.
- **Motion:** Fade + float-up of the logo, then a sketch-animation video. Timings NOT FOUND.
- **Sound/music:** None on the web page (NOT FOUND). Offline events: Alicia Keys on the Apple Grand Central steps; Paul McCartney concert at Apple Park (VERIFIED).
- **Tech stack:** Homepage "animation video". REPORTED.
- **Copy & microcopy (verbatim):**
  - "50 Years of Thinking Different" (VERIFIED).
  - From the letter: "the world is moved forward by people who think different" (REPORTED).
  - Newsroom: "Apple today announced it will mark its 50th anniversary, celebrating five decades of thinking different and the innovations that have helped shape the way people connect, create, learn and experience the world." (VERIFIED)
  - Other activations: Sydney Opera House "Illuminating Creativity" sails projection (VERIFIED); employee T-shirt, poster and "50" pin; Nasdaq bell (REPORTED).

### 10. Columbia Pictures 100 — "Celebrating a Century of Cinema" (2024) — https://columbia100.watson.la/

- **Source pages:**
  - https://www.awwwards.com/sites/columbia-100-year-anniversary
  - https://thefwa.com/cases/sony-columbia-100-year-anniversary
  - https://www.behance.net/gallery/193964003/100-Years-of-Columbia-Pictures
  - https://www.exoape.com/work/columbia-pictures
  - https://www.mediaplaynews.com/sony-celebrates-columbia-100th-with-fan-quiz/
  - https://shortyawards.com/17th/columbia-pictures-100th-anniversary-global-digital-social-campaign
  - https://collider.com/movie-recs-personality-quiz-columbia-pictures/
  - https://flickdirect.com/news/7799/columbia-pictures-centennial-celebration-unveiling-a-groundbreaking-genre-based-personality-quiz-by-sony-pictures-entertainment/article.ashx
  - https://brandsawesome.com/project/personalized-entertainment-journey-columbias-100th-anniversary/
  - Exo Ape CMS content mirrored on GitHub: realsamiul/final-portfolio-website `portfolio-content/pages/work_columbia_pictures.json` (https://github.com/realsamiul/final-portfolio-website/blob/349cb6d3640c638eed2ee31a10dca8a3d2919004/portfolio-content/pages/work_columbia_pictures.json)
  - GitHub NatanPro2016/exoape `src/pages/Works.tsx` (live URL)
- **Recognition (highest design-award recognition in this category):**
  - Awwwards **Site of the Day** (Apr 18, 2024) + Awwwards **Developer Award**; score 7.42/10 (Design 7.35, Usability 7.26).
  - **FWA of the Day**; **Best of Behance**; Shorty Awards entry.
  - 236K+ page visits and 54K downloads; "two Site of the Day awards".
  - REPORTED (search summaries of the Awwwards/FWA/Behance pages); the awards themselves VERIFIED by 2+ summaries.
  - Studios: **Watson Design Group (WATSON.LA) × Exo Ape** (VERIFIED, Exo Ape's own copy).
- **Concept:** A centenary site whose centerpiece is a personalized quiz: a journey through 100 years of Columbia films and TV that ends by telling *you* which titles shaped you.
- **Experience sequence (Exo Ape copy, VERIFIED):**
  1. Landing on a "century-filled digital experience".
  2. A quiz of **8 interactive questions** that "gradually change based on their responses". Drawing on titles, genres and visuals from a hundred years of film and TV, the quiz tailors itself to each answer. E.g., a user who leans toward horror gets more horror-themed options; one who leans toward 80s films gets more nostalgic ones.
  3. Result: a genre-based personality type plus a curated list of recommended Sony films and series (REPORTED, press). The result is downloadable (54K downloads).
  4. "Seamless page transitions" between steps (VERIFIED from Exo Ape image alt text: "interface of an experience website with seamless page transitions").
- **Signature interactions & mechanics:** Adaptive quiz branching; personalized result and recommendations; downloadable result card; history-as-content (100 years of titles).
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion:** "Seamless page transitions" (VERIFIED, alt text). Library NOT FOUND. Exo Ape's own site uses clip-path polygon reveals per a code-teardown note on GitHub (realsamiul/Freights); not confirmed for this site.
- **Sound/music:** NOT FOUND.
- **Tech stack:** "Strategic backend development to keep the journey original, dynamic, and varied for every user — no matter how many times they return" (VERIFIED). Front-end stack NOT FOUND. Exo Ape services listed: Visual Design, UI & UX Design (VERIFIED).
- **Copy & microcopy (verbatim, VERIFIED from Exo Ape CMS):**
  - Hero title: "100 Years\nColumbia\nPictures"
  - Subtitle: "Celebrating a Century of Cinema"
  - Intro: "In honor of Columbia Pictures' 100th anniversary, we teamed up with Watson Design Group to create a century-filled digital experience and quiz. This took visitors through entertainment history and a personalized journey of self-discovery, revealing their most influential films and TV shows."
  - OG description: "This quiz takes visitors on a journey not only through entertainment history but also through a personalized path of self-discovery, helping fans uncover which film titles and TV shows have shaped them the most."
  - Client testimonial: "Their attention to design, motion, and user experience is unlike anything I had seen before…"

### 11. Wikipedia 25 — "Birthday mode" with Baby Globe (Jan 15, 2026; Birthday mode live Feb 16 – Apr 6, 2026) — https://meta.wikimedia.org/wiki/Wikipedia_25 · https://wikimediafoundation.org/wikipedia25/wikipedia-mascot/

- **Source pages:**
  - Production source code, GitHub wikimedia/mediawiki-extensions-WP25EasterEggs (`i18n/en.json`, `README.md`, `resources/ext.wp25EasterEggs/companion/CompanionConfig.js`, `resources/ext.wp25EasterEggs/core/ClientPrefsHandler.js`, `src/Hooks.php`; ref af2df6d151bb641a05824b87edc3a00d2553d56d)
  - GitHub wikimedia/wikimedia-fundraising-dev `config/payments/Appeal-WP25.wiki` (logo SVG)
  - https://meta.wikimedia.org/wiki/Wikipedia_25
  - https://meta.wikimedia.org/wiki/Wikipedia_25/Celebration_toolkit
  - https://meta.wikimedia.org/wiki/Special:MyLanguage/Wikipedia_25/Celebration_toolkit/Press
  - https://meta.wikimedia.org/wiki/Wikipedia_25/Events/Calendar
  - https://gigazine.net/gsc_news/en/20260115-wikipedia-25th-anniversary/
  - https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/Single/2026-01-15
  - https://en.wikipedia.org/wiki/Wikipedia_mascots
- **Recognition:** Shipped on Wikipedia wikis (among the most-visited sites in the world) as an opt-in appearance setting. Year-long "Knowledge is Human" campaign. VERIFIED (code + Meta).
- **Concept:** A limited-time, opt-in "Birthday mode". A baby-globe mascot sits on articles as a reading companion, with hidden animations and click surprises. Its official description: "a festive atmosphere when activated."
- **Experience sequence (VERIFIED, code strings):**
  1. The reader enables "Birthday mode" in Appearance preferences ("Celebrate 25 years of Wikipedia with a cute reading companion").
  2. A site notice with a "Learn more about Birthday mode" link appears.
  3. On specific articles (chosen by Wikidata QID), Baby Globe appears in one of several states:
     - Laptop: "On page load, Baby Globe types on a laptop with a neutral expression."
     - Phone: "scrolls on a phone"
     - Newspaper: "reads a newspaper"
     - Outerspace: "floats among the stars with an awed expression"
     - Dreaming (sleep transitions)
     - Headphones + Click: "listens to music on headphones. Upon click, Baby Globe does a little dance and some puzzle pieces shine like a disco ball."
     - Camera + Click: "turns from side to side taking pictures. Upon click, the camera flash goes off."
     - Synthesizer + Click: "plays with a synthesizer. Upon click, one of the sounds from this collection plays randomly", linking to Commons "Wikipedia_25_greetings_recorded_for_Birthday_mode".
- **Signature interactions & mechanics:** A mascot companion with idle loops; click-to-surprise; puzzle pieces "shine like a disco ball"; randomized recorded birthday greetings on click; context-aware placement per article.
- **Typography:** NOT FOUND for the mode. The wordmark is the Wikipedia serif wordmark (rendered as SVG paths in the fundraising appeal).
- **Color palette:**
  - The "25" puzzle-piece mark in the WP25 logo SVG is filled **#0E65C0**; the wordmark is **black**. VERIFIED (SVG source, aria-label "Wikipedia 25th Birthday Logo").
  - Campaign palette: white, black and blue, "with the addition of a brighter blue for greater contrast". REPORTED.
- **Motion (VERIFIED, CompanionConfig.js):**
  - Animations are **WebM video** clips with separate **light** and **dark** variants, e.g. `${configName}-idle-light.webm` / `-idle-dark.webm`, plus transition clips such as `dreaming-trans-out-light/dark`.
  - When `prefers-reduced-motion: reduce` matches, a static **WebP** is used instead.
  - README: "Theme Support: Automatic adaptation to light/dark themes and OS preferences."
- **Sound/music:** Yes. The Synthesizer state plays a random recorded birthday greeting on click (VERIFIED).
- **Tech stack:** MediaWiki extension (PHP hooks + JS client prefs), Community Configuration per-page allow/block lists, WebM/WebP assets. VERIFIED.
- **Copy & microcopy (verbatim, VERIFIED):**
  - "Birthday mode"
  - "Enable Birthday mode"
  - "Celebrate 25 years of Wikipedia with a cute reading companion"
  - "Learn more about Birthday mode"
  - "Birthday mode is a limited-time, opt-in feature designed to celebrate Wikipedia's 25th anniversary by creating a festive atmosphere when activated."
  - "…introduces "Baby Globe", a birthday mascot, that acts as a reading companion and unlocks hidden animations and visual "easter egg" surprises for users to discover."
  - The virtual birthday party (Jan 15, 16:00 UTC) had a **pre-party countdown from 15:45 UTC** (REPORTED). Community banners combined members' photos with the puzzle-piece mark, designed as modular tiles that join into collages (REPORTED). Mascot "Wiki-chan" appeared as a surprise on some language editions (REPORTED).

### 12. Wikipedia 20 (Jan 15, 2021) — https://wikimediafoundation.org/wikipedia20/ (also 20.wikipedia.org)

- **Source pages:**
  - https://wikimediafoundation.org/wikipedia20/
  - https://wikimediafoundation.org/news/2021/01/14/wikipedia-celebrates-20-years/
  - https://www.dexigner.com/news/33561
  - https://www.africandigitalart.com/how-wikipedias-20th-birthday-came-to-life-through-design/
  - https://wikimediafoundation.org/wikipedia20/digital-swag/
  - https://commons.wikimedia.org/wiki/Category:Wikipedia_20
  - https://en.wikipedia.org/wiki/Wikipedia_@_20
  - https://x.com/wikipedia/status/1349976277671882753
  - GitHub wikimedia/operations-puppet (20.wikipedia.org redirect entries); archived page title "Celebrating 20 years of Wikipedia – Wikimedia Foundation" (GitHub seanpm2001/SeansLifeArchive_Extras_Website-Archives)
- **Recognition:** Seen by millions through Wikipedia banners, a birthday logo and a commemorative site. Design coverage in Dexigner and African Digital Art. VERIFIED (2+).
- **Concept:** A birthday told through a commissioned symbol language, "Wikidings": 101 customizable symbols by illustrators Karabo Poppy Moletsane (South Africa) and Jasmina El Bouamraoui (German-Moroccan). Inspired by Mayan symbols and Egyptian hieroglyphics, they combine "Lego-style" to tell stories.
- **Experience sequence:** A commemorative site to "look back at the past 20 years, and meet the humans behind the platform", with a downloadable "digital swag" page. REPORTED (structure); exact page flow NOT FOUND.
- **Signature interactions & mechanics:** A modular symbol kit; a look-back across 20 years; human stories; downloadable swag.
- **Typography / Color palette / Motion / Tech:** NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Copy & microcopy (verbatim, VERIFIED, @Wikipedia on X):** "IT IS OUR 20TH BIRTHDAY! 🎂 Wikipedia started as an ambitious idea. Over 20 years, people like you have made it possible. If you are a Wikipedia reader, contributor, donor, or fan — today is for you. Join the celebration" (#Wikipedia20).

### 13. Telegram — user birthdays (2024 onward) — Telegram apps (Desktop source: https://github.com/telegramdesktop/tdesktop)

- **Source pages:**
  - GitHub telegramdesktop/tdesktop @ d8594c011756265de4385408540bd9f7c787a003:
    - `Telegram/SourceFiles/info/profile/info_profile_birthday_effect.cpp`
    - `Telegram/SourceFiles/info/profile/info_profile_values.cpp`
    - `Telegram/SourceFiles/history/view/media/history_view_birthday_suggestion.cpp`
    - `Telegram/SourceFiles/data/data_birthday.h`
    - `Telegram/SourceFiles/ui/boxes/edit_birthday_box.h`
  - GitHub zevlg/telega.el `etc/langs/en.plist` (mirror of Telegram's English language strings)
- **Recognition:** Shipping feature in a messenger with very large global use. Press coverage NOT FOUND (no web search budget left).
- **Concept:** Users set a birthday (day/month, optional year). On the day, the profile shows a "Birthday today" state, plays an animated birthday effect, and the chat suggests gifting.
- **Experience sequence (VERIFIED from code; UI order inferred from module names):**
  1. Set the birthday in the profile editor (`edit_birthday_box`).
  2. On the day, the profile info row label switches from "Date of birth" to "Birthday today". The value becomes "{emoji} {date}"; with a year it reads "{date} ({count} years old)".
  3. Opening the profile plays `info_profile_birthday_effect`, which loads Lottie animated stickers from an emoji set and animates **digits**: a `_digits` vector and `startDigits()`, i.e. the age number is rendered as animated sticker digits.
  4. In chat, a birthday suggestion bubble ties into the star-gift box (`history_view_birthday_suggestion` includes `boxes/star_gift_box.h`).
- **Signature interactions & mechanics:** Age number as an animated graphic; a celebratory label swap; gift prompt.
- **Typography / Color palette:** NOT FOUND.
- **Motion:** Lottie (`ChatHelpers::StickerLottieSize`, `stickers_lottie.h`). VERIFIED. Timings NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** C++/Qt desktop client; Lottie stickers. VERIFIED.
- **Copy & microcopy (verbatim, VERIFIED):**
  - "Date of birth"
  - "Birthday today"
  - "{emoji} {date}"
  - "{date} ({count} year old)" / "{date} ({count} years old)"
  - Which emoji fills `{emoji}`: NOT FOUND.

### 14. CERN — WorldWideWeb rebuild for the Web's 30th birthday (Feb 2019) — https://worldwideweb.cern.ch/ (browser at /browser/; code at /code/)

- **Source pages:**
  - https://worldwideweb.cern.ch/
  - https://en.wikipedia.org/wiki/WorldWideWeb
  - https://www.theregister.com/software/2019/02/19/www-woeful-er-winternet-wendering-cern-browser-rebuilt-after-30-years-barely-recognizes-modern-web/1285881
  - https://geneva.usmission.gov/2019/02/14/recreating-the-first-web-browser-at-cern/
  - https://home.cern/news/news/computing/dream-team-web-developers-recreate-line-mode-browser
  - https://sciencesprings.wordpress.com/2019/02/23/from-cern-cerns-world-first-browser-reborn-now-you-can-browse-like-its-1990/
  - Remy Sharp's blog source on GitHub remy/remysharp.com: `public/blog/cern-day-2.md`, `cern-day-4.md`, `cern-day-5.md`, `public/newsletters/2019-02-22.md` (ref 7f1f44178b143541079ee633847c8906d09a0ec5)
  - GitHub zenany/weekly `software/2019/0304.md`
- **Recognition:** CERN's official Web@30 project; nine developers over five days. Covered by The Register, the US Mission Geneva and Hacker News; listed in "awesome-web-desktops". VERIFIED.
- **Concept:** Celebrate a birthday by rebuilding the original artifact (the first browser, 1990, NeXT) so anyone can use it in a modern browser.
- **Experience sequence:**
  1. Open /browser.
  2. A NeXT-style window UI appears.
  3. Enter any URL and see it rendered as the 1990 browser would: text only, no images, 26 HTML tags.
  - Remy's newsletter: "see how your own site renders like it's the '90s!". VERIFIED.
- **Signature interactions & mechanics:** Faithful recreation of a period UI; "your own site, then vs now" personalization (enter your URL).
- **Typography (VERIFIED, Remy Sharp's posts):**
  - The NeXT screen font was **meticulously replicated** by Mark Boulton and Brian Suda, "working from a screenshot taken on the NeXT machine", with external help. It brought "the jaggies of the NeXT operating system to our nice modern rendering engines".
  - `font-smoothing: none` alone "just don't get the jaggies we want".
  - They had to handle the NeXT's non-square pixels.
- **Color palette:** NOT FOUND (greyscale NeXT UI; no hex values given).
- **Motion:** None (static period UI).
- **Sound/music:** NOT FOUND.
- **Tech stack:** React ("written in React", per zenany/weekly citing Remy). JS + CSS recreate the look; open source at gitlab.cern.ch/nexus-project/nexus-browser. VERIFIED (2 sources).
- **Copy & microcopy:** Site title "CERN 2019 WorldWideWeb Rebuild" (VERIFIED, AppSec Ezine listing).

---

## 2. Shallow references (thin evidence; use only for pattern counts)

### Disney100 (2023) — branding by Connor King Design — https://connorkingdesign.com/disney100
- Sources: https://connorkingdesign.com/disney100 ; https://en.wikipedia.org/wiki/Disney_logo
- **Platinum** was chosen as the primary celebration color: "unite every Disney franchise and business under one Platinum colored roof". The **"100" numeral is used as a portal** and as a shape language ("its rounds and straights") across merchandise and TV spots. REPORTED (one summary of the designer's case study).
- No Disney100 website experience, typography or hex values found: NOT FOUND.

### Super Mario Bros. 35th Anniversary (Sept 3, 2020 – Mar 31, 2021) — https://mario.nintendo.com
- Sources: https://en.wikipedia.org/wiki/Super_Mario_Bros._35th_Anniversary ; https://www.theouterhaven.net/super-mario-35th-anniversary-website-more/ ; https://www.nintendolife.com/news/2020/09/nintendo_launches_website_for_the_original_super_mario_bros_game ; https://www.mariowiki.com/Super_Mario_Bros._35th_Anniversary
- A hub with an overview of the announcements, a **timeline of Mario titles**, a story-based history of mainline games, news and a **mission hub**. The Switch eShop's loading animation was replaced by a **running Mario**, with a **red** sidebar. REPORTED.

### Facebook — birthdays
- Sources: GitHub indieweb/wiki `data/b/birthday.txt`; GitHub shubhamsingh28/Twitter-Rumour-Detection (2018 tweets about "Text Delight")
- A birthday field since early days, with **separate privacy levels for day & month vs year**. A "BIRTHDAYS THIS WEEK" module at the top of the events page. VERIFIED (IndieWeb wiki).
- "**Text Delight**": certain typed phrases animate in posts/comments. Phrases listed in the 2018 tweets: "you're the best", "bff", "best wishes", "you got this", "you can do it", "rad", "congrats/congratulations". REPORTED (tweets). Whether "happy birthday" is a Text Delight phrase: NOT FOUND.

### IndieWeb personal-site birthday patterns (low rank; documents how the Twitter pattern was copied)
- Source: GitHub indieweb/wiki `data/b/birthday.txt`
- Aaron Parecki's homepage "will show balloons floating from the bottom when viewed on his birthday" (since 2016-12-28, `birthday.js`).
- Another site shows a 🎂 emoji next to the profile photo on the day only, via `<data class="dt-bday" value="--MM-DD">🎂</data>`.
- A third displays the owner's age plus a countdown to the next birthday.
- VERIFIED.

### Hello Kitty 50th (2024)
- Sources: https://www.businesswire.com/news/home/20240222929408/en/Sanrio®-Kicks-Off-Hello-Kitty’s-50th-Anniversary-Celebration ; https://www.sanrio.com/collections/hello-kitty-50th-anniversary
- A program of exhibits, YouTube content, Roblox and Apple Arcade activations and products. **No award-recognized web experience found.** NOT FOUND.

---

## 3. Not researched (tool budget exhausted). Do NOT treat as negative evidence

LEGO 90, Pokémon 25 / Pokémon 30, Barbie 65, Mickey 90, Coca-Cola, Nike Air Max Day, Firefox/Mozilla 20–25, Linux 30, Netflix, Spotify, Snapchat (birthday cake emoji / Birthday Lenses), Instagram, LinkedIn, Apple Watch, Google Messages screen effects, Game Boy 30/35, Macintosh 40, iPod, Webflow/Figma/Dribbble/Awwwards anniversaries, Google "g.co/25".

One adjacent find that is worth a follow-up search: the Awwwards SOTD listing "100 Years of Design" (https://www.awwwards.com/sites/100-years-of-design).

---

## Cross-reference patterns

Counted across all references above (14 deep cards + 5 shallow). "Derivative" means a copy of another reference and is listed but not counted.

| Pattern | Count | Supporting references |
|---|---|---|
| **Age / number as the hero graphic** | **9** | Google 25 ("G25gle", the number replaces letters); YouTube 20 ("20" pops over the like button); Columbia 100 (title "100 Years / Columbia / Pictures"); Apple 50 ("50 Years of Thinking Different"); Wikipedia 25 (25 puzzle-piece mark, #0E65C0); Wikipedia 20 (20.wikipedia.org, "20TH BIRTHDAY"); Disney100 ("100" as portal); Telegram (age digits animated as Lottie stickers); PAC-MAN ("30th Birthday!") |
| **Timeline / look-back through the years** | **8** | Google 25 (25 years of logos in one animation); Apple 50 (chronological product sketch montage); Columbia 100 ("journey through entertainment history"); Wikipedia 20 ("look back at the past 20 years"); Super Mario 35 (timeline of titles); Google 19 (games "from the past 19 years"); Google 28 (first 1998 logo + past Doodles); CERN WWW 30 (the 1990 browser) |
| **Nostalgia: resurrect the original artifact** | **7** | YouTube 20 (typing "bday" restores the old player); Google 28 (1998 logo); Google 25 (old Catull logos); Apple 50 (1977–98 rainbow logo); CERN (first browser, replicated NeXT font); PAC-MAN 30 (original arcade sounds); Google 19 (replay past Doodle games) |
| **Hidden easter eggs / click-to-surprise** | **7** | Google 25 (click → confetti); Google personal Doodle (click → second surprise); YouTube 20 (like → "20"; Yoodle click → song); Wikipedia 25 (Baby Globe click → dance/disco, flash, greeting); Google 19 (spin the wheel); PAC-MAN ("Insert Coin" presses); iMessage (phrase → balloons) |
| **Playable game / quiz** | **6** | Google 15 (piñata); Google 19 (spinner of games); PAC-MAN 30 (playable logo); Columbia 100 (8-question adaptive quiz); Google 28 (birthday trivia quiz); CERN (usable browser) |
| **Personalization beyond the name** | **6** | Google personal Doodle (age in seconds); Google 28 (Doodles from *your* birthday); Columbia 100 (your personality type + recommendations); Telegram (your age digits); CERN (render *your* site in 1990); Twitter (balloons on *your* profile) |
| **Mascot / character** | **4** | Wikipedia 25 (Baby Globe); Google 15 (the little "g"); PAC-MAN; Super Mario 35 |
| **Typed keyword / phrase triggers the celebration** | **3** | iMessage ("Happy birthday" → Balloons); YouTube ("bday" → retro player); Facebook Text Delight (phrases animate) |
| **Confetti** | **3** | Google 25 (click → confetti shower); Google personal Doodle 2010 (confetti on profile, REPORTED); iMessage sibling effect ("Congratulations" → Confetti) |
| **Balloons** | **2** (+1 derivative) | Twitter profile balloons; iMessage Balloons (`CKHappyBirthdayEffect`). Derivative: IndieWeb/Aaron Parecki floating balloons |
| **Upward float / rise motion** | **2** (+1 derivative) | Twitter balloons "drift upward"/"fly up from the bottom of the screen"; Apple 50 rainbow logo "fades and floats upward". Derivative: Parecki balloons "floating from the bottom". (iMessage Balloons direction NOT FOUND in sources, so not counted.) |
| **Sound / music** | **3** | PAC-MAN 30 (arcade sounds); YouTube 20 (Yoodle Rick Astley mash-up); Wikipedia 25 (random recorded birthday greetings on click) |
| **Cake (+ candles)** | **3** (+1 derivative) | Google personal Doodle (cake with candles); YouTube 20 (cake scrubber handle); Wikipedia 20 (🎂 in the birthday post). Derivative: IndieWeb 🎂 next to profile photo |
| **Personalized name in the greeting** | **1** | Google personal Doodle ("Happy Birthday, [first name]") |
| **Big "N seconds" / huge-number age stat** | **2** | Google personal Doodle ("819,984,950 seconds young today"); Google-Now-style card demo ("You are 590,805,235 seconds young today!") |
| **Light/dark-aware rendering** | **2** | Apple 50 (black or white by time of day); Wikipedia 25 (light/dark WebM variants) |
| **Explicit reduced-motion fallback** | **1** (+1 derivative) | Wikipedia 25 (static WebP under `prefers-reduced-motion: reduce`). Derivative: NotTwitter clone hides balloons |
| **Gratitude copy addressed to the audience** | **3** | Google 25 ("Thank you for searching with us throughout the years."); Wikipedia 20 ("…people like you have made it possible… today is for you."); Apple 50 letter ("the world is moved forward by people who think different") |
| **Share / download the result** | **2** | Google 15 (share score / play again); Columbia 100 (54K result downloads) |
| **Plays once per visit, not looping** | **1** | Twitter (first visit or refresh) |
| **Limited-time window** | **4** | Wikipedia 25 (Feb 16 – Apr 6, 2026); Super Mario 35 (Sept 2020 – Mar 2021); Twitter (birthday only); Google Doodles (one day) |
| **Gift prompt** | **1** | Telegram (birthday suggestion → star gift box) |
| **Countdown** | **1** (+1 derivative) | Wikipedia 25 party pre-countdown (15:45 UTC). Derivative: IndieWeb countdown to next birthday |

### Verbatim copy patterns available to cite
- "Happy Birthday, [first name]" (Google personal Doodle tooltip)
- "You are N seconds young today!" / "N seconds young today" (Google)
- "Thank you for … throughout the years." (Google 25)
- "IT IS OUR 20TH BIRTHDAY! 🎂 … today is for you. Join the celebration" (Wikipedia 20)
- "Celebrating a Century of Cinema" / "100 Years\nColumbia\nPictures" (Columbia 100)
- "50 Years of Thinking Different" (Apple)
- "Birthday mode", "Celebrate 25 years of Wikipedia with a cute reading companion" (Wikipedia 25)
- "Birthday today", "{date} ({count} years old)" (Telegram)
- "(Sent with Balloons)" (iMessage)
- "Insert Coin" (Google PAC-MAN); "PAC-MAN's 30th Birthday!" (Google)

---

## Ranking

Rule for conflicts: defer to the higher-ranked reference. Rank combines (1) formal design-award recognition (Awwwards / FWA / Behance) and (2) audience scale with press coverage. Use **ranks 1–3** for visual and interaction craft decisions and **ranks 1–6** for "what celebrations people recognize" decisions.

1. **Columbia Pictures 100 (Exo Ape × Watson.LA, 2024).** The only reference here with formal design awards: Awwwards SOTD + Developer Award, FWA of the Day, Best of Behance; 236K visits. *Top authority for site craft: page transitions, quiz-driven personalization, hero typography layout.*
2. **Google birthday Doodles: PAC-MAN 30th (2010), Google 25th (2023), 15th (2013), 19th (2017), 28th (2026).** Global homepage scale, decades of press, and the first interactive logo (PAC-MAN). *Top authority for playful interactions (confetti on click, playable logo, spinner, number-in-wordmark).*
3. **Google personalized birthday Doodle (2010 onward).** Every signed-in Google user. *Top authority for personal-greeting copy and the "seconds young" stat.*
4. **Apple 50 homepage (2026).** apple.com plus global press. *Authority for restrained, premium motion (float-up reveal, sketch montage, light/dark).*
5. **iMessage Balloons (iOS 10 onward).** Ubiquitous. *Authority for "balloons = birthday" and phrase triggers.*
6. **YouTube 20th birthday (2025).** Global platform, Variety/NPR. *Authority for embedding the celebration in UI controls (cake scrubber, "20" pop, keyword easter egg).*
7. **Twitter birthday balloons (2015).** Global, TechCrunch. *Authority for balloon motion: rise once on load, profile-scoped.*
8. **Wikipedia 25 Birthday mode (2026).** Global reach, opt-in; full production source available. *Most technically specified reference (WebM light/dark, reduced-motion WebP, click states, recorded greetings).*
9. **Wikipedia 20 (2021).** Banners seen by millions; design press.
10. **Telegram birthdays (2024 onward).** Large platform; production source available; no press found.
11. **CERN WorldWideWeb rebuild (2019).** Niche but well-covered dev press. *Authority for faithful period recreation.*
12. **Disney100 branding.** Major brand; only design-system evidence (Platinum, "100" as portal).
13. **Super Mario 35 hub.** Major brand; thin evidence.
14. **Facebook birthday features.** Huge scale, thin evidence.
15. **IndieWeb personal sites.** Derivative; lowest.
