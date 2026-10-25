// Woche 22 „Die Fesselung“ (Beginn Gold) als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w21.mjs, dann diese Datei.
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
URLS.lichessPin='https://lichess.org/training/pin';
const KEINS=' Wenn keins, drücke „Prüfen“ ohne Markierung.',KEINE=' Wenn keine, drücke „Prüfen“ ohne Markierung.';
const POS=quelle=>{const viaZuege=!quelle.includes('/');const g=viaZuege?new Chess():new Chess(quelle.includes(' ')?quelle:quelle+' w - - 0 1');if(viaZuege)for(const m of quelle.split(' ').filter(Boolean))g.move(m);const f=g.fen().split(' ');return {fen:f[0],extra:{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...(viaZuege&&quelle?{zuege:quelle}:{})}}};
const P=(frage,quelle,antwort,hilfe,pruef,extra={})=>{const p=POS(quelle);return T(frage,p.fen,null,antwort,hilfe,{...p.extra,...extra,pruef})};
// Fesselungen mit chess.js berechnen
const G=q=>{const p=POS(q);return {g:new Chess(p.fen+' '+(p.extra.zug||'w')+' - - 0 1'),p}};
const VAL={p:1,n:3,b:3,r:5,q:9,k:100};
const sqOf=(g,f)=>g.board().flat().filter(x=>x&&f(x)).map(x=>x.square);
// gefesselte Figuren der Farbe c: an den König (ziel 'k') oder an eine wertvollere Figur (ziel 'q' = Dame)
function pins(g,c,ziel='k'){const opp=c==='w'?'b':'w',out=[],pinner=[];const ziele=sqOf(g,x=>x.color===c&&x.type===(ziel==='k'?'k':'q'));
 for(const z of ziele)for(const s of sqOf(g,x=>x.color===c&&x.type!=='k'&&x.square!==z)){const before=new Set(g.attackers(z,opp));const pc=g.get(s);g.remove(s);const neu=g.attackers(z,opp).filter(a=>!before.has(a)&&'brq'.includes(g.get(a).type));g.put(pc,s);if(neu.length&&(ziel==='k'||neu.every(a=>VAL[g.get(a).type]<VAL.q))){out.push(s);pinner.push(...neu)}}
 return {gefesselt:[...new Set(out)],fessler:[...new Set(pinner)]}}
// Züge der Seite am Zug mit Langschrittlern, die eine neue Fesselung an den gegnerischen König schaffen
function fesselZuege(g,typen='bqr'){const c=g.turn(),opp=c==='w'?'b':'w',vorher=new Set(pins(g,opp).gefesselt),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);if(!g.inCheck()){const r=pins(g,opp);if(r.fessler.includes(m.to)&&r.gefesselt.some(x=>!vorher.has(x)))out.add(m.to)}g.undo()}return [...out]}
// Bauern der Seite am Zug, die eine Figur auf sq mit einem Zug angreifen können
function bauernAngriff(g,sq){const out=new Set();for(const m of g.moves({verbose:true}).filter(m=>m.piece==='p')){g.move(m);const h=new Chess(g.fen());const att=h.attackers(sq,m.color);if(att.includes(m.to))out.add(m.from);g.undo()}return [...out]}
const schlaeger=(g,sq)=>[...new Set(g.moves({verbose:true}).filter(m=>m.to===sq).map(m=>m.from))];
const X=(frage,q,fn,antwort,hilfe,extra={})=>{const {g,p}=G(q);return T(frage,p.fen,fn(g),antwort,hilfe,{...p.extra,...extra})};
const LI=id=>'Lichess-Puzzle '+id+' (CC0), https://lichess.org/training/'+id;
F[22]={thema:'Die Fesselung',
 lernziel:'Ich kann eine Fesselung erkennen und herstellen.',
 leitfrage:'Warum kann eine Figur manchmal nicht ziehen, obwohl ihr Weg frei ist?',
 vorwissen:'Gangarten von Läufer, Turm und Dame (Woche 3 und 4), Angreifen und decken (Woche 6), Figurenwerte (Woche 7), Schach und Matt (Woche 8).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Lichess-Puzzles 0BJad und 08F97 (CC0, Thema „pin“), übrige Brettaufgaben eigene Aufgaben. Fesselungen, Zugmöglichkeiten und Fesselzüge mit chess.js berechnet, die Lichess-Lösungen stammen aus der Datenbank',
 phasen:[
 {name:'Einstieg',titel:'Wer steht auf der Linie?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 aufwärmen: Linien und Diagonalen von Läufer, Turm und Dame, dazu Angreifen und Decken.',
   'Bei W2 fragen: „Der Springer c6 ist frei. Darf er ziehen?“ Kurz vermuten lassen, nicht auflösen. Ziel nennen: „Heute lernt ihr die Fesselung kennen. Sie ist das erste Taktikmotiv von Gold.“'],
  kinder:'Ich erkenne, welche Figuren auf einer Linie zwischen Angreifer und König stehen.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Gefesselt an den König oder an die Dame',
  ablauf:['Plakat „Die Fesselung“ aufhängen. Am Lehrbrett E1: Der Springer c6 steht zwischen Läufer b5 und König e8. Würde er ziehen, stünde der eigene König im Schach. Er ist an den König gefesselt und darf gar nicht ziehen.',
   'E2 bis E4: Fesselung an die Dame (der Springer darf ziehen, aber dann geht die Dame verloren). Fesselung durch einen Turm. Ein gefesselter Turm darf auf seiner Linie weiterziehen.',
   'E5 und E6: Fesselung herstellen und ausnutzen. Die gefesselte Figur mit einem Bauern angreifen, denn sie kann nicht weglaufen. Frage: „Warum ist ein Bauernangriff gegen eine gefesselte Figur so stark?“',
   'Merksatz: „Angreifer, Figur, König auf einer Linie: Die Figur ist gefesselt. Greif sie noch einmal an!“'],
  kinder:'Ich erkläre, warum eine gefesselte Figur nicht oder nur eingeschränkt ziehen darf.',
  links:[{art:'druck',label:'Plakat: Die Fesselung',was:'fesselung'},{art:'feld',label:'Lehrbrett: Fesselung E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Fesselungen bauen zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A baut eine Stellung mit König, einer Figur davor und einem Läufer, Turm oder einer Dame des Gegners. Kind B sagt: gefesselt oder nicht, und zeigt die Linie mit dem Finger. Danach wechseln die Rollen.',
   'Allein: Arbeitsblatt A1 bis A6, darunter eine echte Aufgabe aus einer Lichess-Partie. Vergleich am Lehrbrett.'],
  kinder:'Ich finde gefesselte Figuren und Züge, die eine Fesselung herstellen.',
  links:[{art:'druck',label:'Arbeitsblatt: Die Fesselung',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Irrtümer klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: An die Dame gefesselt heißt, die Figur darf ziehen, es kostet nur Material. Ohne Angreifer hinter der Linie keine Fesselung. Ein gefesselter Bauer darf den Fesselnden manchmal schlagen. Der Fesselnde kann selbst angegriffen werden.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, ob die Figur wirklich gefesselt ist?“'],
  kinder:'Ich unterscheide Fesselung an den König und an die Dame.',
  links:[{art:'feld',label:'Lehrbrett: Irrtümer klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welche Figur ist gefesselt, und wer fesselt sie?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich erkenne und nutze Fesselungen ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Fessel-Jagd“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Jede Seite hat König, Läufer, Turm und drei Bauern auf ihren Startfeldern. Wer zuerst eine gegnerische Figur fesselt und sie dann gewinnt, bekommt einen Punkt. Danach wechseln die Rollen und die Farben.',
   'Rückblick: „Woran erkennst du eine Fesselung?“ Aufräum-Ritual. Ausblick: Nächstes Mal greift eine Figur zwei Ziele gleichzeitig an, die Gabel.'],
  kinder:'Ich stelle in einer Partie eine Fesselung her.',
  links:[{art:'druck',label:'Plakat: Die Fesselung',was:'fesselung'},{art:'blatt',label:'Mehr Fesselungsaufgaben auf Lichess (online)',url:URLS.lichessPin}]}],
 hinweise:{hilfe:'Mit einem Lineal oder Stift die Linie vom Angreifer zum König auf das Brett legen. Was liegt darunter?',
  zusatz:'Eine Stellung bauen, in der eine Figur doppelt gefesselt ist, an König und Dame. Oder Lichess-Aufgaben zum Thema Fesselung lösen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer verwechselt noch Fesselung an den König und an die Dame? Wer nutzt die Fesselung schon mit einem Bauernangriff aus? Das greifst du in Woche 23 bei Gabel und Doppelangriff wieder auf.',
 feld:{
 W:[P('Markiere alle Felder, auf die der Läufer b5 ziehen kann.','e4 e5 Nf3 Nc6 Bb5 Nf6 d3 d6','a4, a6, c4 und c6. Auf c6 darf er den Springer schlagen.',['Der Läufer zieht schräg.','Auf c6 darf er schlagen.'],{legal:'b5'},{leer:true}),
  X('Klicke alle Figuren an, die auf der Diagonale zwischen dem Läufer b5 und dem schwarzen König e8 stehen.','e4 e5 Nf3 Nc6 Bb5 d6',g=>['c6'],'Nur der Springer c6. Die Felder d7 und e8 dahinter: d7 ist leer, auf e8 steht der König. Der Springer steht also zwischen Läufer und König.',['Fahre die Diagonale b5, c6, d7, e8 mit dem Finger ab.','Der Bauer d7 ist schon nach d6 gezogen.']),
  P('Markiere alle Felder, auf die der Turm e1 ziehen kann.','4k3/8/4n3/8/8/8/8/4R1K1','e2 bis e6 und auf der 1. Reihe a1 bis f1. Auf e6 schlägt er den Springer, dahinter kommt er nicht weiter.',['Der Turm zieht gerade.','Auf e6 darf er schlagen.'],{legal:'e1'},{leer:true}),
  P('Klicke alle schwarzen Figuren an, die angegriffen und nicht gedeckt sind.','r3k2r/ppp2ppp/2n5/1B1q4/8/2N5/PPP2PPP/R2QK2R','Die Dame d5. Der Springer c3 greift sie an, und keine schwarze Figur deckt sie.',['Was greift der Springer c3 an?','Wer deckt die Dame?'],{haengt:'b'}),
  P('Weiß setzt in einem Zug matt. Klicke das Feld an, auf das der Turm zieht.','6k1/5ppp/8/8/8/8/5PPP/4R1K1','e8. Der Turm gibt Schach über die 8. Reihe, die eigenen Bauern sperren den König ein.',['Die eigenen Bauern sperren den König ein.','Der Turm muss auf die 8. Reihe.'],{matt:true},{leer:true}),
  P('Die Dame d1 greift auf der d-Linie an. Klicke alle schwarzen Figuren an, die sie angreift.'.replace('Klicke alle schwarzen Figuren an, die sie angreift.','Markiere alle Felder, auf die die Dame ziehen kann.'),'3k4/8/3n4/8/8/8/8/3QK3','Die d-Linie bis zum Springer d6 (d2 bis d6), die 1. Reihe nach links (a1 bis c1) und die Diagonalen c2 bis a4 und e2 bis h5.',['Gerade nach oben bis zur ersten Figur.','Seitlich und schräg ist auch erlaubt.'],{legal:'d1'},{leer:true})],
 E:[P('Der Springer c6 steht zwischen Läufer b5 und König e8. Schwarz ist am Zug. Markiere alle Felder, auf die der Springer ziehen darf.'+KEINS,'e4 e5 Nf3 Nc6 Bb5 d6 d4','Keins. Zieht der Springer weg, steht der König e8 im Schach durch den Läufer b5. Der Springer ist an den König gefesselt.',['Was passiert mit dem König, wenn der Springer wegzieht?','Ein König darf nie im Schach stehen.'],{legal:'c6'},{leer:true}),
  X('Der Läufer g5 fesselt eine schwarze Figur an die Dame d8. Klicke sie an.','d4 d5 c4 e6 Nc3 Nf6 Bg5 c6 e3',g=>pins(g,'b','q').gefesselt,'Der Springer f6. Zieht er weg, schlägt der Läufer g5 die Dame d8. Er ist an die Dame gefesselt.',['Fahre die Diagonale von g5 nach d8 ab.','Welche Figur steht dazwischen?']),
  X('Klicke die gefesselte schwarze Figur an.','4k3/8/4b3/8/8/8/8/4R1K1',g=>pins(g,'b').gefesselt,'Der Läufer e6. Zieht er weg, steht der König e8 im Schach durch den Turm e1. Ein Läufer kann auf der e-Linie nicht bleiben.',['Welche Linie greift der Turm e1 an?','Was steht zwischen Turm und König?']),
  P('Ein gefesselter Turm darf auf seiner Linie bleiben. Schwarz ist am Zug. Markiere alle Felder, auf die der Turm e5 ziehen darf.','4k3/8/8/4r3/8/8/8/4R1K1 b - - 0 1','e6, e7, e4, e3, e2 und e1. Der Turm darf auf der e-Linie bleiben und den Fesselnden auf e1 sogar schlagen. Nur seitlich darf er nicht.',['Darf der Turm die e-Linie verlassen?','Er darf sogar den Fesselnden schlagen.'],{legal:'e5'},{leer:true}),
  X('Fesselung herstellen: Klicke alle Felder an, auf die der Läufer ziehen kann, um den Springer d7 an den König zu fesseln.','4k3/3n4/8/8/8/8/8/4KB2',g=>fesselZuege(g),'b5. Von dort steht der Läufer auf der Diagonale b5, c6, d7, e8. Der Springer d7 ist dann an den König gefesselt.',['Welche Diagonale führt über d7 zum König?','Der Läufer muss auf diese Diagonale.'],{leer:true}),
  X('Der Springer f6 ist an den König gefesselt. Klicke den weißen Bauern an, der ihn mit einem Zug angreifen kann.','7k/8/5n2/8/4P3/6P1/1B6/6K1',g=>bauernAngriff(g,'f6'),'Der Bauer e4. Nach e5 greift er den gefesselten Springer an, und der Springer kann nicht weglaufen.',['Ein Bauer greift schräg nach vorn an.','Welcher Bauer kommt mit einem Schritt neben den Springer?'])],
 A:[X('Diesmal ist eine weiße Figur gefesselt. Klicke sie an.','d4 Nf6 c4 e6 Nc3 Bb4',g=>pins(g,'w').gefesselt,'Der Springer c3. Zieht er weg, steht der weiße König e1 im Schach durch den Läufer b4.',['Welche Diagonale führt vom Läufer b4 zum weißen König?','Was steht dazwischen?']),
  P('Schwarz ist am Zug. Der Läufer c6 ist gefesselt. Markiere alle Felder, auf die er ziehen darf.','4k3/8/2b5/8/B7/8/8/4K3 b - - 0 1','d7, b5 und a4. Der Läufer darf auf der Diagonale a4 bis e8 bleiben und den Fesselnden auf a4 schlagen.',['Darf der Läufer die Diagonale a4 bis e8 verlassen?','Er darf auch den Fesselnden schlagen.'],{legal:'c6'},{leer:true}),
  X('Klicke alle Felder an, auf die der Turm ziehen kann, um eine schwarze Figur an den König zu fesseln.','6k1/8/6b1/8/8/8/R7/7K',g=>fesselZuege(g),'g2. Der Turm steht dann auf der g-Linie, der Läufer g6 ist an den König g8 gefesselt.',['Auf welcher Linie stehen Läufer und König?','Der Turm muss auf diese Linie.'],{leer:true}),
  X('Klicke die schwarze Figur an, die an die Dame gefesselt ist.','r1b1kb1r/ppppqppp/2n5/8/2B1n3/5N2/PPPP1PPP/RNBQR1K1',g=>pins(g,'b','q').gefesselt,'Der Springer e4. Zieht er weg, schlägt der Turm e1 die Dame e7.',['Welche weiße Figur greift auf der e-Linie an?','Was steht vor der schwarzen Dame?']),
  X('Echte Partie: Schwarz hat Td5 gespielt. Weiß fesselt den Turm an den König. Klicke das Feld an, auf das der Läufer zieht.','6k1/2p5/3p4/3r3p/6bP/3B4/PPK1p3/4R3 w - - 6 53',g=>fesselZuege(g,'b'),'c4. Der Läufer steht auf der Diagonale c4, d5, e6, f7, g8. Der Turm d5 ist an den König gefesselt, Weiß gewinnt ihn im nächsten Zug. So ging die Partie weiter: Kg7 Lxd5.',['Auf welcher Diagonale stehen Turm d5 und König g8?','Der Läufer d3 muss auf diese Diagonale.'],{leer:true,quelle:LI('0BJad')}),
  X('Der Läufer d7 ist gefesselt. Klicke den weißen Bauern an, der ihn mit einem Zug angreifen kann.','4k3/3b4/8/1B2P3/8/8/8/4K3',g=>bauernAngriff(g,'d7'),'Der Bauer e5. Nach e6 greift er den gefesselten Läufer an, und der Läufer kann nicht weglaufen.',['Ein Bauer greift schräg nach vorn an.','Welcher Bauer kommt neben den Läufer?'])],
 S:[P('Fesselung an die Dame: Der Springer f6 darf trotzdem ziehen. Schwarz ist am Zug. Markiere alle Felder, auf die er ziehen darf.','d4 d5 c4 e6 Nc3 Nf6 Bg5','d7, e4, g4, h5 und zurück auf g8. Der Springer darf ziehen, weil hinter ihm die Dame steht und nicht der König. Danach schlägt der Läufer g5 aber die Dame.',['Steht hinter dem Springer der König oder die Dame?','An die Dame gefesselt heißt: Ziehen ist erlaubt, kostet aber die Dame.'],{legal:'f6'},{leer:true}),
  X('Klicke alle gefesselten schwarzen Figuren an.'+KEINE,'4k3/4n3/8/8/4P3/8/8/4RK2',g=>pins(g,'b').gefesselt,'Keine. Der Bauer e4 steht zwischen Turm und Springer. Ohne freie Linie gibt es keine Fesselung.',['Steht zwischen Turm und Springer etwas?','Ohne freie Linie keine Fesselung.']),
  P('Der Bauer d7 ist gefesselt. Schwarz ist am Zug. Markiere alle Felder, auf die er ziehen darf.'+KEINS,'4k3/3p4/2B5/8/8/8/8/4K3 b - - 0 1','c6. Der Bauer darf nur den Fesselnden schlagen, weil er dabei auf der Diagonale bleibt. d6 und d5 sind verboten.',['Darf der Bauer die Diagonale c6 bis e8 verlassen?','Ein Bauer schlägt schräg.'],{legal:'d7'},{leer:true}),
  X('Wer fesselt? Klicke die weiße Figur an, die eine schwarze Figur an den König fesselt.','4k3/8/4n3/8/8/2Q5/8/4R1K1',g=>pins(g,'b').fessler,'Der Turm e1. Er fesselt den Springer e6 an den König. Die Dame c3 steht auf keiner Linie zum König.',['Welche Figur ist gefesselt?','Wer steht auf derselben Linie dahinter?']),
  X('Der fesselnde Läufer b5 kann selbst angegriffen werden. Schwarz ist am Zug. Klicke alle schwarzen Figuren an, die ihn schlagen dürfen.','e4 d6 d4 a6 Nf3 Nc6 Bb5',g=>schlaeger(g,'b5'),'Der Bauer a6. Er greift den Läufer b5 an. Der gefesselte Springer c6 darf nicht schlagen, und er erreicht b5 auch gar nicht.',['Wer greift b5 an?','Darf der gefesselte Springer schlagen?']),
  X('Echte Partie: Die schwarze Dame steht auf h5 vor ihrem König h8. Weiß fesselt sie. Klicke das Feld an, auf das der Turm zieht.','5nrk/p5r1/2R1p3/3pP2q/Q5P1/5P2/2R5/6K1 w - - 0 42',g=>fesselZuege(g,'r'),'h2. Der Turm steht dann auf der h-Linie, die Dame h5 ist an den König h8 gefesselt. So ging die Partie weiter: Dxh2+ Kxh2, Weiß gewinnt die Dame für einen Turm.',['Auf welcher Linie stehen Dame und König?','Welcher Turm erreicht diese Linie?'],{leer:true,quelle:LI('08F97')})],
 L:[X('Klicke die gefesselte schwarze Figur an.','3k4/8/3r4/8/8/8/8/3Q2K1',g=>pins(g,'b').gefesselt,'Der Turm d6. Zieht er von der d-Linie weg, steht der König d8 im Schach durch die Dame d1.',['Welche Linie greift die Dame an?','Was steht zwischen Dame und König?']),
  P('Schwarz ist am Zug. Markiere alle Felder, auf die der Springer d7 ziehen darf.'+KEINS,'4k3/3n4/8/1B6/8/8/8/4K3 b - - 0 1','Keins. Der Springer steht zwischen Läufer b5 und König e8. Er kann nie auf der Diagonale bleiben, also darf er gar nicht ziehen.',['Steht der Springer zwischen Läufer und König?','Ein gefesselter Springer kann nie auf der Linie bleiben.'],{legal:'d7'},{leer:true}),
  X('Klicke alle Felder an, auf die der Läufer ziehen kann, um eine schwarze Figur an den König zu fesseln.','6k1/5r2/8/8/8/8/8/5B1K',g=>fesselZuege(g),'c4. Der Läufer steht auf der Diagonale c4, d5, e6, f7, g8. Der Turm f7 ist an den König gefesselt.',['Auf welcher Diagonale stehen Turm und König?','Der Läufer muss auf diese Diagonale.'],{leer:true}),
  X('Klicke die schwarze Figur an, die an die Dame gefesselt ist.','3qk3/8/3n4/8/8/8/8/3RK3',g=>pins(g,'b','q').gefesselt,'Der Springer d6. Zieht er weg, schlägt der Turm d1 die Dame d8.',['Welche Linie greift der Turm d1 an?','Was steht vor der Dame?']),
  X('Der Springer c6 ist gefesselt. Klicke den weißen Bauern an, der ihn mit einem Zug angreifen kann.','4k3/8/2n5/1B6/3P4/8/8/4K3',g=>bauernAngriff(g,'c6'),'Der Bauer d4. Nach d5 greift er den gefesselten Springer an.',['Ein Bauer greift schräg nach vorn an.','Welcher Bauer kommt neben den Springer?']),
  X('Wer fesselt? Klicke die weiße Figur an, die eine schwarze Figur an den König fesselt.','6k1/5p2/8/8/8/1Q6/1B6/6K1',g=>pins(g,'b').fessler,'Die Dame b3. Sie fesselt den Bauern f7 an den König g8. Der Läufer b2 fesselt nichts.',['Welche Figur steht vor dem König?','Wer steht auf derselben Linie dahinter?'])]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 22 geschrieben');
