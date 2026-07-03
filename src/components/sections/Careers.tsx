"use client";

import { MapPin, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { careers } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Careers() {
  return (
    <section id="careers" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[250px] w-[250px] rounded-full opacity-20 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
              Careers
            </span>
            <h2 className="section-title mt-3 sm:mt-4">
              Build the Future
              <br />
              <span className="gradient-text">With Us</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:mt-6 sm:text-base">
              Join a team of world-class engineers, designers, and AI
              researchers building technology that matters. We offer
              competitive compensation, flexible work, and the opportunity to
              work on cutting-edge projects.
            </p>
            <Button className="mt-6 w-full sm:mt-8 sm:w-auto" asChild>
              <a href="#contact">
                Send Your Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </ScrollReveal>

          <div className="space-y-3">
            {careers.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.08}>
                <a
                  href="#contact"
                  className="group gradient-border glass flex items-start justify-between gap-3 rounded-xl p-4 transition-all active:bg-white/[0.04] sm:items-center sm:p-5 sm:hover:-translate-y-0.5 sm:hover:bg-white/[0.06]"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-white sm:text-base sm:group-hover:text-blue-400">
                      {job.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/40 sm:gap-x-3 sm:text-xs">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 sm:mt-0 sm:group-hover:text-blue-400" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
