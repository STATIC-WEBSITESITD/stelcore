import { useState } from "react";
import { Building2, ChevronDown, Eye, Heart, Target } from "lucide-react";
import SiteCTA from "@/components/SiteCTA";

const cardClass =
  "rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]";

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be the most trusted global growth partner—helping brands enter new markets with confidence, compliance, and care.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver fast, reliable, and compliant logistics through supply chain excellence, local fulfilment, and proactive support at every stage.",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "Reliability, transparency, and customer-first service—backed by careful handling, clear communication, and consistent shipment updates.",
  },
];

const faqs = [
  {
    question: "Which markets does Stelcore operate in?",
    answer:
      "Stelcore infrastructure is live across 14+ markets including India, USA, Europe, UK, GCC, Korea, Hong Kong, and more—with local entities, compliance, and supply chain coverage.",
  },
  {
    question: "What services does Stelcore offer?",
    answer:
      "We offer trade enablement, compliance, cross-border express, ocean freight, supply chain, global fulfilment, last-mile & returns, and global trade support—covering both B2B and brand expansion needs.",
  },
  {
    question: "How do I get a quote or book a shipment?",
    answer:
      "Reach us by phone, WhatsApp, or the contact form with your shipment details. Our team typically responds within one business day with clear next steps.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "Yes. After booking, use My Shipment with your AWB, forwarding, or reference number to view real-time status and delivery updates.",
  },
  {
    question: "Who is Stelcore for?",
    answer:
      "We work with brands, exporters, e-commerce sellers, and growing businesses that need an operating partner for cross-border logistics, compliance, and market expansion.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
          <Building2 className="h-3.5 w-3.5 text-green" />
          About us
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
          More than logistics—{" "}
          <span className="text-green">your growth partner</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Stelcore helps brands expand globally with compliance, supply chain,
          and fulfilment handled—so you can focus on building the brand.
        </p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl border border-line" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Stelcore logistics and warehouse operations"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-xl border border-line bg-white/95 px-4 py-2 text-sm font-semibold text-navy shadow-sm backdrop-blur-sm">
              Trusted global partner
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              About Stelcore
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
              We deliver more than shipments—we deliver scale.
            </h2>
            <p className="mt-5 leading-relaxed text-slate">
              Welcome to <strong className="text-navy">Stelcore</strong>, your
              operating partner for global growth based in Mumbai, India.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              We blend hands-on service with modern logistics expertise—covering
              trade enablement, compliance, cross-border express, ocean freight,
              fulfilment, and last-mile returns.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Whether you are launching in a new market or shipping at scale, we
              keep operations smooth from pickup to final delivery with clear
              pricing and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Purpose() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            Our purpose
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
            Vision, Mission & Values
          </h2>
          <p className="mt-4 text-lg text-slate">
            We focus on reliable global delivery, compliant operations, and
            long-term partnerships for brands expanding internationally.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={`${cardClass} p-7`}
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index, 5) * 80)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist">
                <Icon className="h-6 w-6 text-navy" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate">
            Quick answers about markets, services, tracking, and how Stelcore
            works with growing brands.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={cardClass}
                data-aos="fade-up"
                data-aos-delay={String(Math.min(index, 5) * 80)}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[15px] font-bold text-navy sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-green transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Hero />
      <Intro />
      <Purpose />
      <Faq />
      <SiteCTA />
    </>
  );
}
