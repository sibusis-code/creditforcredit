/* ===================================================================
   Credit for Credit — shared module catalog
   One source of truth used by index.html, modules.html and course.html.

   TWO COURSE TYPES. Get this wrong and we publish a false claim:

   1. CREDIT-BEARING (default — no `type` field). A small unit that
      ladders toward the Occupational Certificate: Computer Technician
      (NQF 5, ID 101408) and counts as B-BBEE Skills Development spend.

   2. `type:"cpd"` — professional development delivered by a partner.
      Earns a certificate of completion and sits on the learner's credit
      record, but carries NO NQF credits and is NOT scorecard spend.
      Set `credits:0`. app.js suppresses every credit/B-BBEE claim for
      these; never re-introduce one.

   Optional fields for partner/CPD courses:
     partner  — who delivers it, shown as attribution
     track    — grouping within a programme
     outcomes — per-module "what you'll learn" (overrides the topic map)
     asset    — the takeaway template/checklist a learner keeps
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
  {slug:"deploying-tinyml", title:"Deploying TinyML", topic:"Computer Science", level:"Advanced", modality:"self-paced", credits:12, hours:"10 hours", img:"1593376853899-fbb47a057fa0",
   lead:"Learn to program in TensorFlow Lite for microcontrollers, write the code, and deploy your model to your very own tiny microcontroller — implementing an entire TinyML application."},
  {slug:"fundamentals-tinyml", title:"Fundamentals of TinyML", topic:"Computer Science", level:"Intermediate", modality:"self-paced", credits:8, hours:"7 hours", img:"1518770660439-4636190af475",
   lead:"Focusing on the basics of machine learning and embedded systems, this course introduces you to the “language” of TinyML."},
  {slug:"ai-strategy", title:"AI Strategy for Business Leaders: From Hype to Impact", topic:"Business", level:"Executive", modality:"live", credits:8, hours:"6 hours", img:"1542744173-8e7e53415bb0",
   lead:"Leverage new technologies to build real, measurable value for your organisation — moving AI from hype to impact."},
  {slug:"ai-medicine-foundations", title:"AI in Medicine: Foundations and Applications", topic:"Health & Medicine", level:"Intermediate", modality:"self-paced", credits:10, hours:"9 hours", img:"1576091160550-2173dba999ef",
   lead:"Explore the foundational principles of artificial intelligence and its transformative applications in medicine and biomedical research."},
  {slug:"ai-ethics-business", title:"AI Ethics in Business: Managing Bias and Ethical Usage", topic:"Business", level:"Intermediate", modality:"live", credits:6, hours:"5 hours", img:"1488229297570-58520851e868",
   lead:"Prepare for the future and learn the best way to use new AI tools and capabilities responsibly, managing bias and ethical risk."},
  {slug:"ai-in-action", title:"AI in Action: Organizational Strategy for Responsible Adoption", topic:"Social Sciences", level:"Executive", modality:"blended", credits:10, hours:"8 hours", img:"1504384308090-c894fdcc538d",
   lead:"AI in Action provides the insights and tools you'll need to understand and utilise AI in all its forms across your organisation."},
  {slug:"cybersecurity", title:"Cybersecurity: The Intersection of Policy and Technology", topic:"Social Sciences", level:"Executive", modality:"blended", credits:10, hours:"8 hours", img:"1550751827-4bd374c3f58b",
   lead:"An executive program exploring how policy and technology, together, can address the critical threats of the cyber world."},
  {slug:"ai-medicine-nlp", title:"AI in Medicine: Natural Language Processing", topic:"Health & Medicine", level:"Advanced", modality:"self-paced", credits:12, hours:"10 hours", img:"1518186285589-2f7649de83e0",
   lead:"Discover how natural language processing is applied in medicine — from clinical notes to the research literature."},
  {slug:"cs-for-lawyers", title:"Computer Science for Lawyers", topic:"Social Sciences", level:"Intermediate", modality:"self-paced", credits:8, hours:"7 hours", img:"1589829545856-d10d557cf95f",
   lead:"A practical grounding in the computer science concepts every modern legal professional should understand."},
  {slug:"ai-essentials-business", title:"AI Essentials for Business", topic:"Business", level:"Beginner", modality:"self-paced", credits:6, hours:"5 hours", img:"1454165804606-c3d57bc86b40",
   lead:"The essential AI knowledge every business professional needs to stay relevant and add value."},
  {slug:"agentic-ai", title:"Agentic AI Foundations: Business Applications and Risks", topic:"Computer Science", level:"Advanced", modality:"self-paced", credits:10, hours:"8 hours", img:"1531746790731-6c087fecd65a",
   lead:"Understand agentic AI — autonomous AI systems — their business applications, opportunities and risks."},
  {slug:"competing-age-ai", title:"Competing in the Age of AI", topic:"Business", level:"Executive", modality:"self-paced", credits:8, hours:"6 hours", img:"1485827404703-89b55fcc595e",
   lead:"Learn how leading organisations compete and win in the age of AI, and what it means for your strategy."},
  {slug:"leadership-emerging-tech", title:"Leadership in Emerging Technology: Security, Strategy & Risk", topic:"Social Sciences", level:"Executive", modality:"inperson", credits:12, hours:"3 days", img:"1521737604893-d14cc237f11d",
   lead:"An executive program equipping leaders with the technical, strategic and policy foundations to navigate critical emerging technologies."},
  {slug:"ai-medicine-signal", title:"AI in Medicine: Biomedical Signal Interpretation", topic:"Health & Medicine", level:"Advanced", modality:"self-paced", credits:12, hours:"10 hours", img:"1559757148-5c350d0d3c56",
   lead:"Learn about advances in interpreting biomedical signals and the use of machine learning and deep learning to aid analysis and diagnosis."},

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
window.TOPICS = ["Business","Compliance","Leadership","Computer Science","Health & Medicine","Social Sciences","Wellness","Accredited"];
window.LEVELS = ["Beginner","Intermediate","Advanced","Executive","All levels","Managers","NQF 5"];

window.imgUrl = function(id, w){ return "https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&w="+(w||700)+"&q=80"; };
