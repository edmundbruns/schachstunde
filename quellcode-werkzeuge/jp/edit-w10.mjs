// Woche 10 „Spielstunde und Wiederholung“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, edit-w9.mjs, dann diese Datei.
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
const M1='Lumi Matt in einem Zug';
F[10]={thema:'Spielstunde und Wiederholung',
 lernziel:'Ich kann meine Partie ohne Hilfe zu Ende spielen.',
 leitfrage:'Was kann ich schon sicher, und was übe ich noch bis zum Bronze-Diplom?',
 vorwissen:'Alle Figuren, Schach und Matt, Fairplay (Woche 3 bis 9).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lumi „Matt in einem Zug“ (über die Lumi-Sammlung von edmundbruns.com), Spielform „Aufsteiger-Runde“ (verbreitete Turnierform im Schulschach). Übrige Brettaufgaben eigene Aufgaben, alle Lösungen automatisch nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Schnellrunde: sechs Fragen zu allen Figuren',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 eine Schnellrunde: Die Kinder zeigen die Lösung zuerst mit dem Finger am eigenen Brett, dann klickst du sie an.',
   'Ziel nennen: „Heute spielt ihr mehrere Partien und prüft, was ihr für das Bronze-Diplom schon könnt.“'],
  kinder:'Ich löse Aufgaben zu allen Figuren schnell.',
  links:[{art:'feld',label:'Lehrbrett: Schnellrunde W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Wiederholung: je eine Aufgabe zu jedem Thema',
  ablauf:['Am Lehrbrett E1 bis E6 gemeinsam: Dame, König, Umwandlung, Tauschen, Schach abwehren und Matt. Nach jeder Aufgabe flüstern sich die Partner die Lösung zu, dann löst ein Kind am Lehrbrett.',
   'Merksatz: „Vor jedem Zug drei Fragen: Was will mein Gegner? Ist meine Figur sicher? Kann ich Schach geben oder schlagen?“'],
  kinder:'Ich kann jedes Thema an einer Aufgabe erklären.',
  links:[{art:'feld',label:'Lehrbrett: Wiederholung E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Partien in der Aufsteiger-Runde',
  ablauf:['Zwei oder drei Partien mit Handschlag. Nach jeder Partie rückt, wer gewonnen hat, einen Tisch nach rechts, wer verloren hat, einen Tisch nach links. Danach wechseln die Rollen: In der nächsten Partie spielt jedes Kind die andere Farbe.',
   'Jedes Kind trägt sein Ergebnis in die Ergebnisliste ein. Wer früh fertig ist, löst das Arbeitsblatt A1 bis A6.'],
  kinder:'Ich spiele meine Partien zu Ende und trage das Ergebnis ein.',
  links:[{art:'druck',label:'Ergebnisliste Aufsteiger-Runde',was:'ergebnisliste'},{art:'druck',label:'Arbeitsblatt: Wiederholung',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Fehler aus den Partien klären',
  ablauf:['Stopp-Signal. Zwei Kinder zeigen eine Stelle aus ihrer Partie. Am Lehrbrett S1 bis S6 die häufigsten Fehler wiederholen: Läufer wechselt die Farbe, Springer zieht gerade, Bauer schlägt geradeaus, König neben König, schlechter Tausch, Schach für Matt gehalten.',
   'Bei jeder Aufgabe nachfragen: „Warum ist das falsch?“ oder „Woran erkennst du das?“'],
  kinder:'Ich erkenne die häufigsten Fehler und erkläre sie.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Probe-Diplom: sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein. Wer fünf oder sechs Aufgaben richtig hat, ist bereit für das Bronze-Diplom.',
   'Während die anderen spielen, gehst du mit einzelnen Kindern die falschen Aufgaben am Brett durch. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich löse mindestens fünf von sechs Aufgaben ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel: Probe-Diplom',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Handschlag, Rückblick, Aufräumen',
  ablauf:['Alle Partien enden mit Handschlag. Frage: „Wer hat heute eine Partie bis zum Matt gespielt? Wer hat ein Schach richtig abgewehrt?“ Keine Rangliste vorlesen.',
   'Aufräum-Ritual. Ausblick: Nächstes Mal ist das Bronze-Diplom.'],
  kinder:'Ich nenne etwas, das mir heute gelungen ist.',
  links:[{art:'druck',label:'Plakat: Fairplay',was:'fairplay'}]}],
 hinweise:{hilfe:'Unsichere Kinder spielen die erste Partie mit Plakat „Fairplay“ und der Karte mit den drei Fragen. Du setzt dich bei einer Partie dazu.',
  zusatz:'Die eigene Partie aufschreiben, so gut es geht: Welche Figur hat wann gezogen? Das bereitet die Notation vor.',
  kuerzen:'Nur zwei Partien spielen, die Erarbeitung auf E4 bis E6 kürzen. Das Probe-Diplom und das Aufräumen bleiben.'},
 nachher:'Welche Kinder haben im Probe-Diplom weniger als fünf Aufgaben geschafft? Bei welchem Thema? Diese Themen wiederholst du mit ihnen vor dem Bronze-Diplom in Woche 11.',
 feld:{
 W:[T('Markiere alle Felder, auf die der Turm ziehen kann.',{c4:'R',c7:'p',f4:'P'},null,'c5, c6, c7 (dort schlägt er), c3, c2, c1, b4, a4, d4 und e4. Vor f4 hält er an.',['Linie c und Reihe 4.','Eigene Figur: anhalten. Gegnerische: schlagen.'],{leer:true,pruef:{zuege:'c4'}}),
  T('Markiere alle Felder, auf die der Springer springen kann.',{b6:'N'},null,'a4, c4, d5, d7, a8 und c8. Am Rand hat er weniger Felder.',['Zwei gerade, eins zur Seite.','Manche Sprünge gehen über den Rand hinaus.'],{leer:true,pruef:{zuege:'b6'}}),
  T('Markiere alle Felder, auf die der Bauer ziehen kann.',{g2:'P',h3:'n',f3:'P'},null,'g3, g4 und h3. Auf h3 schlägt er den Springer. Den eigenen Bauern auf f3 schlägt er nicht.',['Vom Startfeld gibt es den Doppelschritt.','Schräg nur gegnerische Figuren schlagen.'],{leer:true,pruef:{zuege:'g2'}}),
  T('Welche weißen Figuren hängen? Klicke sie an.',{c3:'N',e3:'B',h1:'R',b2:'P',a5:'b',e8:'r',h8:'q'},null,'Der Läufer e3 (Turm e8) und der Turm h1 (Dame h8). Den Springer c3 deckt der Bauer b2.',['Erst angegriffene Figuren suchen.','Dann prüfen: Deckt sie jemand?'],{pruef:{haengt:'w'}}),
  T('Die Dame gibt Schach. Markiere alle Felder, auf die der König ziehen kann.','4k3/8/8/8/8/8/3q4/4K3',null,'d2 und f1. Auf d2 schlägt er die ungedeckte Dame.',['Kann der König die Dame schlagen?','Welche Felder greift die Dame nicht an?'],{schach:true,leer:true,pruef:{flucht:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','6k1/1R4p1/6P1/8/8/8/6K1/8',null,'b8. Der Bauer g6 deckt f7 und h7, der Turm gibt Schach auf der 8. Reihe.',['Welche Felder deckt der Bauer g6?','Der Turm muss auf die 8. Reihe.'],{quelle:M1+', Aufgabe 21',leer:true,pruef:{matt:true}})],
 E:[T('Dame: Markiere alle Felder, auf die die Dame ziehen kann.',{e4:'Q',e6:'p',c2:'P',g4:'n'},null,'22 Felder: auf der e-Linie e1 bis e3, e5 und e6 (dort schlägt sie), auf der 4. Reihe a4 bis d4 sowie f4 und g4 (dort schlägt sie), auf den Diagonalen d3 (vor c2 hält sie an), f3, g2, h1, d5, c6, b7, a8, f5, g6 und h7.',['Acht Richtungen.','Eigene Figur: anhalten. Gegnerische: schlagen.'],{leer:true,pruef:{zuege:'e4'}}),
  T('König: Auf welche Nachbarfelder darf der weiße König nicht, weil der schwarze Turm sie angreift? Markiere sie.',{d4:'K',f5:'r'},null,'c5, d5 und e5. Der Turm greift die ganze 5. Reihe an.',['Welche Felder greift der Turm an?','Prüfe die Nachbarfelder des Königs.'],{leer:true,pruef:{verboten:'d4'}}),
  T('Umwandlung: Welche Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{a7:'P',a8:'r',c7:'P',f7:'P',f8:'b',g8:'r'},null,'c7 und f7. c7 zieht nach c8, f7 schlägt den Turm auf g8. a7 ist blockiert.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  T('Tauschen: Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.','6k1/5ppp/8/3n4/8/2B5/8/3R2K1',null,'Den Springer d5, er ist ungedeckt: plus 3.',['Welche schwarzen Figuren erreicht Weiß?','Wer schlägt zurück?'],{pruef:{gewinn:'w'},tausch:{zug:'d1d5',ergebnis:'gut'}}),
  T('Schach: Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/8/1b6/8/2P5/1N2K3',null,'Der König (er zieht weg), der Springer b1 (nach c3 oder d2 dazwischen) und der Bauer c2 (nach c3 dazwischen).',['Prüfe wegziehen, dazwischenstellen und schlagen.','Welche Felder liegen zwischen b4 und e1?'],{schach:true,pruef:{abwehr:true}}),
  T('Matt: Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','8/3Q4/5K2/7k/8/8/8/8',null,'h3. Die Dame gibt Schach, der König f6 deckt g5 und g6.',['Welche Felder deckt der weiße König?','Die Dame muss auf die h-Linie.'],{quelle:M1+', Aufgabe 9',leer:true,pruef:{matt:true}})],
 A:[T('Markiere alle Felder, auf die der Läufer ziehen kann.',{d3:'B',f5:'p',b5:'P'},null,'e4, f5 (dort schlägt er), c4, c2, b1, e2 und f1. Vor dem eigenen Bauern b5 hält er an.',['Vier Diagonalen.','Eigene Figur: anhalten. Gegnerische: schlagen.'],{leer:true,pruef:{zuege:'d3'}}),
  T('Welche schwarzen Figuren kann der Springer schlagen? Klicke sie an.',{f5:'N',e7:'q',g3:'r',d6:'b',h6:'p',d4:'P'},null,'d6, e7, g3 und h6. Den eigenen Bauern d4 schlägt er nicht.',['Zeige alle acht Springerfelder.','Den eigenen Bauern schlägt er nicht.'],{pruef:{schlaege:['f5']}}),
  T('Welche weißen Bauern dürfen jetzt einen Doppelschritt machen? Klicke sie an.',{a2:'P',b3:'P',d2:'P',d4:'p',f2:'P',g2:'P',g4:'n'},null,'a2 und f2. b3 hat schon gezogen, für d2 und g2 ist das Feld vier besetzt.',['Startfeld auf der 2. Reihe?','Beide Felder davor frei?'],{pruef:{doppelschritt:true}}),
  T('Welche Figur sollte Weiß schlagen? Klicke sie an.','6k1/5ppp/8/1b3q2/8/3Q4/8/6K1',null,'Die Dame f5. Sie ist ungedeckt: plus 9. Der Läufer b5 brächte nur 3.',['Welche Figuren erreicht die weiße Dame?','Welche ist am meisten wert?'],{pruef:{beste:'w'}}),
  T('Der Springer ist angegriffen. Markiere alle sicheren Felder, auf die er springen kann.',{d5:'N',c6:'p',f8:'b',b8:'r'},null,'c3, c7, e3, f4 und f6. Auf b4 und b6 greift der Turm an, auf e7 der Läufer.',['Zeige alle Springerfelder.','Streiche die Felder, die Schwarz angreift.'],{leer:true,pruef:{sicher:'d5'}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','1B5k/5K2/7p/8/8/3B4/8/8',null,'e5. Der Läufer gibt Schach auf der langen Diagonale, der König f7 deckt g7 und g8.',['Welcher Läufer kann Schach geben?','Wohin könnte der König fliehen?'],{quelle:M1+', Aufgabe 11',leer:true,pruef:{matt:true}})],
 S:[T('Der Läufer f1 bleibt immer auf seiner Farbe. Markiere alle Felder der 8. Reihe, die er irgendwann erreichen kann.',{f1:'B'},null,'a8, c8, e8 und g8. f1 ist hell, also erreicht er nur helle Felder.',['Welche Farbe hat f1?','Auf der 8. Reihe wechseln hell und dunkel ab.'],{leer:true,pruef:{farbe:'f1',reihe:8}}),
  T('Ein Kind zieht den Springer von e4 nach e6. Markiere die Felder der 6. Reihe, auf die er wirklich springen kann.',{e4:'N'},null,'d6 und f6. Der Springer zieht nie nur gerade.',['Zwei gerade, eins zur Seite.','Links oder rechts von e6.'],{leer:true,pruef:{zuege:'e4',reihe:6}}),
  T('Ein Kind schlägt mit dem Bauern e4 geradeaus auf e5. Markiere, wohin der Bauer wirklich darf.',{e4:'P',e5:'p',f5:'n'},null,'Nur f5. Der Bauer schlägt schräg, nie geradeaus.',['Geradeaus wird nicht geschlagen.','Schräg vor ihm steht eine Figur.'],{leer:true,pruef:{zuege:'e4'}}),
  T('Auf welche Felder darf der weiße König nicht, weil dort der schwarze König angreift? Markiere sie.',{d4:'K',d6:'k'},null,'c5, d5 und e5. Zwei Könige stehen nie nebeneinander.',['Welche Felder berühren beide Könige?','Sie liegen zwischen den Königen.'],{leer:true,pruef:{verboten:'d4'}}),
  T('Lohnt es sich, mit der Dame den Läufer e6 zu schlagen? Klicke die Figur an, die zurückschlagen würde.','4k3/5p2/4b3/8/8/8/4Q3/4K3',null,'Der Bauer f7. Dame gegen Läufer, 9 gegen 3: ein schlechter Tausch.',['Wer deckt den Läufer?','Erst rechnen, dann schlagen.'],{pruef:{verteidiger:'e6'},tausch:{zug:'e2e6',ergebnis:'schlecht'}}),
  T('Ein Kind ruft nach dem Turmschach „Matt!“. Markiere alle Felder, auf die der schwarze König fliehen kann.','R5k1/6pp/8/8/8/8/8/6K1',null,'Nur f7. Es ist kein Matt, der König flieht nach f7.',['Welche Felder vor dem König sind frei?','Der Bauer f7 fehlt.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}})],
 L:[T('Markiere die Felder, auf denen die beiden Damen in der Grundstellung stehen.',null,['d1','d8'],'d1 und d8. Die Dame steht auf ihrer Farbe.',['Die Dame steht neben dem König.','Die weiße Dame steht auf Hell.'],{leer:true}),
  T('Welche schwarze Figur kann der Turm schlagen? Klicke sie an.',{a4:'R',a8:'b',e4:'n',h4:'p',a2:'P',c4:'P'},null,'Nur den Läufer a8. Zum Springer e4 kommt er nicht, der eigene Bauer c4 steht im Weg.',['Prüfe die a-Linie und die 4. Reihe.','Eigene Figuren halten den Turm auf.'],{pruef:{schlaege:['a4']}}),
  T('Markiere alle Felder, auf die der Springer springen kann.',{g3:'N',e2:'P',f5:'p',h5:'P'},null,'e4, f1, f5 und h1. Auf f5 schlägt er. Auf e2 und h5 stehen eigene Bauern.',['Zwei gerade, eins zur Seite.','Auf eigene Figuren darf er nicht.'],{leer:true,pruef:{zuege:'g3'}}),
  T('Klicke die Figur an, die dem weißen König Schach gibt.','4k3/8/8/8/8/8/8/q3K3',null,'Die Dame a1. Sie greift über die 1. Reihe an.',['Prüfe jede schwarze Figur.','Ist der Weg zum König frei?'],{schach:true,pruef:{schachgeber:true}}),
  T('Klicke die schwarze Figur an, die Weiß mit Gewinn schlagen kann.','6k1/5ppp/8/8/2n5/1P6/8/6K1',null,'Den Springer c4. Der Bauer schlägt ihn, niemand schlägt zurück: plus 3.',['Der Bauer schlägt schräg nach vorn.','Deckt jemand den Springer?'],{pruef:{gewinn:'w'},tausch:{zug:'b3c4',ergebnis:'gut'}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','8/8/7k/7P/8/6Q1/6K1/8',null,'g6. Die Dame gibt Schach, der Bauer h5 deckt sie.',['Die Dame braucht Deckung.','Welches Feld deckt der Bauer h5?'],{quelle:M1+', Aufgabe 43',leer:true,pruef:{matt:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 10 geschrieben');
