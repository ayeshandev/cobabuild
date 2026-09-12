import type { Metadata } from "next";
import Image from "next/image";
import {
  FlaskConical,
  Award,
  ShieldCheck,
  BadgeDollarSign,
  PackageCheck,
  Handshake,
  Leaf,
  Cpu,
  Sparkles,
  Wheat,
  Gauge,
  Droplets,
  SlidersHorizontal,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import { PageHero, CTASection } from "@/components/site/blocks";
import boiLogo from "@/assets/certificates/boi.png";
import rhpLogo from "@/assets/certificates/rhp.png";
import hpLogo from "@/assets/certificates/hp.png";
import edbLogo from "@/assets/certificates/edb.png";
import isoLogo from "@/assets/certificates/iso.png";
import coirCouncilLogo from "@/assets/certificates/coir-council.png";
import gmpLogo from "@/assets/certificates/gmp.png";

export const metadata: Metadata = {
  title: "Quality & Process",
  description:
    "In-house QC laboratory, chartered chemists, no-composting ultra-lightweight production process. BOI-approved Sri Lankan coco peat manufacturer, RHP and HP standards certified.",
  openGraph: { title: "Quality & Process | Coba Peat Lanka", url: "/quality" },
  alternates: { canonical: "/quality" },
};

const cocoPeatReasons = [
  {
    icon: Leaf,
    title: "100% natural & biodegradable",
    body: "A fibrous, spongy material that's completely natural and biodegradable no synthetic fillers.",
  },
  {
    icon: Wheat,
    title: "Rich in macro & micro nutrients",
    body: "Sri Lankan coco peat is naturally rich in the macro and micro nutrients plants need to thrive.",
  },
  {
    icon: ShieldCheck,
    title: "Antifungal & antibacterial",
    body: "Naturally occurring properties help protect root systems from disease.",
  },
  {
    icon: Gauge,
    title: "High CEC, balanced pH",
    body: "High Cation Exchange Capacity (CEC) and a moderately high pH value support healthy nutrient uptake.",
  },
  {
    icon: Droplets,
    title: "Rewets faster",
    body: "Rehydrates quickly, even after drying out, so plants recover faster after missed watering.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom manufactured",
    body: "Physical and chemical properties can be tuned to exact grower specifications.",
  },
  {
    icon: Sprout,
    title: "Grows & transplants better",
    body: "Superior aeration and moisture retention help plants establish and transplant with less shock.",
  },
];

const steps = [
  {
    n: "01",
    title: "Raw Material",
    body: "Peat from our own fibre factories is stored in yards free of seeds, weeds and foreign matter, then soaked to soften only matured husks are used, never immature material.",
  },
  {
    n: "02",
    title: "Extraction",
    body: "Defibred husk passes through a rotating sieve. Soft fibre is set aside for rope and mattress use; the fine residue left behind becomes coco peat.",
  },
  {
    n: "03",
    title: "Washing",
    body: "Fibre residue is washed to remove excess salts, guaranteeing electrical conductivity below 0.5 mS/cm.",
  },
  {
    n: "04",
    title: "Drying & Expansion",
    body: "Sun-dried to reduce moisture by 20–25%, preserving porosity and expansion capacity.",
  },
  {
    n: "05",
    title: "Sieving",
    body: "Passed through a ¼\" sieve to remove roughly 20% of surplus fibre strands.",
  },
  {
    n: "06",
    title: "Aging",
    body: "Matured for a minimum of 1 year young coco peat is far less durable than aged material.",
  },
  {
    n: "07",
    title: "Buffering",
    body: "Ion exchange removes excess sodium and potassium, so later fertilizing with calcium or magnesium won't damage plants.",
  },
  {
    n: "08",
    title: "Composting",
    body: "Products designed to last more than 2 years are composted for 12–18 months for long-term stability.",
  },
  {
    n: "09",
    title: "Double Sieving",
    body: "A final pass removes long fibres and dust, guaranteeing the uniformity and quality of every Coba Peat product.",
  },
];

const certifications = [
  {
    logo: boiLogo,
    title: "BOI Sri Lanka",
    body: "Approved by the Board of Investment of Sri Lanka.",
  },
  {
    logo: rhpLogo,
    title: "RHP Certified",
    body: "Certified for producing Responsible, Healthy and Proven coir products.",
  },
  {
    logo: hpLogo,
    title: "HP Standard",
    body: "Heat Processed (HP) standard for superior quality coir products.",
  },
  {
    logo: edbLogo,
    title: "EDB Sri Lanka",
    body: "Registered with the Export Development Board of Sri Lanka.",
  },
  {
    logo: isoLogo,
    title: "ISO 9001 (pending)",
    body: "ISO 9001:2015 Quality Management System certification in progress.",
  },
  {
    logo: gmpLogo,
    title: "Good Manufacturing Practice",
    body: "Registered with Good Manufacturing Practice.",
  },
  {
    logo: coirCouncilLogo,
    title: "Coir Council Member",
    body: "Proud member of the Sri Lanka Coir Council.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Process"
        title="A consistent product, by design."
        description="Every block that leaves our factory has been through nine controlled stages and tested in our own lab. That's the only way we know how to do this."
      />

      {/* QC LAB */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: FlaskConical,
              title: "In-house QC lab",
              body: "Chartered chemists run EC, pH, moisture, and density tests on every batch.",
            },
            {
              icon: Award,
              title: "Chartered chemists",
              body: "Our QC team holds professional chartered qualifications not just lab technicians.",
            },
            {
              icon: ShieldCheck,
              title: "BOI-approved",
              body: "Registered with the Board of Investment of Sri Lanka for direct export.",
            },
          ].map((f) => (
            <div key={f.title} className="p-7 rounded-2xl bg-card border border-border">
              <f.icon className="h-9 w-9 text-accent" />
              <h3 className="mt-5 font-serif text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS TO SELECT COCO PEAT */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The Material</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Reasons to select coco peat.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-8">
              Before it's ever a Coba Peat product, coco peat itself is one of the best growing
              media available a natural by-product of the coconut with properties that suit
              growers of every kind.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {cocoPeatReasons.map((r) => (
              <div
                key={r.title}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] p-6 rounded-2xl bg-background border border-border"
              >
                <r.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS TO SELECT */}
      <section className="section-y bg-muted/30 border-y border-border">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Reasons to select as supplier</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Reasons to Select Coba Peat Lanka as your “Full Partner” Supplier.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-8">
              We believe that our supply is your company&apos;s lifeline for sustainability and continued growth. To evaluate our performance as a supplier, below criteria will give you an accurate snapshot of our efficiency as a supplier for your business.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {[
              {
                title: "Fair Pricing Structure",
                text: "Balanced value with transparent pricing for long-term partnerships.",
                icon: BadgeDollarSign,
              },
              {
                title: "Assurance of Supply",
                text: "Reliable availability and consistent delivery planning for your operations.",
                icon: PackageCheck,
              },
              {
                title: "Responsiveness",
                text: "Fast communication and dependable support from enquiry to shipment.",
                icon: Handshake,
              },
              {
                title: "Ethically Made Products",
                text: "Responsibly sourced materials and a business approach built on integrity.",
                icon: Leaf,
              },
              {
                title: "Environment and Safety",
                text: "Processes designed to reduce impact while protecting people and product quality.",
                icon: ShieldCheck,
              },
              {
                title: "Technology",
                text: "Modern production and logistics capabilities supporting efficient execution.",
                icon: Cpu,
              },
              {
                title: "Quality",
                text: "Rigorous testing and superior standards built into every shipment.",
                icon: Sparkles,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="w-full md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.8333rem)] group rounded-2xl border border-border bg-background p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Process</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              From husk to export nine stages.
            </h2>
          </div>
          <ol className="flex flex-wrap justify-center gap-5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.8333rem)] relative p-7 rounded-2xl bg-background border border-border"
              >
                <span className="font-serif text-5xl text-accent/30">{s.n}</span>
                <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-y bg-muted/20">
        <div className="container-wide text-center">
          <span className="eyebrow">Certifications</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Trusted &amp; certified</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our certifications reflect our commitment to quality, sustainability and excellence
            in every step.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] relative flex flex-col items-center rounded-2xl bg-card border border-border p-5 text-left shadow-sm"
              >
                <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
                <Image src={c.logo} alt={`${c.title} logo`} className="h-32 md:h-36 w-auto object-contain" />
                <h3 className="mt-3 font-serif text-base text-center">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground text-center leading-5">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            We continuously strive to meet international standards and deliver the best to our
            partners worldwide.
          </div>
        </div>
      </section>

      <CTASection
        title="Want a sample or test report?"
        description="We're happy to send a physical sample and a recent QC report so your agronomy team can verify our specifications first-hand."
        primaryLabel="Request a Sample"
        primaryTo="/contact"
      />
    </>
  );
}
