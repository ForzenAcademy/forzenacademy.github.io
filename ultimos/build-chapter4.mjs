import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(here, "../outputs/chapter4.md"), "utf8").trim();
const template = readFileSync(resolve(here, "chapter4.template.html"), "utf8");

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const blocks = source.split(/\n\s*\n/).slice(1);
const diskAnchor = "Every notch divided the outer ring at the same interval.";
const diskResume = "Beside the map symbol, an older word had been scraped away. Later ink supplied a replacement.";
const muralAnchor = "Two armored fingers touched the crack across Fermina’s painted face.";
const muralResume = "Pale geometry opened beneath them.";
const containmentLead = "Yesterday, the same magic had carried grain and repaired drains.";
const containmentAnchor = "Today, it divided the city into cells.";
const containmentResume = "Ultimos led them into a cloth market before the bridge sealed completely.";

const illustrations = new Map([
  [
    diskAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-4-disk.webp" width="1055" height="1491" loading="lazy" decoding="async" alt="Orin compares an ancient survey map while Kisaya holds the pale disk out of a cloaked Ultimos's sight in the Civic Survey Hall.">
        </figure>`,
  ],
  [
    muralAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-4-mural.webp" width="1062" height="1481" loading="lazy" decoding="async" alt="Ultimos touches the crack across Fermina's painted face as white geometry flares through a monumental false mural of him.">
        </figure>`,
  ],
  [
    containmentAnchor,
    `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/chapter-4-escape.webp" width="1218" height="1292" loading="lazy" decoding="async" alt="Ultimos leads Orin and Kisaya through Veyr as containment barriers rise, Wardens fill the walls, and wind riders descend.">
        </figure>`,
  ],
]);

const assertFollowedBy = (anchor, resume) => {
  const index = blocks.indexOf(anchor);
  if (index === -1 || !blocks[index + 1]?.startsWith(resume)) {
    throw new Error(`Chapter 4 illustration boundary not found: ${anchor}`);
  }
};

assertFollowedBy(diskAnchor, diskResume);
assertFollowedBy(muralAnchor, muralResume);
assertFollowedBy(containmentLead, containmentAnchor);
assertFollowedBy(containmentAnchor, containmentResume);

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

writeFileSync(resolve(here, "chapter4.html"), page);
