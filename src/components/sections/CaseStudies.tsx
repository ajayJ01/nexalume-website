"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Case Studies
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Proven
              <span className="gradient-text"> Impact</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.1}>
              <article className="group gradient-border glass overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1">
                <div
                  className={`h-48 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute bottom-4 left-6">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="font-display text-2xl font-bold text-white/90">
                      {study.result}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                    {study.client}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {study.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
