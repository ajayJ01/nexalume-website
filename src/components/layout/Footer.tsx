import { Sparkles, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-nexa-deep safe-bottom">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="section-container relative py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="mb-5 flex items-center gap-2.5 sm:mb-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-bold text-white sm:text-lg">
                Nexalume Solutions
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/50 sm:mb-8">
              {siteConfig.tagline} We architect intelligent systems that
              transform industries and empower enterprises across India and
              beyond.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/50 transition-colors active:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/50 transition-colors active:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:col-span-7">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30 sm:mb-4">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <span className="text-xs text-white/50 sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-white/50 transition-colors active:text-white sm:text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30 sm:mb-4">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerLinks.legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-white/50 transition-colors active:text-white sm:text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:mt-16 sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
          <p className="text-[11px] text-white/30 sm:text-xs">
            &copy; {new Date().getFullYear()} Nexalume Solutions. All rights reserved.
          </p>
          <a
            href={siteConfig.domain}
            className="flex items-center gap-1 text-[11px] text-white/30 transition-colors active:text-white sm:text-xs"
          >
            nexalume.in
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
