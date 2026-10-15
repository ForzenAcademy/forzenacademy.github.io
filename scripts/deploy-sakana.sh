#!/usr/bin/env bash
set -euo pipefail

# Installed as vectorsaur-live/scripts/deploy-sakana.sh by the source deploy script.
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
repo_dir="$(cd -- "$script_dir/.." && pwd -P)"
source_dir="${SAKANA_SOURCE_DIR:-$repo_dir/../sakanafish}"

if [[ ! -f "$source_dir/scripts/deploy.sh" ]]; then
  printf 'KANAFISH source not found at %s. Set SAKANA_SOURCE_DIR.\n' "$source_dir" >&2
  exit 1
fi

export SAKANA_REPO_DIR="$repo_dir"
exec bash "$source_dir/scripts/deploy.sh" "$@"
