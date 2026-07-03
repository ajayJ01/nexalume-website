"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { ScrollLink } from "@/components/ui/scroll-link";
import { Button } from "@/components/ui/button";
import { AIBackground } from "@/components/animations/AIBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden pt-[calc(4rem+3px)]">
      <AIBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-nexa-dark via-[#070d1f] to-nexa-dark" />
      <div
        className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(6,182,212,0.15) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative z-10 section-container w-full py-8 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-7"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              AI-First Company
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <MapPin className="h-3 w-3" />
              Jaipur, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Intelligent Tech
            <br />
            <span className="gradient-text">Built for Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/55 sm:mt-5 sm:text-lg"
          >
            {siteConfig.tagline} We craft AI products, apps, and automation for
            modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <ScrollLink href="#start-project">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </ScrollLink>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
              <ScrollLink href="#portfolio">View Our Work</ScrollLink>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 inline-flex items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 sm:mt-10"
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i > 0 && <div className="h-8 w-px bg-white/10" />}
                <div className="text-center">
                  <div className="font-display text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
