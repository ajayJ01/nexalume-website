"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { serviceCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find((c) => c.id === active)!;

  return (
    <section id="services" className="section-padding section-anchor relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-full max-w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[100px] md:h-[500px] md:blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Our Services</span>
          <h2 className="section-title mt-3">
            What We
            <span className="gradient-text"> Build</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-6 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8 lg:space-y-0">
          <ScrollReveal className="lg:col-span-4" delay={0.1}>
            {/* Mobile: horizontal scroll tabs */}
            <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActive(category.id)}
                    className={cn(
                      "group flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 sm:gap-4 sm:px-5 sm:py-4 lg:w-full",
                      active === category.id
                        ? "glass-strong border border-blue-500/20"
                        : "border border-transparent bg-white/[0.02] hover:bg-white/[0.04] lg:hover:bg-white/[0.03]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors sm:h-10 sm:w-10",
                        active === category.id
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-white/5 text-white/40 group-hover:text-white/60"
                      )}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span
                      className={cn(
                        "whitespace-nowrap text-sm font-medium transition-colors",
                        active === category.id
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/70"
                      )}
                    >
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-8" delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="gradient-border glass h-full rounded-xl p-5 sm:rounded-2xl sm:p-8 lg:p-10"
              >
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl",
                    activeCategory.gradient
                  )}
                >
                  <activeCategory.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  {activeCategory.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50 sm:mt-3 sm:text-base">
                  {activeCategory.description}
                </p>
                <div className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                  {activeCategory.services.map((service) => (
                    <div
                      key={service}
                      className="group flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition-all active:bg-white/[0.05] sm:gap-3 sm:px-4 sm:py-3 sm:hover:border-blue-500/20 sm:hover:bg-white/[0.05]"
                    >
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span className="text-xs text-white/70 sm:text-sm sm:group-hover:text-white">
                        {service}
                      </span>
                      <ArrowUpRight className="ml-auto hidden h-3.5 w-3.5 text-white/20 opacity-0 transition-all group-hover:opacity-100 sm:block" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
