import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Eye, Keyboard, Languages, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Bank of Ghana" },
      { name: "description", content: "The Bank of Ghana's accessibility statement and commitment to inclusive digital services." },
    ],
  }),
  component: AccessibilityPage,
});

const features = [
  { i: Eye, t: "Visual", d: "High-contrast colour palette and scalable typography that respects browser font-size settings." },
  { i: Keyboard, t: "Keyboard", d: "All interactive elements reachable and operable via standard keyboard navigation." },
  { i: Languages, t: "Multilingual", d: "Core institutional content available in English and French." },
  { i: MessageSquare, t: "Feedback", d: "Report accessibility issues at accessibility@bog.gov.gh — we aim to respond within 5 working days." },
];

function AccessibilityPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Accessibility" title="An inclusive website for every Ghanaian." intro="The Bank of Ghana is committed to making its digital channels accessible to everyone, including people with disabilities, in line with WCAG 2.1 AA." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
              <div className="mt-4 font-semibold">{t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-display">Conformance</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">This website is built to substantially conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. Independent audits are conducted annually and remediation is tracked through the Bank's digital governance committee.</p>
        </div>
      </section>
    </PageShell>
  );
}
