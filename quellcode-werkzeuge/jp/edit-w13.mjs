// Woche 13 „Bauernumwandlung und starke Bauern“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, edit-w11.mjs, edit-w12.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import {Chess} from '../dist/assets/chess.mjs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,achtBauern:'https://www.youtube.com/watch?v=XQmXNyh_bVw'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
// Stellung nach Zügen aus der Grundstellung, damit keine Stellung von Hand getippt wird
const nach=z=>{const g=new Chess();for(const m of z.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],zug:f[1]}};
const Z=(frage,zuege,targets,antwort,hilfe,extra={})=>{const {fen,zug}=nach(zuege);return T(frage,fen,targets,antwort,hilfe,{...(zug==='b'?{zug:'b'}:{}),...extra})};
F[13]={thema:'Bauernumwandlung und starke Bauern',
 lernziel:'Ich kann einen Bauern umwandeln und die passende Figur wählen.',
 leitfrage:'Welcher Bauer kommt durch, und in welche Figur verwandle ich ihn?',
 vorwissen:'Bauernzug, Doppelschritt und Schlagen (Woche 5), erlaubte Stellungen (Woche 12).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Silber (Umwandlung), Minispiel „Bauernumwandlung: Acht Bauern und eine Leichtfigur“ (Deutsche Schulschachstiftung). Brettaufgaben eigene Aufgaben; Zugfelder, Freibauern und Matts automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Erlaubt oder nicht? Bauern wiederholen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W5 die Regeln aus Woche 12 und die Bauernzüge wiederholen: Bauer auf der letzten Reihe, starke Figuren, schlagen, umwandeln.',
   'W6 als Rätsel: „Welchen Bauern kann kein schwarzer Bauer mehr aufhalten?“ Ziel nennen: „Heute lernt ihr, welche Bauern stark sind und in welche Figur ihr sie verwandelt.“'],
  kinder:'Ich ziehe Bauern richtig und erkenne, welcher durchkommen kann.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Umwandeln, die richtige Figur wählen, Freibauern',
  ablauf:['Am Lehrbrett E1 bis E4: Umwandeln auf der letzten Reihe, auch beim Schlagen. Erlaubt sind Dame, Turm, Läufer oder Springer. Meist ist die Dame am stärksten, manchmal ist ein Springer besser, weil er sofort Schach gibt und zwei Figuren angreift.',
   'E5 und E6: Ein Freibauer ist ein Bauer, vor dem und neben dem kein gegnerischer Bauer mehr steht. Freibauern sind stark, weil sie nur Figuren aufhalten können.',
   'Merksätze: „Auf der letzten Reihe wird umgewandelt, meist in eine Dame.“ und „Freibauern muss man laufen lassen.“'],
  kinder:'Ich wandle richtig um und zeige einen Freibauern.',
  links:[{art:'feld',label:'Lehrbrett: Umwandlung und Freibauern E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Bauernrennen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Jedes Kind hat drei Bauern auf seiner Bauernreihe, nicht gegenüber. Wer zuerst umwandelt, sagt laut, welche Figur er wählt, und begründet. Danach wechseln die Rollen, das andere Kind beginnt.',
   'Frage zwischendurch: „Warum ist dein Bauer ein Freibauer?“',
   'Allein: Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich bringe einen Bauern zur Umwandlung und begründe meine Wahl.',
  links:[{art:'druck',label:'Arbeitsblatt: Umwandlung und Freibauern',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 besprechen: Bauer bleibt auf der letzten Reihe stehen, geradeaus auf ein besetztes Feld ziehen, gegnerische Bauern auf den Nachbarlinien übersehen, schwarze Bauern wandeln auf der 1. Reihe um, Umwandeln mit Schlagen und Matt.',
   'Bei jeder Aufgabe nachfragen: „Warum ist das ein Freibauer?“ oder „Woran erkennst du, dass der Bauer nicht weiterkommt?“'],
  kinder:'Ich erkenne die typischen Fehler bei der Umwandlung.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „In welche Figur wandelst du um, und warum?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich wandle richtig um und finde Freibauern ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Acht Bauern und eine Leichtfigur“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jedes Kind hat seine acht Bauern und eine Leichtfigur, also einen Springer oder einen Läufer. Wer zuerst einen Bauern umwandelt, gewinnt. Danach wechseln die Rollen, das andere Kind spielt Weiß.',
   'Rückblick: „Woran erkennst du einen Freibauern?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr die Rochade.'],
  kinder:'Ich bringe einen Bauern durch und halte gegnerische Bauern auf.',
  links:[{art:'video',label:'Minispiel „Acht Bauern und eine Leichtfigur“ (Video)',url:URLS.achtBauern}]}],
 hinweise:{hilfe:'Mit dem Finger vor dem Bauern bis zur letzten Reihe fahren und auf den beiden Nachbarlinien nachsehen, ob ein gegnerischer Bauer im Weg steht.',
  zusatz:'Eine Stellung bauen, in der die Umwandlung in einen Springer besser ist als in eine Dame.',
  kuerzen:'Das Bauernrennen entfällt, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel dauert nur fünf Minuten.'},
 nachher:'Wer vergisst noch die Nachbarlinien beim Freibauern? Wer wandelt nicht um oder wählt die falsche Figur? Das greifst du in Woche 14 bei der Rochade wieder auf, wenn die Bauern vor dem König stehen.',
 feld:{
 W:[T('Klicke die Figur an, die so nie stehen kann.',{e1:'K',e8:'k',f8:'P'},null,'Der Bauer f8. Auf der 8. Reihe wäre er schon umgewandelt worden.',['Was passiert auf der letzten Reihe?','Er bleibt kein Bauer.'],{pruef:{illegal:true}}),
  T('Welcher weiße Springer ist stärker? Klicke ihn an.',{h8:'N',e5:'N',d3:'P'},null,'Der Springer e5 mit 7 Zugfeldern. In der Ecke h8 hat der andere nur 2.',['Zähle die Zugfelder.','Auf d3 steht ein eigener Bauer.'],{pruef:{staerkste:'N'}}),
  T('Markiere alle Felder, auf die der Bauer ziehen kann.',{f2:'P',e3:'n',f3:'p'},null,'Nur e3. Geradeaus ist f3 besetzt, schräg schlägt er den Springer.',['Geradeaus wird nicht geschlagen.','Schräg nur gegnerische Figuren.'],{leer:true,pruef:{zuege:'f2'}}),
  T('Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.',{c7:'p',b6:'N',c5:'P'},null,'b6 und c6. Den Doppelschritt verhindert der Bauer c5, auf b6 schlägt er den Springer.',['Schwarz zieht nach unten.','Ist c5 frei?'],{leer:true,pruef:{zuege:'c7'}}),
  T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{g7:'P',g8:'n',h8:'r',b7:'P',a8:'q'},null,'b7 und g7. b7 zieht nach b8 oder schlägt die Dame a8, g7 schlägt den Turm h8.',['Welche Bauern stehen auf der 7. Reihe?','Auch Schlagen auf die letzte Reihe zählt.'],{pruef:{umwandeln:true}}),
  T('Klicke den weißen Bauern an, den kein schwarzer Bauer mehr aufhalten kann.',{e1:'K',e8:'k',a4:'P',d4:'P',h4:'P',b6:'p',d5:'p',f7:'p'},null,'Der Bauer h4. Vor ihm und auf der g-Linie steht kein schwarzer Bauer. Das ist ein Freibauer.',['Schau vor jeden Bauern und auf die Nachbarlinien.','Steht dort ein schwarzer Bauer?'],{pruef:{freibauer:'w'}})],
 E:[T('Markiere das Feld, auf dem der Bauer umgewandelt wird.',{e7:'P'},null,'e8. Dort wird er zur Dame, zum Turm, Läufer oder Springer.',['Ein Feld vorwärts auf die letzte Reihe.','Die 8. Reihe ist das Ziel.'],{leer:true,pruef:{zuege:'e7'}}),
  T('Umwandeln beim Schlagen: Markiere alle Felder, auf die der Bauer ziehen kann.',{c7:'P',c8:'r',b8:'n',d8:'b'},null,'b8 und d8. Geradeaus ist c8 besetzt. Schlägt er schräg, wird er auf demselben Zug umgewandelt.',['Geradeaus wird nie geschlagen.','Schräg stehen schwarze Figuren.'],{leer:true,pruef:{zuege:'c7'}}),
  T('Die Dame setzt matt: Klicke das Feld an, auf dem der Bauer umgewandelt wird.','k7/2P5/1K6/8/8/8/8/8',null,'c8. Die neue Dame gibt Schach über die 8. Reihe, der König b6 deckt a7 und b7. Auch ein Turm würde mattsetzen.',['Der Bauer zieht auf die letzte Reihe.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}}),
  T('Der Bauer d7 ist gerade zum Springer geworden. Klicke alle schwarzen Figuren an, die der Springer angreift.','3N4/1k3q2/8/8/8/8/8/K7',null,'Den König b7 und die Dame f7. Der Springer gibt Schach und greift die Dame an, eine Dame auf d8 hätte das nicht geschafft.',['Zeige alle Springerfelder von d8.','Welche schwarzen Figuren stehen dort?'],{zug:'b',schach:true,pruef:{schlaege:['d8']}}),
  T('Klicke den weißen Freibauern an.',{e1:'K',e8:'k',a5:'P',c4:'P',e4:'P',g3:'P',b7:'p',e5:'p'},null,'Der Bauer g3. a5 und c4 hält der Bauer b7 auf, e4 steht vor e5. Vor g3 und auf der f- und h-Linie ist frei.',['Prüfe für jeden Bauern drei Linien: seine eigene und die beiden daneben.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  T('Klicke alle weißen Freibauern an.',{e1:'K',e8:'k',b4:'P',c4:'P',f4:'P',h4:'P',a7:'p',d6:'p',h6:'p'},null,'Nur f4. b4 hält der Bauer a7 auf, c4 der Bauer d6, h4 der Bauer h6.',['Prüfe die eigene Linie und die beiden Nachbarlinien.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}})],
 A:[T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{a7:'P',a8:'n',d7:'P',e8:'r',h6:'P'},null,'Nur d7. Er zieht nach d8 oder schlägt den Turm e8. a7 ist blockiert, h6 ist noch zu weit weg.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  T('Markiere alle Felder, auf die der Bauer ziehen kann.',{f7:'P',e8:'q',g8:'r',f8:'n'},null,'e8 und g8. Er schlägt Dame oder Turm und wird dabei umgewandelt. Geradeaus ist f8 besetzt.',['Geradeaus ist besetzt.','Schräg stehen schwarze Figuren.'],{leer:true,pruef:{zuege:'f7'}}),
  T('Klicke den weißen Freibauern an.',{e1:'K',e8:'k',a3:'P',d4:'P',g5:'P',b5:'p',d6:'p'},null,'Der Bauer g5. a3 hält der Bauer b5 auf, d4 der Bauer d6.',['Prüfe drei Linien für jeden Bauern.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  T('Weiß setzt durch Umwandlung matt. Klicke das Feld an.','5k2/1P6/5K2/8/8/8/8/8',null,'b8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König f6 deckt e7, f7 und g7.',['Der Bauer zieht auf die letzte Reihe.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}}),
  T('Welche weißen Bauern kommen gar nicht mehr weiter? Klicke sie an.',{b5:'P',b6:'p',e4:'P',e5:'n',g6:'P',g7:'p',h7:'r'},null,'b5 und e4. Der Bauer g6 ist geradeaus blockiert, kann aber den Turm h7 schlagen.',['Ist das Feld davor frei?','Kann er schräg etwas schlagen?'],{pruef:{blockiert:true}}),
  T('Der Bauer ist auf e8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.','4N3/2q3k1/8/8/8/8/8/K7',null,'Den König g7 und die Dame c7. Nach dem Schach schlägt Weiß die Dame.',['Zeige alle Springerfelder von e8.','Welche schwarzen Figuren stehen dort?'],{zug:'b',schach:true,pruef:{schlaege:['e8']}})],
 S:[T('Ein Kind lässt den Bauern auf der 8. Reihe als Bauer stehen. Klicke die Figur an, die so nicht stehen darf.',{e1:'K',e8:'k',c8:'P'},null,'Der Bauer c8. Er muss sofort umgewandelt werden, als Bauer darf er nicht stehen bleiben.',['Was passiert auf der letzten Reihe?','Umwandeln ist Pflicht.'],{pruef:{illegal:true}}),
  T('Wohin kann der Bauer ziehen? Wenn nirgendwohin, drücke „Prüfen“ ohne Markierung.',{d7:'P',d8:'r'},null,'Nirgendwohin. Geradeaus ist d8 besetzt, und schräg steht nichts zum Schlagen.',['Geradeaus wird nicht geschlagen.','Steht schräg vor ihm eine Figur?'],{leer:true,pruef:{zuege:'d7'}}),
  T('Ist der Bauer e5 ein Freibauer? Klicke alle schwarzen Bauern an, die ihn noch aufhalten können.',{e5:'P',d7:'p',f6:'p',a7:'p',h6:'p'},null,'d7 und f6. Sie stehen auf den Nachbarlinien vor ihm und können ihn schlagen. e5 ist also kein Freibauer.',['Schau auf die d-, e- und f-Linie.','Nur Bauern vor ihm zählen.'],{pruef:{aufhalter:'e5'}}),
  T('Das ist ein schwarzer Bauer. Wo wird er umgewandelt? Markiere alle Felder, auf die er ziehen kann.',{b2:'p',a1:'R',c1:'N'},null,'b1, a1 und c1. Schwarz wandelt auf der 1. Reihe um, auch beim Schlagen.',['Schwarz zieht nach unten.','Die 1. Reihe ist für Schwarz die letzte Reihe.'],{leer:true,pruef:{zuege:'b2'}}),
  T('Klicke den schwarzen Freibauern an.',{e1:'K',e8:'k',c4:'p',f5:'p',h3:'p',b2:'P',e2:'P'},null,'Der Bauer h3. c4 hält der Bauer b2 auf, f5 der Bauer e2. Für Schwarz liegt „vorn“ unten.',['Für Schwarz zählen weiße Bauern unterhalb.','Prüfe drei Linien.'],{pruef:{freibauer:'b'}}),
  T('Mit welchem Zug setzt Weiß matt? Klicke das Feld an, auf das der Bauer zieht.','1r4k1/P4ppp/8/8/8/8/8/6K1',null,'b8. Der Bauer schlägt den Turm und wird zur Dame: Matt. Zieht er nach a8, schlägt der Turm die neue Dame.',['Geradeaus oder schräg schlagen?','Welche Umwandlung gibt Schach auf der 8. Reihe?'],{leer:true,pruef:{matt:true}})],
 L:[T('Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{c7:'P',h7:'P',h8:'b',g8:'n',e6:'P'},null,'c7 und h7. c7 zieht nach c8, h7 schlägt den Springer g8. e6 ist noch zu weit weg.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  T('Markiere alle Felder, auf die der Bauer ziehen kann.',{b7:'P',b8:'r',a8:'n',c8:'q'},null,'a8 und c8. Geradeaus ist b8 besetzt, schräg schlägt er und wird umgewandelt.',['Geradeaus ist besetzt.','Schräg stehen schwarze Figuren.'],{leer:true,pruef:{zuege:'b7'}}),
  T('Klicke den weißen Freibauern an.',{e1:'K',e8:'k',b3:'P',e4:'P',h5:'P',c5:'p',e6:'p'},null,'Der Bauer h5. b3 hält der Bauer c5 auf, e4 der Bauer e6.',['Prüfe drei Linien.','Nur Bauern vor ihm zählen.'],{pruef:{freibauer:'w'}}),
  T('Weiß setzt durch Umwandlung matt. Klicke das Feld an.','7k/5P2/6K1/8/8/8/8/8',null,'f8. Die neue Dame oder ein Turm gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.',['Der Bauer zieht auf die letzte Reihe.','Welche Felder deckt der weiße König?'],{leer:true,pruef:{matt:true}}),
  T('Klicke alle schwarzen Bauern an, die den Bauern d4 noch aufhalten können.',{d4:'P',c6:'p',e7:'p',b5:'p'},null,'c6 und e7. Der Bauer b5 steht zu weit weg, auf der b-Linie.',['Schau auf die c-, d- und e-Linie.','Nur Bauern vor ihm zählen.'],{pruef:{aufhalter:'d4'}}),
  T('Der Bauer ist auf c8 zum Springer geworden. Klicke alle schwarzen Figuren an, die er angreift.','2N5/k3q3/8/8/8/8/8/7K',null,'Den König a7 und die Dame e7. Mit Schach und Angriff gewinnt Weiß die Dame.',['Zeige alle Springerfelder von c8.','Welche schwarzen Figuren stehen dort?'],{zug:'b',schach:true,pruef:{schlaege:['c8']}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 13 geschrieben');
