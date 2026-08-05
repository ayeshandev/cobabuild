import type { Metadata } from "next";
import { Ship, CalendarDays, FileText, Globe2 } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";
import { PageHero, CTASection } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Export to Australia & Worldwide",
  description:
    "Direct coco peat exports from Sri Lanka to Australia, New Zealand, Japan, the UK, the USA, Canada, Malaysia, the UAE, Spain and France. FCL 20'/40' shipments, fortnightly Australia sailings, AQIS-compliant.",
  openGraph: { url: "/export" },
  alternates: { canonical: "/export" },
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export"
        title="Direct shipments to Australia & beyond."
        description="Australia is our largest market and has been since the late 1980s. Today we also ship regularly to New Zealand, Japan, the UK, the USA, Canada, Malaysia, the UAE, Spain and France."
      />

      {/* AUSTRALIA SPOTLIGHT */}
      <section className="section-y">
        <div className="container-wide">
          <div className="rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-16 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-bold uppercase tracking-wider">
                  Primary Market
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-primary-foreground">
                  Shipping to Australia
                </h2>
                <p className="mt-5 text-primary-foreground/80 text-lg">
                  Decades of AQIS-compliant shipments, predictable lead times, and full
                  documentation. We know what Australian biosecurity needs to see because we&apos;ve
                  been sending it since 1989.
                </p>
                <p className="mt-4 text-primary-foreground/80 text-lg">
                  Our current main buyer is Bunnings Garden Products (Pty) Ltd, supplying their SA,
                  NSW, QLD, WA and VIC operations directly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Ship,
                    label: "Sailings",
                    value: "Fortnightly to Melbourne, Sydney, Brisbane, Adelaide, Fremantle",
                  },
                  { icon: CalendarDays, label: "Lead time", value: "21–28 days port-to-port" },
                  { icon: FileText, label: "Incoterms", value: "FOB, CIF, CFR" },
                  { icon: Globe2, label: "Container", value: "20' FCL & 40' HC" },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="p-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15"
                  >
                    <d.icon className="h-5 w-5 text-gold" />
                    <div className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">
                      {d.label}
                    </div>
                    <div className="mt-1 text-sm font-medium">{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/60">
              We previously also shipped regularly to Tasmania, alongside our current Australian
              main ports.
            </p>
          </div>
        </div>
      </section>

      {/* SECONDARY MARKETS */}
      <section className="section-y bg-card border-y border-border">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Secondary Markets</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl leading-tight">
              Regular shipments across the globe.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                country: "New Zealand",
                code: "NZ",
                note: "Coco peat and coir mixes supplied via our Horticom Ltd partnership.",
              },
              {
                country: "Japan",
                code: "JP",
                note: "High-spec grow bags and fine peat blocks for greenhouse.",
              },
              {
                country: "United Kingdom",
                code: "GB",
                note: "Retail-pack briquettes and horticulture mixes for Gardman Ltd.",
              },
              {
                country: "United States",
                code: "US",
                note: "Containers for ornamental nurseries and erosion control.",
              },
              {
                country: "Canada",
                code: "CA",
                note: "Coco peat blocks and grow bags for nursery and greenhouse growers.",
              },
              {
                country: "Malaysia",
                code: "MY",
                note: "Potting mix and coco peat supplied through our Humibox partnership.",
              },
              {
                country: "United Arab Emirates",
                code: "AE",
                note: "Compressed blocks and grow bags for arid-climate horticulture.",
              },
              {
                country: "Spain",
                code: "ES",
                note: "Growing media for greenhouse fruit & vegetable producers.",
              },
              {
                country: "France",
                code: "FR",
                note: "Organic-grade coco peat for vineyards and ornamentals.",
              },
            ].map((m) => {
              const Flag = Flags[m.code as keyof typeof Flags];
              return (
                <div key={m.country} className="p-6 rounded-2xl bg-background border border-border">
                  <span className="inline-flex p-1.5 rounded-lg bg-muted shadow-sm ring-1 ring-border">
                    <Flag className="h-6 w-auto rounded-sm" title={m.country} />
                  </span>
                  <h3 className="mt-3 font-serif text-xl">{m.country}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Have an export inquiry?"
        description="Tell us your destination port, container type and volume. We'll come back with a quote, sailing schedule and references from your region."
        primaryLabel="Export Inquiry"
        primaryTo="/contact"
      />
    </>
  );
}
