"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { portfolioItems } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding section-anchor relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            Work That
            <span className="gradient-text"> Speaks</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <article className="group gradient-border glass flex h-full flex-col rounded-xl p-5 transition-all sm:rounded-2xl sm:p-8 sm:hover:-translate-y-2 sm:hover:bg-white/[0.06]">
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-cyan-400 sm:text-xs">
                    {item.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/20 sm:group-hover:text-blue-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50 sm:mt-3 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-white/40 sm:px-3 sm:py-1 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
