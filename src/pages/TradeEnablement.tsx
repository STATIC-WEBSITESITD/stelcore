import {
  ArrowRight,
  PackageCheck,
  Receipt,
  Route,
  Scale,
  Smartphone,
  Store,
  Truck,
  Zap,
} from "lucide-react";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const channels = [
  {
    icon: Store,
    title: "General Trade",
    body: "Distributors, wholesalers, and retail networks.",
  },
  {
    icon: Scale,
    title: "Modern Trade",
    body: "Large-format retail and organized chains.",
  },
  {
    icon: Smartphone,
    title: "D2C",
    body: "Your own storefront and marketplaces.",
  },
  {
    icon: Zap,
    title: "Quick Commerce",
    body: "10-minute delivery and dark-store fulfilment.",
  },
];

const omsSteps = [
  {
    number: "01",
    title: "Connect",
    body: "A single platform to manage order flow across channels and fulfilment locations.",
  },
  {
    number: "02",
    title: "Route",
    body: "Intelligently control where every order is processed.",
  },
  {
    number: "03",
    title: "Fulfil",
    body: "Manage order flow across channels and fulfilment locations.",
  },
  {
    number: "04",
    title: "Track & reconcile",
    body: "View orders, inventory and fulfilment from one place—and reconcile every order in one control tower.",
  },
];

const solutionsExtra = [
  {
    icon: Store,
    title: "Seller on Record",
    body: "Sell across channels without building the operating stack yourself—Stelcore operates as the Seller on Record.",
  },
  {
    icon: Receipt,
    title: "Commercial entity & invoicing",
    body: "Commercial entity and invoicing infrastructure behind every sale.",
  },
  {
    icon: Scale,
    title: "Tax, VAT & compliance",
    body: "Tax, VAT and compliance handled as part of the Seller on Record stack.",
  },
  {
    icon: Zap,
    title: "Channel onboarding",
    body: "Onboard General Trade, Modern Trade, D2C and Quick Commerce without separate operating teams.",
  },
  {
    icon: Truck,
    title: "Stelcore OMS",
    body: "One control tower for every order—connect, route, fulfil, track and reconcile from one place.",
  },
  {
    icon: PackageCheck,
    title: "Order & inventory visibility",
    body: "View orders, inventory and fulfilment from one place and intelligently control where every order is processed.",
  },
];

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy p-6 shadow-[0_30px_70px_-30px_rgba(22,35,63,0.5)] sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Route className="h-5 w-5 text-green" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">Channel coverage</p>
            <p className="mt-0.5 text-xs text-white/50">One operating layer</p>
          </div>
        </div>
        <span className="rounded-full bg-green/15 px-3 py-1.5 text-xs font-semibold text-green">
          Live
        </span>
      </div>
      <div className="relative mt-5 space-y-3">
        {channels.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <item.icon className="h-4 w-4 shrink-0 text-green" />
            <div>
              <p className="font-display text-sm font-bold text-white">{item.title}</p>
              <p className="mt-1 text-xs text-white/50">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TradeEnablement() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Route}
        eyebrow="Trade Enablement"
        title={
          <>
            Trade everywhere.
            <br />
            <span className="text-green">Operate from one platform.</span>
          </>
        }
        body={
          <>
            <p>
              Sell across General Trade, Modern Trade, D2C and Quick Commerce without
              building separate operating teams for every channel.
            </p>
            <p className="mt-5 border-l-2 border-green pl-4 font-display text-lg font-semibold text-navy">
              Stelcore becomes your commerce operating partner — you build the brand,
              we enable the trade.
            </p>
          </>
        }
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Schedule a Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#trade-solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              See How It Works
            </a>
          </>
        }
        chips={["General Trade", "Modern Trade", "D2C", "Quick Commerce"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The trade advantage"
        title="One operating layer across all trade"
        body="Sell across General Trade, Modern Trade, D2C and Quick Commerce without building separate operating teams for every channel."
        items={channels}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="One control tower for every order"
        body="A single platform to manage order flow across channels and fulfilment locations."
        steps={omsSteps}
      />
      <SolutionExtra
        id="trade-solutions"
        eyebrow="End-to-end coverage"
        title="One commerce infrastructure"
        body="Seller on Record and Stelcore OMS—two ways to operate, one accountable partner."
        items={solutionsExtra}
      />
      <SiteCTA />
    </>
  );
}
