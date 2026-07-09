import { cn } from "@/lib/utils";

export interface Badge3DProps {
  company: string;
  name: string;
  role: string;
  metrics?: readonly BadgeMetric[];
  className?: string;
}

export interface BadgeMetric {
  label: string;
  value: string;
}

const defaultMetrics: readonly BadgeMetric[] = [
  { label: "Ideas", value: "14" },
  { label: "DevJourney score", value: "92" },
  { label: "Score counter", value: "1.8k" },
];

const metricStyles = [
  "border-[#FFE4C9]/45 bg-white/12 text-[#FFE4C9]",
  "border-[#705DF2]/35 bg-[#705DF2]/15 text-white",
  "border-[#FBA834]/55 bg-[#FBA834]/16 text-[#FFC374]",
];

export function Badge3D({
  company,
  name,
  role,
  metrics = defaultMetrics,
  className,
}: Badge3DProps) {
  return (
    <div
      className={cn(
        "relative h-[600px] w-full max-w-[540px] overflow-visible sm:h-[640px]",
        className,
      )}
      aria-label={`${name}, ${role}`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute left-8 top-20 h-52 w-52 rounded-full bg-[#B153E0]/25 blur-3xl" />
        <span className="absolute right-6 top-24 h-48 w-48 rounded-full bg-[#FBA834]/24 blur-3xl" />
        <span className="absolute bottom-20 left-28 h-48 w-48 rounded-full bg-[#705DF2]/18 blur-3xl" />
      </div>

      <div className="perspective-1200 absolute inset-x-0 top-12 z-20 mx-auto h-[500px] w-[330px] sm:top-24 sm:h-[510px] sm:w-[360px]">
        <div className="animate-badge-tilt preserve-3d relative h-full w-full">
          <div className="absolute inset-4 rounded-[28px] bg-[#35374B]/55 shadow-2xl [transform:translateZ(-40px)]" />
          <article className="badge-card-surface preserve-3d relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/30 px-5 pb-12 pt-5 text-left text-white shadow-[0_32px_80px_-18px_rgba(177,83,224,0.62)] sm:pb-14">
            <div className="animate-shine-sweep pointer-events-none absolute -inset-y-12 -left-1/2 w-1/2 rotate-12 bg-white/25 blur-xl" />

            <div className="mx-auto mb-6 h-3 w-16 rounded-full bg-[#35374B]/70 shadow-inner ring-1 ring-white/35" />

            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-white/18 p-2 shadow-lg ring-1 ring-white/30 backdrop-blur">
                  <img
                    src="./assets/icon/logo.svg"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold  tracking-[0.22em] text-[#FFE4C9]">
                    Offical badge
                  </p>
                  <p className="font-display text-sm font-semibold text-[#EBEFF5]">{company}</p>
                </div>
              </div>
              <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-semibold text-[#FFE4C9] ring-1 ring-white/25 backdrop-blur">
                Student
              </span>
            </header>

            <div className="mt-8 flex flex-1 flex-col items-center">
              <div className="relative grid h-32 w-32 place-items-center rounded-full bg-white/16 p-3 shadow-[0_16px_42px_-18px_rgba(53,55,75,0.9)] ring-1 ring-white/30 backdrop-blur">
                <div className="grid h-full w-full place-items-center rounded-full bg-white/18">
                  <img
                    src="./assets/icon/logo.svg"
                    alt=""
                    aria-hidden="true"
                    width={70}
                    height={70}
                    className="h-16 w-16"
                  />
                </div>
                <span className="absolute bottom-4 right-3 h-4 w-4 rounded-full border-2 border-[#35374B] bg-[#74E291]" />
              </div>

              <h2 className="mt-6 text-center font-display text-2xl font-bold tracking-normal text-white">
                {name}
              </h2>
              <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#FFC374]">
                {role.toUpperCase()}
              </p>

              <div className="mt-auto grid w-full grid-cols-3 gap-2 pb-1 pt-8">
                {metrics.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex min-h-[84px] flex-col rounded-2xl border px-2.5 py-3 ${metricStyles[index % metricStyles.length]}`}
                  >
                    <p className="text-[7px] font-medium uppercase tracking-[0.04em] text-white/60 sm:text-[8px]">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words font-display text-lg font-semibold leading-tight sm:text-xl">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
