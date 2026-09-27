#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/.." && pwd)"
source_dir="${MTG_SOURCE_DIR:-$repo_root/../mtg/arcane-table}"
export_dir="$source_dir/dist/pages"
target_dir="$repo_root/mtg"
deploy_url="https://forzenacademy.github.io/mtg/"

if [[ ! -f "$source_dir/package.json" ]]; then
  echo "MTG source project not found at: $source_dir" >&2
  echo "Set MTG_SOURCE_DIR to the Arcane Table project directory and try again." >&2
  exit 1
fi

if [[ "$(git -C "$repo_root" branch --show-current)" != "main" ]]; then
  echo "Deployments must run from the vectorsaur-live main branch." >&2
  exit 1
fi

if [[ -n "$(git -C "$repo_root" status --porcelain)" ]]; then
  echo "The vectorsaur-live checkout has uncommitted changes. Commit or stash them before deploying." >&2
  exit 1
fi

echo "Building the GitHub Pages export from $source_dir"
npm --prefix "$source_dir" run export:pages

if [[ ! -f "$export_dir/index.html" || ! -d "$export_dir/_next" ]]; then
  echo "The export is incomplete at: $export_dir" >&2
  exit 1
fi

mkdir -p "$target_dir"

# Merge instead of deleting old hashed assets. Cached HTML may still reference them.
rsync -a "$export_dir/" "$target_dir/"

git -C "$repo_root" add -- mtg

if git -C "$repo_root" diff --cached --quiet -- mtg; then
  echo "The generated MTG site is already current; nothing to commit."
  exit 0
fi

commit_message="${1:-Deploy MTG site $(date -u '+%Y-%m-%d %H:%M UTC')}"
git -C "$repo_root" commit -m "$commit_message" -- mtg
git -C "$repo_root" push origin main

echo "Deployment pushed. GitHub Pages will publish it at $deploy_url"
