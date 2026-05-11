import path from "node:path";
import { parseDocxToHtml } from "@/lib/docx/parseDocxToHtml";

export async function loadEnContent() {
  const base = process.cwd();
  const text1 = await parseDocxToHtml(path.join(base, "content/docx/en/text-1.docx"));
  const text2 = await parseDocxToHtml(path.join(base, "content/docx/en/text-2.docx"));
  const text3 = await parseDocxToHtml(path.join(base, "content/docx/en/text-3.docx"));
  return { text1, text2, text3 };
}

