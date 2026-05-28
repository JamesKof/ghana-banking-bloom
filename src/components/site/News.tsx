import bankSquare from "@/assets/bog/bank-square.jpg";
import database from "@/assets/bog/database.png";
import heroBanner from "@/assets/bog/hero-banner.jpg";
import { ArrowUpRight } from "lucide-react";

const news = [
  { tag: "Press Release", date: "May 2026", title: "130th MPC Press Briefing — Committee statement and economic outlook", img: heroBanner },
  { tag: "Statistics", date: "May 2026", title: "BoG Statistical Database: refreshed time-series and dashboards released", img: database },
  { tag: "Banking", date: "Apr 2026", title: "Bank Square: updated directory of licensed banks and SDIs", img: bankSquare },
];
export function News() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Latest News & Notices</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">Statements, speeches & analysis</h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:opacity-70">All publications →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <a key={i} href="#" className="group rounded-2xl overflow-hidden border bg-card hover:shadow-elegant transition">
              <div className="relative h-56 overflow-hidden bg-secondary">
                <img src={n.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-background/90 backdrop-blur px-2.5 py-1 rounded-full font-semibold">{n.tag}</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{n.date}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-primary transition">{n.title}</h3>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
