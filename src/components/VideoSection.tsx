import Divider from "./Divider";
import SectionReveal from "./SectionReveal";

export default function VideoSection({ src }: { src: string }) {
  return (
    <section id="video" className="mx-auto max-w-5xl px-6 py-14">
      <Divider />
      <SectionReveal>
        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-neutral-600">Video</p>
      </SectionReveal>
      <SectionReveal delay={0.08}>
        <div className="mt-6 overflow-hidden border border-neutral-900/10 bg-white">
          <video className="w-full" controls preload="metadata" src={src} />
        </div>
      </SectionReveal>
    </section>
  );
}

