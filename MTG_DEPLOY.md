# Deploying Arcane Table to GitHub Pages

Arcane Table is published from the `mtg/` directory of this repository and is available at:

<https://forzenacademy.github.io/mtg/>

The source project is expected at the sibling path `../mtg/arcane-table`. The deployment script builds its static GitHub Pages export, copies it into this repository, commits the generated changes, and pushes `main` to `origin`.

## Deploy

Before deploying, make sure:

- The source project dependencies are installed.
- This `vectorsaur-live` checkout is on `main` and has no uncommitted changes.
- GitHub SSH authentication is available for `origin`.

From anywhere, run:

```bash
~/academy/vectorsaur-live/scripts/deploy-mtg.sh "Describe the MTG update"
```

The commit message is optional. Without one, the script uses a timestamped `Deploy MTG site ...` message.

If the Arcane Table source is elsewhere, override its location:

```bash
MTG_SOURCE_DIR=/absolute/path/to/arcane-table \
  ~/academy/vectorsaur-live/scripts/deploy-mtg.sh "Describe the MTG update"
```

## What the script does

1. Verifies that `vectorsaur-live` is clean and on `main`.
2. Runs `npm run export:pages` in the Arcane Table source project.
3. Verifies the generated `dist/pages/index.html` and `_next/` assets.
4. Merges `dist/pages/` into `vectorsaur-live/mtg/`.
5. Stages only `mtg/`, commits it, and pushes `origin/main`.

The copy intentionally keeps older hashed files under `mtg/_next/`. Visitors with cached HTML may still request those bundles while GitHub Pages and browser caches update. Do not edit generated files in `mtg/` directly; make changes in the Arcane Table source and redeploy.

If the build produces no changes, the script exits without making an empty commit or pushing.
