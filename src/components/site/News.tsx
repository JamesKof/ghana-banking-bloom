import governor from "@/assets/governor.jpg";
import cedi from "@/assets/cedi-notes.jpg";
import skyline from "@/assets/accra-skyline.jpg";
import { ArrowUpRight } from "lucide-react";

const news = [
  { tag: "Press Release", date: "27 May 2026", title: "MPC maintains policy rate at 27% as disinflation consolidates", img: governor },
  { tag: "Currency", date: "21 May 2026", title: "Clean Note Policy: Refreshed cedi series enters circulation", img: cedi },
  { tag: "Speech", date: "14 May 2026", title: "Governor's address on digital currency and the future of payments", img: skyline },
];
export function News() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Newsroom</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-display">Statements, speeches & analysis</h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:opacity-70">All publications →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <a key={i} href="#" className="group rounded-2xl overflow-hidden border bg-card hover:shadow-elegant transition">
              <div className="relative h-56 overflow-hidden">
                <img src={n.img} alt="" width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
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
