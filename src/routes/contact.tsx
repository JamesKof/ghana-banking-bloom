import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bank of Ghana" },
      { name: "description", content: "Get in touch with the Bank of Ghana — Head Office, regional branches and public enquiries." },
      { property: "og:title", content: "Contact — Bank of Ghana" },
      { property: "og:description", content: "Head Office, branches and public enquiries." },
    ],
  }),
  component: ContactPage,
});

const branches = [
  { c: "Accra (Head Office)", a: "One Thorpe Road, P.O. Box GP 2674", t: "+233 (0)302 666 174" },
  { c: "Kumasi", a: "Adum, Prempeh II Street", t: "+233 (0)322 022 471" },
  { c: "Takoradi", a: "Liberation Road", t: "+233 (0)312 022 081" },
  { c: "Tamale", a: "Bolgatanga Road", t: "+233 (0)372 022 049" },
  { c: "Sunyani", a: "Hospital Road", t: "+233 (0)352 023 217" },
  { c: "Hohoe", a: "Volta Region", t: "+233 (0)362 722 510" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="We're here to help."
        intro="For general public enquiries, media, supervised entities, or consumer reporting — reach the right team below."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { i: MapPin, l: "Head Office", v: "One Thorpe Road\nP.O. Box GP 2674, Accra" },
              { i: Phone, l: "Telephone", v: "+233 (0)302 666 174 / 5\n+233 (0)302 666 902" },
              { i: Mail, l: "Email", v: "info@bog.gov.gh\nmedia@bog.gov.gh" },
              { i: Clock, l: "Office Hours", v: "Mon – Fri · 08:00 – 17:00 GMT\nClosed on public holidays" },
            ].map(({ i: Icon, l, v }) => (
              <div key={l} className="rounded-2xl border bg-card p-6 flex gap-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                  <div className="mt-1.5 font-medium whitespace-pre-line text-sm leading-relaxed">{v}</div>
                </div>
              </div>
            ))}
          </div>
          <form className="lg:col-span-3 rounded-3xl border bg-card p-8 shadow-soft">
            <h2 className="text-2xl font-display">Send a message</h2>
            <p className="text-sm text-muted-foreground mt-1">Public enquiries receive a response within 3 business days.</p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Yaw Mensah" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Subject" placeholder="Re: Statistical request" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={5} className="mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" placeholder="How can we help?" />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium hover:bg-[var(--primary-deep)] transition shadow-soft">Send enquiry</button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Branches</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-display">Regional offices</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((b) => (
              <div key={b.c} className="rounded-2xl border bg-card p-6">
                <div className="font-semibold text-lg">{b.c}</div>
                <div className="mt-2 text-sm text-muted-foreground">{b.a}</div>
                <div className="mt-3 text-sm font-mono text-primary">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, type = "text", placeholder, className = "" }: { label: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full h-12 rounded-xl border bg-background px-4 text-sm outline-none focus:border-primary transition" />
    </div>
  );
}
