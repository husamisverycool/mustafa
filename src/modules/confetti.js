// Confetti via canvas-confetti (catdad, ~9.6M weekly npm downloads: the most-used
// confetti library). Presets are its own README / demo values; colours are the
// site palette (Getty "Sculpting Harmony" hues + white), see INSPIRATION.md.
import confetti from 'canvas-confetti';

export const PALETTE = ['#ffa441', '#ff6359', '#4596ff', '#16a147', '#ffffff'];

const fire = (opts) =>
  confetti({ colors: PALETTE, disableForReducedMotion: true, ...opts });

// "Realistic look" preset (canvas-confetti demo, values via react-canvas-confetti port).
export function realistic(origin = { y: 0.7 }) {
  const count = 200;
  const shot = (ratio, opts) => fire({ origin, particleCount: Math.floor(count * ratio), ...opts });
  shot(0.25, { spread: 26, startVelocity: 55 });
  shot(0.2, { spread: 60 });
  shot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  shot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  shot(0.1, { spread: 120, startVelocity: 45 });
}

// uday-birthday-wishes: two bursts {count 90, spread 80} at x .2 and .8, y .5.
export function dual() {
  fire({ particleCount: 90, spread: 80, origin: { x: 0.2, y: 0.5 } });
  fire({ particleCount: 90, spread: 80, origin: { x: 0.8, y: 0.5 } });
}

// canvas-confetti README "continuous side cannons for 30 seconds".
export function sideCannons(seconds = 30) {
  const end = Date.now() + seconds * 1000;
  let stopped = false;
  (function frame() {
    if (stopped) return;
    fire({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 } });
    fire({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  return () => { stopped = true; };
}

// Bruno Simon folio-2025: the Konami code fires three confetti bursts.
export function triple() {
  [0.25, 0.5, 0.75].forEach((x, i) =>
    setTimeout(() => realistic({ x, y: 0.7 }), i * 250));
}
