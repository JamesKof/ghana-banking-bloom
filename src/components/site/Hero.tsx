import heroImg from "@/assets/bog/hero-banner.jpg";
import atumpan from "@/assets/bog/atumpan.svg";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <img src={atumpan} alt="" aria-hidden className="hidden md:block absolute -right-20 -bottom-20 w-[520px] opacity-[0.08] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7 text-primary-foreground fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            130th MPC Press Briefing · Live Broadcast
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Guarding the cedi.<br />
            <span className="text-gold">Anchoring</span> Ghana's future.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
            The central bank of the Republic of Ghana — formulating and implementing monetary policy
            to maintain price stability, foster a sound financial system, and promote inclusive growth
            since 1957.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#policy" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-6 h-12 font-medium shadow-gold hover:translate-y-[-1px] transition">
              Latest MPC Decision <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#stats" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-6 h-12 text-primary-foreground hover:bg-white/10 transition">
              Explore Statistics
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-primary-foreground/60">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Member, BIS · WAMI · AACB</div>
            <div className="hidden sm:flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-white/40" /> Trusted since 4 March 1957</div>
          </div>
        </div>

        <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10">
            <img src={heroImg} alt="Bank of Ghana official banner" width={2500} height={782} className="w-full h-[460px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)]/85 via-[var(--primary-deep)]/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 backdrop-blur p-5 shadow-soft">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                <span>Current Inflation Rate</span>
                <span>April 2026 · YoY</span>
              </div>
              <div className="mt-1 flex items-end gap-3">
                <span className="font-display text-5xl text-foreground">3.4<span className="text-2xl">%</span></span>
                <span className="mb-2 text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">Within Target</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Tracking comfortably within the medium-term target band of 8.0 ± 2%.</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gold/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
