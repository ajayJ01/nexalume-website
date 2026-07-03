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
    <section id="services" className="relative py-32">
      <div
        className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            End-to-End Technology
            <br />
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="mt-4 text-base text-white/50">
            From AI-powered intelligence to enterprise-grade infrastructure —
            everything your organization needs to lead in the digital age.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-4" delay={0.1}>
            <div className="flex flex-col gap-2">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActive(category.id)}
                    className={cn(
                      "group flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-300",
                      active === category.id
                        ? "glass-strong border-blue-500/20"
                        : "hover:bg-white/[0.03]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                        active === category.id
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-white/5 text-white/40 group-hover:text-white/60"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="gradient-border glass h-full rounded-2xl p-8 lg:p-10"
              >
                <div
                  className={cn(
                    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br",
                    activeCategory.gradient
                  )}
                >
                  <activeCategory.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
                  {activeCategory.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/50">
                  {activeCategory.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {activeCategory.services.map((service) => (
                    <div
                      key={service}
                      className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:border-blue-500/20 hover:bg-white/[0.05]"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span className="text-sm text-white/70 group-hover:text-white">
                        {service}
                      </span>
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/20 opacity-0 transition-all group-hover:opacity-100" />
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
