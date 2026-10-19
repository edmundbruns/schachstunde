// Brettaufgaben für den Jahresplan (Bronze), die nicht schon in diplom-lessons.js stehen.
// Jede Aufgabe stammt von edmundbruns.com (Diplom, Lumi-Inhalte). Umgebaute Auswahl- oder Ziehaufgaben tragen umgebaut:true.
// Felder: fen, work, answer, checks (erlaubte Züge), forbidden, hints[2], src, collectFrom (alle Züge einer Figur sammeln), open (Lösung nur zeigen)
// © Dr. Edmund Bruns
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
export const EXTRA={
// Woche 1 und 2: Brett und Felder
'k1-41':{fen:START,work:'Baue die Grundstellung auf und vergleiche sie mit dem Brett.',answer:'Von a1 bis h1: Turm, Springer, Läufer, Dame, König, Läufer, Springer, Turm. Davor acht Bauern. Die Dame steht auf ihrer Farbe.',open:true,hints:['Rechts unten ist hell.','Die Dame steht auf ihrer Farbe.'],src:'Lumi Selbstlernkurs I, Grundstellung'},
'dp-b1q3':{fen:START,work:'Welche Farbe hat das Feld rechts unten? Wie heißt es?',answer:'Hell. Das Feld heißt h1.',open:true,hints:['Unten rechts ist hell.','Das gesuchte Feld heißt h1.'],src:'Diplom Bronze 1, Aufgabe 3'},
'k1-diag':{fen:'k7/8/8/8/8/8/8/K7 w - - 0 1',work:'Zeige e1, f2, g3 und h4. Was bilden diese Felder?',answer:'Eine Diagonale. Die Felder liegen schräg hintereinander und haben dieselbe Farbe.',open:true,hints:['Linie geht senkrecht, Reihe waagerecht.','Schräg heißt Diagonale.'],src:'Lumi Selbstlernkurs I, 1. Überprüfungsaufgabe',umgebaut:true},
'dp-b1q10b':{fen:'7k/8/8/8/8/8/8/K7 w - - 0 1',work:'Zeige c7, d1 und e6.',answer:'c7: Linie c, Reihe 7. d1: Linie d, Reihe 1. e6: Linie e, Reihe 6.',open:true,hints:['Erst der Buchstabe, dann die Zahl.','Arbeite die Liste Feld für Feld ab.'],src:'Diplom Bronze 1, Aufgabe 12'},
'k1-grund':{fen:START,work:'Wie nennt man Reihe 1 und Reihe 8 noch?',answer:'Grundreihe. Dort stehen am Anfang die großen Figuren.',open:true,hints:['Dort stehen am Anfang Turm, Springer, Läufer, Dame und König.','Das Wort beginnt mit „Grund“.'],src:'Lumi Selbstlernkurs I, 4. Überprüfungsaufgabe',umgebaut:true},
// Woche 3: Turm und Läufer
'k1-8':{fen:'k7/8/8/4R3/8/8/8/7K w - - 0 1',work:'Der Turm steht auf e5. Zeige alle Felder, auf die er ziehen darf.',answer:'{n} Felder: die e-Linie und die 5. Reihe.',collectFrom:'e5',hints:['Der Turm zieht gerade.','Zähle die e-Linie und die 5. Reihe.'],src:'Lumi Selbstlernkurs I, Der Turm'},
'k1-13':{fen:'7k/8/8/8/4b3/8/8/K7 b - - 0 1',work:'Der schwarze Läufer steht auf e4. Zeige alle Felder, auf die er ziehen darf.',answer:'{n} Felder auf den beiden Diagonalen durch e4.',collectFrom:'e4',hints:['Der Läufer zieht schräg.','Folge beiden Diagonalen bis zum Rand.'],src:'Lumi Selbstlernkurs I, Der Läufer'},
'k1-43':{fen:'8/8/5k2/3B4/8/8/8/4K3 w - - 0 1',work:'Der Läufer steht auf d5. Zeige alle Felder, auf die er ziehen darf.',answer:'{n} Felder auf den beiden Diagonalen durch d5.',collectFrom:'d5',hints:['Der Läufer bleibt auf seiner Farbe.','Vier Richtungen: schräg nach oben und unten.'],src:'Lumi Selbstlernkurs I, Der Läufer'},
't1-3':{fen:'8/3p4/8/8/1P1R4/8/8/K6k w - - 0 1',work:'Auf wie viele Felder kann der weiße Turm ziehen? Schlagzüge zählen mit.',answer:'{n} Felder. Der eigene Bauer b4 bremst, den Bauern d7 darf er schlagen.',collectFrom:'d4',hints:['Eigene Figuren darf er nicht schlagen.','Zähle in alle vier Richtungen.'],src:'Lumi Test zu Kurs I, Aufgabe 3 (Könige ergänzt)'},
// Woche 4: Dame, König, Springer
'k1-5':{fen:'8/8/8/8/4k3/8/8/K7 b - - 0 1',work:'Der schwarze König steht auf e4. Zeige alle Felder, auf die er ziehen darf.',answer:'{n} Felder rund um e4.',collectFrom:'e4',hints:['Der König zieht ein Feld.','In jede Richtung: gerade und schräg.'],src:'Lumi Selbstlernkurs I, Der König'},
'k1-26':{fen:'k7/4P3/6P1/3P4/1n3P2/3P4/8/7K b - - 0 1',work:'Welche weißen Bauern kann der Springer b4 schlagen?',answer:'Die Bauern d3 und d5.',checks:['b4d3','b4d5'],hints:['Der Springer springt im L.','Zwei Felder gerade, eins zur Seite.'],src:'Lumi Selbstlernkurs I, Der Springer'},
't1-4':{fen:'8/1k1q4/1p6/8/8/3N4/5K2/8 w - - 0 1',work:'Von welchem sicheren Feld aus greift der Springer die Dame an?',answer:'Se5. Auf c5 schlägt der Bauer b6.',checks:['d3e5'],forbidden:['d3c5'],hints:['Von welchen Feldern greift ein Springer d7 an?','Prüfe, ob dort ein Bauer schlagen kann.'],src:'Lumi Test zu Kurs I, Aufgabe 4'},
't1-5':{fen:'8/4K3/1R6/8/8/2Q5/8/7k b - - 0 1',work:'Auf welches Feld müsste ein schwarzer Springer, um alle weißen Figuren anzugreifen?',answer:'d5. Von dort greift er b6, c3 und e7 an.',open:true,hints:['Suche ein Feld im L-Sprung zu b6.','Prüfe von dort auch c3 und e7.'],src:'Lumi Test zu Kurs I, Aufgabe 5 (schwarzer König ergänzt)',umgebaut:true},
// Woche 6: Figurenwerte und Tauschen
'k1-29':{fen:'8/4k3/8/4p3/3b4/8/3Q2K1/8 w - - 0 1',work:'Lohnt sich Dxd4?',answer:'Nein. Der Bauer e5 deckt den Läufer: Dxd4 exd4, Dame (9) gegen Läufer (3).',checks:[],forbidden:['d2d4'],strict:true,hints:['Wer schlägt zurück?','Rechne: Was gibst du, was bekommst du?'],src:'Lumi Selbstlernkurs I, Tauschen'},
'k1-48':{fen:'5rk1/4pp1p/3p2p1/8/8/4P2P/5PP1/3R2K1 w - - 0 1',work:'Lohnt sich Txd6?',answer:'Nein. Nach exd6 hat Weiß einen Turm (5) für einen Bauern (1) gegeben.',checks:[],forbidden:['d1d6'],strict:true,hints:['Ist der Bauer d6 gedeckt?','Schau auf den Bauern e7.'],src:'Lumi Selbstlernkurs I, Tauschen'},
't1-11':{fen:'5bk1/5ppp/8/N1r3Q1/8/8/5PPP/2B2K2 b - - 0 1',work:'Schwarz kann drei Figuren schlagen. Welche ist die beste?',answer:'Txg5: Die Dame ist 9 Punkte wert.',checks:['c5g5'],forbidden:['c5a5','c5c1'],hints:['Zähle die Werte: Springer, Dame, Läufer.','Die wertvollste Figur zuerst.'],src:'Lumi Test zu Kurs I, Aufgabe 11'},
'sg-0':{fen:'7k/3n4/8/8/1q1R1bp1/8/8/3R3K w - - 0 1',work:'Welche Figur sollte Weiß schlagen?',answer:'Die Dame: Txb4.',checks:['d4b4'],hints:['Welche Figuren kann der Turm d4 erreichen?','Die Dame ist 9 Punkte wert.'],src:'Lumi Übungsbuch, Wen schlagen? Aufgabe 1 (Könige ergänzt)'},
'sg-1':{fen:'r1bqkbnr/p1p2ppp/1pnp4/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 1',work:'Welche Figur sollte Weiß schlagen?',answer:'Den Springer: Lxc6+.',checks:['b5c6'],hints:['Welche Figur kann der Läufer b5 schlagen?','Der Springer c6 ist ungedeckt.'],src:'Lumi Übungsbuch, Wen schlagen? Aufgabe 2'},
'sg-2':{fen:'r2q1rk1/2p2ppp/pbnpbn2/1p1Pp1B1/4P3/2P2N2/PPB2PPP/RN1Q1RK1 w - - 0 1',work:'Welche Figur sollte Weiß schlagen?',answer:'Den Springer: dxc6. Nach dxe6 schlägt fxe6 zurück.',checks:['d5c6'],hints:['Der Bauer d5 schlägt schräg.','Welche Figur ist nicht gedeckt?'],src:'Lumi Übungsbuch, Wen schlagen? Aufgabe 3'},
'sg-4':{fen:'1kr1r3/pp3pp1/2pN3p/2P2b2/1P5P/P5P1/5P2/3R1RK1 w - - 0 1',work:'Welche Figur sollte Weiß schlagen?',answer:'Den Läufer: Sxf5.',checks:['d6f5'],hints:['Wohin springt der Springer d6?','Welche Figur ist nicht gedeckt?'],src:'Lumi Übungsbuch, Wen schlagen? Aufgabe 5'},
'sg-5':{fen:'3rr1k1/pp3pp1/7p/2n5/8/P3P3/5PPP/1R2R1K1 w - - 0 1',work:'Wer hat mehr Figuren, Weiß oder Schwarz?',answer:'Schwarz: Schwarz hat einen Springer mehr.',open:true,hints:['Zähle die Figuren beider Seiten.','Vergleiche Türme, Leichtfiguren und Bauern.'],src:'Lumi Übungsbuch, Wer führt? Aufgabe 1',umgebaut:true},
'sg-6':{fen:'6k1/pp3pp1/7p/2n5/3N4/P3PB2/5PPP/6K1 w - - 0 1',work:'Zeige die Mehrfigur.',answer:'Der Läufer f3: Weiß hat eine Figur mehr.',open:true,hints:['Bilde Paare: Springer gegen Springer.','Welche Figur bleibt übrig?'],src:'Lumi Übungsbuch, Wer führt? Aufgabe 2'},
'sg-7':{fen:'3Q4/2p2pqk/1p1n2b1/p7/2N4P/1P1B2P1/P1P4K/8 w - - 0 1',work:'Wer hat mehr Figuren, Weiß oder Schwarz? Welche Figur ist es?',answer:'Weiß hat einen Bauern mehr.',open:true,hints:['Zähle zuerst die großen Figuren.','Dann zähle die Bauern.'],src:'Lumi Übungsbuch, Wer führt? Aufgaben 3 und 4',umgebaut:true},
'sg-9':{fen:'r3r1k1/1p1q1bpp/1bpp1p2/p2P4/Q1P2N2/5P2/1P3BPP/2R1R1K1 w - - 0 1',work:'Wer hat mehr Figuren, Weiß oder Schwarz? Welche Figur ist es?',answer:'Schwarz hat einen Bauern mehr.',open:true,hints:['Die Figuren sind gleich.','Zähle die Bauern.'],src:'Lumi Übungsbuch, Wer führt? Aufgaben 5 und 6',umgebaut:true},
'sg-11':{fen:'6k1/3bb1P1/2p2nKp/p1Bp1P2/1p1P1NP1/1P3B2/P7/6r1 w - - 0 1',work:'Wer hat mehr Figuren, Weiß oder Schwarz? Welche Figur ist es?',answer:'Schwarz hat einen Turm mehr, Weiß hat mehr Bauern.',open:true,hints:['Bilde Paare gleicher Figuren.','Welche große Figur hat nur eine Seite?'],src:'Lumi Übungsbuch, Wer führt? Aufgaben 7 und 8',umgebaut:true},
'tx-F1':{fen:'r4rk1/2N2ppp/5n2/8/8/7P/5PP1/4RRK1 w - - 0 1',work:'Weiß kann Sxa8 spielen. Guter oder schlechter Tausch?',answer:'Guter Tausch: Springer (3) gegen Turm (5).',checks:['c7a8'],hints:['Was ist der Springer wert, was der Turm?','Kann Schwarz zurückschlagen? Was bleibt übrig?'],src:'Lumi Guter oder schlechter Tausch, Beispiel 1'},
'tx-F3':{fen:'4r1k1/4qppp/8/6n1/8/2N5/PPPQ4/2KR4 w - - 0 1',work:'Weiß kann Dxg5 spielen. Guter oder schlechter Tausch?',answer:'Schlechter Tausch: Dxg5 Dxg5, Dame (9) gegen Springer (3).',checks:[],forbidden:['d2g5'],strict:true,hints:['Wer deckt den Springer g5?','Rechne: 9 gegen 3.'],src:'Lumi Guter oder schlechter Tausch, Beispiel 2'},
'tx-F6':{fen:'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',work:'Weiß kann Sxe5 spielen. Guter oder schlechter Tausch?',answer:'Schlechter Tausch: Sxe5 Sxe5, Springer (3) gegen Bauer (1).',checks:[],forbidden:['f3e5'],strict:true,hints:['Wer deckt den Bauern e5?','Rechne: 3 gegen 1.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 1'},
'tx-F8':{fen:'3rr1k1/5ppp/8/8/8/8/PPP5/1KRQ4 w - - 0 1',work:'Weiß kann Dxd8 spielen. Guter oder schlechter Tausch?',answer:'Schlechter Tausch: Dxd8 Txd8, Dame (9) gegen Turm (5).',checks:[],forbidden:['d1d8'],strict:true,hints:['Wer deckt den Turm d8?','Rechne: 9 gegen 5.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 2'},
'tx-F10':{fen:'r1b1kbnr/pppp1ppp/2n1q3/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1',work:'Weiß kann Lxe6 spielen. Guter oder schlechter Tausch?',answer:'Guter Tausch: Läufer (3) gegen Dame (9).',checks:['c4e6'],hints:['Was ist die Dame wert?','Auch wenn Schwarz zurückschlägt: 3 gegen 9.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 3'},
'tx-F12':{fen:'r1b1kb1r/pp3ppp/1qn1p1n1/2ppP3/3P2Q1/1PPB4/P3NPPP/RNB1K2R w KQkq - 0 1',work:'Weiß kann Dxg6 spielen. Guter oder schlechter Tausch?',answer:'Schlechter Tausch: Dxg6 hxg6, Dame (9) gegen Springer (3).',checks:[],forbidden:['g4g6'],strict:true,hints:['Wer deckt den Springer g6?','Rechne: 9 gegen 3.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 4'},
'tx-F14':{fen:'rnbqkb1r/pp1ppppp/5n2/2p1P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',work:'Weiß kann exf6 spielen. Guter oder schlechter Tausch?',answer:'Guter Tausch: Bauer (1) gegen Springer (3).',checks:['e5f6'],hints:['Der Bauer schlägt schräg.','Rechne: 1 gegen 3.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 5'},
'tx-F16':{fen:'rn1qkb1r/ppp1nppp/3p4/4pb2/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1',work:'Weiß kann exf5 spielen. Guter oder schlechter Tausch?',answer:'Guter Tausch: Bauer (1) gegen Läufer (3).',checks:['e4f5'],hints:['Der Bauer e4 schlägt schräg.','Rechne: 1 gegen 3.'],src:'Lumi Guter oder schlechter Tausch, Aufgabe 6'},
// Woche 7: Schach
't1-7':{fen:'8/2k2p2/8/1P6/2N5/2P5/1K6/1Q6 w - - 0 1',work:'Welche weiße Figur kann den schwarzen König angreifen? Zeige den Zug.',answer:'b5-b6+: Der Bauer greift c7 schräg an.',checks:['b5b6'],hints:['Auch ein Bauer kann Schach geben.','Der Bauer schlägt schräg nach vorn.'],src:'Lumi Test zu Kurs I, Aufgabe 7'},
't1-9':{fen:'8/8/2n2k2/8/1b6/2K5/8/8 w - - 0 1',work:'Der Läufer b4 gibt Schach. Darf der König den Läufer schlagen?',answer:'Nein. Der Springer c6 deckt b4. Der König zieht weg.',forbidden:['c3b4'],allLegal:true,hints:['Wer deckt den Läufer?','Der König darf nie ins Schach ziehen.'],src:'Lumi Test zu Kurs I, Aufgabe 9',umgebaut:true},
'k1-45':{fen:'1n2kq2/4pppp/2B5/5b2/8/5N2/5PPP/5RK1 b - - 0 1',work:'Schwarz steht im Schach. Zeige eine Abwehr.',answer:'Sxc6 (schlagen), Sd7 oder Ld7 (dazwischen), Kd8 (wegziehen).',hints:['Wer gibt Schach?','Weg, Schlagen, Dazwischen.'],src:'Lumi Selbstlernkurs I, Schach'},
// Woche 8: Matt
't1-8':{fen:'3k4/8/2K5/8/8/7Q/1b6/8 w - - 0 1',work:'Setze mit einem Zug matt.',answer:'Dd7#. Der König c6 deckt die Dame.',checks:['h3d7'],hints:['Die Dame braucht Hilfe vom König.','Suche ein Feld neben dem schwarzen König.'],src:'Lumi Test zu Kurs I, Aufgabe 8'},
'k1-12':{fen:'6k1/5p1p/6p1/8/8/8/5PPP/4r1K1 w - - 0 1',work:'Weiß ist am Zug. Ist das Matt?',answer:'Ja. Der Turm e1 gibt Schach, die eigenen Bauern sperren den König ein. Grundreihenmatt.',open:true,hints:['Kann der König weg?','Kann etwas schlagen oder dazwischen?'],src:'Lumi Selbstlernkurs I, Schachmatt'},
'fl-1':{fen:'6k1/5ppp/8/5b2/8/7P/5PP1/3R2K1 b - - 0 1',work:'Weiß droht Td8. Mit welchem Zug verschafft sich Schwarz ein Fluchtfeld?',answer:'Kf8, f6 oder h5. Lg6 hilft nicht.',checks:['g8f8','f7f6','h7h5'],forbidden:['f5g6'],hints:['Wohin könnte der König nach Td8+ fliehen?','Ein Bauernzug kann ein Feld frei machen.'],src:'Lumi Fluchtfelder, Aufgabe 1'},
'fl-2':{fen:'4B1k1/5pbp/6p1/B2b4/7r/3R4/PPPP4/1K6 w - - 0 1',work:'Mit welchem Zug verschafft sich Weiß ein Fluchtfeld?',answer:'c3 oder c4. Danach kann der König nach c2.',checks:['c2c3','c2c4'],forbidden:['b1c1','d3h3'],hints:['Der König steht hinter seinen Bauern.','Welcher Bauer macht ein Feld frei?'],src:'Lumi Fluchtfelder, Aufgabe 2'},
// Woche 10: Wiederholung (Test zu Kurs I)
't1-10':{fen:'6k1/r2p2pp/4b3/N7/8/8/1P1R1P2/5K2 w - - 0 1',work:'Der Springer a5 wird vom Turm angegriffen. Wie rettest du ihn?',answer:'b2-b4: Der Bauer deckt den Springer.',checks:['b2b4'],hints:['Du musst nicht wegziehen.','Ein Bauer kann decken.'],src:'Lumi Test zu Kurs I, Aufgabe 10'},
't1-14':{fen:'1n6/k6p/8/PP2q3/8/5B2/2p2P2/3q1Q1K w - - 0 1',work:'Schwarz hat gerade d1=D gezogen. Wie bestrafst du das?',answer:'b5-b6#. Der Bauer gibt Schach, der König hat kein Feld.',checks:['b5b6'],hints:['Schau auf den schwarzen König.','Ein Bauernzug gibt Schach.'],src:'Lumi Test zu Kurs I, Aufgabe 14 (Stellung nach d1=D)'},
'k1-35':{fen:'6k1/5pp1/7p/4b3/3q4/8/PPP5/1KR5 b - - 0 1',work:'Schwarz am Zug setzt matt.',answer:'Dxb2#. Der Läufer e5 deckt b2.',checks:['d4b2'],hints:['Welche Figur hilft der Dame?','Der Läufer e5 zielt auf b2.'],src:'Lumi Selbstlernkurs I, Schachmatt'}
};
// Matt in einem Zug (Lumi „Matt in einem Zug“, 48 geprüfte Stellungen)
export const M1_WORK='Weiß setzt in einem Zug matt.';
export const M1_HINTS=['Welche Figur kann Schach geben?','Prüfe danach alle Fluchtfelder des Königs.'];
// Zwei Hilfen für Bronze-Aufgaben aus diplom-lessons.js, die dort noch keine Hilfen haben (Diplom-Tipps, wo vorhanden)
export const DL_HINTS={
'coordinates:6':['Erst der Buchstabe, dann die Zahl.','h1 ist hell. Zähle von dort aus.'],
'coordinates:7':['Ein Schachbrett hat 8 Reihen und 8 Linien.','Rechne 8 mal 8.'],
'coordinates:8':['Die Bauern stehen vor den großen Figuren.','Weiß unten, Schwarz oben.'],
'coordinates:9':['In den Ecken stehen die Türme.','Die Dame steht auf ihrer Farbe.'],
'coordinates:10':['Die Grundreihen sind die Startreihen der großen Figuren.','Weiß startet auf Reihe 1, Schwarz auf Reihe 8.'],
'coordinates:11':['Eine Diagonale verläuft schräg über gleichfarbige Felder.','Von a1 nach h8: a1, b2, c3 …'],
'coordinates:12':['Darüber heißt: Zahl plus eins.','Darunter heißt: Zahl minus eins.'],
'coordinates:13':['Suche erst die Linie, dann die Reihe.','c1 liegt in der weißen Grundreihe.'],
'moves:6':['Zwei Felder gerade, eins zur Seite.','Prüfe, ob b5 und c5 so erreichbar sind.'],
'moves:7':['Der König zieht ein Feld.','Eigene Figuren darf er nicht schlagen.'],
'moves:8':['Plane rückwärts: Von wo erreicht der Springer a8?','b6 und c7 sind Springerfelder vor a8.'],
'moves:9':['Welche Figur springt über andere?','Schau auf b1 und g1.'],
'moves:13':['Der Läufer zieht schräg, der Turm gerade.','Prüfe jede Frage einzeln.'],
'pawn:6':['Gerade ziehen, schräg schlagen.','Schau auf d5, c5 und e5.'],
'pawn:7':['Vom Startfeld darf der Bauer zwei Felder.','a2 und h2 stehen auf dem Startfeld.'],
'pawn:8':['Der Bauer zieht nur gerade.','Was steht auf e3?'],
'pawn:9':['Wohin ist vorn für Weiß?','Weiße Bauern schlagen nach oben.'],
'pawn:10':['Schwarze Bauern ziehen nach unten.','Auch sie schlagen schräg.'],
'pawn:11':['Ein Bauer zieht geradeaus, aber schlägt diagonal.','Von e4 aus schlägt er nach d5 und f5.'],
'exchange:6':['Wer schlägt zurück?','Rechne beide Schlagzüge.'],
'exchange:7':['Wer deckt den Turm?','Turm = 5 Punkte.'],
'exchange:8':['Wer deckt den Springer d5?','Turm 5 gegen Springer 3.'],
'exchange:9':['Dame = 9 Punkte.','Kann Schwarz zurückschlagen?'],
'exchange:10':['Zähle die Punkte beider Seiten.','Läufer 3, Bauer 1, Turm 5.'],
'check:6':['Weg, Schlagen, Dazwischen.','Kann der Springer auf die e-Linie?'],
'check:7':['Der Turm greift die ganze e-Linie an.','Gehe neben die e-Linie.'],
'check:8':['Der Turm zieht gerade.','Auf welcher Reihe steht der schwarze König?'],
'check:9':['Folge der e-Linie vom Turm zum König.','Steht etwas dazwischen?'],
'check:10':['Könige dürfen nie nebeneinander stehen.','Welche Felder greift der schwarze König an?'],
'mateIn1:6':['Nicht jedes Schach ist Matt.','Der weiße König hilft beim Einsperren.'],
'mateIn1:7':['Der König e6 nimmt Fluchtfelder weg.','Der Turm gibt Schach auf Reihe 8.'],
'mateIn1:8':['Prüfe die Fluchtfelder.','Stehen f7, g7, h7 frei?'],
'mateIn1:9':['Kann jemand den Turm schlagen?','Schau auf den Turm f8.'],
'fairplay:6':['Der König zieht ein Feld.','Erst ruhig erklären, dann zeigen.'],
'fairplay:7':['Wer verliert, darf traurig sein.','Wie bedankst du dich?'],
'fairplay:8':['Wer deckt die schwarze Dame?','Dame gegen Dame ohne Rückschlag.'],
'fairplay:9':['Ist das Schach oder Matt?','Was macht ihr am Ende jeder Partie?'],
'fairplay:10':['Berührt, geführt.','Sag es vorher laut.']};
