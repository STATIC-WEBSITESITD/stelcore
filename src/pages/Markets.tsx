import {
  FileCheck,
  Globe,
  Rocket,
  ShieldCheck,
  Store,
  Target,
  Truck,
} from "lucide-react";
import SiteCTA from "@/components/SiteCTA";

const markets = [
  { code: "in", name: "India", hub: "Mumbai · Bengaluru" },
  { code: "us", name: "USA", hub: "New York · LA" },
  { code: "eu", name: "Europe", hub: "Amsterdam · Berlin" },
  { code: "gb", name: "United Kingdom", hub: "London" },
  { code: "ae", name: "GCC", hub: "Dubai · Riyadh" },
  { code: "kr", name: "Korea", hub: "Seoul" },
  { code: "hk", name: "Hong Kong", hub: "Hong Kong" },
  { code: null, name: "and more", hub: "Expanding fast" },
];

const offerings = [
  {
    icon: Target,
    title: "GTM Strategy",
    body: "Localized go-to-market playbooks—pricing, positioning, and channels tuned to each market.",
  },
  {
    icon: Store,
    title: "Seller of Record",
    body: "We sell on your behalf as the merchant of record, absorbing tax, invoicing, and local liability.",
  },
  {
    icon: FileCheck,
    title: "Importer of Record",
    body: "We act as your legal importer—handling customs, duties, and clearance so goods move freely.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    body: "Tax, VAT, data privacy, and trade regulations managed end-to-end in every market.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    body: "Warehousing, fulfilment, and last-mile logistics built for speed, reliability, and scale.",
  },
  {
    icon: Rocket,
    title: "Market Launch",
    body: "From entity setup to first order live—we compress months of expansion work into weeks.",
  },
];

function MarketsHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[480px] w-[480px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
          <Globe className="h-3.5 w-3.5 text-green" />
          Global footprint
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
          Stelcore infrastructure is live in{" "}
          <span className="text-green">14+ markets</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          On-the-ground entities, compliance coverage, and supply chain across
          the markets that matter most—so your brand can sell anywhere without
          building operations from scratch.
        </p>
      </div>
    </section>
  );
}

function MarketsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
      <div data-aos="fade-up">
        <p className="text-sm font-semibold uppercase tracking-wider text-green">Where we operate</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy">
          Local presence, global reach
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {markets.map((m, index) => (
          <div
            key={m.name}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]"
            data-aos="fade-up"
            data-aos-delay={String(Math.min(index, 5) * 80)}
          >
            {m.code ? (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-white shadow-sm ring-1 ring-black/5">
                <img
                  src={`https://flagcdn.com/${m.code}.svg`}
                  alt={`${m.name} flag`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </span>
            ) : (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50">
                <Globe className="h-5 w-5 text-green" strokeWidth={1.8} />
              </span>
            )}
            <div>
              <div className="font-display font-bold text-navy">{m.name}</div>
              <div className="text-xs text-slate">{m.hub}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">What we enable</p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
            Everything a brand needs to enter a new market
          </h2>
          <p className="mt-4 text-lg text-slate">
            Stelcore enables brands with the operating layer to launch, sell, and
            scale across borders—compliantly.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className="group rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index, 5) * 80)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition-colors">
                <Icon className="h-7 w-7 text-green" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Markets() {
  return (
    <>
      <MarketsHero />
      <MarketsGrid />
      <Offerings />
      <SiteCTA band="plain" />
    </>
  );
}