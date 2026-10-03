// Memories (research/08).
// - Name "Memories": Apple, Google, Facebook, Snapchat and Instagram all use it.
// - Instax Mini prints (frame 54 × 86 mm, image 46 × 62 mm) that sit "behind the fog" until you
//   "Shake to reveal", or tap the "Shake to reveal" button (Instagram Frames); grey mono
//   captions (Getty).
// - Phones: a Material 3 carousel (16 px padding, 8 px gaps, the next print peeking in, NN/g);
//   desktop: a scroll-driven horizontal track (Ten Years Away; 20 Years Inspired by People).
// - Tap a developed print, or "Play memory movie", for the player: full screen, 5 s per photo
//   (Google Photos Memories), tap the right/left half for next/previous and touch and hold to
//   pause (Google Photos Help), one progress segment per photo (Instagram), the title and
//   subtitle over the key photo (Apple Photos Memories), music under it (Apple memory movie).
import config from '../config.js';
import { gsap, ScrollTrigger } from './scroll.js';
import { $, reducedMotion, setLabel } from './util.js';
import { createStory } from './story.js';

// One flat hue per card, in the chapter order (Getty × Resn palette)
const HUES = ['red', 'blue', 'green', 'orange'];

const caption = (m, i, total) => m.caption || `${String(i + 1).padStart(2, '0')} / ${total}`;

export function initMemories() {
  const track = $('#memTrack');
  const viewport = $('#memViewport');
  const section = $('#memories');
  const cta = $('#memCta');
  const items = config.memories || [];
  if (!items.length) { section.hidden = true; return; }
  const total = String(items.length).padStart(2, '0');
  const still = reducedMotion();

  // ── the player ──
  const title = `<div class="print__title"><span class="mono">Memories</span><span class="print__title-main serif">A look back.</span></div>`;
  const player = createStory($('#memPlayer'), items.map((m, i) => ({
    hue: HUES[i % HUES.length], dur: 5,
    html: `<div class="print${m.landscape ? ' print--landscape' : ''} slide__print">
             <figure class="print__paper"><div class="print__window"><img src="${m.src}" alt="${m.alt || ''}" />${i === 0 ? title : ''}</div>
             <figcaption class="print__caption mono">${caption(m, i, total)}</figcaption></figure>
           </div>`,
  })), { closeAtEnd: true });

  // ── the prints ──
  const prints = items.map((m, i) => {
    const li = document.createElement('li');
    li.className = 'print' + (m.landscape ? ' print--landscape' : '');
    li.innerHTML = `<figure class="print__paper"><div class="print__window"><img src="${m.src}" alt="${m.alt || ''}" loading="lazy" decoding="async" /><span class="print__fog" aria-hidden="true"></span></div><figcaption class="print__caption mono"></figcaption></figure>`;
    li.querySelector('figcaption').textContent = caption(m, i, total);
    li.tabIndex = 0;
    li.dataset.alt = m.alt || '';
    li.setAttribute('role', 'button');
    track.appendChild(li);
    return li;
  });

  let developed = 0;
  const develop = (li, delay = 0) => {
    if (li.dataset.developed) return;
    li.dataset.developed = '1';
    developed += 1;
    li.setAttribute('aria-label', `Play memories from: ${li.dataset.alt}`);
    const fog = li.querySelector('.print__fog');
    const img = li.querySelector('img');
    if (still) fog.style.opacity = 0;
    else {
      gsap.to(fog, { opacity: 0, duration: 1.5, delay, ease: 'expo.out' });
      gsap.fromTo(img, { filter: 'blur(10px) saturate(0)' }, { filter: 'blur(0px) saturate(1)', duration: 1.5, delay, ease: 'expo.out' });
    }
    if (developed === prints.length) {
      setLabel(cta, 'Play memory movie');
      stopShake();
    }
  };
  // every print develops, staggered like the site's reveals (Snellenberg stagger .07)
  const developAll = () => prints.forEach((li, i) => develop(li, i * 0.07));

  prints.forEach((li, i) => {
    li.setAttribute('aria-label', `Reveal photo: ${li.dataset.alt}`);
    const act = () => (li.dataset.developed ? player.open(i) : develop(li));
    li.addEventListener('click', act);
    li.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
  });
  cta.addEventListener('click', () => (developed === prints.length ? player.open(0) : developAll()));

  // shake, while the section is on screen (same motion magnitude test as the cake)
  const onMotion = (e) => {
    const a = e.acceleration;
    let mag;
    if (a && a.x != null) mag = Math.hypot(a.x, a.y, a.z);
    else {
      const g = e.accelerationIncludingGravity || {};
      mag = Math.abs(Math.hypot(g.x || 0, g.y || 0, g.z || 0) - 9.81);
    }
    if (mag > 15) developAll();
  };
  let listening = false;
  const watch = 'DeviceMotionEvent' in window ? new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !listening) { addEventListener('devicemotion', onMotion); listening = true; }
    if (!e.isIntersecting && listening) { removeEventListener('devicemotion', onMotion); listening = false; }
  }) : null;
  if (watch) watch.observe(section);
  function stopShake() {
    if (!watch) return;
    watch.disconnect();
    removeEventListener('devicemotion', onMotion);
    listening = false;
  }

  // ── desktop: pinned horizontal track ──
  const mm = gsap.matchMedia();
  mm.add('(min-width: 801px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-pinned');
    const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const tween = gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + distance(), pin: '.memories__pin', scrub: true, invalidateOnRefresh: true },
    });
    return () => {
      section.classList.remove('is-pinned');
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'x' });
    };
  });
  document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
}
