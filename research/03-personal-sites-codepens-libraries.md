# 03 — Personal birthday websites, birthday CodePens, Codrops demos & celebration libraries

Researcher: design-research subagent. Date of research: 2026-10-03.
Category: personal birthday websites plus the best birthday-related code and demos. This file is the evidence base for the "Happy Birthday, Mustafa" site. The rule is that no design decision may come from our own taste.

---

## 0. Read this first: evidence status, method and limits

### What was reachable in this session
| Channel | Status | Notes |
|---|---|---|
| WebSearch | **8 queries completed, then hard-blocked** | The session-wide cap was "200 of 200 WebSearch calls". The budget is shared with the parallel research agents and was spent before this agent got far. Every later search was refused. To get more, someone has to raise `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`. |
| Firecrawl scrape | Blocked | "Insufficient credits". |
| WebFetch (e.g. `*.github.io`) | Blocked | `EGRESS_BLOCKED`. |
| codepen.io, tympanus.net, web.archive.org, hn.algolia.com, reddit.com, dev.to, cdn.jsdelivr.net, unpkg.com | Blocked | curl returned 000 or CONNECT 403. |
| `api.npmjs.org` (downloads API) | Blocked | CONNECT 403. |
| `registry.npmjs.org` | **Reachable** | `npm view`, `npm pack` (full package tarballs, so real source code), and the registry **search API** `/-/v1/search`, which returns `downloads.weekly` / `downloads.monthly` / `dependents`. All download numbers below come from it. |
| api.github.com / GitHub MCP | Reachable, **not used** | Out of scope. The session is authorised only for husamisverycool/mustafa, and the lead confirmed no GitHub search or repo fetching. GitHub facts below come only from the 8 WebSearch summaries collected before that rule was issued. |
| fonts.googleapis.com | Reachable | Used only to confirm that font families exist. |

Because of these limits, the strongest evidence in this dossier is **source code and READMEs read straight from npm tarballs**. That includes several ports that credit specific CodePens and Codrops demos in their own code, which gives a traceable chain from our parameters back to the original pen or demo.

### Confidence labels used throughout
- **VERIFIED**: I read it myself this session in package source code or a README pulled from registry.npmjs.org, or in a registry API response. Exact values.
- **VERIFIED-VIA-PORT**: verified in a published port whose source explicitly credits the original (CodePen or Codrops) by URL. The values are the port's. The port claims to reproduce the original, but the original page itself was not read.
- **CORROBORATED**: two or more independent WebSearch results agree.
- **REPORTED**: a single WebSearch summary. Search summaries can be wrong, so treat these as leads.
- **NOT FOUND**: looked for and could not confirm with the tools available.
- **UNVERIFIED-LEAD**: from the model's prior knowledge, not confirmed this session. **Do not cite these as evidence** until they are confirmed. They are listed only so the next pass can confirm them quickly.

### Commands used (reproducible)
```bash
# metadata + README
npm view <pkg> name version description repository.url homepage time.created time.modified --json
npm view <pkg> readme
# full source
npm pack <pkg> && tar xzf <pkg>-<ver>.tgz
# weekly/monthly downloads + dependents (registry search API; api.npmjs.org is blocked)
curl -s "https://registry.npmjs.org/-/v1/search?text=<pkg>&size=20"   # read objects[].downloads.weekly
```
WebSearch queries actually executed (8):
1. `faahim happy-birthday github stars "happy birthday" website`
2. `github topic happy-birthday-website most stars`
3. `github "birthday-website" repository stars forks surprise girlfriend`
4. `faahim happy-birthday customize.json "greetingText" "wishText" fields`
5. `faahim happy-birthday GSAP TweenMax animation "It's your birthday" chatbox balloons`
6. `"happy-birthday" faahim main.js timeline "ideaText" "ideaTextTrans" balloons hat`
7. `"That's what I was going to do." "But then I stopped." "I realised, I wanted to do something" birthday`
8. `"Happy birthday to you!! Yeee! Many many happy blah"`

---

## 1. GitHub "happy birthday website" projects

### faahim/happy-birthday — https://github.com/faahim/happy-birthday
- **Source pages / commands used:** WebSearch queries 1, 4, 5, 6, 7 and 8. Search results pointed to the repo, `index.html` and `customize.json`, a mirror at github.innominds.com/faahim/happy-birthday, and an awesomeopensource.com listing. Deployed forks found by query 8: `ljoboy.github.io/happy-birthday/` and `happy-birthday-nadya.vercel.app`, both titled "Happy Birthday!!! :)". Query 7 found the fork `happy-birthday-from-nishant.netlify.app`, same title.
- **Popularity signal:** **1.5k stars** (REPORTED, one search summary). Search called it "one of the most starred projects in this category" (REPORTED). Many deployed forks on github.io, Vercel and Netlify carry its copy and the default name "Lydia" (CORROBORATED by 3 deployed pages across 2 queries). That is a real virality signal: people fork it and send it as-is.
- **Concept:** Repo description, verbatim: "Wish your friend/loved-ones happy birthday in a nerdy way." (CORROBORATED: same wording in results for queries 1, 2 and 4). One HTML page plays a scripted, timed animation. All texts and the photo are personalised through a `customize.json` file "without modifying the code" (REPORTED).
- **Experience sequence (load to end):**
  1. Greeting built from `greeting` + `name`, i.e. "Hiya" + "Lydia" (REPORTED from the customize.json fields).
  2. `greetingText`: "I really like your name btw!" (REPORTED).
  3. A fake chat box with a typed message: "Happy birthday to you!! Yeee! Many many happy blah..." (CORROBORATED: this string appears on 2 deployed forks). The search summary for query 5 describes a "chatbox with typing effects" (REPORTED).
  4. The fake-out lines: "That's what I was going to do." → "But then I stopped." → "I realised, I wanted to do something special." → "Because," → "You are Special :)" (REPORTED: one deployed fork via query 7).
  5. Balloons, the photo (`imagePath` "img/lydia2.png") and a "Happy Birthday" reveal (balloons REPORTED; photo field REPORTED).
  6. `wishText`: "May the js.prototypes always be with you! ;)" (REPORTED).
  - UNVERIFIED-LEAD (prior knowledge, needs confirmation): an "It's your birthday!!! :D" line before the chat box; a "Send" button in the chat box; a spaced-out "S O O O O O" line; a party hat on the photo; closing lines "Okay, now come back and tell me if you liked it." and "Or click, if you want to watch it again." (click to replay).
- **Signature interactions & mechanics:** a single scripted timeline with lines that appear one at a time (REPORTED: "script.js manages the sequential display of elements and triggers animations via GSAP"). Exact durations: NOT FOUND.
- **Typography:** NOT FOUND.
- **Color palette:** NOT FOUND.
- **Motion/timing:** GSAP/TweenMax timeline (REPORTED). Values NOT FOUND.
- **Sound/music:** NOT FOUND.
- **Tech stack:** HTML, CSS, JS, GSAP/TweenMax (REPORTED). `customize.json` holds the texts and image path (REPORTED).
- **Copy & microcopy (verbatim):** "Hiya", "Lydia", "I really like your name btw!", "Happy birthday to you!! Yeee! Many many happy blah...", "That's what I was going to do.", "But then I stopped.", "I realised, I wanted to do something special.", "Because,", "You are Special :)", "May the js.prototypes always be with you! ;)". Page title: "Happy Birthday!!! :)".
- **Confidence:** concept and description CORROBORATED; stars REPORTED; copy strings CORROBORATED for the chat line and title, REPORTED for the rest; fonts, colours and timings NOT FOUND.

### fajarghifar/happybirthday — https://github.com/fajarghifar/happybirthday
- **Source pages:** WebSearch 2, 4, 5 and 6. Results included the repo, its `index.html`, a fork `Deadpool-a/hbd3.o` with an identical description, and a Medium article by the author ("Membuat Website Ucapan Happy Birthday dengan HTML, CSS dan JS", fajarghifar.medium.com).
- **Popularity signal:** stars NOT FOUND. It has at least one fork that reuses the description verbatim (CORROBORATED), plus a tutorial article.
- **Concept, verbatim description:** "🎂 A beautiful, config-driven birthday greeting animation. Customize everything from a single file — no coding required! Built with GSAP & Vanilla JS." (CORROBORATED: the same text appears for both the repo and the fork in search results).
- **Experience sequence and features:** "smooth GSAP animations including typing effects, floating balloons, confetti, and fireworks"; "a modular component system that includes sections like 'chatbox' with a message property"; section types include **"ideas" (lines revealed one by one)** and **"balloons" (floating balloons)** (REPORTED). Files: `config.js` (single config), `index.html`, `main.js` (engine), `components/ideas.js` and `components/balloons.js` (REPORTED; one summary wrongly attributed this structure to faahim).
- **Typography / palette / timings:** NOT FOUND.
- **Tech:** GSAP and vanilla JS (CORROBORATED).
- **Confidence:** description CORROBORATED; component list REPORTED.

### GitHub topic `happy-birthday-website`, ranked by stars — https://github.com/topics/happy-birthday-website
- **Source:** WebSearch 2. One summary of the topic page sorted by stars. **REPORTED** (single source; star counts drift over time).

| # | Repo | Stars (REPORTED) |
|---|---|---|
| 1 | ProgrammerGaurav/happy-birthday | 290 |
| 2 | sapthesh/Birthday ("The Customizable Birthday Web Template is a versatile and user-friendly website template designed to celebrate birthdays in a fun and personalized way.") | 165 |
| 3 | Harmann60/Happy-Birthday | 119 |
| 4 | Itz-Murali/Happy-BirthDay-Ai | 89 |
| 5 | rushkii/hbd-kizu | 75 |
| 6 | Itz-Murali/Happy-Birthday-Animated | 73 |
| 7 | Shizu-ka/Birthday-Website | 68 |
| 8 | Aghitsniii/SelamatUlangTahun (Indonesian, "Happy Birthday") | 65 |
| 9 | gouravkhunger/nextjs-birthday-wish | 60 |
| 10 | Itz-Murali/Happy-birthday-Ai-v2 | 45 |

(faahim/happy-birthday, at about 1.5k stars, is not tagged with this topic as far as the summary shows. It is the category leader by stars.)

### nikitayadav19/HappyBirthdayGF — https://github.com/nikitayadav19/HappyBirthdayGF
- **Source:** WebSearch 3.
- **Popularity:** **274 stars, 281 forks** (REPORTED). More forks than stars, which suggests people fork it to personalise and send.
- **Concept, verbatim description:** "🎂 A beautiful, interactive mini website to wish my girlfriend a Happy Birthday! Built with ❤️ using HTML, CSS & JavaScript — featuring animations, surprises, and heartfelt moments. Perfect for anyone who wants to make their loved one's birthday extra special online! 🌸✨" (REPORTED; it is the result title).
- Sequence, fonts, colours: NOT FOUND.

### nafisalawalidris/Happy-Birthday — https://github.com/nafisalawalidris/Happy-Birthday
- **Source:** WebSearch 6 (result title).
- **Concept, verbatim:** "Happy Birthday Celebration is a delightful web animation project using HTML, CSS and JavaScript. Celebrate birthdays with dynamic elements such as **flying balloons, a fading cake and personalised messages**." (REPORTED)
- Everything else NOT FOUND.

### Other repos surfaced (existence only; no details verified)
fahim-hacker/Happy-Birthday ("for a friend"), shivahegonde/happy-birthday-rohan (has a `script` folder), fathali7/For_You ("Happy Birthday"), ksonone/happy-birthday ("A JS project to wish your friend on his/her birthday"), abandon888/HappyBirthday (has README_EN), ayusharma/birthday, sapthesh/Birthday. Related GitHub topic pages that exist: `birthday`, `birthday-card`, `birthday-wishes`, `birthday-webpage`, `happybirthday`, `birthday-mini-website`, `birthday-gift`, `birthday-message`, `gfbirthday`. Also a CodePen titled "GSAP balloons animation" by yerlanyr at https://codepen.io/yerlanyr/pen/erBaBG (exists per search; contents NOT FOUND).

---

## 2. Personal birthday sites verified at code level (published to npm)

These have low popularity but are **real, complete personal birthday sites** whose full source I read, so every value below is VERIFIED. Use them for mechanics, not as quality benchmarks.

### halo-maya ("Dear Maya 💐"), a feeldream.id-style envelope greeting — https://www.npmjs.com/package/halo-maya
- **Source / commands:** `npm pack halo-maya` (v1.1.7). Read `index.html`, `script.js` and `style.css`.
- **Popularity signal:** 5 weekly downloads but **61 dependents** (VERIFIED, registry search API), which means it is re-packaged as a template. A hidden watermark `body::before{content:"\00A9  feeldream.id"; opacity:0}` ties it to the Indonesian greeting-template seller feeldream.id (VERIFIED string). The envelope image is hot-linked from `https://rayyscoding.github.io/envelope.png` (VERIFIED), another template lineage. Claims about TikTok virality for this genre: NOT FOUND (no search budget left).
- **Concept:** A private love/birthday letter. You tap an envelope, a chain of sticker pop-ups plays, then a typed letter appears with falling hearts and a "reply on WhatsApp" button.
- **Experience sequence (VERIFIED from code):**
  1. On load, `new Audio('angelbaby.mp3')` is created but not played. `#Content` fades in (`opacity:1; margin-top:15vh`, transition `all 1.3s ease`). An envelope image (140×110, white card, `border-radius:10%`, hover `scale(.9)`) shows the caption **"Klik Suratnya!"** ("Click the letter!").
  2. Clicking the envelope runs `memulai(); audio.play();`. The **music starts on that first tap**, which counts as the browser's user gesture. The envelope shrinks to `scale(.1)` and fades out over 1s, and the caption does the same.
  3. After **3300 ms**, a chain of SweetAlert2 pop-ups plays, each with a GIF sticker (90×90), **auto-advancing on `timer: 2600` with `timerProgressBar: true`**, no confirm button and `allowOutsideClick:false`. Titles: "Halo Maya 😀" → "Kamu tau ga" → "Panda apa yang bikin salting? 🤭" → "Pandangin story kamu 🤣" → "Ngefans banget deh pokonya wkwkwk 🤪".
  4. 200 ms later the envelope is hidden, the final photo/GIF shows, and the letter `blockquote` becomes visible. 150 ms after that, **TypeIt types the letter** (`speed: 42, startDelay: 50, cursor: true`).
  5. When typing completes, **falling hearts** start (`setInterval(berjatuhan, 200)`). The photo swaps: it shrinks to `scale(0)`, swaps after 300 ms, then returns to `scale(1)`.
  6. A **"💌 Balas"** ("Reply") button runs `Swal.fire('Kirim pesan ke<br>WhatsApp aku, ya!')` and then redirects to `https://api.whatsapp.com/send?phone=&text=` + a prefilled reply ("ilvyou too 💞🤍💝❣️").
- **Signature mechanics:** gesture-gated audio; timed auto-advancing modals with a progress bar; a typewriter letter; DOM heart rain (SVG hearts 30×30, `left: random*95vw`, `animation-duration: random*3+2 s` (2–5 s), `@keyframes heartMove {translateY(-10vh) → translateY(100vh)}`, pruned to at most 100 nodes every 100 ms); background "breathing" zoom `@keyframes jj {scale(1) → 1.3 → 1}` over **7s infinite** on a 50%-opacity overlay; a reply call-to-action.
- **Typography (VERIFIED):** Google Fonts `Inter`, `Itim`, `Nunito Sans` 400/700. CSS variables: `--gaya-font: 'Nunito Sans'` (body) and `--gaya-font2: 'Itim', cursive` (accent lines, 17px). Body text 16px, weight 700, line-height 1.4em, `text-shadow: 0 2px 2px rgba(0,0,0,.8)`.
- **Color palette (VERIFIED):** page background `#101010`; card `rgba(0,0,0,.75)` with border `rgba(255,255,255,.8)` and radius 10px; text white; accents `#FFC700`, `#FFB400`, `#003A76` (slider cards); SweetAlert buttons `#4839eb` (radius 18px) and cancel `#FF0040`; timer bar `#00B6FF`.
- **Motion/timing:** listed above (1s, 3300 ms, 2600 ms, 200 ms, 150 ms, 300 ms, 7s, 2–5s).
- **Sound/music:** a single mp3 (`angelbaby.mp3`) that starts on the envelope tap. No mute toggle (VERIFIED absent).
- **Tech:** SweetAlert2 11.0.19 (jsDelivr), TypeIt 8.7.0 (unpkg), vanilla JS.
- **Copy (verbatim):** "Klik Suratnya!", "Halo Maya 😀", "Kamu tau ga", "Panda apa yang bikin salting? 🤭", "Pandangin story kamu 🤣", "Ngefans banget deh pokonya wkwkwk 🤪", "💌 Balas", "Kirim pesan ke WhatsApp aku, ya!", "Tetap Sama Aku Terus yaa ❤️", "Aku Sayang Kamu 💐🤍🫶", "I Love uuu 🥰🩷".
- **Confidence:** all mechanics VERIFIED; virality NOT FOUND.

### uday-birthday-wishes, a desktop birthday surprise — https://www.npmjs.com/package/uday-birthday-wishes
- **Source:** `npm pack` (v1.0.0). Read the README, `app.js`, `audio.js`, `canvas.js` and `styles.css`.
- **Popularity:** 13 weekly downloads (VERIFIED). Personal one-off (sent with `npx uday-birthday-wishes`).
- **Concept (README, verbatim):** "Features a high-fidelity Electron desktop GUI window with interactive surprise unwrapping, 3D animated cake with blowing candles, custom user cat photo gallery, secret birthday letter modal, vector cat rain, looped ACELERADA soundtrack, and personal wishes!"
- **Sequence (VERIFIED):** gift box → click to unwrap → **countdown 3, 2, 1 at 700 ms per step**, then "🎉" and a confetti explosion → celebration screen → 3-tier cake (blow out by **clicking the cake or pressing Space**; no microphone) → smoke, a synthesised "blow" sound, a chime, dual confetti → envelope opens a letter → cat photo gallery → cat rain.
- **Mechanics (VERIFIED):**
  - Flame: 14×22 px, `radial-gradient(ellipse at bottom, #ffee58 0%, #ff9800 60%, #f57c00 100%)`, `border-radius: 50% 50% 20% 20%`, `box-shadow: 0 0 15px #ff9800, 0 0 25px #ffee58`, `animation: flameFlicker 0.15s infinite alternate` with `{0% scale(1) rotate(-1deg) → 100% scale(1.08) rotate(1deg)}`.
  - Smoke: 6×16 px, `rgba(200,200,200,.6)`, `blur(3px)`, `smokeRise 1.2s forwards` (`translateY(0) scale(1) opacity .8` → `translateY(-30px) scale(3) opacity 0`).
  - Candle sticks: 10×38 px with `repeating-linear-gradient(45deg, C, C 6px, #fff 6px, #fff 12px)`, where C is one of `#ff4081`, `#00e5ff` or `#ffd700`.
  - Tiers: 140×44 (`#ff80ab → #ff4081`), 180×52 (`#b388ff → #7c4dff`), 220×60 (`#80d8ff → #00b0ff`).
  - Confetti wrapper: canvas-confetti `particleCount 80, spread 70, origin {y: .6}`, colours `['#ffd700','#ff4081','#7c4dff','#00e5ff','#ffffff']`. On unwrap: `{count:60, spread:60}`. Finale: two bursts `{count:90, spread:80}` at `origin x .2` and `x .8`, `y .5`.
- **Sound (VERIFIED):** soundtrack `loop = true`, `volume 0.75`. Blow sound: 0.8 s white-noise buffer → **lowpass filter 600 → 100 Hz (exponential ramp, 0.8 s)** → gain 0.3 → 0.01 over 0.8 s. **Chime arpeggio C5–E5–G5–C6 (523.25, 659.25, 783.99, 1046.50 Hz), sine, 0.3 s each, gain 0.2, 80 ms apart**, played 400 ms after the blow.
- **Typography:** `'Outfit', 'Plus Jakarta Sans'` for body and `'Fredoka'` for display (VERIFIED).
- **Copy:** "✨ Click cake or press Space to blow candles out!" → "🎉 Yay! Vedabahu made a wish! 🎂✨"; "Happy Birthday Buddy! 🥳🎂 — From Uday ❤️".

### particle-cake, a Three.js 3D particle birthday cake — https://www.npmjs.com/package/particle-cake
- **Source:** `npm pack` (v1.0.0), README (Chinese/English).
- **Popularity:** 12 weekly downloads (VERIFIED). Low.
- **Concept (README):** a 3D particle cake. **Click to trigger a firework explosion, and the particles then re-form into text.** Responsive, with fewer particles on mobile.
- **Parameters (VERIFIED defaults):** `text '生日快乐'` ("Happy Birthday"), `particleCount 15000`, `particleSize 3`, `textSize 150`, `fontFamily 'Microsoft YaHei'`, `candleColor '#FFFF00'`, `cameraZ 400`, `textScale 1.2`. README demo background: `linear-gradient(160deg, #050510 0%, #0b1230 52%, #1c2c5b 100%)`. Requires three.js r128.

---

## 3. CodePen

**Limit:** codepen.io is blocked and the search budget ran out, so **no heart or view counts could be retrieved for any pen** (NOT FOUND). Pens below are included only where an npm package credits them by URL in its code or README.

### "Confetti" by Gthibaud — https://codepen.io/Gthibaud/pen/ENzXbp
- **Source:** react-confetti README: "Based on a pen by @Gthibaud: https://codepen.io/Gthibaud/pen/ENzXbp". react-confetti-explosion README: "inspired by [this](https://codepen.io/Gthibaud/pen/ENzXbp) beautiful and oft-used confetti which uses canvas". Both VERIFIED.
- **Popularity signal:** this is the cited ancestor of **react-confetti (2,774,626 downloads/week)** and of the react-confetti-explosion → @neoconfetti family (178,511 and 4,960,750 per week). A second author calls it "oft-used". Hearts and views: NOT FOUND.
- **Mechanics (VERIFIED-VIA-PORT, from the react-confetti source):** particles spawn along the top edge (`confettiSource {x:0, y:0, w:canvas.width, h:0}`). Each particle is randomly a circle (radius 5–10), a square, or a **"strip"** (w and h 5–20). Initial angle 0–360°, angular spin −0.2 to 0.2 rad per frame, a random Y-flip "rotateY" for the 3D paper flutter. Defaults: `numberOfPieces 200`, `gravity 0.1`, `friction 0.99`, `wind 0`, `initialVelocityX 4`, `initialVelocityY 10`, `opacity 1`, `recycle true`, `tweenDuration 5000` (easeInOutQuad).
- **Palette (react-confetti default, Material colours):** `#f44336 #e91e63 #9c27b0 #673ab7 #3f51b5 #2196f3 #03a9f4 #00bcd4 #009688 #4CAF50 #8BC34A #CDDC39 #FFEB3B #FFC107 #FF9800 #FF5722 #795548`. Whether this list is the pen's own: NOT FOUND.

### "Fireworks" by Julian Garnier (author of anime.js) — https://codepen.io/juliangarnier/pen/gmOwJX
- **Source:** `npm pack @gjsify/example-dom-canvas2d-fireworks` (v0.54.0). The first line of `src/fireworks.ts` reads: `// Adapted from https://codepen.io/juliangarnier/pen/gmOwJX ("Fireworks" by Julian Garnier) // Original: MIT license. Reimplemented in TypeScript without anime.js`. The README calls it "A polished Canvas 2D fireworks animation … Adapted from juliangarnier's fireworks pen". VERIFIED-VIA-PORT.
- **Concept:** click or tap anywhere for a burst of coloured dots plus an expanding white shock-wave ring. The original also auto-fires bursts near the centre.
- **Mechanics (VERIFIED-VIA-PORT):**
  - **30 particles** per burst. Each flies to a random angle 0–360° at a distance of **50–180 px**, radius **16–32 px shrinking to 0.1**.
  - Burst **duration 1200–1800 ms, easing easeOutExpo** (`1 - 2^(-10t)`).
  - Ring: radius 0.1 → **80–160 px**, `strokeStyle #FFF`, **lineWidth 6 → 0**, **alpha 0.5 → 0, linear, over 600–800 ms**.
  - Auto-fire interval **200 ms**.
- **Palette (VERIFIED-VIA-PORT):** `#FF1461`, `#18FF92`, `#5A87FF`, `#FBF38C`.
- **Tech (original):** anime.js and canvas (stated by the port).

### Microphone "blow out the candles" pens
- **Status: NOT FOUND.** Every route to CodePen was blocked and no pen with a mic-blow technique could be verified. The usual CodePen recipe (getUserMedia → AnalyserNode → average volume above a threshold) is **UNVERIFIED-LEAD**, and **no CodePen threshold values are reported here** because they could not be checked.
- **Closest verified technique: hark**, a mic volume-threshold detector (npm `hark` v1.2.3, **143,130 downloads/week**, 133 dependents). Values read from its source, VERIFIED:
  - `analyser.fftSize = 512`; `smoothingTimeConstant = 0.1`.
  - Volume = **max of `getFloatFrequencyData` bins from index 4 upward** (dB, negative values only).
  - Poll **interval 50 ms** (the README says 100 ms; the code says 50).
  - **threshold −50 dB** ("silence in webaudio is -100dB"; "Speech seems to be above -50dB").
  - `history 10`. A "speaking" event fires when **at least 2 of the last 3 polls** are above the threshold. "stopped_speaking" fires when **all 10** history slots are below it.
  - README guidance, verbatim: "If speaking events are being fired too frequently, you would make this number higher (i.e. towards 0)."
  - Note: hark is tuned for **speech**, not for a breath into the mic. A blow-specific threshold remains NOT FOUND.
- Also on npm: `volume-meter` (jessetane, 654 per week) uses `AnalyserNode#getByteTimeDomainData`, `{tweenIn: 2, tweenOut: 6}` in its example, and a logarithmic display since v2.0.0 (VERIFIED README).

### Other pen leads (UNVERIFIED-LEAD; confirm before use)
CSS birthday cakes with flickering flames, 3D CSS fold-open birthday cards, envelope-open reveals and "happy birthday" text animations are common CodePen genres. Not one title, author or count could be verified this session.

---

## 4. Codrops (tympanus.net)

### Particle Effects for Buttons — https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/
- **Source:** README of `react-particle-effect-button` (npm), verbatim: "This library is a React port of an awesome Codrops Article by Luis Manuel (original source https://github.com/codrops/ParticleEffectsButtons/)", plus "I tried to keep the properties exactly the same as in the original codrops version." Vue and Angular ports exist too (`vue-particle-effect-buttons`, `angular-particle-effect-button`). VERIFIED.
- **Popularity:** the React port gets 1,166 downloads/week (VERIFIED). It has three framework ports. Codrops page metrics: NOT FOUND.
- **Concept:** a button disintegrates into particles when clicked (`hidden: true`) and re-forms when reversed. That fits a "tap to open your gift" moment.
- **Mechanics (VERIFIED-VIA-PORT, defaults):** `duration 1000` ms, `easing 'easeInOutCubic'`, `type 'circle'` ('rectangle' and 'triangle' also available), `style 'fill'` or `'stroke'`, `direction 'left'` (or right, top, bottom), `canvasPadding 150`, `size random(4)`, `speed random(4)`, `particlesAmountCoefficient 3`, `oscillationCoefficient 20`. Particle `color` should match the button's background (example `#121019`).
- **Tech:** anime.js plus canvas.

### Codrops leads (UNVERIFIED-LEAD; prior knowledge only, not confirmed)
- "3D Typing Effects with Three.js" (Codrops, about 2022)
- "Kinetic Typography with Three.js" (Mario Carrillo, about 2020)
- "On-Scroll Typography Animations" (about 2023/24)
- Many Codrops typography demos use Splitting.js (npm `splitting`, 7,990 per week VERIFIED) together with GSAP.

Each of these needs a URL check before anyone cites it.

---

## 5. Celebration libraries (quality signals and exact parameters)

Download numbers are VERIFIED from the npm registry search API on 2026-10-03 (`downloads.weekly`). GitHub stars: **NOT FOUND** for every library (no search budget; GitHub out of scope).

### canvas-confetti (catdad) — https://github.com/catdad/canvas-confetti · demo https://catdad.github.io/canvas-confetti/
- **Source:** `npm view canvas-confetti readme`; `npm pack canvas-confetti` (v1.9.4, src/confetti.js); registry search API.
- **Popularity:** **9,580,228 weekly / 33,636,165 monthly downloads**, **401 dependents**. `@types/canvas-confetti` alone gets 8,018,147 per week. Created 2018-02-08. ISC licence. Most-downloaded confetti library by a wide margin (VERIFIED).
- **API defaults (VERIFIED, README and source):**
  - `particleCount 50`, `angle 90`, `spread 45`, `startVelocity 45`, `decay 0.9`, `gravity 1`, `drift 0`, `flat false`, `ticks 200`
  - `origin {x: .5, y: .5}`, `shapes ['square','circle']` (plus built-in `'star'`), `scalar 1`, `zIndex 100`, `disableForReducedMotion false`
  - **Default colours: `#26ccff #a25afd #ff5e7e #88ff5a #fcff42 #ffa62d #ff36ff`.**
- **Physics (VERIFIED source):**
  - Initial velocity = `startVelocity*0.5 + random*startVelocity`.
  - Per tick: `velocity *= decay`, `y += sin(angle)*v + gravity*3`, `x += cos(angle)*v + drift`.
  - Wobble: speed `min(0.11, rand*0.1 + 0.05)`. Tilt: +0.1 rad per tick. Circles are drawn as ellipses with `ovalScalar 0.6`.
  - **Opacity fades linearly as `1 - tick/ticks`.**
- **Custom shapes:**
  - `confetti.shapeFromPath({path, matrix?})`. README example triangle: `'M0 10 L5 0 L10 10z'`.
  - `confetti.shapeFromText({text, scalar?, color? (default #000000), fontFamily?})`. Default emoji font stack: `"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`. README emoji example: `shapeFromText({text:'🍍', scalar:2})` used with `scalar:2`.
- **Instances:** `confetti.create(canvas, {resize, useWorker, disableForReducedMotion})`, `confetti.reset()`. Returns a Promise that resolves when the animation finishes.
- **README examples (VERIFIED, verbatim values):**
  - `confetti({particleCount: 150})`
  - `confetti({spread: 180})`
  - "random poof": `{particleCount:100, startVelocity:30, spread:360, origin:{x:Math.random(), y:Math.random()-0.2}}`
  - **"continuous side cannons for 30 seconds"**: every animation frame, `{particleCount:7, angle:60, spread:55, origin:{x:0}}` + `{particleCount:7, angle:120, spread:55, origin:{x:1}}` until `Date.now() > start + 30*1000`.
- **Reduced motion:** the README pushes `disableForReducedMotion`: "please confetti responsibly".

#### canvas-confetti demo-page presets (exact values via the react-canvas-confetti port)
**Source:** `npm pack react-canvas-confetti` (v2.0.7, **249,281 per week**), files `dist/conductor/*/index.js`. VERIFIED-VIA-PORT. The README links one CodePen per preset by `ulitcos` (gOEEXKe fireworks, MWxxOLW crossfire, rNRRYRO snow, zYbbPXB realistic, rNRRYgx explosion, qBvvVGm pride, XWQXZyP vortex, xxeZJjG photons). The port fires `tickAnimation` every `1000/speed` ms (`autorun={{speed}}`).
- **Realistic** (200-particle budget, all from `origin {y: 0.7}`):
  - `{spread:26, startVelocity:55, particleCount: 200*0.25}`
  - `{spread:60, particleCount: 200*0.2}`
  - `{spread:100, decay:0.91, scalar:0.8, particleCount: 200*0.35}`
  - `{spread:120, startVelocity:25, decay:0.92, scalar:1.2, particleCount: 200*0.1}`
  - `{spread:120, startVelocity:45, particleCount: 200*0.1}`
- **Fireworks:** two simultaneous bursts `{startVelocity:30, spread:360, ticks:60, zIndex:0, particleCount:150}` at `origin {x: rand(0.1–0.3), y: Math.random()-0.2}` and `{x: rand(0.7–0.9), y: Math.random()-0.2}`.
- **Pride / "School Pride":** `{particleCount:3, angle:60, spread:55, origin:{x:0}, colors:['#bb0000','#ffffff']}` + `{…angle:120, origin:{x:1}}`, repeated.
- **Snow:** `{particleCount:1, startVelocity:0, ticks:200, gravity:0.3, origin:{x:Math.random(), y:Math.random()*0.999-0.2}, colors:['#ffffff'], shapes:['circle'], scalar: rand(0.4–1)}`.
- **Explosion (the "Stars" preset):** `{spread:360, ticks:50, gravity:0, decay:0.94, startVelocity:30, colors:['FFE400','FFBD00','E89400','FFCA6C','FDFFB8']}` fired as `{particleCount:40, scalar:1.2, shapes:['star']}` + `{particleCount:10, scalar:0.75, shapes:['circle']}`.
- **Crossfire:** four corner cannons (`angle 45 @ (0,1)`, `-45 @ (0,0)`, `-135 @ (1,0)`, `135 @ (1,1)`) with `particleCount rand(13–17)`, `spread rand(75–85)`, `decay rand(0.97–0.99)`, `startVelocity rand(9–11)`, `ticks rand(40–60)`, `gravity 0`, `colors ['#E8B837']`.
- **Vortex:** `{spread:120, ticks:60, gravity:0, decay:0.94, startVelocity:20, particleCount:60, shapes:['circle','square'], colors:['004e64','00a5cf','#9fffcb','#25a18e','#7ae582']}` with a rotating `angle`.
- **Photons:** `{particleCount:1, spread:0, gravity:0, ticks:600, decay:1, startVelocity:7, flat:true, shapes:['circle'], scalar: rand(0.2–6)}`.
- **UNVERIFIED-LEAD** (prior knowledge of the original demo page, not confirmed):
  - Preset names on catdad.github.io: "Basic Cannon", "Random Direction", "Realistic Look", "Fireworks", "Stars", "Snow", "School Pride", "Custom Shapes", "Emoji", "Custom Canvas".
  - Basic Cannon = `{particleCount:100, spread:70, origin:{y:0.6}}`. uday-birthday-wishes, above, uses the same `spread:70, origin:{y:.6}`, which is consistent with this.
  - The original Fireworks loop runs 15 s with a 250 ms interval and `particleCount = 50*(timeLeft/duration)`.
  - Stars fires 3 times at 0, 100 and 200 ms.
  - Emoji uses a 🦄 `shapeFromText` with `{spread:360, ticks:60, gravity:0, decay:0.96, startVelocity:20, scalar:2}`.

  All of these differ from or go beyond the port and must be confirmed on the demo page.

### tsParticles confetti / fireworks (matteobruni) — https://particles.js.org
- **Source:** READMEs and `npm pack` of `@tsparticles/preset-confetti`, `@tsparticles/preset-fireworks`, `@tsparticles/fireworks` and `@tsparticles/palette-confetti` (all v4.4.0).
- **Popularity (weekly):** `tsparticles` 135,467 (76 dependents); `@tsparticles/confetti` 110,187; `@tsparticles/preset-confetti` 41,426; `@tsparticles/preset-fireworks` 1,435; `@tsparticles/fireworks` 850. VERIFIED.
- **Confetti bundle API (VERIFIED):** mirrors canvas-confetti (`count 50, angle 90, spread 45, startVelocity 45, decay 0.9, gravity 1, drift 0, ticks 200, position {x:50,y:50}` in %, `scalar 1, zIndex 100`). One difference: **`disableForReducedMotion` defaults to TRUE** here.
- **Confetti preset (VERIFIED options.js):**
  - Emitter `startCount 50` at `{x:50, y:50}`, `life {duration: 0.1 s, count: 1}`.
  - Particles: `size 5`, shapes square and circle, `move.speed 45`, `decay 0.1`, `gravity 9.81`, `direction -90`, `angle 45`.
  - `opacity` animation speed 0.5 (max → min, then destroy), `rotate` and `tilt` 0–360 at speed 60, `roll` speed 15–25 with darken 25, `wobble` distance 30 and speed −15 to 15, `life` duration 10/3 s.
  - README recipes: "Long-lasting explosion" (`emitters.life.duration: 0`) and "Immortal Explosion - Fireworks" (`life.count: 0`, random position).
- **Confetti palette (VERIFIED):** `#FF0044 #FF4400 #FFCC00 #00CC44 #00AAFF #AA00FF #FF00AA #00FFCC #FF6600 #FFFFFF`; palette background `#1a1a2e`.
- **Fireworks bundle defaults (VERIFIED FireworkOptions.js):**
  - `rate 10`, `speed {20–40}`, `gravity 30`, `splitCount 100`, `minHeight {10–30}`, `brightness {−30, 30}`, `saturation {−30, 30}`, `background 'none'`.
  - **`sounds: true` by default** (via `@tsparticles/plugin-sounds`).
  - 36-step rainbow colours from `#FF0000` through `#FF002A`.
- **Fireworks preset (VERIFIED):** black `#000` background, `fpsLimit 120`. Rockets launch from `{x:50, y:100}` (emitter width 100) every 0.3 s. They split between 15–35% from the top, at a split rate of 75–150 particles. Each spark has a 5–10 trail, life 1–2 s, decay 0.075–0.1 and speed 5–15. Colours: `#FF0000 #FF8000 #FFFF00 #00FF00 #00FFFF #0000FF #FF00FF` with ±30 saturation and lightness.

### fireworks-js (crashmax-dev) — https://fireworks.js.org
- **Source:** `npm pack fireworks-js` (v2.10.8), `dist/index.es.js`.
- **Popularity:** **136,838 per week** (14 dependents); `@fireworks-js/react` 51,920 per week. VERIFIED.
- **Defaults (VERIFIED):**
  - `autoresize true`, `lineStyle 'round'`, `flickering 50`, `traceLength 3`, `traceSpeed 10`, `intensity 30`, `explosion 5`
  - `gravity 1.5`, `opacity 0.5`, `particles 50`, `friction 0.95`, `acceleration 1.05`
  - `hue {0–360}`, `rocketsPoint {50–50}`, `lineWidth {explosion 1–3, trace 1–2}`
  - `mouse {click:false, move:false, max:1}`, `delay {30–60}`, `brightness {50–80}`, `decay {0.015–0.03}`
  - `sound {enabled:false, files:['explosion0.mp3','explosion1.mp3','explosion2.mp3'], volume {4–8}}`
  - `boundaries {x:50, y:50}`
  - Explosion particle speed is random 1–10.

### react-confetti (alampros) — https://github.com/alampros/react-confetti
- **Popularity:** **2,774,626 per week**, 200 dependents (VERIFIED). Ported from the Gthibaud pen (section 3).
- Defaults are listed in section 3 (VERIFIED README and source). `onConfettiComplete` fires "when all confetti has fallen off-canvas".

### react-confetti-explosion (herrethan) and @neoconfetti (puruvj)
- **Popularity:** react-confetti-explosion **178,511 per week**; **@neoconfetti/react 4,960,750 per week** (only 2 dependents, so a large share is probably pulled in transitively; treat with caution); @neoconfetti/svelte 51,359 per week. VERIFIED.
- **Concept:** a CSS-only (no canvas) confetti *explosion* from a point. neoconfetti says it is a "port of the amazing react-confetti-explosion … 10X smaller" (1.61 KB min+br).
- **Defaults (VERIFIED):**
  - react-confetti-explosion: `particleCount 100`, `particleSize 12`, `duration 2200` ms, **colors `['#FFC700','#FF0000','#2E3191','#41BBC7']`**, `force 0.5`, `height '120vh'`, `width 1000`.
  - neoconfetti: `particleCount 150`, `particleSize 12`, `particleShape 'mix'`, `duration 3500`, same 4 colours, `force 0.5`, `stageHeight 800`, `stageWidth 1600`, `destroyAfterDone true`. Performance note: "2 DOM nodes for every single confetti".
- **README presets (VERIFIED):** Large `{force:0.8, duration:3000, particleCount:250, width:1600}`; Medium `{force:0.6, duration:2500, particleCount:80, width:1000}`; Small `{force:0.4, duration:2200, particleCount:30, width:400}`.

### js-confetti (loonywizard) — https://github.com/loonywizard/js-confetti
- **Popularity:** **163,025 per week**, 31 dependents (VERIFIED).
- **Features (README):** "💥 Supports emojis as confetti", "🧩 Confetti speed adapts to user screen width", zero dependencies.
- **Defaults (VERIFIED dist constants):**
  - `confettiNumber 250` (emoji mode 40), `confettiRadius 6`, `emojiSize 80` (drawn with `px serif`)
  - **Colours `#fcf403 #62fc03 #f4fc03 #03e7fc #03fca5 #a503fc #fc03ad #fc03c2`**
  - Launch angle 15–82°, initial speed 0.9–1.7, rotation speed 0.03–0.07, and a reference "HD" width of 1920 px for speed scaling.
- **README examples:** emojis `['🌈','⚡️','💥','✨','💫','🌸']`; pink palette `['#ff0a54','#ff477e','#ff7096','#ff85a1','#fbb1bd','#f9bec7']`; `{emojis:['🦄'], emojiSize:100, confettiNumber:30}`; `addConfettiAtPosition({confettiDispatchPosition:{x,y}})` for click-point bursts.

### party.js (yiliansource) — https://party.js.org
- **Popularity:** 35,996 per week (VERIFIED). Last published 2022-11-18.
- **Confetti template (VERIFIED lib/templates/confetti.js):**
  - `count range(20–40)`, `spread range(35–45)`, `speed range(300–600)`, `size skew(1, 0.2)`
  - Colour = **HSL(random 0–360, 100%, 70%)**, shapes square and circle
  - Lifetime 8 s; size ramps in over the first third (`min(1, t*3)`); rotation drive `(140, 200, 260)*t`.
- **Sparkles template (VERIFIED):** `count 10–20`, `speed 100–200`, `size 0.8–1.8`, `lifetime 1–2 s`, colour **HSL(50, 100%, 55–85%)** (gold), shape `star`, no gravity, spline size `0 → 1 (t=.3) → 1 (t=.7) → 0` and opacity `1 → 1 (t=.5) → 0`.

### balloons-js (Artur Bień, creator of React95) — https://arturbien.github.io/balloons-js
- **Source:** `npm pack balloons-js` (v0.0.3), README and full `dist/index.esm.js`. Created 2024-08-24.
- **Popularity:** 5,971 per week (VERIFIED). Twitter/X virality: NOT FOUND (no search).
- **API:** `balloons()` for a full-screen realistic balloon release, and **`textBalloons([{text, color, fontSize}])`, which spells words as individual foil-letter balloons** (directly relevant to "HAPPY BIRTHDAY MUSTAFA").
- **`balloons()` mechanics (VERIFIED):**
  - Container is fixed full-screen, `perspective: 1500px`, `perspective-origin: 50vw 100vh`, `z-index 999`, `pointer-events: none`.
  - Balloon height = `min(vw, vh)`; count = `max(7, round(innerWidth / (balloonWidth/2)))`.
  - Random depth z, with **blur(8px) on balloons whose zIndex > 7, for a bokeh effect**.
  - Each rises from below the screen to `-innerHeight*5`, with a lateral drift of up to ±6 balloon widths.
  - **Duration (5000–6000 ms) × 5 = 25–30 s.**
  - **Easing randomly easeOutQuint `cubic-bezier(0.22, 1, 0.36, 1)` or easeOutCubic `cubic-bezier(0.33, 1, 0.68, 1)`.**
  - Delay `zIndex*200` ms.
  - Tilt ±8–15° (rotate3d Z) at 0 / 0.5 / 1 of the timeline.
- **Balloon colour pairs (light, body):** yellow `#ffec37ee`/`#f8b13dff`, red `#f89640ee`/`#c03940ff`, blue `#3bc0f0ee`/`#0075bcff`, green `#b0cb47ee`/`#3d954bff`, purple `#cf85b8ee`/`#a3509dff`.
- **`textBalloons` mechanics (VERIFIED):**
  - **Font: Google Fonts "Sniglet"**, embedded as `"BalloonsJS"`, bold.
  - Container `perspective 1000px`, origin `50% 100%`, `filter: drop-shadow(-60px 60px 12px rgba(0,0,0,.25))`.
  - **Line delay 1000 ms, per-character delay 100 ms.**
  - Each letter rises over **5000–6500 ms, linear**, with 101 keyframes of sinusoidal `rotateY ±7°` and `rotateZ ±8°` at 1–2 cycles and an X drift of ±50 px. It travels `translateY(-(100vh + 100%))`, then the node is removed.
  - Foil look comes from an SVG filter: `feMorphology dilate r=5` → `feGaussianBlur 8` → `feSpecularLighting surfaceScale 20, specularConstant 3.05, specularExponent 20, feDistantLight az −20 el 12` (outline highlight) + `feGaussianBlur 12` → `feSpecularLighting surfaceScale 14, specularConstant 1, specularExponent 35, fePointLight (400, −120, 500)` (body highlight) + an inner shadow with `dx −12 / dy 12` and blur 12.
  - Emoji are split with `Intl.Segmenter` so they survive intact.

### react-floating-balloons (sanishkr), inspired by Twitter's birthday balloons — https://www.npmjs.com/package/react-floating-balloons
- **Source:** README and `dist/*.js` (v3.0.2).
- **Popularity:** 77 per week (VERIFIED), low. Its value is the **citation**: README "Motivation: Twitter and this post", linking to `erdoganbavas.medium.com/creating-birthday-balloons-like-twitter-profile-no-image-…`. That is VERIFIED evidence that Twitter's birthday balloons on a user's profile are a recognised reference pattern.
- **Mechanics (VERIFIED):**
  - `count 7`; `msgText 'Happy Birthday.'` written on some balloons in `font-family: cursive`; colours yellow, green, blue, red, orange, purple as `rgba(150,150,0,.75)`, `rgba(0,0,150,.75)`, `rgba(77,0,150,.75)`, `rgba(0,150,0,.75)`, `rgba(150,47,0,.75)`, `rgba(150,0,0,.75)`.
  - Balloon shape: `--balloonDimension 15vmax`, `border-radius 100% 100% 15% 100%`, `rotateZ(45deg)`, a highlight radial-gradient, and a string `#e2e204` at 60% height.
  - Rise: `ease-in-out`, **duration 11–14 s**, **delay 0–3 s**, zig-zag keyframes from `100vh` to about `-60/-70vh`.
  - **Pop on double-click** (single tap on touch devices): mo.js `Burst {radius 30→100, count 10, angle 0→180, delay stagger(0,25), shapes circle/polygon}` in the balloon's colour, plus a pop sound (`popVolumeLevel 0.5`). The balloon is hidden and removed after 2000 ms.
  - Options: `loop true`, `hangOnTop`.

### react-rewards (thedevelobear) — https://www.npmjs.com/package/react-rewards
- **Popularity:** 139,231 per week (VERIFIED).
- **Defaults (VERIFIED README):**
  - confetti `{lifetime 200, angle 90, decay 0.94, spread 45, startVelocity 35, elementCount 50, elementSize 8, colors ['#A45BF1','#25C6F6','#72F753','#F76C88','#F5F770']}`
  - **balloons `{lifetime 600, angle 90, decay 0.999, spread 50, startVelocity 3, elementCount 10, elementSize 20}`** (same colours)
  - emoji `{lifetime 200, decay 0.94, spread 45, startVelocity 35, elementCount 20, elementSize 25, emoji ['🤓','😊','🥳']}`

### dom-confetti and confetti-js
- **dom-confetti** (daniel-lundin): 108,914 per week; react-dom-confetti 100,105 per week (VERIFIED). Defaults: `angle 90, spread 45, startVelocity 45, elementCount 50, dragFriction 0.1, duration 3000, stagger 0, width/height 10px, colors ['#a864fd','#29cdff','#78ff44','#ff718d','#fdff6a']`.
- **confetti-js** (Agezao): 19,731 per week (VERIFIED). Defaults: `max 80, size 1, clock 25, props ['circle','square','triangle','line'], colors [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], respawn true, rotate false`.

### Typewriter libraries (for the "typed message" pattern)
- **typed.js:** 256,680 per week (VERIFIED). Defaults: `typeSpeed 0, startDelay 0, backSpeed 0, backDelay 700, loop false, showCursor true, cursorChar '|'`. Cursor blink: `typedjsBlink 0.7s infinite` (50% opacity 0). Humanizer: each delay = `round(random*speed/2) + speed`.
- **typewriter-effect:** 254,063 per week. Defaults: `delay 'natural'` = 120–160 ms per character, `deleteSpeed 'natural'` = 40–80 ms, `pauseFor 1500`, cursor `'|'` blinking at `Typewriter-cursor 1s infinite`.
- **react-type-animation:** 455,826 per week.
- **TypeIt:** used by halo-maya at `speed 42 / 35, startDelay 50, cursor true`. Its download count was not queried.

### Other ecosystem signals (VERIFIED weekly downloads)
gsap 6,718,405; lenis 1,939,293; animejs 1,313,619; howler 1,285,649; three 23,265,430; vue-confetti 26,116; @hiseb/confetti 8,278; splitting 7,990.

---

## 6. Viral and real-world birthday moments

- **Twitter profile birthday balloons.** Cited as the motivation for react-floating-balloons (VERIFIED citation). Details of Twitter's own implementation (counts, timing): NOT FOUND.
- **Forked "nerdy" birthday pages (faahim).** Many public deploys still carry the default name "Lydia" and the default copy (CORROBORATED: 3 deploy URLs). This is the clearest virality evidence in the category: people forward a working page with the name changed.
- **Indonesian "Klik Suratnya!" envelope greeting templates (feeldream.id / rayyscoding lineage).** VERIFIED code (halo-maya, 61 dependents). Social-media virality: NOT FOUND.
- **balloons-js by Artur Bień.** 5,971 per week (VERIFIED). Social virality: NOT FOUND.
- **Reddit, Hacker News and Product Hunt "I made a birthday website for my brother/girlfriend" posts.** **NOT FOUND.** Search budget exhausted, and Reddit and the Hacker News API are blocked. This is the biggest open gap in the dossier.

---

## Cross-reference patterns

Counts cover **experience references**, i.e. actual birthday or celebration pages and pens: R1 faahim, R2 fajarghifar, R3 nafisalawalidris, R4 HappyBirthdayGF, R5 halo-maya, R6 uday, R7 particle-cake, R8 react-floating-balloons (Twitter-inspired), R9 balloons-js, R10 Julian Garnier fireworks pen, R11 Gthibaud confetti pen, R12 Codrops Particle Effects for Buttons. Libraries that ship a pattern are listed separately. Evidence is VERIFIED unless marked (R) for REPORTED.

| Pattern | Experience refs (N) | Which | Libraries that provide it |
|---|---|---|---|
| Confetti | 3 | R2 (R), R6, R11 | canvas-confetti, react-confetti, @neoconfetti, react-confetti-explosion, js-confetti, party.js, tsParticles confetti, react-canvas-confetti, react-rewards, dom-confetti, confetti-js (11) |
| Balloons (floating/rising) | 5 | R1 (R), R2 (R), R3 (R), R8, R9 | balloons-js, react-floating-balloons, react-rewards balloons (3) |
| Letter balloons spelling words | 1 | R9 (`textBalloons`) | balloons-js |
| Pop-the-balloon interaction (with sound and burst) | 1 | R8 | react-floating-balloons (mo.js Burst) |
| Typewriter / typed message | 3 | R1 (R, chat box), R2 (R), R5 | typed.js, typewriter-effect, react-type-animation, TypeIt (4) |
| Fake chat box ("I was going to just text you…") | 2 | R1 (R), R2 (R) | — |
| Lines revealed one at a time (scripted timeline) | 3 | R1 (R), R2 (R, "ideas"), R5 (auto-advancing modals) | GSAP (6.7M/wk) |
| Cake | 3 | R3 (R, fading cake), R6 (3-tier CSS), R7 (3D particle) | — |
| Blowable candles | 1 | R6 (click or Space) | — |
| **Mic blow detection** | **0 verified** | NOT FOUND | hark (volume threshold, built for speech) |
| Flickering CSS flame | 1 | R6 (0.15s alternate) | — |
| Smoke after blowing | 1 | R6 | — |
| Fireworks | 3 | R2 (R), R7, R10 | fireworks-js, tsParticles fireworks, canvas-confetti "Fireworks" preset (3) |
| Particles re-forming into text | 1 | R7 | — |
| Envelope / letter opening | 2 | R5, R6 | — |
| Gift box unwrap | 1 | R6 (with 3-2-1 countdown) | Codrops particle button (R12) as a "dissolve the gift" mechanic |
| Photo / memories | 3 | R1 (R, single photo), R5 (photo/GIF), R6 (gallery) | — |
| Background music | 2 | R5 (starts on envelope tap), R6 (looped, volume 0.75) | howler (1.29M/wk), tsParticles fireworks `sounds` |
| Music mute toggle | 0 verified | NOT FOUND | — |
| Audio started by the first user gesture | 2 | R5, R6 | — |
| Synthesised SFX (blow noise, chime) | 1 | R6 | tsParticles/fireworks-js explosion mp3s |
| Falling hearts / emoji rain | 2 | R5 (hearts), R6 (cat rain) | js-confetti emojis, canvas-confetti `shapeFromText`, react-rewards emoji |
| Personalise via config file (name/texts/photo) | 2 | R1 (`customize.json`, R), R2 (single config, R) | — |
| Reply / send-back call to action | 1 | R5 (WhatsApp) | — |
| Replay at the end | 0 verified | R1 replay is UNVERIFIED-LEAD | — |
| Reduced-motion respect | 0 sites | — | canvas-confetti (opt-in), tsParticles confetti (default ON) |
| Dark / night background | 3 | R5 `#101010`, R7 navy gradient, tsParticles fireworks `#000` | — |

---

## Ranking (by popularity signal)

**A. Libraries, by npm weekly downloads (VERIFIED, 2026-10-03)**
1. canvas-confetti — 9,580,228 (401 dependents)
2. @neoconfetti/react — 4,960,750 (only 2 dependents; probably inflated by transitive installs)
3. react-confetti — 2,774,626 (200 dependents; Gthibaud-pen lineage)
4. react-type-animation — 455,826
5. typed.js — 256,680
6. typewriter-effect — 254,063
7. react-canvas-confetti — 249,281 (canvas-confetti presets)
8. react-confetti-explosion — 178,511
9. js-confetti — 163,025
10. hark — 143,130 (mic threshold)
11. react-rewards — 139,231
12. fireworks-js — 136,838
13. tsparticles — 135,467 / @tsparticles/confetti 110,187
14. dom-confetti — 108,914 / react-dom-confetti 100,105
15. @fireworks-js/react — 51,920
16. @tsparticles/preset-confetti — 41,426
17. party-js — 35,996
18. vue-confetti — 26,116
19. confetti-js — 19,731
20. balloons-js — 5,971
21. react-particle-effect-button (Codrops port) — 1,166
22. react-floating-balloons — 77; uday-birthday-wishes 13; particle-cake 12; halo-maya 5 (61 dependents)

**B. GitHub birthday-site repos, by stars (REPORTED)**
1. faahim/happy-birthday — 1.5k
2. ProgrammerGaurav/happy-birthday — 290
3. nikitayadav19/HappyBirthdayGF — 274 (281 forks)
4. sapthesh/Birthday — 165
5. Harmann60/Happy-Birthday — 119
6. Itz-Murali/Happy-BirthDay-Ai — 89
7. rushkii/hbd-kizu — 75
8. Itz-Murali/Happy-Birthday-Animated — 73
9. Shizu-ka/Birthday-Website — 68
10. Aghitsniii/SelamatUlangTahun — 65
11. gouravkhunger/nextjs-birthday-wish — 60
12. Itz-Murali/Happy-birthday-Ai-v2 — 45

fajarghifar/happybirthday: stars NOT FOUND.

**C. CodePen / Codrops**
Hearts and views NOT FOUND for all. Proxy signals:
1. Gthibaud "Confetti" ENzXbp: ancestor of about 2.95M weekly downloads (react-confetti plus react-confetti-explosion); called "oft-used".
2. Julian Garnier "Fireworks" gmOwJX: author of anime.js; ported to a GNOME/GJS showcase.
3. Codrops "Particle Effects for Buttons" (2018): ports for React, Vue and Angular.

---

## Exact reusable parameters

Every number below comes from the source named next to it. The labels are the ones from section 0.

### Confetti
| Use | Parameters | Source |
|---|---|---|
| Default burst | `particleCount 50, angle 90, spread 45, startVelocity 45, decay 0.9, gravity 1, drift 0, ticks 200, origin {.5,.5}, scalar 1, zIndex 100` | canvas-confetti README and src (VERIFIED) |
| Default palette | `#26ccff #a25afd #ff5e7e #88ff5a #fcff42 #ffa62d #ff36ff` | canvas-confetti src (VERIFIED) |
| Bigger burst | `{particleCount:150}` | canvas-confetti README (VERIFIED) |
| Wide burst | `{spread:180}` | canvas-confetti README (VERIFIED) |
| Random poof | `{particleCount:100, startVelocity:30, spread:360, origin:{x:rand, y:rand-0.2}}` | canvas-confetti README (VERIFIED) |
| Side cannons, continuous | every animation frame for 30 s: `{particleCount:7, angle:60, spread:55, origin:{x:0}}` + `{particleCount:7, angle:120, spread:55, origin:{x:1}}` | canvas-confetti README (VERIFIED) |
| Realistic look | origin y .7, 200 total split .25/.2/.35/.1/.1 with `{spread 26, sv 55}`, `{spread 60}`, `{spread 100, decay .91, scalar .8}`, `{spread 120, sv 25, decay .92, scalar 1.2}`, `{spread 120, sv 45}` | react-canvas-confetti realistic conductor (VERIFIED-VIA-PORT) |
| Fireworks (confetti style) | `{startVelocity 30, spread 360, ticks 60, zIndex 0, particleCount 150}` at x∈[.1,.3] and x∈[.7,.9], y = rand−.2 | react-canvas-confetti (VERIFIED-VIA-PORT) |
| Stars | shared `{spread 360, ticks 50, gravity 0, decay .94, startVelocity 30, colors FFE400 FFBD00 E89400 FFCA6C FDFFB8}`; `{40, scalar 1.2, ['star']}` + `{10, scalar .75, ['circle']}` | react-canvas-confetti explosion (VERIFIED-VIA-PORT) |
| School pride | `{3, angle 60, spread 55, origin x 0}` + `{3, angle 120, origin x 1}`, colours `#bb0000 #ffffff` | react-canvas-confetti (VERIFIED-VIA-PORT) |
| Snow | `{1, startVelocity 0, ticks 200, gravity .3, colors ['#ffffff'], shapes ['circle'], scalar .4–1}` | react-canvas-confetti (VERIFIED-VIA-PORT) |
| Gold crossfire | four corners, `gravity 0, colors ['#E8B837'], count 13–17, spread 75–85, decay .97–.99, sv 9–11, ticks 40–60` | react-canvas-confetti (VERIFIED-VIA-PORT) |
| Emoji confetti | `confetti.shapeFromText({text:'🍍', scalar:2})` + `scalar:2` | canvas-confetti README (VERIFIED) |
| Custom path | `shapeFromPath({path:'M0 10 L5 0 L10 10z'})` | canvas-confetti README (VERIFIED) |
| CSS explosion L / M / S | `{force .8, duration 3000, count 250, width 1600}` / `{.6, 2500, 80, 1000}` / `{.4, 2200, 30, 400}`; colours `#FFC700 #FF0000 #2E3191 #41BBC7` | react-confetti-explosion README (VERIFIED) |
| Rain from the top | `numberOfPieces 200, gravity .1, friction .99, initialVelocityX 4, initialVelocityY 10, tweenDuration 5000` | react-confetti (VERIFIED) |
| Emoji / pink palette | emojis `🌈 ⚡️ 💥 ✨ 💫 🌸`; pink `#ff0a54 #ff477e #ff7096 #ff85a1 #fbb1bd #f9bec7`; default 250 pieces, radius 6, emoji 80 px | js-confetti (VERIFIED) |
| Gold sparkles | count 10–20, speed 100–200, size .8–1.8, life 1–2 s, HSL(50, 100%, 55–85%), star, no gravity | party.js sparkles (VERIFIED) |
| Confetti on a personal site | `{80, spread 70, origin y .6}`, colours `#ffd700 #ff4081 #7c4dff #00e5ff #ffffff`; finale `{90, spread 80}` at x .2 and .8 | uday-birthday-wishes (VERIFIED) |

### Fireworks
| Use | Parameters | Source |
|---|---|---|
| Click burst + ring | 30 dots, distance 50–180 px, r 16–32→0.1, 1200–1800 ms easeOutExpo; ring r→80–160, lineWidth 6→0, alpha .5→0 linear 600–800 ms, `#FFF`; colours `#FF1461 #18FF92 #5A87FF #FBF38C`; auto every 200 ms | Julian Garnier pen gmOwJX via gjsify port (VERIFIED-VIA-PORT) |
| Rocket fireworks | `particles 50, explosion 5, intensity 30, gravity 1.5, friction .95, acceleration 1.05, traceLength 3, traceSpeed 10, flickering 50, decay .015–.03, brightness 50–80, delay 30–60, lineWidth explosion 1–3 / trace 1–2, opacity .5` | fireworks-js defaults (VERIFIED) |
| Fireworks bundle | `rate 10, speed 20–40, gravity 30, splitCount 100, minHeight 10–30, brightness/saturation ±30, sounds true` | @tsparticles/fireworks (VERIFIED) |
| Fireworks preset | bg `#000`, launches every 0.3 s from bottom centre (width 100), split at 15–35% from top, 75–150 sparks, trail 5–10, life 1–2 s | @tsparticles/preset-fireworks (VERIFIED) |

### Balloons
| Use | Parameters | Source |
|---|---|---|
| Realistic release | count `max(7, round(vw/(w/2)))`, duration 25–30 s, easings `cubic-bezier(0.22,1,0.36,1)` / `cubic-bezier(0.33,1,0.68,1)`, delay zIndex×200 ms, tilt ±8–15°, blur 8px on near balloons, perspective 1500px @ 50vw 100vh | balloons-js (VERIFIED) |
| Balloon colours | `#f8b13d / #ffec37`, `#c03940 / #f89640`, `#0075bc / #3bc0f0`, `#3d954b / #b0cb47`, `#a3509d / #cf85b8` (body / light) | balloons-js (VERIFIED) |
| Letter balloons | font Sniglet bold; line delay 1000 ms, char delay 100 ms, rise 5000–6500 ms linear, rotateY ±7°, rotateZ ±8°, drift ±50 px, drop-shadow `-60px 60px 12px rgba(0,0,0,.25)`; foil filter values in section 5 | balloons-js `textBalloons` (VERIFIED) |
| Twitter-style balloons | 7 balloons, 15vmax, ease-in-out 11–14 s, delay 0–3 s; pop burst radius 30→100, 10 particles, stagger 0–25 ms; pop volume .5 | react-floating-balloons (VERIFIED) |
| Micro balloons | `lifetime 600, decay .999, spread 50, startVelocity 3, elementCount 10, elementSize 20` | react-rewards (VERIFIED) |

### Cake, candles and blowing
| Use | Parameters | Source |
|---|---|---|
| Flame flicker | 14×22 px, `radial-gradient(ellipse at bottom, #ffee58 0%, #ff9800 60%, #f57c00 100%)`, glow `0 0 15px #ff9800, 0 0 25px #ffee58`, `0.15s infinite alternate` scale 1→1.08, rotate −1→1° | uday-birthday-wishes (VERIFIED) |
| Smoke | `smokeRise 1.2s forwards`: translateY 0→−30px, scale 1→3, opacity .8→0, blur 3px | uday-birthday-wishes (VERIFIED) |
| Blow sound | 0.8 s white noise → lowpass 600→100 Hz → gain .3→.01 | uday-birthday-wishes (VERIFIED) |
| Wish chime | 523.25 / 659.25 / 783.99 / 1046.50 Hz sine, 0.3 s, gain .2, 80 ms stagger, +400 ms after the blow | uday-birthday-wishes (VERIFIED) |
| Mic level detection | fftSize 512, smoothing .1, poll 50 ms, threshold −50 dB, triggers when 2 of the last 3 polls exceed it, stops after 10 quiet polls | hark (VERIFIED; tuned for speech, **not** a verified blow threshold) |
| Particle cake | 15000 particles, size 3, cameraZ 400, candle `#FFFF00`; click → fireworks → text | particle-cake (VERIFIED) |

### Typing, sequencing and UI timing
| Use | Parameters | Source |
|---|---|---|
| Typed letter | TypeIt `speed 42, startDelay 50, cursor true` (second line speed 35) | halo-maya (VERIFIED) |
| Natural typing | 120–160 ms per char; delete 40–80 ms; pause 1500 ms; cursor blink 1 s | typewriter-effect defaults (VERIFIED) |
| Cursor blink | `typedjsBlink 0.7s infinite` | typed.js (VERIFIED) |
| Auto-advancing message cards | SweetAlert2 `timer 2600, timerProgressBar true, showConfirmButton false, allowOutsideClick false`, sticker 90×90 | halo-maya (VERIFIED) |
| Envelope dismiss | `transition: all 1s ease; transform: scale(.1); opacity: 0`, then 3300 ms before the first message | halo-maya (VERIFIED) |
| Background breathing | `@keyframes jj` scale 1→1.3→1, 7 s infinite, overlay opacity .5 | halo-maya (VERIFIED) |
| Heart rain | spawn every 200 ms, 30×30 SVG, left 0–95vw, fall 2–5 s linear from −10vh to 100vh, cap 100 nodes | halo-maya (VERIFIED) |
| Countdown | 3 → 2 → 1 at 700 ms per step, then 🎉 | uday-birthday-wishes (VERIFIED) |
| Particle button dissolve | `duration 1000, easing easeInOutCubic, type circle, style fill, direction left, canvasPadding 150, particlesAmountCoefficient 3, oscillationCoefficient 20` | Codrops Particle Effects for Buttons via react port (VERIFIED-VIA-PORT) |

### Typography found (verified)
All of the Google families below returned HTTP 200 from `fonts.googleapis.com/css2` on 2026-10-03 (VERIFIED available). Sniglet serves weights 400 and 800, Nunito Sans 400 and 700, and Itim 400 only.
- Nunito Sans 400/700 and Itim (halo-maya)
- Outfit / Plus Jakarta Sans and Fredoka (uday)
- **Sniglet** (balloons-js letter balloons)
- `cursive` (react-floating-balloons message)
- canvas-confetti emoji font stack (section 5)
- Microsoft YaHei (particle-cake default)
- faahim and fajarghifar fonts: NOT FOUND

---

## Gaps and the next steps that would close them
1. **Raise the WebSearch budget** (`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`). Most of the missing CodePen and Codrops data, and all of the Reddit/HN/TikTok virality data, depends on search.
2. Confirm on the live canvas-confetti demo page: preset names and the original Fireworks, Snow, Emoji and Custom Shapes code (currently UNVERIFIED-LEAD beyond the port).
3. Find 2–3 verified CodePen mic-blow pens and record their exact thresholds. Right now **no** birthday-specific mic threshold is verified; only hark's speech defaults are.
4. Get CodePen heart and view counts for the Gthibaud, Julian Garnier and yerlanyr pens, and for the top "birthday card", "birthday cake" and "envelope" pens.
5. Confirm the Codrops leads (3D Typing Effects, Kinetic Typography, On-Scroll Typography Animations) and any celebration-specific Codrops demos.
6. faahim/happy-birthday: confirm fonts, colours, the full timeline (including the replay prompt) and the GSAP durations. If the caller widens scope, this is available through the GitHub API, which is reachable from this session but was deliberately left unused.
