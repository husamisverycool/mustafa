// Hero (dennissnellenberg.com, Awwwards SOTD): full-height portrait with scroll parallax;
// the name set enormous across the bottom as an endless marquee — GSAP xPercent −100,
// duration 18, ease "none", repeat −1 — whose direction flips with scroll direction.
// Parallax maths: Studio Freight compono `y = windowWidth * speed * 0.1` with
// Snellenberg's speed magnitude 3. Reduced motion slows the marquee to 50 s (Studio Freight).
// Clicking the name or photo fires a confetti shower (Google's 25th birthday Doodle: click →
// confetti). Balloons rise once per load (Twitter birthday balloons; balloons-js).
import { balloons } from 'balloons-js';
import { gsap, ScrollTrigger } from './scroll.js';
import { $, $$, reducedMotion, isBirthdayToday, nextBirthday, celebratedAge, longDate } from './util.js';
import { realistic } from './confetti.js';
import * as audio from './audio.js';

export function initHero() {
  const hero = $('#hero');
  const items = $$('#heroMarquee .marquee__item');
  const label = $('[data-hanger-label]');
  const value = $('[data-hanger-value]');

  // Telegram profile row: "Date of birth" → "Birthday today", value "{emoji} {date} ({count} years old)".
  // Before the day, the Santa Tracker countdown units (Days / Hrs / Min / Sec).
  const updateHanger = () => {
    if (isBirthdayToday()) {
      label.textContent = 'Birthday today';
      value.textContent = `🎂 ${longDate(new Date())} (${celebratedAge()} years old)`;
    } else {
      const ms = nextBirthday() - new Date();
      const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
      label.textContent = 'Birthday in';
      value.textContent = `🎂 ${d} Days ${String(h).padStart(2, '0')} Hrs ${String(m).padStart(2, '0')} Min ${String(s).padStart(2, '0')} Sec`;
    }
  };
  updateHanger();
  setInterval(updateHanger, 1000);

  // marquee
  const loop = gsap.to(items, { xPercent: -100, duration: reducedMotion() ? 50 : 18, ease: 'none', repeat: -1 });
  ScrollTrigger.create({
    trigger: document.body, start: 0, end: 'max',
    onUpdate: (self) => gsap.to(loop, { timeScale: self.direction, duration: 0.3, overwrite: true }),
  });

  // parallax
  gsap.to('#heroPhoto', {
    y: () => innerWidth * 3 * 0.1, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
  });

  // click → confetti shower at the click point
  const shower = (e) => {
    realistic({ x: e.clientX / innerWidth, y: e.clientY / innerHeight });
    audio.pop();
  };
  $('#heroPhoto').addEventListener('click', shower);
  $('#heroName').addEventListener('click', shower);

  // hidden until the gate hands over
  gsap.set('.once-in', { y: '100vh' });
}

export function playHeroIntro() {
  // dennissnellenberg.com: `main .once-in` → y: 0vh, duration 1.5, stagger .07, Expo.easeOut
  gsap.to('.once-in', { y: 0, duration: reducedMotion() ? 0.01 : 1.5, stagger: 0.07, ease: 'expo.out' });
  if (!reducedMotion()) setTimeout(() => balloons(), 900);
}
