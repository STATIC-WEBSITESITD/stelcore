import {
  ArrowRight,
  Clock3,
  Globe2,
  MapPin,
  RotateCcw,
  Store,
  Truck,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const heroImage =
  "https://images.unsplash.com/photo-1586528116022-aeda1613c63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjBmdWxmaWxtJTIwd2FyZWhvdXNlJTIwd29ya2VycyUyMHNoZWx2ZXMlMjBwYWNrYWdlc3xlbnwxfHx8fDE3OTMyNTg1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "UAE",
  "Saudi Arabia",
  "Singapore",
  "Australia",
  "Canada",
  "France",
  "Italy",
  "Spain",
  "Poland",
];

const benefits = [
  {
    icon: Store,
    title: "Store closer to buyers",
    body: "Position inventory inside your target markets and fulfil orders locally instead of shipping every parcel cross-border.",
  },
  {
    icon: Clock3,
    title: "Deliver in days, not weeks",
    body: "Shorten the final mile with faster domestic delivery that meets modern buyer expectations.",
  },
  {
    icon: Truck,
    title: "Reduce delivery costs",
    body: "Replace expensive international parcel shipping with efficient local carrier rates.",
  },
  {
    icon: RotateCcw,
    title: "Simplify local returns",
    body: "Give customers a nearby return address and process returned inventory inside the market.",
  },
];

const fulfilmentSteps = [
  {
    number: "01",
    title: "Inbound",
    body: "We receive and quality-check inventory at the best-fit fulfilment centre.",
  },
  {
    number: "02",
    title: "Store",
    body: "Stock is stored locally with real-time inventory visibility across locations.",
  },
  {
    number: "03",
    title: "Pick & pack",
    body: "Every order is picked, packed, and prepared to your brand standards.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "Local carriers deliver quickly to buyers with end-to-end tracking.",
  },
];

const networkExtra = [
  {
    icon: Warehouse,
    title: "Trusted fulfilment footprint",
    body: "Stelcore connects your inventory to a trusted fulfilment footprint across major consumer markets—without building your own warehouses.",
  },
  {
    icon: Globe2,
    title: "14+ countries covered",
    body: "One connected fulfilment network spanning key consumer markets worldwide.",
  },
  {
    icon: MapPin,
    title: "Global fulfilment locations",
    body: countries.join(", "),
  },
  {
    icon: Store,
    title: "Local storage",
    body: "Position inventory inside your target markets and fulfil orders locally instead of shipping every parcel cross-border.",
  },
  {
    icon: Clock3,
    title: "Fast dispatch",
    body: "Shorten the final mile with faster domestic delivery that meets modern buyer expectations.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    body: "Give customers a nearby return address and process returned inventory inside the market.",
  },
];

function HeroPanel() {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_30px_70px_-30px_rgba(22,35,63,0.42)]">
        <img
          src={heroImage}
          alt="Modern fulfilment centre with organised inventory ready for dispatch"
          className="h-[470px] w-full object-cover"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:w-[360px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
          <Globe2 className="h-6 w-6 text-green" />
        </div>
        <div>
          <div className="font-display text-2xl font-extrabold text-navy">14+ countries</div>
          <div className="mt-0.5 text-xs font-medium text-slate">One connected fulfilment network</div>
        </div>
      </div>
    </>
  );
}

export default function GlobalFulfilment() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Warehouse}
        eyebrow="Global Fulfilment"
        title={
          <>
            Store locally. Deliver{" "}
            <span className="text-green">globally.</span>
          </>
        }
        body="Put inventory closer to your buyers with fulfilment centres across 14+ countries—so every order arrives faster, costs less to deliver, and feels local."
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Explore Fulfilment
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/my-shipment"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              Track an Order
            </Link>
          </>
        }
        chips={["Local storage", "Fast dispatch", "Easy returns"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The fulfilment advantage"
        title="Global reach that feels local"
        body="Local inventory transforms the post-purchase experience while making each order faster and more economical to fulfil."
        items={benefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="From inbound to buyer"
        body="One partner coordinates storage, orders, delivery, and returns across every location in your fulfilment network."
        steps={fulfilmentSteps}
      />
      <SolutionExtra
        eyebrow="End-to-end coverage"
        title="Fulfil from inside your buyer’s market"
        body="Expand without building your own warehouses. Stelcore connects your inventory to a trusted fulfilment footprint across major consumer markets."
        items={networkExtra}
      />
      <SiteCTA />
    </>
  );
}
