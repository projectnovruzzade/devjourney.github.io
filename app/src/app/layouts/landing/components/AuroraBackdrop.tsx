export function AuroraBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="orb animate-float animate-pulse-glow"
        style={{
          width: "600px",
          height: "600px",
          top: "-180px",
          left: "-120px",
          background: "var(--aurora-violet)",
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: "520px",
          height: "520px",
          top: "20%",
          right: "-160px",
          background: "var(--aurora-magenta)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="orb animate-float animate-pulse-glow"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-180px",
          left: "30%",
          background: "var(--aurora-cyan)",
          animationDelay: "-8s",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 4%) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
