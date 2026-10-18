import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {Chess} from './dist/assets/chess.mjs';
const ctx={window:{},console,atob};vm.createContext(ctx);for(const f of ['runtime-data','planner-core','curriculum','lesson-units','next-topics','quality','labyrinth','method-catalog','teaching-support'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx);
const W=ctx.window,C=W.PlannerCore,U=W.LessonUnits,R=W.LessonRefinement.own,Q=W.PlanningQuality.own,E=W.PlanningExtensions.exercises,pz=JSON.parse(fs.readFileSync('dist/assets/puzzles.json'));
const play=(fen,sans)=>{const g=new Chess(fen);for(const m of sans)g.move(m);return g};
const canTake=(g,sq)=>g.moves({verbose:true}).some(m=>m.to===sq);
const mates=fen=>new Chess(fen).moves().filter(m=>m.includes('#'));
// Bauernendspiel: Zugrecht entscheidet tatsächlich
const eg=R.endgame;assert(!canTake(play(eg[1].fen,['a5','Ke5','a6','Kd6','a7','Kc7','a8=Q']),'a8'));
assert(canTake(play(eg[3].fen,['Ke5','a5','Kd6','a6','Kc7','a7','Kb7','a8=Q+']),'a8'));
assert(canTake(play(eg[5].fen,['a5','Kd6','a6','Kc7','a7','Kb7','a8=Q+']),'a8'));
assert(!canTake(play(eg[6].fen,['b5','Kf6','b6','Ke7','b7','Kd7','b8=Q']),'b8'));
// Turmendspiel: kein sofortiges Matt in der Grundstellung, Fehlerbeispiel ist Matt, Lerncheck sicher
const re=R.rookend;for(const fen of [re[0].fen,re[0].fen.replace(' w ',' b '),re[6].fen])assert.deepEqual(mates(fen),[]);
assert(play(re[5].fen,['Rb7','Ra1+','Rb1','Rxb1#']).isCheckmate());assert(!play(re[6].fen,['Rd7','Rc1+','Kg2']).isGameOver());
// Planung: Material ausgeglichen
const count=(fen,c)=>new Chess(fen).board().flat().filter(p=>p&&p.color===c).map(p=>p.type).sort().join('');for(const x of R.planning)assert.equal(count(x.fen,'w'),count(x.fen,'b'));
// Schach: alle drei Abwehrarten kommen vor, inklusive Schlagen und Springerschach
const ch=R.check;assert(ch.every(x=>new Chess(x.fen).inCheck()));assert(ch.some(x=>new Chess(x.fen).moves({verbose:true}).some(m=>m.captured&&m.piece!=='k')));assert(ch.some(x=>{const g=new Chess(x.fen);return g.board().flat().some(p=>p?.type==='n'&&p.color==='b')}));
// Umwandlung
const pr=E.promotion;for(const x of pr){const g=new Chess(x.fen);for(const m of x.checks)assert(new Chess(x.fen).move({from:m.slice(0,2),to:m.slice(2,4),promotion:m[4]}),x.id+m)}
assert(!new Chess(pr[2].fen).moves({verbose:true}).some(m=>m.promotion));
const st=new Chess(pr[5].fen);st.move({from:'c7',to:'c8',promotion:'q'});assert(st.isStalemate());const rk=new Chess(pr[5].fen);rk.move({from:'c7',to:'c8',promotion:'r'});assert(!rk.isGameOver());
const kn=new Chess(pr[4].fen);kn.move({from:'f7',to:'f8',promotion:'n'});assert(kn.inCheck());const qn=new Chess(pr[4].fen);qn.move({from:'f7',to:'f8',promotion:'q'});assert(!qn.inCheck());
assert(new Set(pr.map(x=>x.fen)).size===7);
// Notation: gelesene Folgen legal
for(const x of E.notation)if(x.line)play(x.fen,x.line);
// Doppelschach: Abzug erzeugt zwei Schachgeber, Scheinabwehren illegal
for(const x of Q.doublecheck){const g=new Chess(x.fen);for(const m of x.forbidden||[])assert(!g.moves({verbose:true}).some(z=>z.from+z.to===m));if(x.discover)for(const m of x.checks){const h=new Chess(x.fen);h.move({from:m.slice(0,2),to:m.slice(2,4)});const k=h.board().flat().find(p=>p?.type==='k'&&p.color==='b');assert.equal(h.attackers(k.square,'w').length,2)}}
// Figurenwege: Springer springt wirklich über Figuren
const mv=U.own.moves[3];assert(new Chess(mv.fen).moves({square:'g1'}).includes('Nf3'));assert.equal(new Chess(mv.fen).get('g2')?.type,'p');
// Labyrinth Grundlagen: Lerncheck verlangt einen neuen Weg
const L=W.Labyrinth,paths=L.tasks['maze-basic'].map(t=>L.solve(t.labyrinth).map(m=>m.to).join('>'));assert(!paths.slice(0,6).includes(paths[6]));assert(new Set(paths).size>=6);
// Stundenentwürfe: keine fremden Methodentexte, keine doppelten Sätze, Rückblick in Reihen, Check im Übungsband
const foreign={castling:/Rochade/,promotion:/Umwandlung/,enpassant:/Entfernungsfeld/,exchange:/Materialsaldo/};const ok=new Set(['opening','endgame','promotion','castling','enpassant','exchange','pawn','notation','defend','hangingPiece']);
const R2=id=>+pz.find(x=>x.PuzzleId===id).Rating;
for(const u of U.units){const p=U.create(u,pz);p.sessions.forEach((s,i)=>{for(const ph of s.phases){const t=ph.teacher+' '+ph.learners;if(!ok.has(s.topic))for(const re of Object.values(foreign))assert(!re.test(t),u.id+' '+ph.name+' '+t.slice(0,80));const sent=t.split(/(?<=[.!?“])\s+/).filter(x=>x.length>25);assert.equal(new Set(sent).size,sent.length,u.id+' doppelter Satz in '+ph.name)}
 if(i>0)assert(s.phases.find(ph=>ph.name.startsWith('Einstieg')).teacher.includes('Rückblick, etwa'),u.id+' ohne Rückblick');
 if(!s.exercises){const r=s.puzzleIds.map(R2);assert(R2(s.checkId)>=Math.min(...r)&&R2(s.checkId)<=Math.max(...r),u.id+' Check außerhalb des Übungsbands')}})}
const calc=C.generate({...C.defaultSettings(),topic:'calculation',level:'Fortgeschrittene'},pz).sessions[0];assert(calc.puzzleIds.every(id=>pz.find(x=>x.PuzzleId===id).category!=='mateIn2'));
for(const m of C.methods)if(m.genericSteps)for(const re of Object.values(foreign))assert(!re.test(m.instruction),m.id);
console.log('Fachprüfung: Endspiel-Zugrecht, Turmendspiel ohne Grundreihenmatt, Planungsmaterial, Schachabwehr, Umwandlung, Notation, Doppelschach, Springersprung, Labyrinthwege, Methodentexte, Doppelungen, Rückblick und Check-Schwierigkeit geprüft.');

// Stundenmodell: Zeit, Spielphase, gestufte Übung, Hilfen, Aufhänger, Reflexion
const M=W.LessonModel;for(const g of Object.values(M.games)){const x=new Chess(g[1]);assert(!x.inCheck());assert(!new Chess(g[1].replace(' w ',' b ')).inCheck())}
for(const u of U.units){const p=U.create(u,pz);for(const s of p.sessions){if(!M.games[s.topic])continue;const by=n=>s.phases.find(ph=>ph.name===n||ph.name.startsWith(n));
 assert.equal(s.phases.reduce((n,x)=>n+x.duration,0),s.duration);if(s.duration>=45)assert(by('Einstieg').duration>=7,u.id+' Einstieg mit Ankommen zu kurz');assert(!s.phases.some(ph=>ph.name==='Aufbau'));
 assert(by('Übung').game&&!s.phases.some(ph=>ph.name==='Anwendung')&&s.phases.length===6,u.id+' Spiel in der Übung, sechs Phasen');assert(by('Übung').learners.includes('Expertenaufgabe'));assert(by('Einstieg').teacher.includes('Aufhänger'));
 assert(by('Lerncheck').learners.includes('Daumen'));if(by('Ergebnissicherung'))assert(by('Ergebnissicherung').teacher.startsWith('Fehler der Stunde'));
 if(s.exercises)s.exercises.slice(0,6).forEach(x=>assert(x.hints?.length===3,u.id+' Hilfekarten '+x.id))}}
const fk=U.create(U.units.find(x=>x.id==='unit-fork'),pz).sessions[0];assert(fk.exercises&&fk.phases.find(p=>p.name==='Übung').puzzleIds.length===3);
for(const x of M.forkOwn)for(const m of x.checks){const g=new Chess(x.fen);const mv=g.move({from:m.slice(0,2),to:m.slice(2,4)});if(x.id.endsWith('-5'))continue;const targets=g.moves({verbose:true});const h=new Chess(g.fen().replace(' b ',' w '));const att=h.moves({verbose:true}).filter(z=>z.from===mv.to&&z.captured).length+(g.inCheck()?1:0);assert(att>=2,x.id+' keine Gabel')}
const fs4=C.generate({...C.defaultSettings(),topic:'fork',type:'series',count:3},pz).sessions;assert(fs4[0].exercises&&!fs4[1].exercises&&fs4[1].checkId);
console.log('Stundenmodell: Zeitmodell, Spielphase, Pflicht- und Expertenaufgaben, Hilfekarten, Aufhänger, Fehler der Stunde, Selbsteinschätzung und Gabel-Material geprüft.');

// Kontrastpaare: A und B unterscheiden sich in der Antwort
const K=M.contrast,can=(fen,from,to,promo)=>{try{return !!new Chess(fen).move({from,to,...(promo?{promotion:promo}:{})})}catch{return false}},fen=(t,i)=>K[t][i][0];
assert(can(fen('moves',0),'a1','a5')&&!can(fen('moves',1),'a1','a5'));assert(can(fen('pawn',0),'e2','d3')&&!can(fen('pawn',1),'e2','d3'));
assert(!play(fen('defend',0),['dxe4']).moves().some(m=>m.includes('xe4'))&&play(fen('defend',1),['dxe4']).moves().includes('dxe4'));
assert(can(fen('check',0),'e1','e2')&&!can(fen('check',1),'e1','e2'));assert(play(fen('mateIn1',0),['Ra8+']).isCheckmate()&&!play(fen('mateIn1',1),['Ra8+']).isCheckmate());
assert(!play(fen('hangingPiece',0),['Rxd4']).moves().some(m=>m.includes('xd4'))&&play(fen('hangingPiece',1),['Rxd4']).moves().includes('exd4'));
assert(!new Chess(fen('pin',0)).moves({square:'e7'}).length&&new Chess(fen('pin',1)).moves({square:'e7'}).length);
assert(can(fen('castling',0),'e1','g1')&&!can(fen('castling',1),'e1','g1'));assert(can(fen('promotion',0),'a7','a8','q')&&!new Chess(fen('promotion',1)).moves({verbose:true}).some(m=>m.promotion));
assert(new Chess(fen('stalemate',0)).isCheckmate()&&new Chess(fen('stalemate',1)).isStalemate());assert(can(fen('enpassant',0),'e5','d6')&&!can(fen('enpassant',1),'e5','d6'));
assert(can(fen('doublecheck',0),'a7','e7')&&!can(fen('doublecheck',1),'a7','e7'));
assert(!play(fen('exchange',0),['Qxc3']).moves().some(m=>m.includes('xc3'))&&play(fen('exchange',1),['Qxc3']).moves().includes('dxc3'));
assert(!play(fen('endgame',0),['a5','Ke5','a6','Kd6','a7','Kc7','a8=Q']).moves({verbose:true}).some(m=>m.to==='a8')&&play(fen('endgame',1),['Ke5','a5','Kd6','a6','Kc7','a7','Kb7','a8=Q+']).moves().includes('Kxa8'));
assert(play(fen('rookend',0),['Rb7','Ra1+','Rb1','Rxb1#']).isCheckmate()&&!play(fen('rookend',1),['Rb7','Ra1+','Kh2']).isGameOver());
for(const t of Object.keys(K)){const u=U.units.find(x=>x.topics[0]===t&&x.topics.length===1);const er=U.create(u,pz).sessions[0].phases.find(ph=>ph.name==='Erarbeitung');assert(er.contrast?.items.length===2&&er.teacher.startsWith('Kontrastpaar'),t)}
console.log('15 Kontrastpaare: Stellungen und unterschiedliche Antworten mit chess.js geprüft.');
// Kompakter Plan: keine Wiederholungen über Phasen, keine Schablonentexte, konkrete Lehrkrafthandlung
for(const u of U.units){const p=U.create(u,pz);for(const s of p.sessions){const rep=k=>s.phases.map(ph=>ph[k]).filter(Boolean);for(const k of ['material','diff','check']){const v=rep(k);assert.equal(new Set(v).size,v.length,u.id+' wiederholt '+k)}
 for(const ph of s.phases){assert(ph.scan_teacher&&ph.scan_teacher.length>15&&!/^\d+\.$/.test(ph.scan_teacher),u.id+' '+ph.name+' Kurztext');if(!ph.name.startsWith('Lerncheck'))assert.notEqual(ph.method,'exit',u.id+' '+ph.name+' Methode exit')}
 assert.equal(s.phases.reduce((n,x)=>n+x.duration,0),s.duration)}}
const mb=U.create(U.units.find(x=>x.id==='unit-maze-build'),pz).sessions[0];assert.equal(mb.phases.map(x=>x.duration).join('/'),'7/5/15/5/8/5');
console.log('Kompakter Verlaufsplan: keine wiederholten Material-, Differenzierungs- und Prüftexte, Kurztexte je Phase, Labyrinth 7/5/15/5/8/5 geprüft.');
// Neue, unterschiedliche Stellungen: Zugfolgen aus den Lösungstexten
{const d=R.defend,o=R.opening,e=R.endgame,r=R.rookend,p=R.planning;
assert(canTake(play(d[1].fen,['dxe4']),'e4'));assert(canTake(play(d[2].fen,['fxg4']),'g4'));assert(canTake(play(d[3].fen,['cxd4']),'d4'));assert(canTake(play(d[4].fen,['Nxe4']),'e4'));assert(!canTake(play(d[5].fen,['dxe4']),'e4'));
assert(canTake(play(o[3].fen,['Nxe5']),'e5'));
assert(play(e[4].fen,['Kd5','h5','Ke6','h6','Kf7','h7','Kg7','h8=Q+','Kxh8']).board().flat().filter(Boolean).length===2);assert(!canTake(play(e[4].fen.replace(' b ',' w '),['h5','Kd6','h6','Ke7','h7','Kf7','h8=Q']),'h8'));
assert.deepEqual(new Chess(r[3].fen).moves(),['Kh2']);for(const x of r)assert(!new Chess(x.fen).isGameOver());
assert(canTake(play(p[4].fen,['Be3']),'f3'));
const all=Object.values(R).flat().concat(Object.values(U.own).flat());for(const x of all){const g=new Chess(x.fen),legal=g.moves({verbose:true}).map(m=>m.from+m.to+(m.promotion||''));for(const c of [...(x.checks||[]),...(x.solution||[])])assert(legal.includes(c),x.id+' '+c);for(const sq of x.targets||[])assert(g.get(sq)&&g.get(sq).color!==g.turn(),x.id+' '+sq)}
console.log('Unterschiedliche Stellungen und hinterlegte Lösungszüge geprüft')}
// Mindestens sechs unterschiedliche Aufgaben je Thema (Arbeitsblatt mit 6 Aufgaben)
{const seen={};for(const unit of U.units){for(const s of U.create(unit,pz).sessions){if(seen[s.topic])continue;const ex=s.exercises?.length?s.exercises:[...(s.puzzleIds||[]),s.checkId].filter(Boolean).map(id=>({PuzzleId:id}));const key=e=>e.PuzzleId||(e.fen?e.fen.split(' ')[0]+(s.topic==='endgame'?' '+e.fen.split(' ')[1]:''):JSON.stringify(e));seen[s.topic]=1;assert(ex.length>=6,s.topic);assert.equal(new Set(ex.slice(0,6).map(key)).size,6,s.topic)}}console.log(Object.keys(seen).length+' Themen: je mindestens sechs unterschiedliche Aufgaben geprüft')}
// Methodenbeispiele passen zur angezeigten Stellung; eigene Gabelaufgaben haben geprüfte Lösungsfolgen
{const T=W.TeachingSupport,M=C.methods;const ex=id=>T.example(M.find(m=>m.id===id),pz);
const has=(id,sq,type,color)=>{const x=ex(id),p=new Chess(x.fen).get(sq);assert(p&&p.type===type&&p.color===color,id+' '+sq)};
has('repair','g1','n','w');has('worked','d3','p','b');has('worked','e2','p','w');has('koffer-schachpuzzlebild','d2','p','b');has('debate','a1','r','w');has('retrieval','a7','p','w');has('koffer-kopfstand','f5','k','b');has('koffer-kopfstand','a5','p','w');
assert(M.find(m=>m.id==='repair').quickSteps[0].includes('g1'));assert(M.find(m=>m.id==='debate').quickSteps[0].includes('Ta2'));
for(const x of R.fork.filter(x=>x.lines))for(const l of x.lines){const g=new Chess(x.fen);for(const u of l)assert(g.move({from:u.slice(0,2),to:u.slice(2,4)}),x.id+' '+u);assert(g.history({verbose:true}).at(-1).captured,x.id)}
console.log('Methodenbeispiele und Gabel-Lösungsfolgen geprüft')}
