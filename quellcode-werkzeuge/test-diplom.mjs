// Diplom-Stunden: Material aus dem Ludgerus-Schachdiplom, mindestens 6 Brettaufgaben je Zeile, kurze Zeilentexte, abwechslungsreiche Einstiege.
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
import {Chess} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob,Chess};vm.createContext(ctx);
for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis','diplom-lessons'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const W=ctx.window,C=W.PlannerCore,U=W.LessonUnits,D=W.DiplomLessons,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
// Stellungen und Lösungszüge
let pos=0;for(const [k,v] of [...Object.entries(D.L),['stunde0',D.S0]])v.tasks.forEach((x,i)=>{const g=new Chess(x.fen);const leg=g.moves({verbose:true}).map(m=>m.from+m.to);for(const c of [...x.checks,...x.forbidden])assert(leg.includes(c),k+' '+i+' Zug '+c);if(/matt/i.test(x.work)&&!/Schach oder|Ist .* Matt|ist es auch Matt|zu Ende/i.test(x.work))for(const c of x.checks){const h=new Chess(x.fen);h.move({from:c.slice(0,2),to:c.slice(2,4),promotion:'q'});assert(h.isCheckmate(),k+' '+i+' kein Matt '+c)}assert(x.src,k+' '+i+' Quelle');pos++});
// Pläne
const check=(s,where)=>{assert(s.diplom,where+' Diplom');for(const ph of s.phases){const ids=ph.exerciseIds||[];assert(ids.length>=6,where+' '+ph.name+': nur '+ids.length+' Brettaufgaben');for(const i of ids)assert(s.exercises[i]&&s.exercises[i].boardLabel,where+' '+ph.name+' Aufgabe '+i);assert(ph.scan_teacher.length<=260,where+' '+ph.name+' Lehrkraft-Text zu lang: '+ph.scan_teacher.length);assert(ph.scan_learners.length<=140,where+' '+ph.name+' Lernende-Text zu lang')}
 const o=s.phases.find(ph=>ph.name.startsWith('Ausblick'));if(o&&!s.phases.some(ph=>ph.name==='Rituale einüben'))assert(o.exerciseIds.every(i=>/^Wiederholung W\d$/.test(s.exercises[i].boardLabel)||s.topic.startsWith('maze')),where+' Wiederholung im Ausblick');
 assert(s.exercises.slice(0,6).every(x=>x.labyrinth||x.hints?.length>=2),where+' Hilfekarten');assert.equal(s.puzzleIds.length,0)};
let n=0;const topics=[...Object.keys(D.L),'maze-basic','maze-build'];
for(const topic of topics)for(const level of ['Anfänger','Grundkenntnisse'])for(const duration of [30,45,60,90])for(const group of [1,12]){const p=C.generate({...C.defaultSettings(),topic,level,duration,group},pz);check(p.sessions[0],topic+'/'+level+'/'+duration+'/'+group);assert.equal(p.sessions[0].phases.reduce((a,x)=>a+x.duration,0),duration);n++}
// Jahresplan Bronze: Einheiten und Einstiege
const bronze=W.Praxis.YEAR[0][2].map(r=>r[0]).filter(Boolean);const kinds=new Set();for(const id of bronze){const u=U.units.find(x=>x.id===id);const s=U.create(u,pz).sessions[0];check(s,id);if(s.entryType)kinds.add(s.entryType)}
assert(kinds.size>=3,'Einstiege abwechslungsreich: '+[...kinds]);
// Arbeitsblatt-Nummern = Brett-Nummern
const s=C.generate({...C.defaultSettings(),topic:'moves',level:'Grundkenntnisse'},pz).sessions[0];s.exercises.slice(0,6).forEach((x,i)=>assert.equal(x.boardLabel,'Aufgabe '+(i+1)));assert.equal(s.exercises[6].boardLabel,'Lerncheck');
console.log(pos+' Diplom-Stellungen geprüft; '+n+' Pläne und '+bronze.length+' Bronze-Einheiten: je Zeile mindestens 6 Brettaufgaben, kurze Texte, Wiederholung im Ausblick, Einstiege: '+[...kinds].join(', ')+'.');
