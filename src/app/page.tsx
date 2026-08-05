import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import * as Flags from "country-flag-icons/react/3x2";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  CalendarCheck,
  ShieldCheck,
  Globe2,
  FlaskConical,
  Factory,
  Sprout,
  Recycle,
  ArrowRight,
} from "lucide-react";
import factoryImg from "@/assets/hero/cpl-factory.jpg";
import { StatBlock, TestimonialCard } from "@/components/site/blocks";
import { ProductCarousel } from "@/components/site/ProductCarousel";
import { ClientMarquee } from "@/components/site/ClientMarquee";
import { productCategoryGrid } from "@/lib/products";

export const metadata: Metadata = {
  title: "Coba Peat Lanka | Coco Peat & Coir Exporter from Sri Lanka",
  description:
    "Since 1989, Coba Peat Lanka has been a trusted BOI-approved exporter of coco peat, grow bags, husk chips and coir products to Australia, New Zealand, Japan, the UK, the USA, Canada, Malaysia, the UAE, Spain and France.",
  openGraph: {
    title: "Coba Peat Lanka | Nurturing Soil, Growing Futures",
    description:
      "35+ years of premium coco peat and coir products from Sri Lanka. BOI-approved direct exporter.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

const markets = [
  { code: "AU", name: "Australia", primary: true },
  { code: "NZ", name: "New Zealand" },
  { code: "JP", name: "Japan" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "MY", name: "Malaysia" },
  { code: "AE", name: "UAE" },
  { code: "ES", name: "Spain" },
  { code: "FR", name: "France" },
];

const testimonials = [
  {
    quote:
      "Coba Peat's consistency across shipments is what keeps us coming back. The EC and pH are exactly what we specify, every single container.",
    name: "Greenhouse Procurement Lead",
    role: "Horticulture Group, Australia",
  },
  {
    quote:
      "Their no-composting process delivers ultra-light blocks that expand uniformly. It's saved us hours of substrate prep each week.",
    name: "Nursery Operations Manager",
    role: "Tokyo, Japan",
  },
  {
    quote:
      "Reliable lead times, transparent QC reports, and a team that picks up the phone. A true B2B partner, not just a supplier.",
    name: "Imports Director",
    role: "Garden Supply Co., UK",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlider />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative container-wide pt-28 pb-24 md:pt-40 md:pb-36">
          <div className="max-w-3xl text-background">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur border border-background/20 text-xs uppercase tracking-[0.2em] text-background/90">
              Sri Lanka · Since 1989
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-background">
              Nurturing Soil,
              <br />
              <span className="text-gold">Growing Futures.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background/85 max-w-xl">
              Premium coco peat, grow bags and coir products manufactured at our BOI-approved
              facility and shipped directly to growers in 10+ countries worldwide.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3.5 text-sm font-semibold hover:brightness-105 transition shadow-lg"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-background/10 backdrop-blur border border-background/30 text-background px-6 py-3.5 text-sm font-semibold hover:bg-background/20 transition"
              >
                View Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBlock icon={CalendarCheck} value="35+ years" label="Established 1989" />
          <StatBlock icon={ShieldCheck} value="BOI-approved" label="Direct Sri Lankan exporter" />
          <StatBlock
            icon={Globe2}
            value="10+ countries"
            label="Australia, NZ, Japan, UK, USA & more"
          />
          <StatBlock icon={FlaskConical} value="In-house QC" label="Chartered chemists & lab" />
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section className="section-y">
        <div className="container-wide">
          <p className="text-center eyebrow">Trusted by growers & garden brands worldwide</p>
          <div className="mt-8">
            <ClientMarquee />
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="section-y">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">Our Range</span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
                Coco peat &amp; coir products,
                <br />
                engineered for serious growers.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                75+ product varieties across our core range, plus Coba Garden Mat, Coba Living
                Dolls, Coba Fibre Pots and other value-added coir products, all custom manufactured
                to your specification.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              See all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductCarousel
            items={productCategoryGrid.map((p) => ({
              slug: p.slug,
              title: p.title,
              description: p.description,
              image: p.image,
            }))}
          />
        </div>
      </section>

      {/* WHY COBA PEAT */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <Image
              src={factoryImg}
              alt="Coco peat factory floor"
              width={1280}
              height={896}
              className="rounded-2xl shadow-xl"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl max-w-[16rem]">
              <div className="font-serif text-4xl text-gold">100%</div>
              <div className="mt-1 text-sm text-primary-foreground/80">
                Self-sufficient factory with in-house engineering
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why Coba Peat</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Three decades of doing it right.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Every batch passes through our own facilities from harvest to QC to the loading bay.
              No outsourcing, no surprises.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: Factory,
                  title: "Self-sufficient factory",
                  body: "Own engineering department and machinery parts store keep production running without third-party delays.",
                },
                {
                  icon: FlaskConical,
                  title: "Chartered chemists & QC lab",
                  body: "In-house testing for EC, pH, moisture and physical properties before every shipment leaves the yard.",
                },
                {
                  icon: Sprout,
                  title: "No-composting, ultra-lightweight",
                  body: "Our patented drying process produces uniformly light blocks that expand cleanly with no off-odours.",
                },
                {
                  icon: Recycle,
                  title: "Eco-friendly & biodegradable",
                  body: "100% renewable coconut by-products, packaged with biodegradable materials wherever possible.",
                },
              ].map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid place-items-center h-11 w-11 shrink-0 rounded-lg bg-accent/15 text-accent">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="section-y">
        <div className="container-wide text-center">
          <span className="eyebrow">Export Markets</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
            Trusted across four continents.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Australia is our largest and longest-running market but our containers arrive every week
            in nurseries, greenhouses and distribution hubs across Oceania, Asia, Europe and North
            America.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {markets.map((m) => {
              const Flag = Flags[m.code as keyof typeof Flags];
              return (
                <div
                  key={m.code}
                  className={`relative flex flex-col items-center p-6 rounded-2xl border transition ${
                    m.primary
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-card border-border"
                  }`}
                >
                  <span
                    className={`inline-flex p-1.5 rounded-lg shadow-sm ring-1 ${
                      m.primary ? "bg-primary-foreground/10 ring-gold/40" : "bg-muted ring-border"
                    }`}
                  >
                    <Flag className="h-7 w-auto rounded-sm" title={m.name} />
                  </span>
                  <div
                    className={`mt-2 text-sm ${m.primary ? "text-primary-foreground/85" : "text-muted-foreground"}`}
                  >
                    {m.name}
                  </div>
                  {m.primary && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gold text-gold-foreground text-[10px] font-bold uppercase tracking-wider">
                      Primary
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <Link
            href="/export"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Explore export logistics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">In their words</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              What growers say about us.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
