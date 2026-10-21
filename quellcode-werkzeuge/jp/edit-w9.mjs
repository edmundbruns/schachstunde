// Woche 9 „Die erste ganze Partie und Fairplay“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs, edit-w4.mjs, edit-w5.mjs, edit-w6.mjs, edit-w7.mjs, edit-w8.mjs, dann diese Datei.
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
F[9]={thema:'Die erste ganze Partie und Fairplay',
 lernziel:'Ich kann eine Partie nach den Regeln und fair spielen.',
 leitfrage:'Was gehört zu einer fairen Partie, und worauf achte ich in den ersten Zügen?',
 vorwissen:'Alle Figuren, Schach und Matt (Woche 3 bis 8).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'AG-Konzept (Regeln und Rituale), FIDE-Regeln zu „berührt, geführt“ und „losgelassen ist gezogen“ in kindgerechter Form. Brettaufgaben eigene Aufgaben aus typischen Anfängerpartien (Narrenmatt, Schäfermatt), alle Stellungen aus echten Zugfolgen erzeugt und mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Schach und Matt wiederholen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 die Fehler aus Woche 8 aufgreifen: Wer gibt Schach? Welche Rettung gibt es? Wo ist das Matt?',
   'Ziel nennen: „Heute spielt ihr eure erste ganze Partie. Dazu gehören Regeln für ein faires Spiel.“'],
  kinder:'Ich erkenne Schach und Matt sicher.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Fairplay-Regeln und drei Tipps für die ersten Züge',
  ablauf:['Plakat „Fairplay“ aufhängen und gemeinsam lesen: Handschlag, berührt, geführt, losgelassen ist gezogen, zurechtrücken, leise spielen, gratulieren. Zwei Kinder spielen „berührt, geführt“ einmal vor.',
   'Am Lehrbrett E1 bis E6: Wer beginnt, welche Figuren dürfen zuerst ziehen, was passiert bei berührt und losgelassen, wie schnell eine Partie verloren gehen kann (Narrenmatt).',
   'Drei Tipps für die ersten Züge: Bauern in die Mitte, Springer und Läufer herausbringen, vor jedem Zug fragen: Was greift mein Gegner an? Merksatz: „Erst Handschlag, dann denken, dann ziehen.“'],
  kinder:'Ich nenne die Fairplay-Regeln und drei Tipps für den Anfang.',
  links:[{art:'druck',label:'Plakat: Fairplay',was:'fairplay'},{art:'feld',label:'Lehrbrett: Die Partie E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Die erste ganze Partie',
  ablauf:['Zu zweit: Brett hinlegen, aufbauen, Handschlag. Weiß beginnt. Gespielt wird bis zum Matt oder bis zum Stopp-Signal. Du gehst herum und achtest auf berührt, geführt.',
   'Danach wechseln die Rollen: In der zweiten Partie spielt das andere Kind Weiß.',
   'Wer früh fertig ist, löst das Arbeitsblatt A1 bis A6. Vergleich am Lehrbrett.'],
  kinder:'Ich spiele eine ganze Partie nach den Regeln.',
  links:[{art:'druck',label:'Arbeitsblatt: Die erste Partie',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Was ist in euren Partien passiert?',
  ablauf:['Stopp-Signal. Zwei oder drei Kinder erzählen kurz von ihrer Partie. Am Lehrbrett S1 bis S6 typische Situationen klären: die Dame zu früh draußen, berührte Figuren, die Schäfermatt-Drohung, Matt nicht erkannt.',
   'Bei jeder Aufgabe nachfragen: „Was hättest du vorher prüfen können?“ oder „Woran erkennst du die Drohung?“ Alle sprechen den Merksatz.'],
  kinder:'Ich erkenne typische Fehler aus den ersten Zügen.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Fairplay beobachten und sechs Aufgaben',
  ablauf:['Während der Partien beobachtest du: Handschlag, berührt, geführt, leise spielen. Bei Fehlern gibst du einen konkreten Hinweis.',
   'Jedes Kind löst L1 bis L6 allein, gern als Hausaufgabe. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich halte die Fairplay-Regeln ein und löse die Aufgaben ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Handschlag, Rückblick, Aufräumen',
  ablauf:['Alle Partien enden mit Handschlag. Wer verloren hat, gratuliert, wer gewonnen hat, bedankt sich.',
   'Rückblick: „Welche Fairplay-Regel war heute am schwersten?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist Spielstunde, ihr spielt mehrere Partien und wiederholt alles für das Bronze-Diplom.'],
  kinder:'Ich beende meine Partie fair und räume auf.',
  links:[{art:'druck',label:'Plakat: Fairplay (Handschlag und Gratulieren)',was:'fairplay'}]}],
 hinweise:{hilfe:'Plakat „Fairplay“ und die Karte mit den drei Tipps neben das Brett legen. Unsichere Kinder spielen zuerst gegen dich oder ein erfahrenes Kind.',
  zusatz:'Die eigene Partie mitzählen: Wie viele Züge hat sie gedauert? Welche Figur hat zuerst geschlagen?',
  kuerzen:'Die Erarbeitung auf das Plakat und E4 (Narrenmatt) kürzen, damit genug Zeit für die Partie bleibt. Die Aufgaben L1 bis L6 werden Hausaufgabe, Handschlag und Aufräumen bleiben.'},
 nachher:'Wer vergisst noch Handschlag oder berührt, geführt? Wer verliert schnell durch ein frühes Matt? Diese Kinder spielen in Woche 10 zuerst gegen erfahrene Kinder.',
 feld:{
 W:[T('Klicke die Figur an, die dem weißen König Schach gibt.','4k3/8/8/8/1b6/8/8/4K3',null,'Der Läufer b4. Er greift den König über die Diagonale an.',['Prüfe jede schwarze Figur.','Der Läufer greift schräg an.'],{schach:true,pruef:{schachgeber:true}}),
  T('Der Turm gibt Schach. Markiere alle sicheren Felder für den König.','4k3/8/8/8/8/8/8/r5K1',null,'f2, g2 und h2. Die 1. Reihe bleibt angegriffen.',['Der König muss die 1. Reihe verlassen.','Zeige alle Nachbarfelder.'],{schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Springer gibt Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/8/8/3n4/8/1B2K3',null,'Der König (er zieht weg) und der Läufer b1 (er schlägt den Springer). Dazwischenstellen geht beim Springer nicht.',['Prüfe wegziehen und schlagen.','Wer erreicht das Feld d3?'],{schach:true,pruef:{abwehr:true}}),
  T('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','6k1/5ppp/8/8/8/8/8/R5K1',null,'a8. Der Turm gibt Schach auf der 8. Reihe, die eigenen Bauern sperren den König ein.',['Der König hat vor sich nur eigene Bauern.','Der Turm muss auf die 8. Reihe.'],{leer:true,pruef:{matt:true}}),
  T('Weiß hat mit dem Turm auf a8 Schach gegeben. Ist es Matt? Markiere alle Felder, auf die der schwarze König fliehen kann.','R5k1/5pp1/7p/8/8/8/8/6K1',null,'Nur h7. Schwarz hat vorher h6 gezogen, deshalb ist es kein Matt.',['Welche Felder vor dem König sind frei?','Der Bauer h6 hat ein Feld frei gemacht.'],{zug:'b',schach:true,leer:true,pruef:{flucht:true}}),
  T('Der Turm gibt Schach. Markiere das Feld, auf das der Springer ziehen kann, um sich dazwischenzustellen.','4k3/8/8/8/8/4N3/8/r3K3',null,'d1. Der Springer sperrt die 1. Reihe. Der König könnte auch wegziehen.',['Der Springer muss zwischen a1 und e1.','Welche Springerfelder liegen auf der 1. Reihe?'],{schach:true,leer:true,pruef:{zwischen:true}})],
 E:[Z('Weiß beginnt. Klicke alle weißen Figuren an, die im ersten Zug ziehen können.','',null,'Die acht Bauern und die beiden Springer. Alle anderen Figuren sind noch eingesperrt.',['Wer hat ein freies Feld vor sich?','Der Springer springt über die Bauern.'],{pruef:{ziehbar:true}}),
  Z('Berührt, geführt: Das Kind hat den Springer g1 berührt und muss mit ihm ziehen. Markiere alle Felder, auf die er ziehen kann.','e4 e5',null,'e2, f3 und h3. Am besten ist f3, dort greift er den Bauern e5 an.',['Berührt heißt: mit dieser Figur ziehen.','Zwei gerade, eins zur Seite.'],{leer:true,pruef:{zuege:'g1'}}),
  Z('Losgelassen ist gezogen: Die Dame wurde auf g4 losgelassen und bleibt dort. Klicke die schwarze Figur an, die sie jetzt schlagen kann.','e4 e5 Qg4 d6',null,'Der Läufer c8. Losgelassen ist gezogen, die Dame darf nicht zurück.',['Welche schwarze Figur erreicht g4?','Seit d6 ist der Weg für den Läufer frei.'],{pruef:{erreichen:'g4',weiss:false}}),
  Z('Das schnellste Matt: Weiß hat f3 und g4 gezogen. Klicke das Feld an, auf dem Schwarz jetzt mattsetzt.','f3 e5 g4',null,'h4. Die Dame gibt Schach, und der weiße König kann nicht fliehen. Das heißt Narrenmatt.',['Die Diagonale zum weißen König ist offen.','Die schwarze Dame zieht.'],{leer:true,pruef:{matt:true}}),
  T('Tipp 1, Bauern in die Mitte: Markiere die beiden Zentrumsfelder, die ein weißer Bauer im ersten Zug erreichen kann.',START,['d4','e4'],'d4 und e4. Mit dem Doppelschritt besetzt ein Bauer sofort das Zentrum.',['Das Zentrum sind d4, e4, d5 und e5.','Welche davon erreicht ein Bauer von der 2. Reihe?'],{leer:true}),
  Z('Tipp 2, Figuren herausbringen: Klicke alle weißen Springer und Läufer an, die jetzt schon ziehen können.','e4 e5',null,'Die Springer b1 und g1 und der Läufer f1. Der Bauernzug e4 hat dem Läufer den Weg frei gemacht.',['Springer springen über die Bauern.','Welcher Läufer hat eine freie Diagonale?'],{pruef:{ziehbar:true,typen:'nb'}})],
 A:[Z('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','e4 e5 Bc4 Nc6 Qh5 Nf6',null,'f7. Die Dame schlägt den Bauern, der Läufer c4 deckt sie. Das heißt Schäfermatt.',['Welcher schwarze Bauer ist nur vom König gedeckt?','Dame und Läufer zielen auf dasselbe Feld.'],{pruef:{matt:true}}),
  Z('Weiß droht Dxf7 matt. Markiere die Felder, auf die die schwarze Dame ziehen kann, um f7 zu decken.','e4 e5 Bc4 Nc6 Qh5',null,'e7 und f6. Von dort deckt die Dame den Bauern f7.',['Die Dame muss f7 im Blick haben.','Von welchen Feldern sieht sie f7?'],{leer:true,pruef:{deckzug:{figuren:['d8'],ziel:'f7'}}}),
  Z('Berührt, geführt: Schwarz hat den Läufer f8 berührt. Markiere alle Felder, auf die er ziehen kann.','e4 e5',null,'e7, d6, c5, b4 und a3. Der Bauernzug e5 hat ihm den Weg frei gemacht.',['Der Läufer zieht schräg.','Nur eine Diagonale ist frei.'],{leer:true,pruef:{zuege:'f8'}}),
  Z('Klicke alle weißen Figuren an, die hängen.','e4 d5 Bc4',null,'Der Läufer c4 und der Bauer e4. Beide greift der Bauer d5 an, und niemand deckt sie.',['Was greift der schwarze Bauer d5 an?','Deckt eine weiße Figur c4 oder e4?'],{pruef:{haengt:'w'}}),
  Z('Weiß hat mit dem Läufer auf f7 Schach gegeben. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','e4 e5 Bc4 Bc5 Bxf7+',null,'Nur der König. Er schlägt den Läufer oder zieht weg. Der Bauer f7 war nur vom König gedeckt.',['Wer erreicht das Feld f7?','Kann sich eine Figur dazwischenstellen?'],{schach:true,pruef:{abwehr:true}}),
  Z('Welche weißen Figuren greifen den Bauern f7 an? Klicke sie an.','e4 e5 Bc4 Nc6 Qh5',null,'Der Läufer c4 und die Dame h5. f7 ist am Anfang der schwächste Punkt, nur der König deckt ihn.',['Prüfe die Diagonalen zu f7.','Zwei Figuren zielen auf f7.'],{pruef:{erreichen:'f7'}})],
 S:[Z('Die Dame ist zu früh draußen und wird angegriffen. Markiere alle sicheren Felder, auf die sie ziehen kann.','e4 e5 Qh5 Nf6',null,'d1, e2, f3, h3, h4, g5, f5 und e5. Auf e5 schlägt sie sogar einen Bauern mit Schach. Auf g4, g6, h6, h7 und f7 wäre sie angegriffen.',['Welche Felder greift Schwarz an?','Bleibt die Dame dort ungedeckt?'],{leer:true,pruef:{sicher:'h5'}}),
  Z('Berührt, geführt: Ein Kind hat aus Versehen den eigenen König berührt. Markiere das Feld, auf das er ziehen muss.','e4 e5',null,'e2. Es ist das einzige freie Feld. Deshalb nur Figuren berühren, mit denen man auch ziehen will.',['Welche Nachbarfelder sind frei?','Nur ein Feld ist frei.'],{leer:true,pruef:{zuege:'e1'}}),
  Z('Ein Kind hat den schwarzen Bauern e5 berührt. Dann muss es ihn schlagen, wenn das geht. Klicke alle weißen Figuren an, die e5 schlagen können.','e4 e5 Nf3 Nc6 d4 d6',null,'Der Bauer d4 und der Springer f3. Berührt man eine gegnerische Figur, muss man sie schlagen, wenn es geht.',['Wer erreicht das Feld e5?','Der Bauer schlägt schräg.'],{pruef:{erreichen:'e5'}}),
  Z('Schwarz will die Dame vertreiben. Markiere das Feld, auf das ein schwarzer Bauer ziehen kann, um die Dame anzugreifen.','e4 e5 Qh5 Nc6 Bc4',null,'g6. Der Bauer greift die Dame an und sperrt zugleich die Diagonale nach f7.',['Welcher Bauer steht nahe bei der Dame?','Ein Feld vorwärts genügt.'],{leer:true,pruef:{deckzug:{figuren:['g7'],ziel:'h5'}}}),
  Z('Schwarz meint, der König kann noch weg. Markiere alle Felder, auf die er fliehen kann. Wenn keins, drücke „Prüfen“ ohne Markierung.','e4 e5 Bc4 Nc6 Qh5 Nf6 Qxf7#',null,'Keins, es ist Matt. Die Dame auf f7 ist vom Läufer c4 gedeckt, der König kann sie nicht schlagen.',['Kann der König die Dame schlagen?','Wer deckt die Dame?'],{schach:true,leer:true,pruef:{flucht:true}}),
  Z('Achte auf die Angriffe des Gegners: Welche schwarzen Figuren greifen den Bauern e4 an? Klicke sie an.','e4 d5 Nc3 Nf6',null,'Der Bauer d5 und der Springer f6. Der Springer c3 deckt e4.',['Prüfe jede schwarze Figur.','Der Bauer greift schräg nach unten an.'],{pruef:{erreichen:'e4',weiss:false}})],
 L:[Z('Schwarz ist am Zug. Klicke alle Figuren an, die Schwarz im ersten Zug ziehen kann.','e4',null,'Die acht Bauern und die beiden Springer.',['Wer hat ein freies Feld vor sich?','Der Springer springt über die Bauern.'],{pruef:{ziehbar:true}}),
  Z('Klicke das Feld an, auf dem Schwarz jetzt mattsetzt.','g4 e5 f4',null,'h4. Die Dame gibt Schach über die offene Diagonale, der König kann nicht fliehen.',['Welche Diagonale zum weißen König ist offen?','Die schwarze Dame zieht.'],{leer:true,pruef:{matt:true}}),
  Z('Berührt, geführt: Schwarz hat den Springer f6 berührt. Markiere alle Felder, auf die er ziehen kann.','e4 e5 Nf3 Nf6',null,'d5, e4, g4, h5 und g8. Auf e4 schlägt er den Bauern.',['Zwei gerade, eins zur Seite.','Auf e4 kann er schlagen.'],{leer:true,pruef:{zuege:'f6'}}),
  Z('Klicke die schwarze Figur an, die hängt.','d4 e5',null,'Der Bauer e5. Ihn greift der Bauer d4 an, und niemand deckt ihn.',['Was greift der weiße Bauer an?','Deckt eine schwarze Figur e5?'],{pruef:{haengt:'b'}}),
  Z('Schwarz steht im Schach. Klicke die schwarze Figur an, die das Schach abwehren kann.','e4 f6 Qh5+',null,'Nur der Bauer g7: Er stellt sich auf g6 dazwischen. Der König kann nicht weg, e7 ist besetzt und f7 angegriffen.',['Prüfe wegziehen, dazwischenstellen und schlagen.','Kann ein Bauer die Diagonale sperren?'],{schach:true,pruef:{abwehr:true}}),
  Z('Klicke die weiße Figur an, die in einem Zug mattsetzen kann.','e4 e5 Bc4 Bc5 Qf3 Nc6',null,'Die Dame f3. Sie schlägt auf f7, der Läufer c4 deckt sie.',['Wer zielt auf f7?','Die Dame braucht Deckung.'],{pruef:{mattfigur:true}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 9 geschrieben');
