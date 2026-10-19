// Praxiswissen › Jahresplan: feste Stunden, so wie erfahrene Kolleginnen und Kollegen sie halten. Inhalt für ca. 45 Minuten, keine Zeitphasen.
// Phasen heißen „1. Phase (Einstieg)“ usw. Rechts stehen die Links: video, audio, blatt (extern), druck (Ausdruck aus der SchachStunde), feld (Lehrbrett mit Feldaufgaben), info.
// Feldaufgaben: Auf dem Lehrbrett Felder anklicken; Markierungen sind löschbar. targets = gesuchte Felder ([] = nichts markieren, null = offene Aufgabe).
// © Dr. Edmund Bruns
const HP='https://www.edmundbruns.com/schach/';
export const URLS={
brettvideo:'https://www.youtube.com/watch?v=vKapJK-OoNc',agkonzept:HP+'schachlehrende/ag-konzept/',entwuerfe:HP+'schachlehrende/stundenentwuerfe/',
online:'https://edmundbruns.github.io/Schach-grundregeln/',feldraten:'https://edmundbruns.github.io/feldraten/'};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const range=(files,ranks)=>[...files].flatMap(f=>[...ranks].map(r=>f+r));
export const FIXED={
1:{thema:'Ankommen und kennenlernen: Kennenlernspiel, Brett, Grundstellung und unsere AG-Regeln',
 lernziel:'Ich kenne die Regeln der AG, kann das Schachbrett richtig ausrichten und alle Figuren korrekt aufstellen.',
 leitfrage:'Wie stehen das Brett und die Figuren zu Beginn einer Partie richtig, und kann ich alle Felder des Schachbrettes richtig benennen?',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'AG-Konzept (Regeln), Stundenentwürfe, Erklärvideo „Schach erklärt: Das Schachbrett“ (Deutsche Schulschachstiftung), Arbeitsheft Schachbrett, Geschichte „Die Schachburg“',
 phasen:[
 {name:'Einstieg',titel:'Kennenlernspiel, AG-Regeln und Rituale, Erklärvideo zum Schachbrett',
  ablauf:['Kennenlernspiel „Wer bin ich, welche Figur bin ich?“: Alle stehen im Kreis. In einem Beutel liegen Schachfiguren. Jedes Kind zieht blind eine Figur, sagt seinen Namen und die Figur und macht eine passende Pose: Der König winkt königlich, der Turm steht stocksteif, der Springer hüpft, der Läufer läuft auf der Stelle, die Dame verbeugt sich, der Bauer schiebt eine Schubkarre. Alle antworten im Chor: „Hallo Mia, du Turm!“ Kennt ein Kind seine Figur noch nicht, hilft die Gruppe.',
   'AG-Regeln: Berührt, geführt. Losgelassen ist gezogen. Wir sprechen leise, an den Brettern wird nicht kommentiert. Vor und nach jeder Partie geben wir uns die Hand. Wer verliert, darf traurig sein, wer gewinnt, bleibt fair. Nach der Partie räumen wir das Brett vollständig auf.',
   'Rituale besprechen und einmal üben: Stopp-Signal: Du hebst den rechten Arm. Alle heben ebenfalls den Arm, schauen nach vorn, stellen das Spielen ein und lassen die Figuren los. Aufbau-Ritual: Rechts unten ist hell, die Dame steht auf ihrer Farbe, der Partner kontrolliert. Aufräum-Ritual: Je 16 Figuren zählen, dann einsortieren.',
   'Erklärvideo „Das Schachbrett“ zeigen. Danach am Lehrbrett A1 bis A3 gemeinsam lösen: Felder benennen, Reihe und Linie.'],
  kinder:'Ich stelle mich mit meiner Figur vor, kenne die AG-Regeln und reagiere auf das Stopp-Signal.',
  links:[{art:'video',label:'Erklärvideo „Das Schachbrett“',url:URLS.brettvideo},{art:'druck',label:'Plakat: AG-Regeln und Rituale',was:'regeln'},{art:'feld',label:'Lehrbrett: Schachbrett A1 bis A3',set:'A',bis:3},{art:'info',label:'AG-Konzept',url:URLS.agkonzept}]},
 {name:'Erarbeitung',titel:'Die Grundstellung: Geschichte „Die Schachburg“',
  ablauf:['Lies die Geschichte vor oder spiele sie ab. Baue dabei am Demobrett oder Lehrbrett Figur für Figur auf: erst die Türme, dann Springer, Läufer, Dame und König, zum Schluss die Bauern.','Die Kinder bauen auf ihrem eigenen Brett mit. Merksatz: „Rechts unten ist hell. Die Dame steht auf ihrer Farbe.“'],
  kinder:'Ich höre die Geschichte und baue die Figuren in der richtigen Reihenfolge auf.',
  links:[{art:'audio',label:'Geschichte anhören'},{art:'druck',label:'Geschichte zum Vorlesen',was:'geschichte'},{art:'feld',label:'Lehrbrett: Grundstellung aufbauen',set:'B'}]},
 {name:'Übung',titel:'Arbeitsheft Schachbrett und Fehler in der Grundstellung finden',
  ablauf:['Die Kinder arbeiten zu zweit im Arbeitsheft Schachbrett. Dieselben Aufgaben stehen am Lehrbrett (A1 bis A9) zum gemeinsamen Vergleichen.','Danach Fehlersuche am Lehrbrett (G1 bis G4): Liegt das Brett falsch herum? Sind Dame und König vertauscht? Stehen Läufer und Springer falsch? Die Kinder klicken die falschen Figuren an.'],
  kinder:'Ich löse das Arbeitsheft mit meinem Partner und finde Fehler in der Grundstellung.',
  links:[{art:'druck',label:'Arbeitsheft Schachbrett',was:'arbeitsheft'},{art:'feld',label:'Lehrbrett: Arbeitsheft A1 bis A9',set:'A'},{art:'druck',label:'Arbeitsblatt: Fehler in der Grundstellung',was:'grundstellung'},{art:'feld',label:'Lehrbrett: Fehler finden G1 bis G4',set:'G'}]},
 {name:'Sicherung',titel:'Fragen zur Geschichte',
  ablauf:['Stelle die Fragen zur Geschichte. Die Kinder antworten und zeigen am Lehrbrett die passenden Figuren (S1 bis S5).','Zum Schluss sprechen alle den Merksatz.'],
  kinder:'Ich beantworte die Fragen zur Geschichte und zeige die Figuren.',
  links:[{art:'feld',label:'Lehrbrett: Fragen zur Geschichte S1 bis S5',set:'S'}]},
 {name:'Lerncheck',titel:'Drei Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L3 allein. Am Lehrbrett kannst du die Lösungen anschließend gemeinsam zeigen.'],
  kinder:'Ich löse allein, ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'lerncheck'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L3',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Aufräum-Ritual und Ausblick',
  ablauf:['Stopp-Signal geben. Aufräum-Ritual: Jedes Paar zählt seine 32 Figuren, je 16 pro Farbe, und sortiert sie ein.','Ausblick: Nächstes Mal geht es mit den Feldern weiter, und wir spielen Schiffe versenken auf dem Schachbrett.'],
  kinder:'Ich zähle meine Figuren und räume vollständig auf.',
  links:[{art:'info',label:'Stundenentwürfe',url:URLS.entwuerfe}]}],
 geschichte:{titel:'Die Schachburg',text:['Stell dir eine mittelalterliche Burg vor. Wo stehen bei einer Burg die Türme? Genau, in den Ecken. Deshalb stehen auch auf dem Schachbrett die Türme in den Ecken.',
  'In den Türmen waren oft die Pferde untergebracht. Darum stehen die Springer, unsere Pferde, direkt neben den Türmen.',
  'Wie brachte man im Mittelalter schnell eine Nachricht von einem Ort zum anderen? Mit schnellen Läufern. Die Läufer stehen deshalb neben den Springern, immer bereit loszulaufen.',
  'Jetzt sind in der Mitte noch zwei Plätze frei. Dort wohnen die beiden, die in der Burg das Sagen haben: die Dame und der König. Die Dame steht auf ihrer eigenen Farbe. Die weiße Dame steht auf einem hellen Feld, die schwarze Dame auf einem dunklen.',
  'Alle Bewohner der Burg brauchen etwas zu essen. Dafür sorgen die Bauern. Weil viele satt werden müssen, gibt es acht Bauern. Sie stehen in einer Reihe direkt vor den anderen Figuren und beschützen die Burg.']},
 regeln:['Berührt, geführt. Losgelassen ist gezogen.','Wir sprechen leise, an den Brettern wird nicht kommentiert.','Vor und nach jeder Partie geben wir uns die Hand.','Wer verliert, darf traurig sein. Wer gewinnt, bleibt fair.','Nach der Partie räumen wir das Brett vollständig auf.'],
 rituale:[['Stopp-Signal','Die Lehrkraft hebt den rechten Arm. Alle heben den Arm, schauen nach vorn, hören auf zu spielen und lassen die Figuren los.'],['Aufbau-Ritual','Rechts unten ist hell. Die Dame steht auf ihrer Farbe. Der Partner kontrolliert.'],['Aufräum-Ritual','Je 16 Figuren zählen, dann einsortieren.']],
 arbeitsheft:[1,2,3,4,5,6].map(n=>'assets/jahresplan/schachbrett-'+n+'.jpg'),
 feld:{
 B:[{frage:'Erzähle die Geschichte und klicke dabei die Felder an: erst die Türme, dann Springer, Läufer, Dame und König, zum Schluss die Bauern. „Markierungen löschen“ macht das Brett wieder frei.',fen:START,targets:null,antwort:'Türme in den Ecken, daneben die Springer, daneben die Läufer, in der Mitte Dame und König, davor acht Bauern. Die Dame steht auf ihrer Farbe.',hilfe:['Die Türme stehen in den Ecken der Burg.','Die Dame steht auf ihrer Farbe.']}],
 A:[{frage:'Zeige f7 und b4. Erst kommt der Buchstabe, dann die Zahl.',targets:['f7','b4'],antwort:'f7: Linie f, Reihe 7. b4: Linie b, Reihe 4.',hilfe:['Suche zuerst den Buchstaben unten am Rand.','Gehe dann nach oben bis zur Zahl.'],seite:1},
  {frage:'Markiere die 7. Reihe.',targets:range('abcdefgh','7'),antwort:'Die 7. Reihe geht waagerecht von a7 bis h7.',hilfe:['Eine Reihe liegt waagerecht.','Tipp: Klicke auf die Zahl 7 am Rand.'],seite:2},
  {frage:'Markiere die g-Linie.',targets:range('g','12345678'),antwort:'Die g-Linie geht senkrecht von g1 bis g8.',hilfe:['Eine Linie steht senkrecht.','Tipp: Klicke auf den Buchstaben g am Rand.'],seite:2},
  {frage:'Markiere das Zentrum.',targets:['d4','e4','d5','e5'],antwort:'Das Zentrum sind die vier mittleren Felder d4, e4, d5 und e5.',hilfe:['Das Zentrum liegt genau in der Mitte.','Es sind vier Felder.'],seite:3},
  {frage:'Markiere die Diagonale von a5 nach d8.',targets:['a5','b6','c7','d8'],antwort:'a5, b6, c7, d8. Eine Diagonale läuft schräg über Felder gleicher Farbe.',hilfe:['Eine Diagonale läuft schräg.','Von a5 aus immer ein Feld nach rechts und eins nach oben.'],seite:3},
  {frage:'Markiere die Diagonale von f8 nach h6.',targets:['f8','g7','h6'],antwort:'f8, g7, h6.',hilfe:['Von f8 aus schräg nach rechts unten.','Es sind drei Felder.'],seite:3},
  {frage:'Markiere den Damenflügel.',targets:range('abcd','12345678'),antwort:'Der Damenflügel sind die a- bis d-Linie. Dort steht am Anfang die Dame.',hilfe:['Der Flügel hat seinen Namen von der Figur, die dort am Anfang steht.','Tipp: Klicke auf die Buchstaben a, b, c und d am Rand.'],seite:4},
  {frage:'Zeichne das Zentrum, vier Diagonalen, eine Reihe und zwei Linien ein. Benenne sie.',targets:null,antwort:'Offene Aufgabe: Jedes Kind zeigt und benennt seine Auswahl, zum Beispiel Zentrum d4, e4, d5, e5; Diagonale a1 bis h8; 3. Reihe; c-Linie und f-Linie.',hilfe:['Zentrum: die vier mittleren Felder.','Reihe waagerecht, Linie senkrecht, Diagonale schräg.'],seite:5},
  {frage:'Markiere a2, b6, h3, g5, f8, c4, c7, d1 und e6. Wie heißen die vier Zentrumsfelder?',targets:['a2','b6','h3','g5','f8','c4','c7','d1','e6'],antwort:'Die neun Felder sind markiert. Die Zentrumsfelder heißen d4, e4, d5 und e5.',hilfe:['Erst der Buchstabe, dann die Zahl.','Arbeite die Liste Feld für Feld ab.'],seite:6}],
 G:[{frage:'Wurde das Brett richtig hingelegt? Klicke das Eckfeld an, an dem du es erkennst.',fen:START,flip:true,targets:['h1'],antwort:'Nein. Rechts unten (h1) ist ein dunkles Feld. Das Brett muss gedreht werden, denn rechts unten ist hell.',hilfe:['Schau auf das Feld rechts unten.','Merksatz: Rechts unten ist hell.']},
  {frage:'Hier stimmt etwas nicht. Klicke alle Figuren an, die falsch stehen.',fen:'rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR',targets:['d1','e1','d8','e8'],antwort:'Dame und König sind vertauscht, bei Weiß und bei Schwarz. Die Dame steht auf ihrer Farbe: Die weiße Dame gehört auf d1, die schwarze auf d8.',hilfe:['Schau in die Mitte der Grundreihen.','Die Dame steht auf ihrer Farbe.']},
  {frage:'Hier stimmt etwas nicht. Klicke alle Figuren an, die falsch stehen.',fen:'rbnqknbr/pppppppp/8/8/8/8/PPPPPPPP/RBNQKNBR',targets:['b1','c1','f1','g1','b8','c8','f8','g8'],antwort:'Läufer und Springer sind vertauscht. Die Springer gehören neben die Türme, die Läufer neben die Springer.',hilfe:['Wer wohnt in der Burg direkt neben den Türmen?','Die Pferde (Springer) stehen neben den Türmen.']},
  {frage:'Ist hier alles richtig? Wenn nicht, klicke die falschen Figuren an. Wenn alles stimmt, drücke „Prüfen“ ohne Markierung.',fen:START,targets:[],antwort:'Alles richtig. Rechts unten ist hell, die Dame steht auf ihrer Farbe.',hilfe:['Prüfe zuerst das Feld rechts unten.','Prüfe dann Dame und König.']}],
 S:[{frage:'Wo stehen in einer Burg die Türme? Klicke alle Türme an.',fen:START,targets:['a1','h1','a8','h8'],antwort:'In den Ecken: a1, h1, a8 und h8.',hilfe:['Denk an eine Burg.','Die Türme stehen in den Ecken.']},
  {frage:'Wer wohnt in den Türmen und steht deshalb direkt daneben? Klicke die weißen Figuren an.',fen:START,targets:['b1','g1'],antwort:'Die Pferde, also die Springer: b1 und g1.',hilfe:['Wer war in den Türmen untergebracht?','Die Pferde heißen im Schach Springer.']},
  {frage:'Wer bringt schnell Nachrichten von einem Ort zum anderen? Klicke die weißen Figuren an.',fen:START,targets:['c1','f1'],antwort:'Die Läufer: c1 und f1. Sie stehen neben den Springern.',hilfe:['Sie laufen schnell.','Sie stehen neben den Springern.']},
  {frage:'Wer hat in der Burg das Sagen? Klicke die beiden weißen Figuren an.',fen:START,targets:['d1','e1'],antwort:'Dame (d1) und König (e1). Die Dame steht auf ihrer Farbe.',hilfe:['Es sind die zwei Figuren in der Mitte.','Die Dame steht auf ihrer Farbe.']},
  {frage:'Wer sorgt für das Essen, und wie viele sind es? Klicke alle schwarzen Figuren dieser Gruppe an.',fen:START,targets:range('abcdefgh','7'),antwort:'Die Bauern. Es sind acht, weil viele satt werden müssen. Sie stehen vor den anderen Figuren.',hilfe:['Wer baut das Essen an?','Sie stehen in einer Reihe vor den anderen Figuren.']}],
 L:[{frage:'Klicke alle Figuren an, die falsch stehen.',fen:'rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',targets:['d8','e8'],antwort:'Bei Schwarz sind Dame und König vertauscht. Die schwarze Dame gehört auf das dunkle Feld d8.',hilfe:['Vergleiche Weiß und Schwarz.','Die Dame steht auf ihrer Farbe.']},
  {frage:'Zeige e4, a8 und h1.',targets:['e4','a8','h1'],antwort:'e4: Linie e, Reihe 4. a8: oben links. h1: unten rechts, ein helles Feld.',hilfe:['Erst der Buchstabe, dann die Zahl.','h1 ist das Feld rechts unten.']},
  {frage:'Wo stehen die Läufer? Klicke alle vier Läufer an.',fen:START,targets:['c1','f1','c8','f8'],antwort:'c1, f1, c8 und f8. Sie stehen neben den Springern.',hilfe:['Die Läufer bringen Nachrichten.','Sie stehen neben den Springern.']}]}}
};
export const YEAR=[['Brett, Figuren, Schach und Matt',[1,11]],['Sonderregeln, Notation und erste Taktik',[12,26]],['Mattführung, Eröffnung und Endspiel',[27,36]]];
export const LATER=[
[12,'Legal oder illegal? Starke und schwache Figuren'],[13,'Bauernumwandlung und starke Bauern'],[14,'Die Rochade'],[15,'En passant'],[16,'Patt oder Matt?'],[17,'Weihnachtsturnier'],[18,'Notation: Züge lesen und schreiben'],[19,'Turnierregeln, Schachuhr, Partie mitschreiben'],[20,'Schulmeisterschaft'],[21,'Angreifen und decken'],[22,'Die Fesselung'],[23,'Gabel und Doppelangriff'],[24,'Der Spieß'],[25,'Abzug und Abzugsschach'],[26,'Wiederholung und Silber-Diplom'],
[27,'Gegenangriff statt Flucht'],[28,'Matt mit zwei Türmen'],[29,'Matt mit Dame und König'],[30,'Die Eröffnungsregeln'],[31,'Opfer und Damiano-Matt'],[32,'Das Grundreihenmatt'],[33,'Matt mit einem Turm'],[34,'Einfache Bauernendspiele'],[35,'Gold-Diplom und Abschlusstest'],[36,'Abschlussturnier und Urkunden']];
