const cols = [
  { h: "About BoG", l: ["History", "Mission & Mandate", "Governance", "Board of Directors", "Departments"] },
  { h: "Policy & Research", l: ["Monetary Policy", "Financial Stability", "Working Papers", "Annual Report", "Inflation Report"] },
  { h: "Markets", l: ["Exchange Rates", "Government Securities", "Open Market Ops", "Reserves Management"] },
  { h: "Supervision", l: ["Licensed Banks", "SDIs", "Payment Systems", "Notices & Circulars", "AML/CFT"] },
  { h: "Public", l: ["Careers", "Procurement", "Tenders", "Contact", "Whistleblower"] },
];
export function Footer() {
  return (
    <footer className="bg-[var(--primary-deep)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div>
              <div className="bg-white/95 rounded-lg p-3 inline-block">
                <img src={new URL("../../assets/bog/logo.png", import.meta.url).href} alt="Bank of Ghana" className="h-10 w-auto" />
              </div>
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
                  {c.l.map((x) => <li key={x}><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition">{x}</a></li>)}
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
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
