"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import Image from "next/image";
import logoAsset from "@/assets/logo_transparant.png";

const productCategories = [
  { name: "Mulch Block", slug: "mulch-block" },
  { name: "Potting Mix", slug: "potting-mix" },
  { name: "Grow Bags", slug: "grow-bags" },
  { name: "Coco Peat Bales", slug: "coco-peat-bales" },
  { name: "Coco Peat Briquettes", slug: "coco-peat-briquettes" },
];

const nav = [
  { label: "About", to: "/about" },
  { label: "Quality & Process", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  const navLinkClass = (active: boolean) =>
    `relative flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      active
        ? "text-primary after:absolute after:left-3 after:right-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary"
        : "text-foreground/75 hover:text-primary hover:bg-primary/5"
    }`;

  const mobileNavLinkClass = (active: boolean, extra = "") =>
    `px-3 py-2.5 rounded-md transition-colors ${
      active ? "text-primary bg-primary/10 font-semibold" : "hover:bg-primary/5 hover:text-primary"
    } ${extra}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-3">
<Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src={logoAsset}
            alt="Coba Peat Lanka logo"
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight">Coba Peat Lanka</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Est. 1989
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <Link href="/" className={navLinkClass(isActive("/"))}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/products" className={navLinkClass(isActive("/products"))}>
              Products <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {productsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[28rem]">
                <div className="bg-card border border-border rounded-xl shadow-xl p-3 grid grid-cols-2 gap-1">
                  {productCategories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="px-3 py-2 rounded-md text-sm text-foreground/85 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {nav.map((n) => (
            <Link key={n.to} href={n.to} className={navLinkClass(isActive(n.to))}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            aria-hidden={isActive("/contact")}
            tabIndex={isActive("/contact") ? -1 : undefined}
            className={`inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground hover:brightness-105 px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
              isActive("/contact") ? "invisible pointer-events-none" : ""
            }`}
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-md hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={mobileNavLinkClass(isActive("/"))}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className={mobileNavLinkClass(isActive("/products"), "font-medium")}
            >
              All Products
            </Link>
            <div className="pl-4 mb-2 grid grid-cols-1 gap-0.5">
              {productCategories.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className={mobileNavLinkClass(isActive(n.to))}
              >
                {n.label}
              </Link>
            ))}
            {!isActive("/contact") && (
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-gold text-gold-foreground px-4 py-3 text-sm font-semibold"
              >
                Get a Quote
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
