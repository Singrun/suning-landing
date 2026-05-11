export default function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose prose-gallery prose-lg max-w-none md:prose-xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
