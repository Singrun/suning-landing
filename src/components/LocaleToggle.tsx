import Link from "next/link";

export default function LocaleToggle({ current }: { current: "en" | "zh" }) {
  const isEn = current === "en";
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href={isEn ? "/en" : "/zh"}
          className="text-sm tracking-[0.18em] uppercase text-neutral-800 hover:text-neutral-950"
        >
          SUNING
        </Link>
        <nav className="text-sm text-neutral-700">
          <Link className={isEn ? "font-medium" : "opacity-70 hover:opacity-100"} href="/en">
            EN
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link className={!isEn ? "font-medium" : "opacity-70 hover:opacity-100"} href="/zh">
            中文
          </Link>
        </nav>
      </div>
      <div className="h-px w-full bg-neutral-900/10" />
    </header>
  );
}

