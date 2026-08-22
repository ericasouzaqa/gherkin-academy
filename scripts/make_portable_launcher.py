#!/usr/bin/env python3
"""Build a self-extracting launcher for the static Gherkin Academy site."""
from __future__ import annotations

import base64
import io
import pathlib
import tarfile

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "dist" / "public"
OUTPUT = ROOT / "dist" / "gherkin-academy-linux-macos"

if not PUBLIC.is_dir():
    raise SystemExit("dist/public não existe. Execute o build:pages antes.")

archive = io.BytesIO()
with tarfile.open(fileobj=archive, mode="w:gz") as tar:
    for path in sorted(PUBLIC.rglob("*")):
        tar.add(path, arcname=path.relative_to(PUBLIC))
encoded = base64.b64encode(archive.getvalue()).decode("ascii")

launcher = """#!/bin/sh
set -eu

APP_DIR="${TMPDIR:-/tmp}/gherkin-academy-${USER:-user}-$$"
PORT="${GHERKIN_PORT:-4173}"
mkdir -p "$APP_DIR/gherkin-academy"
cleanup() {
  if [ -n "${SERVER_PID:-}" ]; then kill "$SERVER_PID" 2>/dev/null || true; fi
  rm -rf "$APP_DIR"
}
trap cleanup EXIT INT TERM

awk 'found { print } /^__ARCHIVE_BELOW__$/ { found=1 }' "$0" | base64 -d | tar -xzf - -C "$APP_DIR/gherkin-academy"
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$APP_DIR" >/tmp/gherkin-academy-http.log 2>&1 &
SERVER_PID=$!
URL="http://127.0.0.1:$PORT/gherkin-academy/"

case "$(uname -s)" in
  Darwin) open "$URL" >/dev/null 2>&1 || true ;;
  Linux) command -v xdg-open >/dev/null 2>&1 && xdg-open "$URL" >/dev/null 2>&1 || true ;;
esac

echo "Gherkin Academy disponível em $URL"
echo "Mantenha esta janela aberta enquanto estiver usando a plataforma."
wait "$SERVER_PID"

__ARCHIVE_BELOW__
""" + encoded + "\n"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(launcher, encoding="utf-8")
OUTPUT.chmod(0o755)
print(OUTPUT)
print(f"{OUTPUT.stat().st_size} bytes")
