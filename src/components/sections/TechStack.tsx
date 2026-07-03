"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { techStack, aiStack } from "@/lib/data";

function TechPill({ name, highlight = false }: { name: string; highlight?: boolean }) {
  return (
    <div
      className={`group flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
        highlight
          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/20"
          : "border-white/10 bg-white/[0.03] text-white/60 hover:border-blue-500/30 hover:bg-white/[0.06] hover:text-white"
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
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Technology Stack
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Built With the
            <span className="gradient-text"> Best Tools</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Core Technologies
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-nexa-dark to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-nexa-dark to-transparent" />
            <div className="flex animate-marquee gap-4">
              {doubledTech.map((tech, i) => (
                <TechPill key={`${tech}-${i}`} name={tech} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-10">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            AI Stack
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-nexa-dark to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-nexa-dark to-transparent" />
            <div className="flex animate-marquee-reverse gap-4">
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
