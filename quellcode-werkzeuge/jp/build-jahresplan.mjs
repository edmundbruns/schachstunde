// Baut dist/jahresplan-data.js aus den Pools und prüft alle Regeln. Aufruf: node jp/build-jahresplan.mjs
// © Dr. Edmund Bruns
import fs from 'node:fs';import vm from 'node:vm';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {Chess} from '../dist/assets/chess.mjs';
import {EXTRA,M1_WORK,M1_HINTS,DL_HINTS} from './tasks-bronze.mjs';import {LESSONS,LINKS} from './lessons-bronze.mjs';import {FIXED,YEAR,LATER,URLS,PLAN} from './fixed-bronze.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)),dist=path.join(here,'../dist');
const ctx={window:{},console};vm.createContext(ctx);
for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis','diplom-lessons'])vm.runInContext(fs.readFileSync(path.join(dist,f+'.js'),'utf8'),ctx);
const DL=ctx.window.DiplomLessons.L;
const m1=JSON.parse(fs.readFileSync(path.join(here,'pools/m1.json')));
const de=s=>s.replace(/D/g,'Q').replace(/T/g,'R').replace(/L/g,'B').replace(/S/g,'N');
const errors=[],notes=[];const err=m=>errors.push(m);
const TASKS={},COLLECT={};
function legalFen(fen){let g;try{g=new Chess(fen)}catch(e){return 'ungültig: '+e.message}const f=fen.split(' ');f[1]=f[1]==='w'?'b':'w';f[3]='-';try{if(new Chess(f.join(' ')).isCheck())return 'Seite, die nicht am Zug ist, steht im Schach'}catch(e){}return ''}
function resolve(key){if(TASKS[key])return TASKS[key];let t;
 if(key.startsWith('dl:')){const [,topic,i]=key.split(':');const s=DL[topic]?.tasks?.[+i];if(!s){err('fehlt: '+key);return null}t={...s,hints:(s.hints&&s.hints.length>=2)?s.hints:DL_HINTS[topic+':'+i],src:'Ludgerus-Schachdiplom '+(s.src||DL[topic].diplom)}}
 else if(key.startsWith('m1:')){const n=+key.split(':')[1];const s=m1.find(x=>x.slide===n);if(!s){err('fehlt: '+key);return null}
  const g=new Chess(s.fen);const sol=String(s.sol[0]).split('/')[0];let mv;try{mv=g.move(de(sol))}catch(e){err(key+' Lösung '+sol)}
  t={fen:s.fen,work:M1_WORK,answer:sol.replace(/#?$/,'#')+'.',checks:mv?[mv.from+mv.to+(mv.promotion||'')]:[],strict:true,hints:[...M1_HINTS],src:'Lumi Matt in einem Zug, Aufgabe '+(n-1)}}
 else{const s=EXTRA[key];if(!s){err('fehlt: '+key);return null}t={...s}}
 const why=legalFen(t.fen);if(why)err(key+': '+why);
 const g=new Chess(t.fen),legal=g.moves({verbose:true}),code=m=>m.from+m.to+(m.promotion||'');
 if(t.collectFrom){const ms=legal.filter(m=>m.from===t.collectFrom).map(code);t.checks=ms;t.strict=true;t.answer=t.answer.replace('{n}',ms.length);COLLECT[key]={need:ms.length,key:'to'}}
 if(t.allLegal){t.checks=legal.map(code);t.strict=true;delete t.allLegal}
 for(const c of t.checks||[])if(!legal.some(m=>code(m)===c))err(key+': erlaubter Zug '+c+' ist nicht regelgerecht');
 if(/#/.test(t.answer||'')&&t.checks?.length)for(const c of t.checks){const h=new Chess(t.fen);h.move({from:c.slice(0,2),to:c.slice(2,4),promotion:c[4]||'q'});if(!h.isCheckmate())err(key+': '+c+' ist kein Matt')}
 if(!Array.isArray(t.hints)||t.hints.length<2)err(key+': zwei Hilfen fehlen');
 if(!t.src)err(key+': Quelle fehlt');
 t.id='jp:'+key;t.key=key;TASKS[key]=t;return t}
const PH=['erarbeitung','uebung','sicherung','lerncheck','ausblick'];
const seenWeek={};
for(const L of LESSONS){
 if(L.einstieg.length<3)err(`W${L.week}: Einstieg braucht 3 Bausteine`);
 if(new Set(L.einstieg.map(b=>b.art)).size<3)err(`W${L.week}: Einstieg braucht 3 verschiedene Arten`);
 if(L.merk.split(/(?<=[.!?])\s+/).filter(Boolean).length>2)err(`W${L.week}: Merksatz länger als 2 Sätze`);
 for(const p of PH){const pool=L[p];if(!pool.bausteine?.length)err(`W${L.week} ${p}: kein Baustein`);for(const k of pool.aufgaben)resolve(k);
  const need=p==='lerncheck'?3:6;if(new Set(pool.aufgaben).size<need)err(`W${L.week} ${p}: nur ${new Set(pool.aufgaben).size} Brettaufgaben`)}
 for(const p of PH)for(const b of L[p].bausteine)for(const f of ['titel','lk','ln','material','zeit'])if(!b[f])err(`W${L.week} ${p}: Baustein ohne ${f}`);
 const other=new Set(PH.filter(p=>p!=='lerncheck').flatMap(p=>L[p].aufgaben));
 for(const k of L.lerncheck.aufgaben)if(other.has(k))err(`W${L.week}: Lerncheck-Aufgabe ${k} steht auch in einem anderen Pool`);
 if(L.arbeitsblatt.length!==6)err(`W${L.week}: Arbeitsblatt braucht 6 Aufgaben`);
 for(const k of L.arbeitsblatt)if(!L.uebung.aufgaben.includes(k))err(`W${L.week}: Arbeitsblatt-Aufgabe ${k} fehlt im Übungspool`);
 if(L.week>1){const earlier=new Set(LESSONS.filter(x=>x.week<L.week).flatMap(x=>PH.filter(p=>p!=='lerncheck'&&p!=='ausblick').flatMap(p=>x[p].aufgaben)));
  for(const k of L.ausblick.aufgaben)if(!earlier.has(k))err(`W${L.week}: Ausblick-Aufgabe ${k} stammt nicht aus einer früheren Stunde`)}
 seenWeek[L.week]=true}
if(PLAN.length!==36||PLAN.some((r,i)=>r[0]!==i+1))err('Jahresplan: 36 fortlaufende Wochen erwartet');
// Feste Stunden für das Praxiswissen
const SQ=/^[a-h][1-8]$/;
// Zugfelder für Turm, Läufer, Dame (gleitend) aus der Stellung berechnen, damit Lösungen nicht von Hand gezählt werden
function boardOf(fen){const m={};fen.split('/').forEach((row,ri)=>{let f=0;for(const c of row){if(/\d/.test(c))f+=+c;else{m['abcdefgh'[f]+(8-ri)]=c;f++}}});return m}
const DIRS={r:[[1,0],[-1,0],[0,1],[0,-1]],b:[[1,1],[1,-1],[-1,1],[-1,-1]]};DIRS.q=[...DIRS.r,...DIRS.b];
const STEP={n:[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],k:DIRS.q};
const sqAt=(f,r)=>f>=0&&f<8&&r>=1&&r<=8?'abcdefgh'[f]+r:null,isW=p=>p===p.toUpperCase();
// Felder, die eine Figur angreift (auch eigene Figuren als „gedeckt“), auf einem Brett B
function angriff(B,sq){const p=B[sq],t=p.toLowerCase(),f0='abcdefgh'.indexOf(sq[0]),r0=+sq[1],out=[];
 if(t==='p'){const d=isW(p)?1:-1;for(const df of [-1,1]){const q=sqAt(f0+df,r0+d);if(q)out.push(q)}return out}
 if(STEP[t]){for(const [df,dr] of STEP[t]){const q=sqAt(f0+df,r0+dr);if(q)out.push(q)}return out}
 for(const [df,dr] of DIRS[t]){let f=f0+df,r=r0+dr,q;while((q=sqAt(f,r))){out.push(q);if(B[q])break;f+=df;r+=dr}}return out}
function angegriffen(B,weissGreiftAn){const s=new Set();for(const [q,p] of Object.entries(B))if(isW(p)===weissGreiftAn)for(const x of angriff(B,q))s.add(x);return s}
function bauerZiele(B,sq){const p=B[sq],w=isW(p),d=w?1:-1,f0='abcdefgh'.indexOf(sq[0]),r0=+sq[1],out=[];const one=sqAt(f0,r0+d);
 if(one&&!B[one]){out.push(one);const two=sqAt(f0,r0+2*d);if(r0===(w?2:7)&&two&&!B[two])out.push(two)}
 for(const q of angriff(B,sq))if(B[q]&&isW(B[q])!==w)out.push(q);return out}
function ziele(fen,sq){const B=boardOf(fen),p=B[sq];if(!p)return null;if(p.toLowerCase()==='p')return bauerZiele(B,sq);const w=isW(p);
 let z=angriff(B,sq).filter(q=>!B[q]||isW(B[q])!==w);
 if(p.toLowerCase()==='k'){const C={...B};delete C[sq];const att=angegriffen(C,!w);z=z.filter(q=>!att.has(q))}return z}
const WERT={p:1,n:3,b:3,r:5,q:9,k:1000},V=p=>WERT[p.toLowerCase()];
// Static Exchange Evaluation: Materialbilanz, wenn auf „nach“ geschlagen und mit der jeweils kleinsten Figur zurückgeschlagen wird
function see(B,von,nach){const b={...B},gain=[V(b[nach])];let d=0,mover=von,side=isW(b[von]);
 for(;;){d++;gain[d]=V(b[mover])-gain[d-1];b[nach]=b[mover];delete b[mover];side=!side;
  const att=Object.keys(b).filter(q=>q!==nach&&isW(b[q])===side&&angriff(b,q).includes(nach)).sort((x,y)=>V(b[x])-V(b[y]));
  if(!att.length)break;
  if(b[att[0]].toLowerCase()==='k'){const c={...b};c[nach]=c[att[0]];delete c[att[0]];if(Object.keys(c).some(q=>q!==nach&&isW(c[q])===!side&&angriff(c,q).includes(nach)))break}
  mover=att[0]}
 while(--d>0)gain[d-1]=-Math.max(-gain[d-1],gain[d]);return gain[0]}
function schlagWerte(B,w){const out={};for(const v of Object.keys(B))if(isW(B[v])===w)for(const x of angriff(B,v))if(B[x]&&isW(B[x])!==w&&B[x].toLowerCase()!=='k'&&(B[v].toLowerCase()!=='p'||true)){const e=see(B,v,x);out[x]=Math.max(out[x]??-99,e)}return out}
function pruefZiele(fen,P,zug,rechte,ep){const B=boardOf(fen);
 if(P.flucht||P.zwischen||P.schlagen||P.matt||P.abwehr||P.schachgeber||P.ziehbar||P.mattfigur||P.rochade||P.legal||P.epschlaeger||P.patt){let g;try{g=new Chess(fen+' '+(zug||'w')+' '+(rechte||'-')+' '+(ep||'-')+' 0 1')}catch(e){return null}
  const ms=g.moves({verbose:true}),w=(zug||'w')==='w',ksq=Object.keys(B).find(q=>B[q]===(w?'K':'k'));
  const geber=Object.keys(B).filter(q=>isW(B[q])!==w&&angriff(B,q).includes(ksq));
  if(P.schachgeber)return geber;
  if(P.flucht)return ms.filter(m=>m.piece==='k').map(m=>m.to);
  if(P.zwischen)return [...new Set(ms.filter(m=>m.piece!=='k'&&!geber.includes(m.to)).map(m=>m.to))];
  if(P.schlagen)return [...new Set(ms.filter(m=>geber.includes(m.to)).map(m=>m.from))];
  if(P.abwehr)return [...new Set(ms.map(m=>m.from))];
  if(P.legal)return ms.filter(m=>m.from===P.legal).map(m=>m.to);
  if(P.epschlaeger)return [...new Set(ms.filter(m=>m.flags.includes('e')).map(m=>m.from))];
  if(P.patt)return [...new Set(ms.filter(m=>(P.patt===true||m.from===P.patt)).filter(m=>{const h=new Chess(g.fen());h.move(m);return h.isStalemate()}).map(m=>m.to))];
  if(P.rochade)return ms.filter(m=>/[kq]/.test(m.flags)).map(m=>m.to);
  if(P.ziehbar)return [...new Set(ms.filter(m=>!P.typen||P.typen.includes(m.piece)).map(m=>m.from))];
  if(P.mattfigur)return [...new Set(ms.filter(m=>{const h=new Chess(g.fen());h.move(m);return h.isCheckmate()}).map(m=>m.from))];
  if(P.matt)return [...new Set(ms.filter(m=>{const h=new Chess(g.fen());h.move(m);return h.isCheckmate()}).map(m=>m.to))]}
 if(P.zuege){let z=ziele(fen,P.zuege);if(P.reihe)z=z.filter(q=>+q[1]===P.reihe);return z}
 if(P.schlaege)return [...new Set(P.schlaege.flatMap(s=>ziele(fen,s).filter(q=>B[q])))];
 if(P.beide){const [a,b]=P.beide.map(s=>new Set(ziele(fen,s)));return [...a].filter(q=>b.has(q))}
 if(P.farbe){const dk=q=>('abcdefgh'.indexOf(q[0])+ +q[1])%2;return [...'abcdefgh'].map(f=>f+P.reihe).filter(q=>q!==P.farbe&&dk(q)===dk(P.farbe))}
 if(P.verboten){const k=P.verboten,frei=new Set(ziele(fen,k));return angriff(B,k).filter(q=>!(B[q]&&isW(B[q])===isW(B[k]))&&!frei.has(q))}
 if(P.erreichen){const w=P.weiss!==false;return Object.keys(B).filter(q=>isW(B[q])===w&&(ziele(fen,q)||[]).includes(P.erreichen))}
 const bauern=()=>Object.keys(B).filter(q=>B[q]==='P');
 if(P.doppelschritt)return bauern().filter(q=>ziele(fen,q).some(x=>+x[1]===+q[1]+2));
 if(P.umwandeln)return bauern().filter(q=>ziele(fen,q).some(x=>x[1]==='8'));
 if(P.blockiert)return bauern().filter(q=>!ziele(fen,q).length);
 const eigene=w=>Object.keys(B).filter(q=>isW(B[q])===w&&B[q].toLowerCase()!=='k');
 const gedecktQ=q=>Object.keys(B).some(r=>r!==q&&isW(B[r])===isW(B[q])&&angriff(B,r).includes(q));
 const nach=(von,x)=>{const C={...B};const p=C[von];delete C[von];C[x]=p;return C};
 if(P.angegriffen){const w=P.angegriffen==='w',att=angegriffen(B,!w);return eigene(w).filter(q=>att.has(q))}
 if(P.gedeckt){const w=P.gedeckt==='w';return eigene(w).filter(gedecktQ)}
 if(P.haengt){const w=P.haengt==='w',att=angegriffen(B,!w);return eigene(w).filter(q=>att.has(q)&&!gedecktQ(q))}
 if(P.verteidiger){const z=P.verteidiger;return Object.keys(B).filter(r=>r!==z&&isW(B[r])===isW(B[z])&&angriff(B,r).includes(z))}
 if(P.sicher){const v=P.sicher,w=isW(B[v]);let z=ziele(fen,v).filter(x=>!angegriffen(nach(v,x),!w).has(x));if(P.reihe)z=z.filter(q=>+q[1]===P.reihe);if(P.linie)z=z.filter(q=>q[0]===P.linie);return z}
 if(P.deckzug){const {figuren,ziel}=P.deckzug;return [...new Set(figuren.flatMap(v=>ziele(fen,v).filter(x=>x!==ziel&&angriff(nach(v,x),x).includes(ziel))))]}
 if(P.decker){const z=P.decker;return Object.keys(B).filter(v=>v!==z&&isW(B[v])===isW(B[z])&&ziele(fen,v).some(x=>x!==z&&angriff(nach(v,x),x).includes(z)))}
 if(P.gewinn){const m=schlagWerte(B,P.gewinn==='w');return Object.keys(m).filter(x=>m[x]>0)}
 if(P.beste){const m=schlagWerte(B,P.beste==='w'),best=Math.max(...Object.values(m));return Object.keys(m).filter(x=>m[x]===best)}
 if(P.illegal){const out=new Set(),ks=Object.keys(B).filter(q=>B[q].toLowerCase()==='k');
  for(const q of Object.keys(B))if(B[q].toLowerCase()==='p'&&/[18]/.test(q[1]))out.add(q);
  for(const w of [true,false]){const k=ks.filter(q=>isW(B[q])===w);if(k.length>1)k.forEach(q=>out.add(q))}
  const kw=ks.find(q=>B[q]==='K'),kb=ks.find(q=>B[q]==='k');if(kw&&kb&&Math.abs('abcdefgh'.indexOf(kw[0])-'abcdefgh'.indexOf(kb[0]))<=1&&Math.abs(+kw[1]-+kb[1])<=1){out.add(kw);out.add(kb)}
  const amZug=(zug||'w')==='w',kn=ks.find(q=>isW(B[q])!==amZug);if(kn&&angegriffen(B,amZug).has(kn))out.add(kn);
  return [...out]}
 if(P.staerkste||P.schwaechste){const typ=P.staerkste||P.schwaechste,qs=Object.keys(B).filter(q=>B[q]===typ),n=q=>ziele(fen,q).length,best=(P.staerkste?Math.max:Math.min)(...qs.map(n));return qs.filter(q=>n(q)===best)}
 const vor=(q,w)=>Object.keys(B).filter(x=>B[x]===(w?'p':'P')&&Math.abs('abcdefgh'.indexOf(x[0])-'abcdefgh'.indexOf(q[0]))<=1&&(w?+x[1]>+q[1]:+x[1]<+q[1]));
 if(P.freibauer){const w=P.freibauer==='w';return Object.keys(B).filter(q=>B[q]===(w?'P':'p')&&!vor(q,w).length)}
 if(P.aufhalter){const q=P.aufhalter;return vor(q,isW(B[q]))}
 if(P.stoerer){const w=(zug||'w')==='w',r=w?'1':'8',pfad={kurz:['e','f','g'],lang:['e','d','c']},fl=P.stoerer==='beide'?['e','f','g','d','c']:pfad[P.stoerer],sq=fl.map(f=>f+r);
  return Object.keys(B).filter(q=>isW(B[q])!==w&&angriff(B,q).some(x=>sq.includes(x)))}
 if(P.ueber){const [von,nach]=P.ueber,p=B[von];return ziele(fen,von).filter(x=>{const C={...B};delete C[von];C[x]=p;return angriff(C,x).includes(nach)&&!C[nach]})}
 return null}
for(const [w,F] of Object.entries(FIXED)){if(!PLAN.find(x=>x[0]===+w))err('Feste Stunde ohne Woche '+w);
 for(const f of ['thema','lernziel','leitfrage','vorwissen','umfang','nachher'])if(!F[f])err(`W${w}: ${f} fehlt`);
 for(const f of ['hilfe','zusatz','kuerzen'])if(!F.hinweise?.[f])err(`W${w}: Hinweis ${f} fehlt`);
 const alles=F.phasen.flatMap(p=>p.ablauf).join(' ');
 if(!/wechseln die Rollen/.test(alles))err(`W${w}: Partnerarbeit ohne „Danach wechseln die Rollen“`);
 if(!/Warum|Woran erkennst du/.test(alles))err(`W${w}: keine Begründungsfrage im Ablauf`);
 for(const [set,list] of Object.entries(F.feld||{}))list.forEach((t,i)=>{if(!t.fen||t.pruef?.illegal||t.illegal)return;const B=boardOf(t.fen);for(const [q,p] of Object.entries(B))if(p.toLowerCase()==='k'&&angegriffen(B,!isW(p)).has(q)&&!(t.schach&&isW(p)===((t.zug||'w')==='w')))err(`W${w} ${set}${i+1}: König ${q} steht im Schach`)});
 for(const [set,list] of Object.entries(F.feld||{}))list.forEach((t,i)=>{if(!t.tausch)return;const B=boardOf(t.fen),z=t.tausch.zug,e=see(B,z.slice(0,2),z.slice(2,4)),soll=t.tausch.ergebnis;
  if((soll==='gut'&&!(e>0))||(soll==='schlecht'&&!(e<0))||(soll==='gleich'&&e!==0))err(`W${w} ${set}${i+1}: Tausch ${z} ist ${e}, erwartet ${soll}`)});
 for(const [set,list] of Object.entries(F.feld||{}))list.forEach((t,i)=>{if(!t.pruef)return;const z=pruefZiele(t.fen,t.pruef,t.zug,t.rechte,t.ep);if(!z){err(`W${w} ${set}${i+1}: Prüfung nicht berechenbar`);return}
  if(t.targets==null)t.targets=z;else if([...t.targets].sort().join()!==[...z].sort().join())err(`W${w} ${set}${i+1}: Lösung ${t.targets} stimmt nicht, berechnet ${z}`);delete t.pruef});
 if(F.phasen.length!==6)err(`W${w}: sechs Phasen erwartet`);
 for(const p of F.phasen){if(!p.ablauf?.length||!p.kinder||!p.titel)err(`W${w} ${p.name}: Text fehlt`);if(!p.links?.length)err(`W${w} ${p.name}: kein Material-Link`);
  for(const l of p.links){if(l.art==='feld'&&!F.feld?.[l.set])err(`W${w}: Feldaufgaben ${l.set} fehlen`);if(l.art==='spiel'&&!['rettung'].includes(l.was))err(`W${w}: unbekanntes Spiel ${l.was}`);if(l.art==='brett'&&Array.isArray(l.aufgaben))for(const k of l.aufgaben)resolve(k)}}
 const key=t=>t.targets?[...t.targets].sort().join(','):'offen:'+t.frage;
 const six=(set,von,bis,wo)=>{const list=(F.feld[set]||[]).slice((von||1)-1,bis||undefined);if(list.length!==6)err(`W${w} ${wo}: ${set} hat ${list.length} statt 6 Aufgaben`);
  const seen=new Map();list.forEach((t,i)=>{for(const k of [key(t)+'|'+(t.fen||''),t.frage]){if(seen.has(k))err(`W${w} ${wo}: ${set}${(von||1)+i} wiederholt ${seen.get(k)}`);seen.set(k,set+((von||1)+i))}})};
 for(const p of F.phasen)for(const l of p.links){if(l.art==='feld')six(l.set,l.von,l.bis,'Lehrbrett '+p.name);if(l.art==='druck'&&l.was.startsWith('feld:'))six(l.was.slice(5),0,0,'Blatt '+l.label)}
 if(F.geschichte)six('S',0,0,'Fragen zur Geschichte');
 for(const p of F.phasen)for(const l of p.links)if(l.art==='druck'&&!l.was.startsWith('feld:')&&!['regeln','geschichte','arbeitsheft','aufbaukarte','beobachtung','werte','fairplay','ergebnisliste','nachweis','urkunde','rochade','enpassant','remis','damematt','turnierkarte','sternbaum','notation','partieformular','schachuhr','meisterliste','meisterurkunde','fesselung','gabel'].includes(l.was))err(`W${w}: unbekannter Druck ${l.was}`);
 if(F.phasen.some(p=>p.links.some(l=>l.was==='arbeitsheft'))&&!F.arbeitsheft)err(`W${w}: Arbeitsheft fehlt`);
 if(F.phasen.some(p=>p.links.some(l=>l.was==='regeln'))&&!F.regeln)err(`W${w}: Regeln fehlen`);
 for(const [set,list] of Object.entries(F.feld||{}))list.forEach((t,i)=>{const id=`W${w} ${set}${i+1}`;if(!t.frage||!t.antwort||t.hilfe?.length!==2)err(id+': Frage, Antwort oder zwei Hilfen fehlen');
  if(t.targets)for(const q of t.targets)if(!SQ.test(q))err(id+': Feld '+q);
  if(t.fen){const rows=t.fen.split('/');if(rows.length!==8||rows.some(r=>[...r].reduce((n,c)=>n+(/\d/.test(c)?+c:1),0)!==8))err(id+': Stellung ungültig');
   const occ=new Set();rows.forEach((r,ri)=>{let f=0;for(const c of r){if(/\d/.test(c))f+=+c;else{occ.add('abcdefgh'[f]+(8-ri));f++}}});if(t.targets&&!t.leer&&/Figur|Türme|Läufer/.test(t.frage))for(const q of t.targets)if(!occ.has(q))err(id+': Zielfeld '+q+' ohne Figur')}})
 for(const k of F.arbeitsheft||[])for(const q of [...Object.keys(k.fill||{}),...Object.keys(k.label||{}),...Object.keys(k.loesung?.fill||{})])if(!SQ.test(q))err(`W${w} Arbeitsheft: Feld ${q}`);
 if(F.audio&&!fs.existsSync(path.join(dist,F.audio)))err(`W${w}: Audio fehlt`);
 for(const p of F.phasen)for(const l of p.links)if(l.art==='druck'&&l.was.startsWith('feld:')&&!F.feld[l.was.slice(5)])err(`W${w}: Druck ${l.was}`)}
// Lerncheck-Aufgaben nirgends sonst im Jahr
const lcAll=LESSONS.flatMap(L=>L.lerncheck.aufgaben.map(k=>[k,L.week]));
for(const [k,w] of lcAll)for(const L of LESSONS)for(const p of PH)if(!(L.week===w&&p==='lerncheck')&&L[p].aufgaben.includes(k))err(`Lerncheck ${k} (W${w}) taucht in W${L.week} ${p} auf`);
const out={version:2,links:LINKS,urls:URLS,fixed:FIXED,year:YEAR,later:LATER,plan:PLAN,lessons:LESSONS,tasks:Object.fromEntries(Object.entries(TASKS).map(([k,t])=>[k,{id:t.id,fen:t.fen,work:t.work,answer:t.answer,checks:t.checks||[],forbidden:t.forbidden||[],strict:!!t.strict,open:!!t.open,hints:t.hints,src:t.src,umgebaut:!!t.umgebaut}])),collect:COLLECT};
const report={tasks:Object.keys(TASKS).length,lessons:LESSONS.length,errors,umgebaut:Object.values(TASKS).filter(t=>t.umgebaut).map(t=>t.key)};
fs.writeFileSync(path.join(here,'report-bronze.json'),JSON.stringify(report,null,1));
if(errors.length){console.error(errors.join('\n'));console.error(errors.length+' Fehler');process.exit(1)}
fs.writeFileSync(path.join(dist,'jahresplan-data.js'),'/* Jahresplan Schach-AG: Material-Pools. © Dr. Edmund Bruns. Erzeugt von jp/build-jahresplan.mjs */\nwindow.JahresplanData='+JSON.stringify(out)+';\n');
console.log('Jahresplan gebaut: '+report.lessons+' Stunden, '+report.tasks+' Brettaufgaben, umgebaut: '+report.umgebaut.length);
