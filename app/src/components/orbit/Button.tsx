import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * OrbitButton — brand-styled button.
 *
 * Variants:
 *  - aurora  → primary CTA, aurora gradient fill + violet glow
 *  - glass   → frosted glass panel button (secondary)
 *  - ghost   → text-only, hovers to glass
 *  - outline → bordered transparent
 *  - white   → solid white pill (used on aurora hero bands)
 *  - warm    → warm gradient (coral/amber) for accent moments
 *
 * Use `asChild` when a button should render as another interactive element.
 */
const orbitButton = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        aurora:
          "aurora-bg text-white shadow-xl shadow-primary/40 hover:scale-[1.02] hover:shadow-primary/60",
        glass:
          "glass-panel text-foreground hover:bg-glass-strong",
        ghost:
          "text-muted-foreground hover:bg-glass hover:text-foreground",
        outline:
          "border border-glass-border text-foreground hover:bg-glass",
        white:
          "bg-white text-background shadow-xl hover:scale-[1.02]",
        warm:
          "text-background shadow-xl hover:scale-[1.02]",
      },
      size: {
        sm: "rounded-lg px-3 py-1.5 text-xs [&_svg]:size-3.5",
        md: "rounded-xl px-5 py-2.5 text-sm [&_svg]:size-4",
        lg: "rounded-xl px-6 py-3 text-sm [&_svg]:size-4",
        icon: "rounded-lg h-9 w-9 [&_svg]:size-4",
      },
    },
    defaultVariants: { variant: "aurora", size: "md" },
  },
);

export interface OrbitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof orbitButton> {
  asChild?: boolean;
}

export const OrbitButton = React.forwardRef<HTMLButtonElement, OrbitButtonProps>(
  ({ className, variant, size, asChild, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const warmStyle =
      variant === "warm" ? { backgroundImage: "var(--gradient-warm)", ...style } : style;
    return (
      <Comp
        ref={ref}
        className={cn(orbitButton({ variant, size }), className)}
        style={warmStyle}
        {...props}
      />
    );
  },
);
OrbitButton.displayName = "OrbitButton";

export { orbitButton };
