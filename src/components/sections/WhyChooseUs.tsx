"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            Why Choose Us
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            The Nexalume
            <span className="gradient-text"> Advantage</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group gradient-border glass h-full rounded-xl p-5 transition-all sm:rounded-2xl sm:p-8 sm:hover:-translate-y-1 sm:hover:bg-white/[0.06]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 sm:mb-5 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50 sm:mt-3">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
