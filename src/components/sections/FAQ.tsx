"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="relative border-y border-white/5 bg-nexa-deep/50 py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Common
            <span className="gradient-text"> Questions</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
