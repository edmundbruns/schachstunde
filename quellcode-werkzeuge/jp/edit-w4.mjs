// Woche 4 „Dame, König, Springer“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,dameVideo:'https://www.youtube.com/watch?v=DSPy3bv5Yek',koenigVideo:'https://www.youtube.com/watch?v=-_B-l6MULxU',springerVideo:'https://www.youtube.com/watch?v=9nzY3wG0zY4',
 fangSpringer:'https://www.youtube.com/watch?v=lyCmGN_bbvM',koenigsrennen:'https://www.youtube.com/watch?v=A_k_JdwmI7g'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
F[4]={thema:'Dame, König, Springer',
 lernziel:'Ich kann mit Dame, König und Springer regelgerecht ziehen und schlagen.',
 leitfrage:'Wie ziehen Dame, König und Springer, und was ist beim Springer und beim König besonders?',
 vorwissen:'Turm und Läufer ziehen und schlagen (Woche 3).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Erklärvideos „Schach erklärt: Die Dame“, „Der König“ und „Der Springer“, Minispiele „Fang den Springer“ und „Königsrennen“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Turm und Läufer wiederholen, die neuen Figuren finden',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 und W2 die Fehler aus Woche 3 aufgreifen: Wohin ziehen Turm und Läufer? W5 und W6: Was können sie schlagen?',
   'W3 und W4: Wo stehen Dame, König und Springer in der Grundstellung? Ziel nennen: „Heute lernt ihr die letzten drei Figuren, die Dame, den König und den Springer.“'],
  kinder:'Ich ziehe Turm und Läufer richtig und finde Dame, König und Springer.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Drei Erklärvideos, nach jedem Video zwei Aufgaben',
  ablauf:['Erklärvideo „Die Dame“, danach am Lehrbrett E1 und E2. Merksatz: „Die Dame zieht wie Turm und Läufer zusammen.“',
   'Erklärvideo „Der König“, danach E3 und E4. Merksatz: „Der König zieht ein Feld in jede Richtung. Er darf nie auf ein Feld, das angegriffen ist.“',
   'Erklärvideo „Der Springer“, danach E5 und E6. Die Kinder zeigen die Springer-Sprünge mit dem Finger am eigenen Brett: zwei gerade, eins zur Seite. Merksatz: „Der Springer springt über Figuren und wechselt bei jedem Zug die Farbe.“'],
  kinder:'Ich zeige die Zugfelder von Dame, König und Springer.',
  links:[{art:'video',label:'Erklärvideo „Die Dame“',url:URLS.dameVideo},{art:'video',label:'Erklärvideo „Der König“',url:URLS.koenigVideo},{art:'video',label:'Erklärvideo „Der Springer“',url:URLS.springerVideo},{art:'feld',label:'Lehrbrett: Dame, König, Springer E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Springer-Wege zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen Springer und legt ein Steinchen als Ziel. Kind B bringt den Springer mit möglichst wenigen Sprüngen hin und sagt jeden Sprung an, zum Beispiel „Springer von b1 nach c3“. Danach wechseln die Rollen.',
   'Frage zwischendurch: „Warum braucht der Springer für ein Nachbarfeld so viele Sprünge?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich sage meine Springersprünge richtig an und löse das Arbeitsblatt.',
  links:[{art:'druck',label:'Arbeitsblatt: Dame, König, Springer',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: König neben König, König auf ein angegriffenes Feld, Springer zieht gerade oder schräg, Dame zieht wie ein Springer.',
   'Bei jeder Aufgabe nachfragen: „Warum darf die Figur dort nicht hin?“ oder „Woran erkennst du das?“ Alle sprechen die drei Merksätze.'],
  kinder:'Ich kann erklären, warum ein Zug von Dame, König oder Springer nicht erlaubt ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Springerzug und einen Königszug zeigen. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich ziehe und schlage mit Dame, König und Springer ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Fang den Springer“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Weiß hat Turm, Läufer und Springer, Schwarz nur einen Springer. Weiß versucht, den schwarzen Springer zu schlagen. Schwarz flieht und darf selbst schlagen. Wer den Springer in zehn Zügen fängt, gewinnt, sonst gewinnt Schwarz. Danach wechseln die Rollen.',
   'Rückblick: „Was ist beim Springer anders als bei allen anderen Figuren?“ Aufräum-Ritual. Ausblick: Nächstes Mal kommt die letzte Figur, der Bauer.'],
  kinder:'Ich ziehe im Spiel nur mit erlaubten Zügen.',
  links:[{art:'video',label:'Minispiel „Fang den Springer“ (Video)',url:URLS.fangSpringer}]}],
 hinweise:{hilfe:'Springer-Weg mit dem Finger zeigen: zwei gerade, eins zur Seite. Bei der Dame erst wie ein Turm, dann wie ein Läufer zählen.',
  zusatz:'Minispiel „Königsrennen“ der Schulschachstiftung: Beide Könige laufen zur anderen Seite, ohne sich zu berühren. Oder: Wie viele Sprünge braucht der Springer von a1 nach h8?',
  kuerzen:'In der Erarbeitung nur E1, E3 und E5 zeigen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer zieht den Springer noch gerade oder schräg? Wer stellt den König neben den gegnerischen König? Den Springer greifst du in Woche 5 im Einstieg wieder auf.',
 feld:{
 W:[T('Markiere alle Felder, auf die der Turm auf a8 ziehen kann.',{a8:'R'},null,'14 Felder: die a-Linie von a1 bis a7 und die 8. Reihe von b8 bis h8.',['Linie a und Reihe 8.','Tipp: Klicke auf a und 8 am Rand und nimm a8 wieder weg.'],{leer:true,pruef:{zuege:'a8'}}),
  T('Markiere alle Felder, auf die der Läufer auf f1 ziehen kann.',{f1:'B'},null,'e2, d3, c4, b5, a6, g2 und h3. Alle sind hell wie f1.',['Der Läufer zieht schräg.','Von f1 gibt es zwei Diagonalen.'],{leer:true,pruef:{zuege:'f1'}}),
  T('Klicke die weiße Dame und den weißen König an.',START,['d1','e1'],'Die Dame steht auf d1, ihrer Farbe. Der König steht daneben auf e1.',['Die Dame steht auf ihrer Farbe.','Der König steht neben der Dame.']),
  T('Klicke alle vier Springer an.',START,['b1','g1','b8','g8'],'b1, g1, b8 und g8, direkt neben den Türmen.',['Die Pferde wohnen in den Türmen.','Sie stehen direkt neben den Ecken.']),
  T('Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.',{a1:'R',a5:'n',e1:'b',c3:'p'},null,'a5 und e1. Der Bauer auf c3 steht nicht auf der Linie und nicht auf der Reihe des Turms.',['Linie a und Reihe 1.','Ist der Weg frei?'],{pruef:{schlaege:['a1']}}),
  T('Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an.',{c1:'B',f4:'n',a3:'r',c5:'p'},null,'a3 und f4. Der Bauer auf c5 steht gerade vor dem Läufer.',['Der Läufer zieht schräg.','Fahre beide Diagonalen von c1 ab.'],{pruef:{schlaege:['c1']}})],
 E:[T('Die Dame steht auf d4. Markiere alle Felder, auf die sie ziehen kann.',{d4:'Q'},null,'27 Felder: die d-Linie, die 4. Reihe und beide Diagonalen durch d4.',['Erst wie ein Turm: Linie und Reihe.','Dann wie ein Läufer: beide Diagonalen.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Markiere alle Felder, auf die die Dame ziehen kann. Achte auf die anderen Figuren.',{d1:'Q',d5:'p',b3:'P',g4:'n',e2:'P'},null,'a1, b1, c1, e1, f1, g1, h1, d2, d3, d4, d5 und c2. Auf d5 schlägt sie den Bauern. Vor b3 und e2 hält sie an.',['Prüfe acht Richtungen.','Eigene Figur: anhalten. Gegnerische Figur: schlagen.'],{leer:true,pruef:{zuege:'d1'}}),
  T('Der König steht auf e4. Markiere alle Felder, auf die er ziehen kann.',{e4:'K'},null,'8 Felder rund um e4: d3, e3, f3, d4, f4, d5, e5 und f5.',['Der König zieht genau ein Feld.','In jede Richtung, auch schräg.'],{leer:true,pruef:{zuege:'e4'}}),
  T('Der König steht in der Grundstellung. Wohin kann er ziehen?',{e1:'K',d2:'P',e2:'P',f2:'P',d1:'Q',f1:'B'},null,'Nirgendwohin. Alle Nachbarfelder sind mit eigenen Figuren besetzt. Drücke „Prüfen“ ohne Markierung.',['Schau auf alle Nachbarfelder.','Auf eigene Figuren darf der König nicht ziehen.'],{leer:true,pruef:{zuege:'e1'}}),
  T('Der Springer steht auf d4. Markiere alle Felder, auf die er springen kann.',{d4:'N'},null,'8 Felder: c2, e2, b3, f3, b5, f5, c6 und e6. Alle haben die andere Farbe als d4.',['Zwei Felder gerade, dann eins zur Seite.','Die Zielfelder bilden einen Kreis um den Springer.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Markiere alle Felder, auf die der Springer auf g1 springen kann. Stören die Bauern?',{g1:'N',e2:'P',f2:'P',g2:'P',h2:'P',h3:'p'},null,'f3 und h3. Auf h3 schlägt er den schwarzen Bauern. Die Bauern auf f2, g2 und h2 stören nicht, denn der Springer springt über sie. Auf e2 steht ein eigener Bauer, dorthin darf er nicht.',['Der Springer springt über Figuren.','Auf e2 steht ein eigener Bauer.'],{leer:true,pruef:{zuege:'g1'}})],
 A:[T('Markiere alle Felder, auf die die Dame ziehen kann.',{f3:'Q',f6:'P',c6:'n',d3:'P'},null,'f1, f2, f4, f5, g3, h3, e3, e2, d1, g2, h1, e4, d5, c6, g4 und h5. Auf c6 schlägt sie den Springer.',['Acht Richtungen prüfen.','Vor f6 und d3 hält sie an.'],{leer:true,pruef:{zuege:'f3'}}),
  T('Markiere alle Felder, auf die der König ziehen kann.',{d5:'K',c6:'P',e4:'P'},null,'c4, d4, c5, e5, d6 und e6. Auf c6 und e4 stehen eigene Bauern.',['Acht Nachbarfelder.','Eigene Figuren blockieren.'],{leer:true,pruef:{zuege:'d5'}}),
  T('Markiere alle Felder, auf die der Springer auf b1 in der Grundstellung springen kann.',START,null,'a3 und c3. Auf d2 steht ein eigener Bauer. Er springt über die Bauern hinweg.',['Zwei nach vorn, eins zur Seite.','Auf d2 steht schon ein Bauer.'],{leer:true,pruef:{zuege:'b1'}}),
  T('Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.',{e5:'N',d7:'r',g4:'b',e6:'q',c5:'n',f3:'P'},null,'d7 und g4. Die Dame auf e6 steht direkt neben ihm, der Springer auf c5 zwei Felder gerade daneben. Beides erreicht ein Springer nie.',['Zeige alle acht Springerfelder.','Direkte Nachbarfelder erreicht der Springer nie.'],{pruef:{schlaege:['e5']}}),
  T('Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an. Warum nicht den Turm auf b7?',{b2:'Q',b7:'r',f6:'b',g7:'n',e2:'p',b4:'P'},null,'e2 und f6. Vor dem Turm auf b7 steht der eigene Bauer auf b4. Der Springer auf g7 steht hinter dem Läufer.',['Prüfe die b-Linie, die 2. Reihe und die Diagonalen.','In jeder Richtung zählt nur die erste Figur.'],{pruef:{schlaege:['b2']}}),
  T('Der Springer auf g1 will nach g5. Markiere die beiden Felder, über die er in zwei Sprüngen hinkommt.',{g1:'N'},null,'f3 und h3. Von dort springt er weiter nach g5.',['Erst zwei Felder nach vorn.','Von welchen Feldern erreicht er g5?'],{leer:true,pruef:{ueber:['g1','g5']}})],
 S:[T('Auf welche Nachbarfelder darf der weiße König nicht ziehen, weil der schwarze König dort angreift? Markiere sie.',{e4:'K',e6:'k'},null,'d5, e5 und f5. Zwei Könige dürfen nie nebeneinander stehen.',['Welche Felder berühren beide Könige?','Sie liegen zwischen den Königen.'],{leer:true,pruef:{verboten:'e4'}}),
  T('Ein Kind zieht den Springer von d4 nach d6. Das ist falsch. Markiere die Felder der 6. Reihe, auf die er wirklich springen kann.',{d4:'N'},null,'c6 und e6. Der Springer zieht nie nur gerade, er springt zwei gerade und eins zur Seite.',['Zwei nach vorn bis d6, dann eins zur Seite.','Links oder rechts von d6.'],{leer:true,pruef:{zuege:'d4',reihe:6}}),
  T('Der Springer steht auf e4, einem hellen Feld. Markiere alle seine Zielfelder. Welche Farbe haben sie?',{e4:'N'},null,'d2, f2, c3, g3, c5, g5, d6 und f6. Alle sind dunkel. Der Springer wechselt bei jedem Sprung die Farbe.',['Zwei gerade, eins zur Seite.','Schau auf die Farbe der Zielfelder.'],{leer:true,pruef:{zuege:'e4'}}),
  T('Ein Kind zieht die Dame von d1 nach c3. Das ist ein Springerzug. Markiere die Felder der 3. Reihe, die die Dame wirklich erreicht.',{d1:'Q'},null,'b3, d3 und f3. c3 und e3 erreicht nur ein Springer.',['Die Dame zieht gerade oder schräg.','Von d1 geradeaus und auf beiden Diagonalen bis zur 3. Reihe.'],{leer:true,pruef:{zuege:'d1',reihe:3}}),
  T('Wohin darf der König ziehen? Achtung, der schwarze Turm greift die 2. Reihe an.',{e1:'K',a2:'r'},null,'Nur d1 und f1. Auf d2, e2 und f2 würde ihn der Turm angreifen.',['Der König darf nie auf ein angegriffenes Feld.','Die ganze 2. Reihe ist angegriffen.'],{leer:true,pruef:{zuege:'e1'}}),
  T('Welche weißen Figuren können in einem Zug nach f7 ziehen? Klicke sie an.',{d5:'Q',a7:'R',e5:'N',h5:'B',c4:'N',f2:'K'},null,'Die Dame auf d5, der Turm auf a7, der Springer auf e5 und der Läufer auf h5. Der Springer auf c4 und der König kommen nicht hin.',['Prüfe jede Figur nach ihrer Gangart.','Der König zieht nur ein Feld.'],{pruef:{erreichen:'f7'}})],
 L:[T('Markiere alle Felder, auf die die Dame auf e5 ziehen kann.',{e5:'Q',e7:'P',b2:'b'},null,'24 Felder: die 5. Reihe ohne e5, dazu e1 bis e4 und e6 (vor e7 hält sie an). Auf den Diagonalen d4, c3 und b2 (dort schlägt sie), d6, c7, b8, f6, g7, h8 sowie f4, g3, h2.',['Acht Richtungen.','Vor e7 hält sie an, auf b2 schlägt sie.'],{leer:true,pruef:{zuege:'e5'}}),
  T('Markiere alle Felder, auf die der König in der Ecke auf a1 ziehen kann.',{a1:'K'},null,'a2, b1 und b2. In der Ecke hat der König nur drei Felder.',['Der König zieht ein Feld.','In der Ecke gibt es nur drei Nachbarfelder.'],{leer:true,pruef:{zuege:'a1'}}),
  T('Markiere alle Felder, auf die der Springer in der Ecke auf h1 springen kann.',{h1:'N'},null,'f2 und g3. In der Ecke hat der Springer nur zwei Felder.',['Zwei gerade, eins zur Seite.','Vom Rand aus fallen viele Felder weg.'],{leer:true,pruef:{zuege:'h1'}}),
  T('Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.',{c3:'N',b5:'r',e4:'q',c5:'n',d3:'p'},null,'b5 und e4. Die Figuren auf c5 und d3 kann er nicht erreichen.',['Zeige alle Springerfelder von c3.','Direkt daneben oder zwei gerade ohne Seitenschritt geht nicht.'],{pruef:{schlaege:['c3']}}),
  T('Wohin darf der König ziehen? Der schwarze Turm greift an.',{d4:'K',h5:'r'},null,'c3, d3, e3, c4 und e4. Die Felder der 5. Reihe greift der Turm an.',['Welche Felder greift der Turm auf h5 an?','Die ganze 5. Reihe.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Welche weißen Figuren können in einem Zug nach d6 ziehen? Klicke sie an.',{b4:'Q',e4:'N',h2:'B',d1:'R',d3:'P'},null,'Die Dame auf b4, der Springer auf e4 und der Läufer auf h2. Vor dem Turm steht der eigene Bauer auf d3.',['Prüfe jede Figur nach ihrer Gangart.','Ist der Weg frei?'],{pruef:{erreichen:'d6'}})]}};
F[3].nachher=F[3].nachher; // unverändert
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 4 geschrieben');
