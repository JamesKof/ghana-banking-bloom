import atumpan from "@/assets/bog/atumpan.svg";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative bg-hero text-primary-foreground overflow-hidden">
      <img src={atumpan} alt="" aria-hidden className="absolute -right-20 -top-10 w-[520px] opacity-10 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
        <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-display leading-[1.05] max-w-4xl">{title}</h1>
        {intro && <p className="mt-6 text-primary-foreground/75 max-w-2xl text-lg leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
