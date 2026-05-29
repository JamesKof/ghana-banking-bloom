import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Bank of Ghana" },
      { name: "description", content: "Annual reports, bulletins, working papers and speeches from the Bank of Ghana." },
      { property: "og:title", content: "Publications — Bank of Ghana" },
      { property: "og:description", content: "Reports, bulletins, working papers and speeches." },
    ],
  }),
  component: PubPage,
});

const groups: { h: string; items: { t: string; d: string; size: string }[] }[] = [
  {
    h: "Flagship Reports",
    items: [
      { t: "Annual Report 2025", d: "Published Apr 2026", size: "PDF · 4.8 MB" },
      { t: "Financial Stability Report — H2 2025", d: "Published Mar 2026", size: "PDF · 3.1 MB" },
      { t: "Inflation Report — May 2026", d: "Companion to 130th MPC", size: "PDF · 2.4 MB" },
    ],
  },
  {
    h: "Statistical Bulletins",
    items: [
      { t: "Monthly Statistical Bulletin — Apr 2026", d: "Time series & tables", size: "PDF · 6.2 MB" },
      { t: "Quarterly Bulletin — Q1 2026", d: "Macroeconomic review", size: "PDF · 2.8 MB" },
      { t: "External Sector Statistics — Q1 2026", d: "BoP & reserves", size: "PDF · 1.9 MB" },
    ],
  },
  {
    h: "Working Papers",
    items: [
      { t: "WP/2026/03 — Exchange-rate pass-through in Ghana", d: "Research department", size: "PDF · 1.4 MB" },
      { t: "WP/2026/02 — Credit conditions and the MPR", d: "Research department", size: "PDF · 1.1 MB" },
      { t: "WP/2026/01 — Climate risks for the banking sector", d: "Financial Stability", size: "PDF · 2.0 MB" },
    ],
  },
  {
    h: "Speeches & Remarks",
    items: [
      { t: "Governor's Address — 130th MPC", d: "May 2026", size: "PDF · 380 KB" },
      { t: "Keynote — West African Monetary Institute Forum", d: "Apr 2026", size: "PDF · 420 KB" },
      { t: "Lecture — University of Ghana Business School", d: "Mar 2026", size: "PDF · 510 KB" },
    ],
  },
];

function PubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Publications"
        title="Reports, research and official communications."
        intro="Browse the Bank's flagship reports, statistical bulletins, research working papers and the Governor's speeches."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-14">
          {groups.map((g) => (
            <div key={g.h}>
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-display">{g.h}</h2>
                <a href="#" className="text-sm font-medium text-primary hover:opacity-70">View all →</a>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {g.items.map((it) => (
                  <a key={it.t} href="#" className="group rounded-2xl border bg-card p-6 hover:shadow-soft transition flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary"><FileText className="h-5 w-5" /></span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{it.size}</span>
                    </div>
                    <div className="mt-5 font-semibold leading-snug group-hover:text-primary">{it.t}</div>
                    <div className="mt-1.5 text-xs text-muted-foreground">{it.d}</div>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      <Download className="h-4 w-4" /> Download
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
