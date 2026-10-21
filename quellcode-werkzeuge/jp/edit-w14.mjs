// Woche 14 „Die Rochade“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, edit-w11.mjs, edit-w12.mjs, edit-w13.mjs, dann diese Datei.
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
F[14]={thema:'Die Rochade',
 lernziel:'Ich kann prüfen, ob eine Rochade erlaubt ist, und sie ausführen.',
 leitfrage:'Wann darf ich rochieren, und wie bringe ich meinen König damit in Sicherheit?',
 vorwissen:'Schach, angegriffene Felder (Woche 6 und 8), Umwandlung (Woche 13).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'FIDE-Regeln zur Rochade in kindgerechter Form, Ludgerus-Schachdiplom Silber (Rochade). Brettaufgaben eigene Aufgaben; erlaubte Rochaden mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Umwandlung wiederholen, dann: Wo ist der König sicher?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 die Umwandlung aus Woche 13 aufgreifen: Freibauer, Matt durch Umwandlung, Springer-Umwandlung.',
   'W5 und W6: König und Türme in der Grundstellung, welche Felder müssen frei sein? Ziel nennen: „Heute lernt ihr einen Spezialzug, bei dem König und Turm zusammen ziehen: die Rochade.“'],
  kinder:'Ich erkenne, welche Felder zwischen König und Turm frei sein müssen.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Kurze und lange Rochade, fünf Bedingungen',
  ablauf:['Plakat „Rochade“ aufhängen. Am Lehrbrett E1 bis E3 zeigen: Der König zieht zwei Felder zum Turm, der Turm springt über ihn und steht direkt daneben. Alles mit einer Hand, der König zuerst. Die Kinder machen es am eigenen Brett nach, kurz und lang.',
   'E4 bis E6: die Bedingungen. König und Turm haben noch nicht gezogen, dazwischen ist frei, der König steht nicht im Schach, zieht nicht über ein angegriffenes Feld und landet nicht im Schach.',
   'Merksatz: „Der König zieht zwei Felder, der Turm springt drüber. Nie aus dem Schach, nie durch ein Schach, nie ins Schach.“'],
  kinder:'Ich führe beide Rochaden richtig aus und nenne die Bedingungen.',
  links:[{art:'druck',label:'Plakat: Rochade',was:'rochade'},{art:'feld',label:'Lehrbrett: Rochade E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Rochade-Prüfer zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A baut eine Stellung mit weißem König auf e1 und beiden Türmen und stellt eine schwarze Figur dazu. Kind B prüft mit dem Plakat: Ist die kurze, die lange oder keine Rochade erlaubt? Danach wechseln die Rollen.',
   'Frage zwischendurch: „Welche der fünf Bedingungen verhindert hier die Rochade?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich prüfe Rochaden und begründe, warum sie erlaubt sind oder nicht.',
  links:[{art:'druck',label:'Arbeitsblatt: Rochade',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Irrtümer klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Ein angegriffenes Feld b1 stört die lange Rochade nicht, ein angegriffener Turm auch nicht. Ein Springer kann die Rochade verhindern. Auch Schwarz rochiert. Aus dem Schach heraus geht keine Rochade.',
   'Bei jeder Aufgabe nachfragen: „Welche Bedingung ist verletzt?“ oder „Warum ist die Rochade trotzdem erlaubt?“'],
  kinder:'Ich kenne die Ausnahmen und typischen Fehler bei der Rochade.',
  links:[{art:'feld',label:'Lehrbrett: Irrtümer klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett eine kurze und eine lange Rochade zeigen: König zuerst, eine Hand. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich prüfe und führe Rochaden ohne Hilfe aus.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Rochade-Rennen“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit aus der Grundstellung: Beide spielen nach allen Regeln. Wer als Erstes rochiert hat, ohne dabei eine Figur zu verlieren, gewinnt die Runde. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Rückblick: „Warum rochiert man überhaupt?“ (Der König steht sicherer, und der Turm kommt ins Spiel.) Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr einen seltenen Bauernzug, en passant.'],
  kinder:'Ich rochiere im Spiel früh und richtig.',
  links:[{art:'druck',label:'Plakat: Rochade',was:'rochade'}]}],
 hinweise:{hilfe:'Das Plakat neben das Brett legen und die fünf Bedingungen der Reihe nach mit dem Finger abhaken.',
  zusatz:'Eine Stellung bauen, in der nur die lange Rochade erlaubt ist, und eine, in der gar keine erlaubt ist.',
  kuerzen:'Den Rochade-Prüfer auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Rochade-Rennen hat nur eine Runde.'},
 nachher:'Wer zieht noch den Turm zuerst oder nimmt zwei Hände? Wer übersieht ein angegriffenes Feld auf dem Weg des Königs? Die Rochade greifst du in Woche 15 im Einstieg wieder auf.',
 feld:{
 W:[T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{b7:'P',b8:'r',a8:'n',e7:'P',g6:'P'},null,'b7 und e7. b7 schlägt den Springer a8, e7 zieht nach e8. g6 ist noch zu weit weg.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  T('Klicke den weißen Freibauern an.',{e1:'K',e8:'k',a4:'P',e3:'P',g4:'P',b6:'p',e6:'p'},null,'Der Bauer g4. a4 hält der Bauer b6 auf, e3 der Bauer e6.',['Prüfe drei Linien für jeden Bauern.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  T('Weiß setzt durch Umwandlung matt. Klicke das Feld an.','1k6/5P2/1K6/8/8/8/8/8',null,'f8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König b6 deckt a7, b7 und c7.',['Der Bauer zieht auf die letzte Reihe.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}}),
  T('Der Bauer ist auf f8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.','5N2/8/4k1q1/8/8/8/8/K7',null,'Den König e6 und die Dame g6.',['Zeige alle Springerfelder von f8.','Welche schwarzen Figuren stehen dort?'],{zug:'b',schach:true,pruef:{schlaege:['f8']}}),
  T('Klicke den weißen König und die beiden weißen Türme an.',START,['e1','a1','h1'],'e1, a1 und h1. Mit diesen drei Figuren gibt es gleich einen besonderen Zug.',['Der König steht auf der e-Linie.','Die Türme stehen in den Ecken.']),
  T('Welche Felder zwischen König und Turm h1 müssen frei sein? Markiere sie.',START,['f1','g1'],'f1 und g1. Dort stehen am Anfang Läufer und Springer, sie müssen zuerst herausgespielt werden.',['Was steht zwischen e1 und h1?','Zähle die Felder dazwischen.'],{leer:true})],
 E:[T('Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.','r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R',null,'g1 (kurze Rochade) und c1 (lange Rochade). Der König zieht immer zwei Felder.',['Der König zieht zwei Felder Richtung Turm.','Es gibt zwei Rochaden.'],{rechte:'KQkq',leer:true,pruef:{rochade:true}}),
  T('Kurze Rochade: Der König ist auf g1 gezogen. Markiere das Feld, auf das der Turm springt.','4k3/8/8/8/8/8/8/4K2R',['f1'],'f1. Der Turm springt über den König und steht direkt daneben.',['Der Turm landet neben dem König.','Auf der anderen Seite des Königs.'],{leer:true}),
  T('Lange Rochade: Markiere die beiden Felder, auf denen König und Turm danach stehen.','4k3/8/8/8/8/8/8/R3K3',['c1','d1'],'Der König auf c1, der Turm auf d1.',['Der König zieht zwei Felder nach links.','Der Turm springt über ihn.'],{leer:true}),
  T('Weiß steht im Schach. Darf Weiß rochieren? Markiere die Zielfelder des Königs. Wenn keine, drücke „Prüfen“ ohne Markierung.','4r1k1/8/8/8/8/8/8/R3K2R',null,'Keine. Aus dem Schach heraus darf man nicht rochieren.',['Steht der König im Schach?','Bedingung 3 auf dem Plakat.'],{rechte:'KQ',schach:true,leer:true,pruef:{rochade:true}}),
  T('Kurz oder lang? Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.','5rk1/8/8/8/8/8/8/R3K2R',null,'Nur c1. Kurz geht nicht, weil der Turm f8 das Feld f1 angreift. Der König darf nicht über ein angegriffenes Feld ziehen.',['Welche Felder greift der Turm f8 an?','Über welche Felder zieht der König?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  T('Klicke die schwarze Figur an, die die kurze Rochade verhindert.','4k3/8/8/1b6/8/8/8/4K2R',null,'Der Läufer b5. Er greift f1 an, über dieses Feld müsste der König ziehen.',['Über welche Felder zieht der König bei der kurzen Rochade?','Wer greift eines davon an?'],{rechte:'K',pruef:{stoerer:'kurz'}})],
 A:[T('Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.','r3k2r/8/8/8/8/8/8/RN2K2R',null,'Nur g1. Lang geht nicht, weil der Springer b1 noch zwischen König und Turm steht.',['Ist der Weg zu beiden Türmen frei?','Auch b1 muss leer sein.'],{rechte:'KQkq',leer:true,pruef:{rochade:true}}),
  T('Der weiße König war schon einmal auf f1 und ist zurückgekehrt. Darf er rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.','r3k2r/8/8/8/8/8/8/R3K2R',null,'Keine. Hat der König schon gezogen, ist die Rochade für immer verloren, auch wenn er zurückkehrt.',['Bedingung 1 auf dem Plakat.','Zählt ein Zug, der wieder zurückgenommen wurde?'],{leer:true,pruef:{rochade:true}}),
  T('Wohin darf der König rochieren? Markiere alle Zielfelder.','3k2r1/8/8/8/8/8/8/R3K2R',null,'Nur c1. Auf g1 würde der König im Schach landen, der Turm g8 greift g1 an.',['Wo landet der König bei der kurzen Rochade?','Wer greift dieses Feld an?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  T('Klicke die schwarze Figur an, die die lange Rochade verhindert.','3k4/8/8/8/6b1/8/8/R3K3',null,'Der Läufer g4. Er greift d1 an, über dieses Feld müsste der König ziehen.',['Über welche Felder zieht der König bei der langen Rochade?','Wer greift eines davon an?'],{rechte:'Q',pruef:{stoerer:'lang'}}),
  T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König mit einer Rochade ziehen kann.','r3k2r/8/8/8/8/8/8/4K3',null,'g8 und c8. Schwarz rochiert genauso, nur auf der 8. Reihe.',['Auch Schwarz kann kurz und lang rochieren.','Der König zieht zwei Felder.'],{zug:'b',rechte:'kq',leer:true,pruef:{rochade:true}}),
  T('Der Turm a1 hat schon gezogen und ist zurückgekehrt. Markiere alle Felder, auf die der König mit einer Rochade ziehen kann.','r3k2r/8/8/8/8/8/8/R3K2R',null,'Nur g1. Mit dem Turm a1 ist keine Rochade mehr möglich, mit dem Turm h1 schon.',['Welcher Turm hat schon gezogen?','Mit dem anderen Turm geht es noch.'],{rechte:'K',leer:true,pruef:{rochade:true}})],
 S:[T('Der schwarze Turm greift b1 an. Darf Weiß trotzdem lang rochieren? Markiere das Zielfeld des Königs. Wenn nicht, drücke „Prüfen“ ohne Markierung.','1r1k4/8/8/8/8/8/8/R3K3',null,'Ja, c1. Der König zieht nur über d1 und c1. Dass b1 angegriffen ist, stört nicht.',['Über welche Felder zieht der König?','Der Turm geht über b1, der König nicht.'],{rechte:'Q',leer:true,pruef:{rochade:true}}),
  T('Der Turm h1 wird angegriffen. Darf Weiß kurz rochieren? Markiere das Zielfeld des Königs. Wenn nicht, drücke „Prüfen“ ohne Markierung.','k6r/8/8/8/8/8/8/4K2R',null,'Ja, g1. Ein angegriffener Turm verhindert die Rochade nicht.',['Gilt die Bedingung auch für den Turm?','Nur der König darf nicht durch Schach ziehen.'],{rechte:'K',leer:true,pruef:{rochade:true}}),
  T('Klicke die schwarze Figur an, die die kurze Rochade verhindert.','4k3/8/8/8/8/7n/8/4K2R',null,'Der Springer h3. Er greift g1 an, dort würde der König landen.',['Wo landet der König?','Denk an die Springersprünge.'],{rechte:'K',pruef:{stoerer:'kurz'}}),
  T('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König mit einer Rochade ziehen kann.','r3k2r/8/8/8/8/8/8/4KR2',null,'Nur c8. Der weiße Turm f1 greift f8 an, kurz geht deshalb nicht.',['Über welche Felder zieht der schwarze König bei der kurzen Rochade?','Wer greift eines davon an?'],{zug:'b',rechte:'kq',leer:true,pruef:{rochade:true}}),
  T('Klicke alle schwarzen Figuren an, die eine Rochade verhindern.','3k4/8/8/8/8/8/1b5n/R3K2R',null,'Der Läufer b2 greift c1 an und verhindert die lange Rochade. Der Springer h2 greift f1 an und verhindert die kurze.',['Prüfe die Wege des Königs nach beiden Seiten.','Wer greift c1, d1, f1 oder g1 an?'],{rechte:'KQ',pruef:{stoerer:'beide'}}),
  T('Der Springer gibt Schach. Darf Weiß rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.','r3k2r/8/8/8/8/3n4/8/R3K2R',null,'Keine. Aus dem Schach heraus geht keine Rochade, auch nicht gegen einen Springer.',['Steht der König im Schach?','Bedingung 3.'],{rechte:'KQkq',schach:true,leer:true,pruef:{rochade:true}})],
 L:[T('Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen kann.','r3k2r/8/8/8/8/8/8/R3K2R',null,'g1 und c1. Alle Bedingungen sind erfüllt.',['Prüfe beide Seiten.','Der König zieht zwei Felder.'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  T('Welche Rochade ist hier erlaubt? Markiere das Zielfeld des Königs.','3k1r2/8/8/8/8/8/8/R3K2R',null,'Nur c1. Der Turm f8 greift f1 an.',['Über welche Felder zieht der König?','Wer greift eines davon an?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  T('Klicke die schwarze Figur an, die die lange Rochade verhindert.','k7/8/8/8/q7/8/8/R3K3',null,'Die Dame a4. Sie greift d1 über die Diagonale an.',['Über welche Felder zieht der König bei der langen Rochade?','Prüfe auch die Diagonalen.'],{rechte:'Q',pruef:{stoerer:'lang'}}),
  T('Der weiße König hat schon gezogen. Darf er rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.','3k4/8/8/8/8/8/8/R3K2R',null,'Keine. Hat der König einmal gezogen, ist die Rochade verloren.',['Bedingung 1.','Auch eine Rückkehr hilft nicht.'],{leer:true,pruef:{rochade:true}}),
  T('Weiß hat kurz rochiert. Klicke den König und den Turm an, die rochiert haben.','4k3/8/8/8/8/8/5PPP/R4RK1',['f1','g1'],'Der König g1 und der Turm f1.',['Wo steht der König nach der kurzen Rochade?','Der Turm steht direkt daneben.']),
  T('Der Turm e2 gibt Schach. Darf Weiß rochieren? Markiere die Zielfelder. Wenn keine, drücke „Prüfen“ ohne Markierung.','4k3/8/8/8/8/8/4r3/R3K2R',null,'Keine. Aus dem Schach heraus ist keine Rochade erlaubt. Weiß schlägt den Turm mit dem König.',['Steht der König im Schach?','Bedingung 3.'],{rechte:'KQ',schach:true,leer:true,pruef:{rochade:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 14 geschrieben');
