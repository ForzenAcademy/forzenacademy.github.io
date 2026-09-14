import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(here, "../outputs/chapter1.md"), "utf8").trim();
const template = readFileSync(resolve(here, "chapter1.template.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const blocks = source.split(/\n\s*\n/).slice(1);
const illustrations = new Map([
  [
    "Even the insects seemed reluctant to make noise.",
    `        <figure class="chapter-illustration">
          <img src="images/chapter-1-ruins.webp" width="1086" height="1448" loading="lazy" decoding="async" alt="Ancient pale ruins stretching toward a distant white city beneath a bright blue sky.">
        </figure>`,
  ],
  [
    "It was a man.",
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-1-ultimos.webp" width="1055" height="1491" loading="lazy" decoding="async" alt="A lone white-armored figure emerging from a shattered seal inside a pillar of brilliant light.">
        </figure>`,
  ],
]);
const body = blocks
  .flatMap((block) => {
    const paragraph = `        <p>${renderInlineMarkdown(block.replaceAll("\n", " "))}</p>`;
    const illustration = illustrations.get(block);
    return illustration ? [paragraph, illustration] : [paragraph];
  })
  .join("\n");
const wordCount = blocks.join(" ").trim().split(/\s+/).length;
const readTime = Math.max(1, Math.round(wordCount / 210));

if (!template.includes("{{CHAPTER_BODY}}")) {
  throw new Error("The chapter template is missing its content marker.");
}

const page = template
  .replace("{{CHAPTER_BODY}}", body)
  .replace("{{WORD_COUNT}}", wordCount.toLocaleString("en-US"))
  .replace("{{READ_TIME}}", String(readTime));

writeFileSync(resolve(here, "chapter1.html"), page);
