#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_dir="$(cd -- "$script_dir/.." && pwd)"
source_dir="${MONSTERS_SOURCE_DIR:-$repo_dir/../monsters/verdant-run}"

if [[ ! -f "$source_dir/scripts/deploy.sh" ]]; then
  printf 'Verdant Trail source not found at %s. Set MONSTERS_SOURCE_DIR.\n' "$source_dir" >&2
  exit 1
fi

export MONSTERS_REPO_DIR="$repo_dir"
exec bash "$source_dir/scripts/deploy.sh" "$@"
