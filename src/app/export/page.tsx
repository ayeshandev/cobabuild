import type { Metadata } from "next";
import { Ship, CalendarDays, FileText, Globe2, PackageCheck, Handshake, Leaf } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";
// "dotted-map/without-countries" skips the full world-geojson + point-in-polygon
// scan that the default import does at construction time (~300-500ms of
// synchronous CPU work) — that scan was happening at module load, which is
// cheap during `next build` but blows Cloudflare Workers' CPU-time limit
// whenever this module gets evaluated inside the Worker. The grid is
// precomputed once (see scripts note in world-map-grid.json) so all that's
// left at runtime is a handful of cheap addPin() coordinate lookups.
import DottedMap from "dotted-map/without-countries";
import worldMapGrid from "@/lib/world-map-grid.json";
import { PageHero, CTASection } from "@/components/site/blocks";

const shipmentDestinations = [
  {
    country: "United Kingdom",
    code: "GB",
    lat: 54.0,
    lng: -2.0,
    note: "Retail-pack briquettes and horticulture mixes for Gardman Ltd.",
  },
  {
    country: "Japan",
    code: "JP",
    lat: 36.2048,
    lng: 138.2529,
    note: "High-spec grow bags and fine peat blocks for greenhouse.",
  },
  {
    country: "Spain",
    code: "ES",
    lat: 40.4637,
    lng: -3.7492,
    note: "Growing media for greenhouse fruit & vegetable producers.",
  },
  {
    country: "Malaysia",
    code: "MY",
    lat: 4.2105,
    lng: 101.9758,
    note: "Potting mix and coco peat supplied through our Humibox partnership.",
  },
  {
    country: "United States",
    code: "US",
    lat: 34.05,
    lng: -118.25,
    note: "Containers for ornamental nurseries and erosion control.",
  },
  {
    country: "France",
    code: "FR",
    lat: 46.2276,
    lng: 2.2137,
    note: "Organic-grade coco peat for vineyards and ornamentals.",
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    lat: 23.4241,
    lng: 53.8478,
    note: "Compressed blocks and grow bags for arid-climate horticulture.",
  },
  {
    country: "Canada",
    code: "CA",
    lat: 49.28,
    lng: -123.12,
    note: "Coco peat blocks and grow bags for nursery and greenhouse growers.",
  },
  {
    country: "New Zealand",
    code: "NZ",
    lat: -40.9006,
    lng: 174.886,
    note: "Coco peat and coir mixes supplied via our Horticom Ltd partnership.",
  },
];

const shipmentStats = [
  {
    icon: Globe2,
    label: "Global Reach",
    body: "Trusted by partners in 9 countries",
  },
  {
    icon: PackageCheck,
    label: "Quality Products",
    body: "Premium coco peat & coir solutions",
  },
  {
    icon: Handshake,
    label: "Reliable Partnerships",
    body: "Long-term relationships built on trust",
  },
  {
    icon: Leaf,
    label: "Sustainable Future",
    body: "Eco-friendly products for a greener tomorrow",
  },
];

// Returns the arc's path data plus the unit tangent at its (trimmed) end, so
// callers can place a label beyond the arrowhead in the exact direction the
// arrow is pointing — the only placement that can never land on top of it.
function arcGeometry(sx: number, sy: number, ex: number, ey: number, shorten = 3) {
  const mx = (sx + ex) / 2;
  const my = (sy + ey) / 2;
  const dx = ex - sx;
  const dy = ey - sy;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const px = -dy / dist;
  const py = dx / dist;
  const bow = dist * 0.2;
  const sign = ey <= sy ? -1 : 1;
  const cx = mx + px * bow * sign;
  const cy = my + py * bow * sign;

  // Pull the endpoint back along the curve's final tangent so the arrowhead
  // lands a little short of the true point, leaving padding before the pin
  // dot instead of touching it exactly.
  const tdx = ex - cx;
  const tdy = ey - cy;
  const tdist = Math.sqrt(tdx * tdx + tdy * tdy) || 1;
  const tangentX = tdx / tdist;
  const tangentY = tdy / tdist;
  const trimmedEx = ex - tangentX * shorten;
  const trimmedEy = ey - tangentY * shorten;

  return { d: `M ${sx} ${sy} Q ${cx} ${cy} ${trimmedEx} ${trimmedEy}`, tangentX, tangentY };
}

// Flips the label's anchor point when its pin sits near an edge of the map,
// so the pill grows inward instead of spilling past the card border. Also
// keeps every label offset a few px away from its marker (never centered
// exactly on top of it) so the arrowhead underneath stays visible.
function labelTransform(xPct: number, yPct: number) {
  const gap = 10;
  let tx: string;
  if (xPct < 12) tx = `${gap}px`;
  else if (xPct > 88) tx = `calc(-100% - ${gap}px)`;
  else tx = "-50%";

  const ty = yPct > 82 ? `calc(-100% - ${gap}px)` : `${gap}px`;

  return `translate(${tx}, ${ty})`;
}

// Keeps every pin's label anchor a safe margin inside the card, so a pin
// sitting right at the edge of the map (e.g. a high-latitude country near
// the top) still leaves room for its label to render without spilling past
// the border.
function clampPct(pct: number, min: number, max: number) {
  return Math.min(max, Math.max(min, pct));
}

// Destination labels sit along the incoming arrow's own line, positioned
// just past the arrowhead in the direction it points — so the pill grows
// away from the arrow instead of covering it, whichever way the arc
// approaches. Edge proximity always wins over that, though: near the top
// the hub's arrows approach from below, so "away from the arrow" would mean
// growing further up and off the card — there centering vertically is the
// only option that both stays on the card and stays off the incoming line.
function destinationLabelTransform(xPct: number, yPct: number, tangentX: number, tangentY: number) {
  const gap = 12;
  const lean = 0.3;

  // Edge safety always wins over arrow direction — a pin near the left edge
  // must grow right regardless of which way its arrow leans, otherwise the
  // two rules can agree on the one direction that pushes it off the card.
  let tx: string;
  if (xPct < 12) tx = `${gap}px`;
  else if (xPct > 88) tx = `calc(-100% - ${gap}px)`;
  else if (tangentX < -lean) tx = `calc(-100% - ${gap}px)`;
  else if (tangentX > lean) tx = `${gap}px`;
  else tx = "-50%";

  let ty: string;
  if (yPct < 15) ty = "-50%";
  else if (yPct > 82) ty = `calc(-100% - ${gap}px)`;
  else if (tangentY < -lean) ty = `calc(-100% - ${gap}px)`;
  else if (tangentY > lean) ty = `${gap}px`;
  else ty = "-50%";

  return `translate(${tx}, ${ty})`;
}

// Grid is precomputed (see src/lib/world-map-grid.json) so this only does
// cheap pin lookups at module load, not the expensive land-point scan.
const worldMap = new DottedMap({ map: worldMapGrid as ConstructorParameters<typeof DottedMap>[0]["map"] });
const worldMapLandPoints = worldMap.getPoints();
const { width: mapWidth, height: mapHeight } = worldMap.image;
const shipmentHubPin = worldMap.addPin({ lat: 7.8731, lng: 80.7718, data: { name: "Sri Lanka" } })!;
const shipmentPinsBase = shipmentDestinations.map((d) => {
  const pin = worldMap.addPin({ lat: d.lat, lng: d.lng, data: { name: d.country } })!;
  const arc = arcGeometry(shipmentHubPin.x, shipmentHubPin.y, pin.x, pin.y);
  return { ...d, pin, arc };
});

// Nearby destinations (e.g. the UK/France/Spain cluster) share nearly the same
// incoming-arrow direction, so labels placed purely on that direction pile up
// on top of each other. Nudging each label's direction away from its close
// neighbors — on top of the arrow direction — spreads a tight cluster apart
// while leaving isolated pins (Japan, Canada, ...) unaffected.
const shipmentPins = shipmentPinsBase.map((p) => {
  let rx = 0;
  let ry = 0;
  for (const q of shipmentPinsBase) {
    if (q === p) continue;
    const dx = p.pin.x - q.pin.x;
    const dy = p.pin.y - q.pin.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    rx += (dx / dist) / dist;
    ry += (dy / dist) / dist;
  }
  const dirX = p.arc.tangentX + rx * 4;
  const dirY = p.arc.tangentY + ry * 4;
  const dirLen = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
  return { ...p, labelDirX: dirX / dirLen, labelDirY: dirY / dirLen };
});

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
                  Our current main buyer is Brunnings, supplying their SA,
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
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Regular shipments across the globe.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Proudly exporting premium coco peat and coir products from{" "}
              <span className="text-primary font-semibold">Sri Lanka</span> to our valued
              partners worldwide.
            </p>
          </div>

          <div
            className="relative w-full rounded-3xl border border-border bg-background overflow-hidden"
            style={{ aspectRatio: `${mapWidth} / ${mapHeight}` }}
          >
            <svg viewBox={`0 0 ${mapWidth} ${mapHeight}`} className="absolute inset-0 h-full w-full">
              <defs>
                <marker
                  id="shipmentArrow"
                  viewBox="0 0 8 8"
                  refX="6.2"
                  refY="4"
                  markerWidth="2.2"
                  markerHeight="2.2"
                  markerUnits="userSpaceOnUse"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0.6 L7,4 L0,7.4 L1.7,4 Z" fill="var(--color-primary)" />
                </marker>
              </defs>

              <g className="text-primary/25" fill="currentColor">
                {worldMapLandPoints.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={0.6} />
                ))}
              </g>

              <g
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.4"
                strokeDasharray="1.8 1.5"
                strokeLinecap="round"
                opacity="0.7"
              >
                {shipmentPins.map(({ country, arc }) => (
                  <path key={country} d={arc.d} markerEnd="url(#shipmentArrow)" />
                ))}
              </g>

              {/* destination dots: mark the exact point each arrow points to */}
              <g className="fill-primary" stroke="var(--color-background)" strokeWidth="0.4">
                {shipmentPins.map(({ country, pin }) => (
                  <circle key={country} cx={pin.x} cy={pin.y} r="1.1" />
                ))}
              </g>

              <circle
                cx={shipmentHubPin.x}
                cy={shipmentHubPin.y}
                r="3.2"
                className="fill-none stroke-primary/30"
                strokeWidth="1.5"
              />
              <circle cx={shipmentHubPin.x} cy={shipmentHubPin.y} r="1.7" className="fill-primary" />
            </svg>

            {/* labels: clamped a safe margin inside the card, anchor flips near
                edges/arrows so pills never spill past the border or cover an arrow */}
            <div className="absolute inset-0">
              <div
                className="absolute whitespace-nowrap"
                style={{
                  left: `${(shipmentHubPin.x / mapWidth) * 100}%`,
                  top: `${(shipmentHubPin.y / mapHeight) * 100}%`,
                  transform: labelTransform(
                    (shipmentHubPin.x / mapWidth) * 100,
                    (shipmentHubPin.y / mapHeight) * 100,
                  ),
                }}
              >
                <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow">
                  Sri Lanka
                </span>
              </div>

              {shipmentPins.map(({ country, code, note, pin, labelDirX, labelDirY }) => {
                const Flag = Flags[code as keyof typeof Flags];
                // Clamped inward from the pin's true position so the label
                // always has room to render without spilling past the card,
                // even for pins that sit right at the edge of the map.
                const xPct = clampPct((pin.x / mapWidth) * 100, 8, 92);
                const yPct = clampPct((pin.y / mapHeight) * 100, 10, 88);
                return (
                  <div
                    key={country}
                    title={note}
                    className="absolute whitespace-nowrap inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-2.5 py-1.5 md:px-3 shadow ring-1 ring-border"
                    style={{
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                      transform: destinationLabelTransform(xPct, yPct, labelDirX, labelDirY),
                    }}
                  >
                    <span className="inline-flex overflow-hidden rounded-full ring-1 ring-border h-4 w-4 shrink-0">
                      <Flag className="h-full w-full" title={country} />
                    </span>
                    <span className="text-[11px] md:text-sm font-medium">{country}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shipmentStats.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-3 p-5 rounded-2xl bg-background border border-border"
              >
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-sm">{s.label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{s.body}</div>
                </div>
              </div>
            ))}
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
