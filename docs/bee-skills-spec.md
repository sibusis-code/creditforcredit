# B-BBEE Skills Development — data spec (skills portion only)

**Status:** draft, written from the outside. Nobody on our side has seen the Empowered App yet —
we are waiting on logins from Thato. The point of this document is to walk into that demo with a
design to validate rather than a blank page.

**Scope:** the **Skills Development** element only. Not ownership, management control, enterprise
and supplier development, or socio-economic development. That is the boss's instruction — *"we can
just do the skills portion for now."*

> ⚠️ **Nothing in this document is a verified B-BBEE figure.** Every threshold, weighting, target
> and category letter below is marked **[TBC]** and must be confirmed against the **Amended B-BBEE
> Codes of Good Practice** and, more importantly, against **the client's own verification agency** —
> agencies differ on evidence they will accept. Do not quote any number from this file to a client.

---

## 1. Why this matters to the platform

We already sell the employer side on B-BBEE: *"skills spend that scores."* Today that is a claim in
marketing copy. The moment a client asks *"so what will this actually do to my scorecard?"* we need
to answer with their numbers, not a brochure.

That answer is a calculation over a **training register** — who was trained, on what, at what cost,
with what demographics, and what happened afterwards. The platform is already the system of record
for most of those fields, because it is where the learning happens. This spec is about getting
those fields into a shape a B-BBEE calculation can consume.

This is also the first real consumer of the **learner credit record** (see `record.html`): the
employer-facing scorecard view is the record, aggregated across a company's people.

---

## 2. What the Skills Development element measures

At the level of structure — not numbers — the element is scored on roughly these axes. **Confirm
each against the Amended Codes [TBC]:**

| Axis | What it asks | Notes |
|---|---|---|
| **Skills spend** | Training spend on black employees as a percentage of the **leviable amount** (the payroll figure the Skills Development Levy is calculated on) | The denominator is a payroll number we will never hold — it comes from the client's finance/payroll. **[TBC]** exact definition |
| **Learner categories** | Spend is recognised differently depending on the **type** of learning programme, per the **Learning Programme Matrix** (the Category A–F classification) | Which category our credit-bearing modules fall into is **the single most important open question** — see §5 |
| **Demographics** | Black, black female, and youth splits; disability is weighted separately | Requires collecting demographic data from learners — see §6 |
| **Unemployed learners** | A separate line for learners who are not employees of the company | Relevant if a client sponsors non-staff, which is a real scenario for us |
| **Absorption** | Whether learners are subsequently employed/retained | We may be able to evidence completion but **not** absorption — that is the employer's data |
| **Bonus points** | Additional recognition for specific outcomes | **[TBC]** |

**What we can evidence** (because it happens on our platform): enrolment, attendance/progress,
completion, credits earned, results, accredited-provider delivery, cost per learner.

**What we cannot evidence** (and must take from the client): leviable amount, employment status,
salary/payroll, absorption outcomes, and any spend not incurred through us.

That split is the boundary of the integration. We should never present ourselves as calculating a
scorecard we only hold half the inputs for.

---

## 3. The data model we need

What the platform must capture per learner, per enrolment, to be usable as a training register.

### Learner

| Field | Purpose | Notes |
|---|---|---|
| `learnerId` | Internal key | |
| `idNumber` | Identity for verification | **Sensitive.** POPIA special personal information handling |
| `fullName` | Register + certificate | |
| `dateOfBirth` | Youth determination | Derive age at programme start, don't store "is youth" |
| `race` | Demographic scoring | Self-declared, consented. **Sensitive** |
| `gender` | Black-female line | Self-declared |
| `disabilityStatus` | Separately weighted | Self-declared, optional, **highly sensitive** |
| `nationality` / `citizenship` | Eligibility **[TBC]** | |
| `employmentStatus` | Employed vs unemployed learner line | Comes from the sponsoring employer, not the learner |
| `sponsorCompanyId` | Which client's scorecard this rolls up to | Null for self-funded learners |

### Enrolment

| Field | Purpose |
|---|---|
| `enrolmentId`, `learnerId`, `moduleSlug` | Keys — `moduleSlug` joins to `catalog.js` |
| `programmeCategory` | Learning Programme Matrix category **[TBC — see §5]** |
| `nqfLevel`, `credits` | From the module; the qualification link |
| `startDate`, `endDate`, `completionDate` | Period attribution — which measurement year the spend falls in |
| `status` | enrolled / in progress / completed / withdrawn |
| `result` | How well they did — the record's whole point |
| `costExVat` | The spend line |
| `costCategory` | Direct training cost vs admin vs other **[TBC]** |
| `providerName`, `providerAccredNo` | Accredited delivery evidence |
| `evidenceRefs[]` | Attendance register, assessment record, certificate, invoice |

### Company (client)

| Field | Purpose |
|---|---|
| `companyId`, `name`, `registrationNo` | |
| `measurementPeriodStart` / `End` | B-BBEE financial year — spend must be attributed to the right one |
| `leviableAmount` | **Supplied by the client.** We never derive this |
| `bbbeeElementTargets` | Whatever the agency is measuring them against **[TBC]** |

**Design note:** store atoms, derive scores. Never store "youth: true" or a computed point value —
store date of birth and programme dates, and calculate. Codes change; stored derivations rot
silently and become audit problems.

---

## 4. POPIA obligations (not optional)

The fields in §3 include race, ID number and disability status. Under POPIA, race and health/
disability are **special personal information** with a higher bar than ordinary personal data.

Requirements before any of this is collected:

- **Purpose specification** at the point of collection — "we collect this so your employer can
  claim the training on their B-BBEE scorecard", stated plainly, not buried in terms.
- **Explicit consent** for the special categories, recorded with a timestamp and the wording
  consented to. Consent must be withdrawable, and withdrawal must actually do something.
- **Demographic fields are optional to the learner.** A learner who declines still gets the module,
  the credits and the record — they just don't appear in that client's demographic line.
- **Minimum necessary sharing.** The employer sees their own learners' training data. They do not
  get a general window into a learner's record. This is the same consent principle stated publicly
  on `record.html`, applied on the employer side.
- **Retention policy** — B-BBEE evidence must be retained for verification **[TBC how long]**,
  which sets the floor. Set a defined ceiling too.
- **An information officer and a PAIA manual** are company-level obligations, not platform ones,
  but somebody must own them before this goes live.

If the platform genuinely goes international as the boss intends, GDPR (EU) and FERPA (US student
records) become live questions on the same data. Building consent-first now is what makes that
expansion possible instead of a rebuild.

---

## 5. The critical open question: programme category

Recognition under the Learning Programme Matrix depends on **which category** a programme falls
into, and the categories differ substantially in what they require — some demand a formal
institutional or workplace component, structured work experience, or a registered learnership
agreement.

**Our product is short, credit-bearing modules laddering toward the Occupational Certificate:
Computer Technician (NQF 5, ID 101408, 282 credits).** Whether *a single module* is recognised on
its own, or whether recognition attaches only to the **full qualification pathway**, materially
changes the employer pitch — possibly changes what we sell.

This must be settled with a verification agency or an accredited provider **before** we put a
scorecard number in front of any client. If the honest answer is "the module contributes, the
pathway scores", then that is what the sales conversation says.

---

## 6. Questions for Thato / the Empowered App walkthrough

Take this list into the demo.

**What it is**
1. Is Empowered App a **calculator** (you type numbers in, it scores) or a **system of record**
   (it holds the training register, learners, evidence)?
2. Which scorecard elements does it cover — all five, or is Skills Development standalone?
3. Whose product is it — built in-house, licensed, or white-labelled? Who owns the roadmap?
4. Which version of the Codes is it built against, and who maintains it when the Codes change?

**Data in**
5. What is the exact **input schema** for the skills section? Can we get a sample import file?
6. Can it **ingest a training register** in bulk (CSV/Excel), or is everything typed in by hand?
7. What does it require per learner that §3 above is missing?
8. How does it classify programmes — does it ask for a Learning Programme Matrix category directly?
   (This is the fastest route to answering §5.)

**Data out**
9. Can it export the calculation and the evidence pack a verification agency would want?
10. Does it produce anything client-facing we could put in an employer dashboard?

**Integration**
11. Is there an **API**, or is the realistic integration "we export, they import"?
12. Could it run inside our platform as an embedded view, or does it stay a separate tool we hand
    data to?
13. What does it cost, and per what — per company, per user, per assessment?

**Trust**
14. Has any calculation from it been through an actual verification audit and survived?
15. Where is the data hosted, and what are its POPIA commitments? If our learners' data flows into
    it, their compliance becomes ours.

---

## 7. Recommended shape of the integration (to be tested against the answers)

Assume, until told otherwise, that the least-risk shape is:

**We are the system of record. Empowered App is the calculator.**

The platform holds learners, enrolments, credits, results, evidence and cost. At the end of a
measurement period we produce a clean, structured **training register export** matching Empowered
App's input schema, and it does the scoring. We do not reimplement the Codes — they change, and
being wrong about a client's scorecard is a serious failure.

This keeps the credit record as the single source of truth (which is the whole strategy), avoids
duplicating a compliance engine somebody else already maintains, and means the export is reusable
if the client's agency prefers a different calculator.

Revisit this the moment we learn what the tool actually does.

---

## 8. Next steps

- [ ] Get logins from Thato and walk through the app against §6.
- [ ] Settle §5 — programme category — with a verification agency or the accredited provider.
- [ ] Confirm every **[TBC]** against the Amended Codes; delete this warning banner only when done.
- [ ] Draft the learner consent wording for the demographic fields (§4) before any UI is built.
- [ ] Decide where the training register lives, once the platform has a backend at all.
