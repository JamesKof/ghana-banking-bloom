// Centralised map of external Bank of Ghana destinations.
// Keeps CTA / footer / card links from ever resolving to dead "#" placeholders.

export const BOG = {
  home: "https://www.bog.gov.gh/",

  // Monetary policy
  monetaryPolicy: "https://www.bog.gov.gh/monetary-policy/",
  mpcDecisions: "https://www.bog.gov.gh/monetary-policy/monetary-policy-decisions/",
  mpcPressReleases: "https://www.bog.gov.gh/news/press-release/",
  inflationReports: "https://www.bog.gov.gh/monetary-policy/inflation-reports/",

  // Publications
  publications: "https://www.bog.gov.gh/publications/",
  annualReports: "https://www.bog.gov.gh/publications/annual-reports/",
  bulletins: "https://www.bog.gov.gh/publications/quarterly-bulletin/",
  workingPapers: "https://www.bog.gov.gh/publications/working-papers/",
  speeches: "https://www.bog.gov.gh/news/speeches/",

  // Statistics
  statistics: "https://www.bog.gov.gh/economic-data/",
  bankingSector: "https://www.bog.gov.gh/economic-data/banking-sector-statistics/",
  externalSector: "https://www.bog.gov.gh/economic-data/external-sector/",
  realSector: "https://www.bog.gov.gh/economic-data/real-sector/",
  monetaryStats: "https://www.bog.gov.gh/economic-data/monetary-time-series-data/",

  // Financial stability
  financialStability: "https://www.bog.gov.gh/financial-stability/",
  fsReports: "https://www.bog.gov.gh/financial-stability/financial-stability-reports/",

  // Procurement / tenders
  procurement: "https://www.bog.gov.gh/procurement/",
  tenders: "https://www.bog.gov.gh/procurement/",
  supplierRegistration: "https://www.bog.gov.gh/procurement/",

  // Careers
  careers: "https://www.bog.gov.gh/about-us/careers/",

  // Governance
  governance: "https://www.bog.gov.gh/about-us/our-governance/",
  boardOfDirectors: "https://www.bog.gov.gh/about-us/our-governance/board-of-directors/",

  // Bank Square / licensed institutions
  bankSquare: "https://www.bog.gov.gh/banking/bank-square/",

  // eServices
  eservicesPortal: "https://eservices.bog.gov.gh/",
  bsa: "https://eservices.bog.gov.gh/",
  fxAuction: "https://eservices.bog.gov.gh/",
  csd: "https://csd.bog.gov.gh/",
  complaintsPortal: "https://www.bog.gov.gh/complaints-and-redress/",
} as const;

// Spread these onto any external anchor so it opens safely in a new tab.
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// Safe builder — guarantees a non-empty href and never returns "#".
export function ext(href: string | undefined | null) {
  const safe = href && href.trim().length > 0 ? href : BOG.home;
  return { href: safe, ...externalLinkProps };
}
