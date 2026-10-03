// Preloader.
// - #ffa441 ground, wordmark left + "INITIALIZING..." right (Getty × Resn, Sculpting Harmony)
// - ~200 px ring of condensed type "PREPARING YOUR GOOD TIMES" ✦ around a % counter
//   (38 px, letter-spacing 2 px) (Slosh Seltzer, Awwwards SOTD 7.69)
// - greetings flashed one after another at a .15 s stagger, then the curtain exits upward
//   (.8 s Power4.easeInOut) while its rounded bottom edge collapses (1 s Power4.easeInOut);
//   cursor shows "wait" while loading (dennissnellenberg.com)
// - the greetings say "happy birthday" in Snellenberg's nine preloader languages, plus the two
//   localised iMessage "happy birthday" triggers (Spanish, Arabic)
import { gsap } from './scroll.js';
import { $, reducedMotion } from './util.js';

const WORDS = [
  'Happy Birthday',           // English  (Snellenberg: Hello)
  'Joyeux anniversaire',      // French   (Bonjour)
  'जन्मदिन मुबारक',             // Hindi    (स्वागत हे)
  'Buon compleanno',          // Italian  (Ciao)
  'Feliz aniversário',        // Portuguese (Olá)
  'お誕生日おめでとう',          // Japanese (おい)
  'Grattis på födelsedagen',  // Swedish  (Hallå)
  'Alles Gute zum Geburtstag',// German   (Guten tag)
  'Feliz cumpleaños',         // Spanish  (iMessage trigger)
  'عيد ميلاد سعيد',            // Arabic   (iMessage trigger)
  'Gefeliciteerd',            // Dutch    (Hallo)
];

const loadImg = (src) => new Promise((res) => {
  const i = new Image();
  i.onload = i.onerror = () => res();
  i.src = src;
});

export function runPreloader() {
  const loader = $('#loader');
  const countEl = $('#loaderCount');
  const ring = $('.loader__ringwrap');
  const status = $('.loader__status');
  const word = $('.loader__word');
  const curve = $('.loader__curve');
  document.body.style.cursor = 'wait';

  const tasks = [
    document.fonts ? document.fonts.ready : Promise.resolve(),
    loadImg('mustafa.jpg'),
    loadImg('mustafa-cutout.webp'),
  ];
  const progress = { shown: 0, target: 0 };
  let done = 0;
  tasks.forEach((t) => t.then(() => { done += 1; progress.target = (done / tasks.length) * 100; }));

  return new Promise((resolve) => {
    // Counter eases toward real progress (never jumps), easeOutExpo-style chase.
    const tick = () => {
      progress.shown += (progress.target - progress.shown) * 0.08 + (progress.shown < progress.target ? 0.4 : 0);
      if (progress.shown > progress.target) progress.shown = progress.target;
      countEl.textContent = Math.round(progress.shown);
      if (progress.shown >= 100) {
        gsap.ticker.remove(tick);
        finish();
      }
    };
    gsap.ticker.add(tick);

    function finish() {
      status.textContent = 'Ready';
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.cursor = '';
          loader.remove();
          resolve();
        },
      });
      tl.to(ring, { autoAlpha: 0, scale: 0.9, duration: 0.3, ease: 'snell' }, '+=0.2');
      if (!reducedMotion()) {
        WORDS.forEach((w, i) => {
          tl.call(() => { word.textContent = w; }, null, 0.5 + i * 0.15);
          tl.set(word, { opacity: 1 }, 0.5 + i * 0.15);
        });
      }
      tl.to(word, { opacity: 0, duration: 0.2 }, reducedMotion() ? 0.5 : 0.5 + WORDS.length * 0.15 + 0.15);
      tl.addLabel('exit');
      tl.to(loader, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, 'exit');
      tl.to(curve, { height: 0, duration: 1, ease: 'power4.inOut' }, 'exit');
      tl.call(() => document.body.classList.remove('is-loading'), null, 'exit');
    }
  });
}
