"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroFactory from "@/assets/hero/cpl-factory.jpg";
import heroProduct from "@/assets/hero/cpl-products.jpg";
import heroCocopeat from "@/assets/hero/cpl-cocopeat.jpg";
import heroFactoryIn from "@/assets/hero/cpl-factory-in.jpg";

const slides = [
  { src: heroFactory, alt: "Coba Peat Lanka factory floor" },
  { src: heroFactoryIn, alt: "Coba Peat Lanka factory interior" },
  { src: heroCocopeat, alt: "Coco peat production" },
  { src: heroProduct, alt: "Premium coco peat blocks" }
];

export function HeroSlider() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
        {slides.map((s, i) => (
        <Image
            key={i}
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === slide ? "opacity-100" : "opacity-0"
            }`}
        />
        ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
        <button
            key={i}
            type="button"
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
            i === slide ? "w-8 bg-gold" : "w-2 bg-background/50 hover:bg-background/80"
            }`}
        />
        ))}
      </div>
    </>
  );
}