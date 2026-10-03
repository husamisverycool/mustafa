// The close (Getty "Sculpting Harmony": the close returns to the preloader's #ffa441 with a
// stretched title, a credits list, back-to-top and copyright).
// On arrival: letter balloons spelling the words (balloons-js `textBalloons`: 1000 ms between
// lines, 100 ms between letters), "continuous side cannons" (canvas-confetti README), and the
// song again. Click anywhere: fireworks (Julian Garnier's "Fireworks" pen).
// End buttons: "Play again" + "Copy link to share" (Google Santa Tracker end overlay), "Copied"
// for 1500 ms (GitHub Unwrapped), "Download story (image)" (GitHub Unwrapped), "💌 Reply" that
// opens WhatsApp with a prefilled reply (halo-maya).
import { textBalloons } from 'balloons-js';
import config from '../config.js';
import { ScrollTrigger } from './scroll.js';
import { $, reducedMotion, setLabel } from './util.js';
import { sideCannons } from './confetti.js';
import { createFireworks } from './fireworks.js';
import { downloadStoryImage } from './sharecard.js';
import * as audio from './audio.js';

const CREDITS = [
  ['Sculpting Harmony', 'Getty × Resn: palette, chapters, stretched titles, type roles, close'],
  ['Slosh Seltzer', 'Active Theory: preloader ring + counter, party pill, audio toggle'],
  ['Ten Years Away', 'Studio375: sound choice, halftone trail, scroll-velocity smoke'],
  ['Happy Birthday ELLE', 'La Chose: blow out the candles with your mic or phone'],
  ['dennissnellenberg.com', 'Portrait hero, name marquee, greetings preloader, motion tokens'],
  ['Spotify Wrapped', 'Story format, superlatives, cut-out portrait over giant type (2018)'],
  ['GitHub Unwrapped', 'Mona Sans, type scale, count-ups, medallion, story image'],
  ['Google Doodles', '"seconds young today", click-for-confetti'],
  ['Google Santa Tracker', 'Colour wipe, digit roll, Play again / Copy link to share'],
  ['Bruno Simon', 'Konami confetti, animated tab title, "M" to mute'],
  ['iMessage', '"happy birthday" sends with Balloons'],
  ['Twitter birthday balloons', 'Balloons rise once on your birthday'],
  ['Wikipedia 20 & 25', '"today is for you", reduced-motion fallbacks'],
  ['Telegram', '"Birthday today", age digits'],
  ['Apple Invites', 'The photo card inside the envelope'],
  ['Greenvelope · Paperless Post · Evite', 'The envelope, liner, stamp and postmark'],
  ['faahim/happy-birthday', 'The chat-box fake-out'],
  ['halo-maya', 'Typed letter, reply button'],
  ['uday-birthday-wishes', 'Cake, flame, smoke, blow + chime sounds'],
  ['Kudoboard · Partiful Cards', 'The group card wall'],
  ['20 Years Inspired by People', '/nk.studio: Instrument Serif'],
  ['Cuberto · Studio Freight · Lenis', 'Easing, exclusion blend, parallax maths'],
];

export function initFinale() {
  const finale = $('#finale');
  const list = $('#creditsList');
  CREDITS.forEach(([name, what]) => {
    const li = document.createElement('li');
    li.innerHTML = `${name}<small>${what}</small>`;
    list.appendChild(li);
  });
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  const fw = createFireworks($('#fireworks'));
  finale.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    fw.burst(e.clientX, e.clientY);
    audio.pop();
  });

  ScrollTrigger.create({
    trigger: finale, start: 'top 55%', once: true,
    onEnter: () => {
      if (audio.isOn()) audio.playMelody();
      if (reducedMotion()) return;
      // keep each line inside the viewport: a balloon is ≈ 0.75 em wide + 20 px padding (balloons-js)
      const words = innerWidth < 800 ? ['HAPPY', 'BIRTHDAY', config.name.toUpperCase()] : ['HAPPY BIRTHDAY', config.name.toUpperCase()];
      const longest = Math.max(...words.map((w) => w.length));
      const size = Math.max(28, Math.min(110, ((innerWidth * 0.9) / longest - 20) / 0.75));
      const colors = ['#ff6359', '#4596ff', '#16a147'];
      textBalloons(words.map((text, i) => ({ text, color: colors[i % colors.length], fontSize: size })));
      sideCannons(30);
    },
  });

  $('#playAgain').addEventListener('click', () => { location.href = location.pathname; });

  const copy = $('#copyLink');
  copy.addEventListener('click', async () => {
    const label = copy.textContent;
    try { await navigator.clipboard.writeText(location.href); setLabel(copy, 'Copied'); }
    catch (e) { setLabel(copy, location.href); }
    setTimeout(() => { setLabel(copy, label); }, 1500);
  });

  $('#downloadStory').addEventListener('click', () => downloadStoryImage());

  const reply = $('#replyBtn');
  if (config.reply && config.reply.whatsapp) {
    reply.href = `https://api.whatsapp.com/send?phone=${encodeURIComponent(config.reply.whatsapp)}&text=${encodeURIComponent(config.reply.text || '')}`;
    reply.hidden = false;
  }
}
