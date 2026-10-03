# 08 — Presenting a handful of personal photos: "Memories" products, award galleries, instant-photo styling

Research category: how real, well-regarded products and sites present a **small set of personal photos**. This is evidence for the "memories" section of the "Happy Birthday, Mustafa" site, which has 5 low-resolution photos: 480×360, 320×240 and 240×320 (graduation night, a dorm selfie, creek and forest hikes).
Compiled 2026-10-03. Under the "no taste" rule, every value in the recommended spec at the end cites a line in this file or an earlier research file.

Evidence from earlier files was **not re-researched**. It is used only in the cross-reference counts and is tagged *(prior)*:
- **nk.studio "20 Years Inspired by People"** (Awwwards SOTD): a horizontal side-scroll of cards "along a path", with a counter and a focus on one item at a time.
- **Ten Years Away** (Studio375): a scroll-driven horizontal comic.
- **Getty "Sculpting Harmony"**: "archival stills, grey mono captions".
- **Luma "Polaroid" style**: "restyles the cover into a stacked polaroid with a paperclip".
- **Spotify Wrapped 2025**: "staggered grid reveals", and "horizontal carousels with springy snapping physics".

---

## 0. Method, limits and confidence legend

| Channel | Status | Used for |
|---|---|---|
| WebSearch (search-result summaries) | 40 calls, the full budget. One call errored because a blocked domain was in the domain filter. | Everything in this file. |
| WebFetch | Tried once on `support.apple.com`. Result: `EGRESS_BLOCKED`. | Nothing. |
| Firecrawl | Tried once. Result: "Insufficient credits". | Nothing. |
| GitHub tools and cloning | Not used (out of scope). GitHub repos appear below only as web-search result titles and descriptions. | §D only, as titles. |

Labels used on every fact:
- **VERIFIED**: at least 2 independent search results agree, or the fact comes from a first-party page (Apple Newsroom, Google Photos Help, about.fb.com, about.instagram.com, m3.material.io, nngroup.com, tympanus.net, awwwards.com listing titles). Even then, the text reached me only as a search summary of that page.
- **REPORTED**: one search summary or one secondary source. Treat as "probably true".
- **DERIVED**: plain arithmetic on VERIFIED or REPORTED numbers. It contains no taste. The inputs are always named.
- **NOT FOUND**: searched and found nothing reliable. **Do not fill these in.**
- **MEMORY (unverified)**: the researcher's own prior knowledge. Listed only so a later pass can verify it. **Never use it as evidence.**

**Biggest gaps:**
1. **Step-by-step behaviour of the Awwwards gallery elements**: whether each one is scroll-scrubbed, dragged or snapped, how it scales, and what changes on mobile. Only the listing titles and tags were reachable. All of them are listed in §B with exact URLs for a later visual check.
2. **Rotation angles in polaroid stacks**: not found in any source.
3. **Caption typeface in Instagram's polaroid "Frames" sticker**: not found.

---

## A. Canonical "Memories" products

### A1. Apple Photos — Memories (iOS 10, 2016 → iOS 15, 2021 → today)
- **URLs**
  - https://www.macrumors.com/how-to/ios-10-photos-edit-memories/
  - https://appletoolbox.com/change-iphone-memories-photos-app/
  - https://dblabsapps.com/blog/apple-photos-memories-guide/
  - https://www.apple.com/newsroom/2021/06/ios-15-brings-powerful-new-features-to-stay-connected-focus-explore-and-more/
  - https://appleinsider.com/articles/21/06/07/memories-features-in-photos-app-gets-apple-music-integration-new-features-in-ios-15
  - https://www.macrumors.com/how-to/use-memory-looks-photos-app/
  - https://support.apple.com/guide/iphone/personalize-your-memory-movies-iph1a5832438/ios
  - https://support.apple.com/guide/photos/personalize-memories-pht69f4420d8/mac
  - https://discussions.apple.com/thread/255822571
  - https://discussions.apple.com/thread/8383096
- **Recognition:** Apple first-party feature, built into every iPhone.
- **What it does, step by step**
  1. Photos auto-generates a memory: a **title + subtitle** shown with a **key photo**. You can edit the title and subtitle, choose a **title style**, and change the key photo ("choose the photo that appears with the memory title by making it the key photo"). **VERIFIED** (Apple Support, iPhone and Mac guides, via search summary.)
  2. The memory plays as a **memory movie with music**.
  3. **iOS 10:** you pick a **mood** that "change[s] the music and title style to match". The examples given are **"Chill"** (a lazy day at the river), **"Epic"** (fast action shots) and **"Happy"**. **VERIFIED** (MacRumors + Cult of Mac summaries.)
     - The full mood list is **NOT FOUND**. MEMORY (unverified): Dreamy, Sentimental, Gentle, Chill, Happy, Uplifting, Epic, Club, Extreme. Do not use.
  4. **iOS 15:** Apple calls it "the biggest update ever to Memories". It brings an "interactive playback and editing interface" with "options to **pause, replay the last photo, skip to the next photo or jump ahead**, all with synced music". **VERIFIED** (Apple Newsroom, June 2021, quoted via AppleInsider/MacRumors.)
  5. **Memory mixes:** "swipe to audition different songs. **Pacing and memory look are adjusted** to match the new tunes." **VERIFIED** (Apple Newsroom.)
  6. **12 Memory Looks:** they "analyze each photo and video, and apply the correct amount of contrast and color adjustment for a consistent look". **VERIFIED** (Apple Newsroom + MacRumors.) The names of the 12 looks are **NOT FOUND**.
  7. **Bird's-eye overview:** a grid of the memory's contents for adding or removing items and jumping ahead. **REPORTED** (AppleInsider.)
- **Exact numbers**
  - Memory length: **Short ≈ 20 s, Medium ≈ 40 s, Long ≈ 1 min.** **VERIFIED** (MacRumors iOS 10 how-to + AppleToolBox/dblabs summary.)
    - A later source says "short runs about 30 seconds; long can run several minutes". **REPORTED** (dblabsapps, 2026.)
  - Length works by **changing how many photos are included, not playback speed**. **REPORTED** (AppleToolBox/Apple Community summary.)
  - With **few photos, "Long" is not offered**. **REPORTED** (Apple Community thread title "iOS 18 – No 'Long' option".)
  - **Seconds per photo: NOT FOUND.** Apple does not publish it.
- **Ken Burns pan/zoom inside Memories:** **NOT FOUND** in any official source. An Apple Community thread titled "Memories with Ken Burns?" exists, but its answer was not readable. Ken Burns is documented as a *slideshow theme* (A2), not as a Memories setting.
- **Mobile behaviour:** this is a phone-first product. Its controls are pause, replay the previous photo, skip and jump (see step 4).
- **Confidence:** structure and durations VERIFIED. Per-photo timing and Ken Burns parameters NOT FOUND.

### A2. Apple Photos for Mac — slideshow themes (includes "Ken Burns" and "Vintage Prints")
- **URLs**
  - https://apprize.best/apple/iphoto_1/7.html (an excerpt from *iPhoto: The Missing Manual*)
  - https://www.cryan.com/blog/20160916.jsp ("Vintage Prints Tip in Apple Photos")
  - https://discussions.apple.com/thread/253440275
- **What it does:** Photos for Mac ships **seven slideshow themes**: **Ken Burns, Origami, Reflections, Sliding Panels, Vintage Prints, Classic, Magazine**. **REPORTED** (one summary). A second page title corroborates that "Vintage Prints" exists.
  - **Ken Burns** = "a slow pan-and-zoom approach". **REPORTED.**
  - **Reflections** = the Ken Burns zoom on a white background with a reflection. **REPORTED.**
  - **Sliding Panels** = several photos at once, sliding in from several directions. **REPORTED.**
- **What Vintage Prints looks like** (borders, rotation): **NOT FOUND** this session.
- **Pan/zoom amount and duration: NOT FOUND.**
- **Confidence:** REPORTED.

### A3. Google Photos — Memories (Sept 2019 → scrapbook view 2023 → Material You carousel 2024)
- **URLs**
  - https://9to5google.com/2019/09/12/google-photos-memories/
  - https://techcrunch.com/2019/09/12/google-photos-adds-a-time-traveling-version-of-stories-plus-more-sharing-and-printing-options
  - https://abcnews.com/Business/tap-best-pictures-memories-curated-google-photos/story?id=65592620
  - https://support.google.com/photos/answer/9454489 (the "Find & manage your featured memories" Help page, in Android, iOS and Computer variants)
  - https://support.google.com/photos/thread/141544021/google-photo-slide-show-speed?hl=en
  - https://9to5google.com/2024/05/08/google-photos-material-you-carousel/
  - https://www.blog.google/products/photos/redesigned-google-photos/
  - https://blog.google/products/photos/google-photos-memories-view/
  - https://9to5google.com/2023/08/15/google-photos-memories-navigation-bar-update/
  - https://www.sammobile.com/news/google-photos-redesign-navigation-bar-scrapbook-memories/
  - https://www.androidauthority.com/google-photos-memories-view-ai-3355217/
- **Recognition:** Google first-party. The Memories carousel is "used by half a billion people every month". **REPORTED** (blog.google redesign post, via summary.)
- **What it does, step by step**
  1. Announced **12 Sept 2019**. **VERIFIED** (9to5Google + TechCrunch + ABC.)
  2. It is a **"stories-esque" carousel of memories "above the gallery"**, "very similar to the carousel of stories at the top of Instagram". **VERIFIED** (9to5Google + TechCrunch.)
  3. Opening one gives a **full-screen** view where you **tap right to advance**. **"Each year gets its own story"**, with the latest at the left. **REPORTED.**
  4. Machine learning **removes duplicate shots** and surfaces the best ones, based on quality and **smiling subjects**. Google calls them "privately presented" ("sit back and enjoy"). **REPORTED.**
  5. **Controls (official Help page). VERIFIED.**
     - **iPhone/iPad:** "tap on the right or left of the screen to move to the next or previous photo"; "swipe right or left … to skip to the next or previous memory"; "**touch and hold to pause on a photo**".
     - **Android:** tap or swipe right/left for next/previous photo; swipe up/down to skip memory; touch and hold to pause.
  6. **Timing.** Memories at the top of the Photos page play "automatically with **5 seconds per image**"; a slideshow started from the ⋮ menu plays at **4 seconds per image**. **REPORTED** (Google Photos Community thread, one source.)
     - Another summary claimed "a 5-second fade between photos". That claim conflicts and is unreliable, so do not use it.
     - Speed is **not user-adjustable**. **REPORTED.**
  7. **2023 "scrapbook-like" Memories view:** photos grouped by day, event or topic. You can add/remove items, rename, use AI **title suggestions**, **co-author** with friends, and share. **VERIFIED** (blog.google + 9to5Google + SamMobile + Android Authority + HowToGeek.)
  8. **2024 "animated Material You carousel":** the centre image is "kept mostly visible as you scroll horizontally, with **contraction/expansion** as images disappear/appear at the left and right edges". **REPORTED** (9to5Google.) The component spec is in A4.
- **Copy**
  - Feature name: **"Memories"** / "featured memories". **VERIFIED.**
  - Notification setting: **"Previous years"** (time-based memories). **REPORTED.**
  - Android home-screen widget: "Memories from **1 year ago**". **REPORTED.**
  - The exact on-card label wording (e.g. "1 year ago" vs "2 years ago") is **NOT FOUND** verbatim.
- **Mobile behaviour:** the product is mobile-first. Tap zones are the left and right halves; touch-and-hold pauses; horizontal swipe changes memory (iOS).
- **Confidence:** controls VERIFIED (official). 5 s per image REPORTED.

### A4. Material Design 3 — Carousel component (the system behind Google Photos' 2024 carousel)
- **URLs**
  - https://m3.material.io/components/carousel/guidelines
  - https://developer.android.com/develop/ui/compose/components/carousel
  - https://developer.android.com/reference/com/google/android/material/carousel/HeroCarouselStrategy
  - Two independent spec audits, seen only as search results:
    - https://github.com/minop1205/m3-expressive-react/pull/250
    - https://github.com/kanso-labs/kanso-ui/issues/1175
- **Recognition:** Google's official design system.
- **Layouts and numbers. VERIFIED** (primary page via summary + 2 independent implementation audits.)
  - **Multi-browse:** large + medium + small items. **Small item width 40–56 dp.** Spacing: **16 | L | 8 | M | 8 | S | 16** (16 dp outer padding, 8 dp between items).
  - **Corner radius 28 dp.** Shrunk items keep full height and the 28 dp radius.
  - **Hero:** "at least one large and one small item at a time", no medium item; 1 small item, or **2 small items when center-aligned**.
  - Items are **masked/resized at keylines** (large/medium/small) rather than scaled and faded. **REPORTED** (audit issue #245 title.)
- **Snapping and fling parameters: NOT FOUND** (budget).
- **Mobile behaviour:** it is a mobile component. The visible small item is the "there is more" cue (compare NN/g in B11).

### A5. Facebook — "On This Day" (2015) and Memories page (2018)
- **URLs**
  - https://about.fb.com/news/2018/06/all-of-your-facebook-memories-are-now-in-one-place/
  - https://techcrunch.com/2018/06/11/facebook-launches-memories-a-new-home-for-reminiscing/
  - https://forbes.com/sites/amitchowdhry/2018/06/12/facebook-memories/amp
  - https://www.ibtimes.com/facebook-day-does-not-reach-all-users-even-14-months-global-rollout-2371890
  - https://www.huffpost.com/entry/dear-facebook-because-you-care-theres-more-about_b_57ceb821e4b06c750ddbac4b
  - https://time.com/4207010/facebooks-new-feature-video/
- **What it does**
  1. **"On This Day"** was announced **24 March 2015** as "a new way to look back at things you have shared … on this date last year and the years prior". **REPORTED.**
  2. **June 2018 Memories page** has four sections. **VERIFIED** (about.fb.com + TechCrunch + Forbes.)
     - **"On This Day"**
     - **"Friends Made On This Day"** (friendversary **videos or collages**)
     - **"Recaps of Memories"** (seasonal or monthly recaps "bundled into a message or **short video**")
     - **"Memories You May Have Missed"**
  3. **Friendversary videos** are collections of shared photos "set to **upbeat music**". **REPORTED** (TIME, 2016.)
- **Copy:** "We care about you and the memories you share here. We thought you'd like to look back on this post." **REPORTED** (summary). The HuffPost headline "Dear Facebook: Because You Care…" corroborates the "care" phrasing.
- **Timings: NOT FOUND.**
- **Confidence:** section names VERIFIED; copy REPORTED.

### A6. Snapchat — Memories (2016) and Flashbacks
- **URLs**
  - https://help.snapchat.com/hc/en-us/articles/7012400472084-How-do-Flashback-Memories-work
  - https://www.bustle.com/p/how-to-use-flashback-stories-on-snapchat-so-you-can-relive-your-memories-with-this-nostalgic-new-feature-9385901
  - https://www.adweek.com/performance-marketing/snapchat-heres-how-to-turn-off-flashback-memories/
- **What it does:** Flashback pulls Snaps saved on **the same day in a previous year**. It shows as a **Featured Story** in Memories if you have a saved Snap from at least one year ago to the day. **REPORTED.** The official Help page exists, but its text was not readable.
- **Copy:** the label at the top of Memories reads **"One Year Ago, Today"**. **REPORTED** (Bustle, via summary.)
- **Format:** a Story, meaning full-screen and tap-through. **REPORTED.**
- **Timings: NOT FOUND.**

### A7. Instagram — "On This Day" (2019), Archive "Memories", Stories timing
- **URLs**
  - https://techcrunch.com/2019/10/08/instagram-create-mode/
  - https://about.instagram.com/blog/announcements/introducing-stories-highlights-and-stories-archive
  - https://help.instagram.com/887853524723868
  - https://www.socialmediatoday.com/news/instagram-tests-new-memories-prompts-to-re-ignite-user-engagement/642550/
  - https://www.outfy.com/blog/instagram-story-length/
  - https://socialrails.com/blog/instagram-story-length-complete-guide
- **What it does**
  1. **Create mode (Oct 2019) launched "On This Day" throwbacks.** **VERIFIED** (TechCrunch headline.)
     - It shows a random feed post from the same calendar date. A **dice button** shows another one, and you can share it to Stories as an embedded post. **REPORTED.**
  2. **Stories Archive** is "a private space only you can see". **VERIFIED** (about.instagram.com + Help Center.)
  3. The Archive's **"Memories"** item shows stories you shared "around this date". **REPORTED.**
- **Timings**
  - A photo in Stories shows for **5 s** by default. **REPORTED** (several secondary guides; one says 7 s).
  - With a music sticker, about **15 s**. **REPORTED.**
  - **Progress bars** run across the top, **one horizontal segment per item**. **REPORTED.**

---

## B. Award-site gallery references (Awwwards / FWA / CSSDA) and mobile usability evidence

> Caveat for every B card: search reached **listing titles, tags and credits only**. The step-by-step mechanics are **NOT FOUND** unless a card says otherwise: scroll-scrubbed vs drag vs snap, scale-on-focus amounts, captions, and mobile changes. Each needs a visual check of the linked page.

### B1. Impermanence — Bruno Arizio / Victor Work (photography by Roger Mac, text by Érika Moreira)
- **URLs**
  - https://www.awwwards.com/sites/impermanence
  - https://www.awwwards.com/mobile-sites/impermanence
  - https://www.awwwards.com/inspiration/impermanence-horizontally-scrolling-carousel-gallery
  - https://brunoarizio.com/work/impermanence/
  - https://dribbble.com/shots/14959176-Impermanence-Photographed-by-Roger-Mac
- **Recognition**
  - **Awwwards SOTD**, 19 Jan 2021. **REPORTED** for the date. The listing title "Impermanence – Awwwards SOTD" is VERIFIED.
  - **Awwwards Mobile Site of the Week.** **VERIFIED** (the URL `/mobile-sites/impermanence` appeared in 2 searches.)
  - "Mobile Excellence". **REPORTED.**
  - This is the **only gallery reference in this file with explicit mobile recognition.**
- **What it does:** a "digital journey"/"digital exhibition" of photographs, with a **"horizontally-scrolling carousel gallery"** inspiration element. **VERIFIED** (Awwwards inspiration listing.)
  - Tags: navigation, animation, **sound design**, parallax, clean, typography, photography, **horizontal layout**, minimal. **REPORTED.**
  - Credits include a music composer (Marcelo Baldin, Combustion Studio). **REPORTED.**
- **Mechanics (scrub, drag, snap, scale, captions) and what changes on mobile: NOT FOUND.**
  - A summary hinted at WebGL scroll distortion, but it drew on a Codrops case study of Arizio's *portfolio*, not this site. Treat as NOT FOUND.

### B2. Horizontal scrolling image gallery — StudioChevojon
- **URL:** https://www.awwwards.com/inspiration/horizontal-scrolling-image-gallery-studiochevojon
- **Tags:** scrolling, image gallery, photography, horizontal-layout. Designer credited as "Pam". **REPORTED.**
- **Mechanics and mobile: NOT FOUND.**

### B3. Horizontal scroll gallery — Storio
- **URLs**
  - https://www.awwwards.com/inspiration/horizontal-scroll-gallery-storio
  - https://www.awwwards.com/inspiration/card-preview-over-a-cover-image-storio (a related element)
- **Tags:** gallery, images, **details, cards**, horizontal scroll. Designer: Darko Stanimirov. **REPORTED.**
- **Mechanics and mobile: NOT FOUND.**

### B4. Horizontal scroll gallery with zoom — OWL
- **URL:** https://www.awwwards.com/inspiration/horizontal-scroll-gallery-with-zoom-owl-1
- **Tags:** horizontal gallery, **zoom**, interactive, scroll. Designer: Arvin Leeuwis. **REPORTED.**
- The title says a zoom step exists. **The trigger and the zoom amount are NOT FOUND.**

### B5. Image Gallery with Horizontal Scroll — Lasse Pedersen (Kasper Laigaard Studio)
- **URL:** https://www.awwwards.com/inspiration/image-gallery-with-horizontal-scroll-lasse-pedersen
- **Tags:** image, gallery, horizontal scroll, **resize, scale**. **REPORTED.** These tags point to scale-on-focus.
- **Amounts and mobile: NOT FOUND.**

### B6. Image gallery horizontal scrolling — Maggie Rose
- **URLs**
  - https://www.awwwards.com/inspiration/image-gallery-horizontal-scrolling-maggie-rose
  - https://www.awwwards.com/25-great-horizontal-layout-websites.html
- **Tags:** gallery, horizontal layout, photography, horizontal-scroll navigation. **REPORTED.**
- The Awwwards article on horizontal layouts says: "**Horizontal scrolling comes naturally for touch screens** as it is easier to navigate websites when using fingers as a pointer." **REPORTED** (quote via summary). Whether Maggie Rose is in that list is unconfirmed.

### B7. "Image gallery" — Perspectives (slug `mobile-layouts-perspectives`)
- **URL:** https://www.awwwards.com/inspiration/mobile-layouts-perspectives
- **Tags:** image selection, **image carousel, image grid, mobile layout**, image gallery. **REPORTED.**
- This is the one element tagged explicitly as a **mobile layout**. The tags suggest a **grid ↔ carousel** switch, but the mechanics are **NOT FOUND**.

### B8. Draggable, random and infinite gallery leads (existence VERIFIED as Awwwards listings; behaviour NOT FOUND)
- Draggable Image Gallery (ICON × Khaby Lame; tags photography, gallery, drag): https://www.awwwards.com/inspiration/draggable-image-gallery
- Draggable Gallery (OH Architecture; GSAP): https://www.awwwards.com/inspiration/draggable-gallery-oh-architecture
- Draggable Horizontal Gallery (Kirkstall Brewery "The Bridge"): https://www.awwwards.com/inspiration/draggable-horizontal-gallery-kirkstall-brewery-the-bridge
- Linear and random image gallery view: https://www.awwwards.com/inspiration/horizontal-gallery-1
- Zoom out gallery scroll: https://www.awwwards.com/inspiration/zoom-out-gallery-scroll
- Infinite Scrolling Gallery (Daydream): https://www.awwwards.com/inspiration/infinite-scrolling-gallery-daydream
- Mixing Horizontal and Vertical Scroll: https://www.awwwards.com/inspiration/mixing-horizontal-and-vertical-scroll

### B9. Card- and photo-stack leads (existence VERIFIED as Awwwards listings; behaviour NOT FOUND)
- Stacked images slider (JR Atelier; stack, slider, scroll): https://www.awwwards.com/inspiration/stacked-images-slider-jr-atelier
- Teaser Card Stack (Edgar Ambient Media; tags include photography; the summary notes **mobile support**, REPORTED): https://www.awwwards.com/inspiration/teaser-card-stack-edgar-ambient-media
- Card Stacking (Swag): https://www.awwwards.com/inspiration/card-stacking-swag-2
- Stacking cards (Faktory, sticky): https://www.awwwards.com/inspiration/stacking-cards-faktory
- Stack card scroll (Bloom): https://www.awwwards.com/inspiration/stack-card-scroll-bloom-2
- Stacking cards on scroll (Netgíró): https://www.awwwards.com/inspiration/stacking-cards-on-scroll-netgiro

### B10. Polaroid I-2 microsite (Build in Amsterdam), plus earlier Polaroid listings
- **URLs**
  - https://www.awwwards.com/sites/polaroid-i-2
  - https://i2-camera.polaroid.com/
  - https://www.awwwards.com/inspiration/camera-setting-explore-tool-polaroid-i-2
  - https://www.awwwards.com/sites/polaroid (SOTD, 8 Nov 2011: historic timeline and user photo galleries; REPORTED)
  - https://www.awwwards.com/sites/polaroid-com (Honorable Mention; existence only)
- **Recognition:** Awwwards **SOTD 21 Oct 2023**. Scores: overall **7.48**; design 7.44, usability 7.41, creativity 7.43, content 7.95. **REPORTED.**
- **What it does:** "an immersive experience … where past meets present", with a camera-settings explore tool. **REPORTED.**
- **How it presents instant photos (frames, rotation, captions): NOT FOUND.**

### B11. Nielsen Norman Group — "Carousels on Mobile Devices" (usability evidence, not a showcase)
- **URL:** https://www.nngroup.com/articles/mobile-carousels/
- **Recognition:** NN/g is the leading UX research firm. This is a primary source.
- **Findings. VERIFIED** (nngroup.com, via summary.)
  - "**Half images and incomplete words** signaled users that there was more content to the right or left."
  - "Most people stop after viewing **3–4** different pages in the carousel." Users "should be able to reach the last item in the carousel in **3–4 steps** (i.e., taps or swipes)."
  - Carousels "should **support swipe**". Include "a **visible cue** when people can swipe."

---

## C. Polaroid and instant-photo styling: physical references and products

### C1. Polaroid 600 / i-Type film (physical reference)
- **URLs**
  - https://www.bhphotovideo.com/c/product/1555708-REG/polaroid_6002_600_color_film.html
  - https://www.walmart.com/ip/Polaroid-Originals-Color-Film-for-600/964158909
  - https://www.analog.cafe/r/instant-film-dimensions-4iuj
  - https://www.glazerscamera.com/products/polaroid-color-type-600
  - https://skylum.com/how-to/how-to-make-a-picture-look-like-a-polaroid
- **Frame 88 × 107 mm (3.5 × 4.2 in); image area 79 × 79 mm (3.1 × 3.1 in).** **VERIFIED** (B&H + Walmart + analog.cafe + Glazer's agree.) The brief's figure is confirmed.
- **DERIVED values**
  - Frame aspect ratio 88/107 = **0.822**.
  - Image width = 79/88 = **89.8 %** of frame width.
  - Side borders = (88 − 79)/2 = **4.5 mm** each, which is **5.11 %** of frame width.
  - Image height = 79/107 = **73.8 %** of frame height.
  - Top + bottom borders together = 28 mm = **26.2 %** of frame height.
- **How the 28 mm splits between top and bottom: NOT FOUND.**
  - REPORTED (Skylum how-to): digital polaroids use "thicker bottom borders … with equal side and top borders".
  - *If* top = side = 4.5 mm, then bottom = **23.5 mm**, which is 4.2 % top and 22.0 % bottom of frame height. This is DERIVED from a REPORTED assumption, so verify before relying on it.
- **Corner radius of the physical print: NOT FOUND.**
- **Fit to our photos (DERIVED):** the image window is square, so a 4:3 photo (480×360, 320×240) loses **25 %** of its area when centre-cropped to a square.

### C2. Fujifilm Instax Mini and Instax Square (physical reference)
- **URLs**
  - https://en.wikipedia.org/wiki/Instax
  - https://www.instaxus.com/film/mini-white-film/
  - https://www.instaxus.com/faqs/what-instax-film-formats-do-you-offer/
  - https://www.fujifilm.com/us/en/consumer/instax/cameras/squaresq40/specifications
  - https://www.walmart.com/ip/Fujifilm-Instax-Mini-Instant-Film-50-Sheets/127716738
- **Instax Mini: film 54 × 86 mm, image 46 × 62 mm.** **VERIFIED** (Wikipedia + instax/Fujifilm + Walmart listing "86x54 mm".)
- **Instax Square: film 72 × 86 mm, image 62 × 62 mm.** **VERIFIED** (instax site + Wikipedia, via summary.)
- **DERIVED values (Mini)**
  - Frame ratio 54/86 = **0.628**.
  - Image width = 46/54 = **85.2 %** of frame width.
  - Side borders = **4 mm** each, which is **7.41 %** of frame width.
  - Image height = 62/86 = **72.1 %** of frame height.
  - Top + bottom together = 24 mm = **27.9 %** of frame height. The split is **NOT FOUND**.
- **Fit to our photos (DERIVED):** the Mini image ratio is 46/62 = **0.742**. Our portrait photo (240×320) is **0.750**, a difference of 1 %. Turned sideways (62/46 = 1.348), the window matches our 4:3 landscape photos (1.333) within 1 %. **The Instax Mini window holds all 5 of our photos almost uncropped. The Polaroid 600 square window does not.**
  - Whether the real Mini is commonly shot and shown in landscape (thick border at the side) is **NOT FOUND**.

### C3. Instagram — "Frames" sticker (polaroid-style print in Stories, May 2024)
- **URLs**
  - https://about.fb.com/news/2024/05/new-stickers-in-instagram-stories/
  - https://about.instagram.com/blog/announcements/new-stickers-for-stories
  - https://techcrunch.com/2024/05/03/instagram-now-lets-you-post-a-secret-story-that-viewers-can-uncover-with-a-dm/
  - https://www.socialmediatoday.com/news/instagram-interactive-polaroid-frame-coachella-2024/713279/
  - https://www.androidcentral.com/apps-software/instagram-le-sserafim-stories-feature-debut
- **Recognition:** Meta first-party. It launched with LE SSERAFIM, timed to Coachella 2024. **VERIFIED.**
- **What it does, step by step. VERIFIED** (about.fb.com + about.instagram.com + TechCrunch + SocialMediaToday agree.)
  1. You pick a photo from the camera roll, and it becomes a **"polaroid-like" print**.
  2. The **date and timestamp of when the photo was originally taken are imprinted automatically**. An **optional caption** can be added.
  3. Viewers see the print **"behind the fog"** and must **"Shake to reveal"**, which **"develops"** it the way a real Polaroid develops.
  4. A **"Shake to reveal" button** is an alternative for viewers who do not want to shake the phone. **REPORTED.**
- **Caption typeface (handwritten vs other), develop-animation duration, and frame proportions: NOT FOUND.**
- **Mobile behaviour:** phone-only, and uses the motion sensor, with a tap fallback.

### C4. Codrops — "Scattered Polaroids Gallery" (28 Jan 2014)
- **URLs**
  - https://tympanus.net/codrops/2014/01/28/scattered-polaroids-gallery/
  - https://tympanus.net/Development/ScatteredPolaroidsGallery/
- **Recognition:** Codrops (tympanus.net) is a long-running, highly regarded web-design tutorial publication. **VERIFIED** (primary page via summary.)
- **What it does, step by step**
  1. A "**flat-style** take on a Polaroid gallery": Polaroids **with a title**, "**randomly rotated** and spread in a container".
  2. Navigating moves "the **current one … to the center**", and "the resting Polaroids … to the sides".
  3. **Navigation dots.** Clicking another dot "**reshuffle[s]** the Polaroids".
  4. Optional **backside**, viewed "by clicking the current dot … again" (a flip).
- **Rotation range, sizes and timings: NOT FOUND.**
- **Mobile behaviour: NOT FOUND.**

### C5. photostack.js and related jQuery polaroid plugins (low authority: plugin listings)
- **URLs**
  - https://www.jqueryscript.net/gallery/Simple-Photo-Stack-Rotator-Plugin-with-jQuery-Photostack-js.html
  - https://www.jqueryscript.net/gallery/Stacked-Scattered-Polaroid-Gallery-with-jQuery-CSS3.html
  - https://marcofolio.net/polaroid-photo-viewer/
- **Options:** `rotateDeg` ("random between 0 and X"), `rotate` (boolean), `randomTop` / `randomLeft` (random px offsets when photos swap). Some variants use `degFrom` / `degTo`. **REPORTED.**
- **Interaction:** click the top photo to send it to the back of the stack. **REPORTED.**
- **Default values: NOT FOUND.** These are not "excellent sites". Cite only as evidence that the *random rotation range* is a standard parameter.

---

## D. Personal birthday sites and pens with photo galleries (genre frequency only; none opened)

### D1. GitHub "birthday-website" genre (search-result titles only; repos not opened, per scope)
- **URLs**
  - https://github.com/topics/birthday-website
  - https://github.com/rehalkawan-jpg/HappyBirthdayGF (one of at least 8 near-identical forks: tanishq0721, karimessa16, Soumay21, NoctusQX7, nikitayadav19, 0xblaize, ya7493158-hub, admiralkaran)
- **The topic lists 48 public repos. REPORTED.** Named examples: nikitayadav19/HappyBirthdayGF, Harmann60/Happy-Birthday, hayato-shino05/**Omoide**.
- **Common features:** "countdown timers, animated wishes, **photo galleries, timelines**". **REPORTED** (summary of repo descriptions.)
- **Omoide:** "birthday memories website featuring **interactive polaroids**, music, animations, photo galleries". **REPORTED.**
- **Layouts (grid, carousel, wall, slideshow): NOT FOUND** for any specific repo. They were not opened.
- **Authority:** low. These are hobby templates, not award work. They show only that **polaroids and galleries are the genre norm**.

### D2. CodePen (titles and descriptions only)
- Polaroid pens
  - **"Polaroid Photo Gallery"**: "meant to evoke the image of **Polaroids scattered across a table**". https://codepen.io/artdehoyos/pen/xZENNr
  - **"Polaroid Memories – CSS only"**: "polaroid memories using css custom properties, **filters and transitions**". https://codepen.io/mdnrkn/pen/mdGzKYo
  - "Polaroid Image Gallery": https://codepen.io/amalshehu/pen/ExxzZbz
- Birthday cards (no gallery noted)
  - https://codepen.io/siddhant-k-code/pen/JjjVqjL (3D)
  - https://codepen.io/shupy/full/WrZzVJ
  - https://codepen.io/noobplus/pen/MWYGzeY
  - https://codepen.io/eyl327/pen/yLaOjqV
  - https://codepen.io/teamturret/pen/BKWEaQ
  - https://codepen.io/madOne/pen/pdyRqQ
- CodePen's own roundup, "Cool Birthday Pens" (2016): https://blog.codepen.io/2016/09/09/cool-birthday-pens/
- **All REPORTED** (titles and descriptions). **Rotation, sizes and mobile behaviour: NOT FOUND.**

---

## Cross-reference patterns

Counts cover the references in this file plus *(prior)* items from earlier files. The confidence floor of each supporting reference is noted.

| # | Pattern | Count | Who |
|---|---|---|---|
| P1 | **The feature is named "Memories"** | **5** | Apple (V), Google (V), Facebook (V), Snapchat (R), Instagram Archive (R) |
| P2 | **One photo in focus at a time** (full-screen story or centred card) | **8** | Google Photos (V), Apple iOS 15 player (V), Snapchat Flashback Story (R), Instagram Stories (R), Codrops Scattered Polaroids "current to center" (V), M3 Hero carousel (V), nk.studio *(prior)*, Spotify Wrapped stories *(prior)* |
| P3 | **Horizontal scroll or swipe through photos** | **12** | Google Photos (V), M3 carousel (V), Impermanence (V), StudioChevojon (R), Storio (R), OWL (R), Lasse Pedersen (R), Maggie Rose (R), Perspectives (R), nk.studio *(prior)*, Ten Years Away *(prior)*, Spotify carousels *(prior)* |
| P4 | **Tap right/left = next/previous; touch-and-hold = pause** | **3** | Google Photos Help (V), Apple iOS 15 pause/replay/skip (V), Instagram/Snapchat stories (R, implied by the Stories format) |
| P5 | **Auto-advance of about 5 s per photo** | **2** | Google Photos Memories 5 s (R), Instagram Stories photo 5 s (R). Google slideshow is 4 s (R). Apple publishes total length only: ~20/40/60 s (V). |
| P6 | **Music with the photos** | **4** | Apple Memories + Memory mixes (V), Facebook friendversary/recap videos (R), Impermanence sound design and composer (R), Omoide (R) |
| P7 | **Title + subtitle shown with a key photo** (no separate title slide) | **2** | Apple Memories (V), Google scrapbook titles (V) |
| P8 | **Relative-time label** ("On This Day", "1 year ago", "One Year Ago, Today") | **4** | Facebook (V name), Instagram (V name), Snapchat (R copy), Google widget (R copy) |
| P9 | **Next item partly visible as the "more →" cue on mobile** | **3** | NN/g (V), M3 small item 40–56 dp (V), Google Photos 2024 carousel (R) |
| P10 | **Scale or size change on focus** | **4** | M3 keyline resizing (V), Google 2024 contraction/expansion (R), Lasse Pedersen "resize, scale" (R), OWL "zoom" (R) |
| P11 | **Instant-print / polaroid frame** | **6** + genre | Instagram Frames (V), Codrops Scattered Polaroids (V), Luma Polaroid *(prior)*, CodePen ×3 (R), GitHub Omoide (R) |
| P12 | **Random rotation / scatter of prints** | **3** | Codrops (V, angle NOT FOUND), photostack.js (R, angle NOT FOUND), CodePen "scattered across a table" (R). **No source gives a number.** |
| P13 | **Auto date stamp on the print** | **1** | Instagram Frames (V) |
| P14 | **"Develop" / reveal of the photo** | **1** | Instagram Frames "Shake to reveal" from fog (V) |
| P15 | **Caption type** | **mono 1 / handwritten 0** | Getty grey mono *(prior)*. **No handwritten caption was found in any excellent reference this session.** |
| P16 | **Paperclip / tape on the print** | **paperclip 1 / tape 0** | Luma paperclip *(prior)*. Tape: NOT FOUND. |
| P17 | **Page indicator** | **3** | Instagram one segment per item (R), Apple HIG page control "row of indicator images, each … a page" (V), nk.studio counter *(prior)* |

---

## Recommended spec, every value cited

These are only values a source supports. Anything left NOT FOUND stays open, and the line says so. Here, "photo" means one of Mustafa's 5 images.

### R1. Section framing and copy
| Decision | Value | Source (label) |
|---|---|---|
| Section name | **"Memories"** | P1: Apple, Google, Facebook, Snapchat, Instagram all use it (5×; V for 3) |
| Title treatment | **Title + subtitle laid over the first ("key") photo**, not a separate title slide | Apple Memories "title and subtitle … the photo that appears with the memory title … key photo" (A1, V) |
| Per-photo stamp | **The date the photo was taken, printed on the frame, plus an optional short caption** | Instagram Frames "date and timestamp … automatically imprint", "add a caption" (C3, V) |
| Relative-time wording ("N years ago") | Only if real capture dates are known. The pattern exists, but exact wording is REPORTED only. | Snapchat "One Year Ago, Today" (A6, R); Google "1 year ago" widget (A3, R) |
| Caption typeface | **Grey monospace** is the only cited style. Handwritten is **NOT FOUND**, so do not choose it on taste. | Getty *(prior)*; P15 |

### R2. Layout on phones
| Decision | Value | Source (label) |
|---|---|---|
| Pattern | **Horizontal track, one photo in focus at a time, swipe to move** | P2 (8 refs) + P3 (12 refs); NN/g "support swipe" (B11, V) |
| Number of items in the track | **Exactly the 5 photos. No extra title or end cards in the swipe sequence.** Reaching the last item takes 4 swipes (DERIVED), which is NN/g's upper limit of 3–4 steps. | NN/g (B11, V); title overlay per R1 keeps the count at 5 |
| "There's more" cue | **The next photo visibly peeks in at the edge** | NN/g "half images … signaled … more content" (B11, V); M3 small item (A4, V) |
| Track geometry (M3 Hero/Multi-browse) | **16 px outer padding; 8 px gap between items; peeking item 40–56 px wide** | Material 3 Carousel spec (A4, V) |
| Corner radius | **28 px** if the photo is shown as a plain card (M3). For a print frame, the physical corner radius is **NOT FOUND**, so leave it open. | M3 (A4, V); C1 |
| Focus emphasis | Inactive items **shrink at the edges** (keyline resize), rather than fade | M3 keylines (A4, V); Google Photos 2024 "contraction/expansion" (A3, R). **Exact scale % NOT FOUND.** |
| Desktop vs mobile difference | **NOT FOUND** for every award reference. Impermanence (Mobile Site of the Week) is the one to inspect first. | B1 |

### R3. Print frame (if the instant-print look is used)
| Decision | Value | Source (label) |
|---|---|---|
| Frame format | **Instax Mini proportions: frame 54 × 86 mm (aspect-ratio 54/86), image 46 × 62 mm.** The 3:4 window fits the 240×320 photo within 1 %, and turned sideways fits the 4:3 photos within 1 %. Nothing is cropped. | C2 (V); fit is DERIVED |
| In percentages | Image **85.2 %** of frame width; side borders **7.41 %** each; image **72.1 %** of frame height; top + bottom together **27.9 %** (split NOT FOUND) | C2 arithmetic (DERIVED from V) |
| Alternative | **Polaroid 600: frame 88 × 107 mm, image 79 × 79 mm** (image 89.8 % of width; sides 4.5 mm = 5.11 %). This crops the 4:3 photos by 25 %. | C1 (V); DERIVED |
| Thicker bottom strip | Yes. "Thicker bottom borders … equal side and top borders". If top = sides on a Polaroid 600, the bottom is 23.5 mm (22.0 % of height). | C1 (R; the bottom figure is DERIVED from R) |
| Rotation of prints | **Random rotation is cited, but no angle is.** Do not choose a number until one is sourced. | P12: Codrops (V, no angle), photostack.js (R, no default) |
| Paperclip | A paperclip on the print is cited once | Luma *(prior)* |
| Tape | **NOT FOUND**: do not add | P16 |
| Reveal on first view | Optional: **"develop" from a fog, triggered by shake, with a "Shake to reveal" tap button as the fallback** | Instagram Frames (C3, V; button R). **Develop duration NOT FOUND.** |
| Layout of a stack | If shown as a stack: **current print moves to the centre, the rest move to the sides; dots navigate; clicking the current dot flips to a backside** | Codrops Scattered Polaroids (C4, V) |

### R4. Playback, if the memories auto-play
| Decision | Value | Source (label) |
|---|---|---|
| Time per photo | **5 s** | Google Photos Memories (A3, R) + Instagram Stories (A7, R): 2 sources, both REPORTED |
| Total length | **25 s** for 5 photos (DERIVED). This sits between Apple's Short (≈ 20 s) and Medium (≈ 40 s). | Apple (A1, V) |
| Controls | **Tap the right/left half for next/previous; touch-and-hold to pause** | Google Photos Help (A3, V); Apple iOS 15 "pause, replay the last photo, skip" (A1, V) |
| Progress indicator | **One segment per photo across the top** (stories). Alternatives: a dot per page, or a counter. | Instagram (A7, R); Apple HIG page control (P17, V); nk.studio counter *(prior)* |
| Music | Common (4 refs). The choice of track is out of scope for this file. | P6 |
| Ken Burns pan/zoom | Cited as a technique (Apple Mac slideshow theme "slow pan-and-zoom"), but **amount and duration are NOT FOUND**. Do not invent values. | A2 (R) |

### R5. Engineering note (not a design citation)
These photos are small: 240–480 px on the long edge. Under C2's 85.2 % image width, a frame about 300 CSS px wide shows the photo about 256 CSS px wide. On a 3× display that is about 767 device px, so a 320 px photo is upscaled about **2.4×**. This is arithmetic only. It is not a reason to pick a size, but whoever sets the frame width should know it.

### Still open (next verification pass)
1. Visual check of B1–B9 (especially **Impermanence, Mobile Site of the Week**): whether each is scrubbed, dragged or snapped, the scale %, the captions, and what changes on mobile.
2. The **rotation angle** of prints on any award site, or in Codrops `ScatteredPolaroidsGallery` source.
3. The Polaroid and Instax **top vs bottom border split**, and the print **corner radius**, from a manufacturer spec sheet.
4. The Instagram Frames **caption typeface** and **develop duration**.
5. M3 carousel **snap and fling** behaviour.
6. Apple Memories **title style names** and **Memory Look names**.
