import config from '../config.js';

export const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isTouch = () => window.matchMedia('(hover: none)').matches;

export const finePointer = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Parse YYYY-MM-DD as a *local* midnight so the birthday flips at local midnight.
function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}

export const birth = parseLocalDate(config.birthDate);

export function ageOn(date = new Date()) {
  let age = date.getFullYear() - birth.getFullYear();
  const hadBirthday =
    date.getMonth() > birth.getMonth() ||
    (date.getMonth() === birth.getMonth() && date.getDate() >= birth.getDate());
  if (!hadBirthday) age -= 1;
  return age;
}

export function isBirthdayToday(date = new Date()) {
  return date.getMonth() === birth.getMonth() && date.getDate() === birth.getDate();
}

export function nextBirthday(date = new Date()) {
  const y = date.getFullYear();
  let next = new Date(y, birth.getMonth(), birth.getDate());
  if (next < new Date(y, date.getMonth(), date.getDate())) next = new Date(y + 1, birth.getMonth(), birth.getDate());
  return next;
}

// The age being celebrated: today's age on the birthday, otherwise the upcoming one.
export function celebratedAge(date = new Date()) {
  return isBirthdayToday(date) ? ageOn(date) : ageOn(nextBirthday(date));
}

export const secondsAlive = (date = new Date()) => Math.floor((date - birth) / 1000);
export const daysAlive = (date = new Date()) => Math.floor((date - birth) / 86400000);

export const weekdayBorn = () =>
  birth.toLocaleDateString('en-US', { weekday: 'long' });

export const longDate = (d) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

export const fmt = (n) => n.toLocaleString('en-US');

// 1 → 1st, 22 → 22nd … used for "IT IS YOUR 22ND BIRTHDAY!" (Wikipedia 20 copy pattern).
export function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export const lerp = (a, b, t) => a + (b - a) * t;

// Change a button's text without destroying the magnetic inner label.
export function setLabel(el, text) {
  const inner = el.querySelector('.pill__label');
  (inner || el).textContent = text;
}
