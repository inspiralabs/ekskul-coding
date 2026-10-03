#!/usr/bin/env bash
# Smoke test setelah deploy (dijalankan deploy.sh di host VPS, env APP=<nama-app>). Exit 0 = lulus.
set -euo pipefail
curl -fsS --max-time 10 -H "Host: ${SMOKE_HOST:-$APP.inspiralabs.id}" http://127.0.0.1/health >/dev/null
