// Personalisation lives in one file, the way the two most-forked birthday
// sites do it: faahim/happy-birthday (customize.json, ~1.5k stars) and
// fajarghifar/happybirthday ("Customize everything from a single file").
// See INSPIRATION.md § Content & personalisation.

export default {
  name: 'Mustafa',

  // Mustafa's date of birth (YYYY-MM-DD).
  // Age, candles, day counts, "seconds young" and the countdown all derive from it.
  birthDate: '2006-10-03',

  // Who the site is from (signature on the letter, card and envelope).
  sender: 'your brother',

  // Used in the Spotify-style superlative: "You were in the top 0.005% of ___ globally."
  superlativeGroup: 'brothers',

  // The letter (typed out by scroll in Chapter III). One string per paragraph.
  // ⚠️ PLACEHOLDER copy: write your own words here.
  letter: [
    'Happy birthday, Mustafa.',
    'I could have sent a text. Instead I built you a whole website, because a text felt too small for how proud I am of you.',
    'Thank you for every laugh, every late night, and every time you had my back without being asked. Watching you grow into who you are has been one of the best parts of my life.',
    'Here is to your best year yet. I love you, brother.',
  ],

  // Optional group card (Kudoboard / Partiful Cards cosigners pattern).
  // Add messages from family and friends: { from: 'Name', text: 'Message' }.
  // The section stays hidden while this list is empty.
  messages: [],

  // Optional "💌 Reply" button (halo-maya pattern: reply on WhatsApp).
  // Put a phone number in international format without "+", e.g. '15551234567'.
  reply: {
    whatsapp: '',
    text: 'Thank you!! 🎂',
  },

  // Optional: path to an mp3 in /public to use instead of the synthesized
  // music-box "Happy Birthday" (Posh "Add song from Spotify" / Apple Invites playlist pattern).
  music: '',
};
