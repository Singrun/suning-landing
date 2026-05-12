"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleToggle() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const toggleHref = isZh ? "/en" : "/zh";

  return (
    <nav className="fixed top-8 left-8 z-50 flex items-center gap-6">
      <Link
        href="/"
        className="font-display text-sm tracking-[0.3em] uppercase text-[#111110] mix-blend-difference"
        style={{ color: "#b8974b" }}
      >
        SUNING
      </Link>
      <Link
        href={toggleHref}
        className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-white/80 transition-colors duration-500"
      >
        {isZh ? "EN" : "中文"}
      </Link>
    </nav>
  );
}
