"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="flex justify-center py-12">
      <motion.div
        className="golden-line w-32"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
        aria-hidden="true"
      />
    </div>
  );
}
