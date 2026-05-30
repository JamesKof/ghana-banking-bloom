import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Banknote, ShieldCheck, Globe2, LineChart, FileText, Building2, ArrowUpRight, KeyRound } from "lucide-react";

export const Route = createFileRoute("/eservices")({
  head: () => ({
    meta: [
      { title: "eServices — Bank of Ghana" },
      { name: "description", content: "Secure online services for banks, SDIs, the public and government." },
      { property: "og:title", content: "eServices — Bank of Ghana" },
      { property: "og:description", content: "Secure online services portal." },
    ],
  }),
  component: EServicesPage,
});

const services = [
  { i: Building2, t: "Bank Supervision Application (BSA)", d: "Prudential returns submission for universal banks and SDIs.", a: "Regulated entities" },
  { i: LineChart, t: "Foreign Exchange Auction", d: "Authorised dealer bidding and settlement for FX auctions.", a: "Authorised dealers" },
  { i: Banknote, t: "Securities Depository (CSD)", d: "Government securities issuance, trading and settlement.", a: "Primary dealers" },
  { i: Globe2, t: "Online Forex Bureau Returns", d: "Daily and weekly returns by licensed forex bureaux.", a: "Forex bureaux" },
  { i: FileText, t: "Consumer Complaints Portal", d: "Lodge a complaint about a regulated financial institution.", a: "General public" },
  { i: ShieldCheck, t: "Fit & Proper Portal", d: "Submission of directors and key personnel assessments.", a: "Boards & senior management" },
];

function EServicesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="eServices" title="Secure online services." intro="A single portal for licensed institutions, government counterparties and the public to interact with the Bank of Ghana." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ i: Icon, t, d, a }) => (
              <a key={t} href="#" className="group rounded-2xl border bg-card p-6 hover:shadow-soft transition flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition"><Icon className="h-5 w-5" /></span>
                <div className="mt-4 font-semibold">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">{d}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground uppercase tracking-widest">{a}</span>
                  <span className="text-primary font-medium inline-flex items-center gap-1">Open <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 rounded-3xl border bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><KeyRound className="h-6 w-6" /></span>
          <div className="flex-1">
            <h3 className="text-2xl font-display">Need access?</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">Access to BoG eServices is provisioned to authorised institutional users. Contact your relationship manager or the IT Service Desk at <span className="text-primary font-mono">servicedesk@bog.gov.gh</span>.</p>
          </div>
          <a href="#" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium">Request access</a>
        </div>
      </section>
    </PageShell>
  );
}
