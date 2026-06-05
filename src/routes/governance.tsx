import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Scale, ShieldCheck, FileText, Users } from "lucide-react";
import { BOG, externalLinkProps } from "@/lib/external";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance — Bank of Ghana" },
      { name: "description", content: "Governance framework, statutory mandate and accountability of the Bank of Ghana." },
      { property: "og:title", content: "Governance — Bank of Ghana" },
    ],
  }),
  component: GovernancePage,
});

const pillars = [
  { i: Scale, t: "Statutory Mandate", d: "The Bank of Ghana Act, 2002 (Act 612), as amended by Act 918 (2016), establishes the Bank's independence and mandate." },
  { i: Users, t: "Board of Directors", d: "A nine-member Board oversees the Bank's affairs, chaired by the Governor." },
  { i: ShieldCheck, t: "Monetary Policy Committee", d: "A seven-member MPC sets the Monetary Policy Rate independently of government." },
  { i: FileText, t: "Accountability", d: "The Bank reports to Parliament and publishes audited financial statements annually." },
];

function GovernancePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Governance" title="Independent, accountable, transparent." intro="The Bank of Ghana's governance framework safeguards its operational independence while ensuring accountability to Parliament and the public." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-5">
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
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-5">
          {[
            { t: "Bank of Ghana Act 2002 (Act 612)", d: "Establishing legislation" },
            { t: "Amendment Act 918 (2016)", d: "Strengthened independence & MPC" },
            { t: "Code of Corporate Governance", d: "Board & committee charters" },
          ].map((c) => (
            <a key={c.t} href={BOG.governance} {...externalLinkProps} className="rounded-2xl border bg-card p-7 hover:shadow-soft transition">
              <div className="text-xs uppercase tracking-widest text-gold">Document</div>
              <div className="mt-3 font-semibold leading-snug">{c.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
              <div className="mt-5 text-sm text-primary font-medium">Download PDF →</div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-3xl border bg-card p-8">
          <div>
            <h3 className="text-2xl font-display">Meet the Board</h3>
            <p className="mt-2 text-sm text-muted-foreground">Profiles of the Governor, Deputy Governors and non-executive directors.</p>
          </div>
          <Link to="/board" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium">Board of Directors →</Link>
        </div>
      </section>
    </PageShell>
  );
}
