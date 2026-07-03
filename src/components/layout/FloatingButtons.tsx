"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute right-full mr-3 hidden rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-lg group-hover:block">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
        <span className="absolute right-full mr-3 hidden rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-lg group-hover:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
