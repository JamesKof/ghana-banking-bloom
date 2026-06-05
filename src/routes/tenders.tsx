import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FileText, Download } from "lucide-react";
import { BOG, externalLinkProps } from "@/lib/external";

export const Route = createFileRoute("/tenders")({
  head: () => ({
    meta: [
      { title: "Tenders — Bank of Ghana" },
      { name: "description", content: "Active and closed tender notices issued by the Bank of Ghana." },
      { property: "og:title", content: "Tenders — Bank of Ghana" },
      { property: "og:description", content: "Active and closed tender notices." },
    ],
  }),
  component: TendersPage,
});

const tenders = [
  { s: "Active", t: "Supply & Installation of Data Centre Cooling System", r: "BOG/ICT/2026/014", c: "30 Jun 2026" },
  { s: "Active", t: "Provision of Cleaning Services — Head Office", r: "BOG/ADM/2026/021", c: "18 Jun 2026" },
  { s: "Active", t: "Currency Logistics — Regional Branches", r: "BOG/CUR/2026/008", c: "12 Jul 2026" },
  { s: "Active", t: "Audit Advisory Services 2026 – 2028", r: "BOG/FIN/2026/002", c: "05 Jul 2026" },
  { s: "Closed", t: "Refurbishment of Kumasi Branch Banking Hall", r: "BOG/EST/2026/003", c: "12 May 2026" },
  { s: "Closed", t: "Supply of Office Furniture", r: "BOG/ADM/2026/011", c: "02 May 2026" },
  { s: "Awarded", t: "Cybersecurity Operations Centre Build-out", r: "BOG/ICT/2025/045", c: "Awarded · Mar 2026" },
];

function TendersPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Tenders" title="Tender notices." intro="A complete register of active, closed and awarded tenders issued by the Bank of Ghana." />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="text-left p-4 w-28">Status</th>
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4 hidden md:table-cell">Reference</th>
                  <th className="text-left p-4 hidden md:table-cell">Closing</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody className="divide-y">
                {tenders.map((t) => (
                  <tr key={t.r} className="hover:bg-secondary/30">
                    <td className="p-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest ${t.s === "Active" ? "bg-emerald-100 text-emerald-800" : t.s === "Closed" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"}`}>{t.s}</span>
                    </td>
                    <td className="p-4 font-medium">{t.t}</td>
                    <td className="p-4 hidden md:table-cell font-mono text-xs text-muted-foreground">{t.r}</td>
                    <td className="p-4 hidden md:table-cell font-mono text-xs text-primary">{t.c}</td>
                    <td className="p-4 text-right"><a href={BOG.tenders} {...externalLinkProps} className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:opacity-80"><FileText className="h-3.5 w-3.5" />Notice <Download className="h-3.5 w-3.5" /></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
