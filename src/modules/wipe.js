// Scene-change wipe: Google Santa Tracker's `santa-interlude`. Four full-screen layers slide up
// from translateY(100%), 0.75 s each, staggered by 0.5 s ÷ 3, eased cubic-bezier(0.215, 0.610,
// 0.355, 1.000); once covered, they exit upward with cubic-bezier(0.645, 0.000, 0.785, 0.390).
// Transition sounds fire in and out (Santa: menu_transition_game_in / _out).
import { gsap } from './scroll.js';
import { CustomEase } from 'gsap/CustomEase';
import { $$, reducedMotion } from './util.js';
import * as audio from './audio.js';

CustomEase.create('santaIn', '0.215,0.610,0.355,1.000');
CustomEase.create('santaOut', '0.645,0.000,0.785,0.390');

const layers = $$('#wipe i');
gsap.set(layers, { yPercent: 100, autoAlpha: 1 });

export function wipe(onCovered) {
  if (reducedMotion()) { onCovered(); return Promise.resolve(); }
  return new Promise((resolve) => {
    audio.whoosh(true);
    const tl = gsap.timeline({ onComplete: () => { gsap.set(layers, { yPercent: 100 }); resolve(); } });
    tl.fromTo(layers, { yPercent: 100 }, { yPercent: 0, duration: 0.75, stagger: 0.5 / 3, ease: 'santaIn' });
    tl.call(() => { onCovered(); audio.whoosh(false); });
    tl.to(layers.slice().reverse(), { yPercent: -100, duration: 0.75, stagger: 0.5 / 3, ease: 'santaOut' }, '+=0.1');
  });
}
