import dataViz from "@/assets/bog/bank-square.jpg";

const pillars = [
  { k: "01", t: "Price Stability", d: "Anchor inflation expectations through a forward-looking inflation-targeting framework." },
  { k: "02", t: "Financial Stability", d: "Safeguard a resilient, well-capitalised banking sector and modern payment systems." },
  { k: "03", t: "Currency Integrity", d: "Issue, manage and protect the Ghana cedi — symbol of sovereignty and trust." },
  { k: "04", t: "Inclusive Growth", d: "Catalyse financial inclusion, digital finance and economic transformation." },
];

export function Mandate() {
  return (
    <section id="policy" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Mandate</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-display leading-tight">
            Four pillars. <br /> One unwavering purpose.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Established by the Bank of Ghana Ordinance of 1957 and governed under Act 612 (as amended),
            we operate with independence, transparency and a duty to the people of Ghana.
          </p>
          <div className="mt-8 relative rounded-2xl overflow-hidden shadow-soft">
            <img src={dataViz} alt="Licensed banks" loading="lazy" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <div className="text-xs uppercase tracking-widest opacity-80">Headline Inflation</div>
              <div className="font-display text-3xl">3.4% <span className="text-gold text-base">↓ within target</span></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.k} className="group rounded-2xl border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl text-muted-foreground/40">{p.k}</span>
                <span className="h-2 w-2 rounded-full bg-gold opacity-60 group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
