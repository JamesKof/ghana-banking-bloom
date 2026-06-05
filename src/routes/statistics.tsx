import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Database, LineChart, Globe2, Building2, ArrowUpRight } from "lucide-react";
import { BOG, externalLinkProps } from "@/lib/external";

export const Route = createFileRoute("/statistics")({
  head: () => ({
    meta: [
      { title: "Statistics & Data — Bank of Ghana" },
      { name: "description", content: "Time series, dashboards and statistical bulletins from the Bank of Ghana." },
      { property: "og:title", content: "Statistics — Bank of Ghana" },
      { property: "og:description", content: "Monetary, banking, external and real sector data." },
    ],
  }),
  component: StatsPage,
});

const datasets = [
  { i: LineChart, t: "Monetary & Financial", d: "Money supply, interest rates, credit aggregates, MPR history.", h: BOG.monetaryStats },
  { i: Building2, t: "Banking Sector", d: "Aggregated balance sheet, CAR, NPLs, liquidity, profitability.", h: BOG.bankingSector },
  { i: Globe2, t: "External Sector", d: "Balance of payments, reserves, exchange rates, trade.", h: BOG.externalSector },
  { i: Database, t: "Real Sector", d: "CIEA, business & consumer confidence, inflation by component.", h: BOG.realSector },
];

const headline = [
  { l: "Money Supply (M2+)", v: "GH₵ 312.4B", c: "+18.6% YoY" },
  { l: "Gross Intl Reserves", v: "US$ 6.87B", c: "≈3.1 months import cover" },
  { l: "Private Sector Credit", v: "+24.2% YoY", c: "Nominal · April 2026" },
  { l: "Treasury 91-day", v: "14.85%", c: "Last auction" },
];

function StatsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Statistics & Data"
        title="Open, timely, authoritative data on Ghana's economy."
        intro="The Bank's statistical database delivers high-frequency monetary, banking, external and real-sector indicators — refreshed on a published release calendar."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {headline.map((h) => (
            <div key={h.l} className="rounded-2xl border bg-card p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{h.l}</div>
              <div className="mt-3 text-3xl font-display text-primary">{h.v}</div>
              <div className="mt-1.5 text-xs text-gold font-semibold">{h.c}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Datasets</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Browse the statistical database</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {datasets.map(({ i: Icon, t, d, h }) => (
              <a key={t} href={h} {...externalLinkProps} className="group rounded-2xl border bg-card p-6 hover:shadow-soft transition">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition"><Icon className="h-5 w-5" /></span>
                <div className="mt-4 font-semibold">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Explore <ArrowUpRight className="h-4 w-4" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Release Calendar</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Upcoming releases</h2>
          <div className="mt-8 rounded-2xl border bg-card divide-y">
            {[
              { d: "12 Jun 2026", t: "Summary of Macroeconomic & Financial Data", c: "Monthly" },
              { d: "20 Jun 2026", t: "Banking Sector Report — Q1 2026", c: "Quarterly" },
              { d: "25 Jul 2026", t: "131st MPC Press Briefing", c: "Bi-monthly" },
              { d: "31 Jul 2026", t: "Balance of Payments — H1 2026", c: "Semi-annual" },
            ].map((r) => (
              <div key={r.t} className="p-5 flex items-center gap-6">
                <div className="w-32 text-sm font-mono text-primary">{r.d}</div>
                <div className="flex-1 font-medium">{r.t}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{r.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
