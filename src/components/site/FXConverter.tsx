import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";

const rates: Record<string, number> = { USD: 15.42, EUR: 16.71, GBP: 19.55, CNY: 2.13, NGN: 0.0098, ZAR: 0.83 };

export function FXConverter() {
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState("USD");
  const value = useMemo(() => {
    const n = parseFloat(amount || "0");
    return (n * (rates[from] || 0)).toLocaleString("en-GH", { maximumFractionDigits: 2 });
  }, [amount, from]);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Indicative FX</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-display leading-tight">Daily interbank rates, transparent and authoritative.</h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Rates published daily by the Bank of Ghana, computed from the weighted average of interbank market transactions.
            For indicative purposes only — actual transactions may vary.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card shadow-elegant border p-8">
            <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">You convert</label>
                <div className="mt-2 flex items-center rounded-xl border bg-background h-14 px-4">
                  <input value={amount} onChange={(e) => setAmount(e.target.value)} className="flex-1 bg-transparent outline-none text-xl font-semibold" />
                  <select value={from} onChange={(e) => setFrom(e.target.value)} className="bg-transparent outline-none font-medium text-sm">
                    {Object.keys(rates).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="hidden sm:flex h-14 items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-soft">
                  <ArrowRightLeft className="h-4 w-4" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">You receive</label>
                <div className="mt-2 flex items-center rounded-xl bg-hero text-primary-foreground h-14 px-4">
                  <span className="flex-1 text-xl font-display">₵ {value}</span>
                  <span className="text-sm font-medium text-gold">GHS</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
              <span>Reference rate · {from}/GHS = {rates[from]?.toFixed(4)}</span>
              <span>Last updated: 27 May 2026, 14:00 GMT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
