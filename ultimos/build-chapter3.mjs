import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(here, "../outputs/chapter3.md"), "utf8").trim();
const template = readFileSync(resolve(here, "chapter3.template.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const blocks = source.split(/\n\s*\n/).slice(1);
const cityAnchor = "Not a tower beside a garden he could still describe after four centuries in darkness.";
const healingAnchor = "It described the hand as if the wound had never happened.";
const illustrations = new Map([
  [
    cityAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-3-city.webp" width="1086" height="1448" loading="lazy" decoding="async" alt="Orin, Kisaya, and Ultimos looking across modern Veyr toward the immense, twisted Black Spire at sunset.">
        </figure>`,
  ],
  [
    healingAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-3-healing.webp" width="1055" height="1491" loading="lazy" decoding="async" alt="Ultimos shaping luminous white geometry above a burned boy's hand while Nema, Orin, Kisaya, and the boy's mother watch.">
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

if (!blocks.includes(cityAnchor) || !blocks.includes(healingAnchor)) {
  throw new Error("A Chapter 3 illustration anchor was not found.");
}

const page = template
  .replace("{{CHAPTER_BODY}}", body)
  .replace("{{WORD_COUNT}}", wordCount.toLocaleString("en-US"))
  .replace("{{READ_TIME}}", String(readTime));

writeFileSync(resolve(here, "chapter3.html"), page);
