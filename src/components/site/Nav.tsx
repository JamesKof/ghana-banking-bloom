import { useEffect, useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "About", items: ["History", "Governance", "Board of Directors", "Departments"] },
  { label: "Monetary Policy", items: ["MPC Decisions", "Press Releases", "Inflation Report"] },
  { label: "Financial Stability", items: ["Reports", "Supervision", "Macroprudential"] },
  { label: "Currency", items: ["Banknotes & Coins", "Exchange Rates", "Clean Note Policy"] },
  { label: "Statistics", items: ["Time Series", "Banking Sector", "External Sector"] },
  { label: "Publications", items: ["Annual Report", "Bulletins", "Speeches"] },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-foreground/0 border-b border-border/60 text-xs">
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-muted-foreground">
          <div className="flex items-center gap-5">
            <span>One Thorpe Road, Accra · Ghana</span>
            <span className="opacity-50">|</span>
            <span>+233 (0)302 666 174</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition">Careers</a>
            <a href="#" className="hover:text-foreground transition">Procurement</a>
            <a href="#" className="hover:text-foreground transition">Tenders</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-foreground transition">EN</a>
            <a href="#" className="text-muted-foreground/60">FR</a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-background/60 backdrop-blur"}`}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-hero text-primary-foreground font-display font-bold shadow-soft">
              <span className="absolute inset-0 rounded-md ring-gold" />
              ₵
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight">Bank of Ghana</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Central Bank · Est. 1957</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <div key={l.label} className="group relative">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition">
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:rotate-180 transition" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 w-56 transition">
                  <div className="rounded-xl border bg-card shadow-elegant p-2">
                    {l.items.map((i) => (
                      <a key={i} href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-secondary transition">{i}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary transition" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <a href="#" className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 h-9 text-sm font-medium hover:bg-[var(--primary-deep)] transition shadow-soft">
              eServices
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-secondary" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a key={l.label} href="#" className="block py-2 text-sm font-medium">{l.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
