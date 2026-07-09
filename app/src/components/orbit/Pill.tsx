import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Pill / Badge — small rounded label used for tags, status chips, eyebrows.
 *
 * tone: 'cyan' (default, matches eyebrows), 'violet', 'mint', 'amber', 'coral', 'muted'
 */
const pill = cva(
  "inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        cyan: "text-aurora-cyan",
        violet: "text-aurora-violet",
        mint: "text-aurora-mint",
        amber: "text-aurora-amber",
        coral: "text-aurora-coral",
        muted: "text-muted-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: { tone: "cyan", size: "md" },
  },
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pill> {}

export function Pill({ className, tone, size, ...props }: PillProps) {
  return <span className={cn(pill({ tone, size }), className)} {...props} />;
}
