import {
  ArrowRight,
  Clock3,
  Globe2,
  PackageCheck,
  Plane,
  Radar,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const benefits = [
  {
    icon: Clock3,
    title: "Faster transit",
    body: "Move time-sensitive shipments between major global markets in days, not weeks.",
  },
  {
    icon: Plane,
    title: "Priority air capacity",
    body: "Reliable uplift through our airline and carrier network, even during peak demand.",
  },
  {
    icon: ShieldCheck,
    title: "Customs-ready",
    body: "Documentation and clearance are coordinated before arrival to reduce border delays.",
  },
  {
    icon: Radar,
    title: "Door-to-door visibility",
    body: "Track every handoff with proactive milestone updates from pickup to final delivery.",
  },
];

const serviceSteps = [
  {
    number: "01",
    title: "Pickup",
    body: "Scheduled collection from your warehouse, supplier, or manufacturing location.",
  },
  {
    number: "02",
    title: "Priority uplift",
    body: "Optimized flight selection and fast airport handling for shorter transit times.",
  },
  {
    number: "03",
    title: "Customs clearance",
    body: "Coordinated paperwork and destination clearance managed by our trade specialists.",
  },
  {
    number: "04",
    title: "Final delivery",
    body: "Reliable last-mile delivery to your customer, store, fulfilment centre, or office.",
  },
];

const cargoExtra = [
  {
    icon: Zap,
    title: "Urgent business shipments",
    body: "Flexible express options for time-critical commercial cargo that cannot wait.",
  },
  {
    icon: PackageCheck,
    title: "E-commerce and retail parcels",
    body: "Dependable air delivery for lightweight parcels and high-value goods.",
  },
  {
    icon: Globe2,
    title: "Samples and commercial goods",
    body: "The right express service for samples and commercial shipments across borders.",
  },
  {
    icon: Plane,
    title: "Door-to-door",
    body: "Managed from pickup through customs to the final mile—one accountable handoff chain.",
  },
  {
    icon: ShieldCheck,
    title: "Customs coordinated",
    body: "Documentation and clearance are coordinated before arrival to reduce border delays.",
  },
  {
    icon: Radar,
    title: "Live tracking",
    body: "Track every handoff with proactive milestone updates from pickup to final delivery.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1571086291540-b137111fa1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjYXJnbyUyMHBsYW5lJTIwbG9naXN0aWNzJTIwYWlycG9ydCUyMGZyZWlnaHR8ZW58MXx8fHwxNzkzMjU4MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080";

function HeroPanel() {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_30px_70px_-30px_rgba(22,35,63,0.42)]">
        <img
          src={heroImage}
          alt="Aircraft on the runway ready for an international express shipment"
          className="h-[470px] w-full object-cover"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:w-[360px]">
        <div className="border-r border-line pr-3">
          <div className="font-display text-2xl font-extrabold text-navy">2–5 days</div>
          <div className="mt-1 text-xs font-medium text-slate">Typical transit</div>
        </div>
        <div className="pl-1">
          <div className="font-display text-2xl font-extrabold text-green">Global</div>
          <div className="mt-1 text-xs font-medium text-slate">Express network</div>
        </div>
      </div>
    </>
  );
}

export default function CrossBorderExpress() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Plane}
        eyebrow="Cross Border Express"
        title={
          <>
            Ship globally at <span className="text-green">air speed.</span>
          </>
        }
        body="Fast, dependable international delivery by air for urgent documents, parcels, and commercial shipments—managed from pickup through customs to the final mile."
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Get an Express Quote
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
        chips={["Door-to-door", "Customs coordinated", "Live tracking"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The express advantage"
        title="When every day matters"
        body="Get the speed of air freight with one accountable operating partner coordinating carriers, customs, and delivery across borders."
        items={benefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="From your door to theirs"
        body="A single team owns your shipment across every stage, reducing handoffs and keeping your delivery moving."
        steps={serviceSteps}
      />
      <SolutionExtra
        eyebrow="End-to-end coverage"
        title="The right service for shipments that cannot wait"
        body="Flexible express options for lightweight parcels, high-value goods, and time-critical commercial cargo."
        items={cargoExtra}
      />
      <SiteCTA />
    </>
  );
}
