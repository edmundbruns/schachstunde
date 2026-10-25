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
 "punktespiel": "https://www.youtube.com/watch?v=TCasLqTc5LM",
 "schachzwang": "https://www.youtube.com/watch?v=FJQpIInED9g",
 "diplomOnline": "https://ludgerus-schachdiplom.netlify.app/",
 "routenplaner": "https://www.youtube.com/watch?v=b9sWS-2tGws",
 "achtBauern": "https://www.youtube.com/watch?v=XQmXNyh_bVw",
 "mattChallenge": "https://www.youtube.com/watch?v=pTEy2s2dwNA",
 "schachBingo": "https://www.youtube.com/watch?v=CDEEqAtAKdU"
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
 },
 "8": {
  "thema": "Schach und Matt",
  "lernziel": "Ich kann ein Schach auf drei Arten abwehren und ein Matt in einem Zug finden.",
  "leitfrage": "Wie rette ich meinen König aus dem Schach, und wann ist er nicht mehr zu retten?",
  "vorwissen": "Angreifen, decken und Tauschen (Woche 6 und 7).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Ludgerus-Schachdiplom Bronze 3, Lumi „Matt in einem Zug“, Lumi Selbstlernkurs I und Test zu Kurs I (über die Lumi-Sammlung von edmundbruns.com), Minispiel „Schachzwang“ (Deutsche Schulschachstiftung). Fluchtfelder, Abwehrzüge und Matts mit einem Schachprogramm (chess.js) nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Tauschen wiederholen, den König angreifen",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W3 das Rechnen aus Woche 7 aufgreifen: Was bekomme ich, wer schlägt zurück?",
     "W4 bis W6: Der König ist unbezahlbar. Wer greift ihn an? Ziel nennen: „Heute lernt ihr, wie ihr euren König aus dem Schach rettet und wann er Matt ist.“"
    ],
    "kinder": "Ich rechne einen Tausch und erkenne, wer den König angreift.",
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
    "titel": "Drei Rettungen aus dem Schach, dann Matt",
    "ablauf": [
     "Am Lehrbrett E1 bis E3 die drei Rettungen zeigen: Der König zieht weg, eine Figur stellt sich dazwischen, oder der Angreifer wird geschlagen. Die Kinder zeigen jede Rettung am eigenen Brett.",
     "E4 bis E6: Gibt es keine Rettung, ist der König Matt, und die Partie ist zu Ende. Nicht jedes Schach ist Matt.",
     "Merksatz: „Schach: Wegziehen, Dazwischenstellen, Schlagen. Geht nichts davon, ist es Matt.“"
    ],
    "kinder": "Ich zeige die drei Rettungen und erkläre, wann es Matt ist.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Schach und Matt E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Schach-Retter zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen weißen König und eine schwarze Figur, die Schach gibt, dazu eine weitere weiße Figur. Kind B findet alle Rettungen und nennt die Art: wegziehen, dazwischenstellen oder schlagen. Danach wechseln die Rollen.",
     "Frage zwischendurch: „Warum kann man sich gegen ein Springerschach nicht dazwischenstellen?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich finde alle Rettungen aus dem Schach und löse das Arbeitsblatt.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Schach und Matt",
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
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: den König im Schach weiterziehen lassen, gegen ein Springerschach dazwischenstellen wollen, Schach für Matt halten, mit dem König eine gedeckte Figur schlagen.",
     "Bei jeder Aufgabe nachfragen: „Warum ist das kein Matt?“ oder „Woran erkennst du, dass der König nicht mehr fliehen kann?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich kann begründen, ob ein König im Schach oder Matt ist.",
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
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett eine Rettung aus dem Schach zeigen und fragst: „Welche Art ist das?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich wehre ein Schach ab und finde ein Matt in einem Zug ohne Hilfe.",
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
    "titel": "Minispiel „Schachzwang“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit mit wenigen Figuren: Jedes Kind hat König, Turm, Läufer und drei Bauern auf den Startfeldern. Es gelten alle Regeln, dazu eine Sonderregel: Wer Schach geben kann, muss Schach geben. Wer mattsetzt, gewinnt. Nach zehn Minuten gewinnt, wer mehr Punkte geschlagen hat. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Rückblick: „Welche drei Rettungen gibt es aus dem Schach?“ Aufräum-Ritual. Ausblick: Nächstes Mal spielt ihr eure erste ganze Partie."
    ],
    "kinder": "Ich rette meinen König im Spiel aus jedem Schach.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Schachzwang“ (Video)",
      "url": "https://www.youtube.com/watch?v=FJQpIInED9g"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Die drei Rettungen als Karte neben das Brett legen: wegziehen, dazwischenstellen, schlagen. Für jede Rettung einzeln prüfen.",
   "zusatz": "Eine eigene Stellung bauen, in der der König im Schach steht und genau eine Rettung hat. Der Partner findet sie.",
   "kuerzen": "Die Partnerübung entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Schachzwang dauert nur fünf Minuten."
  },
  "nachher": "Wer lässt den König im Schach stehen? Wer hält jedes Schach für Matt? Die drei Rettungen greifst du in Woche 9 vor der ersten ganzen Partie wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "4k3/8/p7/1p1b4/8/2N5/8/4K3",
     "pruef": {
      "gewinn": "w"
     },
     "targets": null,
     "antwort": "Den Läufer d5, er ist ungedeckt: plus 3. Den Bauern b5 deckt der Bauer a6.",
     "hilfe": [
      "Welche Figuren erreicht der Springer?",
      "Wer schlägt jeweils zurück?"
     ]
    },
    {
     "frage": "Weiß könnte mit dem Turm den Turm d6 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.",
     "fen": "4k3/2p5/3r4/8/8/8/8/3RK3",
     "pruef": {
      "verteidiger": "d6"
     },
     "tausch": {
      "zug": "d1d6",
      "ergebnis": "gleich"
     },
     "targets": null,
     "antwort": "Der Bauer c7. Turm gegen Turm, 5 gegen 5: ein gleicher Tausch.",
     "hilfe": [
      "Wer deckt den Turm d6?",
      "Der Bauer schlägt schräg nach unten."
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an.",
     "fen": "6k1/5ppp/8/3q4/8/2n5/1B6/3R2K1",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Die Dame d5, sie ist ungedeckt: plus 9. Der Springer c3 brächte nur 3.",
     "hilfe": [
      "Welche schwarzen Figuren kann Weiß schlagen?",
      "Welche ist am meisten wert?"
     ]
    },
    {
     "frage": "Klicke die beiden Könige an. Wie viele Punkte ist ein König wert?",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "e1",
      "e8"
     ],
     "antwort": "e1 und e8. Der König ist unbezahlbar. Wer ihn nicht mehr retten kann, verliert die Partie.",
     "hilfe": [
      "Der König steht neben der Dame.",
      "Er steht auf der e-Linie."
     ]
    },
    {
     "frage": "Steht der weiße König im Schach? Klicke die Figur an, die Schach gibt.",
     "fen": "4r2k/8/8/8/8/8/8/4K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 2",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Ja. Der Turm e8 greift den König über die e-Linie an.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Ist der Weg zum König frei?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Steht der schwarze König im Schach? Klicke die Figur an, die Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/4p3/8/8/8/8/8/4R1K1",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 1",
     "zug": "b",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Nein. Der Bauer e7 steht zwischen Turm und König.",
     "hilfe": [
      "Fahre die e-Linie vom Turm aus hoch.",
      "Was steht im Weg?"
     ]
    }
   ],
   "E": [
    {
     "frage": "Rettung 1, wegziehen: Der Turm d8 gibt Schach. Markiere alle sicheren Felder für den König.",
     "fen": "3r3k/8/8/8/8/8/8/3K4",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 5",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "c1, c2, e1 und e2. Die ganze d-Linie bleibt angegriffen.",
     "hilfe": [
      "Der König muss die d-Linie verlassen.",
      "Zeige alle Nachbarfelder."
     ]
    },
    {
     "frage": "Rettung 2, dazwischenstellen: Der Turm e8 gibt Schach. Markiere die Felder, auf die der Läufer ziehen kann, um den Angriff zu sperren.",
     "fen": "4r2k/8/8/8/2B5/8/8/4K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 7",
     "schach": true,
     "leer": true,
     "pruef": {
      "zwischen": true
     },
     "targets": null,
     "antwort": "e2 und e6. Dort steht der Läufer zwischen Turm und König.",
     "hilfe": [
      "Der Läufer muss auf die e-Linie.",
      "Welche Felder der e-Linie erreicht er?"
     ]
    },
    {
     "frage": "Rettung 3, schlagen: Der Turm e2 gibt Schach. Klicke alle weißen Figuren an, die ihn schlagen können.",
     "fen": "7k/8/8/8/8/8/4r3/3QK3",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 6",
     "schach": true,
     "pruef": {
      "schlagen": true
     },
     "targets": null,
     "antwort": "Die Dame d1 und der König e1. Der König darf schlagen, weil der Turm ungedeckt ist.",
     "hilfe": [
      "Wer erreicht das Feld e2?",
      "Der König darf nur ungedeckte Figuren schlagen."
     ]
    },
    {
     "frage": "Die Dame g2 gibt Schach. Markiere alle Felder, auf die der weiße König ziehen kann. Wenn keins: Ist es Matt? Dann drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/5k2/6q1/7K",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 12",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, es ist Matt. Die Dame greift alle Fluchtfelder an, und der schwarze König deckt sie, deshalb darf Weiß sie nicht schlagen.",
     "hilfe": [
      "Kann der König die Dame schlagen?",
      "Wer deckt die Dame?"
     ]
    },
    {
     "frage": "Weiß hat mit dem Turm auf a8 Schach gegeben. Ist es Matt? Markiere alle Felder, auf die der schwarze König fliehen kann.",
     "fen": "R5k1/8/8/8/8/8/8/6K1",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Schach oder Matt",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "f7, g7 und h7. Der König flieht nach vorn: kein Matt.",
     "hilfe": [
      "Der Turm greift nur die 8. Reihe an.",
      "Ist die 7. Reihe frei?"
     ]
    },
    {
     "frage": "Finde das Matt: Klicke das Feld an, auf das die Dame ziehen muss.",
     "fen": "7k/8/6K1/8/8/8/8/5Q2",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 14",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f8. Die Dame gibt Schach über die 8. Reihe, der weiße König deckt g7 und h7.",
     "hilfe": [
      "Die Dame muss auf die 8. Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Der Turm a1 gibt Schach. Markiere alle sicheren Felder für den König.",
     "fen": "7k/8/8/8/8/8/8/r3K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 8",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "d2, e2 und f2. Die 1. Reihe bleibt angegriffen.",
     "hilfe": [
      "Der König muss die 1. Reihe verlassen.",
      "Zeige alle Nachbarfelder."
     ]
    },
    {
     "frage": "Der Turm gibt Schach. Markiere das Feld, auf das der Springer ziehen kann, um sich dazwischenzustellen.",
     "fen": "4r2k/8/8/8/8/8/3N4/4K3",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 4 bis 7",
     "schach": true,
     "leer": true,
     "pruef": {
      "zwischen": true
     },
     "targets": null,
     "antwort": "e4. Der Springer sperrt die e-Linie. Auch der König könnte wegziehen.",
     "hilfe": [
      "Der Springer muss auf die e-Linie.",
      "Welche Springerfelder liegen auf der e-Linie?"
     ]
    },
    {
     "frage": "Der Läufer b4 gibt Schach. Darf der König ihn schlagen? Markiere alle Felder, auf die der König ziehen darf.",
     "fen": "8/8/2n2k2/8/1b6/2K5/8/8",
     "quelle": "Lumi Test zu Kurs I, Aufgabe 9",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "b2, b3, c2, c4 und d3. Der Springer c6 deckt den Läufer, deshalb darf der König nicht schlagen.",
     "hilfe": [
      "Wer deckt den Läufer?",
      "Prüfe jedes Nachbarfeld."
     ]
    },
    {
     "frage": "Schwarz steht im Schach. Klicke alle schwarzen Figuren an, die das Schach abwehren können.",
     "fen": "1n2kq2/4pppp/2B5/5b2/8/5N2/5PPP/5RK1",
     "quelle": "Lumi Selbstlernkurs I, Schach",
     "zug": "b",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der Springer b8 (schlägt oder stellt sich dazwischen), der Läufer f5 (dazwischen auf d7) und der König (nach d8).",
     "hilfe": [
      "Prüfe alle drei Rettungen.",
      "Wer erreicht c6 oder d7?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "1k6/4R3/8/8/8/8/5R2/5K2",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f8. Der Turm f8 greift die 8. Reihe an, der Turm e7 sperrt die 7. Reihe.",
     "hilfe": [
      "Ein Turm schützt die 7. Reihe.",
      "Der andere gibt Schach auf der 8. Reihe."
     ]
    },
    {
     "frage": "Mit welchem Sprung setzt der Springer matt? Klicke das Zielfeld an.",
     "fen": "6rk/6pp/3N1p2/8/8/6PP/6K1/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 13",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f7. Der Springer gibt Schach, und der König ist von seinen eigenen Figuren eingesperrt.",
     "hilfe": [
      "Der Springer kann nicht gesperrt werden.",
      "Wohin kann der König fliehen?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Ein Kind zieht den König von e2 nach e3. Warum ist das falsch? Markiere alle sicheren Felder.",
     "fen": "4r2k/8/8/8/8/8/4K3/8",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Aufgabe 10",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "d1, d2, d3, f1, f2 und f3. Auf e3 bliebe der König auf der e-Linie im Schach.",
     "hilfe": [
      "Der Turm greift die ganze e-Linie an.",
      "Der König muss die Linie verlassen."
     ]
    },
    {
     "frage": "Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "7k/8/8/8/8/R2n4/8/4K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König (er zieht weg) und der Turm a3 (er schlägt den Springer). Gegen ein Springerschach kann man sich nicht dazwischenstellen.",
     "hilfe": [
      "Ein Springer springt über Figuren.",
      "Prüfe wegziehen und schlagen."
     ]
    },
    {
     "frage": "Ein Kind zieht den Turm nach a8 und ruft „Matt!“. Klicke die schwarze Figur an, die den Turm a8 schlagen kann.",
     "fen": "R4rk1/5ppp/8/8/8/8/8/6K1",
     "quelle": "Ludgerus-Schachdiplom Bronze 3, Schach oder Matt",
     "zug": "b",
     "pruef": {
      "erreichen": "a8",
      "weiss": false
     },
     "targets": null,
     "antwort": "Der Turm f8. Ta8 ist nicht einmal Schach, denn der Turm f8 steht dazwischen. Er kann den Turm a8 schlagen.",
     "hilfe": [
      "Ist der Weg von a8 zum König frei?",
      "Wer steht auf der 8. Reihe dazwischen?"
     ]
    },
    {
     "frage": "Ist das Matt? Markiere alle Felder, auf die der weiße König fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "6k1/5p1p/6p1/8/8/8/5PPP/4r1K1",
     "quelle": "Lumi Selbstlernkurs I, Schachmatt",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, es ist Matt. Die eigenen Bauern sperren den König ein, und der Turm greift die 1. Reihe an.",
     "hilfe": [
      "Wer sperrt die Felder f2, g2 und h2?",
      "Kann Weiß den Turm schlagen?"
     ]
    },
    {
     "frage": "Darf der König die Dame schlagen? Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "6k1/8/8/7b/8/8/R3q3/4K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Nur der Turm a2. Er schlägt die Dame. Der König darf sie nicht schlagen, weil der Läufer h5 sie deckt.",
     "hilfe": [
      "Wer deckt die Dame?",
      "Kann eine andere Figur sie schlagen?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "6k1/5p1p/6pB/8/8/8/6K1/1R6",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 19",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Der Turm gibt Schach, und der Läufer h6 deckt g7.",
     "hilfe": [
      "Die eigenen Bauern sperren den König ein.",
      "Welches Fluchtfeld deckt der Läufer?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "3k4/8/8/1n6/3K4/8/8/7r",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Der Springer b5.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Denk an die Springersprünge."
     ]
    },
    {
     "frage": "Der Läufer gibt Schach. Markiere alle sicheren Felder für den König.",
     "fen": "4k3/8/8/8/8/2b5/8/4K3",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "d1, e2, f1 und f2. Auf d2 bliebe er auf der Diagonale des Läufers.",
     "hilfe": [
      "Der Läufer greift schräg an.",
      "Prüfe jedes Nachbarfeld."
     ]
    },
    {
     "frage": "Der Turm a1 gibt Schach, der König kann nicht weg. Markiere die Felder, auf die der Springer ziehen kann, um sich dazwischenzustellen.",
     "fen": "4k3/8/8/8/8/4N3/6PP/r6K",
     "schach": true,
     "leer": true,
     "pruef": {
      "zwischen": true
     },
     "targets": null,
     "antwort": "d1 und f1. Der Springer sperrt die 1. Reihe.",
     "hilfe": [
      "Der Springer muss auf die 1. Reihe.",
      "Welche Springerfelder liegen dort?"
     ]
    },
    {
     "frage": "Der Springer f3 gibt Schach. Klicke alle weißen Figuren an, die ihn schlagen können.",
     "fen": "6k1/8/8/8/8/5n2/6P1/3Q2K1",
     "schach": true,
     "pruef": {
      "schlagen": true
     },
     "targets": null,
     "antwort": "Der Bauer g2 und die Dame d1.",
     "hilfe": [
      "Wer erreicht das Feld f3?",
      "Der Bauer schlägt schräg."
     ]
    },
    {
     "frage": "Wohin zieht der Turm, um mattzusetzen? Klicke das Feld an.",
     "fen": "7k/5K2/4R3/8/8/8/8/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 5",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "h6. Der Turm gibt Schach, der weiße König deckt g7 und g8.",
     "hilfe": [
      "Der Turm muss auf die h-Linie.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Markiere das Feld, auf das Weiß zieht.",
     "fen": "3k4/8/5K2/8/8/7B/8/2R5",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 25",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "c8. Der Turm gibt Schach, der Läufer h3 deckt d7, der König f6 deckt e7.",
     "hilfe": [
      "Der Turm muss auf die 8. Reihe.",
      "Welche Fluchtfelder decken König und Läufer?"
     ]
    }
   ]
  }
 },
 "9": {
  "thema": "Die erste ganze Partie und Fairplay",
  "lernziel": "Ich kann eine Partie nach den Regeln und fair spielen.",
  "leitfrage": "Was gehört zu einer fairen Partie, und worauf achte ich in den ersten Zügen?",
  "vorwissen": "Alle Figuren, Schach und Matt (Woche 3 bis 8).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "AG-Konzept (Regeln und Rituale), FIDE-Regeln zu „berührt, geführt“ und „losgelassen ist gezogen“ in kindgerechter Form. Brettaufgaben eigene Aufgaben aus typischen Anfängerpartien (Narrenmatt, Schäfermatt), alle Stellungen aus echten Zugfolgen erzeugt und mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Schach und Matt wiederholen",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W6 die Fehler aus Woche 8 aufgreifen: Wer gibt Schach? Welche Rettung gibt es? Wo ist das Matt?",
     "Ziel nennen: „Heute spielt ihr eure erste ganze Partie. Dazu gehören Regeln für ein faires Spiel.“"
    ],
    "kinder": "Ich erkenne Schach und Matt sicher.",
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
    "titel": "Fairplay-Regeln und drei Tipps für die ersten Züge",
    "ablauf": [
     "Plakat „Fairplay“ aufhängen und gemeinsam lesen: Handschlag, berührt, geführt, losgelassen ist gezogen, zurechtrücken, leise spielen, gratulieren. Zwei Kinder spielen „berührt, geführt“ einmal vor.",
     "Am Lehrbrett E1 bis E6: Wer beginnt, welche Figuren dürfen zuerst ziehen, was passiert bei berührt und losgelassen, wie schnell eine Partie verloren gehen kann (Narrenmatt).",
     "Drei Tipps für die ersten Züge: Bauern in die Mitte, Springer und Läufer herausbringen, vor jedem Zug fragen: Was greift mein Gegner an? Merksatz: „Erst Handschlag, dann denken, dann ziehen.“"
    ],
    "kinder": "Ich nenne die Fairplay-Regeln und drei Tipps für den Anfang.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Fairplay",
      "was": "fairplay"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Die Partie E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Die erste ganze Partie",
    "ablauf": [
     "Zu zweit: Brett hinlegen, aufbauen, Handschlag. Weiß beginnt. Gespielt wird bis zum Matt oder bis zum Stopp-Signal. Du gehst herum und achtest auf berührt, geführt.",
     "Danach wechseln die Rollen: In der zweiten Partie spielt das andere Kind Weiß.",
     "Wer früh fertig ist, löst das Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich spiele eine ganze Partie nach den Regeln.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Die erste Partie",
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
    "titel": "Was ist in euren Partien passiert?",
    "ablauf": [
     "Stopp-Signal. Zwei oder drei Kinder erzählen kurz von ihrer Partie. Am Lehrbrett S1 bis S6 typische Situationen klären: die Dame zu früh draußen, berührte Figuren, die Schäfermatt-Drohung, Matt nicht erkannt.",
     "Bei jeder Aufgabe nachfragen: „Was hättest du vorher prüfen können?“ oder „Woran erkennst du die Drohung?“ Alle sprechen den Merksatz."
    ],
    "kinder": "Ich erkenne typische Fehler aus den ersten Zügen.",
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
    "titel": "Fairplay beobachten und sechs Aufgaben",
    "ablauf": [
     "Während der Partien beobachtest du: Handschlag, berührt, geführt, leise spielen. Bei Fehlern gibst du einen konkreten Hinweis.",
     "Jedes Kind löst L1 bis L6 allein, gern als Hausaufgabe. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich halte die Fairplay-Regeln ein und löse die Aufgaben ohne Hilfe.",
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
    "titel": "Handschlag, Rückblick, Aufräumen",
    "ablauf": [
     "Alle Partien enden mit Handschlag. Wer verloren hat, gratuliert, wer gewonnen hat, bedankt sich.",
     "Rückblick: „Welche Fairplay-Regel war heute am schwersten?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist Spielstunde, ihr spielt mehrere Partien und wiederholt alles für das Bronze-Diplom."
    ],
    "kinder": "Ich beende meine Partie fair und räume auf.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Fairplay (Handschlag und Gratulieren)",
      "was": "fairplay"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Plakat „Fairplay“ und die Karte mit den drei Tipps neben das Brett legen. Unsichere Kinder spielen zuerst gegen dich oder ein erfahrenes Kind.",
   "zusatz": "Die eigene Partie mitzählen: Wie viele Züge hat sie gedauert? Welche Figur hat zuerst geschlagen?",
   "kuerzen": "Die Erarbeitung auf das Plakat und E4 (Narrenmatt) kürzen, damit genug Zeit für die Partie bleibt. Die Aufgaben L1 bis L6 werden Hausaufgabe, Handschlag und Aufräumen bleiben."
  },
  "nachher": "Wer vergisst noch Handschlag oder berührt, geführt? Wer verliert schnell durch ein frühes Matt? Diese Kinder spielen in Woche 10 zuerst gegen erfahrene Kinder.",
  "feld": {
   "W": [
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "4k3/8/8/8/1b6/8/8/4K3",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Der Läufer b4. Er greift den König über die Diagonale an.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Der Läufer greift schräg an."
     ]
    },
    {
     "frage": "Der Turm gibt Schach. Markiere alle sicheren Felder für den König.",
     "fen": "4k3/8/8/8/8/8/8/r5K1",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "f2, g2 und h2. Die 1. Reihe bleibt angegriffen.",
     "hilfe": [
      "Der König muss die 1. Reihe verlassen.",
      "Zeige alle Nachbarfelder."
     ]
    },
    {
     "frage": "Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "4k3/8/8/8/8/3n4/8/1B2K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König (er zieht weg) und der Läufer b1 (er schlägt den Springer). Dazwischenstellen geht beim Springer nicht.",
     "hilfe": [
      "Prüfe wegziehen und schlagen.",
      "Wer erreicht das Feld d3?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "6k1/5ppp/8/8/8/8/8/R5K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8. Der Turm gibt Schach auf der 8. Reihe, die eigenen Bauern sperren den König ein.",
     "hilfe": [
      "Der König hat vor sich nur eigene Bauern.",
      "Der Turm muss auf die 8. Reihe."
     ]
    },
    {
     "frage": "Weiß hat mit dem Turm auf a8 Schach gegeben. Ist es Matt? Markiere alle Felder, auf die der schwarze König fliehen kann.",
     "fen": "R5k1/5pp1/7p/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Nur h7. Schwarz hat vorher h6 gezogen, deshalb ist es kein Matt.",
     "hilfe": [
      "Welche Felder vor dem König sind frei?",
      "Der Bauer h6 hat ein Feld frei gemacht."
     ]
    },
    {
     "frage": "Der Turm gibt Schach. Markiere das Feld, auf das der Springer ziehen kann, um sich dazwischenzustellen.",
     "fen": "4k3/8/8/8/8/4N3/8/r3K3",
     "schach": true,
     "leer": true,
     "pruef": {
      "zwischen": true
     },
     "targets": null,
     "antwort": "d1. Der Springer sperrt die 1. Reihe. Der König könnte auch wegziehen.",
     "hilfe": [
      "Der Springer muss zwischen a1 und e1.",
      "Welche Springerfelder liegen auf der 1. Reihe?"
     ]
    }
   ],
   "E": [
    {
     "frage": "Weiß beginnt. Klicke alle weißen Figuren an, die im ersten Zug ziehen können.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Die acht Bauern und die beiden Springer. Alle anderen Figuren sind noch eingesperrt.",
     "hilfe": [
      "Wer hat ein freies Feld vor sich?",
      "Der Springer springt über die Bauern."
     ]
    },
    {
     "frage": "Berührt, geführt: Das Kind hat den Springer g1 berührt und muss mit ihm ziehen. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "zuege": "g1"
     },
     "targets": null,
     "antwort": "e2, f3 und h3. Am besten ist f3, dort greift er den Bauern e5 an.",
     "hilfe": [
      "Berührt heißt: mit dieser Figur ziehen.",
      "Zwei gerade, eins zur Seite."
     ]
    },
    {
     "frage": "Losgelassen ist gezogen: Die Dame wurde auf g4 losgelassen und bleibt dort. Klicke die schwarze Figur an, die sie jetzt schlagen kann.",
     "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/4P1Q1/8/PPPP1PPP/RNB1KBNR",
     "pruef": {
      "erreichen": "g4",
      "weiss": false
     },
     "targets": null,
     "antwort": "Der Läufer c8. Losgelassen ist gezogen, die Dame darf nicht zurück.",
     "hilfe": [
      "Welche schwarze Figur erreicht g4?",
      "Seit d6 ist der Weg für den Läufer frei."
     ]
    },
    {
     "frage": "Das schnellste Matt: Weiß hat f3 und g4 gezogen. Klicke das Feld an, auf dem Schwarz jetzt mattsetzt.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR",
     "zug": "b",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "h4. Die Dame gibt Schach, und der weiße König kann nicht fliehen. Das heißt Narrenmatt.",
     "hilfe": [
      "Die Diagonale zum weißen König ist offen.",
      "Die schwarze Dame zieht."
     ]
    },
    {
     "frage": "Tipp 1, Bauern in die Mitte: Markiere die beiden Zentrumsfelder, die ein weißer Bauer im ersten Zug erreichen kann.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "leer": true,
     "targets": [
      "d4",
      "e4"
     ],
     "antwort": "d4 und e4. Mit dem Doppelschritt besetzt ein Bauer sofort das Zentrum.",
     "hilfe": [
      "Das Zentrum sind d4, e4, d5 und e5.",
      "Welche davon erreicht ein Bauer von der 2. Reihe?"
     ]
    },
    {
     "frage": "Tipp 2, Figuren herausbringen: Klicke alle weißen Springer und Läufer an, die jetzt schon ziehen können.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
     "pruef": {
      "ziehbar": true,
      "typen": "nb"
     },
     "targets": null,
     "antwort": "Die Springer b1 und g1 und der Läufer f1. Der Bauernzug e4 hat dem Läufer den Weg frei gemacht.",
     "hilfe": [
      "Springer springen über die Bauern.",
      "Welcher Läufer hat eine freie Diagonale?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR",
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f7. Die Dame schlägt den Bauern, der Läufer c4 deckt sie. Das heißt Schäfermatt.",
     "hilfe": [
      "Welcher schwarze Bauer ist nur vom König gedeckt?",
      "Dame und Läufer zielen auf dasselbe Feld."
     ]
    },
    {
     "frage": "Weiß droht Dxf7 matt. Markiere die Felder, auf die die schwarze Dame ziehen kann, um f7 zu decken.",
     "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR",
     "zug": "b",
     "leer": true,
     "pruef": {
      "deckzug": {
       "figuren": [
        "d8"
       ],
       "ziel": "f7"
      }
     },
     "targets": null,
     "antwort": "e7 und f6. Von dort deckt die Dame den Bauern f7.",
     "hilfe": [
      "Die Dame muss f7 im Blick haben.",
      "Von welchen Feldern sieht sie f7?"
     ]
    },
    {
     "frage": "Berührt, geführt: Schwarz hat den Läufer f8 berührt. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "zuege": "f8"
     },
     "targets": null,
     "antwort": "e7, d6, c5, b4 und a3. Der Bauernzug e5 hat ihm den Weg frei gemacht.",
     "hilfe": [
      "Der Läufer zieht schräg.",
      "Nur eine Diagonale ist frei."
     ]
    },
    {
     "frage": "Klicke alle weißen Figuren an, die hängen.",
     "fen": "rnbqkbnr/ppp1pppp/8/3p4/2B1P3/8/PPPP1PPP/RNBQK1NR",
     "zug": "b",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "Der Läufer c4 und der Bauer e4. Beide greift der Bauer d5 an, und niemand deckt sie.",
     "hilfe": [
      "Was greift der schwarze Bauer d5 an?",
      "Deckt eine weiße Figur c4 oder e4?"
     ]
    },
    {
     "frage": "Weiß hat mit dem Läufer auf f7 Schach gegeben. Klicke alle schwarzen Figuren an, die das Schach abwehren können.",
     "fen": "rnbqk1nr/pppp1Bpp/8/2b1p3/4P3/8/PPPP1PPP/RNBQK1NR",
     "zug": "b",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Nur der König. Er schlägt den Läufer oder zieht weg. Der Bauer f7 war nur vom König gedeckt.",
     "hilfe": [
      "Wer erreicht das Feld f7?",
      "Kann sich eine Figur dazwischenstellen?"
     ]
    },
    {
     "frage": "Welche weißen Figuren greifen den Bauern f7 an? Klicke sie an.",
     "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR",
     "zug": "b",
     "pruef": {
      "erreichen": "f7"
     },
     "targets": null,
     "antwort": "Der Läufer c4 und die Dame h5. f7 ist am Anfang der schwächste Punkt, nur der König deckt ihn.",
     "hilfe": [
      "Prüfe die Diagonalen zu f7.",
      "Zwei Figuren zielen auf f7."
     ]
    }
   ],
   "S": [
    {
     "frage": "Die Dame ist zu früh draußen und wird angegriffen. Markiere alle sicheren Felder, auf die sie ziehen kann.",
     "fen": "rnbqkb1r/pppp1ppp/5n2/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR",
     "leer": true,
     "pruef": {
      "sicher": "h5"
     },
     "targets": null,
     "antwort": "d1, e2, f3, h3, h4, g5, f5 und e5. Auf e5 schlägt sie sogar einen Bauern mit Schach. Auf g4, g6, h6, h7 und f7 wäre sie angegriffen.",
     "hilfe": [
      "Welche Felder greift Schwarz an?",
      "Bleibt die Dame dort ungedeckt?"
     ]
    },
    {
     "frage": "Berührt, geführt: Ein Kind hat aus Versehen den eigenen König berührt. Markiere das Feld, auf das er ziehen muss.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "zuege": "e1"
     },
     "targets": null,
     "antwort": "e2. Es ist das einzige freie Feld. Deshalb nur Figuren berühren, mit denen man auch ziehen will.",
     "hilfe": [
      "Welche Nachbarfelder sind frei?",
      "Nur ein Feld ist frei."
     ]
    },
    {
     "frage": "Ein Kind hat den schwarzen Bauern e5 berührt. Dann muss es ihn schlagen, wenn das geht. Klicke alle weißen Figuren an, die e5 schlagen können.",
     "fen": "r1bqkbnr/ppp2ppp/2np4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R",
     "pruef": {
      "erreichen": "e5"
     },
     "targets": null,
     "antwort": "Der Bauer d4 und der Springer f3. Berührt man eine gegnerische Figur, muss man sie schlagen, wenn es geht.",
     "hilfe": [
      "Wer erreicht das Feld e5?",
      "Der Bauer schlägt schräg."
     ]
    },
    {
     "frage": "Schwarz will die Dame vertreiben. Markiere das Feld, auf das ein schwarzer Bauer ziehen kann, um die Dame anzugreifen.",
     "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR",
     "zug": "b",
     "leer": true,
     "pruef": {
      "deckzug": {
       "figuren": [
        "g7"
       ],
       "ziel": "h5"
      }
     },
     "targets": null,
     "antwort": "g6. Der Bauer greift die Dame an und sperrt zugleich die Diagonale nach f7.",
     "hilfe": [
      "Welcher Bauer steht nahe bei der Dame?",
      "Ein Feld vorwärts genügt."
     ]
    },
    {
     "frage": "Schwarz meint, der König kann noch weg. Markiere alle Felder, auf die er fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, es ist Matt. Die Dame auf f7 ist vom Läufer c4 gedeckt, der König kann sie nicht schlagen.",
     "hilfe": [
      "Kann der König die Dame schlagen?",
      "Wer deckt die Dame?"
     ]
    },
    {
     "frage": "Achte auf die Angriffe des Gegners: Welche schwarzen Figuren greifen den Bauern e4 an? Klicke sie an.",
     "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR",
     "pruef": {
      "erreichen": "e4",
      "weiss": false
     },
     "targets": null,
     "antwort": "Der Bauer d5 und der Springer f6. Der Springer c3 deckt e4.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Der Bauer greift schräg nach unten an."
     ]
    }
   ],
   "L": [
    {
     "frage": "Schwarz ist am Zug. Klicke alle Figuren an, die Schwarz im ersten Zug ziehen kann.",
     "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Die acht Bauern und die beiden Springer.",
     "hilfe": [
      "Wer hat ein freies Feld vor sich?",
      "Der Springer springt über die Bauern."
     ]
    },
    {
     "frage": "Klicke das Feld an, auf dem Schwarz jetzt mattsetzt.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/5PP1/8/PPPPP2P/RNBQKBNR",
     "zug": "b",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "h4. Die Dame gibt Schach über die offene Diagonale, der König kann nicht fliehen.",
     "hilfe": [
      "Welche Diagonale zum weißen König ist offen?",
      "Die schwarze Dame zieht."
     ]
    },
    {
     "frage": "Berührt, geführt: Schwarz hat den Springer f6 berührt. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R",
     "leer": true,
     "pruef": {
      "zuege": "f6"
     },
     "targets": null,
     "antwort": "d5, e4, g4, h5 und g8. Auf e4 schlägt er den Bauern.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Auf e4 kann er schlagen."
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die hängt.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR",
     "pruef": {
      "haengt": "b"
     },
     "targets": null,
     "antwort": "Der Bauer e5. Ihn greift der Bauer d4 an, und niemand deckt ihn.",
     "hilfe": [
      "Was greift der weiße Bauer an?",
      "Deckt eine schwarze Figur e5?"
     ]
    },
    {
     "frage": "Schwarz steht im Schach. Klicke die schwarze Figur an, die das Schach abwehren kann.",
     "fen": "rnbqkbnr/ppppp1pp/5p2/7Q/4P3/8/PPPP1PPP/RNB1KBNR",
     "zug": "b",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Nur der Bauer g7: Er stellt sich auf g6 dazwischen. Der König kann nicht weg, e7 ist besetzt und f7 angegriffen.",
     "hilfe": [
      "Prüfe wegziehen, dazwischenstellen und schlagen.",
      "Kann ein Bauer die Diagonale sperren?"
     ]
    },
    {
     "frage": "Klicke die weiße Figur an, die in einem Zug mattsetzen kann.",
     "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR",
     "pruef": {
      "mattfigur": true
     },
     "targets": null,
     "antwort": "Die Dame f3. Sie schlägt auf f7, der Läufer c4 deckt sie.",
     "hilfe": [
      "Wer zielt auf f7?",
      "Die Dame braucht Deckung."
     ]
    }
   ]
  }
 },
 "10": {
  "thema": "Spielstunde und Wiederholung",
  "lernziel": "Ich kann meine Partie ohne Hilfe zu Ende spielen.",
  "leitfrage": "Was kann ich schon sicher, und was übe ich noch bis zum Bronze-Diplom?",
  "vorwissen": "Alle Figuren, Schach und Matt, Fairplay (Woche 3 bis 9).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Lumi „Matt in einem Zug“ (über die Lumi-Sammlung von edmundbruns.com), Spielform „Aufsteiger-Runde“ (verbreitete Turnierform im Schulschach). Übrige Brettaufgaben eigene Aufgaben, alle Lösungen automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Schnellrunde: sechs Fragen zu allen Figuren",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W6 eine Schnellrunde: Die Kinder zeigen die Lösung zuerst mit dem Finger am eigenen Brett, dann klickst du sie an.",
     "Ziel nennen: „Heute spielt ihr mehrere Partien und prüft, was ihr für das Bronze-Diplom schon könnt.“"
    ],
    "kinder": "Ich löse Aufgaben zu allen Figuren schnell.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Schnellrunde W1 bis W6",
      "set": "W"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Wiederholung: je eine Aufgabe zu jedem Thema",
    "ablauf": [
     "Am Lehrbrett E1 bis E6 gemeinsam: Dame, König, Umwandlung, Tauschen, Schach abwehren und Matt. Nach jeder Aufgabe flüstern sich die Partner die Lösung zu, dann löst ein Kind am Lehrbrett.",
     "Merksatz: „Vor jedem Zug drei Fragen: Was will mein Gegner? Ist meine Figur sicher? Kann ich Schach geben oder schlagen?“"
    ],
    "kinder": "Ich kann jedes Thema an einer Aufgabe erklären.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Wiederholung E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Partien in der Aufsteiger-Runde",
    "ablauf": [
     "Zwei oder drei Partien mit Handschlag. Nach jeder Partie rückt, wer gewonnen hat, einen Tisch nach rechts, wer verloren hat, einen Tisch nach links. Danach wechseln die Rollen: In der nächsten Partie spielt jedes Kind die andere Farbe.",
     "Jedes Kind trägt sein Ergebnis in die Ergebnisliste ein. Wer früh fertig ist, löst das Arbeitsblatt A1 bis A6."
    ],
    "kinder": "Ich spiele meine Partien zu Ende und trage das Ergebnis ein.",
    "links": [
     {
      "art": "druck",
      "label": "Ergebnisliste Aufsteiger-Runde",
      "was": "ergebnisliste"
     },
     {
      "art": "druck",
      "label": "Arbeitsblatt: Wiederholung",
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
    "titel": "Fehler aus den Partien klären",
    "ablauf": [
     "Stopp-Signal. Zwei Kinder zeigen eine Stelle aus ihrer Partie. Am Lehrbrett S1 bis S6 die häufigsten Fehler wiederholen: Läufer wechselt die Farbe, Springer zieht gerade, Bauer schlägt geradeaus, König neben König, schlechter Tausch, Schach für Matt gehalten.",
     "Bei jeder Aufgabe nachfragen: „Warum ist das falsch?“ oder „Woran erkennst du das?“"
    ],
    "kinder": "Ich erkenne die häufigsten Fehler und erkläre sie.",
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
    "titel": "Probe-Diplom: sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein. Wer fünf oder sechs Aufgaben richtig hat, ist bereit für das Bronze-Diplom.",
     "Während die anderen spielen, gehst du mit einzelnen Kindern die falschen Aufgaben am Brett durch. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich löse mindestens fünf von sechs Aufgaben ohne Hilfe.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel: Probe-Diplom",
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
    "titel": "Handschlag, Rückblick, Aufräumen",
    "ablauf": [
     "Alle Partien enden mit Handschlag. Frage: „Wer hat heute eine Partie bis zum Matt gespielt? Wer hat ein Schach richtig abgewehrt?“ Keine Rangliste vorlesen.",
     "Aufräum-Ritual. Ausblick: Nächstes Mal ist das Bronze-Diplom."
    ],
    "kinder": "Ich nenne etwas, das mir heute gelungen ist.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Fairplay",
      "was": "fairplay"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Unsichere Kinder spielen die erste Partie mit Plakat „Fairplay“ und der Karte mit den drei Fragen. Du setzt dich bei einer Partie dazu.",
   "zusatz": "Die eigene Partie aufschreiben, so gut es geht: Welche Figur hat wann gezogen? Das bereitet die Notation vor.",
   "kuerzen": "Nur zwei Partien spielen, die Erarbeitung auf E4 bis E6 kürzen. Das Probe-Diplom und das Aufräumen bleiben."
  },
  "nachher": "Welche Kinder haben im Probe-Diplom weniger als fünf Aufgaben geschafft? Bei welchem Thema? Diese Themen wiederholst du mit ihnen vor dem Bronze-Diplom in Woche 11.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der Turm ziehen kann.",
     "fen": "8/2p5/8/8/2R2P2/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c4"
     },
     "targets": null,
     "antwort": "c5, c6, c7 (dort schlägt er), c3, c2, c1, b4, a4, d4 und e4. Vor f4 hält er an.",
     "hilfe": [
      "Linie c und Reihe 4.",
      "Eigene Figur: anhalten. Gegnerische: schlagen."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer springen kann.",
     "fen": "8/8/1N6/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "b6"
     },
     "targets": null,
     "antwort": "a4, c4, d5, d7, a8 und c8. Am Rand hat er weniger Felder.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Manche Sprünge gehen über den Rand hinaus."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "8/8/8/8/8/5P1n/6P1/8",
     "leer": true,
     "pruef": {
      "zuege": "g2"
     },
     "targets": null,
     "antwort": "g3, g4 und h3. Auf h3 schlägt er den Springer. Den eigenen Bauern auf f3 schlägt er nicht.",
     "hilfe": [
      "Vom Startfeld gibt es den Doppelschritt.",
      "Schräg nur gegnerische Figuren schlagen."
     ]
    },
    {
     "frage": "Welche weißen Figuren hängen? Klicke sie an.",
     "fen": "4r2q/8/8/b7/8/2N1B3/1P6/7R",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "Der Läufer e3 (Turm e8) und der Turm h1 (Dame h8). Den Springer c3 deckt der Bauer b2.",
     "hilfe": [
      "Erst angegriffene Figuren suchen.",
      "Dann prüfen: Deckt sie jemand?"
     ]
    },
    {
     "frage": "Die Dame gibt Schach. Markiere alle Felder, auf die der König ziehen kann.",
     "fen": "4k3/8/8/8/8/8/3q4/4K3",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "d2 und f1. Auf d2 schlägt er die ungedeckte Dame.",
     "hilfe": [
      "Kann der König die Dame schlagen?",
      "Welche Felder greift die Dame nicht an?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "6k1/1R4p1/6P1/8/8/8/6K1/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 21",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Der Bauer g6 deckt f7 und h7, der Turm gibt Schach auf der 8. Reihe.",
     "hilfe": [
      "Welche Felder deckt der Bauer g6?",
      "Der Turm muss auf die 8. Reihe."
     ]
    }
   ],
   "E": [
    {
     "frage": "Dame: Markiere alle Felder, auf die die Dame ziehen kann.",
     "fen": "8/8/4p3/8/4Q1n1/8/2P5/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "22 Felder: auf der e-Linie e1 bis e3, e5 und e6 (dort schlägt sie), auf der 4. Reihe a4 bis d4 sowie f4 und g4 (dort schlägt sie), auf den Diagonalen d3 (vor c2 hält sie an), f3, g2, h1, d5, c6, b7, a8, f5, g6 und h7.",
     "hilfe": [
      "Acht Richtungen.",
      "Eigene Figur: anhalten. Gegnerische: schlagen."
     ]
    },
    {
     "frage": "König: Auf welche Nachbarfelder darf der weiße König nicht, weil der schwarze Turm sie angreift? Markiere sie.",
     "fen": "8/8/8/5r2/3K4/8/8/8",
     "leer": true,
     "pruef": {
      "verboten": "d4"
     },
     "targets": null,
     "antwort": "c5, d5 und e5. Der Turm greift die ganze 5. Reihe an.",
     "hilfe": [
      "Welche Felder greift der Turm an?",
      "Prüfe die Nachbarfelder des Königs."
     ]
    },
    {
     "frage": "Umwandlung: Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "r4br1/P1P2P2/8/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "c7 und f7. c7 zieht nach c8, f7 schlägt den Turm auf g8. a7 ist blockiert.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Ist das Feld davor frei, oder kann er schräg schlagen?"
     ]
    },
    {
     "frage": "Tauschen: Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "6k1/5ppp/8/3n4/8/2B5/8/3R2K1",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "d1d5",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Springer d5, er ist ungedeckt: plus 3.",
     "hilfe": [
      "Welche schwarzen Figuren erreicht Weiß?",
      "Wer schlägt zurück?"
     ]
    },
    {
     "frage": "Schach: Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "4k3/8/8/8/1b6/8/2P5/1N2K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König (er zieht weg), der Springer b1 (nach c3 oder d2 dazwischen) und der Bauer c2 (nach c3 dazwischen).",
     "hilfe": [
      "Prüfe wegziehen, dazwischenstellen und schlagen.",
      "Welche Felder liegen zwischen b4 und e1?"
     ]
    },
    {
     "frage": "Matt: Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "8/3Q4/5K2/7k/8/8/8/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 9",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "h3. Die Dame gibt Schach, der König f6 deckt g5 und g6.",
     "hilfe": [
      "Welche Felder deckt der weiße König?",
      "Die Dame muss auf die h-Linie."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die der Läufer ziehen kann.",
     "fen": "8/8/8/1P3p2/8/3B4/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d3"
     },
     "targets": null,
     "antwort": "e4, f5 (dort schlägt er), c4, c2, b1, e2 und f1. Vor dem eigenen Bauern b5 hält er an.",
     "hilfe": [
      "Vier Diagonalen.",
      "Eigene Figur: anhalten. Gegnerische: schlagen."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.",
     "fen": "8/4q3/3b3p/5N2/3P4/6r1/8/8",
     "pruef": {
      "schlaege": [
       "f5"
      ]
     },
     "targets": null,
     "antwort": "d6, e7, g3 und h6. Den eigenen Bauern d4 schlägt er nicht.",
     "hilfe": [
      "Zeige alle acht Springerfelder.",
      "Den eigenen Bauern schlägt er nicht."
     ]
    },
    {
     "frage": "Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.",
     "fen": "8/8/8/8/3p2n1/1P6/P2P1PP1/8",
     "pruef": {
      "doppelschritt": true
     },
     "targets": null,
     "antwort": "a2 und f2. b3 hat schon gezogen, für d2 und g2 ist das Feld vier besetzt.",
     "hilfe": [
      "Startfeld auf der 2. Reihe?",
      "Beide Felder davor frei?"
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an.",
     "fen": "6k1/5ppp/8/1b3q2/8/3Q4/8/6K1",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Die Dame f5. Sie ist ungedeckt: plus 9. Der Läufer b5 brächte nur 3.",
     "hilfe": [
      "Welche Figuren erreicht die weiße Dame?",
      "Welche ist am meisten wert?"
     ]
    },
    {
     "frage": "Der Springer ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.",
     "fen": "1r3b2/8/2p5/3N4/8/8/8/8",
     "leer": true,
     "pruef": {
      "sicher": "d5"
     },
     "targets": null,
     "antwort": "c3, c7, e3, f4 und f6. Auf b4 und b6 greift der Turm an, auf e7 der Läufer.",
     "hilfe": [
      "Zeige alle Springerfelder.",
      "Streiche die Felder, die Schwarz angreift."
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "1B5k/5K2/7p/8/8/3B4/8/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 11",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "e5. Der Läufer gibt Schach auf der langen Diagonale, der König f7 deckt g7 und g8.",
     "hilfe": [
      "Welcher Läufer kann Schach geben?",
      "Wohin könnte der König fliehen?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Der Läufer f1 bleibt immer auf seiner Farbe. Markiere alle Felder der 8. Reihe, die er irgendwann erreichen kann.",
     "fen": "8/8/8/8/8/8/8/5B2",
     "leer": true,
     "pruef": {
      "farbe": "f1",
      "reihe": 8
     },
     "targets": null,
     "antwort": "a8, c8, e8 und g8. f1 ist hell, also erreicht er nur helle Felder.",
     "hilfe": [
      "Welche Farbe hat f1?",
      "Auf der 8. Reihe wechseln hell und dunkel ab."
     ]
    },
    {
     "frage": "Ein Kind zieht den Springer von e4 nach e6. Markiere die Felder der 6. Reihe, auf die er wirklich springen kann.",
     "fen": "8/8/8/8/4N3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4",
      "reihe": 6
     },
     "targets": null,
     "antwort": "d6 und f6. Der Springer zieht nie nur gerade.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Links oder rechts von e6."
     ]
    },
    {
     "frage": "Ein Kind schlägt mit dem Bauern e4 geradeaus auf e5. Markiere, wohin der Bauer wirklich darf.",
     "fen": "8/8/8/4pn2/4P3/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e4"
     },
     "targets": null,
     "antwort": "Nur f5. Der Bauer schlägt schräg, nie geradeaus.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Schräg vor ihm steht eine Figur."
     ]
    },
    {
     "frage": "Auf welche Felder darf der weiße König nicht, weil dort der schwarze König angreift? Markiere sie.",
     "fen": "8/8/3k4/8/3K4/8/8/8",
     "leer": true,
     "pruef": {
      "verboten": "d4"
     },
     "targets": null,
     "antwort": "c5, d5 und e5. Zwei Könige stehen nie nebeneinander.",
     "hilfe": [
      "Welche Felder berühren beide Könige?",
      "Sie liegen zwischen den Königen."
     ]
    },
    {
     "frage": "Lohnt es sich, mit der Dame den Läufer e6 zu schlagen? Klicke die Figur an, die zurückschlagen würde.",
     "fen": "4k3/5p2/4b3/8/8/8/4Q3/4K3",
     "pruef": {
      "verteidiger": "e6"
     },
     "tausch": {
      "zug": "e2e6",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Bauer f7. Dame gegen Läufer, 9 gegen 3: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Läufer?",
      "Erst rechnen, dann schlagen."
     ]
    },
    {
     "frage": "Ein Kind ruft nach dem Turmschach „Matt!“. Markiere alle Felder, auf die der schwarze König fliehen kann.",
     "fen": "R5k1/6pp/8/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Nur f7. Es ist kein Matt, der König flieht nach f7.",
     "hilfe": [
      "Welche Felder vor dem König sind frei?",
      "Der Bauer f7 fehlt."
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere die Felder, auf denen die beiden Damen in der Grundstellung stehen.",
     "leer": true,
     "targets": [
      "d1",
      "d8"
     ],
     "antwort": "d1 und d8. Die Dame steht auf ihrer Farbe.",
     "hilfe": [
      "Die Dame steht neben dem König.",
      "Die weiße Dame steht auf Hell."
     ]
    },
    {
     "frage": "Welche schwarze Figur kann der Turm schlagen? Klicke sie an.",
     "fen": "b7/8/8/8/R1P1n2p/8/P7/8",
     "pruef": {
      "schlaege": [
       "a4"
      ]
     },
     "targets": null,
     "antwort": "Nur den Läufer a8. Zum Springer e4 kommt er nicht, der eigene Bauer c4 steht im Weg.",
     "hilfe": [
      "Prüfe die a-Linie und die 4. Reihe.",
      "Eigene Figuren halten den Turm auf."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer springen kann.",
     "fen": "8/8/8/5p1P/8/6N1/4P3/8",
     "leer": true,
     "pruef": {
      "zuege": "g3"
     },
     "targets": null,
     "antwort": "e4, f1, f5 und h1. Auf f5 schlägt er. Auf e2 und h5 stehen eigene Bauern.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Auf eigene Figuren darf er nicht."
     ]
    },
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "4k3/8/8/8/8/8/8/q3K3",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Die Dame a1. Sie greift über die 1. Reihe an.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Ist der Weg zum König frei?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "6k1/5ppp/8/8/2n5/1P6/8/6K1",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "b3c4",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Springer c4. Der Bauer schlägt ihn, niemand schlägt zurück: plus 3.",
     "hilfe": [
      "Der Bauer schlägt schräg nach vorn.",
      "Deckt jemand den Springer?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "8/8/7k/7P/8/6Q1/6K1/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 43",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "g6. Die Dame gibt Schach, der Bauer h5 deckt sie.",
     "hilfe": [
      "Die Dame braucht Deckung.",
      "Welches Feld deckt der Bauer h5?"
     ]
    }
   ]
  }
 },
 "11": {
  "thema": "Bronze-Diplom",
  "lernziel": "Ich kann die Bronze-Missionen allein lösen.",
  "leitfrage": "Zeige ich am Brett und auf dem Testblatt, dass ich alle Grundregeln kann?",
  "vorwissen": "Alle Themen der Wochen 1 bis 10.",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Ludgerus-Schachdiplom Bronze 1 bis 4 und praktischer Gelingensnachweis (ludgerus-schachdiplom.netlify.app), Lumi „Matt in einem Zug“. Übrige Testaufgaben eigene Aufgaben, alle Lösungen automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Aufwärmen und Ablauf erklären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W6 eine kurze Aufwärmrunde.",
     "Ablauf erklären: Heute zeigt ihr am Brett und auf zwei Testblättern, was ihr könnt. Wer alle fünf Punkte am Brett schafft und mindestens 10 von 12 Testaufgaben, bekommt das Bronze-Diplom. Wer es heute noch nicht schafft, übt weiter und versucht es noch einmal."
    ],
    "kinder": "Ich weiß, wie die Diplom-Prüfung abläuft.",
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
    "titel": "Generalprobe am Lehrbrett",
    "ablauf": [
     "Am Lehrbrett E1 bis E6 eine Generalprobe: Läufer und Farbe, Springer, schwarzer Bauer, Tauschen, Schach abwehren, Matt. Nach jeder Aufgabe zeigen alle mit Daumen hoch, Mitte oder runter, wie sicher sie sich fühlen.",
     "Merksatz: „Ruhig lesen, mit dem Finger prüfen, dann erst antworten.“"
    ],
    "kinder": "Ich weiß, welche Themen ich sicher kann.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Generalprobe E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Praktischer Nachweis zu zweit und faire Partie",
    "ablauf": [
     "Zu zweit mit dem Prüfbogen: Kind A zeigt die Grundstellung, je einen Zug jeder Figur, Schach und Matt und die drei Rettungen. Kind B prüft. Danach wechseln die Rollen. Du gehst herum und hakst auf dem Prüfbogen ab, was jedes Kind allein zeigt.",
     "Danach spielen beide eine kurze faire Partie mit Handschlag. Du beobachtest das Fairplay. Frage zwischendurch: „Woran erkennst du, dass das Matt ist?“",
     "Wer Geräte hat, kann zusätzlich die Bronze-Missionen im Ludgerus-Schachdiplom online bearbeiten."
    ],
    "kinder": "Ich zeige am Brett alle fünf Punkte des Nachweises.",
    "links": [
     {
      "art": "druck",
      "label": "Prüfbogen: praktischer Nachweis",
      "was": "nachweis"
     },
     {
      "art": "blatt",
      "label": "Ludgerus-Schachdiplom online (Bronze 1 bis 4)",
      "url": "https://ludgerus-schachdiplom.netlify.app/"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Knackpunkte vor dem Test",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 die Knackpunkte, die beim Nachweis aufgefallen sind: Brett gedreht, Bauer schlägt geradeaus, König läuft ins Schach, schlechter Tausch, Schach statt Matt, Springerschach.",
     "Bei jeder Aufgabe nachfragen: „Warum?“ oder „Woran erkennst du das?“"
    ],
    "kinder": "Ich kenne die typischen Fallen vor dem Test.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Knackpunkte S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Bronze-Test: zwei Blätter mit je sechs Aufgaben",
    "ablauf": [
     "Jedes Kind löst allein Teil 1 (Brett, Figuren, Tauschen, A1 bis A6) und Teil 2 (Schach, Matt, L1 bis L6). Bestanden ist mit mindestens 10 von 12 Aufgaben.",
     "Du kontrollierst mit den Lösungsblättern und besprichst falsche Aufgaben gleich mit dem Kind am Lehrbrett."
    ],
    "kinder": "Ich löse mindestens 10 von 12 Testaufgaben allein.",
    "links": [
     {
      "art": "druck",
      "label": "Bronze-Test Teil 1",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Teil 1 A1 bis A6",
      "set": "A"
     },
     {
      "art": "druck",
      "label": "Bronze-Test Teil 2",
      "was": "feld:L"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Teil 2 L1 bis L6",
      "set": "L"
     }
    ]
   },
   {
    "name": "Abschluss und Ausblick",
    "titel": "Urkunden, Rückblick, Aufräumen",
    "ablauf": [
     "Urkunden überreichen, alle klatschen. Wer es noch nicht geschafft hat, bekommt einen festen Termin für den zweiten Versuch und weiß, was er üben soll.",
     "Rückblick: „Was war für dich am schwersten auf dem Weg zum Bronze-Diplom?“ Aufräum-Ritual. Ausblick: Nach dem Diplom beginnt die Silber-Stufe mit erlaubten und unerlaubten Stellungen."
    ],
    "kinder": "Ich weiß, was ich geschafft habe und was als Nächstes kommt.",
    "links": [
     {
      "art": "druck",
      "label": "Bronze-Urkunde (zwei pro Blatt)",
      "was": "urkunde"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Kinder mit Leseschwierigkeiten bekommen die Testaufgaben vorgelesen. Der praktische Nachweis zählt genauso viel wie das Blatt.",
   "zusatz": "Wer früh fertig ist, bearbeitet im Ludgerus-Schachdiplom online schon Silber 1 oder spielt eine weitere Partie.",
   "kuerzen": "Die Generalprobe auf E4 bis E6 kürzen. Der praktische Nachweis und der Test bleiben vollständig. Wer nicht fertig wird, beendet den Test in Woche 12."
  },
  "nachher": "Wer hat das Diplom noch nicht? In welchem Bereich fehlen Punkte: Brett, Figuren, Tauschen, Schach oder Matt? Für diese Kinder planst du in Woche 12 eine Übungsecke mit genau diesen Aufgaben ein.",
  "feld": {
   "W": [
    {
     "frage": "Klicke das Feld rechts unten an. Welche Farbe hat es?",
     "leer": true,
     "targets": [
      "h1"
     ],
     "antwort": "h1. Es ist hell: Rechts unten ist hell.",
     "hilfe": [
      "Rechts unten liegt eine Ecke.",
      "Merksatz: Rechts unten ist hell."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Turm ziehen kann.",
     "fen": "8/8/8/8/8/8/4R3/8",
     "leer": true,
     "pruef": {
      "zuege": "e2"
     },
     "targets": null,
     "antwort": "14 Felder: die e-Linie und die 2. Reihe, ohne e2.",
     "hilfe": [
      "Linie e und Reihe 2.",
      "Das Feld e2 selbst gehört nicht dazu."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an.",
     "fen": "3r4/b7/8/8/3Q3n/8/8/6n1",
     "pruef": {
      "schlaege": [
       "d4"
      ]
     },
     "targets": null,
     "antwort": "d8, a7, h4 und g1. Alle Wege sind frei.",
     "hilfe": [
      "Acht Richtungen prüfen.",
      "Gerade und schräg."
     ]
    },
    {
     "frage": "Auf welche Felder darf der weiße König nicht, weil der schwarze König dort angreift? Markiere sie.",
     "fen": "8/4k3/8/4K3/8/8/8/8",
     "leer": true,
     "pruef": {
      "verboten": "e5"
     },
     "targets": null,
     "antwort": "d6, e6 und f6. Könige stehen nie nebeneinander.",
     "hilfe": [
      "Welche Felder berühren beide Könige?",
      "Sie liegen zwischen den Königen."
     ]
    },
    {
     "frage": "Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.",
     "fen": "8/8/8/8/2p5/4P3/1PP4P/8",
     "pruef": {
      "doppelschritt": true
     },
     "targets": null,
     "antwort": "b2 und h2. Für c2 ist c4 besetzt, e3 hat schon gezogen.",
     "hilfe": [
      "Startfeld auf der 2. Reihe?",
      "Beide Felder davor frei?"
     ]
    },
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "4k3/8/8/8/1q6/8/8/4K3",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Die Dame b4 über die Diagonale b4, c3, d2, e1.",
     "hilfe": [
      "Prüfe gerade und schräge Wege.",
      "Ist der Weg zum König frei?"
     ]
    }
   ],
   "E": [
    {
     "frage": "Der Läufer c8 bleibt auf seiner Farbe. Markiere alle Felder der 1. Reihe, die er irgendwann erreichen kann.",
     "fen": "2b5/8/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "farbe": "c8",
      "reihe": 1
     },
     "targets": null,
     "antwort": "b1, d1, f1 und h1. c8 ist hell, also nur helle Felder.",
     "hilfe": [
      "Welche Farbe hat c8?",
      "Auf der 1. Reihe wechseln hell und dunkel ab."
     ]
    },
    {
     "frage": "Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.",
     "fen": "8/8/2r1q3/5P2/3N4/1p3b2/8/8",
     "pruef": {
      "schlaege": [
       "d4"
      ]
     },
     "targets": null,
     "antwort": "b3, c6, e6 und f3. Den eigenen Bauern f5 schlägt er nicht.",
     "hilfe": [
      "Zeige alle acht Springerfelder.",
      "Nur gegnerische Figuren."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/4p3/3NPB2/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e7"
     },
     "targets": null,
     "antwort": "d6 und f6. Er schlägt schräg nach unten. Geradeaus ist e6 besetzt.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Geradeaus wird nicht geschlagen."
     ]
    },
    {
     "frage": "Welche Figur sollte Weiß schlagen? Klicke sie an.",
     "fen": "6k1/8/2r5/8/4q3/8/1B6/4R1K1",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Die Dame e4. Sie ist ungedeckt: plus 9.",
     "hilfe": [
      "Welche schwarzen Figuren kann Weiß schlagen?",
      "Welche ist am meisten wert?"
     ]
    },
    {
     "frage": "Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "4k3/8/8/8/8/R4n2/8/4K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König (er zieht weg) und der Turm a3 (er schlägt den Springer).",
     "hilfe": [
      "Gegen einen Springer kann man sich nicht dazwischenstellen.",
      "Wer erreicht f3?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "5B2/8/8/7k/8/7K/8/5Q2",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 39",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f5. Die Dame gibt Schach, der König h3 deckt g4, der Läufer f8 deckt g7 und h6.",
     "hilfe": [
      "Welche Felder decken König und Läufer?",
      "Die Dame muss nah an den König."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere die Felder e4, b7 und g2.",
     "leer": true,
     "targets": [
      "e4",
      "b7",
      "g2"
     ],
     "antwort": "e4, b7 und g2. Erst der Buchstabe, dann die Zahl.",
     "hilfe": [
      "Erst den Buchstaben unten suchen.",
      "Dann nach oben bis zur Zahl."
     ]
    },
    {
     "frage": "Klicke alle weißen Figuren an, die falsch stehen.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR",
     "targets": [
      "d1",
      "e1"
     ],
     "antwort": "Dame und König sind vertauscht. Die weiße Dame gehört auf das helle Feld d1.",
     "hilfe": [
      "Schau in die Mitte der 1. Reihe.",
      "Die Dame steht auf ihrer Farbe."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Läufer ziehen kann.",
     "fen": "8/8/8/4n3/8/2B5/8/N7",
     "leer": true,
     "pruef": {
      "zuege": "c3"
     },
     "targets": null,
     "antwort": "d4, e5 (dort schlägt er), b4, a5, d2, e1 und b2. Vor dem eigenen Springer a1 hält er an.",
     "hilfe": [
      "Vier Diagonalen.",
      "Eigene Figur: anhalten. Gegnerische: schlagen."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Springer springen kann.",
     "fen": "8/8/8/8/7N/5P2/8/8",
     "leer": true,
     "pruef": {
      "zuege": "h4"
     },
     "targets": null,
     "antwort": "f5, g2 und g6. Auf f3 steht ein eigener Bauer.",
     "hilfe": [
      "Zwei gerade, eins zur Seite.",
      "Am Rand fallen Felder weg."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "8/8/8/8/3n4/2b5/3P4/8",
     "leer": true,
     "pruef": {
      "zuege": "d2"
     },
     "targets": null,
     "antwort": "c3 und d3. Auf c3 schlägt er den Läufer. Den Doppelschritt verhindert der Springer d4.",
     "hilfe": [
      "Ist der Weg für den Doppelschritt frei?",
      "Schräg schlagen."
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.",
     "fen": "4k3/8/1p1r4/2n5/4N3/8/8/4K3",
     "pruef": {
      "gewinn": "w"
     },
     "tausch": {
      "zug": "e4d6",
      "ergebnis": "gut"
     },
     "targets": null,
     "antwort": "Den Turm d6, er ist ungedeckt: plus 5. Den Springer c5 deckt der Bauer b6, das wäre nur ein gleicher Tausch.",
     "hilfe": [
      "Welche Figuren erreicht der Springer e4?",
      "Wer schlägt jeweils zurück?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Liegt das Brett richtig? Klicke das Eckfeld an, an dem du es erkennst.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "flip": true,
     "targets": [
      "h1"
     ],
     "antwort": "Nein. Rechts unten (h1) ist dunkel. Das Brett muss gedreht werden.",
     "hilfe": [
      "Schau auf das Feld rechts unten.",
      "Rechts unten ist hell."
     ]
    },
    {
     "frage": "Ein Kind schlägt mit dem Bauern geradeaus. Markiere, wohin der Bauer wirklich darf.",
     "fen": "8/8/2pr4/2P5/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c5"
     },
     "targets": null,
     "antwort": "Nur d6. Der Bauer schlägt schräg, geradeaus ist er blockiert.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Schräg vor ihm steht eine Figur."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der König ziehen darf. Achtung, der Turm greift an.",
     "fen": "8/8/8/8/8/8/7r/5K2",
     "leer": true,
     "pruef": {
      "zuege": "f1"
     },
     "targets": null,
     "antwort": "e1 und g1. Die 2. Reihe greift der Turm an.",
     "hilfe": [
      "Welche Felder greift der Turm an?",
      "Die ganze 2. Reihe."
     ]
    },
    {
     "frage": "Lohnt es sich, mit der Dame den Läufer d5 zu schlagen? Klicke die Figur an, die zurückschlagen würde.",
     "fen": "4k3/8/2p5/3b4/8/8/8/3QK3",
     "pruef": {
      "verteidiger": "d5"
     },
     "tausch": {
      "zug": "d1d5",
      "ergebnis": "schlecht"
     },
     "targets": null,
     "antwort": "Der Bauer c6. Dame gegen Läufer, 9 gegen 3: ein schlechter Tausch.",
     "hilfe": [
      "Wer deckt den Läufer?",
      "Erst rechnen, dann schlagen."
     ]
    },
    {
     "frage": "Ein Kind ruft „Matt!“. Markiere alle Felder, auf die der schwarze König fliehen kann.",
     "fen": "R5k1/5pp1/8/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "h7. Es ist nur Schach, der König flieht nach h7.",
     "hilfe": [
      "Welche Felder vor dem König sind frei?",
      "Der Bauer h7 fehlt."
     ]
    },
    {
     "frage": "Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "4k3/8/8/8/8/3n4/8/2B1K3",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Nur der König. Gegen einen Springer kann man sich nicht dazwischenstellen, und der Läufer erreicht d3 nicht.",
     "hilfe": [
      "Wer erreicht das Feld d3?",
      "Kann man einen Springer sperren?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "4k3/8/8/8/8/5n2/8/4K3",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Der Springer f3.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Denk an die Springersprünge."
     ]
    },
    {
     "frage": "Der Turm greift die 2. Reihe an. Markiere alle Felder, auf die der König ziehen darf.",
     "fen": "4k3/8/8/8/8/8/r7/4K3",
     "leer": true,
     "pruef": {
      "zuege": "e1"
     },
     "targets": null,
     "antwort": "d1 und f1. Die 2. Reihe ist angegriffen.",
     "hilfe": [
      "Der König darf nicht auf die 2. Reihe.",
      "Zeige alle Nachbarfelder."
     ]
    },
    {
     "frage": "Der Läufer gibt Schach. Markiere das Feld, auf das der Turm ziehen kann, um sich dazwischenzustellen.",
     "fen": "4k3/8/8/b7/8/8/8/2R1K3",
     "schach": true,
     "leer": true,
     "pruef": {
      "zwischen": true
     },
     "targets": null,
     "antwort": "c3. Der Turm sperrt die Diagonale. Der König könnte auch wegziehen.",
     "hilfe": [
      "Welche Felder liegen zwischen a5 und e1?",
      "Welches davon erreicht der Turm?"
     ]
    },
    {
     "frage": "Die Dame gibt Schach. Klicke alle weißen Figuren an, die sie schlagen können.",
     "fen": "4k3/8/8/8/8/2N5/4q3/4K3",
     "schach": true,
     "pruef": {
      "schlagen": true
     },
     "targets": null,
     "antwort": "Der Springer c3 und der König e1. Der König darf, weil die Dame ungedeckt ist.",
     "hilfe": [
      "Wer erreicht das Feld e2?",
      "Ist die Dame gedeckt?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "k7/P7/8/8/6K1/8/5B2/1R6",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 29",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Der Turm gibt Schach. Der König kann ihn nicht schlagen, weil der Bauer a7 den Turm deckt. Den Bauern a7 deckt der Läufer f2.",
     "hilfe": [
      "Der Turm muss auf die 8. Reihe.",
      "Wer deckt b8?"
     ]
    },
    {
     "frage": "Ist das Matt? Markiere alle Felder, auf die der schwarze König fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "R5k1/5ppp/8/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, es ist Matt. Die eigenen Bauern sperren den König ein.",
     "hilfe": [
      "Welche Felder vor dem König sind frei?",
      "Kann Schwarz den Turm schlagen?"
     ]
    }
   ]
  }
 },
 "12": {
  "thema": "Legal oder illegal? Starke und schwache Figuren",
  "lernziel": "Ich kann erkennen, ob eine Stellung erlaubt ist, und begründen, warum eine Figur stark ist.",
  "leitfrage": "Kann es diese Stellung im Spiel überhaupt geben, und welche Figur hat hier am meisten Kraft?",
  "vorwissen": "Alle Regeln der Bronze-Stufe (Woche 1 bis 11).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Ludgerus-Schachdiplom Silber (Themen erlaubte Stellungen und Figurenstärke), Lumi „Matt in einem Zug“, Minispiel „Der Routenplaner“ (Deutsche Schulschachstiftung). Übrige Brettaufgaben eigene Aufgaben; Regelverstöße und Zugfelder automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Bronze-Rückblick, dann: Kann es diese Stellung geben?",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 eine kurze Bronze-Runde: Grundstellung, Schach, Matt, Tauschen.",
     "W5 und W6 als Detektivfrage: „Kann es diese Stellung im Spiel geben?“ Ziel nennen: „Heute werdet ihr Regel-Detektive und lernt, welche Figuren stark und welche schwach stehen.“"
    ],
    "kinder": "Ich erkenne, dass manche Stellungen nicht erlaubt sind.",
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
    "titel": "Vier Regeln für erlaubte Stellungen, Figuren zählen",
    "ablauf": [
     "Am Lehrbrett E1 bis E4 die vier Regeln erarbeiten: Kein Bauer steht auf der 1. oder 8. Reihe. Jede Farbe hat genau einen König. Die Könige stehen nie nebeneinander. Wer nicht am Zug ist, steht nicht im Schach.",
     "E5 und E6: Starke und schwache Figuren. Die Kinder zählen die Zugfelder: Eine Figur in der Mitte hat mehr Felder als am Rand, eine eingesperrte Figur ist schwach.",
     "Merksätze: „Erst die vier Regeln prüfen, dann sagen: erlaubt oder nicht.“ und „Ein Springer am Rand bringt Kummer und Schand.“"
    ],
    "kinder": "Ich nenne die vier Regeln und finde die stärkere Figur durch Zählen.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Regeln und Figurenstärke E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Detektivspiel zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A baut eine Stellung mit genau einem Regelfehler oder ganz ohne Fehler. Kind B sagt, ob sie erlaubt ist, und begründet mit einer der vier Regeln. Danach wechseln die Rollen.",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich finde Regelfehler und begründe sie.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Legal oder illegal?",
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
    "titel": "Typische Irrtümer klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Schwarze Bauern auf der 1. Reihe, beide Könige im Schach, zwei Damen sind erlaubt, offene Diagonalen machen Läufer stark, die Dame in der Ecke, Könige nebeneinander.",
     "Bei jeder Aufgabe nachfragen: „Welche Regel ist verletzt?“ oder „Woran erkennst du, dass die Figur stärker ist?“"
    ],
    "kinder": "Ich kann begründen, warum eine Stellung erlaubt ist oder nicht.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Irrtümer klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, lässt du dir bei einigen eine Stellung zeigen und fragst: „Welche der vier Regeln prüfst du zuerst?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich erkenne erlaubte Stellungen und starke Figuren ohne Hilfe.",
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
    "titel": "Minispiel „Der Routenplaner“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Kind B stellt drei schwarze Bauern als Hindernisse auf und legt ein Steinchen als Ziel. Kind A führt einen Springer zum Ziel, ohne je auf ein Feld zu ziehen, das ein Bauer angreift. Passiert das doch, beginnt es von vorn. Gezählt werden die Züge. Danach wechseln die Rollen.",
     "Rückblick: „Welche der vier Regeln hast du heute am häufigsten gebraucht?“ Aufräum-Ritual. Ausblick: Nächstes Mal wird ein Bauer zur Dame, die Bauernumwandlung."
    ],
    "kinder": "Ich führe meine Figur sicher zum Ziel.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Der Routenplaner“ (Video)",
      "url": "https://www.youtube.com/watch?v=b9sWS-2tGws"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Die vier Regeln als Karte neben das Brett legen und der Reihe nach abhaken. Beim Zählen der Zugfelder jedes Feld mit einem Steinchen belegen.",
   "zusatz": "Eine Stellung bauen, die auf den ersten Blick falsch aussieht, aber erlaubt ist, zum Beispiel mit zwei Damen nach einer Umwandlung.",
   "kuerzen": "Das Detektivspiel auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Routenplaner hat nur eine Runde."
  },
  "nachher": "Wer prüft noch nicht alle vier Regeln? Wer zählt die Zugfelder noch nicht sicher? Das Zählen greifst du in Woche 13 bei den Freibauern wieder auf: Welcher Bauer ist stark?",
  "feld": {
   "W": [
    {
     "frage": "Klicke alle schwarzen Figuren an, die falsch stehen.",
     "fen": "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "d8",
      "e8"
     ],
     "antwort": "Dame und König sind vertauscht. Die schwarze Dame gehört auf das dunkle Feld d8.",
     "hilfe": [
      "Schau in die Mitte der 8. Reihe.",
      "Die Dame steht auf ihrer Farbe."
     ]
    },
    {
     "frage": "Klicke die Figur an, die dem weißen König Schach gibt.",
     "fen": "4k3/8/8/8/8/8/6n1/4K3",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Der Springer g2.",
     "hilfe": [
      "Prüfe jede schwarze Figur.",
      "Denk an die Springersprünge."
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "8/8/8/6Nk/7P/6K1/2Q5/8",
     "quelle": "Lumi Matt in einem Zug, Aufgabe 47",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "h7. Die Dame gibt Schach, der Springer g5 deckt sie.",
     "hilfe": [
      "Die Dame braucht Deckung.",
      "Welches Feld deckt der Springer?"
     ]
    },
    {
     "frage": "Welche Figur sollte die Dame schlagen? Klicke sie an.",
     "fen": "6k1/8/8/2r5/8/8/2Q3n1/6K1",
     "pruef": {
      "beste": "w"
     },
     "targets": null,
     "antwort": "Den Turm c5, er ist ungedeckt: plus 5. Der Springer g2 brächte nur 3.",
     "hilfe": [
      "Welche schwarzen Figuren erreicht die Dame?",
      "Welche ist mehr wert?"
     ]
    },
    {
     "frage": "Kann es diese Stellung geben? Klicke die Figur an, die so nie stehen kann.",
     "fen": "4k3/8/8/8/8/8/8/2P1K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der Bauer c1. Ein weißer Bauer steht nie auf der 1. Reihe, dort beginnt er nicht und dorthin zieht er nie.",
     "hilfe": [
      "Wo stehen Bauern am Anfang?",
      "Bauern ziehen nie rückwärts."
     ]
    },
    {
     "frage": "Kann es diese Stellung geben? Klicke die Figuren an, die so nie stehen können.",
     "fen": "8/8/8/3k4/3K4/8/8/8",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Beide Könige. Könige stehen nie nebeneinander, sie würden sich gegenseitig angreifen.",
     "hilfe": [
      "Wie weit stehen die Könige auseinander?",
      "Darf ein König neben den anderen ziehen?"
     ]
    }
   ],
   "E": [
    {
     "frage": "Regel 1: Klicke die Figur an, die so nie stehen kann.",
     "fen": "P3k3/8/8/8/8/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der Bauer a8. Auf der 8. Reihe wäre er längst umgewandelt worden.",
     "hilfe": [
      "Was passiert mit einem Bauern auf der letzten Reihe?",
      "Er bleibt kein Bauer."
     ]
    },
    {
     "frage": "Regel 4: Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.",
     "fen": "4k3/8/8/8/8/8/8/4RK2",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der schwarze König e8. Er steht im Schach, aber Weiß ist am Zug. Dann hätte Schwarz das Schach im letzten Zug nicht abgewehrt.",
     "hilfe": [
      "Wer steht im Schach?",
      "Wer ist am Zug?"
     ]
    },
    {
     "frage": "Regel 2: Klicke alle Figuren an, die hier nicht zusammen stehen können.",
     "fen": "4k3/8/8/8/K7/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Die beiden weißen Könige e1 und a4. Jede Farbe hat genau einen König, er kann nie geschlagen oder umgewandelt werden.",
     "hilfe": [
      "Zähle die Könige jeder Farbe.",
      "Einen zweiten König gibt es nie."
     ]
    },
    {
     "frage": "Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/8/8/PPPPPPPP/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Ja. Acht Bauern auf der 2. Reihe und zwei Könige mit Abstand: alle vier Regeln sind erfüllt.",
     "hilfe": [
      "Prüfe die vier Regeln der Reihe nach.",
      "Bauern auf der 2. Reihe sind erlaubt."
     ]
    },
    {
     "frage": "Welcher Springer ist stärker? Klicke ihn an. Zähle seine Zugfelder.",
     "fen": "8/8/8/8/3N4/8/8/N7",
     "pruef": {
      "staerkste": "N"
     },
     "targets": null,
     "antwort": "Der Springer d4. Er hat 8 Zugfelder, der Springer a1 in der Ecke nur 2. Ein Springer am Rand bringt Kummer und Schand.",
     "hilfe": [
      "Zähle für jeden Springer die Felder.",
      "In der Mitte hat er mehr Felder."
     ]
    },
    {
     "frage": "Welcher weiße Läufer ist schwach? Klicke ihn an.",
     "fen": "8/8/8/8/5B2/8/1P1P3P/2B5",
     "pruef": {
      "schwaechste": "B"
     },
     "targets": null,
     "antwort": "Der Läufer c1. Die eigenen Bauern b2 und d2 sperren ihn ein, er hat kein einziges Zugfeld.",
     "hilfe": [
      "Zähle die Zugfelder beider Läufer.",
      "Wer wird von den eigenen Bauern eingesperrt?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Klicke die Figur an, die so nie stehen kann.",
     "fen": "4k3/8/8/8/8/8/6P1/4K2P",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der Bauer h1. Weiße Bauern stehen nie auf der 1. Reihe.",
     "hilfe": [
      "Wo beginnen die weißen Bauern?",
      "Bauern ziehen nie rückwärts."
     ]
    },
    {
     "frage": "Klicke die Figuren an, die so nie stehen können.",
     "fen": "8/8/4k3/4K3/8/8/8/8",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Beide Könige, e5 und e6. Sie stehen nebeneinander.",
     "hilfe": [
      "Wie weit sind die Könige voneinander entfernt?",
      "Könige berühren sich nie."
     ]
    },
    {
     "frage": "Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.",
     "fen": "4k3/8/8/1B6/8/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der schwarze König e8. Der Läufer b5 gibt ihm Schach, obwohl Weiß am Zug ist.",
     "hilfe": [
      "Wer steht im Schach?",
      "Wer ist am Zug?"
     ]
    },
    {
     "frage": "Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Ja. Alle Bauern stehen auf ihren Startreihen, die Könige haben Abstand, niemand steht im Schach.",
     "hilfe": [
      "Prüfe die vier Regeln.",
      "Ist eine Regel verletzt?"
     ]
    },
    {
     "frage": "Welcher weiße Turm ist stärker? Klicke ihn an.",
     "fen": "8/8/8/8/3R4/8/P7/RN6",
     "pruef": {
      "staerkste": "R"
     },
     "targets": null,
     "antwort": "Der Turm d4. Er hat 14 Zugfelder. Der Turm a1 ist von eigenen Figuren eingesperrt und hat keins.",
     "hilfe": [
      "Zähle die Zugfelder beider Türme.",
      "Eigene Figuren sperren den Weg."
     ]
    },
    {
     "frage": "Welcher weiße Springer ist schwach? Klicke ihn an.",
     "fen": "8/8/8/8/4N3/8/8/7N",
     "pruef": {
      "schwaechste": "N"
     },
     "targets": null,
     "antwort": "Der Springer h1. In der Ecke hat er nur 2 Zugfelder, auf e4 sind es 8.",
     "hilfe": [
      "Zähle die Zugfelder.",
      "Am Rand fallen Felder weg."
     ]
    }
   ],
   "S": [
    {
     "frage": "Klicke die Figur an, die so nie stehen kann.",
     "fen": "4k3/8/8/8/8/8/8/3pK3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der schwarze Bauer d1. Auf der 1. Reihe wäre er schon umgewandelt worden.",
     "hilfe": [
      "Für Schwarz ist die 1. Reihe die letzte Reihe.",
      "Was passiert dort mit einem Bauern?"
     ]
    },
    {
     "frage": "Beide Könige stehen im Schach. Weiß ist am Zug. Klicke den König an, der so nicht stehen kann.",
     "fen": "4k3/8/8/8/4R3/8/8/r3K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der schwarze König e8. Weiß darf im Schach stehen, denn Weiß ist am Zug. Schwarz aber hätte sein Schach im letzten Zug abwehren müssen.",
     "hilfe": [
      "Wer ist am Zug?",
      "Wer durfte im Schach stehen bleiben?"
     ]
    },
    {
     "frage": "Zwei weiße Damen: Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/8/8/8/Q2QK3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Ja. Ein Bauer kann sich in eine zweite Dame umwandeln.",
     "hilfe": [
      "Wie kann eine zweite Dame entstehen?",
      "Denk an die Umwandlung."
     ]
    },
    {
     "frage": "Welcher weiße Läufer ist stärker? Klicke ihn an.",
     "fen": "8/8/8/8/8/8/1B2P1P1/5B2",
     "pruef": {
      "staerkste": "B"
     },
     "targets": null,
     "antwort": "Der Läufer b2 auf der langen Diagonale. Der Läufer f1 ist von den eigenen Bauern eingesperrt.",
     "hilfe": [
      "Zähle die Zugfelder beider Läufer.",
      "Wer hat eine freie Diagonale?"
     ]
    },
    {
     "frage": "Welche weiße Dame ist stärker? Klicke sie an.",
     "fen": "8/8/8/3Q4/8/8/1P6/QN6",
     "pruef": {
      "staerkste": "Q"
     },
     "targets": null,
     "antwort": "Die Dame d5 mit 27 Zugfeldern. Die Dame a1 kommt nur über die a-Linie hinaus.",
     "hilfe": [
      "Zähle grob die Felder in alle Richtungen.",
      "In der Mitte hat die Dame acht freie Richtungen."
     ]
    },
    {
     "frage": "Klicke die Figuren an, die so nie stehen können.",
     "fen": "8/8/8/8/8/2k5/1K6/8",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Beide Könige, b2 und c3. Sie stehen schräg nebeneinander, auch das ist verboten.",
     "hilfe": [
      "Auch schräg zählt als nebeneinander.",
      "Könige berühren sich nie."
     ]
    }
   ],
   "L": [
    {
     "frage": "Klicke die Figur an, die so nie stehen kann.",
     "fen": "1p2k3/8/8/8/8/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der schwarze Bauer b8. Schwarze Bauern beginnen auf der 7. Reihe und ziehen nach unten, nie auf die 8. Reihe.",
     "hilfe": [
      "Wo beginnen die schwarzen Bauern?",
      "In welche Richtung ziehen sie?"
     ]
    },
    {
     "frage": "Klicke die Figuren an, die so nie stehen können.",
     "fen": "8/8/8/8/8/8/5k2/6K1",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Beide Könige, f2 und g1. Sie stehen nebeneinander.",
     "hilfe": [
      "Wie weit sind die Könige voneinander entfernt?",
      "Auch schräg zählt."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke den König an, der so nicht stehen kann.",
     "fen": "4k3/8/8/8/8/8/8/r3K3",
     "zug": "b",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der weiße König e1. Er steht im Schach, aber Schwarz ist am Zug.",
     "hilfe": [
      "Wer steht im Schach?",
      "Wer ist am Zug?"
     ]
    },
    {
     "frage": "Ist diese Stellung erlaubt? Wenn ja, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/3k4/8/3K4/8",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Ja. Zwischen den Königen liegt ein freies Feld, sie stehen nicht nebeneinander.",
     "hilfe": [
      "Prüfe den Abstand der Könige.",
      "Ein Feld dazwischen reicht."
     ]
    },
    {
     "frage": "Welcher weiße Springer ist stärker? Klicke ihn an.",
     "fen": "8/8/8/5N2/8/4P3/8/1N6",
     "pruef": {
      "staerkste": "N"
     },
     "targets": null,
     "antwort": "Der Springer f5 mit 7 Zugfeldern. Der Springer b1 hat nur 3.",
     "hilfe": [
      "Zähle die Zugfelder beider Springer.",
      "Auf e3 steht ein eigener Bauer."
     ]
    },
    {
     "frage": "Welcher weiße Läufer ist schwach? Klicke ihn an.",
     "fen": "8/8/8/8/2B5/8/4P1P1/5B2",
     "pruef": {
      "schwaechste": "B"
     },
     "targets": null,
     "antwort": "Der Läufer f1. Die eigenen Bauern e2 und g2 sperren ihn ein.",
     "hilfe": [
      "Zähle die Zugfelder beider Läufer.",
      "Wer ist eingesperrt?"
     ]
    }
   ]
  }
 },
 "13": {
  "thema": "Bauernumwandlung und starke Bauern",
  "lernziel": "Ich kann einen Bauern umwandeln und die passende Figur wählen.",
  "leitfrage": "Welcher Bauer kommt durch, und in welche Figur verwandle ich ihn?",
  "vorwissen": "Bauernzug, Doppelschritt und Schlagen (Woche 5), erlaubte Stellungen (Woche 12).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Ludgerus-Schachdiplom Silber (Umwandlung), Minispiel „Bauernumwandlung: Acht Bauern und eine Leichtfigur“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben; Zugfelder, Freibauern und Matts automatisch nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Erlaubt oder nicht? Bauern wiederholen",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W5 die Regeln aus Woche 12 und die Bauernzüge wiederholen: Bauer auf der letzten Reihe, starke Figuren, schlagen, umwandeln.",
     "W6 als Rätsel: „Welchen Bauern kann kein schwarzer Bauer mehr aufhalten?“ Ziel nennen: „Heute lernt ihr, welche Bauern stark sind und in welche Figur ihr sie verwandelt.“"
    ],
    "kinder": "Ich ziehe Bauern richtig und erkenne, welcher durchkommen kann.",
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
    "titel": "Umwandeln, die richtige Figur wählen, Freibauern",
    "ablauf": [
     "Am Lehrbrett E1 bis E4: Umwandeln auf der letzten Reihe, auch beim Schlagen. Erlaubt sind Dame, Turm, Läufer oder Springer. Meist ist die Dame am stärksten, manchmal ist ein Springer besser, weil er sofort Schach gibt und zwei Figuren angreift.",
     "E5 und E6: Ein Freibauer ist ein Bauer, vor dem und neben dem kein gegnerischer Bauer mehr steht. Freibauern sind stark, weil sie nur Figuren aufhalten können.",
     "Merksätze: „Auf der letzten Reihe wird umgewandelt, meist in eine Dame.“ und „Freibauern muss man laufen lassen.“"
    ],
    "kinder": "Ich wandle richtig um und zeige einen Freibauern.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Umwandlung und Freibauern E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Bauernrennen zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Jedes Kind hat drei Bauern auf seiner Bauernreihe, nicht gegenüber. Wer zuerst umwandelt, sagt laut, welche Figur er wählt, und begründet. Danach wechseln die Rollen, das andere Kind beginnt.",
     "Frage zwischendurch: „Warum ist dein Bauer ein Freibauer?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich bringe einen Bauern zur Umwandlung und begründe meine Wahl.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Umwandlung und Freibauern",
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
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Bauer bleibt auf der letzten Reihe stehen, geradeaus auf ein besetztes Feld ziehen, gegnerische Bauern auf den Nachbarlinien übersehen, schwarze Bauern wandeln auf der 1. Reihe um, Umwandeln mit Schlagen und Matt.",
     "Bei jeder Aufgabe nachfragen: „Warum ist das ein Freibauer?“ oder „Woran erkennst du, dass der Bauer nicht weiterkommt?“"
    ],
    "kinder": "Ich erkenne die typischen Fehler bei der Umwandlung.",
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
     "Während die Kinder arbeiten, fragst du einige am Brett: „In welche Figur wandelst du um, und warum?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich wandle richtig um und finde Freibauern ohne Hilfe.",
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
    "titel": "Minispiel „Acht Bauern und eine Leichtfigur“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Jedes Kind hat seine acht Bauern und eine Leichtfigur, also einen Springer oder einen Läufer. Wer zuerst einen Bauern umwandelt, gewinnt. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Rückblick: „Woran erkennst du einen Freibauern?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr die Rochade."
    ],
    "kinder": "Ich bringe einen Bauern durch und halte gegnerische Bauern auf.",
    "links": [
     {
      "art": "video",
      "label": "Minispiel „Acht Bauern und eine Leichtfigur“ (Video)",
      "url": "https://www.youtube.com/watch?v=XQmXNyh_bVw"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Mit dem Finger vor dem Bauern bis zur letzten Reihe fahren und auf den beiden Nachbarlinien nachsehen, ob ein gegnerischer Bauer im Weg steht.",
   "zusatz": "Eine Stellung bauen, in der die Umwandlung in einen Springer besser ist als in eine Dame.",
   "kuerzen": "Das Bauernrennen entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel dauert nur fünf Minuten."
  },
  "nachher": "Wer vergisst noch die Nachbarlinien beim Freibauern? Wer wandelt nicht um oder wählt die falsche Figur? Das greifst du in Woche 14 bei der Rochade wieder auf, wenn die Bauern vor dem König stehen.",
  "feld": {
   "W": [
    {
     "frage": "Klicke die Figur an, die so nie stehen kann.",
     "fen": "4kP2/8/8/8/8/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der Bauer f8. Auf der 8. Reihe wäre er schon umgewandelt worden.",
     "hilfe": [
      "Was passiert auf der letzten Reihe?",
      "Er bleibt kein Bauer."
     ]
    },
    {
     "frage": "Welcher weiße Springer ist stärker? Klicke ihn an.",
     "fen": "7N/8/8/4N3/8/3P4/8/8",
     "pruef": {
      "staerkste": "N"
     },
     "targets": null,
     "antwort": "Der Springer e5 mit 7 Zugfeldern. In der Ecke h8 hat der andere nur 2.",
     "hilfe": [
      "Zähle die Zugfelder.",
      "Auf d3 steht ein eigener Bauer."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "8/8/8/8/8/4np2/5P2/8",
     "leer": true,
     "pruef": {
      "zuege": "f2"
     },
     "targets": null,
     "antwort": "Nur e3. Geradeaus ist f3 besetzt, schräg schlägt er den Springer.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Schräg nur gegnerische Figuren."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/2p5/1N6/2P5/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c7"
     },
     "targets": null,
     "antwort": "b6 und c6. Den Doppelschritt verhindert der Bauer c5, auf b6 schlägt er den Springer.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Ist c5 frei?"
     ]
    },
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "q5nr/1P4P1/8/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "b7 und g7. b7 zieht nach b8 oder schlägt die Dame a8, g7 schlägt den Turm h8.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Auch Schlagen auf die letzte Reihe zählt."
     ]
    },
    {
     "frage": "Klicke den weißen Bauern an, den kein schwarzer Bauer mehr aufhalten kann.",
     "fen": "4k3/5p2/1p6/3p4/P2P3P/8/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Der Bauer h4. Vor ihm und auf der g-Linie steht kein schwarzer Bauer. Das ist ein Freibauer.",
     "hilfe": [
      "Schau vor jeden Bauern und auf die Nachbarlinien.",
      "Steht dort ein schwarzer Bauer?"
     ]
    }
   ],
   "E": [
    {
     "frage": "Markiere das Feld, auf dem der Bauer umgewandelt wird.",
     "fen": "8/4P3/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "e7"
     },
     "targets": null,
     "antwort": "e8. Dort wird er zur Dame, zum Turm, Läufer oder Springer.",
     "hilfe": [
      "Ein Feld vorwärts auf die letzte Reihe.",
      "Die 8. Reihe ist das Ziel."
     ]
    },
    {
     "frage": "Umwandeln beim Schlagen: Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "1nrb4/2P5/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "c7"
     },
     "targets": null,
     "antwort": "b8 und d8. Geradeaus ist c8 besetzt. Schlägt er schräg, wird er auf demselben Zug umgewandelt.",
     "hilfe": [
      "Geradeaus wird nie geschlagen.",
      "Schräg stehen schwarze Figuren."
     ]
    },
    {
     "frage": "Die Dame setzt matt: Klicke das Feld an, auf dem der Bauer umgewandelt wird.",
     "fen": "k7/2P5/1K6/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "c8. Die neue Dame gibt Schach über die 8. Reihe, der König b6 deckt a7 und b7. Auch ein Turm würde mattsetzen.",
     "hilfe": [
      "Der Bauer zieht auf die letzte Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Der Bauer d7 ist gerade zum Springer geworden. Klicke alle schwarzen Figuren an, die der Springer angreift.",
     "fen": "3N4/1k3q2/8/8/8/8/8/K7",
     "zug": "b",
     "schach": true,
     "pruef": {
      "schlaege": [
       "d8"
      ]
     },
     "targets": null,
     "antwort": "Den König b7 und die Dame f7. Der Springer gibt Schach und greift die Dame an, eine Dame auf d8 hätte das nicht geschafft.",
     "hilfe": [
      "Zeige alle Springerfelder von d8.",
      "Welche schwarzen Figuren stehen dort?"
     ]
    },
    {
     "frage": "Klicke den weißen Freibauern an.",
     "fen": "4k3/1p6/8/P3p3/2P1P3/6P1/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Der Bauer g3. a5 und c4 hält der Bauer b7 auf, e4 steht vor e5. Vor g3 und auf der f- und h-Linie ist frei.",
     "hilfe": [
      "Prüfe für jeden Bauern drei Linien: seine eigene und die beiden daneben.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Klicke alle weißen Freibauern an.",
     "fen": "4k3/p7/3p3p/8/1PP2P1P/8/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Nur f4. b4 hält der Bauer a7 auf, c4 der Bauer d6, h4 der Bauer h6.",
     "hilfe": [
      "Prüfe die eigene Linie und die beiden Nachbarlinien.",
      "Nur Bauern vor ihm zählen."
     ]
    }
   ],
   "A": [
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "n3r3/P2P4/7P/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "Nur d7. Er zieht nach d8 oder schlägt den Turm e8. a7 ist blockiert, h6 ist noch zu weit weg.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Ist das Feld davor frei, oder kann er schräg schlagen?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "4qnr1/5P2/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "f7"
     },
     "targets": null,
     "antwort": "e8 und g8. Er schlägt Dame oder Turm und wird dabei umgewandelt. Geradeaus ist f8 besetzt.",
     "hilfe": [
      "Geradeaus ist besetzt.",
      "Schräg stehen schwarze Figuren."
     ]
    },
    {
     "frage": "Klicke den weißen Freibauern an.",
     "fen": "4k3/8/3p4/1p4P1/3P4/P7/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Der Bauer g5. a3 hält der Bauer b5 auf, d4 der Bauer d6.",
     "hilfe": [
      "Prüfe drei Linien für jeden Bauern.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Weiß setzt durch Umwandlung matt. Klicke das Feld an.",
     "fen": "5k2/1P6/5K2/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König f6 deckt e7, f7 und g7.",
     "hilfe": [
      "Der Bauer zieht auf die letzte Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Welche weißen Bauern kommen gar nicht mehr weiter? Klicke sie an.",
     "fen": "8/6pr/1p4P1/1P2n3/4P3/8/8/8",
     "pruef": {
      "blockiert": true
     },
     "targets": null,
     "antwort": "b5 und e4. Der Bauer g6 ist geradeaus blockiert, kann aber den Turm h7 schlagen.",
     "hilfe": [
      "Ist das Feld davor frei?",
      "Kann er schräg etwas schlagen?"
     ]
    },
    {
     "frage": "Der Bauer ist auf e8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.",
     "fen": "4N3/2q3k1/8/8/8/8/8/K7",
     "zug": "b",
     "schach": true,
     "pruef": {
      "schlaege": [
       "e8"
      ]
     },
     "targets": null,
     "antwort": "Den König g7 und die Dame c7. Nach dem Schach schlägt Weiß die Dame.",
     "hilfe": [
      "Zeige alle Springerfelder von e8.",
      "Welche schwarzen Figuren stehen dort?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Ein Kind lässt den Bauern auf der 8. Reihe als Bauer stehen. Klicke die Figur an, die so nicht stehen darf.",
     "fen": "2P1k3/8/8/8/8/8/8/4K3",
     "pruef": {
      "illegal": true
     },
     "targets": null,
     "antwort": "Der Bauer c8. Er muss sofort umgewandelt werden, als Bauer darf er nicht stehen bleiben.",
     "hilfe": [
      "Was passiert auf der letzten Reihe?",
      "Umwandeln ist Pflicht."
     ]
    },
    {
     "frage": "Wohin kann der Bauer ziehen? Wenn nirgendwohin, drücke „Prüfen“ ohne Markierung.",
     "fen": "3r4/3P4/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "d7"
     },
     "targets": null,
     "antwort": "Nirgendwohin. Geradeaus ist d8 besetzt, und schräg steht nichts zum Schlagen.",
     "hilfe": [
      "Geradeaus wird nicht geschlagen.",
      "Steht schräg vor ihm eine Figur?"
     ]
    },
    {
     "frage": "Ist der Bauer e5 ein Freibauer? Klicke alle schwarzen Bauern an, die ihn noch aufhalten können.",
     "fen": "8/p2p4/5p1p/4P3/8/8/8/8",
     "pruef": {
      "aufhalter": "e5"
     },
     "targets": null,
     "antwort": "d7 und f6. Sie stehen auf den Nachbarlinien vor ihm und können ihn schlagen. e5 ist also kein Freibauer.",
     "hilfe": [
      "Schau auf die d-, e- und f-Linie.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Das ist ein schwarzer Bauer. Wo wird er umgewandelt? Markiere alle Felder, auf die er ziehen kann.",
     "fen": "8/8/8/8/8/8/1p6/R1N5",
     "leer": true,
     "pruef": {
      "zuege": "b2"
     },
     "targets": null,
     "antwort": "b1, a1 und c1. Schwarz wandelt auf der 1. Reihe um, auch beim Schlagen.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Die 1. Reihe ist für Schwarz die letzte Reihe."
     ]
    },
    {
     "frage": "Klicke den schwarzen Freibauern an.",
     "fen": "4k3/8/8/5p2/2p5/7p/1P2P3/4K3",
     "pruef": {
      "freibauer": "b"
     },
     "targets": null,
     "antwort": "Der Bauer h3. c4 hält der Bauer b2 auf, f5 der Bauer e2. Für Schwarz liegt „vorn“ unten.",
     "hilfe": [
      "Für Schwarz zählen weiße Bauern unterhalb.",
      "Prüfe drei Linien."
     ]
    },
    {
     "frage": "Mit welchem Zug setzt Weiß matt? Klicke das Feld an, auf das der Bauer zieht.",
     "fen": "1r4k1/P4ppp/8/8/8/8/8/6K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Der Bauer schlägt den Turm und wird zur Dame: Matt. Zieht er nach a8, schlägt der Turm die neue Dame.",
     "hilfe": [
      "Geradeaus oder schräg schlagen?",
      "Welche Umwandlung gibt Schach auf der 8. Reihe?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "6nb/2P4P/4P3/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "c7 und h7. c7 zieht nach c8, h7 schlägt den Springer g8. e6 ist noch zu weit weg.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Ist das Feld davor frei, oder kann er schräg schlagen?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer ziehen kann.",
     "fen": "nrq5/1P6/8/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "zuege": "b7"
     },
     "targets": null,
     "antwort": "a8 und c8. Geradeaus ist b8 besetzt, schräg schlägt er und wird umgewandelt.",
     "hilfe": [
      "Geradeaus ist besetzt.",
      "Schräg stehen schwarze Figuren."
     ]
    },
    {
     "frage": "Klicke den weißen Freibauern an.",
     "fen": "4k3/8/4p3/2p4P/4P3/1P6/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Der Bauer h5. b3 hält der Bauer c5 auf, e4 der Bauer e6.",
     "hilfe": [
      "Prüfe drei Linien.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Weiß setzt durch Umwandlung matt. Klicke das Feld an.",
     "fen": "7k/5P2/6K1/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.",
     "hilfe": [
      "Der Bauer zieht auf die letzte Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Klicke alle schwarzen Bauern an, die den Bauern d4 noch aufhalten können.",
     "fen": "8/4p3/2p5/1p6/3P4/8/8/8",
     "pruef": {
      "aufhalter": "d4"
     },
     "targets": null,
     "antwort": "c6 und e7. Der Bauer b5 steht zu weit weg, auf der b-Linie.",
     "hilfe": [
      "Schau auf die c-, d- und e-Linie.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Der Bauer ist auf c8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.",
     "fen": "2N5/k3q3/8/8/8/8/8/7K",
     "zug": "b",
     "schach": true,
     "pruef": {
      "schlaege": [
       "c8"
      ]
     },
     "targets": null,
     "antwort": "Den König a7 und die Dame e7. Mit Schach und Angriff gewinnt Weiß die Dame.",
     "hilfe": [
      "Zeige alle Springerfelder von c8.",
      "Welche schwarzen Figuren stehen dort?"
     ]
    }
   ]
  }
 },
 "14": {
  "thema": "Die Rochade",
  "lernziel": "Ich kann prüfen, ob eine Rochade erlaubt ist, und sie ausführen.",
  "leitfrage": "Wann darf ich rochieren, und wie bringe ich meinen König damit in Sicherheit?",
  "vorwissen": "Schach, angegriffene Felder (Woche 6 und 8), Umwandlung (Woche 13).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "FIDE-Regeln zur Rochade in kindgerechter Form, Ludgerus-Schachdiplom Silber (Rochade). Brettaufgaben eigene Aufgaben; erlaubte Rochaden mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Umwandlung wiederholen, dann: Wo ist der König sicher?",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 die Umwandlung aus Woche 13 aufgreifen: Freibauer, Matt durch Umwandlung, Springer-Umwandlung.",
     "W5 und W6: König und Türme in der Grundstellung, welche Felder müssen frei sein? Ziel nennen: „Heute lernt ihr einen Spezialzug, bei dem König und Turm zusammen ziehen: die Rochade.“"
    ],
    "kinder": "Ich erkenne, welche Felder zwischen König und Turm frei sein müssen.",
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
    "titel": "Kurze und lange Rochade, fünf Bedingungen",
    "ablauf": [
     "Plakat „Rochade“ aufhängen. Am Lehrbrett E1 bis E3 zeigen: Der König zieht zwei Felder zum Turm, der Turm springt über ihn und steht direkt daneben. Alles mit einer Hand, der König zuerst. Die Kinder machen es am eigenen Brett nach, kurz und lang.",
     "E4 bis E6: die Bedingungen. König und Turm haben noch nicht gezogen, dazwischen ist frei, der König steht nicht im Schach, zieht nicht über ein angegriffenes Feld und landet nicht im Schach.",
     "Merksatz: „Der König zieht zwei Felder, der Turm springt drüber. Nie aus dem Schach, nie durch ein Schach, nie ins Schach.“"
    ],
    "kinder": "Ich führe beide Rochaden richtig aus und nenne die Bedingungen.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Rochade",
      "was": "rochade"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Rochade E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Rochade-Prüfer zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A baut eine Stellung mit weißem König auf e1 und beiden Türmen und stellt eine schwarze Figur dazu. Kind B prüft mit dem Plakat: Ist die kurze, die lange oder keine Rochade erlaubt? Danach wechseln die Rollen.",
     "Frage zwischendurch: „Welche der fünf Bedingungen verhindert hier die Rochade?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich prüfe Rochaden und begründe, warum sie erlaubt sind oder nicht.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Rochade",
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
    "titel": "Typische Irrtümer klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Ein angegriffenes Feld b1 stört die lange Rochade nicht, ein angegriffener Turm auch nicht. Ein Springer kann die Rochade verhindern. Auch Schwarz rochiert. Aus dem Schach heraus geht keine Rochade.",
     "Bei jeder Aufgabe nachfragen: „Welche Bedingung ist verletzt?“ oder „Warum ist die Rochade trotzdem erlaubt?“"
    ],
    "kinder": "Ich kenne die Ausnahmen und typischen Fehler bei der Rochade.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Irrtümer klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett eine kurze und eine lange Rochade zeigen: König zuerst, eine Hand. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich prüfe und führe Rochaden ohne Hilfe aus.",
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
    "titel": "Minispiel „Rochade-Rennen“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit aus der Grundstellung: Beide spielen nach allen Regeln. Wer als Erstes rochiert hat, ohne dabei eine Figur zu verlieren, gewinnt die Runde. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Rückblick: „Warum rochiert man überhaupt?“ (Der König steht sicherer, und der Turm kommt ins Spiel.) Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr einen seltenen Bauernzug, en passant."
    ],
    "kinder": "Ich rochiere im Spiel früh und richtig.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Rochade",
      "was": "rochade"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Das Plakat neben das Brett legen und die fünf Bedingungen der Reihe nach mit dem Finger abhaken.",
   "zusatz": "Eine Stellung bauen, in der nur die lange Rochade erlaubt ist, und eine, in der gar keine erlaubt ist.",
   "kuerzen": "Den Rochade-Prüfer auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Rochade-Rennen hat nur eine Runde."
  },
  "nachher": "Wer zieht noch den Turm zuerst oder nimmt zwei Hände? Wer übersieht ein angegriffenes Feld auf dem Weg des Königs? Die Rochade greifst du in Woche 15 im Einstieg wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.",
     "fen": "nr6/1P2P3/6P1/8/8/8/8/8",
     "pruef": {
      "umwandeln": true
     },
     "targets": null,
     "antwort": "b7 und e7. b7 schlägt den Springer a8, e7 zieht nach e8. g6 ist noch zu weit weg.",
     "hilfe": [
      "Welche Bauern stehen auf der 7. Reihe?",
      "Ist das Feld davor frei, oder kann er schräg schlagen?"
     ]
    },
    {
     "frage": "Klicke den weißen Freibauern an.",
     "fen": "4k3/8/1p2p3/8/P5P1/4P3/8/4K3",
     "pruef": {
      "freibauer": "w"
     },
     "targets": null,
     "antwort": "Der Bauer g4. a4 hält der Bauer b6 auf, e3 der Bauer e6.",
     "hilfe": [
      "Prüfe drei Linien für jeden Bauern.",
      "Nur Bauern vor ihm zählen."
     ]
    },
    {
     "frage": "Weiß setzt durch Umwandlung matt. Klicke das Feld an.",
     "fen": "1k6/5P2/1K6/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König b6 deckt a7, b7 und c7.",
     "hilfe": [
      "Der Bauer zieht auf die letzte Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Der Bauer ist auf f8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.",
     "fen": "5N2/8/4k1q1/8/8/8/8/K7",
     "zug": "b",
     "schach": true,
     "pruef": {
      "schlaege": [
       "f8"
      ]
     },
     "targets": null,
     "antwort": "Den König e6 und die Dame g6.",
     "hilfe": [
      "Zeige alle Springerfelder von f8.",
      "Welche schwarzen Figuren stehen dort?"
     ]
    },
    {
     "frage": "Klicke den weißen König und die beiden weißen Türme an.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "targets": [
      "e1",
      "a1",
      "h1"
     ],
     "antwort": "e1, a1 und h1. Mit diesen drei Figuren gibt es gleich einen besonderen Zug.",
     "hilfe": [
      "Der König steht auf der e-Linie.",
      "Die Türme stehen in den Ecken."
     ]
    },
    {
     "frage": "Welche Felder zwischen König und Turm h1 müssen frei sein? Markiere sie.",
     "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
     "leer": true,
     "targets": [
      "f1",
      "g1"
     ],
     "antwort": "f1 und g1. Dort stehen am Anfang Läufer und Springer, sie müssen zuerst herausgespielt werden.",
     "hilfe": [
      "Was steht zwischen e1 und h1?",
      "Zähle die Felder dazwischen."
     ]
    }
   ],
   "E": [
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R",
     "rechte": "KQkq",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "g1 (kurze Rochade) und c1 (lange Rochade). Der König zieht immer zwei Felder.",
     "hilfe": [
      "Der König zieht zwei Felder Richtung Turm.",
      "Es gibt zwei Rochaden."
     ]
    },
    {
     "frage": "Kurze Rochade: Der König ist auf g1 gezogen. Markiere das Feld, auf das der Turm springt.",
     "fen": "4k3/8/8/8/8/8/8/4K2R",
     "leer": true,
     "targets": [
      "f1"
     ],
     "antwort": "f1. Der Turm springt über den König und steht direkt daneben.",
     "hilfe": [
      "Der Turm landet neben dem König.",
      "Auf der anderen Seite des Königs."
     ]
    },
    {
     "frage": "Lange Rochade: Markiere die beiden Felder, auf denen König und Turm danach stehen.",
     "fen": "4k3/8/8/8/8/8/8/R3K3",
     "leer": true,
     "targets": [
      "c1",
      "d1"
     ],
     "antwort": "Der König auf c1, der Turm auf d1.",
     "hilfe": [
      "Der König zieht zwei Felder nach links.",
      "Der Turm springt über ihn."
     ]
    },
    {
     "frage": "Weiß steht im Schach. Darf Weiß rochieren? Markiere die Zielfelder des Königs. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "4r1k1/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "schach": true,
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keine. Aus dem Schach heraus darf man nicht rochieren.",
     "hilfe": [
      "Steht der König im Schach?",
      "Bedingung 3 auf dem Plakat."
     ]
    },
    {
     "frage": "Kurz oder lang? Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.",
     "fen": "5rk1/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c1. Kurz geht nicht, weil der Turm f8 das Feld f1 angreift. Der König darf nicht über ein angegriffenes Feld ziehen.",
     "hilfe": [
      "Welche Felder greift der Turm f8 an?",
      "Über welche Felder zieht der König?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die die kurze Rochade verhindert.",
     "fen": "4k3/8/8/1b6/8/8/8/4K2R",
     "rechte": "K",
     "pruef": {
      "stoerer": "kurz"
     },
     "targets": null,
     "antwort": "Der Läufer b5. Er greift f1 an, über dieses Feld müsste der König ziehen.",
     "hilfe": [
      "Über welche Felder zieht der König bei der kurzen Rochade?",
      "Wer greift eines davon an?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/8/8/8/8/8/8/RN2K2R",
     "rechte": "KQkq",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur g1. Lang geht nicht, weil der Springer b1 noch zwischen König und Turm steht.",
     "hilfe": [
      "Ist der Weg zu beiden Türmen frei?",
      "Auch b1 muss leer sein."
     ]
    },
    {
     "frage": "Der weiße König war schon einmal auf f1 und ist zurückgekehrt. Darf er rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "r3k2r/8/8/8/8/8/8/R3K2R",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keine. Hat der König schon gezogen, ist die Rochade für immer verloren, auch wenn er zurückkehrt.",
     "hilfe": [
      "Bedingung 1 auf dem Plakat.",
      "Zählt ein Zug, der wieder zurückgenommen wurde?"
     ]
    },
    {
     "frage": "Wohin darf der König rochieren? Markiere alle Zielfelder.",
     "fen": "3k2r1/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c1. Auf g1 würde der König im Schach landen, der Turm g8 greift g1 an.",
     "hilfe": [
      "Wo landet der König bei der kurzen Rochade?",
      "Wer greift dieses Feld an?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die die lange Rochade verhindert.",
     "fen": "3k4/8/8/8/6b1/8/8/R3K3",
     "rechte": "Q",
     "pruef": {
      "stoerer": "lang"
     },
     "targets": null,
     "antwort": "Der Läufer g4. Er greift d1 an, über dieses Feld müsste der König ziehen.",
     "hilfe": [
      "Über welche Felder zieht der König bei der langen Rochade?",
      "Wer greift eines davon an?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/8/8/8/8/8/8/4K3",
     "zug": "b",
     "rechte": "kq",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "g8 und c8. Schwarz rochiert genauso, nur auf der 8. Reihe.",
     "hilfe": [
      "Auch Schwarz kann kurz und lang rochieren.",
      "Der König zieht zwei Felder."
     ]
    },
    {
     "frage": "Der Turm a1 hat schon gezogen und ist zurückgekehrt. Markiere alle Felder, auf die der König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/8/8/8/8/8/8/R3K2R",
     "rechte": "K",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur g1. Mit dem Turm a1 ist keine Rochade mehr möglich, mit dem Turm h1 schon.",
     "hilfe": [
      "Welcher Turm hat schon gezogen?",
      "Mit dem anderen Turm geht es noch."
     ]
    }
   ],
   "S": [
    {
     "frage": "Der schwarze Turm greift b1 an. Darf Weiß trotzdem lang rochieren? Markiere das Zielfeld des Königs. Wenn nicht, drücke „Prüfen“ ohne Markierung.",
     "fen": "1r1k4/8/8/8/8/8/8/R3K3",
     "rechte": "Q",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Ja, c1. Der König zieht nur über d1 und c1. Dass b1 angegriffen ist, stört nicht.",
     "hilfe": [
      "Über welche Felder zieht der König?",
      "Der Turm geht über b1, der König nicht."
     ]
    },
    {
     "frage": "Der Turm h1 wird angegriffen. Darf Weiß kurz rochieren? Markiere das Zielfeld des Königs. Wenn nicht, drücke „Prüfen“ ohne Markierung.",
     "fen": "k6r/8/8/8/8/8/8/4K2R",
     "rechte": "K",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Ja, g1. Ein angegriffener Turm verhindert die Rochade nicht.",
     "hilfe": [
      "Gilt die Bedingung auch für den Turm?",
      "Nur der König darf nicht durch Schach ziehen."
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die die kurze Rochade verhindert.",
     "fen": "4k3/8/8/8/8/7n/8/4K2R",
     "rechte": "K",
     "pruef": {
      "stoerer": "kurz"
     },
     "targets": null,
     "antwort": "Der Springer h3. Er greift g1 an, dort würde der König landen.",
     "hilfe": [
      "Wo landet der König?",
      "Denk an die Springersprünge."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/8/8/8/8/8/8/4KR2",
     "zug": "b",
     "rechte": "kq",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c8. Der weiße Turm f1 greift f8 an, kurz geht deshalb nicht.",
     "hilfe": [
      "Über welche Felder zieht der schwarze König bei der kurzen Rochade?",
      "Wer greift eines davon an?"
     ]
    },
    {
     "frage": "Klicke alle schwarzen Figuren an, die eine Rochade verhindern.",
     "fen": "3k4/8/8/8/8/8/1b5n/R3K2R",
     "rechte": "KQ",
     "pruef": {
      "stoerer": "beide"
     },
     "targets": null,
     "antwort": "Der Läufer b2 greift c1 an und verhindert die lange Rochade. Der Springer h2 greift f1 an und verhindert die kurze.",
     "hilfe": [
      "Prüfe die Wege des Königs nach beiden Seiten.",
      "Wer greift c1, d1, f1 oder g1 an?"
     ]
    },
    {
     "frage": "Der Springer gibt Schach. Darf Weiß rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "r3k2r/8/8/8/8/3n4/8/R3K2R",
     "rechte": "KQkq",
     "schach": true,
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keine. Aus dem Schach heraus geht keine Rochade, auch nicht gegen einen Springer.",
     "hilfe": [
      "Steht der König im Schach?",
      "Bedingung 3."
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.",
     "fen": "r3k2r/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "g1 und c1. Alle Bedingungen sind erfüllt.",
     "hilfe": [
      "Prüfe beide Seiten.",
      "Der König zieht zwei Felder."
     ]
    },
    {
     "frage": "Welche Rochade ist hier erlaubt? Markiere das Zielfeld des Königs.",
     "fen": "3k1r2/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c1. Der Turm f8 greift f1 an.",
     "hilfe": [
      "Über welche Felder zieht der König?",
      "Wer greift eines davon an?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die die lange Rochade verhindert.",
     "fen": "k7/8/8/8/q7/8/8/R3K3",
     "rechte": "Q",
     "pruef": {
      "stoerer": "lang"
     },
     "targets": null,
     "antwort": "Die Dame a4. Sie greift d1 über die Diagonale an.",
     "hilfe": [
      "Über welche Felder zieht der König bei der langen Rochade?",
      "Prüfe auch die Diagonalen."
     ]
    },
    {
     "frage": "Der weiße König hat schon gezogen. Darf er rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "3k4/8/8/8/8/8/8/R3K2R",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keine. Hat der König einmal gezogen, ist die Rochade verloren.",
     "hilfe": [
      "Bedingung 1.",
      "Auch eine Rückkehr hilft nicht."
     ]
    },
    {
     "frage": "Weiß hat kurz rochiert. Klicke den König und den Turm an, die rochiert haben.",
     "fen": "4k3/8/8/8/8/8/5PPP/R4RK1",
     "targets": [
      "f1",
      "g1"
     ],
     "antwort": "Der König g1 und der Turm f1.",
     "hilfe": [
      "Wo steht der König nach der kurzen Rochade?",
      "Der Turm steht direkt daneben."
     ]
    },
    {
     "frage": "Der Turm e2 gibt Schach. Darf Weiß rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/8/8/4r3/R3K2R",
     "rechte": "KQ",
     "schach": true,
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keine. Aus dem Schach heraus ist keine Rochade erlaubt. Weiß schlägt den Turm mit dem König.",
     "hilfe": [
      "Steht der König im Schach?",
      "Bedingung 3."
     ]
    }
   ]
  }
 },
 "15": {
  "thema": "En passant",
  "lernziel": "Ich kann en passant erkennen und richtig ausführen.",
  "leitfrage": "Wann darf ein Bauer einen anderen Bauern im Vorbeigehen schlagen?",
  "vorwissen": "Bauernzug, Doppelschritt und Schlagen (Woche 5), Umwandlung (Woche 13).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "FIDE-Regel zum Schlagen en passant in kindgerechter Form, Ludgerus-Schachdiplom Silber (en passant). Brettaufgaben eigene Aufgaben; alle Stellungen aus echten Zugfolgen erzeugt und mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Rochade wiederholen, dann: der Doppelschritt",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 die Rochade aus Woche 14 und den Doppelschritt aufgreifen.",
     "W5 und W6: Ein schwarzer Bauer springt mit Doppelschritt neben einen weißen Bauern. Über welches Feld ist er gesprungen? Ziel nennen: „Heute lernt ihr die seltenste Bauernregel: Schlagen im Vorbeigehen, en passant.“"
    ],
    "kinder": "Ich erkenne einen Doppelschritt und das übersprungene Feld.",
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
    "titel": "So geht en passant, drei Bedingungen",
    "ablauf": [
     "Plakat „En passant“ aufhängen. Am Lehrbrett E1 und E2 zeigen: Der weiße Bauer schlägt schräg auf das übersprungene Feld, der schwarze Bauer wird vom Brett genommen. Die Kinder spielen es am eigenen Brett nach.",
     "E3 bis E6: die Bedingungen. Der schlagende Bauer steht auf der 5. Reihe (Schwarz: 4. Reihe), der andere kam gerade mit Doppelschritt, und es muss sofort geschehen.",
     "Merksatz: „En passant: nur gegen einen Doppelschritt, nur direkt danach.“"
    ],
    "kinder": "Ich führe en passant aus und nenne die drei Bedingungen.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: En passant",
      "was": "enpassant"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: En passant E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "En-passant-Falle zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen weißen Bauern auf die 5. Reihe und einen schwarzen Bauern auf die 7. Reihe der Nachbarlinie. Kind B zieht den schwarzen Bauern mit Doppelschritt vorbei, Kind A schlägt en passant und sagt das übersprungene Feld an. Danach wechseln die Rollen.",
     "Frage zwischendurch: „Warum darfst du jetzt nicht mehr en passant schlagen?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich schlage en passant richtig und erkenne, wann es nicht geht.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: En passant",
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
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Der Bauer landet auf dem übersprungenen Feld, nicht auf dem Feld des geschlagenen Bauern. En passant gibt es nur direkt danach, nur von der 5. Reihe, auch für Schwarz.",
     "Bei jeder Aufgabe nachfragen: „Welche der drei Bedingungen fehlt?“ oder „Welcher Bauer verschwindet?“"
    ],
    "kinder": "Ich kenne die typischen Fehler bei en passant.",
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
     "Während die Kinder arbeiten, lässt du dir bei einigen am Brett ein en passant vorspielen und fragst: „Welcher Bauer verschwindet?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich erkenne und spiele en passant ohne Hilfe.",
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
    "titel": "Minispiel „Bauernkrieg mit en passant“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Jedes Kind hat nur seine acht Bauern. Wer zuerst einen Bauern umwandelt, gewinnt. Jedes en passant, das richtig gespielt wird, bringt einen Extrapunkt. Danach wechseln die Rollen, das andere Kind spielt Weiß.",
     "Rückblick: „Auf welches Feld zieht der Bauer beim en passant?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um Partien, die unentschieden enden: Patt und Remis."
    ],
    "kinder": "Ich nutze en passant im Spiel, wenn es erlaubt ist.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: En passant",
      "was": "enpassant"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Mit dem Finger den Doppelschritt nachfahren und auf das übersprungene Feld tippen. Dorthin zieht der schlagende Bauer.",
   "zusatz": "Eine Stellung bauen, in der zwei Bauern en passant schlagen könnten, und entscheiden, welcher besser ist.",
   "kuerzen": "Die En-passant-Falle auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Bauernkrieg dauert nur fünf Minuten."
  },
  "nachher": "Wer stellt den Bauern beim en passant auf das falsche Feld? Wer vergisst, dass es nur direkt danach geht? Die Bauernregeln greifst du in Woche 16 bei Patt und Remis wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.",
     "fen": "3k4/8/8/8/8/7n/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c1. Der Springer h3 greift g1 an, kurz geht deshalb nicht.",
     "hilfe": [
      "Prüfe beide Seiten.",
      "Wer greift ein Feld auf dem Weg des Königs an?"
     ]
    },
    {
     "frage": "Klicke die schwarze Figur an, die die lange Rochade verhindert.",
     "fen": "3k4/8/8/7b/8/8/8/R3K3",
     "rechte": "Q",
     "pruef": {
      "stoerer": "lang"
     },
     "targets": null,
     "antwort": "Der Läufer h5. Er greift d1 an.",
     "hilfe": [
      "Über welche Felder zieht der König bei der langen Rochade?",
      "Prüfe die Diagonalen."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere das Feld, auf das der schwarze König mit einer Rochade ziehen kann.",
     "fen": "4k2r/8/8/8/8/8/8/4K3",
     "zug": "b",
     "rechte": "k",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "g8, die kurze Rochade.",
     "hilfe": [
      "Der König zieht zwei Felder Richtung Turm.",
      "Schwarz rochiert auf der 8. Reihe."
     ]
    },
    {
     "frage": "Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.",
     "fen": "8/8/8/8/3n4/6p1/1P1P2P1/8",
     "pruef": {
      "doppelschritt": true
     },
     "targets": null,
     "antwort": "Nur b2. Für d2 ist d4 besetzt, g2 ist von g3 blockiert.",
     "hilfe": [
      "Startfeld auf der 2. Reihe?",
      "Beide Felder davor frei?"
     ]
    },
    {
     "frage": "Der schwarze Bauer ist gerade mit Doppelschritt von d7 nach d5 gezogen. Klicke den weißen Bauern an, der jetzt direkt neben ihm steht.",
     "fen": "rnbqkbnr/1pp1pppp/p7/3pP3/8/8/PPPP1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 d5",
     "targets": [
      "e5"
     ],
     "antwort": "Der Bauer e5. Er steht auf der 5. Reihe direkt neben d5.",
     "hilfe": [
      "Schau links und rechts neben d5.",
      "Auf derselben Reihe."
     ]
    },
    {
     "frage": "Über welches Feld ist der schwarze Bauer beim Doppelschritt d7–d5 gesprungen? Markiere es.",
     "fen": "rnbqkbnr/1pp1pppp/p7/3pP3/8/8/PPPP1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 d5",
     "leer": true,
     "targets": [
      "d6"
     ],
     "antwort": "d6. Dieses Feld ist gleich wichtig: Dorthin darf Weiß en passant schlagen.",
     "hilfe": [
      "Zwischen d7 und d5 liegt ein Feld.",
      "Es liegt auf der d-Linie."
     ]
    }
   ],
   "E": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer e5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1pp1pppp/p7/3pP3/8/8/PPPP1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 d5",
     "leer": true,
     "pruef": {
      "legal": "e5"
     },
     "targets": null,
     "antwort": "e6 und d6. Auf d6 schlägt er en passant, der Bauer d5 wird vom Brett genommen.",
     "hilfe": [
      "Gerade nach vorn ist frei.",
      "Denk an das übersprungene Feld."
     ]
    },
    {
     "frage": "Weiß schlägt en passant. Welcher schwarze Bauer wird vom Brett genommen? Klicke ihn an.",
     "fen": "rnbqkbnr/1pp1pppp/p7/3pP3/8/8/PPPP1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 d5",
     "targets": [
      "d5"
     ],
     "antwort": "Der Bauer d5. Der weiße Bauer zieht nach d6, der schwarze Bauer daneben verschwindet.",
     "hilfe": [
      "Es ist der Bauer, der den Doppelschritt gemacht hat.",
      "Er steht neben dem weißen Bauern."
     ]
    },
    {
     "frage": "Weiß hat nach d7–d5 zuerst den Springer gezogen, dann zog Schwarz h6. Markiere alle Felder, auf die der Bauer e5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1pp1ppp1/p6p/3pP3/8/5N2/PPPP1PPP/RNBQKB1R",
     "zuege": "e4 a6 e5 d5 Nf3 h6",
     "leer": true,
     "pruef": {
      "legal": "e5"
     },
     "targets": null,
     "antwort": "Nur e6. En passant geht nur sofort im nächsten Zug, jetzt ist es zu spät.",
     "hilfe": [
      "Wann darf man en passant schlagen?",
      "Ist der Doppelschritt gerade passiert?"
     ]
    },
    {
     "frage": "Schwarz ist in zwei Einzelschritten d7–d6–d5 gezogen. Markiere alle Felder, auf die der Bauer e5 ziehen kann.",
     "fen": "rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR",
     "zuege": "e4 d6 e5 d5",
     "leer": true,
     "pruef": {
      "legal": "e5"
     },
     "targets": null,
     "antwort": "Nur e6. En passant gibt es nur gegen einen Doppelschritt, nicht gegen zwei einzelne Schritte.",
     "hilfe": [
      "Wie ist der Bauer nach d5 gekommen?",
      "Bedingung 2 auf dem Plakat."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Weiß hat gerade e2–e4 gespielt. Markiere alle Felder, auf die der schwarze Bauer d4 ziehen kann.",
     "fen": "rnbqkbnr/ppp1pppp/8/8/P2pP3/8/1PPP1PPP/RNBQKBNR",
     "zug": "b",
     "ep": "e3",
     "zuege": "a3 d5 a4 d4 e4",
     "leer": true,
     "pruef": {
      "legal": "d4"
     },
     "targets": null,
     "antwort": "d3 und e3. Auf e3 schlägt Schwarz en passant. Für Schwarz ist es die 4. Reihe.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Über welches Feld ist der weiße Bauer gesprungen?"
     ]
    },
    {
     "frage": "Schwarz hat gerade d7–d5 gespielt. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.",
     "fen": "rnbqkbnr/1pp1pppp/8/2PpP3/p7/8/PP1P1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 a5 c4 a4 c5 d5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "c5 und e5. Beide stehen auf der 5. Reihe direkt neben d5. Jeder darf nach d6 schlagen.",
     "hilfe": [
      "Wer steht neben d5?",
      "Auf der 5. Reihe."
     ]
    }
   ],
   "A": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/pppp1pp1/7p/3Pp3/8/8/PPP1PPPP/RNBQKBNR",
     "ep": "e6",
     "zuege": "d4 h6 d5 e5",
     "leer": true,
     "pruef": {
      "legal": "d5"
     },
     "targets": null,
     "antwort": "d6 und e6. Auf e6 schlägt er en passant.",
     "hilfe": [
      "Gerade nach vorn ist frei.",
      "Über welches Feld ist e7–e5 gesprungen?"
     ]
    },
    {
     "frage": "Nach e7–e5 haben beide noch einen Zug gemacht. Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/pppp1pp1/8/3Pp2p/8/P7/1PP1PPPP/RNBQKBNR",
     "zuege": "d4 h6 d5 e5 a3 h5",
     "leer": true,
     "pruef": {
      "legal": "d5"
     },
     "targets": null,
     "antwort": "Nur d6. Für en passant ist es zu spät.",
     "hilfe": [
      "Ist der Doppelschritt gerade passiert?",
      "Nur sofort danach."
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der Bauer g5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1pppppp1/p7/6Pp/8/8/PPPPPP1P/RNBQKBNR",
     "ep": "h6",
     "zuege": "g4 a6 g5 h5",
     "leer": true,
     "pruef": {
      "legal": "g5"
     },
     "targets": null,
     "antwort": "g6 und h6. Auf h6 schlägt er en passant, auch am Rand geht es.",
     "hilfe": [
      "Wer steht neben g5?",
      "Über welches Feld ist h7–h5 gesprungen?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer b4 ziehen kann.",
     "fen": "rnbqkbnr/p1pppppp/8/8/1pP4P/8/PP1PPPP1/RNBQKBNR",
     "zug": "b",
     "ep": "c3",
     "zuege": "h3 b5 h4 b4 c4",
     "leer": true,
     "pruef": {
      "legal": "b4"
     },
     "targets": null,
     "antwort": "b3 und c3. Auf c3 schlägt Schwarz en passant.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Über welches Feld ist c2–c4 gesprungen?"
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.",
     "fen": "rnbqkbnr/1pppp1pp/8/4PpP1/p7/8/PPPP1P1P/RNBQKBNR",
     "ep": "f6",
     "zuege": "e4 a6 e5 a5 g4 a4 g5 f5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "e5 und g5. Beide stehen neben f5 auf der 5. Reihe.",
     "hilfe": [
      "Wer steht neben f5?",
      "Auf der 5. Reihe."
     ]
    },
    {
     "frage": "Schwarz ist mit einem Einzelschritt nach c5 gezogen. Markiere alle Felder, auf die der Bauer b5 ziehen kann.",
     "fen": "rnbqkbnr/pp1ppppp/8/1Pp5/8/8/P1PPPPPP/RNBQKBNR",
     "zuege": "b4 c6 b5 c5",
     "leer": true,
     "pruef": {
      "legal": "b5"
     },
     "targets": null,
     "antwort": "Nur b6. Der Bauer c5 kam mit einem Einzelschritt von c6, en passant geht nicht.",
     "hilfe": [
      "Wie ist der Bauer nach c5 gekommen?",
      "Nur gegen einen Doppelschritt."
     ]
    }
   ],
   "S": [
    {
     "frage": "Ein Kind schlägt en passant und stellt seinen Bauern auf f5. Wohin gehört er? Markiere alle Felder, auf die e5 ziehen kann.",
     "fen": "rnbqkbnr/1pppp1pp/p7/4Pp2/8/8/PPPP1PPP/RNBQKBNR",
     "ep": "f6",
     "zuege": "e4 a6 e5 f5",
     "leer": true,
     "pruef": {
      "legal": "e5"
     },
     "targets": null,
     "antwort": "e6 und f6. Beim en passant landet der Bauer auf dem übersprungenen Feld f6, nicht auf f5.",
     "hilfe": [
      "Wohin schlägt ein Bauer immer?",
      "Schräg nach vorn."
     ]
    },
    {
     "frage": "Ein Kind will en passant schlagen, aber vorher wurden zwei andere Züge gespielt. Markiere alle Felder, auf die e5 ziehen kann.",
     "fen": "rnbqkbnr/1pppp1pp/8/p3Pp2/8/3P4/PPP2PPP/RNBQKBNR",
     "zuege": "e4 a6 e5 f5 d3 a5",
     "leer": true,
     "pruef": {
      "legal": "e5"
     },
     "targets": null,
     "antwort": "Nur e6. Die Chance war nur direkt nach f7–f5.",
     "hilfe": [
      "Ist der Doppelschritt gerade passiert?",
      "Bedingung 3."
     ]
    },
    {
     "frage": "Ist das en passant? Markiere alle Felder, auf die der Bauer e4 ziehen kann.",
     "fen": "rnbqkbnr/1pp1pppp/p7/3p4/4P3/8/PPPP1PPP/RNBQKBNR",
     "zuege": "e3 a6 e4 d5",
     "leer": true,
     "pruef": {
      "legal": "e4"
     },
     "targets": null,
     "antwort": "e5 und d5. Auf d5 schlägt er ganz normal, denn der schwarze Bauer steht schräg vor ihm. En passant gibt es nur von der 5. Reihe.",
     "hilfe": [
      "Steht der schwarze Bauer neben oder schräg vor e4?",
      "Normales Schlagen geht schräg nach vorn."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer e4 ziehen kann.",
     "fen": "rnbqkbnr/pppp1ppp/8/8/P2Pp3/8/1PP1PPPP/RNBQKBNR",
     "zug": "b",
     "ep": "d3",
     "zuege": "a3 e5 a4 e4 d4",
     "leer": true,
     "pruef": {
      "legal": "e4"
     },
     "targets": null,
     "antwort": "e3 und d3. Auch Schwarz darf en passant schlagen.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Über welches Feld ist d2–d4 gesprungen?"
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.",
     "fen": "rnbqkbnr/p1ppppp1/7p/1pP5/8/8/PP1PPPPP/RNBQKBNR",
     "ep": "b6",
     "zuege": "c4 h6 c5 b5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "Nur c5. Er steht auf der 5. Reihe direkt neben b5.",
     "hilfe": [
      "Wer steht neben b5?",
      "Auf der 5. Reihe."
     ]
    },
    {
     "frage": "Weiß schlägt hier en passant nach b6. Welcher Bauer verschwindet vom Brett? Klicke ihn an.",
     "fen": "rnbqkbnr/p1ppppp1/7p/1pP5/8/8/PP1PPPPP/RNBQKBNR",
     "ep": "b6",
     "zuege": "c4 h6 c5 b5",
     "targets": [
      "b5"
     ],
     "antwort": "Der Bauer b5, der gerade den Doppelschritt gemacht hat.",
     "hilfe": [
      "Er steht neben dem weißen Bauern.",
      "Er hat den Doppelschritt gemacht."
     ]
    }
   ],
   "L": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer f5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1ppppp1p/p7/5Pp1/8/8/PPPPP1PP/RNBQKBNR",
     "ep": "g6",
     "zuege": "f4 a6 f5 g5",
     "leer": true,
     "pruef": {
      "legal": "f5"
     },
     "targets": null,
     "antwort": "f6 und g6. Auf g6 schlägt er en passant.",
     "hilfe": [
      "Gerade nach vorn ist frei.",
      "Über welches Feld ist g7–g5 gesprungen?"
     ]
    },
    {
     "frage": "Nach g7–g5 haben beide noch einen Zug gemacht. Markiere alle Felder, auf die der Bauer f5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1ppppp1p/8/p4Pp1/8/7P/PPPPP1P1/RNBQKBNR",
     "zuege": "f4 a6 f5 g5 h3 a5",
     "leer": true,
     "pruef": {
      "legal": "f5"
     },
     "targets": null,
     "antwort": "Nur f6. Für en passant ist es zu spät.",
     "hilfe": [
      "Ist der Doppelschritt gerade passiert?",
      "Nur sofort danach."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer h4 ziehen kann.",
     "fen": "rnbqkbnr/ppppppp1/8/8/2P3Pp/8/PP1PPP1P/RNBQKBNR",
     "zug": "b",
     "ep": "g3",
     "zuege": "c3 h5 c4 h4 g4",
     "leer": true,
     "pruef": {
      "legal": "h4"
     },
     "targets": null,
     "antwort": "h3 und g3. Auf g3 schlägt Schwarz en passant.",
     "hilfe": [
      "Schwarz zieht nach unten.",
      "Über welches Feld ist g2–g4 gesprungen?"
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.",
     "fen": "rnbqkbnr/pp1pppp1/8/1PpP4/7p/8/P1P1PPPP/RNBQKBNR",
     "ep": "c6",
     "zuege": "b4 h6 b5 h5 d4 h4 d5 c5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "b5 und d5. Beide stehen neben c5 auf der 5. Reihe.",
     "hilfe": [
      "Wer steht neben c5?",
      "Auf der 5. Reihe."
     ]
    },
    {
     "frage": "Weiß schlägt hier en passant. Welcher Bauer verschwindet vom Brett? Klicke ihn an.",
     "fen": "rnbqkbnr/1ppp1ppp/p7/4pP2/8/8/PPPPP1PP/RNBQKBNR",
     "ep": "e6",
     "zuege": "f4 a6 f5 e5",
     "targets": [
      "e5"
     ],
     "antwort": "Der Bauer e5. Der weiße Bauer zieht nach e6.",
     "hilfe": [
      "Wer hat gerade den Doppelschritt gemacht?",
      "Er steht neben dem weißen Bauern."
     ]
    },
    {
     "frage": "Schwarz ist mit einem Einzelschritt nach b5 gezogen. Markiere alle Felder, auf die der Bauer a5 ziehen kann.",
     "fen": "rnbqkbnr/p1pppppp/8/Pp6/8/8/1PPPPPPP/RNBQKBNR",
     "zuege": "a4 b6 a5 b5",
     "leer": true,
     "pruef": {
      "legal": "a5"
     },
     "targets": null,
     "antwort": "Nur a6. Der Bauer kam mit einem Einzelschritt von b6.",
     "hilfe": [
      "Wie ist der Bauer nach b5 gekommen?",
      "Nur gegen einen Doppelschritt."
     ]
    }
   ]
  }
 },
 "16": {
  "thema": "Patt und Remis",
  "lernziel": "Ich kann Patt, Remis und Matt unterscheiden.",
  "leitfrage": "Wann gewinnt jemand, und wann endet eine Partie unentschieden?",
  "vorwissen": "Schach und Matt (Woche 8), Umwandlung (Woche 13).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "FIDE-Regeln zu Patt und Remis in kindgerechter Form, Ludgerus-Schachdiplom Silber (Patt). Brettaufgaben eigene Aufgaben; Patt, Matt und Fluchtfelder mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "En passant wiederholen, dann: Ist das Matt?",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W4 en passant und Matt aus den letzten Wochen aufgreifen.",
     "W5 und W6 als Rätsel: Der schwarze König kann nicht ziehen. Ist das Matt? Ziel nennen: „Heute lernt ihr, wann eine Partie unentschieden endet, und wie man ein Patt vermeidet.“"
    ],
    "kinder": "Ich erkenne, dass „kein Zug möglich“ nicht immer Matt ist.",
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
    "titel": "Patt, Matt und die Remis-Regeln",
    "ablauf": [
     "Plakat „Wie eine Partie enden kann“ aufhängen. Am Lehrbrett E1 bis E3: Patt heißt, wer am Zug ist, steht nicht im Schach, hat aber keinen erlaubten Zug. Dann ist die Partie remis. Matt heißt, der König steht im Schach und ist nicht zu retten.",
     "E4 bis E6: Zu wenig Material, mit König und Läufer oder König und Springer allein kann man nicht mattsetzen. Patt kann auch mit Bauern entstehen. Kurz besprechen: Remis durch Einigung, dreimalige Wiederholung und 50 Züge.",
     "Merksatz: „Matt: im Schach und kein Ausweg. Patt: nicht im Schach und kein Zug.“"
    ],
    "kinder": "Ich erkläre den Unterschied zwischen Matt und Patt an einer Stellung.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Wie eine Partie enden kann",
      "was": "remis"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Patt und Remis E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Matt oder Patt? Zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A stellt einen schwarzen König in eine Ecke und dazu weißen König und Dame. Kind B sagt: Matt, Patt oder keins von beiden, und begründet. Danach wechseln die Rollen.",
     "Frage zwischendurch: „Woran erkennst du, dass es Patt und nicht Matt ist?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich unterscheide Matt und Patt sicher.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Patt und Remis",
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
    "titel": "Typische Irrtümer klären",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Patt ist kein Sieg. Steht der König im Schach, ist es nie Patt. Kann noch eine andere Figur ziehen, ist es kein Patt. König und Turm reichen zum Matt.",
     "Bei jeder Aufgabe nachfragen: „Steht der König im Schach?“ oder „Kann irgendeine Figur noch ziehen?“"
    ],
    "kinder": "Ich kenne die typischen Irrtümer bei Patt und Remis.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Irrtümer klären S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Sechs Aufgaben allein",
    "ablauf": [
     "Jedes Kind löst L1 bis L6 allein.",
     "Während die Kinder arbeiten, fragst du einige am Brett: „Ist das Matt oder Patt? Woran erkennst du das?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich erkenne Matt, Patt und Remis ohne Hilfe.",
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
    "titel": "Minispiel „Rette dich ins Patt“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Weiß hat König und Dame, Schwarz nur den König. Weiß versucht in zehn Zügen mattzusetzen. Schwarz gewinnt, wenn ein Patt entsteht oder die zehn Züge um sind. Danach wechseln die Rollen.",
     "Rückblick: „Wie kann man ein Patt vermeiden?“ (Dem König immer ein Feld lassen, bis zum Matt.) Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr, wie man mit Dame und König sicher mattsetzt."
    ],
    "kinder": "Ich vermeide mit der Dame ein Patt.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Wie eine Partie enden kann",
      "was": "remis"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Zwei Fragen der Reihe nach stellen: Steht der König im Schach? Kann irgendeine Figur noch ziehen?",
   "zusatz": "Eine Stellung bauen, in der ein Zug der Dame mattsetzt und ein anderer Damenzug Patt ergibt.",
   "kuerzen": "„Matt oder Patt?“ auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde."
  },
  "nachher": "Wer verwechselt noch Matt und Patt? Wer setzt mit der Dame aus Versehen patt? Das greifst du in Woche 17 beim Matt mit Dame und König gleich zu Beginn wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.",
     "fen": "rnbqkbnr/1p1ppppp/p7/2pP4/8/8/PPP1PPPP/RNBQKBNR",
     "ep": "c6",
     "zuege": "d4 a6 d5 c5",
     "leer": true,
     "pruef": {
      "legal": "d5"
     },
     "targets": null,
     "antwort": "d6 und c6. Auf c6 schlägt er en passant.",
     "hilfe": [
      "Gerade nach vorn ist frei.",
      "Über welches Feld ist c7–c5 gesprungen?"
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.",
     "fen": "rnbqkbnr/1ppppp1p/8/5PpP/p7/8/PPPPP1P1/RNBQKBNR",
     "ep": "g6",
     "zuege": "f4 a6 f5 a5 h4 a4 h5 g5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "f5 und h5. Beide stehen neben g5 auf der 5. Reihe.",
     "hilfe": [
      "Wer steht neben g5?",
      "Auf der 5. Reihe."
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "6k1/5ppp/8/8/8/8/8/3R2K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "d8. Grundreihenmatt: Die eigenen Bauern sperren den König ein.",
     "hilfe": [
      "Der König hat vor sich nur eigene Bauern.",
      "Der Turm muss auf die 8. Reihe."
     ]
    },
    {
     "frage": "Der Turm gibt Schach. Markiere alle Felder, auf die der schwarze König ziehen kann.",
     "fen": "7k/8/8/8/8/8/8/K6R",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "g8 und g7. Er verlässt die h-Linie.",
     "hilfe": [
      "Der Turm greift die h-Linie an.",
      "Zeige die Nachbarfelder."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/2Q5/1K6/8/8/8/8/8",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Alle Nachbarfelder sind angegriffen.",
     "hilfe": [
      "Prüfe a7, b7 und b8.",
      "Welche weiße Figur greift jedes Feld an?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug und kann nicht ziehen. Ist das Matt? Klicke die Figur an, die dem schwarzen König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/1K6/2Q5/k7",
     "zug": "b",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Keine. Der König steht nicht im Schach und kann nicht ziehen: Das ist Patt, kein Matt. Die Partie ist remis.",
     "hilfe": [
      "Greift die Dame das Feld a8 an?",
      "Kein Schach heißt kein Matt."
     ]
    }
   ],
   "E": [
    {
     "frage": "Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "7k/5Q2/6K1/8/8/8/8/8",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Keine. Der König steht nicht im Schach und kann nicht ziehen: Patt. Die Partie endet remis.",
     "hilfe": [
      "Steht der König im Schach?",
      "Hat Schwarz noch einen erlaubten Zug?"
     ]
    },
    {
     "frage": "Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf, weil der schwarze König dann patt wäre.",
     "fen": "7k/8/6K1/3Q4/8/8/8/8",
     "leer": true,
     "pruef": {
      "patt": "d5"
     },
     "targets": null,
     "antwort": "a2, b3, c4, e6 und f7. Von dort deckt die Dame g8, der weiße König deckt g7 und h7. Der schwarze König hätte kein Feld und stünde nicht im Schach.",
     "hilfe": [
      "Welches Feld des Königs ist noch frei?",
      "Von welchen Feldern deckt die Dame g8, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "7k/8/6K1/3Q4/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8 und d8. Die Dame gibt Schach über die 8. Reihe, der weiße König deckt g7 und h7.",
     "hilfe": [
      "Die Dame gibt Schach, der König hat kein Feld.",
      "Der weiße König deckt g7 und h7."
     ]
    },
    {
     "frage": "Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.",
     "fen": "4k3/8/8/8/8/8/8/RNBQK3",
     "targets": [
      "a1",
      "d1"
     ],
     "antwort": "Mit der Dame oder mit einem Turm. Mit nur einem Läufer oder nur einem Springer geht es nicht.",
     "hilfe": [
      "Ein Läufer deckt nur Felder einer Farbe.",
      "Ein Springer allein ist zu schwach."
     ]
    },
    {
     "frage": "Weiß hat König und Läufer, Schwarz nur den König. Klicke die weißen Figuren an, mit denen Weiß noch mattsetzen kann. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/8/8/8/2B1K3",
     "targets": [],
     "antwort": "Keine. König und Läufer reichen nicht zum Matt. Die Partie ist sofort remis, zu wenig Material.",
     "hilfe": [
      "Kann ein Läufer alle Fluchtfelder decken?",
      "Denk an die Felderfarben."
     ]
    },
    {
     "frage": "Weiß ist am Zug. Markiere alle Felder, auf die der weiße König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/2k5/2p5/2K5",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Der König steht nicht im Schach, kann aber nicht ziehen: Patt. Auch mit Bauern kann ein Patt entstehen.",
     "hilfe": [
      "Welche Felder greifen Bauer und König an?",
      "Steht der weiße König im Schach?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/8/5Q2/K6k",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Die Dame greift g1, g2 und h2 an, der König steht aber nicht im Schach: Patt.",
     "hilfe": [
      "Prüfe g1, g2 und h2.",
      "Steht der König im Schach?"
     ]
    },
    {
     "frage": "Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.",
     "fen": "k7/8/1K6/8/8/4Q3/8/8",
     "leer": true,
     "pruef": {
      "patt": "e3"
     },
     "targets": null,
     "antwort": "e5, f4 und g3. Von dort deckt die Dame b8, der König b6 deckt a7 und b7. Der schwarze König hätte kein Feld und stünde nicht im Schach.",
     "hilfe": [
      "Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?",
      "Prüfe a7, b7 und b8."
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "k7/8/1K6/8/8/4Q3/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "e8. Die Dame gibt Schach über die 8. Reihe, der König b6 deckt a7 und b7.",
     "hilfe": [
      "Die Dame gibt Schach, der König hat kein Feld.",
      "Der weiße König deckt a7, b7 und c7."
     ]
    },
    {
     "frage": "Weiß hat König und Springer, Schwarz nur den König. Klicke die weißen Figuren an, mit denen Weiß mattsetzen kann. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "4k3/8/8/8/8/8/8/1N2K3",
     "targets": [],
     "antwort": "Keine. Mit König und Springer allein kann man nicht mattsetzen: remis.",
     "hilfe": [
      "Reicht ein Springer?",
      "Zu wenig Material heißt remis."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/p7/P7/8/5Q2/K6k",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Keine. Der Bauer a5 ist blockiert, der König hat kein Feld: Patt.",
     "hilfe": [
      "Kann der Bauer ziehen?",
      "Kann der König ziehen?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Ist es Patt?",
     "fen": "8/8/8/8/p7/8/5Q2/K6k",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Der Bauer a4 kann noch ziehen. Deshalb ist es kein Patt, auch wenn der König festsitzt.",
     "hilfe": [
      "Kann der Bauer ziehen?",
      "Ein Zug irgendeiner Figur reicht."
     ]
    }
   ],
   "S": [
    {
     "frage": "Patt ist kein Sieg: Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "7k/8/6K1/8/8/8/8/5Q2",
     "leer": true,
     "pruef": {
      "patt": "f1"
     },
     "targets": null,
     "antwort": "c4 und f7. Von dort deckt die Dame g8, der König g6 deckt g7 und h7, und es ist kein Schach. Patt wäre nur remis.",
     "hilfe": [
      "Welche Damenzüge nehmen dem König alle Felder, ohne Schach zu geben?",
      "Der weiße König deckt g7 und h7."
     ]
    },
    {
     "frage": "Ein Kind ruft „Patt!“. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/1Q6/1K6/8/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Aber die Dame gibt Schach: Das ist Matt, nicht Patt. Weiß gewinnt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Patt gibt es nur ohne Schach."
     ]
    },
    {
     "frage": "Der schwarze König sitzt fest. Klicke alle schwarzen Figuren an, die ziehen können.",
     "fen": "8/8/8/8/8/8/5Q2/K5nk",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Der Springer g1. Deshalb ist es kein Patt, Schwarz muss mit dem Springer ziehen.",
     "hilfe": [
      "Kann eine andere schwarze Figur ziehen?",
      "Ein Zug reicht, dann ist es kein Patt."
     ]
    },
    {
     "frage": "Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.",
     "fen": "4k3/8/8/8/8/8/8/R3K3",
     "targets": [
      "a1"
     ],
     "antwort": "Mit dem Turm. König und Turm reichen zum Matt, das lernt ihr in Woche 33.",
     "hilfe": [
      "Wie war es bei der Dame?",
      "Ein Turm deckt eine ganze Reihe."
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/1R6/1K6/8/8/8/8/8",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, und der König steht nicht im Schach: Patt. Der Turm auf b7 darf nicht geschlagen werden, weil der König b6 ihn deckt.",
     "hilfe": [
      "Kann der König den Turm schlagen?",
      "Steht er im Schach?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.",
     "fen": "7k/8/6K1/8/8/8/8/R7",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8. Der Turm gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.",
     "hilfe": [
      "Der Turm muss auf die 8. Reihe.",
      "Welche Felder deckt der weiße König?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/8/2Q5/k6K",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, und der König steht nicht im Schach: Patt.",
     "hilfe": [
      "Prüfe a2, b1 und b2.",
      "Steht der König im Schach?"
     ]
    },
    {
     "frage": "Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "k7/8/2K5/8/8/8/8/1Q6",
     "leer": true,
     "pruef": {
      "patt": "b1"
     },
     "targets": null,
     "antwort": "b6. Die Dame deckt a7, b7 und b8, gibt aber kein Schach.",
     "hilfe": [
      "Welche Damenzüge nehmen dem König alle Felder, ohne Schach zu geben?",
      "Prüfe a7, b7 und b8."
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "k7/8/2K5/8/8/8/8/1Q6",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b7. Die Dame gibt Schach und ist vom König c6 gedeckt.",
     "hilfe": [
      "Die Dame gibt Schach, der König hat kein Feld.",
      "Welche Felder deckt der weiße König?"
     ]
    },
    {
     "frage": "Mit welchen Figuren kann Weiß zusammen mit dem König allein mattsetzen? Klicke sie an.",
     "fen": "4k3/8/8/8/8/8/8/R1N1K3",
     "targets": [
      "a1"
     ],
     "antwort": "Mit dem Turm. Mit dem Springer allein geht es nicht.",
     "hilfe": [
      "Reicht ein Springer?",
      "Reicht ein Turm?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können. Ist es Patt?",
     "fen": "8/8/8/8/8/1p6/5Q2/K6k",
     "zug": "b",
     "pruef": {
      "ziehbar": true
     },
     "targets": null,
     "antwort": "Der Bauer b3 kann noch ziehen, also kein Patt.",
     "hilfe": [
      "Kann der Bauer ziehen?",
      "Ein Zug reicht."
     ]
    },
    {
     "frage": "Ist das Matt oder Patt? Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "7k/6Q1/6K1/8/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Die Dame gibt Schach und ist vom König g6 gedeckt: Matt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Kann er die Dame schlagen?"
     ]
    }
   ]
  }
 },
 "17": {
  "thema": "Matt mit Dame und König",
  "lernziel": "Ich kann mit Dame und König mattsetzen, ohne Patt.",
  "leitfrage": "Wie sperrt die Dame den König ein, und wann darf sie mattsetzen?",
  "vorwissen": "Gangart der Dame (Woche 4), Schach und Matt (Woche 8), Patt (Woche 16).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Klassische Kastenmethode des Damenmatts in kindgerechter Form, Ludgerus-Schachdiplom Silber (Matt mit Dame). Brettaufgaben eigene Aufgaben; Matt, Patt, Fluchtfelder und Kastengröße mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Patt oder Matt? Kurz wiederholen",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 und W2: Ein Damenzug setzt matt, ein anderer setzt patt. Wer findet beide?",
     "W3 bis W6 zügig: Gangart der Dame, kleiner Kasten, Matt mit gedeckter Dame. Ziel nennen: „Heute lernt ihr, wie Dame und König gemeinsam aus jeder Stellung mattsetzen, ohne aus Versehen Patt zu machen.“"
    ],
    "kinder": "Ich erinnere mich: Matt heißt Schach und kein Ausweg, Patt heißt kein Schach und kein Zug.",
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
    "titel": "Die Kastenmethode in vier Schritten",
    "ablauf": [
     "Plakat „Matt mit Dame und König“ aufhängen. Am Lehrbrett E1: Die Dame stellt sich einen Springersprung vom König entfernt. Sie sperrt eine Linie und eine Reihe, der König sitzt in einem Kasten.",
     "E2 und E3: Zieht der König, folgt die Dame wieder im Springersprung. Der Kasten wird kleiner, Schach ist dafür nicht nötig. Frage: „Warum gibt die Dame hier kein Schach?“",
     "E4: Die Dame allein schafft kein Matt, der weiße König muss kommen. E5 und E6: zwei Mattbilder und die Pattfalle in derselben Stellung.",
     "Merksatz: „Dame im Springersprung, Kasten klein, König holen, dann Matt. Vor jedem Damenzug fragen: Hat der König noch ein Feld?“"
    ],
    "kinder": "Ich erkläre die vier Schritte: Kasten bauen, Kasten verkleinern, König holen, mattsetzen.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Matt mit Dame und König",
      "was": "damematt"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Kastenmethode E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Damenmatt zu zweit, dann Arbeitsblatt allein",
    "ablauf": [
     "Zu zweit: Kind A hat König e1 und Dame d1, Kind B nur den König e5. A setzt mit der Kastenmethode matt, B zählt die weißen Züge mit und ruft „Stopp!“, wenn ein Patt droht. Danach wechseln die Rollen.",
     "Wer es geschafft hat, versucht es mit weniger Zügen. Frage zwischendurch: „Woran erkennst du, dass jetzt der weiße König kommen muss?“",
     "Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett."
    ],
    "kinder": "Ich setze mit Dame und König matt, ohne Patt.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Matt mit Dame und König",
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
     "Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Die ungedeckte Dame neben dem König wird geschlagen. Dauernd Schach geben vergrößert den Kasten. Ein zu kleiner Kasten ohne Schach ist Patt. Matt und Patt sehen ähnlich aus.",
     "Bei jeder Aufgabe nachfragen: „Ist die Dame gedeckt?“ oder „Hat der König nach deinem Zug noch ein Feld?“"
    ],
    "kinder": "Ich kenne die typischen Fehler beim Damenmatt.",
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
     "Während die Kinder arbeiten, lässt du einige am Brett das Damenmatt aus der Startstellung vorspielen und fragst: „Warum ziehst du die Dame dorthin?“ Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich finde Kastenzug, Mattzug und Pattfalle ohne Hilfe.",
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
    "titel": "Minispiel „Matt-Wettlauf“, Rückblick, Aufräumen",
    "ablauf": [
     "Minispiel zu zweit: Beide Paare bekommen dieselbe Startstellung (König e1, Dame d1 gegen König e5). Welches Paar setzt mit weniger weißen Zügen matt? Patt zählt als verloren. Danach wechseln die Rollen. Weitere Spielidee der Schulschachstiftung: Matt-Challenge (Video, vorher selbst ansehen).",
     "Rückblick: „Welcher Schritt war für dich am schwersten?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist Weihnachtsturnier, dort könnt ihr das Damenmatt in echten Partien einsetzen."
    ],
    "kinder": "Ich setze schnell und ohne Patt matt.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Matt mit Dame und König",
      "was": "damematt"
     },
     {
      "art": "video",
      "label": "Spielidee „Matt-Challenge“ der Schulschachstiftung (Video)",
      "url": "https://www.youtube.com/watch?v=pTEy2s2dwNA"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Mit dem Finger den Kasten auf dem Brett umfahren. Dann fragen: Wohin muss die Dame, damit der Kasten kleiner wird und der König noch ein Feld hat?",
   "zusatz": "Damenmatt aus einer selbst gewählten Startstellung in höchstens zehn weißen Zügen. Oder: eine Stellung bauen, in der zwei Damenzüge mattsetzen und einer patt.",
   "kuerzen": "Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Matt-Wettlauf hat nur eine Runde."
  },
  "nachher": "Wer setzt noch aus Versehen patt? Wer jagt den König mit Schachgeboten, statt ihn einzusperren? Das greifst du im Weihnachtsturnier (Woche 18) in der Partiebesprechung auf und übst es in Woche 33 mit dem Turm.",
  "feld": {
   "W": [
    {
     "frage": "Wiederholung: Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "7k/8/5K2/8/8/8/8/6Q1",
     "leer": true,
     "pruef": {
      "patt": "g1"
     },
     "targets": null,
     "antwort": "g6. Die Dame deckt g8 und h7, der König f6 deckt g7. Kein Schach und kein Zug: Patt.",
     "hilfe": [
      "Welche Felder hat der schwarze König?",
      "Von wo deckt die Dame sie, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "7k/8/5K2/8/8/8/8/6Q1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "g7. Die Dame gibt Schach und ist vom König f6 gedeckt.",
     "hilfe": [
      "Die Dame gibt Schach, der König hat kein Feld.",
      "Wer deckt die Dame?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die die Dame d4 ziehen kann.",
     "fen": "k7/8/8/8/3Q4/8/8/6K1",
     "leer": true,
     "pruef": {
      "legal": "d4"
     },
     "targets": null,
     "antwort": "Die ganze d-Linie, die 4. Reihe und beide Diagonalen bis zum Rand. Auf der Diagonale nach g1 steht der eigene König im Weg, deshalb nur e3 und f2.",
     "hilfe": [
      "Gerade wie der Turm, schräg wie der Läufer.",
      "Wo steht eine eigene Figur im Weg?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/k7/2Q5/1K6/8/8/8/8",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Nur b8. Dame und König sperren alle anderen Felder. Der König sitzt in einem sehr kleinen Kasten.",
     "hilfe": [
      "Prüfe a8, b8, b7, a6 und b6.",
      "Welche weiße Figur greift jedes Feld an?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke die Figur an, die dem schwarzen König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/5K2/6Q1/7k",
     "zug": "b",
     "schach": true,
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Die Dame g2. Sie ist vom König f3 gedeckt, der schwarze König hat kein Feld: Matt.",
     "hilfe": [
      "Welche Figur greift h1 an?",
      "Kann der König die Dame schlagen?"
     ]
    },
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die die Dame dafür ziehen kann.",
     "fen": "6k1/8/6K1/8/8/8/8/Q7",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8 und g7. Auf a8 gibt die Dame Schach über die 8. Reihe, auf g7 ist sie vom König g6 gedeckt.",
     "hilfe": [
      "Der König g6 deckt f7, g7 und h7.",
      "Es gibt zwei Lösungen."
     ]
    }
   ],
   "E": [
    {
     "frage": "Die Dame steht einen Springersprung vom König entfernt. Schwarz ist am Zug. Markiere alle Felder, auf die der König ziehen kann.",
     "fen": "8/8/8/3k4/5Q2/8/8/4K3",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "c6, e6 und c5. Die Dame sperrt die f-Linie und die 4. Reihe, dazu ihre Diagonalen. Der König sitzt in einem Kasten oben links.",
     "hilfe": [
      "Welche Linie und welche Reihe sperrt die Dame?",
      "Prüfe alle acht Nachbarfelder."
     ]
    },
    {
     "frage": "Schwarz hat Ke6 gespielt. Die Dame folgt im Springersprung. Klicke das Feld an, auf dem der Kasten am kleinsten wird.",
     "fen": "8/8/4k3/8/5Q2/8/8/4K3",
     "targets": [
      "d4"
     ],
     "antwort": "d4. Die Dame steht wieder einen Springersprung vom König entfernt und sperrt jetzt die d-Linie und die 4. Reihe. Der König bleibt oben rechts eingesperrt.",
     "hilfe": [
      "Die Felder im Springersprung vom König: d4, g5, c7, g7, c5, d8, f8.",
      "Welches davon sperrt die meisten Felder, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Der Kasten ist schon klein. Klicke das Feld an, auf dem die Dame dem König nur noch zwei Felder lässt.",
     "fen": "6k1/8/8/5Q2/8/8/8/4K3",
     "targets": [
      "f6"
     ],
     "antwort": "f6. Der König hat nur noch g8 und h7. Jetzt holt Weiß den eigenen König, bis die Dame mattsetzen kann.",
     "hilfe": [
      "Wieder im Springersprung.",
      "Prüfe danach: Hat der König noch ein Feld? Sonst ist es Patt."
     ]
    },
    {
     "frage": "Kann die Dame allein mattsetzen? Klicke alle Felder an, auf denen die Dame mattsetzt. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/8/8/2Q5/8/8/8/6K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "Keins. Die Dame allein schafft es nicht, der weiße König muss helfen. Vorsicht: Auf b6 oder c7 wäre es sogar Patt.",
     "hilfe": [
      "Wo ist der weiße König?",
      "Ein Matt braucht hier zwei Figuren."
     ]
    },
    {
     "frage": "Der weiße König ist da. Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "3k4/8/3K4/8/8/7Q/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "d7 und h8. Auf d7 steht die Dame direkt vor dem König und ist vom König d6 gedeckt. Auf h8 gibt sie Schach am Rand, der König d6 deckt c7, d7 und e7.",
     "hilfe": [
      "Mattbild 1: Dame vor dem König, gedeckt.",
      "Mattbild 2: Schach am Rand, die Könige stehen sich gegenüber."
     ]
    },
    {
     "frage": "Achtung Patt: Klicke alle Felder an, auf die die Dame in dieser Stellung nicht ziehen darf.",
     "fen": "3k4/8/3K4/8/8/7Q/8/8",
     "leer": true,
     "pruef": {
      "patt": "h3"
     },
     "targets": null,
     "antwort": "e6. Von dort deckt die Dame c8, e8 und e7, der König d6 deckt c7 und d7. Der König hätte kein Feld und stünde nicht im Schach: Patt.",
     "hilfe": [
      "Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?",
      "Prüfe c8, e8, c7, d7 und e7."
     ]
    }
   ],
   "A": [
    {
     "frage": "Schwarz ist am Zug. Die Dame baut einen Kasten. Markiere alle Felder, auf die der schwarze König ziehen kann.",
     "fen": "8/8/1k6/8/2Q5/8/8/6K1",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "a7, b7 und a5. Die Dame sperrt die c-Linie, die 4. Reihe und ihre Diagonalen.",
     "hilfe": [
      "Welche Linie und welche Reihe sperrt die Dame?",
      "Prüfe alle Nachbarfelder von b6."
     ]
    },
    {
     "frage": "Klicke das Feld an, auf das die Dame zieht: einen Springersprung vom König entfernt und mit dem kleinsten Kasten.",
     "fen": "8/8/8/6k1/8/2Q5/8/K7",
     "targets": [
      "f3"
     ],
     "antwort": "f3. Die Dame sperrt die f-Linie und die 3. Reihe, der König bleibt rechts oben eingesperrt.",
     "hilfe": [
      "Die Felder im Springersprung von g5: e4, f3, h3, e6, f7, h7.",
      "Welches erreicht die Dame, und welches sperrt am meisten?"
     ]
    },
    {
     "frage": "Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "k7/2K5/8/8/8/8/8/5Q2",
     "leer": true,
     "pruef": {
      "patt": "f1"
     },
     "targets": null,
     "antwort": "f2 und g1. Von dort deckt die Dame a7, der König c7 deckt b7 und b8. Kein Schach und kein Zug: Patt.",
     "hilfe": [
      "Der König c7 deckt b7 und b8.",
      "Welche Damenzüge decken a7, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "k7/2K5/8/8/8/8/8/5Q2",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a6 und a1. Die Dame gibt Schach über die a-Linie, der König c7 deckt b7 und b8.",
     "hilfe": [
      "Die Dame muss Schach geben.",
      "Welche Felder deckt der König c7?"
     ]
    },
    {
     "frage": "Ein Kind sagt: „Matt!“ Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/1Q6/8/3K4/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "b7. Die Dame ist nicht gedeckt, der König schlägt sie. Kein Matt.",
     "hilfe": [
      "Wer deckt die Dame b7?",
      "Ein König darf eine ungedeckte Figur schlagen."
     ]
    },
    {
     "frage": "Schwarz ist am Zug und kann nicht ziehen. Klicke die Figur an, die Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "7k/5Q2/8/6K1/8/8/8/8",
     "zug": "b",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Keine. Kein Schach und kein Zug: Patt, also nur remis. Die Dame hätte dem König ein Feld lassen müssen.",
     "hilfe": [
      "Greift die Dame h8 an?",
      "Kein Schach heißt kein Matt."
     ]
    }
   ],
   "S": [
    {
     "frage": "Die Dame gibt Schach. Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "7k/6Q1/8/4K3/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "g7. Die Dame ist nicht gedeckt, der König schlägt sie. Fehler 1: Die Dame neben dem König braucht Deckung.",
     "hilfe": [
      "Wer deckt die Dame g7?",
      "Darf der König schlagen?"
     ]
    },
    {
     "frage": "Fehler Patt: Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "7k/8/6K1/8/8/8/8/2Q5",
     "leer": true,
     "pruef": {
      "patt": "c1"
     },
     "targets": null,
     "antwort": "c4. Von dort deckt die Dame g8, der König g6 deckt g7 und h7. Kein Schach: Patt, nur remis.",
     "hilfe": [
      "Der König g6 deckt g7 und h7.",
      "Welcher Damenzug deckt g8, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "7k/8/6K1/8/8/8/8/2Q5",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "c8. Schach über die 8. Reihe, der König g6 deckt g7 und h7.",
     "hilfe": [
      "Die Dame muss Schach geben.",
      "Der König g6 hilft."
     ]
    },
    {
     "frage": "Ein Kind gibt mit der Dame dauernd Schach. Markiere alle Felder, auf die der schwarze König jetzt ziehen kann.",
     "fen": "8/8/8/3k4/8/8/3Q4/4K3",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "c6, c5, c4, e6, e5 und e4. Sechs Felder: Das Schach hilft nicht, der König ist frei. Besser im Springersprung einsperren.",
     "hilfe": [
      "Die Dame greift nur die d-Linie und die Diagonalen an.",
      "Zähle die freien Nachbarfelder."
     ]
    },
    {
     "frage": "Ein Kind sagt: „Das ist Patt.“ Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "1k6/1Q6/1K6/8/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins, aber der König steht im Schach: Matt, nicht Patt. Die Dame ist vom König b6 gedeckt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Patt gibt es nur ohne Schach."
     ]
    },
    {
     "frage": "Die Dame soll einsperren statt jagen. Klicke das Feld an, auf dem sie einen Springersprung vom König entfernt den kleinsten Kasten baut.",
     "fen": "8/8/5k2/8/8/8/2Q5/K7",
     "targets": [
      "e4"
     ],
     "antwort": "e4. Die Dame sperrt die e-Linie und die 4. Reihe, der König bleibt rechts oben eingesperrt.",
     "hilfe": [
      "Die Felder im Springersprung von f6: e4, g4, d5, h5, d7, h7, e8, g8.",
      "Welches davon erreicht die Dame von c2?"
     ]
    }
   ],
   "L": [
    {
     "frage": "Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König im Kasten ziehen kann.",
     "fen": "8/1k6/3Q4/8/8/8/8/K7",
     "zug": "b",
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "a8, c8 und a7. Die Dame sperrt die 6. Reihe, c7 und b8.",
     "hilfe": [
      "Prüfe alle Nachbarfelder von b7.",
      "Welche greift die Dame an?"
     ]
    },
    {
     "frage": "Klicke das Feld an, auf das die Dame im Springersprung zum König zieht, damit der Kasten am kleinsten wird.",
     "fen": "8/8/2k5/8/8/3Q4/8/6K1",
     "targets": [
      "d4"
     ],
     "antwort": "d4. Die Dame sperrt die d-Linie und die 4. Reihe, der König bleibt links oben eingesperrt.",
     "hilfe": [
      "Die Felder im Springersprung von c6: b4, d4, a5, e5, a7, e7, b8, d8.",
      "Welches erreicht die Dame, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.",
     "fen": "3k4/8/3K4/8/8/8/8/7Q",
     "leer": true,
     "pruef": {
      "patt": "h1"
     },
     "targets": null,
     "antwort": "c6. Die Dame deckt c8 und e8, der König d6 deckt c7, d7 und e7. Kein Schach: Patt.",
     "hilfe": [
      "Welcher Damenzug nimmt alle Felder, ohne Schach zu geben?",
      "Prüfe c8 und e8."
     ]
    },
    {
     "frage": "Gleiche Stellung: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "3k4/8/3K4/8/8/8/8/7Q",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8 und h8. Schach über die 8. Reihe, der König d6 deckt c7, d7 und e7.",
     "hilfe": [
      "Die Dame muss Schach geben.",
      "Welche Reihe ist offen?"
     ]
    },
    {
     "frage": "Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/1Q6/2K5/8/8/8/8/8",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Die Dame gibt Schach und ist vom König c6 gedeckt: Matt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Kann er die Dame schlagen?"
     ]
    },
    {
     "frage": "Schwarz ist am Zug. Klicke die Figur an, die dem König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "K7/8/8/8/8/8/5Q2/7k",
     "zug": "b",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Keine. Schwarz steht nicht im Schach und kann nicht ziehen: Patt, nur remis.",
     "hilfe": [
      "Greift die Dame h1 an?",
      "Hat der König ein freies Feld?"
     ]
    }
   ]
  }
 },
 "18": {
  "thema": "Weihnachtsturnier",
  "lernziel": "Ich kann ein Turnier fair zu Ende spielen.",
  "leitfrage": "Wie spiele ich mehrere Partien hintereinander ruhig, fair und bis zum Schluss?",
  "vorwissen": "Fairplay (Woche 9), Aufsteiger-Runde (Woche 10), Rochade, en passant, Patt und Damenmatt (Woche 14 bis 17).",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Turnierform Rutschsystem und Wertung ohne Rangliste aus dem Praxiswissen (Spielphasen organisieren), FIDE-Regeln in kindgerechter Form (berührt, geführt; Patt; Rochade; en passant). Brettaufgaben eigene Aufgaben, alle Lösungen mit chess.js nachgerechnet",
  "phasen": [
   {
    "name": "Einstieg",
    "titel": "Schnellrunde und persönliches Turnierziel",
    "ablauf": [
     "Stopp-Signal. Am Lehrbrett W1 bis W6 eine Schnellrunde zu Matt, Damenmatt, Schach abwehren, ungedeckten Figuren, Rochade und Patt. Die Kinder zeigen zuerst mit dem Finger am eigenen Brett.",
     "Jedes Kind wählt ein persönliches Ziel und schreibt es auf seine Turnierkarte, zum Beispiel „Ich prüfe vor jedem Zug, was mein Gegner droht“. Ziel nennen: „Heute spielt ihr ein Weihnachtsturnier. Gewonnen hat die ganze AG, wenn viele Partien fair zu Ende gespielt werden.“"
    ],
    "kinder": "Ich kenne mein persönliches Ziel für das Turnier.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Schnellrunde W1 bis W6",
      "set": "W"
     },
     {
      "art": "druck",
      "label": "Turnierkarten (vier pro Blatt)",
      "was": "turnierkarte"
     }
    ]
   },
   {
    "name": "Erarbeitung",
    "titel": "Turnierablauf und Turnierregeln",
    "ablauf": [
     "Plakat „Sternenbaum“ aufhängen. Rutschsystem mit zwei Paaren vormachen: Bretter nummerieren, Brett 1 ist oben. Wer gewinnt, rückt ein Brett nach oben, wer verliert, eins nach unten. Remis oder nicht beendet: Weiß rückt nach oben, Schwarz nach unten. Jede Runde dauert 8 Minuten.",
     "Am Lehrbrett E1 bis E6 die Turnierregeln: berührt, geführt; König nie neben König; Patt ist remis; im Schach erst das Schach abwehren; vor einem Remisangebot selbst nach Matt suchen; bei Rundenende zählt nur, was auf dem Brett steht.",
     "Merksatz: „Hand geben, leise spielen, berührt, geführt, Ergebnis melden, Figuren aufbauen.“ Frage: „Warum rückt bei Remis Weiß nach oben?“ (Damit alle wissen, wohin, ohne Streit.)"
    ],
    "kinder": "Ich erkläre den Turnierablauf und die wichtigsten Turnierregeln.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Sternenbaum und Turnierregeln",
      "was": "sternbaum"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Turnierregeln E1 bis E6",
      "set": "E"
     }
    ]
   },
   {
    "name": "Übung",
    "titel": "Turnierrunden 1 und 2",
    "ablauf": [
     "Runde 1 und Runde 2 im Rutschsystem, je 8 Minuten. Vor jeder Partie Hand geben, danach Ergebnis auf der Turnierkarte eintragen. In der zweiten Runde wechseln die Farben. Danach wechseln die Rollen auch beim Melden: Wer in Runde 1 das Ergebnis gemeldet hat, baut in Runde 2 die Figuren auf.",
     "Jede regelgerecht beendete Partie bringt einen Stern am Sternenbaum. Wer früh fertig ist, löst die Weihnachtsrätsel A1 bis A6."
    ],
    "kinder": "Ich spiele meine Partien fair zu Ende und trage das Ergebnis ein.",
    "links": [
     {
      "art": "druck",
      "label": "Arbeitsblatt: Weihnachtsrätsel",
      "was": "feld:A"
     },
     {
      "art": "feld",
      "label": "Lehrbrett: Weihnachtsrätsel A1 bis A6",
      "set": "A"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Halbzeit-Stopp: Streitfälle klären",
    "ablauf": [
     "Stopp-Signal. Frage an alle: „Was droht dein Gegner gerade?“ Dann am Lehrbrett S1 bis S6 typische Streitfälle aus Turnieren: Ist das wirklich Matt? Patt ist kein Sieg. Rochade im Schach. En passant nur sofort. Das übersehene Schach.",
     "Bei jedem Fall nachfragen: „Woran erkennst du, wer recht hat?“ Regel: Bei Streit Hand heben, die Lehrkraft entscheidet, die Stellung bleibt stehen."
    ],
    "kinder": "Ich kläre einen Streitfall mit der passenden Regel.",
    "links": [
     {
      "art": "feld",
      "label": "Lehrbrett: Streitfälle S1 bis S6",
      "set": "S"
     }
    ]
   },
   {
    "name": "Lerncheck",
    "titel": "Runde 3 und Schiedsrichter-Zettel",
    "ablauf": [
     "Runde 3 im Rutschsystem, 8 Minuten. Du beobachtest mit der Turnierkarte im Kopf: Hand geben, berührt, geführt, Partie zu Ende spielen, Ergebnis melden.",
     "Wer fertig ist, löst den Schiedsrichter-Zettel L1 bis L6 allein. Danach Lösungen am Lehrbrett."
    ],
    "kinder": "Ich entscheide sechs Turnierfälle ohne Hilfe richtig.",
    "links": [
     {
      "art": "druck",
      "label": "Lerncheck-Zettel: Schiedsrichter",
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
    "titel": "Sterne zählen, Weihnachts-Simultan, Aufräumen",
    "ablauf": [
     "Sterne am Sternenbaum zählen: Wie viele Partien hat die AG heute fair beendet? Jedes Kind nennt einen guten Zug seines Gegners (Zug des Tages). Keine Rangliste vorlesen.",
     "Minispiel Weihnachts-Simultan, 5 Minuten: Die Lehrkraft spielt an drei Brettern gegen Teams, die Kinder beraten sich leise. Weitere Spielidee der Schulschachstiftung: Schach Bingo (Video, vorher selbst ansehen). Aufräum-Ritual. Ausblick: Nach den Ferien lernt ihr, Züge aufzuschreiben."
    ],
    "kinder": "Ich nenne einen guten Zug meines Gegners.",
    "links": [
     {
      "art": "druck",
      "label": "Plakat: Sternenbaum und Turnierregeln",
      "was": "sternbaum"
     },
     {
      "art": "video",
      "label": "Spielidee „Schach Bingo“ der Schulschachstiftung (Video)",
      "url": "https://www.youtube.com/watch?v=CDEEqAtAKdU"
     }
    ]
   }
  ],
  "hinweise": {
   "hilfe": "Unsichere Kinder spielen Runde 1 am untersten Brett neben dir. Die Turnierkarte mit den Regeln liegt neben dem Brett.",
   "zusatz": "Wer zwei Partien gewonnen hat, spielt in Runde 3 mit Vorgabe: ohne Dame oder nur mit halber Zeit. Oder: Die eigene Partie aufschreiben, so gut es geht.",
   "kuerzen": "Nur zwei Turnierrunden spielen und die Erarbeitung auf E1, E3 und E4 kürzen. Lerncheck, Sterne zählen und Aufräumen bleiben, das Simultan entfällt."
  },
  "nachher": "Wer hat sich an „berührt, geführt“ gehalten, wer nicht? Welche Streitfälle gab es? Wer hat seine Partie vor Rundenende aufgegeben oder abgebrochen? Das greifst du in Woche 19 bei der Notation und in Woche 20 bei den Turnierregeln mit Schachuhr wieder auf.",
  "feld": {
   "W": [
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.",
     "fen": "6k1/5ppp/8/8/8/8/5PPP/R5K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a8. Grundreihenmatt: Die eigenen Bauern sperren den schwarzen König ein.",
     "hilfe": [
      "Die eigenen Bauern sperren den König ein.",
      "Der Turm muss auf die 8. Reihe."
     ]
    },
    {
     "frage": "Damenmatt: Klicke alle Felder an, auf denen die Dame mattsetzt.",
     "fen": "7k/8/6K1/8/8/8/8/4Q3",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "e8. Die Dame gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.",
     "hilfe": [
      "Der König g6 deckt g7 und h7.",
      "Die Dame muss Schach geben."
     ]
    },
    {
     "frage": "Weiß steht im Schach. Klicke alle weißen Figuren an, mit denen Weiß das Schach abwehren kann.",
     "fen": "4r1k1/8/8/8/8/2N5/8/4KB2",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König e1 (wegziehen), der Springer c3 (Se2 oder Se4 dazwischen) und der Läufer f1 (Le2 dazwischen).",
     "hilfe": [
      "Wegziehen, dazwischenstellen oder schlagen.",
      "Wer kann auf e2, e3 oder e4?"
     ]
    },
    {
     "frage": "Klicke alle schwarzen Figuren an, die angegriffen und nicht gedeckt sind.",
     "fen": "r5k1/pp3ppp/n7/1B2b3/8/5N2/PP3PPP/4K2R",
     "pruef": {
      "haengt": "b"
     },
     "targets": null,
     "antwort": "Der Läufer e5. Der Springer f3 greift ihn an, und keine schwarze Figur deckt ihn. Den Springer a6 deckt der Bauer b7.",
     "hilfe": [
      "Welche weißen Figuren greifen an?",
      "Wer deckt die angegriffene Figur?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.",
     "fen": "r3k2r/8/8/8/2b5/8/8/R3K2R",
     "rechte": "KQkq",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Nur c1. Kurz geht nicht, weil der Läufer c4 das Feld f1 angreift. Über ein angegriffenes Feld darf der König nicht ziehen.",
     "hilfe": [
      "Über welche Felder zieht der König?",
      "Wen greift der Läufer c4 an?"
     ]
    },
    {
     "frage": "Achtung Patt: Klicke alle Felder an, auf die die Dame nicht ziehen darf.",
     "fen": "7k/8/6K1/8/8/8/8/1Q6",
     "leer": true,
     "pruef": {
      "patt": "b1"
     },
     "targets": null,
     "antwort": "a2 und b3. Von dort deckt die Dame g8, der König g6 deckt g7 und h7. Kein Schach und kein Zug: Patt.",
     "hilfe": [
      "Welcher Damenzug nimmt dem König das letzte Feld, ohne Schach zu geben?",
      "Der König g6 deckt g7 und h7."
     ]
    }
   ],
   "E": [
    {
     "frage": "Berührt, geführt: Du hast den Springer b1 berührt. Markiere alle Felder, auf die er jetzt ziehen muss.",
     "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
     "leer": true,
     "pruef": {
      "legal": "b1"
     },
     "targets": null,
     "antwort": "a3 und c3. Berührt, geführt: Wer eine eigene Figur berührt, muss mit ihr ziehen, wenn sie einen erlaubten Zug hat.",
     "hilfe": [
      "Wer eine eigene Figur berührt, muss sie ziehen, wenn es geht.",
      "Springer: zwei geradeaus, eins zur Seite."
     ]
    },
    {
     "frage": "Ein Kind will mit dem König nach vorn. Markiere alle Felder, auf die der weiße König ziehen darf.",
     "fen": "8/8/4k3/8/4K3/8/8/8",
     "leer": true,
     "pruef": {
      "legal": "e4"
     },
     "targets": null,
     "antwort": "d4, d3, e3, f3 und f4. Die Felder d5, e5 und f5 greift der schwarze König an. Ein König darf nie neben den anderen König.",
     "hilfe": [
      "Ein König darf nie neben den anderen König.",
      "Welche Felder greift der König e6 an?"
     ]
    },
    {
     "frage": "Weiß ist am Zug. Klicke die Figur an, die dem weißen König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "8/8/8/8/8/5k2/5p2/5K2",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Keine. Weiß steht nicht im Schach und kann nicht ziehen: Patt. Die Partie ist remis, beide bekommen einen halben Punkt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Hat Weiß noch einen erlaubten Zug?"
     ]
    },
    {
     "frage": "Erst das Schach abwehren: Markiere alle Felder, auf die der weiße König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "k7/8/8/8/1b6/8/5PPP/4K3",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "d1, e2 und f1. Das Feld d2 greift der Läufer an. Keine andere weiße Figur kann dazwischen, also muss der König ziehen.",
     "hilfe": [
      "Woher kommt das Schach?",
      "Kann eine andere Figur dazwischen?"
     ]
    },
    {
     "frage": "Dein Gegner bietet Remis an. Prüfe zuerst: Klicke alle Felder an, auf denen Weiß in einem Zug mattsetzt. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "6k1/r4ppp/8/8/8/8/1Q3PPP/6K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "b8. Die Dame gibt Schach über die 8. Reihe, der Turm a7 kann nicht dazwischen. Vor einem Remis immer zuerst nach Matt suchen.",
     "hilfe": [
      "Suche Schachgebote.",
      "Kann der König fliehen?"
     ]
    },
    {
     "frage": "Rundenende! Es zählt, was auf dem Brett steht. Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.",
     "fen": "r3k3/pp3ppp/2n5/3q4/3N4/2N5/PP3PPP/4K2R",
     "pruef": {
      "gewinn": "w"
     },
     "targets": null,
     "antwort": "Die Dame d5. Der Springer c3 schlägt sie, und keine schwarze Figur deckt d5. Bei Rundenende zählt nur, was auf dem Brett steht.",
     "hilfe": [
      "Welche schwarzen Figuren stehen auf einem Feld, das Weiß angreift?",
      "Wer kann zurückschlagen?"
     ]
    }
   ],
   "A": [
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.",
     "fen": "7k/4P3/6K1/8/8/8/8/8",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "e8. Der Bauer wandelt um, Dame oder Turm geben Schach über die 8. Reihe. Der König g6 deckt g7 und h7.",
     "hilfe": [
      "Der Bauer wird umgewandelt.",
      "Der König g6 deckt g7 und h7."
     ]
    },
    {
     "frage": "Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.",
     "fen": "2r3k1/5ppp/p7/1n6/8/2B5/1Q3PPP/6K1",
     "pruef": {
      "gewinn": "w"
     },
     "targets": null,
     "antwort": "Der Bauer g7. Der Läufer c3 schlägt ihn, und der König darf nicht zurückschlagen, weil die Dame b2 dahinter g7 angreift. Den Springer b5 deckt der Bauer a6.",
     "hilfe": [
      "Welche Figuren stehen ungedeckt?",
      "Zähle die Figurenwerte."
     ]
    },
    {
     "frage": "Klicke alle weißen Figuren an, die angegriffen und nicht gedeckt sind.",
     "fen": "r1b1k3/ppp2ppp/8/4q3/8/2N2B2/P1P3PP/R5K1",
     "pruef": {
      "haengt": "w"
     },
     "targets": null,
     "antwort": "Der Springer c3. Die Dame e5 greift ihn an, und keine weiße Figur deckt ihn, seit der Bauer b2 fehlt.",
     "hilfe": [
      "Was greift die Dame e5 an?",
      "Wer deckt die weißen Figuren?"
     ]
    },
    {
     "frage": "Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "k7/8/1K6/8/8/8/8/3Q4",
     "leer": true,
     "pruef": {
      "patt": "d1"
     },
     "targets": null,
     "antwort": "d6. Von dort deckt die Dame b8, der König b6 deckt a7 und b7. Kein Schach und kein Zug: Patt.",
     "hilfe": [
      "Der König b6 deckt a7 und b7.",
      "Welcher Damenzug deckt b8, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen. Wenn keiner, drücke „Prüfen“ ohne Markierung.",
     "fen": "rnbqkbnr/1pp1pppp/8/p2pP3/2P5/8/PP1P1PPP/RNBQKBNR",
     "ep": "d6",
     "zuege": "e4 a6 e5 a5 c4 d5",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "Nur e5. Der Bauer d7 hat gerade einen Doppelschritt nach d5 gemacht, e5 steht direkt daneben. Der Bauer c4 steht auf der 4. Reihe und darf nicht en passant schlagen.",
     "hilfe": [
      "Welcher schwarze Bauer hat gerade einen Doppelschritt gemacht?",
      "Wer steht direkt daneben?"
     ]
    },
    {
     "frage": "Matt in einem Zug mit der Dame: Klicke das Feld an, auf das die Dame zieht.",
     "fen": "5rk1/5p1p/5PpQ/8/8/8/8/6K1",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "g7. Die Dame gibt Schach und ist vom Bauern f6 gedeckt. Der König hat kein Feld.",
     "hilfe": [
      "Die Dame steht schon nah am König.",
      "Wer deckt die Dame?"
     ]
    }
   ],
   "S": [
    {
     "frage": "Was droht dein Gegner? Schwarz ist am Zug. Klicke alle Felder an, auf denen Schwarz in einem Zug mattsetzt.",
     "fen": "r5k1/5ppp/8/8/8/8/5PPP/6K1",
     "zug": "b",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "a1. Der schwarze Turm gibt Schach über die 1. Reihe, die eigenen Bauern sperren den weißen König ein. Diese Drohung muss Weiß jetzt verhindern.",
     "hilfe": [
      "Die weißen Bauern sperren den König ein.",
      "Die 1. Reihe ist offen."
     ]
    },
    {
     "frage": "Ein Kind ruft „Matt!“. Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "4R1k1/5pp1/7p/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "h7. Der Bauer h6 hat dieses Feld frei gemacht. Also kein Matt, die Partie geht weiter.",
     "hilfe": [
      "Prüfe alle Nachbarfelder von g8.",
      "Der Bauer h6 hat ein Feld frei gemacht."
     ]
    },
    {
     "frage": "Ein Kind sagt: „Gewonnen!“ Schwarz ist am Zug. Klicke die Figur an, die dem schwarzen König Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.",
     "fen": "7k/5K2/6Q1/8/8/8/8/8",
     "zug": "b",
     "pruef": {
      "schachgeber": true
     },
     "targets": null,
     "antwort": "Keine. Schwarz steht nicht im Schach und kann nicht ziehen: Patt. Das ist kein Sieg, sondern remis.",
     "hilfe": [
      "Steht der König im Schach?",
      "Kann Schwarz ziehen?"
     ]
    },
    {
     "frage": "Darf Weiß jetzt rochieren? Markiere alle Felder, auf die der König mit einer Rochade ziehen darf. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "4r1k1/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "schach": true,
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "Keins. Der König steht im Schach. Im Schach ist keine Rochade erlaubt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Rochade ist kein Mittel gegen Schach."
     ]
    },
    {
     "frage": "Streitfall en passant: Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen. Wenn keiner, drücke „Prüfen“ ohne Markierung.",
     "fen": "rnbqkbnr/1pp1p1pp/p7/3pPp2/8/7P/PPPP1PP1/RNBQKBNR",
     "zuege": "e4 d5 e5 f5 h3 a6",
     "pruef": {
      "epschlaeger": true
     },
     "targets": null,
     "antwort": "Keiner. Schwarz hat f7–f5 gespielt, danach kamen h3 und a6. En passant geht nur im direkt folgenden Zug.",
     "hilfe": [
      "Wann hat Schwarz den Doppelschritt gemacht?",
      "En passant geht nur im direkt folgenden Zug."
     ]
    },
    {
     "frage": "Das übersehene Schach: Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "6k1/8/8/8/1b6/8/5PPP/1N2K2R",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der König e1 (wegziehen) und der Springer b1 (Sc3 oder Sd2 dazwischen). Wer das Schach übersieht und anders zieht, macht einen illegalen Zug, er wird zurückgenommen.",
     "hilfe": [
      "Woher kommt das Schach?",
      "Wegziehen, dazwischenstellen oder schlagen."
     ]
    }
   ],
   "L": [
    {
     "frage": "Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die die Dame dafür ziehen kann.",
     "fen": "2k5/8/2K5/8/8/8/8/5Q2",
     "leer": true,
     "pruef": {
      "matt": true
     },
     "targets": null,
     "antwort": "f8. Die Dame gibt Schach über die 8. Reihe, der König c6 deckt b7, c7 und d7.",
     "hilfe": [
      "Die Dame muss Schach geben.",
      "Der König c6 deckt b7, c7 und d7."
     ]
    },
    {
     "frage": "Klicke alle Felder an, auf denen die Dame pattsetzen würde.",
     "fen": "7k/5K2/8/8/8/8/8/4Q3",
     "leer": true,
     "pruef": {
      "patt": "e1"
     },
     "targets": null,
     "antwort": "e4 und b1. Von dort deckt die Dame h7, der König f7 deckt g7 und g8. Kein Schach: Patt.",
     "hilfe": [
      "Der König f7 deckt g7 und g8.",
      "Welcher Damenzug nimmt h7, ohne Schach zu geben?"
     ]
    },
    {
     "frage": "Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.",
     "fen": "3qk3/8/8/8/8/4B3/2P2PPP/3K1N2",
     "schach": true,
     "pruef": {
      "abwehr": true
     },
     "targets": null,
     "antwort": "Der Läufer e3 (Ld2 oder Ld4 dazwischen), der König d1 (wegziehen) und der Springer f1 (Sd2 dazwischen).",
     "hilfe": [
      "Woher kommt das Schach?",
      "Wer kann dazwischen oder schlagen?"
     ]
    },
    {
     "frage": "Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.",
     "fen": "4k3/1p3ppp/8/3n4/8/2BR4/5PPP/6K1",
     "pruef": {
      "gewinn": "w"
     },
     "targets": null,
     "antwort": "Der Springer d5 und der Bauer g7. Beide sind angegriffen und nicht gedeckt.",
     "hilfe": [
      "Welche Figuren greift Weiß an?",
      "Wer ist gedeckt?"
     ]
    },
    {
     "frage": "Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "1r2k3/8/8/8/8/8/8/R3K2R",
     "rechte": "KQ",
     "leer": true,
     "pruef": {
      "rochade": true
     },
     "targets": null,
     "antwort": "g1 und c1. Der Turm b8 greift nur b1 an. Über b1 zieht bei der langen Rochade nur der Turm, nicht der König. Das ist erlaubt.",
     "hilfe": [
      "Über welche Felder zieht der König?",
      "Wen greift der Turm b8 an?"
     ]
    },
    {
     "frage": "Ist das Matt? Markiere alle Felder, auf die der schwarze König ziehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.",
     "fen": "1R4k1/5ppp/8/8/8/8/8/6K1",
     "zug": "b",
     "schach": true,
     "leer": true,
     "pruef": {
      "flucht": true
     },
     "targets": null,
     "antwort": "Keins. Der Turm gibt Schach, die eigenen Bauern sperren den König ein: Matt.",
     "hilfe": [
      "Steht der König im Schach?",
      "Kann ein Bauer vorher ein Feld frei machen?"
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
