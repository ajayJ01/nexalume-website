"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.matchMedia("(max-width: 1023px)").matches;
    if (isTouch || isNarrow) return;

    const handleMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = "1";
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-30 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-500 lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
