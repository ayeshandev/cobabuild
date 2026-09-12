import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://cobapeatlanka.com"),
  title: {
    default: "Coba Peat Lanka (Pvt) Ltd | Coco Peat & Coir Exporter, Sri Lanka",
    template: "%s | Coba Peat Lanka",
  },
  description:
    "BOI-approved Sri Lankan manufacturer and direct exporter of premium coco peat blocks, grow bags, husk chips and coir products. Established 1989. Nurturing Soil, Growing Futures.",
  authors: [{ name: "Coba Peat Lanka (Pvt) Ltd" }],
  openGraph: {
    siteName: "Coba Peat Lanka",
    type: "website",
    title: "Coba Peat Lanka (Pvt) Ltd | Coco Peat & Coir Exporter, Sri Lanka",
    description:
      "A corporate website for a Sri Lankan coco peat and coir exporter, showcasing products and company information.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240e9ce8-1443-4e3d-b239-602db588eec4/id-preview-8292c08c--9c76c557-afec-448e-85b4-2fcac7420304.lovable.app-1781850098717.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coba Peat Lanka (Pvt) Ltd | Coco Peat & Coir Exporter, Sri Lanka",
    description:
      "A corporate website for a Sri Lankan coco peat and coir exporter, showcasing products and company information.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240e9ce8-1443-4e3d-b239-602db588eec4/id-preview-8292c08c--9c76c557-afec-448e-85b4-2fcac7420304.lovable.app-1781850098717.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
