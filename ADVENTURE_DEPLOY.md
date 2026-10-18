# Deploy Magitower Adventure

The game is published from `adventure/` by GitHub Pages at
https://forzenacademy.github.io/adventure/ (redirected to the repository's custom domain).
The old `monsters/` output is no longer a deployment destination.

```sh
~/academy/vectorsaur-live/scripts/deploy-adventure.sh
~/academy/vectorsaur-live/scripts/deploy-adventure.sh --dry-run
~/academy/vectorsaur-live/scripts/deploy-adventure.sh --no-push
~/academy/vectorsaur-live/scripts/deploy-adventure.sh --message "Update adventure units"
```

The source project remains at `../monsters/verdant-run`. From there, `npm run deploy`
runs the same helper. The legacy `scripts/deploy-monsters.sh` command forwards to
`deploy-adventure.sh` and also deploys only to `adventure/`.

The process requires installed source dependencies, GitHub Git authentication,
and a clean publishing checkout on `main` pointing to
`ForzenAcademy/forzenacademy.github.io`. It fetches and fast-forwards `origin/main`,
refuses unrelated unpushed commits, tests and builds the game, verifies all
1,440 unit animation frames and eight backgrounds, and validates relative asset
URLs. It copies `dist/` to `adventure/`, commits only that folder, and pushes main.
Older hashed bundles in that folder remain available for cached HTML. Unchanged
builds do not create empty commits. Other folders and the old monster edition
are preserved.

A dry run tests/builds locally and previews the copy without changing destination
files, Git history, or remotes. `--no-push` copies and commits locally. A later
normal run can push an existing adventure-only deployment commit.

If the source moves, set `ADVENTURE_SOURCE_DIR=/absolute/path/to/verdant-run` when
running the wrapper. The source helper accepts `ADVENTURE_REPO_DIR` for another
local checkout of the same approved GitHub repository. Local dev/preview servers
bind to `127.0.0.1`; static builds work at root or nested paths.
