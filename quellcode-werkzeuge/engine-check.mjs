// Einmaliges Prüfskript: Aufgaben mit Bewertungsaussagen gegen Stockfish prüfen.
// Aufruf: STOCKFISH=/usr/games/stockfish node engine-check.mjs   (Stockfish 16, Tiefe 16)
import fs from 'node:fs';import vm from 'node:vm';import {spawn} from 'node:child_process';import {Chess} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob,Chess};vm.createContext(ctx);for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const W=ctx.window,C=W.PlannerCore,U=W.LessonUnits,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
const items=new Map();const add=x=>{if(x?.fen&&x.answer)items.set(x.fen+'|'+x.answer,x)};
for(const t of Object.keys(C.topics))for(const level of ['Anfänger','Grundkenntnisse','Fortgeschrittene']){const p=C.generate({...C.defaultSettings(),topic:t,level},pz);for(const s of p.sessions){(s.exercises||[]).forEach(add);for(const ph of s.phases)(ph.contrast?.items||[]).forEach(add)}}
for(const u of U.units)for(const s of U.create(u,pz,12).sessions)(s.exercises||[]).forEach(add);
const EVAL=/gewinnt|gewonnen|beste|stärkste|remis|verliert|Matt|matt\b|Patt/;
const sf=spawn(process.env.STOCKFISH||'/usr/games/stockfish');let buf='',wait=null;sf.stdout.on('data',d=>{buf+=d;let i;while((i=buf.indexOf('\n'))>=0){const l=buf.slice(0,i).trim();buf=buf.slice(i+1);wait&&wait(l)}});
const send=s=>sf.stdin.write(s+'\n');const go=(fen,moves)=>new Promise(r=>{let last=null;wait=l=>{const m=l.match(/score (cp|mate) (-?\d+)/);if(m)last=m[1]==='cp'?+m[2]:(+m[2]>0?10000:-10000);if(l.startsWith('bestmove')){wait=null;r({best:l.split(' ')[1],score:last})}};send('position fen '+fen);send('go depth 16'+(moves?' searchmoves '+moves.join(' '):''))});
send('uci');send('setoption name Threads value 4');
// Von Hand geprüfte Vergleichsaufgaben: Der Text erklärt ausdrücklich, warum der verlangte Zug nicht der stärkste ist.
const REVIEWED={'promotion-4':'Text nennt f8=D als sicheren Gewinn, f8=S+ als Remis','promotion-5':'Vergleich: c8=D Patt, c8=T gewinnt'};
const code=m=>m.from+m.to+(m.promotion||'');const report=[];let n=0;
for(const x of items.values()){if(!EVAL.test(x.answer))continue;const g=new Chess(x.fen);if(g.isGameOver())continue;if(REVIEWED[x.id])continue;const acc=(x.solution||x.checks||[]).filter(c=>g.moves({verbose:true}).some(m=>code(m)===c));if(!acc.length)continue;n++;
const best=await go(x.fen);for(const c of acc){const r=await go(x.fen,[c]);const drop=best.score-r.score;
if(/gewinnt|beste|stärkste/.test(x.answer)&&drop>150&&best.score>150)report.push(`${x.id}: ${c} (${r.score}) deutlich schwächer als ${best.best} (${best.score}). Text: ${x.answer.slice(0,120)}`);
if(/beste Wahl|stärkste Figur|nicht immer/.test(x.answer)&&best.best!==c)report.push(`${x.id}: Text lobt ${c}, Engine bevorzugt ${best.best} (${best.score} gegen ${r.score}). Text: ${x.answer.slice(0,120)}`)}}
send('quit');console.log(n+' Aufgaben mit Bewertungsaussage gegen Stockfish geprüft.');if(report.length){console.log(report.join('\n'));process.exitCode=1}else console.log('Keine Widersprüche zwischen Text und Engine.');
