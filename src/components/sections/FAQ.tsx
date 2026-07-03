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
    <section className="section-padding relative border-y border-white/5 bg-nexa-deep/50">
      <div className="section-container max-w-3xl">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            FAQ
          </span>
          <h2 className="section-title mt-3 sm:mt-4">
            Common
            <span className="gradient-text"> Questions</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-8 sm:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
