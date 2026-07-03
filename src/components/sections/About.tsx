"use client";

import { ScrollReveal, AnimatedCounter } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding section-anchor relative">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
              About Nexalume
            </span>
            <h2 className="section-title mt-3 sm:mt-4">
              Where Intelligence
              <br />
              <span className="gradient-text">Meets Innovation</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:mt-6 sm:text-base">
              Nexalume Solutions is not a conventional software company. We are
              an AI-first technology powerhouse engineering the next generation
              of intelligent digital products and enterprise solutions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50 sm:mt-4 sm:text-base">
              From generative AI and agentic systems to full-stack development
              and cloud infrastructure, we partner with forward-thinking
              organizations to build technology that doesn&apos;t just solve
              problems — it anticipates them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border glass rounded-xl p-4 transition-all sm:rounded-2xl sm:p-6 sm:hover:bg-white/[0.06]"
                >
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-white/40 sm:mt-2 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
