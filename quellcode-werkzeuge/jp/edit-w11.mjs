// Woche 11 „Bronze-Diplom“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, edit-w10.mjs, dann diese Datei.
// Zugfelder werden in build-jahresplan.mjs über „pruef“ berechnet. © Dr. Edmund Bruns
import fs from 'node:fs';import {Chess} from '../dist/assets/chess.mjs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),file=path.join(here,'fixed-bronze.mjs');
const src=fs.readFileSync(file,'utf8');const M=await import(file+'?'+Date.now());
const URLS={...M.URLS,diplomOnline:'https://ludgerus-schachdiplom.netlify.app/'};
const F=structuredClone(M.FIXED);
const FILES='abcdefgh';
const fen=o=>{let s='';for(let r=8;r>=1;r--){let e=0;for(const f of FILES){const p=o[f+r];if(p){if(e){s+=e;e=0}s+=p}else e++}if(e)s+=e;if(r>1)s+='/'}return s};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const T=(frage,pos,targets,antwort,hilfe,extra={})=>({frage,...(pos?{fen:typeof pos==='string'?pos:fen(pos)}:{}),...extra,targets,antwort,hilfe});
// Stellung nach Zügen aus der Grundstellung, damit keine Stellung von Hand getippt wird
const nach=z=>{const g=new Chess();for(const m of z.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],zug:f[1]}};
const Z=(frage,zuege,targets,antwort,hilfe,extra={})=>{const {fen,zug}=nach(zuege);return T(frage,fen,targets,antwort,hilfe,{...(zug==='b'?{zug:'b'}:{}),...extra})};
const M1='Lumi Matt in einem Zug';
F[11]={thema:'Bronze-Diplom',
 lernziel:'Ich kann die Bronze-Missionen allein lösen.',
 leitfrage:'Zeige ich am Brett und auf dem Testblatt, dass ich alle Grundregeln kann?',
 vorwissen:'Alle Themen der Wochen 1 bis 10.',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Bronze 1 bis 4 und praktischer Gelingensnachweis (ludgerus-schachdiplom.netlify.app), Lumi „Matt in einem Zug“. Übrige Testaufgaben eigene Aufgaben, alle Lösungen automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Aufwärmen und Ablauf erklären',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 eine kurze Aufwärmrunde.',
   'Ablauf erklären: Heute zeigt ihr am Brett und auf zwei Testblättern, was ihr könnt. Wer alle fünf Punkte am Brett schafft und mindestens 10 von 12 Testaufgaben, bekommt das Bronze-Diplom. Wer es heute noch nicht schafft, übt weiter und versucht es noch einmal.'],
  kinder:'Ich weiß, wie die Diplom-Prüfung abläuft.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Generalprobe am Lehrbrett',
  ablauf:['Am Lehrbrett E1 bis E6 eine Generalprobe: Läufer und Farbe, Springer, schwarzer Bauer, Tauschen, Schach abwehren, Matt. Nach jeder Aufgabe zeigen alle mit Daumen hoch, Mitte oder runter, wie sicher sie sich fühlen.',
   'Merksatz: „Ruhig lesen, mit dem Finger prüfen, dann erst antworten.“'],
  kinder:'Ich weiß, welche Themen ich sicher kann.',
  links:[{art:'feld',label:'Lehrbrett: Generalprobe E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Praktischer Nachweis zu zweit und faire Partie',
  ablauf:['Zu zweit mit dem Prüfbogen: Kind A zeigt die Grundstellung, je einen Zug jeder Figur, Schach und Matt und die drei Rettungen. Kind B prüft. Danach wechseln die Rollen. Du gehst herum und hakst auf dem Prüfbogen ab, was jedes Kind allein zeigt.',
   'Danach spielen beide eine kurze faire Partie mit Handschlag. Du beobachtest das Fairplay. Frage zwischendurch: „Woran erkennst du, dass das Matt ist?“',
   'Wer Geräte hat, kann zusätzlich die Bronze-Missionen im Ludgerus-Schachdiplom online bearbeiten.'],
  kinder:'Ich zeige am Brett alle fünf Punkte des Nachweises.',
  links:[{art:'druck',label:'Prüfbogen: praktischer Nachweis',was:'nachweis'},{art:'blatt',label:'Ludgerus-Schachdiplom online (Bronze 1 bis 4)',url:URLS.diplomOnline}]},
 {name:'Sicherung',titel:'Knackpunkte vor dem Test',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die Knackpunkte, die beim Nachweis aufgefallen sind: Brett gedreht, Bauer schlägt geradeaus, König läuft ins Schach, schlechter Tausch, Schach statt Matt, Springerschach.',
   'Bei jeder Aufgabe nachfragen: „Warum?“ oder „Woran erkennst du das?“'],
  kinder:'Ich kenne die typischen Fallen vor dem Test.',
  links:[{art:'feld',label:'Lehrbrett: Knackpunkte S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Bronze-Test: zwei Blätter mit je sechs Aufgaben',
  ablauf:['Jedes Kind löst allein Teil 1 (Brett, Figuren, Tauschen, A1 bis A6) und Teil 2 (Schach, Matt, L1 bis L6). Bestanden ist mit mindestens 10 von 12 Aufgaben.',
   'Du kontrollierst mit den Lösungsblättern und besprichst falsche Aufgaben gleich mit dem Kind am Lehrbrett.'],
  kinder:'Ich löse mindestens 10 von 12 Testaufgaben allein.',
  links:[{art:'druck',label:'Bronze-Test Teil 1',was:'feld:A'},{art:'feld',label:'Lehrbrett: Teil 1 A1 bis A6',set:'A'},{art:'druck',label:'Bronze-Test Teil 2',was:'feld:L'},{art:'feld',label:'Lehrbrett: Teil 2 L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Urkunden, Rückblick, Aufräumen',
  ablauf:['Urkunden überreichen, alle klatschen. Wer es noch nicht geschafft hat, bekommt einen festen Termin für den zweiten Versuch und weiß, was er üben soll.',
   'Rückblick: „Was war für dich am schwersten auf dem Weg zum Bronze-Diplom?“ Aufräum-Ritual. Ausblick: Nach dem Diplom beginnt die Silber-Stufe mit erlaubten und unerlaubten Stellungen.'],
  kinder:'Ich weiß, was ich geschafft habe und was als Nächstes kommt.',
  links:[{art:'druck',label:'Bronze-Urkunde (zwei pro Blatt)',was:'urkunde'}]}],
 hinweise:{hilfe:'Kinder mit Leseschwierigkeiten bekommen die Testaufgaben vorgelesen. Der praktische Nachweis zählt genauso viel wie das Blatt.',
  zusatz:'Wer früh fertig ist, bearbeitet im Ludgerus-Schachdiplom online schon Silber 1 oder spielt eine weitere Partie.',
  kuerzen:'Die Generalprobe auf E4 bis E6 kürzen. Der praktische Nachweis und der Test bleiben vollständig. Wer nicht fertig wird, beendet den Test in Woche 12.'},
 nachher:'Wer hat das Diplom noch nicht? In welchem Bereich fehlen Punkte: Brett, Figuren, Tauschen, Schach oder Matt? Für diese Kinder planst du in Woche 12 eine Übungsecke mit genau diesen Aufgaben ein.',
 feld:{
 W:[T('Klicke das Feld rechts unten an. Welche Farbe hat es?',null,['h1'],'h1. Es ist hell: Rechts unten ist hell.',['Rechts unten liegt eine Ecke.','Merksatz: Rechts unten ist hell.'],{leer:true}),
  T('Markiere alle Felder, auf die der Turm ziehen kann.',{e2:'R'},null,'14 Felder: die e-Linie und die 2. Reihe, ohne e2.',['Linie e und Reihe 2.','Das Feld e2 selbst gehört nicht dazu.'],{leer:true,pruef:{zuege:'e2'}}),
  T('Welche schwarzen Figuren kann die Dame schlagen? Klicke sie an.',{d4:'Q',d8:'r',a7:'b',h4:'n',g1:'n'},null,'d8, a7, h4 und g1. Alle Wege sind frei.',['Acht Richtungen prüfen.','Gerade und schräg.'],{pruef:{schlaege:['d4']}}),
  T('Auf welche Felder darf der weiße König nicht, weil der schwarze König dort angreift? Markiere sie.',{e5:'K',e7:'k'},null,'d6, e6 und f6. Könige stehen nie nebeneinander.',['Welche Felder berühren beide Könige?','Sie liegen zwischen den Königen.'],{leer:true,pruef:{verboten:'e5'}}),
  T('Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.',{b2:'P',c2:'P',c4:'p',e3:'P',h2:'P'},null,'b2 und h2. Für c2 ist c4 besetzt, e3 hat schon gezogen.',['Startfeld auf der 2. Reihe?','Beide Felder davor frei?'],{pruef:{doppelschritt:true}}),
  T('Klicke die Figur an, die dem weißen König Schach gibt.','4k3/8/8/8/1q6/8/8/4K3',null,'Die Dame b4 über die Diagonale b4, c3, d2, e1.',['Prüfe gerade und schräge Wege.','Ist der Weg zum König frei?'],{schach:true,pruef:{schachgeber:true}})],
 E:[T('Der Läufer c8 bleibt auf seiner Farbe. Markiere alle Felder der 1. Reihe, die er irgendwann erreichen kann.',{c8:'b'},null,'b1, d1, f1 und h1. c8 ist hell, also nur helle Felder.',['Welche Farbe hat c8?','Auf der 1. Reihe wechseln hell und dunkel ab.'],{leer:true,pruef:{farbe:'c8',reihe:1}}),
  T('Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.',{d4:'N',c6:'r',e6:'q',f3:'b',b3:'p',f5:'P'},null,'b3, c6, e6 und f3. Den eigenen Bauern f5 schlägt er nicht.',['Zeige alle acht Springerfelder.','Nur gegnerische Figuren.'],{pruef:{schlaege:['d4']}}),
  T('Das ist ein schwarzer Bauer. Markiere alle Felder, auf die er ziehen kann.',{e7:'p',d6:'N',f6:'B',e6:'P'},null,'d6 und f6. Er schlägt schräg nach unten. Geradeaus ist e6 besetzt.',['Schwarz zieht nach unten.','Geradeaus wird nicht geschlagen.'],{leer:true,pruef:{zuege:'e7'}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an.','6k1/8/2r5/8/4q3/8/1B6/4R1K1',null,'Die Dame e4. Sie ist ungedeckt: plus 9.',['Welche schwarzen Figuren kann Weiß schlagen?','Welche ist am meisten wert?'],{pruef:{beste:'w'}}),
  T('Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/8/8/R4n2/8/4K3',null,'Der König (er zieht weg) und der Turm a3 (er schlägt den Springer).',['Gegen einen Springer kann man sich nicht dazwischenstellen.','Wer erreicht f3?'],{schach:true,pruef:{abwehr:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','5B2/8/8/7k/8/7K/8/5Q2',null,'f5. Die Dame gibt Schach, der König h3 deckt g4, der Läufer f8 deckt g7 und h6.',['Welche Felder decken König und Läufer?','Die Dame muss nah an den König.'],{quelle:M1+', Aufgabe 39',leer:true,pruef:{matt:true}})],
 A:[T('Markiere die Felder e4, b7 und g2.',null,['e4','b7','g2'],'e4, b7 und g2. Erst der Buchstabe, dann die Zahl.',['Erst den Buchstaben unten suchen.','Dann nach oben bis zur Zahl.'],{leer:true}),
  T('Klicke alle weißen Figuren an, die falsch stehen.','rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR',['d1','e1'],'Dame und König sind vertauscht. Die weiße Dame gehört auf das helle Feld d1.',['Schau in die Mitte der 1. Reihe.','Die Dame steht auf ihrer Farbe.']),
  T('Markiere alle Felder, auf die der Läufer ziehen kann.',{c3:'B',e5:'n',a1:'N'},null,'d4, e5 (dort schlägt er), b4, a5, d2, e1 und b2. Vor dem eigenen Springer a1 hält er an.',['Vier Diagonalen.','Eigene Figur: anhalten. Gegnerische: schlagen.'],{leer:true,pruef:{zuege:'c3'}}),
  T('Markiere alle Felder, auf die der Springer springen kann.',{h4:'N',f3:'P'},null,'f5, g2 und g6. Auf f3 steht ein eigener Bauer.',['Zwei gerade, eins zur Seite.','Am Rand fallen Felder weg.'],{leer:true,pruef:{zuege:'h4'}}),
  T('Markiere alle Felder, auf die der Bauer ziehen kann.',{d2:'P',c3:'b',d4:'n'},null,'c3 und d3. Auf c3 schlägt er den Läufer. Den Doppelschritt verhindert der Springer d4.',['Ist der Weg für den Doppelschritt frei?','Schräg schlagen.'],{leer:true,pruef:{zuege:'d2'}}),
  T('Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.','4k3/8/1p1r4/2n5/4N3/8/8/4K3',null,'Den Turm d6, er ist ungedeckt: plus 5. Den Springer c5 deckt der Bauer b6, das wäre nur ein gleicher Tausch.',['Welche Figuren erreicht der Springer e4?','Wer schlägt jeweils zurück?'],{pruef:{gewinn:'w'},tausch:{zug:'e4d6',ergebnis:'gut'}})],
 S:[T('Liegt das Brett richtig? Klicke das Eckfeld an, an dem du es erkennst.',START,['h1'],'Nein. Rechts unten (h1) ist dunkel. Das Brett muss gedreht werden.',['Schau auf das Feld rechts unten.','Rechts unten ist hell.'],{flip:true}),
  T('Ein Kind schlägt mit dem Bauern geradeaus. Markiere, wohin der Bauer wirklich darf.',{c5:'P',c6:'p',d6:'r'},null,'Nur d6. Der Bauer schlägt schräg, geradeaus ist er blockiert.',['Geradeaus wird nicht geschlagen.','Schräg vor ihm steht eine Figur.'],{leer:true,pruef:{zuege:'c5'}}),
  T('Markiere alle Felder, auf die der König ziehen darf. Achtung, der Turm greift an.',{f1:'K',h2:'r'},null,'e1 und g1. Die 2. Reihe greift der Turm an.',['Welche Felder greift der Turm an?','Die ganze 2. Reihe.'],{leer:true,pruef:{zuege:'f1'}}),
  T('Lohnt es sich, mit der Dame den Läufer d5 zu schlagen? Klicke die Figur an, die zurückschlagen würde.','4k3/8/2p5/3b4/8/8/8/3QK3',null,'Der Bauer c6. Dame gegen Läufer, 9 gegen 3: ein schlechter Tausch.',['Wer deckt den Läufer?','Erst rechnen, dann schlagen.'],{pruef:{verteidiger:'d5'},tausch:{zug:'d1d5',ergebnis:'schlecht'}}),
  T('Ein Kind ruft „Matt!“. Markiere alle Felder, auf die der schwarze König fliehen kann.','R5k1/5pp1/8/8/8/8/8/6K1',null,'h7. Es ist nur Schach, der König flieht nach h7.',['Welche Felder vor dem König sind frei?','Der Bauer h7 fehlt.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/8/8/3n4/8/2B1K3',null,'Nur der König. Gegen einen Springer kann man sich nicht dazwischenstellen, und der Läufer erreicht d3 nicht.',['Wer erreicht das Feld d3?','Kann man einen Springer sperren?'],{schach:true,pruef:{abwehr:true}})],
 L:[T('Klicke die Figur an, die dem weißen König Schach gibt.','4k3/8/8/8/8/5n2/8/4K3',null,'Der Springer f3.',['Prüfe jede schwarze Figur.','Denk an die Springersprünge.'],{schach:true,pruef:{schachgeber:true}}),
  T('Der Turm greift die 2. Reihe an. Markiere alle Felder, auf die der König ziehen darf.','4k3/8/8/8/8/8/r7/4K3',null,'d1 und f1. Die 2. Reihe ist angegriffen.',['Der König darf nicht auf die 2. Reihe.','Zeige alle Nachbarfelder.'],{leer:true,pruef:{zuege:'e1'}}),
  T('Der Läufer gibt Schach. Markiere das Feld, auf das der Turm ziehen kann, um sich dazwischenzustellen.','4k3/8/8/b7/8/8/8/2R1K3',null,'c3. Der Turm sperrt die Diagonale. Aber dort schlägt ihn der Läufer mit Schach. Besser zieht der König weg.',['Welche Felder liegen zwischen a5 und e1?','Welches davon erreicht der Turm?'],{schach:true,leer:true,pruef:{zwischen:true}}),
  T('Die Dame gibt Schach. Klicke alle weißen Figuren an, die sie schlagen können.','4k3/8/8/8/8/2N5/4q3/4K3',null,'Der Springer c3 und der König e1. Der König darf, weil die Dame ungedeckt ist.',['Wer erreicht das Feld e2?','Ist die Dame gedeckt?'],{schach:true,pruef:{schlagen:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','k7/P7/8/8/6K1/8/5B2/1R6',null,'b8. Der Turm gibt Schach. Der König kann ihn nicht schlagen, weil der Bauer a7 den Turm deckt. Den Bauern a7 deckt der Läufer f2.',['Der Turm muss auf die 8. Reihe.','Wer deckt b8?'],{quelle:M1+', Aufgabe 29',leer:true,pruef:{matt:true}}),
  T('Ist das Matt? Markiere alle Felder, auf die der schwarze König fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','R5k1/5ppp/8/8/8/8/8/6K1',null,'Keins, es ist Matt. Die eigenen Bauern sperren den König ein.',['Welche Felder vor dem König sind frei?','Kann Schwarz den Turm schlagen?'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 11 geschrieben');
