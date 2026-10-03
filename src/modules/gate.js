// The gate: an envelope you open.
// Sequence (Greenvelope, the most literal envelope product, plus the "Paperless Post–style"
// homage): the envelope rises, addressed by name with stamp and postmark → it turns over in
// 3D to the seal → the flap opens to a lined interior → the card is drawn up out of it.
// "Packaged with an animated envelope and digital stamps" (Evite Premium).
// The card is an Apple Invites invitation: full-bleed photo, heavy white wide title,
// date line beneath. It then expands into the hero (Columbia Pictures 100's "seamless page
// transitions"; Spotify 2018 lined text up across scenes).
// Music starts as the envelope opens (Greenvelope); the open click is the user gesture
// that unlocks audio (halo-maya starts its song on the envelope tap).
import config from '../config.js';
import { gsap } from './scroll.js';
import { $, celebratedAge, isBirthdayToday, nextBirthday, longDate, reducedMotion } from './util.js';
import * as audio from './audio.js';

// GitHub Unwrapped Noise.tsx: sparse round dots on a 15 px grid where noise2D > 0.9,
// size ≤ 6 px, opacity 0.6–1.05, coloured from a palette. Used as the envelope liner
// (Paperless Post's patterned liner; "the detail that makes an envelope look chosen").
function dotNoise(size = 180, colors = ['#ff6359', '#4596ff', '#16a147', '#ffffff', '#000000']) {
  const c = document.createElement('canvas');
  const dpr = 2;
  c.width = c.height = size * dpr;
  const ctx = c.getContext('2d');
  ctx.scale(dpr, dpr);
  const g = 15;
  const n = Math.ceil(size / g);
  // tileable value noise
  const grid = Array.from({ length: n }, () => Array.from({ length: n }, () => Math.random()));
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const v = (grid[y][x] + grid[(y + 1) % n][x] * 0.5 + grid[y][(x + 1) % n] * 0.5) / 2;
    if (v < 0.9 * 0.85) continue;
    ctx.globalAlpha = Math.min(1, 0.6 + Math.random() * 0.45);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(x * g + g / 2, y * g + g / 2, 1.5 + Math.random() * 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  return c.toDataURL();
}

export function initGate({ onOpen, onRevealSite }) {
  const envelope = $('#envelope');
  const turn = $('.envelope__turn');
  const flap = $('.envelope__flap');
  const card = $('#card');
  const choices = $('.gate__choices');
  const gate = $('#gate');
  const age = celebratedAge();
  const today = isBirthdayToday();
  const day = today ? new Date() : nextBirthday();

  // copy
  document.querySelector('[data-age]').textContent = age;
  document.querySelector('[data-postmark-day]').textContent =
    day.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase();
  document.querySelector('[data-postmark-year]').textContent = day.getFullYear();
  document.querySelector('[data-envelope-line]').textContent = today ? 'Birthday today' : `Birthday ${longDate(day)}`;
  document.querySelector('[data-from]').textContent = `From ${config.sender}`;
  document.querySelector('[data-card-meta]').textContent =
    `${day.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · From ${config.sender}`;

  const liner = dotNoise();
  $('.envelope__liner').style.backgroundImage = `url(${liner})`;
  $('.envelope__flap-in').style.backgroundImage = `url(${liner})`;

  // stacking inside the back: liner 0 · card 2 · pocket 3 · flap 4 (flap drops to 1 once open)
  gsap.set($('.envelope__liner'), { zIndex: 0 });
  gsap.set(card, { zIndex: 2 });
  gsap.set($('.envelope__pocket'), { zIndex: 3 });
  gsap.set(flap, { zIndex: 4 });

  // entrance: the envelope rises; dennissnellenberg.com ".once-in" values (1.5 s expo.out, stagger .07)
  gsap.set(envelope, { y: '60vh', rotate: -4 });
  gsap.set(choices.children, { y: 40, autoAlpha: 0 });
  const enter = () => {
    gsap.to(envelope, { y: 0, rotate: 0, duration: 1.5, ease: 'expo.out' });
    gsap.to(choices.children, { y: 0, autoAlpha: 1, duration: 1.5, ease: 'expo.out', stagger: 0.07, delay: 0.15 });
  };

  let opening = false;
  const open = (withSound) => {
    if (opening) return;
    opening = true;
    onOpen(withSound);
    const quick = reducedMotion();
    gsap.to(choices, { autoAlpha: 0, duration: 0.3, ease: 'snell' });

    const tl = gsap.timeline({ defaults: { ease: 'snell' } });
    // turn over in 3D (dennissnellenberg.com "slow" token .9 s)
    tl.to(turn, { rotateY: 180, duration: quick ? 0.01 : 0.9 });
    tl.call(() => { envelope.classList.add('is-flat'); gsap.set(turn, { clearProps: 'transform' }); });
    // flap opens (.7 s "smooth"); halfway it drops behind the card
    tl.to(flap, { rotateX: 180, duration: quick ? 0.01 : 0.7 }, '+=0.15');
    tl.set(flap, { zIndex: 1 }, '-=0.35');
    tl.call(() => { if (audio.isOn()) audio.playMelody(); }, null, '<');
    // the card is drawn up out of the pocket
    tl.to(card, { yPercent: -58, duration: quick ? 0.01 : 0.9, ease: 'expo.out' }, '+=0.05');
    tl.to(envelope, { y: () => Math.min(innerHeight * 0.3, card.offsetHeight * 0.58), duration: quick ? 0.01 : 0.9, ease: 'expo.out' }, '<');
    tl.call(fly, null, '+=0.25');
  };

  function fly() {
    const r = card.getBoundingClientRect();
    const radius = getComputedStyle(card).borderTopLeftRadius;
    document.body.appendChild(card);
    card.classList.add('is-flying');
    gsap.set(card, {
      clearProps: 'transform', top: r.top, left: r.left, width: r.width, height: r.height,
      borderRadius: radius, zIndex: 600,
    });
    const tl = gsap.timeline({ defaults: { ease: 'snell' } });
    tl.to(envelope, { y: '70vh', autoAlpha: 0, duration: 0.7 }, 0);
    tl.to(card, { top: 0, left: 0, width: innerWidth, height: innerHeight, borderRadius: 0, duration: 0.9 }, 0.1);
    tl.to(card.querySelector('.card__text'), { autoAlpha: 0, y: 20, duration: 0.3 }, 0.6);
    tl.call(() => { gate.remove(); onRevealSite(); });
    tl.to(card, { autoAlpha: 0, duration: 0.5, ease: 'none' }, '+=0.05');
    tl.call(() => card.remove());
  }

  envelope.addEventListener('click', () => open(true));
  $('#openWithSound').addEventListener('click', () => open(true));
  $('#openWithoutSound').addEventListener('click', () => open(false));
  return { enter };
}
