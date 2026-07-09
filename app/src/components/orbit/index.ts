/**
 * Orbit UI primitives — the brand-styled component layer.
 *
 * Always import from here, not from individual files, so refactors stay easy:
 *   import { OrbitButton, GlassCard, Pill } from "@/components/orbit";
 *
 * Layer model:
 *   Orbit primitives (this folder) ← branded look & defaults
 *           │
 *   Site components / routes       ← compose the above
 */
export { OrbitButton, orbitButton, type OrbitButtonProps } from "./Button";
export { Badge3D, type Badge3DProps } from "./Badge3D";
export { DiscoverBento, type DiscoverBentoProps, type DiscoverCard } from "./DiscoverBento";
export { OrbitInput, OrbitTextarea, OrbitField } from "./Input";
export { GlassCard, type GlassCardProps } from "./GlassCard";
export { Pill, type PillProps } from "./Pill";
export { SectionHeading } from "./SectionHeading";
export { SplitBox, type SplitBoxProps } from "./SplitBox";
export { Container } from "./Container";
