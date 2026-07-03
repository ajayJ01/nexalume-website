"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function FloatingButtons() {
  return (
    <div className="safe-floating fixed z-50 flex flex-col gap-2.5 sm:gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform active:scale-95 sm:h-14 sm:w-14 sm:hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 text-white sm:h-6 sm:w-6" />
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 transition-transform active:scale-95 sm:h-14 sm:w-14 sm:hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5 text-white sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}
