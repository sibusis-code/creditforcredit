# Brokered courses — provenance and open questions

**The model** (Mrs Kgomotso, 22 Jul 2026): *"when an employee or executive chooses to study from
them, we then buy the course on their behalf and they study through them."*

We list courses we do **not** deliver. The learner studies on the provider's platform and receives
**the provider's** certificate. `type:"brokered"` in `catalog.js`.

---

## 1. Why this mattered more than it looked

Twelve entries were already in the catalogue under Harvard-derived titles, **presented as our own
credit-bearing modules** — each rendering *"credits toward the Occupational Certificate: Computer
Technician"* and *"supports your B-BBEE Skills Development scorecard"*. Several `lead` descriptions
were also near-verbatim from the edX course pages.

That was live on creditforcredit.org. Mrs Kgomotso's instruction is what fixed it: describing the
arrangement accurately — *we buy the seat, they teach it* — removes the false claim. Her own phrase
for it was **"the Harvard scenario"**, so the intent was always to list other people's courses; the
platform simply had no way to express that.

> ⚠️ **Never guess a provider.** A wrong attribution replaces one false claim with another. Every
> entry below has a verified source URL. Anything unverified stays out of the brokered set.

---

## 2. Verified attributions

| Course (slug) | Provider | Source |
|---|---|---|
| `fundamentals-tinyml` | HarvardX (with Google TensorFlow) | [edX](https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml) |
| `deploying-tinyml` | HarvardX | [edX](https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml) |
| `cs-for-lawyers` | HarvardX (CS50) | [Harvard PLL](https://pll.harvard.edu/course/computer-science-lawyers) |
| `cybersecurity` | Harvard University | [Harvard PLL](https://pll.harvard.edu/course/cybersecurity-intersection-policy-and-technology) |
| `ai-medicine-foundations` | Harvard Medical School (HMX) | [HMS](https://learn.hms.harvard.edu/programs/ai-medicine-foundations-and-applications-medical-practice-and-research) |
| `ai-medicine-nlp` | Harvard Medical School (HMX) | [Harvard PLL](https://pll.harvard.edu/course/ai-medicine-natural-language-processing) |
| `ai-medicine-signal` | Harvard Medical School (HMX) | [Harvard PLL](https://pll.harvard.edu/course/ai-medicine-biomedical-signal-interpretation) |
| `competing-age-ai` | Harvard Business School | [Harvard PLL](https://pll.harvard.edu/course/competing-age-ai-virtual) |
| `ai-essentials-business` | Harvard Business School Online | [Harvard PLL](https://pll.harvard.edu/course/ai-essentials-business) |
| `ai-in-action` | Harvard Kennedy School | [HKS](https://www.hks.harvard.edu/educational-programs/executive-education/ai-action) |
| `leadership-emerging-tech` | Harvard Kennedy School | [HKS exec ed](https://www.hks.harvard.edu/executive-education/technology-and-leadership-executive-education-programs) |
| `ai-strategy` | Harvard Professional & Executive Development | [Harvard DCE](https://professional.dce.harvard.edu/programs/ai-strategy-for-business-leaders/) |
| `esg-*` (5 entries) | ESG Academy | [esgacademy.education](https://esgacademy.education/) |

**All `lead` descriptions were rewritten in our own words.** Do not paste provider marketing copy
back in.

**ESG Academy publishes categories, not course titles** — Environmental Impact, Social Impact, ESG
Governance, Cross Cutting, Sector Specific. Our five entries sit at that level deliberately. Do not
invent course names they do not publish.

---

## 3. Deliberately NOT reclassified

These have generic titles and no confirmed external source. They remain credit-bearing:

`ai-fundamentals` · `ai-tools-productivity` · `responsible-ai` · `ai-leaders` · `new-venture` ·
`ai-ethics-business` · `agentic-ai`

**Someone should confirm these are genuinely our own content.** If any turn out to be third-party,
they need the same treatment. `computer-technician` is ours and accredited — leave it alone.

---

## 4. Open commercial questions

1. **ESG Academy — relationship or not?** Are we a reseller/affiliate with an agreement, or simply
   buying seats like any customer? Both are workable, but they are described differently, and right
   now the site says only that we purchase on the learner's behalf.
2. **Cost per seat.** HarvardX courses are typically **free to audit and paid only for the verified
   certificate** — which is exactly what Mrs Kgomotso meant by *"the courses they offer for free."*
   Harvard Medical School HMX short courses start around **$495**. Executive programmes are
   substantially more. Confirm current prices before quoting anyone.
3. **Who pays whom?** Does the client pay us and we purchase, or do we introduce and they buy
   direct? The site currently says we buy on their behalf.
4. **Margin.** Is there a markup on brokered seats, or is this a service that makes the pack
   attractive and earns elsewhere?
5. **Refunds and failure.** If someone doesn't finish a paid seat, who carries it?

---

## 5. The pricing story worth using

The audit-versus-certificate split is genuinely strong for a corporate pitch: a company can offer
its people a prestigious catalogue at little cost, paying only for the certificates people actually
earn. It rewards completion instead of enrolment. That is worth saying out loud to SPS.

---

## 6. Trademark caution

Naming an institution on a commercial page implies a relationship. Buying someone a seat needs
nobody's permission, but the pages carry an explicit non-affiliation line (rendered by `app.js` for
every brokered course) modelled on the Discovery/Worth disclaimer Mrs Kgomotso shared:
*"Worth is not part of Discovery Bank."*

Do not use provider logos, and do not describe us as a partner, agent or authorised reseller of any
of them unless an agreement actually exists.
