import { FormEvent, useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import SiteCTA from "@/components/SiteCTA";

const address =
  "601, 90 Feet Rd, Kandivali, Gayatri Nagar, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const cardClass =
  "rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]";

const fieldClass =
  "w-full rounded-xl border border-line bg-mist px-4 py-3 text-[15px] text-navy outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10 placeholder:text-slate/60";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
          <MapPin className="h-3.5 w-3.5 text-green" />
          Get in touch
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
          Let's talk about your{" "}
          <span className="text-green">next market</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Have a question about shipping, rates, or pickup? Reach out and our
          team will get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Mobile: ${mobile}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:support@stelcore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <div className={`${cardClass} h-full p-7`} data-aos="fade-up">
      <h2 className="font-display text-xl font-bold text-navy">Get in Touch</h2>

      {submitted ? (
        <p className="mt-5 rounded-xl border border-green/30 bg-green-50 px-4 py-3 text-sm text-green-600">
          Thanks — your email client should open so you can send the message.
          We typically reply within one business day.
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-semibold text-navy">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-mobile" className="text-sm font-semibold text-navy">
            Mobile Number
          </label>
          <input
            id="contact-mobile"
            name="mobile"
            type="tel"
            required
            placeholder="+91 00000 00000"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="text-sm font-semibold text-navy">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your shipment or enquiry..."
            className={`${fieldClass} min-h-[140px] resize-y`}
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

function ReachUs() {
  const items = [
    {
      icon: MapPin,
      content: <span>{address}</span>,
    },
    {
      icon: Mail,
      content: (
        <span className="flex flex-col gap-0.5">
          <a
            href="mailto:support@stelcore.com"
            className="font-semibold text-navy transition-colors hover:text-green"
          >
            support@stelcore.com
          </a>
          <a
            href="mailto:support@stelcore.in"
            className="font-semibold text-navy transition-colors hover:text-green"
          >
            support@stelcore.in
          </a>
        </span>
      ),
    },
    {
      icon: Phone,
      content: (
        <a
          href="tel:+919699418777"
          className="font-semibold text-navy transition-colors hover:text-green"
        >
          +91 96994 18777
        </a>
      ),
    },
    {
      icon: MessageCircle,
      content: (
        <a
          href="https://wa.me/919699418777"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy transition-colors hover:text-green"
        >
          WhatsApp: +91 96994 18777
        </a>
      ),
    },
    {
      icon: Clock,
      content: <span>Mon–Sat, 10 AM – 7 PM</span>,
    },
  ];

  return (
    <div className={`${cardClass} h-full p-7`} data-aos="fade-up" data-aos-delay="120">
      <h2 className="font-display text-xl font-bold text-navy">
        Reach Us Directly
      </h2>
      <ul className="mt-5 flex flex-col gap-4">
        {items.map(({ icon: Icon, content }, i) => (
          <li
            key={i}
            className="flex items-start gap-3.5 text-sm leading-relaxed text-slate"
            data-aos="fade-up"
            data-aos-delay={String(Math.min(i, 5) * 80)}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mist">
              <Icon className="h-6 w-6 text-navy" strokeWidth={1.7} />
            </div>
            <div className="pt-2.5">{content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MapSection() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div className={`${cardClass} overflow-hidden p-6 sm:p-7`} data-aos="fade-up">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-bold text-navy">
              Find Us on the Map
            </h2>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-green hover:text-green"
            >
              Open in Google Maps
              <MapPin className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-line bg-mist">
            <iframe
              title="Stelcore office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="h-[380px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-3">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
            <ContactForm />
            <ReachUs />
          </div>
        </div>
      </section>
      <MapSection />
      <SiteCTA band="plain" />
    </>
  );
}
