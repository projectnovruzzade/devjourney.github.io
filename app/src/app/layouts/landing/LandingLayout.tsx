import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { AuroraBackdrop } from "./components/AuroraBackdrop";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export function LandingLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-screen overflow-x-hidden", className)}>
      <AuroraBackdrop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
