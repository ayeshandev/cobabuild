import { ProductCard } from "@/components/site/blocks";
import { products } from "@/lib/products";

export function ProductsGrid() {
  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((p) => (
            <div
              key={p.slug}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProductCard
                title={p.name}
                description={p.tagline}
                image={p.image}
                slug={p.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
