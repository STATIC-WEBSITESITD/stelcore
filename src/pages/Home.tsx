import {
  Anchor,
  ArrowRight,
  Box,
  Globe,
  Package,
  Plane,
  Settings,
  ShieldCheck,
  Truck,
  TrendingUp,
  Users,
} from "lucide-react";
import SiteCTA from "@/components/SiteCTA";

const features = [
  {
    icon: Globe,
    title: "Operate globally",
    body: "Expand into new markets faster with local expertise and infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Stay compliant",
    body: "We manage regulations, taxes, and policies—so you stay protected.",
  },
  {
    icon: Box,
    title: "Streamline supply chain",
    body: "End-to-end supply chain and logistics built for speed, reliability, and scale.",
  },
  {
    icon: Users,
    title: "Expand without in-house ops",
    body: "We become your back-office engine—so you can stay focused on growth.",
  },
];

const steps = [
  {
    icon: TrendingUp,
    accent: "green" as const,
    title: "You build demand",
    body: "Create the vision, product, and brand. We'll help you reach more customers in more places.",
  },
  {
    icon: Settings,
    accent: "navy" as const,
    title: "We run operations",
    body: "From compliance to fulfilment and support—we manage the complexity behind the scenes.",
  },
  {
    icon: Globe,
    accent: "green" as const,
    title: "Scale with confidence",
    body: "Reduce risk, accelerate go-to-market, and build a global business that lasts.",
  },
];

const stats = [
  { icon: Globe, value: "14+", label: "Countries served" },
  { icon: Users, value: "3,000+", label: "Brands supported" },
  { icon: Box, value: "10M+", label: "Orders fulfilled" },
  { icon: ShieldCheck, value: "15+", label: "Years of experience" },
];

const modes = [
  {
    icon: Plane,
    label: "Air Freight",
    sub: "Express global delivery",
    stat: "2–5 days",
    statLabel: "Transit time",
    color: "blue",
    tags: ["Priority cargo", "Time-sensitive", "Worldwide"],
  },
  {
    icon: Anchor,
    label: "Sea Freight",
    sub: "Full & less-than-container",
    stat: "98.7%",
    statLabel: "On-time rate",
    color: "green",
    tags: ["FCL / LCL", "Cost-efficient", "High volume"],
  },
  {
    icon: Truck,
    label: "Road Freight",
    sub: "First & last-mile delivery",
    stat: "24 hr",
    statLabel: "Pickup SLA",
    color: "amber",
    tags: ["Pan-India", "Door to door", "Real-time track"],
  },
];

function SupplyChainVisual() {
  return (
    <div className="relative h-full min-h-[520px]">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwY29udGFpbmVycyUyMGFlcmlhbHxlbnwxfHx8fDE3ODkwMDk0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Aerial view of shipping container yard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
      </div>

      <div className="absolute bottom-5 left-5 flex flex-col gap-2">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const bg =
            mode.color === "green"
              ? "bg-green"
              : mode.color === "blue"
              ? "bg-[#1e3a5f]"
              : "bg-amber-500";
          return (
            <div
              key={mode.label}
              className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-md"
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                <Icon className="h-4 w-4 text-white" strokeWidth={1.9} />
              </div>
              <div>
                <p className="text-[13px] font-bold leading-none text-white">{mode.label}</p>
                <p className="mt-0.5 text-[11px] leading-none text-white/70">{mode.sub}</p>
              </div>
              <span className="ml-3 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-white">
                {mode.stat}
              </span>
            </div>
          );
        })}
      </div>

      <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-green/40 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
        <span className="text-[12px] font-semibold text-navy">Live tracking</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,95,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,58,95,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[520px] w-[520px] -translate-y-24 translate-x-24 rounded-full bg-green/5 blur-3xl sm:block" />

      <div className="relative z-10 mx-auto grid max-w-site items-center gap-12 px-3 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Your global supply chain partner
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
            Move Shipment smarter,
            <br />
            <span className="text-green">across every mode.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
            Air, sea, or road—Stelcore orchestrates end-to-end logistics so your
            goods reach any market, on time and in full compliance.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#16305a]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-green/40 px-6 py-3.5 text-[15px] font-semibold text-green transition-colors hover:bg-green-50"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-10 flex flex-nowrap items-center gap-4 overflow-x-auto border-t border-line pt-8 sm:gap-8">
            {[
              { icon: Globe, text: "14+ countries" },
              { icon: Package, text: "10M+ orders" },
              { icon: ShieldCheck, text: "100% compliant" },
              { icon: Users, text: "3,000+ brands" },
            ].map(({ icon: I, text }) => (
              <span
                key={text}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-navy"
              >
                <I className="h-4 w-4 shrink-0 text-green" strokeWidth={1.8} />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <SupplyChainVisual />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className="group rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]"
              data-aos="fade-up"
              data-aos-delay={String(index * 80)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-green-50">
                <Icon className="h-6 w-6 text-navy transition-colors group-hover:text-green" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">How it works</p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
            You build the brand. We build the operating engine.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body, accent }, index) => (
            <div
              key={title}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={String(index * 100)}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  accent === "green" ? "bg-green" : "bg-navy"
                }`}
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.7} />
              </div>
              <div
                className={`mt-6 h-1 w-12 rounded-full ${
                  accent === "green" ? "bg-green" : "bg-navy"
                }`}
              />
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="grid divide-line rounded-2xl border border-line bg-white sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className="flex items-center gap-4 px-8 py-8"
              data-aos="fade-up"
              data-aos-delay={String(index * 80)}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Icon className="h-6 w-6 text-green" strokeWidth={1.7} />
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-navy">{value}</div>
                <div className="text-sm text-slate">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Stats />
      <SiteCTA />
    </>
  );
}