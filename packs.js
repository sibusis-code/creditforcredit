/* ===================================================================
   Corporate Packs — a curated bundle of courses for one client.

   A pack is just a list of slugs from catalog.js, so it stays in sync
   with the catalogue automatically: change a course once and every pack
   containing it updates.

   Pack pages are NOINDEX and are NOT linked from the nav or footer.
   They are proposals shared by link — treat the URL as semi-private.

   {
     slug     : "sps",                    // pack?p=sps
     company  : "SPS",
     logo     : "tenants/sps-dark-logo.svg",   // optional
     audience : "Executives and employees",
     intro    : "…",
     groups   : [ {title, note, slugs:[…]} ]
   }
   =================================================================== */
window.PACKS = [
  {
    slug: "sps",
    company: "SPS",
    logo: "tenants/sps-dark-logo.svg",
    audience: "Executives, managers and employees",
    intro: "A learning pack put together for SPS — accredited modules that build a national " +
           "qualification, world-class courses we buy on your people's behalf, and a workplace " +
           "wellness programme for the teams and the managers who lead them.",
    groups: [
      {
        title: "Credit-bearing — builds a national qualification",
        note: "Delivered through an accredited QCTO Skills Development Provider. These are the ones " +
              "that carry NQF credits and count as B-BBEE Skills Development spend.",
        slugs: ["computer-technician","ai-fundamentals","ai-tools-productivity","responsible-ai","ai-leaders"]
      },
      {
        title: "Executive & leadership — brokered",
        note: "We buy the seat; your executive studies with the institution and receives their " +
              "certificate. No NQF credits, and not scorecard spend — the value is the credential " +
              "and the thinking.",
        slugs: ["ai-strategy","ai-in-action","competing-age-ai","leadership-emerging-tech","cybersecurity"]
      },
      {
        title: "ESG — brokered",
        note: "Sustainability, social impact and governance training for the people who have to " +
              "report on it.",
        slugs: ["esg-foundations","esg-environmental","esg-social","esg-governance","esg-sector"]
      },
      {
        title: "Technical — brokered",
        note: "For engineers and specialists who want depth from a recognised institution.",
        slugs: ["fundamentals-tinyml","deploying-tinyml","cs-for-lawyers"]
      },
      {
        title: "Workplace wellness",
        note: "Certificate of completion, not credits. Buy it because burnout is expensive, not " +
              "for the scorecard.",
        slugs: ["wellness-mental-resilience","wellness-psychological-safety","wellness-empathetic-conversations","wellness-leading-by-example","wellness-embedding-wellness"]
      }
    ]
  }
];
