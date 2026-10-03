// Sound engine. Every behaviour below is borrowed:
// - opt-in at entry ("enter with sound / enter without sound": Ten Years Away, Awwwards SOTD 2026)
// - master volume 0.5 (Bruno Simon folio-2019 Howler master volume)
// - mute persisted in localStorage('soundToggle') + html.is-audio-muted (Bruno Simon folio-2025)
// - "M" key toggles mute (Bruno Simon folio-2019)
// - auto-mute while the tab is hidden (Google Santa Tracker soundcontroller.js)
// - no audio on Save-Data / 2G / 3G (Ten Years Away, Codrops case study)
// - blow + chime synthesis values (uday-birthday-wishes audio.js)
// - SFX volume/rate randomised per play (Bruno Simon folio-2019 Sounds.js)
import config from '../config.js';

const STORAGE_KEY = 'soundToggle';
let ctx = null;
let master = null;
let musicGain = null;
let enabled = false; // user's choice
let hidden = false;
let musicEl = null;
const listeners = new Set();

const slowNetwork = () => {
  const c = navigator.connection;
  return !!c && (c.saveData || ['slow-2g', '2g', '3g'].includes(c.effectiveType));
};

export const audioAllowedByNetwork = () => !slowNetwork();

export function isOn() {
  return enabled && !hidden;
}

function applyGain() {
  if (!master) return;
  const target = isOn() ? 0.5 : 0;
  master.gain.setTargetAtTime(target, ctx.currentTime, 0.05);
  if (musicEl) musicEl.muted = !isOn();
  document.documentElement.classList.toggle('is-audio-muted', !isOn());
  listeners.forEach((fn) => fn(isOn()));
}

export function onChange(fn) {
  listeners.add(fn);
  fn(isOn());
}

export function init(withSound) {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      musicGain = ctx.createGain();
      musicGain.gain.value = 1;
      musicGain.connect(master);
    }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
  enabled = withSound && audioAllowedByNetwork();
  try { localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off'); } catch (e) { /* storage blocked */ }
  applyGain();

  document.addEventListener('visibilitychange', () => {
    hidden = document.hidden;
    applyGain();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'm' || e.key === 'M') {
      if (e.target.closest && e.target.closest('input, textarea')) return;
      toggle();
    }
  });
}

export function savedPreference() {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
}

export function toggle() {
  if (!ctx) init(true);
  else {
    if (ctx.state === 'suspended') ctx.resume();
    enabled = !enabled;
    try { localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off'); } catch (e) { /* noop */ }
    applyGain();
  }
}

const rand = (a, b) => a + Math.random() * (b - a);

function noiseBuffer(seconds) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

// uday-birthday-wishes: 0.8 s white noise → lowpass 600→100 Hz (exp ramp) → gain 0.3→0.01.
export function blow() {
  if (!ctx) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(0.8);
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(600, t);
  lp.frequency.exponentialRampToValueAtTime(100, t + 0.8);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.3, t);
  g.gain.exponentialRampToValueAtTime(0.01, t + 0.8);
  src.connect(lp).connect(g).connect(master);
  src.start(t);
  src.stop(t + 0.8);
}

function tone(freq, start, dur, gain, type = 'sine', dest = master) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(gain, start + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  o.connect(g).connect(dest);
  o.start(start);
  o.stop(start + dur + 0.02);
}

// uday-birthday-wishes: C5–E5–G5–C6, sine, 0.3 s each, gain 0.2, 80 ms apart.
export function chime(delay = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, t + i * 0.08, 0.3, 0.2));
}

// Balloon pop (react-floating-balloons pops at volume 0.5) with Bruno Simon's
// per-play randomisation of volume and rate.
export function pop() {
  if (!ctx) return;
  const t = ctx.currentTime;
  const rate = rand(0.9, 1.1);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(0.12);
  src.playbackRate.value = rate;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 900 * rate;
  const g = ctx.createGain();
  g.gain.setValueAtTime(rand(0.4, 0.6), t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  src.connect(hp).connect(g).connect(master);
  src.start(t);
}

// Scene-change "whoosh" for the colour wipe (Santa Tracker plays
// menu_transition_game_in/out on its interlude). Built with uday's
// filtered-noise technique so no audio files are needed.
export function whoosh(up = true) {
  if (!ctx) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(0.75);
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 0.8;
  bp.frequency.setValueAtTime(up ? 300 : 2400, t);
  bp.frequency.exponentialRampToValueAtTime(up ? 2400 : 300, t + 0.75);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(rand(0.12, 0.18), t + 0.25);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
  src.connect(bp).connect(g).connect(master);
  src.start(t);
}

// "Happy Birthday to You" (public domain) as a music box, voiced with the same
// sine-tone synthesis as uday's chime. Music on opening the envelope follows
// Greenvelope ("music plays when the envelope opens").
const MELODY = [
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
  ['G4', 0.75], ['G4', 0.25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 2],
  ['F5', 0.75], ['F5', 0.25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 3],
];
const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const freqOf = (n) => {
  const semis = NOTE[n[0]] + (Number(n[1]) - 4) * 12 - 9; // relative to A4
  return 440 * Math.pow(2, semis / 12);
};

let melodyPlaying = false;
export function playMelody() {
  if (config.music) {
    if (!musicEl) {
      musicEl = new Audio(config.music);
      musicEl.volume = 0.5;
    }
    musicEl.muted = !isOn();
    musicEl.currentTime = 0;
    musicEl.play().catch(() => {});
    return;
  }
  if (!ctx || melodyPlaying) return;
  melodyPlaying = true;
  const beat = 0.5;
  let t = ctx.currentTime + 0.1;
  MELODY.forEach(([n, beats]) => {
    const f = freqOf(n);
    const dur = Math.min(1.6, beats * beat * 1.6);
    tone(f, t, dur, 0.2, 'sine', musicGain);
    tone(f * 2, t, dur * 0.5, 0.04, 'sine', musicGain); // octave partial = music-box "tine"
    t += beats * beat;
  });
  setTimeout(() => { melodyPlaying = false; }, (t - ctx.currentTime) * 1000);
}
