// Baut dist/jahresplan-data.js aus den Pools und prüft alle Regeln. Aufruf: node jp/build-jahresplan.mjs
// © Dr. Edmund Bruns
import fs from 'node:fs';import vm from 'node:vm';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {Chess} from '../dist/assets/chess.mjs';
import {EXTRA,M1_WORK,M1_HINTS,DL_HINTS} from './tasks-bronze.mjs';import {LESSONS,LINKS} from './lessons-bronze.mjs';
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
// Lerncheck-Aufgaben nirgends sonst im Jahr
const lcAll=LESSONS.flatMap(L=>L.lerncheck.aufgaben.map(k=>[k,L.week]));
for(const [k,w] of lcAll)for(const L of LESSONS)for(const p of PH)if(!(L.week===w&&p==='lerncheck')&&L[p].aufgaben.includes(k))err(`Lerncheck ${k} (W${w}) taucht in W${L.week} ${p} auf`);
const out={version:1,links:LINKS,lessons:LESSONS,tasks:Object.fromEntries(Object.entries(TASKS).map(([k,t])=>[k,{id:t.id,fen:t.fen,work:t.work,answer:t.answer,checks:t.checks||[],forbidden:t.forbidden||[],strict:!!t.strict,open:!!t.open,hints:t.hints,src:t.src,umgebaut:!!t.umgebaut}])),collect:COLLECT};
const report={tasks:Object.keys(TASKS).length,lessons:LESSONS.length,errors,umgebaut:Object.values(TASKS).filter(t=>t.umgebaut).map(t=>t.key)};
fs.writeFileSync(path.join(here,'report-bronze.json'),JSON.stringify(report,null,1));
if(errors.length){console.error(errors.join('\n'));console.error(errors.length+' Fehler');process.exit(1)}
fs.writeFileSync(path.join(dist,'jahresplan-data.js'),'/* Jahresplan Schach-AG: Material-Pools. © Dr. Edmund Bruns. Erzeugt von jp/build-jahresplan.mjs */\nwindow.JahresplanData='+JSON.stringify(out)+';\n');
console.log('Jahresplan gebaut: '+report.lessons+' Stunden, '+report.tasks+' Brettaufgaben, umgebaut: '+report.umgebaut.length);
