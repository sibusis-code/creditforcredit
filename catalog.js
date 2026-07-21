/* ===================================================================
   Credit for Credit — shared module catalog
   One source of truth used by index.html, modules.html and course.html.
   Each module is a small, credit-bearing unit that ladders toward the
   Occupational Certificate: Computer Technician (NQF 5, ID 101408).
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
   lead:"Learn about advances in interpreting biomedical signals and the use of machine learning and deep learning to aid analysis and diagnosis."}
];

/* Labels + helpers shared across pages */
window.MODALITY = {
  "self-paced":"Online self-paced",
  "live":"Online instructor led",
  "inperson":"In-person",
  "blended":"Blended"
};
window.TOPICS = ["Business","Compliance","Leadership","Computer Science","Health & Medicine","Social Sciences","Accredited"];
window.LEVELS = ["Beginner","Intermediate","Advanced","Executive","NQF 5"];

window.imgUrl = function(id, w){ return "https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&w="+(w||700)+"&q=80"; };
