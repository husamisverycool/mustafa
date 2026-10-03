// "Your Birthday Wrapped": a full-screen story.
// Format: Spotify Wrapped. 9:16 cards, a segmented progress bar, tap right = next, tap left = back,
// hold = pause, music under the story, and at the end "share…, start it over from the beginning".
// Each slide transition: "the current text slides upward and fades out, while the next screen's
// content … slides up from the bottom with a pronounced springy bounce" (Spotify Wrapped 2025,
// recorded by 60fps.design); the springy ease is Bruno Simon folio-2025's back.out(1.7).
// Copy templates and scene lengths: GitHub Unwrapped 2021 (30 fps: title 130 f, statement 120 f,
// contributions 260 f, issues 220 f, weekday 120 f), its opening medallion that flips at frame 60,
// "… to be exact!", "[Weekday] was my most productive day." Superlative: Spotify's
// "You were in the top 0.005% of listeners globally." Seconds: Google's birthday Doodle.
// One flat hue per card, one at a time (Slosh Seltzer colourfield; Getty palette).
import config from '../config.js';
import { gsap } from './scroll.js';
import { $, celebratedAge, daysAlive, secondsAlive, weekdayBorn, fmt, reducedMotion } from './util.js';
import { wipe } from './wipe.js';
import * as audio from './audio.js';
import { downloadStoryImage } from './sharecard.js';
import { lenis } from './scroll.js';

const HUES = {
  ink: ['#000', '#fff'], red: ['#ff6359', '#000'], blue: ['#4596ff', '#000'],
  green: ['#16a147', '#000'], orange: ['#ffa441', '#000'],
};

function slides() {
  const age = celebratedAge();
  const prints = (config.memories || []).filter((m) => m.landscape).slice(0, 3);
  const name = config.name;
  return [
    {
      hue: 'ink', dur: 130 / 30,
      html: `<div class="medallion" data-medallion>
               <div class="medallion__face"><img src="mustafa.jpg" alt="" /><div class="medallion__band">${new Date().getFullYear()}</div></div>
               <div class="medallion__back">This is your #BirthdayWrapped</div>
             </div>`,
      enter(el, still) {
        const m = el.querySelector('[data-medallion]');
        gsap.fromTo(m, { scale: 0 }, { scale: 1, duration: still ? 0.01 : 1, ease: 'expo.out' });
        gsap.fromTo(m, { rotateX: 0 }, { rotateX: 180, duration: still ? 0.01 : 0.9, ease: 'snell', delay: still ? 0 : 2 });
      },
    },
    { hue: 'red', dur: 120 / 30, html: `<p class="slide__statement">Out of all the ${config.superlativeGroup} out there...</p>` },
    { hue: 'blue', dur: 120 / 30, html: `<p class="slide__giant">#1</p><p class="slide__text">That's you, ${name}.</p>` },
    // GitHub Unwrapped 2022: "Here are some sweet ones."; 5 s per photo (Google Photos Memories)
    ...(prints.length ? [{
      hue: 'red', dur: 5,
      html: `<p class="slide__statement">Here are some sweet ones.</p>${prints.map((m) => `
             <div class="print print--landscape"><figure class="print__paper"><div class="print__window"><img src="${m.src}" alt="${m.alt || ''}" /></div></figure></div>`).join('')}`,
    }] : []),
    {
      hue: 'green', dur: 260 / 30,
      html: `<p class="slide__statement">You've lived tons of days!</p>
             <p class="slide__count" data-count="${daysAlive()}">0</p>
             <p class="slide__aside">to be exact!</p>`,
      enter(el, still) {
        const n = el.querySelector('[data-count]');
        const o = { v: 0 };
        gsap.to(o, { v: +n.dataset.count, duration: still ? 0.01 : 2.5, delay: 0.3, ease: 'expo.out',
          onUpdate: () => { n.textContent = fmt(Math.round(o.v)); } });
      },
    },
    {
      hue: 'orange', dur: 220 / 30,
      html: `<p class="slide__text">You are</p>
             <p class="slide__count" data-seconds>${fmt(secondsAlive())}</p>
             <p class="slide__text">seconds young today.</p>`,
      enter(el) {
        const s = el.querySelector('[data-seconds]');
        const id = setInterval(() => { s.textContent = fmt(secondsAlive()); }, 1000);
        return () => clearInterval(id);
      },
    },
    { hue: 'red', dur: 120 / 30, html: `<p class="slide__statement">${weekdayBorn()} was the day it all started.</p><p class="slide__label">The day you were born</p>` },
    { hue: 'blue', dur: 120 / 30, html: `<p class="slide__statement">You were in the top 0.005% of ${config.superlativeGroup} globally.</p>` },
    {
      hue: 'orange', dur: 0, end: true,
      html: `<p class="slide__label">#BirthdayWrapped</p>
             <p class="slide__statement">Happy Birthday ${name}</p>
             <p class="slide__text">${age} years. Today is for you.</p>
             <div class="slide__buttons">
               <button class="pill" type="button" data-act="share">Share This Story</button>
               <button class="pill pill--light" type="button" data-act="restart">Start over</button>
               <button class="textlink mono" type="button" data-act="download">[ Download story (image) ]</button>
             </div>`,
    },
  ];
}

export function initStory() {
  const story = $('#story');
  const wrap = $('#storySlides');
  const bar = $('#storyProgress');
  const list = slides();
  const still = reducedMotion();
  let index = 0, timer = null, cleanup = null, open = false, lastFocus = null;

  list.forEach((s) => {
    const el = document.createElement('section');
    el.className = 'slide';
    const [bg, fg] = HUES[s.hue];
    el.style.setProperty('--bg', bg);
    el.style.setProperty('--fg', fg);
    el.innerHTML = s.html;
    s.el = el;
    wrap.appendChild(el);
    const seg = document.createElement('div');
    seg.className = 'story__seg';
    seg.innerHTML = '<i></i>';
    s.seg = seg.firstElementChild;
    bar.appendChild(seg);
  });

  function show(i, dir = 1) {
    const prev = list[index];
    if (cleanup) { cleanup(); cleanup = null; }
    if (timer) timer.kill();
    if (prev && prev.el.classList.contains('is-active') && i !== index) {
      const out = prev.el;
      gsap.to(out.children, { y: -60 * dir, autoAlpha: 0, duration: still ? 0.01 : 0.3, ease: 'snell',
        onComplete: () => { out.classList.remove('is-active'); gsap.set(out.children, { clearProps: 'all' }); } });
    }
    index = i;
    const s = list[i];
    story.classList.toggle('is-dark', s.hue === 'ink');
    story.classList.toggle('is-end', !!s.end);
    list.forEach((o, k) => gsap.set(o.seg, { scaleX: k < i ? 1 : 0 }));
    s.el.classList.add('is-active');
    gsap.fromTo(s.el.children, { y: '100%', autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: still ? 0.01 : 0.7, ease: 'back.out(1.7)', stagger: 0.07, delay: still ? 0 : 0.15,
    });
    if (s.enter) cleanup = s.enter(s.el, still) || null;
    if (s.dur) {
      timer = gsap.fromTo(s.seg, { scaleX: 0 }, { scaleX: 1, duration: s.dur, ease: 'none', onComplete: () => next(1) });
    } else gsap.set(s.seg, { scaleX: 1 });
  }

  function next(dir) {
    const i = index + dir;
    if (i < 0) { show(0, 1); return; }
    if (i >= list.length) return;
    show(i, dir);
  }

  // tap zones: tap = navigate, hold = pause (Spotify)
  let downAt = 0;
  story.querySelectorAll('.story__tap').forEach((zone) => {
    zone.addEventListener('pointerdown', () => { downAt = performance.now(); if (timer) timer.pause(); });
    zone.addEventListener('pointerup', () => {
      const held = performance.now() - downAt;
      if (held < 200) next(+zone.dataset.dir); // react-insta-stories: hold ≥ 200 ms = pause
      else if (timer) timer.resume();
    });
    zone.addEventListener('pointerleave', () => { if (timer && timer.paused()) timer.resume(); });
  });

  wrap.addEventListener('click', async (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'restart') show(0, -1);
    if (act === 'download') downloadStoryImage();
    if (act === 'share') {
      const data = { title: `Happy Birthday ${config.name}`, text: 'This is your #BirthdayWrapped', url: location.href };
      if (navigator.share) navigator.share(data).catch(() => {});
      else {
        await navigator.clipboard.writeText(location.href).catch(() => {});
        const t = b.textContent;
        b.textContent = 'Copied';
        setTimeout(() => { b.textContent = t; }, 1500); // GitHub Unwrapped "Copied" 1500 ms
      }
    }
  });

  const onKey = (e) => {
    if (!open) return;
    if (e.key === 'ArrowRight') next(1);
    if (e.key === 'ArrowLeft') next(-1);
    if (e.key === 'Escape') close();
    if (e.key === ' ') { e.preventDefault(); if (timer) (timer.paused() ? timer.resume() : timer.pause()); }
  };
  addEventListener('keydown', onKey);
  $('#storyClose').addEventListener('click', () => close());

  function openStory() {
    lastFocus = document.activeElement;
    return wipe(() => {
      story.hidden = false;
      document.body.classList.add('is-story');
      open = true;
      lenis && lenis.stop();
      document.body.style.overflow = 'hidden';
      if (audio.isOn()) audio.playMelody();
      list.forEach((s) => s.el.classList.remove('is-active'));
      index = 0;
      show(0);
      $('#storyClose').focus();
    });
  }

  function close() {
    if (!open) return;
    open = false;
    return wipe(() => {
      if (timer) timer.kill();
      if (cleanup) { cleanup(); cleanup = null; }
      story.hidden = true;
      document.body.classList.remove('is-story');
      document.body.style.overflow = '';
      lenis && lenis.start();
      lastFocus && lastFocus.focus && lastFocus.focus();
    });
  }

  return { open: openStory, close };
}
