// Lenis smooth scroll + GSAP ScrollTrigger, wired exactly as Lenis' README recipe.
// Stack used by Getty "Sculpting Harmony" (GSAP 3.12 + ScrollTrigger + SplitText + Lenis)
// and Ten Years Away (GSAP + Lenis). Lenis defaults (lerp 0.1) are left untouched;
// Lenis itself drops smoothing under prefers-reduced-motion.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

// dennissnellenberg.com CSS motion token, available to GSAP
CustomEase.create('snell', '.7,0,.3,1');

export let lenis = null;

export function initScroll() {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();

  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-scrollto]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    e.preventDefault();
    // Locomotive Scroll v4 scrollTo default: 1000 ms, easing [0.25, 0, 0.35, 1]
    lenis.scrollTo(id, { duration: 1, easing: CustomEase.create('loco', '.25,0,.35,1') });
  });
  return lenis;
}

export const getScroll = () => ({
  scroll: lenis ? lenis.scroll : window.scrollY,
  velocity: lenis ? lenis.velocity : 0,
});

export { gsap, ScrollTrigger, SplitText };
