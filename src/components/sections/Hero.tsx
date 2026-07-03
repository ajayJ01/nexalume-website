"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AIBackground } from "@/components/animations/AIBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AIBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-nexa-dark via-nexa-dark/80 to-nexa-dark" />
      <div
        className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            AI-First Technology Company
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
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
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
          >
            {siteConfig.tagline} Nexalume architects next-generation AI
            systems, enterprise software, and digital products that define the
            future of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
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
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { value: "150+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "98%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-5xl"
          data-parallax
        >
          <div className="gradient-border rounded-2xl">
            <div className="glass overflow-hidden rounded-2xl p-1">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-nexa-deep">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-32 w-32 animate-pulse-glow rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/30 blur-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass-strong flex h-20 w-20 items-center justify-center rounded-2xl">
                        <Sparkles className="h-8 w-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nexa-dark to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-white/30">
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
