/* ===================================================================
   Credit for Credit — shared module catalog
   One source of truth used by index.html, modules.html and course.html.

   THREE COURSE TYPES. Get this wrong and we publish a false claim:

   1. CREDIT-BEARING (default — no `type` field). A small unit that
      ladders toward the Occupational Certificate: Computer Technician
      (NQF 5, ID 101408) and counts as B-BBEE Skills Development spend.

   2. `type:"cpd"` — professional development delivered by a partner
      through us. Earns a certificate of completion and sits on the
      learner's credit record, but carries NO NQF credits and is NOT
      scorecard spend.

   3. `type:"brokered"` — a course we do NOT deliver. We buy the seat on
      the learner's behalf; they study on the provider's own platform and
      receive the PROVIDER's certificate. No NQF credits, no scorecard
      claim, and app.js prints a non-affiliation line.

   Set `credits:0` for 2 and 3. app.js suppresses every credit/B-BBEE
   claim for both; never re-introduce one.

   Optional fields:
     partner     — CPD: who delivers it
     provider    — BROKERED: the institution, named exactly
     providerUrl — BROKERED: the course page. MUST be a verified source;
                   see docs/brokered-courses.md. Never guess a provider —
                   a wrong attribution is a new false claim.
     certificate — BROKERED: what the learner actually receives
     track       — grouping within a programme
     outcomes    — per-module "what you'll learn" (overrides the topic map)
     asset       — the takeaway template/checklist a learner keeps
   =================================================================== */
window.MODULES = [
  {slug:"ai-fundamentals", title:"AI Fundamentals for the Workplace", topic:"Business", level:"Beginner", modality:"self-paced", credits:8, hours:"6 hours", img:"1677442136019-21780ecad995",
   lead:"A practical, video-led introduction to artificial intelligence for non-technical staff — what it is, how it works, and how to use everyday AI tools confidently and responsibly."},
  {slug:"ai-tools-productivity", title:"AI Tools for Productivity", topic:"Business", level:"Beginner", modality:"self-paced", credits:6, hours:"5 hours", img:"1581091226825-a6a2a5aee158",
   lead:"Hands-on training in the AI tools transforming day-to-day work — writing assistants, research tools, data tools and workflow automation."},
  {slug:"responsible-ai", title:"Responsible & Ethical AI Use", topic:"Compliance", level:"Intermediate", modality:"self-paced", credits:6, hours:"5 hours", img:"1620712943543-bcc4688e7485",
   lead:"Using AI safely at work: data privacy, accuracy, bias, and the practical do's and don'ts of AI in a professional setting."},
  {slug:"ai-leaders", title:"AI for Leaders & Managers", topic:"Leadership", level:"Intermediate", modality:"self-paced", credits:8, hours:"7 hours", img:"1552664730-d307ca884978",
   lead:"For decision-makers: identifying AI opportunities, managing AI-enabled teams, and leading responsible adoption across your organisation."},
  {slug:"new-venture", title:"AI & New Venture Creation", topic:"Computer Science", level:"Intermediate", modality:"self-paced", credits:10, hours:"8 hours", img:"1559136555-9303baea8ebd", avail:"Coming Soon",
   lead:"Explore how AI is enabling new business models and entrepreneurial opportunities across Africa's growing digital economy."},
  {slug:"computer-technician", title:"Occupational Certificate: Computer Technician", topic:"Accredited", level:"NQF 5", modality:"blended", credits:282, hours:"12–18 months", img:"1581092160562-40aa08e78837", accred:true,
   lead:"The nationally accredited destination qualification — covering the technical foundations of computer systems, hardware, networking and support. Qualification ID 101408 · 282 credits · NQF Level 5, delivered through an accredited QCTO Skills Development Provider."},
  {slug:"deploying-tinyml", title:"Deploying TinyML", topic:"Computer Science", level:"Advanced", modality:"self-paced", type:"brokered", credits:0, hours:"See provider", img:"1593376853899-fbb47a057fa0",
   provider:"HarvardX", providerUrl:"https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml", certificate:"HarvardX certificate",
   lead:"The hands-on end of the TinyML series: getting a trained model onto an actual microcontroller and making it run. Suits engineers who want embedded machine learning working on real hardware, not just in a notebook."},
  {slug:"fundamentals-tinyml", title:"Fundamentals of TinyML", topic:"Computer Science", level:"Intermediate", modality:"self-paced", type:"brokered", credits:0, hours:"5 weeks", img:"1518770660439-4636190af475",
   provider:"HarvardX", providerUrl:"https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml", certificate:"HarvardX certificate",
   lead:"Where machine learning meets very small devices. A grounding in the maths, the vocabulary and the constraints of running models on hardware with almost no memory — the entry point to the TinyML series."},
  {slug:"ai-strategy", title:"AI Strategy for Business Leaders: From Hype to Impact", topic:"Business", level:"Executive", modality:"live", type:"brokered", credits:0, hours:"See provider", img:"1542744173-8e7e53415bb0",
   provider:"Harvard Professional & Executive Development", providerUrl:"https://professional.dce.harvard.edu/programs/ai-strategy-for-business-leaders/", certificate:"Harvard DCE certificate",
   lead:"For leaders who have to decide where AI actually earns its keep. Separates the parts of the hype cycle worth acting on from the parts worth ignoring, and turns that into a plan you can fund."},
  {slug:"ai-medicine-foundations", title:"AI in Medicine: Foundations and Applications", topic:"Health & Medicine", level:"Intermediate", modality:"self-paced", type:"brokered", credits:0, hours:"3–4 hours", img:"1576091160550-2173dba999ef",
   provider:"Harvard Medical School", providerUrl:"https://learn.hms.harvard.edu/programs/ai-medicine-foundations-and-applications-medical-practice-and-research", certificate:"Harvard Medical School certificate of completion",
   lead:"The technical foundations of AI taught by Harvard Medical School faculty, for clinicians and health professionals who want to understand what these systems do before trusting them with patients."},
  {slug:"ai-ethics-business", title:"AI Ethics in Business: Managing Bias and Ethical Usage", topic:"Business", level:"Intermediate", modality:"live", credits:6, hours:"5 hours", img:"1488229297570-58520851e868",
   lead:"Prepare for the future and learn the best way to use new AI tools and capabilities responsibly, managing bias and ethical risk."},
  {slug:"ai-in-action", title:"AI in Action: Organizational Strategy for Responsible Adoption", topic:"Social Sciences", level:"Executive", modality:"blended", type:"brokered", credits:0, hours:"See provider", img:"1504384308090-c894fdcc538d",
   provider:"Harvard Kennedy School", providerUrl:"https://www.hks.harvard.edu/educational-programs/executive-education/ai-action", certificate:"Harvard Kennedy School certificate",
   lead:"An executive programme that ends with something concrete — an AI roadmap for your organisation and the scaffolding for a pilot, rather than a set of slides about the future."},
  {slug:"cybersecurity", title:"Cybersecurity: The Intersection of Policy and Technology", topic:"Social Sciences", level:"Executive", modality:"blended", type:"brokered", credits:0, hours:"See provider", img:"1550751827-4bd374c3f58b",
   provider:"Harvard University", providerUrl:"https://pll.harvard.edu/course/cybersecurity-intersection-policy-and-technology", certificate:"Harvard certificate",
   lead:"Written for the gap where most breaches actually happen — between the people who understand the technology and the people who set the policy. Puts both in the same conceptual framework."},
  {slug:"ai-medicine-nlp", title:"AI in Medicine: Natural Language Processing", topic:"Health & Medicine", level:"Advanced", modality:"self-paced", type:"brokered", credits:0, hours:"3–4 hours", img:"1518186285589-2f7649de83e0",
   provider:"Harvard Medical School", providerUrl:"https://pll.harvard.edu/course/ai-medicine-natural-language-processing", certificate:"Harvard Medical School certificate of completion",
   lead:"How large language models handle clinical text — summarising, translating, pulling out key terms and answering questions against the kind of messy notes real medicine produces."},
  {slug:"cs-for-lawyers", title:"Computer Science for Lawyers", topic:"Social Sciences", level:"Intermediate", modality:"self-paced", type:"brokered", credits:0, hours:"See provider", img:"1589829545856-d10d557cf95f",
   provider:"HarvardX", providerUrl:"https://pll.harvard.edu/course/computer-science-lawyers", certificate:"HarvardX certificate",
   lead:"CS50 rebuilt for the legal profession — top-down rather than bottom-up, covering algorithms, cloud, databases and security at the level a lawyer actually argues about. No programming background needed."},
  {slug:"ai-essentials-business", title:"AI Essentials for Business", topic:"Business", level:"Beginner", modality:"self-paced", type:"brokered", credits:0, hours:"4 weeks", img:"1454165804606-c3d57bc86b40",
   provider:"Harvard Business School Online", providerUrl:"https://pll.harvard.edu/course/ai-essentials-business", certificate:"HBS Online certificate",
   lead:"A foundation in what AI means for a business — the models, the business cases, and how to adopt generative AI responsibly rather than enthusiastically."},
  {slug:"agentic-ai", title:"Agentic AI Foundations: Business Applications and Risks", topic:"Computer Science", level:"Advanced", modality:"self-paced", credits:10, hours:"8 hours", img:"1531746790731-6c087fecd65a",
   lead:"Understand agentic AI — autonomous AI systems — their business applications, opportunities and risks."},
  {slug:"competing-age-ai", title:"Competing in the Age of AI", topic:"Business", level:"Executive", modality:"self-paced", type:"brokered", credits:0, hours:"See provider", img:"1485827404703-89b55fcc595e",
   provider:"Harvard Business School", providerUrl:"https://pll.harvard.edu/course/competing-age-ai-virtual", certificate:"Harvard Business School certificate",
   lead:"The strategic argument from Iansiti and Lakhani: rebuilding a firm around data and AI removes the limits on scale and scope that have constrained businesses for centuries — and what that means if you are the incumbent."},
  {slug:"leadership-emerging-tech", title:"Leadership in Emerging Technology: Security, Strategy & Risk", topic:"Social Sciences", level:"Executive", modality:"inperson", type:"brokered", credits:0, hours:"See provider", img:"1521737604893-d14cc237f11d",
   provider:"Harvard Kennedy School", providerUrl:"https://www.hks.harvard.edu/executive-education/technology-and-leadership-executive-education-programs", certificate:"Harvard Kennedy School certificate",
   lead:"For senior leaders carrying responsibility for technologies they did not train in — the technical, strategic and policy grounding needed to ask the right questions and carry the risk knowingly."},
  {slug:"ai-medicine-signal", title:"AI in Medicine: Biomedical Signal Interpretation", topic:"Health & Medicine", level:"Advanced", modality:"self-paced", type:"brokered", credits:0, hours:"3–4 hours", img:"1559757148-5c350d0d3c56",
   provider:"Harvard Medical School", providerUrl:"https://pll.harvard.edu/course/ai-medicine-biomedical-signal-interpretation", certificate:"Harvard Medical School certificate of completion",
   lead:"How AI reads biomedical signals directly — the techniques that surface patterns in raw physiological data that a human reader would not reliably catch."},

  /* ---------------------------------------------------------------
     ESG ACADEMY — brokered. esgacademy.education publishes CATEGORIES,
     not individual course titles, so these are listed at category level.
     Do not invent course names they do not publish.
     --------------------------------------------------------------- */
  {slug:"esg-environmental", title:"Environmental Impact Training", topic:"ESG", level:"All levels", modality:"self-paced", type:"brokered", credits:0, hours:"Self-paced", img:"1441974231531-c6227db76b6e",
   provider:"ESG Academy", providerUrl:"https://esgacademy.education/", certificate:"ESG Academy certificate of completion",
   lead:"The planet-first side of ESG: climate action, decarbonisation, the circular economy and biodiversity — what the terms mean and what they demand of an operating business."},
  {slug:"esg-social", title:"Social Impact Training", topic:"ESG", level:"All levels", modality:"self-paced", type:"brokered", credits:0, hours:"Self-paced", img:"1531482615713-2afd69097998",
   provider:"ESG Academy", providerUrl:"https://esgacademy.education/", certificate:"ESG Academy certificate of completion",
   lead:"Human rights, labour practices, diversity and inclusion, community engagement and responsible sourcing — the social half of ESG, including the parts that reach down your supply chain."},
  {slug:"esg-governance", title:"Effective ESG Governance", topic:"ESG", level:"Managers", modality:"self-paced", type:"brokered", credits:0, hours:"Self-paced", img:"1454165804606-c3d57bc86b40",
   provider:"ESG Academy", providerUrl:"https://esgacademy.education/", certificate:"ESG Academy certificate of completion",
   lead:"Business ethics, compliance, anti-corruption, risk management and ESG reporting — written for the people who have to sign the report and answer for it at board level."},
  {slug:"esg-foundations", title:"ESG Foundations & Frameworks", topic:"ESG", level:"All levels", modality:"self-paced", type:"brokered", credits:0, hours:"Self-paced", img:"1507925921958-8a62f3d1a50d",
   provider:"ESG Academy", providerUrl:"https://esgacademy.education/", certificate:"ESG Academy certificate of completion",
   lead:"The cross-cutting groundwork every ESG role assumes you already have: the major frameworks and standards, materiality assessment, and how sustainable finance actually works."},
  {slug:"esg-sector", title:"Sector-Specific ESG", topic:"ESG", level:"Intermediate", modality:"self-paced", type:"brokered", credits:0, hours:"Self-paced", img:"1581091226825-a6a2a5aee158",
   provider:"ESG Academy", providerUrl:"https://esgacademy.education/", certificate:"ESG Academy certificate of completion",
   lead:"ESG as it lands in a particular industry — aviation, logistics, agriculture, manufacturing and others — because the material issues differ enormously between them."},

  /* ---------------------------------------------------------------
     WORKPLACE WELLNESS — partner programme, delivered by Taryn
     McCormick. type:"cpd" => certificate of completion only. These
     carry NO NQF credits and are NOT B-BBEE Skills Development spend.
     `hours` is "TBC" deliberately: durations are Taryn's to confirm and
     we do not invent them. See docs/wellness-track.md.
     --------------------------------------------------------------- */

  /* Track 1 — Individual (all levels) */
  {slug:"wellness-mental-resilience", title:"Mental Resilience & Stress Mastery", topic:"Wellness", level:"All levels", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1506126613408-eca07ce68773",
   partner:"Taryn McCormick", track:"Individual",
   lead:"Build practical, daily strategies to manage workplace stress and prevent overwhelm — how the stress response actually works, and what to do about it on an ordinary Tuesday.",
   outcomes:["Understand the nervous system and your own stress responses","Use micro-mindfulness techniques that fit a busy workday","Reframe negative thought loops and build emotional agility","Recognise the difference between pressure and sustained overwhelm"]},

  {slug:"wellness-physical-vitality", title:"Physical Vitality & Ergonomics", topic:"Wellness", level:"All levels", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1517836357463-d25dfeac3438", avail:"Coming Soon",
   partner:"Taryn McCormick", track:"Individual",
   lead:"Optimise physical energy, posture and daily habits regardless of work environment — the body half of wellness, learnable online.",
   outcomes:["Set up an ergonomic workspace at home and in the office","Use nutrition strategies that prevent the afternoon energy crash","Apply the science of sleep hygiene and restorative recovery","Build movement and stretch breaks into a desk-bound day"]},

  {slug:"wellness-sustainable-habits", title:"Sustainable Work Habits & Digital Balance", topic:"Wellness", level:"All levels", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1591228127791-8e2eaef098d3", avail:"Coming Soon",
   partner:"Taryn McCormick", track:"Individual",
   lead:"Working in a way you can keep up — boundaries with always-on technology, and habits that hold when the workload rises. Detailed outline in development."},

  {slug:"wellness-financial-social", title:"Financial & Social Well-being", topic:"Wellness", level:"All levels", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1573497019940-1c28c88b4f3e", avail:"Coming Soon",
   partner:"Taryn McCormick", track:"Individual",
   lead:"The financial and social pressures that drive a great deal of workplace stress, and the habits that ease them. Detailed outline in development."},

  /* Track 2 — Line Management & Leadership Wellness Programme */
  {slug:"wellness-psychological-safety", title:"Psychological Safety & Spotting Team Burnout", topic:"Wellness", level:"Managers", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1600880292203-757bb62b4baf",
   partner:"Taryn McCormick", track:"Line Management & Leadership",
   asset:"Team Burnout Indicator Checklist & Psychological Safety Self-Assessment",
   lead:"Equip managers to recognise the early warning signs of distress in a team, and to build the kind of trust where people say something before it becomes a crisis.",
   outcomes:["Identify behavioural changes that signal burnout or a mental health struggle","Create a culture where people feel safe speaking up","Tell temporary workload stress apart from chronic fatigue","Act early, at the point where acting still helps"]},

  {slug:"wellness-empathetic-conversations", title:"Empathetic Conversations & Supportive Check-ins", topic:"Wellness", level:"Managers", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1552581234-26160f608093",
   partner:"Taryn McCormick", track:"Line Management & Leadership",
   asset:"Wellness Conversation Script & Support Escalation Flowchart",
   lead:"How to hold a sensitive wellness conversation confidently and ethically — including where a manager's role stops.",
   outcomes:["Structure an effective, human-centred one-on-one check-in","Practise active listening and empathetic framing","Know the workplace boundaries — signpost to HR or an EAP rather than playing therapist","Escalate appropriately when someone needs more than a manager can give"]},

  {slug:"wellness-leading-by-example", title:"Leading by Example & Manager Self-Care", topic:"Wellness", level:"Managers", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1573496359142-b8d87734a5a2",
   partner:"Taryn McCormick", track:"Line Management & Leadership",
   asset:"Leader Boundary Playbook & Workload Equity Audit Template",
   lead:"Prevent leader burnout while modelling the habits you want the team to have — because they copy what you do, not what you say.",
   outcomes:["See the ripple effect of manager behaviour, from after-hours email to skipped breaks","Manage leadership fatigue and set boundaries upward","Delegate and distribute workload effectively","Protect your own capacity without dropping the team"]},

  {slug:"wellness-embedding-wellness", title:"Embedding Wellness into Team Operations", topic:"Wellness", level:"Managers", modality:"self-paced", type:"cpd", credits:0, hours:"TBC", img:"1544367567-0f2fcb009e0b",
   partner:"Taryn McCormick", track:"Line Management & Leadership",
   asset:"Team Meeting Wellness Icebreaker Deck & Capacity Planning Framework",
   lead:"Turn well-being from an initiative into the way the team runs day to day — in the meetings, the workflows and the planning.",
   outcomes:["Redesign meetings for lower fatigue (25- and 50-minute standards)","Build wellness micro-practices into team workflows","Measure team capacity accurately to avoid chronic over-allocation","Make the change stick without adding another process"]}
];

/* Labels + helpers shared across pages */
window.MODALITY = {
  "self-paced":"Online self-paced",
  "live":"Online instructor led",
  "inperson":"In-person",
  "blended":"Blended"
};
window.TOPICS = ["Business","Compliance","Leadership","Computer Science","Health & Medicine","Social Sciences","ESG","Wellness","Accredited"];
window.LEVELS = ["Beginner","Intermediate","Advanced","Executive","All levels","Managers","NQF 5"];

window.imgUrl = function(id, w){ return "https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&w="+(w||700)+"&q=80"; };
