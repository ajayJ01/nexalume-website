"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Insights
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              From Our
              <span className="gradient-text"> Blog</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article className="group gradient-border glass flex h-full flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-cyan-500/10">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-white/30">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 flex items-center gap-1 text-sm text-blue-400 transition-colors hover:text-cyan-400"
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
