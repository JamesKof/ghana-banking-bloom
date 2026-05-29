import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FXConverter } from "@/components/site/FXConverter";

export const Route = createFileRoute("/currency")({
  head: () => ({
    meta: [
      { title: "Currency & Exchange Rates — Bank of Ghana" },
      { name: "description", content: "The Ghana cedi — banknotes, coins, interbank exchange rates and the clean-note policy." },
      { property: "og:title", content: "Currency — Bank of Ghana" },
      { property: "og:description", content: "Banknotes, coins and interbank exchange rates." },
    ],
  }),
  component: CurrencyPage,
});

const notes = [
  { d: "GH₵ 1", c: "Independence Arch", color: "from-red-700 to-red-900" },
  { d: "GH₵ 2", c: "Tetteh-Quarshie Memorial", color: "from-blue-700 to-blue-900" },
  { d: "GH₵ 5", c: "University of Ghana", color: "from-emerald-700 to-emerald-900" },
  { d: "GH₵ 10", c: "Akosombo Dam", color: "from-amber-600 to-amber-800" },
  { d: "GH₵ 20", c: "Supreme Court", color: "from-purple-700 to-purple-900" },
  { d: "GH₵ 50", c: "Christiansborg Castle", color: "from-rose-700 to-rose-900" },
  { d: "GH₵ 100", c: "Jubilee House", color: "from-teal-700 to-teal-900" },
  { d: "GH₵ 200", c: "Bank of Ghana HQ", color: "from-indigo-700 to-indigo-900" },
];

const rates = [
  { c: "USD", n: "US Dollar", b: "10.4521", s: "10.4825" },
  { c: "GBP", n: "Pound Sterling", b: "13.2104", s: "13.2510" },
  { c: "EUR", n: "Euro", b: "11.3208", s: "11.3580" },
  { c: "CAD", n: "Canadian Dollar", b: "7.6210", s: "7.6520" },
  { c: "ZAR", n: "South African Rand", b: "0.5712", s: "0.5742" },
  { c: "NGN", n: "Nigerian Naira", b: "0.0066", s: "0.0068" },
];

function CurrencyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Currency"
        title="The Ghana cedi — issued by the Bank."
        intro="The Bank of Ghana is the sole issuer of the legal tender of the Republic of Ghana. Our currency operations ensure availability, integrity and public confidence in the cedi."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Banknotes in Circulation</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Eight denominations</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {notes.map((n) => (
              <div key={n.d} className={`relative aspect-[16/9] rounded-xl overflow-hidden shadow-soft bg-gradient-to-br ${n.color} text-white p-5 flex flex-col justify-between`}>
                <div className="text-xs uppercase tracking-widest opacity-80">Bank of Ghana</div>
                <div>
                  <div className="text-3xl font-display">{n.d}</div>
                  <div className="text-[11px] opacity-90 mt-1">{n.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Interbank Reference Rates</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-display">Daily exchange rates</h2>
              <p className="text-sm text-muted-foreground mt-2">Indicative · published each business day at 12:00 GMT.</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="text-left p-4">Currency</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-right p-4">Buying (GH₵)</th>
                  <th className="text-right p-4">Selling (GH₵)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rates.map((r) => (
                  <tr key={r.c} className="hover:bg-secondary/30">
                    <td className="p-4 font-semibold">{r.c}</td>
                    <td className="p-4 text-muted-foreground">{r.n}</td>
                    <td className="p-4 text-right font-mono">{r.b}</td>
                    <td className="p-4 text-right font-mono">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FXConverter />
    </PageShell>
  );
}
