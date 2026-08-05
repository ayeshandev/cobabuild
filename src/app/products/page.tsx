import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/site/blocks";
import { ProductsGrid } from "./ProductsGrid";

export const metadata: Metadata = {
  title: "Products | Coco Peat, Grow Bags & Coir",
  description:
    "Browse our full range of mulch blocks, potting mix, grow bags, coco peat bales and briquettes, all manufactured in Sri Lanka and exported worldwide.",
  openGraph: { title: "Products | Coba Peat Lanka", url: "/products" },
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="A complete coir catalogue, ready to ship."
        description="From compressed blocks for commercial greenhouses to artisan coir crafts for retail we manufacture, test and pack to your specification. Our catalogue spans 75+ product varieties in total."
      />

      <ProductsGrid />

      {/* EXTENDED RANGE */}
      <section className="pb-8">
        <div className="container-wide">
          <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
            <span className="eyebrow">Also in our range</span>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl leading-tight">
              75+ varieties, including specialty &amp; value-added lines.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              Beyond the core categories above, we manufacture Coba Garden Mat, Coba Living
              Dolls, Coba Fibre Pots and a range of other value-added coir products all
              produced at our own factory and available custom-manufactured to your
              specification. Ask our team for the full product list.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a custom blend or packaging?"
        description="We regularly run custom EC, pH, mix ratios and private-label packaging for buyers across multiple markets. Tell us what you need."
        primaryLabel="Request a Quote"
        primaryTo="/contact"
      />
    </>
  );
}
