import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/press-releases")({
  head: () => ({
    meta: [
      { title: "Press Releases — Bank of Ghana" },
      { name: "description", content: "Official press releases and media statements from the Bank of Ghana." },
      { property: "og:title", content: "Press Releases — Bank of Ghana" },
    ],
  }),
  component: PressPage,
});

const releases = [
  { d: "27 May 2026", c: "MPC", t: "130th MPC maintains Policy Rate at 21.50%", s: "The Monetary Policy Committee voted unanimously to hold the Monetary Policy Rate, citing continued progress on disinflation." },
  { d: "20 May 2026", c: "Supervision", t: "Bank of Ghana revokes licence of XYZ Microfinance", s: "Action taken under section 123 of the Banks and Specialised Deposit-Taking Institutions Act, 2016 (Act 930)." },
  { d: "12 May 2026", c: "Currency", t: "Public advisory on counterfeit GH₵ 200 notes", s: "The Bank reminds the public of the security features of the GH₵ 200 banknote." },
  { d: "30 Apr 2026", c: "Markets", t: "FX Auction results — April 2026", s: "Settlement details and weighted average rates for the month's wholesale FX auctions." },
  { d: "22 Apr 2026", c: "Payments", t: "GhanaPay reaches 5 million active users", s: "The national mobile-money interoperability platform crosses a key adoption milestone." },
  { d: "10 Apr 2026", c: "Speech", t: "Remarks by the Governor at the African Central Banks Summit", s: "On regional payment integration and de-dollarisation." },
];

function PressPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Press Releases" title="Official statements from the Bank." intro="Browse the latest press releases, MPC statements and public advisories." />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          {releases.map((r) => (
            <a key={r.t} href="#" className="group block rounded-2xl border bg-card p-6 hover:shadow-soft transition">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-mono text-muted-foreground">{r.d}</span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 uppercase tracking-widest text-[10px] font-semibold text-primary">{r.c}</span>
              </div>
              <div className="mt-3 font-semibold text-lg group-hover:text-primary leading-snug">{r.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.s}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">Read full release <ArrowUpRight className="h-4 w-4" /></div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
