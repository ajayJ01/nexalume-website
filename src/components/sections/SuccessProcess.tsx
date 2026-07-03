"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { processSteps } from "@/lib/data";

export function SuccessProcess() {
  return (
    <section id="process" className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
            Our Process
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            From Vision to
            <span className="gradient-text"> Production</span>
          </h2>
          <p className="mt-3 px-2 text-sm text-white/50 sm:mt-4 sm:px-0 sm:text-base">
            A proven six-phase methodology that delivers exceptional results,
            on time, every time.
          </p>
        </ScrollReveal>

        <div className="relative mt-10 sm:mt-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div className="group relative text-center">
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center sm:mb-6 sm:h-16 sm:w-16">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 sm:rounded-2xl" />
                    <step.icon className="relative h-6 w-6 text-blue-400 sm:h-7 sm:w-7" />
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white sm:-top-2 sm:-right-2 sm:h-6 sm:w-6 sm:text-[10px]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/40 sm:mt-2 sm:text-xs">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
