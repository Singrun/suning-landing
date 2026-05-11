"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Full-bleed noise/grain texture overlay with subtle parallax depth.
 * Place as a sibling inside a positioned container.
 */
export default function InkTexture({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`pointer-events-none absolute inset-0 texture-noise ${className}`}
      aria-hidden="true"
    />
  );
}

/**
 * Subtle grain overlay for lighter sections.
 */
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}
