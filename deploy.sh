#!/usr/bin/env bash
# Rebuild and restart the site container on the VPS.
# Usage (on the server): cd /root/repos/Plusnet-landing-page && ./deploy.sh
set -euo pipefail

NAME=plusnet-site
PORT=3001   # host port nginx proxies to (3000 is used by the portal)

git pull --ff-only
docker build -t "$NAME" .
docker rm -f "$NAME" 2>/dev/null || true
docker run -d --name "$NAME" --restart unless-stopped \
  -p 127.0.0.1:${PORT}:3000 "$NAME"
docker image prune -f >/dev/null
echo "✓ $NAME running on 127.0.0.1:${PORT}"
