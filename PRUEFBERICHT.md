# Prüfbericht · vereinfachter Stundenplaner
Stand: 16. Oktober 2026

Automatisiert geprüft mit Node und einer DOM-Testumgebung:
- Erzeugung einer Reihe mit vier unterschiedlichen Termindauern.
- Phasen verschieben, kopieren, löschen, Änderungen rückgängig machen, Plan duplizieren und automatisch speichern.
- Zeitverteilung für 226 Dauern von 15 bis 240 Minuten sowie Uhrzeiten über Mitternacht.
- Sicherungsstruktur prüfen und negative Phasendauer zurückweisen.
- Druckinhalte für Stundenplanung und zwei, vier oder sechs Aufgabendiagramme.
- Schülerblätter ohne Lösungstext; getrennte Lösungsblätter.
- Direkter Export einer echten DOCX-Datei und erfolgreiches Wiedereinlesen mit Mammoth.
- Syntax der JavaScript-Dateien und des Offline-Pakets.

Die 72 übernommenen Lichess-Datensätze wurden mit chess.js auf legale Zugfolgen geprüft. Das Datenbank-FEN liegt vor dem ersten Gegnerzug; dieser wird vor dem Diagramm ausgeführt.

Nicht geprüft: visuelle Darstellung in einem echten Browser, native Druckdialoge, physische Ausdrucke und echte Mobilgeräte. Die DOM-Prüfung ersetzt diese Kontrollen nicht. PDF-Ausgabe verwendet ausdrücklich den Browserdruck.

## Erweiterung: Themen und didaktischer Verlauf
- Alle 17 Themen erzeugen einen zeitlich passenden Ablauf mit themenbezogenen Arbeitsaufträgen.
- Themenfilter für die drei Niveaustufen und anklickbare Auswahl geprüft.
- Eigene Regelübungen enthalten keine ersatzweise zugeordneten Taktikaufgaben. Alle verwendeten FEN werden von chess.js gelesen. Das ist keine Enginebewertung der Übung.
- Materialauswahl aus einer Phase, vier eigene Diagramme ohne Lösungstext, Lehrbrett mit legalem Bauernzug und Rückkehr zum Verlauf geprüft.
- Methoden, Sozialform, Teilziel und Arbeitsauftrag bleiben getrennte editierbare Felder.
- 30 Methoden; automatische Auswahl nach Voraussetzungen, Schwerpunkt und Mindestzeit.

## Unterrichtseinheiten
20 Einträge (17 Einzelstunden, drei Reihen) programmatisch auf Terminzahlen, Zeitverteilung, Sicherungsvalidierung, Aufgabenreferenzen und getrennte Lernchecks geprüft. Explizit angegebene Lösungszüge der neuen Regelaufgaben wurden mit chess.js auf Legalität geprüft. Dies bestätigt die Zugregeln, keine Enginebewertung. Die visuellen Browser- und Druckprüfungen bleiben offen.

## Neue Themen und Einstiegsarten
24 Einheiten/Reihen werden erzeugt. Vier unterschiedliche Einstiege wurden auf getrennte Lehrerhandlungen, Lernaufträge, Ergebnisse und unveränderte Gesamtzeit geprüft. Neue Regelaufgaben: positive und negative Rochadeentscheidungen, alle vier Umwandlungen, Patt/Matt-Status und deutsche Zugnotation mit chess.js geprüft. Browserlayout und physischer Druck weiterhin nicht visuell geprüft.

## Qualitätsdurchsicht
En-passant-Verbote, Tauschfolgen und zwei Schachgeber pro Doppelschachstellung geprüft. Sicherungsphase und unveränderte Gesamtzeit in allen 27 Einheiten/Reihen geprüft. Nachbereitungsnotizen werden gespeichert, im Lehrkraftplan ausgegeben und aus Schülerblättern ausgeschlossen. Weitere Befunde und Grenzen: FACHLICHE-PRUEFUNG.md.

## Labyrinth-Erweiterung, 17. Oktober 2026
21 Labyrinthe auf Erreichbarkeit geprüft; Referenzfälle für kürzeste Wege, Sperrfelder, reine Landeverbote, Springersprünge sowie erlaubte, verbotene und erforderliche Schläge. Nach Schlägen wird der Zustand der entfernten Figuren mitberechnet. Separate Schüler- und Lösungsblätter werden im DOM geprüft. Visuelle Browserdarstellung, tatsächlicher Druck und PNG-Erzeugung im Browser für Word-Diagramme bleiben unbestätigt.


## Bedienung und Fachvergleich, 17.10.2026
Materialschaltflächen öffnen Arbeitsblätter als Standard. Leere Materialzuordnungen greifen auf vorhandene Terminaufgaben zurück; ohne Aufgaben erscheint eine Meldung statt einer sachfremden Grundstellung. Sichtbare Auswahl und legale Zielfelder im Lehrbrett. Gespielte und geladene Lösungszüge sind direkt anwählbar. Blockierte Figuren erhalten eine Erklärung. Drei didaktische Anpassungen sind auswählbar und rückgängig zu machen, siehe DIDAKTIK-RECHERCHE.md.

DOM-Funktionstests prüfen Materialöffnung, Zielmarkierung, tatsächlichen Figurenwechsel (FEN über chess.js), Sprung zur Startstellung und zurück, blockierten Bauern, Plananpassung und Undo. Die frühere Lehrbrettprüfung suchte nur nach einem FEN-Teilstring; das war zu ungenau und wurde ersetzt. DOCX erzeugt und wieder eingelesen, Druckinhalte und Schüler/Lösungstrennung geprüft. Visuelle Browserprüfung, tatsächlicher Druckdialog und Touchbedienung konnten in dieser Umgebung nicht geprüft werden. Der vom Nutzer hochgeladene Screenshot war unter dem angegebenen Pfad nicht vorhanden; ein möglicher browserspezifischer Klickfehler ist damit noch nicht abschließend ausgeschlossen.

## Methodenkatalog und Lösungspfeile
49 Methoden einzeln erreichbar; Suchfilter, Methodenübernahme in Formular sowie nummerierte Labyrinthpfeile und Schrittnavigation per DOM-Test geprüft. Lösungspfeile erscheinen erst nach bewusster Auswahl der Lösungsansicht. Am regulären Lehrbrett wird der jeweils nächste Zug der Lichess-Lösung angezeigt. Bestehende Pläne werden nicht automatisch überschrieben. Visuelle Browserprüfung weiterhin nicht verfügbar.

## Scan-Raster, 17.10.2026
Fünf Spalten, getrennte Kurzfassungen und vollständige Aufträge, Phasenfarben mit Textbezeichnungen, Kurs/Datum und Reservefelder. DOM-Tests prüfen Spaltenzahl, Speichern der Eckdaten, Kurzfassungen und Reserve im Export; bisherige Interaktionstests und DOCX-Rücklesen bestehen. Mobile Darstellung über beschriftete Phasenkarten. Visuelle Prüfung von Browserdarstellung, Drucklayout und mobilen Umbrüchen bleibt mangels Browserzugang offen. Automatische Kurzfassung verwendet den ersten Satz; Lehrkraft kann prägnante Stichpunkte selbst bearbeiten. Keine automatische fachliche Umformulierung oder AVIVA-Zertifizierung.

## Lernbegleitung, 17.10.2026
Alle 49 Methodendialoge enthalten konkrete Schritte und Diagramm. Regel-FEN und konkrete Springer-/Turmzüge sowie die verwendeten Lichess-Folgen geprüft. Kinderzielbearbeitung, Materialbegründungen, Begrenzung auf zwei Beobachtungen, Wiederholungsvorschlag und Ausschluss der Lehrkraftbeobachtungen von Schülerblättern per DOM-Test geprüft. Vollständiges Minispiel Turm-Zielreise mit Basis-/Aufbau-/Vertiefungsvariante beschrieben.
Materialpassung bleibt eine transparente regelbasierte Zuordnung. Individuell formulierte Ziele und abweichende Motive werden nicht als automatisch geprüft ausgegeben. Vorwissenscheck prüft grundlegende Feld-/Gangartvoraussetzungen, keine umfassende Eingangsdiagnostik. Diagramme und Hinweise sichtbar, aber keine visuelle Browser- oder Papierdruckprüfung in dieser Umgebung.

## Kompakte Lehrbrettansicht
Brettbreite an Fensterhöhe gekoppelt, Hauptnavigation als einzelne Zeile. Zugliste, FEN und Quellen aufklappbar in der Seitenspalte; Materialkontext neben dem Brett. Labyrinth ebenfalls zweispaltig mit kompakter Navigation. Unter 760 Pixel Fensterbreite bleibt eine lesbare einspaltige Darstellung mit vertikalem Scrollen erhalten. Keine Garantie für vollständige Scrollfreiheit bei vergrößerter Schrift oder geöffneten Zusatzfunktionen. Visuelle Browserprüfung weiterhin offen.

### Langsamere Zugfolge
Figurenbewegung: 1.100 ms. Automatische Gegenantwort: erst nach 2.800 ms. Die automatisierte Funktionsprüfung der Aufgabenfolge einschließlich Abschlussmeldung besteht. Die optische Animation wurde nicht in einem Browser geprüft.

### Korrektur der langsamen Zuganimation
Bewegte Figuren liegen nun in einer eigenen Ebene über sämtlichen Brettfeldern. Nach Ende oder Abbruch wird die Zielfigur wieder sichtbar; erneutes Rendern räumt laufende Animationen auf. Rückmeldungen erhalten konstante Höhen, offene Zusatzbereiche bleiben beim Ziehen geöffnet, und der Scrollbalken erhält einen stabilen Platz. Die langsame Bewegung (1.100 ms) und Antwortpause (2.800 ms) bleiben erhalten. Automatisiert geprüft: Animationsebene, Wiederherstellung und Abbruch beim Brettdrehen. Keine visuelle Browserprüfung verfügbar.

## Fachliche Überarbeitung, 18.10.2026
Korrigiert: Bauernendspiel (falsche Aussagen zu Zugrecht und Lerncheck; neue Stellungen mit Quadratregel), Turmendspiel (Grundstellung enthielt Txa8#; Lerncheck belohnte einen Verlustzug; neues Material „Erst Luft, dann Aktivität“), Planungsstellung (fehlender schwarzer Läufer ergänzt), Springersprung, Koordinaten-Lerncheck (fünf Felder, gedrehtes Brett), Schachabwehr (Schlagen und Springerschach ergänzt), Umwandlung (Schlagumwandlung, Blockade, schwarzer Bauer, Springer mit Schach, Patt durch Dame), Notation (Zugfolge lesen, Lerncheck mit drei Zügen), Doppelschach (Scheinabwehren, Entstehung durch Abzug), Labyrinth Grundlagen (sieben verschiedene Wege, kürzere Regeltexte).
Kandidatenrechnen nutzt eigene Taktikaufgaben statt der Matt-in-zwei-Aufgaben. Der Lerncheck stammt aus dem Schwierigkeitsband der Übungsaufgaben.
Planerzeugung: Methodenanleitungen im Stundenentwurf sind themenneutral; das themenbezogene Beispiel bleibt im Methodenkatalog. Die doppelte Leitfrage im Einstieg ist behoben. In Reihen beginnt jeder Folgetermin mit einem Rückblick auf die vorige Stunde.
Neue Prüfdatei test-fachlich.mjs: Zugfolgen und Ergebnisse der korrigierten Stellungen, Materialgleichheit, kein Grundreihenmatt, fremde Methodentexte, doppelte Sätze, Rückblick und Check-Schwierigkeit in allen Einheiten.
test-simple.mjs an die aktuelle Oberfläche angepasst (veraltete Erwartungen zu Lernauftrag, Lehrbrettkontext, Methodenzahl und Dialogtitel). Offen: Die Lehrbrett-Animationsprüfungen (Zugliste nach Zug, automatische Gegenantwort) schlagen in der DOM-Testumgebung fehl, wie schon vor dieser Überarbeitung. Das Lehrbrett wurde nicht verändert; eine Prüfung im echten Browser steht aus.

## Stundenmodell, 18.10.2026
Neues Zeitmodell für alle Themenstunden (45 Min.: Aufbau 5, Einstieg 5, Erarbeitung 6, Übung 11, Sicherung 4, Anwendung 7, Lerncheck 4, Aufräumen 3; angepasst für 30 und 60 Min.). Die Anwendung ist eine Spielphase mit einem Minispiel je Thema, geprüfter Startstellung und Beobachtungsauftrag; sie öffnet im Lehrbrett und erscheint als Spielblatt. Die Übung trennt Pflicht-, Weiter- und Expertenaufgabe. Jede Übungsaufgabe hat Hilfekarten in drei Stufen. Neu: Teilziel je Phase, Aufhänger im Einstieg, Fehler der Stunde in der Sicherung, Daumen-Selbsteinschätzung im Lerncheck, Wenn-dann-Hinweise und ein konkreter Ausblick. Gabel: eigene, geprüfte Stellungen von Einstieg bis Lerncheck; die Lichess-Aufgaben bleiben als Zusatzaufgaben aus echten Partien. In Reihen mit mehreren Gabelterminen nutzen die Folgetermine die Lichess-Aufgaben.
Geprüft in test-fachlich.mjs; DOM-Tests bis auf die bekannten Lehrbrett-Animationsprüfungen bestanden; Offline-Datei im Chromium geprüft.

## Kontrastpaare, 18.10.2026
15 Themen erhalten in der Erarbeitung ein Kontrastpaar: zwei Stellungen, die sich in genau einem Merkmal unterscheiden und deshalb unterschiedliche Antworten haben (Figurenwege, Bauern, Angreifen und Decken, Schach, Matt in 1, Ungedeckte Figuren, Fesselung, Rochade, Umwandlung, Patt und Matt, En passant, Doppelschach, Abtausch, Bauernendspiel, Turmendspiel). Die Gabel hat ihr Paar in den eigenen Aufgaben 1 und 2. Paare erscheinen im Lehrbrett der Erarbeitung und auf deren Arbeits- und Lösungsblatt. Alle Paare sind in test-fachlich.mjs mit chess.js geprüft.

## Kompakter Verlaufsplan, 18.10.2026
Nach Durchsicht eines ausgedruckten Verlaufsplans: Ankommen ist Teil des Einstiegs, Aufräumen Teil der Schlussphase „Ausblick & Aufräumen“. Labyrinth-Einheiten haben sechs Phasen (45 Min.: 7/5/15/5/8/5) mit Kernfrage, Regelklärung, Erprobung, Sicherung, Lerncheck und Abschluss. Material, Differenzierung und Prüfkriterien stehen nur noch in der Phase, zu der sie gehören; jede Phase hat eine eigene Kurzfassung für den kompakten Plan. Die Methode „Zum Schluss eine Aufgabe allein lösen“ erscheint nur noch im Lerncheck. Die Kurzfassung bricht nicht mehr nach einer Aufzählungsnummer ab.

## Sechs-Phasen-Modell und schlanker Kopf, 18.10.2026
Alle Stunden haben sechs Phasen: Einstieg (Problem) → Erarbeitung (Regel) → Übung (Anwendung, bei Schachthemen mit Spiel im zweiten Teil) → Sicherung (Merksatz) → Lerncheck → Ausblick & Aufräumen. 45 Min. Schach: 8/6/16/5/5/5; Labyrinth: 7/5/15/5/8/5. Der kompakte Verlaufsplan beantwortet je Phase nur: Was tut die Lehrkraft? Was tun die Lernenden? Sozialform und Medium. Thema, Lernziel, Material und Differenzierung stehen einmal im Kopf; Merksatz, Lerncheck-Kriterien, Puffer und Ausblick einmal am Ende. Der ausführliche Verlaufsplan bleibt unverändert verfügbar.

## Stunde als Paket drucken, 18.10.2026
„Stunde drucken / PDF“ und „Stunde als Word-Datei“ erzeugen jetzt ein Paket: Seite 1 ist der Verlaufsplan im Querformat nach dem Muster der Lehrkraft (Lernziel, Material, Differenzierung, Tabelle mit vier Spalten, Merksatz, Lerncheck, Puffer), ohne Ausblickzeile und ohne Lizenzfußzeile. Danach folgen im Hochformat Material 1 (Aufgaben 1 und 2, bei Bedarf Kontrastpaar), Material 2 (Arbeitsblatt Übung mit Spiel und Zusatzaufgaben), Material 3 (Lerncheck), Hilfekarten und Lösungen für die Lehrkraft. Aufgabennummern auf den Blättern stimmen mit dem Plan überein. Der Bildnachweis für die Figuren (CC BY-SA 3.0) steht einmal am Ende der Materialien. In Chromium und nach LibreOffice-Umwandlung geprüft: Verlaufsplan genau eine Seite.

## Arbeitsblatt-Layout und reine PDF-Ausgabe, 18.10.2026
Nach Vorlage der Lehrkraft: Kopf mit Name/Klasse/Datum, Regel- bzw. Denkweg-Leiste, Teil A–D mit je zwei Aufgabenkarten (Diagramm links, Antwortzeilen rechts, Start/Ziel bzw. Zugrecht als Etikett), Knobelaufgabe mit Tipp; Lerncheck zweimal A5 auf einer Seite mit Schnittlinie; Lehrkraft-Handreichung mit Lösungsübersicht (Labyrinth: Mindestzüge und didaktischer Kern, Schach: Hilfekarten), Kontrastpaar und Spielregeln. Seitenzahlen „Seite x von y“. Word-Export entfernt. Die Knobelaufgabe der Vorlage („Springer a1 nach a2 in genau 3 Zügen unmöglich“) ist fachlich falsch (a1–b3–c1–a2); verwendet wird die richtige Fassung mit 2 Zügen.
Automatische Seitenanpassung: Verlaufsplan und Arbeitsblatt werden beim Erzeugen so skaliert, dass sie die A4-Seite möglichst ausfüllen (größere Schrift, mehr Abstand, größere Diagramme); Diagramme auf dem Arbeitsblatt 42 mm (Labyrinth 46 mm) vor Skalierung.
