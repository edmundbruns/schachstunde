// Jahresplan mit Material-Pools: Regeln, Stellungen und (mit STOCKFISH) Tausch-Aussagen prüfen. © Dr. Edmund Bruns
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';import {execSync,spawnSync} from 'node:child_process';
import {Chess} from './dist/assets/chess.mjs';
const r=spawnSync('node',['jp/build-jahresplan.mjs'],{encoding:'utf8'});if(r.status){console.error(r.stderr);process.exit(1)}
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/jahresplan-data.js','utf8'),ctx);const D=ctx.window.JahresplanData;
assert.equal(D.lessons.length,11,'Bronze: 11 Wochen');assert.deepEqual(D.lessons.map(l=>l.week),[1,2,3,4,5,6,7,8,9,10,11]);
let n=0;for(const [k,t] of Object.entries(D.tasks)){const g=new Chess(t.fen);const code=m=>m.from+m.to+(m.promotion||'');const legal=g.moves({verbose:true}).map(code);
 for(const c of t.checks)assert(legal.includes(c),k+' '+c);assert(t.hints.length===2&&t.src,k);n++}
for(const l of D.lessons){for(const p of ['erarbeitung','uebung','sicherung','ausblick'])assert(new Set(l[p].aufgaben).size>=6,l.week+' '+p);assert(l.lerncheck.aufgaben.length>=3);assert(new Set(l.einstieg.map(b=>b.art)).size>=3)}
// Der Baustein-Text nennt Aufgabennummern, die es in der Phase gibt
const pre={erarbeitung:'E',uebung:'U',sicherung:'S',lerncheck:'L',ausblick:'A'};
for(const l of D.lessons)for(const [p,c] of Object.entries(pre))for(const b of l[p].bausteine)for(const m of b.lk.matchAll(new RegExp('\\b'+c+'(\\d+)\\b','g')))assert(+m[1]<=l[p].aufgaben.length,`W${l.week} ${p}: ${c}${m[1]} gibt es nicht`);
let sf=0;
if(process.env.STOCKFISH){const ev=(fen,mv)=>{const o=execSync(`(echo "position fen ${fen}"; echo "go depth 16${mv?' searchmoves '+mv:''}"; sleep 1; echo quit) | ${process.env.STOCKFISH}`).toString();const l=o.split('\n').filter(x=>/ score /.test(x)).pop();const m=l.match(/score (cp|mate) (-?\d+)/);return m[1]==='mate'?(+m[2]>0?10000:-10000):+m[2]};
 for(const [k,t] of Object.entries(D.tasks).filter(([k])=>/^(tx|k1|sg|t1)-/.test(k))){if(/^Guter Tausch/.test(t.answer)){assert(ev(t.fen,t.checks[0])>=100,k+' guter Tausch');sf++}
  if(/^Schlechter Tausch|^Nein\. .*(gibt|Dame \(9\)|Turm \(5\))/.test(t.answer)&&t.forbidden.length){const best=ev(t.fen),bad=ev(t.fen,t.forbidden[0]);assert(best-bad>=150,k+' schlechter Tausch '+best+' '+bad);sf++}}}
for(const [w,F] of Object.entries(D.fixed)){assert.equal(F.phasen.length,6,"Woche "+w+" sechs Phasen");assert(!F.phasen.some(p=>"min" in p),"keine Zeitangaben")}
// Königliche Rettung: Fragen der Kinder als Satz
vm.runInContext(fs.readFileSync('dist/jahresplan.js','utf8'),ctx);const P=ctx.window.Jahresplan._parse;
const fr=(t,n)=>{const r=P(t);assert(r.ok&&r.set.size===n,t+' → '+r.text+' '+r.set.size)};
fr('Steht der König auf einem Zentrumsfeld oder ist er am Damenflügel?',34);fr('Steht er auf der vierten Reihe?',8);fr('Steht er auf einem dunklen Feld und nicht am Rand?',18);
fr('Ist er links von der e-Linie und auf einem hellen Feld?',16);fr('Ist er auf der Diagonale von a1 nach h8?',8);fr('Steht er auf der b-Linie oder der 7. Reihe?',15);assert(!P('Mag der König Pizza?').ok);
console.log(`Feste Stundenverläufe: ${Object.keys(D.fixed).length}. Jahresplan Bronze: ${D.lessons.length} Wochen, ${n} Brettaufgaben regelgerecht, Pools vollständig, Aufgabennummern stimmen`+(sf?`, ${sf} Tausch-Aussagen mit Stockfish bestätigt`:''));
