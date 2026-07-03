"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            The Nexalume
            <span className="gradient-text"> Advantage</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group gradient-border glass h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
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
