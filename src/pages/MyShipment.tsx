import { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PackageCheck, Search } from "lucide-react";
import TrackingAccordionItem from "@/components/TrackingAccordion";
import SiteCTA from "@/components/SiteCTA";
import {
  fetchTrackingData,
  normalizeTrackingInput,
  type Docket,
} from "@/utils/tracking";

const cardClass =
  "rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-24px_rgba(22,35,63,0.35)]";

const fieldClass =
  "min-h-[48px] rounded-xl border border-line bg-mist px-4 py-3 text-[15px] text-navy outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
          <PackageCheck className="h-3.5 w-3.5 text-green" />
          My shipment
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
          Track Your <span className="text-green">Shipment</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Enter your AWB, forwarding, or reference number to view real-time
          shipment status and delivery updates.
        </p>
      </div>
    </section>
  );
}

export default function MyShipment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resultRef = useRef<HTMLDivElement | null>(null);

  const urlSearchSelected = searchParams.get("searchSelected") || "1";
  const urlTrackingNo = searchParams.get("tracking_no") || "";

  const [searchSelected, setSearchSelected] = useState(urlSearchSelected);
  const [trackingNo, setTrackingNo] = useState(urlTrackingNo);
  const [dockets, setDockets] = useState<Docket[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setSearchSelected(urlSearchSelected);
    setTrackingNo(urlTrackingNo);
  }, [urlSearchSelected, urlTrackingNo]);

  useEffect(() => {
    if (!urlTrackingNo.trim()) {
      setShowResults(false);
      setDockets([]);
      return;
    }

    const numbers = normalizeTrackingInput(urlTrackingNo);
    if (numbers.length > 10) {
      alert("Up to 10 tracking numbers are allowed at a time");
      setDockets([]);
      setShowResults(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setShowResults(true);

    fetchTrackingData(urlSearchSelected, urlTrackingNo)
      .then((data) => {
        if (cancelled) return;
        setDockets(Array.isArray(data) ? data : []);
        setActiveIndex(0);
      })
      .catch(() => {
        if (!cancelled) setDockets([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [urlSearchSelected, urlTrackingNo]);

  useEffect(() => {
    if (!showResults || loading) return;
    const timer = window.setTimeout(() => {
      const el = resultRef.current;
      if (!el) return;
      const header = document.querySelector("header");
      const offset =
        el.getBoundingClientRect().top +
        window.scrollY -
        (header instanceof HTMLElement ? header.offsetHeight : 80) -
        20;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [showResults, loading, dockets]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("searchSelected", searchSelected);
    params.set("tracking_no", trackingNo.trim());
    navigate(`/my-shipment?${params.toString()}`);
  }

  function handleAccordionToggle(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <>
      <Hero />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-3">
        <div className={`${cardClass} mx-auto max-w-[900px] p-7`} data-aos="fade-up">
          <h2 className="font-display text-xl font-bold text-navy">
            Track Your Shipment
          </h2>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch"
            onSubmit={handleSubmit}
          >
            <select
              name="searchSelected"
              id="searchSelected"
              className={`${fieldClass} w-full sm:w-auto sm:min-w-[180px] sm:flex-none`}
              value={searchSelected}
              onChange={(e) => setSearchSelected(e.target.value)}
              required
            >
              <option value="1">AWB No.</option>
              <option value="6">Forwarding No.</option>
              <option value="2">Reference No.</option>
            </select>
            <input
              type="text"
              name="tracking_no"
              className={`${fieldClass} w-full min-w-0 flex-1 placeholder:text-slate/60`}
              placeholder="Enter your tracking number..."
              value={trackingNo}
              onChange={(e) => setTrackingNo(e.target.value)}
              required
            />
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-navy px-6 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700 sm:flex-none"
            >
              Track Now
              <Search className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Your AWB (tracking) number is shared on email and WhatsApp after
            your shipment is booked. Separate multiple numbers with commas.
          </p>
        </div>

        <div
          ref={resultRef}
          className={`track-result track-block mx-auto mt-8 max-w-[1100px] ${showResults ? "is-visible" : ""}`}
        >
          {loading ? (
            <p className="track-result-status">Loading tracking data…</p>
          ) : null}
          {!loading && showResults && dockets.length === 0 ? (
            <p className="track-result-status">
              No tracking records found for the number(s) entered.
            </p>
          ) : null}
          <div className="tracking-data-accordion">
            {dockets.map((docket, index) => (
              <Fragment key={docket.tracking_no ?? index}>
                <TrackingAccordionItem
                  docket={docket}
                  searchSelected={urlSearchSelected}
                  isActive={activeIndex === index}
                  onToggle={() => handleAccordionToggle(index)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        </div>
      </section>

      <SiteCTA />
    </>
  );
}
