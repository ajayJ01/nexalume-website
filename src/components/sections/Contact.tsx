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
    <section id="contact" className="relative py-32">
      <div
        className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s Build
            <span className="gradient-text"> Something Great</span>
          </h2>
          <p className="mt-4 text-base text-white/50">
            Ready to transform your business with AI? Tell us about your project
            and we&apos;ll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-6">
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
                  className="group gradient-border glass flex items-center gap-4 rounded-xl p-5 transition-all hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30">{item.label}</div>
                    <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={0.2}>
            <div className="gradient-border glass rounded-2xl p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <Send className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-white/40"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-white/40"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-medium text-white/40"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05]"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-medium text-white/40"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05]"
                    >
                      <option value="" className="bg-nexa-deep">
                        Select a service
                      </option>
                      <option value="ai" className="bg-nexa-deep">
                        AI Solutions
                      </option>
                      <option value="software" className="bg-nexa-deep">
                        Software Development
                      </option>
                      <option value="automation" className="bg-nexa-deep">
                        Automation
                      </option>
                      <option value="cloud" className="bg-nexa-deep">
                        Cloud & DevOps
                      </option>
                      <option value="other" className="bg-nexa-deep">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-white/40"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.05]"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
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
