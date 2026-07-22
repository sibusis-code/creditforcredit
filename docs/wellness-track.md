# Workplace Wellness — partner programme spec

**Partner:** Taryn McCormick — registered wellness specialist and HR specialist.
**Commercial model:** Credit for Credit sells her courses online for a commission (Mrs Kgomotso,
22 Jul 2026). She leads the wellness portion; we build and run the platform.

**Status:** 5 modules published as CPD, 3 marked Coming Soon. Live on the preview only —
**not to be deployed to the public domain until Taryn has signed off her profile** (see §4).

---

## 1. The rule that governs this whole stream

These courses are **`type:"cpd"`** in `catalog.js`. They earn a **certificate of completion**,
appear on the learner's credit record, and carry:

- **No NQF credits.** They do not ladder toward the Occupational Certificate: Computer Technician.
- **No B-BBEE Skills Development claim.** Employer spend on them is not scorecard spend.

> ⚠️ **"Taryn is an accredited wellness specialist" is a fact about her, not about her courses.**
> Practitioner registration is not programme accreditation. Until someone produces accreditation
> for *these specific courses* — the accreditation number and the qualification they map to — the
> site must not imply either. `app.js` suppresses every credit and scorecard claim for `cpd`
> courses; do not re-introduce one.

The commercial pitch is business value: absenteeism, retention, manager capability. That case is
strong on its own and does not need a compliance claim propping it up.

---

## 2. The programme, as supplied

### Track 1 — Individual (all levels)

| # | Module | Status |
|---|---|---|
| 1 | **Mental Resilience & Stress Mastery** — nervous system and stress responses; micro-mindfulness for busy workdays; reframing negative thought loops and emotional agility | **Published** |
| 2 | **Physical Vitality & Ergonomics** — ergonomic setups home/office; nutrition against the afternoon crash; sleep hygiene and restorative recovery | Coming Soon |
| 3 | **Sustainable Work Habits & Digital Balance** | Coming Soon — **title only, no outline supplied** |
| 4 | **Financial & Social Well-being** | Coming Soon — **title only, no outline supplied** |

### Track 2 — Line Management & Leadership Wellness Programme

Focus: empathetic leadership, team burnout prevention, sustainable workload management.
All four **published**. Each ends with a takeaway asset, which is the strongest selling point.

| # | Module | Takeaway asset |
|---|---|---|
| 1 | **Psychological Safety & Spotting Team Burnout** | Team Burnout Indicator Checklist & Psychological Safety Self-Assessment |
| 2 | **Empathetic Conversations & Supportive Check-ins** | Wellness Conversation Script & Support Escalation Flowchart |
| 3 | **Leading by Example & Manager Self-Care** | Leader Boundary Playbook & Workload Equity Audit Template |
| 4 | **Embedding Wellness into Team Operations** | Team Meeting Wellness Icebreaker Deck & Capacity Planning Framework |

---

## 3. What we invented, and what we didn't

Everything in the site copy traces to Taryn's outline. Two deliberate gaps:

- **`hours` is `"TBC"` on all eight modules.** We are not inventing durations for someone else's
  course — she'll see the site, and a made-up "3 hours" would be both wrong and embarrassing.
- **Modality is `self-paced` (online) throughout**, because Mrs Kgomotso's instruction was online
  first: *"build from the (also available in person) once we can the idea sold."* To be confirmed.

---

## 4. What we need from Taryn

**Blocking the public deploy:**

1. **Her profile** — biography, professional registration body and number, and a photograph, with
   her agreement to appear on a public website. `wellness.html` currently carries a visible
   "profile in progress" placeholder rather than invented credentials.

**Blocking full publication:**

2. **Accreditation status in writing** — do any of these courses carry SETA or QCTO credits? If yes,
   the accreditation number and the qualification they map to. If no, we stay on CPD, which is the
   current assumption.
3. **Track 1 modules 3 and 4** — key topics and objectives; we have titles only.
4. **Duration per module**, so `hours` stops saying TBC.
5. **Delivery format** — self-paced video, live facilitated, or blended? And group sizes for the
   manager track, which reads like it wants facilitation.
6. **The takeaway assets themselves** — the checklists, scripts and templates. They are the most
   concrete thing we're selling.

**Commercial (Mrs Kgomotso's call, recorded here):**

7. Commission split, pricing, and whether pricing follows the **Discovery/Worth pattern** she shared
   — an anchor "value" against a lower once-off fee. The enrol box is built to switch that on per
   module without rework.

---

## 5. POPIA — before a single enquiry is forwarded

The moment we pass an enquirer's details to Taryn, that is a **disclosure to a third party** and
needs consent collected at the point of enquiry. The Discovery/Worth screen Mrs Kgomotso shared is
the model, almost verbatim:

> *"I acknowledge that Worth is not part of Discovery Bank and consent to certain personal
> information, such as my name and ID number, being shared with Worth to enable my access to this
> course."*

Required before forwarding anything:

- A consent checkbox on the enquiry path, naming Taryn (or her practice) as the recipient and
  saying what is shared and why.
- Consent recorded with a timestamp and the exact wording agreed to.
- An agreement with Taryn covering what she may do with those details and what happens on request
  for deletion.

`contact.php` already logs enquiries to `../enquiries.log`; that log becomes the consent record and
must not be forwarded wholesale.

---

## 6. Duty of care

A mental health course is **education, not treatment**, and the site says so on `wellness.html`.
Taryn's own material already draws this line — Track 2 module 2 teaches *"knowing workplace
boundaries: signposting to HR/EAP without playing therapist"* — so the posture is hers, not
something we imposed.

The page signposts **SADAG** (sadag.org) rather than printing a helpline number, because a wrong
number on a mental health page is worse than no number. **Confirm the current SADAG helpline
numbers with them before adding any.**

---

## 7. Collaboration

Taryn asked for a shared Google Drive and a Trello board for tracking. Suggested split so there is
one source of truth per thing rather than three half-copies:

- **Course content and specs** — this repo, under `docs/`.
- **Progress and tasks** — Trello.
- **Raw assets** (video, templates, her profile photo) — the shared Drive.
