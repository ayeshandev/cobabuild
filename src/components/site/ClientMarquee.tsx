const clients = [
  { name: "Bunnings Garden Products", country: "Australia" },
  { name: "Gardman Ltd", country: "United Kingdom" },
  { name: "Multicrop Victoria", country: "Australia" },
  { name: "Horticom Ltd", country: "New Zealand" },
  { name: "Humibox", country: "Malaysia" },
];

function ClientLogo({ name, country }: { name: string; country: string }) {
  const initials = name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex items-center gap-3 shrink-0 px-8 py-5 mx-2 rounded-xl bg-card border border-border">
      <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary font-serif text-sm font-semibold">
        {initials}
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
