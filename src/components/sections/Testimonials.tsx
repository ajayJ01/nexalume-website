"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
            Testimonials
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative mx-auto mt-10 max-w-4xl sm:mt-16">
          <div className="gradient-border glass rounded-2xl p-5 sm:rounded-3xl sm:p-8 lg:p-14">
            <Quote className="mb-4 h-6 w-6 text-blue-500/30 sm:mb-6 sm:h-8 sm:w-8" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-base leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium text-white sm:text-base">
                      {testimonials[current].author}
                    </div>
                    <div className="text-xs text-white/40 sm:text-sm">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-center gap-2 sm:justify-start">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-blue-500"
                        : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-2 sm:justify-end">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 active:bg-white/10 sm:h-10 sm:w-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 active:bg-white/10 sm:h-10 sm:w-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
