export type SeoMeta = {
  title: string;
  description: string;
};

const SITE = "Stelcore";

export const defaultSeo: SeoMeta = {
  title: `${SITE} | Global Logistics & Supply Chain`,
  description:
    "Stelcore helps brands expand globally with compliance, supply chain, fulfilment, and cross-border logistics.",
};

export const seoByPath: Record<string, SeoMeta> = {
  "/": defaultSeo,
  "/about": {
    title: `About Us | ${SITE}`,
    description:
      "Learn about Stelcore—your operating partner for global growth, compliance, supply chain, and fulfilment.",
  },
  "/markets": {
    title: `Markets | ${SITE}`,
    description:
      "Explore the markets where Stelcore helps brands sell, fulfil, and grow internationally.",
  },
  "/industries": {
    title: `Industries | ${SITE}`,
    description:
      "Industry-ready logistics and operations support for brands expanding across borders.",
  },
  "/trade-enablement": {
    title: `Trade Enablement | ${SITE}`,
    description:
      "Enable cross-border trade with Stelcore—market entry, documentation, and operational support.",
  },
  "/compliance": {
    title: `Compliance | ${SITE}`,
    description:
      "Stay compliant across markets with Stelcore’s tax, regulatory, and policy support.",
  },
  "/cross-border-express": {
    title: `Cross Border Express | ${SITE}`,
    description:
      "Fast cross-border express shipping with customs coordination and live tracking.",
  },
  "/ocean-freight": {
    title: `Ocean Freight | ${SITE}`,
    description:
      "Reliable ocean freight for scalable international cargo with end-to-end coordination.",
  },
  "/global-fulfilment": {
    title: `Global Fulfilment | ${SITE}`,
    description:
      "Local fulfilment near your customers—storage, pick & pack, and last-mile delivery.",
  },
  "/last-mile-returns": {
    title: `Last Mile & Returns | ${SITE}`,
    description:
      "Doorstep delivery and local returns logistics that keep customers happy.",
  },
  "/supply-chain": {
    title: `Supply Chain | ${SITE}`,
    description:
      "End-to-end supply chain operations built for speed, reliability, and scale.",
  },
  "/global-trade": {
    title: `Global Trade | ${SITE}`,
    description:
      "Global trade solutions covering routing, documentation, and international growth.",
  },
  "/contact": {
    title: `Contact Us | ${SITE}`,
    description:
      "Get in touch with Stelcore for shipping, rates, pickup, and partnership enquiries.",
  },
  "/my-shipment": {
    title: `Track Shipment | ${SITE}`,
    description:
      "Track your Stelcore shipment with AWB, forwarding, or reference number.",
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${SITE}`,
    description:
      "How Stelcore collects, uses, and protects your personal information.",
  },
  "/terms-and-conditions": {
    title: `Terms & Conditions | ${SITE}`,
    description:
      "Terms of Service governing your use of the Stelcore website and services.",
  },
  "/refund-policy": {
    title: `Refund Policy | ${SITE}`,
    description: "Information about refunds for Stelcore services.",
  },
  "/shipping-policy": {
    title: `Shipping Policy | ${SITE}`,
    description:
      "Delivery timelines and shipping information for Stelcore courier services.",
  },
};

export function getSeoForPath(pathname: string): SeoMeta {
  return seoByPath[pathname] ?? defaultSeo;
}
