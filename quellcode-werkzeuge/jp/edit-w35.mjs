// Woche 35 „Gold-Diplom und Abschlusstest“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w34.mjs, dann diese Datei.
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
// Gegenangriff: Figuren in Gefahr und sichere Fluchtzüge mit Angriff berechnen
const angegriffen=(g,c)=>{const opp=c==='w'?'b':'w';return sqOf(g,x=>x.color===c&&x.type!=='k').filter(s=>g.attackers(s,opp).length)};
// in Gefahr: angegriffen und ungedeckt oder von einer billigeren Figur angegriffen
const gefahr=(g,c)=>{const opp=c==='w'?'b':'w';return sqOf(g,x=>x.color===c&&x.type!=='k').filter(s=>{const a=g.attackers(s,opp);if(!a.length)return false;const v=VAL[g.get(s).type];return !g.attackers(s,c).length||a.some(q=>VAL[g.get(q).type]<v)})};
// Zielfelder der Figur auf von, auf denen sie sicher steht und je nach ziel angreift: 'q' Dame, 'r' Turm, 'schach' oder nur 'sicher'
function flucht(g,von,ziel='sicher'){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>m.from===von)){g.move(m);const feinde=g.attackers(m.to,opp);const h=new Chess(g.fen().replace(/ [wb] /,' '+c+' ').replace(/ [a-h][36] /,' - '));const freunde=h.attackers(m.to,c).filter(x=>x!==m.to);
  let ok=!feinde.length||(freunde.length&&feinde.every(a=>VAL[g.get(a).type]>=VAL[m.piece]));
  if(ziel==='schach')ok=ok&&g.inCheck();else if(ziel!=='sicher')ok=ok&&sqOf(h,x=>x.color===opp&&x.type===ziel).some(t=>h.attackers(t,c).includes(m.to));
  if(ok)out.add(m.to);g.undo()}return [...out]}
// Züge mit Figuren der Typen typen, nach denen die gegnerische Figur auf sq an ihren König gefesselt ist
function fesselt(g,typen,sq){const c=g.turn(),opp=c==='w'?'b':'w',out=new Set();for(const m of g.moves({verbose:true}).filter(m=>typen.includes(m.piece))){g.move(m);if(!g.inCheck()&&pins(g,opp).gefesselt.includes(sq))out.add(m.to);g.undo()}return [...out]}
// Zug mit festem Zielfeld, von Stockfish als klar bester Zug bestätigt
const ZZ=(frage,fen,zug,antwort,hilfe)=>T(frage,fen.split(' ')[0],[zug.slice(2,4)],antwort,hilfe,{...(fen.split(' ')[1]==='b'?{zug:'b'}:{}),leer:true});
// Treppenmatt: Turmzüge mit Schach, nach denen der König nur in Richtung Rand ausweichen kann (axis 'r' Reihe, 'f' Linie)
const lage=(s,axis)=>axis==='r'?+s[1]:s.charCodeAt(0)-96;
function treppe(g,axis='r',dir=1){const opp=g.turn()==='w'?'b':'w',k0=ksq(g,opp),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>m.piece==='r')){g.move(m);if(g.inCheck()&&!g.isCheckmate()){const rep=g.moves({verbose:true});if(rep.every(x=>x.piece==='k'&&(lage(x.to,axis)-lage(k0,axis))*dir>0))out.add(m.to)}g.undo()}return [...out]}
// Angegriffener Turm flieht auf derselben Reihe, sicher und mindestens abstand Linien vom gegnerischen König entfernt
function weg(g,von,abstand=3){const opp=g.turn()==='w'?'b':'w',k=ksq(g,opp),out=[];
 for(const m of g.moves({verbose:true}).filter(m=>m.from===von&&m.to[1]===von[1])){g.move(m);const sicher=!g.attackers(m.to,opp).length;g.undo();if(sicher&&Math.abs(m.to.charCodeAt(0)-k.charCodeAt(0))>=abstand)out.push(m.to)}return out}
// Mattdrohung: Was könnte der Gegner setzen, wenn ich nichts tue? (Zugrecht tauschen)
const tausch=g=>{const p=g.fen().split(' ');p[1]=p[1]==='w'?'b':'w';p[3]='-';return p.join(' ')};
const drohung=g=>{try{const h=new Chess(tausch(g));if(h.inCheck())return [];return h.moves({verbose:true}).filter(m=>m.san.includes('#'))}catch(e){return []}};
const mattFelder=g=>[...new Set(drohung(g).map(m=>m.to))],mattVon=g=>[...new Set(drohung(g).map(m=>m.from))];
const strecke=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);if(!(x1===x2||y1===y2||Math.abs(x2-x1)===Math.abs(y2-y1)))return [];const dx=Math.sign(x2-x1),dy=Math.sign(y2-y1),out=[];let x=x1+dx,y=y1+dy;while(x!==x2||y!==y2){out.push(SQ(x,y));x+=dx;y+=dy}return out};
const nebenan=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);return Math.max(Math.abs(x1-x2),Math.abs(y1-y2))===1};
// Abwehrzüge gegen ein Matt in einem Zug, sortiert nach Art: schlagen, decken, dazwischen, luft (Fluchtfeld schaffen), koenig, sonst
function abwehr(g,art='alle',von=null){const c=g.turn(),thr=drohung(g);if(!thr.length)return [];const k=ksq(g,c);
 const zw=new Set(thr.filter(m=>'brq'.includes(m.piece)).flatMap(m=>strecke(m.from,m.to))),mf=new Set(thr.map(m=>m.to)),out=new Set();
 for(const m of g.moves({verbose:true}).filter(m=>!von||m.from===von)){g.move(m);let ok;
  if(g.inCheck())ok=!g.isCheckmate()&&g.moves({verbose:true}).every(r=>{g.move(r);const frei=!drohung(g).length&&!g.isCheckmate();g.undo();return frei});
  else ok=!g.moves().some(x=>x.includes('#'));
  let deckt=false;if(ok){const h=new Chess(tausch(g));deckt=[...mf].some(t=>h.attackers(t,c).includes(m.to))}g.undo();if(!ok)continue;
  const typ=m.piece==='k'?'koenig':m.captured?'schlagen':zw.has(m.to)?'dazwischen':deckt?'decken':nebenan(m.from,k)?'luft':'sonst';
  if(art==='alle'||art===typ)out.add(m.to)}return [...out]}
// Eröffnung: unentwickelte Leichtfiguren und Bauernzüge ins Zentrum
const unentwickelt=(g,c)=>{const r=c==='w'?'1':'8';return [['b','n'],['g','n'],['c','b'],['f','b']].map(([f,t])=>f+r).filter(s=>{const p=g.get(s);return p&&p.color===c&&p.type===(s[0]==='b'||s[0]==='g'?'n':'b')})};
const zentrum=g=>[...new Set(g.moves({verbose:true}).filter(m=>m.piece==='p'&&['d4','e4','d5','e5'].includes(m.to)).map(m=>m.to))];
// Stellung mit vollständiger FEN (Rochaderechte bleiben erhalten)
const XF=(frage,fen,fn,antwort,hilfe,extra={})=>{const g=new Chess(fen),f=fen.split(' ');return T(frage,f[0],[...new Set(fn(g))],antwort,hilfe,{...(f[1]==='b'?{zug:'b'}:{}),...(f[2]!=='-'?{rechte:f[2]}:{}),...extra})};
const bauernAbwehr=g=>sqOf(g,x=>x.type==='p'&&x.color===g.turn()).flatMap(s=>abwehr(g,'alle',s));
const greiftDameAn=g=>{const c=g.turn(),out=new Set();for(const s of sqOf(g,x=>x.color===c&&x.type!=='q'&&x.type!=='k'))for(const t of abwehr(g,'alle',s)){const m=g.move({from:s,to:t,promotion:'q'});const h=new Chess(tausch(g));if(sqOf(h,x=>x.type==='q'&&x.color!==c).some(d=>h.attackers(d,c).includes(t)))out.add(t);g.undo()}return [...out]};
// Matt in n Zügen (kleine Stellungen): Zielfelder der ersten Züge
function mattIn(g,n){if(n===1)return g.moves({verbose:true}).filter(m=>m.san.includes('#'));const out=[];
 for(const m of g.moves({verbose:true})){g.move(m);let ok=false;if(!g.isCheckmate()){const rep=g.moves({verbose:true});ok=rep.length>0&&rep.every(r=>{g.move(r);const mm=mattIn(g,n-1).length>0;g.undo();return mm})}g.undo();if(ok)out.push(m)}return out}
const mattZiele=(g,n)=>[...new Set(mattIn(g,n).map(m=>m.to))];
// Matt mit König und Turm: Kasten, Kasten verkleinern, König nähern, Zwingzug, Turm decken
const kasten=(g,c)=>{const opp=c==="w"?"b":"w";const r=sqOf(g,x=>x.type==="r"&&x.color===c)[0],k=sqOf(g,x=>x.type==="k"&&x.color===opp)[0];if(!r||!k)return [];const [rx,ry]=F2(r),[kx,ky]=F2(k);if(rx===kx||ry===ky)return [];const xs=kx<rx?[...Array(rx).keys()]:[...Array(7-rx).keys()].map(i=>rx+1+i),ys=ky<ry?[...Array(ry).keys()]:[...Array(7-ry).keys()].map(i=>ry+1+i);return xs.flatMap(x=>ys.map(y=>SQ(x,y)))};
const sicher=(g,sq,c)=>{const opp=c==='w'?'b':'w';const feinde=g.attackers(sq,opp);if(!feinde.length)return true;return g.attackers(sq,c).filter(s=>s!==sq).length>0};
function kleiner(g){const c=g.turn(),n0=kasten(g,c).length,out=new Set();for(const m of g.moves({verbose:true}).filter(m=>m.piece==='r')){g.move(m);const ok=!g.inCheck()&&!g.isStalemate()&&sicher(g,m.to,c);const n=kasten(g,c).length;g.undo();if(ok&&n&&n<n0)out.add(m.to)}return [...out]}
const dist=(a,b)=>{const [x1,y1]=F2(a),[x2,y2]=F2(b);return Math.max(Math.abs(x1-x2),Math.abs(y1-y2))};
function naeher(g){const c=g.turn(),opp=c==='w'?'b':'w',k2=sqOf(g,x=>x.type==='k'&&x.color===opp)[0],k1=sqOf(g,x=>x.type==='k'&&x.color===c)[0],out=[];for(const m of g.moves({verbose:true}).filter(m=>m.piece==='k')){if(dist(m.to,k2)>=dist(k1,k2))continue;g.move(m);const r=sqOf(g,x=>x.type==='r'&&x.color===c)[0];const ok=!g.isStalemate()&&(!r||sicher(g,r,c));g.undo();if(ok)out.push(m.to)}return out}
function wartezug(g){return [...new Set(mattIn(g,2).filter(m=>m.piece==='r'&&!m.san.includes('+')).map(m=>m.to))]}
function deckt(g){const c=g.turn(),out=[];for(const m of g.moves({verbose:true}).filter(m=>m.piece==='k')){g.move(m);const r=sqOf(g,x=>x.type==='r'&&x.color===c)[0];const ok=r&&g.attackers(r,c).includes(m.to);g.undo();if(ok)out.push(m.to)}return out}
// Quadratregel: Ecken des Quadrats und Königszüge ins Quadrat (Bauer auf sq, Quadrat zur Seite des gegnerischen Königs)
function quadrat(g,sq){const p=g.get(sq),[x,y0]=F2(sq);let y=y0;if(p.color==='w'&&y===1)y=2;if(p.color==='b'&&y===6)y=5;const n=p.color==='w'?7-y:y;const k=ksq(g,p.color==='w'?'b':'w');const dx=F2(k)[0]>=x?1:-1;
 const xs=[...Array(n+1).keys()].map(i=>x+dx*i).filter(v=>v>=0&&v<8),ys=p.color==='w'?[...Array(n+1).keys()].map(i=>y+i):[...Array(n+1).keys()].map(i=>y-i);
 return {felder:xs.flatMap(a=>ys.map(b=>SQ(a,b))),ecken:[SQ(x,ys[0]),SQ(x,ys[ys.length-1]),SQ(x+dx*n<0?0:x+dx*n>7?7:x+dx*n,ys[0]),SQ(x+dx*n<0?0:x+dx*n>7?7:x+dx*n,ys[ys.length-1])]}}
const insQuadrat=(g,sq)=>{const q=new Set(quadrat(g,sq).felder);return [...new Set(g.moves({verbose:true}).filter(m=>m.piece==='k'&&q.has(m.to)).map(m=>m.to))]};
const SF=' Gewinn- und Remiszüge mit Stockfish geprüft.';
F[35]={thema:'Gold-Diplom und Abschlusstest',
 lernziel:'Ich kann die Gold-Missionen allein lösen.',
 leitfrage:'Zeige ich am Brett und auf dem Testblatt, dass ich Gegenangriff, Mattführungen, Verteidigung, Eröffnung, Opfer und Bauernendspiel beherrsche?',
 vorwissen:'Alle Themen der Wochen 27 bis 34.',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Ludgerus-Schachdiplom Gold 1 bis 4, praktischer Gelingensnachweis und Abschlusstest (ludgerus-schachdiplom.netlify.app). Lichess-Puzzles YYwMu, ASBjt und hsvXH (CC0, über die Lichess-Schnittstelle abgerufen), übrige Aufgaben eigene Aufgaben. Gefahr, Treppe, Abwehr, Entwicklung, Mattführungen, Kasten und Quadrat mit chess.js berechnet, Bauernendspiele mit Stockfish geprüft',
 phasen:[
 {name:'Einstieg',titel:'Gold-Mix zum Aufwärmen und Ablauf erklären',
  ablauf:['Stopp-Signal. Am Lehrbrett W1 bis W6 eine kurze Aufwärmrunde: Figur in Gefahr, Treppenschritt, Mattdrohung, Entwicklung, Damiano-Matt, Quadratregel.',
   'Ablauf erklären: Heute zeigt ihr am Brett und auf zwei Testblättern, was ihr in der Gold-Stufe gelernt habt. Wer alle sechs Punkte am Brett schafft und mindestens 10 von 12 Testaufgaben, bekommt das Gold-Diplom. Wer schon alle drei Stufen hat, kann im Ludgerus-Schachdiplom online den Abschlusstest machen.'],
  kinder:'Ich weiß, wie die Gold-Prüfung abläuft.',
  links:[{art:'feld',label:'Lehrbrett: Aufwärmen W1 bis W6',set:'W'}]},
 {name:'Erarbeitung',titel:'Generalprobe am Lehrbrett',
  ablauf:['Am Lehrbrett E1 bis E6 eine Generalprobe: Gegenangriff, Matt mit zwei Türmen, Luft machen, Opfer mit Matt, Kasten verkleinern, Opposition. Nach jeder Aufgabe zeigen alle mit Daumen hoch, Mitte oder runter, wie sicher sie sich fühlen.',
   'Bei E6 fragen: „Woran erkennst du, wer die Opposition hat?“ Merksatz: „Erst die Drohung sehen, dann den Plan wählen, dann bis zum Ende rechnen.“'],
  kinder:'Ich weiß, welche Gold-Themen ich sicher kann.',
  links:[{art:'feld',label:'Lehrbrett: Generalprobe E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Praktischer Nachweis zu zweit',
  ablauf:['Zu zweit mit dem Prüfbogen: Kind A rettet eine bedrohte Figur mit Gegenangriff, setzt mit zwei Türmen und mit König und Turm matt und wehrt eine Mattdrohung auf zwei Arten ab. Kind B stellt die Stellungen und prüft mit den Plakaten. Danach wechseln die Rollen.',
   'Danach spielen beide acht Eröffnungszüge nach den Regeln und zeigen in einem Bauernendspiel die Opposition. Du gehst herum und hakst auf dem Prüfbogen ab, was jedes Kind allein zeigt.',
   'Wer Geräte hat, kann zusätzlich die Gold-Missionen und danach den Abschlusstest im Ludgerus-Schachdiplom online bearbeiten.'],
  kinder:'Ich zeige am Brett alle sechs Punkte des Nachweises.',
  links:[{art:'druck',label:'Prüfbogen: praktischer Nachweis Gold',was:'nachweis'},{art:'blatt',label:'Ludgerus-Schachdiplom online (Gold 1 bis 4 und Abschlusstest)',url:URLS.diplomOnline}]},
 {name:'Sicherung',titel:'Knackpunkte vor dem Test',
  ablauf:['Stopp-Signal. Am Lehrbrett S1 bis S6 die Knackpunkte, die beim Nachweis aufgefallen sind: Gegenangriff auf eine zu schwache Figur, Turm zu nah am König, Luft auf ein angegriffenes Feld, Opfer ohne Keilbauer, Patt beim Turmmatt, Randbauer.',
   'Bei jeder Aufgabe nachfragen: „Warum?“ oder „Woran erkennst du das?“'],
  kinder:'Ich kenne die typischen Fallen vor dem Test.',
  links:[{art:'feld',label:'Lehrbrett: Knackpunkte S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Gold-Test: zwei Blätter mit je sechs Aufgaben',
  ablauf:['Jedes Kind löst allein Teil 1 (Gegenangriff, Treppenmatt, Verteidigen, Eröffnung, A1 bis A6) und Teil 2 (Opfer, Grundreihe, Turmmatt, Bauernendspiel, L1 bis L6). Bestanden ist mit mindestens 10 von 12 Aufgaben.',
   'Du kontrollierst mit den Lösungsblättern und besprichst falsche Aufgaben gleich mit dem Kind am Lehrbrett.'],
  kinder:'Ich löse mindestens 10 von 12 Testaufgaben allein.',
  links:[{art:'druck',label:'Gold-Test Teil 1',was:'feld:A'},{art:'feld',label:'Lehrbrett: Teil 1 A1 bis A6',set:'A'},{art:'druck',label:'Gold-Test Teil 2',was:'feld:L'},{art:'feld',label:'Lehrbrett: Teil 2 L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Urkunden, Rückblick, Aufräumen',
  ablauf:['Urkunden überreichen, alle klatschen. Wer es noch nicht geschafft hat, bekommt einen festen Termin für den zweiten Versuch und weiß, was er üben soll.',
   'Rückblick: „Welches Gold-Thema hat dir am meisten Spaß gemacht?“ Aufräum-Ritual. Ausblick: Nächstes Mal ist das Abschlussturnier mit Urkunden für alle.'],
  kinder:'Ich weiß, was ich geschafft habe und was als Nächstes kommt.',
  links:[{art:'druck',label:'Gold-Urkunde (zwei pro Blatt)',was:'urkunde'}]}],
 hinweise:{hilfe:'Kinder mit Leseschwierigkeiten bekommen die Testaufgaben vorgelesen. Der praktische Nachweis zählt genauso viel wie das Blatt. Die Plakate der Wochen 27 bis 34 dürfen beim Nachweis hängen bleiben.',
  zusatz:'Wer früh fertig ist, macht im Ludgerus-Schachdiplom online den Abschlusstest oder spielt eine Partie mit Uhr und schreibt mit.',
  kuerzen:'Die Generalprobe auf E4 bis E6 kürzen, im Nachweis die Eröffnung auf sechs Züge. Der Test bleibt vollständig. Wer nicht fertig wird, beendet den Test in Woche 36.'},
 nachher:'Wer hat das Gold-Diplom noch nicht? In welchem Bereich fehlen Punkte: Mattführung, Verteidigung, Eröffnung oder Endspiel? Für diese Kinder planst du in Woche 36 vor dem Turnier eine kurze Übungsecke ein.',
 feld:{
 W:[X('Aufwärmen: Welche weißen Figuren sind wirklich in Gefahr? Klicke sie an.','2r3k1/5ppp/8/3B4/1p6/2N5/5PPP/2R3K1',g=>gefahr(g,'w'),'Der Springer c3, ihn greift der Bauer b4 an. Der Läufer d5 und der Turm c1 werden nicht angegriffen.',['Angegriffen und ungedeckt oder von einer billigeren Figur angegriffen?','Prüfe Bauer b4 und Turm c8.']),
  X('Aufwärmen: Der Turm a5 sperrt die 5. Reihe. Klicke das Feld an, auf das der Jäger zieht.','8/8/3k4/R7/8/8/8/6RK',g=>treppe(g),'g6. Tg6+ gibt Schach auf der 6. Reihe, der Turm a5 sperrt nach unten. Der König muss auf die 7. Reihe.',['Auf welcher Reihe steht der König?','Der Wächter bleibt stehen.'],{leer:true}),
  X('Aufwärmen: Schwarz droht Matt. Klicke das Feld an, auf dem Schwarz mattsetzen würde.','2r3k1/5ppp/8/8/8/8/5PPP/6K1',g=>mattFelder(g),'c1. Tc1 wäre Matt auf der Grundreihe.',['Wohin kann der Turm c8 ziehen?','Hat der weiße König Luft?'],{leer:true}),
  X('Aufwärmen: Klicke das Feld an, auf das Schwarz einen Springer entwickelt und dabei den Bauern e5 deckt.','e4 e5 Nf3',g=>[...new Set(g.moves({verbose:true}).filter(m=>m.piece==='n').filter(m=>{g.move(m);const h=new Chess(tausch(g));const ja=h.attackers('e5','b').includes(m.to);g.undo();return ja}).map(m=>m.to))],'c6. Sc6 entwickelt den Springer zur Mitte und deckt e5.',['Welche Springerfelder decken e5?','Welches erreicht ein Springer im ersten Zug?'],{leer:true}),
  P('Aufwärmen: Klicke alle Felder an, auf denen die Dame mattsetzt.','5rk1/5pp1/6P1/8/8/8/8/K6Q','h7. Das Damiano-Matt: Der Keilbauer g6 deckt die Dame.',['Welches Feld deckt der Bauer g6?','Die Dame setzt direkt vor dem König matt.'],{matt:true},{leer:true}),
  X('Aufwärmen: Schwarz am Zug. Klicke das Feld an, auf das der König zieht, um den Bauern b4 aufzuhalten.','7K/8/8/8/1P6/6k1/8/8 b - - 0 1',g=>insQuadrat(g,'b4'),'f4. Nur von f4 steht der König im Quadrat b4 bis f8.'+SF,['Zeichne das Quadrat b4 bis f8.','Welches Königsfeld liegt darin?'],{leer:true})],
 E:[X('Generalprobe Gegenangriff: Der Springer d4 wird vom Bauern e5 angegriffen. Markiere alle Felder, auf denen er sicher steht und die Dame angreift.','6k1/2q2ppp/8/4p3/3N4/8/3Q1PPP/6K1',g=>flucht(g,'d4','q'),'b5. Von dort greift der Springer die Dame c7 an und steht sicher. Auf e6 schlägt ihn der Bauer f7.',['Von welchen Feldern greift ein Springer c7 an?','Steht er dort sicher?'],{leer:true}),
  P('Generalprobe zwei Türme: Klicke alle Felder an, auf denen ein Turm mattsetzt.','k7/2R5/8/8/8/8/8/6KR','h8. Der Turm c7 sperrt die 7. Reihe, der Turm h1 setzt auf der 8. Reihe matt.',['Welcher Turm sperrt?','Der andere gibt Schach am Rand.'],{matt:true},{leer:true}),
  X('Generalprobe Verteidigen: Schwarz droht Te1#. Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König ein sicheres Fluchtfeld bekommt.','4r1k1/5ppp/1b6/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'g3, g4, h3 und h4. Nach f3 oder f4 wäre f2 frei, aber der Läufer b6 greift f2 an.',['Welches Feld greift der Läufer b6 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  X('Generalprobe Opfer: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','2r3k1/5ppp/8/8/3Q4/8/5PPP/3R2K1',g=>mattZiele(g,2),'d8. Dd8+ Txd8 Txd8#. Die Dame lockt den Turm c8 weg.',['Wer bewacht die 8. Reihe?','Wie lockt man ihn weg?'],{leer:true}),
  X('Generalprobe Turmmatt: Markiere alle Felder, auf denen der Turm den Kasten verkleinert und sicher steht.','8/8/8/2k5/8/8/5R2/K7',g=>kleiner(g),'d2, e2, f3, f4 und f6. Jeder dieser Züge macht den Kasten kleiner, ohne dass der König den Turm erreicht.',['Zähle den Kasten vorher.','Kann der König den Turm danach schlagen?'],{leer:true}),
  T('Generalprobe Opposition: Schwarz am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann, damit Schwarz remis hält.','8/5k2/8/5PK1/8/8/8/8',['g7'],'g7. Die Könige stehen sich gegenüber, Weiß kommt nicht weiter. Jeder andere Zug verliert.'+SF,['Wo steht der weiße König?','Stell dich ihm gegenüber.'],{zug:'b',leer:true})],
 A:[LZ('Test, echte Partie: Weiß hat Dxd5 gespielt. Schwarz gibt zuerst Schach und schlägt dann zurück. Klicke das Feld an, auf das der Läufer zieht.','r1bqk2r/pp3pbp/2n5/2PQ1p2/8/2N1PN2/PP3PPP/R3KB1R b KQkq - 0 10','g7c3','c3. Lxc3+ schlägt den Springer, der die Dame d5 gedeckt hat, mit Schach. So ging die Partie weiter: bxc3 Dxd5.',['Wer deckt die weiße Dame d5?','Kann der Läufer ihn mit Schach schlagen?'],'YYwMu'),
  P('Test: Klicke alle Felder an, auf denen ein Turm mattsetzt.','1k6/7R/8/8/8/8/8/6RK','g8. Der Turm h7 sperrt die 7. Reihe, der Turm g1 setzt auf der 8. Reihe matt.',['Welcher Turm sperrt die 7. Reihe?','Der andere gibt auf der 8. Reihe Schach.'],{matt:true},{leer:true}),
  T('Test: Schwarz droht Td1#. Sd2 oder Sd4 verliert den Springer. Klicke alle Bauern an, die dem König mit einem Zug Luft machen.','3r2k1/5ppp/8/8/8/1N6/5PPP/6K1',['f2','g2','h2'],'f2, g2 und h2. Nach f3, g3 oder h3 hat der König ein Fluchtfeld, Td1+ ist kein Matt mehr. Auf d2 oder d4 schlägt der Turm den ungedeckten Springer, dann droht Td1# wieder.',['Welches Feld neben dem König wird frei, wenn ein Bauer zieht?','Wird dieses Feld vom Turm angegriffen?']),
  X('Test: Klicke alle schwarzen Springer und Läufer an, die noch nicht entwickelt sind.','d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7',g=>unentwickelt(g,'b'),'b8 und c8. Der Springer b8 und der Läufer c8 stehen noch auf ihren Startfeldern.',['Welche Leichtfiguren stehen noch auf der 8. Reihe?','Der Turm zählt nicht.']),
  X('Test: Weiß droht Dxf7#. Markiere alle Felder, auf die der Springer g8 ziehen kann, um das Matt zu verhindern.','e4 e5 Qf3 Nc6 Bc4',g=>abwehr(g,'alle','g8'),'f6 und h6. Sf6 sperrt die f-Linie, Sh6 deckt f7.',['Welche Linie nutzt die Dame f3?','Wo sperrt oder deckt der Springer?'],{leer:true}),
  P('Test: Markiere das Feld, auf das der weiße König bei der Rochade zieht.','e4 e5 Nf3 Nc6 Bb5 Nf6','g1. Der Weg zum Turm h1 ist frei, kein Feld ist angegriffen.',['Welche Felder überquert der König?','Der König zieht zwei Felder.'],{rochade:true},{leer:true})],
 S:[T('Knackpunkt Gegenangriff: Die weiße Dame wird vom Bauern e5 angegriffen. Weiß hat nur mit Sb5 den Springer a7 angegriffen. Klicke die weiße Figur an, die Schwarz jetzt schlägt.','6k1/n4ppp/8/1N2p3/3Q4/8/5PPP/6K1',['d4'],'Die Dame d4. Ein Gegenangriff auf eine schwächere Figur rettet die Dame nicht.',['Was ist die Dame wert, was der Springer?','Wen greift der Bauer e5 an?'],{zug:'b'}),
  T('Knackpunkt Turmmatt: Weiß hat Tc5 gespielt. Klicke die weiße Figur an, die der schwarze König jetzt schlagen kann.','8/8/3k4/2R5/8/8/8/6K1',['c5'],'Den Turm c5. Er steht direkt neben dem König und ist ungedeckt.',['Welche Felder berührt der König d6?','Wer deckt den Turm?'],{zug:'b'}),
  P('Knackpunkt Luft: Weiß hat h3 gespielt. Klicke alle Felder an, auf denen Schwarz jetzt mattsetzt.','1b2r1k1/5ppp/8/8/8/7P/5PP1/6K1 b - - 0 1','e1. Te1 ist Matt. h2 ist zwar frei, aber der Läufer b8 greift es an.',['Welches Feld greift der Läufer an?','Ist h2 sicher?'],{matt:true},{leer:true}),
  P('Knackpunkt Opfer: Ohne Keilbauer. Weiß hat Dh7+ gespielt. Markiere alle Felder, auf die der schwarze König ziehen darf.','5rk1/5ppQ/8/8/8/8/8/6K1 b - - 0 1','h7. Der König schlägt die Dame, sie ist nicht gedeckt.',['Wer deckt h7?','Darf der König schlagen?'],{flucht:true},{schach:true,leer:true}),
  T('Knackpunkt Patt: Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','k7/2K5/8/8/8/8/8/1R6',null,'b7. Dort deckt der Turm a7 ohne Schach, b8 deckt der König: Patt. Richtig ist Ta1, das ist Matt.',['Welches Feld bleibt dem König a8?','Nimmt der Turm es ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'b1'}}),
  T('Knackpunkt Randbauer: Weiß am Zug. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.'+KEINS,'7k/8/6K1/7P/8/8/8/8',[],'Keins. Mit dem Randbauern hält Schwarz in der Ecke remis.'+SF,['Wohin kann der schwarze König fliehen?','Gibt es eine Ecke, aus der er nicht herauskommt?'],{leer:true})],
 L:[LZ('Test, echte Partie: Schwarz opfert die Dame und setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame zieht.','3r2k1/p3bppp/1pBq4/1P6/P7/8/1Q3PPP/2R3K1 b - - 0 27','d6d1','d1. Dd1+ Txd1 Txd1#. Der Turm c1 muss schlagen, dann gehört die Grundreihe dem Turm d8.',['Welche weiße Figur deckt d1?','Was steht hinter der Dame?'],'ASBjt'),
  X('Test: Damiano-Matt in drei Zügen. Klicke das Feld an, auf das der Turm im ersten Zug zieht.','5rk1/5pp1/6P1/8/8/8/8/2K3QR',g=>mattZiele(g,3),'h8. Th8+ Kxh8, dann Dh1+ oder Dh2+ Kg8 und Dh7#.',['Was passiert nach einem Turmopfer mit Schach?','Wohin muss danach die Dame?'],{leer:true}),
  LZ('Test, echte Partie: Weiß setzt in zwei Zügen auf der Grundreihe matt. Klicke das Feld an, auf das der Turm zieht.','6k1/pp3ppp/3p4/8/1PR5/P6P/4rPPK/8 w - - 2 25','c4c8','c8. Tc8+ Te8 Txe8#. Schwarz kann sich nur dazwischenstellen, dann schlägt der Turm mit Matt.',['Ist die 8. Reihe offen?','Was kann Schwarz dazwischenstellen?'],'hsvXH'),
  X('Test: Markiere alle Felder, auf denen der Turm den Kasten verkleinert und sicher steht.','8/6k1/8/8/8/8/2R5/K7',g=>kleiner(g),'c3, c4, c5, c6, d2, e2 und f2. Jeder dieser Züge macht den Kasten kleiner, ohne dass der König den Turm erreicht.',['Zähle den Kasten vorher.','Kann der König den Turm danach schlagen?'],{leer:true}),
  X('Test: Schwarz am Zug. Klicke das Feld an, auf das der König zieht, um den Bauern g4 aufzuhalten.','8/8/8/8/6P1/1k6/8/K7 b - - 0 1',g=>insQuadrat(g,'g4'),'c4. Nur von c4 steht der König im Quadrat g4 bis c8.'+SF,['Zeichne das Quadrat des Bauern.','Welches Königsfeld liegt darin?'],{leer:true}),
  T('Test: Weiß am Zug gewinnt. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','8/8/5k2/8/8/5K2/5P2/8',['e4','f4','g4'],'e4, f4 und g4. Der König geht vor seinen Bauern.'+SF,['Der König gehört vor den Bauern.','Welche Felder liegen auf der 4. Reihe?'],{leer:true})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 35 geschrieben');
