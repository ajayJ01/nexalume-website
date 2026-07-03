"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding section-anchor relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-full max-w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[100px] sm:h-[500px] sm:blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.3em]">
            Contact
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            Let&apos;s Build
            <span className="gradient-text"> Something Great</span>
          </h2>
          <p className="mt-3 px-2 text-sm text-white/50 sm:mt-4 sm:px-0 sm:text-base">
            Ready to transform your business with AI? Tell us about your project
            and we&apos;ll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-3 sm:space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: siteConfig.address,
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group gradient-border glass flex items-center gap-3 rounded-xl p-4 transition-all active:bg-white/[0.04] sm:gap-4 sm:p-5 sm:hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <item.icon className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-white/30 sm:text-xs">{item.label}</div>
                    <div className="truncate text-sm font-medium text-white sm:text-base">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={0.2}>
            <div className="gradient-border glass rounded-xl p-5 sm:rounded-2xl sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center sm:py-12">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 sm:h-16 sm:w-16">
                    <Send className="h-6 w-6 text-emerald-400 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/40 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05] sm:text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/40 sm:mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        inputMode="email"
                        autoComplete="email"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05] sm:text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-white/40 sm:mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05] sm:text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-white/40 sm:mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05] sm:text-sm"
                    >
                      <option value="" className="bg-nexa-deep">Select a service</option>
                      <option value="ai" className="bg-nexa-deep">AI Solutions</option>
                      <option value="software" className="bg-nexa-deep">Software Development</option>
                      <option value="automation" className="bg-nexa-deep">Automation</option>
                      <option value="cloud" className="bg-nexa-deep">Cloud & DevOps</option>
                      <option value="other" className="bg-nexa-deep">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/40 sm:mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05] sm:text-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
