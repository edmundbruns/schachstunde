// Einmaliges Werkzeug: Woche 1 und 2 um Vorwissen, Kürzung, Nachbereitung und Spielvideos ergänzen, Woche 3 anlegen.
// Schreibt jp/fixed-bronze.mjs neu (gleiches Format). © Dr. Edmund Bruns
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,
 aufbauChallenge:'https://www.youtube.com/watch?v=zz0MdJ6aEg4',schiffeVideo:'https://www.youtube.com/watch?v=4Kh3sRBwY4Q',
 turmVideo:'https://www.youtube.com/watch?v=x-aCYU-YhTc',laeuferVideo:'https://www.youtube.com/watch?v=SvWXmnmGeUs',
 steinchen:'https://www.youtube.com/watch?v=Jd-xNNoYH-4',labyrinth:'https://www.youtube.com/watch?v=wc0kKlbhC-Y'};
const F=structuredClone(M.FIXED);
const ph=(w,name)=>F[w].phasen.find(p=>p.name===name);
// ---------- Woche 1 ----------
Object.assign(F[1],{vorwissen:'Keins. Manche Kinder kennen die Figuren schon.',
 nachher:'Wer baut noch mit Aufbaukarte auf? Welche Fehler kamen oft vor, zum Beispiel Brett gedreht oder Dame und König vertauscht? Diese Kinder prüfst du in Woche 2 beim Aufbau-Ritual zuerst.'});
F[1].hinweise.kuerzen='Die Fehlersuche am Lehrbrett auf G1 bis G3 kürzen, die Aufbau-Challenge entfällt. Lerncheck und Aufräum-Ritual bleiben.';
{const p=ph(1,'Übung');p.ablauf=['Figuren abräumen. Kind A baut auf, Kind B prüft mit der Aufbaukarte. Danach wechseln die Rollen. Erfahrene Kinder bauen ohne Karte.',
 'Wer sicher ist, spielt die Aufbau-Challenge: Beide bauen gleichzeitig ihre Farbe auf. Wer zuerst richtig aufgebaut hat, gewinnt. Der Partner prüft, ein Fehler kostet den Sieg.',
 'Wer fertig ist, baut zwei Fehler ein, die der Partner findet und begründet.',
 'Zum Abschluss der Übung gemeinsam am Lehrbrett: Fehlersuche G1 bis G6. Frage bei jedem Fehler: „Woran erkennst du das?“'];
 p.links.splice(1,0,{art:'video',label:'Spielidee: Aufbau-Challenge (Video)',url:URLS.aufbauChallenge})}
{const p=ph(1,'Sicherung');p.ablauf[1]='Zwei oder drei Fragen zur Schachburg (S1 bis S6) mündlich stellen. Frage nach: „Woran erkennst du, dass die Dame richtig steht?“ Alle sprechen den Merksatz.'}
{const p=ph(1,'Lerncheck');p.ablauf[0]='Aufbaukarten umdrehen. Kind A baut die Grundstellung ohne Vorlage auf, Kind B schaut nur zu. Danach wechseln die Rollen.'}
F[1].quelle=F[1].quelle+', Spielidee „Aufbau-Challenge“ (Deutsche Schulschachstiftung)';
// ---------- Woche 2 ----------
Object.assign(F[2],{vorwissen:'Grundstellung und Merksatz „Rechts unten ist hell“ (Woche 1).',
 nachher:'Wer nennt noch die Zahl zuerst oder verwechselt Linie und Reihe? Diese Kinder sagen in Woche 3 die Zielfelder für Turm und Läufer an.'});
F[2].hinweise.kuerzen='Die Feldraten-Blitzrunde entfällt, der Vergleich am Lehrbrett wird auf A7 bis A9 gekürzt. Lerncheck und Aufräumen bleiben.';
{const p=ph(2,'Übung');p.ablauf=['Regeln kurz erklären: Jedes Kind versteckt drei Figuren als Schiffe, einen Bauern, einen Läufer (vier Felder lang) und einen Springer (seine Zielfelder als Kreise). Zwischen zwei Figuren bleibt ein Feld frei.',
 'Abwechselnd ein Feld ansagen, zum Beispiel „e4“. Treffer: X und noch einmal. Wasser: W, dann ist der andere dran. „Figur versenkt!“, wenn alle Felder getroffen sind.',
 'Zweite Runde: Danach wechseln die Rollen, das andere Kind sagt zuerst an.',
 'Zum Schluss der Übung spielen alle gemeinsam gegen dich die Variante „Königliche Rettung“ am Lehrbrett: Der König versteckt sich auf einem Feld. Die Kinder stellen nacheinander Ja/Nein-Fragen, zum Beispiel „Steht der König auf dem Damenflügel?“, und streichen nach jeder Antwort die Felder, auf denen er nicht sein kann. Ziel: den König mit möglichst wenigen Fragen finden.',
 'Frage nach guten Fragen: „Warum streicht diese Frage so viele Felder auf einmal?“'];
 p.links.push({art:'video',label:'Spielidee: Schiffe versenken (Video)',url:URLS.schiffeVideo},{art:'spiel',label:'Lehrbrett: Königliche Rettung (alle gegen die Lehrkraft)',was:'rettung'})}
{const p=ph(2,'Sicherung');p.ablauf=['Die Kinder lösen das Arbeitsheft Schachbrett, allein oder zu zweit.','Vergleich am Lehrbrett mit A7 bis A12. Frage nach: „Woran erkennst du, ob Felder auf einer Linie oder auf einer Reihe liegen?“']}
F[2].hinweise.zusatz='Eigene Ja/Nein-Fragen erfinden, die genau die Hälfte der Felder streichen. Oder Aufgabe 1 im Arbeitsheft mit eigenen Diagonalen.';
F[2].quelle=F[2].quelle+', Spielidee „Schiffe versenken“ als Video (Deutsche Schulschachstiftung)';
// ---------- Woche 3 ----------
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
const L=l=>l.split(' ');
F[3]={thema:'Turm und Läufer',
 lernziel:'Ich kann mit Turm und Läufer regelgerecht ziehen und schlagen.',
 leitfrage:'Wohin darf der Turm ziehen, wohin der Läufer, und was hält sie auf?',
 vorwissen:'Feldnamen, Linie, Reihe und Diagonale (Woche 2).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Erklärvideos „Schach erklärt: Der Turm“ und „Schach erklärt: Der Läufer“, Minispiel „Turm: Steinchen“ und „Labyrinth“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben, alle Zugfelder automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Wo stehen Turm und Läufer? Linie, Reihe, Diagonale',
  ablauf:['Stopp-Signal kurz wiederholen. Am Lehrbrett W1 und W2: Wo stehen Turm und Läufer in der Grundstellung, auf welcher Farbe steht jeder Läufer?',
   'W3 bis W6: Linie, Reihe und Diagonalen markieren lassen. Ziel nennen: „Heute lernt ihr, wie Turm und Läufer ziehen. Dafür braucht ihr Linie, Reihe und Diagonale.“'],
  kinder:'Ich zeige Linie, Reihe und Diagonale.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Erklärvideos, dann gemeinsam am Lehrbrett',
  ablauf:['Erklärvideo „Der Turm“ zeigen. Danach am Lehrbrett T1 bis T3: ziehen, eigene Figuren halten auf, schlagen.',
   'Erklärvideo „Der Läufer“ zeigen. Danach T4 bis T6. Die Kinder probieren am eigenen Brett mit: Turm oder Läufer auf d4 stellen und alle Zielfelder mit dem Finger zeigen.',
   'Merksatz: „Der Turm zieht gerade, der Läufer zieht schräg. Keiner springt über Figuren.“ Schlagen heißt: auf das Feld der gegnerischen Figur ziehen und sie vom Brett nehmen.'],
  kinder:'Ich zeige alle Felder, auf die Turm und Läufer ziehen können.',
  links:[{art:'video',label:'Erklärvideo „Der Turm“',url:URLS.turmVideo},{art:'video',label:'Erklärvideo „Der Läufer“',url:URLS.laeuferVideo},{art:'feld',label:'Lehrbrett: Turm und Läufer T1 bis T6',set:'T'}]},
 {name:'Übung',titel:'Zielfelder zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A stellt einen Turm oder Läufer auf und legt ein Steinchen als Ziel. Kind B erreicht das Ziel in möglichst wenigen Zügen und sagt jeden Zug an, zum Beispiel „Turm von a1 nach a5“. Danach wechseln die Rollen.',
   'Liegt das Ziel für den Läufer auf der anderen Farbe, kommt er nie hin. Frage: „Woran erkennst du das?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich sage meine Züge richtig an und löse das Arbeitsblatt.',
  links:[{art:'druck',label:'Arbeitsblatt: Turm und Läufer',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die häufigsten Fehler besprechen: über Figuren springen, mit dem Läufer die Farbe wechseln, eigene Figuren schlagen.',
   'Bei jeder Aufgabe nachfragen: „Warum ist der Zug falsch?“ oder „Woran erkennst du das?“ Alle sprechen den Merksatz.'],
  kinder:'Ich kann erklären, warum ein Turm- oder Läuferzug nicht erlaubt ist.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du dir bei einigen am Brett einen Turmzug und einen Läuferzug mit Schlagen zeigen. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich ziehe und schlage mit Turm und Läufer ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Turm: Steinchen“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat einen Turm, Weiß auf a1, Schwarz auf h8. Auf dem Brett liegen zehn Steinchen. Abwechselnd ziehen. Wer auf ein Steinchen zieht, sammelt es ein. Die Türme schlagen sich nicht. Wer am Ende mehr Steinchen hat, gewinnt.',
   'Zweite Runde mit Läufern: Jedes Kind bekommt einen Läufer auf einer anderen Farbe. Frage: „Wer hat Vorteil, wenn mehr Steinchen auf hellen Feldern liegen? Warum?“',
   'Rückblick: „Worauf achtest du beim Läufer?“ Aufräum-Ritual. Ausblick: Nächstes Mal kommen Dame, König und Springer.'],
  kinder:'Ich sammle Steinchen nur mit erlaubten Zügen.',
  links:[{art:'video',label:'Minispiel „Turm: Steinchen“ (Video)',url:URLS.steinchen}]}],
 hinweise:{hilfe:'Linie, Reihe oder Diagonale mit dem Finger nachfahren. Weniger Figuren auf das Brett stellen.',
  zusatz:'Das Ziel in zwei Zügen erreichen und mehrere Wege finden. Oder das Minispiel „Labyrinth“ der Schulschachstiftung mit dem Turm.',
  kuerzen:'„Zielfelder zu zweit“ auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer lässt Turm oder Läufer noch über Figuren springen? Wer wechselt mit dem Läufer die Farbe? Diese Fehler greifst du in Woche 4 im Einstieg wieder auf.',
 feld:{
 W:[T('Klicke die beiden weißen Türme an. Auf welchen Feldern stehen sie?',START,['a1','h1'],'a1 und h1, in den Ecken.',['Türme stehen in den Ecken der Burg.','Weiß steht unten.']),
  T('Klicke die beiden weißen Läufer an. Auf welcher Farbe steht jeder?',START,['c1','f1'],'c1 ist dunkel, f1 ist hell. Jede Seite hat einen Läufer für jede Farbe.',['Die Läufer stehen neben den Springern.','Schau auf die Farbe unter jedem Läufer.']),
  T('Markiere die d-Linie.',null,L('d1 d2 d3 d4 d5 d6 d7 d8'),'d1 bis d8. Eine Linie steht senkrecht.',['Eine Linie steht senkrecht.','Klicke auf das d am Rand.']),
  T('Markiere die 6. Reihe.',null,L('a6 b6 c6 d6 e6 f6 g6 h6'),'a6 bis h6. Eine Reihe liegt waagerecht.',['Eine Reihe liegt waagerecht.','Klicke auf die 6 am Rand.']),
  T('Markiere die Diagonale von c1 nach h6.',null,L('c1 d2 e3 f4 g5 h6'),'c1, d2, e3, f4, g5, h6. Alle Felder sind dunkel.',['Eine Diagonale läuft schräg.','Von c1 immer ein Feld nach rechts und eins nach oben.']),
  T('Markiere die Diagonale von a2 nach g8.',null,L('a2 b3 c4 d5 e6 f7 g8'),'a2, b3, c4, d5, e6, f7, g8. Alle Felder sind hell.',['Eine Diagonale läuft schräg.','Von a2 immer ein Feld nach rechts und eins nach oben.'])],
 T:[T('Der Turm steht auf d4. Markiere alle Felder, auf die er ziehen kann.',{d4:'R'},null,'14 Felder: die ganze d-Linie und die ganze 4. Reihe, ohne d4.',['Der Turm zieht gerade, auf seiner Linie und seiner Reihe.','Tipp: Klicke auf d und 4 am Rand. Das Feld d4 selbst gehört nicht dazu.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Markiere alle Felder, auf die der Turm ziehen kann. Achte auf die eigenen Bauern.',{b2:'R',b5:'P',e2:'P'},null,'a2, c2, d2, b1, b3 und b4. Vor einer eigenen Figur hält der Turm an. Er darf nicht über sie springen.',['Auf b5 und e2 stehen eigene Bauern.','Der Turm hält vor einer eigenen Figur an.'],{leer:true,pruef:{zuege:'b2'}}),
  T('Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.',{a1:'R',a6:'n',f1:'b',c3:'p'},null,'a6 und f1. Der Turm zieht auf das Feld der gegnerischen Figur. Der Bauer auf c3 steht weder auf der a-Linie noch auf der 1. Reihe.',['Suche zuerst die Linie und die Reihe des Turms.','Steht eine schwarze Figur darauf, ohne dass etwas im Weg ist?'],{pruef:{schlaege:['a1']}}),
  T('Der Läufer steht auf d4. Markiere alle Felder, auf die er ziehen kann.',{d4:'B'},null,'13 Felder auf den beiden Diagonalen durch d4. Alle sind dunkel wie d4.',['Der Läufer zieht schräg.','Er bleibt immer auf seiner Farbe.'],{leer:true,pruef:{zuege:'d4'}}),
  T('Markiere alle Felder, auf die der Läufer ziehen kann.',{c1:'B',b2:'P',d3:'P',g5:'p'},null,'d2, e3, f4 und g5. Auf g5 schlägt er den schwarzen Bauern und bleibt dort. Nach links ist der eigene Bauer auf b2 im Weg.',['Nach links oben steht ein eigener Bauer.','Auf g5 steht eine schwarze Figur: Dort darf er schlagen, aber nicht weiter.'],{leer:true,pruef:{zuege:'c1'}}),
  T('Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an. Warum nicht den Bauern auf e6?',{e4:'B',b7:'r',h7:'n',e6:'p',c2:'P'},null,'b7 und h7. Der Bauer auf e6 steht gerade vor dem Läufer, nicht schräg.',['Fahre die vier Diagonalen von e4 aus ab.','Der Läufer zieht nie gerade.'],{pruef:{schlaege:['e4']}})],
 A:[T('Markiere alle Felder, auf die der Turm ziehen kann.',{f3:'R',f6:'P',c3:'n'},null,'f1, f2, f4, f5, g3, h3, e3, d3 und c3. Auf c3 schlägt er den Springer, vor f6 hält er an.',['Linie f und Reihe 3.','Eigene Figur: anhalten. Gegnerische Figur: schlagen und anhalten.'],{leer:true,pruef:{zuege:'f3'}}),
  T('Markiere alle Felder, auf die der Läufer ziehen kann. Wo muss er anhalten?',{b5:'B',e2:'P',d7:'p'},null,'a6, c6, d7, a4, c4 und d3. Auf d7 schlägt er und hält an, vor dem eigenen Bauern auf e2 hält er auch an.',['Der Läufer auf b5 hat vier Richtungen.','Auf d7 und e2 stehen Figuren.'],{leer:true,pruef:{zuege:'b5'}}),
  T('Der Turm auf h1 will nach a8. Das geht nicht in einem Zug. Markiere die beiden Felder, über die er in zwei Zügen hinkommt.',{h1:'R'},['a1','h8'],'Über a1 oder über h8. a8 liegt weder auf der h-Linie noch auf der 1. Reihe, deshalb braucht der Turm zwei Züge.',['Erst auf der Reihe, dann auf der Linie, oder umgekehrt.','Die Ecken helfen.'],{leer:true}),
  T('Der Läufer auf c1 bleibt immer auf seiner Farbe. Markiere alle Felder der 8. Reihe, die er irgendwann erreichen kann.',{c1:'B'},['b8','d8','f8','h8'],'b8, d8, f8 und h8. c1 ist dunkel, also erreicht er nur die dunklen Felder.',['Welche Farbe hat c1?','Auf der 8. Reihe wechseln hell und dunkel ab.'],{leer:true,pruef:{farbe:'c1',reihe:8}}),
  T('Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an. Warum nicht den Läufer auf d6?',{d1:'R',d3:'P',d6:'b',a1:'n',g4:'p',h1:'b'},null,'a1 und h1. Den Läufer auf d6 nicht, weil der eigene Bauer auf d3 im Weg steht.',['Prüfe die d-Linie und die 1. Reihe.','Was steht zwischen d1 und d6?'],{pruef:{schlaege:['d1']}}),
  T('Weiß hat Turm und Läufer. Klicke alle schwarzen Figuren an, die Weiß schlagen kann.',{a4:'R',g2:'B',e4:'n',a8:'r',d5:'q',c6:'p'},null,'e4 und a8. Die Dame auf d5 und der Bauer auf c6 sind sicher, der Springer auf e4 steht davor.',['Prüfe zuerst den Turm, dann den Läufer.','Der Läufer auf g2 kommt nur bis e4.'],{pruef:{schlaege:['a4','g2']}})],
 S:[T('Ein Kind zieht den Turm von a1 nach a7. Klicke die Figur an, die im Weg steht. Warum ist der Zug falsch?',{a1:'R',a4:'P'},['a4'],'Der eigene Bauer auf a4. Der Turm darf nicht über Figuren springen.',['Fahre die a-Linie nach oben ab.','Was steht zwischen a1 und a7?']),
  T('Ein Kind zieht den Läufer von f1 nach f3. Das ist falsch. Markiere die Felder der 3. Reihe, die er wirklich erreichen kann.',{f1:'B'},['d3','h3'],'d3 und h3. Gerade nach vorn zieht der Turm, der Läufer nur schräg.',['Der Läufer zieht schräg.','Fahre beide Diagonalen von f1 bis zur 3. Reihe.'],{leer:true,pruef:{zuege:'f1',reihe:3}}),
  T('Darf der Turm eigene Figuren schlagen? Klicke alle Figuren an, die er schlagen darf.',{e5:'R',e7:'N',e2:'p',b5:'n'},null,'e2 und b5. Den eigenen Springer auf e7 darf er nicht schlagen.',['Nur gegnerische Figuren werden geschlagen.','Schwarze Figuren sind dunkel.'],{pruef:{schlaege:['e5']}}),
  T('Welcher Läufer kann nach h7 ziehen? Klicke ihn an. Woran erkennst du das?',{d3:'B',e3:'B'},['d3'],'Der Läufer auf d3. h7 ist hell wie d3, und die Diagonale d3, e4, f5, g6, h7 ist frei. Der Läufer auf e3 steht auf Dunkel.',['Welche Farbe hat h7?','Ein Läufer bleibt auf seiner Farbe.']),
  T('Der Läufer steht in der Ecke auf a1. Markiere alle Felder, auf die er ziehen kann.',{a1:'B'},null,'7 Felder, von b2 bis h8. Auf d4 in der Mitte hätte er 13. In der Mitte ist ein Läufer stärker.',['Aus der Ecke gibt es nur eine Diagonale.','Sie führt bis h8.'],{leer:true,pruef:{zuege:'a1'}}),
  T('Der schwarze Turm auf h8 ist am Zug. Klicke die weiße Figur an, die er schlagen kann.',{h8:'r',e8:'k',h3:'B',c8:'N'},null,'Den Läufer auf h3. Zum Springer auf c8 kommt er nicht, der eigene König auf e8 steht im Weg.',['Prüfe die h-Linie und die 8. Reihe.','Was steht zwischen h8 und c8?'],{pruef:{schlaege:['h8']}})],
 L:[T('Markiere alle Felder, auf die der Turm auf b6 ziehen kann.',{b6:'R',b2:'P',f6:'p'},null,'b7, b8, b5, b4, b3, a6, c6, d6, e6 und f6. Auf f6 schlägt er.',['Linie b und Reihe 6.','Vor b2 hält er an, auf f6 schlägt er.'],{leer:true,pruef:{zuege:'b6'}}),
  T('Markiere alle Felder, auf die der Läufer auf e3 ziehen kann.',{e3:'B',g5:'P',c5:'n'},null,'f4, d4, c5, d2, c1, f2 und g1. Auf c5 schlägt er, vor g5 hält er an.',['Vier Richtungen, alle schräg.','Eigene Figur: anhalten. Gegnerische Figur: schlagen.'],{leer:true,pruef:{zuege:'e3'}}),
  T('Welche schwarzen Figuren kann der Läufer schlagen? Klicke sie an.',{b2:'B',f6:'r',a3:'n',c1:'n',d2:'b'},null,'f6, a3 und c1. Der Läufer auf d2 steht auf der Reihe, nicht auf der Diagonale.',['Fahre alle Diagonalen von b2 aus ab.','Nur schräg, nie gerade.'],{pruef:{schlaege:['b2']}}),
  T('Welche schwarzen Figuren kann der Turm schlagen? Klicke sie an.',{d4:'R',d8:'b',h4:'n',a4:'r',b4:'P',d2:'p',d1:'n'},null,'d8, h4 und d2. Den Turm auf a4 nicht, der eigene Bauer auf b4 ist im Weg. Den Springer auf d1 nicht, der Bauer auf d2 steht davor.',['Prüfe alle vier Richtungen.','In jeder Richtung zählt nur die erste Figur.'],{pruef:{schlaege:['d4']}}),
  T('Kann der Läufer auf f1 jemals nach f8 kommen? Wenn ja, markiere ein Feld, über das er geht. Wenn nein, markiere nichts und begründe.',{f1:'B'},[],'Nein. f1 ist hell, f8 ist dunkel. Ein Läufer bleibt immer auf seiner Farbe.',['Welche Farbe haben f1 und f8?','Ein Läufer wechselt nie die Farbe.'],{leer:true}),
  T('Markiere das Feld, auf das sowohl der Turm als auch der Läufer ziehen können.',{c2:'R',f5:'B'},null,'c8. Der Turm kommt über die c-Linie hin, der Läufer über e6 und d7.',['Markiere in Gedanken zuerst die Felder des Turms.','Welches davon liegt auch auf einer Diagonale des Läufers?'],{leer:true,pruef:{beide:['c2','f5']}})]}};
// ---------- schreiben ----------
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('geschrieben');
