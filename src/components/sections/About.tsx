"use client";

import { ScrollReveal, AnimatedCounter } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Nexalume
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Where Intelligence
              <br />
              <span className="gradient-text">Meets Innovation</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/50">
              Nexalume Solutions is not a conventional software company. We are
              an AI-first technology powerhouse engineering the next generation
              of intelligent digital products and enterprise solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              From generative AI and agentic systems to full-stack development
              and cloud infrastructure, we partner with forward-thinking
              organizations to build technology that doesn&apos;t just solve
              problems — it anticipates them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border glass group rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.06]"
                >
                  <div className="font-display text-3xl font-bold text-white lg:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="mt-2 text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
