// Woche 7 „Figurenwerte und Tauschen“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,punktespiel:'https://www.youtube.com/watch?v=TCasLqTc5LM'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
const P=f=>f.split(' ')[0];
const LUMI='Lumi, Guter oder schlechter Tausch',UEB='Lumi Übungsbuch, Wen schlagen?',DIP='Ludgerus-Schachdiplom Bronze 2';
F[7]={thema:'Figurenwerte und Tauschen',
 lernziel:'Ich kann mit Figurenwerten prüfen, ob sich ein Schlagzug lohnt.',
 leitfrage:'Wann lohnt es sich zu schlagen, und wann verliere ich dabei mehr, als ich bekomme?',
 vorwissen:'Angegriffen, gedeckt und hängend (Woche 6).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lumi-Aufgaben „Guter oder schlechter Tausch“ und Übungsbuch „Wen schlagen?“ (über die Lumi-Sammlung von edmundbruns.com), Ludgerus-Schachdiplom Bronze 2, Minispiel „Punktespiel“ (Deutsche Schulschachstiftung). Tauschbilanzen automatisch nachgerechnet, Tauschaussagen zusätzlich mit Stockfish geprüft',
 phasen:[
 {name:'Einstieg',titel:'Angriff und Deckung wiederholen, was sind Figuren wert?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W4 die Fehler aus Woche 6 aufgreifen: angegriffene und hängende Figuren finden, sicher wegziehen, den Angreifer schlagen.',
   'W5 und W6: Welche Figuren sind am meisten wert? Ziel nennen: „Heute lernt ihr, wie viel Punkte die Figuren wert sind und wann sich ein Schlagzug lohnt.“'],
  kinder:'Ich finde angegriffene Figuren und schätze, welche Figur mehr wert ist.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Figurenwerte und Tauschen rechnen',
  ablauf:['Plakat „Figurenwerte“ aufhängen und gemeinsam lesen: Bauer 1, Springer 3, Läufer 3, Turm 5, Dame 9, der König ist unbezahlbar.',
   'Am Lehrbrett E1 bis E6 gemeinsam rechnen: Was bekomme ich? Wer schlägt zurück? Was verliere ich dann? Die Kinder rechnen mit den Fingern mit.',
   'Merksatz: „Erst rechnen, dann schlagen: Bekomme ich mehr, als ich verliere?“'],
  kinder:'Ich nenne die Werte aller Figuren und rechne einen Tausch aus.',
  links:[{art:'druck',label:'Plakat: Figurenwerte',was:'werte'},{art:'feld',label:'Lehrbrett: Tauschen rechnen E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Tauschbörse zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt eine weiße Figur, die schlagen kann, eine schwarze Figur und vielleicht eine Figur, die zurückschlägt. Kind B rechnet und sagt: guter, gleicher oder schlechter Tausch. Danach wechseln die Rollen.',
   'Frage zwischendurch: „Warum ist Dame gegen Turm schlecht, wenn der Turm gedeckt ist?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich rechne Tausche richtig aus und löse das Arbeitsblatt.',
  links:[{art:'druck',label:'Arbeitsblatt: Tauschen',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: das Zurückschlagen vergessen, nur auf die erste Figur schauen, nicht die wertvollste Figur schlagen, ungedeckte Figuren übersehen.',
   'Bei jeder Aufgabe nachfragen: „Was bekommst du, und was gibst du?“ oder „Woran erkennst du, dass niemand zurückschlagen kann?“ Alle sprechen den Merksatz.'],
  kinder:'Ich kann begründen, ob ein Tausch gut, gleich oder schlecht ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Lohnt sich dieser Schlagzug? Rechne es mir vor.“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne gute und schlechte Tausche ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Punktespiel“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Würfelt eine Zahl und rechnet sie mal zwei, zum Beispiel 6 mal 2 ergibt 12. Jedes Kind stellt seinen König und dazu Figuren für genau so viele Punkte auf, Bauern auf die 2. oder 7. Reihe, die anderen Figuren auf die Grundreihe. Dann wird nach den Regeln gespielt. Wer nach zehn Minuten mehr Punkte geschlagen hat, gewinnt. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Rückblick: „Wann lohnt sich ein Schlagzug?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um den König: Schach und Matt.'],
  kinder:'Ich wähle Figuren nach Punkten und rechne im Spiel, bevor ich schlage.',
  links:[{art:'video',label:'Minispiel „Punktespiel“ (Video)',url:URLS.punktespiel}]}],
 hinweise:{hilfe:'Plakat „Figurenwerte“ neben das Brett legen. Geschlagene Figuren neben das Brett stellen und zusammenzählen.',
  zusatz:'Eine Stellung bauen, in der ein Turm gegen einen Läufer und einen Springer getauscht wird. Wer gewinnt dabei?',
  kuerzen:'Die Tauschbörse entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Punktespiel dauert nur fünf Minuten.'},
 nachher:'Wer schlägt noch, ohne an das Zurückschlagen zu denken? Wer kennt die Figurenwerte noch nicht sicher? Das Rechnen greifst du in Woche 8 beim Schachgeben wieder auf: Bietet das Schach dem Gegner etwas zum Schlagen an?',
 feld:{
 W:[T('Welche weißen Figuren sind angegriffen? Klicke sie an.',{d3:'B',f4:'N',b1:'R',g2:'P',a6:'b',e5:'p',b8:'r'},null,'d3 (Läufer a6), f4 (Bauer e5) und b1 (Turm b8). Der Bauer auf g2 ist sicher.',['Prüfe jede schwarze Figur.','Der schwarze Bauer greift schräg nach unten an.'],{pruef:{angegriffen:'w'}}),
  T('Welche weißen Figuren hängen? Klicke sie an.',{c4:'N',b3:'P',e2:'B',h5:'R',a6:'q',f4:'n'},null,'Nur der Läufer e2. Den Turm h5 greift der Springer f4 zwar auch an, aber der Läufer e2 deckt ihn. Den Springer c4 deckt der Bauer b3.',['Erst angegriffene Figuren suchen.','Dann prüfen: Deckt sie jemand?'],{pruef:{haengt:'w'}}),
  T('Der weiße Springer ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.',{e4:'N',d5:'p',c8:'r',h6:'p'},null,'d2, d6, f2, f6 und g3. Auf c3 und c5 greift der Turm an, auf g5 der Bauer h6.',['Zeige alle Springerfelder.','Streiche die Felder, die Schwarz angreift.'],{leer:true,pruef:{sicher:'e4'}}),
  T('Der schwarze Läufer greift die weiße Dame an. Welche weißen Figuren können ihn schlagen? Klicke sie an.',{d1:'Q',g4:'b',f2:'N',h3:'P'},null,'Der Springer f2, der Bauer h3 und die Dame selbst. Am besten schlägt der Bauer, die kleinste Figur.',['Welche weiße Figur kann nach g4?','Auch die Dame kann den Angreifer schlagen.'],{pruef:{erreichen:'g4'}}),
  T('Klicke die beiden Figuren an, die am meisten wert sind.',START,['d1','d8'],'Die beiden Damen. Eine Dame ist 9 Punkte wert. Der König ist unbezahlbar, er wird nie geschlagen.',['Sie kann wie Turm und Läufer ziehen.','Sie steht auf ihrer Farbe.']),
  T('Klicke alle weißen Figuren an, die 3 Punkte wert sind.',START,['b1','c1','f1','g1'],'Die beiden Springer und die beiden Läufer. Man nennt sie Leichtfiguren.',['Es sind zwei verschiedene Figurenarten.','Sie stehen zwischen Turm und Dame.'])],
 E:[T('Der weiße Turm kann den schwarzen Turm auf d5 schlagen. Klicke die Figur an, die Weiß ohne Risiko schlagen kann.',P('4k3/8/8/3r4/8/8/8/3RK3 w - - 0 1'),null,'d5. Niemand schlägt zurück: Weiß bekommt 5 Punkte und gibt nichts.',['Wer könnte nach dem Schlagen zurückschlagen?','Niemand deckt den schwarzen Turm.'],{quelle:DIP+', Aufgabe 14',pruef:{gewinn:'w'},tausch:{zug:'d1d5',ergebnis:'gut'}}),
  T('Weiß schlägt mit dem Springer auf d5. Klicke die schwarze Figur an, die zurückschlagen würde. Wie steht es danach?',P('4k3/8/4p3/3n4/8/2N5/8/4K3 w - - 0 1'),null,'Der Bauer e6 schlägt zurück. Springer gegen Springer, 3 gegen 3: ein gleicher Tausch.',['Wer deckt den schwarzen Springer?','Bauern decken schräg.'],{quelle:DIP+', Aufgabe 14',pruef:{verteidiger:'d5'},tausch:{zug:'c3d5',ergebnis:'gleich'}}),
  T('Lohnt es sich, mit der Dame den Läufer auf d4 zu schlagen? Klicke die schwarze Figur an, die den Läufer deckt.',P('8/4k3/8/4p3/3b4/8/3Q2K1/8 w - - 0 1'),null,'Der Bauer e5. Nach Dxd4 exd4 gibt Weiß die Dame (9) für den Läufer (3): ein schlechter Tausch.',['Wer könnte nach dem Schlagen zurückschlagen?','Der Bauer schlägt schräg nach unten.'],{quelle:'Lumi Selbstlernkurs I, Tauschen',pruef:{verteidiger:'d4'},tausch:{zug:'d2d4',ergebnis:'schlecht'}}),
  T('Der Springer kann den Turm auf a8 schlagen. Klicke die Figur an, die der Springer mit Gewinn schlagen kann.',P('r4rk1/2N2ppp/5n2/8/8/7P/5PP1/4RRK1 w - - 0 1'),null,'a8. Der Turm f8 schlägt zwar zurück, aber Weiß bekommt 5 und gibt 3: ein guter Tausch.',['Was ist ein Turm wert, was ein Springer?','Auch mit Zurückschlagen bleibt ein Plus.'],{quelle:LUMI+', Beispiel 1',pruef:{gewinn:'w'},tausch:{zug:'c7a8',ergebnis:'gut'}}),
  T('Weiß kann mit der Dame den Springer auf g5 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.',P('4r1k1/4qppp/8/6n1/8/2N5/PPPQ4/2KR4 w - - 0 1'),null,'Die Dame e7. Nach Dxg5 Dxg5 gibt Weiß 9 für 3: ein schlechter Tausch.',['Wer deckt den Springer auf g5?','Schau auf die Diagonale von e7.'],{quelle:LUMI+', Beispiel 2',pruef:{verteidiger:'g5'},tausch:{zug:'d2g5',ergebnis:'schlecht'}}),
  T('Klicke die Figur an, die der weiße Bauer mit Gewinn schlagen kann.',P('rnbqkb1r/pp1ppppp/5n2/2p1P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'),null,'Den Springer f6. Auch wenn ein Bauer zurückschlägt: Weiß bekommt 3 und gibt 1.',['Der Bauer schlägt schräg nach vorn.','Ein Bauer gegen einen Springer ist gut.'],{quelle:LUMI+', Aufgabe 5',pruef:{gewinn:'w'},tausch:{zug:'e5f6',ergebnis:'gut'}})],
 A:[T('Weiß kann mit dem Springer den Bauern e5 schlagen. Klicke die schwarze Figur an, die zurückschlagen würde.',P('r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'),null,'Der Springer c6. Nach Sxe5 Sxe5 gibt Weiß 3 für 1: ein schlechter Tausch.',['Wer deckt den Bauern e5?','Zeige die Springerfelder von c6.'],{quelle:LUMI+', Aufgabe 1',pruef:{verteidiger:'e5'},tausch:{zug:'f3e5',ergebnis:'schlecht'}}),
  T('Weiß kann mit der Dame den Turm d8 schlagen. Klicke die Figur an, die zurückschlagen würde.',P('3rr1k1/5ppp/8/8/8/8/PPP5/1KRQ4 w - - 0 1'),null,'Der Turm e8. Nach Dxd8 Txd8 gibt Weiß 9 für 5: ein schlechter Tausch.',['Wer deckt den Turm d8?','Schau auf die 8. Reihe.'],{quelle:LUMI+', Aufgabe 2',pruef:{verteidiger:'d8'},tausch:{zug:'d1d8',ergebnis:'schlecht'}}),
  T('Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.',P('r1b1kbnr/pppp1ppp/2n1q3/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1'),null,'Die Dame e6. Der Läufer schlägt sie, ein Bauer schlägt zurück: Weiß bekommt 9 und gibt 3.',['Welche schwarze Figur ist am meisten wert?','Welche weiße Figur kann sie schlagen?'],{quelle:LUMI+', Aufgabe 3',pruef:{gewinn:'w'},tausch:{zug:'c4e6',ergebnis:'gut'}}),
  T('Klicke die schwarze Figur an, die der weiße Bauer mit Gewinn schlagen kann.',P('rn1qkb1r/ppp1nppp/3p4/4pb2/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1'),null,'Den Läufer f5. Der Springer e7 schlägt zurück, aber Weiß bekommt 3 und gibt 1.',['Der Bauer schlägt schräg nach vorn.','Bauer gegen Läufer ist gut.'],{quelle:LUMI+', Aufgabe 6',pruef:{gewinn:'w'},tausch:{zug:'e4f5',ergebnis:'gut'}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an.',P('7k/3n4/8/8/1q1R1bp1/8/8/3R3K w - - 0 1'),null,'Die Dame b4. Sie ist 9 Punkte wert, und niemand schlägt zurück.',['Welche schwarzen Figuren kann Weiß schlagen?','Welche ist am meisten wert?'],{quelle:UEB+' Aufgabe 1',pruef:{beste:'w'}}),
  T('Welche Figur sollte der weiße Springer schlagen? Klicke sie an.',P('1kr1r3/pp3pp1/2pN3p/2P2b2/1P5P/P5P1/5P2/3R1RK1 w - - 0 1'),null,'Den Läufer f5. Er ist ungedeckt: plus 3. Sxe8 brächte nur plus 2, weil der Turm c8 zurückschlägt.',['Zeige alle Springerfelder von d6.','Rechne für jedes Ziel: Was bekomme ich, was verliere ich?'],{quelle:UEB+' Aufgabe 5',pruef:{beste:'w'}})],
 S:[T('Lohnt es sich, mit dem Turm den Springer auf d5 zu schlagen? Klicke die Figur an, die zurückschlagen würde.','4k3/pp3pp1/4p3/3n4/8/8/PP3PP1/3RK3',null,'Der Bauer e6. Nach Txd5 exd5 gibt Weiß 5 für 3: ein schlechter Tausch.',['Wer deckt den Springer?','Was ist mehr wert, Turm oder Springer?'],{quelle:DIP+', Materialgewinn (mit Bauern ergänzt)',pruef:{verteidiger:'d5'},tausch:{zug:'d1d5',ergebnis:'schlecht'}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an.',P('r1bqkbnr/p1p2ppp/1pnp4/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 1'),null,'Den Springer c6. Niemand schlägt zurück. Sxe5 wäre schlecht, weil d6 und der Springer c6 den Bauern decken.',['Welche schwarzen Figuren sind ungedeckt?','Der Läufer b5 zielt auf c6.'],{quelle:UEB+' Aufgabe 2',pruef:{beste:'w'}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an. Warum nicht den Läufer e6?',P('r2q1rk1/2p2ppp/pbnpbn2/1p1Pp1B1/4P3/2P2N2/PPB2PPP/RN1Q1RK1 w - - 0 1'),null,'Den Springer c6, er ist ungedeckt. Nach dxe6 schlägt der Bauer f7 zurück, dann bleiben nur plus 2.',['Welche Figuren kann der Bauer d5 schlagen?','Wer schlägt jeweils zurück?'],{quelle:UEB+' Aufgabe 3',pruef:{beste:'w'}}),
  T('Schwarz ist am Zug und kann drei Figuren schlagen. Klicke die beste an.',P('5bk1/5ppp/8/N1r3Q1/8/8/5PPP/2B2K2 b - - 0 1'),null,'Die Dame g5. Der Läufer c1 schlägt zwar zurück, aber Schwarz bekommt 9 und gibt 5.',['Welche weißen Figuren erreicht der Turm c5?','Welche ist am meisten wert?'],{quelle:'Lumi Test zu Kurs I, Aufgabe 11',pruef:{beste:'b'}}),
  T('Ist es gut, die schwarze Dame zu schlagen? Klicke die Figur an, die Weiß mit Gewinn schlagen kann.',P('4k3/8/8/3q4/8/8/3Q4/4K3 w - - 0 1'),null,'Die Dame d5. Sie ist ungedeckt: Weiß bekommt 9 und gibt nichts.',['Kann jemand zurückschlagen?','Der schwarze König steht zu weit weg.'],{quelle:'Ludgerus-Schachdiplom Bronze 4, Aufgabe 8',pruef:{gewinn:'w'},tausch:{zug:'d2d5',ergebnis:'gut'}}),
  T('Die Dame kann den Turm d4 schlagen. Wer kann zurückschlagen? Klicke ihn an. Wenn niemand, drücke „Prüfen“ ohne Markierung.',P('4k3/8/8/8/3r4/8/8/3QK3 w - - 0 1'),null,'Niemand. Dame gegen Turm ist hier gut, weil der Turm ungedeckt ist: plus 5.',['Wer deckt den Turm?','Der schwarze König steht zu weit weg.'],{quelle:DIP+', Materialgewinn',pruef:{verteidiger:'d4'},tausch:{zug:'d1d4',ergebnis:'gut'}})],
 L:[T('Weiß kann mit der Dame den Springer g6 schlagen. Klicke alle schwarzen Figuren an, die zurückschlagen würden.',P('r1b1kb1r/pp3ppp/1qn1p1n1/2ppP3/3P2Q1/1PPB4/P3NPPP/RNB1K2R w KQkq - 0 1'),null,'Die Bauern f7 und h7. Dame gegen Springer, 9 gegen 3: ein schlechter Tausch.',['Wer deckt den Springer g6?','Bauern decken schräg nach unten.'],{quelle:LUMI+', Aufgabe 4',pruef:{verteidiger:'g6'},tausch:{zug:'g4g6',ergebnis:'schlecht'}}),
  T('Eine Seite hat eine Figur mehr. Klicke diese Figur an.',P('6k1/pp3pp1/7p/2n5/3N4/P3PB2/5PPP/6K1 w - - 0 1'),['f3'],'Der weiße Läufer f3. Bauern und Springer sind auf beiden Seiten gleich, Weiß hat zusätzlich den Läufer.',['Zähle die Figuren jeder Seite.','Vergleiche Springer und Läufer.'],{quelle:'Lumi Übungsbuch, Wer führt? Aufgabe 2'}),
  T('Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.','4k3/8/2p5/1b6/4n3/2N5/8/4R1K1',null,'Den Springer e4. Er ist ungedeckt. Den Läufer b5 schlägt der Bauer c6 zurück: nur ein gleicher Tausch.',['Welche Figuren kann Weiß schlagen?','Wer schlägt jeweils zurück?'],{pruef:{gewinn:'w'},tausch:{zug:'e1e4',ergebnis:'gut'}}),
  T('Welche Figur sollte die Dame schlagen? Klicke sie an.','k7/8/3r4/7p/6n1/8/8/3Q3K',null,'Den Turm d6, er ist ungedeckt: plus 5. Den Springer g4 deckt der Bauer h5: Dame gegen Springer wäre schlecht.',['Welche schwarzen Figuren greift die Dame an?','Welche davon ist gedeckt?'],{pruef:{beste:'w'},tausch:{zug:'d1g4',ergebnis:'schlecht'}}),
  T('Lohnt es sich, mit dem Läufer den Springer c6 zu schlagen? Klicke die Figur an, die zurückschlagen würde.','4k3/1p6/2n5/8/B7/8/8/4K3',null,'Der Bauer b7. Läufer gegen Springer, 3 gegen 3: ein gleicher Tausch.',['Wer deckt den Springer?','Läufer und Springer sind gleich viel wert.'],{pruef:{verteidiger:'c6'},tausch:{zug:'a4c6',ergebnis:'gleich'}}),
  T('Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.','b6k/3q4/6p1/3p1n2/4P3/8/8/R5K1',null,'Den Läufer a8 (ungedeckt) und den Springer f5 (Bauer gegen Springer). Den Bauern d5 deckt die Dame: nur ein gleicher Tausch.',['Prüfe jede weiße Figur.','Rechne für jedes Ziel: Was bekomme ich, was verliere ich?'],{pruef:{gewinn:'w'},tausch:{zug:'e4f5',ergebnis:'gut'}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 7 geschrieben');
