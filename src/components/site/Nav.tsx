import { useEffect, useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/bog/logo.png";
import kente from "@/assets/bog/kente-bar.jpg";

const links = [
  { label: "About", to: "/about", items: ["History", "Governance", "Board of Directors", "Departments"] },
  { label: "Monetary Policy", to: "/monetary-policy", items: ["MPC Decisions", "Press Releases", "Inflation Report"] },
  { label: "Financial Stability", to: "/financial-stability", items: ["Reports", "Supervision", "Macroprudential"] },
  { label: "Currency", to: "/currency", items: ["Banknotes & Coins", "Exchange Rates", "Clean Note Policy"] },
  { label: "Statistics", to: "/statistics", items: ["Time Series", "Banking Sector", "External Sector"] },
  { label: "Publications", to: "/publications", items: ["Annual Report", "Bulletins", "Speeches"] },
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
      <div className="hidden md:block border-b border-border/60 text-xs">
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

      <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-background/70 backdrop-blur"}`}>
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bank of Ghana" width={180} height={36} className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <div key={l.label} className="group relative">
                <Link to={l.to} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition">
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:rotate-180 transition" />
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 w-56 transition">
                  <div className="rounded-xl border bg-card shadow-elegant p-2">
                    {l.items.map((i) => (
                      <Link key={i} to={l.to} className="block rounded-md px-3 py-2 text-sm hover:bg-secondary transition">{i}</Link>
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
        {/* Kente strip — authentic BoG brand element */}
        <div className="h-1.5 w-full" style={{ backgroundImage: `url(${kente})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }} />
      </header>
    </>
  );
}
