import Hero from "@/components/Hero";
import LocaleToggle from "@/components/LocaleToggle";
import Prose from "@/components/Prose";
import VideoSection from "@/components/VideoSection";
import { loadEnContent } from "@/lib/content/loadContent";
import Divider from "@/components/Divider";

export const dynamic = "force-static";

export default async function Page() {
  const { text1, text2 } = await loadEnContent();

  return (
    <>
      <LocaleToggle current="en" />
      <main className="pt-[72px]">
        <Hero artistName="SUNING" statement="Contemporary visual artist." />

        <section className="mx-auto max-w-3xl px-6 py-14">
          <Divider />
          <div className="mt-10">
            <Prose html={text1} />
          </div>
        </section>

        <VideoSection src="/media/reel.mp4" />

        <section className="mx-auto max-w-3xl px-6 py-14">
          <Divider />
          <div className="mt-10">
            <Prose html={text2} />
          </div>
        </section>

        <footer className="mx-auto max-w-3xl px-6 py-14 text-sm text-neutral-500">
          <Divider />
          <div className="mt-10 space-y-2">
            <p>For collaborations and inquiries:</p>
            <p>
              <a className="hover:text-neutral-900" href="mailto:hello@example.com">
                hello@example.com
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

