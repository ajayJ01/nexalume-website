"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
              Case Studies
            </span>
            <h2 className="section-title mt-3 sm:mt-4">
              Proven
              <span className="gradient-text"> Impact</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="flex items-center gap-2 text-sm text-white/50 transition-colors active:text-white"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.1}>
              <article className="group gradient-border glass overflow-hidden rounded-xl transition-all sm:rounded-2xl sm:hover:-translate-y-1">
                <div
                  className={`relative h-36 bg-gradient-to-br sm:h-48 ${study.gradient}`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6">
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-4 sm:top-4 sm:right-4">
                    <span className="font-display text-lg font-bold text-white/90 sm:text-2xl">
                      {study.result}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/30 sm:text-xs">
                    {study.client}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-white sm:mt-2 sm:text-xl">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50 sm:mt-3 sm:text-sm">
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
