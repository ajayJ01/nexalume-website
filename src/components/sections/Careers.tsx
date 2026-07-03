"use client";

import { MapPin, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { careers } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Careers() {
  return (
    <section id="careers" className="relative py-32">
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Careers
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Build the Future
              <br />
              <span className="gradient-text">With Us</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/50">
              Join a team of world-class engineers, designers, and AI
              researchers building technology that matters. We offer
              competitive compensation, flexible work, and the opportunity to
              work on cutting-edge projects.
            </p>
            <Button className="mt-8" asChild>
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
                  className="group gradient-border glass flex items-center justify-between rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <div>
                    <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-white/40">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/20 transition-all group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
