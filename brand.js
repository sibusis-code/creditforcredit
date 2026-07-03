/* ===================================================================
   BRAND CONFIG — the ONE file you edit to re-skin this site for another
   company (e.g. Maziv, Inhance, Fungi Utilities).

   Everything company-specific lives here: name, logo, colours, contact,
   the enquiry form target, and the accreditation details. The shared nav
   and footer are rendered from these values, so a new company launch is:
     1. edit the values in BRAND below
     2. drop in the new logo file and point BRAND.logo at it
     3. (optional) review page HEADLINES/COPY for industry framing
   The module catalogue is separate content — see catalog.js.
   =================================================================== */
window.BRAND = {
  /* ---- Identity ---- */
  academyName:  "SPS Academy",
  companyShort: "SPS",
  companyLegal: "SPS — Sustainable Power Solutions",
  companyFull:  "Sustainable Power Solutions",
  industry:     "solar business",
  tagline:      "Empowering the people who power SPS",
  logo:         "sps-dark-logo.svg",
  logoAlt:      "SPS — Sustainable Power Solutions",
  navCta:       "Talk to Our Team",

  /* ---- Brand colours (override the defaults in styles.css :root) ---- */
  colors: {
    orange:     "#f37424",
    orangeDeep: "#d55f16",
    amber:      "#faa819",
    green:      "#4da446",
    greenDeep:  "#2f8f3e",
    header:     "#e9f4ee",
    header2:    "#dcefe4"
  },

  /* ---- Contact ---- */
  email:     "accounts@cn.co.za",
  phone:     "012 345 6789",
  phoneHref: "tel:0123456789",
  hours:     "Monday–Friday, 08:00–17:00 SAST",
  location:  "Online · Nationwide, South Africa",

  /* ---- Enquiry form (FormSubmit.co) ---- */
  formAction:  "https://formsubmit.co/accounts@cn.co.za",
  formNext:    "https://sibusis-code.github.io/sps.academy/thanks.html",
  formSubject: "New enquiry from SPS Academy website",

  /* ---- Accreditation partner + legal (keep the numbers verbatim) ---- */
  provider:      "Centenary Networks (Pty) Ltd",
  providerShort: "Centenary Networks (QCTO)",
  providerCred:  "QCTO-accredited Skills Development Provider",
  qualification: "Occupational Certificate: Computer Technician",
  nqf:           "NQF 5",
  qualId:        "101408",
  credits:       "282",
  accredNo:      "07-QCTO/SDP180526182035",
  accredValid:   "15 May 2026 – 14 May 2031",

  /* ---- Social + misc ---- */
  socialLinkedin: "#",
  year:           "2026"
};

/* ---- Derived strings (built from the atoms above; do not edit) ---- */
BRAND.accredText =
  "Modules are credit-bearing toward the " + BRAND.qualification + " (" + BRAND.nqf +
  ", Qualification ID " + BRAND.qualId + ", " + BRAND.credits + " credits), delivered in association with " +
  BRAND.provider + ", accredited by the Quality Council for Trades and Occupations (QCTO) as a Skills " +
  "Development Provider. Accreditation No. " + BRAND.accredNo + ", valid " + BRAND.accredValid + ".";
BRAND.footerCopy =
  "Modules are credit-bearing units toward an accredited national qualification. Content shown is " +
  "illustrative pending final material. © " + BRAND.year + " " + BRAND.companyLegal + ". All rights reserved.";

/* ===================================================================
   SITE — applies BRAND to the page. Engine code; no per-company edits.
   =================================================================== */
window.SITE = (function(){
  var B = window.BRAND;

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  var ic = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    menu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 8.75h3.85V21H3V8.75Zm6.3 0h3.7v1.68h.05a4.06 4.06 0 0 1 3.65-2c3.9 0 4.62 2.57 4.62 5.9V21h-3.85v-5.4c0-1.29 0-2.94-1.8-2.94s-2.07 1.4-2.07 2.85V21H9.3V8.75Z"/></svg>',
    mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>'
  };

  /* Override CSS colour tokens from BRAND.colors — safe to run in <head> */
  function applyColors(){
    var c = B.colors, s = document.documentElement.style;
    s.setProperty("--orange", c.orange);
    s.setProperty("--orange-deep", c.orangeDeep);
    s.setProperty("--amber", c.amber);
    s.setProperty("--green", c.green);
    s.setProperty("--green-deep", c.greenDeep);
    s.setProperty("--header", c.header);
    s.setProperty("--header-2", c.header2);
  }

  /* Render the shared nav into <nav id="nav">. Active link from body[data-page]. */
  function renderNav(){
    var el = document.getElementById("nav"); if(!el) return;
    var page = (document.body && document.body.getAttribute("data-page")) || "";
    var links = [["about","about.html","About"],["modules","modules.html","Modules"],["contact","contact.html","Contact"]];
    var linksHtml = links.map(function(l){
      return '<a href="'+l[1]+'" data-nav="'+l[0]+'"'+(page===l[0]?' class="active"':'')+'>'+l[2]+'</a>';
    }).join("");
    el.innerHTML =
      '<div class="nav-inner">'+
        '<a href="index.html" class="brand"><img src="'+esc(B.logo)+'" alt="'+esc(B.logoAlt)+'"></a>'+
        '<div class="nav-links" id="navLinks">'+ linksHtml +
          '<a href="contact.html" class="nav-cta">'+esc(B.navCta)+'</a>'+
        '</div>'+
        '<div class="nav-icons">'+
          '<a href="modules.html" aria-label="Search modules">'+ic.search+'</a>'+
          '<button class="nav-toggle" id="navToggle" aria-label="Menu">'+ic.menu+'</button>'+
        '</div>'+
      '</div>';
  }

  /* Render the shared footer into <footer id="siteFooter">. */
  function renderFooter(){
    var el = document.getElementById("siteFooter"); if(!el) return;
    el.innerHTML =
      '<div class="wrap">'+
        '<div class="foot-logo"><img src="'+esc(B.logo)+'" alt="'+esc(B.logoAlt)+'"></div>'+
        '<div class="foot-grid">'+
          '<div class="foot-addr">'+
            esc(B.academyName)+' — in association with '+esc(B.provider)+'<br>'+
            esc(B.providerCred)+'<br>'+
            esc(B.location)+'<br>'+
            '<a href="mailto:'+esc(B.email)+'" style="color:var(--orange);font-weight:600">'+esc(B.email)+'</a>'+
          '</div>'+
          '<div class="foot-col"><h4>Explore</h4>'+
            '<a href="index.html">Home</a><a href="modules.html">Modules</a>'+
            '<a href="about.html">About</a><a href="contact.html">Contact</a>'+
          '</div>'+
          '<div class="foot-col"><h4>Get in touch</h4>'+
            '<a href="contact.html">'+esc(B.navCta)+'</a>'+
            '<a href="mailto:'+esc(B.email)+'">'+esc(B.email)+'</a>'+
            '<a href="'+esc(B.phoneHref)+'">'+esc(B.phone)+'</a>'+
            '<div class="foot-social">'+
              '<a href="'+esc(B.socialLinkedin)+'" aria-label="LinkedIn">'+ic.linkedin+'</a>'+
              '<a href="mailto:'+esc(B.email)+'" aria-label="Email">'+ic.mail+'</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="foot-accred"><strong>Accreditation</strong>'+esc(B.accredText)+'</div>'+
        '<div class="foot-copy">'+esc(B.footerCopy)+'</div>'+
      '</div>';
  }

  /* Fill data-b* placeholders + the enquiry form + document title. */
  var attrMap = [["data-b","text"],["data-b-html","html"],["data-b-href","href"],
                 ["data-b-src","src"],["data-b-alt","alt"],["data-b-value","value"],["data-b-action","action"]];
  function applyText(root){
    root = root || document;
    attrMap.forEach(function(pair){
      var sel = "["+pair[0]+"]";
      Array.prototype.forEach.call(root.querySelectorAll(sel), function(el){
        var key = el.getAttribute(pair[0]); if(!(key in B)) return;
        var val = B[key];
        if(pair[1]==="text")      el.textContent = val;
        else if(pair[1]==="html") el.innerHTML = val;
        else                      el.setAttribute(pair[1], val);
      });
    });
    // Document title from body[data-title]
    if(document.body){
      var t = document.body.getAttribute("data-title");
      document.title = (t ? t + " — " : "") + B.academyName;
    }
  }

  function init(){ renderNav(); renderFooter(); applyText(); }

  return {applyColors:applyColors, renderNav:renderNav, renderFooter:renderFooter, applyText:applyText, init:init};
})();

/* Apply colours immediately (runs in <head>, before first paint). */
window.SITE.applyColors();
