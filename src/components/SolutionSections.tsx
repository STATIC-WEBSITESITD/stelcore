import { CheckCircle2, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type SolutionBenefitItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type SolutionStepItem = {
  number?: string;
  title: string;
  body: string;
  icon?: LucideIcon;
};

export type SolutionExtraItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export function SolutionHero({
  eyebrowIcon: EyebrowIcon,
  eyebrow,
  title,
  body,
  chips = [],
  actions,
  panel,
}: {
  eyebrowIcon: LucideIcon;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  chips?: string[];
  actions?: ReactNode;
  panel: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute -left-48 top-12 z-0 hidden h-96 w-96 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto grid max-w-site items-center gap-12 px-3 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
            <EyebrowIcon className="h-3.5 w-3.5 text-green" />
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy">
            {title}
          </h1>
          <div className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            {body}
          </div>
          {actions ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
          ) : null}
          {chips.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink">
              {chips.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green" />
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative" data-aos="fade-up" data-aos-delay="120">
          {panel}
        </div>
      </div>
    </section>
  );
}

export function SolutionBenefits({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: SolutionBenefitItem[];
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-tight tracking-tight text-navy">
              {title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">{body}</p>
          </div>
          <div
            className={`grid gap-4 ${
              items.length > 4 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {items.map(({ icon: Icon, title: itemTitle, body: itemBody }, index) => (
              <div
                key={itemTitle}
                className="group rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_24px_48px_-24px_rgba(22,35,63,0.35)]"
                data-aos="fade-up"
                data-aos-delay={String(Math.min(index, 5) * 80)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                  <Icon className="h-5 w-5 text-green" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">
                  {itemTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{itemBody}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionSteps({
  eyebrow,
  title,
  body,
  steps,
}: {
  eyebrow: string;
  title: string;
  body: string;
  steps: SolutionStepItem[];
}) {
  const cols =
    steps.length <= 3
      ? "md:grid-cols-3"
      : steps.length === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3 lg:grid-cols-5";

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div
          className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          data-aos="fade-up"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-tight text-navy">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate">{body}</p>
        </div>
        <div
          className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${cols}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {steps.map((step, index) => {
            const number = step.number ?? String(index + 1).padStart(2, "0");
            return (
              <div key={step.title} className="bg-white p-7">
                <span className="font-display text-sm font-extrabold text-green">
                  {number}
                </span>
                <h3 className="mt-8 font-display text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SolutionExtra({
  id,
  eyebrow,
  title,
  body,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  items: SolutionExtraItem[];
}) {
  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div
          className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          data-aos="fade-up"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-tight text-navy">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate">{body}</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title: itemTitle, body: itemBody }, index) => (
            <div
              key={itemTitle}
              className="bg-white p-7"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index, 5) * 80)}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <Icon className="h-5 w-5 text-green" strokeWidth={1.7} />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy">
                {itemTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{itemBody}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
