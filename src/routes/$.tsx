import { createFileRoute, Navigate } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Link } from "@tanstack/react-router";

// Catch-all route. Maps known legacy / external bog.gov.gh paths and old in-page
// anchors to the correct new in-app routes. Anything unknown renders a friendly
// not-found that still keeps users inside the site shell.
export const Route = createFileRoute("/$")({
  component: SplatPage,
});

// path (lowercased, leading slash stripped) -> in-app route
const REDIRECTS: Record<string, string> = {
  // Legacy bog.gov.gh paths
  "monetary-policy/monetary-policy-decisions": "/monetary-policy",
  "monetary-policy/inflation-reports": "/monetary-policy",
  "news/press-release": "/press-releases",
  "news/press-releases": "/press-releases",
  "news/speeches": "/publications",
  "news": "/press-releases",
  "about-us": "/about",
  "about-us/our-governance": "/governance",
  "about-us/our-governance/board-of-directors": "/board",
  "about-us/careers": "/careers",
  "about-us/board-of-directors": "/board",
  "economic-data": "/statistics",
  "economic-data/banking-sector-statistics": "/statistics",
  "economic-data/external-sector": "/statistics",
  "economic-data/real-sector": "/statistics",
  "economic-data/monetary-time-series-data": "/statistics",
  "financial-stability/financial-stability-reports": "/financial-stability",
  "banking/bank-square": "/financial-stability",
  "publications/annual-reports": "/publications",
  "publications/quarterly-bulletin": "/publications",
  "publications/working-papers": "/publications",
  "complaints-and-redress": "/contact",
  // Common short aliases
  "mpc": "/monetary-policy",
  "press": "/press-releases",
  "home": "/",
  "index": "/",
  "index.html": "/",
};

function normalise(splat: string) {
  return splat
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
    .replace(/index\.html?$/i, "")
    .toLowerCase();
}

function SplatPage() {
  const { _splat } = Route.useParams();
  const key = normalise(_splat ?? "");
  const target = REDIRECTS[key];

  if (target) {
    return <Navigate to={target} replace />;
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">404</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-display">We couldn't find that page.</h1>
        <p className="mt-4 text-muted-foreground">
          The link may be outdated. Try one of the sections below or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="rounded-full bg-primary text-primary-foreground px-5 h-11 inline-flex items-center text-sm font-medium">Home</Link>
          <Link to="/monetary-policy" className="rounded-full border px-5 h-11 inline-flex items-center text-sm font-medium hover:bg-secondary">Monetary Policy</Link>
          <Link to="/statistics" className="rounded-full border px-5 h-11 inline-flex items-center text-sm font-medium hover:bg-secondary">Statistics</Link>
          <Link to="/sitemap" className="rounded-full border px-5 h-11 inline-flex items-center text-sm font-medium hover:bg-secondary">Sitemap</Link>
        </div>
      </div>
    </PageShell>
  );
}
