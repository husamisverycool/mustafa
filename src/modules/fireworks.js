// Click-anywhere fireworks: a port of Julian Garnier's CodePen "Fireworks"
// (codepen.io/juliangarnier/pen/gmOwJX, MIT), using the values recorded from the
// gjsify port that credits it: 30 dots per burst flying 50–180 px, radius 16–32 →
// 0.1 over 1200–1800 ms easeOutExpo, plus a white ring growing to 80–160 px with
// lineWidth 6 → 0 and alpha .5 → 0 (linear, 600–800 ms). Colours: site palette.
import { PALETTE } from './confetti.js';

const COLORS = PALETTE.slice(0, 4);
const rand = (a, b) => a + Math.random() * (b - a);
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function createFireworks(canvas) {
  const ctx = canvas.getContext('2d');
  const bursts = [];
  let running = false;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Ten Years Away caps DPR at 1.5

  function resize() {
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  resize();
  addEventListener('resize', resize);

  function burst(x, y) {
    const now = performance.now();
    const dots = Array.from({ length: 30 }, () => {
      const angle = rand(0, Math.PI * 2);
      const dist = rand(50, 180);
      return {
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        r: rand(16, 32),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dur: rand(1200, 1800),
      };
    });
    bursts.push({ x, y, start: now, dots, ringR: rand(80, 160), ringDur: rand(600, 800) });
    if (!running) { running = true; requestAnimationFrame(loop); }
  }

  function loop(now) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      const el = now - b.start;
      let alive = false;
      // ring
      const rt = Math.min(1, el / b.ringDur);
      if (rt < 1) {
        alive = true;
        ctx.globalAlpha = 0.5 * (1 - rt);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 6 * (1 - rt);
        ctx.beginPath();
        ctx.arc(b.x, b.y, 0.1 + (b.ringR - 0.1) * easeOutExpo(rt), 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      for (const d of b.dots) {
        const t = Math.min(1, el / d.dur);
        if (t >= 1) continue;
        alive = true;
        const e = easeOutExpo(t);
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(b.x + d.dx * e, b.y + d.dy * e, Math.max(0.1, d.r + (0.1 - d.r) * e), 0, Math.PI * 2);
        ctx.fill();
      }
      if (!alive) bursts.splice(i, 1);
    }
    if (bursts.length) requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  return { burst };
}
