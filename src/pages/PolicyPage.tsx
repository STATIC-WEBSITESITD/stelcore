import { Fragment } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { FileText } from "lucide-react";
import { policies, policyRoutes } from "@/data/policies";
import SiteCTA from "@/components/SiteCTA";

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

function renderPolicyText(text: string) {
  const parts = text.split(URL_PATTERN);
  return parts.map((part, index) =>
    part.startsWith("http") ? (
      <a key={index} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

export default function PolicyPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const policyKey = policyRoutes[slug];
  const policy = policyKey ? policies[policyKey] : null;

  if (!policy) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
        <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
            <FileText className="h-3.5 w-3.5 text-green" />
            Legal policies
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
            {policy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {policy.bannerText}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-3">
          <div className="policy-content">
            {policy.sections.map((section, index) => (
              <div
                key={section.title}
                className="policy-block"
                data-aos="fade-up"
                data-aos-delay={String(Math.min(index, 5) * 80)}
              >
                <h2 className="policy-section-title">{section.title}</h2>
                <ol className="policy-list">
                  {section.items.map((item) => (
                    <li key={item}>{renderPolicyText(item)}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <p className="policy-back" data-aos="fade-up">
            <Link to="/contact">Contact us</Link> if you have questions about
            this policy.
          </p>
        </div>
      </section>
      <SiteCTA />
    </>
  );
}
