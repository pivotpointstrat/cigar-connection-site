# Cigar Connection — outstanding details

**Status:** site built and LIVE at **cigarconnectionpp.com**
**Photos:** received (11 images) — humidor, lounge, gallery, offers, cigars. No more needed.
**Logo:** working version built from the promo artwork. Fine at header size; an original
file would be better.
**What's left:** the facts below. The site's HTML carries them as `<!-- TBC: ... -->`
comments, so nothing unconfirmed is shown to a visitor.

**Note on the offers:** the visible copy is deliberately month-proof — it reads
"Daily · 12pm–4pm" for the house cigar and "This month's Cigar & Dine exclusive" for
the food offer. So nothing goes stale on 1 October. But "**Daily**" is a strong claim
and it came from a poster that said *"TODAY"* — so that is the first thing to verify.
There are only **4 TBC comments** left in the HTML: the brand list (index + cigars),
private-hire seated capacity, and whether there's a separate entrance.

---

## The forwardable message

Copy the block below and send it as-is (WhatsApp, Telegram or Facebook).

---

**Cigar Connection website — a few details we need**

Your site is built and live at **cigarconnectionpp.com** — we used the photos you sent,
and they came out beautifully. The humidor shot is doing a lot of work.

Before we call it finished there are a few facts to confirm. Most are already filled in
with our best guess — **if it's right, just say "yes" and we'll move on.**

**Most urgent — the offers**

1. We've listed two offers from your posters: the **$9.99 house cigar** with a free
   drink, and **50% off the food menu** with any cigar. The posters say *"September"*
   and *"today"* — **do these run every day, or were they a one-off September promotion?**
2. What times do they run? We've written Mon–Sat, 12–4pm.

**Hours and getting in**

3. **Opening hours** — we've used Paparazzi's: Mon–Sat 11am–11pm, closed Sunday.
   Same upstairs, or different?
4. **Phone** — we've used 031 777 2840. Does the lounge have its own number?
5. **Entrance** — guests come in through Paparazzi and up the stairs? Is there a separate door?

**The cigars**

6. From the humidor photos we listed: **Cohiba, Romeo y Julieta, Joya, Perdomo,
   VegaFina, White Label, AVO**. Correct? Anything missing you'd want shown?
7. Do you sell cigars to take away, or is it lounge-only?

**Private hire**

8. How many people can you seat privately, and how much notice do you need?
9. Do guests need to book, or can they walk in?

**Two things to send us**

10. **The original logo file.** We rebuilt a working version from your promo artwork —
    it's crisp at the size it's used, but soft if enlarged. A PNG from whoever designed
    it would be ideal.
11. **Any social pages we should list.** We have Facebook (CigarConnectionKH) and
    Telegram (@cigarconnectionphnompenh). Instagram?

---

Answer whatever you know — partial is fine, we'll mark the rest as pending.

---

## Where each answer goes

| # | Question | File |
|---|----------|------|
| 1–2 | Offers (recurring?) | `index.html` — the two offer panels |
| 3 | Lounge hours | `visit.html`, `index.html` |
| 4 | Phone | `visit.html`, footers, JSON-LD |
| 5 | Entrance | `visit.html`, `index.html` |
| 6 | Brands | `cigars.html`, `index.html` |
| 7 | Take-away sales | `cigars.html` |
| 8–9 | Private hire / booking | `private-hire.html`, `visit.html` |
| 10 | Logo → replaces `images/logo-light.png`, `logo-dark.png`, favicon |
| 11 | Socials | footers, `visit.html`, JSON-LD `sameAs` |

## Still to do our side (not waiting on the client)

- **Netlify form notification** — Site configuration → Forms → Form notifications →
  Email, or enquiries sit in the dashboard unseen.
- Google Business Profile should be kept as current as the website.
