#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
site_dir="$(cd -- "$script_dir/.." && pwd -P)"
source_dir="${PUNCHBUDS_SOURCE_DIR:-$site_dir/../fighting}"
if [[ ! -f "$source_dir/scripts/deploy.sh" ]]; then
  printf 'Punchbuds source not found at %s. Set PUNCHBUDS_SOURCE_DIR.\n' "$source_dir" >&2
  exit 1
fi
export PUNCHBUDS_SITE_DIR="$site_dir"
exec bash "$source_dir/scripts/deploy.sh" "$@"
