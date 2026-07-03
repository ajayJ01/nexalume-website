"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

export function HashScrollHandler() {
  useEffect(() => {
    const scrollFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      requestAnimationFrame(() => {
        setTimeout(() => scrollToSection(hash, "auto"), 100);
      });
    };

    scrollFromHash();

    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, []);

  return null;
}
