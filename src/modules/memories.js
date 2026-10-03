// Memories.
// - Name "Memories": Apple Photos, Google Photos, Facebook, Snapchat, Instagram (dossier 08, P1).
// - Phones: a horizontal track with one print in focus and the next one peeking in, swiped
//   natively with snap (Google Photos' 2024 carousel; Material 3 Carousel: 16 px outer padding,
//   8 px gaps, 40–56 px peeking item; NN/g "Carousels on Mobile Devices": half-visible items signal
//   more, keep the last item within 3–4 swipes → exactly 5 items, no title or end card).
// - Desktop: the same track driven by vertical scroll, pinned (Ten Years Away "scroll-driven
//   horizontal comic"; 20 Years Inspired by People "lateral navigation … focus on one item at a time").
// - Prints use Instax Mini proportions (frame 54 × 86 mm, image 46 × 62 mm; sideways for 4:3
//   photos) and "develop" from fog as they come into view (Instagram "Frames": a polaroid-like
//   print revealed from fog). Caption in grey mono (Getty), counter "01 / 05" (nk.studio counter).
import config from '../config.js';
import { gsap, ScrollTrigger } from './scroll.js';
import { $, reducedMotion } from './util.js';

export function initMemories() {
  const track = $('#memTrack');
  const viewport = $('#memViewport');
  const section = $('#memories');
  const items = config.memories || [];
  if (!items.length) { section.hidden = true; return; }
  const total = String(items.length).padStart(2, '0');

  items.forEach((m, i) => {
    const li = document.createElement('li');
    li.className = 'print' + (m.landscape ? ' print--landscape' : '');
    li.innerHTML = `
      <figure class="print__paper">
        <div class="print__window">
          <img src="${m.src}" alt="${m.alt || ''}" loading="lazy" decoding="async" />
          <span class="print__fog" aria-hidden="true"></span>
        </div>
        <figcaption class="print__caption mono"></figcaption>
      </figure>`;
    li.querySelector('figcaption').textContent = m.caption || `${String(i + 1).padStart(2, '0')} / ${total}`;
    track.appendChild(li);
  });

  // develop from fog when a print is mostly in view (Instagram Frames "develops" the print)
  const still = reducedMotion();
  const develop = (li) => {
    if (li.dataset.developed) return;
    li.dataset.developed = '1';
    const fog = li.querySelector('.print__fog');
    const img = li.querySelector('img');
    if (still) { fog.style.opacity = 0; return; }
    gsap.to(fog, { opacity: 0, duration: 1.5, ease: 'expo.out' });
    gsap.fromTo(img, { filter: 'blur(10px) saturate(0)' }, { filter: 'blur(0px) saturate(1)', duration: 1.5, ease: 'expo.out' });
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.intersectionRatio > 0.6) develop(e.target); });
  }, { threshold: [0, 0.6, 1] });
  track.querySelectorAll('.print').forEach((li) => {
    io.observe(li);
    li.addEventListener('click', () => develop(li)); // tap fallback (Instagram's "Shake to reveal" button)
  });

  // desktop: pin the section and translate the track with vertical scroll
  const mm = gsap.matchMedia();
  mm.add('(min-width: 801px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-pinned');
    const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const tween = gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: {
        trigger: section, start: 'top top', end: () => '+=' + distance(),
        pin: '.memories__pin', scrub: true, invalidateOnRefresh: true,
      },
    });
    return () => { section.classList.remove('is-pinned'); tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); gsap.set(track, { clearProps: 'x' }); };
  });
  document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
}
