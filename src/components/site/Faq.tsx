import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is the role of the Bank of Ghana?", a: "As the central bank, we formulate and implement monetary policy to maintain price stability, regulate and supervise the banking sector, manage the country's foreign reserves, and issue the national currency — the Ghana cedi." },
  { q: "How is the policy rate determined?", a: "The Monetary Policy Committee (MPC) meets bi-monthly to assess economic conditions and set the policy rate based on a forward-looking inflation outlook and risks to the medium-term target." },
  { q: "How do I report a suspicious or unlicensed financial institution?", a: "Use the secure reporting channels on the Financial Stability page or contact the Banking Supervision Department directly at supervision@bog.gov.gh." },
  { q: "Where can I access historical statistics?", a: "Our Statistics portal offers downloadable time-series data going back to 1957, including monetary, banking, external sector, and real sector indicators." },
];
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Public Information</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-display leading-tight">Frequently asked questions.</h2>
          <p className="mt-5 text-muted-foreground">Clear answers from the central bank. Cannot find what you're looking for? Reach our public affairs office.</p>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left rounded-2xl border bg-card p-6 hover:shadow-soft transition">
              <div className="flex items-center justify-between gap-6">
                <span className="text-lg font-semibold">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? "rotate-45" : ""}`} />
              </div>
              {open === i && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
