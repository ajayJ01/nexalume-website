"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 right-0 z-[200] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.7)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
