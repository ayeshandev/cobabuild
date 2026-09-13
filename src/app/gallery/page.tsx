import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { PageHero } from "@/components/site/blocks";
import productsCollage from "@/assets/hero/cpl-products.webp";
import mulchBlock from "@/assets/products/mulch-block-photo.webp";
import megaCoir from "@/assets/products/mega-coir.webp";
import coirMulch from "@/assets/products/coir-mulch.webp";
import pottingMix from "@/assets/products/potting-mix.webp";
import orchidMix from "@/assets/products/orchid-mix.webp";
import seedRaisingMix from "@/assets/products/seed-raising-mix.webp";
import cocoPeatBales from "@/assets/products/coco-peat-bales.webp";
import coirBlock from "@/assets/products/coir-block.webp";
import cocoPeatBriquettes from "@/assets/products/coco-peat-briquettes.webp";
import coirPeatBrick from "@/assets/products/coir-peat-brick-photo.webp";
import growBags from "@/assets/products/grow-bags-photo.webp";

export const metadata: Metadata = {
  title: "Gallery | Factory, Products & Shipments",
  description: "Visual tour of our factory, drying yard, QC lab, products and shipments.",
  openGraph: { url: "/gallery" },
  alternates: { canonical: "/gallery" },
};

const items: { src: StaticImageData; caption: string; h?: "tall" }[] = [
  { src: productsCollage, caption: "Our coir product range, ready for retail and export" },
  { src: mulchBlock, caption: "Feed & Mulch Block, freshly packed" },
  { src: megaCoir, caption: "Mega Coir Feed & Mulch in the garden", h: "tall" },
  { src: coirMulch, caption: "Mega 90 Block premium grade coir mulch" },
  { src: pottingMix, caption: "Coir Potting Mix block" },
  { src: orchidMix, caption: "Orchid Mix, our specialty coir blend", h: "tall" },
  { src: seedRaisingMix, caption: "Seed Raising Mix for propagation" },
  { src: cocoPeatBales, caption: "Coir Garden Soil block" },
  { src: coirBlock, caption: "Premium grade coir block, ready to expand" },
  { src: cocoPeatBriquettes, caption: "Coir-Peat Brick" },
  { src: coirPeatBrick, caption: "Coir-Peat Brick, ready to expand", h: "tall" },
  { src: growBags, caption: "Grow bags packed for hydroponic cultivation" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside our facility."
        description="A glimpse into our factory, drying yards, QC lab, products and shipments around the world."
      />
      <section className="section-y">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {items.map((it, i) => (
              <figure
                key={i}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-card border border-border group"
              >
                <div
                  className={`relative overflow-hidden ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={it.src}
                    alt={it.caption}
                    fill
                    // Matches the columns-1/2/3 layout below so the browser
                    // requests an image sized for its actual rendered width
                    // instead of Next's fill-mode default of 100vw.
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading={i < 3 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
