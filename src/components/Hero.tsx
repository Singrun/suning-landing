"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import InkTexture from "./InkTexture";

/**
 * Full-bleed nocturnal hero with:
 * - Dark ink-wash background with noise texture
 * - Animated golden accent line
 * - Staggered text reveals
 * - Subtle scroll parallax on the texture layer
 */
export default function Hero({
  name = "SUNING",
  label = "Artist & Sculptor",
  statement = "Contemporary visual artist bridging Eastern and Arab cultures through sculpture, architecture, and narrative form.",
  scrollHint = "Scroll",
}: {
  name?: string;
  label?: string;
  statement?: string;
  scrollHint?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[105svh] w-full flex-col justify-end overflow-hidden bg-[#111110]"
    >
      {/* Noise texture with parallax */}
      <InkTexture className="opacity-[0.06]" />

      {/* Subtle radial glow behind text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 30% 80%, rgba(184,151,75,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative geometric element: faint concentric arcs */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.03]"
        viewBox="0 0 400 800"
        aria-hidden="true"
      >
        <circle
          cx="400"
          cy="400"
          r="380"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
        />
        <circle
          cx="400"
          cy="400"
          r="350"
          fill="none"
          stroke="white"
          strokeWidth="0.3"
        />
        <circle
          cx="400"
          cy="400"
          r="300"
          fill="none"
          stroke="white"
          strokeWidth="0.2"
        />
      </svg>

      {/* Text content — anchored bottom-left */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24 lg:pb-32">
        {/* Golden line draws first */}
        <div className="mb-8 max-w-[200px]">
          <motion.div
            className="golden-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          />
        </div>

        {/* Label */}
        <motion.p
          className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-[#b8974b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {label}
        </motion.p>

        {/* Name — the loudest text */}
        <motion.h1
          className="font-display text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {name}
        </motion.h1>

        {/* Statement */}
        <motion.p
          className="mt-6 max-w-lg font-body text-base font-light leading-relaxed text-white/60 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {statement}
        </motion.p>

        {/* Scroll hint — subtle, elegant */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span
            className="h-10 w-px animate-shimmer bg-[#b8974b]/40"
            aria-hidden="true"
          />
          <span className="font-body text-xs uppercase tracking-[0.25em] text-white/25">
            {scrollHint}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
