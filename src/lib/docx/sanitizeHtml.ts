import sanitizeHtml from "sanitize-html";

export function sanitizeDocHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ["h2", "h3", "h4", "p", "strong", "em", "ul", "ol", "li", "a", "br"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform(
        "a",
        { target: "_blank", rel: "noreferrer noopener" },
        true,
      ),
    },
    allowedSchemes: ["http", "https", "mailto"],
  });
}

