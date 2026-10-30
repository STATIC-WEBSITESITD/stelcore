import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Globe2,
  Landmark,
  Languages,
  MapPinned,
  Rocket,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Target,
  CheckCircle2,
} from "lucide-react";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const newToExports = [
  { icon: ScrollText, label: "Get IEC Code" },
  { icon: FileCheck2, label: "Export Compliance" },
  { icon: ShieldCheck, label: "Importer on Record" },
  { icon: BadgeCheck, label: "Exporter on Record" },
  { icon: Landmark, label: "GST Settlement" },
];

const alreadyExporting = [
  { icon: MapPinned, label: "Expand to New Markets" },
  { icon: Target, label: "GTM Strategy" },
  { icon: Languages, label: "Localise Your Business" },
  { icon: Building2, label: "No Global Entities Needed" },
];

const capabilityBenefits = [
  {
    icon: ScrollText,
    title: "IEC Code",
    body: "From your first IEC code to compliance, record-keeping, and tax settlement—everything you need to begin trading globally, handled under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Importer on Record",
    body: "Stelcore acts as your Importer & Exporter on Record so you trade globally without building a global company.",
  },
  {
    icon: FileCheck2,
    title: "Compliance",
    body: "Start exporting without the paperwork maze—compliance handled under one roof.",
  },
  {
    icon: Target,
    title: "GTM Strategy",
    body: "Enter new geographies with a localised go-to-market, on-ground operations, and full compliance.",
  },
];

const underOneRoofSteps = [
  {
    number: "01",
    title: "One partner",
    body: "One partner across compliance, entities & operations",
  },
  {
    number: "02",
    title: "No global setup",
    body: "No global subsidiaries or local teams to set up",
  },
  {
    number: "03",
    title: "Live in weeks",
    body: "Live in new markets in weeks, not quarters",
  },
  {
    number: "04",
    title: "Localise your business",
    body: "Localise your business and run a localised go-to-market—so you focus on the brand, not the borders.",
  },
];

const solutionsExtra = [
  {
    icon: Rocket,
    title: "New to Exports",
    body: "Start exporting without the paperwork maze. Get IEC Code, Export Compliance, Importer on Record, Exporter on Record, and GST Settlement—everything under one roof.",
  },
  {
    icon: Sparkles,
    title: "Already Exporting",
    body: "Expand into new markets—without new entities. Expand to New Markets, GTM Strategy, Localise Your Business, and No Global Entities Needed.",
  },
  {
    icon: BadgeCheck,
    title: "Exporter on Record",
    body: "Stelcore acts as your Importer & Exporter on Record, managing operations behind every sale.",
  },
  {
    icon: Landmark,
    title: "GST Settlement",
    body: "Manages compliance and GST settlement as part of your cross-border stack.",
  },
  {
    icon: Languages,
    title: "Localisation",
    body: "Localise your business and run a localised go-to-market—so you focus on the brand, not the borders.",
  },
  {
    icon: Building2,
    title: "No Entities",
    body: "Expand into new markets—without new entities or the cost and complexity of setting up global entities.",
  },
];

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy p-6 shadow-[0_30px_70px_-30px_rgba(22,35,63,0.5)] sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Globe2 className="h-5 w-5 text-green" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">Enablement stack</p>
            <p className="mt-0.5 text-xs text-white/50">Under one roof</p>
          </div>
        </div>
        <span className="rounded-full bg-green/15 px-3 py-1.5 text-xs font-semibold text-green">
          Ready
        </span>
      </div>
      <div className="relative mt-5 space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green">
            New to Exports
          </p>
          <div className="space-y-2">
            {newToExports.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-green" />
                <span className="text-xs font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green">
            Already Exporting
          </p>
          <div className="space-y-2">
            {alreadyExporting.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green" />
                <span className="text-xs font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalTrade() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={Globe2}
        eyebrow="Global Trade"
        title={
          <>
            Go global.{" "}
            <span className="text-green">Everything under one roof.</span>
          </>
        }
        body={
          <>
            <p>
              Whether you're shipping your first export order or scaling into new
              markets, Stelcore handles the compliance, entities, and operations—so
              you trade globally without building a global company.
            </p>
            <p className="mt-5 border-l-2 border-green pl-4 font-display text-lg font-semibold text-navy">
              Two enablement solutions. One operating partner.
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
              Start Trading Globally
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#trade-solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              See Solutions
            </a>
          </>
        }
        chips={["IEC & compliance", "Importer / Exporter on Record", "No entities needed"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The trade advantage"
        title="The entire cross-border stack, operated for you"
        body="Stelcore acts as your Importer & Exporter on Record, manages compliance and GST settlement, and runs your localised go-to-market—so you focus on the brand, not the borders."
        items={capabilityBenefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="One operating partner"
        body="You trade globally without building a global company."
        steps={underOneRoofSteps}
      />
      <SolutionExtra
        id="trade-solutions"
        eyebrow="End-to-end coverage"
        title="Wherever you are, we take you further"
        body="New to exports or already scaling—Stelcore meets you where you are."
        items={solutionsExtra}
      />
      <SiteCTA />
    </>
  );
}
