import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Languages,
  RefreshCw,
  Scale,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  SolutionBenefits,
  SolutionExtra,
  SolutionHero,
  SolutionSteps,
} from "@/components/SolutionSections";
import SiteCTA from "@/components/SiteCTA";

const benefits = [
  {
    icon: Globe2,
    title: "Enter markets with confidence",
    body: "Know the exact product, packaging, and documentation requirements before you launch.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce regulatory risk",
    body: "Identify restricted ingredients, missing approvals, and non-compliant claims before they create delays.",
  },
  {
    icon: BadgeCheck,
    title: "Reach shelves faster",
    body: "Coordinate certifications, registrations, and local reviews through one accountable team.",
  },
  {
    icon: RefreshCw,
    title: "Stay compliant as rules change",
    body: "Monitor regulatory updates and adapt products and labels as local requirements evolve.",
  },
];

const coverage = [
  {
    icon: Scale,
    title: "Product classification",
    body: "Determine the correct category, regulatory pathway, and authority for every destination market.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications & approvals",
    body: "Coordinate required testing, registrations, certificates, and market-specific authorizations.",
  },
  {
    icon: ClipboardCheck,
    title: "Ingredient & formulation review",
    body: "Check ingredients, materials, and concentration limits against local permitted-substance rules.",
  },
  {
    icon: Languages,
    title: "Local-language labelling",
    body: "Prepare compliant labels with mandatory declarations, warnings, claims, and local-language content.",
  },
  {
    icon: FileCheck2,
    title: "Import documentation",
    body: "Align product dossiers, certificates, declarations, and customs documents before goods ship.",
  },
  {
    icon: BookOpenCheck,
    title: "Ongoing monitoring",
    body: "Track regulatory updates and keep products compliant after launch as standards and rules change.",
  },
];

const markets = [
  { market: "India", standard: "BIS · FSSAI · CDSCO", status: "Market ready" },
  { market: "United States", standard: "FDA · FCC · CPSIA", status: "Reviewed" },
  { market: "European Union", standard: "CE · REACH · CLP", status: "Market ready" },
  { market: "GCC", standard: "GSO · ECAS · SABER", status: "Reviewed" },
];

const steps = [
  {
    number: "01",
    title: "Assess",
    body: "Review your product, category, claims, formulation, and target markets.",
  },
  {
    number: "02",
    title: "Map requirements",
    body: "Build a market-specific roadmap for standards, testing, labels, and approvals.",
  },
  {
    number: "03",
    title: "Prepare & approve",
    body: "Coordinate documents, certifications, registrations, and local-language content.",
  },
  {
    number: "04",
    title: "Monitor",
    body: "Maintain compliance after launch as products and local regulations evolve.",
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
            <p className="font-display text-sm font-bold text-white">Market readiness</p>
            <p className="mt-0.5 text-xs text-white/50">Local regulatory overview</p>
          </div>
        </div>
        <span className="rounded-full bg-green/15 px-3 py-1.5 text-xs font-semibold text-green">
          Active
        </span>
      </div>
      <div className="relative mt-5 space-y-3">
        {markets.map((item) => (
          <div
            key={item.market}
            className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div>
              <p className="font-display text-sm font-bold text-white">{item.market}</p>
              <p className="mt-1 text-xs text-white/50">{item.standard}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-green">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Compliance() {
  return (
    <>
      <SolutionHero
        eyebrowIcon={ShieldCheck}
        eyebrow="Global Compliance"
        title={
          <>
            Compliant in every market.{" "}
            <span className="text-green">Aligned locally.</span>
          </>
        }
        body="Stelcore translates local regulations into a clear route to market—covering product standards, certifications, labels, documentation, and ongoing compliance in every country where you sell."
        actions={
          <>
            <a
              href="https://wa.me/919699418777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Assess My Product
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#compliance-coverage"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-green/40 hover:text-green"
            >
              See What We Cover
            </a>
          </>
        }
        chips={["Market-specific", "Locally aligned", "Continuously monitored"]}
        panel={<HeroPanel />}
      />
      <SolutionBenefits
        eyebrow="The compliance advantage"
        title="Scale globally without compromising locally"
        body="Meet each market on its own terms while keeping one clear compliance process across your global expansion."
        items={benefits}
      />
      <SolutionSteps
        eyebrow="A clear path to market"
        title="From assessment to ongoing compliance"
        body="Requirements differ by product, claim, channel, and destination. We build the roadmap around your exact route to market."
        steps={steps}
      />
      <SolutionExtra
        id="compliance-coverage"
        eyebrow="End-to-end coverage"
        title="Every requirement, market by market"
        body="From product review to post-launch monitoring, Stelcore coordinates the details that keep your products legally ready to sell."
        items={coverage}
      />
      <SiteCTA />
    </>
  );
}
