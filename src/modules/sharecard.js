// "Download story (image)": GitHub Unwrapped renders an Instagram-story still at 1036 × 1973.
// Composition reuses the story's medallion (GitHub Unwrapped 2021: photo in a white ring with
// a bold band) on the site palette, plus the "seconds young" line (Google birthday Doodle).
import config from '../config.js';
import { celebratedAge, secondsAlive, fmt } from './util.js';

const loadImg = (src) => new Promise((res, rej) => {
  const i = new Image();
  i.onload = () => res(i);
  i.onerror = rej;
  i.src = src;
});

export async function makeStoryImage() {
  const W = 1036, H = 1973;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  await Promise.all([
    document.fonts.load('900 100px "Mona Sans Variable"'),
    document.fonts.load('400 40px "Instrument Serif"'),
    document.fonts.load('500 24px "Roboto Mono Variable"'),
  ]).catch(() => {});
  const photo = await loadImg('mustafa.jpg');
  const cut = await loadImg('mustafa-cutout.webp');
  const u = W / 1080;

  // ground
  ctx.fillStyle = '#ff6359';
  ctx.fillRect(0, 0, W, H);

  // label
  ctx.fillStyle = '#000';
  ctx.font = `500 ${26 * u}px "Roboto Mono Variable", monospace`;
  ctx.textAlign = 'center';
  ctx.fillText('#BIRTHDAYWRAPPED', W / 2, 150 * u);

  // giant stretched name behind the cut-out (Spotify 2018 overlap)
  ctx.save();
  ctx.font = `900 ${300 * u}px "Mona Sans Variable", sans-serif`;
  ctx.fontStretch = 'condensed';
  const name = config.name.toUpperCase();
  const nw = ctx.measureText(name).width;
  const sx = (W - 60 * u) / nw;
  ctx.translate(W / 2, 1180 * u);
  ctx.scale(sx, sx * 2.2);
  ctx.fillText(name, 0, 0);
  ctx.restore();

  // cut-out portrait
  const ch = 1000 * u, cw = ch * (cut.width / cut.height);
  ctx.drawImage(cut, (W - cw) / 2, 1250 * u - ch, cw, ch);

  // medallion with age band
  const R = 150 * u, cx = W / 2, cy = 1500 * u;
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = 40;
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, R - 16 * u, 0, Math.PI * 2); ctx.clip();
  const s = (R - 16 * u) * 2;
  ctx.drawImage(photo, 120, 40, 560, 560, cx - s / 2, cy - s / 2, s, s);
  ctx.restore();
  ctx.fillStyle = '#fff';
  ctx.fillRect(cx - R, cy + R * 0.42, R * 2, 62 * u);
  ctx.fillStyle = '#000';
  ctx.font = `900 ${56 * u}px "Mona Sans Variable", sans-serif`;
  ctx.fillText(String(celebratedAge()), cx, cy + R * 0.42 + 52 * u);

  // lines
  ctx.font = `800 ${90 * u}px "Mona Sans Variable", sans-serif`;
  ctx.fillText('HAPPY BIRTHDAY', W / 2, 1760 * u);
  ctx.font = `400 ${40 * u}px "Instrument Serif", serif`;
  ctx.fillText(`${fmt(secondsAlive())} seconds young today.`, W / 2, 1840 * u);
  ctx.font = `500 ${22 * u}px "Roboto Mono Variable", monospace`;
  ctx.fillText(location.host.toUpperCase() || 'HAPPY BIRTHDAY MUSTAFA', W / 2, 1915 * u);

  return new Promise((res) => c.toBlob(res, 'image/png'));
}

export async function downloadStoryImage() {
  const blob = await makeStoryImage();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `happy-birthday-${config.name.toLowerCase()}-story.png`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
