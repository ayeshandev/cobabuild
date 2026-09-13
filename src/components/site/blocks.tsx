import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Quote } from "lucide-react";

export function StatBlock({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
      <span className="grid place-items-center h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <div className="font-serif text-2xl text-foreground leading-none">{value}</div>
        <div className="mt-1.5 text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

export function ProductCard({
  title,
  description,
  image,
  slug,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  slug: string;
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex h-full flex-col rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl line-clamp-1">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
          Explore <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="h-full p-7 rounded-2xl bg-card border border-border flex flex-col">
      <Quote className="h-7 w-7 text-accent/70" />
      <blockquote className="mt-4 text-foreground/85 leading-relaxed font-serif text-lg flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-border">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
      </figcaption>
    </figure>
  );
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative max-w-2xl">
            {eyebrow && <span className="eyebrow text-gold">{eyebrow}</span>}
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight text-primary-foreground">
              {title}
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primaryTo}
                className="inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryTo && (
                <Link
                  href={secondaryTo}
                  className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="paper-texture border-b border-border">
      <div className="container-wide pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">{title}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
