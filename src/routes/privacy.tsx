import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bank of Ghana" },
      { name: "description", content: "How the Bank of Ghana collects, uses and protects personal data on bog.gov.gh." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "1. Introduction", b: "The Bank of Ghana (\"the Bank\", \"we\", \"us\") is committed to protecting the privacy of visitors to our website and users of our online services in accordance with the Data Protection Act, 2012 (Act 843)." },
  { h: "2. Information we collect", b: "We collect information you provide directly (e.g. enquiry forms, eServices registration) and limited technical information (IP address, browser type, pages visited) collected automatically through cookies and server logs." },
  { h: "3. How we use information", b: "Information is used to respond to your enquiries, deliver our online services, monitor performance and security of the website, and comply with our legal and regulatory obligations." },
  { h: "4. Sharing of information", b: "We do not sell personal data. We may share information with service providers acting under contract, with other public institutions where required by law, or to investigate fraud and abuse." },
  { h: "5. Cookies", b: "We use strictly-necessary cookies to operate the website and optional analytics cookies to understand usage patterns. You may disable non-essential cookies in your browser." },
  { h: "6. Data retention & security", b: "Personal data is retained only as long as necessary for the purposes stated and protected with administrative, physical and technical safeguards consistent with central-bank standards." },
  { h: "7. Your rights", b: "Under Act 843 you have rights of access, correction, erasure and objection. Requests may be addressed to the Data Protection Officer at dpo@bog.gov.gh." },
  { h: "8. Updates", b: "This policy may be updated from time to time. Material changes will be communicated on this page." },
];

function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy policy." intro="Effective 1 January 2026. Last reviewed May 2026." />
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
