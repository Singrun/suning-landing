"use client";

import { motion } from "framer-motion";

/**
 * Animated horizontal golden accent line.
 * Draws from left to right on mount.
 */
export default function GoldenLine({
  className = "",
  delay = 0,
  duration = 1.2,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`golden-line ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "left" }}
      aria-hidden="true"
    />
  );
}

/**
 * Animated vertical accent line.
 */
export function VerticalAccent({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`vline ${className}`}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "top" }}
      aria-hidden="true"
    />
  );
}
