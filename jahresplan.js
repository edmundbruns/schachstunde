/* Praxiswissen › Jahresplan: feste Stundenverläufe erfahrener Kolleginnen und Kollegen (45 Minuten).
   Keine Auswahl: Jede Stunde ist vorgegeben, rechts stehen Video, Arbeitsblatt und Lehrbrett.
   Daten: jahresplan-data.js (window.JahresplanData). © Dr. Edmund Bruns */
(function(){
const D=window.JahresplanData;if(!D)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if(window.Praxis&&D.collect){window.Praxis.COLLECT=window.Praxis.COLLECT||{};for(const [k,v] of Object.entries(D.collect))window.Praxis.COLLECT['jp:'+k]=v}
const lesson=w=>D.lessons.find(l=>l.week===+w);
const task=k=>D.tasks[k];
const title=w=>lesson(w)?.title||(D.later.find(x=>x[0]===+w)||[])[1]||'';
const ICON={video:'▶',blatt:'📄',brett:'♟',druck:'🖨',info:'ℹ'};
function overviewHTML(){
 const row=w=>{const has=D.fixed[w];const l=lesson(w);return `<tr><td>${w}</td><td>${has?`<button type="button" class="linklike" data-jpweek="${w}">${esc(title(w))}</button>`:esc(title(w))+(l?'':'')}</td><td>${esc(l?.ziel||'')}${has?'':' <span class="muted">(Stundenverlauf folgt)</span>'}</td></tr>`};
 return `<div id="jp-overview"><p>So planen erfahrene Kolleginnen und Kollegen ein Schuljahr Schach-AG: 36 Termine zu je 45 Minuten, für Grundschule und Oberschule. Gruppen mit Vorkenntnissen beginnen in Woche 12. Ein Klick auf eine Stunde zeigt ihren festen Ablauf mit Video, Arbeitsblatt und Lehrbrett.</p>${D.year.map(([name,[a,b]],k)=>`<h4>${k+1}. ${esc(name)} (Woche ${a} bis ${b})</h4><table class="yeartable"><thead><tr><th>Woche</th><th>Stunde</th><th>Ziel</th></tr></thead><tbody>${Array.from({length:b-a+1},(_,i)=>row(a+i)).join('')}</tbody></table>`).join('')}<p class="muted">Eigene Stunden mit freier Auswahl planst du unter „Schachstunde planen“.</p></div>`}
function boardList(w,spec){const l=lesson(w);const keys=spec==='arbeitsblatt'?l.arbeitsblatt:spec==='lerncheck'?l.lerncheck.aufgaben:spec;const pre=spec==='lerncheck'?'L':spec==='arbeitsblatt'?'U':'E';
 return keys.map((k,i)=>({...task(k),label:pre+(i+1)}))}
function linkHTML(l,w,pi,li){const ic=`<span aria-hidden="true">${ICON[l.art]||''}</span> `;
 if(l.url)return `<a class="jp-link" href="${esc(l.url)}" target="_blank" rel="noopener">${ic}${esc(l.label)}</a>`;
 return `<button type="button" class="jp-link" data-jplink="${pi}|${li}">${ic}${esc(l.label)}</button>`}
function weekHTML(w){const l=lesson(w),F=D.fixed[w];
 const rows=F.phasen.map((p,pi)=>`<tr><th scope="row">${esc(p.phase)}<span class="jp-min">${p.min} Min.</span></th><td><b>${esc(p.titel)}</b><p>${esc(p.ablauf)}</p><p class="jp-kids">Kinder: ${esc(p.kinder)}</p></td><td class="jp-links">${p.links.map((x,li)=>linkHTML(x,w,pi,li)).join('')}</td></tr>`).join('');
 return `<div class="jp-week"><div class="row"><button type="button" id="jpback">← Zum Jahresplan</button>${D.fixed[w-1]?`<button type="button" data-jpweek="${w-1}">← Woche ${w-1}</button>`:''}${D.fixed[w+1]?`<button type="button" data-jpweek="${w+1}">Woche ${w+1} →</button>`:''}</div>
 <h3>Woche ${w}: ${esc(l.title)}</h3><table class="jp-meta"><tbody><tr><th>Ziel</th><td>${esc(l.ziel)}</td></tr><tr><th>Leitfrage</th><td>${esc(l.leit)}</td></tr><tr><th>Merksatz</th><td>${esc(l.merk)}</td></tr><tr><th>Dauer</th><td>${F.dauer} Minuten</td></tr></tbody></table>
 <table class="jp-flow"><thead><tr><th>Phase</th><th>So läuft die Stunde</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table>
 <p class="muted">Quellen: ${esc(F.quelle)}.</p><div class="row"><button type="button" class="primary" id="jpprint">Stundenverlauf drucken / PDF</button></div></div>`}
const turn=fen=>fen.split(' ')[1]==='w'?'Weiß am Zug':'Schwarz am Zug';
const diagram=(B,t)=>`<div class="ws-diag">${B.boardHTML(new B.Chess(t.fen),false)}</div>`;
const head=(t,sub,fields)=>`<div class="ws-head"><div><h1>${esc(t)}</h1><p>${esc(sub)}</p></div>${fields?'<div class="ws-fields"><span>Name<i></i></span><span>Datum<i class="s"></i></span></div>':''}</div>`;
const card=(B,t,label,solution)=>`<div class="ws-card"><div class="ws-card-head"><b>${esc(label)}</b><span class="ws-badge">${turn(t.fen)}</span></div><div class="ws-card-body">${diagram(B,t)}<div class="ws-answer"><p class="ws-prompt">${esc(t.work)}</p>${solution?`<p class="ws-label">Lösung: ${esc(t.answer)}</p><p class="ws-src">${esc(t.src)}</p>`:'<p class="ws-label">Meine Antwort:</p><div class="ws-line"></div><div class="ws-line"></div>'}</div></div></div>`;
function printLesson(B,w){const l=lesson(w),F=D.fixed[w];
 const rows=F.phasen.map(p=>`<tr><td><b>${esc(p.phase)}</b><br>${p.min} Min.</td><td><b>${esc(p.titel)}</b><br>${esc(p.ablauf)}<br><i>Kinder: ${esc(p.kinder)}</i></td><td>${p.links.map(x=>esc(x.label)).join('<br>')}</td></tr>`).join('');
 const boards=F.phasen.flatMap(p=>p.links.filter(x=>x.art==='brett').map(x=>[p.phase,boardList(w,x.aufgaben)]));
 return B.sheetCSS('Jahresplan Woche '+w)+`<section class="ws-page">${head('Woche '+w+': '+l.title,'Stundenverlauf, '+F.dauer+' Minuten')}<p><b>Ziel:</b> ${esc(l.ziel)}<br><b>Leitfrage:</b> ${esc(l.leit)}<br><b>Merksatz:</b> ${esc(l.merk)}</p><table class="ws-table"><thead><tr><th>Phase</th><th>Ablauf</th><th>Material</th></tr></thead><tbody>${rows}</tbody></table><p class="ws-src">Quellen: ${esc(F.quelle)}. © Dr. Edmund Bruns</p></section><section class="ws-page">${head('Stellungen am Lehrbrett','Woche '+w+' · mit Lösungen')}${boards.map(([ph,list])=>`<h2 class="ws-part">${esc(ph)}</h2><div class="ws-grid">${list.map(t=>card(B,t,t.label,true)).join('')}</div>`).join('')}</section>`}
function printSheet(B,w){const l=lesson(w),list=l.arbeitsblatt.map(task);
 const hints=list.map((t,i)=>`<tr><td><b>${i+1}</b></td><td>${esc(t.hints[0])}</td><td>${esc(t.hints[1])}</td></tr>`).join('');
 return B.sheetCSS('Arbeitsblatt Woche '+w)+`<section class="ws-page">${head(l.title,'Arbeitsblatt Woche '+w,true)}<div class="ws-grid">${list.map((t,i)=>card(B,t,'Aufgabe '+(i+1))).join('')}</div></section><section class="ws-page">${head('Hilfekarten','Erst selbst probieren, dann Hilfe 1, dann Hilfe 2.')}<table class="ws-table"><thead><tr><th>Aufgabe</th><th>Hilfe 1</th><th>Hilfe 2</th></tr></thead><tbody>${hints}</tbody></table><p class="ws-cut">✂ Hilfen ausschneiden und verdeckt auslegen.</p></section><section class="ws-page">${head('Lösungen','Woche '+w+' · für die Lehrkraft')}<ol>${list.map(t=>`<li>${esc(t.answer)} <span class="ws-src">(${esc(t.src)})</span></li>`).join('')}</ol><p class="ws-src">© Dr. Edmund Bruns</p></section>`}
function printCheck(B,w){const l=lesson(w),list=l.lerncheck.aufgaben.map(task);
 return B.sheetCSS('Lerncheck Woche '+w)+`<section class="ws-page">${head('Lerncheck: '+l.title,'Woche '+w+' · allein lösen',true)}<div class="ws-grid">${list.map((t,i)=>card(B,t,'L'+(i+1))).join('')}</div></section><section class="ws-page">${head('Lösungen Lerncheck','Woche '+w+' · für die Lehrkraft')}<ol>${list.map(t=>`<li>${esc(t.answer)}</li>`).join('')}</ol></section>`}
let B0=null;
function show(w){const B=B0;document.getElementById('plannerbody').innerHTML=weekHTML(w);const F=D.fixed[w];
 const back=()=>{show(w)};
 document.querySelectorAll('[data-jplink]').forEach(b=>b.onclick=()=>{const [pi,li]=b.dataset.jplink.split('|').map(Number);const x=F.phasen[pi].links[li];
  if(x.art==='brett')B.openBoard(boardList(w,x.aufgaben),lesson(w).leit,back,'← Zurück zu Woche '+w);
  else if(x.art==='druck')B.printContent(x.was==='lerncheck'?printCheck(B,w):printSheet(B,w))});
 document.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek));
 document.getElementById('jpback').onclick=()=>{B.back();setTimeout(()=>document.getElementById('px-year')?.scrollIntoView(),0)};
 document.getElementById('jpprint').onclick=()=>B.printContent(printLesson(B,w));scrollTo(0,0)}
function mount(B){B0=B;const sec=document.getElementById('px-year');if(!sec)return;sec.querySelectorAll('[data-jpweek]').forEach(b=>b.onclick=()=>show(+b.dataset.jpweek))}
window.Jahresplan={mount,show,overviewHTML,data:D,_print:{printLesson,printSheet,printCheck}};
})();
