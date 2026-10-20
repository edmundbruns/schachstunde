// Praxiswissen › Jahresplan: feste Stunden, so wie erfahrene Kolleginnen und Kollegen sie halten. Inhalt für ca. 45 Minuten, keine Zeitphasen.
// Erzeugt aus der überarbeiteten Fassung (Vergleich mit ChatGPT, Gemini und veröffentlichten Stundenplänen). Felder siehe build-jahresplan.mjs.
// © Dr. Edmund Bruns
export const URLS={
 "brettvideo": "https://www.youtube.com/watch?v=vKapJK-OoNc",
 "agkonzept": "https://www.edmundbruns.com/schach/schachlehrende/ag-konzept/",
 "entwuerfe": "https://www.edmundbruns.com/schach/schachlehrende/stundenentwuerfe/",
 "online": "https://edmundbruns.github.io/Schach-grundregeln/",
 "schiffe": "https://schachkicker.de/wp-content/uploads/2025/10/Schiffe-versenken-mit-Schachfiguren.pdf",
 "feldraten": "https://edmundbruns.github.io/feldraten/"
};
export const FIXED={
 "1": {
  "thema": "Ankommen und kennenlernen: Kennenlernspiel, unsere AG-Regeln, Brett und Grundstellung",
  "lernziel": "Ich kenne die Regeln der AG, kann das Schachbrett richtig ausrichten und alle Figuren korrekt aufstellen.",
  "leitfrage": "Wie machen wir unser Schachbrett startklar?",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "AG-Konzept (Regeln und Rituale), Stundenentwürfe 1 und 8, Geschichte „Die Schachburg“, Ludgerus-Schachdiplom Bronze 1",
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
     "Figuren abräumen. Kind A baut auf, Kind B prüft mit der Aufbaukarte. Dann tauschen. Erfahrene Kinder bauen ohne Karte.",
     "Wer fertig ist, baut zwei Fehler ein, die der Partner findet und begründet.",
     "Zum Abschluss der Übung gemeinsam am Lehrbrett: Fehlersuche G1 bis G6."
    ],
    "kinder": "Jedes Kind hat einmal selbst aufgebaut und einmal geprüft.",
    "links": [
     {
      "art": "druck",
      "label": "Aufbaukarte (Hilfe)",
      "was": "aufbaukarte"
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
     "Zwei oder drei Fragen zur Schachburg (S1 bis S6) mündlich stellen. Alle sprechen den Merksatz."
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
     "Aufbaukarten umdrehen. Kind A baut die Grundstellung ohne Vorlage auf, Kind B schaut nur zu. Dann tauschen.",
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
      "art": "info",
      "label": "Stundenentwürfe",
      "url": "https://www.edmundbruns.com/schach/schachlehrende/stundenentwuerfe/"
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
   "zusatz": "Zwei Fehler einbauen, die der Partner findet und begründet."
  },
  "regelnSpaeter": "Sobald wir Partien spielen, kommt dazu: Berührt, geführt. Losgelassen ist gezogen. Vor und nach jeder Partie geben wir uns die Hand."
 },
 "2": {
  "thema": "Felder haben Namen: Linien, Reihen und Diagonalen, Schiffe versenken",
  "lernziel": "Ich kann jedes Feld auf dem Schachbrett schnell finden und richtig benennen.",
  "leitfrage": "Wie finde ich jedes Feld schnell, und wie sage ich anderen genau, welches Feld ich meine?",
  "umfang": "Der Inhalt ist für ca. 45 Minuten ausgelegt.",
  "quelle": "Erklärvideo „Schach erklärt: Das Schachbrett“ (Deutsche Schulschachstiftung), Arbeitsheft Schachbrett, Stundenentwurf 1, Schiffe versenken mit Schachfiguren und „Königliche Rettung“ (nach einer Idee von Walter Rädler), Training Feldraten",
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
     "Wer schnell fertig ist, spielt mit dir die Variante „Königliche Rettung“."
    ],
    "kinder": "Ich sage jedes Feld richtig an.",
    "links": [
     {
      "art": "blatt",
      "label": "Arbeitsblatt Schiffe versenken (PDF)",
      "url": "https://schachkicker.de/wp-content/uploads/2025/10/Schiffe-versenken-mit-Schachfiguren.pdf"
     }
    ]
   },
   {
    "name": "Sicherung",
    "titel": "Arbeitsheft Schachbrett",
    "ablauf": [
     "Die Kinder lösen das Arbeitsheft Schachbrett, allein oder zu zweit.",
     "Vergleich am Lehrbrett mit A7 bis A12."
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
   "zusatz": "Variante „Königliche Rettung“ oder Aufgabe 1 im Arbeitsheft mit eigenen Diagonalen."
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
  ]
 }
};
export const YEAR=[["Brett, Figuren, Schach und Matt",[1,11]],["Sonderregeln, Notation und erste Taktik",[12,26]],["Mattführung, Eröffnung und Endspiel",[27,36]]];
// Reihenfolge nach Abgleich mit Stappenmethode, Chess Tigers, St. Louis, Square One und Shropshire (20.10.2026):
// Angreifen und decken vor dem Tauschen, Schach und Matt in einer Woche, Patt und Remis, Matt mit Dame und König vorgezogen.
export const PLAN=[[1, "Ankommen und kennenlernen: Kennenlernspiel, unsere AG-Regeln, Brett und Grundstellung", ""], [2, "Felder haben Namen: Linien, Reihen und Diagonalen, Schiffe versenken", ""], [3, "Turm und Läufer", "Ich kann Turm und Läufer regelgerecht ziehen und schlagen."], [4, "Dame, König, Springer", "Ich kann Dame, König und Springer regelgerecht ziehen und schlagen."], [5, "Der Bauer (mit einem ersten Blick auf die Umwandlung)", "Ich kann Bauernzug, Doppelschritt und Schlagen unterscheiden und weiß, was auf der letzten Reihe passiert."], [6, "Angreifen und decken", "Ich kann angegriffene Figuren erkennen und schützen."], [7, "Figurenwerte und Tauschen", "Ich kann mit Figurenwerten prüfen, ob sich ein Schlagzug lohnt."], [8, "Schach und Matt", "Ich kann ein Schach auf drei Arten abwehren und ein Matt in einem Zug finden."], [9, "Die erste ganze Partie und Fairplay", "Ich kann eine Partie nach den Regeln und fair spielen."], [10, "Spielstunde und Wiederholung", "Ich kann meine Partie ohne Hilfe zu Ende spielen."], [11, "Bronze-Diplom", "Ich kann die Bronze-Missionen allein lösen."], [12, "Legal oder illegal? Starke und schwache Figuren", "Ich kann erkennen, ob eine Stellung erlaubt ist, und begründen, warum eine Figur stark ist."], [13, "Bauernumwandlung und starke Bauern", "Ich kann einen Bauern umwandeln und die passende Figur wählen."], [14, "Die Rochade", "Ich kann prüfen, ob eine Rochade erlaubt ist, und sie ausführen."], [15, "En passant", "Ich kann en passant erkennen und richtig ausführen."], [16, "Patt und Remis", "Ich kann Patt, Remis und Matt unterscheiden."], [17, "Matt mit Dame und König", "Ich kann mit Dame und König mattsetzen, ohne Patt."], [18, "Weihnachtsturnier", "Ich kann ein Turnier fair zu Ende spielen."], [19, "Notation: Züge lesen und schreiben", "Ich kann Züge in Notation lesen und aufschreiben."], [20, "Turnierregeln, Schachuhr, Partie mitschreiben", "Ich kann mit Uhr spielen und meine Partie mitschreiben."], [21, "Schulmeisterschaft", "Ich kann ein Turnier mit Uhr und Notation spielen."], [22, "Die Fesselung", "Ich kann eine Fesselung erkennen und herstellen."], [23, "Gabel und Doppelangriff", "Ich kann eine Gabel finden und ausführen."], [24, "Der Spieß", "Ich kann einen Spieß finden."], [25, "Abzug und Abzugsschach", "Ich kann ein Abzugsschach finden."], [26, "Wiederholung und Silber-Diplom", "Ich kann die Silber-Missionen allein lösen."], [27, "Gegenangriff statt Flucht", "Ich kann eine bedrohte Figur mit einem Gegenangriff retten."], [28, "Matt mit zwei Türmen", "Ich kann mit zwei Türmen nach dem Treppenprinzip mattsetzen."], [29, "Verteidigen: fünf Möglichkeiten, ein Matt abwehren", "Ich kann eine Drohung erkennen und die passende Verteidigung wählen."], [30, "Die Eröffnungsregeln", "Ich kann die Eröffnungsregeln anwenden und das Schäfermatt abwehren."], [31, "Opfer und Damiano-Matt", "Ich kann ein Opfer finden, das zum Matt führt."], [32, "Das Grundreihenmatt", "Ich kann ein Grundreihenmatt finden und abwehren."], [33, "Matt mit einem Turm", "Ich kann mit König und Turm mattsetzen."], [34, "Einfache Bauernendspiele", "Ich kann mit der Opposition einen Bauern zur Umwandlung führen."], [35, "Gold-Diplom und Abschlusstest", "Ich kann die Gold-Missionen allein lösen."], [36, "Abschlussturnier und Urkunden", "Ich kann ein Turnier fair spielen und meine Fortschritte zeigen."]];
export const LATER=PLAN.slice(11);
