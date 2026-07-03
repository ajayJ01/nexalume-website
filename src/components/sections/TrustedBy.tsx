import { trustedCompanies } from "@/lib/data";

export function TrustedBy() {
  const doubled = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-nexa-deep/50 py-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-nexa-deep to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-nexa-deep to-transparent" />
        <div className="flex animate-marquee gap-16">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex shrink-0 items-center gap-2 text-lg font-medium text-white/20 transition-colors hover:text-white/40"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500/30" />
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
