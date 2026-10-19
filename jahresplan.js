/* Praxiswissen › Jahresplan mit Material-Pools. Die Lehrkraft wählt je Phase Bausteine und Brettaufgaben aus.
   Daten: jahresplan-data.js (window.JahresplanData). © Dr. Edmund Bruns */
(function(){
const D=window.JahresplanData;if(!D)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const PH=[['einstieg','Einstieg','E0'],['erarbeitung','Erarbeitung','E'],['uebung','Übung','U'],['sicherung','Sicherung','S'],['lerncheck','Lerncheck','L'],['ausblick','Ausblick und Wiederholung','A']];
const KEY='schachstunde-jahresplan-v1';
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
const save=st=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
// Mehrfachantworten (alle Felder einer Figur) für das Lehrbrett bekannt machen
if(window.Praxis&&D.collect){window.Praxis.COLLECT=window.Praxis.COLLECT||{};for(const [k,v] of Object.entries(D.collect))window.Praxis.COLLECT['jp:'+k]=v}
const lesson=w=>D.lessons.find(l=>l.week===+w);
const task=k=>D.tasks[k];
const stage=w=>w<=11?'Bronze':w<=25?'Silber':'Gold';
const pick=(st,w)=>(st[w]??={b:{},t:{}});
function overviewHTML(){
 const rows=D.lessons.map(l=>`<tr><td>${l.week}</td><td><button type="button" class="linklike" data-jpweek="${l.week}">${esc(l.title)}</button></td><td>${esc(l.diplom)}</td><td>${esc(l.ziel)}</td></tr>`).join('');
 return `<div class="jp-intro"><p><b>Neu: Material-Pools.</b> Zu jeder Stunde gibt es je Phase eine Auswahl an Bausteinen und Brettaufgaben. Du stellst deine Stunde selbst zusammen. Die Minuten sind Richtwerte. Ein Plan für Grundschule und Oberschule; Gruppen mit Vorkenntnissen starten in Woche 12.</p></div><h4>Bronze: Brett, Figuren, Schach und Matt (Material-Pools)</h4><table class="yeartable"><thead><tr><th>Woche</th><th>Stunde</th><th>Diplom</th><th>Ziel</th></tr></thead><tbody>${rows}</tbody></table><p class="muted">Silber und Gold folgen als nächste Pakete. Bis dahin gilt für die Wochen 12 bis 36 die Übersicht darunter.</p>`}
function taskLine(k,no,phase,w,checked,exclusive){const t=task(k);if(!t)return '';
 return `<li class="jp-task"><label><input type="checkbox" data-jpt="${esc(phase+'|'+k)}" ${checked?'checked':''}> <b>${esc(no)}</b> ${esc(t.work)}</label> <button type="button" class="jp-board" data-jpboard="${esc(phase+'|'+k)}">Lehrbrett</button><div class="jp-src">${esc(t.src)}${t.umgebaut?' · umgebaut':''}${exclusive?' · nur im Lerncheck':''}</div></li>`}
function bausteinCard(b,id,checked){return `<li class="jp-bs"><label><input type="checkbox" data-jpb="${esc(id)}" ${checked?'checked':''}> <b>${esc(b.titel)}</b> <span class="jp-art">${esc(b.art)}</span> <span class="jp-min">ca. ${b.zeit} Min.</span></label><p><span class="jp-who">Lehrkraft:</span> ${esc(b.lk)}</p><p><span class="jp-who">Lernende:</span> ${esc(b.ln)}</p><p class="jp-mat">Material: ${esc(b.material)}${b.link?` · <a href="${esc(b.link)}" target="_blank" rel="noopener">öffnen</a>`:''}</p></li>`}
function weekHTML(w){const l=lesson(w),st=pick(load(),w);
 const phases=PH.map(([p,name,pre])=>{const pool=p==='einstieg'?{bausteine:l.einstieg,aufgaben:[]}:l[p];
  const bs=pool.bausteine.map((b,i)=>bausteinCard(b,p+'|'+i,st.b[p+'|'+i])).join('');
  const ts=pool.aufgaben.map((k,i)=>taskLine(k,pre+(i+1),p,w,st.t[p+'|'+k],p==='lerncheck')).join('');
  return `<details class="jp-phase" data-jpphase="${p}" ${(OPEN[w]?OPEN[w].has(p):p==='einstieg')?'open':''}><summary><b>${name}</b> <span class="muted">${pool.bausteine.length} Bausteine${pool.aufgaben.length?', '+pool.aufgaben.length+' Brettaufgaben':''}</span></summary>${pool.note?`<p class="muted">${esc(pool.note)}</p>`:''}<ul class="jp-list">${bs}</ul>${ts?`<h5>Brettaufgaben</h5><div class="row"><button type="button" data-jpall="${p}">Alle am Lehrbrett zeigen</button></div><ul class="jp-list">${ts}</ul>`:''}</details>`}).join('');
 return `<div class="jp-week"><div class="row"><button type="button" id="jpback">← Zum Jahresplan</button>${w>1?`<button type="button" data-jpweek="${w-1}">← Woche ${w-1}</button>`:''}${lesson(w+1)?`<button type="button" data-jpweek="${w+1}">Woche ${w+1} →</button>`:''}</div>
 <h3>Woche ${w}: ${esc(l.title)}</h3><table class="jp-meta"><tbody><tr><th>Diplom</th><td>${esc(l.diplom)}</td></tr><tr><th>Ziel</th><td>${esc(l.ziel)}</td></tr><tr><th>Leitfrage</th><td>${esc(l.leit)}</td></tr><tr><th>Merksatz</th><td>${esc(l.merk)}</td></tr><tr><th>Voraussetzung</th><td>${esc(l.voraus)}</td></tr><tr><th>Quellen</th><td>${esc(l.quelle)}</td></tr></tbody></table>
 <p>Wähle je Phase aus, was du nutzen willst. Deine Auswahl bleibt in diesem Browser gespeichert.</p>${phases}
 <div class="jp-mine"><h4>Meine Stunde</h4><div id="jpsummary"></div><div class="row"><button type="button" class="primary" id="jpprint">Meine Stunde drucken / PDF</button><button type="button" id="jpsheet">Arbeitsblatt (6 Aufgaben, 2 Hilfen)</button><button type="button" id="jpclear">Auswahl leeren</button></div></div></div>`}
function summary(w){const l=lesson(w),st=pick(load(),w);let min=0;const out=[];
 for(const [p,name,pre] of PH){const pool=p==='einstieg'?{bausteine:l.einstieg,aufgaben:[]}:l[p];
  const bs=pool.bausteine.filter((b,i)=>st.b[p+'|'+i]);const ts=pool.aufgaben.map((k,i)=>[k,pre+(i+1)]).filter(([k])=>st.t[p+'|'+k]);
  if(!bs.length&&!ts.length)continue;min+=bs.reduce((n,b)=>n+(+b.zeit||0),0);out.push({p,name,bs,ts})}
 return {min,out}}
function summaryHTML(w){const {min,out}=summary(w);if(!out.length)return '<p class="muted">Noch nichts ausgewählt.</p>';
 return `<p>Richtwert: etwa <b>${min} Minuten</b> (nur Bausteine, ohne Spielzeit am Brett).</p><ol>${out.map(x=>`<li><b>${esc(x.name)}:</b> ${x.bs.map(b=>esc(b.titel)+' ('+b.zeit+' Min.)').join(', ')}${x.ts.length?(x.bs.length?'; ':'')+'Aufgaben '+x.ts.map(t=>t[1]).join(', '):''}</li>`).join('')}</ol>`}
function boardTasks(p,w){const l=lesson(w),pre=PH.find(x=>x[0]===p)[2];return l[p].aufgaben.map((k,i)=>({...task(k),label:pre+(i+1)}))}
function diagram(B,t){return `<div class="ws-diag">${B.boardHTML(new B.Chess(t.fen),false)}</div>`}
const turn=fen=>fen.split(' ')[1]==='w'?'Weiß am Zug':'Schwarz am Zug';
function printLesson(B,w){const l=lesson(w),{min,out}=summary(w);
 const body=out.map(x=>`<h2 class="ws-part">${esc(x.name)}</h2>${x.bs.map(b=>`<p><b>${esc(b.titel)}</b> (${esc(b.art)}, ca. ${b.zeit} Min.)<br>Lehrkraft: ${esc(b.lk)}<br>Lernende: ${esc(b.ln)}<br>Material: ${esc(b.material)}</p>`).join('')}${x.ts.length?`<div class="ws-grid">${x.ts.map(([k,no])=>{const t=task(k);return `<div class="ws-card"><div class="ws-card-head"><b>${esc(no)}</b><span class="ws-badge">${turn(t.fen)}</span></div><div class="ws-card-body">${diagram(B,t)}<div class="ws-answer"><p class="ws-prompt">${esc(t.work)}</p><p class="ws-label">Lösung: ${esc(t.answer)}</p><p class="ws-src">${esc(t.src)}</p></div></div></div>`}).join('')}</div>`:''}`).join('');
 return B.sheetCSS('Jahresplan Woche '+w)+`<section class="ws-page"><div class="ws-head"><div><h1>Woche ${w}: ${esc(l.title)}</h1><p>${esc(l.diplom)} · Richtwert etwa ${min} Minuten</p></div></div><p><b>Ziel:</b> ${esc(l.ziel)}<br><b>Leitfrage:</b> ${esc(l.leit)}<br><b>Merksatz:</b> ${esc(l.merk)}</p>${body||'<p>Noch nichts ausgewählt.</p>'}<p class="ws-src">© Dr. Edmund Bruns · Material von edmundbruns.com</p></section>`}
function printSheet(B,w){const l=lesson(w),list=l.arbeitsblatt.map(task);
 const card=(t,i)=>`<div class="ws-card"><div class="ws-card-head"><b>Aufgabe ${i+1}</b><span class="ws-badge">${turn(t.fen)}</span></div><div class="ws-card-body">${diagram(B,t)}<div class="ws-answer"><p class="ws-prompt">${esc(t.work)}</p><p class="ws-label">Meine Antwort:</p><div class="ws-line"></div><div class="ws-line"></div></div></div></div>`;
 const hints=list.map((t,i)=>`<tr><td><b>${i+1}</b></td><td>${esc(t.hints[0])}</td><td>${esc(t.hints[1])}</td></tr>`).join('');
 const sol=list.map((t,i)=>`<li>${esc(t.answer)} <span class="ws-src">(${esc(t.src)})</span></li>`).join('');
 const head=(t,sub)=>`<div class="ws-head"><div><h1>${esc(t)}</h1><p>${esc(sub)}</p></div><div class="ws-fields"><span>Name<i></i></span><span>Datum<i class="s"></i></span></div></div>`;
 return B.sheetCSS('Arbeitsblatt Woche '+w)+`<section class="ws-page">${head(l.title,'Arbeitsblatt Woche '+w+' · '+l.diplom)}<div class="ws-grid">${list.map(card).join('')}</div></section><section class="ws-page">${head('Hilfekarten','Erst selbst probieren, dann Hilfe 1, dann Hilfe 2.')}<table class="ws-table"><thead><tr><th>Aufgabe</th><th>Hilfe 1</th><th>Hilfe 2</th></tr></thead><tbody>${hints}</tbody></table><p class="ws-cut">✂ Hilfen ausschneiden und verdeckt auslegen.</p></section><section class="ws-page">${head('Lösungen','Woche '+w+' · für die Lehrkraft')}<ol>${sol}</ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
let B0=null;const OPEN={};
function bind(B,w){const host=document.getElementById('plannerbody');
 const refresh=()=>{const s=document.getElementById('jpsummary');if(s)s.innerHTML=summaryHTML(w)};refresh();
 host.querySelectorAll('[data-jpphase]').forEach(d=>d.ontoggle=()=>{OPEN[w]=new Set([...host.querySelectorAll('[data-jpphase]')].filter(x=>x.open).map(x=>x.dataset.jpphase))});
 host.querySelectorAll('[data-jpb]').forEach(c=>c.onchange=()=>{const st=load(),x=pick(st,w);x.b[c.dataset.jpb]=c.checked;save(st);refresh()});
 host.querySelectorAll('[data-jpt]').forEach(c=>c.onchange=()=>{const st=load(),x=pick(st,w);x.t[c.dataset.jpt]=c.checked;save(st);refresh()});
 const back=()=>{show(w);const el=document.querySelector('.jp-week');if(el)el.scrollIntoView()};
 host.querySelectorAll('[data-jpboard]').forEach(b=>b.onclick=()=>{const [p,k]=b.dataset.jpboard.split('|');const list=boardTasks(p,w);const i=lesson(w)[p].aufgaben.indexOf(k);B.openBoard([...list.slice(i),...list.slice(0,i)],lesson(w).leit,back,'← Zurück zu Woche '+w)});
 host.querySelectorAll('[data-jpall]').forEach(b=>b.onclick=()=>B.openBoard(boardTasks(b.dataset.jpall,w),lesson(w).leit,back,'← Zurück zu Woche '+w));
 host.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek));
 document.getElementById('jpback').onclick=()=>{B.back();setTimeout(()=>document.getElementById('px-year')?.scrollIntoView(),0)};
 document.getElementById('jpprint').onclick=()=>B.printContent(printLesson(B,w));
 document.getElementById('jpsheet').onclick=()=>B.printContent(printSheet(B,w));
 document.getElementById('jpclear').onclick=()=>{const st=load();delete st[w];save(st);show(w)}}
function show(w){const B=B0;document.getElementById('plannerbody').innerHTML=weekHTML(w);bind(B,w);scrollTo(0,0)}
function mount(B){B0=B;const sec=document.getElementById('px-year');if(!sec)return;const h=sec.querySelector('h3');h.insertAdjacentHTML('afterend',overviewHTML());sec.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek))}
window.Jahresplan={mount,show,data:D,_print:{printLesson,printSheet}};
})();
