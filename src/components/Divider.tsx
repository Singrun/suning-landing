"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="w-full">
      <motion.div
        className="h-px w-full bg-neutral-900/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

