import { describe, expect, it } from "vitest";
import { sanitizeDocHtml } from "./sanitizeHtml";

describe("sanitizeDocHtml", () => {
  it("removes scripts and unsafe attributes", () => {
    const input =
      '<p>Hello</p><script>alert(1)</script><a href="javascript:alert(1)" onclick="x()">x</a>';
    const out = sanitizeDocHtml(input);
    expect(out).toContain("<p>Hello</p>");
    expect(out).not.toContain("<script>");
    expect(out).not.toContain("onclick=");
    expect(out).not.toContain("javascript:");
  });
});

