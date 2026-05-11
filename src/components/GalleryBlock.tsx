"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Prose from "./Prose";

/**
 * Gallery-style content panel for rich text sections.
 * Features:
 * - Asymmetric layout with decorative vertical line
 * - Staggered entrance animation
 * - Section label in tracked uppercase
 */
export default function GalleryBlock({
  html,
  label,
}: {
  html: string;
  label: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px", once: true });

  return (
    <section ref={ref} className="relative py-28 md:py-36 lg:py-44">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr]">
        {/* Left column: decorative vertical line + label */}
        <motion.div
          className="hidden md:flex md:flex-col md:items-end md:gap-8 md:pt-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="vline h-16"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            aria-hidden="true"
          />
          <motion.span
            className="text-xs uppercase tracking-[0.25em] text-[#b8b2a8] [writing-mode:vertical-lr]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {label}
          </motion.span>
        </motion.div>

        {/* Right column: content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          animate={
            inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
          }
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile label */}
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#b8b2a8] md:hidden">
            {label}
          </p>
          <Prose html={html} />
        </motion.div>
      </div>
    </section>
  );
}
