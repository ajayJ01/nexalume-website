"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <section id="products" className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Products
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            The Nexalume
            <span className="gradient-text"> Ecosystem</span>
          </h2>
          <p className="mt-4 text-base text-white/50">
            Proprietary AI platforms built by our team, ready to deploy in your
            organization.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <div className="group gradient-border glass relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-150" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                      <product.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        product.status === "Live"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : product.status === "Beta"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-white/5 text-white/40"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-400">{product.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {product.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <Button variant="glass" asChild>
            <a href="#contact">
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
