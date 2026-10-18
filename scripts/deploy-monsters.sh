#!/usr/bin/env bash
set -euo pipefail
# Compatibility entry point. All builds now go to adventure/.
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
if [[ -n "${MONSTERS_SOURCE_DIR:-}" && -z "${ADVENTURE_SOURCE_DIR:-}" ]]; then
  export ADVENTURE_SOURCE_DIR="$MONSTERS_SOURCE_DIR"
fi
exec bash "$script_dir/deploy-adventure.sh" "$@"
