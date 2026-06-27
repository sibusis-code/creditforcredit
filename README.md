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

The programme is **not** sold as "AI training courses." It is sold as an **accredited micro-learning
pathway**. Every page should reinforce this spine:

1. **Micro-learning, not marathons** — short, focused units fit around the job (minutes, not months). No one comes off the job for a qualification they may never finish.
2. **Internationally aligned, locally accredited** — curriculum benchmarked to global standards, delivered through **Centenary Networks (QCTO-accredited)**; credible to staff, recognised nationally.
3. **Credits that stack** — every unit is **credit-bearing** and ladders toward a national qualification, at the learner's own pace.
4. **Boost your scorecard** — delivered through an accredited provider, so training spend supports **B-BBEE Skills Development** — recognised, documented, claimable.
5. **For everyone** — one programme, one standard, across every team.

**Audience:** SPS (Sustainable Power Solutions) — the **energy sector**. Framing is workforce
development for an AI-disrupted industry, aimed at decision-makers (training spend, scorecard) and
the staff who'll learn.

**Primary calls to action:** `Start Building` · `Talk to Our Team`

### Approved hero copy (current)
- **Headline:** Build Toward an Accredited Qualification — One Module at a Time
- **Subtext:** Credit-bearing AI and technical skills modules for SPS teams, delivered in association
  with Centenary Networks (QCTO-accredited). Staff learn at their own pace, stack credits as they go,
  and ladder toward a full Occupational Certificate — while you earn B-BBEE Skills Development points
  along the way.

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

> Micro-learning units are credit-bearing toward the **Occupational Certificate: Computer Technician**
> (NQF 5, Qualification ID **101408**, 282 credits), delivered in association with **Centenary
> Networks (Pty) Ltd**, accredited by the **Quality Council for Trades and Occupations (QCTO)** as a
> Skills Development Provider. Accreditation No. **07-QCTO/SDP180526182035**, valid **15 May 2026 –
> 14 May 2031**.

Non-accredited short courses must be labelled as such; only the Computer Technician pathway is the
accredited qualification.

---

## 8. Roadmap / Open Items

- [ ] **Per-course module outlines** — give each of the 20 courses a tailored, realistic curriculum (drafted; pending sign-off on the rebrand).
- [ ] **Real content** — videos + PDFs + facilitator bios from SPS/Centenary.
- [ ] **Working contact form** — currently a non-submitting placeholder; needs an email/Formspree endpoint, and real email/phone (currently `[email address]` / `[phone number]`).
- [ ] **Reframe deeper pages around micro-learning** — emphasise "units/credits" over "courses" sitewide.
- [ ] **Custom domain** (e.g. `academy.sps…`) once decided.
- [ ] **Energy-sector framing** — tilt imagery/examples toward the energy industry per the one-pager.

---

*Project for SPS — Sustainable Power Solutions, in association with Centenary Networks (QCTO).
Blueprint derived from the SPS AI Skills Programme one-pager.*
