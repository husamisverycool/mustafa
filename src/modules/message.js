// Chapter III.
// 1. Chat fake-out (faahim/happy-birthday, the most-starred birthday site on GitHub, ~1.5k ★):
//    a chat box types "Happy birthday to you!! Yeee! Many many happy blah...", then
//    "That's what I was going to do." → "But then I stopped." → "I realised, I wanted to do
//    something special." → "Because," → "You are Special :)". Lines one at a time
//    (fajarghifar/happybirthday "ideas"). Driven by scroll scrub (Getty's ScrollTrigger
//    composable defaults `scrub: true`), pinned while it plays.
// 2. The letter is typed out (halo-maya: TypeIt) as you scroll, caret blinking at .7 s
//    (typed.js), in an essay column with one oversized drop cap in the black grotesque (Getty).
// 3. "happy birthday" sends with Balloons and degrades to "(Sent with Balloons)" (iMessage
//    `CKHappyBirthdayEffect`); balloons via balloons-js.
// 4. Group card wall when config.messages has entries (Kudoboard: "Add a message, photo, GIF,
//    or video; invite others to post; then deliver!"; Partiful Cards cosigners).
import { balloons } from 'balloons-js';
import config from '../config.js';
import { gsap, ScrollTrigger } from './scroll.js';
import { $, $$, reducedMotion, longDate } from './util.js';

const TYPED = 'Happy birthday to you!! Yeee! Many many happy blah...';

export function initMessage() {
  const still = reducedMotion();
  const text = $('#composerText');
  const send = $('#composerSend');
  const composer = $('#composer');
  const lines = $$('.chat__line');

  // ── chat (pinned + scrubbed) ──
  const typing = { n: 0 };
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: '#chat', start: 'top top', end: '+=450%', pin: '.chat__pin', scrub: true },
  });
  tl.to(typing, { n: TYPED.length, duration: 2, onUpdate: () => { text.textContent = TYPED.slice(0, Math.round(typing.n)); } });
  tl.call(() => send.classList.add('is-armed'), null, '>');
  tl.to({}, { duration: 0.4 });
  tl.to(composer, { autoAlpha: 0, y: -40, duration: 0.6, ease: 'snell' });
  lines.forEach((line, i) => {
    tl.fromTo(line, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'expo.out' });
    tl.to({}, { duration: 0.6 });
    if (i < lines.length - 1) tl.to(line, { autoAlpha: 0, y: -40, duration: 0.4, ease: 'snell' });
  });
  tl.eventCallback('onUpdate', () => { if (tl.progress() < 0.25) send.classList.remove('is-armed'); });

  // ── letter (typed by scroll) ──
  const body = $('#letterBody');
  const chars = [];
  config.letter.forEach((para, pi) => {
    const p = document.createElement('p');
    [...para].forEach((c, ci) => {
      const span = document.createElement('span');
      span.textContent = c;
      if (pi === 0 && ci === 0) span.className = 'dropcap ch';
      else span.className = 'ch';
      p.appendChild(span);
      chars.push(span);
    });
    body.appendChild(p);
  });
  body.setAttribute('aria-label', config.letter.join(' '));
  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.setAttribute('aria-hidden', 'true');
  const day = new Date();
  $('#letterSign').textContent = `— From ${config.sender}, ${longDate(day)}`;

  if (still) chars.forEach((c) => c.classList.add('on'));
  else {
    let shown = 0;
    ScrollTrigger.create({
      trigger: body, start: 'top 75%', end: 'bottom 60%', scrub: true,
      onUpdate: (self) => {
        const n = Math.round(self.progress * chars.length);
        if (n === shown) return;
        for (let i = Math.min(n, shown); i < Math.max(n, shown); i++) chars[i].classList.toggle('on', i < n);
        shown = n;
        const at = chars[Math.max(0, n - 1)];
        if (n < chars.length) at.after(caret); else caret.remove();
      },
    });
  }

  // ── sent with balloons ──
  const bubble = $('#bubble');
  const sentLabel = $('#sentLabel');
  gsap.set(bubble, { autoAlpha: 0, y: 60 });
  ScrollTrigger.create({
    trigger: '#sent', start: 'top 60%', once: true,
    onEnter: () => {
      gsap.to(bubble, { autoAlpha: 1, y: 0, duration: still ? 0.01 : 0.7, ease: 'back.out(1.7)' });
      if (!still) setTimeout(() => balloons(), 350);
      gsap.to(sentLabel, { opacity: 0.8, duration: 0.5, delay: 1.2 });
    },
  });

  // ── group card wall ──
  if (config.messages && config.messages.length) {
    const wall = $('#wall');
    const grid = $('#wallGrid');
    const hues = ['var(--c-red)', 'var(--c-blue)', 'var(--c-green)', 'var(--c-orange)'];
    config.messages.forEach((m, i) => {
      const card = document.createElement('article');
      card.className = 'wall__card';
      card.style.setProperty('--hue', hues[i % hues.length]);
      const p = document.createElement('p');
      p.textContent = m.text;
      const by = document.createElement('span');
      by.className = 'mono';
      by.textContent = `— ${m.from}`;
      card.append(p, by);
      grid.appendChild(card);
    });
    wall.hidden = false;
    gsap.from(grid.children, { y: 60, autoAlpha: 0, duration: 1.5, ease: 'expo.out', stagger: 0.07,
      scrollTrigger: { trigger: grid, start: 'top 85%' } });
  }
}
