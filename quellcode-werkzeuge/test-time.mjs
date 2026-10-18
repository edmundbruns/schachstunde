// Schritt 5: Zeitmodell 30 und 90 Minuten.
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert';
import {Chess} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob,Chess};vm.createContext(ctx);
for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support','praxis'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const C=ctx.window.PlannerCore,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
const base=n=>n.split(' · ')[0];let n=0,std=0;
for(const topic of Object.keys(C.topics))for(const entry of ['problem','informative','associative','playful'])for(const group of [1,12])for(const duration of [30,90]){
  const p=C.generate({...C.defaultSettings(),topic,entry,group,duration},pz),s=p.sessions[0];n++;
  assert.equal(s.phases.reduce((a,x)=>a+x.duration,0),duration,topic+' '+duration+': Summe');
  if(s.timeModel!==duration)continue;std++;
  const ph=name=>s.phases.find(x=>base(x.name)===name);
  if(/^maze/.test(topic)){const lc=s.phases.find(x=>x.name==='Lerncheck');if(duration===30)assert(s.phases[1].duration>=6&&s.phases[0].duration>=4);else assert(lc.duration<=8)}
  else if(duration===30){assert(ph('Einstieg').duration>=4);assert(ph('Erarbeitung').duration>=6);assert(!s.phases.some(x=>x.game),topic+' 30: kein Spiel');
    const txt=s.phases.map(x=>x.teacher+x.scan_teacher).join(' ');assert(!/Letzte \d+ Minuten|Teil 2, Spiel|wird dasselbe Spiel/.test(txt),topic+' 30: Spielreste');
    if(group>1)assert(/Vor der Stunde aufbauen/.test(s.prepNote||''))}
  else{assert(ph('Lerncheck').duration<=8);const r2=s.phases.filter(x=>base(x.name)==='Übung');assert.equal(r2.length,2,topic+' 90: zwei Übungsrunden');
    const i=s.phases.indexOf(r2[1]);assert(base(s.phases[i-1].name)==='Ergebnissicherung'&&base(s.phases[i+1].name)==='Lerncheck');
    if(group===1)assert(!/Partner|Paare/.test(r2[1].teacher+r2[1].learners+r2[1].social),topic+' 90: Einzelkind');}
}
assert(std>n*0.8,'Zeitmodell greift bei Standardstunden ('+std+'/'+n+')');
console.log(n+' Pläne mit 30 und 90 Minuten: Summe stimmt; 30 Min. ohne Spiel mit vorbereiteten Brettern, Einstieg ≥4 und Erarbeitung ≥6; 90 Min. mit zweiter Übungsrunde nach der Sicherung, Lerncheck ≤8 ('+std+' Standardstunden).');
