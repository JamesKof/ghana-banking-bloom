import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Briefcase, MapPin, Clock, ArrowUpRight, GraduationCap, Users, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Bank of Ghana" },
      { name: "description", content: "Join the Bank of Ghana. Explore current vacancies, graduate programmes and internships at Ghana's central bank." },
      { property: "og:title", content: "Careers — Bank of Ghana" },
      { property: "og:description", content: "Build a career at Ghana's central bank." },
    ],
  }),
  component: CareersPage,
});

const vacancies = [
  { t: "Senior Economist — Monetary Policy", d: "Research Department", l: "Accra", c: "Full-time", e: "12 Jun 2026" },
  { t: "Bank Examiner II", d: "Banking Supervision", l: "Accra", c: "Full-time", e: "18 Jun 2026" },
  { t: "Data Scientist", d: "Statistics Department", l: "Accra", c: "Full-time", e: "20 Jun 2026" },
  { t: "IT Security Analyst", d: "Information Technology", l: "Accra", c: "Full-time", e: "22 Jun 2026" },
  { t: "Cash Officer", d: "Currency Management", l: "Kumasi", c: "Full-time", e: "25 Jun 2026" },
  { t: "Legal Counsel", d: "Legal Department", l: "Accra", c: "Full-time", e: "28 Jun 2026" },
];

const benefits = [
  { i: GraduationCap, t: "Learning & Development", d: "Tuition support, executive education and continuous professional development." },
  { i: Heart, t: "Health & Wellbeing", d: "Comprehensive medical cover for staff and dependents, on-site clinic." },
  { i: ShieldCheck, t: "Pension & Security", d: "Above-statutory pension scheme and long-service recognition." },
  { i: Users, t: "Inclusive Culture", d: "Equal opportunity employer committed to diversity and gender balance." },
];

function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Build a career at Ghana's central bank."
        intro="We hire economists, examiners, technologists, lawyers and operations professionals committed to serving the public interest with integrity."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Current Vacancies</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-display">Open positions</h2>
            </div>
            <div className="text-sm text-muted-foreground">{vacancies.length} active roles · Updated weekly</div>
          </div>
          <div className="rounded-2xl border bg-card divide-y overflow-hidden">
            {vacancies.map((v) => (
              <a key={v.t} href="#" className="group flex items-center gap-6 p-6 hover:bg-secondary/40 transition">
                <span className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Briefcase className="h-5 w-5" /></span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold group-hover:text-primary">{v.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{v.d}</div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{v.l}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{v.c}</span>
                  <span className="font-mono text-primary">Closes {v.e}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why BoG</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">A workplace of purpose</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                <div className="mt-4 font-semibold">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-5">
          {[
            { t: "Graduate Programme", d: "Two-year rotation across Research, Supervision and Markets for top graduates." },
            { t: "Internships", d: "Structured summer placements for university students in Ghana and the diaspora." },
            { t: "Executive Hiring", d: "Senior leadership opportunities posted as they arise across departments." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border bg-card p-7">
              <div className="text-xs uppercase tracking-widest text-gold">Programme</div>
              <div className="mt-3 font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              <a href="#" className="mt-5 inline-flex items-center text-sm font-medium text-primary">Learn more →</a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
