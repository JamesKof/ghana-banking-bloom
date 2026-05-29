import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, AlertTriangle, Building2, Layers } from "lucide-react";

export const Route = createFileRoute("/financial-stability")({
  head: () => ({
    meta: [
      { title: "Financial Stability — Bank of Ghana" },
      { name: "description", content: "Safeguarding the stability of Ghana's financial system through supervision, macroprudential policy and resolution." },
      { property: "og:title", content: "Financial Stability — Bank of Ghana" },
      { property: "og:description", content: "Banking sector indicators, supervision and macroprudential policy." },
    ],
  }),
  component: FSPage,
});

const indicators = [
  { l: "Capital Adequacy Ratio", v: "14.2%", s: "Above 13% regulatory minimum" },
  { l: "Non-Performing Loans", v: "20.7%", s: "Gross · industry aggregate" },
  { l: "Liquidity Ratio", v: "55.8%", s: "Well above floor" },
  { l: "Return on Equity", v: "33.4%", s: "Annualised" },
];

const pillars = [
  { i: ShieldCheck, t: "Microprudential Supervision", d: "Risk-based on-site and off-site supervision of universal banks and SDIs." },
  { i: Layers, t: "Macroprudential Policy", d: "System-wide tools — capital buffers, sectoral limits, stress testing." },
  { i: AlertTriangle, t: "Crisis Management", d: "Recovery & resolution planning, deposit protection coordination." },
  { i: Building2, t: "Payment Systems Oversight", d: "Safe, efficient and inclusive payment, clearing and settlement." },
];

function FSPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Financial Stability"
        title="A sound, resilient and inclusive financial system."
        intro="The Bank monitors and addresses risks to the financial system through prudential supervision of banks and SDIs, macroprudential policy, and oversight of the national payment system."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Banking Sector Snapshot</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Key soundness indicators</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {indicators.map((i) => (
              <div key={i.l} className="rounded-2xl border bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.l}</div>
                <div className="mt-3 text-4xl font-display text-primary">{i.v}</div>
                <div className="mt-1.5 text-xs text-muted-foreground">{i.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Pillars</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">How we safeguard stability</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {pillars.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-7 flex gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="font-semibold text-lg">{t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-5">
          {["Financial Stability Report — H2 2025", "Banking Sector Report — Q1 2026", "Macroprudential Policy Statement 2026"].map((t) => (
            <a key={t} href="#" className="group rounded-2xl border bg-card p-7 hover:shadow-soft transition">
              <div className="text-xs uppercase tracking-widest text-gold">Report</div>
              <div className="mt-3 font-semibold leading-snug group-hover:text-primary">{t}</div>
              <div className="mt-6 text-sm text-primary font-medium">Download PDF →</div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
