// Hidden surprises (7 of 14 brand/platform birthday references hide click or keyword surprises).
// - Konami code → three confetti bursts (Bruno Simon folio-2025 KonamiCode.js)
// - typing "happy birthday" anywhere → Balloons (iMessage auto-trigger, CKHappyBirthdayEffect)
// - animated browser-tab title: an emoji travelling along the title (Bruno Simon folio-2025
//   Title.js: 🚗 driving past 🌳)
// - magnetic buttons, data-strength 100 / text 50 (dennissnellenberg.com), following with
//   Cuberto mouse-follower's 0.55 s expo.out; fine pointers only.
import { balloons } from 'balloons-js';
import config from '../config.js';
import { gsap } from './scroll.js';
import { $$, finePointer, reducedMotion } from './util.js';
import { triple } from './confetti.js';

export function initExtras() {
  // Konami
  const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let k = 0;
  let typed = '';
  addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    k = key === KONAMI[k] ? k + 1 : key === KONAMI[0] ? 1 : 0;
    if (k === KONAMI.length) { k = 0; triple(); }
    if (e.key.length === 1) {
      typed = (typed + e.key.toLowerCase()).slice(-24);
      if (typed.replace(/\s+/g, ' ').endsWith('happy birthday') && !reducedMotion()) {
        typed = '';
        balloons();
      }
    }
  });

  // animated tab title
  if (!reducedMotion()) {
    const track = 6;
    let pos = 0;
    setInterval(() => {
      const cells = Array.from({ length: track }, (_, i) => (i === pos ? '🎈' : '·'));
      document.title = `${config.name} ${cells.join('')}🎂`;
      pos = (pos + 1) % track;
    }, 400);
  }

  // magnetic buttons
  if (finePointer() && !reducedMotion()) {
    $$('[data-magnetic]').forEach((el) => {
      const strength = 100, strengthText = 50;
      const label = document.createElement('span');
      label.className = 'pill__label';
      while (el.firstChild) label.appendChild(el.firstChild);
      el.appendChild(label);
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(el, { x: x * strength, y: y * strength, duration: 0.55, ease: 'expo.out' });
        gsap.to(label, { x: x * strengthText, y: y * strengthText, duration: 0.55, ease: 'expo.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to([el, label], { x: 0, y: 0, duration: 0.55, ease: 'expo.out' });
      });
    });
  }
}
