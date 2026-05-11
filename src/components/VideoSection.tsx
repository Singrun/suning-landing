"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Cinema-style video presentation:
 * - Dark background frame
 * - Gold accent details
 * - Staggered entrance with section label
 */
export default function VideoSection({ src }: { src: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px", once: true });

  return (
    <section ref={ref} className="relative bg-[#111110] py-28 md:py-36 lg:py-44">
      {/* Texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-[160px_1fr]">
          {/* Left: label + decorative */}
          <motion.div
            className="hidden md:flex md:flex-col md:items-end md:gap-8 md:pt-4"
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
              className="text-xs uppercase tracking-[0.25em] text-[#b8b2a8]/60 [writing-mode:vertical-lr]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Film
            </motion.span>
          </motion.div>

          {/* Right: video player */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={
              inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#b8b2a8]/60 md:hidden">
              Film
            </p>
            <div className="group relative overflow-hidden border border-white/[0.08]">
              {/* Gold accent corner */}
              <div className="pointer-events-none absolute left-0 top-0 h-8 w-px bg-gradient-to-b from-[#b8974b]/60 to-transparent" aria-hidden="true" />
              <div className="pointer-events-none absolute left-0 top-0 h-px w-8 bg-gradient-to-r from-[#b8974b]/60 to-transparent" aria-hidden="true" />
              <video
                className="w-full"
                controls
                preload="metadata"
                src={src}
              />
            </div>
            <p className="mt-4 text-right font-body text-xs italic text-white/25">
              Video work
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
