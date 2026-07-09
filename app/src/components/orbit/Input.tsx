import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OrbitInput — glass-styled text input matching the Orbit design system.
 * Inherits all native <input> props.
 */
export const OrbitInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full rounded-lg border border-glass-border bg-glass px-3 py-2.5 text-sm text-foreground",
        "placeholder:text-muted-foreground/60",
        "transition-colors focus:border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
OrbitInput.displayName = "OrbitInput";

/**
 * OrbitTextarea — multi-line counterpart to OrbitInput.
 */
export const OrbitTextarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[96px] rounded-lg border border-glass-border bg-glass px-3 py-2.5 text-sm text-foreground",
        "placeholder:text-muted-foreground/60",
        "transition-colors focus:border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
OrbitTextarea.displayName = "OrbitTextarea";

/**
 * OrbitField — label + control + optional hint, matching Orbit form styling.
 *
 * <OrbitField label="Email" hint="University email preferred">
 *   <OrbitInput type="email" />
 * </OrbitField>
 */
export function OrbitField({
  label,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <span className="mt-1 block text-xs text-aurora-coral">{error}</span>
      ) : hint ? (
        <span className="mt-1 block text-xs text-muted-foreground/80">{hint}</span>
      ) : null}
    </label>
  );
}
