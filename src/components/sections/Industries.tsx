"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Industries
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Transforming
            <span className="gradient-text"> Every Sector</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={i * 0.05}>
              <div className="group glass gradient-border flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 transition-transform duration-500 group-hover:scale-110">
                  <industry.icon className="h-7 w-7 text-blue-400" />
                </div>
                <span className="text-sm font-medium text-white/70 group-hover:text-white">
                  {industry.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
