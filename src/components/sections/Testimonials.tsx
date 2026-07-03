"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const item = testimonials[0];

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-3">
            Client
            <span className="gradient-text"> Feedback</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-2xl sm:mt-10">
          <div className="gradient-border glass rounded-2xl p-6 sm:p-8">
            <Quote className="mb-4 h-7 w-7 text-blue-500/30" />
            <blockquote className="text-base leading-relaxed text-white/80 sm:text-lg">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white">
                {item.avatar}
              </div>
              <div>
                <div className="font-medium text-white">{item.author}</div>
                <div className="text-xs text-white/45 sm:text-sm">{item.role}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
