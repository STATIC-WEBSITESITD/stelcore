import {
  ArrowRight,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  LogIn,
  PackageCheck,
  RotateCcw,
  Truck,
  Warehouse,
} from "lucide-react";
import { useState } from "react";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const nodes = [
  {
    icon: Warehouse,
    title: "Warehousing",
    body: "Strategically located storage across markets.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    body: "Real-time stock visibility and control.",
  },
  {
    icon: PackageCheck,
    title: "Order Fulfilment",
    body: "Fast, accurate pick-pack-ship operations.",
  },
  {
    icon: Truck,
    title: "Shipping",
    body: "Optimized carrier routing and rates.",
  },
];

const dashboardSteps = [
  {
    number: "01",
    title: "Single source of truth",
    body: "Single source of truth for inventory and orders",
  },
  {
    number: "02",
    title: "Intelligent routing",
    body: "Intelligent routing across fulfilment locations",
  },
  {
    number: "03",
    title: "Live tracking",
    body: "Live tracking from warehouse to doorstep",
  },
  {
    number: "04",
    title: "Returns & restocking",
    body: "Seamless reverse logistics and restocking",
  },
];

const infrastructureExtra = [
  {
    icon: ClipboardList,
    title: "Last-Mile Delivery",
    body: "Reliable delivery to every doorstep.",
  },
  {
    icon: RotateCcw,
    title: "Returns",
    body: "Seamless reverse logistics and restocking.",
  },
  {
    icon: Warehouse,
    title: "Warehousing as infrastructure",
    body: "Stelcore's operating model already treats warehousing as a core part of its infrastructure—so storage is built into the chain, not bolted on.",
  },
  {
    icon: Truck,
    title: "Last mile as infrastructure",
    body: "Last mile runs on the same system as the rest of your chain—not a patchwork of separate delivery vendors.",
  },
  {
    icon: LayoutDashboard,
    title: "OMS as infrastructure",
    body: "OMS is core infrastructure: one system for inventory, orders, and fulfilment instead of disconnected tools.",
  },
  {
    icon: PackageCheck,
    title: "One integrated platform",
    body: "Your chain runs on one system, not a patchwork of vendors—from warehousing and inventory to fulfilment, shipping, last-mile and returns.",
  },
];

function SubNav() {
  return (
    <div className="sticky top-[74px] z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-site items-center justify-between px-3">
        <div className="flex items-center gap-2 font-display text-sm font-bold text-navy">
          <Truck className="h-4 w-4 text-green" />
          Stelcore Supply Chain
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919699418777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:text-green"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </a>
          <a
            href="https://wa.me/919699418777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy p-6 shadow-[0_30px_70px_-30px_rgba(22,35,63,0.5)] sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <LayoutDashboard className="h-5 w-5 text-green" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">Supply Chain Control Tower</p>
            <p className="mt-0.5 text-xs text-white/50">Live operations overview</p>
          </div>
        </div>
        <span className="rounded-full bg-green/15 px-3 py-1.5 text-xs font-semibold text-green">
          Live
        </span>
      </div>
      <div className="relative mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "In Transit", value: "1,284" },
          { label: "Fulfilled", value: "42,910" },
          { label: "Returns", value: "312" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="font-display text-lg font-extrabold text-white">{m.value}</div>
            <div className="mt-1 text-[11px] text-white/50">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-5 space-y-3">
        {[
          { label: "Warehouse capacity", pct: 72 },
          { label: "On-time delivery", pct: 96 },
          { label: "Inventory accuracy", pct: 99 },
        ].map((r) => (
          <div key={r.label}>
            <div className="mb-1 flex justify-between text-xs text-white/60">
              <span>{r.label}</span>
              <span className="font-semibold text-green">{r.pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-green" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupplyChain() {
  const [showSubNav, setShowSubNav] = useState(false);

  const handleExplore = () => {
    setShowSubNav(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showSubNav && <SubNav />}
      <SolutionHero
        eyebrowIcon={Truck}
        eyebrow="Supply Chain"
        title={
          <>
            One supply chain. One dashboard.{" "}
            <span className="text-green">Complete control.</span>
          </>
        }
        body="Connect your entire supply chain through Stelcore — from warehousing and inventory to order fulfilment, shipping, last-mile delivery and returns — managed through one integrated platform."
        actions={
          <>
            <button
              type="button"
              onClick={handleExplore}
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Explore Supply Chain
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              Book Now
            </a>
          </>
        }
        chips={["Warehousing", "OMS", "Last mile", "Returns"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The supply chain advantage"
        title="Every node, one connected chain"
        body="Connect your entire supply chain through Stelcore — from warehousing and inventory to order fulfilment, shipping, last-mile delivery and returns — managed through one integrated platform."
        items={nodes}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="One dashboard"
        body="Managed through one integrated platform."
        steps={dashboardSteps}
      />
      <SolutionExtra
        eyebrow="End-to-end coverage"
        title="Warehousing, last mile and OMS as core infrastructure"
        body="Stelcore's operating model already treats warehousing, last mile and OMS as core parts of its infrastructure — so your chain runs on one system, not a patchwork of vendors."
        items={infrastructureExtra}
      />
      <SiteCTA />
    </>
  );
}
