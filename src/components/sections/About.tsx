"use client";

import { ScrollReveal, AnimatedCounter } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding section-anchor relative">
      <div className="section-glow" aria-hidden="true" />
      <div className="section-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal className="lg:col-span-3">
            <span className="section-label">About Nexalume</span>
            <h2 className="section-title mt-3">
              AI-First Team from
              <span className="gradient-text"> Jaipur</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Nexalume Solutions builds smart software for startups and growing
              businesses — AI chatbots, web apps, mobile apps, and cloud
              solutions. Based in Jaipur, we deliver modern technology with
              clear communication and fast execution.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border glass rounded-xl p-5 text-center sm:p-6"
                >
                  <div className="font-display text-3xl font-bold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-white/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
