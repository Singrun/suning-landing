"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Prose from "./Prose";

interface GalleryImage {
  src: string;
  alt: string;
  /** "wide" fills the content column; "portrait" renders in a duo grid */
  layout: "wide" | "portrait";
}

/**
 * Gallery-style content panel with optional artistic image inserts.
 * Features:
 * - Asymmetric grid with decorative vertical line
 * - Staggered entrance animation
 * - Full-width hero image slot with gold border & corner accents
 * - Portrait duo with asymmetric offset
 */
export default function GalleryBlock({
  html,
  label,
  images,
}: {
  html: string;
  label: string;
  images?: GalleryImage[];
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px", once: true });

  const wideImg = images?.find((i) => i.layout === "wide");
  const portraits = images?.filter((i) => i.layout === "portrait") ?? [];

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

          {/* ── Wide hero image ── */}
          {wideImg && (
            <motion.div
              className="mb-16 overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 24 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative border border-[#d4cfc6]/40">
                {/* Gold corner accents */}
                <span className="absolute -left-px -top-px block h-5 w-px bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -left-px -top-px block h-px w-5 bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -right-px -top-px block h-5 w-px bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -right-px -top-px block h-px w-5 bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -bottom-px -left-px block h-5 w-px bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -bottom-px -left-px block h-px w-5 bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -bottom-px -right-px block h-5 w-px bg-[#b8974b]/60" aria-hidden="true" />
                <span className="absolute -bottom-px -right-px block h-px w-5 bg-[#b8974b]/60" aria-hidden="true" />
                <img
                  src={wideImg.src}
                  alt={wideImg.alt}
                  className="block w-full object-cover"
                  style={{ maxHeight: "560px" }}
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center font-body text-xs italic text-[#b8b2a8]">
                {wideImg.alt}
              </p>
            </motion.div>
          )}

          <Prose html={html} />

          {/* ── Portrait duo ── */}
          {portraits.length > 0 && (
            <motion.div
              className="mt-20 grid gap-10 md:grid-cols-2 md:gap-16"
              initial={{ opacity: 0, y: 32 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
              }
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {portraits.map((img, idx) => (
                <motion.div
                  key={img.src}
                  className="overflow-hidden rounded-sm"
                  initial={{ opacity: 0, y: 32 }}
                  animate={
                    inView
                      ? { opacity: 1, y: idx === 0 ? 0 : 20 }
                      : { opacity: 0, y: 32 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 0.55 + idx * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="relative border border-[#d4cfc6]/40">
                    <span className="absolute -left-px -top-px block h-3 w-px bg-[#b8974b]/50" aria-hidden="true" />
                    <span className="absolute -left-px -top-px block h-px w-3 bg-[#b8974b]/50" aria-hidden="true" />
                    <span className="absolute -right-px -bottom-px block h-3 w-px bg-[#b8974b]/50" aria-hidden="true" />
                    <span className="absolute -right-px -bottom-px block h-px w-3 bg-[#b8974b]/50" aria-hidden="true" />
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block w-full object-cover"
                      style={{ maxHeight: "600px" }}
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center font-body text-xs italic text-[#b8b2a8]">
                    {img.alt}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
