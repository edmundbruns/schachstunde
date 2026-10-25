// Woche 36 „Abschlussturnier und Urkunden“ als feste Stunde anlegen. Reihenfolge: edit-w1-w3.mjs bis edit-w35.mjs, dann diese Datei.
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
F[36]={thema:'Abschlussturnier und Urkunden',
 lernziel:'Ich kann ein Turnier fair spielen und meine Fortschritte zeigen.',
 leitfrage:'Was habe ich in diesem Schachjahr gelernt, und wie zeige ich es in einem Turnier?',
 vorwissen:'Alle Themen des Jahres, Turnierregeln und Schachuhr (Woche 20), Rutschsystem (Woche 18 und 21).',
 umfang:'Der Inhalt ist für ca. 45 Minuten ausgelegt.',
 quelle:'Turnierform Rutschsystem aus dem Praxiswissen (Spielphasen organisieren) wie in Woche 18 und 21, FIDE-Schachregeln 2023 in kindgerechter Form. Brettaufgaben aus den Themen des Jahres, alle Lösungen mit chess.js nachgerechnet, Bauernendspiele mit Stockfish geprüft',
 phasen:[
 {name:'Einstieg',titel:'Ankommen, Turnier aufbauen, Jahres-Aufwärmen',
  ablauf:['Stopp-Signal. Bretter in einer Reihe nummerieren, Brett 1 ist oben. Jedes Paar stellt die Uhr auf 5 Minuten pro Kind, die Startplätze werden gelost. Jedes Kind schreibt auf seine Turnierkarte ein persönliches Ziel.',
   'Am Lehrbrett W1 bis W6 ein Aufwärmen durch das ganze Jahr: zwei Aufgaben aus Bronze, zwei aus Silber, zwei aus Gold. Ziel nennen: „Heute spielt ihr das Abschlussturnier und bekommt eure Jahresurkunde.“'],
  kinder:'Ich baue Brett und Uhr selbstständig auf und setze mir ein Turnierziel.',
  links:[{art:'feld',label:'Lehrbrett: Jahres-Aufwärmen W1 bis W6',set:'W'},{art:'druck',label:'Turnierkarten Abschlussturnier (vier pro Blatt)',was:'turnierkarte'}]},
 {name:'Erarbeitung',titel:'Sechs Turnier-Tipps aus dem Jahr',
  ablauf:['Kurz erinnern: Rutschsystem. Sieg ein Brett nach oben, Niederlage eins nach unten, Remis oder nicht fertig: Weiß nach oben, Schwarz nach unten.',
   'Am Lehrbrett E1 bis E6 sechs Tipps, die in jeder Partie helfen: Was droht? Hängt eine Figur? Gegenangriff statt Flucht. Matt geht vor. Kein Patt mit großem Vorteil. Im Endspiel erst der König.',
   'Frage: „Warum schaust du vor jedem eigenen Zug zuerst auf den Zug des Gegners?“'],
  kinder:'Ich kenne sechs Tipps, die mir in der Turnierpartie helfen.',
  links:[{art:'druck',label:'Plakat: Schachuhr und Turnierregeln',was:'schachuhr'},{art:'feld',label:'Lehrbrett: Turnier-Tipps E1 bis E6',set:'E'}]},
 {name:'Übung',titel:'Runde 1 und Runde 2',
  ablauf:['Runde 1 und Runde 2 im Rutschsystem, je 5 Minuten pro Kind. Vor der Partie Hand geben, nach der Partie Ergebnis auf der Turnierkarte eintragen und an der Turnierliste melden. In Runde 2 wechseln die Farben, danach wechseln die Rollen beim Melden und Aufbauen.',
   'Wer früh fertig ist, löst die Jahresrätsel A1 bis A6. Du führst die Turnierliste und schaust bei Streit an das Brett.'],
  kinder:'Ich spiele fair mit Uhr und melde mein Ergebnis.',
  links:[{art:'druck',label:'Turnierliste für die Lehrkraft',was:'meisterliste'},{art:'druck',label:'Arbeitsblatt: Jahresrätsel',was:'feld:A'},{art:'feld',label:'Lehrbrett: Jahresrätsel A1 bis A6',set:'A'}]},
 {name:'Sicherung',titel:'Halbzeit-Stopp: Streitfälle klären',
  ablauf:['Stopp-Signal, alle Uhren anhalten. Frage: „Was war bisher schwierig?“ Am Lehrbrett S1 bis S6 Streitfälle aus dem ganzen Jahr: Rochade, Patt, en passant, Umwandlung, berührt und geführt, illegaler Königszug.',
   'Bei jedem Fall nachfragen: „Woran erkennst du, wer recht hat?“'],
  kinder:'Ich entscheide Streitfälle mit der passenden Regel.',
  links:[{art:'feld',label:'Lehrbrett: Streitfälle S1 bis S6',set:'S'}]},
 {name:'Lerncheck',titel:'Finalrunde und Jahres-Lerncheck',
  ablauf:['Runde 3 ist die Finalrunde, 5 Minuten pro Kind. Wer an Brett 1 gewinnt, gewinnt das Abschlussturnier. Du beobachtest: Hand geben, Uhr mit derselben Hand, Partie fair zu Ende spielen.',
   'Wer fertig ist, löst den Jahres-Lerncheck L1 bis L6 allein: je eine Aufgabe aus Bronze und Silber, vier aus Gold. Danach Lösungen am Lehrbrett.'],
  kinder:'Ich spiele meine Finalpartie fair zu Ende und löse Aufgaben aus dem ganzen Jahr.',
  links:[{art:'druck',label:'Lerncheck-Zettel: Jahres-Lerncheck',was:'feld:L'},{art:'feld',label:'Lehrbrett: Lerncheck L1 bis L6',set:'L'}]},
 {name:'Abschluss und Ausblick',titel:'Siegerehrung, Jahresurkunden, Rückblick',
  ablauf:['Siegerehrung: Das Kind an Brett 1 bekommt die Siegerurkunde, alle anderen eine Teilnahmeurkunde. Danach bekommt jedes Kind seine Jahresurkunde mit den erreichten Diplomen. Keine Gesamtrangliste vorlesen.',
   'Rückblick im Kreis: Jedes Kind nennt seinen schönsten Schachmoment des Jahres und trägt ihn auf der Urkunde ein. Aufräum-Ritual, Uhren auf 0. Ausblick: In den Ferien weiterspielen, zum Beispiel mit den Aufgaben auf Lichess oder im Ludgerus-Schachdiplom online.'],
  kinder:'Ich weiß, was ich in diesem Jahr gelernt habe.',
  links:[{art:'druck',label:'Urkunden: Turniersieg und Teilnahme',was:'meisterurkunde'},{art:'druck',label:'Jahresurkunden mit Diplomen (zwei pro Blatt)',was:'jahresurkunde'},{art:'blatt',label:'Ludgerus-Schachdiplom online',url:URLS.diplomOnline}]}],
 hinweise:{hilfe:'Unsichere Kinder spielen ohne Uhr, ein Schiedsrichterkind hilft beim Melden. Fehlen Uhren, rufst du nach 10 Minuten das Rundenende aus.',
  zusatz:'Wer an Brett 1 gewinnt, darf ein Simultan gegen zwei Teams spielen. Wer früh fertig ist, sucht im Raster sein stärkstes Thema und erklärt es einem anderen Kind.',
  kuerzen:'Nur zwei Runden spielen, die zweite ist die Finalrunde. Die Erarbeitung auf E1, E2 und E4 kürzen. Lerncheck, Siegerehrung, Jahresurkunden und Aufräumen bleiben.'},
 nachher:'Welche Kinder haben welches Diplom erreicht? Welche Themen sollen im nächsten Schuljahr wiederholt werden? Das Lernfortschrittsraster kannst du als Excel-Datei speichern und für die neue Gruppe mitnehmen.',
 feld:{
 W:[P('Bronze: Klicke alle Felder an, auf denen der Turm mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/R5K1','a8. Ta8 ist Matt, die eigenen Bauern sperren den König ein.',['Die 8. Reihe ist offen.','Kann der König nach vorn fliehen?'],{matt:true},{leer:true}),
  P('Bronze: Schach! Markiere alle Felder, auf die der weiße König fliehen kann.','4k3/8/8/8/8/8/8/r3K3 w - - 0 1','d2, e2 und f2. Die 1. Reihe greift der Turm an, der König muss auf die 2. Reihe.',['Welche Reihe greift der Turm an?','Prüfe alle Nachbarfelder von e1.'],{flucht:true},{schach:true,leer:true}),
  T('Silber: Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.','4k3/8/8/8/2b5/8/8/R3K2R',null,'Nur c1. Der Läufer c4 greift f1 an, kurz rochieren ist verboten.',['Welche Felder greift der Läufer an?','Der König darf nicht über ein angegriffenes Feld.'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  ZE('Silber: Schwarz hat gerade d7–d5 gespielt. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.','e4 a6 e5 d5',null,'Der Bauer e5. Er steht neben d5 und darf sofort nach d6 schlagen.',['Wer steht neben d5?','En passant geht nur sofort.'],{pruef:{epschlaeger:true}}),
  X('Gold: Schwarz am Zug. Klicke das Feld an, auf das der König zieht, um den Bauern h4 aufzuhalten.','8/8/8/8/7P/2k5/8/K7 b - - 0 1',g=>insQuadrat(g,'h4'),'d4. Nur von d4 steht der König im Quadrat.'+SF,['Zeichne das Quadrat des Bauern.','Welches Königsfeld liegt darin?'],{leer:true}),
  X('Gold: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','3r2k1/5ppp/8/8/4Q3/8/5PPP/4R1K1',g=>mattZiele(g,2),'e8. De8+ Txe8 Txe8#. Die Dame lockt den Wächter weg.',['Wer bewacht die Grundreihe?','Wie lockt man ihn weg?'],{leer:true})],
 E:[X('Tipp 1, was droht? Klicke das Feld an, auf dem Schwarz mattsetzen würde.','1r4k1/5ppp/8/8/8/8/5PPP/6K1',g=>mattFelder(g),'b1. Erst die Drohung sehen, dann den eigenen Zug planen.',['Was würde Schwarz tun, wenn es noch einmal ziehen dürfte?','Schau auf die 1. Reihe.'],{leer:true}),
  X('Tipp 2, hängt eine Figur? Klicke alle weißen Figuren an, die wirklich in Gefahr sind.','2r3k1/5ppp/8/3B4/1p6/2N5/5PPP/2R3K1',g=>gefahr(g,'w'),'Der Springer c3, ihn greift der Bauer b4 an.',['Angegriffen und ungedeckt oder von einer billigeren Figur angegriffen?','Prüfe jede weiße Figur.']),
  X('Tipp 3, Gegenangriff: Der Springer d4 wird vom Bauern e5 angegriffen. Markiere alle Felder, auf denen er sicher steht und die Dame angreift.','6k1/2q2ppp/8/4p3/3N4/8/3Q1PPP/6K1',g=>flucht(g,'d4','q'),'b5. Von dort greift der Springer die Dame c7 an und steht sicher.',['Von welchen Feldern greift ein Springer c7 an?','Steht er dort sicher?'],{leer:true}),
  P('Tipp 4, Matt geht vor: Schwarz droht Txd1#, aber Weiß ist am Zug. Klicke alle Felder an, auf denen Weiß mattsetzt.','3r2k1/5ppp/8/8/8/8/5PPP/3R2K1','d8. Txd8 ist Matt. Wer zuerst mattsetzt, braucht sich nicht zu verteidigen.',['Prüfe zuerst eigene Mattzüge.','Die 8. Reihe ist offen.'],{matt:true},{leer:true}),
  T('Tipp 5, kein Patt: Klicke alle Felder an, auf die der Turm nicht ziehen darf, weil Schwarz sonst patt wäre.','7k/5K2/8/8/8/8/8/6R1',null,'g7. Dann hat Schwarz keinen Zug und steht nicht im Schach: Patt. Richtig ist Th1, das ist Matt.',['Welches Feld bleibt dem König h8?','Nimmt der Turm es ohne Schach weg, ist es Patt.'],{leer:true,pruef:{patt:'g1'}}),
  T('Tipp 6, im Endspiel erst der König: Weiß am Zug gewinnt. Markiere alle Felder, auf die der weiße König ziehen kann, damit Weiß gewinnt.','8/8/4k3/8/8/4K3/4P3/8',['d4','e4','f4'],'d4, e4 und f4. Der König geht vor seinen Bauern.'+SF,['Der König gehört vor den Bauern.','Welche Felder liegen auf der 4. Reihe?'],{leer:true})],
 A:[T('Jahresrätsel Bronze: Welche schwarze Figur sollte Weiß schlagen? Klicke sie an.','6k1/8/2r5/8/4q3/8/1B6/4R1K1',null,'Die Dame e4. Sie ist ungedeckt und am meisten wert.',['Welche schwarzen Figuren kann Weiß schlagen?','Welche ist am meisten wert?'],{pruef:{beste:'w'}}),
  X('Jahresrätsel Silber: Klicke das Feld an, auf das der Springer zieht und König und Dame gleichzeitig angreift.','3q3k/6pp/8/4N3/8/8/5PPP/6K1',g=>gabelZuege(g,'n'),'f7. Sf7+ gabelt König h8 und Dame d8.',['Welche Springerfelder greifen h8 an?','Welches davon greift auch d8 an?'],{leer:true}),
  X('Jahresrätsel Silber: Klicke das Feld an, auf das der Läufer zieht, um einen Spieß zu machen.','6q1/8/8/3k4/8/8/8/3B3K',g=>spiessZuege(g,'b'),'b3. Lb3+ gibt Schach, nach dem Königszug fällt die Dame g8.',['Auf welcher Diagonale stehen König und Dame?','Der Läufer muss vor den König, aber nicht direkt daneben.'],{leer:true}),
  X('Jahresrätsel Silber: Klicke die gefesselte schwarze Figur an.','4k3/3n4/8/8/B7/8/8/6K1',g=>pins(g,'b').gefesselt,'Der Springer d7. Zieht er weg, steht der König e8 im Schach durch den Läufer a4.',['Was steht zwischen Läufer und König?','Darf diese Figur wegziehen?']),
  P('Jahresrätsel Gold: Klicke alle Felder an, auf denen der Turm mattsetzt.','3k4/8/3K4/8/8/8/8/7R','h8. Die Könige stehen sich gegenüber, der Turm setzt am Rand matt.',['Wer deckt die 7. Reihe?','Der Turm braucht die 8. Reihe.'],{matt:true},{leer:true}),
  X('Jahresrätsel Gold: Der Turm a4 ist Wächter. Klicke das Feld an, auf das der Jäger zieht.','8/8/8/3k4/R7/8/8/6RK',g=>treppe(g),'g5. Tg5+ gibt Schach auf der 5. Reihe, der König muss nach oben.',['Der Jäger gibt Schach auf der Reihe des Königs.','Der Wächter bleibt stehen.'],{leer:true})],
 S:[T('Streitfall Rochade: Markiere alle Felder, auf die der weiße König mit einer Rochade ziehen darf.','5rk1/8/8/8/8/8/8/R3K2R',null,'Nur c1. Der Turm f8 greift f1 an. Über ein angegriffenes Feld darf der König bei der Rochade nicht ziehen.',['Welche Linie greift der Turm f8 an?','Welche Felder überquert der König?'],{rechte:'KQ',leer:true,pruef:{rochade:true}}),
  P('Streitfall Patt: Schwarz ist am Zug und steht nicht im Schach. Markiere alle Felder, auf die der schwarze König ziehen darf.'+KEINS,'7k/5Q2/6K1/8/8/8/8/8 b - - 0 1','Keins. Das ist Patt und damit remis, auch wenn Weiß viel mehr Material hat.',['Steht der König im Schach?','Prüfe g8, g7 und h7.'],{legal:'h8'},{leer:true}),
  ZE('Streitfall en passant: Schwarz hat d7–d5 schon früher gespielt, gerade eben a6–a5. Klicke alle weißen Bauern an, die jetzt en passant schlagen dürfen.'+KEINE,'e4 d5 e5 a6 h3 a5',null,'Keine. En passant geht nur direkt nach dem Doppelschritt.',['Welcher Bauer hat gerade gezogen?','Hat er einen Doppelschritt neben einem weißen Bauern gemacht?'],{pruef:{epschlaeger:true}}),
  T('Streitfall Umwandlung: Welche weißen Bauern können im nächsten Zug umgewandelt werden? Klicke sie an.',{e1:'K',g7:'k',a7:'P',b8:'n',d7:'P',d8:'r',h5:'P'},null,'Nur a7. Er zieht nach a8 oder schlägt den Springer b8. d7 ist blockiert und hat nichts zu schlagen.',['Welche Bauern stehen auf der 7. Reihe?','Ist das Feld davor frei, oder kann er schräg schlagen?'],{pruef:{umwandeln:true}}),
  P('Streitfall berührt, geführt: Du hast den Springer b1 berührt. Markiere alle Felder, auf die er ziehen darf.','e4 e5 d4 d5','a3, c3 und d2. Den berührten Springer musst du ziehen, wenn er einen erlaubten Zug hat.',['Welche Springerfelder sind frei?','Steht eine eigene Figur im Weg?'],{legal:'b1'},{leer:true}),
  P('Streitfall illegaler Königszug: Markiere alle Felder, auf die der weiße König ziehen darf.','4k3/8/8/2b5/8/8/8/4K3','d1, d2, e2 und f1. Das Feld f2 greift der Läufer an. Ein Königszug dorthin ist illegal und wird zurückgenommen.',['Welche Felder greift der Läufer c5 an?','Ein König darf nie auf ein angegriffenes Feld.'],{legal:'e1'},{leer:true})],
 L:[P('Bronze: Klicke alle Felder an, auf denen die Dame mattsetzt.','6k1/5ppp/8/8/8/8/5PPP/3Q2K1','d8. Dd8 ist Matt über die Grundreihe.',['Welche Reihe ist offen?','Hat der König Luft?'],{matt:true},{leer:true}),
  X('Silber: Klicke das Feld an, auf das der Läufer zieht, damit Läufer und Turm gleichzeitig Schach geben.','7k/8/8/8/7B/8/8/6KR',g=>abzug(g,'h4','doppel'),'f6. Der Läufer gibt Schach über g7, der Turm auf der h-Linie: Doppelschach.',['Der Läufer muss die h-Linie verlassen.','Von welchem Feld greift er h8 an?'],{leer:true}),
  X('Gold: Schwarz droht Te1#. Markiere alle Felder, auf die ein weißer Bauer ziehen kann, damit der König ein sicheres Fluchtfeld bekommt.','4r1k1/5ppp/1b6/8/8/8/5PPP/6K1',g=>abwehr(g,'luft'),'g3, g4, h3 und h4. Nach f3 oder f4 greift der Läufer b6 das Feld f2 an.',['Welches Feld greift der Läufer b6 an?','Ist das neue Fluchtfeld sicher?'],{leer:true}),
  X('Gold: Weiß setzt in zwei Zügen matt. Klicke das Feld an, auf das die Dame im ersten Zug zieht.','2r3k1/5ppp/8/8/3Q4/8/5PPP/3R2K1',g=>mattZiele(g,2),'d8. Dd8+ Txd8 Txd8#. Die Dame lockt den Turm c8 weg.',['Wer bewacht die 8. Reihe?','Wie lockt man ihn weg?'],{leer:true}),
  X('Gold: Klicke das Feld an, auf das der Turm zieht, damit der Kasten kleiner wird und der Turm sicher steht.','8/8/2k5/8/8/3R4/8/6K1',g=>kleiner(g),'d4. Der Kasten schrumpft, und der König kann den Turm nicht schlagen.',['Zähle die Felder im Kasten.','Kann der König den Turm danach schlagen?'],{leer:true}),
  T('Gold: Schwarz am Zug. Markiere alle Felder, auf die der schwarze König ziehen kann, damit Schwarz remis hält.','8/2k5/8/1KP5/8/8/8/8',['b7'],'b7. Die Könige stehen sich gegenüber. Jeder andere Zug verliert.'+SF,['Wo steht der weiße König?','Stell dich ihm gegenüber.'],{zug:'b',leer:true})]}};
const rest=src.slice(src.indexOf('export const YEAR='));
const out=src.slice(0,src.indexOf('export const URLS='))+'export const URLS='+JSON.stringify(URLS,null,1)+';\nexport const FIXED='+JSON.stringify(F,null,1)+';\n'+rest;
fs.writeFileSync(file,out);console.log('Woche 36 geschrieben');
