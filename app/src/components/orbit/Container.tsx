import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — standard horizontally-centered layout wrapper.
 * width: 'sm' (max-w-md) | 'md' (max-w-3xl) | 'lg' (max-w-5xl) | 'xl' (max-w-6xl, default)
 */
type ContainerProps = {
  as?: React.ElementType;
  width?: "sm" | "md" | "lg" | "xl" | "wide";
  padding?: "default" | "tight";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  as: Tag = "div",
  width = "xl",
  padding = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const max = {
    sm: "max-w-md",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    wide: "max-w-[1440px]",
  }[width];
  const pad = {
    default: "px-6",
    tight: "px-4 sm:px-5 lg:px-6",
  }[padding];
  return (
    <Tag className={cn("mx-auto", pad, max, className)} {...props}>
      {children}
    </Tag>
  );
}
