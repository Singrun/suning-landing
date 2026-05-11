import Image from "next/image";
import SectionReveal from "./SectionReveal";

export default function Hero({
  artistName,
  statement,
}: {
  artistName: string;
  statement: string;
}) {
  return (
    <section className="relative min-h-[78svh] w-full overflow-hidden">
      <Image src="/hero.svg" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--background)]/70" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-14">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">Artist</p>
        </SectionReveal>
        <SectionReveal delay={0.06}>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl font-semibold tracking-tight text-neutral-950">
            {artistName}
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-neutral-700">
            {statement}
          </p>
        </SectionReveal>
        <SectionReveal delay={0.18}>
          <a
            href="#video"
            className="group mt-10 inline-flex items-center gap-3 border border-neutral-900/20 bg-white/70 px-5 py-3 text-sm text-neutral-950 backdrop-blur transition hover:bg-white"
          >
            Watch Video
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
