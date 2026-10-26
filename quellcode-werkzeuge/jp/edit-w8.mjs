// Woche 8 „Schach und Matt“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,schachzwang:'https://www.youtube.com/watch?v=FJQpIInED9g'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
const DIP='Ludgerus-Schachdiplom Bronze 3',M1='Lumi Matt in einem Zug';
F[8]={thema:'Schach und Matt',
 lernziel:'Ich kann ein Schach auf drei Arten abwehren und ein Matt in einem Zug finden.',
 leitfrage:'Wie rette ich meinen König aus dem Schach, und wann ist er nicht mehr zu retten?',
 vorwissen:'Angreifen, decken und Tauschen (Woche 6 und 7).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Bronze 3, Lumi „Matt in einem Zug“, Lumi Selbstlernkurs I und Test zu Kurs I (über die Lumi-Sammlung von edmundbruns.com), Minispiel „Schachzwang“ (Deutsche Schulschachstiftung). Fluchtfelder, Abwehrzüge und Matts mit einem Schachprogramm (chess.js) nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Tauschen wiederholen, den König angreifen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W3 das Rechnen aus Woche 7 aufgreifen: Was bekomme ich, wer schlägt zurück?',
   'W4 bis W6: Der König ist unbezahlbar. Wer greift ihn an? Ziel nennen: „Heute lernt ihr, wie ihr euren König aus dem Schach rettet und wann er Matt ist.“'],
  kinder:'Ich rechne einen Tausch und erkenne, wer den König angreift.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Drei Rettungen aus dem Schach, dann Matt',
  ablauf:['Am Lehrbrett E1 bis E3 die drei Rettungen zeigen: Der König zieht weg, eine Figur stellt sich dazwischen, oder der Angreifer wird geschlagen. Die Kinder zeigen jede Rettung am eigenen Brett.',
   'E4 bis E6: Gibt es keine Rettung, ist der König Matt, und die Partie ist zu Ende. Nicht jedes Schach ist Matt.',
   'Merksatz: „Schach: Wegziehen, Dazwischenstellen, Schlagen. Geht nichts davon, ist es Matt.“'],
  kinder:'Ich zeige die drei Rettungen und erkläre, wann es Matt ist.',
  links:[{art:'feld',label:'Lehrbrett: Schach und Matt E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Schach-Retter zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen weißen König und eine schwarze Figur, die Schach gibt, dazu eine weitere weiße Figur. Kind B findet alle Rettungen und nennt die Art: wegziehen, dazwischenstellen oder schlagen. Danach wechseln die Rollen.',
   'Frage zwischendurch: „Warum kann man sich gegen ein Springerschach nicht dazwischenstellen?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich finde alle Rettungen aus dem Schach und löse das Arbeitsblatt.',
  links:[{art:'druck',label:'Arbeitsblatt: Schach und Matt',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: den König im Schach weiterziehen lassen, gegen ein Springerschach dazwischenstellen wollen, Schach für Matt halten, mit dem König eine gedeckte Figur schlagen.',
   'Bei jeder Aufgabe nachfragen: „Warum ist das kein Matt?“ oder „Woran erkennst du, dass der König nicht mehr fliehen kann?“ Alle sprechen den Merksatz.'],
  kinder:'Ich kann begründen, ob ein König im Schach oder Matt ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett eine Rettung aus dem Schach zeigen und fragst: „Welche Art ist das?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich wehre ein Schach ab und finde ein Matt in einem Zug ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Schachzwang“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit mit wenigen Figuren: Jedes Kind hat König, Turm, Läufer und drei Bauern auf den Startfeldern. Es gelten alle Regeln, dazu eine Sonderregel: Wer Schach geben kann, muss Schach geben. Wer mattsetzt, gewinnt. Nach zehn Minuten gewinnt, wer mehr Punkte geschlagen hat. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Rückblick: „Welche drei Rettungen gibt es aus dem Schach?“ Aufräum-Ritual. Ausblick: Nächstes Mal spielt ihr eure erste ganze Partie.'],
  kinder:'Ich rette meinen König im Spiel aus jedem Schach.',
  links:[{art:'video',label:'Minispiel „Schachzwang“ (Video)',url:URLS.schachzwang}]}],
 hinweise:{hilfe:'Die drei Rettungen als Karte neben das Brett legen: wegziehen, dazwischenstellen, schlagen. Für jede Rettung einzeln prüfen.',
  zusatz:'Eine eigene Stellung bauen, in der der König im Schach steht und genau eine Rettung hat. Der Partner findet sie.',
  kuerzen:'Die Partnerübung entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Schachzwang dauert nur fünf Minuten.'},
 nachher:'Wer lässt den König im Schach stehen? Wer hält jedes Schach für Matt? Die drei Rettungen greifst du in Woche 9 vor der ersten ganzen Partie wieder auf.',
 feld:{
 W:[T('Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.','4k3/8/p7/1p1b4/8/2N5/8/4K3',null,'Den Läufer d5, er ist ungedeckt: plus 3. Den Bauern b5 deckt der Bauer a6.',['Welche Figuren erreicht der Springer?','Wer schlägt jeweils zurück?'],{pruef:{gewinn:'w'}}),
  T('Weiß könnte mit dem Turm den Turm d6 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.','4k3/2p5/3r4/8/8/8/8/3RK3',null,'Der Bauer c7. Turm gegen Turm, 5 gegen 5: ein gleicher Tausch.',['Wer deckt den Turm d6?','Der Bauer schlägt schräg nach unten.'],{pruef:{verteidiger:'d6'},tausch:{zug:'d1d6',ergebnis:'gleich'}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an.','6k1/5ppp/8/3q4/8/2n5/1B6/3R2K1',null,'Die Dame d5, sie ist ungedeckt: plus 9. Der Springer c3 brächte nur 3.',['Welche schwarzen Figuren kann Weiß schlagen?','Welche ist am meisten wert?'],{pruef:{beste:'w'}}),
  T('Klicke die beiden Könige an. Wie viele Punkte ist ein König wert?',START,['e1','e8'],'e1 und e8. Der König ist unbezahlbar. Wer ihn nicht mehr retten kann, verliert die Partie.',['Der König steht neben der Dame.','Er steht auf der e-Linie.']),
  T('Steht der weiße König im Schach? Klicke die Figur an, die Schach gibt.','4r2k/8/8/8/8/8/8/4K3',null,'Ja. Der Turm e8 greift den König über die e-Linie an.',['Prüfe jede schwarze Figur.','Ist der Weg zum König frei?'],{quelle:DIP+', Aufgabe 2',schach:true,pruef:{schachgeber:true}}),
  T('Schwarz ist am Zug. Steht der schwarze König im Schach? Klicke die Figur an, die Schach gibt. Wenn keine, drücke „Prüfen“ ohne Markierung.','4k3/4p3/8/8/8/8/8/4R1K1',null,'Nein. Der Bauer e7 steht zwischen Turm und König.',['Fahre die e-Linie vom Turm aus hoch.','Was steht im Weg?'],{quelle:DIP+', Aufgabe 1',zug:'b',pruef:{schachgeber:true}})],
 E:[T('Rettung 1, wegziehen: Der Turm d8 gibt Schach. Markiere alle sicheren Felder für den König.','3r3k/8/8/8/8/8/8/3K4',null,'c1, c2, e1 und e2. Die ganze d-Linie bleibt angegriffen.',['Der König muss die d-Linie verlassen.','Zeige alle Nachbarfelder.'],{quelle:DIP+', Aufgabe 5',schach:true,leer:true,pruef:{flucht:true}}),
  T('Rettung 2, dazwischenstellen: Der Turm e8 gibt Schach. Markiere die Felder, auf die der Läufer ziehen kann, um den Angriff zu sperren.','4r2k/8/8/8/2B5/8/8/4K3',null,'e2 und e6. Dort steht der Läufer zwischen Turm und König. Sicher ist nur e2, dort deckt ihn der König. Auf e6 schlägt der Turm den Läufer.',['Der Läufer muss auf die e-Linie.','Welche Felder der e-Linie erreicht er?'],{quelle:DIP+', Aufgabe 7',schach:true,leer:true,pruef:{zwischen:true}}),
  T('Rettung 3, schlagen: Der Turm e2 gibt Schach. Klicke alle weißen Figuren an, die ihn schlagen können.','7k/8/8/8/8/8/4r3/3QK3',null,'Die Dame d1 und der König e1. Der König darf schlagen, weil der Turm ungedeckt ist.',['Wer erreicht das Feld e2?','Der König darf nur ungedeckte Figuren schlagen.'],{quelle:DIP+', Aufgabe 6',schach:true,pruef:{schlagen:true}}),
  T('Die Dame g2 gibt Schach. Markiere alle Felder, auf die der weiße König ziehen kann. Wenn keins: Ist es Matt? Dann drücke „Prüfen“ ohne Markierung.','8/8/8/8/8/5k2/6q1/7K',null,'Keins, es ist Matt. Die Dame greift alle Fluchtfelder an, und der schwarze König deckt sie, deshalb darf Weiß sie nicht schlagen.',['Kann der König die Dame schlagen?','Wer deckt die Dame?'],{quelle:DIP+', Aufgabe 12',schach:true,leer:true,pruef:{flucht:true}}),
  T('Weiß hat mit dem Turm auf a8 Schach gegeben. Ist es Matt? Markiere alle Felder, auf die der schwarze König fliehen kann.','R5k1/8/8/8/8/8/8/6K1',null,'f7, g7 und h7. Der König flieht nach vorn: kein Matt.',['Der Turm greift nur die 8. Reihe an.','Ist die 7. Reihe frei?'],{quelle:DIP+', Schach oder Matt',zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Finde das Matt: Klicke das Feld an, auf das die Dame ziehen muss.','7k/8/6K1/8/8/8/8/5Q2',null,'f8. Die Dame gibt Schach über die 8. Reihe, der weiße König deckt g7 und h7.',['Die Dame muss auf die 8. Reihe.','Welche Felder deckt der weiße König?'],{quelle:DIP+', Aufgabe 14',leer:true,pruef:{matt:true}})],
 A:[T('Der Turm a1 gibt Schach. Markiere alle sicheren Felder für den König.','7k/8/8/8/8/8/8/r3K3',null,'d2, e2 und f2. Die 1. Reihe bleibt angegriffen.',['Der König muss die 1. Reihe verlassen.','Zeige alle Nachbarfelder.'],{quelle:DIP+', Aufgabe 8',schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Turm gibt Schach. Markiere das Feld, auf das der Springer ziehen kann, um sich dazwischenzustellen.','4r2k/8/8/8/8/8/3N4/4K3',null,'e4. Der Springer sperrt die e-Linie. Aber Vorsicht: Dort ist er ungedeckt, der Turm schlägt ihn mit Schach. Besser zieht hier der König weg.',['Der Springer muss auf die e-Linie.','Welche Springerfelder liegen auf der e-Linie?'],{quelle:DIP+', Aufgabe 4 bis 7',schach:true,leer:true,pruef:{zwischen:true}}),
  T('Der Läufer b4 gibt Schach. Darf der König ihn schlagen? Markiere alle Felder, auf die der König ziehen darf.','8/8/2n2k2/8/1b6/2K5/8/8',null,'b2, b3, c2, c4 und d3. Der Springer c6 deckt den Läufer, deshalb darf der König nicht schlagen.',['Wer deckt den Läufer?','Prüfe jedes Nachbarfeld.'],{quelle:'Lumi Test zu Kurs I, Aufgabe 9',schach:true,leer:true,pruef:{flucht:true}}),
  T('Schwarz steht im Schach. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','1n2kq2/4pppp/2B5/5b2/8/5N2/5PPP/5RK1',null,'Der Springer b8 (schlägt oder stellt sich dazwischen), der Läufer f5 (dazwischen auf d7) und der König (nach d8).',['Prüfe alle drei Rettungen.','Wer erreicht c6 oder d7?'],{quelle:'Lumi Selbstlernkurs I, Schach',zug:'b',schach:true,pruef:{abwehr:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','1k6/4R3/8/8/8/8/5R2/5K2',null,'f8. Der Turm f8 greift die 8. Reihe an, der Turm e7 sperrt die 7. Reihe.',['Ein Turm schützt die 7. Reihe.','Der andere gibt Schach auf der 8. Reihe.'],{quelle:M1+', Aufgabe 1',leer:true,pruef:{matt:true}}),
  T('Mit welchem Sprung setzt der Springer matt? Klicke das Zielfeld an.','6rk/6pp/3N1p2/8/8/6PP/6K1/8',null,'f7. Der Springer gibt Schach, und der König ist von seinen eigenen Figuren eingesperrt.',['Der Springer kann nicht gesperrt werden.','Wohin kann der König fliehen?'],{quelle:M1+', Aufgabe 13',leer:true,pruef:{matt:true}})],
 S:[T('Ein Kind zieht den König von e2 nach e3. Warum ist das falsch? Markiere alle sicheren Felder.','4r2k/8/8/8/8/8/4K3/8',null,'d1, d2, d3, f1, f2 und f3. Auf e3 bliebe der König auf der e-Linie im Schach.',['Der Turm greift die ganze e-Linie an.','Der König muss die Linie verlassen.'],{quelle:DIP+', Aufgabe 10',schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','7k/8/8/8/8/R2n4/8/4K3',null,'Der König (er zieht weg) und der Turm a3 (er schlägt den Springer). Gegen ein Springerschach kann man sich nicht dazwischenstellen.',['Ein Springer springt über Figuren.','Prüfe wegziehen und schlagen.'],{schach:true,pruef:{abwehr:true}}),
  T('Ein Kind zieht den Turm nach a8 und ruft „Matt!“. Klicke die schwarze Figur an, die den Turm a8 schlagen kann.','R4rk1/5ppp/8/8/8/8/8/6K1',null,'Der Turm f8. Ta8 ist nicht einmal Schach, denn der Turm f8 steht dazwischen. Er kann den Turm a8 schlagen.',['Ist der Weg von a8 zum König frei?','Wer steht auf der 8. Reihe dazwischen?'],{quelle:DIP+', Schach oder Matt',zug:'b',pruef:{erreichen:'a8',weiss:false}}),
  T('Ist das Matt? Markiere alle Felder, auf die der weiße König fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','6k1/5p1p/6p1/8/8/8/5PPP/4r1K1',null,'Keins, es ist Matt. Die eigenen Bauern sperren den König ein, und der Turm greift die 1. Reihe an.',['Wer sperrt die Felder f2, g2 und h2?','Kann Weiß den Turm schlagen?'],{quelle:'Lumi Selbstlernkurs I, Schachmatt',schach:true,leer:true,pruef:{flucht:true}}),
  T('Darf der König die Dame schlagen? Klicke alle weißen Figuren an, die das Schach abwehren können.','6k1/8/8/7b/8/8/R3q3/4K3',null,'Nur der Turm a2. Er schlägt die Dame. Der König darf sie nicht schlagen, weil der Läufer h5 sie deckt.',['Wer deckt die Dame?','Kann eine andere Figur sie schlagen?'],{schach:true,pruef:{abwehr:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','6k1/5p1p/6pB/8/8/8/6K1/1R6',null,'b8. Der Turm gibt Schach, und der Läufer h6 deckt g7.',['Die eigenen Bauern sperren den König ein.','Welches Fluchtfeld deckt der Läufer?'],{quelle:M1+', Aufgabe 19',leer:true,pruef:{matt:true}})],
 L:[T('Klicke die Figur an, die dem weißen König Schach gibt.','3k4/8/8/1n6/3K4/8/8/7r',null,'Der Springer b5.',['Prüfe jede schwarze Figur.','Denk an die Springersprünge.'],{schach:true,pruef:{schachgeber:true}}),
  T('Der Läufer gibt Schach. Markiere alle sicheren Felder für den König.','4k3/8/8/8/8/2b5/8/4K3',null,'d1, e2, f1 und f2. Auf d2 bliebe er auf der Diagonale des Läufers.',['Der Läufer greift schräg an.','Prüfe jedes Nachbarfeld.'],{schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Turm a1 gibt Schach, der König kann nicht weg. Markiere die Felder, auf die der Springer ziehen kann, um sich dazwischenzustellen.','4k3/8/8/8/8/4N3/6PP/r6K',null,'d1 und f1. Der Springer sperrt die 1. Reihe. Das Matt ist damit nur aufgeschoben: Der Turm schlägt den ungedeckten Springer, und es ist trotzdem Matt.',['Der Springer muss auf die 1. Reihe.','Welche Springerfelder liegen dort?'],{schach:true,leer:true,pruef:{zwischen:true}}),
  T('Der Springer f3 gibt Schach. Klicke alle weißen Figuren an, die ihn schlagen können.','6k1/8/8/8/8/5n2/6P1/3Q2K1',null,'Der Bauer g2 und die Dame d1.',['Wer erreicht das Feld f3?','Der Bauer schlägt schräg.'],{schach:true,pruef:{schlagen:true}}),
  T('Wohin zieht der Turm, um mattzusetzen? Klicke das Feld an.','7k/5K2/4R3/8/8/8/8/8',null,'h6. Der Turm gibt Schach, der weiße König deckt g7 und g8.',['Der Turm muss auf die h-Linie.','Welche Felder deckt der weiße König?'],{quelle:M1+', Aufgabe 5',leer:true,pruef:{matt:true}}),
  T('Weiß setzt in einem Zug matt. Markiere das Feld, auf das Weiß zieht.','3k4/8/5K2/8/8/7B/8/2R5',null,'c8. Der Turm gibt Schach, der Läufer h3 deckt d7, der König f6 deckt e7.',['Der Turm muss auf die 8. Reihe.','Welche Fluchtfelder decken König und Läufer?'],{quelle:M1+', Aufgabe 25',leer:true,pruef:{matt:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 8 geschrieben');
