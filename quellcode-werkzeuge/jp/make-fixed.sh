#!/bin/sh
# Baut jp/fixed-bronze.mjs aus der Grundfassung und den Wochen-Skripten neu, dann die Daten. © Dr. Edmund Bruns
set -e
cd "$(dirname "$0")/.."
cp jp/fixed-bronze.basis.mjs jp/fixed-bronze.mjs
for f in jp/edit-w1-w3.mjs jp/edit-w4.mjs jp/edit-w5.mjs jp/edit-w6.mjs jp/edit-w7.mjs jp/edit-w8.mjs jp/edit-w9.mjs jp/edit-w10.mjs jp/edit-w11.mjs jp/edit-w12.mjs jp/edit-w13.mjs jp/edit-w14.mjs jp/edit-w15.mjs jp/edit-w16.mjs jp/edit-w17.mjs jp/edit-w18.mjs jp/edit-w19.mjs jp/edit-w20.mjs jp/edit-w21.mjs jp/edit-w22.mjs jp/edit-w23.mjs jp/edit-w24.mjs jp/edit-w25.mjs jp/edit-w26.mjs jp/edit-w27.mjs; do [ -f "$f" ] && node "$f"; done
node jp/build-jahresplan.mjs
