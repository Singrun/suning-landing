export default function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-900"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
