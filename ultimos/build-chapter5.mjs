import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(here, "../outputs/chapter5.md"), "utf8").trim();
const template = readFileSync(resolve(here, "chapter5.template.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const blocks = source.split(/\n\s*\n/).slice(1);
const practiceAnchor = "Longing entered his voice so quietly that Orin almost mistook it for exhaustion. Then Ultimos withdrew his hand and the moment closed behind his armor.";
const practiceResume = "Kisaya did not ask what she had begun to ask.";
const outletAnchor = "Across the chamber, the service plate’s outer ring shifted by the width of a fingernail. The barrier’s hum swallowed the tiny scrape.";
const outletResume = "Ultimos had his back to them, one hand raised within a finger’s width of the largest ward anchor.";

const illustrations = new Map([
  [
    practiceAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-5-practice-court.webp" width="1055" height="1491" loading="lazy" decoding="async" alt="Ultimos rests one armored hand against the novice exercises of an abandoned White Order practice court while Orin and Kisaya watch his silent grief.">
        </figure>`,
  ],
  [
    outletAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-5-outlet.webp" width="1024" height="1536" loading="lazy" decoding="async" alt="Kisaya conceals the glowing pale disk as an ancient White Order service plate responds beside the sealed northern outlet, while Ultimos studies the barrier with his back turned.">
        </figure>`,
  ],
]);

const assertFollowedBy = (anchor, resume) => {
  const index = blocks.indexOf(anchor);
  if (index === -1 || !blocks[index + 1]?.startsWith(resume)) {
    throw new Error(`Chapter 5 illustration boundary not found: ${anchor}`);
  }
};

assertFollowedBy(practiceAnchor, practiceResume);
assertFollowedBy(outletAnchor, outletResume);

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

writeFileSync(resolve(here, "chapter5.html"), page);
