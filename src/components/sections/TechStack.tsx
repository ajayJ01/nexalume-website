"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { techStack, aiStack } from "@/lib/data";

function TechPill({ name, highlight = false }: { name: string; highlight?: boolean }) {
  return (
    <div
      className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
        highlight
          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
          : "border-white/10 bg-white/[0.03] text-white/60"
      }`}
    >
      <div
        className={`h-1.5 w-1.5 rounded-full ${
          highlight ? "bg-cyan-400" : "bg-blue-400"
        }`}
      />
      {name}
    </div>
  );
}

export function TechStack() {
  const doubledTech = [...techStack, ...techStack];
  const doubledAI = [...aiStack, ...aiStack];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
            Technology Stack
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            Built With the
            <span className="gradient-text"> Best Tools</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 sm:mt-16">
          <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
            Core Technologies
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-nexa-dark to-transparent sm:w-24" />
            <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-nexa-dark to-transparent sm:w-24" />
            <div className="flex animate-marquee gap-3 sm:gap-4">
              {doubledTech.map((tech, i) => (
                <TechPill key={`${tech}-${i}`} name={tech} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-8 sm:mt-10">
          <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
            AI Stack
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-nexa-dark to-transparent sm:w-24" />
            <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-nexa-dark to-transparent sm:w-24" />
            <div className="flex animate-marquee-reverse gap-3 sm:gap-4">
              {doubledAI.map((tech, i) => (
                <TechPill key={`${tech}-${i}`} name={tech} highlight />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
