# SPS · AI Skills Programme — Website Blueprint

> **Will AI replace you — or will you run it?**
> Accredited, internationally aligned **micro-learning** that lets SPS people build credit-bearing
> AI and technical skills in short bursts, at their own pace — laddering toward a full national
> qualification while boosting the company's skills-development scorecard.

This repository is the public-facing website for the programme. This README is the **blueprint**:
it captures the positioning and messaging spine (from the SPS one-pager) and documents how the
site is built so anyone can maintain or extend it.

---

## 1. The Spine (positioning — do not drift from this)

**What we sell:** **credit-bearing modules / skills courses** that deliver **B-BBEE returns**. We do
**not** sell full qualifications, and we do **not** position this as "AI training courses." Each
module is a small, claimable, credit-bearing unit; the **Occupational Certificate is the *destination*
credits ladder toward — never the thing being sold.** Lead with *modules → credits → B-BBEE returns*,
with the qualification as the optional end-point. The whole site revolves around this spine
(boss-approved, 28 Jun 2026):

1. **Start small, no big commitment** — enrol someone in a single credit-bearing module (days, not months). No need to commit anyone to a full qualification up front.
2. **Credits accumulate over time** — every module carries credits toward the Occupational Certificate: Computer Technician (NQF 5, 282 credits); learners build toward certification at their own pace.
3. **Skills spend that scores** — delivered through an accredited provider, so each module supports the **B-BBEE Skills Development** scorecard — recognised training, properly documented.
4. **A qualification that's theirs to keep** — employees earn a national, portable credential — a real reason to stay, learn, and grow with SPS.

**Audience:** SPS (Sustainable Power Solutions) — a **solar / energy business**. Framing is workforce
development for an AI-disrupted sector, aimed at decision-makers (skills spend, scorecard) and the
technicians, installers and support teams who'll learn.

**The energy-sector line:** *"For a solar business, this means technicians, installers, and support
teams growing recognised technical and AI capability in focused bursts — each module a step toward
full certification, each one claimable spend, each one building the capability SPS needs as the
sector goes digital."*

**Primary calls to action:** `Explore Modules` · `Talk to Our Team`

### Approved hero copy (current)
- **Headline:** Build Toward a National Qualification — One Module at a Time
- **Subtext:** Credit-bearing AI and technical skills modules for SPS, delivered in association with
  Centenary Networks (QCTO-accredited Skills Development Provider). Your people choose their modules,
  build credits at their own pace, and earn an accredited qualification that's theirs to keep — while
  SPS earns B-BBEE Skills Development points along the way.
- **Driver's-seat line:** AI is changing how the energy sector works — and the people who get ahead of
  it will be the ones who shape where it goes… Not training handed down — a path they own.

---

## The Engine — One Platform, Many Companies (white-label)

This site is the **first instance of a reusable platform ("the engine")**. The *same* platform will be
**replicated across Newgx-invested companies** — e.g. **SPS, Maziv, Funig, Inhance** — each as its own
website: identical engine and product model, different company brand.

The **product never changes** between companies: credit-bearing modules / skills courses → claimable
**B-BBEE returns** → credits that ladder toward a national qualification.

| Changes per company (edit `brand.js`) | Stays the same (the engine) |
|---|---|
| Company/academy name, logo, industry line | Page structure, sections & components (the HTML) |
| Brand colours (`BRAND.colors`) | ITU-style airy design system in `styles.css` |
| Contact details (email, phone, hours, location) | The pillars + modules→credits→B-BBEE→qualification spine |
| Enquiry-form target + redirect | `course.html` template + `catalog.js` content model |
| Accreditation partner, numbers, qualification | Nav + footer (rendered from `brand.js`), CTA patterns |

**Status: DONE (3 Jul 2026).** Every company-specific value now lives in a single **`brand.js`** config
(`window.BRAND`). The shared **nav and footer are rendered from it**, colours override the CSS tokens,
and page text is filled via `data-b` placeholders — so the SPS values are no longer scattered inline.

**Launching a new company (Maziv / Inhance / Fungi Utilities):**
1. Copy the repo.
2. Edit the `BRAND` object in **`brand.js`** — name, colours, contact, accreditation, and the FormSubmit
   target/redirect. Drop in the new logo file and point `BRAND.logo` at it.
3. Edit **`catalog.js`** if the module line-up differs.
4. **Review page headlines/copy for industry framing** — e.g. change "solar business" to "fibre /
   telecoms" for Maziv. (Identity *names* swap automatically via `brand.js`; positioning *copy* is a
   deliberate human step — you don't want "solar" auto-pasted into a telecoms site.)

**Repo model:** one repo + GitHub Pages site per company (this one is `sibusis-code/sps.academy`).

---

## 2. Brand & Design System

**Layout model (boss-approved, 3 Jul 2026):** the site adopts the **ITU Academy structure and airy
aesthetic** (light-tinted header, curved section edges, rounded cards, colourful category tiles, pill
buttons, catalogue-with-filters, course-detail info-grid) — **recoloured to the SPS brand**. The boss
shared the ITU Academy site as the reference layout; this supersedes the earlier monochrome direction.

| Token | Value | Use |
|-------|-------|-----|
| **Accent — orange** | `--orange: #f37424` (`--orange-deep #d55f16`) | Primary buttons, links, active nav, modality labels |
| **Accent — amber** | `--amber: #faa819` | Search button (ITU's yellow), highlights |
| **Accent — green** | `--green: #4da446` (`--green-deep #2f8f3e`) | "Available" badges, category tiles, ticks, enrol box |
| Header / hero tint | `--header: #e9f4ee` → `#dcefe4` (light solar-green) | Nav bar, hero + page-head backgrounds |
| Ink / body | `#1f2733` / `#40474f` / `#6b7480` | Headings, body, muted text |
| Canvas | `#ffffff` / `#f4f7f6` | Backgrounds |

All three accents come straight from `sps-dark-logo.svg` (its green and orange/amber gradients).

- **Logo:** `sps-dark-logo.svg` (used as-is on the light header and footer).
- **Type:** **Poppins** (Google Fonts) with a system fallback stack — matches the rounded ITU feel.
- **Imagery:** real topic-matched photography (Unsplash CDN) on the hero, module cards and split
  blocks; everything else is inline SVG, so there are almost no binary image assets to manage.
- **Motion:** subtle scroll-reveal (`.reveal` + IntersectionObserver) and card hover-lift; respects
  `prefers-reduced-motion`.

---

## 3. Site Map & Files

```
sps/
├── index.html              # Home — ITU-style: hero+search, featured modules, category tiles,
│                           #   "how it works" split blocks, accredited pathway, pillars, partners, CTA
├── modules.html            # Full catalogue — ITU-style: breadcrumb, search, sidebar filters
│                           #   (Modality / Topics / Level with live counts) + card grid
├── course.html             # ONE data-driven MODULE template — ITU course-detail layout,
│                           #   renders any module via ?c=<slug> (info grid, enrol box, related)
├── about.html              # About / "Our work": what SPS Academy is, energy-sector line, accreditation
├── contact.html            # Contact details + working enquiry form (FormSubmit.co)
├── thanks.html             # Form submission confirmation page
│
├── brand.js                # THE re-skin file — window.BRAND (name, logo, colours, contact,
│                           #   form target, accreditation) + renders the shared nav & footer
├── styles.css              # SHARED stylesheet — ITU-style airy layout; colour tokens overridden by brand.js
├── catalog.js              # SHARED data — the 20-module catalogue (window.MODULES) + helpers
├── app.js                  # SHARED behaviour — nav toggle, reveal, hero search, carousel,
│                           #   catalogue filtering, the course-detail renderer, brand text fill
│
├── sps-dark-logo.svg       # Brand mark
├── resources/*.pdf         # Downloadable PDF resources (placeholders, swappable)
├── .gitattributes          # Marks PDFs/images as binary (prevents corruption)
└── README.md               # This blueprint
```

**Multi-page, shared-asset architecture** (no build step). Every page links `brand.js` (in `<head>`) +
`styles.css` + `catalog.js` + `app.js`, so brand, design, data and behaviour each live in **one place**.
Each page ships empty `<nav id="nav">` / `<footer id="siteFooter">` placeholders that `brand.js` fills,
and `data-b="…"` attributes on brand-specific text; `<body data-page="…">` marks the active nav link.
Re-skin = edit `brand.js`; re-content = edit `catalog.js`.

> **History:** the site was fully rebuilt to the ITU Academy structure on 3 Jul 2026 (boss-approved).
> The previous monochrome build's extra files (`ai-in-action.html`, `ai-fundamentals.html`, `site.js`,
> `cards.js`, `assistant.js`, `neural.js`, `demo.js`) were removed; a zip backup of the old site is
> kept outside the repo.

### Key pages (mirroring ITU Academy)
- **`index.html`** — ITU home: photo hero with a "What do you want to learn?" search, a featured-module
  row, colourful category tiles, alternating "our work" split blocks, the accredited-pathway feature,
  the four SPS pillars, an accreditation-partner strip and a CTA band.
- **`modules.html`** — ITU "Full catalogue of courses": breadcrumb + search page-head, a sticky
  sidebar of checkbox filters (Modality / Training topics / Level, each with counts), an All/Online/
  In-person segment, and a live-filtered card grid. Deep-links via `?q=<term>` from the home search
  and category tiles.
- **`course.html`** — ITU course-detail: breadcrumb, title/lead, a 9-cell info grid (Enrolment,
  Delivery, Location, Training topic, Level, Language, Credits, Duration, Provider), a sticky enrol
  box, "what you'll learn" ticks, an about section and related modules — all driven by `?c=<slug>`.

---

## 4. Content Model

All module content lives in one place: the **`window.MODULES` array** in `catalog.js`, shared by every
page (home featured row, catalogue grid + filters, and the course-detail page).

```js
{
  slug:     "ai-fundamentals",          // URL key → course.html?c=<slug>
  title:    "AI Fundamentals for the Workplace",
  topic:    "Business",                 // filter + drives "what you'll learn" defaults
  level:    "Beginner",                 // filter (Beginner…Executive, NQF 5)
  modality: "self-paced",               // self-paced | live | inperson | blended (filter + label)
  credits:  8,                          // credits toward NQF 5
  hours:    "6 hours",                  // duration shown on card + detail
  img:      "<unsplash-id>",            // card/hero photo id (images.unsplash.com/photo-<id>)
  lead:     "…",                        // description paragraph
  avail:    "Coming Soon",              // optional status → grey badge
  accred:   true                        // optional → flags the accredited destination qualification
}
```

- **20 modules** are catalogued today. Cards everywhere auto-link to `course.html?c=<slug>`.
- **Modality labels** live in `window.MODALITY`; the filter lists (`TOPICS`, `LEVELS`) are derived
  from the data with live counts, so adding a module needs no filter edits.
- **Images:** `window.imgUrl(id, width)` builds the Unsplash URL. Swap the `img` id (or point it at a
  local file) to change a photo.

> ⚠️ **Placeholder content:** credits, durations and the "what you'll learn" bullets are illustrative
> defaults pending final SPS/Centenary material. The footers say so. Replace before any public launch.

### Add / edit a module
1. Add one object to `window.MODULES` in `catalog.js`. That's it — it appears in the catalogue, gets
   a filterable card, and has a working detail page automatically.
2. To feature it on the home row, add its slug to the `order` array in `app.js` (`#featuredTrack`).

---

## 5. Tech Stack & Hosting

- **Static HTML/CSS/JS** — no framework, no backend, no database, no build.
- **Hosting:** GitHub Pages (free), served from `main` branch root.
  - Repo: `https://github.com/sibusis-code/sps.academy`
  - Live: **https://sibusis-code.github.io/sps.academy/**
- **Deploy = push.** Every push to `main` triggers a Pages rebuild (~1 min).

```bash
# from the sps/ folder
git add -A
git commit -m "…"
git push          # site updates automatically
```

---

## 6. How To… (maintenance recipes)

- **Add / edit a module** → add or edit one object in `window.MODULES` in `catalog.js` (see §4). It
  flows into the catalogue, filters and detail page automatically. To feature it on the home row, add
  its slug to the `order` array in `app.js`.
- **Swap a photo** → change the module's `img` id in `catalog.js`, or the hero/split `background-image`
  URLs in the HTML.
- **Change copy** → hero + section copy lives in each page's HTML; module copy lives in `catalog.js`.
- **Re-skin for another company** → edit **`brand.js`** only (name, `BRAND.colors`, logo path, contact,
  form target, accreditation), drop in the new logo, then review page copy for industry framing.

---

## 7. Accreditation (legal — keep verbatim)

> Modules are credit-bearing toward the **Occupational Certificate: Computer Technician**
> (NQF 5, Qualification ID **101408**, 282 credits), delivered in association with **Centenary
> Networks (Pty) Ltd**, accredited by the **Quality Council for Trades and Occupations (QCTO)** as a
> Skills Development Provider. Accreditation No. **07-QCTO/SDP180526182035**, valid **15 May 2026 –
> 14 May 2031**.

Per the boss, this block should appear on the **credentials / about section** (it's rendered in the
About section's accreditation note) as well as the footer.

Non-accredited short courses must be labelled as such; only the Computer Technician pathway is the
accredited qualification.

---

## 8. Roadmap / Open Items

- [x] **Rebuild to the ITU Academy structure** (3 Jul 2026) — ITU-style home, full-catalogue-with-filters,
  and course-detail info-grid, recoloured to the SPS brand. Verified rendering in headless Edge.
- [x] **Align site to the one-pager** — micro-learning/credits language, energy-sector framing, and
  "Explore Modules / Talk to Our Team" CTAs throughout.
- [x] **Working contact form** — wired to **FormSubmit.co → accounts@cn.co.za** (redirects to `thanks.html`); real email/phone in place. *First submission triggers a one-time activation email to accounts@cn.co.za — click it to start receiving enquiries.*
- [ ] **Real content** — final module details (credits/durations), photography and facilitator bios from SPS/Centenary.
- [ ] **Energy-sector imagery** — tilt hero/card photography toward the solar/energy industry (copy is already energy-framed).
- [ ] **Optional ITU features not yet carried over** — course PDF downloads, an AI assistant widget, and per-module curriculum outlines were dropped in the rebuild; re-add if wanted.
- [ ] **Custom domain** (e.g. `academy.sps…`) once decided.

---

*Project for SPS — Sustainable Power Solutions, in association with Centenary Networks (QCTO).
Blueprint derived from the SPS AI Skills Programme one-pager.*
