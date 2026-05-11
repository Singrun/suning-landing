import Link from "next/link";

export default function LocaleToggle() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5">
        <Link
          href="/en"
          className="font-display text-lg font-medium tracking-[0.08em] text-[#faf7f2]/90 transition-colors hover:text-[#faf7f2]"
        >
          SUNING
        </Link>
      </div>
    </header>
  );
}
