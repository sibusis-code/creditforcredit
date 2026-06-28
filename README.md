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

| Changes per company (the re-skin) | Stays the same (the engine) |
|---|---|
| Company name & logo (`sps-dark-logo.svg`) | Page structure, sections & components |
| Accent colours (`--accent`, `--accent-green`) | Monochrome design system (B/W/grey + sparing accents) |
| Contact details (email, phone, hours) | The four pillars + modules→credits→B-BBEE→qualification spine |
| Industry line (SPS = solar; Maziv = fibre/telecoms; etc.) | `course.html` template + catalog/content model |
| Hero wording nuance | Video-lightbox + PDF-download mechanics |
| Accreditation partner/number (if not Centenary Networks) | Nav, footer, CTA patterns (`Explore Modules` / `Talk to Our Team`) |

**Recommended build:** centralise every company-specific value into a single **`BRAND` config block**
(name, logo path, accent colours, contact, industry line, accreditation details). Launching a new
company site then = copy the repo, edit one block, drop in the logo. *Status: proposed — not yet
refactored; the current site has SPS values inline.*

**Repo model:** one repo + GitHub Pages site per company (this one is `sibusis-code/sps.academy`).

---

## 2. Brand & Design System

| Token | Value | Use |
|-------|-------|-----|
| Primary UI | `#2a2a2e` → `#121214` (charcoal → near-black) | Buttons, nav, headings, tabs |
| Canvas | `#ffffff` / `#f5f5f4` (white / light grey) | Backgrounds |
| Ink | `#2b2b2b` / `#4d4c4d` | Body & heading text |
| **Accent — orange** | `--accent: #ef6c1a` | **Sparing touches only** (nav underline, accreditation bar) |
| **Accent — green** | `--accent-green: #4da446` | **Sparing touches only** (QCTO badge, live dot, checklist) |

**Rule:** the site is **black / white / grey first**. Orange and green appear only as small, deliberate
accents — never as the dominant colour. (Set by the boss, 27 Jun 2026.)

- **Logo:** `sps-dark-logo.svg` (inverted to white in the dark footer via CSS filter).
- **Type:** system font stack led by Inter — no external font files.
- **Imagery:** real topic-matched photography (Unsplash CDN) on course cards; the rest is
  self-contained CSS gradients + inline SVG, so there are almost no binary image assets to manage.
- **Motion:** subtle scroll-reveal; a low-key grey neural-network canvas in the hero; all respects
  `prefers-reduced-motion`.

---

## 3. Site Map & Files

```
sps/
├── index.html              # Home: hero, AI-in-Action demo, why/about, course catalogue, contact
├── course.html             # ONE data-driven course template — renders any course via ?c=<slug>
├── ai-fundamentals.html    # Legacy URL → redirects to course.html?c=ai-fundamentals
├── sps-dark-logo.svg       # Brand mark
├── resources/              # Downloadable PDF resources (placeholders, swappable)
│   ├── ai-fundamentals-workbook.pdf
│   ├── ai-fundamentals-slides.pdf
│   ├── ai-tools-cheatsheet.pdf
│   ├── ai-prompting-guide.pdf
│   └── ai-reading-list.pdf
├── .gitattributes          # Marks PDFs/images as binary (prevents corruption)
└── README.md               # This blueprint
```

Each HTML file is **fully self-contained** (inline `<style>` and `<script>`) — there is no build
step, bundler, or dependency to install.

### Key pages
- **`index.html`** — the marketing home. Sections: hero · "AI in Action" interactive demo ·
  why-it-works · about · **course catalogue** (cards link to course pages) · contact form · CTA.
- **`course.html`** — the **Harvard-Online-style** course template, **video-heavy with PDF
  downloads**, driven entirely by a JS catalog. Sections: course hero with intro video ·
  "what you'll learn" · expandable module/lesson accordion (video lightbox) · video highlights
  gallery · downloadable resources · facilitator · enrol CTA.

---

## 4. Content Model

All course content lives in one place: the **`COURSES` catalog** inside `course.html`.

```js
"<slug>": {
  title:  "…",            // course title
  cat:    "Business",     // category → drives the "what you'll learn" defaults
  mode:   "Online · Self-paced",
  level:  "Beginner",
  img:    "<unsplash-id>", // hero/card photo
  lead:   "…",            // description paragraph
  avail:  "Coming Soon",  // optional status
  accred: true,           // optional — flags the accredited qualification
  modules:[ { t:"Module title", lessons:[ "Lesson 1", … ] }, … ]  // optional bespoke curriculum
}
```

- **20 courses** are catalogued today. Cards on the home page auto-link to `course.html?c=<slug>`.
- **Videos:** each lesson has a `data-src`. Empty = "unlocks on enrolment"; `SAMPLE` = a placeholder
  preview stream. Swap in a real `.mp4`/Vimeo/YouTube URL to go live.
- **PDFs:** the five files in `resources/` are real, valid, downloadable placeholders. Replace the
  files (keep the names) to ship real content.

> ⚠️ **Placeholder content:** module outlines, durations ("6 weeks / 18 videos"), the facilitator,
> the sample videos and the PDFs are **demonstration placeholders**. The footers say so. Replace
> before any public launch.

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

- **Add a course** → add one entry to the `COURSES` object in `course.html`, and one
  `["<title fragment>","<slug>"]` row to the `SLUGS` map in `index.html`. (Optionally add its photo
  to the image map.) No new file needed.
- **Swap in a real video** → set the lesson's `data-src` to the video URL in the catalog.
- **Swap a PDF** → replace the file in `resources/` with the same filename.
- **Change copy** → hero copy lives in `index.html`; course copy in the `COURSES` catalog.
- **Adjust colour** → edit the CSS variables in `:root`. Keep orange/green to accents only.

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

- [x] **Align site to the one-pager** — micro-learning/credits language, energy-sector framing, "Will AI replace you…" hook, and "Start Building / Talk to Our Team" CTAs across home + course template.
- [x] **Per-course module outlines** — each of the 20 modules now has its own tailored curriculum (`MOD_*` arrays in `course.html`).
- [x] **Working contact form** — wired to **FormSubmit.co → accounts@cn.co.za** (redirects to `thanks.html`); real email/phone in place. *First submission triggers a one-time activation email to accounts@cn.co.za — click it to start receiving enquiries.*
- [x] **AI assistant** — self-contained client-side helper (`Ask the Academy`) on both pages: finds modules, explains credits/B-BBEE/accreditation, routes to the team. No backend/API key (safe on static hosting); upgradeable to a live LLM later if a backend is added.
- [ ] **Real content** — videos + PDFs + facilitator bios from SPS/Centenary.
- [ ] **Energy-sector imagery** — tilt course/hero photography toward the energy industry (copy is already energy-framed).
- [ ] **Custom domain** (e.g. `academy.sps…`) once decided.

---

*Project for SPS — Sustainable Power Solutions, in association with Centenary Networks (QCTO).
Blueprint derived from the SPS AI Skills Programme one-pager.*
