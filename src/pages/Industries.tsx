import {
  ArrowRight,
  Cookie,
  Cpu,
  Gem,
  Hammer,
  Lamp,
  Package,
  ShoppingBasket,
  Sparkles,
  ToyBrick,
  UtensilsCrossed,
} from "lucide-react";
import SiteCTA from "@/components/SiteCTA";

const categories = [
  {
    icon: Sparkles,
    name: "Health & Beauty",
    body: "Skincare, cosmetics, and wellness products, shelf-ready.",
    image:
      "https://images.unsplash.com/photo-1770925758916-44e22e159542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Drinks",
    body: "Ambient, chilled, and beverage brands across borders.",
    image:
      "https://images.unsplash.com/photo-1617201835175-aab7b1d71d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: ShoppingBasket,
    name: "FMCG",
    body: "Everyday essentials and pantry staples at scale.",
    image:
      "https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: Cpu,
    name: "Electronics",
    body: "Consumer electronics, accessories, and smart devices.",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: Lamp,
    name: "Home",
    body: "Home, décor, and lifestyle products for modern living.",
    image:
      "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: Hammer,
    name: "Industrial Goods",
    body: "B2B equipment, components, and industrial supplies.",
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: Gem,
    name: "Jewelry",
    body: "Fine and fashion jewelry with high-value logistics.",
    image:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: Cookie,
    name: "Confectionery",
    body: "Chocolates, candy, and sweets with careful handling.",
    image:
      "https://images.unsplash.com/photo-1666274694243-9997eb427237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    icon: ToyBrick,
    name: "Toys",
    body: "Toys and games with safety and compliance built in.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
];

function IndustriesHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-y-24 translate-x-24 rounded-full bg-green-50 blur-3xl sm:block" />
      <div className="relative z-10 mx-auto max-w-site px-3 py-14 lg:py-16" data-aos="fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy-500">
          <Package className="h-3.5 w-3.5 text-green" />
          Industries we serve
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy">
          From enterprise brands to{" "}
          <span className="text-green">modern D2C</span>—across every category.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          Stelcore caters to multi-category commerce, powering operations for
          large enterprises and fast-growing D2C brands alike. Whatever you
          sell, we run the infrastructure behind it.
        </p>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-site px-3">
        <div data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">Categories</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy">
            Built for how your category actually moves
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, name, body, image }, index) => (
            <div
              key={name}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_24px_48px_-24px_rgba(22,35,63,0.4)]"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index, 5) * 80)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur">
                  <Icon className="h-6 w-6 text-green" strokeWidth={1.8} />
                </div>
                <h3 className="absolute bottom-3 left-4 font-display text-xl font-bold text-white drop-shadow">
                  {name}
                </h3>
              </div>
              <p className="px-5 py-4 text-sm leading-relaxed text-slate">{body}</p>
            </div>
          ))}

          <div
            className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-dashed border-green/40 bg-green-50/50 p-7"
            data-aos="fade-up"
            data-aos-delay={String(Math.min(categories.length, 5) * 80)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green">
              <ArrowRight className="h-6 w-6 text-white" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">And many more</h3>
            <p className="text-sm leading-relaxed text-slate">
              Beauty, apparel, wellness, pet care and beyond—if it ships, we can
              operate it. Tell us your category.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandTypes() {
  const types = [
    {
      tag: "Enterprise",
      title: "Enterprise brands",
      body: "Global scale, complex compliance, and multi-market supply chains—handled as one operating layer.",
    },
    {
      tag: "D2C",
      title: "Modern D2C brands",
      body: "Fast-moving, digitally native teams that need to launch and scale in new markets without building ops.",
    },
  ];
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-site px-3">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">Who we serve</p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy">
            One partner, every stage of growth
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {types.map((t, index) => (
            <div
              key={t.title}
              className="rounded-2xl border border-line bg-white p-8"
              data-aos="fade-up"
              data-aos-delay={String(Math.min(index, 5) * 80)}
            >
              <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                {t.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">{t.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Industries() {
  return (
    <>
      <IndustriesHero />
      <CategoryGrid />
      <BrandTypes />
      <SiteCTA band="plain" />
    </>
  );
}