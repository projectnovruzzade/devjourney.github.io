import { cn } from "@/lib/utils";

/**
 * SectionHeading — eyebrow + title (with optional aurora-highlighted span) + description.
 *
 * <SectionHeading
 *   eyebrow="What you get"
 *   title={<>One platform. <span className="aurora-text">Every connection.</span></>}
 *   description="..."
 *   align="center"
 * />
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-aurora-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
