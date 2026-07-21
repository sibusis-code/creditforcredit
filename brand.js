/* ===================================================================
   BRAND CONFIG — the ONE file you edit to re-skin this platform.

   DEFAULT SKIN = Credit for Credit (creditforcredit.org), the public
   learning platform. Everything else — a company portal for SPS, Maziv,
   Fungi Utilities, Inhance — is a re-skin of this same engine:
     1. edit the values in BRAND below
     2. drop in the new logo file and point BRAND.logo at it
     3. (optional) review page HEADLINES/COPY for industry framing
   The module catalogue is separate content — see catalog.js.

   TENANT MODE: set BRAND.tenant to a company name to turn this into a
   company-branded academy ("SPS Academy, powered by Credit for Credit").
   Leave it null for the platform itself.
   =================================================================== */
window.BRAND = {
  /* ---- Identity ---- */
  academyName:  "Credit for Credit",
  companyShort: "Credit for Credit",
  companyLegal: "Credit for Credit",
  companyFull:  "Credit for Credit",
  domain:       "creditforcredit.org",
  industry:     "growing business",
  tagline:      "Learn while you earn credits",
  logo:         "creditforcredit-logo.svg",
  logoAlt:      "Credit for Credit",
  navCta:       "Talk to Our Team",

  /* Set to a company name to run this instance as their branded academy. */
  tenant:       null,

  /* ---- Brand colours (override the defaults in styles.css :root) ---- */
  colors: {
    indigo:     "#4f46e5",   /* primary — buttons, links, active nav */
    indigoDeep: "#3730a3",
    gold:       "#f0b429",   /* "credit" accent — search, highlights */
    teal:       "#0d9488",   /* badges, category tiles, ticks */
    tealDeep:   "#0f766e",
    header:     "#eceafb",   /* airy header/hero tint */
    header2:    "#e0ddf8"
  },

  /* ---- Contact ----
     NOTE: `email` is what the public sees. `formAction` is where enquiries
     actually land — point it at a mailbox that exists and is FormSubmit-
     activated, otherwise the contact form silently fails. */
  email:     "hello@creditforcredit.org",
  phone:     "012 345 6789",
  phoneHref: "tel:0123456789",
  hours:     "Monday–Friday, 08:00–17:00 SAST",
  location:  "Online · Nationwide, South Africa",

  /* ---- Enquiry form (FormSubmit.co) ---- */
  formAction:  "https://formsubmit.co/hello@creditforcredit.org",
  formNext:    "https://creditforcredit.org/thanks.html",
  formSubject: "New enquiry from creditforcredit.org",

  /* ---- Accreditation ----
     The delivery partner is deliberately unnamed on the public site. To
     name an accredited provider on a tenant instance, fill `provider` and
     `accredNo` together — the footer/About text rebuilds automatically.
     Never publish an accreditation number without the entity it belongs to. */
  provider:      "",
  providerShort: "Accredited QCTO provider",
  providerCred:  "Accredited QCTO Skills Development Provider",
  qualification: "Occupational Certificate: Computer Technician",
  nqf:           "NQF 5",
  qualId:        "101408",
  credits:       "282",
  accredNo:      "",
  accredValid:   "",

  /* ---- Social + misc ---- */
  socialLinkedin: "#",
  year:           "2026"
};

/* ---- Derived strings (built from the atoms above; do not edit) ---- */
(function(B){
  /* Display name: "SPS Academy, powered by Credit for Credit" in tenant mode. */
  B.displayName = B.tenant ? (B.tenant + " Academy") : B.academyName;
  B.poweredBy   = B.tenant ? ("Powered by " + B.academyName) : "";

  var t = "Modules are credit-bearing toward the " + B.qualification + " (" + B.nqf +
          ", Qualification ID " + B.qualId + ", " + B.credits + " credits), delivered through an " +
          B.providerCred + ", accredited by the Quality Council for Trades and Occupations (QCTO).";
  if (B.provider) {
    t = "Modules are credit-bearing toward the " + B.qualification + " (" + B.nqf +
        ", Qualification ID " + B.qualId + ", " + B.credits + " credits), delivered in association with " +
        B.provider + ", accredited by the Quality Council for Trades and Occupations (QCTO) as a Skills " +
        "Development Provider." + (B.accredNo ? " Accreditation No. " + B.accredNo +
        (B.accredValid ? ", valid " + B.accredValid : "") + "." : "");
  }
  B.accredText = t;

  B.footerCopy =
    "Modules are credit-bearing units toward an accredited national qualification. Content shown is " +
    "illustrative pending final material. © " + B.year + " " + B.companyLegal + ". All rights reserved.";
})(window.BRAND);

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
    s.setProperty("--indigo", c.indigo);
    s.setProperty("--indigo-deep", c.indigoDeep);
    s.setProperty("--gold", c.gold);
    s.setProperty("--teal", c.teal);
    s.setProperty("--teal-deep", c.tealDeep);
    s.setProperty("--header", c.header);
    s.setProperty("--header-2", c.header2);
  }

  /* Render the shared nav into <nav id="nav">. Active link from body[data-page]. */
  function renderNav(){
    var el = document.getElementById("nav"); if(!el) return;
    var page = (document.body && document.body.getAttribute("data-page")) || "";
    var links = [["about","about.html","About"],["modules","modules.html","Modules"],
                 ["companies","companies.html","For Companies"],["contact","contact.html","Contact"]];
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
    var line1 = B.tenant
      ? esc(B.displayName) + ' — ' + esc(B.poweredBy)
      : esc(B.academyName) + ' — ' + esc(B.tagline);
    el.innerHTML =
      '<div class="wrap">'+
        '<div class="foot-logo"><img src="'+esc(B.logo)+'" alt="'+esc(B.logoAlt)+'"></div>'+
        '<div class="foot-grid">'+
          '<div class="foot-addr">'+
            line1+'<br>'+
            esc(B.providerCred)+'<br>'+
            esc(B.location)+'<br>'+
            '<a href="mailto:'+esc(B.email)+'" style="color:var(--indigo);font-weight:600">'+esc(B.email)+'</a>'+
          '</div>'+
          '<div class="foot-col"><h4>Explore</h4>'+
            '<a href="index.html">Home</a><a href="modules.html">Modules</a>'+
            '<a href="about.html">About</a><a href="companies.html">For Companies</a>'+
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
      document.title = (t ? t + " — " : "") + B.displayName;
    }
  }

  function init(){ renderNav(); renderFooter(); applyText(); }

  return {applyColors:applyColors, renderNav:renderNav, renderFooter:renderFooter, applyText:applyText, init:init};
})();

/* Apply colours immediately (runs in <head>, before first paint). */
window.SITE.applyColors();
