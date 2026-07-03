"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
              Insights
            </span>
            <h2 className="section-title mt-3 sm:mt-4">
              From Our
              <span className="gradient-text"> Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-white/50 active:text-white"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article className="group gradient-border glass flex h-full flex-col overflow-hidden rounded-xl transition-all sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:bg-white/[0.06]">
                <div className="relative h-36 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 sm:h-48">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-xs">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-white/30 sm:gap-3 sm:text-xs">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-white sm:mt-3 sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50 sm:text-sm">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-3 flex items-center gap-1 text-xs text-blue-400 sm:mt-4 sm:text-sm"
                  >
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
