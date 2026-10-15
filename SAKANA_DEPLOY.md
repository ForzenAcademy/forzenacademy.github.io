# Optional GitHub Pages deployment

The default deployment command now publishes to AWS. See [AWS_DEPLOY.md](AWS_DEPLOY.md).
This guide describes the retained GitHub Pages deployment option.

The release lives in `sakana/` and is published by GitHub Pages at:

- <https://www.forzenacademy.com/sakana/>
- <https://forzenacademy.github.io/sakana/> (redirects to the custom domain)

Kanafish retains the existing `/sakana/` publishing path, deployment command names,
and `SAKANA_*` configuration variables so current links and deployment setups keep
working. The source directory is still named `sakanafish`.

From the source project at `../sakanafish`, run:

```bash
npm run deploy:pages
```

Or, from anywhere:

```bash
~/academy/vectorsaur-live/scripts/deploy-sakana.sh
```

Install dependencies in the source project first with `npm install`. The publishing
checkout must be clean, on `main`, and authenticated to GitHub.

## Options

```bash
# Test, build, validate, and preview changes without changing the Pages checkout.
npm run deploy:pages -- --dry-run

# Choose a commit message.
npm run deploy:pages -- --message "Update the konbini lessons"

# Copy and commit locally, without pushing.
npm run deploy:pages -- --no-push
```

The publishing-repository wrapper accepts the same arguments. If the source or
publishing checkout has moved, set `SAKANA_SOURCE_DIR` on the wrapper or
`SAKANA_REPO_DIR` on the source command. The destination remote must remain
`ForzenAcademy/forzenacademy.github.io`.

## What deployment does

1. Checks the publishing branch, clean working tree, and fetch/push destinations.
2. Fetches `origin/main`, checks that pending commits belong to this deployment,
   and fast-forwards remote changes. It never force-pushes or rewrites history.
3. Runs the learning-engine tests and makes a production Vite build.
4. Verifies that the exported HTML and CSS use relative, existing asset files.
5. Copies `dist/` into `sakana/`, retaining previous hashed assets for cached pages.
6. Updates this guide and the publishing-repository deploy wrapper.
7. Commits only `sakana/`, `scripts/deploy-sakana.sh`, and `SAKANA_DEPLOY.md`,
   then pushes `main` to `origin`.

Unchanged releases do not create empty commits. If a push fails after a successful
commit, fix the GitHub connection and rerun: the script can push an existing,
unpushed deployment commit. Unrelated pending commits and diverged history require
resolving before deployment.

## Why it works in a subfolder

Vite builds with `base: './'`, so scripts, styles, fonts, and the favicon resolve
relative to the app's own folder. Hash navigation keeps routes such as
`/sakana/#area/konbini` inside the app without needing server rewrite rules.
The same release can also be served at `/` or inside another static-site folder.
The included `.nojekyll` preserves a plain static export.

Edit the source project and redeploy; do not hand-edit generated files in `sakana/`.
This deployment does not use Sites or any OpenAI-hosted runtime. Progress remains
in the visitor's browser. A new hostname/origin has separate progress; use the
app's progress export/import to move a local learning record to the hosted copy.
