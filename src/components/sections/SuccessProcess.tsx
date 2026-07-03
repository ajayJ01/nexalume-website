"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { processSteps } from "@/lib/data";

export function SuccessProcess() {
  return (
    <section className="section-padding relative border-y border-white/5 bg-nexa-deep/40">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">How We Work</span>
          <h2 className="section-title mt-3">
            Simple
            <span className="gradient-text"> 3-Step Process</span>
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className="gradient-border glass h-full rounded-xl p-5 text-center sm:rounded-2xl sm:p-6">
                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20" />
                  <step.icon className="relative h-5 w-5 text-cyan-400" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/45 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
