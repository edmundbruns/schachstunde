// Schritt 3 und 4: Lerncheck passt zum Thema, Aufgabe 1 und 2 reduziert, Lichess-Wertung je Stufe.
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
import {Chess} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob,Chess};vm.createContext(ctx);
for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis','diplom-lessons'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const C=ctx.window.PlannerCore,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
const byId=Object.fromEntries(pz.map(p=>[p.PuzzleId,p]));
const pieces=fen=>fen.split(' ')[0].replace(/[^a-zA-Z]/g,'').length;
const TACT=['mateIn1','hangingPiece','pin','discoveredAttack','mateIn2','calculation'];
let n=0;
for(const topic of TACT)for(const level of ['Anfänger','Grundkenntnisse','Fortgeschrittene'])for(const duration of [30,45,60,90]){
  const p=C.generate({...C.defaultSettings(),topic,level,duration},pz),s=p.sessions[0];if(s.diplom)continue;
  assert(Array.isArray(s.exercises)&&s.exercises.length===7,topic+': sieben Aufgaben');
  assert.equal(s.checkId,null);assert.equal(s.puzzleIds.length,0);
  for(const i of [0,1])assert(pieces(s.exercises[i].fen)<=10,topic+' Aufgabe '+(i+1)+' hat mehr als 10 Figuren');
  const lc=s.exercises[6];assert(/^Lerncheck/.test(lc.work),topic+': Lerncheck-Auftrag');
  if(lc.PuzzleId)assert.equal(byId[lc.PuzzleId].category,topic,topic+': Lerncheck-Kategorie = Thema');
  else assert(lc.id.startsWith(topic+'-'),topic+': eigener Lerncheck des Themas');
  const ids=s.exercises.map(x=>x.PuzzleId).filter(Boolean);assert.equal(new Set(ids).size,ids.length,'keine doppelten Lichess-Aufgaben');
  for(const x of s.exercises){const g=new Chess(x.fen);for(const line of x.lines||[])for(const m of line)assert(g.move({from:m.slice(0,2),to:m.slice(2,4),promotion:m[4]||'q'}),topic+' '+x.id+' Zug '+m);}
  if(level!=='Fortgeschrittene')for(const id of ids)assert(+byId[id].Rating<=1300,topic+' '+level+': Wertung '+byId[id].Rating);
  const lcPhase=s.phases.find(ph=>ph.name==='Lerncheck');assert(!lcPhase||(lcPhase.exerciseIds||[]).includes(6));
  n++;
}
const r=C.generate({...C.defaultSettings(),topic:'castling'},pz).sessions[0].exercises[6];
assert(r.fen.startsWith('1k1r4/8/8/8/8/8/8/R3K2R'));const g=new Chess(r.fen);const castles=g.moves().filter(m=>m.startsWith('O-O'));assert.deepEqual(castles,['O-O']);
const rated=pz.filter(p=>['mateIn1','hangingPiece','fork','pin'].includes(p.category)).map(p=>+p.Rating);
assert(Math.max(...rated)<=1300,'Grundkenntnisse-Kategorien bis 1300');
console.log(n+' Taktikpläne: Aufgabe 1 und 2 höchstens 10 Figuren, Lerncheck passt zum Thema, Lichess-Wertung unterhalb Fortgeschrittene höchstens 1300; Rochade-Lerncheck mit erlaubter und verbotener Rochade geprüft.');
