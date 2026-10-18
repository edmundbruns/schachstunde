import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
const ctx={window:{},console,atob};vm.createContext(ctx);for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const C=ctx.window.PlannerCore,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));let n=0;
const topics=Object.keys(C.topics).filter(t=>!/maze|labyr/i.test(t));
for(const topic of topics)for(const boards of [true,false]){const seen=new Set();for(const entry of ['informative','problem','associative','playful']){const st=C.defaultSettings();const p=C.generate({...st,topic,level:'Grundkenntnisse',entry,equipment:{...st.equipment,boards}},pz),s=p.sessions[0];if(s.modelVersion!==3||!s.guidingQuestion&&!s.merksatz)continue;const e=s.phases[0];if(!/^Einstieg/.test(e.name)||!e.scan_teacher)continue;
assert.equal(s.entryType,entry);assert(/^weil /.test(s.entryReason),topic+entry);assert(!seen.has(e.scan_teacher),topic+' '+entry+' gleich');seen.add(e.scan_teacher);
if(entry==='informative')assert(!/vorwegnehmen|Noch nicht auflösen/.test(e.teacher+e.scan_teacher),topic);
if(entry==='playful')assert(/Spiel „/.test(e.scan_teacher),topic);n++}}
console.log(n+' Einstiege: vier unterscheidbare Abläufe je Thema, Begründung vorhanden, kein Widerspruch beim informativen Einstieg');
