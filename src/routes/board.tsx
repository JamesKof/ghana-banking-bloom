import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board of Directors — Bank of Ghana" },
      { name: "description", content: "Members of the Bank of Ghana Board of Directors and Monetary Policy Committee." },
    ],
  }),
  component: BoardPage,
});

const board = [
  { n: "Dr. Johnson Pandit Asiama", r: "Governor & Chairman", b: "PhD Economics. Joined the Bank in 1995; appointed Governor in 2025." },
  { n: "Dr. Zakari Mumuni", r: "First Deputy Governor", b: "Career central banker with focus on monetary operations." },
  { n: "Mr. Matthew Opoku Prempeh", r: "Second Deputy Governor", b: "Oversees banking supervision and financial stability." },
  { n: "Mrs. Elsie Addo Awadzi", r: "Non-Executive Director", b: "Legal and financial-sector reform expert." },
  { n: "Prof. Eric Osei-Assibey", r: "Non-Executive Director", b: "Professor of Economics, University of Ghana." },
  { n: "Mrs. Maria-Goretti Loglo", r: "Non-Executive Director", b: "Anti-money-laundering and compliance specialist." },
  { n: "Mr. Andrew Boye-Doe", r: "Non-Executive Director", b: "Former Controller and Accountant-General." },
  { n: "Mrs. Charlotte Osafo", r: "Non-Executive Director", b: "Corporate governance and risk management." },
  { n: "Mr. Sampson Akligoh", r: "Non-Executive Director", b: "Capital markets and financial-sector policy." },
];

function BoardPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Board of Directors" title="Stewards of the central bank." intro="The Board of Directors of the Bank of Ghana, appointed under the Bank of Ghana Act, 2002 (Act 612) as amended." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {board.map((m) => (
            <div key={m.n} className="rounded-2xl border bg-card p-6">
              <div className="h-32 rounded-xl bg-gradient-to-br from-[var(--primary-deep)] via-primary to-gold flex items-end p-4">
                <div className="h-16 w-16 rounded-full bg-card border-4 border-card flex items-center justify-center text-primary font-display text-xl -mb-10">
                  {m.n.split(" ").slice(-2).map((p) => p[0]).join("")}
                </div>
              </div>
              <div className="mt-12">
                <div className="font-semibold text-lg leading-tight">{m.n}</div>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">{m.r}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
