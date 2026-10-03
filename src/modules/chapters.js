// Chapter floods (Getty × Resn "Sculpting Harmony"): numbered, titled chapters; "the chapter
// title floods the screen in a chapter hue"; `titleStretch` blocks "set chapter titles edge to
// edge at full viewport height" in a compressed black grotesque. Fit-to-box like Active Theory's
// fit-text. Letters rise from a mask (GSAP SplitText `mask`), with dennissnellenberg.com's
// entrance values (1.5 s, stagger .07, expo.out). The cut-out portrait overlapping gigantic type
// is Spotify "Your 2018 Wrapped" (Active Theory): "gigantic text with overlapping … headshots
// in both solid and cutout form".
import { gsap, SplitText } from './scroll.js';
import { $$, reducedMotion } from './util.js';

// Fit a single-line span to its container's width, then stretch it vertically to the height.
function stretch(title) {
  const span = title.firstElementChild;
  const box = title.getBoundingClientRect();
  gsap.set(span, { scaleY: 1, scaleX: 1 });
  span.style.fontSize = '100px';
  const w = span.scrollWidth;
  const size = (100 * box.width) / w;
  span.style.fontSize = size + 'px';
  const h = span.getBoundingClientRect().height;
  const sy = Math.min(6, box.height / h);
  gsap.set(span, { scaleY: sy });
}

// Each line of the close's stretched title fills the width (finale).
function fitLines(title) {
  const spans = [...title.children];
  const width = title.getBoundingClientRect().width;
  spans.forEach((s) => {
    s.style.fontSize = '100px';
    s.style.fontSize = (100 * width) / s.scrollWidth + 'px';
  });
}

export function initChapters() {
  const titles = $$('[data-stretch]');
  const lineTitles = $$('[data-stretch-lines]');
  const layout = () => { titles.forEach(stretch); lineTitles.forEach(fitLines); };
  layout();
  document.fonts && document.fonts.ready.then(layout);
  // Re-fit only when the width changes: phone address bars resize the height while scrolling, and
  // ScrollTrigger already refreshes itself on real resizes (rulebook M16, M33: ignoreMobileResize)
  let lastW = innerWidth;
  addEventListener('resize', () => { if (innerWidth === lastW) return; lastW = innerWidth; layout(); });

  const still = reducedMotion();
  titles.forEach((title) => {
    const chapter = title.closest('.chapter');
    const split = SplitText.create(title.firstElementChild, { type: 'chars', mask: 'chars' });
    const cutout = chapter.querySelector('.chapter__cutout');
    const tl = gsap.timeline({ scrollTrigger: { trigger: chapter, start: 'top 60%' }, onComplete: () => gsap.set(split.masks, { overflow: 'visible' }) });
    tl.from(split.chars, { yPercent: 100, duration: still ? 0.01 : 1.5, stagger: 0.07, ease: 'expo.out' }, 0);
    if (cutout) tl.from(cutout, { yPercent: 30, autoAlpha: 0, duration: still ? 0.01 : 1.5, ease: 'expo.out' }, 0.2);
    tl.from(chapter.querySelectorAll('.chapter__labels span'), { y: 20, autoAlpha: 0, duration: 1.5, stagger: 0.07, ease: 'expo.out' }, 0.1);
  });

  lineTitles.forEach((title) => {
    const split = SplitText.create(title.children, { type: 'chars', mask: 'chars' });
    gsap.from(split.chars, {
      yPercent: 100, duration: still ? 0.01 : 1.5, stagger: 0.03, ease: 'expo.out',
      scrollTrigger: { trigger: title, start: 'top 75%' },
      onComplete: () => gsap.set(split.masks, { overflow: 'visible' }),
    });
  });

  // Body copy: SplitText line masks ("text rises from behind a mask"), Snellenberg timing.
  $$('[data-reveal]').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true,
      onSplit: (self) => gsap.from(self.lines, {
        yPercent: 100, duration: still ? 0.01 : 1.5, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onComplete: () => gsap.set(self.masks, { overflow: 'visible' }),
      }) });
    return split;
  });
}
