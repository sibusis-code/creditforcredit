# Credit for Credit — learning platform

> **Learn while you earn credits.**
> Short, credit-bearing modules that stack toward a national qualification — and count as
> recognised B-BBEE Skills Development spend for the companies that fund them.

**Preview build:** [sibusis-code.github.io/creditforcredit](https://sibusis-code.github.io/creditforcredit/)
**Live domain (not deployed yet):** creditforcredit.org — see §6.

This repository is the public site for the platform, and the **engine** every company-branded
academy is re-skinned from. This README is the blueprint: it captures the positioning and documents
how the site is built so anyone can maintain or extend it.

---

## 1. The Spine (positioning — do not drift from this)

**What we sell:** **credit-bearing modules / skills courses**. Each module is a small, claimable,
credit-bearing unit. The **Occupational Certificate: Computer Technician (NQF 5, ID 101408,
282 credits) is the *destination* credits ladder toward — never the thing being sold.** Lead with
*modules → credits → a record → a qualification you keep*, with B-BBEE returns as the employer-side
benefit.

1. **Start small, no big commitment** — a single credit-bearing module takes days, not months.
2. **Credits accumulate over time** — every module carries credits toward the qualification; learners build at their own pace, and nothing completed is wasted.
3. **Skills spend that scores** — delivered through an accredited provider, so employer-funded training supports the **B-BBEE Skills Development** scorecard.
4. **A record that's theirs to keep** — credits and results bank onto the learner's own credit record, alongside a national, portable qualification that belongs to them, not the employer.

### The spine line — `BRAND.promise`

> **Academic credit becomes financial credit.**
> Do well, earn credits, and build one record that pays you back — in a qualification you keep,
> and in what you can prove to anyone who asks.

This is the sentence everything else hangs off, and it exists to stop the product drifting. The
**Learner Credit Record** is the one asset; future work (employer-recommended certificates, guidance,
recruiter and funding introductions, B-BBEE and ESG reporting) are all *consumers* of that record,
not separate products. Two rules that came out of that decision and should not be quietly reversed:

- **Guidance is never a headline.** Any advisory/AI feature is billed as a quiet assistant *inside*
  the record — "your record can suggest what's next; you decide". Leading with robot career advice
  undercuts the actual message, which is that doing well is rewarded.
- **The learner owns the record and grants access.** We do not sell learner data. Anything
  recruiter- or funder-facing is a **consented introduction**, never a data feed. This is stated
  publicly on `record.html` and is the POPIA posture, not just copy.

### The Credit Refund — the mechanism (boss directive, 22 Jul 2026)

The hero leads on the **Credit Refund**: *apply the school credits you already hold toward the cost
of going further.* Mrs Kgomotso's framing — **"changing the game in how learner bursaries are
awarded and democratising access to education"** — bursaries awarded on credits already earned
rather than on need, paperwork or connections.

This is the concrete mechanism behind `BRAND.promise`, and it is the same idea as "rewarding
students for doing well" stated as a product. It runs on `index.html#refund`.

> ⚠️ **The refund is not open for applications and must not be advertised as if it were.**
> "Apply for a credit refund" implies a funded pool, an application process and a payout. None of
> those exist yet. Advertising a bursary that cannot be claimed is a consumer-protection exposure
> and — worse — burns trust with exactly the learners this is for.
>
> The CTA therefore reads **`BRAND.refundCta` = "Register your interest"** → `contact.html`.
> **The day a funded pool exists, flip `refundCta` and `refundCtaUrl` in `brand.js`** and update the
> status card in the `#refund` section. Both are one-line changes; that is deliberate.

**Not on the public site yet:** recruiters, banks, credit products, or global-expansion claims.
That infrastructure does not exist, and promising it early is both a compliance and a credibility
exposure. See §7.

**Audience — two ways in:**
- **Learners** — build a credit record that follows them between employers.
- **Companies** — turn training spend into scorecard points, with the option of a branded academy.

**Primary calls to action:** `Explore Modules` · `For Companies` · `Talk to Our Team`

### Brand posture (important — boss directive, 21 Jul 2026)

The public brand is **Credit for Credit**, and nothing else. The site is deliberately
**company-neutral**: it is not positioned as any single company's academy. Individual companies
(SPS, Maziv, Fungi Utilities, Inhance) are prospects and future tenants, **not** the brand.
Centenary Networks stays a holding company and is **not named on the public site**.

The delivery partner is therefore **deliberately unnamed**: copy says "delivered through an
accredited QCTO Skills Development Provider." See §4 before changing this.

---

## 2. The Engine — one platform, many academies

Credit for Credit is the platform *and* the default skin. Every company-branded academy is the
**same engine re-skinned** via `brand.js`.

The commercial motion: companies see the platform → they want it under their own brand →
we stand up a tenant instance for them. `companies.html` carries that pitch.

| Changes per company (edit `brand.js`) | Stays the same (the engine) |
|---|---|
| Academy / company name, logo, `logoAlt` | Page structure and layout |
| `colors` (indigo / gold / teal / header tints) | `styles.css`, `app.js` behaviour |
| Contact details, `formAction`, `formNext` | The catalogue model in `catalog.js` |
| `industry` framing, `tenant` name | The product spine (modules → credits → B-BBEE) |
| `provider` / `accredNo`, if naming one | Nav + footer rendering |

### To launch a company academy

1. Copy the repo, edit **`brand.js`** — set `tenant: "SPS"`, plus name, colours, contact, form target.
   Setting `tenant` switches the title to "SPS Academy" and the footer to "powered by Credit for Credit".
2. Drop the company logo into `tenants/` and point `BRAND.logo` at it.
3. Edit `catalog.js` if their module mix differs.
4. Review page copy for industry framing — identity names swap automatically, but positioning
   lines (e.g. "for a solar business") are a deliberate human edit.
5. Update `CNAME` to their domain.

`tenants/sps-dark-logo.svg` is kept as the first tenant asset.

---

## 3. Architecture

Plain static site — no build step, no dependencies. Open `index.html` and it runs.

| File | Purpose |
|---|---|
| `brand.js` | **The one file you edit to re-skin.** `window.BRAND` config + the `SITE` engine that renders the shared nav/footer, applies colour tokens, and fills `data-b` placeholders. |
| `styles.css` | Shared stylesheet. Colour tokens in `:root` are overridden at runtime by `BRAND.colors`. |
| `catalog.js` | `window.MODULES` — the module catalogue (content, not brand). |
| `app.js` | Shared behaviour: card rendering, catalogue filters/search, carousel, scroll reveals. |
| `docs/bee-skills-spec.md` | B-BBEE Skills Development data spec + the question list for the Empowered App walkthrough. |
| `creditforcredit-logo.svg`, `favicon.svg` | Platform brand marks. |
| `CNAME` | GitHub Pages custom domain. |

### Pages

| Page | Role |
|---|---|
| `index.html` | Home — hero, featured modules, categories, how it works, two audiences, trust, CTA |
| `modules.html` | Full catalogue with filters, search and modality segments |
| `course.html` | Module detail (`?c=slug`), rendered from `catalog.js` |
| `record.html` | **The Learner Credit Record** — what's on it, how it builds, who sees it |
| `about.html` | What the platform is, the spine, accreditation |
| `companies.html` | The employer offer **and the branded-academy pitch** |
| `contact.html` | Enquiry form (FormSubmit) |
| `thanks.html` | Form success page (`noindex`) |

### How a page wires up

```html
<body data-page="home" data-title="Learn while you earn credits">
  <nav id="nav"></nav>                 <!-- filled by SITE.renderNav()    -->
  <span data-b="academyName"></span>   <!-- filled by SITE.applyText()    -->
  <footer id="siteFooter"></footer>    <!-- filled by SITE.renderFooter() -->
```

`data-page` sets the active nav link; `data-title` builds the document title.
`data-b`, `data-b-href`, `data-b-action`, `data-b-value` etc. pull values straight from `BRAND`.

### Colour tokens

| Token | Value | Use |
|---|---|---|
| `--indigo` / `--indigo-deep` | `#4f46e5` / `#3730a3` | Primary buttons, links, active nav |
| `--gold` / `--gold-deep` | `#f0b429` / `#d99a12` | The "credit" accent — search button, highlights |
| `--teal` / `--teal-deep` | `#0d9488` / `#0f766e` | Badges, category tiles, ticks |
| `--soft` / `--soft-hover` | `#ddd9fb` / `#cec9f8` | Soft pills, breadcrumbs, enrol box |
| `--header` / `--header-2` | `#eceafb` / `#e0ddf8` | Nav bar, hero and page-head tints |

Never hardcode a brand hex in a page — use the token, or it won't re-skin.

- **Type:** Poppins (Google Fonts) with a system fallback stack.
- **Imagery:** topic-matched Unsplash photography on hero/cards/splits; everything else is inline SVG.
- **Motion:** scroll-reveal (`.reveal` + IntersectionObserver) and card hover-lift; respects `prefers-reduced-motion`.

---

## 4. Accreditation — read before editing

The public site references the qualification by its **public ID** (Occupational Certificate:
Computer Technician, NQF 5, ID 101408, 282 credits) and describes delivery through an
**unnamed** accredited QCTO Skills Development Provider.

`BRAND.provider` and `BRAND.accredNo` are intentionally **empty**. If you name a provider, fill
**both** — `brand.js` rebuilds the accreditation text automatically.

> **Never publish an accreditation number without the entity it belongs to.** A number floating
> free of its holder is worse than no number at all, and a client or the QCTO can check.

Non-accredited short courses must be labelled as such; only the Computer Technician pathway is the
accredited qualification.

---

## 5. Content Model

All module content lives in the **`window.MODULES` array** in `catalog.js`, shared by every page.

```js
{
  slug:     "ai-fundamentals",   // URL key → course.html?c=<slug>
  title:    "AI Fundamentals for the Workplace",
  topic:    "Business",          // filter + drives "what you'll learn" defaults
  level:    "Beginner",          // filter (Beginner…Executive, NQF 5)
  modality: "self-paced",        // self-paced | live | inperson | blended
  credits:  8,                   // credits toward NQF 5
  hours:    "6 hours",           // duration shown on card + detail
  img:      "<unsplash-id>",     // images.unsplash.com/photo-<id>
  lead:     "…",                 // description paragraph
  avail:    "Coming Soon",       // optional status → grey badge
  accred:   true                 // optional → flags the destination qualification
}
```

**Add a module:** add one object to `window.MODULES`. It appears in the catalogue, gets a
filterable card, and has a working detail page automatically. To feature it on the home row,
add its slug to the `order` array in `app.js`.

Filter lists (`TOPICS`, `LEVELS`) derive from the data with live counts — no filter edits needed.

---

## 6. Hosting & deploy

Static HTML/CSS/JS — no framework, no backend, no build.

**The workflow is two-stage. Don't skip ahead.**

1. **Build + preview here (current stage).** GitHub Pages from `main`, repo
   `sibusis-code/creditforcredit`, served at
   **https://sibusis-code.github.io/creditforcredit/**. This is the client-review URL.
   **Deploy = push** — every push to `main` rebuilds Pages (~1 min).

2. **Live deploy (later, client-approved).** Once the client signs off, they provide access to
   **Xneelo** and the site goes to **creditforcredit.org** from there.

> ⚠️ **Do not point creditforcredit.org at this repo.** The domain currently serves the client's
> reserve page and the live deploy is theirs to run. No `CNAME` file belongs in this repo, and the
> Pages custom-domain field stays empty until the client says otherwise.

At live-deploy time, remember to update `BRAND.formNext` in `brand.js` from the github.io preview
URL to `https://creditforcredit.org/thanks.html`, or the contact form redirects to the wrong host.

---

## 7. Open items

- [ ] **`hello@creditforcredit.org` must exist and be FormSubmit-activated**, or the contact form
      silently fails. The first submission triggers a one-time activation email — click it.
- [ ] **Client review** on the github.io preview URL, then live deploy to Xneelo (see §6).
- [ ] **At live deploy** — update `BRAND.formNext` to the creditforcredit.org host.
- [ ] **Real content** — final module details (credits, durations), photography, facilitator bios.
      Current content is illustrative; the footer says so.
- [ ] **Real phone number** — still a placeholder in `brand.js`.
- [ ] **Logo** — `creditforcredit-logo.svg` is a wordmark using a font stack; loaded via `<img>` it
      falls back to a system sans rather than Poppins. Outline the text if a designer finalises it.
- [ ] **First tenant instance** — stand up an SPS-branded academy from this engine once a company
      signs on (see §2).

### Beyond the site

- [ ] **Name protection is SA-only.** `creditforcredit.org` is registered and the name is reserved
      at **CIPC** — which does not protect it outside South Africa. For an international play, run a
      trademark check and take a defensive `.com` **before** the idea is public.
- [ ] **Empowered App logins from Thato** — the only hard blocker on the B-BBEE stream. Walk the
      demo against the question list in `docs/bee-skills-spec.md` §6.
- [ ] **Programme category** — settle whether a single module is recognised on its own or only the
      full pathway scores (`docs/bee-skills-spec.md` §5). This can change the employer pitch.
- [ ] **The record needs a backend.** `record.html` describes the model honestly as in build.
      Accounts, a real learner record and consented sharing are the next real engineering step —
      and the point at which POPIA obligations become live (`docs/bee-skills-spec.md` §4).
- [ ] **ESG stream** — review esgacademy.education and decide whether ESG is a module category, a
      second reporting stream off the same record, or both.
