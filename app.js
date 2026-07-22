/* ===================================================================
   Credit for Credit — shared behaviour
   Nav, scroll-reveal, carousels, hero search, catalogue filtering,
   and the data-driven course-detail page.
   =================================================================== */
(function(){
  "use strict";
  var $  = function(s,c){return (c||document).querySelector(s);};
  var $$ = function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
  var M  = window.MODULES || [];
  var B  = window.BRAND || {};

  /* Fill brand placeholders (nav/footer are rendered inline per page) */
  if(window.SITE){ window.SITE.applyText(); }

  /* ---------- NAV ---------- */
  var nav = $("#nav"), links = $("#navLinks"), toggle = $("#navToggle");
  if(toggle){ toggle.addEventListener("click", function(){ links.classList.toggle("open"); }); }
  window.addEventListener("scroll", function(){
    if(nav){ nav.classList.toggle("scrolled", window.scrollY > 12); }
  });

  /* ---------- SCROLL REVEAL ---------- */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.12}) : null;
  function watch(el){ if(io){ io.observe(el); } else { el.classList.add("in"); } }
  $$(".reveal").forEach(watch);

  /* ---------- HERO / CATALOGUE SEARCH ---------- */
  $$("[data-search-form]").forEach(function(f){
    f.addEventListener("submit", function(e){
      e.preventDefault();
      var q = (f.querySelector("input").value || "").trim();
      window.location.href = "modules" + (q ? ("?q=" + encodeURIComponent(q)) : "");
    });
  });

  /* ---------- CARD MARKUP ---------- */
  function badge(m){
    if(m.accred) return '<span class="mcard-badge paid">NQF 5 · Accredited</span>';
    if(m.avail === "Coming Soon") return '<span class="mcard-badge soon">Coming Soon</span>';
    return '<span class="mcard-badge">Available now</span>';
  }
  var tickSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>';
  var creditSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/></svg>';
  function card(m){
    var url = "course?c=" + m.slug;
    return ''+
    '<article class="mcard reveal">'+
      '<a href="'+url+'" aria-label="'+m.title+'"><div class="mcard-img" style="background-image:url('+window.imgUrl(m.img,700)+')">'+
        badge(m)+
        '<span class="mcard-add" aria-hidden="true">+</span>'+
      '</div></a>'+
      '<div class="mcard-body">'+
        '<div class="mcard-mode">'+window.MODALITY[m.modality]+'</div>'+
        '<h3><a href="'+url+'">'+m.title+'</a></h3>'+
        '<p class="mcard-desc">'+m.lead+'</p>'+
        '<div class="mcard-meta">'+creditSvg+' '+m.credits+' credits · '+m.hours+'</div>'+
      '</div>'+
    '</article>';
  }

  /* ---------- HOME: FEATURED ROW ---------- */
  var feat = $("#featuredTrack");
  if(feat){
    // accredited pathway first, then a spread of popular modules
    var order = ["computer-technician","ai-fundamentals","ai-tools-productivity","responsible-ai","ai-leaders","fundamentals-tinyml","cybersecurity","ai-strategy"];
    var picked = order.map(function(s){ return M.filter(function(m){return m.slug===s;})[0]; }).filter(Boolean);
    feat.innerHTML = picked.map(card).join("");
    $$(".reveal", feat).forEach(watch);
    wireCarousel(feat);
  }

  function wireCarousel(track){
    var prev = $("[data-car-prev]"), next = $("[data-car-next]");
    function step(dir){ track.scrollBy({left: dir * (track.clientWidth*0.85), behavior:"smooth"}); }
    if(prev) prev.addEventListener("click", function(){ step(-1); });
    if(next) next.addEventListener("click", function(){ step(1); });
  }

  /* ---------- CATALOGUE (modules.html) ---------- */
  var grid = $("#catGrid");
  if(grid){
    var params  = new URLSearchParams(location.search);
    var qInput  = $("#catSearchInput");
    if(qInput && params.get("q")){ qInput.value = params.get("q"); }

    // Build filter option lists with counts
    function counts(key){ var o={}; M.forEach(function(m){ var v=m[key]; o[v]=(o[v]||0)+1; }); return o; }
    var modCount = counts("modality"), topicCount = counts("topic"), lvlCount = counts("level");

    function opt(name, val, label, n){
      return '<label class="filter-opt"><input type="checkbox" data-f="'+name+'" value="'+val+'"><span>'+label+'</span><span class="cnt">('+n+')</span></label>';
    }
    var modBox=$("#fltModality"), topBox=$("#fltTopic"), lvlBox=$("#fltLevel");
    if(modBox) modBox.innerHTML = Object.keys(window.MODALITY).filter(function(k){return modCount[k];})
      .map(function(k){ return opt("modality",k,window.MODALITY[k],modCount[k]); }).join("");
    if(topBox) topBox.innerHTML = window.TOPICS.filter(function(t){return topicCount[t];})
      .map(function(t){ return opt("topic",t,t,topicCount[t]); }).join("");
    if(lvlBox) lvlBox.innerHTML = window.LEVELS.filter(function(l){return lvlCount[l];})
      .map(function(l){ return opt("level",l,l,lvlCount[l]); }).join("");

    var seg = "all";
    function render(){
      var q = (qInput && qInput.value || "").trim().toLowerCase();
      var active = {modality:[],topic:[],level:[]};
      $$('input[data-f]:checked').forEach(function(i){ active[i.getAttribute("data-f")].push(i.value); });

      var res = M.filter(function(m){
        if(active.modality.length && active.modality.indexOf(m.modality)<0) return false;
        if(active.topic.length && active.topic.indexOf(m.topic)<0) return false;
        if(active.level.length && active.level.indexOf(m.level)<0) return false;
        if(seg==="online" && m.modality==="inperson") return false;
        if(seg==="inperson" && m.modality!=="inperson") return false;
        if(q){
          var hay = (m.title+" "+m.lead+" "+m.topic+" "+m.level).toLowerCase();
          if(hay.indexOf(q)<0) return false;
        }
        return true;
      });
      grid.innerHTML = res.length ? res.map(card).join("")
        : '<div class="no-res" style="grid-column:1/-1">No modules match those filters yet. <a href="modules" style="color:var(--indigo);font-weight:600">Clear filters</a></div>';
      $$(".reveal", grid).forEach(watch);
      var cnt = $("#catCount"); if(cnt){ cnt.textContent = res.length + (res.length===1?" module":" modules"); }
    }

    document.addEventListener("change", function(e){ if(e.target.matches('input[data-f]')) render(); });
    if(qInput){ qInput.addEventListener("input", render); }
    var form = $("#catSearchForm"); if(form){ form.addEventListener("submit", function(e){ e.preventDefault(); render(); }); }
    $$("[data-seg]").forEach(function(b){ b.addEventListener("click", function(){
      $$("[data-seg]").forEach(function(x){x.classList.remove("on");}); b.classList.add("on"); seg=b.getAttribute("data-seg"); render();
    }); });
    var ft = $("#filterToggle"); if(ft){ ft.addEventListener("click", function(){ $("#filters").classList.toggle("open"); }); }

    render();
  }

  /* ---------- COURSE DETAIL (course.html) ---------- */
  var detail = $("#courseDetail");
  if(detail){
    var slug = new URLSearchParams(location.search).get("c") || "ai-fundamentals";
    var m = M.filter(function(x){return x.slug===slug;})[0] || M[0];
    document.title = m.title + " — " + (B.academyName || "Academy");

    var learnByTopic = {
      "Business":["Frame where AI creates measurable value","Apply everyday AI tools to real work tasks","Brief a team and set responsible-use ground rules","Spot risks, bias and where AI gets things wrong"],
      "Compliance":["Handle data privacy and POPIA in AI workflows","Recognise and reduce bias in AI outputs","Check AI results for accuracy before you act","Document AI use for audit and scorecard evidence"],
      "Leadership":["Identify AI opportunities across your operation","Lead AI-enabled teams and change","Set governance and responsible-adoption guardrails","Turn AI investment into scorecard-worthy outcomes"],
      "Computer Science":["Understand the core technical concepts hands-on","Build and test a working example end to end","Read and adapt real code and models","Deploy your result to a real target"],
      "Health & Medicine":["Understand the foundations of AI in a clinical context","Interpret AI-assisted analysis critically","Recognise data, bias and safety considerations","Apply techniques to real biomedical problems"],
      "Social Sciences":["Connect policy, strategy and technology","Assess risk across emerging technologies","Weigh ethical and societal implications","Translate insight into organisational strategy"],
      "Accredited":["Build the technical foundations of computer systems","Diagnose, repair and support hardware and networks","Meet the outcomes of a national "+(B.nqf||"NQF 5")+" qualification","Earn "+(B.credits||"282")+" credits toward a portable credential"]
    };
    var learn = learnByTopic[m.topic] || learnByTopic["Business"];

    var enrolLabel = m.accred ? "Rolling intake" : (m.avail==="Coming Soon" ? "Opening soon" : "Open — enrol anytime");
    var price = "Enquire";
    var priceSub = m.accred ? "Ask about accredited-pathway pricing" : "Talk to our team for pricing";

    var icon = function(p){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'; };
    var i_reg   = icon('<rect x="4" y="4" width="16" height="18" rx="2"/><path d="M8 2v4M16 2v4M4 10h16"/>');
    var i_mode  = icon('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>');
    var i_loc   = icon('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>');
    var i_topic = icon('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="12" r="3"/><path d="M8.6 7.5 15 10.5M8.6 16.5 15 13.5"/>');
    var i_lvl   = icon('<path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/>');
    var i_lang  = icon('<path d="M4 5h12M9 3v2M12 20l4-9 4 9M13.5 17h5"/><path d="M5 8s1.5 4 5 6"/><path d="M11 8s-1.5 4-5 6"/>');
    var i_cred  = icon('<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>');
    var i_dur   = icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>');

    function item(ic, cls, label, val){
      return '<div class="info-item"><div class="info-h"><span class="i '+cls+'">'+ic+'</span><b>'+label+'</b></div><p>'+val+'</p></div>';
    }
    var info =
      item(i_reg,"o","Enrolment", enrolLabel) +
      item(i_mode,"g","Delivery", window.MODALITY[m.modality]) +
      item(i_loc,"","Location", m.modality==="inperson" ? "In-person, South Africa" : "Online · Nationwide, South Africa") +
      item(i_topic,"g","Training topic", m.topic) +
      item(i_lvl,"o","Level", m.level) +
      item(i_lang,"","Language", "English") +
      item(i_cred,"g","Credits", m.credits + " credits toward " + (B.nqf||"NQF 5")) +
      item(i_dur,"o","Duration", m.hours) +
      item(i_reg,"","Provider", "In association with " + (B.providerShort||"an accredited provider"));

    var qual = B.qualification || "Occupational Certificate: Computer Technician";
    var accredLine = m.accred
      ? '<p>This is the accredited destination qualification the shorter modules ladder toward — the <strong>'+qual+'</strong> ('+(B.nqf||"NQF 5")+', Qualification ID '+(B.qualId||"101408")+', '+(B.credits||"282")+' credits), delivered in association with '+(B.provider||"an accredited Skills Development Provider")+', accredited by the QCTO as a Skills Development Provider.</p>'
      : '<p>This module is a small, credit-bearing unit. Each one your people complete carries credits toward the <strong>'+qual+'</strong> ('+(B.nqf||"NQF 5")+', '+(B.credits||"282")+' credits) — and, delivered through an accredited provider, supports your <strong>B-BBEE Skills Development</strong> scorecard.</p>';

    detail.querySelector("#crumbCur").textContent = m.title;
    detail.querySelector("#courseTitle").textContent = m.title;
    detail.querySelector("#courseLead").textContent = m.lead;
    detail.querySelector("#infoGrid").innerHTML = info;
    detail.querySelector("#enrolLabel").textContent = enrolLabel;
    detail.querySelector("#priceMain").textContent = price;
    detail.querySelector("#priceSub").textContent = priceSub;
    detail.querySelector("#learnList").innerHTML = learn.map(function(l){ return '<li>'+tickSvg+'<span>'+l+'</span></li>'; }).join("");
    detail.querySelector("#courseProse").innerHTML = '<p>'+m.lead+'</p>' + accredLine;

    // related modules (same topic, else first few)
    var rel = M.filter(function(x){return x.slug!==m.slug && x.topic===m.topic;}).slice(0,4);
    if(rel.length<4){ M.forEach(function(x){ if(rel.length<4 && x.slug!==m.slug && rel.indexOf(x)<0) rel.push(x); }); }
    var relBox = $("#relatedTrack");
    if(relBox){ relBox.innerHTML = rel.map(card).join(""); }

    $$(".reveal", detail).forEach(watch);
  }
})();
