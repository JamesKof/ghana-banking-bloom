import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import bankSquare from "@/assets/bog/bank-square.jpg";
import { Landmark, Scale, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bank of Ghana" },
      { name: "description", content: "History, mandate, governance and departments of the Bank of Ghana — Ghana's central bank since 1957." },
      { property: "og:title", content: "About the Bank of Ghana" },
      { property: "og:description", content: "Ghana's central bank since 1957 — mandate, governance and leadership." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "1957", t: "Established by the Bank of Ghana Ordinance, on the eve of independence." },
  { y: "1963", t: "Reorganised under the Bank of Ghana Act with expanded monetary authority." },
  { y: "2002", t: "Bank of Ghana Act 612 grants operational independence and price-stability mandate." },
  { y: "2007", t: "Currency redenomination — the new Ghana cedi (GH₵) introduced." },
  { y: "2016", t: "Act 612 amended (Act 918) — strengthened governance and supervisory powers." },
  { y: "2019", t: "Banking sector clean-up consolidates a resilient, well-capitalised industry." },
];

const departments = [
  { i: Landmark, t: "Monetary Policy", d: "Research, forecasting and the MPC secretariat." },
  { i: Scale, t: "Banking Supervision", d: "Prudential oversight of banks and SDIs." },
  { i: Building2, t: "Financial Stability", d: "Systemic risk, macroprudential policy, resolution." },
  { i: Users, t: "Currency Management", d: "Issuance, distribution and clean-note policy." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About the Bank"
        title="Ghana's central bank since 1957."
        intro="The Bank of Ghana formulates and implements monetary policy aimed at price stability, promotes a sound financial system, and issues the legal tender of the Republic of Ghana."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Mandate</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-display">Price stability. Financial stability. Public trust.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The Bank of Ghana Act, 2002 (Act 612) as amended by Act 918 (2016) gives the Bank its primary objective of maintaining price stability, supporting general economic policy, and ensuring an effective and efficient payment system.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Formulate and implement monetary policy.", "License and supervise banks and specialised deposit-taking institutions.", "Issue and redeem the national currency.", "Manage Ghana's gross international reserves.", "Oversee payment, clearing and settlement systems."].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={bankSquare} alt="Bank of Ghana headquarters" className="w-full h-[480px] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Timeline</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Seven decades of stewardship</h2>
          <div className="mt-12 relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-border hidden md:block" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {milestones.map((m) => (
                <div key={m.y} className="relative">
                  <div className="hidden md:block absolute -top-1 left-0 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                  <div className="md:pt-12 text-2xl font-display text-primary">{m.y}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Departments</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">How the Bank is organised</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-6 hover:shadow-soft transition">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                <div className="mt-4 font-semibold">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium hover:bg-[var(--primary-deep)] transition shadow-soft">Contact the Bank</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
