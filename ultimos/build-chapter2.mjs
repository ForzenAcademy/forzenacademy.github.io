import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(here, "../outputs/chapter2.md"), "utf8").trim();
const template = readFileSync(resolve(here, "chapter2.template.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const blocks = source.split(/\n\s*\n/).slice(1);
const witchIllustration = `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-2-witch.webp" width="1086" height="1448" loading="lazy" decoding="async" alt="Ultimos raising one armored fist and pulling a terrified wind mage into the air amid the shattered ruins.">
        </figure>`;
const childrenIllustration = `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-2-children.webp" width="1024" height="1536" loading="lazy" decoding="async" alt="A bloodied Orin standing protectively before Kisaya while Ultimos watches them across the shattered seal chamber.">
        </figure>`;
const witchIllustrationBefore = "Ultimos raised one fist.";
const childrenIllustrationAfter = "Still, he stood there.";
const body = blocks
  .flatMap((block) => {
    const paragraph = `        <p>${renderInlineMarkdown(block.replaceAll("\n", " "))}</p>`;
    if (block === witchIllustrationBefore) {
      return [witchIllustration, paragraph];
    }
    if (block === childrenIllustrationAfter) {
      return [paragraph, childrenIllustration];
    }
    return [paragraph];
  })
  .join("\n");
const wordCount = blocks.join(" ").trim().split(/\s+/).length;
const readTime = Math.max(1, Math.round(wordCount / 210));

if (!template.includes("{{CHAPTER_BODY}}")) {
  throw new Error("The chapter template is missing its content marker.");
}

if (!blocks.includes(witchIllustrationBefore) || !blocks.includes(childrenIllustrationAfter)) {
  throw new Error("A Chapter 2 illustration anchor was not found.");
}

const page = template
  .replace("{{CHAPTER_BODY}}", body)
  .replace("{{WORD_COUNT}}", wordCount.toLocaleString("en-US"))
  .replace("{{READ_TIME}}", String(readTime));

writeFileSync(resolve(here, "chapter2.html"), page);
