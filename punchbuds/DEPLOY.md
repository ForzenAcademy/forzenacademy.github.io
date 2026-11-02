# Punchbuds deployment

The release in this folder is built from `/Users/forzen/academy/fighting` for `/punchbuds/` on the GitHub Pages site. The release contains bundled JavaScript/CSS/fonts and only the images used by the game. The source project retains the editable source, art history, prompts and developer tools.

From the source project:

```sh
npm run deploy
```

From the `vectorsaur-live` repository:

```sh
bash punchbuds/deploy.sh
```

Both commands run tests and a production build, copy to `vectorsaur-live/punchbuds`, commit only `punchbuds/`, then push `origin main`. Use a quoted final argument for a custom commit message. The script checks the target branch and local changes, verifies release checksums, and retains old hashed bundles for cached clients. It refuses to push unrelated unpublished changes. A remote update requires `git pull --ff-only` in the site repository before retrying.

For separate review and publishing:

```sh
npm run deploy -- --prepare
npm run deploy -- --publish-only "Deploy Punchbuds release"
```

Prepare runs tests/build and writes `dist-release/` without changing the site repository. Publish verifies the release still matches the current source before copying and pushing. `release.json` records the source fingerprint and SHA-256 of every release file. An unchanged build produces no new commit.

Override `PUNCHBUDS_SITE_DIR` to use another site checkout. Set `PUNCHBUDS_SOURCE_DIR` when using the site wrapper if the source folder has moved. Install dependencies in the source project with `npm ci` first on a new computer.

Live URL: https://www.forzenacademy.com/punchbuds/

GitHub Pages serves this static folder. PeerJS signaling and STUN use the existing game configuration; deployment does not provision a TURN relay. To change network services, set the source project's documented `VITE_*` build variables before deploying. Never place secret credentials in client-side build variables.
