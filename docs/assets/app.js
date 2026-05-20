const searchInput = document.querySelector("#api-search");
const moduleFilter = document.querySelector("#module-filter");
const kindButtons = [...document.querySelectorAll("[data-kind-filter]")];
const cards = [...document.querySelectorAll(".api-card")];
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sidebarGroups = [...document.querySelectorAll(".sidebar-group")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

let activeKind = "all";
let currentEntryId = "";

for (const button of kindButtons) {
  button.addEventListener("click", () => {
    activeKind = button.dataset.kindFilter ?? "all";
    kindButtons.forEach((candidate) =>
      candidate.classList.toggle("is-active", candidate === button),
    );
    applyFilters();
  });
}

searchInput?.addEventListener("input", applyFilters);
moduleFilter?.addEventListener("change", applyFilters);

for (const link of navLinks) {
  link.addEventListener("click", () =>
    setCurrentEntry(link.dataset.navLink ?? ""),
  );
}

for (const card of cards) {
  const heading = card.querySelector("h3");
  const anchor = document.createElement("a");
  anchor.className = "anchor-link";
  anchor.href = `#${card.id}`;
  anchor.setAttribute(
    "aria-label",
    `Link to ${heading?.textContent ?? "API entry"}`,
  );
  anchor.textContent = "#";
  heading?.append(anchor);
}

const observer =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleEntry?.target?.id) {
            setCurrentEntry(visibleEntry.target.id);
          }
        },
        {
          rootMargin: "-22% 0px -64% 0px",
          threshold: [0.08, 0.18, 0.32],
        },
      )
    : undefined;

for (const card of cards) {
  observer?.observe(card);
}

applyFilters();

function applyFilters() {
  const query = (searchInput?.value ?? "").trim().toLowerCase();
  const moduleValue = moduleFilter?.value ?? "all";
  let visibleCount = 0;
  const visibleIds = new Set();

  for (const card of cards) {
    const matchesText = !query || (card.dataset.search ?? "").includes(query);
    const matchesKind =
      activeKind === "all" || card.dataset.kind === activeKind;
    const matchesModule =
      moduleValue === "all" || card.dataset.module === moduleValue;
    const visible = matchesText && matchesKind && matchesModule;

    card.hidden = !visible;
    if (visible) {
      visibleCount += 1;
      visibleIds.add(card.id);
    }
  }

  for (const link of navLinks) {
    const entryId = link.dataset.navLink ?? "";
    link.hidden = !visibleIds.has(entryId);
  }

  for (const group of sidebarGroups) {
    const visibleLinks = group.querySelectorAll(
      "[data-nav-link]:not([hidden])",
    );
    group.hidden = visibleLinks.length === 0;
  }

  if (resultCount) {
    resultCount.textContent = `${visibleCount} ${
      visibleCount === 1 ? "entry" : "entries"
    }`;
  }

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }

  if (!visibleIds.has(currentEntryId)) {
    setCurrentEntry([...visibleIds][0] ?? "");
  }
}

function setCurrentEntry(entryId) {
  currentEntryId = entryId;

  for (const link of navLinks) {
    link.classList.toggle(
      "is-current",
      Boolean(entryId) && link.hash === `#${entryId}`,
    );
  }
}
