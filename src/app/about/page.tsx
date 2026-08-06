import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, Boxes, FlaskConical, Truck, Sprout, Eye, Target, Compass, Scale, Sun } from "lucide-react";
import factoryImg from "@/assets/hero/cpl-factory.jpg";
import directorOneImg from "@/assets/directors/D1.png";
import directorTwoImg from "@/assets/directors/D2.png";
import directorThreeImg from "@/assets/directors/D3.png";
import { PageHero, CTASection } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "About | 35+ Years of Coir Exporting",
  description:
    "Founded in 1989, Coba Peat Lanka is a BOI-approved Sri Lankan manufacturer of coco peat and coir products with in-house QC, engineering and exporting capabilities.",
  openGraph: { title: "About Coba Peat Lanka", url: "/about" },
  alternates: { canonical: "/about" },
};

const facilities = [
  {
    icon: Wrench,
    title: "Engineering Department",
    body: "Own engineering team designs, services and continuously improves every production line.",
  },
  {
    icon: Boxes,
    title: "Machinery Parts Store",
    body: "On-site inventory of critical spares means our lines stay running no waiting on imports.",
  },
  {
    icon: FlaskConical,
    title: "QC Laboratory",
    body: "Chartered chemists test EC, pH, moisture and physical properties on every batch.",
  },
  {
    icon: Truck,
    title: "Loading Bay & Fleet",
    body: "Dedicated loading bays and our own fleet ensure containers reach Colombo Port on schedule.",
  },
  {
    icon: Scale,
    title: "Weigh Bridge & Fork Lifts",
    body: "In-house weigh bridge and fork lift fleet keep loading fast, accurate and independent of contractors.",
  },
  {
    icon: Sun,
    title: "Drying Bay & Yards",
    body: "Dedicated drying floors, raw material bays and wash tanks sit on our own premises, close to Kurunegala.",
  },
];

const guidingPillars = [
  {
    icon: Eye,
    title: "Vision",
    body: "To achieve sustainable growth by nurturing a winning network of partners while being a responsible global citizen that makes a difference.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "Our mission is to be the consumer's first choice, delivering innovative products of outstanding quality and great service at a competitive cost through working faster, simpler and together, becoming the global leader in customer value.",
  },
  {
    icon: Compass,
    title: "Strategy",
    body: "Our strategy is to innovate, enhance and integrate all our value-added product diversification programs into our supply chain practices and also to be an advocate for home gardeners and women-owned businesses.",
  },
];

const directors = [
  {
    name: "Mr. Charles P. J. Thomas",
    image: directorOneImg,
  },
  {
    name: "Mrs. Y. K. Thomas",
    image: directorThreeImg,
  },
  {
    name: "Mr. Chathura Thomas",
    image: directorTwoImg,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Sri Lankan family-run exporter, three decades strong."
        description="Founded in 1989, Coba Peat Lanka (Pvt) Ltd is one of Sri Lanka's most established BOI-approved direct exporters of coco peat and coir products. We've spent 35+ years refining every step from husk selection to factory loading so our growers can plant with confidence."
      />

      {/* STORY */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <Image
            src={factoryImg}
            alt="Coba Peat Lanka factory"
            width={1280}
            height={896}
            className="rounded-2xl shadow-xl"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Built on coconut country, driven by craft.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg">
              <p>
                Coba Peat Lanka began in 1989 in Kurunegala, the heart of Sri Lanka&apos;s coconut
                triangle. We started with a single processing line and a simple promise: deliver
                coco peat that growers could actually rely on, shipment after shipment.
              </p>
              <p>
                Coba Peat Lanka (Pvt) Ltd is part of the CPJ Group, with International Gem
                Combine (Pvt) Ltd as its parent company one of Sri Lanka&apos;s largest
                BOI-approved manufacturers of coconut coir products for close to 35 years.
              </p>
              <p>
                Today we operate a fully integrated facility at the Dangaspitiya Industrial
                Park with our own engineering, QC lab and loading infrastructure and a
                head office in Colombo serving buyers across Australia, New Zealand, Japan, the
                UK, the USA, Canada, Malaysia, the UAE, Spain and France.
              </p>
              <p>
                From September 1999 to March 2023 we also ran a joint venture with Villa Sarl of
                France, with Bio Grow Lanka (Pvt) Ltd operating as the collaboration&apos;s
                subsidiary in Sri Lanka.
              </p>
              <p>
                We are BOI-approved (Board of Investment of Sri Lanka), which means our exports
                meet the country&apos;s most rigorous standards for foreign trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PILLARS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Vision / Mission / Strategy</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Guiding our growth with purpose.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Our direction is shaped by responsible growth, customer value and a lasting impact
              across every link in our supply chain.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {guidingPillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="section-y border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Company Directors</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Leadership behind the business.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              The company is guided by experienced leadership committed to quality, service and long-term growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div key={director.name} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={600}
                  height={760}
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-tight">{director.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Factory &amp; Facilities</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Everything under one roof.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Self-sufficient operations mean fewer delays, tighter QC, and total accountability
              for what leaves our gates. Our capacity runs to 10 x 40&apos; FCL of grow bags per
              month, plus a container each of Coba Garden Mat, Coba Living Dolls and Coba Fibre
              Pots monthly all backed by our own coir dust heaps and fibre mill, certified to
              RHP and HP standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 p-6 rounded-2xl bg-background border border-border"
              >
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-y">
        <div className="container-wide max-w-3xl text-center">
          <Sprout className="h-10 w-10 text-accent mx-auto" />
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight">
            Nurturing soil, growing futures.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We make products from what would otherwise be coconut waste turning by-products
            into a renewable growing medium that helps growers around the world produce more
            food with less environmental impact. Sustainability isn&apos;t a marketing line for us;
            it&apos;s the entire business model.
          </p>
        </div>
      </section>

      <CTASection
        title="Want to learn more about our capacity?"
        description="Our team is happy to share production capacity, references and a full company profile."
        primaryLabel="Contact Sales"
        primaryTo="/contact"
      />
    </>
  );
}
