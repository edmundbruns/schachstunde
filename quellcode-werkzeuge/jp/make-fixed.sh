#!/bin/sh
# Baut jp/fixed-bronze.mjs aus der Grundfassung und den Wochen-Skripten neu, dann die Daten. © Dr. Edmund Bruns
set -e
cd "$(dirname "$0")/.."
cp jp/fixed-bronze.basis.mjs jp/fixed-bronze.mjs
for f in jp/edit-w1-w3.mjs jp/edit-w4.mjs jp/edit-w5.mjs jp/edit-w6.mjs jp/edit-w7.mjs; do [ -f "$f" ] && node "$f"; done
node jp/build-jahresplan.mjs
