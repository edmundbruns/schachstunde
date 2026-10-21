// Praxiswissen › Jahresplan: feste Stunden, so wie erfahrene Kolleginnen und Kollegen sie halten. Inhalt für ca. 45 Minuten, keine Zeitphasen.
// Erzeugt aus der überarbeiteten Fassung (Vergleich mit ChatGPT, Gemini und veröffentlichten Stundenplänen). Felder siehe build-jahresplan.mjs.
// © Dr. Edmund Bruns
export const URLS={
 "brettvideo": "https://www.youtube.com/watch?v=vKapJK-OoNc",
 "agkonzept": "https://www.edmundbruns.com/schach/schachlehrende/ag-konzept/",
 "entwuerfe": "https://www.edmundbruns.com/schach/schachlehrende/stundenentwuerfe/",
 "online": "https://edmundbruns.github.io/Schach-grundregeln/",
 "schiffe": "https://schachkicker.de/wp-content/uploads/2025/10/Schiffe-versenken-mit-Schachfiguren.pdf",
 "feldraten": "https://edmundbruns.github.io/feldraten/",
 "aufbauChallenge": "https://www.youtube.com/watch?v=zz0MdJ6aEg4",
 "schiffeVideo": "https://www.youtube.com/watch?v=4Kh3sRBwY4Q",
 "turmVideo": "https://www.youtube.com/watch?v=x-aCYU-YhTc",
 "laeuferVideo": "https://www.youtube.com/watch?v=SvWXmnmGeUs",
 "steinchen": "https://www.youtube.com/watch?v=Jd-xNNoYH-4",
 "labyrinth": "https://www.youtube.com/watch?v=wc0kKlbhC-Y",
 "dameVideo": "https://www.youtube.com/watch?v=DSPy3bv5Yek",
 "koenigVideo": "https://www.youtube.com/watch?v=-_B-l6MULxU",
 "springerVideo": "https://www.youtube.com/watch?v=9nzY3wG0zY4",
 "fangSpringer": "https://www.youtube.com/watch?v=lyCmGN_bbvM",
 "koenigsrennen": "https://www.youtube.com/watch?v=A_k_JdwmI7g",
 "bauerVideo": "https://www.youtube.com/watch?v=4eeLF8g6xPw",
 "bauernGegenKoenig": "https://www.youtube.com/watch?v=e3eFR_N4ZEA",
 "figurenaufstellen": "https://www.youtube.com/watch?v=r5r3fYH6_WI",
 "punktespiel": "https://www.youtube.com/watch?v=TCasLqTc5LM"
};
export const FIXED={
 "1": {
  "thema": "Ankommen und kennenlernen: Kennenlernspiel, unsere AG-Regeln, Brett und Grundstellung",
  "lernziel": "Ich kenne die Regeln der AG, kann das Schachbrett richtig ausrichten und alle Figuren korrekt aufstellen.",
  "leitfrage": "Wie machen wir unser Schachbrett startklar?",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "AG-Konzept (Regeln und Rituale), Stundenentwürfe 1 und 8, Geschichte „Die Schachburg“, Ludgerus-Schachdiplom Bronze 1, Spielidee „Aufbau-Challenge“ (Deutsche Schulschachstiftung)",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Kennenlernspiel, Vorwissen, drei Regeln und das Stopp-Signal",
    "ablauf": [
     "Kennenlernspiel „Wer bin ich, welche Figur bin ich?“: Alle stehen im Kreis. Jedes Kind zieht blind eine Figur aus einem Beutel und sagt seinen Namen und die Figur. Wer möchte, macht eine passende Pose: Der König winkt königlich, der Turm steht stocksteif, der Springer hüpft. Alle antworten im Chor: „Hallo Mia, du Turm!“",
     "Vorwissen klären: „Welche Figuren kennt ihr schon? Wer kann das Brett schon aufbauen?“ Merke dir, wer schon viel kann. Diese Kinder sind in der Übung gute Partner.",
     "Drei Regeln besprechen: freundlich miteinander, sorgsam mit dem Material, beim Stopp-Signal aufhören. Stopp-Signal einmal üben: Du hebst den rechten Arm, alle heben den Arm, schauen nach vorn und lassen die Figuren los."
    ],
    "kinder": "Alle reagieren auf das Stopp-Signal.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Regeln und Rituale",
      "was": "regeln"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Brett richtig hinlegen, Grundstellung mit der Schachburg",
    "ablauf": [
     "Brett hinlegen: „Rechts unten ist hell.“ Alle prüfen ihr Brett.",
     "Erzähle die Schachburg als Merkgeschichte oder spiele sie ab. Die Kinder bauen zu zweit Figur für Figur mit, am Lehrbrett zeigst du B1 bis B6. Merksatz: „Rechts unten ist hell. Die Dame steht auf ihrer Farbe.“"
    ],
    "kinder": "Jedes Paar hat die Grundstellung richtig auf dem Brett.",
    "links": [
     {
      "art": "audio",
      "label": "Geschichte anhören"
     },
     {
      "art": "druck",
      "label": "Geschichte zum Vorlesen",
      "was": "geschichte"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Grundstellung aufbauen B1 bis B6",
      "set": "B"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Aufbauen und prüfen mit Rollenwechsel, Fehlersuche",
    "ablauf": [
     "Figuren abräumen. Kind A baut auf, Kind B prüft mit der Aufbaukarte. Danach wechseln die Rollen. Erfahrene Kinder bauen ohne Karte.",
     "Wer sicher ist, spielt die Aufbau-Challenge: Beide bauen gleichzeitig ihre Farbe auf. Wer zuerst richtig aufgebaut hat, gewinnt. Der Partner prüft, ein Fehler kostet den Sieg.",
     "Wer fertig ist, baut zwei Fehler ein, die der Partner findet und begründet.",
     "Zum Abschluss der Übung gemeinsam am Lehrbrett: Fehlersuche G1 bis G6. Frage bei jedem Fehler: „Woran erkennst du das?“"
    ],
    "kinder": "Jedes Kind hat einmal selbst aufgebaut und einmal geprüft.",
    "links": [
     {
      "art": "druck",
      "label": "Aufbaukarte (Hilfe)",
      "was": "aufbaukarte"
     },
     {
      "art": "video",
      "label": "Spielidee: Aufbau-Challenge (Video)",
      "url": "https://www.youtube.com/watch?v=zz0MdJ6aEg4"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler finden G1 bis G6",
      "set": "G"
     },
     {
      "art": "druck",
      "label": "Arbeitsblatt: Fehler in der Grundstellung (optional)",
      "was": "feld:G"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Häufigsten Fehler klären, Merksatz",
    "ablauf": [
     "Stopp-Signal. Frage: „Welcher Fehler ist euch passiert?“ Kläre den häufigsten Fehler am Lehrbrett, meist sind Dame und König vertauscht.",
     "Zwei oder drei Fragen zur Schachburg (S1 bis S6) mündlich stellen. Frage nach: „Woran erkennst du, dass die Dame richtig steht?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann sagen, woran ich eine richtige Grundstellung erkenne.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fragen zur Schachburg S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Allein aufbauen, du beobachtest",
    "ablauf": [
     "Aufbaukarten umdrehen. Kind A baut die Grundstellung ohne Vorlage auf, Kind B schaut nur zu. Danach wechseln die Rollen.",
     "Du gehst herum und notierst auf dem Beobachtungsbogen: Liegt das Brett richtig? Stehen alle Figuren richtig? Allein oder mit Hilfe? Bei Fehlern gibst du einen konkreten Tipp, zum Beispiel „Schau auf die Farbe unter deiner Dame“, und das Kind korrigiert.",
     "Optional für schnelle Kinder oder als Hausaufgabe: Lerncheck-Zettel L1 bis L6."
    ],
    "kinder": "Ich baue die Grundstellung ohne Vorlage auf.",
    "links": [
     {
      "art": "druck",
      "label": "Beobachtungsbogen",
      "was": "beobachtung"
     },
     {
      "art": "druck",
      "label": "Lerncheck-Zettel (optional)",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Rückblick, Aufräum-Ritual, Ausblick",
    "ablauf": [
     "Frage: „Was hilft dir beim Aufbauen?“ Zwei oder drei Kinder antworten.",
     "Aufräum-Ritual: Jedes Paar zählt 32 Figuren, je 16 pro Farbe, und sortiert sie ein. Ausblick: Nächstes Mal bekommen die Felder Namen, und wir spielen Schiffe versenken."
    ],
    "kinder": "Unser Brett ist vollständig aufgeräumt.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Regeln und Rituale (Aufräum-Ritual)",
      "was": "regeln"
     }
    ]
   }
  ],
  "geschichte": {
   "titel": "Die Schachburg",
   "text": [
    "Stell dir vor, unser Schachbrett ist eine Burg. Wo stehen bei einer Burg die Türme? Genau, in den Ecken. Deshalb stellen wir auch auf dem Schachbrett die Türme in die Ecken.",
    "In unserer Schachburg wohnen die Pferde in den Türmen. Darum stehen die Springer, unsere Pferde, direkt neben den Türmen.",
    "Wie bringt man in einer Burg schnell eine Nachricht von einem Ort zum anderen? Mit schnellen Läufern. Die Läufer stehen deshalb neben den Springern, immer bereit loszulaufen.",
    "Jetzt sind in der Mitte noch zwei Plätze frei. Dort wohnen die beiden, die in der Burg das Sagen haben: die Dame und der König. Die Dame steht auf ihrer eigenen Farbe. Die weiße Dame steht auf einem hellen Feld, die schwarze Dame auf einem dunklen.",
    "Alle Bewohner der Burg brauchen etwas zu essen. Dafür sorgen die Bauern. Weil viele satt werden müssen, gibt es acht Bauern. Sie stehen in einer Reihe direkt vor den anderen Figuren und beschützen die Burg."
   ],
   "hinweis": "Die Geschichte ist eine erfundene Merkhilfe, keine geschichtliche Erklärung."
  },
  "regeln": [
   "Wir gehen freundlich miteinander um und helfen uns.",
   "Wir gehen sorgsam mit Brettern und Figuren um.",
   "Beim Stopp-Signal hören wir auf und hören zu."
  ],
  "rituale": [
   [
    "Stopp-Signal",
    "Die Lehrkraft hebt den rechten Arm. Alle heben den Arm, schauen nach vorn, hören auf zu spielen und lassen die Figuren los."
   ],
   [
    "Aufbau-Ritual",
    "Rechts unten ist hell. Die Dame steht auf ihrer Farbe. Der Partner kontrolliert."
   ],
   [
    "Aufräum-Ritual",
    "Je 16 Figuren zählen, dann einsortieren."
   ]
  ],
  "audio": "assets/jahresplan/schachburg.mp3",
  "feld": {
   "B": [
    {
     "frage": "Die Burg wird gebaut. Wo stehen die Türme? Klicke die vier Felder an.",
     "fen": "8/8/8/8/8/8/8/8",
     "leer": true,
     "targets": [
      "a1",
      "h1",
      "a8",
      "h8"
     ],
     "antwort": "In den Ecken: a1, h1, a8 und h8.",
     "hilfe": [
      "Wo stehen bei einer Burg die Türme?",
      "In den Ecken."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    },
    {
     "frage": "Die Türme stehen. Wo stehen die Springer, unsere Pferde?",
     "fen": "r6r/8/8/8/8/8/8/R6R",
     "leer": true,
     "targets": [
      "b1",
      "g1",
      "b8",
      "g8"
     ],
     "antwort": "Direkt neben den Türmen: b1, g1, b8 und g8.",
     "hilfe": [
      "Die Pferde wohnen in den Türmen.",
      "Sie stehen direkt daneben."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    },
    {
     "frage": "Wo stehen die Läufer, die schnell Nachrichten bringen?",
     "fen": "rn4nr/8/8/8/8/8/8/RN4NR",
     "leer": true,
     "targets": [
      "c1",
      "f1",
      "c8",
      "f8"
     ],
     "antwort": "Neben den Springern: c1, f1, c8 und f8.",
     "hilfe": [
      "Sie stehen neben den Springern.",
      "Je zwei Läufer pro Farbe."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    },
    {
     "frage": "Wo stehen die beiden Damen? Denk an ihre Farbe.",
     "fen": "rnb2bnr/8/8/8/8/8/8/RNB2BNR",
     "leer": true,
     "targets": [
      "d1",
      "d8"
     ],
     "antwort": "d1 (hell) und d8 (dunkel). Die Dame steht auf ihrer Farbe.",
     "hilfe": [
      "Die Dame steht auf ihrer Farbe.",
      "Die weiße Dame auf hell, die schwarze auf dunkel."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    },
    {
     "frage": "Wo stehen die Könige?",
     "fen": "rnbq1bnr/8/8/8/8/8/8/RNBQ1BNR",
     "leer": true,
     "targets": [
      "e1",
      "e8"
     ],
     "antwort": "Auf den letzten freien Feldern: e1 und e8.",
     "hilfe": [
      "Es ist nur noch ein Platz pro Seite frei.",
      "Der König steht neben der Dame."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    },
    {
     "frage": "Wer sorgt für das Essen? Markiere die Felder aller Bauern.",
     "fen": "rnbqkbnr/8/8/8/8/8/8/RNBQKBNR",
     "leer": true,
     "targets": [
      "a2",
      "b2",
      "c2",
      "d2",
      "e2",
      "f2",
      "g2",
      "h2",
      "a7",
      "b7",
      "c7",
      "d7",
      "e7",
      "f7",
      "g7",
      "h7"
     ],
     "antwort": "Die Bauern stehen auf der 2. Reihe (Weiß) und der 7. Reihe (Schwarz), je acht.",
     "hilfe": [
      "Sie stehen vor den anderen Figuren.",
      "Tipp: Klicke auf die Zahlen 2 und 7 am Rand."
     ],
     "quelle": "Geschichte „Die Schachburg“"
    }
   ],
   "G": [
    {
     "frage": "Wurde das Brett richtig hingelegt? Klicke das Eckfeld an, an dem du es erkennst.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "flip": true,
     "targets": [
      "h1"
     ],
     "antwort": "Nein. Rechts unten (h1) ist ein dunkles Feld. Das Brett muss gedreht werden, denn rechts unten ist hell.",
     "hilfe": [
      "Schau auf das Feld rechts unten.",
      "Merksatz: Rechts unten ist hell."
     ]
    },
    {
     "frage": "Hier stimmt etwas nicht. Klicke alle Figuren an, die falsch stehen.",
     "fen": "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR",
     "targets": [
      "d1",
      "e1",
      "d8",
      "e8"
     ],
     "antwort": "Dame und König sind vertauscht, bei Weiß und bei Schwarz. Die Dame steht auf ihrer Farbe: Die weiße Dame gehört auf d1, die schwarze auf d8.",
     "hilfe": [
      "Schau in die Mitte der Grundreihen.",
      "Die Dame steht auf ihrer Farbe."
     ]
    },
    {
     "frage": "Zwei Figurenarten haben ihre Plätze getauscht. Klicke alle vertauschten Figuren an.",
     "fen": "rbnqknbr/pppppppp/8/8/8/8/PPPPPPPP/RBNQKNBR",
     "targets": [
      "b1",
      "c1",
      "f1",
      "g1",
      "b8",
      "c8",
      "f8",
      "g8"
     ],
     "antwort": "Läufer und Springer sind vertauscht. Die Springer gehören neben die Türme, die Läufer neben die Springer.",
     "hilfe": [
      "Wer wohnt in der Burg direkt neben den Türmen?",
      "Die Pferde (Springer) stehen neben den Türmen."
     ]
    },
    {
     "frage": "Ist hier alles richtig? Wenn nicht, klicke die Fehler an. Wenn alles stimmt, drücke „Prüfen“ ohne Markierung.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [],
     "antwort": "Alles richtig. Rechts unten ist hell, die Dame steht auf ihrer Farbe.",
     "hilfe": [
      "Prüfe zuerst das Feld rechts unten.",
      "Prüfe dann Dame und König."
     ]
    },
    {
     "frage": "Hier fehlt eine Figur. Klicke das leere Feld an, auf dem sie stehen müsste.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPP1PPP/RNBQKBNR",
     "leer": true,
     "targets": [
      "e2"
     ],
     "antwort": "Auf e2 fehlt ein weißer Bauer. Jede Seite hat acht Bauern.",
     "hilfe": [
      "Zähle die Bauern beider Farben.",
      "Schau auf die 2. Reihe."
     ]
    },
    {
     "frage": "Hier steht eine Figur zu viel. Klicke sie an.",
     "fen": "rnbqkbnr/pppppppp/8/8/2B5/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "c4"
     ],
     "antwort": "Der weiße Läufer auf c4 ist zu viel. In der Grundstellung stehen alle Figuren auf den Reihen 1, 2, 7 und 8.",
     "hilfe": [
      "In der Grundstellung ist die Mitte leer.",
      "Schau auf die Reihen 3 bis 6."
     ]
    }
   ],
   "S": [
    {
     "frage": "Die Türme stehen in den Ecken der Burg. Klicke die beiden Türme an, die auf einem hellen Feld stehen.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "h1",
      "a8"
     ],
     "antwort": "h1 und a8. Die Türme auf a1 und h8 stehen auf dunklen Feldern.",
     "hilfe": [
      "Es gibt vier Türme.",
      "Rechts unten ist hell."
     ]
    },
    {
     "frage": "Die Pferde wohnen in den Türmen. Klicke den Springer an, der neben dem Turm auf h1 steht.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "g1"
     ],
     "antwort": "Der Springer auf g1.",
     "hilfe": [
      "Pferde heißen im Schach Springer.",
      "Schau direkt neben h1."
     ]
    },
    {
     "frage": "Klicke die beiden schwarzen Läufer an, die Nachrichten durch die Burg bringen.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "c8",
      "f8"
     ],
     "antwort": "c8 und f8. Sie stehen neben den Springern.",
     "hilfe": [
      "Schwarz steht oben.",
      "Die Läufer stehen neben den Springern."
     ]
    },
    {
     "frage": "Wer hat das Sagen? Klicke die Dame an, die auf einem dunklen Feld steht.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "d8"
     ],
     "antwort": "Die schwarze Dame auf d8. Die Dame steht auf ihrer Farbe.",
     "hilfe": [
      "Die Dame steht auf ihrer Farbe.",
      "Die schwarze Dame steht auf einem dunklen Feld."
     ]
    },
    {
     "frage": "Wie viele Bauern sorgen bei Weiß für das Essen? Klicke sie alle an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "a2",
      "b2",
      "c2",
      "d2",
      "e2",
      "f2",
      "g2",
      "h2"
     ],
     "antwort": "Acht Bauern auf der 2. Reihe, weil viele satt werden müssen.",
     "hilfe": [
      "Sie stehen vor den anderen Figuren.",
      "Tipp: Klicke auf die Zahl 2 am Rand."
     ]
    },
    {
     "frage": "Die Bauern beschützen die Burg. Welche beiden Bauern stehen direkt vor den Königen? Klicke sie an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "e2",
      "e7"
     ],
     "antwort": "Die Bauern auf e2 und e7.",
     "hilfe": [
      "Suche zuerst die Könige.",
      "Die Könige stehen auf der e-Linie."
     ]
    }
   ],
   "L": [
    {
     "frage": "Klicke alle Figuren an, die falsch stehen.",
     "fen": "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "d8",
      "e8"
     ],
     "antwort": "Bei Schwarz sind Dame und König vertauscht. Die schwarze Dame gehört auf das dunkle Feld d8.",
     "hilfe": [
      "Vergleiche Weiß und Schwarz.",
      "Die Dame steht auf ihrer Farbe."
     ]
    },
    {
     "frage": "Zeige e4, a8 und g2.",
     "targets": [
      "e4",
      "a8",
      "g2"
     ],
     "antwort": "e4: Linie e, Reihe 4. a8: oben links. g2: Linie g, Reihe 2.",
     "hilfe": [
      "Erst der Buchstabe, dann die Zahl.",
      "a8 liegt in einer Ecke."
     ]
    },
    {
     "frage": "Wo stehen die Läufer? Klicke alle vier Läufer an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "c1",
      "f1",
      "c8",
      "f8"
     ],
     "antwort": "c1, f1, c8 und f8. Sie stehen neben den Springern.",
     "hilfe": [
      "Die Läufer bringen Nachrichten.",
      "Sie stehen neben den Springern."
     ]
    },
    {
     "frage": "Markiere die 3. Reihe.",
     "targets": [
      "a3",
      "b3",
      "c3",
      "d3",
      "e3",
      "f3",
      "g3",
      "h3"
     ],
     "antwort": "a3 bis h3.",
     "hilfe": [
      "Eine Reihe liegt waagerecht.",
      "Klicke auf die Zahl 3 am Rand."
     ]
    },
    {
     "frage": "Markiere die lange Diagonale von h1 nach a8.",
     "targets": [
      "h1",
      "g2",
      "f3",
      "e4",
      "d5",
      "c6",
      "b7",
      "a8"
     ],
     "antwort": "h1, g2, f3, e4, d5, c6, b7, a8. Alle Felder sind hell.",
     "hilfe": [
      "Eine Diagonale läuft schräg.",
      "Von h1 immer ein Feld nach links und eins nach oben."
     ]
    },
    {
     "frage": "Markiere die c-Linie.",
     "targets": [
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8"
     ],
     "antwort": "c1 bis c8.",
     "hilfe": [
      "Eine Linie steht senkrecht.",
      "Klicke auf das c am Rand."
     ]
    }
   ]
  },
  "hinweise": {
   "hilfe": "Aufbaukarte benutzen.",
   "zusatz": "Zwei Fehler einbauen, die der Partner findet und begründet.",
   "kuerzen": "Die Fehlersuche am Lehrbrett auf G1 bis G3 kürzen, die Aufbau-Challenge entfällt. Lerncheck und Aufräum-Ritual bleiben."
  },
  "regelnSpaeter": "Sobald wir Partien spielen, kommt dazu: Berührt, geführt. Losgelassen ist gezogen. Vor und nach jeder Partie geben wir uns die Hand.",
  "vorwissen": "Keins. Manche Kinder kennen die Figuren schon.",
  "nachher": "Wer baut noch mit Aufbaukarte auf? Welche Fehler kamen oft vor, zum Beispiel Brett gedreht oder Dame und König vertauscht? Diese Kinder prüfst du in Woche 2 beim Aufbau-Ritual zuerst."
 },
 "2": {
  "thema": "Felder haben Namen: Linien, Reihen und Diagonalen, Schiffe versenken",
  "lernziel": "Ich kann jedes Feld auf dem Schachbrett schnell finden und richtig benennen.",
  "leitfrage": "Wie finde ich jedes Feld schnell, und wie sage ich anderen genau, welches Feld ich meine?",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Erklärvideo „Schach erklärt: Das Schachbrett“ (Deutsche Schulschachstiftung), Arbeitsheft Schachbrett, Stundenentwurf 1, Schiffe versenken mit Schachfiguren und „Königliche Rettung“ (nach einer Idee von Walter Rädler), Training Feldraten, Spielidee „Schiffe versenken“ als Video (Deutsche Schulschachstiftung)",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Aufbau-Ritual, Felder auf Zuruf",
    "ablauf": [
     "Stopp-Signal und Aufbau-Ritual wiederholen: Jedes Paar baut die Grundstellung auf, der Partner prüft.",
     "Felder auf Zuruf: Du nennst ein Feld, die Kinder zeigen es mit dem Finger. Dann zeigst du am Lehrbrett W1 bis W6, die Kinder rufen den Namen."
    ],
    "kinder": "Ich zeige ein genanntes Feld und nenne den Namen eines gezeigten Feldes.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Erklärvideo: Linien, Reihen, Diagonalen",
    "ablauf": [
     "Erklärvideo „Das Schachbrett“ zeigen.",
     "Danach am Lehrbrett A1 bis A6 gemeinsam: Feldnamen, Reihe, Linie, Eckfelder. Merksatz: „Erst der Buchstabe, dann die Zahl.“"
    ],
    "kinder": "Ich kann Linie, Reihe und Diagonale zeigen.",
    "links": [
     {
      "art": "video",
      "label": "Erklärvideo „Das Schachbrett“",
      "url": "https://www.youtube.com/watch?v=vKapJK-OoNc"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Schachbrett A1 bis A6",
      "set": "A",
      "von": 1,
      "bis": 6
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Schiffe versenken zu zweit",
    "ablauf": [
     "Regeln kurz erklären: Jedes Kind versteckt drei Figuren als Schiffe, einen Bauern, einen Läufer (vier Felder lang) und einen Springer (seine Zielfelder als Kreise). Zwischen zwei Figuren bleibt ein Feld frei.",
     "Abwechselnd ein Feld ansagen, zum Beispiel „e4“. Treffer: X und noch einmal. Wasser: W, dann ist der andere dran. „Figur versenkt!“, wenn alle Felder getroffen sind.",
     "Zweite Runde: Danach wechseln die Rollen, das andere Kind sagt zuerst an.",
     "Zum Schluss der Übung spielen alle gemeinsam gegen dich die Variante „Königliche Rettung“ am Lehrbrett: Der König versteckt sich auf einem Feld. Die Kinder stellen nacheinander Ja/Nein-Fragen, zum Beispiel „Steht der König auf dem Damenflügel?“, und streichen nach jeder Antwort die Felder, auf denen er nicht sein kann. Ziel: den König mit möglichst wenigen Fragen finden.",
     "Frage nach guten Fragen: „Warum streicht diese Frage so viele Felder auf einmal?“"
    ],
    "kinder": "Ich sage jedes Feld richtig an.",
    "links": [
     {
      "art": "blatt",
      "label": "Arbeitsblatt Schiffe versenken (PDF)",
      "url": "https://schachkicker.de/wp-content/uploads/2025/10/Schiffe-versenken-mit-Schachfiguren.pdf"
     },
     {
      "art": "video",
      "label": "Spielidee: Schiffe versenken (Video)",
      "url": "https://www.youtube.com/watch?v=4Kh3sRBwY4Q"
     },
     {
      "art": "spiel",
      "label": "Lehrbrett: Königliche Rettung (alle gegen die Lehrkraft)",
      "was": "rettung"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Arbeitsheft Schachbrett",
    "ablauf": [
     "Die Kinder lösen das Arbeitsheft Schachbrett, allein oder zu zweit.",
     "Vergleich am Lehrbrett mit A7 bis A12. Frage nach: „Woran erkennst du, ob Felder auf einer Linie oder auf einer Reihe liegen?“"
    ],
    "kinder": "Mein Arbeitsheft ist gelöst und verglichen.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsheft Schachbrett",
      "was": "arbeitsheft"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsheft A7 bis A12",
      "set": "A",
      "von": 7,
      "bis": 12
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein. Danach zeigst du die Lösungen am Lehrbrett."
    ],
    "kinder": "Ich finde und benenne Felder ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Feldraten-Blitzrunde und Aufräumen",
    "ablauf": [
     "Blitzrunde mit dem Training Feldraten am Beamer: Ein Feld erscheint, die ganze Gruppe ruft den Namen.",
     "Aufräum-Ritual. Ausblick: Nächstes Mal ziehen die ersten Figuren, der Turm und der Läufer."
    ],
    "kinder": "Unser Brett ist vollständig aufgeräumt.",
    "links": [
     {
      "art": "blatt",
      "label": "Training Feldraten",
      "url": "https://edmundbruns.github.io/feldraten/"
     }
    ]
   }
  ],
  "feld": {
   "W": [
    {
     "frage": "Zeige e4.",
     "targets": [
      "e4"
     ],
     "antwort": "e4: Linie e, Reihe 4.",
     "hilfe": [
      "Suche unten den Buchstaben e.",
      "Gehe dann hoch bis Reihe 4."
     ],
     "quelle": "Stundenentwurf 1 (Felder auf Zuruf)"
    },
    {
     "frage": "Zeige das Feld oben rechts. Wie heißt es, welche Farbe hat es?",
     "targets": [
      "h8"
     ],
     "antwort": "h8. Es ist dunkel.",
     "hilfe": [
      "Oben ist Reihe 8.",
      "Rechts ist die h-Linie."
     ],
     "quelle": "Stundenentwurf 1 (Felder auf Zuruf)"
    },
    {
     "frage": "Wo kreuzen sich die b-Linie und die 6. Reihe? Zeige das Feld.",
     "targets": [
      "b6"
     ],
     "antwort": "b6.",
     "hilfe": [
      "Gehe die b-Linie hoch.",
      "Halte bei Reihe 6 an."
     ],
     "quelle": "Stundenentwurf 1 (Felder auf Zuruf)"
    },
    {
     "frage": "Welches Feld liegt genau zwischen c3 und e3? Zeige es.",
     "targets": [
      "d3"
     ],
     "antwort": "d3. Es liegt in derselben Reihe zwischen c3 und e3.",
     "hilfe": [
      "Alle drei Felder liegen in Reihe 3.",
      "Zwischen c und e liegt d."
     ],
     "quelle": "Stundenentwurf 1 (Felder auf Zuruf)"
    },
    {
     "frage": "Markiere die 4. Reihe.",
     "targets": [
      "a4",
      "b4",
      "c4",
      "d4",
      "e4",
      "f4",
      "g4",
      "h4"
     ],
     "antwort": "a4 bis h4.",
     "hilfe": [
      "Eine Reihe liegt waagerecht.",
      "Klicke auf die Zahl 4 am Rand."
     ],
     "quelle": "Stundenentwurf 1 (Linien und Reihen)"
    },
    {
     "frage": "Markiere die b-Linie.",
     "targets": [
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8"
     ],
     "antwort": "b1 bis b8.",
     "hilfe": [
      "Eine Linie steht senkrecht.",
      "Klicke auf das b am Rand."
     ],
     "quelle": "Stundenentwurf 1 (Linien und Reihen)"
    }
   ],
   "L": [
    {
     "frage": "Markiere c7, d1 und e6.",
     "targets": [
      "c7",
      "d1",
      "e6"
     ],
     "antwort": "c7, d1 und e6.",
     "hilfe": [
      "Erst der Buchstabe, dann die Zahl.",
      "d1 liegt in der untersten Reihe."
     ]
    },
    {
     "frage": "Markiere die e-Linie.",
     "targets": [
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8"
     ],
     "antwort": "e1 bis e8.",
     "hilfe": [
      "Eine Linie steht senkrecht.",
      "Klicke auf das e am Rand."
     ]
    },
    {
     "frage": "Markiere die 5. Reihe.",
     "targets": [
      "a5",
      "b5",
      "c5",
      "d5",
      "e5",
      "f5",
      "g5",
      "h5"
     ],
     "antwort": "a5 bis h5.",
     "hilfe": [
      "Eine Reihe liegt waagerecht.",
      "Klicke auf die 5 am Rand."
     ]
    },
    {
     "frage": "Markiere alle hellen Felder der 8. Reihe.",
     "targets": [
      "a8",
      "c8",
      "e8",
      "g8"
     ],
     "antwort": "a8, c8, e8 und g8.",
     "hilfe": [
      "h8 ist dunkel.",
      "Hell und dunkel wechseln sich ab."
     ]
    },
    {
     "frage": "Welche Felder liegen links und rechts direkt neben e5? Markiere beide.",
     "targets": [
      "d5",
      "f5"
     ],
     "antwort": "d5 links, f5 rechts.",
     "hilfe": [
      "Links und rechts bleibt die Zahl gleich.",
      "Der Buchstabe ändert sich um eins."
     ]
    },
    {
     "frage": "Markiere die kurze Diagonale von a3 nach c1.",
     "targets": [
      "a3",
      "b2",
      "c1"
     ],
     "antwort": "a3, b2, c1.",
     "hilfe": [
      "Eine Diagonale läuft schräg.",
      "Von a3 immer ein Feld nach rechts und eins nach unten."
     ]
    }
   ],
   "A": [
    {
     "frage": "Zeige f7 und b4. Erst kommt der Buchstabe, dann die Zahl.",
     "targets": [
      "f7",
      "b4"
     ],
     "antwort": "f7: Linie f, Reihe 7. b4: Linie b, Reihe 4.",
     "hilfe": [
      "Suche zuerst den Buchstaben unten am Rand.",
      "Gehe dann nach oben bis zur Zahl."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 1"
    },
    {
     "frage": "Markiere die 7. Reihe.",
     "targets": [
      "a7",
      "b7",
      "c7",
      "d7",
      "e7",
      "f7",
      "g7",
      "h7"
     ],
     "antwort": "Die 7. Reihe geht waagerecht von a7 bis h7.",
     "hilfe": [
      "Eine Reihe liegt waagerecht.",
      "Tipp: Klicke auf die Zahl 7 am Rand."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 2"
    },
    {
     "frage": "Markiere die g-Linie.",
     "targets": [
      "g1",
      "g2",
      "g3",
      "g4",
      "g5",
      "g6",
      "g7",
      "g8"
     ],
     "antwort": "Die g-Linie geht senkrecht von g1 bis g8.",
     "hilfe": [
      "Eine Linie steht senkrecht.",
      "Tipp: Klicke auf den Buchstaben g am Rand."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 2"
    },
    {
     "frage": "Zeige das Feld rechts unten. Welche Farbe hat es?",
     "targets": [
      "h1"
     ],
     "antwort": "h1. Es ist hell, denn rechts unten ist hell.",
     "hilfe": [
      "Rechts unten liegt eine Ecke.",
      "Merksatz: Rechts unten ist hell."
     ],
     "quelle": "Ludgerus-Schachdiplom Bronze 1, Aufgabe 3"
    },
    {
     "frage": "Markiere die vier Eckfelder des Brettes.",
     "targets": [
      "a1",
      "h1",
      "a8",
      "h8"
     ],
     "antwort": "a1, h1, a8 und h8.",
     "hilfe": [
      "Ein Brett hat vier Ecken.",
      "Die Ecken liegen auf der a- und h-Linie."
     ],
     "quelle": "Ludgerus-Schachdiplom Bronze 1, Aufgabe 6"
    },
    {
     "frage": "Wo kreuzen sich die d-Linie und die 5. Reihe? Zeige das Feld.",
     "targets": [
      "d5"
     ],
     "antwort": "d5. Das Feld gehört zum Zentrum.",
     "hilfe": [
      "Gehe die d-Linie hoch.",
      "Halte bei Reihe 5 an."
     ],
     "quelle": "Erklärvideo „Das Schachbrett“ (Linie und Reihe)"
    },
    {
     "frage": "Markiere das Zentrum.",
     "targets": [
      "d4",
      "e4",
      "d5",
      "e5"
     ],
     "antwort": "Das Zentrum sind die vier mittleren Felder d4, e4, d5 und e5.",
     "hilfe": [
      "Das Zentrum liegt genau in der Mitte.",
      "Es sind vier Felder."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 3"
    },
    {
     "frage": "Markiere die Diagonale von a5 nach d8.",
     "targets": [
      "a5",
      "b6",
      "c7",
      "d8"
     ],
     "antwort": "a5, b6, c7, d8. Eine Diagonale läuft schräg über Felder gleicher Farbe.",
     "hilfe": [
      "Eine Diagonale läuft schräg.",
      "Von a5 aus immer ein Feld nach rechts und eins nach oben."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 3"
    },
    {
     "frage": "Markiere den Damenflügel.",
     "targets": [
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8"
     ],
     "antwort": "Der Damenflügel sind die a- bis d-Linie. Dort steht am Anfang die Dame.",
     "hilfe": [
      "Der Flügel hat seinen Namen von der Figur, die dort am Anfang steht.",
      "Tipp: Klicke auf die Buchstaben a, b, c und d am Rand."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 4"
    },
    {
     "frage": "Zeichne das Zentrum, vier Diagonalen, eine Reihe und zwei Linien ein. Benenne sie.",
     "targets": null,
     "antwort": "Offene Aufgabe: Jedes Kind zeigt und benennt seine Auswahl, zum Beispiel Zentrum d4, e4, d5, e5; Diagonale a1 bis h8; 3. Reihe; c-Linie und f-Linie.",
     "hilfe": [
      "Zentrum: die vier mittleren Felder.",
      "Reihe waagerecht, Linie senkrecht, Diagonale schräg."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 5"
    },
    {
     "frage": "Markiere a2, b6, h3, g5, f8, c4, c7, d1 und e6. Wie heißen die vier Zentrumsfelder?",
     "targets": [
      "a2",
      "b6",
      "h3",
      "g5",
      "f8",
      "c4",
      "c7",
      "d1",
      "e6"
     ],
     "antwort": "Die neun Felder sind markiert. Die Zentrumsfelder heißen d4, e4, d5 und e5.",
     "hilfe": [
      "Erst der Buchstabe, dann die Zahl.",
      "Arbeite die Liste Feld für Feld ab."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 6"
    },
    {
     "frage": "Welche Felder der 1. Reihe gehören zum Königsflügel? Markiere sie.",
     "targets": [
      "e1",
      "f1",
      "g1",
      "h1"
     ],
     "antwort": "e1, f1, g1 und h1. Der Königsflügel sind die e- bis h-Linie.",
     "hilfe": [
      "Der Königsflügel liegt auf der Seite des Königs.",
      "Er umfasst die e- bis h-Linie."
     ],
     "quelle": "Arbeitsheft Schachbrett, Seite 4 (Königsflügel)"
    }
   ]
  },
  "hinweise": {
   "hilfe": "Mit dem Finger erst den Buchstaben unten, dann die Zahl am Rand suchen.",
   "zusatz": "Eigene Ja/Nein-Fragen erfinden, die genau die Hälfte der Felder streichen. Oder Aufgabe 1 im Arbeitsheft mit eigenen Diagonalen.",
   "kuerzen": "Die Feldraten-Blitzrunde entfällt, der Vergleich am Lehrbrett wird auf A7 bis A9 gekürzt. Lerncheck und Aufräumen bleiben."
  },
  "arbeitsheft": [
   {
    "titel": "Das Schachbrett",
    "label": {
     "f7": "f7",
     "b4": "b4"
    },
    "fill": {
     "f7": "rgba(236,206,40,.72)",
     "b4": "rgba(236,206,40,.72)"
    },
    "text": "Jedes Feld auf dem Schachbrett hat eine bestimmte Bezeichnung. Sie ergibt sich aus den Koordinaten am Rand. Es wird immer erst der Buchstabe und dann die Zahl genannt."
   },
   {
    "titel": "Reihen und Linien",
    "fill": {
     "a7": "rgba(236,206,40,.72)",
     "b7": "rgba(236,206,40,.72)",
     "c7": "rgba(236,206,40,.72)",
     "d7": "rgba(236,206,40,.72)",
     "e7": "rgba(236,206,40,.72)",
     "f7": "rgba(236,206,40,.72)",
     "g7": "rgba(236,206,40,.72)",
     "h7": "rgba(236,206,40,.72)",
     "g1": "rgba(236,206,40,.72)",
     "g2": "rgba(236,206,40,.72)",
     "g3": "rgba(236,206,40,.72)",
     "g4": "rgba(236,206,40,.72)",
     "g5": "rgba(236,206,40,.72)",
     "g6": "rgba(236,206,40,.72)",
     "g8": "rgba(236,206,40,.72)"
    },
    "label": {
     "d7": "7. Reihe",
     "g4": "g-Linie"
    },
    "text": "Ein Schachbrett besteht aus 8 Reihen (1 bis 8) und 8 Linien (a bis h). Hier sind die 7. Reihe und die g-Linie markiert."
   },
   {
    "titel": "Zentrum und Diagonalen",
    "fill": {
     "d4": "rgba(236,206,40,.72)",
     "e4": "rgba(236,206,40,.72)",
     "d5": "rgba(236,206,40,.72)",
     "e5": "rgba(236,206,40,.72)",
     "a5": "rgba(236,206,40,.72)",
     "b6": "rgba(236,206,40,.72)",
     "c7": "rgba(236,206,40,.72)",
     "d8": "rgba(236,206,40,.72)",
     "f8": "rgba(236,206,40,.72)",
     "g7": "rgba(236,206,40,.72)",
     "h6": "rgba(236,206,40,.72)"
    },
    "label": {
     "e4": "Zentrum",
     "a5": "a5",
     "d8": "d8",
     "f8": "f8",
     "h6": "h6"
    },
    "text": "Neben den Reihen und Linien gibt es das Zentrum (d4, e4, d5, e5) und verschiedene Diagonalen, hier a5 bis d8 und f8 bis h6."
   },
   {
    "titel": "Damenflügel und Königsflügel",
    "fill": {
     "a1": "rgba(236,206,40,.72)",
     "a2": "rgba(236,206,40,.72)",
     "a3": "rgba(236,206,40,.72)",
     "a4": "rgba(236,206,40,.72)",
     "a5": "rgba(236,206,40,.72)",
     "a6": "rgba(236,206,40,.72)",
     "a7": "rgba(236,206,40,.72)",
     "a8": "rgba(236,206,40,.72)",
     "b1": "rgba(236,206,40,.72)",
     "b2": "rgba(236,206,40,.72)",
     "b3": "rgba(236,206,40,.72)",
     "b4": "rgba(236,206,40,.72)",
     "b5": "rgba(236,206,40,.72)",
     "b6": "rgba(236,206,40,.72)",
     "b7": "rgba(236,206,40,.72)",
     "b8": "rgba(236,206,40,.72)",
     "c1": "rgba(236,206,40,.72)",
     "c2": "rgba(236,206,40,.72)",
     "c3": "rgba(236,206,40,.72)",
     "c4": "rgba(236,206,40,.72)",
     "c5": "rgba(236,206,40,.72)",
     "c6": "rgba(236,206,40,.72)",
     "c7": "rgba(236,206,40,.72)",
     "c8": "rgba(236,206,40,.72)",
     "d1": "rgba(236,206,40,.72)",
     "d2": "rgba(236,206,40,.72)",
     "d3": "rgba(236,206,40,.72)",
     "d4": "rgba(236,206,40,.72)",
     "d5": "rgba(236,206,40,.72)",
     "d6": "rgba(236,206,40,.72)",
     "d7": "rgba(236,206,40,.72)",
     "d8": "rgba(236,206,40,.72)",
     "e1": "rgba(40,150,110,.6)",
     "e2": "rgba(40,150,110,.6)",
     "e3": "rgba(40,150,110,.6)",
     "e4": "rgba(40,150,110,.6)",
     "e5": "rgba(40,150,110,.6)",
     "e6": "rgba(40,150,110,.6)",
     "e7": "rgba(40,150,110,.6)",
     "e8": "rgba(40,150,110,.6)",
     "f1": "rgba(40,150,110,.6)",
     "f2": "rgba(40,150,110,.6)",
     "f3": "rgba(40,150,110,.6)",
     "f4": "rgba(40,150,110,.6)",
     "f5": "rgba(40,150,110,.6)",
     "f6": "rgba(40,150,110,.6)",
     "f7": "rgba(40,150,110,.6)",
     "f8": "rgba(40,150,110,.6)",
     "g1": "rgba(40,150,110,.6)",
     "g2": "rgba(40,150,110,.6)",
     "g3": "rgba(40,150,110,.6)",
     "g4": "rgba(40,150,110,.6)",
     "g5": "rgba(40,150,110,.6)",
     "g6": "rgba(40,150,110,.6)",
     "g7": "rgba(40,150,110,.6)",
     "g8": "rgba(40,150,110,.6)",
     "h1": "rgba(40,150,110,.6)",
     "h2": "rgba(40,150,110,.6)",
     "h3": "rgba(40,150,110,.6)",
     "h4": "rgba(40,150,110,.6)",
     "h5": "rgba(40,150,110,.6)",
     "h6": "rgba(40,150,110,.6)",
     "h7": "rgba(40,150,110,.6)",
     "h8": "rgba(40,150,110,.6)"
    },
    "label": {
     "b4": "Damenflügel",
     "f4": "Königsflügel"
    },
    "text": "Das Schachbrett ist unterteilt in den Damenflügel (a- bis d-Linie) und den Königsflügel (e- bis h-Linie)."
   },
   {
    "titel": "Aufgabe 1",
    "aufgabe": true,
    "text": "Zeichne das Zentrum, vier Diagonalen, eine Reihe und zwei Linien ein und benenne sie.",
    "loesung": {
     "fill": {
      "d4": "rgba(236,206,40,.72)",
      "e4": "rgba(236,206,40,.72)",
      "d5": "rgba(236,206,40,.72)",
      "e5": "rgba(236,206,40,.72)",
      "a3": "rgba(236,206,40,.72)",
      "b3": "rgba(236,206,40,.72)",
      "c3": "rgba(236,206,40,.72)",
      "d3": "rgba(236,206,40,.72)",
      "e3": "rgba(236,206,40,.72)",
      "f3": "rgba(236,206,40,.72)",
      "g3": "rgba(236,206,40,.72)",
      "h3": "rgba(236,206,40,.72)",
      "c1": "rgba(236,206,40,.72)",
      "c2": "rgba(236,206,40,.72)",
      "c4": "rgba(236,206,40,.72)",
      "c5": "rgba(236,206,40,.72)",
      "c6": "rgba(236,206,40,.72)",
      "c7": "rgba(236,206,40,.72)",
      "c8": "rgba(236,206,40,.72)",
      "f1": "rgba(236,206,40,.72)",
      "f2": "rgba(236,206,40,.72)",
      "f4": "rgba(236,206,40,.72)",
      "f5": "rgba(236,206,40,.72)",
      "f6": "rgba(236,206,40,.72)",
      "f7": "rgba(236,206,40,.72)",
      "f8": "rgba(236,206,40,.72)"
     },
     "text": "Beispiel: Zentrum d4, e4, d5, e5; 3. Reihe; c-Linie und f-Linie; Diagonalen zum Beispiel a1 bis h8, h1 bis a8, a5 bis d8, f8 bis h6. Jede richtige Auswahl zählt."
    }
   },
   {
    "titel": "Aufgabe 2",
    "aufgabe": true,
    "text": "Markiere folgende Felder: a2, b6, h3, g5, f8, c4, c7, d1, e6. Benenne die vier Zentrumsfelder.",
    "loesung": {
     "fill": {
      "a2": "rgba(236,206,40,.72)",
      "b6": "rgba(236,206,40,.72)",
      "h3": "rgba(236,206,40,.72)",
      "g5": "rgba(236,206,40,.72)",
      "f8": "rgba(236,206,40,.72)",
      "c4": "rgba(236,206,40,.72)",
      "c7": "rgba(236,206,40,.72)",
      "d1": "rgba(236,206,40,.72)",
      "e6": "rgba(236,206,40,.72)"
     },
     "label": {
      "a2": "a2",
      "b6": "b6",
      "h3": "h3",
      "g5": "g5",
      "f8": "f8",
      "c4": "c4",
      "c7": "c7",
      "d1": "d1",
      "e6": "e6"
     },
     "text": "Die Zentrumsfelder heißen d4, e4, d5 und e5."
    }
   }
  ],
  "rituale": [
   [
    "Stopp-Signal",
    "Die Lehrkraft hebt den rechten Arm. Alle heben den Arm, schauen nach vorn, hören auf zu spielen und lassen die Figuren los."
   ],
   [
    "Aufbau-Ritual",
    "Rechts unten ist hell. Die Dame steht auf ihrer Farbe. Der Partner kontrolliert."
   ],
   [
    "Aufräum-Ritual",
    "Je 16 Figuren zählen, dann einsortieren."
   ]
  ],
  "vorwissen": "Grundstellung und Merksatz „Rechts unten ist hell“ (Woche 1).",
  "nachher": "Wer nennt noch die Zahl zuerst oder verwechselt Linie und Reihe? Diese Kinder sagen in Woche 3 die Zielfelder für Turm und Läufer an."
 },
 "3": {
  "thema": "Turm und Läufer",
  "lernziel": "Ich kann mit Turm und Läufer regelgerecht ziehen und schlagen.",
  "leitfrage": "Wohin darf der Turm ziehen, wohin der Läufer, und was hält sie auf?",
  "vorwissen": "Feldnamen, Linie, Reihe und Diagonale (Woche 2).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Erklärvideos „Schach erklärt: Der Turm“ und „Schach erklärt: Der Läufer“, Minispiel „Turm: Steinchen“ und „Labyrinth“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Wo stehen Turm und Läufer? Linie, Reihe, Diagonale",
    "ablauf": [
     "Stopp-Signal kurz wiederholen. Am Lehrbrett W1 und W2: Wo stehen Turm und Läufer in der Grundstellung, auf welcher Farbe steht jeder Läufer?",
     "W3 bis W6: Linie, Reihe und Diagonalen markieren lassen. Ziel nennen: „Heute lernt ihr, wie Turm und Läufer ziehen. Dafür braucht ihr Linie, Reihe und Diagonale.“"
    ],
    "kinder": "Ich zeige Linie, Reihe und Diagonale.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Erklärvideos, dann gemeinsam am Lehrbrett",
    "ablauf": [
     "Erklärvideo „Der Turm“ zeigen. Danach am Lehrbrett T1 bis T3: ziehen, eigene Figuren halten auf, schlagen.",
     "Erklärvideo „Der Läufer“ zeigen. Danach T4 bis T6. Die Kinder probieren am eigenen Brett mit: Turm oder Läufer auf d4 stellen und alle Zielfelder mit dem Finger zeigen.",
     "Merksatz: „Der Turm zieht gerade, der Läufer zieht schräg. Keiner springt über Figuren.“ Schlagen heißt: auf das Feld der gegnerischen Figur ziehen und sie vom Brett nehmen."
    ],
    "kinder": "Ich zeige alle Felder, auf die Turm und Läufer ziehen können.",
    "links": [
     {
      "art": "video",
      "label": "Erklärvideo „Der Turm“",
      "url": "https://www.youtube.com/watch?v=x-aCYU-YhTc"
     },
     {
      "art": "video",
      "label": "Erklärvideo „Der Läufer“",
      "url": "https://www.youtube.com/watch?v=SvWXmnmGeUs"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Turm und Läufer T1 bis T6",
      "set": "T"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Zielfelder zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen Turm oder Läufer auf und legt ein Steinchen als Ziel. Kind B erreicht das Ziel in möglichst wenigen Zügen und sagt jeden Zug an, zum Beispiel „Turm von a1 nach a5“. Danach wechseln die Rollen.",
     "Liegt das Ziel für den Läufer auf der anderen Farbe, kommt er nie hin. Frage: „Woran erkennst du das?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich sage meine Züge richtig an und löse das Arbeitsblatt.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Turm und Läufer",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsblatt A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Typische Fehler klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: über Figuren springen, mit dem Läufer die Farbe wechseln, eigene Figuren schlagen.",
     "Bei jeder Aufgabe nachfragen: „Warum ist der Zug falsch?“ oder „Woran erkennst du das?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann erklären, warum ein Turm- oder Läuferzug nicht erlaubt ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Turmzug und einen Läuferzug mit Schlagen zeigen. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich ziehe und schlage mit Turm und Läufer ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Minispiel „Turm: Steinchen“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Jedes Kind hat einen Turm, Weiß auf a1, Schwarz auf h8. Auf dem Brett liegen zehn Steinchen. Abwechselnd ziehen. Wer auf ein Steinchen zieht, sammelt es ein. Die Türme schlagen sich nicht. Wer am Ende mehr Steinchen hat, gewinnt.",
     "Zweite Runde mit Läufern: Jedes Kind bekommt einen Läufer auf einer anderen Farbe. Frage: „Wer hat Vorteil, wenn mehr Steinchen auf hellen Feldern liegen? Warum?“",
     "Rückblick: „Worauf achtest du beim Läufer?“ Aufräum-Ritual. Ausblick: Nächstes Mal kommen Dame, König und Springer."
    ],
    "kinder": "Ich sammle Steinchen nur mit erlaubten Zügen.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Turm: Steinchen“ (Video)",
      "url": "https://www.youtube.com/watch?v=Jd-xNNoYH-4"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Linie, Reihe oder Diagonale mit dem Finger nachfahren. Weniger Figuren auf das Brett stellen.",
   "zusatz": "Das Ziel in zwei Zügen erreichen und mehrere Wege finden. Oder das Minispiel „Labyrinth“ der Schulschachstiftung mit dem Turm.",
   "kuerzen": "„Zielfelder zu zweit“ auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde."
  },
  "nachher": "Wer lässt Turm oder Läufer noch über Figuren springen? Wer wechselt mit dem Läufer die Farbe? Diese Fehler greifst du in Woche 4 im Einstieg wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Klicke die beiden weißen Türme an. Auf welchen Feldern stehen sie?",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "a1",
      "h1"
     ],
     "antwort": "a1 und h1, in den Ecken.",
     "hilfe": [
      "Türme stehen in den Ecken der Burg.",
      "Weiß steht unten."
     ]
    },
    {
     "frage": "Klicke die beiden weißen Läufer an. Auf welcher Farbe steht jeder?",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "c1",
      "f1"
     ],
     "antwort": "c1 ist dunkel, f1 ist hell. Jede Seite hat einen Läufer für jede Farbe.",
     "hilfe": [
      "Die Läufer stehen neben den Springern.",
      "Schau auf die Farbe unter jedem Läufer."
     ]
    },
    {
     "frage": "Markiere die d-Linie.",
     "targets": [
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8"
     ],
     "antwort": "d1 bis d8. Eine Linie steht senkrecht.",
     "hilfe": [
      "Eine Linie steht senkrecht.",
      "Klicke auf das d am Rand."
     ]
    },
    {
     "frage": "Markiere die 6. Reihe.",
     "targets": [
      "a6",
      "b6",
      "c6",
      "d6",
      "e6",
      "f6",
      "g6",
      "h6"
     ],
     "antwort": "a6 bis h6. Eine Reihe liegt waagerecht.",
     "hilfe": [
      "Eine Reihe liegt waagerecht.",
      "Klicke auf die 6 am Rand."
     ]
    },
    {
     "frage": "Markiere die Diagonale von c1 nach h6.",
     "targets": [
      "c1",
      "d2",
      "e3",
      "f4",
      "g5",
      "h6"
     ],
     "antwort": "c1, d2, e3, f4, g5, h6. Alle Felder sind dunkel.",
     "hilfe": [
      "Eine Diagonale läuft schräg.",
      "Von c1 immer ein Feld nach rechts und eins nach oben."
     ]
    },
    {
     "frage": "Markiere die Diagonale von a2 nach g8.",
     "targets": [
      "a2",
      "b3",
      "c4",
      "d5",
      "e6",
      "f7",
      "g8"
     ],
     "antwort": "a2, b3, c4, d5, e6, f7, g8. Alle Felder sind hell.",
     "hilfe": [
      "Eine Diagonale läuft schräg.",
      "Von a2 immer ein Feld nach rechts und eins nach oben."
     ]
    }
   ],
   "T": [
    {
     "frage": "Der Turm steht auf d4. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/3R4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "14 Felder: die ganze d-Linie und die ganze 4. Reihe, ohne d4.",
     "hilfe": [
      "Der Turm zieht gerade, auf seiner Linie und seiner Reihe.",
      "Tipp: Klicke auf d und 4 am Rand. Das Feld d4 selbst gehört nicht dazu."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Turm ziehen kann. Achte auf die eigenen Bauern.",
     "fen": "8/8/8/1P6/8/8/1R2P3/8",
     "leer": true,
     "pruef": {
      "zuege": "b2"
     },
     "targets": null,
     "antwort": "a2, c2, d2, b1, b3 und b4. Vor einer eigenen Figur hält der Turm an. Er darf nicht über sie springen.",
     "hilfe": [
      "Auf b5 und e2 stehen eigene Bauern.",
      "Der Turm hält vor einer eigenen Figur an."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.",
     "fen": "8/8/n7/8/8/2p5/8/R4b2",
     "pruef": {
      "schlaege": [
       "a1"
      ]
     },
     "targets": null,
     "antwort": "a6 und f1. Der Turm zieht auf das Feld der gegnerischen Figur. Der Bauer auf c3 steht weder auf der a-Linie noch auf der 1. Reihe.",
     "hilfe": [
      "Suche zuerst die Linie und die Reihe des Turms.",
      "Steht eine schwarze Figur darauf, ohne dass etwas im Weg ist?"
     ]
    },
    {
     "frage": "Der Läufer steht auf d4. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/3B4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "13 Felder auf den beiden Diagonalen durch d4. Alle sind dunkel wie d4.",
     "hilfe": [
      "Der Läufer zieht schräg.",
      "Er bleibt immer auf seiner Farbe."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Läufer ziehen kann.",
     "fen": "8/8/8/6p1/8/3P4/1P6/2B5",
     "leer": true,
     "pruef": {
      "zuege": "c1"
     },
     "targets": null,
     "antwort": "d2, e3, f4 und g5. Auf g5 schlägt er den schwarzen Bauern und bleibt dort. Nach links ist der eigene Bauer auf b2 im Weg.",
     "hilfe": [
      "Nach links oben steht ein eigener Bauer.",
      "Auf g5 steht eine schwarze Figur: Dort darf er schlagen, aber nicht weiter."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an. Warum nicht den Bauern auf e6?",
     "fen": "8/1r5n/4p3/8/4B3/8/2P5/8",
     "pruef": {
      "schlaege": [
       "e4"
      ]
     },
     "targets": null,
     "antwort": "b7 und h7. Der Bauer auf e6 steht gerade vor dem Läufer, nicht schräg.",
     "hilfe": [
      "Fahre die vier Diagonalen von e4 aus ab.",
      "Der Läufer zieht nie gerade."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die der Turm ziehen kann.",
     "fen": "8/8/5P2/8/8/2n2R2/8/8",
     "leer": true,
     "pruef": {
      "zuege": "f3"
     },
     "targets": null,
     "antwort": "f1, f2, f4, f5, g3, h3, e3, d3 und c3. Auf c3 schlägt er den Springer, vor f6 hält er an.",
     "hilfe": [
      "Linie f und Reihe 3.",
      "Eigene Figur: anhalten. Gegnerische Figur: schlagen und anhalten."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Läufer ziehen kann. Wo muss er anhalten?",
     "fen": "8/3p4/8/1B6/8/8/4P3/8",
     "leer": true,
     "pruef": {
      "zuege": "b5"
     },
     "targets": null,
     "antwort": "a6, c6, d7, a4, c4 und d3. Auf d7 schlägt er und hält an, vor dem eigenen Bauern auf e2 hält er auch an.",
     "hilfe": [
      "Der Läufer auf b5 hat vier Richtungen.",
      "Auf d7 und e2 stehen Figuren."
     ]
    },
    {
     "frage": "Der Turm auf h1 will nach a8. Das geht nicht in einem Zug. Markiere die beiden Felder, über die er in zwei Zügen hinkommt.",
     "fen": "8/8/8/8/8/8/8/7R",
     "leer": true,
     "targets": [
      "a1",
      "h8"
     ],
     "antwort": "Über a1 oder über h8. a8 liegt weder auf der h-Linie noch auf der 1. Reihe, deshalb braucht der Turm zwei Züge.",
     "hilfe": [
      "Erst auf der Reihe, dann auf der Linie, oder umgekehrt.",
      "Die Ecken helfen."
     ]
    },
    {
     "frage": "Der Läufer auf c1 bleibt immer auf seiner Farbe. Markiere alle Felder der 8. Reihe, die er irgendwann erreichen kann.",
     "fen": "8/8/8/8/8/8/8/2B5",
     "leer": true,
     "pruef": {
      "farbe": "c1",
      "reihe": 8
     },
     "targets": [
      "b8",
      "d8",
      "f8",
      "h8"
     ],
     "antwort": "b8, d8, f8 und h8. c1 ist dunkel, also erreicht er nur die dunklen Felder.",
     "hilfe": [
      "Welche Farbe hat c1?",
      "Auf der 8. Reihe wechseln hell und dunkel ab."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an. Warum nicht den Läufer auf d6?",
     "fen": "8/8/3b4/8/6p1/3P4/8/n2R3b",
     "pruef": {
      "schlaege": [
       "d1"
      ]
     },
     "targets": null,
     "antwort": "a1 und h1. Den Läufer auf d6 nicht, weil der eigene Bauer auf d3 im Weg steht.",
     "hilfe": [
      "Prüfe die d-Linie und die 1. Reihe.",
      "Was steht zwischen d1 und d6?"
     ]
    },
    {
     "frage": "Weiß hat Turm und Läufer. Klicke alle schwarzen Figuren an, die Weiß schlagen kann.",
     "fen": "r7/8/2p5/3q4/R3n3/8/6B1/8",
     "pruef": {
      "schlaege": [
       "a4",
       "g2"
      ]
     },
     "targets": null,
     "antwort": "e4 und a8. Die Dame auf d5 und der Bauer auf c6 sind sicher, der Springer auf e4 steht davor.",
     "hilfe": [
      "Prüfe zuerst den Turm, dann den Läufer.",
      "Der Läufer auf g2 kommt nur bis e4."
     ]
    }
   ],
   "S": [
    {
     "frage": "Ein Kind zieht den Turm von a1 nach a7. Klicke die Figur an, die im Weg steht. Warum ist der Zug falsch?",
     "fen": "8/8/8/8/P7/8/8/R7",
     "targets": [
      "a4"
     ],
     "antwort": "Der eigene Bauer auf a4. Der Turm darf nicht über Figuren springen.",
     "hilfe": [
      "Fahre die a-Linie nach oben ab.",
      "Was steht zwischen a1 und a7?"
     ]
    },
    {
     "frage": "Ein Kind zieht den Läufer von f1 nach f3. Das ist falsch. Markiere die Felder der 3. Reihe, die er wirklich erreichen kann.",
     "fen": "8/8/8/8/8/8/8/5B2",
     "leer": true,
     "pruef": {
      "zuege": "f1",
      "reihe": 3
     },
     "targets": [
      "d3",
      "h3"
     ],
     "antwort": "d3 und h3. Gerade nach vorn zieht der Turm, der Läufer nur schräg.",
     "hilfe": [
      "Der Läufer zieht schräg.",
      "Fahre beide Diagonalen von f1 bis zur 3. Reihe."
     ]
    },
    {
     "frage": "Darf der Turm eigene Figuren schlagen? Klicke alle Figuren an, die er schlagen darf.",
     "fen": "8/4N3/8/1n2R3/8/8/4p3/8",
     "pruef": {
      "schlaege": [
       "e5"
      ]
     },
     "targets": null,
     "antwort": "e2 und b5. Den eigenen Springer auf e7 darf er nicht schlagen.",
     "hilfe": [
      "Nur gegnerische Figuren werden geschlagen.",
      "Schwarze Figuren sind dunkel."
     ]
    },
    {
     "frage": "Welcher Läufer kann nach h7 ziehen? Klicke ihn an. Woran erkennst du das?",
     "fen": "8/8/8/8/8/3BB3/8/8",
     "targets": [
      "d3"
     ],
     "antwort": "Der Läufer auf d3. h7 ist hell wie d3, und die Diagonale d3, e4, f5, g6, h7 ist frei. Der Läufer auf e3 steht auf Dunkel.",
     "hilfe": [
      "Welche Farbe hat h7?",
      "Ein Läufer bleibt auf seiner Farbe."
     ]
    },
    {
     "frage": "Der Läufer steht in der Ecke auf a1. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/8/8/8/B7",
     "leer": true,
     "pruef": {
      "zuege": "a1"
     },
     "targets": null,
     "antwort": "7 Felder, von b2 bis h8. Auf d4 in der Mitte hätte er 13. In der Mitte ist ein Läufer stärker.",
     "hilfe": [
      "Aus der Ecke gibt es nur eine Diagonale.",
      "Sie führt bis h8."
     ]
    },
    {
     "frage": "Der schwarze Turm auf h8 ist am Zug. Klicke die weiße Figur an, die er schlagen kann.",
     "fen": "2N1k2r/8/8/8/8/7B/8/8",
     "pruef": {
      "schlaege": [
       "h8"
      ]
     },
     "targets": null,
     "antwort": "Den Läufer auf h3. Zum Springer auf c8 kommt er nicht, der eigene König auf e8 steht im Weg.",
     "hilfe": [
      "Prüfe die h-Linie und die 8. Reihe.",
      "Was steht zwischen h8 und c8?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere alle Felder, auf die der Turm auf b6 ziehen kann.",
     "fen": "8/8/1R3p2/8/8/8/1P6/8",
     "leer": true,
     "pruef": {
      "zuege": "b6"
     },
     "targets": null,
     "antwort": "b7, b8, b5, b4, b3, a6, c6, d6, e6 und f6. Auf f6 schlägt er.",
     "hilfe": [
      "Linie b und Reihe 6.",
      "Vor b2 hält er an, auf f6 schlägt er."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Läufer auf e3 ziehen kann.",
     "fen": "8/8/8/2n3P1/8/4B3/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e3"
     },
     "targets": null,
     "antwort": "f4, d4, c5, d2, c1, f2 und g1. Auf c5 schlägt er, vor g5 hält er an.",
     "hilfe": [
      "Vier Richtungen, alle schräg.",
      "Eigene Figur: anhalten. Gegnerische Figur: schlagen."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an.",
     "fen": "8/8/5r2/8/8/n7/1B1b4/2n5",
     "pruef": {
      "schlaege": [
       "b2"
      ]
     },
     "targets": null,
     "antwort": "f6, a3 und c1. Der Läufer auf d2 steht auf der Reihe, nicht auf der Diagonale.",
     "hilfe": [
      "Fahre alle Diagonalen von b2 aus ab.",
      "Nur schräg, nie gerade."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.",
     "fen": "3b4/8/8/8/rP1R3n/8/3p4/3n4",
     "pruef": {
      "schlaege": [
       "d4"
      ]
     },
     "targets": null,
     "antwort": "d8, h4 und d2. Den Turm auf a4 nicht, der eigene Bauer auf b4 ist im Weg. Den Springer auf d1 nicht, der Bauer auf d2 steht davor.",
     "hilfe": [
      "Prüfe alle vier Richtungen.",
      "In jeder Richtung zählt nur die erste Figur."
     ]
    },
    {
     "frage": "Kann der Läufer auf f1 jemals nach f8 kommen? Wenn ja, markiere ein Feld, über das er geht. Wenn nein, markiere nichts und begründe.",
     "fen": "8/8/8/8/8/8/8/5B2",
     "leer": true,
     "targets": [],
     "antwort": "Nein. f1 ist hell, f8 ist dunkel. Ein Läufer bleibt immer auf seiner Farbe.",
     "hilfe": [
      "Welche Farbe haben f1 und f8?",
      "Ein Läufer wechselt nie die Farbe."
     ]
    },
    {
     "frage": "Markiere das Feld, auf das sowohl der Turm als auch der Läufer ziehen können.",
     "fen": "8/8/8/5B2/8/8/2R5/8",
     "leer": true,
     "pruef": {
      "beide": [
       "c2",
       "f5"
      ]
     },
     "targets": null,
     "antwort": "c8. Der Turm kommt über die c-Linie hin, der Läufer über e6 und d7.",
     "hilfe": [
      "Markiere in Gedanken zuerst die Felder des Turms.",
      "Welches davon liegt auch auf einer Diagonale des Läufers?"
     ]
    }
   ]
  }
 },
 "4": {
  "thema": "Dame, König, Springer",
  "lernziel": "Ich kann mit Dame, König und Springer regelgerecht ziehen und schlagen.",
  "leitfrage": "Wie ziehen Dame, König und Springer, und was ist beim Springer und beim König besonders?",
  "vorwissen": "Turm und Läufer ziehen und schlagen (Woche 3).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Erklärvideos „Schach erklärt: Die Dame“, „Der König“ und „Der Springer“, Minispiele „Fang den Springer“ und „Königsrennen“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Turm und Läufer wiederholen, die neuen Figuren finden",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 und W2 die Fehler aus Woche 3 aufgreifen: Wohin ziehen Turm und Läufer? W5 und W6: Was können sie schlagen?",
     "W3 und W4: Wo stehen Dame, König und Springer in der Grundstellung? Ziel nennen: „Heute lernt ihr die letzten drei Figuren, die Dame, den König und den Springer.“"
    ],
    "kinder": "Ich ziehe Turm und Läufer richtig und finde Dame, König und Springer.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Drei Erklärvideos, nach jedem Video zwei Aufgaben",
    "ablauf": [
     "Erklärvideo „Die Dame“, danach am Lehrbrett E1 und E2. Merksatz: „Die Dame zieht wie Turm und Läufer zusammen.“",
     "Erklärvideo „Der König“, danach E3 und E4. Merksatz: „Der König zieht ein Feld in jede Richtung. Er darf nie auf ein Feld, das angegriffen ist.“",
     "Erklärvideo „Der Springer“, danach E5 und E6. Die Kinder zeigen die Springer-Sprünge mit dem Finger am eigenen Brett: zwei gerade, eins zur Seite. Merksatz: „Der Springer springt über Figuren und wechselt bei jedem Zug die Farbe.“"
    ],
    "kinder": "Ich zeige die Zugfelder von Dame, König und Springer.",
    "links": [
     {
      "art": "video",
      "label": "Erklärvideo „Die Dame“",
      "url": "https://www.youtube.com/watch?v=DSPy3bv5Yek"
     },
     {
      "art": "video",
      "label": "Erklärvideo „Der König“",
      "url": "https://www.youtube.com/watch?v=-_B-l6MULxU"
     },
     {
      "art": "video",
      "label": "Erklärvideo „Der Springer“",
      "url": "https://www.youtube.com/watch?v=9nzY3wG0zY4"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Dame, König, Springer E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Springer-Wege zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen Springer und legt ein Steinchen als Ziel. Kind B bringt den Springer mit möglichst wenigen Sprüngen hin und sagt jeden Sprung an, zum Beispiel „Springer von b1 nach c3“. Danach wechseln die Rollen.",
     "Frage zwischendurch: „Warum braucht der Springer für ein Nachbarfeld so viele Sprünge?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich sage meine Springersprünge richtig an und löse das Arbeitsblatt.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Dame, König, Springer",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsblatt A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Typische Fehler klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: König neben König, König auf ein angegriffenes Feld, Springer zieht gerade oder schräg, Dame zieht wie ein Springer.",
     "Bei jeder Aufgabe nachfragen: „Warum darf die Figur dort nicht hin?“ oder „Woran erkennst du das?“ Alle sprechen die drei Merksätze."
    ],
    "kinder": "Ich kann erklären, warum ein Zug von Dame, König oder Springer nicht erlaubt ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Springerzug und einen Königszug zeigen. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich ziehe und schlage mit Dame, König und Springer ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Minispiel „Fang den Springer“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Weiß hat Turm, Läufer und Springer, Schwarz nur einen Springer. Weiß versucht, den schwarzen Springer zu schlagen. Schwarz flieht und darf selbst schlagen. Wer den Springer in zehn Zügen fängt, gewinnt, sonst gewinnt Schwarz. Danach wechseln die Rollen.",
     "Rückblick: „Was ist beim Springer anders als bei allen anderen Figuren?“ Aufräum-Ritual. Ausblick: Nächstes Mal kommt die letzte Figur, der Bauer."
    ],
    "kinder": "Ich ziehe im Spiel nur mit erlaubten Zügen.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Fang den Springer“ (Video)",
      "url": "https://www.youtube.com/watch?v=lyCmGN_bbvM"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Springer-Weg mit dem Finger zeigen: zwei gerade, eins zur Seite. Bei der Dame erst wie ein Turm, dann wie ein Läufer zählen.",
   "zusatz": "Minispiel „Königsrennen“ der Schulschachstiftung: Beide Könige laufen zur anderen Seite, ohne sich zu berühren. Oder: Wie viele Sprünge braucht der Springer von a1 nach h8?",
   "kuerzen": "In der Erarbeitung nur E1, E3 und E5 zeigen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde."
  },
  "nachher": "Wer zieht den Springer noch gerade oder schräg? Wer stellt den König neben den gegnerischen König? Den Springer greifst du in Woche 5 im Einstieg wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der Turm auf a8 ziehen kann.",
     "fen": "R7/8/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "a8"
     },
     "targets": null,
     "antwort": "14 Felder: die a-Linie von a1 bis a7 und die 8. Reihe von b8 bis h8.",
     "hilfe": [
      "Linie a und Reihe 8.",
      "Tipp: Klicke auf a und 8 am Rand und nimm a8 wieder weg."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Läufer auf f1 ziehen kann.",
     "fen": "8/8/8/8/8/8/8/5B2",
     "leer": true,
     "pruef": {
      "zuege": "f1"
     },
     "targets": null,
     "antwort": "e2, d3, c4, b5, a6, g2 und h3. Alle sind hell wie f1.",
     "hilfe": [
      "Der Läufer zieht schräg.",
      "Von f1 gibt es zwei Diagonalen."
     ]
    },
    {
     "frage": "Klicke die weiße Dame und den weißen König an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "d1",
      "e1"
     ],
     "antwort": "Die Dame steht auf d1, ihrer Farbe. Der König steht daneben auf e1.",
     "hilfe": [
      "Die Dame steht auf ihrer Farbe.",
      "Der König steht neben der Dame."
     ]
    },
    {
     "frage": "Klicke alle vier Springer an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "b1",
      "g1",
      "b8",
      "g8"
     ],
     "antwort": "b1, g1, b8 und g8, direkt neben den Türmen.",
     "hilfe": [
      "Die Pferde wohnen in den Türmen.",
      "Sie stehen direkt neben den Ecken."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.",
     "fen": "8/8/8/n7/8/2p5/8/R3b3",
     "pruef": {
      "schlaege": [
       "a1"
      ]
     },
     "targets": null,
     "antwort": "a5 und e1. Der Bauer auf c3 steht nicht auf der Linie und nicht auf der Reihe des Turms.",
     "hilfe": [
      "Linie a und Reihe 1.",
      "Ist der Weg frei?"
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an.",
     "fen": "8/8/8/2p5/5n2/r7/8/2B5",
     "pruef": {
      "schlaege": [
       "c1"
      ]
     },
     "targets": null,
     "antwort": "a3 und f4. Der Bauer auf c5 steht gerade vor dem Läufer.",
     "hilfe": [
      "Der Läufer zieht schräg.",
      "Fahre beide Diagonalen von c1 ab."
     ]
    }
   ],
   "E": [
    {
     "frage": "Die Dame steht auf d4. Markiere alle Felder, auf die sie ziehen kann.",
     "fen": "8/8/8/8/3Q4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "27 Felder: die d-Linie, die 4. Reihe und beide Diagonalen durch d4.",
     "hilfe": [
      "Erst wie ein Turm: Linie und Reihe.",
      "Dann wie ein Läufer: beide Diagonalen."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die die Dame ziehen kann. Achte auf die anderen Figuren.",
     "fen": "8/8/8/3p4/6n1/1P6/4P3/3Q4",
     "leer": true,
     "pruef": {
      "zuege": "d1"
     },
     "targets": null,
     "antwort": "a1, b1, c1, e1, f1, g1, h1, d2, d3, d4, d5 und c2. Auf d5 schlägt sie den Bauern. Vor b3 und e2 hält sie an.",
     "hilfe": [
      "Prüfe acht Richtungen.",
      "Eigene Figur: anhalten. Gegnerische Figur: schlagen."
     ]
    },
    {
     "frage": "Der König steht auf e4. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/4K3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "8 Felder rund um e4: d3, e3, f3, d4, f4, d5, e5 und f5.",
     "hilfe": [
      "Der König zieht genau ein Feld.",
      "In jede Richtung, auch schräg."
     ]
    },
    {
     "frage": "Der König steht in der Grundstellung. Wohin kann er ziehen?",
     "fen": "8/8/8/8/8/8/3PPP2/3QKB2",
     "leer": true,
     "pruef": {
      "zuege": "e1"
     },
     "targets": null,
     "antwort": "Nirgendwohin. Alle Nachbarfelder sind mit eigenen Figuren besetzt. Drücke „Prüfen“ ohne Markierung.",
     "hilfe": [
      "Schau auf alle Nachbarfelder.",
      "Auf eigene Figuren darf der König nicht ziehen."
     ]
    },
    {
     "frage": "Der Springer steht auf d4. Markiere alle Felder, auf die er springen kann.",
     "fen": "8/8/8/8/3N4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "8 Felder: c2, e2, b3, f3, b5, f5, c6 und e6. Alle haben die andere Farbe als d4.",
     "hilfe": [
      "Zwei Felder gerade, dann eins zur Seite.",
      "Die Zielfelder bilden einen Kreis um den Springer."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer auf g1 springen kann. Stören die Bauern?",
     "fen": "8/8/8/8/8/7p/4PPPP/6N1",
     "leer": true,
     "pruef": {
      "zuege": "g1"
     },
     "targets": null,
     "antwort": "f3 und h3. Auf h3 schlägt er den schwarzen Bauern. Die Bauern auf f2, g2 und h2 stören nicht, denn der Springer springt über sie. Auf e2 steht ein eigener Bauer, dorthin darf er nicht.",
     "hilfe": [
      "Der Springer springt über Figuren.",
      "Auf e2 steht ein eigener Bauer."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die die Dame ziehen kann.",
     "fen": "8/8/2n2P2/8/8/3P1Q2/8/8",
     "leer": true,
     "pruef": {
      "zuege": "f3"
     },
     "targets": null,
     "antwort": "f1, f2, f4, f5, g3, h3, e3, e2, d1, g2, h1, e4, d5, c6, g4 und h5. Auf c6 schlägt sie den Springer.",
     "hilfe": [
      "Acht Richtungen prüfen.",
      "Vor f6 und d3 hält sie an."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der König ziehen kann.",
     "fen": "8/8/2P5/3K4/4P3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d5"
     },
     "targets": null,
     "antwort": "c4, d4, c5, e5, d6 und e6. Auf c6 und e4 stehen eigene Bauern.",
     "hilfe": [
      "Acht Nachbarfelder.",
      "Eigene Figuren blockieren."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer auf b1 in der Grundstellung springen kann.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "zuege": "b1"
     },
     "targets": null,
     "antwort": "a3 und c3. Auf d2 steht ein eigener Bauer. Er springt über die Bauern hinweg.",
     "hilfe": [
      "Zwei nach vorn, eins zur Seite.",
      "Auf d2 steht schon ein Bauer."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.",
     "fen": "8/3r4/4q3/2n1N3/6b1/5P2/8/8",
     "pruef": {
      "schlaege": [
       "e5"
      ]
     },
     "targets": null,
     "antwort": "d7 und g4. Die Dame auf e6 steht direkt neben ihm, der Springer auf c5 zwei Felder gerade daneben. Beides erreicht ein Springer nie.",
     "hilfe": [
      "Zeige alle acht Springerfelder.",
      "Direkte Nachbarfelder erreicht der Springer nie."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an. Warum nicht den Turm auf b7?",
     "fen": "8/1r4n1/5b2/8/1P6/8/1Q2p3/8",
     "pruef": {
      "schlaege": [
       "b2"
      ]
     },
     "targets": null,
     "antwort": "e2 und f6. Vor dem Turm auf b7 steht der eigene Bauer auf b4. Der Springer auf g7 steht hinter dem Läufer.",
     "hilfe": [
      "Prüfe die b-Linie, die 2. Reihe und die Diagonalen.",
      "In jeder Richtung zählt nur die erste Figur."
     ]
    },
    {
     "frage": "Der Springer auf g1 will nach g5. Markiere die beiden Felder, über die er in zwei Sprüngen hinkommt.",
     "fen": "8/8/8/8/8/8/8/6N1",
     "leer": true,
     "pruef": {
      "ueber": [
       "g1",
       "g5"
      ]
     },
     "targets": null,
     "antwort": "f3 und h3. Von dort springt er weiter nach g5.",
     "hilfe": [
      "Erst zwei Felder nach vorn.",
      "Von welchen Feldern erreicht er g5?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Auf welche Nachbarfelder darf der weiße König nicht ziehen, weil der schwarze König dort angreift? Markiere sie.",
     "fen": "8/8/4k3/8/4K3/8/8/8",
     "leer": true,
     "pruef": {
      "verboten": "e4"
     },
     "targets": null,
     "antwort": "d5, e5 und f5. Zwei Könige dürfen nie nebeneinander stehen.",
     "hilfe": [
      "Welche Felder berühren beide Könige?",
      "Sie liegen zwischen den Königen."
     ]
    },
    {
     "frage": "Ein Kind zieht den Springer von d4 nach d6. Das ist falsch. Markiere die Felder der 6. Reihe, auf die er wirklich springen kann.",
     "fen": "8/8/8/8/3N4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4",
      "reihe": 6
     },
     "targets": null,
     "antwort": "c6 und e6. Der Springer zieht nie nur gerade, er springt zwei gerade und eins zur Seite.",
     "hilfe": [
      "Zwei nach vorn bis d6, dann eins zur Seite.",
      "Links oder rechts von d6."
     ]
    },
    {
     "frage": "Der Springer steht auf e4, einem hellen Feld. Markiere alle seine Zielfelder. Welche Farbe haben sie?",
     "fen": "8/8/8/8/4N3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "d2, f2, c3, g3, c5, g5, d6 und f6. Alle sind dunkel. Der Springer wechselt bei jedem Sprung die Farbe.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Schau auf die Farbe der Zielfelder."
     ]
    },
    {
     "frage": "Ein Kind zieht die Dame von d1 nach c3. Das ist ein Springerzug. Markiere die Felder der 3. Reihe, die die Dame wirklich erreicht.",
     "fen": "8/8/8/8/8/8/8/3Q4",
     "leer": true,
     "pruef": {
      "zuege": "d1",
      "reihe": 3
     },
     "targets": null,
     "antwort": "b3, d3 und f3. c3 und e3 erreicht nur ein Springer.",
     "hilfe": [
      "Die Dame zieht gerade oder schräg.",
      "Von d1 geradeaus und auf beiden Diagonalen bis zur 3. Reihe."
     ]
    },
    {
     "frage": "Wohin darf der König ziehen? Achtung, der schwarze Turm greift die 2. Reihe an.",
     "fen": "8/8/8/8/8/8/r7/4K3",
     "leer": true,
     "pruef": {
      "zuege": "e1"
     },
     "targets": null,
     "antwort": "Nur d1 und f1. Auf d2, e2 und f2 würde ihn der Turm angreifen.",
     "hilfe": [
      "Der König darf nie auf ein angegriffenes Feld.",
      "Die ganze 2. Reihe ist angegriffen."
     ]
    },
    {
     "frage": "Welche weißen Figuren können in einem Zug nach f7 ziehen? Klicke sie an.",
     "fen": "8/R7/8/3QN2B/2N5/8/5K2/8",
     "pruef": {
      "erreichen": "f7"
     },
     "targets": null,
     "antwort": "Die Dame auf d5, der Turm auf a7, der Springer auf e5 und der Läufer auf h5. Der Springer auf c4 und der König kommen nicht hin.",
     "hilfe": [
      "Prüfe jede Figur nach ihrer Gangart.",
      "Der König zieht nur ein Feld."
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere alle Felder, auf die die Dame auf e5 ziehen kann.",
     "fen": "8/4P3/8/4Q3/8/8/1b6/8",
     "leer": true,
     "pruef": {
      "zuege": "e5"
     },
     "targets": null,
     "antwort": "24 Felder: die 5. Reihe ohne e5, dazu e1 bis e4 und e6 (vor e7 hält sie an). Auf den Diagonalen d4, c3 und b2 (dort schlägt sie), d6, c7, b8, f6, g7, h8 sowie f4, g3, h2.",
     "hilfe": [
      "Acht Richtungen.",
      "Vor e7 hält sie an, auf b2 schlägt sie."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der König in der Ecke auf a1 ziehen kann.",
     "fen": "8/8/8/8/8/8/8/K7",
     "leer": true,
     "pruef": {
      "zuege": "a1"
     },
     "targets": null,
     "antwort": "a2, b1 und b2. In der Ecke hat der König nur drei Felder.",
     "hilfe": [
      "Der König zieht ein Feld.",
      "In der Ecke gibt es nur drei Nachbarfelder."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer in der Ecke auf h1 springen kann.",
     "fen": "8/8/8/8/8/8/8/7N",
     "leer": true,
     "pruef": {
      "zuege": "h1"
     },
     "targets": null,
     "antwort": "f2 und g3. In der Ecke hat der Springer nur zwei Felder.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Vom Rand aus fallen viele Felder weg."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.",
     "fen": "8/8/8/1rn5/4q3/2Np4/8/8",
     "pruef": {
      "schlaege": [
       "c3"
      ]
     },
     "targets": null,
     "antwort": "b5 und e4. Die Figuren auf c5 und d3 kann er nicht erreichen.",
     "hilfe": [
      "Zeige alle Springerfelder von c3.",
      "Direkt daneben oder zwei gerade ohne Seitenschritt geht nicht."
     ]
    },
    {
     "frage": "Wohin darf der König ziehen? Der schwarze Turm greift an.",
     "fen": "8/8/8/7r/3K4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "c3, d3, e3, c4 und e4. Die Felder der 5. Reihe greift der Turm an.",
     "hilfe": [
      "Welche Felder greift der Turm auf h5 an?",
      "Die ganze 5. Reihe."
     ]
    },
    {
     "frage": "Welche weißen Figuren können in einem Zug nach d6 ziehen? Klicke sie an.",
     "fen": "8/8/8/8/1Q2N3/3P4/7B/3R4",
     "pruef": {
      "erreichen": "d6"
     },
     "targets": null,
     "antwort": "Die Dame auf b4, der Springer auf e4 und der Läufer auf h2. Vor dem Turm steht der eigene Bauer auf d3.",
     "hilfe": [
      "Prüfe jede Figur nach ihrer Gangart.",
      "Ist der Weg frei?"
     ]
    }
   ]
  }
 },
 "5": {
  "thema": "Der Bauer (mit einem ersten Blick auf die Umwandlung)",
  "lernziel": "Ich kann Bauernzug, Doppelschritt und Schlagen unterscheiden und weiß, was auf der letzten Reihe passiert.",
  "leitfrage": "Warum ist der Bauer die einzige Figur, die anders zieht, als sie schlägt?",
  "vorwissen": "Alle anderen Figuren ziehen und schlagen (Woche 3 und 4).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Erklärvideo „Schach erklärt: Der Bauer“ und Minispiel „Bauern gegen König“ (Deutsche Schulschachstiftung), Minispiel „Bauernkrieg“ (verbreitete Spielform im Schulschach). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Springer und König wiederholen, die Bauern finden",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 die Fehler aus Woche 4 aufgreifen: Springersprünge, der König neben einem angegriffenen Feld, die Dame beim Schlagen.",
     "W5 und W6: Wo stehen die Bauern, und wohin wollen sie? Ziel nennen: „Heute lernt ihr die letzte Figur, den Bauern. Er ist klein, aber er kann sich in eine Dame verwandeln.“"
    ],
    "kinder": "Ich ziehe Springer und König richtig und zeige, wohin die Bauern wollen.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Erklärvideo, dann ziehen, Doppelschritt, schlagen, umwandeln",
    "ablauf": [
     "Erklärvideo „Der Bauer“ zeigen.",
     "Am Lehrbrett E1 bis E6 gemeinsam: ein Feld vorwärts, Doppelschritt nur beim ersten Zug, schräg schlagen, nie rückwärts. Schwarz zieht nach unten. Auf der letzten Reihe wird der Bauer umgewandelt.",
     "Merksatz: „Der Bauer zieht gerade nach vorn und schlägt schräg nach vorn. Auf der letzten Reihe wird er zur Dame, zum Turm, Läufer oder Springer.“"
    ],
    "kinder": "Ich zeige Zug, Doppelschritt und Schlagen des Bauern.",
    "links": [
     {
      "art": "video",
      "label": "Erklärvideo „Der Bauer“",
      "url": "https://www.youtube.com/watch?v=4eeLF8g6xPw"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Der Bauer E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Schlägt er oder nicht? Zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen weißen Bauern und zwei schwarze Figuren auf. Kind B sagt, welche Figur der Bauer schlagen kann und warum. Danach wechseln die Rollen.",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich erkenne, wohin ein Bauer ziehen und was er schlagen kann.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Der Bauer",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsblatt A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Typische Fehler klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: Doppelschritt später im Spiel, geradeaus schlagen, schräg ziehen ohne zu schlagen, Richtung von Schwarz, Umwandlung.",
     "Bei jeder Aufgabe nachfragen: „Warum darf der Bauer das nicht?“ oder „Woran erkennst du das?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann erklären, warum ein Bauernzug nicht erlaubt ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Doppelschritt und ein Schlagen mit dem Bauern zeigen. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich ziehe und schlage mit dem Bauern ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Minispiel „Bauernkrieg“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Jedes Kind stellt nur seine acht Bauern auf. Abwechselnd ziehen, mit allen Bauernregeln. Wer zuerst einen Bauern auf die letzte Reihe bringt, gewinnt. Kann eine Seite nicht mehr ziehen, gewinnt die andere. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Wer schnell fertig ist, spielt die Variante „Bauern gegen König“: Ein Kind hat drei Bauern, das andere nur einen König, der die Bauern aufhalten will.",
     "Rückblick: „Was macht der Bauer anders als alle anderen Figuren?“ Aufräum-Ritual. Ausblick: Nächstes Mal greifen wir an und decken unsere Figuren."
    ],
    "kinder": "Ich ziehe und schlage im Spiel mit den Bauern richtig.",
    "links": [
     {
      "art": "video",
      "label": "Variante „Bauern gegen König“ (Video)",
      "url": "https://www.youtube.com/watch?v=e3eFR_N4ZEA"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Mit dem Finger zeigen: gerade nach vorn ziehen, schräg nach vorn schlagen. Für Schwarz das Brett gedanklich drehen.",
   "zusatz": "Im Bauernkrieg nur mit drei Bauern pro Seite spielen und vorher planen: Welcher Bauer kommt zuerst durch? Oder die Variante „Bauern gegen König“.",
   "kuerzen": "Die Partnerübung entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Bauernkrieg wird mit vier Bauern pro Seite gespielt."
  },
  "nachher": "Wer schlägt noch geradeaus oder macht später einen Doppelschritt? Wer lässt Schwarz nach oben ziehen? Diese Fehler greifst du in Woche 6 beim Angreifen und Decken wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der Springer auf c3 springen kann.",
     "fen": "8/8/8/8/8/2N5/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c3"
     },
     "targets": null,
     "antwort": "8 Felder: a2, a4, b1, b5, d1, d5, e2 und e4.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Der Springer springt im Kreis um sein Feld."
     ]
    },
    {
     "frage": "Wohin kann der Springer auf g1 in der Grundstellung springen? Markiere die Felder.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "zuege": "g1"
     },
     "targets": null,
     "antwort": "f3 und h3. Auf e2 steht ein eigener Bauer.",
     "hilfe": [
      "Zwei nach vorn, eins zur Seite.",
      "Über die Bauern darf er springen."
     ]
    },
    {
     "frage": "Auf welche Nachbarfelder darf der König nicht, weil der schwarze Springer sie angreift? Markiere sie.",
     "fen": "8/8/8/8/8/4n3/8/4K3",
     "leer": true,
     "pruef": {
      "verboten": "e1"
     },
     "targets": null,
     "antwort": "d1 und f1. Der Springer auf e3 greift diese beiden Felder an. d2, e2 und f2 sind sicher.",
     "hilfe": [
      "Zeige zuerst alle Springerfelder von e3.",
      "Welche davon liegen neben dem König?"
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an.",
     "fen": "7r/n2r2b1/8/8/1p1Q4/8/8/8",
     "pruef": {
      "schlaege": [
       "d4"
      ]
     },
     "targets": null,
     "antwort": "d7, a7, g7 und b4. Der Turm auf h8 steht hinter dem Läufer.",
     "hilfe": [
      "Acht Richtungen prüfen.",
      "In jeder Richtung zählt nur die erste Figur."
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an. Wie viele sind es?",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "a2",
      "b2",
      "c2",
      "d2",
      "e2",
      "f2",
      "g2",
      "h2"
     ],
     "antwort": "Acht Bauern auf der 2. Reihe.",
     "hilfe": [
      "Sie stehen vor den anderen Figuren.",
      "Tipp: Klicke auf die 2 am Rand."
     ]
    },
    {
     "frage": "Ein weißer Bauer, der die letzte Reihe erreicht, wird umgewandelt. Markiere diese Reihe.",
     "fen": "8/8/8/8/8/8/4P3/8",
     "leer": true,
     "targets": [
      "a8",
      "b8",
      "c8",
      "d8",
      "e8",
      "f8",
      "g8",
      "h8"
     ],
     "antwort": "Die 8. Reihe. Für Schwarz ist es die 1. Reihe.",
     "hilfe": [
      "Weiß zieht nach oben.",
      "Tipp: Klicke auf die 8 am Rand."
     ]
    }
   ],
   "E": [
    {
     "frage": "Der Bauer steht noch auf seinem Startfeld e2. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/8/8/4P3/8",
     "leer": true,
     "pruef": {
      "zuege": "e2"
     },
     "targets": null,
     "antwort": "e3 und e4. Beim ersten Zug darf ein Bauer ein oder zwei Felder vorwärts ziehen.",
     "hilfe": [
      "Vom Startfeld gibt es den Doppelschritt.",
      "Nur gerade nach vorn."
     ]
    },
    {
     "frage": "Der Bauer hat schon gezogen und steht auf e3. Markiere alle Felder, auf die er jetzt ziehen kann.",
     "fen": "8/8/8/8/8/4P3/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e3"
     },
     "targets": null,
     "antwort": "Nur e4. Den Doppelschritt gibt es nur beim ersten Zug.",
     "hilfe": [
      "Der Bauer ist nicht mehr auf seinem Startfeld.",
      "Jetzt nur noch ein Feld."
     ]
    },
    {
     "frage": "Vor dem weißen Bauern steht ein schwarzer Bauer. Wohin kann der weiße Bauer ziehen?",
     "fen": "8/8/8/3p4/3P4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "Nirgendwohin. Geradeaus darf er nicht schlagen, und schräg steht nichts. Drücke „Prüfen“ ohne Markierung.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Steht schräg vor ihm eine Figur?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf d4 ziehen kann.",
     "fen": "8/8/8/2npb3/3P4/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d4"
     },
     "targets": null,
     "antwort": "c5 und e5. Er schlägt schräg nach vorn den Springer oder den Läufer. Geradeaus ist er blockiert.",
     "hilfe": [
      "Der Bauer schlägt schräg nach vorn.",
      "Auf d5 kommt er nicht."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer auf seinem Startfeld. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/5p2/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "f7"
     },
     "targets": null,
     "antwort": "f6 und f5. Schwarz zieht nach unten, auch mit Doppelschritt.",
     "hilfe": [
      "Schwarz spielt von oben nach unten.",
      "Vom Startfeld gibt es den Doppelschritt."
     ]
    },
    {
     "frage": "Wohin kann der Bauer auf b7 ziehen? Markiere das Feld. Was passiert dort?",
     "fen": "8/1P6/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "b7"
     },
     "targets": null,
     "antwort": "b8. Dort wird er umgewandelt, meist in eine Dame. Erlaubt sind auch Turm, Läufer oder Springer.",
     "hilfe": [
      "Ein Feld vorwärts.",
      "Auf der letzten Reihe bleibt er kein Bauer."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf c2 ziehen kann.",
     "fen": "8/8/8/8/2p5/8/2P5/8",
     "leer": true,
     "pruef": {
      "zuege": "c2"
     },
     "targets": null,
     "antwort": "Nur c3. Der Doppelschritt geht nicht, weil auf c4 ein schwarzer Bauer steht.",
     "hilfe": [
      "Ist der Weg für den Doppelschritt frei?",
      "Der Bauer schlägt nie geradeaus."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf e4 ziehen kann.",
     "fen": "8/8/8/3r1P2/4P3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "e5 und d5. Auf d5 schlägt er den Turm. Den eigenen Bauern auf f5 schlägt er nicht.",
     "hilfe": [
      "Gerade nach vorn ist frei.",
      "Schräg nur gegnerische Figuren schlagen."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren können die weißen Bauern schlagen? Klicke sie an.",
     "fen": "8/8/8/4r1bq/5P1P/p1n5/1P6/8",
     "pruef": {
      "schlaege": [
       "b2",
       "f4",
       "h4"
      ]
     },
     "targets": null,
     "antwort": "c3, a3, g5 und e5. Die Dame auf h5 steht gerade vor dem Bauern auf h4, die kann er nicht schlagen.",
     "hilfe": [
      "Jeder Bauer schlägt schräg nach vorn.",
      "Geradeaus wird nie geschlagen."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/3p4/2NPB3/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d7"
     },
     "targets": null,
     "antwort": "c6 und e6. Er schlägt schräg nach unten den Springer oder den Läufer. Geradeaus ist d6 besetzt.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Er schlägt schräg nach vorn, also nach unten."
     ]
    },
    {
     "frage": "Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.",
     "fen": "8/8/8/8/6p1/2p1P3/P1P3PP/8",
     "pruef": {
      "doppelschritt": true
     },
     "targets": null,
     "antwort": "a2 und h2. c2 ist blockiert, e3 hat schon gezogen, und für g2 ist g4 besetzt.",
     "hilfe": [
      "Nur vom Startfeld auf der 2. Reihe.",
      "Beide Felder davor müssen frei sein."
     ]
    },
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "2nr4/1P1P4/5P2/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "b7 und d7. b7 zieht nach b8. d7 ist geradeaus blockiert, schlägt aber den Springer auf c8 und wird dabei umgewandelt.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Auch beim Schlagen auf die letzte Reihe wird umgewandelt."
     ]
    }
   ],
   "S": [
    {
     "frage": "Ein Kind zieht den Bauern von d3 nach d5. Das ist falsch. Markiere, wohin er wirklich darf.",
     "fen": "8/8/8/8/8/3P4/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d3"
     },
     "targets": null,
     "antwort": "Nur d4. Der Bauer hat schon gezogen, den Doppelschritt gibt es nur vom Startfeld.",
     "hilfe": [
      "Steht der Bauer auf seinem Startfeld?",
      "Jetzt nur noch ein Feld."
     ]
    },
    {
     "frage": "Ein Kind schlägt mit dem Bauern auf e4 den Bauern auf e5. Darf es das? Markiere, wohin der Bauer wirklich kann.",
     "fen": "8/8/8/3np3/4P3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "Nur d5. Geradeaus schlägt der Bauer nie. Den Springer auf d5 schlägt er schräg.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Schräg vor ihm steht eine Figur."
     ]
    },
    {
     "frage": "Ein Kind zieht den Bauern von c4 schräg nach d5, obwohl dort nichts steht. Markiere, wohin der Bauer wirklich kann.",
     "fen": "8/8/8/8/2P5/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c4"
     },
     "targets": null,
     "antwort": "Nur c5. Schräg geht der Bauer nur, wenn er dort etwas schlägt.",
     "hilfe": [
      "Schräg nur beim Schlagen.",
      "Sonst immer gerade."
     ]
    },
    {
     "frage": "Welcher Bauer zieht nach unten? Klicke ihn an. Woran erkennst du das?",
     "fen": "8/6p1/8/8/8/8/6P1/8",
     "targets": [
      "g7"
     ],
     "antwort": "Der schwarze Bauer auf g7. Schwarz spielt von oben nach unten, Weiß von unten nach oben.",
     "hilfe": [
      "Welche Farbe hat der Bauer?",
      "Schwarz steht oben."
     ]
    },
    {
     "frage": "Markiere das Feld, auf dem der Bauer umgewandelt wird. In welche Figuren darf er sich verwandeln?",
     "fen": "8/P7/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "a7"
     },
     "targets": null,
     "antwort": "a8. Er wird zur Dame, zum Turm, Läufer oder Springer. König oder Bauer sind nicht erlaubt.",
     "hilfe": [
      "Ein Feld vorwärts auf die letzte Reihe.",
      "Vier Figuren sind erlaubt."
     ]
    },
    {
     "frage": "Welche weißen Bauern sind blockiert und können gar nicht ziehen? Klicke sie an.",
     "fen": "8/8/8/1p4pr/1P2N1P1/4P3/8/8",
     "pruef": {
      "blockiert": true
     },
     "targets": null,
     "antwort": "b4 und e3. Der Bauer auf g4 kommt zwar nicht geradeaus weiter, kann aber den Turm auf h5 schlagen.",
     "hilfe": [
      "Ist das Feld davor frei?",
      "Kann er schräg etwas schlagen?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf h2 ziehen kann.",
     "fen": "8/8/8/8/8/8/7P/8",
     "leer": true,
     "pruef": {
      "zuege": "h2"
     },
     "targets": null,
     "antwort": "h3 und h4. Vom Startfeld aus darf er ein oder zwei Felder ziehen.",
     "hilfe": [
      "Steht er auf seinem Startfeld?",
      "Nur gerade nach vorn."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf b5 ziehen kann.",
     "fen": "8/8/nBp5/1P6/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "b5"
     },
     "targets": null,
     "antwort": "a6 und c6. Er schlägt schräg. Geradeaus steht der eigene Läufer.",
     "hilfe": [
      "Gerade ist besetzt.",
      "Schräg vor ihm stehen schwarze Figuren."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/4p3/8/4P3/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e7"
     },
     "targets": null,
     "antwort": "Nur e6. Für den Doppelschritt müsste e5 frei sein.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Ist der Weg bis e5 frei?"
     ]
    },
    {
     "frage": "Welche schwarzen Figuren können die weißen Bauern schlagen? Klicke sie an.",
     "fen": "8/8/8/8/1p1n4/2P2N1b/6P1/8",
     "pruef": {
      "schlaege": [
       "c3",
       "g2"
      ]
     },
     "targets": null,
     "antwort": "d4, b4 und h3. Den eigenen Springer auf f3 schlägt der Bauer nicht.",
     "hilfe": [
      "Jeder Bauer schlägt schräg nach vorn.",
      "Nur gegnerische Figuren."
     ]
    },
    {
     "frage": "Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.",
     "fen": "8/8/8/8/7p/3p1P2/1P1P3P/8",
     "pruef": {
      "doppelschritt": true
     },
     "targets": null,
     "antwort": "Nur b2. d2 ist blockiert, f3 hat schon gezogen, und für h2 ist h4 besetzt.",
     "hilfe": [
      "Startfeld auf der 2. Reihe?",
      "Beide Felder davor frei?"
     ]
    },
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "1nr5/2P3P1/4P3/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "g7 und c7. c7 schlägt den Springer auf b8. Der Bauer auf e6 ist noch zwei Felder entfernt.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Auch Schlagen auf die letzte Reihe zählt."
     ]
    }
   ]
  }
 },
 "6": {
  "thema": "Angreifen und decken",
  "lernziel": "Ich kann angegriffene Figuren erkennen und schützen.",
  "leitfrage": "Welche meiner Figuren kann der Gegner im nächsten Zug schlagen, und wie rette ich sie?",
  "vorwissen": "Alle Figuren ziehen und schlagen, auch der Bauer (Woche 3 bis 5).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Minispiel „Figurenaufstellen“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, Angriffe, Deckungen und sichere Felder automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Bauern wiederholen, dann: Was könnte geschlagen werden?",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W3 die Bauernfehler aus Woche 5 aufgreifen: schräg schlagen, Richtung von Schwarz, Umwandlung.",
     "W4 bis W6: Welche Figur könnte im nächsten Zug geschlagen werden? Ziel nennen: „Heute lernt ihr, wann eine Figur angegriffen ist und wie ihr sie rettet.“"
    ],
    "kinder": "Ich erkenne, welche Figur eine andere schlagen könnte.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Angegriffen, gedeckt, hängend und drei Rettungen",
    "ablauf": [
     "Am Lehrbrett E1 bis E3 gemeinsam die drei Wörter klären: angegriffen heißt, der Gegner könnte die Figur im nächsten Zug schlagen. Gedeckt heißt, eine eigene Figur könnte zurückschlagen. Eine Figur hängt, wenn sie angegriffen und nicht gedeckt ist.",
     "E4 bis E6: drei Rettungen. Wegziehen auf ein sicheres Feld, decken oder den Angreifer schlagen. Die Kinder zeigen am eigenen Brett mit dem Finger, wer wen angreift.",
     "Merksatz: „Vor jedem Zug frage ich: Was greift mein Gegner an? Ist meine Figur gedeckt?“"
    ],
    "kinder": "Ich erkläre angegriffen, gedeckt und hängend an einem Beispiel.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Angreifen und decken E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Angriff oder nicht? Zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt eine weiße Figur, eine schwarze Figur und eine dritte Figur auf. Kind B sagt, ob die weiße Figur angegriffen ist, ob sie gedeckt ist und wie sie zu retten wäre. Danach wechseln die Rollen.",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich finde angegriffene und hängende Figuren und rette sie.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Angreifen und decken",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsblatt A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Typische Fehler klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: den Bauernangriff übersehen, einen verdeckten Angriff mitzählen, den Springer vergessen, auf ein neues angegriffenes Feld flüchten.",
     "Bei jeder Aufgabe nachfragen: „Woran erkennst du, dass die Figur angegriffen ist?“ oder „Warum ist das Feld nicht sicher?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann begründen, ob eine Figur angegriffen, gedeckt oder sicher ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, fragst du einige am Brett: „Welche deiner Figuren ist angegriffen? Wie rettest du sie?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich erkenne Angriffe und rette meine Figur ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Minispiel „Figurenaufstellen“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Das Brett ist leer. Jedes Kind hat König, Dame, zwei Türme, zwei Läufer und zwei Springer. Abwechselnd setzt jedes Kind eine Figur auf ein freies Feld, das keine gegnerische Figur angreift. Wer zuerst alle Figuren gesetzt hat, gewinnt. Wer keine Figur mehr setzen kann, verliert. Danach wechseln die Rollen, das andere Kind beginnt.",
     "Rückblick: „Woran erkennst du, dass ein Feld angegriffen ist?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr, wie viel die Figuren wert sind und wann sich ein Tausch lohnt."
    ],
    "kinder": "Ich setze meine Figuren nur auf Felder, die nicht angegriffen sind.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Figurenaufstellen“ (Video)",
      "url": "https://www.youtube.com/watch?v=r5r3fYH6_WI"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Für jede gegnerische Figur mit dem Finger ihre Zugfelder zeigen. Bei Bauern nur schräg nach vorn.",
   "zusatz": "Eine Stellung bauen, in der eine Figur zweimal angegriffen und einmal gedeckt ist. Was passiert, wenn der Gegner schlägt?",
   "kuerzen": "In der Erarbeitung E2 und E6 weglassen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel wird mit weniger Figuren gespielt."
  },
  "nachher": "Wer übersieht noch Angriffe von Bauern oder Springern? Wer flüchtet auf ein Feld, das wieder angegriffen ist? Diese Fehler greifst du in Woche 7 beim Tauschen wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer auf g2 ziehen kann.",
     "fen": "8/8/8/8/8/5bpn/6P1/8",
     "leer": true,
     "pruef": {
      "zuege": "g2"
     },
     "targets": null,
     "antwort": "f3 und h3. Er schlägt schräg. Geradeaus steht der schwarze Bauer.",
     "hilfe": [
      "Geradeaus ist besetzt.",
      "Schräg nach vorn stehen schwarze Figuren."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/1p6/N1B5/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "b7"
     },
     "targets": null,
     "antwort": "b6, b5, a6 und c6. Ein oder zwei Felder nach unten, schräg schlägt er.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Vom Startfeld gibt es den Doppelschritt."
     ]
    },
    {
     "frage": "Markiere das Feld, auf dem der Bauer umgewandelt werden kann.",
     "fen": "3rn3/4P3/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e7"
     },
     "targets": null,
     "antwort": "d8. Geradeaus ist e8 besetzt, aber er schlägt den Turm auf d8 und wird dabei umgewandelt.",
     "hilfe": [
      "Geradeaus wird nie geschlagen.",
      "Schräg vor ihm steht eine schwarze Figur."
     ]
    },
    {
     "frage": "Der schwarze Turm auf d8 könnte im nächsten Zug schlagen. Klicke die weiße Figur an, die er angreift.",
     "fen": "3r4/8/8/P5B1/8/3N4/8/8",
     "pruef": {
      "schlaege": [
       "d8"
      ]
     },
     "targets": null,
     "antwort": "Den Springer auf d3. Der Weg auf der d-Linie ist frei.",
     "hilfe": [
      "Prüfe die d-Linie und die 8. Reihe.",
      "Steht eine weiße Figur auf dem Weg des Turms?"
     ]
    },
    {
     "frage": "Welche schwarzen Figuren greift der weiße Springer an? Klicke sie an.",
     "fen": "8/8/3r1b2/6p1/2q1N3/8/8/8",
     "pruef": {
      "schlaege": [
       "e4"
      ]
     },
     "targets": null,
     "antwort": "d6, f6 und g5. Die Dame auf c4 steht zwei Felder gerade daneben, die erreicht der Springer nicht.",
     "hilfe": [
      "Zeige alle acht Springerfelder.",
      "Auf welchen steht eine schwarze Figur?"
     ]
    },
    {
     "frage": "Welche schwarzen Figuren greift der weiße Läufer an? Klicke sie an.",
     "fen": "8/5p2/n3r3/8/2B5/8/8/8",
     "pruef": {
      "schlaege": [
       "c4"
      ]
     },
     "targets": null,
     "antwort": "e6 und a6. Der Bauer auf f7 steht hinter dem Turm.",
     "hilfe": [
      "Fahre alle Diagonalen von c4 ab.",
      "In jeder Richtung zählt nur die erste Figur."
     ]
    }
   ],
   "E": [
    {
     "frage": "Welche weißen Figuren sind angegriffen? Klicke sie an.",
     "fen": "5r2/8/8/8/1b3B2/2N4p/8/R7",
     "pruef": {
      "angegriffen": "w"
     },
     "targets": null,
     "antwort": "Der Springer auf c3 (vom Läufer b4) und der Läufer auf f4 (vom Turm f8). Der Turm auf a1 ist sicher.",
     "hilfe": [
      "Zeige für jede schwarze Figur ihre Zugfelder.",
      "Steht dort eine weiße Figur?"
     ]
    },
    {
     "frage": "Welche weißen Figuren sind gedeckt? Klicke sie an.",
     "fen": "Q7/8/8/5B2/3N4/2P5/8/5R2",
     "pruef": {
      "gedeckt": "w"
     },
     "targets": null,
     "antwort": "Der Springer auf d4 (vom Bauern c3) und der Läufer auf f5 (vom Turm f1). Gedeckt heißt: Eine eigene Figur könnte zurückschlagen.",
     "hilfe": [
      "Welche eigene Figur könnte auf das Feld ziehen?",
      "Bauern decken schräg nach vorn."
     ]
    },
    {
     "frage": "Welche weiße Figur hängt, ist also angegriffen und nicht gedeckt? Klicke sie an.",
     "fen": "1r6/8/3pb3/4N3/3P4/1B5R/P7/8",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "Der Turm auf h3. Ihn greift der Läufer e6 an, und keine weiße Figur deckt ihn. Springer e5 und Läufer b3 sind auch angegriffen, aber gedeckt.",
     "hilfe": [
      "Suche zuerst alle angegriffenen Figuren.",
      "Welche davon deckt niemand?"
     ]
    },
    {
     "frage": "Rettung 1, wegziehen: Der Springer auf c3 ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.",
     "fen": "r7/8/4p3/8/1b6/2N5/8/8",
     "leer": true,
     "pruef": {
      "sicher": "c3"
     },
     "targets": null,
     "antwort": "b1, b5, d1, e2 und e4. Auf a2 und a4 greift der Turm an, auf d5 der Bauer.",
     "hilfe": [
      "Zeige alle Springerfelder.",
      "Streiche die Felder, die eine schwarze Figur angreift."
     ]
    },
    {
     "frage": "Rettung 2, decken: Der Läufer auf e4 wird vom schwarzen Turm angegriffen. Markiere die Felder, auf die der weiße Turm ziehen kann, um ihn zu decken.",
     "fen": "4r3/8/8/8/4B3/8/8/R7",
     "leer": true,
     "pruef": {
      "deckzug": {
       "figuren": [
        "a1"
       ],
       "ziel": "e4"
      }
     },
     "targets": null,
     "antwort": "a4 und e1. Von dort könnte der Turm auf e4 zurückschlagen.",
     "hilfe": [
      "Der Turm muss auf die 4. Reihe oder die e-Linie.",
      "Der Weg bis e4 muss frei sein."
     ]
    },
    {
     "frage": "Rettung 3, Angreifer schlagen: Der schwarze Springer greift die weiße Dame an. Welche weißen Figuren können ihn schlagen? Klicke sie an.",
     "fen": "8/8/8/8/8/2n4R/1P6/3Q4",
     "pruef": {
      "erreichen": "c3"
     },
     "targets": null,
     "antwort": "Der Bauer auf b2 und der Turm auf h3. Am besten schlägt der Bauer, die kleinste Figur.",
     "hilfe": [
      "Welche weiße Figur kann nach c3 ziehen?",
      "Der Bauer schlägt schräg."
     ]
    }
   ],
   "A": [
    {
     "frage": "Welche weißen Figuren sind angegriffen? Klicke sie an.",
     "fen": "8/8/1p6/R3n2b/2B5/5N2/6P1/8",
     "pruef": {
      "angegriffen": "w"
     },
     "targets": null,
     "antwort": "a5 (Bauer b6), f3 (Läufer h5) und c4 (Springer e5). Der Bauer auf g2 ist sicher.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Bauern greifen schräg nach vorn an, bei Schwarz nach unten."
     ]
    },
    {
     "frage": "Welche weißen Figuren sind gedeckt? Klicke sie an.",
     "fen": "7Q/8/R7/8/3N4/4P1B1/5P2/8",
     "pruef": {
      "gedeckt": "w"
     },
     "targets": null,
     "antwort": "d4 (Bauer e3), e3 und g3 (Bauer f2) sowie f2 (Läufer g3). Turm und Dame deckt niemand.",
     "hilfe": [
      "Bauern decken schräg nach vorn.",
      "Welche Figur könnte zurückschlagen?"
     ]
    },
    {
     "frage": "Welche weißen Figuren hängen? Klicke sie an.",
     "fen": "q7/1R6/4p3/3N4/2P2p2/6B1/8/8",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "b7 und g3. Den Turm greift die Dame an, den Läufer der Bauer f4. Der Springer auf d5 ist angegriffen, aber vom Bauern c4 gedeckt.",
     "hilfe": [
      "Erst angegriffene Figuren suchen.",
      "Dann prüfen: Deckt sie jemand?"
     ]
    },
    {
     "frage": "Die weiße Dame ist angegriffen. Markiere alle sicheren Felder auf der d-Linie, auf die sie ziehen kann.",
     "fen": "8/b7/2p1n3/8/3Q4/8/8/8",
     "leer": true,
     "pruef": {
      "sicher": "d4",
      "linie": "d"
     },
     "targets": null,
     "antwort": "d1, d2, d3, d6 und d7. Auf d5 greift der Bauer c6 an, auf d8 der Springer e6.",
     "hilfe": [
      "Die Dame zieht auf der d-Linie hoch oder runter.",
      "Welche Felder greift Schwarz an?"
     ]
    },
    {
     "frage": "Der weiße Läufer auf f5 ist angegriffen. Markiere die Felder, auf die der weiße Springer springen kann, um ihn zu decken.",
     "fen": "5r2/8/8/5B2/8/8/2N5/8",
     "leer": true,
     "pruef": {
      "deckzug": {
       "figuren": [
        "c2"
       ],
       "ziel": "f5"
      }
     },
     "targets": null,
     "antwort": "d4 und e3. Von dort könnte der Springer auf f5 zurückschlagen.",
     "hilfe": [
      "Zeige alle Springerfelder von c2.",
      "Von welchem davon springt er nach f5?"
     ]
    },
    {
     "frage": "Der weiße Läufer auf c5 ist angegriffen. Welche weißen Figuren können ihn mit einem Zug decken? Klicke sie an.",
     "fen": "2r5/8/8/2B4R/6N1/1P6/8/8",
     "pruef": {
      "decker": "c5"
     },
     "targets": null,
     "antwort": "Der Bauer b3 (nach b4) und der Turm h5 (zum Beispiel nach d5). Der Springer auf g4 erreicht kein Feld, von dem er c5 deckt.",
     "hilfe": [
      "Probiere für jede weiße Figur ihre Züge.",
      "Von wo aus könnte sie auf c5 zurückschlagen?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Welche weißen Figuren greift der schwarze Bauer an? Klicke sie an.",
     "fen": "8/8/8/4p3/3NRB2/8/8/8",
     "pruef": {
      "schlaege": [
       "e5"
      ]
     },
     "targets": null,
     "antwort": "d4 und f4. Den Turm auf e4 direkt vor ihm greift der Bauer nicht an, denn er schlägt nur schräg.",
     "hilfe": [
      "Der Bauer schlägt schräg nach vorn.",
      "Schwarz zieht nach unten."
     ]
    },
    {
     "frage": "Greift der weiße Turm den schwarzen Springer an? Klicke alle schwarzen Figuren an, die er angreift. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/n7/8/8/P7/8/8/R7",
     "pruef": {
      "schlaege": [
       "a1"
      ]
     },
     "targets": null,
     "antwort": "Keine. Der eigene Bauer auf a4 steht im Weg, der Springer auf a7 ist nicht angegriffen.",
     "hilfe": [
      "Fahre die a-Linie hoch.",
      "Was steht zwischen a1 und a7?"
     ]
    },
    {
     "frage": "Der schwarze Läufer kann den weißen Springer auf e5 schlagen. Welche weißen Figuren könnten dann zurückschlagen? Klicke sie an.",
     "fen": "1b6/8/8/4N3/3P4/5P2/8/4R3",
     "pruef": {
      "verteidiger": "e5"
     },
     "targets": null,
     "antwort": "Der Bauer d4 und der Turm e1. Der Bauer auf f3 deckt e4 und g4, nicht e5.",
     "hilfe": [
      "Gedeckt heißt: zurückschlagen können.",
      "Bauern decken schräg nach vorn."
     ]
    },
    {
     "frage": "Welche weißen Figuren greift der schwarze Springer gleichzeitig an? Klicke sie an.",
     "fen": "8/8/2B1Q3/8/3n1N2/1R6/8/8",
     "pruef": {
      "schlaege": [
       "d4"
      ]
     },
     "targets": null,
     "antwort": "b3, c6 und e6. Den Springer auf f4 erreicht er nicht. Ein Springer kann viele Figuren auf einmal angreifen.",
     "hilfe": [
      "Zeige alle acht Springerfelder.",
      "Auf welchen steht eine weiße Figur?"
     ]
    },
    {
     "frage": "Ein Kind zieht den angegriffenen Läufer nach g5. Dort wird er wieder angegriffen. Markiere alle sicheren Felder für den Läufer.",
     "fen": "4r3/8/7p/8/8/4B3/8/8",
     "leer": true,
     "pruef": {
      "sicher": "e3"
     },
     "targets": null,
     "antwort": "Alle Läuferfelder außer g5: f4, h6, d4, c5, b6, a7, d2, c1, f2 und g1. Auf h6 schlägt er sogar den Bauern.",
     "hilfe": [
      "Welches Feld greift der Bauer h6 an?",
      "Bauern greifen schräg nach unten an."
     ]
    },
    {
     "frage": "Welche weißen Figuren hängen? Klicke sie an.",
     "fen": "7r/8/8/b7/7Q/2N1n3/1P4B1/3R4",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "g2 und h4. Der Turm auf d1 ist angegriffen, aber vom Springer c3 gedeckt. Den Springer auf c3 deckt der Bauer b2.",
     "hilfe": [
      "Erst alle angegriffenen Figuren suchen.",
      "Dann prüfen: Deckt sie jemand?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Welche schwarzen Figuren greift der weiße Turm an? Klicke sie an.",
     "fen": "8/3b4/8/8/8/P2R3n/8/3n4",
     "pruef": {
      "schlaege": [
       "d3"
      ]
     },
     "targets": null,
     "antwort": "d7, h3 und d1.",
     "hilfe": [
      "Prüfe die d-Linie und die 3. Reihe.",
      "In jeder Richtung zählt die erste Figur."
     ]
    },
    {
     "frage": "Welche weißen Figuren sind angegriffen? Klicke sie an.",
     "fen": "8/8/p7/1B6/4P1N1/2n4b/8/R7",
     "pruef": {
      "angegriffen": "w"
     },
     "targets": null,
     "antwort": "b5, g4 und e4. Der Turm auf a1 ist sicher.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Denk an den schwarzen Springer."
     ]
    },
    {
     "frage": "Welche weißen Figuren sind gedeckt? Klicke sie an.",
     "fen": "8/8/8/7R/2B5/1P3N2/P7/3Q4",
     "pruef": {
      "gedeckt": "w"
     },
     "targets": null,
     "antwort": "b3 (Bauer a2), c4 (Bauer b3) und f3 (Dame d1).",
     "hilfe": [
      "Welche eigene Figur könnte zurückschlagen?",
      "Die Dame deckt schräg."
     ]
    },
    {
     "frage": "Welche weißen Figuren hängen? Klicke sie an.",
     "fen": "5q2/7R/5n2/3p4/4N3/B2P4/8/8",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "a3 und h7. Der Springer auf e4 ist angegriffen, aber vom Bauern d3 gedeckt.",
     "hilfe": [
      "Erst angegriffene Figuren suchen.",
      "Dann prüfen: Deckt sie jemand?"
     ]
    },
    {
     "frage": "Der weiße Turm ist angegriffen. Markiere alle sicheren Felder auf der 4. Reihe.",
     "fen": "8/b7/2n5/4p3/3R4/8/8/8",
     "leer": true,
     "pruef": {
      "sicher": "d4",
      "reihe": 4
     },
     "targets": null,
     "antwort": "a4, c4, e4, g4 und h4. Auf b4 greift der Springer an, auf f4 der Bauer.",
     "hilfe": [
      "Der Turm zieht auf der 4. Reihe.",
      "Welche Felder greift Schwarz an?"
     ]
    },
    {
     "frage": "Der weiße Springer auf d5 wird angegriffen. Markiere die Felder, auf die ein weißer Bauer ziehen kann, um ihn zu decken.",
     "fen": "3r4/8/8/3N4/8/2P5/4P3/8",
     "leer": true,
     "pruef": {
      "deckzug": {
       "figuren": [
        "c3",
        "e2"
       ],
       "ziel": "d5"
      }
     },
     "targets": null,
     "antwort": "c4 und e4. Von dort decken die Bauern d5 schräg.",
     "hilfe": [
      "Bauern decken schräg nach vorn.",
      "Welcher Bauernzug führt neben d5?"
     ]
    }
   ]
  }
 },
 "7": {
  "thema": "Figurenwerte und Tauschen",
  "lernziel": "Ich kann mit Figurenwerten prüfen, ob sich ein Schlagzug lohnt.",
  "leitfrage": "Wann lohnt es sich zu schlagen, und wann verliere ich dabei mehr, als ich bekomme?",
  "vorwissen": "Angegriffen, gedeckt und hängend (Woche 6).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Lumi-Aufgaben „Guter oder schlechter Tausch“ und Übungsbuch „Wen schlagen?“ (über die Lumi-Sammlung von edmundbruns.com), Ludgerus-Schachdiplom Bronze 2, Minispiel „Punktespiel“ (Deutsche Schulschachstiftung). Tauschbilanzen automatisch nachgerechnet, Tauschaussagen zusätzlich mit Stockfish geprüft",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Angriff und Deckung wiederholen, was sind Figuren wert?",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 die Fehler aus Woche 6 aufgreifen: angegriffene und hängende Figuren finden, sicher wegziehen, den Angreifer schlagen.",
     "W5 und W6: Welche Figuren sind am meisten wert? Ziel nennen: „Heute lernt ihr, wie viel Punkte die Figuren wert sind und wann sich ein Schlagzug lohnt.“"
    ],
    "kinder": "Ich finde angegriffene Figuren und schätze, welche Figur mehr wert ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Aufwärmen W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Figurenwerte und Tauschen rechnen",
    "ablauf": [
     "Plakat „Figurenwerte“ aufhängen und gemeinsam lesen: Bauer 1, Springer 3, Läufer 3, Turm 5, Dame 9, der König ist unbezahlbar.",
     "Am Lehrbrett E1 bis E6 gemeinsam rechnen: Was bekomme ich? Wer schlägt zurück? Was verliere ich dann? Die Kinder rechnen mit den Fingern mit.",
     "Merksatz: „Erst rechnen, dann schlagen: Bekomme ich mehr, als ich verliere?“"
    ],
    "kinder": "Ich nenne die Werte aller Figuren und rechne einen Tausch aus.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Figurenwerte",
      "was": "werte"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Tauschen rechnen E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Tauschbörse zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt eine weiße Figur, die schlagen kann, eine schwarze Figur und vielleicht eine Figur, die zurückschlägt. Kind B rechnet und sagt: guter, gleicher oder schlechter Tausch. Danach wechseln die Rollen.",
     "Frage zwischendurch: „Warum ist Dame gegen Turm schlecht, wenn der Turm gedeckt ist?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich rechne Tausche richtig aus und löse das Arbeitsblatt.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Tauschen",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Arbeitsblatt A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Typische Fehler klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: das Zurückschlagen vergessen, nur auf die erste Figur schauen, nicht die wertvollste Figur schlagen, ungedeckte Figuren übersehen.",
     "Bei jeder Aufgabe nachfragen: „Was bekommst du, und was gibst du?“ oder „Woran erkennst du, dass niemand zurückschlagen kann?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann begründen, ob ein Tausch gut, gleich oder schlecht ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Fehler klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, fragst du einige am Brett: „Lohnt sich dieser Schlagzug? Rechne es mir vor.“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich erkenne gute und schlechte Tausche ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Lerncheck L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Minispiel „Punktespiel“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Würfelt eine Zahl und rechnet sie mal zwei, zum Beispiel 6 mal 2 ergibt 12. Jedes Kind stellt seinen König und dazu Figuren für genau so viele Punkte auf, Bauern auf die 2. oder 7. Reihe, die anderen Figuren auf die Grundreihe. Dann wird nach den Regeln gespielt. Wer nach zehn Minuten mehr Punkte geschlagen hat, gewinnt. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Rückblick: „Wann lohnt sich ein Schlagzug?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um den König: Schach und Matt."
    ],
    "kinder": "Ich wähle Figuren nach Punkten und rechne im Spiel, bevor ich schlage.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Punktespiel“ (Video)",
      "url": "https://www.youtube.com/watch?v=TCasLqTc5LM"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Plakat „Figurenwerte“ neben das Brett legen. Geschlagene Figuren neben das Brett stellen und zusammenzählen.",
   "zusatz": "Eine Stellung bauen, in der ein Turm gegen einen Läufer und einen Springer getauscht wird. Wer gewinnt dabei?",
   "kuerzen": "Die Tauschbörse entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Punktespiel dauert nur fünf Minuten."
  },
  "nachher": "Wer schlägt noch, ohne an das Zurückschlagen zu denken? Wer kennt die Figurenwerte noch nicht sicher? Das Rechnen greifst du in Woche 8 beim Schachgeben wieder auf: Bietet das Schach dem Gegner etwas zum Schlagen an?",
  "feld": {
   "W": [
    {
     "frage": "Welche weißen Figuren sind angegriffen? Klicke sie an.",
     "fen": "1r6/8/b7/4p3/5N2/3B4/6P1/1R6",
     "pruef": {
      "angegriffen": "w"
     },
     "targets": null,
     "antwort": "d3 (Läufer a6), f4 (Bauer e5) und b1 (Turm b8). Der Bauer auf g2 ist sicher.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Der schwarze Bauer greift schräg nach unten an."
     ]
    },
    {
     "frage": "Welche weißen Figuren hängen? Klicke sie an.",
     "fen": "8/8/q7/7R/2N2n2/1P6/4B3/8",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "Nur der Läufer e2. Den Turm h5 greift der Springer f4 zwar auch an, aber der Läufer e2 deckt ihn. Den Springer c4 deckt der Bauer b3.",
     "hilfe": [
      "Erst angegriffene Figuren suchen.",
      "Dann prüfen: Deckt sie jemand?"
     ]
    },
    {
     "frage": "Der weiße Springer ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.",
     "fen": "2r5/8/7p/3p4/4N3/8/8/8",
     "leer": true,
     "pruef": {
      "sicher": "e4"
     },
     "targets": null,
     "antwort": "d2, d6, f2, f6 und g3. Auf c3 und c5 greift der Turm an, auf g5 der Bauer h6.",
     "hilfe": [
      "Zeige alle Springerfelder.",
      "Streiche die Felder, die Schwarz angreift."
     ]
    },
    {
     "frage": "Der schwarze Läufer greift die weiße Dame an. Welche weißen Figuren können ihn schlagen? Klicke sie an.",
     "fen": "8/8/8/8/6b1/7P/5N2/3Q4",
     "pruef": {
      "erreichen": "g4"
     },
     "targets": null,
     "antwort": "Der Springer f2, der Bauer h3 und die Dame selbst. Am besten schlägt der Bauer, die kleinste Figur.",
     "hilfe": [
      "Welche weiße Figur kann nach g4?",
      "Auch die Dame kann den Angreifer schlagen."
     ]
    },
    {
     "frage": "Klicke die beiden Figuren an, die am meisten wert sind.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "d1",
      "d8"
     ],
     "antwort": "Die beiden Damen. Eine Dame ist 9 Punkte wert. Der König ist unbezahlbar, er wird nie geschlagen.",
     "hilfe": [
      "Sie kann wie Turm und Läufer ziehen.",
      "Sie steht auf ihrer Farbe."
     ]
    },
    {
     "frage": "Klicke alle weißen Figuren an, die 3 Punkte wert sind.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "b1",
      "c1",
      "f1",
      "g1"
     ],
     "antwort": "Die beiden Springer und die beiden Läufer. Man nennt sie Leichtfiguren.",
     "hilfe": [
      "Es sind zwei verschiedene Figurenarten.",
      "Sie stehen zwischen Turm und Dame."
     ]
    }
   ],
   "E": [
    {
     "frage": "Der weiße Turm kann den schwarzen Turm auf d5 schlagen. Klicke die Figur an, die Weiß ohne Risiko schlagen kann.",
     "fen": "4k3/8/8/3r4/8/8/8/3RK3",
     "quelle": "Ludgerus-Schachdiplom Bronze 2, Aufgabe 14",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "d1d5",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "d5. Niemand schlägt zurück: Weiß bekommt 5 Punkte und gibt nichts.",
     "hilfe": [
      "Wer könnte nach dem Schlagen zurückschlagen?",
      "Niemand deckt den schwarzen Turm."
     ]
    },
    {
     "frage": "Weiß schlägt mit dem Springer auf d5. Klicke die schwarze Figur an, die zurückschlagen würde. Wie steht es danach?",
     "fen": "4k3/8/4p3/3n4/8/2N5/8/4K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 2, Aufgabe 14",
     "pruef": {
      "verteidiger": "d5"
     },
     "tausch": {
      "zug": "c3d5",
      "ergebnis": "gleich"
     },
     "targets": null,
     "antwort": "Der Bauer e6 schlägt zurück. Springer gegen Springer, 3 gegen 3: ein gleicher Tausch.",
     "hilfe": [
      "Wer deckt den schwarzen Springer?",
      "Bauern decken schräg."
     ]
    },
    {
     "frage": "Lohnt es sich, mit der Dame den Läufer auf d4 zu schlagen? Klicke die schwarze Figur an, die den Läufer deckt.",
     "fen": "8/4k3/8/4p3/3b4/8/3Q2K1/8",
     "quelle": "Lumi Selbstlernkurs I, Tauschen",
     "pruef": {
      "verteidiger": "d4"
     },
     "tausch": {
      "zug": "d2d4",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Bauer e5. Nach Dxd4 exd4 gibt Weiß die Dame (9) für den Läufer (3): ein schlechter Tausch.",
     "hilfe": [
      "Wer könnte nach dem Schlagen zurückschlagen?",
      "Der Bauer schlägt schräg nach unten."
     ]
    },
    {
     "frage": "Der Springer kann den Turm auf a8 schlagen. Klicke die Figur an, die der Springer mit Gewinn schlagen kann.",
     "fen": "r4rk1/2N2ppp/5n2/8/8/7P/5PP1/4RRK1",
     "quelle": "Lumi, Guter oder schlechter Tausch, Beispiel 1",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "c7a8",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "a8. Der Turm f8 schlägt zwar zurück, aber Weiß bekommt 5 und gibt 3: ein guter Tausch.",
     "hilfe": [
      "Was ist ein Turm wert, was ein Springer?",
      "Auch mit Zurückschlagen bleibt ein Plus."
     ]
    },
    {
     "frage": "Weiß kann mit der Dame den Springer auf g5 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.",
     "fen": "4r1k1/4qppp/8/6n1/8/2N5/PPPQ4/2KR4",
     "quelle": "Lumi, Guter oder schlechter Tausch, Beispiel 2",
     "pruef": {
      "verteidiger": "g5"
     },
     "tausch": {
      "zug": "d2g5",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Die Dame e7. Nach Dxg5 Dxg5 gibt Weiß 9 für 3: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Springer auf g5?",
      "Schau auf die Diagonale von e7."
     ]
    },
    {
     "frage": "Klicke die Figur an, die der weiße Bauer mit Gewinn schlagen kann.",
     "fen": "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/8/PPPP1PPP/RNBQKBNR",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 5",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "e5f6",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Springer f6. Auch wenn ein Bauer zurückschlägt: Weiß bekommt 3 und gibt 1.",
     "hilfe": [
      "Der Bauer schlägt schräg nach vorn.",
      "Ein Bauer gegen einen Springer ist gut."
     ]
    }
   ],
   "A": [
    {
     "frage": "Weiß kann mit dem Springer den Bauern e5 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.",
     "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 1",
     "pruef": {
      "verteidiger": "e5"
     },
     "tausch": {
      "zug": "f3e5",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Springer c6. Nach Sxe5 Sxe5 gibt Weiß 3 für 1: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Bauern e5?",
      "Zeige die Springerfelder von c6."
     ]
    },
    {
     "frage": "Weiß kann mit der Dame den Turm d8 schlagen. Klicke die Figur an, die zurückschlagen würde.",
     "fen": "3rr1k1/5ppp/8/8/8/8/PPP5/1KRQ4",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 2",
     "pruef": {
      "verteidiger": "d8"
     },
     "tausch": {
      "zug": "d1d8",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Turm e8. Nach Dxd8 Txd8 gibt Weiß 9 für 5: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Turm d8?",
      "Schau auf die 8. Reihe."
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "r1b1kbnr/pppp1ppp/2n1q3/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 3",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "c4e6",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Die Dame e6. Der Läufer schlägt sie, ein Bauer schlägt zurück: Weiß bekommt 9 und gibt 3.",
     "hilfe": [
      "Welche schwarze Figur ist am meisten wert?",
      "Welche weiße Figur kann sie schlagen?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die der weiße Bauer mit Gewinn schlagen kann.",
     "fen": "rn1qkb1r/ppp1nppp/3p4/4pb2/2B1P3/2N2N2/PPPP1PPP/R1BQK2R",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 6",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "e4f5",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Läufer f5. Der Springer e7 schlägt zurück, aber Weiß bekommt 3 und gibt 1.",
     "hilfe": [
      "Der Bauer schlägt schräg nach vorn.",
      "Bauer gegen Läufer ist gut."
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an.",
     "fen": "7k/3n4/8/8/1q1R1bp1/8/8/3R3K",
     "quelle": "Lumi Übungsbuch, Wen schlagen? Aufgabe 1",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Die Dame b4. Sie ist 9 Punkte wert, und niemand schlägt zurück.",
     "hilfe": [
      "Welche schwarzen Figuren kann Weiß schlagen?",
      "Welche ist am meisten wert?"
     ]
    },
    {
     "frage": "Welche Figur sollte der weiße Springer schlagen? Klicke sie an.",
     "fen": "1kr1r3/pp3pp1/2pN3p/2P2b2/1P5P/P5P1/5P2/3R1RK1",
     "quelle": "Lumi Übungsbuch, Wen schlagen? Aufgabe 5",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Den Läufer f5. Er ist ungedeckt: plus 3. Sxe8 brächte nur plus 2, weil der Turm c8 zurückschlägt.",
     "hilfe": [
      "Zeige alle Springerfelder von d6.",
      "Rechne für jedes Ziel: Was bekomme ich, was verliere ich?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Lohnt es sich, mit dem Turm den Springer auf d5 zu schlagen? Klicke die Figur an, die zurückschlagen würde.",
     "fen": "4k3/pp3pp1/4p3/3n4/8/8/PP3PP1/3RK3",
     "quelle": "Ludgerus-Schachdiplom Bronze 2, Materialgewinn (mit Bauern ergänzt)",
     "pruef": {
      "verteidiger": "d5"
     },
     "tausch": {
      "zug": "d1d5",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Bauer e6. Nach Txd5 exd5 gibt Weiß 5 für 3: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Springer?",
      "Was ist mehr wert, Turm oder Springer?"
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an.",
     "fen": "r1bqkbnr/p1p2ppp/1pnp4/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R",
     "quelle": "Lumi Übungsbuch, Wen schlagen? Aufgabe 2",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Den Springer c6. Niemand schlägt zurück. Sxe5 wäre schlecht, weil d6 und der Springer c6 den Bauern decken.",
     "hilfe": [
      "Welche schwarzen Figuren sind ungedeckt?",
      "Der Läufer b5 zielt auf c6."
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an. Warum nicht den Läufer e6?",
     "fen": "r2q1rk1/2p2ppp/pbnpbn2/1p1Pp1B1/4P3/2P2N2/PPB2PPP/RN1Q1RK1",
     "quelle": "Lumi Übungsbuch, Wen schlagen? Aufgabe 3",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Den Springer c6, er ist ungedeckt. Nach dxe6 schlägt der Bauer f7 zurück, dann bleiben nur plus 2.",
     "hilfe": [
      "Welche Figuren kann der Bauer d5 schlagen?",
      "Wer schlägt jeweils zurück?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug und kann drei Figuren schlagen. Klicke die beste an.",
     "fen": "5bk1/5ppp/8/N1r3Q1/8/8/5PPP/2B2K2",
     "quelle": "Lumi Test zu Kurs I, Aufgabe 11",
     "pruef": {
      "beste": "b"
     },
     "targets": null,
     "antwort": "Die Dame g5. Der Läufer c1 schlägt zwar zurück, aber Schwarz bekommt 9 und gibt 5.",
     "hilfe": [
      "Welche weißen Figuren erreicht der Turm c5?",
      "Welche ist am meisten wert?"
     ]
    },
    {
     "frage": "Ist es gut, die schwarze Dame zu schlagen? Klicke die Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "4k3/8/8/3q4/8/8/3Q4/4K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 4, Aufgabe 8",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "d2d5",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Die Dame d5. Sie ist ungedeckt: Weiß bekommt 9 und gibt nichts.",
     "hilfe": [
      "Kann jemand zurückschlagen?",
      "Der schwarze König steht zu weit weg."
     ]
    },
    {
     "frage": "Die Dame kann den Turm d4 schlagen. Wer kann zurückschlagen? Klicke ihn an. Wenn niemand, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/3r4/8/8/3QK3",
     "quelle": "Ludgerus-Schachdiplom Bronze 2, Materialgewinn",
     "pruef": {
      "verteidiger": "d4"
     },
     "tausch": {
      "zug": "d1d4",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Niemand. Dame gegen Turm ist hier gut, weil der Turm ungedeckt ist: plus 5.",
     "hilfe": [
      "Wer deckt den Turm?",
      "Der schwarze König steht zu weit weg."
     ]
    }
   ],
   "L": [
    {
     "frage": "Weiß kann mit der Dame den Springer g6 schlagen. Klicke alle schwarzen Figuren an, die zurückschlagen würden.",
     "fen": "r1b1kb1r/pp3ppp/1qn1p1n1/2ppP3/3P2Q1/1PPB4/P3NPPP/RNB1K2R",
     "quelle": "Lumi, Guter oder schlechter Tausch, Aufgabe 4",
     "pruef": {
      "verteidiger": "g6"
     },
     "tausch": {
      "zug": "g4g6",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Die Bauern f7 und h7. Dame gegen Springer, 9 gegen 3: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Springer g6?",
      "Bauern decken schräg nach unten."
     ]
    },
    {
     "frage": "Eine Seite hat eine Figur mehr. Klicke diese Figur an.",
     "fen": "6k1/pp3pp1/7p/2n5/3N4/P3PB2/5PPP/6K1",
     "quelle": "Lumi Übungsbuch, Wer führt? Aufgabe 2",
     "targets": [
      "f3"
     ],
     "antwort": "Der weiße Läufer f3. Bauern und Springer sind auf beiden Seiten gleich, Weiß hat zusätzlich den Läufer.",
     "hilfe": [
      "Zähle die Figuren jeder Seite.",
      "Vergleiche Springer und Läufer."
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "4k3/8/2p5/1b6/4n3/2N5/8/4R1K1",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "e1e4",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Springer e4. Er ist ungedeckt. Den Läufer b5 schlägt der Bauer c6 zurück: nur ein gleicher Tausch.",
     "hilfe": [
      "Welche Figuren kann Weiß schlagen?",
      "Wer schlägt jeweils zurück?"
     ]
    },
    {
     "frage": "Welche Figur sollte die Dame schlagen? Klicke sie an.",
     "fen": "k7/8/3r4/7p/6n1/8/8/3Q3K",
     "pruef": {
      "beste": "w"
     },
     "tausch": {
      "zug": "d1g4",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Den Turm d6, er ist ungedeckt: plus 5. Den Springer g4 deckt der Bauer h5: Dame gegen Springer wäre schlecht.",
     "hilfe": [
      "Welche schwarzen Figuren greift die Dame an?",
      "Welche davon ist gedeckt?"
     ]
    },
    {
     "frage": "Lohnt es sich, mit dem Läufer den Springer c6 zu schlagen? Klicke die Figur an, die zurückschlagen würde.",
     "fen": "4k3/1p6/2n5/8/B7/8/8/4K3",
     "pruef": {
      "verteidiger": "c6"
     },
     "tausch": {
      "zug": "a4c6",
      "ergebnis": "gleich"
     },
     "targets": null,
     "antwort": "Der Bauer b7. Läufer gegen Springer, 3 gegen 3: ein gleicher Tausch.",
     "hilfe": [
      "Wer deckt den Springer?",
      "Läufer und Springer sind gleich viel wert."
     ]
    },
    {
     "frage": "Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.",
     "fen": "b6k/3q4/6p1/3p1n2/4P3/8/8/R5K1",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "e4f5",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Läufer a8 (ungedeckt) und den Springer f5 (Bauer gegen Springer). Den Bauern d5 deckt die Dame: nur ein gleicher Tausch.",
     "hilfe": [
      "Prüfe jede weiße Figur.",
      "Rechne für jedes Ziel: Was bekomme ich, was verliere ich?"
     ]
    }
   ]
  }
 }
};
export const YEAR=[["Brett, Figuren, Schach und Matt",[1,11]],["Sonderregeln, Notation und erste Taktik",[12,26]],["Mattführung, Eröffnung und Endspiel",[27,36]]];
// Reihenfolge nach Abgleich mit Stappenmethode, Chess Tigers, St. Louis, Square One und Shropshire (20.10.2026):
// Angreifen und decken vor dem Tauschen, Schach und Matt in einer Woche, Patt und Remis, Matt mit Dame und König vorgezogen.
export const PLAN=[[1, "Ankommen und kennenlernen: Kennenlernspiel, unsere AG-Regeln, Brett und Grundstellung", ""], [2, "Felder haben Namen: Linien, Reihen und Diagonalen, Schiffe versenken", ""], [3, "Turm und Läufer", "Ich kann Turm und Läufer regelgerecht ziehen und schlagen."], [4, "Dame, König, Springer", "Ich kann Dame, König und Springer regelgerecht ziehen und schlagen."], [5, "Der Bauer (mit einem ersten Blick auf die Umwandlung)", "Ich kann Bauernzug, Doppelschritt und Schlagen unterscheiden und weiß, was auf der letzten Reihe passiert."], [6, "Angreifen und decken", "Ich kann angegriffene Figuren erkennen und schützen."], [7, "Figurenwerte und Tauschen", "Ich kann mit Figurenwerten prüfen, ob sich ein Schlagzug lohnt."], [8, "Schach und Matt", "Ich kann ein Schach auf drei Arten abwehren und ein Matt in einem Zug finden."], [9, "Die erste ganze Partie und Fairplay", "Ich kann eine Partie nach den Regeln und fair spielen."], [10, "Spielstunde und Wiederholung", "Ich kann meine Partie ohne Hilfe zu Ende spielen."], [11, "Bronze-Diplom", "Ich kann die Bronze-Missionen allein lösen."], [12, "Legal oder illegal? Starke und schwache Figuren", "Ich kann erkennen, ob eine Stellung erlaubt ist, und begründen, warum eine Figur stark ist."], [13, "Bauernumwandlung und starke Bauern", "Ich kann einen Bauern umwandeln und die passende Figur wählen."], [14, "Die Rochade", "Ich kann prüfen, ob eine Rochade erlaubt ist, und sie ausführen."], [15, "En passant", "Ich kann en passant erkennen und richtig ausführen."], [16, "Patt und Remis", "Ich kann Patt, Remis und Matt unterscheiden."], [17, "Matt mit Dame und König", "Ich kann mit Dame und König mattsetzen, ohne Patt."], [18, "Weihnachtsturnier", "Ich kann ein Turnier fair zu Ende spielen."], [19, "Notation: Züge lesen und schreiben", "Ich kann Züge in Notation lesen und aufschreiben."], [20, "Turnierregeln, Schachuhr, Partie mitschreiben", "Ich kann mit Uhr spielen und meine Partie mitschreiben."], [21, "Schulmeisterschaft", "Ich kann ein Turnier mit Uhr und Notation spielen."], [22, "Die Fesselung", "Ich kann eine Fesselung erkennen und herstellen."], [23, "Gabel und Doppelangriff", "Ich kann eine Gabel finden und ausführen."], [24, "Der Spieß", "Ich kann einen Spieß finden."], [25, "Abzug und Abzugsschach", "Ich kann ein Abzugsschach finden."], [26, "Wiederholung und Silber-Diplom", "Ich kann die Silber-Missionen allein lösen."], [27, "Gegenangriff statt Flucht", "Ich kann eine bedrohte Figur mit einem Gegenangriff retten."], [28, "Matt mit zwei Türmen", "Ich kann mit zwei Türmen nach dem Treppenprinzip mattsetzen."], [29, "Verteidigen: fünf Möglichkeiten, ein Matt abwehren", "Ich kann eine Drohung erkennen und die passende Verteidigung wählen."], [30, "Die Eröffnungsregeln", "Ich kann die Eröffnungsregeln anwenden und das Schäfermatt abwehren."], [31, "Opfer und Damiano-Matt", "Ich kann ein Opfer finden, das zum Matt führt."], [32, "Das Grundreihenmatt", "Ich kann ein Grundreihenmatt finden und abwehren."], [33, "Matt mit einem Turm", "Ich kann mit König und Turm mattsetzen."], [34, "Einfache Bauernendspiele", "Ich kann mit der Opposition einen Bauern zur Umwandlung führen."], [35, "Gold-Diplom und Abschlusstest", "Ich kann die Gold-Missionen allein lösen."], [36, "Abschlussturnier und Urkunden", "Ich kann ein Turnier fair spielen und meine Fortschritte zeigen."]];
export const LATER=PLAN.slice(11);
