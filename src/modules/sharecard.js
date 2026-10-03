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
  const cut = await loadImg('mustafa-cutout.webp');
  const u = W / 1080;

  // Same poster as the chapter floods / share image: hue ground, stretched name behind the
  // cut-out portrait (Spotify 2018), cut-out bleeding off the bottom edge.
  ctx.fillStyle = '#ff6359';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';

  ctx.font = `500 ${26 * u}px "Roboto Mono Variable", monospace`;
  ctx.fillText('#BIRTHDAYWRAPPED', W / 2, 120 * u);
  ctx.save();
  ctx.font = `800 ${120 * u}px "Mona Sans Variable", sans-serif`;
  ctx.fontStretch = 'condensed';
  ctx.fillText('HAPPY BIRTHDAY', W / 2, 270 * u);
  ctx.restore();
  ctx.font = `400 ${44 * u}px "Instrument Serif", serif`;
  ctx.fillText(`${celebratedAge()} years · ${fmt(secondsAlive())} seconds young today.`, W / 2, 345 * u);

  // stretched name, edge to edge (Getty titleStretch)
  ctx.save();
  ctx.font = `900 ${300 * u}px "Mona Sans Variable", sans-serif`;
  ctx.fontStretch = 'condensed';
  const name = config.name.toUpperCase();
  const m = ctx.measureText(name);
  const sx = (W - 40 * u) / m.width;
  const glyphH = m.actualBoundingBoxAscent * sx;
  const sy = (1500 * u - 470 * u) / glyphH;
  ctx.translate(W / 2, 1500 * u);
  ctx.scale(sx, sx * sy);
  ctx.fillText(name, 0, 0);
  ctx.restore();

  // cut-out portrait anchored to the bottom edge
  const ch = 1150 * u, cw = ch * (cut.width / cut.height);
  ctx.drawImage(cut, (W - cw) / 2, H - ch, cw, ch);

  ctx.fillStyle = '#fff';
  ctx.font = `500 ${22 * u}px "Roboto Mono Variable", monospace`;
  ctx.fillText((location.host || 'Happy Birthday Mustafa').toUpperCase(), W / 2, H - 50 * u);

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
