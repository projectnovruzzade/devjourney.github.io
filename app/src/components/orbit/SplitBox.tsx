import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SplitBoxTone = "violet" | "cyan" | "mint" | "amber" | "coral";

export type SplitBoxProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  tone?: SplitBoxTone;
  children: ReactNode;
  className?: string;
};

const toneStyles: Record<SplitBoxTone, { orb: string; chip: string; eyebrow: string }> = {
  violet: {
    orb: "bg-[#B153E0]",
    chip: "bg-[linear-gradient(135deg,#B153E0,#FBA834)] text-white shadow-[#B153E0]/20",
    eyebrow: "text-[#B153E0]",
  },
  cyan: {
    orb: "bg-[#FBA834]",
    chip: "bg-[linear-gradient(135deg,#B153E0,#FBA834)] text-white shadow-[#FBA834]/20",
    eyebrow: "text-[#B153E0]",
  },
  mint: {
    orb: "bg-[#B153E0]",
    chip: "bg-[linear-gradient(135deg,#B153E0,#FBA834)] text-white shadow-[#B153E0]/20",
    eyebrow: "text-[#B153E0]",
  },
  amber: {
    orb: "bg-[#FBA834]",
    chip: "bg-[linear-gradient(135deg,#B153E0,#FBA834)] text-white shadow-[#FBA834]/20",
    eyebrow: "text-[#B153E0]",
  },
  coral: {
    orb: "bg-[#B153E0]",
    chip: "bg-[linear-gradient(135deg,#B153E0,#FBA834)] text-white shadow-[#B153E0]/20",
    eyebrow: "text-[#B153E0]",
  },
};

export function SplitBox({
  index,
  eyebrow,
  title,
  tone = "violet",
  children,
  className,
}: SplitBoxProps) {
  const styles = toneStyles[tone];

  return (
    <section
      className={cn(
        "glass-panel relative overflow-hidden p-5 sm:p-7 lg:grid lg:grid-cols-[0.9fr_1.6fr] lg:gap-8 lg:p-8",
        className,
      )}
    >
      <span
        className={cn("orb -left-16 top-10 h-44 w-44 opacity-20", styles.orb)}
        aria-hidden="true"
      />
      <span
        className={cn("orb -right-20 -top-20 h-52 w-52 opacity-20", styles.orb)}
        aria-hidden="true"
      />

      <div className="relative">
        <div
          className={cn(
            "grid h-12 w-12 place-items-center rounded-2xl font-display text-sm font-semibold shadow-lg",
            styles.chip,
          )}
        >
          {index}
        </div>
        <p className={cn("mt-5 text-xs font-semibold uppercase tracking-[0.16em]", styles.eyebrow)}>
          {eyebrow}
        </p>
        <h3 className="mt-3 max-w-sm font-display text-2xl font-semibold leading-tight text-[#35374B] sm:text-3xl">
          {title}
        </h3>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[linear-gradient(135deg,#B153E0,#FBA834)]" />
      </div>

      <div className="relative mt-6 rounded-2xl border border-white/45 bg-white/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur lg:mt-0 lg:p-6">
        {children}
      </div>
    </section>
  );
}
