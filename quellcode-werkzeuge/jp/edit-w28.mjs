// Woche 28 „Matt mit zwei Türmen“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w27.mjs, dann diese Datei.
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
URLS.diplomOnline=URLS.diplomOnline||'https://ludgerus-schachdiplom.netlify.app/';
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
// Gabel: Zug, nach dem die gezogene Figur mindestens zwei lohnende Ziele angreift (König, wertvollere oder ungedeckte Figur) und selbst sicher steht
function ziele(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return sqOf(g,x=>x.color===opp).filter(t=>g.attackers(t,p.color).includes(sq))}
function lohnend(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return ziele(g,sq).filter(t=>{const z=g.get(t);return z.type==='k'||VAL[z.type]>VAL[p.type]||!g.attackers(t,opp).length})}
function gabelZuege(g,typen='pnbrqk'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' '));const l=lohnend(h,m.to);const feinde=g.attackers(m.to,opp),freunde=h.attackers(m.to,c).filter(x=>x!==m.to);
  const sicher=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));if(l.length>=2&&sicher)out.add(m.to);g.undo()}return [...out]}
// Spieß: Langschrittler greift eine wertvolle Figur an, dahinter steht auf derselben Linie eine weitere gegnerische Figur, die nach dem Ausweichen fällt
const RICHT={r:[[1,0],[-1,0],[0,1],[0,-1]],b:[[1,1],[1,-1],[-1,1],[-1,-1]]};RICHT.q=[...RICHT.r,...RICHT.b];
const F2=s=>[s.charCodeAt(0)-97,+s[1]-1],SQ=(x,y)=>String.fromCharCode(97+x)+(y+1);
function linie(g,von,typ){const out=[];for(const [dx,dy] of RICHT[typ]){let [x,y]=F2(von);const hit=[];while(true){x+=dx;y+=dy;if(x<0||y<0||x>7||y>7)break;const p=g.get(SQ(x,y));if(p){hit.push(SQ(x,y));if(hit.length===2)break}}if(hit.length===2)out.push(hit)}return out}
function spiess(g,sq){const p=g.get(sq),opp=p.color==='w'?'b':'w';return linie(g,sq,p.type).filter(([a,b])=>{const X=g.get(a),Y=g.get(b);if(X.color!==opp||Y.color!==opp)return false;if(!(X.type==='k'||VAL[X.type]>VAL[Y.type]))return false;if(X.type!=='k'&&g.attackers(sq,opp).includes(a)&&VAL[X.type]<=VAL[p.type])return false;const def=g.attackers(b,opp).filter(q=>q!==a);return !def.length||VAL[Y.type]>VAL[p.type]})}
function spiessZuege(g,typen='brq'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);const feinde=g.attackers(m.to,opp),freunde=g.attackers(m.to,c).filter(x=>x!==m.to);const sicher=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));if(sicher&&spiess(g,m.to).length)out.add(m.to);g.undo()}return [...out]}
const hinten=(g,sq)=>spiess(g,sq).map(([a,b])=>b);
// Abzug: Eine Figur zieht weg und öffnet einer eigenen Langschrittlerin die Linie
const ksq=(g,c)=>sqOf(g,x=>x.type==='k'&&x.color===c)[0];
function abzug(g,von,modus='schach'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>!von||m.from===von)){g.move(m);const chk=g.inCheck()?g.attackers(ksq(g,opp),c):[];const disc=chk.some(s=>s!==m.to),dbl=chk.length>=2;
  let ok=false;if(modus==='schach')ok=disc;else if(modus==='doppel')ok=dbl;else if(modus==='gewinn'&&disc&&!g.moves({verbose:true}).some(x=>x.to===m.to)){const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' '));ok=sqOf(h,x=>x.color===opp&&x.type!=='k').some(t=>h.attackers(t,c).includes(m.to)&&(VAL[h.get(t).type]>VAL[m.piece]||!h.attackers(t,opp).length))}
  if(ok)out.add(m.to);g.undo()}return [...out]}
const zwischen=(g,a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b),dx=Math.sign(x2-x1),dy=Math.sign(y2-y1),out=[];let x=x1+dx,y=y1+dy;while(x!==x2||y!==y2){if(g.get(SQ(x,y)))out.push(SQ(x,y));x+=dx;y+=dy}return out};
const LZ=(frage,fen,zug,antwort,hilfe,id)=>T(frage,fen.split(' ')[0],[zug.slice(2,4)],antwort,hilfe,{...(fen.split(' ')[1]==='b'?{zug:'b'}:{}),leer:true,quelle:LI(id)});
URLS.lichessPractice='https://lichess.org/practice';
// Treppenmatt: Turmzüge mit Schach, nach denen der König nur in Richtung Rand ausweichen kann (axis 'r' Reihe, 'f' Linie)
const lage=(s,axis)=>axis==='r'?+s[1]:s.charCodeAt(0)-96;
function treppe(g,axis='r',dir=1){const opp=g.turn()==='w'?'b':'w',k0=ksq(g,opp),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>m.piece==='r')){g.move(m);if(g.inCheck()&&!g.isCheckmate()){const rep=g.moves({verbose:true});if(rep.every(x=>x.piece==='k'&&(lage(x.to,axis)-lage(k0,axis))*dir>0))out.add(m.to)}g.undo()}return [...out]}
// Angegriffener Turm flieht auf derselben Reihe, sicher und mindestens abstand Linien vom gegnerischen König entfernt
function weg(g,von,abstand=3){const opp=g.turn()==='w'?'b':'w',k=ksq(g,opp),out=[];
 for(const m of g.moves({verbose:true}).filter(m=>m.from===von&&m.to[1]===von[1])){g.move(m);const sicher=!g.attackers(m.to,opp).length;g.undo();if(sicher&&Math.abs(m.to.charCodeAt(0)-k.charCodeAt(0))>=abstand)out.push(m.to)}return out}
F[28]={thema:'Matt mit zwei Türmen',
 lernziel:'Ich kann mit zwei Türmen nach dem Treppenprinzip mattsetzen.',
 leitfrage:'Wie treiben zwei Türme den König Reihe für Reihe an den Rand, ohne dass der eigene König hilft?',
 vorwissen:'Matt mit Dame und König (Woche 17), Patt (Woche 16).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Treppenmatt (Wächter und Jäger) nach dem Ludgerus-Schachdiplom Gold 1, Lichess-Puzzles YOCba, HJ8H0, Lq8xP und Bsz5p (CC0, Thema „rookEndgame“, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Matt, Patt, Fluchtfelder und Treppenschritte mit chess.js berechnet, die Lichess-Lösungen mit Stockfish bestätigt',
 phasen:[
 {name:'Einstieg',titel:'Wohin darf der König?',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Damenmatt wiederholen, gesperrte Reihen erkennen, Fluchtfelder des Königs zählen, ein erstes Turmmatt am Rand.',
   'Bei W4 fragen: „Ein Turm sperrt eine ganze Reihe. Was kann dann der zweite Turm tun?“ Ziel nennen: „Heute setzt ihr mit zwei Türmen matt, ganz ohne den eigenen König.“'],
  kinder:'Ich erkenne, welche Reihe ein Turm für den König sperrt.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Wächter und Jäger: die Treppe',
  ablauf:['Plakat „Matt mit zwei Türmen“ aufhängen. Am Lehrbrett E1: das Mattbild. Ein Turm sperrt die vorletzte Reihe (Wächter), der andere gibt auf der Randreihe Schach (Jäger).',
   'E2 und E3: die Treppe. Der Jäger gibt Schach, der König muss eine Reihe zurück. Dann wird der andere Turm zum Jäger. Frage: „Warum darf der Wächter nicht gleichzeitig Schach geben?“',
   'E4: Der König greift einen Turm an. Der Turm flieht weit weg auf derselben Reihe, damit die Sperre bleibt. E5 Matt in der Ecke, E6 eine echte Partie. Merksatz: „Einer sperrt, einer jagt. Kommt der König zu nah, geht der Turm weit weg.“'],
  kinder:'Ich erkläre Wächter, Jäger und die Treppe.',
  links:[{art:'druck',label:'Plakat: Matt mit zwei Türmen',was:'zweitürme'},{art:'feld',label:'Lehrbrett: Treppenmatt E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Treppe zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A hat König und zwei Türme, Kind B nur den König in der Brettmitte. Kind A setzt mit der Treppe matt, der eigene König bleibt stehen. Kind B zählt die Züge. Danach wechseln die Rollen. Wer schafft es in weniger Zügen?',
   'Allein: Arbeitsblatt A1 bis A6, darunter eine echte Aufgabe aus einer Lichess-Partie. Vergleich am Lehrbrett.'],
  kinder:'Ich setze mit zwei Türmen matt, ohne den König zu brauchen.',
  links:[{art:'druck',label:'Arbeitsblatt: Matt mit zwei Türmen',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Turm zu nah am König, Schach ohne Sperre, Patt in der Ecke, der falsche Turm gibt Schach, der Turm verlässt beim Fliehen seine Reihe.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, dass der König jetzt wieder entkommen kann?“'],
  kinder:'Ich vermeide die typischen Fehler beim Treppenmatt.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Welcher Turm ist gerade Wächter, welcher Jäger?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich finde Treppenschritt und Matt ohne Hilfe.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Treppen-Rennen“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Beide bauen dieselbe Stellung auf, schwarzer König in der Mitte, zwei weiße Türme in den Ecken. Wer setzt mit weniger Zügen matt? Der Partner spielt den schwarzen König und zählt. Danach wechseln die Rollen.',
   'Rückblick: „Was ist leichter: Damenmatt oder Matt mit zwei Türmen? Warum?“ Aufräum-Ritual. Ausblick: Nächstes Mal lernt ihr, wie man ein Matt abwehrt.'],
  kinder:'Ich setze im Minispiel mit der Treppe matt.',
  links:[{art:'druck',label:'Plakat: Matt mit zwei Türmen',was:'zweitürme'},{art:'blatt',label:'Mattübungen auf Lichess (online, „Piece Checkmates“)',url:URLS.lichessPractice},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 1)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Die gesperrte Reihe mit einem Lineal oder einem Stift auf dem Brett markieren. Vor jedem Zug laut sagen: „Wächter bleibt, Jäger gibt Schach.“',
  zusatz:'Das Treppenmatt in der anderen Richtung üben, also zum linken oder rechten Rand. Oder mit Dame und Turm statt zwei Türmen mattsetzen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer lässt einen Turm noch zu nah am König stehen? Wer gibt Schach, ohne dass eine Reihe gesperrt ist? Das Treppenprinzip hilft in Woche 33 beim Matt mit einem Turm.',
 feld:{
 W:[P('Wiederholung Damenmatt: Klicke alle Felder an, auf denen die Dame mattsetzt.','4k3/8/4K3/8/8/8/8/Q7','a8 und h8. Die Dame gibt Schach über die 8. Reihe, der König e6 deckt d7, e7 und f7.',['Der König e6 deckt die 7. Reihe vor dem schwarzen König.','Die Dame braucht die 8. Reihe.'],{matt:true},{leer:true}),
  P('Markiere alle Felder, auf die der schwarze König ziehen darf.','8/4k3/R7/8/8/8/8/K7 b - - 0 1','d7, d8, e8, f7 und f8. Die 6. Reihe sperrt der Turm a6.',['Welche Reihe sperrt der Turm?','Zeige alle Nachbarfelder von e7.'],{legal:'e7'},{leer:true}),
  P('Jetzt sperren zwei Türme. Markiere alle Felder, auf die der schwarze König ziehen darf.','7R/4k3/R7/8/8/8/8/K7 b - - 0 1','d7 und f7. Die 8. Reihe sperrt der Turm h8, die 6. Reihe der Turm a6.',['Welche Reihen sind gesperrt?','Nur die 7. Reihe bleibt frei.'],{legal:'e7'},{leer:true}),
  P('Der Turm a7 sperrt die 7. Reihe. Klicke alle Felder an, auf denen der zweite Turm mattsetzt.','3k4/R7/8/8/8/8/8/1R4K1','b8. Der Turm gibt Schach über die 8. Reihe, die 7. Reihe ist gesperrt.',['Der König steht am Rand.','Welcher Turm kann auf die 8. Reihe?'],{matt:true},{leer:true}),
  P('Ein Turm allein mit König: Klicke alle Felder an, auf denen der Turm mattsetzt.','6k1/8/6K1/8/8/8/8/R7','a8. Der Turm gibt Schach über die 8. Reihe, der König g6 deckt f7, g7 und h7.',['Wer deckt die 7. Reihe?','Der Turm braucht die 8. Reihe.'],{matt:true},{leer:true}),
  X('Der Turm a4 sperrt die 4. Reihe. Klicke das Feld an, auf das der Turm h1 zieht, damit der König nach oben muss.','8/8/8/4k3/R7/8/8/6KR',g=>treppe(g),'h5. Th5+ gibt Schach auf der 5. Reihe, nach unten sperrt der Turm a4. Der König muss auf die 6. Reihe.',['Auf welcher Reihe steht der König?','Der zweite Turm gibt dort Schach.'],{leer:true})],
 E:[P('Das Mattbild: Klicke alle Felder an, auf denen ein Turm mattsetzt.','1k6/6R1/8/8/8/8/8/K6R','h8. Der Turm h1 gibt Schach über die 8. Reihe, der Turm g7 sperrt die 7. Reihe.',['Welcher Turm sperrt, welcher gibt Schach?','Der König steht auf der 8. Reihe.'],{matt:true},{leer:true}),
  X('Treppe, Schritt 1: Der Turm a4 ist Wächter. Klicke das Feld an, auf das der Jäger zieht.','8/8/8/3k4/R7/8/8/6RK',g=>treppe(g),'g5. Tg5+ gibt Schach auf der 5. Reihe. Der König muss auf die 6. Reihe.',['Der Jäger gibt Schach auf der Reihe des Königs.','Der Wächter bleibt stehen.'],{leer:true}),
  X('Treppe, Schritt 2: Jetzt ist der Turm h5 Wächter. Klicke das Feld an, auf das der Jäger zieht.','8/8/4k3/7R/R7/8/8/6K1',g=>treppe(g),'a6. Ta6+ gibt Schach auf der 6. Reihe, der Turm h5 sperrt nach unten. Der König muss auf die 7. Reihe.',['Welcher Turm sperrt jetzt?','Der andere wird Jäger.'],{leer:true}),
  X('Der König greift den Turm g6 an. Markiere alle Felder, auf die der Turm weit weg ziehen kann und dabei die 6. Reihe weiter sperrt.','8/5k2/6R1/8/8/8/8/6KR',g=>weg(g,'g6'),'a6, b6 und c6. Dort ist der Turm mindestens drei Linien vom König entfernt. Auf d6 oder h6 greift ihn der König sofort wieder an.',['Der Turm bleibt auf der 6. Reihe.','So weit weg, dass der König ihn nicht gleich wieder erreicht.'],{leer:true}),
  P('Matt in der Ecke: Klicke alle Felder an, auf denen ein Turm mattsetzt.','7k/1R6/8/8/8/8/8/R5K1','a8. Der Turm a1 gibt Schach über die 8. Reihe, der Turm b7 sperrt g7 und h7.',['Welche Felder sperrt der Turm b7?','Der andere Turm braucht die 8. Reihe.'],{matt:true},{leer:true}),
  LZ('Echte Partie: Weiß setzt mit den Türmen in zwei Zügen matt. Klicke das Feld an, auf das der erste Turm zieht.','6k1/pp3p2/2rp1rpR/4p3/P1PpP3/1P1P2P1/2K5/7R w - - 0 35','h6h8','h8. Th8+ Kg7, dann T1h7#. Die Türme stehen hintereinander auf der h-Linie und decken sich gegenseitig.',['Der erste Zug gibt Schach.','Der zweite Turm deckt den ersten von hinten.'],'YOCba')],
 A:[X('Treppe nach unten: Der Turm h5 sperrt die 5. Reihe. Klicke das Feld an, auf das der Jäger zieht.','7K/8/8/7R/4k3/8/8/R7',g=>treppe(g,'r',-1),'a4. Ta4+ gibt Schach auf der 4. Reihe, nach oben sperrt der Turm h5. Der König muss auf die 3. Reihe.',['Auf welcher Reihe steht der König?','Der Wächter bleibt stehen.'],{leer:true}),
  P('Klicke alle Felder an, auf denen ein Turm mattsetzt.','6R1/8/8/4K3/8/8/7R/1k6','g1. Der Turm g8 gibt Schach über die 1. Reihe, der Turm h2 sperrt die 2. Reihe.',['Welche Reihe sperrt der Turm h2?','Der andere Turm braucht die 1. Reihe.'],{matt:true},{leer:true}),
  X('Der König greift den Turm b4 an. Markiere alle Felder, auf die der Turm weit weg ziehen kann und dabei die 4. Reihe weiter sperrt.','7R/8/8/8/1R6/2k5/8/7K',g=>weg(g,'b4'),'f4, g4 und h4. Dort ist der Turm mindestens drei Linien vom König entfernt.',['Der Turm bleibt auf der 4. Reihe.','Zähle die Linien bis zum König.'],{leer:true}),
  P('Markiere alle Felder, auf die der schwarze König ziehen darf.','8/2k5/R7/8/8/8/8/1R5K b - - 0 1','c8, d7 und d8. Der Turm a6 sperrt die 6. Reihe, der Turm b1 die b-Linie.',['Welche Reihe sperrt der Turm a6?','Welche Linie sperrt der Turm b1?'],{legal:'c7'},{leer:true}),
  LZ('Echte Partie: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das der erste Turm zieht.','5k2/3r1p1p/2RP4/6R1/r1p5/7P/6P1/7K w - - 3 33','c6c8','c8. Tc8+ Td8, dann Txd8#. Der Turm g5 sperrt die g-Linie, der Bauer d6 deckt den Turm.',['Der erste Zug gibt Schach auf der 8. Reihe.','Was kann Schwarz dazwischenstellen?'],'HJ8H0'),
  X('Treppe zur Seite: Der Turm d1 sperrt die d-Linie. Klicke das Feld an, auf das der Jäger zieht, damit der König nach rechts muss.','R7/8/8/8/4k3/8/8/3R3K',g=>treppe(g,'f',1),'e8. Te8+ gibt Schach auf der e-Linie, die d-Linie sperrt der Turm d1. Der König muss auf die f-Linie.',['Die Treppe geht hier über Linien statt Reihen.','Der Jäger gibt Schach auf der Linie des Königs.'],{leer:true})],
 S:[T('Fehler 1: Der Turm steht zu nah. Weiß hat Th7+ gespielt. Klicke die weiße Figur an, die der schwarze König jetzt schlagen kann.','6k1/7R/R7/8/8/8/8/K7',['h7'],'Den Turm h7. Er steht direkt neben dem König und ist ungedeckt. Richtig war Ta8+ mit dem anderen Turm.',['Welche Felder berührt der König g8?','Ist der Turm gedeckt?'],{zug:'b',schach:true}),
  P('Fehler 2: Schach ohne Sperre. Markiere alle Felder, auf die der schwarze König fliehen kann.','8/8/8/4k2R/8/8/8/1R4K1 b - - 0 1','d4, e4, f4, d6, e6 und f6. Der Turm b1 sperrt keine Reihe, deshalb kann der König auch nach unten. Erst eine Reihe sperren, dann Schach geben.',['Welche Reihe sperrt der Turm b1?','Der König darf nur nicht auf der 5. Reihe bleiben.'],{flucht:true},{schach:true,leer:true}),
  T('Fehler 3: Patt in der Ecke. Klicke alle Felder an, auf die der Turm a1 nicht ziehen darf, weil Schwarz sonst patt wäre.','7k/1R6/8/8/8/8/2K5/R7',null,'g1. Von dort deckt der Turm g8 ohne Schach, g7 und h7 deckt der Turm b7: Patt. Richtig ist Ta8, das ist Matt.',['Welches Feld bleibt dem König h8 noch?','Nimmt der Turm dieses Feld ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'a1'}}),
  T('Fehler 4: Der Wächter muss stehen bleiben. Welcher Turm gibt jetzt Schach? Klicke ihn an.','8/4k3/7R/R7/8/8/8/K7',['a5'],'Der Turm a5. Er gibt mit Ta7+ Schach. Der Turm h6 sperrt die 6. Reihe und bleibt stehen.',['Welcher Turm sperrt die Reihe unter dem König?','Der andere wird Jäger.']),
  P('Fehler 5: Der angegriffene Turm hat seine Reihe verlassen und steht jetzt auf d1. Markiere alle Felder, auf die der schwarze König ziehen darf.','8/8/4k3/8/8/8/8/1R1R3K b - - 0 1','e5, e7, f5, f6 und f7. Die 5. Reihe ist nicht mehr gesperrt, der König läuft nach unten. Der Turm hätte auf der 5. Reihe bleiben müssen.',['Welche Felder greift der Turm d1 an?','Ist die 5. Reihe noch gesperrt?'],{legal:'e6'},{leer:true}),
  P('Echte Partie: Schwarz setzt in einem Zug matt. Klicke alle Felder an, auf denen ein schwarzer Turm mattsetzt.','8/3k2pr/8/P5r1/8/2R2p2/1P3R2/5K2 b - - 3 47','h1. Th1+ gibt Schach über die 1. Reihe. Der Bauer f3 deckt e2 und g2, der Turm g5 die g-Linie, auf f2 steht ein weißer Turm.',['Welche Felder um den König f1 sind gesperrt?','Ein Turm braucht die 1. Reihe.'],{matt:true},{leer:true,quelle:LI('Bsz5p')})],
 L:[X('Der Turm a4 sperrt die 4. Reihe. Klicke das Feld an, auf das der Jäger zieht.','8/8/8/2k5/R7/8/8/6RK',g=>treppe(g),'g5. Tg5+ gibt Schach auf der 5. Reihe. Der König muss auf die 6. Reihe.',['Auf welcher Reihe steht der König?','Der Wächter a4 bleibt stehen.'],{leer:true}),
  P('Klicke alle Felder an, auf denen ein Turm mattsetzt.','k7/2R5/8/8/8/8/8/6KR','h8. Der Turm h1 gibt Schach über die 8. Reihe, der Turm c7 sperrt a7 und b7.',['Welche Reihe sperrt der Turm c7?','Der andere Turm braucht die 8. Reihe.'],{matt:true},{leer:true}),
  X('Der König greift den Turm g5 an. Markiere alle Felder, auf die der Turm weit weg ziehen kann und dabei die 5. Reihe weiter sperrt.','8/8/5k2/6R1/8/8/8/K6R',g=>weg(g,'g5'),'a5, b5 und c5. Dort ist der Turm mindestens drei Linien vom König entfernt. Auf h5 greift ihn der König sofort wieder an.',['Der Turm bleibt auf der 5. Reihe.','Zähle die Linien bis zum König.'],{leer:true}),
  P('Schach! Markiere alle Felder, auf die der schwarze König fliehen kann.','8/8/2k5/R7/8/8/8/2R4K b - - 0 1','b6, b7, d6 und d7. Die c-Linie greift der Turm c1 an, die 5. Reihe sperrt der Turm a5.',['Welche Linie greift der Turm c1 an?','Welche Reihe sperrt der Turm a5?'],{flucht:true},{schach:true,leer:true}),
  P('Echte Partie: Schwarz setzt in einem Zug matt. Klicke alle Felder an, auf denen ein schwarzer Turm mattsetzt.','8/3k4/7R/2R5/2P5/6P1/4rr1P/2K5 b - - 0 43','e1 und f1. Ein Turm sperrt die 2. Reihe, der andere gibt Schach über die 1. Reihe. In der Partie geschah Te1#.',['Ein Turm sperrt die 2. Reihe.','Der andere gibt Schach auf der 1. Reihe.'],{matt:true},{leer:true,quelle:LI('Lq8xP')}),
  X('Treppe zur Seite: Der Turm f1 sperrt die f-Linie. Klicke das Feld an, auf das der Jäger zieht, damit der König nach links muss.','7R/8/8/4k3/8/8/8/K4R2',g=>treppe(g,'f',-1),'e8. Te8+ gibt Schach auf der e-Linie, die f-Linie sperrt der Turm f1. Der König muss auf die d-Linie.',['Auf welcher Linie steht der König?','Der Jäger gibt Schach auf dieser Linie.'],{leer:true})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 28 geschrieben');
