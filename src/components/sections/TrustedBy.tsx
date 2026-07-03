import { trustedCompanies } from "@/lib/data";

export function TrustedBy() {
  const doubled = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-nexa-deep/50 py-10 sm:py-14 md:py-16">
      <div className="mb-6 text-center sm:mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
          Trusted by Growing Businesses
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-nexa-deep to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-nexa-deep to-transparent sm:w-32" />
        <div className="flex animate-marquee gap-8 sm:gap-16">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-white/20 sm:text-lg"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500/30" />
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
