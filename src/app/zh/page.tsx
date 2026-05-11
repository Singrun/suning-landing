import Link from "next/link";
import LocaleToggle from "@/components/LocaleToggle";
import { GrainOverlay } from "@/components/InkTexture";
import GoldenLine from "@/components/GoldenLine";

export default function ZhPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#faf7f2]">
      <GrainOverlay />
      <LocaleToggle current="zh" />

      <main className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <GoldenLine className="w-32" />
        </div>

        <h1 className="font-display text-5xl font-light tracking-tight text-[#1c1917] sm:text-6xl">
          Chinese Version
        </h1>

        <p className="mt-4 max-w-md font-body text-base leading-relaxed text-[#b8b2a8]">
          Chinese content is coming soon. Stay tuned.
        </p>
        <p className="mt-2 font-body text-sm italic text-[#d4cfc6]">
          Meanwhile, you can view the English version.
        </p>

        <Link
          href="/en"
          className="mt-10 inline-flex items-center gap-2 font-body text-sm text-[#b8974b] underline underline-offset-4 transition-colors hover:text-[#1c1917]"
        >
          View English version →
        </Link>
      </main>
    </div>
  );
}
