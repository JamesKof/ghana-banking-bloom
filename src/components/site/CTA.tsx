import skyline from "@/assets/accra-skyline.jpg";
export function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl relative rounded-3xl overflow-hidden shadow-elegant">
        <img src={skyline} alt="Accra skyline" width={1600} height={800} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative px-8 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center text-primary-foreground">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Stay Informed</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-display leading-tight">Subscribe to BoG dispatches.</h2>
            <p className="mt-4 text-primary-foreground/75 max-w-md">MPC decisions, press releases, statistical bulletins and circulars delivered to your inbox.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="your.email@domain.com" className="flex-1 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 px-6 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold transition" />
            <button className="h-14 px-7 rounded-full bg-gold-gradient text-gold-foreground font-semibold shadow-gold hover:translate-y-[-1px] transition">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
