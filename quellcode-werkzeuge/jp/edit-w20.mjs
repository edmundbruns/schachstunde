// Woche 20 „Turnierregeln, Schachuhr, Partie mitschreiben“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w19.mjs, dann diese Datei.
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
 const f=g.fen().split(' ');if(!g.move(EN(zug)))throw Error('Zug nicht möglich: '+zug);return T(frage,f[0],undefined,antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})})};
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.';
const POS=quelle=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle.includes(' ')?quelle:quelle+' w - - 0 1');if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],extra:{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})}}};
const P=(frage,quelle,antwort,hilfe,pruef,extra={})=>{const p=POS(quelle);return T(frage,p.fen,null,antwort,hilfe,{...p.extra,...extra,pruef})};
F[20]={thema:'Turnierregeln, Schachuhr, Partie mitschreiben',
 lernziel:'Ich kann mit Uhr spielen und meine Partie mitschreiben.',
 leitfrage:'Was gilt im Turnier, wenn die Uhr läuft, und wie schreibe ich dabei meine Züge auf?',
 vorwissen:'Notation (Woche 19), Weihnachtsturnier und Fairplay (Woche 9 und 18), Patt und Remis (Woche 16).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'FIDE-Schachregeln (gültig seit 1. Januar 2023) in kindgerechter Form: berührt, geführt und „Ich rücke zurecht“ (Art. 4), Uhr mit derselben Hand drücken (Art. 6), Zeitüberschreitung und Mattmöglichkeit (Art. 6.9), illegaler Zug (Art. 7, im Schnellschach eine Minute Zeitgutschrift), Remisangebot (Art. 9), Mitschreiben (Art. 8). Brettaufgaben eigene Aufgaben, alle Lösungen mit chess.js nachgerechnet',
 phasen:[
 {name:'Einstieg',titel:'Notation aufwärmen',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Züge lesen und aufschreiben wie in Woche 19. Die Kinder zeigen erst mit dem Finger, dann wird geklickt oder aufgeschrieben.',
   'Schachuhr zeigen und fragen: „Wozu braucht man im Turnier eine Uhr?“ Ziel nennen: „Heute spielt ihr mit Uhr und schreibt eure Partie mit, wie bei der Schulmeisterschaft.“'],
  kinder:'Ich lese und schreibe Züge sicher.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Die Uhr und die wichtigsten Turnierregeln',
  ablauf:['Plakat „Schachuhr und Turnierregeln“ aufhängen. Uhr vormachen: 5 Minuten für jedes Kind einstellen, Schwarz startet die Uhr von Weiß. Erst ziehen, dann mit derselben Hand die Uhr drücken. Ist die Zeit abgelaufen, ist die Partie verloren, außer der Gegner kann gar nicht mehr mattsetzen. Dann ist sie remis.',
   'Am Lehrbrett E1 bis E6 die Regeln: berührt, geführt (vorher „Ich rücke zurecht“ sagen), illegaler Zug wird zurückgenommen und der Gegner bekommt eine Minute dazu, Remis erst ziehen, dann anbieten, dann Uhr drücken. Mitschreiben: erst ziehen, Uhr drücken, dann aufschreiben.',
   'Frage bei E4: „Warum ist das remis, obwohl die Zeit von Weiß abgelaufen ist?“ Merksatz: „Ziehen, drücken, schreiben.“'],
  kinder:'Ich erkläre, wie man die Uhr bedient und was bei abgelaufener Zeit gilt.',
  links:[{art:'druck',label:'Plakat: Schachuhr und Turnierregeln',was:'schachuhr'},{art:'feld',label:'Lehrbrett: Turnierregeln E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Partie mit Uhr und Partieformular in Vierergruppen',
  ablauf:['In Vierergruppen: Zwei Kinder spielen mit 5 Minuten pro Kind und schreiben mit, so weit es geht. Zwei Kinder sind Schiedsrichter: eins achtet auf Uhr und „berührt, geführt“, eins liest am Ende das Partieformular vor. Danach wechseln die Rollen.',
   'Ohne Uhr: Partie mit Partieformular, die Lehrkraft ruft alle 30 Sekunden „Zug!“. Wer fertig ist, löst das Arbeitsblatt A1 bis A6.'],
  kinder:'Ich spiele mit Uhr, drücke mit derselben Hand und schreibe meine Züge mit.',
  links:[{art:'druck',label:'Partieformular (zwei pro Blatt)',was:'partieformular'},{art:'druck',label:'Arbeitsblatt: Turnierregeln und Mitschreiben',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Streitfälle mit Uhr klären',
  ablauf:['Stopp-Signal. Zwei Schiedsrichter berichten, was ihnen aufgefallen ist. Am Lehrbrett S1 bis S6 typische Streitfälle: illegaler Zug im Schach, Zeit abgelaufen gegen einen nackten König, berührter König, verlorenes Rochaderecht, falscher Mattruf, vergessenes Zeichen beim Mitschreiben.',
   'Bei jedem Fall fragen: „Woran erkennst du, wer recht hat?“ Regel: Uhr anhalten, Hand heben, Stellung stehen lassen.'],
  kinder:'Ich entscheide einen Streitfall mit der passenden Turnierregel.',
  links:[{art:'feld',label:'Lehrbrett: Streitfälle S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, lässt du einzelne Kinder die Uhr bedienen: ziehen, mit derselben Hand drücken, den Zug aufschreiben. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich wende Turnierregeln und Notation ohne Hilfe an.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Uhren-Bauernspiel“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: nur Könige und Bauern, 1 Minute pro Kind. Wer zuerst einen Bauern auf die letzte Reihe bringt oder wessen Gegner die Zeit überschreitet, gewinnt. Ziehen und drücken mit derselben Hand. Danach wechseln die Rollen und die Farben.',
   'Rückblick: „Was war mit Uhr schwieriger als ohne?“ Aufräum-Ritual, Uhren auf 0 stellen. Ausblick: Nächstes Mal ist Schulmeisterschaft mit Uhr und Partieformular.'],
  kinder:'Ich drücke die Uhr auch unter Zeitdruck richtig.',
  links:[{art:'druck',label:'Plakat: Schachuhr und Turnierregeln',was:'schachuhr'}]}],
 hinweise:{hilfe:'Ohne genug Uhren: Uhr-App auf einem Tablet oder die Lehrkraft ruft „Zug!“. Unsichere Kinder spielen erst ohne Mitschreiben, ein Schiedsrichterkind schreibt für sie mit.',
  zusatz:'Partie mit 10 Minuten pro Kind und vollständigem Partieformular. Danach die Partie aus dem Formular nachspielen: Stimmt die Endstellung?',
  kuerzen:'Nur eine Partie in der Vierergruppe, die Erarbeitung auf E1, E3 und E4 kürzen. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer drückt die Uhr mit der anderen Hand oder vor dem Zug? Wer kommt beim Mitschreiben nicht hinterher? Das greifst du vor der Schulmeisterschaft (Woche 21) noch einmal auf. Notation bleibt ein Dauerthema in jeder Spielphase.',
 feld:{
 W:[NZ('Weiß spielt Sc3. Klicke die Figur an, die zieht.','d4 d5','Sc3','von','Der Springer b1.',['S heißt Springer.','Welcher weiße Springer erreicht c3?']),
  NZ('Schwarz spielt exd4. Klicke den Bauern an, der schlägt.','e4 e5 d4','exd4','von','Der Bauer e5. Das e vor dem x nennt seine Linie.',['x heißt schlägt.','Der Buchstabe vor dem x nennt die Linie.']),
  SCHREIB('Der Läufer c1 zieht nach g5. Schreibe den Zug auf.','d4 d5 Nc3 Nf6','Lg5','Lg5. L für Läufer, g5 ist das Zielfeld.',['Erst der Figurenbuchstabe.','Dann das Zielfeld.']),
  NZ('Weiß spielt 0-0. Markiere die Felder, auf denen König und Turm danach stehen.','e4 e6 d4 d5 Nf3 Nf6 Bd3 Be7','0-0','rochade','g1 und f1.',['Zwei Nullen: kurze Rochade.','Der König zieht zwei Felder zum Turm.']),
  NZ('Weiß spielt Dxf7#. Markiere Startfeld und Zielfeld.','e4 e5 Bc4 Nc6 Qh5 Nf6','Dxf7#','beide','h5 und f7. Die Dame schlägt auf f7 und setzt matt, der Läufer c4 deckt sie. Das ist das Schäfermatt.',['D heißt Dame, x schlägt, # Matt.','Wo steht die weiße Dame?']),
  SCHREIB('Schwarz schlägt mit dem Bauern d5 den Bauern e4. Schreibe den Zug auf.','e4 d5 Nc3','dxe4','dxe4. Beim Bauern steht die Linie, von der er kommt, vor dem x.',['Ein Bauer hat keinen Buchstaben.','Beim Schlagen schreibt man seine Linie davor.'])],
 E:[P('Berührt, geführt: Du hast den Läufer c1 berührt. Markiere alle Felder, auf die er ziehen darf.'+KEINS,'e4 e5','Keins. Der Bauer d2 versperrt den Weg. Hat die berührte Figur keinen erlaubten Zug, darfst du ohne Strafe eine andere Figur ziehen.',['Welche Felder sind frei?','Steht eine eigene Figur im Weg?'],{legal:'c1'},{leer:true}),
  T('Du hast versehentlich den Springer c6 deines Gegners berührt. Dann musst du ihn schlagen, wenn es geht. Klicke alle weißen Figuren an, die ihn schlagen können.','r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',['b5'],'Der Läufer b5. Er muss Lxc6 spielen. Wer eine Figur nur zurechtrücken will, sagt vorher „Ich rücke zurecht“.',['Welche weiße Figur greift c6 an?','Berührt man eine gegnerische Figur, muss man sie schlagen, wenn es geht.'],{zuege:'e4 e5 Nf3 Nc6 Bb5 a6'}),
  P('Ein Kind will den König nach f2 ziehen. Markiere alle Felder, auf die der weiße König ziehen darf.','4k3/8/8/2b5/8/8/8/4K3','d1, d2, e2 und f1. Das Feld f2 greift der Läufer c5 an. Wer trotzdem Kf2 spielt und die Uhr drückt, macht einen illegalen Zug: zurücknehmen, und der Gegner bekommt eine Minute dazu.',['Welche Felder greift der Läufer c5 an?','Ein König darf nie auf ein angegriffenes Feld.'],{legal:'e1'},{leer:true}),
  T('Die Zeit von Weiß ist abgelaufen. Schwarz hat nur noch König und Springer. Klicke die schwarzen Figuren an, mit denen Schwarz noch mattsetzen könnte.'+KEINE,'4k3/8/8/3n4/8/8/8/4K3',[],'Keine. Mit König und Springer allein kann Schwarz nie mattsetzen. Deshalb ist die Partie remis, obwohl die Zeit von Weiß abgelaufen ist.',['Reicht ein Springer zum Matt?','Zeit abgelaufen heißt nur verloren, wenn der Gegner noch mattsetzen könnte.']),
  P('Zeitnot: Weiß will schnell mit der Dame ziehen. Klicke alle Felder an, auf denen die Dame pattsetzen würde.','k7/8/1K6/8/8/8/8/2Q5','c7 und f4. Von dort deckt die Dame b8, der König b6 deckt a7 und b7. Kein Schach: Patt. Auch mit wenig Zeit erst prüfen!',['Der König b6 deckt a7 und b7.','Welcher Damenzug deckt b8, ohne Schach zu geben?'],{patt:'c1'},{leer:true}),
  P('Weiß hat Lb5+ gespielt und die Uhr gedrückt. Klicke alle schwarzen Figuren an, die das Schach abwehren können.','e4 d6 d4 Nf6 Bb5+','Der Springer b8 (Sc6 oder Sd7), der Läufer c8 (Ld7), die Dame d8 (Dd7), der Bauer c7 (c6) und der Springer f6 (Sfd7). Der König selbst hat kein freies Feld.',['Woher kommt das Schach?','Wer kann sich dazwischenstellen?'],{abwehr:true},{schach:true})],
 A:[NZ('Schwarz spielt Sxe4. Klicke die Figur an, die schlägt.','e4 e5 Nf3 Nf6 Nxe5','Sxe4','von','Der Springer f6. Er schlägt den Bauern e4.',['S heißt Springer.','Welcher schwarze Springer erreicht e4?']),
  SCHREIB('Die weiße Dame d1 zieht nach e2. Schreibe den Zug auf.','e4 e5 Nf3 Nf6 Nxe5 Nxe4','De2','De2. D für Dame, e2 ist das Zielfeld.',['Erst der Figurenbuchstabe.','Dann das Zielfeld.']),
  P('Berührt, geführt: Du hast den Turm h1 berührt. Markiere alle Felder, auf die er ziehen darf.'+KEINS,'e4 e5 Nf3 Nc6 Bc4 Bc5','g1 und f1. Du musst mit dem Turm ziehen, weil er einen erlaubten Zug hat. Rochieren darfst du nicht mehr, wenn du zuerst den Turm berührt hast.',['Welche Felder neben dem Turm sind frei?','Die Rochade beginnt man mit dem König.'],{legal:'h1'},{leer:true}),
  T('Die Zeit von Schwarz ist abgelaufen. Weiß hat König und Turm. Klicke die weiße Figur an, mit der Weiß noch mattsetzen könnte.','4k3/8/8/8/8/8/8/R3K3',['a1'],'Der Turm a1. Mit König und Turm kann Weiß mattsetzen. Deshalb gewinnt Weiß, weil die Zeit von Schwarz abgelaufen ist.',['Reicht ein Turm zum Matt?','Zeit abgelaufen: verloren, wenn der Gegner noch mattsetzen könnte.']),
  P('Schwarz steht im Schach. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'4k3/8/8/1B6/8/8/8/4K3 b - - 0 1','d8, e7, f7 und f8. Das Feld d7 liegt auf der Diagonale des Läufers b5.',['Woher kommt das Schach?','Prüfe alle Nachbarfelder.'],{flucht:true},{schach:true,leer:true}),
  P('Weiß setzt in einem Zug matt. Klicke das Zielfeld an. Wie schreibst du den Zug auf?','6k1/5ppp/8/8/8/8/5PPP/1R4K1','b8. Der Zug heißt Tb8#: T für Turm, b8 Zielfeld, # für Matt.',['Der Turm muss auf die 8. Reihe.','Matt schreibt man mit #.'],{matt:true},{leer:true})],
 S:[P('Ein Kind hat im Schach einen anderen Zug gemacht und die Uhr gedrückt. Der Zug wird zurückgenommen. Klicke alle weißen Figuren an, die das Schach richtig abwehren können.','4r1k1/8/8/8/8/3B4/8/R3K3','Der König e1 (wegziehen) und der Läufer d3 (Le2 dazwischen). Der illegale Zug wird zurückgenommen, der Gegner bekommt eine Minute dazu.',['Woher kommt das Schach?','Wegziehen, dazwischenstellen oder schlagen.'],{abwehr:true},{schach:true}),
  T('Die Zeit von Weiß ist abgelaufen. Schwarz hat nur noch den König. Klicke die schwarzen Figuren an, mit denen Schwarz noch mattsetzen könnte.'+KEINE,'8/8/4k3/8/8/8/3QK3/8',[],'Keine. Ein König allein kann nie mattsetzen. Die Partie ist remis, obwohl Weiß viel mehr Material hat.',['Kann ein König allein mattsetzen?','Zeit abgelaufen heißt nur verloren, wenn der Gegner noch mattsetzen könnte.']),
  P('Du hast deinen König berührt. Markiere alle Felder, auf die er ziehen darf.'+KEINS,'r3k3/8/8/8/8/8/3PPP2/3QK3','Nur f1. Der Turm a8 ist weit weg, aber d1, d2, e2 und f2 sind von eigenen Figuren besetzt. Du musst Kf1 spielen.',['Welche Nachbarfelder sind frei?','Greift Schwarz eines davon an?'],{legal:'e1'},{leer:true}),
  P('Der weiße König war schon auf f1 und ist zurück nach e1 gezogen. Markiere alle Felder, auf die er mit einer Rochade ziehen darf.'+KEINS,'4k3/8/8/8/8/8/8/R3K2R','Keins. Ein König, der schon einmal gezogen hat, darf nicht mehr rochieren, auch wenn er wieder auf e1 steht. Beim Mitschreiben sieht man das im Partieformular.',['Hat der König schon gezogen?','Rochade nur, wenn König und Turm noch nie gezogen haben.'],{rochade:true},{leer:true}),
  P('Ein Kind ruft „Matt!“ und hält die Uhr an. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'6k1/5p1p/6p1/8/8/8/8/3R2K1 b - - 0 1','f8, g7 und h8. Der König steht gar nicht im Schach, das ist kein Matt. Uhr wieder starten, die Partie geht weiter.',['Steht der König im Schach?','Prüfe alle Nachbarfelder.'],{flucht:true},{leer:true}),
  SCHREIB('Beim Mitschreiben steht „Lf7“. Der Läufer hat aber geschlagen und Schach gegeben. Schreibe den Zug richtig auf.','e4 e5 Nf3 Nc6 Bc4 Nd4','Lxf7+','Lxf7+. Das x zeigt das Schlagen, das + das Schach.',['Was fehlt für das Schlagen?','Was fehlt für das Schach?'])],
 L:[NZ('Schwarz spielt Lb4+. Markiere Startfeld und Zielfeld.','d4 e6 c4','Lb4+','beide','f8 und b4. Der Läufer gibt Schach.',['L heißt Läufer.','Welcher schwarze Läufer erreicht b4?']),
  SCHREIB('Der Springer g1 zieht nach f3. Schreibe den Zug auf.','d4 d5','Sf3','Sf3.',['Erst der Figurenbuchstabe.','Dann das Zielfeld.']),
  P('Berührt, geführt: Du hast den Bauern e2 berührt. Markiere alle Felder, auf die er ziehen darf.','d4 d5','e3 und e4. Der Bauer darf vom Startfeld ein oder zwei Felder ziehen.',['Wohin darf ein Bauer vom Startfeld?','Steht etwas im Weg?'],{legal:'e2'},{leer:true}),
  T('Die Zeit von Weiß ist abgelaufen. Schwarz hat König und Läufer. Klicke die schwarzen Figuren an, mit denen Schwarz noch mattsetzen könnte.'+KEINE,'8/8/3k4/8/4b3/8/8/2K5',[],'Keine. Mit König und Läufer allein kann man nicht mattsetzen: remis.',['Reicht ein Läufer zum Matt?','Was gilt dann bei abgelaufener Zeit?']),
  P('Weiß steht im Schach. Klicke alle weißen Figuren an, die das Schach abwehren können.','4k3/8/8/b7/8/8/8/1N2K2R','Der König e1 (wegziehen) und der Springer b1 (Sc3 oder Sd2 dazwischen).',['Woher kommt das Schach?','Wer kann dazwischen?'],{abwehr:true},{schach:true}),
  P('Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.'+KEINS,'r3k2r/8/8/8/8/7b/8/R3K2R w KQkq - 0 1','Nur c1. Kurz geht nicht, weil der Läufer h3 das Feld f1 angreift.',['Über welche Felder zieht der König?','Wen greift der Läufer h3 an?'],{rochade:true},{leer:true})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 20 geschrieben');
