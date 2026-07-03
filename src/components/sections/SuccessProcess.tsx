"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { processSteps } from "@/lib/data";

export function SuccessProcess() {
  return (
    <section id="process" className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Process
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            From Vision to
            <span className="gradient-text"> Production</span>
          </h2>
          <p className="mt-4 text-base text-white/50">
            A proven six-phase methodology that delivers exceptional results,
            on time, every time.
          </p>
        </ScrollReveal>

        <div className="relative mt-20">
          <div
            className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="group relative text-center">
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 transition-transform duration-500 group-hover:scale-110" />
                    <step.icon className="relative h-7 w-7 text-blue-400" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/40">
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
