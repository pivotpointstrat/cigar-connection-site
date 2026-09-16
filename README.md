# Cigar Connection — website

Cigar lounge and walk-in humidor upstairs at Paparazzi Bar & Kitchen,
179 E0 Preah Sisowath Quay, Riverside, Phnom Penh.

Static site — plain HTML/CSS, no build step. Open `index.html` and it works.

## Pages
- `index.html` — home: hero, the humidor, the room, gallery, cigars, current offers, find us
- `the-lounge.html` — what the room is like
- `cigars.html` — the walk-in humidor and the houses we carry
- `private-hire.html` — reserving the lounge for a group
- `visit.html` — hours, address, how to find the stairs
- `404.html` — not-found page

## Deploying
Any static host. GitHub Pages serves `main` directly (this repo).
For form handling, Netlify would be the natural next step.

## Facts needing client confirmation
Items still pending are marked in the HTML as `<!-- TBC: ... -->` comments,
so they never show to a visitor. See `CLIENT-CONTENT-REQUEST.md`.
