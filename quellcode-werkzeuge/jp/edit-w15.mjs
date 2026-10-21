// Woche 15 „En passant“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, edit-w11.mjs, edit-w12.mjs, edit-w13.mjs, edit-w14.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import {Chess} from '../dist/assets/chess.mjs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
// Stellung nach Zügen aus der Grundstellung, damit keine Stellung von Hand getippt wird
const nach=z=>{const g=new Chess();for(const m of z.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],zug:f[1]}};
const Z=(frage,zuege,targets,antwort,hilfe,extra={})=>{const {fen,zug}=nach(zuege);return T(frage,fen,targets,antwort,hilfe,{...(zug==='b'?{zug:'b'}:{}),...extra})};
// mit En-passant-Feld aus der Zugfolge (chess.js setzt es nach jedem Doppelschritt)
const ZE=(frage,zuege,targets,antwort,hilfe,extra={})=>{const g=new Chess();for(const m of zuege.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');
 return T(frage,f[0],targets,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[3]!=='-'?{ep:f[3]}:{}),zuege,...extra})};
const URL2={...URLS};
F[15]={thema:'En passant',
 lernziel:'Ich kann en passant erkennen und richtig ausführen.',
 leitfrage:'Wann darf ein Bauer einen anderen Bauern im Vorbeigehen schlagen?',
 vorwissen:'Bauernzug, Doppelschritt und Schlagen (Woche 5), Umwandlung (Woche 13).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'FIDE-Regel zum Schlagen en passant in kindgerechter Form, Ludgerus-Schachdiplom Silber (en passant). Brettaufgaben eigene Aufgaben; alle Stellungen aus echten Zugfolgen erzeugt und mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Rochade wiederholen, dann: der Doppelschritt',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 die Rochade aus Woche 14 und den Doppelschritt aufgreifen.',
   'W5 und W6: Ein schwarzer Bauer springt mit Doppelschritt neben einen weißen Bauern. Über welches Feld ist er gesprungen? Ziel nennen: „Heute lernt ihr die seltenste Bauernregel: Schlagen im Vorbeigehen, en passant.“'],
  kinder:'Ich erkenne einen Doppelschritt und das übersprungene Feld.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'So geht en passant, drei Bedingungen',
  ablauf:['Plakat „En passant“ aufhängen. Am Lehrbrett E1 und E2 zeigen: Der weiße Bauer schlägt schräg auf das übersprungene Feld, der schwarze Bauer wird vom Brett genommen. Die Kinder spielen es am eigenen Brett nach.',
   'E3 bis E6: die Bedingungen. Der schlagende Bauer steht auf der 5. Reihe (Schwarz: 4. Reihe), der andere kam gerade mit Doppelschritt, und es muss sofort geschehen.',
   'Merksatz: „En passant: nur gegen einen Doppelschritt, nur direkt danach.“'],
  kinder:'Ich führe en passant aus und nenne die drei Bedingungen.',
  links:[{art:'druck',label:'Plakat: En passant',was:'enpassant'},{art:'feld',label:'Lehrbrett: En passant E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'En-passant-Falle zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen weißen Bauern auf die 5. Reihe und einen schwarzen Bauern auf die 7. Reihe der Nachbarlinie. Kind B zieht den schwarzen Bauern mit Doppelschritt vorbei, Kind A schlägt en passant und sagt das übersprungene Feld an. Danach wechseln die Rollen.',
   'Frage zwischendurch: „Warum darfst du jetzt nicht mehr en passant schlagen?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich schlage en passant richtig und erkenne, wann es nicht geht.',
  links:[{art:'druck',label:'Arbeitsblatt: En passant',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Der Bauer landet auf dem übersprungenen Feld, nicht auf dem Feld des geschlagenen Bauern. En passant gibt es nur direkt danach, nur von der 5. Reihe, auch für Schwarz.',
   'Bei jeder Aufgabe nachfragen: „Welche der drei Bedingungen fehlt?“ oder „Welcher Bauer verschwindet?“'],
  kinder:'Ich kenne die typischen Fehler bei en passant.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett ein en passant vorspielen und fragst: „Welcher Bauer verschwindet?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne und spiele en passant ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Bauernkrieg mit en passant“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat nur seine acht Bauern. Wer zuerst einen Bauern umwandelt, gewinnt. Jedes en passant, das richtig gespielt wird, bringt einen Extrapunkt. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Rückblick: „Auf welches Feld zieht der Bauer beim en passant?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um Partien, die unentschieden enden: Patt und Remis.'],
  kinder:'Ich nutze en passant im Spiel, wenn es erlaubt ist.',
  links:[{art:'druck',label:'Plakat: En passant',was:'enpassant'}]}],
 hinweise:{hilfe:'Mit dem Finger den Doppelschritt nachfahren und auf das übersprungene Feld tippen. Dorthin zieht der schlagende Bauer.',
  zusatz:'Eine Stellung bauen, in der zwei Bauern en passant schlagen könnten, und entscheiden, welcher besser ist.',
  kuerzen:'Die En-passant-Falle auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, der Bauernkrieg dauert nur fünf Minuten.'},
 nachher:'Wer stellt den Bauern beim en passant auf das falsche Feld? Wer vergisst, dass es nur direkt danach geht? Die Bauernregeln greifst du in Woche 16 bei Patt und Remis wieder auf.',
 feld:{
 W:[T('Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.','3k4/8/8/8/8/7n/8/R3K2R',null,'Nur c1. Der Springer h3 greift g1 an, kurz geht deshalb nicht.',['Prüfe beide Seiten.','Wer greift ein Feld auf dem Weg des Königs an?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  T('Klicke die schwarze Figur an, die die lange Rochade verhindert.','3k4/8/8/7b/8/8/8/R3K3',null,'Der Läufer h5. Er greift d1 an.',['Über welche Felder zieht der König bei der langen Rochade?','Prüfe die Diagonalen.'],{rechte:'Q',pruef:{stoerer:'lang'}}),
  T('Schwarz ist am Zug. Markiere das Feld, auf das der schwarze König mit einer Rochade ziehen kann.','4k2r/8/8/8/8/8/8/4K3',null,'g8, die kurze Rochade.',['Der König zieht zwei Felder Richtung Turm.','Schwarz rochiert auf der 8. Reihe.'],{zug:'b',rechte:'k',leer:true,pruef:{rochade:true}}),
  T('Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.',{b2:'P',d2:'P',d4:'n',g2:'P',g3:'p'},null,'Nur b2. Für d2 ist d4 besetzt, g2 ist von g3 blockiert.',['Startfeld auf der 2. Reihe?','Beide Felder davor frei?'],{pruef:{doppelschritt:true}}),
  ZE('Der schwarze Bauer ist gerade mit Doppelschritt von d7 nach d5 gezogen. Klicke den weißen Bauern an, der jetzt direkt neben ihm steht.','e4 a6 e5 d5',['e5'],'Der Bauer e5. Er steht auf der 5. Reihe direkt neben d5.',['Schau links und rechts neben d5.','Auf derselben Reihe.']),
  ZE('Über welches Feld ist der schwarze Bauer beim Doppelschritt d7–d5 gesprungen? Markiere es.','e4 a6 e5 d5',['d6'],'d6. Dieses Feld ist gleich wichtig: Dorthin darf Weiß en passant schlagen.',['Zwischen d7 und d5 liegt ein Feld.','Es liegt auf der d-Linie.'],{leer:true})],
 E:[ZE('Markiere alle Felder, auf die der Bauer e5 jetzt ziehen kann.','e4 a6 e5 d5',null,'e6 und d6. Auf d6 schlägt er en passant, der Bauer d5 wird vom Brett genommen.',['Gerade nach vorn ist frei.','Denk an das übersprungene Feld.'],{leer:true,pruef:{legal:'e5'}}),
  ZE('Weiß schlägt en passant. Welcher schwarze Bauer wird vom Brett genommen? Klicke ihn an.','e4 a6 e5 d5',['d5'],'Der Bauer d5. Der weiße Bauer zieht nach d6, der schwarze Bauer daneben verschwindet.',['Es ist der Bauer, der den Doppelschritt gemacht hat.','Er steht neben dem weißen Bauern.']),
  ZE('Weiß hat nach d7–d5 zuerst den Springer gezogen, dann zog Schwarz h6. Markiere alle Felder, auf die der Bauer e5 jetzt ziehen kann.','e4 a6 e5 d5 Nf3 h6',null,'Nur e6. En passant geht nur sofort im nächsten Zug, jetzt ist es zu spät.',['Wann darf man en passant schlagen?','Ist der Doppelschritt gerade passiert?'],{leer:true,pruef:{legal:'e5'}}),
  ZE('Schwarz ist in zwei Einzelschritten d7–d6–d5 gezogen. Markiere alle Felder, auf die der Bauer e5 ziehen kann.','e4 d6 e5 d5',null,'Nur e6. En passant gibt es nur gegen einen Doppelschritt, nicht gegen zwei einzelne Schritte.',['Wie ist der Bauer nach d5 gekommen?','Bedingung 2 auf dem Plakat.'],{leer:true,pruef:{legal:'e5'}}),
  ZE('Schwarz ist am Zug. Weiß hat gerade e2–e4 gespielt. Markiere alle Felder, auf die der schwarze Bauer d4 ziehen kann.','a3 d5 a4 d4 e4',null,'d3 und e3. Auf e3 schlägt Schwarz en passant. Für Schwarz ist es die 4. Reihe.',['Schwarz zieht nach unten.','Über welches Feld ist der weiße Bauer gesprungen?'],{leer:true,pruef:{legal:'d4'}}),
  ZE('Schwarz hat gerade d7–d5 gespielt. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','e4 a6 e5 a5 c4 a4 c5 d5',null,'c5 und e5. Beide stehen auf der 5. Reihe direkt neben d5. Jeder darf nach d6 schlagen.',['Wer steht neben d5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}})],
 A:[ZE('Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.','d4 h6 d5 e5',null,'d6 und e6. Auf e6 schlägt er en passant.',['Gerade nach vorn ist frei.','Über welches Feld ist e7–e5 gesprungen?'],{leer:true,pruef:{legal:'d5'}}),
  ZE('Nach e7–e5 haben beide noch einen Zug gemacht. Markiere alle Felder, auf die der Bauer d5 jetzt ziehen kann.','d4 h6 d5 e5 a3 h5',null,'Nur d6. Für en passant ist es zu spät.',['Ist der Doppelschritt gerade passiert?','Nur sofort danach.'],{leer:true,pruef:{legal:'d5'}}),
  ZE('Markiere alle Felder, auf die der Bauer g5 jetzt ziehen kann.','g4 a6 g5 h5',null,'g6 und h6. Auf h6 schlägt er en passant, auch am Rand geht es.',['Wer steht neben g5?','Über welches Feld ist h7–h5 gesprungen?'],{leer:true,pruef:{legal:'g5'}}),
  ZE('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer b4 ziehen kann.','h3 b5 h4 b4 c4',null,'b3 und c3. Auf c3 schlägt Schwarz en passant.',['Schwarz zieht nach unten.','Über welches Feld ist c2–c4 gesprungen?'],{leer:true,pruef:{legal:'b4'}}),
  ZE('Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','e4 a6 e5 a5 g4 a4 g5 f5',null,'e5 und g5. Beide stehen neben f5 auf der 5. Reihe.',['Wer steht neben f5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}}),
  ZE('Schwarz ist mit einem Einzelschritt nach c5 gezogen. Markiere alle Felder, auf die der Bauer b5 ziehen kann.','b4 c6 b5 c5',null,'Nur b6. Der Bauer c5 kam mit einem Einzelschritt von c6, en passant geht nicht.',['Wie ist der Bauer nach c5 gekommen?','Nur gegen einen Doppelschritt.'],{leer:true,pruef:{legal:'b5'}})],
 S:[ZE('Ein Kind schlägt en passant und stellt seinen Bauern auf f5. Wohin gehört er? Markiere alle Felder, auf die e5 ziehen kann.','e4 a6 e5 f5',null,'e6 und f6. Beim en passant landet der Bauer auf dem übersprungenen Feld f6, nicht auf f5.',['Wohin schlägt ein Bauer immer?','Schräg nach vorn.'],{leer:true,pruef:{legal:'e5'}}),
  ZE('Ein Kind will en passant schlagen, aber vorher wurden zwei andere Züge gespielt. Markiere alle Felder, auf die e5 ziehen kann.','e4 a6 e5 f5 d3 a5',null,'Nur e6. Die Chance war nur direkt nach f7–f5.',['Ist der Doppelschritt gerade passiert?','Bedingung 3.'],{leer:true,pruef:{legal:'e5'}}),
  ZE('Ist das en passant? Markiere alle Felder, auf die der Bauer e4 ziehen kann.','e3 a6 e4 d5',null,'e5 und d5. Auf d5 schlägt er ganz normal, denn der schwarze Bauer steht schräg vor ihm. En passant gibt es nur von der 5. Reihe.',['Steht der schwarze Bauer neben oder schräg vor e4?','Normales Schlagen geht schräg nach vorn.'],{leer:true,pruef:{legal:'e4'}}),
  ZE('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer e4 ziehen kann.','a3 e5 a4 e4 d4',null,'e3 und d3. Auch Schwarz darf en passant schlagen.',['Schwarz zieht nach unten.','Über welches Feld ist d2–d4 gesprungen?'],{leer:true,pruef:{legal:'e4'}}),
  ZE('Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','c4 h6 c5 b5',null,'Nur c5. Er steht auf der 5. Reihe direkt neben b5.',['Wer steht neben b5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}}),
  ZE('Weiß schlägt hier en passant nach b6. Welcher Bauer verschwindet vom Brett? Klicke ihn an.','c4 h6 c5 b5',['b5'],'Der Bauer b5, der gerade den Doppelschritt gemacht hat.',['Er steht neben dem weißen Bauern.','Er hat den Doppelschritt gemacht.'])],
 L:[ZE('Markiere alle Felder, auf die der Bauer f5 jetzt ziehen kann.','f4 a6 f5 g5',null,'f6 und g6. Auf g6 schlägt er en passant.',['Gerade nach vorn ist frei.','Über welches Feld ist g7–g5 gesprungen?'],{leer:true,pruef:{legal:'f5'}}),
  ZE('Nach g7–g5 haben beide noch einen Zug gemacht. Markiere alle Felder, auf die der Bauer f5 jetzt ziehen kann.','f4 a6 f5 g5 h3 a5',null,'Nur f6. Für en passant ist es zu spät.',['Ist der Doppelschritt gerade passiert?','Nur sofort danach.'],{leer:true,pruef:{legal:'f5'}}),
  ZE('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze Bauer h4 ziehen kann.','c3 h5 c4 h4 g4',null,'h3 und g3. Auf g3 schlägt Schwarz en passant.',['Schwarz zieht nach unten.','Über welches Feld ist g2–g4 gesprungen?'],{leer:true,pruef:{legal:'h4'}}),
  ZE('Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','b4 h6 b5 h5 d4 h4 d5 c5',null,'b5 und d5. Beide stehen neben c5 auf der 5. Reihe.',['Wer steht neben c5?','Auf der 5. Reihe.'],{pruef:{epschlaeger:true}}),
  ZE('Weiß schlägt hier en passant. Welcher Bauer verschwindet vom Brett? Klicke ihn an.','f4 a6 f5 e5',['e5'],'Der Bauer e5. Der weiße Bauer zieht nach e6.',['Wer hat gerade den Doppelschritt gemacht?','Er steht neben dem weißen Bauern.']),
  ZE('Schwarz ist mit einem Einzelschritt nach b5 gezogen. Markiere alle Felder, auf die der Bauer a5 ziehen kann.','a4 b6 a5 b5',null,'Nur a6. Der Bauer kam mit einem Einzelschritt von b6.',['Wie ist der Bauer nach b5 gekommen?','Nur gegen einen Doppelschritt.'],{leer:true,pruef:{legal:'a5'}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 15 geschrieben');
