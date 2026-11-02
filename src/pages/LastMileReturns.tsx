import {
  ArrowRight,
  Clock3,
  MapPin,
  PackageOpen,
  RefreshCcw,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Truck,
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
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcmluZyUyMHBhcmNlbCUyMHRvJTIwY3VzdG9tZXIlMjBkb29yc3RlcCUyMGVjb21tZXJjZSUyMGNpdHl8ZW58MXx8fHwxNzkzMjU4NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const benefits = [
  {
    icon: MapPin,
    title: "Local returns for buyers",
    body: "Offer a nearby return address or convenient doorstep pickup instead of asking buyers to ship internationally.",
  },
  {
    icon: Clock3,
    title: "Faster resolution",
    body: "Shorten the time from return request to inspection, refund, replacement, or exchange.",
  },
  {
    icon: RefreshCcw,
    title: "Recover more inventory",
    body: "Inspect, grade, repack, and restock sellable products locally to protect product value.",
  },
  {
    icon: ScanLine,
    title: "Complete visibility",
    body: "Track delivery and return milestones with clear status updates across every handoff.",
  },
];

const returnSteps = [
  {
    number: "01",
    title: "Return initiated",
    body: "The buyer receives clear return instructions, a local label, or a pickup time.",
  },
  {
    number: "02",
    title: "Local collection",
    body: "A domestic carrier collects the parcel or accepts it at a nearby drop-off point.",
  },
  {
    number: "03",
    title: "Inspect & grade",
    body: "The item is checked against your policy and graded at a local processing centre.",
  },
  {
    number: "04",
    title: "Recover value",
    body: "Products are restocked, consolidated, refurbished, or responsibly disposed of.",
  },
];

const twoWayExtra = [
  {
    icon: Truck,
    title: "Last-mile delivery (Outbound)",
    body: "Fast domestic delivery, clear tracking, and dependable doorstep handoff.",
  },
  {
    icon: RotateCcw,
    title: "Local returns (Reverse)",
    body: "Convenient local collection, rapid inspection, and efficient product recovery.",
  },
  {
    icon: MapPin,
    title: "Doorstep delivery",
    body: "Give every buyer a reliable local delivery experience coordinated by Stelcore carriers.",
  },
  {
    icon: PackageOpen,
    title: "Local return address",
    body: "Offer a nearby return address instead of asking buyers to ship internationally.",
  },
  {
    icon: ScanLine,
    title: "Buyer-friendly tracking",
    body: "Clear status updates across every delivery and return handoff.",
  },
  {
    icon: ShieldCheck,
    title: "One operation, both directions",
    body: "Manage the journey to your buyer and back again through one accountable local logistics network.",
  },
];

function HeroPanel() {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_30px_70px_-30px_rgba(22,35,63,0.42)]">
        <img
          src={heroImage}
          alt="A courier handing a parcel to a local buyer"
          className="h-[470px] w-full object-cover"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:w-[360px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
          <RotateCcw className="h-6 w-6 text-green" />
        </div>
        <div>
          <div className="font-display text-xl font-extrabold text-navy">Returns made local</div>
          <div className="mt-0.5 text-xs font-medium text-slate">Simple for buyers. Smarter for brands.</div>
        </div>
      </div>
    </>
  );
}

export default function LastMileReturns() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Truck}
        eyebrow="Last Mile & Return Logistics"
        title={
          <>
            Deliver locally. Return{" "}
            <span className="text-green">effortlessly.</span>
          </>
        }
        body="Give every buyer a reliable local delivery and returns experience, while Stelcore coordinates carriers, collections, inspections, and inventory recovery behind the scenes."
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Build a Local Network
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
        chips={["Doorstep delivery", "Local return address", "Buyer-friendly tracking"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The returns advantage"
        title="Make returns work for buyers and your business"
        body="A convenient local return experience builds buyer confidence while reducing the cost and delay of cross-border reverse logistics."
        items={benefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="From return request to recovery"
        body="Keep every return moving with coordinated pickup, inspection, status updates, and the right recovery decision."
        steps={returnSteps}
      />
      <SolutionExtra
        eyebrow="End-to-end coverage"
        title="One operation, both directions"
        body="Manage the journey to your buyer and back again through one accountable local logistics network."
        items={twoWayExtra}
      />
      <SiteCTA />
    </>
  );
}
