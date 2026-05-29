import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, TrendingDown, Target, Calendar } from "lucide-react";

export const Route = createFileRoute("/monetary-policy")({
  head: () => ({
    meta: [
      { title: "Monetary Policy — Bank of Ghana" },
      { name: "description", content: "MPC decisions, policy rate, inflation outlook and monetary policy reports from the Bank of Ghana." },
      { property: "og:title", content: "Monetary Policy — Bank of Ghana" },
      { property: "og:description", content: "Policy rate, inflation outlook and MPC communications." },
    ],
  }),
  component: MPPage,
});

const decisions = [
  { date: "May 2026", title: "130th MPC — Policy Rate held at 21.50%", note: "Statement, press conference and Q&A." },
  { date: "Mar 2026", title: "129th MPC — Policy Rate cut by 100bps to 21.50%", note: "Disinflation broad-based; risks balanced." },
  { date: "Jan 2026", title: "128th MPC — Policy Rate cut by 200bps to 22.50%", note: "Tight stance maintained on core trends." },
  { date: "Nov 2025", title: "127th MPC — Policy Rate held at 24.50%", note: "External buffers strengthened." },
];

function MPPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Monetary Policy"
        title="Anchoring inflation. Stabilising expectations."
        intro="The Monetary Policy Committee meets six times a year to set the Monetary Policy Rate (MPR), the Bank's primary instrument for steering inflation toward the medium-term target of 8% ± 2%."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { i: Target, l: "Policy Rate", v: "21.50%", s: "Unchanged · May 2026" },
            { i: TrendingDown, l: "Headline Inflation", v: "3.4%", s: "Within 8.0 ± 2% band" },
            { i: Calendar, l: "Next MPC", v: "Jul 2026", s: "131st meeting" },
          ].map(({ i: Icon, l, v, s }) => (
            <div key={l} className="rounded-2xl border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{l}</span>
                <Icon className="h-4 w-4 text-gold" />
              </div>
              <div className="mt-3 text-5xl font-display text-primary">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">MPC Decisions</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-display">Recent meetings</h2>
            </div>
            <a href="#" className="text-sm font-medium text-primary hover:opacity-70">Archive →</a>
          </div>
          <div className="rounded-2xl border bg-card divide-y">
            {decisions.map((d) => (
              <a key={d.date} href="#" className="group flex flex-wrap md:flex-nowrap items-center gap-4 p-6 hover:bg-secondary/40 transition">
                <div className="w-28 text-xs uppercase tracking-widest text-muted-foreground">{d.date}</div>
                <div className="flex-1">
                  <div className="font-semibold group-hover:text-primary">{d.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{d.note}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Framework</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-display">Inflation Targeting</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Since 2007 the Bank has operated a forward-looking inflation-targeting regime. The medium-term target is 8% ± 2%, set in consultation with the Government. The MPR is communicated immediately after each MPC meeting alongside a detailed press statement.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Transmission channels</div>
            <ul className="mt-4 space-y-3 text-sm">
              {["Interest rate channel — interbank, lending and deposit rates","Exchange rate channel — pass-through to tradables","Credit channel — bank lending standards","Expectations channel — household and corporate inflation expectations"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
