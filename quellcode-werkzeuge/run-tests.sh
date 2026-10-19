#!/bin/sh
# Alle Prüfungen der SchachStunde. Aufruf im Ordner quellcode-werkzeuge, Website-Dateien unter dist/.
# Benötigt Node.js 22; test-keyboard.cjs braucht Playwright und einen lokalen Server, engine-check.mjs Stockfish (STOCKFISH=/pfad/stockfish).
set -e
for t in validate test-units test-labyrinth test-support test-fachlich test-entry test-storage test-simple test-positions test-tactics test-time test-diplom; do echo "== $t"; node $t.mjs; done
[ -n "$STOCKFISH" ] && node engine-check.mjs || echo "engine-check übersprungen (STOCKFISH nicht gesetzt)"
