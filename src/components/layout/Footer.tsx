import { Sparkles, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-nexa-deep">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="mb-6 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white">
                  Nexalume Solutions
                </span>
              </div>
            </a>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
              {siteConfig.tagline} We architect intelligent systems that
              transform industries and empower enterprises across India and
              beyond.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-blue-400" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/50 transition-colors hover:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Nexalume Solutions. All rights
            reserved.
          </p>
          <a
            href={siteConfig.domain}
            className="flex items-center gap-1 text-xs text-white/30 transition-colors hover:text-white"
          >
            nexalume.in
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
