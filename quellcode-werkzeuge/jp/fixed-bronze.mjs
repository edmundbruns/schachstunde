// Praxiswissen › Jahresplan: feste Stundenverläufe (45 Minuten), so wie erfahrene Kolleginnen und Kollegen die Stunde halten.
// Keine Auswahl. Jede Phase hat einen festen Inhalt und rechts die passenden Links.
// Link-Arten: video, blatt (Arbeitsblatt/Material extern), brett (Lehrbrett mit Aufgaben), druck (Arbeitsblatt oder Lerncheck aus der SchachStunde), info (Seite auf edmundbruns.com)
// © Dr. Edmund Bruns
const HP='https://www.edmundbruns.com/schach/';
export const URLS={
video:'https://app.lumi.education/run/f_DPeU',praesentation:'https://app.lumi.education/run/W24lfj',
heft:'https://ludgerusschule-rhede.de/wp-content/uploads/2025/01/Schach-lernen-Grundregeln-1-ausgabe.pdf',online:'https://edmundbruns.github.io/Schach-grundregeln/',loesungen:'https://edmundbruns.github.io/Schach-grundregeln/loesungen.html',
memory:'https://edmundbruns.github.io/schachmemory/',agkonzept:HP+'schachlehrende/ag-konzept/',entwuerfe:HP+'schachlehrende/stundenentwuerfe/',diplom:'https://ludgerus-schachdiplom.netlify.app/'};
export const FIXED={
1:{dauer:45,quelle:'Stundenentwürfe 1 und 8, AG-Konzept, Erklärvideo, Grundregeln (Präsentation und Arbeitsheft), Ludgerus-Schachdiplom Bronze 1',
 phasen:[
 {phase:'Einstieg',min:5,titel:'Erklärvideo: Die Figuren stellen sich vor',
  ablauf:'Zeige den Anfang des Erklärvideos „So ziehen die Figuren“. Danach fragst du: Welche Figuren kennt ihr schon?',
  kinder:'Ich nenne eine Figur, die ich schon kenne.',
  links:[{art:'video',label:'Erklärvideo',url:URLS.video},{art:'blatt',label:'Arbeitsheft Grundregeln (PDF)',url:URLS.heft},{art:'brett',label:'Lehrbrett: Grundstellung',aufgaben:['dl:coordinates:0']}]},
 {phase:'Erarbeitung',min:10,titel:'Brett richtig hinlegen, Grundstellung aufbauen',
  ablauf:'Zeige mit der Präsentation das Schachbrett und die Grundstellung. Merksatz: „Rechts unten ist hell.“ Am Lehrbrett nacheinander E1 bis E4, die Kinder legen ihr Brett nach.',
  kinder:'Ich lege mein Brett richtig hin und baue Reihe für Reihe auf.',
  links:[{art:'video',label:'Präsentation Grundregeln',url:URLS.praesentation},{art:'brett',label:'Lehrbrett E1 bis E4',aufgaben:['dl:coordinates:0','dl:coordinates:1','dl:coordinates:9','dl:coordinates:8']}]},
 {phase:'Übung',min:15,titel:'Aufbau-Ritual zu zweit, dann Arbeitsblatt',
  ablauf:'Aufbau-Ritual: Rechts unten hell, Dame auf ihre Farbe, der Partner kontrolliert. Jedes Paar baut dreimal auf und ab. Danach das Arbeitsblatt mit sechs Aufgaben, Hilfekarten liegen verdeckt bereit.',
  kinder:'Ich baue auf, mein Partner prüft. Dann löse ich das Arbeitsblatt.',
  links:[{art:'druck',label:'Arbeitsblatt Woche 1',was:'blatt'},{art:'blatt',label:'Grundregeln online',url:URLS.online},{art:'brett',label:'Lehrbrett U1 bis U6',aufgaben:'arbeitsblatt'}]},
 {phase:'Sicherung',min:5,titel:'Zwei Merksätze und ein Fehlerbild',
  ablauf:'Merksätze an die Tafel: „Rechts unten ist hell. Die Dame steht auf ihrer Farbe.“ Vertausche am Demobrett König und Dame. Wer findet den Fehler?',
  kinder:'Ich finde den Fehler und schreibe die Merksätze ab.',
  links:[{art:'brett',label:'Lehrbrett: Grundreihen',aufgaben:['dl:coordinates:10','dl:coordinates:7']}]},
 {phase:'Lerncheck',min:5,titel:'Drei Fragen allein',
  ablauf:'Jedes Kind beantwortet L1 bis L3 allein. Sammle die Zettel ein, sie zeigen dir, wer die Grundstellung sicher kann.',
  kinder:'Ich löse allein, ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'lerncheck'},{art:'brett',label:'Lehrbrett L1 bis L3',aufgaben:'lerncheck'}]},
 {phase:'Abschluss und Ausblick',min:5,titel:'AG-Regeln und Aufräum-Ritual',
  ablauf:'Lies die fünf AG-Regeln vor: berührt, geführt; leise sprechen; Hand geben; fair bleiben; aufräumen. Aufräum-Ritual: je 16 Figuren zählen, dann einsortieren. Ausblick: Nächstes Mal bekommt jedes Feld einen Namen.',
  kinder:'Ich zähle meine 16 Figuren und räume auf.',
  links:[{art:'info',label:'AG-Konzept (Regeln)',url:URLS.agkonzept},{art:'info',label:'Stundenentwürfe',url:URLS.entwuerfe}]}]}
};
// Übersicht aller 36 Termine (freigegebene Jahresübersicht)
export const YEAR=[
['Brett, Figuren, Schach und Matt',[1,11]],['Sonderregeln, Notation und erste Taktik',[12,26]],['Mattführung, Eröffnung und Endspiel',[27,36]]];
export const LATER=[
[12,'Legal oder illegal? Starke und schwache Figuren'],[13,'Bauernumwandlung und starke Bauern'],[14,'Die Rochade'],[15,'En passant'],[16,'Patt oder Matt?'],[17,'Weihnachtsturnier'],[18,'Notation: Züge lesen und schreiben'],[19,'Turnierregeln, Schachuhr, Partie mitschreiben'],[20,'Schulmeisterschaft'],[21,'Angreifen und decken'],[22,'Die Fesselung'],[23,'Gabel und Doppelangriff'],[24,'Der Spieß'],[25,'Abzug und Abzugsschach'],[26,'Wiederholung und Silber-Diplom'],
[27,'Gegenangriff statt Flucht'],[28,'Matt mit zwei Türmen'],[29,'Matt mit Dame und König'],[30,'Die Eröffnungsregeln'],[31,'Opfer und Damiano-Matt'],[32,'Das Grundreihenmatt'],[33,'Matt mit einem Turm'],[34,'Einfache Bauernendspiele'],[35,'Gold-Diplom und Abschlusstest'],[36,'Abschlussturnier und Urkunden']];
