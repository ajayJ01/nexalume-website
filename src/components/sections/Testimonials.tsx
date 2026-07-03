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

  const item = testimonials[current];

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
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-base leading-relaxed text-white/80 sm:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white">
                    {item.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-white">{item.author}</div>
                    <div className="text-xs text-white/45 sm:text-sm">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-center gap-2 sm:justify-start">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-blue-500" : "w-2 bg-white/20"
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 active:bg-white/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 active:bg-white/10"
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
