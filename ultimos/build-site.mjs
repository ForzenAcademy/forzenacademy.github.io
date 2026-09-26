import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(here, "../outputs");

const chapterDescriptions = [
  "Witnesses to a murder, Orin and Kisaya flee three black mages into ruins Veyr has forbidden anyone to enter.",
  "The hunters descend into the broken seal and confront the ancient power their own history tried to erase.",
  "Hidden beneath a borrowed cloak, Ultimos enters modern Veyr and discovers what remains of white magic.",
  "A search through Veyr’s buried records connects the stolen disk to a hidden route beneath the Black Spire.",
  "One face within Veyr’s greatest lie draws Ultimos into a choice that exposes all three fugitives.",
  "Beneath Veyr, the children demand the truth about the White Order, the Severance, and Ultimos’s promised revenge.",
  "Solmir turns an innocent woman into bait, forcing Ultimos to answer a public execution without surrendering control.",
  "Modern elemental formations close around Ultimos as Solmir fights to capture the impossible man behind the helmet.",
  "Ultimos abandons restraint, and the victory he considers righteous becomes terrifying to everyone who survives it.",
  "The Spire answers the destruction in the Ashward, while its hidden rulers uncover a name history was meant to bury.",
];

const totalChapters = chapterDescriptions.length;

const favicon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2311141a'/%3E%3Ccircle cx='32' cy='32' r='19' fill='none' stroke='%23d1a35f' stroke-width='3'/%3E%3Cpath d='M32 10v44M10 32h44M16.5 16.5l31 31M47.5 16.5l-31 31' stroke='%23d1a35f' stroke-width='2'/%3E%3Ccircle cx='32' cy='32' r='5' fill='%23f5f1e8'/%3E%3C/svg%3E";

const illustrations = {
  1: {
    after: {
      "Even the insects seemed reluctant to make noise.": ["chapter-1-ruins.webp", 1086, 1448, "Ancient pale ruins stretching toward a distant white city beneath a bright blue sky."],
      "It was a man.": ["chapter-1-ultimos.webp", 1055, 1491, "A lone white-armored figure emerging from a shattered seal inside a pillar of brilliant light."],
    },
  },
  2: {
    before: {
      "Ultimos raised one fist.": ["chapter-2-witch.webp", 1086, 1448, "Ultimos raises one armored fist and pulls a terrified wind mage into the air amid the shattered ruins."],
    },
    after: {
      "Still, he stood there.": ["chapter-2-children.webp", 1024, 1536, "A bloodied Orin stands protectively before Kisaya while Ultimos watches them across the shattered seal chamber."],
    },
  },
  3: {
    after: {
      "Not a tower beside a garden he could still describe after four centuries in darkness.": ["chapter-3-city.webp", 1086, 1448, "Orin, Kisaya, and Ultimos look across modern Veyr toward the immense, twisted Black Spire at sunset."],
      "It described the hand as if the wound had never happened.": ["chapter-3-healing.webp", 1055, 1491, "Ultimos shapes luminous white geometry above a burned boy’s hand while Nema, Orin, Kisaya, and the boy’s mother watch."],
    },
  },
  4: {
    after: {
      "Ultimos studied the paper without slowing, then continued walking.": ["chapter-4-wanted.webp", 1024, 1536, "Orin and Kisaya pass their wanted notices in disguise while a cloaked Ultimos follows and black-robed mages patrol the streets of Veyr."],
      "The symbol on its face matched the center of the legend. Its seven notches matched the breaks in the outer ring, and every hooked finger and angled ray was identical.": ["chapter-4-disk.webp", 1055, 1491, "Orin, Kisaya, and a cloaked Ultimos compare the pale disk with an ancient survey map inside the Civic Survey Hall."],
    },
  },
  5: {
    after: {
      "Then white light opened against the mural. Two armored fingers touched the crack across Fermina’s painted face, and a pattern of pale geometry no larger than Orin’s palm formed beneath them.": ["chapter-5-mural.webp", 1062, 1481, "Ultimos touches the crack across Fermina’s painted face as white geometry flares through a monumental false mural of him."],
      "“Ultimos!”": ["chapter-5-captain.webp", 1024, 1536, "Ultimos stands over a terrified Hall security captain bound by white chains as a tearful Orin calls out beneath the altered mural."],
      "The same magic that had carried grain and repaired drains yesterday now divided the city into cells.": ["chapter-5-escape.webp", 1218, 1292, "Ultimos leads Orin and Kisaya through Veyr as containment barriers rise, Wardens fill the walls, and wind riders descend."],
    },
  },
  6: {
    after: {
      "It struck the wind blade head-on. The spell burst apart from tip to hilt, compressed air breaking across the walls in sheets of spray.": ["chapter-6-wind-fight.webp", 1024, 1536, "Ultimos holds a warded iron gate above Orin and Kisaya while his white beam shatters a wind witch’s attack inside the flooded waterworks."],
      "“Fiona was Fermina’s sister.”": ["chapter-6-practice-court.webp", 1055, 1491, "Ultimos rests one armored hand against the novice exercises of an abandoned White Order practice court while Orin and Kisaya witness his grief."],
    },
  },
};

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const renderInlineMarkdown = (value) => escapeHtml(value)
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");

const chapterLabel = (number) => [
  "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
][number - 1];

const makeNav = (current = 0) => `
      <nav class="site-nav" aria-label="Primary navigation" data-scroll-current>
        <a href="index.html"${current === 0 ? ' aria-current="page"' : ""}>Home</a>
${Array.from({ length: totalChapters }, (_, index) => {
  const number = index + 1;
  return `        <a href="chapter${number}.html"${current === number ? ' aria-current="page"' : ""}>Chapter ${number}</a>`;
}).join("\n")}
      </nav>`;

const pageHead = (title, description) => `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#11141a">
  <title>${escapeHtml(title)}</title>
  <link rel="icon" type="image/svg+xml" href="${favicon}">
  <link rel="stylesheet" href="styles.css?v=7">`;

const header = (current = 0) => `
  <header class="site-header">
    <div class="nav-shell">
      <a class="wordmark" href="index.html" aria-label="Ultimos home">
        <span class="seal-mark" aria-hidden="true"></span>
        Ultimos
      </a>${makeNav(current)}
    </div>
  </header>`;

const footer = (rightText) => `
  <footer class="site-footer">
    <div class="footer-shell">
      <p>Ultimos</p>
      <p>${escapeHtml(rightText)}</p>
    </div>
  </footer>`;

const navScript = `
  <script>
    const currentNavItem = document.querySelector('.site-nav [aria-current="page"]');
    currentNavItem?.scrollIntoView({ block: 'nearest', inline: 'center' });
  </script>`;

const chapters = Array.from({ length: totalChapters }, (_, index) => {
  const number = index + 1;
  const sourcePath = resolve(outputDir, `chapter${number}.md`);
  if (!existsSync(sourcePath)) {
    throw new Error(`Missing chapter source: ${sourcePath}`);
  }

  const source = readFileSync(sourcePath, "utf8").trim();
  const [heading, ...bodyLines] = source.split("\n");
  const headingMatch = heading.match(/^# Chapter (\d+): (.+)$/);
  if (!headingMatch || Number(headingMatch[1]) !== number) {
    throw new Error(`Unexpected heading in chapter ${number}: ${heading}`);
  }

  return {
    number,
    title: headingMatch[2],
    source,
    blocks: bodyLines.join("\n").trim().split(/\n\s*\n/),
  };
});

const figureHtml = ([file, width, height, alt]) => {
  const filePath = resolve(here, "images", file);
  if (!existsSync(filePath)) {
    throw new Error(`Missing illustration: ${filePath}`);
  }
  return `        <figure class="chapter-illustration chapter-illustration-reveal">
          <img src="images/${file}" width="${width}" height="${height}" loading="lazy" decoding="async" alt="${escapeHtml(alt)}">
        </figure>`;
};

const renderChapterBody = ({ number, blocks }) => {
  const config = illustrations[number] ?? {};
  const seen = new Set();
  const rendered = [];

  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    const before = config.before?.[block];
    const after = config.after?.[block];
    if (before) {
      rendered.push(figureHtml(before));
      seen.add(`before:${block}`);
    }

    if (block === "***") {
      rendered.push('        <hr class="scene-break" aria-label="Scene break">');
    } else {
      rendered.push(`        <p>${renderInlineMarkdown(block.replaceAll("\n", " "))}</p>`);
    }

    if (after) {
      rendered.push(figureHtml(after));
      seen.add(`after:${block}`);
    }
  }

  const expected = [
    ...Object.keys(config.before ?? {}).map((block) => `before:${block}`),
    ...Object.keys(config.after ?? {}).map((block) => `after:${block}`),
  ];
  for (const anchor of expected) {
    if (!seen.has(anchor)) {
      throw new Error(`Chapter ${number} illustration anchor not found: ${anchor}`);
    }
  }

  return rendered.join("\n");
};

const chapterCards = chapters.map(({ number, title }) => `
        <article class="chapter-card">
          <div class="chapter-number" aria-hidden="true">${String(number).padStart(2, "0")}</div>
          <div>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(chapterDescriptions[number - 1])}</p>
          </div>
          <a class="text-link" href="chapter${number}.html">Read chapter <span class="arrow" aria-hidden="true">→</span></a>
        </article>`).join("");

const indexHtml = `<!doctype html>
<html lang="en">
<head>${pageHead("Ultimos — A Dark Fantasy Light Novel", "Ultimos — a dark fantasy light novel about forbidden white magic, a stolen history, and the ancient mage who remembers the truth.")}
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
${header(0)}

  <main id="main-content">
    <section class="hero" aria-labelledby="novel-title">
      <div class="hero-shell">
        <div>
          <p class="eyebrow">A dark fantasy light novel</p>
          <h1 id="novel-title">Ultimos</h1>
          <p class="hero-lede">The victors wrote history. They forgot to bury its strongest witness.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="chapter1.html">Begin reading <span class="arrow" aria-hidden="true">→</span></a>
            <a class="button button-secondary" href="#story">About the story</a>
          </div>
        </div>

        <div class="book-object" role="img" aria-label="Book cover for Ultimos, Volume One">
          <div class="book-frame">
            <p class="book-kicker">A light novel</p>
            <div class="book-sigil" aria-hidden="true"></div>
            <p class="book-title">Ultimos</p>
            <p class="book-volume">Volume One</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-shell" id="story" aria-labelledby="story-title">
      <div class="story-grid">
        <div>
          <p class="section-label">The story</p>
          <h2 class="section-title" id="story-title">A world built on a beautiful lie.</h2>
        </div>
        <div class="story-copy">
          <p>Black mages rule as humanity’s celebrated protectors. White mages are remembered as ancient tyrants who held civilization beneath them by controlling the healing everyone needed.</p>
          <p>When young fugitives Orin and Kisaya break a forbidden seal beneath the city, they awaken the last person who remembers what truly happened. Ultimos is a white mage from the forgotten age—and his magic can do far more than heal.</p>
          <p>He may be powerful enough to free the world from tyranny. He may also hate it enough to become something worse.</p>
        </div>
      </div>

      <div class="chapter-feature" aria-labelledby="chapters-title">
        <p class="section-label">Read online</p>
        <h2 class="section-title" id="chapters-title">Volume One</h2>${chapterCards}
      </div>
    </section>
  </main>
${footer("A dark fantasy light novel.")}
${navScript}
</body>
</html>
`;

writeFileSync(resolve(here, "index.html"), indexHtml);

for (const chapter of chapters) {
  const { number, title, blocks } = chapter;
  const wordCount = blocks
    .filter((block) => block.trim() !== "***")
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 210));
  const previous = number === 1
    ? '<a href="index.html">← Volume One</a>'
    : `<a href="chapter${number - 1}.html">← Previous chapter</a>`;
  const next = number === totalChapters
    ? '<a class="text-link" href="index.html">Volume One complete <span class="arrow" aria-hidden="true">→</span></a>'
    : `<a class="text-link" href="chapter${number + 1}.html">Next chapter <span class="arrow" aria-hidden="true">→</span></a>`;
  const footerPrevious = number === 1
    ? '<a class="text-link" href="index.html"><span class="arrow" aria-hidden="true">←</span> Volume One</a>'
    : `<a class="text-link" href="chapter${number - 1}.html"><span class="arrow" aria-hidden="true">←</span> Previous chapter</a>`;

  const page = `<!doctype html>
<html lang="en">
<head>${pageHead(`Chapter ${number}: ${title} — Ultimos`, `Read Chapter ${number}, ${title}, from the dark fantasy light novel Ultimos.`)}
</head>
<body class="reader-page">
  <a class="skip-link" href="#chapter-text">Skip to chapter</a>
${header(number)}

  <div class="reader-rail">
    <div class="reader-rail-inner">
      ${previous}
      <span>${wordCount.toLocaleString("en-US")} words · ${readTime} min read</span>
    </div>
  </div>

  <main>
    <article class="chapter" id="chapter-text">
      <header class="chapter-header">
        <p class="eyebrow">Volume One · Chapter ${chapterLabel(number)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p class="chapter-meta">Ultimos</p>
      </header>

      <div class="chapter-body">
${renderChapterBody(chapter)}
      </div>

      <footer class="chapter-end">
        <div class="end-mark" aria-hidden="true"></div>
        <p>End of Chapter ${chapterLabel(number)}</p>
        <div class="chapter-end-nav" aria-label="Chapter navigation">
          ${footerPrevious}
          ${next}
        </div>
      </footer>
    </article>
  </main>
${footer(`Chapter ${number}: ${title}`)}
${navScript}
</body>
</html>
`;

  writeFileSync(resolve(here, `chapter${number}.html`), page);
}

console.log(`Built index and ${chapters.length} chapter pages.`);
