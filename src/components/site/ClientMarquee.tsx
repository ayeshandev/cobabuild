import Image, { type StaticImageData } from "next/image";
import brunningsLogo from "@/assets/clients/brunnings.png";
import gardmanLogo from "@/assets/clients/Gardman.jpg";
import multicropLogo from "@/assets/clients/multicrop.png";
import horticomLogo from "@/assets/clients/horticom.png";
import humiboxLogo from "@/assets/clients/Humibox.jpg";

const clients: { name: string; country: string; logo: StaticImageData }[] = [
  { name: "Brunnings", country: "Australia", logo: brunningsLogo },
  { name: "Gardman Ltd", country: "United Kingdom", logo: gardmanLogo },
  { name: "Multicrop Victoria", country: "Australia", logo: multicropLogo },
  { name: "Horticom Ltd", country: "New Zealand", logo: horticomLogo },
  { name: "Humibox", country: "Malaysia", logo: humiboxLogo },
];

function ClientLogo({
  name,
  country,
  logo,
}: {
  name: string;
  country: string;
  logo: StaticImageData;
}) {
  return (
    <div className="flex items-center gap-3 shrink-0 px-8 py-5 mx-2 rounded-xl bg-card border border-border">
      <span className="grid place-items-center h-10 w-16 shrink-0 rounded-lg bg-white overflow-hidden border border-border/60">
        <Image src={logo} alt={`${name} logo`} className="h-full w-full object-contain p-1" />
      </span>
      <div className="leading-tight whitespace-nowrap">
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {country}
        </div>
      </div>
    </div>
  );
}

export function ClientMarquee() {
  const track = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {track.map((c, i) => (
          <ClientLogo key={`${c.name}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}
