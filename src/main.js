import '@fontsource-variable/mona-sans/wdth.css';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/roboto-mono';
import './styles/main.css';

import config from './config.js';
import { initScroll, getScroll, ScrollTrigger } from './modules/scroll.js';
import { runPreloader } from './modules/preloader.js';
import { initGate } from './modules/gate.js';
import { initHero, playHeroIntro } from './modules/hero.js';
import { initChapters } from './modules/chapters.js';
import { initNumbers } from './modules/numbers.js';
import { initMemories } from './modules/memories.js';
import { initStory } from './modules/story.js';
import { initCake } from './modules/cake.js';
import { initMessage } from './modules/message.js';
import { initFinale } from './modules/finale.js';
import { initExtras } from './modules/extras.js';
import { initHalftone } from './modules/halftone.js';
import { initSmoke } from './modules/smoke.js';
import * as audio from './modules/audio.js';
import { $, celebratedAge, ordinal } from './modules/util.js';

document.body.classList.add('is-gated');
const lenis = initScroll();

// copy that depends on config (Wikipedia 20: "IT IS OUR 20TH BIRTHDAY! 🎂 … Over 20 years,
// people like you have made it possible … today is for you. Join the celebration")
const age = celebratedAge();
$('[data-ordinal-line]').textContent = `It is your ${ordinal(age)} birthday! 🎂`;
$('[data-intro-copy]').textContent =
  `Over ${age} years, you have made every room you walk into better. ${config.name}, today is for you.`;

// sound toggle UI
const soundBtn = $('#soundToggle');
audio.onChange((on) => {
  document.documentElement.classList.toggle('is-sound-on', on);
  soundBtn.setAttribute('aria-pressed', String(on));
});
soundBtn.addEventListener('click', () => audio.toggle());

initSmoke($('#smoke'), getScroll);
initHalftone($('#halftone'));

initHero();
initChapters();
const story = initStory();
initNumbers({ onUnwrap: () => story.open() });
initMemories();
initCake();
initMessage();
initFinale();
initExtras();

const gate = initGate({
  onOpen: (withSound) => audio.init(withSound),
  onRevealSite: () => {
    document.body.classList.remove('is-gated');
    $('#site').removeAttribute('aria-hidden');
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });
    lenis.start();
    ScrollTrigger.refresh();
    playHeroIntro();
  },
});

runPreloader().then(() => gate.enter());
