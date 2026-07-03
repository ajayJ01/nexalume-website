"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || mobileOpen
          ? "glass-strong py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-4 sm:py-5"
      )}
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <nav className="section-container flex items-center justify-between">
        <a href="#" className="group flex min-w-0 items-center gap-2 sm:gap-2.5">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 sm:h-9 sm:w-9">
            <Sparkles className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-display truncate text-base font-bold tracking-tight text-white sm:text-lg">
              Nexalume
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
              Solutions
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white xl:px-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#contact">Start a Project</a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white active:scale-95 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] z-50 max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] overflow-y-auto border-t border-white/10 bg-nexa-deep/95 backdrop-blur-xl lg:hidden"
            >
              <div className="section-container flex flex-col gap-1 py-4 pb-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base text-white/80 transition-colors active:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                  <Button className="w-full" size="lg" asChild>
                    <a href="#contact" onClick={closeMenu}>
                      Start a Project
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="#contact" onClick={closeMenu}>
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
