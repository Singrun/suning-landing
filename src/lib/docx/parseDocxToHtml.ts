import mammoth from "mammoth";
import { sanitizeDocHtml } from "./sanitizeHtml";

function normalizeHeadings(html: string): string {
  // Reserve page-level H1 for the hero, so shift DOC headings down.
  return html.replaceAll("<h1", "<h2").replaceAll("</h1>", "</h2>");
}

export async function parseDocxToHtml(docxPath: string): Promise<string> {
  const result = await mammoth.convertToHtml({ path: docxPath });
  const normalized = normalizeHeadings(result.value);
  return sanitizeDocHtml(normalized);
}

