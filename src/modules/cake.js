// Make a wish.
// Mechanic: "blow candles with their computer's microphone or by using the gyro of their
// smartphone" (Happy Birthday ELLE, Awwwards Honorable Mention + FWA of the Day).
// Mic detection uses hark's verified algorithm (npm, 143k weekly): fftSize 512,
// smoothingTimeConstant 0.1, poll every 50 ms, level = max of getFloatFrequencyData from bin 4,
// threshold −50 dB, fire when ≥ 2 of the last 3 polls exceed it.
// Fallbacks, flame, smoke, blow sound, wish chime, dual confetti and the copy
// ("✨ Click cake or press Space to blow candles out!" → "🎉 Yay! … made a wish! 🎂✨"):
// uday-birthday-wishes. Candles are the age digits (Telegram animates age digits;
// Google 25 put the number inside the wordmark), striped like uday's candles.
import config from '../config.js';
import { $, celebratedAge, isTouch } from './util.js';
import * as audio from './audio.js';
import { dual } from './confetti.js';

const STRIPES = ['var(--c-red)', 'var(--c-blue)', 'var(--c-green)', 'var(--c-orange)'];

export function initCake() {
  const cake = $('#cakeEl');
  const candles = $('#candles');
  const prompt = $('#cakePrompt');
  const micBtn = $('#micBtn');
  const motionBtn = $('#motionBtn');
  const relight = $('#relightBtn');
  const original = prompt.textContent;
  let out = false;
  let stopInput = null;

  function build() {
    candles.innerHTML = '';
    String(celebratedAge()).split('').forEach((d, i) => {
      const c = document.createElement('div');
      c.className = 'candle';
      c.innerHTML = `<div class="candle__top"><div class="flame"></div><div class="candle__wick"></div></div>
        <div class="candle__digit" style="--stripe:${STRIPES[i % STRIPES.length]}">${d}</div>`;
      candles.appendChild(c);
    });
  }
  build();

  function blowOut() {
    if (out) return;
    out = true;
    if (stopInput) { stopInput(); stopInput = null; }
    candles.querySelectorAll('.flame').forEach((f) => {
      f.classList.add('is-out');
      const s = document.createElement('div');
      s.className = 'smoke';
      f.parentElement.appendChild(s);
    });
    audio.blow();
    audio.chime(0.4);
    setTimeout(dual, 400);
    prompt.textContent = `🎉 Yay! ${config.name} made a wish! 🎂✨`;
    micBtn.hidden = true;
    motionBtn.hidden = true;
    relight.hidden = false;
  }

  relight.addEventListener('click', () => {
    out = false;
    build();
    prompt.textContent = original;
    micBtn.hidden = false;
    micBtn.disabled = false;
    micBtn.textContent = 'Use microphone';
    motionBtn.hidden = !canMotion;
    relight.hidden = true;
  });

  cake.addEventListener('click', blowOut);
  cake.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); blowOut(); }
  });
  addEventListener('keydown', (e) => {
    if (e.key !== ' ' || out) return;
    const r = cake.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0 && !document.querySelector('.story:not([hidden])')) {
      e.preventDefault();
      blowOut();
    }
  });

  // microphone (hark algorithm)
  micBtn.addEventListener('click', async () => {
    try {
      micBtn.disabled = true;
      micBtn.textContent = 'Listening...';
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      const src = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.1;
      src.connect(analyser);
      const fft = new Float32Array(analyser.frequencyBinCount);
      const history = [];
      prompt.textContent = '🎤 Make a wish… then blow!';
      const id = setInterval(() => {
        analyser.getFloatFrequencyData(fft);
        let max = -Infinity;
        for (let i = 4; i < fft.length; i++) if (fft[i] > max && fft[i] < 0) max = fft[i];
        history.push(max > -50);
        if (history.length > 3) history.shift();
        if (history.filter(Boolean).length >= 2) blowOut();
      }, 50);
      stopInput = () => { clearInterval(id); stream.getTracks().forEach((t) => t.stop()); ctx.close(); };
    } catch (err) {
      micBtn.disabled = false;
      micBtn.textContent = 'Use microphone';
      prompt.textContent = original;
    }
  });

  // motion (ELLE: the phone's sensors)
  const canMotion = isTouch() && 'DeviceMotionEvent' in window;
  motionBtn.hidden = !canMotion;
  motionBtn.addEventListener('click', async () => {
    try {
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        const p = await DeviceMotionEvent.requestPermission();
        if (p !== 'granted') return;
      }
      prompt.textContent = '📱 Make a wish… then shake your phone!';
      motionBtn.disabled = true;
      const onMotion = (e) => {
        const a = e.acceleration;
        let mag;
        if (a && a.x != null) mag = Math.hypot(a.x, a.y, a.z);
        else {
          const g = e.accelerationIncludingGravity || {};
          mag = Math.abs(Math.hypot(g.x || 0, g.y || 0, g.z || 0) - 9.81);
        }
        if (mag > 15) blowOut();
      };
      addEventListener('devicemotion', onMotion);
      stopInput = () => removeEventListener('devicemotion', onMotion);
    } catch (e) { /* sensor unavailable */ }
  });
}
