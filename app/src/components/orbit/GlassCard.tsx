import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * GlassCard — the workhorse surface for Orbit.
 *
 * variant: 'default' (frosted) | 'strong' (heavier blur)
 * tone:    'neutral' | 'violet' (glow) | 'cyan' (glow)
 * interactive: adds hover lift
 */
const glassCard = cva("relative", {
  variants: {
    variant: {
      default: "glass-panel",
      strong: "glass-panel-strong",
    },
    tone: {
      neutral: "",
      violet: "glow-violet",
      cyan: "glow-cyan",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    interactive: {
      true: "transition-transform hover:-translate-y-1",
      false: "",
    },
  },
  defaultVariants: { variant: "default", tone: "neutral", padding: "md", interactive: false },
});

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCard> {}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, tone, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassCard({ variant, tone, padding, interactive }), className)}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";
