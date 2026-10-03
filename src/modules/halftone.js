// Halftone mouse trail from Ten Years Away (Studio375 10th anniversary, Awwwards
// SOTD + Developer Award, Codrops case study): "the first pass accumulates the
// movement into a render texture that slowly fades, and the second converts it into
// a halftone dot pattern … the dots shrink quietly when you hover over something
// clickable."
// Numbers: 15 px dot grid and dot opacity 0.6–1.05 (GitHub Unwrapped Noise.tsx);
// brush = Cuberto text-state cursor circle (81.6 px); fade = lerp 0.1 per frame
// (Lenis default); shrink over links ×0.75 (Cuberto mouse-follower scale .2 → .15);
// mix-blend-mode exclusion (Cuberto mouse-follower "-exclusion" variant).
// Disabled on touch/no-hover devices (Studio Freight cursor) and reduced motion.
import { finePointer, reducedMotion } from './util.js';

export function initHalftone(canvas) {
  if (!finePointer() || reducedMotion()) { canvas.remove(); return; }
  const ctx = canvas.getContext('2d');
  const CELL = 15;
  const MAX_R = 6;
  const BRUSH = 81.6 / 2;
  let cols = 0, rows = 0, field = new Float32Array(0);
  let last = null;
  let shrink = 1, shrinkTarget = 1;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  function resize() {
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    cols = Math.ceil(innerWidth / CELL) + 1;
    rows = Math.ceil(innerHeight / CELL) + 1;
    field = new Float32Array(cols * rows);
  }
  resize();
  addEventListener('resize', resize);

  function stamp(x, y) {
    const r = Math.ceil(BRUSH / CELL);
    const cx = Math.round(x / CELL), cy = Math.round(y / CELL);
    for (let j = cy - r; j <= cy + r; j++) {
      if (j < 0 || j >= rows) continue;
      for (let i = cx - r; i <= cx + r; i++) {
        if (i < 0 || i >= cols) continue;
        const d = Math.hypot(i * CELL - x, j * CELL - y) / BRUSH;
        if (d > 1) continue;
        const k = j * cols + i;
        field[k] = Math.min(1, field[k] + (1 - d * d) * 0.35);
      }
    }
  }

  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const p = { x: e.clientX, y: e.clientY };
    if (last) {
      const dist = Math.hypot(p.x - last.x, p.y - last.y);
      const steps = Math.max(1, Math.ceil(dist / (CELL * 1.5)));
      for (let s = 1; s <= steps; s++) stamp(last.x + (p.x - last.x) * (s / steps), last.y + (p.y - last.y) * (s / steps));
    } else stamp(p.x, p.y);
    last = p;
    const t = e.target;
    shrinkTarget = t && t.closest && t.closest('a, button, [data-clickable]') ? 0.75 : 1;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { last = null; });

  function frame() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    shrink += (shrinkTarget - shrink) * 0.1;
    ctx.fillStyle = '#fff';
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const k = j * cols + i;
        const v = field[k];
        if (v < 0.02) { field[k] = 0; continue; }
        field[k] = v * 0.9; // lerp(v, 0, 0.1)
        ctx.globalAlpha = Math.min(1, 0.6 + 0.45 * v);
        ctx.beginPath();
        ctx.arc(i * CELL, j * CELL, MAX_R * v * shrink, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
