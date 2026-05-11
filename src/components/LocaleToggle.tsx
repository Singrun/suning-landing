import Link from "next/link";

export default function LocaleToggle({ current }: { current: "en" | "zh" }) {
  const isEn = current === "en";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5">
        <Link
          href={isEn ? "/en" : "/zh"}
          className="font-display text-lg font-medium tracking-[0.08em] text-[#faf7f2]/90 transition-colors hover:text-[#faf7f2]"
        >
          SUNING
        </Link>

        <nav className="flex items-center gap-3 font-body text-sm text-[#faf7f2]/60">
          <Link
            className={
              isEn
                ? "text-[#d4bc7a]"
                : "transition-colors hover:text-[#faf7f2]/80"
            }
            href="/en"
          >
            EN
          </Link>
          <span className="text-[#faf7f2]/20">/</span>
          <Link
            className={
              !isEn
                ? "text-[#d4bc7a]"
                : "transition-colors hover:text-[#faf7f2]/80"
            }
            href="/zh"
          >
            Chinese
          </Link>
        </nav>
      </div>
    </header>
  );
}
