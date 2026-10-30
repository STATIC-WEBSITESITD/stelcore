import { ArrowRight, PenLine } from "lucide-react";
import { Link } from "react-router";

export default function SiteCTA({
  band = "mist",
}: {
  band?: "mist" | "plain";
}) {
  return (
    <section className={`py-20 ${band === "mist" ? "bg-mist" : "bg-white"}`}>
      <div className="mx-auto max-w-site px-3">
        <div
          className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center lg:px-16"
          data-aos="fade-up"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-green/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 z-0 h-72 w-72 rounded-full bg-green/15 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
              Ready to run leaner and grow faster?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Let Stelcore handle operations while you own the growth story.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919699418777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-green-600"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PenLine className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
