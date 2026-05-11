import { loadEnContent } from "@/lib/content/loadContent";
import Hero from "@/components/Hero";
import LocaleToggle from "@/components/LocaleToggle";
import VideoSection from "@/components/VideoSection";
import GalleryBlock from "@/components/GalleryBlock";
import Divider from "@/components/Divider";
import { GrainOverlay } from "@/components/InkTexture";

export const dynamic = "force-static";

export default async function Page() {
  const { text1, text2 } = await loadEnContent();

  return (
    <>
      <LocaleToggle />
      <Hero />

      {/* Project section */}
      <div className="relative bg-[#faf7f2]">
        <GrainOverlay />
        <GalleryBlock
          html={text1}
          label="Project"
          images={[
            {
              src: "/img/1.jpg",
              alt: "Guardian — sculpture rendering, panda and Arabian oryx interlocking forms",
              layout: "wide",
            },
            {
              src: "/img/2.jpg",
              alt: "Guardian — elevation study with site context",
              layout: "portrait",
            },
            {
              src: "/img/3.jpg",
              alt: "Guardian — detail mockup, material and form study",
              layout: "portrait",
            },
          ]}
        />
      </div>

      {/* Video section — dark background */}
      <VideoSection src="/media/reel.mp4" />

      {/* Archive / CV section */}
      <div className="relative bg-[#faf7f2]">
        <GrainOverlay />
        <GalleryBlock
          html={text2}
          label="Archive"
          images={[
            {
              src: "/img/4.jpg",
              alt: "SUNING — studio and practice",
              layout: "wide",
            },
          ]}
        />
      </div>

      <Divider />

      {/* Footer */}
      <footer className="relative bg-[#faf7f2] pb-20">
        <GrainOverlay />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="font-display text-lg italic text-[#b8b2a8]">
            &ldquo;Bridging cultures through form and narrative.&rdquo;
          </p>
          <p className="mt-4 font-body text-sm text-[#b8b2a8]">
            For collaborations and inquiries:{" "}
            <a
              href="mailto:hello@example.com"
              className="text-[#b8974b] underline underline-offset-4 transition-colors hover:text-[#1c1917]"
            >
              hello@example.com
            </a>
          </p>
          <p className="mt-8 font-body text-xs text-[#d4cfc6]">
            &copy; {new Date().getFullYear()} SUNING. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
