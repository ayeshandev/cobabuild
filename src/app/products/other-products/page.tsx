import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTASection, ProductCard } from "@/components/site/blocks";
import { products } from "@/lib/products";
import productsHeroImg from "@/assets/hero/cpl-products.jpg";

export const metadata: Metadata = {
  title: "Other Coir & Coco Peat Products",
  description:
    "Beyond our core range, Coba Peat Lanka manufactures a wide range of further value-added coir products, custom blends and private-label packaging to match specific grower and retailer requirements.",
  openGraph: { title: "Other Coir & Coco Peat Products | Coba Peat Lanka", url: "/products/other-products" },
  alternates: { canonical: "/products/other-products" },
};

const craftSlugs = ["coba-living-dolls", "coba-garden-mat", "coba-fibre-pots"];

export default function OtherProductsPage() {
  const craftProducts = products.filter((p) => craftSlugs.includes(p.slug));

  return (
    <>
      <PageHero
        eyebrow="Beyond Our Core Range"
        title="Other Coir & Coco Peat Products"
        description="Beyond our core range, we manufacture to custom specification."
      />

      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
          <Image
            src={productsHeroImg}
            alt="Range of Coba Peat Lanka coir and coco peat products"
            width={1280}
            height={896}
            className="rounded-2xl shadow-xl"
          />
          <div>
            <span className="eyebrow">Our Full Catalogue</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Around 75 product varieties, custom-made to spec.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Our full catalogue spans around 75 product varieties. Alongside our core Mulch
              Block, Potting Mix, Grow Bag, Coco Peat Bale and Coco Peat Briquette lines, we
              produce a range of further value-added coir products, custom blends and
              private-label packaging to match specific grower and retailer requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Specialty Lines</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Explore our craft & landscaping range.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftProducts.map((p) => (
              <ProductCard
                key={p.slug}
                title={p.name}
                description={p.tagline}
                image={p.image}
                slug={p.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for something not listed here?"
        description="Tell us what you need — custom blends, private-label packaging or a smaller specialty item — and we'll come back with options."
        primaryLabel="Tell Us What You Need"
        primaryTo="/contact"
      />
    </>
  );
}
