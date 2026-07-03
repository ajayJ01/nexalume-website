"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { industries } from "@/lib/data";

export function Industries() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            Industries
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            Transforming
            <span className="gradient-text"> Every Sector</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={i * 0.05}>
              <div className="group glass gradient-border flex flex-col items-center rounded-xl p-5 text-center transition-all sm:rounded-2xl sm:p-8 sm:hover:-translate-y-1 sm:hover:bg-white/[0.06]">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-xl">
                  <industry.icon className="h-5 w-5 text-blue-400 sm:h-7 sm:w-7" />
                </div>
                <span className="text-xs font-medium text-white/70 sm:text-sm sm:group-hover:text-white">
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
