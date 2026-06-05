import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FileText, Download, ArrowUpRight } from "lucide-react";
import { BOG, externalLinkProps } from "@/lib/external";

export const Route = createFileRoute("/procurement")({
  head: () => ({
    meta: [
      { title: "Procurement — Bank of Ghana" },
      { name: "description", content: "Procurement notices, supplier registration and the Bank of Ghana procurement framework." },
      { property: "og:title", content: "Procurement — Bank of Ghana" },
      { property: "og:description", content: "Procurement framework, supplier registration and active notices." },
    ],
  }),
  component: ProcurementPage,
});

const notices = [
  { t: "Supply & Installation of Data Centre Cooling System", r: "BOG/ICT/2026/014", d: "Open National Tender", c: "30 Jun 2026" },
  { t: "Provision of Cleaning Services — Head Office", r: "BOG/ADM/2026/021", d: "Restricted Tender", c: "18 Jun 2026" },
  { t: "Currency Logistics — Regional Branches", r: "BOG/CUR/2026/008", d: "International Competitive Bidding", c: "12 Jul 2026" },
  { t: "Audit Advisory Services 2026 – 2028", r: "BOG/FIN/2026/002", d: "Request for Proposal", c: "05 Jul 2026" },
];

function ProcurementPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Procurement"
        title="Open, fair and transparent procurement."
        intro="The Bank of Ghana procures goods, works and services in line with the Public Procurement Act, 2003 (Act 663) as amended."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Active Notices</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-display">Current tender opportunities</h2>
            </div>
            <Link to="/tenders" className="text-sm font-medium text-primary inline-flex items-center gap-1">View all tenders <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl border bg-card divide-y overflow-hidden">
            {notices.map((n) => (
              <a key={n.r} href={BOG.procurement} {...externalLinkProps} className="group flex items-center gap-6 p-6 hover:bg-secondary/40 transition">
                <span className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><FileText className="h-5 w-5" /></span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold group-hover:text-primary">{n.t}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono">{n.r} · {n.d}</div>
                </div>
                <div className="text-xs text-primary font-mono">Closes {n.c}</div>
                <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="text-2xl font-display">Supplier registration</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">All prospective suppliers must register on the Bank's supplier database. Provide your company profile, tax clearance, SSNIT clearance and PPA certificate.</p>
            <a href={BOG.supplierRegistration} {...externalLinkProps} className="mt-5 inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 h-11 text-sm font-medium hover:bg-[var(--primary-deep)] transition">Register as supplier</a>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="text-2xl font-display">Procurement framework</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Read the Bank's procurement policy, code of ethics for suppliers, and historical contract awards.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["Procurement Policy", "Supplier Code", "Award Register"].map((x) => (
                <a key={x} href={BOG.procurement} {...externalLinkProps} className="inline-flex items-center gap-2 rounded-full border px-4 h-10 text-xs font-medium hover:bg-secondary">{x} <Download className="h-3.5 w-3.5" /></a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
