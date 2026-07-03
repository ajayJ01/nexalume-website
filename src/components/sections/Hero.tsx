"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AIBackground } from "@/components/animations/AIBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <AIBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-nexa-dark via-nexa-dark/80 to-nexa-dark" />
      <div
        className="absolute top-1/4 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-30 blur-[80px] sm:h-[450px] sm:w-[450px] sm:blur-[100px] lg:h-[600px] lg:w-[600px] lg:blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      <div className="relative z-10 section-container w-full pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex max-w-[95vw] items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm sm:mb-8 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Sparkles className="h-3 w-3 shrink-0 text-cyan-400 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">AI-First Technology Company</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Intelligent
            <br />
            <span className="gradient-text">Technology</span>
            <br />
            for Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-white/50 sm:mt-6 sm:px-0 sm:text-lg md:text-xl"
          >
            {siteConfig.tagline} Nexalume architects next-generation AI
            systems, enterprise software, and digital products that define the
            future of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex w-full flex-col gap-3 px-2 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 sm:px-0"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#portfolio">
                <Play className="h-4 w-4" />
                View Our Work
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-4"
          >
            {[
              { value: "150+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "98%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[10px] text-white/40 uppercase tracking-wider sm:mt-1 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-12 w-full max-w-5xl sm:mt-16 md:mt-20"
          data-parallax
        >
          <div className="gradient-border rounded-xl sm:rounded-2xl">
            <div className="glass overflow-hidden rounded-xl p-0.5 sm:rounded-2xl sm:p-1">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-nexa-deep sm:aspect-[16/9] sm:rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-20 w-20 animate-pulse-glow rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/30 blur-2xl sm:h-32 sm:w-32" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass-strong flex h-14 w-14 items-center justify-center rounded-xl sm:h-20 sm:w-20 sm:rounded-2xl">
                        <Sparkles className="h-6 w-6 text-cyan-400 sm:h-8 sm:w-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nexa-dark to-transparent p-3 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex shrink-0 gap-1 sm:gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-500/80 sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-green-500/80 sm:h-3 sm:w-3" />
                    </div>
                    <span className="truncate text-[10px] text-white/30 sm:text-xs">
                      nexalume-ai-platform.dashboard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
