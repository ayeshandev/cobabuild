import type { Metadata } from "next";
import { PackageSearch, Boxes, Wallet, Ship } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Coco Peat & Coir Product Questions",
  description:
    "Answers to common questions on Coba Peat Lanka's coco peat and coir products: testing, packaging, compression ratios, pricing, Incoterms, minimum order quantities and shipping.",
  openGraph: { title: "FAQ | Coba Peat Lanka", url: "/faq" },
  alternates: { canonical: "/faq" },
};

const faqSections = [
  {
    icon: PackageSearch,
    heading: "Product-related",
    items: [
      {
        q: "Do you test the physical properties of your coir pith?",
        a: "Yes. Our coir pith undergoes extensive testing, including bulk density, moisture content, electrical conductivity, Cation Exchange Capacity (CEC) and water retention capacity.",
      },
      {
        q: "Can you supply chemical analysis of the product?",
        a: "Yes. Coba Peat products go through extensive chemical analysis, and results are provided to clients on request.",
      },
      {
        q: "What's your compression ratio?",
        a: "Our average compression ratio is 5:1. Briquettes are compressed at 8:1.",
      },
      {
        q: "How much does the product expand after adding water?",
        a: "Expansion depends on the specific product. On average, 1kg of material expands to around 14 litres after adding 6–7 litres of water.",
      },
      {
        q: "Is your coir pith sterilised?",
        a: "Yes. Sterilisation is part of our standard quality control process at every production stage.",
      },
      {
        q: "Do you provide usage instructions?",
        a: "Yes. We provide detailed handling and usage instructions with every delivery.",
      },
      {
        q: "Do you offer lower-cost grades?",
        a: "Yes. We supply coir pith in a range of quality grades to suit different budgets.",
      },
      {
        q: "Can you manufacture to our specification and supply unbranded?",
        a: "Yes. We manufacture to client specifications and can supply unbranded, loose-packed product in various quantities on request.",
      },
      {
        q: "Can you supply regularly?",
        a: "Yes. Our raw material network and in-house facilities let us maintain a regular, reliable supply to our buyers.",
      },
      {
        q: "What's your delivery timeframe?",
        a: "Delivery time depends on destination. Shipments to European countries typically take 23–29 days.",
      },
    ],
  },
  {
    icon: Boxes,
    heading: "Packaging",
    items: [
      {
        q: "How is your product packed, and what are the options?",
        a: "We offer a range of packaging to suit different needs: loose, shrink-wrapped, palletised, carry-pack, or cartons.",
      },
      {
        q: "What's the loading capacity in a 40ft HC container?",
        a: "This depends on the product and packing method. Typical loadability ranges from 24 to 26 metric tons in a 40ft high-cube container.",
      },
    ],
  },
  {
    icon: Wallet,
    heading: "Pricing & Shipping",
    items: [
      {
        q: "Can you send a price list?",
        a: "Yes, on reasonable request — we maintain price lists across our product range.",
      },
      {
        q: "What are your shipping rates?",
        a: "We offer competitive, economical freight quotes and prioritise early, safe delivery.",
      },
      {
        q: "Do you provide samples, and is there a cost?",
        a: "Yes, samples are free of charge on request. You'll only be asked to cover courier or air-freight postage — and, if you need an express service such as DHL or FedEx, that cost is also the recipient's responsibility.",
      },
      {
        q: "Can you arrange the best shipping rates?",
        a: "Yes. Our relationships with shipping companies let us arrange competitive rates and prompt delivery.",
      },
    ],
  },
  {
    icon: Ship,
    heading: "Quantities & Shipment",
    items: [
      {
        q: "What countries do you ship to?",
        a: "We ship worldwide, anywhere served by a shipping line to your nearest port.",
      },
      {
        q: "Do you deliver to our site (Delivery Duty Paid)?",
        a: "No — we deliver to your nearest seaport. Transit from the port to your site is the customer's responsibility.",
      },
      {
        q: "What Incoterms do you offer?",
        a: "We quote CFR (Cost & Freight) or FOB (Free on Board) on request.",
      },
      {
        q: "What's your minimum order quantity?",
        a: "Our standard MOQ is a 40' HC container, which keeps freight costs efficient for our customers. In some cases we can accept a 20' DV container.",
      },
      {
        q: "Can I get a sample of your product?",
        a: "Yes — get in touch with your requirements and we'll arrange a courier sample.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions we hear most."
        description="From product testing and packaging to pricing, Incoterms and minimum order quantities here's what our buyers ask before placing an order. Can't find what you need? Get in touch directly."
      />

      {faqSections.map((section, i) => (
        <section
          key={section.heading}
          className={`section-y ${i % 2 === 1 ? "bg-card border-y border-border" : ""}`}
        >
          <div className="container-wide max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <section.icon className="h-5 w-5" />
              </span>
              <h2 className="font-serif text-2xl md:text-3xl">{section.heading}</h2>
            </div>
            <Accordion type="single" collapsible className="mt-4">
              {section.items.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="font-serif text-base md:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-7">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      <CTASection
        title="Still have a question?"
        description="If you can't find what you're looking for here, tell us what you need product, volume, destination and our team will get back to you within one business day."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
