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
        description="From compressed blocks for commercial greenhouses to artisan coir crafts for retail — we manufacture, test and pack to your specification. Our full range spans around 75 product varieties across seven categories, from bulk export blocks to hand-finished retail items."
      />

      <ProductsGrid />

      <CTASection
        title="Need a custom blend or packaging?"
        description="We regularly run custom EC, pH, mix ratios and private-label packaging for buyers across multiple markets. Tell us what you need."
        primaryLabel="Request a Quote"
        primaryTo="/contact"
      />
    </>
  );
}
