"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <section id="products" className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            Our Products
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            The Nexalume
            <span className="gradient-text"> Ecosystem</span>
          </h2>
          <p className="mt-3 px-2 text-sm text-white/50 sm:mt-4 sm:px-0 sm:text-base">
            Proprietary AI platforms built by our team, ready to deploy in your
            organization.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <div className="group gradient-border glass relative overflow-hidden rounded-xl p-5 transition-all sm:rounded-2xl sm:p-8 sm:hover:-translate-y-1 sm:hover:bg-white/[0.06]">
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <product.icon className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs ${
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
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-cyan-400 sm:text-sm">{product.tagline}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/50 sm:mt-4 sm:text-sm">
                  {product.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-8 text-center sm:mt-12">
          <Button variant="glass" className="w-full sm:w-auto" asChild>
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
