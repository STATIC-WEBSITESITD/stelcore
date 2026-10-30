import {
  Anchor,
  ArrowRight,
  Boxes,
  CalendarCheck2,
  Container,
  PackageSearch,
  Route,
  Ship,
  TrendingDown,
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
  "https://images.unsplash.com/photo-1613690399151-65ea69478674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwcG9ydCUyMGxvZ2lzdGljcyUyMGFlcmlhbHxlbnwxfHx8fDE3OTMyNTgzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower landed cost",
    body: "Move high-volume cargo at a competitive cost with route and carrier optimization.",
  },
  {
    icon: Container,
    title: "Flexible capacity",
    body: "Choose full-container or shared-container options as your shipment volume changes.",
  },
  {
    icon: CalendarCheck2,
    title: "Reliable sailings",
    body: "Planned departures across major trade lanes keep replenishment schedules predictable.",
  },
  {
    icon: PackageSearch,
    title: "End-to-end visibility",
    body: "Follow key milestones from origin pickup and port handling through final delivery.",
  },
];

const journey = [
  {
    number: "01",
    title: "Origin pickup",
    body: "Cargo collection and consolidation",
  },
  {
    number: "02",
    title: "Port handling",
    body: "Export documents and terminal coordination",
  },
  {
    number: "03",
    title: "Ocean transit",
    body: "Carrier-managed international sailing",
  },
  {
    number: "04",
    title: "Final delivery",
    body: "Customs clearance and inland transport",
  },
];

const shippingModes = [
  {
    icon: Container,
    title: "FCL — Full Container Load",
    body: "Dedicated 20-foot and 40-foot containers for larger volumes, controlled handling, and efficient unit economics.",
  },
  {
    icon: Boxes,
    title: "LCL — Less than Container Load",
    body: "Shared container space for smaller consignments, so you pay only for the capacity your cargo uses.",
  },
  {
    icon: Anchor,
    title: "Port-to-port",
    body: "Reliable ocean freight across major global trade lanes with coordinated port handling.",
  },
  {
    icon: Route,
    title: "Door-to-door",
    body: "One team managing carriers, customs, ports, and inland delivery end to end.",
  },
  {
    icon: Ship,
    title: "Carrier & customs management",
    body: "One team managing carriers, customs, ports, and inland delivery across every sailing.",
  },
  {
    icon: Warehouse,
    title: "Origin consolidation",
    body: "Cargo collection and consolidation before export documents and terminal coordination.",
  },
];

function HeroPanel() {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_30px_70px_-30px_rgba(22,35,63,0.42)]">
        <img
          src={heroImage}
          alt="Aerial view of a container ship carrying ocean freight"
          className="h-[470px] w-full object-cover"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:w-[360px]">
        <div className="border-r border-line pr-3">
          <div className="font-display text-2xl font-extrabold text-navy">FCL + LCL</div>
          <div className="mt-1 text-xs font-medium text-slate">Flexible shipping modes</div>
        </div>
        <div className="pl-1">
          <div className="font-display text-2xl font-extrabold text-green">Global</div>
          <div className="mt-1 text-xs font-medium text-slate">Port network</div>
        </div>
      </div>
    </>
  );
}

export default function OceanFreight() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Ship}
        eyebrow="Ocean Freight"
        title={
          <>
            Move more across oceans,{" "}
            <span className="text-green">with less complexity.</span>
          </>
        }
        body="Reliable FCL and LCL ocean freight across major global trade lanes, with one team managing carriers, customs, ports, and inland delivery."
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Get an Ocean Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/my-shipment"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              Track a Shipment
            </Link>
          </>
        }
        chips={["FCL & LCL", "Port-to-port", "Door-to-door"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The ocean advantage"
        title="Built for dependable, cost-efficient scale"
        body="A smarter way to move inventory internationally without juggling shipping lines, agents, customs brokers, and transporters."
        items={benefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="From origin to destination"
        body="Stelcore coordinates every handoff, giving you one point of contact across the entire ocean freight journey."
        steps={journey}
      />
      <SolutionExtra
        eyebrow="End-to-end coverage"
        title="The right container for every shipment"
        body="Whether you are moving a few pallets or replenishing an entire market, we match your cargo to the most efficient service."
        items={shippingModes}
      />
      <SiteCTA />
    </>
  );
}
