import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Bank of Ghana" },
      { name: "description", content: "Terms governing your use of the Bank of Ghana website and online services." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { h: "1. Acceptance", b: "By accessing bog.gov.gh you agree to be bound by these Terms of Use and all applicable laws of the Republic of Ghana." },
  { h: "2. No financial advice", b: "Information on this website is published for general information and does not constitute investment, legal or financial advice. Always consult a qualified professional before acting on any information." },
  { h: "3. Statistical data", b: "Statistical releases are provisional unless marked as final and may be revised. The Bank does not warrant the accuracy of data sourced from third parties." },
  { h: "4. Intellectual property", b: "All content, logos, and trade marks are the property of the Bank of Ghana unless otherwise indicated. You may reproduce material for non-commercial use with attribution." },
  { h: "5. External links", b: "Links to third-party websites are provided for convenience. The Bank is not responsible for the content or availability of external sites." },
  { h: "6. Security", b: "Unauthorised attempts to access, modify, or disrupt this website are strictly prohibited and may be prosecuted under the Electronic Transactions Act, 2008 (Act 772) and the Cybersecurity Act, 2020 (Act 1038)." },
  { h: "7. Limitation of liability", b: "To the maximum extent permitted by law, the Bank shall not be liable for any indirect or consequential loss arising from use of this website." },
  { h: "8. Governing law", b: "These terms are governed by the laws of the Republic of Ghana." },
];

function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of use." intro="Effective 1 January 2026." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-display text-primary">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
