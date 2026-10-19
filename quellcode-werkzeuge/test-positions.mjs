// Prüft jede Stellung im Programm: Themen, Stufen, Dauern, Einheiten, Kontrastpaare, Methodenbeispiele, Lichess.
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
import {Chess,validateFen} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob,Chess};vm.createContext(ctx);
for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis','diplom-lessons'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const W=ctx.window,C=W.PlannerCore,U=W.LessonUnits,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
const FENRE=/^([rnbqkpRNBQKP1-8]+\/){7}[rnbqkpRNBQKP1-8]+ [wb] (-|[KQkq]+) (-|[a-h][36]) \d+ \d+$/;const items=new Map();
const add=(src,o)=>{if(!o||typeof o.fen!=='string'||!FENRE.test(o.fen.trim()))return;const k=o.fen+'|'+(o.id||'');if(!items.has(k))items.set(k,{src,...o})};
const visit=(p,l)=>{for(const s of p.sessions){for(const x of s.exercises||[])add(l,x);for(const ph of s.phases){for(const x of ph.contrast?.items||[])add(l+':kontrast',x);if(ph.game)add(l+':spiel',{id:'spiel',fen:ph.game.fen})}}};
for(const t of Object.keys(C.topics))for(const level of ['Anfänger','Grundkenntnisse','Fortgeschrittene'])for(const duration of [30,45,60,90])visit(C.generate({...C.defaultSettings(),topic:t,level,duration},pz),'plan:'+t);
for(const u of U.units)visit(U.create(u,pz,12),'einheit:'+u.id);
for(const m of C.methods)for(const [i,e] of (W.TeachingSupport.examples(m,pz)||[]).entries())add('methode:'+m.id,{...e,id:'methode-'+m.id+'-'+i});
const seen=new WeakSet();const crawl=(o,path,d)=>{if(!o||typeof o!=='object'||seen.has(o)||d>8)return;seen.add(o);if(typeof o.fen==='string')add('daten:'+path,o);for(const [k,v] of Object.entries(o)){if(typeof v==='string'&&FENRE.test(v.trim()))add('daten:'+path+'.'+k,{id:path+'.'+k,fen:v.trim()});else if(v&&typeof v==='object')crawl(v,path+'.'+k,d+1)}};
for(const k of Object.keys(W))crawl(W[k],k,0);
for(const q of pz)add('lichess',{id:q.PuzzleId,fen:q.FEN,lines:[q.Moves.split(' ')]});
const code=m=>m.from+m.to+(m.promotion||'');const errors=[];let half=0;
for(const it of items.values()){const where=it.src+' '+it.id+' '+it.fen;const v=validateFen(it.fen);if(!v.ok){errors.push(where+': '+v.error);continue}const g=new Chess(it.fen);const B=g.board().flat().filter(Boolean);
for(const c of ['w','b'])if(B.filter(p=>p.type==='k'&&p.color===c).length!==1)errors.push(where+': Anzahl Könige');
if(B.some(p=>p.type==='p'&&/[18]/.test(p.square[1])))errors.push(where+': Bauer auf Grundreihe');
const f=it.fen.split(' ');const o=[...f];o[1]=f[1]==='w'?'b':'w';o[3]='-';if(new Chess(o.join(' ')).inCheck())errors.push(where+': Seite nicht am Zug steht im Schach');
const home={K:['e1','w','h1'],Q:['e1','w','a1'],k:['e8','b','h8'],q:['e8','b','a8']};if(f[2]!=='-')for(const c of f[2]){const [ks,col,rs]=home[c];const K=g.get(ks),R=g.get(rs);if(!(K?.type==='k'&&K.color===col&&R?.type==='r'&&R.color===col))errors.push(where+': Rochaderecht '+c+' ohne König/Turm')}
if(f[3]!=='-'){const sq=f[3][0]+(+f[3][1]+(g.turn()==='w'?-1:1));const P=g.get(sq);if(!(P?.type==='p'&&P.color!==g.turn()))errors.push(where+': En-passant-Feld ohne Bauern')}
const legal=new Set(g.moves({verbose:true}).map(code));for(const c of [...(it.checks||[]),...(it.solution||[])])if(!legal.has(c))errors.push(where+': Zug '+c+' nicht legal');
for(const l of it.lines||[]){const h=new Chess(it.fen);for(const c of l){try{h.move({from:c.slice(0,2),to:c.slice(2,4),promotion:c[4]});half++}catch(e){errors.push(where+': Zugfolge bricht bei '+c);break}}}}
assert.deepEqual(errors,[],errors.join('\n'));
console.log(items.size+' Stellungen regelgerecht (je ein König, kein Bauer auf Reihe 1/8, Gegenseite nicht im Schach, Rochade- und En-passant-Rechte), '+half+' Halbzüge legal');
