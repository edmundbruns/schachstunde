/* Stundenverläufe mit Material aus dem Ludgerus-Schachdiplom (ludgerus-schachdiplom.netlify.app). © Dr. Edmund Bruns
   Je Thema: Aufgaben (0–5 Arbeitsblatt, 6 Lerncheck, ab 7 Brettaufgaben), kurze Zeilentexte je Phase, mindestens 6 Brettaufgaben pro Zeile.
   {n} im Text wird durch die Aufgabennummer ersetzt (Aufgabe 1–6, Lerncheck, Brettaufgabe B1 …). Alle Stellungen mit chess.js geprüft. */
window.DiplomLessons=(()=>{
const C=window.PlannerCore,U=window.LessonUnits,P=window.Praxis,E=window.PlanningExtensions;
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
// Aufgabe: [fen, Auftrag, Lösung, {checks, forbidden, all:true = alle Lösungen zeigen lassen, src}]
const t=(fen,work,answer,o={})=>({fen,work,answer,checks:o.checks||[],forbidden:o.forbidden||[],strict:true,all:o.all||false,collect:o.collect,hints:o.hints,src:o.src||''});

const L={
// ───────── Bronze 1 ─────────
coordinates:{diplom:'Bronze 1',entry:'playful',why:'weil Feldnamen durch schnelles Zeigen sicher werden',
 leit:'Wie finde ich jedes Feld auf dem Brett?',merk:'Rechts unten ist hell. Ein Feld heißt erst Buchstabe (Linie), dann Zahl (Reihe).',
 tasks:[
 t(START,'Liegt das Brett richtig? Prüfe das Feld rechts unten.','Ja. h1 ist hell. Merksatz: Rechts unten ist hell.',{src:'Bronze 1, Aufgabe 2 und 3',hints:['Schau auf das Eckfeld rechts unten.','Ist es hell? Dann liegt das Brett richtig.']}),
 t('r3k2r/8/8/8/8/8/8/R3K2R w - - 0 1','Welche Figuren stehen in den vier Ecken? Nenne die vier Felder.','Türme: a1, h1, a8 und h8.',{src:'Bronze 1, Aufgabe 6',hints:['Schau nur auf die Ecken.','In jeder Ecke steht dieselbe Figur.']}),
 t('3qk3/8/8/8/8/8/8/3QK3 w - - 0 1','Zeige die weiße Dame. Wie heißt ihr Feld?','d1. Die Dame steht auf ihrer eigenen Farbe: weiße Dame auf hellem Feld.',{src:'Bronze 1, Aufgabe 9',hints:['Die Dame steht neben dem König.','Weiße Dame, helles Feld.']}),
 t('k7/8/8/8/8/8/8/7K w - - 0 1','Zeige die vier dunklen Felder in Reihe 1.','a1, c1, e1 und g1.',{src:'Bronze 1, Aufgabe 11',hints:['Reihe 1 ist ganz unten.','Fang links bei a1 an.']}),
 t('4k3/8/8/3pp3/3PP3/8/8/4K3 w - - 0 1','Auf welchen Feldern stehen die vier Bauern? Diese Felder heißen Zentrum.','d4, e4, d5 und e5.',{src:'Bronze 1, Aufgabe 13',hints:['Erst den Buchstaben, dann die Zahl.','Die Felder liegen genau in der Mitte.']}),
 t('7k/8/8/8/8/8/8/K7 w - - 0 1','Zeige nacheinander a2, b6, h3, g5, f8 und c4.','Erst die Linie suchen (Buchstabe), dann die Reihe (Zahl). Beispiel b6: Linie b, Reihe 6.',{src:'Bronze 1, Aufgabe 12',hints:['Finger auf den Buchstaben unten.','Dann nach oben bis zur Zahl.']}),
 t('k7/8/8/8/8/8/8/7K w - - 0 1','Lerncheck: Zeige b6, g2, c5 und h3. Welche zwei Felder sind hell?','g2 und h3 sind hell. b6 und c5 sind dunkel.',{src:'Bronze 1, Aufgabe 10 bis 12'}),
 t(START,'Wie viele Felder hat das Brett? Rechne: Reihen mal Linien.','64 Felder: 8 Reihen mal 8 Linien.',{src:'Bronze 1, Aufgabe 1'}),
 t(START,'Wo stehen die Bauern am Anfang?','Weiße Bauern auf Reihe 2, schwarze Bauern auf Reihe 7.',{src:'Bronze 1, Aufgabe 7'}),
 t(START,'Nenne die weiße Grundreihe von a1 bis h1.','Turm, Springer, Läufer, Dame, König, Läufer, Springer, Turm.',{src:'Bronze 1, Aufgabe 8'}),
 t('rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1','Zeige die beiden Grundreihen.','Reihe 1 für Weiß und Reihe 8 für Schwarz.',{src:'Bronze 1, Aufgabe 14'}),
 t('k7/8/8/8/8/8/8/B6K w - - 0 1','Ziehe den Läufer a1 bis ans Ende der langen Diagonale. Nenne die Felder.','a1, b2, c3, d4, e5, f6, g7, h8. Der Läufer zieht nach h8.',{checks:['a1h8'],src:'Bronze 1, Aufgabe 15'}),
 t('4k3/8/8/8/3R4/8/8/4K3 w - - 0 1','Der Turm steht auf d4. Welches Feld liegt direkt darüber, welches darunter?','d5 darüber, d3 darunter.',{checks:['d4d5','d4d3'],all:true,src:'Bronze 1, Feldnamen'}),
 t(START,'Welche Figur steht auf c1, welche auf g8?','c1: weißer Läufer. g8: schwarzer Springer.',{src:'Bronze 1, Aufgabe 16'})],
 rows:{
 E:{t:'Spiel „Feld-Rufen“: Feld nennen, Kinder zeigen. Dann {0}: Liegt das Brett richtig?',l:'Feld zeigen. Brett drehen, bis rechts unten hell ist.',ids:[0,7,1,8,9,13]},
 A:{t:'{1} bis {3} am Lehrbrett. Tafel: erst Buchstabe, dann Zahl.',l:'Felder zeigen und laut benennen.',ids:[1,2,3,10,11,12]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Welche Linie? Welche Reihe?“',l:'Zu zweit: A nennt ein Feld, B zeigt es. Dann Aufgaben lösen.',ids:[2,3,4,5,11,12]},
 U2:{t:'Partnerwechsel: Feld-Diktat mit {5}. Danach Grundstellung um die Wette.',l:'Felder diktieren, Partner prüft.',ids:[5,13,9,10,11,12]},
 S:{t:'Merksatz an die Tafel. {5} als Beispiel.',l:'Merksatz abschreiben. Ein Feld als Beispiel nennen.',ids:[0,5,4,10,11,7]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,5,3,4,12,2]},
 O:{t:'Leitfrage beantworten. Ausblick: Figurenwege. Aufräumen.',l:'Antwort in einem Satz. Figuren einräumen.'}}},

// ───────── Bronze 2 ─────────
moves:{diplom:'Bronze 2',entry:'problem',why:'weil eine knifflige Stellung die Frage nach den Gangarten aufwirft',
 leit:'Wie zieht jede Figur, und was ändert ein Hindernis?',merk:'Turm gerade, Läufer schräg, Dame beides, König ein Feld, Springer im L-Sprung. Nur der Springer springt über andere Figuren.',
 tasks:[
 t('4k3/8/8/8/3R4/8/8/4K3 w - - 0 1','Der Turm steht auf d4. Zeige alle Felder, auf die er ziehen darf.','14 Felder: die ganze d-Linie und die ganze 4. Reihe.',{checks:['d4d1','d4d2','d4d3','d4d5','d4d6','d4d7','d4d8','d4a4','d4b4','d4c4','d4e4','d4f4','d4g4','d4h4'],all:true,src:'Bronze 2, Aufgabe 1',hints:['Der Turm zieht gerade.','Nach oben, unten, links und rechts.']}),
 t('4k3/8/8/8/3B4/8/8/4K3 w - - 0 1','Der Läufer steht auf d4. Zeige alle Felder, auf die er ziehen darf.','13 Felder auf den beiden Diagonalen: a1 bis h8 und a7 bis g1.',{checks:['d4a1','d4b2','d4c3','d4e5','d4f6','d4g7','d4h8','d4a7','d4b6','d4c5','d4e3','d4f2','d4g1'],all:true,src:'Bronze 2, Aufgabe 3',hints:['Der Läufer zieht schräg.','Er bleibt immer auf seiner Feldfarbe.']}),
 t('4k3/8/8/8/3Q4/8/8/4K3 w - - 0 1','Die Dame steht auf d4. Zeige einen geraden und einen schrägen Zug.','Gerade wie der Turm, schräg wie der Läufer: zusammen 27 Felder.',{checks:['d4d1', 'd4d2', 'd4d3', 'd4d5', 'd4d6', 'd4d7', 'd4d8', 'd4a4', 'd4b4', 'd4c4', 'd4e4', 'd4f4', 'd4g4', 'd4h4', 'd4a1', 'd4b2', 'd4c3', 'd4e5', 'd4f6', 'd4g7', 'd4h8', 'd4a7', 'd4b6', 'd4c5', 'd4e3', 'd4f2', 'd4g1'],collect:{need:2,key:'line'},src:'Bronze 2, Aufgabe 6 und 7',hints:['Gerade wie der Turm.','Schräg wie der Läufer.']}),
 t('k7/8/8/8/3K4/8/8/8 w - - 0 1','Der König steht auf d4. Zeige alle Felder, auf die er ziehen darf.','8 Felder: c3, c4, c5, d3, d5, e3, e4, e5. Immer genau ein Feld.',{checks:['d4c3','d4c4','d4c5','d4d3','d4d5','d4e3','d4e4','d4e5'],all:true,src:'Bronze 2, Aufgabe 9',hints:['Der König zieht nur ein Feld.','In jede Richtung.']}),
 t('k7/8/8/1b1p1r2/3N4/5B2/2P1p3/7K w - - 0 1','Welche schwarzen Figuren kann der Springer d4 schlagen? Zeige alle.','Läufer b5, Bauer e2 und Turm f5. Der Springer schlägt im L-Sprung.',{checks:['d4b5','d4e2','d4f5'],all:true,src:'Bronze 2, Aufgabe 5',hints:['Der Springer springt zwei Felder gerade, dann eins zur Seite.','Eigene Figuren schlägt er nicht.']}),
 t('7k/3r2b1/1P6/8/n2Q3P/8/3P4/7K w - - 0 1','Welche schwarzen Figuren kann die Dame d4 schlagen? Zeige alle.','Springer a4, Turm d7 und Läufer g7. Eigene Figuren schlägt sie nicht.',{checks:['d4a4','d4d7','d4g7'],all:true,src:'Bronze 2, Aufgabe 8',hints:['Prüfe alle acht Richtungen.','Bei der ersten Figur ist der Weg zu Ende.']}),
 t('4k3/8/8/1p6/8/2N5/8/4K3 w - - 0 1','Lerncheck: Darf der Springer c3 den Bauern b5 schlagen? Darf er nach c5? Zeige einen weiteren Sprung.','Sxb5: ja, das ist ein L-Sprung. c5: nein, kein L-Sprung. Weitere Felder: a2, a4, b1, d1, d5, e2, e4.',{checks:['c3b5','c3a2','c3a4','c3b1','c3d1','c3d5','c3e2','c3e4'],src:'Bronze 2, Aufgabe 5 und 15'}),
 t('k7/7r/8/8/3BKb2/8/8/8 w - - 0 1','Der König steht auf e4. Welche Figur darf er schlagen?','Kxf4. Den eigenen Läufer d4 schlägt er nicht.',{checks:['e4f4'],src:'Bronze 2, Aufgabe 10'}),
 t('7K/8/8/8/3N4/8/8/7k w - - 0 1','Der Springer will von d4 nach a8. Es geht in 3 Sprüngen. Zeige den ersten Sprung.','d4–b5–c7–a8 oder d4–e6–c7–a8.',{checks:['d4b5','d4e6'],src:'Bronze 2, Aufgabe 15'}),
 t(START,'Grundstellung: Welche Figur darf schon jetzt ziehen, obwohl Bauern davor stehen? Zeige einen Zug.','Der Springer: Sb1–a3, Sb1–c3, Sg1–f3 oder Sg1–h3. Nur er springt über Figuren.',{checks:['b1a3','b1c3','g1f3','g1h3'],src:'Bronze 2, Aufgabe 4'}),
 t('4k3/8/8/8/8/2p5/8/B3K3 w - - 0 1','Wie weit darf der Läufer a1 ziehen? Darf er den Bauern c3 schlagen? Darf er nach d4?','Nach b2 und c3. Auf c3 schlägt er den Bauern. Nach d4 nicht: c3 versperrt den Weg.',{checks:['a1b2','a1c3'],hints:['Der Läufer zieht schräg.','Eine Figur im Weg stoppt ihn.'],src:'Bronze 2, Läufer mit Hindernis'}),
 t('4k3/8/3P4/8/3R1n2/8/8/4K3 w - - 0 1','Darf der Turm d4 nach d7? Darf er den Springer f4 schlagen?','d7: nein, der eigene Bauer d6 versperrt den Weg. f4: ja, Txf4.',{checks:['d4f4'],hints:['Der Turm zieht gerade.','Eigene Figuren versperren den Weg.'],src:'Bronze 2, Turm mit Hindernis'}),
 t('4k3/8/8/8/8/8/8/2B1K2R w - - 0 1','Welche Figur erreicht h6, welche h4? Zeige beide Züge.','Läufer c1–h6 schräg. Turm h1–h4 gerade.',{checks:['c1h6','h1h4'],all:true,hints:['Läufer schräg, Turm gerade.','Zähle die Felder bis zum Ziel.'],src:'Bronze 2, Turm und Läufer'}),
 t('4k3/8/8/1p6/8/8/4B3/R3K3 w - - 0 1','Lerncheck: Darf der Läufer e2 den Bauern b5 schlagen? Darf der Turm a1 nach a5? Darf er nach b2?','Lxb5: ja. Ta5: ja. b2: nein, der Turm zieht nicht schräg.',{checks:['e2b5','a1a5'],src:'Bronze 2, Turm und Läufer'}),
 t('4k3/8/8/8/8/8/8/R1B1K3 w - - 0 1','Turm a1 oder Läufer c1: Wer erreicht a5, wer erreicht f4? Zeige beide Züge.','Turm a1–a5 gerade. Läufer c1–f4 schräg.',{checks:['a1a5','c1f4'],all:true,hints:['Welche Figur zieht gerade?','Welche zieht schräg?'],src:'Bronze 2, Aufgabe 2'})],
 rows:{
 E:{t:'{4} am Lehrbrett. Frage: Welche Figuren kann der Springer schlagen? Vermutungen sammeln, nicht auflösen.',l:'Still entscheiden, Vermutung zeigen.',ids:[4,9,0,1,3,7]},
 A:{t:'Gangarten an {0} bis {3} zeigen. Tafel: Turm gerade, Läufer schräg, Dame beides, König ein Feld.',l:'Zielfelder zeigen, Gangart nennen.',ids:[0,1,2,3,9,10]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Steht etwas im Weg?“',l:'Zu zweit: A zeigt, B prüft. Dann wechseln.',ids:[2,3,4,5,7,11]},
 U2:{t:'Partnerwechsel: Brettaufgaben {7} bis {9}. Wer fertig ist: Springer-Weg.',l:'Aufgabe stellen, Partner löst.',ids:[7,8,9,10,11,12]},
 S:{t:'Merksatz an die Tafel. Häufigsten Fehler an {4} zeigen.',l:'Merksatz abschreiben. Eine Gangart vormachen.',ids:[4,0,1,2,3,8]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,4,5,7,10,11]},
 O:{t:'Leitfrage beantworten. Ausblick: Figurenlabyrinth. Aufräumen.',l:'Antwort in einem Satz. Figuren einräumen.'}},
 // 30 Minuten, Anfänger: nur Turm und Läufer
 short:{when:s=>+s.duration<=30&&s.level==='Anfänger',sheet:[0,1,10,11,12,14,13],note:'Für Kinder ohne Vorkenntnisse heute nur Turm und Läufer. Dame, König und Springer folgen in den nächsten Stunden.',
  leit:'Wie ziehen Turm und Läufer, und was ändert ein Hindernis?',merk:'Turm gerade, Läufer schräg. Beide ziehen nicht über andere Figuren.',
  rows:{E:{t:'{10} am Lehrbrett. Frage: Darf der Läufer nach d4? Vermutungen sammeln.',l:'Still entscheiden, Vermutung zeigen.',ids:[10,0,1,11,12,14]},
  A:{t:'{0} und {1}: Turm gerade, Läufer schräg. Tafel: Hindernis stoppt den Weg.',l:'Zielfelder zeigen, Gangart nennen.',ids:[0,1,10,11,12,14]},
  U:{t:'Arbeitsblatt {10} bis {14}. Nachfragen: „Steht etwas im Weg?“',l:'Zu zweit: A zeigt, B prüft.',ids:[10,11,12,14,0,1]},
  S:{t:'Merksatz an die Tafel. {11} als Beispiel.',l:'Merksatz abschreiben.',ids:[11,10,12,0,1,14]},
  L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[13,10,11,12,14,0]},
  O:{t:'Leitfrage beantworten. Ausblick: Dame, König und Springer. Aufräumen.',l:'Antwort in einem Satz.'}}}},

pawn:{diplom:'Bronze 2',entry:'associative',why:'weil die Kinder schon Vorstellungen vom Bauern mitbringen',
 leit:'Wie zieht der Bauer, und wie schlägt er?',merk:'Der Bauer zieht gerade nach vorn, vom Startfeld auch zwei Felder. Er schlägt schräg nach vorn.',
 tasks:[
 t('7k/8/8/8/8/2r5/2P1P3/7K w - - 0 1','Welche Felder dürfen die Bauern c2 und e2 erreichen?','e2: e3 und e4, vom Startfeld zwei Felder. c2: kein Zug, der Turm c3 versperrt den Weg.',{checks:['e2e3','e2e4'],all:true,src:'Bronze 2, Aufgabe 11',hints:['Bauern ziehen nur nach vorn.','Vom Startfeld dürfen sie zwei Felder.']}),
 t('7k/8/8/3nrb2/4P3/8/8/K7 w - - 0 1','Welche Figuren darf der Bauer e4 schlagen?','Springer d5 und Läufer f5. Den Turm e5 nicht: geradeaus schlägt der Bauer nie.',{checks:['e4d5','e4f5'],all:true,src:'Bronze 2, Aufgabe 12',hints:['Bauern schlagen schräg.','Geradeaus ist der Weg versperrt.']}),
 t('4k3/8/8/4p3/4P3/8/8/4K3 w - - 0 1','Darf der Bauer e4 nach e5? Warum?','Nein. Der Bauer e5 steht im Weg, und geradeaus schlägt ein Bauer nicht.',{src:'Bronze 2, Bauern blockiert',hints:['Steht etwas vor dem Bauern?','Geradeaus schlägt er nie.']}),
 t('4k3/8/8/8/8/4P3/8/4K3 w - - 0 1','Der Bauer steht auf e3. Darf er zwei Felder nach e5?','Nein. Zwei Felder nur vom Startfeld e2. Von e3 nur nach e4.',{checks:['e3e4'],src:'Bronze 2, Doppelschritt',hints:['Wo ist das Startfeld der weißen Bauern?','Reihe 2.']}),
 t('4k3/3p4/8/8/8/8/8/4K3 b - - 0 1','Schwarz am Zug. Wohin darf der Bauer d7?','Nach d6 oder d5. Schwarze Bauern ziehen nach unten.',{checks:['d7d6','d7d5'],all:true,src:'Bronze 2, schwarze Bauern',hints:['Für Schwarz ist vorn unten.','Vom Startfeld zwei Felder.']}),
 t('4k3/8/8/3p4/4P3/8/8/4K3 w - - 0 1','Die Bauern e4 und d5 greifen sich an. Weiß ist am Zug. Zeige den Schlagzug.','exd5. Der Bauer schlägt schräg nach vorn.',{checks:['e4d5'],src:'Bronze 2, Aufgabe 12',hints:['Schräg nach vorn.','Welches Feld liegt schräg vor e4?']}),
 t('4k3/8/8/2b1n3/3P4/8/8/4K3 w - - 0 1','Lerncheck: Der Bauer steht auf d4. Nenne alle Felder, auf die er ziehen oder schlagen darf.','d5 (ziehen), c5 und e5 (schlagen).',{checks:['d4d5','d4c5','d4e5'],all:true,src:'Bronze 2, Aufgabe 11 und 12'}),
 t('4k3/8/8/8/8/8/P6P/4K3 w - - 0 1','Zeige mit a2 und h2 je einen Doppelschritt.','a2–a4 und h2–h4.',{checks:['a2a4','h2h4'],all:true,src:'Bronze 2, Doppelschritt'}),
 t('4k3/8/8/8/8/4N3/4P3/4K3 w - - 0 1','Darf der Bauer e2 ziehen?','Nein. Der eigene Springer e3 steht im Weg.',{src:'Bronze 2, Hindernis'}),
 t('4k3/8/8/8/3P4/2p1p3/8/4K3 w - - 0 1','Darf der Bauer d4 die Bauern c3 oder e3 schlagen?','Nein. Bauern schlagen nur schräg nach vorn. Erlaubt ist nur d4–d5.',{checks:['d4d5'],src:'Bronze 2, Schlagrichtung'}),
 t('4k3/8/8/3p4/4P3/8/8/4K3 b - - 0 1','Jetzt ist Schwarz am Zug. Zeige den Schlagzug.','dxe4. Auch der schwarze Bauer schlägt schräg nach vorn.',{checks:['d5e4'],src:'Bronze 2, schwarze Bauern'}),
 t('7k/8/8/3npb2/4P3/8/8/K7 w - - 0 1','Vor dem Bauern e4 steht ein Bauer, schräg stehen Springer und Läufer. Was darf der Bauer schlagen?','Springer d5 und Läufer f5. Den Bauern e5 nicht.',{checks:['e4d5','e4f5'],all:true,src:'Bronze 4, Aufgabe 9'})],
 rows:{
 E:{t:'Sammeln: „Was wisst ihr über den Bauern?“ Dann {1} zeigen.',l:'Ideen nennen. Bei {1} Schlagfelder zeigen.',ids:[1,0,2,5,7,11]},
 A:{t:'{0} und {2}: gerade ziehen, schräg schlagen. Tafel: Startfeld = zwei Felder.',l:'Zielfelder zeigen. Begründen.',ids:[0,2,3,8,1,5]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Ziehen oder schlagen?“',l:'Zu zweit: A löst, B prüft.',ids:[2,3,4,5,8,9]},
 U2:{t:'Partnerwechsel: {7} bis {10}.',l:'Aufgabe lösen, Partner prüft.',ids:[7,8,9,10,11,4]},
 S:{t:'Merksatz an die Tafel. {2} als Gegenbeispiel.',l:'Merksatz abschreiben.',ids:[2,1,0,3,9,11]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,1,0,4,5,11]},
 O:{t:'Leitfrage beantworten. Ausblick: Figurenwerte. Aufräumen.',l:'Antwort in einem Satz.'}}},

exchange:{diplom:'Bronze 2',entry:'problem',why:'weil ein verlockender Schlagzug die Frage nach dem Wert aufwirft',
 leit:'Wann lohnt sich ein Schlagzug?',merk:'Bauer 1, Springer 3, Läufer 3, Turm 5, Dame 9. Vor dem Schlagen prüfen: Wer schlägt zurück?',
 tasks:[
 t(START,'Wie viele Punkte ist jede Figur wert? Nenne Bauer, Springer, Läufer, Turm, Dame.','Bauer 1, Springer 3, Läufer 3, Turm 5, Dame 9. Der König ist unbezahlbar.',{src:'Bronze 2, Aufgabe 13',hints:['Der Bauer ist am wenigsten wert.','Die Dame ist am meisten wert.']}),
 t('4k3/8/8/3r4/8/8/8/3RK3 w - - 0 1','Der Turm d1 kann den Turm d5 schlagen. Lohnt sich das?','Ja. Txd5, und niemand schlägt zurück: plus 5 Punkte.',{checks:['d1d5'],src:'Bronze 2, Aufgabe 14',hints:['Wer kann zurückschlagen?','Niemand? Dann gewinnst du die Figur.']}),
 t('4k3/8/4p3/3n4/8/2N5/8/4K3 w - - 0 1','Sxd5 exd5: Springer gegen Springer. Wie steht es danach?','Gleich: 3 gegen 3. Ein fairer Tausch.',{checks:['c3d5'],src:'Bronze 2, Aufgabe 14',hints:['Was gibt Weiß, was bekommt Weiß?','3 gegen 3.']}),
 t('4k3/3p4/8/8/8/8/8/3Q2K1 w - - 0 1','Die Dame kann den Bauern d7 schlagen. Lohnt sich das?','Nein. Nach Dxd7+ schlägt Kxd7. Weiß gibt 9 Punkte für 1.',{forbidden:['d1d7'],src:'Bronze 4, Aufgabe 8',hints:['Wer steht neben d7?','Dame 9, Bauer 1.']}),
 t('4k3/8/8/3p4/2R5/8/8/4K3 b - - 0 1','Schwarz am Zug: dxc4. Wie viele Punkte gewinnt Schwarz?','5 Punkte: Der Bauer schlägt den Turm, niemand schlägt zurück.',{checks:['d5c4'],src:'Bronze 2, Aufgabe 14',hints:['Welche Figur wird geschlagen?','Turm = 5.']}),
 t('4k3/8/2p5/3b4/8/8/8/3QK3 w - - 0 1','Die Dame könnte den Läufer d5 schlagen. Prüfe: Wer schlägt zurück?','Nicht schlagen. Nach Dxd5 cxd5 gibt Weiß 9 Punkte für 3.',{forbidden:['d1d5'],src:'Bronze 4, Aufgabe 8',hints:['Schau auf den Bauern c6.','Bauern schlagen schräg.']}),
 t('4k3/8/4p3/1n1b4/8/8/8/1R1RK3 w - - 0 1','Lerncheck: Txb5 oder Txd5? Welcher Schlagzug gewinnt Punkte? Rechne.','Txb5: plus 3, niemand schlägt zurück. Txd5? exd5: Weiß gibt 5 für 3.',{checks:['b1b5'],forbidden:['d1d5'],src:'Bronze 2, Aufgabe 13 und 14'}),
 t('4k3/8/8/8/3r4/8/8/3QK3 w - - 0 1','Die Dame kann den Turm d4 schlagen. Lohnt sich das?','Ja. Dxd4, niemand schlägt zurück: plus 5.',{checks:['d1d4'],src:'Bronze 2, Materialgewinn'}),
 t('4k3/8/4p3/3n4/8/8/8/3RK3 w - - 0 1','Lohnt sich Txd5?','Nein. Nach Txd5 exd5 gibt Weiß 5 für 3.',{forbidden:['d1d5'],src:'Bronze 2, Materialgewinn'}),
 t('4k3/8/8/3q4/4P3/8/8/4K3 w - - 0 1','Der Bauer e4 kann die Dame schlagen. Wie viele Punkte gewinnt Weiß?','exd5: plus 9.',{checks:['e4d5'],src:'Bronze 2, Materialgewinn'}),
 t('4k3/8/8/3b4/8/4p3/8/R3K3 w - - 0 1','Zähle: Wer hat mehr Material, Weiß oder Schwarz?','Weiß: Turm = 5. Schwarz: Läufer und Bauer = 4. Weiß hat 1 Punkt mehr.',{src:'Bronze 2, Figurenwerte'})],
 rows:{
 E:{t:'{3} zeigen. Frage: Lohnt sich Dxd7? Vermutungen sammeln, nicht auflösen.',l:'Still entscheiden, Daumen hoch oder runter.',ids:[3,0,1,2,5,9]},
 A:{t:'{0}: Werte an die Tafel. Dann {1} und {2} rechnen.',l:'Werte nennen. Gewinn und Verlust rechnen.',ids:[0,1,2,3,7,8]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Wer schlägt zurück?“',l:'Zu zweit: A rechnet, B prüft.',ids:[2,3,4,5,8,9]},
 U2:{t:'Partnerwechsel: {7} bis {10}.',l:'Rechnen, Partner prüft.',ids:[7,8,9,10,1,2]},
 S:{t:'Merksatz an die Tafel. {3} auflösen.',l:'Merksatz abschreiben.',ids:[3,5,0,1,8,10]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,1,2,5,7,8]},
 O:{t:'Leitfrage beantworten. Ausblick: Schach. Aufräumen.',l:'Antwort in einem Satz.'}}},

// ───────── Bronze 3 ─────────
check:{diplom:'Bronze 3',entry:'informative',why:'weil die drei Abwehrarten eine feste Regel sind',
 leit:'Wie rette ich meinen König aus dem Schach?',merk:'Schach heißt: Der König wird angegriffen. Drei Abwehren: König ziehen, Angreifer schlagen, dazwischenstellen.',
 tasks:[
 t('4r2k/8/8/8/8/8/8/4K3 w - - 0 1','Steht der weiße König im Schach? Von welcher Figur?','Ja. Der Turm e8 greift über die e-Linie an.',{src:'Bronze 3, Aufgabe 2',hints:['Welche Linie führt zum König?','Schau auf die e-Linie.']}),
 t('3r3k/8/8/8/8/8/8/3K4 w - - 0 1','Der Turm d8 gibt Schach. Ziehe den König aus dem Schach.','Kc1, Kc2, Ke1 oder Ke2: weg von der d-Linie.',{checks:['d1c1','d1c2','d1e1','d1e2'],src:'Bronze 3, Aufgabe 5',hints:['Der König zieht ein Feld.','Raus aus der d-Linie.']}),
 t('7k/8/8/8/8/8/4r3/3QK3 w - - 0 1','Der Turm e2 gibt Schach. Schlage den Angreifer.','Dxe2. Auch Kxe2 ist erlaubt, der Turm ist ungedeckt.',{checks:['d1e2','e1e2'],src:'Bronze 3, Aufgabe 6',hints:['Wer greift an?','Kann ihn jemand schlagen?']}),
 t('4r2k/8/8/8/2B5/8/8/4K3 w - - 0 1','Der Turm e8 gibt Schach. Stelle den Läufer dazwischen.','Le2 oder Le6: Der Läufer sperrt die e-Linie.',{checks:['c4e2','c4e6'],src:'Bronze 3, Aufgabe 7',hints:['Zwischen e8 und e1 liegt die e-Linie.','Welches Feld der e-Linie erreicht der Läufer?']}),
 t('7k/8/8/8/8/8/8/r3K3 w - - 0 1','Der Turm a1 gibt Schach. Zeige alle sicheren Felder für den König.','d2, e2 und f2. Reihe 1 bleibt angegriffen.',{checks:['e1d2','e1e2','e1f2'],all:true,src:'Bronze 3, Aufgabe 8',hints:['Der Turm greift die ganze Reihe 1 an.','Also nach oben.']}),
 t('4r2k/8/8/8/1b6/8/4K3/8 w - - 0 1','Der König e2 steht im Schach. Auf welche Felder darf er nicht? Zeige ein erlaubtes Feld.','Verboten: e1 und e3 (Turm), d2 (Läufer). Erlaubt: d1, d3, f1, f2, f3.',{checks:['e2d1','e2d3','e2f1','e2f2','e2f3'],src:'Bronze 3, Aufgabe 9',hints:['Prüfe jedes Nachbarfeld.','Turm und Läufer greifen an.']}),
 t('4r2k/8/8/8/8/8/3N4/4K3 w - - 0 1','Lerncheck: Der Turm e8 gibt Schach. Zeige eine Abwehr und nenne die Art.','Se4 (dazwischenstellen) oder Kd1, Kf1, Kf2 (König ziehen). Schlagen geht hier nicht.',{checks:['d2e4','e1d1','e1f1','e1f2'],src:'Bronze 3, Aufgabe 4 bis 7'}),
 t('4r2k/8/8/8/8/8/4K3/8 w - - 0 1','Der König e2 steht im Schach. Zeige ein sicheres Feld.','d1, d2, d3, f1, f2 oder f3. Die e-Linie bleibt angegriffen.',{checks:['e2d1','e2d2','e2d3','e2f1','e2f2','e2f3'],src:'Bronze 3, Aufgabe 10'}),
 t('4k3/8/8/8/8/8/8/R3K3 w - - 0 1','Gib dem schwarzen König mit dem Turm Schach.','Ta8+. Der Turm greift über Reihe 8 an.',{checks:['a1a8'],src:'Bronze 3, Schach geben'}),
 t('4k3/4p3/8/8/8/8/8/4R1K1 b - - 0 1','Steht der schwarze König im Schach?','Nein. Der Bauer e7 steht zwischen Turm und König.',{src:'Bronze 3, Aufgabe 1'}),
 t('8/8/8/3k4/8/3K4/8/8 w - - 0 1','Darf der weiße König nach d4?','Nein. Könige dürfen nie nebeneinander stehen.',{src:'Bronze 3, König darf nicht ins Schach'})],
 rows:{
 E:{t:'Thema nennen: „Schach heißt: Der König wird angegriffen.“ {0} zeigen.',l:'Angreifer zeigen.',ids:[0,9,8,1,2,3]},
 A:{t:'{1} bis {3}: drei Abwehren. Tafel: ziehen, schlagen, dazwischen.',l:'Zu jeder Abwehr einen Zug zeigen.',ids:[1,2,3,4,0,7]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Welche Abwehr?“',l:'Zu zweit: A zieht, B nennt die Abwehrart.',ids:[2,3,4,5,7,10]},
 U2:{t:'Partnerwechsel: {7} bis {10}.',l:'Aufgabe lösen, Partner prüft.',ids:[7,8,9,10,4,5]},
 S:{t:'Merksatz an die Tafel. {5} als Fehlerbeispiel.',l:'Merksatz abschreiben.',ids:[5,0,1,2,3,10]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,1,2,3,4,7]},
 O:{t:'Leitfrage beantworten. Ausblick: Matt in einem Zug. Aufräumen.',l:'Antwort in einem Satz.'}}},

mateIn1:{diplom:'Bronze 3',entry:'playful',why:'weil ein kurzes Mattspiel den Unterschied zwischen Schach und Matt erleben lässt',
 leit:'Ist das wirklich Matt oder nur Schach?',merk:'Matt heißt: Schach und keine Abwehr. Prüfe nach deinem Zug: Fluchtfeld, Schlagen, Dazwischenstellen.',
 tasks:[
 t('8/8/8/8/8/5k2/6q1/7K w - - 0 1','Schach oder Schachmatt?','Schachmatt. Die Dame g2 greift an, der König f3 deckt sie, kein Fluchtfeld ist frei.',{src:'Bronze 3, Aufgabe 12',hints:['Kann der König fliehen?','Kann er die Dame schlagen?']}),
 t('7k/6pp/8/8/8/8/6K1/R7 w - - 0 1','Setze mit dem Turm matt.','Ta8#. Die eigenen Bauern versperren dem König die Flucht.',{checks:['a1a8'],src:'Bronze 3, Aufgabe 15',hints:['Der König steht auf der Grundreihe.','Die Bauern versperren den Weg nach vorn.']}),
 t('5K1k/6np/8/8/8/2Q5/8/8 w - - 0 1','Setze mit der Dame matt.','Dxg7#. Die Dame ist vom König f8 gedeckt.',{checks:['c3g7'],src:'Bronze 3, Aufgabe 14',hints:['Die Dame zieht schräg.','Wer schützt die Dame auf g7?']}),
 t('k7/8/8/8/4n3/8/6PP/6RK b - - 0 1','Schwarz am Zug. Setze mit dem Springer matt.','Sf2#. Der König ist von eigenen Figuren eingesperrt.',{checks:['e4f2'],src:'Bronze 3, Aufgabe 13',hints:['Der König h1 hat keinen freien Nachbarn.','Ein Springerschach kann man nicht blocken.']}),
 t('6k1/5ppp/8/8/8/8/8/3Q2K1 w - - 0 1','Setze mit der Dame matt.','Dd8#. Grundreihenmatt.',{checks:['d1d8'],src:'Bronze 3, Grundreihe',hints:['Der König steht hinten.','Die Dame zieht gerade bis Reihe 8.']}),
 t('7k/8/5K2/8/8/8/8/6Q1 w - - 0 1','Setze mit der Dame matt.','Dg7#. Der König f6 deckt die Dame.',{checks:['g1g7'],src:'Bronze 3, Dame und König',hints:['Die Dame braucht Schutz.','Schau auf das Feld neben dem schwarzen König.']}),
 t('7k/8/6K1/8/8/8/8/5Q2 w - - 0 1','Lerncheck: Finde das Matt. Nicht jedes Schach ist Matt.','Df8#. Da1+ wäre nur Schach.',{checks:['f1f8'],forbidden:['f1a1'],src:'Bronze 3, Aufgabe 14'}),
 t('4k3/8/4K3/8/8/8/8/R7 w - - 0 1','Setze mit dem Turm matt.','Ta8#. Der König e6 deckt die Fluchtfelder.',{checks:['a1a8'],src:'Bronze 3, Aufgabe 11'}),
 t('6k1/8/8/8/8/8/8/R5K1 w - - 0 1','Ta8+ ist Schach. Ist es auch Matt?','Nein. Der König flieht nach f7, g7 oder h7.',{src:'Bronze 3, Schach oder Matt'}),
 t('5rk1/5ppp/8/8/8/8/8/R5K1 w - - 0 1','Ist Ta8 Matt?','Nein. Der Turm f8 schlägt: Txa8.',{forbidden:['a1a8'],src:'Bronze 3, Schach oder Matt'})],
 rows:{
 E:{t:'Spiel „Matt oder nicht?“: Daumen hoch bei Matt. {0} und {8} zeigen.',l:'Daumen zeigen, Grund nennen.',ids:[0,8,9,1,2,7]},
 A:{t:'{1} und {2} lösen. Tafel: Fluchtfeld, Schlagen, Dazwischen.',l:'Mattzug zeigen, drei Abwehren prüfen.',ids:[1,2,0,7,8,9]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Kann der König weg?“',l:'Zu zweit: A findet das Matt, B prüft die Abwehren.',ids:[2,3,4,5,7,9]},
 U2:{t:'Partnerwechsel: {7} bis {9}.',l:'Matt suchen, Partner prüft.',ids:[7,8,9,3,4,5]},
 S:{t:'Merksatz an die Tafel. {9} als Gegenbeispiel.',l:'Merksatz abschreiben.',ids:[9,8,0,1,2,5]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,1,2,4,5,7]},
 O:{t:'Leitfrage beantworten. Ausblick: Erste Partie. Aufräumen.',l:'Antwort in einem Satz.'}}},

// ───────── Bronze 4 ─────────
fairplay:{diplom:'Bronze 4',entry:'associative',why:'weil die Kinder eigene Erfahrungen mit fairen und unfairen Spielen mitbringen',
 leit:'Was macht eine faire Partie aus?',merk:'Vor der Partie Hand geben. Ruhig warten. Fehler freundlich klären. Nach der Partie: „Gute Partie, danke!“',
 tasks:[
 t(START,'Vor der Partie: Was tut ihr, bevor der erste Zug kommt?','Hand geben, „Viel Spaß“ sagen. Weiß beginnt.',{src:'Bronze 4, Aufgabe 1',hints:['Wie begrüßt ihr euch?','Wer beginnt?']}),
 t('rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2','Dein Gegner denkt lange nach. Was tust du?','Ruhig warten. Nicht reden, nicht trommeln.',{src:'Bronze 4, Aufgabe 3',hints:['Was hilft beim Nachdenken?','Ruhe.']}),
 t('rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2','Dein Partner will den König e1 nach e3 ziehen. Was sagst du?','Ruhig: „Warte kurz, der König zieht nur ein Feld.“ Erlaubt ist Ke2.',{checks:['e1e2'],src:'Bronze 4, Aufgabe 4',hints:['Freundlich bleiben.','Wie weit zieht der König?']}),
 t('3r3k/8/8/8/2B3bq/5N2/8/R5K1 w - - 0 1','Welche weiße Figur ist angegriffen?','Der Springer f3. Der Läufer g4 greift ihn an.',{src:'Bronze 4, Aufgabe 6',hints:['Prüfe jede schwarze Figur.','Der Läufer g4 zielt schräg.']}),
 t('7k/8/8/8/2B3b1/5N2/8/6K1 w - - 0 1','Der Läufer g4 greift den Springer f3 an. Schütze den Springer.','Le2. Auch Kf2 oder Kg2 decken den Springer.',{checks:['c4e2','g1f2','g1g2'],src:'Bronze 4, Aufgabe 7',hints:['Welche Figur kann neben oder hinter f3?','Der Läufer c4 erreicht e2.']}),
 t('7k/8/8/3npb2/4P3/8/8/K7 w - - 0 1','Der Bauer e4: Was darf er schlagen?','Springer d5 und Läufer f5. Den Bauern e5 nicht.',{checks:['e4d5','e4f5'],all:true,src:'Bronze 4, Aufgabe 9',hints:['Bauern schlagen schräg.','Geradeaus geht es nicht.']}),
 t('rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2','Lerncheck: Ein Kind behauptet: „Mein König darf nach e3.“ Was sagst du? Zeige den erlaubten Königszug.','Ruhig erklären: Der König zieht nur ein Feld. Erlaubt ist Ke2.',{checks:['e1e2'],src:'Bronze 4, Aufgabe 4'}),
 t(START,'Du hast verloren. Was sagst du?','„Gute Partie, danke fürs Spiel!“ und Hand geben.',{src:'Bronze 4, Aufgabe 2'}),
 t('4k3/8/8/3q4/8/8/3Q4/4K3 w - - 0 1','Die weiße Dame könnte d5 schlagen. Ist das ein guter Tausch?','Ja, Dxd5: Die schwarze Dame ist ungedeckt.',{checks:['d2d5'],src:'Bronze 4, Aufgabe 8'}),
 t('8/8/8/8/8/5k2/6q1/7K w - - 0 1','Die Partie ist zu Ende. Was macht ihr jetzt?','Es ist Schachmatt. Hand geben, Figuren gemeinsam aufbauen.',{src:'Bronze 4, Aufgabe 5'}),
 t('4k3/8/8/8/8/8/4P3/4K3 w - - 0 1','Du willst eine Figur nur gerade rücken. Was sagst du vorher?','„Ich rücke zurecht.“ Sonst gilt: berührt, geführt.',{src:'Bronze 4, Fairplay'})],
 rows:{
 E:{t:'Sammeln: „Was gehört zu einem fairen Spiel?“ Dann {0}.',l:'Ideen nennen.',ids:[0,7,1,2,10,9]},
 A:{t:'{1} und {2}: Was tust du? Tafel: Fairplay-Regeln.',l:'Antwort sagen und vormachen.',ids:[1,2,0,7,9,10]},
 U:{t:'Arbeitsblatt {2} bis {5}. Fairplay-Regeln sichtbar an der Tafel.',l:'Zu zweit lösen, dann fair spielen.',ids:[2,3,4,5,8,1]},
 U2:{t:'Partnerwechsel: neue Partie. Lehrkraft beobachtet Fairplay.',l:'Spielen, fair bleiben.',ids:[7,8,9,10,3,4]},
 S:{t:'Merksatz an die Tafel. Eine faire Szene loben.',l:'Merksatz abschreiben.',ids:[9,0,1,2,7,10]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,2,3,4,5,1]},
 O:{t:'Leitfrage beantworten. Ausblick: Labyrinth. Aufräumen.',l:'Antwort in einem Satz.'}}}
};

// Labyrinthe: eigene Aufgaben bleiben, nur Zeilen und Texte.
const MAZE_ROWS={
 E:{t:'{0} am Lehrbrett. Frage: Wie kommt die Figur zum Ziel?',l:'Weg mit dem Finger zeigen.',ids:[0,1,2,3,4,5]},
 A:{t:'Regeln an {0}: nur erlaubte Züge, × ist gesperrt. Lösung gemeinsam.',l:'Jeden Zug laut sagen.',ids:[0,1,2,3,4,5]},
 U:{t:'Arbeitsblatt {2} bis {5}. Nachfragen: „Ist der Zug erlaubt?“',l:'Zu zweit: A zeigt den Weg, B prüft.',ids:[1,2,3,4,5,0]},
 U2:{t:'Partnerwechsel: Labyrinthe tauschen, Züge zählen.',l:'Weg zeigen, Partner zählt.',ids:[2,3,4,5,0,1]},
 S:{t:'Zwei Wege vergleichen: Wer braucht weniger Züge?',l:'Eigenen Weg zeigen, Züge zählen.',ids:[2,3,4,5,1,0]},
 L:{t:'Lerncheck austeilen, still arbeiten, einsammeln.',l:'Allein lösen.',ids:[6,1,2,3,4,5]},
 O:{t:'Leitfrage beantworten. Aufräumen.',l:'Antwort in einem Satz.'}};
const MAZE={'maze-basic':{diplom:'Bronze 2',leit:'Wie findet die Figur einen erlaubten Weg?',merk:'Jeder Zug muss erlaubt sein. Gesperrte Felder umgehen. Kurze Wege sind besser.'},
 'maze-build':{diplom:'Bronze 2 (Vertiefung)',leit:'Welcher Weg ist der kürzeste?',merk:'Erst alle Wege suchen, dann Züge zählen. Der kürzeste Weg gewinnt.'},
 'maze-deep':{diplom:'Ergänzung',leit:'Wann darf die Figur schlagen?',merk:'Schlagen nur, wo es erlaubt ist. Vor jedem Zug prüfen.'}};

// Stunde 0
const S0={diplom:'Bronze 1',leit:'Wie bauen wir das Brett richtig auf?',merk:'Rechts unten ist hell. Die Dame steht auf ihrer Farbe. Türme in die Ecken.',
 tasks:[
 t(START,'Ist dieses Brett richtig aufgebaut? Woran erkennst du es?','Ja. Rechts unten ist hell, die weiße Dame steht auf d1.',{src:'Bronze 1, Aufgabe 2 und 9',hints:['Schau rechts unten.','Wo steht die Dame?']}),
 t('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR w - - 0 1','Bei Weiß stimmt etwas nicht. Finde den Fehler.','König und Dame sind vertauscht. Die Dame gehört auf d1.',{src:'Bronze 1, Aufgabe 16',hints:['Schau auf d1 und e1.','Die Dame steht auf ihrer Farbe.']}),
 t('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RBNQKNBR w - - 0 1','Finde den Aufbaufehler bei Weiß.','Läufer und Springer sind vertauscht. Neben den Türmen stehen die Springer.',{src:'Bronze 1, Aufgabe 8',hints:['Schau neben die Türme.','Von außen: Turm, Springer, Läufer.']}),
 t('rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1','Nenne die weiße Grundreihe von a1 bis h1.','Turm, Springer, Läufer, Dame, König, Läufer, Springer, Turm.',{src:'Bronze 1, Aufgabe 8',hints:['Von außen nach innen.','In der Mitte Dame und König.']}),
 t('4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1','Auf welchen Reihen stehen die Bauern am Anfang?','Weiß auf Reihe 2, Schwarz auf Reihe 7.',{src:'Bronze 1, Aufgabe 7',hints:['Vor den großen Figuren.','Eine Reihe davor.']}),
 t('rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQ - 0 1','Bei Schwarz stimmt etwas nicht. Finde den Fehler.','König und Dame sind vertauscht. Die schwarze Dame gehört auf d8.',{src:'Bronze 1, Aufgabe 16',hints:['Schau auf d8 und e8.','Schwarze Dame, dunkles Feld.']}),
 t('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/NRBKQBNR w - - 0 1','Lerncheck: In diesem Aufbau stecken zwei Fehler bei Weiß. Finde beide.','Turm und Springer auf a1 und b1 sind vertauscht, König und Dame auch.',{src:'Bronze 1, Aufgabe 16'}),
 t(START,'Welche Figuren stehen in den Ecken?','Die Türme.',{src:'Bronze 1, Aufgabe 6'}),
 t(START,'Zeige die weiße Dame.','d1, helles Feld.',{src:'Bronze 1, Aufgabe 9'}),
 t(START,'Wie viele Felder hat das Brett?','64.',{src:'Bronze 1, Aufgabe 1'}),
 t('rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w - - 0 1','Zeige die beiden Grundreihen.','Reihe 1 und Reihe 8.',{src:'Bronze 1, Aufgabe 14'}),
 t(START,'Welche Figur steht auf c1, welche auf g8?','c1: weißer Läufer. g8: schwarzer Springer.',{src:'Bronze 1, Aufgabe 16'})],
 rows:{
 E:{t:'Begrüßen, Namen. Brett zeigen: {0}. Frage: Liegt es richtig?',l:'Namen sagen. Brett anschauen.',ids:[0,9,7,8,4,3]},
 A:{t:'Gemeinsam aufbauen. {1} und {2}: Fehler finden.',l:'Mitbauen. Fehler zeigen.',ids:[0,1,2,3,4,5]},
 R:{t:'Drei Rituale einüben: Stopp-Signal (Hand hoch, Hände weg von den Figuren, Blick nach vorn), Aufbau-Ritual (rechts unten hell, Dame auf ihre Farbe, Partner kontrolliert), Aufräum-Ritual (je 16 Figuren zählen, dann einsortieren).',l:'Jedes Ritual einmal üben.',ids:[0,7,8,9,10,11]},
 U:{t:'Bauernkrieg vormachen: Bauern ziehen ein Feld gerade, vom Start auch zwei, und schlagen schräg. Wer zuerst die letzte Reihe erreicht, gewinnt. Wer nicht ziehen kann, verliert. Bei Zeitnot entfällt das Spiel.',l:'Zu zweit Bauernkrieg spielen, nach jeder Partie Farben tauschen und Hand geben.',ids:[0,3,4,7,8,11],m:'Bretter in Startstellung „Bauernkrieg“'},
 L:{t:'Ein Kind baut die Grundstellung allein auf, der Partner prüft. Dann {6} zeigen.',l:'Allein aufbauen, Partner prüft. Dann wechseln.',ids:[6,1,2,5,3,4],m:'Bretter, Lehrbrett'},
 O:{t:'Was war heute neu? Aufräum-Ritual: je 16 Figuren zählen, dann einsortieren.',l:'Einen Satz sagen. Figuren zählen und einräumen.',ids:[9,7,8,10,11,0]}}};

// Leitfragen der Diplom-Stunden auch für Rückblick und Abschluss übernehmen.
for(const [k,v] of Object.entries(L))if(window.LessonRefinement?.rows?.[k])window.LessonRefinement.rows[k][0]=v.leit;
// Reihenfolge des Jahresplans für die Wiederholung im Ausblick.
const ORDER=P.YEAR.flatMap(b=>b[2].map(r=>r[0])).filter(Boolean).map(id=>U.units.find(u=>u.id===id)?.topics?.[0]).filter(Boolean);
const ROLE=name=>{const b=name.split(' · ')[0];if(name==='Übung · Zweite Runde')return 'U2';if(b==='Einstieg')return 'E';if(b==='Erarbeitung')return 'A';if(b==='Übung')return 'U';if(b==='Ergebnissicherung'||b==='Sicherung & Austausch')return 'S';if(b==='Lerncheck')return 'L';if(b==='Ausblick & Aufräumen')return 'O';if(b==='Rituale einüben')return 'R';return null};
const RES={E:'Leitfrage an der Tafel.',A:'Regel an der Tafel.',U:'Aufgaben gelöst, häufigster Fehler notiert.',U2:'Weitere Aufgaben gelöst.',L:'Lerncheck abgegeben.',O:'Leitfrage beantwortet, Material vollständig.',R:'Rituale geübt.'};
const MAT={E:'Lehrbrett',A:'Lehrbrett, Tafel',U:'Arbeitsblatt, Bretter',U2:'Bretter',S:'Tafel, Lehrbrett',L:'Lerncheck-Zettel',O:'Lehrbrett',R:'Bretter'};
const GENERIC_E={problem:'{0} zeigen. Frage stellen, Vermutungen sammeln, nicht auflösen.',informative:'Thema nennen. Regel an {0} kurz zeigen.',associative:'Sammeln: „Was fällt euch zum Thema ein?“ Dann {0}.',playful:'Kurzes Spiel, dann {0} zeigen.'};

function reviewTasks(topic){if(topic==='coordinates')return S0.tasks.slice(0,6);let i=ORDER.lastIndexOf(topic);while(--i>=0){const x=ORDER[i];if(x!==topic&&L[x])return L[x].tasks.slice(0,6)}return null}
function apply(plan,unit=false){const st0=plan?.settings||{};const st=unit?{...st0,entry:'auto'}:st0;(plan?.sessions||[]).forEach((s,si)=>one(plan,st,s,si));return plan}
function one(plan,st,s,si){{const topic=s.topic||st.topic;if(Array.isArray(s.exercises))s.exercises=s.exercises.filter(x=>!String(x.id||'').startsWith('dl-rev-'));
 const isS0=s.phases.some(ph=>ph.name==='Rituale einüben');const maze=MAZE[topic];const base=isS0?S0:L[topic];if(!base&&!maze)return;
 const short=base?.short&&base.short.when({...st,...s,level:s.level||st.level,duration:s.duration})?base.short:null;
 let order,label={};
 if(base){const sheet=short?short.sheet:[0,1,2,3,4,5,6];const rest=base.tasks.map((x,i)=>i).filter(i=>!sheet.includes(i));order=[...sheet,...rest];
  s.exercises=order.map((i,k)=>({...C.clone(base.tasks[i]),id:'dl-'+(isS0?'s0':topic)+'-'+i,source:'Ludgerus-Schachdiplom '+(base.diplom||'')+(base.tasks[i].src?', '+base.tasks[i].src.replace(/^(Bronze|Silber|Gold) \d+, /,''):'')+'. Stellung mit chess.js geprüft.'}));
  s.exercises.forEach((x,k)=>{x.boardLabel=k<6?'Aufgabe '+(k+1):k===6?'Lerncheck':'Brettaufgabe B'+(k-6);if(x.collect)P.COLLECT[x.id]=x.collect;else if(x.all&&x.checks.length>1)P.COLLECT[x.id]={need:'all',key:'to'};delete x.all;delete x.src;delete x.collect});
  order.forEach((i,k)=>label[i]=s.exercises[k].boardLabel);
 }else{(s.exercises||[]).forEach((x,k)=>x.boardLabel=k<6?'Aufgabe '+(k+1):k===6?'Lerncheck':'Brettaufgabe B'+(k-6));for(let i=0;i<(s.exercises||[]).length;i++)label[i]=s.exercises[i].boardLabel}
 const pos=i=>order?order.indexOf(i):i;
 // Wiederholung aus der vorigen Stunde des Jahresplans
 const rev=reviewTasks(isS0?'coordinates':topic);const revStart=s.exercises.length;if(rev&&!isS0)rev.forEach((x,j)=>s.exercises.push({...C.clone(x),id:'dl-rev-'+topic+'-'+j,boardLabel:'Wiederholung W'+(j+1),source:'Wiederholung aus der vorigen Stunde. Ludgerus-Schachdiplom.',strict:true}));
 s.exercises.forEach(x=>{delete x.all;delete x.src});
 const rows=short?short.rows:base?base.rows:MAZE_ROWS;const fill=txt=>String(txt||'').replace(/\{(\d+)\}/g,(m,n)=>label[+n]||('Aufgabe '+(+n+1))).replace(/(Aufgabe |Brettaufgabe B|Wiederholung W)(\d+) (bis|und) \1(\d+)/g,'$1$2 $3 $4').replace(/Brettaufgabe B(\d+) (bis|und) (\d+)/g,'Brettaufgabe B$1 $2 B$3');
 const ent=st.entry&&st.entry!=='auto'?st.entry:s.fit==='under'?'informative':(base?.entry||s.entryType);const gameTitle=s.phases.find(ph=>ph.game)?.game?.title||'Feld-Rufen';
 if(base&&!isS0){s.entryType=ent;if(!(st.entry&&st.entry!=='auto')&&s.fit!=='under')s.entryReason=base.why}
 for(const ph of s.phases){const role=ROLE(ph.name);if(!role)continue;const row=rows[role]||(role==='U2'?rows.U:null);if(!row)continue;
  let ids=(row.ids||[]).map(pos).filter(i=>i>=0&&i<revStart);
  if(role==='O')ids=rev&&!isS0?Array.from({length:6},(_,j)=>revStart+j):ids;
  for(let k=0;ids.length<6&&k<revStart;k++)if(!ids.includes(k))ids.push(k);
  if(ids.length>1)ids=[ids[0],...ids.slice(1).sort((x,y)=>x-y)];// erste Aufgabe der Phase bleibt vorn, der Rest in Nummernfolge
  ph.exerciseIds=ids;ph.puzzleIds=[];delete ph.contrast;
  let teacher=fill(role==='E'&&base&&!isS0&&ent!==base.entry?GENERIC_E[ent].replace('Kurzes Spiel','Kurzes Spiel „'+gameTitle+'“'):row.t);let learners=fill(row.l);
  if(role==='E'&&!isS0)teacher+=' Leitfrage an die Tafel: „'+(short?.leit||(base||maze).leit)+'“';
  if(role==='E'&&s.fit==='under')teacher='Wiederholung: Grundregel kurz an '+(label[0]||'Aufgabe 1')+' zeigen. '+teacher;
  if(role==='E'&&si>0)teacher='Rückblick, etwa 2 Minuten: Merksatz der letzten Stunde. '+teacher;
  if(role==='U'&&base&&!isS0&&!/Aufgabe \d/.test(learners))learners=fill('{2} bis {5}: ')+learners.charAt(0).toLowerCase()+learners.slice(1);
  if(role==='U'){if(s.fit==='under')learners+=' Expertenaufgabe freiwillig.';if(s.fit==='over')learners+=' Wer fertig ist: Profi-Aufgabe.';if(s.fit==='mixed')teacher+=' Paare nach Spielstärke bilden.'}
  if(ph.game&&!teacher.includes(ph.game.title))teacher+=' Danach Spiel „'+ph.game.title+'“.';
  if(role==='U'){const m=C.methods.find(x=>x.id===ph.method);if(m&&!teacher.includes(m.name))teacher+=' Methode: '+m.name+'.'}
  if(role==='E'&&base&&!isS0){const en=E?.entries?.[ent];if(en)ph.name='Einstieg · '+en.name}
  ph.teacher=ph.scan_teacher=teacher;ph.learners=ph.scan_learners=learners;ph.material=(row.m||(role==='E'?'Lehrbrett mit '+(s.exercises[ids[0]]?.boardLabel||'Aufgabe 1'):role==='O'?'Lehrbrett: Wiederholung':MAT[role]))+(ph.game&&role!=='E'?', Spiel „'+ph.game.title+'“':'');
  ph.result=ph.scan_result=role==='S'?(short?.merk||(base||maze).merk):RES[role];
  if(role==='O'&&rev&&!isS0)ph.teacher=ph.scan_teacher=teacher+' Am Lehrbrett: Wiederholung W1 bis W6.'}
 const leit=short?.leit||(base||maze).leit,merk=short?.merk||(base||maze).merk;s.guidingQuestion=leit;s.merksatz=merk;s.secureProduct=merk;s.explanation=merk;if(short?.note){s.focusNote=short.note;if(!String(s.timeNote||'').includes(short.note))s.timeNote=(s.timeNote?s.timeNote+' ':'')+short.note}
 s.puzzleIds=[];s.checkId=null;s.diplom=(base||maze).diplom;
 for(const ph of s.phases)if(ROLE(ph.name)==='O'){ph.teacher=ph.scan_teacher=ph.teacher.replace('Leitfrage beantworten.','Leitfrage beantworten: „'+leit+'“')}
 if(+st.group===1){const R=[[/[Zz]u zweit: A ([^,.]+), B ([^.]+)\./g,'das Kind $1, du $2.'],[/Zu zweit lösen/g,'Mit dir lösen'],[/[Zz]u zweit/g,'mit dir'],[/Partnerwechsel: /g,''],[/, Partner prüft/g,', du prüfst'],[/[Dd]er Partner prüft/g,'du prüfst'],[/Partner löst/g,'du löst'],[/Partnerarbeit|Partnerspiel|Partnerwechsel/g,'Einzelarbeit mit der Lehrkraft'],[/ ?Paare nach Spielstärke bilden\./g,''],[/Kinder zeigen/g,'Kind zeigt'],[/Jedes Kind/g,'Das Kind'],[/\bKinder\b/g,'das Kind'],[/Partner/g,'Lehrkraft'],[/\bPaar\w*/g,'']];for(const ph of s.phases)for(const k of ['teacher','scan_teacher','learners','scan_learners','social','material','result','scan_result'])if(typeof ph[k]==='string')ph[k]=R.reduce((x,[a,b])=>x.replace(a,b),ph[k])}
}}
const gen=C.generate;C.generate=(a,b)=>apply(gen(a,b));
const cr=U.create;U.create=(u,p,g)=>apply(cr(u,p,g),true);
return {L,S0,MAZE,ORDER,apply}})();
