import { Landmark, LineChart, FileText, Banknote, ShieldCheck, GraduationCap } from "lucide-react";
const items = [
  { icon: Landmark, t: "Monetary Policy", d: "Decisions, statements & reports" },
  { icon: LineChart, t: "Statistics & Data", d: "Time series and dashboards" },
  { icon: Banknote, t: "Currency & FX", d: "Banknotes, rates and reserves" },
  { icon: ShieldCheck, t: "Supervision", d: "Banks, SDIs & payment systems" },
  { icon: FileText, t: "Notices & Circulars", d: "Regulatory communications" },
  { icon: GraduationCap, t: "Financial Literacy", d: "Education and resources" },
];
export function QuickLinks() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-card shadow-elegant border p-3 md:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {items.map(({ icon: Icon, t, d }) => (
            <a key={t} href="#" className="group relative rounded-2xl p-4 hover:bg-secondary transition flex flex-col gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{d}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
