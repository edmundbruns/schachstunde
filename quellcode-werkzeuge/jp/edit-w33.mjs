// Woche 33 „Matt mit einem Turm“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w32.mjs, dann diese Datei.
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
// Matt in n Zügen (kleine Stellungen): Zielfelder der ersten Züge
function mattIn(g,n){if(n===1)return g.moves({verbose:true}).filter(m=>m.san.includes('#'));const out=[];
 for(const m of g.moves({verbose:true})){g.move(m);let ok=false;if(!g.isCheckmate()){const rep=g.moves({verbose:true});ok=rep.length>0&&rep.every(r=>{g.move(r);const mm=mattIn(g,n-1).length>0;g.undo();return mm})}g.undo();if(ok)out.push(m)}return out}
const mattZiele=(g,n)=>[...new Set(mattIn(g,n).map(m=>m.to))];
// Treppenmatt: Turmzüge mit Schach, nach denen der König nur in Richtung Rand ausweichen kann (axis 'r' Reihe, 'f' Linie)
// Angegriffener Turm flieht auf derselben Reihe, sicher und mindestens abstand Linien vom gegnerischen König entfernt
function weg(g,von,abstand=3){const opp=g.turn()==='w'?'b':'w',k=ksq(g,opp),out=[];
 for(const m of g.moves({verbose:true}).filter(m=>m.from===von&&m.to[1]===von[1])){g.move(m);const sicher=!g.attackers(m.to,opp).length;g.undo();if(sicher&&Math.abs(m.to.charCodeAt(0)-k.charCodeAt(0))>=abstand)out.push(m.to)}return out}
// Matt mit König und Turm: Kasten, Kasten verkleinern, König nähern, Zwingzug, Turm decken
const kasten=(g,c)=>{const opp=c==="w"?"b":"w";const r=sqOf(g,x=>x.type==="r"&&x.color===c)[0],k=sqOf(g,x=>x.type==="k"&&x.color===opp)[0];if(!r||!k)return [];const [rx,ry]=F2(r),[kx,ky]=F2(k);if(rx===kx||ry===ky)return [];const xs=kx<rx?[...Array(rx).keys()]:[...Array(7-rx).keys()].map(i=>rx+1+i),ys=ky<ry?[...Array(ry).keys()]:[...Array(7-ry).keys()].map(i=>ry+1+i);return xs.flatMap(x=>ys.map(y=>SQ(x,y)))};
const sicher=(g,sq,c)=>{const opp=c==='w'?'b':'w';const feinde=g.attackers(sq,opp);if(!feinde.length)return true;return g.attackers(sq,c).filter(s=>s!==sq).length>0};
function kleiner(g){const c=g.turn(),n0=kasten(g,c).length,out=new Set();for(const m of g.moves({verbose:true}).filter(m=>m.piece==='r')){g.move(m);const ok=!g.inCheck()&&!g.isStalemate()&&sicher(g,m.to,c);const n=kasten(g,c).length;g.undo();if(ok&&n&&n<n0)out.add(m.to)}return [...out]}
const dist=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);return Math.max(Math.abs(x1-x2),Math.abs(y1-y2))};
function naeher(g){const c=g.turn(),opp=c==='w'?'b':'w',k2=sqOf(g,x=>x.type==='k'&&x.color===opp)[0],k1=sqOf(g,x=>x.type==='k'&&x.color===c)[0],out=[];for(const m of g.moves({verbose:true}).filter(m=>m.piece==='k')){if(dist(m.to,k2)>=dist(k1,k2))continue;g.move(m);const r=sqOf(g,x=>x.type==='r'&&x.color===c)[0];const ok=!g.isStalemate()&&(!r||sicher(g,r,c));g.undo();if(ok)out.push(m.to)}return out}
function wartezug(g){return [...new Set(mattIn(g,2).filter(m=>m.piece==='r'&&!m.san.includes('+')).map(m=>m.to))]}
function deckt(g){const c=g.turn(),out=[];for(const m of g.moves({verbose:true}).filter(m=>m.piece==='k')){g.move(m);const r=sqOf(g,x=>x.type==='r'&&x.color===c)[0];const ok=r&&g.attackers(r,c).includes(m.to);g.undo();if(ok)out.push(m.to)}return out}
F[33]={thema:'Matt mit einem Turm',
 lernziel:'Ich kann mit König und Turm mattsetzen.',
 leitfrage:'Wie arbeiten König und Turm zusammen, damit der gegnerische König am Rand mattgesetzt wird?',
 vorwissen:'Matt mit Dame und König (Woche 17), Matt mit zwei Türmen (Woche 28), Patt (Woche 16).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Kastenmethode für König und Turm in kindgerechter Form, Lichess-Puzzles QKwbJ, UDaGv und QPQiC (CC0, Thema „rookEndgame“, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Kasten, sichere Turmzüge, Annäherung, Zwingzüge, Matt und Patt mit chess.js berechnet',
 phasen:[
 {name:'Einstieg',titel:'Ein Turm sperrt, der König hilft',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6: Treppenmatt mit zwei Türmen wiederholen, Fluchtfelder neben einem Turm, den Kasten zeigen, das Mattbild mit einem Turm, die Opposition und eine Pattfalle.',
   'Bei W1 fragen: „Mit zwei Türmen braucht ihr den König nicht. Was ändert sich, wenn nur ein Turm da ist?“ Ziel nennen: „Heute setzt ihr mit König und Turm matt.“'],
  kinder:'Ich erkenne den Kasten, in dem der Turm den König einsperrt.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Die Kastenmethode in vier Schritten',
  ablauf:['Plakat „Matt mit einem Turm“ aufhängen. Am Lehrbrett E1: das Mattbild. Die Könige stehen sich gegenüber, der Turm gibt am Rand Schach.',
   'E2: Der Turm verkleinert den Kasten, ohne dass der König ihn schlagen kann. E3: Kann der Turm nicht weiter, kommt der eigene König näher. E4: Greift der König den Turm an, flieht er weit weg auf derselben Linie.',
   'E5: Der Zwingzug. Der Turm nimmt dem König seine Felder, dann muss er in die Opposition. E6: eine echte Partie. Frage: „Warum braucht der Turm hier die Hilfe des Königs?“ Merksatz: „Turm sperrt, König kommt, Turm schließt den Kasten.“'],
  kinder:'Ich erkläre die Schritte der Kastenmethode.',
  links:[{art:'druck',label:'Plakat: Matt mit einem Turm',was:'einturm'},{art:'feld',label:'Lehrbrett: Kastenmethode E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Turmmatt zu zweit, dann Arbeitsblatt allein',
  ablauf:['Zu zweit: Kind A hat König und Turm, Kind B nur den König in der Brettmitte. Kind A setzt mit der Kastenmethode matt, Kind B zählt die Züge und achtet auf Patt. Danach wechseln die Rollen. Wer schafft es in weniger als 20 Zügen?',
   'Allein: Arbeitsblatt A1 bis A6, darunter eine echte Aufgabe aus einer Lichess-Partie. Vergleich am Lehrbrett.'],
  kinder:'Ich setze mit König und Turm matt.',
  links:[{art:'druck',label:'Arbeitsblatt: Matt mit einem Turm',was:'feld:A'},{art:'feld',label:'Lehrbrett: Arbeitsblatt A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Typische Fehler klären',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6: Turm zu nah am König, Patt in der Ecke, Schach zur falschen Zeit, den Kasten wieder öffnen, den Turm mit dem König decken.',
   'Bei jeder Aufgabe fragen: „Woran erkennst du, dass der Kasten jetzt größer geworden ist?“'],
  kinder:'Ich vermeide Patt und lasse meinen Turm nicht ungedeckt.',
  links:[{art:'feld',label:'Lehrbrett: Fehler klären S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Sechs Aufgaben allein',
  ablauf:['Jedes Kind löst L1 bis L6 allein.','Während die Kinder arbeiten, fragst du einige am Brett: „Wie groß ist der Kasten, und wie wird er kleiner?“ Danach Lösungen am Lehrbrett.'],
  kinder:'Ich setze mit König und Turm ohne Hilfe matt.',
  links:[{art:'druck',label:'Lerncheck-Zettel',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Minispiel „Kasten-Rennen“, Rückblick, Aufräumen',
  ablauf:['Minispiel zu zweit: Beide bauen dieselbe Stellung auf (weißer König e1, Turm a1, schwarzer König e5). Wer setzt in weniger Zügen matt? Der Partner spielt den schwarzen König und zählt. Danach wechseln die Rollen.',
   'Rückblick: „Was ist schwerer, Damenmatt oder Turmmatt, und warum?“ Aufräum-Ritual. Ausblick: Nächstes Mal geht es um Bauernendspiele und die Opposition.'],
  kinder:'Ich setze im Minispiel mit der Kastenmethode matt.',
  links:[{art:'druck',label:'Plakat: Matt mit einem Turm',was:'einturm'},{art:'blatt',label:'Mattübungen auf Lichess (online, „Piece Checkmates“)',url:URLS.lichessPractice},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 4)',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Den Kasten mit vier Stiften oder Bauernsteinen auf dem Brett markieren. Nach jedem Turmzug zählen die Kinder die Felder im Kasten.',
  zusatz:'Die Mattführung aus einer Ecke heraus und gegen den König in der Brettmitte üben. Oder mit Uhr: In zwei Minuten mattsetzen.',
  kuerzen:'Die Partnerübung auf eine Runde kürzen, das Arbeitsblatt als Hausaufgabe mitgeben. Lerncheck und Aufräumen bleiben, das Minispiel hat nur eine Runde.'},
 nachher:'Wer setzt schon sicher matt? Wer gibt nur Schach, ohne den Kasten zu verkleinern? Diese Kinder üben in Woche 34 vor dem Bauernendspiel das Turmmatt noch einmal am Lehrbrett.',
 feld:{
 W:[P('Wiederholung Woche 28: Klicke alle Felder an, auf denen ein Turm mattsetzt.','6k1/R7/8/8/8/8/8/1R4K1','b8. Der Turm a7 sperrt die 7. Reihe, der Turm b1 setzt auf der 8. Reihe matt.',['Welcher Turm sperrt?','Der andere gibt Schach am Rand.'],{matt:true},{leer:true}),
  P('Markiere alle Felder, auf die der schwarze König ziehen darf.','8/8/8/3k4/8/8/4R3/K7 b - - 0 1','c4, c5, c6, d4 und d6. Die e-Linie greift der Turm an.',['Welche Linie greift der Turm e2 an?','Prüfe alle Nachbarfelder von d5.'],{legal:'d5'},{leer:true}),
  X('Der Kasten: Markiere alle Felder, in denen der Turm den schwarzen König einsperrt.','8/1k6/8/3R4/8/8/8/K7',g=>kasten(g,'w'),'a6, a7, a8, b6, b7, b8, c6, c7 und c8. Der Turm sperrt die d-Linie und die 5. Reihe, der König bleibt in diesem Kasten mit 9 Feldern.',['Welche Linie und welche Reihe sperrt der Turm?','Der Kasten liegt auf der Seite des Königs.'],{leer:true}),
  P('Das Mattbild: Klicke alle Felder an, auf denen der Turm mattsetzt.','3k4/8/3K4/8/8/8/8/7R','h8. Die Könige stehen sich gegenüber, der Turm gibt Schach über die 8. Reihe. Der weiße König deckt c7, d7 und e7.',['Wer deckt die 7. Reihe?','Der Turm braucht die 8. Reihe.'],{matt:true},{leer:true}),
  X('Opposition: Klicke das Feld an, auf das der weiße König zieht, damit sich die Könige direkt gegenüberstehen.','3k4/8/8/3K4/8/8/8/7R',g=>g.moves({verbose:true}).filter(m=>m.piece==='k'&&m.to[0]==='d'&&m.to[1]==='6').map(m=>m.to),'d6. Zwischen den Königen ist dann genau ein Feld frei. Jetzt kann der Turm auf der 8. Reihe mattsetzen.',['Auf welcher Linie steht der schwarze König?','Ein Feld Abstand zwischen den Königen.'],{leer:true}),
  T('Pattfalle: Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','7k/5K2/8/8/8/8/8/6R1',null,'g7. Der Turm deckt dann h7 und g8 ohne Schach, g7 deckt der König f7: Patt. Richtig ist Th1, das ist Matt.',['Welches Feld bleibt dem König h8?','Nimmt der Turm es ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'g1'}})],
 E:[P('1. Das Mattbild: Klicke alle Felder an, auf denen der Turm mattsetzt.','6k1/8/6K1/8/8/8/8/R7','a8. Die Könige stehen sich gegenüber, der Turm setzt am Rand matt.',['Wer deckt f7, g7 und h7?','Welche Reihe braucht der Turm?'],{matt:true},{leer:true}),
  X('2. Kasten verkleinern: Klicke das Feld an, auf das der Turm zieht, damit der Kasten kleiner wird und der Turm sicher steht.','8/8/2k5/8/8/3R4/8/6K1',g=>kleiner(g),'d4. Der Kasten schrumpft von 15 auf 12 Felder. Auf d5 würde der König den Turm schlagen.',['Zähle die Felder im Kasten.','Kann der König den Turm danach schlagen?'],{leer:true}),
  X('3. Der König kommt: Der Turm kann nicht weiter. Markiere alle Felder, auf denen der weiße König näher an den schwarzen König kommt.','8/8/2k5/8/3R4/8/8/6K1',g=>naeher(g),'f2 und g2. Der König muss mithelfen, sonst kann der Turm den Kasten nicht schließen.',['Zähle die Schritte bis zum schwarzen König.','Welche Züge verkürzen den Abstand?'],{leer:true}),
  X('4. Turm in Gefahr: Der König greift den Turm g6 an. Markiere alle Felder, auf die der Turm weit weg ziehen kann und die 6. Reihe weiter sperrt.','8/5k2/6R1/8/8/8/8/K7',g=>weg(g,'g6'),'a6, b6 und c6. Der Turm bleibt auf der 6. Reihe und ist weit genug vom König entfernt.',['Der Turm bleibt auf der 6. Reihe.','Mindestens drei Linien Abstand.'],{leer:true}),
  X('5. Zwingzug: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm zieht, ohne Schach zu geben.','2k5/8/1K6/8/8/8/8/R7',g=>wartezug(g),'d1. Der Turm sperrt die d-Linie. Schwarz muss Kb8 spielen, dann stehen sich die Könige gegenüber, und Td8 ist Matt.',['Welche Felder hat der schwarze König?','Nimm ihm eines weg, sodass er in die Opposition muss.'],{leer:true}),
  P('Echte Partie: Klicke alle Felder an, auf denen Weiß mattsetzt.','8/8/r7/3p1p1p/3P1P2/p3PKPk/8/R7 w - - 0 42','h1. Th1 ist Matt. Der König f3 und die Bauern nehmen dem schwarzen König alle Felder.',['Welche Felder um h3 deckt der König f3?','Der Turm braucht die h-Linie.'],{matt:true},{leer:true,quelle:LI('QKwbJ')})],
 A:[P('Klicke alle Felder an, auf denen der Turm mattsetzt.','8/8/8/k1K5/8/8/8/7R','a1. Die Könige stehen sich auf der 5. Reihe gegenüber, der Turm setzt auf der a-Linie matt.',['Hier steht der König am linken Rand.','Der Turm braucht die a-Linie.'],{matt:true},{leer:true}),
  X('Markiere alle Felder des Kastens, in dem der schwarze König eingesperrt ist.','8/8/8/8/5R2/6k1/8/1K6',g=>kasten(g,'w'),'g1, g2, g3, h1, h2 und h3. Der Turm sperrt die f-Linie und die 4. Reihe.',['Welche Linie und welche Reihe sperrt der Turm f4?','Der Kasten liegt auf der Seite des Königs.'],{leer:true}),
  X('Markiere alle Felder, auf denen der Turm den Kasten verkleinert und sicher steht.','8/1k6/8/8/8/8/4R3/K7',g=>kleiner(g),'c2, d2, e3, e4, e5 und e6. Jeder dieser Züge macht den Kasten kleiner, ohne dass der König den Turm erreicht.',['Zähle den Kasten vorher: a bis d, Reihe 3 bis 8.','Kann der König den Turm danach schlagen?'],{leer:true}),
  X('Markiere alle Felder, auf denen der weiße König näher an den schwarzen König kommt.','8/2k5/8/1R6/8/8/8/6K1',g=>naeher(g),'f2, g2 und h2. Alle drei verkürzen den Abstand. Am besten zieht der König in Richtung c-Linie.',['Zähle die Schritte bis c7.','Welche Züge verkürzen den Abstand?'],{leer:true}),
  P('Echte Partie: Klicke alle Felder an, auf denen Schwarz mattsetzt.','2r5/8/8/8/5kPK/7P/8/6R1 b - - 8 52','h8. Th8 ist Matt. Der König f4 deckt g3, g4 und g5, die Bauern sperren h3 und g4.',['Welche Felder um h4 deckt der König f4?','Der Turm braucht die h-Linie.'],{matt:true},{leer:true,quelle:LI('UDaGv')}),
  X('Zwingzug: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm zieht, ohne Schach zu geben.','2k5/8/1K6/8/8/8/8/4R3',g=>wartezug(g),'d1. Der Turm sperrt die d-Linie. Schwarz muss Kb8 spielen, dann stehen sich die Könige gegenüber und Td8 ist Matt.',['Welche Felder hat der schwarze König?','Nimm ihm eines weg.'],{leer:true})],
 S:[T('Fehler 1: Turm zu nah. Weiß hat Td5 gespielt. Klicke die weiße Figur an, die der schwarze König jetzt schlagen kann.','8/8/2k5/3R4/8/8/8/6K1',['d5'],'Den Turm d5. Er steht direkt neben dem König, und der eigene König ist zu weit weg. Richtig war Td4.',['Welche Felder berührt der König c6?','Wer deckt den Turm?'],{zug:'b'}),
  T('Fehler 2: Patt in der Ecke. Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','k7/2K5/8/8/8/8/8/1R6',null,'b7. Von dort deckt der Turm a7, ohne Schach zu geben, b8 deckt der König c7: Patt. Richtig ist Ta1, das ist Matt.',['Welches Feld bleibt dem König a8?','Nimmt der Turm es ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'b1'}}),
  P('Fehler 3: Schach zur falschen Zeit. Weiß hat Th8+ gespielt, aber die Könige stehen nicht gegenüber. Markiere alle Felder, auf die der schwarze König fliehen kann.','3k3R/8/4K3/8/8/8/8/8 b - - 0 1','c7. Der König entkommt aus dem Kasten. Erst muss der weiße König in die Opposition, dann gibt der Turm Schach.',['Welche Felder deckt der König e6?','Ist c7 angegriffen?'],{flucht:true},{schach:true,leer:true}),
  P('Fehler 4: Den Kasten öffnen. Der Turm hat die d-Linie verlassen und steht jetzt auf h4. Markiere alle Felder, auf die der schwarze König ziehen darf.','8/8/2k5/8/7R/8/8/6K1 b - - 0 1','b5, b6, b7, c5, c7, d5, d6 und d7. Die 4. Reihe bleibt gesperrt, aber die d-Linie ist offen. Der Kasten ist viel größer geworden.',['Welche Linie war vorher gesperrt?','Welche Felder sind jetzt neu?'],{legal:'c6'},{leer:true}),
  P('Echte Partie: Klicke alle Felder an, auf denen Weiß mattsetzt.','8/2p2p2/2p4p/r1P5/4PK1k/1p6/1R6/8 w - - 1 43','h2. Th2 ist Matt. Der König f4 deckt g3, g4 und g5, der Turm die ganze h-Linie.',['Welche Felder um h4 deckt der König f4?','Der Turm braucht die h-Linie.'],{matt:true},{leer:true,quelle:LI('QPQiC')}),
  X('Fehler 5: Den Turm hängen lassen. Der schwarze König greift den Turm e4 an. Markiere alle Felder, auf die der weiße König ziehen kann, um den Turm zu decken.','8/8/8/3k4/4R3/8/5K2/8',g=>deckt(g),'e3 und f3. Von dort deckt der König den Turm, und der Kasten bleibt geschlossen.',['Welche Felder grenzen an e4?','Welche erreicht der König f2?'],{leer:true})],
 L:[P('Klicke alle Felder an, auf denen der Turm mattsetzt.','8/8/8/8/8/2K5/7R/2k5','h1. Die Könige stehen sich gegenüber, der Turm setzt auf der 1. Reihe matt.',['Wer deckt die 2. Reihe vor dem schwarzen König?','Der Turm braucht die 1. Reihe.'],{matt:true},{leer:true}),
  X('Markiere alle Felder des Kastens, in dem der schwarze König eingesperrt ist.','8/8/8/5k2/3R4/8/8/K7',g=>kasten(g,'w'),'e5 bis h8: alle Felder rechts der d-Linie und oberhalb der 4. Reihe, zusammen 16 Felder.',['Welche Linie und welche Reihe sperrt der Turm d4?','Der Kasten liegt auf der Seite des Königs.'],{leer:true}),
  X('Markiere alle Felder, auf denen der Turm den Kasten verkleinert und sicher steht.','8/8/8/8/2R5/8/6k1/K7',g=>kleiner(g),'c3, d4, e4 und f4. Jeder dieser Züge macht den Kasten kleiner, ohne dass der König den Turm erreicht.',['Zähle den Kasten vorher.','Kann der König den Turm danach schlagen?'],{leer:true}),
  X('Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das der Turm zieht, ohne Schach zu geben.','5k2/8/6K1/8/8/8/8/7R',g=>wartezug(g),'e1. Der Turm sperrt die e-Linie. Schwarz muss Kg8 spielen, dann stehen sich die Könige gegenüber und Te8 ist Matt.',['Welche Felder hat der schwarze König?','Nimm ihm eines weg.'],{leer:true}),
  X('Der schwarze König greift den Turm d4 an. Markiere alle Felder, auf die der weiße König ziehen kann, um den Turm zu decken.','8/8/8/8/3R4/2k2K2/8/8',g=>deckt(g),'e3 und e4. Von dort deckt der König den Turm.',['Welche Felder grenzen an d4?','Welche erreicht der König f3?'],{leer:true}),
  T('Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','7k/5K2/8/6R1/8/8/8/8',null,'g7. Von dort deckt der Turm g8 und h7 ohne Schach, g7 deckt der König f7: Patt. Richtig ist Th5, das ist Matt.',['Welches Feld bleibt dem König h8?','Nimmt der Turm es ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'g5'}})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 33 geschrieben');
