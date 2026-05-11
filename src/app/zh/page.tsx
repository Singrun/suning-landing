import LocaleToggle from "@/components/LocaleToggle";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <LocaleToggle current="zh" />
      <main className="pt-[72px]">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">中文版本即将上线</h1>
          <p className="mt-4 text-neutral-600">Chinese version coming soon.</p>
        </section>
      </main>
    </>
  );
}

