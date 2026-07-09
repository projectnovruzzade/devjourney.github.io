import { ArrowUpRight, Calendar, Timer, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { OrbitButton } from "./Button";
import { Pill } from "./Pill";

export type DiscoverTone = "violet" | "cyan" | "mint" | "amber" | "coral";
export type DiscoverMetaIcon = "date" | "live" | "deadline" | "time";

export type DiscoverCard = {
  tag: string;
  tone: DiscoverTone;
  title: string;
  description: string;
  meta: { icon: DiscoverMetaIcon; label: string };
  cta: string;
  image?: string;
  featured?: boolean;
};

export type DiscoverBentoProps = {
  cards: DiscoverCard[];
  className?: string;
};

const toneStyles: Record<
  DiscoverTone,
  {
    orb: string;
    meta: string;
    cta: string;
    bar: string;
  }
> = {
  violet: {
    orb: "bg-aurora-violet",
    meta: "border-aurora-violet/25 bg-aurora-violet/10 text-aurora-violet",
    cta: "border-aurora-violet/25 bg-aurora-violet/10 text-aurora-violet hover:bg-aurora-violet/15",
    bar: "from-aurora-violet via-aurora-magenta to-aurora-cyan",
  },
  cyan: {
    orb: "bg-aurora-cyan",
    meta: "border-aurora-cyan/25 bg-aurora-cyan/10 text-aurora-cyan",
    cta: "border-aurora-cyan/25 bg-aurora-cyan/10 text-aurora-cyan hover:bg-aurora-cyan/15",
    bar: "from-aurora-cyan via-aurora-blue to-aurora-violet",
  },
  mint: {
    orb: "bg-aurora-mint",
    meta: "border-aurora-mint/25 bg-aurora-mint/10 text-aurora-mint",
    cta: "border-aurora-mint/25 bg-aurora-mint/10 text-aurora-mint hover:bg-aurora-mint/15",
    bar: "from-aurora-mint via-aurora-cyan to-aurora-blue",
  },
  amber: {
    orb: "bg-aurora-amber",
    meta: "border-aurora-amber/25 bg-aurora-amber/10 text-aurora-amber",
    cta: "border-aurora-amber/25 bg-aurora-amber/10 text-aurora-amber hover:bg-aurora-amber/15",
    bar: "from-aurora-amber via-aurora-peach to-aurora-coral",
  },
  coral: {
    orb: "bg-aurora-coral",
    meta: "border-aurora-coral/25 bg-aurora-coral/10 text-aurora-coral",
    cta: "border-aurora-coral/25 bg-aurora-coral/10 text-aurora-coral hover:bg-aurora-coral/15",
    bar: "from-aurora-coral via-aurora-amber to-aurora-peach",
  },
};

const metaIcons: Record<DiscoverMetaIcon, LucideIcon> = {
  date: Calendar,
  live: Users,
  deadline: Timer,
  time: Timer,
};

export function DiscoverBento({ cards, className }: DiscoverBentoProps) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-3 lg:auto-rows-[minmax(220px,auto)]", className)}>
      {cards.map((card) => (
        <DiscoverBentoCard key={`${card.tag}-${card.title}`} card={card} />
      ))}
    </div>
  );
}

function DiscoverBentoCard({ card }: { card: DiscoverCard }) {
  const tone = toneStyles[card.tone];
  const MetaIcon = metaIcons[card.meta.icon];
  const isFeatured = card.featured === true;

  return (
    <article
      className={cn(
        "group glass-panel relative flex min-h-[220px] overflow-hidden transition-transform duration-300 hover:-translate-y-1",
        isFeatured ? "p-7 lg:col-span-1 lg:row-span-2" : "p-6",
      )}
    >
      <span
        className={cn(
          "orb -right-16 -top-16 h-52 w-52 opacity-[0.45] transition-opacity duration-300 group-hover:opacity-100",
          tone.orb,
        )}
        aria-hidden="true"
      />

      <span
        className={cn(
          "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100",
          tone.bar,
        )}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <Pill
            tone={card.tone}
            className="bg-glass-strong uppercase tracking-[0.14em] text-[10px]"
          >
            {card.tag}
          </Pill>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
              tone.meta,
            )}
          >
            <MetaIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {card.meta.label}
          </span>
        </div>

        {isFeatured ? <FeaturedImage card={card} /> : null}

        <div className={cn("flex flex-1 flex-col", isFeatured ? "mt-6" : "mt-8")}>
          <h3
            className={cn(
              "font-display font-semibold leading-tight text-foreground",
              isFeatured ? "text-2xl sm:text-3xl" : "text-lg",
            )}
          >
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>

          <div className="mt-auto pt-6">
            {isFeatured ? (
              <OrbitButton variant="aurora" className="w-full rounded-[8px]">
                {card.cta}
                <ArrowUpRight aria-hidden="true" />
              </OrbitButton>
            ) : (
              <button
                type="button"
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  tone.cta,
                )}
              >
                {card.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedImage({ card }: { card: DiscoverCard }) {
  if (!card.image) {
    return null;
  }

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-glass-border">
      <img
        src={card.image}
        alt=""
        className="h-56 w-full object-cover sm:h-64 lg:h-72"
        loading="lazy"
      />
      <span
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent"
        aria-hidden="true"
      />
      <span className="absolute bottom-4 left-4 rounded-full border border-glass-border bg-background/50 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
        Featured
      </span>
    </div>
  );
}
