const cards = [
  { l: "Policy Rate", v: "27.00%", s: "Maintained · May 2026" },
  { l: "Headline Inflation", v: "23.1%", s: "April 2026 · YoY" },
  { l: "Gross Reserves", v: "US$6.87B", s: "3.0 months import cover" },
  { l: "Banking Sector CAR", v: "14.2%", s: "Above 13% prudential minimum" },
];
export function Stats() {
  return (
    <section id="stats" className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(transparent 95%, white 95%), linear-gradient(90deg, transparent 95%, white 95%)", backgroundSize: "44px 44px" }} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold">The Economy at a Glance</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-display max-w-2xl">Key indicators, updated continuously.</h2>
          </div>
          <a href="#" className="text-sm border-b border-gold pb-1 text-gold hover:opacity-80">View full dashboard →</a>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {cards.map((c) => (
            <div key={c.l} className="bg-primary p-8 hover:bg-[var(--primary-deep)] transition">
              <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{c.l}</div>
              <div className="mt-4 font-display text-5xl">{c.v}</div>
              <div className="mt-3 text-xs text-primary-foreground/60">{c.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
