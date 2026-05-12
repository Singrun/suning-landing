import { loadZhContent } from "@/lib/content/loadContent";
import Hero from "@/components/Hero";
import LocaleToggle from "@/components/LocaleToggle";
import VideoSection from "@/components/VideoSection";
import GalleryBlock from "@/components/GalleryBlock";
import Divider from "@/components/Divider";
import { GrainOverlay } from "@/components/InkTexture";

export const dynamic = "force-static";

export default async function ZhPage() {
  const { text1, text2, text3 } = await loadZhContent();

  return (
    <>
      <LocaleToggle />
      <Hero
        label="艺术家 / 雕塑家"
        statement="当代视觉艺术家，以雕塑、建筑与叙事形态连接东方与阿拉伯文化。"
        scrollHint="向下滚动"
      />

      {/* 项目 */}
      <div className="relative bg-[#faf7f2]">
        <GrainOverlay />
        <GalleryBlock
          html={text1}
          label="项目"
          images={[
            {
              src: "/img/1.jpg",
              alt: "《守护者》——雕塑渲染图，熊猫与阿拉伯大羚羊交织形态",
              layout: "wide",
            },
            {
              src: "/img/2.jpg",
              alt: "《守护者》——立面研究及场地背景",
              layout: "portrait",
            },
            {
              src: "/img/3.jpg",
              alt: "《守护者》——细节模型，材质与形态研究",
              layout: "portrait",
            },
          ]}
        />
      </div>

      {/* 视频 —— 深色背景 */}
      <VideoSection src="/media/reel.mp4" />

      {/* 年鉴 */}
      <div className="relative bg-[#faf7f2]">
        <GrainOverlay />
        <GalleryBlock
          html={text2}
          label="年鉴"
          images={[
            {
              src: "/img/4.jpg",
              alt: "SUNING —— 工作室与创作实践",
              layout: "wide",
            },
          ]}
        />
      </div>

      {/* 简介 */}
      <div className="relative bg-[#f3efe9]">
        <GrainOverlay />
        <GalleryBlock html={text3} label="简介" />
      </div>

      {/* 新闻报道 */}
      <div className="relative bg-[#faf7f2]">
        <GrainOverlay />
        <GalleryBlock
          label="报道"
          images={[
            {
              src: "/img/report.jpg",
              alt: "SUNING —— 媒体报道",
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
            &ldquo;以形态与叙事连接文化。&rdquo;
          </p>
          <p className="mt-4 font-body text-sm text-[#b8b2a8]">
            合作与咨询：{" "}
            <a
              href="mailto:sudaninmyeyes@126.com"
              className="text-[#b8974b] underline underline-offset-4 transition-colors hover:text-[#1c1917]"
            >
              sudaninmyeyes@126.com
            </a>
          </p>
          <p className="mt-8 font-body text-xs text-[#d4cfc6]">
            &copy; {new Date().getFullYear()} SUNING. 保留所有权利。
          </p>
        </div>
      </footer>
    </>
  );
}
