// Woche 5 „Der Bauer“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,bauerVideo:'https://www.youtube.com/watch?v=4eeLF8g6xPw',bauernGegenKoenig:'https://www.youtube.com/watch?v=e3eFR_N4ZEA'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
const L=l=>l.split(' ');
F[5]={thema:'Der Bauer (mit einem ersten Blick auf die Umwandlung)',
 lernziel:'Ich kann Bauernzug, Doppelschritt und Schlagen unterscheiden und weiß, was auf der letzten Reihe passiert.',
 leitfrage:'Warum ist der Bauer die einzige Figur, die anders zieht, als sie schlägt?',
 vorwissen:'Alle anderen Figuren ziehen und schlagen (Woche 3 und 4).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Erklärvideo „Schach erklärt: Der Bauer“ und Minispiel „Bauern gegen König“ (Deutsche Schulschachstiftung), Minispiel „Bauernkrieg“ (verbreitete Spielform im Schulschach). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Springer und König wiederholen, die Bauern finden',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 die Fehler aus Woche 4 aufgreifen: Springersprünge, der König neben einem angegriffenen Feld, die Dame beim Schlagen.',
   'W5 und W6: Wo stehen die Bauern, und wohin wollen sie? Ziel nennen: „Heute lernt ihr die letzte Figur, den Bauern. Er ist klein, aber er kann sich in eine Dame verwandeln.“'],
  kinder:'Ich ziehe Springer und König richtig und zeige, wohin die Bauern wollen.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Erklärvideo, dann ziehen, Doppelschritt, schlagen, umwandeln',
  ablauf:['Erklärvideo „Der Bauer“ zeigen.',
   'Am Lehrbrett E1 bis E6 gemeinsam: ein Feld vorwärts, Doppelschritt nur beim ersten Zug, schräg schlagen, nie rückwärts. Schwarz zieht nach unten. Auf der letzten Reihe wird der Bauer umgewandelt.',
   'Merksatz: „Der Bauer zieht gerade nach vorn und schlägt schräg nach vorn. Auf der letzten Reihe wird er zur Dame, zum Turm, Läufer oder Springer.“'],
  kinder:'Ich zeige Zug, Doppelschritt und Schlagen des Bauern.',
  links:[{art:'video',label:'Erklärvideo „Der Bauer“',url:URLS.bauerVideo},{art:'feld',label:'Lehrbrett: Der Bauer E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Schlägt er oder nicht? Zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen weißen Bauern und zwei schwarze Figuren auf. Kind B sagt, welche Figur der Bauer schlagen kann und warum. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich erkenne, wohin ein Bauer ziehen und was er schlagen kann.',
  links:[{art:'druck',label:'Arbeitsblatt: Der Bauer',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: Doppelschritt später im Spiel, geradeaus schlagen, schräg ziehen ohne zu schlagen, Richtung von Schwarz, Umwandlung.',
   'Bei jeder Aufgabe nachfragen: „Warum darf der Bauer das nicht?“ oder „Woran erkennst du das?“ Alle sprechen den Merksatz.'],
  kinder:'Ich kann erklären, warum ein Bauernzug nicht erlaubt ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Doppelschritt und ein Schlagen mit dem Bauern zeigen. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich ziehe und schlage mit dem Bauern ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Bauernkrieg“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind stellt nur seine acht Bauern auf. Abwechselnd ziehen, mit allen Bauernregeln. Wer zuerst einen Bauern auf die letzte Reihe bringt, gewinnt. Kann eine Seite nicht mehr ziehen, gewinnt die andere. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Wer schnell fertig ist, spielt die Variante „Bauern gegen König“: Ein Kind hat drei Bauern, das andere nur einen König, der die Bauern aufhalten will.',
   'Rückblick: „Was macht der Bauer anders als alle anderen Figuren?“ Aufräum-Ritual. Ausblick: Nächstes Mal greifen wir an und decken unsere Figuren.'],
  kinder:'Ich ziehe und schlage im Spiel mit den Bauern richtig.',
  links:[{art:'video',label:'Variante „Bauern gegen König“ (Video)',url:URLS.bauernGegenKoenig}]}],
 hinweise:{hilfe:'Mit dem Finger zeigen: gerade nach vorn ziehen, schräg nach vorn schlagen. Für Schwarz das Brett gedanklich drehen.',
  zusatz:'Im Bauernkrieg nur mit drei Bauern pro Seite spielen und vorher planen: Welcher Bauer kommt zuerst durch? Oder die Variante „Bauern gegen König“.',
  kuerzen:'Die Partnerübung entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Bauernkrieg wird mit vier Bauern pro Seite gespielt.'},
 nachher:'Wer schlägt noch geradeaus oder macht später einen Doppelschritt? Wer lässt Schwarz nach oben ziehen? Diese Fehler greifst du in Woche 6 beim Angreifen und Decken wieder auf.',
 feld:{
 W:[T('Markiere alle Felder, auf die der Springer auf c3 springen kann.',{c3:'N'},null,'8 Felder: a2, a4, b1, b5, d1, d5, e2 und e4.',['Zwei gerade, eins zur Seite.','Der Springer springt im Kreis um sein Feld.'],{leer:true,pruef:{zuege:'c3'}}),
  T('Wohin kann der Springer auf g1 in der Grundstellung springen? Markiere die Felder.',START,null,'f3 und h3. Auf e2 steht ein eigener Bauer.',['Zwei nach vorn, eins zur Seite.','Über die Bauern darf er springen.'],{leer:true,pruef:{zuege:'g1'}}),
  T('Auf welche Nachbarfelder darf der König nicht, weil der schwarze Springer sie angreift? Markiere sie.',{e1:'K',e3:'n'},null,'d1 und f1. Der Springer auf e3 greift diese beiden Felder an. d2, e2 und f2 sind sicher.',['Zeige zuerst alle Springerfelder von e3.','Welche davon liegen neben dem König?'],{leer:true,pruef:{verboten:'e1'}}),
  T('Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an.',{d4:'Q',d7:'r',a7:'n',g7:'b',b4:'p',h8:'r'},null,'d7, a7, g7 und b4. Der Turm auf h8 steht hinter dem Läufer.',['Acht Richtungen prüfen.','In jeder Richtung zählt nur die erste Figur.'],{pruef:{schlaege:['d4']}}),
  T('Klicke alle weißen Bauern an. Wie viele sind es?',START,L('a2 b2 c2 d2 e2 f2 g2 h2'),'Acht Bauern auf der 2. Reihe.',['Sie stehen vor den anderen Figuren.','Tipp: Klicke auf die 2 am Rand.']),
  T('Ein weißer Bauer, der die letzte Reihe erreicht, wird umgewandelt. Markiere diese Reihe.',{e2:'P'},L('a8 b8 c8 d8 e8 f8 g8 h8'),'Die 8. Reihe. Für Schwarz ist es die 1. Reihe.',['Weiß zieht nach oben.','Tipp: Klicke auf die 8 am Rand.'],{leer:true})],
 E:[T('Der Bauer steht noch auf seinem Startfeld e2. Markiere alle Felder, auf die er ziehen kann.',{e2:'P'},null,'e3 und e4. Beim ersten Zug darf ein Bauer ein oder zwei Felder vorwärts ziehen.',['Vom Startfeld gibt es den Doppelschritt.','Nur gerade nach vorn.'],{leer:true,pruef:{zuege:'e2'}}),
  T('Der Bauer hat schon gezogen und steht auf e3. Markiere alle Felder, auf die er jetzt ziehen kann.',{e3:'P'},null,'Nur e4. Den Doppelschritt gibt es nur beim ersten Zug.',['Der Bauer ist nicht mehr auf seinem Startfeld.','Jetzt nur noch ein Feld.'],{leer:true,pruef:{zuege:'e3'}}),
  T('Vor dem weißen Bauern steht ein schwarzer Bauer. Wohin kann der weiße Bauer ziehen?',{d4:'P',d5:'p'},null,'Nirgendwohin. Geradeaus darf er nicht schlagen, und schräg steht nichts. Drücke „Prüfen“ ohne Markierung.',['Geradeaus wird nicht geschlagen.','Steht schräg vor ihm eine Figur?'],{leer:true,pruef:{zuege:'d4'}}),
  T('Markiere alle Felder, auf die der Bauer auf d4 ziehen kann.',{d4:'P',c5:'n',e5:'b',d5:'p'},null,'c5 und e5. Er schlägt schräg nach vorn den Springer oder den Läufer. Geradeaus ist er blockiert.',['Der Bauer schlägt schräg nach vorn.','Auf d5 kommt er nicht.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Das ist ein schwarzer Bauer auf seinem Startfeld. Markiere alle Felder, auf die er ziehen kann.',{f7:'p'},null,'f6 und f5. Schwarz zieht nach unten, auch mit Doppelschritt.',['Schwarz spielt von oben nach unten.','Vom Startfeld gibt es den Doppelschritt.'],{leer:true,pruef:{zuege:'f7'}}),
  T('Wohin kann der Bauer auf b7 ziehen? Markiere das Feld. Was passiert dort?',{b7:'P'},null,'b8. Dort wird er umgewandelt, meist in eine Dame. Erlaubt sind auch Turm, Läufer oder Springer.',['Ein Feld vorwärts.','Auf der letzten Reihe bleibt er kein Bauer.'],{leer:true,pruef:{zuege:'b7'}})],
 A:[T('Markiere alle Felder, auf die der Bauer auf c2 ziehen kann.',{c2:'P',c4:'p'},null,'Nur c3. Der Doppelschritt geht nicht, weil auf c4 ein schwarzer Bauer steht.',['Ist der Weg für den Doppelschritt frei?','Der Bauer schlägt nie geradeaus.'],{leer:true,pruef:{zuege:'c2'}}),
  T('Markiere alle Felder, auf die der Bauer auf e4 ziehen kann.',{e4:'P',d5:'r',f5:'P'},null,'e5 und d5. Auf d5 schlägt er den Turm. Den eigenen Bauern auf f5 schlägt er nicht.',['Gerade nach vorn ist frei.','Schräg nur gegnerische Figuren schlagen.'],{leer:true,pruef:{zuege:'e4'}}),
  T('Welche schwarzen Figuren können die weißen Bauern schlagen? Klicke sie an.',{b2:'P',c3:'n',a3:'p',f4:'P',g5:'b',e5:'r',h4:'P',h5:'q'},null,'c3, a3, g5 und e5. Die Dame auf h5 steht gerade vor dem Bauern auf h4, die kann er nicht schlagen.',['Jeder Bauer schlägt schräg nach vorn.','Geradeaus wird nie geschlagen.'],{pruef:{schlaege:['b2','f4','h4']}}),
  T('Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.',{d7:'p',c6:'N',e6:'B',d6:'P'},null,'c6 und e6. Er schlägt schräg nach unten den Springer oder den Läufer. Geradeaus ist d6 besetzt.',['Schwarz zieht nach unten.','Er schlägt schräg nach vorn, also nach unten.'],{leer:true,pruef:{zuege:'d7'}}),
  T('Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.',{a2:'P',c2:'P',c3:'p',e3:'P',g2:'P',g4:'p',h2:'P'},null,'a2 und h2. c2 ist blockiert, e3 hat schon gezogen, und für g2 ist g4 besetzt.',['Nur vom Startfeld auf der 2. Reihe.','Beide Felder davor müssen frei sein.'],{pruef:{doppelschritt:true}}),
  T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{b7:'P',d7:'P',d8:'r',c8:'n',f6:'P'},null,'b7 und d7. b7 zieht nach b8. d7 ist geradeaus blockiert, schlägt aber den Springer auf c8 und wird dabei umgewandelt.',['Welche Bauern stehen auf der 7. Reihe?','Auch beim Schlagen auf die letzte Reihe wird umgewandelt.'],{pruef:{umwandeln:true}})],
 S:[T('Ein Kind zieht den Bauern von d3 nach d5. Das ist falsch. Markiere, wohin er wirklich darf.',{d3:'P'},null,'Nur d4. Der Bauer hat schon gezogen, den Doppelschritt gibt es nur vom Startfeld.',['Steht der Bauer auf seinem Startfeld?','Jetzt nur noch ein Feld.'],{leer:true,pruef:{zuege:'d3'}}),
  T('Ein Kind schlägt mit dem Bauern auf e4 den Bauern auf e5. Darf es das? Markiere, wohin der Bauer wirklich kann.',{e4:'P',e5:'p',d5:'n'},null,'Nur d5. Geradeaus schlägt der Bauer nie. Den Springer auf d5 schlägt er schräg.',['Geradeaus wird nicht geschlagen.','Schräg vor ihm steht eine Figur.'],{leer:true,pruef:{zuege:'e4'}}),
  T('Ein Kind zieht den Bauern von c4 schräg nach d5, obwohl dort nichts steht. Markiere, wohin der Bauer wirklich kann.',{c4:'P'},null,'Nur c5. Schräg geht der Bauer nur, wenn er dort etwas schlägt.',['Schräg nur beim Schlagen.','Sonst immer gerade.'],{leer:true,pruef:{zuege:'c4'}}),
  T('Welcher Bauer zieht nach unten? Klicke ihn an. Woran erkennst du das?',{g7:'p',g2:'P'},['g7'],'Der schwarze Bauer auf g7. Schwarz spielt von oben nach unten, Weiß von unten nach oben.',['Welche Farbe hat der Bauer?','Schwarz steht oben.']),
  T('Markiere das Feld, auf dem der Bauer umgewandelt wird. In welche Figuren darf er sich verwandeln?',{a7:'P'},null,'a8. Er wird zur Dame, zum Turm, Läufer oder Springer. König oder Bauer sind nicht erlaubt.',['Ein Feld vorwärts auf die letzte Reihe.','Vier Figuren sind erlaubt.'],{leer:true,pruef:{zuege:'a7'}}),
  T('Welche weißen Bauern sind blockiert und können gar nicht ziehen? Klicke sie an.',{b4:'P',b5:'p',e3:'P',e4:'N',g4:'P',g5:'p',h5:'r'},null,'b4 und e3. Der Bauer auf g4 kommt zwar nicht geradeaus weiter, kann aber den Turm auf h5 schlagen.',['Ist das Feld davor frei?','Kann er schräg etwas schlagen?'],{pruef:{blockiert:true}})],
 L:[T('Markiere alle Felder, auf die der Bauer auf h2 ziehen kann.',{h2:'P'},null,'h3 und h4. Vom Startfeld aus darf er ein oder zwei Felder ziehen.',['Steht er auf seinem Startfeld?','Nur gerade nach vorn.'],{leer:true,pruef:{zuege:'h2'}}),
  T('Markiere alle Felder, auf die der Bauer auf b5 ziehen kann.',{b5:'P',a6:'n',c6:'p',b6:'B'},null,'a6 und c6. Er schlägt schräg. Geradeaus steht der eigene Läufer.',['Gerade ist besetzt.','Schräg vor ihm stehen schwarze Figuren.'],{leer:true,pruef:{zuege:'b5'}}),
  T('Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.',{e7:'p',e5:'P'},null,'Nur e6. Für den Doppelschritt müsste e5 frei sein.',['Schwarz zieht nach unten.','Ist der Weg bis e5 frei?'],{leer:true,pruef:{zuege:'e7'}}),
  T('Welche schwarzen Figuren können die weißen Bauern schlagen? Klicke sie an.',{c3:'P',d4:'n',b4:'p',g2:'P',h3:'b',f3:'N'},null,'d4, b4 und h3. Den eigenen Springer auf f3 schlägt der Bauer nicht.',['Jeder Bauer schlägt schräg nach vorn.','Nur gegnerische Figuren.'],{pruef:{schlaege:['c3','g2']}}),
  T('Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.',{b2:'P',d2:'P',d3:'p',f3:'P',h2:'P',h4:'p'},null,'Nur b2. d2 ist blockiert, f3 hat schon gezogen, und für h2 ist h4 besetzt.',['Startfeld auf der 2. Reihe?','Beide Felder davor frei?'],{pruef:{doppelschritt:true}}),
  T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{g7:'P',c7:'P',c8:'r',b8:'n',e6:'P'},null,'g7 und c7. c7 schlägt den Springer auf b8. Der Bauer auf e6 ist noch zwei Felder entfernt.',['Welche Bauern stehen auf der 7. Reihe?','Auch Schlagen auf die letzte Reihe zählt.'],{pruef:{umwandeln:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 5 geschrieben');
