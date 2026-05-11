import { describe, expect, it } from "vitest";
import path from "node:path";
import { parseDocxToHtml } from "./parseDocxToHtml";

describe("parseDocxToHtml", () => {
  it("converts docx to non-empty sanitized html", async () => {
    const file = path.join(process.cwd(), "content/docx/en/text-1.docx");
    const html = await parseDocxToHtml(file);
    expect(html.length).toBeGreaterThan(50);
    expect(html).not.toContain("<script");
  });
});

