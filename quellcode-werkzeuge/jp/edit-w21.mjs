// Woche 21 „Schulmeisterschaft“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w20.mjs, dann diese Datei.
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
const ZE=(frage,zuege,targets,antwort,hilfe,extra={})=>{const g=new Chess();for(const m of zuege.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');
 return T(frage,f[0],targets,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[3]!=='-'?{ep:f[3]}:{}),zuege,...extra})};
// Deutsche Notation in die von chess.js übersetzen
const EN=s=>s.replace(/^0-0-0/,'O-O-O').replace(/^0-0/,'O-O').replace(/^[KDTLS]/,c=>({K:'K',D:'Q',T:'R',L:'B',S:'N'})[c]).replace(/=?([DTLS])(?=[+#]?$)/,(m,c)=>'='+({D:'Q',T:'R',L:'B',S:'N'})[c]);
// NZ: Stellung aus Zügen (oder FEN mit Zusatzangaben), deutscher Zug, Ziel: 'von', 'nach', 'beide' oder 'rochade'
const NZ=(frage,quelle,zug,ziel,antwort,hilfe,extra={})=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle);if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);
 const f=g.fen().split(' ');const m=g.move(EN(zug));if(!m)throw Error('Zug nicht möglich: '+zug);
 const t=ziel==='von'?[m.from]:ziel==='nach'?[m.to]:ziel==='beide'?[m.from,m.to]:m.flags.includes('k')?[m.to,'f'+m.to[1]]:[m.to,'d'+m.to[1]];
 if(ziel==='rochade'&&!/[kq]/.test(m.flags))throw Error('keine Rochade: '+zug);
 return T(frage,f[0],t,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{}),...extra})};
// Offene Schreibaufgabe: Zug wird geprüft, Lösung ist die deutsche Notation
const SCHREIB=(frage,quelle,zug,antwort,hilfe)=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle);if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);
 const f=g.fen().split(' ');const mv=g.move(EN(zug));if(!mv)throw Error('Zug nicht möglich: '+zug);return T(frage,f[0],undefined,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(viaZuege&&quelle?{zuege:quelle}:{}),pfeil:[mv.from,mv.to]})};
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.';
const POS=quelle=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle.includes(' ')?quelle:quelle+' w - - 0 1');if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],extra:{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})}}};
const P=(frage,quelle,antwort,hilfe,pruef,extra={})=>{const p=POS(quelle);return T(frage,p.fen,null,antwort,hilfe,{...p.extra,...extra,pruef})};
F[21]={thema:'Schulmeisterschaft',
 lernziel:'Ich kann ein Turnier mit Uhr und Notation spielen.',
 leitfrage:'Wie spiele ich mit Uhr, Partieformular und Fairplay eine ganze Meisterschaft?',
 vorwissen:'Turnierregeln, Schachuhr und Mitschreiben (Woche 20), Notation (Woche 19), Weihnachtsturnier im Rutschsystem (Woche 18).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Turnierform Rutschsystem aus dem Praxiswissen (Spielphasen organisieren), FIDE-Schachregeln 2023 in kindgerechter Form wie in Woche 20. Brettaufgaben eigene Aufgaben, alle Lösungen mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Ankommen, Bretter und Uhren aufbauen, Aufwärmen',
  ablauf:['Stopp-Signal. Bretter in einer Reihe nummerieren, Brett 1 ist oben. Jedes Paar stellt die Uhr auf 5 Minuten pro Kind und legt ein Partieformular bereit. Die Startplätze werden gelost.',
   'Am Lehrbrett W1 bis W6 zügig aufwärmen: Mattbilder, Schach abwehren, Notation. Ziel nennen: „Heute spielt ihr die Schulmeisterschaft. Wer nach der letzten Runde an Brett 1 gewinnt, ist Schulmeisterin oder Schulmeister. Alle anderen spielen um ihr persönliches Ziel.“'],
  kinder:'Ich baue Brett, Uhr und Partieformular selbstständig auf.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'},{art:'druck',label:'Turnierkarten Schulmeisterschaft (vier pro Blatt)',was:'turnierkarte'}]},
 {name:'Erarbeitung',titel:'Meisterschafts-Tipps am Lehrbrett',
  ablauf:['Kurz erinnern: Rutschsystem wie im Weihnachtsturnier. Sieg ein Brett nach oben, Niederlage eins nach unten, Remis oder nicht fertig: Weiß nach oben, Schwarz nach unten. Uhr mit derselben Hand drücken, mitschreiben, so gut es geht.',
   'Am Lehrbrett E1 bis E6 sechs Tipps für die Meisterschaft: Was droht der Gegner? Hängt eine Figur? Kann ich gewinnbringend schlagen? Matt vor Remis prüfen. Mit großem Vorteil kein Patt. Freibauer laufen lassen.',
   'Frage: „Warum lohnt es sich, vor jedem Zug drei Sekunden auf den Zug des Gegners zu schauen?“'],
  kinder:'Ich kenne sechs Tipps, die mir in der Turnierpartie helfen.',
  links:[{art:'druck',label:'Plakat: Schachuhr und Turnierregeln',was:'schachuhr'},{art:'feld',label:'Lehrbrett: Meisterschafts-Tipps E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Runde 1 und Runde 2',
  ablauf:['Runde 1 und Runde 2 im Rutschsystem, je 5 Minuten pro Kind. Vor der Partie Hand geben, nach der Partie Ergebnis auf der Turnierkarte eintragen und an der Turnierliste melden. In Runde 2 wechseln die Farben, danach wechseln die Rollen beim Melden und Aufbauen.',
   'Wer früh fertig ist, löst die Meisterrätsel A1 bis A6. Du führst die Turnierliste und schaust bei Streit an das Brett.'],
  kinder:'Ich spiele mit Uhr, schreibe mit und melde mein Ergebnis.',
  links:[{art:'druck',label:'Turnierliste für die Lehrkraft',was:'meisterliste'},{art:'druck',label:'Partieformular (zwei pro Blatt)',was:'partieformular'},{art:'druck',label:'Arbeitsblatt: Meisterrätsel',was:'feld:A'},{art:'feld',label:'Lehrbrett: Meisterrätsel A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Halbzeit-Stopp: Streitfälle klären',
  ablauf:['Stopp-Signal, alle Uhren anhalten. Frage: „Was war bisher schwierig?“ Am Lehrbrett S1 bis S6 Streitfälle, die in Meisterschaften oft vorkommen: Rochade über ein angegriffenes Feld, en passant, Umwandlung in einen Springer, Patt, Zeit abgelaufen, falscher Mattruf.',
   'Bei jedem Fall nachfragen: „Woran erkennst du, wer recht hat?“'],
  kinder:'Ich entscheide Streitfälle mit der passenden Regel.',
  links:[{art:'feld',label:'Lehrbrett: Streitfälle S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Finalrunde und Schiedsrichter-Zettel',
  ablauf:['Runde 3 ist die Finalrunde, 5 Minuten pro Kind. Wer an Brett 1 gewinnt, ist Schulmeisterin oder Schulmeister. Du beobachtest: Uhr mit derselben Hand, Mitschreiben, Hand geben, Partie zu Ende spielen.',
   'Wer fertig ist, löst den Schiedsrichter-Zettel L1 bis L6 allein. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich spiele meine Finalpartie fair zu Ende und löse sechs Turnierfälle allein.',
  links:[{art:'druck',label:'Lerncheck-Zettel: Schiedsrichter',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Siegerehrung, Urkunden, Aufräumen',
  ablauf:['Siegerehrung: die Schulmeisterin oder der Schulmeister bekommt die Siegerurkunde, alle anderen eine Teilnahmeurkunde. Jedes Kind nennt sein persönliches Ziel und ob es geklappt hat. Keine Gesamtrangliste vorlesen.',
   'Minispiel zum Schluss, 3 Minuten: Die neue Meisterin oder der neue Meister spielt ein Simultan gegen zwei Teams, die Teams beraten sich leise. Aufräum-Ritual, Uhren auf 0. Ausblick: Nächstes Mal beginnt Gold mit der Fesselung.'],
  kinder:'Ich gratuliere fair und nenne, was mir in der Meisterschaft gelungen ist.',
  links:[{art:'druck',label:'Urkunden: Schulmeister und Teilnahme',was:'meisterurkunde'}]}],
 hinweise:{hilfe:'Unsichere Kinder spielen die erste Runde ohne Mitschreiben, ein Schiedsrichterkind schreibt mit. Fehlen Uhren, spielen diese Bretter ohne Uhr, und du rufst nach 10 Minuten das Rundenende aus.',
  zusatz:'Wer an Brett 1 gewinnt, darf die eigene Finalpartie anhand des Partieformulars am Lehrbrett vorspielen. Die anderen suchen den Zug des Tages.',
  kuerzen:'Nur zwei Runden spielen, die zweite ist die Finalrunde. Die Erarbeitung auf E1, E2 und E4 kürzen. Lerncheck-Zettel, Siegerehrung und Aufräumen bleiben, das Simultan entfällt.'},
 nachher:'Wer konnte schon vollständig mitschreiben? Wer hat die Uhr richtig bedient? Welche Fehler kamen in den Partien häufig vor? Das nimmst du mit in die Gold-Stunden ab Woche 22, die mit Taktik beginnen.',
 feld:{
 W:[P('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das die Dame zieht.','6k1/5ppp/8/8/8/8/5PPP/3Q2K1','d8. Die Dame gibt Schach über die 8. Reihe, die eigenen Bauern sperren den König ein.',['Die Grundreihe ist offen.','Die eigenen Bauern sperren den König ein.'],{matt:true},{leer:true}),
  P('Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die die Dame dafür ziehen kann.','k7/2K5/8/8/8/8/8/1Q6','a1, a2, b7 und b8. Auf a1 und a2 gibt die Dame Schach über die a-Linie, auf b7 und b8 ist sie vom König c7 gedeckt.',['Der König c7 deckt b7 und b8.','Die Dame muss Schach geben.'],{matt:true},{leer:true}),
  P('Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/8/7q/8/6P1/3NK3','Der König e1 (wegziehen), der Springer d1 (Sf2 dazwischen) und der Bauer g2 (g3 dazwischen).',['Woher kommt das Schach?','Wegziehen, dazwischenstellen oder schlagen.'],{abwehr:true},{schach:true}),
  NZ('Weiß spielt Sxd5. Klicke die Figur an, die schlägt.','e4 d5 exd5 Nf6 Nc3 Nxd5','Sxd5','von','Der Springer c3. Er schlägt den Springer d5.',['S heißt Springer.','Welcher weiße Springer erreicht d5?']),
  SCHREIB('Notiere den mit dem Pfeil eingezeichneten Zug in deutscher Kurznotation.','4k3/8/8/8/8/8/8/5RK1 w - - 0 1','Te1+','Te1+. T für Turm, e1 ist das Zielfeld, + für Schach.',['Figurenbuchstabe, Zielfeld, Zeichen.','Schach schreibt man mit +.']),
  P('Schwarz ist am Zug. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'7k/5Q2/5K2/8/8/8/8/8 b - - 0 1','Keins. Der König steht nicht im Schach und kann nicht ziehen: Patt, also remis.',['Steht der König im Schach?','Prüfe g8, g7 und h7.'],{flucht:true},{leer:true})],
 E:[P('Tipp 1, was droht? Schwarz ist am Zug. Klicke alle Felder an, auf denen Schwarz in einem Zug mattsetzt.','6k1/5ppp/8/8/8/8/1q3PPP/6K1 b - - 0 1','a1, b1 und c1. Die Dame gibt Schach über die 1. Reihe, die eigenen Bauern sperren den weißen König ein. Diese Drohung muss Weiß sofort verhindern.',['Die weißen Bauern sperren den eigenen König ein.','Prüfe Schachgebote der Dame.'],{matt:true},{leer:true}),
  P('Tipp 2, hängt etwas? Klicke alle weißen Figuren an, die angegriffen und nicht gedeckt sind.','r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N5/P1P2PPP/R1BQK1NR','Der Springer c3. Der Läufer b4 greift ihn an, und weder ein Bauer noch eine Figur deckt ihn.',['Was greift Schwarz an?','Wer deckt die weißen Figuren?'],{haengt:'w'}),
  P('Tipp 3, schlagen lohnt sich? Klicke alle schwarzen Figuren an, die Weiß mit Gewinn schlagen kann.','r1b1kb1r/ppp1qppp/2n5/3np3/2B5/5N2/PPPP1PPP/RNBQK2R','Der Springer d5. Der Läufer c4 schlägt ihn, und keine schwarze Figur kann zurückschlagen.',['Welche schwarzen Figuren greift Weiß an?','Wer kann zurückschlagen?'],{gewinn:'w'}),
  P('Tipp 4, erst Matt prüfen: Der Gegner bietet Remis an. Klicke alle Felder an, auf denen Weiß in einem Zug mattsetzt.'+KEINS,'6k1/r4ppp/8/8/8/8/1Q3PPP/4R1K1','b8 und e8. Beide Mal Schach über die 8. Reihe, der Turm a7 kann nicht dazwischen. Also nicht Remis annehmen, sondern mattsetzen.',['Suche Schachgebote.','Kann sich etwas dazwischenstellen?'],{matt:true},{leer:true}),
  P('Tipp 5, kein Patt mit Vorteil: Klicke alle Felder an, auf denen die Dame pattsetzen würde.','7k/8/5K2/8/8/8/8/1Q6','g6. Von dort deckt die Dame g8 und h7, der König f6 deckt g7. Kein Schach: Patt. Mit so viel Vorteil wäre das ein halber Punkt verschenkt.',['Der König f6 deckt g7.','Welcher Damenzug nimmt g8 und h7, ohne Schach zu geben?'],{patt:'b1'},{leer:true}),
  P('Tipp 6, Freibauer laufen lassen: Markiere alle Felder, auf die der Bauer b6 ziehen kann.','4k3/8/1P6/8/8/8/8/4K3','b7. Vor dem Bauern ist alles frei. Ein Freibauer läuft, bis er umwandeln kann.',['Steht etwas vor dem Bauern?','Ein Bauer zieht gerade nach vorn.'],{legal:'b6'},{leer:true})],
 A:[P('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das Weiß zieht.','5rk1/6pp/8/5N2/8/8/1Q6/6K1','g7. Die Dame schlägt auf g7 und setzt matt, der Springer f5 deckt sie.',['Die Dame steht auf der langen Diagonale.','Wer deckt das Mattfeld?'],{matt:true},{leer:true}),
  P('Klicke alle schwarzen Figuren an, die angegriffen und nicht gedeckt sind.','r3k2r/ppp2ppp/2n5/3N4/5b2/8/PPP2PPP/R1B1K2R','Der Läufer f4. Der Springer d5 und der Läufer c1 greifen ihn an, keine schwarze Figur deckt ihn.',['Was greift der Springer d5 an?','Wer deckt die schwarzen Figuren?'],{haengt:'b'}),
  P('Schwarz ist am Zug. Klicke alle Felder an, auf denen Schwarz in einem Zug mattsetzt.'+KEINS,'6k1/8/8/8/8/5q1p/5P2/6K1 b - - 0 1','g2. Die Dame setzt matt, der Bauer h3 deckt sie.',['Die Dame steht schon nah am König.','Wer deckt die Felder neben dem weißen König?'],{matt:true},{leer:true}),
  P('Weiß ist am Zug. Klicke alle Felder an, auf denen der Bauer mattsetzt, wenn er umwandelt.','6k1/2P2ppp/8/8/8/8/5PPP/6K1','c8. Der Bauer wandelt in eine Dame oder einen Turm um und gibt Schach über die 8. Reihe. Die eigenen Bauern sperren den König ein.',['Der Bauer zieht nach c8.','Welche Figur gibt dort Schach über die ganze Reihe?'],{matt:true},{leer:true}),
  NZ('Schwarz spielt Lxc3+. Markiere Startfeld und Zielfeld.','d4 Nf6 c4 e6 Nc3 Bb4 a3','Lxc3+','beide','b4 und c3. Der Läufer schlägt den Springer c3 und gibt Schach.',['L heißt Läufer, x schlägt, + Schach.','Welcher schwarze Läufer erreicht c3?']),
  P('Weiß ist am Zug. Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.'+KEINS,'r3k2r/8/8/8/8/8/5n2/R3K2R w KQkq - 0 1','Nur g1. Lang geht nicht, weil der Springer f2 das Feld d1 angreift, über das der König ziehen müsste.',['Steht der König im Schach?','Welche Felder greift der Springer f2 an?'],{rochade:true},{leer:true})],
 S:[P('Ein Kind will kurz rochieren. Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.'+KEINS,'r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1'.replace('8/8/8/8/8/8','8/8/2b5/8/8/8'),'Nur c1. Kurz geht nicht, weil der Läufer c5 das Feld g1 angreift. Auf ein angegriffenes Feld darf der König auch mit Rochade nicht.',['Über welche Felder zieht der König?','Wen greift der Läufer c5 an?'],{rochade:true},{leer:true}),
  ZE('Streitfall en passant: Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.'+KEINS.replace('keins','keiner'),'d4 h6 d5 c5',null,'Der Bauer d5. Schwarz hat gerade c7–c5 gespielt, d5 steht direkt daneben und darf en passant auf c6 schlagen.',['Welcher schwarze Bauer hat gerade einen Doppelschritt gemacht?','Wer steht direkt daneben?'],{pruef:{epschlaeger:true}}),
  P('Streitfall Umwandlung: Ein Kind wandelt in einen Springer um und sagt „Schach!“. Klicke alle weißen Figuren an, die dem schwarzen König Schach geben.'+KEINE,'4k3/8/8/8/8/8/8/4K3 b - - 0 1'.replace('4k3/8','3Nk3/8'),'Keine. Der Springer d8 greift b7, c6, e6 und f7 an, nicht e8. Wer „Schach!“ ruft, muss es auch am Brett zeigen.',['Wohin springt der Springer d8?','Greift er e8 an?'],{schachgeber:true}),
  P('Streitfall Patt: Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ziehen können.'+KEINE,'7k/7P/7K/8/8/8/8/8 b - - 0 1','Keine. Der König steht nicht im Schach und kann nicht ziehen: Patt. Das ist remis, kein Sieg für Weiß.',['Kann der König ziehen?','Steht er im Schach?'],{ziehbar:true}),
  T('Streitfall Zeit: Die Zeit von Schwarz ist abgelaufen. Weiß hat nur noch König und Läufer, Schwarz hat König und Bauer. Klicke die weißen Figuren an, mit denen Weiß noch mattsetzen könnte.','8/8/8/8/2k5/2p5/8/2B1K3',['c1','e1'],'Der König e1 und der Läufer c1. Weil Schwarz noch einen Bauern hat, ist ein Matt möglich, zum Beispiel wenn der eigene Bauer dem König ein Feld nimmt. Deshalb gewinnt Weiß, wenn die Zeit von Schwarz abläuft.',['Hat Schwarz noch eine Figur, die den eigenen König einsperren könnte?','Mit Hilfe des schwarzen Bauern ist ein Matt möglich.']),
  P('Streitfall Matt: Ein Kind ruft „Matt!“. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'3k4/3Q4/8/8/8/8/8/4K3 b - - 0 1','d7. Die Dame ist nicht gedeckt, der König schlägt sie. Kein Matt.',['Ist die Dame gedeckt?','Darf der König die Dame schlagen?'],{flucht:true},{schach:true,leer:true})],
 L:[P('Weiß setzt in einem Zug matt. Klicke alle Felder an, auf die der Turm dafür ziehen kann.','7k/8/6K1/8/8/8/8/3R4','d8. Der Turm gibt Schach über die 8. Reihe, der König g6 deckt g7 und h7.',['Der König g6 deckt g7 und h7.','Der Turm muss auf die 8. Reihe.'],{matt:true},{leer:true}),
  P('Klicke alle weißen Figuren an, die angegriffen und nicht gedeckt sind.','r3k3/ppp2ppp/8/4b3/8/2N2P2/P1P3PP/4K2R','Der Springer c3. Der Läufer e5 greift ihn an, und keine weiße Figur deckt ihn, seit der Bauer b2 fehlt.',['Was greift der Läufer e5 an?','Wer deckt die weißen Figuren?'],{haengt:'w'}),
  NZ('Weiß spielt exd5. Klicke den Bauern an, der schlägt.','e4 d5 c4 c6','exd5','von','Der Bauer e4. Das e vor dem x nennt seine Linie, der Bauer c4 hätte cxd5 geschrieben.',['Zwei weiße Bauern können d5 schlagen.','Der Buchstabe vor dem x nennt die Linie.']),
  T('Die Zeit von Weiß ist abgelaufen. Schwarz hat König und Springer, Weiß nur noch den König. Klicke die schwarzen Figuren an, mit denen Schwarz noch mattsetzen könnte.'+KEINE,'8/8/2k5/4n3/8/8/8/6K1',[],'Keine. Weiß hat nur noch den König, und mit König und Springer allein kann Schwarz nicht mattsetzen. Die Partie ist remis.',['Reicht ein Springer zum Matt?','Hat Weiß noch Figuren, die den eigenen König einsperren?']),
  P('Klicke alle Felder an, auf denen die Dame pattsetzen würde.','k7/8/1K6/8/8/8/8/6Q1','g3 und h2. Von dort deckt die Dame b8, der König b6 deckt a7 und b7. Kein Schach: Patt.',['Der König b6 deckt a7 und b7.','Welcher Damenzug deckt b8, ohne Schach zu geben?'],{patt:'g1'},{leer:true}),
  SCHREIB('Notiere den mit dem Pfeil eingezeichneten Zug in deutscher Kurznotation. Der Bauer wird zur Dame.','4k3/4P3/4K3/8/8/8/8/8 w - - 0 1'.replace('4k3','2k5').replace('4K3','3K4'),'e8D+','e8D+. Der Bauer zieht nach e8, wird zur Dame (D) und gibt Schach (+).',['Umwandlung schreibt man mit dem Buchstaben der neuen Figur.','Schach schreibt man mit +.'])]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 21 geschrieben');
