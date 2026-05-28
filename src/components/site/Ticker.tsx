const rates = [
  { c: "USD/GHS", v: "15.42", d: "+0.08%" },
  { c: "EUR/GHS", v: "16.71", d: "-0.12%" },
  { c: "GBP/GHS", v: "19.55", d: "+0.21%" },
  { c: "Policy Rate", v: "27.00%", d: "Hold" },
  { c: "Inflation (Apr)", v: "23.1%", d: "-1.4pp" },
  { c: "T-Bill 91-day", v: "24.85%", d: "+0.05" },
  { c: "Reserves (US$bn)", v: "6.87", d: "+0.14" },
  { c: "CNY/GHS", v: "2.13", d: "+0.03%" },
];
export function Ticker() {
  const items = [...rates, ...rates];
  return (
    <div className="border-y bg-primary text-primary-foreground/90 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 h-11 flex items-center gap-6 text-[12.5px] overflow-hidden">
        <span className="shrink-0 text-gold font-semibold tracking-widest uppercase text-[10px]">Live · Market Data</span>
        <div className="marquee whitespace-nowrap">
          {items.map((r, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="text-primary-foreground/60">{r.c}</span>
              <span className="font-semibold">{r.v}</span>
              <span className={r.d.startsWith("-") ? "text-rose-300" : "text-emerald-300"}>{r.d}</span>
              <span className="text-primary-foreground/20 ml-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
