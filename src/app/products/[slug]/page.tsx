import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Sprout,
  Flower,
  Flower2,
  Layers,
  Leaf,
  Trophy,
  TreePine,
  Home,
  Package,
  Palmtree,
  Warehouse,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { products } from "@/lib/products";
import { WhatsAppIcon } from "@/components/site/icons/WhatsAppIcon";
import { ProductCarousel } from "@/components/site/ProductCarousel";

const applicationIcons: Record<string, LucideIcon> = {
  Sprout,
  Flower,
  Flower2,
  Layers,
  Leaf,
  Trophy,
  TreePine,
  Home,
  Package,
  Palmtree,
  Warehouse,
  Building2,
  Landmark,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description.slice(0, 155),
    openGraph: {
      title: `${product.name} | Coba Peat Lanka`,
      images: [product.image.src],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="paper-texture border-b border-border">
        <div className="container-wide py-10 text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        <div className="container-wide pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 items-start">
          {product.gallery && product.gallery.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
                <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
              </div>
              {product.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border"
                >
                  <Image
                    src={img}
                    alt={`${product.name} — alternate packaging`}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
            </div>
          )}
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition shadow-sm"
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/94112698867"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Ideal Applications
              </span>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                {product.applications.map((a) => {
                  const Icon = applicationIcons[a.icon] ?? Sprout;
                  return (
                    <li key={a.label} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-accent" /> {a.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide max-w-4xl">
          <span className="eyebrow">Product Features</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Why growers choose it</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" /> {f}
              </li>
            ))}
          </ul>
          {product.usage && (
            <div className="mt-8 rounded-xl border border-border bg-background p-5 text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold text-foreground">How to expand: </span>
              {product.usage}
            </div>
          )}
        </div>
      </section>

      {/* SUB PRODUCTS */}
      {product.subProducts && product.subProducts.length > 0 && (
        <section className="section-y bg-card border-y border-border">
          <div className="container-wide max-w-4xl">
            <span className="eyebrow">In {product.name}</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              There are {product.subProducts.length} products in this range
            </h2>
            <ul className="mt-8 grid sm:grid-cols-3 gap-4">
              {product.subProducts.map((sp) => (
                <li key={sp.name}>
                  <Link
                    href={`/products/${sp.slug}`}
                    className="group flex h-full items-center justify-between gap-2 rounded-xl border border-border bg-background p-5 hover:border-accent/40 hover:shadow-md transition-all"
                  >
                    <span className="font-serif text-lg">{sp.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* SPECS */}
      {product.specs && (
        <section className="section-y">
          <div className="container-wide">
            <span className="eyebrow">Specifications</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Technical specifications</h2>
            <div className="mt-8 rounded-2xl border border-border overflow-x-auto bg-card">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-4 font-medium text-muted-foreground w-1/4">
                      Specification
                    </th>
                    {product.specs.columns.map((c) => (
                      <th
                        key={c}
                        className="text-left px-6 py-4 font-semibold text-foreground whitespace-nowrap"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                      <th className="text-left px-6 py-4 font-medium text-muted-foreground">
                        {row.label}
                      </th>
                      {row.values.map((v, j) => (
                        <td key={j} className="px-6 py-4 text-foreground whitespace-nowrap">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.packagingNote && (
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-4xl">
                <span className="font-semibold text-foreground">Packaging: </span>
                {product.packagingNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* RELATED */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <h2 className="font-serif text-3xl mb-8">Related products</h2>
          <ProductCarousel
            items={related.map((p) => ({
              slug: p.slug,
              title: p.name,
              description: p.tagline,
              image: p.image,
            }))}
            itemClassName="sm:basis-1/2"
          />
        </div>
      </section>
    </>
  );
}
