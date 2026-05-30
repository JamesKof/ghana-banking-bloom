import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Bank of Ghana" },
      { name: "description", content: "Browse the full directory of pages on bog.gov.gh." },
    ],
  }),
  component: SitemapPage,
});

const sections: { h: string; l: { t: string; to: string }[] }[] = [
  { h: "About", l: [
    { t: "About the Bank", to: "/about" },
    { t: "Governance", to: "/governance" },
    { t: "Board of Directors", to: "/board" },
  ]},
  { h: "Policy", l: [
    { t: "Monetary Policy", to: "/monetary-policy" },
    { t: "Press Releases", to: "/press-releases" },
    { t: "Financial Stability", to: "/financial-stability" },
  ]},
  { h: "Markets & Data", l: [
    { t: "Currency", to: "/currency" },
    { t: "Statistics", to: "/statistics" },
    { t: "Publications", to: "/publications" },
  ]},
  { h: "Public Services", l: [
    { t: "eServices", to: "/eservices" },
    { t: "Contact", to: "/contact" },
    { t: "Careers", to: "/careers" },
    { t: "Procurement", to: "/procurement" },
    { t: "Tenders", to: "/tenders" },
  ]},
  { h: "Legal", l: [
    { t: "Privacy", to: "/privacy" },
    { t: "Terms", to: "/terms" },
    { t: "Accessibility", to: "/accessibility" },
  ]},
];

function SitemapPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Sitemap" title="Everything in one place." intro="A complete index of the Bank of Ghana website." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {sections.map((s) => (
            <div key={s.h}>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{s.h}</div>
              <ul className="mt-4 space-y-2.5">
                {s.l.map((x) => (
                  <li key={x.t}><Link to={x.to} className="text-sm hover:text-primary">{x.t}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
