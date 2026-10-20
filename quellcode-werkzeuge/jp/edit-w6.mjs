// Woche 6 „Angreifen und decken“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,figurenaufstellen:'https://www.youtube.com/watch?v=r5r3fYH6_WI'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
F[6]={thema:'Angreifen und decken',
 lernziel:'Ich kann angegriffene Figuren erkennen und schützen.',
 leitfrage:'Welche meiner Figuren kann der Gegner im nächsten Zug schlagen, und wie rette ich sie?',
 vorwissen:'Alle Figuren ziehen und schlagen, auch der Bauer (Woche 3 bis 5).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Minispiel „Figurenaufstellen“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, Angriffe, Deckungen und sichere Felder automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Bauern wiederholen, dann: Was könnte geschlagen werden?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W3 die Bauernfehler aus Woche 5 aufgreifen: schräg schlagen, Richtung von Schwarz, Umwandlung.',
   'W4 bis W6: Welche Figur könnte im nächsten Zug geschlagen werden? Ziel nennen: „Heute lernt ihr, wann eine Figur angegriffen ist und wie ihr sie rettet.“'],
  kinder:'Ich erkenne, welche Figur eine andere schlagen könnte.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Angegriffen, gedeckt, hängend und drei Rettungen',
  ablauf:['Am Lehrbrett E1 bis E3 gemeinsam die drei Wörter klären: angegriffen heißt, der Gegner könnte die Figur im nächsten Zug schlagen. Gedeckt heißt, eine eigene Figur könnte zurückschlagen. Eine Figur hängt, wenn sie angegriffen und nicht gedeckt ist.',
   'E4 bis E6: drei Rettungen. Wegziehen auf ein sicheres Feld, decken oder den Angreifer schlagen. Die Kinder zeigen am eigenen Brett mit dem Finger, wer wen angreift.',
   'Merksatz: „Vor jedem Zug frage ich: Was greift mein Gegner an? Ist meine Figur gedeckt?“'],
  kinder:'Ich erkläre angegriffen, gedeckt und hängend an einem Beispiel.',
  links:[{art:'feld',label:'Lehrbrett: Angreifen und decken E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Angriff oder nicht? Zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt eine weiße Figur, eine schwarze Figur und eine dritte Figur auf. Kind B sagt, ob die weiße Figur angegriffen ist, ob sie gedeckt ist und wie sie zu retten wäre. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich finde angegriffene und hängende Figuren und rette sie.',
  links:[{art:'druck',label:'Arbeitsblatt: Angreifen und decken',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: den Bauernangriff übersehen, einen verdeckten Angriff mitzählen, den Springer vergessen, auf ein neues angegriffenes Feld flüchten.',
   'Bei jeder Aufgabe nachfragen: „Woran erkennst du, dass die Figur angegriffen ist?“ oder „Warum ist das Feld nicht sicher?“ Alle sprechen den Merksatz.'],
  kinder:'Ich kann begründen, ob eine Figur angegriffen, gedeckt oder sicher ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche deiner Figuren ist angegriffen? Wie rettest du sie?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne Angriffe und rette meine Figur ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Figurenaufstellen“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Das Brett ist leer. Jedes Kind hat König, Dame, zwei Türme, zwei Läufer und zwei Springer. Abwechselnd setzt jedes Kind eine Figur auf ein freies Feld, das keine gegnerische Figur angreift. Wer zuerst alle Figuren gesetzt hat, gewinnt. Wer keine Figur mehr setzen kann, verliert. Danach wechseln die Rollen, das andere Kind beginnt.',
   'Rückblick: „Woran erkennst du, dass ein Feld angegriffen ist?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr, wie viel die Figuren wert sind und wann sich ein Tausch lohnt.'],
  kinder:'Ich setze meine Figuren nur auf Felder, die nicht angegriffen sind.',
  links:[{art:'video',label:'Minispiel „Figurenaufstellen“ (Video)',url:URLS.figurenaufstellen}]}],
 hinweise:{hilfe:'Für jede gegnerische Figur mit dem Finger ihre Zugfelder zeigen. Bei Bauern nur schräg nach vorn.',
  zusatz:'Eine Stellung bauen, in der eine Figur zweimal angegriffen und einmal gedeckt ist. Was passiert, wenn der Gegner schlägt?',
  kuerzen:'In der Erarbeitung E2 und E6 weglassen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel wird mit weniger Figuren gespielt.'},
 nachher:'Wer übersieht noch Angriffe von Bauern oder Springern? Wer flüchtet auf ein Feld, das wieder angegriffen ist? Diese Fehler greifst du in Woche 7 beim Tauschen wieder auf.',
 feld:{
 W:[T('Markiere alle Felder, auf die der Bauer auf g2 ziehen kann.',{g2:'P',f3:'b',h3:'n',g3:'p'},null,'f3 und h3. Er schlägt schräg. Geradeaus steht der schwarze Bauer.',['Geradeaus ist besetzt.','Schräg nach vorn stehen schwarze Figuren.'],{leer:true,pruef:{zuege:'g2'}}),
  T('Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.',{b7:'p',a6:'N',c6:'B'},null,'b6, b5, a6 und c6. Ein oder zwei Felder nach unten, schräg schlägt er.',['Schwarz zieht nach unten.','Vom Startfeld gibt es den Doppelschritt.'],{leer:true,pruef:{zuege:'b7'}}),
  T('Markiere das Feld, auf dem der Bauer umgewandelt werden kann.',{e7:'P',e8:'n',d8:'r'},null,'d8. Geradeaus ist e8 besetzt, aber er schlägt den Turm auf d8 und wird dabei umgewandelt.',['Geradeaus wird nie geschlagen.','Schräg vor ihm steht eine schwarze Figur.'],{leer:true,pruef:{zuege:'e7'}}),
  T('Der schwarze Turm auf d8 könnte im nächsten Zug schlagen. Klicke die weiße Figur an, die er angreift.',{d8:'r',d3:'N',g5:'B',a5:'P'},null,'Den Springer auf d3. Der Weg auf der d-Linie ist frei.',['Prüfe die d-Linie und die 8. Reihe.','Steht eine weiße Figur auf dem Weg des Turms?'],{pruef:{schlaege:['d8']}}),
  T('Welche schwarzen Figuren greift der weiße Springer an? Klicke sie an.',{e4:'N',d6:'r',f6:'b',g5:'p',c4:'q'},null,'d6, f6 und g5. Die Dame auf c4 steht zwei Felder gerade daneben, die erreicht der Springer nicht.',['Zeige alle acht Springerfelder.','Auf welchen steht eine schwarze Figur?'],{pruef:{schlaege:['e4']}}),
  T('Welche schwarzen Figuren greift der weiße Läufer an? Klicke sie an.',{c4:'B',e6:'r',a6:'n',f7:'p'},null,'e6 und a6. Der Bauer auf f7 steht hinter dem Turm.',['Fahre alle Diagonalen von c4 ab.','In jeder Richtung zählt nur die erste Figur.'],{pruef:{schlaege:['c4']}})],
 E:[T('Welche weißen Figuren sind angegriffen? Klicke sie an.',{c3:'N',f4:'B',a1:'R',b4:'b',f8:'r',h3:'p'},null,'Der Springer auf c3 (vom Läufer b4) und der Läufer auf f4 (vom Turm f8). Der Turm auf a1 ist sicher.',['Zeige für jede schwarze Figur ihre Zugfelder.','Steht dort eine weiße Figur?'],{pruef:{angegriffen:'w'}}),
  T('Welche weißen Figuren sind gedeckt? Klicke sie an.',{d4:'N',c3:'P',f1:'R',f5:'B',a8:'Q'},null,'Der Springer auf d4 (vom Bauern c3) und der Läufer auf f5 (vom Turm f1). Gedeckt heißt: Eine eigene Figur könnte zurückschlagen.',['Welche eigene Figur könnte auf das Feld ziehen?','Bauern decken schräg nach vorn.'],{pruef:{gedeckt:'w'}}),
  T('Welche weiße Figur hängt, ist also angegriffen und nicht gedeckt? Klicke sie an.',{e5:'N',d4:'P',b3:'B',a2:'P',h3:'R',d6:'p',b8:'r',e6:'b'},null,'Der Turm auf h3. Ihn greift der Läufer e6 an, und keine weiße Figur deckt ihn. Springer e5 und Läufer b3 sind auch angegriffen, aber gedeckt.',['Suche zuerst alle angegriffenen Figuren.','Welche davon deckt niemand?'],{pruef:{haengt:'w'}}),
  T('Rettung 1, wegziehen: Der Springer auf c3 ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.',{c3:'N',b4:'b',e6:'p',a8:'r'},null,'b1, b5, d1, e2 und e4. Auf a2 und a4 greift der Turm an, auf d5 der Bauer.',['Zeige alle Springerfelder.','Streiche die Felder, die eine schwarze Figur angreift.'],{leer:true,pruef:{sicher:'c3'}}),
  T('Rettung 2, decken: Der Läufer auf e4 wird vom schwarzen Turm angegriffen. Markiere die Felder, auf die der weiße Turm ziehen kann, um ihn zu decken.',{e4:'B',e8:'r',a1:'R'},null,'a4 und e1. Von dort könnte der Turm auf e4 zurückschlagen.',['Der Turm muss auf die 4. Reihe oder die e-Linie.','Der Weg bis e4 muss frei sein.'],{leer:true,pruef:{deckzug:{figuren:['a1'],ziel:'e4'}}}),
  T('Rettung 3, Angreifer schlagen: Der schwarze Springer greift die weiße Dame an. Welche weißen Figuren können ihn schlagen? Klicke sie an.',{d1:'Q',c3:'n',b2:'P',h3:'R'},null,'Der Bauer auf b2 und der Turm auf h3. Am besten schlägt der Bauer, die kleinste Figur.',['Welche weiße Figur kann nach c3 ziehen?','Der Bauer schlägt schräg.'],{pruef:{erreichen:'c3'}})],
 A:[T('Welche weißen Figuren sind angegriffen? Klicke sie an.',{a5:'R',f3:'N',c4:'B',g2:'P',b6:'p',h5:'b',e5:'n'},null,'a5 (Bauer b6), f3 (Läufer h5) und c4 (Springer e5). Der Bauer auf g2 ist sicher.',['Prüfe jede schwarze Figur.','Bauern greifen schräg nach vorn an, bei Schwarz nach unten.'],{pruef:{angegriffen:'w'}}),
  T('Welche weißen Figuren sind gedeckt? Klicke sie an.',{e3:'P',f2:'P',d4:'N',g3:'B',a6:'R',h8:'Q'},null,'d4 (Bauer e3), e3 und g3 (Bauer f2) sowie f2 (Läufer g3). Turm und Dame deckt niemand.',['Bauern decken schräg nach vorn.','Welche Figur könnte zurückschlagen?'],{pruef:{gedeckt:'w'}}),
  T('Welche weißen Figuren hängen? Klicke sie an.',{d5:'N',c4:'P',g3:'B',b7:'R',e6:'p',f4:'p',a8:'q'},null,'b7 und g3. Den Turm greift die Dame an, den Läufer der Bauer f4. Der Springer auf d5 ist angegriffen, aber vom Bauern c4 gedeckt.',['Erst angegriffene Figuren suchen.','Dann prüfen: Deckt sie jemand?'],{pruef:{haengt:'w'}}),
  T('Die weiße Dame ist angegriffen. Markiere alle sicheren Felder auf der d-Linie, auf die sie ziehen kann.',{d4:'Q',e6:'n',a7:'b',c6:'p'},null,'d1, d2, d3, d6 und d7. Auf d5 greift der Bauer c6 an, auf d8 der Springer e6.',['Die Dame zieht auf der d-Linie hoch oder runter.','Welche Felder greift Schwarz an?'],{leer:true,pruef:{sicher:'d4',linie:'d'}}),
  T('Der weiße Läufer auf f5 ist angegriffen. Markiere die Felder, auf die der weiße Springer springen kann, um ihn zu decken.',{f5:'B',f8:'r',c2:'N'},null,'d4 und e3. Von dort könnte der Springer auf f5 zurückschlagen.',['Zeige alle Springerfelder von c2.','Von welchem davon springt er nach f5?'],{leer:true,pruef:{deckzug:{figuren:['c2'],ziel:'f5'}}}),
  T('Der weiße Läufer auf c5 ist angegriffen. Welche weißen Figuren können ihn mit einem Zug decken? Klicke sie an.',{c5:'B',c8:'r',b3:'P',g4:'N',h5:'R'},null,'Der Bauer b3 (nach b4) und der Turm h5 (zum Beispiel nach d5). Der Springer auf g4 erreicht kein Feld, von dem er c5 deckt.',['Probiere für jede weiße Figur ihre Züge.','Von wo aus könnte sie auf c5 zurückschlagen?'],{pruef:{decker:'c5'}})],
 S:[T('Welche weißen Figuren greift der schwarze Bauer an? Klicke sie an.',{e5:'p',d4:'N',f4:'B',e4:'R'},null,'d4 und f4. Den Turm auf e4 direkt vor ihm greift der Bauer nicht an, denn er schlägt nur schräg.',['Der Bauer schlägt schräg nach vorn.','Schwarz zieht nach unten.'],{pruef:{schlaege:['e5']}}),
  T('Greift der weiße Turm den schwarzen Springer an? Klicke alle schwarzen Figuren an, die er angreift. Wenn keine, drücke „Prüfen“ ohne Markierung.',{a1:'R',a7:'n',a4:'P'},null,'Keine. Der eigene Bauer auf a4 steht im Weg, der Springer auf a7 ist nicht angegriffen.',['Fahre die a-Linie hoch.','Was steht zwischen a1 und a7?'],{pruef:{schlaege:['a1']}}),
  T('Der schwarze Läufer kann den weißen Springer auf e5 schlagen. Welche weißen Figuren könnten dann zurückschlagen? Klicke sie an.',{e5:'N',b8:'b',d4:'P',f3:'P',e1:'R'},null,'Der Bauer d4 und der Turm e1. Der Bauer auf f3 deckt e4 und g4, nicht e5.',['Gedeckt heißt: zurückschlagen können.','Bauern decken schräg nach vorn.'],{pruef:{verteidiger:'e5'}}),
  T('Welche weißen Figuren greift der schwarze Springer gleichzeitig an? Klicke sie an.',{d4:'n',b3:'R',c6:'B',e6:'Q',f4:'N'},null,'b3, c6 und e6. Den Springer auf f4 erreicht er nicht. Ein Springer kann viele Figuren auf einmal angreifen.',['Zeige alle acht Springerfelder.','Auf welchen steht eine weiße Figur?'],{pruef:{schlaege:['d4']}}),
  T('Ein Kind zieht den angegriffenen Läufer nach g5. Dort wird er wieder angegriffen. Markiere alle sicheren Felder für den Läufer.',{e3:'B',e8:'r',h6:'p'},null,'Alle Läuferfelder außer g5: f4, h6, d4, c5, b6, a7, d2, c1, f2 und g1. Auf h6 schlägt er sogar den Bauern.',['Welches Feld greift der Bauer h6 an?','Bauern greifen schräg nach unten an.'],{leer:true,pruef:{sicher:'e3'}}),
  T('Welche weißen Figuren hängen? Klicke sie an.',{d1:'R',c3:'N',b2:'P',g2:'B',h4:'Q',a5:'b',e3:'n',h8:'r'},null,'g2 und h4. Der Turm auf d1 ist angegriffen, aber vom Springer c3 gedeckt. Den Springer auf c3 deckt der Bauer b2.',['Erst alle angegriffenen Figuren suchen.','Dann prüfen: Deckt sie jemand?'],{pruef:{haengt:'w'}})],
 L:[T('Welche schwarzen Figuren greift der weiße Turm an? Klicke sie an.',{d3:'R',d7:'b',h3:'n',a3:'P',d1:'n'},null,'d7, h3 und d1.',['Prüfe die d-Linie und die 3. Reihe.','In jeder Richtung zählt die erste Figur.'],{pruef:{schlaege:['d3']}}),
  T('Welche weißen Figuren sind angegriffen? Klicke sie an.',{b5:'B',g4:'N',e4:'P',a1:'R',a6:'p',h3:'b',c3:'n'},null,'b5, g4 und e4. Der Turm auf a1 ist sicher.',['Prüfe jede schwarze Figur.','Denk an den schwarzen Springer.'],{pruef:{angegriffen:'w'}}),
  T('Welche weißen Figuren sind gedeckt? Klicke sie an.',{a2:'P',b3:'P',c4:'B',f3:'N',h5:'R',d1:'Q'},null,'b3 (Bauer a2), c4 (Bauer b3) und f3 (Dame d1).',['Welche eigene Figur könnte zurückschlagen?','Die Dame deckt schräg.'],{pruef:{gedeckt:'w'}}),
  T('Welche weißen Figuren hängen? Klicke sie an.',{e4:'N',d3:'P',a3:'B',h7:'R',d5:'p',f8:'q',f6:'n'},null,'a3 und h7. Der Springer auf e4 ist angegriffen, aber vom Bauern d3 gedeckt.',['Erst angegriffene Figuren suchen.','Dann prüfen: Deckt sie jemand?'],{pruef:{haengt:'w'}}),
  T('Der weiße Turm ist angegriffen. Markiere alle sicheren Felder auf der 4. Reihe.',{d4:'R',e5:'p',a7:'b',c6:'n'},null,'a4, c4, e4, g4 und h4. Auf b4 greift der Springer an, auf f4 der Bauer.',['Der Turm zieht auf der 4. Reihe.','Welche Felder greift Schwarz an?'],{leer:true,pruef:{sicher:'d4',reihe:4}}),
  T('Der weiße Springer auf d5 wird angegriffen. Markiere die Felder, auf die ein weißer Bauer ziehen kann, um ihn zu decken.',{d5:'N',d8:'r',c3:'P',e2:'P'},null,'c4 und e4. Von dort decken die Bauern d5 schräg.',['Bauern decken schräg nach vorn.','Welcher Bauernzug führt neben d5?'],{leer:true,pruef:{deckzug:{figuren:['c3','e2'],ziel:'d5'}}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 6 geschrieben');
