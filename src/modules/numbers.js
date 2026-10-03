// Chapter I content.
// - The age as the hero graphic (9 of 14 brand/platform birthday references: Google 25
//   "G25gle", YouTube "20", Telegram's animated age digits…), sized like GitHub Unwrapped's
//   giant 2-digit counter (800 px on its 1080 canvas) and counted up like its 2021 total.
// - "N seconds young today" (Google's personalised birthday Doodle: "819,984,950 seconds young
//   today"), ticking live; each changed digit rolls in 0.6 s, entering from +50 % and leaving to
//   −50 % (Google Santa Tracker countdown).
// - "Your 2024 Wrapped is here" home card (Spotify) with GitHub Unwrapped's "Unwrap" button.
import { gsap } from './scroll.js';
import { $, celebratedAge, secondsAlive, fmt, reducedMotion, setLabel } from './util.js';

export function initNumbers({ onUnwrap }) {
  const ageEl = $('#ageCount');
  const age = celebratedAge();
  ageEl.setAttribute('aria-label', `${age} years old`);
  const counter = { v: 0 };
  gsap.to(counter, {
    v: age, duration: reducedMotion() ? 0.01 : 1.5, ease: 'expo.out',
    onUpdate: () => { ageEl.textContent = Math.round(counter.v); },
    scrollTrigger: { trigger: ageEl, start: 'top 80%' },
  });

  // ticker
  const ticker = $('#secondsTicker');
  let prev = '';
  const render = () => {
    const s = fmt(Math.max(0, secondsAlive()));
    if (s.length !== prev.length) {
      ticker.innerHTML = '';
      [...s].forEach((c) => {
        const d = document.createElement('span');
        d.className = c === ',' ? 'sep' : 'digit';
        d.innerHTML = c === ',' ? ',' : `<span>${c}</span>`;
        ticker.appendChild(d);
      });
    } else {
      [...s].forEach((c, i) => {
        if (c === prev[i] || c === ',') return;
        const slot = ticker.children[i];
        const old = slot.firstElementChild;
        const nu = document.createElement('span');
        nu.textContent = c;
        nu.style.position = 'absolute';
        nu.style.left = '0';
        nu.style.top = '0';
        slot.appendChild(nu);
        if (reducedMotion()) { old.remove(); nu.style.position = ''; return; }
        gsap.fromTo(nu, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'snell',
          onComplete: () => { nu.style.position = ''; } });
        gsap.to(old, { yPercent: -50, opacity: 0, duration: 0.6, ease: 'snell', onComplete: () => old.remove() });
      });
    }
    ticker.setAttribute('aria-label', `${s} seconds`);
    prev = s;
  };
  render();
  setInterval(render, 1000);

  const btn = $('#unwrapBtn');
  btn.addEventListener('click', async () => {
    const label = btn.textContent;
    setLabel(btn, 'Unwrapping...');
    btn.disabled = true;
    await onUnwrap();
    setLabel(btn, label);
    btn.disabled = false;
  });
}
