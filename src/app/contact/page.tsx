import type { Metadata } from "next";
import { PageHero } from "@/components/site/blocks";
import { ContactSection } from "./ContactSection";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description:
    "Request a quote for coco peat blocks, grow bags or coir products. Sri Lanka head office: 410/99 Bullers Road, Colombo 07. Phone: +61 424 824 630.",
  openGraph: { url: "/contact" },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote, or just say hello."
        description="Tell us a little about what you need product, volume, destination and our team will respond within one business day."
      />

      <ContactSection />

      {/* MAP */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
            <iframe
              title="Coba Peat Lanka Colombo office"
              src="https://www.google.com/maps?q=Coba+Peat+Lanka+(Pvt.)+Ltd&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
