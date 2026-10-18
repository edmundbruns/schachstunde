import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
const ctx={window:{},console,atob};vm.createContext(ctx);for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const C=ctx.window.PlannerCore,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));let n=0;
const topics=Object.keys(C.topics).filter(t=>!/maze|labyr/i.test(t));
for(const topic of topics)for(const boards of [true,false]){const seen=new Set();for(const entry of ['informative','problem','associative','playful']){const st=C.defaultSettings();const p=C.generate({...st,topic,level:'Grundkenntnisse',entry,equipment:{...st.equipment,boards}},pz),s=p.sessions[0];if(s.modelVersion!==3||!s.guidingQuestion&&!s.merksatz)continue;const e=s.phases[0];if(!/^Einstieg/.test(e.name)||!e.scan_teacher)continue;
assert.equal(s.entryType,entry);assert(/^weil /.test(s.entryReason),topic+entry);assert(!seen.has(e.scan_teacher),topic+' '+entry+' gleich');seen.add(e.scan_teacher);
if(entry==='informative')assert(!/vorwegnehmen|Noch nicht auflösen/.test(e.teacher+e.scan_teacher),topic);
if(entry==='playful')assert(/Spiel „/.test(e.scan_teacher),topic);n++}}
console.log(n+' Einstiege: vier unterscheidbare Abläufe je Thema, Begründung vorhanden, kein Widerspruch beim informativen Einstieg');
const P=ctx.window.PlanningExtensions;let m=0;const kinds={};
for(const topic of topics)for(let pi=0;pi<6;pi++){for(const duration of [30,45,60,90]){const s=C.generate({...C.defaultSettings(),topic,duration,prior:P.PRIOR[pi]},pz).sessions[0];if(!s.merksatz||s.stunde0)continue;
assert.equal(s.phases.reduce((a,x)=>a+x.duration,0),duration,topic+pi+duration);assert(s.phases.every(x=>x.duration>=1));const f=s.fit;kinds[f]=(kinds[f]||0)+1;const u=s.phases.find(x=>x.name==='Übung'),e=s.phases[0];
if(f==='under'){assert(/Wiederholung/.test(e.scan_teacher),topic);assert(/freiwillig/.test(u.scan_learners),topic);assert.equal(s.entryType,'informative')}
if(f==='over'){assert(/Profi-Aufgabe/.test(u.scan_learners),topic)}if(f==='mixed')assert(/Paare nach Spielstärke/.test(u.scan_teacher),topic);if(f!=='fit')assert(s.fitNote);m++}}
console.log(m+' Pläne: Anpassung an das Vorwissen geprüft',JSON.stringify(kinds));
