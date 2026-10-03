# Happy Birthday Mustafa 🎂

A birthday website for Mustafa. It opens with a preloader, then an envelope that opens to reveal a portrait hero. From there it runs through:

- a *Birthday Wrapped* story;
- candles you blow out with your microphone;
- a chat-box fake-out and a typed letter;
- "Sent with Balloons";
- a finale with letter balloons, confetti and fireworks.

Every design decision is borrowed from a real, excellent website. The audit trail is in **[INSPIRATION.md](INSPIRATION.md)** and the raw research is in **[research/](research/)**.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # static site in dist/
npm run preview   # serve the production build
```

The build is fully static, with relative paths. Upload `dist/` to any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a plain folder.

## Make it his

Everything personal lives in **`src/config.js`**:

| Field | What it does |
|---|---|
| `birthDate` | `2006-10-03`. Drives the age, the candles, the day and second counts, and the countdown. |
| `sender` | Signature on the envelope, card and letter (default "your brother"). |
| `letter` | **⚠️ Placeholder text. Write your own.** One string per paragraph. |
| `messages` | Optional group-card wall: `{ from, text }` entries from friends and family. Hidden while empty. |
| `reply.whatsapp` | Optional phone number (international format, no `+`). It shows a "💌 Reply" button that opens WhatsApp. |
| `music` | Optional path to an mp3 in `public/`, played instead of the synthesized music box. |
| `superlativeGroup` | The word in "top 0.005% of ___ globally" (default "brothers"). |

Photos: `public/mustafa.jpg` (the portrait) and `public/mustafa-cutout.webp` (background removed).

## Notes

- The microphone needs HTTPS, which every host above provides. If the mic is refused, clicking the cake or pressing Space blows the candles out. On phones there is also a "shake" option.
- Sound is opt-in at the envelope. Press **M** to mute.
- Hidden extras: the Konami code, typing "happy birthday", and clicking Mustafa's name.
- After deploying, change `og:image` in `index.html` to an absolute URL (for example `https://your-site/og.jpg`) so link previews show the poster image.
