# Deploy Verdant Trail

The production game lives in `monsters/` and is published by GitHub Pages at
<https://forzenacademy.github.io/monsters/> (currently redirected to the repository's custom domain).

From anywhere, run:

```sh
~/academy/vectorsaur-live/scripts/deploy-monsters.sh
```

From the source project at `../monsters/verdant-run`, you can also run:

```sh
npm run deploy
```

Options:

```sh
# Test/build and preview the file changes; no destination changes, commit, or push.
~/academy/vectorsaur-live/scripts/deploy-monsters.sh --dry-run

# Use a specific commit message.
~/academy/vectorsaur-live/scripts/deploy-monsters.sh "Improve battle animations"

# Copy and commit, leaving the deployment commit local.
~/academy/vectorsaur-live/scripts/deploy-monsters.sh --no-push
```

The wrapper calls the source project's `scripts/deploy.sh`, which:

1. Checks that this checkout is on `main`, is clean, and points only to the approved GitHub repository.
2. Fetches `origin/main`, refuses unrelated unpushed commits, and fast-forwards remote updates.
3. Runs the game's tests and production build.
4. Validates that HTML/CSS assets use relative URLs and that required game assets exist.
5. Copies the build into `monsters/`, retaining older hashed bundles for cached pages.
6. Commits only changed files under `monsters/` and pushes `origin/main`.

Install dependencies in the source project first, and have GitHub Git authentication ready.
Unchanged builds do not create empty commits. If a previous push failed after committing,
a rerun can push that existing deployment commit. Diverged branches and uncommitted
publishing-repository changes require resolving them before a real deployment.
A dry run can inspect a dirty publishing checkout and does not fetch or alter Git history;
it still runs tests and writes the local source project's `dist/` build.

If the source has moved:

```sh
MONSTERS_SOURCE_DIR=/absolute/path/to/verdant-run \
  ~/academy/vectorsaur-live/scripts/deploy-monsters.sh
```

The source command accepts `MONSTERS_REPO_DIR` for another local checkout of the same approved
GitHub Pages repository. Sites and Codex/OpenAI server hosting are not used.
