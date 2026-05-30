import { Link } from "@tanstack/react-router";
import logo from "@/assets/bog/logo.png";

const cols: { h: string; l: { t: string; to: string }[] }[] = [
  { h: "About BoG", l: [
    { t: "History", to: "/about" },
    { t: "Mission & Mandate", to: "/about" },
    { t: "Governance", to: "/about" },
    { t: "Departments", to: "/about" },
  ]},
  { h: "Policy & Research", l: [
    { t: "Monetary Policy", to: "/monetary-policy" },
    { t: "Inflation Report", to: "/publications" },
    { t: "Working Papers", to: "/publications" },
    { t: "Annual Report", to: "/publications" },
  ]},
  { h: "Markets", l: [
    { t: "Exchange Rates", to: "/currency" },
    { t: "Banknotes & Coins", to: "/currency" },
    { t: "Statistics", to: "/statistics" },
  ]},
  { h: "Supervision", l: [
    { t: "Financial Stability", to: "/financial-stability" },
    { t: "Licensed Banks", to: "/financial-stability" },
    { t: "Payment Systems", to: "/financial-stability" },
  ]},
  { h: "Public", l: [
    { t: "Contact", to: "/contact" },
    { t: "Careers", to: "/contact" },
    { t: "Procurement", to: "/contact" },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-[var(--primary-deep)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white/95 rounded-lg p-3 inline-block">
              <img src={logo} alt="Bank of Ghana" className="h-10 w-auto" />
            </div>
            <p className="mt-5 text-sm text-primary-foreground/65 leading-relaxed">
              One Thorpe Road<br />
              P.O. Box GP 2674, Accra<br />
              Ghana
            </p>
            <p className="mt-4 text-xs text-primary-foreground/60">+233 (0)302 666 174<br />info@bog.gov.gh</p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-5 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{c.h}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.l.map((x) => (
                    <li key={x.t}><Link to={x.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition">{x.t}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/55">
          <div className="flex items-center gap-4">
            <span>© 2026 Bank of Ghana. All rights reserved.</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>An institution of the Republic of Ghana 🇬🇭</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-primary-foreground">Privacy</Link>
            <Link to="/accessibility" className="hover:text-primary-foreground">Accessibility</Link>
            <Link to="/terms" className="hover:text-primary-foreground">Terms</Link>
            <Link to="/sitemap" className="hover:text-primary-foreground">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
